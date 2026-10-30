import { createRoute, z } from '@hono/zod-openapi'

const NextPageSchema = z
  .object({
    after: z
      .string()
      .openapi({
        description:
          'A string token that indicates the position after the last item in the current page, used to fetch the next page of results.',
        example: null,
      }),
    link: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A string URL that provides a direct link to the next page of results.',
        example: null,
      }),
  })
  .openapi({
    required: ['after'],
    description:
      'Specifies the paging information needed to retrieve the next set of results in a paginated API response',
    example: null,
  })
  .openapi('NextPage')

const ForwardPagingSchema = z
  .object({ next: NextPageSchema.exactOptional() })
  .openapi({
    description:
      'Paging information for forward-only pagination. Contains the next page reference when more results are available; omitted or empty on the last page.',
    example: null,
    required: [],
  })
  .openapi('ForwardPaging')

const FormFieldOptionSchema = z
  .object({
    description: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A string providing additional information or context about the form field option.',
        example: null,
      }),
    label: z
      .string()
      .openapi({
        description: 'A string representing the display name of the form field option.',
        example: null,
      }),
    value: z
      .string()
      .openapi({
        description:
          'A string representing the underlying value associated with the form field option.',
        example: null,
      }),
  })
  .openapi({ required: ['label', 'value'], example: null })
  .openapi('FormFieldOption')

const PaymentLinkFormFieldSchema = z
  .object({
    description: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A description of the form field, providing additional context or instructions, represented as a string.',
        example: null,
      }),
    isRequired: z
      .boolean()
      .openapi({
        description: 'A boolean indicating whether this form field is required to be filled out.',
        example: null,
      }),
    label: z
      .string()
      .openapi({
        description:
          'The label for the form field, which is displayed to users, represented as a string.',
        example: null,
      }),
    objectType: z
      .enum(['COMPANY', 'CONTACT'])
      .openapi({
        description:
          "The type of object this form field is associated with, represented as a string. Valid values include 'CONTACT' and 'COMPANY'.",
        example: null,
      }),
    options: z
      .array(FormFieldOptionSchema)
      .openapi({
        description:
          'An array of options available for this form field, each represented as a FormFieldOption object.',
        example: null,
      }),
    propertyName: z
      .string()
      .openapi({
        description:
          'The name of the property associated with this form field, represented as a string.',
        example: null,
      }),
  })
  .openapi({
    required: ['isRequired', 'label', 'objectType', 'options', 'propertyName'],
    example: null,
  })
  .openapi('PaymentLinkFormField')

const DealConfigurationsSchema = z
  .object({
    createNewDealOnPurchase: z
      .boolean()
      .openapi({
        description:
          'A boolean indicating whether a new deal should be created in HubSpot upon a purchase. Required field.',
        example: null,
      }),
    pipelineStageId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The identifier for the pipeline stage where the new deal will be placed. This is a string value.',
        example: null,
      }),
  })
  .openapi({ required: ['createNewDealOnPurchase'], example: null })
  .openapi('DealConfigurations')

const DiscountResponseSchema = z
  .object({
    archived: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Indicates whether this discount has been archived. A boolean value.',
        example: null,
      }),
    archivedAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'The date and time when this discount was archived, in ISO 8601 format.',
        example: null,
      }),
    createdAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'The date and time when this discount was created, in ISO 8601 format.',
        example: null,
      }),
    id: z
      .string()
      .openapi({ description: 'The unique identifier for this discount.', example: null }),
    label: z
      .string()
      .exactOptional()
      .openapi({ description: 'A descriptive label for the discount.', example: null }),
    updatedAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'The date and time when this discount was last updated, in ISO 8601 format.',
        example: null,
      }),
    value: z
      .number()
      .exactOptional()
      .openapi({ description: 'The numerical value of the discount.', example: null }),
    valueType: z
      .enum(['FIXED', 'PERCENT'])
      .exactOptional()
      .openapi({
        description: "The type of discount value, which can be either 'FIXED' or 'PERCENT'.",
        example: null,
      }),
  })
  .openapi({ required: ['id'], example: null })
  .openapi('DiscountResponse')

const ExpirationSettingsSchema = z
  .object({
    expirationDate: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'The date and time when the payment link will expire, in ISO 8601 format.',
        example: null,
      }),
    maxPurchases: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The maximum number of purchases allowed for this payment link. It is an integer value.',
        example: null,
      }),
  })
  .openapi({ example: null, required: [] })
  .openapi('ExpirationSettings')

const FeeResponseSchema = z
  .object({
    archived: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Indicates whether this fee has been archived. A boolean value.',
        example: null,
      }),
    archivedAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'The date and time when this fee was archived, in ISO 8601 format.',
        example: null,
      }),
    createdAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'The date and time when this fee was created, in ISO 8601 format.',
        example: null,
      }),
    id: z.string().openapi({ description: 'The unique identifier for this fee.', example: null }),
    label: z
      .string()
      .exactOptional()
      .openapi({ description: 'A descriptive label for the fee.', example: null }),
    updatedAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'The date and time when this fee was last updated, in ISO 8601 format.',
        example: null,
      }),
    value: z
      .number()
      .exactOptional()
      .openapi({
        description: 'The monetary value of the fee. A number representing the fee amount.',
        example: null,
      }),
    valueType: z
      .enum(['FIXED', 'PERCENT'])
      .exactOptional()
      .openapi({
        description: "The type of value for the fee, which can be either 'FIXED' or 'PERCENT'.",
        example: null,
      }),
  })
  .openapi({ required: ['id'], example: null })
  .openapi('FeeResponse')

const PriceEntrySchema = z
  .object({
    currencyCode: z
      .string()
      .openapi({
        description: 'The currency code for the price, represented as a string.',
        example: null,
      }),
    maxQuantity: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The maximum quantity for which this price is applicable, represented as a string.',
        example: null,
      }),
    price: z
      .number()
      .openapi({ description: 'The price of the item, represented as a number.', example: null }),
  })
  .openapi({ required: ['currencyCode', 'price'], example: null })
  .openapi('PriceEntry')

const PricingSchema = z
  .object({
    prices: z
      .array(PriceEntrySchema)
      .openapi({
        description:
          'An array of price entries, each detailing a specific price point within the pricing model.',
        example: null,
      }),
    pricingModel: z
      .enum(['FLAT', 'GRADUATED', 'STAIRSTEP', 'VOLUME'])
      .openapi({
        description:
          "The type of pricing model applied. Valid values include 'FLAT', 'GRADUATED', 'STAIRSTEP', and 'VOLUME'.",
        example: null,
      }),
  })
  .openapi({ required: ['prices', 'pricingModel'], example: null })
  .openapi('Pricing')

