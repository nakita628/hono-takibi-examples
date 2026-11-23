type LoginRequest = {
  authType?: 'basic' | 'active_directory' | 'radius' | undefined
  language?: string | undefined
  login?: string | undefined
  password: string
  state?: string | undefined
  token?: string | undefined
  userName?: string | undefined
}
type LoginResponse = { token: string }
type ErrorResponse = {
  code: number
  debugInfo?: string | undefined
  errorCode?: number | undefined
  message: string
}
type RadiusChallengeResponse = {
  code: number
  debugInfo?: string | undefined
  errorCode?: number | undefined
  message: string
  replyMessage: string
  replyState: string
}
type RecoverUserNameRequest = { creatorLanguage?: string | undefined; email: string }
type ResetPasswordRequest = {
  creatorLanguage?: string | undefined
  language?: string | undefined
  login?: string | undefined
  userName?: string | undefined
}
type CharacterRules = {
  mustContainCharacters:
    | 'alpha'
    | 'uppercase'
    | 'lowercase'
    | 'numeric'
    | 'special'
    | 'all'
    | 'none'
  numberOfCharacteristicsToEnforce: number
}
type PasswordExpiration = { enabled: boolean; maxPasswordAge?: number | undefined }
type UserInfo = {
  avatarUuid: string
  displayName?: string | undefined
  email?: string | undefined
  firstName: string
  id: bigint
  lastName: string
  title?: string | undefined
  userName: string
  userType: 'system' | 'internal' | 'external' | 'deleted'
}
type UserLockout = {
  enabled: boolean
  lockoutPeriod?: number | undefined
  maxNumberOfLoginFailures?: number | undefined
}
type LoginPasswordPolicies = {
  characterRules: CharacterRules
  minLength: number
  numberOfArchivedPasswords: number
  passwordExpiration: PasswordExpiration
  rejectDictionaryWords: boolean
  rejectKeyboardPatterns: boolean
  rejectUserInfo: boolean
  updatedAt: string
  updatedBy: UserInfo
  userLockout: UserLockout
}
type ResetPasswordTokenValidateResponse = {
  allowSystemGlobalWeakPassword?: boolean | undefined
  firstName: string
  gender?: string | undefined
  lastName: string
  loginPasswordPolicies?: LoginPasswordPolicies | undefined
  title?: string | undefined
}
type ResetPasswordWithTokenRequest = { password: string }
type ViolatedPasswordPolicy = { message?: string | undefined; name?: string | undefined }
type PasswordPolicyViolationResponse = {
  code: number
  debugInfo?: string | undefined
  errorCode?: number | undefined
  message: string
  violatedPasswordPolicies?: ViolatedPasswordPolicy[] | undefined
}
type SystemDefaults = {
  downloadShareDefaultExpirationPeriod?: number | undefined
  fileDefaultExpirationPeriod?: number | undefined
  hideLoginInputFields?: boolean | undefined
  languageDefault?: string | undefined
  nonmemberViewerDefault?: boolean | undefined
  uploadShareDefaultExpirationPeriod?: number | undefined
}
type AuthTokenRestrictions = {
  accessTokenValidity?: number | undefined
  refreshTokenValidity?: number | undefined
  restrictionEnabled?: boolean | undefined
}
type GeneralSettingsInfo = {
  authTokenRestrictions?: AuthTokenRestrictions | undefined
  cryptoEnabled?: boolean | undefined
  emailNotificationButtonEnabled?: boolean | undefined
  eulaEnabled?: boolean | undefined
  hideLoginInputFields?: boolean | undefined
  homeRoomParentId?: bigint | undefined
  homeRoomsActive: boolean
  mediaServerEnabled?: boolean | undefined
  s3TagsEnabled?: boolean | undefined
  sharePasswordSmsEnabled?: boolean | undefined
  subscriptionPlan: number
  useS3Storage?: boolean | undefined
  weakPasswordEnabled?: boolean | undefined
}
type InfrastructureProperties = {
  isDracoonCloud?: boolean | undefined
  mediaServerConfigEnabled?: boolean | undefined
  s3DefaultRegion?: string | undefined
  s3EnforceDirectUpload?: boolean | undefined
  smsConfigEnabled?: boolean | undefined
  tenantUuid?: string | undefined
}
type NotificationChannel = {
  frequency: bigint
  id: number
  isEnabled: boolean
  name: string
  type: string
}
type NotificationChannelList = { items: NotificationChannel[] }
type AlgorithmVersionInfo = {
  description: string
  status: 'REQUIRED' | 'DISCOURAGED'
  version: string
}
type AlgorithmVersionInfoList = {
  fileKeyAlgorithms: AlgorithmVersionInfo[]
  keyPairAlgorithms: AlgorithmVersionInfo[]
}
type ShareClassificationPolicies = {
  classificationRequiresSharePassword?: 0 | 1 | 2 | 3 | 4 | undefined
}
type ClassificationPoliciesConfig = {
  shareClassificationPolicies?: ShareClassificationPolicies | undefined
}
type GuestUsersPoliciesConfig = { isInviteUsersEnabled: boolean }
type EncryptionPasswordPolicies = {
  characterRules?: CharacterRules | undefined
  minLength?: number | undefined
  rejectKeyboardPatterns?: boolean | undefined
  rejectUserInfo?: boolean | undefined
  updatedAt?: string | undefined
  updatedBy?: UserInfo | undefined
}
type SharesPasswordPolicies = {
  characterRules?: CharacterRules | undefined
  minLength?: number | undefined
  rejectDictionaryWords?: boolean | undefined
  rejectKeyboardPatterns?: boolean | undefined
  rejectUserInfo?: boolean | undefined
  updatedAt?: string | undefined
  updatedBy?: UserInfo | undefined
}
type PasswordPoliciesConfig = {
  encryptionPasswordPolicies?: EncryptionPasswordPolicies | undefined
  loginPasswordPolicies?: LoginPasswordPolicies | undefined
  sharesPasswordPolicies?: SharesPasswordPolicies | undefined
}
type FeaturedOAuthClient = { isAvailable: boolean; oauthClientName?: string | undefined }
type Feature = { featureId: number; featureName: string; isAvailable: boolean }
type ProductPackageResponse = {
  clients: FeaturedOAuthClient[]
  features: Feature[]
  productPackageId: bigint
  productPackageName: string
}
type ProductPackageResponseList = { packages: ProductPackageResponse[] }
type S3Tag = {
  id?: bigint | undefined
  isMandatory?: boolean | undefined
  key?: string | undefined
  value?: string | undefined
}
type S3TagList = { items?: S3Tag[] | undefined }
type KeyValueEntry = { key: string; value: string }
type ConfigOptionList = { items: KeyValueEntry[] }
type AuditNodeInfo = {
  countChildren?: bigint | undefined
  nodeId: bigint
  nodeIsEncrypted?: boolean | undefined
  nodeName: string
  nodeParentId?: bigint | undefined
  nodeParentPath: string
}
type Range = { limit: bigint; offset: bigint; total: bigint }
type AuditNodeInfoResponse = { items: AuditNodeInfo[]; range: Range }
type NodePermissions = {
  change: boolean
  create: boolean
  delete: boolean
  deleteRecycleBin: boolean
  manage: boolean
  manageDownloadShare: boolean
  manageUploadShare: boolean
  read: boolean
  readRecycleBin: boolean
  restoreRecycleBin: boolean
}
type AuditUserPermission = {
  permissions: NodePermissions
  userFirstName: string
  userId: bigint
  userLastName: string
  userLogin: string
}
type AuditNodeResponse = {
  auditUserPermissionList: AuditUserPermission[]
  nodeCntChildren: number
  nodeCreatedAt?: string | undefined
  nodeCreatedBy?: UserInfo | undefined
  nodeHasActivitiesLog?: boolean | undefined
  nodeHasRecycleBin?: boolean | undefined
  nodeId: bigint
  nodeIsEncrypted?: boolean | undefined
  nodeName: string
  nodeParentId?: bigint | undefined
  nodeParentPath: string
  nodeQuota?: bigint | undefined
  nodeRecycleBinRetentionPeriod?: number | undefined
  nodeSize?: bigint | undefined
  nodeUpdatedAt?: string | undefined
  nodeUpdatedBy?: UserInfo | undefined
}
type LogEvent = {
  attribute1?: string | undefined
  attribute2?: string | undefined
  attribute3?: string | undefined
  authParentSource?: string | undefined
  authParentTarget?: string | undefined
  customerId?: bigint | undefined
  id: bigint
  message: string
  objectId1?: bigint | undefined
  objectId2?: bigint | undefined
  objectName1?: string | undefined
  objectName2?: string | undefined
  objectType1?: number | undefined
  objectType2?: number | undefined
  operationId?: number | undefined
  operationName?: string | undefined
  status?: 0 | 2 | undefined
  time: string
  userClient?: string | undefined
  userId: bigint
  userIp?: string | undefined
  userName?: string | undefined
}
type LogEventList = { items: LogEvent[]; range: Range }
type LogOperation = { id: number; isDeprecated: boolean; name: string }
type LogOperationList = { operationList: LogOperation[] }
type Right = { description: string; id: number; name: string }
type Role = { description: string; id: number; items?: Right[] | undefined; name: string }
type RoleList = { items: Role[] }
type Group = {
  cntUsers: number
  createdAt: string
  createdBy: UserInfo
  expireAt?: string | undefined
  groupRoles?: RoleList | undefined
  id: bigint
  name: string
  updatedAt?: string | undefined
  updatedBy?: UserInfo | undefined
}
type GroupList = { items: Group[]; range: Range }
type ObjectExpiration = { enableExpiration: boolean; expireAt?: string | undefined }
type CreateGroupRequest = { expiration?: ObjectExpiration | undefined; name: string }
type UpdateGroupRequest = { expiration?: ObjectExpiration | undefined; name?: string | undefined }
type LastAdminGroupRoom = {
  id: bigint
  name: string
  parentId?: bigint | undefined
  parentPath: string
}
type LastAdminGroupRoomList = { items: LastAdminGroupRoom[] }
type RoomData = {
  children?: RoomData[] | undefined
  cntDownloadShares?: number | undefined
  cntUploadShares?: number | undefined
  createdAt?: string | undefined
  createdBy?: UserInfo | undefined
  hasRecycleBin: boolean
  id: bigint
  isEncrypted: boolean
  isFavorite?: boolean | undefined
  isGranted: boolean
  name: string
  parentId?: bigint | undefined
  permissions?: NodePermissions | undefined
  quota?: bigint | undefined
  recycleBinRetentionPeriod: number
  size?: bigint | undefined
  type?: 'room' | undefined
  updatedAt?: string | undefined
  updatedBy?: UserInfo | undefined
}
type RoomTreeDataList = { items: RoomData[]; range: Range }
type ChangeGroupMembersRequest = { ids: bigint[] }
type GroupUser = {
  displayName: string
  email: string
  id: bigint
  isMember: boolean
  login: string
  userInfo: UserInfo
}
type GroupUserList = { items: GroupUser[]; range: Range }
type SubscriptionPlanResponse = { subscriptionPlanId: number }
type SubscriptionPlanRequest = { subscriptionPlanId: number }
type DeleteNodesRequest = { nodeIds: bigint[] }
type EncryptionInfo = {
  dataSpaceKeyState: 'none' | 'available' | 'pending'
  roomKeyState: 'none' | 'available' | 'pending'
  userKeyState: 'none' | 'available' | 'pending'
}
type Node = {
  authParentId?: bigint | undefined
  branchVersion?: bigint | undefined
  children?: Node[] | undefined
  classification?: 1 | 2 | 3 | 4 | undefined
  cntChildren?: number | undefined
  cntComments?: number | undefined
  cntDeletedVersions?: number | undefined
  cntDownloadShares?: number | undefined
  cntFiles?: number | undefined
  cntFolders?: number | undefined
  cntRooms?: number | undefined
  cntUploadShares?: number | undefined
  createdAt?: string | undefined
  createdBy?: UserInfo | undefined
  encryptionInfo?: EncryptionInfo | undefined
  expireAt?: string | undefined
  fileType?: string | undefined
  hasActivitiesLog?: boolean | undefined
  hash?: string | undefined
  id: bigint
  inheritPermissions?: boolean | undefined
  isBrowsable?: boolean | undefined
  isEncrypted?: boolean | undefined
  isFavorite?: boolean | undefined
  mediaToken?: string | undefined
  mediaType?: string | undefined
  name: string
  notes?: string | undefined
  parentId?: bigint | undefined
  parentPath?: string | undefined
  permissions?: NodePermissions | undefined
  quota?: bigint | undefined
  recycleBinRetentionPeriod?: number | undefined
  referenceId?: bigint | undefined
  size?: bigint | undefined
  timestampCreation?: string | undefined
  timestampModification?: string | undefined
  type: 'room' | 'folder' | 'file'
  updatedAt?: string | undefined
  updatedBy?: UserInfo | undefined
}
type NodeList = { items: Node[]; range: Range }
type ChangeNodeCommentRequest = { text: string }
type Comment = {
  createdAt: string
  createdBy: UserInfo
  id: bigint
  isChanged: boolean
  isDeleted: boolean
  text: string
  updatedAt: string
  updatedBy: UserInfo
}
type DeleteDeletedNodesRequest = { deletedNodeIds: bigint[] }
type RestoreDeletedNodesRequest = {
  deletedNodeIds: bigint[]
  keepShareLinks?: boolean | undefined
  parentId?: bigint | undefined
  resolutionStrategy?: 'autorename' | 'overwrite' | 'fail' | undefined
}
type DeletedNode = {
  accessedAt?: string | undefined
  classification?: 1 | 2 | 3 | 4 | undefined
  createdAt?: string | undefined
  createdBy?: UserInfo | undefined
  deletedAt?: string | undefined
  deletedBy?: UserInfo | undefined
  expireAt?: string | undefined
  id?: bigint | undefined
  isEncrypted?: boolean | undefined
  name: string
  notes?: string | undefined
  parentId: bigint
  parentPath: string
  referenceId?: bigint | undefined
  size?: bigint | undefined
  type: 'folder' | 'file'
  updatedAt?: string | undefined
  updatedBy?: UserInfo | undefined
}
type UpdateFavoritesBulkRequest = { isFavorite: boolean; objectIds: bigint[] }
type UpdateFilesBulkRequest = {
  classification?: number | undefined
  expiration?: ObjectExpiration | undefined
  objectIds: bigint[]
}
type FileKey = { iv: string; key: string; tag: string; version: string }
type UserFileKeySetRequest = { fileId: bigint; fileKey: FileKey; userId: bigint }
type UserFileKeySetBatchRequest = { items: UserFileKeySetRequest[] }
type CreateFileUploadRequest = {
  classification?: 1 | 2 | 3 | 4 | undefined
  directS3Upload?: boolean | undefined
  expiration?: ObjectExpiration | undefined
  name: string
  notes?: string | undefined
  parentId: bigint
  size?: bigint | undefined
  timestampCreation?: string | undefined
  timestampModification?: string | undefined
}
type CreateFileUploadResponse = { token: string; uploadId: string; uploadUrl: string }
type S3FileUploadStatus = {
  errorDetails?: ErrorResponse | undefined
  node?: Node | undefined
  status: string
}
type ChunkUploadResponse = { hash?: string | undefined; size: bigint }
type UserFileKey = { fileKey: FileKey; userId: bigint }
type UserFileKeyList = { items?: UserFileKey[] | undefined }
type CompleteUploadRequest = {
  fileKey?: FileKey | undefined
  fileName?: string | undefined
  keepShareLinks?: boolean | undefined
  resolutionStrategy?: 'autorename' | 'overwrite' | 'fail' | undefined
  userFileKeyList?: UserFileKeyList | undefined
}
type S3FileUploadPart = { partEtag: string; partNumber: number }
type CompleteS3FileUploadRequest = {
  fileKey?: FileKey | undefined
  fileName?: string | undefined
  keepShareLinks?: boolean | undefined
  parts: S3FileUploadPart[]
  resolutionStrategy?: 'autorename' | 'overwrite' | 'fail' | undefined
}
type GeneratePresignedUrlsRequest = {
  firstPartNumber: number
  lastPartNumber: number
  size: bigint
}
type PresignedUrl = { partNumber: number; url: string }
type PresignedUrlList = { urls: PresignedUrl[] }
type FileVersion = {
  deleted?: boolean | undefined
  id: bigint
  name: string
  parentId?: bigint | undefined
  referenceId: bigint
}
type FileVersionList = { items: FileVersion[]; range: Range }
type UpdateFileRequest = {
  classification?: number | undefined
  expiration?: ObjectExpiration | undefined
  name?: string | undefined
  notes?: string | undefined
  timestampCreation?: string | undefined
  timestampModification?: string | undefined
}
type DownloadTokenGenerateResponse = { downloadUrl: string }
type CreateFolderRequest = {
  classification?: 1 | 2 | 3 | 4 | undefined
  name: string
  notes?: string | undefined
  parentId: bigint
  timestampCreation?: string | undefined
  timestampModification?: string | undefined
}
type UpdateFolderRequest = {
  classification?: 1 | 2 | 3 | 4 | undefined
  name?: string | undefined
  notes?: string | undefined
  timestampCreation?: string | undefined
  timestampModification?: string | undefined
}
type FileKeyContainer = { iv: string; key: string; tag?: string | undefined; version: string }
type FileFileKeys = { fileKeyContainer?: FileKeyContainer | undefined; id?: bigint | undefined }
type UserIdFileIdItem = { fileId?: bigint | undefined; userId?: bigint | undefined }
type PublicKeyContainer = {
  createdAt?: string | undefined
  createdBy?: bigint | undefined
  publicKey: string
  version: string
}
type UserUserPublicKey = {
  id?: bigint | undefined
  publicKeyContainer?: PublicKeyContainer | undefined
}
type MissingKeysResponse = {
  files?: FileFileKeys[] | undefined
  items?: UserIdFileIdItem[] | undefined
  range?: Range | undefined
  users?: UserUserPublicKey[] | undefined
}
type CreateRoomRequest = {
  adminGroupIds?: bigint[] | undefined
  adminIds?: bigint[] | undefined
  classification?: 1 | 2 | 3 | 4 | undefined
  hasActivitiesLog?: boolean | undefined
  hasRecycleBin?: boolean | undefined
  inheritPermissions?: boolean | undefined
  name: string
  newGroupMemberAcceptance?: 'autoallow' | 'pending' | undefined
  notes?: string | undefined
  parentId?: bigint | undefined
  quota?: bigint | undefined
  recycleBinRetentionPeriod?: number | undefined
  timestampCreation?: string | undefined
  timestampModification?: string | undefined
}
type GroupInfo = { id: bigint; name: string }
type PendingGroupData = { id: bigint; name: string }
type PendingUserData = { displayName: string; email: string; id: bigint; login: string }
type PendingAssignmentData = {
  groupInfo: GroupInfo
  pendingGroupData: PendingGroupData
  pendingUserData: PendingUserData
  roomId: bigint
  roomName: string
  state: 'ACCEPTED' | 'DENIED' | 'WAITING'
  userInfo: UserInfo
}
type PendingAssignmentList = { items: PendingAssignmentData[]; range?: Range | undefined }
type PendingAssignment = {
  groupId: bigint
  roomId: bigint
  roomName: string
  state: 'ACCEPTED' | 'DENIED' | 'WAITING'
  userId: bigint
}
type PendingAssignmentsRequest = { items: PendingAssignment[] }
type UpdateRoomRequest = {
  name?: string | undefined
  notes?: string | undefined
  quota?: bigint | undefined
  timestampCreation?: string | undefined
  timestampModification?: string | undefined
}
type ConfigRoomRequest = {
  adminGroupIds?: bigint[] | undefined
  adminIds?: bigint[] | undefined
  classification?: 1 | 2 | 3 | 4 | undefined
  hasActivitiesLog?: boolean | undefined
  inheritPermissions?: boolean | undefined
  newGroupMemberAcceptance?: 'autoallow' | 'pending' | undefined
  recycleBinRetentionPeriod?: number | undefined
  takeOverPermissions?: boolean | undefined
}
type PrivateKeyContainer = {
  createdAt?: string | undefined
  createdBy?: bigint | undefined
  privateKey: string
  version: string
}
type UserKeyPairContainer = {
  privateKeyContainer: PrivateKeyContainer
  publicKeyContainer: PublicKeyContainer
}
type EncryptRoomRequest = {
  dataRoomRescueKey?: UserKeyPairContainer | undefined
  isEncrypted: boolean
  useDataSpaceRescueKey?: boolean | undefined
}
type RoomGroupsDeleteBatchRequest = { ids: bigint[] }
type RoomGroup = {
  id: bigint
  isGranted: boolean
  name: string
  newGroupMemberAcceptance?: 'autoallow' | 'pending' | undefined
  permissions?: NodePermissions | undefined
}
type RoomGroupList = { items: RoomGroup[]; range: Range }
type RoomGroupsAddBatchRequestItem = {
  id: bigint
  newGroupMemberAcceptance?: 'autoallow' | 'pending' | undefined
  permissions: NodePermissions
}
type RoomGroupsAddBatchRequest = { items: RoomGroupsAddBatchRequestItem[] }
type RoomGuestUserInvitation = { email: string; firstName: string; lastName: string }
type RoomGuestUserAddRequest = { roomGuestInvitations: RoomGuestUserInvitation[] }
type CreateKeyPairRequest = {
  previousPrivateKey: PrivateKeyContainer
  privateKeyContainer: PrivateKeyContainer
  publicKeyContainer: PublicKeyContainer
}
type RoomPolicies = { defaultExpirationPeriod: number }
type RoomPoliciesRequest = { defaultExpirationPeriod?: number | undefined }
type S3TagIds = { ids: bigint[] }
type RoomUsersDeleteBatchRequest = { ids: bigint[] }
type RoomUser = {
  displayName: string
  email: string
  id: bigint
  isGranted: boolean
  login: string
  permissions?: NodePermissions | undefined
  publicKeyContainer?: PublicKeyContainer | undefined
  userInfo: UserInfo
}
type RoomUserList = { items: RoomUser[]; range: Range }
type RoomUsersAddBatchRequestItem = { id: bigint; permissions: NodePermissions }
type RoomUsersAddBatchRequest = { items: RoomUsersAddBatchRequestItem[] }
type Webhook = {
  createdAt: string
  createdBy?: UserInfo | undefined
  eventTypeNames: string[]
  expireAt: string
  failStatus?: number | undefined
  id: bigint
  isEnabled: boolean
  name: string
  secret?: string | undefined
  updatedAt: string
  updatedBy?: UserInfo | undefined
  url: string
}
type RoomWebhook = { isAssigned: boolean; webhook: Webhook }
type RoomWebhookList = { items: RoomWebhook[]; range: Range }
type RoomWebhookAssignment = { isAssigned: boolean; webhookId: bigint }
type UpdateRoomWebhookRequest = { items: RoomWebhookAssignment[] }
type ZipDownloadRequest = { nodeIds: bigint[] }
type CommentList = { items: Comment[]; range: Range }
type CreateNodeCommentRequest = { text: string }
type CopyNode = {
  id: bigint
  name?: string | undefined
  timestampCreation?: string | undefined
  timestampModification?: string | undefined
}
type CopyNodesRequest = {
  items?: CopyNode[] | undefined
  keepShareLinks?: boolean | undefined
  nodeIds?: bigint[] | undefined
  resolutionStrategy?: 'autorename' | 'overwrite' | 'fail' | undefined
}
type DeletedNodeSummary = {
  cntVersions: number
  firstDeletedAt: string
  lastDeletedAt: string
  lastDeletedNodeId: bigint
  name: string
  parentId: bigint
  parentPath: string
  referenceId?: bigint | undefined
  timestampCreation?: string | undefined
  timestampModification?: string | undefined
  type: 'folder' | 'file'
}
type DeletedNodeSummaryList = { items: DeletedNodeSummary[]; range: Range }
type DeletedNodeVersionsList = { items: DeletedNode[]; range: Range }
type MoveNode = {
  id: bigint
  name?: string | undefined
  timestampCreation?: string | undefined
  timestampModification?: string | undefined
}
type MoveNodesRequest = {
  items?: MoveNode[] | undefined
  keepShareLinks?: boolean | undefined
  nodeIds?: bigint[] | undefined
  resolutionStrategy?: 'autorename' | 'overwrite' | 'fail' | undefined
}
type NodeParent = { id: bigint; name: string; parentId?: bigint | undefined; type: string }
type NodeParentList = { items?: NodeParent[] | undefined }
type CustomerAttributes = { items: KeyValueEntry[] }
type Customer = {
  activationCode?: string | undefined
  cntGuestUser: number
  cntInternalUser: number
  companyName: string
  createdAt: string
  customerAttributes?: CustomerAttributes | undefined
  customerContractType: 'demo' | 'free' | 'pay'
  customerUuid: string
  id: bigint
  isLocked?: boolean | undefined
  lastLoginAt?: string | undefined
  lockStatus: boolean
  providerCustomerId?: string | undefined
  quotaMax: bigint
  quotaUsed: bigint
  trialDaysLeft?: number | undefined
  updatedAt?: string | undefined
  userMax: number
  userUsed: number
  webhooksMax?: bigint | undefined
}
type CustomerList = { items: Customer[]; range: Range }
type UserAuthData = {
  adConfigId?: number | undefined
  login?: string | undefined
  method: string
  mustChangePassword?: boolean | undefined
  oidConfigId?: number | undefined
  password?: string | undefined
}
type UserAuthMethod = { authId: string; isEnabled: boolean; options?: KeyValueEntry[] | undefined }
type FirstAdminUser = {
  authData?: UserAuthData | undefined
  authMethods?: UserAuthMethod[] | undefined
  email?: string | undefined
  firstName: string
  gender?: string | undefined
  language?: string | undefined
  lastName: string
  login?: string | undefined
  needsToChangePassword?: boolean | undefined
  needsToChangeUserName?: boolean | undefined
  notifyUser?: boolean | undefined
  password?: string | undefined
  phone?: string | undefined
  receiverLanguage?: string | undefined
  title?: string | undefined
  userName?: string | undefined
}
type NewCustomerRequest = {
  activationCode?: string | undefined
  companyName?: string | undefined
  customerAttributes?: CustomerAttributes | undefined
  customerContractType: 'demo' | 'free' | 'pay'
  firstAdminUser: FirstAdminUser
  isLocked?: boolean | undefined
  lockStatus?: boolean | undefined
  providerCustomerId?: string | undefined
  quotaMax: bigint
  trialDays?: number | undefined
  userMax: number
  webhooksMax?: bigint | undefined
}
type NewCustomerResponse = {
  activationCode?: string | undefined
  companyName: string
  createdAt?: string | undefined
  customerAttributes?: CustomerAttributes | undefined
  customerContractType: 'demo' | 'free' | 'pay'
  customerUuid: string
  firstAdminUser: FirstAdminUser
  id?: bigint | undefined
  isLocked?: boolean | undefined
  lockStatus: boolean
  providerCustomerId?: string | undefined
  quotaMax: bigint
  trialDays?: number | undefined
  userMax: number
  webhooksMax?: bigint | undefined
}
type UpdateCustomerRequest = {
  companyName?: string | undefined
  customerContractType: 'demo' | 'free' | 'pay'
  isLocked?: boolean | undefined
  lockStatus?: boolean | undefined
  providerCustomerId?: string | undefined
  quotaMax?: bigint | undefined
  userMax?: number | undefined
  webhooksMax?: bigint | undefined
}
type UpdateCustomerResponse = {
  activationCode?: string | undefined
  companyName: string
  createdAt?: string | undefined
  customerAttributes?: CustomerAttributes | undefined
  customerContractType: 'demo' | 'free' | 'pay'
  customerUuid: string
  id: bigint
  isLocked?: boolean | undefined
  lockStatus: boolean
  providerCustomerId?: string | undefined
  quotaMax: bigint
  trialDays?: number | undefined
  updatedAt?: string | undefined
  userMax: number
  webhooksMax?: bigint | undefined
}
type AttributesResponse = { items: KeyValueEntry[]; range: Range }
type UserAttributes = { items: KeyValueEntry[] }
type UserItem = {
  avatarUuid: string
  createdAt?: string | undefined
  email?: string | undefined
  expireAt?: string | undefined
  firstName: string
  gender?: string | undefined
  hasManageableRooms?: boolean | undefined
  homeRoomId?: bigint | undefined
  id: bigint
  isEncryptionEnabled?: boolean | undefined
  isLocked: boolean
  lastLoginSuccessAt?: string | undefined
  lastName: string
  lockStatus: number
  login: string
  phone?: string | undefined
  title?: string | undefined
  userAttributes?: UserAttributes | undefined
  userName: string
  userRoles?: RoleList | undefined
}
type UserList = { items: UserItem[]; range: Range }
type WebhookList = { items: Webhook[]; range: Range }
type CreateWebhookRequest = {
  eventTypeNames: string[]
  isEnabled?: boolean | undefined
  name: string
  secret?: string | undefined
  triggerExampleEvent?: boolean | undefined
  url: string
}
type EventType = {
  id: number
  name: string
  usableCustomerAdminWebhook: boolean
  usableNodeWebhook: boolean
  usablePushNotification: boolean
  usableTenantWebhook: boolean
}
type EventTypeList = { items: EventType[] }
type UpdateWebhookRequest = {
  eventTypeNames?: string[] | undefined
  isEnabled?: boolean | undefined
  name?: string | undefined
  secret?: string | undefined
  triggerExampleEvent?: boolean | undefined
  url?: string | undefined
}
type PublicDownloadShare = {
  createdAt: string
  creatorName: string
  creatorUsername?: string | undefined
  expireAt?: string | undefined
  fileKey?: FileKey | undefined
  fileName: string
  hasDownloadLimit: boolean
  isEncrypted?: boolean | undefined
  isProtected: boolean
  limitReached: boolean
  mediaType: string
  name?: string | undefined
  notes?: string | undefined
  privateKeyContainer?: PrivateKeyContainer | undefined
  size: bigint
}
type PublicDownloadTokenGenerateRequest = { password?: string | undefined }
type PublicDownloadTokenGenerateResponse = { downloadUrl?: string | undefined }
type PublicUploadedFileData = {
  createdAt: string
  hash?: string | undefined
  name: string
  size: bigint
}
type UserUserPublicKeyList = { items: UserUserPublicKey[] }
type PublicUploadShare = {
  createdAt: string
  creatorName: string
  creatorUsername?: string | undefined
  expireAt?: string | undefined
  isEncrypted?: boolean | undefined
  isProtected: boolean
  name?: string | undefined
  notes?: string | undefined
  remainingSize?: bigint | undefined
  remainingSlots?: number | undefined
  showUploadedFiles?: boolean | undefined
  uploadedFiles?: PublicUploadedFileData[] | undefined
  userUserPublicKeyList?: UserUserPublicKeyList | undefined
}
type CreateShareUploadChannelRequest = {
  directS3Upload?: boolean | undefined
  name: string
  password?: string | undefined
  size?: bigint | undefined
  timestampCreation?: string | undefined
  timestampModification?: string | undefined
}
type CreateShareUploadChannelResponse = { uploadId: string; uploadUrl: string }
type S3ShareUploadStatus = {
  errorDetails?: ErrorResponse | undefined
  fileName: string
  size?: bigint | undefined
  status: string
}
type CompleteS3ShareUploadRequest = {
  parts: S3FileUploadPart[]
  userFileKeyList?: UserFileKey[] | undefined
}
type ThirdPartyDependenciesData = {
  artifactId: string
  description: string
  groupId: string
  id: string
  licenses: string[]
  name: string
  type: string
  url: string
  version: string
}
type SoftwareVersionData = {
  buildDate: string
  isDracoonCloud?: boolean | undefined
  restApiVersion: string
  scmRevisionNumber: string
  sdsServerVersion: string
}
type AuthMethod = { isEnabled: boolean; name: string; priority: number }
type SystemInfo = {
  authMethods: AuthMethod[]
  hideLoginInputFields: boolean
  languageDefault: string
  s3EnforceDirectUpload: boolean
  s3Hosts: string[]
  useS3Storage: boolean
}
type ActiveDirectory = { alias: string; id: number; isGlobalAvailable: boolean }
type ActiveDirectoryAuthInfo = { items: ActiveDirectory[] }
type OpenIdProvider = {
  id: number
  isGlobalAvailable: boolean
  issuer: string
  mappingClaim: string
  name: string
  userManagementUrl?: string | undefined
}
type OpenIdAuthInfo = { items: OpenIdProvider[] }
type SdsServerTime = { time?: string | undefined }
type NotificationScope = { id: number; name: string }
type NotificationScopeList = { items: NotificationScope[] }
type Avatar = { avatarUri: string; avatarUuid: string; isCustomAvatar: boolean }
type GroupIds = { ids: bigint[] }
type RoleGroup = { id: bigint; isMember: boolean; name: string }
type RoleGroupList = { items: RoleGroup[]; range: Range }
type UserIds = { ids: bigint[] }
type RoleUser = { displayName: string; id: bigint; isMember: boolean; userInfo: UserInfo }
type RoleUserList = { items: RoleUser[]; range: Range }
type CustomerSettingsResponse = {
  homeRoomParentId?: bigint | undefined
  homeRoomParentName?: string | undefined
  homeRoomQuota?: bigint | undefined
  homeRoomsActive: boolean
}
type CustomerSettingsRequest = {
  homeRoomParentName?: string | undefined
  homeRoomQuota?: bigint | undefined
  homeRoomsActive?: boolean | undefined
}
type NotificationChannelActivationRequest = { channelId: number; isEnabled: boolean }
type DeleteDownloadSharesRequest = { shareIds: bigint[] }
type DownloadShare = {
  accessKey: string
  classification?: 1 | 2 | 3 | 4 | undefined
  cntDownloads: number
  createdAt: string
  createdBy: UserInfo
  dataUrl?: string | undefined
  expireAt?: string | undefined
  id: bigint
  internalNotes?: string | undefined
  isEncrypted?: boolean | undefined
  isProtected?: boolean | undefined
  maxDownloads?: number | undefined
  name: string
  nodeId: bigint
  nodePath?: string | undefined
  nodeType?: string | undefined
  notes?: string | undefined
  notifyCreator: boolean
  recipients?: string | undefined
  showCreatorName?: boolean | undefined
  showCreatorUsername?: boolean | undefined
  smsRecipients?: string | undefined
  updatedAt?: string | undefined
  updatedBy?: UserInfo | undefined
}
type DownloadShareList = { items: DownloadShare[]; range: Range }
type CreateDownloadShareRequest = {
  creatorLanguage?: string | undefined
  expiration?: ObjectExpiration | undefined
  fileKey?: FileKey | undefined
  internalNotes?: string | undefined
  keyPair?: UserKeyPairContainer | undefined
  mailBody?: string | undefined
  mailRecipients?: string | undefined
  mailSubject?: string | undefined
  maxDownloads?: number | undefined
  name?: string | undefined
  nodeId: bigint
  notes?: string | undefined
  notifyCreator?: boolean | undefined
  password?: string | undefined
  receiverLanguage?: string | undefined
  sendMail?: boolean | undefined
  sendSms?: boolean | undefined
  showCreatorName?: boolean | undefined
  showCreatorUsername?: boolean | undefined
  smsRecipients?: string | undefined
  textMessageRecipients?: string[] | undefined
}
type UpdateDownloadSharesBulkRequest = {
  expiration?: ObjectExpiration | undefined
  maxDownloads?: number | undefined
  objectIds: bigint[]
  resetMaxDownloads?: boolean | undefined
  showCreatorName?: boolean | undefined
  showCreatorUsername?: boolean | undefined
}
type UpdateDownloadShareRequest = {
  defaultCountry?: string | undefined
  expiration?: ObjectExpiration | undefined
  internalNotes?: string | undefined
  maxDownloads?: number | undefined
  name?: string | undefined
  notes?: string | undefined
  notifyCreator?: boolean | undefined
  password?: string | undefined
  receiverLanguage?: string | undefined
  resetMaxDownloads?: boolean | undefined
  resetPassword?: boolean | undefined
  showCreatorName?: boolean | undefined
  showCreatorUsername?: boolean | undefined
  textMessageRecipients?: string[] | undefined
}
type DownloadShareLinkEmail = {
  body: string
  receiverLanguage?: string | undefined
  recipients: string[]
}
type DeleteUploadSharesRequest = { shareIds: bigint[] }
type UploadShare = {
  accessKey: string
  cntFiles?: number | undefined
  cntUploads?: number | undefined
  createdAt: string
  createdBy: UserInfo
  dataUrl?: string | undefined
  expireAt?: string | undefined
  filesExpiryPeriod?: number | undefined
  id: bigint
  internalNotes?: string | undefined
  isEncrypted?: boolean | undefined
  isProtected: boolean
  maxSize?: bigint | undefined
  maxSlots?: number | undefined
  name: string
  notes?: string | undefined
  notifyCreator: boolean
  recipients?: string | undefined
  showCreatorName?: boolean | undefined
  showCreatorUsername?: boolean | undefined
  showUploadedFiles?: boolean | undefined
  smsRecipients?: string | undefined
  targetId: bigint
  targetPath?: string | undefined
  targetType?: string | undefined
  updatedAt?: string | undefined
  updatedBy?: UserInfo | undefined
}
type UploadShareList = { items: UploadShare[]; range: Range }
type CreateUploadShareRequest = {
  creatorLanguage?: string | undefined
  expiration?: ObjectExpiration | undefined
  filesExpiryPeriod?: number | undefined
  internalNotes?: string | undefined
  mailBody?: string | undefined
  mailRecipients?: string | undefined
  mailSubject?: string | undefined
  maxSize?: bigint | undefined
  maxSlots?: number | undefined
  name?: string | undefined
  notes?: string | undefined
  notifyCreator?: boolean | undefined
  password?: string | undefined
  receiverLanguage?: string | undefined
  sendMail?: boolean | undefined
  sendSms?: boolean | undefined
  showCreatorName?: boolean | undefined
  showCreatorUsername?: boolean | undefined
  showUploadedFiles?: boolean | undefined
  smsRecipients?: string | undefined
  targetId: bigint
  textMessageRecipients?: string[] | undefined
}
type UpdateUploadSharesBulkRequest = {
  expiration?: ObjectExpiration | undefined
  filesExpiryPeriod?: number | undefined
  maxSize?: bigint | undefined
  maxSlots?: number | undefined
  objectIds: bigint[]
  resetFilesExpiryPeriod?: boolean | undefined
  resetMaxSize?: boolean | undefined
  resetMaxSlots?: boolean | undefined
  showCreatorName?: boolean | undefined
  showCreatorUsername?: boolean | undefined
  showUploadedFiles?: boolean | undefined
}
type UpdateUploadShareRequest = {
  defaultCountry?: string | undefined
  expiration?: ObjectExpiration | undefined
  filesExpiryPeriod?: number | undefined
  internalNotes?: string | undefined
  maxSize?: bigint | undefined
  maxSlots?: number | undefined
  name?: string | undefined
  notes?: string | undefined
  notifyCreator?: boolean | undefined
  password?: string | undefined
  receiverLanguage?: string | undefined
  resetFilesExpiryPeriod?: boolean | undefined
  resetMaxSize?: boolean | undefined
  resetMaxSlots?: boolean | undefined
  resetPassword?: boolean | undefined
  showCreatorName?: boolean | undefined
  showCreatorUsername?: boolean | undefined
  showUploadedFiles?: boolean | undefined
  textMessageRecipients?: string[] | undefined
}
type UploadShareLinkEmail = {
  body: string
  receiverLanguage?: string | undefined
  recipients: string[]
}
type TestActiveDirectoryConfigRequest = {
  ldapUsersDomain: string
  serverAdminName: string
  serverAdminPassword: string
  serverIp: string
  serverPort: number
  sslFingerPrint?: string | undefined
  useLdaps?: boolean | undefined
}
type TestActiveDirectoryConfigResponse = {
  ldapUsersDomain: string
  serverAdminName: string
  serverAdminPassword: string
  serverIp: string
  serverPort: number
  sslFingerPrint?: string | undefined
  useLdaps: boolean
}
type ActiveDirectoryConfig = {
  adExportGroup: string
  alias: string
  createHomeFolder?: boolean | undefined
  homeFolderParent?: bigint | undefined
  id: number
  ldapUsersDomain: string
  sdsImportGroup?: bigint | undefined
  serverAdminName: string
  serverIp: string
  serverPort: number
  sslFingerPrint?: string | undefined
  useLdaps: boolean
  userFilter: string
  userImport: boolean
}
type ActiveDirectoryConfigList = { items: ActiveDirectoryConfig[] }
type CreateActiveDirectoryConfigRequest = {
  adExportGroup?: string | undefined
  alias: string
  createHomeFolder?: boolean | undefined
  homeFolderParent?: bigint | undefined
  ldapUsersDomain: string
  sdsImportGroup?: bigint | undefined
  serverAdminName: string
  serverAdminPassword: string
  serverIp: string
  serverPort: number
  sslFingerPrint?: string | undefined
  useLdaps?: boolean | undefined
  userFilter: string
  userImport?: boolean | undefined
}
type UpdateActiveDirectoryConfigRequest = {
  adExportGroup?: string | undefined
  alias?: string | undefined
  createHomeFolder?: boolean | undefined
  homeFolderParent?: bigint | undefined
  ldapUsersDomain?: string | undefined
  sdsImportGroup?: bigint | undefined
  serverAdminName?: string | undefined
  serverAdminPassword?: string | undefined
  serverIp?: string | undefined
  serverPort?: number | undefined
  sslFingerPrint?: string | undefined
  useLdaps?: boolean | undefined
  userFilter?: string | undefined
  userImport?: boolean | undefined
}
type OpenIdIdpConfig = {
  authorizationEndPointUrl?: string | undefined
  clientId?: string | undefined
  clientSecret?: string | undefined
  fallbackMappingClaim?: string | undefined
  flow?: 'authorization_code' | 'hybrid' | undefined
  id: number
  issuer?: string | undefined
  jwksEndPointUrl?: string | undefined
  mappingClaim?: string | undefined
  name?: string | undefined
  pkceChallengeMethod?: string | undefined
  pkceEnabled?: boolean | undefined
  redirectUris?: string[] | undefined
  scopes?: string[] | undefined
  tokenEndPointUrl?: string | undefined
  userImportEnabled?: boolean | undefined
  userImportGroup?: bigint | undefined
  userInfoEndPointUrl?: string | undefined
  userInfoSource?: 'user_info_endpoint' | 'id_token' | undefined
  userManagementUrl?: string | undefined
  userUpdateEnabled?: boolean | undefined
}
type CreateOpenIdIdpConfigRequest = {
  authorizationEndPointUrl: string
  clientId: string
  clientSecret: string
  fallbackMappingClaim?: string | undefined
  flow?: 'authorization_code' | 'hybrid' | undefined
  issuer: string
  jwksEndPointUrl: string
  mappingClaim: string
  name: string
  pkceChallengeMethod?: string | undefined
  pkceEnabled?: boolean | undefined
  redirectUris: string[]
  scopes: string[]
  tokenEndPointUrl: string
  userImportEnabled?: boolean | undefined
  userImportGroup?: bigint | undefined
  userInfoEndPointUrl: string
  userInfoSource?: 'user_info_endpoint' | 'id_token' | undefined
  userManagementUrl?: string | undefined
  userUpdateEnabled?: boolean | undefined
}
type UpdateOpenIdIdpConfigRequest = {
  authorizationEndPointUrl?: string | undefined
  clientId?: string | undefined
  clientSecret?: string | undefined
  fallbackMappingClaim?: string | undefined
  flow?: 'authorization_code' | 'hybrid' | undefined
  issuer?: string | undefined
  jwksEndPointUrl?: string | undefined
  mappingClaim?: string | undefined
  name?: string | undefined
  pkceChallengeMethod?: string | undefined
  pkceEnabled?: boolean | undefined
  redirectUris?: string[] | undefined
  resetFallbackMappingClaim?: boolean | undefined
  scopes?: string[] | undefined
  tokenEndPointUrl?: string | undefined
  userImportEnabled?: boolean | undefined
  userImportGroup?: bigint | undefined
  userInfoEndPointUrl?: string | undefined
  userInfoSource?: 'user_info_endpoint' | 'id_token' | undefined
  userManagementUrl?: string | undefined
  userUpdateEnabled?: boolean | undefined
}
type FailoverServer = { failoverEnabled: boolean; failoverIpAddress: string; failoverPort: number }
type RadiusConfig = {
  failoverServer?: FailoverServer | undefined
  ipAddress: string
  otpPinFirst: boolean
  port: number
  sharedSecret: string
}
type RadiusConfigCreateRequest = {
  failoverServer?: FailoverServer | undefined
  ipAddress: string
  otpPinFirst?: boolean | undefined
  port: number
  sharedSecret: string
}
type RadiusConfigUpdateRequest = {
  failoverServer?: FailoverServer | undefined
  ipAddress?: string | undefined
  otpPinFirst?: boolean | undefined
  port?: number | undefined
  sharedSecret?: string | undefined
}
type OAuthClient = {
  accessTokenValidity?: number | undefined
  approvalValidity?: number | undefined
  clientId: string
  clientName?: string | undefined
  clientSecret?: string | undefined
  clientType?: 'confidential' | 'public' | undefined
  grantTypes:
    | 'authorization_code'
    | 'client_credentials'
    | 'implicit'
    | 'password'
    | 'refresh_token'
  isEnabled?: boolean | undefined
  isExternal?: boolean | undefined
  isStandard?: boolean | undefined
  redirectUris?: string[] | undefined
  refreshTokenValidity?: number | undefined
}
type CreateOAuthClientRequest = {
  accessTokenValidity?: number | undefined
  approvalValidity?: number | undefined
  clientId?: string | undefined
  clientName: string
  clientSecret?: string | undefined
  clientType?: 'confidential' | 'public' | undefined
  grantTypes:
    | 'authorization_code'
    | 'client_credentials'
    | 'implicit'
    | 'password'
    | 'refresh_token'
  redirectUris: string[]
  refreshTokenValidity?: number | undefined
}
type UpdateOAuthClientRequest = {
  accessTokenValidity?: number | undefined
  approvalValidity?: number | undefined
  clientName?: string | undefined
  clientSecret?: string | undefined
  clientType?: 'confidential' | 'public' | undefined
  grantTypes:
    | 'authorization_code'
    | 'client_credentials'
    | 'implicit'
    | 'password'
    | 'refresh_token'
  isEnabled?: boolean | undefined
  redirectUris?: string[] | undefined
  refreshTokenValidity?: number | undefined
}
type UpdateClassificationPoliciesConfig = {
  shareClassificationPolicies?: ShareClassificationPolicies | undefined
}
type UpdateGuestUsersPoliciesConfig = { isInviteUsersEnabled: boolean }
type MfaPoliciesConfig = { isMfaEnforced: boolean }
type UpdateMfaPoliciesConfig = { isMfaEnforced: boolean }
type UpdateEncryptionPasswordPolicies = {
  characterRules?: CharacterRules | undefined
  minLength?: number | undefined
  rejectKeyboardPatterns?: boolean | undefined
  rejectUserInfo?: boolean | undefined
}
type UpdateLoginPasswordPolicies = {
  characterRules?: CharacterRules | undefined
  enforceLoginPasswordChange?: boolean | undefined
  minLength?: number | undefined
  numberOfArchivedPasswords?: number | undefined
  passwordExpiration?: PasswordExpiration | undefined
  rejectDictionaryWords?: boolean | undefined
  rejectKeyboardPatterns?: boolean | undefined
  rejectUserInfo?: boolean | undefined
  userLockout?: UserLockout | undefined
}
type UpdateSharesPasswordPolicies = {
  characterRules?: CharacterRules | undefined
  minLength?: number | undefined
  rejectDictionaryWords?: boolean | undefined
  rejectKeyboardPatterns?: boolean | undefined
  rejectUserInfo?: boolean | undefined
}
type UpdatePasswordPoliciesConfig = {
  encryptionPasswordPolicies?: UpdateEncryptionPasswordPolicies | undefined
  loginPasswordPolicies?: UpdateLoginPasswordPolicies | undefined
  sharesPasswordPolicies?: UpdateSharesPasswordPolicies | undefined
}
type AuthConfig = { authMethods: AuthMethod[] }
type UpdateSystemDefaults = {
  downloadShareDefaultExpirationPeriod?: number | undefined
  fileDefaultExpirationPeriod?: number | undefined
  languageDefault?: string | undefined
  nonmemberViewerDefault?: boolean | undefined
  uploadShareDefaultExpirationPeriod?: number | undefined
}
type EventlogConfig = {
  enabled?: boolean | undefined
  logIpEnabled?: boolean | undefined
  retentionPeriod?: number | undefined
}
type UpdateEventlogConfig = {
  enabled?: boolean | undefined
  logIpEnabled?: boolean | undefined
  retentionPeriod?: number | undefined
}
type GeneralSettings = {
  authTokenRestrictions?: AuthTokenRestrictions | undefined
  cryptoEnabled?: boolean | undefined
  emailNotificationButtonEnabled?: boolean | undefined
  eulaEnabled?: boolean | undefined
  hideLoginInputFields?: boolean | undefined
  mediaServerEnabled?: boolean | undefined
  s3TagsEnabled?: boolean | undefined
  sharePasswordSmsEnabled?: boolean | undefined
  useS3Storage?: boolean | undefined
  weakPasswordEnabled?: boolean | undefined
}
type UpdateAuthTokenRestrictions = {
  accessTokenValidity?: number | undefined
  overwriteEnabled: boolean
  refreshTokenValidity?: number | undefined
}
type UpdateGeneralSettings = {
  authTokenRestrictions?: UpdateAuthTokenRestrictions | undefined
  cryptoEnabled?: boolean | undefined
  emailNotificationButtonEnabled?: boolean | undefined
  eulaEnabled?: boolean | undefined
  hideLoginInputFields?: boolean | undefined
  mediaServerEnabled?: boolean | undefined
  s3TagsEnabled?: boolean | undefined
  sharePasswordSmsEnabled?: boolean | undefined
  weakPasswordEnabled?: boolean | undefined
}
type SyslogConfig = {
  enabled?: boolean | undefined
  host?: string | undefined
  logIpEnabled?: boolean | undefined
  port?: number | undefined
  protocol?: 'TCP' | 'UDP' | undefined
}
type UpdateSyslogConfig = {
  enabled?: boolean | undefined
  host?: string | undefined
  logIpEnabled?: boolean | undefined
  port?: number | undefined
  protocol?: 'TCP' | 'UDP' | undefined
}
type S3Config = {
  accessKeyDefined: boolean
  bucketName?: string | undefined
  bucketUrl: string
  endpointUrl?: string | undefined
  region?: string | undefined
  secretKeyDefined: boolean
}
type S3ConfigCreateRequest = {
  accessKey: string
  bucketName?: string | undefined
  bucketUrl?: string | undefined
  endpointUrl?: string | undefined
  region?: string | undefined
  secretKey: string
}
type S3ConfigUpdateRequest = {
  accessKey?: string | undefined
  bucketName?: string | undefined
  bucketUrl?: string | undefined
  endpointUrl?: string | undefined
  region?: string | undefined
  secretKey?: string | undefined
}
type S3TagCreateRequest = { isMandatory?: boolean | undefined; key: string; value: string }
type UserGroup = { id: bigint; isMember: boolean; name: string }
type UserAccount = {
  authData: UserAuthData
  authMethods?: UserAuthMethod[] | undefined
  email?: string | undefined
  expireAt?: string | undefined
  firstName: string
  gender?: string | undefined
  hasManageableRooms: boolean
  homeRoomId?: bigint | undefined
  id: bigint
  isEncryptionEnabled?: boolean | undefined
  isLocked: boolean
  language: string
  lastLoginFailAt?: string | undefined
  lastLoginFailIp?: string | undefined
  lastLoginSuccessAt?: string | undefined
  lastLoginSuccessIp?: string | undefined
  lastName: string
  lockStatus: number
  login?: string | undefined
  mustSetEmail?: boolean | undefined
  needsToAcceptEULA?: boolean | undefined
  needsToChangePassword: boolean
  needsToChangeUserName?: boolean | undefined
  phone?: string | undefined
  title?: string | undefined
  userAttributes?: UserAttributes | undefined
  userGroups?: UserGroup[] | undefined
  userName: string
  userRoles: RoleList
}
type UpdateUserAccountRequest = {
  acceptEULA?: boolean | undefined
  email?: string | undefined
  firstName?: string | undefined
  gender?: string | undefined
  language?: string | undefined
  lastName?: string | undefined
  login?: string | undefined
  phone?: string | undefined
  title?: string | undefined
  userName?: string | undefined
}
type CustomerData = {
  accountsLimit: number
  accountsUsed: number
  cntGuestUser: number
  cntInternalUser: number
  customerEncryptionEnabled: boolean
  id: bigint
  isProviderCustomer: boolean
  name: string
  spaceLimit: bigint
  spaceUsed: bigint
}
type EnableCustomerEncryptionRequest = {
  dataSpaceRescueKey: UserKeyPairContainer
  enableCustomerEncryption: boolean
}
type MfaSetupStatus = {
  createdAt: string
  id: bigint
  mfaType: 'TOTP' | 'EMERGENCY' | 'U2F'
  name: string
}
type UserMfaStatusResponse = { mfaEnforced: boolean; mfaSetups: MfaSetupStatus[] }
type TotpSetupResponse = { id: bigint; otpUri: string; qrCode: string; secret: string }
type MfaTotpConfirmationRequest = { id: bigint; otp: string }
type ChangeUserPasswordRequest = { newPassword: string; oldPassword: string }
type NotificationConfig = {
  channelIds: number[]
  eventTypeName: string
  id: bigint
  scopeId: number
}
type NotificationConfigList = { items: NotificationConfig[] }
type NotificationConfigChangeRequest = { channelIds: number[] }
type OAuthApproval = { clientId: string; clientName: string; expiresAt?: string | undefined }
type OAuthAuthorization = {
  clientId: string
  clientName: string
  createdAt?: string | undefined
  expiresAt?: string | undefined
  id?: bigint | undefined
  isCurrentAuthorization?: boolean | undefined
  isStandard?: boolean | undefined
  usedAt?: string | undefined
  userAgentCategory: 'browser' | 'native' | 'unknown'
  userAgentInfo?: string | undefined
  userAgentOs?: string | undefined
  userAgentType?: string | undefined
}
type ProfileAttributesRequest = { items: KeyValueEntry[] }
type ProfileAttributes = { items: KeyValueEntry[]; range: Range }
type SubscribedDownloadShare = { authParentId?: bigint | undefined; id: bigint }
type SubscribedDownloadShareList = { items: SubscribedDownloadShare[]; range: Range }
type UpdateSubscriptionsBulkRequest = { isSubscribed: boolean; objectIds: bigint[] }
type SubscribedNode = {
  authParentId?: bigint | undefined
  id: bigint
  type?: 'room' | 'folder' | 'file' | undefined
}
type SubscribedNodeList = { items: SubscribedNode[]; range: Range }
type SubscribedUploadShare = { id: bigint; targetNodeId?: bigint | undefined }
type SubscribedUploadShareList = { items: SubscribedUploadShare[]; range: Range }
type MfaConfig = { mfaEnforced?: boolean | undefined }
type CreateUserRequest = {
  authData?: UserAuthData | undefined
  authMethods?: UserAuthMethod[] | undefined
  email?: string | undefined
  expiration?: ObjectExpiration | undefined
  firstName: string
  gender?: string | undefined
  isNonmemberViewer?: boolean | undefined
  lastName: string
  login?: string | undefined
  mfaConfig?: MfaConfig | undefined
  needsToChangePassword?: boolean | undefined
  notifyUser?: boolean | undefined
  password?: string | undefined
  phone?: string | undefined
  receiverLanguage?: string | undefined
  title?: string | undefined
  userName?: string | undefined
}
type UserData = {
  authData: UserAuthData
  authMethods?: UserAuthMethod[] | undefined
  avatarUuid: string
  email?: string | undefined
  expireAt?: string | undefined
  firstName: string
  gender?: string | undefined
  hasManageableRooms?: boolean | undefined
  homeRoomId?: bigint | undefined
  id: bigint
  isEncryptionEnabled?: boolean | undefined
  isLocked: boolean
  isMfaEnabled?: boolean | undefined
  isMfaEnforced?: boolean | undefined
  lastLoginSuccessAt?: string | undefined
  lastName: string
  lockStatus: number
  login?: string | undefined
  phone?: string | undefined
  publicKeyContainer?: PublicKeyContainer | undefined
  title?: string | undefined
  userAttributes?: UserAttributes | undefined
  userName: string
  userRoles?: RoleList | undefined
}
type UserAuthDataUpdateRequest = {
  adConfigId?: number | undefined
  login?: string | undefined
  method?: string | undefined
  oidConfigId?: number | undefined
}
type UpdateUserRequest = {
  authData?: UserAuthDataUpdateRequest | undefined
  authMethods?: UserAuthMethod[] | undefined
  email?: string | undefined
  expiration?: ObjectExpiration | undefined
  firstName?: string | undefined
  gender?: string | undefined
  isLocked?: boolean | undefined
  lastName?: string | undefined
  lockStatus?: number | undefined
  mfaConfig?: MfaConfig | undefined
  phone?: string | undefined
  receiverLanguage?: string | undefined
  title?: string | undefined
  userName?: string | undefined
}
type UserGroupList = { items: UserGroup[]; range: Range }
type LastAdminUserRoom = {
  id: bigint
  lastAdminInGroup: boolean
  lastAdminInGroupId?: bigint | undefined
  name: string
  parentId?: bigint | undefined
  parentPath: string
}
type LastAdminUserRoomList = { items: LastAdminUserRoom[] }
type EmergencyMfaCodeResponse = { code: string }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v4/auth/login': {
      $post:
        | {
            input: { json: LoginRequest }
            output: LoginResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: LoginRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: LoginRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: LoginRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: LoginRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: LoginRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { json: LoginRequest }
            output: RadiusChallengeResponse
            outputFormat: 'json'
            status: 412
          }
        | {
            input: { json: LoginRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 502
          }
    }
  } & {
    '/v4/auth/openid/login': {
      $get:
        | {
            input: {
              query: { issuer: string; redirect_uri: string; language: string; test: boolean }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: {
              query: { issuer: string; redirect_uri: string; language: string; test: boolean }
            }
            output: {}
            outputFormat: string
            status: 302
          }
        | {
            input: {
              query: { issuer: string; redirect_uri: string; language: string; test: boolean }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: { issuer: string; redirect_uri: string; language: string; test: boolean }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: { issuer: string; redirect_uri: string; language: string; test: boolean }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: { issuer: string; redirect_uri: string; language: string; test: boolean }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: { issuer: string; redirect_uri: string; language: string; test: boolean }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 406
          }
        | {
            input: {
              query: { issuer: string; redirect_uri: string; language: string; test: boolean }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 502
          }
      $post:
        | {
            input: { query: { code: string; id_token?: string | undefined; state: string } }
            output: LoginResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { code: string; id_token?: string | undefined; state: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { code: string; id_token?: string | undefined; state: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { code: string; id_token?: string | undefined; state: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { code: string; id_token?: string | undefined; state: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { query: { code: string; id_token?: string | undefined; state: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { query: { code: string; id_token?: string | undefined; state: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 502
          }
    }
  } & {
    '/v4/auth/ping': {
      $get:
        | { input: {}; output: string; outputFormat: 'text'; status: 200 }
        | { input: {}; output: ErrorResponse; outputFormat: 'text'; status: 406 }
    }
  } & {
    '/v4/auth/recover_username': {
      $post:
        | { input: { json: RecoverUserNameRequest }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { json: RecoverUserNameRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: RecoverUserNameRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: RecoverUserNameRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 406
          }
    }
  } & {
    '/v4/auth/reset_password': {
      $post:
        | { input: { json: ResetPasswordRequest }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { json: ResetPasswordRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: ResetPasswordRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 406
          }
    }
  } & {
    '/v4/auth/reset_password/:token': {
      $get:
        | {
            input: { param: { token: string } }
            output: ResetPasswordTokenValidateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { token: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { token: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { token: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 406
          }
      $put:
        | {
            input: { param: { token: string } } & { json: ResetPasswordWithTokenRequest }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { token: string } } & { json: ResetPasswordWithTokenRequest }
            output: ErrorResponse | PasswordPolicyViolationResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { token: string } } & { json: ResetPasswordWithTokenRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { token: string } } & { json: ResetPasswordWithTokenRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 406
          }
    }
  } & {
    '/v4/config/info/defaults': {
      $get:
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: SystemDefaults
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 412
          }
    }
  } & {
    '/v4/config/info/general': {
      $get:
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: GeneralSettingsInfo
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 412
          }
    }
  } & {
    '/v4/config/info/infrastructure': {
      $get:
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: InfrastructureProperties
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 412
          }
    }
  } & {
    '/v4/config/info/notifications/channels': {
      $get:
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: NotificationChannelList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 412
          }
    }
  } & {
    '/v4/config/info/policies/algorithms': {
      $get:
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: AlgorithmVersionInfoList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 412
          }
    }
  } & {
    '/v4/config/info/policies/classifications': {
      $get:
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: ClassificationPoliciesConfig
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 406
          }
    }
  } & {
    '/v4/config/info/policies/guest_users': {
      $get:
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: GuestUsersPoliciesConfig
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 406
          }
    }
  } & {
    '/v4/config/info/policies/passwords': {
      $get:
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: PasswordPoliciesConfig
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 406
          }
    }
  } & {
    '/v4/config/info/product_packages': {
      $get:
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: ProductPackageResponseList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 412
          }
    }
  } & {
    '/v4/config/info/product_packages/current': {
      $get:
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: ProductPackageResponseList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 412
          }
    }
  } & {
    '/v4/config/info/s3_tags': {
      $get:
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: S3TagList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 412
          }
    }
  } & {
    '/v4/config/settings': {
      $get:
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: ConfigOptionList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 412
          }
      $put:
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: ConfigOptionList
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: ConfigOptionList
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: ConfigOptionList
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: ConfigOptionList
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: ConfigOptionList
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: ConfigOptionList
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: ConfigOptionList
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 412
          }
    }
  } & {
    '/v4/downloads/avatar/:user_id/:uuid': {
      $get:
        | {
            input: { param: { user_id: bigint; uuid: string } }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { user_id: bigint; uuid: string } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { user_id: bigint; uuid: string } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { user_id: bigint; uuid: string } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 406
          }
    }
  } & {
    '/v4/downloads/zip/:token': {
      $get:
        | { input: { param: { token: string } }; output: {}; outputFormat: string; status: 200 }
        | {
            input: { param: { token: string } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { token: string } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { token: string } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { token: string } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { token: string } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 406
          }
    }
  } & {
    '/v4/downloads/:token': {
      $get:
        | {
            input: { param: { token: string } } & {
              query: { generic_mimetype?: boolean | undefined; inline?: boolean | undefined }
            } & { header: { Range?: string | undefined } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { token: string } } & {
              query: { generic_mimetype?: boolean | undefined; inline?: boolean | undefined }
            } & { header: { Range?: string | undefined } }
            output: {}
            outputFormat: string
            status: 206
          }
        | {
            input: { param: { token: string } } & {
              query: { generic_mimetype?: boolean | undefined; inline?: boolean | undefined }
            } & { header: { Range?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { token: string } } & {
              query: { generic_mimetype?: boolean | undefined; inline?: boolean | undefined }
            } & { header: { Range?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { token: string } } & {
              query: { generic_mimetype?: boolean | undefined; inline?: boolean | undefined }
            } & { header: { Range?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { token: string } } & {
              query: { generic_mimetype?: boolean | undefined; inline?: boolean | undefined }
            } & { header: { Range?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { token: string } } & {
              query: { generic_mimetype?: boolean | undefined; inline?: boolean | undefined }
            } & { header: { Range?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 406
          }
        | {
            input: { param: { token: string } } & {
              query: { generic_mimetype?: boolean | undefined; inline?: boolean | undefined }
            } & { header: { Range?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 416
          }
      $head:
        | {
            input: { param: { token: string } } & {
              query: { generic_mimetype?: boolean | undefined; inline?: boolean | undefined }
            } & { header: { Range?: string | undefined } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { token: string } } & {
              query: { generic_mimetype?: boolean | undefined; inline?: boolean | undefined }
            } & { header: { Range?: string | undefined } }
            output: {}
            outputFormat: string
            status: 206
          }
        | {
            input: { param: { token: string } } & {
              query: { generic_mimetype?: boolean | undefined; inline?: boolean | undefined }
            } & { header: { Range?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { token: string } } & {
              query: { generic_mimetype?: boolean | undefined; inline?: boolean | undefined }
            } & { header: { Range?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { token: string } } & {
              query: { generic_mimetype?: boolean | undefined; inline?: boolean | undefined }
            } & { header: { Range?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { token: string } } & {
              query: { generic_mimetype?: boolean | undefined; inline?: boolean | undefined }
            } & { header: { Range?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { token: string } } & {
              query: { generic_mimetype?: boolean | undefined; inline?: boolean | undefined }
            } & { header: { Range?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 406
          }
        | {
            input: { param: { token: string } } & {
              query: { generic_mimetype?: boolean | undefined; inline?: boolean | undefined }
            } & { header: { Range?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 416
          }
    }
  } & {
    '/v4/eventlog/audits/node_info': {
      $get:
        | {
            input: {
              query: {
                parent_id?: bigint | undefined
                offset?: number | undefined
                limit?: number | undefined
                filter?: string | undefined
                sort?: string | undefined
              }
            } & { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: AuditNodeInfoResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                parent_id?: bigint | undefined
                offset?: number | undefined
                limit?: number | undefined
                filter?: string | undefined
                sort?: string | undefined
              }
            } & { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                parent_id?: bigint | undefined
                offset?: number | undefined
                limit?: number | undefined
                filter?: string | undefined
                sort?: string | undefined
              }
            } & { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                parent_id?: bigint | undefined
                offset?: number | undefined
                limit?: number | undefined
                filter?: string | undefined
                sort?: string | undefined
              }
            } & { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                parent_id?: bigint | undefined
                offset?: number | undefined
                limit?: number | undefined
                filter?: string | undefined
                sort?: string | undefined
              }
            } & { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                parent_id?: bigint | undefined
                offset?: number | undefined
                limit?: number | undefined
                filter?: string | undefined
                sort?: string | undefined
              }
            } & { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 406
          }
        | {
            input: {
              query: {
                parent_id?: bigint | undefined
                offset?: number | undefined
                limit?: number | undefined
                filter?: string | undefined
                sort?: string | undefined
              }
            } & { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 412
          }
    }
  } & {
    '/v4/eventlog/audits/nodes': {
      $get:
        | {
            input: {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                filter?: string | undefined
                sort?: string | undefined
              }
            } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            }
            output: AuditNodeResponse[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                filter?: string | undefined
                sort?: string | undefined
              }
            } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                filter?: string | undefined
                sort?: string | undefined
              }
            } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                filter?: string | undefined
                sort?: string | undefined
              }
            } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                filter?: string | undefined
                sort?: string | undefined
              }
            } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 406
          }
        | {
            input: {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                filter?: string | undefined
                sort?: string | undefined
              }
            } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 412
          }
    }
  } & {
    '/v4/eventlog/events': {
      $get:
        | {
            input: {
              query: {
                sort?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
                date_start?: string | undefined
                date_end?: string | undefined
                type?: number | undefined
                user_id?: bigint | undefined
                status?: '0' | '2' | undefined
                user_client?: string | undefined
              }
            } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            }
            output: LogEventList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                sort?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
                date_start?: string | undefined
                date_end?: string | undefined
                type?: number | undefined
                user_id?: bigint | undefined
                status?: '0' | '2' | undefined
                user_client?: string | undefined
              }
            } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                sort?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
                date_start?: string | undefined
                date_end?: string | undefined
                type?: number | undefined
                user_id?: bigint | undefined
                status?: '0' | '2' | undefined
                user_client?: string | undefined
              }
            } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                sort?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
                date_start?: string | undefined
                date_end?: string | undefined
                type?: number | undefined
                user_id?: bigint | undefined
                status?: '0' | '2' | undefined
                user_client?: string | undefined
              }
            } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                sort?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
                date_start?: string | undefined
                date_end?: string | undefined
                type?: number | undefined
                user_id?: bigint | undefined
                status?: '0' | '2' | undefined
                user_client?: string | undefined
              }
            } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                sort?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
                date_start?: string | undefined
                date_end?: string | undefined
                type?: number | undefined
                user_id?: bigint | undefined
                status?: '0' | '2' | undefined
                user_client?: string | undefined
              }
            } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 406
          }
        | {
            input: {
              query: {
                sort?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
                date_start?: string | undefined
                date_end?: string | undefined
                type?: number | undefined
                user_id?: bigint | undefined
                status?: '0' | '2' | undefined
                user_client?: string | undefined
              }
            } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 412
          }
    }
  } & {
    '/v4/eventlog/operations': {
      $get:
        | {
            input: { query: { is_deprecated?: boolean | undefined } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: LogOperationList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { is_deprecated?: boolean | undefined } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { is_deprecated?: boolean | undefined } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { is_deprecated?: boolean | undefined } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { is_deprecated?: boolean | undefined } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { query: { is_deprecated?: boolean | undefined } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 412
          }
    }
  } & {
    '/v4/groups': {
      $get:
        | {
            input: {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                filter?: string | undefined
                sort?: string | undefined
              }
            } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            }
            output: GroupList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                filter?: string | undefined
                sort?: string | undefined
              }
            } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                filter?: string | undefined
                sort?: string | undefined
              }
            } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                filter?: string | undefined
                sort?: string | undefined
              }
            } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                filter?: string | undefined
                sort?: string | undefined
              }
            } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 406
          }
        | {
            input: {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                filter?: string | undefined
                sort?: string | undefined
              }
            } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 412
          }
      $post:
        | {
            input: {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            } & { json: CreateGroupRequest }
            output: Group
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            } & { json: CreateGroupRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            } & { json: CreateGroupRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            } & { json: CreateGroupRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            } & { json: CreateGroupRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 406
          }
        | {
            input: {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            } & { json: CreateGroupRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 409
          }
        | {
            input: {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            } & { json: CreateGroupRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 412
          }
    }
  } & {
    '/v4/groups/:group_id': {
      $delete:
        | {
            input: { param: { group_id: bigint } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { group_id: bigint } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { group_id: bigint } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { group_id: bigint } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { group_id: bigint } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { group_id: bigint } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { group_id: bigint } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 412
          }
      $get:
        | {
            input: { param: { group_id: bigint } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            }
            output: Group
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { group_id: bigint } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { group_id: bigint } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { group_id: bigint } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { group_id: bigint } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { group_id: bigint } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { group_id: bigint } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 412
          }
      $put:
        | {
            input: { param: { group_id: bigint } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            } & { json: UpdateGroupRequest }
            output: Group
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { group_id: bigint } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            } & { json: UpdateGroupRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { group_id: bigint } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            } & { json: UpdateGroupRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { group_id: bigint } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            } & { json: UpdateGroupRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { group_id: bigint } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            } & { json: UpdateGroupRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { group_id: bigint } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            } & { json: UpdateGroupRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { group_id: bigint } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            } & { json: UpdateGroupRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { group_id: bigint } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            } & { json: UpdateGroupRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 412
          }
    }
  } & {
    '/v4/groups/:group_id/last_admin_rooms': {
      $get:
        | {
            input: { param: { group_id: bigint } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: LastAdminGroupRoomList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { group_id: bigint } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { group_id: bigint } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { group_id: bigint } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { group_id: bigint } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { group_id: bigint } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { group_id: bigint } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 412
          }
    }
  } & {
    '/v4/groups/:group_id/roles': {
      $get:
        | {
            input: { param: { group_id: bigint } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: RoleList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { group_id: bigint } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { group_id: bigint } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { group_id: bigint } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { group_id: bigint } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { group_id: bigint } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { group_id: bigint } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 412
          }
    }
  } & {
    '/v4/groups/:group_id/rooms': {
      $get:
        | {
            input: { param: { group_id: bigint } } & {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                filter?: string | undefined
              }
            } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            }
            output: RoomTreeDataList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { group_id: bigint } } & {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                filter?: string | undefined
              }
            } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { group_id: bigint } } & {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                filter?: string | undefined
              }
            } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { group_id: bigint } } & {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                filter?: string | undefined
              }
            } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { group_id: bigint } } & {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                filter?: string | undefined
              }
            } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { group_id: bigint } } & {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                filter?: string | undefined
              }
            } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { group_id: bigint } } & {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                filter?: string | undefined
              }
            } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 412
          }
    }
  } & {
    '/v4/groups/:group_id/users': {
      $delete:
        | {
            input: { param: { group_id: bigint } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            } & { json: ChangeGroupMembersRequest }
            output: Group
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { group_id: bigint } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            } & { json: ChangeGroupMembersRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { group_id: bigint } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            } & { json: ChangeGroupMembersRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { group_id: bigint } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            } & { json: ChangeGroupMembersRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { group_id: bigint } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            } & { json: ChangeGroupMembersRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { group_id: bigint } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            } & { json: ChangeGroupMembersRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { group_id: bigint } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            } & { json: ChangeGroupMembersRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 412
          }
      $get:
        | {
            input: { param: { group_id: bigint } } & {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                filter?: string | undefined
              }
            } & { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: GroupUserList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { group_id: bigint } } & {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                filter?: string | undefined
              }
            } & { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { group_id: bigint } } & {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                filter?: string | undefined
              }
            } & { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { group_id: bigint } } & {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                filter?: string | undefined
              }
            } & { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { group_id: bigint } } & {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                filter?: string | undefined
              }
            } & { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { group_id: bigint } } & {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                filter?: string | undefined
              }
            } & { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { group_id: bigint } } & {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                filter?: string | undefined
              }
            } & { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 412
          }
      $post:
        | {
            input: { param: { group_id: bigint } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            } & { json: ChangeGroupMembersRequest }
            output: Group
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { group_id: bigint } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            } & { json: ChangeGroupMembersRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { group_id: bigint } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            } & { json: ChangeGroupMembersRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { group_id: bigint } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            } & { json: ChangeGroupMembersRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { group_id: bigint } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            } & { json: ChangeGroupMembersRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { group_id: bigint } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            } & { json: ChangeGroupMembersRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { group_id: bigint } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            } & { json: ChangeGroupMembersRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 412
          }
    }
  } & {
    '/v4/internal/tenant/subscription_plan': {
      $get:
        | {
            input: { header: { 'X-Sds-Service-Token': string } }
            output: SubscriptionPlanResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Sds-Service-Token': string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
      $put:
        | {
            input: { header: { 'X-Sds-Service-Token': string } } & { json: SubscriptionPlanRequest }
            output: SubscriptionPlanResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Sds-Service-Token': string } } & { json: SubscriptionPlanRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'X-Sds-Service-Token': string } } & { json: SubscriptionPlanRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/v4/nodes': {
      $delete:
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: DeleteNodesRequest
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: DeleteNodesRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: DeleteNodesRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: DeleteNodesRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: DeleteNodesRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: DeleteNodesRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: DeleteNodesRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 412
          }
      $get:
        | {
            input: {
              query: {
                depth_level?: number | undefined
                parent_id?: bigint | undefined
                room_manager?: boolean | undefined
                filter?: string | undefined
                sort?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            }
            output: NodeList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                depth_level?: number | undefined
                parent_id?: bigint | undefined
                room_manager?: boolean | undefined
                filter?: string | undefined
                sort?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                depth_level?: number | undefined
                parent_id?: bigint | undefined
                room_manager?: boolean | undefined
                filter?: string | undefined
                sort?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                depth_level?: number | undefined
                parent_id?: bigint | undefined
                room_manager?: boolean | undefined
                filter?: string | undefined
                sort?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                depth_level?: number | undefined
                parent_id?: bigint | undefined
                room_manager?: boolean | undefined
                filter?: string | undefined
                sort?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 406
          }
        | {
            input: {
              query: {
                depth_level?: number | undefined
                parent_id?: bigint | undefined
                room_manager?: boolean | undefined
                filter?: string | undefined
                sort?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 412
          }
    }
  } & {
    '/v4/nodes/comments/:comment_id': {
      $delete:
        | {
            input: { param: { comment_id: bigint } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { comment_id: bigint } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { comment_id: bigint } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { comment_id: bigint } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { comment_id: bigint } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { comment_id: bigint } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { comment_id: bigint } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 412
          }
      $put:
        | {
            input: { param: { comment_id: bigint } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            } & { json: ChangeNodeCommentRequest }
            output: Comment
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { comment_id: bigint } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            } & { json: ChangeNodeCommentRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { comment_id: bigint } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            } & { json: ChangeNodeCommentRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { comment_id: bigint } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            } & { json: ChangeNodeCommentRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { comment_id: bigint } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            } & { json: ChangeNodeCommentRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { comment_id: bigint } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            } & { json: ChangeNodeCommentRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { comment_id: bigint } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            } & { json: ChangeNodeCommentRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 412
          }
    }
  } & {
    '/v4/nodes/deleted_nodes': {
      $delete:
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: DeleteDeletedNodesRequest
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: DeleteDeletedNodesRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: DeleteDeletedNodesRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: DeleteDeletedNodesRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: DeleteDeletedNodesRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: DeleteDeletedNodesRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: DeleteDeletedNodesRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 412
          }
    }
  } & {
    '/v4/nodes/deleted_nodes/actions/restore': {
      $post:
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: RestoreDeletedNodesRequest
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: RestoreDeletedNodesRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: RestoreDeletedNodesRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: RestoreDeletedNodesRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: RestoreDeletedNodesRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: RestoreDeletedNodesRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: RestoreDeletedNodesRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: RestoreDeletedNodesRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 412
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: RestoreDeletedNodesRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 507
          }
    }
  } & {
    '/v4/nodes/deleted_nodes/:deleted_node_id': {
      $get:
        | {
            input: { param: { deleted_node_id: bigint } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            }
            output: DeletedNode
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { deleted_node_id: bigint } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { deleted_node_id: bigint } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { deleted_node_id: bigint } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { deleted_node_id: bigint } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { deleted_node_id: bigint } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { deleted_node_id: bigint } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 412
          }
    }
  } & {
    '/v4/nodes/favorites': {
      $put:
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: UpdateFavoritesBulkRequest
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: UpdateFavoritesBulkRequest
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: UpdateFavoritesBulkRequest
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: UpdateFavoritesBulkRequest
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: UpdateFavoritesBulkRequest
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: UpdateFavoritesBulkRequest
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 406
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: UpdateFavoritesBulkRequest
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 412
          }
    }
  } & {
    '/v4/nodes/files': {
      $put:
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: UpdateFilesBulkRequest
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: UpdateFilesBulkRequest
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: UpdateFilesBulkRequest
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: UpdateFilesBulkRequest
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: UpdateFilesBulkRequest
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: UpdateFilesBulkRequest
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 406
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: UpdateFilesBulkRequest
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 409
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: UpdateFilesBulkRequest
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 412
          }
    }
  } & {
    '/v4/nodes/files/keys': {
      $post:
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: UserFileKeySetBatchRequest
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: UserFileKeySetBatchRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: UserFileKeySetBatchRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: UserFileKeySetBatchRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: UserFileKeySetBatchRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: UserFileKeySetBatchRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: UserFileKeySetBatchRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 412
          }
    }
  } & {
    '/v4/nodes/files/uploads': {
      $post:
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: CreateFileUploadRequest
            }
            output: CreateFileUploadResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: CreateFileUploadRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: CreateFileUploadRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: CreateFileUploadRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: CreateFileUploadRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: CreateFileUploadRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: CreateFileUploadRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 412
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: CreateFileUploadRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 504
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: CreateFileUploadRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 507
          }
    }
  } & {
    '/v4/nodes/files/uploads/:upload_id': {
      $delete:
        | {
            input: { param: { upload_id: string } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { upload_id: string } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { upload_id: string } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { upload_id: string } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { upload_id: string } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { upload_id: string } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { upload_id: string } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 412
          }
        | {
            input: { param: { upload_id: string } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 504
          }
      $get:
        | {
            input: { param: { upload_id: string } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            }
            output: S3FileUploadStatus
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { upload_id: string } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { upload_id: string } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { upload_id: string } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { upload_id: string } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { upload_id: string } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { upload_id: string } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 412
          }
      $post:
        | {
            input: { param: { upload_id: string } } & {
              header: {
                'Content-Range'?: string | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            } & { form: { file: File } }
            output: ChunkUploadResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { upload_id: string } } & {
              header: {
                'Content-Range'?: string | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            } & { form: { file: File } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { upload_id: string } } & {
              header: {
                'Content-Range'?: string | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            } & { form: { file: File } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { upload_id: string } } & {
              header: {
                'Content-Range'?: string | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            } & { form: { file: File } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { upload_id: string } } & {
              header: {
                'Content-Range'?: string | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            } & { form: { file: File } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { upload_id: string } } & {
              header: {
                'Content-Range'?: string | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            } & { form: { file: File } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { upload_id: string } } & {
              header: {
                'Content-Range'?: string | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            } & { form: { file: File } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 412
          }
        | {
            input: { param: { upload_id: string } } & {
              header: {
                'Content-Range'?: string | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            } & { form: { file: File } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 507
          }
      $put:
        | {
            input: { param: { upload_id: string } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            } & { json: CompleteUploadRequest }
            output: Node
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { upload_id: string } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            } & { json: CompleteUploadRequest }
            output: Node
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { upload_id: string } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            } & { json: CompleteUploadRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { upload_id: string } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            } & { json: CompleteUploadRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { upload_id: string } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            } & { json: CompleteUploadRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { upload_id: string } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            } & { json: CompleteUploadRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { upload_id: string } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            } & { json: CompleteUploadRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { upload_id: string } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            } & { json: CompleteUploadRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { upload_id: string } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            } & { json: CompleteUploadRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 412
          }
        | {
            input: { param: { upload_id: string } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            } & { json: CompleteUploadRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 507
          }
    }
  } & {
    '/v4/nodes/files/uploads/:upload_id/s3': {
      $put:
        | {
            input: { param: { upload_id: string } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            } & { json: CompleteS3FileUploadRequest }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { param: { upload_id: string } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            } & { json: CompleteS3FileUploadRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { upload_id: string } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            } & { json: CompleteS3FileUploadRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { upload_id: string } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            } & { json: CompleteS3FileUploadRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { upload_id: string } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            } & { json: CompleteS3FileUploadRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { upload_id: string } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            } & { json: CompleteS3FileUploadRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { upload_id: string } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            } & { json: CompleteS3FileUploadRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { upload_id: string } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            } & { json: CompleteS3FileUploadRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 412
          }
        | {
            input: { param: { upload_id: string } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            } & { json: CompleteS3FileUploadRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 504
          }
    }
  } & {
    '/v4/nodes/files/uploads/:upload_id/s3_urls': {
      $post:
        | {
            input: { param: { upload_id: string } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            } & { json: GeneratePresignedUrlsRequest }
            output: PresignedUrlList
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { upload_id: string } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            } & { json: GeneratePresignedUrlsRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { upload_id: string } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            } & { json: GeneratePresignedUrlsRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { upload_id: string } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            } & { json: GeneratePresignedUrlsRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { upload_id: string } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            } & { json: GeneratePresignedUrlsRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { upload_id: string } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            } & { json: GeneratePresignedUrlsRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { upload_id: string } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            } & { json: GeneratePresignedUrlsRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 412
          }
        | {
            input: { param: { upload_id: string } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            } & { json: GeneratePresignedUrlsRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 504
          }
        | {
            input: { param: { upload_id: string } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            } & { json: GeneratePresignedUrlsRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 507
          }
    }
  } & {
    '/v4/nodes/files/versions/:reference_id': {
      $get:
        | {
            input: { param: { reference_id: bigint } } & {
              query: { offset?: number | undefined; limit?: number | undefined }
            } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            }
            output: FileVersionList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { reference_id: bigint } } & {
              query: { offset?: number | undefined; limit?: number | undefined }
            } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { reference_id: bigint } } & {
              query: { offset?: number | undefined; limit?: number | undefined }
            } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 412
          }
    }
  } & {
    '/v4/nodes/files/:file_id': {
      $put:
        | {
            input: { param: { file_id: bigint } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            } & { json: UpdateFileRequest }
            output: Node
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { file_id: bigint } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            } & { json: UpdateFileRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { file_id: bigint } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            } & { json: UpdateFileRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { file_id: bigint } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            } & { json: UpdateFileRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { file_id: bigint } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            } & { json: UpdateFileRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { file_id: bigint } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            } & { json: UpdateFileRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { file_id: bigint } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            } & { json: UpdateFileRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { file_id: bigint } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            } & { json: UpdateFileRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 412
          }
    }
  } & {
    '/v4/nodes/files/:file_id/data_room_file_key': {
      $get:
        | {
            input: { param: { file_id: bigint } } & { query: { version?: string | undefined } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: FileKey
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { file_id: bigint } } & { query: { version?: string | undefined } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { file_id: bigint } } & { query: { version?: string | undefined } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { file_id: bigint } } & { query: { version?: string | undefined } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { file_id: bigint } } & { query: { version?: string | undefined } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { file_id: bigint } } & { query: { version?: string | undefined } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { file_id: bigint } } & { query: { version?: string | undefined } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 412
          }
    }
  } & {
    '/v4/nodes/files/:file_id/data_space_file_key': {
      $get:
        | {
            input: { param: { file_id: bigint } } & { query: { version?: string | undefined } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: FileKey
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { file_id: bigint } } & { query: { version?: string | undefined } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { file_id: bigint } } & { query: { version?: string | undefined } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { file_id: bigint } } & { query: { version?: string | undefined } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { file_id: bigint } } & { query: { version?: string | undefined } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { file_id: bigint } } & { query: { version?: string | undefined } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { file_id: bigint } } & { query: { version?: string | undefined } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 412
          }
    }
  } & {
    '/v4/nodes/files/:file_id/downloads': {
      $post:
        | {
            input: { param: { file_id: bigint } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: DownloadTokenGenerateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { file_id: bigint } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { file_id: bigint } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { file_id: bigint } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { file_id: bigint } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { file_id: bigint } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { file_id: bigint } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 412
          }
    }
  } & {
    '/v4/nodes/files/:file_id/user_file_key': {
      $get:
        | {
            input: { param: { file_id: bigint } } & { query: { version?: string | undefined } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: FileKey
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { file_id: bigint } } & { query: { version?: string | undefined } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { file_id: bigint } } & { query: { version?: string | undefined } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { file_id: bigint } } & { query: { version?: string | undefined } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { file_id: bigint } } & { query: { version?: string | undefined } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { file_id: bigint } } & { query: { version?: string | undefined } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { file_id: bigint } } & { query: { version?: string | undefined } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 412
          }
    }
  } & {
    '/v4/nodes/folders': {
      $post:
        | {
            input: {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            } & { json: CreateFolderRequest }
            output: Node
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            } & { json: CreateFolderRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            } & { json: CreateFolderRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            } & { json: CreateFolderRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            } & { json: CreateFolderRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            } & { json: CreateFolderRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 406
          }
        | {
            input: {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            } & { json: CreateFolderRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 409
          }
        | {
            input: {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            } & { json: CreateFolderRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 412
          }
    }
  } & {
    '/v4/nodes/folders/:folder_id': {
      $put:
        | {
            input: { param: { folder_id: bigint } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            } & { json: UpdateFolderRequest }
            output: Node
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { folder_id: bigint } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            } & { json: UpdateFolderRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { folder_id: bigint } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            } & { json: UpdateFolderRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { folder_id: bigint } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            } & { json: UpdateFolderRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { folder_id: bigint } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            } & { json: UpdateFolderRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { folder_id: bigint } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            } & { json: UpdateFolderRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { folder_id: bigint } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            } & { json: UpdateFolderRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { folder_id: bigint } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            } & { json: UpdateFolderRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 412
          }
    }
  } & {
    '/v4/nodes/missingFileKeys': {
      $get:
        | {
            input: {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                room_id?: bigint | undefined
                file_id?: bigint | undefined
                user_id?: bigint | undefined
                use_key?:
                  | 'room_rescue_key'
                  | 'system_rescue_key'
                  | 'previous_user_key'
                  | 'previous_room_rescue_key'
                  | 'previous_system_rescue_key'
                  | undefined
              }
            } & { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: MissingKeysResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                room_id?: bigint | undefined
                file_id?: bigint | undefined
                user_id?: bigint | undefined
                use_key?:
                  | 'room_rescue_key'
                  | 'system_rescue_key'
                  | 'previous_user_key'
                  | 'previous_room_rescue_key'
                  | 'previous_system_rescue_key'
                  | undefined
              }
            } & { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                room_id?: bigint | undefined
                file_id?: bigint | undefined
                user_id?: bigint | undefined
                use_key?:
                  | 'room_rescue_key'
                  | 'system_rescue_key'
                  | 'previous_user_key'
                  | 'previous_room_rescue_key'
                  | 'previous_system_rescue_key'
                  | undefined
              }
            } & { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                room_id?: bigint | undefined
                file_id?: bigint | undefined
                user_id?: bigint | undefined
                use_key?:
                  | 'room_rescue_key'
                  | 'system_rescue_key'
                  | 'previous_user_key'
                  | 'previous_room_rescue_key'
                  | 'previous_system_rescue_key'
                  | undefined
              }
            } & { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                room_id?: bigint | undefined
                file_id?: bigint | undefined
                user_id?: bigint | undefined
                use_key?:
                  | 'room_rescue_key'
                  | 'system_rescue_key'
                  | 'previous_user_key'
                  | 'previous_room_rescue_key'
                  | 'previous_system_rescue_key'
                  | undefined
              }
            } & { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                room_id?: bigint | undefined
                file_id?: bigint | undefined
                user_id?: bigint | undefined
                use_key?:
                  | 'room_rescue_key'
                  | 'system_rescue_key'
                  | 'previous_user_key'
                  | 'previous_room_rescue_key'
                  | 'previous_system_rescue_key'
                  | undefined
              }
            } & { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 406
          }
        | {
            input: {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                room_id?: bigint | undefined
                file_id?: bigint | undefined
                user_id?: bigint | undefined
                use_key?:
                  | 'room_rescue_key'
                  | 'system_rescue_key'
                  | 'previous_user_key'
                  | 'previous_room_rescue_key'
                  | 'previous_system_rescue_key'
                  | undefined
              }
            } & { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 412
          }
    }
  } & {
    '/v4/nodes/rooms': {
      $post:
        | {
            input: {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            } & { json: CreateRoomRequest }
            output: Node
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            } & { json: CreateRoomRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            } & { json: CreateRoomRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            } & { json: CreateRoomRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            } & { json: CreateRoomRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            } & { json: CreateRoomRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 406
          }
        | {
            input: {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            } & { json: CreateRoomRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 409
          }
        | {
            input: {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            } & { json: CreateRoomRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 412
          }
    }
  } & {
    '/v4/nodes/rooms/pending': {
      $get:
        | {
            input: {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                filter?: string | undefined
                sort?: string | undefined
              }
            } & { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: PendingAssignmentList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                filter?: string | undefined
                sort?: string | undefined
              }
            } & { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                filter?: string | undefined
                sort?: string | undefined
              }
            } & { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                filter?: string | undefined
                sort?: string | undefined
              }
            } & { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 406
          }
        | {
            input: {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                filter?: string | undefined
                sort?: string | undefined
              }
            } & { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 412
          }
      $put:
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: PendingAssignmentsRequest
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: PendingAssignmentsRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: PendingAssignmentsRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: PendingAssignmentsRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: PendingAssignmentsRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: PendingAssignmentsRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: PendingAssignmentsRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 412
          }
    }
  } & {
    '/v4/nodes/rooms/:room_id': {
      $put:
        | {
            input: { param: { room_id: bigint } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            } & { json: UpdateRoomRequest }
            output: Node
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { room_id: bigint } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            } & { json: UpdateRoomRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { room_id: bigint } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            } & { json: UpdateRoomRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { room_id: bigint } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            } & { json: UpdateRoomRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { room_id: bigint } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            } & { json: UpdateRoomRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { room_id: bigint } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            } & { json: UpdateRoomRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { room_id: bigint } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            } & { json: UpdateRoomRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { room_id: bigint } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            } & { json: UpdateRoomRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 412
          }
    }
  } & {
    '/v4/nodes/rooms/:room_id/config': {
      $put:
        | {
            input: { param: { room_id: bigint } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            } & { json: ConfigRoomRequest }
            output: Node
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { room_id: bigint } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            } & { json: ConfigRoomRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { room_id: bigint } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            } & { json: ConfigRoomRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { room_id: bigint } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            } & { json: ConfigRoomRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { room_id: bigint } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            } & { json: ConfigRoomRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { room_id: bigint } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            } & { json: ConfigRoomRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { room_id: bigint } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            } & { json: ConfigRoomRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { room_id: bigint } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            } & { json: ConfigRoomRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 412
          }
    }
  } & {
    '/v4/nodes/rooms/:room_id/encrypt': {
      $put:
        | {
            input: { param: { room_id: bigint } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            } & { json: EncryptRoomRequest }
            output: Node
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { room_id: bigint } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            } & { json: EncryptRoomRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { room_id: bigint } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            } & { json: EncryptRoomRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { room_id: bigint } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            } & { json: EncryptRoomRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { room_id: bigint } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            } & { json: EncryptRoomRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { room_id: bigint } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            } & { json: EncryptRoomRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { room_id: bigint } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            } & { json: EncryptRoomRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 412
          }
    }
  } & {
    '/v4/nodes/rooms/:room_id/events': {
      $get:
        | {
            input: { param: { room_id: bigint } } & {
              query: {
                sort?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
                date_start?: string | undefined
                date_end?: string | undefined
                type?: number | undefined
                user_id?: bigint | undefined
                status?: number | undefined
              }
            } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            }
            output: LogEventList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { room_id: bigint } } & {
              query: {
                sort?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
                date_start?: string | undefined
                date_end?: string | undefined
                type?: number | undefined
                user_id?: bigint | undefined
                status?: number | undefined
              }
            } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { room_id: bigint } } & {
              query: {
                sort?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
                date_start?: string | undefined
                date_end?: string | undefined
                type?: number | undefined
                user_id?: bigint | undefined
                status?: number | undefined
              }
            } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { room_id: bigint } } & {
              query: {
                sort?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
                date_start?: string | undefined
                date_end?: string | undefined
                type?: number | undefined
                user_id?: bigint | undefined
                status?: number | undefined
              }
            } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { room_id: bigint } } & {
              query: {
                sort?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
                date_start?: string | undefined
                date_end?: string | undefined
                type?: number | undefined
                user_id?: bigint | undefined
                status?: number | undefined
              }
            } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { room_id: bigint } } & {
              query: {
                sort?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
                date_start?: string | undefined
                date_end?: string | undefined
                type?: number | undefined
                user_id?: bigint | undefined
                status?: number | undefined
              }
            } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { room_id: bigint } } & {
              query: {
                sort?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
                date_start?: string | undefined
                date_end?: string | undefined
                type?: number | undefined
                user_id?: bigint | undefined
                status?: number | undefined
              }
            } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 412
          }
    }
  } & {
    '/v4/nodes/rooms/:room_id/groups': {
      $delete:
        | {
            input: { param: { room_id: bigint } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            } & { json: RoomGroupsDeleteBatchRequest }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { room_id: bigint } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            } & { json: RoomGroupsDeleteBatchRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { room_id: bigint } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            } & { json: RoomGroupsDeleteBatchRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { room_id: bigint } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            } & { json: RoomGroupsDeleteBatchRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { room_id: bigint } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            } & { json: RoomGroupsDeleteBatchRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { room_id: bigint } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            } & { json: RoomGroupsDeleteBatchRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { room_id: bigint } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            } & { json: RoomGroupsDeleteBatchRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 412
          }
      $get:
        | {
            input: { param: { room_id: bigint } } & {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                filter?: string | undefined
                sort?: string | undefined
              }
            } & { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: RoomGroupList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { room_id: bigint } } & {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                filter?: string | undefined
                sort?: string | undefined
              }
            } & { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { room_id: bigint } } & {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                filter?: string | undefined
                sort?: string | undefined
              }
            } & { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { room_id: bigint } } & {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                filter?: string | undefined
                sort?: string | undefined
              }
            } & { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { room_id: bigint } } & {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                filter?: string | undefined
                sort?: string | undefined
              }
            } & { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { room_id: bigint } } & {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                filter?: string | undefined
                sort?: string | undefined
              }
            } & { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { room_id: bigint } } & {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                filter?: string | undefined
                sort?: string | undefined
              }
            } & { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 412
          }
      $put:
        | {
            input: { param: { room_id: bigint } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            } & { json: RoomGroupsAddBatchRequest }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { room_id: bigint } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            } & { json: RoomGroupsAddBatchRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { room_id: bigint } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            } & { json: RoomGroupsAddBatchRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { room_id: bigint } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            } & { json: RoomGroupsAddBatchRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { room_id: bigint } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            } & { json: RoomGroupsAddBatchRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { room_id: bigint } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            } & { json: RoomGroupsAddBatchRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { room_id: bigint } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            } & { json: RoomGroupsAddBatchRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 412
          }
    }
  } & {
    '/v4/nodes/rooms/:room_id/guest_users': {
      $put:
        | {
            input: { param: { room_id: bigint } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            } & { json: RoomGuestUserAddRequest }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { room_id: bigint } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            } & { json: RoomGuestUserAddRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { room_id: bigint } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            } & { json: RoomGuestUserAddRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { room_id: bigint } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            } & { json: RoomGuestUserAddRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { room_id: bigint } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            } & { json: RoomGuestUserAddRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { room_id: bigint } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            } & { json: RoomGuestUserAddRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { room_id: bigint } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            } & { json: RoomGuestUserAddRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 412
          }
    }
  } & {
    '/v4/nodes/rooms/:room_id/keypair': {
      $delete:
        | {
            input: { param: { room_id: bigint } } & { query: { version?: string | undefined } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { room_id: bigint } } & { query: { version?: string | undefined } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { room_id: bigint } } & { query: { version?: string | undefined } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { room_id: bigint } } & { query: { version?: string | undefined } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { room_id: bigint } } & { query: { version?: string | undefined } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { room_id: bigint } } & { query: { version?: string | undefined } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { room_id: bigint } } & { query: { version?: string | undefined } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 412
          }
      $get:
        | {
            input: { param: { room_id: bigint } } & { query: { version?: string | undefined } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            }
            output: UserKeyPairContainer
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { room_id: bigint } } & { query: { version?: string | undefined } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { room_id: bigint } } & { query: { version?: string | undefined } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { room_id: bigint } } & { query: { version?: string | undefined } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { room_id: bigint } } & { query: { version?: string | undefined } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { room_id: bigint } } & { query: { version?: string | undefined } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { room_id: bigint } } & { query: { version?: string | undefined } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 412
          }
      $post:
        | {
            input: { param: { room_id: bigint } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            } & { json: UserKeyPairContainer }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { room_id: bigint } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            } & { json: UserKeyPairContainer }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { room_id: bigint } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            } & { json: UserKeyPairContainer }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { room_id: bigint } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            } & { json: UserKeyPairContainer }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { room_id: bigint } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            } & { json: UserKeyPairContainer }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { room_id: bigint } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            } & { json: UserKeyPairContainer }
            output: ErrorResponse
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { room_id: bigint } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            } & { json: UserKeyPairContainer }
            output: ErrorResponse
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { room_id: bigint } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            } & { json: UserKeyPairContainer }
            output: ErrorResponse
            outputFormat: 'json'
            status: 412
          }
    }
  } & {
    '/v4/nodes/rooms/:room_id/keypairs': {
      $get:
        | {
            input: { param: { room_id: bigint } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            }
            output: UserKeyPairContainer[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { room_id: bigint } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            }
            output: UserKeyPairContainer[]
            outputFormat: 'json'
            status: 204
          }
        | {
            input: { param: { room_id: bigint } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { room_id: bigint } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { room_id: bigint } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { room_id: bigint } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { room_id: bigint } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { room_id: bigint } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 412
          }
      $post:
        | {
            input: { param: { room_id: bigint } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            } & { json: CreateKeyPairRequest }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { room_id: bigint } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            } & { json: CreateKeyPairRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { room_id: bigint } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            } & { json: CreateKeyPairRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { room_id: bigint } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            } & { json: CreateKeyPairRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { room_id: bigint } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            } & { json: CreateKeyPairRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { room_id: bigint } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            } & { json: CreateKeyPairRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { room_id: bigint } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            } & { json: CreateKeyPairRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 412
          }
    }
  } & {
    '/v4/nodes/rooms/:room_id/policies': {
      $get:
        | {
            input: { param: { room_id: bigint } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: RoomPolicies
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { room_id: bigint } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { room_id: bigint } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { room_id: bigint } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { room_id: bigint } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { room_id: bigint } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { room_id: bigint } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 412
          }
      $put:
        | {
            input: { param: { room_id: bigint } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            } & { json: RoomPoliciesRequest }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { room_id: bigint } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            } & { json: RoomPoliciesRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { room_id: bigint } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            } & { json: RoomPoliciesRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { room_id: bigint } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            } & { json: RoomPoliciesRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { room_id: bigint } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            } & { json: RoomPoliciesRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { room_id: bigint } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            } & { json: RoomPoliciesRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { room_id: bigint } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            } & { json: RoomPoliciesRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 412
          }
    }
  } & {
    '/v4/nodes/rooms/:room_id/s3_tags': {
      $get:
        | {
            input: { param: { room_id: bigint } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: S3TagList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { room_id: bigint } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { room_id: bigint } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { room_id: bigint } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { room_id: bigint } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { room_id: bigint } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { room_id: bigint } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 412
          }
      $post:
        | {
            input: { param: { room_id: bigint } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            } & { json: S3TagIds }
            output: S3TagList
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { room_id: bigint } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            } & { json: S3TagIds }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { room_id: bigint } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            } & { json: S3TagIds }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { room_id: bigint } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            } & { json: S3TagIds }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { room_id: bigint } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            } & { json: S3TagIds }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { room_id: bigint } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            } & { json: S3TagIds }
            output: ErrorResponse
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { room_id: bigint } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            } & { json: S3TagIds }
            output: ErrorResponse
            outputFormat: 'json'
            status: 412
          }
    }
  } & {
    '/v4/nodes/rooms/:room_id/users': {
      $delete:
        | {
            input: { param: { room_id: bigint } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            } & { json: RoomUsersDeleteBatchRequest }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { room_id: bigint } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            } & { json: RoomUsersDeleteBatchRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { room_id: bigint } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            } & { json: RoomUsersDeleteBatchRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { room_id: bigint } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            } & { json: RoomUsersDeleteBatchRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { room_id: bigint } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            } & { json: RoomUsersDeleteBatchRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { room_id: bigint } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            } & { json: RoomUsersDeleteBatchRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { room_id: bigint } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            } & { json: RoomUsersDeleteBatchRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 412
          }
      $get:
        | {
            input: { param: { room_id: bigint } } & {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                filter?: string | undefined
                sort?: string | undefined
              }
            } & { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: RoomUserList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { room_id: bigint } } & {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                filter?: string | undefined
                sort?: string | undefined
              }
            } & { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { room_id: bigint } } & {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                filter?: string | undefined
                sort?: string | undefined
              }
            } & { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { room_id: bigint } } & {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                filter?: string | undefined
                sort?: string | undefined
              }
            } & { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { room_id: bigint } } & {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                filter?: string | undefined
                sort?: string | undefined
              }
            } & { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { room_id: bigint } } & {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                filter?: string | undefined
                sort?: string | undefined
              }
            } & { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { room_id: bigint } } & {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                filter?: string | undefined
                sort?: string | undefined
              }
            } & { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 412
          }
      $put:
        | {
            input: { param: { room_id: bigint } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            } & { json: RoomUsersAddBatchRequest }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { room_id: bigint } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            } & { json: RoomUsersAddBatchRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { room_id: bigint } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            } & { json: RoomUsersAddBatchRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { room_id: bigint } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            } & { json: RoomUsersAddBatchRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { room_id: bigint } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            } & { json: RoomUsersAddBatchRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { room_id: bigint } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            } & { json: RoomUsersAddBatchRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { room_id: bigint } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            } & { json: RoomUsersAddBatchRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 412
          }
    }
  } & {
    '/v4/nodes/rooms/:room_id/webhooks': {
      $get:
        | {
            input: { param: { room_id: bigint } } & {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                filter?: string | undefined
              }
            } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            }
            output: RoomWebhookList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { room_id: bigint } } & {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                filter?: string | undefined
              }
            } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { room_id: bigint } } & {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                filter?: string | undefined
              }
            } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { room_id: bigint } } & {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                filter?: string | undefined
              }
            } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { room_id: bigint } } & {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                filter?: string | undefined
              }
            } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { room_id: bigint } } & {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                filter?: string | undefined
              }
            } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { room_id: bigint } } & {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                filter?: string | undefined
              }
            } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 412
          }
      $put:
        | {
            input: { param: { room_id: bigint } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            } & { json: UpdateRoomWebhookRequest }
            output: RoomWebhookList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { room_id: bigint } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            } & { json: UpdateRoomWebhookRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { room_id: bigint } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            } & { json: UpdateRoomWebhookRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { room_id: bigint } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            } & { json: UpdateRoomWebhookRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { room_id: bigint } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            } & { json: UpdateRoomWebhookRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { room_id: bigint } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            } & { json: UpdateRoomWebhookRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { room_id: bigint } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            } & { json: UpdateRoomWebhookRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 412
          }
    }
  } & {
    '/v4/nodes/search': {
      $get:
        | {
            input: {
              query: {
                search_string: string
                depth_level?: number | undefined
                parent_id?: bigint | undefined
                filter?: string | undefined
                sort?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            }
            output: NodeList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                search_string: string
                depth_level?: number | undefined
                parent_id?: bigint | undefined
                filter?: string | undefined
                sort?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                search_string: string
                depth_level?: number | undefined
                parent_id?: bigint | undefined
                filter?: string | undefined
                sort?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                search_string: string
                depth_level?: number | undefined
                parent_id?: bigint | undefined
                filter?: string | undefined
                sort?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                search_string: string
                depth_level?: number | undefined
                parent_id?: bigint | undefined
                filter?: string | undefined
                sort?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 406
          }
        | {
            input: {
              query: {
                search_string: string
                depth_level?: number | undefined
                parent_id?: bigint | undefined
                filter?: string | undefined
                sort?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 412
          }
    }
  } & {
    '/v4/nodes/zip': {
      $post:
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: ZipDownloadRequest
            }
            output: DownloadTokenGenerateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: ZipDownloadRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: ZipDownloadRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: ZipDownloadRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: ZipDownloadRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: ZipDownloadRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: ZipDownloadRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 412
          }
    }
  } & {
    '/v4/nodes/zip/download': {
      $post:
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: ZipDownloadRequest
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: ZipDownloadRequest
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: ZipDownloadRequest
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: ZipDownloadRequest
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: ZipDownloadRequest
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: ZipDownloadRequest
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 406
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: ZipDownloadRequest
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 412
          }
    }
  } & {
    '/v4/nodes/:node_id': {
      $delete:
        | {
            input: { param: { node_id: bigint } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { node_id: bigint } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { node_id: bigint } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { node_id: bigint } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { node_id: bigint } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { node_id: bigint } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { node_id: bigint } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 412
          }
      $get:
        | {
            input: { param: { node_id: bigint } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            }
            output: Node
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { node_id: bigint } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { node_id: bigint } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { node_id: bigint } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { node_id: bigint } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { node_id: bigint } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { node_id: bigint } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 412
          }
    }
  } & {
    '/v4/nodes/:node_id/comments': {
      $get:
        | {
            input: { param: { node_id: bigint } } & {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                hide_deleted?: boolean | undefined
              }
            } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            }
            output: CommentList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { node_id: bigint } } & {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                hide_deleted?: boolean | undefined
              }
            } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { node_id: bigint } } & {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                hide_deleted?: boolean | undefined
              }
            } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { node_id: bigint } } & {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                hide_deleted?: boolean | undefined
              }
            } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { node_id: bigint } } & {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                hide_deleted?: boolean | undefined
              }
            } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { node_id: bigint } } & {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                hide_deleted?: boolean | undefined
              }
            } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { node_id: bigint } } & {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                hide_deleted?: boolean | undefined
              }
            } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 412
          }
      $post:
        | {
            input: { param: { node_id: bigint } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            } & { json: CreateNodeCommentRequest }
            output: Comment
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { node_id: bigint } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            } & { json: CreateNodeCommentRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { node_id: bigint } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            } & { json: CreateNodeCommentRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { node_id: bigint } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            } & { json: CreateNodeCommentRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { node_id: bigint } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            } & { json: CreateNodeCommentRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { node_id: bigint } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            } & { json: CreateNodeCommentRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { node_id: bigint } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            } & { json: CreateNodeCommentRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 412
          }
    }
  } & {
    '/v4/nodes/:node_id/copy_to': {
      $post:
        | {
            input: { param: { node_id: bigint } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            } & { json: CopyNodesRequest }
            output: Node
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { node_id: bigint } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            } & { json: CopyNodesRequest }
            output: string
            outputFormat: 'json'
            status: 204
          }
        | {
            input: { param: { node_id: bigint } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            } & { json: CopyNodesRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { node_id: bigint } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            } & { json: CopyNodesRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { node_id: bigint } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            } & { json: CopyNodesRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { node_id: bigint } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            } & { json: CopyNodesRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { node_id: bigint } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            } & { json: CopyNodesRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { node_id: bigint } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            } & { json: CopyNodesRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { node_id: bigint } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            } & { json: CopyNodesRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 412
          }
        | {
            input: { param: { node_id: bigint } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            } & { json: CopyNodesRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 507
          }
    }
  } & {
    '/v4/nodes/:node_id/deleted_nodes': {
      $delete:
        | {
            input: { param: { node_id: bigint } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { node_id: bigint } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { node_id: bigint } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { node_id: bigint } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { node_id: bigint } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { node_id: bigint } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { node_id: bigint } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 412
          }
      $get:
        | {
            input: { param: { node_id: bigint } } & {
              query: {
                filter?: string | undefined
                sort?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            }
            output: DeletedNodeSummaryList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { node_id: bigint } } & {
              query: {
                filter?: string | undefined
                sort?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { node_id: bigint } } & {
              query: {
                filter?: string | undefined
                sort?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { node_id: bigint } } & {
              query: {
                filter?: string | undefined
                sort?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { node_id: bigint } } & {
              query: {
                filter?: string | undefined
                sort?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { node_id: bigint } } & {
              query: {
                filter?: string | undefined
                sort?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { node_id: bigint } } & {
              query: {
                filter?: string | undefined
                sort?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 412
          }
    }
  } & {
    '/v4/nodes/:node_id/deleted_nodes/versions': {
      $get:
        | {
            input: { param: { node_id: bigint } } & {
              query: {
                type: string
                name: string
                sort?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            }
            output: DeletedNodeVersionsList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { node_id: bigint } } & {
              query: {
                type: string
                name: string
                sort?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { node_id: bigint } } & {
              query: {
                type: string
                name: string
                sort?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { node_id: bigint } } & {
              query: {
                type: string
                name: string
                sort?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { node_id: bigint } } & {
              query: {
                type: string
                name: string
                sort?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { node_id: bigint } } & {
              query: {
                type: string
                name: string
                sort?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { node_id: bigint } } & {
              query: {
                type: string
                name: string
                sort?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 412
          }
    }
  } & {
    '/v4/nodes/:node_id/favorite': {
      $delete:
        | {
            input: { param: { node_id: bigint } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { node_id: bigint } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { node_id: bigint } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { node_id: bigint } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { node_id: bigint } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { node_id: bigint } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { node_id: bigint } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 412
          }
      $post:
        | {
            input: { param: { node_id: bigint } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            }
            output: Node
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { node_id: bigint } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { node_id: bigint } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { node_id: bigint } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { node_id: bigint } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { node_id: bigint } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { node_id: bigint } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 412
          }
    }
  } & {
    '/v4/nodes/:node_id/move_to': {
      $post:
        | {
            input: { param: { node_id: bigint } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            } & { json: MoveNodesRequest }
            output: Node
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { node_id: bigint } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            } & { json: MoveNodesRequest }
            output: string
            outputFormat: 'json'
            status: 204
          }
        | {
            input: { param: { node_id: bigint } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            } & { json: MoveNodesRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { node_id: bigint } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            } & { json: MoveNodesRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { node_id: bigint } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            } & { json: MoveNodesRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { node_id: bigint } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            } & { json: MoveNodesRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { node_id: bigint } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            } & { json: MoveNodesRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { node_id: bigint } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            } & { json: MoveNodesRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { node_id: bigint } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            } & { json: MoveNodesRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 412
          }
        | {
            input: { param: { node_id: bigint } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            } & { json: MoveNodesRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 507
          }
    }
  } & {
    '/v4/nodes/:node_id/parents': {
      $get:
        | {
            input: { param: { node_id: bigint } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: NodeParentList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { node_id: bigint } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { node_id: bigint } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { node_id: bigint } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { node_id: bigint } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { node_id: bigint } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { node_id: bigint } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 412
          }
    }
  } & {
    '/v4/provisioning/customers': {
      $get:
        | {
            input: {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                filter?: string | undefined
                sort?: string | undefined
                include_attributes?: boolean | undefined
              }
            } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Service-Token'?: string | undefined
              }
            }
            output: CustomerList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                filter?: string | undefined
                sort?: string | undefined
                include_attributes?: boolean | undefined
              }
            } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Service-Token'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                filter?: string | undefined
                sort?: string | undefined
                include_attributes?: boolean | undefined
              }
            } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Service-Token'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                filter?: string | undefined
                sort?: string | undefined
                include_attributes?: boolean | undefined
              }
            } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Service-Token'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                filter?: string | undefined
                sort?: string | undefined
                include_attributes?: boolean | undefined
              }
            } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Service-Token'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 406
          }
      $post:
        | {
            input: {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Service-Token'?: string | undefined
              }
            } & { json: NewCustomerRequest }
            output: NewCustomerResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Service-Token'?: string | undefined
              }
            } & { json: NewCustomerRequest }
            output: ErrorResponse | PasswordPolicyViolationResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Service-Token'?: string | undefined
              }
            } & { json: NewCustomerRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Service-Token'?: string | undefined
              }
            } & { json: NewCustomerRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 402
          }
        | {
            input: {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Service-Token'?: string | undefined
              }
            } & { json: NewCustomerRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Service-Token'?: string | undefined
              }
            } & { json: NewCustomerRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 406
          }
        | {
            input: {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Service-Token'?: string | undefined
              }
            } & { json: NewCustomerRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 409
          }
    }
  } & {
    '/v4/provisioning/customers/:customer_id': {
      $delete:
        | {
            input: { param: { customer_id: bigint } } & {
              header: { 'X-Sds-Service-Token'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { customer_id: bigint } } & {
              header: { 'X-Sds-Service-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { customer_id: bigint } } & {
              header: { 'X-Sds-Service-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { customer_id: bigint } } & {
              header: { 'X-Sds-Service-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { customer_id: bigint } } & {
              header: { 'X-Sds-Service-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 406
          }
      $get:
        | {
            input: { param: { customer_id: bigint } } & {
              query: { include_attributes?: boolean | undefined }
            } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Service-Token'?: string | undefined
              }
            }
            output: Customer
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { customer_id: bigint } } & {
              query: { include_attributes?: boolean | undefined }
            } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Service-Token'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { customer_id: bigint } } & {
              query: { include_attributes?: boolean | undefined }
            } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Service-Token'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { customer_id: bigint } } & {
              query: { include_attributes?: boolean | undefined }
            } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Service-Token'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { customer_id: bigint } } & {
              query: { include_attributes?: boolean | undefined }
            } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Service-Token'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 406
          }
      $put:
        | {
            input: { param: { customer_id: bigint } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Service-Token'?: string | undefined
              }
            } & { json: UpdateCustomerRequest }
            output: UpdateCustomerResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { customer_id: bigint } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Service-Token'?: string | undefined
              }
            } & { json: UpdateCustomerRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { customer_id: bigint } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Service-Token'?: string | undefined
              }
            } & { json: UpdateCustomerRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { customer_id: bigint } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Service-Token'?: string | undefined
              }
            } & { json: UpdateCustomerRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { customer_id: bigint } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Service-Token'?: string | undefined
              }
            } & { json: UpdateCustomerRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { customer_id: bigint } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Service-Token'?: string | undefined
              }
            } & { json: UpdateCustomerRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 406
          }
    }
  } & {
    '/v4/provisioning/customers/:customer_id/customerAttributes': {
      $get:
        | {
            input: { param: { customer_id: bigint } } & {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                filter?: string | undefined
                sort?: string | undefined
              }
            } & { header: { 'X-Sds-Service-Token'?: string | undefined } }
            output: AttributesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { customer_id: bigint } } & {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                filter?: string | undefined
                sort?: string | undefined
              }
            } & { header: { 'X-Sds-Service-Token'?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { customer_id: bigint } } & {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                filter?: string | undefined
                sort?: string | undefined
              }
            } & { header: { 'X-Sds-Service-Token'?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { customer_id: bigint } } & {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                filter?: string | undefined
                sort?: string | undefined
              }
            } & { header: { 'X-Sds-Service-Token'?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { customer_id: bigint } } & {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                filter?: string | undefined
                sort?: string | undefined
              }
            } & { header: { 'X-Sds-Service-Token'?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 406
          }
      $post:
        | {
            input: { param: { customer_id: bigint } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Service-Token'?: string | undefined
              }
            } & { json: CustomerAttributes }
            output: Customer
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { customer_id: bigint } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Service-Token'?: string | undefined
              }
            } & { json: CustomerAttributes }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { customer_id: bigint } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Service-Token'?: string | undefined
              }
            } & { json: CustomerAttributes }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { customer_id: bigint } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Service-Token'?: string | undefined
              }
            } & { json: CustomerAttributes }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { customer_id: bigint } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Service-Token'?: string | undefined
              }
            } & { json: CustomerAttributes }
            output: ErrorResponse
            outputFormat: 'json'
            status: 406
          }
      $put:
        | {
            input: { param: { customer_id: bigint } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Service-Token'?: string | undefined
              }
            } & { json: CustomerAttributes }
            output: Customer
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { customer_id: bigint } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Service-Token'?: string | undefined
              }
            } & { json: CustomerAttributes }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { customer_id: bigint } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Service-Token'?: string | undefined
              }
            } & { json: CustomerAttributes }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { customer_id: bigint } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Service-Token'?: string | undefined
              }
            } & { json: CustomerAttributes }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { customer_id: bigint } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Service-Token'?: string | undefined
              }
            } & { json: CustomerAttributes }
            output: ErrorResponse
            outputFormat: 'json'
            status: 406
          }
    }
  } & {
    '/v4/provisioning/customers/:customer_id/customerAttributes/:key': {
      $delete:
        | {
            input: { param: { customer_id: bigint; key: string } } & {
              header: { 'X-Sds-Service-Token'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { customer_id: bigint; key: string } } & {
              header: { 'X-Sds-Service-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { customer_id: bigint; key: string } } & {
              header: { 'X-Sds-Service-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { customer_id: bigint; key: string } } & {
              header: { 'X-Sds-Service-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { customer_id: bigint; key: string } } & {
              header: { 'X-Sds-Service-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 406
          }
    }
  } & {
    '/v4/provisioning/customers/:customer_id/users': {
      $get:
        | {
            input: { param: { customer_id: bigint } } & {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                filter?: string | undefined
                sort?: string | undefined
                include_attributes?: boolean | undefined
                include_roles?: boolean | undefined
                include_manageable_rooms?: boolean | undefined
              }
            } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Service-Token'?: string | undefined
              }
            }
            output: UserList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { customer_id: bigint } } & {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                filter?: string | undefined
                sort?: string | undefined
                include_attributes?: boolean | undefined
                include_roles?: boolean | undefined
                include_manageable_rooms?: boolean | undefined
              }
            } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Service-Token'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { customer_id: bigint } } & {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                filter?: string | undefined
                sort?: string | undefined
                include_attributes?: boolean | undefined
                include_roles?: boolean | undefined
                include_manageable_rooms?: boolean | undefined
              }
            } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Service-Token'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { customer_id: bigint } } & {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                filter?: string | undefined
                sort?: string | undefined
                include_attributes?: boolean | undefined
                include_roles?: boolean | undefined
                include_manageable_rooms?: boolean | undefined
              }
            } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Service-Token'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { customer_id: bigint } } & {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                filter?: string | undefined
                sort?: string | undefined
                include_attributes?: boolean | undefined
                include_roles?: boolean | undefined
                include_manageable_rooms?: boolean | undefined
              }
            } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Service-Token'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 406
          }
    }
  } & {
    '/v4/provisioning/webhooks': {
      $get:
        | {
            input: {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                filter?: string | undefined
                sort?: string | undefined
              }
            } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Service-Token'?: string | undefined
              }
            }
            output: WebhookList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                filter?: string | undefined
                sort?: string | undefined
              }
            } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Service-Token'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                filter?: string | undefined
                sort?: string | undefined
              }
            } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Service-Token'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                filter?: string | undefined
                sort?: string | undefined
              }
            } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Service-Token'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                filter?: string | undefined
                sort?: string | undefined
              }
            } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Service-Token'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 406
          }
      $post:
        | {
            input: {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Service-Token'?: string | undefined
              }
            } & { json: CreateWebhookRequest }
            output: Webhook
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Service-Token'?: string | undefined
              }
            } & { json: CreateWebhookRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Service-Token'?: string | undefined
              }
            } & { json: CreateWebhookRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Service-Token'?: string | undefined
              }
            } & { json: CreateWebhookRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Service-Token'?: string | undefined
              }
            } & { json: CreateWebhookRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 406
          }
    }
  } & {
    '/v4/provisioning/webhooks/event_types': {
      $get:
        | {
            input: { header: { 'X-Sds-Service-Token'?: string | undefined } }
            output: EventTypeList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Sds-Service-Token'?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'X-Sds-Service-Token'?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'X-Sds-Service-Token'?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { header: { 'X-Sds-Service-Token'?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 406
          }
    }
  } & {
    '/v4/provisioning/webhooks/:webhook_id': {
      $delete:
        | {
            input: { param: { webhook_id: bigint } } & {
              header: { 'X-Sds-Service-Token'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { webhook_id: bigint } } & {
              header: { 'X-Sds-Service-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { webhook_id: bigint } } & {
              header: { 'X-Sds-Service-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { webhook_id: bigint } } & {
              header: { 'X-Sds-Service-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { webhook_id: bigint } } & {
              header: { 'X-Sds-Service-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { webhook_id: bigint } } & {
              header: { 'X-Sds-Service-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 406
          }
      $get:
        | {
            input: { param: { webhook_id: bigint } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Service-Token'?: string | undefined
              }
            }
            output: Webhook
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { webhook_id: bigint } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Service-Token'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { webhook_id: bigint } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Service-Token'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { webhook_id: bigint } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Service-Token'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { webhook_id: bigint } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Service-Token'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { webhook_id: bigint } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Service-Token'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 406
          }
      $put:
        | {
            input: { param: { webhook_id: bigint } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Service-Token'?: string | undefined
              }
            } & { json: UpdateWebhookRequest }
            output: Webhook
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { webhook_id: bigint } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Service-Token'?: string | undefined
              }
            } & { json: UpdateWebhookRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { webhook_id: bigint } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Service-Token'?: string | undefined
              }
            } & { json: UpdateWebhookRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { webhook_id: bigint } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Service-Token'?: string | undefined
              }
            } & { json: UpdateWebhookRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { webhook_id: bigint } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Service-Token'?: string | undefined
              }
            } & { json: UpdateWebhookRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { webhook_id: bigint } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Service-Token'?: string | undefined
              }
            } & { json: UpdateWebhookRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 406
          }
    }
  } & {
    '/v4/provisioning/webhooks/:webhook_id/reset_lifetime': {
      $post:
        | {
            input: { param: { webhook_id: bigint } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Service-Token'?: string | undefined
              }
            }
            output: Webhook
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { webhook_id: bigint } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Service-Token'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { webhook_id: bigint } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Service-Token'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { webhook_id: bigint } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Service-Token'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { webhook_id: bigint } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Service-Token'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { webhook_id: bigint } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Service-Token'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 406
          }
    }
  } & {
    '/v4/public/shares/downloads/:access_key': {
      $get:
        | {
            input: { param: { access_key: string } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
              }
            }
            output: PublicDownloadShare
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { access_key: string } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { access_key: string } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { access_key: string } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 406
          }
      $head:
        | {
            input: { param: { access_key: string } } & { query: { password?: string | undefined } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { access_key: string } } & { query: { password?: string | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { access_key: string } } & { query: { password?: string | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { access_key: string } } & { query: { password?: string | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { access_key: string } } & { query: { password?: string | undefined } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { access_key: string } } & { query: { password?: string | undefined } }
            output: {}
            outputFormat: string
            status: 406
          }
      $post:
        | {
            input: { param: { access_key: string } } & { json: PublicDownloadTokenGenerateRequest }
            output: PublicDownloadTokenGenerateResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { access_key: string } } & { json: PublicDownloadTokenGenerateRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { access_key: string } } & { json: PublicDownloadTokenGenerateRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { access_key: string } } & { json: PublicDownloadTokenGenerateRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { access_key: string } } & { json: PublicDownloadTokenGenerateRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { access_key: string } } & { json: PublicDownloadTokenGenerateRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 406
          }
    }
  } & {
    '/v4/public/shares/downloads/:access_key/:token': {
      $get:
        | {
            input: { param: { access_key: string; token: string } } & {
              query: { generic_mimetype?: boolean | undefined; inline?: boolean | undefined }
            } & { header: { Range?: string | undefined } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { access_key: string; token: string } } & {
              query: { generic_mimetype?: boolean | undefined; inline?: boolean | undefined }
            } & { header: { Range?: string | undefined } }
            output: {}
            outputFormat: string
            status: 206
          }
        | {
            input: { param: { access_key: string; token: string } } & {
              query: { generic_mimetype?: boolean | undefined; inline?: boolean | undefined }
            } & { header: { Range?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { access_key: string; token: string } } & {
              query: { generic_mimetype?: boolean | undefined; inline?: boolean | undefined }
            } & { header: { Range?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { access_key: string; token: string } } & {
              query: { generic_mimetype?: boolean | undefined; inline?: boolean | undefined }
            } & { header: { Range?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 406
          }
        | {
            input: { param: { access_key: string; token: string } } & {
              query: { generic_mimetype?: boolean | undefined; inline?: boolean | undefined }
            } & { header: { Range?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 416
          }
      $head:
        | {
            input: { param: { access_key: string; token: string } } & {
              query: { generic_mimetype?: boolean | undefined; inline?: boolean | undefined }
            } & { header: { Range?: string | undefined } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { access_key: string; token: string } } & {
              query: { generic_mimetype?: boolean | undefined; inline?: boolean | undefined }
            } & { header: { Range?: string | undefined } }
            output: {}
            outputFormat: string
            status: 206
          }
        | {
            input: { param: { access_key: string; token: string } } & {
              query: { generic_mimetype?: boolean | undefined; inline?: boolean | undefined }
            } & { header: { Range?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { access_key: string; token: string } } & {
              query: { generic_mimetype?: boolean | undefined; inline?: boolean | undefined }
            } & { header: { Range?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { access_key: string; token: string } } & {
              query: { generic_mimetype?: boolean | undefined; inline?: boolean | undefined }
            } & { header: { Range?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 406
          }
        | {
            input: { param: { access_key: string; token: string } } & {
              query: { generic_mimetype?: boolean | undefined; inline?: boolean | undefined }
            } & { header: { Range?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 416
          }
    }
  } & {
    '/v4/public/shares/uploads/:access_key': {
      $get:
        | {
            input: { param: { access_key: string } } & {
              header: {
                'X-Sds-Share-Password'?: string | undefined
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
              }
            }
            output: PublicUploadShare
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { access_key: string } } & {
              header: {
                'X-Sds-Share-Password'?: string | undefined
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { access_key: string } } & {
              header: {
                'X-Sds-Share-Password'?: string | undefined
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { access_key: string } } & {
              header: {
                'X-Sds-Share-Password'?: string | undefined
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { access_key: string } } & {
              header: {
                'X-Sds-Share-Password'?: string | undefined
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 406
          }
      $post:
        | {
            input: { param: { access_key: string } } & { json: CreateShareUploadChannelRequest }
            output: CreateShareUploadChannelResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { access_key: string } } & { json: CreateShareUploadChannelRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { access_key: string } } & { json: CreateShareUploadChannelRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { access_key: string } } & { json: CreateShareUploadChannelRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { access_key: string } } & { json: CreateShareUploadChannelRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { access_key: string } } & { json: CreateShareUploadChannelRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { access_key: string } } & { json: CreateShareUploadChannelRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 412
          }
        | {
            input: { param: { access_key: string } } & { json: CreateShareUploadChannelRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 504
          }
        | {
            input: { param: { access_key: string } } & { json: CreateShareUploadChannelRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 507
          }
    }
  } & {
    '/v4/public/shares/uploads/:access_key/:upload_id': {
      $delete:
        | {
            input: { param: { access_key: string; upload_id: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { access_key: string; upload_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { access_key: string; upload_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { access_key: string; upload_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { access_key: string; upload_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 504
          }
        | {
            input: { param: { access_key: string; upload_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 507
          }
      $get:
        | {
            input: { param: { access_key: string; upload_id: string } }
            output: S3ShareUploadStatus
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { access_key: string; upload_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { access_key: string; upload_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { access_key: string; upload_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { access_key: string; upload_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 412
          }
      $post:
        | {
            input: { param: { access_key: string; upload_id: string } } & {
              header: {
                'Content-Range'?: string | undefined
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
              }
            } & { form: { file: File } }
            output: ChunkUploadResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { access_key: string; upload_id: string } } & {
              header: {
                'Content-Range'?: string | undefined
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
              }
            } & { form: { file: File } }
            output: ChunkUploadResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { access_key: string; upload_id: string } } & {
              header: {
                'Content-Range'?: string | undefined
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
              }
            } & { form: { file: File } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { access_key: string; upload_id: string } } & {
              header: {
                'Content-Range'?: string | undefined
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
              }
            } & { form: { file: File } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { access_key: string; upload_id: string } } & {
              header: {
                'Content-Range'?: string | undefined
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
              }
            } & { form: { file: File } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { access_key: string; upload_id: string } } & {
              header: {
                'Content-Range'?: string | undefined
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
              }
            } & { form: { file: File } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 412
          }
        | {
            input: { param: { access_key: string; upload_id: string } } & {
              header: {
                'Content-Range'?: string | undefined
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
              }
            } & { form: { file: File } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 507
          }
      $put:
        | {
            input: { param: { access_key: string; upload_id: string } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
              }
            } & { json: UserFileKeyList }
            output: PublicUploadedFileData
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { access_key: string; upload_id: string } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
              }
            } & { json: UserFileKeyList }
            output: PublicUploadedFileData
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { access_key: string; upload_id: string } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
              }
            } & { json: UserFileKeyList }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { access_key: string; upload_id: string } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
              }
            } & { json: UserFileKeyList }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { access_key: string; upload_id: string } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
              }
            } & { json: UserFileKeyList }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { access_key: string; upload_id: string } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
              }
            } & { json: UserFileKeyList }
            output: ErrorResponse
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { access_key: string; upload_id: string } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
              }
            } & { json: UserFileKeyList }
            output: ErrorResponse
            outputFormat: 'json'
            status: 412
          }
        | {
            input: { param: { access_key: string; upload_id: string } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
              }
            } & { json: UserFileKeyList }
            output: ErrorResponse
            outputFormat: 'json'
            status: 504
          }
        | {
            input: { param: { access_key: string; upload_id: string } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
              }
            } & { json: UserFileKeyList }
            output: ErrorResponse
            outputFormat: 'json'
            status: 507
          }
    }
  } & {
    '/v4/public/shares/uploads/:access_key/:upload_id/s3': {
      $put:
        | {
            input: { param: { access_key: string; upload_id: string } } & {
              json: CompleteS3ShareUploadRequest
            }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { param: { access_key: string; upload_id: string } } & {
              json: CompleteS3ShareUploadRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { access_key: string; upload_id: string } } & {
              json: CompleteS3ShareUploadRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { access_key: string; upload_id: string } } & {
              json: CompleteS3ShareUploadRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { access_key: string; upload_id: string } } & {
              json: CompleteS3ShareUploadRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 412
          }
    }
  } & {
    '/v4/public/shares/uploads/:access_key/:upload_id/s3_urls': {
      $post:
        | {
            input: { param: { access_key: string; upload_id: string } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
              }
            } & { json: GeneratePresignedUrlsRequest }
            output: PresignedUrlList
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { access_key: string; upload_id: string } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
              }
            } & { json: GeneratePresignedUrlsRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { access_key: string; upload_id: string } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
              }
            } & { json: GeneratePresignedUrlsRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { access_key: string; upload_id: string } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
              }
            } & { json: GeneratePresignedUrlsRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { access_key: string; upload_id: string } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
              }
            } & { json: GeneratePresignedUrlsRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { access_key: string; upload_id: string } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
              }
            } & { json: GeneratePresignedUrlsRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 412
          }
        | {
            input: { param: { access_key: string; upload_id: string } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
              }
            } & { json: GeneratePresignedUrlsRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 504
          }
        | {
            input: { param: { access_key: string; upload_id: string } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
              }
            } & { json: GeneratePresignedUrlsRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 507
          }
    }
  } & {
    '/v4/public/software/third_party_dependencies': {
      $get:
        | { input: {}; output: ThirdPartyDependenciesData[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 406 }
    }
  } & {
    '/v4/public/software/version': {
      $get:
        | {
            input: {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
              }
            }
            output: SoftwareVersionData
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 406
          }
    }
  } & {
    '/v4/public/system/info': {
      $get:
        | {
            input: { query: { is_enabled?: boolean | undefined } }
            output: SystemInfo
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { is_enabled?: boolean | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { is_enabled?: boolean | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 406
          }
    }
  } & {
    '/v4/public/system/info/auth/ad': {
      $get:
        | {
            input: { query: { is_global_available?: boolean | undefined } }
            output: ActiveDirectoryAuthInfo
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { is_global_available?: boolean | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { is_global_available?: boolean | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 406
          }
    }
  } & {
    '/v4/public/system/info/auth/openid': {
      $get:
        | {
            input: { query: { is_global_available?: boolean | undefined } }
            output: OpenIdAuthInfo
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { is_global_available?: boolean | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { is_global_available?: boolean | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 406
          }
    }
  } & {
    '/v4/public/time': {
      $get:
        | {
            input: {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
              }
            }
            output: SdsServerTime
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 406
          }
    }
  } & {
    '/v4/resources/user/notifications/scopes': {
      $get:
        | { input: {}; output: NotificationScopeList; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 406 }
    }
  } & {
    '/v4/resources/users/:user_id/avatar/:uuid': {
      $get:
        | {
            input: { param: { uuid: string; user_id: bigint } }
            output: Avatar
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { uuid: string; user_id: bigint } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { uuid: string; user_id: bigint } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { uuid: string; user_id: bigint } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 406
          }
    }
  } & {
    '/v4/roles': {
      $get:
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: RoleList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 412
          }
    }
  } & {
    '/v4/roles/:role_id/groups': {
      $delete:
        | {
            input: { param: { role_id: number } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            } & { json: GroupIds }
            output: RoleGroupList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { role_id: number } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            } & { json: GroupIds }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { role_id: number } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            } & { json: GroupIds }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { role_id: number } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            } & { json: GroupIds }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { role_id: number } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            } & { json: GroupIds }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { role_id: number } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            } & { json: GroupIds }
            output: ErrorResponse
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { role_id: number } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            } & { json: GroupIds }
            output: ErrorResponse
            outputFormat: 'json'
            status: 412
          }
      $get:
        | {
            input: { param: { role_id: number } } & {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                filter?: string | undefined
              }
            } & { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: RoleGroupList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { role_id: number } } & {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                filter?: string | undefined
              }
            } & { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { role_id: number } } & {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                filter?: string | undefined
              }
            } & { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { role_id: number } } & {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                filter?: string | undefined
              }
            } & { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { role_id: number } } & {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                filter?: string | undefined
              }
            } & { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { role_id: number } } & {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                filter?: string | undefined
              }
            } & { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { role_id: number } } & {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                filter?: string | undefined
              }
            } & { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 412
          }
      $post:
        | {
            input: { param: { role_id: number } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            } & { json: GroupIds }
            output: RoleGroupList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { role_id: number } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            } & { json: GroupIds }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { role_id: number } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            } & { json: GroupIds }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { role_id: number } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            } & { json: GroupIds }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { role_id: number } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            } & { json: GroupIds }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { role_id: number } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            } & { json: GroupIds }
            output: ErrorResponse
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { role_id: number } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            } & { json: GroupIds }
            output: ErrorResponse
            outputFormat: 'json'
            status: 412
          }
    }
  } & {
    '/v4/roles/:role_id/users': {
      $delete:
        | {
            input: { param: { role_id: number } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            } & { json: UserIds }
            output: RoleUserList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { role_id: number } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            } & { json: UserIds }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { role_id: number } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            } & { json: UserIds }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { role_id: number } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            } & { json: UserIds }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { role_id: number } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            } & { json: UserIds }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { role_id: number } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            } & { json: UserIds }
            output: ErrorResponse
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { role_id: number } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            } & { json: UserIds }
            output: ErrorResponse
            outputFormat: 'json'
            status: 412
          }
      $get:
        | {
            input: { param: { role_id: number } } & {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                filter?: string | undefined
              }
            } & { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: RoleUserList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { role_id: number } } & {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                filter?: string | undefined
              }
            } & { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { role_id: number } } & {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                filter?: string | undefined
              }
            } & { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { role_id: number } } & {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                filter?: string | undefined
              }
            } & { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { role_id: number } } & {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                filter?: string | undefined
              }
            } & { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { role_id: number } } & {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                filter?: string | undefined
              }
            } & { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { role_id: number } } & {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                filter?: string | undefined
              }
            } & { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 412
          }
      $post:
        | {
            input: { param: { role_id: number } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            } & { json: UserIds }
            output: RoleUserList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { role_id: number } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            } & { json: UserIds }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { role_id: number } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            } & { json: UserIds }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { role_id: number } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            } & { json: UserIds }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { role_id: number } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            } & { json: UserIds }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { role_id: number } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            } & { json: UserIds }
            output: ErrorResponse
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { role_id: number } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            } & { json: UserIds }
            output: ErrorResponse
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { role_id: number } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            } & { json: UserIds }
            output: ErrorResponse
            outputFormat: 'json'
            status: 412
          }
    }
  } & {
    '/v4/settings': {
      $get:
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: CustomerSettingsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 412
          }
      $put:
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: CustomerSettingsRequest
            }
            output: CustomerSettingsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: CustomerSettingsRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: CustomerSettingsRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: CustomerSettingsRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: CustomerSettingsRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: CustomerSettingsRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: CustomerSettingsRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 412
          }
    }
  } & {
    '/v4/settings/keypair': {
      $delete:
        | {
            input: { query: { version?: string | undefined } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { query: { version?: string | undefined } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { version?: string | undefined } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { version?: string | undefined } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { version?: string | undefined } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { query: { version?: string | undefined } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 412
          }
      $get:
        | {
            input: { query: { version?: string | undefined } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            }
            output: UserKeyPairContainer
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { version?: string | undefined } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { version?: string | undefined } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { version?: string | undefined } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { query: { version?: string | undefined } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 412
          }
      $post:
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: UserKeyPairContainer
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: UserKeyPairContainer
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: UserKeyPairContainer
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: UserKeyPairContainer
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: UserKeyPairContainer
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: UserKeyPairContainer
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 412
          }
    }
  } & {
    '/v4/settings/keypairs': {
      $get:
        | {
            input: {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            }
            output: UserKeyPairContainer[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 406
          }
        | {
            input: {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 412
          }
      $post:
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: CreateKeyPairRequest
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: CreateKeyPairRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: CreateKeyPairRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: CreateKeyPairRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: CreateKeyPairRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: CreateKeyPairRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 412
          }
    }
  } & {
    '/v4/settings/notifications/channels': {
      $get:
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: NotificationChannelList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 412
          }
      $put:
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: NotificationChannelActivationRequest
            }
            output: NotificationChannelList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: NotificationChannelActivationRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: NotificationChannelActivationRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: NotificationChannelActivationRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: NotificationChannelActivationRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: NotificationChannelActivationRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 412
          }
    }
  } & {
    '/v4/settings/webhooks': {
      $get:
        | {
            input: {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                filter?: string | undefined
                sort?: string | undefined
              }
            } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            }
            output: WebhookList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                filter?: string | undefined
                sort?: string | undefined
              }
            } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                filter?: string | undefined
                sort?: string | undefined
              }
            } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                filter?: string | undefined
                sort?: string | undefined
              }
            } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                filter?: string | undefined
                sort?: string | undefined
              }
            } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 406
          }
        | {
            input: {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                filter?: string | undefined
                sort?: string | undefined
              }
            } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 412
          }
      $post:
        | {
            input: {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            } & { json: CreateWebhookRequest }
            output: Webhook
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            } & { json: CreateWebhookRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            } & { json: CreateWebhookRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            } & { json: CreateWebhookRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            } & { json: CreateWebhookRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 406
          }
        | {
            input: {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            } & { json: CreateWebhookRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 412
          }
    }
  } & {
    '/v4/settings/webhooks/event_types': {
      $get:
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: EventTypeList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 412
          }
    }
  } & {
    '/v4/settings/webhooks/:webhook_id': {
      $delete:
        | {
            input: { param: { webhook_id: bigint } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { webhook_id: bigint } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { webhook_id: bigint } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { webhook_id: bigint } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { webhook_id: bigint } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { webhook_id: bigint } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { webhook_id: bigint } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 412
          }
      $get:
        | {
            input: { param: { webhook_id: bigint } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            }
            output: Webhook
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { webhook_id: bigint } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { webhook_id: bigint } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { webhook_id: bigint } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { webhook_id: bigint } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { webhook_id: bigint } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { webhook_id: bigint } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 412
          }
      $put:
        | {
            input: { param: { webhook_id: bigint } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            } & { json: UpdateWebhookRequest }
            output: Webhook
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { webhook_id: bigint } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            } & { json: UpdateWebhookRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { webhook_id: bigint } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            } & { json: UpdateWebhookRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { webhook_id: bigint } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            } & { json: UpdateWebhookRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { webhook_id: bigint } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            } & { json: UpdateWebhookRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { webhook_id: bigint } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            } & { json: UpdateWebhookRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { webhook_id: bigint } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            } & { json: UpdateWebhookRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 412
          }
    }
  } & {
    '/v4/settings/webhooks/:webhook_id/reset_lifetime': {
      $post:
        | {
            input: { param: { webhook_id: bigint } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            }
            output: Webhook
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { webhook_id: bigint } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { webhook_id: bigint } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { webhook_id: bigint } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { webhook_id: bigint } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { webhook_id: bigint } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { webhook_id: bigint } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 412
          }
    }
  } & {
    '/v4/shares/downloads': {
      $delete:
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: DeleteDownloadSharesRequest
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: DeleteDownloadSharesRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: DeleteDownloadSharesRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: DeleteDownloadSharesRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: DeleteDownloadSharesRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: DeleteDownloadSharesRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: DeleteDownloadSharesRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 412
          }
      $get:
        | {
            input: {
              query: {
                filter?: string | undefined
                sort?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            }
            output: DownloadShareList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                filter?: string | undefined
                sort?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                filter?: string | undefined
                sort?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                filter?: string | undefined
                sort?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 406
          }
        | {
            input: {
              query: {
                filter?: string | undefined
                sort?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 412
          }
      $post:
        | {
            input: {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            } & { json: CreateDownloadShareRequest }
            output: DownloadShare
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            } & { json: CreateDownloadShareRequest }
            output: ErrorResponse | PasswordPolicyViolationResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            } & { json: CreateDownloadShareRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            } & { json: CreateDownloadShareRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            } & { json: CreateDownloadShareRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            } & { json: CreateDownloadShareRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 406
          }
        | {
            input: {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            } & { json: CreateDownloadShareRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 412
          }
        | {
            input: {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            } & { json: CreateDownloadShareRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 502
          }
      $put:
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: UpdateDownloadSharesBulkRequest
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: UpdateDownloadSharesBulkRequest
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: UpdateDownloadSharesBulkRequest
            }
            output: ErrorResponse | PasswordPolicyViolationResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: UpdateDownloadSharesBulkRequest
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: UpdateDownloadSharesBulkRequest
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: UpdateDownloadSharesBulkRequest
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: UpdateDownloadSharesBulkRequest
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 406
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: UpdateDownloadSharesBulkRequest
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 412
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: UpdateDownloadSharesBulkRequest
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 502
          }
    }
  } & {
    '/v4/shares/downloads/:share_id': {
      $delete:
        | {
            input: { param: { share_id: bigint } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { share_id: bigint } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { share_id: bigint } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { share_id: bigint } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { share_id: bigint } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { share_id: bigint } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { share_id: bigint } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 412
          }
      $get:
        | {
            input: { param: { share_id: bigint } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            }
            output: DownloadShare
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { share_id: bigint } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { share_id: bigint } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { share_id: bigint } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { share_id: bigint } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { share_id: bigint } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { share_id: bigint } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 412
          }
      $put:
        | {
            input: { param: { share_id: bigint } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            } & { json: UpdateDownloadShareRequest }
            output: DownloadShare
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { share_id: bigint } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            } & { json: UpdateDownloadShareRequest }
            output: ErrorResponse | PasswordPolicyViolationResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { share_id: bigint } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            } & { json: UpdateDownloadShareRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { share_id: bigint } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            } & { json: UpdateDownloadShareRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { share_id: bigint } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            } & { json: UpdateDownloadShareRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { share_id: bigint } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            } & { json: UpdateDownloadShareRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { share_id: bigint } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            } & { json: UpdateDownloadShareRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 412
          }
        | {
            input: { param: { share_id: bigint } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            } & { json: UpdateDownloadShareRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 502
          }
    }
  } & {
    '/v4/shares/downloads/:share_id/email': {
      $post:
        | {
            input: { param: { share_id: bigint } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            } & { json: DownloadShareLinkEmail }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { share_id: bigint } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            } & { json: DownloadShareLinkEmail }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { share_id: bigint } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            } & { json: DownloadShareLinkEmail }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { share_id: bigint } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            } & { json: DownloadShareLinkEmail }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { share_id: bigint } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            } & { json: DownloadShareLinkEmail }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { share_id: bigint } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            } & { json: DownloadShareLinkEmail }
            output: ErrorResponse
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { share_id: bigint } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            } & { json: DownloadShareLinkEmail }
            output: ErrorResponse
            outputFormat: 'json'
            status: 412
          }
    }
  } & {
    '/v4/shares/downloads/:share_id/qr': {
      $get:
        | {
            input: { param: { share_id: bigint } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            }
            output: DownloadShare
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { share_id: bigint } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { share_id: bigint } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { share_id: bigint } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { share_id: bigint } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { share_id: bigint } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { share_id: bigint } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 412
          }
    }
  } & {
    '/v4/shares/uploads': {
      $delete:
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: DeleteUploadSharesRequest
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: DeleteUploadSharesRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: DeleteUploadSharesRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: DeleteUploadSharesRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: DeleteUploadSharesRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: DeleteUploadSharesRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: DeleteUploadSharesRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 412
          }
      $get:
        | {
            input: {
              query: {
                filter?: string | undefined
                sort?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            }
            output: UploadShareList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                filter?: string | undefined
                sort?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                filter?: string | undefined
                sort?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                filter?: string | undefined
                sort?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 406
          }
        | {
            input: {
              query: {
                filter?: string | undefined
                sort?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 412
          }
      $post:
        | {
            input: {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            } & { json: CreateUploadShareRequest }
            output: UploadShare
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            } & { json: CreateUploadShareRequest }
            output: ErrorResponse | PasswordPolicyViolationResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            } & { json: CreateUploadShareRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            } & { json: CreateUploadShareRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            } & { json: CreateUploadShareRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            } & { json: CreateUploadShareRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 406
          }
        | {
            input: {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            } & { json: CreateUploadShareRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 412
          }
        | {
            input: {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            } & { json: CreateUploadShareRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 502
          }
      $put:
        | {
            input: {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            } & { json: UpdateUploadSharesBulkRequest }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            } & { json: UpdateUploadSharesBulkRequest }
            output: ErrorResponse | PasswordPolicyViolationResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            } & { json: UpdateUploadSharesBulkRequest }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            } & { json: UpdateUploadSharesBulkRequest }
            output: ErrorResponse
            outputFormat: 'text'
            status: 403
          }
        | {
            input: {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            } & { json: UpdateUploadSharesBulkRequest }
            output: ErrorResponse
            outputFormat: 'text'
            status: 404
          }
        | {
            input: {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            } & { json: UpdateUploadSharesBulkRequest }
            output: ErrorResponse
            outputFormat: 'text'
            status: 406
          }
        | {
            input: {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            } & { json: UpdateUploadSharesBulkRequest }
            output: ErrorResponse
            outputFormat: 'text'
            status: 412
          }
        | {
            input: {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            } & { json: UpdateUploadSharesBulkRequest }
            output: ErrorResponse
            outputFormat: 'text'
            status: 502
          }
    }
  } & {
    '/v4/shares/uploads/:share_id': {
      $delete:
        | {
            input: { param: { share_id: bigint } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { share_id: bigint } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { share_id: bigint } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { share_id: bigint } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { share_id: bigint } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { share_id: bigint } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { share_id: bigint } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 412
          }
      $get:
        | {
            input: { param: { share_id: bigint } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            }
            output: UploadShare
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { share_id: bigint } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { share_id: bigint } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { share_id: bigint } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { share_id: bigint } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { share_id: bigint } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { share_id: bigint } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 412
          }
      $put:
        | {
            input: { param: { share_id: bigint } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            } & { json: UpdateUploadShareRequest }
            output: UploadShare
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { share_id: bigint } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            } & { json: UpdateUploadShareRequest }
            output: ErrorResponse | PasswordPolicyViolationResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { share_id: bigint } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            } & { json: UpdateUploadShareRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { share_id: bigint } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            } & { json: UpdateUploadShareRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { share_id: bigint } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            } & { json: UpdateUploadShareRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { share_id: bigint } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            } & { json: UpdateUploadShareRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { share_id: bigint } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            } & { json: UpdateUploadShareRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 412
          }
        | {
            input: { param: { share_id: bigint } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            } & { json: UpdateUploadShareRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 502
          }
    }
  } & {
    '/v4/shares/uploads/:share_id/email': {
      $post:
        | {
            input: { param: { share_id: bigint } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            } & { json: UploadShareLinkEmail }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { share_id: bigint } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            } & { json: UploadShareLinkEmail }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { share_id: bigint } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            } & { json: UploadShareLinkEmail }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { share_id: bigint } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            } & { json: UploadShareLinkEmail }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { share_id: bigint } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            } & { json: UploadShareLinkEmail }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { share_id: bigint } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            } & { json: UploadShareLinkEmail }
            output: ErrorResponse
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { share_id: bigint } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            } & { json: UploadShareLinkEmail }
            output: ErrorResponse
            outputFormat: 'json'
            status: 412
          }
    }
  } & {
    '/v4/shares/uploads/:share_id/qr': {
      $get:
        | {
            input: { param: { share_id: bigint } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            }
            output: UploadShare
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { share_id: bigint } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { share_id: bigint } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { share_id: bigint } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { share_id: bigint } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { share_id: bigint } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { share_id: bigint } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 412
          }
    }
  } & {
    '/v4/system/config/actions/test/ad': {
      $post:
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: TestActiveDirectoryConfigRequest
            }
            output: TestActiveDirectoryConfigResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: TestActiveDirectoryConfigRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: TestActiveDirectoryConfigRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: TestActiveDirectoryConfigRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: TestActiveDirectoryConfigRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: TestActiveDirectoryConfigRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: TestActiveDirectoryConfigRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 412
          }
    }
  } & {
    '/v4/system/config/actions/test/radius': {
      $post:
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 412
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 502
          }
    }
  } & {
    '/v4/system/config/auth/ads': {
      $get:
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: ActiveDirectoryConfigList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 412
          }
      $post:
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: CreateActiveDirectoryConfigRequest
            }
            output: ActiveDirectoryConfig
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: CreateActiveDirectoryConfigRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: CreateActiveDirectoryConfigRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: CreateActiveDirectoryConfigRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: CreateActiveDirectoryConfigRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: CreateActiveDirectoryConfigRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: CreateActiveDirectoryConfigRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: CreateActiveDirectoryConfigRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 412
          }
    }
  } & {
    '/v4/system/config/auth/ads/:ad_id': {
      $delete:
        | {
            input: { param: { ad_id: number } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { ad_id: number } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { ad_id: number } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { ad_id: number } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { ad_id: number } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { ad_id: number } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { ad_id: number } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { ad_id: number } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 412
          }
      $get:
        | {
            input: { param: { ad_id: number } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ActiveDirectoryConfig
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ad_id: number } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { ad_id: number } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { ad_id: number } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { ad_id: number } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { ad_id: number } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { ad_id: number } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 412
          }
      $put:
        | {
            input: { param: { ad_id: number } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            } & { json: UpdateActiveDirectoryConfigRequest }
            output: ActiveDirectoryConfig
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ad_id: number } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            } & { json: UpdateActiveDirectoryConfigRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { ad_id: number } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            } & { json: UpdateActiveDirectoryConfigRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { ad_id: number } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            } & { json: UpdateActiveDirectoryConfigRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { ad_id: number } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            } & { json: UpdateActiveDirectoryConfigRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { ad_id: number } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            } & { json: UpdateActiveDirectoryConfigRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { ad_id: number } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            } & { json: UpdateActiveDirectoryConfigRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { ad_id: number } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            } & { json: UpdateActiveDirectoryConfigRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 412
          }
    }
  } & {
    '/v4/system/config/auth/openid/idps': {
      $get:
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: OpenIdIdpConfig[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 412
          }
      $post:
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: CreateOpenIdIdpConfigRequest
            }
            output: OpenIdIdpConfig
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: CreateOpenIdIdpConfigRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: CreateOpenIdIdpConfigRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: CreateOpenIdIdpConfigRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: CreateOpenIdIdpConfigRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: CreateOpenIdIdpConfigRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: CreateOpenIdIdpConfigRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: CreateOpenIdIdpConfigRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 412
          }
    }
  } & {
    '/v4/system/config/auth/openid/idps/:idp_id': {
      $delete:
        | {
            input: { param: { idp_id: number } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { idp_id: number } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { idp_id: number } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { idp_id: number } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { idp_id: number } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { idp_id: number } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { idp_id: number } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { idp_id: number } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 412
          }
      $get:
        | {
            input: { param: { idp_id: number } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: OpenIdIdpConfig
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { idp_id: number } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { idp_id: number } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { idp_id: number } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { idp_id: number } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { idp_id: number } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { idp_id: number } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 412
          }
      $put:
        | {
            input: { param: { idp_id: number } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            } & { json: UpdateOpenIdIdpConfigRequest }
            output: OpenIdIdpConfig
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { idp_id: number } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            } & { json: UpdateOpenIdIdpConfigRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { idp_id: number } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            } & { json: UpdateOpenIdIdpConfigRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { idp_id: number } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            } & { json: UpdateOpenIdIdpConfigRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { idp_id: number } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            } & { json: UpdateOpenIdIdpConfigRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { idp_id: number } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            } & { json: UpdateOpenIdIdpConfigRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { idp_id: number } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            } & { json: UpdateOpenIdIdpConfigRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { idp_id: number } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            } & { json: UpdateOpenIdIdpConfigRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 412
          }
    }
  } & {
    '/v4/system/config/auth/radius': {
      $delete:
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 412
          }
      $get:
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: RadiusConfig
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 412
          }
      $post:
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: RadiusConfigCreateRequest
            }
            output: RadiusConfig
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: RadiusConfigCreateRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: RadiusConfigCreateRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: RadiusConfigCreateRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: RadiusConfigCreateRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: RadiusConfigCreateRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: RadiusConfigCreateRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 412
          }
      $put:
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: RadiusConfigUpdateRequest
            }
            output: RadiusConfig
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: RadiusConfigUpdateRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: RadiusConfigUpdateRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: RadiusConfigUpdateRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: RadiusConfigUpdateRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: RadiusConfigUpdateRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: RadiusConfigUpdateRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 412
          }
    }
  } & {
    '/v4/system/config/oauth/clients': {
      $get:
        | {
            input: { query: { filter?: string | undefined; sort?: string | undefined } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: OAuthClient[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { filter?: string | undefined; sort?: string | undefined } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { filter?: string | undefined; sort?: string | undefined } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { filter?: string | undefined; sort?: string | undefined } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { query: { filter?: string | undefined; sort?: string | undefined } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 412
          }
      $post:
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: CreateOAuthClientRequest
            }
            output: OAuthClient
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: CreateOAuthClientRequest
            }
            output: ErrorResponse | PasswordPolicyViolationResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: CreateOAuthClientRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: CreateOAuthClientRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: CreateOAuthClientRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: CreateOAuthClientRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: CreateOAuthClientRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 412
          }
    }
  } & {
    '/v4/system/config/oauth/clients/:client_id': {
      $delete:
        | {
            input: { param: { client_id: string } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { client_id: string } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { client_id: string } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { client_id: string } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { client_id: string } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { client_id: string } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { client_id: string } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 412
          }
      $get:
        | {
            input: { param: { client_id: string } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: OAuthClient
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { client_id: string } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { client_id: string } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { client_id: string } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { client_id: string } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { client_id: string } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { client_id: string } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 412
          }
      $put:
        | {
            input: { param: { client_id: string } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            } & { json: UpdateOAuthClientRequest }
            output: OAuthClient
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { client_id: string } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            } & { json: UpdateOAuthClientRequest }
            output: ErrorResponse | PasswordPolicyViolationResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { client_id: string } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            } & { json: UpdateOAuthClientRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { client_id: string } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            } & { json: UpdateOAuthClientRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { client_id: string } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            } & { json: UpdateOAuthClientRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { client_id: string } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            } & { json: UpdateOAuthClientRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { client_id: string } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            } & { json: UpdateOAuthClientRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 412
          }
    }
  } & {
    '/v4/system/config/policies/classifications': {
      $get:
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: ClassificationPoliciesConfig
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 412
          }
      $put:
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: UpdateClassificationPoliciesConfig
            }
            output: ClassificationPoliciesConfig
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: UpdateClassificationPoliciesConfig
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: UpdateClassificationPoliciesConfig
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: UpdateClassificationPoliciesConfig
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: UpdateClassificationPoliciesConfig
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: UpdateClassificationPoliciesConfig
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 412
          }
    }
  } & {
    '/v4/system/config/policies/guest_users': {
      $get:
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: GuestUsersPoliciesConfig
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 412
          }
      $put:
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: UpdateGuestUsersPoliciesConfig
            }
            output: GuestUsersPoliciesConfig
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: UpdateGuestUsersPoliciesConfig
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: UpdateGuestUsersPoliciesConfig
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: UpdateGuestUsersPoliciesConfig
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: UpdateGuestUsersPoliciesConfig
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: UpdateGuestUsersPoliciesConfig
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 412
          }
    }
  } & {
    '/v4/system/config/policies/mfa': {
      $get:
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: MfaPoliciesConfig
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 412
          }
      $put:
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: UpdateMfaPoliciesConfig
            }
            output: MfaPoliciesConfig
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: UpdateMfaPoliciesConfig
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: UpdateMfaPoliciesConfig
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: UpdateMfaPoliciesConfig
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: UpdateMfaPoliciesConfig
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: UpdateMfaPoliciesConfig
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: UpdateMfaPoliciesConfig
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 412
          }
    }
  } & {
    '/v4/system/config/policies/passwords': {
      $get:
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: PasswordPoliciesConfig
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 412
          }
      $put:
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: UpdatePasswordPoliciesConfig
            }
            output: PasswordPoliciesConfig
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: UpdatePasswordPoliciesConfig
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: UpdatePasswordPoliciesConfig
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: UpdatePasswordPoliciesConfig
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: UpdatePasswordPoliciesConfig
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: UpdatePasswordPoliciesConfig
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 412
          }
    }
  } & {
    '/v4/system/config/policies/passwords/enforce_change': {
      $post:
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 412
          }
    }
  } & {
    '/v4/system/config/policies/passwords/:password_type': {
      $get:
        | {
            input: { param: { password_type: 'login' | 'encryption' | 'shares' } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: PasswordPoliciesConfig
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { password_type: 'login' | 'encryption' | 'shares' } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { password_type: 'login' | 'encryption' | 'shares' } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { password_type: 'login' | 'encryption' | 'shares' } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { password_type: 'login' | 'encryption' | 'shares' } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { password_type: 'login' | 'encryption' | 'shares' } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 412
          }
    }
  } & {
    '/v4/system/config/settings/auth': {
      $get:
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: AuthConfig
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 412
          }
      $put:
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & { json: AuthConfig }
            output: AuthConfig
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & { json: AuthConfig }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & { json: AuthConfig }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & { json: AuthConfig }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & { json: AuthConfig }
            output: ErrorResponse
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & { json: AuthConfig }
            output: ErrorResponse
            outputFormat: 'json'
            status: 412
          }
    }
  } & {
    '/v4/system/config/settings/defaults': {
      $get:
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: SystemDefaults
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 412
          }
      $put:
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: UpdateSystemDefaults
            }
            output: SystemDefaults
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: UpdateSystemDefaults
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: UpdateSystemDefaults
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: UpdateSystemDefaults
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: UpdateSystemDefaults
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: UpdateSystemDefaults
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 412
          }
    }
  } & {
    '/v4/system/config/settings/eventlog': {
      $get:
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: EventlogConfig
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 412
          }
      $put:
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: UpdateEventlogConfig
            }
            output: EventlogConfig
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: UpdateEventlogConfig
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: UpdateEventlogConfig
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: UpdateEventlogConfig
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: UpdateEventlogConfig
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: UpdateEventlogConfig
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 412
          }
    }
  } & {
    '/v4/system/config/settings/general': {
      $get:
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: GeneralSettings
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 412
          }
      $put:
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: UpdateGeneralSettings
            }
            output: GeneralSettings
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: UpdateGeneralSettings
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: UpdateGeneralSettings
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: UpdateGeneralSettings
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: UpdateGeneralSettings
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: UpdateGeneralSettings
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: UpdateGeneralSettings
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 412
          }
    }
  } & {
    '/v4/system/config/settings/infrastructure': {
      $get:
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: InfrastructureProperties
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 412
          }
    }
  } & {
    '/v4/system/config/settings/syslog': {
      $get:
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: SyslogConfig
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 412
          }
      $put:
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: UpdateSyslogConfig
            }
            output: SyslogConfig
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: UpdateSyslogConfig
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: UpdateSyslogConfig
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: UpdateSyslogConfig
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: UpdateSyslogConfig
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: UpdateSyslogConfig
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 412
          }
    }
  } & {
    '/v4/system/config/storage/s3': {
      $get:
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: S3Config
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 412
          }
      $post:
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: S3ConfigCreateRequest
            }
            output: S3Config
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: S3ConfigCreateRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: S3ConfigCreateRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: S3ConfigCreateRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: S3ConfigCreateRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: S3ConfigCreateRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 412
          }
      $put:
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: S3ConfigUpdateRequest
            }
            output: S3Config
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: S3ConfigUpdateRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: S3ConfigUpdateRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: S3ConfigUpdateRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: S3ConfigUpdateRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: S3ConfigUpdateRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: S3ConfigUpdateRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 412
          }
    }
  } & {
    '/v4/system/config/storage/s3/tags': {
      $get:
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: S3TagList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 412
          }
      $post:
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: S3TagCreateRequest
            }
            output: S3Tag
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: S3TagCreateRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: S3TagCreateRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: S3TagCreateRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: S3TagCreateRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: S3TagCreateRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: S3TagCreateRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 412
          }
    }
  } & {
    '/v4/system/config/storage/s3/tags/:id': {
      $delete:
        | {
            input: { param: { id: bigint } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { id: bigint } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: bigint } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: bigint } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: bigint } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: bigint } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { id: bigint } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 412
          }
      $get:
        | {
            input: { param: { id: bigint } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: S3Tag
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: bigint } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: bigint } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: bigint } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: bigint } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: bigint } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { id: bigint } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 412
          }
    }
  } & {
    '/v4/uploads/:token': {
      $delete:
        | { input: { param: { token: string } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { token: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { token: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { token: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { token: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { token: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { token: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 507
          }
      $post:
        | {
            input: { param: { token: string } } & {
              header: { 'Content-Range'?: string | undefined }
            } & { form: { file: File } }
            output: ChunkUploadResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { token: string } } & {
              header: { 'Content-Range'?: string | undefined }
            } & { form: { file: File } }
            output: ChunkUploadResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { token: string } } & {
              header: { 'Content-Range'?: string | undefined }
            } & { form: { file: File } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { token: string } } & {
              header: { 'Content-Range'?: string | undefined }
            } & { form: { file: File } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { token: string } } & {
              header: { 'Content-Range'?: string | undefined }
            } & { form: { file: File } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { token: string } } & {
              header: { 'Content-Range'?: string | undefined }
            } & { form: { file: File } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { token: string } } & {
              header: { 'Content-Range'?: string | undefined }
            } & { form: { file: File } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { token: string } } & {
              header: { 'Content-Range'?: string | undefined }
            } & { form: { file: File } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 507
          }
      $put:
        | {
            input: { param: { token: string } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
              }
            } & { json: CompleteUploadRequest }
            output: Node
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { token: string } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
              }
            } & { json: CompleteUploadRequest }
            output: Node
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { token: string } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
              }
            } & { json: CompleteUploadRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { token: string } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
              }
            } & { json: CompleteUploadRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { token: string } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
              }
            } & { json: CompleteUploadRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { token: string } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
              }
            } & { json: CompleteUploadRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { token: string } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
              }
            } & { json: CompleteUploadRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { token: string } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
              }
            } & { json: CompleteUploadRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { token: string } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
              }
            } & { json: CompleteUploadRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 507
          }
    }
  } & {
    '/v4/user/account': {
      $get:
        | {
            input: { query: { more_info?: boolean | undefined } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            }
            output: UserAccount
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { more_info?: boolean | undefined } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { more_info?: boolean | undefined } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 406
          }
      $put:
        | {
            input: {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            } & { json: UpdateUserAccountRequest }
            output: UserAccount
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            } & { json: UpdateUserAccountRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            } & { json: UpdateUserAccountRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            } & { json: UpdateUserAccountRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            } & { json: UpdateUserAccountRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 406
          }
        | {
            input: {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            } & { json: UpdateUserAccountRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 409
          }
        | {
            input: {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            } & { json: UpdateUserAccountRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 412
          }
    }
  } & {
    '/v4/user/account/avatar': {
      $delete:
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: Avatar
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 412
          }
      $get:
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: Avatar
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 412
          }
      $post:
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              form: { file: File }
            }
            output: Avatar
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              form: { file: File }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              form: { file: File }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              form: { file: File }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              form: { file: File }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 412
          }
    }
  } & {
    '/v4/user/account/customer': {
      $get:
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: CustomerData
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 412
          }
      $put:
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: EnableCustomerEncryptionRequest
            }
            output: CustomerData
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: EnableCustomerEncryptionRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: EnableCustomerEncryptionRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: EnableCustomerEncryptionRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: EnableCustomerEncryptionRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: EnableCustomerEncryptionRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 412
          }
    }
  } & {
    '/v4/user/account/customer/keypair': {
      $get:
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: UserKeyPairContainer
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 412
          }
    }
  } & {
    '/v4/user/account/keypair': {
      $delete:
        | {
            input: { query: { version?: string | undefined } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { query: { version?: string | undefined } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { version?: string | undefined } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { version?: string | undefined } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { query: { version?: string | undefined } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { query: { version?: string | undefined } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 412
          }
      $get:
        | {
            input: { query: { version?: string | undefined } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            }
            output: UserKeyPairContainer
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { version?: string | undefined } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { version?: string | undefined } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { version?: string | undefined } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { query: { version?: string | undefined } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { query: { version?: string | undefined } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 412
          }
      $post:
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: UserKeyPairContainer
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: UserKeyPairContainer
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: UserKeyPairContainer
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: UserKeyPairContainer
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: UserKeyPairContainer
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: UserKeyPairContainer
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 412
          }
    }
  } & {
    '/v4/user/account/keypairs': {
      $get:
        | {
            input: {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            }
            output: UserKeyPairContainer[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 406
          }
        | {
            input: {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 412
          }
      $post:
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: CreateKeyPairRequest
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: CreateKeyPairRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: CreateKeyPairRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: CreateKeyPairRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: CreateKeyPairRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: CreateKeyPairRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 412
          }
    }
  } & {
    '/v4/user/account/mfa': {
      $delete:
        | {
            input: { query: { emergency_code: string } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { query: { emergency_code: string } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { query: { emergency_code: string } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { emergency_code: string } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { emergency_code: string } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { query: { emergency_code: string } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 412
          }
      $get:
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: UserMfaStatusResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 412
          }
    }
  } & {
    '/v4/user/account/mfa/totp': {
      $get:
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: TotpSetupResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 412
          }
      $post:
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: MfaTotpConfirmationRequest
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: MfaTotpConfirmationRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: MfaTotpConfirmationRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: MfaTotpConfirmationRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: MfaTotpConfirmationRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: MfaTotpConfirmationRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 412
          }
    }
  } & {
    '/v4/user/account/mfa/totp/:id': {
      $delete:
        | {
            input: { param: { id: bigint } } & { query: { valid_otp: string } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { id: bigint } } & { query: { valid_otp: string } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: bigint } } & { query: { valid_otp: string } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: bigint } } & { query: { valid_otp: string } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { id: bigint } } & { query: { valid_otp: string } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 412
          }
    }
  } & {
    '/v4/user/account/password': {
      $put:
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: ChangeUserPasswordRequest
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: ChangeUserPasswordRequest
            }
            output: ErrorResponse | PasswordPolicyViolationResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: ChangeUserPasswordRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: ChangeUserPasswordRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 406
          }
    }
  } & {
    '/v4/user/logout': {
      $post:
        | {
            input: { query: { everywhere?: boolean | undefined } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { query: { everywhere?: boolean | undefined } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { everywhere?: boolean | undefined } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { query: { everywhere?: boolean | undefined } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 412
          }
    }
  } & {
    '/v4/user/notifications/config': {
      $get:
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: NotificationConfigList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 412
          }
    }
  } & {
    '/v4/user/notifications/config/:id': {
      $put:
        | {
            input: { param: { id: bigint } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            } & { json: NotificationConfigChangeRequest }
            output: NotificationConfig
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: bigint } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            } & { json: NotificationConfigChangeRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: bigint } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            } & { json: NotificationConfigChangeRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: bigint } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            } & { json: NotificationConfigChangeRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { id: bigint } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            } & { json: NotificationConfigChangeRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 412
          }
    }
  } & {
    '/v4/user/oauth/approvals': {
      $get:
        | {
            input: { query: { sort?: string | undefined } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            }
            output: OAuthApproval[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { sort?: string | undefined } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { sort?: string | undefined } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { query: { sort?: string | undefined } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 412
          }
    }
  } & {
    '/v4/user/oauth/approvals/:client_id': {
      $delete:
        | {
            input: { param: { client_id: string } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { client_id: string } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { client_id: string } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { client_id: string } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { client_id: string } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 412
          }
    }
  } & {
    '/v4/user/oauth/authorizations': {
      $get:
        | {
            input: { query: { filter?: string | undefined; sort?: string | undefined } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            }
            output: OAuthAuthorization[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { filter?: string | undefined; sort?: string | undefined } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { filter?: string | undefined; sort?: string | undefined } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { query: { filter?: string | undefined; sort?: string | undefined } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 412
          }
    }
  } & {
    '/v4/user/oauth/authorizations/:client_id': {
      $delete:
        | {
            input: { param: { client_id: string } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { client_id: string } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { client_id: string } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { client_id: string } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { client_id: string } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 412
          }
    }
  } & {
    '/v4/user/oauth/authorizations/:client_id/:authorization_id': {
      $delete:
        | {
            input: { param: { client_id: string; authorization_id: bigint } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { client_id: string; authorization_id: bigint } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { client_id: string; authorization_id: bigint } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { client_id: string; authorization_id: bigint } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { client_id: string; authorization_id: bigint } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 412
          }
    }
  } & {
    '/v4/user/ping': {
      $get:
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 406
          }
    }
  } & {
    '/v4/user/profileAttributes': {
      $get:
        | {
            input: {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                filter?: string | undefined
                sort?: string | undefined
              }
            } & { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: AttributesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                filter?: string | undefined
                sort?: string | undefined
              }
            } & { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                filter?: string | undefined
                sort?: string | undefined
              }
            } & { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 406
          }
        | {
            input: {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                filter?: string | undefined
                sort?: string | undefined
              }
            } & { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 412
          }
      $post:
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: ProfileAttributesRequest
            }
            output: ProfileAttributes
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: ProfileAttributesRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: ProfileAttributesRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: ProfileAttributesRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: ProfileAttributesRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 412
          }
      $put:
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: ProfileAttributesRequest
            }
            output: ProfileAttributes
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: ProfileAttributesRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: ProfileAttributesRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: ProfileAttributesRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: ProfileAttributesRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 412
          }
    }
  } & {
    '/v4/user/profileAttributes/:key': {
      $delete:
        | {
            input: { param: { key: string } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { key: string } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { key: string } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { key: string } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { key: string } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { key: string } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 412
          }
    }
  } & {
    '/v4/user/subscriptions/download_shares': {
      $get:
        | {
            input: {
              query: {
                filter?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
                sort?: string | undefined
              }
            } & { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: SubscribedDownloadShareList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                filter?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
                sort?: string | undefined
              }
            } & { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                filter?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
                sort?: string | undefined
              }
            } & { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                filter?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
                sort?: string | undefined
              }
            } & { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 406
          }
        | {
            input: {
              query: {
                filter?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
                sort?: string | undefined
              }
            } & { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 412
          }
      $put:
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: UpdateSubscriptionsBulkRequest
            }
            output: {}
            outputFormat: string
            status: 201
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: UpdateSubscriptionsBulkRequest
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: UpdateSubscriptionsBulkRequest
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: UpdateSubscriptionsBulkRequest
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: UpdateSubscriptionsBulkRequest
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: UpdateSubscriptionsBulkRequest
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: UpdateSubscriptionsBulkRequest
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 406
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: UpdateSubscriptionsBulkRequest
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 412
          }
    }
  } & {
    '/v4/user/subscriptions/download_shares/:share_id': {
      $delete:
        | {
            input: { param: { share_id: bigint } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { share_id: bigint } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { share_id: bigint } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { share_id: bigint } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { share_id: bigint } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { share_id: bigint } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { share_id: bigint } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 412
          }
      $post:
        | {
            input: { param: { share_id: bigint } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: SubscribedDownloadShare
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { share_id: bigint } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { share_id: bigint } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { share_id: bigint } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { share_id: bigint } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { share_id: bigint } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { share_id: bigint } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 412
          }
    }
  } & {
    '/v4/user/subscriptions/nodes': {
      $get:
        | {
            input: {
              query: {
                filter?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
                sort?: string | undefined
              }
            } & { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: SubscribedNodeList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                filter?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
                sort?: string | undefined
              }
            } & { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                filter?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
                sort?: string | undefined
              }
            } & { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                filter?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
                sort?: string | undefined
              }
            } & { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 406
          }
        | {
            input: {
              query: {
                filter?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
                sort?: string | undefined
              }
            } & { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 412
          }
      $put:
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: UpdateSubscriptionsBulkRequest
            }
            output: {}
            outputFormat: string
            status: 201
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: UpdateSubscriptionsBulkRequest
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: UpdateSubscriptionsBulkRequest
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: UpdateSubscriptionsBulkRequest
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: UpdateSubscriptionsBulkRequest
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: UpdateSubscriptionsBulkRequest
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: UpdateSubscriptionsBulkRequest
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 406
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: UpdateSubscriptionsBulkRequest
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 412
          }
    }
  } & {
    '/v4/user/subscriptions/nodes/:node_id': {
      $delete:
        | {
            input: { param: { node_id: bigint } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { node_id: bigint } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { node_id: bigint } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { node_id: bigint } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { node_id: bigint } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { node_id: bigint } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { node_id: bigint } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 412
          }
      $post:
        | {
            input: { param: { node_id: bigint } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: SubscribedNode
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { node_id: bigint } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { node_id: bigint } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { node_id: bigint } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { node_id: bigint } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { node_id: bigint } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { node_id: bigint } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 412
          }
    }
  } & {
    '/v4/user/subscriptions/upload_shares': {
      $get:
        | {
            input: {
              query: {
                filter?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
                sort?: string | undefined
              }
            } & { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: SubscribedUploadShareList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                filter?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
                sort?: string | undefined
              }
            } & { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                filter?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
                sort?: string | undefined
              }
            } & { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                filter?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
                sort?: string | undefined
              }
            } & { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 406
          }
        | {
            input: {
              query: {
                filter?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
                sort?: string | undefined
              }
            } & { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 412
          }
      $put:
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: UpdateSubscriptionsBulkRequest
            }
            output: {}
            outputFormat: string
            status: 201
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: UpdateSubscriptionsBulkRequest
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: UpdateSubscriptionsBulkRequest
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: UpdateSubscriptionsBulkRequest
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: UpdateSubscriptionsBulkRequest
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: UpdateSubscriptionsBulkRequest
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: UpdateSubscriptionsBulkRequest
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 406
          }
        | {
            input: { header: { 'X-Sds-Auth-Token'?: string | undefined } } & {
              json: UpdateSubscriptionsBulkRequest
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 412
          }
    }
  } & {
    '/v4/user/subscriptions/upload_shares/:share_id': {
      $delete:
        | {
            input: { param: { share_id: bigint } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { share_id: bigint } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { share_id: bigint } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { share_id: bigint } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { share_id: bigint } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { share_id: bigint } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { share_id: bigint } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 412
          }
      $post:
        | {
            input: { param: { share_id: bigint } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: SubscribedUploadShare
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { share_id: bigint } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { share_id: bigint } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { share_id: bigint } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { share_id: bigint } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { share_id: bigint } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { share_id: bigint } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 412
          }
    }
  } & {
    '/v4/users': {
      $get:
        | {
            input: {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                filter?: string | undefined
                sort?: string | undefined
                include_attributes?: boolean | undefined
                include_roles?: boolean | undefined
                include_manageable_rooms?: boolean | undefined
              }
            } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            }
            output: UserList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                filter?: string | undefined
                sort?: string | undefined
                include_attributes?: boolean | undefined
                include_roles?: boolean | undefined
                include_manageable_rooms?: boolean | undefined
              }
            } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                filter?: string | undefined
                sort?: string | undefined
                include_attributes?: boolean | undefined
                include_roles?: boolean | undefined
                include_manageable_rooms?: boolean | undefined
              }
            } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                filter?: string | undefined
                sort?: string | undefined
                include_attributes?: boolean | undefined
                include_roles?: boolean | undefined
                include_manageable_rooms?: boolean | undefined
              }
            } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                filter?: string | undefined
                sort?: string | undefined
                include_attributes?: boolean | undefined
                include_roles?: boolean | undefined
                include_manageable_rooms?: boolean | undefined
              }
            } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 406
          }
        | {
            input: {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                filter?: string | undefined
                sort?: string | undefined
                include_attributes?: boolean | undefined
                include_roles?: boolean | undefined
                include_manageable_rooms?: boolean | undefined
              }
            } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 412
          }
      $post:
        | {
            input: {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            } & { json: CreateUserRequest }
            output: UserData
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            } & { json: CreateUserRequest }
            output: ErrorResponse | PasswordPolicyViolationResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            } & { json: CreateUserRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            } & { json: CreateUserRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            } & { json: CreateUserRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            } & { json: CreateUserRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 406
          }
        | {
            input: {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            } & { json: CreateUserRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 409
          }
        | {
            input: {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            } & { json: CreateUserRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 412
          }
    }
  } & {
    '/v4/users/:user_id': {
      $delete:
        | {
            input: { param: { user_id: bigint } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { user_id: bigint } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { user_id: bigint } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { user_id: bigint } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { user_id: bigint } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { user_id: bigint } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { user_id: bigint } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 412
          }
      $get:
        | {
            input: { param: { user_id: bigint } } & {
              query: { effective_roles?: boolean | undefined }
            } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            }
            output: UserData
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { user_id: bigint } } & {
              query: { effective_roles?: boolean | undefined }
            } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { user_id: bigint } } & {
              query: { effective_roles?: boolean | undefined }
            } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { user_id: bigint } } & {
              query: { effective_roles?: boolean | undefined }
            } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { user_id: bigint } } & {
              query: { effective_roles?: boolean | undefined }
            } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { user_id: bigint } } & {
              query: { effective_roles?: boolean | undefined }
            } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { user_id: bigint } } & {
              query: { effective_roles?: boolean | undefined }
            } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 412
          }
      $put:
        | {
            input: { param: { user_id: bigint } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            } & { json: UpdateUserRequest }
            output: UserData
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { user_id: bigint } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            } & { json: UpdateUserRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { user_id: bigint } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            } & { json: UpdateUserRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { user_id: bigint } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            } & { json: UpdateUserRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { user_id: bigint } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            } & { json: UpdateUserRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { user_id: bigint } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            } & { json: UpdateUserRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { user_id: bigint } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            } & { json: UpdateUserRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { user_id: bigint } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            } & { json: UpdateUserRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { user_id: bigint } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            } & { json: UpdateUserRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 412
          }
    }
  } & {
    '/v4/users/:user_id/groups': {
      $get:
        | {
            input: { param: { user_id: bigint } } & {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                filter?: string | undefined
              }
            } & { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: UserGroupList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { user_id: bigint } } & {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                filter?: string | undefined
              }
            } & { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { user_id: bigint } } & {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                filter?: string | undefined
              }
            } & { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { user_id: bigint } } & {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                filter?: string | undefined
              }
            } & { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { user_id: bigint } } & {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                filter?: string | undefined
              }
            } & { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { user_id: bigint } } & {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                filter?: string | undefined
              }
            } & { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { user_id: bigint } } & {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                filter?: string | undefined
              }
            } & { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 412
          }
    }
  } & {
    '/v4/users/:user_id/last_admin_rooms': {
      $get:
        | {
            input: { param: { user_id: bigint } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: LastAdminUserRoomList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { user_id: bigint } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { user_id: bigint } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { user_id: bigint } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { user_id: bigint } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { user_id: bigint } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { user_id: bigint } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 412
          }
    }
  } & {
    '/v4/users/:user_id/mfa/emergency_code': {
      $post:
        | {
            input: { param: { user_id: bigint } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: EmergencyMfaCodeResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { user_id: bigint } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { user_id: bigint } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { user_id: bigint } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { user_id: bigint } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { user_id: bigint } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { user_id: bigint } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 412
          }
    }
  } & {
    '/v4/users/:user_id/roles': {
      $get:
        | {
            input: { param: { user_id: bigint } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: RoleList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { user_id: bigint } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { user_id: bigint } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { user_id: bigint } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { user_id: bigint } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { user_id: bigint } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { user_id: bigint } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 412
          }
    }
  } & {
    '/v4/users/:user_id/rooms': {
      $get:
        | {
            input: { param: { user_id: bigint } } & {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                filter?: string | undefined
              }
            } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            }
            output: RoomTreeDataList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { user_id: bigint } } & {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                filter?: string | undefined
              }
            } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { user_id: bigint } } & {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                filter?: string | undefined
              }
            } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { user_id: bigint } } & {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                filter?: string | undefined
              }
            } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { user_id: bigint } } & {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                filter?: string | undefined
              }
            } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { user_id: bigint } } & {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                filter?: string | undefined
              }
            } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { user_id: bigint } } & {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                filter?: string | undefined
              }
            } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 412
          }
    }
  } & {
    '/v4/users/:user_id/userAttributes': {
      $get:
        | {
            input: { param: { user_id: bigint } } & {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                filter?: string | undefined
                sort?: string | undefined
              }
            } & { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: AttributesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { user_id: bigint } } & {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                filter?: string | undefined
                sort?: string | undefined
              }
            } & { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { user_id: bigint } } & {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                filter?: string | undefined
                sort?: string | undefined
              }
            } & { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { user_id: bigint } } & {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                filter?: string | undefined
                sort?: string | undefined
              }
            } & { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { user_id: bigint } } & {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                filter?: string | undefined
                sort?: string | undefined
              }
            } & { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { user_id: bigint } } & {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                filter?: string | undefined
                sort?: string | undefined
              }
            } & { header: { 'X-Sds-Auth-Token'?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 412
          }
      $post:
        | {
            input: { param: { user_id: bigint } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            } & { json: UserAttributes }
            output: UserData
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { user_id: bigint } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            } & { json: UserAttributes }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { user_id: bigint } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            } & { json: UserAttributes }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { user_id: bigint } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            } & { json: UserAttributes }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { user_id: bigint } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            } & { json: UserAttributes }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { user_id: bigint } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            } & { json: UserAttributes }
            output: ErrorResponse
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { user_id: bigint } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            } & { json: UserAttributes }
            output: ErrorResponse
            outputFormat: 'json'
            status: 412
          }
      $put:
        | {
            input: { param: { user_id: bigint } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            } & { json: UserAttributes }
            output: UserData
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { user_id: bigint } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            } & { json: UserAttributes }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { user_id: bigint } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            } & { json: UserAttributes }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { user_id: bigint } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            } & { json: UserAttributes }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { user_id: bigint } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            } & { json: UserAttributes }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { user_id: bigint } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            } & { json: UserAttributes }
            output: ErrorResponse
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { user_id: bigint } } & {
              header: {
                'X-Sds-Date-Format'?: 'UTC' | 'LOCAL' | 'OFFSET' | 'EPOCH' | 'LEET' | undefined
                'X-Sds-Auth-Token'?: string | undefined
              }
            } & { json: UserAttributes }
            output: ErrorResponse
            outputFormat: 'json'
            status: 412
          }
    }
  } & {
    '/v4/users/:user_id/userAttributes/:key': {
      $delete:
        | {
            input: { param: { user_id: bigint; key: string } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { user_id: bigint; key: string } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { user_id: bigint; key: string } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { user_id: bigint; key: string } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { user_id: bigint; key: string } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { user_id: bigint; key: string } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { user_id: bigint; key: string } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { user_id: bigint; key: string } } & {
              header: { 'X-Sds-Auth-Token'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 412
          }
    }
  },
  '/'
>
export default routes
