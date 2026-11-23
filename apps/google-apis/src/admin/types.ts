type OsUpdateStatus = {
  rebootTime?: string | undefined
  state?:
    | 'updateStateUnspecified'
    | 'updateStateNotStarted'
    | 'updateStateDownloadInProgress'
    | 'updateStateNeedReboot'
    | undefined
  targetKioskAppVersion?: string | undefined
  targetOsVersion?: string | undefined
  updateCheckTime?: string | undefined
  updateTime?: string | undefined
}
type ChromeOsDevice = {
  activeTimeRanges?: { activeTime?: number | undefined; date?: string | undefined }[] | undefined
  annotatedAssetId?: string | undefined
  annotatedLocation?: string | undefined
  annotatedUser?: string | undefined
  autoUpdateExpiration?: string | undefined
  bootMode?: string | undefined
  cpuInfo?:
    | {
        architecture?: string | undefined
        logicalCpus?:
          | {
              cStates?:
                | { displayName?: string | undefined; sessionDuration?: string | undefined }[]
                | undefined
              currentScalingFrequencyKhz?: number | undefined
              idleDuration?: string | undefined
              maxScalingFrequencyKhz?: number | undefined
            }[]
          | undefined
        maxClockSpeedKhz?: number | undefined
        model?: string | undefined
      }[]
    | undefined
  cpuStatusReports?:
    | {
        cpuTemperatureInfo?:
          | { label?: string | undefined; temperature?: number | undefined }[]
          | undefined
        cpuUtilizationPercentageInfo?: number[] | undefined
        reportTime?: string | undefined
      }[]
    | undefined
  deprovisionReason?:
    | 'DEPROVISION_REASON_UNSPECIFIED'
    | 'DEPROVISION_REASON_SAME_MODEL_REPLACEMENT'
    | 'DEPROVISION_REASON_UPGRADE'
    | 'DEPROVISION_REASON_DOMAIN_MOVE'
    | 'DEPROVISION_REASON_SERVICE_EXPIRATION'
    | 'DEPROVISION_REASON_OTHER'
    | 'DEPROVISION_REASON_DIFFERENT_MODEL_REPLACEMENT'
    | 'DEPROVISION_REASON_RETIRING_DEVICE'
    | 'DEPROVISION_REASON_UPGRADE_TRANSFER'
    | 'DEPROVISION_REASON_NOT_REQUIRED'
    | 'DEPROVISION_REASON_REPAIR_CENTER'
    | undefined
  deviceFiles?:
    | {
        createTime?: string | undefined
        downloadUrl?: string | undefined
        name?: string | undefined
        type?: string | undefined
      }[]
    | undefined
  deviceId?: string | undefined
  deviceLicenseType?:
    | 'deviceLicenseTypeUnspecified'
    | 'enterprise'
    | 'enterpriseUpgrade'
    | 'educationUpgrade'
    | 'education'
    | 'kioskUpgrade'
    | undefined
  diskVolumeReports?:
    | {
        volumeInfo?:
          | {
              storageFree?: string | undefined
              storageTotal?: string | undefined
              volumeId?: string | undefined
            }[]
          | undefined
      }[]
    | undefined
  dockMacAddress?: string | undefined
  etag?: string | undefined
  ethernetMacAddress?: string | undefined
  ethernetMacAddress0?: string | undefined
  firmwareVersion?: string | undefined
  firstEnrollmentTime?: string | undefined
  kind?: string | undefined
  lastDeprovisionTimestamp?: string | undefined
  lastEnrollmentTime?: string | undefined
  lastKnownNetwork?:
    | { ipAddress?: string | undefined; wanIpAddress?: string | undefined }[]
    | undefined
  lastSync?: string | undefined
  macAddress?: string | undefined
  manufactureDate?: string | undefined
  meid?: string | undefined
  model?: string | undefined
  notes?: string | undefined
  orderNumber?: string | undefined
  orgUnitId?: string | undefined
  orgUnitPath?: string | undefined
  osUpdateStatus?: OsUpdateStatus | undefined
  osVersion?: string | undefined
  platformVersion?: string | undefined
  recentUsers?: { email?: string | undefined; type?: string | undefined }[] | undefined
  screenshotFiles?:
    | {
        createTime?: string | undefined
        downloadUrl?: string | undefined
        name?: string | undefined
        type?: string | undefined
      }[]
    | undefined
  serialNumber?: string | undefined
  status?: string | undefined
  supportEndDate?: string | undefined
  systemRamFreeReports?:
    | { reportTime?: string | undefined; systemRamFreeInfo?: string[] | undefined }[]
    | undefined
  systemRamTotal?: string | undefined
  tpmVersionInfo?:
    | {
        family?: string | undefined
        firmwareVersion?: string | undefined
        manufacturer?: string | undefined
        specLevel?: string | undefined
        tpmModel?: string | undefined
        vendorSpecific?: string | undefined
      }
    | undefined
  willAutoRenew?: boolean | undefined
}
type ChromeOsDevices = {
  chromeosdevices?: ChromeOsDevice[] | undefined
  etag?: string | undefined
  kind?: string | undefined
  nextPageToken?: string | undefined
}
type ChromeOsMoveDevicesToOu = { deviceIds?: string[] | undefined }
type DirectoryChromeosdevicesCommandResult = {
  commandResultPayload?: string | undefined
  errorMessage?: string | undefined
  executeTime?: string | undefined
  result?: 'COMMAND_RESULT_TYPE_UNSPECIFIED' | 'IGNORED' | 'FAILURE' | 'SUCCESS' | undefined
}
type DirectoryChromeosdevicesCommand = {
  commandExpireTime?: string | undefined
  commandId?: string | undefined
  commandResult?: DirectoryChromeosdevicesCommandResult | undefined
  issueTime?: string | undefined
  payload?: string | undefined
  state?:
    | 'STATE_UNSPECIFIED'
    | 'PENDING'
    | 'EXPIRED'
    | 'CANCELLED'
    | 'SENT_TO_CLIENT'
    | 'ACKED_BY_CLIENT'
    | 'EXECUTED_BY_CLIENT'
    | undefined
  type?:
    | 'COMMAND_TYPE_UNSPECIFIED'
    | 'REBOOT'
    | 'TAKE_A_SCREENSHOT'
    | 'SET_VOLUME'
    | 'WIPE_USERS'
    | 'REMOTE_POWERWASH'
    | 'DEVICE_START_CRD_SESSION'
    | 'CAPTURE_LOGS'
    | 'FETCH_SUPPORT_PACKET'
    | undefined
}
type DirectoryChromeosdevicesIssueCommandRequest = {
  commandType?:
    | 'COMMAND_TYPE_UNSPECIFIED'
    | 'REBOOT'
    | 'TAKE_A_SCREENSHOT'
    | 'SET_VOLUME'
    | 'WIPE_USERS'
    | 'REMOTE_POWERWASH'
    | 'DEVICE_START_CRD_SESSION'
    | 'CAPTURE_LOGS'
    | 'FETCH_SUPPORT_PACKET'
    | undefined
  payload?: string | undefined
}
type DirectoryChromeosdevicesIssueCommandResponse = { commandId?: string | undefined }
type ChromeOsDeviceAction = { action?: string | undefined; deprovisionReason?: string | undefined }
type BatchChangeChromeOsDeviceStatusRequest = {
  changeChromeOsDeviceStatusAction?:
    | 'CHANGE_CHROME_OS_DEVICE_STATUS_ACTION_UNSPECIFIED'
    | 'CHANGE_CHROME_OS_DEVICE_STATUS_ACTION_DEPROVISION'
    | 'CHANGE_CHROME_OS_DEVICE_STATUS_ACTION_DISABLE'
    | 'CHANGE_CHROME_OS_DEVICE_STATUS_ACTION_REENABLE'
    | undefined
  deprovisionReason?:
    | 'DEPROVISION_REASON_UNSPECIFIED'
    | 'DEPROVISION_REASON_SAME_MODEL_REPLACEMENT'
    | 'DEPROVISION_REASON_UPGRADE'
    | 'DEPROVISION_REASON_DOMAIN_MOVE'
    | 'DEPROVISION_REASON_SERVICE_EXPIRATION'
    | 'DEPROVISION_REASON_OTHER'
    | 'DEPROVISION_REASON_DIFFERENT_MODEL_REPLACEMENT'
    | 'DEPROVISION_REASON_RETIRING_DEVICE'
    | 'DEPROVISION_REASON_UPGRADE_TRANSFER'
    | 'DEPROVISION_REASON_NOT_REQUIRED'
    | 'DEPROVISION_REASON_REPAIR_CENTER'
    | undefined
  deviceIds?: string[] | undefined
}
type Status = {
  code?: number | undefined
  details?: { [x: string]: { [x: string]: unknown } }[] | undefined
  message?: string | undefined
}
type ChangeChromeOsDeviceStatusSucceeded = { [x: string]: unknown }
type ChangeChromeOsDeviceStatusResult = {
  deviceId?: string | undefined
  error?: Status | undefined
  response?: ChangeChromeOsDeviceStatusSucceeded | undefined
}
type BatchChangeChromeOsDeviceStatusResponse = {
  changeChromeOsDeviceStatusResults?: ChangeChromeOsDeviceStatusResult[] | undefined
}
type MobileDevice = {
  adbStatus?: boolean | undefined
  applications?:
    | {
        displayName?: string | undefined
        packageName?: string | undefined
        permission?: string[] | undefined
        versionCode?: number | undefined
        versionName?: string | undefined
      }[]
    | undefined
  basebandVersion?: string | undefined
  bootloaderVersion?: string | undefined
  brand?: string | undefined
  buildNumber?: string | undefined
  defaultLanguage?: string | undefined
  developerOptionsStatus?: boolean | undefined
  deviceCompromisedStatus?: string | undefined
  deviceId?: string | undefined
  devicePasswordStatus?: string | undefined
  email?: string[] | undefined
  encryptionStatus?: string | undefined
  etag?: string | undefined
  firstSync?: string | undefined
  hardware?: string | undefined
  hardwareId?: string | undefined
  imei?: string | undefined
  kernelVersion?: string | undefined
  kind?: string | undefined
  lastSync?: string | undefined
  managedAccountIsOnOwnerProfile?: boolean | undefined
  manufacturer?: string | undefined
  meid?: string | undefined
  model?: string | undefined
  name?: string[] | undefined
  networkOperator?: string | undefined
  os?: string | undefined
  otherAccountsInfo?: string[] | undefined
  privilege?: string | undefined
  releaseVersion?: string | undefined
  resourceId?: string | undefined
  securityPatchLevel?: string | undefined
  serialNumber?: string | undefined
  status?: string | undefined
  supportsWorkProfile?: boolean | undefined
  type?: string | undefined
  unknownSourcesStatus?: boolean | undefined
  userAgent?: string | undefined
  wifiMacAddress?: string | undefined
}
type MobileDevices = {
  etag?: string | undefined
  kind?: string | undefined
  mobiledevices?: MobileDevice[] | undefined
  nextPageToken?: string | undefined
}
type MobileDeviceAction = { action?: string | undefined }
type OrgUnit = {
  blockInheritance?: boolean | undefined
  description?: string | undefined
  etag?: string | undefined
  kind?: string | undefined
  name?: string | undefined
  orgUnitId?: string | undefined
  orgUnitPath?: string | undefined
  parentOrgUnitId?: string | undefined
  parentOrgUnitPath?: string | undefined
}
type OrgUnits = {
  etag?: string | undefined
  kind?: string | undefined
  organizationUnits?: OrgUnit[] | undefined
}
type SchemaFieldSpec = {
  displayName?: string | undefined
  etag?: string | undefined
  fieldId?: string | undefined
  fieldName?: string | undefined
  fieldType?: string | undefined
  indexed?: boolean | undefined
  kind?: string | undefined
  multiValued?: boolean | undefined
  numericIndexingSpec?: { maxValue?: number | undefined; minValue?: number | undefined } | undefined
  readAccessType?: string | undefined
}
type Schema = {
  displayName?: string | undefined
  etag?: string | undefined
  fields?: SchemaFieldSpec[] | undefined
  kind?: string | undefined
  schemaId?: string | undefined
  schemaName?: string | undefined
}
type Schemas = {
  etag?: string | undefined
  kind?: string | undefined
  schemas?: Schema[] | undefined
}
type DomainAlias = {
  creationTime?: string | undefined
  domainAliasName?: string | undefined
  etag?: string | undefined
  kind?: string | undefined
  parentDomainName?: string | undefined
  verified?: boolean | undefined
}
type DomainAliases = {
  domainAliases?: DomainAlias[] | undefined
  etag?: string | undefined
  kind?: string | undefined
}
type Domains = {
  creationTime?: string | undefined
  domainAliases?: DomainAlias[] | undefined
  domainName?: string | undefined
  etag?: string | undefined
  isPrimary?: boolean | undefined
  kind?: string | undefined
  verified?: boolean | undefined
}
type Domains2 = {
  domains?: Domains[] | undefined
  etag?: string | undefined
  kind?: string | undefined
}
type BuildingAddress = {
  addressLines?: string[] | undefined
  administrativeArea?: string | undefined
  languageCode?: string | undefined
  locality?: string | undefined
  postalCode?: string | undefined
  regionCode?: string | undefined
  sublocality?: string | undefined
}
type BuildingCoordinates = { latitude?: number | undefined; longitude?: number | undefined }
type Building = {
  address?: BuildingAddress | undefined
  buildingId?: string | undefined
  buildingName?: string | undefined
  coordinates?: BuildingCoordinates | undefined
  description?: string | undefined
  etags?: string | undefined
  floorNames?: string[] | undefined
  kind?: string | undefined
}
type Buildings = {
  buildings?: Building[] | undefined
  etag?: string | undefined
  kind?: string | undefined
  nextPageToken?: string | undefined
}
type CalendarResource = {
  buildingId?: string | undefined
  capacity?: number | undefined
  etags?: string | undefined
  featureInstances?: { [x: string]: unknown } | undefined
  floorName?: string | undefined
  floorSection?: string | undefined
  generatedResourceName?: string | undefined
  kind?: string | undefined
  resourceCategory?: string | undefined
  resourceDescription?: string | undefined
  resourceEmail?: string | undefined
  resourceId?: string | undefined
  resourceName?: string | undefined
  resourceType?: string | undefined
  userVisibleDescription?: string | undefined
}
type CalendarResources = {
  etag?: string | undefined
  items?: CalendarResource[] | undefined
  kind?: string | undefined
  nextPageToken?: string | undefined
}
type Feature = { etags?: string | undefined; kind?: string | undefined; name?: string | undefined }
type Features = {
  etag?: string | undefined
  features?: Feature[] | undefined
  kind?: string | undefined
  nextPageToken?: string | undefined
}
type FeatureRename = { newName?: string | undefined }
type RoleAssignment = {
  assignedTo?: string | undefined
  assigneeType?: 'user' | 'group' | undefined
  etag?: string | undefined
  kind?: string | undefined
  orgUnitId?: string | undefined
  roleAssignmentId?: string | undefined
  roleId?: string | undefined
  scopeType?: string | undefined
}
type RoleAssignments = {
  etag?: string | undefined
  items?: RoleAssignment[] | undefined
  kind?: string | undefined
  nextPageToken?: string | undefined
}
type Role = {
  etag?: string | undefined
  isSuperAdminRole?: boolean | undefined
  isSystemRole?: boolean | undefined
  kind?: string | undefined
  roleDescription?: string | undefined
  roleId?: string | undefined
  roleName?: string | undefined
  rolePrivileges?:
    | { privilegeName?: string | undefined; serviceId?: string | undefined }[]
    | undefined
}
type Roles = {
  etag?: string | undefined
  items?: Role[] | undefined
  kind?: string | undefined
  nextPageToken?: string | undefined
}
type Privilege = {
  childPrivileges?: Privilege[] | undefined
  etag?: string | undefined
  isOuScopable?: boolean | undefined
  kind?: string | undefined
  privilegeName?: string | undefined
  serviceId?: string | undefined
  serviceName?: string | undefined
}
type Privileges = {
  etag?: string | undefined
  items?: Privilege[] | undefined
  kind?: string | undefined
}
type CustomerPostalAddress = {
  addressLine1?: string | undefined
  addressLine2?: string | undefined
  addressLine3?: string | undefined
  contactName?: string | undefined
  countryCode?: string | undefined
  locality?: string | undefined
  organizationName?: string | undefined
  postalCode?: string | undefined
  region?: string | undefined
}
type Customer = {
  alternateEmail?: string | undefined
  customerCreationTime?: string | undefined
  customerDomain?: string | undefined
  etag?: string | undefined
  id?: string | undefined
  kind?: string | undefined
  language?: string | undefined
  phoneNumber?: string | undefined
  postalAddress?: CustomerPostalAddress | undefined
}
type Group = {
  adminCreated?: boolean | undefined
  aliases?: string[] | undefined
  description?: string | undefined
  directMembersCount?: string | undefined
  email?: string | undefined
  etag?: string | undefined
  id?: string | undefined
  kind?: string | undefined
  name?: string | undefined
  nonEditableAliases?: string[] | undefined
}
type Groups = {
  etag?: string | undefined
  groups?: Group[] | undefined
  kind?: string | undefined
  nextPageToken?: string | undefined
}
type Aliases = {
  aliases?: { [x: string]: unknown }[] | undefined
  etag?: string | undefined
  kind?: string | undefined
}
type Alias = {
  alias?: string | undefined
  etag?: string | undefined
  id?: string | undefined
  kind?: string | undefined
  primaryEmail?: string | undefined
}
type MembersHasMember = { isMember?: boolean | undefined }
type Member = {
  delivery_settings?: string | undefined
  email?: string | undefined
  etag?: string | undefined
  id?: string | undefined
  kind?: string | undefined
  role?: string | undefined
  status?: string | undefined
  type?: string | undefined
}
type Members = {
  etag?: string | undefined
  kind?: string | undefined
  members?: Member[] | undefined
  nextPageToken?: string | undefined
}
type UserCustomProperties = { [x: string]: { [x: string]: unknown } }
type UserName = {
  displayName?: string | undefined
  familyName?: string | undefined
  fullName?: string | undefined
  givenName?: string | undefined
}
type User = {
  addresses?: { [x: string]: unknown } | undefined
  agreedToTerms?: boolean | undefined
  aliases?: string[] | undefined
  archived?: boolean | undefined
  changePasswordAtNextLogin?: boolean | undefined
  creationTime?: string | undefined
  customSchemas?: { [x: string]: UserCustomProperties } | undefined
  customerId?: string | undefined
  deletionTime?: string | undefined
  emails?: { [x: string]: unknown } | undefined
  etag?: string | undefined
  externalIds?: { [x: string]: unknown } | undefined
  gender?: { [x: string]: unknown } | undefined
  hashFunction?: string | undefined
  id?: string | undefined
  ims?: { [x: string]: unknown } | undefined
  includeInGlobalAddressList?: boolean | undefined
  ipWhitelisted?: boolean | undefined
  isAdmin?: boolean | undefined
  isDelegatedAdmin?: boolean | undefined
  isEnforcedIn2Sv?: boolean | undefined
  isEnrolledIn2Sv?: boolean | undefined
  isMailboxSetup?: boolean | undefined
  keywords?: { [x: string]: unknown } | undefined
  kind?: string | undefined
  languages?: { [x: string]: unknown } | undefined
  lastLoginTime?: string | undefined
  locations?: { [x: string]: unknown } | undefined
  name?: UserName | undefined
  nonEditableAliases?: string[] | undefined
  notes?: { [x: string]: unknown } | undefined
  orgUnitPath?: string | undefined
  organizations?: { [x: string]: unknown } | undefined
  password?: string | undefined
  phones?: { [x: string]: unknown } | undefined
  posixAccounts?: { [x: string]: unknown } | undefined
  primaryEmail?: string | undefined
  recoveryEmail?: string | undefined
  recoveryPhone?: string | undefined
  relations?: { [x: string]: unknown } | undefined
  sshPublicKeys?: { [x: string]: unknown } | undefined
  suspended?: boolean | undefined
  suspensionReason?: string | undefined
  thumbnailPhotoEtag?: string | undefined
  thumbnailPhotoUrl?: string | undefined
  websites?: { [x: string]: unknown } | undefined
}
type Users = {
  etag?: string | undefined
  kind?: string | undefined
  nextPageToken?: string | undefined
  trigger_event?: string | undefined
  users?: User[] | undefined
}
type Channel = {
  address?: string | undefined
  expiration?: string | undefined
  id?: string | undefined
  kind?: string | undefined
  params?: { [x: string]: string } | undefined
  payload?: boolean | undefined
  resourceId?: string | undefined
  resourceUri?: string | undefined
  token?: string | undefined
  type?: string | undefined
}
type Asp = {
  codeId?: number | undefined
  creationTime?: string | undefined
  etag?: string | undefined
  kind?: string | undefined
  lastTimeUsed?: string | undefined
  name?: string | undefined
  userKey?: string | undefined
}
type Asps = { etag?: string | undefined; items?: Asp[] | undefined; kind?: string | undefined }
type UserMakeAdmin = { status?: boolean | undefined }
type UserPhoto = {
  etag?: string | undefined
  height?: number | undefined
  id?: string | undefined
  kind?: string | undefined
  mimeType?: string | undefined
  photoData?: string | undefined
  primaryEmail?: string | undefined
  width?: number | undefined
}
type Token = {
  anonymous?: boolean | undefined
  clientId?: string | undefined
  displayText?: string | undefined
  etag?: string | undefined
  kind?: string | undefined
  nativeApp?: boolean | undefined
  scopes?: string[] | undefined
  userKey?: string | undefined
}
type Tokens = { etag?: string | undefined; items?: Token[] | undefined; kind?: string | undefined }
type UserUndelete = { orgUnitPath?: string | undefined }
type VerificationCode = {
  etag?: string | undefined
  kind?: string | undefined
  userId?: string | undefined
  verificationCode?: string | undefined
}
type VerificationCodes = {
  etag?: string | undefined
  items?: VerificationCode[] | undefined
  kind?: string | undefined
}
type Empty = { [x: string]: unknown }
type PrintServer = {
  createTime?: string | undefined
  description?: string | undefined
  displayName?: string | undefined
  id?: string | undefined
  name?: string | undefined
  orgUnitId?: string | undefined
  uri?: string | undefined
}
type ListPrintServersResponse = {
  nextPageToken?: string | undefined
  printServers?: PrintServer[] | undefined
}
type CreatePrintServerRequest = {
  parent?: string | undefined
  printServer?: PrintServer | undefined
}
type BatchCreatePrintServersRequest = { requests?: CreatePrintServerRequest[] | undefined }
type PrintServerFailureInfo = {
  errorCode?:
    | 'OK'
    | 'CANCELLED'
    | 'UNKNOWN'
    | 'INVALID_ARGUMENT'
    | 'DEADLINE_EXCEEDED'
    | 'NOT_FOUND'
    | 'ALREADY_EXISTS'
    | 'PERMISSION_DENIED'
    | 'UNAUTHENTICATED'
    | 'RESOURCE_EXHAUSTED'
    | 'FAILED_PRECONDITION'
    | 'ABORTED'
    | 'OUT_OF_RANGE'
    | 'UNIMPLEMENTED'
    | 'INTERNAL'
    | 'UNAVAILABLE'
    | 'DATA_LOSS'
    | undefined
  errorMessage?: string | undefined
  printServer?: PrintServer | undefined
  printServerId?: string | undefined
}
type BatchCreatePrintServersResponse = {
  failures?: PrintServerFailureInfo[] | undefined
  printServers?: PrintServer[] | undefined
}
type BatchDeletePrintServersRequest = { printServerIds?: string[] | undefined }
type BatchDeletePrintServersResponse = {
  failedPrintServers?: PrintServerFailureInfo[] | undefined
  printServerIds?: string[] | undefined
}
type AuxiliaryMessage = {
  auxiliaryMessage?: string | undefined
  fieldMask?: string | undefined
  severity?:
    | 'SEVERITY_UNSPECIFIED'
    | 'SEVERITY_INFO'
    | 'SEVERITY_WARNING'
    | 'SEVERITY_ERROR'
    | undefined
}
type Printer = {
  auxiliaryMessages?: AuxiliaryMessage[] | undefined
  createTime?: string | undefined
  description?: string | undefined
  displayName?: string | undefined
  id?: string | undefined
  makeAndModel?: string | undefined
  name?: string | undefined
  orgUnitId?: string | undefined
  uri?: string | undefined
  useDriverlessConfig?: boolean | undefined
}
type ListPrintersResponse = { nextPageToken?: string | undefined; printers?: Printer[] | undefined }
type CreatePrinterRequest = { parent?: string | undefined; printer?: Printer | undefined }
type BatchCreatePrintersRequest = { requests?: CreatePrinterRequest[] | undefined }
type FailureInfo = {
  errorCode?:
    | 'OK'
    | 'CANCELLED'
    | 'UNKNOWN'
    | 'INVALID_ARGUMENT'
    | 'DEADLINE_EXCEEDED'
    | 'NOT_FOUND'
    | 'ALREADY_EXISTS'
    | 'PERMISSION_DENIED'
    | 'UNAUTHENTICATED'
    | 'RESOURCE_EXHAUSTED'
    | 'FAILED_PRECONDITION'
    | 'ABORTED'
    | 'OUT_OF_RANGE'
    | 'UNIMPLEMENTED'
    | 'INTERNAL'
    | 'UNAVAILABLE'
    | 'DATA_LOSS'
    | undefined
  errorMessage?: string | undefined
  printer?: Printer | undefined
  printerId?: string | undefined
}
type BatchCreatePrintersResponse = {
  failures?: FailureInfo[] | undefined
  printers?: Printer[] | undefined
}
type BatchDeletePrintersRequest = { printerIds?: string[] | undefined }
type BatchDeletePrintersResponse = {
  failedPrinters?: FailureInfo[] | undefined
  printerIds?: string[] | undefined
}
type PrinterModel = {
  displayName?: string | undefined
  makeAndModel?: string | undefined
  manufacturer?: string | undefined
}
type ListPrinterModelsResponse = {
  nextPageToken?: string | undefined
  printerModels?: PrinterModel[] | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/admin/directory/v1/customer/:customerId/devices/chromeos': {
      $get: {
        input: { param: { customerId: string } } & {
          query: {
            includeChildOrgunits?: boolean | undefined
            maxResults?: number | undefined
            orderBy?:
              | 'annotatedLocation'
              | 'annotatedUser'
              | 'lastSync'
              | 'notes'
              | 'serialNumber'
              | 'status'
              | undefined
            orgUnitPath?: string | undefined
            pageToken?: string | undefined
            projection?: 'BASIC' | 'FULL' | undefined
            query?: string | undefined
            sortOrder?: 'ASCENDING' | 'DESCENDING' | undefined
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
        output: ChromeOsDevices
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/admin/directory/v1/customer/:customerId/devices/chromeos/moveDevicesToOu': {
      $post: {
        input: { param: { customerId: string } } & {
          query: {
            orgUnitPath: string
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
        } & { json: ChromeOsMoveDevicesToOu }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/admin/directory/v1/customer/:customerId/devices/chromeos/:deviceId': {
      $get: {
        input: { param: { customerId: string; deviceId: string } } & {
          query: {
            projection?: 'BASIC' | 'FULL' | undefined
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
        output: ChromeOsDevice
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { customerId: string; deviceId: string } } & {
          query: {
            projection?: 'BASIC' | 'FULL' | undefined
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
        } & { json: ChromeOsDevice }
        output: ChromeOsDevice
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { customerId: string; deviceId: string } } & {
          query: {
            projection?: 'BASIC' | 'FULL' | undefined
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
        } & { json: ChromeOsDevice }
        output: ChromeOsDevice
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/admin/directory/v1/customer/:customerId/devices/chromeos/:deviceId/commands/:commandId': {
      $get: {
        input: { param: { customerId: string; deviceId: string; commandId: string } } & {
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
        output: DirectoryChromeosdevicesCommand
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/admin/directory/v1/customer/:customerId/devices/chromeos/:deviceId:issueCommand': {
      $post: {
        input: { param: { customerId: string; deviceId: string } } & {
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
        } & { json: DirectoryChromeosdevicesIssueCommandRequest }
        output: DirectoryChromeosdevicesIssueCommandResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/admin/directory/v1/customer/:customerId/devices/chromeos/:resourceId/action': {
      $post: {
        input: { param: { customerId: string; resourceId: string } } & {
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
        } & { json: ChromeOsDeviceAction }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/admin/directory/v1/customer/:customerId/devices/chromeos:batchChangeStatus': {
      $post: {
        input: { param: { customerId: string } } & {
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
        } & { json: BatchChangeChromeOsDeviceStatusRequest }
        output: BatchChangeChromeOsDeviceStatusResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/admin/directory/v1/customer/:customerId/devices/mobile': {
      $get: {
        input: { param: { customerId: string } } & {
          query: {
            maxResults?: number | undefined
            orderBy?:
              | 'deviceId'
              | 'email'
              | 'lastSync'
              | 'model'
              | 'name'
              | 'os'
              | 'status'
              | 'type'
              | undefined
            pageToken?: string | undefined
            projection?: 'BASIC' | 'FULL' | undefined
            query?: string | undefined
            sortOrder?: 'ASCENDING' | 'DESCENDING' | undefined
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
        output: MobileDevices
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/admin/directory/v1/customer/:customerId/devices/mobile/:resourceId': {
      $delete: {
        input: { param: { customerId: string; resourceId: string } } & {
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
        input: { param: { customerId: string; resourceId: string } } & {
          query: {
            projection?: 'BASIC' | 'FULL' | undefined
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
        output: MobileDevice
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/admin/directory/v1/customer/:customerId/devices/mobile/:resourceId/action': {
      $post: {
        input: { param: { customerId: string; resourceId: string } } & {
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
        } & { json: MobileDeviceAction }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/admin/directory/v1/customer/:customerId/orgunits': {
      $get: {
        input: { param: { customerId: string } } & {
          query: {
            orgUnitPath?: string | undefined
            type?: 'all' | 'children' | 'allIncludingParent' | undefined
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
        output: OrgUnits
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { customerId: string } } & {
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
        } & { json: OrgUnit }
        output: OrgUnit
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/admin/directory/v1/customer/:customerId/orgunits/:orgUnitPath': {
      $delete: {
        input: { param: { customerId: string; orgUnitPath: string } } & {
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
        input: { param: { customerId: string; orgUnitPath: string } } & {
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
        output: OrgUnit
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { customerId: string; orgUnitPath: string } } & {
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
        } & { json: OrgUnit }
        output: OrgUnit
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { customerId: string; orgUnitPath: string } } & {
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
        } & { json: OrgUnit }
        output: OrgUnit
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/admin/directory/v1/customer/:customerId/schemas': {
      $get: {
        input: { param: { customerId: string } } & {
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
        output: Schemas
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { customerId: string } } & {
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
        } & { json: Schema }
        output: Schema
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/admin/directory/v1/customer/:customerId/schemas/:schemaKey': {
      $delete: {
        input: { param: { customerId: string; schemaKey: string } } & {
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
        input: { param: { customerId: string; schemaKey: string } } & {
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
        output: Schema
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { customerId: string; schemaKey: string } } & {
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
        } & { json: Schema }
        output: Schema
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { customerId: string; schemaKey: string } } & {
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
        } & { json: Schema }
        output: Schema
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/admin/directory/v1/customer/:customer/domainaliases': {
      $get: {
        input: { param: { customer: string } } & {
          query: {
            parentDomainName?: string | undefined
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
        output: DomainAliases
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { customer: string } } & {
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
        } & { json: DomainAlias }
        output: DomainAlias
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/admin/directory/v1/customer/:customer/domainaliases/:domainAliasName': {
      $delete: {
        input: { param: { customer: string; domainAliasName: string } } & {
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
        input: { param: { customer: string; domainAliasName: string } } & {
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
        output: DomainAlias
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/admin/directory/v1/customer/:customer/domains': {
      $get: {
        input: { param: { customer: string } } & {
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
        output: Domains2
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { customer: string } } & {
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
        } & { json: Domains }
        output: Domains
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/admin/directory/v1/customer/:customer/domains/:domainName': {
      $delete: {
        input: { param: { customer: string; domainName: string } } & {
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
        input: { param: { customer: string; domainName: string } } & {
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
        output: Domains
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/admin/directory/v1/customer/:customer/resources/buildings': {
      $get: {
        input: { param: { customer: string } } & {
          query: {
            maxResults?: number | undefined
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
        output: Buildings
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { customer: string } } & {
          query: {
            coordinatesSource?:
              | 'CLIENT_SPECIFIED'
              | 'RESOLVED_FROM_ADDRESS'
              | 'SOURCE_UNSPECIFIED'
              | undefined
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
        } & { json: Building }
        output: Building
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/admin/directory/v1/customer/:customer/resources/buildings/:buildingId': {
      $delete: {
        input: { param: { customer: string; buildingId: string } } & {
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
        input: { param: { customer: string; buildingId: string } } & {
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
        output: Building
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { customer: string; buildingId: string } } & {
          query: {
            coordinatesSource?:
              | 'CLIENT_SPECIFIED'
              | 'RESOLVED_FROM_ADDRESS'
              | 'SOURCE_UNSPECIFIED'
              | undefined
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
        } & { json: Building }
        output: Building
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { customer: string; buildingId: string } } & {
          query: {
            coordinatesSource?:
              | 'CLIENT_SPECIFIED'
              | 'RESOLVED_FROM_ADDRESS'
              | 'SOURCE_UNSPECIFIED'
              | undefined
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
        } & { json: Building }
        output: Building
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/admin/directory/v1/customer/:customer/resources/calendars': {
      $get: {
        input: { param: { customer: string } } & {
          query: {
            maxResults?: number | undefined
            orderBy?: string | undefined
            pageToken?: string | undefined
            query?: string | undefined
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
        output: CalendarResources
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { customer: string } } & {
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
        } & { json: CalendarResource }
        output: CalendarResource
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/admin/directory/v1/customer/:customer/resources/calendars/:calendarResourceId': {
      $delete: {
        input: { param: { customer: string; calendarResourceId: string } } & {
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
        input: { param: { customer: string; calendarResourceId: string } } & {
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
        output: CalendarResource
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { customer: string; calendarResourceId: string } } & {
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
        } & { json: CalendarResource }
        output: CalendarResource
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { customer: string; calendarResourceId: string } } & {
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
        } & { json: CalendarResource }
        output: CalendarResource
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/admin/directory/v1/customer/:customer/resources/features': {
      $get: {
        input: { param: { customer: string } } & {
          query: {
            maxResults?: number | undefined
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
        output: Features
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { customer: string } } & {
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
        } & { json: Feature }
        output: Feature
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/admin/directory/v1/customer/:customer/resources/features/:featureKey': {
      $delete: {
        input: { param: { customer: string; featureKey: string } } & {
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
        input: { param: { customer: string; featureKey: string } } & {
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
        output: Feature
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { customer: string; featureKey: string } } & {
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
        } & { json: Feature }
        output: Feature
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { customer: string; featureKey: string } } & {
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
        } & { json: Feature }
        output: Feature
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/admin/directory/v1/customer/:customer/resources/features/:oldName/rename': {
      $post: {
        input: { param: { customer: string; oldName: string } } & {
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
        } & { json: FeatureRename }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/admin/directory/v1/customer/:customer/roleassignments': {
      $get: {
        input: { param: { customer: string } } & {
          query: {
            includeIndirectRoleAssignments?: boolean | undefined
            maxResults?: number | undefined
            pageToken?: string | undefined
            roleId?: string | undefined
            userKey?: string | undefined
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
        output: RoleAssignments
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { customer: string } } & {
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
        } & { json: RoleAssignment }
        output: RoleAssignment
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/admin/directory/v1/customer/:customer/roleassignments/:roleAssignmentId': {
      $delete: {
        input: { param: { customer: string; roleAssignmentId: string } } & {
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
        input: { param: { customer: string; roleAssignmentId: string } } & {
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
        output: RoleAssignment
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/admin/directory/v1/customer/:customer/roles': {
      $get: {
        input: { param: { customer: string } } & {
          query: {
            maxResults?: number | undefined
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
        output: Roles
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { customer: string } } & {
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
        } & { json: Role }
        output: Role
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/admin/directory/v1/customer/:customer/roles/ALL/privileges': {
      $get: {
        input: { param: { customer: string } } & {
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
        output: Privileges
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/admin/directory/v1/customer/:customer/roles/:roleId': {
      $delete: {
        input: { param: { customer: string; roleId: string } } & {
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
        input: { param: { customer: string; roleId: string } } & {
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
        output: Role
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { customer: string; roleId: string } } & {
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
        } & { json: Role }
        output: Role
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { customer: string; roleId: string } } & {
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
        } & { json: Role }
        output: Role
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/admin/directory/v1/customers/:customerKey': {
      $get: {
        input: { param: { customerKey: string } } & {
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
        output: Customer
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { customerKey: string } } & {
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
        } & { json: Customer }
        output: Customer
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { customerKey: string } } & {
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
        } & { json: Customer }
        output: Customer
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/admin/directory/v1/groups': {
      $get: {
        input: {
          query: {
            customer?: string | undefined
            domain?: string | undefined
            maxResults?: number | undefined
            orderBy?: 'email' | undefined
            pageToken?: string | undefined
            query?: string | undefined
            sortOrder?: 'ASCENDING' | 'DESCENDING' | undefined
            userKey?: string | undefined
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
        output: Groups
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: {
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
        } & { json: Group }
        output: Group
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/admin/directory/v1/groups/:groupKey': {
      $delete: {
        input: { param: { groupKey: string } } & {
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
        input: { param: { groupKey: string } } & {
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
        output: Group
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { groupKey: string } } & {
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
        } & { json: Group }
        output: Group
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { groupKey: string } } & {
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
        } & { json: Group }
        output: Group
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/admin/directory/v1/groups/:groupKey/aliases': {
      $get: {
        input: { param: { groupKey: string } } & {
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
        output: Aliases
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { groupKey: string } } & {
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
        } & { json: Alias }
        output: Alias
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/admin/directory/v1/groups/:groupKey/aliases/:alias': {
      $delete: {
        input: { param: { groupKey: string; alias: string } } & {
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
    '/admin/directory/v1/groups/:groupKey/hasMember/:memberKey': {
      $get: {
        input: { param: { groupKey: string; memberKey: string } } & {
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
        output: MembersHasMember
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/admin/directory/v1/groups/:groupKey/members': {
      $get: {
        input: { param: { groupKey: string } } & {
          query: {
            includeDerivedMembership?: boolean | undefined
            maxResults?: number | undefined
            pageToken?: string | undefined
            roles?: string | undefined
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
        output: Members
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { groupKey: string } } & {
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
        } & { json: Member }
        output: Member
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/admin/directory/v1/groups/:groupKey/members/:memberKey': {
      $delete: {
        input: { param: { groupKey: string; memberKey: string } } & {
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
        input: { param: { groupKey: string; memberKey: string } } & {
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
        output: Member
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { groupKey: string; memberKey: string } } & {
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
        } & { json: Member }
        output: Member
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { groupKey: string; memberKey: string } } & {
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
        } & { json: Member }
        output: Member
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/admin/directory/v1/users': {
      $get: {
        input: {
          query: {
            customFieldMask?: string | undefined
            customer?: string | undefined
            domain?: string | undefined
            event?: 'add' | 'delete' | 'makeAdmin' | 'undelete' | 'update' | undefined
            maxResults?: number | undefined
            orderBy?: 'email' | 'familyName' | 'givenName' | undefined
            pageToken?: string | undefined
            projection?: 'basic' | 'custom' | 'full' | undefined
            query?: string | undefined
            showDeleted?: string | undefined
            sortOrder?: 'ASCENDING' | 'DESCENDING' | undefined
            viewType?: 'admin_view' | 'domain_public' | undefined
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
        output: Users
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: {
          query: {
            resolveConflictAccount?: boolean | undefined
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
    '/admin/directory/v1/users/watch': {
      $post: {
        input: {
          query: {
            customFieldMask?: string | undefined
            customer?: string | undefined
            domain?: string | undefined
            event?: 'add' | 'delete' | 'makeAdmin' | 'undelete' | 'update' | undefined
            maxResults?: number | undefined
            orderBy?: 'email' | 'familyName' | 'givenName' | undefined
            pageToken?: string | undefined
            projection?: 'basic' | 'custom' | 'full' | undefined
            query?: string | undefined
            showDeleted?: string | undefined
            sortOrder?: 'ASCENDING' | 'DESCENDING' | undefined
            viewType?: 'admin_view' | 'domain_public' | undefined
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
        } & { json: Channel }
        output: Channel
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/admin/directory/v1/users/:userKey': {
      $delete: {
        input: { param: { userKey: string } } & {
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
        input: { param: { userKey: string } } & {
          query: {
            customFieldMask?: string | undefined
            projection?: 'basic' | 'custom' | 'full' | undefined
            viewType?: 'admin_view' | 'domain_public' | undefined
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
      $patch: {
        input: { param: { userKey: string } } & {
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
      $put: {
        input: { param: { userKey: string } } & {
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
    '/admin/directory/v1/users/:userKey/aliases': {
      $get: {
        input: { param: { userKey: string } } & {
          query: {
            event?: 'add' | 'delete' | undefined
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
        output: Aliases
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { userKey: string } } & {
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
        } & { json: Alias }
        output: Alias
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/admin/directory/v1/users/:userKey/aliases/watch': {
      $post: {
        input: { param: { userKey: string } } & {
          query: {
            event?: 'add' | 'delete' | undefined
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
        } & { json: Channel }
        output: Channel
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/admin/directory/v1/users/:userKey/aliases/:alias': {
      $delete: {
        input: { param: { userKey: string; alias: string } } & {
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
    '/admin/directory/v1/users/:userKey/asps': {
      $get: {
        input: { param: { userKey: string } } & {
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
        output: Asps
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/admin/directory/v1/users/:userKey/asps/:codeId': {
      $delete: {
        input: { param: { userKey: string; codeId: number } } & {
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
        input: { param: { userKey: string; codeId: number } } & {
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
        output: Asp
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/admin/directory/v1/users/:userKey/makeAdmin': {
      $post: {
        input: { param: { userKey: string } } & {
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
        } & { json: UserMakeAdmin }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/admin/directory/v1/users/:userKey/photos/thumbnail': {
      $delete: {
        input: { param: { userKey: string } } & {
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
        input: { param: { userKey: string } } & {
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
        output: UserPhoto
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { userKey: string } } & {
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
        } & { json: UserPhoto }
        output: UserPhoto
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { userKey: string } } & {
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
        } & { json: UserPhoto }
        output: UserPhoto
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/admin/directory/v1/users/:userKey/signOut': {
      $post: {
        input: { param: { userKey: string } } & {
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
    '/admin/directory/v1/users/:userKey/tokens': {
      $get: {
        input: { param: { userKey: string } } & {
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
        output: Tokens
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/admin/directory/v1/users/:userKey/tokens/:clientId': {
      $delete: {
        input: { param: { userKey: string; clientId: string } } & {
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
        input: { param: { userKey: string; clientId: string } } & {
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
        output: Token
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/admin/directory/v1/users/:userKey/twoStepVerification/turnOff': {
      $post: {
        input: { param: { userKey: string } } & {
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
    '/admin/directory/v1/users/:userKey/undelete': {
      $post: {
        input: { param: { userKey: string } } & {
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
        } & { json: UserUndelete }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/admin/directory/v1/users/:userKey/verificationCodes': {
      $get: {
        input: { param: { userKey: string } } & {
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
        output: VerificationCodes
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/admin/directory/v1/users/:userKey/verificationCodes/generate': {
      $post: {
        input: { param: { userKey: string } } & {
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
    '/admin/directory/v1/users/:userKey/verificationCodes/invalidate': {
      $post: {
        input: { param: { userKey: string } } & {
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
    '/admin/directory/v1/:name': {
      $delete: {
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
      $get: {
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
        output: PrintServer
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
        } & { json: PrintServer }
        output: PrintServer
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/admin/directory/v1/:parent/chrome/printServers': {
      $get: {
        input: { param: { parent: string } } & {
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
        output: ListPrintServersResponse
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
        } & { json: PrintServer }
        output: PrintServer
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/admin/directory/v1/:parent/chrome/printServers:batchCreatePrintServers': {
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
        } & { json: BatchCreatePrintServersRequest }
        output: BatchCreatePrintServersResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/admin/directory/v1/:parent/chrome/printServers:batchDeletePrintServers': {
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
        } & { json: BatchDeletePrintServersRequest }
        output: BatchDeletePrintServersResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/admin/directory/v1/:parent/chrome/printers': {
      $get: {
        input: { param: { parent: string } } & {
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
        output: ListPrintersResponse
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
        } & { json: Printer }
        output: Printer
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/admin/directory/v1/:parent/chrome/printers:batchCreatePrinters': {
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
        } & { json: BatchCreatePrintersRequest }
        output: BatchCreatePrintersResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/admin/directory/v1/:parent/chrome/printers:batchDeletePrinters': {
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
        } & { json: BatchDeletePrintersRequest }
        output: BatchDeletePrintersResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/admin/directory/v1/:parent/chrome/printers:listPrinterModels': {
      $get: {
        input: { param: { parent: string } } & {
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
        output: ListPrinterModelsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/admin/directory_v1/channels/stop': {
      $post: {
        input: {
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
        } & { json: Channel }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  },
  '/'
>
export default routes