const LineItemSchema = z
  .object({
    acv: z
      .number()
      .exactOptional()
      .openapi({ description: 'The annual contract value for the line item.', example: null }),
    allowBuyerSelectedQuantity: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Indicates whether the buyer can select the quantity of the line item.',
        example: null,
      }),
    amount: z
      .number()
      .exactOptional()
      .openapi({
        description:
          'The total amount for the line item, calculated as price multiplied by quantity.',
        example: null,
      }),
    archived: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Indicates whether the line item is archived.', example: null }),
    archivedAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'The date and time when the line item was archived, in ISO 8601 format.',
        example: null,
      }),
    arr: z
      .number()
      .exactOptional()
      .openapi({ description: 'The annual recurring revenue for the line item.', example: null }),
    billingCycleAnchorDate: z.iso
      .date()
      .exactOptional()
      .openapi({
        description: 'The anchor date for the billing cycle, in ISO 8601 date format.',
        example: null,
      }),
    billingPeriodEndDate: z.iso
      .date()
      .exactOptional()
      .openapi({
        description: 'The end date of the billing period, in ISO 8601 date format.',
        example: null,
      }),
    billingPeriodStartDate: z.iso
      .date()
      .exactOptional()
      .openapi({
        description: 'The start date of the billing period, in ISO 8601 date format.',
        example: null,
      }),
    billingStartDelayDays: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The number of days to delay the start of billing.', example: null }),
    billingStartDelayMonths: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'The number of months to delay the start of billing.',
        example: null,
      }),
    billingStartDelayType: z
      .enum([
        'HS_BILLING_START_DELAY_DAYS',
        'HS_BILLING_START_DELAY_MONTHS',
        'HS_RECURRING_BILLING_START_DATE',
      ])
      .exactOptional()
      .openapi({
        description:
          "The type of delay for the start of billing. Valid values include 'HS_BILLING_START_DELAY_DAYS', 'HS_BILLING_START_DELAY_MONTHS', and 'HS_RECURRING_BILLING_START_DATE'.",
        example: null,
      }),
    buyerSelectedQuantityMax: z
      .number()
      .exactOptional()
      .openapi({
        description: 'The maximum quantity the buyer can select for the line item.',
        example: null,
      }),
    buyerSelectedQuantityMin: z
      .number()
      .exactOptional()
      .openapi({
        description: 'The minimum quantity the buyer can select for the line item.',
        example: null,
      }),
    createdAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'The date and time when the line item was created, in ISO 8601 format.',
        example: null,
      }),
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'A text description of the line item.', example: null }),
    discount: z
      .number()
      .exactOptional()
      .openapi({ description: 'The discount applied to the line item.', example: null }),
    discountPercentage: z
      .number()
      .exactOptional()
      .openapi({ description: 'The percentage discount applied to the line item.', example: null }),
    effectiveUnitPrice: z
      .number()
      .exactOptional()
      .openapi({ description: 'The effective price per unit after discounts.', example: null }),
    externalId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'An external identifier for the line item, used for integration purposes.',
        example: null,
      }),
    id: z
      .string()
      .openapi({ description: 'The unique identifier for the line item.', example: null }),
    images: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A URL or identifier for images associated with the line item.',
        example: null,
      }),
    isEditablePrice: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Indicates whether the price of the line item is editable.',
        example: null,
      }),
    isOptional: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Indicates whether the line item is optional.', example: null }),
    isParent: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Indicates whether this line item is a parent line item.',
        example: null,
      }),
    lineItemCurrencyCode: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The currency code for the line item, following ISO 4217 format.',
        example: null,
      }),
    mrr: z
      .number()
      .exactOptional()
      .openapi({ description: 'The monthly recurring revenue for the line item.', example: null }),
    name: z.string().openapi({ description: 'The name of the line item.', example: null }),
    parentLineItemId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The unique identifier for the parent line item.', example: null }),
    positionOnQuote: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'The position of the line item on a quote, represented as an integer.',
        example: null,
      }),
    postTaxAmount: z
      .number()
      .exactOptional()
      .openapi({ description: 'The amount after taxes are applied.', example: null }),
    preDiscountAmount: z
      .number()
      .exactOptional()
      .openapi({ description: 'The amount before any discounts are applied.', example: null }),
    price: z
      .number()
      .exactOptional()
      .openapi({ description: 'The price of a single unit of the line item.', example: null }),
    priceBookId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The identifier for the price book associated with the line item.',
        example: null,
      }),
    pricing: PricingSchema,
    pricingModel: z
      .enum(['FLAT', 'GRADUATED', 'STAIRSTEP', 'VOLUME'])
      .exactOptional()
      .openapi({
        description:
          "The pricing model used for the line item. Valid values include 'FLAT', 'GRADUATED', 'STAIRSTEP', and 'VOLUME'.",
        example: null,
      }),
    productId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The identifier for the product associated with the line item.',
        example: null,
      }),
    productType: z
      .string()
      .exactOptional()
      .openapi({ description: 'The type of product for the line item.', example: null }),
    quantity: z
      .number()
      .openapi({
        description: 'The quantity of the line item, represented as a number.',
        example: null,
      }),
    rampKey: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A key used to identify the ramp schedule for the line item.',
        example: null,
      }),
    recurringBillingDayOfMonth: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'The day of the month when recurring billing occurs.',
        example: null,
      }),
    recurringBillingEndDate: z.iso
      .date()
      .exactOptional()
      .openapi({
        description: 'The end date for recurring billing, in ISO 8601 date format.',
        example: null,
      }),
    recurringBillingFrequency: z
      .enum([
        'ANNUALLY',
        'BIWEEKLY',
        'MONTHLY',
        'PER_FIVE_YEARS',
        'PER_FOUR_YEARS',
        'PER_SIX_MONTHS',
        'PER_THREE_YEARS',
        'PER_TWO_YEARS',
        'QUARTERLY',
        'WEEKLY',
      ])
      .exactOptional()
      .openapi({
        description:
          "The frequency of recurring billing for the line item. Valid values include 'ANNUALLY', 'BIWEEKLY', 'MONTHLY', 'PER_FIVE_YEARS', 'PER_FOUR_YEARS', 'PER_SIX_MONTHS', 'PER_THREE_YEARS', 'PER_TWO_YEARS', 'QUARTERLY', and 'WEEKLY'.",
        example: null,
      }),
    recurringBillingNumberOfPayments: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'The number of payments for the recurring billing cycle.',
        example: null,
      }),
    recurringBillingPeriod: z
      .string()
      .exactOptional()
      .openapi({ description: 'The period for recurring billing.', example: null }),
    recurringBillingStartDate: z.iso
      .date()
      .exactOptional()
      .openapi({
        description: 'The start date for recurring billing, in ISO 8601 date format.',
        example: null,
      }),
    recurringBillingTerms: z
      .enum(['AUTOMATICALLY_RENEW', 'FIXED'])
      .exactOptional()
      .openapi({
        description:
          "The terms of recurring billing. Valid values include 'AUTOMATICALLY_RENEW' and 'FIXED'.",
        example: null,
      }),
    richTextDescription: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A rich text formatted description of the line item.',
        example: null,
      }),
    sku: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The stock keeping unit (SKU) identifier for the line item.',
        example: null,
      }),
    tax: z
      .number()
      .exactOptional()
      .openapi({ description: 'The tax amount applied to the line item.', example: null }),
    taxAmount: z
      .number()
      .exactOptional()
      .openapi({ description: 'The total tax amount for this line item.', example: null }),
    taxCategory: z
      .string()
      .exactOptional()
      .openapi({ description: 'The tax category applicable to this line item.', example: null }),
    taxRateGroupId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The unique identifier for the tax rate group.', example: null }),
    tcv: z
      .number()
      .exactOptional()
      .openapi({ description: 'The total contract value for the line item.', example: null }),
    termInMonths: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The term length for the line item in months.', example: null }),
    tierAmount: z
      .number()
      .exactOptional()
      .openapi({ description: 'The tiered amount applicable to the line item.', example: null }),
    totalDiscount: z
      .number()
      .exactOptional()
      .openapi({
        description: 'The total discount amount applied to the line item.',
        example: null,
      }),
    updatedAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'The date and time when the line item was last updated, in ISO 8601 format.',
        example: null,
      }),
    variantId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The identifier for the product variant associated with the line item.',
        example: null,
      }),
  })
  .openapi({ required: ['id', 'name', 'pricing', 'quantity'], example: null })
  .openapi('LineItem')

