type BrandingSettings = {
  companyName?: string | undefined
  customEmail?: string | undefined
  logo?: string | undefined
  logoExt?: string | undefined
  theme?: string | undefined
  verifiedDomain?: string | undefined
  verifiedDomainId?: string | undefined
  verifiedDomainValid?: boolean | undefined
}
type PlanDetails = {
  apiKeys?: number | undefined
  apiTokens?: number | undefined
  colorSchema?: boolean | undefined
  customDomain?: boolean | undefined
  customName?: boolean | undefined
  directLinks?: boolean | undefined
  ipWhitelist?: boolean | undefined
  sharingOptions?: string[] | undefined
  sshKeys?: number | undefined
  storageAddOn?: number | undefined
  unlimitedUsers?: boolean | undefined
  userExpiration?: boolean | undefined
  userImport?: boolean | undefined
  webhookOptions?:
    | {
        amount?: number | undefined
        includeTriggers?: string | undefined
        restrictionTypes?: string[] | undefined
      }
    | undefined
}
type Quota = {
  bandwidthLimit?: bigint | undefined
  bandwidthUsed?: bigint | undefined
  diskLimit?: bigint | undefined
  diskUsed?: bigint | undefined
  noticeEnabled?: boolean | undefined
  noticeThreshold?: number | undefined
  transactionsLimit?: number | undefined
  transactionsNoticeEnabled?: boolean | undefined
  transactionsNoticeThreshold?: number | undefined
}
type AccountAttributes = {
  accountName?: string | undefined
  accountOnboarding?: boolean | undefined
  allowedIp?: { ipEnd?: string | undefined; ipStart?: string | undefined }[] | undefined
  branding?: true | false | undefined
  brandingSettings?: BrandingSettings | undefined
  clientId?: number | undefined
  complexPasswords?: boolean | undefined
  created?: string | undefined
  customDomain?: true | false | undefined
  customSignature?: string | undefined
  externalDomains?: string[] | undefined
  maxUsers?: number | undefined
  modified?: string | undefined
  planDetails?: PlanDetails | undefined
  quota?: Quota | undefined
  secureOnly?: boolean | undefined
  showReferralLinks?: boolean | undefined
  status?: 1 | 0 | undefined
  userCount?: number | undefined
  welcomeEmailContent?: string | undefined
  welcomeEmailSubject?: string | undefined
}
type Account = {
  attributes?: AccountAttributes | undefined
  id?: number | undefined
  relationships?:
    | {
        masterUser?:
          | { data?: { id?: number | undefined; type?: 'user' | undefined } | undefined }
          | undefined
      }
    | undefined
  type?: 'account' | undefined
}
type UserPermissions = {
  changePassword: boolean
  delete: boolean
  deleteFormData: boolean
  download: boolean
  list: boolean
  modify: boolean
  notification: boolean
  share: boolean
  upload: boolean
  viewFormData: boolean
}
type UserAttributes = {
  accessTimestamp?: string | undefined
  accountName: string
  created: string
  email?: string | undefined
  expiration?: string | undefined
  firstLogin?: boolean | undefined
  homePath?: string | undefined
  locked?: boolean | undefined
  modified: string
  nickname: string
  onboarding: boolean
  permissions: UserPermissions
  role: 'user' | 'admin' | 'master'
  status: 0 | 1
  timeZone: string
  username: string
}
type User = {
  attributes?: UserAttributes | undefined
  id?: number | undefined
  relationships?:
    | {
        homeResource?:
          | { data?: { id?: bigint | undefined; type?: 'resource' | undefined } | undefined }
          | undefined
        ownerAccount: {
          data?: { id?: number | undefined; type?: 'account' | undefined } | undefined
        }
      }
    | undefined
  type?: string | undefined
}
type AccountResponse = {
  data?: Account | undefined
  included?: User[] | undefined
  responseStatus?: number | undefined
}
type SessionActivityEntry = {
  attributes?:
    | {
        bytesTransferred?: bigint | undefined
        created?: string | undefined
        duration?: number | undefined
        fileName?: string | undefined
        fileSource?: string | undefined
        ipAddress?: string | undefined
        operation?: string | undefined
        protocol?: string | undefined
        sessionId?: string | undefined
        status?: string | undefined
        username?: string | undefined
      }
    | undefined
  id?: bigint | undefined
  type?: 'sessionActivity' | undefined
}
type SessionActivityResponse = {
  data?: SessionActivityEntry[] | undefined
  responseStatus?: number | undefined
  returnedResults?: number | undefined
  totalResults?: number | undefined
}
type AccessMode = {
  delete?: boolean | undefined
  download?: boolean | undefined
  modify?: boolean | undefined
  upload?: boolean | undefined
}
type ShareMessage = {
  body?: string | undefined
  created?: string | undefined
  id?: number | undefined
  modified?: string | undefined
  shareId?: number | undefined
  subject?: string | undefined
  userId?: number | undefined
}
type ShareRecipient = {
  created?: string | undefined
  email?: string | undefined
  hash?: string | undefined
  id?: number | undefined
  received?: true | false | undefined
  sent?: true | false | undefined
  shareId?: string | undefined
  type?: 'owner' | 'direct' | undefined
}
type WebhookActivityAttributesV2 = {
  accountId?: string | undefined
  attemptId?: string | undefined
  created?: string | undefined
  details?:
    | {
        accountName?: string | undefined
        attemptId?: string | undefined
        event?: string | undefined
        eventData?:
          | {
              formDetails?: { [x: string]: unknown }[] | undefined
              resources?:
                | {
                    accessedAt?: string | undefined
                    createdAt?: string | undefined
                    createdBy?: string | undefined
                    fileCount?: number | undefined
                    hash?: string | undefined
                    id?: number | undefined
                    name?: string | undefined
                    path?: string | undefined
                    previewable?: boolean | undefined
                    size?: number | undefined
                    type?: string | undefined
                    updatedAt?: string | undefined
                    uploadDate?: string | undefined
                  }[]
                | undefined
              share?:
                | {
                    accessDescription?: string | undefined
                    accessMode?: AccessMode | undefined
                    assets?: string[] | undefined
                    created?: string | undefined
                    embed?: boolean | undefined
                    expiration?: string | undefined
                    expired?: boolean | undefined
                    fileDropCreateFolders?: boolean | undefined
                    formId?: number | undefined
                    hasNotification?: boolean | undefined
                    hasPassword?: boolean | undefined
                    hash?: string | undefined
                    id?: number | undefined
                    inherited?: boolean | undefined
                    isPublic?: boolean | undefined
                    messages?: ShareMessage[] | undefined
                    modified?: string | undefined
                    name?: string | undefined
                    ownerHash?: string | undefined
                    paths?: string[] | undefined
                    recipients?: ShareRecipient[] | undefined
                    requireEmail?: boolean | undefined
                    resent?: boolean | undefined
                    status?: number | undefined
                    trackingStatus?: string | undefined
                    type?: string | undefined
                  }[]
                | undefined
              transferStatus?: string | undefined
            }
          | undefined
        eventTimestamp?: string | undefined
        ipAddress?: string | undefined
        protocol?: string | undefined
        username?: string | undefined
      }
    | undefined
  endpointUrl?: string | undefined
  event?:
    | 'resources.upload'
    | 'resources.download'
    | 'resources.delete'
    | 'resources.rename'
    | 'resources.copy'
    | 'resources.move'
    | 'resources.compress'
    | 'resources.extract'
    | 'resources.createFolder'
    | 'shares.formSubmit'
    | undefined
  ipAddress?: string | undefined
  resend?: boolean | undefined
  resourcePath?: string | undefined
  response?: string | undefined
  status?: number | undefined
  username?: string | undefined
  webhookFormat?: string | undefined
  webhookId?: number | undefined
  webhookPath?: string | undefined
}
type WebhookActivityAttributesV1 = {
  accountId?: string | undefined
  attemptId?: string | undefined
  created?: string | undefined
  details?:
    | {
        accountName?: string | undefined
        attempt?: number | undefined
        attemptId?: string | undefined
        event?: string | undefined
        protocol?: string | undefined
        username?: string | undefined
      }
    | undefined
  endpointUrl?: string | undefined
  event?:
    | 'resources.upload'
    | 'resources.download'
    | 'resources.delete'
    | 'resources.rename'
    | 'resources.copy'
    | 'resources.move'
    | 'resources.compress'
    | 'resources.extract'
    | 'resources.createFolder'
    | 'shares.formSubmit'
    | undefined
  ipAddress?: string | undefined
  resend?: boolean | undefined
  resourcePath?: string | undefined
  response?: string | undefined
  status?: number | undefined
  username?: string | undefined
  webhookFormat?: string | undefined
  webhookId?: number | undefined
  webhookPath?: string | undefined
}
type WebhookActivityEntry = {
  attributes?: WebhookActivityAttributesV2 | WebhookActivityAttributesV1 | undefined
  id?: bigint | undefined
  type?: 'webhookActivity' | undefined
}
type WebhookActivityResponse = {
  data?: WebhookActivityEntry[] | undefined
  responseStatus?: number | undefined
  returnedResults?: number | undefined
  totalResults?: number | undefined
}
type EmailListAttributes = {
  created?: string | undefined
  emails?: string[] | undefined
  modified?: string | undefined
  name?: string | undefined
}
type RelationshipData = { id?: number | undefined; type?: string | undefined }
type EmailListOwnerUser = { data?: RelationshipData | undefined }
type EmailListRelationships = { ownerUser?: EmailListOwnerUser | undefined }
type EmailList = {
  attributes?: EmailListAttributes | undefined
  id?: number | undefined
  relationships?: EmailListRelationships | undefined
  type?: string | undefined
}
type EmailListCollectionResponse = {
  data?: EmailList[] | undefined
  included?: User[] | undefined
  responseStatus?: number | undefined
  returnedResults?: number | undefined
  totalResults?: number | undefined
}
type EmailListResponse = {
  data?: EmailList | undefined
  included?: User[] | undefined
  responseStatus?: number | undefined
}
type EmptyResponse = { data?: string[] | undefined; responseStatus?: number | undefined }
type FormField = {
  id?: number | undefined
  name?: string | undefined
  order?: number | undefined
  settings?:
    | {
        description?: string | undefined
        isRequired?: boolean | undefined
        senderEmail?: boolean | undefined
        useAsFolderName?: boolean | undefined
        width?: number | undefined
      }
    | undefined
  type?: 'email' | 'textarea' | 'name' | 'text' | undefined
}
type FormAttributes = {
  cssStyles?: string | undefined
  elements?: FormField[] | undefined
  formDescription?: string | undefined
  submitButtonText?: string | undefined
  successMessage?: string | undefined
}
type Form = {
  attributes?: FormAttributes | undefined
  id?: number | undefined
  relationships?:
    | {
        share?:
          | { data?: { id?: number | undefined; type?: 'share' | undefined } | undefined }
          | undefined
      }
    | undefined
  type?: string | undefined
}
type ShareAttributes = {
  accessDescription?: string | undefined
  accessMode?: AccessMode | undefined
  created?: string | undefined
  embed?: boolean | undefined
  expiration?: string | undefined
  expired?: true | false | undefined
  fileDropCreateFolders?: true | false | undefined
  formId?: number | undefined
  hasNotification?: true | false | undefined
  hasPassword?: true | false | undefined
  hash?: string | undefined
  inherited?: true | false | undefined
  messages?: ShareMessage[] | undefined
  modified?: string | undefined
  name?: string | undefined
  ownerHash?: string | undefined
  paths?: string[] | undefined
  public?: true | false | undefined
  recipients?: ShareRecipient[] | undefined
  requireEmail?: boolean | undefined
  resent?: string | undefined
  status?: 0 | 1 | undefined
  trackingStatus?: 'complete' | 'incomplete' | 'pending' | undefined
  type?: 'shared_folder' | 'send' | 'receive' | undefined
}
type Share = {
  attributes?: ShareAttributes | undefined
  id?: number | undefined
  relationships?:
    | {
        messages?:
          | { data?: { id?: number | undefined; type?: 'message' | undefined } | undefined }[]
          | undefined
        notifications?:
          | { data?: { id?: number | undefined; type?: 'notification' | undefined } | undefined }[]
          | undefined
        owner?:
          | { data?: { id?: number | undefined; type?: string | undefined } | undefined }
          | undefined
        resources?:
          | { data?: { id?: bigint | undefined; type?: 'resource' | undefined } | undefined }[]
          | undefined
      }
    | undefined
  type?: 'share' | undefined
}
type FormResponse = {
  data?: Form | undefined
  included?: Share[] | undefined
  responseStatus?: number | undefined
}
type FormEntryField = {
  name?: string | undefined
  order?: number | undefined
  value?: string | undefined
}
type FormEntry = {
  attributes?:
    | {
        created?: string | undefined
        fields?: FormEntryField[] | undefined
        modified?: string | undefined
        paths?: string[] | undefined
        status?: 'pending' | 'completed' | undefined
      }
    | undefined
  id?: bigint | undefined
  type?: string | undefined
}
type FormEntryResponse = {
  data?: FormEntry[] | undefined
  responseStatus?: number | undefined
  returnedResults?: number | undefined
  totalResults?: number | undefined
}
type NotificationRecipient = {
  created?: string | undefined
  email?: string | undefined
  id?: number | undefined
  modified?: string | undefined
  notificationId?: number | undefined
}
type NotificationAttributes = {
  action?: 'upload' | 'download' | 'delete' | 'all' | undefined
  created?: string | undefined
  message?: string | undefined
  modified?: string | undefined
  name?: string | undefined
  path?: string | undefined
  readableDescription?: string | undefined
  readableDescriptionWithoutPath?: string | undefined
  recipients?: NotificationRecipient[] | undefined
  sendEmail?: true | false | undefined
  shareId?: string | undefined
  type?:
    | 'file'
    | 'folder'
    | 'shared_folder'
    | 'send_receipt'
    | 'share_receipt'
    | 'file_drop'
    | undefined
  userId?: string | undefined
  usernames?: string[] | undefined
}
type Notification = {
  attributes?: NotificationAttributes | undefined
  id?: number | undefined
  relationships?:
    | {
        ownerUser?:
          | { data?: { id?: number | undefined; type?: 'user' | undefined } | undefined }
          | undefined
        resource?:
          | { data?: { id?: bigint | undefined; type?: string | undefined } | undefined }
          | undefined
        share?:
          | { data?: { id?: number | undefined; type?: string | undefined } | undefined }
          | undefined
      }
    | undefined
  type?: string | undefined
}
type ResourceAttributes = {
  accessedAt?: string | undefined
  accessedTime?: number | undefined
  createdAt?: string | undefined
  createdBy?: string | undefined
  createdTime?: number | undefined
  extension?: string | undefined
  fileCount?: number | undefined
  hash?: string | undefined
  name?: string | undefined
  path?: string | undefined
  previewable?: true | false | undefined
  size?: bigint | undefined
  type?: 'file' | 'dir' | undefined
  updatedAt?: string | undefined
  updatedTime?: number | undefined
  uploadDate?: string | undefined
}
type Resource = {
  attributes?: ResourceAttributes | undefined
  id?: bigint | undefined
  relationships?:
    | {
        directFile?:
          | { data?: { id?: number | undefined; type?: string | undefined } | undefined }
          | undefined
        notifications?:
          | { data?: { id?: number | undefined; type?: string | undefined } | undefined }[]
          | undefined
        parentResource?:
          | { data?: { id?: bigint | undefined; type?: string | undefined } | undefined }
          | undefined
        share?:
          | { data?: { id?: number | undefined; type?: string | undefined } | undefined }
          | undefined
      }
    | undefined
  type?: 'resource' | undefined
}
type NotificationCollectionResponse = {
  data?: Notification[] | undefined
  included?: (Share | User | Resource)[] | undefined
  responseStatus?: number | undefined
  returnedResults?: number | undefined
  totalResults?: number | undefined
}
type NotificationResponse = {
  data?: Notification | undefined
  included?: (Share | User | Resource)[] | undefined
  responseStatus?: number | undefined
}
type ShareRecipientsResponse = { data?: string[] | undefined; responseStatus?: number | undefined }
type ResourceDelete = {
  id?: bigint | undefined
  meta?: { [x: string]: unknown } | undefined
  type?: 'resource' | undefined
}
type Error = {
  code?: string | undefined
  detail?: string | undefined
  meta?: { [x: string]: unknown } | undefined
  title?: string | undefined
}
type ResourceMultiResponse = { responses?: (ResourceDelete | Error)[] | undefined }
type ResourceResponse = {
  data?: Resource | undefined
  included?: (User | Account | Resource | Notification | Share)[] | undefined
  responseStatus?: number | undefined
}
type ResourceCopyMove = { data?: Resource | undefined; meta?: { [x: string]: unknown } | undefined }
type ResourceCollectionResponse = {
  data?: Resource[] | undefined
  included?: (User | Account | Resource | Notification | Share)[] | undefined
  responseStatus?: number | undefined
  returnedResults?: number | undefined
  totalResults?: number | undefined
}
type PreviewFile = {
  attributes?:
    | {
        image?: string | undefined
        imageHash?: string | undefined
        pageCount?: number | undefined
        size?: bigint | undefined
      }
    | undefined
  id?: bigint | undefined
  type?: string | undefined
}
type PreviewFileResponse = { data?: PreviewFile | undefined; responseStatus?: number | undefined }
type ShareCollectionResponse = {
  data?: Share[] | undefined
  included?: (User | Notification | Resource)[] | undefined
  responseStatus?: number | undefined
  returnedResults?: number | undefined
  totalResults?: number | undefined
}
type ShareResponse = {
  data?: Share | undefined
  included?: (User | Notification | Resource)[] | undefined
  responseStatus?: number | undefined
}
type SSHKeyAttributes = {
  created?: string | undefined
  fingerprint?: string | undefined
  lastLogin?: string | undefined
}
type SSHKey = {
  attributes?: SSHKeyAttributes | undefined
  id?: number | undefined
  relationships?:
    | {
        ownerUser?:
          | { data?: { id?: number | undefined; type?: string | undefined } | undefined }
          | undefined
      }
    | undefined
  type?: 'sshKey' | undefined
}
type SSHKeyCollectionResponse = {
  data?: SSHKey[] | undefined
  included?: User[] | undefined
  responseStatus?: number | undefined
  returnedResults?: number | undefined
  totalResults?: number | undefined
}
type SSHKeyResponse = {
  data?: SSHKey | undefined
  included?: User[] | undefined
  responseStatus?: number | undefined
}
type UserCollectionResponse = {
  data?: User[] | undefined
  included?: (Account | Resource)[] | undefined
  responseStatus?: number | undefined
  returnedResults?: number | undefined
  totalResults?: number | undefined
}
type UserResponse = {
  data?: User | undefined
  included?: (Account | Resource)[] | undefined
  responseStatus?: number | undefined
}
type WebhookTriggers = {
  resources?:
    | {
        compress?: boolean | undefined
        copy?: boolean | undefined
        createFolder?: boolean | undefined
        delete?: boolean | undefined
        download?: boolean | undefined
        extract?: boolean | undefined
        move?: boolean | undefined
        rename?: boolean | undefined
        upload?: boolean | undefined
      }
    | undefined
  shares?: { formSubmit?: boolean | undefined } | undefined
}
type WebhookAttributes = {
  created?: string | undefined
  endpointUrl?: string | undefined
  failed?: boolean | undefined
  modified?: string | undefined
  responseVersion?: 'v1' | 'v2' | undefined
  triggers?: WebhookTriggers | undefined
  verificationToken?: string | undefined
}
type Webhook = {
  attributes?: WebhookAttributes | undefined
  id?: number | undefined
  relationships?:
    | {
        ownerAccount?:
          | { data?: { id?: number | undefined; type?: string | undefined } | undefined }
          | undefined
        resource?:
          | { data?: { id?: number | undefined; type?: string | undefined } | undefined }
          | undefined
      }
    | undefined
  type?: string | undefined
}
type WebhookCollectionResponse = {
  data?: Webhook[] | undefined
  included?: (Account | Resource)[] | undefined
  responseStatus?: number | undefined
  returnedResults?: number | undefined
  totalResults?: number | undefined
}
type WebhookResponse = {
  data?: Webhook[] | undefined
  included?: (Account | Resource)[] | undefined
  responseStatus?: number | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/account': {
      $get: {
        input: { query: { include?: string | undefined } } & {
          header: { 'ev-api-key': string; 'ev-access-token': string }
        }
        output: AccountResponse
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { header: { 'ev-api-key': string; 'ev-access-token': string } } & {
          json: {
            accountOnboarding?: boolean | undefined
            allowedIpRanges?:
              | { ipEnd?: string | undefined; ipStart?: string | undefined }[]
              | undefined
            brandingSettings?:
              | {
                  companyName?: string | undefined
                  customEmail?: string | undefined
                  theme?: string | undefined
                }
              | undefined
            complexPasswords?: boolean | undefined
            customSignature?: string | undefined
            emailContent?: string | undefined
            emailSubject?: string | undefined
            externalDomain?: string | undefined
            quota?:
              | {
                  noticeEnabled?: boolean | undefined
                  noticeThreshold?: number | undefined
                  transactionsNoticeEnabled?: boolean | undefined
                  transactionsNoticeThreshold?: number | undefined
                }
              | undefined
            secureOnly?: boolean | undefined
            showReferralLinks?: boolean | undefined
          }
        }
        output: AccountResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/activity/session': {
      $get: {
        input: {
          query: {
            startDate?: string | undefined
            endDate?: string | undefined
            ipAddress?: string | undefined
            username?: string | undefined
            path?: string | undefined
            type?: string | undefined
            offset?: number | undefined
            limit?: number | undefined
            sort?: string | undefined
          }
        } & { header: { 'ev-api-key': string; 'ev-access-token': string } }
        output: SessionActivityResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/activity/webhooks': {
      $get: {
        input: {
          query: {
            startDate?: string | undefined
            endDate?: string | undefined
            endpointUrl?: string | undefined
            event?: string | undefined
            statusCode?: number | undefined
            resourcePath?: string | undefined
            username?: string | undefined
            offset?: number | undefined
            limit?: number | undefined
            sort?: string | undefined
          }
        } & { header: { 'ev-api-key': string; 'ev-access-token': string } }
        output: WebhookActivityResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/email-lists': {
      $get: {
        input: { query: { include?: string | undefined } } & {
          header: { 'ev-api-key': string; 'ev-access-token': string }
        }
        output: EmailListCollectionResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { header: { 'ev-api-key': string; 'ev-access-token': string } } & {
          json: { emails: string[]; name: string }
        }
        output: EmailListResponse
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/email-lists/:id': {
      $delete: {
        input: { param: { id: number } } & {
          header: { 'ev-api-key': string; 'ev-access-token': string }
        }
        output: EmptyResponse
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { id: number } } & { query: { include?: string | undefined } } & {
          header: { 'ev-api-key': string; 'ev-access-token': string }
        }
        output: EmailListResponse
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { id: number } } & {
          header: { 'ev-api-key': string; 'ev-access-token': string }
        } & { json: { emails?: string[] | undefined; name?: string | undefined } }
        output: EmailListResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/email/referral': {
      $post: {
        input: { header: { 'ev-api-key': string; 'ev-access-token': string } } & {
          json: { emails: string[]; message: string }
        }
        output: EmptyResponse
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/email/welcome/:username': {
      $post: {
        input: { param: { username: string } } & {
          header: { 'ev-api-key': string; 'ev-access-token': string }
        }
        output: EmptyResponse
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/forms': {
      $get: {
        input: { query: { shareHash: string; include?: 'share' | undefined } } & {
          header: { 'ev-api-key': string; 'ev-access-token': string }
        }
        output: FormResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/forms/entries/:id': {
      $delete: {
        input: { param: { id: bigint } } & {
          header: { 'ev-api-key': string; 'ev-access-token': string }
        }
        output: EmptyResponse
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { id: number } } & {
          query: { limit?: number | undefined; offset?: number | undefined }
        } & { header: { 'ev-api-key': string; 'ev-access-token': string } }
        output: FormEntryResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/forms/:id': {
      $get: {
        input: { param: { id: number } } & { query: { include?: string | undefined } } & {
          header: { 'ev-api-key': string; 'ev-access-token': string }
        }
        output: FormResponse
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { id: number } } & {
          header: { 'ev-api-key': string; 'ev-access-token': string }
        } & {
          json: {
            cssStyles?: string | undefined
            elements?:
              | {
                  id?: number | undefined
                  name?: string | undefined
                  order?: number | undefined
                  settings?:
                    | {
                        isRequired?: boolean | undefined
                        senderEmail?: boolean | undefined
                        useAsFolderName?: boolean | undefined
                      }
                    | undefined
                  type?: 'name' | 'email' | 'text' | 'textarea' | 'upload_area' | undefined
                }[]
              | undefined
            formDescription?: string | undefined
            submitButtonText?: string | undefined
            successMessage?: string | undefined
          }
        }
        output: FormResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/notifications': {
      $get: {
        input: {
          query: {
            type?:
              | 'file'
              | 'folder'
              | 'shared_folder'
              | 'send_receipt'
              | 'share_receipt'
              | 'file_drop'
              | undefined
            offset?: number | undefined
            sort?: string | undefined
            limit?: number | undefined
            include?: 'resource' | 'share' | 'user' | undefined
            action?: 'connect' | 'download' | 'upload' | 'delete' | 'all' | undefined
          }
        } & { header: { 'ev-api-key': string; 'ev-access-token': string } }
        output: NotificationCollectionResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { header: { 'ev-api-key': string; 'ev-access-token': string } } & {
          json: {
            action: 'upload' | 'download' | 'delete' | 'all'
            message?: string | undefined
            recipients?: string[] | undefined
            resource: string
            sendEmail: boolean
            type: 'file' | 'folder'
            usernames: string[]
          }
        }
        output: NotificationResponse
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/notifications/:id': {
      $delete: {
        input: { param: { id: number } } & {
          header: { 'ev-api-key': string; 'ev-access-token': string }
        }
        output: EmptyResponse
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { id: number } } & { query: { include?: string | undefined } } & {
          header: { 'ev-api-key': string; 'ev-access-token': string }
        }
        output: NotificationResponse
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { id: number } } & {
          header: { 'ev-api-key': string; 'ev-access-token': string }
        } & {
          json: {
            action?: 'upload' | 'download' | 'delete' | 'all' | undefined
            message?: string | undefined
            recipients?: string[] | undefined
            sendEmail?: boolean | undefined
            usernames?: string[] | undefined
          }
        }
        output: NotificationResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/recipients/shares/invites/:shareId': {
      $post: {
        input: { param: { shareId: number } } & {
          header: { 'ev-api-key': string; 'ev-access-token': string }
        } & { json: { recipientId?: number | undefined } }
        output: ShareRecipientsResponse
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/resources': {
      $delete:
        | {
            input: { header: { 'ev-api-key': string; 'ev-access-token': string } } & {
              json: { resources: string[] }
            }
            output: EmptyResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'ev-api-key': string; 'ev-access-token': string } } & {
              json: { resources: string[] }
            }
            output: ResourceMultiResponse
            outputFormat: 'json'
            status: 207
          }
      $get: {
        input: { query: { resource: string; include?: string | undefined } } & {
          header: { 'ev-api-key': string; 'ev-access-token': string }
        }
        output: ResourceResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { header: { 'ev-api-key': string; 'ev-access-token': string } } & {
          json: {
            name?: string | undefined
            parentResource?: string | undefined
            path?: string | undefined
          }
        }
        output: ResourceResponse
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/resources/compress': {
      $post: {
        input: { header: { 'ev-api-key': string; 'ev-access-token': string } } & {
          json: {
            archiveName?: string | undefined
            parentResource?: string | undefined
            resources: string[]
          }
        }
        output: ResourceResponse
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/resources/copy': {
      $post:
        | {
            input: { header: { 'ev-api-key': string; 'ev-access-token': string } } & {
              json: { parentResource: string; resources: string[] }
            }
            output: ResourceCopyMove
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'ev-api-key': string; 'ev-access-token': string } } & {
              json: { parentResource: string; resources: string[] }
            }
            output: ResourceMultiResponse
            outputFormat: 'json'
            status: 207
          }
    }
  } & {
    '/resources/download': {
      $get:
        | {
            input: {
              query: { 'resources[]': string[]; downloadArchiveName?: string | undefined }
            } & { header: { 'ev-api-key': string; 'ev-access-token': string } }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: { 'resources[]': string[]; downloadArchiveName?: string | undefined }
            } & { header: { 'ev-api-key': string; 'ev-access-token': string } }
            output: File
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/resources/extract': {
      $post: {
        input: { header: { 'ev-api-key': string; 'ev-access-token': string } } & {
          json: { parentResource: string; resource: string }
        }
        output: ResourceCollectionResponse
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/resources/list': {
      $get: {
        input: {
          query: {
            resource: string
            sort?: string | undefined
            offset?: number | undefined
            limit?: number | undefined
            type?: string | undefined
            name?: string | undefined
            include?: string | undefined
          }
        } & { header: { 'ev-api-key': string; 'ev-access-token': string } }
        output: ResourceCollectionResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/resources/list/:id': {
      $get: {
        input: { param: { id: bigint } } & {
          query: {
            sort?: string | undefined
            offset?: number | undefined
            limit?: number | undefined
            type?: string | undefined
            include?: string | undefined
          }
        } & { header: { 'ev-api-key': string; 'ev-access-token': string } }
        output: ResourceCollectionResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/resources/move': {
      $post:
        | {
            input: { header: { 'ev-api-key': string; 'ev-access-token': string } } & {
              json: { parentResource: string; resources: string[] }
            }
            output: ResourceCopyMove
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'ev-api-key': string; 'ev-access-token': string } } & {
              json: { parentResource: string; resources: string[] }
            }
            output: ResourceMultiResponse
            outputFormat: 'json'
            status: 207
          }
    }
  } & {
    '/resources/preview': {
      $get: {
        input: {
          query: {
            resource: string
            size: 'small' | 'medium' | 'large'
            width?: number | undefined
            height?: number | undefined
            page?: number | undefined
          }
        } & { header: { 'ev-api-key': string; 'ev-access-token': string } }
        output: PreviewFileResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/resources/upload': {
      $post: {
        input: {
          query: {
            path: string
            fileSize: number
            resume?: boolean | undefined
            allowOverwrite?: boolean | undefined
          }
        } & {
          header: {
            'ev-api-key': string
            'ev-access-token': string
            offsetBytes?: number | undefined
          }
        } & { form: { file?: File | undefined } }
        output: ResourceResponse
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/resources/:id': {
      $delete: {
        input: { param: { id: bigint } } & {
          header: { 'ev-api-key': string; 'ev-access-token': string }
        }
        output: EmptyResponse
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { id: bigint } } & { query: { include?: string | undefined } } & {
          header: { 'ev-api-key': string; 'ev-access-token': string }
        }
        output: ResourceResponse
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { id: bigint } } & {
          header: { 'ev-access-token': string; 'ev-api-key': string }
        } & { json: { name?: string | undefined } }
        output: ResourceResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/shares': {
      $get: {
        input: {
          query: {
            offset?: number | undefined
            limit?: number | undefined
            scope?: 'all' | 'active' | 'currentUser' | undefined
            sort?: 'created' | '-created' | undefined
            type?: 'receive' | 'shared_folder' | 'send' | undefined
            include?: string | undefined
            name?: string | undefined
            recipient?: string | undefined
            message?: string | undefined
            username?: string | undefined
            search?: string | undefined
          }
        } & { header: { 'ev-api-key': string; 'ev-access-token': string } }
        output: ShareCollectionResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { header: { 'ev-api-key': string; 'ev-access-token': string } } & {
          json: {
            accessMode?: AccessMode | undefined
            embed?: boolean | undefined
            expiration?: string | undefined
            fileDropCreateFolders?: boolean | undefined
            hasNotification?: boolean | undefined
            isPublic?: boolean | undefined
            messageBody?: string | undefined
            messageSubject?: string | undefined
            name: string
            notificationEmails?: string[] | undefined
            password?: string | undefined
            recipients?: { email?: string | undefined; type?: string | undefined }[] | undefined
            requireEmail?: boolean | undefined
            resources?: string[] | undefined
            sendingLocalFiles?: boolean | undefined
            type: 'shared_folder' | 'receive' | 'send'
          }
        }
        output: ShareResponse
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/shares/complete-send/:id': {
      $post: {
        input: { param: { id: number } } & {
          header: { 'ev-api-key': string; 'ev-access-token': string }
        }
        output: ShareResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/shares/:id': {
      $delete: {
        input: { param: { id: number } } & {
          header: { 'ev-api-key': string; 'ev-access-token': string }
        }
        output: EmptyResponse
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { id: number } } & { query: { include?: string | undefined } } & {
          header: { 'ev-api-key': string; 'ev-access-token': string }
        }
        output: ShareResponse
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { id: number } } & {
          header: { 'ev-api-key': string; 'ev-access-token': string }
        } & {
          json: {
            accessMode?: AccessMode | undefined
            embed?: boolean | undefined
            expiration?: string | undefined
            fileDropCreateFolders?: boolean | undefined
            hasNotification?: boolean | undefined
            isPublic?: boolean | undefined
            messageBody?: string | undefined
            messageSubject?: string | undefined
            name?: string | undefined
            notificationEmails?: string[] | undefined
            password?: string | undefined
            recipients?: { email?: string | undefined; type?: string | undefined }[] | undefined
            requireEmail?: boolean | undefined
            resources?: string[] | undefined
            status?: number | undefined
          }
        }
        output: ShareResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/ssh-keys': {
      $get: {
        input: {
          query: {
            userId?: string | undefined
            limit?: number | undefined
            offset?: number | undefined
          }
        } & { header: { 'ev-api-key': string; 'ev-access-token': string } }
        output: SSHKeyCollectionResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { header: { 'ev-api-key': string; 'ev-access-token': string } } & {
          json: { publicKey: string; userId: number }
        }
        output: SSHKeyResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/ssh-keys/:id': {
      $delete: {
        input: { param: { id: string } } & {
          header: { 'ev-api-key': string; 'ev-access-token': string }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $get: {
        input: { param: { id: string } } & {
          header: { 'ev-api-key': string; 'ev-access-token': string }
        }
        output: SSHKeyResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/users': {
      $get: {
        input: {
          query: {
            username?: string | undefined
            homeResource?: string | undefined
            nickname?: string | undefined
            email?: string | undefined
            role?: string | undefined
            status?: number | undefined
            search?: string | undefined
            offset?: number | undefined
            sort?: string | undefined
            limit?: number | undefined
            include?: string | undefined
          }
        } & { header: { 'ev-api-key': string; 'ev-access-token': string } }
        output: UserCollectionResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { header: { 'ev-api-key': string; 'ev-access-token': string } } & {
          json: {
            email: string
            expiration?: string | undefined
            homeResource: string
            locked?: boolean | undefined
            nickname?: string | undefined
            onboarding?: boolean | undefined
            password: string
            permissions: {
              changePassword?: boolean | undefined
              delete?: boolean | undefined
              deleteFormData?: boolean | undefined
              download?: boolean | undefined
              list?: boolean | undefined
              modify?: boolean | undefined
              notification?: boolean | undefined
              share?: boolean | undefined
              upload?: boolean | undefined
              viewFormData?: boolean | undefined
            }
            role: 'user' | 'admin'
            timeZone: string
            username: string
            welcomeEmail?: boolean | undefined
          }
        }
        output: UserResponse
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/users/:id': {
      $delete: {
        input: { param: { id: number } } & {
          header: { 'ev-api-key': string; 'ev-access-token': string }
        }
        output: EmptyResponse
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { id: number } } & { query: { include?: string | undefined } } & {
          header: { 'ev-api-key': string; 'ev-access-token': string }
        }
        output: UserResponse
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { id: number } } & {
          header: { 'ev-api-key': string; 'ev-access-token': string }
        } & {
          json: {
            email?: string | undefined
            expiration?: string | undefined
            homeResource?: string | undefined
            locked?: boolean | undefined
            nickname?: string | undefined
            onboarding?: boolean | undefined
            password?: string | undefined
            permissions?: UserPermissions | undefined
            role?: 'user' | 'admin' | undefined
            timeZone?: string | undefined
            username?: string | undefined
          }
        }
        output: UserResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/webhooks': {
      $get: {
        input: {
          query: {
            include?: string | undefined
            offset?: number | undefined
            limit?: number | undefined
          }
        } & { header: { 'ev-api-key': string; 'ev-access-token': string } }
        output: WebhookCollectionResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { header: { 'ev-api-key': string; 'ev-access-token': string } } & {
          json: {
            endpointUrl: string
            resource?: string | undefined
            responseVersion?: 'v1' | 'v2' | undefined
            triggers?: WebhookTriggers | undefined
          }
        }
        output: WebhookResponse
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/webhooks/regenerate-token/:id': {
      $post: {
        input: { param: { id: string } } & {
          header: { 'ev-api-key': string; 'ev-access-token': string }
        }
        output: WebhookResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/webhooks/resend/:activityId': {
      $post: {
        input: { param: { activityId: string } } & {
          header: { 'ev-api-key': string; 'ev-access-token': string }
        }
        output: EmptyResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/webhooks/:id': {
      $delete: {
        input: { param: { id: number } } & {
          header: { 'ev-api-key': string; 'ev-access-token': string }
        }
        output: EmptyResponse
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { id: number } } & { query: { include?: string | undefined } } & {
          header: { 'ev-api-key': string; 'ev-access-token': string }
        }
        output: WebhookResponse
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { id: number } } & {
          header: { 'ev-api-key': string; 'ev-access-token': string }
        } & {
          json: {
            endpointUrl?: string | undefined
            resource?: string | undefined
            responseVersion?: 'v2' | 'v1' | undefined
            triggers?: WebhookTriggers | undefined
          }
        }
        output: WebhookResponse
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
