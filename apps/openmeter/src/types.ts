type AddonStatus = 'draft' | 'active' | 'archived'
type CurrencyCode = string
type AddonOrderBy = 'id' | 'key' | 'version' | 'created_at' | 'updated_at'
type RateCardFlatFee = {
  type: 'flat_fee'
  key: string
  name: string
  description?: string | undefined
  metadata?: {} | undefined
  featureKey?: string | undefined
  entitlementTemplate?: {} | undefined
  taxConfig?:
    | {
        behavior?: {} | undefined
        stripe?: { code: string } | undefined
        customInvoicing?: { code: string } | undefined
        taxCodeId?: string | undefined
      }
    | undefined
  billingCadence: string | null
  price: { type: 'flat'; amount: {}; paymentTerm?: {} | undefined }
  discounts?:
    | { percentage?: { percentage: {} } | undefined; usage?: { quantity: {} } | undefined }
    | undefined
}
type RateCardUsageBased = {
  type: 'usage_based'
  key: string
  name: string
  description?: string | undefined
  metadata?: {} | undefined
  featureKey?: string | undefined
  entitlementTemplate?: {} | undefined
  taxConfig?:
    | {
        behavior?: {} | undefined
        stripe?: { code: string } | undefined
        customInvoicing?: { code: string } | undefined
        taxCodeId?: string | undefined
      }
    | undefined
  billingCadence: string
  price: {}
  discounts?:
    | { percentage?: { percentage: {} } | undefined; usage?: { quantity: {} } | undefined }
    | undefined
}
type RateCard = RateCardFlatFee | RateCardUsageBased
type ValidationError = { field: string; code: string; message: string; attributes?: {} | undefined }
type Addon = {
  id: string
  name: string
  description?: string | undefined
  metadata?: {} | undefined
  createdAt: string
  updatedAt: string
  deletedAt?: string | undefined
  key: string
  annotations?: {} | undefined
  version: number
  instanceType: {}
  currency: {}
  effectiveFrom?: string | undefined
  effectiveTo?: string | undefined
  status: {}
  rateCards: RateCard[]
  validationErrors: ValidationError[] | null
}
type AddonPaginatedResponse = { totalCount: number; page: number; pageSize: number; items: Addon[] }
type BadRequestProblemResponse = {
  type: string
  title: string
  status?: number | undefined
  detail: string
  instance: string
  extensions?: { [x: string]: { [x: string]: unknown } } | undefined
}
type UnauthorizedProblemResponse = {
  type: string
  title: string
  status?: number | undefined
  detail: string
  instance: string
  extensions?: { [x: string]: { [x: string]: unknown } } | undefined
}
type ForbiddenProblemResponse = {
  type: string
  title: string
  status?: number | undefined
  detail: string
  instance: string
  extensions?: { [x: string]: { [x: string]: unknown } } | undefined
}
type PreconditionFailedProblemResponse = {
  type: string
  title: string
  status?: number | undefined
  detail: string
  instance: string
  extensions?: { [x: string]: { [x: string]: unknown } } | undefined
}
type InternalServerErrorProblemResponse = {
  type: string
  title: string
  status?: number | undefined
  detail: string
  instance: string
  extensions?: { [x: string]: { [x: string]: unknown } } | undefined
}
type ServiceUnavailableProblemResponse = {
  type: string
  title: string
  status?: number | undefined
  detail: string
  instance: string
  extensions?: { [x: string]: { [x: string]: unknown } } | undefined
}
type UnexpectedProblemResponse = {
  type: string
  title: string
  status?: number | undefined
  detail: string
  instance: string
  extensions?: { [x: string]: { [x: string]: unknown } } | undefined
}
type AddonCreate = {
  name: string
  description?: string | undefined
  metadata?: {} | undefined
  key: string
  instanceType: {}
  currency: {}
  rateCards: RateCard[]
}
type AddonReplaceUpdate = {
  name: string
  description?: string | undefined
  metadata?: {} | undefined
  instanceType: {}
  rateCards: RateCard[]
}
type NotFoundProblemResponse = {
  type: string
  title: string
  status?: number | undefined
  detail: string
  instance: string
  extensions?: { [x: string]: { [x: string]: unknown } } | undefined
}
type AppCapability = { type: {}; key: string; name: string; description: string }
type InstallMethod = 'with_oauth2' | 'with_api_key' | 'no_credentials_required'
type StripeApp = {
  id: string
  name: string
  description?: string | undefined
  metadata?: {} | undefined
  createdAt: string
  updatedAt: string
  deletedAt?: string | undefined
  listing: {
    type: {}
    name: string
    description: string
    capabilities: AppCapability[]
    installMethods: InstallMethod[]
  }
  status: {}
  type: 'stripe'
  stripeAccountId: string
  livemode: boolean
  maskedAPIKey: string
}
type SandboxApp = {
  id: string
  name: string
  description?: string | undefined
  metadata?: {} | undefined
  createdAt: string
  updatedAt: string
  deletedAt?: string | undefined
  listing: {
    type: {}
    name: string
    description: string
    capabilities: AppCapability[]
    installMethods: InstallMethod[]
  }
  status: {}
  type: 'sandbox'
}
type CustomInvoicingApp = {
  id: string
  name: string
  description?: string | undefined
  metadata?: {} | undefined
  createdAt: string
  updatedAt: string
  deletedAt?: string | undefined
  listing: {
    type: {}
    name: string
    description: string
    capabilities: AppCapability[]
    installMethods: InstallMethod[]
  }
  status: {}
  type: 'custom_invoicing'
  enableDraftSyncHook: boolean
  enableIssuingSyncHook: boolean
}
type App = StripeApp | SandboxApp | CustomInvoicingApp
type AppPaginatedResponse = { totalCount: number; page: number; pageSize: number; items: App[] }
type CustomInvoicingLineExternalIdMapping = { lineId: string; externalId: string }
type CustomInvoicingLineDiscountExternalIdMapping = { lineDiscountId: string; externalId: string }
type CustomInvoicingDraftSynchronizedRequest = {
  invoicing?:
    | {
        invoiceNumber?: {} | undefined
        externalId?: string | undefined
        lineExternalIds?: CustomInvoicingLineExternalIdMapping[] | undefined
        lineDiscountExternalIds?: CustomInvoicingLineDiscountExternalIdMapping[] | undefined
      }
    | undefined
}
type CustomInvoicingFinalizedRequest = {
  invoicing?: { invoiceNumber?: {} | undefined; sentToCustomerAt?: string | undefined } | undefined
  payment?: { externalId?: string | undefined } | undefined
}
type CustomInvoicingUpdatePaymentStatusRequest = { trigger: {} }
type StripeAppReplaceUpdate = {
  name: string
  description?: string | undefined
  metadata?: {} | undefined
  type: 'stripe'
  secretAPIKey?: string | undefined
}
type SandboxAppReplaceUpdate = {
  name: string
  description?: string | undefined
  metadata?: {} | undefined
  type: 'sandbox'
}
type CustomInvoicingAppReplaceUpdate = {
  name: string
  description?: string | undefined
  metadata?: {} | undefined
  type: 'custom_invoicing'
  enableDraftSyncHook: boolean
  enableIssuingSyncHook: boolean
}
type AppReplaceUpdate =
  | StripeAppReplaceUpdate
  | SandboxAppReplaceUpdate
  | CustomInvoicingAppReplaceUpdate
type StripeAPIKeyInput = { secretAPIKey: string }
type StripeWebhookEvent = {
  id: string
  type: string
  livemode: boolean
  created: number
  data: { object: { [x: string]: unknown } }
}
type StripeWebhookResponse = {
  namespaceId: string
  appId: string
  customerId?: string | undefined
  message?: string | undefined
}
type BillingProfileCustomerOverrideExpand = 'apps' | 'customer'
type BillingProfileCustomerOverrideOrderBy =
  | 'customerId'
  | 'customerName'
  | 'customerKey'
  | 'customerPrimaryEmail'
  | 'customerCreatedAt'
type Address = {
  country?: {} | undefined
  postalCode?: string | undefined
  state?: string | undefined
  city?: string | undefined
  line1?: string | undefined
  line2?: string | undefined
  phoneNumber?: string | undefined
}
type SubscriptionCostBasisPin = {
  customCurrencyId: string
  invoiceCurrency: {}
  costBasisId: string
}
type Subscription = {
  id: string
  name: string
  description?: string | undefined
  metadata?: {} | undefined
  createdAt: string
  updatedAt: string
  deletedAt?: string | undefined
  activeFrom: string
  activeTo?: string | undefined
  annotations?: {} | undefined
  alignment?: { billablesMustAlign?: boolean | undefined } | undefined
  status: {}
  customerId: string
  plan?: { id: string; key: string; version: number } | undefined
  currency: {}
  costBasisMode: {}
  costBasisPins: SubscriptionCostBasisPin[]
  billingCadence: string
  proRatingConfig?: { enabled: boolean; mode: {} } | undefined
  billingAnchor: string
  billingStartsAt?: string | undefined
  settlementMode: {}
}
type BillingProfileCustomerOverrideWithDetails = {
  customerOverride?:
    | {
        createdAt: string
        updatedAt: string
        billingProfileId?: string | undefined
        customerId: string
      }
    | undefined
  baseBillingProfileId: string
  customerProfile?:
    | {
        supplier: {
          id?: string | undefined
          key?: string | undefined
          name?: string | undefined
          taxId?: { code?: {} | undefined } | undefined
          addresses?: Address[] | undefined
        }
        workflow: {
          collection?: { alignment?: {} | undefined; interval?: string | undefined } | undefined
          invoicing?:
            | {
                autoAdvance?: boolean | undefined
                draftPeriod?: string | undefined
                dueAfter?: string | undefined
                progressiveBilling?: boolean | undefined
                subscriptionEndProrationMode?: {} | undefined
                defaultTaxConfig?:
                  | {
                      behavior?: {} | undefined
                      stripe?: { code: string } | undefined
                      customInvoicing?: { code: string } | undefined
                      taxCodeId?: string | undefined
                    }
                  | undefined
              }
            | undefined
          payment?: { collectionMethod?: {} | undefined } | undefined
          tax?: { enabled?: boolean | undefined; enforced?: boolean | undefined } | undefined
        }
        apps: {}
      }
    | undefined
  customer?:
    | {
        id: string
        name: string
        description?: string | undefined
        metadata?: {} | undefined
        createdAt: string
        updatedAt: string
        deletedAt?: string | undefined
        key?: string | undefined
        usageAttribution?: { subjectKeys: string[] } | undefined
        primaryEmail?: string | undefined
        currency?: {} | undefined
        billingAddress?:
          | {
              country?: {} | undefined
              postalCode?: string | undefined
              state?: string | undefined
              city?: string | undefined
              line1?: string | undefined
              line2?: string | undefined
              phoneNumber?: string | undefined
            }
          | undefined
        currentSubscriptionId?: string | undefined
        subscriptions?: Subscription[] | undefined
        annotations?: {} | undefined
      }
    | undefined
}
type BillingProfileCustomerOverrideWithDetailsPaginatedResponse = {
  totalCount: number
  page: number
  pageSize: number
  items: BillingProfileCustomerOverrideWithDetails[]
}
type BillingProfileCustomerOverrideCreate = { billingProfileId?: string | undefined }
type InvoicePendingLineCreate = {
  name: string
  description?: string | undefined
  metadata?: {} | undefined
  taxConfig?:
    | {
        behavior?: {} | undefined
        stripe?: { code: string } | undefined
        customInvoicing?: { code: string } | undefined
        taxCodeId?: string | undefined
      }
    | undefined
  period: { from: string; to: string }
  invoiceAt: string
  price?: {} | undefined
  featureKey?: string | undefined
  rateCard?:
    | {
        featureKey?: string | undefined
        taxConfig?:
          | {
              behavior?: {} | undefined
              stripe?: { code: string } | undefined
              customInvoicing?: { code: string } | undefined
              taxCodeId?: string | undefined
            }
          | undefined
        price: {}
        discounts?:
          | {
              percentage?: { percentage: {}; correlationId?: string | undefined } | undefined
              usage?: { quantity: {}; correlationId?: string | undefined } | undefined
            }
          | undefined
      }
    | undefined
}
type InvoicePendingLineCreateInput = { currency: {}; lines: InvoicePendingLineCreate[] }
type InvoiceLineAmountDiscount = {
  createdAt: string
  updatedAt: string
  deletedAt?: string | undefined
  id: string
  reason: {}
  description?: string | undefined
  externalIds?: { invoicing?: string | undefined; tax?: string | undefined } | undefined
  amount: {}
}
type InvoiceLineUsageDiscount = {
  createdAt: string
  updatedAt: string
  deletedAt?: string | undefined
  id: string
  reason: {}
  description?: string | undefined
  externalIds?: { invoicing?: string | undefined; tax?: string | undefined } | undefined
  quantity: {}
  preLinePeriodQuantity?: {} | undefined
}
type InvoiceLineCreditAllocation = { amount: {}; description?: string | undefined }
type InvoiceLineTaxItem = {
  config?:
    | {
        behavior?: {} | undefined
        stripe?: { code: string } | undefined
        customInvoicing?: { code: string } | undefined
        taxCodeId?: string | undefined
      }
    | undefined
  percent?: {} | undefined
  surcharge?: {} | undefined
  behavior?: {} | undefined
}
type InvoiceDetailedLine = {
  name: string
  description?: string | undefined
  metadata?: {} | undefined
  createdAt: string
  updatedAt: string
  deletedAt?: string | undefined
  id: string
  managedBy: {}
  status: {}
  discounts?:
    | {
        amount?: InvoiceLineAmountDiscount[] | undefined
        usage?: InvoiceLineUsageDiscount[] | undefined
      }
    | undefined
  creditAllocations?: InvoiceLineCreditAllocation[] | undefined
  invoice?: { id: string; number?: {} | undefined } | undefined
  currency: {}
  taxes?: InvoiceLineTaxItem[] | undefined
  taxConfig?:
    | {
        behavior?: {} | undefined
        stripe?: { code: string } | undefined
        customInvoicing?: { code: string } | undefined
        taxCodeId?: string | undefined
      }
    | undefined
  totals: {
    amount: {}
    chargesTotal: {}
    discountsTotal: {}
    creditsTotal: {}
    taxesInclusiveTotal: {}
    taxesExclusiveTotal: {}
    taxesTotal: {}
    total: {}
  }
  period: { from: string; to: string }
  externalIds?: { invoicing?: string | undefined; tax?: string | undefined } | undefined
  subscription?:
    | {
        subscription: { id: string }
        phase: { id: string }
        item: { id: string }
        billingPeriod: { from: string; to: string }
      }
    | undefined
  invoiceAt: string
  type: 'flat_fee'
  perUnitAmount?: {} | undefined
  paymentTerm?: {} | undefined
  quantity?: {} | undefined
  rateCard?:
    | {
        taxConfig?:
          | {
              behavior?: {} | undefined
              stripe?: { code: string } | undefined
              customInvoicing?: { code: string } | undefined
              taxCodeId?: string | undefined
            }
          | undefined
        price: { type: 'flat'; amount: {}; paymentTerm?: {} | undefined }
        quantity?: {} | undefined
        discounts?:
          | {
              percentage?: { percentage: {}; correlationId?: string | undefined } | undefined
              usage?: { quantity: {}; correlationId?: string | undefined } | undefined
            }
          | undefined
      }
    | undefined
  category?: {} | undefined
}
type InvoiceLine = {
  name: string
  description?: string | undefined
  metadata?: {} | undefined
  createdAt: string
  updatedAt: string
  deletedAt?: string | undefined
  id: string
  managedBy: {}
  status: {}
  discounts?:
    | {
        amount?: InvoiceLineAmountDiscount[] | undefined
        usage?: InvoiceLineUsageDiscount[] | undefined
      }
    | undefined
  creditAllocations?: InvoiceLineCreditAllocation[] | undefined
  invoice?: { id: string; number?: {} | undefined } | undefined
  currency: {}
  taxes?: InvoiceLineTaxItem[] | undefined
  taxConfig?:
    | {
        behavior?: {} | undefined
        stripe?: { code: string } | undefined
        customInvoicing?: { code: string } | undefined
        taxCodeId?: string | undefined
      }
    | undefined
  totals: {
    amount: {}
    chargesTotal: {}
    discountsTotal: {}
    creditsTotal: {}
    taxesInclusiveTotal: {}
    taxesExclusiveTotal: {}
    taxesTotal: {}
    total: {}
  }
  period: { from: string; to: string }
  invoiceAt: string
  externalIds?: { invoicing?: string | undefined; tax?: string | undefined } | undefined
  subscription?:
    | {
        subscription: { id: string }
        phase: { id: string }
        item: { id: string }
        billingPeriod: { from: string; to: string }
      }
    | undefined
  type: 'usage_based'
  price?: {} | undefined
  featureKey?: string | undefined
  children?: InvoiceDetailedLine[] | undefined
  rateCard?:
    | {
        featureKey?: string | undefined
        taxConfig?:
          | {
              behavior?: {} | undefined
              stripe?: { code: string } | undefined
              customInvoicing?: { code: string } | undefined
              taxCodeId?: string | undefined
            }
          | undefined
        price: {}
        discounts?:
          | {
              percentage?: { percentage: {}; correlationId?: string | undefined } | undefined
              usage?: { quantity: {}; correlationId?: string | undefined } | undefined
            }
          | undefined
      }
    | undefined
  quantity?: {} | undefined
  meteredQuantity?: {} | undefined
  preLinePeriodQuantity?: {} | undefined
  meteredPreLinePeriodQuantity?: {} | undefined
}
type InvoiceDocumentRef = {
  type: 'credit_note_original_invoice'
  reason?: string | undefined
  description?: string | undefined
  issuedAt?: string | undefined
  number?: {} | undefined
  url: string
}
type ValidationIssue = {
  createdAt: string
  updatedAt: string
  deletedAt?: string | undefined
  id: string
  severity: {}
  field?: string | undefined
  code?: string | undefined
  component: string
  message: string
  metadata?: {} | undefined
}
type InvoicePendingLineCreateResponse = {
  lines: InvoiceLine[]
  invoice: {
    id: string
    description?: string | undefined
    metadata?: {} | undefined
    createdAt: string
    updatedAt: string
    deletedAt?: string | undefined
    type: {}
    supplier: {
      id?: string | undefined
      key?: string | undefined
      name?: string | undefined
      taxId?: { code?: {} | undefined } | undefined
      addresses?: Address[] | undefined
    }
    customer: {
      id?: string | undefined
      key?: string | undefined
      name?: string | undefined
      taxId?: { code?: {} | undefined } | undefined
      addresses?: Address[] | undefined
      usageAttribution: { subjectKeys: string[] }
    }
    number: {}
    currency: {}
    preceding?: InvoiceDocumentRef[] | undefined
    totals: {
      amount: {}
      chargesTotal: {}
      discountsTotal: {}
      creditsTotal: {}
      taxesInclusiveTotal: {}
      taxesExclusiveTotal: {}
      taxesTotal: {}
      total: {}
    }
    status: {}
    statusDetails: {
      immutable: boolean
      failed: boolean
      extendedStatus: string
      availableActions: {
        advance?: { resultingState: string } | undefined
        approve?: { resultingState: string } | undefined
        delete?: { resultingState: string } | undefined
        retry?: { resultingState: string } | undefined
        snapshotQuantities?: { resultingState: string } | undefined
        void?: { resultingState: string } | undefined
        invoice?: {} | undefined
      }
    }
    issuedAt?: string | undefined
    draftUntil?: string | undefined
    quantitySnapshotedAt?: string | undefined
    collectionAt?: string | undefined
    dueAt?: string | undefined
    period?: { from: string; to: string } | undefined
    voidedAt?: string | undefined
    sentToCustomerAt?: string | undefined
    workflow: {
      apps?: {} | undefined
      sourceBillingProfileId: string
      workflow: {
        collection?: { alignment?: {} | undefined; interval?: string | undefined } | undefined
        invoicing?:
          | {
              autoAdvance?: boolean | undefined
              draftPeriod?: string | undefined
              dueAfter?: string | undefined
              progressiveBilling?: boolean | undefined
              subscriptionEndProrationMode?: {} | undefined
              defaultTaxConfig?:
                | {
                    behavior?: {} | undefined
                    stripe?: { code: string } | undefined
                    customInvoicing?: { code: string } | undefined
                    taxCodeId?: string | undefined
                  }
                | undefined
            }
          | undefined
        payment?: { collectionMethod?: {} | undefined } | undefined
        tax?: { enabled?: boolean | undefined; enforced?: boolean | undefined } | undefined
      }
    }
    lines?: InvoiceLine[] | undefined
    payment?: { terms?: {} | undefined } | undefined
    validationIssues?: ValidationIssue[] | undefined
    externalIds?:
      | { invoicing?: string | undefined; tax?: string | undefined; payment?: string | undefined }
      | undefined
  }
  isInvoiceNew: boolean
}
type InvoiceSimulationLine = {
  name: string
  description?: string | undefined
  metadata?: {} | undefined
  taxConfig?:
    | {
        behavior?: {} | undefined
        stripe?: { code: string } | undefined
        customInvoicing?: { code: string } | undefined
        taxCodeId?: string | undefined
      }
    | undefined
  period: { from: string; to: string }
  invoiceAt: string
  price?: {} | undefined
  featureKey?: string | undefined
  rateCard?:
    | {
        featureKey?: string | undefined
        taxConfig?:
          | {
              behavior?: {} | undefined
              stripe?: { code: string } | undefined
              customInvoicing?: { code: string } | undefined
              taxCodeId?: string | undefined
            }
          | undefined
        price: {}
        discounts?:
          | {
              percentage?: { percentage: {}; correlationId?: string | undefined } | undefined
              usage?: { quantity: {}; correlationId?: string | undefined } | undefined
            }
          | undefined
      }
    | undefined
  quantity: {}
  preLinePeriodQuantity?: {} | undefined
  id?: string | undefined
}
type InvoiceSimulationInput = {
  number?: {} | undefined
  currency: {}
  lines: InvoiceSimulationLine[]
}
type Invoice = {
  id: string
  description?: string | undefined
  metadata?: {} | undefined
  createdAt: string
  updatedAt: string
  deletedAt?: string | undefined
  type: {}
  supplier: {
    id?: string | undefined
    key?: string | undefined
    name?: string | undefined
    taxId?: { code?: {} | undefined } | undefined
    addresses?: Address[] | undefined
  }
  customer: {
    id?: string | undefined
    key?: string | undefined
    name?: string | undefined
    taxId?: { code?: {} | undefined } | undefined
    addresses?: Address[] | undefined
    usageAttribution: { subjectKeys: string[] }
  }
  number: {}
  currency: {}
  preceding?: InvoiceDocumentRef[] | undefined
  totals: {
    amount: {}
    chargesTotal: {}
    discountsTotal: {}
    creditsTotal: {}
    taxesInclusiveTotal: {}
    taxesExclusiveTotal: {}
    taxesTotal: {}
    total: {}
  }
  status: {}
  statusDetails: {
    immutable: boolean
    failed: boolean
    extendedStatus: string
    availableActions: {
      advance?: { resultingState: string } | undefined
      approve?: { resultingState: string } | undefined
      delete?: { resultingState: string } | undefined
      retry?: { resultingState: string } | undefined
      snapshotQuantities?: { resultingState: string } | undefined
      void?: { resultingState: string } | undefined
      invoice?: {} | undefined
    }
  }
  issuedAt?: string | undefined
  draftUntil?: string | undefined
  quantitySnapshotedAt?: string | undefined
  collectionAt?: string | undefined
  dueAt?: string | undefined
  period?: { from: string; to: string } | undefined
  voidedAt?: string | undefined
  sentToCustomerAt?: string | undefined
  workflow: {
    apps?: {} | undefined
    sourceBillingProfileId: string
    workflow: {
      collection?: { alignment?: {} | undefined; interval?: string | undefined } | undefined
      invoicing?:
        | {
            autoAdvance?: boolean | undefined
            draftPeriod?: string | undefined
            dueAfter?: string | undefined
            progressiveBilling?: boolean | undefined
            subscriptionEndProrationMode?: {} | undefined
            defaultTaxConfig?:
              | {
                  behavior?: {} | undefined
                  stripe?: { code: string } | undefined
                  customInvoicing?: { code: string } | undefined
                  taxCodeId?: string | undefined
                }
              | undefined
          }
        | undefined
      payment?: { collectionMethod?: {} | undefined } | undefined
      tax?: { enabled?: boolean | undefined; enforced?: boolean | undefined } | undefined
    }
  }
  lines?: InvoiceLine[] | undefined
  payment?: { terms?: {} | undefined } | undefined
  validationIssues?: ValidationIssue[] | undefined
  externalIds?:
    | { invoicing?: string | undefined; tax?: string | undefined; payment?: string | undefined }
    | undefined
}
type InvoiceStatus =
  | 'gathering'
  | 'draft'
  | 'issuing'
  | 'issued'
  | 'payment_processing'
  | 'overdue'
  | 'paid'
  | 'uncollectible'
  | 'voided'
type InvoiceExpand = 'lines' | 'preceding' | 'workflow.apps'
type InvoiceOrderBy =
  | 'customer.name'
  | 'issuedAt'
  | 'status'
  | 'createdAt'
  | 'updatedAt'
  | 'periodStart'
type InvoicePaginatedResponse = {
  totalCount: number
  page: number
  pageSize: number
  items: Invoice[]
}
type InvoicePendingLinesActionInput = {
  filters?: { lineIds?: string[] | undefined } | undefined
  asOf?: string | undefined
  customerId: string
  progressiveBillingOverride?: boolean | undefined
}
type InvoiceLineReplaceUpdate = {
  name: string
  description?: string | undefined
  metadata?: {} | undefined
  taxConfig?:
    | {
        behavior?: {} | undefined
        stripe?: { code: string } | undefined
        customInvoicing?: { code: string } | undefined
        taxCodeId?: string | undefined
      }
    | undefined
  period: { from: string; to: string }
  invoiceAt: string
  price?: {} | undefined
  featureKey?: string | undefined
  rateCard?:
    | {
        featureKey?: string | undefined
        taxConfig?:
          | {
              behavior?: {} | undefined
              stripe?: { code: string } | undefined
              customInvoicing?: { code: string } | undefined
              taxCodeId?: string | undefined
            }
          | undefined
        price: {}
        discounts?:
          | {
              percentage?: { percentage: {}; correlationId?: string | undefined } | undefined
              usage?: { quantity: {}; correlationId?: string | undefined } | undefined
            }
          | undefined
      }
    | undefined
  id?: string | undefined
}
type InvoiceReplaceUpdate = {
  description?: string | undefined
  metadata?: {} | undefined
  supplier: {
    key?: string | undefined
    name?: string | undefined
    taxId?: { code?: {} | undefined } | undefined
    addresses?: Address[] | undefined
  }
  customer: {
    key?: string | undefined
    name?: string | undefined
    taxId?: { code?: {} | undefined } | undefined
    addresses?: Address[] | undefined
  }
  lines: InvoiceLineReplaceUpdate[]
  workflow: {
    workflow: {
      invoicing: {
        autoAdvance?: boolean | undefined
        draftPeriod?: string | undefined
        dueAfter?: string | undefined
        subscriptionEndProrationMode?: {} | undefined
        defaultTaxConfig?:
          | {
              behavior?: {} | undefined
              stripe?: { code: string } | undefined
              customInvoicing?: { code: string } | undefined
              taxCodeId?: string | undefined
            }
          | undefined
      }
      payment: { collectionMethod?: {} | undefined }
    }
  }
}
type VoidInvoiceActionLineOverride = { lineId: string; action: { percentage: {}; action: {} } }
type VoidInvoiceActionInput = {
  action: { percentage: {}; action: {} }
  reason: string
  overrides?: (VoidInvoiceActionLineOverride[] | null) | undefined
}
type BillingProfileExpand = 'apps'
type BillingProfileOrderBy = 'createdAt' | 'updatedAt' | 'default' | 'name'
type BillingProfile = {
  id: string
  name: string
  description?: string | undefined
  metadata?: {} | undefined
  createdAt: string
  updatedAt: string
  deletedAt?: string | undefined
  supplier: {
    id?: string | undefined
    key?: string | undefined
    name?: string | undefined
    taxId?: { code?: {} | undefined } | undefined
    addresses?: Address[] | undefined
  }
  workflow: {
    collection?: { alignment?: {} | undefined; interval?: string | undefined } | undefined
    invoicing?:
      | {
          autoAdvance?: boolean | undefined
          draftPeriod?: string | undefined
          dueAfter?: string | undefined
          progressiveBilling?: boolean | undefined
          subscriptionEndProrationMode?: {} | undefined
          defaultTaxConfig?:
            | {
                behavior?: {} | undefined
                stripe?: { code: string } | undefined
                customInvoicing?: { code: string } | undefined
                taxCodeId?: string | undefined
              }
            | undefined
        }
      | undefined
    payment?: { collectionMethod?: {} | undefined } | undefined
    tax?: { enabled?: boolean | undefined; enforced?: boolean | undefined } | undefined
  }
  apps: {}
  default: boolean
}
type BillingProfilePaginatedResponse = {
  totalCount: number
  page: number
  pageSize: number
  items: BillingProfile[]
}
type BillingProfileCreate = {
  name: string
  description?: string | undefined
  metadata?: {} | undefined
  supplier: {
    id?: string | undefined
    key?: string | undefined
    name?: string | undefined
    taxId?: { code?: {} | undefined } | undefined
    addresses?: Address[] | undefined
  }
  default: boolean
  workflow: {
    collection?: { alignment?: {} | undefined; interval?: string | undefined } | undefined
    invoicing?:
      | {
          autoAdvance?: boolean | undefined
          draftPeriod?: string | undefined
          dueAfter?: string | undefined
          progressiveBilling?: boolean | undefined
          subscriptionEndProrationMode?: {} | undefined
          defaultTaxConfig?:
            | {
                behavior?: {} | undefined
                stripe?: { code: string } | undefined
                customInvoicing?: { code: string } | undefined
                taxCodeId?: string | undefined
              }
            | undefined
        }
      | undefined
    payment?: { collectionMethod?: {} | undefined } | undefined
    tax?: { enabled?: boolean | undefined; enforced?: boolean | undefined } | undefined
  }
  apps: { tax: string; invoicing: string; payment: string }
}
type BillingProfileReplaceUpdateWithWorkflow = {
  name: string
  description?: string | undefined
  metadata?: {} | undefined
  supplier: {
    id?: string | undefined
    key?: string | undefined
    name?: string | undefined
    taxId?: { code?: {} | undefined } | undefined
    addresses?: Address[] | undefined
  }
  default: boolean
  workflow: {
    collection?: { alignment?: {} | undefined; interval?: string | undefined } | undefined
    invoicing?:
      | {
          autoAdvance?: boolean | undefined
          draftPeriod?: string | undefined
          dueAfter?: string | undefined
          progressiveBilling?: boolean | undefined
          subscriptionEndProrationMode?: {} | undefined
          defaultTaxConfig?:
            | {
                behavior?: {} | undefined
                stripe?: { code: string } | undefined
                customInvoicing?: { code: string } | undefined
                taxCodeId?: string | undefined
              }
            | undefined
        }
      | undefined
    payment?: { collectionMethod?: {} | undefined } | undefined
    tax?: { enabled?: boolean | undefined; enforced?: boolean | undefined } | undefined
  }
}
type CustomerCreate = {
  name: string
  description?: string | undefined
  metadata?: {} | undefined
  key?: string | undefined
  usageAttribution?: { subjectKeys: string[] } | undefined
  primaryEmail?: string | undefined
  currency?: {} | undefined
  billingAddress?:
    | {
        country?: {} | undefined
        postalCode?: string | undefined
        state?: string | undefined
        city?: string | undefined
        line1?: string | undefined
        line2?: string | undefined
        phoneNumber?: string | undefined
      }
    | undefined
}
type Customer = {
  id: string
  name: string
  description?: string | undefined
  metadata?: {} | undefined
  createdAt: string
  updatedAt: string
  deletedAt?: string | undefined
  key?: string | undefined
  usageAttribution?: { subjectKeys: string[] } | undefined
  primaryEmail?: string | undefined
  currency?: {} | undefined
  billingAddress?:
    | {
        country?: {} | undefined
        postalCode?: string | undefined
        state?: string | undefined
        city?: string | undefined
        line1?: string | undefined
        line2?: string | undefined
        phoneNumber?: string | undefined
      }
    | undefined
  currentSubscriptionId?: string | undefined
  subscriptions?: Subscription[] | undefined
  annotations?: {} | undefined
}
type CustomerOrderBy = 'id' | 'name' | 'createdAt'
type CustomerExpand = 'subscriptions'
type CustomerPaginatedResponse = {
  totalCount: number
  page: number
  pageSize: number
  items: Customer[]
}
type ULIDOrExternalKey = string | string
type CustomerReplaceUpdate = {
  name: string
  description?: string | undefined
  metadata?: {} | undefined
  key?: string | undefined
  usageAttribution?: { subjectKeys: string[] } | undefined
  primaryEmail?: string | undefined
  currency?: {} | undefined
  billingAddress?:
    | {
        country?: {} | undefined
        postalCode?: string | undefined
        state?: string | undefined
        city?: string | undefined
        line1?: string | undefined
        line2?: string | undefined
        phoneNumber?: string | undefined
      }
    | undefined
}
type EntitlementValue = {
  hasAccess: boolean
  balance?: number | undefined
  usage?: number | undefined
  overage?: number | undefined
  totalAvailableGrantAmount?: number | undefined
  config?: string | undefined
}
type CustomerAccess = { entitlements: { [x: string]: EntitlementValue } }
type AppType = 'stripe' | 'sandbox' | 'custom_invoicing'
type StripeCustomerAppData = {
  id?: string | undefined
  type: 'stripe'
  stripeCustomerId: string
  stripeDefaultPaymentMethodId?: string | undefined
  app?:
    | {
        id: string
        name: string
        description?: string | undefined
        metadata?: {} | undefined
        createdAt: string
        updatedAt: string
        deletedAt?: string | undefined
        listing: {
          type: {}
          name: string
          description: string
          capabilities: AppCapability[]
          installMethods: InstallMethod[]
        }
        status: {}
        type: 'stripe'
        stripeAccountId: string
        livemode: boolean
        maskedAPIKey: string
      }
    | undefined
}
type SandboxCustomerAppData = {
  app?:
    | {
        id: string
        name: string
        description?: string | undefined
        metadata?: {} | undefined
        createdAt: string
        updatedAt: string
        deletedAt?: string | undefined
        listing: {
          type: {}
          name: string
          description: string
          capabilities: AppCapability[]
          installMethods: InstallMethod[]
        }
        status: {}
        type: 'sandbox'
      }
    | undefined
  id?: string | undefined
  type: 'sandbox'
}
type CustomInvoicingCustomerAppData = {
  app?:
    | {
        id: string
        name: string
        description?: string | undefined
        metadata?: {} | undefined
        createdAt: string
        updatedAt: string
        deletedAt?: string | undefined
        listing: {
          type: {}
          name: string
          description: string
          capabilities: AppCapability[]
          installMethods: InstallMethod[]
        }
        status: {}
        type: 'custom_invoicing'
        enableDraftSyncHook: boolean
        enableIssuingSyncHook: boolean
      }
    | undefined
  id?: string | undefined
  type: 'custom_invoicing'
  metadata?: {} | undefined
}
type CustomerAppData =
  | StripeCustomerAppData
  | SandboxCustomerAppData
  | CustomInvoicingCustomerAppData
type CustomerAppDataPaginatedResponse = {
  totalCount: number
  page: number
  pageSize: number
  items: CustomerAppData[]
}
type StripeCustomerAppDataCreateOrUpdateItem = {
  id?: string | undefined
  type: 'stripe'
  stripeCustomerId: string
  stripeDefaultPaymentMethodId?: string | undefined
}
type CustomerAppDataCreateOrUpdateItem =
  | StripeCustomerAppDataCreateOrUpdateItem
  | SandboxCustomerAppData
  | CustomInvoicingCustomerAppData
