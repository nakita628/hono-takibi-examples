type ErrorModel = { code?: string | undefined; message: string }
type GetSsoToken = { token: string }
type Inviteuser = {
  all_features_access: true | false
  email: string
  privileges: {
    feature?:
      | 'email_campaigns'
      | 'sms_campaigns'
      | 'contacts'
      | 'templates'
      | 'workflows'
      | 'landing_pages'
      | 'transactional_emails'
      | 'smtp_api'
      | 'user_management'
      | 'sales_platform'
      | 'phone'
      | 'conversations'
      | 'senders_domains_dedicated_ips'
      | 'push_notifications'
      | 'companies'
      | undefined
    permissions?:
      | (
          | 'create_edit_delete'
          | 'send_schedule_suspend'
          | 'view'
          | 'import'
          | 'export'
          | 'list_and_attributes'
          | 'forms'
          | 'activate_deactivate'
          | 'activate_deactivate_pause'
          | 'settings'
          | 'schedule_pause'
          | 'all'
          | 'logs'
          | 'access'
          | 'assign'
          | 'configure'
          | 'create_edit_deals'
          | 'delete_deals'
          | 'manage_others_deals_tasks'
          | 'manage_owned_companies'
          | 'manage_others_companies'
          | 'reports'
          | 'senders_management'
          | 'domains_management'
          | 'dedicated_ips_management'
          | 'send'
          | 'smtp'
          | 'api_keys'
          | 'authorized_ips'
          | 'none'
        )[]
      | undefined
  }[]
}
type GetWebhook = {
  auth?: { [x: string]: unknown } | undefined
  batched?: boolean | undefined
  createdAt: string
  description: string
  events: string[]
  headers?: { [x: string]: unknown }[] | undefined
  id: bigint
  modifiedAt: string
  type: 'marketing' | 'transactional' | 'inbound'
  domain?: string | undefined
  url: string
}
type ConsentGroupItem = { id: bigint; status: 'subscribed' | 'unsubscribed' }
type GetContacts = {
  contacts: {
    attributes: { [x: string]: unknown }
    createdAt: string
    email?: string | undefined
    emailBlacklisted: boolean
    id: bigint
    listIds: bigint[]
    listUnsubscribed?: bigint[] | undefined
    modifiedAt: string
    smsBlacklisted: boolean
    whatsappBlacklisted: boolean
    consentGroups?: ConsentGroupItem[] | undefined
  }[]
  count: bigint
}
type ContactErrorModel = {
  code:
    | 'invalid_parameter'
    | 'missing_parameter'
    | 'document_not_found'
    | 'account_in_process'
    | 'duplicate_parameter'
    | 'method_not_allowed'
    | 'out_of_range'
  message: string
  metadata?: { [x: string]: unknown } | undefined
}
type CreateUpdateFolder = { name?: string | undefined }
type GetFolder = {
  id: bigint
  name: string
  totalBlacklisted: bigint
  totalSubscribers: bigint
  uniqueSubscribers: bigint
}
type GetCampaignStats = {
  appleMppOpens: bigint
  clickers: bigint
  complaints: bigint
  deferred?: bigint | undefined
  delivered: bigint
  estimatedViews?: bigint | undefined
  hardBounces: bigint
  listId?: bigint | undefined
  opensRate: number
  returnBounce?: bigint | undefined
  sent: bigint
  softBounces: bigint
  trackableViews: bigint
  trackableViewsRate?: number | undefined
  uniqueClicks: bigint
  uniqueViews: bigint
  unsubscriptions: bigint
  viewed: bigint
}
type PostContactInfo = {
  contacts: {
    failure?: string[] | bigint[] | undefined
    processId?: bigint | undefined
    success?: string[] | bigint[] | undefined
    total?: bigint | undefined
  }
}
type ConsentGroup = {
  id: bigint
  name: string
  description?: string | undefined
  signupMode: 'manual' | 'automatic'
  contactsCount: bigint
  isDefault: boolean
  createdAt: string
  updatedAt: string
}
type ConsentGroupsListResponse = {
  consentGroups: ConsentGroup[]
  total: bigint
  limit: bigint
  offset: bigint
}
type CreateConsentGroupRequest = {
  name: string
  description?: string | undefined
  signupMode: 'manual' | 'automatic'
  listIds?: bigint[] | undefined
}
type UpdateConsentGroupRequest = {
  name?: string | undefined
  description?: string | undefined
  signupMode?: 'manual' | 'automatic' | undefined
}
type ConversationsMessage = {
  agentId?: string | undefined
  agentName?: string | undefined
  agentUserpic?: string | undefined
  attachments?:
    | {
        name?: string | undefined
        link?: string | undefined
        mimeType?: string | undefined
        isImage?: boolean | undefined
        isSticker?: boolean | undefined
        isInline?: boolean | undefined
        inlineId?: string | undefined
        size?: bigint | undefined
        imageInfo?:
          | {
              width?: bigint | undefined
              height?: bigint | undefined
              previewLink?: string | undefined
            }
          | undefined
        isAllowedFileType?: boolean | undefined
      }[]
    | undefined
  bcc?: { email?: string | undefined; name?: string | undefined }[] | undefined
  cc?: { email?: string | undefined; name?: string | undefined }[] | undefined
  createdAt?: bigint | undefined
  file?:
    | {
        name?: string | undefined
        link?: string | undefined
        mimeType?: string | undefined
        isImage?: boolean | undefined
        isSticker?: boolean | undefined
        isInline?: boolean | undefined
        inlineId?: string | undefined
        size?: bigint | undefined
        imageInfo?:
          | {
              width?: bigint | undefined
              height?: bigint | undefined
              previewLink?: string | undefined
            }
          | undefined
        isAllowedFileType?: boolean | undefined
      }
    | undefined
  forwardedToSourceStatus?:
    | { error?: string | undefined; isSuccess?: boolean | undefined }
    | undefined
  from?: { email?: string | undefined; name?: string | undefined } | undefined
  html?: string | undefined
  id?: string | undefined
  integrations?: { [x: string]: unknown } | undefined
  isBot?: boolean | undefined
  isMissed?: boolean | undefined
  isMissedByVisitor?: boolean | undefined
  isPushed?: boolean | undefined
  isTrigger?: boolean | undefined
  rawUnsafeHtml?: string | undefined
  receivedFrom?: string | undefined
  replyTo?: { email?: string | undefined; name?: string | undefined } | undefined
  sourceMessageId?: string | undefined
  subject?: string | undefined
  text?: string | undefined
  to?: { email?: string | undefined; name?: string | undefined }[] | undefined
  type?: 'agent' | 'visitor' | undefined
  isSentViaJsApi?: boolean | undefined
  messageType?: string | undefined
  isForward?: boolean | undefined
  source?: { [x: string]: unknown } | undefined
  visitorId?: string | undefined
}
type GetCategoryDetails = {
  createdAt: string
  id: string
  isDeleted: boolean
  modifiedAt: string
  name: string
  url?: string | undefined
}
type GetCouponCollection = {
  createdAt: string
  defaultCoupon: string
  expirationDate?: string | undefined
  id: string
  name: string
  remainingCoupons: bigint
  remainingCouponsAlert?: number | undefined
  remainingDaysAlert?: number | undefined
  totalCoupons: bigint
}
type ConversionSourceMetrics = {
  averageBasket: number
  conversionSource:
    | 'email_campaign'
    | 'sms_campaign'
    | 'automation_workflow_email'
    | 'automation_workflow_sms'
  id: number
  ordersCount: number
  revenue: number
}
type Order = {
  amount: number
  billing?:
    | {
        address?: string | undefined
        city?: string | undefined
        country?: string | undefined
        countryCode?: string | undefined
        paymentMethod?: string | undefined
        phone?: string | undefined
        postCode?: string | undefined
        region?: string | undefined
      }
    | undefined
  coupons?: string[] | undefined
  createdAt: string
  id: string
  identifiers?:
    | {
        email_id?: string | undefined
        ext_id?: string | undefined
        loyalty_subscription_id?: string | undefined
        phone_id?: string | undefined
      }
    | undefined
  metaInfo?: { [x: string]: string | number | boolean } | undefined
  products: {
    price: number
    productId: string
    variantId?: string | undefined
    quantity?: number | undefined
    quantityFloat?: number | undefined
  }[]
  status: string
  storeId?: string | undefined
  updatedAt: string
}
type Cart = { currency: 'EUR'; specificAmount: bigint }
type Configuration = { customSuccessUrl: string }
type Notification = { channel: 'email'; text: string }
type GetProductDetails = {
  brand?: string | undefined
  categories?: string[] | undefined
  createdAt: string
  description?: string | undefined
  id: string
  imageUrl?: string | undefined
  isDeleted?: boolean | undefined
  metaInfo?: { [x: string]: unknown } | undefined
  modifiedAt: string
  name: string
  parentId?: string | undefined
  price?: number | undefined
  alternativePrice?: number | undefined
  s3Original?: string | undefined
  s3ThumbAnalytics: string
  s3ThumbEditor: string
  sku?: string | undefined
  stock?: number | undefined
  url?: string | undefined
}
type GetEventsList = {
  events?:
    | {
        contact_id?: bigint | undefined
        event_date?: string | undefined
        event_name?: string | undefined
        event_filter_id?: string | undefined
        object_type?: string | undefined
        event_properties?: { [x: string]: unknown } | undefined
        contact_properties?: { [x: string]: unknown } | undefined
      }[]
    | undefined
  count: bigint
}
type BatchAcceptedResponse = { message: string; count: number }
type BatchEventsResponse = {
  status: string
  total_events: number
  successful_events: number
  failed_events: number
  errors: { eventIndex?: number[] | undefined; message?: string | undefined }[]
}
type BalanceDefinition = {
  id?: string | undefined
  name?: string | undefined
  description?: string | undefined
  imageRef?: string | undefined
  meta?: { [x: string]: { [x: string]: unknown } } | undefined
  unit?:
    | 'POINTS'
    | 'EUR'
    | 'USD'
    | 'MXN'
    | 'GBP'
    | 'INR'
    | 'CAD'
    | 'SGD'
    | 'RON'
    | 'JPY'
    | 'MYR'
    | 'CLP'
    | 'PEN'
    | 'MAD'
    | 'AUD'
    | 'CHF'
    | 'BRL'
    | undefined
  minAmount?: number | undefined
  maxAmount?: number | undefined
  maxCreditAmountLimit?: number | undefined
  maxDebitAmountLimit?: number | undefined
  balanceOptionAmountOvertakingStrategy?: 'strict' | 'partial' | undefined
  balanceOptionCreditRounding?: 'lower' | 'upper' | 'natural' | undefined
  balanceOptionDebitRounding?: 'lower' | 'upper' | 'natural' | undefined
  balanceAvailabilityDurationValue?: number | undefined
  balanceAvailabilityDurationUnit?: 'day' | 'week' | 'month' | 'year' | undefined
  balanceAvailabilityDurationModifier?:
    | 'noModification'
    | 'startOfPeriod'
    | 'endOfPeriod'
    | undefined
  balanceExpirationDate?: string | undefined
  createdAt?: string | undefined
  updatedAt?: string | undefined
  deletedAt?: string | undefined
}
type BalanceLimit = {
  id?: string | undefined
  balanceDefinitionId?: string | undefined
  transactionType?: 'credit' | 'debit' | undefined
  constraintType?: 'transaction' | 'amount' | undefined
  durationValue?: number | undefined
  durationUnit?: 'hour' | 'day' | 'week' | 'month' | 'year' | undefined
  value?: number | undefined
  slidingSchedule?: boolean | undefined
  createdAt?: string | undefined
  updatedAt?: string | undefined
}
type Transaction = {
  id?: string | undefined
  amount?: number | undefined
  balance?: number | undefined
  transactionType?: 'credit' | 'debit' | undefined
  meta?: { [x: string]: unknown } | undefined
  status?: 'draft' | 'completed' | 'rejected' | 'cancelled' | 'expired' | undefined
  loyaltyProgramId?: string | undefined
  balanceDefinitionId?: string | undefined
  contactId?: bigint | undefined
  eventTime?: string | undefined
  rejectReason?: string | undefined
  rejectedAt?: string | undefined
  expirationDate?: string | undefined
  completedAt?: string | undefined
  cancelledAt?: string | undefined
  createdAt?: string | undefined
  updatedAt?: string | undefined
}
type LoyaltyProgram = {
  id?: string | undefined
  name?: string | undefined
  description?: string | undefined
  meta?: { [x: string]: { [x: string]: unknown } } | undefined
  state?: 'inactive' | 'active' | 'draft' | undefined
  subscriptionPoolId?: string | undefined
  subscriptionGeneratorId?: string | undefined
  pattern?: string | undefined
  codeCount?: bigint | undefined
  documentId?: string | undefined
  birthdayAttribute?: string | undefined
  createdAt?: string | undefined
  updatedAt?: string | undefined
}
type Redeem = {
  cancelledAt?: string | undefined
  completedAt?: string | undefined
  contactId?: bigint | undefined
  createdAt?: string | undefined
  debitTransactionId?: string | undefined
  expiresAt?: string | undefined
  id?: string | undefined
  loyaltyProgramId?: string | undefined
  meta?: { [x: string]: { [x: string]: unknown } } | undefined
  rejectReason?: string | undefined
  rejectedAt?: string | undefined
  rewardAttributionId?: string | undefined
  status?: string | undefined
  updatedAt?: string | undefined
}
type NodeResponse = {
  args?: NodeResponse[] | undefined
  array?: NodeResponse[] | undefined
  boolean?: boolean | undefined
  description?: string | undefined
  float?: number | undefined
  int?: bigint | undefined
  op?: string | undefined
  string?: string | undefined
}
type ValueResponse = {
  array?: ValueResponse[] | undefined
  boolean?: boolean | undefined
  contactProperty?: string | undefined
  date?: string | undefined
  eventProperty?: string | undefined
  expression?:
    | {
        args?: NodeResponse[] | undefined
        array?: NodeResponse[] | undefined
        boolean?: boolean | undefined
        description?: string | undefined
        float?: number | undefined
        int?: bigint | undefined
        op?: string | undefined
        string?: string | undefined
      }
    | undefined
  number?: number | undefined
  string?: string | undefined
}
type RuleConditionResponse = {
  and?: RuleConditionResponse[] | undefined
  lhs?:
    | {
        array?: ValueResponse[] | undefined
        boolean?: boolean | undefined
        contactProperty?: string | undefined
        date?: string | undefined
        eventProperty?: string | undefined
        expression?:
          | {
              args?: NodeResponse[] | undefined
              array?: NodeResponse[] | undefined
              boolean?: boolean | undefined
              description?: string | undefined
              float?: number | undefined
              int?: bigint | undefined
              op?: string | undefined
              string?: string | undefined
            }
          | undefined
        number?: number | undefined
        string?: string | undefined
      }
    | undefined
  op?: string | undefined
  or?: RuleConditionResponse[] | undefined
  rhs?:
    | {
        array?: ValueResponse[] | undefined
        boolean?: boolean | undefined
        contactProperty?: string | undefined
        date?: string | undefined
        eventProperty?: string | undefined
        expression?:
          | {
              args?: NodeResponse[] | undefined
              array?: NodeResponse[] | undefined
              boolean?: boolean | undefined
              description?: string | undefined
              float?: number | undefined
              int?: bigint | undefined
              op?: string | undefined
              string?: string | undefined
            }
          | undefined
        number?: number | undefined
        string?: string | undefined
      }
    | undefined
}
type TierGroup = {
  createdAt?: string | undefined
  downgradeStrategy?: 'real_time' | 'membership_anniversary' | 'tier_anniversary' | undefined
  id?: string | undefined
  loyaltyProgramId?: string | undefined
  name?: string | undefined
  tierOrder?: string[] | undefined
  updatedAt?: string | undefined
  upgradeStrategy?: 'real_time' | 'membership_anniversary' | 'tier_anniversary' | undefined
  upgradeSchedule?:
    | {
        strategy?: string | undefined
        durationValue?: number | undefined
        durationUnit?: 'day' | 'week' | 'month' | 'year' | undefined
        durationModifier?: 'start_of_period' | 'end_of_period' | undefined
        scheduledDate?: string | undefined
      }
    | undefined
  downgradeSchedule?:
    | {
        strategy?: string | undefined
        durationValue?: number | undefined
        durationUnit?: 'day' | 'week' | 'month' | 'year' | undefined
        durationModifier?: 'start_of_period' | 'end_of_period' | undefined
        scheduledDate?: string | undefined
      }
    | undefined
}
type Tier = {
  accessConditions?:
    | {
        balanceDefinitionId?: string | undefined
        createdAt?: string | undefined
        minimumValue?: number | undefined
        updatedAt?: string | undefined
      }[]
    | undefined
  createdAt?: string | undefined
  groupId?: string | undefined
  imageRef?: string | undefined
  loyaltyProgramId?: string | undefined
  name?: string | undefined
  tierId?: string | undefined
  tierRewards?:
    | {
        createdAt?: string | undefined
        rewardId?: string | undefined
        updatedAt?: string | undefined
      }[]
    | undefined
  updatedAt?: string | undefined
}
type WalletPassInstallUrl = { url: string }
type WalletPassRedeemRequest = {
  amountSpent?: number | undefined
  customData?: { [x: string]: { [x: string]: unknown } } | undefined
  eventTag?: string | undefined
  location?: string | undefined
}
type WalletPassRedeemResponse = { message: string; success: boolean }
type GetDeviceBrowserStats = {
  clickers: bigint
  uniqueClicks: bigint
  uniqueViews: bigint
  viewed: bigint
}
type AbTestVersionClicks = { clickRate: string; clicksCount: bigint; link: string }[]
type AbTestVersionStats = { 'Version A': string; 'Version B': string }
type SendReport = {
  email: { body: string; to: string[] }
  language?: 'fr' | 'es' | 'pt' | 'it' | 'de' | 'en' | undefined
}
type SendTestEmail = { emailTo?: string[] | undefined }
type PostSendFailed = {
  blackListedEmails?: string[] | undefined
  code: string
  message: string
  unexistingEmails?: string[] | undefined
  withoutListEmails?: string[] | undefined
}
type UpdateCampaignStatus = {
  status?:
    | 'suspended'
    | 'archive'
    | 'darchive'
    | 'sent'
    | 'queued'
    | 'replicate'
    | 'replicateTemplate'
    | 'cancel'
    | 'draft'
    | undefined
}
type WhatsappCampStats = {
  delivered: number
  notSent: number
  read: number
  sent: number
  unsubscribe: number
}
type VariablesItems = {
  datatype?: string | undefined
  default?: string | undefined
  name?: string | undefined
}
type Company = {
  attributes?: { [x: string]: unknown } | undefined
  id?: string | undefined
  linkedContactsIds?: number[] | undefined
  linkedDealsIds?: string[] | undefined
}
type Deal = {
  id?: string | undefined
  attributes?: { [x: string]: unknown } | undefined
  linkedContactsIds?: number[] | undefined
  linkedCompaniesIds?: string[] | undefined
}
type FileData = {
  id?: string | undefined
  name?: string | undefined
  authorId?: string | undefined
  contactId?: bigint | undefined
  dealId?: string | undefined
  companyId?: string | undefined
  size?: bigint | undefined
  createdAt?: string | undefined
}
type Note = {
  id?: string | undefined
  text: string
  contactIds?: number[] | undefined
  companyIds?: string[] | undefined
  dealIds?: string[] | undefined
  authorId?: { [x: string]: unknown } | undefined
  createdAt?: string | undefined
  updatedAt?: string | undefined
}
type NoteData = {
  companyIds?: string[] | undefined
  contactIds?: number[] | undefined
  dealIds?: string[] | undefined
  text: string
}
type Pipeline = {
  pipeline?: string | undefined
  pipeline_name?: string | undefined
  stages?: { id?: string | undefined; name?: string | undefined }[] | undefined
}
type Pipelines = Pipeline[]
type Task = {
  id?: string | undefined
  taskTypeId: string
  name: string
  companiesIds?: string[] | undefined
  dealsIds?: string[] | undefined
  contactsIds?: number[] | undefined
  assignToId?: string | undefined
  date: string
  notes?: string | undefined
  done?: boolean | undefined
  createdAt?: string | undefined
  updatedAt?: string | undefined
}
type TaskReminder = {
  types: ('email' | 'push')[]
  unit: 'minutes' | 'hours' | 'weeks' | 'days'
  value: number
}
type GetSmtpTemplateOverview = {
  createdAt: string
  doiTemplate?: boolean | undefined
  htmlContent: string
  id: bigint
  isActive: boolean
  modifiedAt: string
  name: string
  replyTo: string
  sender: { email?: string | undefined; id?: string | undefined; name?: string | undefined }
  subject: string
  tag: string
  testSent: boolean
  toField: string
  customTemplateId?: string | undefined
}
type SendTransacSms = {
  organisationPrefix?: string | undefined
  recipient: string
  sender: string
  tag?: string | string[] | undefined
  type?: 'transactional' | 'marketing' | undefined
  unicodeEnabled?: boolean | undefined
  webUrl?: string | undefined
  params?: { [x: string]: { [x: string]: unknown } } | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/account': {
      $get:
        | {
            input: {}
            output: {
              organization_id: string
              user_id: number
              enterprise: boolean
              companyName: string
              email: string
              firstName: string
              lastName: string
              address?:
                | { city: string; country: string; street: string; zipCode: string }
                | undefined
              marketingAutomation?: { enabled: boolean; key?: string | undefined } | undefined
              plan: {
                credits: number
                creditsType: 'sendLimit'
                endDate?: string | undefined
                startDate?: string | undefined
                type: 'payAsYouGo' | 'free' | 'subscription' | 'sms'
              }[]
              planVerticals?:
                | {
                    planCategory: 'Marketing' | 'Chat' | 'CRM'
                    planType: string
                    name: string
                    status: 'active' | 'inactive'
                    startDate?: string | undefined
                    endDate?: string | undefined
                    users?: { purchasedSeats: string; usedSeats: string } | undefined
                    credits?: string | undefined
                  }[]
                | undefined
              relay: { data: { port: number; relay: string; userName: string }; enabled: boolean }
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {}
            output: {
              code:
                | 'invalid_parameter'
                | 'missing_parameter'
                | 'out_of_range'
                | 'campaign_processing'
                | 'campaign_sent'
                | 'document_not_found'
                | 'not_enough_credits'
                | 'permission_denied'
                | 'duplicate_parameter'
                | 'duplicate_request'
                | 'method_not_allowed'
                | 'unauthorized'
                | 'account_under_validation'
                | 'not_acceptable'
                | 'bad_request'
                | 'unprocessable_entity'
                | 'Domain does not exist'
                | 'Contact email not found'
                | 'Attribute not found'
                | 'Category id not found'
                | 'Invalid parameters passed'
                | 'Record(s) for identifier not found'
                | 'Returned when query params are invalid'
                | 'Returned when invalid data posted'
                | 'Feed not found'
                | 'Campaign ID not found'
                | 'api-key not found'
                | 'DMARC policy requires domain authentication'
                | 'DNS records not properly configured'
                | 'Invalid OTP code provided'
                | 'OTP code has expired'
                | 'Domain already exists in your account'
                | 'The sum of all IP weights must equal 100'
                | 'Authentication failed'
                | 'Insufficient credits'
                | 'Request already processed'
              message: string
            }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/corporate/group': {
      $post:
        | {
            input: { json: { groupName: string; subAccountIds?: bigint[] | undefined } }
            output: { id?: string | undefined }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: { groupName: string; subAccountIds?: bigint[] | undefined } }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/corporate/group/unlink/:groupId/subAccounts': {
      $put: {
        input: { param: { groupId: string } } & { json: { subAccountIds: bigint[] } }
        output: ErrorModel
        outputFormat: 'json'
        status: 400
      }
    }
  } & {
    '/corporate/group/:id': {
      $delete:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { id: string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
      $get:
        | {
            input: { param: { id: string } }
            output: {
              group?:
                | {
                    createdAt?: string | undefined
                    groupName?: string | undefined
                    id?: string | undefined
                  }
                | undefined
              'sub-accounts'?:
                | {
                    companyName?: string | undefined
                    createdAt?: string | undefined
                    id?: bigint | undefined
                  }[]
                | undefined
              users?:
                | {
                    email?: string | undefined
                    firstName?: string | undefined
                    lastName?: string | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
      $put: {
        input: { param: { id: string } } & {
          json: { groupName?: string | undefined; subAccountIds?: bigint[] | undefined }
        }
        output: ErrorModel
        outputFormat: 'json'
        status: 400
      }
    }
  } & {
    '/corporate/groups': {
      $get:
        | {
            input: {}
            output: { groupName?: string | undefined; id?: string | undefined }[]
            outputFormat: 'json'
            status: 200
          }
        | { input: {}; output: ErrorModel; outputFormat: 'json'; status: 400 }
    }
  } & {
    '/corporate/invited/users': {
      $get:
        | {
            input: {
              query: {
                type?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: {
              users?:
                | {
                    email: string
                    feature_access: {
                      analytics?: string[] | undefined
                      api_keys?: string[] | undefined
                      apps_management?: string[] | undefined
                      create_sub_organizations?: string[] | undefined
                      manage_sub_organizations?: string[] | undefined
                      my_plan?: string[] | undefined
                      sub_organization_groups?: string[] | undefined
                      user_management?: string[] | undefined
                    }
                    groups: { id?: string | undefined; name?: string | undefined }
                    is_owner: string
                    status: string
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                type?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/corporate/ip': {
      $get:
        | {
            input: {}
            output: {
              domain?: string | undefined
              ip?: string | undefined
              transactional?: boolean | undefined
            }[]
            outputFormat: 'json'
            status: 200
          }
        | { input: {}; output: ErrorModel; outputFormat: 'json'; status: 400 }
    }
  } & {
    '/corporate/masterAccount': {
      $get:
        | {
            input: {}
            output: {
              billingInfo?:
                | {
                    address?:
                      | {
                          countryCode?: string | undefined
                          locality?: string | undefined
                          postalCode?: string | undefined
                          stateCode?: string | undefined
                          streetAddress?: string | undefined
                        }
                      | undefined
                    companyName?: string | undefined
                    email?: string | undefined
                    name?:
                      | { familyName?: string | undefined; givenName?: string | undefined }
                      | undefined
                  }
                | undefined
              companyName?: string | undefined
              currencyCode?: string | undefined
              email?: string | undefined
              id?: bigint | undefined
              planInfo?:
                | {
                    currencyCode?: string | undefined
                    features?:
                      | {
                          name?: string | undefined
                          quantity?: bigint | undefined
                          quantityWithOverages?: bigint | undefined
                          remaining?: bigint | undefined
                          unitValue?: string | undefined
                          used?: bigint | undefined
                          usedOverages?: bigint | undefined
                        }[]
                      | undefined
                    nextBillingAt?: bigint | undefined
                    planPeriod?: 'month' | 'year' | undefined
                    price?: number | undefined
                    subAccounts?: number | undefined
                  }
                | undefined
              timezone?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {}
            output: {
              code:
                | 'invalid_parameter'
                | 'missing_parameter'
                | 'out_of_range'
                | 'campaign_processing'
                | 'campaign_sent'
                | 'document_not_found'
                | 'not_enough_credits'
                | 'permission_denied'
                | 'duplicate_parameter'
                | 'duplicate_request'
                | 'method_not_allowed'
                | 'unauthorized'
                | 'account_under_validation'
                | 'not_acceptable'
                | 'bad_request'
                | 'unprocessable_entity'
                | 'Domain does not exist'
                | 'Contact email not found'
                | 'Attribute not found'
                | 'Category id not found'
                | 'Invalid parameters passed'
                | 'Record(s) for identifier not found'
                | 'Returned when query params are invalid'
                | 'Returned when invalid data posted'
                | 'Feed not found'
                | 'Campaign ID not found'
                | 'api-key not found'
                | 'DMARC policy requires domain authentication'
                | 'DNS records not properly configured'
                | 'Invalid OTP code provided'
                | 'OTP code has expired'
                | 'Domain already exists in your account'
                | 'The sum of all IP weights must equal 100'
                | 'Authentication failed'
                | 'Insufficient credits'
                | 'Request already processed'
              message: string
            }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/corporate/ssoToken': {
      $post:
        | {
            input: { json: { email: string } }
            output: GetSsoToken
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { email: string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: { email: string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/corporate/subAccount': {
      $get:
        | {
            input: { query: { offset: number; limit: number } }
            output: {
              count?: number | undefined
              subAccounts?:
                | {
                    active: boolean
                    companyName: string
                    createdAt: bigint
                    groups: { id?: string | undefined; name?: string | undefined }[]
                    id: bigint
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { offset: number; limit: number } }
            output: {
              code:
                | 'invalid_parameter'
                | 'missing_parameter'
                | 'out_of_range'
                | 'campaign_processing'
                | 'campaign_sent'
                | 'document_not_found'
                | 'not_enough_credits'
                | 'permission_denied'
                | 'duplicate_parameter'
                | 'duplicate_request'
                | 'method_not_allowed'
                | 'unauthorized'
                | 'account_under_validation'
                | 'not_acceptable'
                | 'bad_request'
                | 'unprocessable_entity'
                | 'Domain does not exist'
                | 'Contact email not found'
                | 'Attribute not found'
                | 'Category id not found'
                | 'Invalid parameters passed'
                | 'Record(s) for identifier not found'
                | 'Returned when query params are invalid'
                | 'Returned when invalid data posted'
                | 'Feed not found'
                | 'Campaign ID not found'
                | 'api-key not found'
                | 'DMARC policy requires domain authentication'
                | 'DNS records not properly configured'
                | 'Invalid OTP code provided'
                | 'OTP code has expired'
                | 'Domain already exists in your account'
                | 'The sum of all IP weights must equal 100'
                | 'Authentication failed'
                | 'Insufficient credits'
                | 'Request already processed'
              message: string
            }
            outputFormat: 'json'
            status: 400
          }
      $post:
        | {
            input: {
              json: {
                companyName: string
                email: string
                groupIds?: string[] | undefined
                language?: 'en' | 'fr' | 'it' | 'es' | 'pt' | 'de' | undefined
                timezone?: string | undefined
              }
            }
            output: { id: bigint }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              json: {
                companyName: string
                email: string
                groupIds?: string[] | undefined
                language?: 'en' | 'fr' | 'it' | 'es' | 'pt' | 'de' | undefined
                timezone?: string | undefined
              }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/corporate/subAccount/ip/associate': {
      $post:
        | {
            input: { json: { ids: bigint[]; ip: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: { ids: bigint[]; ip: string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/corporate/subAccount/ip/dissociate': {
      $put: {
        input: { json: { ids: bigint[]; ip: string } }
        output: ErrorModel
        outputFormat: 'json'
        status: 400
      }
    }
  } & {
    '/corporate/subAccount/key': {
      $post:
        | {
            input: { json: { id: bigint; name: string } }
            output: { key: string; status: string }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: { id: bigint; name: string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/corporate/subAccount/ssoToken': {
      $post:
        | {
            input: {
              json: {
                email?: string | undefined
                id: bigint
                target?:
                  | 'automation'
                  | 'email_campaign'
                  | 'contacts'
                  | 'landing_pages'
                  | 'email_transactional'
                  | 'senders'
                  | 'sms_campaign'
                  | 'sms_transactional'
                  | undefined
                url?: string | undefined
              }
            }
            output: GetSsoToken
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                email?: string | undefined
                id: bigint
                target?:
                  | 'automation'
                  | 'email_campaign'
                  | 'contacts'
                  | 'landing_pages'
                  | 'email_transactional'
                  | 'senders'
                  | 'sms_campaign'
                  | 'sms_transactional'
                  | undefined
                url?: string | undefined
              }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: {
                email?: string | undefined
                id: bigint
                target?:
                  | 'automation'
                  | 'email_campaign'
                  | 'contacts'
                  | 'landing_pages'
                  | 'email_transactional'
                  | 'senders'
                  | 'sms_campaign'
                  | 'sms_transactional'
                  | undefined
                url?: string | undefined
              }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/corporate/subAccount/:id': {
      $delete:
        | { input: { param: { id: bigint } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { id: bigint } }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: bigint } }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
      $get:
        | {
            input: { param: { id: bigint } }
            output: {
              companyName?: string | undefined
              email?: string | undefined
              groups?: { id?: string | undefined; name?: string | undefined }[] | undefined
              name?: string | undefined
              planInfo?:
                | {
                    credits?:
                      | {
                          emails?:
                            | { quantity?: bigint | undefined; remaining?: bigint | undefined }
                            | undefined
                          externalFeeds?:
                            | { quantity?: bigint | undefined; remaining?: bigint | undefined }
                            | undefined
                          sms?:
                            | { quantity?: bigint | undefined; remaining?: bigint | undefined }
                            | undefined
                          whatsapp?:
                            | { quantity?: bigint | undefined; remaining?: bigint | undefined }
                            | undefined
                          wpSubscribers?:
                            | { quantity?: bigint | undefined; remaining?: bigint | undefined }
                            | undefined
                        }
                      | undefined
                    features?:
                      | {
                          inbox?:
                            | { quantity?: bigint | undefined; remaining?: bigint | undefined }
                            | undefined
                          landingPage?:
                            | { quantity?: bigint | undefined; remaining?: bigint | undefined }
                            | undefined
                          salesUsers?:
                            | { quantity?: bigint | undefined; remaining?: bigint | undefined }
                            | undefined
                          users?:
                            | { quantity?: bigint | undefined; remaining?: bigint | undefined }
                            | undefined
                        }
                      | undefined
                    planType?: string | undefined
                  }
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: bigint } }
            output: {
              code:
                | 'invalid_parameter'
                | 'missing_parameter'
                | 'out_of_range'
                | 'campaign_processing'
                | 'campaign_sent'
                | 'document_not_found'
                | 'not_enough_credits'
                | 'permission_denied'
                | 'duplicate_parameter'
                | 'duplicate_request'
                | 'method_not_allowed'
                | 'unauthorized'
                | 'account_under_validation'
                | 'not_acceptable'
                | 'bad_request'
                | 'unprocessable_entity'
                | 'Domain does not exist'
                | 'Contact email not found'
                | 'Attribute not found'
                | 'Category id not found'
                | 'Invalid parameters passed'
                | 'Record(s) for identifier not found'
                | 'Returned when query params are invalid'
                | 'Returned when invalid data posted'
                | 'Feed not found'
                | 'Campaign ID not found'
                | 'api-key not found'
                | 'DMARC policy requires domain authentication'
                | 'DNS records not properly configured'
                | 'Invalid OTP code provided'
                | 'OTP code has expired'
                | 'Domain already exists in your account'
                | 'The sum of all IP weights must equal 100'
                | 'Authentication failed'
                | 'Insufficient credits'
                | 'Request already processed'
              message: string
            }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/corporate/subAccount/:id/applications/toggle': {
      $put:
        | {
            input: { param: { id: bigint } } & {
              json: {
                analytics?: boolean | undefined
                automation?: boolean | undefined
                conversations?: boolean | undefined
                crm?: boolean | undefined
                'email-campaigns'?: boolean | undefined
                'facebook-ads'?: boolean | undefined
                inbox?: boolean | undefined
                'landing-pages'?: boolean | undefined
                meetings?: boolean | undefined
                'sms-campaigns'?: boolean | undefined
                'transactional-emails'?: boolean | undefined
                'transactional-sms'?: boolean | undefined
                'web-push'?: boolean | undefined
                whatsapp?: boolean | undefined
              }
            }
            output: {
              code:
                | 'invalid_parameter'
                | 'missing_parameter'
                | 'out_of_range'
                | 'campaign_processing'
                | 'campaign_sent'
                | 'document_not_found'
                | 'not_enough_credits'
                | 'permission_denied'
                | 'duplicate_parameter'
                | 'duplicate_request'
                | 'method_not_allowed'
                | 'unauthorized'
                | 'account_under_validation'
                | 'not_acceptable'
                | 'bad_request'
                | 'unprocessable_entity'
                | 'Domain does not exist'
                | 'Contact email not found'
                | 'Attribute not found'
                | 'Category id not found'
                | 'Invalid parameters passed'
                | 'Record(s) for identifier not found'
                | 'Returned when query params are invalid'
                | 'Returned when invalid data posted'
                | 'Feed not found'
                | 'Campaign ID not found'
                | 'api-key not found'
                | 'DMARC policy requires domain authentication'
                | 'DNS records not properly configured'
                | 'Invalid OTP code provided'
                | 'OTP code has expired'
                | 'Domain already exists in your account'
                | 'The sum of all IP weights must equal 100'
                | 'Authentication failed'
                | 'Insufficient credits'
                | 'Request already processed'
              message: string
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: bigint } } & {
              json: {
                analytics?: boolean | undefined
                automation?: boolean | undefined
                conversations?: boolean | undefined
                crm?: boolean | undefined
                'email-campaigns'?: boolean | undefined
                'facebook-ads'?: boolean | undefined
                inbox?: boolean | undefined
                'landing-pages'?: boolean | undefined
                meetings?: boolean | undefined
                'sms-campaigns'?: boolean | undefined
                'transactional-emails'?: boolean | undefined
                'transactional-sms'?: boolean | undefined
                'web-push'?: boolean | undefined
                whatsapp?: boolean | undefined
              }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/corporate/subAccount/:id/plan': {
      $put:
        | {
            input: { param: { id: bigint } } & {
              json: {
                credits?:
                  | {
                      email?: bigint | undefined
                      externalFeeds?: number | undefined
                      sms?: number | undefined
                      whatsapp?: number | undefined
                      wpSubscribers?: bigint | undefined
                    }
                  | undefined
                features?:
                  | {
                      inbox?: bigint | undefined
                      landingPage?: bigint | undefined
                      salesUsers?: bigint | undefined
                      users?: bigint | undefined
                    }
                  | undefined
              }
            }
            output: {
              code:
                | 'invalid_parameter'
                | 'missing_parameter'
                | 'out_of_range'
                | 'campaign_processing'
                | 'campaign_sent'
                | 'document_not_found'
                | 'not_enough_credits'
                | 'permission_denied'
                | 'duplicate_parameter'
                | 'duplicate_request'
                | 'method_not_allowed'
                | 'unauthorized'
                | 'account_under_validation'
                | 'not_acceptable'
                | 'bad_request'
                | 'unprocessable_entity'
                | 'Domain does not exist'
                | 'Contact email not found'
                | 'Attribute not found'
                | 'Category id not found'
                | 'Invalid parameters passed'
                | 'Record(s) for identifier not found'
                | 'Returned when query params are invalid'
                | 'Returned when invalid data posted'
                | 'Feed not found'
                | 'Campaign ID not found'
                | 'api-key not found'
                | 'DMARC policy requires domain authentication'
                | 'DNS records not properly configured'
                | 'Invalid OTP code provided'
                | 'OTP code has expired'
                | 'Domain already exists in your account'
                | 'The sum of all IP weights must equal 100'
                | 'Authentication failed'
                | 'Insufficient credits'
                | 'Request already processed'
              message: string
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: bigint } } & {
              json: {
                credits?:
                  | {
                      email?: bigint | undefined
                      externalFeeds?: number | undefined
                      sms?: number | undefined
                      whatsapp?: number | undefined
                      wpSubscribers?: bigint | undefined
                    }
                  | undefined
                features?:
                  | {
                      inbox?: bigint | undefined
                      landingPage?: bigint | undefined
                      salesUsers?: bigint | undefined
                      users?: bigint | undefined
                    }
                  | undefined
              }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/corporate/subAccounts/plan': {
      $put:
        | {
            input: {
              json: {
                credits?:
                  | {
                      email?: bigint | undefined
                      externalFeeds?: number | undefined
                      sms?: number | undefined
                      whatsapp?: number | undefined
                      wpSubscribers?: bigint | undefined
                    }
                  | undefined
                features?:
                  | {
                      landingPage?: bigint | undefined
                      salesUsers?: bigint | undefined
                      users?: bigint | undefined
                    }
                  | undefined
                subAccountIds?: bigint[] | undefined
              }
            }
            output: {
              code:
                | 'invalid_parameter'
                | 'missing_parameter'
                | 'out_of_range'
                | 'campaign_processing'
                | 'campaign_sent'
                | 'document_not_found'
                | 'not_enough_credits'
                | 'permission_denied'
                | 'duplicate_parameter'
                | 'duplicate_request'
                | 'method_not_allowed'
                | 'unauthorized'
                | 'account_under_validation'
                | 'not_acceptable'
                | 'bad_request'
                | 'unprocessable_entity'
                | 'Domain does not exist'
                | 'Contact email not found'
                | 'Attribute not found'
                | 'Category id not found'
                | 'Invalid parameters passed'
                | 'Record(s) for identifier not found'
                | 'Returned when query params are invalid'
                | 'Returned when invalid data posted'
                | 'Feed not found'
                | 'Campaign ID not found'
                | 'api-key not found'
                | 'DMARC policy requires domain authentication'
                | 'DNS records not properly configured'
                | 'Invalid OTP code provided'
                | 'OTP code has expired'
                | 'Domain already exists in your account'
                | 'The sum of all IP weights must equal 100'
                | 'Authentication failed'
                | 'Insufficient credits'
                | 'Request already processed'
              message: string
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: {
                credits?:
                  | {
                      email?: bigint | undefined
                      externalFeeds?: number | undefined
                      sms?: number | undefined
                      whatsapp?: number | undefined
                      wpSubscribers?: bigint | undefined
                    }
                  | undefined
                features?:
                  | {
                      landingPage?: bigint | undefined
                      salesUsers?: bigint | undefined
                      users?: bigint | undefined
                    }
                  | undefined
                subAccountIds?: bigint[] | undefined
              }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/corporate/user/invitation/send': {
      $post:
        | {
            input: {
              json: {
                all_features_access: true | false
                email: string
                groupIds?: string[] | undefined
                privileges: {
                  feature?:
                    | 'my_plan'
                    | 'api'
                    | 'user_management'
                    | 'app_management'
                    | 'sub_organization_groups'
                    | 'create_sub_organizations'
                    | 'manage_sub_organizations'
                    | 'analytics'
                    | 'security'
                    | undefined
                  permissions?:
                    | (
                        | 'all'
                        | 'none'
                        | 'create'
                        | 'edit_delete'
                        | 'download_data'
                        | 'create_alerts'
                      )[]
                    | undefined
                }[]
              }
            }
            output: { id?: string | undefined }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              json: {
                all_features_access: true | false
                email: string
                groupIds?: string[] | undefined
                privileges: {
                  feature?:
                    | 'my_plan'
                    | 'api'
                    | 'user_management'
                    | 'app_management'
                    | 'sub_organization_groups'
                    | 'create_sub_organizations'
                    | 'manage_sub_organizations'
                    | 'analytics'
                    | 'security'
                    | undefined
                  permissions?:
                    | (
                        | 'all'
                        | 'none'
                        | 'create'
                        | 'edit_delete'
                        | 'download_data'
                        | 'create_alerts'
                      )[]
                    | undefined
                }[]
              }
            }
            output: {
              code:
                | 'invalid_parameter'
                | 'missing_parameter'
                | 'out_of_range'
                | 'campaign_processing'
                | 'campaign_sent'
                | 'document_not_found'
                | 'not_enough_credits'
                | 'permission_denied'
                | 'duplicate_parameter'
                | 'duplicate_request'
                | 'method_not_allowed'
                | 'unauthorized'
                | 'account_under_validation'
                | 'not_acceptable'
                | 'bad_request'
                | 'unprocessable_entity'
                | 'Domain does not exist'
                | 'Contact email not found'
                | 'Attribute not found'
                | 'Category id not found'
                | 'Invalid parameters passed'
                | 'Record(s) for identifier not found'
                | 'Returned when query params are invalid'
                | 'Returned when invalid data posted'
                | 'Feed not found'
                | 'Campaign ID not found'
                | 'api-key not found'
                | 'DMARC policy requires domain authentication'
                | 'DNS records not properly configured'
                | 'Invalid OTP code provided'
                | 'OTP code has expired'
                | 'Domain already exists in your account'
                | 'The sum of all IP weights must equal 100'
                | 'Authentication failed'
                | 'Insufficient credits'
                | 'Request already processed'
              message: string
            }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/corporate/user/invitation/:action/:email': {
      $put:
        | {
            input: { param: { action: 'resend' | 'cancel'; email: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { action: 'resend' | 'cancel'; email: string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/corporate/user/revoke/:email': {
      $delete:
        | { input: { param: { email: string } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { email: string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/corporate/user/:email/permissions': {
      $get:
        | {
            input: { param: { email: string } }
            output: {
              email: string
              feature_access: {
                analytics?: string[] | undefined
                api_keys?: string[] | undefined
                apps_management?: string[] | undefined
                create_sub_organizations?: string[] | undefined
                manage_sub_organizations?: string[] | undefined
                my_plan?: string[] | undefined
                sub_organization_groups?: string[] | undefined
                user_management?: string[] | undefined
              }
              groups: { id?: string | undefined; name?: string | undefined }[]
              status: string
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { email: string } }
            output: {
              code:
                | 'invalid_parameter'
                | 'missing_parameter'
                | 'out_of_range'
                | 'campaign_processing'
                | 'campaign_sent'
                | 'document_not_found'
                | 'not_enough_credits'
                | 'permission_denied'
                | 'duplicate_parameter'
                | 'duplicate_request'
                | 'method_not_allowed'
                | 'unauthorized'
                | 'account_under_validation'
                | 'not_acceptable'
                | 'bad_request'
                | 'unprocessable_entity'
                | 'Domain does not exist'
                | 'Contact email not found'
                | 'Attribute not found'
                | 'Category id not found'
                | 'Invalid parameters passed'
                | 'Record(s) for identifier not found'
                | 'Returned when query params are invalid'
                | 'Returned when invalid data posted'
                | 'Feed not found'
                | 'Campaign ID not found'
                | 'api-key not found'
                | 'DMARC policy requires domain authentication'
                | 'DNS records not properly configured'
                | 'Invalid OTP code provided'
                | 'OTP code has expired'
                | 'Domain already exists in your account'
                | 'The sum of all IP weights must equal 100'
                | 'Authentication failed'
                | 'Insufficient credits'
                | 'Request already processed'
              message: string
            }
            outputFormat: 'json'
            status: 400
          }
      $put: {
        input: { param: { email: string } } & {
          json: {
            all_features_access: true | false
            privileges: {
              feature?:
                | 'user_management'
                | 'api'
                | 'my_plan'
                | 'apps_management'
                | 'analytics'
                | 'sub_organization_groups'
                | 'create_sub_organizations'
                | 'manage_sub_organizations'
                | 'security'
                | undefined
              permissions?:
                | (
                    | 'all'
                    | 'none'
                    | 'create'
                    | 'edit_delete'
                    | 'create_alerts'
                    | 'download_data'
                    | 'my_looks'
                    | 'explore_create'
                  )[]
                | undefined
            }[]
          }
        }
        output: ErrorModel
        outputFormat: 'json'
        status: 400
      }
    }
  } & {
    '/organization/activities': {
      $get:
        | {
            input: {
              query: {
                startDate?: string | undefined
                endDate?: string | undefined
                email?: string | undefined
                limit?: bigint | undefined
                offset?: bigint | undefined
              }
            }
            output: {
              logs?:
                | {
                    action: string
                    date: string
                    user_agent: string
                    user_email: string
                    user_ip: string
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                startDate?: string | undefined
                endDate?: string | undefined
                email?: string | undefined
                limit?: bigint | undefined
                offset?: bigint | undefined
              }
            }
            output: {
              code:
                | 'invalid_parameter'
                | 'missing_parameter'
                | 'out_of_range'
                | 'campaign_processing'
                | 'campaign_sent'
                | 'document_not_found'
                | 'not_enough_credits'
                | 'permission_denied'
                | 'duplicate_parameter'
                | 'duplicate_request'
                | 'method_not_allowed'
                | 'unauthorized'
                | 'account_under_validation'
                | 'not_acceptable'
                | 'bad_request'
                | 'unprocessable_entity'
                | 'Domain does not exist'
                | 'Contact email not found'
                | 'Attribute not found'
                | 'Category id not found'
                | 'Invalid parameters passed'
                | 'Record(s) for identifier not found'
                | 'Returned when query params are invalid'
                | 'Returned when invalid data posted'
                | 'Feed not found'
                | 'Campaign ID not found'
                | 'api-key not found'
                | 'DMARC policy requires domain authentication'
                | 'DNS records not properly configured'
                | 'Invalid OTP code provided'
                | 'OTP code has expired'
                | 'Domain already exists in your account'
                | 'The sum of all IP weights must equal 100'
                | 'Authentication failed'
                | 'Insufficient credits'
                | 'Request already processed'
              message: string
            }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/organization/invited/users': {
      $get:
        | {
            input: {}
            output: {
              users?:
                | {
                    email: string
                    feature_access: {
                      conversations?: string | undefined
                      crm?: string | undefined
                      marketing?: string | undefined
                    }
                    is_owner: string
                    status: string
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {}
            output: {
              code:
                | 'invalid_parameter'
                | 'missing_parameter'
                | 'out_of_range'
                | 'campaign_processing'
                | 'campaign_sent'
                | 'document_not_found'
                | 'not_enough_credits'
                | 'permission_denied'
                | 'duplicate_parameter'
                | 'duplicate_request'
                | 'method_not_allowed'
                | 'unauthorized'
                | 'account_under_validation'
                | 'not_acceptable'
                | 'bad_request'
                | 'unprocessable_entity'
                | 'Domain does not exist'
                | 'Contact email not found'
                | 'Attribute not found'
                | 'Category id not found'
                | 'Invalid parameters passed'
                | 'Record(s) for identifier not found'
                | 'Returned when query params are invalid'
                | 'Returned when invalid data posted'
                | 'Feed not found'
                | 'Campaign ID not found'
                | 'api-key not found'
                | 'DMARC policy requires domain authentication'
                | 'DNS records not properly configured'
                | 'Invalid OTP code provided'
                | 'OTP code has expired'
                | 'Domain already exists in your account'
                | 'The sum of all IP weights must equal 100'
                | 'Authentication failed'
                | 'Insufficient credits'
                | 'Request already processed'
              message: string
            }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/organization/user/invitation/revoke/:email': {
      $put:
        | {
            input: { param: { email: string } }
            output: { credit_notes?: string[] | undefined; status: string }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { email: string } }
            output: {
              code:
                | 'invalid_parameter'
                | 'missing_parameter'
                | 'out_of_range'
                | 'campaign_processing'
                | 'campaign_sent'
                | 'document_not_found'
                | 'not_enough_credits'
                | 'permission_denied'
                | 'duplicate_parameter'
                | 'duplicate_request'
                | 'method_not_allowed'
                | 'unauthorized'
                | 'account_under_validation'
                | 'not_acceptable'
                | 'bad_request'
                | 'unprocessable_entity'
                | 'Domain does not exist'
                | 'Contact email not found'
                | 'Attribute not found'
                | 'Category id not found'
                | 'Invalid parameters passed'
                | 'Record(s) for identifier not found'
                | 'Returned when query params are invalid'
                | 'Returned when invalid data posted'
                | 'Feed not found'
                | 'Campaign ID not found'
                | 'api-key not found'
                | 'DMARC policy requires domain authentication'
                | 'DNS records not properly configured'
                | 'Invalid OTP code provided'
                | 'OTP code has expired'
                | 'Domain already exists in your account'
                | 'The sum of all IP weights must equal 100'
                | 'Authentication failed'
                | 'Insufficient credits'
                | 'Request already processed'
              message: string
            }
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/organization/user/invitation/send': {
      $post:
        | {
            input: { json: Inviteuser }
            output: { invoice_id?: string | undefined; status: string }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: Inviteuser }
            output: {
              code:
                | 'invalid_parameter'
                | 'missing_parameter'
                | 'out_of_range'
                | 'campaign_processing'
                | 'campaign_sent'
                | 'document_not_found'
                | 'not_enough_credits'
                | 'permission_denied'
                | 'duplicate_parameter'
                | 'duplicate_request'
                | 'method_not_allowed'
                | 'unauthorized'
                | 'account_under_validation'
                | 'not_acceptable'
                | 'bad_request'
                | 'unprocessable_entity'
                | 'Domain does not exist'
                | 'Contact email not found'
                | 'Attribute not found'
                | 'Category id not found'
                | 'Invalid parameters passed'
                | 'Record(s) for identifier not found'
                | 'Returned when query params are invalid'
                | 'Returned when invalid data posted'
                | 'Feed not found'
                | 'Campaign ID not found'
                | 'api-key not found'
                | 'DMARC policy requires domain authentication'
                | 'DNS records not properly configured'
                | 'Invalid OTP code provided'
                | 'OTP code has expired'
                | 'Domain already exists in your account'
                | 'The sum of all IP weights must equal 100'
                | 'Authentication failed'
                | 'Insufficient credits'
                | 'Request already processed'
              message: string
            }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/organization/user/invitation/:action/:email': {
      $put:
        | {
            input: { param: { action: 'resend' | 'cancel'; email: string } }
            output: { credit_notes?: string[] | undefined; status: string }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { action: 'resend' | 'cancel'; email: string } }
            output: {
              code:
                | 'invalid_parameter'
                | 'missing_parameter'
                | 'out_of_range'
                | 'campaign_processing'
                | 'campaign_sent'
                | 'document_not_found'
                | 'not_enough_credits'
                | 'permission_denied'
                | 'duplicate_parameter'
                | 'duplicate_request'
                | 'method_not_allowed'
                | 'unauthorized'
                | 'account_under_validation'
                | 'not_acceptable'
                | 'bad_request'
                | 'unprocessable_entity'
                | 'Domain does not exist'
                | 'Contact email not found'
                | 'Attribute not found'
                | 'Category id not found'
                | 'Invalid parameters passed'
                | 'Record(s) for identifier not found'
                | 'Returned when query params are invalid'
                | 'Returned when invalid data posted'
                | 'Feed not found'
                | 'Campaign ID not found'
                | 'api-key not found'
                | 'DMARC policy requires domain authentication'
                | 'DNS records not properly configured'
                | 'Invalid OTP code provided'
                | 'OTP code has expired'
                | 'Domain already exists in your account'
                | 'The sum of all IP weights must equal 100'
                | 'Authentication failed'
                | 'Insufficient credits'
                | 'Request already processed'
              message: string
            }
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/organization/user/update/permissions': {
      $post:
        | {
            input: { json: Inviteuser }
            output: {
              credit_notes?: string[] | undefined
              invoice_id?: string | undefined
              status: string
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: Inviteuser }
            output: {
              code:
                | 'invalid_parameter'
                | 'missing_parameter'
                | 'out_of_range'
                | 'campaign_processing'
                | 'campaign_sent'
                | 'document_not_found'
                | 'not_enough_credits'
                | 'permission_denied'
                | 'duplicate_parameter'
                | 'duplicate_request'
                | 'method_not_allowed'
                | 'unauthorized'
                | 'account_under_validation'
                | 'not_acceptable'
                | 'bad_request'
                | 'unprocessable_entity'
                | 'Domain does not exist'
                | 'Contact email not found'
                | 'Attribute not found'
                | 'Category id not found'
                | 'Invalid parameters passed'
                | 'Record(s) for identifier not found'
                | 'Returned when query params are invalid'
                | 'Returned when invalid data posted'
                | 'Feed not found'
                | 'Campaign ID not found'
                | 'api-key not found'
                | 'DMARC policy requires domain authentication'
                | 'DNS records not properly configured'
                | 'Invalid OTP code provided'
                | 'OTP code has expired'
                | 'Domain already exists in your account'
                | 'The sum of all IP weights must equal 100'
                | 'Authentication failed'
                | 'Insufficient credits'
                | 'Request already processed'
              message: string
            }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/organization/user/:email/permissions': {
      $get:
        | {
            input: { param: { email: string } }
            output: {
              email: string
              privileges: { feature: string; permissions: string[] }[]
              status: string
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { email: string } }
            output: {
              code:
                | 'invalid_parameter'
                | 'missing_parameter'
                | 'out_of_range'
                | 'campaign_processing'
                | 'campaign_sent'
                | 'document_not_found'
                | 'not_enough_credits'
                | 'permission_denied'
                | 'duplicate_parameter'
                | 'duplicate_request'
                | 'method_not_allowed'
                | 'unauthorized'
                | 'account_under_validation'
                | 'not_acceptable'
                | 'bad_request'
                | 'unprocessable_entity'
                | 'Domain does not exist'
                | 'Contact email not found'
                | 'Attribute not found'
                | 'Category id not found'
                | 'Invalid parameters passed'
                | 'Record(s) for identifier not found'
                | 'Returned when query params are invalid'
                | 'Returned when invalid data posted'
                | 'Feed not found'
                | 'Campaign ID not found'
                | 'api-key not found'
                | 'DMARC policy requires domain authentication'
                | 'DNS records not properly configured'
                | 'Invalid OTP code provided'
                | 'OTP code has expired'
                | 'Domain already exists in your account'
                | 'The sum of all IP weights must equal 100'
                | 'Authentication failed'
                | 'Insufficient credits'
                | 'Request already processed'
              message: string
            }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/processes': {
      $get:
        | {
            input: {
              query: {
                limit?: bigint | undefined
                offset?: bigint | undefined
                sort?: 'asc' | 'desc' | undefined
              }
            }
            output: {
              count: bigint
              processes: {
                id: bigint
                name:
                  | 'IMPORTUSER'
                  | 'SEARCH_EXPORT_USERS'
                  | 'TRANS-CALC'
                  | 'TRANS-GLOBAL-CALC'
                  | 'CAMPAIGN_PROCESSING'
                  | 'LIST_EXPORT'
                  | 'CONTACT_EXPORT'
                status: 'queued' | 'processing' | 'completed' | 'failed' | 'cancelled'
                info?:
                  | {
                      import?:
                        | {
                            invalid_emails?: (string | null) | undefined
                            duplicate_contact_id?: (string | null) | undefined
                            duplicate_ext_id?: (string | null) | undefined
                            duplicate_email_id?: (string | null) | undefined
                            duplicate_phone_id?: (string | null) | undefined
                            duplicate_whatsapp_id?: (string | null) | undefined
                            duplicate_landline_number_id?: (string | null) | undefined
                          }
                        | undefined
                    }
                  | undefined
                export_url?: string | undefined
              }[]
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: bigint | undefined
                offset?: bigint | undefined
                sort?: 'asc' | 'desc' | undefined
              }
            }
            output: {
              code:
                | 'invalid_parameter'
                | 'missing_parameter'
                | 'out_of_range'
                | 'campaign_processing'
                | 'campaign_sent'
                | 'document_not_found'
                | 'not_enough_credits'
                | 'permission_denied'
                | 'duplicate_parameter'
                | 'duplicate_request'
                | 'method_not_allowed'
                | 'unauthorized'
                | 'account_under_validation'
                | 'not_acceptable'
                | 'bad_request'
                | 'unprocessable_entity'
                | 'Domain does not exist'
                | 'Contact email not found'
                | 'Attribute not found'
                | 'Category id not found'
                | 'Invalid parameters passed'
                | 'Record(s) for identifier not found'
                | 'Returned when query params are invalid'
                | 'Returned when invalid data posted'
                | 'Feed not found'
                | 'Campaign ID not found'
                | 'api-key not found'
                | 'DMARC policy requires domain authentication'
                | 'DNS records not properly configured'
                | 'Invalid OTP code provided'
                | 'OTP code has expired'
                | 'Domain already exists in your account'
                | 'The sum of all IP weights must equal 100'
                | 'Authentication failed'
                | 'Insufficient credits'
                | 'Request already processed'
              message: string
            }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/processes/:processId': {
      $get:
        | {
            input: { param: { processId: bigint } }
            output: {
              id: bigint
              name:
                | 'IMPORTUSER'
                | 'SEARCH_EXPORT_USERS'
                | 'TRANS-CALC'
                | 'TRANS-GLOBAL-CALC'
                | 'CAMPAIGN_PROCESSING'
                | 'LIST_EXPORT'
                | 'CONTACT_EXPORT'
              status: 'queued' | 'processing' | 'completed' | 'failed' | 'cancelled'
              info?:
                | {
                    import?:
                      | {
                          invalid_emails?: (string | null) | undefined
                          duplicate_contact_id?: (string | null) | undefined
                          duplicate_ext_id?: (string | null) | undefined
                          duplicate_email_id?: (string | null) | undefined
                          duplicate_phone_id?: (string | null) | undefined
                          duplicate_whatsapp_id?: (string | null) | undefined
                          duplicate_landline_number_id?: (string | null) | undefined
                        }
                      | undefined
                  }
                | undefined
              export_url?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { processId: bigint } }
            output: {
              code:
                | 'invalid_parameter'
                | 'missing_parameter'
                | 'out_of_range'
                | 'campaign_processing'
                | 'campaign_sent'
                | 'document_not_found'
                | 'not_enough_credits'
                | 'permission_denied'
                | 'duplicate_parameter'
                | 'duplicate_request'
                | 'method_not_allowed'
                | 'unauthorized'
                | 'account_under_validation'
                | 'not_acceptable'
                | 'bad_request'
                | 'unprocessable_entity'
                | 'Domain does not exist'
                | 'Contact email not found'
                | 'Attribute not found'
                | 'Category id not found'
                | 'Invalid parameters passed'
                | 'Record(s) for identifier not found'
                | 'Returned when query params are invalid'
                | 'Returned when invalid data posted'
                | 'Feed not found'
                | 'Campaign ID not found'
                | 'api-key not found'
                | 'DMARC policy requires domain authentication'
                | 'DNS records not properly configured'
                | 'Invalid OTP code provided'
                | 'OTP code has expired'
                | 'Domain already exists in your account'
                | 'The sum of all IP weights must equal 100'
                | 'Authentication failed'
                | 'Insufficient credits'
                | 'Request already processed'
              message: string
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { processId: bigint } }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/senders': {
      $get:
        | {
            input: { query: { ip?: string | undefined; domain?: string | undefined } }
            output: {
              senders?:
                | {
                    active: boolean
                    email: string
                    id: bigint
                    ips: { domain: string; ip: string; weight: bigint }[]
                    name: string
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { ip?: string | undefined; domain?: string | undefined } }
            output: {
              code:
                | 'invalid_parameter'
                | 'missing_parameter'
                | 'out_of_range'
                | 'campaign_processing'
                | 'campaign_sent'
                | 'document_not_found'
                | 'not_enough_credits'
                | 'permission_denied'
                | 'duplicate_parameter'
                | 'duplicate_request'
                | 'method_not_allowed'
                | 'unauthorized'
                | 'account_under_validation'
                | 'not_acceptable'
                | 'bad_request'
                | 'unprocessable_entity'
                | 'Domain does not exist'
                | 'Contact email not found'
                | 'Attribute not found'
                | 'Category id not found'
                | 'Invalid parameters passed'
                | 'Record(s) for identifier not found'
                | 'Returned when query params are invalid'
                | 'Returned when invalid data posted'
                | 'Feed not found'
                | 'Campaign ID not found'
                | 'api-key not found'
                | 'DMARC policy requires domain authentication'
                | 'DNS records not properly configured'
                | 'Invalid OTP code provided'
                | 'OTP code has expired'
                | 'Domain already exists in your account'
                | 'The sum of all IP weights must equal 100'
                | 'Authentication failed'
                | 'Insufficient credits'
                | 'Request already processed'
              message: string
            }
            outputFormat: 'json'
            status: 400
          }
      $post:
        | {
            input: {
              json: {
                email: string
                ips?: { domain: string; ip: string; weight?: bigint | undefined }[] | undefined
                name: string
              }
            }
            output: { dkimError?: boolean | undefined; id: bigint; spfError?: boolean | undefined }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              json: {
                email: string
                ips?: { domain: string; ip: string; weight?: bigint | undefined }[] | undefined
                name: string
              }
            }
            output: {
              code:
                | 'invalid_parameter'
                | 'missing_parameter'
                | 'out_of_range'
                | 'campaign_processing'
                | 'campaign_sent'
                | 'document_not_found'
                | 'not_enough_credits'
                | 'permission_denied'
                | 'duplicate_parameter'
                | 'duplicate_request'
                | 'method_not_allowed'
                | 'unauthorized'
                | 'account_under_validation'
                | 'not_acceptable'
                | 'bad_request'
                | 'unprocessable_entity'
                | 'Domain does not exist'
                | 'Contact email not found'
                | 'Attribute not found'
                | 'Category id not found'
                | 'Invalid parameters passed'
                | 'Record(s) for identifier not found'
                | 'Returned when query params are invalid'
                | 'Returned when invalid data posted'
                | 'Feed not found'
                | 'Campaign ID not found'
                | 'api-key not found'
                | 'DMARC policy requires domain authentication'
                | 'DNS records not properly configured'
                | 'Invalid OTP code provided'
                | 'OTP code has expired'
                | 'Domain already exists in your account'
                | 'The sum of all IP weights must equal 100'
                | 'Authentication failed'
                | 'Insufficient credits'
                | 'Request already processed'
              message: string
            }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/senders/domains': {
      $get:
        | {
            input: {}
            output: {
              domains: {
                id: string
                domain_name: string
                authenticated: boolean
                verified: boolean
                ip?: (string | null) | undefined
                provider: string
                creator: { id: string; email: string; creationDate: string }
              }[]
              count: number
              current_page: number
              total_pages: number
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {}
            output: {
              code:
                | 'invalid_parameter'
                | 'missing_parameter'
                | 'out_of_range'
                | 'campaign_processing'
                | 'campaign_sent'
                | 'document_not_found'
                | 'not_enough_credits'
                | 'permission_denied'
                | 'duplicate_parameter'
                | 'duplicate_request'
                | 'method_not_allowed'
                | 'unauthorized'
                | 'account_under_validation'
                | 'not_acceptable'
                | 'bad_request'
                | 'unprocessable_entity'
                | 'Domain does not exist'
                | 'Contact email not found'
                | 'Attribute not found'
                | 'Category id not found'
                | 'Invalid parameters passed'
                | 'Record(s) for identifier not found'
                | 'Returned when query params are invalid'
                | 'Returned when invalid data posted'
                | 'Feed not found'
                | 'Campaign ID not found'
                | 'api-key not found'
                | 'DMARC policy requires domain authentication'
                | 'DNS records not properly configured'
                | 'Invalid OTP code provided'
                | 'OTP code has expired'
                | 'Domain already exists in your account'
                | 'The sum of all IP weights must equal 100'
                | 'Authentication failed'
                | 'Insufficient credits'
                | 'Request already processed'
              message: string
            }
            outputFormat: 'json'
            status: 400
          }
      $post:
        | {
            input: { json: { name: string } }
            output: {
              id: bigint
              domain_name: string
              domain_provider?: string | undefined
              message: string
              dns_records?:
                | {
                    brevo_code: { host_name: string; type: string; value: string; status: boolean }
                    dkim_record: { host_name: string; type: string; value: string; status: boolean }
                    dmarc_record: {
                      host_name: string
                      type: string
                      value: string
                      status: boolean
                    }
                  }
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { name: string } }
            output: {
              code:
                | 'invalid_parameter'
                | 'missing_parameter'
                | 'out_of_range'
                | 'campaign_processing'
                | 'campaign_sent'
                | 'document_not_found'
                | 'not_enough_credits'
                | 'permission_denied'
                | 'duplicate_parameter'
                | 'duplicate_request'
                | 'method_not_allowed'
                | 'unauthorized'
                | 'account_under_validation'
                | 'not_acceptable'
                | 'bad_request'
                | 'unprocessable_entity'
                | 'Domain does not exist'
                | 'Contact email not found'
                | 'Attribute not found'
                | 'Category id not found'
                | 'Invalid parameters passed'
                | 'Record(s) for identifier not found'
                | 'Returned when query params are invalid'
                | 'Returned when invalid data posted'
                | 'Feed not found'
                | 'Campaign ID not found'
                | 'api-key not found'
                | 'DMARC policy requires domain authentication'
                | 'DNS records not properly configured'
                | 'Invalid OTP code provided'
                | 'OTP code has expired'
                | 'Domain already exists in your account'
                | 'The sum of all IP weights must equal 100'
                | 'Authentication failed'
                | 'Insufficient credits'
                | 'Request already processed'
              message: string
            }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/senders/domains/:domainName': {
      $delete:
        | {
            input: { param: { domainName: string } }
            output: {
              code:
                | 'invalid_parameter'
                | 'missing_parameter'
                | 'out_of_range'
                | 'campaign_processing'
                | 'campaign_sent'
                | 'document_not_found'
                | 'not_enough_credits'
                | 'permission_denied'
                | 'duplicate_parameter'
                | 'duplicate_request'
                | 'method_not_allowed'
                | 'unauthorized'
                | 'account_under_validation'
                | 'not_acceptable'
                | 'bad_request'
                | 'unprocessable_entity'
                | 'Domain does not exist'
                | 'Contact email not found'
                | 'Attribute not found'
                | 'Category id not found'
                | 'Invalid parameters passed'
                | 'Record(s) for identifier not found'
                | 'Returned when query params are invalid'
                | 'Returned when invalid data posted'
                | 'Feed not found'
                | 'Campaign ID not found'
                | 'api-key not found'
                | 'DMARC policy requires domain authentication'
                | 'DNS records not properly configured'
                | 'Invalid OTP code provided'
                | 'OTP code has expired'
                | 'Domain already exists in your account'
                | 'The sum of all IP weights must equal 100'
                | 'Authentication failed'
                | 'Insufficient credits'
                | 'Request already processed'
              message: string
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { domainName: string } }
            output: {
              code:
                | 'invalid_parameter'
                | 'missing_parameter'
                | 'out_of_range'
                | 'campaign_processing'
                | 'campaign_sent'
                | 'document_not_found'
                | 'not_enough_credits'
                | 'permission_denied'
                | 'duplicate_parameter'
                | 'duplicate_request'
                | 'method_not_allowed'
                | 'unauthorized'
                | 'account_under_validation'
                | 'not_acceptable'
                | 'bad_request'
                | 'unprocessable_entity'
                | 'Domain does not exist'
                | 'Contact email not found'
                | 'Attribute not found'
                | 'Category id not found'
                | 'Invalid parameters passed'
                | 'Record(s) for identifier not found'
                | 'Returned when query params are invalid'
                | 'Returned when invalid data posted'
                | 'Feed not found'
                | 'Campaign ID not found'
                | 'api-key not found'
                | 'DMARC policy requires domain authentication'
                | 'DNS records not properly configured'
                | 'Invalid OTP code provided'
                | 'OTP code has expired'
                | 'Domain already exists in your account'
                | 'The sum of all IP weights must equal 100'
                | 'Authentication failed'
                | 'Insufficient credits'
                | 'Request already processed'
              message: string
            }
            outputFormat: 'json'
            status: 404
          }
      $get:
        | {
            input: { param: { domainName: string } }
            output: {
              domain: string
              verified: boolean
              authenticated: boolean
              dns_records: {
                brevo_code: { host_name: string; type: string; value: string; status: boolean }
                dkim_record: { host_name: string; type: string; value: string; status: boolean }
                dmarc_record: { host_name: string; type: string; value: string; status: boolean }
              }
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { domainName: string } }
            output: {
              code:
                | 'invalid_parameter'
                | 'missing_parameter'
                | 'out_of_range'
                | 'campaign_processing'
                | 'campaign_sent'
                | 'document_not_found'
                | 'not_enough_credits'
                | 'permission_denied'
                | 'duplicate_parameter'
                | 'duplicate_request'
                | 'method_not_allowed'
                | 'unauthorized'
                | 'account_under_validation'
                | 'not_acceptable'
                | 'bad_request'
                | 'unprocessable_entity'
                | 'Domain does not exist'
                | 'Contact email not found'
                | 'Attribute not found'
                | 'Category id not found'
                | 'Invalid parameters passed'
                | 'Record(s) for identifier not found'
                | 'Returned when query params are invalid'
                | 'Returned when invalid data posted'
                | 'Feed not found'
                | 'Campaign ID not found'
                | 'api-key not found'
                | 'DMARC policy requires domain authentication'
                | 'DNS records not properly configured'
                | 'Invalid OTP code provided'
                | 'OTP code has expired'
                | 'Domain already exists in your account'
                | 'The sum of all IP weights must equal 100'
                | 'Authentication failed'
                | 'Insufficient credits'
                | 'Request already processed'
              message: string
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { domainName: string } }
            output: {
              code:
                | 'invalid_parameter'
                | 'missing_parameter'
                | 'out_of_range'
                | 'campaign_processing'
                | 'campaign_sent'
                | 'document_not_found'
                | 'not_enough_credits'
                | 'permission_denied'
                | 'duplicate_parameter'
                | 'duplicate_request'
                | 'method_not_allowed'
                | 'unauthorized'
                | 'account_under_validation'
                | 'not_acceptable'
                | 'bad_request'
                | 'unprocessable_entity'
                | 'Domain does not exist'
                | 'Contact email not found'
                | 'Attribute not found'
                | 'Category id not found'
                | 'Invalid parameters passed'
                | 'Record(s) for identifier not found'
                | 'Returned when query params are invalid'
                | 'Returned when invalid data posted'
                | 'Feed not found'
                | 'Campaign ID not found'
                | 'api-key not found'
                | 'DMARC policy requires domain authentication'
                | 'DNS records not properly configured'
                | 'Invalid OTP code provided'
                | 'OTP code has expired'
                | 'Domain already exists in your account'
                | 'The sum of all IP weights must equal 100'
                | 'Authentication failed'
                | 'Insufficient credits'
                | 'Request already processed'
              message: string
            }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/senders/domains/:domainName/authenticate': {
      $put:
        | {
            input: { param: { domainName: string } }
            output: { domain_name: string; message: string }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { domainName: string } }
            output: {
              code:
                | 'invalid_parameter'
                | 'missing_parameter'
                | 'out_of_range'
                | 'campaign_processing'
                | 'campaign_sent'
                | 'document_not_found'
                | 'not_enough_credits'
                | 'permission_denied'
                | 'duplicate_parameter'
                | 'duplicate_request'
                | 'method_not_allowed'
                | 'unauthorized'
                | 'account_under_validation'
                | 'not_acceptable'
                | 'bad_request'
                | 'unprocessable_entity'
                | 'Domain does not exist'
                | 'Contact email not found'
                | 'Attribute not found'
                | 'Category id not found'
                | 'Invalid parameters passed'
                | 'Record(s) for identifier not found'
                | 'Returned when query params are invalid'
                | 'Returned when invalid data posted'
                | 'Feed not found'
                | 'Campaign ID not found'
                | 'api-key not found'
                | 'DMARC policy requires domain authentication'
                | 'DNS records not properly configured'
                | 'Invalid OTP code provided'
                | 'OTP code has expired'
                | 'Domain already exists in your account'
                | 'The sum of all IP weights must equal 100'
                | 'Authentication failed'
                | 'Insufficient credits'
                | 'Request already processed'
              message: string
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { domainName: string } }
            output: {
              code:
                | 'invalid_parameter'
                | 'missing_parameter'
                | 'out_of_range'
                | 'campaign_processing'
                | 'campaign_sent'
                | 'document_not_found'
                | 'not_enough_credits'
                | 'permission_denied'
                | 'duplicate_parameter'
                | 'duplicate_request'
                | 'method_not_allowed'
                | 'unauthorized'
                | 'account_under_validation'
                | 'not_acceptable'
                | 'bad_request'
                | 'unprocessable_entity'
                | 'Domain does not exist'
                | 'Contact email not found'
                | 'Attribute not found'
                | 'Category id not found'
                | 'Invalid parameters passed'
                | 'Record(s) for identifier not found'
                | 'Returned when query params are invalid'
                | 'Returned when invalid data posted'
                | 'Feed not found'
                | 'Campaign ID not found'
                | 'api-key not found'
                | 'DMARC policy requires domain authentication'
                | 'DNS records not properly configured'
                | 'Invalid OTP code provided'
                | 'OTP code has expired'
                | 'Domain already exists in your account'
                | 'The sum of all IP weights must equal 100'
                | 'Authentication failed'
                | 'Insufficient credits'
                | 'Request already processed'
              message: string
            }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/senders/ips': {
      $get:
        | {
            input: {}
            output: { ips: { id: bigint; active: boolean; domain: string; ip: string }[] }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {}
            output: {
              code:
                | 'invalid_parameter'
                | 'missing_parameter'
                | 'out_of_range'
                | 'campaign_processing'
                | 'campaign_sent'
                | 'document_not_found'
                | 'not_enough_credits'
                | 'permission_denied'
                | 'duplicate_parameter'
                | 'duplicate_request'
                | 'method_not_allowed'
                | 'unauthorized'
                | 'account_under_validation'
                | 'not_acceptable'
                | 'bad_request'
                | 'unprocessable_entity'
                | 'Domain does not exist'
                | 'Contact email not found'
                | 'Attribute not found'
                | 'Category id not found'
                | 'Invalid parameters passed'
                | 'Record(s) for identifier not found'
                | 'Returned when query params are invalid'
                | 'Returned when invalid data posted'
                | 'Feed not found'
                | 'Campaign ID not found'
                | 'api-key not found'
                | 'DMARC policy requires domain authentication'
                | 'DNS records not properly configured'
                | 'Invalid OTP code provided'
                | 'OTP code has expired'
                | 'Domain already exists in your account'
                | 'The sum of all IP weights must equal 100'
                | 'Authentication failed'
                | 'Insufficient credits'
                | 'Request already processed'
              message: string
            }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/senders/:senderId': {
      $delete:
        | {
            input: { param: { senderId: bigint } }
            output: {
              code:
                | 'invalid_parameter'
                | 'missing_parameter'
                | 'out_of_range'
                | 'campaign_processing'
                | 'campaign_sent'
                | 'document_not_found'
                | 'not_enough_credits'
                | 'permission_denied'
                | 'duplicate_parameter'
                | 'duplicate_request'
                | 'method_not_allowed'
                | 'unauthorized'
                | 'account_under_validation'
                | 'not_acceptable'
                | 'bad_request'
                | 'unprocessable_entity'
                | 'Domain does not exist'
                | 'Contact email not found'
                | 'Attribute not found'
                | 'Category id not found'
                | 'Invalid parameters passed'
                | 'Record(s) for identifier not found'
                | 'Returned when query params are invalid'
                | 'Returned when invalid data posted'
                | 'Feed not found'
                | 'Campaign ID not found'
                | 'api-key not found'
                | 'DMARC policy requires domain authentication'
                | 'DNS records not properly configured'
                | 'Invalid OTP code provided'
                | 'OTP code has expired'
                | 'Domain already exists in your account'
                | 'The sum of all IP weights must equal 100'
                | 'Authentication failed'
                | 'Insufficient credits'
                | 'Request already processed'
              message: string
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { senderId: bigint } }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
      $put:
        | {
            input: { param: { senderId: bigint } } & {
              json: {
                email?: string | undefined
                ips?: { domain: string; ip: string; weight?: bigint | undefined }[] | undefined
                name?: string | undefined
              }
            }
            output: {
              code:
                | 'invalid_parameter'
                | 'missing_parameter'
                | 'out_of_range'
                | 'campaign_processing'
                | 'campaign_sent'
                | 'document_not_found'
                | 'not_enough_credits'
                | 'permission_denied'
                | 'duplicate_parameter'
                | 'duplicate_request'
                | 'method_not_allowed'
                | 'unauthorized'
                | 'account_under_validation'
                | 'not_acceptable'
                | 'bad_request'
                | 'unprocessable_entity'
                | 'Domain does not exist'
                | 'Contact email not found'
                | 'Attribute not found'
                | 'Category id not found'
                | 'Invalid parameters passed'
                | 'Record(s) for identifier not found'
                | 'Returned when query params are invalid'
                | 'Returned when invalid data posted'
                | 'Feed not found'
                | 'Campaign ID not found'
                | 'api-key not found'
                | 'DMARC policy requires domain authentication'
                | 'DNS records not properly configured'
                | 'Invalid OTP code provided'
                | 'OTP code has expired'
                | 'Domain already exists in your account'
                | 'The sum of all IP weights must equal 100'
                | 'Authentication failed'
                | 'Insufficient credits'
                | 'Request already processed'
              message: string
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { senderId: bigint } } & {
              json: {
                email?: string | undefined
                ips?: { domain: string; ip: string; weight?: bigint | undefined }[] | undefined
                name?: string | undefined
              }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/senders/:senderId/ips': {
      $get:
        | {
            input: { param: { senderId: bigint } }
            output: { ips: { domain: string; id: bigint; ip: string; weight: bigint }[] }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { senderId: bigint } }
            output: {
              code:
                | 'invalid_parameter'
                | 'missing_parameter'
                | 'out_of_range'
                | 'campaign_processing'
                | 'campaign_sent'
                | 'document_not_found'
                | 'not_enough_credits'
                | 'permission_denied'
                | 'duplicate_parameter'
                | 'duplicate_request'
                | 'method_not_allowed'
                | 'unauthorized'
                | 'account_under_validation'
                | 'not_acceptable'
                | 'bad_request'
                | 'unprocessable_entity'
                | 'Domain does not exist'
                | 'Contact email not found'
                | 'Attribute not found'
                | 'Category id not found'
                | 'Invalid parameters passed'
                | 'Record(s) for identifier not found'
                | 'Returned when query params are invalid'
                | 'Returned when invalid data posted'
                | 'Feed not found'
                | 'Campaign ID not found'
                | 'api-key not found'
                | 'DMARC policy requires domain authentication'
                | 'DNS records not properly configured'
                | 'Invalid OTP code provided'
                | 'OTP code has expired'
                | 'Domain already exists in your account'
                | 'The sum of all IP weights must equal 100'
                | 'Authentication failed'
                | 'Insufficient credits'
                | 'Request already processed'
              message: string
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { senderId: bigint } }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/senders/:senderId/validate': {
      $put:
        | {
            input: { param: { senderId: bigint } } & { json: { otp: number } }
            output: {
              code:
                | 'invalid_parameter'
                | 'missing_parameter'
                | 'out_of_range'
                | 'campaign_processing'
                | 'campaign_sent'
                | 'document_not_found'
                | 'not_enough_credits'
                | 'permission_denied'
                | 'duplicate_parameter'
                | 'duplicate_request'
                | 'method_not_allowed'
                | 'unauthorized'
                | 'account_under_validation'
                | 'not_acceptable'
                | 'bad_request'
                | 'unprocessable_entity'
                | 'Domain does not exist'
                | 'Contact email not found'
                | 'Attribute not found'
                | 'Category id not found'
                | 'Invalid parameters passed'
                | 'Record(s) for identifier not found'
                | 'Returned when query params are invalid'
                | 'Returned when invalid data posted'
                | 'Feed not found'
                | 'Campaign ID not found'
                | 'api-key not found'
                | 'DMARC policy requires domain authentication'
                | 'DNS records not properly configured'
                | 'Invalid OTP code provided'
                | 'OTP code has expired'
                | 'Domain already exists in your account'
                | 'The sum of all IP weights must equal 100'
                | 'Authentication failed'
                | 'Insufficient credits'
                | 'Request already processed'
              message: string
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { senderId: bigint } } & { json: { otp: number } }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/webhooks': {
      $get:
        | {
            input: {
              query: {
                type?: 'marketing' | 'transactional' | 'inbound' | undefined
                sort?: 'asc' | 'desc' | undefined
              }
            }
            output: {
              webhooks: {
                auth?: { [x: string]: unknown } | undefined
                batched?: boolean | undefined
                createdAt: string
                description: string
                events: string[]
                headers?: { [x: string]: unknown }[] | undefined
                id: bigint
                modifiedAt: string
                type: 'marketing' | 'transactional' | 'inbound'
                domain?: string | undefined
                url: string
              }[]
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                type?: 'marketing' | 'transactional' | 'inbound' | undefined
                sort?: 'asc' | 'desc' | undefined
              }
            }
            output: {
              code:
                | 'invalid_parameter'
                | 'missing_parameter'
                | 'out_of_range'
                | 'campaign_processing'
                | 'campaign_sent'
                | 'document_not_found'
                | 'not_enough_credits'
                | 'permission_denied'
                | 'duplicate_parameter'
                | 'duplicate_request'
                | 'method_not_allowed'
                | 'unauthorized'
                | 'account_under_validation'
                | 'not_acceptable'
                | 'bad_request'
                | 'unprocessable_entity'
                | 'Domain does not exist'
                | 'Contact email not found'
                | 'Attribute not found'
                | 'Category id not found'
                | 'Invalid parameters passed'
                | 'Record(s) for identifier not found'
                | 'Returned when query params are invalid'
                | 'Returned when invalid data posted'
                | 'Feed not found'
                | 'Campaign ID not found'
                | 'api-key not found'
                | 'DMARC policy requires domain authentication'
                | 'DNS records not properly configured'
                | 'Invalid OTP code provided'
                | 'OTP code has expired'
                | 'Domain already exists in your account'
                | 'The sum of all IP weights must equal 100'
                | 'Authentication failed'
                | 'Insufficient credits'
                | 'Request already processed'
              message: string
            }
            outputFormat: 'json'
            status: 400
          }
      $post:
        | {
            input: {
              json: {
                auth?: { token?: string | undefined; type?: string | undefined } | undefined
                batched?: boolean | undefined
                channel?: 'email' | 'sms' | undefined
                description?: string | undefined
                domain?: string | undefined
                events?:
                  | (
                      | 'sent'
                      | 'hardBounce'
                      | 'softBounce'
                      | 'blocked'
                      | 'spam'
                      | 'delivered'
                      | 'request'
                      | 'click'
                      | 'invalid'
                      | 'deferred'
                      | 'opened'
                      | 'uniqueOpened'
                      | 'unsubscribed'
                      | 'listAddition'
                      | 'contactUpdated'
                      | 'contactDeleted'
                      | 'inboundEmailProcessed'
                      | 'reply'
                    )[]
                  | undefined
                headers?: { key?: string | undefined; value?: string | undefined }[] | undefined
                type?: 'transactional' | 'marketing' | 'inbound' | undefined
                url: string
              }
            }
            output: { id: bigint }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              json: {
                auth?: { token?: string | undefined; type?: string | undefined } | undefined
                batched?: boolean | undefined
                channel?: 'email' | 'sms' | undefined
                description?: string | undefined
                domain?: string | undefined
                events?:
                  | (
                      | 'sent'
                      | 'hardBounce'
                      | 'softBounce'
                      | 'blocked'
                      | 'spam'
                      | 'delivered'
                      | 'request'
                      | 'click'
                      | 'invalid'
                      | 'deferred'
                      | 'opened'
                      | 'uniqueOpened'
                      | 'unsubscribed'
                      | 'listAddition'
                      | 'contactUpdated'
                      | 'contactDeleted'
                      | 'inboundEmailProcessed'
                      | 'reply'
                    )[]
                  | undefined
                headers?: { key?: string | undefined; value?: string | undefined }[] | undefined
                type?: 'transactional' | 'marketing' | 'inbound' | undefined
                url: string
              }
            }
            output: {
              code:
                | 'invalid_parameter'
                | 'missing_parameter'
                | 'out_of_range'
                | 'campaign_processing'
                | 'campaign_sent'
                | 'document_not_found'
                | 'not_enough_credits'
                | 'permission_denied'
                | 'duplicate_parameter'
                | 'duplicate_request'
                | 'method_not_allowed'
                | 'unauthorized'
                | 'account_under_validation'
                | 'not_acceptable'
                | 'bad_request'
                | 'unprocessable_entity'
                | 'Domain does not exist'
                | 'Contact email not found'
                | 'Attribute not found'
                | 'Category id not found'
                | 'Invalid parameters passed'
                | 'Record(s) for identifier not found'
                | 'Returned when query params are invalid'
                | 'Returned when invalid data posted'
                | 'Feed not found'
                | 'Campaign ID not found'
                | 'api-key not found'
                | 'DMARC policy requires domain authentication'
                | 'DNS records not properly configured'
                | 'Invalid OTP code provided'
                | 'OTP code has expired'
                | 'Domain already exists in your account'
                | 'The sum of all IP weights must equal 100'
                | 'Authentication failed'
                | 'Insufficient credits'
                | 'Request already processed'
              message: string
            }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/webhooks/export': {
      $post:
        | {
            input: {
              json: {
                days?: number | undefined
                email?: string | undefined
                endDate?: string | undefined
                event:
                  | 'invalid_parameter'
                  | 'missing_parameter'
                  | 'hardBounce'
                  | 'softBounce'
                  | 'delivered'
                  | 'spam'
                  | 'request'
                  | 'opened'
                  | 'click'
                  | 'invalid'
                  | 'deferred'
                  | 'blocked'
                  | 'unsubscribed'
                  | 'error'
                  | 'uniqueOpened'
                  | 'loadedByProxy'
                  | 'allEvents'
                messageId?: string | undefined
                notifyURL: string
                sort?: string | undefined
                startDate?: string | undefined
                type: 'transactional' | 'marketing'
                webhookId?: number | undefined
              }
            }
            output: { processId: bigint }
            outputFormat: 'json'
            status: 202
          }
        | {
            input: {
              json: {
                days?: number | undefined
                email?: string | undefined
                endDate?: string | undefined
                event:
                  | 'invalid_parameter'
                  | 'missing_parameter'
                  | 'hardBounce'
                  | 'softBounce'
                  | 'delivered'
                  | 'spam'
                  | 'request'
                  | 'opened'
                  | 'click'
                  | 'invalid'
                  | 'deferred'
                  | 'blocked'
                  | 'unsubscribed'
                  | 'error'
                  | 'uniqueOpened'
                  | 'loadedByProxy'
                  | 'allEvents'
                messageId?: string | undefined
                notifyURL: string
                sort?: string | undefined
                startDate?: string | undefined
                type: 'transactional' | 'marketing'
                webhookId?: number | undefined
              }
            }
            output: {
              code:
                | 'invalid_parameter'
                | 'missing_parameter'
                | 'out_of_range'
                | 'campaign_processing'
                | 'campaign_sent'
                | 'document_not_found'
                | 'not_enough_credits'
                | 'permission_denied'
                | 'duplicate_parameter'
                | 'duplicate_request'
                | 'method_not_allowed'
                | 'unauthorized'
                | 'account_under_validation'
                | 'not_acceptable'
                | 'bad_request'
                | 'unprocessable_entity'
                | 'Domain does not exist'
                | 'Contact email not found'
                | 'Attribute not found'
                | 'Category id not found'
                | 'Invalid parameters passed'
                | 'Record(s) for identifier not found'
                | 'Returned when query params are invalid'
                | 'Returned when invalid data posted'
                | 'Feed not found'
                | 'Campaign ID not found'
                | 'api-key not found'
                | 'DMARC policy requires domain authentication'
                | 'DNS records not properly configured'
                | 'Invalid OTP code provided'
                | 'OTP code has expired'
                | 'Domain already exists in your account'
                | 'The sum of all IP weights must equal 100'
                | 'Authentication failed'
                | 'Insufficient credits'
                | 'Request already processed'
              message: string
            }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/webhooks/:webhookId': {
      $delete:
        | {
            input: { param: { webhookId: bigint } }
            output: {
              code:
                | 'invalid_parameter'
                | 'missing_parameter'
                | 'out_of_range'
                | 'campaign_processing'
                | 'campaign_sent'
                | 'document_not_found'
                | 'not_enough_credits'
                | 'permission_denied'
                | 'duplicate_parameter'
                | 'duplicate_request'
                | 'method_not_allowed'
                | 'unauthorized'
                | 'account_under_validation'
                | 'not_acceptable'
                | 'bad_request'
                | 'unprocessable_entity'
                | 'Domain does not exist'
                | 'Contact email not found'
                | 'Attribute not found'
                | 'Category id not found'
                | 'Invalid parameters passed'
                | 'Record(s) for identifier not found'
                | 'Returned when query params are invalid'
                | 'Returned when invalid data posted'
                | 'Feed not found'
                | 'Campaign ID not found'
                | 'api-key not found'
                | 'DMARC policy requires domain authentication'
                | 'DNS records not properly configured'
                | 'Invalid OTP code provided'
                | 'OTP code has expired'
                | 'Domain already exists in your account'
                | 'The sum of all IP weights must equal 100'
                | 'Authentication failed'
                | 'Insufficient credits'
                | 'Request already processed'
              message: string
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { webhookId: bigint } }
            output: {
              code:
                | 'invalid_parameter'
                | 'missing_parameter'
                | 'out_of_range'
                | 'campaign_processing'
                | 'campaign_sent'
                | 'document_not_found'
                | 'not_enough_credits'
                | 'permission_denied'
                | 'duplicate_parameter'
                | 'duplicate_request'
                | 'method_not_allowed'
                | 'unauthorized'
                | 'account_under_validation'
                | 'not_acceptable'
                | 'bad_request'
                | 'unprocessable_entity'
                | 'Domain does not exist'
                | 'Contact email not found'
                | 'Attribute not found'
                | 'Category id not found'
                | 'Invalid parameters passed'
                | 'Record(s) for identifier not found'
                | 'Returned when query params are invalid'
                | 'Returned when invalid data posted'
                | 'Feed not found'
                | 'Campaign ID not found'
                | 'api-key not found'
                | 'DMARC policy requires domain authentication'
                | 'DNS records not properly configured'
                | 'Invalid OTP code provided'
                | 'OTP code has expired'
                | 'Domain already exists in your account'
                | 'The sum of all IP weights must equal 100'
                | 'Authentication failed'
                | 'Insufficient credits'
                | 'Request already processed'
              message: string
            }
            outputFormat: 'json'
            status: 404
          }
      $get:
        | {
            input: { param: { webhookId: bigint } }
            output: GetWebhook
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { webhookId: bigint } }
            output: {
              code:
                | 'invalid_parameter'
                | 'missing_parameter'
                | 'out_of_range'
                | 'campaign_processing'
                | 'campaign_sent'
                | 'document_not_found'
                | 'not_enough_credits'
                | 'permission_denied'
                | 'duplicate_parameter'
                | 'duplicate_request'
                | 'method_not_allowed'
                | 'unauthorized'
                | 'account_under_validation'
                | 'not_acceptable'
                | 'bad_request'
                | 'unprocessable_entity'
                | 'Domain does not exist'
                | 'Contact email not found'
                | 'Attribute not found'
                | 'Category id not found'
                | 'Invalid parameters passed'
                | 'Record(s) for identifier not found'
                | 'Returned when query params are invalid'
                | 'Returned when invalid data posted'
                | 'Feed not found'
                | 'Campaign ID not found'
                | 'api-key not found'
                | 'DMARC policy requires domain authentication'
                | 'DNS records not properly configured'
                | 'Invalid OTP code provided'
                | 'OTP code has expired'
                | 'Domain already exists in your account'
                | 'The sum of all IP weights must equal 100'
                | 'Authentication failed'
                | 'Insufficient credits'
                | 'Request already processed'
              message: string
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { webhookId: bigint } }
            output: {
              code:
                | 'invalid_parameter'
                | 'missing_parameter'
                | 'out_of_range'
                | 'campaign_processing'
                | 'campaign_sent'
                | 'document_not_found'
                | 'not_enough_credits'
                | 'permission_denied'
                | 'duplicate_parameter'
                | 'duplicate_request'
                | 'method_not_allowed'
                | 'unauthorized'
                | 'account_under_validation'
                | 'not_acceptable'
                | 'bad_request'
                | 'unprocessable_entity'
                | 'Domain does not exist'
                | 'Contact email not found'
                | 'Attribute not found'
                | 'Category id not found'
                | 'Invalid parameters passed'
                | 'Record(s) for identifier not found'
                | 'Returned when query params are invalid'
                | 'Returned when invalid data posted'
                | 'Feed not found'
                | 'Campaign ID not found'
                | 'api-key not found'
                | 'DMARC policy requires domain authentication'
                | 'DNS records not properly configured'
                | 'Invalid OTP code provided'
                | 'OTP code has expired'
                | 'Domain already exists in your account'
                | 'The sum of all IP weights must equal 100'
                | 'Authentication failed'
                | 'Insufficient credits'
                | 'Request already processed'
              message: string
            }
            outputFormat: 'json'
            status: 404
          }
      $put:
        | {
            input: { param: { webhookId: bigint } } & {
              json: {
                auth?: { token?: string | undefined; type?: string | undefined } | undefined
                batched?: boolean | undefined
                description?: string | undefined
                domain?: string | undefined
                events?:
                  | (
                      | 'sent'
                      | 'hardBounce'
                      | 'softBounce'
                      | 'blocked'
                      | 'spam'
                      | 'delivered'
                      | 'request'
                      | 'click'
                      | 'invalid'
                      | 'deferred'
                      | 'opened'
                      | 'uniqueOpened'
                      | 'unsubscribed'
                      | 'listAddition'
                      | 'contactUpdated'
                      | 'contactDeleted'
                      | 'inboundEmailProcessed'
                      | 'reply'
                    )[]
                  | undefined
                headers?: { key?: string | undefined; value?: string | undefined }[] | undefined
                url?: string | undefined
              }
            }
            output: {
              code:
                | 'invalid_parameter'
                | 'missing_parameter'
                | 'out_of_range'
                | 'campaign_processing'
                | 'campaign_sent'
                | 'document_not_found'
                | 'not_enough_credits'
                | 'permission_denied'
                | 'duplicate_parameter'
                | 'duplicate_request'
                | 'method_not_allowed'
                | 'unauthorized'
                | 'account_under_validation'
                | 'not_acceptable'
                | 'bad_request'
                | 'unprocessable_entity'
                | 'Domain does not exist'
                | 'Contact email not found'
                | 'Attribute not found'
                | 'Category id not found'
                | 'Invalid parameters passed'
                | 'Record(s) for identifier not found'
                | 'Returned when query params are invalid'
                | 'Returned when invalid data posted'
                | 'Feed not found'
                | 'Campaign ID not found'
                | 'api-key not found'
                | 'DMARC policy requires domain authentication'
                | 'DNS records not properly configured'
                | 'Invalid OTP code provided'
                | 'OTP code has expired'
                | 'Domain already exists in your account'
                | 'The sum of all IP weights must equal 100'
                | 'Authentication failed'
                | 'Insufficient credits'
                | 'Request already processed'
              message: string
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { webhookId: bigint } } & {
              json: {
                auth?: { token?: string | undefined; type?: string | undefined } | undefined
                batched?: boolean | undefined
                description?: string | undefined
                domain?: string | undefined
                events?:
                  | (
                      | 'sent'
                      | 'hardBounce'
                      | 'softBounce'
                      | 'blocked'
                      | 'spam'
                      | 'delivered'
                      | 'request'
                      | 'click'
                      | 'invalid'
                      | 'deferred'
                      | 'opened'
                      | 'uniqueOpened'
                      | 'unsubscribed'
                      | 'listAddition'
                      | 'contactUpdated'
                      | 'contactDeleted'
                      | 'inboundEmailProcessed'
                      | 'reply'
                    )[]
                  | undefined
                headers?: { key?: string | undefined; value?: string | undefined }[] | undefined
                url?: string | undefined
              }
            }
            output: {
              code:
                | 'invalid_parameter'
                | 'missing_parameter'
                | 'out_of_range'
                | 'campaign_processing'
                | 'campaign_sent'
                | 'document_not_found'
                | 'not_enough_credits'
                | 'permission_denied'
                | 'duplicate_parameter'
                | 'duplicate_request'
                | 'method_not_allowed'
                | 'unauthorized'
                | 'account_under_validation'
                | 'not_acceptable'
                | 'bad_request'
                | 'unprocessable_entity'
                | 'Domain does not exist'
                | 'Contact email not found'
                | 'Attribute not found'
                | 'Category id not found'
                | 'Invalid parameters passed'
                | 'Record(s) for identifier not found'
                | 'Returned when query params are invalid'
                | 'Returned when invalid data posted'
                | 'Feed not found'
                | 'Campaign ID not found'
                | 'api-key not found'
                | 'DMARC policy requires domain authentication'
                | 'DNS records not properly configured'
                | 'Invalid OTP code provided'
                | 'OTP code has expired'
                | 'Domain already exists in your account'
                | 'The sum of all IP weights must equal 100'
                | 'Authentication failed'
                | 'Insufficient credits'
                | 'Request already processed'
              message: string
            }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/feeds': {
      $get:
        | {
            input: {
              query: {
                search?: string | undefined
                startDate?: string | undefined
                endDate?: string | undefined
                sort?: 'asc' | 'desc' | undefined
                authType?: 'basic' | 'token' | 'noAuth' | undefined
                limit?: bigint | undefined
                offset?: bigint | undefined
              }
            }
            output: {
              count: number
              feeds: {
                id: string
                name: string
                url: string
                authType: 'basic' | 'token' | 'noAuth'
                username?: string | undefined
                password?: string | undefined
                token?: string | undefined
                maxRetries: number
                cache: boolean
                headers?: ({ name: string; value: string }[] | null) | undefined
                createdAt: string
                modifiedAt: string
              }[]
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                search?: string | undefined
                startDate?: string | undefined
                endDate?: string | undefined
                sort?: 'asc' | 'desc' | undefined
                authType?: 'basic' | 'token' | 'noAuth' | undefined
                limit?: bigint | undefined
                offset?: bigint | undefined
              }
            }
            output: {
              code:
                | 'invalid_parameter'
                | 'missing_parameter'
                | 'out_of_range'
                | 'campaign_processing'
                | 'campaign_sent'
                | 'document_not_found'
                | 'not_enough_credits'
                | 'permission_denied'
                | 'duplicate_parameter'
                | 'duplicate_request'
                | 'method_not_allowed'
                | 'unauthorized'
                | 'account_under_validation'
                | 'not_acceptable'
                | 'bad_request'
                | 'unprocessable_entity'
                | 'Domain does not exist'
                | 'Contact email not found'
                | 'Attribute not found'
                | 'Category id not found'
                | 'Invalid parameters passed'
                | 'Record(s) for identifier not found'
                | 'Returned when query params are invalid'
                | 'Returned when invalid data posted'
                | 'Feed not found'
                | 'Campaign ID not found'
                | 'api-key not found'
                | 'DMARC policy requires domain authentication'
                | 'DNS records not properly configured'
                | 'Invalid OTP code provided'
                | 'OTP code has expired'
                | 'Domain already exists in your account'
                | 'The sum of all IP weights must equal 100'
                | 'Authentication failed'
                | 'Insufficient credits'
                | 'Request already processed'
              message: string
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                search?: string | undefined
                startDate?: string | undefined
                endDate?: string | undefined
                sort?: 'asc' | 'desc' | undefined
                authType?: 'basic' | 'token' | 'noAuth' | undefined
                limit?: bigint | undefined
                offset?: bigint | undefined
              }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
      $post:
        | {
            input: {
              json: {
                name: string
                url: string
                authType?: 'basic' | 'token' | 'noAuth' | undefined
                username?: string | undefined
                password?: string | undefined
                token?: string | undefined
                maxRetries?: number | undefined
                cache?: boolean | undefined
                headers?: { name: string; value: string }[] | undefined
              }
            }
            output: { id: string }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              json: {
                name: string
                url: string
                authType?: 'basic' | 'token' | 'noAuth' | undefined
                username?: string | undefined
                password?: string | undefined
                token?: string | undefined
                maxRetries?: number | undefined
                cache?: boolean | undefined
                headers?: { name: string; value: string }[] | undefined
              }
            }
            output: {
              code:
                | 'invalid_parameter'
                | 'missing_parameter'
                | 'out_of_range'
                | 'campaign_processing'
                | 'campaign_sent'
                | 'document_not_found'
                | 'not_enough_credits'
                | 'permission_denied'
                | 'duplicate_parameter'
                | 'duplicate_request'
                | 'method_not_allowed'
                | 'unauthorized'
                | 'account_under_validation'
                | 'not_acceptable'
                | 'bad_request'
                | 'unprocessable_entity'
                | 'Domain does not exist'
                | 'Contact email not found'
                | 'Attribute not found'
                | 'Category id not found'
                | 'Invalid parameters passed'
                | 'Record(s) for identifier not found'
                | 'Returned when query params are invalid'
                | 'Returned when invalid data posted'
                | 'Feed not found'
                | 'Campaign ID not found'
                | 'api-key not found'
                | 'DMARC policy requires domain authentication'
                | 'DNS records not properly configured'
                | 'Invalid OTP code provided'
                | 'OTP code has expired'
                | 'Domain already exists in your account'
                | 'The sum of all IP weights must equal 100'
                | 'Authentication failed'
                | 'Insufficient credits'
                | 'Request already processed'
              message: string
            }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/feeds/:uuid': {
      $delete:
        | {
            input: { param: { uuid: string } }
            output: {
              code:
                | 'invalid_parameter'
                | 'missing_parameter'
                | 'out_of_range'
                | 'campaign_processing'
                | 'campaign_sent'
                | 'document_not_found'
                | 'not_enough_credits'
                | 'permission_denied'
                | 'duplicate_parameter'
                | 'duplicate_request'
                | 'method_not_allowed'
                | 'unauthorized'
                | 'account_under_validation'
                | 'not_acceptable'
                | 'bad_request'
                | 'unprocessable_entity'
                | 'Domain does not exist'
                | 'Contact email not found'
                | 'Attribute not found'
                | 'Category id not found'
                | 'Invalid parameters passed'
                | 'Record(s) for identifier not found'
                | 'Returned when query params are invalid'
                | 'Returned when invalid data posted'
                | 'Feed not found'
                | 'Campaign ID not found'
                | 'api-key not found'
                | 'DMARC policy requires domain authentication'
                | 'DNS records not properly configured'
                | 'Invalid OTP code provided'
                | 'OTP code has expired'
                | 'Domain already exists in your account'
                | 'The sum of all IP weights must equal 100'
                | 'Authentication failed'
                | 'Insufficient credits'
                | 'Request already processed'
              message: string
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { uuid: string } }
            output: {
              code:
                | 'invalid_parameter'
                | 'missing_parameter'
                | 'out_of_range'
                | 'campaign_processing'
                | 'campaign_sent'
                | 'document_not_found'
                | 'not_enough_credits'
                | 'permission_denied'
                | 'duplicate_parameter'
                | 'duplicate_request'
                | 'method_not_allowed'
                | 'unauthorized'
                | 'account_under_validation'
                | 'not_acceptable'
                | 'bad_request'
                | 'unprocessable_entity'
                | 'Domain does not exist'
                | 'Contact email not found'
                | 'Attribute not found'
                | 'Category id not found'
                | 'Invalid parameters passed'
                | 'Record(s) for identifier not found'
                | 'Returned when query params are invalid'
                | 'Returned when invalid data posted'
                | 'Feed not found'
                | 'Campaign ID not found'
                | 'api-key not found'
                | 'DMARC policy requires domain authentication'
                | 'DNS records not properly configured'
                | 'Invalid OTP code provided'
                | 'OTP code has expired'
                | 'Domain already exists in your account'
                | 'The sum of all IP weights must equal 100'
                | 'Authentication failed'
                | 'Insufficient credits'
                | 'Request already processed'
              message: string
            }
            outputFormat: 'json'
            status: 404
          }
      $get:
        | {
            input: { param: { uuid: string } }
            output: {
              id: string
              name: string
              url: string
              authType: 'basic' | 'token' | 'noAuth'
              username?: (string | null) | undefined
              password?: (string | null) | undefined
              token?: (string | null) | undefined
              headers?: ({ name: string; value: string }[] | null) | undefined
              maxRetries: number
              cache: boolean
              createdAt: string
              modifiedAt: string
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { uuid: string } }
            output: {
              code:
                | 'invalid_parameter'
                | 'missing_parameter'
                | 'out_of_range'
                | 'campaign_processing'
                | 'campaign_sent'
                | 'document_not_found'
                | 'not_enough_credits'
                | 'permission_denied'
                | 'duplicate_parameter'
                | 'duplicate_request'
                | 'method_not_allowed'
                | 'unauthorized'
                | 'account_under_validation'
                | 'not_acceptable'
                | 'bad_request'
                | 'unprocessable_entity'
                | 'Domain does not exist'
                | 'Contact email not found'
                | 'Attribute not found'
                | 'Category id not found'
                | 'Invalid parameters passed'
                | 'Record(s) for identifier not found'
                | 'Returned when query params are invalid'
                | 'Returned when invalid data posted'
                | 'Feed not found'
                | 'Campaign ID not found'
                | 'api-key not found'
                | 'DMARC policy requires domain authentication'
                | 'DNS records not properly configured'
                | 'Invalid OTP code provided'
                | 'OTP code has expired'
                | 'Domain already exists in your account'
                | 'The sum of all IP weights must equal 100'
                | 'Authentication failed'
                | 'Insufficient credits'
                | 'Request already processed'
              message: string
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { uuid: string } }
            output: {
              code:
                | 'invalid_parameter'
                | 'missing_parameter'
                | 'out_of_range'
                | 'campaign_processing'
                | 'campaign_sent'
                | 'document_not_found'
                | 'not_enough_credits'
                | 'permission_denied'
                | 'duplicate_parameter'
                | 'duplicate_request'
                | 'method_not_allowed'
                | 'unauthorized'
                | 'account_under_validation'
                | 'not_acceptable'
                | 'bad_request'
                | 'unprocessable_entity'
                | 'Domain does not exist'
                | 'Contact email not found'
                | 'Attribute not found'
                | 'Category id not found'
                | 'Invalid parameters passed'
                | 'Record(s) for identifier not found'
                | 'Returned when query params are invalid'
                | 'Returned when invalid data posted'
                | 'Feed not found'
                | 'Campaign ID not found'
                | 'api-key not found'
                | 'DMARC policy requires domain authentication'
                | 'DNS records not properly configured'
                | 'Invalid OTP code provided'
                | 'OTP code has expired'
                | 'Domain already exists in your account'
                | 'The sum of all IP weights must equal 100'
                | 'Authentication failed'
                | 'Insufficient credits'
                | 'Request already processed'
              message: string
            }
            outputFormat: 'json'
            status: 404
          }
      $put:
        | {
            input: { param: { uuid: string } } & {
              json: {
                name?: string | undefined
                url?: string | undefined
                authType?: 'basic' | 'token' | 'noAuth' | undefined
                username?: string | undefined
                password?: string | undefined
                token?: string | undefined
                headers?: { name: string; value: string }[] | undefined
                maxRetries?: number | undefined
                cache?: boolean | undefined
              }
            }
            output: {
              code:
                | 'invalid_parameter'
                | 'missing_parameter'
                | 'out_of_range'
                | 'campaign_processing'
                | 'campaign_sent'
                | 'document_not_found'
                | 'not_enough_credits'
                | 'permission_denied'
                | 'duplicate_parameter'
                | 'duplicate_request'
                | 'method_not_allowed'
                | 'unauthorized'
                | 'account_under_validation'
                | 'not_acceptable'
                | 'bad_request'
                | 'unprocessable_entity'
                | 'Domain does not exist'
                | 'Contact email not found'
                | 'Attribute not found'
                | 'Category id not found'
                | 'Invalid parameters passed'
                | 'Record(s) for identifier not found'
                | 'Returned when query params are invalid'
                | 'Returned when invalid data posted'
                | 'Feed not found'
                | 'Campaign ID not found'
                | 'api-key not found'
                | 'DMARC policy requires domain authentication'
                | 'DNS records not properly configured'
                | 'Invalid OTP code provided'
                | 'OTP code has expired'
                | 'Domain already exists in your account'
                | 'The sum of all IP weights must equal 100'
                | 'Authentication failed'
                | 'Insufficient credits'
                | 'Request already processed'
              message: string
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { uuid: string } } & {
              json: {
                name?: string | undefined
                url?: string | undefined
                authType?: 'basic' | 'token' | 'noAuth' | undefined
                username?: string | undefined
                password?: string | undefined
                token?: string | undefined
                headers?: { name: string; value: string }[] | undefined
                maxRetries?: number | undefined
                cache?: boolean | undefined
              }
            }
            output: {
              code:
                | 'invalid_parameter'
                | 'missing_parameter'
                | 'out_of_range'
                | 'campaign_processing'
                | 'campaign_sent'
                | 'document_not_found'
                | 'not_enough_credits'
                | 'permission_denied'
                | 'duplicate_parameter'
                | 'duplicate_request'
                | 'method_not_allowed'
                | 'unauthorized'
                | 'account_under_validation'
                | 'not_acceptable'
                | 'bad_request'
                | 'unprocessable_entity'
                | 'Domain does not exist'
                | 'Contact email not found'
                | 'Attribute not found'
                | 'Category id not found'
                | 'Invalid parameters passed'
                | 'Record(s) for identifier not found'
                | 'Returned when query params are invalid'
                | 'Returned when invalid data posted'
                | 'Feed not found'
                | 'Campaign ID not found'
                | 'api-key not found'
                | 'DMARC policy requires domain authentication'
                | 'DNS records not properly configured'
                | 'Invalid OTP code provided'
                | 'OTP code has expired'
                | 'Domain already exists in your account'
                | 'The sum of all IP weights must equal 100'
                | 'Authentication failed'
                | 'Insufficient credits'
                | 'Request already processed'
              message: string
            }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/objects/:object_type/batch/upsert': {
      $post:
        | {
            input: { param: { object_type: string } } & {
              json: {
                records: {
                  associations?:
                    | {
                        object_type: string
                        action?: 'link' | 'unlink' | undefined
                        records: {
                          identifiers?:
                            | { ext_id?: string | undefined; id?: number | undefined }
                            | undefined
                        }[]
                      }[]
                    | undefined
                  attributes?: { [x: string]: unknown } | undefined
                  identifiers?: { ext_id?: string | undefined; id?: number | undefined } | undefined
                }[]
              }
            }
            output: { message?: string | undefined; processId?: bigint | undefined }
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { object_type: string } } & {
              json: {
                records: {
                  associations?:
                    | {
                        object_type: string
                        action?: 'link' | 'unlink' | undefined
                        records: {
                          identifiers?:
                            | { ext_id?: string | undefined; id?: number | undefined }
                            | undefined
                        }[]
                      }[]
                    | undefined
                  attributes?: { [x: string]: unknown } | undefined
                  identifiers?: { ext_id?: string | undefined; id?: number | undefined } | undefined
                }[]
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { object_type: string } } & {
              json: {
                records: {
                  associations?:
                    | {
                        object_type: string
                        action?: 'link' | 'unlink' | undefined
                        records: {
                          identifiers?:
                            | { ext_id?: string | undefined; id?: number | undefined }
                            | undefined
                        }[]
                      }[]
                    | undefined
                  attributes?: { [x: string]: unknown } | undefined
                  identifiers?: { ext_id?: string | undefined; id?: number | undefined } | undefined
                }[]
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { object_type: string } } & {
              json: {
                records: {
                  associations?:
                    | {
                        object_type: string
                        action?: 'link' | 'unlink' | undefined
                        records: {
                          identifiers?:
                            | { ext_id?: string | undefined; id?: number | undefined }
                            | undefined
                        }[]
                      }[]
                    | undefined
                  attributes?: { [x: string]: unknown } | undefined
                  identifiers?: { ext_id?: string | undefined; id?: number | undefined } | undefined
                }[]
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { object_type: string } } & {
              json: {
                records: {
                  associations?:
                    | {
                        object_type: string
                        action?: 'link' | 'unlink' | undefined
                        records: {
                          identifiers?:
                            | { ext_id?: string | undefined; id?: number | undefined }
                            | undefined
                        }[]
                      }[]
                    | undefined
                  attributes?: { [x: string]: unknown } | undefined
                  identifiers?: { ext_id?: string | undefined; id?: number | undefined } | undefined
                }[]
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/objects/:object_type/records': {
      $get:
        | {
            input: { param: { object_type: string } } & {
              query: {
                limit: bigint
                page_num: bigint
                sort?: 'asc' | 'desc' | undefined
                association?: 'true' | 'false' | undefined
              }
            }
            output: {
              count?: bigint | undefined
              records?:
                | {
                    associations?:
                      | (
                          | {
                              object_type?: string | undefined
                              records?:
                                | (
                                    | { identifiers?: { id?: number | undefined } | undefined }
                                    | { identifiers?: { id?: number | undefined } | undefined }
                                  )[]
                                | undefined
                            }
                          | {
                              object_type?: string | undefined
                              records?:
                                | (
                                    | { identifiers?: { id?: number | undefined } | undefined }
                                    | { identifiers?: { id?: number | undefined } | undefined }
                                  )[]
                                | undefined
                            }
                        )[]
                      | undefined
                    attributes?: { [x: string]: unknown } | undefined
                    createdAt?: string | undefined
                    identifiers?:
                      | { ext_id?: string | undefined; id?: number | undefined }
                      | undefined
                    updatedAt?: string | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { object_type: string } } & {
              query: {
                limit: bigint
                page_num: bigint
                sort?: 'asc' | 'desc' | undefined
                association?: 'true' | 'false' | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { object_type: string } } & {
              query: {
                limit: bigint
                page_num: bigint
                sort?: 'asc' | 'desc' | undefined
                association?: 'true' | 'false' | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { object_type: string } } & {
              query: {
                limit: bigint
                page_num: bigint
                sort?: 'asc' | 'desc' | undefined
                association?: 'true' | 'false' | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 424
          }
        | {
            input: { param: { object_type: string } } & {
              query: {
                limit: bigint
                page_num: bigint
                sort?: 'asc' | 'desc' | undefined
                association?: 'true' | 'false' | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/objects/:object_type/batch/delete': {
      $post:
        | {
            input: { param: { object_type: string } } & {
              json: { identifiers?: { ids: number[] } | { ext_ids: string[] } | undefined }
            }
            output: { processId?: bigint | undefined; message?: string | undefined }
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { object_type: string } } & {
              json: { identifiers?: { ids: number[] } | { ext_ids: string[] } | undefined }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { object_type: string } } & {
              json: { identifiers?: { ids: number[] } | { ext_ids: string[] } | undefined }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { object_type: string } } & {
              json: { identifiers?: { ids: number[] } | { ext_ids: string[] } | undefined }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/objects/:object_type/associated-records': {
      $get:
        | {
            input: { param: { object_type: string } } & {
              query: {
                id?: bigint | undefined
                ext_id?: string | undefined
                email?: string | undefined
                sms?: string | undefined
                type?: string[] | undefined
                offset?: bigint | undefined
              }
            }
            output: {
              has_more?: boolean | undefined
              items?:
                | {
                    object?:
                      | {
                          attributes?: { [x: string]: unknown } | undefined
                          created_at?: string | undefined
                          ext_id?: string | undefined
                          id?: bigint | undefined
                          updated_at?: string | undefined
                        }
                      | undefined
                    type?: string | undefined
                  }[]
                | undefined
              offset?: bigint | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { object_type: string } } & {
              query: {
                id?: bigint | undefined
                ext_id?: string | undefined
                email?: string | undefined
                sms?: string | undefined
                type?: string[] | undefined
                offset?: bigint | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { object_type: string } } & {
              query: {
                id?: bigint | undefined
                ext_id?: string | undefined
                email?: string | undefined
                sms?: string | undefined
                type?: string[] | undefined
                offset?: bigint | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { object_type: string } } & {
              query: {
                id?: bigint | undefined
                ext_id?: string | undefined
                email?: string | undefined
                sms?: string | undefined
                type?: string[] | undefined
                offset?: bigint | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/contacts': {
      $get:
        | {
            input: {
              query: {
                limit?: bigint | undefined
                offset?: bigint | undefined
                modifiedSince?: string | undefined
                createdSince?: string | undefined
                sort?: 'asc' | 'desc' | undefined
                ids?: bigint[] | undefined
                segmentId?: bigint | undefined
                listIds?: bigint[] | undefined
                filter?: string | undefined
              }
            }
            output: GetContacts
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: bigint | undefined
                offset?: bigint | undefined
                modifiedSince?: string | undefined
                createdSince?: string | undefined
                sort?: 'asc' | 'desc' | undefined
                ids?: bigint[] | undefined
                segmentId?: bigint | undefined
                listIds?: bigint[] | undefined
                filter?: string | undefined
              }
            }
            output: {
              code:
                | 'invalid_parameter'
                | 'missing_parameter'
                | 'out_of_range'
                | 'campaign_processing'
                | 'campaign_sent'
                | 'document_not_found'
                | 'not_enough_credits'
                | 'permission_denied'
                | 'duplicate_parameter'
                | 'duplicate_request'
                | 'method_not_allowed'
                | 'unauthorized'
                | 'account_under_validation'
                | 'not_acceptable'
                | 'bad_request'
                | 'unprocessable_entity'
                | 'Domain does not exist'
                | 'Contact email not found'
                | 'Attribute not found'
                | 'Category id not found'
                | 'Invalid parameters passed'
                | 'Record(s) for identifier not found'
                | 'Returned when query params are invalid'
                | 'Returned when invalid data posted'
                | 'Feed not found'
                | 'Campaign ID not found'
                | 'api-key not found'
                | 'DMARC policy requires domain authentication'
                | 'DNS records not properly configured'
                | 'Invalid OTP code provided'
                | 'OTP code has expired'
                | 'Domain already exists in your account'
                | 'The sum of all IP weights must equal 100'
                | 'Authentication failed'
                | 'Insufficient credits'
                | 'Request already processed'
              message: string
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                limit?: bigint | undefined
                offset?: bigint | undefined
                modifiedSince?: string | undefined
                createdSince?: string | undefined
                sort?: 'asc' | 'desc' | undefined
                ids?: bigint[] | undefined
                segmentId?: bigint | undefined
                listIds?: bigint[] | undefined
                filter?: string | undefined
              }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 429
          }
      $post:
        | {
            input: {
              json: {
                attributes?: { [x: string]: number | string | boolean | string[] } | undefined
                email?: string | undefined
                emailBlacklisted?: boolean | undefined
                ext_id?: string | undefined
                listIds?: bigint[] | undefined
                smsBlacklisted?: boolean | undefined
                smtpBlacklistSender?: string[] | undefined
                updateEnabled?: boolean | undefined
                forceMerge?: boolean | undefined
                getId?: boolean | undefined
              }
            }
            output: { id?: bigint | undefined }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              json: {
                attributes?: { [x: string]: number | string | boolean | string[] } | undefined
                email?: string | undefined
                emailBlacklisted?: boolean | undefined
                ext_id?: string | undefined
                listIds?: bigint[] | undefined
                smsBlacklisted?: boolean | undefined
                smtpBlacklistSender?: string[] | undefined
                updateEnabled?: boolean | undefined
                forceMerge?: boolean | undefined
                getId?: boolean | undefined
              }
            }
            output: ContactErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: {
                attributes?: { [x: string]: number | string | boolean | string[] } | undefined
                email?: string | undefined
                emailBlacklisted?: boolean | undefined
                ext_id?: string | undefined
                listIds?: bigint[] | undefined
                smsBlacklisted?: boolean | undefined
                smtpBlacklistSender?: string[] | undefined
                updateEnabled?: boolean | undefined
                forceMerge?: boolean | undefined
                getId?: boolean | undefined
              }
            }
            output: ContactErrorModel
            outputFormat: 'json'
            status: 425
          }
    }
  } & {
    '/contacts/attributes': {
      $get:
        | {
            input: {}
            output: {
              attributes: {
                calculatedValue?: string | undefined
                category: 'normal' | 'transactional' | 'category' | 'calculated' | 'global'
                enumeration?: { label: string; value: bigint; valueStr: string }[] | undefined
                multiCategoryOptions?: string[] | undefined
                name: string
                type?:
                  | 'text'
                  | 'date'
                  | 'float'
                  | 'id'
                  | 'boolean'
                  | 'multiple-choice'
                  | 'user'
                  | undefined
              }[]
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {}
            output: {
              code:
                | 'invalid_parameter'
                | 'missing_parameter'
                | 'out_of_range'
                | 'campaign_processing'
                | 'campaign_sent'
                | 'document_not_found'
                | 'not_enough_credits'
                | 'permission_denied'
                | 'duplicate_parameter'
                | 'duplicate_request'
                | 'method_not_allowed'
                | 'unauthorized'
                | 'account_under_validation'
                | 'not_acceptable'
                | 'bad_request'
                | 'unprocessable_entity'
                | 'Domain does not exist'
                | 'Contact email not found'
                | 'Attribute not found'
                | 'Category id not found'
                | 'Invalid parameters passed'
                | 'Record(s) for identifier not found'
                | 'Returned when query params are invalid'
                | 'Returned when invalid data posted'
                | 'Feed not found'
                | 'Campaign ID not found'
                | 'api-key not found'
                | 'DMARC policy requires domain authentication'
                | 'DNS records not properly configured'
                | 'Invalid OTP code provided'
                | 'OTP code has expired'
                | 'Domain already exists in your account'
                | 'The sum of all IP weights must equal 100'
                | 'Authentication failed'
                | 'Insufficient credits'
                | 'Request already processed'
              message: string
            }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/contacts/attributes/:attributeCategory/:attributeName': {
      $delete:
        | {
            input: {
              param: {
                attributeCategory: 'normal' | 'transactional' | 'category' | 'calculated' | 'global'
                attributeName: string
              }
            }
            output: {
              code:
                | 'invalid_parameter'
                | 'missing_parameter'
                | 'out_of_range'
                | 'campaign_processing'
                | 'campaign_sent'
                | 'document_not_found'
                | 'not_enough_credits'
                | 'permission_denied'
                | 'duplicate_parameter'
                | 'duplicate_request'
                | 'method_not_allowed'
                | 'unauthorized'
                | 'account_under_validation'
                | 'not_acceptable'
                | 'bad_request'
                | 'unprocessable_entity'
                | 'Domain does not exist'
                | 'Contact email not found'
                | 'Attribute not found'
                | 'Category id not found'
                | 'Invalid parameters passed'
                | 'Record(s) for identifier not found'
                | 'Returned when query params are invalid'
                | 'Returned when invalid data posted'
                | 'Feed not found'
                | 'Campaign ID not found'
                | 'api-key not found'
                | 'DMARC policy requires domain authentication'
                | 'DNS records not properly configured'
                | 'Invalid OTP code provided'
                | 'OTP code has expired'
                | 'Domain already exists in your account'
                | 'The sum of all IP weights must equal 100'
                | 'Authentication failed'
                | 'Insufficient credits'
                | 'Request already processed'
              message: string
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              param: {
                attributeCategory: 'normal' | 'transactional' | 'category' | 'calculated' | 'global'
                attributeName: string
              }
            }
            output: {
              code:
                | 'invalid_parameter'
                | 'missing_parameter'
                | 'out_of_range'
                | 'campaign_processing'
                | 'campaign_sent'
                | 'document_not_found'
                | 'not_enough_credits'
                | 'permission_denied'
                | 'duplicate_parameter'
                | 'duplicate_request'
                | 'method_not_allowed'
                | 'unauthorized'
                | 'account_under_validation'
                | 'not_acceptable'
                | 'bad_request'
                | 'unprocessable_entity'
                | 'Domain does not exist'
                | 'Contact email not found'
                | 'Attribute not found'
                | 'Category id not found'
                | 'Invalid parameters passed'
                | 'Record(s) for identifier not found'
                | 'Returned when query params are invalid'
                | 'Returned when invalid data posted'
                | 'Feed not found'
                | 'Campaign ID not found'
                | 'api-key not found'
                | 'DMARC policy requires domain authentication'
                | 'DNS records not properly configured'
                | 'Invalid OTP code provided'
                | 'OTP code has expired'
                | 'Domain already exists in your account'
                | 'The sum of all IP weights must equal 100'
                | 'Authentication failed'
                | 'Insufficient credits'
                | 'Request already processed'
              message: string
            }
            outputFormat: 'json'
            status: 404
          }
      $post: {
        input: {
          param: {
            attributeCategory: 'normal' | 'transactional' | 'category' | 'calculated' | 'global'
            attributeName: string
          }
        } & {
          json: {
            enumeration?: { label: string; value: number }[] | undefined
            isRecurring?: boolean | undefined
            multiCategoryOptions?: string[] | undefined
            type?:
              | 'text'
              | 'date'
              | 'float'
              | 'boolean'
              | 'id'
              | 'category'
              | 'multiple-choice'
              | 'user'
              | undefined
            value?: string | undefined
          }
        }
        output: {
          code:
            | 'invalid_parameter'
            | 'missing_parameter'
            | 'out_of_range'
            | 'campaign_processing'
            | 'campaign_sent'
            | 'document_not_found'
            | 'not_enough_credits'
            | 'permission_denied'
            | 'duplicate_parameter'
            | 'duplicate_request'
            | 'method_not_allowed'
            | 'unauthorized'
            | 'account_under_validation'
            | 'not_acceptable'
            | 'bad_request'
            | 'unprocessable_entity'
            | 'Domain does not exist'
            | 'Contact email not found'
            | 'Attribute not found'
            | 'Category id not found'
            | 'Invalid parameters passed'
            | 'Record(s) for identifier not found'
            | 'Returned when query params are invalid'
            | 'Returned when invalid data posted'
            | 'Feed not found'
            | 'Campaign ID not found'
            | 'api-key not found'
            | 'DMARC policy requires domain authentication'
            | 'DNS records not properly configured'
            | 'Invalid OTP code provided'
            | 'OTP code has expired'
            | 'Domain already exists in your account'
            | 'The sum of all IP weights must equal 100'
            | 'Authentication failed'
            | 'Insufficient credits'
            | 'Request already processed'
          message: string
        }
        outputFormat: 'json'
        status: 400
      }
      $put:
        | {
            input: {
              param: {
                attributeCategory: 'category' | 'calculated' | 'global' | 'normal'
                attributeName: string
              }
            } & {
              json: {
                enumeration?: { label: string; value: number }[] | undefined
                multiCategoryOptions?: string[] | undefined
                value?: string | undefined
              }
            }
            output: {
              code:
                | 'invalid_parameter'
                | 'missing_parameter'
                | 'out_of_range'
                | 'campaign_processing'
                | 'campaign_sent'
                | 'document_not_found'
                | 'not_enough_credits'
                | 'permission_denied'
                | 'duplicate_parameter'
                | 'duplicate_request'
                | 'method_not_allowed'
                | 'unauthorized'
                | 'account_under_validation'
                | 'not_acceptable'
                | 'bad_request'
                | 'unprocessable_entity'
                | 'Domain does not exist'
                | 'Contact email not found'
                | 'Attribute not found'
                | 'Category id not found'
                | 'Invalid parameters passed'
                | 'Record(s) for identifier not found'
                | 'Returned when query params are invalid'
                | 'Returned when invalid data posted'
                | 'Feed not found'
                | 'Campaign ID not found'
                | 'api-key not found'
                | 'DMARC policy requires domain authentication'
                | 'DNS records not properly configured'
                | 'Invalid OTP code provided'
                | 'OTP code has expired'
                | 'Domain already exists in your account'
                | 'The sum of all IP weights must equal 100'
                | 'Authentication failed'
                | 'Insufficient credits'
                | 'Request already processed'
              message: string
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              param: {
                attributeCategory: 'category' | 'calculated' | 'global' | 'normal'
                attributeName: string
              }
            } & {
              json: {
                enumeration?: { label: string; value: number }[] | undefined
                multiCategoryOptions?: string[] | undefined
                value?: string | undefined
              }
            }
            output: {
              code:
                | 'invalid_parameter'
                | 'missing_parameter'
                | 'out_of_range'
                | 'campaign_processing'
                | 'campaign_sent'
                | 'document_not_found'
                | 'not_enough_credits'
                | 'permission_denied'
                | 'duplicate_parameter'
                | 'duplicate_request'
                | 'method_not_allowed'
                | 'unauthorized'
                | 'account_under_validation'
                | 'not_acceptable'
                | 'bad_request'
                | 'unprocessable_entity'
                | 'Domain does not exist'
                | 'Contact email not found'
                | 'Attribute not found'
                | 'Category id not found'
                | 'Invalid parameters passed'
                | 'Record(s) for identifier not found'
                | 'Returned when query params are invalid'
                | 'Returned when invalid data posted'
                | 'Feed not found'
                | 'Campaign ID not found'
                | 'api-key not found'
                | 'DMARC policy requires domain authentication'
                | 'DNS records not properly configured'
                | 'Invalid OTP code provided'
                | 'OTP code has expired'
                | 'Domain already exists in your account'
                | 'The sum of all IP weights must equal 100'
                | 'Authentication failed'
                | 'Insufficient credits'
                | 'Request already processed'
              message: string
            }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/contacts/attributes/:attributeType/:multipleChoiceAttribute/:multipleChoiceAttributeOption': {
      $delete:
        | {
            input: {
              param: {
                attributeType: 'multiple-choice'
                multipleChoiceAttribute: string
                multipleChoiceAttributeOption: string
              }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: {
              param: {
                attributeType: 'multiple-choice'
                multipleChoiceAttribute: string
                multipleChoiceAttributeOption: string
              }
            }
            output: {
              code:
                | 'invalid_parameter'
                | 'missing_parameter'
                | 'out_of_range'
                | 'campaign_processing'
                | 'campaign_sent'
                | 'document_not_found'
                | 'not_enough_credits'
                | 'permission_denied'
                | 'duplicate_parameter'
                | 'duplicate_request'
                | 'method_not_allowed'
                | 'unauthorized'
                | 'account_under_validation'
                | 'not_acceptable'
                | 'bad_request'
                | 'unprocessable_entity'
                | 'Domain does not exist'
                | 'Contact email not found'
                | 'Attribute not found'
                | 'Category id not found'
                | 'Invalid parameters passed'
                | 'Record(s) for identifier not found'
                | 'Returned when query params are invalid'
                | 'Returned when invalid data posted'
                | 'Feed not found'
                | 'Campaign ID not found'
                | 'api-key not found'
                | 'DMARC policy requires domain authentication'
                | 'DNS records not properly configured'
                | 'Invalid OTP code provided'
                | 'OTP code has expired'
                | 'Domain already exists in your account'
                | 'The sum of all IP weights must equal 100'
                | 'Authentication failed'
                | 'Insufficient credits'
                | 'Request already processed'
              message: string
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              param: {
                attributeType: 'multiple-choice'
                multipleChoiceAttribute: string
                multipleChoiceAttributeOption: string
              }
            }
            output: {
              code:
                | 'invalid_parameter'
                | 'missing_parameter'
                | 'out_of_range'
                | 'campaign_processing'
                | 'campaign_sent'
                | 'document_not_found'
                | 'not_enough_credits'
                | 'permission_denied'
                | 'duplicate_parameter'
                | 'duplicate_request'
                | 'method_not_allowed'
                | 'unauthorized'
                | 'account_under_validation'
                | 'not_acceptable'
                | 'bad_request'
                | 'unprocessable_entity'
                | 'Domain does not exist'
                | 'Contact email not found'
                | 'Attribute not found'
                | 'Category id not found'
                | 'Invalid parameters passed'
                | 'Record(s) for identifier not found'
                | 'Returned when query params are invalid'
                | 'Returned when invalid data posted'
                | 'Feed not found'
                | 'Campaign ID not found'
                | 'api-key not found'
                | 'DMARC policy requires domain authentication'
                | 'DNS records not properly configured'
                | 'Invalid OTP code provided'
                | 'OTP code has expired'
                | 'Domain already exists in your account'
                | 'The sum of all IP weights must equal 100'
                | 'Authentication failed'
                | 'Insufficient credits'
                | 'Request already processed'
              message: string
            }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/contacts/batch': {
      $post: {
        input: {
          json: {
            contacts?:
              | {
                  attributes?: { [x: string]: { [x: string]: unknown } } | undefined
                  email?: string | undefined
                  emailBlacklisted?: boolean | undefined
                  ext_id?: string | undefined
                  id?: bigint | undefined
                  listIds?: bigint[] | undefined
                  sms?: string | undefined
                  smsBlacklisted?: boolean | undefined
                  smtpBlacklistSender?: string[] | undefined
                  unlinkListIds?: bigint[] | undefined
                }[]
              | undefined
          }
        }
        output: {
          code:
            | 'invalid_parameter'
            | 'missing_parameter'
            | 'out_of_range'
            | 'campaign_processing'
            | 'campaign_sent'
            | 'document_not_found'
            | 'not_enough_credits'
            | 'permission_denied'
            | 'duplicate_parameter'
            | 'duplicate_request'
            | 'method_not_allowed'
            | 'unauthorized'
            | 'account_under_validation'
            | 'not_acceptable'
            | 'bad_request'
            | 'unprocessable_entity'
            | 'Domain does not exist'
            | 'Contact email not found'
            | 'Attribute not found'
            | 'Category id not found'
            | 'Invalid parameters passed'
            | 'Record(s) for identifier not found'
            | 'Returned when query params are invalid'
            | 'Returned when invalid data posted'
            | 'Feed not found'
            | 'Campaign ID not found'
            | 'api-key not found'
            | 'DMARC policy requires domain authentication'
            | 'DNS records not properly configured'
            | 'Invalid OTP code provided'
            | 'OTP code has expired'
            | 'Domain already exists in your account'
            | 'The sum of all IP weights must equal 100'
            | 'Authentication failed'
            | 'Insufficient credits'
            | 'Request already processed'
          message: string
        }
        outputFormat: 'json'
        status: 400
      }
    }
  } & {
    '/contacts/doubleOptinConfirmation': {
      $post: {
        input: {
          json: {
            attributes?: { [x: string]: number | string | boolean | string[] } | undefined
            contactPixelTrackingConsent?: boolean | undefined
            email: string
            excludeListIds?: bigint[] | undefined
            includeListIds: bigint[]
            redirectionUrl: string
            templateId: bigint
          }
        }
        output: {
          code:
            | 'invalid_parameter'
            | 'missing_parameter'
            | 'out_of_range'
            | 'campaign_processing'
            | 'campaign_sent'
            | 'document_not_found'
            | 'not_enough_credits'
            | 'permission_denied'
            | 'duplicate_parameter'
            | 'duplicate_request'
            | 'method_not_allowed'
            | 'unauthorized'
            | 'account_under_validation'
            | 'not_acceptable'
            | 'bad_request'
            | 'unprocessable_entity'
            | 'Domain does not exist'
            | 'Contact email not found'
            | 'Attribute not found'
            | 'Category id not found'
            | 'Invalid parameters passed'
            | 'Record(s) for identifier not found'
            | 'Returned when query params are invalid'
            | 'Returned when invalid data posted'
            | 'Feed not found'
            | 'Campaign ID not found'
            | 'api-key not found'
            | 'DMARC policy requires domain authentication'
            | 'DNS records not properly configured'
            | 'Invalid OTP code provided'
            | 'OTP code has expired'
            | 'Domain already exists in your account'
            | 'The sum of all IP weights must equal 100'
            | 'Authentication failed'
            | 'Insufficient credits'
            | 'Request already processed'
          message: string
        }
        outputFormat: 'json'
        status: 400
      }
    }
  } & {
    '/contacts/export': {
      $post:
        | {
            input: {
              json: {
                customContactFilter: {
                  actionForContacts?:
                    | 'allContacts'
                    | 'subscribed'
                    | 'unsubscribed'
                    | 'unsubscribedPerList'
                    | undefined
                  actionForEmailCampaigns?:
                    | 'openers'
                    | 'nonOpeners'
                    | 'clickers'
                    | 'nonClickers'
                    | 'unsubscribed'
                    | 'hardBounces'
                    | 'softBounces'
                    | undefined
                  actionForSmsCampaigns?: 'hardBounces' | 'softBounces' | 'unsubscribed' | undefined
                  createdSince?: string | undefined
                  emailCampaignId?: bigint | undefined
                  listId?: bigint | undefined
                  modifiedSince?: string | undefined
                  segmentId?: bigint | undefined
                  smsCampaignId?: bigint | undefined
                }
                disableNotification?: boolean | undefined
                exportAttributes?: string[] | undefined
                exportMandatoryAttributes?: boolean | undefined
                exportMetadata?: string[] | undefined
                exportDateInUTC?: boolean | undefined
                exportSubscriptionStatus?: string[] | undefined
                notifyUrl?: string | undefined
              }
            }
            output: { processId: bigint }
            outputFormat: 'json'
            status: 202
          }
        | {
            input: {
              json: {
                customContactFilter: {
                  actionForContacts?:
                    | 'allContacts'
                    | 'subscribed'
                    | 'unsubscribed'
                    | 'unsubscribedPerList'
                    | undefined
                  actionForEmailCampaigns?:
                    | 'openers'
                    | 'nonOpeners'
                    | 'clickers'
                    | 'nonClickers'
                    | 'unsubscribed'
                    | 'hardBounces'
                    | 'softBounces'
                    | undefined
                  actionForSmsCampaigns?: 'hardBounces' | 'softBounces' | 'unsubscribed' | undefined
                  createdSince?: string | undefined
                  emailCampaignId?: bigint | undefined
                  listId?: bigint | undefined
                  modifiedSince?: string | undefined
                  segmentId?: bigint | undefined
                  smsCampaignId?: bigint | undefined
                }
                disableNotification?: boolean | undefined
                exportAttributes?: string[] | undefined
                exportMandatoryAttributes?: boolean | undefined
                exportMetadata?: string[] | undefined
                exportDateInUTC?: boolean | undefined
                exportSubscriptionStatus?: string[] | undefined
                notifyUrl?: string | undefined
              }
            }
            output: {
              code:
                | 'invalid_parameter'
                | 'missing_parameter'
                | 'out_of_range'
                | 'campaign_processing'
                | 'campaign_sent'
                | 'document_not_found'
                | 'not_enough_credits'
                | 'permission_denied'
                | 'duplicate_parameter'
                | 'duplicate_request'
                | 'method_not_allowed'
                | 'unauthorized'
                | 'account_under_validation'
                | 'not_acceptable'
                | 'bad_request'
                | 'unprocessable_entity'
                | 'Domain does not exist'
                | 'Contact email not found'
                | 'Attribute not found'
                | 'Category id not found'
                | 'Invalid parameters passed'
                | 'Record(s) for identifier not found'
                | 'Returned when query params are invalid'
                | 'Returned when invalid data posted'
                | 'Feed not found'
                | 'Campaign ID not found'
                | 'api-key not found'
                | 'DMARC policy requires domain authentication'
                | 'DNS records not properly configured'
                | 'Invalid OTP code provided'
                | 'OTP code has expired'
                | 'Domain already exists in your account'
                | 'The sum of all IP weights must equal 100'
                | 'Authentication failed'
                | 'Insufficient credits'
                | 'Request already processed'
              message: string
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: {
                customContactFilter: {
                  actionForContacts?:
                    | 'allContacts'
                    | 'subscribed'
                    | 'unsubscribed'
                    | 'unsubscribedPerList'
                    | undefined
                  actionForEmailCampaigns?:
                    | 'openers'
                    | 'nonOpeners'
                    | 'clickers'
                    | 'nonClickers'
                    | 'unsubscribed'
                    | 'hardBounces'
                    | 'softBounces'
                    | undefined
                  actionForSmsCampaigns?: 'hardBounces' | 'softBounces' | 'unsubscribed' | undefined
                  createdSince?: string | undefined
                  emailCampaignId?: bigint | undefined
                  listId?: bigint | undefined
                  modifiedSince?: string | undefined
                  segmentId?: bigint | undefined
                  smsCampaignId?: bigint | undefined
                }
                disableNotification?: boolean | undefined
                exportAttributes?: string[] | undefined
                exportMandatoryAttributes?: boolean | undefined
                exportMetadata?: string[] | undefined
                exportDateInUTC?: boolean | undefined
                exportSubscriptionStatus?: string[] | undefined
                notifyUrl?: string | undefined
              }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/contacts/folders': {
      $get:
        | {
            input: {
              query: {
                limit?: bigint | undefined
                offset?: bigint | undefined
                sort?: 'asc' | 'desc' | undefined
              }
            }
            output: {
              count?: bigint | undefined
              folders?:
                | {
                    id: bigint
                    name: string
                    totalBlacklisted: bigint
                    totalSubscribers: bigint
                    uniqueSubscribers: bigint
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: bigint | undefined
                offset?: bigint | undefined
                sort?: 'asc' | 'desc' | undefined
              }
            }
            output: {
              code:
                | 'invalid_parameter'
                | 'missing_parameter'
                | 'out_of_range'
                | 'campaign_processing'
                | 'campaign_sent'
                | 'document_not_found'
                | 'not_enough_credits'
                | 'permission_denied'
                | 'duplicate_parameter'
                | 'duplicate_request'
                | 'method_not_allowed'
                | 'unauthorized'
                | 'account_under_validation'
                | 'not_acceptable'
                | 'bad_request'
                | 'unprocessable_entity'
                | 'Domain does not exist'
                | 'Contact email not found'
                | 'Attribute not found'
                | 'Category id not found'
                | 'Invalid parameters passed'
                | 'Record(s) for identifier not found'
                | 'Returned when query params are invalid'
                | 'Returned when invalid data posted'
                | 'Feed not found'
                | 'Campaign ID not found'
                | 'api-key not found'
                | 'DMARC policy requires domain authentication'
                | 'DNS records not properly configured'
                | 'Invalid OTP code provided'
                | 'OTP code has expired'
                | 'Domain already exists in your account'
                | 'The sum of all IP weights must equal 100'
                | 'Authentication failed'
                | 'Insufficient credits'
                | 'Request already processed'
              message: string
            }
            outputFormat: 'json'
            status: 400
          }
      $post:
        | {
            input: { json: CreateUpdateFolder }
            output: { id: bigint }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: CreateUpdateFolder }
            output: {
              code:
                | 'invalid_parameter'
                | 'missing_parameter'
                | 'out_of_range'
                | 'campaign_processing'
                | 'campaign_sent'
                | 'document_not_found'
                | 'not_enough_credits'
                | 'permission_denied'
                | 'duplicate_parameter'
                | 'duplicate_request'
                | 'method_not_allowed'
                | 'unauthorized'
                | 'account_under_validation'
                | 'not_acceptable'
                | 'bad_request'
                | 'unprocessable_entity'
                | 'Domain does not exist'
                | 'Contact email not found'
                | 'Attribute not found'
                | 'Category id not found'
                | 'Invalid parameters passed'
                | 'Record(s) for identifier not found'
                | 'Returned when query params are invalid'
                | 'Returned when invalid data posted'
                | 'Feed not found'
                | 'Campaign ID not found'
                | 'api-key not found'
                | 'DMARC policy requires domain authentication'
                | 'DNS records not properly configured'
                | 'Invalid OTP code provided'
                | 'OTP code has expired'
                | 'Domain already exists in your account'
                | 'The sum of all IP weights must equal 100'
                | 'Authentication failed'
                | 'Insufficient credits'
                | 'Request already processed'
              message: string
            }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/contacts/folders/:folderId': {
      $delete:
        | {
            input: { param: { folderId: bigint } }
            output: {
              code:
                | 'invalid_parameter'
                | 'missing_parameter'
                | 'out_of_range'
                | 'campaign_processing'
                | 'campaign_sent'
                | 'document_not_found'
                | 'not_enough_credits'
                | 'permission_denied'
                | 'duplicate_parameter'
                | 'duplicate_request'
                | 'method_not_allowed'
                | 'unauthorized'
                | 'account_under_validation'
                | 'not_acceptable'
                | 'bad_request'
                | 'unprocessable_entity'
                | 'Domain does not exist'
                | 'Contact email not found'
                | 'Attribute not found'
                | 'Category id not found'
                | 'Invalid parameters passed'
                | 'Record(s) for identifier not found'
                | 'Returned when query params are invalid'
                | 'Returned when invalid data posted'
                | 'Feed not found'
                | 'Campaign ID not found'
                | 'api-key not found'
                | 'DMARC policy requires domain authentication'
                | 'DNS records not properly configured'
                | 'Invalid OTP code provided'
                | 'OTP code has expired'
                | 'Domain already exists in your account'
                | 'The sum of all IP weights must equal 100'
                | 'Authentication failed'
                | 'Insufficient credits'
                | 'Request already processed'
              message: string
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { folderId: bigint } }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
      $get:
        | {
            input: { param: { folderId: bigint } }
            output: GetFolder
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { folderId: bigint } }
            output: {
              code:
                | 'invalid_parameter'
                | 'missing_parameter'
                | 'out_of_range'
                | 'campaign_processing'
                | 'campaign_sent'
                | 'document_not_found'
                | 'not_enough_credits'
                | 'permission_denied'
                | 'duplicate_parameter'
                | 'duplicate_request'
                | 'method_not_allowed'
                | 'unauthorized'
                | 'account_under_validation'
                | 'not_acceptable'
                | 'bad_request'
                | 'unprocessable_entity'
                | 'Domain does not exist'
                | 'Contact email not found'
                | 'Attribute not found'
                | 'Category id not found'
                | 'Invalid parameters passed'
                | 'Record(s) for identifier not found'
                | 'Returned when query params are invalid'
                | 'Returned when invalid data posted'
                | 'Feed not found'
                | 'Campaign ID not found'
                | 'api-key not found'
                | 'DMARC policy requires domain authentication'
                | 'DNS records not properly configured'
                | 'Invalid OTP code provided'
                | 'OTP code has expired'
                | 'Domain already exists in your account'
                | 'The sum of all IP weights must equal 100'
                | 'Authentication failed'
                | 'Insufficient credits'
                | 'Request already processed'
              message: string
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { folderId: bigint } }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
      $put:
        | {
            input: { param: { folderId: bigint } } & { json: CreateUpdateFolder }
            output: {
              code:
                | 'invalid_parameter'
                | 'missing_parameter'
                | 'out_of_range'
                | 'campaign_processing'
                | 'campaign_sent'
                | 'document_not_found'
                | 'not_enough_credits'
                | 'permission_denied'
                | 'duplicate_parameter'
                | 'duplicate_request'
                | 'method_not_allowed'
                | 'unauthorized'
                | 'account_under_validation'
                | 'not_acceptable'
                | 'bad_request'
                | 'unprocessable_entity'
                | 'Domain does not exist'
                | 'Contact email not found'
                | 'Attribute not found'
                | 'Category id not found'
                | 'Invalid parameters passed'
                | 'Record(s) for identifier not found'
                | 'Returned when query params are invalid'
                | 'Returned when invalid data posted'
                | 'Feed not found'
                | 'Campaign ID not found'
                | 'api-key not found'
                | 'DMARC policy requires domain authentication'
                | 'DNS records not properly configured'
                | 'Invalid OTP code provided'
                | 'OTP code has expired'
                | 'Domain already exists in your account'
                | 'The sum of all IP weights must equal 100'
                | 'Authentication failed'
                | 'Insufficient credits'
                | 'Request already processed'
              message: string
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { folderId: bigint } } & { json: CreateUpdateFolder }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/contacts/folders/:folderId/lists': {
      $get:
        | {
            input: { param: { folderId: bigint } } & {
              query: {
                limit?: bigint | undefined
                offset?: bigint | undefined
                sort?: 'asc' | 'desc' | undefined
              }
            }
            output: {
              count?: bigint | undefined
              lists?:
                | {
                    id: bigint
                    name: string
                    totalBlacklisted: bigint
                    totalSubscribers: bigint
                    uniqueSubscribers: bigint
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { folderId: bigint } } & {
              query: {
                limit?: bigint | undefined
                offset?: bigint | undefined
                sort?: 'asc' | 'desc' | undefined
              }
            }
            output: {
              code:
                | 'invalid_parameter'
                | 'missing_parameter'
                | 'out_of_range'
                | 'campaign_processing'
                | 'campaign_sent'
                | 'document_not_found'
                | 'not_enough_credits'
                | 'permission_denied'
                | 'duplicate_parameter'
                | 'duplicate_request'
                | 'method_not_allowed'
                | 'unauthorized'
                | 'account_under_validation'
                | 'not_acceptable'
                | 'bad_request'
                | 'unprocessable_entity'
                | 'Domain does not exist'
                | 'Contact email not found'
                | 'Attribute not found'
                | 'Category id not found'
                | 'Invalid parameters passed'
                | 'Record(s) for identifier not found'
                | 'Returned when query params are invalid'
                | 'Returned when invalid data posted'
                | 'Feed not found'
                | 'Campaign ID not found'
                | 'api-key not found'
                | 'DMARC policy requires domain authentication'
                | 'DNS records not properly configured'
                | 'Invalid OTP code provided'
                | 'OTP code has expired'
                | 'Domain already exists in your account'
                | 'The sum of all IP weights must equal 100'
                | 'Authentication failed'
                | 'Insufficient credits'
                | 'Request already processed'
              message: string
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { folderId: bigint } } & {
              query: {
                limit?: bigint | undefined
                offset?: bigint | undefined
                sort?: 'asc' | 'desc' | undefined
              }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/contacts/import': {
      $post:
        | {
            input: {
              json: {
                disableNotification?: boolean | undefined
                emailBlacklist?: boolean | undefined
                emptyContactsAttributes?: boolean | undefined
                fileBody?: string | undefined
                fileUrl?: string | undefined
                jsonBody?:
                  | {
                      attributes?: { [x: string]: unknown } | undefined
                      email?: string | undefined
                    }[]
                  | undefined
                listIds?: bigint[] | undefined
                consentGroupIds?: bigint[] | undefined
                newList?:
                  | { folderId?: bigint | undefined; listName?: string | undefined }
                  | undefined
                notifyUrl?: string | undefined
                smsBlacklist?: boolean | undefined
                updateExistingContacts?: boolean | undefined
              }
            }
            output: { processId: bigint }
            outputFormat: 'json'
            status: 202
          }
        | {
            input: {
              json: {
                disableNotification?: boolean | undefined
                emailBlacklist?: boolean | undefined
                emptyContactsAttributes?: boolean | undefined
                fileBody?: string | undefined
                fileUrl?: string | undefined
                jsonBody?:
                  | {
                      attributes?: { [x: string]: unknown } | undefined
                      email?: string | undefined
                    }[]
                  | undefined
                listIds?: bigint[] | undefined
                consentGroupIds?: bigint[] | undefined
                newList?:
                  | { folderId?: bigint | undefined; listName?: string | undefined }
                  | undefined
                notifyUrl?: string | undefined
                smsBlacklist?: boolean | undefined
                updateExistingContacts?: boolean | undefined
              }
            }
            output: {
              code:
                | 'invalid_parameter'
                | 'missing_parameter'
                | 'out_of_range'
                | 'campaign_processing'
                | 'campaign_sent'
                | 'document_not_found'
                | 'not_enough_credits'
                | 'permission_denied'
                | 'duplicate_parameter'
                | 'duplicate_request'
                | 'method_not_allowed'
                | 'unauthorized'
                | 'account_under_validation'
                | 'not_acceptable'
                | 'bad_request'
                | 'unprocessable_entity'
                | 'Domain does not exist'
                | 'Contact email not found'
                | 'Attribute not found'
                | 'Category id not found'
                | 'Invalid parameters passed'
                | 'Record(s) for identifier not found'
                | 'Returned when query params are invalid'
                | 'Returned when invalid data posted'
                | 'Feed not found'
                | 'Campaign ID not found'
                | 'api-key not found'
                | 'DMARC policy requires domain authentication'
                | 'DNS records not properly configured'
                | 'Invalid OTP code provided'
                | 'OTP code has expired'
                | 'Domain already exists in your account'
                | 'The sum of all IP weights must equal 100'
                | 'Authentication failed'
                | 'Insufficient credits'
                | 'Request already processed'
              message: string
            }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/contacts/lists': {
      $get:
        | {
            input: {
              query: {
                limit?: bigint | undefined
                offset?: bigint | undefined
                sort?: 'asc' | 'desc' | undefined
              }
            }
            output: {
              count?: bigint | undefined
              lists?:
                | {
                    id: bigint
                    name: string
                    totalBlacklisted: bigint
                    totalSubscribers: bigint
                    uniqueSubscribers: bigint
                    folderId: bigint
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: bigint | undefined
                offset?: bigint | undefined
                sort?: 'asc' | 'desc' | undefined
              }
            }
            output: {
              code:
                | 'invalid_parameter'
                | 'missing_parameter'
                | 'out_of_range'
                | 'campaign_processing'
                | 'campaign_sent'
                | 'document_not_found'
                | 'not_enough_credits'
                | 'permission_denied'
                | 'duplicate_parameter'
                | 'duplicate_request'
                | 'method_not_allowed'
                | 'unauthorized'
                | 'account_under_validation'
                | 'not_acceptable'
                | 'bad_request'
                | 'unprocessable_entity'
                | 'Domain does not exist'
                | 'Contact email not found'
                | 'Attribute not found'
                | 'Category id not found'
                | 'Invalid parameters passed'
                | 'Record(s) for identifier not found'
                | 'Returned when query params are invalid'
                | 'Returned when invalid data posted'
                | 'Feed not found'
                | 'Campaign ID not found'
                | 'api-key not found'
                | 'DMARC policy requires domain authentication'
                | 'DNS records not properly configured'
                | 'Invalid OTP code provided'
                | 'OTP code has expired'
                | 'Domain already exists in your account'
                | 'The sum of all IP weights must equal 100'
                | 'Authentication failed'
                | 'Insufficient credits'
                | 'Request already processed'
              message: string
            }
            outputFormat: 'json'
            status: 400
          }
      $post:
        | {
            input: { json: { folderId: bigint; name: string } }
            output: { id: bigint }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: { folderId: bigint; name: string } }
            output: {
              code:
                | 'invalid_parameter'
                | 'missing_parameter'
                | 'out_of_range'
                | 'campaign_processing'
                | 'campaign_sent'
                | 'document_not_found'
                | 'not_enough_credits'
                | 'permission_denied'
                | 'duplicate_parameter'
                | 'duplicate_request'
                | 'method_not_allowed'
                | 'unauthorized'
                | 'account_under_validation'
                | 'not_acceptable'
                | 'bad_request'
                | 'unprocessable_entity'
                | 'Domain does not exist'
                | 'Contact email not found'
                | 'Attribute not found'
                | 'Category id not found'
                | 'Invalid parameters passed'
                | 'Record(s) for identifier not found'
                | 'Returned when query params are invalid'
                | 'Returned when invalid data posted'
                | 'Feed not found'
                | 'Campaign ID not found'
                | 'api-key not found'
                | 'DMARC policy requires domain authentication'
                | 'DNS records not properly configured'
                | 'Invalid OTP code provided'
                | 'OTP code has expired'
                | 'Domain already exists in your account'
                | 'The sum of all IP weights must equal 100'
                | 'Authentication failed'
                | 'Insufficient credits'
                | 'Request already processed'
              message: string
            }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/contacts/lists/:listId': {
      $delete:
        | {
            input: { param: { listId: bigint } }
            output: {
              code:
                | 'invalid_parameter'
                | 'missing_parameter'
                | 'out_of_range'
                | 'campaign_processing'
                | 'campaign_sent'
                | 'document_not_found'
                | 'not_enough_credits'
                | 'permission_denied'
                | 'duplicate_parameter'
                | 'duplicate_request'
                | 'method_not_allowed'
                | 'unauthorized'
                | 'account_under_validation'
                | 'not_acceptable'
                | 'bad_request'
                | 'unprocessable_entity'
                | 'Domain does not exist'
                | 'Contact email not found'
                | 'Attribute not found'
                | 'Category id not found'
                | 'Invalid parameters passed'
                | 'Record(s) for identifier not found'
                | 'Returned when query params are invalid'
                | 'Returned when invalid data posted'
                | 'Feed not found'
                | 'Campaign ID not found'
                | 'api-key not found'
                | 'DMARC policy requires domain authentication'
                | 'DNS records not properly configured'
                | 'Invalid OTP code provided'
                | 'OTP code has expired'
                | 'Domain already exists in your account'
                | 'The sum of all IP weights must equal 100'
                | 'Authentication failed'
                | 'Insufficient credits'
                | 'Request already processed'
              message: string
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { listId: bigint } }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
      $get:
        | {
            input: { param: { listId: bigint } } & {
              query: { startDate?: string | undefined; endDate?: string | undefined }
            }
            output: {
              id: bigint
              name: string
              totalBlacklisted: bigint
              totalSubscribers: bigint
              uniqueSubscribers: bigint
              campaignStats?: { campaignId: bigint; stats: GetCampaignStats }[] | undefined
              createdAt: string
              dynamicList?: boolean | undefined
              folderId: bigint
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { listId: bigint } } & {
              query: { startDate?: string | undefined; endDate?: string | undefined }
            }
            output: {
              code:
                | 'invalid_parameter'
                | 'missing_parameter'
                | 'out_of_range'
                | 'campaign_processing'
                | 'campaign_sent'
                | 'document_not_found'
                | 'not_enough_credits'
                | 'permission_denied'
                | 'duplicate_parameter'
                | 'duplicate_request'
                | 'method_not_allowed'
                | 'unauthorized'
                | 'account_under_validation'
                | 'not_acceptable'
                | 'bad_request'
                | 'unprocessable_entity'
                | 'Domain does not exist'
                | 'Contact email not found'
                | 'Attribute not found'
                | 'Category id not found'
                | 'Invalid parameters passed'
                | 'Record(s) for identifier not found'
                | 'Returned when query params are invalid'
                | 'Returned when invalid data posted'
                | 'Feed not found'
                | 'Campaign ID not found'
                | 'api-key not found'
                | 'DMARC policy requires domain authentication'
                | 'DNS records not properly configured'
                | 'Invalid OTP code provided'
                | 'OTP code has expired'
                | 'Domain already exists in your account'
                | 'The sum of all IP weights must equal 100'
                | 'Authentication failed'
                | 'Insufficient credits'
                | 'Request already processed'
              message: string
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { listId: bigint } } & {
              query: { startDate?: string | undefined; endDate?: string | undefined }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
      $put:
        | {
            input: { param: { listId: bigint } } & {
              json: { folderId?: bigint | undefined; name?: string | undefined }
            }
            output: {
              code:
                | 'invalid_parameter'
                | 'missing_parameter'
                | 'out_of_range'
                | 'campaign_processing'
                | 'campaign_sent'
                | 'document_not_found'
                | 'not_enough_credits'
                | 'permission_denied'
                | 'duplicate_parameter'
                | 'duplicate_request'
                | 'method_not_allowed'
                | 'unauthorized'
                | 'account_under_validation'
                | 'not_acceptable'
                | 'bad_request'
                | 'unprocessable_entity'
                | 'Domain does not exist'
                | 'Contact email not found'
                | 'Attribute not found'
                | 'Category id not found'
                | 'Invalid parameters passed'
                | 'Record(s) for identifier not found'
                | 'Returned when query params are invalid'
                | 'Returned when invalid data posted'
                | 'Feed not found'
                | 'Campaign ID not found'
                | 'api-key not found'
                | 'DMARC policy requires domain authentication'
                | 'DNS records not properly configured'
                | 'Invalid OTP code provided'
                | 'OTP code has expired'
                | 'Domain already exists in your account'
                | 'The sum of all IP weights must equal 100'
                | 'Authentication failed'
                | 'Insufficient credits'
                | 'Request already processed'
              message: string
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { listId: bigint } } & {
              json: { folderId?: bigint | undefined; name?: string | undefined }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/contacts/lists/:listId/contacts': {
      $get:
        | {
            input: { param: { listId: bigint } } & {
              query: {
                modifiedSince?: string | undefined
                limit?: bigint | undefined
                offset?: bigint | undefined
                sort?: 'asc' | 'desc' | undefined
              }
            }
            output: GetContacts
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { listId: bigint } } & {
              query: {
                modifiedSince?: string | undefined
                limit?: bigint | undefined
                offset?: bigint | undefined
                sort?: 'asc' | 'desc' | undefined
              }
            }
            output: {
              code:
                | 'invalid_parameter'
                | 'missing_parameter'
                | 'out_of_range'
                | 'campaign_processing'
                | 'campaign_sent'
                | 'document_not_found'
                | 'not_enough_credits'
                | 'permission_denied'
                | 'duplicate_parameter'
                | 'duplicate_request'
                | 'method_not_allowed'
                | 'unauthorized'
                | 'account_under_validation'
                | 'not_acceptable'
                | 'bad_request'
                | 'unprocessable_entity'
                | 'Domain does not exist'
                | 'Contact email not found'
                | 'Attribute not found'
                | 'Category id not found'
                | 'Invalid parameters passed'
                | 'Record(s) for identifier not found'
                | 'Returned when query params are invalid'
                | 'Returned when invalid data posted'
                | 'Feed not found'
                | 'Campaign ID not found'
                | 'api-key not found'
                | 'DMARC policy requires domain authentication'
                | 'DNS records not properly configured'
                | 'Invalid OTP code provided'
                | 'OTP code has expired'
                | 'Domain already exists in your account'
                | 'The sum of all IP weights must equal 100'
                | 'Authentication failed'
                | 'Insufficient credits'
                | 'Request already processed'
              message: string
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { listId: bigint } } & {
              query: {
                modifiedSince?: string | undefined
                limit?: bigint | undefined
                offset?: bigint | undefined
                sort?: 'asc' | 'desc' | undefined
              }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { listId: bigint } } & {
              query: {
                modifiedSince?: string | undefined
                limit?: bigint | undefined
                offset?: bigint | undefined
                sort?: 'asc' | 'desc' | undefined
              }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/contacts/lists/:listId/contacts/add': {
      $post:
        | {
            input: { param: { listId: bigint } } & {
              json:
                | { emails?: string[] | undefined }
                | { ids?: bigint[] | undefined }
                | { extIds?: string[] | undefined }
            }
            output: PostContactInfo
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { listId: bigint } } & {
              json:
                | { emails?: string[] | undefined }
                | { ids?: bigint[] | undefined }
                | { extIds?: string[] | undefined }
            }
            output: {
              code:
                | 'invalid_parameter'
                | 'missing_parameter'
                | 'out_of_range'
                | 'campaign_processing'
                | 'campaign_sent'
                | 'document_not_found'
                | 'not_enough_credits'
                | 'permission_denied'
                | 'duplicate_parameter'
                | 'duplicate_request'
                | 'method_not_allowed'
                | 'unauthorized'
                | 'account_under_validation'
                | 'not_acceptable'
                | 'bad_request'
                | 'unprocessable_entity'
                | 'Domain does not exist'
                | 'Contact email not found'
                | 'Attribute not found'
                | 'Category id not found'
                | 'Invalid parameters passed'
                | 'Record(s) for identifier not found'
                | 'Returned when query params are invalid'
                | 'Returned when invalid data posted'
                | 'Feed not found'
                | 'Campaign ID not found'
                | 'api-key not found'
                | 'DMARC policy requires domain authentication'
                | 'DNS records not properly configured'
                | 'Invalid OTP code provided'
                | 'OTP code has expired'
                | 'Domain already exists in your account'
                | 'The sum of all IP weights must equal 100'
                | 'Authentication failed'
                | 'Insufficient credits'
                | 'Request already processed'
              message: string
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { listId: bigint } } & {
              json:
                | { emails?: string[] | undefined }
                | { ids?: bigint[] | undefined }
                | { extIds?: string[] | undefined }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/contacts/lists/:listId/contacts/remove': {
      $post:
        | {
            input: { param: { listId: bigint } } & {
              json:
                | { emails?: string[] | undefined }
                | { ids?: bigint[] | undefined }
                | { all?: boolean | undefined }
                | { extIds?: string[] | undefined }
            }
            output: PostContactInfo
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { listId: bigint } } & {
              json:
                | { emails?: string[] | undefined }
                | { ids?: bigint[] | undefined }
                | { all?: boolean | undefined }
                | { extIds?: string[] | undefined }
            }
            output: {
              code:
                | 'invalid_parameter'
                | 'missing_parameter'
                | 'out_of_range'
                | 'campaign_processing'
                | 'campaign_sent'
                | 'document_not_found'
                | 'not_enough_credits'
                | 'permission_denied'
                | 'duplicate_parameter'
                | 'duplicate_request'
                | 'method_not_allowed'
                | 'unauthorized'
                | 'account_under_validation'
                | 'not_acceptable'
                | 'bad_request'
                | 'unprocessable_entity'
                | 'Domain does not exist'
                | 'Contact email not found'
                | 'Attribute not found'
                | 'Category id not found'
                | 'Invalid parameters passed'
                | 'Record(s) for identifier not found'
                | 'Returned when query params are invalid'
                | 'Returned when invalid data posted'
                | 'Feed not found'
                | 'Campaign ID not found'
                | 'api-key not found'
                | 'DMARC policy requires domain authentication'
                | 'DNS records not properly configured'
                | 'Invalid OTP code provided'
                | 'OTP code has expired'
                | 'Domain already exists in your account'
                | 'The sum of all IP weights must equal 100'
                | 'Authentication failed'
                | 'Insufficient credits'
                | 'Request already processed'
              message: string
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { listId: bigint } } & {
              json:
                | { emails?: string[] | undefined }
                | { ids?: bigint[] | undefined }
                | { all?: boolean | undefined }
                | { extIds?: string[] | undefined }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/contacts/segments': {
      $get:
        | {
            input: {
              query: {
                limit?: bigint | undefined
                offset?: bigint | undefined
                sort?: 'asc' | 'desc' | undefined
              }
            }
            output: {
              count?: bigint | undefined
              segments?:
                | {
                    categoryName: string
                    id: bigint
                    segmentName: string
                    updatedAt?: string | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: bigint | undefined
                offset?: bigint | undefined
                sort?: 'asc' | 'desc' | undefined
              }
            }
            output: {
              code:
                | 'invalid_parameter'
                | 'missing_parameter'
                | 'out_of_range'
                | 'campaign_processing'
                | 'campaign_sent'
                | 'document_not_found'
                | 'not_enough_credits'
                | 'permission_denied'
                | 'duplicate_parameter'
                | 'duplicate_request'
                | 'method_not_allowed'
                | 'unauthorized'
                | 'account_under_validation'
                | 'not_acceptable'
                | 'bad_request'
                | 'unprocessable_entity'
                | 'Domain does not exist'
                | 'Contact email not found'
                | 'Attribute not found'
                | 'Category id not found'
                | 'Invalid parameters passed'
                | 'Record(s) for identifier not found'
                | 'Returned when query params are invalid'
                | 'Returned when invalid data posted'
                | 'Feed not found'
                | 'Campaign ID not found'
                | 'api-key not found'
                | 'DMARC policy requires domain authentication'
                | 'DNS records not properly configured'
                | 'Invalid OTP code provided'
                | 'OTP code has expired'
                | 'Domain already exists in your account'
                | 'The sum of all IP weights must equal 100'
                | 'Authentication failed'
                | 'Insufficient credits'
                | 'Request already processed'
              message: string
            }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/contacts/consent-groups': {
      $get:
        | {
            input: {
              query: {
                limit?: bigint | undefined
                offset?: bigint | undefined
                id?: bigint | undefined
                name?: string | undefined
                signupMode?: 'manual' | 'automatic' | undefined
              }
            }
            output: ConsentGroupsListResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: bigint | undefined
                offset?: bigint | undefined
                id?: bigint | undefined
                name?: string | undefined
                signupMode?: 'manual' | 'automatic' | undefined
              }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                limit?: bigint | undefined
                offset?: bigint | undefined
                id?: bigint | undefined
                name?: string | undefined
                signupMode?: 'manual' | 'automatic' | undefined
              }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                limit?: bigint | undefined
                offset?: bigint | undefined
                id?: bigint | undefined
                name?: string | undefined
                signupMode?: 'manual' | 'automatic' | undefined
              }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 429
          }
      $post:
        | {
            input: { json: CreateConsentGroupRequest }
            output: ConsentGroup
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: CreateConsentGroupRequest }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: CreateConsentGroupRequest }
            output: ErrorModel
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: CreateConsentGroupRequest }
            output: ErrorModel
            outputFormat: 'json'
            status: 409
          }
    }
  } & {
    '/contacts/consent-groups/:id': {
      $get:
        | {
            input: { param: { id: bigint } }
            output: ConsentGroup
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: bigint } }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: bigint } }
            output: ErrorModel
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: bigint } }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
      $put:
        | {
            input: { param: { id: bigint } } & { json: UpdateConsentGroupRequest }
            output: ConsentGroup
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: bigint } } & { json: UpdateConsentGroupRequest }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: bigint } } & { json: UpdateConsentGroupRequest }
            output: ErrorModel
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: bigint } } & { json: UpdateConsentGroupRequest }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: bigint } } & { json: UpdateConsentGroupRequest }
            output: ErrorModel
            outputFormat: 'json'
            status: 409
          }
      $delete:
        | { input: { param: { id: bigint } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { id: bigint } }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: bigint } }
            output: ErrorModel
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: bigint } }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/contacts/:identifier': {
      $delete:
        | {
            input: { param: { identifier: string | number } } & {
              query: {
                identifierType?:
                  | 'email_id'
                  | 'contact_id'
                  | 'ext_id'
                  | 'phone_id'
                  | 'whatsapp_id'
                  | 'landline_number_id'
                  | undefined
              }
            }
            output: {
              code:
                | 'invalid_parameter'
                | 'missing_parameter'
                | 'out_of_range'
                | 'campaign_processing'
                | 'campaign_sent'
                | 'document_not_found'
                | 'not_enough_credits'
                | 'permission_denied'
                | 'duplicate_parameter'
                | 'duplicate_request'
                | 'method_not_allowed'
                | 'unauthorized'
                | 'account_under_validation'
                | 'not_acceptable'
                | 'bad_request'
                | 'unprocessable_entity'
                | 'Domain does not exist'
                | 'Contact email not found'
                | 'Attribute not found'
                | 'Category id not found'
                | 'Invalid parameters passed'
                | 'Record(s) for identifier not found'
                | 'Returned when query params are invalid'
                | 'Returned when invalid data posted'
                | 'Feed not found'
                | 'Campaign ID not found'
                | 'api-key not found'
                | 'DMARC policy requires domain authentication'
                | 'DNS records not properly configured'
                | 'Invalid OTP code provided'
                | 'OTP code has expired'
                | 'Domain already exists in your account'
                | 'The sum of all IP weights must equal 100'
                | 'Authentication failed'
                | 'Insufficient credits'
                | 'Request already processed'
              message: string
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { identifier: string | number } } & {
              query: {
                identifierType?:
                  | 'email_id'
                  | 'contact_id'
                  | 'ext_id'
                  | 'phone_id'
                  | 'whatsapp_id'
                  | 'landline_number_id'
                  | undefined
              }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { identifier: string | number } } & {
              query: {
                identifierType?:
                  | 'email_id'
                  | 'contact_id'
                  | 'ext_id'
                  | 'phone_id'
                  | 'whatsapp_id'
                  | 'landline_number_id'
                  | undefined
              }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 405
          }
      $get:
        | {
            input: { param: { identifier: string | number } } & {
              query: {
                identifierType?:
                  | 'email_id'
                  | 'phone_id'
                  | 'contact_id'
                  | 'ext_id'
                  | 'whatsapp_id'
                  | 'landline_number_id'
                  | undefined
                startDate?: string | undefined
                endDate?: string | undefined
              }
            }
            output: {
              attributes: { [x: string]: unknown }
              createdAt: string
              email?: string | undefined
              emailBlacklisted: boolean
              id: bigint
              listIds: bigint[]
              listUnsubscribed?: bigint[] | undefined
              modifiedAt: string
              smsBlacklisted: boolean
              whatsappBlacklisted: boolean
              consentGroups?: ConsentGroupItem[] | undefined
              statistics: {
                clicked?:
                  | {
                      campaignId: bigint
                      links: { count: bigint; eventTime: string; ip: string; url: string }[]
                    }[]
                  | undefined
                complaints?: { campaignId: bigint; eventTime: string }[] | undefined
                delivered?: { campaignId: bigint; eventTime: string }[] | undefined
                hardBounces?: { campaignId: bigint; eventTime: string }[] | undefined
                messagesSent?: { campaignId: bigint; eventTime: string }[] | undefined
                opened?:
                  | { campaignId: bigint; count: bigint; eventTime: string; ip: string }[]
                  | undefined
                softBounces?: { campaignId: bigint; eventTime: string }[] | undefined
                transacAttributes?: { [x: string]: unknown }[] | undefined
                unsubscriptions?:
                  | {
                      adminUnsubscription: { eventTime: string; ip?: string | undefined }[]
                      userUnsubscription: {
                        campaignId: bigint
                        eventTime: string
                        ip?: string | undefined
                      }[]
                    }
                  | undefined
              }
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { identifier: string | number } } & {
              query: {
                identifierType?:
                  | 'email_id'
                  | 'phone_id'
                  | 'contact_id'
                  | 'ext_id'
                  | 'whatsapp_id'
                  | 'landline_number_id'
                  | undefined
                startDate?: string | undefined
                endDate?: string | undefined
              }
            }
            output: {
              code:
                | 'invalid_parameter'
                | 'missing_parameter'
                | 'out_of_range'
                | 'campaign_processing'
                | 'campaign_sent'
                | 'document_not_found'
                | 'not_enough_credits'
                | 'permission_denied'
                | 'duplicate_parameter'
                | 'duplicate_request'
                | 'method_not_allowed'
                | 'unauthorized'
                | 'account_under_validation'
                | 'not_acceptable'
                | 'bad_request'
                | 'unprocessable_entity'
                | 'Domain does not exist'
                | 'Contact email not found'
                | 'Attribute not found'
                | 'Category id not found'
                | 'Invalid parameters passed'
                | 'Record(s) for identifier not found'
                | 'Returned when query params are invalid'
                | 'Returned when invalid data posted'
                | 'Feed not found'
                | 'Campaign ID not found'
                | 'api-key not found'
                | 'DMARC policy requires domain authentication'
                | 'DNS records not properly configured'
                | 'Invalid OTP code provided'
                | 'OTP code has expired'
                | 'Domain already exists in your account'
                | 'The sum of all IP weights must equal 100'
                | 'Authentication failed'
                | 'Insufficient credits'
                | 'Request already processed'
              message: string
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { identifier: string | number } } & {
              query: {
                identifierType?:
                  | 'email_id'
                  | 'phone_id'
                  | 'contact_id'
                  | 'ext_id'
                  | 'whatsapp_id'
                  | 'landline_number_id'
                  | undefined
                startDate?: string | undefined
                endDate?: string | undefined
              }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
      $put:
        | {
            input: { param: { identifier: string | number } } & {
              query: {
                identifierType?:
                  | 'email_id'
                  | 'contact_id'
                  | 'ext_id'
                  | 'phone_id'
                  | 'whatsapp_id'
                  | 'landline_number_id'
                  | undefined
              }
            } & {
              json: {
                attributes?: { [x: string]: number | string | boolean | string[] } | undefined
                emailBlacklisted?: boolean | undefined
                ext_id?: string | undefined
                listIds?: bigint[] | undefined
                smsBlacklisted?: boolean | undefined
                smtpBlacklistSender?: string[] | undefined
                unlinkListIds?: bigint[] | undefined
                forceMerge?: boolean | undefined
              }
            }
            output: ContactErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { identifier: string | number } } & {
              query: {
                identifierType?:
                  | 'email_id'
                  | 'contact_id'
                  | 'ext_id'
                  | 'phone_id'
                  | 'whatsapp_id'
                  | 'landline_number_id'
                  | undefined
              }
            } & {
              json: {
                attributes?: { [x: string]: number | string | boolean | string[] } | undefined
                emailBlacklisted?: boolean | undefined
                ext_id?: string | undefined
                listIds?: bigint[] | undefined
                smsBlacklisted?: boolean | undefined
                smtpBlacklistSender?: string[] | undefined
                unlinkListIds?: bigint[] | undefined
                forceMerge?: boolean | undefined
              }
            }
            output: ContactErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { identifier: string | number } } & {
              query: {
                identifierType?:
                  | 'email_id'
                  | 'contact_id'
                  | 'ext_id'
                  | 'phone_id'
                  | 'whatsapp_id'
                  | 'landline_number_id'
                  | undefined
              }
            } & {
              json: {
                attributes?: { [x: string]: number | string | boolean | string[] } | undefined
                emailBlacklisted?: boolean | undefined
                ext_id?: string | undefined
                listIds?: bigint[] | undefined
                smsBlacklisted?: boolean | undefined
                smtpBlacklistSender?: string[] | undefined
                unlinkListIds?: bigint[] | undefined
                forceMerge?: boolean | undefined
              }
            }
            output: ContactErrorModel
            outputFormat: 'json'
            status: 425
          }
    }
  } & {
    '/contacts/:identifier/campaignStats': {
      $get:
        | {
            input: { param: { identifier: string | number } } & {
              query: { startDate?: string | undefined; endDate?: string | undefined }
            }
            output: {
              clicked?:
                | {
                    campaignId: bigint
                    links: { count: bigint; eventTime: string; ip: string; url: string }[]
                  }[]
                | undefined
              complaints?: { campaignId: bigint; eventTime: string }[] | undefined
              delivered?: { campaignId: bigint; eventTime: string }[] | undefined
              hardBounces?: { campaignId: bigint; eventTime: string }[] | undefined
              messagesSent?: { campaignId: bigint; eventTime: string }[] | undefined
              opened?:
                | { campaignId: bigint; count: bigint; eventTime: string; ip: string }[]
                | undefined
              softBounces?: { campaignId: bigint; eventTime: string }[] | undefined
              transacAttributes?:
                | { orderDate: string; orderId: bigint; orderPrice: number }[]
                | undefined
              unsubscriptions?:
                | {
                    adminUnsubscription: { eventTime: string; ip?: string | undefined }[]
                    userUnsubscription: {
                      campaignId: bigint
                      eventTime: string
                      ip?: string | undefined
                    }[]
                  }
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { identifier: string | number } } & {
              query: { startDate?: string | undefined; endDate?: string | undefined }
            }
            output: {
              code:
                | 'invalid_parameter'
                | 'missing_parameter'
                | 'out_of_range'
                | 'campaign_processing'
                | 'campaign_sent'
                | 'document_not_found'
                | 'not_enough_credits'
                | 'permission_denied'
                | 'duplicate_parameter'
                | 'duplicate_request'
                | 'method_not_allowed'
                | 'unauthorized'
                | 'account_under_validation'
                | 'not_acceptable'
                | 'bad_request'
                | 'unprocessable_entity'
                | 'Domain does not exist'
                | 'Contact email not found'
                | 'Attribute not found'
                | 'Category id not found'
                | 'Invalid parameters passed'
                | 'Record(s) for identifier not found'
                | 'Returned when query params are invalid'
                | 'Returned when invalid data posted'
                | 'Feed not found'
                | 'Campaign ID not found'
                | 'api-key not found'
                | 'DMARC policy requires domain authentication'
                | 'DNS records not properly configured'
                | 'Invalid OTP code provided'
                | 'OTP code has expired'
                | 'Domain already exists in your account'
                | 'The sum of all IP weights must equal 100'
                | 'Authentication failed'
                | 'Insufficient credits'
                | 'Request already processed'
              message: string
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { identifier: string | number } } & {
              query: { startDate?: string | undefined; endDate?: string | undefined }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/conversations/agentOnlinePing': {
      $post:
        | {
            input: {
              json: {
                agentEmail?: string | undefined
                agentId?: string | undefined
                agentName?: string | undefined
                receivedFrom?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 201
          }
        | {
            input: {
              json: {
                agentEmail?: string | undefined
                agentId?: string | undefined
                agentName?: string | undefined
                receivedFrom?: string | undefined
              }
            }
            output: {
              code:
                | 'invalid_parameter'
                | 'missing_parameter'
                | 'out_of_range'
                | 'campaign_processing'
                | 'campaign_sent'
                | 'document_not_found'
                | 'not_enough_credits'
                | 'permission_denied'
                | 'duplicate_parameter'
                | 'duplicate_request'
                | 'method_not_allowed'
                | 'unauthorized'
                | 'account_under_validation'
                | 'not_acceptable'
                | 'bad_request'
                | 'unprocessable_entity'
                | 'Domain does not exist'
                | 'Contact email not found'
                | 'Attribute not found'
                | 'Category id not found'
                | 'Invalid parameters passed'
                | 'Record(s) for identifier not found'
                | 'Returned when query params are invalid'
                | 'Returned when invalid data posted'
                | 'Feed not found'
                | 'Campaign ID not found'
                | 'api-key not found'
                | 'DMARC policy requires domain authentication'
                | 'DNS records not properly configured'
                | 'Invalid OTP code provided'
                | 'OTP code has expired'
                | 'Domain already exists in your account'
                | 'The sum of all IP weights must equal 100'
                | 'Authentication failed'
                | 'Insufficient credits'
                | 'Request already processed'
              message: string
            }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/conversations/messages': {
      $post:
        | {
            input: {
              json: {
                agentEmail?: string | undefined
                agentId?: string | undefined
                agentName?: string | undefined
                receivedFrom?: string | undefined
                text: string
                visitorId: string
              }
            }
            output: ConversationsMessage
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                agentEmail?: string | undefined
                agentId?: string | undefined
                agentName?: string | undefined
                receivedFrom?: string | undefined
                text: string
                visitorId: string
              }
            }
            output: {
              code:
                | 'invalid_parameter'
                | 'missing_parameter'
                | 'out_of_range'
                | 'campaign_processing'
                | 'campaign_sent'
                | 'document_not_found'
                | 'not_enough_credits'
                | 'permission_denied'
                | 'duplicate_parameter'
                | 'duplicate_request'
                | 'method_not_allowed'
                | 'unauthorized'
                | 'account_under_validation'
                | 'not_acceptable'
                | 'bad_request'
                | 'unprocessable_entity'
                | 'Domain does not exist'
                | 'Contact email not found'
                | 'Attribute not found'
                | 'Category id not found'
                | 'Invalid parameters passed'
                | 'Record(s) for identifier not found'
                | 'Returned when query params are invalid'
                | 'Returned when invalid data posted'
                | 'Feed not found'
                | 'Campaign ID not found'
                | 'api-key not found'
                | 'DMARC policy requires domain authentication'
                | 'DNS records not properly configured'
                | 'Invalid OTP code provided'
                | 'OTP code has expired'
                | 'Domain already exists in your account'
                | 'The sum of all IP weights must equal 100'
                | 'Authentication failed'
                | 'Insufficient credits'
                | 'Request already processed'
              message: string
            }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/conversations/messages/:id': {
      $delete:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { id: string } }
            output: {
              code:
                | 'invalid_parameter'
                | 'missing_parameter'
                | 'out_of_range'
                | 'campaign_processing'
                | 'campaign_sent'
                | 'document_not_found'
                | 'not_enough_credits'
                | 'permission_denied'
                | 'duplicate_parameter'
                | 'duplicate_request'
                | 'method_not_allowed'
                | 'unauthorized'
                | 'account_under_validation'
                | 'not_acceptable'
                | 'bad_request'
                | 'unprocessable_entity'
                | 'Domain does not exist'
                | 'Contact email not found'
                | 'Attribute not found'
                | 'Category id not found'
                | 'Invalid parameters passed'
                | 'Record(s) for identifier not found'
                | 'Returned when query params are invalid'
                | 'Returned when invalid data posted'
                | 'Feed not found'
                | 'Campaign ID not found'
                | 'api-key not found'
                | 'DMARC policy requires domain authentication'
                | 'DNS records not properly configured'
                | 'Invalid OTP code provided'
                | 'OTP code has expired'
                | 'Domain already exists in your account'
                | 'The sum of all IP weights must equal 100'
                | 'Authentication failed'
                | 'Insufficient credits'
                | 'Request already processed'
              message: string
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
      $get:
        | {
            input: { param: { id: string } }
            output: ConversationsMessage
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: {
              code:
                | 'invalid_parameter'
                | 'missing_parameter'
                | 'out_of_range'
                | 'campaign_processing'
                | 'campaign_sent'
                | 'document_not_found'
                | 'not_enough_credits'
                | 'permission_denied'
                | 'duplicate_parameter'
                | 'duplicate_request'
                | 'method_not_allowed'
                | 'unauthorized'
                | 'account_under_validation'
                | 'not_acceptable'
                | 'bad_request'
                | 'unprocessable_entity'
                | 'Domain does not exist'
                | 'Contact email not found'
                | 'Attribute not found'
                | 'Category id not found'
                | 'Invalid parameters passed'
                | 'Record(s) for identifier not found'
                | 'Returned when query params are invalid'
                | 'Returned when invalid data posted'
                | 'Feed not found'
                | 'Campaign ID not found'
                | 'api-key not found'
                | 'DMARC policy requires domain authentication'
                | 'DNS records not properly configured'
                | 'Invalid OTP code provided'
                | 'OTP code has expired'
                | 'Domain already exists in your account'
                | 'The sum of all IP weights must equal 100'
                | 'Authentication failed'
                | 'Insufficient credits'
                | 'Request already processed'
              message: string
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
      $put:
        | {
            input: { param: { id: string } } & { json: { text: string } }
            output: ConversationsMessage
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: { text: string } }
            output: {
              code:
                | 'invalid_parameter'
                | 'missing_parameter'
                | 'out_of_range'
                | 'campaign_processing'
                | 'campaign_sent'
                | 'document_not_found'
                | 'not_enough_credits'
                | 'permission_denied'
                | 'duplicate_parameter'
                | 'duplicate_request'
                | 'method_not_allowed'
                | 'unauthorized'
                | 'account_under_validation'
                | 'not_acceptable'
                | 'bad_request'
                | 'unprocessable_entity'
                | 'Domain does not exist'
                | 'Contact email not found'
                | 'Attribute not found'
                | 'Category id not found'
                | 'Invalid parameters passed'
                | 'Record(s) for identifier not found'
                | 'Returned when query params are invalid'
                | 'Returned when invalid data posted'
                | 'Feed not found'
                | 'Campaign ID not found'
                | 'api-key not found'
                | 'DMARC policy requires domain authentication'
                | 'DNS records not properly configured'
                | 'Invalid OTP code provided'
                | 'OTP code has expired'
                | 'Domain already exists in your account'
                | 'The sum of all IP weights must equal 100'
                | 'Authentication failed'
                | 'Insufficient credits'
                | 'Request already processed'
              message: string
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: { text: string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/conversations/pushedMessages': {
      $post:
        | {
            input: {
              json: {
                agentId?: string | undefined
                groupId?: string | undefined
                text: string
                visitorId: string
              }
            }
            output: ConversationsMessage
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                agentId?: string | undefined
                groupId?: string | undefined
                text: string
                visitorId: string
              }
            }
            output: {
              code:
                | 'invalid_parameter'
                | 'missing_parameter'
                | 'out_of_range'
                | 'campaign_processing'
                | 'campaign_sent'
                | 'document_not_found'
                | 'not_enough_credits'
                | 'permission_denied'
                | 'duplicate_parameter'
                | 'duplicate_request'
                | 'method_not_allowed'
                | 'unauthorized'
                | 'account_under_validation'
                | 'not_acceptable'
                | 'bad_request'
                | 'unprocessable_entity'
                | 'Domain does not exist'
                | 'Contact email not found'
                | 'Attribute not found'
                | 'Category id not found'
                | 'Invalid parameters passed'
                | 'Record(s) for identifier not found'
                | 'Returned when query params are invalid'
                | 'Returned when invalid data posted'
                | 'Feed not found'
                | 'Campaign ID not found'
                | 'api-key not found'
                | 'DMARC policy requires domain authentication'
                | 'DNS records not properly configured'
                | 'Invalid OTP code provided'
                | 'OTP code has expired'
                | 'Domain already exists in your account'
                | 'The sum of all IP weights must equal 100'
                | 'Authentication failed'
                | 'Insufficient credits'
                | 'Request already processed'
              message: string
            }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/conversations/pushedMessages/:id': {
      $delete:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { id: string } }
            output: {
              code:
                | 'invalid_parameter'
                | 'missing_parameter'
                | 'out_of_range'
                | 'campaign_processing'
                | 'campaign_sent'
                | 'document_not_found'
                | 'not_enough_credits'
                | 'permission_denied'
                | 'duplicate_parameter'
                | 'duplicate_request'
                | 'method_not_allowed'
                | 'unauthorized'
                | 'account_under_validation'
                | 'not_acceptable'
                | 'bad_request'
                | 'unprocessable_entity'
                | 'Domain does not exist'
                | 'Contact email not found'
                | 'Attribute not found'
                | 'Category id not found'
                | 'Invalid parameters passed'
                | 'Record(s) for identifier not found'
                | 'Returned when query params are invalid'
                | 'Returned when invalid data posted'
                | 'Feed not found'
                | 'Campaign ID not found'
                | 'api-key not found'
                | 'DMARC policy requires domain authentication'
                | 'DNS records not properly configured'
                | 'Invalid OTP code provided'
                | 'OTP code has expired'
                | 'Domain already exists in your account'
                | 'The sum of all IP weights must equal 100'
                | 'Authentication failed'
                | 'Insufficient credits'
                | 'Request already processed'
              message: string
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
      $get:
        | {
            input: { param: { id: string } }
            output: ConversationsMessage
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: {
              code:
                | 'invalid_parameter'
                | 'missing_parameter'
                | 'out_of_range'
                | 'campaign_processing'
                | 'campaign_sent'
                | 'document_not_found'
                | 'not_enough_credits'
                | 'permission_denied'
                | 'duplicate_parameter'
                | 'duplicate_request'
                | 'method_not_allowed'
                | 'unauthorized'
                | 'account_under_validation'
                | 'not_acceptable'
                | 'bad_request'
                | 'unprocessable_entity'
                | 'Domain does not exist'
                | 'Contact email not found'
                | 'Attribute not found'
                | 'Category id not found'
                | 'Invalid parameters passed'
                | 'Record(s) for identifier not found'
                | 'Returned when query params are invalid'
                | 'Returned when invalid data posted'
                | 'Feed not found'
                | 'Campaign ID not found'
                | 'api-key not found'
                | 'DMARC policy requires domain authentication'
                | 'DNS records not properly configured'
                | 'Invalid OTP code provided'
                | 'OTP code has expired'
                | 'Domain already exists in your account'
                | 'The sum of all IP weights must equal 100'
                | 'Authentication failed'
                | 'Insufficient credits'
                | 'Request already processed'
              message: string
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
      $put:
        | {
            input: { param: { id: string } } & { json: { text: string } }
            output: ConversationsMessage
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: { text: string } }
            output: {
              code:
                | 'invalid_parameter'
                | 'missing_parameter'
                | 'out_of_range'
                | 'campaign_processing'
                | 'campaign_sent'
                | 'document_not_found'
                | 'not_enough_credits'
                | 'permission_denied'
                | 'duplicate_parameter'
                | 'duplicate_request'
                | 'method_not_allowed'
                | 'unauthorized'
                | 'account_under_validation'
                | 'not_acceptable'
                | 'bad_request'
                | 'unprocessable_entity'
                | 'Domain does not exist'
                | 'Contact email not found'
                | 'Attribute not found'
                | 'Category id not found'
                | 'Invalid parameters passed'
                | 'Record(s) for identifier not found'
                | 'Returned when query params are invalid'
                | 'Returned when invalid data posted'
                | 'Feed not found'
                | 'Campaign ID not found'
                | 'api-key not found'
                | 'DMARC policy requires domain authentication'
                | 'DNS records not properly configured'
                | 'Invalid OTP code provided'
                | 'OTP code has expired'
                | 'Domain already exists in your account'
                | 'The sum of all IP weights must equal 100'
                | 'Authentication failed'
                | 'Insufficient credits'
                | 'Request already processed'
              message: string
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: { text: string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/conversations/visitorGroup': {
      $put:
        | {
            input: { json: { groupId: { [x: string]: unknown } } }
            output: {
              groupId?: { [x: string]: unknown } | undefined
              visitorId?: { [x: string]: unknown } | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { groupId: { [x: string]: unknown } } }
            output: {
              code:
                | 'invalid_parameter'
                | 'missing_parameter'
                | 'out_of_range'
                | 'campaign_processing'
                | 'campaign_sent'
                | 'document_not_found'
                | 'not_enough_credits'
                | 'permission_denied'
                | 'duplicate_parameter'
                | 'duplicate_request'
                | 'method_not_allowed'
                | 'unauthorized'
                | 'account_under_validation'
                | 'not_acceptable'
                | 'bad_request'
                | 'unprocessable_entity'
                | 'Domain does not exist'
                | 'Contact email not found'
                | 'Attribute not found'
                | 'Category id not found'
                | 'Invalid parameters passed'
                | 'Record(s) for identifier not found'
                | 'Returned when query params are invalid'
                | 'Returned when invalid data posted'
                | 'Feed not found'
                | 'Campaign ID not found'
                | 'api-key not found'
                | 'DMARC policy requires domain authentication'
                | 'DNS records not properly configured'
                | 'Invalid OTP code provided'
                | 'OTP code has expired'
                | 'Domain already exists in your account'
                | 'The sum of all IP weights must equal 100'
                | 'Authentication failed'
                | 'Insufficient credits'
                | 'Request already processed'
              message: string
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: { groupId: { [x: string]: unknown } } }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/categories': {
      $get:
        | {
            input: {
              query: {
                limit?: bigint | undefined
                offset?: bigint | undefined
                sort?: 'asc' | 'desc' | undefined
                ids?: string[] | undefined
                name?: string | undefined
                modifiedSince?: string | undefined
                createdSince?: string | undefined
                isDeleted?: string | undefined
              }
            }
            output: {
              categories: {
                createdAt: string
                id: string
                isDeleted: boolean
                modifiedAt: string
                name: string
                url?: string | undefined
              }[]
              count: bigint
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: bigint | undefined
                offset?: bigint | undefined
                sort?: 'asc' | 'desc' | undefined
                ids?: string[] | undefined
                name?: string | undefined
                modifiedSince?: string | undefined
                createdSince?: string | undefined
                isDeleted?: string | undefined
              }
            }
            output: {
              code:
                | 'invalid_parameter'
                | 'missing_parameter'
                | 'out_of_range'
                | 'campaign_processing'
                | 'campaign_sent'
                | 'document_not_found'
                | 'not_enough_credits'
                | 'permission_denied'
                | 'duplicate_parameter'
                | 'duplicate_request'
                | 'method_not_allowed'
                | 'unauthorized'
                | 'account_under_validation'
                | 'not_acceptable'
                | 'bad_request'
                | 'unprocessable_entity'
                | 'Domain does not exist'
                | 'Contact email not found'
                | 'Attribute not found'
                | 'Category id not found'
                | 'Invalid parameters passed'
                | 'Record(s) for identifier not found'
                | 'Returned when query params are invalid'
                | 'Returned when invalid data posted'
                | 'Feed not found'
                | 'Campaign ID not found'
                | 'api-key not found'
                | 'DMARC policy requires domain authentication'
                | 'DNS records not properly configured'
                | 'Invalid OTP code provided'
                | 'OTP code has expired'
                | 'Domain already exists in your account'
                | 'The sum of all IP weights must equal 100'
                | 'Authentication failed'
                | 'Insufficient credits'
                | 'Request already processed'
              message: string
            }
            outputFormat: 'json'
            status: 400
          }
      $post:
        | {
            input: {
              json: {
                deletedAt?: string | undefined
                id: string
                isDeleted?: boolean | undefined
                name?: string | undefined
                updateEnabled?: boolean | undefined
                url?: string | undefined
              }
            }
            output: { id?: string | undefined }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              json: {
                deletedAt?: string | undefined
                id: string
                isDeleted?: boolean | undefined
                name?: string | undefined
                updateEnabled?: boolean | undefined
                url?: string | undefined
              }
            }
            output: {
              code:
                | 'invalid_parameter'
                | 'missing_parameter'
                | 'out_of_range'
                | 'campaign_processing'
                | 'campaign_sent'
                | 'document_not_found'
                | 'not_enough_credits'
                | 'permission_denied'
                | 'duplicate_parameter'
                | 'duplicate_request'
                | 'method_not_allowed'
                | 'unauthorized'
                | 'account_under_validation'
                | 'not_acceptable'
                | 'bad_request'
                | 'unprocessable_entity'
                | 'Domain does not exist'
                | 'Contact email not found'
                | 'Attribute not found'
                | 'Category id not found'
                | 'Invalid parameters passed'
                | 'Record(s) for identifier not found'
                | 'Returned when query params are invalid'
                | 'Returned when invalid data posted'
                | 'Feed not found'
                | 'Campaign ID not found'
                | 'api-key not found'
                | 'DMARC policy requires domain authentication'
                | 'DNS records not properly configured'
                | 'Invalid OTP code provided'
                | 'OTP code has expired'
                | 'Domain already exists in your account'
                | 'The sum of all IP weights must equal 100'
                | 'Authentication failed'
                | 'Insufficient credits'
                | 'Request already processed'
              message: string
            }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/categories/batch': {
      $post:
        | {
            input: {
              json: {
                categories: {
                  deletedAt?: string | undefined
                  id: string
                  isDeleted?: boolean | undefined
                  name?: string | undefined
                  url?: string | undefined
                }[]
                updateEnabled?: boolean | undefined
              }
            }
            output: { createdCount?: bigint | undefined; updatedCount?: bigint | undefined }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              json: {
                categories: {
                  deletedAt?: string | undefined
                  id: string
                  isDeleted?: boolean | undefined
                  name?: string | undefined
                  url?: string | undefined
                }[]
                updateEnabled?: boolean | undefined
              }
            }
            output: {
              code:
                | 'invalid_parameter'
                | 'missing_parameter'
                | 'out_of_range'
                | 'campaign_processing'
                | 'campaign_sent'
                | 'document_not_found'
                | 'not_enough_credits'
                | 'permission_denied'
                | 'duplicate_parameter'
                | 'duplicate_request'
                | 'method_not_allowed'
                | 'unauthorized'
                | 'account_under_validation'
                | 'not_acceptable'
                | 'bad_request'
                | 'unprocessable_entity'
                | 'Domain does not exist'
                | 'Contact email not found'
                | 'Attribute not found'
                | 'Category id not found'
                | 'Invalid parameters passed'
                | 'Record(s) for identifier not found'
                | 'Returned when query params are invalid'
                | 'Returned when invalid data posted'
                | 'Feed not found'
                | 'Campaign ID not found'
                | 'api-key not found'
                | 'DMARC policy requires domain authentication'
                | 'DNS records not properly configured'
                | 'Invalid OTP code provided'
                | 'OTP code has expired'
                | 'Domain already exists in your account'
                | 'The sum of all IP weights must equal 100'
                | 'Authentication failed'
                | 'Insufficient credits'
                | 'Request already processed'
              message: string
            }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/categories/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: GetCategoryDetails
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: {
              code:
                | 'invalid_parameter'
                | 'missing_parameter'
                | 'out_of_range'
                | 'campaign_processing'
                | 'campaign_sent'
                | 'document_not_found'
                | 'not_enough_credits'
                | 'permission_denied'
                | 'duplicate_parameter'
                | 'duplicate_request'
                | 'method_not_allowed'
                | 'unauthorized'
                | 'account_under_validation'
                | 'not_acceptable'
                | 'bad_request'
                | 'unprocessable_entity'
                | 'Domain does not exist'
                | 'Contact email not found'
                | 'Attribute not found'
                | 'Category id not found'
                | 'Invalid parameters passed'
                | 'Record(s) for identifier not found'
                | 'Returned when query params are invalid'
                | 'Returned when invalid data posted'
                | 'Feed not found'
                | 'Campaign ID not found'
                | 'api-key not found'
                | 'DMARC policy requires domain authentication'
                | 'DNS records not properly configured'
                | 'Invalid OTP code provided'
                | 'OTP code has expired'
                | 'Domain already exists in your account'
                | 'The sum of all IP weights must equal 100'
                | 'Authentication failed'
                | 'Insufficient credits'
                | 'Request already processed'
              message: string
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } }
            output: {
              code:
                | 'invalid_parameter'
                | 'missing_parameter'
                | 'out_of_range'
                | 'campaign_processing'
                | 'campaign_sent'
                | 'document_not_found'
                | 'not_enough_credits'
                | 'permission_denied'
                | 'duplicate_parameter'
                | 'duplicate_request'
                | 'method_not_allowed'
                | 'unauthorized'
                | 'account_under_validation'
                | 'not_acceptable'
                | 'bad_request'
                | 'unprocessable_entity'
                | 'Domain does not exist'
                | 'Contact email not found'
                | 'Attribute not found'
                | 'Category id not found'
                | 'Invalid parameters passed'
                | 'Record(s) for identifier not found'
                | 'Returned when query params are invalid'
                | 'Returned when invalid data posted'
                | 'Feed not found'
                | 'Campaign ID not found'
                | 'api-key not found'
                | 'DMARC policy requires domain authentication'
                | 'DNS records not properly configured'
                | 'Invalid OTP code provided'
                | 'OTP code has expired'
                | 'Domain already exists in your account'
                | 'The sum of all IP weights must equal 100'
                | 'Authentication failed'
                | 'Insufficient credits'
                | 'Request already processed'
              message: string
            }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/couponCollections': {
      $get:
        | {
            input: {
              query: {
                limit?: bigint | undefined
                offset?: bigint | undefined
                sort?: 'asc' | 'desc' | undefined
                sortBy?: 'createdAt' | 'remainingCoupons' | 'expirationDate' | undefined
              }
            }
            output: GetCouponCollection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: bigint | undefined
                offset?: bigint | undefined
                sort?: 'asc' | 'desc' | undefined
                sortBy?: 'createdAt' | 'remainingCoupons' | 'expirationDate' | undefined
              }
            }
            output: {
              code:
                | 'invalid_parameter'
                | 'missing_parameter'
                | 'out_of_range'
                | 'campaign_processing'
                | 'campaign_sent'
                | 'document_not_found'
                | 'not_enough_credits'
                | 'permission_denied'
                | 'duplicate_parameter'
                | 'duplicate_request'
                | 'method_not_allowed'
                | 'unauthorized'
                | 'account_under_validation'
                | 'not_acceptable'
                | 'bad_request'
                | 'unprocessable_entity'
                | 'Domain does not exist'
                | 'Contact email not found'
                | 'Attribute not found'
                | 'Category id not found'
                | 'Invalid parameters passed'
                | 'Record(s) for identifier not found'
                | 'Returned when query params are invalid'
                | 'Returned when invalid data posted'
                | 'Feed not found'
                | 'Campaign ID not found'
                | 'api-key not found'
                | 'DMARC policy requires domain authentication'
                | 'DNS records not properly configured'
                | 'Invalid OTP code provided'
                | 'OTP code has expired'
                | 'Domain already exists in your account'
                | 'The sum of all IP weights must equal 100'
                | 'Authentication failed'
                | 'Insufficient credits'
                | 'Request already processed'
              message: string
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                limit?: bigint | undefined
                offset?: bigint | undefined
                sort?: 'asc' | 'desc' | undefined
                sortBy?: 'createdAt' | 'remainingCoupons' | 'expirationDate' | undefined
              }
            }
            output: {
              code:
                | 'invalid_parameter'
                | 'missing_parameter'
                | 'out_of_range'
                | 'campaign_processing'
                | 'campaign_sent'
                | 'document_not_found'
                | 'not_enough_credits'
                | 'permission_denied'
                | 'duplicate_parameter'
                | 'duplicate_request'
                | 'method_not_allowed'
                | 'unauthorized'
                | 'account_under_validation'
                | 'not_acceptable'
                | 'bad_request'
                | 'unprocessable_entity'
                | 'Domain does not exist'
                | 'Contact email not found'
                | 'Attribute not found'
                | 'Category id not found'
                | 'Invalid parameters passed'
                | 'Record(s) for identifier not found'
                | 'Returned when query params are invalid'
                | 'Returned when invalid data posted'
                | 'Feed not found'
                | 'Campaign ID not found'
                | 'api-key not found'
                | 'DMARC policy requires domain authentication'
                | 'DNS records not properly configured'
                | 'Invalid OTP code provided'
                | 'OTP code has expired'
                | 'Domain already exists in your account'
                | 'The sum of all IP weights must equal 100'
                | 'Authentication failed'
                | 'Insufficient credits'
                | 'Request already processed'
              message: string
            }
            outputFormat: 'json'
            status: 401
          }
      $post:
        | {
            input: {
              json: {
                defaultCoupon: string
                expirationDate?: string | undefined
                name: string
                remainingCouponsAlert?: number | undefined
                remainingDaysAlert?: number | undefined
              }
            }
            output: { id: string }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              json: {
                defaultCoupon: string
                expirationDate?: string | undefined
                name: string
                remainingCouponsAlert?: number | undefined
                remainingDaysAlert?: number | undefined
              }
            }
            output: {
              code:
                | 'invalid_parameter'
                | 'missing_parameter'
                | 'out_of_range'
                | 'campaign_processing'
                | 'campaign_sent'
                | 'document_not_found'
                | 'not_enough_credits'
                | 'permission_denied'
                | 'duplicate_parameter'
                | 'duplicate_request'
                | 'method_not_allowed'
                | 'unauthorized'
                | 'account_under_validation'
                | 'not_acceptable'
                | 'bad_request'
                | 'unprocessable_entity'
                | 'Domain does not exist'
                | 'Contact email not found'
                | 'Attribute not found'
                | 'Category id not found'
                | 'Invalid parameters passed'
                | 'Record(s) for identifier not found'
                | 'Returned when query params are invalid'
                | 'Returned when invalid data posted'
                | 'Feed not found'
                | 'Campaign ID not found'
                | 'api-key not found'
                | 'DMARC policy requires domain authentication'
                | 'DNS records not properly configured'
                | 'Invalid OTP code provided'
                | 'OTP code has expired'
                | 'Domain already exists in your account'
                | 'The sum of all IP weights must equal 100'
                | 'Authentication failed'
                | 'Insufficient credits'
                | 'Request already processed'
              message: string
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: {
                defaultCoupon: string
                expirationDate?: string | undefined
                name: string
                remainingCouponsAlert?: number | undefined
                remainingDaysAlert?: number | undefined
              }
            }
            output: {
              code:
                | 'invalid_parameter'
                | 'missing_parameter'
                | 'out_of_range'
                | 'campaign_processing'
                | 'campaign_sent'
                | 'document_not_found'
                | 'not_enough_credits'
                | 'permission_denied'
                | 'duplicate_parameter'
                | 'duplicate_request'
                | 'method_not_allowed'
                | 'unauthorized'
                | 'account_under_validation'
                | 'not_acceptable'
                | 'bad_request'
                | 'unprocessable_entity'
                | 'Domain does not exist'
                | 'Contact email not found'
                | 'Attribute not found'
                | 'Category id not found'
                | 'Invalid parameters passed'
                | 'Record(s) for identifier not found'
                | 'Returned when query params are invalid'
                | 'Returned when invalid data posted'
                | 'Feed not found'
                | 'Campaign ID not found'
                | 'api-key not found'
                | 'DMARC policy requires domain authentication'
                | 'DNS records not properly configured'
                | 'Invalid OTP code provided'
                | 'OTP code has expired'
                | 'Domain already exists in your account'
                | 'The sum of all IP weights must equal 100'
                | 'Authentication failed'
                | 'Insufficient credits'
                | 'Request already processed'
              message: string
            }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/couponCollections/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: GetCouponCollection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: {
              code:
                | 'invalid_parameter'
                | 'missing_parameter'
                | 'out_of_range'
                | 'campaign_processing'
                | 'campaign_sent'
                | 'document_not_found'
                | 'not_enough_credits'
                | 'permission_denied'
                | 'duplicate_parameter'
                | 'duplicate_request'
                | 'method_not_allowed'
                | 'unauthorized'
                | 'account_under_validation'
                | 'not_acceptable'
                | 'bad_request'
                | 'unprocessable_entity'
                | 'Domain does not exist'
                | 'Contact email not found'
                | 'Attribute not found'
                | 'Category id not found'
                | 'Invalid parameters passed'
                | 'Record(s) for identifier not found'
                | 'Returned when query params are invalid'
                | 'Returned when invalid data posted'
                | 'Feed not found'
                | 'Campaign ID not found'
                | 'api-key not found'
                | 'DMARC policy requires domain authentication'
                | 'DNS records not properly configured'
                | 'Invalid OTP code provided'
                | 'OTP code has expired'
                | 'Domain already exists in your account'
                | 'The sum of all IP weights must equal 100'
                | 'Authentication failed'
                | 'Insufficient credits'
                | 'Request already processed'
              message: string
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } }
            output: {
              code:
                | 'invalid_parameter'
                | 'missing_parameter'
                | 'out_of_range'
                | 'campaign_processing'
                | 'campaign_sent'
                | 'document_not_found'
                | 'not_enough_credits'
                | 'permission_denied'
                | 'duplicate_parameter'
                | 'duplicate_request'
                | 'method_not_allowed'
                | 'unauthorized'
                | 'account_under_validation'
                | 'not_acceptable'
                | 'bad_request'
                | 'unprocessable_entity'
                | 'Domain does not exist'
                | 'Contact email not found'
                | 'Attribute not found'
                | 'Category id not found'
                | 'Invalid parameters passed'
                | 'Record(s) for identifier not found'
                | 'Returned when query params are invalid'
                | 'Returned when invalid data posted'
                | 'Feed not found'
                | 'Campaign ID not found'
                | 'api-key not found'
                | 'DMARC policy requires domain authentication'
                | 'DNS records not properly configured'
                | 'Invalid OTP code provided'
                | 'OTP code has expired'
                | 'Domain already exists in your account'
                | 'The sum of all IP weights must equal 100'
                | 'Authentication failed'
                | 'Insufficient credits'
                | 'Request already processed'
              message: string
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
      $patch:
        | {
            input: { param: { id: string } } & {
              json: {
                defaultCoupon?: string | undefined
                expirationDate?: string | undefined
                remainingCouponsAlert?: number | undefined
                remainingDaysAlert?: number | undefined
              }
            }
            output: { defaultCoupon: string; id: string; name: string }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              json: {
                defaultCoupon?: string | undefined
                expirationDate?: string | undefined
                remainingCouponsAlert?: number | undefined
                remainingDaysAlert?: number | undefined
              }
            }
            output: {
              code:
                | 'invalid_parameter'
                | 'missing_parameter'
                | 'out_of_range'
                | 'campaign_processing'
                | 'campaign_sent'
                | 'document_not_found'
                | 'not_enough_credits'
                | 'permission_denied'
                | 'duplicate_parameter'
                | 'duplicate_request'
                | 'method_not_allowed'
                | 'unauthorized'
                | 'account_under_validation'
                | 'not_acceptable'
                | 'bad_request'
                | 'unprocessable_entity'
                | 'Domain does not exist'
                | 'Contact email not found'
                | 'Attribute not found'
                | 'Category id not found'
                | 'Invalid parameters passed'
                | 'Record(s) for identifier not found'
                | 'Returned when query params are invalid'
                | 'Returned when invalid data posted'
                | 'Feed not found'
                | 'Campaign ID not found'
                | 'api-key not found'
                | 'DMARC policy requires domain authentication'
                | 'DNS records not properly configured'
                | 'Invalid OTP code provided'
                | 'OTP code has expired'
                | 'Domain already exists in your account'
                | 'The sum of all IP weights must equal 100'
                | 'Authentication failed'
                | 'Insufficient credits'
                | 'Request already processed'
              message: string
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              json: {
                defaultCoupon?: string | undefined
                expirationDate?: string | undefined
                remainingCouponsAlert?: number | undefined
                remainingDaysAlert?: number | undefined
              }
            }
            output: {
              code:
                | 'invalid_parameter'
                | 'missing_parameter'
                | 'out_of_range'
                | 'campaign_processing'
                | 'campaign_sent'
                | 'document_not_found'
                | 'not_enough_credits'
                | 'permission_denied'
                | 'duplicate_parameter'
                | 'duplicate_request'
                | 'method_not_allowed'
                | 'unauthorized'
                | 'account_under_validation'
                | 'not_acceptable'
                | 'bad_request'
                | 'unprocessable_entity'
                | 'Domain does not exist'
                | 'Contact email not found'
                | 'Attribute not found'
                | 'Category id not found'
                | 'Invalid parameters passed'
                | 'Record(s) for identifier not found'
                | 'Returned when query params are invalid'
                | 'Returned when invalid data posted'
                | 'Feed not found'
                | 'Campaign ID not found'
                | 'api-key not found'
                | 'DMARC policy requires domain authentication'
                | 'DNS records not properly configured'
                | 'Invalid OTP code provided'
                | 'OTP code has expired'
                | 'Domain already exists in your account'
                | 'The sum of all IP weights must equal 100'
                | 'Authentication failed'
                | 'Insufficient credits'
                | 'Request already processed'
              message: string
            }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/coupons': {
      $post:
        | {
            input: { json: { collectionId: string; coupons: string[] } }
            output: {
              code:
                | 'invalid_parameter'
                | 'missing_parameter'
                | 'out_of_range'
                | 'campaign_processing'
                | 'campaign_sent'
                | 'document_not_found'
                | 'not_enough_credits'
                | 'permission_denied'
                | 'duplicate_parameter'
                | 'duplicate_request'
                | 'method_not_allowed'
                | 'unauthorized'
                | 'account_under_validation'
                | 'not_acceptable'
                | 'bad_request'
                | 'unprocessable_entity'
                | 'Domain does not exist'
                | 'Contact email not found'
                | 'Attribute not found'
                | 'Category id not found'
                | 'Invalid parameters passed'
                | 'Record(s) for identifier not found'
                | 'Returned when query params are invalid'
                | 'Returned when invalid data posted'
                | 'Feed not found'
                | 'Campaign ID not found'
                | 'api-key not found'
                | 'DMARC policy requires domain authentication'
                | 'DNS records not properly configured'
                | 'Invalid OTP code provided'
                | 'OTP code has expired'
                | 'Domain already exists in your account'
                | 'The sum of all IP weights must equal 100'
                | 'Authentication failed'
                | 'Insufficient credits'
                | 'Request already processed'
              message: string
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: { collectionId: string; coupons: string[] } }
            output: {
              code:
                | 'invalid_parameter'
                | 'missing_parameter'
                | 'out_of_range'
                | 'campaign_processing'
                | 'campaign_sent'
                | 'document_not_found'
                | 'not_enough_credits'
                | 'permission_denied'
                | 'duplicate_parameter'
                | 'duplicate_request'
                | 'method_not_allowed'
                | 'unauthorized'
                | 'account_under_validation'
                | 'not_acceptable'
                | 'bad_request'
                | 'unprocessable_entity'
                | 'Domain does not exist'
                | 'Contact email not found'
                | 'Attribute not found'
                | 'Category id not found'
                | 'Invalid parameters passed'
                | 'Record(s) for identifier not found'
                | 'Returned when query params are invalid'
                | 'Returned when invalid data posted'
                | 'Feed not found'
                | 'Campaign ID not found'
                | 'api-key not found'
                | 'DMARC policy requires domain authentication'
                | 'DNS records not properly configured'
                | 'Invalid OTP code provided'
                | 'OTP code has expired'
                | 'Domain already exists in your account'
                | 'The sum of all IP weights must equal 100'
                | 'Authentication failed'
                | 'Insufficient credits'
                | 'Request already processed'
              message: string
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: { collectionId: string; coupons: string[] } }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/ecommerce/activate': {
      $post:
        | { input: {}; output: {}; outputFormat: string; status: 200 }
        | {
            input: {}
            output: {
              code:
                | 'invalid_parameter'
                | 'missing_parameter'
                | 'out_of_range'
                | 'campaign_processing'
                | 'campaign_sent'
                | 'document_not_found'
                | 'not_enough_credits'
                | 'permission_denied'
                | 'duplicate_parameter'
                | 'duplicate_request'
                | 'method_not_allowed'
                | 'unauthorized'
                | 'account_under_validation'
                | 'not_acceptable'
                | 'bad_request'
                | 'unprocessable_entity'
                | 'Domain does not exist'
                | 'Contact email not found'
                | 'Attribute not found'
                | 'Category id not found'
                | 'Invalid parameters passed'
                | 'Record(s) for identifier not found'
                | 'Returned when query params are invalid'
                | 'Returned when invalid data posted'
                | 'Feed not found'
                | 'Campaign ID not found'
                | 'api-key not found'
                | 'DMARC policy requires domain authentication'
                | 'DNS records not properly configured'
                | 'Invalid OTP code provided'
                | 'OTP code has expired'
                | 'Domain already exists in your account'
                | 'The sum of all IP weights must equal 100'
                | 'Authentication failed'
                | 'Insufficient credits'
                | 'Request already processed'
              message: string
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {}
            output: {
              code:
                | 'invalid_parameter'
                | 'missing_parameter'
                | 'out_of_range'
                | 'campaign_processing'
                | 'campaign_sent'
                | 'document_not_found'
                | 'not_enough_credits'
                | 'permission_denied'
                | 'duplicate_parameter'
                | 'duplicate_request'
                | 'method_not_allowed'
                | 'unauthorized'
                | 'account_under_validation'
                | 'not_acceptable'
                | 'bad_request'
                | 'unprocessable_entity'
                | 'Domain does not exist'
                | 'Contact email not found'
                | 'Attribute not found'
                | 'Category id not found'
                | 'Invalid parameters passed'
                | 'Record(s) for identifier not found'
                | 'Returned when query params are invalid'
                | 'Returned when invalid data posted'
                | 'Feed not found'
                | 'Campaign ID not found'
                | 'api-key not found'
                | 'DMARC policy requires domain authentication'
                | 'DNS records not properly configured'
                | 'Invalid OTP code provided'
                | 'OTP code has expired'
                | 'Domain already exists in your account'
                | 'The sum of all IP weights must equal 100'
                | 'Authentication failed'
                | 'Insufficient credits'
                | 'Request already processed'
              message: string
            }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/ecommerce/attribution/metrics': {
      $get:
        | {
            input: {
              query: {
                periodFrom?: string | undefined
                periodTo?: string | undefined
                'emailCampaignId[]'?: string[] | undefined
                'smsCampaignId[]'?: string[] | undefined
                'automationWorkflowEmailId[]'?: string[] | undefined
                'automationWorkflowSmsId[]'?: string[] | undefined
              }
            }
            output: {
              results: ConversionSourceMetrics[]
              totals: { averageBasket: number; ordersCount: number; revenue: number }
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                periodFrom?: string | undefined
                periodTo?: string | undefined
                'emailCampaignId[]'?: string[] | undefined
                'smsCampaignId[]'?: string[] | undefined
                'automationWorkflowEmailId[]'?: string[] | undefined
                'automationWorkflowSmsId[]'?: string[] | undefined
              }
            }
            output: {
              code:
                | 'invalid_parameter'
                | 'missing_parameter'
                | 'out_of_range'
                | 'campaign_processing'
                | 'campaign_sent'
                | 'document_not_found'
                | 'not_enough_credits'
                | 'permission_denied'
                | 'duplicate_parameter'
                | 'duplicate_request'
                | 'method_not_allowed'
                | 'unauthorized'
                | 'account_under_validation'
                | 'not_acceptable'
                | 'bad_request'
                | 'unprocessable_entity'
                | 'Domain does not exist'
                | 'Contact email not found'
                | 'Attribute not found'
                | 'Category id not found'
                | 'Invalid parameters passed'
                | 'Record(s) for identifier not found'
                | 'Returned when query params are invalid'
                | 'Returned when invalid data posted'
                | 'Feed not found'
                | 'Campaign ID not found'
                | 'api-key not found'
                | 'DMARC policy requires domain authentication'
                | 'DNS records not properly configured'
                | 'Invalid OTP code provided'
                | 'OTP code has expired'
                | 'Domain already exists in your account'
                | 'The sum of all IP weights must equal 100'
                | 'Authentication failed'
                | 'Insufficient credits'
                | 'Request already processed'
              message: string
            }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/ecommerce/attribution/metrics/:conversionSource/:conversionSourceId': {
      $get:
        | {
            input: {
              param: {
                conversionSource:
                  | 'email_campaign'
                  | 'sms_campaign'
                  | 'automation_workflow_email'
                  | 'automation_workflow_sms'
                conversionSourceId: string
              }
            }
            output: {
              averageBasket: number
              conversionSource:
                | 'email_campaign'
                | 'sms_campaign'
                | 'automation_workflow_email'
                | 'automation_workflow_sms'
              id: number
              ordersCount: number
              revenue: number
              newCustomersCount: number
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                conversionSource:
                  | 'email_campaign'
                  | 'sms_campaign'
                  | 'automation_workflow_email'
                  | 'automation_workflow_sms'
                conversionSourceId: string
              }
            }
            output: {
              code:
                | 'invalid_parameter'
                | 'missing_parameter'
                | 'out_of_range'
                | 'campaign_processing'
                | 'campaign_sent'
                | 'document_not_found'
                | 'not_enough_credits'
                | 'permission_denied'
                | 'duplicate_parameter'
                | 'duplicate_request'
                | 'method_not_allowed'
                | 'unauthorized'
                | 'account_under_validation'
                | 'not_acceptable'
                | 'bad_request'
                | 'unprocessable_entity'
                | 'Domain does not exist'
                | 'Contact email not found'
                | 'Attribute not found'
                | 'Category id not found'
                | 'Invalid parameters passed'
                | 'Record(s) for identifier not found'
                | 'Returned when query params are invalid'
                | 'Returned when invalid data posted'
                | 'Feed not found'
                | 'Campaign ID not found'
                | 'api-key not found'
                | 'DMARC policy requires domain authentication'
                | 'DNS records not properly configured'
                | 'Invalid OTP code provided'
                | 'OTP code has expired'
                | 'Domain already exists in your account'
                | 'The sum of all IP weights must equal 100'
                | 'Authentication failed'
                | 'Insufficient credits'
                | 'Request already processed'
              message: string
            }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/ecommerce/attribution/products/:conversionSource/:conversionSourceId': {
      $get:
        | {
            input: {
              param: {
                conversionSource:
                  | 'email_campaign'
                  | 'sms_campaign'
                  | 'automation_workflow_email'
                  | 'automation_workflow_sms'
                conversionSourceId: string
              }
            }
            output: {
              products: {
                id: string
                imageUrl?: string | undefined
                name?: string | undefined
                ordersCount?: number | undefined
                price?: number | undefined
                revenue?: number | undefined
                sku?: string | undefined
                url?: string | undefined
              }[]
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                conversionSource:
                  | 'email_campaign'
                  | 'sms_campaign'
                  | 'automation_workflow_email'
                  | 'automation_workflow_sms'
                conversionSourceId: string
              }
            }
            output: {
              code:
                | 'invalid_parameter'
                | 'missing_parameter'
                | 'out_of_range'
                | 'campaign_processing'
                | 'campaign_sent'
                | 'document_not_found'
                | 'not_enough_credits'
                | 'permission_denied'
                | 'duplicate_parameter'
                | 'duplicate_request'
                | 'method_not_allowed'
                | 'unauthorized'
                | 'account_under_validation'
                | 'not_acceptable'
                | 'bad_request'
                | 'unprocessable_entity'
                | 'Domain does not exist'
                | 'Contact email not found'
                | 'Attribute not found'
                | 'Category id not found'
                | 'Invalid parameters passed'
                | 'Record(s) for identifier not found'
                | 'Returned when query params are invalid'
                | 'Returned when invalid data posted'
                | 'Feed not found'
                | 'Campaign ID not found'
                | 'api-key not found'
                | 'DMARC policy requires domain authentication'
                | 'DNS records not properly configured'
                | 'Invalid OTP code provided'
                | 'OTP code has expired'
                | 'Domain already exists in your account'
                | 'The sum of all IP weights must equal 100'
                | 'Authentication failed'
                | 'Insufficient credits'
                | 'Request already processed'
              message: string
            }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/ecommerce/config/displayCurrency': {
      $get:
        | { input: {}; output: { code: string }; outputFormat: 'json'; status: 200 }
        | {
            input: {}
            output: {
              code:
                | 'invalid_parameter'
                | 'missing_parameter'
                | 'out_of_range'
                | 'campaign_processing'
                | 'campaign_sent'
                | 'document_not_found'
                | 'not_enough_credits'
                | 'permission_denied'
                | 'duplicate_parameter'
                | 'duplicate_request'
                | 'method_not_allowed'
                | 'unauthorized'
                | 'account_under_validation'
                | 'not_acceptable'
                | 'bad_request'
                | 'unprocessable_entity'
                | 'Domain does not exist'
                | 'Contact email not found'
                | 'Attribute not found'
                | 'Category id not found'
                | 'Invalid parameters passed'
                | 'Record(s) for identifier not found'
                | 'Returned when query params are invalid'
                | 'Returned when invalid data posted'
                | 'Feed not found'
                | 'Campaign ID not found'
                | 'api-key not found'
                | 'DMARC policy requires domain authentication'
                | 'DNS records not properly configured'
                | 'Invalid OTP code provided'
                | 'OTP code has expired'
                | 'Domain already exists in your account'
                | 'The sum of all IP weights must equal 100'
                | 'Authentication failed'
                | 'Insufficient credits'
                | 'Request already processed'
              message: string
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {}
            output: {
              code:
                | 'invalid_parameter'
                | 'missing_parameter'
                | 'out_of_range'
                | 'campaign_processing'
                | 'campaign_sent'
                | 'document_not_found'
                | 'not_enough_credits'
                | 'permission_denied'
                | 'duplicate_parameter'
                | 'duplicate_request'
                | 'method_not_allowed'
                | 'unauthorized'
                | 'account_under_validation'
                | 'not_acceptable'
                | 'bad_request'
                | 'unprocessable_entity'
                | 'Domain does not exist'
                | 'Contact email not found'
                | 'Attribute not found'
                | 'Category id not found'
                | 'Invalid parameters passed'
                | 'Record(s) for identifier not found'
                | 'Returned when query params are invalid'
                | 'Returned when invalid data posted'
                | 'Feed not found'
                | 'Campaign ID not found'
                | 'api-key not found'
                | 'DMARC policy requires domain authentication'
                | 'DNS records not properly configured'
                | 'Invalid OTP code provided'
                | 'OTP code has expired'
                | 'Domain already exists in your account'
                | 'The sum of all IP weights must equal 100'
                | 'Authentication failed'
                | 'Insufficient credits'
                | 'Request already processed'
              message: string
            }
            outputFormat: 'json'
            status: 401
          }
        | { input: {}; output: ErrorModel; outputFormat: 'json'; status: 403 }
      $post:
        | {
            input: { json: { code: string } }
            output: { code: string }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { code: string } }
            output: {
              code:
                | 'invalid_parameter'
                | 'missing_parameter'
                | 'out_of_range'
                | 'campaign_processing'
                | 'campaign_sent'
                | 'document_not_found'
                | 'not_enough_credits'
                | 'permission_denied'
                | 'duplicate_parameter'
                | 'duplicate_request'
                | 'method_not_allowed'
                | 'unauthorized'
                | 'account_under_validation'
                | 'not_acceptable'
                | 'bad_request'
                | 'unprocessable_entity'
                | 'Domain does not exist'
                | 'Contact email not found'
                | 'Attribute not found'
                | 'Category id not found'
                | 'Invalid parameters passed'
                | 'Record(s) for identifier not found'
                | 'Returned when query params are invalid'
                | 'Returned when invalid data posted'
                | 'Feed not found'
                | 'Campaign ID not found'
                | 'api-key not found'
                | 'DMARC policy requires domain authentication'
                | 'DNS records not properly configured'
                | 'Invalid OTP code provided'
                | 'OTP code has expired'
                | 'Domain already exists in your account'
                | 'The sum of all IP weights must equal 100'
                | 'Authentication failed'
                | 'Insufficient credits'
                | 'Request already processed'
              message: string
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: { code: string } }
            output: {
              code:
                | 'invalid_parameter'
                | 'missing_parameter'
                | 'out_of_range'
                | 'campaign_processing'
                | 'campaign_sent'
                | 'document_not_found'
                | 'not_enough_credits'
                | 'permission_denied'
                | 'duplicate_parameter'
                | 'duplicate_request'
                | 'method_not_allowed'
                | 'unauthorized'
                | 'account_under_validation'
                | 'not_acceptable'
                | 'bad_request'
                | 'unprocessable_entity'
                | 'Domain does not exist'
                | 'Contact email not found'
                | 'Attribute not found'
                | 'Category id not found'
                | 'Invalid parameters passed'
                | 'Record(s) for identifier not found'
                | 'Returned when query params are invalid'
                | 'Returned when invalid data posted'
                | 'Feed not found'
                | 'Campaign ID not found'
                | 'api-key not found'
                | 'DMARC policy requires domain authentication'
                | 'DNS records not properly configured'
                | 'Invalid OTP code provided'
                | 'OTP code has expired'
                | 'Domain already exists in your account'
                | 'The sum of all IP weights must equal 100'
                | 'Authentication failed'
                | 'Insufficient credits'
                | 'Request already processed'
              message: string
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: { code: string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: { code: string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/orders': {
      $get: {
        input: {
          query: {
            limit?: bigint | undefined
            offset?: bigint | undefined
            sort?: 'asc' | 'desc' | undefined
            secondarySortByModifiedAt?: boolean | undefined
            modifiedSince?: string | undefined
            createdSince?: string | undefined
          }
        }
        output: {
          code:
            | 'invalid_parameter'
            | 'missing_parameter'
            | 'out_of_range'
            | 'campaign_processing'
            | 'campaign_sent'
            | 'document_not_found'
            | 'not_enough_credits'
            | 'permission_denied'
            | 'duplicate_parameter'
            | 'duplicate_request'
            | 'method_not_allowed'
            | 'unauthorized'
            | 'account_under_validation'
            | 'not_acceptable'
            | 'bad_request'
            | 'unprocessable_entity'
            | 'Domain does not exist'
            | 'Contact email not found'
            | 'Attribute not found'
            | 'Category id not found'
            | 'Invalid parameters passed'
            | 'Record(s) for identifier not found'
            | 'Returned when query params are invalid'
            | 'Returned when invalid data posted'
            | 'Feed not found'
            | 'Campaign ID not found'
            | 'api-key not found'
            | 'DMARC policy requires domain authentication'
            | 'DNS records not properly configured'
            | 'Invalid OTP code provided'
            | 'OTP code has expired'
            | 'Domain already exists in your account'
            | 'The sum of all IP weights must equal 100'
            | 'Authentication failed'
            | 'Insufficient credits'
            | 'Request already processed'
          message: string
        }
        outputFormat: 'json'
        status: 400
      }
    }
  } & {
    '/orders/status': {
      $post: {
        input: { json: Order }
        output: {
          code:
            | 'invalid_parameter'
            | 'missing_parameter'
            | 'out_of_range'
            | 'campaign_processing'
            | 'campaign_sent'
            | 'document_not_found'
            | 'not_enough_credits'
            | 'permission_denied'
            | 'duplicate_parameter'
            | 'duplicate_request'
            | 'method_not_allowed'
            | 'unauthorized'
            | 'account_under_validation'
            | 'not_acceptable'
            | 'bad_request'
            | 'unprocessable_entity'
            | 'Domain does not exist'
            | 'Contact email not found'
            | 'Attribute not found'
            | 'Category id not found'
            | 'Invalid parameters passed'
            | 'Record(s) for identifier not found'
            | 'Returned when query params are invalid'
            | 'Returned when invalid data posted'
            | 'Feed not found'
            | 'Campaign ID not found'
            | 'api-key not found'
            | 'DMARC policy requires domain authentication'
            | 'DNS records not properly configured'
            | 'Invalid OTP code provided'
            | 'OTP code has expired'
            | 'Domain already exists in your account'
            | 'The sum of all IP weights must equal 100'
            | 'Authentication failed'
            | 'Insufficient credits'
            | 'Request already processed'
          message: string
        }
        outputFormat: 'json'
        status: 400
      }
    }
  } & {
    '/orders/status/batch': {
      $post:
        | {
            input: {
              json: {
                historical?: boolean | undefined
                notifyUrl?: string | undefined
                orders: Order[]
              }
            }
            output: { batchId: number; count?: bigint | undefined }
            outputFormat: 'json'
            status: 202
          }
        | {
            input: {
              json: {
                historical?: boolean | undefined
                notifyUrl?: string | undefined
                orders: Order[]
              }
            }
            output: {
              code:
                | 'invalid_parameter'
                | 'missing_parameter'
                | 'out_of_range'
                | 'campaign_processing'
                | 'campaign_sent'
                | 'document_not_found'
                | 'not_enough_credits'
                | 'permission_denied'
                | 'duplicate_parameter'
                | 'duplicate_request'
                | 'method_not_allowed'
                | 'unauthorized'
                | 'account_under_validation'
                | 'not_acceptable'
                | 'bad_request'
                | 'unprocessable_entity'
                | 'Domain does not exist'
                | 'Contact email not found'
                | 'Attribute not found'
                | 'Category id not found'
                | 'Invalid parameters passed'
                | 'Record(s) for identifier not found'
                | 'Returned when query params are invalid'
                | 'Returned when invalid data posted'
                | 'Feed not found'
                | 'Campaign ID not found'
                | 'api-key not found'
                | 'DMARC policy requires domain authentication'
                | 'DNS records not properly configured'
                | 'Invalid OTP code provided'
                | 'OTP code has expired'
                | 'Domain already exists in your account'
                | 'The sum of all IP weights must equal 100'
                | 'Authentication failed'
                | 'Insufficient credits'
                | 'Request already processed'
              message: string
            }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/payments/requests': {
      $post:
        | {
            input: {
              json: {
                cart: Cart
                configuration?: Configuration | undefined
                contactId: bigint
                description?: string | undefined
                notification?: Notification | undefined
                reference: string
              }
            }
            output: { id: bigint; url?: string | undefined }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              json: {
                cart: Cart
                configuration?: Configuration | undefined
                contactId: bigint
                description?: string | undefined
                notification?: Notification | undefined
                reference: string
              }
            }
            output: {
              code:
                | 'invalid_parameter'
                | 'missing_parameter'
                | 'out_of_range'
                | 'campaign_processing'
                | 'campaign_sent'
                | 'document_not_found'
                | 'not_enough_credits'
                | 'permission_denied'
                | 'duplicate_parameter'
                | 'duplicate_request'
                | 'method_not_allowed'
                | 'unauthorized'
                | 'account_under_validation'
                | 'not_acceptable'
                | 'bad_request'
                | 'unprocessable_entity'
                | 'Domain does not exist'
                | 'Contact email not found'
                | 'Attribute not found'
                | 'Category id not found'
                | 'Invalid parameters passed'
                | 'Record(s) for identifier not found'
                | 'Returned when query params are invalid'
                | 'Returned when invalid data posted'
                | 'Feed not found'
                | 'Campaign ID not found'
                | 'api-key not found'
                | 'DMARC policy requires domain authentication'
                | 'DNS records not properly configured'
                | 'Invalid OTP code provided'
                | 'OTP code has expired'
                | 'Domain already exists in your account'
                | 'The sum of all IP weights must equal 100'
                | 'Authentication failed'
                | 'Insufficient credits'
                | 'Request already processed'
              message: string
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: {
                cart: Cart
                configuration?: Configuration | undefined
                contactId: bigint
                description?: string | undefined
                notification?: Notification | undefined
                reference: string
              }
            }
            output: {
              code:
                | 'invalid_parameter'
                | 'missing_parameter'
                | 'out_of_range'
                | 'campaign_processing'
                | 'campaign_sent'
                | 'document_not_found'
                | 'not_enough_credits'
                | 'permission_denied'
                | 'duplicate_parameter'
                | 'duplicate_request'
                | 'method_not_allowed'
                | 'unauthorized'
                | 'account_under_validation'
                | 'not_acceptable'
                | 'bad_request'
                | 'unprocessable_entity'
                | 'Domain does not exist'
                | 'Contact email not found'
                | 'Attribute not found'
                | 'Category id not found'
                | 'Invalid parameters passed'
                | 'Record(s) for identifier not found'
                | 'Returned when query params are invalid'
                | 'Returned when invalid data posted'
                | 'Feed not found'
                | 'Campaign ID not found'
                | 'api-key not found'
                | 'DMARC policy requires domain authentication'
                | 'DNS records not properly configured'
                | 'Invalid OTP code provided'
                | 'OTP code has expired'
                | 'Domain already exists in your account'
                | 'The sum of all IP weights must equal 100'
                | 'Authentication failed'
                | 'Insufficient credits'
                | 'Request already processed'
              message: string
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              json: {
                cart: Cart
                configuration?: Configuration | undefined
                contactId: bigint
                description?: string | undefined
                notification?: Notification | undefined
                reference: string
              }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/payments/requests/:id': {
      $delete:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { id: string } }
            output: {
              code:
                | 'invalid_parameter'
                | 'missing_parameter'
                | 'out_of_range'
                | 'campaign_processing'
                | 'campaign_sent'
                | 'document_not_found'
                | 'not_enough_credits'
                | 'permission_denied'
                | 'duplicate_parameter'
                | 'duplicate_request'
                | 'method_not_allowed'
                | 'unauthorized'
                | 'account_under_validation'
                | 'not_acceptable'
                | 'bad_request'
                | 'unprocessable_entity'
                | 'Domain does not exist'
                | 'Contact email not found'
                | 'Attribute not found'
                | 'Category id not found'
                | 'Invalid parameters passed'
                | 'Record(s) for identifier not found'
                | 'Returned when query params are invalid'
                | 'Returned when invalid data posted'
                | 'Feed not found'
                | 'Campaign ID not found'
                | 'api-key not found'
                | 'DMARC policy requires domain authentication'
                | 'DNS records not properly configured'
                | 'Invalid OTP code provided'
                | 'OTP code has expired'
                | 'Domain already exists in your account'
                | 'The sum of all IP weights must equal 100'
                | 'Authentication failed'
                | 'Insufficient credits'
                | 'Request already processed'
              message: string
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
      $get:
        | {
            input: { param: { id: string } }
            output: {
              cart: Cart
              configuration?: Configuration | undefined
              contactId?: bigint | undefined
              notification: Notification
              numberOfRemindersSent?: bigint | undefined
              reference: string
              status: 'created' | 'sent' | 'reminderSent' | 'paid'
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: {
              code:
                | 'invalid_parameter'
                | 'missing_parameter'
                | 'out_of_range'
                | 'campaign_processing'
                | 'campaign_sent'
                | 'document_not_found'
                | 'not_enough_credits'
                | 'permission_denied'
                | 'duplicate_parameter'
                | 'duplicate_request'
                | 'method_not_allowed'
                | 'unauthorized'
                | 'account_under_validation'
                | 'not_acceptable'
                | 'bad_request'
                | 'unprocessable_entity'
                | 'Domain does not exist'
                | 'Contact email not found'
                | 'Attribute not found'
                | 'Category id not found'
                | 'Invalid parameters passed'
                | 'Record(s) for identifier not found'
                | 'Returned when query params are invalid'
                | 'Returned when invalid data posted'
                | 'Feed not found'
                | 'Campaign ID not found'
                | 'api-key not found'
                | 'DMARC policy requires domain authentication'
                | 'DNS records not properly configured'
                | 'Invalid OTP code provided'
                | 'OTP code has expired'
                | 'Domain already exists in your account'
                | 'The sum of all IP weights must equal 100'
                | 'Authentication failed'
                | 'Insufficient credits'
                | 'Request already processed'
              message: string
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } }
            output: {
              code:
                | 'invalid_parameter'
                | 'missing_parameter'
                | 'out_of_range'
                | 'campaign_processing'
                | 'campaign_sent'
                | 'document_not_found'
                | 'not_enough_credits'
                | 'permission_denied'
                | 'duplicate_parameter'
                | 'duplicate_request'
                | 'method_not_allowed'
                | 'unauthorized'
                | 'account_under_validation'
                | 'not_acceptable'
                | 'bad_request'
                | 'unprocessable_entity'
                | 'Domain does not exist'
                | 'Contact email not found'
                | 'Attribute not found'
                | 'Category id not found'
                | 'Invalid parameters passed'
                | 'Record(s) for identifier not found'
                | 'Returned when query params are invalid'
                | 'Returned when invalid data posted'
                | 'Feed not found'
                | 'Campaign ID not found'
                | 'api-key not found'
                | 'DMARC policy requires domain authentication'
                | 'DNS records not properly configured'
                | 'Invalid OTP code provided'
                | 'OTP code has expired'
                | 'Domain already exists in your account'
                | 'The sum of all IP weights must equal 100'
                | 'Authentication failed'
                | 'Insufficient credits'
                | 'Request already processed'
              message: string
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/products': {
      $get:
        | {
            input: {
              query: {
                limit?: bigint | undefined
                offset?: bigint | undefined
                sort?: 'asc' | 'desc' | undefined
                ids?: string[] | undefined
                search?: string | undefined
                name?: string | undefined
                'price[lte]'?: number | undefined
                'price[gte]'?: number | undefined
                'price[lt]'?: number | undefined
                'price[gt]'?: number | undefined
                'price[eq]'?: number | undefined
                'price[ne]'?: number | undefined
                'alternativePrice[lte]'?: number | undefined
                'alternativePrice[gte]'?: number | undefined
                'alternativePrice[lt]'?: number | undefined
                'alternativePrice[gt]'?: number | undefined
                'alternativePrice[eq]'?: number | undefined
                'alternativePrice[ne]'?: number | undefined
                categories?: string[] | undefined
                modifiedSince?: string | undefined
                createdSince?: string | undefined
                sortByField?: 'created_at' | 'name' | 'price' | 'id' | undefined
                isDeleted?: string | undefined
              }
            }
            output: {
              count: bigint
              products: {
                brand?: string | undefined
                categories?: string[] | undefined
                createdAt: string
                description?: string | undefined
                id: string
                imageUrl?: string | undefined
                isDeleted?: boolean | undefined
                metaInfo?: { [x: string]: unknown } | undefined
                modifiedAt: string
                name: string
                parentId?: string | undefined
                price?: number | undefined
                alternativePrice?: number | undefined
                s3Original?: string | undefined
                s3ThumbAnalytics: string
                s3ThumbEditor: string
                sku?: string | undefined
                stock?: number | undefined
                url?: string | undefined
              }[]
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: bigint | undefined
                offset?: bigint | undefined
                sort?: 'asc' | 'desc' | undefined
                ids?: string[] | undefined
                search?: string | undefined
                name?: string | undefined
                'price[lte]'?: number | undefined
                'price[gte]'?: number | undefined
                'price[lt]'?: number | undefined
                'price[gt]'?: number | undefined
                'price[eq]'?: number | undefined
                'price[ne]'?: number | undefined
                'alternativePrice[lte]'?: number | undefined
                'alternativePrice[gte]'?: number | undefined
                'alternativePrice[lt]'?: number | undefined
                'alternativePrice[gt]'?: number | undefined
                'alternativePrice[eq]'?: number | undefined
                'alternativePrice[ne]'?: number | undefined
                categories?: string[] | undefined
                modifiedSince?: string | undefined
                createdSince?: string | undefined
                sortByField?: 'created_at' | 'name' | 'price' | 'id' | undefined
                isDeleted?: string | undefined
              }
            }
            output: {
              code:
                | 'invalid_parameter'
                | 'missing_parameter'
                | 'out_of_range'
                | 'campaign_processing'
                | 'campaign_sent'
                | 'document_not_found'
                | 'not_enough_credits'
                | 'permission_denied'
                | 'duplicate_parameter'
                | 'duplicate_request'
                | 'method_not_allowed'
                | 'unauthorized'
                | 'account_under_validation'
                | 'not_acceptable'
                | 'bad_request'
                | 'unprocessable_entity'
                | 'Domain does not exist'
                | 'Contact email not found'
                | 'Attribute not found'
                | 'Category id not found'
                | 'Invalid parameters passed'
                | 'Record(s) for identifier not found'
                | 'Returned when query params are invalid'
                | 'Returned when invalid data posted'
                | 'Feed not found'
                | 'Campaign ID not found'
                | 'api-key not found'
                | 'DMARC policy requires domain authentication'
                | 'DNS records not properly configured'
                | 'Invalid OTP code provided'
                | 'OTP code has expired'
                | 'Domain already exists in your account'
                | 'The sum of all IP weights must equal 100'
                | 'Authentication failed'
                | 'Insufficient credits'
                | 'Request already processed'
              message: string
            }
            outputFormat: 'json'
            status: 400
          }
      $post:
        | {
            input: {
              json: {
                brand?: string | undefined
                categories?: string[] | undefined
                deletedAt?: string | undefined
                description?: string | undefined
                id: string
                imageUrl?: string | undefined
                isDeleted?: boolean | undefined
                metaInfo?: { [x: string]: string | number } | undefined
                name: string
                parentId?: string | undefined
                price?: number | undefined
                alternativePrice?: number | undefined
                sku?: string | undefined
                stock?: number | undefined
                updateEnabled?: boolean | undefined
                url?: string | undefined
              }
            }
            output: { id?: string | undefined }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              json: {
                brand?: string | undefined
                categories?: string[] | undefined
                deletedAt?: string | undefined
                description?: string | undefined
                id: string
                imageUrl?: string | undefined
                isDeleted?: boolean | undefined
                metaInfo?: { [x: string]: string | number } | undefined
                name: string
                parentId?: string | undefined
                price?: number | undefined
                alternativePrice?: number | undefined
                sku?: string | undefined
                stock?: number | undefined
                updateEnabled?: boolean | undefined
                url?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: {
              json: {
                brand?: string | undefined
                categories?: string[] | undefined
                deletedAt?: string | undefined
                description?: string | undefined
                id: string
                imageUrl?: string | undefined
                isDeleted?: boolean | undefined
                metaInfo?: { [x: string]: string | number } | undefined
                name: string
                parentId?: string | undefined
                price?: number | undefined
                alternativePrice?: number | undefined
                sku?: string | undefined
                stock?: number | undefined
                updateEnabled?: boolean | undefined
                url?: string | undefined
              }
            }
            output: {
              code:
                | 'invalid_parameter'
                | 'missing_parameter'
                | 'out_of_range'
                | 'campaign_processing'
                | 'campaign_sent'
                | 'document_not_found'
                | 'not_enough_credits'
                | 'permission_denied'
                | 'duplicate_parameter'
                | 'duplicate_request'
                | 'method_not_allowed'
                | 'unauthorized'
                | 'account_under_validation'
                | 'not_acceptable'
                | 'bad_request'
                | 'unprocessable_entity'
                | 'Domain does not exist'
                | 'Contact email not found'
                | 'Attribute not found'
                | 'Category id not found'
                | 'Invalid parameters passed'
                | 'Record(s) for identifier not found'
                | 'Returned when query params are invalid'
                | 'Returned when invalid data posted'
                | 'Feed not found'
                | 'Campaign ID not found'
                | 'api-key not found'
                | 'DMARC policy requires domain authentication'
                | 'DNS records not properly configured'
                | 'Invalid OTP code provided'
                | 'OTP code has expired'
                | 'Domain already exists in your account'
                | 'The sum of all IP weights must equal 100'
                | 'Authentication failed'
                | 'Insufficient credits'
                | 'Request already processed'
              message: string
            }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/products/batch': {
      $post:
        | {
            input: {
              json: {
                products: {
                  brand?: string | undefined
                  categories?: string[] | undefined
                  deletedAt?: string | undefined
                  description?: string | undefined
                  id: string
                  imageUrl?: string | undefined
                  isDeleted?: boolean | undefined
                  metaInfo?: { [x: string]: string | number } | undefined
                  name: string
                  parentId?: string | undefined
                  price?: number | undefined
                  alternativePrice?: number | undefined
                  sku?: string | undefined
                  stock?: number | undefined
                  url?: string | undefined
                }[]
                updateEnabled?: boolean | undefined
              }
            }
            output: { createdCount?: bigint | undefined; updatedCount?: bigint | undefined }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              json: {
                products: {
                  brand?: string | undefined
                  categories?: string[] | undefined
                  deletedAt?: string | undefined
                  description?: string | undefined
                  id: string
                  imageUrl?: string | undefined
                  isDeleted?: boolean | undefined
                  metaInfo?: { [x: string]: string | number } | undefined
                  name: string
                  parentId?: string | undefined
                  price?: number | undefined
                  alternativePrice?: number | undefined
                  sku?: string | undefined
                  stock?: number | undefined
                  url?: string | undefined
                }[]
                updateEnabled?: boolean | undefined
              }
            }
            output: {
              code:
                | 'invalid_parameter'
                | 'missing_parameter'
                | 'out_of_range'
                | 'campaign_processing'
                | 'campaign_sent'
                | 'document_not_found'
                | 'not_enough_credits'
                | 'permission_denied'
                | 'duplicate_parameter'
                | 'duplicate_request'
                | 'method_not_allowed'
                | 'unauthorized'
                | 'account_under_validation'
                | 'not_acceptable'
                | 'bad_request'
                | 'unprocessable_entity'
                | 'Domain does not exist'
                | 'Contact email not found'
                | 'Attribute not found'
                | 'Category id not found'
                | 'Invalid parameters passed'
                | 'Record(s) for identifier not found'
                | 'Returned when query params are invalid'
                | 'Returned when invalid data posted'
                | 'Feed not found'
                | 'Campaign ID not found'
                | 'api-key not found'
                | 'DMARC policy requires domain authentication'
                | 'DNS records not properly configured'
                | 'Invalid OTP code provided'
                | 'OTP code has expired'
                | 'Domain already exists in your account'
                | 'The sum of all IP weights must equal 100'
                | 'Authentication failed'
                | 'Insufficient credits'
                | 'Request already processed'
              message: string
            }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/products/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: GetProductDetails
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: {
              code:
                | 'invalid_parameter'
                | 'missing_parameter'
                | 'out_of_range'
                | 'campaign_processing'
                | 'campaign_sent'
                | 'document_not_found'
                | 'not_enough_credits'
                | 'permission_denied'
                | 'duplicate_parameter'
                | 'duplicate_request'
                | 'method_not_allowed'
                | 'unauthorized'
                | 'account_under_validation'
                | 'not_acceptable'
                | 'bad_request'
                | 'unprocessable_entity'
                | 'Domain does not exist'
                | 'Contact email not found'
                | 'Attribute not found'
                | 'Category id not found'
                | 'Invalid parameters passed'
                | 'Record(s) for identifier not found'
                | 'Returned when query params are invalid'
                | 'Returned when invalid data posted'
                | 'Feed not found'
                | 'Campaign ID not found'
                | 'api-key not found'
                | 'DMARC policy requires domain authentication'
                | 'DNS records not properly configured'
                | 'Invalid OTP code provided'
                | 'OTP code has expired'
                | 'Domain already exists in your account'
                | 'The sum of all IP weights must equal 100'
                | 'Authentication failed'
                | 'Insufficient credits'
                | 'Request already processed'
              message: string
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/products/:id/alerts/:type': {
      $post:
        | {
            input: { param: { id: string; type: 'back_in_stock' } } & {
              json: {
                contactIdentifiers?:
                  | {
                      email?: string | undefined
                      ext_id?: string | undefined
                      sms?: string | undefined
                    }
                  | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { id: string; type: 'back_in_stock' } } & {
              json: {
                contactIdentifiers?:
                  | {
                      email?: string | undefined
                      ext_id?: string | undefined
                      sms?: string | undefined
                    }
                  | undefined
              }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string; type: 'back_in_stock' } } & {
              json: {
                contactIdentifiers?:
                  | {
                      email?: string | undefined
                      ext_id?: string | undefined
                      sms?: string | undefined
                    }
                  | undefined
              }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string; type: 'back_in_stock' } } & {
              json: {
                contactIdentifiers?:
                  | {
                      email?: string | undefined
                      ext_id?: string | undefined
                      sms?: string | undefined
                    }
                  | undefined
              }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string; type: 'back_in_stock' } } & {
              json: {
                contactIdentifiers?:
                  | {
                      email?: string | undefined
                      ext_id?: string | undefined
                      sms?: string | undefined
                    }
                  | undefined
              }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/events': {
      $get:
        | {
            input: {
              query: {
                contact_id?: bigint[] | undefined
                event_name?: string[] | undefined
                object_type?: string[] | undefined
                startDate?: string | undefined
                endDate?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: GetEventsList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                contact_id?: bigint[] | undefined
                event_name?: string[] | undefined
                object_type?: string[] | undefined
                startDate?: string | undefined
                endDate?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: {
              code:
                | 'invalid_parameter'
                | 'missing_parameter'
                | 'out_of_range'
                | 'campaign_processing'
                | 'campaign_sent'
                | 'document_not_found'
                | 'not_enough_credits'
                | 'permission_denied'
                | 'duplicate_parameter'
                | 'duplicate_request'
                | 'method_not_allowed'
                | 'unauthorized'
                | 'account_under_validation'
                | 'not_acceptable'
                | 'bad_request'
                | 'unprocessable_entity'
                | 'Domain does not exist'
                | 'Contact email not found'
                | 'Attribute not found'
                | 'Category id not found'
                | 'Invalid parameters passed'
                | 'Record(s) for identifier not found'
                | 'Returned when query params are invalid'
                | 'Returned when invalid data posted'
                | 'Feed not found'
                | 'Campaign ID not found'
                | 'api-key not found'
                | 'DMARC policy requires domain authentication'
                | 'DNS records not properly configured'
                | 'Invalid OTP code provided'
                | 'OTP code has expired'
                | 'Domain already exists in your account'
                | 'The sum of all IP weights must equal 100'
                | 'Authentication failed'
                | 'Insufficient credits'
                | 'Request already processed'
              message: string
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                contact_id?: bigint[] | undefined
                event_name?: string[] | undefined
                object_type?: string[] | undefined
                startDate?: string | undefined
                endDate?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: {
              code:
                | 'invalid_parameter'
                | 'missing_parameter'
                | 'out_of_range'
                | 'campaign_processing'
                | 'campaign_sent'
                | 'document_not_found'
                | 'not_enough_credits'
                | 'permission_denied'
                | 'duplicate_parameter'
                | 'duplicate_request'
                | 'method_not_allowed'
                | 'unauthorized'
                | 'account_under_validation'
                | 'not_acceptable'
                | 'bad_request'
                | 'unprocessable_entity'
                | 'Domain does not exist'
                | 'Contact email not found'
                | 'Attribute not found'
                | 'Category id not found'
                | 'Invalid parameters passed'
                | 'Record(s) for identifier not found'
                | 'Returned when query params are invalid'
                | 'Returned when invalid data posted'
                | 'Feed not found'
                | 'Campaign ID not found'
                | 'api-key not found'
                | 'DMARC policy requires domain authentication'
                | 'DNS records not properly configured'
                | 'Invalid OTP code provided'
                | 'OTP code has expired'
                | 'Domain already exists in your account'
                | 'The sum of all IP weights must equal 100'
                | 'Authentication failed'
                | 'Insufficient credits'
                | 'Request already processed'
              message: string
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                contact_id?: bigint[] | undefined
                event_name?: string[] | undefined
                object_type?: string[] | undefined
                startDate?: string | undefined
                endDate?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: {
              code:
                | 'invalid_parameter'
                | 'missing_parameter'
                | 'out_of_range'
                | 'campaign_processing'
                | 'campaign_sent'
                | 'document_not_found'
                | 'not_enough_credits'
                | 'permission_denied'
                | 'duplicate_parameter'
                | 'duplicate_request'
                | 'method_not_allowed'
                | 'unauthorized'
                | 'account_under_validation'
                | 'not_acceptable'
                | 'bad_request'
                | 'unprocessable_entity'
                | 'Domain does not exist'
                | 'Contact email not found'
                | 'Attribute not found'
                | 'Category id not found'
                | 'Invalid parameters passed'
                | 'Record(s) for identifier not found'
                | 'Returned when query params are invalid'
                | 'Returned when invalid data posted'
                | 'Feed not found'
                | 'Campaign ID not found'
                | 'api-key not found'
                | 'DMARC policy requires domain authentication'
                | 'DNS records not properly configured'
                | 'Invalid OTP code provided'
                | 'OTP code has expired'
                | 'Domain already exists in your account'
                | 'The sum of all IP weights must equal 100'
                | 'Authentication failed'
                | 'Insufficient credits'
                | 'Request already processed'
              message: string
            }
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: {
              json: {
                contact_properties?: { [x: string]: string | number | boolean } | undefined
                event_date?: string | undefined
                event_name: string
                event_properties?:
                  | {
                      [x: string]:
                        | string
                        | number
                        | boolean
                        | { [x: string]: unknown }
                        | { [x: string]: unknown }[]
                    }
                  | undefined
                identifiers: {
                  contact_id?: bigint | undefined
                  email_id?: string | undefined
                  ext_id?: string | undefined
                  landline_number_id?: string | undefined
                  phone_id?: string | undefined
                  whatsapp_id?: string | undefined
                }
                object?:
                  | {
                      identifiers?:
                        | { ext_id?: string | undefined; id?: string | undefined }
                        | undefined
                      type?: string | undefined
                    }
                  | undefined
              }
            }
            output: {
              code:
                | 'invalid_parameter'
                | 'missing_parameter'
                | 'out_of_range'
                | 'campaign_processing'
                | 'campaign_sent'
                | 'document_not_found'
                | 'not_enough_credits'
                | 'permission_denied'
                | 'duplicate_parameter'
                | 'duplicate_request'
                | 'method_not_allowed'
                | 'unauthorized'
                | 'account_under_validation'
                | 'not_acceptable'
                | 'bad_request'
                | 'unprocessable_entity'
                | 'Domain does not exist'
                | 'Contact email not found'
                | 'Attribute not found'
                | 'Category id not found'
                | 'Invalid parameters passed'
                | 'Record(s) for identifier not found'
                | 'Returned when query params are invalid'
                | 'Returned when invalid data posted'
                | 'Feed not found'
                | 'Campaign ID not found'
                | 'api-key not found'
                | 'DMARC policy requires domain authentication'
                | 'DNS records not properly configured'
                | 'Invalid OTP code provided'
                | 'OTP code has expired'
                | 'Domain already exists in your account'
                | 'The sum of all IP weights must equal 100'
                | 'Authentication failed'
                | 'Insufficient credits'
                | 'Request already processed'
              message: string
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: {
                contact_properties?: { [x: string]: string | number | boolean } | undefined
                event_date?: string | undefined
                event_name: string
                event_properties?:
                  | {
                      [x: string]:
                        | string
                        | number
                        | boolean
                        | { [x: string]: unknown }
                        | { [x: string]: unknown }[]
                    }
                  | undefined
                identifiers: {
                  contact_id?: bigint | undefined
                  email_id?: string | undefined
                  ext_id?: string | undefined
                  landline_number_id?: string | undefined
                  phone_id?: string | undefined
                  whatsapp_id?: string | undefined
                }
                object?:
                  | {
                      identifiers?:
                        | { ext_id?: string | undefined; id?: string | undefined }
                        | undefined
                      type?: string | undefined
                    }
                  | undefined
              }
            }
            output: {
              code:
                | 'invalid_parameter'
                | 'missing_parameter'
                | 'out_of_range'
                | 'campaign_processing'
                | 'campaign_sent'
                | 'document_not_found'
                | 'not_enough_credits'
                | 'permission_denied'
                | 'duplicate_parameter'
                | 'duplicate_request'
                | 'method_not_allowed'
                | 'unauthorized'
                | 'account_under_validation'
                | 'not_acceptable'
                | 'bad_request'
                | 'unprocessable_entity'
                | 'Domain does not exist'
                | 'Contact email not found'
                | 'Attribute not found'
                | 'Category id not found'
                | 'Invalid parameters passed'
                | 'Record(s) for identifier not found'
                | 'Returned when query params are invalid'
                | 'Returned when invalid data posted'
                | 'Feed not found'
                | 'Campaign ID not found'
                | 'api-key not found'
                | 'DMARC policy requires domain authentication'
                | 'DNS records not properly configured'
                | 'Invalid OTP code provided'
                | 'OTP code has expired'
                | 'Domain already exists in your account'
                | 'The sum of all IP weights must equal 100'
                | 'Authentication failed'
                | 'Insufficient credits'
                | 'Request already processed'
              message: string
            }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/events/batch': {
      $post:
        | {
            input: {
              json: {
                events: {
                  contact_properties?: { [x: string]: string | number } | undefined
                  event_date?: string | undefined
                  event_name: string
                  event_properties?:
                    | {
                        [x: string]:
                          | string
                          | number
                          | { [x: string]: unknown }
                          | { [x: string]: unknown }[]
                      }
                    | undefined
                  identifiers: {
                    contact_id?: bigint | undefined
                    email_id?: string | undefined
                    ext_id?: string | undefined
                    landline_number_id?: string | undefined
                    phone_id?: string | undefined
                    whatsapp_id?: string | undefined
                  }
                  object?:
                    | {
                        identifiers?:
                          | { ext_id?: string | undefined; id?: string | undefined }
                          | undefined
                        type?: string | undefined
                      }
                    | undefined
                }[]
              }
            }
            output: BatchAcceptedResponse
            outputFormat: 'json'
            status: 202
          }
        | {
            input: {
              json: {
                events: {
                  contact_properties?: { [x: string]: string | number } | undefined
                  event_date?: string | undefined
                  event_name: string
                  event_properties?:
                    | {
                        [x: string]:
                          | string
                          | number
                          | { [x: string]: unknown }
                          | { [x: string]: unknown }[]
                      }
                    | undefined
                  identifiers: {
                    contact_id?: bigint | undefined
                    email_id?: string | undefined
                    ext_id?: string | undefined
                    landline_number_id?: string | undefined
                    phone_id?: string | undefined
                    whatsapp_id?: string | undefined
                  }
                  object?:
                    | {
                        identifiers?:
                          | { ext_id?: string | undefined; id?: string | undefined }
                          | undefined
                        type?: string | undefined
                      }
                    | undefined
                }[]
              }
            }
            output: BatchEventsResponse
            outputFormat: 'json'
            status: 207
          }
        | {
            input: {
              json: {
                events: {
                  contact_properties?: { [x: string]: string | number } | undefined
                  event_date?: string | undefined
                  event_name: string
                  event_properties?:
                    | {
                        [x: string]:
                          | string
                          | number
                          | { [x: string]: unknown }
                          | { [x: string]: unknown }[]
                      }
                    | undefined
                  identifiers: {
                    contact_id?: bigint | undefined
                    email_id?: string | undefined
                    ext_id?: string | undefined
                    landline_number_id?: string | undefined
                    phone_id?: string | undefined
                    whatsapp_id?: string | undefined
                  }
                  object?:
                    | {
                        identifiers?:
                          | { ext_id?: string | undefined; id?: string | undefined }
                          | undefined
                        type?: string | undefined
                      }
                    | undefined
                }[]
              }
            }
            output: BatchEventsResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: {
                events: {
                  contact_properties?: { [x: string]: string | number } | undefined
                  event_date?: string | undefined
                  event_name: string
                  event_properties?:
                    | {
                        [x: string]:
                          | string
                          | number
                          | { [x: string]: unknown }
                          | { [x: string]: unknown }[]
                      }
                    | undefined
                  identifiers: {
                    contact_id?: bigint | undefined
                    email_id?: string | undefined
                    ext_id?: string | undefined
                    landline_number_id?: string | undefined
                    phone_id?: string | undefined
                    whatsapp_id?: string | undefined
                  }
                  object?:
                    | {
                        identifiers?:
                          | { ext_id?: string | undefined; id?: string | undefined }
                          | undefined
                        type?: string | undefined
                      }
                    | undefined
                }[]
              }
            }
            output: {
              code:
                | 'invalid_parameter'
                | 'missing_parameter'
                | 'out_of_range'
                | 'campaign_processing'
                | 'campaign_sent'
                | 'document_not_found'
                | 'not_enough_credits'
                | 'permission_denied'
                | 'duplicate_parameter'
                | 'duplicate_request'
                | 'method_not_allowed'
                | 'unauthorized'
                | 'account_under_validation'
                | 'not_acceptable'
                | 'bad_request'
                | 'unprocessable_entity'
                | 'Domain does not exist'
                | 'Contact email not found'
                | 'Attribute not found'
                | 'Category id not found'
                | 'Invalid parameters passed'
                | 'Record(s) for identifier not found'
                | 'Returned when query params are invalid'
                | 'Returned when invalid data posted'
                | 'Feed not found'
                | 'Campaign ID not found'
                | 'api-key not found'
                | 'DMARC policy requires domain authentication'
                | 'DNS records not properly configured'
                | 'Invalid OTP code provided'
                | 'OTP code has expired'
                | 'Domain already exists in your account'
                | 'The sum of all IP weights must equal 100'
                | 'Authentication failed'
                | 'Insufficient credits'
                | 'Request already processed'
              message: string
            }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/inbound/events': {
      $get:
        | {
            input: {
              query: {
                sender?: string | undefined
                startDate?: string | undefined
                endDate?: string | undefined
                limit?: bigint | undefined
                offset?: bigint | undefined
                sort?: 'asc' | 'desc' | undefined
              }
            }
            output: {
              events?:
                | { date: string; recipient: string; sender: string; uuid: string }[]
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                sender?: string | undefined
                startDate?: string | undefined
                endDate?: string | undefined
                limit?: bigint | undefined
                offset?: bigint | undefined
                sort?: 'asc' | 'desc' | undefined
              }
            }
            output: {
              code:
                | 'invalid_parameter'
                | 'missing_parameter'
                | 'out_of_range'
                | 'campaign_processing'
                | 'campaign_sent'
                | 'document_not_found'
                | 'not_enough_credits'
                | 'permission_denied'
                | 'duplicate_parameter'
                | 'duplicate_request'
                | 'method_not_allowed'
                | 'unauthorized'
                | 'account_under_validation'
                | 'not_acceptable'
                | 'bad_request'
                | 'unprocessable_entity'
                | 'Domain does not exist'
                | 'Contact email not found'
                | 'Attribute not found'
                | 'Category id not found'
                | 'Invalid parameters passed'
                | 'Record(s) for identifier not found'
                | 'Returned when query params are invalid'
                | 'Returned when invalid data posted'
                | 'Feed not found'
                | 'Campaign ID not found'
                | 'api-key not found'
                | 'DMARC policy requires domain authentication'
                | 'DNS records not properly configured'
                | 'Invalid OTP code provided'
                | 'OTP code has expired'
                | 'Domain already exists in your account'
                | 'The sum of all IP weights must equal 100'
                | 'Authentication failed'
                | 'Insufficient credits'
                | 'Request already processed'
              message: string
            }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/inbound/events/:uuid': {
      $get:
        | {
            input: { param: { uuid: string } }
            output: {
              attachments?:
                | {
                    contentId?: string | undefined
                    contentLength?: number | undefined
                    contentType?: string | undefined
                    name?: string | undefined
                  }[]
                | undefined
              deliveredAt?: (string | null) | undefined
              logs?:
                | {
                    date?: string | undefined
                    type?:
                      | 'received'
                      | 'processed'
                      | 'webhookFailed'
                      | 'webhookDelivered'
                      | undefined
                  }[]
                | undefined
              messageId?: string | undefined
              receivedAt?: string | undefined
              recipient?: string | undefined
              sender?: string | undefined
              subject?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { uuid: string } }
            output: {
              code:
                | 'invalid_parameter'
                | 'missing_parameter'
                | 'out_of_range'
                | 'campaign_processing'
                | 'campaign_sent'
                | 'document_not_found'
                | 'not_enough_credits'
                | 'permission_denied'
                | 'duplicate_parameter'
                | 'duplicate_request'
                | 'method_not_allowed'
                | 'unauthorized'
                | 'account_under_validation'
                | 'not_acceptable'
                | 'bad_request'
                | 'unprocessable_entity'
                | 'Domain does not exist'
                | 'Contact email not found'
                | 'Attribute not found'
                | 'Category id not found'
                | 'Invalid parameters passed'
                | 'Record(s) for identifier not found'
                | 'Returned when query params are invalid'
                | 'Returned when invalid data posted'
                | 'Feed not found'
                | 'Campaign ID not found'
                | 'api-key not found'
                | 'DMARC policy requires domain authentication'
                | 'DNS records not properly configured'
                | 'Invalid OTP code provided'
                | 'OTP code has expired'
                | 'Domain already exists in your account'
                | 'The sum of all IP weights must equal 100'
                | 'Authentication failed'
                | 'Insufficient credits'
                | 'Request already processed'
              message: string
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { uuid: string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/inbound/attachments/:downloadToken': {
      $get:
        | {
            input: { param: { downloadToken: string } }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { downloadToken: string } }
            output: {
              code:
                | 'invalid_parameter'
                | 'missing_parameter'
                | 'out_of_range'
                | 'campaign_processing'
                | 'campaign_sent'
                | 'document_not_found'
                | 'not_enough_credits'
                | 'permission_denied'
                | 'duplicate_parameter'
                | 'duplicate_request'
                | 'method_not_allowed'
                | 'unauthorized'
                | 'account_under_validation'
                | 'not_acceptable'
                | 'bad_request'
                | 'unprocessable_entity'
                | 'Domain does not exist'
                | 'Contact email not found'
                | 'Attribute not found'
                | 'Category id not found'
                | 'Invalid parameters passed'
                | 'Record(s) for identifier not found'
                | 'Returned when query params are invalid'
                | 'Returned when invalid data posted'
                | 'Feed not found'
                | 'Campaign ID not found'
                | 'api-key not found'
                | 'DMARC policy requires domain authentication'
                | 'DNS records not properly configured'
                | 'Invalid OTP code provided'
                | 'OTP code has expired'
                | 'Domain already exists in your account'
                | 'The sum of all IP weights must equal 100'
                | 'Authentication failed'
                | 'Insufficient credits'
                | 'Request already processed'
              message: string
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { downloadToken: string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/loyalty/balance/programs/:pid/active-balance': {
      $get:
        | {
            input: { param: { pid: string } } & {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                sortField?: 'createdAt' | undefined
                sort?: 'asc' | 'desc' | undefined
                contactId: bigint
                balanceDefinitionId: string
                includeInternal?: boolean | undefined
              }
            }
            output: {
              count?: bigint | undefined
              loyaltyProgramId?: string | undefined
              contactId?: bigint | undefined
              balanceDefinitionId?: string | undefined
              activeBalances?:
                | {
                    id?: string | undefined
                    amount?: number | undefined
                    createdAt?: string | undefined
                    expiresAt?: string | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { pid: string } } & {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                sortField?: 'createdAt' | undefined
                sort?: 'asc' | 'desc' | undefined
                contactId: bigint
                balanceDefinitionId: string
                includeInternal?: boolean | undefined
              }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { pid: string } } & {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                sortField?: 'createdAt' | undefined
                sort?: 'asc' | 'desc' | undefined
                contactId: bigint
                balanceDefinitionId: string
                includeInternal?: boolean | undefined
              }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { pid: string } } & {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                sortField?: 'createdAt' | undefined
                sort?: 'asc' | 'desc' | undefined
                contactId: bigint
                balanceDefinitionId: string
                includeInternal?: boolean | undefined
              }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { pid: string } } & {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                sortField?: 'createdAt' | undefined
                sort?: 'asc' | 'desc' | undefined
                contactId: bigint
                balanceDefinitionId: string
                includeInternal?: boolean | undefined
              }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { pid: string } } & {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                sortField?: 'createdAt' | undefined
                sort?: 'asc' | 'desc' | undefined
                contactId: bigint
                balanceDefinitionId: string
                includeInternal?: boolean | undefined
              }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/loyalty/balance/programs/:pid/balance-definitions': {
      $get:
        | {
            input: { param: { pid: string } } & {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                sortField?: 'name' | 'created_at' | 'updated_at' | undefined
                sort?: 'asc' | 'desc' | undefined
                version?: 'active' | 'draft' | undefined
              }
            }
            output: { items?: BalanceDefinition[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { pid: string } } & {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                sortField?: 'name' | 'created_at' | 'updated_at' | undefined
                sort?: 'asc' | 'desc' | undefined
                version?: 'active' | 'draft' | undefined
              }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 204
          }
        | {
            input: { param: { pid: string } } & {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                sortField?: 'name' | 'created_at' | 'updated_at' | undefined
                sort?: 'asc' | 'desc' | undefined
                version?: 'active' | 'draft' | undefined
              }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { pid: string } } & {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                sortField?: 'name' | 'created_at' | 'updated_at' | undefined
                sort?: 'asc' | 'desc' | undefined
                version?: 'active' | 'draft' | undefined
              }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { pid: string } } & {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                sortField?: 'name' | 'created_at' | 'updated_at' | undefined
                sort?: 'asc' | 'desc' | undefined
                version?: 'active' | 'draft' | undefined
              }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { pid: string } } & {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                sortField?: 'name' | 'created_at' | 'updated_at' | undefined
                sort?: 'asc' | 'desc' | undefined
                version?: 'active' | 'draft' | undefined
              }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { param: { pid: string } } & {
              json: {
                balanceAvailabilityDurationModifier?:
                  | 'noModification'
                  | 'startOfPeriod'
                  | 'endOfPeriod'
                  | undefined
                balanceAvailabilityDurationUnit?: 'day' | 'week' | 'month' | 'year' | undefined
                balanceAvailabilityDurationValue?: number | undefined
                balanceExpirationDate?: string | undefined
                balanceOptionAmountOvertakingStrategy?: 'strict' | 'partial' | undefined
                balanceOptionCreditRounding?: 'lower' | 'upper' | 'natural' | undefined
                balanceOptionDebitRounding?: 'lower' | 'upper' | 'natural' | undefined
                description?: string | undefined
                imageRef?: string | undefined
                maxAmount?: number | undefined
                maxCreditAmountLimit?: number | undefined
                maxDebitAmountLimit?: number | undefined
                meta?: { isInternal?: boolean | undefined } | undefined
                minAmount?: number | undefined
                name: string
                unit:
                  | 'POINTS'
                  | 'EUR'
                  | 'USD'
                  | 'MXN'
                  | 'GBP'
                  | 'INR'
                  | 'CAD'
                  | 'SGD'
                  | 'RON'
                  | 'JPY'
                  | 'MYR'
                  | 'CLP'
                  | 'PEN'
                  | 'MAD'
                  | 'AUD'
                  | 'CHF'
                  | 'BRL'
              }
            }
            output: BalanceDefinition
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { pid: string } } & {
              json: {
                balanceAvailabilityDurationModifier?:
                  | 'noModification'
                  | 'startOfPeriod'
                  | 'endOfPeriod'
                  | undefined
                balanceAvailabilityDurationUnit?: 'day' | 'week' | 'month' | 'year' | undefined
                balanceAvailabilityDurationValue?: number | undefined
                balanceExpirationDate?: string | undefined
                balanceOptionAmountOvertakingStrategy?: 'strict' | 'partial' | undefined
                balanceOptionCreditRounding?: 'lower' | 'upper' | 'natural' | undefined
                balanceOptionDebitRounding?: 'lower' | 'upper' | 'natural' | undefined
                description?: string | undefined
                imageRef?: string | undefined
                maxAmount?: number | undefined
                maxCreditAmountLimit?: number | undefined
                maxDebitAmountLimit?: number | undefined
                meta?: { isInternal?: boolean | undefined } | undefined
                minAmount?: number | undefined
                name: string
                unit:
                  | 'POINTS'
                  | 'EUR'
                  | 'USD'
                  | 'MXN'
                  | 'GBP'
                  | 'INR'
                  | 'CAD'
                  | 'SGD'
                  | 'RON'
                  | 'JPY'
                  | 'MYR'
                  | 'CLP'
                  | 'PEN'
                  | 'MAD'
                  | 'AUD'
                  | 'CHF'
                  | 'BRL'
              }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { pid: string } } & {
              json: {
                balanceAvailabilityDurationModifier?:
                  | 'noModification'
                  | 'startOfPeriod'
                  | 'endOfPeriod'
                  | undefined
                balanceAvailabilityDurationUnit?: 'day' | 'week' | 'month' | 'year' | undefined
                balanceAvailabilityDurationValue?: number | undefined
                balanceExpirationDate?: string | undefined
                balanceOptionAmountOvertakingStrategy?: 'strict' | 'partial' | undefined
                balanceOptionCreditRounding?: 'lower' | 'upper' | 'natural' | undefined
                balanceOptionDebitRounding?: 'lower' | 'upper' | 'natural' | undefined
                description?: string | undefined
                imageRef?: string | undefined
                maxAmount?: number | undefined
                maxCreditAmountLimit?: number | undefined
                maxDebitAmountLimit?: number | undefined
                meta?: { isInternal?: boolean | undefined } | undefined
                minAmount?: number | undefined
                name: string
                unit:
                  | 'POINTS'
                  | 'EUR'
                  | 'USD'
                  | 'MXN'
                  | 'GBP'
                  | 'INR'
                  | 'CAD'
                  | 'SGD'
                  | 'RON'
                  | 'JPY'
                  | 'MYR'
                  | 'CLP'
                  | 'PEN'
                  | 'MAD'
                  | 'AUD'
                  | 'CHF'
                  | 'BRL'
              }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { pid: string } } & {
              json: {
                balanceAvailabilityDurationModifier?:
                  | 'noModification'
                  | 'startOfPeriod'
                  | 'endOfPeriod'
                  | undefined
                balanceAvailabilityDurationUnit?: 'day' | 'week' | 'month' | 'year' | undefined
                balanceAvailabilityDurationValue?: number | undefined
                balanceExpirationDate?: string | undefined
                balanceOptionAmountOvertakingStrategy?: 'strict' | 'partial' | undefined
                balanceOptionCreditRounding?: 'lower' | 'upper' | 'natural' | undefined
                balanceOptionDebitRounding?: 'lower' | 'upper' | 'natural' | undefined
                description?: string | undefined
                imageRef?: string | undefined
                maxAmount?: number | undefined
                maxCreditAmountLimit?: number | undefined
                maxDebitAmountLimit?: number | undefined
                meta?: { isInternal?: boolean | undefined } | undefined
                minAmount?: number | undefined
                name: string
                unit:
                  | 'POINTS'
                  | 'EUR'
                  | 'USD'
                  | 'MXN'
                  | 'GBP'
                  | 'INR'
                  | 'CAD'
                  | 'SGD'
                  | 'RON'
                  | 'JPY'
                  | 'MYR'
                  | 'CLP'
                  | 'PEN'
                  | 'MAD'
                  | 'AUD'
                  | 'CHF'
                  | 'BRL'
              }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { pid: string } } & {
              json: {
                balanceAvailabilityDurationModifier?:
                  | 'noModification'
                  | 'startOfPeriod'
                  | 'endOfPeriod'
                  | undefined
                balanceAvailabilityDurationUnit?: 'day' | 'week' | 'month' | 'year' | undefined
                balanceAvailabilityDurationValue?: number | undefined
                balanceExpirationDate?: string | undefined
                balanceOptionAmountOvertakingStrategy?: 'strict' | 'partial' | undefined
                balanceOptionCreditRounding?: 'lower' | 'upper' | 'natural' | undefined
                balanceOptionDebitRounding?: 'lower' | 'upper' | 'natural' | undefined
                description?: string | undefined
                imageRef?: string | undefined
                maxAmount?: number | undefined
                maxCreditAmountLimit?: number | undefined
                maxDebitAmountLimit?: number | undefined
                meta?: { isInternal?: boolean | undefined } | undefined
                minAmount?: number | undefined
                name: string
                unit:
                  | 'POINTS'
                  | 'EUR'
                  | 'USD'
                  | 'MXN'
                  | 'GBP'
                  | 'INR'
                  | 'CAD'
                  | 'SGD'
                  | 'RON'
                  | 'JPY'
                  | 'MYR'
                  | 'CLP'
                  | 'PEN'
                  | 'MAD'
                  | 'AUD'
                  | 'CHF'
                  | 'BRL'
              }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { pid: string } } & {
              json: {
                balanceAvailabilityDurationModifier?:
                  | 'noModification'
                  | 'startOfPeriod'
                  | 'endOfPeriod'
                  | undefined
                balanceAvailabilityDurationUnit?: 'day' | 'week' | 'month' | 'year' | undefined
                balanceAvailabilityDurationValue?: number | undefined
                balanceExpirationDate?: string | undefined
                balanceOptionAmountOvertakingStrategy?: 'strict' | 'partial' | undefined
                balanceOptionCreditRounding?: 'lower' | 'upper' | 'natural' | undefined
                balanceOptionDebitRounding?: 'lower' | 'upper' | 'natural' | undefined
                description?: string | undefined
                imageRef?: string | undefined
                maxAmount?: number | undefined
                maxCreditAmountLimit?: number | undefined
                maxDebitAmountLimit?: number | undefined
                meta?: { isInternal?: boolean | undefined } | undefined
                minAmount?: number | undefined
                name: string
                unit:
                  | 'POINTS'
                  | 'EUR'
                  | 'USD'
                  | 'MXN'
                  | 'GBP'
                  | 'INR'
                  | 'CAD'
                  | 'SGD'
                  | 'RON'
                  | 'JPY'
                  | 'MYR'
                  | 'CLP'
                  | 'PEN'
                  | 'MAD'
                  | 'AUD'
                  | 'CHF'
                  | 'BRL'
              }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/loyalty/balance/programs/:pid/balance-definitions/:bdid': {
      $delete:
        | {
            input: { param: { pid: string; bdid: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { pid: string; bdid: string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { pid: string; bdid: string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { pid: string; bdid: string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { pid: string; bdid: string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { pid: string; bdid: string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
      $get:
        | {
            input: { param: { pid: string; bdid: string } } & {
              query: { version?: 'active' | 'draft' | undefined }
            }
            output: BalanceDefinition
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { pid: string; bdid: string } } & {
              query: { version?: 'active' | 'draft' | undefined }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { pid: string; bdid: string } } & {
              query: { version?: 'active' | 'draft' | undefined }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { pid: string; bdid: string } } & {
              query: { version?: 'active' | 'draft' | undefined }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { pid: string; bdid: string } } & {
              query: { version?: 'active' | 'draft' | undefined }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { pid: string; bdid: string } } & {
              query: { version?: 'active' | 'draft' | undefined }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
      $put:
        | {
            input: { param: { pid: string; bdid: string } } & {
              json: {
                balanceAvailabilityDurationModifier?:
                  | 'noModification'
                  | 'startOfPeriod'
                  | 'endOfPeriod'
                  | undefined
                balanceAvailabilityDurationUnit?: 'day' | 'week' | 'month' | 'year' | undefined
                balanceAvailabilityDurationValue?: number | undefined
                balanceExpirationDate?: string | undefined
                balanceOptionAmountOvertakingStrategy?: 'strict' | 'partial' | undefined
                balanceOptionCreditRounding?: 'lower' | 'upper' | 'natural' | undefined
                balanceOptionDebitRounding?: 'lower' | 'upper' | 'natural' | undefined
                description?: string | undefined
                imageRef?: string | undefined
                maxAmount?: number | undefined
                maxCreditAmountLimit?: number | undefined
                maxDebitAmountLimit?: number | undefined
                meta?: { isInternal?: boolean | undefined } | undefined
                minAmount?: number | undefined
                name: string
                unit:
                  | 'POINTS'
                  | 'EUR'
                  | 'USD'
                  | 'MXN'
                  | 'GBP'
                  | 'INR'
                  | 'CAD'
                  | 'SGD'
                  | 'RON'
                  | 'JPY'
                  | 'MYR'
                  | 'CLP'
                  | 'PEN'
                  | 'MAD'
                  | 'AUD'
                  | 'CHF'
                  | 'BRL'
              }
            }
            output: BalanceDefinition
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { pid: string; bdid: string } } & {
              json: {
                balanceAvailabilityDurationModifier?:
                  | 'noModification'
                  | 'startOfPeriod'
                  | 'endOfPeriod'
                  | undefined
                balanceAvailabilityDurationUnit?: 'day' | 'week' | 'month' | 'year' | undefined
                balanceAvailabilityDurationValue?: number | undefined
                balanceExpirationDate?: string | undefined
                balanceOptionAmountOvertakingStrategy?: 'strict' | 'partial' | undefined
                balanceOptionCreditRounding?: 'lower' | 'upper' | 'natural' | undefined
                balanceOptionDebitRounding?: 'lower' | 'upper' | 'natural' | undefined
                description?: string | undefined
                imageRef?: string | undefined
                maxAmount?: number | undefined
                maxCreditAmountLimit?: number | undefined
                maxDebitAmountLimit?: number | undefined
                meta?: { isInternal?: boolean | undefined } | undefined
                minAmount?: number | undefined
                name: string
                unit:
                  | 'POINTS'
                  | 'EUR'
                  | 'USD'
                  | 'MXN'
                  | 'GBP'
                  | 'INR'
                  | 'CAD'
                  | 'SGD'
                  | 'RON'
                  | 'JPY'
                  | 'MYR'
                  | 'CLP'
                  | 'PEN'
                  | 'MAD'
                  | 'AUD'
                  | 'CHF'
                  | 'BRL'
              }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { pid: string; bdid: string } } & {
              json: {
                balanceAvailabilityDurationModifier?:
                  | 'noModification'
                  | 'startOfPeriod'
                  | 'endOfPeriod'
                  | undefined
                balanceAvailabilityDurationUnit?: 'day' | 'week' | 'month' | 'year' | undefined
                balanceAvailabilityDurationValue?: number | undefined
                balanceExpirationDate?: string | undefined
                balanceOptionAmountOvertakingStrategy?: 'strict' | 'partial' | undefined
                balanceOptionCreditRounding?: 'lower' | 'upper' | 'natural' | undefined
                balanceOptionDebitRounding?: 'lower' | 'upper' | 'natural' | undefined
                description?: string | undefined
                imageRef?: string | undefined
                maxAmount?: number | undefined
                maxCreditAmountLimit?: number | undefined
                maxDebitAmountLimit?: number | undefined
                meta?: { isInternal?: boolean | undefined } | undefined
                minAmount?: number | undefined
                name: string
                unit:
                  | 'POINTS'
                  | 'EUR'
                  | 'USD'
                  | 'MXN'
                  | 'GBP'
                  | 'INR'
                  | 'CAD'
                  | 'SGD'
                  | 'RON'
                  | 'JPY'
                  | 'MYR'
                  | 'CLP'
                  | 'PEN'
                  | 'MAD'
                  | 'AUD'
                  | 'CHF'
                  | 'BRL'
              }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { pid: string; bdid: string } } & {
              json: {
                balanceAvailabilityDurationModifier?:
                  | 'noModification'
                  | 'startOfPeriod'
                  | 'endOfPeriod'
                  | undefined
                balanceAvailabilityDurationUnit?: 'day' | 'week' | 'month' | 'year' | undefined
                balanceAvailabilityDurationValue?: number | undefined
                balanceExpirationDate?: string | undefined
                balanceOptionAmountOvertakingStrategy?: 'strict' | 'partial' | undefined
                balanceOptionCreditRounding?: 'lower' | 'upper' | 'natural' | undefined
                balanceOptionDebitRounding?: 'lower' | 'upper' | 'natural' | undefined
                description?: string | undefined
                imageRef?: string | undefined
                maxAmount?: number | undefined
                maxCreditAmountLimit?: number | undefined
                maxDebitAmountLimit?: number | undefined
                meta?: { isInternal?: boolean | undefined } | undefined
                minAmount?: number | undefined
                name: string
                unit:
                  | 'POINTS'
                  | 'EUR'
                  | 'USD'
                  | 'MXN'
                  | 'GBP'
                  | 'INR'
                  | 'CAD'
                  | 'SGD'
                  | 'RON'
                  | 'JPY'
                  | 'MYR'
                  | 'CLP'
                  | 'PEN'
                  | 'MAD'
                  | 'AUD'
                  | 'CHF'
                  | 'BRL'
              }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { pid: string; bdid: string } } & {
              json: {
                balanceAvailabilityDurationModifier?:
                  | 'noModification'
                  | 'startOfPeriod'
                  | 'endOfPeriod'
                  | undefined
                balanceAvailabilityDurationUnit?: 'day' | 'week' | 'month' | 'year' | undefined
                balanceAvailabilityDurationValue?: number | undefined
                balanceExpirationDate?: string | undefined
                balanceOptionAmountOvertakingStrategy?: 'strict' | 'partial' | undefined
                balanceOptionCreditRounding?: 'lower' | 'upper' | 'natural' | undefined
                balanceOptionDebitRounding?: 'lower' | 'upper' | 'natural' | undefined
                description?: string | undefined
                imageRef?: string | undefined
                maxAmount?: number | undefined
                maxCreditAmountLimit?: number | undefined
                maxDebitAmountLimit?: number | undefined
                meta?: { isInternal?: boolean | undefined } | undefined
                minAmount?: number | undefined
                name: string
                unit:
                  | 'POINTS'
                  | 'EUR'
                  | 'USD'
                  | 'MXN'
                  | 'GBP'
                  | 'INR'
                  | 'CAD'
                  | 'SGD'
                  | 'RON'
                  | 'JPY'
                  | 'MYR'
                  | 'CLP'
                  | 'PEN'
                  | 'MAD'
                  | 'AUD'
                  | 'CHF'
                  | 'BRL'
              }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { pid: string; bdid: string } } & {
              json: {
                balanceAvailabilityDurationModifier?:
                  | 'noModification'
                  | 'startOfPeriod'
                  | 'endOfPeriod'
                  | undefined
                balanceAvailabilityDurationUnit?: 'day' | 'week' | 'month' | 'year' | undefined
                balanceAvailabilityDurationValue?: number | undefined
                balanceExpirationDate?: string | undefined
                balanceOptionAmountOvertakingStrategy?: 'strict' | 'partial' | undefined
                balanceOptionCreditRounding?: 'lower' | 'upper' | 'natural' | undefined
                balanceOptionDebitRounding?: 'lower' | 'upper' | 'natural' | undefined
                description?: string | undefined
                imageRef?: string | undefined
                maxAmount?: number | undefined
                maxCreditAmountLimit?: number | undefined
                maxDebitAmountLimit?: number | undefined
                meta?: { isInternal?: boolean | undefined } | undefined
                minAmount?: number | undefined
                name: string
                unit:
                  | 'POINTS'
                  | 'EUR'
                  | 'USD'
                  | 'MXN'
                  | 'GBP'
                  | 'INR'
                  | 'CAD'
                  | 'SGD'
                  | 'RON'
                  | 'JPY'
                  | 'MYR'
                  | 'CLP'
                  | 'PEN'
                  | 'MAD'
                  | 'AUD'
                  | 'CHF'
                  | 'BRL'
              }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 424
          }
        | {
            input: { param: { pid: string; bdid: string } } & {
              json: {
                balanceAvailabilityDurationModifier?:
                  | 'noModification'
                  | 'startOfPeriod'
                  | 'endOfPeriod'
                  | undefined
                balanceAvailabilityDurationUnit?: 'day' | 'week' | 'month' | 'year' | undefined
                balanceAvailabilityDurationValue?: number | undefined
                balanceExpirationDate?: string | undefined
                balanceOptionAmountOvertakingStrategy?: 'strict' | 'partial' | undefined
                balanceOptionCreditRounding?: 'lower' | 'upper' | 'natural' | undefined
                balanceOptionDebitRounding?: 'lower' | 'upper' | 'natural' | undefined
                description?: string | undefined
                imageRef?: string | undefined
                maxAmount?: number | undefined
                maxCreditAmountLimit?: number | undefined
                maxDebitAmountLimit?: number | undefined
                meta?: { isInternal?: boolean | undefined } | undefined
                minAmount?: number | undefined
                name: string
                unit:
                  | 'POINTS'
                  | 'EUR'
                  | 'USD'
                  | 'MXN'
                  | 'GBP'
                  | 'INR'
                  | 'CAD'
                  | 'SGD'
                  | 'RON'
                  | 'JPY'
                  | 'MYR'
                  | 'CLP'
                  | 'PEN'
                  | 'MAD'
                  | 'AUD'
                  | 'CHF'
                  | 'BRL'
              }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/loyalty/balance/programs/:pid/balance-definitions/:bdid/limits': {
      $post:
        | {
            input: { param: { pid: string; bdid: string } } & {
              json: {
                constraintType: 'transaction' | 'amount'
                durationUnit: 'day' | 'week' | 'month' | 'year'
                durationValue: number
                slidingSchedule?: boolean | undefined
                transactionType: 'credit' | 'debit'
                value: number
              }
            }
            output: BalanceLimit
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { pid: string; bdid: string } } & {
              json: {
                constraintType: 'transaction' | 'amount'
                durationUnit: 'day' | 'week' | 'month' | 'year'
                durationValue: number
                slidingSchedule?: boolean | undefined
                transactionType: 'credit' | 'debit'
                value: number
              }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { pid: string; bdid: string } } & {
              json: {
                constraintType: 'transaction' | 'amount'
                durationUnit: 'day' | 'week' | 'month' | 'year'
                durationValue: number
                slidingSchedule?: boolean | undefined
                transactionType: 'credit' | 'debit'
                value: number
              }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { pid: string; bdid: string } } & {
              json: {
                constraintType: 'transaction' | 'amount'
                durationUnit: 'day' | 'week' | 'month' | 'year'
                durationValue: number
                slidingSchedule?: boolean | undefined
                transactionType: 'credit' | 'debit'
                value: number
              }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { pid: string; bdid: string } } & {
              json: {
                constraintType: 'transaction' | 'amount'
                durationUnit: 'day' | 'week' | 'month' | 'year'
                durationValue: number
                slidingSchedule?: boolean | undefined
                transactionType: 'credit' | 'debit'
                value: number
              }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 424
          }
        | {
            input: { param: { pid: string; bdid: string } } & {
              json: {
                constraintType: 'transaction' | 'amount'
                durationUnit: 'day' | 'week' | 'month' | 'year'
                durationValue: number
                slidingSchedule?: boolean | undefined
                transactionType: 'credit' | 'debit'
                value: number
              }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/loyalty/balance/programs/:pid/balance-definitions/:bdid/limits/:blid': {
      $delete:
        | {
            input: { param: { pid: string; bdid: string; blid: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { pid: string; bdid: string; blid: string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { pid: string; bdid: string; blid: string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { pid: string; bdid: string; blid: string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { pid: string; bdid: string; blid: string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { pid: string; bdid: string; blid: string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
      $get:
        | {
            input: { param: { pid: string; bdid: string; blid: string } } & {
              query: { version?: 'active' | 'draft' | undefined }
            }
            output: BalanceLimit
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { pid: string; bdid: string; blid: string } } & {
              query: { version?: 'active' | 'draft' | undefined }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { pid: string; bdid: string; blid: string } } & {
              query: { version?: 'active' | 'draft' | undefined }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { pid: string; bdid: string; blid: string } } & {
              query: { version?: 'active' | 'draft' | undefined }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { pid: string; bdid: string; blid: string } } & {
              query: { version?: 'active' | 'draft' | undefined }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { pid: string; bdid: string; blid: string } } & {
              query: { version?: 'active' | 'draft' | undefined }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
      $put:
        | {
            input: { param: { pid: string; bdid: string; blid: string } } & {
              json: {
                constraintType: 'transaction' | 'amount'
                durationUnit: 'day' | 'week' | 'month' | 'year'
                durationValue: number
                slidingSchedule?: boolean | undefined
                transactionType: 'credit' | 'debit'
                value: number
              }
            }
            output: BalanceLimit
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { pid: string; bdid: string; blid: string } } & {
              json: {
                constraintType: 'transaction' | 'amount'
                durationUnit: 'day' | 'week' | 'month' | 'year'
                durationValue: number
                slidingSchedule?: boolean | undefined
                transactionType: 'credit' | 'debit'
                value: number
              }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { pid: string; bdid: string; blid: string } } & {
              json: {
                constraintType: 'transaction' | 'amount'
                durationUnit: 'day' | 'week' | 'month' | 'year'
                durationValue: number
                slidingSchedule?: boolean | undefined
                transactionType: 'credit' | 'debit'
                value: number
              }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { pid: string; bdid: string; blid: string } } & {
              json: {
                constraintType: 'transaction' | 'amount'
                durationUnit: 'day' | 'week' | 'month' | 'year'
                durationValue: number
                slidingSchedule?: boolean | undefined
                transactionType: 'credit' | 'debit'
                value: number
              }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { pid: string; bdid: string; blid: string } } & {
              json: {
                constraintType: 'transaction' | 'amount'
                durationUnit: 'day' | 'week' | 'month' | 'year'
                durationValue: number
                slidingSchedule?: boolean | undefined
                transactionType: 'credit' | 'debit'
                value: number
              }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { pid: string; bdid: string; blid: string } } & {
              json: {
                constraintType: 'transaction' | 'amount'
                durationUnit: 'day' | 'week' | 'month' | 'year'
                durationValue: number
                slidingSchedule?: boolean | undefined
                transactionType: 'credit' | 'debit'
                value: number
              }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/loyalty/balance/programs/:pid/contact-balances': {
      $get:
        | {
            input: { param: { pid: string } } & {
              query: {
                includeInternal?: boolean | undefined
                limit?: number | undefined
                offset?: number | undefined
                sort?: 'asc' | 'desc' | undefined
                sortField?: 'updatedAt' | 'value' | undefined
                balanceDefinitionId: string
              }
            }
            output: {
              balanceDefinitionId?: string | undefined
              balances?:
                | {
                    contactId?: number | undefined
                    loyaltySubscriptionId?: string | undefined
                    updatedAt?: string | undefined
                    value?: number | undefined
                  }[]
                | undefined
              count?: number | undefined
              loyaltyProgramId?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { pid: string } } & {
              query: {
                includeInternal?: boolean | undefined
                limit?: number | undefined
                offset?: number | undefined
                sort?: 'asc' | 'desc' | undefined
                sortField?: 'updatedAt' | 'value' | undefined
                balanceDefinitionId: string
              }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { pid: string } } & {
              query: {
                includeInternal?: boolean | undefined
                limit?: number | undefined
                offset?: number | undefined
                sort?: 'asc' | 'desc' | undefined
                sortField?: 'updatedAt' | 'value' | undefined
                balanceDefinitionId: string
              }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { pid: string } } & {
              query: {
                includeInternal?: boolean | undefined
                limit?: number | undefined
                offset?: number | undefined
                sort?: 'asc' | 'desc' | undefined
                sortField?: 'updatedAt' | 'value' | undefined
                balanceDefinitionId: string
              }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { pid: string } } & {
              query: {
                includeInternal?: boolean | undefined
                limit?: number | undefined
                offset?: number | undefined
                sort?: 'asc' | 'desc' | undefined
                sortField?: 'updatedAt' | 'value' | undefined
                balanceDefinitionId: string
              }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { pid: string } } & {
              query: {
                includeInternal?: boolean | undefined
                limit?: number | undefined
                offset?: number | undefined
                sort?: 'asc' | 'desc' | undefined
                sortField?: 'updatedAt' | 'value' | undefined
                balanceDefinitionId: string
              }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/loyalty/balance/programs/:pid/create-order': {
      $post:
        | {
            input: { param: { pid: string } } & {
              json: {
                amount: number
                balanceDefinitionId: string
                contactId: number
                dueAt: string
                expiresAt?: string | undefined
                meta?: { [x: string]: unknown } | undefined
                source: 'engine' | 'user'
              }
            }
            output: {
              amount: number
              balanceDefinitionId?: string | undefined
              contactId: number
              createdAt: string
              dueAt: string
              expiresAt?: string | undefined
              id?: string | undefined
              loyaltyProgramId: string
              meta?: { [x: string]: unknown } | undefined
              processedAt?: string | undefined
              transactionid?: string | undefined
              updatedAt: string
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { pid: string } } & {
              json: {
                amount: number
                balanceDefinitionId: string
                contactId: number
                dueAt: string
                expiresAt?: string | undefined
                meta?: { [x: string]: unknown } | undefined
                source: 'engine' | 'user'
              }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { pid: string } } & {
              json: {
                amount: number
                balanceDefinitionId: string
                contactId: number
                dueAt: string
                expiresAt?: string | undefined
                meta?: { [x: string]: unknown } | undefined
                source: 'engine' | 'user'
              }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { pid: string } } & {
              json: {
                amount: number
                balanceDefinitionId: string
                contactId: number
                dueAt: string
                expiresAt?: string | undefined
                meta?: { [x: string]: unknown } | undefined
                source: 'engine' | 'user'
              }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { pid: string } } & {
              json: {
                amount: number
                balanceDefinitionId: string
                contactId: number
                dueAt: string
                expiresAt?: string | undefined
                meta?: { [x: string]: unknown } | undefined
                source: 'engine' | 'user'
              }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/loyalty/balance/programs/:pid/subscriptions/:cid/balances': {
      $get:
        | {
            input: { param: { cid: string; pid: string } } & {
              query: { includeInternal?: boolean | undefined }
            }
            output: {
              loyaltyProgramId?: string | undefined
              contactId?: bigint | undefined
              balance?:
                | { balanceDefinitionId?: string | undefined; value?: number | undefined }[]
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { cid: string; pid: string } } & {
              query: { includeInternal?: boolean | undefined }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { cid: string; pid: string } } & {
              query: { includeInternal?: boolean | undefined }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { cid: string; pid: string } } & {
              query: { includeInternal?: boolean | undefined }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { cid: string; pid: string } } & {
              query: { includeInternal?: boolean | undefined }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { cid: string; pid: string } } & {
              query: { includeInternal?: boolean | undefined }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { param: { pid: string; cid: string } } & {
              json: { balanceDefinitionId: string }
            }
            output: {
              id?: string | undefined
              amount?: number | undefined
              loyaltyProgramId?: string | undefined
              organizationId?: bigint | undefined
              contactId?: bigint | undefined
              balanceDefinitionId?: string | undefined
              createdAt?: string | undefined
              expiresAt?: string | undefined
              consumedAt?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { pid: string; cid: string } } & {
              json: { balanceDefinitionId: string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { pid: string; cid: string } } & {
              json: { balanceDefinitionId: string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { pid: string; cid: string } } & {
              json: { balanceDefinitionId: string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { pid: string; cid: string } } & {
              json: { balanceDefinitionId: string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { pid: string; cid: string } } & {
              json: { balanceDefinitionId: string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/loyalty/balance/programs/:pid/transaction-history': {
      $get:
        | {
            input: { param: { pid: string } } & {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                sortField?: 'createdAt' | undefined
                sort?: 'asc' | 'desc' | undefined
                contactId: bigint
                balanceDefinitionId: string
                status?: 'draft' | 'completed' | 'rejected' | 'cancelled' | 'expired' | undefined
                transactionType?: 'credit' | 'debit' | undefined
                loyaltySubscriptionId?: string | undefined
              }
            }
            output: {
              balanceDefinitionId?: string | undefined
              contactId?: number | undefined
              count?: number | undefined
              loyaltyProgramId?: string | undefined
              transactionHistory?:
                | {
                    amount?: number | undefined
                    transactionType?: 'credit' | 'debit' | undefined
                    balanceExpirationDate?: string | undefined
                    cancelledAt?: string | undefined
                    completedAt?: string | undefined
                    createdAt?: string | undefined
                    id?: string | undefined
                    meta?: { [x: string]: unknown } | undefined
                    rejectReason?: string | undefined
                    rejectedAt?: string | undefined
                    status?: string | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { pid: string } } & {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                sortField?: 'createdAt' | undefined
                sort?: 'asc' | 'desc' | undefined
                contactId: bigint
                balanceDefinitionId: string
                status?: 'draft' | 'completed' | 'rejected' | 'cancelled' | 'expired' | undefined
                transactionType?: 'credit' | 'debit' | undefined
                loyaltySubscriptionId?: string | undefined
              }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { pid: string } } & {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                sortField?: 'createdAt' | undefined
                sort?: 'asc' | 'desc' | undefined
                contactId: bigint
                balanceDefinitionId: string
                status?: 'draft' | 'completed' | 'rejected' | 'cancelled' | 'expired' | undefined
                transactionType?: 'credit' | 'debit' | undefined
                loyaltySubscriptionId?: string | undefined
              }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { pid: string } } & {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                sortField?: 'createdAt' | undefined
                sort?: 'asc' | 'desc' | undefined
                contactId: bigint
                balanceDefinitionId: string
                status?: 'draft' | 'completed' | 'rejected' | 'cancelled' | 'expired' | undefined
                transactionType?: 'credit' | 'debit' | undefined
                loyaltySubscriptionId?: string | undefined
              }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { pid: string } } & {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                sortField?: 'createdAt' | undefined
                sort?: 'asc' | 'desc' | undefined
                contactId: bigint
                balanceDefinitionId: string
                status?: 'draft' | 'completed' | 'rejected' | 'cancelled' | 'expired' | undefined
                transactionType?: 'credit' | 'debit' | undefined
                loyaltySubscriptionId?: string | undefined
              }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { pid: string } } & {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                sortField?: 'createdAt' | undefined
                sort?: 'asc' | 'desc' | undefined
                contactId: bigint
                balanceDefinitionId: string
                status?: 'draft' | 'completed' | 'rejected' | 'cancelled' | 'expired' | undefined
                transactionType?: 'credit' | 'debit' | undefined
                loyaltySubscriptionId?: string | undefined
              }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/loyalty/balance/programs/:pid/transactions': {
      $post:
        | {
            input: { param: { pid: string } } & {
              json: {
                amount: number
                transactionType?: 'credit' | 'debit' | undefined
                balanceDefinitionId: string
                contactId?: bigint | undefined
                LoyaltySubscriptionId?: string | undefined
                meta?: { [x: string]: unknown } | undefined
                ttl?: number | undefined
                eventTime?: string | undefined
                autoComplete?: boolean | undefined
                balanceExpiryInMinutes?: number | undefined
              }
            }
            output: Transaction
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { pid: string } } & {
              json: {
                amount: number
                transactionType?: 'credit' | 'debit' | undefined
                balanceDefinitionId: string
                contactId?: bigint | undefined
                LoyaltySubscriptionId?: string | undefined
                meta?: { [x: string]: unknown } | undefined
                ttl?: number | undefined
                eventTime?: string | undefined
                autoComplete?: boolean | undefined
                balanceExpiryInMinutes?: number | undefined
              }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { pid: string } } & {
              json: {
                amount: number
                transactionType?: 'credit' | 'debit' | undefined
                balanceDefinitionId: string
                contactId?: bigint | undefined
                LoyaltySubscriptionId?: string | undefined
                meta?: { [x: string]: unknown } | undefined
                ttl?: number | undefined
                eventTime?: string | undefined
                autoComplete?: boolean | undefined
                balanceExpiryInMinutes?: number | undefined
              }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { pid: string } } & {
              json: {
                amount: number
                transactionType?: 'credit' | 'debit' | undefined
                balanceDefinitionId: string
                contactId?: bigint | undefined
                LoyaltySubscriptionId?: string | undefined
                meta?: { [x: string]: unknown } | undefined
                ttl?: number | undefined
                eventTime?: string | undefined
                autoComplete?: boolean | undefined
                balanceExpiryInMinutes?: number | undefined
              }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { pid: string } } & {
              json: {
                amount: number
                transactionType?: 'credit' | 'debit' | undefined
                balanceDefinitionId: string
                contactId?: bigint | undefined
                LoyaltySubscriptionId?: string | undefined
                meta?: { [x: string]: unknown } | undefined
                ttl?: number | undefined
                eventTime?: string | undefined
                autoComplete?: boolean | undefined
                balanceExpiryInMinutes?: number | undefined
              }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { pid: string } } & {
              json: {
                amount: number
                transactionType?: 'credit' | 'debit' | undefined
                balanceDefinitionId: string
                contactId?: bigint | undefined
                LoyaltySubscriptionId?: string | undefined
                meta?: { [x: string]: unknown } | undefined
                ttl?: number | undefined
                eventTime?: string | undefined
                autoComplete?: boolean | undefined
                balanceExpiryInMinutes?: number | undefined
              }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/loyalty/balance/programs/:pid/transactions/:tid/cancel': {
      $post:
        | {
            input: { param: { pid: string; tid: string } }
            output: Transaction
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { pid: string; tid: string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { pid: string; tid: string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { pid: string; tid: string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { pid: string; tid: string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { pid: string; tid: string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/loyalty/balance/programs/:pid/transactions/:tid/complete': {
      $post:
        | {
            input: { param: { pid: string; tid: string } }
            output: Transaction
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { pid: string; tid: string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { pid: string; tid: string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { pid: string; tid: string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { pid: string; tid: string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { pid: string; tid: string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/loyalty/config/programs': {
      $get:
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                sort_field?: 'name' | 'created_at' | 'updated_at' | undefined
                sort?: 'asc' | 'desc' | undefined
              }
            }
            output: { items?: LoyaltyProgram[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                sort_field?: 'name' | 'created_at' | 'updated_at' | undefined
                sort?: 'asc' | 'desc' | undefined
              }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                sort_field?: 'name' | 'created_at' | 'updated_at' | undefined
                sort?: 'asc' | 'desc' | undefined
              }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                sort_field?: 'name' | 'created_at' | 'updated_at' | undefined
                sort?: 'asc' | 'desc' | undefined
              }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                sort_field?: 'name' | 'created_at' | 'updated_at' | undefined
                sort?: 'asc' | 'desc' | undefined
              }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                sort_field?: 'name' | 'created_at' | 'updated_at' | undefined
                sort?: 'asc' | 'desc' | undefined
              }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 422
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                sort_field?: 'name' | 'created_at' | 'updated_at' | undefined
                sort?: 'asc' | 'desc' | undefined
              }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: {
              json: {
                description?: string | undefined
                documentId?: string | undefined
                meta?: { [x: string]: { [x: string]: unknown } } | undefined
                name: string
              }
            }
            output: LoyaltyProgram
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                description?: string | undefined
                documentId?: string | undefined
                meta?: { [x: string]: { [x: string]: unknown } } | undefined
                name: string
              }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              json: {
                description?: string | undefined
                documentId?: string | undefined
                meta?: { [x: string]: { [x: string]: unknown } } | undefined
                name: string
              }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              json: {
                description?: string | undefined
                documentId?: string | undefined
                meta?: { [x: string]: { [x: string]: unknown } } | undefined
                name: string
              }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 409
          }
        | {
            input: {
              json: {
                description?: string | undefined
                documentId?: string | undefined
                meta?: { [x: string]: { [x: string]: unknown } } | undefined
                name: string
              }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 422
          }
        | {
            input: {
              json: {
                description?: string | undefined
                documentId?: string | undefined
                meta?: { [x: string]: { [x: string]: unknown } } | undefined
                name: string
              }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/loyalty/config/programs/:pid': {
      $delete:
        | { input: { param: { pid: string } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { pid: string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { pid: string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { pid: string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { pid: string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { pid: string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
      $get:
        | {
            input: { param: { pid: string } }
            output: LoyaltyProgram
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { pid: string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { pid: string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { pid: string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { pid: string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { pid: string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
      $patch:
        | {
            input: { param: { pid: string } } & {
              json: {
                description?: string | undefined
                meta?: { [x: string]: unknown } | undefined
                name?: string | undefined
              }
            }
            output: LoyaltyProgram
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { pid: string } } & {
              json: {
                description?: string | undefined
                meta?: { [x: string]: unknown } | undefined
                name?: string | undefined
              }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { pid: string } } & {
              json: {
                description?: string | undefined
                meta?: { [x: string]: unknown } | undefined
                name?: string | undefined
              }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { pid: string } } & {
              json: {
                description?: string | undefined
                meta?: { [x: string]: unknown } | undefined
                name?: string | undefined
              }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { pid: string } } & {
              json: {
                description?: string | undefined
                meta?: { [x: string]: unknown } | undefined
                name?: string | undefined
              }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { pid: string } } & {
              json: {
                description?: string | undefined
                meta?: { [x: string]: unknown } | undefined
                name?: string | undefined
              }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { pid: string } } & {
              json: {
                description?: string | undefined
                meta?: { [x: string]: unknown } | undefined
                name?: string | undefined
              }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
      $put:
        | {
            input: { param: { pid: string } } & {
              json: {
                description?: string | undefined
                meta?: { [x: string]: unknown } | undefined
                name: string
              }
            }
            output: LoyaltyProgram
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { pid: string } } & {
              json: {
                description?: string | undefined
                meta?: { [x: string]: unknown } | undefined
                name: string
              }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { pid: string } } & {
              json: {
                description?: string | undefined
                meta?: { [x: string]: unknown } | undefined
                name: string
              }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { pid: string } } & {
              json: {
                description?: string | undefined
                meta?: { [x: string]: unknown } | undefined
                name: string
              }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { pid: string } } & {
              json: {
                description?: string | undefined
                meta?: { [x: string]: unknown } | undefined
                name: string
              }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { pid: string } } & {
              json: {
                description?: string | undefined
                meta?: { [x: string]: unknown } | undefined
                name: string
              }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { pid: string } } & {
              json: {
                description?: string | undefined
                meta?: { [x: string]: unknown } | undefined
                name: string
              }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/loyalty/config/programs/:pid/account-info': {
      $get:
        | {
            input: { param: { pid: string } } & {
              query: {
                contactId?: string | undefined
                params?: string | undefined
                loyaltySubscriptionId?: string | undefined
                includeInternal?: boolean | undefined
              }
            }
            output: {
              balance?:
                | {
                    balances?:
                      | {
                          balanceDefinitionId?: string | undefined
                          balanceDefinitionName?: string | undefined
                          value?: number | undefined
                        }[]
                      | undefined
                    contactId?: number | undefined
                    loyaltyProgramId?: string | undefined
                  }
                | undefined
              loyaltyProgramName?: string | undefined
              members?:
                | {
                    createdAt?: string | undefined
                    memberContactId?: number | undefined
                    updatedAt?: string | undefined
                  }[]
                | undefined
              membership?:
                | {
                    createdAt?: string | undefined
                    loyaltySubscriptionId?: string | undefined
                    updatedAt?: string | undefined
                  }
                | undefined
              reward?:
                | {
                    code?: string | undefined
                    contactId?: number | undefined
                    createdAt?: string | undefined
                    expirationDate?: string | undefined
                    id?: string | undefined
                    loyaltyProgramId?: string | undefined
                    meta?: { [x: string]: { [x: string]: unknown } } | undefined
                    publicDescription?: string | undefined
                    rewardId?: string | undefined
                    rewardName?: string | undefined
                    unit?:
                      | 'PERCENT'
                      | 'EUR'
                      | 'USD'
                      | 'MXN'
                      | 'GBP'
                      | 'INR'
                      | 'CAD'
                      | 'SGD'
                      | 'RON'
                      | 'JPY'
                      | 'MYR'
                      | 'CLP'
                      | 'PEN'
                      | 'MAD'
                      | 'AUD'
                      | 'CHF'
                      | 'BRL'
                      | undefined
                    updatedAt?: string | undefined
                    validFrom?: string | undefined
                    value?: number | undefined
                  }[]
                | undefined
              tier?:
                | {
                    contactId?: number | undefined
                    createdAt?: string | undefined
                    groupId?: string | undefined
                    groupName?: string | undefined
                    loyaltyProgramId?: string | undefined
                    meta?: { [x: string]: { [x: string]: unknown } } | undefined
                    tierId?: string | undefined
                    tierName?: string | undefined
                    updatedAt?: string | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { pid: string } } & {
              query: {
                contactId?: string | undefined
                params?: string | undefined
                loyaltySubscriptionId?: string | undefined
                includeInternal?: boolean | undefined
              }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { pid: string } } & {
              query: {
                contactId?: string | undefined
                params?: string | undefined
                loyaltySubscriptionId?: string | undefined
                includeInternal?: boolean | undefined
              }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { pid: string } } & {
              query: {
                contactId?: string | undefined
                params?: string | undefined
                loyaltySubscriptionId?: string | undefined
                includeInternal?: boolean | undefined
              }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { pid: string } } & {
              query: {
                contactId?: string | undefined
                params?: string | undefined
                loyaltySubscriptionId?: string | undefined
                includeInternal?: boolean | undefined
              }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { pid: string } } & {
              query: {
                contactId?: string | undefined
                params?: string | undefined
                loyaltySubscriptionId?: string | undefined
                includeInternal?: boolean | undefined
              }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/loyalty/config/programs/:pid/contact/:cid': {
      $delete:
        | {
            input: { param: { pid: string; cid: number } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { pid: string; cid: number } }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { pid: string; cid: number } }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { pid: string; cid: number } }
            output: ErrorModel
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { pid: string; cid: number } }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { pid: string; cid: number } }
            output: ErrorModel
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { pid: string; cid: number } }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/loyalty/config/programs/:pid/publish': {
      $post:
        | { input: { param: { pid: string } }; output: {}; outputFormat: string; status: 200 }
        | {
            input: { param: { pid: string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { pid: string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { pid: string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { pid: string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { pid: string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/loyalty/config/programs/:pid/subscription-members': {
      $delete:
        | {
            input: { param: { pid: string } } & { query: { memberContactIds: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { pid: string } } & { query: { memberContactIds: string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { pid: string } } & { query: { memberContactIds: string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { pid: string } } & { query: { memberContactIds: string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { pid: string } } & { query: { memberContactIds: string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { pid: string } } & { query: { memberContactIds: string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { pid: string } } & { query: { memberContactIds: string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { param: { pid: string } } & {
              json: {
                contactId?: number | undefined
                loyaltySubscriptionId?: string | undefined
                memberContactIds: number[]
              }
            }
            output: {
              organizationId?: bigint | undefined
              ownerContactId?: bigint | undefined
              memberContactIds?: bigint[] | undefined
              createdAt?: string | undefined
              updatedAt?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { pid: string } } & {
              json: {
                contactId?: number | undefined
                loyaltySubscriptionId?: string | undefined
                memberContactIds: number[]
              }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { pid: string } } & {
              json: {
                contactId?: number | undefined
                loyaltySubscriptionId?: string | undefined
                memberContactIds: number[]
              }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { pid: string } } & {
              json: {
                contactId?: number | undefined
                loyaltySubscriptionId?: string | undefined
                memberContactIds: number[]
              }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { pid: string } } & {
              json: {
                contactId?: number | undefined
                loyaltySubscriptionId?: string | undefined
                memberContactIds: number[]
              }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { pid: string } } & {
              json: {
                contactId?: number | undefined
                loyaltySubscriptionId?: string | undefined
                memberContactIds: number[]
              }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { pid: string } } & {
              json: {
                contactId?: number | undefined
                loyaltySubscriptionId?: string | undefined
                memberContactIds: number[]
              }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/loyalty/config/programs/:pid/subscriptions': {
      $post:
        | {
            input: { param: { pid: string } } & {
              json: {
                contactId: bigint
                loyaltySubscriptionId?: string | undefined
                creationDate?: string | undefined
                meta?: { [x: string]: { [x: string]: unknown } } | undefined
              }
            }
            output: {
              organizationId?: bigint | undefined
              loyaltyProgramId?: string | undefined
              versionId?: number | undefined
              contactId?: bigint | undefined
              loyaltySubscriptionId?: string | undefined
              meta?: { [x: string]: { [x: string]: unknown } } | undefined
              createdAt?: string | undefined
              updatedAt?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { pid: string } } & {
              json: {
                contactId: bigint
                loyaltySubscriptionId?: string | undefined
                creationDate?: string | undefined
                meta?: { [x: string]: { [x: string]: unknown } } | undefined
              }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { pid: string } } & {
              json: {
                contactId: bigint
                loyaltySubscriptionId?: string | undefined
                creationDate?: string | undefined
                meta?: { [x: string]: { [x: string]: unknown } } | undefined
              }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { pid: string } } & {
              json: {
                contactId: bigint
                loyaltySubscriptionId?: string | undefined
                creationDate?: string | undefined
                meta?: { [x: string]: { [x: string]: unknown } } | undefined
              }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { pid: string } } & {
              json: {
                contactId: bigint
                loyaltySubscriptionId?: string | undefined
                creationDate?: string | undefined
                meta?: { [x: string]: { [x: string]: unknown } } | undefined
              }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { pid: string } } & {
              json: {
                contactId: bigint
                loyaltySubscriptionId?: string | undefined
                creationDate?: string | undefined
                meta?: { [x: string]: { [x: string]: unknown } } | undefined
              }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { pid: string } } & {
              json: {
                contactId: bigint
                loyaltySubscriptionId?: string | undefined
                creationDate?: string | undefined
                meta?: { [x: string]: { [x: string]: unknown } } | undefined
              }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/loyalty/offer/programs/:pid/code-pools/:cpid/codes-count': {
      $get:
        | {
            input: { param: { pid: string; cpid: string } }
            output: { count?: bigint | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { pid: string; cpid: string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { pid: string; cpid: string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { pid: string; cpid: string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { pid: string; cpid: string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { pid: string; cpid: string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/loyalty/offer/programs/:pid/offers': {
      $get:
        | {
            input: { param: { pid: string } } & {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                state?: string | undefined
                version?: 'active' | 'draft' | undefined
              }
            }
            output: {
              items?:
                | {
                    createdAt?: string | undefined
                    endDate?: string | undefined
                    id?: string | undefined
                    loyaltyProgramId?: string | undefined
                    name?: string | undefined
                    publicImage?: string | undefined
                    startDate?: string | undefined
                    state?: string | undefined
                    updatedAt?: string | undefined
                  }[]
                | undefined
              totalCount?: number | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { pid: string } } & {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                state?: string | undefined
                version?: 'active' | 'draft' | undefined
              }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { pid: string } } & {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                state?: string | undefined
                version?: 'active' | 'draft' | undefined
              }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { pid: string } } & {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                state?: string | undefined
                version?: 'active' | 'draft' | undefined
              }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { pid: string } } & {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                state?: string | undefined
                version?: 'active' | 'draft' | undefined
              }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { pid: string } } & {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                state?: string | undefined
                version?: 'active' | 'draft' | undefined
              }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 424
          }
        | {
            input: { param: { pid: string } } & {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                state?: string | undefined
                version?: 'active' | 'draft' | undefined
              }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { param: { pid: string } } & {
              json: {
                name: string
                publicDescription?: string | undefined
                publicImage?: string | undefined
                publicName?: string | undefined
              }
            }
            output: {
              id?: string | undefined
              loyaltyProgramId?: string | undefined
              name?: string | undefined
              publicDescription?: string | undefined
              publicImage?: string | undefined
              publicName?: string | undefined
              createdAt?: string | undefined
              updatedAt?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { pid: string } } & {
              json: {
                name: string
                publicDescription?: string | undefined
                publicImage?: string | undefined
                publicName?: string | undefined
              }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { pid: string } } & {
              json: {
                name: string
                publicDescription?: string | undefined
                publicImage?: string | undefined
                publicName?: string | undefined
              }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { pid: string } } & {
              json: {
                name: string
                publicDescription?: string | undefined
                publicImage?: string | undefined
                publicName?: string | undefined
              }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { pid: string } } & {
              json: {
                name: string
                publicDescription?: string | undefined
                publicImage?: string | undefined
                publicName?: string | undefined
              }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/loyalty/offer/programs/:pid/rewards/attribute': {
      $post:
        | {
            input: { param: { pid: string } } & {
              json: {
                code?: string | undefined
                contactId?: bigint | undefined
                expirationDate?: string | undefined
                loyaltySubscriptionId?: string | undefined
                meta?: { [x: string]: { [x: string]: unknown } } | undefined
                rewardId: string
                value?: number | undefined
                validFrom?: string | undefined
              }
            }
            output: {
              code?: string | undefined
              consumedAt?: string | undefined
              contactId?: bigint | undefined
              createdAt?: string | undefined
              expirationDate?: string | undefined
              id?: string | undefined
              loyaltyProgramId?: string | undefined
              meta?: { [x: string]: { [x: string]: unknown } } | undefined
              rewardId?: string | undefined
              updatedAt?: string | undefined
              value?: number | undefined
              validFrom?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { pid: string } } & {
              json: {
                code?: string | undefined
                contactId?: bigint | undefined
                expirationDate?: string | undefined
                loyaltySubscriptionId?: string | undefined
                meta?: { [x: string]: { [x: string]: unknown } } | undefined
                rewardId: string
                value?: number | undefined
                validFrom?: string | undefined
              }
            }
            output: string
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { pid: string } } & {
              json: {
                code?: string | undefined
                contactId?: bigint | undefined
                expirationDate?: string | undefined
                loyaltySubscriptionId?: string | undefined
                meta?: { [x: string]: { [x: string]: unknown } } | undefined
                rewardId: string
                value?: number | undefined
                validFrom?: string | undefined
              }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { pid: string } } & {
              json: {
                code?: string | undefined
                contactId?: bigint | undefined
                expirationDate?: string | undefined
                loyaltySubscriptionId?: string | undefined
                meta?: { [x: string]: { [x: string]: unknown } } | undefined
                rewardId: string
                value?: number | undefined
                validFrom?: string | undefined
              }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { pid: string } } & {
              json: {
                code?: string | undefined
                contactId?: bigint | undefined
                expirationDate?: string | undefined
                loyaltySubscriptionId?: string | undefined
                meta?: { [x: string]: { [x: string]: unknown } } | undefined
                rewardId: string
                value?: number | undefined
                validFrom?: string | undefined
              }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { pid: string } } & {
              json: {
                code?: string | undefined
                contactId?: bigint | undefined
                expirationDate?: string | undefined
                loyaltySubscriptionId?: string | undefined
                meta?: { [x: string]: { [x: string]: unknown } } | undefined
                rewardId: string
                value?: number | undefined
                validFrom?: string | undefined
              }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { pid: string } } & {
              json: {
                code?: string | undefined
                contactId?: bigint | undefined
                expirationDate?: string | undefined
                loyaltySubscriptionId?: string | undefined
                meta?: { [x: string]: { [x: string]: unknown } } | undefined
                rewardId: string
                value?: number | undefined
                validFrom?: string | undefined
              }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/loyalty/offer/programs/:pid/rewards/redeem': {
      $post:
        | {
            input: { param: { pid: string } } & {
              json: {
                attributedRewardId?: string | undefined
                code?: string | undefined
                contactId?: bigint | undefined
                loyaltySubscriptionId?: string | undefined
                meta?: { [x: string]: { [x: string]: unknown } } | undefined
                order?:
                  | {
                      amount?: number | undefined
                      billing?:
                        | {
                            address?: string | undefined
                            city?: string | undefined
                            countryCode?: string | undefined
                            paymentMethod?: string | undefined
                            phone?: bigint | undefined
                            postCode?: bigint | undefined
                            region?: string | undefined
                          }
                        | undefined
                      contact_id?: bigint | undefined
                      coupons?: string[] | undefined
                      createdAt?: string | undefined
                      email?: string | undefined
                      id?: string | undefined
                      identifiers?:
                        | {
                            ext_id?: string | undefined
                            loyalty_subscription_id?: string | undefined
                          }
                        | undefined
                      products?:
                        | {
                            category?: string[] | undefined
                            price?: number | undefined
                            productId?: string | undefined
                            quantity?: number | undefined
                            variantId?: string | undefined
                          }[]
                        | undefined
                      status?: string | undefined
                      storeId?: string | undefined
                      updatedAt?: string | undefined
                    }
                  | undefined
                rewardId?: string | undefined
                ttl?: number | undefined
                autoComplete?: boolean | undefined
              }
            }
            output: Redeem
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { pid: string } } & {
              json: {
                attributedRewardId?: string | undefined
                code?: string | undefined
                contactId?: bigint | undefined
                loyaltySubscriptionId?: string | undefined
                meta?: { [x: string]: { [x: string]: unknown } } | undefined
                order?:
                  | {
                      amount?: number | undefined
                      billing?:
                        | {
                            address?: string | undefined
                            city?: string | undefined
                            countryCode?: string | undefined
                            paymentMethod?: string | undefined
                            phone?: bigint | undefined
                            postCode?: bigint | undefined
                            region?: string | undefined
                          }
                        | undefined
                      contact_id?: bigint | undefined
                      coupons?: string[] | undefined
                      createdAt?: string | undefined
                      email?: string | undefined
                      id?: string | undefined
                      identifiers?:
                        | {
                            ext_id?: string | undefined
                            loyalty_subscription_id?: string | undefined
                          }
                        | undefined
                      products?:
                        | {
                            category?: string[] | undefined
                            price?: number | undefined
                            productId?: string | undefined
                            quantity?: number | undefined
                            variantId?: string | undefined
                          }[]
                        | undefined
                      status?: string | undefined
                      storeId?: string | undefined
                      updatedAt?: string | undefined
                    }
                  | undefined
                rewardId?: string | undefined
                ttl?: number | undefined
                autoComplete?: boolean | undefined
              }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { pid: string } } & {
              json: {
                attributedRewardId?: string | undefined
                code?: string | undefined
                contactId?: bigint | undefined
                loyaltySubscriptionId?: string | undefined
                meta?: { [x: string]: { [x: string]: unknown } } | undefined
                order?:
                  | {
                      amount?: number | undefined
                      billing?:
                        | {
                            address?: string | undefined
                            city?: string | undefined
                            countryCode?: string | undefined
                            paymentMethod?: string | undefined
                            phone?: bigint | undefined
                            postCode?: bigint | undefined
                            region?: string | undefined
                          }
                        | undefined
                      contact_id?: bigint | undefined
                      coupons?: string[] | undefined
                      createdAt?: string | undefined
                      email?: string | undefined
                      id?: string | undefined
                      identifiers?:
                        | {
                            ext_id?: string | undefined
                            loyalty_subscription_id?: string | undefined
                          }
                        | undefined
                      products?:
                        | {
                            category?: string[] | undefined
                            price?: number | undefined
                            productId?: string | undefined
                            quantity?: number | undefined
                            variantId?: string | undefined
                          }[]
                        | undefined
                      status?: string | undefined
                      storeId?: string | undefined
                      updatedAt?: string | undefined
                    }
                  | undefined
                rewardId?: string | undefined
                ttl?: number | undefined
                autoComplete?: boolean | undefined
              }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { pid: string } } & {
              json: {
                attributedRewardId?: string | undefined
                code?: string | undefined
                contactId?: bigint | undefined
                loyaltySubscriptionId?: string | undefined
                meta?: { [x: string]: { [x: string]: unknown } } | undefined
                order?:
                  | {
                      amount?: number | undefined
                      billing?:
                        | {
                            address?: string | undefined
                            city?: string | undefined
                            countryCode?: string | undefined
                            paymentMethod?: string | undefined
                            phone?: bigint | undefined
                            postCode?: bigint | undefined
                            region?: string | undefined
                          }
                        | undefined
                      contact_id?: bigint | undefined
                      coupons?: string[] | undefined
                      createdAt?: string | undefined
                      email?: string | undefined
                      id?: string | undefined
                      identifiers?:
                        | {
                            ext_id?: string | undefined
                            loyalty_subscription_id?: string | undefined
                          }
                        | undefined
                      products?:
                        | {
                            category?: string[] | undefined
                            price?: number | undefined
                            productId?: string | undefined
                            quantity?: number | undefined
                            variantId?: string | undefined
                          }[]
                        | undefined
                      status?: string | undefined
                      storeId?: string | undefined
                      updatedAt?: string | undefined
                    }
                  | undefined
                rewardId?: string | undefined
                ttl?: number | undefined
                autoComplete?: boolean | undefined
              }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { pid: string } } & {
              json: {
                attributedRewardId?: string | undefined
                code?: string | undefined
                contactId?: bigint | undefined
                loyaltySubscriptionId?: string | undefined
                meta?: { [x: string]: { [x: string]: unknown } } | undefined
                order?:
                  | {
                      amount?: number | undefined
                      billing?:
                        | {
                            address?: string | undefined
                            city?: string | undefined
                            countryCode?: string | undefined
                            paymentMethod?: string | undefined
                            phone?: bigint | undefined
                            postCode?: bigint | undefined
                            region?: string | undefined
                          }
                        | undefined
                      contact_id?: bigint | undefined
                      coupons?: string[] | undefined
                      createdAt?: string | undefined
                      email?: string | undefined
                      id?: string | undefined
                      identifiers?:
                        | {
                            ext_id?: string | undefined
                            loyalty_subscription_id?: string | undefined
                          }
                        | undefined
                      products?:
                        | {
                            category?: string[] | undefined
                            price?: number | undefined
                            productId?: string | undefined
                            quantity?: number | undefined
                            variantId?: string | undefined
                          }[]
                        | undefined
                      status?: string | undefined
                      storeId?: string | undefined
                      updatedAt?: string | undefined
                    }
                  | undefined
                rewardId?: string | undefined
                ttl?: number | undefined
                autoComplete?: boolean | undefined
              }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { pid: string } } & {
              json: {
                attributedRewardId?: string | undefined
                code?: string | undefined
                contactId?: bigint | undefined
                loyaltySubscriptionId?: string | undefined
                meta?: { [x: string]: { [x: string]: unknown } } | undefined
                order?:
                  | {
                      amount?: number | undefined
                      billing?:
                        | {
                            address?: string | undefined
                            city?: string | undefined
                            countryCode?: string | undefined
                            paymentMethod?: string | undefined
                            phone?: bigint | undefined
                            postCode?: bigint | undefined
                            region?: string | undefined
                          }
                        | undefined
                      contact_id?: bigint | undefined
                      coupons?: string[] | undefined
                      createdAt?: string | undefined
                      email?: string | undefined
                      id?: string | undefined
                      identifiers?:
                        | {
                            ext_id?: string | undefined
                            loyalty_subscription_id?: string | undefined
                          }
                        | undefined
                      products?:
                        | {
                            category?: string[] | undefined
                            price?: number | undefined
                            productId?: string | undefined
                            quantity?: number | undefined
                            variantId?: string | undefined
                          }[]
                        | undefined
                      status?: string | undefined
                      storeId?: string | undefined
                      updatedAt?: string | undefined
                    }
                  | undefined
                rewardId?: string | undefined
                ttl?: number | undefined
                autoComplete?: boolean | undefined
              }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 412
          }
        | {
            input: { param: { pid: string } } & {
              json: {
                attributedRewardId?: string | undefined
                code?: string | undefined
                contactId?: bigint | undefined
                loyaltySubscriptionId?: string | undefined
                meta?: { [x: string]: { [x: string]: unknown } } | undefined
                order?:
                  | {
                      amount?: number | undefined
                      billing?:
                        | {
                            address?: string | undefined
                            city?: string | undefined
                            countryCode?: string | undefined
                            paymentMethod?: string | undefined
                            phone?: bigint | undefined
                            postCode?: bigint | undefined
                            region?: string | undefined
                          }
                        | undefined
                      contact_id?: bigint | undefined
                      coupons?: string[] | undefined
                      createdAt?: string | undefined
                      email?: string | undefined
                      id?: string | undefined
                      identifiers?:
                        | {
                            ext_id?: string | undefined
                            loyalty_subscription_id?: string | undefined
                          }
                        | undefined
                      products?:
                        | {
                            category?: string[] | undefined
                            price?: number | undefined
                            productId?: string | undefined
                            quantity?: number | undefined
                            variantId?: string | undefined
                          }[]
                        | undefined
                      status?: string | undefined
                      storeId?: string | undefined
                      updatedAt?: string | undefined
                    }
                  | undefined
                rewardId?: string | undefined
                ttl?: number | undefined
                autoComplete?: boolean | undefined
              }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 417
          }
        | {
            input: { param: { pid: string } } & {
              json: {
                attributedRewardId?: string | undefined
                code?: string | undefined
                contactId?: bigint | undefined
                loyaltySubscriptionId?: string | undefined
                meta?: { [x: string]: { [x: string]: unknown } } | undefined
                order?:
                  | {
                      amount?: number | undefined
                      billing?:
                        | {
                            address?: string | undefined
                            city?: string | undefined
                            countryCode?: string | undefined
                            paymentMethod?: string | undefined
                            phone?: bigint | undefined
                            postCode?: bigint | undefined
                            region?: string | undefined
                          }
                        | undefined
                      contact_id?: bigint | undefined
                      coupons?: string[] | undefined
                      createdAt?: string | undefined
                      email?: string | undefined
                      id?: string | undefined
                      identifiers?:
                        | {
                            ext_id?: string | undefined
                            loyalty_subscription_id?: string | undefined
                          }
                        | undefined
                      products?:
                        | {
                            category?: string[] | undefined
                            price?: number | undefined
                            productId?: string | undefined
                            quantity?: number | undefined
                            variantId?: string | undefined
                          }[]
                        | undefined
                      status?: string | undefined
                      storeId?: string | undefined
                      updatedAt?: string | undefined
                    }
                  | undefined
                rewardId?: string | undefined
                ttl?: number | undefined
                autoComplete?: boolean | undefined
              }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { pid: string } } & {
              json: {
                attributedRewardId?: string | undefined
                code?: string | undefined
                contactId?: bigint | undefined
                loyaltySubscriptionId?: string | undefined
                meta?: { [x: string]: { [x: string]: unknown } } | undefined
                order?:
                  | {
                      amount?: number | undefined
                      billing?:
                        | {
                            address?: string | undefined
                            city?: string | undefined
                            countryCode?: string | undefined
                            paymentMethod?: string | undefined
                            phone?: bigint | undefined
                            postCode?: bigint | undefined
                            region?: string | undefined
                          }
                        | undefined
                      contact_id?: bigint | undefined
                      coupons?: string[] | undefined
                      createdAt?: string | undefined
                      email?: string | undefined
                      id?: string | undefined
                      identifiers?:
                        | {
                            ext_id?: string | undefined
                            loyalty_subscription_id?: string | undefined
                          }
                        | undefined
                      products?:
                        | {
                            category?: string[] | undefined
                            price?: number | undefined
                            productId?: string | undefined
                            quantity?: number | undefined
                            variantId?: string | undefined
                          }[]
                        | undefined
                      status?: string | undefined
                      storeId?: string | undefined
                      updatedAt?: string | undefined
                    }
                  | undefined
                rewardId?: string | undefined
                ttl?: number | undefined
                autoComplete?: boolean | undefined
              }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/loyalty/offer/programs/:pid/rewards/redeem/:tid/complete': {
      $post:
        | {
            input: { param: { pid: string; tid: string } }
            output: Redeem
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { pid: string; tid: string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { pid: string; tid: string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { pid: string; tid: string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { pid: string; tid: string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { pid: string; tid: string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 412
          }
        | {
            input: { param: { pid: string; tid: string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 417
          }
        | {
            input: { param: { pid: string; tid: string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { pid: string; tid: string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/loyalty/offer/programs/:pid/rewards/revoke': {
      $delete:
        | {
            input: { param: { pid: string } } & {
              query: { attributedRewardIds?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { pid: string } } & {
              query: { attributedRewardIds?: string | undefined }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { pid: string } } & {
              query: { attributedRewardIds?: string | undefined }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/loyalty/offer/programs/:pid/rewards/validate': {
      $post:
        | {
            input: { param: { pid: string } } & {
              json: {
                attributedRewardId?: string | undefined
                code?: string | undefined
                contactId?: bigint | undefined
                loyaltySubscriptionId?: string | undefined
                pointOfSellId?: string | undefined
                rewardId?: string | undefined
              }
            }
            output: { authorize?: boolean | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { pid: string } } & {
              json: {
                attributedRewardId?: string | undefined
                code?: string | undefined
                contactId?: bigint | undefined
                loyaltySubscriptionId?: string | undefined
                pointOfSellId?: string | undefined
                rewardId?: string | undefined
              }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { pid: string } } & {
              json: {
                attributedRewardId?: string | undefined
                code?: string | undefined
                contactId?: bigint | undefined
                loyaltySubscriptionId?: string | undefined
                pointOfSellId?: string | undefined
                rewardId?: string | undefined
              }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { pid: string } } & {
              json: {
                attributedRewardId?: string | undefined
                code?: string | undefined
                contactId?: bigint | undefined
                loyaltySubscriptionId?: string | undefined
                pointOfSellId?: string | undefined
                rewardId?: string | undefined
              }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { pid: string } } & {
              json: {
                attributedRewardId?: string | undefined
                code?: string | undefined
                contactId?: bigint | undefined
                loyaltySubscriptionId?: string | undefined
                pointOfSellId?: string | undefined
                rewardId?: string | undefined
              }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { pid: string } } & {
              json: {
                attributedRewardId?: string | undefined
                code?: string | undefined
                contactId?: bigint | undefined
                loyaltySubscriptionId?: string | undefined
                pointOfSellId?: string | undefined
                rewardId?: string | undefined
              }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 424
          }
        | {
            input: { param: { pid: string } } & {
              json: {
                attributedRewardId?: string | undefined
                code?: string | undefined
                contactId?: bigint | undefined
                loyaltySubscriptionId?: string | undefined
                pointOfSellId?: string | undefined
                rewardId?: string | undefined
              }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/loyalty/offer/programs/:pid/rewards/:rid': {
      $get:
        | {
            input: { param: { pid: string; rid: string } } & {
              query: { version?: 'active' | 'draft' | undefined }
            }
            output: {
              attributionPerConsumer?: number | undefined
              balanceDefinitionId?: string | undefined
              code?: string | undefined
              codeCount?: bigint | undefined
              codeGeneratorId?: string | undefined
              codePoolId?: string | undefined
              config?: string | undefined
              createdAt?: string | undefined
              disabledAt?: string | undefined
              endDate?: string | undefined
              expirationDate?: string | undefined
              expirationModifier?: 'startOfPeriod' | 'endOfPeriod' | 'noModification' | undefined
              expirationUnit?: string | undefined
              expirationValue?: number | undefined
              generator?:
                | {
                    createdAt?: string | undefined
                    description?: string | undefined
                    id?: string | undefined
                    name?: string | undefined
                    pattern?: string | undefined
                    updatedAt?: string | undefined
                  }
                | undefined
              id?: string | undefined
              limits?:
                | {
                    createdAt?: string | undefined
                    durationUnit?: string | undefined
                    durationValue?: number | undefined
                    limitValue?: number | undefined
                    rewardLimitId?: string | undefined
                    slidingSchedule?: boolean | undefined
                    type?: string | undefined
                    updatedAt?: string | undefined
                  }[]
                | undefined
              loyaltyProgramId?: string | undefined
              meta?: { [x: string]: { [x: string]: unknown } } | undefined
              name?: string | undefined
              products?:
                | {
                    createdAt?: string | undefined
                    imageRef?: string | undefined
                    productId?: string | undefined
                    value?: string | undefined
                  }[]
                | undefined
              publicDescription?: string | undefined
              publicImage?: string | undefined
              publicName?: string | undefined
              redeemPerConsumer?: number | undefined
              redeemRules?: string[] | undefined
              rewardConfigs?:
                | {
                    attribution?: string | undefined
                    code?: string | undefined
                    value?: string | undefined
                  }
                | undefined
              rule?:
                | {
                    condition?:
                      | {
                          and?: RuleConditionResponse[] | undefined
                          lhs?:
                            | {
                                array?: ValueResponse[] | undefined
                                boolean?: boolean | undefined
                                contactProperty?: string | undefined
                                date?: string | undefined
                                eventProperty?: string | undefined
                                expression?:
                                  | {
                                      args?: NodeResponse[] | undefined
                                      array?: NodeResponse[] | undefined
                                      boolean?: boolean | undefined
                                      description?: string | undefined
                                      float?: number | undefined
                                      int?: bigint | undefined
                                      op?: string | undefined
                                      string?: string | undefined
                                    }
                                  | undefined
                                number?: number | undefined
                                string?: string | undefined
                              }
                            | undefined
                          op?: string | undefined
                          or?: RuleConditionResponse[] | undefined
                          rhs?:
                            | {
                                array?: ValueResponse[] | undefined
                                boolean?: boolean | undefined
                                contactProperty?: string | undefined
                                date?: string | undefined
                                eventProperty?: string | undefined
                                expression?:
                                  | {
                                      args?: NodeResponse[] | undefined
                                      array?: NodeResponse[] | undefined
                                      boolean?: boolean | undefined
                                      description?: string | undefined
                                      float?: number | undefined
                                      int?: bigint | undefined
                                      op?: string | undefined
                                      string?: string | undefined
                                    }
                                  | undefined
                                number?: number | undefined
                                string?: string | undefined
                              }
                            | undefined
                        }
                      | undefined
                    createdAt?: string | undefined
                    description?: string | undefined
                    event?: { name?: string | undefined; source?: string | undefined } | undefined
                    isInternal?: boolean | undefined
                    loyaltyProgramId?: string | undefined
                    loyaltyVersionId?: number | undefined
                    meta?: { [x: string]: unknown } | undefined
                    name?: string | undefined
                    results?:
                      | {
                          action?: string | undefined
                          parameters?:
                            | {
                                name?: string | undefined
                                value?:
                                  | {
                                      array?: ValueResponse[] | undefined
                                      boolean?: boolean | undefined
                                      contactProperty?: string | undefined
                                      date?: string | undefined
                                      eventProperty?: string | undefined
                                      expression?:
                                        | {
                                            args?: NodeResponse[] | undefined
                                            array?: NodeResponse[] | undefined
                                            boolean?: boolean | undefined
                                            description?: string | undefined
                                            float?: number | undefined
                                            int?: bigint | undefined
                                            op?: string | undefined
                                            string?: string | undefined
                                          }
                                        | undefined
                                      number?: number | undefined
                                      string?: string | undefined
                                    }
                                  | undefined
                              }[]
                            | undefined
                          service?: string | undefined
                        }[]
                      | undefined
                    ruleId?: string | undefined
                    ruleType?: string | undefined
                    updatedAt?: string | undefined
                  }
                | undefined
              startDate?: string | undefined
              subtractBalanceDefinitionId?: string | undefined
              subtractBalanceStrategy?: string | undefined
              subtractBalanceValue?: number | undefined
              subtractTotalBalance?: boolean | undefined
              totalAttribution?: number | undefined
              totalRedeem?: number | undefined
              triggerId?: string | undefined
              unit?: string | undefined
              updatedAt?: string | undefined
              value?: number | undefined
              valueType?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { pid: string; rid: string } } & {
              query: { version?: 'active' | 'draft' | undefined }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { pid: string; rid: string } } & {
              query: { version?: 'active' | 'draft' | undefined }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { pid: string; rid: string } } & {
              query: { version?: 'active' | 'draft' | undefined }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { pid: string; rid: string } } & {
              query: { version?: 'active' | 'draft' | undefined }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { pid: string; rid: string } } & {
              query: { version?: 'active' | 'draft' | undefined }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 424
          }
        | {
            input: { param: { pid: string; rid: string } } & {
              query: { version?: 'active' | 'draft' | undefined }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/loyalty/offer/programs/:pid/vouchers': {
      $get:
        | {
            input: { param: { pid: string } } & {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                sort?: 'asc' | 'desc' | undefined
                sortField?: 'updatedAt' | 'createdAt' | undefined
                contactId: number
                metadata_key_value?: string | undefined
                rewardId?: string | undefined
              }
            }
            output: {
              contactId?: bigint | undefined
              contactRewards?:
                | {
                    code?: string | undefined
                    consumedAt?: string | undefined
                    createdAt?: string | undefined
                    expirationDate?: string | undefined
                    id?: string | undefined
                    meta?: { [x: string]: { [x: string]: unknown } } | undefined
                    rewardId?: string | undefined
                    unit?: string | undefined
                    updatedAt?: string | undefined
                    value?: number | undefined
                    validFrom?: string | undefined
                  }[]
                | undefined
              count?: number | undefined
              loyaltyProgramId?: string | undefined
              loyaltySubscriptionId?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { pid: string } } & {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                sort?: 'asc' | 'desc' | undefined
                sortField?: 'updatedAt' | 'createdAt' | undefined
                contactId: number
                metadata_key_value?: string | undefined
                rewardId?: string | undefined
              }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { pid: string } } & {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                sort?: 'asc' | 'desc' | undefined
                sortField?: 'updatedAt' | 'createdAt' | undefined
                contactId: number
                metadata_key_value?: string | undefined
                rewardId?: string | undefined
              }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { pid: string } } & {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                sort?: 'asc' | 'desc' | undefined
                sortField?: 'updatedAt' | 'createdAt' | undefined
                contactId: number
                metadata_key_value?: string | undefined
                rewardId?: string | undefined
              }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { pid: string } } & {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                sort?: 'asc' | 'desc' | undefined
                sortField?: 'updatedAt' | 'createdAt' | undefined
                contactId: number
                metadata_key_value?: string | undefined
                rewardId?: string | undefined
              }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { pid: string } } & {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                sort?: 'asc' | 'desc' | undefined
                sortField?: 'updatedAt' | 'createdAt' | undefined
                contactId: number
                metadata_key_value?: string | undefined
                rewardId?: string | undefined
              }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/loyalty/tier/programs/:pid/contacts/:cid/tiers/:tid': {
      $post:
        | {
            input: { param: { pid: string; cid: string; tid: string } }
            output: {
              contactId?: number | undefined
              createdAt?: string | undefined
              groupId?: string | undefined
              id?: string | undefined
              loyaltyProgramId?: string | undefined
              meta?: { [x: string]: { [x: string]: unknown } } | undefined
              updatedAt?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { pid: string; cid: string; tid: string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { pid: string; cid: string; tid: string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { pid: string; cid: string; tid: string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { pid: string; cid: string; tid: string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { pid: string; cid: string; tid: string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { pid: string; cid: string; tid: string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 424
          }
        | {
            input: { param: { pid: string; cid: string; tid: string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/loyalty/tier/programs/:pid/tier-groups': {
      $get:
        | {
            input: { param: { pid: string } } & {
              query: { version?: 'active' | 'draft' | undefined }
            }
            output: { items?: TierGroup[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { pid: string } } & {
              query: { version?: 'active' | 'draft' | undefined }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { pid: string } } & {
              query: { version?: 'active' | 'draft' | undefined }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { pid: string } } & {
              query: { version?: 'active' | 'draft' | undefined }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { pid: string } } & {
              query: { version?: 'active' | 'draft' | undefined }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { pid: string } } & {
              query: { version?: 'active' | 'draft' | undefined }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { param: { pid: string } } & {
              json: {
                downgradeStrategy?:
                  | 'real_time'
                  | 'membership_anniversary'
                  | 'tier_anniversary'
                  | undefined
                name: string
                meta?: { isInternal?: boolean | undefined } | undefined
                tierOrder?: string[] | undefined
                upgradeStrategy?:
                  | 'real_time'
                  | 'membership_anniversary'
                  | 'tier_anniversary'
                  | undefined
                upgradeSchedule?:
                  | {
                      durationValue?: number | undefined
                      durationUnit?: 'day' | 'week' | 'month' | 'year' | undefined
                      durationModifier?: 'start_of_period' | 'end_of_period' | undefined
                      scheduledDate?: string | undefined
                    }
                  | undefined
                downgradeSchedule?:
                  | {
                      durationValue?: number | undefined
                      durationUnit?: 'day' | 'week' | 'month' | 'year' | undefined
                      durationModifier?: 'start_of_period' | 'end_of_period' | undefined
                      scheduledDate?: string | undefined
                    }
                  | undefined
              }
            }
            output: TierGroup
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { pid: string } } & {
              json: {
                downgradeStrategy?:
                  | 'real_time'
                  | 'membership_anniversary'
                  | 'tier_anniversary'
                  | undefined
                name: string
                meta?: { isInternal?: boolean | undefined } | undefined
                tierOrder?: string[] | undefined
                upgradeStrategy?:
                  | 'real_time'
                  | 'membership_anniversary'
                  | 'tier_anniversary'
                  | undefined
                upgradeSchedule?:
                  | {
                      durationValue?: number | undefined
                      durationUnit?: 'day' | 'week' | 'month' | 'year' | undefined
                      durationModifier?: 'start_of_period' | 'end_of_period' | undefined
                      scheduledDate?: string | undefined
                    }
                  | undefined
                downgradeSchedule?:
                  | {
                      durationValue?: number | undefined
                      durationUnit?: 'day' | 'week' | 'month' | 'year' | undefined
                      durationModifier?: 'start_of_period' | 'end_of_period' | undefined
                      scheduledDate?: string | undefined
                    }
                  | undefined
              }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { pid: string } } & {
              json: {
                downgradeStrategy?:
                  | 'real_time'
                  | 'membership_anniversary'
                  | 'tier_anniversary'
                  | undefined
                name: string
                meta?: { isInternal?: boolean | undefined } | undefined
                tierOrder?: string[] | undefined
                upgradeStrategy?:
                  | 'real_time'
                  | 'membership_anniversary'
                  | 'tier_anniversary'
                  | undefined
                upgradeSchedule?:
                  | {
                      durationValue?: number | undefined
                      durationUnit?: 'day' | 'week' | 'month' | 'year' | undefined
                      durationModifier?: 'start_of_period' | 'end_of_period' | undefined
                      scheduledDate?: string | undefined
                    }
                  | undefined
                downgradeSchedule?:
                  | {
                      durationValue?: number | undefined
                      durationUnit?: 'day' | 'week' | 'month' | 'year' | undefined
                      durationModifier?: 'start_of_period' | 'end_of_period' | undefined
                      scheduledDate?: string | undefined
                    }
                  | undefined
              }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { pid: string } } & {
              json: {
                downgradeStrategy?:
                  | 'real_time'
                  | 'membership_anniversary'
                  | 'tier_anniversary'
                  | undefined
                name: string
                meta?: { isInternal?: boolean | undefined } | undefined
                tierOrder?: string[] | undefined
                upgradeStrategy?:
                  | 'real_time'
                  | 'membership_anniversary'
                  | 'tier_anniversary'
                  | undefined
                upgradeSchedule?:
                  | {
                      durationValue?: number | undefined
                      durationUnit?: 'day' | 'week' | 'month' | 'year' | undefined
                      durationModifier?: 'start_of_period' | 'end_of_period' | undefined
                      scheduledDate?: string | undefined
                    }
                  | undefined
                downgradeSchedule?:
                  | {
                      durationValue?: number | undefined
                      durationUnit?: 'day' | 'week' | 'month' | 'year' | undefined
                      durationModifier?: 'start_of_period' | 'end_of_period' | undefined
                      scheduledDate?: string | undefined
                    }
                  | undefined
              }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { pid: string } } & {
              json: {
                downgradeStrategy?:
                  | 'real_time'
                  | 'membership_anniversary'
                  | 'tier_anniversary'
                  | undefined
                name: string
                meta?: { isInternal?: boolean | undefined } | undefined
                tierOrder?: string[] | undefined
                upgradeStrategy?:
                  | 'real_time'
                  | 'membership_anniversary'
                  | 'tier_anniversary'
                  | undefined
                upgradeSchedule?:
                  | {
                      durationValue?: number | undefined
                      durationUnit?: 'day' | 'week' | 'month' | 'year' | undefined
                      durationModifier?: 'start_of_period' | 'end_of_period' | undefined
                      scheduledDate?: string | undefined
                    }
                  | undefined
                downgradeSchedule?:
                  | {
                      durationValue?: number | undefined
                      durationUnit?: 'day' | 'week' | 'month' | 'year' | undefined
                      durationModifier?: 'start_of_period' | 'end_of_period' | undefined
                      scheduledDate?: string | undefined
                    }
                  | undefined
              }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { pid: string } } & {
              json: {
                downgradeStrategy?:
                  | 'real_time'
                  | 'membership_anniversary'
                  | 'tier_anniversary'
                  | undefined
                name: string
                meta?: { isInternal?: boolean | undefined } | undefined
                tierOrder?: string[] | undefined
                upgradeStrategy?:
                  | 'real_time'
                  | 'membership_anniversary'
                  | 'tier_anniversary'
                  | undefined
                upgradeSchedule?:
                  | {
                      durationValue?: number | undefined
                      durationUnit?: 'day' | 'week' | 'month' | 'year' | undefined
                      durationModifier?: 'start_of_period' | 'end_of_period' | undefined
                      scheduledDate?: string | undefined
                    }
                  | undefined
                downgradeSchedule?:
                  | {
                      durationValue?: number | undefined
                      durationUnit?: 'day' | 'week' | 'month' | 'year' | undefined
                      durationModifier?: 'start_of_period' | 'end_of_period' | undefined
                      scheduledDate?: string | undefined
                    }
                  | undefined
              }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { pid: string } } & {
              json: {
                downgradeStrategy?:
                  | 'real_time'
                  | 'membership_anniversary'
                  | 'tier_anniversary'
                  | undefined
                name: string
                meta?: { isInternal?: boolean | undefined } | undefined
                tierOrder?: string[] | undefined
                upgradeStrategy?:
                  | 'real_time'
                  | 'membership_anniversary'
                  | 'tier_anniversary'
                  | undefined
                upgradeSchedule?:
                  | {
                      durationValue?: number | undefined
                      durationUnit?: 'day' | 'week' | 'month' | 'year' | undefined
                      durationModifier?: 'start_of_period' | 'end_of_period' | undefined
                      scheduledDate?: string | undefined
                    }
                  | undefined
                downgradeSchedule?:
                  | {
                      durationValue?: number | undefined
                      durationUnit?: 'day' | 'week' | 'month' | 'year' | undefined
                      durationModifier?: 'start_of_period' | 'end_of_period' | undefined
                      scheduledDate?: string | undefined
                    }
                  | undefined
              }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/loyalty/tier/programs/:pid/tier-groups/:gid': {
      $delete:
        | {
            input: { param: { pid: string; gid: string } }
            output: string
            outputFormat: 'json'
            status: 204
          }
        | {
            input: { param: { pid: string; gid: string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { pid: string; gid: string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { pid: string; gid: string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { pid: string; gid: string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { pid: string; gid: string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { pid: string; gid: string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
      $get:
        | {
            input: { param: { pid: string; gid: string } } & {
              query: { version?: 'active' | 'draft' | undefined }
            }
            output: TierGroup
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { pid: string; gid: string } } & {
              query: { version?: 'active' | 'draft' | undefined }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { pid: string; gid: string } } & {
              query: { version?: 'active' | 'draft' | undefined }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { pid: string; gid: string } } & {
              query: { version?: 'active' | 'draft' | undefined }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { pid: string; gid: string } } & {
              query: { version?: 'active' | 'draft' | undefined }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { pid: string; gid: string } } & {
              query: { version?: 'active' | 'draft' | undefined }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
      $put:
        | {
            input: { param: { pid: string; gid: string } } & {
              json: {
                downgradeStrategy: 'real_time' | 'membership_anniversary' | 'tier_anniversary'
                name: string
                meta?: { isInternal?: boolean | undefined } | undefined
                tierOrder: string[]
                upgradeStrategy: 'real_time' | 'membership_anniversary' | 'tier_anniversary'
              }
            }
            output: TierGroup
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { pid: string; gid: string } } & {
              json: {
                downgradeStrategy: 'real_time' | 'membership_anniversary' | 'tier_anniversary'
                name: string
                meta?: { isInternal?: boolean | undefined } | undefined
                tierOrder: string[]
                upgradeStrategy: 'real_time' | 'membership_anniversary' | 'tier_anniversary'
              }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { pid: string; gid: string } } & {
              json: {
                downgradeStrategy: 'real_time' | 'membership_anniversary' | 'tier_anniversary'
                name: string
                meta?: { isInternal?: boolean | undefined } | undefined
                tierOrder: string[]
                upgradeStrategy: 'real_time' | 'membership_anniversary' | 'tier_anniversary'
              }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { pid: string; gid: string } } & {
              json: {
                downgradeStrategy: 'real_time' | 'membership_anniversary' | 'tier_anniversary'
                name: string
                meta?: { isInternal?: boolean | undefined } | undefined
                tierOrder: string[]
                upgradeStrategy: 'real_time' | 'membership_anniversary' | 'tier_anniversary'
              }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { pid: string; gid: string } } & {
              json: {
                downgradeStrategy: 'real_time' | 'membership_anniversary' | 'tier_anniversary'
                name: string
                meta?: { isInternal?: boolean | undefined } | undefined
                tierOrder: string[]
                upgradeStrategy: 'real_time' | 'membership_anniversary' | 'tier_anniversary'
              }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { pid: string; gid: string } } & {
              json: {
                downgradeStrategy: 'real_time' | 'membership_anniversary' | 'tier_anniversary'
                name: string
                meta?: { isInternal?: boolean | undefined } | undefined
                tierOrder: string[]
                upgradeStrategy: 'real_time' | 'membership_anniversary' | 'tier_anniversary'
              }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/loyalty/tier/programs/:pid/tier-groups/:gid/tiers': {
      $post:
        | {
            input: { param: { pid: string; gid: string } } & {
              json: {
                accessConditions: {
                  balanceDefinitionId?: string | undefined
                  minimumValue?: number | undefined
                }[]
                imageRef?: string | undefined
                name: string
                tierRewards?: { rewardId?: string | undefined }[] | undefined
              }
            }
            output: Tier
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { pid: string; gid: string } } & {
              json: {
                accessConditions: {
                  balanceDefinitionId?: string | undefined
                  minimumValue?: number | undefined
                }[]
                imageRef?: string | undefined
                name: string
                tierRewards?: { rewardId?: string | undefined }[] | undefined
              }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { pid: string; gid: string } } & {
              json: {
                accessConditions: {
                  balanceDefinitionId?: string | undefined
                  minimumValue?: number | undefined
                }[]
                imageRef?: string | undefined
                name: string
                tierRewards?: { rewardId?: string | undefined }[] | undefined
              }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { pid: string; gid: string } } & {
              json: {
                accessConditions: {
                  balanceDefinitionId?: string | undefined
                  minimumValue?: number | undefined
                }[]
                imageRef?: string | undefined
                name: string
                tierRewards?: { rewardId?: string | undefined }[] | undefined
              }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { pid: string; gid: string } } & {
              json: {
                accessConditions: {
                  balanceDefinitionId?: string | undefined
                  minimumValue?: number | undefined
                }[]
                imageRef?: string | undefined
                name: string
                tierRewards?: { rewardId?: string | undefined }[] | undefined
              }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { pid: string; gid: string } } & {
              json: {
                accessConditions: {
                  balanceDefinitionId?: string | undefined
                  minimumValue?: number | undefined
                }[]
                imageRef?: string | undefined
                name: string
                tierRewards?: { rewardId?: string | undefined }[] | undefined
              }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/loyalty/tier/programs/:pid/tiers': {
      $get:
        | {
            input: { param: { pid: string } } & {
              query: { version?: 'active' | 'draft' | undefined }
            }
            output: { items?: Tier[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { pid: string } } & {
              query: { version?: 'active' | 'draft' | undefined }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { pid: string } } & {
              query: { version?: 'active' | 'draft' | undefined }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { pid: string } } & {
              query: { version?: 'active' | 'draft' | undefined }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { pid: string } } & {
              query: { version?: 'active' | 'draft' | undefined }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { pid: string } } & {
              query: { version?: 'active' | 'draft' | undefined }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/loyalty/tier/programs/:pid/tiers/:tid': {
      $delete:
        | {
            input: { param: { pid: string; tid: string } }
            output: string
            outputFormat: 'json'
            status: 204
          }
        | {
            input: { param: { pid: string; tid: string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { pid: string; tid: string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { pid: string; tid: string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { pid: string; tid: string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { pid: string; tid: string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
      $put:
        | {
            input: { param: { pid: string; tid: string } } & {
              json: {
                accessConditions: {
                  balanceDefinitionId?: string | undefined
                  minimumValue?: number | undefined
                }[]
                imageRef?: string | undefined
                name: string
                tierRewards: { rewardId?: string | undefined }[]
              }
            }
            output: Tier
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { pid: string; tid: string } } & {
              json: {
                accessConditions: {
                  balanceDefinitionId?: string | undefined
                  minimumValue?: number | undefined
                }[]
                imageRef?: string | undefined
                name: string
                tierRewards: { rewardId?: string | undefined }[]
              }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { pid: string; tid: string } } & {
              json: {
                accessConditions: {
                  balanceDefinitionId?: string | undefined
                  minimumValue?: number | undefined
                }[]
                imageRef?: string | undefined
                name: string
                tierRewards: { rewardId?: string | undefined }[]
              }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { pid: string; tid: string } } & {
              json: {
                accessConditions: {
                  balanceDefinitionId?: string | undefined
                  minimumValue?: number | undefined
                }[]
                imageRef?: string | undefined
                name: string
                tierRewards: { rewardId?: string | undefined }[]
              }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { pid: string; tid: string } } & {
              json: {
                accessConditions: {
                  balanceDefinitionId?: string | undefined
                  minimumValue?: number | undefined
                }[]
                imageRef?: string | undefined
                name: string
                tierRewards: { rewardId?: string | undefined }[]
              }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { pid: string; tid: string } } & {
              json: {
                accessConditions: {
                  balanceDefinitionId?: string | undefined
                  minimumValue?: number | undefined
                }[]
                imageRef?: string | undefined
                name: string
                tierRewards: { rewardId?: string | undefined }[]
              }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/wallet/passes/:passId/installUrl/:contactId': {
      $get:
        | {
            input: { param: { passId: string; contactId: string } } & {
              query: { byExtId?: boolean | undefined }
            }
            output: WalletPassInstallUrl
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { passId: string; contactId: string } } & {
              query: { byExtId?: boolean | undefined }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { passId: string; contactId: string } } & {
              query: { byExtId?: boolean | undefined }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { passId: string; contactId: string } } & {
              query: { byExtId?: boolean | undefined }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { passId: string; contactId: string } } & {
              query: { byExtId?: boolean | undefined }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { passId: string; contactId: string } } & {
              query: { byExtId?: boolean | undefined }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { passId: string; contactId: string } } & {
              query: { byExtId?: boolean | undefined }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { passId: string; contactId: string } } & {
              query: { byExtId?: boolean | undefined }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/wallet/passes/:installationId/redeem': {
      $post:
        | {
            input: { param: { installationId: string } } & { json: WalletPassRedeemRequest }
            output: WalletPassRedeemResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { installationId: string } } & { json: WalletPassRedeemRequest }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { installationId: string } } & { json: WalletPassRedeemRequest }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { installationId: string } } & { json: WalletPassRedeemRequest }
            output: ErrorModel
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { installationId: string } } & { json: WalletPassRedeemRequest }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { installationId: string } } & { json: WalletPassRedeemRequest }
            output: ErrorModel
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { installationId: string } } & { json: WalletPassRedeemRequest }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/emailCampaigns': {
      $get:
        | {
            input: {
              query: {
                type?: 'classic' | 'trigger' | undefined
                status?:
                  | 'suspended'
                  | 'archive'
                  | 'sent'
                  | 'queued'
                  | 'draft'
                  | 'inProcess'
                  | 'inReview'
                  | 'cancelling'
                  | 'cancelled'
                  | undefined
                statistics?: 'globalStats' | 'linksStats' | 'statsByDomain' | undefined
                startDate?: string | undefined
                endDate?: string | undefined
                limit?: bigint | undefined
                offset?: bigint | undefined
                sort?: 'asc' | 'desc' | undefined
                excludeHtmlContent?: true | false | undefined
                excludePdfAttachment?: true | false | undefined
              }
            }
            output: {
              campaigns?:
                | {
                    attachmentFile?: string | undefined
                    abTesting?: boolean | undefined
                    id: bigint
                    name: string
                    previewText?: string | undefined
                    scheduledAt?: string | undefined
                    sendAtBestTime?: boolean | undefined
                    splitRule?: number | undefined
                    status:
                      | 'draft'
                      | 'sent'
                      | 'archive'
                      | 'queued'
                      | 'suspended'
                      | 'in_process'
                      | 'in_review'
                      | 'cancelling'
                      | 'cancelled'
                    subject?: string | undefined
                    subjectA?: string | undefined
                    subjectB?: string | undefined
                    type: 'classic' | 'trigger'
                    winnerCriteria?: string | undefined
                    winnerDelay?: number | undefined
                    attachmentUrl?: string | undefined
                    createdAt: string
                    emailExpirationDate?:
                      | {
                          duration?: bigint | undefined
                          unit?: 'days' | 'weeks' | 'months' | undefined
                        }
                      | undefined
                    footer: string
                    header: string
                    htmlContent: string
                    inlineImageActivation?: boolean | undefined
                    mirrorActive?: boolean | undefined
                    modifiedAt: string
                    recurring?: boolean | undefined
                    replyTo: string
                    returnBounce?: bigint | undefined
                    sender: {
                      email?: string | undefined
                      id?: bigint | undefined
                      name?: string | undefined
                    }
                    sentDate?: string | undefined
                    shareLink?: string | undefined
                    tag?: string | undefined
                    tags?: string[] | undefined
                    testSent: boolean
                    toField?: string | undefined
                    utmCampaignValue?: string | undefined
                    utmContent?: string | undefined
                    utmID?: bigint | undefined
                    utmId?: string | undefined
                    utmMedium?: string | undefined
                    utmSource?: string | undefined
                    utmTerm?: string | undefined
                    recipients: {
                      excludedSegments?: bigint[] | undefined
                      exclusionLists: bigint[]
                      lists: bigint[]
                      segments?: bigint[] | undefined
                    }
                    statistics: {
                      campaignStats: {
                        appleMppOpens: bigint
                        clickers: bigint
                        complaints: bigint
                        deferred?: bigint | undefined
                        delivered: bigint
                        estimatedViews?: bigint | undefined
                        hardBounces: bigint
                        listId?: bigint | undefined
                        opensRate: number
                        returnBounce?: bigint | undefined
                        sent: bigint
                        softBounces: bigint
                        trackableViews: bigint
                        trackableViewsRate?: number | undefined
                        uniqueClicks: bigint
                        uniqueViews: bigint
                        unsubscriptions: bigint
                        viewed: bigint
                      }[]
                      globalStats: {
                        appleMppOpens: bigint
                        clickers: bigint
                        complaints: bigint
                        deferred?: bigint | undefined
                        delivered: bigint
                        estimatedViews?: bigint | undefined
                        hardBounces: bigint
                        listId?: bigint | undefined
                        opensRate: number
                        returnBounce?: bigint | undefined
                        sent: bigint
                        softBounces: bigint
                        trackableViews: bigint
                        trackableViewsRate?: number | undefined
                        uniqueClicks: bigint
                        uniqueViews: bigint
                        unsubscriptions: bigint
                        viewed: bigint
                      }
                      linksStats: { [x: string]: bigint }
                      mirrorClick: bigint
                      remaining: bigint
                      statsByBrowser?: { [x: string]: GetDeviceBrowserStats } | undefined
                      statsByDevice?:
                        | {
                            desktop?: { [x: string]: GetDeviceBrowserStats } | undefined
                            mobile?: { [x: string]: GetDeviceBrowserStats } | undefined
                            tablet?: { [x: string]: GetDeviceBrowserStats } | undefined
                            unknown?: { [x: string]: GetDeviceBrowserStats } | undefined
                          }
                        | undefined
                      statsByDomain?: { [x: string]: GetCampaignStats } | undefined
                    }
                  }[]
                | undefined
              count?: bigint | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                type?: 'classic' | 'trigger' | undefined
                status?:
                  | 'suspended'
                  | 'archive'
                  | 'sent'
                  | 'queued'
                  | 'draft'
                  | 'inProcess'
                  | 'inReview'
                  | 'cancelling'
                  | 'cancelled'
                  | undefined
                statistics?: 'globalStats' | 'linksStats' | 'statsByDomain' | undefined
                startDate?: string | undefined
                endDate?: string | undefined
                limit?: bigint | undefined
                offset?: bigint | undefined
                sort?: 'asc' | 'desc' | undefined
                excludeHtmlContent?: true | false | undefined
                excludePdfAttachment?: true | false | undefined
              }
            }
            output: {
              code:
                | 'invalid_parameter'
                | 'missing_parameter'
                | 'out_of_range'
                | 'campaign_processing'
                | 'campaign_sent'
                | 'document_not_found'
                | 'not_enough_credits'
                | 'permission_denied'
                | 'duplicate_parameter'
                | 'duplicate_request'
                | 'method_not_allowed'
                | 'unauthorized'
                | 'account_under_validation'
                | 'not_acceptable'
                | 'bad_request'
                | 'unprocessable_entity'
                | 'Domain does not exist'
                | 'Contact email not found'
                | 'Attribute not found'
                | 'Category id not found'
                | 'Invalid parameters passed'
                | 'Record(s) for identifier not found'
                | 'Returned when query params are invalid'
                | 'Returned when invalid data posted'
                | 'Feed not found'
                | 'Campaign ID not found'
                | 'api-key not found'
                | 'DMARC policy requires domain authentication'
                | 'DNS records not properly configured'
                | 'Invalid OTP code provided'
                | 'OTP code has expired'
                | 'Domain already exists in your account'
                | 'The sum of all IP weights must equal 100'
                | 'Authentication failed'
                | 'Insufficient credits'
                | 'Request already processed'
              message: string
            }
            outputFormat: 'json'
            status: 400
          }
      $post:
        | {
            input: {
              json: {
                abTesting?: boolean | undefined
                attachmentUrl?: string | undefined
                emailExpirationDate?:
                  | {
                      duration?: bigint | undefined
                      unit?: 'days' | 'weeks' | 'months' | undefined
                    }
                  | undefined
                footer?: string | undefined
                header?: string | undefined
                htmlContent?: string | undefined
                htmlUrl?: string | undefined
                increaseRate?: bigint | undefined
                initialQuota?: bigint | undefined
                inlineImageActivation?: boolean | undefined
                ipWarmupEnable?: boolean | undefined
                mirrorActive?: boolean | undefined
                name: string
                params?: { [x: string]: { [x: string]: unknown } } | undefined
                previewText?: string | undefined
                recipients?:
                  | {
                      exclusionListIds?: bigint[] | undefined
                      exclusionSegmentIds?: bigint[] | undefined
                      listIds?: bigint[] | undefined
                      segmentIds?: bigint[] | undefined
                    }
                  | undefined
                replyTo?: string | undefined
                scheduledAt?: string | undefined
                sendAtBestTime?: boolean | undefined
                sender: {
                  email?: string | undefined
                  id?: bigint | undefined
                  name?: string | undefined
                }
                splitRule?: bigint | undefined
                subject?: string | undefined
                subjectA?: string | undefined
                subjectB?: string | undefined
                tag?: string | undefined
                templateId?: bigint | undefined
                toField?: string | undefined
                unsubscriptionPageId?: string | undefined
                updateFormId?: string | undefined
                utmCampaign?: string | undefined
                utmContent?: string | undefined
                utmId?: string | undefined
                utmMedium?: string | undefined
                utmSource?: string | undefined
                utmTerm?: string | undefined
                winnerCriteria?: 'open' | 'click' | undefined
                winnerDelay?: bigint | undefined
              }
            }
            output: { id: bigint }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              json: {
                abTesting?: boolean | undefined
                attachmentUrl?: string | undefined
                emailExpirationDate?:
                  | {
                      duration?: bigint | undefined
                      unit?: 'days' | 'weeks' | 'months' | undefined
                    }
                  | undefined
                footer?: string | undefined
                header?: string | undefined
                htmlContent?: string | undefined
                htmlUrl?: string | undefined
                increaseRate?: bigint | undefined
                initialQuota?: bigint | undefined
                inlineImageActivation?: boolean | undefined
                ipWarmupEnable?: boolean | undefined
                mirrorActive?: boolean | undefined
                name: string
                params?: { [x: string]: { [x: string]: unknown } } | undefined
                previewText?: string | undefined
                recipients?:
                  | {
                      exclusionListIds?: bigint[] | undefined
                      exclusionSegmentIds?: bigint[] | undefined
                      listIds?: bigint[] | undefined
                      segmentIds?: bigint[] | undefined
                    }
                  | undefined
                replyTo?: string | undefined
                scheduledAt?: string | undefined
                sendAtBestTime?: boolean | undefined
                sender: {
                  email?: string | undefined
                  id?: bigint | undefined
                  name?: string | undefined
                }
                splitRule?: bigint | undefined
                subject?: string | undefined
                subjectA?: string | undefined
                subjectB?: string | undefined
                tag?: string | undefined
                templateId?: bigint | undefined
                toField?: string | undefined
                unsubscriptionPageId?: string | undefined
                updateFormId?: string | undefined
                utmCampaign?: string | undefined
                utmContent?: string | undefined
                utmId?: string | undefined
                utmMedium?: string | undefined
                utmSource?: string | undefined
                utmTerm?: string | undefined
                winnerCriteria?: 'open' | 'click' | undefined
                winnerDelay?: bigint | undefined
              }
            }
            output: {
              code:
                | 'invalid_parameter'
                | 'missing_parameter'
                | 'out_of_range'
                | 'campaign_processing'
                | 'campaign_sent'
                | 'document_not_found'
                | 'not_enough_credits'
                | 'permission_denied'
                | 'duplicate_parameter'
                | 'duplicate_request'
                | 'method_not_allowed'
                | 'unauthorized'
                | 'account_under_validation'
                | 'not_acceptable'
                | 'bad_request'
                | 'unprocessable_entity'
                | 'Domain does not exist'
                | 'Contact email not found'
                | 'Attribute not found'
                | 'Category id not found'
                | 'Invalid parameters passed'
                | 'Record(s) for identifier not found'
                | 'Returned when query params are invalid'
                | 'Returned when invalid data posted'
                | 'Feed not found'
                | 'Campaign ID not found'
                | 'api-key not found'
                | 'DMARC policy requires domain authentication'
                | 'DNS records not properly configured'
                | 'Invalid OTP code provided'
                | 'OTP code has expired'
                | 'Domain already exists in your account'
                | 'The sum of all IP weights must equal 100'
                | 'Authentication failed'
                | 'Insufficient credits'
                | 'Request already processed'
              message: string
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: {
                abTesting?: boolean | undefined
                attachmentUrl?: string | undefined
                emailExpirationDate?:
                  | {
                      duration?: bigint | undefined
                      unit?: 'days' | 'weeks' | 'months' | undefined
                    }
                  | undefined
                footer?: string | undefined
                header?: string | undefined
                htmlContent?: string | undefined
                htmlUrl?: string | undefined
                increaseRate?: bigint | undefined
                initialQuota?: bigint | undefined
                inlineImageActivation?: boolean | undefined
                ipWarmupEnable?: boolean | undefined
                mirrorActive?: boolean | undefined
                name: string
                params?: { [x: string]: { [x: string]: unknown } } | undefined
                previewText?: string | undefined
                recipients?:
                  | {
                      exclusionListIds?: bigint[] | undefined
                      exclusionSegmentIds?: bigint[] | undefined
                      listIds?: bigint[] | undefined
                      segmentIds?: bigint[] | undefined
                    }
                  | undefined
                replyTo?: string | undefined
                scheduledAt?: string | undefined
                sendAtBestTime?: boolean | undefined
                sender: {
                  email?: string | undefined
                  id?: bigint | undefined
                  name?: string | undefined
                }
                splitRule?: bigint | undefined
                subject?: string | undefined
                subjectA?: string | undefined
                subjectB?: string | undefined
                tag?: string | undefined
                templateId?: bigint | undefined
                toField?: string | undefined
                unsubscriptionPageId?: string | undefined
                updateFormId?: string | undefined
                utmCampaign?: string | undefined
                utmContent?: string | undefined
                utmId?: string | undefined
                utmMedium?: string | undefined
                utmSource?: string | undefined
                utmTerm?: string | undefined
                winnerCriteria?: 'open' | 'click' | undefined
                winnerDelay?: bigint | undefined
              }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 405
          }
    }
  } & {
    '/emailCampaigns/images': {
      $post:
        | {
            input: { json: { imageUrl: string; name?: string | undefined } }
            output: { url?: string | undefined }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: { imageUrl: string; name?: string | undefined } }
            output: {
              code:
                | 'invalid_parameter'
                | 'missing_parameter'
                | 'out_of_range'
                | 'campaign_processing'
                | 'campaign_sent'
                | 'document_not_found'
                | 'not_enough_credits'
                | 'permission_denied'
                | 'duplicate_parameter'
                | 'duplicate_request'
                | 'method_not_allowed'
                | 'unauthorized'
                | 'account_under_validation'
                | 'not_acceptable'
                | 'bad_request'
                | 'unprocessable_entity'
                | 'Domain does not exist'
                | 'Contact email not found'
                | 'Attribute not found'
                | 'Category id not found'
                | 'Invalid parameters passed'
                | 'Record(s) for identifier not found'
                | 'Returned when query params are invalid'
                | 'Returned when invalid data posted'
                | 'Feed not found'
                | 'Campaign ID not found'
                | 'api-key not found'
                | 'DMARC policy requires domain authentication'
                | 'DNS records not properly configured'
                | 'Invalid OTP code provided'
                | 'OTP code has expired'
                | 'Domain already exists in your account'
                | 'The sum of all IP weights must equal 100'
                | 'Authentication failed'
                | 'Insufficient credits'
                | 'Request already processed'
              message: string
            }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/emailCampaigns/:campaignId': {
      $delete:
        | {
            input: { param: { campaignId: bigint } }
            output: {
              code:
                | 'invalid_parameter'
                | 'missing_parameter'
                | 'out_of_range'
                | 'campaign_processing'
                | 'campaign_sent'
                | 'document_not_found'
                | 'not_enough_credits'
                | 'permission_denied'
                | 'duplicate_parameter'
                | 'duplicate_request'
                | 'method_not_allowed'
                | 'unauthorized'
                | 'account_under_validation'
                | 'not_acceptable'
                | 'bad_request'
                | 'unprocessable_entity'
                | 'Domain does not exist'
                | 'Contact email not found'
                | 'Attribute not found'
                | 'Category id not found'
                | 'Invalid parameters passed'
                | 'Record(s) for identifier not found'
                | 'Returned when query params are invalid'
                | 'Returned when invalid data posted'
                | 'Feed not found'
                | 'Campaign ID not found'
                | 'api-key not found'
                | 'DMARC policy requires domain authentication'
                | 'DNS records not properly configured'
                | 'Invalid OTP code provided'
                | 'OTP code has expired'
                | 'Domain already exists in your account'
                | 'The sum of all IP weights must equal 100'
                | 'Authentication failed'
                | 'Insufficient credits'
                | 'Request already processed'
              message: string
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { campaignId: bigint } }
            output: ErrorModel
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { campaignId: bigint } }
            output: {
              code:
                | 'invalid_parameter'
                | 'missing_parameter'
                | 'out_of_range'
                | 'campaign_processing'
                | 'campaign_sent'
                | 'document_not_found'
                | 'not_enough_credits'
                | 'permission_denied'
                | 'duplicate_parameter'
                | 'duplicate_request'
                | 'method_not_allowed'
                | 'unauthorized'
                | 'account_under_validation'
                | 'not_acceptable'
                | 'bad_request'
                | 'unprocessable_entity'
                | 'Domain does not exist'
                | 'Contact email not found'
                | 'Attribute not found'
                | 'Category id not found'
                | 'Invalid parameters passed'
                | 'Record(s) for identifier not found'
                | 'Returned when query params are invalid'
                | 'Returned when invalid data posted'
                | 'Feed not found'
                | 'Campaign ID not found'
                | 'api-key not found'
                | 'DMARC policy requires domain authentication'
                | 'DNS records not properly configured'
                | 'Invalid OTP code provided'
                | 'OTP code has expired'
                | 'Domain already exists in your account'
                | 'The sum of all IP weights must equal 100'
                | 'Authentication failed'
                | 'Insufficient credits'
                | 'Request already processed'
              message: string
            }
            outputFormat: 'json'
            status: 404
          }
      $get:
        | {
            input: { param: { campaignId: bigint } } & {
              query: {
                statistics?:
                  | 'globalStats'
                  | 'linksStats'
                  | 'statsByDomain'
                  | 'statsByDevice'
                  | 'statsByBrowser'
                  | undefined
                excludeHtmlContent?: true | false | undefined
              }
            }
            output: {
              attachmentFile?: string | undefined
              abTesting?: boolean | undefined
              id: bigint
              name: string
              previewText?: string | undefined
              scheduledAt?: string | undefined
              sendAtBestTime?: boolean | undefined
              splitRule?: number | undefined
              status:
                | 'draft'
                | 'sent'
                | 'archive'
                | 'queued'
                | 'suspended'
                | 'in_process'
                | 'in_review'
                | 'cancelling'
                | 'cancelled'
              subject?: string | undefined
              subjectA?: string | undefined
              subjectB?: string | undefined
              type: 'classic' | 'trigger'
              winnerCriteria?: string | undefined
              winnerDelay?: number | undefined
              attachmentUrl?: string | undefined
              createdAt: string
              emailExpirationDate?:
                | { duration?: bigint | undefined; unit?: 'days' | 'weeks' | 'months' | undefined }
                | undefined
              footer: string
              header: string
              htmlContent: string
              inlineImageActivation?: boolean | undefined
              mirrorActive?: boolean | undefined
              modifiedAt: string
              recurring?: boolean | undefined
              replyTo: string
              returnBounce?: bigint | undefined
              sender: {
                email?: string | undefined
                id?: bigint | undefined
                name?: string | undefined
              }
              sentDate?: string | undefined
              shareLink?: string | undefined
              tag?: string | undefined
              tags?: string[] | undefined
              testSent: boolean
              toField?: string | undefined
              utmCampaignValue?: string | undefined
              utmContent?: string | undefined
              utmID?: bigint | undefined
              utmId?: string | undefined
              utmMedium?: string | undefined
              utmSource?: string | undefined
              utmTerm?: string | undefined
              recipients: {
                excludedSegments?: bigint[] | undefined
                exclusionLists: bigint[]
                lists: bigint[]
                segments?: bigint[] | undefined
              }
              statistics: {
                campaignStats: {
                  appleMppOpens: bigint
                  clickers: bigint
                  complaints: bigint
                  deferred?: bigint | undefined
                  delivered: bigint
                  estimatedViews?: bigint | undefined
                  hardBounces: bigint
                  listId?: bigint | undefined
                  opensRate: number
                  returnBounce?: bigint | undefined
                  sent: bigint
                  softBounces: bigint
                  trackableViews: bigint
                  trackableViewsRate?: number | undefined
                  uniqueClicks: bigint
                  uniqueViews: bigint
                  unsubscriptions: bigint
                  viewed: bigint
                }[]
                globalStats: {
                  appleMppOpens: bigint
                  clickers: bigint
                  complaints: bigint
                  deferred?: bigint | undefined
                  delivered: bigint
                  estimatedViews?: bigint | undefined
                  hardBounces: bigint
                  listId?: bigint | undefined
                  opensRate: number
                  returnBounce?: bigint | undefined
                  sent: bigint
                  softBounces: bigint
                  trackableViews: bigint
                  trackableViewsRate?: number | undefined
                  uniqueClicks: bigint
                  uniqueViews: bigint
                  unsubscriptions: bigint
                  viewed: bigint
                }
                linksStats: { [x: string]: bigint }
                mirrorClick: bigint
                remaining: bigint
                statsByBrowser?: { [x: string]: GetDeviceBrowserStats } | undefined
                statsByDevice?:
                  | {
                      desktop?: { [x: string]: GetDeviceBrowserStats } | undefined
                      mobile?: { [x: string]: GetDeviceBrowserStats } | undefined
                      tablet?: { [x: string]: GetDeviceBrowserStats } | undefined
                      unknown?: { [x: string]: GetDeviceBrowserStats } | undefined
                    }
                  | undefined
                statsByDomain?: { [x: string]: GetCampaignStats } | undefined
              }
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { campaignId: bigint } } & {
              query: {
                statistics?:
                  | 'globalStats'
                  | 'linksStats'
                  | 'statsByDomain'
                  | 'statsByDevice'
                  | 'statsByBrowser'
                  | undefined
                excludeHtmlContent?: true | false | undefined
              }
            }
            output: {
              code:
                | 'invalid_parameter'
                | 'missing_parameter'
                | 'out_of_range'
                | 'campaign_processing'
                | 'campaign_sent'
                | 'document_not_found'
                | 'not_enough_credits'
                | 'permission_denied'
                | 'duplicate_parameter'
                | 'duplicate_request'
                | 'method_not_allowed'
                | 'unauthorized'
                | 'account_under_validation'
                | 'not_acceptable'
                | 'bad_request'
                | 'unprocessable_entity'
                | 'Domain does not exist'
                | 'Contact email not found'
                | 'Attribute not found'
                | 'Category id not found'
                | 'Invalid parameters passed'
                | 'Record(s) for identifier not found'
                | 'Returned when query params are invalid'
                | 'Returned when invalid data posted'
                | 'Feed not found'
                | 'Campaign ID not found'
                | 'api-key not found'
                | 'DMARC policy requires domain authentication'
                | 'DNS records not properly configured'
                | 'Invalid OTP code provided'
                | 'OTP code has expired'
                | 'Domain already exists in your account'
                | 'The sum of all IP weights must equal 100'
                | 'Authentication failed'
                | 'Insufficient credits'
                | 'Request already processed'
              message: string
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { campaignId: bigint } } & {
              query: {
                statistics?:
                  | 'globalStats'
                  | 'linksStats'
                  | 'statsByDomain'
                  | 'statsByDevice'
                  | 'statsByBrowser'
                  | undefined
                excludeHtmlContent?: true | false | undefined
              }
            }
            output: {
              code:
                | 'invalid_parameter'
                | 'missing_parameter'
                | 'out_of_range'
                | 'campaign_processing'
                | 'campaign_sent'
                | 'document_not_found'
                | 'not_enough_credits'
                | 'permission_denied'
                | 'duplicate_parameter'
                | 'duplicate_request'
                | 'method_not_allowed'
                | 'unauthorized'
                | 'account_under_validation'
                | 'not_acceptable'
                | 'bad_request'
                | 'unprocessable_entity'
                | 'Domain does not exist'
                | 'Contact email not found'
                | 'Attribute not found'
                | 'Category id not found'
                | 'Invalid parameters passed'
                | 'Record(s) for identifier not found'
                | 'Returned when query params are invalid'
                | 'Returned when invalid data posted'
                | 'Feed not found'
                | 'Campaign ID not found'
                | 'api-key not found'
                | 'DMARC policy requires domain authentication'
                | 'DNS records not properly configured'
                | 'Invalid OTP code provided'
                | 'OTP code has expired'
                | 'Domain already exists in your account'
                | 'The sum of all IP weights must equal 100'
                | 'Authentication failed'
                | 'Insufficient credits'
                | 'Request already processed'
              message: string
            }
            outputFormat: 'json'
            status: 404
          }
      $put:
        | {
            input: { param: { campaignId: bigint } } & {
              json: {
                abTesting?: boolean | undefined
                attachmentUrl?: string | undefined
                emailExpirationDate?:
                  | {
                      duration?: bigint | undefined
                      unit?: 'days' | 'weeks' | 'months' | undefined
                    }
                  | undefined
                footer?: string | undefined
                header?: string | undefined
                htmlContent?: string | undefined
                htmlUrl?: string | undefined
                increaseRate?: bigint | undefined
                initialQuota?: bigint | undefined
                inlineImageActivation?: boolean | undefined
                ipWarmupEnable?: boolean | undefined
                mirrorActive?: boolean | undefined
                name?: string | undefined
                params?: { [x: string]: { [x: string]: unknown } } | undefined
                previewText?: string | undefined
                recipients?:
                  | {
                      exclusionListIds?: bigint[] | undefined
                      exclusionSegmentIds?: bigint[] | undefined
                      listIds?: bigint[] | undefined
                      segmentIds?: bigint[] | undefined
                    }
                  | undefined
                recurring?: boolean | undefined
                replyTo?: string | undefined
                scheduledAt?: string | undefined
                sendAtBestTime?: boolean | undefined
                sender?:
                  | {
                      email?: string | undefined
                      id?: bigint | undefined
                      name?: string | undefined
                    }
                  | undefined
                splitRule?: bigint | undefined
                subject?: string | undefined
                subjectA?: string | undefined
                subjectB?: string | undefined
                tag?: string | undefined
                toField?: string | undefined
                unsubscriptionPageId?: string | undefined
                updateFormId?: string | undefined
                utmCampaign?: string | undefined
                utmContent?: string | undefined
                utmId?: string | undefined
                utmMedium?: string | undefined
                utmSource?: string | undefined
                utmTerm?: string | undefined
                winnerCriteria?: 'open' | 'click' | undefined
                winnerDelay?: bigint | undefined
              }
            }
            output: {
              code:
                | 'invalid_parameter'
                | 'missing_parameter'
                | 'out_of_range'
                | 'campaign_processing'
                | 'campaign_sent'
                | 'document_not_found'
                | 'not_enough_credits'
                | 'permission_denied'
                | 'duplicate_parameter'
                | 'duplicate_request'
                | 'method_not_allowed'
                | 'unauthorized'
                | 'account_under_validation'
                | 'not_acceptable'
                | 'bad_request'
                | 'unprocessable_entity'
                | 'Domain does not exist'
                | 'Contact email not found'
                | 'Attribute not found'
                | 'Category id not found'
                | 'Invalid parameters passed'
                | 'Record(s) for identifier not found'
                | 'Returned when query params are invalid'
                | 'Returned when invalid data posted'
                | 'Feed not found'
                | 'Campaign ID not found'
                | 'api-key not found'
                | 'DMARC policy requires domain authentication'
                | 'DNS records not properly configured'
                | 'Invalid OTP code provided'
                | 'OTP code has expired'
                | 'Domain already exists in your account'
                | 'The sum of all IP weights must equal 100'
                | 'Authentication failed'
                | 'Insufficient credits'
                | 'Request already processed'
              message: string
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { campaignId: bigint } } & {
              json: {
                abTesting?: boolean | undefined
                attachmentUrl?: string | undefined
                emailExpirationDate?:
                  | {
                      duration?: bigint | undefined
                      unit?: 'days' | 'weeks' | 'months' | undefined
                    }
                  | undefined
                footer?: string | undefined
                header?: string | undefined
                htmlContent?: string | undefined
                htmlUrl?: string | undefined
                increaseRate?: bigint | undefined
                initialQuota?: bigint | undefined
                inlineImageActivation?: boolean | undefined
                ipWarmupEnable?: boolean | undefined
                mirrorActive?: boolean | undefined
                name?: string | undefined
                params?: { [x: string]: { [x: string]: unknown } } | undefined
                previewText?: string | undefined
                recipients?:
                  | {
                      exclusionListIds?: bigint[] | undefined
                      exclusionSegmentIds?: bigint[] | undefined
                      listIds?: bigint[] | undefined
                      segmentIds?: bigint[] | undefined
                    }
                  | undefined
                recurring?: boolean | undefined
                replyTo?: string | undefined
                scheduledAt?: string | undefined
                sendAtBestTime?: boolean | undefined
                sender?:
                  | {
                      email?: string | undefined
                      id?: bigint | undefined
                      name?: string | undefined
                    }
                  | undefined
                splitRule?: bigint | undefined
                subject?: string | undefined
                subjectA?: string | undefined
                subjectB?: string | undefined
                tag?: string | undefined
                toField?: string | undefined
                unsubscriptionPageId?: string | undefined
                updateFormId?: string | undefined
                utmCampaign?: string | undefined
                utmContent?: string | undefined
                utmId?: string | undefined
                utmMedium?: string | undefined
                utmSource?: string | undefined
                utmTerm?: string | undefined
                winnerCriteria?: 'open' | 'click' | undefined
                winnerDelay?: bigint | undefined
              }
            }
            output: {
              code:
                | 'invalid_parameter'
                | 'missing_parameter'
                | 'out_of_range'
                | 'campaign_processing'
                | 'campaign_sent'
                | 'document_not_found'
                | 'not_enough_credits'
                | 'permission_denied'
                | 'duplicate_parameter'
                | 'duplicate_request'
                | 'method_not_allowed'
                | 'unauthorized'
                | 'account_under_validation'
                | 'not_acceptable'
                | 'bad_request'
                | 'unprocessable_entity'
                | 'Domain does not exist'
                | 'Contact email not found'
                | 'Attribute not found'
                | 'Category id not found'
                | 'Invalid parameters passed'
                | 'Record(s) for identifier not found'
                | 'Returned when query params are invalid'
                | 'Returned when invalid data posted'
                | 'Feed not found'
                | 'Campaign ID not found'
                | 'api-key not found'
                | 'DMARC policy requires domain authentication'
                | 'DNS records not properly configured'
                | 'Invalid OTP code provided'
                | 'OTP code has expired'
                | 'Domain already exists in your account'
                | 'The sum of all IP weights must equal 100'
                | 'Authentication failed'
                | 'Insufficient credits'
                | 'Request already processed'
              message: string
            }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { campaignId: bigint } } & {
              json: {
                abTesting?: boolean | undefined
                attachmentUrl?: string | undefined
                emailExpirationDate?:
                  | {
                      duration?: bigint | undefined
                      unit?: 'days' | 'weeks' | 'months' | undefined
                    }
                  | undefined
                footer?: string | undefined
                header?: string | undefined
                htmlContent?: string | undefined
                htmlUrl?: string | undefined
                increaseRate?: bigint | undefined
                initialQuota?: bigint | undefined
                inlineImageActivation?: boolean | undefined
                ipWarmupEnable?: boolean | undefined
                mirrorActive?: boolean | undefined
                name?: string | undefined
                params?: { [x: string]: { [x: string]: unknown } } | undefined
                previewText?: string | undefined
                recipients?:
                  | {
                      exclusionListIds?: bigint[] | undefined
                      exclusionSegmentIds?: bigint[] | undefined
                      listIds?: bigint[] | undefined
                      segmentIds?: bigint[] | undefined
                    }
                  | undefined
                recurring?: boolean | undefined
                replyTo?: string | undefined
                scheduledAt?: string | undefined
                sendAtBestTime?: boolean | undefined
                sender?:
                  | {
                      email?: string | undefined
                      id?: bigint | undefined
                      name?: string | undefined
                    }
                  | undefined
                splitRule?: bigint | undefined
                subject?: string | undefined
                subjectA?: string | undefined
                subjectB?: string | undefined
                tag?: string | undefined
                toField?: string | undefined
                unsubscriptionPageId?: string | undefined
                updateFormId?: string | undefined
                utmCampaign?: string | undefined
                utmContent?: string | undefined
                utmId?: string | undefined
                utmMedium?: string | undefined
                utmSource?: string | undefined
                utmTerm?: string | undefined
                winnerCriteria?: 'open' | 'click' | undefined
                winnerDelay?: bigint | undefined
              }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 405
          }
    }
  } & {
    '/emailCampaigns/:campaignId/abTestCampaignResult': {
      $get:
        | {
            input: { param: { campaignId: bigint } }
            output: {
              clickRate?: string | undefined
              clickedLinks?:
                | { 'Version A': AbTestVersionClicks; 'Version B': AbTestVersionClicks }
                | undefined
              openRate?: string | undefined
              statistics?:
                | {
                    clicks: AbTestVersionStats
                    complaints: AbTestVersionStats
                    hardBounces: AbTestVersionStats
                    openers: AbTestVersionStats
                    softBounces: AbTestVersionStats
                    unsubscribed: AbTestVersionStats
                  }
                | undefined
              winningCriteria?: 'Open' | 'Click' | undefined
              winningSubjectLine?: string | undefined
              winningVersion?: 'notAvailable' | 'pending' | 'tie' | 'A' | 'B' | undefined
              winningVersionRate?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { campaignId: bigint } }
            output: {
              code:
                | 'invalid_parameter'
                | 'missing_parameter'
                | 'out_of_range'
                | 'campaign_processing'
                | 'campaign_sent'
                | 'document_not_found'
                | 'not_enough_credits'
                | 'permission_denied'
                | 'duplicate_parameter'
                | 'duplicate_request'
                | 'method_not_allowed'
                | 'unauthorized'
                | 'account_under_validation'
                | 'not_acceptable'
                | 'bad_request'
                | 'unprocessable_entity'
                | 'Domain does not exist'
                | 'Contact email not found'
                | 'Attribute not found'
                | 'Category id not found'
                | 'Invalid parameters passed'
                | 'Record(s) for identifier not found'
                | 'Returned when query params are invalid'
                | 'Returned when invalid data posted'
                | 'Feed not found'
                | 'Campaign ID not found'
                | 'api-key not found'
                | 'DMARC policy requires domain authentication'
                | 'DNS records not properly configured'
                | 'Invalid OTP code provided'
                | 'OTP code has expired'
                | 'Domain already exists in your account'
                | 'The sum of all IP weights must equal 100'
                | 'Authentication failed'
                | 'Insufficient credits'
                | 'Request already processed'
              message: string
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { campaignId: bigint } }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/emailCampaigns/:campaignId/exportRecipients': {
      $post:
        | {
            input: { param: { campaignId: bigint } } & {
              json: {
                notifyURL?: string | undefined
                recipientsType:
                  | 'all'
                  | 'nonClickers'
                  | 'nonOpeners'
                  | 'clickers'
                  | 'openers'
                  | 'softBounces'
                  | 'hardBounces'
                  | 'unsubscribed'
              }
            }
            output: { processId: bigint }
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { campaignId: bigint } } & {
              json: {
                notifyURL?: string | undefined
                recipientsType:
                  | 'all'
                  | 'nonClickers'
                  | 'nonOpeners'
                  | 'clickers'
                  | 'openers'
                  | 'softBounces'
                  | 'hardBounces'
                  | 'unsubscribed'
              }
            }
            output: {
              code:
                | 'invalid_parameter'
                | 'missing_parameter'
                | 'out_of_range'
                | 'campaign_processing'
                | 'campaign_sent'
                | 'document_not_found'
                | 'not_enough_credits'
                | 'permission_denied'
                | 'duplicate_parameter'
                | 'duplicate_request'
                | 'method_not_allowed'
                | 'unauthorized'
                | 'account_under_validation'
                | 'not_acceptable'
                | 'bad_request'
                | 'unprocessable_entity'
                | 'Domain does not exist'
                | 'Contact email not found'
                | 'Attribute not found'
                | 'Category id not found'
                | 'Invalid parameters passed'
                | 'Record(s) for identifier not found'
                | 'Returned when query params are invalid'
                | 'Returned when invalid data posted'
                | 'Feed not found'
                | 'Campaign ID not found'
                | 'api-key not found'
                | 'DMARC policy requires domain authentication'
                | 'DNS records not properly configured'
                | 'Invalid OTP code provided'
                | 'OTP code has expired'
                | 'Domain already exists in your account'
                | 'The sum of all IP weights must equal 100'
                | 'Authentication failed'
                | 'Insufficient credits'
                | 'Request already processed'
              message: string
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { campaignId: bigint } } & {
              json: {
                notifyURL?: string | undefined
                recipientsType:
                  | 'all'
                  | 'nonClickers'
                  | 'nonOpeners'
                  | 'clickers'
                  | 'openers'
                  | 'softBounces'
                  | 'hardBounces'
                  | 'unsubscribed'
              }
            }
            output: {
              code:
                | 'invalid_parameter'
                | 'missing_parameter'
                | 'out_of_range'
                | 'campaign_processing'
                | 'campaign_sent'
                | 'document_not_found'
                | 'not_enough_credits'
                | 'permission_denied'
                | 'duplicate_parameter'
                | 'duplicate_request'
                | 'method_not_allowed'
                | 'unauthorized'
                | 'account_under_validation'
                | 'not_acceptable'
                | 'bad_request'
                | 'unprocessable_entity'
                | 'Domain does not exist'
                | 'Contact email not found'
                | 'Attribute not found'
                | 'Category id not found'
                | 'Invalid parameters passed'
                | 'Record(s) for identifier not found'
                | 'Returned when query params are invalid'
                | 'Returned when invalid data posted'
                | 'Feed not found'
                | 'Campaign ID not found'
                | 'api-key not found'
                | 'DMARC policy requires domain authentication'
                | 'DNS records not properly configured'
                | 'Invalid OTP code provided'
                | 'OTP code has expired'
                | 'Domain already exists in your account'
                | 'The sum of all IP weights must equal 100'
                | 'Authentication failed'
                | 'Insufficient credits'
                | 'Request already processed'
              message: string
            }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/emailCampaigns/:campaignId/sendNow': {
      $post:
        | {
            input: { param: { campaignId: bigint } }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { campaignId: bigint } }
            output: ErrorModel
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { campaignId: bigint } }
            output: {
              code:
                | 'invalid_parameter'
                | 'missing_parameter'
                | 'out_of_range'
                | 'campaign_processing'
                | 'campaign_sent'
                | 'document_not_found'
                | 'not_enough_credits'
                | 'permission_denied'
                | 'duplicate_parameter'
                | 'duplicate_request'
                | 'method_not_allowed'
                | 'unauthorized'
                | 'account_under_validation'
                | 'not_acceptable'
                | 'bad_request'
                | 'unprocessable_entity'
                | 'Domain does not exist'
                | 'Contact email not found'
                | 'Attribute not found'
                | 'Category id not found'
                | 'Invalid parameters passed'
                | 'Record(s) for identifier not found'
                | 'Returned when query params are invalid'
                | 'Returned when invalid data posted'
                | 'Feed not found'
                | 'Campaign ID not found'
                | 'api-key not found'
                | 'DMARC policy requires domain authentication'
                | 'DNS records not properly configured'
                | 'Invalid OTP code provided'
                | 'OTP code has expired'
                | 'Domain already exists in your account'
                | 'The sum of all IP weights must equal 100'
                | 'Authentication failed'
                | 'Insufficient credits'
                | 'Request already processed'
              message: string
            }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/emailCampaigns/:campaignId/sendReport': {
      $post:
        | {
            input: { param: { campaignId: bigint } } & { json: SendReport }
            output: {
              code:
                | 'invalid_parameter'
                | 'missing_parameter'
                | 'out_of_range'
                | 'campaign_processing'
                | 'campaign_sent'
                | 'document_not_found'
                | 'not_enough_credits'
                | 'permission_denied'
                | 'duplicate_parameter'
                | 'duplicate_request'
                | 'method_not_allowed'
                | 'unauthorized'
                | 'account_under_validation'
                | 'not_acceptable'
                | 'bad_request'
                | 'unprocessable_entity'
                | 'Domain does not exist'
                | 'Contact email not found'
                | 'Attribute not found'
                | 'Category id not found'
                | 'Invalid parameters passed'
                | 'Record(s) for identifier not found'
                | 'Returned when query params are invalid'
                | 'Returned when invalid data posted'
                | 'Feed not found'
                | 'Campaign ID not found'
                | 'api-key not found'
                | 'DMARC policy requires domain authentication'
                | 'DNS records not properly configured'
                | 'Invalid OTP code provided'
                | 'OTP code has expired'
                | 'Domain already exists in your account'
                | 'The sum of all IP weights must equal 100'
                | 'Authentication failed'
                | 'Insufficient credits'
                | 'Request already processed'
              message: string
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { campaignId: bigint } } & { json: SendReport }
            output: {
              code:
                | 'invalid_parameter'
                | 'missing_parameter'
                | 'out_of_range'
                | 'campaign_processing'
                | 'campaign_sent'
                | 'document_not_found'
                | 'not_enough_credits'
                | 'permission_denied'
                | 'duplicate_parameter'
                | 'duplicate_request'
                | 'method_not_allowed'
                | 'unauthorized'
                | 'account_under_validation'
                | 'not_acceptable'
                | 'bad_request'
                | 'unprocessable_entity'
                | 'Domain does not exist'
                | 'Contact email not found'
                | 'Attribute not found'
                | 'Category id not found'
                | 'Invalid parameters passed'
                | 'Record(s) for identifier not found'
                | 'Returned when query params are invalid'
                | 'Returned when invalid data posted'
                | 'Feed not found'
                | 'Campaign ID not found'
                | 'api-key not found'
                | 'DMARC policy requires domain authentication'
                | 'DNS records not properly configured'
                | 'Invalid OTP code provided'
                | 'OTP code has expired'
                | 'Domain already exists in your account'
                | 'The sum of all IP weights must equal 100'
                | 'Authentication failed'
                | 'Insufficient credits'
                | 'Request already processed'
              message: string
            }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/emailCampaigns/:campaignId/sendTest': {
      $post:
        | {
            input: { param: { campaignId: bigint } } & { json: SendTestEmail }
            output: PostSendFailed
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { campaignId: bigint } } & { json: SendTestEmail }
            output: PostSendFailed
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/emailCampaigns/:campaignId/sharedUrl': {
      $get:
        | {
            input: { param: { campaignId: bigint } }
            output: { sharedUrl: string }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { campaignId: bigint } }
            output: {
              code:
                | 'invalid_parameter'
                | 'missing_parameter'
                | 'out_of_range'
                | 'campaign_processing'
                | 'campaign_sent'
                | 'document_not_found'
                | 'not_enough_credits'
                | 'permission_denied'
                | 'duplicate_parameter'
                | 'duplicate_request'
                | 'method_not_allowed'
                | 'unauthorized'
                | 'account_under_validation'
                | 'not_acceptable'
                | 'bad_request'
                | 'unprocessable_entity'
                | 'Domain does not exist'
                | 'Contact email not found'
                | 'Attribute not found'
                | 'Category id not found'
                | 'Invalid parameters passed'
                | 'Record(s) for identifier not found'
                | 'Returned when query params are invalid'
                | 'Returned when invalid data posted'
                | 'Feed not found'
                | 'Campaign ID not found'
                | 'api-key not found'
                | 'DMARC policy requires domain authentication'
                | 'DNS records not properly configured'
                | 'Invalid OTP code provided'
                | 'OTP code has expired'
                | 'Domain already exists in your account'
                | 'The sum of all IP weights must equal 100'
                | 'Authentication failed'
                | 'Insufficient credits'
                | 'Request already processed'
              message: string
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { campaignId: bigint } }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { campaignId: bigint } }
            output: ErrorModel
            outputFormat: 'json'
            status: 405
          }
    }
  } & {
    '/emailCampaigns/:campaignId/status': {
      $put:
        | {
            input: { param: { campaignId: bigint } } & { json: UpdateCampaignStatus }
            output: {
              code:
                | 'invalid_parameter'
                | 'missing_parameter'
                | 'out_of_range'
                | 'campaign_processing'
                | 'campaign_sent'
                | 'document_not_found'
                | 'not_enough_credits'
                | 'permission_denied'
                | 'duplicate_parameter'
                | 'duplicate_request'
                | 'method_not_allowed'
                | 'unauthorized'
                | 'account_under_validation'
                | 'not_acceptable'
                | 'bad_request'
                | 'unprocessable_entity'
                | 'Domain does not exist'
                | 'Contact email not found'
                | 'Attribute not found'
                | 'Category id not found'
                | 'Invalid parameters passed'
                | 'Record(s) for identifier not found'
                | 'Returned when query params are invalid'
                | 'Returned when invalid data posted'
                | 'Feed not found'
                | 'Campaign ID not found'
                | 'api-key not found'
                | 'DMARC policy requires domain authentication'
                | 'DNS records not properly configured'
                | 'Invalid OTP code provided'
                | 'OTP code has expired'
                | 'Domain already exists in your account'
                | 'The sum of all IP weights must equal 100'
                | 'Authentication failed'
                | 'Insufficient credits'
                | 'Request already processed'
              message: string
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { campaignId: bigint } } & { json: UpdateCampaignStatus }
            output: {
              code:
                | 'invalid_parameter'
                | 'missing_parameter'
                | 'out_of_range'
                | 'campaign_processing'
                | 'campaign_sent'
                | 'document_not_found'
                | 'not_enough_credits'
                | 'permission_denied'
                | 'duplicate_parameter'
                | 'duplicate_request'
                | 'method_not_allowed'
                | 'unauthorized'
                | 'account_under_validation'
                | 'not_acceptable'
                | 'bad_request'
                | 'unprocessable_entity'
                | 'Domain does not exist'
                | 'Contact email not found'
                | 'Attribute not found'
                | 'Category id not found'
                | 'Invalid parameters passed'
                | 'Record(s) for identifier not found'
                | 'Returned when query params are invalid'
                | 'Returned when invalid data posted'
                | 'Feed not found'
                | 'Campaign ID not found'
                | 'api-key not found'
                | 'DMARC policy requires domain authentication'
                | 'DNS records not properly configured'
                | 'Invalid OTP code provided'
                | 'OTP code has expired'
                | 'Domain already exists in your account'
                | 'The sum of all IP weights must equal 100'
                | 'Authentication failed'
                | 'Insufficient credits'
                | 'Request already processed'
              message: string
            }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/smsCampaigns': {
      $get:
        | {
            input: {
              query: {
                status?:
                  | 'suspended'
                  | 'archive'
                  | 'sent'
                  | 'queued'
                  | 'draft'
                  | 'inProcess'
                  | undefined
                startDate?: string | undefined
                endDate?: string | undefined
                limit?: bigint | undefined
                offset?: bigint | undefined
                sort?: 'asc' | 'desc' | undefined
              }
            }
            output: {
              campaigns?:
                | {
                    content: string
                    createdAt: string
                    id: bigint
                    modifiedAt: string
                    name: string
                    organisationPrefix?: string | undefined
                    scheduledAt?: string | undefined
                    sender: string
                    sentDate?: string | undefined
                    status: 'draft' | 'sent' | 'archive' | 'queued' | 'suspended' | 'inProcess'
                    unsubscribeInstruction?: string | undefined
                    recipients: {
                      excludedSegments?: bigint[] | undefined
                      exclusionLists: bigint[]
                      lists: bigint[]
                      segments?: bigint[] | undefined
                    }
                    statistics: {
                      answered: bigint
                      delivered: bigint
                      hardBounces: bigint
                      processing: bigint
                      sent: bigint
                      softBounces: bigint
                      unsubscriptions: bigint
                    }
                  }[]
                | undefined
              count?: bigint | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                status?:
                  | 'suspended'
                  | 'archive'
                  | 'sent'
                  | 'queued'
                  | 'draft'
                  | 'inProcess'
                  | undefined
                startDate?: string | undefined
                endDate?: string | undefined
                limit?: bigint | undefined
                offset?: bigint | undefined
                sort?: 'asc' | 'desc' | undefined
              }
            }
            output: {
              code:
                | 'invalid_parameter'
                | 'missing_parameter'
                | 'out_of_range'
                | 'campaign_processing'
                | 'campaign_sent'
                | 'document_not_found'
                | 'not_enough_credits'
                | 'permission_denied'
                | 'duplicate_parameter'
                | 'duplicate_request'
                | 'method_not_allowed'
                | 'unauthorized'
                | 'account_under_validation'
                | 'not_acceptable'
                | 'bad_request'
                | 'unprocessable_entity'
                | 'Domain does not exist'
                | 'Contact email not found'
                | 'Attribute not found'
                | 'Category id not found'
                | 'Invalid parameters passed'
                | 'Record(s) for identifier not found'
                | 'Returned when query params are invalid'
                | 'Returned when invalid data posted'
                | 'Feed not found'
                | 'Campaign ID not found'
                | 'api-key not found'
                | 'DMARC policy requires domain authentication'
                | 'DNS records not properly configured'
                | 'Invalid OTP code provided'
                | 'OTP code has expired'
                | 'Domain already exists in your account'
                | 'The sum of all IP weights must equal 100'
                | 'Authentication failed'
                | 'Insufficient credits'
                | 'Request already processed'
              message: string
            }
            outputFormat: 'json'
            status: 400
          }
      $post:
        | {
            input: {
              json: {
                content: string
                name: string
                organisationPrefix?: string | undefined
                recipients?:
                  | { exclusionListIds?: bigint[] | undefined; listIds: bigint[] }
                  | undefined
                scheduledAt?: string | undefined
                sender: string
                unicodeEnabled?: boolean | undefined
                unsubscribeInstruction?: string | undefined
              }
            }
            output: { id: bigint }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              json: {
                content: string
                name: string
                organisationPrefix?: string | undefined
                recipients?:
                  | { exclusionListIds?: bigint[] | undefined; listIds: bigint[] }
                  | undefined
                scheduledAt?: string | undefined
                sender: string
                unicodeEnabled?: boolean | undefined
                unsubscribeInstruction?: string | undefined
              }
            }
            output: {
              code:
                | 'invalid_parameter'
                | 'missing_parameter'
                | 'out_of_range'
                | 'campaign_processing'
                | 'campaign_sent'
                | 'document_not_found'
                | 'not_enough_credits'
                | 'permission_denied'
                | 'duplicate_parameter'
                | 'duplicate_request'
                | 'method_not_allowed'
                | 'unauthorized'
                | 'account_under_validation'
                | 'not_acceptable'
                | 'bad_request'
                | 'unprocessable_entity'
                | 'Domain does not exist'
                | 'Contact email not found'
                | 'Attribute not found'
                | 'Category id not found'
                | 'Invalid parameters passed'
                | 'Record(s) for identifier not found'
                | 'Returned when query params are invalid'
                | 'Returned when invalid data posted'
                | 'Feed not found'
                | 'Campaign ID not found'
                | 'api-key not found'
                | 'DMARC policy requires domain authentication'
                | 'DNS records not properly configured'
                | 'Invalid OTP code provided'
                | 'OTP code has expired'
                | 'Domain already exists in your account'
                | 'The sum of all IP weights must equal 100'
                | 'Authentication failed'
                | 'Insufficient credits'
                | 'Request already processed'
              message: string
            }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/smsCampaigns/:campaignId': {
      $delete:
        | {
            input: { param: { campaignId: bigint } }
            output: {
              code:
                | 'invalid_parameter'
                | 'missing_parameter'
                | 'out_of_range'
                | 'campaign_processing'
                | 'campaign_sent'
                | 'document_not_found'
                | 'not_enough_credits'
                | 'permission_denied'
                | 'duplicate_parameter'
                | 'duplicate_request'
                | 'method_not_allowed'
                | 'unauthorized'
                | 'account_under_validation'
                | 'not_acceptable'
                | 'bad_request'
                | 'unprocessable_entity'
                | 'Domain does not exist'
                | 'Contact email not found'
                | 'Attribute not found'
                | 'Category id not found'
                | 'Invalid parameters passed'
                | 'Record(s) for identifier not found'
                | 'Returned when query params are invalid'
                | 'Returned when invalid data posted'
                | 'Feed not found'
                | 'Campaign ID not found'
                | 'api-key not found'
                | 'DMARC policy requires domain authentication'
                | 'DNS records not properly configured'
                | 'Invalid OTP code provided'
                | 'OTP code has expired'
                | 'Domain already exists in your account'
                | 'The sum of all IP weights must equal 100'
                | 'Authentication failed'
                | 'Insufficient credits'
                | 'Request already processed'
              message: string
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { campaignId: bigint } }
            output: {
              code:
                | 'invalid_parameter'
                | 'missing_parameter'
                | 'out_of_range'
                | 'campaign_processing'
                | 'campaign_sent'
                | 'document_not_found'
                | 'not_enough_credits'
                | 'permission_denied'
                | 'duplicate_parameter'
                | 'duplicate_request'
                | 'method_not_allowed'
                | 'unauthorized'
                | 'account_under_validation'
                | 'not_acceptable'
                | 'bad_request'
                | 'unprocessable_entity'
                | 'Domain does not exist'
                | 'Contact email not found'
                | 'Attribute not found'
                | 'Category id not found'
                | 'Invalid parameters passed'
                | 'Record(s) for identifier not found'
                | 'Returned when query params are invalid'
                | 'Returned when invalid data posted'
                | 'Feed not found'
                | 'Campaign ID not found'
                | 'api-key not found'
                | 'DMARC policy requires domain authentication'
                | 'DNS records not properly configured'
                | 'Invalid OTP code provided'
                | 'OTP code has expired'
                | 'Domain already exists in your account'
                | 'The sum of all IP weights must equal 100'
                | 'Authentication failed'
                | 'Insufficient credits'
                | 'Request already processed'
              message: string
            }
            outputFormat: 'json'
            status: 404
          }
      $get:
        | {
            input: { param: { campaignId: bigint } }
            output: {
              content: string
              createdAt: string
              id: bigint
              modifiedAt: string
              name: string
              organisationPrefix?: string | undefined
              scheduledAt?: string | undefined
              sender: string
              sentDate?: string | undefined
              status: 'draft' | 'sent' | 'archive' | 'queued' | 'suspended' | 'inProcess'
              unsubscribeInstruction?: string | undefined
              recipients: {
                exclusionLists?:
                  | { id?: bigint | undefined; name?: string | undefined }[]
                  | undefined
                lists?: { id?: bigint | undefined; name?: string | undefined }[] | undefined
              }
              statistics: {
                answered: bigint
                delivered: bigint
                hardBounces: bigint
                processing: bigint
                sent: bigint
                softBounces: bigint
                unsubscriptions: bigint
              }
              tags?: string[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { campaignId: bigint } }
            output: {
              code:
                | 'invalid_parameter'
                | 'missing_parameter'
                | 'out_of_range'
                | 'campaign_processing'
                | 'campaign_sent'
                | 'document_not_found'
                | 'not_enough_credits'
                | 'permission_denied'
                | 'duplicate_parameter'
                | 'duplicate_request'
                | 'method_not_allowed'
                | 'unauthorized'
                | 'account_under_validation'
                | 'not_acceptable'
                | 'bad_request'
                | 'unprocessable_entity'
                | 'Domain does not exist'
                | 'Contact email not found'
                | 'Attribute not found'
                | 'Category id not found'
                | 'Invalid parameters passed'
                | 'Record(s) for identifier not found'
                | 'Returned when query params are invalid'
                | 'Returned when invalid data posted'
                | 'Feed not found'
                | 'Campaign ID not found'
                | 'api-key not found'
                | 'DMARC policy requires domain authentication'
                | 'DNS records not properly configured'
                | 'Invalid OTP code provided'
                | 'OTP code has expired'
                | 'Domain already exists in your account'
                | 'The sum of all IP weights must equal 100'
                | 'Authentication failed'
                | 'Insufficient credits'
                | 'Request already processed'
              message: string
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { campaignId: bigint } }
            output: {
              code:
                | 'invalid_parameter'
                | 'missing_parameter'
                | 'out_of_range'
                | 'campaign_processing'
                | 'campaign_sent'
                | 'document_not_found'
                | 'not_enough_credits'
                | 'permission_denied'
                | 'duplicate_parameter'
                | 'duplicate_request'
                | 'method_not_allowed'
                | 'unauthorized'
                | 'account_under_validation'
                | 'not_acceptable'
                | 'bad_request'
                | 'unprocessable_entity'
                | 'Domain does not exist'
                | 'Contact email not found'
                | 'Attribute not found'
                | 'Category id not found'
                | 'Invalid parameters passed'
                | 'Record(s) for identifier not found'
                | 'Returned when query params are invalid'
                | 'Returned when invalid data posted'
                | 'Feed not found'
                | 'Campaign ID not found'
                | 'api-key not found'
                | 'DMARC policy requires domain authentication'
                | 'DNS records not properly configured'
                | 'Invalid OTP code provided'
                | 'OTP code has expired'
                | 'Domain already exists in your account'
                | 'The sum of all IP weights must equal 100'
                | 'Authentication failed'
                | 'Insufficient credits'
                | 'Request already processed'
              message: string
            }
            outputFormat: 'json'
            status: 404
          }
      $put:
        | {
            input: { param: { campaignId: bigint } } & {
              json: {
                content?: string | undefined
                name?: string | undefined
                organisationPrefix?: string | undefined
                recipients?:
                  | { exclusionListIds?: bigint[] | undefined; listIds: bigint[] }
                  | undefined
                scheduledAt?: string | undefined
                sender?: string | undefined
                unicodeEnabled?: boolean | undefined
                unsubscribeInstruction?: string | undefined
              }
            }
            output: {
              code:
                | 'invalid_parameter'
                | 'missing_parameter'
                | 'out_of_range'
                | 'campaign_processing'
                | 'campaign_sent'
                | 'document_not_found'
                | 'not_enough_credits'
                | 'permission_denied'
                | 'duplicate_parameter'
                | 'duplicate_request'
                | 'method_not_allowed'
                | 'unauthorized'
                | 'account_under_validation'
                | 'not_acceptable'
                | 'bad_request'
                | 'unprocessable_entity'
                | 'Domain does not exist'
                | 'Contact email not found'
                | 'Attribute not found'
                | 'Category id not found'
                | 'Invalid parameters passed'
                | 'Record(s) for identifier not found'
                | 'Returned when query params are invalid'
                | 'Returned when invalid data posted'
                | 'Feed not found'
                | 'Campaign ID not found'
                | 'api-key not found'
                | 'DMARC policy requires domain authentication'
                | 'DNS records not properly configured'
                | 'Invalid OTP code provided'
                | 'OTP code has expired'
                | 'Domain already exists in your account'
                | 'The sum of all IP weights must equal 100'
                | 'Authentication failed'
                | 'Insufficient credits'
                | 'Request already processed'
              message: string
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { campaignId: bigint } } & {
              json: {
                content?: string | undefined
                name?: string | undefined
                organisationPrefix?: string | undefined
                recipients?:
                  | { exclusionListIds?: bigint[] | undefined; listIds: bigint[] }
                  | undefined
                scheduledAt?: string | undefined
                sender?: string | undefined
                unicodeEnabled?: boolean | undefined
                unsubscribeInstruction?: string | undefined
              }
            }
            output: {
              code:
                | 'invalid_parameter'
                | 'missing_parameter'
                | 'out_of_range'
                | 'campaign_processing'
                | 'campaign_sent'
                | 'document_not_found'
                | 'not_enough_credits'
                | 'permission_denied'
                | 'duplicate_parameter'
                | 'duplicate_request'
                | 'method_not_allowed'
                | 'unauthorized'
                | 'account_under_validation'
                | 'not_acceptable'
                | 'bad_request'
                | 'unprocessable_entity'
                | 'Domain does not exist'
                | 'Contact email not found'
                | 'Attribute not found'
                | 'Category id not found'
                | 'Invalid parameters passed'
                | 'Record(s) for identifier not found'
                | 'Returned when query params are invalid'
                | 'Returned when invalid data posted'
                | 'Feed not found'
                | 'Campaign ID not found'
                | 'api-key not found'
                | 'DMARC policy requires domain authentication'
                | 'DNS records not properly configured'
                | 'Invalid OTP code provided'
                | 'OTP code has expired'
                | 'Domain already exists in your account'
                | 'The sum of all IP weights must equal 100'
                | 'Authentication failed'
                | 'Insufficient credits'
                | 'Request already processed'
              message: string
            }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/smsCampaigns/:campaignId/exportRecipients': {
      $post:
        | {
            input: { param: { campaignId: bigint } } & {
              json: {
                notifyURL?: string | undefined
                recipientsType:
                  | 'all'
                  | 'delivered'
                  | 'answered'
                  | 'softBounces'
                  | 'hardBounces'
                  | 'unsubscribed'
              }
            }
            output: { processId: bigint }
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { campaignId: bigint } } & {
              json: {
                notifyURL?: string | undefined
                recipientsType:
                  | 'all'
                  | 'delivered'
                  | 'answered'
                  | 'softBounces'
                  | 'hardBounces'
                  | 'unsubscribed'
              }
            }
            output: {
              code:
                | 'invalid_parameter'
                | 'missing_parameter'
                | 'out_of_range'
                | 'campaign_processing'
                | 'campaign_sent'
                | 'document_not_found'
                | 'not_enough_credits'
                | 'permission_denied'
                | 'duplicate_parameter'
                | 'duplicate_request'
                | 'method_not_allowed'
                | 'unauthorized'
                | 'account_under_validation'
                | 'not_acceptable'
                | 'bad_request'
                | 'unprocessable_entity'
                | 'Domain does not exist'
                | 'Contact email not found'
                | 'Attribute not found'
                | 'Category id not found'
                | 'Invalid parameters passed'
                | 'Record(s) for identifier not found'
                | 'Returned when query params are invalid'
                | 'Returned when invalid data posted'
                | 'Feed not found'
                | 'Campaign ID not found'
                | 'api-key not found'
                | 'DMARC policy requires domain authentication'
                | 'DNS records not properly configured'
                | 'Invalid OTP code provided'
                | 'OTP code has expired'
                | 'Domain already exists in your account'
                | 'The sum of all IP weights must equal 100'
                | 'Authentication failed'
                | 'Insufficient credits'
                | 'Request already processed'
              message: string
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { campaignId: bigint } } & {
              json: {
                notifyURL?: string | undefined
                recipientsType:
                  | 'all'
                  | 'delivered'
                  | 'answered'
                  | 'softBounces'
                  | 'hardBounces'
                  | 'unsubscribed'
              }
            }
            output: {
              code:
                | 'invalid_parameter'
                | 'missing_parameter'
                | 'out_of_range'
                | 'campaign_processing'
                | 'campaign_sent'
                | 'document_not_found'
                | 'not_enough_credits'
                | 'permission_denied'
                | 'duplicate_parameter'
                | 'duplicate_request'
                | 'method_not_allowed'
                | 'unauthorized'
                | 'account_under_validation'
                | 'not_acceptable'
                | 'bad_request'
                | 'unprocessable_entity'
                | 'Domain does not exist'
                | 'Contact email not found'
                | 'Attribute not found'
                | 'Category id not found'
                | 'Invalid parameters passed'
                | 'Record(s) for identifier not found'
                | 'Returned when query params are invalid'
                | 'Returned when invalid data posted'
                | 'Feed not found'
                | 'Campaign ID not found'
                | 'api-key not found'
                | 'DMARC policy requires domain authentication'
                | 'DNS records not properly configured'
                | 'Invalid OTP code provided'
                | 'OTP code has expired'
                | 'Domain already exists in your account'
                | 'The sum of all IP weights must equal 100'
                | 'Authentication failed'
                | 'Insufficient credits'
                | 'Request already processed'
              message: string
            }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/smsCampaigns/:campaignId/sendNow': {
      $post:
        | {
            input: { param: { campaignId: bigint } }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { campaignId: bigint } }
            output: ErrorModel
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { campaignId: bigint } }
            output: {
              code:
                | 'invalid_parameter'
                | 'missing_parameter'
                | 'out_of_range'
                | 'campaign_processing'
                | 'campaign_sent'
                | 'document_not_found'
                | 'not_enough_credits'
                | 'permission_denied'
                | 'duplicate_parameter'
                | 'duplicate_request'
                | 'method_not_allowed'
                | 'unauthorized'
                | 'account_under_validation'
                | 'not_acceptable'
                | 'bad_request'
                | 'unprocessable_entity'
                | 'Domain does not exist'
                | 'Contact email not found'
                | 'Attribute not found'
                | 'Category id not found'
                | 'Invalid parameters passed'
                | 'Record(s) for identifier not found'
                | 'Returned when query params are invalid'
                | 'Returned when invalid data posted'
                | 'Feed not found'
                | 'Campaign ID not found'
                | 'api-key not found'
                | 'DMARC policy requires domain authentication'
                | 'DNS records not properly configured'
                | 'Invalid OTP code provided'
                | 'OTP code has expired'
                | 'Domain already exists in your account'
                | 'The sum of all IP weights must equal 100'
                | 'Authentication failed'
                | 'Insufficient credits'
                | 'Request already processed'
              message: string
            }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/smsCampaigns/:campaignId/sendReport': {
      $post:
        | {
            input: { param: { campaignId: bigint } } & { json: SendReport }
            output: {
              code:
                | 'invalid_parameter'
                | 'missing_parameter'
                | 'out_of_range'
                | 'campaign_processing'
                | 'campaign_sent'
                | 'document_not_found'
                | 'not_enough_credits'
                | 'permission_denied'
                | 'duplicate_parameter'
                | 'duplicate_request'
                | 'method_not_allowed'
                | 'unauthorized'
                | 'account_under_validation'
                | 'not_acceptable'
                | 'bad_request'
                | 'unprocessable_entity'
                | 'Domain does not exist'
                | 'Contact email not found'
                | 'Attribute not found'
                | 'Category id not found'
                | 'Invalid parameters passed'
                | 'Record(s) for identifier not found'
                | 'Returned when query params are invalid'
                | 'Returned when invalid data posted'
                | 'Feed not found'
                | 'Campaign ID not found'
                | 'api-key not found'
                | 'DMARC policy requires domain authentication'
                | 'DNS records not properly configured'
                | 'Invalid OTP code provided'
                | 'OTP code has expired'
                | 'Domain already exists in your account'
                | 'The sum of all IP weights must equal 100'
                | 'Authentication failed'
                | 'Insufficient credits'
                | 'Request already processed'
              message: string
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { campaignId: bigint } } & { json: SendReport }
            output: {
              code:
                | 'invalid_parameter'
                | 'missing_parameter'
                | 'out_of_range'
                | 'campaign_processing'
                | 'campaign_sent'
                | 'document_not_found'
                | 'not_enough_credits'
                | 'permission_denied'
                | 'duplicate_parameter'
                | 'duplicate_request'
                | 'method_not_allowed'
                | 'unauthorized'
                | 'account_under_validation'
                | 'not_acceptable'
                | 'bad_request'
                | 'unprocessable_entity'
                | 'Domain does not exist'
                | 'Contact email not found'
                | 'Attribute not found'
                | 'Category id not found'
                | 'Invalid parameters passed'
                | 'Record(s) for identifier not found'
                | 'Returned when query params are invalid'
                | 'Returned when invalid data posted'
                | 'Feed not found'
                | 'Campaign ID not found'
                | 'api-key not found'
                | 'DMARC policy requires domain authentication'
                | 'DNS records not properly configured'
                | 'Invalid OTP code provided'
                | 'OTP code has expired'
                | 'Domain already exists in your account'
                | 'The sum of all IP weights must equal 100'
                | 'Authentication failed'
                | 'Insufficient credits'
                | 'Request already processed'
              message: string
            }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/smsCampaigns/:campaignId/sendTest': {
      $post:
        | {
            input: { param: { campaignId: bigint } } & {
              json: { phoneNumber?: string | undefined }
            }
            output: {
              code: string
              message: string
              unexistingSms?: string[] | undefined
              withoutListSms?: string[] | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { campaignId: bigint } } & {
              json: { phoneNumber?: string | undefined }
            }
            output: {
              code:
                | 'invalid_parameter'
                | 'missing_parameter'
                | 'out_of_range'
                | 'campaign_processing'
                | 'campaign_sent'
                | 'document_not_found'
                | 'not_enough_credits'
                | 'permission_denied'
                | 'duplicate_parameter'
                | 'duplicate_request'
                | 'method_not_allowed'
                | 'unauthorized'
                | 'account_under_validation'
                | 'not_acceptable'
                | 'bad_request'
                | 'unprocessable_entity'
                | 'Domain does not exist'
                | 'Contact email not found'
                | 'Attribute not found'
                | 'Category id not found'
                | 'Invalid parameters passed'
                | 'Record(s) for identifier not found'
                | 'Returned when query params are invalid'
                | 'Returned when invalid data posted'
                | 'Feed not found'
                | 'Campaign ID not found'
                | 'api-key not found'
                | 'DMARC policy requires domain authentication'
                | 'DNS records not properly configured'
                | 'Invalid OTP code provided'
                | 'OTP code has expired'
                | 'Domain already exists in your account'
                | 'The sum of all IP weights must equal 100'
                | 'Authentication failed'
                | 'Insufficient credits'
                | 'Request already processed'
              message: string
            }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/smsCampaigns/:campaignId/status': {
      $put:
        | {
            input: { param: { campaignId: bigint } } & { json: UpdateCampaignStatus }
            output: {
              code:
                | 'invalid_parameter'
                | 'missing_parameter'
                | 'out_of_range'
                | 'campaign_processing'
                | 'campaign_sent'
                | 'document_not_found'
                | 'not_enough_credits'
                | 'permission_denied'
                | 'duplicate_parameter'
                | 'duplicate_request'
                | 'method_not_allowed'
                | 'unauthorized'
                | 'account_under_validation'
                | 'not_acceptable'
                | 'bad_request'
                | 'unprocessable_entity'
                | 'Domain does not exist'
                | 'Contact email not found'
                | 'Attribute not found'
                | 'Category id not found'
                | 'Invalid parameters passed'
                | 'Record(s) for identifier not found'
                | 'Returned when query params are invalid'
                | 'Returned when invalid data posted'
                | 'Feed not found'
                | 'Campaign ID not found'
                | 'api-key not found'
                | 'DMARC policy requires domain authentication'
                | 'DNS records not properly configured'
                | 'Invalid OTP code provided'
                | 'OTP code has expired'
                | 'Domain already exists in your account'
                | 'The sum of all IP weights must equal 100'
                | 'Authentication failed'
                | 'Insufficient credits'
                | 'Request already processed'
              message: string
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { campaignId: bigint } } & { json: UpdateCampaignStatus }
            output: {
              code:
                | 'invalid_parameter'
                | 'missing_parameter'
                | 'out_of_range'
                | 'campaign_processing'
                | 'campaign_sent'
                | 'document_not_found'
                | 'not_enough_credits'
                | 'permission_denied'
                | 'duplicate_parameter'
                | 'duplicate_request'
                | 'method_not_allowed'
                | 'unauthorized'
                | 'account_under_validation'
                | 'not_acceptable'
                | 'bad_request'
                | 'unprocessable_entity'
                | 'Domain does not exist'
                | 'Contact email not found'
                | 'Attribute not found'
                | 'Category id not found'
                | 'Invalid parameters passed'
                | 'Record(s) for identifier not found'
                | 'Returned when query params are invalid'
                | 'Returned when invalid data posted'
                | 'Feed not found'
                | 'Campaign ID not found'
                | 'api-key not found'
                | 'DMARC policy requires domain authentication'
                | 'DNS records not properly configured'
                | 'Invalid OTP code provided'
                | 'OTP code has expired'
                | 'Domain already exists in your account'
                | 'The sum of all IP weights must equal 100'
                | 'Authentication failed'
                | 'Insufficient credits'
                | 'Request already processed'
              message: string
            }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/whatsappCampaigns': {
      $get:
        | {
            input: {
              query: {
                startDate?: string | undefined
                endDate?: string | undefined
                limit?: bigint | undefined
                offset?: bigint | undefined
                sort?: 'asc' | 'desc' | undefined
              }
            }
            output: {
              campaigns?:
                | {
                    campaignName: string
                    campaignStatus:
                      | 'draft'
                      | 'scheduled'
                      | 'pending'
                      | 'approved'
                      | 'running'
                      | 'suspended'
                      | 'rejected'
                      | 'sent'
                    createdAt: string
                    errorReason?: string | undefined
                    id: bigint
                    invalidatedContacts?: bigint | undefined
                    modifiedAt: string
                    readPercentage?: number | undefined
                    scheduledAt: string
                    stats?: WhatsappCampStats | undefined
                    templateId: string
                  }[]
                | undefined
              count?: bigint | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                startDate?: string | undefined
                endDate?: string | undefined
                limit?: bigint | undefined
                offset?: bigint | undefined
                sort?: 'asc' | 'desc' | undefined
              }
            }
            output: {
              code:
                | 'invalid_parameter'
                | 'missing_parameter'
                | 'out_of_range'
                | 'campaign_processing'
                | 'campaign_sent'
                | 'document_not_found'
                | 'not_enough_credits'
                | 'permission_denied'
                | 'duplicate_parameter'
                | 'duplicate_request'
                | 'method_not_allowed'
                | 'unauthorized'
                | 'account_under_validation'
                | 'not_acceptable'
                | 'bad_request'
                | 'unprocessable_entity'
                | 'Domain does not exist'
                | 'Contact email not found'
                | 'Attribute not found'
                | 'Category id not found'
                | 'Invalid parameters passed'
                | 'Record(s) for identifier not found'
                | 'Returned when query params are invalid'
                | 'Returned when invalid data posted'
                | 'Feed not found'
                | 'Campaign ID not found'
                | 'api-key not found'
                | 'DMARC policy requires domain authentication'
                | 'DNS records not properly configured'
                | 'Invalid OTP code provided'
                | 'OTP code has expired'
                | 'Domain already exists in your account'
                | 'The sum of all IP weights must equal 100'
                | 'Authentication failed'
                | 'Insufficient credits'
                | 'Request already processed'
              message: string
            }
            outputFormat: 'json'
            status: 400
          }
      $post:
        | {
            input: {
              json: {
                name: string
                recipients: {
                  excludedListIds?: bigint[] | undefined
                  listIds?: bigint[] | undefined
                  segments?: bigint[] | undefined
                }
                scheduledAt: string
                templateId: number
              }
            }
            output: { id: bigint }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              json: {
                name: string
                recipients: {
                  excludedListIds?: bigint[] | undefined
                  listIds?: bigint[] | undefined
                  segments?: bigint[] | undefined
                }
                scheduledAt: string
                templateId: number
              }
            }
            output: {
              code:
                | 'invalid_parameter'
                | 'missing_parameter'
                | 'out_of_range'
                | 'campaign_processing'
                | 'campaign_sent'
                | 'document_not_found'
                | 'not_enough_credits'
                | 'permission_denied'
                | 'duplicate_parameter'
                | 'duplicate_request'
                | 'method_not_allowed'
                | 'unauthorized'
                | 'account_under_validation'
                | 'not_acceptable'
                | 'bad_request'
                | 'unprocessable_entity'
                | 'Domain does not exist'
                | 'Contact email not found'
                | 'Attribute not found'
                | 'Category id not found'
                | 'Invalid parameters passed'
                | 'Record(s) for identifier not found'
                | 'Returned when query params are invalid'
                | 'Returned when invalid data posted'
                | 'Feed not found'
                | 'Campaign ID not found'
                | 'api-key not found'
                | 'DMARC policy requires domain authentication'
                | 'DNS records not properly configured'
                | 'Invalid OTP code provided'
                | 'OTP code has expired'
                | 'Domain already exists in your account'
                | 'The sum of all IP weights must equal 100'
                | 'Authentication failed'
                | 'Insufficient credits'
                | 'Request already processed'
              message: string
            }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/whatsappCampaigns/config': {
      $get:
        | {
            input: {}
            output: {
              businessStatus?: string | undefined
              phoneNumberNameStatus?: 'APPROVED' | 'PENDING' | 'REJECTED' | undefined
              phoneNumberQuality?: 'GREEN' | 'YELLOW' | 'RED' | undefined
              sendingLimit?: string | undefined
              whatsappBusinessAccountId?: string | undefined
              whatsappBusinessAccountStatus?: 'APPROVED' | 'PENDING' | 'REJECTED' | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {}
            output: {
              code:
                | 'invalid_parameter'
                | 'missing_parameter'
                | 'out_of_range'
                | 'campaign_processing'
                | 'campaign_sent'
                | 'document_not_found'
                | 'not_enough_credits'
                | 'permission_denied'
                | 'duplicate_parameter'
                | 'duplicate_request'
                | 'method_not_allowed'
                | 'unauthorized'
                | 'account_under_validation'
                | 'not_acceptable'
                | 'bad_request'
                | 'unprocessable_entity'
                | 'Domain does not exist'
                | 'Contact email not found'
                | 'Attribute not found'
                | 'Category id not found'
                | 'Invalid parameters passed'
                | 'Record(s) for identifier not found'
                | 'Returned when query params are invalid'
                | 'Returned when invalid data posted'
                | 'Feed not found'
                | 'Campaign ID not found'
                | 'api-key not found'
                | 'DMARC policy requires domain authentication'
                | 'DNS records not properly configured'
                | 'Invalid OTP code provided'
                | 'OTP code has expired'
                | 'Domain already exists in your account'
                | 'The sum of all IP weights must equal 100'
                | 'Authentication failed'
                | 'Insufficient credits'
                | 'Request already processed'
              message: string
            }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/whatsappCampaigns/template': {
      $post:
        | {
            input: {
              json: {
                bodyText: string
                category: 'MARKETING' | 'UTILITY'
                headerText?: string | undefined
                language: string
                mediaUrl?: string | undefined
                name: string
                source?: 'Automation' | 'Conversations' | undefined
              }
            }
            output: { id: bigint }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              json: {
                bodyText: string
                category: 'MARKETING' | 'UTILITY'
                headerText?: string | undefined
                language: string
                mediaUrl?: string | undefined
                name: string
                source?: 'Automation' | 'Conversations' | undefined
              }
            }
            output: {
              code:
                | 'invalid_parameter'
                | 'missing_parameter'
                | 'out_of_range'
                | 'campaign_processing'
                | 'campaign_sent'
                | 'document_not_found'
                | 'not_enough_credits'
                | 'permission_denied'
                | 'duplicate_parameter'
                | 'duplicate_request'
                | 'method_not_allowed'
                | 'unauthorized'
                | 'account_under_validation'
                | 'not_acceptable'
                | 'bad_request'
                | 'unprocessable_entity'
                | 'Domain does not exist'
                | 'Contact email not found'
                | 'Attribute not found'
                | 'Category id not found'
                | 'Invalid parameters passed'
                | 'Record(s) for identifier not found'
                | 'Returned when query params are invalid'
                | 'Returned when invalid data posted'
                | 'Feed not found'
                | 'Campaign ID not found'
                | 'api-key not found'
                | 'DMARC policy requires domain authentication'
                | 'DNS records not properly configured'
                | 'Invalid OTP code provided'
                | 'OTP code has expired'
                | 'Domain already exists in your account'
                | 'The sum of all IP weights must equal 100'
                | 'Authentication failed'
                | 'Insufficient credits'
                | 'Request already processed'
              message: string
            }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/whatsappCampaigns/template-list': {
      $get:
        | {
            input: {
              query: {
                startDate?: string | undefined
                endDate?: string | undefined
                limit?: bigint | undefined
                offset?: bigint | undefined
                sort?: 'asc' | 'desc' | undefined
                source?: 'Automation' | 'Conversations' | undefined
              }
            }
            output: {
              count?: bigint | undefined
              templates?:
                | {
                    category: string
                    createdAt: string
                    errorReason?: string | undefined
                    id: bigint
                    language: string
                    modifiedAt: string
                    name: string
                    status: string
                    type: string
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                startDate?: string | undefined
                endDate?: string | undefined
                limit?: bigint | undefined
                offset?: bigint | undefined
                sort?: 'asc' | 'desc' | undefined
                source?: 'Automation' | 'Conversations' | undefined
              }
            }
            output: {
              code:
                | 'invalid_parameter'
                | 'missing_parameter'
                | 'out_of_range'
                | 'campaign_processing'
                | 'campaign_sent'
                | 'document_not_found'
                | 'not_enough_credits'
                | 'permission_denied'
                | 'duplicate_parameter'
                | 'duplicate_request'
                | 'method_not_allowed'
                | 'unauthorized'
                | 'account_under_validation'
                | 'not_acceptable'
                | 'bad_request'
                | 'unprocessable_entity'
                | 'Domain does not exist'
                | 'Contact email not found'
                | 'Attribute not found'
                | 'Category id not found'
                | 'Invalid parameters passed'
                | 'Record(s) for identifier not found'
                | 'Returned when query params are invalid'
                | 'Returned when invalid data posted'
                | 'Feed not found'
                | 'Campaign ID not found'
                | 'api-key not found'
                | 'DMARC policy requires domain authentication'
                | 'DNS records not properly configured'
                | 'Invalid OTP code provided'
                | 'OTP code has expired'
                | 'Domain already exists in your account'
                | 'The sum of all IP weights must equal 100'
                | 'Authentication failed'
                | 'Insufficient credits'
                | 'Request already processed'
              message: string
            }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/whatsappCampaigns/template/approval/:templateId': {
      $post: {
        input: { param: { templateId: bigint } }
        output: {
          code:
            | 'invalid_parameter'
            | 'missing_parameter'
            | 'out_of_range'
            | 'campaign_processing'
            | 'campaign_sent'
            | 'document_not_found'
            | 'not_enough_credits'
            | 'permission_denied'
            | 'duplicate_parameter'
            | 'duplicate_request'
            | 'method_not_allowed'
            | 'unauthorized'
            | 'account_under_validation'
            | 'not_acceptable'
            | 'bad_request'
            | 'unprocessable_entity'
            | 'Domain does not exist'
            | 'Contact email not found'
            | 'Attribute not found'
            | 'Category id not found'
            | 'Invalid parameters passed'
            | 'Record(s) for identifier not found'
            | 'Returned when query params are invalid'
            | 'Returned when invalid data posted'
            | 'Feed not found'
            | 'Campaign ID not found'
            | 'api-key not found'
            | 'DMARC policy requires domain authentication'
            | 'DNS records not properly configured'
            | 'Invalid OTP code provided'
            | 'OTP code has expired'
            | 'Domain already exists in your account'
            | 'The sum of all IP weights must equal 100'
            | 'Authentication failed'
            | 'Insufficient credits'
            | 'Request already processed'
          message: string
        }
        outputFormat: 'json'
        status: 400
      }
    }
  } & {
    '/whatsappCampaigns/:campaignId': {
      $delete:
        | {
            input: { param: { campaignId: bigint } }
            output: {
              code:
                | 'invalid_parameter'
                | 'missing_parameter'
                | 'out_of_range'
                | 'campaign_processing'
                | 'campaign_sent'
                | 'document_not_found'
                | 'not_enough_credits'
                | 'permission_denied'
                | 'duplicate_parameter'
                | 'duplicate_request'
                | 'method_not_allowed'
                | 'unauthorized'
                | 'account_under_validation'
                | 'not_acceptable'
                | 'bad_request'
                | 'unprocessable_entity'
                | 'Domain does not exist'
                | 'Contact email not found'
                | 'Attribute not found'
                | 'Category id not found'
                | 'Invalid parameters passed'
                | 'Record(s) for identifier not found'
                | 'Returned when query params are invalid'
                | 'Returned when invalid data posted'
                | 'Feed not found'
                | 'Campaign ID not found'
                | 'api-key not found'
                | 'DMARC policy requires domain authentication'
                | 'DNS records not properly configured'
                | 'Invalid OTP code provided'
                | 'OTP code has expired'
                | 'Domain already exists in your account'
                | 'The sum of all IP weights must equal 100'
                | 'Authentication failed'
                | 'Insufficient credits'
                | 'Request already processed'
              message: string
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { campaignId: bigint } }
            output: {
              code:
                | 'invalid_parameter'
                | 'missing_parameter'
                | 'out_of_range'
                | 'campaign_processing'
                | 'campaign_sent'
                | 'document_not_found'
                | 'not_enough_credits'
                | 'permission_denied'
                | 'duplicate_parameter'
                | 'duplicate_request'
                | 'method_not_allowed'
                | 'unauthorized'
                | 'account_under_validation'
                | 'not_acceptable'
                | 'bad_request'
                | 'unprocessable_entity'
                | 'Domain does not exist'
                | 'Contact email not found'
                | 'Attribute not found'
                | 'Category id not found'
                | 'Invalid parameters passed'
                | 'Record(s) for identifier not found'
                | 'Returned when query params are invalid'
                | 'Returned when invalid data posted'
                | 'Feed not found'
                | 'Campaign ID not found'
                | 'api-key not found'
                | 'DMARC policy requires domain authentication'
                | 'DNS records not properly configured'
                | 'Invalid OTP code provided'
                | 'OTP code has expired'
                | 'Domain already exists in your account'
                | 'The sum of all IP weights must equal 100'
                | 'Authentication failed'
                | 'Insufficient credits'
                | 'Request already processed'
              message: string
            }
            outputFormat: 'json'
            status: 404
          }
      $get:
        | {
            input: { param: { campaignId: bigint } }
            output: {
              campaignName: string
              campaignStatus:
                | 'draft'
                | 'scheduled'
                | 'pending'
                | 'approved'
                | 'running'
                | 'suspended'
                | 'rejected'
                | 'sent'
              createdAt: string
              id: bigint
              modifiedAt: string
              scheduledAt?: string | undefined
              recipients: {
                excludedLists?: bigint[] | undefined
                includedLists?: bigint[] | undefined
                segments?: bigint[] | undefined
                type?: string | undefined
              }
              senderNumber: string
              stats?: WhatsappCampStats | undefined
              template: {
                body_variables?: VariablesItems[] | undefined
                button_type?: string | undefined
                category?: string | undefined
                components?: { text?: string | undefined; type?: string | undefined }[] | undefined
                contains_button?: boolean | undefined
                display_header?: boolean | undefined
                header_type?: string | undefined
                header_variables?: VariablesItems[] | undefined
                hide_footer?: boolean | undefined
                language?: string | undefined
                name?: string | undefined
              }
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { campaignId: bigint } }
            output: {
              code:
                | 'invalid_parameter'
                | 'missing_parameter'
                | 'out_of_range'
                | 'campaign_processing'
                | 'campaign_sent'
                | 'document_not_found'
                | 'not_enough_credits'
                | 'permission_denied'
                | 'duplicate_parameter'
                | 'duplicate_request'
                | 'method_not_allowed'
                | 'unauthorized'
                | 'account_under_validation'
                | 'not_acceptable'
                | 'bad_request'
                | 'unprocessable_entity'
                | 'Domain does not exist'
                | 'Contact email not found'
                | 'Attribute not found'
                | 'Category id not found'
                | 'Invalid parameters passed'
                | 'Record(s) for identifier not found'
                | 'Returned when query params are invalid'
                | 'Returned when invalid data posted'
                | 'Feed not found'
                | 'Campaign ID not found'
                | 'api-key not found'
                | 'DMARC policy requires domain authentication'
                | 'DNS records not properly configured'
                | 'Invalid OTP code provided'
                | 'OTP code has expired'
                | 'Domain already exists in your account'
                | 'The sum of all IP weights must equal 100'
                | 'Authentication failed'
                | 'Insufficient credits'
                | 'Request already processed'
              message: string
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { campaignId: bigint } }
            output: {
              code:
                | 'invalid_parameter'
                | 'missing_parameter'
                | 'out_of_range'
                | 'campaign_processing'
                | 'campaign_sent'
                | 'document_not_found'
                | 'not_enough_credits'
                | 'permission_denied'
                | 'duplicate_parameter'
                | 'duplicate_request'
                | 'method_not_allowed'
                | 'unauthorized'
                | 'account_under_validation'
                | 'not_acceptable'
                | 'bad_request'
                | 'unprocessable_entity'
                | 'Domain does not exist'
                | 'Contact email not found'
                | 'Attribute not found'
                | 'Category id not found'
                | 'Invalid parameters passed'
                | 'Record(s) for identifier not found'
                | 'Returned when query params are invalid'
                | 'Returned when invalid data posted'
                | 'Feed not found'
                | 'Campaign ID not found'
                | 'api-key not found'
                | 'DMARC policy requires domain authentication'
                | 'DNS records not properly configured'
                | 'Invalid OTP code provided'
                | 'OTP code has expired'
                | 'Domain already exists in your account'
                | 'The sum of all IP weights must equal 100'
                | 'Authentication failed'
                | 'Insufficient credits'
                | 'Request already processed'
              message: string
            }
            outputFormat: 'json'
            status: 404
          }
      $put: {
        input: { param: { campaignId: bigint } } & {
          json: {
            campaignName?: string | undefined
            campaignStatus?: 'scheduled' | 'suspended' | undefined
            recipients?:
              | {
                  excludedListIds?: bigint[] | undefined
                  listIds?: bigint[] | undefined
                  segments?: bigint[] | undefined
                }
              | undefined
            rescheduleFor?: string | undefined
          }
        }
        output: {
          code:
            | 'invalid_parameter'
            | 'missing_parameter'
            | 'out_of_range'
            | 'campaign_processing'
            | 'campaign_sent'
            | 'document_not_found'
            | 'not_enough_credits'
            | 'permission_denied'
            | 'duplicate_parameter'
            | 'duplicate_request'
            | 'method_not_allowed'
            | 'unauthorized'
            | 'account_under_validation'
            | 'not_acceptable'
            | 'bad_request'
            | 'unprocessable_entity'
            | 'Domain does not exist'
            | 'Contact email not found'
            | 'Attribute not found'
            | 'Category id not found'
            | 'Invalid parameters passed'
            | 'Record(s) for identifier not found'
            | 'Returned when query params are invalid'
            | 'Returned when invalid data posted'
            | 'Feed not found'
            | 'Campaign ID not found'
            | 'api-key not found'
            | 'DMARC policy requires domain authentication'
            | 'DNS records not properly configured'
            | 'Invalid OTP code provided'
            | 'OTP code has expired'
            | 'Domain already exists in your account'
            | 'The sum of all IP weights must equal 100'
            | 'Authentication failed'
            | 'Insufficient credits'
            | 'Request already processed'
          message: string
        }
        outputFormat: 'json'
        status: 400
      }
    }
  } & {
    '/companies': {
      $get:
        | {
            input: {
              query: {
                'filters[attributes.name]'?: string | undefined
                linkedContactsIds?: bigint | undefined
                linkedDealsIds?: string | undefined
                modifiedSince?: string | undefined
                createdSince?: string | undefined
                page?: bigint | undefined
                limit?: bigint | undefined
                sort?: 'asc' | 'desc' | undefined
                sortBy?: string | undefined
              }
            }
            output: { items?: Company[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                'filters[attributes.name]'?: string | undefined
                linkedContactsIds?: bigint | undefined
                linkedDealsIds?: string | undefined
                modifiedSince?: string | undefined
                createdSince?: string | undefined
                page?: bigint | undefined
                limit?: bigint | undefined
                sort?: 'asc' | 'desc' | undefined
                sortBy?: string | undefined
              }
            }
            output: {
              code:
                | 'invalid_parameter'
                | 'missing_parameter'
                | 'out_of_range'
                | 'campaign_processing'
                | 'campaign_sent'
                | 'document_not_found'
                | 'not_enough_credits'
                | 'permission_denied'
                | 'duplicate_parameter'
                | 'duplicate_request'
                | 'method_not_allowed'
                | 'unauthorized'
                | 'account_under_validation'
                | 'not_acceptable'
                | 'bad_request'
                | 'unprocessable_entity'
                | 'Domain does not exist'
                | 'Contact email not found'
                | 'Attribute not found'
                | 'Category id not found'
                | 'Invalid parameters passed'
                | 'Record(s) for identifier not found'
                | 'Returned when query params are invalid'
                | 'Returned when invalid data posted'
                | 'Feed not found'
                | 'Campaign ID not found'
                | 'api-key not found'
                | 'DMARC policy requires domain authentication'
                | 'DNS records not properly configured'
                | 'Invalid OTP code provided'
                | 'OTP code has expired'
                | 'Domain already exists in your account'
                | 'The sum of all IP weights must equal 100'
                | 'Authentication failed'
                | 'Insufficient credits'
                | 'Request already processed'
              message: string
            }
            outputFormat: 'json'
            status: 400
          }
      $post:
        | {
            input: {
              json: {
                attributes?: { [x: string]: unknown } | undefined
                countryCode?: bigint | undefined
                linkedContactsIds?: bigint[] | undefined
                linkedDealsIds?: string[] | undefined
                name: string
              }
            }
            output: { id: string }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                attributes?: { [x: string]: unknown } | undefined
                countryCode?: bigint | undefined
                linkedContactsIds?: bigint[] | undefined
                linkedDealsIds?: string[] | undefined
                name: string
              }
            }
            output: {
              code:
                | 'invalid_parameter'
                | 'missing_parameter'
                | 'out_of_range'
                | 'campaign_processing'
                | 'campaign_sent'
                | 'document_not_found'
                | 'not_enough_credits'
                | 'permission_denied'
                | 'duplicate_parameter'
                | 'duplicate_request'
                | 'method_not_allowed'
                | 'unauthorized'
                | 'account_under_validation'
                | 'not_acceptable'
                | 'bad_request'
                | 'unprocessable_entity'
                | 'Domain does not exist'
                | 'Contact email not found'
                | 'Attribute not found'
                | 'Category id not found'
                | 'Invalid parameters passed'
                | 'Record(s) for identifier not found'
                | 'Returned when query params are invalid'
                | 'Returned when invalid data posted'
                | 'Feed not found'
                | 'Campaign ID not found'
                | 'api-key not found'
                | 'DMARC policy requires domain authentication'
                | 'DNS records not properly configured'
                | 'Invalid OTP code provided'
                | 'OTP code has expired'
                | 'Domain already exists in your account'
                | 'The sum of all IP weights must equal 100'
                | 'Authentication failed'
                | 'Insufficient credits'
                | 'Request already processed'
              message: string
            }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/companies/import': {
      $post:
        | {
            input: {
              form: { file?: File | undefined; mapping?: { [x: string]: unknown } | undefined }
            }
            output: { processId?: number | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              form: { file?: File | undefined; mapping?: { [x: string]: unknown } | undefined }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/companies/link-unlink/:id': {
      $patch:
        | {
            input: { param: { id: string } } & {
              json: {
                linkContactIds?: bigint[] | undefined
                linkDealsIds?: string[] | undefined
                unlinkContactIds?: bigint[] | undefined
                unlinkDealsIds?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { id: string } } & {
              json: {
                linkContactIds?: bigint[] | undefined
                linkDealsIds?: string[] | undefined
                unlinkContactIds?: bigint[] | undefined
                unlinkDealsIds?: string[] | undefined
              }
            }
            output: {
              code:
                | 'invalid_parameter'
                | 'missing_parameter'
                | 'out_of_range'
                | 'campaign_processing'
                | 'campaign_sent'
                | 'document_not_found'
                | 'not_enough_credits'
                | 'permission_denied'
                | 'duplicate_parameter'
                | 'duplicate_request'
                | 'method_not_allowed'
                | 'unauthorized'
                | 'account_under_validation'
                | 'not_acceptable'
                | 'bad_request'
                | 'unprocessable_entity'
                | 'Domain does not exist'
                | 'Contact email not found'
                | 'Attribute not found'
                | 'Category id not found'
                | 'Invalid parameters passed'
                | 'Record(s) for identifier not found'
                | 'Returned when query params are invalid'
                | 'Returned when invalid data posted'
                | 'Feed not found'
                | 'Campaign ID not found'
                | 'api-key not found'
                | 'DMARC policy requires domain authentication'
                | 'DNS records not properly configured'
                | 'Invalid OTP code provided'
                | 'OTP code has expired'
                | 'Domain already exists in your account'
                | 'The sum of all IP weights must equal 100'
                | 'Authentication failed'
                | 'Insufficient credits'
                | 'Request already processed'
              message: string
            }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/companies/:id': {
      $delete:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { id: string } }
            output: {
              code:
                | 'invalid_parameter'
                | 'missing_parameter'
                | 'out_of_range'
                | 'campaign_processing'
                | 'campaign_sent'
                | 'document_not_found'
                | 'not_enough_credits'
                | 'permission_denied'
                | 'duplicate_parameter'
                | 'duplicate_request'
                | 'method_not_allowed'
                | 'unauthorized'
                | 'account_under_validation'
                | 'not_acceptable'
                | 'bad_request'
                | 'unprocessable_entity'
                | 'Domain does not exist'
                | 'Contact email not found'
                | 'Attribute not found'
                | 'Category id not found'
                | 'Invalid parameters passed'
                | 'Record(s) for identifier not found'
                | 'Returned when query params are invalid'
                | 'Returned when invalid data posted'
                | 'Feed not found'
                | 'Campaign ID not found'
                | 'api-key not found'
                | 'DMARC policy requires domain authentication'
                | 'DNS records not properly configured'
                | 'Invalid OTP code provided'
                | 'OTP code has expired'
                | 'Domain already exists in your account'
                | 'The sum of all IP weights must equal 100'
                | 'Authentication failed'
                | 'Insufficient credits'
                | 'Request already processed'
              message: string
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
      $get:
        | { input: { param: { id: string } }; output: Company; outputFormat: 'json'; status: 200 }
        | {
            input: { param: { id: string } }
            output: {
              code:
                | 'invalid_parameter'
                | 'missing_parameter'
                | 'out_of_range'
                | 'campaign_processing'
                | 'campaign_sent'
                | 'document_not_found'
                | 'not_enough_credits'
                | 'permission_denied'
                | 'duplicate_parameter'
                | 'duplicate_request'
                | 'method_not_allowed'
                | 'unauthorized'
                | 'account_under_validation'
                | 'not_acceptable'
                | 'bad_request'
                | 'unprocessable_entity'
                | 'Domain does not exist'
                | 'Contact email not found'
                | 'Attribute not found'
                | 'Category id not found'
                | 'Invalid parameters passed'
                | 'Record(s) for identifier not found'
                | 'Returned when query params are invalid'
                | 'Returned when invalid data posted'
                | 'Feed not found'
                | 'Campaign ID not found'
                | 'api-key not found'
                | 'DMARC policy requires domain authentication'
                | 'DNS records not properly configured'
                | 'Invalid OTP code provided'
                | 'OTP code has expired'
                | 'Domain already exists in your account'
                | 'The sum of all IP weights must equal 100'
                | 'Authentication failed'
                | 'Insufficient credits'
                | 'Request already processed'
              message: string
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
      $patch:
        | {
            input: { param: { id: string } } & {
              json: {
                attributes?: { [x: string]: unknown } | undefined
                countryCode?: bigint | undefined
                linkedContactsIds?: bigint[] | undefined
                linkedDealsIds?: string[] | undefined
                name?: string | undefined
              }
            }
            output: Company
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              json: {
                attributes?: { [x: string]: unknown } | undefined
                countryCode?: bigint | undefined
                linkedContactsIds?: bigint[] | undefined
                linkedDealsIds?: string[] | undefined
                name?: string | undefined
              }
            }
            output: {
              code:
                | 'invalid_parameter'
                | 'missing_parameter'
                | 'out_of_range'
                | 'campaign_processing'
                | 'campaign_sent'
                | 'document_not_found'
                | 'not_enough_credits'
                | 'permission_denied'
                | 'duplicate_parameter'
                | 'duplicate_request'
                | 'method_not_allowed'
                | 'unauthorized'
                | 'account_under_validation'
                | 'not_acceptable'
                | 'bad_request'
                | 'unprocessable_entity'
                | 'Domain does not exist'
                | 'Contact email not found'
                | 'Attribute not found'
                | 'Category id not found'
                | 'Invalid parameters passed'
                | 'Record(s) for identifier not found'
                | 'Returned when query params are invalid'
                | 'Returned when invalid data posted'
                | 'Feed not found'
                | 'Campaign ID not found'
                | 'api-key not found'
                | 'DMARC policy requires domain authentication'
                | 'DNS records not properly configured'
                | 'Invalid OTP code provided'
                | 'OTP code has expired'
                | 'Domain already exists in your account'
                | 'The sum of all IP weights must equal 100'
                | 'Authentication failed'
                | 'Insufficient credits'
                | 'Request already processed'
              message: string
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              json: {
                attributes?: { [x: string]: unknown } | undefined
                countryCode?: bigint | undefined
                linkedContactsIds?: bigint[] | undefined
                linkedDealsIds?: string[] | undefined
                name?: string | undefined
              }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/crm/attributes': {
      $post:
        | {
            input: {
              json: {
                attributeType:
                  | 'text'
                  | 'user'
                  | 'number'
                  | 'single-select'
                  | 'date'
                  | 'boolean'
                  | 'multi-choice'
                description?: string | undefined
                label: string
                objectType: 'companies' | 'deals'
                optionsLabels?: string[] | undefined
              }
            }
            output: { id: string }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                attributeType:
                  | 'text'
                  | 'user'
                  | 'number'
                  | 'single-select'
                  | 'date'
                  | 'boolean'
                  | 'multi-choice'
                description?: string | undefined
                label: string
                objectType: 'companies' | 'deals'
                optionsLabels?: string[] | undefined
              }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/crm/attributes/:id': {
      $delete:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { id: string } }
            output: {
              code:
                | 'invalid_parameter'
                | 'missing_parameter'
                | 'out_of_range'
                | 'campaign_processing'
                | 'campaign_sent'
                | 'document_not_found'
                | 'not_enough_credits'
                | 'permission_denied'
                | 'duplicate_parameter'
                | 'duplicate_request'
                | 'method_not_allowed'
                | 'unauthorized'
                | 'account_under_validation'
                | 'not_acceptable'
                | 'bad_request'
                | 'unprocessable_entity'
                | 'Domain does not exist'
                | 'Contact email not found'
                | 'Attribute not found'
                | 'Category id not found'
                | 'Invalid parameters passed'
                | 'Record(s) for identifier not found'
                | 'Returned when query params are invalid'
                | 'Returned when invalid data posted'
                | 'Feed not found'
                | 'Campaign ID not found'
                | 'api-key not found'
                | 'DMARC policy requires domain authentication'
                | 'DNS records not properly configured'
                | 'Invalid OTP code provided'
                | 'OTP code has expired'
                | 'Domain already exists in your account'
                | 'The sum of all IP weights must equal 100'
                | 'Authentication failed'
                | 'Insufficient credits'
                | 'Request already processed'
              message: string
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } }
            output: {
              code:
                | 'invalid_parameter'
                | 'missing_parameter'
                | 'out_of_range'
                | 'campaign_processing'
                | 'campaign_sent'
                | 'document_not_found'
                | 'not_enough_credits'
                | 'permission_denied'
                | 'duplicate_parameter'
                | 'duplicate_request'
                | 'method_not_allowed'
                | 'unauthorized'
                | 'account_under_validation'
                | 'not_acceptable'
                | 'bad_request'
                | 'unprocessable_entity'
                | 'Domain does not exist'
                | 'Contact email not found'
                | 'Attribute not found'
                | 'Category id not found'
                | 'Invalid parameters passed'
                | 'Record(s) for identifier not found'
                | 'Returned when query params are invalid'
                | 'Returned when invalid data posted'
                | 'Feed not found'
                | 'Campaign ID not found'
                | 'api-key not found'
                | 'DMARC policy requires domain authentication'
                | 'DNS records not properly configured'
                | 'Invalid OTP code provided'
                | 'OTP code has expired'
                | 'Domain already exists in your account'
                | 'The sum of all IP weights must equal 100'
                | 'Authentication failed'
                | 'Insufficient credits'
                | 'Request already processed'
              message: string
            }
            outputFormat: 'json'
            status: 404
          }
      $patch:
        | {
            input: { param: { id: string } } & {
              json: {
                label?: string | undefined
                optionsLabels?: { key: string; value: string }[] | undefined
                objectType?: 'companies' | 'deals' | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { id: string } } & {
              json: {
                label?: string | undefined
                optionsLabels?: { key: string; value: string }[] | undefined
                objectType?: 'companies' | 'deals' | undefined
              }
            }
            output: {
              code:
                | 'invalid_parameter'
                | 'missing_parameter'
                | 'out_of_range'
                | 'campaign_processing'
                | 'campaign_sent'
                | 'document_not_found'
                | 'not_enough_credits'
                | 'permission_denied'
                | 'duplicate_parameter'
                | 'duplicate_request'
                | 'method_not_allowed'
                | 'unauthorized'
                | 'account_under_validation'
                | 'not_acceptable'
                | 'bad_request'
                | 'unprocessable_entity'
                | 'Domain does not exist'
                | 'Contact email not found'
                | 'Attribute not found'
                | 'Category id not found'
                | 'Invalid parameters passed'
                | 'Record(s) for identifier not found'
                | 'Returned when query params are invalid'
                | 'Returned when invalid data posted'
                | 'Feed not found'
                | 'Campaign ID not found'
                | 'api-key not found'
                | 'DMARC policy requires domain authentication'
                | 'DNS records not properly configured'
                | 'Invalid OTP code provided'
                | 'OTP code has expired'
                | 'Domain already exists in your account'
                | 'The sum of all IP weights must equal 100'
                | 'Authentication failed'
                | 'Insufficient credits'
                | 'Request already processed'
              message: string
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              json: {
                label?: string | undefined
                optionsLabels?: { key: string; value: string }[] | undefined
                objectType?: 'companies' | 'deals' | undefined
              }
            }
            output: {
              code:
                | 'invalid_parameter'
                | 'missing_parameter'
                | 'out_of_range'
                | 'campaign_processing'
                | 'campaign_sent'
                | 'document_not_found'
                | 'not_enough_credits'
                | 'permission_denied'
                | 'duplicate_parameter'
                | 'duplicate_request'
                | 'method_not_allowed'
                | 'unauthorized'
                | 'account_under_validation'
                | 'not_acceptable'
                | 'bad_request'
                | 'unprocessable_entity'
                | 'Domain does not exist'
                | 'Contact email not found'
                | 'Attribute not found'
                | 'Category id not found'
                | 'Invalid parameters passed'
                | 'Record(s) for identifier not found'
                | 'Returned when query params are invalid'
                | 'Returned when invalid data posted'
                | 'Feed not found'
                | 'Campaign ID not found'
                | 'api-key not found'
                | 'DMARC policy requires domain authentication'
                | 'DNS records not properly configured'
                | 'Invalid OTP code provided'
                | 'OTP code has expired'
                | 'Domain already exists in your account'
                | 'The sum of all IP weights must equal 100'
                | 'Authentication failed'
                | 'Insufficient credits'
                | 'Request already processed'
              message: string
            }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/crm/attributes/companies': {
      $get:
        | {
            input: {}
            output: {
              internalName?: string | undefined
              attributeTypeName?: string | undefined
              label?: string | undefined
              attributeOptions?:
                | { key?: string | undefined; value?: string | undefined }[]
                | undefined
              isRequired?: boolean | undefined
              isValueReadonly?: boolean | undefined
            }[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {}
            output: {
              code:
                | 'invalid_parameter'
                | 'missing_parameter'
                | 'out_of_range'
                | 'campaign_processing'
                | 'campaign_sent'
                | 'document_not_found'
                | 'not_enough_credits'
                | 'permission_denied'
                | 'duplicate_parameter'
                | 'duplicate_request'
                | 'method_not_allowed'
                | 'unauthorized'
                | 'account_under_validation'
                | 'not_acceptable'
                | 'bad_request'
                | 'unprocessable_entity'
                | 'Domain does not exist'
                | 'Contact email not found'
                | 'Attribute not found'
                | 'Category id not found'
                | 'Invalid parameters passed'
                | 'Record(s) for identifier not found'
                | 'Returned when query params are invalid'
                | 'Returned when invalid data posted'
                | 'Feed not found'
                | 'Campaign ID not found'
                | 'api-key not found'
                | 'DMARC policy requires domain authentication'
                | 'DNS records not properly configured'
                | 'Invalid OTP code provided'
                | 'OTP code has expired'
                | 'Domain already exists in your account'
                | 'The sum of all IP weights must equal 100'
                | 'Authentication failed'
                | 'Insufficient credits'
                | 'Request already processed'
              message: string
            }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/crm/attributes/deals': {
      $get:
        | {
            input: {}
            output: {
              internalName?: string | undefined
              attributeTypeName?: string | undefined
              label?: string | undefined
              attributeOptions?:
                | { key?: string | undefined; value?: string | undefined }[]
                | undefined
              isRequired?: boolean | undefined
              isValueReadonly?: boolean | undefined
            }[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {}
            output: {
              code:
                | 'invalid_parameter'
                | 'missing_parameter'
                | 'out_of_range'
                | 'campaign_processing'
                | 'campaign_sent'
                | 'document_not_found'
                | 'not_enough_credits'
                | 'permission_denied'
                | 'duplicate_parameter'
                | 'duplicate_request'
                | 'method_not_allowed'
                | 'unauthorized'
                | 'account_under_validation'
                | 'not_acceptable'
                | 'bad_request'
                | 'unprocessable_entity'
                | 'Domain does not exist'
                | 'Contact email not found'
                | 'Attribute not found'
                | 'Category id not found'
                | 'Invalid parameters passed'
                | 'Record(s) for identifier not found'
                | 'Returned when query params are invalid'
                | 'Returned when invalid data posted'
                | 'Feed not found'
                | 'Campaign ID not found'
                | 'api-key not found'
                | 'DMARC policy requires domain authentication'
                | 'DNS records not properly configured'
                | 'Invalid OTP code provided'
                | 'OTP code has expired'
                | 'Domain already exists in your account'
                | 'The sum of all IP weights must equal 100'
                | 'Authentication failed'
                | 'Insufficient credits'
                | 'Request already processed'
              message: string
            }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/crm/deals': {
      $get:
        | {
            input: {
              query: {
                'filters[attributes.deal_name]'?: string | undefined
                'filters[attributes.deal_owner]'?: string | undefined
                'filters[attributes.deal_stage]'?: string | undefined
                'filters[attributes.pipeline]'?: string | undefined
                'filters[linkedCompaniesIds]'?: string | undefined
                'filters[linkedContactsIds]'?: string | undefined
                modifiedSince?: string | undefined
                createdSince?: string | undefined
                offset?: bigint | undefined
                limit?: bigint | undefined
                sort?: 'asc' | 'desc' | undefined
                sortBy?: string | undefined
              }
            }
            output: { items?: Deal[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                'filters[attributes.deal_name]'?: string | undefined
                'filters[attributes.deal_owner]'?: string | undefined
                'filters[attributes.deal_stage]'?: string | undefined
                'filters[attributes.pipeline]'?: string | undefined
                'filters[linkedCompaniesIds]'?: string | undefined
                'filters[linkedContactsIds]'?: string | undefined
                modifiedSince?: string | undefined
                createdSince?: string | undefined
                offset?: bigint | undefined
                limit?: bigint | undefined
                sort?: 'asc' | 'desc' | undefined
                sortBy?: string | undefined
              }
            }
            output: {
              code:
                | 'invalid_parameter'
                | 'missing_parameter'
                | 'out_of_range'
                | 'campaign_processing'
                | 'campaign_sent'
                | 'document_not_found'
                | 'not_enough_credits'
                | 'permission_denied'
                | 'duplicate_parameter'
                | 'duplicate_request'
                | 'method_not_allowed'
                | 'unauthorized'
                | 'account_under_validation'
                | 'not_acceptable'
                | 'bad_request'
                | 'unprocessable_entity'
                | 'Domain does not exist'
                | 'Contact email not found'
                | 'Attribute not found'
                | 'Category id not found'
                | 'Invalid parameters passed'
                | 'Record(s) for identifier not found'
                | 'Returned when query params are invalid'
                | 'Returned when invalid data posted'
                | 'Feed not found'
                | 'Campaign ID not found'
                | 'api-key not found'
                | 'DMARC policy requires domain authentication'
                | 'DNS records not properly configured'
                | 'Invalid OTP code provided'
                | 'OTP code has expired'
                | 'Domain already exists in your account'
                | 'The sum of all IP weights must equal 100'
                | 'Authentication failed'
                | 'Insufficient credits'
                | 'Request already processed'
              message: string
            }
            outputFormat: 'json'
            status: 400
          }
      $post:
        | {
            input: {
              json: {
                attributes?: { [x: string]: unknown } | undefined
                linkedCompaniesIds?: string[] | undefined
                linkedContactsIds?: bigint[] | undefined
                name: string
              }
            }
            output: { id: string }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              json: {
                attributes?: { [x: string]: unknown } | undefined
                linkedCompaniesIds?: string[] | undefined
                linkedContactsIds?: bigint[] | undefined
                name: string
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/crm/deals/import': {
      $post:
        | {
            input: {
              form: { file?: File | undefined; mapping?: { [x: string]: unknown } | undefined }
            }
            output: { processId?: number | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              form: { file?: File | undefined; mapping?: { [x: string]: unknown } | undefined }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/crm/deals/link-unlink/:id': {
      $patch:
        | {
            input: { param: { id: string } } & {
              json: {
                linkCompanyIds?: string[] | undefined
                linkContactIds?: bigint[] | undefined
                unlinkCompanyIds?: string[] | undefined
                unlinkContactIds?: bigint[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { id: string } } & {
              json: {
                linkCompanyIds?: string[] | undefined
                linkContactIds?: bigint[] | undefined
                unlinkCompanyIds?: string[] | undefined
                unlinkContactIds?: bigint[] | undefined
              }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/crm/deals/:id': {
      $delete:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { id: string } }
            output: {
              code:
                | 'invalid_parameter'
                | 'missing_parameter'
                | 'out_of_range'
                | 'campaign_processing'
                | 'campaign_sent'
                | 'document_not_found'
                | 'not_enough_credits'
                | 'permission_denied'
                | 'duplicate_parameter'
                | 'duplicate_request'
                | 'method_not_allowed'
                | 'unauthorized'
                | 'account_under_validation'
                | 'not_acceptable'
                | 'bad_request'
                | 'unprocessable_entity'
                | 'Domain does not exist'
                | 'Contact email not found'
                | 'Attribute not found'
                | 'Category id not found'
                | 'Invalid parameters passed'
                | 'Record(s) for identifier not found'
                | 'Returned when query params are invalid'
                | 'Returned when invalid data posted'
                | 'Feed not found'
                | 'Campaign ID not found'
                | 'api-key not found'
                | 'DMARC policy requires domain authentication'
                | 'DNS records not properly configured'
                | 'Invalid OTP code provided'
                | 'OTP code has expired'
                | 'Domain already exists in your account'
                | 'The sum of all IP weights must equal 100'
                | 'Authentication failed'
                | 'Insufficient credits'
                | 'Request already processed'
              message: string
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
      $get:
        | { input: { param: { id: string } }; output: Deal; outputFormat: 'json'; status: 200 }
        | {
            input: { param: { id: string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
      $patch:
        | {
            input: { param: { id: string } } & {
              json: {
                attributes?: { [x: string]: unknown } | undefined
                linkedCompaniesIds?: string[] | undefined
                linkedContactsIds?: bigint[] | undefined
                name?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { id: string } } & {
              json: {
                attributes?: { [x: string]: unknown } | undefined
                linkedCompaniesIds?: string[] | undefined
                linkedContactsIds?: bigint[] | undefined
                name?: string | undefined
              }
            }
            output: {
              code:
                | 'invalid_parameter'
                | 'missing_parameter'
                | 'out_of_range'
                | 'campaign_processing'
                | 'campaign_sent'
                | 'document_not_found'
                | 'not_enough_credits'
                | 'permission_denied'
                | 'duplicate_parameter'
                | 'duplicate_request'
                | 'method_not_allowed'
                | 'unauthorized'
                | 'account_under_validation'
                | 'not_acceptable'
                | 'bad_request'
                | 'unprocessable_entity'
                | 'Domain does not exist'
                | 'Contact email not found'
                | 'Attribute not found'
                | 'Category id not found'
                | 'Invalid parameters passed'
                | 'Record(s) for identifier not found'
                | 'Returned when query params are invalid'
                | 'Returned when invalid data posted'
                | 'Feed not found'
                | 'Campaign ID not found'
                | 'api-key not found'
                | 'DMARC policy requires domain authentication'
                | 'DNS records not properly configured'
                | 'Invalid OTP code provided'
                | 'OTP code has expired'
                | 'Domain already exists in your account'
                | 'The sum of all IP weights must equal 100'
                | 'Authentication failed'
                | 'Insufficient credits'
                | 'Request already processed'
              message: string
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              json: {
                attributes?: { [x: string]: unknown } | undefined
                linkedCompaniesIds?: string[] | undefined
                linkedContactsIds?: bigint[] | undefined
                name?: string | undefined
              }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/crm/files': {
      $get:
        | {
            input: {
              query: {
                entity?: 'companies' | 'deals' | 'contacts' | undefined
                entityIds?: string | undefined
                dateFrom?: number | undefined
                dateTo?: number | undefined
                offset?: bigint | undefined
                limit?: bigint | undefined
                sort?: 'asc' | 'desc' | undefined
              }
            }
            output: FileData[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                entity?: 'companies' | 'deals' | 'contacts' | undefined
                entityIds?: string | undefined
                dateFrom?: number | undefined
                dateTo?: number | undefined
                offset?: bigint | undefined
                limit?: bigint | undefined
                sort?: 'asc' | 'desc' | undefined
              }
            }
            output: {
              code:
                | 'invalid_parameter'
                | 'missing_parameter'
                | 'out_of_range'
                | 'campaign_processing'
                | 'campaign_sent'
                | 'document_not_found'
                | 'not_enough_credits'
                | 'permission_denied'
                | 'duplicate_parameter'
                | 'duplicate_request'
                | 'method_not_allowed'
                | 'unauthorized'
                | 'account_under_validation'
                | 'not_acceptable'
                | 'bad_request'
                | 'unprocessable_entity'
                | 'Domain does not exist'
                | 'Contact email not found'
                | 'Attribute not found'
                | 'Category id not found'
                | 'Invalid parameters passed'
                | 'Record(s) for identifier not found'
                | 'Returned when query params are invalid'
                | 'Returned when invalid data posted'
                | 'Feed not found'
                | 'Campaign ID not found'
                | 'api-key not found'
                | 'DMARC policy requires domain authentication'
                | 'DNS records not properly configured'
                | 'Invalid OTP code provided'
                | 'OTP code has expired'
                | 'Domain already exists in your account'
                | 'The sum of all IP weights must equal 100'
                | 'Authentication failed'
                | 'Insufficient credits'
                | 'Request already processed'
              message: string
            }
            outputFormat: 'json'
            status: 400
          }
      $post:
        | {
            input: {
              form: {
                companyId?: string | undefined
                contactId?: bigint | undefined
                dealId?: string | undefined
                file: File
              }
            }
            output: FileData
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              form: {
                companyId?: string | undefined
                contactId?: bigint | undefined
                dealId?: string | undefined
                file: File
              }
            }
            output: {
              code:
                | 'invalid_parameter'
                | 'missing_parameter'
                | 'out_of_range'
                | 'campaign_processing'
                | 'campaign_sent'
                | 'document_not_found'
                | 'not_enough_credits'
                | 'permission_denied'
                | 'duplicate_parameter'
                | 'duplicate_request'
                | 'method_not_allowed'
                | 'unauthorized'
                | 'account_under_validation'
                | 'not_acceptable'
                | 'bad_request'
                | 'unprocessable_entity'
                | 'Domain does not exist'
                | 'Contact email not found'
                | 'Attribute not found'
                | 'Category id not found'
                | 'Invalid parameters passed'
                | 'Record(s) for identifier not found'
                | 'Returned when query params are invalid'
                | 'Returned when invalid data posted'
                | 'Feed not found'
                | 'Campaign ID not found'
                | 'api-key not found'
                | 'DMARC policy requires domain authentication'
                | 'DNS records not properly configured'
                | 'Invalid OTP code provided'
                | 'OTP code has expired'
                | 'Domain already exists in your account'
                | 'The sum of all IP weights must equal 100'
                | 'Authentication failed'
                | 'Insufficient credits'
                | 'Request already processed'
              message: string
            }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/crm/files/:id': {
      $delete:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { id: string } }
            output: {
              code:
                | 'invalid_parameter'
                | 'missing_parameter'
                | 'out_of_range'
                | 'campaign_processing'
                | 'campaign_sent'
                | 'document_not_found'
                | 'not_enough_credits'
                | 'permission_denied'
                | 'duplicate_parameter'
                | 'duplicate_request'
                | 'method_not_allowed'
                | 'unauthorized'
                | 'account_under_validation'
                | 'not_acceptable'
                | 'bad_request'
                | 'unprocessable_entity'
                | 'Domain does not exist'
                | 'Contact email not found'
                | 'Attribute not found'
                | 'Category id not found'
                | 'Invalid parameters passed'
                | 'Record(s) for identifier not found'
                | 'Returned when query params are invalid'
                | 'Returned when invalid data posted'
                | 'Feed not found'
                | 'Campaign ID not found'
                | 'api-key not found'
                | 'DMARC policy requires domain authentication'
                | 'DNS records not properly configured'
                | 'Invalid OTP code provided'
                | 'OTP code has expired'
                | 'Domain already exists in your account'
                | 'The sum of all IP weights must equal 100'
                | 'Authentication failed'
                | 'Insufficient credits'
                | 'Request already processed'
              message: string
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
      $get:
        | {
            input: { param: { id: string } }
            output: { fileUrl?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: {
              code:
                | 'invalid_parameter'
                | 'missing_parameter'
                | 'out_of_range'
                | 'campaign_processing'
                | 'campaign_sent'
                | 'document_not_found'
                | 'not_enough_credits'
                | 'permission_denied'
                | 'duplicate_parameter'
                | 'duplicate_request'
                | 'method_not_allowed'
                | 'unauthorized'
                | 'account_under_validation'
                | 'not_acceptable'
                | 'bad_request'
                | 'unprocessable_entity'
                | 'Domain does not exist'
                | 'Contact email not found'
                | 'Attribute not found'
                | 'Category id not found'
                | 'Invalid parameters passed'
                | 'Record(s) for identifier not found'
                | 'Returned when query params are invalid'
                | 'Returned when invalid data posted'
                | 'Feed not found'
                | 'Campaign ID not found'
                | 'api-key not found'
                | 'DMARC policy requires domain authentication'
                | 'DNS records not properly configured'
                | 'Invalid OTP code provided'
                | 'OTP code has expired'
                | 'Domain already exists in your account'
                | 'The sum of all IP weights must equal 100'
                | 'Authentication failed'
                | 'Insufficient credits'
                | 'Request already processed'
              message: string
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/crm/files/:id/data': {
      $get:
        | { input: { param: { id: string } }; output: FileData; outputFormat: 'json'; status: 200 }
        | {
            input: { param: { id: string } }
            output: {
              code:
                | 'invalid_parameter'
                | 'missing_parameter'
                | 'out_of_range'
                | 'campaign_processing'
                | 'campaign_sent'
                | 'document_not_found'
                | 'not_enough_credits'
                | 'permission_denied'
                | 'duplicate_parameter'
                | 'duplicate_request'
                | 'method_not_allowed'
                | 'unauthorized'
                | 'account_under_validation'
                | 'not_acceptable'
                | 'bad_request'
                | 'unprocessable_entity'
                | 'Domain does not exist'
                | 'Contact email not found'
                | 'Attribute not found'
                | 'Category id not found'
                | 'Invalid parameters passed'
                | 'Record(s) for identifier not found'
                | 'Returned when query params are invalid'
                | 'Returned when invalid data posted'
                | 'Feed not found'
                | 'Campaign ID not found'
                | 'api-key not found'
                | 'DMARC policy requires domain authentication'
                | 'DNS records not properly configured'
                | 'Invalid OTP code provided'
                | 'OTP code has expired'
                | 'Domain already exists in your account'
                | 'The sum of all IP weights must equal 100'
                | 'Authentication failed'
                | 'Insufficient credits'
                | 'Request already processed'
              message: string
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/crm/notes': {
      $get:
        | {
            input: {
              query: {
                entity?: 'companies' | 'deals' | 'contacts' | undefined
                entityIds?: string | undefined
                dateFrom?: number | undefined
                dateTo?: number | undefined
                offset?: bigint | undefined
                limit?: bigint | undefined
                sort?: 'asc' | 'desc' | undefined
              }
            }
            output: Note[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                entity?: 'companies' | 'deals' | 'contacts' | undefined
                entityIds?: string | undefined
                dateFrom?: number | undefined
                dateTo?: number | undefined
                offset?: bigint | undefined
                limit?: bigint | undefined
                sort?: 'asc' | 'desc' | undefined
              }
            }
            output: {
              code:
                | 'invalid_parameter'
                | 'missing_parameter'
                | 'out_of_range'
                | 'campaign_processing'
                | 'campaign_sent'
                | 'document_not_found'
                | 'not_enough_credits'
                | 'permission_denied'
                | 'duplicate_parameter'
                | 'duplicate_request'
                | 'method_not_allowed'
                | 'unauthorized'
                | 'account_under_validation'
                | 'not_acceptable'
                | 'bad_request'
                | 'unprocessable_entity'
                | 'Domain does not exist'
                | 'Contact email not found'
                | 'Attribute not found'
                | 'Category id not found'
                | 'Invalid parameters passed'
                | 'Record(s) for identifier not found'
                | 'Returned when query params are invalid'
                | 'Returned when invalid data posted'
                | 'Feed not found'
                | 'Campaign ID not found'
                | 'api-key not found'
                | 'DMARC policy requires domain authentication'
                | 'DNS records not properly configured'
                | 'Invalid OTP code provided'
                | 'OTP code has expired'
                | 'Domain already exists in your account'
                | 'The sum of all IP weights must equal 100'
                | 'Authentication failed'
                | 'Insufficient credits'
                | 'Request already processed'
              message: string
            }
            outputFormat: 'json'
            status: 400
          }
      $post:
        | {
            input: { json: NoteData }
            output: { id?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: NoteData }
            output: {
              code:
                | 'invalid_parameter'
                | 'missing_parameter'
                | 'out_of_range'
                | 'campaign_processing'
                | 'campaign_sent'
                | 'document_not_found'
                | 'not_enough_credits'
                | 'permission_denied'
                | 'duplicate_parameter'
                | 'duplicate_request'
                | 'method_not_allowed'
                | 'unauthorized'
                | 'account_under_validation'
                | 'not_acceptable'
                | 'bad_request'
                | 'unprocessable_entity'
                | 'Domain does not exist'
                | 'Contact email not found'
                | 'Attribute not found'
                | 'Category id not found'
                | 'Invalid parameters passed'
                | 'Record(s) for identifier not found'
                | 'Returned when query params are invalid'
                | 'Returned when invalid data posted'
                | 'Feed not found'
                | 'Campaign ID not found'
                | 'api-key not found'
                | 'DMARC policy requires domain authentication'
                | 'DNS records not properly configured'
                | 'Invalid OTP code provided'
                | 'OTP code has expired'
                | 'Domain already exists in your account'
                | 'The sum of all IP weights must equal 100'
                | 'Authentication failed'
                | 'Insufficient credits'
                | 'Request already processed'
              message: string
            }
            outputFormat: 'json'
            status: 400
          }
        | { input: { json: NoteData }; output: ErrorModel; outputFormat: 'json'; status: 415 }
    }
  } & {
    '/crm/notes/:id': {
      $delete:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { id: string } }
            output: {
              code:
                | 'invalid_parameter'
                | 'missing_parameter'
                | 'out_of_range'
                | 'campaign_processing'
                | 'campaign_sent'
                | 'document_not_found'
                | 'not_enough_credits'
                | 'permission_denied'
                | 'duplicate_parameter'
                | 'duplicate_request'
                | 'method_not_allowed'
                | 'unauthorized'
                | 'account_under_validation'
                | 'not_acceptable'
                | 'bad_request'
                | 'unprocessable_entity'
                | 'Domain does not exist'
                | 'Contact email not found'
                | 'Attribute not found'
                | 'Category id not found'
                | 'Invalid parameters passed'
                | 'Record(s) for identifier not found'
                | 'Returned when query params are invalid'
                | 'Returned when invalid data posted'
                | 'Feed not found'
                | 'Campaign ID not found'
                | 'api-key not found'
                | 'DMARC policy requires domain authentication'
                | 'DNS records not properly configured'
                | 'Invalid OTP code provided'
                | 'OTP code has expired'
                | 'Domain already exists in your account'
                | 'The sum of all IP weights must equal 100'
                | 'Authentication failed'
                | 'Insufficient credits'
                | 'Request already processed'
              message: string
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
      $get:
        | { input: { param: { id: string } }; output: Note; outputFormat: 'json'; status: 200 }
        | {
            input: { param: { id: string } }
            output: {
              code:
                | 'invalid_parameter'
                | 'missing_parameter'
                | 'out_of_range'
                | 'campaign_processing'
                | 'campaign_sent'
                | 'document_not_found'
                | 'not_enough_credits'
                | 'permission_denied'
                | 'duplicate_parameter'
                | 'duplicate_request'
                | 'method_not_allowed'
                | 'unauthorized'
                | 'account_under_validation'
                | 'not_acceptable'
                | 'bad_request'
                | 'unprocessable_entity'
                | 'Domain does not exist'
                | 'Contact email not found'
                | 'Attribute not found'
                | 'Category id not found'
                | 'Invalid parameters passed'
                | 'Record(s) for identifier not found'
                | 'Returned when query params are invalid'
                | 'Returned when invalid data posted'
                | 'Feed not found'
                | 'Campaign ID not found'
                | 'api-key not found'
                | 'DMARC policy requires domain authentication'
                | 'DNS records not properly configured'
                | 'Invalid OTP code provided'
                | 'OTP code has expired'
                | 'Domain already exists in your account'
                | 'The sum of all IP weights must equal 100'
                | 'Authentication failed'
                | 'Insufficient credits'
                | 'Request already processed'
              message: string
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
      $patch:
        | {
            input: { param: { id: string } } & { json: NoteData }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { id: string } } & { json: NoteData }
            output: {
              code:
                | 'invalid_parameter'
                | 'missing_parameter'
                | 'out_of_range'
                | 'campaign_processing'
                | 'campaign_sent'
                | 'document_not_found'
                | 'not_enough_credits'
                | 'permission_denied'
                | 'duplicate_parameter'
                | 'duplicate_request'
                | 'method_not_allowed'
                | 'unauthorized'
                | 'account_under_validation'
                | 'not_acceptable'
                | 'bad_request'
                | 'unprocessable_entity'
                | 'Domain does not exist'
                | 'Contact email not found'
                | 'Attribute not found'
                | 'Category id not found'
                | 'Invalid parameters passed'
                | 'Record(s) for identifier not found'
                | 'Returned when query params are invalid'
                | 'Returned when invalid data posted'
                | 'Feed not found'
                | 'Campaign ID not found'
                | 'api-key not found'
                | 'DMARC policy requires domain authentication'
                | 'DNS records not properly configured'
                | 'Invalid OTP code provided'
                | 'OTP code has expired'
                | 'Domain already exists in your account'
                | 'The sum of all IP weights must equal 100'
                | 'Authentication failed'
                | 'Insufficient credits'
                | 'Request already processed'
              message: string
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: NoteData }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { json: NoteData }
            output: ErrorModel
            outputFormat: 'json'
            status: 415
          }
    }
  } & {
    '/crm/pipeline/details': {
      $get:
        | { input: {}; output: Pipeline; outputFormat: 'json'; status: 200 }
        | {
            input: {}
            output: {
              code:
                | 'invalid_parameter'
                | 'missing_parameter'
                | 'out_of_range'
                | 'campaign_processing'
                | 'campaign_sent'
                | 'document_not_found'
                | 'not_enough_credits'
                | 'permission_denied'
                | 'duplicate_parameter'
                | 'duplicate_request'
                | 'method_not_allowed'
                | 'unauthorized'
                | 'account_under_validation'
                | 'not_acceptable'
                | 'bad_request'
                | 'unprocessable_entity'
                | 'Domain does not exist'
                | 'Contact email not found'
                | 'Attribute not found'
                | 'Category id not found'
                | 'Invalid parameters passed'
                | 'Record(s) for identifier not found'
                | 'Returned when query params are invalid'
                | 'Returned when invalid data posted'
                | 'Feed not found'
                | 'Campaign ID not found'
                | 'api-key not found'
                | 'DMARC policy requires domain authentication'
                | 'DNS records not properly configured'
                | 'Invalid OTP code provided'
                | 'OTP code has expired'
                | 'Domain already exists in your account'
                | 'The sum of all IP weights must equal 100'
                | 'Authentication failed'
                | 'Insufficient credits'
                | 'Request already processed'
              message: string
            }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/crm/pipeline/details/all': {
      $get:
        | { input: {}; output: Pipelines; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ErrorModel; outputFormat: 'json'; status: 400 }
    }
  } & {
    '/crm/pipeline/details/:pipelineID': {
      $get:
        | {
            input: { param: { pipelineID: string } }
            output: Pipelines
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { pipelineID: string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/crm/tasks': {
      $get:
        | {
            input: {
              query: {
                'filter[type]'?: string | undefined
                'filter[status]'?: 'done' | 'undone' | undefined
                'filter[date]'?: 'overdue' | 'today' | 'tomorrow' | 'week' | 'range' | undefined
                'filter[assignTo]'?: string | undefined
                'filter[contacts]'?: string | undefined
                'filter[deals]'?: string | undefined
                'filter[companies]'?: string | undefined
                dateFrom?: number | undefined
                dateTo?: number | undefined
                offset?: bigint | undefined
                limit?: bigint | undefined
                sort?: 'asc' | 'desc' | undefined
                sortBy?: string | undefined
              }
            }
            output: { items?: Task[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                'filter[type]'?: string | undefined
                'filter[status]'?: 'done' | 'undone' | undefined
                'filter[date]'?: 'overdue' | 'today' | 'tomorrow' | 'week' | 'range' | undefined
                'filter[assignTo]'?: string | undefined
                'filter[contacts]'?: string | undefined
                'filter[deals]'?: string | undefined
                'filter[companies]'?: string | undefined
                dateFrom?: number | undefined
                dateTo?: number | undefined
                offset?: bigint | undefined
                limit?: bigint | undefined
                sort?: 'asc' | 'desc' | undefined
                sortBy?: string | undefined
              }
            }
            output: {
              code:
                | 'invalid_parameter'
                | 'missing_parameter'
                | 'out_of_range'
                | 'campaign_processing'
                | 'campaign_sent'
                | 'document_not_found'
                | 'not_enough_credits'
                | 'permission_denied'
                | 'duplicate_parameter'
                | 'duplicate_request'
                | 'method_not_allowed'
                | 'unauthorized'
                | 'account_under_validation'
                | 'not_acceptable'
                | 'bad_request'
                | 'unprocessable_entity'
                | 'Domain does not exist'
                | 'Contact email not found'
                | 'Attribute not found'
                | 'Category id not found'
                | 'Invalid parameters passed'
                | 'Record(s) for identifier not found'
                | 'Returned when query params are invalid'
                | 'Returned when invalid data posted'
                | 'Feed not found'
                | 'Campaign ID not found'
                | 'api-key not found'
                | 'DMARC policy requires domain authentication'
                | 'DNS records not properly configured'
                | 'Invalid OTP code provided'
                | 'OTP code has expired'
                | 'Domain already exists in your account'
                | 'The sum of all IP weights must equal 100'
                | 'Authentication failed'
                | 'Insufficient credits'
                | 'Request already processed'
              message: string
            }
            outputFormat: 'json'
            status: 400
          }
      $post:
        | {
            input: {
              json: {
                assignToId?: string | undefined
                companiesIds?: string[] | undefined
                contactsIds?: number[] | undefined
                date: string
                dealsIds?: string[] | undefined
                done?: boolean | undefined
                duration?: bigint | undefined
                name: string
                notes?: string | undefined
                reminder?: TaskReminder | undefined
                taskTypeId: string
              }
            }
            output: { id: string }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              json: {
                assignToId?: string | undefined
                companiesIds?: string[] | undefined
                contactsIds?: number[] | undefined
                date: string
                dealsIds?: string[] | undefined
                done?: boolean | undefined
                duration?: bigint | undefined
                name: string
                notes?: string | undefined
                reminder?: TaskReminder | undefined
                taskTypeId: string
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/crm/tasks/:id': {
      $delete:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { id: string } }
            output: {
              code:
                | 'invalid_parameter'
                | 'missing_parameter'
                | 'out_of_range'
                | 'campaign_processing'
                | 'campaign_sent'
                | 'document_not_found'
                | 'not_enough_credits'
                | 'permission_denied'
                | 'duplicate_parameter'
                | 'duplicate_request'
                | 'method_not_allowed'
                | 'unauthorized'
                | 'account_under_validation'
                | 'not_acceptable'
                | 'bad_request'
                | 'unprocessable_entity'
                | 'Domain does not exist'
                | 'Contact email not found'
                | 'Attribute not found'
                | 'Category id not found'
                | 'Invalid parameters passed'
                | 'Record(s) for identifier not found'
                | 'Returned when query params are invalid'
                | 'Returned when invalid data posted'
                | 'Feed not found'
                | 'Campaign ID not found'
                | 'api-key not found'
                | 'DMARC policy requires domain authentication'
                | 'DNS records not properly configured'
                | 'Invalid OTP code provided'
                | 'OTP code has expired'
                | 'Domain already exists in your account'
                | 'The sum of all IP weights must equal 100'
                | 'Authentication failed'
                | 'Insufficient credits'
                | 'Request already processed'
              message: string
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
      $get:
        | { input: { param: { id: string } }; output: Task; outputFormat: 'json'; status: 200 }
        | {
            input: { param: { id: string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
      $patch:
        | {
            input: { param: { id: string } } & {
              json: {
                assignToId?: string | undefined
                companiesIds?: string[] | undefined
                contactsIds?: number[] | undefined
                date?: string | undefined
                dealsIds?: string[] | undefined
                done?: boolean | undefined
                duration?: bigint | undefined
                name?: string | undefined
                notes?: string | undefined
                reminder?: TaskReminder | undefined
                taskTypeId?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { id: string } } & {
              json: {
                assignToId?: string | undefined
                companiesIds?: string[] | undefined
                contactsIds?: number[] | undefined
                date?: string | undefined
                dealsIds?: string[] | undefined
                done?: boolean | undefined
                duration?: bigint | undefined
                name?: string | undefined
                notes?: string | undefined
                reminder?: TaskReminder | undefined
                taskTypeId?: string | undefined
              }
            }
            output: {
              code:
                | 'invalid_parameter'
                | 'missing_parameter'
                | 'out_of_range'
                | 'campaign_processing'
                | 'campaign_sent'
                | 'document_not_found'
                | 'not_enough_credits'
                | 'permission_denied'
                | 'duplicate_parameter'
                | 'duplicate_request'
                | 'method_not_allowed'
                | 'unauthorized'
                | 'account_under_validation'
                | 'not_acceptable'
                | 'bad_request'
                | 'unprocessable_entity'
                | 'Domain does not exist'
                | 'Contact email not found'
                | 'Attribute not found'
                | 'Category id not found'
                | 'Invalid parameters passed'
                | 'Record(s) for identifier not found'
                | 'Returned when query params are invalid'
                | 'Returned when invalid data posted'
                | 'Feed not found'
                | 'Campaign ID not found'
                | 'api-key not found'
                | 'DMARC policy requires domain authentication'
                | 'DNS records not properly configured'
                | 'Invalid OTP code provided'
                | 'OTP code has expired'
                | 'Domain already exists in your account'
                | 'The sum of all IP weights must equal 100'
                | 'Authentication failed'
                | 'Insufficient credits'
                | 'Request already processed'
              message: string
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              json: {
                assignToId?: string | undefined
                companiesIds?: string[] | undefined
                contactsIds?: number[] | undefined
                date?: string | undefined
                dealsIds?: string[] | undefined
                done?: boolean | undefined
                duration?: bigint | undefined
                name?: string | undefined
                notes?: string | undefined
                reminder?: TaskReminder | undefined
                taskTypeId?: string | undefined
              }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/crm/tasktypes': {
      $get:
        | {
            input: {}
            output: { id?: string | undefined; title?: string | undefined }[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {}
            output: {
              code:
                | 'invalid_parameter'
                | 'missing_parameter'
                | 'out_of_range'
                | 'campaign_processing'
                | 'campaign_sent'
                | 'document_not_found'
                | 'not_enough_credits'
                | 'permission_denied'
                | 'duplicate_parameter'
                | 'duplicate_request'
                | 'method_not_allowed'
                | 'unauthorized'
                | 'account_under_validation'
                | 'not_acceptable'
                | 'bad_request'
                | 'unprocessable_entity'
                | 'Domain does not exist'
                | 'Contact email not found'
                | 'Attribute not found'
                | 'Category id not found'
                | 'Invalid parameters passed'
                | 'Record(s) for identifier not found'
                | 'Returned when query params are invalid'
                | 'Returned when invalid data posted'
                | 'Feed not found'
                | 'Campaign ID not found'
                | 'api-key not found'
                | 'DMARC policy requires domain authentication'
                | 'DNS records not properly configured'
                | 'Invalid OTP code provided'
                | 'OTP code has expired'
                | 'Domain already exists in your account'
                | 'The sum of all IP weights must equal 100'
                | 'Authentication failed'
                | 'Insufficient credits'
                | 'Request already processed'
              message: string
            }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/whatsapp/sendMessage': {
      $post:
        | {
            input: {
              json:
                | {
                    contactNumbers: string[]
                    params?: { [x: string]: unknown } | undefined
                    senderNumber: string
                    templateId: number
                  }
                | { contactNumbers: string[]; senderNumber: string; text: string }
            }
            output: { messageId: string }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              json:
                | {
                    contactNumbers: string[]
                    params?: { [x: string]: unknown } | undefined
                    senderNumber: string
                    templateId: number
                  }
                | { contactNumbers: string[]; senderNumber: string; text: string }
            }
            output: {
              code:
                | 'invalid_parameter'
                | 'missing_parameter'
                | 'out_of_range'
                | 'campaign_processing'
                | 'campaign_sent'
                | 'document_not_found'
                | 'not_enough_credits'
                | 'permission_denied'
                | 'duplicate_parameter'
                | 'duplicate_request'
                | 'method_not_allowed'
                | 'unauthorized'
                | 'account_under_validation'
                | 'not_acceptable'
                | 'bad_request'
                | 'unprocessable_entity'
                | 'Domain does not exist'
                | 'Contact email not found'
                | 'Attribute not found'
                | 'Category id not found'
                | 'Invalid parameters passed'
                | 'Record(s) for identifier not found'
                | 'Returned when query params are invalid'
                | 'Returned when invalid data posted'
                | 'Feed not found'
                | 'Campaign ID not found'
                | 'api-key not found'
                | 'DMARC policy requires domain authentication'
                | 'DNS records not properly configured'
                | 'Invalid OTP code provided'
                | 'OTP code has expired'
                | 'Domain already exists in your account'
                | 'The sum of all IP weights must equal 100'
                | 'Authentication failed'
                | 'Insufficient credits'
                | 'Request already processed'
              message: string
            }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/whatsapp/statistics/events': {
      $get:
        | {
            input: {
              query: {
                limit?: bigint | undefined
                offset?: bigint | undefined
                startDate?: string | undefined
                endDate?: string | undefined
                days?: bigint | undefined
                contactNumber?: string | undefined
                event?:
                  | 'sent'
                  | 'delivered'
                  | 'read'
                  | 'error'
                  | 'unsubscribe'
                  | 'reply'
                  | 'soft-bounce'
                  | undefined
                sort?: 'asc' | 'desc' | undefined
              }
            }
            output: {
              events?:
                | {
                    body?: string | undefined
                    contactNumber: string
                    date: string
                    event:
                      | 'sent'
                      | 'delivered'
                      | 'read'
                      | 'error'
                      | 'unsubscribe'
                      | 'reply'
                      | 'soft-bounce'
                    mediaUrl?: string | undefined
                    messageId: string
                    reason?: string | undefined
                    senderNumber: string
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: bigint | undefined
                offset?: bigint | undefined
                startDate?: string | undefined
                endDate?: string | undefined
                days?: bigint | undefined
                contactNumber?: string | undefined
                event?:
                  | 'sent'
                  | 'delivered'
                  | 'read'
                  | 'error'
                  | 'unsubscribe'
                  | 'reply'
                  | 'soft-bounce'
                  | undefined
                sort?: 'asc' | 'desc' | undefined
              }
            }
            output: {
              code:
                | 'invalid_parameter'
                | 'missing_parameter'
                | 'out_of_range'
                | 'campaign_processing'
                | 'campaign_sent'
                | 'document_not_found'
                | 'not_enough_credits'
                | 'permission_denied'
                | 'duplicate_parameter'
                | 'duplicate_request'
                | 'method_not_allowed'
                | 'unauthorized'
                | 'account_under_validation'
                | 'not_acceptable'
                | 'bad_request'
                | 'unprocessable_entity'
                | 'Domain does not exist'
                | 'Contact email not found'
                | 'Attribute not found'
                | 'Category id not found'
                | 'Invalid parameters passed'
                | 'Record(s) for identifier not found'
                | 'Returned when query params are invalid'
                | 'Returned when invalid data posted'
                | 'Feed not found'
                | 'Campaign ID not found'
                | 'api-key not found'
                | 'DMARC policy requires domain authentication'
                | 'DNS records not properly configured'
                | 'Invalid OTP code provided'
                | 'OTP code has expired'
                | 'Domain already exists in your account'
                | 'The sum of all IP weights must equal 100'
                | 'Authentication failed'
                | 'Insufficient credits'
                | 'Request already processed'
              message: string
            }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/smtp/blockedContacts': {
      $get:
        | {
            input: {
              query: {
                startDate?: string | undefined
                endDate?: string | undefined
                limit?: bigint | undefined
                offset?: bigint | undefined
                senders?: string[] | undefined
                sort?: 'asc' | 'desc' | undefined
              }
            }
            output: {
              contacts?:
                | {
                    blockedAt: string
                    email: string
                    reason: {
                      code?:
                        | 'unsubscribedViaMA'
                        | 'unsubscribedViaEmail'
                        | 'adminBlocked'
                        | 'unsubscribedViaApi'
                        | 'hardBounce'
                        | 'contactFlaggedAsSpam'
                        | undefined
                      message?: string | undefined
                    }
                    senderEmail: string
                  }[]
                | undefined
              count?: bigint | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                startDate?: string | undefined
                endDate?: string | undefined
                limit?: bigint | undefined
                offset?: bigint | undefined
                senders?: string[] | undefined
                sort?: 'asc' | 'desc' | undefined
              }
            }
            output: {
              code:
                | 'invalid_parameter'
                | 'missing_parameter'
                | 'out_of_range'
                | 'campaign_processing'
                | 'campaign_sent'
                | 'document_not_found'
                | 'not_enough_credits'
                | 'permission_denied'
                | 'duplicate_parameter'
                | 'duplicate_request'
                | 'method_not_allowed'
                | 'unauthorized'
                | 'account_under_validation'
                | 'not_acceptable'
                | 'bad_request'
                | 'unprocessable_entity'
                | 'Domain does not exist'
                | 'Contact email not found'
                | 'Attribute not found'
                | 'Category id not found'
                | 'Invalid parameters passed'
                | 'Record(s) for identifier not found'
                | 'Returned when query params are invalid'
                | 'Returned when invalid data posted'
                | 'Feed not found'
                | 'Campaign ID not found'
                | 'api-key not found'
                | 'DMARC policy requires domain authentication'
                | 'DNS records not properly configured'
                | 'Invalid OTP code provided'
                | 'OTP code has expired'
                | 'Domain already exists in your account'
                | 'The sum of all IP weights must equal 100'
                | 'Authentication failed'
                | 'Insufficient credits'
                | 'Request already processed'
              message: string
            }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/smtp/blockedContacts/:email': {
      $delete:
        | {
            input: { param: { email: string } }
            output: {
              code:
                | 'invalid_parameter'
                | 'missing_parameter'
                | 'out_of_range'
                | 'campaign_processing'
                | 'campaign_sent'
                | 'document_not_found'
                | 'not_enough_credits'
                | 'permission_denied'
                | 'duplicate_parameter'
                | 'duplicate_request'
                | 'method_not_allowed'
                | 'unauthorized'
                | 'account_under_validation'
                | 'not_acceptable'
                | 'bad_request'
                | 'unprocessable_entity'
                | 'Domain does not exist'
                | 'Contact email not found'
                | 'Attribute not found'
                | 'Category id not found'
                | 'Invalid parameters passed'
                | 'Record(s) for identifier not found'
                | 'Returned when query params are invalid'
                | 'Returned when invalid data posted'
                | 'Feed not found'
                | 'Campaign ID not found'
                | 'api-key not found'
                | 'DMARC policy requires domain authentication'
                | 'DNS records not properly configured'
                | 'Invalid OTP code provided'
                | 'OTP code has expired'
                | 'Domain already exists in your account'
                | 'The sum of all IP weights must equal 100'
                | 'Authentication failed'
                | 'Insufficient credits'
                | 'Request already processed'
              message: string
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { email: string } }
            output: {
              code:
                | 'invalid_parameter'
                | 'missing_parameter'
                | 'out_of_range'
                | 'campaign_processing'
                | 'campaign_sent'
                | 'document_not_found'
                | 'not_enough_credits'
                | 'permission_denied'
                | 'duplicate_parameter'
                | 'duplicate_request'
                | 'method_not_allowed'
                | 'unauthorized'
                | 'account_under_validation'
                | 'not_acceptable'
                | 'bad_request'
                | 'unprocessable_entity'
                | 'Domain does not exist'
                | 'Contact email not found'
                | 'Attribute not found'
                | 'Category id not found'
                | 'Invalid parameters passed'
                | 'Record(s) for identifier not found'
                | 'Returned when query params are invalid'
                | 'Returned when invalid data posted'
                | 'Feed not found'
                | 'Campaign ID not found'
                | 'api-key not found'
                | 'DMARC policy requires domain authentication'
                | 'DNS records not properly configured'
                | 'Invalid OTP code provided'
                | 'OTP code has expired'
                | 'Domain already exists in your account'
                | 'The sum of all IP weights must equal 100'
                | 'Authentication failed'
                | 'Insufficient credits'
                | 'Request already processed'
              message: string
            }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/smtp/blockedDomains': {
      $get:
        | { input: {}; output: { domains: string[] }; outputFormat: 'json'; status: 200 }
        | {
            input: {}
            output: {
              code:
                | 'invalid_parameter'
                | 'missing_parameter'
                | 'out_of_range'
                | 'campaign_processing'
                | 'campaign_sent'
                | 'document_not_found'
                | 'not_enough_credits'
                | 'permission_denied'
                | 'duplicate_parameter'
                | 'duplicate_request'
                | 'method_not_allowed'
                | 'unauthorized'
                | 'account_under_validation'
                | 'not_acceptable'
                | 'bad_request'
                | 'unprocessable_entity'
                | 'Domain does not exist'
                | 'Contact email not found'
                | 'Attribute not found'
                | 'Category id not found'
                | 'Invalid parameters passed'
                | 'Record(s) for identifier not found'
                | 'Returned when query params are invalid'
                | 'Returned when invalid data posted'
                | 'Feed not found'
                | 'Campaign ID not found'
                | 'api-key not found'
                | 'DMARC policy requires domain authentication'
                | 'DNS records not properly configured'
                | 'Invalid OTP code provided'
                | 'OTP code has expired'
                | 'Domain already exists in your account'
                | 'The sum of all IP weights must equal 100'
                | 'Authentication failed'
                | 'Insufficient credits'
                | 'Request already processed'
              message: string
            }
            outputFormat: 'json'
            status: 400
          }
      $post: {
        input: { json: { domain: string } }
        output: {
          code:
            | 'invalid_parameter'
            | 'missing_parameter'
            | 'out_of_range'
            | 'campaign_processing'
            | 'campaign_sent'
            | 'document_not_found'
            | 'not_enough_credits'
            | 'permission_denied'
            | 'duplicate_parameter'
            | 'duplicate_request'
            | 'method_not_allowed'
            | 'unauthorized'
            | 'account_under_validation'
            | 'not_acceptable'
            | 'bad_request'
            | 'unprocessable_entity'
            | 'Domain does not exist'
            | 'Contact email not found'
            | 'Attribute not found'
            | 'Category id not found'
            | 'Invalid parameters passed'
            | 'Record(s) for identifier not found'
            | 'Returned when query params are invalid'
            | 'Returned when invalid data posted'
            | 'Feed not found'
            | 'Campaign ID not found'
            | 'api-key not found'
            | 'DMARC policy requires domain authentication'
            | 'DNS records not properly configured'
            | 'Invalid OTP code provided'
            | 'OTP code has expired'
            | 'Domain already exists in your account'
            | 'The sum of all IP weights must equal 100'
            | 'Authentication failed'
            | 'Insufficient credits'
            | 'Request already processed'
          message: string
        }
        outputFormat: 'json'
        status: 400
      }
    }
  } & {
    '/smtp/blockedDomains/:domain': {
      $delete:
        | {
            input: { param: { domain: string } }
            output: {
              code:
                | 'invalid_parameter'
                | 'missing_parameter'
                | 'out_of_range'
                | 'campaign_processing'
                | 'campaign_sent'
                | 'document_not_found'
                | 'not_enough_credits'
                | 'permission_denied'
                | 'duplicate_parameter'
                | 'duplicate_request'
                | 'method_not_allowed'
                | 'unauthorized'
                | 'account_under_validation'
                | 'not_acceptable'
                | 'bad_request'
                | 'unprocessable_entity'
                | 'Domain does not exist'
                | 'Contact email not found'
                | 'Attribute not found'
                | 'Category id not found'
                | 'Invalid parameters passed'
                | 'Record(s) for identifier not found'
                | 'Returned when query params are invalid'
                | 'Returned when invalid data posted'
                | 'Feed not found'
                | 'Campaign ID not found'
                | 'api-key not found'
                | 'DMARC policy requires domain authentication'
                | 'DNS records not properly configured'
                | 'Invalid OTP code provided'
                | 'OTP code has expired'
                | 'Domain already exists in your account'
                | 'The sum of all IP weights must equal 100'
                | 'Authentication failed'
                | 'Insufficient credits'
                | 'Request already processed'
              message: string
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { domain: string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/smtp/deleteHardbounces': {
      $post: {
        input: {
          json: {
            contactEmail?: string | undefined
            endDate?: string | undefined
            startDate?: string | undefined
          }
        }
        output: {
          code:
            | 'invalid_parameter'
            | 'missing_parameter'
            | 'out_of_range'
            | 'campaign_processing'
            | 'campaign_sent'
            | 'document_not_found'
            | 'not_enough_credits'
            | 'permission_denied'
            | 'duplicate_parameter'
            | 'duplicate_request'
            | 'method_not_allowed'
            | 'unauthorized'
            | 'account_under_validation'
            | 'not_acceptable'
            | 'bad_request'
            | 'unprocessable_entity'
            | 'Domain does not exist'
            | 'Contact email not found'
            | 'Attribute not found'
            | 'Category id not found'
            | 'Invalid parameters passed'
            | 'Record(s) for identifier not found'
            | 'Returned when query params are invalid'
            | 'Returned when invalid data posted'
            | 'Feed not found'
            | 'Campaign ID not found'
            | 'api-key not found'
            | 'DMARC policy requires domain authentication'
            | 'DNS records not properly configured'
            | 'Invalid OTP code provided'
            | 'OTP code has expired'
            | 'Domain already exists in your account'
            | 'The sum of all IP weights must equal 100'
            | 'Authentication failed'
            | 'Insufficient credits'
            | 'Request already processed'
          message: string
        }
        outputFormat: 'json'
        status: 400
      }
    }
  } & {
    '/smtp/email': {
      $post:
        | {
            input: {
              json: {
                attachment?:
                  | {
                      content?: string | undefined
                      name?: string | undefined
                      url?: string | undefined
                    }[]
                  | undefined
                batchId?: string | undefined
                bcc?:
                  | {
                      contactPixelTrackingConsent?: boolean | undefined
                      email: string
                      name?: string | undefined
                      removeTrackingPixel?: boolean | undefined
                    }[]
                  | undefined
                cc?:
                  | {
                      contactPixelTrackingConsent?: boolean | undefined
                      email: string
                      name?: string | undefined
                      removeTrackingPixel?: boolean | undefined
                    }[]
                  | undefined
                headers?: { [x: string]: { [x: string]: unknown } } | undefined
                htmlContent?: string | undefined
                messageVersions?:
                  | {
                      bcc?:
                        | {
                            contactPixelTrackingConsent?: boolean | undefined
                            email: string
                            name?: string | undefined
                            removeTrackingPixel?: boolean | undefined
                          }[]
                        | undefined
                      cc?:
                        | {
                            contactPixelTrackingConsent?: boolean | undefined
                            email: string
                            name?: string | undefined
                            removeTrackingPixel?: boolean | undefined
                          }[]
                        | undefined
                      htmlContent?: string | undefined
                      params?: { [x: string]: { [x: string]: unknown } } | undefined
                      replyTo?: { email: string; name?: string | undefined } | undefined
                      subject?: string | undefined
                      textContent?: string | undefined
                      to: {
                        contactPixelTrackingConsent?: boolean | undefined
                        email: string
                        name?: string | undefined
                        removeTrackingPixel?: boolean | undefined
                      }[]
                    }[]
                  | undefined
                params?: { [x: string]: { [x: string]: unknown } } | undefined
                replyTo?: { email: string; name?: string | undefined } | undefined
                scheduledAt?: string | undefined
                sender?:
                  | {
                      email?: string | undefined
                      id?: bigint | undefined
                      name?: string | undefined
                    }
                  | undefined
                subject?: string | undefined
                tags?: string[] | undefined
                templateId?: bigint | undefined
                textContent?: string | undefined
                to?:
                  | {
                      contactPixelTrackingConsent?: boolean | undefined
                      email: string
                      name?: string | undefined
                      removeTrackingPixel?: boolean | undefined
                    }[]
                  | undefined
              }
            }
            output: { messageId?: string | undefined; messageIds?: string[] | undefined }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              json: {
                attachment?:
                  | {
                      content?: string | undefined
                      name?: string | undefined
                      url?: string | undefined
                    }[]
                  | undefined
                batchId?: string | undefined
                bcc?:
                  | {
                      contactPixelTrackingConsent?: boolean | undefined
                      email: string
                      name?: string | undefined
                      removeTrackingPixel?: boolean | undefined
                    }[]
                  | undefined
                cc?:
                  | {
                      contactPixelTrackingConsent?: boolean | undefined
                      email: string
                      name?: string | undefined
                      removeTrackingPixel?: boolean | undefined
                    }[]
                  | undefined
                headers?: { [x: string]: { [x: string]: unknown } } | undefined
                htmlContent?: string | undefined
                messageVersions?:
                  | {
                      bcc?:
                        | {
                            contactPixelTrackingConsent?: boolean | undefined
                            email: string
                            name?: string | undefined
                            removeTrackingPixel?: boolean | undefined
                          }[]
                        | undefined
                      cc?:
                        | {
                            contactPixelTrackingConsent?: boolean | undefined
                            email: string
                            name?: string | undefined
                            removeTrackingPixel?: boolean | undefined
                          }[]
                        | undefined
                      htmlContent?: string | undefined
                      params?: { [x: string]: { [x: string]: unknown } } | undefined
                      replyTo?: { email: string; name?: string | undefined } | undefined
                      subject?: string | undefined
                      textContent?: string | undefined
                      to: {
                        contactPixelTrackingConsent?: boolean | undefined
                        email: string
                        name?: string | undefined
                        removeTrackingPixel?: boolean | undefined
                      }[]
                    }[]
                  | undefined
                params?: { [x: string]: { [x: string]: unknown } } | undefined
                replyTo?: { email: string; name?: string | undefined } | undefined
                scheduledAt?: string | undefined
                sender?:
                  | {
                      email?: string | undefined
                      id?: bigint | undefined
                      name?: string | undefined
                    }
                  | undefined
                subject?: string | undefined
                tags?: string[] | undefined
                templateId?: bigint | undefined
                textContent?: string | undefined
                to?:
                  | {
                      contactPixelTrackingConsent?: boolean | undefined
                      email: string
                      name?: string | undefined
                      removeTrackingPixel?: boolean | undefined
                    }[]
                  | undefined
              }
            }
            output: {
              batchId?: string | undefined
              messageId?: string | undefined
              messageIds?: string[] | undefined
            }
            outputFormat: 'json'
            status: 202
          }
        | {
            input: {
              json: {
                attachment?:
                  | {
                      content?: string | undefined
                      name?: string | undefined
                      url?: string | undefined
                    }[]
                  | undefined
                batchId?: string | undefined
                bcc?:
                  | {
                      contactPixelTrackingConsent?: boolean | undefined
                      email: string
                      name?: string | undefined
                      removeTrackingPixel?: boolean | undefined
                    }[]
                  | undefined
                cc?:
                  | {
                      contactPixelTrackingConsent?: boolean | undefined
                      email: string
                      name?: string | undefined
                      removeTrackingPixel?: boolean | undefined
                    }[]
                  | undefined
                headers?: { [x: string]: { [x: string]: unknown } } | undefined
                htmlContent?: string | undefined
                messageVersions?:
                  | {
                      bcc?:
                        | {
                            contactPixelTrackingConsent?: boolean | undefined
                            email: string
                            name?: string | undefined
                            removeTrackingPixel?: boolean | undefined
                          }[]
                        | undefined
                      cc?:
                        | {
                            contactPixelTrackingConsent?: boolean | undefined
                            email: string
                            name?: string | undefined
                            removeTrackingPixel?: boolean | undefined
                          }[]
                        | undefined
                      htmlContent?: string | undefined
                      params?: { [x: string]: { [x: string]: unknown } } | undefined
                      replyTo?: { email: string; name?: string | undefined } | undefined
                      subject?: string | undefined
                      textContent?: string | undefined
                      to: {
                        contactPixelTrackingConsent?: boolean | undefined
                        email: string
                        name?: string | undefined
                        removeTrackingPixel?: boolean | undefined
                      }[]
                    }[]
                  | undefined
                params?: { [x: string]: { [x: string]: unknown } } | undefined
                replyTo?: { email: string; name?: string | undefined } | undefined
                scheduledAt?: string | undefined
                sender?:
                  | {
                      email?: string | undefined
                      id?: bigint | undefined
                      name?: string | undefined
                    }
                  | undefined
                subject?: string | undefined
                tags?: string[] | undefined
                templateId?: bigint | undefined
                textContent?: string | undefined
                to?:
                  | {
                      contactPixelTrackingConsent?: boolean | undefined
                      email: string
                      name?: string | undefined
                      removeTrackingPixel?: boolean | undefined
                    }[]
                  | undefined
              }
            }
            output: {
              code:
                | 'invalid_parameter'
                | 'missing_parameter'
                | 'out_of_range'
                | 'campaign_processing'
                | 'campaign_sent'
                | 'document_not_found'
                | 'not_enough_credits'
                | 'permission_denied'
                | 'duplicate_parameter'
                | 'duplicate_request'
                | 'method_not_allowed'
                | 'unauthorized'
                | 'account_under_validation'
                | 'not_acceptable'
                | 'bad_request'
                | 'unprocessable_entity'
                | 'Domain does not exist'
                | 'Contact email not found'
                | 'Attribute not found'
                | 'Category id not found'
                | 'Invalid parameters passed'
                | 'Record(s) for identifier not found'
                | 'Returned when query params are invalid'
                | 'Returned when invalid data posted'
                | 'Feed not found'
                | 'Campaign ID not found'
                | 'api-key not found'
                | 'DMARC policy requires domain authentication'
                | 'DNS records not properly configured'
                | 'Invalid OTP code provided'
                | 'OTP code has expired'
                | 'Domain already exists in your account'
                | 'The sum of all IP weights must equal 100'
                | 'Authentication failed'
                | 'Insufficient credits'
                | 'Request already processed'
              message: string
            }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/smtp/email/:identifier': {
      $delete:
        | {
            input: { param: { identifier: string } }
            output: {
              code:
                | 'invalid_parameter'
                | 'missing_parameter'
                | 'out_of_range'
                | 'campaign_processing'
                | 'campaign_sent'
                | 'document_not_found'
                | 'not_enough_credits'
                | 'permission_denied'
                | 'duplicate_parameter'
                | 'duplicate_request'
                | 'method_not_allowed'
                | 'unauthorized'
                | 'account_under_validation'
                | 'not_acceptable'
                | 'bad_request'
                | 'unprocessable_entity'
                | 'Domain does not exist'
                | 'Contact email not found'
                | 'Attribute not found'
                | 'Category id not found'
                | 'Invalid parameters passed'
                | 'Record(s) for identifier not found'
                | 'Returned when query params are invalid'
                | 'Returned when invalid data posted'
                | 'Feed not found'
                | 'Campaign ID not found'
                | 'api-key not found'
                | 'DMARC policy requires domain authentication'
                | 'DNS records not properly configured'
                | 'Invalid OTP code provided'
                | 'OTP code has expired'
                | 'Domain already exists in your account'
                | 'The sum of all IP weights must equal 100'
                | 'Authentication failed'
                | 'Insufficient credits'
                | 'Request already processed'
              message: string
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { identifier: string } }
            output: {
              code:
                | 'invalid_parameter'
                | 'missing_parameter'
                | 'out_of_range'
                | 'campaign_processing'
                | 'campaign_sent'
                | 'document_not_found'
                | 'not_enough_credits'
                | 'permission_denied'
                | 'duplicate_parameter'
                | 'duplicate_request'
                | 'method_not_allowed'
                | 'unauthorized'
                | 'account_under_validation'
                | 'not_acceptable'
                | 'bad_request'
                | 'unprocessable_entity'
                | 'Domain does not exist'
                | 'Contact email not found'
                | 'Attribute not found'
                | 'Category id not found'
                | 'Invalid parameters passed'
                | 'Record(s) for identifier not found'
                | 'Returned when query params are invalid'
                | 'Returned when invalid data posted'
                | 'Feed not found'
                | 'Campaign ID not found'
                | 'api-key not found'
                | 'DMARC policy requires domain authentication'
                | 'DNS records not properly configured'
                | 'Invalid OTP code provided'
                | 'OTP code has expired'
                | 'Domain already exists in your account'
                | 'The sum of all IP weights must equal 100'
                | 'Authentication failed'
                | 'Insufficient credits'
                | 'Request already processed'
              message: string
            }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/smtp/emailStatus/:identifier': {
      $get:
        | {
            input: { param: { identifier: string } } & {
              query: {
                startDate?: string | undefined
                endDate?: string | undefined
                sort?: 'asc' | 'desc' | undefined
                status?: 'processed' | 'inProgress' | 'queued' | undefined
                limit?: bigint | undefined
                offset?: bigint | undefined
              }
            }
            output:
              | {
                  batches?:
                    | {
                        createdAt: string
                        scheduledAt: string
                        status: 'inProgress' | 'queued' | 'processed' | 'error'
                      }[]
                    | undefined
                  count?: number | undefined
                }
              | {
                  createdAt: string
                  scheduledAt: string
                  status: 'inProgress' | 'queued' | 'processed' | 'error'
                }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { identifier: string } } & {
              query: {
                startDate?: string | undefined
                endDate?: string | undefined
                sort?: 'asc' | 'desc' | undefined
                status?: 'processed' | 'inProgress' | 'queued' | undefined
                limit?: bigint | undefined
                offset?: bigint | undefined
              }
            }
            output: {
              code:
                | 'invalid_parameter'
                | 'missing_parameter'
                | 'out_of_range'
                | 'campaign_processing'
                | 'campaign_sent'
                | 'document_not_found'
                | 'not_enough_credits'
                | 'permission_denied'
                | 'duplicate_parameter'
                | 'duplicate_request'
                | 'method_not_allowed'
                | 'unauthorized'
                | 'account_under_validation'
                | 'not_acceptable'
                | 'bad_request'
                | 'unprocessable_entity'
                | 'Domain does not exist'
                | 'Contact email not found'
                | 'Attribute not found'
                | 'Category id not found'
                | 'Invalid parameters passed'
                | 'Record(s) for identifier not found'
                | 'Returned when query params are invalid'
                | 'Returned when invalid data posted'
                | 'Feed not found'
                | 'Campaign ID not found'
                | 'api-key not found'
                | 'DMARC policy requires domain authentication'
                | 'DNS records not properly configured'
                | 'Invalid OTP code provided'
                | 'OTP code has expired'
                | 'Domain already exists in your account'
                | 'The sum of all IP weights must equal 100'
                | 'Authentication failed'
                | 'Insufficient credits'
                | 'Request already processed'
              message: string
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { identifier: string } } & {
              query: {
                startDate?: string | undefined
                endDate?: string | undefined
                sort?: 'asc' | 'desc' | undefined
                status?: 'processed' | 'inProgress' | 'queued' | undefined
                limit?: bigint | undefined
                offset?: bigint | undefined
              }
            }
            output: {
              code:
                | 'invalid_parameter'
                | 'missing_parameter'
                | 'out_of_range'
                | 'campaign_processing'
                | 'campaign_sent'
                | 'document_not_found'
                | 'not_enough_credits'
                | 'permission_denied'
                | 'duplicate_parameter'
                | 'duplicate_request'
                | 'method_not_allowed'
                | 'unauthorized'
                | 'account_under_validation'
                | 'not_acceptable'
                | 'bad_request'
                | 'unprocessable_entity'
                | 'Domain does not exist'
                | 'Contact email not found'
                | 'Attribute not found'
                | 'Category id not found'
                | 'Invalid parameters passed'
                | 'Record(s) for identifier not found'
                | 'Returned when query params are invalid'
                | 'Returned when invalid data posted'
                | 'Feed not found'
                | 'Campaign ID not found'
                | 'api-key not found'
                | 'DMARC policy requires domain authentication'
                | 'DNS records not properly configured'
                | 'Invalid OTP code provided'
                | 'OTP code has expired'
                | 'Domain already exists in your account'
                | 'The sum of all IP weights must equal 100'
                | 'Authentication failed'
                | 'Insufficient credits'
                | 'Request already processed'
              message: string
            }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/smtp/emails': {
      $get:
        | {
            input: {
              query: {
                email?: string | undefined
                templateId?: bigint | undefined
                messageId?: string | undefined
                startDate?: string | undefined
                endDate?: string | undefined
                sort?: 'asc' | 'desc' | undefined
                limit?: bigint | undefined
                offset?: bigint | undefined
              }
            }
            output: {
              count?: bigint | undefined
              transactionalEmails?:
                | {
                    date: string
                    email: string
                    from?: string | undefined
                    messageId: string
                    subject: string
                    tags?: string[] | undefined
                    templateId?: bigint | undefined
                    uuid: string
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                email?: string | undefined
                templateId?: bigint | undefined
                messageId?: string | undefined
                startDate?: string | undefined
                endDate?: string | undefined
                sort?: 'asc' | 'desc' | undefined
                limit?: bigint | undefined
                offset?: bigint | undefined
              }
            }
            output: {
              code:
                | 'invalid_parameter'
                | 'missing_parameter'
                | 'out_of_range'
                | 'campaign_processing'
                | 'campaign_sent'
                | 'document_not_found'
                | 'not_enough_credits'
                | 'permission_denied'
                | 'duplicate_parameter'
                | 'duplicate_request'
                | 'method_not_allowed'
                | 'unauthorized'
                | 'account_under_validation'
                | 'not_acceptable'
                | 'bad_request'
                | 'unprocessable_entity'
                | 'Domain does not exist'
                | 'Contact email not found'
                | 'Attribute not found'
                | 'Category id not found'
                | 'Invalid parameters passed'
                | 'Record(s) for identifier not found'
                | 'Returned when query params are invalid'
                | 'Returned when invalid data posted'
                | 'Feed not found'
                | 'Campaign ID not found'
                | 'api-key not found'
                | 'DMARC policy requires domain authentication'
                | 'DNS records not properly configured'
                | 'Invalid OTP code provided'
                | 'OTP code has expired'
                | 'Domain already exists in your account'
                | 'The sum of all IP weights must equal 100'
                | 'Authentication failed'
                | 'Insufficient credits'
                | 'Request already processed'
              message: string
            }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/smtp/emails/:uuid': {
      $get:
        | {
            input: { param: { uuid: string } }
            output: {
              attachmentCount?: bigint | undefined
              body?: string | undefined
              date: string
              email: string
              events: { name: string; time: string }[]
              subject: string
              templateId?: bigint | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { uuid: string } }
            output: {
              code:
                | 'invalid_parameter'
                | 'missing_parameter'
                | 'out_of_range'
                | 'campaign_processing'
                | 'campaign_sent'
                | 'document_not_found'
                | 'not_enough_credits'
                | 'permission_denied'
                | 'duplicate_parameter'
                | 'duplicate_request'
                | 'method_not_allowed'
                | 'unauthorized'
                | 'account_under_validation'
                | 'not_acceptable'
                | 'bad_request'
                | 'unprocessable_entity'
                | 'Domain does not exist'
                | 'Contact email not found'
                | 'Attribute not found'
                | 'Category id not found'
                | 'Invalid parameters passed'
                | 'Record(s) for identifier not found'
                | 'Returned when query params are invalid'
                | 'Returned when invalid data posted'
                | 'Feed not found'
                | 'Campaign ID not found'
                | 'api-key not found'
                | 'DMARC policy requires domain authentication'
                | 'DNS records not properly configured'
                | 'Invalid OTP code provided'
                | 'OTP code has expired'
                | 'Domain already exists in your account'
                | 'The sum of all IP weights must equal 100'
                | 'Authentication failed'
                | 'Insufficient credits'
                | 'Request already processed'
              message: string
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { uuid: string } }
            output: {
              code:
                | 'invalid_parameter'
                | 'missing_parameter'
                | 'out_of_range'
                | 'campaign_processing'
                | 'campaign_sent'
                | 'document_not_found'
                | 'not_enough_credits'
                | 'permission_denied'
                | 'duplicate_parameter'
                | 'duplicate_request'
                | 'method_not_allowed'
                | 'unauthorized'
                | 'account_under_validation'
                | 'not_acceptable'
                | 'bad_request'
                | 'unprocessable_entity'
                | 'Domain does not exist'
                | 'Contact email not found'
                | 'Attribute not found'
                | 'Category id not found'
                | 'Invalid parameters passed'
                | 'Record(s) for identifier not found'
                | 'Returned when query params are invalid'
                | 'Returned when invalid data posted'
                | 'Feed not found'
                | 'Campaign ID not found'
                | 'api-key not found'
                | 'DMARC policy requires domain authentication'
                | 'DNS records not properly configured'
                | 'Invalid OTP code provided'
                | 'OTP code has expired'
                | 'Domain already exists in your account'
                | 'The sum of all IP weights must equal 100'
                | 'Authentication failed'
                | 'Insufficient credits'
                | 'Request already processed'
              message: string
            }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/smtp/log/:identifier': {
      $delete:
        | {
            input: { param: { identifier: string } } & {
              query: { from_date?: string | undefined; to_date?: string | undefined }
            }
            output: {
              code:
                | 'invalid_parameter'
                | 'missing_parameter'
                | 'out_of_range'
                | 'campaign_processing'
                | 'campaign_sent'
                | 'document_not_found'
                | 'not_enough_credits'
                | 'permission_denied'
                | 'duplicate_parameter'
                | 'duplicate_request'
                | 'method_not_allowed'
                | 'unauthorized'
                | 'account_under_validation'
                | 'not_acceptable'
                | 'bad_request'
                | 'unprocessable_entity'
                | 'Domain does not exist'
                | 'Contact email not found'
                | 'Attribute not found'
                | 'Category id not found'
                | 'Invalid parameters passed'
                | 'Record(s) for identifier not found'
                | 'Returned when query params are invalid'
                | 'Returned when invalid data posted'
                | 'Feed not found'
                | 'Campaign ID not found'
                | 'api-key not found'
                | 'DMARC policy requires domain authentication'
                | 'DNS records not properly configured'
                | 'Invalid OTP code provided'
                | 'OTP code has expired'
                | 'Domain already exists in your account'
                | 'The sum of all IP weights must equal 100'
                | 'Authentication failed'
                | 'Insufficient credits'
                | 'Request already processed'
              message: string
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { identifier: string } } & {
              query: { from_date?: string | undefined; to_date?: string | undefined }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/smtp/statistics/aggregatedReport': {
      $get:
        | {
            input: {
              query: {
                startDate?: string | undefined
                endDate?: string | undefined
                days?: bigint | undefined
                tag?: string | undefined
              }
            }
            output: {
              blocked?: bigint | undefined
              clicks?: bigint | undefined
              delivered?: bigint | undefined
              hardBounces?: bigint | undefined
              invalid?: bigint | undefined
              opens?: bigint | undefined
              range?: string | undefined
              requests?: bigint | undefined
              softBounces?: bigint | undefined
              spamReports?: bigint | undefined
              uniqueClicks?: bigint | undefined
              uniqueOpens?: bigint | undefined
              unsubscribed?: bigint | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                startDate?: string | undefined
                endDate?: string | undefined
                days?: bigint | undefined
                tag?: string | undefined
              }
            }
            output: {
              code:
                | 'invalid_parameter'
                | 'missing_parameter'
                | 'out_of_range'
                | 'campaign_processing'
                | 'campaign_sent'
                | 'document_not_found'
                | 'not_enough_credits'
                | 'permission_denied'
                | 'duplicate_parameter'
                | 'duplicate_request'
                | 'method_not_allowed'
                | 'unauthorized'
                | 'account_under_validation'
                | 'not_acceptable'
                | 'bad_request'
                | 'unprocessable_entity'
                | 'Domain does not exist'
                | 'Contact email not found'
                | 'Attribute not found'
                | 'Category id not found'
                | 'Invalid parameters passed'
                | 'Record(s) for identifier not found'
                | 'Returned when query params are invalid'
                | 'Returned when invalid data posted'
                | 'Feed not found'
                | 'Campaign ID not found'
                | 'api-key not found'
                | 'DMARC policy requires domain authentication'
                | 'DNS records not properly configured'
                | 'Invalid OTP code provided'
                | 'OTP code has expired'
                | 'Domain already exists in your account'
                | 'The sum of all IP weights must equal 100'
                | 'Authentication failed'
                | 'Insufficient credits'
                | 'Request already processed'
              message: string
            }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/smtp/statistics/events': {
      $get:
        | {
            input: {
              query: {
                limit?: bigint | undefined
                offset?: bigint | undefined
                startDate?: string | undefined
                endDate?: string | undefined
                days?: bigint | undefined
                email?: string | undefined
                event?:
                  | 'bounces'
                  | 'hardBounces'
                  | 'softBounces'
                  | 'delivered'
                  | 'spam'
                  | 'requests'
                  | 'opened'
                  | 'clicks'
                  | 'invalid'
                  | 'deferred'
                  | 'blocked'
                  | 'unsubscribed'
                  | 'error'
                  | 'loadedByProxy'
                  | undefined
                tags?: string | undefined
                messageId?: string | undefined
                templateId?: bigint | undefined
                sort?: 'asc' | 'desc' | undefined
              }
            }
            output: {
              events?:
                | {
                    date: string
                    email: string
                    event:
                      | 'bounces'
                      | 'hardBounces'
                      | 'softBounces'
                      | 'delivered'
                      | 'spam'
                      | 'requests'
                      | 'opened'
                      | 'clicks'
                      | 'invalid'
                      | 'deferred'
                      | 'blocked'
                      | 'unsubscribed'
                      | 'error'
                      | 'loadedByProxy'
                    from?: string | undefined
                    ip?: string | undefined
                    link?: string | undefined
                    messageId: string
                    reason?: string | undefined
                    subject?: string | undefined
                    tag?: string | undefined
                    templateId?: bigint | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: bigint | undefined
                offset?: bigint | undefined
                startDate?: string | undefined
                endDate?: string | undefined
                days?: bigint | undefined
                email?: string | undefined
                event?:
                  | 'bounces'
                  | 'hardBounces'
                  | 'softBounces'
                  | 'delivered'
                  | 'spam'
                  | 'requests'
                  | 'opened'
                  | 'clicks'
                  | 'invalid'
                  | 'deferred'
                  | 'blocked'
                  | 'unsubscribed'
                  | 'error'
                  | 'loadedByProxy'
                  | undefined
                tags?: string | undefined
                messageId?: string | undefined
                templateId?: bigint | undefined
                sort?: 'asc' | 'desc' | undefined
              }
            }
            output: {
              code:
                | 'invalid_parameter'
                | 'missing_parameter'
                | 'out_of_range'
                | 'campaign_processing'
                | 'campaign_sent'
                | 'document_not_found'
                | 'not_enough_credits'
                | 'permission_denied'
                | 'duplicate_parameter'
                | 'duplicate_request'
                | 'method_not_allowed'
                | 'unauthorized'
                | 'account_under_validation'
                | 'not_acceptable'
                | 'bad_request'
                | 'unprocessable_entity'
                | 'Domain does not exist'
                | 'Contact email not found'
                | 'Attribute not found'
                | 'Category id not found'
                | 'Invalid parameters passed'
                | 'Record(s) for identifier not found'
                | 'Returned when query params are invalid'
                | 'Returned when invalid data posted'
                | 'Feed not found'
                | 'Campaign ID not found'
                | 'api-key not found'
                | 'DMARC policy requires domain authentication'
                | 'DNS records not properly configured'
                | 'Invalid OTP code provided'
                | 'OTP code has expired'
                | 'Domain already exists in your account'
                | 'The sum of all IP weights must equal 100'
                | 'Authentication failed'
                | 'Insufficient credits'
                | 'Request already processed'
              message: string
            }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/smtp/statistics/reports': {
      $get:
        | {
            input: {
              query: {
                limit?: bigint | undefined
                offset?: bigint | undefined
                startDate?: string | undefined
                endDate?: string | undefined
                days?: bigint | undefined
                tag?: string | undefined
                sort?: 'asc' | 'desc' | undefined
              }
            }
            output: {
              reports?:
                | {
                    blocked: bigint
                    clicks: bigint
                    date: string
                    delivered: bigint
                    hardBounces: bigint
                    invalid: bigint
                    opens: bigint
                    requests: bigint
                    softBounces: bigint
                    spamReports: bigint
                    uniqueClicks: bigint
                    uniqueOpens: bigint
                    unsubscribed: bigint
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: bigint | undefined
                offset?: bigint | undefined
                startDate?: string | undefined
                endDate?: string | undefined
                days?: bigint | undefined
                tag?: string | undefined
                sort?: 'asc' | 'desc' | undefined
              }
            }
            output: {
              code:
                | 'invalid_parameter'
                | 'missing_parameter'
                | 'out_of_range'
                | 'campaign_processing'
                | 'campaign_sent'
                | 'document_not_found'
                | 'not_enough_credits'
                | 'permission_denied'
                | 'duplicate_parameter'
                | 'duplicate_request'
                | 'method_not_allowed'
                | 'unauthorized'
                | 'account_under_validation'
                | 'not_acceptable'
                | 'bad_request'
                | 'unprocessable_entity'
                | 'Domain does not exist'
                | 'Contact email not found'
                | 'Attribute not found'
                | 'Category id not found'
                | 'Invalid parameters passed'
                | 'Record(s) for identifier not found'
                | 'Returned when query params are invalid'
                | 'Returned when invalid data posted'
                | 'Feed not found'
                | 'Campaign ID not found'
                | 'api-key not found'
                | 'DMARC policy requires domain authentication'
                | 'DNS records not properly configured'
                | 'Invalid OTP code provided'
                | 'OTP code has expired'
                | 'Domain already exists in your account'
                | 'The sum of all IP weights must equal 100'
                | 'Authentication failed'
                | 'Insufficient credits'
                | 'Request already processed'
              message: string
            }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/smtp/template/preview': {
      $post:
        | {
            input: { json: { [x: string]: unknown } | { [x: string]: unknown } }
            output: {
              fromEmail?: string | undefined
              fromName?: string | undefined
              html?: string | undefined
              previewText?: string | undefined
              subject?: string | undefined
              usedFeedNames?: string[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { [x: string]: unknown } | { [x: string]: unknown } }
            output: {
              code:
                | 'invalid_parameter'
                | 'missing_parameter'
                | 'out_of_range'
                | 'campaign_processing'
                | 'campaign_sent'
                | 'document_not_found'
                | 'not_enough_credits'
                | 'permission_denied'
                | 'duplicate_parameter'
                | 'duplicate_request'
                | 'method_not_allowed'
                | 'unauthorized'
                | 'account_under_validation'
                | 'not_acceptable'
                | 'bad_request'
                | 'unprocessable_entity'
                | 'Domain does not exist'
                | 'Contact email not found'
                | 'Attribute not found'
                | 'Category id not found'
                | 'Invalid parameters passed'
                | 'Record(s) for identifier not found'
                | 'Returned when query params are invalid'
                | 'Returned when invalid data posted'
                | 'Feed not found'
                | 'Campaign ID not found'
                | 'api-key not found'
                | 'DMARC policy requires domain authentication'
                | 'DNS records not properly configured'
                | 'Invalid OTP code provided'
                | 'OTP code has expired'
                | 'Domain already exists in your account'
                | 'The sum of all IP weights must equal 100'
                | 'Authentication failed'
                | 'Insufficient credits'
                | 'Request already processed'
              message: string
            }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/smtp/templates': {
      $get:
        | {
            input: {
              query: {
                templateStatus?: boolean | undefined
                limit?: bigint | undefined
                offset?: bigint | undefined
                sort?: 'asc' | 'desc' | undefined
                editorType?: 'richTextEditor' | undefined
              }
            }
            output: {
              count?: bigint | undefined
              templates?: GetSmtpTemplateOverview[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                templateStatus?: boolean | undefined
                limit?: bigint | undefined
                offset?: bigint | undefined
                sort?: 'asc' | 'desc' | undefined
                editorType?: 'richTextEditor' | undefined
              }
            }
            output: {
              code:
                | 'invalid_parameter'
                | 'missing_parameter'
                | 'out_of_range'
                | 'campaign_processing'
                | 'campaign_sent'
                | 'document_not_found'
                | 'not_enough_credits'
                | 'permission_denied'
                | 'duplicate_parameter'
                | 'duplicate_request'
                | 'method_not_allowed'
                | 'unauthorized'
                | 'account_under_validation'
                | 'not_acceptable'
                | 'bad_request'
                | 'unprocessable_entity'
                | 'Domain does not exist'
                | 'Contact email not found'
                | 'Attribute not found'
                | 'Category id not found'
                | 'Invalid parameters passed'
                | 'Record(s) for identifier not found'
                | 'Returned when query params are invalid'
                | 'Returned when invalid data posted'
                | 'Feed not found'
                | 'Campaign ID not found'
                | 'api-key not found'
                | 'DMARC policy requires domain authentication'
                | 'DNS records not properly configured'
                | 'Invalid OTP code provided'
                | 'OTP code has expired'
                | 'Domain already exists in your account'
                | 'The sum of all IP weights must equal 100'
                | 'Authentication failed'
                | 'Insufficient credits'
                | 'Request already processed'
              message: string
            }
            outputFormat: 'json'
            status: 400
          }
      $post:
        | {
            input: {
              json: {
                attachmentUrl?: string | undefined
                htmlContent?: string | undefined
                htmlUrl?: string | undefined
                isActive?: boolean | undefined
                replyTo?: string | undefined
                sender: {
                  email?: string | undefined
                  id?: bigint | undefined
                  name?: string | undefined
                }
                subject: string
                tag?: string | undefined
                templateName: string
                toField?: string | undefined
              }
            }
            output: { id: bigint }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              json: {
                attachmentUrl?: string | undefined
                htmlContent?: string | undefined
                htmlUrl?: string | undefined
                isActive?: boolean | undefined
                replyTo?: string | undefined
                sender: {
                  email?: string | undefined
                  id?: bigint | undefined
                  name?: string | undefined
                }
                subject: string
                tag?: string | undefined
                templateName: string
                toField?: string | undefined
              }
            }
            output: {
              code:
                | 'invalid_parameter'
                | 'missing_parameter'
                | 'out_of_range'
                | 'campaign_processing'
                | 'campaign_sent'
                | 'document_not_found'
                | 'not_enough_credits'
                | 'permission_denied'
                | 'duplicate_parameter'
                | 'duplicate_request'
                | 'method_not_allowed'
                | 'unauthorized'
                | 'account_under_validation'
                | 'not_acceptable'
                | 'bad_request'
                | 'unprocessable_entity'
                | 'Domain does not exist'
                | 'Contact email not found'
                | 'Attribute not found'
                | 'Category id not found'
                | 'Invalid parameters passed'
                | 'Record(s) for identifier not found'
                | 'Returned when query params are invalid'
                | 'Returned when invalid data posted'
                | 'Feed not found'
                | 'Campaign ID not found'
                | 'api-key not found'
                | 'DMARC policy requires domain authentication'
                | 'DNS records not properly configured'
                | 'Invalid OTP code provided'
                | 'OTP code has expired'
                | 'Domain already exists in your account'
                | 'The sum of all IP weights must equal 100'
                | 'Authentication failed'
                | 'Insufficient credits'
                | 'Request already processed'
              message: string
            }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/smtp/templates/:templateId': {
      $delete:
        | {
            input: { param: { templateId: bigint } }
            output: {
              code:
                | 'invalid_parameter'
                | 'missing_parameter'
                | 'out_of_range'
                | 'campaign_processing'
                | 'campaign_sent'
                | 'document_not_found'
                | 'not_enough_credits'
                | 'permission_denied'
                | 'duplicate_parameter'
                | 'duplicate_request'
                | 'method_not_allowed'
                | 'unauthorized'
                | 'account_under_validation'
                | 'not_acceptable'
                | 'bad_request'
                | 'unprocessable_entity'
                | 'Domain does not exist'
                | 'Contact email not found'
                | 'Attribute not found'
                | 'Category id not found'
                | 'Invalid parameters passed'
                | 'Record(s) for identifier not found'
                | 'Returned when query params are invalid'
                | 'Returned when invalid data posted'
                | 'Feed not found'
                | 'Campaign ID not found'
                | 'api-key not found'
                | 'DMARC policy requires domain authentication'
                | 'DNS records not properly configured'
                | 'Invalid OTP code provided'
                | 'OTP code has expired'
                | 'Domain already exists in your account'
                | 'The sum of all IP weights must equal 100'
                | 'Authentication failed'
                | 'Insufficient credits'
                | 'Request already processed'
              message: string
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { templateId: bigint } }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
      $get:
        | {
            input: { param: { templateId: bigint | string } }
            output: GetSmtpTemplateOverview
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { templateId: bigint | string } }
            output: {
              code:
                | 'invalid_parameter'
                | 'missing_parameter'
                | 'out_of_range'
                | 'campaign_processing'
                | 'campaign_sent'
                | 'document_not_found'
                | 'not_enough_credits'
                | 'permission_denied'
                | 'duplicate_parameter'
                | 'duplicate_request'
                | 'method_not_allowed'
                | 'unauthorized'
                | 'account_under_validation'
                | 'not_acceptable'
                | 'bad_request'
                | 'unprocessable_entity'
                | 'Domain does not exist'
                | 'Contact email not found'
                | 'Attribute not found'
                | 'Category id not found'
                | 'Invalid parameters passed'
                | 'Record(s) for identifier not found'
                | 'Returned when query params are invalid'
                | 'Returned when invalid data posted'
                | 'Feed not found'
                | 'Campaign ID not found'
                | 'api-key not found'
                | 'DMARC policy requires domain authentication'
                | 'DNS records not properly configured'
                | 'Invalid OTP code provided'
                | 'OTP code has expired'
                | 'Domain already exists in your account'
                | 'The sum of all IP weights must equal 100'
                | 'Authentication failed'
                | 'Insufficient credits'
                | 'Request already processed'
              message: string
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { templateId: bigint | string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
      $put:
        | {
            input: { param: { templateId: bigint | string } } & {
              json: {
                attachmentUrl?: string | undefined
                htmlContent?: string | undefined
                htmlUrl?: string | undefined
                isActive?: boolean | undefined
                replyTo?: string | undefined
                sender?:
                  | {
                      email?: string | undefined
                      id?: bigint | undefined
                      name?: string | undefined
                    }
                  | undefined
                subject?: string | undefined
                tag?: string | undefined
                templateName?: string | undefined
                toField?: string | undefined
              }
            }
            output: {
              code:
                | 'invalid_parameter'
                | 'missing_parameter'
                | 'out_of_range'
                | 'campaign_processing'
                | 'campaign_sent'
                | 'document_not_found'
                | 'not_enough_credits'
                | 'permission_denied'
                | 'duplicate_parameter'
                | 'duplicate_request'
                | 'method_not_allowed'
                | 'unauthorized'
                | 'account_under_validation'
                | 'not_acceptable'
                | 'bad_request'
                | 'unprocessable_entity'
                | 'Domain does not exist'
                | 'Contact email not found'
                | 'Attribute not found'
                | 'Category id not found'
                | 'Invalid parameters passed'
                | 'Record(s) for identifier not found'
                | 'Returned when query params are invalid'
                | 'Returned when invalid data posted'
                | 'Feed not found'
                | 'Campaign ID not found'
                | 'api-key not found'
                | 'DMARC policy requires domain authentication'
                | 'DNS records not properly configured'
                | 'Invalid OTP code provided'
                | 'OTP code has expired'
                | 'Domain already exists in your account'
                | 'The sum of all IP weights must equal 100'
                | 'Authentication failed'
                | 'Insufficient credits'
                | 'Request already processed'
              message: string
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { templateId: bigint | string } } & {
              json: {
                attachmentUrl?: string | undefined
                htmlContent?: string | undefined
                htmlUrl?: string | undefined
                isActive?: boolean | undefined
                replyTo?: string | undefined
                sender?:
                  | {
                      email?: string | undefined
                      id?: bigint | undefined
                      name?: string | undefined
                    }
                  | undefined
                subject?: string | undefined
                tag?: string | undefined
                templateName?: string | undefined
                toField?: string | undefined
              }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/smtp/templates/:templateId/sendTest': {
      $post:
        | {
            input: { param: { templateId: bigint } } & { json: SendTestEmail }
            output: PostSendFailed
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { templateId: bigint } } & { json: SendTestEmail }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/transactionalSMS/send': {
      $post:
        | {
            input: { json: SendTransacSms }
            output: { messageId: bigint }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: SendTransacSms }
            output: {
              code:
                | 'invalid_parameter'
                | 'missing_parameter'
                | 'out_of_range'
                | 'campaign_processing'
                | 'campaign_sent'
                | 'document_not_found'
                | 'not_enough_credits'
                | 'permission_denied'
                | 'duplicate_parameter'
                | 'duplicate_request'
                | 'method_not_allowed'
                | 'unauthorized'
                | 'account_under_validation'
                | 'not_acceptable'
                | 'bad_request'
                | 'unprocessable_entity'
                | 'Domain does not exist'
                | 'Contact email not found'
                | 'Attribute not found'
                | 'Category id not found'
                | 'Invalid parameters passed'
                | 'Record(s) for identifier not found'
                | 'Returned when query params are invalid'
                | 'Returned when invalid data posted'
                | 'Feed not found'
                | 'Campaign ID not found'
                | 'api-key not found'
                | 'DMARC policy requires domain authentication'
                | 'DNS records not properly configured'
                | 'Invalid OTP code provided'
                | 'OTP code has expired'
                | 'Domain already exists in your account'
                | 'The sum of all IP weights must equal 100'
                | 'Authentication failed'
                | 'Insufficient credits'
                | 'Request already processed'
              message: string
            }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/transactionalSMS/sms': {
      $post:
        | {
            input: { json: SendTransacSms }
            output: {
              messageId: bigint
              reference: string
              remainingCredits?: number | undefined
              smsCount?: bigint | undefined
              usedCredits?: number | undefined
            }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: SendTransacSms }
            output: {
              code:
                | 'invalid_parameter'
                | 'missing_parameter'
                | 'out_of_range'
                | 'campaign_processing'
                | 'campaign_sent'
                | 'document_not_found'
                | 'not_enough_credits'
                | 'permission_denied'
                | 'duplicate_parameter'
                | 'duplicate_request'
                | 'method_not_allowed'
                | 'unauthorized'
                | 'account_under_validation'
                | 'not_acceptable'
                | 'bad_request'
                | 'unprocessable_entity'
                | 'Domain does not exist'
                | 'Contact email not found'
                | 'Attribute not found'
                | 'Category id not found'
                | 'Invalid parameters passed'
                | 'Record(s) for identifier not found'
                | 'Returned when query params are invalid'
                | 'Returned when invalid data posted'
                | 'Feed not found'
                | 'Campaign ID not found'
                | 'api-key not found'
                | 'DMARC policy requires domain authentication'
                | 'DNS records not properly configured'
                | 'Invalid OTP code provided'
                | 'OTP code has expired'
                | 'Domain already exists in your account'
                | 'The sum of all IP weights must equal 100'
                | 'Authentication failed'
                | 'Insufficient credits'
                | 'Request already processed'
              message: string
            }
            outputFormat: 'json'
            status: 400
          }
        | { input: { json: SendTransacSms }; output: ErrorModel; outputFormat: 'json'; status: 402 }
        | { input: { json: SendTransacSms }; output: ErrorModel; outputFormat: 'json'; status: 429 }
    }
  } & {
    '/transactionalSMS/statistics/aggregatedReport': {
      $get:
        | {
            input: {
              query: {
                startDate?: string | undefined
                endDate?: string | undefined
                days?: bigint | undefined
                tag?: string | undefined
              }
            }
            output: {
              accepted?: bigint | undefined
              blocked?: bigint | undefined
              delivered?: bigint | undefined
              hardBounces?: bigint | undefined
              range?: string | undefined
              rejected?: bigint | undefined
              replied?: bigint | undefined
              requests?: bigint | undefined
              skipped?: bigint | undefined
              softBounces?: bigint | undefined
              unsubscribed?: bigint | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                startDate?: string | undefined
                endDate?: string | undefined
                days?: bigint | undefined
                tag?: string | undefined
              }
            }
            output: {
              code:
                | 'invalid_parameter'
                | 'missing_parameter'
                | 'out_of_range'
                | 'campaign_processing'
                | 'campaign_sent'
                | 'document_not_found'
                | 'not_enough_credits'
                | 'permission_denied'
                | 'duplicate_parameter'
                | 'duplicate_request'
                | 'method_not_allowed'
                | 'unauthorized'
                | 'account_under_validation'
                | 'not_acceptable'
                | 'bad_request'
                | 'unprocessable_entity'
                | 'Domain does not exist'
                | 'Contact email not found'
                | 'Attribute not found'
                | 'Category id not found'
                | 'Invalid parameters passed'
                | 'Record(s) for identifier not found'
                | 'Returned when query params are invalid'
                | 'Returned when invalid data posted'
                | 'Feed not found'
                | 'Campaign ID not found'
                | 'api-key not found'
                | 'DMARC policy requires domain authentication'
                | 'DNS records not properly configured'
                | 'Invalid OTP code provided'
                | 'OTP code has expired'
                | 'Domain already exists in your account'
                | 'The sum of all IP weights must equal 100'
                | 'Authentication failed'
                | 'Insufficient credits'
                | 'Request already processed'
              message: string
            }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/transactionalSMS/statistics/events': {
      $get:
        | {
            input: {
              query: {
                limit?: bigint | undefined
                startDate?: string | undefined
                endDate?: string | undefined
                offset?: bigint | undefined
                days?: bigint | undefined
                phoneNumber?: string | undefined
                event?:
                  | 'bounces'
                  | 'hardBounces'
                  | 'softBounces'
                  | 'delivered'
                  | 'sent'
                  | 'accepted'
                  | 'unsubscription'
                  | 'replies'
                  | 'blocked'
                  | 'rejected'
                  | 'skipped'
                  | undefined
                tags?: string | undefined
                sort?: 'asc' | 'desc' | undefined
              }
            }
            output: {
              events?:
                | {
                    date?: string | undefined
                    event?:
                      | 'bounces'
                      | 'hardBounces'
                      | 'softBounces'
                      | 'delivered'
                      | 'sent'
                      | 'accepted'
                      | 'unsubscription'
                      | 'replies'
                      | 'blocked'
                      | 'rejected'
                      | 'skipped'
                      | undefined
                    messageId?: string | undefined
                    phoneNumber?: string | undefined
                    reason?: string | undefined
                    reply?: string | undefined
                    tag?: string | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: bigint | undefined
                startDate?: string | undefined
                endDate?: string | undefined
                offset?: bigint | undefined
                days?: bigint | undefined
                phoneNumber?: string | undefined
                event?:
                  | 'bounces'
                  | 'hardBounces'
                  | 'softBounces'
                  | 'delivered'
                  | 'sent'
                  | 'accepted'
                  | 'unsubscription'
                  | 'replies'
                  | 'blocked'
                  | 'rejected'
                  | 'skipped'
                  | undefined
                tags?: string | undefined
                sort?: 'asc' | 'desc' | undefined
              }
            }
            output: {
              code:
                | 'invalid_parameter'
                | 'missing_parameter'
                | 'out_of_range'
                | 'campaign_processing'
                | 'campaign_sent'
                | 'document_not_found'
                | 'not_enough_credits'
                | 'permission_denied'
                | 'duplicate_parameter'
                | 'duplicate_request'
                | 'method_not_allowed'
                | 'unauthorized'
                | 'account_under_validation'
                | 'not_acceptable'
                | 'bad_request'
                | 'unprocessable_entity'
                | 'Domain does not exist'
                | 'Contact email not found'
                | 'Attribute not found'
                | 'Category id not found'
                | 'Invalid parameters passed'
                | 'Record(s) for identifier not found'
                | 'Returned when query params are invalid'
                | 'Returned when invalid data posted'
                | 'Feed not found'
                | 'Campaign ID not found'
                | 'api-key not found'
                | 'DMARC policy requires domain authentication'
                | 'DNS records not properly configured'
                | 'Invalid OTP code provided'
                | 'OTP code has expired'
                | 'Domain already exists in your account'
                | 'The sum of all IP weights must equal 100'
                | 'Authentication failed'
                | 'Insufficient credits'
                | 'Request already processed'
              message: string
            }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/transactionalSMS/statistics/reports': {
      $get:
        | {
            input: {
              query: {
                startDate?: string | undefined
                endDate?: string | undefined
                days?: bigint | undefined
                tag?: string | undefined
                sort?: 'asc' | 'desc' | undefined
              }
            }
            output: {
              reports?:
                | {
                    accepted?: bigint | undefined
                    blocked?: bigint | undefined
                    date?: string | undefined
                    delivered?: bigint | undefined
                    hardBounces?: bigint | undefined
                    rejected?: bigint | undefined
                    replied?: bigint | undefined
                    requests?: bigint | undefined
                    skipped?: bigint | undefined
                    softBounces?: bigint | undefined
                    unsubscribed?: bigint | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                startDate?: string | undefined
                endDate?: string | undefined
                days?: bigint | undefined
                tag?: string | undefined
                sort?: 'asc' | 'desc' | undefined
              }
            }
            output: {
              code:
                | 'invalid_parameter'
                | 'missing_parameter'
                | 'out_of_range'
                | 'campaign_processing'
                | 'campaign_sent'
                | 'document_not_found'
                | 'not_enough_credits'
                | 'permission_denied'
                | 'duplicate_parameter'
                | 'duplicate_request'
                | 'method_not_allowed'
                | 'unauthorized'
                | 'account_under_validation'
                | 'not_acceptable'
                | 'bad_request'
                | 'unprocessable_entity'
                | 'Domain does not exist'
                | 'Contact email not found'
                | 'Attribute not found'
                | 'Category id not found'
                | 'Invalid parameters passed'
                | 'Record(s) for identifier not found'
                | 'Returned when query params are invalid'
                | 'Returned when invalid data posted'
                | 'Feed not found'
                | 'Campaign ID not found'
                | 'api-key not found'
                | 'DMARC policy requires domain authentication'
                | 'DNS records not properly configured'
                | 'Invalid OTP code provided'
                | 'OTP code has expired'
                | 'Domain already exists in your account'
                | 'The sum of all IP weights must equal 100'
                | 'Authentication failed'
                | 'Insufficient credits'
                | 'Request already processed'
              message: string
            }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/transactionalSMS/templates': {
      $get:
        | {
            input: {
              query: {
                limit?: bigint | undefined
                offset?: bigint | undefined
                sort?: 'asc' | 'desc' | undefined
              }
            }
            output: {
              count?: bigint | undefined
              templates?:
                | {
                    id?: bigint | undefined
                    name?: string | undefined
                    short_url_enabled?: boolean | undefined
                    message?: string | undefined
                    compliance?:
                      | {
                          compliance_toggle?: boolean | undefined
                          organisation_prefix?: string | undefined
                          stop_keyword?: string | undefined
                        }
                      | undefined
                    encryption?: boolean | undefined
                    unicode_sms?: boolean | undefined
                    media_file?: string | undefined
                    media_file_size?: string | undefined
                    media_url?: string | undefined
                    createdAt?: string | undefined
                    updatedAt?: string | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: bigint | undefined
                offset?: bigint | undefined
                sort?: 'asc' | 'desc' | undefined
              }
            }
            output: {
              code:
                | 'invalid_parameter'
                | 'missing_parameter'
                | 'out_of_range'
                | 'campaign_processing'
                | 'campaign_sent'
                | 'document_not_found'
                | 'not_enough_credits'
                | 'permission_denied'
                | 'duplicate_parameter'
                | 'duplicate_request'
                | 'method_not_allowed'
                | 'unauthorized'
                | 'account_under_validation'
                | 'not_acceptable'
                | 'bad_request'
                | 'unprocessable_entity'
                | 'Domain does not exist'
                | 'Contact email not found'
                | 'Attribute not found'
                | 'Category id not found'
                | 'Invalid parameters passed'
                | 'Record(s) for identifier not found'
                | 'Returned when query params are invalid'
                | 'Returned when invalid data posted'
                | 'Feed not found'
                | 'Campaign ID not found'
                | 'api-key not found'
                | 'DMARC policy requires domain authentication'
                | 'DNS records not properly configured'
                | 'Invalid OTP code provided'
                | 'OTP code has expired'
                | 'Domain already exists in your account'
                | 'The sum of all IP weights must equal 100'
                | 'Authentication failed'
                | 'Insufficient credits'
                | 'Request already processed'
              message: string
            }
            outputFormat: 'json'
            status: 400
          }
    }
  },
  '/'
>
export default routes