const TaxResponseSchema = z
  .object({
    archived: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Indicates whether this tax entry is archived. A boolean value.',
        example: null,
      }),
    archivedAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'The date and time when this tax entry was archived, in ISO 8601 format.',
        example: null,
      }),
    createdAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'The date and time when this tax entry was created, in ISO 8601 format.',
        example: null,
      }),
    id: z
      .string()
      .openapi({ description: 'The unique identifier for this tax entry.', example: null }),
    label: z
      .string()
      .exactOptional()
      .openapi({ description: 'A descriptive label for this tax entry.', example: null }),
    updatedAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'The date and time when this tax entry was last updated, in ISO 8601 format.',
        example: null,
      }),
    value: z
      .number()
      .exactOptional()
      .openapi({ description: 'The numerical value of the tax.', example: null }),
    valueType: z
      .enum(['FIXED', 'PERCENT'])
      .exactOptional()
      .openapi({
        description: "The type of value for the tax, which can be either 'FIXED' or 'PERCENT'.",
        example: null,
      }),
  })
  .openapi({ required: ['id'], example: null })
  .openapi('TaxResponse')

const PaymentLinkResponseSchema = z
  .object({
    acceptedPaymentMethods: z
      .array(
        z
          .enum(['CREDIT_OR_DEBIT_CARD', 'ACH', 'SEPA', 'BACS', 'PADS', 'AFFIRM', 'KLARNA'])
          .openapi({ example: null }),
      )
      .openapi({
        description:
          "An array of accepted payment methods for the payment link. Valid values include 'CREDIT_OR_DEBIT_CARD', 'ACH', 'SEPA', 'BACS', and 'PADS'.",
        example: null,
      }),
    additionalFormFields: z
      .array(PaymentLinkFormFieldSchema)
      .openapi({
        description: 'An array of additional form fields included in the payment link.',
        example: null,
      }),
    archived: z
      .boolean()
      .openapi({
        description: 'A boolean indicating whether the payment link is archived.',
        example: null,
      }),
    archivedAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'The date and time when the payment link was archived, in ISO 8601 format.',
        example: null,
      }),
    automatedSalesTaxEnabled: z
      .boolean()
      .openapi({
        description:
          'A boolean indicating whether automated sales tax is enabled for the payment link.',
        example: null,
      }),
    businessUnitId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The business unit ID associated with the payment link, represented as a string.',
        example: null,
      }),
    checkoutFeeIds: z
      .array(z.string().openapi({ example: null }))
      .openapi({
        description: 'An array of checkout fee IDs associated with the payment link.',
        example: null,
      }),
    collectFullBillingAddress: z
      .boolean()
      .openapi({
        description:
          'A boolean indicating whether to collect the full billing address during checkout.',
        example: null,
      }),
    collectShippingAddress: z
      .boolean()
      .openapi({
        description:
          'A boolean indicating whether to collect the shipping address during checkout.',
        example: null,
      }),
    completedPurchaseCount: z
      .int32()
      .openapi({
        description: 'The number of completed purchases made through this payment link.',
        example: null,
      }),
    createContractOnPurchase: z
      .boolean()
      .openapi({
        description: 'A boolean indicating whether a contract should be created upon purchase.',
        example: null,
      }),
    createdAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'The date and time when the payment link was created, in ISO 8601 format.',
        example: null,
      }),
    currencyCode: z
      .string()
      .openapi({
        description: 'The currency code for the payment link, represented as a string.',
        example: null,
      }),
    dealConfigurations: DealConfigurationsSchema.exactOptional(),
    descriptionHtml: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The HTML description of the payment link, represented as a string.',
        example: null,
      }),
    discountCodeEnabled: z
      .boolean()
      .openapi({
        description:
          'A boolean indicating whether discount codes are enabled for the payment link.',
        example: null,
      }),
    discounts: z
      .array(DiscountResponseSchema)
      .openapi({
        description: 'An array of discount objects associated with the payment link.',
        example: null,
      }),
    domainId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The domain ID associated with the payment link, represented as a string.',
        example: null,
      }),
    expirationSettings: ExpirationSettingsSchema.exactOptional(),
    fees: z
      .array(FeeResponseSchema)
      .openapi({
        description: 'An array of fee objects associated with the payment link.',
        example: null,
      }),
    formGuid: z
      .string()
      .openapi({
        description: 'The form GUID associated with the payment link, represented as a string.',
        example: null,
      }),
    id: z
      .string()
      .openapi({
        description: 'The unique identifier for the payment link, represented as a string.',
        example: null,
      }),
    includeEmailInSuccessRedirect: z
      .boolean()
      .openapi({
        description:
          'A boolean indicating whether to include the email in the success redirect URL.',
        example: null,
      }),
    isOneTimeUseEnabled: z
      .boolean()
      .openapi({
        description: 'A boolean indicating whether the payment link is enabled for one-time use.',
        example: null,
      }),
    lineItems: z
      .array(LineItemSchema)
      .openapi({
        description: 'An array of line items associated with the payment link.',
        example: null,
      }),
    paymentLinkName: z
      .string()
      .openapi({
        description: 'The name of the payment link, represented as a string.',
        example: null,
      }),
    paymentLinkUrl: z
      .string()
      .openapi({
        description: 'The URL of the payment link, represented as a string.',
        example: null,
      }),
    state: z
      .enum(['OFF', 'ON'])
      .openapi({
        description:
          "The current state of the payment link, represented as a string. Valid values include 'ON' and 'OFF'.",
        example: null,
      }),
    storePaymentMethodAtCheckout: z
      .boolean()
      .openapi({
        description: 'A boolean indicating whether to store the payment method at checkout.',
        example: null,
      }),
    successUrl: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The URL to redirect to upon successful payment, represented as a string.',
        example: null,
      }),
    taxes: z
      .array(TaxResponseSchema)
      .openapi({
        description: 'An array of tax objects associated with the payment link.',
        example: null,
      }),
    updatedAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'The date and time when the payment link was last updated, in ISO 8601 format.',
        example: null,
      }),
  })
  .openapi({
    required: [
      'acceptedPaymentMethods',
      'additionalFormFields',
      'archived',
      'automatedSalesTaxEnabled',
      'checkoutFeeIds',
      'collectFullBillingAddress',
      'collectShippingAddress',
      'completedPurchaseCount',
      'createContractOnPurchase',
      'currencyCode',
      'discountCodeEnabled',
      'discounts',
      'fees',
      'formGuid',
      'id',
      'includeEmailInSuccessRedirect',
      'isOneTimeUseEnabled',
      'lineItems',
      'paymentLinkName',
      'paymentLinkUrl',
      'state',
      'storePaymentMethodAtCheckout',
      'taxes',
    ],
    example: null,
  })
  .openapi('PaymentLinkResponse')

const CollectionResponsePaymentLinkResponseForwardPagingSchema = z
  .object({
    paging: ForwardPagingSchema.exactOptional(),
    results: z
      .array(PaymentLinkResponseSchema)
      .openapi({
        description:
          'An array of PaymentLinkResponse objects, each representing a payment link with its associated details.',
        example: null,
      }),
  })
  .openapi({ required: ['results'], example: null })
  .openapi('CollectionResponsePaymentLinkResponseForwardPaging')

const DiscountRequestSchema = z
  .object({
    label: z
      .string()
      .openapi({
        description: 'A descriptive label for the discount. This is a string.',
        example: null,
      }),
    value: z
      .number()
      .openapi({
        description: 'The numerical value of the discount to be applied. This is a number.',
        example: null,
      }),
    valueType: z
      .enum(['FIXED', 'PERCENT'])
      .openapi({
        description: "The type of discount value, which can either be 'FIXED' or 'PERCENT'.",
        example: null,
      }),
  })
  .openapi({ required: ['label', 'value', 'valueType'], example: null })
  .openapi('DiscountRequest')