type StripeCustomerAppDataBase = {
  stripeCustomerId: string
  stripeDefaultPaymentMethodId?: string | undefined
}
type CreateStripeCustomerPortalSessionParams = {
  configurationId?: string | undefined
  locale?: string | undefined
  returnUrl?: string | undefined
}
type StripeCustomerPortalSession = {
  id: string
  stripeCustomerId: string
  configurationId: string
  livemode: boolean
  createdAt: string
  returnUrl: string
  locale: string
  url: string
}
type SubscriptionStatus = 'active' | 'inactive' | 'canceled' | 'scheduled'
type CustomerSubscriptionOrderBy = 'activeFrom' | 'activeTo'
type SubscriptionPaginatedResponse = {
  totalCount: number
  page: number
  pageSize: number
  items: Subscription[]
}
type EntitlementType = 'metered' | 'boolean' | 'static'
type EntitlementOrderBy = 'createdAt' | 'updatedAt'
type EntitlementMetered = {
  type: 'metered'
  isSoftLimit?: boolean | undefined
  isUnlimited?: boolean | undefined
  issueAfterReset?: number | undefined
  issueAfterResetPriority?: number | undefined
  preserveOverageAtReset?: boolean | undefined
  createdAt: string
  updatedAt: string
  deletedAt?: string | undefined
  metadata?: {} | undefined
  activeFrom: string
  activeTo?: string | undefined
  annotations?: {} | undefined
  id: string
  subjectKey: string
  featureKey: string
  featureId: string
  lastReset: string
  currentUsagePeriod: { from: string; to: string }
  measureUsageFrom: string
  usagePeriod: { interval: {}; anchor: string; intervalISO: string }
}
type EntitlementStatic = {
  type: 'static'
  config: string
  createdAt: string
  updatedAt: string
  deletedAt?: string | undefined
  metadata?: {} | undefined
  activeFrom: string
  activeTo?: string | undefined
  annotations?: {} | undefined
  id: string
  subjectKey: string
  featureKey: string
  featureId: string
  currentUsagePeriod?: { from: string; to: string } | undefined
  usagePeriod?: { interval: {}; anchor: string; intervalISO: string } | undefined
}
type EntitlementBoolean = {
  type: 'boolean'
  createdAt: string
  updatedAt: string
  deletedAt?: string | undefined
  metadata?: {} | undefined
  activeFrom: string
  activeTo?: string | undefined
  annotations?: {} | undefined
  id: string
  subjectKey: string
  featureKey: string
  featureId: string
  currentUsagePeriod?: { from: string; to: string } | undefined
  usagePeriod?: { interval: {}; anchor: string; intervalISO: string } | undefined
}
type Entitlement = EntitlementMetered | EntitlementStatic | EntitlementBoolean
type EntitlementPaginatedResponse = {
  totalCount: number
  page: number
  pageSize: number
  items: Entitlement[]
}
type ListEntitlementsResult = Entitlement[] | EntitlementPaginatedResponse
type IngestedEvent = {
  event: {
    id: string
    source: string
    specversion: string
    type: string
    datacontenttype?: 'application/json' | undefined
    dataschema?: (string | null) | undefined
    subject: string
    time?: (string | null) | undefined
    data?: ({ [x: string]: { [x: string]: unknown } } | null) | undefined
  }
  customerId?: string | undefined
  validationError?: string | undefined
  ingestedAt: string
  storedAt: string
}
type Event = {
  id: string
  source: string
  specversion: string
  type: string
  datacontenttype?: 'application/json' | undefined
  dataschema?: (string | null) | undefined
  subject: string
  time?: (string | null) | undefined
  data?: ({ [x: string]: { [x: string]: unknown } } | null) | undefined
}
type IngestEventsBody = Event | Event[]
type FeatureOrderBy = 'id' | 'key' | 'name' | 'createdAt' | 'updatedAt'
type FilterString = {
  $eq?: (string | null) | undefined
  $ne?: (string | null) | undefined
  $in?: (string[] | null) | undefined
  $nin?: (string[] | null) | undefined
  $like?: (string | null) | undefined
  $nlike?: (string | null) | undefined
  $ilike?: (string | null) | undefined
  $nilike?: (string | null) | undefined
  $gt?: (string | null) | undefined
  $gte?: (string | null) | undefined
  $lt?: (string | null) | undefined
  $lte?: (string | null) | undefined
  $and?: (FilterString[] | null) | undefined
  $or?: (FilterString[] | null) | undefined
}
type Feature = {
  createdAt: string
  updatedAt: string
  deletedAt?: string | undefined
  archivedAt?: string | undefined
  key: string
  name: string
  metadata?: {} | undefined
  meterSlug?: string | undefined
  meterGroupByFilters?: { [x: string]: string } | undefined
  advancedMeterGroupByFilters?: { [x: string]: FilterString } | undefined
  unitCost?: {} | undefined
  id: string
}
type FeaturePaginatedResponse = {
  totalCount: number
  page: number
  pageSize: number
  items: Feature[]
}
type ListFeaturesResult = Feature[] | FeaturePaginatedResponse
type FeatureCreateInputs = {
  key: string
  name: string
  metadata?: {} | undefined
  meterSlug?: string | undefined
  meterGroupByFilters?: { [x: string]: string } | undefined
  advancedMeterGroupByFilters?: { [x: string]: FilterString } | undefined
  unitCost?: {} | undefined
}
type GrantOrderBy = 'id' | 'createdAt' | 'updatedAt'
type EntitlementGrant = {
  createdAt: string
  updatedAt: string
  deletedAt?: string | undefined
  amount: number
  priority?: number | undefined
  effectiveAt: string
  expiration: { duration: {}; count: number }
  maxRolloverAmount?: number | undefined
  minRolloverAmount?: number | undefined
  metadata?: {} | undefined
  id: string
  entitlementId: string
  nextRecurrence?: string | undefined
  expiresAt?: string | undefined
  voidedAt?: string | undefined
  recurrence?: { interval: {}; anchor: string; intervalISO: string } | undefined
  annotations?: {} | undefined
}
type GrantPaginatedResponse = {
  totalCount: number
  page: number
  pageSize: number
  items: EntitlementGrant[]
}
type ConflictProblemResponse = {
  type: string
  title: string
  status?: number | undefined
  detail: string
  instance: string
  extensions?: { [x: string]: { [x: string]: unknown } } | undefined
}
type Currency = { code: {}; name: string; symbol: string; subunits: number }
type Progress = { success: bigint; failed: bigint; total: bigint; updatedAt: string }
type MarketplaceListing = {
  type: {}
  name: string
  description: string
  capabilities: AppCapability[]
  installMethods: InstallMethod[]
}
type MarketplaceListingPaginatedResponse = {
  totalCount: number
  page: number
  pageSize: number
  items: MarketplaceListing[]
}
type MarketplaceInstallRequestPayload = {
  name?: string | undefined
  createBillingProfile?: boolean | undefined
}
type AppCapabilityType =
  | 'reportUsage'
  | 'reportEvents'
  | 'calculateTax'
  | 'invoiceCustomers'
  | 'collectPayments'
type MarketplaceInstallResponse = { app: App; defaultForCapabilityTypes: AppCapabilityType[] }
type ClientAppStartResponse = { url: string }
type OAuth2AuthorizationCodeGrantErrorType =
  | 'invalid_request'
  | 'unauthorized_client'
  | 'access_denied'
  | 'unsupported_response_type'
  | 'invalid_scope'
  | 'server_error'
  | 'temporarily_unavailable'
type MeterOrderBy = 'key' | 'name' | 'aggregation' | 'createdAt' | 'updatedAt'
type Meter = {
  id: string
  description?: string | undefined
  metadata?: {} | undefined
  createdAt: string
  updatedAt: string
  deletedAt?: string | undefined
  name?: string | undefined
  slug: string
  aggregation: {}
  eventType: string
  eventFrom?: string | undefined
  valueProperty?: string | undefined
  groupBy?: { [x: string]: string } | undefined
  annotations?: {} | undefined
}
type MeterCreate = {
  description?: string | undefined
  metadata?: {} | undefined
  name?: string | undefined
  slug: string
  aggregation: {}
  eventType: string
  eventFrom?: string | undefined
  valueProperty?: string | undefined
  groupBy?: { [x: string]: string } | undefined
}
type MeterUpdate = {
  description?: string | undefined
  metadata?: {} | undefined
  name?: string | undefined
  groupBy?: { [x: string]: string } | undefined
}
type WindowSize = 'MINUTE' | 'HOUR' | 'DAY' | 'MONTH'
type MeterQueryRow = {
  value: number
  windowStart: string
  windowEnd: string
  subject: string | null
  customerId?: string | undefined
  groupBy: { [x: string]: string | null }
}
type MeterQueryResult = {
  from?: string | undefined
  to?: string | undefined
  windowSize?: {} | undefined
  data: MeterQueryRow[]
}
type MeterQueryRequest = {
  clientId?: string | undefined
  from?: string | undefined
  to?: string | undefined
  windowSize?: {} | undefined
  windowTimeZone?: string | undefined
  subject?: string[] | undefined
  filterCustomerId?: string[] | undefined
  filterGroupBy?: { [x: string]: string[] } | undefined
  advancedMeterGroupByFilters?: { [x: string]: FilterString } | undefined
  groupBy?: string[] | undefined
}
type NotificationChannelOrderBy = 'id' | 'type' | 'createdAt' | 'updatedAt'
type NotificationChannel = {
  createdAt: string
  updatedAt: string
  deletedAt?: string | undefined
  id: string
  type: 'WEBHOOK'
  name: string
  disabled?: boolean | undefined
  annotations?: {} | undefined
  metadata?: {} | undefined
  url: string
  customHeaders?: { [x: string]: string } | undefined
  signingSecret?: string | undefined
}
type NotificationChannelPaginatedResponse = {
  totalCount: number
  page: number
  pageSize: number
  items: NotificationChannel[]
}
type NotificationChannelCreateRequest = {
  type: 'WEBHOOK'
  name: string
  disabled?: boolean | undefined
  metadata?: {} | undefined
  url: string
  customHeaders?: { [x: string]: string } | undefined
  signingSecret?: string | undefined
}
type NotificationEventOrderBy = 'id' | 'createdAt'
type NotificationEventDeliveryAttempt = {
  state: {}
  response: {
    statusCode?: number | undefined
    body: string
    durationMs: number
    url?: string | undefined
  }
  timestamp: string
}
type NotificationEventDeliveryStatus = {
  state: {}
  reason: string
  updatedAt: string
  channel: { id: string; type: {} }
  annotations?: {} | undefined
  nextAttempt?: string | undefined
  attempts: NotificationEventDeliveryAttempt[]
}
type NotificationEvent = {
  id: string
  type: {}
  createdAt: string
  rule: {}
  deliveryStatus: NotificationEventDeliveryStatus[]
  payload: {}
  annotations?: {} | undefined
}
type NotificationEventPaginatedResponse = {
  totalCount: number
  page: number
  pageSize: number
  items: NotificationEvent[]
}
type NotificationEventResendRequest = { channels?: string[] | undefined }
type NotificationRuleOrderBy = 'id' | 'type' | 'createdAt' | 'updatedAt'
type NotificationChannelMeta = { id: string; type: {} }
type NotificationRuleBalanceThresholdValue = { value: number; type: {} }
type FeatureMeta = { id: string; key: string }
type NotificationRuleBalanceThreshold = {
  createdAt: string
  updatedAt: string
  deletedAt?: string | undefined
  id: string
  type: 'entitlements.balance.threshold'
  name: string
  disabled?: boolean | undefined
  channels: NotificationChannelMeta[]
  annotations?: {} | undefined
  metadata?: {} | undefined
  thresholds: NotificationRuleBalanceThresholdValue[]
  features?: FeatureMeta[] | undefined
}
type NotificationRuleEntitlementReset = {
  createdAt: string
  updatedAt: string
  deletedAt?: string | undefined
  id: string
  type: 'entitlements.reset'
  name: string
  disabled?: boolean | undefined
  channels: NotificationChannelMeta[]
  annotations?: {} | undefined
  metadata?: {} | undefined
  features?: FeatureMeta[] | undefined
}
type NotificationRuleInvoiceCreated = {
  createdAt: string
  updatedAt: string
  deletedAt?: string | undefined
  id: string
  type: 'invoice.created'
  name: string
  disabled?: boolean | undefined
  channels: NotificationChannelMeta[]
  annotations?: {} | undefined
  metadata?: {} | undefined
}
type NotificationRuleInvoiceUpdated = {
  createdAt: string
  updatedAt: string
  deletedAt?: string | undefined
  id: string
  type: 'invoice.updated'
  name: string
  disabled?: boolean | undefined
  channels: NotificationChannelMeta[]
  annotations?: {} | undefined
  metadata?: {} | undefined
}
type NotificationRule =
  | NotificationRuleBalanceThreshold
  | NotificationRuleEntitlementReset
  | NotificationRuleInvoiceCreated
  | NotificationRuleInvoiceUpdated
type NotificationRulePaginatedResponse = {
  totalCount: number
  page: number
  pageSize: number
  items: NotificationRule[]
}
type NotificationRuleBalanceThresholdCreateRequest = {
  type: 'entitlements.balance.threshold'
  name: string
  disabled?: boolean | undefined
  metadata?: {} | undefined
  thresholds: NotificationRuleBalanceThresholdValue[]
  channels: string[]
  features?: string[] | undefined
}
type NotificationRuleEntitlementResetCreateRequest = {
  type: 'entitlements.reset'
  name: string
  disabled?: boolean | undefined
  metadata?: {} | undefined
  channels: string[]
  features?: string[] | undefined
}
type NotificationRuleInvoiceCreatedCreateRequest = {
  type: 'invoice.created'
  name: string
  disabled?: boolean | undefined
  metadata?: {} | undefined
  channels: string[]
}
type NotificationRuleInvoiceUpdatedCreateRequest = {
  type: 'invoice.updated'
  name: string
  disabled?: boolean | undefined
  metadata?: {} | undefined
  channels: string[]
}
type NotificationRuleCreateRequest =
  | NotificationRuleBalanceThresholdCreateRequest
  | NotificationRuleEntitlementResetCreateRequest
  | NotificationRuleInvoiceCreatedCreateRequest
  | NotificationRuleInvoiceUpdatedCreateRequest
type PlanStatus = 'draft' | 'active' | 'archived' | 'scheduled'
type PlanOrderBy = 'id' | 'key' | 'version' | 'created_at' | 'updated_at'
type PlanPhase = {
  key: string
  name: string
  description?: string | undefined
  metadata?: {} | undefined
  duration: string | null
  rateCards: RateCard[]
}
type Plan = {
  id: string
  name: string
  description?: string | undefined
  metadata?: {} | undefined
  createdAt: string
  updatedAt: string
  deletedAt?: string | undefined
  key: string
  alignment?: { billablesMustAlign?: boolean | undefined } | undefined
  version: number
  currency: {}
  billingCadence: string
  proRatingConfig?: { enabled: boolean; mode: {} } | undefined
  effectiveFrom?: string | undefined
  effectiveTo?: string | undefined
  status: {}
  settlementMode?: {} | undefined
  phases: PlanPhase[]
  validationErrors: ValidationError[] | null
}
type PlanPaginatedResponse = { totalCount: number; page: number; pageSize: number; items: Plan[] }
type PlanCreate = {
  name: string
  description?: string | undefined
  metadata?: {} | undefined
  key: string
  alignment?: { billablesMustAlign?: boolean | undefined } | undefined
  currency: {}
  billingCadence: string
  proRatingConfig?: { enabled: boolean; mode: {} } | undefined
  settlementMode?: {} | undefined
  phases: PlanPhase[]
}
type PlanReplaceUpdate = {
  name: string
  description?: string | undefined
  metadata?: {} | undefined
  alignment?: { billablesMustAlign?: boolean | undefined } | undefined
  billingCadence: string
  proRatingConfig?: { enabled: boolean; mode: {} } | undefined
  settlementMode?: {} | undefined
  phases: PlanPhase[]
}
type PlanAddonOrderBy = 'id' | 'key' | 'version' | 'created_at' | 'updated_at'
type PlanAddon = {
  createdAt: string
  updatedAt: string
  deletedAt?: string | undefined
  annotations?: {} | undefined
  metadata?: {} | undefined
  addon: {
    id: string
    name: string
    description?: string | undefined
    metadata?: {} | undefined
    createdAt: string
    updatedAt: string
    deletedAt?: string | undefined
    key: string
    annotations?: {} | undefined
    version: number
    instanceType: {}
    currency: {}
    effectiveFrom?: string | undefined
    effectiveTo?: string | undefined
    status: {}
    rateCards: RateCard[]
    validationErrors: ValidationError[] | null
  }
  fromPlanPhase: string
  maxQuantity?: number | undefined
  validationErrors: ValidationError[] | null
}
type PlanAddonPaginatedResponse = {
  totalCount: number
  page: number
  pageSize: number
  items: PlanAddon[]
}
type PlanAddonCreate = {
  metadata?: {} | undefined
  fromPlanPhase: string
  maxQuantity?: number | undefined
  addonId: string
}
type PlanAddonReplaceUpdate = {
  metadata?: {} | undefined
  fromPlanPhase: string
  maxQuantity?: number | undefined
}
type PortalToken = {
  id?: string | undefined
  subject: string
  expiresAt?: string | undefined
  expired?: boolean | undefined
  createdAt?: string | undefined
  token?: string | undefined
  allowedMeterSlugs?: string[] | undefined
}
type CustomerId = { id: string }
type CustomerKey = { key: string }
type CreateStripeCheckoutSessionConsentCollectionPaymentMethodReuseAgreementPosition =
  | 'auto'
  | 'hidden'
type CreateStripeCheckoutSessionRequest = {
  appId?: string | undefined
  customer: CustomerId | CustomerKey | CustomerCreate
  stripeCustomerId?: string | undefined
  options: {
    billingAddressCollection?: {} | undefined
    cancelURL?: string | undefined
    clientReferenceID?: string | undefined
    customerUpdate?:
      | { address?: {} | undefined; name?: {} | undefined; shipping?: {} | undefined }
      | undefined
    consentCollection?:
      | {
          paymentMethodReuseAgreement?:
            | {
                position?:
                  | CreateStripeCheckoutSessionConsentCollectionPaymentMethodReuseAgreementPosition
                  | undefined
              }
            | undefined
          promotions?: {} | undefined
          termsOfService?: {} | undefined
        }
      | undefined
    currency?: {} | undefined
    customText?:
      | {
          afterSubmit?: { message?: string | undefined } | undefined
          shippingAddress?: { message?: string | undefined } | undefined
          submit?: { message?: string | undefined } | undefined
          termsOfServiceAcceptance?: { message?: string | undefined } | undefined
        }
      | undefined
    expiresAt?: bigint | undefined
    locale?: string | undefined
    metadata?: { [x: string]: string } | undefined
    returnURL?: string | undefined
    successURL?: string | undefined
    uiMode?: {} | undefined
    paymentMethodTypes?: string[] | undefined
    redirectOnCompletion?: {} | undefined
    taxIdCollection?: { enabled: boolean; required?: {} | undefined } | undefined
  }
}
type CreateStripeCheckoutSessionResult = {
  customerId: string
  stripeCustomerId: string
  sessionId: string
  setupIntentId: string
  clientSecret?: string | undefined
  clientReferenceId?: string | undefined
  customerEmail?: string | undefined
  currency?: {} | undefined
  createdAt: string
  expiresAt?: string | undefined
  metadata?: { [x: string]: string } | undefined
  status?: string | undefined
  url?: string | undefined
  mode: {}
  cancelURL?: string | undefined
  successURL?: string | undefined
  returnURL?: string | undefined
}
type Subject = {
  createdAt: string
  updatedAt: string
  deletedAt?: string | undefined
  id: string
  key: string
  displayName?: (string | null) | undefined
  metadata?: ({ [x: string]: { [x: string]: unknown } } | null) | undefined
  currentPeriodStart?: string | undefined
  currentPeriodEnd?: string | undefined
  stripeCustomerId?: (string | null) | undefined
}
type SubjectUpsert = {
  key: string
  displayName?: (string | null) | undefined
  metadata?: ({ [x: string]: { [x: string]: unknown } } | null) | undefined
  currentPeriodStart?: string | undefined
  currentPeriodEnd?: string | undefined
  stripeCustomerId?: (string | null) | undefined
}
type EntitlementMeteredCreateInputs = {
  featureKey?: string | undefined
  featureId?: string | undefined
  metadata?: {} | undefined
  type: 'metered'
  isSoftLimit?: boolean | undefined
  isUnlimited?: boolean | undefined
  usagePeriod: { interval: {}; anchor?: string | undefined }
  measureUsageFrom?: {} | undefined
  issueAfterReset?: number | undefined
  issueAfterResetPriority?: number | undefined
  preserveOverageAtReset?: boolean | undefined
}
type EntitlementStaticCreateInputs = {
  featureKey?: string | undefined
  featureId?: string | undefined
  metadata?: {} | undefined
  usagePeriod?: { interval: {}; anchor?: string | undefined } | undefined
  type: 'static'
  config: string
}
type EntitlementBooleanCreateInputs = {
  featureKey?: string | undefined
  featureId?: string | undefined
  metadata?: {} | undefined
  usagePeriod?: { interval: {}; anchor?: string | undefined } | undefined
  type: 'boolean'
}
type EntitlementCreateInputs =
  | EntitlementMeteredCreateInputs
  | EntitlementStaticCreateInputs
  | EntitlementBooleanCreateInputs
type EntitlementGrantCreateInput = {
  amount: number
  priority?: number | undefined
  effectiveAt: string
  expiration: { duration: {}; count: number }
  maxRolloverAmount?: number | undefined
  minRolloverAmount?: number | undefined
  metadata?: {} | undefined
  recurrence?: { interval: {}; anchor?: string | undefined } | undefined
}
type Period = { from: string; to: string }
type BalanceHistoryWindow = { period: Period; usage: number; balanceAtStart: number }
type GrantUsageRecord = { grantId: string; usage: number }
type GrantBurnDownHistorySegment = {
  period: { from: string; to: string }
  usage: number
  overage: number
  balanceAtStart: number
  grantBalancesAtStart: { [x: string]: number }
  balanceAtEnd: number
  grantBalancesAtEnd: { [x: string]: number }
  grantUsages: GrantUsageRecord[]
}
type WindowedBalanceHistory = {
  windowedHistory: BalanceHistoryWindow[]
  burndownHistory: GrantBurnDownHistorySegment[]
}
type ResetEntitlementUsageInput = {
  effectiveAt?: string | undefined
  retainAnchor?: boolean | undefined
  preserveOverage?: boolean | undefined
}
type PlanSubscriptionCreate = {
  alignment?: { billablesMustAlign?: boolean | undefined } | undefined
  metadata?: {} | undefined
  plan: { key: string; version?: number | undefined }
  startingPhase?: string | undefined
  name?: string | undefined
  description?: string | undefined
  settlementMode?: {} | undefined
  costBasisMode?: {} | undefined
  timing?: {} | undefined
  customerId?: string | undefined
  customerKey?: string | undefined
  billingAnchor?: string | undefined
  billingStartsAt?: string | undefined
}
type CustomSubscriptionCreate = {
  costBasisMode?: {} | undefined
  customPlan: {
    name: string
    description?: string | undefined
    metadata?: {} | undefined
    alignment?: { billablesMustAlign?: boolean | undefined } | undefined
    currency: {}
    billingCadence: string
    proRatingConfig?: { enabled: boolean; mode: {} } | undefined
    settlementMode?: {} | undefined
    phases: PlanPhase[]
  }
  timing?: {} | undefined
  customerId?: string | undefined
  customerKey?: string | undefined
  billingAnchor?: string | undefined
  billingStartsAt?: string | undefined
}
type SubscriptionCreate = PlanSubscriptionCreate | CustomSubscriptionCreate
type ErrorExtension = { field: string; code: string; message: string }
type SubscriptionBadRequestErrorResponse = {
  type: string
  title: string
  status?: number | undefined
  detail: string
  instance: string
  extensions?: { validationErrors: ErrorExtension[] } | undefined
}
type SubscriptionConflictErrorResponse = {
  type: string
  title: string
  status?: number | undefined
  detail: string
  instance: string
  extensions?: { validationErrors: ErrorExtension[] } | undefined
}
type SubscriptionItem = {
  id: string
  name: string
  description?: string | undefined
  metadata?: {} | undefined
  createdAt: string
  updatedAt: string
  deletedAt?: string | undefined
  activeFrom: string
  activeTo?: string | undefined
  key: string
  currency?: {} | undefined
  featureKey?: string | undefined
  billingCadence: string | null
  price: {}
  discounts?:
    | { percentage?: { percentage: {} } | undefined; usage?: { quantity: {} } | undefined }
    | undefined
  included?:
    | {
        feature: {
          createdAt: string
          updatedAt: string
          deletedAt?: string | undefined
          archivedAt?: string | undefined
          key: string
          name: string
          metadata?: {} | undefined
          meterSlug?: string | undefined
          meterGroupByFilters?: { [x: string]: string } | undefined
          advancedMeterGroupByFilters?: { [x: string]: FilterString } | undefined
          unitCost?: {} | undefined
          id: string
        }
        entitlement?: {} | undefined
      }
    | undefined
  taxConfig?:
    | {
        behavior?: {} | undefined
        stripe?: { code: string } | undefined
        customInvoicing?: { code: string } | undefined
        taxCodeId?: string | undefined
      }
    | undefined
}
type SubscriptionPhaseExpanded = {
  id: string
  name: string
  description?: string | undefined
  metadata?: {} | undefined
  createdAt: string
  updatedAt: string
  deletedAt?: string | undefined
  key: string
  discounts?:
    | { percentage?: { percentage: {} } | undefined; usage?: { quantity: {} } | undefined }
    | undefined
  activeFrom: string
  activeTo?: string | undefined
  items: SubscriptionItem[]
  itemTimelines: { [x: string]: SubscriptionItem[] }
}
type SubscriptionExpanded = {
  id: string
  name: string
  description?: string | undefined
  metadata?: {} | undefined
  createdAt: string
  updatedAt: string
  deletedAt?: string | undefined
  activeFrom: string
  activeTo?: string | undefined
  annotations?: {} | undefined
  status: {}
  customerId: string
  plan?: { id: string; key: string; version: number } | undefined
  currency: {}
  costBasisMode: {}
  costBasisPins: SubscriptionCostBasisPin[]
  billingCadence: string
  proRatingConfig?: { enabled: boolean; mode: {} } | undefined
  billingAnchor: string
  billingStartsAt?: string | undefined
  settlementMode: {}
  alignment?:
    | {
        billablesMustAlign?: boolean | undefined
        currentAlignedBillingPeriod?: { from: string; to: string } | undefined
      }
    | undefined
  phases: SubscriptionPhaseExpanded[]
}
type EditSubscriptionAddItem = { op: 'add_item'; phaseKey: string; rateCard: RateCard }
type EditSubscriptionRemoveItem = { op: 'remove_item'; phaseKey: string; itemKey: string }
type SubscriptionPhaseCreate = {
  startAfter: string | null
  duration?: string | undefined
  discounts?:
    | { percentage?: { percentage: {} } | undefined; usage?: { quantity: {} } | undefined }
    | undefined
  key: string
  name: string
  description?: string | undefined
}
type EditSubscriptionAddPhase = { op: 'add_phase'; phase: SubscriptionPhaseCreate }
type RemovePhaseShifting = 'next' | 'prev'
type EditSubscriptionRemovePhase = {
  op: 'remove_phase'
  phaseKey: string
  shift: RemovePhaseShifting
}
type EditSubscriptionStretchPhase = { op: 'stretch_phase'; phaseKey: string; extendBy: string }
type EditSubscriptionUnscheduleEdit = { op: 'unschedule_edit' }
type SubscriptionEditOperation =
  | EditSubscriptionAddItem
  | EditSubscriptionRemoveItem
  | EditSubscriptionAddPhase
  | EditSubscriptionRemovePhase
  | EditSubscriptionStretchPhase
  | EditSubscriptionUnscheduleEdit
type SubscriptionEdit = { customizations: SubscriptionEditOperation[]; timing?: {} | undefined }
type SubscriptionAddonCreate = {
  name: string
  description?: string | undefined
  metadata?: {} | undefined
  quantity: number
  timing: {}
  addon: { id: string }
}
type SubscriptionAddonTimelineSegment = {
  activeFrom: string
  activeTo?: string | undefined
  quantity: number
}
type SubscriptionAddonRateCard = { rateCard: {}; affectedSubscriptionItemIds: string[] }
type SubscriptionAddon = {
  id: string
  name: string
  description?: string | undefined
  metadata?: {} | undefined
  createdAt: string
  updatedAt: string
  deletedAt?: string | undefined
  activeFrom: string
  activeTo?: string | undefined
  addon: { id: string; key: string; version: number; instanceType: {} }
  quantityAt: string
  quantity: number
  timeline: SubscriptionAddonTimelineSegment[]
  subscriptionId: string
  rateCards: SubscriptionAddonRateCard[]
}
type SubscriptionAddonUpdate = {
  name?: string | undefined
  description?: string | undefined
  metadata?: {} | undefined
  quantity?: number | undefined
  timing?: {} | undefined
}
type PlanSubscriptionChange = {
  timing: {}
  alignment?: { billablesMustAlign?: boolean | undefined } | undefined
  metadata?: {} | undefined
  plan: { key: string; version?: number | undefined }
  startingPhase?: string | undefined
  name?: string | undefined
  description?: string | undefined
  billingAnchor?: string | undefined
  settlementMode?: {} | undefined
  costBasisMode?: {} | undefined
}
type CustomSubscriptionChange = {
  timing: {}
  billingAnchor?: string | undefined
  costBasisMode?: {} | undefined
  customPlan: {
    name: string
    description?: string | undefined
    metadata?: {} | undefined
    alignment?: { billablesMustAlign?: boolean | undefined } | undefined
    currency: {}
    billingCadence: string
    proRatingConfig?: { enabled: boolean; mode: {} } | undefined
    settlementMode?: {} | undefined
    phases: PlanPhase[]
  }
}
type SubscriptionChange = PlanSubscriptionChange | CustomSubscriptionChange
type SubscriptionChangeResponseBody = {
  current: {
    id: string
    name: string
    description?: string | undefined
    metadata?: {} | undefined
    createdAt: string
    updatedAt: string
    deletedAt?: string | undefined
    activeFrom: string
    activeTo?: string | undefined
    annotations?: {} | undefined
    alignment?: { billablesMustAlign?: boolean | undefined } | undefined
    status: {}
    customerId: string
    plan?: { id: string; key: string; version: number } | undefined
    currency: {}
    costBasisMode: {}
    costBasisPins: SubscriptionCostBasisPin[]
    billingCadence: string
    proRatingConfig?: { enabled: boolean; mode: {} } | undefined
    billingAnchor: string
    billingStartsAt?: string | undefined
    settlementMode: {}
  }
  next: {
    id: string
    name: string
    description?: string | undefined
    metadata?: {} | undefined
    createdAt: string
    updatedAt: string
    deletedAt?: string | undefined
    activeFrom: string
    activeTo?: string | undefined
    annotations?: {} | undefined
    status: {}
    customerId: string
    plan?: { id: string; key: string; version: number } | undefined
    currency: {}
    costBasisMode: {}
    costBasisPins: SubscriptionCostBasisPin[]
    billingCadence: string
    proRatingConfig?: { enabled: boolean; mode: {} } | undefined
    billingAnchor: string
    billingStartsAt?: string | undefined
    settlementMode: {}
    alignment?:
      | {
          billablesMustAlign?: boolean | undefined
          currentAlignedBillingPeriod?: { from: string; to: string } | undefined
        }
      | undefined
    phases: SubscriptionPhaseExpanded[]
  }
}
type EntitlementGrantCreateInputV2 = {
  amount: number
  priority?: number | undefined
  effectiveAt: string
  minRolloverAmount?: number | undefined
  metadata?: {} | undefined
  recurrence?: { interval: {}; anchor?: string | undefined } | undefined
  maxRolloverAmount?: number | undefined
  expiration?: { duration: {}; count: number } | undefined
  annotations?: {} | undefined
}
type EntitlementMeteredV2CreateInputs = {
  featureKey?: string | undefined
  featureId?: string | undefined
  metadata?: {} | undefined
  type: 'metered'
  isSoftLimit?: boolean | undefined
  usagePeriod: { interval: {}; anchor?: string | undefined }
  measureUsageFrom?: {} | undefined
  preserveOverageAtReset?: boolean | undefined
  issueAfterReset?: number | undefined
  issueAfterResetPriority?: number | undefined
  issue?: { amount: number; priority?: number | undefined } | undefined
  grants?: EntitlementGrantCreateInputV2[] | undefined
}
type EntitlementV2CreateInputs =
  | EntitlementMeteredV2CreateInputs
  | EntitlementStaticCreateInputs
  | EntitlementBooleanCreateInputs
