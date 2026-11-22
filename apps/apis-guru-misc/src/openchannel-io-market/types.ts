type Restrictions = {
  own?: { [x: string]: unknown } | undefined
  view?: { [x: string]: unknown } | undefined
}
type Model = {
  billingPeriod?: 'daily' | 'weekly' | 'monthly' | 'annually' | undefined
  billingPeriodUnit?: number | undefined
  commission: number
  currency: string
  customData?: { [x: string]: unknown } | undefined
  feePayer: 'developer' | 'marketplace'
  license: 'single'
  modelId?: string | undefined
  price: number
  subtype?: 'usage' | 'seat' | undefined
  trial: number
  type: 'free' | 'single' | 'recurring'
}
type Ownership = {
  appId: string
  customData?: { [x: string]: unknown } | undefined
  date: bigint
  developerId: string
  expires?: bigint | undefined
  model: Model
  ownershipId: string
  ownershipStatus: 'pending' | 'active' | 'uninstalled' | 'cancelled'
  ownershipType: 'full' | 'subscription' | 'trial'
  uninstallDate?: bigint | undefined
  userId: string
}
type Profanity = { end: number; start: number; word: string }
type Status = {
  profanity: Profanity[]
  reason: 'profanity' | 'spam'
  value: 'pending' | 'spam' | 'flagged' | 'approved'
}
type App = {
  access?: string[] | undefined
  allow: Restrictions
  appId: string
  attributes: { [x: string]: unknown }
  created: bigint
  customData: { [x: string]: unknown }
  developerId: string
  isLive: boolean
  lastUpdated: bigint
  model: Model[]
  name: string
  ownership?: Ownership | undefined
  randomize: number
  rating: number
  restrict: Restrictions
  reviewCount?: number | undefined
  safeName: string[]
  statistics?: { [x: string]: unknown } | undefined
  status: Status
  submittedDate?: bigint | undefined
  type?: string | undefined
  version: number
}
type AppPages = {
  count: number
  list: App[]
  pageNumber?: number | undefined
  pages?: number | undefined
}
type Parent = { status?: Status | undefined }
type AppVersion = {
  access?: string[] | undefined
  allow: Restrictions
  appId: string
  attributes?: { [x: string]: unknown } | undefined
  created: bigint
  customData: { [x: string]: unknown }
  developerId: string
  isLatestVersion: boolean
  isLive: boolean
  lastUpdated: bigint
  model: Model[]
  name: string
  parent: Parent
  rating?: number | undefined
  restrict: Restrictions
  reviewCount?: number | undefined
  safeName: string[]
  status: Status
  type?: string | undefined
  version: number
}
type SearchPages = {
  count: number
  list: App[]
  pageNumber?: number | undefined
  pages?: number | undefined
}
type VersionPages = {
  count: number
  list: AppVersion[]
  pageNumber?: number | undefined
  pages?: number | undefined
}
type Transaction = {
  amount: number
  appId: string
  customData?: { [x: string]: unknown } | undefined
  date: bigint
  developerAmount?: number | undefined
  developerId: string
  feeAmount?: number | undefined
  marketplaceAmount?: number | undefined
  ownershipId: string
  transactionId: string
  type: 'payment' | 'refund'
  userId: string
}
type DeveloperAccount = {
  customData?: { [x: string]: unknown } | undefined
  developerAccountId: string
  developerId: string
  email?: string | undefined
  name?: string | undefined
}
type DeveloperAccountPages = {
  count: number
  list: DeveloperAccount[]
  pageNumber: number
  pages: number
}
type Developer = {
  created: number
  customData?: { [x: string]: unknown } | undefined
  developerId: string
  email?: string | undefined
  name?: string | undefined
  type?: string | undefined
}
type DeveloperPages = { count: number; list: Developer[]; pageNumber: number; pages: number }
type User = {
  created: bigint
  customData: { [x: string]: unknown }
  email?: string | undefined
  name?: string | undefined
  type?: string | undefined
  userId: string
}
type UserAccount = {
  customData?: { [x: string]: unknown } | undefined
  email?: string | undefined
  name?: string | undefined
  userAccountId: string
  userId: string
}
type Review = {
  appId: string
  customData: string
  description: string
  headline: string
  rating: number
  reportDate: bigint
  reviewId: string
  status: Status
  type?: string | undefined
  user?: User | undefined
  userAccount?: UserAccount | undefined
  userAccountId?: string | undefined
  userId: string
}
type Event = {
  app?: App | undefined
  createdDate: bigint
  description?: string | undefined
  developer?: Developer | undefined
  eventId: string
  eventType:
    | 'app.submitted'
    | 'app.approved'
    | 'app.suspended'
    | 'app.unsuspended'
    | 'app.rejected'
    | 'app.inReview'
    | 'app.installed'
    | 'app.uninstalled'
    | 'review.created'
    | 'review.updated'
    | 'review.approved'
    | 'review.spam'
    | 'review.removed'
    | 'user.created'
    | 'user.updated'
    | 'user.removed'
    | 'user.invalidPaymentDetails'
    | 'user.paymentDetailsRequired'
    | 'developer.created'
    | 'developer.updated'
    | 'developer.removed'
    | 'developer.paymentDetailsRequired'
    | 'permission.added'
    | 'permission.removed'
    | 'payment.complete'
    | 'payment.refunded'
    | 'payment.required'
    | 'ownership.expired'
  marketplaceId: string
  ownership?: Ownership | undefined
  review?: Review | undefined
  transaction?: Transaction | undefined
  user?: User | undefined
}
type Hash = {
  MD5?: string | undefined
  'SHA-1'?: string | undefined
  'SHA-256'?: string | undefined
}
type FoundVirus = { fileName?: string | undefined; virusName?: string | undefined }
type VirusScan = {
  finished?: bigint | undefined
  foundViruses?: FoundVirus[] | undefined
  started?: bigint | undefined
  status: string
}
type File2 = {
  contentType?: string | undefined
  fileId: string
  fileUrl?: string | undefined
  hash?: Hash | undefined
  mimeCheck?: 'PASSED' | 'FAILED' | undefined
  name: string
  size: number
  uploadDate: bigint
  virusScan?: VirusScan | undefined
}
type FileDownload = { url: string }
type Attributes = { name: string; type: 'text' | 'select' | 'multi'; values?: string | undefined }
type Category = { description: string; name: string }
type CategoryGroups = { categories: Category[]; name: string }
type Market = {
  attributes: Attributes[]
  categoryGroups?: CategoryGroups[] | undefined
  marketplaceId: string
  previewAppUrl: string
  viewAppUrl: string
}
type OwnershipPages = {
  count: number
  list: Ownership[]
  pageNumber?: number | undefined
  pages?: number | undefined
}
type Access = {
  access: string[]
  appId: string
  date: bigint
  ip: string
  isValid: boolean
  userId: string
}
type ReviewPages = {
  count: number
  list: Review[]
  pageNumber?: number | undefined
  pages?: number | undefined
}
type DataTotal = { $field?: number | undefined }
type AppTotal = { $appId: DataTotal }
type Total = {
  apps: AppTotal
  end?: bigint | undefined
  start?: bigint | undefined
  totals: DataTotal
}
type Account = { accountName: string; country: string; defaultCurrency: string; stripeId: string }
type Accounts = { accounts: Account[]; developerId: string }
type DeveloperToken = { developerId: string; expires: bigint; targetUrl: string }
type Card = {
  address_city?: string | undefined
  address_country?: string | undefined
  address_line1?: string | undefined
  address_line2?: string | undefined
  address_state?: string | undefined
  address_zip?: string | undefined
  brand: string
  cardId: string
  exp_month: number
  exp_year: number
  isDefault: boolean
  last4: string
  name: string
}
type Cards = { cards: Card[]; userId: string }
type TransactionPages = {
  count: number
  list: Transaction[]
  pageNumber?: number | undefined
  pages?: number | undefined
}
type UserAccountPages = {
  count: number
  list: UserAccount[]
  pageNumber?: number | undefined
  pages?: number | undefined
}
type UserPages = {
  count: number
  list: User[]
  pageNumber?: number | undefined
  pages?: number | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/apps': {
      $get:
        | {
            input: {
              query: {
                query?: string | undefined
                sort?: string | undefined
                pageNumber?: number | undefined
                limit?: number | undefined
                userId?: string | undefined
                isOwner?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                query?: string | undefined
                sort?: string | undefined
                pageNumber?: number | undefined
                limit?: number | undefined
                userId?: string | undefined
                isOwner?: boolean | undefined
              }
            }
            output: AppPages
            outputFormat: 'text'
            status: 200
          }
      $post:
        | {
            input: {
              query: {
                developerId: string
                name: string
                type?: string | undefined
                model?: string | undefined
                customData?: string | undefined
                attributes?: string | undefined
                restrict?: string | undefined
                allow?: string | undefined
                access?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                developerId: string
                name: string
                type?: string | undefined
                model?: string | undefined
                customData?: string | undefined
                attributes?: string | undefined
                restrict?: string | undefined
                allow?: string | undefined
                access?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 409
          }
        | {
            input: {
              query: {
                developerId: string
                name: string
                type?: string | undefined
                model?: string | undefined
                customData?: string | undefined
                attributes?: string | undefined
                restrict?: string | undefined
                allow?: string | undefined
                access?: string | undefined
              }
            }
            output: AppVersion
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/apps/bySafeName/:safeName': {
      $get:
        | {
            input: { param: { safeName: string } } & {
              query: { userId?: string | undefined; trackViews?: boolean | undefined }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { safeName: string } } & {
              query: { userId?: string | undefined; trackViews?: boolean | undefined }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { safeName: string } } & {
              query: { userId?: string | undefined; trackViews?: boolean | undefined }
            }
            output: App
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/apps/textSearch': {
      $get:
        | {
            input: {
              query: {
                query?: string | undefined
                text: string
                fields: string
                pageNumber?: number | undefined
                limit?: number | undefined
                userId?: string | undefined
                isOwned?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                query?: string | undefined
                text: string
                fields: string
                pageNumber?: number | undefined
                limit?: number | undefined
                userId?: string | undefined
                isOwned?: boolean | undefined
              }
            }
            output: SearchPages
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/apps/versions': {
      $get:
        | {
            input: {
              query: {
                query?: string | undefined
                sort?: string | undefined
                pageNumber?: number | undefined
                limit?: number | undefined
                developerId?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                query?: string | undefined
                sort?: string | undefined
                pageNumber?: number | undefined
                limit?: number | undefined
                developerId?: string | undefined
              }
            }
            output: VersionPages
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/apps/:appId': {
      $delete: {
        input: { param: { appId: string } } & { query: { developerId: string } }
        output: {}
        outputFormat: string
        status: 404
      }
      $get:
        | {
            input: { param: { appId: string } } & {
              query: { userId?: string | undefined; trackViews?: boolean | undefined }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { appId: string } } & {
              query: { userId?: string | undefined; trackViews?: boolean | undefined }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { appId: string } } & {
              query: { userId?: string | undefined; trackViews?: boolean | undefined }
            }
            output: App
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/apps/:appId/live': {
      $post:
        | {
            input: { param: { appId: string } } & {
              query: { developerId: string; version: string }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { appId: string } } & {
              query: { developerId: string; version: string }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/apps/:appId/publish': {
      $post:
        | {
            input: { param: { appId: string } } & {
              query: { developerId: string; version: number; autoApprove?: boolean | undefined }
            }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { param: { appId: string } } & {
              query: { developerId: string; version: number; autoApprove?: boolean | undefined }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { appId: string } } & {
              query: { developerId: string; version: number; autoApprove?: boolean | undefined }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { appId: string } } & {
              query: { developerId: string; version: number; autoApprove?: boolean | undefined }
            }
            output: {}
            outputFormat: string
            status: 409
          }
    }
  } & {
    '/apps/:appId/versions/:version': {
      $delete: {
        input: { param: { appId: string; version: string } } & { query: { developerId: string } }
        output: {}
        outputFormat: string
        status: 404
      }
      $get:
        | {
            input: { param: { appId: string; version: number } } & {
              query: { developerId?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { appId: string; version: number } } & {
              query: { developerId?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { appId: string; version: number } } & {
              query: { developerId?: string | undefined }
            }
            output: AppVersion
            outputFormat: 'text'
            status: 200
          }
      $patch:
        | {
            input: { param: { appId: string; version: string } } & {
              query: {
                developerId: string
                name?: string | undefined
                type?: string | undefined
                model?: string | undefined
                customData?: string | undefined
                attributes?: string | undefined
                restrict?: string | undefined
                allow?: string | undefined
                access?: string | undefined
                approvalRequired?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { appId: string; version: string } } & {
              query: {
                developerId: string
                name?: string | undefined
                type?: string | undefined
                model?: string | undefined
                customData?: string | undefined
                attributes?: string | undefined
                restrict?: string | undefined
                allow?: string | undefined
                access?: string | undefined
                approvalRequired?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { appId: string; version: string } } & {
              query: {
                developerId: string
                name?: string | undefined
                type?: string | undefined
                model?: string | undefined
                customData?: string | undefined
                attributes?: string | undefined
                restrict?: string | undefined
                allow?: string | undefined
                access?: string | undefined
                approvalRequired?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 409
          }
        | {
            input: { param: { appId: string; version: string } } & {
              query: {
                developerId: string
                name?: string | undefined
                type?: string | undefined
                model?: string | undefined
                customData?: string | undefined
                attributes?: string | undefined
                restrict?: string | undefined
                allow?: string | undefined
                access?: string | undefined
                approvalRequired?: string | undefined
              }
            }
            output: AppVersion
            outputFormat: 'text'
            status: 200
          }
      $post:
        | {
            input: { param: { appId: string; version: string } } & {
              query: {
                developerId: string
                name?: string | undefined
                type?: string | undefined
                model?: string | undefined
                customData?: string | undefined
                attributes?: string | undefined
                restrict?: string | undefined
                allow?: string | undefined
                access?: string | undefined
                approvalRequired?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { appId: string; version: string } } & {
              query: {
                developerId: string
                name?: string | undefined
                type?: string | undefined
                model?: string | undefined
                customData?: string | undefined
                attributes?: string | undefined
                restrict?: string | undefined
                allow?: string | undefined
                access?: string | undefined
                approvalRequired?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { appId: string; version: string } } & {
              query: {
                developerId: string
                name?: string | undefined
                type?: string | undefined
                model?: string | undefined
                customData?: string | undefined
                attributes?: string | undefined
                restrict?: string | undefined
                allow?: string | undefined
                access?: string | undefined
                approvalRequired?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 409
          }
        | {
            input: { param: { appId: string; version: string } } & {
              query: {
                developerId: string
                name?: string | undefined
                type?: string | undefined
                model?: string | undefined
                customData?: string | undefined
                attributes?: string | undefined
                restrict?: string | undefined
                allow?: string | undefined
                access?: string | undefined
                approvalRequired?: string | undefined
              }
            }
            output: AppVersion
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/apps/:appId/versions/:version/status': {
      $post:
        | {
            input: { param: { appId: string; version: number } } & {
              query: {
                developerId?: string | undefined
                status?: 'inReview' | 'approved' | 'suspended' | 'rejected' | undefined
                modifiedBy?: 'developer' | 'administrator' | undefined
                reason?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { appId: string; version: number } } & {
              query: {
                developerId?: string | undefined
                status?: 'inReview' | 'approved' | 'suspended' | 'rejected' | undefined
                modifiedBy?: 'developer' | 'administrator' | undefined
                reason?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { appId: string; version: number } } & {
              query: {
                developerId?: string | undefined
                status?: 'inReview' | 'approved' | 'suspended' | 'rejected' | undefined
                modifiedBy?: 'developer' | 'administrator' | undefined
                reason?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 412
          }
    }
  } & {
    '/custom-gateway/payment/:ownershipId': {
      $post:
        | {
            input: { param: { ownershipId: string } } & {
              query: {
                amount: number
                date?: bigint | undefined
                feeAmount?: number | undefined
                marketplaceAmount?: number | undefined
                developerAmount?: number | undefined
                customData?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { ownershipId: string } } & {
              query: {
                amount: number
                date?: bigint | undefined
                feeAmount?: number | undefined
                marketplaceAmount?: number | undefined
                developerAmount?: number | undefined
                customData?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 412
          }
        | {
            input: { param: { ownershipId: string } } & {
              query: {
                amount: number
                date?: bigint | undefined
                feeAmount?: number | undefined
                marketplaceAmount?: number | undefined
                developerAmount?: number | undefined
                customData?: string | undefined
              }
            }
            output: Transaction
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/custom-gateway/refund/:ownershipId': {
      $post:
        | {
            input: { param: { ownershipId: string } } & {
              query: {
                amount: number
                date?: bigint | undefined
                feeAmount?: number | undefined
                marketplaceAmount?: number | undefined
                developerAmount?: number | undefined
                customData?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { ownershipId: string } } & {
              query: {
                amount: number
                date?: bigint | undefined
                feeAmount?: number | undefined
                marketplaceAmount?: number | undefined
                developerAmount?: number | undefined
                customData?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 412
          }
        | {
            input: { param: { ownershipId: string } } & {
              query: {
                amount: number
                date?: bigint | undefined
                feeAmount?: number | undefined
                marketplaceAmount?: number | undefined
                developerAmount?: number | undefined
                customData?: string | undefined
              }
            }
            output: Transaction
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/developerAccounts': {
      $get:
        | {
            input: {
              query: {
                query?: string | undefined
                sort?: string | undefined
                pageNumber?: number | undefined
                limit?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                query?: string | undefined
                sort?: string | undefined
                pageNumber?: number | undefined
                limit?: number | undefined
              }
            }
            output: DeveloperAccountPages
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/developerAccounts/:developerAccountId': {
      $delete:
        | {
            input: { param: { developerAccountId: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { developerAccountId: string } }
            output: {}
            outputFormat: string
            status: 200
          }
      $get:
        | {
            input: { param: { developerAccountId: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { developerAccountId: string } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { developerAccountId: string } }
            output: DeveloperAccount
            outputFormat: 'text'
            status: 200
          }
      $patch:
        | {
            input: { param: { developerAccountId: string } } & {
              query: {
                developerId: string
                email?: string | undefined
                name?: string | undefined
                customData?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { developerAccountId: string } } & {
              query: {
                developerId: string
                email?: string | undefined
                name?: string | undefined
                customData?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { developerAccountId: string } } & {
              query: {
                developerId: string
                email?: string | undefined
                name?: string | undefined
                customData?: string | undefined
              }
            }
            output: DeveloperAccount
            outputFormat: 'text'
            status: 200
          }
      $post:
        | {
            input: { param: { developerAccountId: string } } & {
              query: {
                developerId: string
                email?: string | undefined
                name?: string | undefined
                customData?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { developerAccountId: string } } & {
              query: {
                developerId: string
                email?: string | undefined
                name?: string | undefined
                customData?: string | undefined
              }
            }
            output: DeveloperAccount
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/developers': {
      $get:
        | {
            input: {
              query: {
                query?: string | undefined
                sort?: string | undefined
                pageNumber?: number | undefined
                limit?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                query?: string | undefined
                sort?: string | undefined
                pageNumber?: number | undefined
                limit?: number | undefined
              }
            }
            output: DeveloperPages
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/developers/:developerId': {
      $delete:
        | {
            input: { param: { developerId: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { developerId: string } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { developerId: string } }
            output: {}
            outputFormat: string
            status: 200
          }
      $get:
        | {
            input: { param: { developerId: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { developerId: string } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { developerId: string } }
            output: Developer
            outputFormat: 'text'
            status: 200
          }
      $patch:
        | {
            input: { param: { developerId: string } } & {
              query: {
                type?: string | undefined
                email?: string | undefined
                username?: string | undefined
                name?: string | undefined
                customData?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { developerId: string } } & {
              query: {
                type?: string | undefined
                email?: string | undefined
                username?: string | undefined
                name?: string | undefined
                customData?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { developerId: string } } & {
              query: {
                type?: string | undefined
                email?: string | undefined
                username?: string | undefined
                name?: string | undefined
                customData?: string | undefined
              }
            }
            output: Developer
            outputFormat: 'text'
            status: 200
          }
      $post:
        | {
            input: { param: { developerId: string } } & {
              query: {
                type?: string | undefined
                email?: string | undefined
                username?: string | undefined
                name?: string | undefined
                customData?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { developerId: string } } & {
              query: {
                type?: string | undefined
                email?: string | undefined
                username?: string | undefined
                name?: string | undefined
                customData?: string | undefined
              }
            }
            output: Developer
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/events/:eventId': {
      $get:
        | { input: { param: { eventId: string } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { eventId: string } }; output: {}; outputFormat: string; status: 404 }
        | {
            input: { param: { eventId: string } }
            output: Event
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/files': {
      $get:
        | {
            input: {
              query: {
                query?: string | undefined
                sort?: string | undefined
                pageNumber?: number | undefined
                limit?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                query?: string | undefined
                sort?: string | undefined
                pageNumber?: number | undefined
                limit?: number | undefined
              }
            }
            output: File2
            outputFormat: 'text'
            status: 200
          }
      $post:
        | {
            input: { query: { isPrivate?: boolean | undefined; hash?: string | undefined } } & {
              form: { file: File }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { query: { isPrivate?: boolean | undefined; hash?: string | undefined } } & {
              form: { file: File }
            }
            output: File2
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/files/byIdOrUrl': {
      $get:
        | {
            input: { query: { fileIdOrUrl: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { query: { fileIdOrUrl: string } }
            output: File2
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/files/download': {
      $get:
        | {
            input: { query: { fileId: string; validSeconds?: number | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { query: { fileId: string; validSeconds?: number | undefined } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { query: { fileId: string; validSeconds?: number | undefined } }
            output: FileDownload
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/files/url': {
      $post:
        | {
            input: { query: { url: string; isPrivate?: boolean | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { query: { url: string; isPrivate?: boolean | undefined } }
            output: File2
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/markets/this': {
      $get:
        | { input: {}; output: {}; outputFormat: string; status: 400 }
        | { input: {}; output: Market; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/ownership': {
      $get:
        | {
            input: {
              query: {
                query?: string | undefined
                sort?: string | undefined
                pageNumber?: number | undefined
                limit?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                query?: string | undefined
                sort?: string | undefined
                pageNumber?: number | undefined
                limit?: number | undefined
              }
            }
            output: OwnershipPages
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/ownership/install': {
      $post:
        | {
            input: {
              query: {
                appId: string
                userId: string
                modelId?: string | undefined
                model?: string | undefined
                customData?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                appId: string
                userId: string
                modelId?: string | undefined
                model?: string | undefined
                customData?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 402
          }
        | {
            input: {
              query: {
                appId: string
                userId: string
                modelId?: string | undefined
                model?: string | undefined
                customData?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: {
              query: {
                appId: string
                userId: string
                modelId?: string | undefined
                model?: string | undefined
                customData?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 409
          }
        | {
            input: {
              query: {
                appId: string
                userId: string
                modelId?: string | undefined
                model?: string | undefined
                customData?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 412
          }
        | {
            input: {
              query: {
                appId: string
                userId: string
                modelId?: string | undefined
                model?: string | undefined
                customData?: string | undefined
              }
            }
            output: Ownership
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/ownership/uninstall/:ownershipId': {
      $post:
        | {
            input: { param: { ownershipId: string } } & {
              query: {
                userId: string
                cancelOwnership?: boolean | undefined
                customData?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { ownershipId: string } } & {
              query: {
                userId: string
                cancelOwnership?: boolean | undefined
                customData?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { ownershipId: string } } & {
              query: {
                userId: string
                cancelOwnership?: boolean | undefined
                customData?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 409
          }
        | {
            input: { param: { ownershipId: string } } & {
              query: {
                userId: string
                cancelOwnership?: boolean | undefined
                customData?: string | undefined
              }
            }
            output: Ownership
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/ownership/:ownershipId': {
      $get:
        | {
            input: { param: { ownershipId: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { ownershipId: string } }
            output: Ownership
            outputFormat: 'text'
            status: 200
          }
      $patch:
        | {
            input: { param: { ownershipId: string } } & {
              query: { customData?: string | undefined; expires?: bigint | undefined }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { ownershipId: string } } & {
              query: { customData?: string | undefined; expires?: bigint | undefined }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { ownershipId: string } } & {
              query: { customData?: string | undefined; expires?: bigint | undefined }
            }
            output: Ownership
            outputFormat: 'text'
            status: 200
          }
      $post:
        | {
            input: { param: { ownershipId: string } } & {
              query: { customData?: string | undefined; expires?: bigint | undefined }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { ownershipId: string } } & {
              query: { customData?: string | undefined; expires?: bigint | undefined }
            }
            output: Ownership
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/permission/apps/:appId': {
      $delete:
        | {
            input: { param: { appId: string } } & { query: { userId: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { appId: string } } & { query: { userId: string } }
            output: {}
            outputFormat: string
            status: 404
          }
      $get:
        | {
            input: { param: { appId: string } } & { query: { userId: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { appId: string } } & { query: { userId: string } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { appId: string } } & { query: { userId: string } }
            output: Access
            outputFormat: 'text'
            status: 200
          }
      $post:
        | {
            input: { param: { appId: string } } & {
              query: { userId: string; date?: bigint | undefined; ip?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { appId: string } } & {
              query: { userId: string; date?: bigint | undefined; ip?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { appId: string } } & {
              query: { userId: string; date?: bigint | undefined; ip?: string | undefined }
            }
            output: Access
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/reviews': {
      $get:
        | {
            input: {
              query: {
                query?: string | undefined
                sort?: string | undefined
                pageNumber?: number | undefined
                limit?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                query?: string | undefined
                sort?: string | undefined
                pageNumber?: number | undefined
                limit?: number | undefined
              }
            }
            output: ReviewPages
            outputFormat: 'text'
            status: 200
          }
      $post:
        | {
            input: {
              query: {
                appId: string
                userId: string
                userAccountId?: string | undefined
                headline: string
                rating: number
                description: string
                type?: string | undefined
                mustOwnApp?: boolean | undefined
                autoApprove?: boolean | undefined
                customData?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                appId: string
                userId: string
                userAccountId?: string | undefined
                headline: string
                rating: number
                description: string
                type?: string | undefined
                mustOwnApp?: boolean | undefined
                autoApprove?: boolean | undefined
                customData?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                appId: string
                userId: string
                userAccountId?: string | undefined
                headline: string
                rating: number
                description: string
                type?: string | undefined
                mustOwnApp?: boolean | undefined
                autoApprove?: boolean | undefined
                customData?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 409
          }
        | {
            input: {
              query: {
                appId: string
                userId: string
                userAccountId?: string | undefined
                headline: string
                rating: number
                description: string
                type?: string | undefined
                mustOwnApp?: boolean | undefined
                autoApprove?: boolean | undefined
                customData?: string | undefined
              }
            }
            output: Review
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/reviews/:reviewId': {
      $delete: {
        input: { param: { reviewId: string } } & {
          query: { userId: string; userAccountId?: string | undefined }
        }
        output: {}
        outputFormat: string
        status: 400
      }
      $get:
        | { input: { param: { reviewId: string } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { reviewId: string } }; output: {}; outputFormat: string; status: 404 }
        | {
            input: { param: { reviewId: string } }
            output: Review
            outputFormat: 'text'
            status: 200
          }
      $patch:
        | {
            input: { param: { reviewId: string } } & {
              query: {
                userId: string
                userAccountId?: string | undefined
                headline?: string | undefined
                rating?: number | undefined
                description?: string | undefined
                customData?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { reviewId: string } } & {
              query: {
                userId: string
                userAccountId?: string | undefined
                headline?: string | undefined
                rating?: number | undefined
                description?: string | undefined
                customData?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { reviewId: string } } & {
              query: {
                userId: string
                userAccountId?: string | undefined
                headline?: string | undefined
                rating?: number | undefined
                description?: string | undefined
                customData?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { reviewId: string } } & {
              query: {
                userId: string
                userAccountId?: string | undefined
                headline?: string | undefined
                rating?: number | undefined
                description?: string | undefined
                customData?: string | undefined
              }
            }
            output: Review
            outputFormat: 'text'
            status: 200
          }
      $post:
        | {
            input: { param: { reviewId: string } } & {
              query: {
                userId: string
                userAccountId: string
                headline: string
                rating: number
                description: string
                customData?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { reviewId: string } } & {
              query: {
                userId: string
                userAccountId: string
                headline: string
                rating: number
                description: string
                customData?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { reviewId: string } } & {
              query: {
                userId: string
                userAccountId: string
                headline: string
                rating: number
                description: string
                customData?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { reviewId: string } } & {
              query: {
                userId: string
                userAccountId: string
                headline: string
                rating: number
                description: string
                customData?: string | undefined
              }
            }
            output: Review
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/stats/increment/:field': {
      $post: {
        input: { param: { field: string } } & {
          query: {
            appId: string
            userId?: string | undefined
            value?: number | undefined
            date?: bigint | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/stats/series/:period/:fields': {
      $get: {
        input: { param: { period: 'day' | 'month'; fields: string } } & {
          query: {
            start?: bigint | undefined
            end?: bigint | undefined
            query?: string | undefined
          }
        }
        output: { [x: string]: unknown }[][]
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/stats/total': {
      $get: {
        input: {
          query: {
            fields: string
            query?: string | undefined
            start?: bigint | undefined
            end?: bigint | undefined
          }
        }
        output: Total
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/stripe-gateway/developer/:developerId/accounts': {
      $get:
        | {
            input: { param: { developerId: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { developerId: string } }
            output: {}
            outputFormat: string
            status: 412
          }
        | {
            input: { param: { developerId: string } }
            output: Accounts
            outputFormat: 'text'
            status: 200
          }
      $post:
        | {
            input: { param: { developerId: string } } & { query: { redirectUrl: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { developerId: string } } & { query: { redirectUrl: string } }
            output: {}
            outputFormat: string
            status: 412
          }
        | {
            input: { param: { developerId: string } } & { query: { redirectUrl: string } }
            output: DeveloperToken
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/stripe-gateway/developer/:developerId/accounts/:stripeId': {
      $delete:
        | {
            input: { param: { developerId: string; stripeId: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { developerId: string; stripeId: string } }
            output: {}
            outputFormat: string
            status: 412
          }
        | {
            input: { param: { developerId: string; stripeId: string } }
            output: Accounts
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/stripe-gateway/user/:userId/cards': {
      $get:
        | { input: { param: { userId: string } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { userId: string } }; output: {}; outputFormat: string; status: 412 }
        | { input: { param: { userId: string } }; output: Cards; outputFormat: 'text'; status: 200 }
      $post:
        | {
            input: { param: { userId: string } } & {
              query: { token: string; isDefault?: boolean | undefined }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { userId: string } } & {
              query: { token: string; isDefault?: boolean | undefined }
            }
            output: {}
            outputFormat: string
            status: 412
          }
        | {
            input: { param: { userId: string } } & {
              query: { token: string; isDefault?: boolean | undefined }
            }
            output: Cards
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/stripe-gateway/user/:userId/cards/:cardId': {
      $delete:
        | {
            input: { param: { userId: string; cardId: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { userId: string; cardId: string } }
            output: {}
            outputFormat: string
            status: 412
          }
        | {
            input: { param: { userId: string; cardId: string } }
            output: Cards
            outputFormat: 'text'
            status: 200
          }
      $post:
        | {
            input: { param: { userId: string; cardId: string } } & {
              query: {
                isDefault?: boolean | undefined
                address_city?: string | undefined
                address_country?: string | undefined
                address_line1?: string | undefined
                address_line2?: string | undefined
                address_state?: string | undefined
                address_zip?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { userId: string; cardId: string } } & {
              query: {
                isDefault?: boolean | undefined
                address_city?: string | undefined
                address_country?: string | undefined
                address_line1?: string | undefined
                address_line2?: string | undefined
                address_state?: string | undefined
                address_zip?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 412
          }
        | {
            input: { param: { userId: string; cardId: string } } & {
              query: {
                isDefault?: boolean | undefined
                address_city?: string | undefined
                address_country?: string | undefined
                address_line1?: string | undefined
                address_line2?: string | undefined
                address_state?: string | undefined
                address_zip?: string | undefined
              }
            }
            output: Cards
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/transactions': {
      $get:
        | {
            input: {
              query: {
                query?: string | undefined
                sort?: string | undefined
                pageNumber?: number | undefined
                limit?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                query?: string | undefined
                sort?: string | undefined
                pageNumber?: number | undefined
                limit?: number | undefined
              }
            }
            output: TransactionPages
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/transactions/:transactionId': {
      $delete: {
        input: { param: { transactionId: string } }
        output: {}
        outputFormat: string
        status: 400
      }
      $get: {
        input: { param: { transactionId: string } }
        output: {}
        outputFormat: string
        status: 400
      }
      $post:
        | {
            input: { param: { transactionId: string } } & {
              query: { customData?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { transactionId: string } } & {
              query: { customData?: string | undefined }
            }
            output: Transaction
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/userAccounts': {
      $get:
        | {
            input: {
              query: {
                query?: string | undefined
                sort?: string | undefined
                pageNumber?: number | undefined
                limit?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                query?: string | undefined
                sort?: string | undefined
                pageNumber?: number | undefined
                limit?: number | undefined
              }
            }
            output: UserAccountPages
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/userAccounts/:userAccountId': {
      $delete:
        | {
            input: { param: { userAccountId: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { userAccountId: string } }
            output: {}
            outputFormat: string
            status: 200
          }
      $get:
        | {
            input: { param: { userAccountId: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { userAccountId: string } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { userAccountId: string } }
            output: UserAccount
            outputFormat: 'text'
            status: 200
          }
      $patch:
        | {
            input: { param: { userAccountId: string } } & {
              query: {
                userId: string
                email?: string | undefined
                name?: string | undefined
                customData?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { userAccountId: string } } & {
              query: {
                userId: string
                email?: string | undefined
                name?: string | undefined
                customData?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { userAccountId: string } } & {
              query: {
                userId: string
                email?: string | undefined
                name?: string | undefined
                customData?: string | undefined
              }
            }
            output: UserAccount
            outputFormat: 'text'
            status: 200
          }
      $post:
        | {
            input: { param: { userAccountId: string } } & {
              query: {
                userId: string
                email?: string | undefined
                name?: string | undefined
                customData?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { userAccountId: string } } & {
              query: {
                userId: string
                email?: string | undefined
                name?: string | undefined
                customData?: string | undefined
              }
            }
            output: UserAccount
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/users': {
      $get:
        | {
            input: {
              query: {
                query?: string | undefined
                sort?: string | undefined
                pageNumber?: number | undefined
                limit?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                query?: string | undefined
                sort?: string | undefined
                pageNumber?: number | undefined
                limit?: number | undefined
              }
            }
            output: UserPages
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/users/:userId': {
      $delete:
        | { input: { param: { userId: string } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { userId: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { userId: string } }; output: {}; outputFormat: string; status: 200 }
      $get:
        | { input: { param: { userId: string } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { userId: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { userId: string } }; output: User; outputFormat: 'text'; status: 200 }
      $patch:
        | {
            input: { param: { userId: string } } & {
              query: {
                type?: string | undefined
                email?: string | undefined
                username?: string | undefined
                name?: string | undefined
                customData?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { userId: string } } & {
              query: {
                type?: string | undefined
                email?: string | undefined
                username?: string | undefined
                name?: string | undefined
                customData?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { userId: string } } & {
              query: {
                type?: string | undefined
                email?: string | undefined
                username?: string | undefined
                name?: string | undefined
                customData?: string | undefined
              }
            }
            output: User
            outputFormat: 'text'
            status: 200
          }
      $post:
        | {
            input: { param: { userId: string } } & {
              query: {
                type?: string | undefined
                email?: string | undefined
                username?: string | undefined
                name?: string | undefined
                customData?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { userId: string } } & {
              query: {
                type?: string | undefined
                email?: string | undefined
                username?: string | undefined
                name?: string | undefined
                customData?: string | undefined
              }
            }
            output: User
            outputFormat: 'text'
            status: 200
          }
    }
  },
  '/'
>
export default routes