const ErrorDetailSchema = z
  .object({
    code: z
      .string()
      .exactOptional()
      .openapi({ description: 'The status code associated with the error detail', example: null }),
    context: z
      .record(z.string(), z.array(z.string().openapi({ example: null })).openapi({ example: null }))
      .exactOptional()
      .openapi({
        description: 'Context about the error condition',
        example: '{missingScopes=[scope1, scope2]}',
      }),
    in: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The name of the field or parameter in which the error was found.',
        example: null,
      }),
    message: z
      .string()
      .openapi({
        description:
          'A human readable message describing the error along with remediation steps where appropriate',
        example: null,
      }),
    subCategory: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A specific category that contains more specific detail about the error',
        example: null,
      }),
  })
  .openapi({
    required: ['message'],
    description:
      'Represents detailed information about an error that occurred in the API. This component is used to provide additional context and specifics about errors, typically as part of an error response.',
    example: null,
  })
  .openapi('ErrorDetail')

const ErrorSchema = z
  .object({
    category: z.string().openapi({ description: 'The error category', example: null }),
    context: z
      .record(z.string(), z.array(z.string().openapi({ example: null })).openapi({ example: null }))
      .exactOptional()
      .openapi({
        description: 'Context about the error condition',
        example: '{invalidPropertyName=[propertyValue], missingScopes=[scope1, scope2]}',
      }),
    correlationId: z
      .uuid()
      .openapi({
        description:
          'A unique identifier for the request. Include this value with any error reports or support tickets',
        example: 'aeb5f871-7f07-4993-9211-075dc63e7cbf',
      }),
    errors: z
      .array(ErrorDetailSchema)
      .exactOptional()
      .openapi({ description: 'further information about the error', example: null }),
    links: z
      .record(z.string(), z.string().openapi({ example: null }))
      .exactOptional()
      .openapi({
        description:
          'A map of link names to associated URIs containing documentation about the error or recommended remediation steps',
        example: null,
      }),
    message: z
      .string()
      .openapi({
        description:
          'A human readable message describing the error along with remediation steps where appropriate',
        example: 'An error occurred',
      }),
    subCategory: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A specific category that contains more specific detail about the error',
        example: null,
      }),
  })
  .openapi({
    required: ['category', 'correlationId', 'message'],
    description:
      'Represents an error response returned by the API when an operation fails. This component is used in various endpoints to provide detailed information about the error encountered.',
    example: {
      message: 'Invalid input (details will vary based on the error)',
      correlationId: 'aeb5f871-7f07-4993-9211-075dc63e7cbf',
      category: 'VALIDATION_ERROR',
      links: { 'knowledge-base': 'https://www.hubspot.com/products/service/knowledge-base' },
    },
  })
  .openapi('Error')

const FeeRequestSchema = z
  .object({
    label: z
      .string()
      .openapi({
        description: 'A descriptive label for the fee, represented as a string.',
        example: null,
      }),
    value: z
      .number()
      .openapi({
        description:
          'The numerical value of the fee. This is a number representing either a fixed amount or a percentage, depending on the valueType.',
        example: null,
      }),
    valueType: z
      .enum(['FIXED', 'PERCENT'])
      .openapi({
        description:
          "The type of the fee value, indicating whether it is a fixed amount or a percentage. Valid values include 'FIXED' and 'PERCENT'.",
        example: null,
      }),
  })
  .openapi({ required: ['label', 'value', 'valueType'], example: null })
  .openapi('FeeRequest')

const LineItemCloneCreateRequestSchema = z
  .object({
    allowBuyerSelectedQuantity: z
      .object({})
      .openapi({
        description:
          'An object indicating whether the buyer can select the quantity of the line item.',
        example: null,
      }),
    billingCycleAnchorDate: z
      .object({})
      .openapi({
        description:
          'An object representing the anchor date for the billing cycle of the line item.',
        example: null,
      }),
    billingStartDelayDays: z
      .object({})
      .openapi({
        description:
          'An object representing the number of days to delay the start of billing for the line item.',
        example: null,
      }),
    billingStartDelayMonths: z
      .object({})
      .openapi({
        description:
          'An object representing the number of months to delay the start of billing for the line item.',
        example: null,
      }),
    buyerSelectedQuantityMax: z
      .object({})
      .openapi({
        description:
          'An object representing the maximum quantity the buyer can select for the line item.',
        example: null,
      }),
    buyerSelectedQuantityMin: z
      .object({})
      .openapi({
        description:
          'An object representing the minimum quantity the buyer can select for the line item.',
        example: null,
      }),
    description: z
      .object({})
      .openapi({
        description: 'An object representing the description of the line item.',
        example: null,
      }),
    discount: z
      .object({})
      .openapi({
        description: 'An object representing the discount applied to the line item.',
        example: null,
      }),
    discountPercentage: z
      .object({})
      .openapi({
        description: 'An object representing the discount percentage applied to the line item.',
        example: null,
      }),
    externalId: z
      .object({})
      .openapi({
        description: 'An object representing an external identifier for the line item.',
        example: null,
      }),
    images: z
      .object({})
      .openapi({
        description: 'An object representing the images associated with the line item.',
        example: null,
      }),
    isEditablePrice: z
      .object({})
      .openapi({
        description: 'An object indicating whether the price of the line item is editable.',
        example: null,
      }),
    isOptional: z
      .object({})
      .openapi({
        description: 'An object indicating whether the line item is optional.',
        example: null,
      }),
    lineItemCurrencyCode: z
      .object({})
      .openapi({
        description: 'An object representing the currency code for the line item.',
        example: null,
      }),
    mode: z
      .literal('CLONE')
      .default('CLONE')
      .openapi({
        description:
          "A string indicating the mode of the line item creation, which is 'CLONE' for this component.",
        example: null,
      }),
    name: z
      .object({})
      .openapi({ description: 'An object representing the name of the line item.', example: null }),
    positionOnQuote: z
      .object({})
      .openapi({
        description: 'An object representing the position of the line item on the quote.',
        example: null,
      }),
    priceBookId: z
      .object({})
      .openapi({
        description: 'An object representing the price book ID associated with the line item.',
        example: null,
      }),
    pricing: z
      .object({})
      .openapi({
        description: 'An object representing the pricing details of the line item.',
        example: null,
      }),
    productType: z
      .object({})
      .openapi({
        description: 'An object representing the type of product for the line item.',
        example: null,
      }),
    quantity: z
      .object({})
      .openapi({
        description: 'An object representing the quantity of the line item.',
        example: null,
      }),
    recurringBillingEndDate: z
      .object({})
      .openapi({
        description: 'An object representing the end date for recurring billing of the line item.',
        example: null,
      }),
    recurringBillingFrequency: z
      .object({})
      .openapi({
        description: 'An object representing the frequency of recurring billing for the line item.',
        example: null,
      }),
    recurringBillingPeriod: z
      .object({})
      .openapi({
        description:
          'An object representing the billing period for recurring billing of the line item.',
        example: null,
      }),
    recurringBillingStartDate: z
      .object({})
      .openapi({
        description:
          'An object representing the start date for recurring billing of the line item.',
        example: null,
      }),
    richTextDescription: z
      .object({})
      .openapi({
        description: 'An object representing the rich text description of the line item.',
        example: null,
      }),
    sku: z
      .object({})
      .openapi({
        description: 'An object representing the stock keeping unit (SKU) of the line item.',
        example: null,
      }),
    sourceLineItemId: z
      .string()
      .openapi({
        description: 'A string representing the ID of the source line item being cloned.',
        example: null,
      }),
    taxCategory: z
      .object({})
      .openapi({
        description: 'An object representing the tax category of the line item.',
        example: null,
      }),
    taxRateGroupId: z
      .object({})
      .openapi({
        description: 'An object representing the tax rate group ID for the line item.',
        example: null,
      }),
    variantId: z
      .object({})
      .openapi({
        description: 'An object representing the variant ID of the line item.',
        example: null,
      }),
  })
  .openapi({
    title: 'CLONE',
    required: [
      'allowBuyerSelectedQuantity',
      'billingCycleAnchorDate',
      'billingStartDelayDays',
      'billingStartDelayMonths',
      'buyerSelectedQuantityMax',
      'buyerSelectedQuantityMin',
      'description',
      'discount',
      'discountPercentage',
      'externalId',
      'images',
      'isEditablePrice',
      'isOptional',
      'lineItemCurrencyCode',
      'mode',
      'name',
      'positionOnQuote',
      'priceBookId',
      'pricing',
      'productType',
      'quantity',
      'recurringBillingEndDate',
      'recurringBillingFrequency',
      'recurringBillingPeriod',
      'recurringBillingStartDate',
      'richTextDescription',
      'sku',
      'sourceLineItemId',
      'taxCategory',
      'taxRateGroupId',
      'variantId',
    ],
    example: null,
    'x-hubspot-sub-type-impl': true,
  })
  .openapi('LineItemCloneCreateRequest')

