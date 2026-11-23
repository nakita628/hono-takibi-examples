type NextPage = { after: string; link?: string | undefined }
type ForwardPaging = { next?: NextPage | undefined }
type FormFieldOption = { description?: string | undefined; label: string; value: string }
type PaymentLinkFormField = {
  description?: string | undefined
  isRequired: boolean
  label: string
  objectType: 'COMPANY' | 'CONTACT'
  options: FormFieldOption[]
  propertyName: string
}
type DealConfigurations = { createNewDealOnPurchase: boolean; pipelineStageId?: string | undefined }
type DiscountResponse = {
  archived?: boolean | undefined
  archivedAt?: string | undefined
  createdAt?: string | undefined
  id: string
  label?: string | undefined
  updatedAt?: string | undefined
  value?: number | undefined
  valueType?: 'FIXED' | 'PERCENT' | undefined
}
type ExpirationSettings = { expirationDate?: string | undefined; maxPurchases?: number | undefined }
type FeeResponse = {
  archived?: boolean | undefined
  archivedAt?: string | undefined
  createdAt?: string | undefined
  id: string
  label?: string | undefined
  updatedAt?: string | undefined
  value?: number | undefined
  valueType?: 'FIXED' | 'PERCENT' | undefined
}
type PriceEntry = { currencyCode: string; maxQuantity?: number | undefined; price: number }
type Pricing = { prices: PriceEntry[]; pricingModel: 'FLAT' | 'GRADUATED' | 'STAIRSTEP' | 'VOLUME' }
type LineItem = {
  acv?: number | undefined
  allowBuyerSelectedQuantity?: boolean | undefined
  amount?: number | undefined
  archived?: boolean | undefined
  archivedAt?: string | undefined
  arr?: number | undefined
  billingCycleAnchorDate?: string | undefined
  billingPeriodEndDate?: string | undefined
  billingPeriodStartDate?: string | undefined
  billingStartDelayDays?: number | undefined
  billingStartDelayMonths?: number | undefined
  billingStartDelayType?:
    | 'HS_BILLING_START_DELAY_DAYS'
    | 'HS_BILLING_START_DELAY_MONTHS'
    | 'HS_RECURRING_BILLING_START_DATE'
    | undefined
  buyerSelectedQuantityMax?: number | undefined
  buyerSelectedQuantityMin?: number | undefined
  createdAt?: string | undefined
  description?: string | undefined
  discount?: number | undefined
  discountPercentage?: number | undefined
  effectiveUnitPrice?: number | undefined
  externalId?: string | undefined
  id: string
  images?: string | undefined
  isEditablePrice?: boolean | undefined
  isOptional?: boolean | undefined
  isParent?: boolean | undefined
  lineItemCurrencyCode?: string | undefined
  mrr?: number | undefined
  name: string
  parentLineItemId?: string | undefined
  positionOnQuote?: number | undefined
  postTaxAmount?: number | undefined
  preDiscountAmount?: number | undefined
  price?: number | undefined
  priceBookId?: string | undefined
  pricing: Pricing
  pricingModel?: 'FLAT' | 'GRADUATED' | 'STAIRSTEP' | 'VOLUME' | undefined
  productId?: string | undefined
  productType?: string | undefined
  quantity: number
  rampKey?: string | undefined
  recurringBillingDayOfMonth?: number | undefined
  recurringBillingEndDate?: string | undefined
  recurringBillingFrequency?:
    | 'ANNUALLY'
    | 'BIWEEKLY'
    | 'MONTHLY'
    | 'PER_FIVE_YEARS'
    | 'PER_FOUR_YEARS'
    | 'PER_SIX_MONTHS'
    | 'PER_THREE_YEARS'
    | 'PER_TWO_YEARS'
    | 'QUARTERLY'
    | 'WEEKLY'
    | undefined
  recurringBillingNumberOfPayments?: number | undefined
  recurringBillingPeriod?: string | undefined
  recurringBillingStartDate?: string | undefined
  recurringBillingTerms?: 'AUTOMATICALLY_RENEW' | 'FIXED' | undefined
  richTextDescription?: string | undefined
  sku?: string | undefined
  tax?: number | undefined
  taxAmount?: number | undefined
  taxCategory?: string | undefined
  taxRateGroupId?: string | undefined
  tcv?: number | undefined
  termInMonths?: number | undefined
  tierAmount?: number | undefined
  totalDiscount?: number | undefined
  updatedAt?: string | undefined
  variantId?: string | undefined
}
type TaxResponse = {
  archived?: boolean | undefined
  archivedAt?: string | undefined
  createdAt?: string | undefined
  id: string
  label?: string | undefined
  updatedAt?: string | undefined
  value?: number | undefined
  valueType?: 'FIXED' | 'PERCENT' | undefined
}
type PaymentLinkResponse = {
  acceptedPaymentMethods: (
    | 'CREDIT_OR_DEBIT_CARD'
    | 'ACH'
    | 'SEPA'
    | 'BACS'
    | 'PADS'
    | 'AFFIRM'
    | 'KLARNA'
  )[]
  additionalFormFields: PaymentLinkFormField[]
  archived: boolean
  archivedAt?: string | undefined
  automatedSalesTaxEnabled: boolean
  businessUnitId?: string | undefined
  checkoutFeeIds: string[]
  collectFullBillingAddress: boolean
  collectShippingAddress: boolean
  completedPurchaseCount: number
  createContractOnPurchase: boolean
  createdAt?: string | undefined
  currencyCode: string
  dealConfigurations?: DealConfigurations | undefined
  descriptionHtml?: string | undefined
  discountCodeEnabled: boolean
  discounts: DiscountResponse[]
  domainId?: string | undefined
  expirationSettings?: ExpirationSettings | undefined
  fees: FeeResponse[]
  formGuid: string
  id: string
  includeEmailInSuccessRedirect: boolean
  isOneTimeUseEnabled: boolean
  lineItems: LineItem[]
  paymentLinkName: string
  paymentLinkUrl: string
  state: 'OFF' | 'ON'
  storePaymentMethodAtCheckout: boolean
  successUrl?: string | undefined
  taxes: TaxResponse[]
  updatedAt?: string | undefined
}
type CollectionResponsePaymentLinkResponseForwardPaging = {
  paging?: ForwardPaging | undefined
  results: PaymentLinkResponse[]
}
type ErrorDetail = {
  code?: string | undefined
  context?: { [x: string]: string[] } | undefined
  in?: string | undefined
  message: string
  subCategory?: string | undefined
}
type Error = {
  category: string
  context?: { [x: string]: string[] } | undefined
  correlationId: string
  errors?: ErrorDetail[] | undefined
  links?: { [x: string]: string } | undefined
  message: string
  subCategory?: string | undefined
}
type DiscountRequest = { label: string; value: number; valueType: 'FIXED' | 'PERCENT' }
type FeeRequest = { label: string; value: number; valueType: 'FIXED' | 'PERCENT' }
type PriceUpdateEntry = {
  currencyCode: string
  maxQuantity?: number | undefined
  price: { [x: string]: unknown }
}
type PricingFullUpdateRequest = {
  prices: PriceUpdateEntry[]
  pricingModel: 'FLAT' | 'GRADUATED' | 'STAIRSTEP' | 'VOLUME'
}
type LineItemCustomCreateRequest = {
  allowBuyerSelectedQuantity?: boolean | undefined
  billingCycleAnchorDate?: string | undefined
  billingStartDelayDays?: number | undefined
  billingStartDelayMonths?: number | undefined
  buyerSelectedQuantityMax?: number | undefined
  buyerSelectedQuantityMin?: number | undefined
  description?: string | undefined
  discount?: number | undefined
  discountPercentage?: number | undefined
  externalId?: string | undefined
  images?: string | undefined
  isEditablePrice?: boolean | undefined
  isOptional?: boolean | undefined
  lineItemCurrencyCode?: string | undefined
  mode: 'CUSTOM'
  name: string
  positionOnQuote?: number | undefined
  priceBookId?: string | undefined
  pricing: PricingFullUpdateRequest
  productId?: string | undefined
  productType?: string | undefined
  quantity: number
  recurringBillingEndDate?: string | undefined
  recurringBillingFrequency?:
    | 'ANNUALLY'
    | 'BIWEEKLY'
    | 'MONTHLY'
    | 'PER_FIVE_YEARS'
    | 'PER_FOUR_YEARS'
    | 'PER_SIX_MONTHS'
    | 'PER_THREE_YEARS'
    | 'PER_TWO_YEARS'
    | 'QUARTERLY'
    | 'WEEKLY'
    | undefined
  recurringBillingPeriod?: string | undefined
  recurringBillingStartDate?: string | undefined
  richTextDescription?: string | undefined
  sku?: string | undefined
  taxCategory?: string | undefined
  taxRateGroupId?: string | undefined
  variantId?: string | undefined
}
type LineItemFromProductCreateRequest = {
  allowBuyerSelectedQuantity: { [x: string]: unknown }
  billingCycleAnchorDate: { [x: string]: unknown }
  billingStartDelayDays: { [x: string]: unknown }
  billingStartDelayMonths: { [x: string]: unknown }
  buyerSelectedQuantityMax: { [x: string]: unknown }
  buyerSelectedQuantityMin: { [x: string]: unknown }
  description: { [x: string]: unknown }
  discount: { [x: string]: unknown }
  discountPercentage: { [x: string]: unknown }
  externalId: { [x: string]: unknown }
  images: { [x: string]: unknown }
  isEditablePrice: { [x: string]: unknown }
  isOptional: { [x: string]: unknown }
  lineItemCurrencyCode: { [x: string]: unknown }
  mode: 'FROM_PRODUCT'
  name: { [x: string]: unknown }
  positionOnQuote: { [x: string]: unknown }
  priceBookId: { [x: string]: unknown }
  pricing: { [x: string]: unknown }
  productId: string
  productType: { [x: string]: unknown }
  quantity: { [x: string]: unknown }
  recurringBillingEndDate: { [x: string]: unknown }
  recurringBillingFrequency: { [x: string]: unknown }
  recurringBillingPeriod: { [x: string]: unknown }
  recurringBillingStartDate: { [x: string]: unknown }
  richTextDescription: { [x: string]: unknown }
  sku: { [x: string]: unknown }
  taxCategory: { [x: string]: unknown }
  taxRateGroupId: { [x: string]: unknown }
  variantId: { [x: string]: unknown }
}
type LineItemCloneCreateRequest = {
  allowBuyerSelectedQuantity: { [x: string]: unknown }
  billingCycleAnchorDate: { [x: string]: unknown }
  billingStartDelayDays: { [x: string]: unknown }
  billingStartDelayMonths: { [x: string]: unknown }
  buyerSelectedQuantityMax: { [x: string]: unknown }
  buyerSelectedQuantityMin: { [x: string]: unknown }
  description: { [x: string]: unknown }
  discount: { [x: string]: unknown }
  discountPercentage: { [x: string]: unknown }
  externalId: { [x: string]: unknown }
  images: { [x: string]: unknown }
  isEditablePrice: { [x: string]: unknown }
  isOptional: { [x: string]: unknown }
  lineItemCurrencyCode: { [x: string]: unknown }
  mode: 'CLONE'
  name: { [x: string]: unknown }
  positionOnQuote: { [x: string]: unknown }
  priceBookId: { [x: string]: unknown }
  pricing: { [x: string]: unknown }
  productType: { [x: string]: unknown }
  quantity: { [x: string]: unknown }
  recurringBillingEndDate: { [x: string]: unknown }
  recurringBillingFrequency: { [x: string]: unknown }
  recurringBillingPeriod: { [x: string]: unknown }
  recurringBillingStartDate: { [x: string]: unknown }
  richTextDescription: { [x: string]: unknown }
  sku: { [x: string]: unknown }
  sourceLineItemId: string
  taxCategory: { [x: string]: unknown }
  taxRateGroupId: { [x: string]: unknown }
  variantId: { [x: string]: unknown }
}
type TaxRequest = { label: string; value: number; valueType: 'FIXED' | 'PERCENT' }
type PaymentLinkCreateRequest = {
  acceptedPaymentMethods: (
    | 'CREDIT_OR_DEBIT_CARD'
    | 'ACH'
    | 'SEPA'
    | 'BACS'
    | 'PADS'
    | 'AFFIRM'
    | 'KLARNA'
  )[]
  additionalFormFields: PaymentLinkFormField[]
  automatedSalesTaxEnabled?: boolean | undefined
  businessUnitId?: string | undefined
  collectFullBillingAddress?: boolean | undefined
  collectShippingAddress?: boolean | undefined
  createContractOnPurchase?: boolean | undefined
  currencyCode: string
  dealConfigurations?: DealConfigurations | undefined
  descriptionHtml?: string | undefined
  discount?: DiscountRequest | undefined
  discountCodeEnabled?: boolean | undefined
  discountObjectId?: string | undefined
  domainId?: string | undefined
  enableDefaultCheckoutFees: boolean
  expirationSettings?: ExpirationSettings | undefined
  feeObjectIds: string[]
  fees: FeeRequest[]
  includeEmailInSuccessRedirect: boolean
  isOneTimeUseEnabled: boolean
  lineItemObjectIds: string[]
  lineItems: (
    | LineItemCustomCreateRequest
    | LineItemFromProductCreateRequest
    | LineItemCloneCreateRequest
  )[]
  paymentLinkName: string
  state: 'OFF' | 'ON'
  storePaymentMethodAtCheckout?: boolean | undefined
  successUrl?: string | undefined
  taxObjectIds: string[]
  taxes: TaxRequest[]
}
type PaymentLinkUpdateRequest = {
  acceptedPaymentMethods?:
    | ('CREDIT_OR_DEBIT_CARD' | 'ACH' | 'SEPA' | 'BACS' | 'PADS' | 'AFFIRM' | 'KLARNA')[]
    | undefined
  additionalFormFields?: PaymentLinkFormField[] | undefined
  automatedSalesTaxEnabled?: boolean | undefined
  businessUnitId: { [x: string]: unknown }
  collectFullBillingAddress?: boolean | undefined
  collectShippingAddress?: boolean | undefined
  createContractOnPurchase?: boolean | undefined
  currencyCode?: string | undefined
  dealConfigurations: { [x: string]: unknown }
  descriptionHtml: { [x: string]: unknown }
  discount?: DiscountRequest | undefined
  discountCodeEnabled?: boolean | undefined
  discountObjectId: { [x: string]: unknown }
  domainId: { [x: string]: unknown }
  enableDefaultCheckoutFees?: boolean | undefined
  expirationSettings: { [x: string]: unknown }
  feeObjectIds?: string[] | undefined
  fees?: FeeRequest[] | undefined
  includeEmailInSuccessRedirect?: boolean | undefined
  isOneTimeUseEnabled?: boolean | undefined
  lineItemObjectIds?: string[] | undefined
  lineItems?:
    | (
        | LineItemCustomCreateRequest
        | LineItemFromProductCreateRequest
        | LineItemCloneCreateRequest
      )[]
    | undefined
  paymentLinkName?: string | undefined
  state?: 'OFF' | 'ON' | undefined
  storePaymentMethodAtCheckout?: boolean | undefined
  successUrl: { [x: string]: unknown }
  taxObjectIds?: string[] | undefined
  taxes?: TaxRequest[] | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/commerce/payment-links/2026-09/payment-links': {
      $get:
        | {
            input: {
              query: {
                after?: string | undefined
                archived?: boolean | undefined
                createdAfter?: bigint | undefined
                createdAt?: bigint | undefined
                createdBefore?: bigint | undefined
                limit?: number | undefined
                sort?: string | undefined
                updatedAfter?: bigint | undefined
                updatedAt?: bigint | undefined
                updatedBefore?: bigint | undefined
              }
            }
            output: CollectionResponsePaymentLinkResponseForwardPaging
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                after?: string | undefined
                archived?: boolean | undefined
                createdAfter?: bigint | undefined
                createdAt?: bigint | undefined
                createdBefore?: bigint | undefined
                limit?: number | undefined
                sort?: string | undefined
                updatedAfter?: bigint | undefined
                updatedAt?: bigint | undefined
                updatedBefore?: bigint | undefined
              }
            }
            output: Error
            outputFormat: 'text'
            status: 200
          }
      $post:
        | {
            input: { json: PaymentLinkCreateRequest }
            output: PaymentLinkResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: PaymentLinkCreateRequest }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/commerce/payment-links/2026-09/payment-links/:paymentLinkId': {
      $get:
        | {
            input: { param: { paymentLinkId: string } } & {
              query: { archived?: boolean | undefined }
            }
            output: PaymentLinkResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { paymentLinkId: string } } & {
              query: { archived?: boolean | undefined }
            }
            output: Error
            outputFormat: 'text'
            status: 200
          }
      $delete:
        | {
            input: { param: { paymentLinkId: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { paymentLinkId: string } }
            output: Error
            outputFormat: 'text'
            status: 200
          }
      $patch:
        | {
            input: { param: { paymentLinkId: string } } & { json: PaymentLinkUpdateRequest }
            output: PaymentLinkResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { paymentLinkId: string } } & { json: PaymentLinkUpdateRequest }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  },
  '/'
>
export default routes