type EntitlementMeteredV2 = {
  type: 'metered'
  isSoftLimit?: boolean | undefined
  preserveOverageAtReset?: boolean | undefined
  issueAfterReset?: number | undefined
  issueAfterResetPriority?: number | undefined
  issue?: { amount: number; priority?: number | undefined } | undefined
  createdAt: string
  updatedAt: string
  deletedAt?: string | undefined
  metadata?: {} | undefined
  activeFrom: string
  activeTo?: string | undefined
  annotations?: {} | undefined
  id: string
  featureKey: string
  featureId: string
  lastReset: string
  currentUsagePeriod: { from: string; to: string }
  measureUsageFrom: string
  usagePeriod: { interval: {}; anchor: string; intervalISO: string }
  customerKey?: string | undefined
  customerId: string
}
type EntitlementStaticV2 = {
  type: 'static'
  config: string
  createdAt: string
  updatedAt: string
  deletedAt?: string | undefined
  metadata?: {} | undefined
  activeFrom: string
  activeTo?: string | undefined
  annotations?: {} | undefined
  id: string
  featureKey: string
  featureId: string
  currentUsagePeriod?: { from: string; to: string } | undefined
  usagePeriod?: { interval: {}; anchor: string; intervalISO: string } | undefined
  customerKey?: string | undefined
  customerId: string
}
type EntitlementBooleanV2 = {
  type: 'boolean'
  createdAt: string
  updatedAt: string
  deletedAt?: string | undefined
  metadata?: {} | undefined
  activeFrom: string
  activeTo?: string | undefined
  annotations?: {} | undefined
  id: string
  featureKey: string
  featureId: string
  currentUsagePeriod?: { from: string; to: string } | undefined
  usagePeriod?: { interval: {}; anchor: string; intervalISO: string } | undefined
  customerKey?: string | undefined
  customerId: string
}
type EntitlementV2 = EntitlementMeteredV2 | EntitlementStaticV2 | EntitlementBooleanV2
type EntitlementV2PaginatedResponse = {
  totalCount: number
  page: number
  pageSize: number
  items: EntitlementV2[]
}
type EntitlementGrantV2 = {
  createdAt: string
  updatedAt: string
  deletedAt?: string | undefined
  amount: number
  priority?: number | undefined
  effectiveAt: string
  minRolloverAmount?: number | undefined
  metadata?: {} | undefined
  maxRolloverAmount?: number | undefined
  expiration?: { duration: {}; count: number } | undefined
  annotations?: {} | undefined
  id: string
  entitlementId: string
  nextRecurrence?: string | undefined
  expiresAt?: string | undefined
  voidedAt?: string | undefined
  recurrence?: { interval: {}; anchor: string; intervalISO: string } | undefined
}
type GrantV2PaginatedResponse = {
  totalCount: number
  page: number
  pageSize: number
  items: EntitlementGrantV2[]
}
type EntitlementValueV2 = {
  hasAccess: boolean
  balance?: number | undefined
  usage?: number | undefined
  overage?: number | undefined
  totalAvailableGrantAmount?: number | undefined
  config?: string | undefined
  grantBalances?: { [x: string]: number } | undefined
}
type FilterIDExact = { $in?: (string[] | null) | undefined }
type FilterTime = {
  $gt?: (string | null) | undefined
  $gte?: (string | null) | undefined
  $lt?: (string | null) | undefined
  $lte?: (string | null) | undefined
  $and?: (FilterTime[] | null) | undefined
  $or?: (FilterTime[] | null) | undefined
}
type IngestedEventCursorPaginatedResponse = {
  items: IngestedEvent[]
  nextCursor?: string | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/api/v1/addons': {
      $get:
        | {
            input: {
              query: {
                includeDeleted?: boolean | undefined
                id?: string[] | undefined
                key?: string[] | undefined
                keyVersion?: { [x: string]: number[] } | undefined
                status?: AddonStatus[] | undefined
                currency?: CurrencyCode[] | undefined
                page?: number | undefined
                pageSize?: number | undefined
                order?: {} | undefined
                orderBy?: AddonOrderBy | undefined
              }
            }
            output: AddonPaginatedResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                includeDeleted?: boolean | undefined
                id?: string[] | undefined
                key?: string[] | undefined
                keyVersion?: { [x: string]: number[] } | undefined
                status?: AddonStatus[] | undefined
                currency?: CurrencyCode[] | undefined
                page?: number | undefined
                pageSize?: number | undefined
                order?: {} | undefined
                orderBy?: AddonOrderBy | undefined
              }
            }
            output: BadRequestProblemResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                includeDeleted?: boolean | undefined
                id?: string[] | undefined
                key?: string[] | undefined
                keyVersion?: { [x: string]: number[] } | undefined
                status?: AddonStatus[] | undefined
                currency?: CurrencyCode[] | undefined
                page?: number | undefined
                pageSize?: number | undefined
                order?: {} | undefined
                orderBy?: AddonOrderBy | undefined
              }
            }
            output: UnauthorizedProblemResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                includeDeleted?: boolean | undefined
                id?: string[] | undefined
                key?: string[] | undefined
                keyVersion?: { [x: string]: number[] } | undefined
                status?: AddonStatus[] | undefined
                currency?: CurrencyCode[] | undefined
                page?: number | undefined
                pageSize?: number | undefined
                order?: {} | undefined
                orderBy?: AddonOrderBy | undefined
              }
            }
            output: ForbiddenProblemResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                includeDeleted?: boolean | undefined
                id?: string[] | undefined
                key?: string[] | undefined
                keyVersion?: { [x: string]: number[] } | undefined
                status?: AddonStatus[] | undefined
                currency?: CurrencyCode[] | undefined
                page?: number | undefined
                pageSize?: number | undefined
                order?: {} | undefined
                orderBy?: AddonOrderBy | undefined
              }
            }
            output: PreconditionFailedProblemResponse
            outputFormat: 'json'
            status: 412
          }
        | {
            input: {
              query: {
                includeDeleted?: boolean | undefined
                id?: string[] | undefined
                key?: string[] | undefined
                keyVersion?: { [x: string]: number[] } | undefined
                status?: AddonStatus[] | undefined
                currency?: CurrencyCode[] | undefined
                page?: number | undefined
                pageSize?: number | undefined
                order?: {} | undefined
                orderBy?: AddonOrderBy | undefined
              }
            }
            output: InternalServerErrorProblemResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              query: {
                includeDeleted?: boolean | undefined
                id?: string[] | undefined
                key?: string[] | undefined
                keyVersion?: { [x: string]: number[] } | undefined
                status?: AddonStatus[] | undefined
                currency?: CurrencyCode[] | undefined
                page?: number | undefined
                pageSize?: number | undefined
                order?: {} | undefined
                orderBy?: AddonOrderBy | undefined
              }
            }
            output: ServiceUnavailableProblemResponse
            outputFormat: 'json'
            status: 503
          }
        | {
            input: {
              query: {
                includeDeleted?: boolean | undefined
                id?: string[] | undefined
                key?: string[] | undefined
                keyVersion?: { [x: string]: number[] } | undefined
                status?: AddonStatus[] | undefined
                currency?: CurrencyCode[] | undefined
                page?: number | undefined
                pageSize?: number | undefined
                order?: {} | undefined
                orderBy?: AddonOrderBy | undefined
              }
            }
            output: UnexpectedProblemResponse
            outputFormat: 'json'
            status: 200
          }
      $post:
        | { input: { json: AddonCreate }; output: Addon; outputFormat: 'json'; status: 201 }
        | {
            input: { json: AddonCreate }
            output: BadRequestProblemResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: AddonCreate }
            output: UnauthorizedProblemResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: AddonCreate }
            output: ForbiddenProblemResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: AddonCreate }
            output: PreconditionFailedProblemResponse
            outputFormat: 'json'
            status: 412
          }
        | {
            input: { json: AddonCreate }
            output: InternalServerErrorProblemResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { json: AddonCreate }
            output: ServiceUnavailableProblemResponse
            outputFormat: 'json'
            status: 503
          }
        | {
            input: { json: AddonCreate }
            output: UnexpectedProblemResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/addons/:addonId': {
      $put:
        | {
            input: { param: { addonId: string } } & { json: AddonReplaceUpdate }
            output: Addon
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { addonId: string } } & { json: AddonReplaceUpdate }
            output: BadRequestProblemResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { addonId: string } } & { json: AddonReplaceUpdate }
            output: UnauthorizedProblemResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { addonId: string } } & { json: AddonReplaceUpdate }
            output: ForbiddenProblemResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { addonId: string } } & { json: AddonReplaceUpdate }
            output: NotFoundProblemResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { addonId: string } } & { json: AddonReplaceUpdate }
            output: PreconditionFailedProblemResponse
            outputFormat: 'json'
            status: 412
          }
        | {
            input: { param: { addonId: string } } & { json: AddonReplaceUpdate }
            output: InternalServerErrorProblemResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { addonId: string } } & { json: AddonReplaceUpdate }
            output: ServiceUnavailableProblemResponse
            outputFormat: 'json'
            status: 503
          }
        | {
            input: { param: { addonId: string } } & { json: AddonReplaceUpdate }
            output: UnexpectedProblemResponse
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { addonId: string } } & {
              query: { includeLatest?: boolean | undefined }
            }
            output: Addon
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { addonId: string } } & {
              query: { includeLatest?: boolean | undefined }
            }
            output: BadRequestProblemResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { addonId: string } } & {
              query: { includeLatest?: boolean | undefined }
            }
            output: UnauthorizedProblemResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { addonId: string } } & {
              query: { includeLatest?: boolean | undefined }
            }
            output: ForbiddenProblemResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { addonId: string } } & {
              query: { includeLatest?: boolean | undefined }
            }
            output: NotFoundProblemResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { addonId: string } } & {
              query: { includeLatest?: boolean | undefined }
            }
            output: PreconditionFailedProblemResponse
            outputFormat: 'json'
            status: 412
          }
        | {
            input: { param: { addonId: string } } & {
              query: { includeLatest?: boolean | undefined }
            }
            output: InternalServerErrorProblemResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { addonId: string } } & {
              query: { includeLatest?: boolean | undefined }
            }
            output: ServiceUnavailableProblemResponse
            outputFormat: 'json'
            status: 503
          }
        | {
            input: { param: { addonId: string } } & {
              query: { includeLatest?: boolean | undefined }
            }
            output: UnexpectedProblemResponse
            outputFormat: 'json'
            status: 200
          }
      $delete:
        | { input: { param: { addonId: string } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { addonId: string } }
            output: BadRequestProblemResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { addonId: string } }
            output: UnauthorizedProblemResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { addonId: string } }
            output: ForbiddenProblemResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { addonId: string } }
            output: NotFoundProblemResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { addonId: string } }
            output: PreconditionFailedProblemResponse
            outputFormat: 'json'
            status: 412
          }
        | {
            input: { param: { addonId: string } }
            output: InternalServerErrorProblemResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { addonId: string } }
            output: ServiceUnavailableProblemResponse
            outputFormat: 'json'
            status: 503
          }
        | {
            input: { param: { addonId: string } }
            output: UnexpectedProblemResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/addons/:addonId/archive': {
      $post:
        | {
            input: { param: { addonId: string } }
            output: Addon
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { addonId: string } }
            output: BadRequestProblemResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { addonId: string } }
            output: UnauthorizedProblemResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { addonId: string } }
            output: ForbiddenProblemResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { addonId: string } }
            output: NotFoundProblemResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { addonId: string } }
            output: PreconditionFailedProblemResponse
            outputFormat: 'json'
            status: 412
          }
        | {
            input: { param: { addonId: string } }
            output: InternalServerErrorProblemResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { addonId: string } }
            output: ServiceUnavailableProblemResponse
            outputFormat: 'json'
            status: 503
          }
        | {
            input: { param: { addonId: string } }
            output: UnexpectedProblemResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/addons/:addonId/publish': {
      $post:
        | {
            input: { param: { addonId: string } }
            output: Addon
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { addonId: string } }
            output: BadRequestProblemResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { addonId: string } }
            output: UnauthorizedProblemResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { addonId: string } }
            output: ForbiddenProblemResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { addonId: string } }
            output: NotFoundProblemResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { addonId: string } }
            output: PreconditionFailedProblemResponse
            outputFormat: 'json'
            status: 412
          }
        | {
            input: { param: { addonId: string } }
            output: InternalServerErrorProblemResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { addonId: string } }
            output: ServiceUnavailableProblemResponse
            outputFormat: 'json'
            status: 503
          }
        | {
            input: { param: { addonId: string } }
            output: UnexpectedProblemResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/apps': {
      $get:
        | {
            input: { query: { page?: number | undefined; pageSize?: number | undefined } }
            output: AppPaginatedResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { page?: number | undefined; pageSize?: number | undefined } }
            output: BadRequestProblemResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { page?: number | undefined; pageSize?: number | undefined } }
            output: UnauthorizedProblemResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { page?: number | undefined; pageSize?: number | undefined } }
            output: ForbiddenProblemResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { page?: number | undefined; pageSize?: number | undefined } }
            output: PreconditionFailedProblemResponse
            outputFormat: 'json'
            status: 412
          }
        | {
            input: { query: { page?: number | undefined; pageSize?: number | undefined } }
            output: InternalServerErrorProblemResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { query: { page?: number | undefined; pageSize?: number | undefined } }
            output: ServiceUnavailableProblemResponse
            outputFormat: 'json'
            status: 503
          }
        | {
            input: { query: { page?: number | undefined; pageSize?: number | undefined } }
            output: UnexpectedProblemResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/apps/custom-invoicing/:invoiceId/draft/synchronized': {
      $post:
        | {
            input: { param: { invoiceId: string } } & {
              json: CustomInvoicingDraftSynchronizedRequest
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { invoiceId: string } } & {
              json: CustomInvoicingDraftSynchronizedRequest
            }
            output: BadRequestProblemResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { invoiceId: string } } & {
              json: CustomInvoicingDraftSynchronizedRequest
            }
            output: UnauthorizedProblemResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { invoiceId: string } } & {
              json: CustomInvoicingDraftSynchronizedRequest
            }
            output: ForbiddenProblemResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { invoiceId: string } } & {
              json: CustomInvoicingDraftSynchronizedRequest
            }
            output: PreconditionFailedProblemResponse
            outputFormat: 'json'
            status: 412
          }
        | {
            input: { param: { invoiceId: string } } & {
              json: CustomInvoicingDraftSynchronizedRequest
            }
            output: InternalServerErrorProblemResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { invoiceId: string } } & {
              json: CustomInvoicingDraftSynchronizedRequest
            }
            output: ServiceUnavailableProblemResponse
            outputFormat: 'json'
            status: 503
          }
        | {
            input: { param: { invoiceId: string } } & {
              json: CustomInvoicingDraftSynchronizedRequest
            }
            output: UnexpectedProblemResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/apps/custom-invoicing/:invoiceId/issuing/synchronized': {
      $post:
        | {
            input: { param: { invoiceId: string } } & { json: CustomInvoicingFinalizedRequest }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { invoiceId: string } } & { json: CustomInvoicingFinalizedRequest }
            output: BadRequestProblemResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { invoiceId: string } } & { json: CustomInvoicingFinalizedRequest }
            output: UnauthorizedProblemResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { invoiceId: string } } & { json: CustomInvoicingFinalizedRequest }
            output: ForbiddenProblemResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { invoiceId: string } } & { json: CustomInvoicingFinalizedRequest }
            output: PreconditionFailedProblemResponse
            outputFormat: 'json'
            status: 412
          }
        | {
            input: { param: { invoiceId: string } } & { json: CustomInvoicingFinalizedRequest }
            output: InternalServerErrorProblemResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { invoiceId: string } } & { json: CustomInvoicingFinalizedRequest }
            output: ServiceUnavailableProblemResponse
            outputFormat: 'json'
            status: 503
          }
        | {
            input: { param: { invoiceId: string } } & { json: CustomInvoicingFinalizedRequest }
            output: UnexpectedProblemResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/apps/custom-invoicing/:invoiceId/payment/status': {
      $post:
        | {
            input: { param: { invoiceId: string } } & {
              json: CustomInvoicingUpdatePaymentStatusRequest
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { invoiceId: string } } & {
              json: CustomInvoicingUpdatePaymentStatusRequest
            }
            output: BadRequestProblemResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { invoiceId: string } } & {
              json: CustomInvoicingUpdatePaymentStatusRequest
            }
            output: UnauthorizedProblemResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { invoiceId: string } } & {
              json: CustomInvoicingUpdatePaymentStatusRequest
            }
            output: ForbiddenProblemResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { invoiceId: string } } & {
              json: CustomInvoicingUpdatePaymentStatusRequest
            }
            output: PreconditionFailedProblemResponse
            outputFormat: 'json'
            status: 412
          }
        | {
            input: { param: { invoiceId: string } } & {
              json: CustomInvoicingUpdatePaymentStatusRequest
            }
            output: InternalServerErrorProblemResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { invoiceId: string } } & {
              json: CustomInvoicingUpdatePaymentStatusRequest
            }
            output: ServiceUnavailableProblemResponse
            outputFormat: 'json'
            status: 503
          }
        | {
            input: { param: { invoiceId: string } } & {
              json: CustomInvoicingUpdatePaymentStatusRequest
            }
            output: UnexpectedProblemResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/apps/:id': {
      $get:
        | { input: { param: { id: string } }; output: App; outputFormat: 'json'; status: 200 }
        | {
            input: { param: { id: string } }
            output: BadRequestProblemResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } }
            output: UnauthorizedProblemResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } }
            output: ForbiddenProblemResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } }
            output: NotFoundProblemResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } }
            output: PreconditionFailedProblemResponse
            outputFormat: 'json'
            status: 412
          }
        | {
            input: { param: { id: string } }
            output: InternalServerErrorProblemResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { id: string } }
            output: ServiceUnavailableProblemResponse
            outputFormat: 'json'
            status: 503
          }
        | {
            input: { param: { id: string } }
            output: UnexpectedProblemResponse
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { id: string } } & { json: AppReplaceUpdate }
            output: App
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: AppReplaceUpdate }
            output: BadRequestProblemResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: AppReplaceUpdate }
            output: UnauthorizedProblemResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { json: AppReplaceUpdate }
            output: ForbiddenProblemResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { json: AppReplaceUpdate }
            output: NotFoundProblemResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { json: AppReplaceUpdate }
            output: PreconditionFailedProblemResponse
            outputFormat: 'json'
            status: 412
          }
        | {
            input: { param: { id: string } } & { json: AppReplaceUpdate }
            output: InternalServerErrorProblemResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { id: string } } & { json: AppReplaceUpdate }
            output: ServiceUnavailableProblemResponse
            outputFormat: 'json'
            status: 503
          }
        | {
            input: { param: { id: string } } & { json: AppReplaceUpdate }
            output: UnexpectedProblemResponse
            outputFormat: 'json'
            status: 200
          }
      $delete:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { id: string } }
            output: BadRequestProblemResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } }
            output: UnauthorizedProblemResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } }
            output: ForbiddenProblemResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } }
            output: NotFoundProblemResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } }
            output: PreconditionFailedProblemResponse
            outputFormat: 'json'
            status: 412
          }
        | {
            input: { param: { id: string } }
            output: InternalServerErrorProblemResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { id: string } }
            output: ServiceUnavailableProblemResponse
            outputFormat: 'json'
            status: 503
          }
        | {
            input: { param: { id: string } }
            output: UnexpectedProblemResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/apps/:id/stripe/api-key': {
      $put:
        | {
            input: { param: { id: string } } & { json: StripeAPIKeyInput }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { id: string } } & { json: StripeAPIKeyInput }
            output: BadRequestProblemResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: StripeAPIKeyInput }
            output: UnauthorizedProblemResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { json: StripeAPIKeyInput }
            output: ForbiddenProblemResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { json: StripeAPIKeyInput }
            output: PreconditionFailedProblemResponse
            outputFormat: 'json'
            status: 412
          }
        | {
            input: { param: { id: string } } & { json: StripeAPIKeyInput }
            output: InternalServerErrorProblemResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { id: string } } & { json: StripeAPIKeyInput }
            output: ServiceUnavailableProblemResponse
            outputFormat: 'json'
            status: 503
          }
        | {
            input: { param: { id: string } } & { json: StripeAPIKeyInput }
            output: UnexpectedProblemResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/apps/:id/stripe/webhook': {
      $post:
        | {
            input: { param: { id: string } } & { json: StripeWebhookEvent }
            output: StripeWebhookResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: StripeWebhookEvent }
            output: BadRequestProblemResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: StripeWebhookEvent }
            output: UnauthorizedProblemResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { json: StripeWebhookEvent }
            output: ForbiddenProblemResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { json: StripeWebhookEvent }
            output: NotFoundProblemResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { json: StripeWebhookEvent }
            output: PreconditionFailedProblemResponse
            outputFormat: 'json'
            status: 412
          }
        | {
            input: { param: { id: string } } & { json: StripeWebhookEvent }
            output: InternalServerErrorProblemResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { id: string } } & { json: StripeWebhookEvent }
            output: ServiceUnavailableProblemResponse
            outputFormat: 'json'
            status: 503
          }
        | {
            input: { param: { id: string } } & { json: StripeWebhookEvent }
            output: UnexpectedProblemResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/billing/customers': {
      $get:
        | {
            input: {
              query: {
                billingProfile?: string[] | undefined
                customersWithoutPinnedProfile?: boolean | undefined
                includeAllCustomers?: boolean | undefined
                customerId?: string[] | undefined
                customerName?: string | undefined
                customerKey?: string | undefined
                customerPrimaryEmail?: string | undefined
                expand?: BillingProfileCustomerOverrideExpand[] | undefined
                order?: {} | undefined
                orderBy?: BillingProfileCustomerOverrideOrderBy | undefined
                page?: number | undefined
                pageSize?: number | undefined
              }
            }
            output: BillingProfileCustomerOverrideWithDetailsPaginatedResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                billingProfile?: string[] | undefined
                customersWithoutPinnedProfile?: boolean | undefined
                includeAllCustomers?: boolean | undefined
                customerId?: string[] | undefined
                customerName?: string | undefined
                customerKey?: string | undefined
                customerPrimaryEmail?: string | undefined
                expand?: BillingProfileCustomerOverrideExpand[] | undefined
                order?: {} | undefined
                orderBy?: BillingProfileCustomerOverrideOrderBy | undefined
                page?: number | undefined
                pageSize?: number | undefined
              }
            }
            output: BadRequestProblemResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                billingProfile?: string[] | undefined
                customersWithoutPinnedProfile?: boolean | undefined
                includeAllCustomers?: boolean | undefined
                customerId?: string[] | undefined
                customerName?: string | undefined
                customerKey?: string | undefined
                customerPrimaryEmail?: string | undefined
                expand?: BillingProfileCustomerOverrideExpand[] | undefined
                order?: {} | undefined
                orderBy?: BillingProfileCustomerOverrideOrderBy | undefined
                page?: number | undefined
                pageSize?: number | undefined
              }
            }
            output: UnauthorizedProblemResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                billingProfile?: string[] | undefined
                customersWithoutPinnedProfile?: boolean | undefined
                includeAllCustomers?: boolean | undefined
                customerId?: string[] | undefined
                customerName?: string | undefined
                customerKey?: string | undefined
                customerPrimaryEmail?: string | undefined
                expand?: BillingProfileCustomerOverrideExpand[] | undefined
                order?: {} | undefined
                orderBy?: BillingProfileCustomerOverrideOrderBy | undefined
                page?: number | undefined
                pageSize?: number | undefined
              }
            }
            output: ForbiddenProblemResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                billingProfile?: string[] | undefined
                customersWithoutPinnedProfile?: boolean | undefined
                includeAllCustomers?: boolean | undefined
                customerId?: string[] | undefined
                customerName?: string | undefined
                customerKey?: string | undefined
                customerPrimaryEmail?: string | undefined
                expand?: BillingProfileCustomerOverrideExpand[] | undefined
                order?: {} | undefined
                orderBy?: BillingProfileCustomerOverrideOrderBy | undefined
                page?: number | undefined
                pageSize?: number | undefined
              }
            }
            output: PreconditionFailedProblemResponse
            outputFormat: 'json'
            status: 412
          }
        | {
            input: {
              query: {
                billingProfile?: string[] | undefined
                customersWithoutPinnedProfile?: boolean | undefined
                includeAllCustomers?: boolean | undefined
                customerId?: string[] | undefined
                customerName?: string | undefined
                customerKey?: string | undefined
                customerPrimaryEmail?: string | undefined
                expand?: BillingProfileCustomerOverrideExpand[] | undefined
                order?: {} | undefined
                orderBy?: BillingProfileCustomerOverrideOrderBy | undefined
                page?: number | undefined
                pageSize?: number | undefined
              }
            }
            output: InternalServerErrorProblemResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              query: {
                billingProfile?: string[] | undefined
                customersWithoutPinnedProfile?: boolean | undefined
                includeAllCustomers?: boolean | undefined
                customerId?: string[] | undefined
                customerName?: string | undefined
                customerKey?: string | undefined
                customerPrimaryEmail?: string | undefined
                expand?: BillingProfileCustomerOverrideExpand[] | undefined
                order?: {} | undefined
                orderBy?: BillingProfileCustomerOverrideOrderBy | undefined
                page?: number | undefined
                pageSize?: number | undefined
              }
            }
            output: ServiceUnavailableProblemResponse
            outputFormat: 'json'
            status: 503
          }
        | {
            input: {
              query: {
                billingProfile?: string[] | undefined
                customersWithoutPinnedProfile?: boolean | undefined
                includeAllCustomers?: boolean | undefined
                customerId?: string[] | undefined
                customerName?: string | undefined
                customerKey?: string | undefined
                customerPrimaryEmail?: string | undefined
                expand?: BillingProfileCustomerOverrideExpand[] | undefined
                order?: {} | undefined
                orderBy?: BillingProfileCustomerOverrideOrderBy | undefined
                page?: number | undefined
                pageSize?: number | undefined
              }
            }
            output: UnexpectedProblemResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/billing/customers/:customerId': {
      $put:
        | {
            input: { param: { customerId: string } } & {
              json: BillingProfileCustomerOverrideCreate
            }
            output: BillingProfileCustomerOverrideWithDetails
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { customerId: string } } & {
              json: BillingProfileCustomerOverrideCreate
            }
            output: BadRequestProblemResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { customerId: string } } & {
              json: BillingProfileCustomerOverrideCreate
            }
            output: UnauthorizedProblemResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { customerId: string } } & {
              json: BillingProfileCustomerOverrideCreate
            }
            output: ForbiddenProblemResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { customerId: string } } & {
              json: BillingProfileCustomerOverrideCreate
            }
            output: NotFoundProblemResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { customerId: string } } & {
              json: BillingProfileCustomerOverrideCreate
            }
            output: PreconditionFailedProblemResponse
            outputFormat: 'json'
            status: 412
          }
        | {
            input: { param: { customerId: string } } & {
              json: BillingProfileCustomerOverrideCreate
            }
            output: InternalServerErrorProblemResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { customerId: string } } & {
              json: BillingProfileCustomerOverrideCreate
            }
            output: ServiceUnavailableProblemResponse
            outputFormat: 'json'
            status: 503
          }
        | {
            input: { param: { customerId: string } } & {
              json: BillingProfileCustomerOverrideCreate
            }
            output: UnexpectedProblemResponse
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { customerId: string } } & {
              query: { expand?: BillingProfileCustomerOverrideExpand[] | undefined }
            }
            output: BillingProfileCustomerOverrideWithDetails
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { customerId: string } } & {
              query: { expand?: BillingProfileCustomerOverrideExpand[] | undefined }
            }
            output: BadRequestProblemResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { customerId: string } } & {
              query: { expand?: BillingProfileCustomerOverrideExpand[] | undefined }
            }
            output: UnauthorizedProblemResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { customerId: string } } & {
              query: { expand?: BillingProfileCustomerOverrideExpand[] | undefined }
            }
            output: ForbiddenProblemResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { customerId: string } } & {
              query: { expand?: BillingProfileCustomerOverrideExpand[] | undefined }
            }
            output: NotFoundProblemResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { customerId: string } } & {
              query: { expand?: BillingProfileCustomerOverrideExpand[] | undefined }
            }
            output: PreconditionFailedProblemResponse
            outputFormat: 'json'
            status: 412
          }
        | {
            input: { param: { customerId: string } } & {
              query: { expand?: BillingProfileCustomerOverrideExpand[] | undefined }
            }
            output: InternalServerErrorProblemResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { customerId: string } } & {
              query: { expand?: BillingProfileCustomerOverrideExpand[] | undefined }
            }
            output: ServiceUnavailableProblemResponse
            outputFormat: 'json'
            status: 503
          }
        | {
            input: { param: { customerId: string } } & {
              query: { expand?: BillingProfileCustomerOverrideExpand[] | undefined }
            }
            output: UnexpectedProblemResponse
            outputFormat: 'json'
            status: 200
          }
      $delete:
        | {
            input: { param: { customerId: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { customerId: string } }
            output: BadRequestProblemResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { customerId: string } }
            output: UnauthorizedProblemResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { customerId: string } }
            output: ForbiddenProblemResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { customerId: string } }
            output: NotFoundProblemResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { customerId: string } }
            output: PreconditionFailedProblemResponse
            outputFormat: 'json'
            status: 412
          }
        | {
            input: { param: { customerId: string } }
            output: InternalServerErrorProblemResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { customerId: string } }
            output: ServiceUnavailableProblemResponse
            outputFormat: 'json'
            status: 503
          }
        | {
            input: { param: { customerId: string } }
            output: UnexpectedProblemResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/billing/customers/:customerId/invoices/pending-lines': {
      $post:
        | {
            input: { param: { customerId: string } } & { json: InvoicePendingLineCreateInput }
            output: InvoicePendingLineCreateResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { customerId: string } } & { json: InvoicePendingLineCreateInput }
            output: BadRequestProblemResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { customerId: string } } & { json: InvoicePendingLineCreateInput }
            output: UnauthorizedProblemResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { customerId: string } } & { json: InvoicePendingLineCreateInput }
            output: ForbiddenProblemResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { customerId: string } } & { json: InvoicePendingLineCreateInput }
            output: PreconditionFailedProblemResponse
            outputFormat: 'json'
            status: 412
          }
        | {
            input: { param: { customerId: string } } & { json: InvoicePendingLineCreateInput }
            output: InternalServerErrorProblemResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { customerId: string } } & { json: InvoicePendingLineCreateInput }
            output: ServiceUnavailableProblemResponse
            outputFormat: 'json'
            status: 503
          }
        | {
            input: { param: { customerId: string } } & { json: InvoicePendingLineCreateInput }
            output: UnexpectedProblemResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/billing/customers/:customerId/invoices/simulate': {
      $post:
        | {
            input: { param: { customerId: string } } & { json: InvoiceSimulationInput }
            output: Invoice
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { customerId: string } } & { json: InvoiceSimulationInput }
            output: BadRequestProblemResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { customerId: string } } & { json: InvoiceSimulationInput }
            output: UnauthorizedProblemResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { customerId: string } } & { json: InvoiceSimulationInput }
            output: ForbiddenProblemResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { customerId: string } } & { json: InvoiceSimulationInput }
            output: PreconditionFailedProblemResponse
            outputFormat: 'json'
            status: 412
          }
        | {
            input: { param: { customerId: string } } & { json: InvoiceSimulationInput }
            output: InternalServerErrorProblemResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { customerId: string } } & { json: InvoiceSimulationInput }
            output: ServiceUnavailableProblemResponse
            outputFormat: 'json'
            status: 503
          }
        | {
            input: { param: { customerId: string } } & { json: InvoiceSimulationInput }
            output: UnexpectedProblemResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/billing/invoices': {
      $get:
        | {
            input: {
              query: {
                statuses?: InvoiceStatus[] | undefined
                extendedStatuses?: string[] | undefined
                issuedAfter?: string | undefined
                issuedBefore?: string | undefined
                periodStartAfter?: string | undefined
                periodStartBefore?: string | undefined
                createdAfter?: string | undefined
                createdBefore?: string | undefined
                expand?: InvoiceExpand[] | undefined
                customers?: string[] | undefined
                includeDeleted?: boolean | undefined
                page?: number | undefined
                pageSize?: number | undefined
                order?: {} | undefined
                orderBy?: InvoiceOrderBy | undefined
              }
            }
            output: InvoicePaginatedResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                statuses?: InvoiceStatus[] | undefined
                extendedStatuses?: string[] | undefined
                issuedAfter?: string | undefined
                issuedBefore?: string | undefined
                periodStartAfter?: string | undefined
                periodStartBefore?: string | undefined
                createdAfter?: string | undefined
                createdBefore?: string | undefined
                expand?: InvoiceExpand[] | undefined
                customers?: string[] | undefined
                includeDeleted?: boolean | undefined
                page?: number | undefined
                pageSize?: number | undefined
                order?: {} | undefined
                orderBy?: InvoiceOrderBy | undefined
              }
            }
            output: BadRequestProblemResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                statuses?: InvoiceStatus[] | undefined
                extendedStatuses?: string[] | undefined
                issuedAfter?: string | undefined
                issuedBefore?: string | undefined
                periodStartAfter?: string | undefined
                periodStartBefore?: string | undefined
                createdAfter?: string | undefined
                createdBefore?: string | undefined
                expand?: InvoiceExpand[] | undefined
                customers?: string[] | undefined
                includeDeleted?: boolean | undefined
                page?: number | undefined
                pageSize?: number | undefined
                order?: {} | undefined
                orderBy?: InvoiceOrderBy | undefined
              }
            }
            output: UnauthorizedProblemResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                statuses?: InvoiceStatus[] | undefined
                extendedStatuses?: string[] | undefined
                issuedAfter?: string | undefined
                issuedBefore?: string | undefined
                periodStartAfter?: string | undefined
                periodStartBefore?: string | undefined
                createdAfter?: string | undefined
                createdBefore?: string | undefined
                expand?: InvoiceExpand[] | undefined
                customers?: string[] | undefined
                includeDeleted?: boolean | undefined
                page?: number | undefined
                pageSize?: number | undefined
                order?: {} | undefined
                orderBy?: InvoiceOrderBy | undefined
              }
            }
            output: ForbiddenProblemResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                statuses?: InvoiceStatus[] | undefined
                extendedStatuses?: string[] | undefined
                issuedAfter?: string | undefined
                issuedBefore?: string | undefined
                periodStartAfter?: string | undefined
                periodStartBefore?: string | undefined
                createdAfter?: string | undefined
                createdBefore?: string | undefined
                expand?: InvoiceExpand[] | undefined
                customers?: string[] | undefined
                includeDeleted?: boolean | undefined
                page?: number | undefined
                pageSize?: number | undefined
                order?: {} | undefined
                orderBy?: InvoiceOrderBy | undefined
              }
            }
            output: PreconditionFailedProblemResponse
            outputFormat: 'json'
            status: 412
          }
        | {
            input: {
              query: {
                statuses?: InvoiceStatus[] | undefined
                extendedStatuses?: string[] | undefined
                issuedAfter?: string | undefined
                issuedBefore?: string | undefined
                periodStartAfter?: string | undefined
                periodStartBefore?: string | undefined
                createdAfter?: string | undefined
                createdBefore?: string | undefined
                expand?: InvoiceExpand[] | undefined
                customers?: string[] | undefined
                includeDeleted?: boolean | undefined
                page?: number | undefined
                pageSize?: number | undefined
                order?: {} | undefined
                orderBy?: InvoiceOrderBy | undefined
              }
            }
            output: InternalServerErrorProblemResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              query: {
                statuses?: InvoiceStatus[] | undefined
                extendedStatuses?: string[] | undefined
                issuedAfter?: string | undefined
                issuedBefore?: string | undefined
                periodStartAfter?: string | undefined
                periodStartBefore?: string | undefined
                createdAfter?: string | undefined
                createdBefore?: string | undefined
                expand?: InvoiceExpand[] | undefined
                customers?: string[] | undefined
                includeDeleted?: boolean | undefined
                page?: number | undefined
                pageSize?: number | undefined
                order?: {} | undefined
                orderBy?: InvoiceOrderBy | undefined
              }
            }
            output: ServiceUnavailableProblemResponse
            outputFormat: 'json'
            status: 503
          }
        | {
            input: {
              query: {
                statuses?: InvoiceStatus[] | undefined
                extendedStatuses?: string[] | undefined
                issuedAfter?: string | undefined
                issuedBefore?: string | undefined
                periodStartAfter?: string | undefined
                periodStartBefore?: string | undefined
                createdAfter?: string | undefined
                createdBefore?: string | undefined
                expand?: InvoiceExpand[] | undefined
                customers?: string[] | undefined
                includeDeleted?: boolean | undefined
                page?: number | undefined
                pageSize?: number | undefined
                order?: {} | undefined
                orderBy?: InvoiceOrderBy | undefined
              }
            }
            output: UnexpectedProblemResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/billing/invoices/invoice': {
      $post:
        | {
            input: { json: InvoicePendingLinesActionInput }
            output: Invoice[]
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: InvoicePendingLinesActionInput }
            output: BadRequestProblemResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: InvoicePendingLinesActionInput }
            output: UnauthorizedProblemResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: InvoicePendingLinesActionInput }
            output: ForbiddenProblemResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: InvoicePendingLinesActionInput }
            output: PreconditionFailedProblemResponse
            outputFormat: 'json'
            status: 412
          }
        | {
            input: { json: InvoicePendingLinesActionInput }
            output: InternalServerErrorProblemResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { json: InvoicePendingLinesActionInput }
            output: ServiceUnavailableProblemResponse
            outputFormat: 'json'
            status: 503
          }
        | {
            input: { json: InvoicePendingLinesActionInput }
            output: UnexpectedProblemResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/billing/invoices/:invoiceId': {
      $get:
        | {
            input: { param: { invoiceId: string } } & {
              query: {
                expand?: InvoiceExpand[] | undefined
                includeDeletedLines?: boolean | undefined
              }
            }
            output: Invoice
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { invoiceId: string } } & {
              query: {
                expand?: InvoiceExpand[] | undefined
                includeDeletedLines?: boolean | undefined
              }
            }
            output: BadRequestProblemResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { invoiceId: string } } & {
              query: {
                expand?: InvoiceExpand[] | undefined
                includeDeletedLines?: boolean | undefined
              }
            }
            output: UnauthorizedProblemResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { invoiceId: string } } & {
              query: {
                expand?: InvoiceExpand[] | undefined
                includeDeletedLines?: boolean | undefined
              }
            }
            output: ForbiddenProblemResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { invoiceId: string } } & {
              query: {
                expand?: InvoiceExpand[] | undefined
                includeDeletedLines?: boolean | undefined
              }
            }
            output: NotFoundProblemResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { invoiceId: string } } & {
              query: {
                expand?: InvoiceExpand[] | undefined
                includeDeletedLines?: boolean | undefined
              }
            }
            output: PreconditionFailedProblemResponse
            outputFormat: 'json'
            status: 412
          }
        | {
            input: { param: { invoiceId: string } } & {
              query: {
                expand?: InvoiceExpand[] | undefined
                includeDeletedLines?: boolean | undefined
              }
            }
            output: InternalServerErrorProblemResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { invoiceId: string } } & {
              query: {
                expand?: InvoiceExpand[] | undefined
                includeDeletedLines?: boolean | undefined
              }
            }
            output: ServiceUnavailableProblemResponse
            outputFormat: 'json'
            status: 503
          }
        | {
            input: { param: { invoiceId: string } } & {
              query: {
                expand?: InvoiceExpand[] | undefined
                includeDeletedLines?: boolean | undefined
              }
            }
            output: UnexpectedProblemResponse
            outputFormat: 'json'
            status: 200
          }
      $delete:
        | { input: { param: { invoiceId: string } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { invoiceId: string } }
            output: BadRequestProblemResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { invoiceId: string } }
            output: UnauthorizedProblemResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { invoiceId: string } }
            output: ForbiddenProblemResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { invoiceId: string } }
            output: NotFoundProblemResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { invoiceId: string } }
            output: PreconditionFailedProblemResponse
            outputFormat: 'json'
            status: 412
          }
        | {
            input: { param: { invoiceId: string } }
            output: InternalServerErrorProblemResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { invoiceId: string } }
            output: ServiceUnavailableProblemResponse
            outputFormat: 'json'
            status: 503
          }
        | {
            input: { param: { invoiceId: string } }
            output: UnexpectedProblemResponse
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { invoiceId: string } } & { json: InvoiceReplaceUpdate }
            output: Invoice
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { invoiceId: string } } & { json: InvoiceReplaceUpdate }
            output: BadRequestProblemResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { invoiceId: string } } & { json: InvoiceReplaceUpdate }
            output: UnauthorizedProblemResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { invoiceId: string } } & { json: InvoiceReplaceUpdate }
            output: ForbiddenProblemResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { invoiceId: string } } & { json: InvoiceReplaceUpdate }
            output: NotFoundProblemResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { invoiceId: string } } & { json: InvoiceReplaceUpdate }
            output: PreconditionFailedProblemResponse
            outputFormat: 'json'
            status: 412
          }
        | {
            input: { param: { invoiceId: string } } & { json: InvoiceReplaceUpdate }
            output: InternalServerErrorProblemResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { invoiceId: string } } & { json: InvoiceReplaceUpdate }
            output: ServiceUnavailableProblemResponse
            outputFormat: 'json'
            status: 503
          }
        | {
            input: { param: { invoiceId: string } } & { json: InvoiceReplaceUpdate }
            output: UnexpectedProblemResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/billing/invoices/:invoiceId/advance': {
      $post:
        | {
            input: { param: { invoiceId: string } }
            output: Invoice
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { invoiceId: string } }
            output: BadRequestProblemResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { invoiceId: string } }
            output: UnauthorizedProblemResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { invoiceId: string } }
            output: ForbiddenProblemResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { invoiceId: string } }
            output: NotFoundProblemResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { invoiceId: string } }
            output: PreconditionFailedProblemResponse
            outputFormat: 'json'
            status: 412
          }
        | {
            input: { param: { invoiceId: string } }
            output: InternalServerErrorProblemResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { invoiceId: string } }
            output: ServiceUnavailableProblemResponse
            outputFormat: 'json'
            status: 503
          }
        | {
            input: { param: { invoiceId: string } }
            output: UnexpectedProblemResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/billing/invoices/:invoiceId/approve': {
      $post:
        | {
            input: { param: { invoiceId: string } }
            output: Invoice
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { invoiceId: string } }
            output: BadRequestProblemResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { invoiceId: string } }
            output: UnauthorizedProblemResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { invoiceId: string } }
            output: ForbiddenProblemResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { invoiceId: string } }
            output: NotFoundProblemResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { invoiceId: string } }
            output: PreconditionFailedProblemResponse
            outputFormat: 'json'
            status: 412
          }
        | {
            input: { param: { invoiceId: string } }
            output: InternalServerErrorProblemResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { invoiceId: string } }
            output: ServiceUnavailableProblemResponse
            outputFormat: 'json'
            status: 503
          }
        | {
            input: { param: { invoiceId: string } }
            output: UnexpectedProblemResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/billing/invoices/:invoiceId/retry': {
      $post:
        | {
            input: { param: { invoiceId: string } }
            output: Invoice
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { invoiceId: string } }
            output: BadRequestProblemResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { invoiceId: string } }
            output: UnauthorizedProblemResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { invoiceId: string } }
            output: ForbiddenProblemResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { invoiceId: string } }
            output: NotFoundProblemResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { invoiceId: string } }
            output: PreconditionFailedProblemResponse
            outputFormat: 'json'
            status: 412
          }
        | {
            input: { param: { invoiceId: string } }
            output: InternalServerErrorProblemResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { invoiceId: string } }
            output: ServiceUnavailableProblemResponse
            outputFormat: 'json'
            status: 503
          }
        | {
            input: { param: { invoiceId: string } }
            output: UnexpectedProblemResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/billing/invoices/:invoiceId/snapshot-quantities': {
      $post:
        | {
            input: { param: { invoiceId: string } }
            output: Invoice
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { invoiceId: string } }
            output: BadRequestProblemResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { invoiceId: string } }
            output: UnauthorizedProblemResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { invoiceId: string } }
            output: ForbiddenProblemResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { invoiceId: string } }
            output: NotFoundProblemResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { invoiceId: string } }
            output: PreconditionFailedProblemResponse
            outputFormat: 'json'
            status: 412
          }
        | {
            input: { param: { invoiceId: string } }
            output: InternalServerErrorProblemResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { invoiceId: string } }
            output: ServiceUnavailableProblemResponse
            outputFormat: 'json'
            status: 503
          }
        | {
            input: { param: { invoiceId: string } }
            output: UnexpectedProblemResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/billing/invoices/:invoiceId/taxes/recalculate': {
      $post:
        | {
            input: { param: { invoiceId: string } }
            output: Invoice
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { invoiceId: string } }
            output: BadRequestProblemResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { invoiceId: string } }
            output: UnauthorizedProblemResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { invoiceId: string } }
            output: ForbiddenProblemResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { invoiceId: string } }
            output: NotFoundProblemResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { invoiceId: string } }
            output: PreconditionFailedProblemResponse
            outputFormat: 'json'
            status: 412
          }
        | {
            input: { param: { invoiceId: string } }
            output: InternalServerErrorProblemResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { invoiceId: string } }
            output: ServiceUnavailableProblemResponse
            outputFormat: 'json'
            status: 503
          }
        | {
            input: { param: { invoiceId: string } }
            output: UnexpectedProblemResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/billing/invoices/:invoiceId/void': {
      $post:
        | {
            input: { param: { invoiceId: string } } & { json: VoidInvoiceActionInput }
            output: Invoice
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { invoiceId: string } } & { json: VoidInvoiceActionInput }
            output: BadRequestProblemResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { invoiceId: string } } & { json: VoidInvoiceActionInput }
            output: UnauthorizedProblemResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { invoiceId: string } } & { json: VoidInvoiceActionInput }
            output: ForbiddenProblemResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { invoiceId: string } } & { json: VoidInvoiceActionInput }
            output: NotFoundProblemResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { invoiceId: string } } & { json: VoidInvoiceActionInput }
            output: PreconditionFailedProblemResponse
            outputFormat: 'json'
            status: 412
          }
        | {
            input: { param: { invoiceId: string } } & { json: VoidInvoiceActionInput }
            output: InternalServerErrorProblemResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { invoiceId: string } } & { json: VoidInvoiceActionInput }
            output: ServiceUnavailableProblemResponse
            outputFormat: 'json'
            status: 503
          }
        | {
            input: { param: { invoiceId: string } } & { json: VoidInvoiceActionInput }
            output: UnexpectedProblemResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/billing/profiles': {
      $get:
        | {
            input: {
              query: {
                includeArchived?: boolean | undefined
                expand?: BillingProfileExpand[] | undefined
                page?: number | undefined
                pageSize?: number | undefined
                order?: {} | undefined
                orderBy?: BillingProfileOrderBy | undefined
              }
            }
            output: BillingProfilePaginatedResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                includeArchived?: boolean | undefined
                expand?: BillingProfileExpand[] | undefined
                page?: number | undefined
                pageSize?: number | undefined
                order?: {} | undefined
                orderBy?: BillingProfileOrderBy | undefined
              }
            }
            output: BadRequestProblemResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                includeArchived?: boolean | undefined
                expand?: BillingProfileExpand[] | undefined
                page?: number | undefined
                pageSize?: number | undefined
                order?: {} | undefined
                orderBy?: BillingProfileOrderBy | undefined
              }
            }
            output: UnauthorizedProblemResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                includeArchived?: boolean | undefined
                expand?: BillingProfileExpand[] | undefined
                page?: number | undefined
                pageSize?: number | undefined
                order?: {} | undefined
                orderBy?: BillingProfileOrderBy | undefined
              }
            }
            output: ForbiddenProblemResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                includeArchived?: boolean | undefined
                expand?: BillingProfileExpand[] | undefined
                page?: number | undefined
                pageSize?: number | undefined
                order?: {} | undefined
                orderBy?: BillingProfileOrderBy | undefined
              }
            }
            output: PreconditionFailedProblemResponse
            outputFormat: 'json'
            status: 412
          }
        | {
            input: {
              query: {
                includeArchived?: boolean | undefined
                expand?: BillingProfileExpand[] | undefined
                page?: number | undefined
                pageSize?: number | undefined
                order?: {} | undefined
                orderBy?: BillingProfileOrderBy | undefined
              }
            }
            output: InternalServerErrorProblemResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              query: {
                includeArchived?: boolean | undefined
                expand?: BillingProfileExpand[] | undefined
                page?: number | undefined
                pageSize?: number | undefined
                order?: {} | undefined
                orderBy?: BillingProfileOrderBy | undefined
              }
            }
            output: ServiceUnavailableProblemResponse
            outputFormat: 'json'
            status: 503
          }
        | {
            input: {
              query: {
                includeArchived?: boolean | undefined
                expand?: BillingProfileExpand[] | undefined
                page?: number | undefined
                pageSize?: number | undefined
                order?: {} | undefined
                orderBy?: BillingProfileOrderBy | undefined
              }
            }
            output: UnexpectedProblemResponse
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { json: BillingProfileCreate }
            output: BillingProfile
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: BillingProfileCreate }
            output: BadRequestProblemResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: BillingProfileCreate }
            output: UnauthorizedProblemResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: BillingProfileCreate }
            output: ForbiddenProblemResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: BillingProfileCreate }
            output: PreconditionFailedProblemResponse
            outputFormat: 'json'
            status: 412
          }
        | {
            input: { json: BillingProfileCreate }
            output: InternalServerErrorProblemResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { json: BillingProfileCreate }
            output: ServiceUnavailableProblemResponse
            outputFormat: 'json'
            status: 503
          }
        | {
            input: { json: BillingProfileCreate }
            output: UnexpectedProblemResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/billing/profiles/:id': {
      $delete:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { id: string } }
            output: BadRequestProblemResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } }
            output: UnauthorizedProblemResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } }
            output: ForbiddenProblemResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } }
            output: NotFoundProblemResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } }
            output: PreconditionFailedProblemResponse
            outputFormat: 'json'
            status: 412
          }
        | {
            input: { param: { id: string } }
            output: InternalServerErrorProblemResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { id: string } }
            output: ServiceUnavailableProblemResponse
            outputFormat: 'json'
            status: 503
          }
        | {
            input: { param: { id: string } }
            output: UnexpectedProblemResponse
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { id: string } } & {
              query: { expand?: BillingProfileExpand[] | undefined }
            }
            output: BillingProfile
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: { expand?: BillingProfileExpand[] | undefined }
            }
            output: BadRequestProblemResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              query: { expand?: BillingProfileExpand[] | undefined }
            }
            output: UnauthorizedProblemResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              query: { expand?: BillingProfileExpand[] | undefined }
            }
            output: ForbiddenProblemResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              query: { expand?: BillingProfileExpand[] | undefined }
            }
            output: NotFoundProblemResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              query: { expand?: BillingProfileExpand[] | undefined }
            }
            output: PreconditionFailedProblemResponse
            outputFormat: 'json'
            status: 412
          }
        | {
            input: { param: { id: string } } & {
              query: { expand?: BillingProfileExpand[] | undefined }
            }
            output: InternalServerErrorProblemResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { id: string } } & {
              query: { expand?: BillingProfileExpand[] | undefined }
            }
            output: ServiceUnavailableProblemResponse
            outputFormat: 'json'
            status: 503
          }
        | {
            input: { param: { id: string } } & {
              query: { expand?: BillingProfileExpand[] | undefined }
            }
            output: UnexpectedProblemResponse
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { id: string } } & { json: BillingProfileReplaceUpdateWithWorkflow }
            output: BillingProfile
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: BillingProfileReplaceUpdateWithWorkflow }
            output: BadRequestProblemResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: BillingProfileReplaceUpdateWithWorkflow }
            output: UnauthorizedProblemResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { json: BillingProfileReplaceUpdateWithWorkflow }
            output: ForbiddenProblemResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { json: BillingProfileReplaceUpdateWithWorkflow }
            output: NotFoundProblemResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { json: BillingProfileReplaceUpdateWithWorkflow }
            output: PreconditionFailedProblemResponse
            outputFormat: 'json'
            status: 412
          }
        | {
            input: { param: { id: string } } & { json: BillingProfileReplaceUpdateWithWorkflow }
            output: InternalServerErrorProblemResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { id: string } } & { json: BillingProfileReplaceUpdateWithWorkflow }
            output: ServiceUnavailableProblemResponse
            outputFormat: 'json'
            status: 503
          }
        | {
            input: { param: { id: string } } & { json: BillingProfileReplaceUpdateWithWorkflow }
            output: UnexpectedProblemResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/customers': {
      $post:
        | { input: { json: CustomerCreate }; output: Customer; outputFormat: 'json'; status: 201 }
        | {
            input: { json: CustomerCreate }
            output: BadRequestProblemResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: CustomerCreate }
            output: UnauthorizedProblemResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: CustomerCreate }
            output: ForbiddenProblemResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: CustomerCreate }
            output: PreconditionFailedProblemResponse
            outputFormat: 'json'
            status: 412
          }
        | {
            input: { json: CustomerCreate }
            output: InternalServerErrorProblemResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { json: CustomerCreate }
            output: ServiceUnavailableProblemResponse
            outputFormat: 'json'
            status: 503
          }
        | {
            input: { json: CustomerCreate }
            output: UnexpectedProblemResponse
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: {
              query: {
                page?: number | undefined
                pageSize?: number | undefined
                order?: {} | undefined
                orderBy?: CustomerOrderBy | undefined
                includeDeleted?: boolean | undefined
                key?: string | undefined
                name?: string | undefined
                primaryEmail?: string | undefined
                subject?: string | undefined
                planKey?: string | undefined
                expand?: CustomerExpand[] | undefined
              }
            }
            output: CustomerPaginatedResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                pageSize?: number | undefined
                order?: {} | undefined
                orderBy?: CustomerOrderBy | undefined
                includeDeleted?: boolean | undefined
                key?: string | undefined
                name?: string | undefined
                primaryEmail?: string | undefined
                subject?: string | undefined
                planKey?: string | undefined
                expand?: CustomerExpand[] | undefined
              }
            }
            output: BadRequestProblemResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                page?: number | undefined
                pageSize?: number | undefined
                order?: {} | undefined
                orderBy?: CustomerOrderBy | undefined
                includeDeleted?: boolean | undefined
                key?: string | undefined
                name?: string | undefined
                primaryEmail?: string | undefined
                subject?: string | undefined
                planKey?: string | undefined
                expand?: CustomerExpand[] | undefined
              }
            }
            output: UnauthorizedProblemResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                page?: number | undefined
                pageSize?: number | undefined
                order?: {} | undefined
                orderBy?: CustomerOrderBy | undefined
                includeDeleted?: boolean | undefined
                key?: string | undefined
                name?: string | undefined
                primaryEmail?: string | undefined
                subject?: string | undefined
                planKey?: string | undefined
                expand?: CustomerExpand[] | undefined
              }
            }
            output: ForbiddenProblemResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                page?: number | undefined
                pageSize?: number | undefined
                order?: {} | undefined
                orderBy?: CustomerOrderBy | undefined
                includeDeleted?: boolean | undefined
                key?: string | undefined
                name?: string | undefined
                primaryEmail?: string | undefined
                subject?: string | undefined
                planKey?: string | undefined
                expand?: CustomerExpand[] | undefined
              }
            }
            output: PreconditionFailedProblemResponse
            outputFormat: 'json'
            status: 412
          }
        | {
            input: {
              query: {
                page?: number | undefined
                pageSize?: number | undefined
                order?: {} | undefined
                orderBy?: CustomerOrderBy | undefined
                includeDeleted?: boolean | undefined
                key?: string | undefined
                name?: string | undefined
                primaryEmail?: string | undefined
                subject?: string | undefined
                planKey?: string | undefined
                expand?: CustomerExpand[] | undefined
              }
            }
            output: InternalServerErrorProblemResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              query: {
                page?: number | undefined
                pageSize?: number | undefined
                order?: {} | undefined
                orderBy?: CustomerOrderBy | undefined
                includeDeleted?: boolean | undefined
                key?: string | undefined
                name?: string | undefined
                primaryEmail?: string | undefined
                subject?: string | undefined
                planKey?: string | undefined
                expand?: CustomerExpand[] | undefined
              }
            }
            output: ServiceUnavailableProblemResponse
            outputFormat: 'json'
            status: 503
          }
        | {
            input: {
              query: {
                page?: number | undefined
                pageSize?: number | undefined
                order?: {} | undefined
                orderBy?: CustomerOrderBy | undefined
                includeDeleted?: boolean | undefined
                key?: string | undefined
                name?: string | undefined
                primaryEmail?: string | undefined
                subject?: string | undefined
                planKey?: string | undefined
                expand?: CustomerExpand[] | undefined
              }
            }
            output: UnexpectedProblemResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/customers/:customerIdOrKey': {
      $get:
        | {
            input: { param: { customerIdOrKey: ULIDOrExternalKey } } & {
              query: { expand?: CustomerExpand[] | undefined }
            }
            output: Customer
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { customerIdOrKey: ULIDOrExternalKey } } & {
              query: { expand?: CustomerExpand[] | undefined }
            }
            output: BadRequestProblemResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { customerIdOrKey: ULIDOrExternalKey } } & {
              query: { expand?: CustomerExpand[] | undefined }
            }
            output: UnauthorizedProblemResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { customerIdOrKey: ULIDOrExternalKey } } & {
              query: { expand?: CustomerExpand[] | undefined }
            }
            output: ForbiddenProblemResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { customerIdOrKey: ULIDOrExternalKey } } & {
              query: { expand?: CustomerExpand[] | undefined }
            }
            output: NotFoundProblemResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { customerIdOrKey: ULIDOrExternalKey } } & {
              query: { expand?: CustomerExpand[] | undefined }
            }
            output: PreconditionFailedProblemResponse
            outputFormat: 'json'
            status: 412
          }
        | {
            input: { param: { customerIdOrKey: ULIDOrExternalKey } } & {
              query: { expand?: CustomerExpand[] | undefined }
            }
            output: InternalServerErrorProblemResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { customerIdOrKey: ULIDOrExternalKey } } & {
              query: { expand?: CustomerExpand[] | undefined }
            }
            output: ServiceUnavailableProblemResponse
            outputFormat: 'json'
            status: 503
          }
        | {
            input: { param: { customerIdOrKey: ULIDOrExternalKey } } & {
              query: { expand?: CustomerExpand[] | undefined }
            }
            output: UnexpectedProblemResponse
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { customerIdOrKey: ULIDOrExternalKey } } & {
              json: CustomerReplaceUpdate
            }
            output: Customer
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { customerIdOrKey: ULIDOrExternalKey } } & {
              json: CustomerReplaceUpdate
            }
            output: BadRequestProblemResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { customerIdOrKey: ULIDOrExternalKey } } & {
              json: CustomerReplaceUpdate
            }
            output: UnauthorizedProblemResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { customerIdOrKey: ULIDOrExternalKey } } & {
              json: CustomerReplaceUpdate
            }
            output: ForbiddenProblemResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { customerIdOrKey: ULIDOrExternalKey } } & {
              json: CustomerReplaceUpdate
            }
            output: NotFoundProblemResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { customerIdOrKey: ULIDOrExternalKey } } & {
              json: CustomerReplaceUpdate
            }
            output: PreconditionFailedProblemResponse
            outputFormat: 'json'
            status: 412
          }
        | {
            input: { param: { customerIdOrKey: ULIDOrExternalKey } } & {
              json: CustomerReplaceUpdate
            }
            output: InternalServerErrorProblemResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { customerIdOrKey: ULIDOrExternalKey } } & {
              json: CustomerReplaceUpdate
            }
            output: ServiceUnavailableProblemResponse
            outputFormat: 'json'
            status: 503
          }
        | {
            input: { param: { customerIdOrKey: ULIDOrExternalKey } } & {
              json: CustomerReplaceUpdate
            }
            output: UnexpectedProblemResponse
            outputFormat: 'json'
            status: 200
          }
      $delete:
        | {
            input: { param: { customerIdOrKey: ULIDOrExternalKey } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { customerIdOrKey: ULIDOrExternalKey } }
            output: BadRequestProblemResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { customerIdOrKey: ULIDOrExternalKey } }
            output: UnauthorizedProblemResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { customerIdOrKey: ULIDOrExternalKey } }
            output: ForbiddenProblemResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { customerIdOrKey: ULIDOrExternalKey } }
            output: NotFoundProblemResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { customerIdOrKey: ULIDOrExternalKey } }
            output: PreconditionFailedProblemResponse
            outputFormat: 'json'
            status: 412
          }
        | {
            input: { param: { customerIdOrKey: ULIDOrExternalKey } }
            output: InternalServerErrorProblemResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { customerIdOrKey: ULIDOrExternalKey } }
            output: ServiceUnavailableProblemResponse
            outputFormat: 'json'
            status: 503
          }
        | {
            input: { param: { customerIdOrKey: ULIDOrExternalKey } }
            output: UnexpectedProblemResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/customers/:customerIdOrKey/access': {
      $get:
        | {
            input: { param: { customerIdOrKey: ULIDOrExternalKey } }
            output: CustomerAccess
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { customerIdOrKey: ULIDOrExternalKey } }
            output: BadRequestProblemResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { customerIdOrKey: ULIDOrExternalKey } }
            output: UnauthorizedProblemResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { customerIdOrKey: ULIDOrExternalKey } }
            output: ForbiddenProblemResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { customerIdOrKey: ULIDOrExternalKey } }
            output: NotFoundProblemResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { customerIdOrKey: ULIDOrExternalKey } }
            output: PreconditionFailedProblemResponse
            outputFormat: 'json'
            status: 412
          }
        | {
            input: { param: { customerIdOrKey: ULIDOrExternalKey } }
            output: InternalServerErrorProblemResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { customerIdOrKey: ULIDOrExternalKey } }
            output: ServiceUnavailableProblemResponse
            outputFormat: 'json'
            status: 503
          }
        | {
            input: { param: { customerIdOrKey: ULIDOrExternalKey } }
            output: UnexpectedProblemResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/customers/:customerIdOrKey/apps': {
      $get:
        | {
            input: { param: { customerIdOrKey: ULIDOrExternalKey } } & {
              query: {
                page?: number | undefined
                pageSize?: number | undefined
                type?: AppType | undefined
              }
            }
            output: CustomerAppDataPaginatedResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { customerIdOrKey: ULIDOrExternalKey } } & {
              query: {
                page?: number | undefined
                pageSize?: number | undefined
                type?: AppType | undefined
              }
            }
            output: BadRequestProblemResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { customerIdOrKey: ULIDOrExternalKey } } & {
              query: {
                page?: number | undefined
                pageSize?: number | undefined
                type?: AppType | undefined
              }
            }
            output: UnauthorizedProblemResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { customerIdOrKey: ULIDOrExternalKey } } & {
              query: {
                page?: number | undefined
                pageSize?: number | undefined
                type?: AppType | undefined
              }
            }
            output: ForbiddenProblemResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { customerIdOrKey: ULIDOrExternalKey } } & {
              query: {
                page?: number | undefined
                pageSize?: number | undefined
                type?: AppType | undefined
              }
            }
            output: NotFoundProblemResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { customerIdOrKey: ULIDOrExternalKey } } & {
              query: {
                page?: number | undefined
                pageSize?: number | undefined
                type?: AppType | undefined
              }
            }
            output: PreconditionFailedProblemResponse
            outputFormat: 'json'
            status: 412
          }
        | {
            input: { param: { customerIdOrKey: ULIDOrExternalKey } } & {
              query: {
                page?: number | undefined
                pageSize?: number | undefined
                type?: AppType | undefined
              }
            }
            output: InternalServerErrorProblemResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { customerIdOrKey: ULIDOrExternalKey } } & {
              query: {
                page?: number | undefined
                pageSize?: number | undefined
                type?: AppType | undefined
              }
            }
            output: ServiceUnavailableProblemResponse
            outputFormat: 'json'
            status: 503
          }
        | {
            input: { param: { customerIdOrKey: ULIDOrExternalKey } } & {
              query: {
                page?: number | undefined
                pageSize?: number | undefined
                type?: AppType | undefined
              }
            }
            output: UnexpectedProblemResponse
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { customerIdOrKey: ULIDOrExternalKey } } & {
              json: CustomerAppDataCreateOrUpdateItem[]
            }
            output: CustomerAppData[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { customerIdOrKey: ULIDOrExternalKey } } & {
              json: CustomerAppDataCreateOrUpdateItem[]
            }
            output: BadRequestProblemResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { customerIdOrKey: ULIDOrExternalKey } } & {
              json: CustomerAppDataCreateOrUpdateItem[]
            }
            output: UnauthorizedProblemResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { customerIdOrKey: ULIDOrExternalKey } } & {
              json: CustomerAppDataCreateOrUpdateItem[]
            }
            output: ForbiddenProblemResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { customerIdOrKey: ULIDOrExternalKey } } & {
              json: CustomerAppDataCreateOrUpdateItem[]
            }
            output: NotFoundProblemResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { customerIdOrKey: ULIDOrExternalKey } } & {
              json: CustomerAppDataCreateOrUpdateItem[]
            }
            output: PreconditionFailedProblemResponse
            outputFormat: 'json'
            status: 412
          }
        | {
            input: { param: { customerIdOrKey: ULIDOrExternalKey } } & {
              json: CustomerAppDataCreateOrUpdateItem[]
            }
            output: InternalServerErrorProblemResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { customerIdOrKey: ULIDOrExternalKey } } & {
              json: CustomerAppDataCreateOrUpdateItem[]
            }
            output: ServiceUnavailableProblemResponse
            outputFormat: 'json'
            status: 503
          }
        | {
            input: { param: { customerIdOrKey: ULIDOrExternalKey } } & {
              json: CustomerAppDataCreateOrUpdateItem[]
            }
            output: UnexpectedProblemResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/customers/:customerIdOrKey/apps/:appId': {
      $delete:
        | {
            input: { param: { customerIdOrKey: ULIDOrExternalKey; appId: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { customerIdOrKey: ULIDOrExternalKey; appId: string } }
            output: BadRequestProblemResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { customerIdOrKey: ULIDOrExternalKey; appId: string } }
            output: UnauthorizedProblemResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { customerIdOrKey: ULIDOrExternalKey; appId: string } }
            output: ForbiddenProblemResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { customerIdOrKey: ULIDOrExternalKey; appId: string } }
            output: NotFoundProblemResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { customerIdOrKey: ULIDOrExternalKey; appId: string } }
            output: PreconditionFailedProblemResponse
            outputFormat: 'json'
            status: 412
          }
        | {
            input: { param: { customerIdOrKey: ULIDOrExternalKey; appId: string } }
            output: InternalServerErrorProblemResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { customerIdOrKey: ULIDOrExternalKey; appId: string } }
            output: ServiceUnavailableProblemResponse
            outputFormat: 'json'
            status: 503
          }
        | {
            input: { param: { customerIdOrKey: ULIDOrExternalKey; appId: string } }
            output: UnexpectedProblemResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/customers/:customerIdOrKey/entitlements/:featureKey/value': {
      $get:
        | {
            input: { param: { customerIdOrKey: ULIDOrExternalKey; featureKey: string } } & {
              query: { time?: string | undefined }
            }
            output: EntitlementValue
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { customerIdOrKey: ULIDOrExternalKey; featureKey: string } } & {
              query: { time?: string | undefined }
            }
            output: BadRequestProblemResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { customerIdOrKey: ULIDOrExternalKey; featureKey: string } } & {
              query: { time?: string | undefined }
            }
            output: UnauthorizedProblemResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { customerIdOrKey: ULIDOrExternalKey; featureKey: string } } & {
              query: { time?: string | undefined }
            }
            output: ForbiddenProblemResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { customerIdOrKey: ULIDOrExternalKey; featureKey: string } } & {
              query: { time?: string | undefined }
            }
            output: NotFoundProblemResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { customerIdOrKey: ULIDOrExternalKey; featureKey: string } } & {
              query: { time?: string | undefined }
            }
            output: PreconditionFailedProblemResponse
            outputFormat: 'json'
            status: 412
          }
        | {
            input: { param: { customerIdOrKey: ULIDOrExternalKey; featureKey: string } } & {
              query: { time?: string | undefined }
            }
            output: InternalServerErrorProblemResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { customerIdOrKey: ULIDOrExternalKey; featureKey: string } } & {
              query: { time?: string | undefined }
            }
            output: ServiceUnavailableProblemResponse
            outputFormat: 'json'
            status: 503
          }
        | {
            input: { param: { customerIdOrKey: ULIDOrExternalKey; featureKey: string } } & {
              query: { time?: string | undefined }
            }
            output: UnexpectedProblemResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/customers/:customerIdOrKey/stripe': {
      $get:
        | {
            input: { param: { customerIdOrKey: ULIDOrExternalKey } }
            output: StripeCustomerAppData
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { customerIdOrKey: ULIDOrExternalKey } }
            output: BadRequestProblemResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { customerIdOrKey: ULIDOrExternalKey } }
            output: UnauthorizedProblemResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { customerIdOrKey: ULIDOrExternalKey } }
            output: ForbiddenProblemResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { customerIdOrKey: ULIDOrExternalKey } }
            output: NotFoundProblemResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { customerIdOrKey: ULIDOrExternalKey } }
            output: PreconditionFailedProblemResponse
            outputFormat: 'json'
            status: 412
          }
        | {
            input: { param: { customerIdOrKey: ULIDOrExternalKey } }
            output: InternalServerErrorProblemResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { customerIdOrKey: ULIDOrExternalKey } }
            output: ServiceUnavailableProblemResponse
            outputFormat: 'json'
            status: 503
          }
        | {
            input: { param: { customerIdOrKey: ULIDOrExternalKey } }
            output: UnexpectedProblemResponse
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { customerIdOrKey: ULIDOrExternalKey } } & {
              json: StripeCustomerAppDataBase
            }
            output: StripeCustomerAppData
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { customerIdOrKey: ULIDOrExternalKey } } & {
              json: StripeCustomerAppDataBase
            }
            output: BadRequestProblemResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { customerIdOrKey: ULIDOrExternalKey } } & {
              json: StripeCustomerAppDataBase
            }
            output: UnauthorizedProblemResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { customerIdOrKey: ULIDOrExternalKey } } & {
              json: StripeCustomerAppDataBase
            }
            output: ForbiddenProblemResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { customerIdOrKey: ULIDOrExternalKey } } & {
              json: StripeCustomerAppDataBase
            }
            output: NotFoundProblemResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { customerIdOrKey: ULIDOrExternalKey } } & {
              json: StripeCustomerAppDataBase
            }
            output: PreconditionFailedProblemResponse
            outputFormat: 'json'
            status: 412
          }
        | {
            input: { param: { customerIdOrKey: ULIDOrExternalKey } } & {
              json: StripeCustomerAppDataBase
            }
            output: InternalServerErrorProblemResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { customerIdOrKey: ULIDOrExternalKey } } & {
              json: StripeCustomerAppDataBase
            }
            output: ServiceUnavailableProblemResponse
            outputFormat: 'json'
            status: 503
          }
        | {
            input: { param: { customerIdOrKey: ULIDOrExternalKey } } & {
              json: StripeCustomerAppDataBase
            }
            output: UnexpectedProblemResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/customers/:customerIdOrKey/stripe/portal': {
      $post:
        | {
            input: { param: { customerIdOrKey: ULIDOrExternalKey } } & {
              json: CreateStripeCustomerPortalSessionParams
            }
            output: StripeCustomerPortalSession
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { customerIdOrKey: ULIDOrExternalKey } } & {
              json: CreateStripeCustomerPortalSessionParams
            }
            output: BadRequestProblemResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { customerIdOrKey: ULIDOrExternalKey } } & {
              json: CreateStripeCustomerPortalSessionParams
            }
            output: UnauthorizedProblemResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { customerIdOrKey: ULIDOrExternalKey } } & {
              json: CreateStripeCustomerPortalSessionParams
            }
            output: ForbiddenProblemResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { customerIdOrKey: ULIDOrExternalKey } } & {
              json: CreateStripeCustomerPortalSessionParams
            }
            output: NotFoundProblemResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { customerIdOrKey: ULIDOrExternalKey } } & {
              json: CreateStripeCustomerPortalSessionParams
            }
            output: PreconditionFailedProblemResponse
            outputFormat: 'json'
            status: 412
          }
        | {
            input: { param: { customerIdOrKey: ULIDOrExternalKey } } & {
              json: CreateStripeCustomerPortalSessionParams
            }
            output: InternalServerErrorProblemResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { customerIdOrKey: ULIDOrExternalKey } } & {
              json: CreateStripeCustomerPortalSessionParams
            }
            output: ServiceUnavailableProblemResponse
            outputFormat: 'json'
            status: 503
          }
        | {
            input: { param: { customerIdOrKey: ULIDOrExternalKey } } & {
              json: CreateStripeCustomerPortalSessionParams
            }
            output: UnexpectedProblemResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/customers/:customerIdOrKey/subscriptions': {
      $get:
        | {
            input: { param: { customerIdOrKey: ULIDOrExternalKey } } & {
              query: {
                status?: SubscriptionStatus[] | undefined
                order?: {} | undefined
                orderBy?: CustomerSubscriptionOrderBy | undefined
                page?: number | undefined
                pageSize?: number | undefined
              }
            }
            output: SubscriptionPaginatedResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { customerIdOrKey: ULIDOrExternalKey } } & {
              query: {
                status?: SubscriptionStatus[] | undefined
                order?: {} | undefined
                orderBy?: CustomerSubscriptionOrderBy | undefined
                page?: number | undefined
                pageSize?: number | undefined
              }
            }
            output: BadRequestProblemResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { customerIdOrKey: ULIDOrExternalKey } } & {
              query: {
                status?: SubscriptionStatus[] | undefined
                order?: {} | undefined
                orderBy?: CustomerSubscriptionOrderBy | undefined
                page?: number | undefined
                pageSize?: number | undefined
              }
            }
            output: UnauthorizedProblemResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { customerIdOrKey: ULIDOrExternalKey } } & {
              query: {
                status?: SubscriptionStatus[] | undefined
                order?: {} | undefined
                orderBy?: CustomerSubscriptionOrderBy | undefined
                page?: number | undefined
                pageSize?: number | undefined
              }
            }
            output: ForbiddenProblemResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { customerIdOrKey: ULIDOrExternalKey } } & {
              query: {
                status?: SubscriptionStatus[] | undefined
                order?: {} | undefined
                orderBy?: CustomerSubscriptionOrderBy | undefined
                page?: number | undefined
                pageSize?: number | undefined
              }
            }
            output: NotFoundProblemResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { customerIdOrKey: ULIDOrExternalKey } } & {
              query: {
                status?: SubscriptionStatus[] | undefined
                order?: {} | undefined
                orderBy?: CustomerSubscriptionOrderBy | undefined
                page?: number | undefined
                pageSize?: number | undefined
              }
            }
            output: PreconditionFailedProblemResponse
            outputFormat: 'json'
            status: 412
          }
        | {
            input: { param: { customerIdOrKey: ULIDOrExternalKey } } & {
              query: {
                status?: SubscriptionStatus[] | undefined
                order?: {} | undefined
                orderBy?: CustomerSubscriptionOrderBy | undefined
                page?: number | undefined
                pageSize?: number | undefined
              }
            }
            output: InternalServerErrorProblemResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { customerIdOrKey: ULIDOrExternalKey } } & {
              query: {
                status?: SubscriptionStatus[] | undefined
                order?: {} | undefined
                orderBy?: CustomerSubscriptionOrderBy | undefined
                page?: number | undefined
                pageSize?: number | undefined
              }
            }
            output: ServiceUnavailableProblemResponse
            outputFormat: 'json'
            status: 503
          }
        | {
            input: { param: { customerIdOrKey: ULIDOrExternalKey } } & {
              query: {
                status?: SubscriptionStatus[] | undefined
                order?: {} | undefined
                orderBy?: CustomerSubscriptionOrderBy | undefined
                page?: number | undefined
                pageSize?: number | undefined
              }
            }
            output: UnexpectedProblemResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/debug/metrics': {
      $get:
        | { input: {}; output: string; outputFormat: 'text'; status: 200 }
        | { input: {}; output: BadRequestProblemResponse; outputFormat: 'json'; status: 400 }
        | { input: {}; output: UnauthorizedProblemResponse; outputFormat: 'json'; status: 401 }
        | { input: {}; output: ForbiddenProblemResponse; outputFormat: 'json'; status: 403 }
        | {
            input: {}
            output: PreconditionFailedProblemResponse
            outputFormat: 'json'
            status: 412
          }
        | {
            input: {}
            output: InternalServerErrorProblemResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {}
            output: ServiceUnavailableProblemResponse
            outputFormat: 'json'
            status: 503
          }
        | { input: {}; output: UnexpectedProblemResponse; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/api/v1/entitlements': {
      $get:
        | {
            input: {
              query: {
                feature?: string[] | undefined
                subject?: string[] | undefined
                entitlementType?: EntitlementType[] | undefined
                excludeInactive?: boolean | undefined
                page?: number | undefined
                pageSize?: number | undefined
                offset?: number | undefined
                limit?: number | undefined
                order?: {} | undefined
                orderBy?: EntitlementOrderBy | undefined
              }
            }
            output: ListEntitlementsResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                feature?: string[] | undefined
                subject?: string[] | undefined
                entitlementType?: EntitlementType[] | undefined
                excludeInactive?: boolean | undefined
                page?: number | undefined
                pageSize?: number | undefined
                offset?: number | undefined
                limit?: number | undefined
                order?: {} | undefined
                orderBy?: EntitlementOrderBy | undefined
              }
            }
            output: BadRequestProblemResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                feature?: string[] | undefined
                subject?: string[] | undefined
                entitlementType?: EntitlementType[] | undefined
                excludeInactive?: boolean | undefined
                page?: number | undefined
                pageSize?: number | undefined
                offset?: number | undefined
                limit?: number | undefined
                order?: {} | undefined
                orderBy?: EntitlementOrderBy | undefined
              }
            }
            output: UnauthorizedProblemResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                feature?: string[] | undefined
                subject?: string[] | undefined
                entitlementType?: EntitlementType[] | undefined
                excludeInactive?: boolean | undefined
                page?: number | undefined
                pageSize?: number | undefined
                offset?: number | undefined
                limit?: number | undefined
                order?: {} | undefined
                orderBy?: EntitlementOrderBy | undefined
              }
            }
            output: ForbiddenProblemResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                feature?: string[] | undefined
                subject?: string[] | undefined
                entitlementType?: EntitlementType[] | undefined
                excludeInactive?: boolean | undefined
                page?: number | undefined
                pageSize?: number | undefined
                offset?: number | undefined
                limit?: number | undefined
                order?: {} | undefined
                orderBy?: EntitlementOrderBy | undefined
              }
            }
            output: PreconditionFailedProblemResponse
            outputFormat: 'json'
            status: 412
          }
        | {
            input: {
              query: {
                feature?: string[] | undefined
                subject?: string[] | undefined
                entitlementType?: EntitlementType[] | undefined
                excludeInactive?: boolean | undefined
                page?: number | undefined
                pageSize?: number | undefined
                offset?: number | undefined
                limit?: number | undefined
                order?: {} | undefined
                orderBy?: EntitlementOrderBy | undefined
              }
            }
            output: InternalServerErrorProblemResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              query: {
                feature?: string[] | undefined
                subject?: string[] | undefined
                entitlementType?: EntitlementType[] | undefined
                excludeInactive?: boolean | undefined
                page?: number | undefined
                pageSize?: number | undefined
                offset?: number | undefined
                limit?: number | undefined
                order?: {} | undefined
                orderBy?: EntitlementOrderBy | undefined
              }
            }
            output: ServiceUnavailableProblemResponse
            outputFormat: 'json'
            status: 503
          }
        | {
            input: {
              query: {
                feature?: string[] | undefined
                subject?: string[] | undefined
                entitlementType?: EntitlementType[] | undefined
                excludeInactive?: boolean | undefined
                page?: number | undefined
                pageSize?: number | undefined
                offset?: number | undefined
                limit?: number | undefined
                order?: {} | undefined
                orderBy?: EntitlementOrderBy | undefined
              }
            }
            output: UnexpectedProblemResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/entitlements/:entitlementId': {
      $get:
        | {
            input: { param: { entitlementId: string } }
            output: Entitlement
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { entitlementId: string } }
            output: BadRequestProblemResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { entitlementId: string } }
            output: UnauthorizedProblemResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { entitlementId: string } }
            output: ForbiddenProblemResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { entitlementId: string } }
            output: NotFoundProblemResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { entitlementId: string } }
            output: PreconditionFailedProblemResponse
            outputFormat: 'json'
            status: 412
          }
        | {
            input: { param: { entitlementId: string } }
            output: InternalServerErrorProblemResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { entitlementId: string } }
            output: ServiceUnavailableProblemResponse
            outputFormat: 'json'
            status: 503
          }
        | {
            input: { param: { entitlementId: string } }
            output: UnexpectedProblemResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/events': {
      $get:
        | {
            input: {
              query: {
                clientId?: string | undefined
                ingestedAtFrom?: string | undefined
                ingestedAtTo?: string | undefined
                id?: string | undefined
                subject?: string | undefined
                customerId?: string[] | undefined
                from?: string | undefined
                to?: string | undefined
                limit?: number | undefined
              }
            }
            output: IngestedEvent[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                clientId?: string | undefined
                ingestedAtFrom?: string | undefined
                ingestedAtTo?: string | undefined
                id?: string | undefined
                subject?: string | undefined
                customerId?: string[] | undefined
                from?: string | undefined
                to?: string | undefined
                limit?: number | undefined
              }
            }
            output: BadRequestProblemResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                clientId?: string | undefined
                ingestedAtFrom?: string | undefined
                ingestedAtTo?: string | undefined
                id?: string | undefined
                subject?: string | undefined
                customerId?: string[] | undefined
                from?: string | undefined
                to?: string | undefined
                limit?: number | undefined
              }
            }
            output: UnauthorizedProblemResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                clientId?: string | undefined
                ingestedAtFrom?: string | undefined
                ingestedAtTo?: string | undefined
                id?: string | undefined
                subject?: string | undefined
                customerId?: string[] | undefined
                from?: string | undefined
                to?: string | undefined
                limit?: number | undefined
              }
            }
            output: ForbiddenProblemResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                clientId?: string | undefined
                ingestedAtFrom?: string | undefined
                ingestedAtTo?: string | undefined
                id?: string | undefined
                subject?: string | undefined
                customerId?: string[] | undefined
                from?: string | undefined
                to?: string | undefined
                limit?: number | undefined
              }
            }
            output: PreconditionFailedProblemResponse
            outputFormat: 'json'
            status: 412
          }
        | {
            input: {
              query: {
                clientId?: string | undefined
                ingestedAtFrom?: string | undefined
                ingestedAtTo?: string | undefined
                id?: string | undefined
                subject?: string | undefined
                customerId?: string[] | undefined
                from?: string | undefined
                to?: string | undefined
                limit?: number | undefined
              }
            }
            output: InternalServerErrorProblemResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              query: {
                clientId?: string | undefined
                ingestedAtFrom?: string | undefined
                ingestedAtTo?: string | undefined
                id?: string | undefined
                subject?: string | undefined
                customerId?: string[] | undefined
                from?: string | undefined
                to?: string | undefined
                limit?: number | undefined
              }
            }
            output: ServiceUnavailableProblemResponse
            outputFormat: 'json'
            status: 503
          }
        | {
            input: {
              query: {
                clientId?: string | undefined
                ingestedAtFrom?: string | undefined
                ingestedAtTo?: string | undefined
                id?: string | undefined
                subject?: string | undefined
                customerId?: string[] | undefined
                from?: string | undefined
                to?: string | undefined
                limit?: number | undefined
              }
            }
            output: UnexpectedProblemResponse
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { json: Event | Event[] | IngestEventsBody }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { json: Event | Event[] | IngestEventsBody }
            output: BadRequestProblemResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: Event | Event[] | IngestEventsBody }
            output: UnauthorizedProblemResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: Event | Event[] | IngestEventsBody }
            output: ForbiddenProblemResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: Event | Event[] | IngestEventsBody }
            output: PreconditionFailedProblemResponse
            outputFormat: 'json'
            status: 412
          }
        | {
            input: { json: Event | Event[] | IngestEventsBody }
            output: InternalServerErrorProblemResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { json: Event | Event[] | IngestEventsBody }
            output: ServiceUnavailableProblemResponse
            outputFormat: 'json'
            status: 503
          }
        | {
            input: { json: Event | Event[] | IngestEventsBody }
            output: UnexpectedProblemResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/features': {
      $get:
        | {
            input: {
              query: {
                meterSlug?: string[] | undefined
                includeArchived?: boolean | undefined
                page?: number | undefined
                pageSize?: number | undefined
                offset?: number | undefined
                limit?: number | undefined
                order?: {} | undefined
                orderBy?: FeatureOrderBy | undefined
              }
            }
            output: ListFeaturesResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                meterSlug?: string[] | undefined
                includeArchived?: boolean | undefined
                page?: number | undefined
                pageSize?: number | undefined
                offset?: number | undefined
                limit?: number | undefined
                order?: {} | undefined
                orderBy?: FeatureOrderBy | undefined
              }
            }
            output: BadRequestProblemResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                meterSlug?: string[] | undefined
                includeArchived?: boolean | undefined
                page?: number | undefined
                pageSize?: number | undefined
                offset?: number | undefined
                limit?: number | undefined
                order?: {} | undefined
                orderBy?: FeatureOrderBy | undefined
              }
            }
            output: UnauthorizedProblemResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                meterSlug?: string[] | undefined
                includeArchived?: boolean | undefined
                page?: number | undefined
                pageSize?: number | undefined
                offset?: number | undefined
                limit?: number | undefined
                order?: {} | undefined
                orderBy?: FeatureOrderBy | undefined
              }
            }
            output: ForbiddenProblemResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                meterSlug?: string[] | undefined
                includeArchived?: boolean | undefined
                page?: number | undefined
                pageSize?: number | undefined
                offset?: number | undefined
                limit?: number | undefined
                order?: {} | undefined
                orderBy?: FeatureOrderBy | undefined
              }
            }
            output: PreconditionFailedProblemResponse
            outputFormat: 'json'
            status: 412
          }
        | {
            input: {
              query: {
                meterSlug?: string[] | undefined
                includeArchived?: boolean | undefined
                page?: number | undefined
                pageSize?: number | undefined
                offset?: number | undefined
                limit?: number | undefined
                order?: {} | undefined
                orderBy?: FeatureOrderBy | undefined
              }
            }
            output: InternalServerErrorProblemResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              query: {
                meterSlug?: string[] | undefined
                includeArchived?: boolean | undefined
                page?: number | undefined
                pageSize?: number | undefined
                offset?: number | undefined
                limit?: number | undefined
                order?: {} | undefined
                orderBy?: FeatureOrderBy | undefined
              }
            }
            output: ServiceUnavailableProblemResponse
            outputFormat: 'json'
            status: 503
          }
        | {
            input: {
              query: {
                meterSlug?: string[] | undefined
                includeArchived?: boolean | undefined
                page?: number | undefined
                pageSize?: number | undefined
                offset?: number | undefined
                limit?: number | undefined
                order?: {} | undefined
                orderBy?: FeatureOrderBy | undefined
              }
            }
            output: UnexpectedProblemResponse
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { json: FeatureCreateInputs }
            output: Feature
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: FeatureCreateInputs }
            output: BadRequestProblemResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: FeatureCreateInputs }
            output: UnauthorizedProblemResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: FeatureCreateInputs }
            output: ForbiddenProblemResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: FeatureCreateInputs }
            output: PreconditionFailedProblemResponse
            outputFormat: 'json'
            status: 412
          }
        | {
            input: { json: FeatureCreateInputs }
            output: InternalServerErrorProblemResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { json: FeatureCreateInputs }
            output: ServiceUnavailableProblemResponse
            outputFormat: 'json'
            status: 503
          }
        | {
            input: { json: FeatureCreateInputs }
            output: UnexpectedProblemResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/features/:featureId': {
      $get:
        | {
            input: { param: { featureId: string } }
            output: Feature
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { featureId: string } }
            output: BadRequestProblemResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { featureId: string } }
            output: UnauthorizedProblemResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { featureId: string } }
            output: ForbiddenProblemResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { featureId: string } }
            output: NotFoundProblemResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { featureId: string } }
            output: PreconditionFailedProblemResponse
            outputFormat: 'json'
            status: 412
          }
        | {
            input: { param: { featureId: string } }
            output: InternalServerErrorProblemResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { featureId: string } }
            output: ServiceUnavailableProblemResponse
            outputFormat: 'json'
            status: 503
          }
        | {
            input: { param: { featureId: string } }
            output: UnexpectedProblemResponse
            outputFormat: 'json'
            status: 200
          }
      $delete:
        | { input: { param: { featureId: string } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { featureId: string } }
            output: BadRequestProblemResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { featureId: string } }
            output: UnauthorizedProblemResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { featureId: string } }
            output: ForbiddenProblemResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { featureId: string } }
            output: NotFoundProblemResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { featureId: string } }
            output: PreconditionFailedProblemResponse
            outputFormat: 'json'
            status: 412
          }
        | {
            input: { param: { featureId: string } }
            output: InternalServerErrorProblemResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { featureId: string } }
            output: ServiceUnavailableProblemResponse
            outputFormat: 'json'
            status: 503
          }
        | {
            input: { param: { featureId: string } }
            output: UnexpectedProblemResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/grants': {
      $get:
        | {
            input: {
              query: {
                feature?: string[] | undefined
                subject?: string[] | undefined
                includeDeleted?: boolean | undefined
                page?: number | undefined
                pageSize?: number | undefined
                offset?: number | undefined
                limit?: number | undefined
                order?: {} | undefined
                orderBy?: GrantOrderBy | undefined
              }
            }
            output: EntitlementGrant[] | GrantPaginatedResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                feature?: string[] | undefined
                subject?: string[] | undefined
                includeDeleted?: boolean | undefined
                page?: number | undefined
                pageSize?: number | undefined
                offset?: number | undefined
                limit?: number | undefined
                order?: {} | undefined
                orderBy?: GrantOrderBy | undefined
              }
            }
            output: BadRequestProblemResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                feature?: string[] | undefined
                subject?: string[] | undefined
                includeDeleted?: boolean | undefined
                page?: number | undefined
                pageSize?: number | undefined
                offset?: number | undefined
                limit?: number | undefined
                order?: {} | undefined
                orderBy?: GrantOrderBy | undefined
              }
            }
            output: UnauthorizedProblemResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                feature?: string[] | undefined
                subject?: string[] | undefined
                includeDeleted?: boolean | undefined
                page?: number | undefined
                pageSize?: number | undefined
                offset?: number | undefined
                limit?: number | undefined
                order?: {} | undefined
                orderBy?: GrantOrderBy | undefined
              }
            }
            output: ForbiddenProblemResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                feature?: string[] | undefined
                subject?: string[] | undefined
                includeDeleted?: boolean | undefined
                page?: number | undefined
                pageSize?: number | undefined
                offset?: number | undefined
                limit?: number | undefined
                order?: {} | undefined
                orderBy?: GrantOrderBy | undefined
              }
            }
            output: PreconditionFailedProblemResponse
            outputFormat: 'json'
            status: 412
          }
        | {
            input: {
              query: {
                feature?: string[] | undefined
                subject?: string[] | undefined
                includeDeleted?: boolean | undefined
                page?: number | undefined
                pageSize?: number | undefined
                offset?: number | undefined
                limit?: number | undefined
                order?: {} | undefined
                orderBy?: GrantOrderBy | undefined
              }
            }
            output: InternalServerErrorProblemResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              query: {
                feature?: string[] | undefined
                subject?: string[] | undefined
                includeDeleted?: boolean | undefined
                page?: number | undefined
                pageSize?: number | undefined
                offset?: number | undefined
                limit?: number | undefined
                order?: {} | undefined
                orderBy?: GrantOrderBy | undefined
              }
            }
            output: ServiceUnavailableProblemResponse
            outputFormat: 'json'
            status: 503
          }
        | {
            input: {
              query: {
                feature?: string[] | undefined
                subject?: string[] | undefined
                includeDeleted?: boolean | undefined
                page?: number | undefined
                pageSize?: number | undefined
                offset?: number | undefined
                limit?: number | undefined
                order?: {} | undefined
                orderBy?: GrantOrderBy | undefined
              }
            }
            output: UnexpectedProblemResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/grants/:grantId': {
      $delete:
        | {
            input: { param: { grantId: string } } & { query: { at?: string | undefined } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { grantId: string } } & { query: { at?: string | undefined } }
            output: BadRequestProblemResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { grantId: string } } & { query: { at?: string | undefined } }
            output: UnauthorizedProblemResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { grantId: string } } & { query: { at?: string | undefined } }
            output: ForbiddenProblemResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { grantId: string } } & { query: { at?: string | undefined } }
            output: NotFoundProblemResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { grantId: string } } & { query: { at?: string | undefined } }
            output: ConflictProblemResponse
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { grantId: string } } & { query: { at?: string | undefined } }
            output: PreconditionFailedProblemResponse
            outputFormat: 'json'
            status: 412
          }
        | {
            input: { param: { grantId: string } } & { query: { at?: string | undefined } }
            output: InternalServerErrorProblemResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { grantId: string } } & { query: { at?: string | undefined } }
            output: ServiceUnavailableProblemResponse
            outputFormat: 'json'
            status: 503
          }
        | {
            input: { param: { grantId: string } } & { query: { at?: string | undefined } }
            output: UnexpectedProblemResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/info/currencies': {
      $get:
        | { input: {}; output: Currency[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: BadRequestProblemResponse; outputFormat: 'json'; status: 400 }
        | { input: {}; output: UnauthorizedProblemResponse; outputFormat: 'json'; status: 401 }
        | { input: {}; output: ForbiddenProblemResponse; outputFormat: 'json'; status: 403 }
        | {
            input: {}
            output: PreconditionFailedProblemResponse
            outputFormat: 'json'
            status: 412
          }
        | {
            input: {}
            output: InternalServerErrorProblemResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {}
            output: ServiceUnavailableProblemResponse
            outputFormat: 'json'
            status: 503
          }
        | { input: {}; output: UnexpectedProblemResponse; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/api/v1/info/progress/:id': {
      $get:
        | { input: { param: { id: string } }; output: Progress; outputFormat: 'json'; status: 200 }
        | {
            input: { param: { id: string } }
            output: BadRequestProblemResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } }
            output: UnauthorizedProblemResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } }
            output: ForbiddenProblemResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } }
            output: NotFoundProblemResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } }
            output: PreconditionFailedProblemResponse
            outputFormat: 'json'
            status: 412
          }
        | {
            input: { param: { id: string } }
            output: InternalServerErrorProblemResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { id: string } }
            output: ServiceUnavailableProblemResponse
            outputFormat: 'json'
            status: 503
          }
        | {
            input: { param: { id: string } }
            output: UnexpectedProblemResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/marketplace/listings': {
      $get:
        | {
            input: { query: { page?: number | undefined; pageSize?: number | undefined } }
            output: MarketplaceListingPaginatedResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { page?: number | undefined; pageSize?: number | undefined } }
            output: BadRequestProblemResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { page?: number | undefined; pageSize?: number | undefined } }
            output: UnauthorizedProblemResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { page?: number | undefined; pageSize?: number | undefined } }
            output: ForbiddenProblemResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { page?: number | undefined; pageSize?: number | undefined } }
            output: PreconditionFailedProblemResponse
            outputFormat: 'json'
            status: 412
          }
        | {
            input: { query: { page?: number | undefined; pageSize?: number | undefined } }
            output: InternalServerErrorProblemResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { query: { page?: number | undefined; pageSize?: number | undefined } }
            output: ServiceUnavailableProblemResponse
            outputFormat: 'json'
            status: 503
          }
        | {
            input: { query: { page?: number | undefined; pageSize?: number | undefined } }
            output: UnexpectedProblemResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/marketplace/listings/:type': {
      $get:
        | {
            input: { param: { type: AppType } }
            output: MarketplaceListing
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { type: AppType } }
            output: BadRequestProblemResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { type: AppType } }
            output: UnauthorizedProblemResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { type: AppType } }
            output: ForbiddenProblemResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { type: AppType } }
            output: PreconditionFailedProblemResponse
            outputFormat: 'json'
            status: 412
          }
        | {
            input: { param: { type: AppType } }
            output: InternalServerErrorProblemResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { type: AppType } }
            output: ServiceUnavailableProblemResponse
            outputFormat: 'json'
            status: 503
          }
        | {
            input: { param: { type: AppType } }
            output: UnexpectedProblemResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/marketplace/listings/:type/install': {
      $post:
        | {
            input: { param: { type: AppType } } & { json: MarketplaceInstallRequestPayload }
            output: MarketplaceInstallResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { type: AppType } } & { json: MarketplaceInstallRequestPayload }
            output: BadRequestProblemResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { type: AppType } } & { json: MarketplaceInstallRequestPayload }
            output: UnauthorizedProblemResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { type: AppType } } & { json: MarketplaceInstallRequestPayload }
            output: ForbiddenProblemResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { type: AppType } } & { json: MarketplaceInstallRequestPayload }
            output: PreconditionFailedProblemResponse
            outputFormat: 'json'
            status: 412
          }
        | {
            input: { param: { type: AppType } } & { json: MarketplaceInstallRequestPayload }
            output: InternalServerErrorProblemResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { type: AppType } } & { json: MarketplaceInstallRequestPayload }
            output: ServiceUnavailableProblemResponse
            outputFormat: 'json'
            status: 503
          }
        | {
            input: { param: { type: AppType } } & { json: MarketplaceInstallRequestPayload }
            output: UnexpectedProblemResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/marketplace/listings/:type/install/apikey': {
      $post:
        | {
            input: { param: { type: AppType } } & {
              json: {
                name?: string | undefined
                createBillingProfile?: boolean | undefined
                apiKey: string
              }
            }
            output: MarketplaceInstallResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { type: AppType } } & {
              json: {
                name?: string | undefined
                createBillingProfile?: boolean | undefined
                apiKey: string
              }
            }
            output: BadRequestProblemResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { type: AppType } } & {
              json: {
                name?: string | undefined
                createBillingProfile?: boolean | undefined
                apiKey: string
              }
            }
            output: UnauthorizedProblemResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { type: AppType } } & {
              json: {
                name?: string | undefined
                createBillingProfile?: boolean | undefined
                apiKey: string
              }
            }
            output: ForbiddenProblemResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { type: AppType } } & {
              json: {
                name?: string | undefined
                createBillingProfile?: boolean | undefined
                apiKey: string
              }
            }
            output: PreconditionFailedProblemResponse
            outputFormat: 'json'
            status: 412
          }
        | {
            input: { param: { type: AppType } } & {
              json: {
                name?: string | undefined
                createBillingProfile?: boolean | undefined
                apiKey: string
              }
            }
            output: InternalServerErrorProblemResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { type: AppType } } & {
              json: {
                name?: string | undefined
                createBillingProfile?: boolean | undefined
                apiKey: string
              }
            }
            output: ServiceUnavailableProblemResponse
            outputFormat: 'json'
            status: 503
          }
        | {
            input: { param: { type: AppType } } & {
              json: {
                name?: string | undefined
                createBillingProfile?: boolean | undefined
                apiKey: string
              }
            }
            output: UnexpectedProblemResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/marketplace/listings/:type/install/oauth2': {
      $get:
        | {
            input: { param: { type: AppType } }
            output: ClientAppStartResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { type: AppType } }
            output: BadRequestProblemResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { type: AppType } }
            output: UnauthorizedProblemResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { type: AppType } }
            output: ForbiddenProblemResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { type: AppType } }
            output: PreconditionFailedProblemResponse
            outputFormat: 'json'
            status: 412
          }
        | {
            input: { param: { type: AppType } }
            output: InternalServerErrorProblemResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { type: AppType } }
            output: ServiceUnavailableProblemResponse
            outputFormat: 'json'
            status: 503
          }
        | {
            input: { param: { type: AppType } }
            output: UnexpectedProblemResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/marketplace/listings/:type/install/oauth2/authorize': {
      $get:
        | {
            input: { param: { type: AppType } } & {
              query: {
                state?: string | undefined
                code?: string | undefined
                error?: OAuth2AuthorizationCodeGrantErrorType | undefined
                error_description?: string | undefined
                error_uri?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 303
          }
        | {
            input: { param: { type: AppType } } & {
              query: {
                state?: string | undefined
                code?: string | undefined
                error?: OAuth2AuthorizationCodeGrantErrorType | undefined
                error_description?: string | undefined
                error_uri?: string | undefined
              }
            }
            output: BadRequestProblemResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { type: AppType } } & {
              query: {
                state?: string | undefined
                code?: string | undefined
                error?: OAuth2AuthorizationCodeGrantErrorType | undefined
                error_description?: string | undefined
                error_uri?: string | undefined
              }
            }
            output: UnauthorizedProblemResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { type: AppType } } & {
              query: {
                state?: string | undefined
                code?: string | undefined
                error?: OAuth2AuthorizationCodeGrantErrorType | undefined
                error_description?: string | undefined
                error_uri?: string | undefined
              }
            }
            output: ForbiddenProblemResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { type: AppType } } & {
              query: {
                state?: string | undefined
                code?: string | undefined
                error?: OAuth2AuthorizationCodeGrantErrorType | undefined
                error_description?: string | undefined
                error_uri?: string | undefined
              }
            }
            output: PreconditionFailedProblemResponse
            outputFormat: 'json'
            status: 412
          }
        | {
            input: { param: { type: AppType } } & {
              query: {
                state?: string | undefined
                code?: string | undefined
                error?: OAuth2AuthorizationCodeGrantErrorType | undefined
                error_description?: string | undefined
                error_uri?: string | undefined
              }
            }
            output: InternalServerErrorProblemResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { type: AppType } } & {
              query: {
                state?: string | undefined
                code?: string | undefined
                error?: OAuth2AuthorizationCodeGrantErrorType | undefined
                error_description?: string | undefined
                error_uri?: string | undefined
              }
            }
            output: ServiceUnavailableProblemResponse
            outputFormat: 'json'
            status: 503
          }
        | {
            input: { param: { type: AppType } } & {
              query: {
                state?: string | undefined
                code?: string | undefined
                error?: OAuth2AuthorizationCodeGrantErrorType | undefined
                error_description?: string | undefined
                error_uri?: string | undefined
              }
            }
            output: UnexpectedProblemResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/meters': {
      $get:
        | {
            input: {
              query: {
                page?: number | undefined
                pageSize?: number | undefined
                order?: {} | undefined
                orderBy?: MeterOrderBy | undefined
                includeDeleted?: boolean | undefined
              }
            }
            output: Meter[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                pageSize?: number | undefined
                order?: {} | undefined
                orderBy?: MeterOrderBy | undefined
                includeDeleted?: boolean | undefined
              }
            }
            output: BadRequestProblemResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                page?: number | undefined
                pageSize?: number | undefined
                order?: {} | undefined
                orderBy?: MeterOrderBy | undefined
                includeDeleted?: boolean | undefined
              }
            }
            output: UnauthorizedProblemResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                page?: number | undefined
                pageSize?: number | undefined
                order?: {} | undefined
                orderBy?: MeterOrderBy | undefined
                includeDeleted?: boolean | undefined
              }
            }
            output: ForbiddenProblemResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                page?: number | undefined
                pageSize?: number | undefined
                order?: {} | undefined
                orderBy?: MeterOrderBy | undefined
                includeDeleted?: boolean | undefined
              }
            }
            output: PreconditionFailedProblemResponse
            outputFormat: 'json'
            status: 412
          }
        | {
            input: {
              query: {
                page?: number | undefined
                pageSize?: number | undefined
                order?: {} | undefined
                orderBy?: MeterOrderBy | undefined
                includeDeleted?: boolean | undefined
              }
            }
            output: InternalServerErrorProblemResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              query: {
                page?: number | undefined
                pageSize?: number | undefined
                order?: {} | undefined
                orderBy?: MeterOrderBy | undefined
                includeDeleted?: boolean | undefined
              }
            }
            output: ServiceUnavailableProblemResponse
            outputFormat: 'json'
            status: 503
          }
        | {
            input: {
              query: {
                page?: number | undefined
                pageSize?: number | undefined
                order?: {} | undefined
                orderBy?: MeterOrderBy | undefined
                includeDeleted?: boolean | undefined
              }
            }
            output: UnexpectedProblemResponse
            outputFormat: 'json'
            status: 200
          }
      $post:
        | { input: { json: MeterCreate }; output: Meter; outputFormat: 'json'; status: 201 }
        | {
            input: { json: MeterCreate }
            output: BadRequestProblemResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: MeterCreate }
            output: UnauthorizedProblemResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: MeterCreate }
            output: ForbiddenProblemResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: MeterCreate }
            output: PreconditionFailedProblemResponse
            outputFormat: 'json'
            status: 412
          }
        | {
            input: { json: MeterCreate }
            output: InternalServerErrorProblemResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { json: MeterCreate }
            output: ServiceUnavailableProblemResponse
            outputFormat: 'json'
            status: 503
          }
        | {
            input: { json: MeterCreate }
            output: UnexpectedProblemResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/meters/:meterIdOrSlug': {
      $get:
        | {
            input: { param: { meterIdOrSlug: string } }
            output: Meter
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { meterIdOrSlug: string } }
            output: BadRequestProblemResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { meterIdOrSlug: string } }
            output: UnauthorizedProblemResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { meterIdOrSlug: string } }
            output: ForbiddenProblemResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { meterIdOrSlug: string } }
            output: NotFoundProblemResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { meterIdOrSlug: string } }
            output: PreconditionFailedProblemResponse
            outputFormat: 'json'
            status: 412
          }
        | {
            input: { param: { meterIdOrSlug: string } }
            output: InternalServerErrorProblemResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { meterIdOrSlug: string } }
            output: ServiceUnavailableProblemResponse
            outputFormat: 'json'
            status: 503
          }
        | {
            input: { param: { meterIdOrSlug: string } }
            output: UnexpectedProblemResponse
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { meterIdOrSlug: string } } & { json: MeterUpdate }
            output: Meter
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { meterIdOrSlug: string } } & { json: MeterUpdate }
            output: BadRequestProblemResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { meterIdOrSlug: string } } & { json: MeterUpdate }
            output: UnauthorizedProblemResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { meterIdOrSlug: string } } & { json: MeterUpdate }
            output: ForbiddenProblemResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { meterIdOrSlug: string } } & { json: MeterUpdate }
            output: PreconditionFailedProblemResponse
            outputFormat: 'json'
            status: 412
          }
        | {
            input: { param: { meterIdOrSlug: string } } & { json: MeterUpdate }
            output: InternalServerErrorProblemResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { meterIdOrSlug: string } } & { json: MeterUpdate }
            output: ServiceUnavailableProblemResponse
            outputFormat: 'json'
            status: 503
          }
        | {
            input: { param: { meterIdOrSlug: string } } & { json: MeterUpdate }
            output: UnexpectedProblemResponse
            outputFormat: 'json'
            status: 200
          }
      $delete:
        | {
            input: { param: { meterIdOrSlug: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { meterIdOrSlug: string } }
            output: BadRequestProblemResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { meterIdOrSlug: string } }
            output: UnauthorizedProblemResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { meterIdOrSlug: string } }
            output: ForbiddenProblemResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { meterIdOrSlug: string } }
            output: PreconditionFailedProblemResponse
            outputFormat: 'json'
            status: 412
          }
        | {
            input: { param: { meterIdOrSlug: string } }
            output: InternalServerErrorProblemResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { meterIdOrSlug: string } }
            output: ServiceUnavailableProblemResponse
            outputFormat: 'json'
            status: 503
          }
        | {
            input: { param: { meterIdOrSlug: string } }
            output: UnexpectedProblemResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/meters/:meterIdOrSlug/group-by/:groupByKey/values': {
      $get:
        | {
            input: { param: { meterIdOrSlug: string; groupByKey: string } } & {
              query: { from?: string | undefined; to?: string | undefined }
            }
            output: string[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { meterIdOrSlug: string; groupByKey: string } } & {
              query: { from?: string | undefined; to?: string | undefined }
            }
            output: BadRequestProblemResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { meterIdOrSlug: string; groupByKey: string } } & {
              query: { from?: string | undefined; to?: string | undefined }
            }
            output: UnauthorizedProblemResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { meterIdOrSlug: string; groupByKey: string } } & {
              query: { from?: string | undefined; to?: string | undefined }
            }
            output: ForbiddenProblemResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { meterIdOrSlug: string; groupByKey: string } } & {
              query: { from?: string | undefined; to?: string | undefined }
            }
            output: PreconditionFailedProblemResponse
            outputFormat: 'json'
            status: 412
          }
        | {
            input: { param: { meterIdOrSlug: string; groupByKey: string } } & {
              query: { from?: string | undefined; to?: string | undefined }
            }
            output: InternalServerErrorProblemResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { meterIdOrSlug: string; groupByKey: string } } & {
              query: { from?: string | undefined; to?: string | undefined }
            }
            output: ServiceUnavailableProblemResponse
            outputFormat: 'json'
            status: 503
          }
        | {
            input: { param: { meterIdOrSlug: string; groupByKey: string } } & {
              query: { from?: string | undefined; to?: string | undefined }
            }
            output: UnexpectedProblemResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/meters/:meterIdOrSlug/query': {
      $get:
        | {
            input: { param: { meterIdOrSlug: string } } & {
              query: {
                clientId?: string | undefined
                from?: string | undefined
                to?: string | undefined
                windowSize?: WindowSize | undefined
                windowTimeZone?: string | undefined
                subject?: string[] | undefined
                filterCustomerId?: string[] | undefined
                filterGroupBy?: { [x: string]: string } | undefined
                advancedMeterGroupByFilters?: { [x: string]: FilterString } | undefined
                groupBy?: string[] | undefined
              }
            }
            output: MeterQueryResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { meterIdOrSlug: string } } & {
              query: {
                clientId?: string | undefined
                from?: string | undefined
                to?: string | undefined
                windowSize?: WindowSize | undefined
                windowTimeZone?: string | undefined
                subject?: string[] | undefined
                filterCustomerId?: string[] | undefined
                filterGroupBy?: { [x: string]: string } | undefined
                advancedMeterGroupByFilters?: { [x: string]: FilterString } | undefined
                groupBy?: string[] | undefined
              }
            }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { meterIdOrSlug: string } } & {
              query: {
                clientId?: string | undefined
                from?: string | undefined
                to?: string | undefined
                windowSize?: WindowSize | undefined
                windowTimeZone?: string | undefined
                subject?: string[] | undefined
                filterCustomerId?: string[] | undefined
                filterGroupBy?: { [x: string]: string } | undefined
                advancedMeterGroupByFilters?: { [x: string]: FilterString } | undefined
                groupBy?: string[] | undefined
              }
            }
            output: BadRequestProblemResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { meterIdOrSlug: string } } & {
              query: {
                clientId?: string | undefined
                from?: string | undefined
                to?: string | undefined
                windowSize?: WindowSize | undefined
                windowTimeZone?: string | undefined
                subject?: string[] | undefined
                filterCustomerId?: string[] | undefined
                filterGroupBy?: { [x: string]: string } | undefined
                advancedMeterGroupByFilters?: { [x: string]: FilterString } | undefined
                groupBy?: string[] | undefined
              }
            }
            output: UnauthorizedProblemResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { meterIdOrSlug: string } } & {
              query: {
                clientId?: string | undefined
                from?: string | undefined
                to?: string | undefined
                windowSize?: WindowSize | undefined
                windowTimeZone?: string | undefined
                subject?: string[] | undefined
                filterCustomerId?: string[] | undefined
                filterGroupBy?: { [x: string]: string } | undefined
                advancedMeterGroupByFilters?: { [x: string]: FilterString } | undefined
                groupBy?: string[] | undefined
              }
            }
            output: ForbiddenProblemResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { meterIdOrSlug: string } } & {
              query: {
                clientId?: string | undefined
                from?: string | undefined
                to?: string | undefined
                windowSize?: WindowSize | undefined
                windowTimeZone?: string | undefined
                subject?: string[] | undefined
                filterCustomerId?: string[] | undefined
                filterGroupBy?: { [x: string]: string } | undefined
                advancedMeterGroupByFilters?: { [x: string]: FilterString } | undefined
                groupBy?: string[] | undefined
              }
            }
            output: NotFoundProblemResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { meterIdOrSlug: string } } & {
              query: {
                clientId?: string | undefined
                from?: string | undefined
                to?: string | undefined
                windowSize?: WindowSize | undefined
                windowTimeZone?: string | undefined
                subject?: string[] | undefined
                filterCustomerId?: string[] | undefined
                filterGroupBy?: { [x: string]: string } | undefined
                advancedMeterGroupByFilters?: { [x: string]: FilterString } | undefined
                groupBy?: string[] | undefined
              }
            }
            output: PreconditionFailedProblemResponse
            outputFormat: 'json'
            status: 412
          }
        | {
            input: { param: { meterIdOrSlug: string } } & {
              query: {
                clientId?: string | undefined
                from?: string | undefined
                to?: string | undefined
                windowSize?: WindowSize | undefined
                windowTimeZone?: string | undefined
                subject?: string[] | undefined
                filterCustomerId?: string[] | undefined
                filterGroupBy?: { [x: string]: string } | undefined
                advancedMeterGroupByFilters?: { [x: string]: FilterString } | undefined
                groupBy?: string[] | undefined
              }
            }
            output: InternalServerErrorProblemResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { meterIdOrSlug: string } } & {
              query: {
                clientId?: string | undefined
                from?: string | undefined
                to?: string | undefined
                windowSize?: WindowSize | undefined
                windowTimeZone?: string | undefined
                subject?: string[] | undefined
                filterCustomerId?: string[] | undefined
                filterGroupBy?: { [x: string]: string } | undefined
                advancedMeterGroupByFilters?: { [x: string]: FilterString } | undefined
                groupBy?: string[] | undefined
              }
            }
            output: ServiceUnavailableProblemResponse
            outputFormat: 'json'
            status: 503
          }
        | {
            input: { param: { meterIdOrSlug: string } } & {
              query: {
                clientId?: string | undefined
                from?: string | undefined
                to?: string | undefined
                windowSize?: WindowSize | undefined
                windowTimeZone?: string | undefined
                subject?: string[] | undefined
                filterCustomerId?: string[] | undefined
                filterGroupBy?: { [x: string]: string } | undefined
                advancedMeterGroupByFilters?: { [x: string]: FilterString } | undefined
                groupBy?: string[] | undefined
              }
            }
            output: UnexpectedProblemResponse
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { param: { meterIdOrSlug: string } } & { json: MeterQueryRequest }
            output: MeterQueryResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { meterIdOrSlug: string } } & { json: MeterQueryRequest }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { meterIdOrSlug: string } } & { json: MeterQueryRequest }
            output: BadRequestProblemResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { meterIdOrSlug: string } } & { json: MeterQueryRequest }
            output: UnauthorizedProblemResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { meterIdOrSlug: string } } & { json: MeterQueryRequest }
            output: ForbiddenProblemResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { meterIdOrSlug: string } } & { json: MeterQueryRequest }
            output: NotFoundProblemResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { meterIdOrSlug: string } } & { json: MeterQueryRequest }
            output: PreconditionFailedProblemResponse
            outputFormat: 'json'
            status: 412
          }
        | {
            input: { param: { meterIdOrSlug: string } } & { json: MeterQueryRequest }
            output: InternalServerErrorProblemResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { meterIdOrSlug: string } } & { json: MeterQueryRequest }
            output: ServiceUnavailableProblemResponse
            outputFormat: 'json'
            status: 503
          }
        | {
            input: { param: { meterIdOrSlug: string } } & { json: MeterQueryRequest }
            output: UnexpectedProblemResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/meters/:meterIdOrSlug/subjects': {
      $get:
        | {
            input: { param: { meterIdOrSlug: string } } & {
              query: { from?: string | undefined; to?: string | undefined }
            }
            output: string[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { meterIdOrSlug: string } } & {
              query: { from?: string | undefined; to?: string | undefined }
            }
            output: BadRequestProblemResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { meterIdOrSlug: string } } & {
              query: { from?: string | undefined; to?: string | undefined }
            }
            output: UnauthorizedProblemResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { meterIdOrSlug: string } } & {
              query: { from?: string | undefined; to?: string | undefined }
            }
            output: ForbiddenProblemResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { meterIdOrSlug: string } } & {
              query: { from?: string | undefined; to?: string | undefined }
            }
            output: PreconditionFailedProblemResponse
            outputFormat: 'json'
            status: 412
          }
        | {
            input: { param: { meterIdOrSlug: string } } & {
              query: { from?: string | undefined; to?: string | undefined }
            }
            output: InternalServerErrorProblemResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { meterIdOrSlug: string } } & {
              query: { from?: string | undefined; to?: string | undefined }
            }
            output: ServiceUnavailableProblemResponse
            outputFormat: 'json'
            status: 503
          }
        | {
            input: { param: { meterIdOrSlug: string } } & {
              query: { from?: string | undefined; to?: string | undefined }
            }
            output: UnexpectedProblemResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/notification/channels': {
      $get:
        | {
            input: {
              query: {
                includeDeleted?: boolean | undefined
                includeDisabled?: boolean | undefined
                page?: number | undefined
                pageSize?: number | undefined
                order?: {} | undefined
                orderBy?: NotificationChannelOrderBy | undefined
              }
            }
            output: NotificationChannelPaginatedResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                includeDeleted?: boolean | undefined
                includeDisabled?: boolean | undefined
                page?: number | undefined
                pageSize?: number | undefined
                order?: {} | undefined
                orderBy?: NotificationChannelOrderBy | undefined
              }
            }
            output: BadRequestProblemResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                includeDeleted?: boolean | undefined
                includeDisabled?: boolean | undefined
                page?: number | undefined
                pageSize?: number | undefined
                order?: {} | undefined
                orderBy?: NotificationChannelOrderBy | undefined
              }
            }
            output: UnauthorizedProblemResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                includeDeleted?: boolean | undefined
                includeDisabled?: boolean | undefined
                page?: number | undefined
                pageSize?: number | undefined
                order?: {} | undefined
                orderBy?: NotificationChannelOrderBy | undefined
              }
            }
            output: ForbiddenProblemResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                includeDeleted?: boolean | undefined
                includeDisabled?: boolean | undefined
                page?: number | undefined
                pageSize?: number | undefined
                order?: {} | undefined
                orderBy?: NotificationChannelOrderBy | undefined
              }
            }
            output: PreconditionFailedProblemResponse
            outputFormat: 'json'
            status: 412
          }
        | {
            input: {
              query: {
                includeDeleted?: boolean | undefined
                includeDisabled?: boolean | undefined
                page?: number | undefined
                pageSize?: number | undefined
                order?: {} | undefined
                orderBy?: NotificationChannelOrderBy | undefined
              }
            }
            output: InternalServerErrorProblemResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              query: {
                includeDeleted?: boolean | undefined
                includeDisabled?: boolean | undefined
                page?: number | undefined
                pageSize?: number | undefined
                order?: {} | undefined
                orderBy?: NotificationChannelOrderBy | undefined
              }
            }
            output: ServiceUnavailableProblemResponse
            outputFormat: 'json'
            status: 503
          }
        | {
            input: {
              query: {
                includeDeleted?: boolean | undefined
                includeDisabled?: boolean | undefined
                page?: number | undefined
                pageSize?: number | undefined
                order?: {} | undefined
                orderBy?: NotificationChannelOrderBy | undefined
              }
            }
            output: UnexpectedProblemResponse
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { json: NotificationChannelCreateRequest }
            output: NotificationChannel
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: NotificationChannelCreateRequest }
            output: BadRequestProblemResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: NotificationChannelCreateRequest }
            output: UnauthorizedProblemResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: NotificationChannelCreateRequest }
            output: ForbiddenProblemResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: NotificationChannelCreateRequest }
            output: PreconditionFailedProblemResponse
            outputFormat: 'json'
            status: 412
          }
        | {
            input: { json: NotificationChannelCreateRequest }
            output: InternalServerErrorProblemResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { json: NotificationChannelCreateRequest }
            output: ServiceUnavailableProblemResponse
            outputFormat: 'json'
            status: 503
          }
        | {
            input: { json: NotificationChannelCreateRequest }
            output: UnexpectedProblemResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/notification/channels/:channelId': {
      $put:
        | {
            input: { param: { channelId: string } } & { json: NotificationChannelCreateRequest }
            output: NotificationChannel
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { channelId: string } } & { json: NotificationChannelCreateRequest }
            output: BadRequestProblemResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { channelId: string } } & { json: NotificationChannelCreateRequest }
            output: UnauthorizedProblemResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { channelId: string } } & { json: NotificationChannelCreateRequest }
            output: ForbiddenProblemResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { channelId: string } } & { json: NotificationChannelCreateRequest }
            output: NotFoundProblemResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { channelId: string } } & { json: NotificationChannelCreateRequest }
            output: PreconditionFailedProblemResponse
            outputFormat: 'json'
            status: 412
          }
        | {
            input: { param: { channelId: string } } & { json: NotificationChannelCreateRequest }
            output: InternalServerErrorProblemResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { channelId: string } } & { json: NotificationChannelCreateRequest }
            output: ServiceUnavailableProblemResponse
            outputFormat: 'json'
            status: 503
          }
        | {
            input: { param: { channelId: string } } & { json: NotificationChannelCreateRequest }
            output: UnexpectedProblemResponse
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { channelId: string } }
            output: NotificationChannel
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { channelId: string } }
            output: BadRequestProblemResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { channelId: string } }
            output: UnauthorizedProblemResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { channelId: string } }
            output: ForbiddenProblemResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { channelId: string } }
            output: NotFoundProblemResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { channelId: string } }
            output: PreconditionFailedProblemResponse
            outputFormat: 'json'
            status: 412
          }
        | {
            input: { param: { channelId: string } }
            output: InternalServerErrorProblemResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { channelId: string } }
            output: ServiceUnavailableProblemResponse
            outputFormat: 'json'
            status: 503
          }
        | {
            input: { param: { channelId: string } }
            output: UnexpectedProblemResponse
            outputFormat: 'json'
            status: 200
          }
      $delete:
        | { input: { param: { channelId: string } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { channelId: string } }
            output: BadRequestProblemResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { channelId: string } }
            output: UnauthorizedProblemResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { channelId: string } }
            output: ForbiddenProblemResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { channelId: string } }
            output: NotFoundProblemResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { channelId: string } }
            output: PreconditionFailedProblemResponse
            outputFormat: 'json'
            status: 412
          }
        | {
            input: { param: { channelId: string } }
            output: InternalServerErrorProblemResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { channelId: string } }
            output: ServiceUnavailableProblemResponse
            outputFormat: 'json'
            status: 503
          }
        | {
            input: { param: { channelId: string } }
            output: UnexpectedProblemResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/notification/events': {
      $get:
        | {
            input: {
              query: {
                from?: string | undefined
                to?: string | undefined
                feature?: string[] | undefined
                subject?: string[] | undefined
                rule?: string[] | undefined
                channel?: string[] | undefined
                page?: number | undefined
                pageSize?: number | undefined
                order?: {} | undefined
                orderBy?: NotificationEventOrderBy | undefined
              }
            }
            output: NotificationEventPaginatedResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                from?: string | undefined
                to?: string | undefined
                feature?: string[] | undefined
                subject?: string[] | undefined
                rule?: string[] | undefined
                channel?: string[] | undefined
                page?: number | undefined
                pageSize?: number | undefined
                order?: {} | undefined
                orderBy?: NotificationEventOrderBy | undefined
              }
            }
            output: BadRequestProblemResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                from?: string | undefined
                to?: string | undefined
                feature?: string[] | undefined
                subject?: string[] | undefined
                rule?: string[] | undefined
                channel?: string[] | undefined
                page?: number | undefined
                pageSize?: number | undefined
                order?: {} | undefined
                orderBy?: NotificationEventOrderBy | undefined
              }
            }
            output: UnauthorizedProblemResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                from?: string | undefined
                to?: string | undefined
                feature?: string[] | undefined
                subject?: string[] | undefined
                rule?: string[] | undefined
                channel?: string[] | undefined
                page?: number | undefined
                pageSize?: number | undefined
                order?: {} | undefined
                orderBy?: NotificationEventOrderBy | undefined
              }
            }
            output: ForbiddenProblemResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                from?: string | undefined
                to?: string | undefined
                feature?: string[] | undefined
                subject?: string[] | undefined
                rule?: string[] | undefined
                channel?: string[] | undefined
                page?: number | undefined
                pageSize?: number | undefined
                order?: {} | undefined
                orderBy?: NotificationEventOrderBy | undefined
              }
            }
            output: PreconditionFailedProblemResponse
            outputFormat: 'json'
            status: 412
          }
        | {
            input: {
              query: {
                from?: string | undefined
                to?: string | undefined
                feature?: string[] | undefined
                subject?: string[] | undefined
                rule?: string[] | undefined
                channel?: string[] | undefined
                page?: number | undefined
                pageSize?: number | undefined
                order?: {} | undefined
                orderBy?: NotificationEventOrderBy | undefined
              }
            }
            output: InternalServerErrorProblemResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              query: {
                from?: string | undefined
                to?: string | undefined
                feature?: string[] | undefined
                subject?: string[] | undefined
                rule?: string[] | undefined
                channel?: string[] | undefined
                page?: number | undefined
                pageSize?: number | undefined
                order?: {} | undefined
                orderBy?: NotificationEventOrderBy | undefined
              }
            }
            output: ServiceUnavailableProblemResponse
            outputFormat: 'json'
            status: 503
          }
        | {
            input: {
              query: {
                from?: string | undefined
                to?: string | undefined
                feature?: string[] | undefined
                subject?: string[] | undefined
                rule?: string[] | undefined
                channel?: string[] | undefined
                page?: number | undefined
                pageSize?: number | undefined
                order?: {} | undefined
                orderBy?: NotificationEventOrderBy | undefined
              }
            }
            output: UnexpectedProblemResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/notification/events/:eventId': {
      $get:
        | {
            input: { param: { eventId: string } }
            output: NotificationEvent
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { eventId: string } }
            output: BadRequestProblemResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { eventId: string } }
            output: UnauthorizedProblemResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { eventId: string } }
            output: ForbiddenProblemResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { eventId: string } }
            output: NotFoundProblemResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { eventId: string } }
            output: PreconditionFailedProblemResponse
            outputFormat: 'json'
            status: 412
          }
        | {
            input: { param: { eventId: string } }
            output: InternalServerErrorProblemResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { eventId: string } }
            output: ServiceUnavailableProblemResponse
            outputFormat: 'json'
            status: 503
          }
        | {
            input: { param: { eventId: string } }
            output: UnexpectedProblemResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/notification/events/:eventId/resend': {
      $post:
        | {
            input: { param: { eventId: string } } & { json: NotificationEventResendRequest }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { param: { eventId: string } } & { json: NotificationEventResendRequest }
            output: BadRequestProblemResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { eventId: string } } & { json: NotificationEventResendRequest }
            output: UnauthorizedProblemResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { eventId: string } } & { json: NotificationEventResendRequest }
            output: ForbiddenProblemResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { eventId: string } } & { json: NotificationEventResendRequest }
            output: NotFoundProblemResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { eventId: string } } & { json: NotificationEventResendRequest }
            output: PreconditionFailedProblemResponse
            outputFormat: 'json'
            status: 412
          }
        | {
            input: { param: { eventId: string } } & { json: NotificationEventResendRequest }
            output: InternalServerErrorProblemResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { eventId: string } } & { json: NotificationEventResendRequest }
            output: ServiceUnavailableProblemResponse
            outputFormat: 'json'
            status: 503
          }
        | {
            input: { param: { eventId: string } } & { json: NotificationEventResendRequest }
            output: UnexpectedProblemResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/notification/rules': {
      $get:
        | {
            input: {
              query: {
                includeDeleted?: boolean | undefined
                includeDisabled?: boolean | undefined
                feature?: string[] | undefined
                channel?: string[] | undefined
                page?: number | undefined
                pageSize?: number | undefined
                order?: {} | undefined
                orderBy?: NotificationRuleOrderBy | undefined
              }
            }
            output: NotificationRulePaginatedResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                includeDeleted?: boolean | undefined
                includeDisabled?: boolean | undefined
                feature?: string[] | undefined
                channel?: string[] | undefined
                page?: number | undefined
                pageSize?: number | undefined
                order?: {} | undefined
                orderBy?: NotificationRuleOrderBy | undefined
              }
            }
            output: BadRequestProblemResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                includeDeleted?: boolean | undefined
                includeDisabled?: boolean | undefined
                feature?: string[] | undefined
                channel?: string[] | undefined
                page?: number | undefined
                pageSize?: number | undefined
                order?: {} | undefined
                orderBy?: NotificationRuleOrderBy | undefined
              }
            }
            output: UnauthorizedProblemResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                includeDeleted?: boolean | undefined
                includeDisabled?: boolean | undefined
                feature?: string[] | undefined
                channel?: string[] | undefined
                page?: number | undefined
                pageSize?: number | undefined
                order?: {} | undefined
                orderBy?: NotificationRuleOrderBy | undefined
              }
            }
            output: ForbiddenProblemResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                includeDeleted?: boolean | undefined
                includeDisabled?: boolean | undefined
                feature?: string[] | undefined
                channel?: string[] | undefined
                page?: number | undefined
                pageSize?: number | undefined
                order?: {} | undefined
                orderBy?: NotificationRuleOrderBy | undefined
              }
            }
            output: PreconditionFailedProblemResponse
            outputFormat: 'json'
            status: 412
          }
        | {
            input: {
              query: {
                includeDeleted?: boolean | undefined
                includeDisabled?: boolean | undefined
                feature?: string[] | undefined
                channel?: string[] | undefined
                page?: number | undefined
                pageSize?: number | undefined
                order?: {} | undefined
                orderBy?: NotificationRuleOrderBy | undefined
              }
            }
            output: InternalServerErrorProblemResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              query: {
                includeDeleted?: boolean | undefined
                includeDisabled?: boolean | undefined
                feature?: string[] | undefined
                channel?: string[] | undefined
                page?: number | undefined
                pageSize?: number | undefined
                order?: {} | undefined
                orderBy?: NotificationRuleOrderBy | undefined
              }
            }
            output: ServiceUnavailableProblemResponse
            outputFormat: 'json'
            status: 503
          }
        | {
            input: {
              query: {
                includeDeleted?: boolean | undefined
                includeDisabled?: boolean | undefined
                feature?: string[] | undefined
                channel?: string[] | undefined
                page?: number | undefined
                pageSize?: number | undefined
                order?: {} | undefined
                orderBy?: NotificationRuleOrderBy | undefined
              }
            }
            output: UnexpectedProblemResponse
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { json: NotificationRuleCreateRequest }
            output: NotificationRule
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: NotificationRuleCreateRequest }
            output: BadRequestProblemResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: NotificationRuleCreateRequest }
            output: UnauthorizedProblemResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: NotificationRuleCreateRequest }
            output: ForbiddenProblemResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: NotificationRuleCreateRequest }
            output: PreconditionFailedProblemResponse
            outputFormat: 'json'
            status: 412
          }
        | {
            input: { json: NotificationRuleCreateRequest }
            output: InternalServerErrorProblemResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { json: NotificationRuleCreateRequest }
            output: ServiceUnavailableProblemResponse
            outputFormat: 'json'
            status: 503
          }
        | {
            input: { json: NotificationRuleCreateRequest }
            output: UnexpectedProblemResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/notification/rules/:ruleId': {
      $put:
        | {
            input: { param: { ruleId: string } } & { json: NotificationRuleCreateRequest }
            output: NotificationRule
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ruleId: string } } & { json: NotificationRuleCreateRequest }
            output: BadRequestProblemResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { ruleId: string } } & { json: NotificationRuleCreateRequest }
            output: UnauthorizedProblemResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { ruleId: string } } & { json: NotificationRuleCreateRequest }
            output: ForbiddenProblemResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { ruleId: string } } & { json: NotificationRuleCreateRequest }
            output: NotFoundProblemResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { ruleId: string } } & { json: NotificationRuleCreateRequest }
            output: PreconditionFailedProblemResponse
            outputFormat: 'json'
            status: 412
          }
        | {
            input: { param: { ruleId: string } } & { json: NotificationRuleCreateRequest }
            output: InternalServerErrorProblemResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { ruleId: string } } & { json: NotificationRuleCreateRequest }
            output: ServiceUnavailableProblemResponse
            outputFormat: 'json'
            status: 503
          }
        | {
            input: { param: { ruleId: string } } & { json: NotificationRuleCreateRequest }
            output: UnexpectedProblemResponse
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { ruleId: string } }
            output: NotificationRule
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ruleId: string } }
            output: BadRequestProblemResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { ruleId: string } }
            output: UnauthorizedProblemResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { ruleId: string } }
            output: ForbiddenProblemResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { ruleId: string } }
            output: NotFoundProblemResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { ruleId: string } }
            output: PreconditionFailedProblemResponse
            outputFormat: 'json'
            status: 412
          }
        | {
            input: { param: { ruleId: string } }
            output: InternalServerErrorProblemResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { ruleId: string } }
            output: ServiceUnavailableProblemResponse
            outputFormat: 'json'
            status: 503
          }
        | {
            input: { param: { ruleId: string } }
            output: UnexpectedProblemResponse
            outputFormat: 'json'
            status: 200
          }
      $delete:
        | { input: { param: { ruleId: string } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { ruleId: string } }
            output: BadRequestProblemResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { ruleId: string } }
            output: UnauthorizedProblemResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { ruleId: string } }
            output: ForbiddenProblemResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { ruleId: string } }
            output: NotFoundProblemResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { ruleId: string } }
            output: PreconditionFailedProblemResponse
            outputFormat: 'json'
            status: 412
          }
        | {
            input: { param: { ruleId: string } }
            output: InternalServerErrorProblemResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { ruleId: string } }
            output: ServiceUnavailableProblemResponse
            outputFormat: 'json'
            status: 503
          }
        | {
            input: { param: { ruleId: string } }
            output: UnexpectedProblemResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/notification/rules/:ruleId/test': {
      $post:
        | {
            input: { param: { ruleId: string } }
            output: NotificationEvent
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { ruleId: string } }
            output: BadRequestProblemResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { ruleId: string } }
            output: UnauthorizedProblemResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { ruleId: string } }
            output: ForbiddenProblemResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { ruleId: string } }
            output: NotFoundProblemResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { ruleId: string } }
            output: PreconditionFailedProblemResponse
            outputFormat: 'json'
            status: 412
          }
        | {
            input: { param: { ruleId: string } }
            output: InternalServerErrorProblemResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { ruleId: string } }
            output: ServiceUnavailableProblemResponse
            outputFormat: 'json'
            status: 503
          }
        | {
            input: { param: { ruleId: string } }
            output: UnexpectedProblemResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/plans': {
      $get:
        | {
            input: {
              query: {
                includeDeleted?: boolean | undefined
                id?: string[] | undefined
                key?: string[] | undefined
                keyVersion?: { [x: string]: number[] } | undefined
                status?: PlanStatus[] | undefined
                currency?: CurrencyCode[] | undefined
                page?: number | undefined
                pageSize?: number | undefined
                order?: {} | undefined
                orderBy?: PlanOrderBy | undefined
              }
            }
            output: PlanPaginatedResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                includeDeleted?: boolean | undefined
                id?: string[] | undefined
                key?: string[] | undefined
                keyVersion?: { [x: string]: number[] } | undefined
                status?: PlanStatus[] | undefined
                currency?: CurrencyCode[] | undefined
                page?: number | undefined
                pageSize?: number | undefined
                order?: {} | undefined
                orderBy?: PlanOrderBy | undefined
              }
            }
            output: BadRequestProblemResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                includeDeleted?: boolean | undefined
                id?: string[] | undefined
                key?: string[] | undefined
                keyVersion?: { [x: string]: number[] } | undefined
                status?: PlanStatus[] | undefined
                currency?: CurrencyCode[] | undefined
                page?: number | undefined
                pageSize?: number | undefined
                order?: {} | undefined
                orderBy?: PlanOrderBy | undefined
              }
            }
            output: UnauthorizedProblemResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                includeDeleted?: boolean | undefined
                id?: string[] | undefined
                key?: string[] | undefined
                keyVersion?: { [x: string]: number[] } | undefined
                status?: PlanStatus[] | undefined
                currency?: CurrencyCode[] | undefined
                page?: number | undefined
                pageSize?: number | undefined
                order?: {} | undefined
                orderBy?: PlanOrderBy | undefined
              }
            }
            output: ForbiddenProblemResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                includeDeleted?: boolean | undefined
                id?: string[] | undefined
                key?: string[] | undefined
                keyVersion?: { [x: string]: number[] } | undefined
                status?: PlanStatus[] | undefined
                currency?: CurrencyCode[] | undefined
                page?: number | undefined
                pageSize?: number | undefined
                order?: {} | undefined
                orderBy?: PlanOrderBy | undefined
              }
            }
            output: PreconditionFailedProblemResponse
            outputFormat: 'json'
            status: 412
          }
        | {
            input: {
              query: {
                includeDeleted?: boolean | undefined
                id?: string[] | undefined
                key?: string[] | undefined
                keyVersion?: { [x: string]: number[] } | undefined
                status?: PlanStatus[] | undefined
                currency?: CurrencyCode[] | undefined
                page?: number | undefined
                pageSize?: number | undefined
                order?: {} | undefined
                orderBy?: PlanOrderBy | undefined
              }
            }
            output: InternalServerErrorProblemResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              query: {
                includeDeleted?: boolean | undefined
                id?: string[] | undefined
                key?: string[] | undefined
                keyVersion?: { [x: string]: number[] } | undefined
                status?: PlanStatus[] | undefined
                currency?: CurrencyCode[] | undefined
                page?: number | undefined
                pageSize?: number | undefined
                order?: {} | undefined
                orderBy?: PlanOrderBy | undefined
              }
            }
            output: ServiceUnavailableProblemResponse
            outputFormat: 'json'
            status: 503
          }
        | {
            input: {
              query: {
                includeDeleted?: boolean | undefined
                id?: string[] | undefined
                key?: string[] | undefined
                keyVersion?: { [x: string]: number[] } | undefined
                status?: PlanStatus[] | undefined
                currency?: CurrencyCode[] | undefined
                page?: number | undefined
                pageSize?: number | undefined
                order?: {} | undefined
                orderBy?: PlanOrderBy | undefined
              }
            }
            output: UnexpectedProblemResponse
            outputFormat: 'json'
            status: 200
          }
      $post:
        | { input: { json: PlanCreate }; output: Plan; outputFormat: 'json'; status: 201 }
        | {
            input: { json: PlanCreate }
            output: BadRequestProblemResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: PlanCreate }
            output: UnauthorizedProblemResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: PlanCreate }
            output: ForbiddenProblemResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: PlanCreate }
            output: PreconditionFailedProblemResponse
            outputFormat: 'json'
            status: 412
          }
        | {
            input: { json: PlanCreate }
            output: InternalServerErrorProblemResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { json: PlanCreate }
            output: ServiceUnavailableProblemResponse
            outputFormat: 'json'
            status: 503
          }
        | {
            input: { json: PlanCreate }
            output: UnexpectedProblemResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/plans/:planIdOrKey/next': {
      $post:
        | {
            input: { param: { planIdOrKey: string } }
            output: Plan
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { planIdOrKey: string } }
            output: BadRequestProblemResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { planIdOrKey: string } }
            output: UnauthorizedProblemResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { planIdOrKey: string } }
            output: ForbiddenProblemResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { planIdOrKey: string } }
            output: NotFoundProblemResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { planIdOrKey: string } }
            output: PreconditionFailedProblemResponse
            outputFormat: 'json'
            status: 412
          }
        | {
            input: { param: { planIdOrKey: string } }
            output: InternalServerErrorProblemResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { planIdOrKey: string } }
            output: ServiceUnavailableProblemResponse
            outputFormat: 'json'
            status: 503
          }
        | {
            input: { param: { planIdOrKey: string } }
            output: UnexpectedProblemResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/plans/:planId': {
      $put:
        | {
            input: { param: { planId: string } } & { json: PlanReplaceUpdate }
            output: Plan
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { planId: string } } & { json: PlanReplaceUpdate }
            output: BadRequestProblemResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { planId: string } } & { json: PlanReplaceUpdate }
            output: UnauthorizedProblemResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { planId: string } } & { json: PlanReplaceUpdate }
            output: ForbiddenProblemResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { planId: string } } & { json: PlanReplaceUpdate }
            output: NotFoundProblemResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { planId: string } } & { json: PlanReplaceUpdate }
            output: PreconditionFailedProblemResponse
            outputFormat: 'json'
            status: 412
          }
        | {
            input: { param: { planId: string } } & { json: PlanReplaceUpdate }
            output: InternalServerErrorProblemResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { planId: string } } & { json: PlanReplaceUpdate }
            output: ServiceUnavailableProblemResponse
            outputFormat: 'json'
            status: 503
          }
        | {
            input: { param: { planId: string } } & { json: PlanReplaceUpdate }
            output: UnexpectedProblemResponse
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { planId: string } } & {
              query: { includeLatest?: boolean | undefined }
            }
            output: Plan
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { planId: string } } & {
              query: { includeLatest?: boolean | undefined }
            }
            output: BadRequestProblemResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { planId: string } } & {
              query: { includeLatest?: boolean | undefined }
            }
            output: UnauthorizedProblemResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { planId: string } } & {
              query: { includeLatest?: boolean | undefined }
            }
            output: ForbiddenProblemResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { planId: string } } & {
              query: { includeLatest?: boolean | undefined }
            }
            output: NotFoundProblemResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { planId: string } } & {
              query: { includeLatest?: boolean | undefined }
            }
            output: PreconditionFailedProblemResponse
            outputFormat: 'json'
            status: 412
          }
        | {
            input: { param: { planId: string } } & {
              query: { includeLatest?: boolean | undefined }
            }
            output: InternalServerErrorProblemResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { planId: string } } & {
              query: { includeLatest?: boolean | undefined }
            }
            output: ServiceUnavailableProblemResponse
            outputFormat: 'json'
            status: 503
          }
        | {
            input: { param: { planId: string } } & {
              query: { includeLatest?: boolean | undefined }
            }
            output: UnexpectedProblemResponse
            outputFormat: 'json'
            status: 200
          }
      $delete:
        | { input: { param: { planId: string } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { planId: string } }
            output: BadRequestProblemResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { planId: string } }
            output: UnauthorizedProblemResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { planId: string } }
            output: ForbiddenProblemResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { planId: string } }
            output: NotFoundProblemResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { planId: string } }
            output: PreconditionFailedProblemResponse
            outputFormat: 'json'
            status: 412
          }
        | {
            input: { param: { planId: string } }
            output: InternalServerErrorProblemResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { planId: string } }
            output: ServiceUnavailableProblemResponse
            outputFormat: 'json'
            status: 503
          }
        | {
            input: { param: { planId: string } }
            output: UnexpectedProblemResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/plans/:planId/addons': {
      $get:
        | {
            input: { param: { planId: string } } & {
              query: {
                includeDeleted?: boolean | undefined
                id?: string[] | undefined
                key?: string[] | undefined
                keyVersion?: { [x: string]: number[] } | undefined
                page?: number | undefined
                pageSize?: number | undefined
                order?: {} | undefined
                orderBy?: PlanAddonOrderBy | undefined
              }
            }
            output: PlanAddonPaginatedResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { planId: string } } & {
              query: {
                includeDeleted?: boolean | undefined
                id?: string[] | undefined
                key?: string[] | undefined
                keyVersion?: { [x: string]: number[] } | undefined
                page?: number | undefined
                pageSize?: number | undefined
                order?: {} | undefined
                orderBy?: PlanAddonOrderBy | undefined
              }
            }
            output: BadRequestProblemResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { planId: string } } & {
              query: {
                includeDeleted?: boolean | undefined
                id?: string[] | undefined
                key?: string[] | undefined
                keyVersion?: { [x: string]: number[] } | undefined
                page?: number | undefined
                pageSize?: number | undefined
                order?: {} | undefined
                orderBy?: PlanAddonOrderBy | undefined
              }
            }
            output: UnauthorizedProblemResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { planId: string } } & {
              query: {
                includeDeleted?: boolean | undefined
                id?: string[] | undefined
                key?: string[] | undefined
                keyVersion?: { [x: string]: number[] } | undefined
                page?: number | undefined
                pageSize?: number | undefined
                order?: {} | undefined
                orderBy?: PlanAddonOrderBy | undefined
              }
            }
            output: ForbiddenProblemResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { planId: string } } & {
              query: {
                includeDeleted?: boolean | undefined
                id?: string[] | undefined
                key?: string[] | undefined
                keyVersion?: { [x: string]: number[] } | undefined
                page?: number | undefined
                pageSize?: number | undefined
                order?: {} | undefined
                orderBy?: PlanAddonOrderBy | undefined
              }
            }
            output: NotFoundProblemResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { planId: string } } & {
              query: {
                includeDeleted?: boolean | undefined
                id?: string[] | undefined
                key?: string[] | undefined
                keyVersion?: { [x: string]: number[] } | undefined
                page?: number | undefined
                pageSize?: number | undefined
                order?: {} | undefined
                orderBy?: PlanAddonOrderBy | undefined
              }
            }
            output: PreconditionFailedProblemResponse
            outputFormat: 'json'
            status: 412
          }
        | {
            input: { param: { planId: string } } & {
              query: {
                includeDeleted?: boolean | undefined
                id?: string[] | undefined
                key?: string[] | undefined
                keyVersion?: { [x: string]: number[] } | undefined
                page?: number | undefined
                pageSize?: number | undefined
                order?: {} | undefined
                orderBy?: PlanAddonOrderBy | undefined
              }
            }
            output: InternalServerErrorProblemResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { planId: string } } & {
              query: {
                includeDeleted?: boolean | undefined
                id?: string[] | undefined
                key?: string[] | undefined
                keyVersion?: { [x: string]: number[] } | undefined
                page?: number | undefined
                pageSize?: number | undefined
                order?: {} | undefined
                orderBy?: PlanAddonOrderBy | undefined
              }
            }
            output: ServiceUnavailableProblemResponse
            outputFormat: 'json'
            status: 503
          }
        | {
            input: { param: { planId: string } } & {
              query: {
                includeDeleted?: boolean | undefined
                id?: string[] | undefined
                key?: string[] | undefined
                keyVersion?: { [x: string]: number[] } | undefined
                page?: number | undefined
                pageSize?: number | undefined
                order?: {} | undefined
                orderBy?: PlanAddonOrderBy | undefined
              }
            }
            output: UnexpectedProblemResponse
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { param: { planId: string } } & { json: PlanAddonCreate }
            output: PlanAddon
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { planId: string } } & { json: PlanAddonCreate }
            output: BadRequestProblemResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { planId: string } } & { json: PlanAddonCreate }
            output: UnauthorizedProblemResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { planId: string } } & { json: PlanAddonCreate }
            output: ForbiddenProblemResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { planId: string } } & { json: PlanAddonCreate }
            output: NotFoundProblemResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { planId: string } } & { json: PlanAddonCreate }
            output: ConflictProblemResponse
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { planId: string } } & { json: PlanAddonCreate }
            output: PreconditionFailedProblemResponse
            outputFormat: 'json'
            status: 412
          }
        | {
            input: { param: { planId: string } } & { json: PlanAddonCreate }
            output: InternalServerErrorProblemResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { planId: string } } & { json: PlanAddonCreate }
            output: ServiceUnavailableProblemResponse
            outputFormat: 'json'
            status: 503
          }
        | {
            input: { param: { planId: string } } & { json: PlanAddonCreate }
            output: UnexpectedProblemResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/plans/:planId/addons/:planAddonId': {
      $put:
        | {
            input: { param: { planId: string; planAddonId: string } } & {
              json: PlanAddonReplaceUpdate
            }
            output: PlanAddon
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { planId: string; planAddonId: string } } & {
              json: PlanAddonReplaceUpdate
            }
            output: BadRequestProblemResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { planId: string; planAddonId: string } } & {
              json: PlanAddonReplaceUpdate
            }
            output: UnauthorizedProblemResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { planId: string; planAddonId: string } } & {
              json: PlanAddonReplaceUpdate
            }
            output: ForbiddenProblemResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { planId: string; planAddonId: string } } & {
              json: PlanAddonReplaceUpdate
            }
            output: NotFoundProblemResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { planId: string; planAddonId: string } } & {
              json: PlanAddonReplaceUpdate
            }
            output: PreconditionFailedProblemResponse
            outputFormat: 'json'
            status: 412
          }
        | {
            input: { param: { planId: string; planAddonId: string } } & {
              json: PlanAddonReplaceUpdate
            }
            output: InternalServerErrorProblemResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { planId: string; planAddonId: string } } & {
              json: PlanAddonReplaceUpdate
            }
            output: ServiceUnavailableProblemResponse
            outputFormat: 'json'
            status: 503
          }
        | {
            input: { param: { planId: string; planAddonId: string } } & {
              json: PlanAddonReplaceUpdate
            }
            output: UnexpectedProblemResponse
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { planId: string; planAddonId: string } }
            output: PlanAddon
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { planId: string; planAddonId: string } }
            output: BadRequestProblemResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { planId: string; planAddonId: string } }
            output: UnauthorizedProblemResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { planId: string; planAddonId: string } }
            output: ForbiddenProblemResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { planId: string; planAddonId: string } }
            output: NotFoundProblemResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { planId: string; planAddonId: string } }
            output: PreconditionFailedProblemResponse
            outputFormat: 'json'
            status: 412
          }
        | {
            input: { param: { planId: string; planAddonId: string } }
            output: InternalServerErrorProblemResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { planId: string; planAddonId: string } }
            output: ServiceUnavailableProblemResponse
            outputFormat: 'json'
            status: 503
          }
        | {
            input: { param: { planId: string; planAddonId: string } }
            output: UnexpectedProblemResponse
            outputFormat: 'json'
            status: 200
          }
      $delete:
        | {
            input: { param: { planId: string; planAddonId: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { planId: string; planAddonId: string } }
            output: BadRequestProblemResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { planId: string; planAddonId: string } }
            output: UnauthorizedProblemResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { planId: string; planAddonId: string } }
            output: ForbiddenProblemResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { planId: string; planAddonId: string } }
            output: NotFoundProblemResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { planId: string; planAddonId: string } }
            output: PreconditionFailedProblemResponse
            outputFormat: 'json'
            status: 412
          }
        | {
            input: { param: { planId: string; planAddonId: string } }
            output: InternalServerErrorProblemResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { planId: string; planAddonId: string } }
            output: ServiceUnavailableProblemResponse
            outputFormat: 'json'
            status: 503
          }
        | {
            input: { param: { planId: string; planAddonId: string } }
            output: UnexpectedProblemResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/plans/:planId/archive': {
      $post:
        | { input: { param: { planId: string } }; output: Plan; outputFormat: 'json'; status: 200 }
        | {
            input: { param: { planId: string } }
            output: BadRequestProblemResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { planId: string } }
            output: UnauthorizedProblemResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { planId: string } }
            output: ForbiddenProblemResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { planId: string } }
            output: NotFoundProblemResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { planId: string } }
            output: PreconditionFailedProblemResponse
            outputFormat: 'json'
            status: 412
          }
        | {
            input: { param: { planId: string } }
            output: InternalServerErrorProblemResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { planId: string } }
            output: ServiceUnavailableProblemResponse
            outputFormat: 'json'
            status: 503
          }
        | {
            input: { param: { planId: string } }
            output: UnexpectedProblemResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/plans/:planId/publish': {
      $post:
        | { input: { param: { planId: string } }; output: Plan; outputFormat: 'json'; status: 200 }
        | {
            input: { param: { planId: string } }
            output: BadRequestProblemResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { planId: string } }
            output: UnauthorizedProblemResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { planId: string } }
            output: ForbiddenProblemResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { planId: string } }
            output: NotFoundProblemResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { planId: string } }
            output: PreconditionFailedProblemResponse
            outputFormat: 'json'
            status: 412
          }
        | {
            input: { param: { planId: string } }
            output: InternalServerErrorProblemResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { planId: string } }
            output: ServiceUnavailableProblemResponse
            outputFormat: 'json'
            status: 503
          }
        | {
            input: { param: { planId: string } }
            output: UnexpectedProblemResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/portal/meters/:meterSlug/query': {
      $get:
        | {
            input: { param: { meterSlug: string } } & {
              query: {
                clientId?: string | undefined
                from?: string | undefined
                to?: string | undefined
                windowSize?: WindowSize | undefined
                windowTimeZone?: string | undefined
                filterCustomerId?: string[] | undefined
                filterGroupBy?: { [x: string]: string } | undefined
                advancedMeterGroupByFilters?: { [x: string]: FilterString } | undefined
                groupBy?: string[] | undefined
              }
            }
            output: MeterQueryResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { meterSlug: string } } & {
              query: {
                clientId?: string | undefined
                from?: string | undefined
                to?: string | undefined
                windowSize?: WindowSize | undefined
                windowTimeZone?: string | undefined
                filterCustomerId?: string[] | undefined
                filterGroupBy?: { [x: string]: string } | undefined
                advancedMeterGroupByFilters?: { [x: string]: FilterString } | undefined
                groupBy?: string[] | undefined
              }
            }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { meterSlug: string } } & {
              query: {
                clientId?: string | undefined
                from?: string | undefined
                to?: string | undefined
                windowSize?: WindowSize | undefined
                windowTimeZone?: string | undefined
                filterCustomerId?: string[] | undefined
                filterGroupBy?: { [x: string]: string } | undefined
                advancedMeterGroupByFilters?: { [x: string]: FilterString } | undefined
                groupBy?: string[] | undefined
              }
            }
            output: BadRequestProblemResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { meterSlug: string } } & {
              query: {
                clientId?: string | undefined
                from?: string | undefined
                to?: string | undefined
                windowSize?: WindowSize | undefined
                windowTimeZone?: string | undefined
                filterCustomerId?: string[] | undefined
                filterGroupBy?: { [x: string]: string } | undefined
                advancedMeterGroupByFilters?: { [x: string]: FilterString } | undefined
                groupBy?: string[] | undefined
              }
            }
            output: UnauthorizedProblemResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { meterSlug: string } } & {
              query: {
                clientId?: string | undefined
                from?: string | undefined
                to?: string | undefined
                windowSize?: WindowSize | undefined
                windowTimeZone?: string | undefined
                filterCustomerId?: string[] | undefined
                filterGroupBy?: { [x: string]: string } | undefined
                advancedMeterGroupByFilters?: { [x: string]: FilterString } | undefined
                groupBy?: string[] | undefined
              }
            }
            output: ForbiddenProblemResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { meterSlug: string } } & {
              query: {
                clientId?: string | undefined
                from?: string | undefined
                to?: string | undefined
                windowSize?: WindowSize | undefined
                windowTimeZone?: string | undefined
                filterCustomerId?: string[] | undefined
                filterGroupBy?: { [x: string]: string } | undefined
                advancedMeterGroupByFilters?: { [x: string]: FilterString } | undefined
                groupBy?: string[] | undefined
              }
            }
            output: NotFoundProblemResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { meterSlug: string } } & {
              query: {
                clientId?: string | undefined
                from?: string | undefined
                to?: string | undefined
                windowSize?: WindowSize | undefined
                windowTimeZone?: string | undefined
                filterCustomerId?: string[] | undefined
                filterGroupBy?: { [x: string]: string } | undefined
                advancedMeterGroupByFilters?: { [x: string]: FilterString } | undefined
                groupBy?: string[] | undefined
              }
            }
            output: PreconditionFailedProblemResponse
            outputFormat: 'json'
            status: 412
          }
        | {
            input: { param: { meterSlug: string } } & {
              query: {
                clientId?: string | undefined
                from?: string | undefined
                to?: string | undefined
                windowSize?: WindowSize | undefined
                windowTimeZone?: string | undefined
                filterCustomerId?: string[] | undefined
                filterGroupBy?: { [x: string]: string } | undefined
                advancedMeterGroupByFilters?: { [x: string]: FilterString } | undefined
                groupBy?: string[] | undefined
              }
            }
            output: InternalServerErrorProblemResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { meterSlug: string } } & {
              query: {
                clientId?: string | undefined
                from?: string | undefined
                to?: string | undefined
                windowSize?: WindowSize | undefined
                windowTimeZone?: string | undefined
                filterCustomerId?: string[] | undefined
                filterGroupBy?: { [x: string]: string } | undefined
                advancedMeterGroupByFilters?: { [x: string]: FilterString } | undefined
                groupBy?: string[] | undefined
              }
            }
            output: ServiceUnavailableProblemResponse
            outputFormat: 'json'
            status: 503
          }
        | {
            input: { param: { meterSlug: string } } & {
              query: {
                clientId?: string | undefined
                from?: string | undefined
                to?: string | undefined
                windowSize?: WindowSize | undefined
                windowTimeZone?: string | undefined
                filterCustomerId?: string[] | undefined
                filterGroupBy?: { [x: string]: string } | undefined
                advancedMeterGroupByFilters?: { [x: string]: FilterString } | undefined
                groupBy?: string[] | undefined
              }
            }
            output: UnexpectedProblemResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/portal/tokens': {
      $post:
        | { input: { json: PortalToken }; output: PortalToken; outputFormat: 'json'; status: 200 }
        | {
            input: { json: PortalToken }
            output: BadRequestProblemResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: PortalToken }
            output: UnauthorizedProblemResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: PortalToken }
            output: ForbiddenProblemResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: PortalToken }
            output: PreconditionFailedProblemResponse
            outputFormat: 'json'
            status: 412
          }
        | {
            input: { json: PortalToken }
            output: InternalServerErrorProblemResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { json: PortalToken }
            output: ServiceUnavailableProblemResponse
            outputFormat: 'json'
            status: 503
          }
        | {
            input: { json: PortalToken }
            output: UnexpectedProblemResponse
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { query: { limit?: number | undefined } }
            output: PortalToken[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { limit?: number | undefined } }
            output: BadRequestProblemResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { limit?: number | undefined } }
            output: UnauthorizedProblemResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { limit?: number | undefined } }
            output: ForbiddenProblemResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { limit?: number | undefined } }
            output: PreconditionFailedProblemResponse
            outputFormat: 'json'
            status: 412
          }
        | {
            input: { query: { limit?: number | undefined } }
            output: InternalServerErrorProblemResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { query: { limit?: number | undefined } }
            output: ServiceUnavailableProblemResponse
            outputFormat: 'json'
            status: 503
          }
        | {
            input: { query: { limit?: number | undefined } }
            output: UnexpectedProblemResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/portal/tokens/invalidate': {
      $post:
        | {
            input: { json: { id?: string | undefined; subject?: string | undefined } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { json: { id?: string | undefined; subject?: string | undefined } }
            output: BadRequestProblemResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: { id?: string | undefined; subject?: string | undefined } }
            output: UnauthorizedProblemResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: { id?: string | undefined; subject?: string | undefined } }
            output: ForbiddenProblemResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: { id?: string | undefined; subject?: string | undefined } }
            output: PreconditionFailedProblemResponse
            outputFormat: 'json'
            status: 412
          }
        | {
            input: { json: { id?: string | undefined; subject?: string | undefined } }
            output: InternalServerErrorProblemResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { json: { id?: string | undefined; subject?: string | undefined } }
            output: ServiceUnavailableProblemResponse
            outputFormat: 'json'
            status: 503
          }
        | {
            input: { json: { id?: string | undefined; subject?: string | undefined } }
            output: UnexpectedProblemResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/stripe/checkout/sessions': {
      $post:
        | {
            input: { json: CreateStripeCheckoutSessionRequest }
            output: CreateStripeCheckoutSessionResult
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: CreateStripeCheckoutSessionRequest }
            output: BadRequestProblemResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: CreateStripeCheckoutSessionRequest }
            output: UnauthorizedProblemResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: CreateStripeCheckoutSessionRequest }
            output: ForbiddenProblemResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: CreateStripeCheckoutSessionRequest }
            output: NotFoundProblemResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: CreateStripeCheckoutSessionRequest }
            output: PreconditionFailedProblemResponse
            outputFormat: 'json'
            status: 412
          }
        | {
            input: { json: CreateStripeCheckoutSessionRequest }
            output: InternalServerErrorProblemResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { json: CreateStripeCheckoutSessionRequest }
            output: ServiceUnavailableProblemResponse
            outputFormat: 'json'
            status: 503
          }
        | {
            input: { json: CreateStripeCheckoutSessionRequest }
            output: UnexpectedProblemResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/subjects': {
      $get:
        | { input: {}; output: Subject[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: BadRequestProblemResponse; outputFormat: 'json'; status: 400 }
        | { input: {}; output: UnauthorizedProblemResponse; outputFormat: 'json'; status: 401 }
        | { input: {}; output: ForbiddenProblemResponse; outputFormat: 'json'; status: 403 }
        | {
            input: {}
            output: PreconditionFailedProblemResponse
            outputFormat: 'json'
            status: 412
          }
        | {
            input: {}
            output: InternalServerErrorProblemResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {}
            output: ServiceUnavailableProblemResponse
            outputFormat: 'json'
            status: 503
          }
        | { input: {}; output: UnexpectedProblemResponse; outputFormat: 'json'; status: 200 }
      $post:
        | { input: { json: SubjectUpsert[] }; output: Subject[]; outputFormat: 'json'; status: 200 }
        | {
            input: { json: SubjectUpsert[] }
            output: BadRequestProblemResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: SubjectUpsert[] }
            output: UnauthorizedProblemResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: SubjectUpsert[] }
            output: ForbiddenProblemResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: SubjectUpsert[] }
            output: PreconditionFailedProblemResponse
            outputFormat: 'json'
            status: 412
          }
        | {
            input: { json: SubjectUpsert[] }
            output: InternalServerErrorProblemResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { json: SubjectUpsert[] }
            output: ServiceUnavailableProblemResponse
            outputFormat: 'json'
            status: 503
          }
        | {
            input: { json: SubjectUpsert[] }
            output: UnexpectedProblemResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/subjects/:subjectIdOrKey': {
      $get:
        | {
            input: { param: { subjectIdOrKey: string } }
            output: Subject
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { subjectIdOrKey: string } }
            output: BadRequestProblemResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { subjectIdOrKey: string } }
            output: UnauthorizedProblemResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { subjectIdOrKey: string } }
            output: ForbiddenProblemResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { subjectIdOrKey: string } }
            output: NotFoundProblemResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { subjectIdOrKey: string } }
            output: PreconditionFailedProblemResponse
            outputFormat: 'json'
            status: 412
          }
        | {
            input: { param: { subjectIdOrKey: string } }
            output: InternalServerErrorProblemResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { subjectIdOrKey: string } }
            output: ServiceUnavailableProblemResponse
            outputFormat: 'json'
            status: 503
          }
        | {
            input: { param: { subjectIdOrKey: string } }
            output: UnexpectedProblemResponse
            outputFormat: 'json'
            status: 200
          }
      $delete:
        | {
            input: { param: { subjectIdOrKey: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { subjectIdOrKey: string } }
            output: BadRequestProblemResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { subjectIdOrKey: string } }
            output: UnauthorizedProblemResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { subjectIdOrKey: string } }
            output: ForbiddenProblemResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { subjectIdOrKey: string } }
            output: PreconditionFailedProblemResponse
            outputFormat: 'json'
            status: 412
          }
        | {
            input: { param: { subjectIdOrKey: string } }
            output: InternalServerErrorProblemResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { subjectIdOrKey: string } }
            output: ServiceUnavailableProblemResponse
            outputFormat: 'json'
            status: 503
          }
        | {
            input: { param: { subjectIdOrKey: string } }
            output: UnexpectedProblemResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/subjects/:subjectIdOrKey/entitlements': {
      $post:
        | {
            input: { param: { subjectIdOrKey: string } } & { json: EntitlementCreateInputs }
            output: Entitlement
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { subjectIdOrKey: string } } & { json: EntitlementCreateInputs }
            output: BadRequestProblemResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { subjectIdOrKey: string } } & { json: EntitlementCreateInputs }
            output: UnauthorizedProblemResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { subjectIdOrKey: string } } & { json: EntitlementCreateInputs }
            output: ForbiddenProblemResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { subjectIdOrKey: string } } & { json: EntitlementCreateInputs }
            output: ConflictProblemResponse
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { subjectIdOrKey: string } } & { json: EntitlementCreateInputs }
            output: PreconditionFailedProblemResponse
            outputFormat: 'json'
            status: 412
          }
        | {
            input: { param: { subjectIdOrKey: string } } & { json: EntitlementCreateInputs }
            output: InternalServerErrorProblemResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { subjectIdOrKey: string } } & { json: EntitlementCreateInputs }
            output: ServiceUnavailableProblemResponse
            outputFormat: 'json'
            status: 503
          }
        | {
            input: { param: { subjectIdOrKey: string } } & { json: EntitlementCreateInputs }
            output: UnexpectedProblemResponse
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { subjectIdOrKey: string } } & {
              query: { includeDeleted?: boolean | undefined }
            }
            output: Entitlement[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { subjectIdOrKey: string } } & {
              query: { includeDeleted?: boolean | undefined }
            }
            output: BadRequestProblemResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { subjectIdOrKey: string } } & {
              query: { includeDeleted?: boolean | undefined }
            }
            output: UnauthorizedProblemResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { subjectIdOrKey: string } } & {
              query: { includeDeleted?: boolean | undefined }
            }
            output: ForbiddenProblemResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { subjectIdOrKey: string } } & {
              query: { includeDeleted?: boolean | undefined }
            }
            output: PreconditionFailedProblemResponse
            outputFormat: 'json'
            status: 412
          }
        | {
            input: { param: { subjectIdOrKey: string } } & {
              query: { includeDeleted?: boolean | undefined }
            }
            output: InternalServerErrorProblemResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { subjectIdOrKey: string } } & {
              query: { includeDeleted?: boolean | undefined }
            }
            output: ServiceUnavailableProblemResponse
            outputFormat: 'json'
            status: 503
          }
        | {
            input: { param: { subjectIdOrKey: string } } & {
              query: { includeDeleted?: boolean | undefined }
            }
            output: UnexpectedProblemResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/subjects/:subjectIdOrKey/entitlements/:entitlementIdOrFeatureKey/grants': {
      $get:
        | {
            input: { param: { subjectIdOrKey: string; entitlementIdOrFeatureKey: string } } & {
              query: { includeDeleted?: boolean | undefined; orderBy?: {} | undefined }
            }
            output: EntitlementGrant[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { subjectIdOrKey: string; entitlementIdOrFeatureKey: string } } & {
              query: { includeDeleted?: boolean | undefined; orderBy?: {} | undefined }
            }
            output: BadRequestProblemResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { subjectIdOrKey: string; entitlementIdOrFeatureKey: string } } & {
              query: { includeDeleted?: boolean | undefined; orderBy?: {} | undefined }
            }
            output: UnauthorizedProblemResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { subjectIdOrKey: string; entitlementIdOrFeatureKey: string } } & {
              query: { includeDeleted?: boolean | undefined; orderBy?: {} | undefined }
            }
            output: ForbiddenProblemResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { subjectIdOrKey: string; entitlementIdOrFeatureKey: string } } & {
              query: { includeDeleted?: boolean | undefined; orderBy?: {} | undefined }
            }
            output: PreconditionFailedProblemResponse
            outputFormat: 'json'
            status: 412
          }
        | {
            input: { param: { subjectIdOrKey: string; entitlementIdOrFeatureKey: string } } & {
              query: { includeDeleted?: boolean | undefined; orderBy?: {} | undefined }
            }
            output: InternalServerErrorProblemResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { subjectIdOrKey: string; entitlementIdOrFeatureKey: string } } & {
              query: { includeDeleted?: boolean | undefined; orderBy?: {} | undefined }
            }
            output: ServiceUnavailableProblemResponse
            outputFormat: 'json'
            status: 503
          }
        | {
            input: { param: { subjectIdOrKey: string; entitlementIdOrFeatureKey: string } } & {
              query: { includeDeleted?: boolean | undefined; orderBy?: {} | undefined }
            }
            output: UnexpectedProblemResponse
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { param: { subjectIdOrKey: string; entitlementIdOrFeatureKey: string } } & {
              json: EntitlementGrantCreateInput
            }
            output: EntitlementGrant
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { subjectIdOrKey: string; entitlementIdOrFeatureKey: string } } & {
              json: EntitlementGrantCreateInput
            }
            output: BadRequestProblemResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { subjectIdOrKey: string; entitlementIdOrFeatureKey: string } } & {
              json: EntitlementGrantCreateInput
            }
            output: UnauthorizedProblemResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { subjectIdOrKey: string; entitlementIdOrFeatureKey: string } } & {
              json: EntitlementGrantCreateInput
            }
            output: ForbiddenProblemResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { subjectIdOrKey: string; entitlementIdOrFeatureKey: string } } & {
              json: EntitlementGrantCreateInput
            }
            output: ConflictProblemResponse
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { subjectIdOrKey: string; entitlementIdOrFeatureKey: string } } & {
              json: EntitlementGrantCreateInput
            }
            output: PreconditionFailedProblemResponse
            outputFormat: 'json'
            status: 412
          }
        | {
            input: { param: { subjectIdOrKey: string; entitlementIdOrFeatureKey: string } } & {
              json: EntitlementGrantCreateInput
            }
            output: InternalServerErrorProblemResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { subjectIdOrKey: string; entitlementIdOrFeatureKey: string } } & {
              json: EntitlementGrantCreateInput
            }
            output: ServiceUnavailableProblemResponse
            outputFormat: 'json'
            status: 503
          }
        | {
            input: { param: { subjectIdOrKey: string; entitlementIdOrFeatureKey: string } } & {
              json: EntitlementGrantCreateInput
            }
            output: UnexpectedProblemResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/subjects/:subjectIdOrKey/entitlements/:entitlementIdOrFeatureKey/override': {
      $put:
        | {
            input: { param: { subjectIdOrKey: string; entitlementIdOrFeatureKey: string } } & {
              json: EntitlementCreateInputs
            }
            output: Entitlement
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { subjectIdOrKey: string; entitlementIdOrFeatureKey: string } } & {
              json: EntitlementCreateInputs
            }
            output: BadRequestProblemResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { subjectIdOrKey: string; entitlementIdOrFeatureKey: string } } & {
              json: EntitlementCreateInputs
            }
            output: UnauthorizedProblemResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { subjectIdOrKey: string; entitlementIdOrFeatureKey: string } } & {
              json: EntitlementCreateInputs
            }
            output: ForbiddenProblemResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { subjectIdOrKey: string; entitlementIdOrFeatureKey: string } } & {
              json: EntitlementCreateInputs
            }
            output: NotFoundProblemResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { subjectIdOrKey: string; entitlementIdOrFeatureKey: string } } & {
              json: EntitlementCreateInputs
            }
            output: ConflictProblemResponse
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { subjectIdOrKey: string; entitlementIdOrFeatureKey: string } } & {
              json: EntitlementCreateInputs
            }
            output: PreconditionFailedProblemResponse
            outputFormat: 'json'
            status: 412
          }
        | {
            input: { param: { subjectIdOrKey: string; entitlementIdOrFeatureKey: string } } & {
              json: EntitlementCreateInputs
            }
            output: InternalServerErrorProblemResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { subjectIdOrKey: string; entitlementIdOrFeatureKey: string } } & {
              json: EntitlementCreateInputs
            }
            output: ServiceUnavailableProblemResponse
            outputFormat: 'json'
            status: 503
          }
        | {
            input: { param: { subjectIdOrKey: string; entitlementIdOrFeatureKey: string } } & {
              json: EntitlementCreateInputs
            }
            output: UnexpectedProblemResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/subjects/:subjectIdOrKey/entitlements/:entitlementIdOrFeatureKey/value': {
      $get:
        | {
            input: { param: { subjectIdOrKey: string; entitlementIdOrFeatureKey: string } } & {
              query: { time?: string | undefined }
            }
            output: EntitlementValue
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { subjectIdOrKey: string; entitlementIdOrFeatureKey: string } } & {
              query: { time?: string | undefined }
            }
            output: BadRequestProblemResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { subjectIdOrKey: string; entitlementIdOrFeatureKey: string } } & {
              query: { time?: string | undefined }
            }
            output: UnauthorizedProblemResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { subjectIdOrKey: string; entitlementIdOrFeatureKey: string } } & {
              query: { time?: string | undefined }
            }
            output: ForbiddenProblemResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { subjectIdOrKey: string; entitlementIdOrFeatureKey: string } } & {
              query: { time?: string | undefined }
            }
            output: NotFoundProblemResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { subjectIdOrKey: string; entitlementIdOrFeatureKey: string } } & {
              query: { time?: string | undefined }
            }
            output: PreconditionFailedProblemResponse
            outputFormat: 'json'
            status: 412
          }
        | {
            input: { param: { subjectIdOrKey: string; entitlementIdOrFeatureKey: string } } & {
              query: { time?: string | undefined }
            }
            output: InternalServerErrorProblemResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { subjectIdOrKey: string; entitlementIdOrFeatureKey: string } } & {
              query: { time?: string | undefined }
            }
            output: ServiceUnavailableProblemResponse
            outputFormat: 'json'
            status: 503
          }
        | {
            input: { param: { subjectIdOrKey: string; entitlementIdOrFeatureKey: string } } & {
              query: { time?: string | undefined }
            }
            output: UnexpectedProblemResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/subjects/:subjectIdOrKey/entitlements/:entitlementId': {
      $get:
        | {
            input: { param: { subjectIdOrKey: string; entitlementId: string } }
            output: Entitlement
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { subjectIdOrKey: string; entitlementId: string } }
            output: BadRequestProblemResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { subjectIdOrKey: string; entitlementId: string } }
            output: UnauthorizedProblemResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { subjectIdOrKey: string; entitlementId: string } }
            output: ForbiddenProblemResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { subjectIdOrKey: string; entitlementId: string } }
            output: NotFoundProblemResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { subjectIdOrKey: string; entitlementId: string } }
            output: PreconditionFailedProblemResponse
            outputFormat: 'json'
            status: 412
          }
        | {
            input: { param: { subjectIdOrKey: string; entitlementId: string } }
            output: InternalServerErrorProblemResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { subjectIdOrKey: string; entitlementId: string } }
            output: ServiceUnavailableProblemResponse
            outputFormat: 'json'
            status: 503
          }
        | {
            input: { param: { subjectIdOrKey: string; entitlementId: string } }
            output: UnexpectedProblemResponse
            outputFormat: 'json'
            status: 200
          }
      $delete:
        | {
            input: { param: { subjectIdOrKey: string; entitlementId: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { subjectIdOrKey: string; entitlementId: string } }
            output: BadRequestProblemResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { subjectIdOrKey: string; entitlementId: string } }
            output: UnauthorizedProblemResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { subjectIdOrKey: string; entitlementId: string } }
            output: ForbiddenProblemResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { subjectIdOrKey: string; entitlementId: string } }
            output: NotFoundProblemResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { subjectIdOrKey: string; entitlementId: string } }
            output: PreconditionFailedProblemResponse
            outputFormat: 'json'
            status: 412
          }
        | {
            input: { param: { subjectIdOrKey: string; entitlementId: string } }
            output: InternalServerErrorProblemResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { subjectIdOrKey: string; entitlementId: string } }
            output: ServiceUnavailableProblemResponse
            outputFormat: 'json'
            status: 503
          }
        | {
            input: { param: { subjectIdOrKey: string; entitlementId: string } }
            output: UnexpectedProblemResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/subjects/:subjectIdOrKey/entitlements/:entitlementId/history': {
      $get:
        | {
            input: { param: { subjectIdOrKey: string; entitlementId: string } } & {
              query: {
                from?: string | undefined
                to?: string | undefined
                windowSize: WindowSize
                windowTimeZone?: string | undefined
              }
            }
            output: WindowedBalanceHistory
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { subjectIdOrKey: string; entitlementId: string } } & {
              query: {
                from?: string | undefined
                to?: string | undefined
                windowSize: WindowSize
                windowTimeZone?: string | undefined
              }
            }
            output: BadRequestProblemResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { subjectIdOrKey: string; entitlementId: string } } & {
              query: {
                from?: string | undefined
                to?: string | undefined
                windowSize: WindowSize
                windowTimeZone?: string | undefined
              }
            }
            output: UnauthorizedProblemResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { subjectIdOrKey: string; entitlementId: string } } & {
              query: {
                from?: string | undefined
                to?: string | undefined
                windowSize: WindowSize
                windowTimeZone?: string | undefined
              }
            }
            output: ForbiddenProblemResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { subjectIdOrKey: string; entitlementId: string } } & {
              query: {
                from?: string | undefined
                to?: string | undefined
                windowSize: WindowSize
                windowTimeZone?: string | undefined
              }
            }
            output: NotFoundProblemResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { subjectIdOrKey: string; entitlementId: string } } & {
              query: {
                from?: string | undefined
                to?: string | undefined
                windowSize: WindowSize
                windowTimeZone?: string | undefined
              }
            }
            output: PreconditionFailedProblemResponse
            outputFormat: 'json'
            status: 412
          }
        | {
            input: { param: { subjectIdOrKey: string; entitlementId: string } } & {
              query: {
                from?: string | undefined
                to?: string | undefined
                windowSize: WindowSize
                windowTimeZone?: string | undefined
              }
            }
            output: InternalServerErrorProblemResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { subjectIdOrKey: string; entitlementId: string } } & {
              query: {
                from?: string | undefined
                to?: string | undefined
                windowSize: WindowSize
                windowTimeZone?: string | undefined
              }
            }
            output: ServiceUnavailableProblemResponse
            outputFormat: 'json'
            status: 503
          }
        | {
            input: { param: { subjectIdOrKey: string; entitlementId: string } } & {
              query: {
                from?: string | undefined
                to?: string | undefined
                windowSize: WindowSize
                windowTimeZone?: string | undefined
              }
            }
            output: UnexpectedProblemResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/subjects/:subjectIdOrKey/entitlements/:entitlementId/reset': {
      $post:
        | {
            input: { param: { subjectIdOrKey: string; entitlementId: string } } & {
              json: ResetEntitlementUsageInput
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { subjectIdOrKey: string; entitlementId: string } } & {
              json: ResetEntitlementUsageInput
            }
            output: BadRequestProblemResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { subjectIdOrKey: string; entitlementId: string } } & {
              json: ResetEntitlementUsageInput
            }
            output: UnauthorizedProblemResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { subjectIdOrKey: string; entitlementId: string } } & {
              json: ResetEntitlementUsageInput
            }
            output: ForbiddenProblemResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { subjectIdOrKey: string; entitlementId: string } } & {
              json: ResetEntitlementUsageInput
            }
            output: NotFoundProblemResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { subjectIdOrKey: string; entitlementId: string } } & {
              json: ResetEntitlementUsageInput
            }
            output: PreconditionFailedProblemResponse
            outputFormat: 'json'
            status: 412
          }
        | {
            input: { param: { subjectIdOrKey: string; entitlementId: string } } & {
              json: ResetEntitlementUsageInput
            }
            output: InternalServerErrorProblemResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { subjectIdOrKey: string; entitlementId: string } } & {
              json: ResetEntitlementUsageInput
            }
            output: ServiceUnavailableProblemResponse
            outputFormat: 'json'
            status: 503
          }
        | {
            input: { param: { subjectIdOrKey: string; entitlementId: string } } & {
              json: ResetEntitlementUsageInput
            }
            output: UnexpectedProblemResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/subscriptions': {
      $post:
        | {
            input: { json: SubscriptionCreate }
            output: Subscription
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: SubscriptionCreate }
            output: SubscriptionBadRequestErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: SubscriptionCreate }
            output: UnauthorizedProblemResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: SubscriptionCreate }
            output: ForbiddenProblemResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: SubscriptionCreate }
            output: SubscriptionConflictErrorResponse
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { json: SubscriptionCreate }
            output: PreconditionFailedProblemResponse
            outputFormat: 'json'
            status: 412
          }
        | {
            input: { json: SubscriptionCreate }
            output: InternalServerErrorProblemResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { json: SubscriptionCreate }
            output: ServiceUnavailableProblemResponse
            outputFormat: 'json'
            status: 503
          }
        | {
            input: { json: SubscriptionCreate }
            output: UnexpectedProblemResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/subscriptions/:subscriptionId': {
      $get:
        | {
            input: { param: { subscriptionId: string } } & { query: { at?: string | undefined } }
            output: SubscriptionExpanded
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { subscriptionId: string } } & { query: { at?: string | undefined } }
            output: BadRequestProblemResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { subscriptionId: string } } & { query: { at?: string | undefined } }
            output: UnauthorizedProblemResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { subscriptionId: string } } & { query: { at?: string | undefined } }
            output: ForbiddenProblemResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { subscriptionId: string } } & { query: { at?: string | undefined } }
            output: NotFoundProblemResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { subscriptionId: string } } & { query: { at?: string | undefined } }
            output: PreconditionFailedProblemResponse
            outputFormat: 'json'
            status: 412
          }
        | {
            input: { param: { subscriptionId: string } } & { query: { at?: string | undefined } }
            output: InternalServerErrorProblemResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { subscriptionId: string } } & { query: { at?: string | undefined } }
            output: ServiceUnavailableProblemResponse
            outputFormat: 'json'
            status: 503
          }
        | {
            input: { param: { subscriptionId: string } } & { query: { at?: string | undefined } }
            output: UnexpectedProblemResponse
            outputFormat: 'json'
            status: 200
          }
      $patch:
        | {
            input: { param: { subscriptionId: string } } & { json: SubscriptionEdit }
            output: Subscription
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { subscriptionId: string } } & { json: SubscriptionEdit }
            output: SubscriptionBadRequestErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { subscriptionId: string } } & { json: SubscriptionEdit }
            output: UnauthorizedProblemResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { subscriptionId: string } } & { json: SubscriptionEdit }
            output: ForbiddenProblemResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { subscriptionId: string } } & { json: SubscriptionEdit }
            output: NotFoundProblemResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { subscriptionId: string } } & { json: SubscriptionEdit }
            output: SubscriptionConflictErrorResponse
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { subscriptionId: string } } & { json: SubscriptionEdit }
            output: PreconditionFailedProblemResponse
            outputFormat: 'json'
            status: 412
          }
        | {
            input: { param: { subscriptionId: string } } & { json: SubscriptionEdit }
            output: InternalServerErrorProblemResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { subscriptionId: string } } & { json: SubscriptionEdit }
            output: ServiceUnavailableProblemResponse
            outputFormat: 'json'
            status: 503
          }
        | {
            input: { param: { subscriptionId: string } } & { json: SubscriptionEdit }
            output: UnexpectedProblemResponse
            outputFormat: 'json'
            status: 200
          }
      $delete:
        | {
            input: { param: { subscriptionId: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { subscriptionId: string } }
            output: SubscriptionBadRequestErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { subscriptionId: string } }
            output: UnauthorizedProblemResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { subscriptionId: string } }
            output: ForbiddenProblemResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { subscriptionId: string } }
            output: NotFoundProblemResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { subscriptionId: string } }
            output: SubscriptionConflictErrorResponse
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { subscriptionId: string } }
            output: PreconditionFailedProblemResponse
            outputFormat: 'json'
            status: 412
          }
        | {
            input: { param: { subscriptionId: string } }
            output: InternalServerErrorProblemResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { subscriptionId: string } }
            output: ServiceUnavailableProblemResponse
            outputFormat: 'json'
            status: 503
          }
        | {
            input: { param: { subscriptionId: string } }
            output: UnexpectedProblemResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/subscriptions/:subscriptionId/addons': {
      $post:
        | {
            input: { param: { subscriptionId: string } } & { json: SubscriptionAddonCreate }
            output: SubscriptionAddon
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { subscriptionId: string } } & { json: SubscriptionAddonCreate }
            output: BadRequestProblemResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { subscriptionId: string } } & { json: SubscriptionAddonCreate }
            output: UnauthorizedProblemResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { subscriptionId: string } } & { json: SubscriptionAddonCreate }
            output: ForbiddenProblemResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { subscriptionId: string } } & { json: SubscriptionAddonCreate }
            output: NotFoundProblemResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { subscriptionId: string } } & { json: SubscriptionAddonCreate }
            output: ConflictProblemResponse
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { subscriptionId: string } } & { json: SubscriptionAddonCreate }
            output: PreconditionFailedProblemResponse
            outputFormat: 'json'
            status: 412
          }
        | {
            input: { param: { subscriptionId: string } } & { json: SubscriptionAddonCreate }
            output: InternalServerErrorProblemResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { subscriptionId: string } } & { json: SubscriptionAddonCreate }
            output: ServiceUnavailableProblemResponse
            outputFormat: 'json'
            status: 503
          }
        | {
            input: { param: { subscriptionId: string } } & { json: SubscriptionAddonCreate }
            output: UnexpectedProblemResponse
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { subscriptionId: string } }
            output: SubscriptionAddon[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { subscriptionId: string } }
            output: BadRequestProblemResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { subscriptionId: string } }
            output: UnauthorizedProblemResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { subscriptionId: string } }
            output: ForbiddenProblemResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { subscriptionId: string } }
            output: NotFoundProblemResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { subscriptionId: string } }
            output: PreconditionFailedProblemResponse
            outputFormat: 'json'
            status: 412
          }
        | {
            input: { param: { subscriptionId: string } }
            output: InternalServerErrorProblemResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { subscriptionId: string } }
            output: ServiceUnavailableProblemResponse
            outputFormat: 'json'
            status: 503
          }
        | {
            input: { param: { subscriptionId: string } }
            output: UnexpectedProblemResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/subscriptions/:subscriptionId/addons/:subscriptionAddonId': {
      $get:
        | {
            input: { param: { subscriptionId: string; subscriptionAddonId: string } }
            output: SubscriptionAddon
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { subscriptionId: string; subscriptionAddonId: string } }
            output: BadRequestProblemResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { subscriptionId: string; subscriptionAddonId: string } }
            output: UnauthorizedProblemResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { subscriptionId: string; subscriptionAddonId: string } }
            output: ForbiddenProblemResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { subscriptionId: string; subscriptionAddonId: string } }
            output: NotFoundProblemResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { subscriptionId: string; subscriptionAddonId: string } }
            output: PreconditionFailedProblemResponse
            outputFormat: 'json'
            status: 412
          }
        | {
            input: { param: { subscriptionId: string; subscriptionAddonId: string } }
            output: InternalServerErrorProblemResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { subscriptionId: string; subscriptionAddonId: string } }
            output: ServiceUnavailableProblemResponse
            outputFormat: 'json'
            status: 503
          }
        | {
            input: { param: { subscriptionId: string; subscriptionAddonId: string } }
            output: UnexpectedProblemResponse
            outputFormat: 'json'
            status: 200
          }
      $patch:
        | {
            input: { param: { subscriptionId: string; subscriptionAddonId: string } } & {
              json: SubscriptionAddonUpdate
            }
            output: SubscriptionAddon
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { subscriptionId: string; subscriptionAddonId: string } } & {
              json: SubscriptionAddonUpdate
            }
            output: BadRequestProblemResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { subscriptionId: string; subscriptionAddonId: string } } & {
              json: SubscriptionAddonUpdate
            }
            output: UnauthorizedProblemResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { subscriptionId: string; subscriptionAddonId: string } } & {
              json: SubscriptionAddonUpdate
            }
            output: ForbiddenProblemResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { subscriptionId: string; subscriptionAddonId: string } } & {
              json: SubscriptionAddonUpdate
            }
            output: NotFoundProblemResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { subscriptionId: string; subscriptionAddonId: string } } & {
              json: SubscriptionAddonUpdate
            }
            output: PreconditionFailedProblemResponse
            outputFormat: 'json'
            status: 412
          }
        | {
            input: { param: { subscriptionId: string; subscriptionAddonId: string } } & {
              json: SubscriptionAddonUpdate
            }
            output: InternalServerErrorProblemResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { subscriptionId: string; subscriptionAddonId: string } } & {
              json: SubscriptionAddonUpdate
            }
            output: ServiceUnavailableProblemResponse
            outputFormat: 'json'
            status: 503
          }
        | {
            input: { param: { subscriptionId: string; subscriptionAddonId: string } } & {
              json: SubscriptionAddonUpdate
            }
            output: UnexpectedProblemResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/subscriptions/:subscriptionId/cancel': {
      $post:
        | {
            input: { param: { subscriptionId: string } } & { json: { timing?: {} | undefined } }
            output: Subscription
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { subscriptionId: string } } & { json: { timing?: {} | undefined } }
            output: SubscriptionBadRequestErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { subscriptionId: string } } & { json: { timing?: {} | undefined } }
            output: UnauthorizedProblemResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { subscriptionId: string } } & { json: { timing?: {} | undefined } }
            output: ForbiddenProblemResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { subscriptionId: string } } & { json: { timing?: {} | undefined } }
            output: NotFoundProblemResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { subscriptionId: string } } & { json: { timing?: {} | undefined } }
            output: SubscriptionConflictErrorResponse
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { subscriptionId: string } } & { json: { timing?: {} | undefined } }
            output: PreconditionFailedProblemResponse
            outputFormat: 'json'
            status: 412
          }
        | {
            input: { param: { subscriptionId: string } } & { json: { timing?: {} | undefined } }
            output: InternalServerErrorProblemResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { subscriptionId: string } } & { json: { timing?: {} | undefined } }
            output: ServiceUnavailableProblemResponse
            outputFormat: 'json'
            status: 503
          }
        | {
            input: { param: { subscriptionId: string } } & { json: { timing?: {} | undefined } }
            output: UnexpectedProblemResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/subscriptions/:subscriptionId/change': {
      $post:
        | {
            input: { param: { subscriptionId: string } } & { json: SubscriptionChange }
            output: SubscriptionChangeResponseBody
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { subscriptionId: string } } & { json: SubscriptionChange }
            output: SubscriptionBadRequestErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { subscriptionId: string } } & { json: SubscriptionChange }
            output: UnauthorizedProblemResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { subscriptionId: string } } & { json: SubscriptionChange }
            output: ForbiddenProblemResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { subscriptionId: string } } & { json: SubscriptionChange }
            output: NotFoundProblemResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { subscriptionId: string } } & { json: SubscriptionChange }
            output: SubscriptionConflictErrorResponse
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { subscriptionId: string } } & { json: SubscriptionChange }
            output: PreconditionFailedProblemResponse
            outputFormat: 'json'
            status: 412
          }
        | {
            input: { param: { subscriptionId: string } } & { json: SubscriptionChange }
            output: InternalServerErrorProblemResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { subscriptionId: string } } & { json: SubscriptionChange }
            output: ServiceUnavailableProblemResponse
            outputFormat: 'json'
            status: 503
          }
        | {
            input: { param: { subscriptionId: string } } & { json: SubscriptionChange }
            output: UnexpectedProblemResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/subscriptions/:subscriptionId/migrate': {
      $post:
        | {
            input: { param: { subscriptionId: string } } & {
              json: {
                timing?: {} | undefined
                targetVersion?: number | undefined
                startingPhase?: string | undefined
                billingAnchor?: string | undefined
              }
            }
            output: SubscriptionChangeResponseBody
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { subscriptionId: string } } & {
              json: {
                timing?: {} | undefined
                targetVersion?: number | undefined
                startingPhase?: string | undefined
                billingAnchor?: string | undefined
              }
            }
            output: SubscriptionBadRequestErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { subscriptionId: string } } & {
              json: {
                timing?: {} | undefined
                targetVersion?: number | undefined
                startingPhase?: string | undefined
                billingAnchor?: string | undefined
              }
            }
            output: UnauthorizedProblemResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { subscriptionId: string } } & {
              json: {
                timing?: {} | undefined
                targetVersion?: number | undefined
                startingPhase?: string | undefined
                billingAnchor?: string | undefined
              }
            }
            output: ForbiddenProblemResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { subscriptionId: string } } & {
              json: {
                timing?: {} | undefined
                targetVersion?: number | undefined
                startingPhase?: string | undefined
                billingAnchor?: string | undefined
              }
            }
            output: NotFoundProblemResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { subscriptionId: string } } & {
              json: {
                timing?: {} | undefined
                targetVersion?: number | undefined
                startingPhase?: string | undefined
                billingAnchor?: string | undefined
              }
            }
            output: SubscriptionConflictErrorResponse
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { subscriptionId: string } } & {
              json: {
                timing?: {} | undefined
                targetVersion?: number | undefined
                startingPhase?: string | undefined
                billingAnchor?: string | undefined
              }
            }
            output: PreconditionFailedProblemResponse
            outputFormat: 'json'
            status: 412
          }
        | {
            input: { param: { subscriptionId: string } } & {
              json: {
                timing?: {} | undefined
                targetVersion?: number | undefined
                startingPhase?: string | undefined
                billingAnchor?: string | undefined
              }
            }
            output: InternalServerErrorProblemResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { subscriptionId: string } } & {
              json: {
                timing?: {} | undefined
                targetVersion?: number | undefined
                startingPhase?: string | undefined
                billingAnchor?: string | undefined
              }
            }
            output: ServiceUnavailableProblemResponse
            outputFormat: 'json'
            status: 503
          }
        | {
            input: { param: { subscriptionId: string } } & {
              json: {
                timing?: {} | undefined
                targetVersion?: number | undefined
                startingPhase?: string | undefined
                billingAnchor?: string | undefined
              }
            }
            output: UnexpectedProblemResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/subscriptions/:subscriptionId/restore': {
      $post:
        | {
            input: { param: { subscriptionId: string } }
            output: Subscription
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { subscriptionId: string } }
            output: BadRequestProblemResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { subscriptionId: string } }
            output: UnauthorizedProblemResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { subscriptionId: string } }
            output: ForbiddenProblemResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { subscriptionId: string } }
            output: NotFoundProblemResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { subscriptionId: string } }
            output: PreconditionFailedProblemResponse
            outputFormat: 'json'
            status: 412
          }
        | {
            input: { param: { subscriptionId: string } }
            output: InternalServerErrorProblemResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { subscriptionId: string } }
            output: ServiceUnavailableProblemResponse
            outputFormat: 'json'
            status: 503
          }
        | {
            input: { param: { subscriptionId: string } }
            output: UnexpectedProblemResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/subscriptions/:subscriptionId/unschedule-cancelation': {
      $post:
        | {
            input: { param: { subscriptionId: string } }
            output: Subscription
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { subscriptionId: string } }
            output: SubscriptionBadRequestErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { subscriptionId: string } }
            output: UnauthorizedProblemResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { subscriptionId: string } }
            output: ForbiddenProblemResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { subscriptionId: string } }
            output: NotFoundProblemResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { subscriptionId: string } }
            output: SubscriptionConflictErrorResponse
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { subscriptionId: string } }
            output: PreconditionFailedProblemResponse
            outputFormat: 'json'
            status: 412
          }
        | {
            input: { param: { subscriptionId: string } }
            output: InternalServerErrorProblemResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { subscriptionId: string } }
            output: ServiceUnavailableProblemResponse
            outputFormat: 'json'
            status: 503
          }
        | {
            input: { param: { subscriptionId: string } }
            output: UnexpectedProblemResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v2/customers/:customerIdOrKey/entitlements': {
      $post:
        | {
            input: { param: { customerIdOrKey: ULIDOrExternalKey } } & {
              json: EntitlementV2CreateInputs
            }
            output: EntitlementV2
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { customerIdOrKey: ULIDOrExternalKey } } & {
              json: EntitlementV2CreateInputs
            }
            output: BadRequestProblemResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { customerIdOrKey: ULIDOrExternalKey } } & {
              json: EntitlementV2CreateInputs
            }
            output: UnauthorizedProblemResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { customerIdOrKey: ULIDOrExternalKey } } & {
              json: EntitlementV2CreateInputs
            }
            output: ForbiddenProblemResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { customerIdOrKey: ULIDOrExternalKey } } & {
              json: EntitlementV2CreateInputs
            }
            output: ConflictProblemResponse
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { customerIdOrKey: ULIDOrExternalKey } } & {
              json: EntitlementV2CreateInputs
            }
            output: PreconditionFailedProblemResponse
            outputFormat: 'json'
            status: 412
          }
        | {
            input: { param: { customerIdOrKey: ULIDOrExternalKey } } & {
              json: EntitlementV2CreateInputs
            }
            output: InternalServerErrorProblemResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { customerIdOrKey: ULIDOrExternalKey } } & {
              json: EntitlementV2CreateInputs
            }
            output: ServiceUnavailableProblemResponse
            outputFormat: 'json'
            status: 503
          }
        | {
            input: { param: { customerIdOrKey: ULIDOrExternalKey } } & {
              json: EntitlementV2CreateInputs
            }
            output: UnexpectedProblemResponse
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { customerIdOrKey: ULIDOrExternalKey } } & {
              query: {
                includeDeleted?: boolean | undefined
                page?: number | undefined
                pageSize?: number | undefined
                order?: {} | undefined
                orderBy?: EntitlementOrderBy | undefined
              }
            }
            output: EntitlementV2PaginatedResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { customerIdOrKey: ULIDOrExternalKey } } & {
              query: {
                includeDeleted?: boolean | undefined
                page?: number | undefined
                pageSize?: number | undefined
                order?: {} | undefined
                orderBy?: EntitlementOrderBy | undefined
              }
            }
            output: BadRequestProblemResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { customerIdOrKey: ULIDOrExternalKey } } & {
              query: {
                includeDeleted?: boolean | undefined
                page?: number | undefined
                pageSize?: number | undefined
                order?: {} | undefined
                orderBy?: EntitlementOrderBy | undefined
              }
            }
            output: UnauthorizedProblemResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { customerIdOrKey: ULIDOrExternalKey } } & {
              query: {
                includeDeleted?: boolean | undefined
                page?: number | undefined
                pageSize?: number | undefined
                order?: {} | undefined
                orderBy?: EntitlementOrderBy | undefined
              }
            }
            output: ForbiddenProblemResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { customerIdOrKey: ULIDOrExternalKey } } & {
              query: {
                includeDeleted?: boolean | undefined
                page?: number | undefined
                pageSize?: number | undefined
                order?: {} | undefined
                orderBy?: EntitlementOrderBy | undefined
              }
            }
            output: PreconditionFailedProblemResponse
            outputFormat: 'json'
            status: 412
          }
        | {
            input: { param: { customerIdOrKey: ULIDOrExternalKey } } & {
              query: {
                includeDeleted?: boolean | undefined
                page?: number | undefined
                pageSize?: number | undefined
                order?: {} | undefined
                orderBy?: EntitlementOrderBy | undefined
              }
            }
            output: InternalServerErrorProblemResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { customerIdOrKey: ULIDOrExternalKey } } & {
              query: {
                includeDeleted?: boolean | undefined
                page?: number | undefined
                pageSize?: number | undefined
                order?: {} | undefined
                orderBy?: EntitlementOrderBy | undefined
              }
            }
            output: ServiceUnavailableProblemResponse
            outputFormat: 'json'
            status: 503
          }
        | {
            input: { param: { customerIdOrKey: ULIDOrExternalKey } } & {
              query: {
                includeDeleted?: boolean | undefined
                page?: number | undefined
                pageSize?: number | undefined
                order?: {} | undefined
                orderBy?: EntitlementOrderBy | undefined
              }
            }
            output: UnexpectedProblemResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v2/customers/:customerIdOrKey/entitlements/:entitlementIdOrFeatureKey': {
      $get:
        | {
            input: {
              param: { customerIdOrKey: ULIDOrExternalKey; entitlementIdOrFeatureKey: string }
            }
            output: EntitlementV2
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: { customerIdOrKey: ULIDOrExternalKey; entitlementIdOrFeatureKey: string }
            }
            output: BadRequestProblemResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              param: { customerIdOrKey: ULIDOrExternalKey; entitlementIdOrFeatureKey: string }
            }
            output: UnauthorizedProblemResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              param: { customerIdOrKey: ULIDOrExternalKey; entitlementIdOrFeatureKey: string }
            }
            output: ForbiddenProblemResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              param: { customerIdOrKey: ULIDOrExternalKey; entitlementIdOrFeatureKey: string }
            }
            output: NotFoundProblemResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              param: { customerIdOrKey: ULIDOrExternalKey; entitlementIdOrFeatureKey: string }
            }
            output: PreconditionFailedProblemResponse
            outputFormat: 'json'
            status: 412
          }
        | {
            input: {
              param: { customerIdOrKey: ULIDOrExternalKey; entitlementIdOrFeatureKey: string }
            }
            output: InternalServerErrorProblemResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              param: { customerIdOrKey: ULIDOrExternalKey; entitlementIdOrFeatureKey: string }
            }
            output: ServiceUnavailableProblemResponse
            outputFormat: 'json'
            status: 503
          }
        | {
            input: {
              param: { customerIdOrKey: ULIDOrExternalKey; entitlementIdOrFeatureKey: string }
            }
            output: UnexpectedProblemResponse
            outputFormat: 'json'
            status: 200
          }
      $delete:
        | {
            input: {
              param: { customerIdOrKey: ULIDOrExternalKey; entitlementIdOrFeatureKey: string }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: {
              param: { customerIdOrKey: ULIDOrExternalKey; entitlementIdOrFeatureKey: string }
            }
            output: BadRequestProblemResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              param: { customerIdOrKey: ULIDOrExternalKey; entitlementIdOrFeatureKey: string }
            }
            output: UnauthorizedProblemResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              param: { customerIdOrKey: ULIDOrExternalKey; entitlementIdOrFeatureKey: string }
            }
            output: ForbiddenProblemResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              param: { customerIdOrKey: ULIDOrExternalKey; entitlementIdOrFeatureKey: string }
            }
            output: NotFoundProblemResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              param: { customerIdOrKey: ULIDOrExternalKey; entitlementIdOrFeatureKey: string }
            }
            output: PreconditionFailedProblemResponse
            outputFormat: 'json'
            status: 412
          }
        | {
            input: {
              param: { customerIdOrKey: ULIDOrExternalKey; entitlementIdOrFeatureKey: string }
            }
            output: InternalServerErrorProblemResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              param: { customerIdOrKey: ULIDOrExternalKey; entitlementIdOrFeatureKey: string }
            }
            output: ServiceUnavailableProblemResponse
            outputFormat: 'json'
            status: 503
          }
        | {
            input: {
              param: { customerIdOrKey: ULIDOrExternalKey; entitlementIdOrFeatureKey: string }
            }
            output: UnexpectedProblemResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v2/customers/:customerIdOrKey/entitlements/:entitlementIdOrFeatureKey/grants': {
      $get:
        | {
            input: {
              param: { customerIdOrKey: ULIDOrExternalKey; entitlementIdOrFeatureKey: string }
            } & {
              query: {
                includeDeleted?: boolean | undefined
                page?: number | undefined
                pageSize?: number | undefined
                offset?: number | undefined
                limit?: number | undefined
                order?: {} | undefined
                orderBy?: GrantOrderBy | undefined
              }
            }
            output: GrantV2PaginatedResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: { customerIdOrKey: ULIDOrExternalKey; entitlementIdOrFeatureKey: string }
            } & {
              query: {
                includeDeleted?: boolean | undefined
                page?: number | undefined
                pageSize?: number | undefined
                offset?: number | undefined
                limit?: number | undefined
                order?: {} | undefined
                orderBy?: GrantOrderBy | undefined
              }
            }
            output: BadRequestProblemResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              param: { customerIdOrKey: ULIDOrExternalKey; entitlementIdOrFeatureKey: string }
            } & {
              query: {
                includeDeleted?: boolean | undefined
                page?: number | undefined
                pageSize?: number | undefined
                offset?: number | undefined
                limit?: number | undefined
                order?: {} | undefined
                orderBy?: GrantOrderBy | undefined
              }
            }
            output: UnauthorizedProblemResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              param: { customerIdOrKey: ULIDOrExternalKey; entitlementIdOrFeatureKey: string }
            } & {
              query: {
                includeDeleted?: boolean | undefined
                page?: number | undefined
                pageSize?: number | undefined
                offset?: number | undefined
                limit?: number | undefined
                order?: {} | undefined
                orderBy?: GrantOrderBy | undefined
              }
            }
            output: ForbiddenProblemResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              param: { customerIdOrKey: ULIDOrExternalKey; entitlementIdOrFeatureKey: string }
            } & {
              query: {
                includeDeleted?: boolean | undefined
                page?: number | undefined
                pageSize?: number | undefined
                offset?: number | undefined
                limit?: number | undefined
                order?: {} | undefined
                orderBy?: GrantOrderBy | undefined
              }
            }
            output: PreconditionFailedProblemResponse
            outputFormat: 'json'
            status: 412
          }
        | {
            input: {
              param: { customerIdOrKey: ULIDOrExternalKey; entitlementIdOrFeatureKey: string }
            } & {
              query: {
                includeDeleted?: boolean | undefined
                page?: number | undefined
                pageSize?: number | undefined
                offset?: number | undefined
                limit?: number | undefined
                order?: {} | undefined
                orderBy?: GrantOrderBy | undefined
              }
            }
            output: InternalServerErrorProblemResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              param: { customerIdOrKey: ULIDOrExternalKey; entitlementIdOrFeatureKey: string }
            } & {
              query: {
                includeDeleted?: boolean | undefined
                page?: number | undefined
                pageSize?: number | undefined
                offset?: number | undefined
                limit?: number | undefined
                order?: {} | undefined
                orderBy?: GrantOrderBy | undefined
              }
            }
            output: ServiceUnavailableProblemResponse
            outputFormat: 'json'
            status: 503
          }
        | {
            input: {
              param: { customerIdOrKey: ULIDOrExternalKey; entitlementIdOrFeatureKey: string }
            } & {
              query: {
                includeDeleted?: boolean | undefined
                page?: number | undefined
                pageSize?: number | undefined
                offset?: number | undefined
                limit?: number | undefined
                order?: {} | undefined
                orderBy?: GrantOrderBy | undefined
              }
            }
            output: UnexpectedProblemResponse
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: {
              param: { customerIdOrKey: ULIDOrExternalKey; entitlementIdOrFeatureKey: string }
            } & { json: EntitlementGrantCreateInputV2 }
            output: EntitlementGrantV2
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              param: { customerIdOrKey: ULIDOrExternalKey; entitlementIdOrFeatureKey: string }
            } & { json: EntitlementGrantCreateInputV2 }
            output: BadRequestProblemResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              param: { customerIdOrKey: ULIDOrExternalKey; entitlementIdOrFeatureKey: string }
            } & { json: EntitlementGrantCreateInputV2 }
            output: UnauthorizedProblemResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              param: { customerIdOrKey: ULIDOrExternalKey; entitlementIdOrFeatureKey: string }
            } & { json: EntitlementGrantCreateInputV2 }
            output: ForbiddenProblemResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              param: { customerIdOrKey: ULIDOrExternalKey; entitlementIdOrFeatureKey: string }
            } & { json: EntitlementGrantCreateInputV2 }
            output: ConflictProblemResponse
            outputFormat: 'json'
            status: 409
          }
        | {
            input: {
              param: { customerIdOrKey: ULIDOrExternalKey; entitlementIdOrFeatureKey: string }
            } & { json: EntitlementGrantCreateInputV2 }
            output: PreconditionFailedProblemResponse
            outputFormat: 'json'
            status: 412
          }
        | {
            input: {
              param: { customerIdOrKey: ULIDOrExternalKey; entitlementIdOrFeatureKey: string }
            } & { json: EntitlementGrantCreateInputV2 }
            output: InternalServerErrorProblemResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              param: { customerIdOrKey: ULIDOrExternalKey; entitlementIdOrFeatureKey: string }
            } & { json: EntitlementGrantCreateInputV2 }
            output: ServiceUnavailableProblemResponse
            outputFormat: 'json'
            status: 503
          }
        | {
            input: {
              param: { customerIdOrKey: ULIDOrExternalKey; entitlementIdOrFeatureKey: string }
            } & { json: EntitlementGrantCreateInputV2 }
            output: UnexpectedProblemResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v2/customers/:customerIdOrKey/entitlements/:entitlementIdOrFeatureKey/history': {
      $get:
        | {
            input: {
              param: { customerIdOrKey: ULIDOrExternalKey; entitlementIdOrFeatureKey: string }
            } & {
              query: {
                from?: string | undefined
                to?: string | undefined
                windowSize: WindowSize
                windowTimeZone?: string | undefined
              }
            }
            output: WindowedBalanceHistory
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: { customerIdOrKey: ULIDOrExternalKey; entitlementIdOrFeatureKey: string }
            } & {
              query: {
                from?: string | undefined
                to?: string | undefined
                windowSize: WindowSize
                windowTimeZone?: string | undefined
              }
            }
            output: BadRequestProblemResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              param: { customerIdOrKey: ULIDOrExternalKey; entitlementIdOrFeatureKey: string }
            } & {
              query: {
                from?: string | undefined
                to?: string | undefined
                windowSize: WindowSize
                windowTimeZone?: string | undefined
              }
            }
            output: UnauthorizedProblemResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              param: { customerIdOrKey: ULIDOrExternalKey; entitlementIdOrFeatureKey: string }
            } & {
              query: {
                from?: string | undefined
                to?: string | undefined
                windowSize: WindowSize
                windowTimeZone?: string | undefined
              }
            }
            output: ForbiddenProblemResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              param: { customerIdOrKey: ULIDOrExternalKey; entitlementIdOrFeatureKey: string }
            } & {
              query: {
                from?: string | undefined
                to?: string | undefined
                windowSize: WindowSize
                windowTimeZone?: string | undefined
              }
            }
            output: NotFoundProblemResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              param: { customerIdOrKey: ULIDOrExternalKey; entitlementIdOrFeatureKey: string }
            } & {
              query: {
                from?: string | undefined
                to?: string | undefined
                windowSize: WindowSize
                windowTimeZone?: string | undefined
              }
            }
            output: PreconditionFailedProblemResponse
            outputFormat: 'json'
            status: 412
          }
        | {
            input: {
              param: { customerIdOrKey: ULIDOrExternalKey; entitlementIdOrFeatureKey: string }
            } & {
              query: {
                from?: string | undefined
                to?: string | undefined
                windowSize: WindowSize
                windowTimeZone?: string | undefined
              }
            }
            output: InternalServerErrorProblemResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              param: { customerIdOrKey: ULIDOrExternalKey; entitlementIdOrFeatureKey: string }
            } & {
              query: {
                from?: string | undefined
                to?: string | undefined
                windowSize: WindowSize
                windowTimeZone?: string | undefined
              }
            }
            output: ServiceUnavailableProblemResponse
            outputFormat: 'json'
            status: 503
          }
        | {
            input: {
              param: { customerIdOrKey: ULIDOrExternalKey; entitlementIdOrFeatureKey: string }
            } & {
              query: {
                from?: string | undefined
                to?: string | undefined
                windowSize: WindowSize
                windowTimeZone?: string | undefined
              }
            }
            output: UnexpectedProblemResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v2/customers/:customerIdOrKey/entitlements/:entitlementIdOrFeatureKey/override': {
      $put:
        | {
            input: {
              param: {
                customerIdOrKey: ULIDOrExternalKey
                entitlementIdOrFeatureKey: ULIDOrExternalKey
              }
            } & { json: EntitlementV2CreateInputs }
            output: EntitlementV2
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              param: {
                customerIdOrKey: ULIDOrExternalKey
                entitlementIdOrFeatureKey: ULIDOrExternalKey
              }
            } & { json: EntitlementV2CreateInputs }
            output: BadRequestProblemResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              param: {
                customerIdOrKey: ULIDOrExternalKey
                entitlementIdOrFeatureKey: ULIDOrExternalKey
              }
            } & { json: EntitlementV2CreateInputs }
            output: UnauthorizedProblemResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              param: {
                customerIdOrKey: ULIDOrExternalKey
                entitlementIdOrFeatureKey: ULIDOrExternalKey
              }
            } & { json: EntitlementV2CreateInputs }
            output: ForbiddenProblemResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              param: {
                customerIdOrKey: ULIDOrExternalKey
                entitlementIdOrFeatureKey: ULIDOrExternalKey
              }
            } & { json: EntitlementV2CreateInputs }
            output: NotFoundProblemResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              param: {
                customerIdOrKey: ULIDOrExternalKey
                entitlementIdOrFeatureKey: ULIDOrExternalKey
              }
            } & { json: EntitlementV2CreateInputs }
            output: ConflictProblemResponse
            outputFormat: 'json'
            status: 409
          }
        | {
            input: {
              param: {
                customerIdOrKey: ULIDOrExternalKey
                entitlementIdOrFeatureKey: ULIDOrExternalKey
              }
            } & { json: EntitlementV2CreateInputs }
            output: PreconditionFailedProblemResponse
            outputFormat: 'json'
            status: 412
          }
        | {
            input: {
              param: {
                customerIdOrKey: ULIDOrExternalKey
                entitlementIdOrFeatureKey: ULIDOrExternalKey
              }
            } & { json: EntitlementV2CreateInputs }
            output: InternalServerErrorProblemResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              param: {
                customerIdOrKey: ULIDOrExternalKey
                entitlementIdOrFeatureKey: ULIDOrExternalKey
              }
            } & { json: EntitlementV2CreateInputs }
            output: ServiceUnavailableProblemResponse
            outputFormat: 'json'
            status: 503
          }
        | {
            input: {
              param: {
                customerIdOrKey: ULIDOrExternalKey
                entitlementIdOrFeatureKey: ULIDOrExternalKey
              }
            } & { json: EntitlementV2CreateInputs }
            output: UnexpectedProblemResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v2/customers/:customerIdOrKey/entitlements/:entitlementIdOrFeatureKey/reset': {
      $post:
        | {
            input: {
              param: { customerIdOrKey: ULIDOrExternalKey; entitlementIdOrFeatureKey: string }
            } & { json: ResetEntitlementUsageInput }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: {
              param: { customerIdOrKey: ULIDOrExternalKey; entitlementIdOrFeatureKey: string }
            } & { json: ResetEntitlementUsageInput }
            output: BadRequestProblemResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              param: { customerIdOrKey: ULIDOrExternalKey; entitlementIdOrFeatureKey: string }
            } & { json: ResetEntitlementUsageInput }
            output: UnauthorizedProblemResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              param: { customerIdOrKey: ULIDOrExternalKey; entitlementIdOrFeatureKey: string }
            } & { json: ResetEntitlementUsageInput }
            output: ForbiddenProblemResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              param: { customerIdOrKey: ULIDOrExternalKey; entitlementIdOrFeatureKey: string }
            } & { json: ResetEntitlementUsageInput }
            output: NotFoundProblemResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              param: { customerIdOrKey: ULIDOrExternalKey; entitlementIdOrFeatureKey: string }
            } & { json: ResetEntitlementUsageInput }
            output: PreconditionFailedProblemResponse
            outputFormat: 'json'
            status: 412
          }
        | {
            input: {
              param: { customerIdOrKey: ULIDOrExternalKey; entitlementIdOrFeatureKey: string }
            } & { json: ResetEntitlementUsageInput }
            output: InternalServerErrorProblemResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              param: { customerIdOrKey: ULIDOrExternalKey; entitlementIdOrFeatureKey: string }
            } & { json: ResetEntitlementUsageInput }
            output: ServiceUnavailableProblemResponse
            outputFormat: 'json'
            status: 503
          }
        | {
            input: {
              param: { customerIdOrKey: ULIDOrExternalKey; entitlementIdOrFeatureKey: string }
            } & { json: ResetEntitlementUsageInput }
            output: UnexpectedProblemResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v2/customers/:customerIdOrKey/entitlements/:entitlementIdOrFeatureKey/value': {
      $get:
        | {
            input: {
              param: { customerIdOrKey: ULIDOrExternalKey; entitlementIdOrFeatureKey: string }
            } & { query: { time?: string | undefined } }
            output: EntitlementValueV2
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: { customerIdOrKey: ULIDOrExternalKey; entitlementIdOrFeatureKey: string }
            } & { query: { time?: string | undefined } }
            output: BadRequestProblemResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              param: { customerIdOrKey: ULIDOrExternalKey; entitlementIdOrFeatureKey: string }
            } & { query: { time?: string | undefined } }
            output: UnauthorizedProblemResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              param: { customerIdOrKey: ULIDOrExternalKey; entitlementIdOrFeatureKey: string }
            } & { query: { time?: string | undefined } }
            output: ForbiddenProblemResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              param: { customerIdOrKey: ULIDOrExternalKey; entitlementIdOrFeatureKey: string }
            } & { query: { time?: string | undefined } }
            output: NotFoundProblemResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              param: { customerIdOrKey: ULIDOrExternalKey; entitlementIdOrFeatureKey: string }
            } & { query: { time?: string | undefined } }
            output: PreconditionFailedProblemResponse
            outputFormat: 'json'
            status: 412
          }
        | {
            input: {
              param: { customerIdOrKey: ULIDOrExternalKey; entitlementIdOrFeatureKey: string }
            } & { query: { time?: string | undefined } }
            output: InternalServerErrorProblemResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              param: { customerIdOrKey: ULIDOrExternalKey; entitlementIdOrFeatureKey: string }
            } & { query: { time?: string | undefined } }
            output: ServiceUnavailableProblemResponse
            outputFormat: 'json'
            status: 503
          }
        | {
            input: {
              param: { customerIdOrKey: ULIDOrExternalKey; entitlementIdOrFeatureKey: string }
            } & { query: { time?: string | undefined } }
            output: UnexpectedProblemResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v2/entitlements': {
      $get:
        | {
            input: {
              query: {
                feature?: string[] | undefined
                customerKeys?: string[] | undefined
                customerIds?: string[] | undefined
                entitlementType?: EntitlementType[] | undefined
                excludeInactive?: boolean | undefined
                page?: number | undefined
                pageSize?: number | undefined
                offset?: number | undefined
                limit?: number | undefined
                order?: {} | undefined
                orderBy?: EntitlementOrderBy | undefined
              }
            }
            output: EntitlementV2PaginatedResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                feature?: string[] | undefined
                customerKeys?: string[] | undefined
                customerIds?: string[] | undefined
                entitlementType?: EntitlementType[] | undefined
                excludeInactive?: boolean | undefined
                page?: number | undefined
                pageSize?: number | undefined
                offset?: number | undefined
                limit?: number | undefined
                order?: {} | undefined
                orderBy?: EntitlementOrderBy | undefined
              }
            }
            output: BadRequestProblemResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                feature?: string[] | undefined
                customerKeys?: string[] | undefined
                customerIds?: string[] | undefined
                entitlementType?: EntitlementType[] | undefined
                excludeInactive?: boolean | undefined
                page?: number | undefined
                pageSize?: number | undefined
                offset?: number | undefined
                limit?: number | undefined
                order?: {} | undefined
                orderBy?: EntitlementOrderBy | undefined
              }
            }
            output: UnauthorizedProblemResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                feature?: string[] | undefined
                customerKeys?: string[] | undefined
                customerIds?: string[] | undefined
                entitlementType?: EntitlementType[] | undefined
                excludeInactive?: boolean | undefined
                page?: number | undefined
                pageSize?: number | undefined
                offset?: number | undefined
                limit?: number | undefined
                order?: {} | undefined
                orderBy?: EntitlementOrderBy | undefined
              }
            }
            output: ForbiddenProblemResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                feature?: string[] | undefined
                customerKeys?: string[] | undefined
                customerIds?: string[] | undefined
                entitlementType?: EntitlementType[] | undefined
                excludeInactive?: boolean | undefined
                page?: number | undefined
                pageSize?: number | undefined
                offset?: number | undefined
                limit?: number | undefined
                order?: {} | undefined
                orderBy?: EntitlementOrderBy | undefined
              }
            }
            output: PreconditionFailedProblemResponse
            outputFormat: 'json'
            status: 412
          }
        | {
            input: {
              query: {
                feature?: string[] | undefined
                customerKeys?: string[] | undefined
                customerIds?: string[] | undefined
                entitlementType?: EntitlementType[] | undefined
                excludeInactive?: boolean | undefined
                page?: number | undefined
                pageSize?: number | undefined
                offset?: number | undefined
                limit?: number | undefined
                order?: {} | undefined
                orderBy?: EntitlementOrderBy | undefined
              }
            }
            output: InternalServerErrorProblemResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              query: {
                feature?: string[] | undefined
                customerKeys?: string[] | undefined
                customerIds?: string[] | undefined
                entitlementType?: EntitlementType[] | undefined
                excludeInactive?: boolean | undefined
                page?: number | undefined
                pageSize?: number | undefined
                offset?: number | undefined
                limit?: number | undefined
                order?: {} | undefined
                orderBy?: EntitlementOrderBy | undefined
              }
            }
            output: ServiceUnavailableProblemResponse
            outputFormat: 'json'
            status: 503
          }
        | {
            input: {
              query: {
                feature?: string[] | undefined
                customerKeys?: string[] | undefined
                customerIds?: string[] | undefined
                entitlementType?: EntitlementType[] | undefined
                excludeInactive?: boolean | undefined
                page?: number | undefined
                pageSize?: number | undefined
                offset?: number | undefined
                limit?: number | undefined
                order?: {} | undefined
                orderBy?: EntitlementOrderBy | undefined
              }
            }
            output: UnexpectedProblemResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v2/entitlements/:entitlementId': {
      $get:
        | {
            input: { param: { entitlementId: string } }
            output: EntitlementV2
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { entitlementId: string } }
            output: BadRequestProblemResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { entitlementId: string } }
            output: UnauthorizedProblemResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { entitlementId: string } }
            output: ForbiddenProblemResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { entitlementId: string } }
            output: NotFoundProblemResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { entitlementId: string } }
            output: PreconditionFailedProblemResponse
            outputFormat: 'json'
            status: 412
          }
        | {
            input: { param: { entitlementId: string } }
            output: InternalServerErrorProblemResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { entitlementId: string } }
            output: ServiceUnavailableProblemResponse
            outputFormat: 'json'
            status: 503
          }
        | {
            input: { param: { entitlementId: string } }
            output: UnexpectedProblemResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v2/events': {
      $get:
        | {
            input: {
              query: {
                cursor?: string | undefined
                limit?: number | undefined
                clientId?: string | undefined
                filter?:
                  | {
                      id?: FilterString | undefined
                      source?: FilterString | undefined
                      subject?: FilterString | undefined
                      customerId?: FilterIDExact | undefined
                      type?: FilterString | undefined
                      time?: FilterTime | undefined
                      ingestedAt?: FilterTime | undefined
                    }
                  | undefined
              }
            }
            output: IngestedEventCursorPaginatedResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                cursor?: string | undefined
                limit?: number | undefined
                clientId?: string | undefined
                filter?:
                  | {
                      id?: FilterString | undefined
                      source?: FilterString | undefined
                      subject?: FilterString | undefined
                      customerId?: FilterIDExact | undefined
                      type?: FilterString | undefined
                      time?: FilterTime | undefined
                      ingestedAt?: FilterTime | undefined
                    }
                  | undefined
              }
            }
            output: BadRequestProblemResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                cursor?: string | undefined
                limit?: number | undefined
                clientId?: string | undefined
                filter?:
                  | {
                      id?: FilterString | undefined
                      source?: FilterString | undefined
                      subject?: FilterString | undefined
                      customerId?: FilterIDExact | undefined
                      type?: FilterString | undefined
                      time?: FilterTime | undefined
                      ingestedAt?: FilterTime | undefined
                    }
                  | undefined
              }
            }
            output: UnauthorizedProblemResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                cursor?: string | undefined
                limit?: number | undefined
                clientId?: string | undefined
                filter?:
                  | {
                      id?: FilterString | undefined
                      source?: FilterString | undefined
                      subject?: FilterString | undefined
                      customerId?: FilterIDExact | undefined
                      type?: FilterString | undefined
                      time?: FilterTime | undefined
                      ingestedAt?: FilterTime | undefined
                    }
                  | undefined
              }
            }
            output: ForbiddenProblemResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                cursor?: string | undefined
                limit?: number | undefined
                clientId?: string | undefined
                filter?:
                  | {
                      id?: FilterString | undefined
                      source?: FilterString | undefined
                      subject?: FilterString | undefined
                      customerId?: FilterIDExact | undefined
                      type?: FilterString | undefined
                      time?: FilterTime | undefined
                      ingestedAt?: FilterTime | undefined
                    }
                  | undefined
              }
            }
            output: PreconditionFailedProblemResponse
            outputFormat: 'json'
            status: 412
          }
        | {
            input: {
              query: {
                cursor?: string | undefined
                limit?: number | undefined
                clientId?: string | undefined
                filter?:
                  | {
                      id?: FilterString | undefined
                      source?: FilterString | undefined
                      subject?: FilterString | undefined
                      customerId?: FilterIDExact | undefined
                      type?: FilterString | undefined
                      time?: FilterTime | undefined
                      ingestedAt?: FilterTime | undefined
                    }
                  | undefined
              }
            }
            output: InternalServerErrorProblemResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              query: {
                cursor?: string | undefined
                limit?: number | undefined
                clientId?: string | undefined
                filter?:
                  | {
                      id?: FilterString | undefined
                      source?: FilterString | undefined
                      subject?: FilterString | undefined
                      customerId?: FilterIDExact | undefined
                      type?: FilterString | undefined
                      time?: FilterTime | undefined
                      ingestedAt?: FilterTime | undefined
                    }
                  | undefined
              }
            }
            output: ServiceUnavailableProblemResponse
            outputFormat: 'json'
            status: 503
          }
        | {
            input: {
              query: {
                cursor?: string | undefined
                limit?: number | undefined
                clientId?: string | undefined
                filter?:
                  | {
                      id?: FilterString | undefined
                      source?: FilterString | undefined
                      subject?: FilterString | undefined
                      customerId?: FilterIDExact | undefined
                      type?: FilterString | undefined
                      time?: FilterTime | undefined
                      ingestedAt?: FilterTime | undefined
                    }
                  | undefined
              }
            }
            output: UnexpectedProblemResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v2/grants': {
      $get:
        | {
            input: {
              query: {
                feature?: string[] | undefined
                customer?: ULIDOrExternalKey[] | undefined
                includeDeleted?: boolean | undefined
                page?: number | undefined
                pageSize?: number | undefined
                offset?: number | undefined
                limit?: number | undefined
                order?: {} | undefined
                orderBy?: GrantOrderBy | undefined
              }
            }
            output: GrantV2PaginatedResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                feature?: string[] | undefined
                customer?: ULIDOrExternalKey[] | undefined
                includeDeleted?: boolean | undefined
                page?: number | undefined
                pageSize?: number | undefined
                offset?: number | undefined
                limit?: number | undefined
                order?: {} | undefined
                orderBy?: GrantOrderBy | undefined
              }
            }
            output: BadRequestProblemResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                feature?: string[] | undefined
                customer?: ULIDOrExternalKey[] | undefined
                includeDeleted?: boolean | undefined
                page?: number | undefined
                pageSize?: number | undefined
                offset?: number | undefined
                limit?: number | undefined
                order?: {} | undefined
                orderBy?: GrantOrderBy | undefined
              }
            }
            output: UnauthorizedProblemResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                feature?: string[] | undefined
                customer?: ULIDOrExternalKey[] | undefined
                includeDeleted?: boolean | undefined
                page?: number | undefined
                pageSize?: number | undefined
                offset?: number | undefined
                limit?: number | undefined
                order?: {} | undefined
                orderBy?: GrantOrderBy | undefined
              }
            }
            output: ForbiddenProblemResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                feature?: string[] | undefined
                customer?: ULIDOrExternalKey[] | undefined
                includeDeleted?: boolean | undefined
                page?: number | undefined
                pageSize?: number | undefined
                offset?: number | undefined
                limit?: number | undefined
                order?: {} | undefined
                orderBy?: GrantOrderBy | undefined
              }
            }
            output: PreconditionFailedProblemResponse
            outputFormat: 'json'
            status: 412
          }
        | {
            input: {
              query: {
                feature?: string[] | undefined
                customer?: ULIDOrExternalKey[] | undefined
                includeDeleted?: boolean | undefined
                page?: number | undefined
                pageSize?: number | undefined
                offset?: number | undefined
                limit?: number | undefined
                order?: {} | undefined
                orderBy?: GrantOrderBy | undefined
              }
            }
            output: InternalServerErrorProblemResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              query: {
                feature?: string[] | undefined
                customer?: ULIDOrExternalKey[] | undefined
                includeDeleted?: boolean | undefined
                page?: number | undefined
                pageSize?: number | undefined
                offset?: number | undefined
                limit?: number | undefined
                order?: {} | undefined
                orderBy?: GrantOrderBy | undefined
              }
            }
            output: ServiceUnavailableProblemResponse
            outputFormat: 'json'
            status: 503
          }
        | {
            input: {
              query: {
                feature?: string[] | undefined
                customer?: ULIDOrExternalKey[] | undefined
                includeDeleted?: boolean | undefined
                page?: number | undefined
                pageSize?: number | undefined
                offset?: number | undefined
                limit?: number | undefined
                order?: {} | undefined
                orderBy?: GrantOrderBy | undefined
              }
            }
            output: UnexpectedProblemResponse
            outputFormat: 'json'
            status: 200
          }
    }
  },
  '/'
>
export default routes