const PriceUpdateEntrySchema = z
  .object({
    currencyCode: z
      .string()
      .openapi({
        description: 'The currency code in which the price is specified, represented as a string.',
        example: null,
      }),
    maxQuantity: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The maximum quantity for which this price is applicable, represented as a string.',
        example: null,
      }),
    price: z
      .object({})
      .openapi({
        description:
          'An object representing the price details. The specific structure of this object is not detailed in the specification.',
        example: null,
      }),
  })
  .openapi({ required: ['currencyCode', 'price'], example: null })
  .openapi('PriceUpdateEntry')

const PricingFullUpdateRequestSchema = z
  .object({
    prices: z
      .array(PriceUpdateEntrySchema)
      .openapi({
        description:
          'An array of PriceUpdateEntry objects, each specifying the price details such as currency code and price amount for different quantities.',
        example: null,
      }),
    pricingModel: z
      .enum(['FLAT', 'GRADUATED', 'STAIRSTEP', 'VOLUME'])
      .openapi({
        description:
          "The pricing model applied to the line item. Valid values include 'FLAT', 'GRADUATED', 'STAIRSTEP', and 'VOLUME'.",
        example: null,
      }),
  })
  .openapi({ required: ['prices', 'pricingModel'], example: null })
  .openapi('PricingFullUpdateRequest')

const LineItemCustomCreateRequestSchema = z
  .object({
    allowBuyerSelectedQuantity: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'A boolean specifying if the buyer can select the quantity of the line item.',
        example: null,
      }),
    billingCycleAnchorDate: z.iso
      .date()
      .exactOptional()
      .openapi({
        description: 'A string in date format representing the anchor date for the billing cycle.',
        example: null,
      }),
    billingStartDelayDays: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'An integer indicating the number of days to delay the start of billing.',
        example: null,
      }),
    billingStartDelayMonths: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'An integer indicating the number of months to delay the start of billing.',
        example: null,
      }),
    buyerSelectedQuantityMax: z
      .number()
      .exactOptional()
      .openapi({
        description: 'A number indicating the maximum quantity the buyer can select.',
        example: null,
      }),
    buyerSelectedQuantityMin: z
      .number()
      .exactOptional()
      .openapi({
        description: 'A number indicating the minimum quantity the buyer can select.',
        example: null,
      }),
    description: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A string providing a description of the line item.',
        example: null,
      }),
    discount: z
      .number()
      .exactOptional()
      .openapi({
        description: 'A number representing the discount applied to the line item.',
        example: null,
      }),
    discountPercentage: z
      .number()
      .exactOptional()
      .openapi({
        description: 'A number indicating the discount percentage applied to the line item.',
        example: null,
      }),
    externalId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A string representing an external identifier for the line item.',
        example: null,
      }),
    images: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A string containing URLs or identifiers for images associated with the line item.',
        example: null,
      }),
    isEditablePrice: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'A boolean indicating whether the price of the line item is editable.',
        example: null,
      }),
    isOptional: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'A boolean indicating whether the line item is optional.',
        example: null,
      }),
    lineItemCurrencyCode: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A string representing the currency code for the line item.',
        example: null,
      }),
    mode: z
      .literal('CUSTOM')
      .default('CUSTOM')
      .openapi({
        description: "A string that indicates the mode of the line item, which is set to 'CUSTOM'.",
        example: null,
      }),
    name: z
      .string()
      .openapi({ description: 'A string representing the name of the line item.', example: null }),
    positionOnQuote: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'An integer indicating the position of the line item on a quote.',
        example: null,
      }),
    priceBookId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A string that identifies the price book associated with the line item.',
        example: null,
      }),
    pricing: PricingFullUpdateRequestSchema,
    productId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A string that identifies the product associated with the line item.',
        example: null,
      }),
    productType: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A string indicating the type of product for the line item.',
        example: null,
      }),
    quantity: z
      .number()
      .openapi({
        description: 'A number indicating the quantity of the line item.',
        example: null,
      }),
    recurringBillingEndDate: z.iso
      .date()
      .exactOptional()
      .openapi({
        description: 'A string in date format indicating the end date of recurring billing.',
        example: null,
      }),
    recurringBillingFrequency: z
      .enum([
        'ANNUALLY',
        'BIWEEKLY',
        'MONTHLY',
        'PER_FIVE_YEARS',
        'PER_FOUR_YEARS',
        'PER_SIX_MONTHS',
        'PER_THREE_YEARS',
        'PER_TWO_YEARS',
        'QUARTERLY',
        'WEEKLY',
      ])
      .exactOptional()
      .openapi({
        description:
          "A string specifying the frequency of recurring billing. Valid values include 'ANNUALLY', 'BIWEEKLY', 'MONTHLY', 'PER_FIVE_YEARS', 'PER_FOUR_YEARS', 'PER_SIX_MONTHS', 'PER_THREE_YEARS', 'PER_TWO_YEARS', 'QUARTERLY', and 'WEEKLY'.",
        example: null,
      }),
    recurringBillingPeriod: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A string representing the period of recurring billing.',
        example: null,
      }),
    recurringBillingStartDate: z.iso
      .date()
      .exactOptional()
      .openapi({
        description: 'A string in date format indicating the start date of recurring billing.',
        example: null,
      }),
    richTextDescription: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A string containing a rich text description of the line item.',
        example: null,
      }),
    sku: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A string representing the stock keeping unit (SKU) of the line item.',
        example: null,
      }),
    taxCategory: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A string representing the tax category of the line item.',
        example: null,
      }),
    taxRateGroupId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The tax rate group ID associated with the line item as a string.',
        example: null,
      }),
    variantId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A string representing the variant identifier of the product.',
        example: null,
      }),
  })
  .openapi({
    title: 'CUSTOM',
    required: ['mode', 'name', 'pricing', 'quantity'],
    example: null,
    'x-hubspot-sub-type-impl': true,
  })
  .openapi('LineItemCustomCreateRequest')

const LineItemFromProductCreateRequestSchema = z
  .object({
    allowBuyerSelectedQuantity: z
      .object({})
      .openapi({
        description:
          'An object indicating whether the buyer can select the quantity of the product.',
        example: null,
      }),
    billingCycleAnchorDate: z
      .object({})
      .openapi({
        description: 'An object representing the anchor date for the billing cycle.',
        example: null,
      }),
    billingStartDelayDays: z
      .object({})
      .openapi({
        description: 'An object representing the number of days to delay the start of billing.',
        example: null,
      }),
    billingStartDelayMonths: z
      .object({})
      .openapi({
        description: 'An object representing the number of months to delay the start of billing.',
        example: null,
      }),
    buyerSelectedQuantityMax: z
      .object({})
      .openapi({
        description: 'An object representing the maximum quantity the buyer can select.',
        example: null,
      }),
    buyerSelectedQuantityMin: z
      .object({})
      .openapi({
        description: 'An object representing the minimum quantity the buyer can select.',
        example: null,
      }),
    description: z
      .object({})
      .openapi({
        description:
          'An object representing the description of the product associated with the line item.',
        example: null,
      }),
    discount: z
      .object({})
      .openapi({
        description: 'An object representing any discount applied to the line item.',
        example: null,
      }),
    discountPercentage: z
      .object({})
      .openapi({
        description: 'An object representing the percentage discount applied to the line item.',
        example: null,
      }),
    externalId: z
      .object({})
      .openapi({
        description: 'An object representing an external identifier for the line item.',
        example: null,
      }),
    images: z
      .object({})
      .openapi({
        description: 'An object representing images associated with the product.',
        example: null,
      }),
    isEditablePrice: z
      .object({})
      .openapi({
        description: 'An object indicating whether the price of the line item is editable.',
        example: null,
      }),
    isOptional: z
      .object({})
      .openapi({
        description: 'An object indicating whether the line item is optional.',
        example: null,
      }),
    lineItemCurrencyCode: z
      .object({})
      .openapi({
        description: 'An object representing the currency code for the line item.',
        example: null,
      }),
    mode: z
      .literal('FROM_PRODUCT')
      .default('FROM_PRODUCT')
      .openapi({
        description:
          "A string indicating the mode of the line item creation. The default and only valid value is 'FROM_PRODUCT'.",
        example: null,
      }),
    name: z
      .object({})
      .openapi({
        description:
          'An object representing the name of the product associated with the line item.',
        example: null,
      }),
    positionOnQuote: z
      .object({})
      .openapi({
        description: 'An object representing the position of the line item on a quote.',
        example: null,
      }),
    priceBookId: z
      .object({})
      .openapi({
        description: 'An object representing the ID of the price book associated with the product.',
        example: null,
      }),
    pricing: z
      .object({})
      .openapi({
        description: 'An object representing the pricing details of the line item.',
        example: null,
      }),
    productId: z
      .string()
      .openapi({
        description: 'A string representing the unique identifier of the product.',
        example: null,
      }),
    productType: z
      .object({})
      .openapi({ description: 'An object representing the type of product.', example: null }),
    quantity: z
      .object({})
      .openapi({
        description:
          'An object representing the quantity of the product to be included in the line item.',
        example: null,
      }),
    recurringBillingEndDate: z
      .object({})
      .openapi({
        description: 'An object representing the end date of the recurring billing cycle.',
        example: null,
      }),
    recurringBillingFrequency: z
      .object({})
      .openapi({
        description: 'An object representing the frequency of recurring billing for the line item.',
        example: null,
      }),
    recurringBillingPeriod: z
      .object({})
      .openapi({
        description: 'An object representing the period of the recurring billing cycle.',
        example: null,
      }),
    recurringBillingStartDate: z
      .object({})
      .openapi({
        description: 'An object representing the start date of the recurring billing cycle.',
        example: null,
      }),
    richTextDescription: z
      .object({})
      .openapi({
        description:
          'An object representing a rich text description of the product associated with the line item.',
        example: null,
      }),
    sku: z
      .object({})
      .openapi({
        description: 'An object representing the stock keeping unit (SKU) of the product.',
        example: null,
      }),
    taxCategory: z
      .object({})
      .openapi({
        description: 'An object representing the tax category of the product.',
        example: null,
      }),
    taxRateGroupId: z
      .object({})
      .openapi({
        description: 'An object representing the tax rate group ID for the product.',
        example: null,
      }),
    variantId: z
      .object({})
      .openapi({
        description: 'An object representing the variant ID of the product.',
        example: null,
      }),
  })
  .openapi({
    title: 'FROM_PRODUCT',
    required: [
      'allowBuyerSelectedQuantity',
      'billingCycleAnchorDate',
      'billingStartDelayDays',
      'billingStartDelayMonths',
      'buyerSelectedQuantityMax',
      'buyerSelectedQuantityMin',
      'description',
      'discount',
      'discountPercentage',
      'externalId',
      'images',
      'isEditablePrice',
      'isOptional',
      'lineItemCurrencyCode',
      'mode',
      'name',
      'positionOnQuote',
      'priceBookId',
      'pricing',
      'productId',
      'productType',
      'quantity',
      'recurringBillingEndDate',
      'recurringBillingFrequency',
      'recurringBillingPeriod',
      'recurringBillingStartDate',
      'richTextDescription',
      'sku',
      'taxCategory',
      'taxRateGroupId',
      'variantId',
    ],
    example: null,
    'x-hubspot-sub-type-impl': true,
  })
  .openapi('LineItemFromProductCreateRequest')

const TaxRequestSchema = z
  .object({
    label: z
      .string()
      .openapi({
        description:
          'A string that provides a label or description for the tax, used for identification or display purposes.',
        example: null,
      }),
    value: z
      .number()
      .openapi({
        description:
          'The numeric value of the tax. It represents the amount or percentage, depending on the valueType.',
        example: null,
      }),
    valueType: z
      .enum(['FIXED', 'PERCENT'])
      .openapi({
        description:
          "A string indicating the type of tax value. Valid values are 'FIXED' for a fixed amount and 'PERCENT' for a percentage-based tax.",
        example: null,
      }),
  })
  .openapi({ required: ['label', 'value', 'valueType'], example: null })
  .openapi('TaxRequest')

const PaymentLinkCreateRequestSchema = z
  .object({
    acceptedPaymentMethods: z
      .array(
        z
          .enum(['CREDIT_OR_DEBIT_CARD', 'ACH', 'SEPA', 'BACS', 'PADS', 'AFFIRM', 'KLARNA'])
          .openapi({ example: null }),
      )
      .openapi({
        description:
          "An array of accepted payment methods for the payment link. Valid values include 'CREDIT_OR_DEBIT_CARD', 'ACH', 'SEPA', 'BACS', and 'PADS'.",
        example: null,
      }),
    additionalFormFields: z
      .array(PaymentLinkFormFieldSchema)
      .openapi({
        description:
          'An array of PaymentLinkFormField objects representing additional form fields to be included in the payment link.',
        example: null,
      }),
    automatedSalesTaxEnabled: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'A boolean indicating whether automated sales tax is enabled.',
        example: null,
      }),
    businessUnitId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A string representing the business unit ID associated with the payment link.',
        example: null,
      }),
    collectFullBillingAddress: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'A boolean indicating whether to collect the full billing address during checkout.',
        example: null,
      }),
    collectShippingAddress: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'A boolean indicating whether the shipping address should be collected during checkout.',
        example: null,
      }),
    createContractOnPurchase: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'A boolean indicating whether to create a contract upon purchase.',
        example: null,
      }),
    currencyCode: z
      .string()
      .openapi({
        description: 'The currency code for the payment, represented as a string.',
        example: null,
      }),
    dealConfigurations: DealConfigurationsSchema.exactOptional(),
    descriptionHtml: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A string containing the HTML description of the payment link.',
        example: null,
      }),
    discount: DiscountRequestSchema.exactOptional(),
    discountCodeEnabled: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'A boolean indicating whether discount codes are enabled for the payment link.',
        example: null,
      }),
    discountObjectId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A string representing the object ID of a discount associated with the payment link.',
        example: null,
      }),
    domainId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The domain ID associated with the payment link, represented as a string.',
        example: null,
      }),
    enableDefaultCheckoutFees: z
      .boolean()
      .openapi({
        description: 'A boolean indicating whether default checkout fees are enabled.',
        example: null,
      }),
    expirationSettings: ExpirationSettingsSchema.exactOptional(),
    feeObjectIds: z
      .array(z.string().openapi({ example: null }))
      .openapi({
        description:
          'An array of strings representing the IDs of fee objects associated with the payment link.',
        example: null,
      }),
    fees: z
      .array(FeeRequestSchema)
      .openapi({
        description:
          'An array of FeeRequest objects, representing the fees to be applied to the payment link.',
        example: null,
      }),
    includeEmailInSuccessRedirect: z
      .boolean()
      .openapi({
        description:
          'A boolean indicating whether to include the email in the success redirect URL.',
        example: null,
      }),
    isOneTimeUseEnabled: z
      .boolean()
      .openapi({
        description: 'A boolean indicating whether the payment link is enabled for one-time use.',
        example: null,
      }),
    lineItemObjectIds: z
      .array(z.string().openapi({ example: null }))
      .openapi({
        description:
          'An array of line item object IDs associated with the payment link, each represented as a string.',
        example: null,
      }),
    lineItems: z
      .array(
        z
          .xor([
            LineItemCustomCreateRequestSchema,
            LineItemFromProductCreateRequestSchema,
            LineItemCloneCreateRequestSchema,
          ])
          .openapi({ example: null }),
      )
      .openapi({
        description:
          'An array of line items, which can be custom, from a product, or cloned, as defined by their respective schemas.',
        example: null,
      }),
    paymentLinkName: z
      .string()
      .openapi({
        description: 'The name of the payment link. It is a string value.',
        example: null,
      }),
    state: z
      .enum(['OFF', 'ON'])
      .openapi({
        description:
          "The state of the payment link, represented as a string. Valid values are 'ON' and 'OFF'.",
        example: null,
      }),
    storePaymentMethodAtCheckout: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'A boolean indicating whether to store the payment method at checkout.',
        example: null,
      }),
    successUrl: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A string that defines the URL to redirect to upon successful payment.',
        example: null,
      }),
    taxObjectIds: z
      .array(z.string().openapi({ example: null }))
      .openapi({
        description:
          'An array of string IDs representing tax objects associated with the payment link.',
        example: null,
      }),
    taxes: z
      .array(TaxRequestSchema)
      .openapi({
        description:
          'An array of TaxRequest objects, each representing a tax associated with the payment link.',
        example: null,
      }),
  })
  .openapi({
    required: [
      'acceptedPaymentMethods',
      'additionalFormFields',
      'currencyCode',
      'enableDefaultCheckoutFees',
      'feeObjectIds',
      'fees',
      'includeEmailInSuccessRedirect',
      'isOneTimeUseEnabled',
      'lineItemObjectIds',
      'lineItems',
      'paymentLinkName',
      'state',
      'taxObjectIds',
      'taxes',
    ],
    example: null,
  })
  .openapi('PaymentLinkCreateRequest')

const PaymentLinkUpdateRequestSchema = z
  .object({
    acceptedPaymentMethods: z
      .array(
        z
          .enum(['CREDIT_OR_DEBIT_CARD', 'ACH', 'SEPA', 'BACS', 'PADS', 'AFFIRM', 'KLARNA'])
          .openapi({ example: null }),
      )
      .exactOptional()
      .openapi({
        description:
          "An array of strings indicating the accepted payment methods. Valid values include 'CREDIT_OR_DEBIT_CARD', 'ACH', 'SEPA', 'BACS', and 'PADS'.",
        example: null,
      }),
    additionalFormFields: z
      .array(PaymentLinkFormFieldSchema)
      .exactOptional()
      .openapi({
        description:
          'An array of PaymentLinkFormField objects representing additional form fields for the payment link.',
        example: null,
      }),
    automatedSalesTaxEnabled: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'A boolean indicating whether automated sales tax is enabled.',
        example: null,
      }),
    businessUnitId: z
      .object({})
      .openapi({
        description:
          'An object representing the business unit ID associated with the payment link.',
        example: null,
      }),
    collectFullBillingAddress: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'A boolean indicating whether to collect the full billing address during checkout.',
        example: null,
      }),
    collectShippingAddress: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'A boolean indicating whether to collect the shipping address during checkout.',
        example: null,
      }),
    createContractOnPurchase: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'A boolean indicating whether a contract should be created upon purchase.',
        example: null,
      }),
    currencyCode: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The currency code for the payment link, represented as a string.',
        example: null,
      }),
    dealConfigurations: z
      .object({})
      .openapi({ description: 'An object containing deal configuration settings.', example: null }),
    descriptionHtml: z
      .object({})
      .openapi({
        description: 'An object containing the HTML description of the payment link.',
        example: null,
      }),
    discount: DiscountRequestSchema.exactOptional(),
    discountCodeEnabled: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'A boolean indicating whether discount codes are enabled for the payment link.',
        example: null,
      }),
    discountObjectId: z
      .object({})
      .openapi({
        description:
          'An object representing the discount object ID associated with the payment link.',
        example: null,
      }),
    domainId: z
      .object({})
      .openapi({
        description: 'An object representing the domain ID associated with the payment link.',
        example: null,
      }),
    enableDefaultCheckoutFees: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'A boolean indicating whether default checkout fees are enabled.',
        example: null,
      }),
    expirationSettings: z
      .object({})
      .openapi({
        description: 'An object representing the expiration settings for the payment link.',
        example: null,
      }),
    feeObjectIds: z
      .array(z.string().openapi({ example: null }))
      .exactOptional()
      .openapi({
        description:
          'An array of strings representing the IDs of fee objects associated with the payment link.',
        example: null,
      }),
    fees: z
      .array(FeeRequestSchema)
      .exactOptional()
      .openapi({
        description:
          'An array of FeeRequest objects representing the fees associated with the payment link.',
        example: null,
      }),
    includeEmailInSuccessRedirect: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'A boolean indicating whether to include the email in the success redirect.',
        example: null,
      }),
    isOneTimeUseEnabled: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'A boolean indicating whether the payment link is enabled for one-time use.',
        example: null,
      }),
    lineItemObjectIds: z
      .array(z.string().openapi({ example: null }))
      .exactOptional()
      .openapi({
        description:
          'An array of strings representing the IDs of line item objects associated with the payment link.',
        example: null,
      }),
    lineItems: z
      .array(
        z
          .xor([
            LineItemCustomCreateRequestSchema,
            LineItemFromProductCreateRequestSchema,
            LineItemCloneCreateRequestSchema,
          ])
          .openapi({ example: null }),
      )
      .exactOptional()
      .openapi({
        description:
          'An array of line item objects, which can be of types LineItemCustomCreateRequest, LineItemFromProductCreateRequest, or LineItemCloneCreateRequest.',
        example: null,
      }),
    paymentLinkName: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The name of the payment link, represented as a string.',
        example: null,
      }),
    state: z
      .enum(['OFF', 'ON'])
      .exactOptional()
      .openapi({
        description:
          "The state of the payment link, represented as a string. Valid values are 'ON' and 'OFF'.",
        example: null,
      }),
    storePaymentMethodAtCheckout: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'A boolean indicating whether the payment method should be stored at checkout.',
        example: null,
      }),
    successUrl: z
      .object({})
      .openapi({
        description:
          'An object representing the success URL where the user is redirected after a successful transaction.',
        example: null,
      }),
    taxObjectIds: z
      .array(z.string().openapi({ example: null }))
      .exactOptional()
      .openapi({
        description:
          'An array of strings representing the IDs of tax objects associated with the payment link.',
        example: null,
      }),
    taxes: z
      .array(TaxRequestSchema)
      .exactOptional()
      .openapi({
        description:
          'An array of TaxRequest objects representing the taxes associated with the payment link.',
        example: null,
      }),
  })
  .openapi({
    required: [
      'businessUnitId',
      'dealConfigurations',
      'descriptionHtml',
      'discountObjectId',
      'domainId',
      'expirationSettings',
      'successUrl',
    ],
    example: null,
  })
  .openapi('PaymentLinkUpdateRequest')

const ErrorResponse = {
  description: 'An error occurred.',
  content: { '*/*': { schema: ErrorSchema, example: null } },
}

const DeveloperHapikeySecurityScheme = { type: 'apiKey', name: 'hapikey', in: 'query' }

const Oauth2SecurityScheme = {
  type: 'oauth2',
  flows: {
    authorizationCode: {
      authorizationUrl: 'https://app.hubspot.com/oauth/authorize',
      tokenUrl: 'https://api.hubapi.com/oauth/v1/token',
      scopes: {},
    },
  },
}

const PrivateAppsSecurityScheme = { type: 'apiKey', name: 'private-app', in: 'header' }

const PrivateAppsLegacySecurityScheme = { type: 'apiKey', name: 'private-app-legacy', in: 'header' }

export const getCommercePaymentLinks202609PaymentLinksRoute = createRoute({
  method: 'get',
  path: '/commerce/payment-links/2026-09/payment-links',
  tags: ['Basic'],
  summary: 'Retrieve all payment links',
  description:
    'Retrieve a list of payment links from your HubSpot account. This endpoint allows you to filter and sort payment links based on various criteria such as creation and update timestamps. It supports pagination and can include archived payment links if specified.',
  operationId: 'get-/commerce/payment-links/2026-09/payment-links',
  request: {
    query: z.object({
      after: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'after',
            in: 'query',
            description:
              'The paging cursor token of the last successfully read resource will be returned as the `paging.next.after` JSON property of a paged response containing more results.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'string', example: null },
          },
          example: null,
        }),
      archived: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'archived',
            in: 'query',
            description: 'Whether to return only results that have been archived.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'boolean', example: null, default: false },
          },
          example: null,
        }),
      createdAfter: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .exactOptional()
        .openapi({
          param: {
            name: 'createdAfter',
            in: 'query',
            description:
              'Filter results to include only those created after the specified timestamp.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'integer', format: 'int64', example: null },
          },
          example: null,
        }),
      createdAt: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .exactOptional()
        .openapi({
          param: {
            name: 'createdAt',
            in: 'query',
            description: 'Filter results by the exact creation timestamp.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'integer', format: 'int64', example: null },
          },
          example: null,
        }),
      createdBefore: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .exactOptional()
        .openapi({
          param: {
            name: 'createdBefore',
            in: 'query',
            description:
              'Filter results to include only those created before the specified timestamp.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'integer', format: 'int64', example: null },
          },
          example: null,
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .default(20)
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            description: 'The maximum number of results to display per page.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'integer', format: 'int32', example: null, default: 20 },
          },
          example: null,
        }),
      sort: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'sort',
            in: 'query',
            description: 'Specifies the order in which results are returned.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'string', example: null },
          },
          example: null,
        }),
      updatedAfter: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .exactOptional()
        .openapi({
          param: {
            name: 'updatedAfter',
            in: 'query',
            description:
              'Filter results to include only those updated after the specified timestamp.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'integer', format: 'int64', example: null },
          },
          example: null,
        }),
      updatedAt: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .exactOptional()
        .openapi({
          param: {
            name: 'updatedAt',
            in: 'query',
            description: 'Filter results by the exact update timestamp.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'integer', format: 'int64', example: null },
          },
          example: null,
        }),
      updatedBefore: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .exactOptional()
        .openapi({
          param: {
            name: 'updatedBefore',
            in: 'query',
            description:
              'Filter results to include only those updated before the specified timestamp.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'integer', format: 'int64', example: null },
          },
          example: null,
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: CollectionResponsePaymentLinkResponseForwardPagingSchema,
          example: null,
        },
      },
    },
    default: ErrorResponse,
  },
  security: [],
})

export const postCommercePaymentLinks202609PaymentLinksRoute = createRoute({
  method: 'post',
  path: '/commerce/payment-links/2026-09/payment-links',
  tags: ['Basic'],
  summary: 'Create a payment link',
  description:
    'Create a new payment link in your HubSpot account. This endpoint allows you to specify various attributes for the payment link, such as accepted payment methods, currency, and additional form fields. The payment link can be configured for one-time use and can also collect shipping and billing addresses. This operation requires a valid JSON request body. Some defaults will be applied if no value provided.',
  operationId: 'post-/commerce/payment-links/2026-09/payment-links',
  request: {
    body: {
      content: { 'application/json': { schema: PaymentLinkCreateRequestSchema, example: null } },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'successful operation',
      content: { 'application/json': { schema: PaymentLinkResponseSchema, example: null } },
      headers: z.object({
        Location: {
          description: 'URL of the newly created resource',
          style: 'simple',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'URL of the newly created resource',
              param: { required: false },
              example: null,
            }),
        },
      }),
    },
    default: ErrorResponse,
  },
  security: [],
})

export const getCommercePaymentLinks202609PaymentLinksPaymentLinkIdRoute = createRoute({
  method: 'get',
  path: '/commerce/payment-links/2026-09/payment-links/{paymentLinkId}',
  tags: ['Basic'],
  summary: 'Retrieve payment link',
  description:
    'Retrieve details of a specific payment link using its unique identifier. This endpoint allows you to access information about the payment link, including its status and configuration. It is useful for checking the current settings or status of a payment link in your HubSpot account.',
  operationId: 'get-/commerce/payment-links/2026-09/payment-links/{paymentLinkId}',
  request: {
    params: z.object({
      paymentLinkId: z
        .string()
        .openapi({
          param: {
            name: 'paymentLinkId',
            in: 'path',
            description: 'The unique identifier of the payment link to retrieve.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string', example: null },
          },
          example: null,
        }),
    }),
    query: z.object({
      archived: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'archived',
            in: 'query',
            description: 'Whether to return only results that have been archived.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'boolean', example: null, default: false },
          },
          example: null,
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: PaymentLinkResponseSchema, example: null } },
    },
    default: ErrorResponse,
  },
  security: [],
})

export const deleteCommercePaymentLinks202609PaymentLinksPaymentLinkIdRoute = createRoute({
  method: 'delete',
  path: '/commerce/payment-links/2026-09/payment-links/{paymentLinkId}',
  tags: ['Basic'],
  summary: 'Delete a payment link',
  description:
    'Delete a specific payment link in your HubSpot account. This operation is irreversible and will remove the payment link identified by the provided ID. Use this endpoint to manage and clean up payment links that are no longer needed.',
  operationId: 'delete-/commerce/payment-links/2026-09/payment-links/{paymentLinkId}',
  request: {
    params: z.object({
      paymentLinkId: z
        .string()
        .openapi({
          param: {
            name: 'paymentLinkId',
            in: 'path',
            description: 'The unique identifier of the payment link to delete.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string', example: null },
          },
          example: null,
        }),
    }),
  },
  responses: { 204: { description: 'No content', content: {} }, default: ErrorResponse },
  security: [],
})

export const patchCommercePaymentLinks202609PaymentLinksPaymentLinkIdRoute = createRoute({
  method: 'patch',
  path: '/commerce/payment-links/2026-09/payment-links/{paymentLinkId}',
  tags: ['Basic'],
  summary: 'Update a payment link',
  description: 'Update a payment link by ID.',
  operationId:
    'patch-/commerce/payment-links/2026-09/payment-links/{paymentLinkId}_/commerce/payment-links/2026-09-beta/payment-links/{paymentLinkId}',
  request: {
    params: z.object({
      paymentLinkId: z
        .string()
        .openapi({
          param: {
            name: 'paymentLinkId',
            in: 'path',
            description: 'The unique identifier of the payment link to update.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string', example: null },
          },
          example: null,
        }),
    }),
    body: {
      content: { 'application/json': { schema: PaymentLinkUpdateRequestSchema, example: null } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: PaymentLinkResponseSchema, example: null } },
    },
    default: ErrorResponse,
  },
  security: [],
})
