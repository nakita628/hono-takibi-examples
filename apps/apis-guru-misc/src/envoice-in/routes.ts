import { createRoute, z } from '@hono/zod-openapi'

type ActivityType = {
  EstimationId?: number
  EstimationNumber?: string
  Id?: number
  InvoiceId?: number
  InvoiceNumber?: string
  Link?: string
  Message?: string
  OrderId?: number
  OrderNumber?: string
  Type?:
    | 'Created'
    | 'Draft'
    | 'Cloned'
    | 'SentViaEmail'
    | 'SentViaSms'
    | 'SentReminderViaEmail'
    | 'SentReminderViaSms'
    | 'Opened'
    | 'Viewed'
    | 'Rejected'
    | 'Updated'
    | 'Paid'
    | 'Unpaid'
    | 'Overdue'
    | 'NewManualPayment'
    | 'NewPaymentWithPaypal'
    | 'NewPaymentWithStripe'
    | 'NewPaymentWithPayoneer'
    | 'SentToAccountant'
    | 'DownloadedAsPdf'
    | 'MarkAsPaidByTheClient'
    | 'OpenedAttachment'
    | 'NewPaymentWithSquare'
    | 'NewPaymentWithKlikAndPay'
    | 'NewPaymentWithRazorpay'
    | 'NewPaymentWithWepay'
    | 'NewPaymentWithHalkbank'
    | 'ChangeStatus'
    | 'OrderUpdated'
    | 'OrderCreated'
    | 'NewPaymentWithTwoCheckout'
    | 'NewPaymentWithPaymentWall'
    | 'NewPaymentWithBamboraEU'
    | 'NewPaymentWithBamboraNA'
    | 'Void'
    | 'NewPaymentWithNlb'
    | 'NewPaymentWithAuthorizeNet'
    | 'NewPaymentWithBraintree'
    | 'EstimationCreated'
    | 'EstimationDraft'
    | 'EstimationCloned'
    | 'EstimationSentViaEmail'
    | 'EstimationOpened'
    | 'EstimationViewed'
    | 'EstimationAccepted'
    | 'EstimationRejected'
    | 'EstimationUpdated'
    | 'EstimationDownloadedAsPdf'
    | 'InvoiceDigitallySigned'
  UserId?: number
}

const ActivitySchema: z.ZodType<ActivityType> = z
  .object({
    EstimationId: z.int32().exactOptional(),
    EstimationNumber: z.string().exactOptional(),
    Id: z.int32().exactOptional(),
    InvoiceId: z.int32().exactOptional(),
    InvoiceNumber: z.string().exactOptional(),
    Link: z.string().exactOptional(),
    Message: z.string().exactOptional(),
    OrderId: z.int32().exactOptional(),
    OrderNumber: z.string().exactOptional(),
    Type: z
      .enum([
        'Created',
        'Draft',
        'Cloned',
        'SentViaEmail',
        'SentViaSms',
        'SentReminderViaEmail',
        'SentReminderViaSms',
        'Opened',
        'Viewed',
        'Rejected',
        'Updated',
        'Paid',
        'Unpaid',
        'Overdue',
        'NewManualPayment',
        'NewPaymentWithPaypal',
        'NewPaymentWithStripe',
        'NewPaymentWithPayoneer',
        'SentToAccountant',
        'DownloadedAsPdf',
        'MarkAsPaidByTheClient',
        'OpenedAttachment',
        'NewPaymentWithSquare',
        'NewPaymentWithKlikAndPay',
        'NewPaymentWithRazorpay',
        'NewPaymentWithWepay',
        'NewPaymentWithHalkbank',
        'ChangeStatus',
        'OrderUpdated',
        'OrderCreated',
        'NewPaymentWithTwoCheckout',
        'NewPaymentWithPaymentWall',
        'NewPaymentWithBamboraEU',
        'NewPaymentWithBamboraNA',
        'Void',
        'NewPaymentWithNlb',
        'NewPaymentWithAuthorizeNet',
        'NewPaymentWithBraintree',
        'EstimationCreated',
        'EstimationDraft',
        'EstimationCloned',
        'EstimationSentViaEmail',
        'EstimationOpened',
        'EstimationViewed',
        'EstimationAccepted',
        'EstimationRejected',
        'EstimationUpdated',
        'EstimationDownloadedAsPdf',
        'InvoiceDigitallySigned',
      ])
      .exactOptional(),
    UserId: z.int32().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Activity')

type InvoiceAttachmentType = {
  Id?: number
  InvoiceId?: number
  Link?: string
  ObfuscatedFileName?: string
  OriginalFileName?: string
  Size?: bigint
  Type?: 'External' | 'Uploaded'
}

const InvoiceAttachmentSchema: z.ZodType<InvoiceAttachmentType> = z
  .object({
    Id: z.int32().exactOptional(),
    InvoiceId: z.int32().exactOptional(),
    Link: z.string().exactOptional(),
    ObfuscatedFileName: z.string().exactOptional(),
    OriginalFileName: z.string().exactOptional(),
    Size: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    Type: z.enum(['External', 'Uploaded']).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('InvoiceAttachment')

type InvoiceItemType = {
  Cost?: number
  Description?: string
  DiscountAmount?: number
  DiscountPercentage?: number
  Id?: number
  InvoiceId?: number
  Quantity?: number
  SubTotalAmount?: number
  TaxAmount?: number
  TaxId?: number
  TaxPercentage?: number
  TotalAmount?: number
  WorkTypeId?: number
}

const InvoiceItemSchema: z.ZodType<InvoiceItemType> = z
  .object({
    Cost: z.float64().exactOptional(),
    Description: z.string().exactOptional(),
    DiscountAmount: z.float64().exactOptional(),
    DiscountPercentage: z.float64().exactOptional(),
    Id: z.int32().exactOptional(),
    InvoiceId: z.int32().exactOptional(),
    Quantity: z.float64().exactOptional(),
    SubTotalAmount: z.float64().exactOptional(),
    TaxAmount: z.float64().exactOptional(),
    TaxId: z.int32().exactOptional(),
    TaxPercentage: z.float64().exactOptional(),
    TotalAmount: z.float64().exactOptional(),
    WorkTypeId: z.int32().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('InvoiceItem')

type PaymentGatewayForInvoiceType = { Id?: number; Name?: string }

const PaymentGatewayForInvoiceSchema: z.ZodType<PaymentGatewayForInvoiceType> = z
  .object({ Id: z.int32().exactOptional(), Name: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('PaymentGatewayForInvoice')

const PaymentSchema: z.ZodType<PaymentType> = z
  .lazy(() =>
    z
      .object({
        Amount: z.float64().exactOptional(),
        Id: z.int32().exactOptional(),
        Invoice: InvoiceSchema.exactOptional(),
        InvoiceId: z.int32().exactOptional(),
        IsAutomatic: z.boolean().exactOptional(),
        Note: z.string().exactOptional(),
        PaidOn: z.iso.datetime({ offset: true }).exactOptional(),
        ReferenceId: z.string().exactOptional(),
        Type: z
          .enum([
            'Other',
            'Paypal',
            'Stripe',
            'Payoneer',
            'Bank',
            'Cash',
            'Cheque',
            'Ach',
            'Sepa',
            'Square',
            'KlikAndPay',
            'Razorpay',
            'Wepay',
            'Halkbank',
            'TwoCheckout',
            'PaymentWall',
            'BamboraEU',
            'BamboraNA',
            'Nlb',
            'AuthorizeNet',
            'Braintree',
          ])
          .exactOptional(),
      })
      .openapi({ required: [] }),
  )
  .openapi('Payment')

type InvoiceType = {
  AccessToken?: string
  Activities?: z.infer<typeof ActivitySchema>[]
  Attachments?: z.infer<typeof InvoiceAttachmentSchema>[]
  ClientId?: number
  ClonedFromId?: number
  CurrencyId?: number
  DiscountAmount?: number
  Duedate?: string
  EnablePartialPayments?: boolean
  EstimationId?: number
  Id?: number
  InvoiceCategoryId?: number
  IsDigitallySigned?: boolean
  IssuedOn?: string
  Items?: z.infer<typeof InvoiceItemSchema>[]
  Notes?: string
  Number?: string
  OrderId?: number
  PaymentGateways?: z.infer<typeof PaymentGatewayForInvoiceSchema>[]
  PaymentLinkId?: number
  Payments?: z.infer<typeof PaymentSchema>[]
  PoNumber?: string
  RecurringProfileId?: number
  ShouldSendReminders?: boolean
  Status?: 'Draft' | 'Paid' | 'Unpaid' | 'Overdue' | 'Void'
  SubTotalAmount?: number
  TaxAmount?: number
  Terms?: string
  TotalAmount?: number
  UserId?: number
}

const InvoiceSchema: z.ZodType<InvoiceType> = z
  .lazy(() =>
    z
      .object({
        AccessToken: z.string().exactOptional(),
        Activities: z.array(ActivitySchema).exactOptional(),
        Attachments: z.array(InvoiceAttachmentSchema).exactOptional(),
        ClientId: z.int32().exactOptional(),
        ClonedFromId: z.int32().exactOptional(),
        CurrencyId: z.int32().exactOptional(),
        DiscountAmount: z.float64().exactOptional(),
        Duedate: z.iso.datetime({ offset: true }).exactOptional(),
        EnablePartialPayments: z.boolean().exactOptional(),
        EstimationId: z.int32().exactOptional(),
        Id: z.int32().exactOptional(),
        InvoiceCategoryId: z.int32().exactOptional(),
        IsDigitallySigned: z.boolean().exactOptional(),
        IssuedOn: z.iso.datetime({ offset: true }).exactOptional(),
        Items: z.array(InvoiceItemSchema).exactOptional(),
        Notes: z.string().exactOptional(),
        Number: z.string().exactOptional(),
        OrderId: z.int32().exactOptional(),
        PaymentGateways: z.array(PaymentGatewayForInvoiceSchema).exactOptional(),
        PaymentLinkId: z.int32().exactOptional(),
        Payments: z.array(PaymentSchema).exactOptional(),
        PoNumber: z.string().exactOptional(),
        RecurringProfileId: z.int32().exactOptional(),
        ShouldSendReminders: z.boolean().exactOptional(),
        Status: z.enum(['Draft', 'Paid', 'Unpaid', 'Overdue', 'Void']).exactOptional(),
        SubTotalAmount: z.float64().exactOptional(),
        TaxAmount: z.float64().exactOptional(),
        Terms: z.string().exactOptional(),
        TotalAmount: z.float64().exactOptional(),
        UserId: z.int32().exactOptional(),
      })
      .openapi({ required: [] }),
  )
  .openapi('Invoice')

type PaymentType = {
  Amount?: number
  Id?: number
  Invoice?: z.infer<typeof InvoiceSchema>
  InvoiceId?: number
  IsAutomatic?: boolean
  Note?: string
  PaidOn?: string
  ReferenceId?: string
  Type?:
    | 'Other'
    | 'Paypal'
    | 'Stripe'
    | 'Payoneer'
    | 'Bank'
    | 'Cash'
    | 'Cheque'
    | 'Ach'
    | 'Sepa'
    | 'Square'
    | 'KlikAndPay'
    | 'Razorpay'
    | 'Wepay'
    | 'Halkbank'
    | 'TwoCheckout'
    | 'PaymentWall'
    | 'BamboraEU'
    | 'BamboraNA'
    | 'Nlb'
    | 'AuthorizeNet'
    | 'Braintree'
}

const ClientSchema = z
  .object({
    Address: z.string().exactOptional(),
    ClientCountryId: z.int32().exactOptional(),
    ClientCurrencyId: z.int32().exactOptional(),
    CompanyRegistrationNumber: z.string().exactOptional(),
    DefaultDueDateInDays: z.int32().exactOptional(),
    Email: z.string().exactOptional(),
    Id: z.int32().exactOptional(),
    Name: z.string().exactOptional(),
    PhoneNumber: z.string().exactOptional(),
    UiLanguageId: z.int32().exactOptional(),
    UserId: z.int32().exactOptional(),
    Vat: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Client')

const AdditionalClientEmailSchema = z
  .object({
    Client: ClientSchema.exactOptional(),
    ClientId: z.int32().exactOptional(),
    Email: z.string().exactOptional(),
    Id: z.int32().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AdditionalClientEmail')

const AdditionalClientEmailApiModelSchema = z
  .object({ Email: z.string().exactOptional().openapi({ description: 'CC' }) })
  .openapi({ required: [] })
  .openapi('AdditionalClientEmailApiModel')

const ChangeOrderStatusApiModelSchema = z
  .object({
    Id: z.int32().exactOptional().openapi({ description: 'Order Id' }),
    Reason: z.string().exactOptional().openapi({ description: 'Reason for status change' }),
    Status: z
      .enum([
        'PendingPayment',
        'Processing',
        'Shipped',
        'Completed',
        'OnHold',
        'Cancelled',
        'Refunded',
        'Failed',
      ])
      .exactOptional()
      .openapi({ description: 'New status of the order' }),
  })
  .openapi({ required: [] })
  .openapi('ChangeOrderStatusApiModel')

const ChangeStatusApiModelSchema = z
  .object({
    Id: z.int32().exactOptional().openapi({ description: 'Invoice Id' }),
    Status: z
      .enum(['Draft', 'Paid', 'Unpaid', 'Overdue', 'Void'])
      .exactOptional()
      .openapi({ description: 'New status of the invoice' }),
  })
  .openapi({ required: [] })
  .openapi('ChangeStatusApiModel')

const ClientCreateApiModelSchema = z
  .object({
    AdditionalEmails: z
      .array(AdditionalClientEmailApiModelSchema)
      .exactOptional()
      .openapi({ description: 'Client additional emails contact for CC' }),
    Address: z.string().exactOptional().openapi({ description: 'Client business address' }),
    ClientCountryId: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Indicates the country where the clients is from' }),
    ClientCurrencyId: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'Indicates the default system currency used by the user for the client',
      }),
    CompanyRegistrationNumber: z
      .string()
      .exactOptional()
      .openapi({ description: "Client's Company Registration Number" }),
    DefaultDueDateInDays: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Client custom payment terms' }),
    Email: z.string().exactOptional().openapi({ description: 'Client email' }),
    Name: z.string().exactOptional().openapi({ description: 'Name of the client' }),
    PhoneNumber: z.string().exactOptional().openapi({ description: 'Client phone numer' }),
    UiLanguageId: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Hold a value of the language in which the invoice will be sent' }),
    Vat: z.string().exactOptional().openapi({ description: "Client's VAT number" }),
  })
  .openapi({ required: [] })
  .openapi('ClientCreateApiModel')

const ClientDeleteApiModelSchema = z
  .object({ Id: z.int32().exactOptional().openapi({ description: 'Id of client to be deleted' }) })
  .openapi({ required: [] })
  .openapi('ClientDeleteApiModel')

const ClientDetailsApiModelSchema = z
  .object({
    AdditionalEmails: z
      .array(AdditionalClientEmailApiModelSchema)
      .exactOptional()
      .openapi({ description: 'Client additional emails contact for CC' }),
    Address: z.string().exactOptional().openapi({ description: 'Client business address' }),
    ClientCountryId: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Indicates the country where the clients is from' }),
    ClientCurrencyId: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'Indicates the default system currency used by the user for the client',
      }),
    CompanyRegistrationNumber: z
      .string()
      .exactOptional()
      .openapi({ description: "Client's Company Registration Number" }),
    CreatedOn: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Date of creation' }),
    DefaultDueDateInDays: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Client custom payment terms' }),
    Email: z.string().exactOptional().openapi({ description: 'Client email' }),
    Id: z.int32().exactOptional().openapi({ description: 'Entity id' }),
    Name: z.string().exactOptional().openapi({ description: 'Name of the client' }),
    PhoneNumber: z.string().exactOptional().openapi({ description: 'Client phone numer' }),
    UiLanguageId: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Hold a value of the language in which the invoice will be sent' }),
    Vat: z.string().exactOptional().openapi({ description: "Client's VAT number" }),
  })
  .openapi({ required: [] })
  .openapi('ClientDetailsApiModel')

const ClientUpdateApiModelSchema = z
  .object({
    AdditionalEmails: z
      .array(AdditionalClientEmailApiModelSchema)
      .exactOptional()
      .openapi({ description: 'Client additional emails contact for CC' }),
    Address: z.string().exactOptional().openapi({ description: 'Client business address' }),
    ClientCountryId: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Indicates the country where the clients is from' }),
    ClientCurrencyId: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'Indicates the default system currency used by the user for the client',
      }),
    CompanyRegistrationNumber: z
      .string()
      .exactOptional()
      .openapi({ description: "Client's Company Registration Number" }),
    DefaultDueDateInDays: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Client custom payment terms' }),
    Email: z.string().exactOptional().openapi({ description: 'Client email' }),
    Id: z.int32().exactOptional().openapi({ description: 'Entity id' }),
    Name: z.string().exactOptional().openapi({ description: 'Name of the client' }),
    PhoneNumber: z.string().exactOptional().openapi({ description: 'Client phone numer' }),
    UiLanguageId: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Hold a value of the language in which the invoice will be sent' }),
    Vat: z.string().exactOptional().openapi({ description: "Client's VAT number" }),
  })
  .openapi({ required: [] })
  .openapi('ClientUpdateApiModel')

const CountrySchema = z
  .object({
    Id: z.int32().exactOptional(),
    Name: z.string().exactOptional(),
    Value: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Country')

const CountryDetailsApiModelSchema = z
  .object({
    Id: z.int32().exactOptional().openapi({ description: 'Entity id' }),
    Name: z.string().exactOptional().openapi({ description: 'Name of the country' }),
    Value: z.string().exactOptional().openapi({ description: 'Country short code' }),
  })
  .openapi({ required: [] })
  .openapi('CountryDetailsApiModel')

const CurrencySchema = z
  .object({
    Code: z.string().exactOptional(),
    Id: z.int32().exactOptional(),
    Name: z.string().exactOptional(),
    Symbol: z.string().exactOptional(),
    Value: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Currency')

const CurrencyApiModelSchema = z
  .object({
    Name: z.string().exactOptional().openapi({ description: 'Name of the currency' }),
    Value: z.string().exactOptional().openapi({ description: 'Currency short code' }),
  })
  .openapi({ required: [] })
  .openapi('CurrencyApiModel')

const CurrencyDetailsApiModelSchema = z
  .object({
    Code: z.string().exactOptional().openapi({ description: 'Currency short numeric code' }),
    Id: z.int32().exactOptional().openapi({ description: 'Entity id' }),
    Name: z.string().exactOptional().openapi({ description: 'Name of the country' }),
    Symbol: z.string().exactOptional().openapi({ description: 'Currency symbol' }),
    Value: z.string().exactOptional().openapi({ description: 'Currency short alpha code' }),
  })
  .openapi({ required: [] })
  .openapi('CurrencyDetailsApiModel')

const EstimationActivityApiModelSchema = z
  .object({
    EstimationNumber: z
      .string()
      .exactOptional()
      .openapi({ description: 'Indicates to which estimation this activity refers to' }),
    Id: z.int32().exactOptional().openapi({ description: 'Id of estimation activity' }),
    Link: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Url which point out to a certain activity action. Ex: Click to view the payment',
      }),
    Message: z
      .string()
      .exactOptional()
      .openapi({ description: 'Message associated with the activity' }),
    Type: z
      .enum([
        'Created',
        'Draft',
        'Cloned',
        'SentViaEmail',
        'SentViaSms',
        'SentReminderViaEmail',
        'SentReminderViaSms',
        'Opened',
        'Viewed',
        'Rejected',
        'Updated',
        'Paid',
        'Unpaid',
        'Overdue',
        'NewManualPayment',
        'NewPaymentWithPaypal',
        'NewPaymentWithStripe',
        'NewPaymentWithPayoneer',
        'SentToAccountant',
        'DownloadedAsPdf',
        'MarkAsPaidByTheClient',
        'OpenedAttachment',
        'NewPaymentWithSquare',
        'NewPaymentWithKlikAndPay',
        'NewPaymentWithRazorpay',
        'NewPaymentWithWepay',
        'NewPaymentWithHalkbank',
        'ChangeStatus',
        'OrderUpdated',
        'OrderCreated',
        'NewPaymentWithTwoCheckout',
        'NewPaymentWithPaymentWall',
        'NewPaymentWithBamboraEU',
        'NewPaymentWithBamboraNA',
        'Void',
        'NewPaymentWithNlb',
        'NewPaymentWithAuthorizeNet',
        'NewPaymentWithBraintree',
        'EstimationCreated',
        'EstimationDraft',
        'EstimationCloned',
        'EstimationSentViaEmail',
        'EstimationOpened',
        'EstimationViewed',
        'EstimationAccepted',
        'EstimationRejected',
        'EstimationUpdated',
        'EstimationDownloadedAsPdf',
        'InvoiceDigitallySigned',
      ])
      .exactOptional()
      .openapi({ description: 'Type of the activity' }),
  })
  .openapi({ required: [] })
  .openapi('EstimationActivityApiModel')

const EstimationAttachmentApiModelSchema = z
  .object({
    Id: z.int32().exactOptional().openapi({ description: 'Id of estimation attachment' }),
    Link: z.string().exactOptional().openapi({ description: 'Link to the file' }),
    ObfuscatedFileName: z
      .string()
      .exactOptional()
      .openapi({ description: 'Hashed file name to avoid url wildguessing' }),
    OriginalFileName: z.string().exactOptional().openapi({ description: 'Name of the file' }),
    Size: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: 'File size number in bytes' }),
    Type: z
      .enum(['External', 'Uploaded'])
      .exactOptional()
      .openapi({ description: 'Type of the link (Attached or external)' }),
  })
  .openapi({ required: [] })
  .openapi('EstimationAttachmentApiModel')

const EstimationChangeStatusApiModelSchema = z
  .object({
    Id: z.int32().exactOptional().openapi({ description: 'Estimation Id' }),
    Status: z
      .enum(['Draft', 'Accepted', 'Rejected'])
      .exactOptional()
      .openapi({ description: 'New status of the estimation' }),
  })
  .openapi({ required: [] })
  .openapi('EstimationChangeStatusApiModel')

const EstimationCreateAttachmentApiModelSchema = z
  .object({
    Link: z.string().exactOptional().openapi({ description: 'Link to the file' }),
    ObfuscatedFileName: z
      .string()
      .exactOptional()
      .openapi({ description: 'Hashed file name to avoid url wildguessing' }),
    OriginalFileName: z.string().exactOptional().openapi({ description: 'Name of the file' }),
    Size: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: 'File size number in bytes' }),
    Type: z
      .enum(['External', 'Uploaded'])
      .exactOptional()
      .openapi({ description: 'Type of the link (Attached or external)' }),
  })
  .openapi({ required: [] })
  .openapi('EstimationCreateAttachmentApiModel')

const EstimationCreateItemApiModelSchema = z
  .object({
    Cost: z.float64().exactOptional().openapi({ description: 'Amount per unit' }),
    Description: z
      .string()
      .exactOptional()
      .openapi({ description: 'Additional description attached to the estimation item' }),
    DiscountPercentage: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Discount percentage for the overall amount' }),
    Quantity: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Quantity in total used for the work type' }),
    TaxId: z.int32().exactOptional().openapi({ description: 'Tax applied on the item' }),
    TaxPercentage: z.float64().exactOptional().openapi({ description: 'Task percentage. Ex: 18%' }),
    WorkTypeId: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Work type (Name of the service)' }),
  })
  .openapi({ required: [] })
  .openapi('EstimationCreateItemApiModel')

const EstimationGatewayApiModelSchema = z
  .object({
    Name: z.string().exactOptional().openapi({ description: 'Name of the payment gateway' }),
  })
  .openapi({ required: [] })
  .openapi('EstimationGatewayApiModel')

const EstimationCreateApiModelSchema = z
  .object({
    Attachments: z
      .array(EstimationCreateAttachmentApiModelSchema)
      .exactOptional()
      .openapi({ description: 'List of estimation attachments' }),
    ClientId: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The client to whom this estimation is assigned' }),
    ClonedFromId: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'Indicate from which estimation this estimation has been cloned from',
      }),
    CurrencyId: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Id of the currency for the estimation amounts' }),
    ExpiresOn: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Indicates when the estimation will be proclamed as due' }),
    IssuedOn: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Indicates when the estimation was issued' }),
    Items: z
      .array(EstimationCreateItemApiModelSchema)
      .exactOptional()
      .openapi({ description: 'List of estimation items' }),
    Notes: z
      .string()
      .exactOptional()
      .openapi({ description: 'Internal note regarding the estimation' }),
    Number: z.string().exactOptional().openapi({ description: 'Unique estimation number' }),
    PaymentGateways: z
      .array(EstimationGatewayApiModelSchema)
      .exactOptional()
      .openapi({ description: 'List of enabled payment gateways for this estimation' }),
    PoNumber: z
      .string()
      .exactOptional()
      .openapi({ description: 'Unique number generated by the buyer' }),
    Status: z
      .enum(['Draft', 'Accepted', 'Rejected'])
      .exactOptional()
      .openapi({ description: 'Indicate the status of the estimation (paid/unpaid/overdue)' }),
    Terms: z.string().exactOptional().openapi({ description: 'Terms of agreement' }),
  })
  .openapi({ required: [] })
  .openapi('EstimationCreateApiModel')

const EstimationDeleteApiModelSchema = z
  .object({
    Id: z.int32().exactOptional().openapi({ description: 'Id of estimation to be deleted' }),
  })
  .openapi({ required: [] })
  .openapi('EstimationDeleteApiModel')

const EstimationDetailsApiModelSchema = z
  .object({
    AccessToken: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Security access token used for accessing the estimation anonymously',
      }),
    Client: ClientDetailsApiModelSchema.exactOptional(),
    ClonedFromId: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'Indicate from which estimation this estimation has been cloned from',
      }),
    Currency: CurrencyDetailsApiModelSchema.exactOptional(),
    DiscountAmount: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Amount that goes as a discount' }),
    ExpiresOn: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Indicates when the estimation will be proclamed as due' }),
    Id: z.int32().exactOptional().openapi({ description: 'Estimation id' }),
    IssuedOn: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Indicates when the estimation was issued' }),
    Notes: z
      .string()
      .exactOptional()
      .openapi({ description: 'Internal note regarding the estimation' }),
    Number: z.string().exactOptional().openapi({ description: 'Unique estimation number' }),
    PoNumber: z
      .string()
      .exactOptional()
      .openapi({ description: 'Unique number generated by the buyer' }),
    Status: z
      .enum(['Draft', 'Accepted', 'Rejected'])
      .exactOptional()
      .openapi({ description: 'Indicate the status of the estimation (paid/unpaid/overdue)' }),
    SubTotalAmount: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Total amount of the estimation without tax' }),
    TaxAmount: z.float64().exactOptional().openapi({ description: 'Amount that goes to the tax' }),
    Terms: z.string().exactOptional().openapi({ description: 'Terms of agreement' }),
    TotalAmount: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Total amount of the estimation with tax' }),
  })
  .openapi({ required: [] })
  .openapi('EstimationDetailsApiModel')

const EstimationItemApiModelSchema = z
  .object({
    Cost: z.float64().exactOptional().openapi({ description: 'Amount per unit' }),
    Description: z
      .string()
      .exactOptional()
      .openapi({ description: 'Additional description attached to the estimation item' }),
    DiscountAmount: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Amount that goes as a discount' }),
    DiscountPercentage: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Discount percentage for the overall amount' }),
    Id: z.int32().exactOptional().openapi({ description: 'Id of estimation item' }),
    Quantity: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Quantity in total used for the work type' }),
    SubTotalAmount: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Sub-Total amount of the estimation item (Amount without tax)' }),
    TaxAmount: z.float64().exactOptional().openapi({ description: 'Amount that goes to the tax' }),
    TaxId: z.int32().exactOptional().openapi({ description: 'Tax applied on the item' }),
    TaxPercentage: z.float64().exactOptional().openapi({ description: 'Task percentage. Ex: 18%' }),
    TotalAmount: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Total amount of the estimation item' }),
    WorkTypeId: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Work type (Name of the service)' }),
  })
  .openapi({ required: [] })
  .openapi('EstimationItemApiModel')

const EstimationFullDetailsApiModelSchema = z
  .object({
    AccessToken: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Security access token used for accessing the estimation anonymously',
      }),
    Activities: z
      .array(EstimationActivityApiModelSchema)
      .exactOptional()
      .openapi({ description: 'List of estimation activities. estimation audit log' }),
    Attachments: z
      .array(EstimationAttachmentApiModelSchema)
      .exactOptional()
      .openapi({ description: 'List of estimation attachments' }),
    Client: ClientDetailsApiModelSchema.exactOptional(),
    ClonedFromId: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'Indicate from which estimation this estimation has been cloned from',
      }),
    Currency: CurrencyDetailsApiModelSchema.exactOptional(),
    DiscountAmount: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Amount that goes as a discount' }),
    ExpiresOn: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Indicates when the estimation will be proclamed as due' }),
    Id: z.int32().exactOptional().openapi({ description: 'Estimation id' }),
    IssuedOn: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Indicates when the estimation was issued' }),
    Items: z
      .array(EstimationItemApiModelSchema)
      .exactOptional()
      .openapi({ description: 'List of estimation items' }),
    Notes: z
      .string()
      .exactOptional()
      .openapi({ description: 'Internal note regarding the estimation' }),
    Number: z.string().exactOptional().openapi({ description: 'Unique estimation number' }),
    PaymentGateways: z
      .array(EstimationGatewayApiModelSchema)
      .exactOptional()
      .openapi({ description: 'List of enabled payment gateways for this estimation' }),
    PoNumber: z
      .string()
      .exactOptional()
      .openapi({ description: 'Unique number generated by the buyer' }),
    Status: z
      .enum(['Draft', 'Accepted', 'Rejected'])
      .exactOptional()
      .openapi({ description: 'Indicate the status of the estimation (paid/unpaid/overdue)' }),
    SubTotalAmount: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Total amount of the estimation without tax' }),
    TaxAmount: z.float64().exactOptional().openapi({ description: 'Amount that goes to the tax' }),
    Terms: z.string().exactOptional().openapi({ description: 'Terms of agreement' }),
    TotalAmount: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Total amount of the estimation with tax' }),
  })
  .openapi({ required: [] })
  .openapi('EstimationFullDetailsApiModel')

const EstimationUpdateAttachmentApiModelSchema = z
  .object({
    Id: z.int32().exactOptional().openapi({ description: 'Id of estimation attachment' }),
    Link: z.string().exactOptional().openapi({ description: 'Link to the file' }),
    ObfuscatedFileName: z
      .string()
      .exactOptional()
      .openapi({ description: 'Hashed file name to avoid url wildguessing' }),
    OriginalFileName: z.string().exactOptional().openapi({ description: 'Name of the file' }),
    Size: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: 'File size number in bytes' }),
    Type: z
      .enum(['External', 'Uploaded'])
      .exactOptional()
      .openapi({ description: 'Type of the link (Attached or external)' }),
  })
  .openapi({ required: [] })
  .openapi('EstimationUpdateAttachmentApiModel')

const EstimationUpdateItemApiModelSchema = z
  .object({
    Cost: z.float64().exactOptional().openapi({ description: 'Amount per unit' }),
    Description: z
      .string()
      .exactOptional()
      .openapi({ description: 'Additional description attached to the estimation item' }),
    DiscountPercentage: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Discount percentage for the overall amount' }),
    Id: z.int32().exactOptional().openapi({ description: 'Id of estimation item' }),
    Quantity: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Quantity in total used for the work type' }),
    TaxId: z.int32().exactOptional().openapi({ description: 'Tax applied on the item' }),
    TaxPercentage: z.float64().exactOptional().openapi({ description: 'Task percentage. Ex: 18%' }),
    WorkTypeId: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Work type (Name of the service)' }),
  })
  .openapi({ required: [] })
  .openapi('EstimationUpdateItemApiModel')

const EstimationUpdateApiModelSchema = z
  .object({
    Attachments: z
      .array(EstimationUpdateAttachmentApiModelSchema)
      .exactOptional()
      .openapi({ description: 'List of estimation attachments' }),
    ClientId: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The client to whom this estimation is assigned' }),
    ClonedFromId: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'Indicate from which estimation this estimation has been cloned from',
      }),
    CurrencyId: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Id of the currency for the estimation amounts' }),
    ExpiresOn: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Indicates when the estimation will be proclamed as due' }),
    Id: z.int32().exactOptional().openapi({ description: 'estimation id' }),
    IssuedOn: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Indicates when the estimation was issued' }),
    Items: z
      .array(EstimationUpdateItemApiModelSchema)
      .exactOptional()
      .openapi({ description: 'List of estimation items' }),
    Notes: z
      .string()
      .exactOptional()
      .openapi({ description: 'Internal note regarding the estimation' }),
    Number: z.string().exactOptional().openapi({ description: 'Unique estimation number' }),
    PaymentGateways: z
      .array(EstimationGatewayApiModelSchema)
      .exactOptional()
      .openapi({ description: 'List of enabled payment gateways for this estimation' }),
    PoNumber: z
      .string()
      .exactOptional()
      .openapi({ description: 'Unique number generated by the buyer' }),
    Status: z
      .enum(['Draft', 'Accepted', 'Rejected'])
      .exactOptional()
      .openapi({ description: 'Indicate the status of the estimation (paid/unpaid/overdue)' }),
    Terms: z.string().exactOptional().openapi({ description: 'Terms of agreement' }),
  })
  .openapi({ required: [] })
  .openapi('EstimationUpdateApiModel')

const EstimationUriApiModelSchema = z
  .object({
    Link: z.string().exactOptional().openapi({ description: 'Unique link to the estimation' }),
  })
  .openapi({ required: [] })
  .openapi('EstimationUriApiModel')

const ExternalConnectionSchema = z
  .object({
    AccessToken: z.string().exactOptional(),
    AccessTokenSecret: z.string().exactOptional(),
    Data: z.string().exactOptional(),
    ExpiresOn: z.iso.datetime({ offset: true }).exactOptional(),
    ExternalUserId: z.string().exactOptional(),
    ExternalUsername: z.string().exactOptional(),
    Id: z.int32().exactOptional(),
    Provider: z.string().exactOptional(),
    UserId: z.int32().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ExternalConnection')

const IErrorInfoSchema = z
  .object({
    Code: z.string().exactOptional().openapi({ readOnly: true }),
    FaultMessage: z.string().exactOptional().openapi({ readOnly: true }),
    Group: z.string().exactOptional().openapi({ readOnly: true }),
    UserVisibleMessage: z.string().exactOptional().openapi({ readOnly: true }),
  })
  .openapi({ required: [] })
  .openapi('IErrorInfo')

const InvoiceActivityApiModelSchema = z
  .object({
    Id: z.int32().exactOptional().openapi({ description: 'Id of invoice activity' }),
    InvoiceNumber: z
      .string()
      .exactOptional()
      .openapi({ description: 'Indicates to which invoice this activity refers to' }),
    Link: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Url which point out to a certain activity action. Ex: Click to view the payment',
      }),
    Message: z
      .string()
      .exactOptional()
      .openapi({ description: 'Message associated with the activity' }),
    Type: z
      .enum([
        'Created',
        'Draft',
        'Cloned',
        'SentViaEmail',
        'SentViaSms',
        'SentReminderViaEmail',
        'SentReminderViaSms',
        'Opened',
        'Viewed',
        'Rejected',
        'Updated',
        'Paid',
        'Unpaid',
        'Overdue',
        'NewManualPayment',
        'NewPaymentWithPaypal',
        'NewPaymentWithStripe',
        'NewPaymentWithPayoneer',
        'SentToAccountant',
        'DownloadedAsPdf',
        'MarkAsPaidByTheClient',
        'OpenedAttachment',
        'NewPaymentWithSquare',
        'NewPaymentWithKlikAndPay',
        'NewPaymentWithRazorpay',
        'NewPaymentWithWepay',
        'NewPaymentWithHalkbank',
        'ChangeStatus',
        'OrderUpdated',
        'OrderCreated',
        'NewPaymentWithTwoCheckout',
        'NewPaymentWithPaymentWall',
        'NewPaymentWithBamboraEU',
        'NewPaymentWithBamboraNA',
        'Void',
        'NewPaymentWithNlb',
        'NewPaymentWithAuthorizeNet',
        'NewPaymentWithBraintree',
        'EstimationCreated',
        'EstimationDraft',
        'EstimationCloned',
        'EstimationSentViaEmail',
        'EstimationOpened',
        'EstimationViewed',
        'EstimationAccepted',
        'EstimationRejected',
        'EstimationUpdated',
        'EstimationDownloadedAsPdf',
        'InvoiceDigitallySigned',
      ])
      .exactOptional()
      .openapi({ description: 'Type of the activity' }),
  })
  .openapi({ required: [] })
  .openapi('InvoiceActivityApiModel')

const InvoiceAttachmentApiModelSchema = z
  .object({
    Id: z.int32().exactOptional().openapi({ description: 'Id of invoice attachment' }),
    Link: z.string().exactOptional().openapi({ description: 'Link to the file' }),
    ObfuscatedFileName: z
      .string()
      .exactOptional()
      .openapi({ description: 'Hashed file name to avoid url wildguessing' }),
    OriginalFileName: z.string().exactOptional().openapi({ description: 'Name of the file' }),
    Size: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: 'File size number in bytes' }),
    Type: z
      .enum(['External', 'Uploaded'])
      .exactOptional()
      .openapi({ description: 'Type of the link (Attached or external)' }),
  })
  .openapi({ required: [] })
  .openapi('InvoiceAttachmentApiModel')

const InvoiceCategoryApiModelSchema = z
  .object({
    Id: z.int32().exactOptional().openapi({ description: 'Entity id' }),
    Name: z.string().exactOptional().openapi({ description: 'Category name' }),
  })
  .openapi({ required: [] })
  .openapi('InvoiceCategoryApiModel')

const InvoiceCategoryCreateApiModelSchema = z
  .object({ Name: z.string().exactOptional().openapi({ description: 'Category name' }) })
  .openapi({ required: [] })
  .openapi('InvoiceCategoryCreateApiModel')

const InvoiceCategoryDeleteApiModelSchema = z
  .object({ Id: z.int32().exactOptional() })
  .openapi({ required: [] })
  .openapi('InvoiceCategoryDeleteApiModel')

const InvoiceCategoryUpdateApiModelSchema = z
  .object({
    Id: z.int32().exactOptional().openapi({ description: 'Entity id' }),
    Name: z.string().exactOptional().openapi({ description: 'Category name' }),
  })
  .openapi({ required: [] })
  .openapi('InvoiceCategoryUpdateApiModel')

const InvoiceCreateAttachmentApiModelSchema = z
  .object({
    Link: z.string().exactOptional().openapi({ description: 'Link to the file' }),
    ObfuscatedFileName: z
      .string()
      .exactOptional()
      .openapi({ description: 'Hashed file name to avoid url wildguessing' }),
    OriginalFileName: z.string().exactOptional().openapi({ description: 'Name of the file' }),
    Size: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: 'File size number in bytes' }),
    Type: z
      .enum(['External', 'Uploaded'])
      .exactOptional()
      .openapi({ description: 'Type of the link (Attached or external)' }),
  })
  .openapi({ required: [] })
  .openapi('InvoiceCreateAttachmentApiModel')

const InvoiceCreateItemApiModelSchema = z
  .object({
    Cost: z.float64().exactOptional().openapi({ description: 'Amount per unit' }),
    Description: z
      .string()
      .exactOptional()
      .openapi({ description: 'Additional description attached to the invoice item' }),
    DiscountPercentage: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Discount percentage for the overall amount' }),
    Quantity: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Quantity in total used for the work type' }),
    TaxId: z.int32().exactOptional().openapi({ description: 'Tax applied on the item' }),
    TaxPercentage: z.float64().exactOptional().openapi({ description: 'Task percentage. Ex: 18%' }),
    WorkTypeId: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Work type (Name of the service)' }),
  })
  .openapi({ required: [] })
  .openapi('InvoiceCreateItemApiModel')

const InvoiceGatewayApiModelSchema = z
  .object({
    Name: z.string().exactOptional().openapi({ description: 'Name of the payment gateway' }),
  })
  .openapi({ required: [] })
  .openapi('InvoiceGatewayApiModel')

const InvoiceRecurringApiModelSchema = z
  .object({
    DayOfMonth: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Day of month when the recurrance should happen' }),
    DayOfWeek: z
      .enum(['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'])
      .exactOptional()
      .openapi({ description: 'Day when the recurrance should happen' }),
    DueDateInDays: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'Total number of days for the client to pay the invoice after issuing it',
      }),
    EndOfRecurrance: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Indcate the date when the recurrance should stop' }),
    Month: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Month when the recurrance should happen' }),
    RecurrancePattern: z
      .enum(['Daily', 'Weekly', 'Monthly', 'Yearly'])
      .exactOptional()
      .openapi({ description: 'How often the recurrance occurs' }),
    RecurranceValue: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'Recurring every [value] RecurrancePattern\r\nEx: Recur every 1 week',
      }),
    StartOfRecurrance: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Indcate the date when the recurrance has started' }),
    Status: z
      .enum(['Pending', 'Active', 'Cancelled', 'Finished'])
      .exactOptional()
      .openapi({ description: 'The status of the recurrance' }),
    Title: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Title of the recurring profile. \r\nEx: BRAND PACKAGE - 2017-08-16 - 2018-08-16',
      }),
  })
  .openapi({ description: 'Definition of invoice recurring profile', required: [] })
  .openapi('InvoiceRecurringApiModel')

const InvoiceCreateApiModelSchema = z
  .object({
    Attachments: z
      .array(InvoiceCreateAttachmentApiModelSchema)
      .exactOptional()
      .openapi({ description: 'List of invoice attachments' }),
    ClientId: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The client to whom this invoice is assigned' }),
    ClonedFromId: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Indicate from which invoice this invoice has been cloned from' }),
    CurrencyId: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Id of the currency for the invoice amounts' }),
    Duedate: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Indicates when the invoice will be proclamed as due' }),
    InvoiceCategoryId: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Hold the id of the invoice category' }),
    IssuedOn: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Indicates when the invoice was issued' }),
    Items: z
      .array(InvoiceCreateItemApiModelSchema)
      .exactOptional()
      .openapi({ description: 'List of invoice items' }),
    Notes: z
      .string()
      .exactOptional()
      .openapi({ description: 'Internal note regarding the invoice' }),
    Number: z.string().exactOptional().openapi({ description: 'Unique invoice number' }),
    PaymentGateways: z
      .array(InvoiceGatewayApiModelSchema)
      .exactOptional()
      .openapi({ description: 'List of enabled payment gateways for this invoice' }),
    PoNumber: z
      .string()
      .exactOptional()
      .openapi({ description: 'Unique number generated by the buyer' }),
    RecurringProfile: InvoiceRecurringApiModelSchema.exactOptional(),
    RecurringProfileId: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Hold the id of the recurring profile' }),
    ShouldSendReminders: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Should send email reminders to client?' }),
    Status: z
      .enum(['Draft', 'Paid', 'Unpaid', 'Overdue', 'Void'])
      .exactOptional()
      .openapi({ description: 'Indicate the status of the invoice (paid/unpaid/overdue)' }),
    Terms: z.string().exactOptional().openapi({ description: 'Terms of agreement' }),
  })
  .openapi({ required: [] })
  .openapi('InvoiceCreateApiModel')

const InvoiceDeleteApiModelSchema = z
  .object({ Id: z.int32().exactOptional().openapi({ description: 'Id of invoice to be deleted' }) })
  .openapi({ required: [] })
  .openapi('InvoiceDeleteApiModel')

const InvoiceDetailsApiModelSchema = z
  .object({
    AccessToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'Security access token used for accessing the invoice anonymously' }),
    Client: ClientDetailsApiModelSchema.exactOptional(),
    ClonedFromId: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Indicate from which invoice this invoice has been cloned from' }),
    Currency: CurrencyDetailsApiModelSchema.exactOptional(),
    DiscountAmount: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Amount that goes as a discount' }),
    Duedate: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Indicates when the invoice will be proclamed as due' }),
    EnablePartialPayments: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Indicate that the invoice allows the user to pay the invoice partially',
      }),
    Id: z.int32().exactOptional().openapi({ description: 'Invoice id' }),
    InvoiceCategoryId: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Hold the id of the invoice category' }),
    IssuedOn: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Indicates when the invoice was issued' }),
    Notes: z
      .string()
      .exactOptional()
      .openapi({ description: 'Internal note regarding the invoice' }),
    Number: z.string().exactOptional().openapi({ description: 'Unique invoice number' }),
    PoNumber: z
      .string()
      .exactOptional()
      .openapi({ description: 'Unique number generated by the buyer' }),
    RecurringProfile: InvoiceRecurringApiModelSchema.exactOptional(),
    RecurringProfileId: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Hold the id of the recurring profile' }),
    ShouldSendReminders: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Should send email reminders to client?' }),
    Status: z
      .enum(['Draft', 'Paid', 'Unpaid', 'Overdue', 'Void'])
      .exactOptional()
      .openapi({ description: 'Indicate the status of the invoice (paid/unpaid/overdue)' }),
    SubTotalAmount: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Total amount of the invoice without tax' }),
    TaxAmount: z.float64().exactOptional().openapi({ description: 'Amount that goes to the tax' }),
    Terms: z.string().exactOptional().openapi({ description: 'Terms of agreement' }),
    TotalAmount: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Total amount of the invoice with tax' }),
  })
  .openapi({ required: [] })
  .openapi('InvoiceDetailsApiModel')

const InvoiceItemApiModelSchema = z
  .object({
    Cost: z.float64().exactOptional().openapi({ description: 'Amount per unit' }),
    Description: z
      .string()
      .exactOptional()
      .openapi({ description: 'Additional description attached to the invoice item' }),
    DiscountAmount: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Amount that goes as a discount' }),
    DiscountPercentage: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Discount percentage for the overall amount' }),
    Id: z.int32().exactOptional().openapi({ description: 'Id of invoice item' }),
    Quantity: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Quantity in total used for the work type' }),
    SubTotalAmount: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Sub-Total amount of the invoice item (Amount without tax)' }),
    TaxAmount: z.float64().exactOptional().openapi({ description: 'Amount that goes to the tax' }),
    TaxId: z.int32().exactOptional().openapi({ description: 'Tax applied on the item' }),
    TaxPercentage: z.float64().exactOptional().openapi({ description: 'Task percentage. Ex: 18%' }),
    TotalAmount: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Total amount of the invoice item' }),
    WorkTypeId: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Work type (Name of the service)' }),
  })
  .openapi({ required: [] })
  .openapi('InvoiceItemApiModel')

const InvoicePaymentApiModelSchema = z
  .object({
    Amount: z.float64().exactOptional().openapi({ description: 'Total amount of the payment' }),
    Id: z.int32().exactOptional().openapi({ description: 'Id of invoice payment' }),
    IsAutomatic: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Indicate if the payment is automatic or manual' }),
    Note: z.string().exactOptional().openapi({ description: 'Internal payment note' }),
    PaidOn: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'When the payment was done by the client' }),
    ReferenceId: z.string().exactOptional().openapi({ description: 'Id of the payment' }),
    Type: z
      .enum([
        'Other',
        'Paypal',
        'Stripe',
        'Payoneer',
        'Bank',
        'Cash',
        'Cheque',
        'Ach',
        'Sepa',
        'Square',
        'KlikAndPay',
        'Razorpay',
        'Wepay',
        'Halkbank',
        'TwoCheckout',
        'PaymentWall',
        'BamboraEU',
        'BamboraNA',
        'Nlb',
        'AuthorizeNet',
        'Braintree',
      ])
      .exactOptional()
      .openapi({ description: 'Type of payment' }),
  })
  .openapi({ required: [] })
  .openapi('InvoicePaymentApiModel')

const InvoiceFullDetailsApiModelSchema = z
  .object({
    AccessToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'Security access token used for accessing the invoice anonymously' }),
    Activities: z
      .array(InvoiceActivityApiModelSchema)
      .exactOptional()
      .openapi({ description: 'List of invoice activities. Invoice audit log' }),
    Attachments: z
      .array(InvoiceAttachmentApiModelSchema)
      .exactOptional()
      .openapi({ description: 'List of invoice attachments' }),
    Client: ClientDetailsApiModelSchema.exactOptional(),
    ClonedFromId: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Indicate from which invoice this invoice has been cloned from' }),
    Currency: CurrencyDetailsApiModelSchema.exactOptional(),
    DiscountAmount: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Amount that goes as a discount' }),
    Duedate: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Indicates when the invoice will be proclamed as due' }),
    EnablePartialPayments: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Indicate that the invoice allows the user to pay the invoice partially',
      }),
    Id: z.int32().exactOptional().openapi({ description: 'Invoice id' }),
    InvoiceCategoryId: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Hold the id of the invoice category' }),
    IssuedOn: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Indicates when the invoice was issued' }),
    Items: z
      .array(InvoiceItemApiModelSchema)
      .exactOptional()
      .openapi({ description: 'List of invoice items' }),
    Notes: z
      .string()
      .exactOptional()
      .openapi({ description: 'Internal note regarding the invoice' }),
    Number: z.string().exactOptional().openapi({ description: 'Unique invoice number' }),
    PaymentGateways: z
      .array(InvoiceGatewayApiModelSchema)
      .exactOptional()
      .openapi({ description: 'List of enabled payment gateways for this invoice' }),
    Payments: z
      .array(InvoicePaymentApiModelSchema)
      .exactOptional()
      .openapi({ description: 'List of invoice payments' }),
    PoNumber: z
      .string()
      .exactOptional()
      .openapi({ description: 'Unique number generated by the buyer' }),
    RecurringProfile: InvoiceRecurringApiModelSchema.exactOptional(),
    RecurringProfileId: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Hold the id of the recurring profile' }),
    ShouldSendReminders: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Should send email reminders to client?' }),
    Status: z
      .enum(['Draft', 'Paid', 'Unpaid', 'Overdue', 'Void'])
      .exactOptional()
      .openapi({ description: 'Indicate the status of the invoice (paid/unpaid/overdue)' }),
    SubTotalAmount: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Total amount of the invoice without tax' }),
    TaxAmount: z.float64().exactOptional().openapi({ description: 'Amount that goes to the tax' }),
    Terms: z.string().exactOptional().openapi({ description: 'Terms of agreement' }),
    TotalAmount: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Total amount of the invoice with tax' }),
  })
  .openapi({ required: [] })
  .openapi('InvoiceFullDetailsApiModel')

const InvoiceMessageSchema = z
  .object({
    AttachPdf: z.boolean().exactOptional(),
    Id: z.int32().exactOptional(),
    InvoiceId: z.int32().exactOptional(),
    Message: z.string().exactOptional(),
    SendToSelf: z.boolean().exactOptional(),
    Subject: z.string().exactOptional(),
    Type: z.enum(['SendInvoice', 'SendInvoiceReminder']).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('InvoiceMessage')

const InvoiceUpdateAttachmentApiModelSchema = z
  .object({
    Id: z.int32().exactOptional().openapi({ description: 'Id of invoice attachment' }),
    Link: z.string().exactOptional().openapi({ description: 'Link to the file' }),
    ObfuscatedFileName: z
      .string()
      .exactOptional()
      .openapi({ description: 'Hashed file name to avoid url wildguessing' }),
    OriginalFileName: z.string().exactOptional().openapi({ description: 'Name of the file' }),
    Size: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: 'File size number in bytes' }),
    Type: z
      .enum(['External', 'Uploaded'])
      .exactOptional()
      .openapi({ description: 'Type of the link (Attached or external)' }),
  })
  .openapi({ required: [] })
  .openapi('InvoiceUpdateAttachmentApiModel')

const InvoiceUpdateItemApiModelSchema = z
  .object({
    Cost: z.float64().exactOptional().openapi({ description: 'Amount per unit' }),
    Description: z
      .string()
      .exactOptional()
      .openapi({ description: 'Additional description attached to the invoice item' }),
    DiscountPercentage: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Discount percentage for the overall amount' }),
    Id: z.int32().exactOptional().openapi({ description: 'Id of invoice item' }),
    Quantity: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Quantity in total used for the work type' }),
    TaxId: z.int32().exactOptional().openapi({ description: 'Tax applied on the item' }),
    TaxPercentage: z.float64().exactOptional().openapi({ description: 'Task percentage. Ex: 18%' }),
    WorkTypeId: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Work type (Name of the service)' }),
  })
  .openapi({ required: [] })
  .openapi('InvoiceUpdateItemApiModel')

const InvoiceUpdateApiModelSchema = z
  .object({
    Attachments: z
      .array(InvoiceUpdateAttachmentApiModelSchema)
      .exactOptional()
      .openapi({ description: 'List of invoice attachments' }),
    ClientId: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The client to whom this invoice is assigned' }),
    ClonedFromId: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Indicate from which invoice this invoice has been cloned from' }),
    CurrencyId: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Id of the currency for the invoice amounts' }),
    Duedate: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Indicates when the invoice will be proclamed as due' }),
    Id: z.int32().exactOptional().openapi({ description: 'Invoice id' }),
    InvoiceCategoryId: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Hold the id of the invoice category' }),
    IssuedOn: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Indicates when the invoice was issued' }),
    Items: z
      .array(InvoiceUpdateItemApiModelSchema)
      .exactOptional()
      .openapi({ description: 'List of invoice items' }),
    Notes: z
      .string()
      .exactOptional()
      .openapi({ description: 'Internal note regarding the invoice' }),
    Number: z.string().exactOptional().openapi({ description: 'Unique invoice number' }),
    PaymentGateways: z
      .array(InvoiceGatewayApiModelSchema)
      .exactOptional()
      .openapi({ description: 'List of enabled payment gateways for this invoice' }),
    PoNumber: z
      .string()
      .exactOptional()
      .openapi({ description: 'Unique number generated by the buyer' }),
    RecurringProfile: InvoiceRecurringApiModelSchema.exactOptional(),
    RecurringProfileId: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Hold the id of the recurring profile' }),
    ShouldSendReminders: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Should send email reminders to client?' }),
    Status: z
      .enum(['Draft', 'Paid', 'Unpaid', 'Overdue', 'Void'])
      .exactOptional()
      .openapi({ description: 'Indicate the status of the invoice (paid/unpaid/overdue)' }),
    Terms: z.string().exactOptional().openapi({ description: 'Terms of agreement' }),
  })
  .openapi({ required: [] })
  .openapi('InvoiceUpdateApiModel')

const InvoiceUriApiModelSchema = z
  .object({
    Link: z.string().exactOptional().openapi({ description: 'Unique link to the invoice' }),
  })
  .openapi({ required: [] })
  .openapi('InvoiceUriApiModel')

const ListResultEstimationDetailsApiModelSchema = z
  .object({
    Count: z.int32().exactOptional().openapi({ readOnly: true }),
    ErrorMessages: z.array(IErrorInfoSchema).exactOptional(),
    IsFaulted: z.boolean().exactOptional(),
    Result: z.array(EstimationDetailsApiModelSchema).exactOptional(),
    TotalCount: z.int32().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListResultEstimationDetailsApiModel')

const ListResultInvoiceCategoryApiModelSchema = z
  .object({
    Count: z.int32().exactOptional().openapi({ readOnly: true }),
    ErrorMessages: z.array(IErrorInfoSchema).exactOptional(),
    IsFaulted: z.boolean().exactOptional(),
    Result: z.array(InvoiceCategoryApiModelSchema).exactOptional(),
    TotalCount: z.int32().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListResultInvoiceCategoryApiModel')

const ListResultInvoiceDetailsApiModelSchema = z
  .object({
    Count: z.int32().exactOptional().openapi({ readOnly: true }),
    ErrorMessages: z.array(IErrorInfoSchema).exactOptional(),
    IsFaulted: z.boolean().exactOptional(),
    Result: z.array(InvoiceDetailsApiModelSchema).exactOptional(),
    TotalCount: z.int32().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListResultInvoiceDetailsApiModel')

const OrderBillingDetailsApiModelSchema = z
  .object({
    Address: z.string().exactOptional().openapi({ description: 'Client street and number' }),
    CountryId: z.int32().exactOptional().openapi({ description: 'Client country id' }),
    Email: z.string().exactOptional().openapi({ description: 'Client email' }),
    Name: z.string().exactOptional().openapi({ description: 'Client name' }),
    PhoneNumber: z.string().exactOptional().openapi({ description: 'Client phone number' }),
  })
  .openapi({ required: [] })
  .openapi('OrderBillingDetailsApiModel')

const OrderShippingDetailsApiModelSchema = z
  .object({
    Address: z.string().exactOptional().openapi({ description: 'Client street and number' }),
    CountryId: z.int32().exactOptional().openapi({ description: 'Client country id' }),
    Email: z.string().exactOptional().openapi({ description: 'Client email' }),
    Name: z.string().exactOptional().openapi({ description: 'Client name' }),
    PhoneNumber: z.string().exactOptional().openapi({ description: 'Client phone number' }),
  })
  .openapi({ required: [] })
  .openapi('OrderShippingDetailsApiModel')

const OrderDetailsApiModelSchema = z
  .object({
    AccessToken: z.string().exactOptional().openapi({ description: 'Product short link' }),
    AfterPaymentDescription: z
      .string()
      .exactOptional()
      .openapi({ description: 'After payment description' }),
    CouponCode: z
      .string()
      .exactOptional()
      .openapi({ description: 'Coupon to apply in order to get the discount' }),
    Currency: CurrencyDetailsApiModelSchema.exactOptional(),
    CurrencyId: z.int32().exactOptional().openapi({ description: 'Foreign key Currency' }),
    Description: z.string().exactOptional().openapi({ description: 'Product description' }),
    DiscountAmount: z.float64().exactOptional().openapi({ description: 'Discount amount' }),
    Id: z.int32().exactOptional().openapi({ description: 'Order id' }),
    Name: z.string().exactOptional().openapi({ description: 'Product alias' }),
    Note: z.string().exactOptional().openapi({ description: 'Customer note to seller' }),
    OrderBillingDetails: OrderBillingDetailsApiModelSchema.exactOptional(),
    OrderShippingDetails: OrderShippingDetailsApiModelSchema.exactOptional(),
    ProductId: z.int32().exactOptional().openapi({ description: 'Product id' }),
    Referral: z
      .string()
      .exactOptional()
      .openapi({ description: 'Represent the referral for this order' }),
    ShippingAmount: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Cost for shipping the product' }),
    ShippingDescription: z
      .string()
      .exactOptional()
      .openapi({ description: 'Client instructions for shipping' }),
    Status: z
      .enum([
        'PendingPayment',
        'Processing',
        'Shipped',
        'Completed',
        'OnHold',
        'Cancelled',
        'Refunded',
        'Failed',
      ])
      .exactOptional()
      .openapi({ description: 'Order status' }),
    SubTotalAmount: z.float64().exactOptional().openapi({ description: 'Sub total amount' }),
    TaxAmount: z.float64().exactOptional().openapi({ description: 'Tax amount' }),
    TotalAmount: z.float64().exactOptional().openapi({ description: 'Total amount' }),
    TotalWithShipping: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Total amount with shipping' }),
    WhatHappensNextDescription: z
      .string()
      .exactOptional()
      .openapi({ description: 'What happens next description' }),
  })
  .openapi({ required: [] })
  .openapi('OrderDetailsApiModel')

const ListResultOrderDetailsApiModelSchema = z
  .object({
    Count: z.int32().exactOptional().openapi({ readOnly: true }),
    ErrorMessages: z.array(IErrorInfoSchema).exactOptional(),
    IsFaulted: z.boolean().exactOptional(),
    Result: z.array(OrderDetailsApiModelSchema).exactOptional(),
    TotalCount: z.int32().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListResultOrderDetailsApiModel')

const TaxSchema = z
  .object({
    Id: z.int32().exactOptional(),
    Name: z.string().exactOptional(),
    Percentage: z.float64().exactOptional(),
    UserId: z.int32().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Tax')

const WorkTypeSchema = z
  .object({
    Id: z.int32().exactOptional(),
    Title: z.string().exactOptional(),
    UserId: z.int32().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('WorkType')

const PaymentLinkItemSchema = z
  .object({
    Cost: z.float64().exactOptional(),
    DiscountAmount: z.float64().exactOptional(),
    DiscountPercentage: z.float64().exactOptional(),
    Id: z.int32().exactOptional(),
    PaymentLinkId: z.int32().exactOptional(),
    Quantity: z.float64().exactOptional(),
    SubTotalAmount: z.float64().exactOptional(),
    Tax: TaxSchema.exactOptional(),
    TaxAmount: z.float64().exactOptional(),
    TaxId: z.int32().exactOptional(),
    TaxPercentage: z.float64().exactOptional(),
    TotalAmount: z.float64().exactOptional(),
    WorkType: WorkTypeSchema.exactOptional(),
    WorkTypeId: z.int32().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PaymentLinkItem')

const UiLanguageSchema = z
  .object({
    Id: z.int32().exactOptional(),
    Name: z.string().exactOptional(),
    UiCulture: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UiLanguage')

const UserSettingsSchema = z
  .object({
    AccountantEmail: z.string().exactOptional(),
    Address: z.string().exactOptional(),
    ApiKey: z.string().exactOptional(),
    ApiSecret: z.string().exactOptional(),
    BackgroundImage: z.string().exactOptional(),
    Bank: z.string().exactOptional(),
    BankAccount: z.string().exactOptional(),
    Cname: z.string().exactOptional(),
    CompanyRegistrationNumber: z.string().exactOptional(),
    Country: CountrySchema.exactOptional(),
    CountryId: z.int32().exactOptional(),
    Currency: CurrencySchema.exactOptional(),
    CurrencyId: z.int32().exactOptional(),
    CurrencySymbol: z.string().exactOptional(),
    DefaultDateFormat: z.string().exactOptional(),
    DefaultDueDateInDays: z.int32().exactOptional(),
    DoNotTrack: z.boolean().exactOptional(),
    EnableClientPortal: z.boolean().exactOptional(),
    EnablePredictiveInvoicing: z.boolean().exactOptional(),
    EnableRecurringInvoicing: z.boolean().exactOptional(),
    HasInvoiceLogo: z.boolean().exactOptional(),
    Iban: z.string().exactOptional(),
    Id: z.int32().exactOptional(),
    InvoiceTemplate: z.enum(['Default', 'Template1', 'Template2']).exactOptional(),
    InvoiceTemplateColorHex: z.string().exactOptional(),
    PhoneNumber: z.string().exactOptional(),
    Profession: z
      .enum([
        'Other',
        'DesignAndCreative',
        'SoftwareDevelopment',
        'ContentWritingAndMarketing',
        'Freelancers',
        'Consultants',
        'Smes',
        'Enterprise',
        'ECommerce',
        'Individual',
      ])
      .exactOptional(),
    ReceiveSmsNotifications: z.boolean().exactOptional(),
    ReferralProgram: z.enum(['Enabled', 'Disabled']).exactOptional(),
    StoreCheckoutFields: z.enum(['ShowMinimumRequiredFields', 'ShowAllFields']).exactOptional(),
    StoreColorHex: z.string().exactOptional(),
    StoreCurrency: CurrencySchema.exactOptional(),
    StoreCurrencyId: z.int32().exactOptional(),
    StoreCustomJavaScript: z.string().exactOptional(),
    StoreDescription: z.string().exactOptional(),
    StoreEmail: z.string().exactOptional(),
    StoreLanguage: UiLanguageSchema.exactOptional(),
    StoreLanguageId: z.int32().exactOptional(),
    StoreName: z.string().exactOptional(),
    StorePurchaseEmailMessage: z.string().exactOptional(),
    StorePurchaseThankYouMessage: z.string().exactOptional(),
    StoreTextColorHex: z.string().exactOptional(),
    StoreUrl: z.string().exactOptional(),
    SubscribeToProductEmails: z.boolean().exactOptional(),
    Swift: z.string().exactOptional(),
    Terms: z.string().exactOptional(),
    UserId: z.int32().exactOptional(),
    UserSignature: z.string().exactOptional(),
    VatNumber: z.string().exactOptional(),
    YearsOfExperience: z.int32().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UserSettings')

const SubscriptionPlanSchema = z
  .object({
    CancellatedOn: z.iso.datetime({ offset: true }).exactOptional(),
    CouponCode: z.string().exactOptional(),
    CurrencyCode: z.string().exactOptional(),
    ExternalIdentifier: z.string().exactOptional(),
    Features: z
      .array(z.enum(['Api', 'Teams', 'Clients', 'Shop', 'PaymentLinks', 'Cname']))
      .exactOptional(),
    HasDuePayment: z.boolean().exactOptional(),
    HasDuePaymentSince: z.iso.datetime({ offset: true }).exactOptional(),
    Id: z.int32().exactOptional(),
    Identifier: z.string().exactOptional(),
    IsActive: z.boolean().exactOptional(),
    IsLifetime: z.boolean().exactOptional(),
    LastPaymentOn: z.iso.datetime({ offset: true }).exactOptional(),
    MaxClients: z.int32().exactOptional(),
    Name: z.string().exactOptional(),
    OnHold: z.boolean().exactOptional(),
    OrderIdentifier: z.string().exactOptional(),
    Price: z.float64().exactOptional(),
    Recurrence: z.enum(['Monthly', 'Yearly']).exactOptional(),
    SaleId: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    Status: z
      .enum(['ActiveTrial', 'ExpiredTrial', 'Active', 'Canceled', 'Fraudlent'])
      .exactOptional(),
    SystemCancelationReason: z.enum(['FailToCaptureFee', 'Fraud']).exactOptional(),
    TrialEndsOn: z.iso.datetime({ offset: true }).exactOptional(),
    TrialNumberOfDays: z.int32().exactOptional(),
    TrialStartsOn: z.iso.datetime({ offset: true }).exactOptional(),
    UserId: z.int32().exactOptional(),
    Version: z.int32().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('SubscriptionPlan')

const UserSchema = z
  .object({
    ActionNotificationsLastReadOn: z.iso.datetime({ offset: true }).exactOptional(),
    Email: z.string().exactOptional(),
    ExternalConnections: z.array(ExternalConnectionSchema).exactOptional(),
    HasBeenOnboarded: z.boolean().exactOptional(),
    Id: z.int32().exactOptional(),
    IsLocked: z.boolean().exactOptional(),
    IsVerified: z.boolean().exactOptional(),
    KnowledgeNotificationsLastReadOn: z.iso.datetime({ offset: true }).exactOptional(),
    LastSeenOn: z.iso.datetime({ offset: true }).exactOptional(),
    Name: z.string().exactOptional(),
    Password: z.string().exactOptional(),
    PasswordSalt: z.string().exactOptional(),
    ReferralPath: z.string().exactOptional(),
    ReferredUsers: z.int32().exactOptional(),
    ReferrerKey: z.string().exactOptional(),
    Settings: UserSettingsSchema.exactOptional(),
    Status: z.enum(['Normal', 'Fraudlent', 'Locked']).exactOptional(),
    SubscriptionPlan: SubscriptionPlanSchema.exactOptional(),
    Type: z.enum(['Anonymous', 'Customer', 'SystemAdministrator', 'Collaborator']).exactOptional(),
    Username: z.string().exactOptional(),
    VerifiedOn: z.iso.datetime({ offset: true }).exactOptional(),
    YearsOfExperience: z.enum(['One', 'OneToThree', 'ThreeToFive', 'SixPlus']).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('User')

const PaymentLinkSchema = z
  .object({
    AccessToken: z.string().exactOptional(),
    Client: ClientSchema.exactOptional(),
    ClientId: z.int32().exactOptional(),
    Currency: CurrencySchema.exactOptional(),
    CurrencyId: z.int32().exactOptional(),
    DiscountAmount: z.float64().exactOptional(),
    Id: z.int32().exactOptional(),
    Invoice: InvoiceSchema.exactOptional(),
    Items: z.array(PaymentLinkItemSchema).exactOptional(),
    Number: z.string().exactOptional(),
    SubTotalAmount: z.float64().exactOptional(),
    TaxAmount: z.float64().exactOptional(),
    TotalAmount: z.float64().exactOptional(),
    User: UserSchema.exactOptional(),
    UserId: z.int32().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PaymentLink')

const ListResultPaymentLinkSchema = z
  .object({
    Count: z.int32().exactOptional().openapi({ readOnly: true }),
    ErrorMessages: z.array(IErrorInfoSchema).exactOptional(),
    IsFaulted: z.boolean().exactOptional(),
    Result: z.array(PaymentLinkSchema).exactOptional(),
    TotalCount: z.int32().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListResultPaymentLink')

const ProductDetailsApiModelSchema = z
  .object({
    AccessToken: z.string().exactOptional().openapi({ description: 'Product short link' }),
    AfterPaymentDescription: z
      .string()
      .exactOptional()
      .openapi({ description: 'After payment description' }),
    ButtonCallToAction: z
      .string()
      .exactOptional()
      .openapi({ description: 'Default button call to action\r\nEx: Buy now, subscribe, ...' }),
    Currency: CurrencyDetailsApiModelSchema.exactOptional(),
    CurrencyId: z.int32().exactOptional().openapi({ description: 'Foreign key Currency' }),
    Description: z.string().exactOptional().openapi({ description: 'Product description' }),
    Id: z.int32().exactOptional().openapi({ description: 'Product id' }),
    IsFeatured: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Indicate that the product is set as featured' }),
    Name: z.string().exactOptional().openapi({ description: 'Product alias' }),
    ShippingAmount: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Cost for shipping the product' }),
    ShippingDescription: z
      .string()
      .exactOptional()
      .openapi({ description: 'Client instructions for shipping' }),
    Status: z
      .enum(['Active', 'NotAvailable', 'Inactive'])
      .exactOptional()
      .openapi({ description: 'Product availability status' }),
    SubTotalAmount: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Subtotal amount of product' }),
    TotalAmount: z.float64().exactOptional().openapi({ description: 'Total amount of product' }),
    TotalWithShipping: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Total amount of product with shipping' }),
    WhatHappensNextDescription: z
      .string()
      .exactOptional()
      .openapi({ description: 'What happens next description' }),
  })
  .openapi({ required: [] })
  .openapi('ProductDetailsApiModel')

const ListResultProductDetailsApiModelSchema = z
  .object({
    Count: z.int32().exactOptional().openapi({ readOnly: true }),
    ErrorMessages: z.array(IErrorInfoSchema).exactOptional(),
    IsFaulted: z.boolean().exactOptional(),
    Result: z.array(ProductDetailsApiModelSchema).exactOptional(),
    TotalCount: z.int32().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListResultProductDetailsApiModel')

const OrderAttachmentApiModelSchema = z
  .object({
    Link: z.string().exactOptional().openapi({ description: 'Link to the file' }),
    ObfuscatedFileName: z
      .string()
      .exactOptional()
      .openapi({ description: 'Hashed file name to avoid url wildguessing' }),
    OriginalFileName: z.string().exactOptional().openapi({ description: 'Name of the file' }),
    Size: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: 'File size number in bytes' }),
    Type: z
      .enum(['External', 'Uploaded'])
      .exactOptional()
      .openapi({ description: 'Type of the link (Attached or external)' }),
  })
  .openapi({ required: [] })
  .openapi('OrderAttachmentApiModel')

const OrderItemApiModelSchema = z
  .object({
    Cost: z.float64().exactOptional().openapi({ description: 'Work item cost' }),
    Description: z.string().exactOptional().openapi({ description: 'General description' }),
    ProductItemId: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Foreign key product item id' }),
    Quantity: z.float64().exactOptional().openapi({ description: 'Work item quantity' }),
    ReferenceId: z.string().exactOptional().openapi({ description: 'Order SKU' }),
    SubTotalAmount: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Subtotal amount of product' }),
    TaxAmount: z.float64().exactOptional().openapi({ description: 'Tax amount' }),
    TaxId: z.int32().exactOptional().openapi({ description: 'Foreign key Tax id' }),
    TaxPercentage: z.float64().exactOptional().openapi({ description: 'Tax percentage' }),
    TotalAmount: z.float64().exactOptional().openapi({ description: 'Total amount of product' }),
    WorkTypeId: z.int32().exactOptional().openapi({ description: 'Foreign key work type id' }),
  })
  .openapi({ required: [] })
  .openapi('OrderItemApiModel')

const OrderCreateApiModelSchema = z
  .object({
    AfterPaymentDescription: z
      .string()
      .exactOptional()
      .openapi({ description: 'After payment description' }),
    Attachments: z
      .array(OrderAttachmentApiModelSchema)
      .exactOptional()
      .openapi({ description: 'List of Order attachments' }),
    CouponCode: z
      .string()
      .exactOptional()
      .openapi({ description: 'Coupon to apply in order to get the discount' }),
    CurrencyId: z.int32().exactOptional().openapi({ description: 'Foreign key Currency' }),
    Description: z.string().exactOptional().openapi({ description: 'Product description' }),
    DiscountAmount: z.float64().exactOptional().openapi({ description: 'Discount amount' }),
    Items: z
      .array(OrderItemApiModelSchema)
      .exactOptional()
      .openapi({ description: 'List of Order items' }),
    Name: z.string().exactOptional().openapi({ description: 'Product alias' }),
    Note: z.string().exactOptional().openapi({ description: 'Customer note to seller' }),
    OrderBillingDetails: OrderBillingDetailsApiModelSchema.exactOptional(),
    OrderShippingDetails: OrderShippingDetailsApiModelSchema.exactOptional(),
    ProductId: z.int32().exactOptional().openapi({ description: 'Product id' }),
    Referral: z
      .string()
      .exactOptional()
      .openapi({ description: 'Represent the referral for this order' }),
    ShippingAmount: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Cost for shipping the product' }),
    ShippingDescription: z
      .string()
      .exactOptional()
      .openapi({ description: 'Client instructions for shipping' }),
    Status: z
      .enum([
        'PendingPayment',
        'Processing',
        'Shipped',
        'Completed',
        'OnHold',
        'Cancelled',
        'Refunded',
        'Failed',
      ])
      .exactOptional()
      .openapi({ description: 'Order status' }),
    SubTotalAmount: z.float64().exactOptional().openapi({ description: 'Sub total amount' }),
    TaxAmount: z.float64().exactOptional().openapi({ description: 'Tax amount' }),
    TotalAmount: z.float64().exactOptional().openapi({ description: 'Total amount' }),
    WhatHappensNextDescription: z
      .string()
      .exactOptional()
      .openapi({ description: 'What happens next description' }),
  })
  .openapi({ required: [] })
  .openapi('OrderCreateApiModel')

const OrderDeleteApiModelSchema = z
  .object({ Id: z.int32().exactOptional().openapi({ description: 'Id of order to be deleted' }) })
  .openapi({ required: [] })
  .openapi('OrderDeleteApiModel')

const OrderFullDetailsApiModelSchema = z
  .object({
    AccessToken: z.string().exactOptional().openapi({ description: 'Product short link' }),
    AfterPaymentDescription: z
      .string()
      .exactOptional()
      .openapi({ description: 'After payment description' }),
    Attachments: z
      .array(OrderAttachmentApiModelSchema)
      .exactOptional()
      .openapi({ description: 'List of Order attachments' }),
    CouponCode: z
      .string()
      .exactOptional()
      .openapi({ description: 'Coupon to apply in order to get the discount' }),
    Currency: CurrencyDetailsApiModelSchema.exactOptional(),
    CurrencyId: z.int32().exactOptional().openapi({ description: 'Foreign key Currency' }),
    Description: z.string().exactOptional().openapi({ description: 'Product description' }),
    DiscountAmount: z.float64().exactOptional().openapi({ description: 'Discount amount' }),
    Id: z.int32().exactOptional().openapi({ description: 'Order id' }),
    Items: z
      .array(OrderItemApiModelSchema)
      .exactOptional()
      .openapi({ description: 'List of Order items' }),
    Name: z.string().exactOptional().openapi({ description: 'Product alias' }),
    Note: z.string().exactOptional().openapi({ description: 'Customer note to seller' }),
    OrderBillingDetails: OrderBillingDetailsApiModelSchema.exactOptional(),
    OrderShippingDetails: OrderShippingDetailsApiModelSchema.exactOptional(),
    ProductId: z.int32().exactOptional().openapi({ description: 'Product id' }),
    Referral: z
      .string()
      .exactOptional()
      .openapi({ description: 'Represent the referral for this order' }),
    ShippingAmount: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Cost for shipping the product' }),
    ShippingDescription: z
      .string()
      .exactOptional()
      .openapi({ description: 'Client instructions for shipping' }),
    Status: z
      .enum([
        'PendingPayment',
        'Processing',
        'Shipped',
        'Completed',
        'OnHold',
        'Cancelled',
        'Refunded',
        'Failed',
      ])
      .exactOptional()
      .openapi({ description: 'Order status' }),
    SubTotalAmount: z.float64().exactOptional().openapi({ description: 'Sub total amount' }),
    TaxAmount: z.float64().exactOptional().openapi({ description: 'Tax amount' }),
    TotalAmount: z.float64().exactOptional().openapi({ description: 'Total amount' }),
    TotalWithShipping: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Total amount with shipping' }),
    WhatHappensNextDescription: z
      .string()
      .exactOptional()
      .openapi({ description: 'What happens next description' }),
  })
  .openapi({ required: [] })
  .openapi('OrderFullDetailsApiModel')

const PaymentGatewayInputFieldSchema = z
  .object({
    IsConfigurable: z.boolean().exactOptional(),
    Name: z.string().exactOptional(),
    Type: z.enum(['Input', 'Dropdown']).exactOptional(),
    Value: z.string().exactOptional(),
    Values: z.array(z.string()).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PaymentGatewayInputField')

const PaymentGatewaySchema = z
  .object({
    CanDisconnect: z.boolean().exactOptional(),
    ClientImportUri: z.string().exactOptional(),
    ConnectionType: z.enum(['OAuth', 'InputFields', 'Dropdown']).exactOptional(),
    ExternalConnectionId: z.int32().exactOptional(),
    Fields: z.array(PaymentGatewayInputFieldSchema).exactOptional(),
    IsConnected: z.boolean().exactOptional(),
    IsEnabled: z.boolean().exactOptional(),
    MaximumAmount: z.float64().exactOptional(),
    MinimumAmount: z.float64().exactOptional(),
    Name: z.string().exactOptional(),
    OAuthUri: z.string().exactOptional(),
    RefundUri: z.string().exactOptional(),
    SupportedCurrencies: z.array(CurrencySchema).exactOptional(),
    SupportsClientsImport: z.boolean().exactOptional(),
    SupportsInstantCheckout: z.boolean().exactOptional(),
    SupportsRefund: z.boolean().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PaymentGateway')

const PaymentGatewayDetailsApiModelSchema = z
  .object({
    Name: z.string().exactOptional().openapi({ description: 'Name of the payment gateway' }),
    SupportedCurrencies: z
      .array(CurrencyApiModelSchema)
      .exactOptional()
      .openapi({ description: 'List of supported currencies.' }),
  })
  .openapi({ required: [] })
  .openapi('PaymentGatewayDetailsApiModel')

const PaymentLinkUriApiModelSchema = z
  .object({
    Link: z.string().exactOptional().openapi({ description: 'Unique link to the invoice' }),
  })
  .openapi({ required: [] })
  .openapi('PaymentLinkUriApiModel')

const ProductAttachmentApiModelSchema = z
  .object({
    Id: z.int32().exactOptional().openapi({ description: 'Product attachment id' }),
    Link: z.string().exactOptional().openapi({ description: 'Link to the file' }),
    ObfuscatedFileName: z
      .string()
      .exactOptional()
      .openapi({ description: 'Hashed file name to avoid url wildguessing' }),
    OriginalFileName: z.string().exactOptional().openapi({ description: 'Name of the file' }),
    Size: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: 'File size number in bytes' }),
    Type: z
      .enum(['External', 'Uploaded'])
      .exactOptional()
      .openapi({ description: 'Type of the link (Attached or external)' }),
  })
  .openapi({ required: [] })
  .openapi('ProductAttachmentApiModel')

const ProductCouponApiModelSchema = z
  .object({
    Code: z
      .string()
      .exactOptional()
      .openapi({ description: 'Coupon to apply in order to get the discount' }),
    DiscountAmount: z.float64().exactOptional().openapi({ description: 'Discount amount' }),
    DiscountPercentage: z.float64().exactOptional().openapi({ description: 'Discount percentage' }),
    Id: z.int32().exactOptional().openapi({ description: 'Product coupon id' }),
    ValidUntil: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Coupon expiration date' }),
  })
  .openapi({ required: [] })
  .openapi('ProductCouponApiModel')

const ProductDiscountApiModelSchema = z
  .object({
    DiscountAmount: z.float64().exactOptional().openapi({ description: 'Discount amount' }),
    DiscountPercentage: z.float64().exactOptional().openapi({ description: 'Discount percentage' }),
    Id: z.int32().exactOptional().openapi({ description: 'Product discount id' }),
    Name: z.string().exactOptional().openapi({ description: 'Name' }),
    ValidFrom: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Discount start date' }),
    ValidTo: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Discount expiration date' }),
  })
  .openapi({ required: [] })
  .openapi('ProductDiscountApiModel')

const ProductItemApiModelSchema = z
  .object({
    Cost: z.float64().exactOptional().openapi({ description: 'Work item cost' }),
    Description: z.string().exactOptional().openapi({ description: 'General description' }),
    Id: z.int32().exactOptional().openapi({ description: 'Product item id' }),
    MinimumQuantity: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Minimum required quantity in order to buy a work item' }),
    ReferenceId: z.string().exactOptional().openapi({ description: 'Product SKU' }),
    SubTotalAmount: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Subtotal amount of product' }),
    TaxAmount: z.float64().exactOptional().openapi({ description: 'Tax amount' }),
    TaxId: z.int32().exactOptional().openapi({ description: 'Foreign key Tax id' }),
    TaxPercentage: z.float64().exactOptional().openapi({ description: 'Tax percentage' }),
    TotalAmount: z.float64().exactOptional().openapi({ description: 'Total amount of product' }),
    WorkTypeId: z.int32().exactOptional().openapi({ description: 'Foreign key work type id' }),
  })
  .openapi({ required: [] })
  .openapi('ProductItemApiModel')

const ProductGatewayApiModelSchema = z
  .object({ Name: z.string().exactOptional().openapi({ description: 'Payment gateway name' }) })
  .openapi({ required: [] })
  .openapi('ProductGatewayApiModel')

const ProductCreateApiModelSchema = z
  .object({
    AfterPaymentDescription: z
      .string()
      .exactOptional()
      .openapi({ description: 'After payment description' }),
    Attachments: z
      .array(ProductAttachmentApiModelSchema)
      .exactOptional()
      .openapi({ description: 'List of product attachments' }),
    ButtonCallToAction: z
      .string()
      .exactOptional()
      .openapi({ description: 'Default button call to action\r\nEx: Buy now, subscribe, ...' }),
    Coupons: z
      .array(ProductCouponApiModelSchema)
      .exactOptional()
      .openapi({ description: 'List of product coupons' }),
    CurrencyId: z.int32().exactOptional().openapi({ description: 'Foreign key Currency' }),
    Description: z.string().exactOptional().openapi({ description: 'Product description' }),
    Discounts: z
      .array(ProductDiscountApiModelSchema)
      .exactOptional()
      .openapi({ description: 'List of product discounts' }),
    IsFeatured: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Indicate that the product is set as featured' }),
    Items: z
      .array(ProductItemApiModelSchema)
      .exactOptional()
      .openapi({ description: 'List of product items' }),
    Name: z.string().exactOptional().openapi({ description: 'Product alias' }),
    PaymentGateways: z
      .array(ProductGatewayApiModelSchema)
      .exactOptional()
      .openapi({ description: 'List of enabled payment gateways for this product' }),
    ShippingAmount: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Cost for shipping the product' }),
    ShippingDescription: z
      .string()
      .exactOptional()
      .openapi({ description: 'Client instructions for shipping' }),
    Status: z
      .enum(['Active', 'NotAvailable', 'Inactive'])
      .exactOptional()
      .openapi({ description: 'Product availability status' }),
    WhatHappensNextDescription: z
      .string()
      .exactOptional()
      .openapi({ description: 'What happens next description' }),
  })
  .openapi({ required: [] })
  .openapi('ProductCreateApiModel')

const ProductDeleteApiModelSchema = z
  .object({ Id: z.int32().exactOptional().openapi({ description: 'Id of product to be deleted' }) })
  .openapi({ required: [] })
  .openapi('ProductDeleteApiModel')

const ProductFullDetailsApiModelSchema = z
  .object({
    AccessToken: z.string().exactOptional().openapi({ description: 'Product short link' }),
    AfterPaymentDescription: z
      .string()
      .exactOptional()
      .openapi({ description: 'After payment description' }),
    Attachments: z
      .array(ProductAttachmentApiModelSchema)
      .exactOptional()
      .openapi({ description: 'List of product attachments' }),
    ButtonCallToAction: z
      .string()
      .exactOptional()
      .openapi({ description: 'Default button call to action\r\nEx: Buy now, subscribe, ...' }),
    Coupons: z
      .array(ProductCouponApiModelSchema)
      .exactOptional()
      .openapi({ description: 'List of product coupons' }),
    Currency: CurrencyDetailsApiModelSchema.exactOptional(),
    CurrencyId: z.int32().exactOptional().openapi({ description: 'Foreign key Currency' }),
    Description: z.string().exactOptional().openapi({ description: 'Product description' }),
    Discounts: z
      .array(ProductDiscountApiModelSchema)
      .exactOptional()
      .openapi({ description: 'List of product discounts' }),
    Id: z.int32().exactOptional().openapi({ description: 'Product id' }),
    IsFeatured: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Indicate that the product is set as featured' }),
    Items: z
      .array(ProductItemApiModelSchema)
      .exactOptional()
      .openapi({ description: 'List of product items' }),
    Name: z.string().exactOptional().openapi({ description: 'Product alias' }),
    PaymentGateways: z
      .array(ProductGatewayApiModelSchema)
      .exactOptional()
      .openapi({ description: 'List of enabled payment gateways for this product' }),
    ShippingAmount: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Cost for shipping the product' }),
    ShippingDescription: z
      .string()
      .exactOptional()
      .openapi({ description: 'Client instructions for shipping' }),
    Status: z
      .enum(['Active', 'NotAvailable', 'Inactive'])
      .exactOptional()
      .openapi({ description: 'Product availability status' }),
    SubTotalAmount: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Subtotal amount of product' }),
    TotalAmount: z.float64().exactOptional().openapi({ description: 'Total amount of product' }),
    TotalWithShipping: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Total amount of product with shipping' }),
    WhatHappensNextDescription: z
      .string()
      .exactOptional()
      .openapi({ description: 'What happens next description' }),
  })
  .openapi({ required: [] })
  .openapi('ProductFullDetailsApiModel')

const ProductUpdateApiModelSchema = z
  .object({
    AfterPaymentDescription: z
      .string()
      .exactOptional()
      .openapi({ description: 'After payment description' }),
    Attachments: z
      .array(ProductAttachmentApiModelSchema)
      .exactOptional()
      .openapi({ description: 'List of product attachments' }),
    ButtonCallToAction: z
      .string()
      .exactOptional()
      .openapi({ description: 'Default button call to action\r\nEx: Buy now, subscribe, ...' }),
    Coupons: z
      .array(ProductCouponApiModelSchema)
      .exactOptional()
      .openapi({ description: 'List of product coupons' }),
    CurrencyId: z.int32().exactOptional().openapi({ description: 'Foreign key Currency' }),
    Description: z.string().exactOptional().openapi({ description: 'Product description' }),
    Discounts: z
      .array(ProductDiscountApiModelSchema)
      .exactOptional()
      .openapi({ description: 'List of product discounts' }),
    Id: z.int32().exactOptional().openapi({ description: 'Product id' }),
    IsFeatured: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Indicate that the product is set as featured' }),
    Items: z
      .array(ProductItemApiModelSchema)
      .exactOptional()
      .openapi({ description: 'List of product items' }),
    Name: z.string().exactOptional().openapi({ description: 'Product alias' }),
    PaymentGateways: z
      .array(ProductGatewayApiModelSchema)
      .exactOptional()
      .openapi({ description: 'List of enabled payment gateways for this product' }),
    ShippingAmount: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Cost for shipping the product' }),
    ShippingDescription: z
      .string()
      .exactOptional()
      .openapi({ description: 'Client instructions for shipping' }),
    Status: z
      .enum(['Active', 'NotAvailable', 'Inactive'])
      .exactOptional()
      .openapi({ description: 'Product availability status' }),
    WhatHappensNextDescription: z
      .string()
      .exactOptional()
      .openapi({ description: 'What happens next description' }),
  })
  .openapi({ required: [] })
  .openapi('ProductUpdateApiModel')

const QueryOptionsSchema = z
  .object({ Page: z.int32().exactOptional(), PageSize: z.int32().exactOptional() })
  .openapi({ required: [] })
  .openapi('QueryOptions')

const QueuedInvoiceSchema = z
  .object({
    ClonedFromId: z.int32().exactOptional(),
    Id: z.int32().exactOptional(),
    Invoice: InvoiceSchema.exactOptional(),
    InvoiceId: z.int32().exactOptional(),
    RecurringProfileId: z.int32().exactOptional(),
    ScheduledFor: z.iso.datetime({ offset: true }).exactOptional(),
    Status: z.enum(['Pending', 'Cancelled', 'Failed', 'Processed']).exactOptional(),
    UserId: z.int32().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('QueuedInvoice')

const RecurringProfileSchema = z
  .object({
    DayOfMonth: z.int32().exactOptional(),
    DayOfWeek: z
      .enum(['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'])
      .exactOptional(),
    DueDateInDays: z.int32().exactOptional(),
    EndOfRecurrance: z.iso.datetime({ offset: true }).exactOptional(),
    Id: z.int32().exactOptional(),
    InvoiceId: z.int32().exactOptional(),
    Month: z.int32().exactOptional(),
    RecurrancePattern: z.enum(['Daily', 'Weekly', 'Monthly', 'Yearly']).exactOptional(),
    RecurranceValue: z.int32().exactOptional(),
    StartOfRecurrance: z.iso.datetime({ offset: true }).exactOptional(),
    Status: z.enum(['Pending', 'Active', 'Cancelled', 'Finished']).exactOptional(),
    Title: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('RecurringProfile')

const SearchRequestSchema = z
  .object({
    Order: z.enum(['None', 'Asc', 'Desc']).exactOptional(),
    OrderBy: z.string().exactOptional(),
    Page: z.int32().exactOptional(),
    PageSize: z.int32().exactOptional(),
    Query: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('SearchRequest')

const SendEstimationToClientApiModelSchema = z
  .object({
    AttachPdf: z.boolean().exactOptional().openapi({ description: 'Should attach pdf file' }),
    EstimationId: z.int32().exactOptional().openapi({ description: 'Id of the estimation' }),
    Id: z.int32().exactOptional().openapi({ description: 'Id of the estimation' }),
    Message: z
      .string()
      .exactOptional()
      .openapi({ description: 'Message to be embedded in the email' }),
    SendToSelf: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Should email copy be send to self' }),
    Subject: z.string().exactOptional().openapi({ description: 'Subject for the email' }),
  })
  .openapi({ required: [] })
  .openapi('SendEstimationToClientApiModel')

const SendInvoiceToAccountantApiModelSchema = z
  .object({ Id: z.int32().exactOptional().openapi({ description: 'Id of the invoice' }) })
  .openapi({ required: [] })
  .openapi('SendInvoiceToAccountantApiModel')

const SendInvoiceToClientApiModelSchema = z
  .object({
    AttachPdf: z.boolean().exactOptional().openapi({ description: 'Should attach pdf file' }),
    Id: z.int32().exactOptional().openapi({ description: 'Id of the invoice' }),
    InvoiceId: z.int32().exactOptional().openapi({ description: 'Id of the invoice' }),
    Message: z
      .string()
      .exactOptional()
      .openapi({ description: 'Message to be embedded in the email' }),
    SendToSelf: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Should email copy be send to self' }),
    Subject: z.string().exactOptional().openapi({ description: 'Subject for the email' }),
  })
  .openapi({ required: [] })
  .openapi('SendInvoiceToClientApiModel')

const TaxCreateApiModelSchema = z
  .object({
    Name: z.string().exactOptional().openapi({ description: 'Name of the task' }),
    Percentage: z.float64().exactOptional().openapi({ description: 'Task percentage. Ex: 18%' }),
  })
  .openapi({ required: [] })
  .openapi('TaxCreateApiModel')

const TaxDeleteApiModelSchema = z
  .object({ Id: z.int32().exactOptional().openapi({ description: 'Id of tax to be deleted' }) })
  .openapi({ required: [] })
  .openapi('TaxDeleteApiModel')

const TaxDetailsApiModelSchema = z
  .object({
    CreatedOn: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Date of creation' }),
    Id: z.int32().exactOptional().openapi({ description: 'Entity id' }),
    Name: z.string().exactOptional().openapi({ description: 'Name of the task' }),
    Percentage: z.float64().exactOptional().openapi({ description: 'Task percentage. Ex: 18%' }),
  })
  .openapi({ required: [] })
  .openapi('TaxDetailsApiModel')

const TaxUpdateApiModelSchema = z
  .object({
    Id: z.int32().exactOptional().openapi({ description: 'Entity id' }),
    Name: z.string().exactOptional().openapi({ description: 'Name of the task' }),
    Percentage: z.float64().exactOptional().openapi({ description: 'Task percentage. Ex: 18%' }),
  })
  .openapi({ required: [] })
  .openapi('TaxUpdateApiModel')

const UILanguageDetailsApiModelSchema = z
  .object({
    Id: z.int32().exactOptional().openapi({ description: 'Entity id' }),
    Name: z.string().exactOptional().openapi({ description: 'Name of the country' }),
    UiCulture: z.string().exactOptional().openapi({ description: 'Ui culture options' }),
  })
  .openapi({ required: [] })
  .openapi('UILanguageDetailsApiModel')

const WorkTypeCreateApiModelSchema = z
  .object({
    Title: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Indicates the title of of the work type (Logo design, development...)',
      }),
  })
  .openapi({ required: [] })
  .openapi('WorkTypeCreateApiModel')

const WorkTypeDeleteApiModelSchema = z
  .object({
    Id: z.int32().exactOptional().openapi({ description: 'Id of work type to be deleted' }),
  })
  .openapi({ required: [] })
  .openapi('WorkTypeDeleteApiModel')

const WorkTypeDetailsApiModelSchema = z
  .object({
    CreatedOn: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Date of creation' }),
    Id: z.int32().exactOptional().openapi({ description: 'Entity id' }),
    Title: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Indicates the title of of the work type (Logo design, development...)',
      }),
  })
  .openapi({ required: [] })
  .openapi('WorkTypeDetailsApiModel')

const WorkTypeUpdateApiModelSchema = z
  .object({
    Id: z.int32().exactOptional().openapi({ description: 'Entity id' }),
    Title: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Indicates the title of of the work type (Logo design, development...)',
      }),
  })
  .openapi({ required: [] })
  .openapi('WorkTypeUpdateApiModel')

const PaymentLinkRequestBody = {
  content: {
    'application/json': { schema: PaymentLinkSchema },
    'application/x-www-form-urlencoded': {
      schema: z
        .object({
          AccessToken: z.string().exactOptional(),
          Client: z
            .object({
              Address: z.string().exactOptional(),
              ClientCountryId: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional(),
              ClientCurrencyId: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional(),
              CompanyRegistrationNumber: z.string().exactOptional(),
              DefaultDueDateInDays: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional(),
              Email: z.string().exactOptional(),
              Id: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional(),
              Name: z.string().exactOptional(),
              PhoneNumber: z.string().exactOptional(),
              UiLanguageId: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional(),
              UserId: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional(),
              Vat: z.string().exactOptional(),
            })
            .exactOptional()
            .openapi({ required: [] }),
          ClientId: z
            .preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.int32(),
            )
            .exactOptional(),
          Currency: z
            .object({
              Code: z.string().exactOptional(),
              Id: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional(),
              Name: z.string().exactOptional(),
              Symbol: z.string().exactOptional(),
              Value: z.string().exactOptional(),
            })
            .exactOptional()
            .openapi({ required: [] }),
          CurrencyId: z
            .preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.int32(),
            )
            .exactOptional(),
          DiscountAmount: z
            .preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.float64(),
            )
            .exactOptional(),
          Id: z
            .preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.int32(),
            )
            .exactOptional(),
          Invoice: z
            .object({
              AccessToken: z.string().exactOptional(),
              Activities: z
                .preprocess(
                  (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                  z.array(
                    z
                      .object({
                        EstimationId: z
                          .preprocess(
                            (val) =>
                              typeof val === 'string' &&
                              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                ? Number(val)
                                : val,
                            z.int32(),
                          )
                          .exactOptional(),
                        EstimationNumber: z.string().exactOptional(),
                        Id: z
                          .preprocess(
                            (val) =>
                              typeof val === 'string' &&
                              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                ? Number(val)
                                : val,
                            z.int32(),
                          )
                          .exactOptional(),
                        InvoiceId: z
                          .preprocess(
                            (val) =>
                              typeof val === 'string' &&
                              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                ? Number(val)
                                : val,
                            z.int32(),
                          )
                          .exactOptional(),
                        InvoiceNumber: z.string().exactOptional(),
                        Link: z.string().exactOptional(),
                        Message: z.string().exactOptional(),
                        OrderId: z
                          .preprocess(
                            (val) =>
                              typeof val === 'string' &&
                              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                ? Number(val)
                                : val,
                            z.int32(),
                          )
                          .exactOptional(),
                        OrderNumber: z.string().exactOptional(),
                        Type: z
                          .enum([
                            'Created',
                            'Draft',
                            'Cloned',
                            'SentViaEmail',
                            'SentViaSms',
                            'SentReminderViaEmail',
                            'SentReminderViaSms',
                            'Opened',
                            'Viewed',
                            'Rejected',
                            'Updated',
                            'Paid',
                            'Unpaid',
                            'Overdue',
                            'NewManualPayment',
                            'NewPaymentWithPaypal',
                            'NewPaymentWithStripe',
                            'NewPaymentWithPayoneer',
                            'SentToAccountant',
                            'DownloadedAsPdf',
                            'MarkAsPaidByTheClient',
                            'OpenedAttachment',
                            'NewPaymentWithSquare',
                            'NewPaymentWithKlikAndPay',
                            'NewPaymentWithRazorpay',
                            'NewPaymentWithWepay',
                            'NewPaymentWithHalkbank',
                            'ChangeStatus',
                            'OrderUpdated',
                            'OrderCreated',
                            'NewPaymentWithTwoCheckout',
                            'NewPaymentWithPaymentWall',
                            'NewPaymentWithBamboraEU',
                            'NewPaymentWithBamboraNA',
                            'Void',
                            'NewPaymentWithNlb',
                            'NewPaymentWithAuthorizeNet',
                            'NewPaymentWithBraintree',
                            'EstimationCreated',
                            'EstimationDraft',
                            'EstimationCloned',
                            'EstimationSentViaEmail',
                            'EstimationOpened',
                            'EstimationViewed',
                            'EstimationAccepted',
                            'EstimationRejected',
                            'EstimationUpdated',
                            'EstimationDownloadedAsPdf',
                            'InvoiceDigitallySigned',
                          ])
                          .exactOptional(),
                        UserId: z
                          .preprocess(
                            (val) =>
                              typeof val === 'string' &&
                              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                ? Number(val)
                                : val,
                            z.int32(),
                          )
                          .exactOptional(),
                      })
                      .openapi({ required: [] }),
                  ),
                )
                .exactOptional(),
              Attachments: z
                .preprocess(
                  (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                  z.array(
                    z
                      .object({
                        Id: z
                          .preprocess(
                            (val) =>
                              typeof val === 'string' &&
                              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                ? Number(val)
                                : val,
                            z.int32(),
                          )
                          .exactOptional(),
                        InvoiceId: z
                          .preprocess(
                            (val) =>
                              typeof val === 'string' &&
                              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                ? Number(val)
                                : val,
                            z.int32(),
                          )
                          .exactOptional(),
                        Link: z.string().exactOptional(),
                        ObfuscatedFileName: z.string().exactOptional(),
                        OriginalFileName: z.string().exactOptional(),
                        Size: z
                          .preprocess((val) => {
                            if (
                              typeof val !== 'string' ||
                              !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val)
                            )
                              return val
                            if (/^-?\d+$/.test(val)) return BigInt(val)
                            const num = Number(val)
                            return Number.isSafeInteger(num) ? BigInt(num) : val
                          }, z.int64())
                          .exactOptional()
                          .openapi({ type: 'integer', format: 'int64' }),
                        Type: z.enum(['External', 'Uploaded']).exactOptional(),
                      })
                      .openapi({ required: [] }),
                  ),
                )
                .exactOptional(),
              ClientId: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional(),
              ClonedFromId: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional(),
              CurrencyId: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional(),
              DiscountAmount: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.float64(),
                )
                .exactOptional(),
              Duedate: z.iso.datetime({ offset: true }).exactOptional(),
              EnablePartialPayments: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional(),
              EstimationId: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional(),
              Id: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional(),
              InvoiceCategoryId: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional(),
              IsDigitallySigned: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional(),
              IssuedOn: z.iso.datetime({ offset: true }).exactOptional(),
              Items: z
                .preprocess(
                  (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                  z.array(
                    z
                      .object({
                        Cost: z
                          .preprocess(
                            (val) =>
                              typeof val === 'string' &&
                              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                ? Number(val)
                                : val,
                            z.float64(),
                          )
                          .exactOptional(),
                        Description: z.string().exactOptional(),
                        DiscountAmount: z
                          .preprocess(
                            (val) =>
                              typeof val === 'string' &&
                              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                ? Number(val)
                                : val,
                            z.float64(),
                          )
                          .exactOptional(),
                        DiscountPercentage: z
                          .preprocess(
                            (val) =>
                              typeof val === 'string' &&
                              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                ? Number(val)
                                : val,
                            z.float64(),
                          )
                          .exactOptional(),
                        Id: z
                          .preprocess(
                            (val) =>
                              typeof val === 'string' &&
                              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                ? Number(val)
                                : val,
                            z.int32(),
                          )
                          .exactOptional(),
                        InvoiceId: z
                          .preprocess(
                            (val) =>
                              typeof val === 'string' &&
                              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                ? Number(val)
                                : val,
                            z.int32(),
                          )
                          .exactOptional(),
                        Quantity: z
                          .preprocess(
                            (val) =>
                              typeof val === 'string' &&
                              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                ? Number(val)
                                : val,
                            z.float64(),
                          )
                          .exactOptional(),
                        SubTotalAmount: z
                          .preprocess(
                            (val) =>
                              typeof val === 'string' &&
                              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                ? Number(val)
                                : val,
                            z.float64(),
                          )
                          .exactOptional(),
                        TaxAmount: z
                          .preprocess(
                            (val) =>
                              typeof val === 'string' &&
                              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                ? Number(val)
                                : val,
                            z.float64(),
                          )
                          .exactOptional(),
                        TaxId: z
                          .preprocess(
                            (val) =>
                              typeof val === 'string' &&
                              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                ? Number(val)
                                : val,
                            z.int32(),
                          )
                          .exactOptional(),
                        TaxPercentage: z
                          .preprocess(
                            (val) =>
                              typeof val === 'string' &&
                              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                ? Number(val)
                                : val,
                            z.float64(),
                          )
                          .exactOptional(),
                        TotalAmount: z
                          .preprocess(
                            (val) =>
                              typeof val === 'string' &&
                              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                ? Number(val)
                                : val,
                            z.float64(),
                          )
                          .exactOptional(),
                        WorkTypeId: z
                          .preprocess(
                            (val) =>
                              typeof val === 'string' &&
                              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                ? Number(val)
                                : val,
                            z.int32(),
                          )
                          .exactOptional(),
                      })
                      .openapi({ required: [] }),
                  ),
                )
                .exactOptional(),
              Notes: z.string().exactOptional(),
              Number: z.string().exactOptional(),
              OrderId: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional(),
              PaymentGateways: z
                .preprocess(
                  (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                  z.array(
                    z
                      .object({
                        Id: z
                          .preprocess(
                            (val) =>
                              typeof val === 'string' &&
                              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                ? Number(val)
                                : val,
                            z.int32(),
                          )
                          .exactOptional(),
                        Name: z.string().exactOptional(),
                      })
                      .openapi({ required: [] }),
                  ),
                )
                .exactOptional(),
              PaymentLinkId: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional(),
              Payments: z
                .preprocess(
                  (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                  z.array(
                    z
                      .object({
                        Amount: z
                          .preprocess(
                            (val) =>
                              typeof val === 'string' &&
                              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                ? Number(val)
                                : val,
                            z.float64(),
                          )
                          .exactOptional(),
                        Id: z
                          .preprocess(
                            (val) =>
                              typeof val === 'string' &&
                              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                ? Number(val)
                                : val,
                            z.int32(),
                          )
                          .exactOptional(),
                        Invoice: InvoiceSchema.exactOptional(),
                        InvoiceId: z
                          .preprocess(
                            (val) =>
                              typeof val === 'string' &&
                              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                ? Number(val)
                                : val,
                            z.int32(),
                          )
                          .exactOptional(),
                        IsAutomatic: z
                          .preprocess(
                            ((read) => (val: unknown) => {
                              const result = read.safeParse(val)
                              return result.success ? result.data : val
                            })(z.stringbool()),
                            z.boolean(),
                          )
                          .exactOptional(),
                        Note: z.string().exactOptional(),
                        PaidOn: z.iso.datetime({ offset: true }).exactOptional(),
                        ReferenceId: z.string().exactOptional(),
                        Type: z
                          .enum([
                            'Other',
                            'Paypal',
                            'Stripe',
                            'Payoneer',
                            'Bank',
                            'Cash',
                            'Cheque',
                            'Ach',
                            'Sepa',
                            'Square',
                            'KlikAndPay',
                            'Razorpay',
                            'Wepay',
                            'Halkbank',
                            'TwoCheckout',
                            'PaymentWall',
                            'BamboraEU',
                            'BamboraNA',
                            'Nlb',
                            'AuthorizeNet',
                            'Braintree',
                          ])
                          .exactOptional(),
                      })
                      .openapi({ required: [] }),
                  ),
                )
                .exactOptional(),
              PoNumber: z.string().exactOptional(),
              RecurringProfileId: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional(),
              ShouldSendReminders: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional(),
              Status: z.enum(['Draft', 'Paid', 'Unpaid', 'Overdue', 'Void']).exactOptional(),
              SubTotalAmount: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.float64(),
                )
                .exactOptional(),
              TaxAmount: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.float64(),
                )
                .exactOptional(),
              Terms: z.string().exactOptional(),
              TotalAmount: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.float64(),
                )
                .exactOptional(),
              UserId: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional(),
            })
            .exactOptional()
            .openapi({ required: [] }),
          Items: z
            .preprocess(
              (val) => (val === undefined || Array.isArray(val) ? val : [val]),
              z.array(
                z
                  .object({
                    Cost: z
                      .preprocess(
                        (val) =>
                          typeof val === 'string' &&
                          /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                          (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                            ? Number(val)
                            : val,
                        z.float64(),
                      )
                      .exactOptional(),
                    DiscountAmount: z
                      .preprocess(
                        (val) =>
                          typeof val === 'string' &&
                          /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                          (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                            ? Number(val)
                            : val,
                        z.float64(),
                      )
                      .exactOptional(),
                    DiscountPercentage: z
                      .preprocess(
                        (val) =>
                          typeof val === 'string' &&
                          /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                          (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                            ? Number(val)
                            : val,
                        z.float64(),
                      )
                      .exactOptional(),
                    Id: z
                      .preprocess(
                        (val) =>
                          typeof val === 'string' &&
                          /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                          (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                            ? Number(val)
                            : val,
                        z.int32(),
                      )
                      .exactOptional(),
                    PaymentLinkId: z
                      .preprocess(
                        (val) =>
                          typeof val === 'string' &&
                          /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                          (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                            ? Number(val)
                            : val,
                        z.int32(),
                      )
                      .exactOptional(),
                    Quantity: z
                      .preprocess(
                        (val) =>
                          typeof val === 'string' &&
                          /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                          (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                            ? Number(val)
                            : val,
                        z.float64(),
                      )
                      .exactOptional(),
                    SubTotalAmount: z
                      .preprocess(
                        (val) =>
                          typeof val === 'string' &&
                          /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                          (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                            ? Number(val)
                            : val,
                        z.float64(),
                      )
                      .exactOptional(),
                    Tax: z
                      .object({
                        Id: z
                          .preprocess(
                            (val) =>
                              typeof val === 'string' &&
                              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                ? Number(val)
                                : val,
                            z.int32(),
                          )
                          .exactOptional(),
                        Name: z.string().exactOptional(),
                        Percentage: z
                          .preprocess(
                            (val) =>
                              typeof val === 'string' &&
                              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                ? Number(val)
                                : val,
                            z.float64(),
                          )
                          .exactOptional(),
                        UserId: z
                          .preprocess(
                            (val) =>
                              typeof val === 'string' &&
                              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                ? Number(val)
                                : val,
                            z.int32(),
                          )
                          .exactOptional(),
                      })
                      .exactOptional()
                      .openapi({ required: [] }),
                    TaxAmount: z
                      .preprocess(
                        (val) =>
                          typeof val === 'string' &&
                          /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                          (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                            ? Number(val)
                            : val,
                        z.float64(),
                      )
                      .exactOptional(),
                    TaxId: z
                      .preprocess(
                        (val) =>
                          typeof val === 'string' &&
                          /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                          (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                            ? Number(val)
                            : val,
                        z.int32(),
                      )
                      .exactOptional(),
                    TaxPercentage: z
                      .preprocess(
                        (val) =>
                          typeof val === 'string' &&
                          /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                          (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                            ? Number(val)
                            : val,
                        z.float64(),
                      )
                      .exactOptional(),
                    TotalAmount: z
                      .preprocess(
                        (val) =>
                          typeof val === 'string' &&
                          /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                          (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                            ? Number(val)
                            : val,
                        z.float64(),
                      )
                      .exactOptional(),
                    WorkType: z
                      .object({
                        Id: z
                          .preprocess(
                            (val) =>
                              typeof val === 'string' &&
                              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                ? Number(val)
                                : val,
                            z.int32(),
                          )
                          .exactOptional(),
                        Title: z.string().exactOptional(),
                        UserId: z
                          .preprocess(
                            (val) =>
                              typeof val === 'string' &&
                              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                ? Number(val)
                                : val,
                            z.int32(),
                          )
                          .exactOptional(),
                      })
                      .exactOptional()
                      .openapi({ required: [] }),
                    WorkTypeId: z
                      .preprocess(
                        (val) =>
                          typeof val === 'string' &&
                          /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                          (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                            ? Number(val)
                            : val,
                        z.int32(),
                      )
                      .exactOptional(),
                  })
                  .openapi({ required: [] }),
              ),
            )
            .exactOptional(),
          Number: z.string().exactOptional(),
          SubTotalAmount: z
            .preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.float64(),
            )
            .exactOptional(),
          TaxAmount: z
            .preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.float64(),
            )
            .exactOptional(),
          TotalAmount: z
            .preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.float64(),
            )
            .exactOptional(),
          User: z
            .object({
              ActionNotificationsLastReadOn: z.iso.datetime({ offset: true }).exactOptional(),
              Email: z.string().exactOptional(),
              ExternalConnections: z
                .preprocess(
                  (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                  z.array(
                    z
                      .object({
                        AccessToken: z.string().exactOptional(),
                        AccessTokenSecret: z.string().exactOptional(),
                        Data: z.string().exactOptional(),
                        ExpiresOn: z.iso.datetime({ offset: true }).exactOptional(),
                        ExternalUserId: z.string().exactOptional(),
                        ExternalUsername: z.string().exactOptional(),
                        Id: z
                          .preprocess(
                            (val) =>
                              typeof val === 'string' &&
                              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                ? Number(val)
                                : val,
                            z.int32(),
                          )
                          .exactOptional(),
                        Provider: z.string().exactOptional(),
                        UserId: z
                          .preprocess(
                            (val) =>
                              typeof val === 'string' &&
                              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                ? Number(val)
                                : val,
                            z.int32(),
                          )
                          .exactOptional(),
                      })
                      .openapi({ required: [] }),
                  ),
                )
                .exactOptional(),
              HasBeenOnboarded: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional(),
              Id: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional(),
              IsLocked: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional(),
              IsVerified: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional(),
              KnowledgeNotificationsLastReadOn: z.iso.datetime({ offset: true }).exactOptional(),
              LastSeenOn: z.iso.datetime({ offset: true }).exactOptional(),
              Name: z.string().exactOptional(),
              Password: z.string().exactOptional(),
              PasswordSalt: z.string().exactOptional(),
              ReferralPath: z.string().exactOptional(),
              ReferredUsers: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional(),
              ReferrerKey: z.string().exactOptional(),
              Settings: z
                .object({
                  AccountantEmail: z.string().exactOptional(),
                  Address: z.string().exactOptional(),
                  ApiKey: z.string().exactOptional(),
                  ApiSecret: z.string().exactOptional(),
                  BackgroundImage: z.string().exactOptional(),
                  Bank: z.string().exactOptional(),
                  BankAccount: z.string().exactOptional(),
                  Cname: z.string().exactOptional(),
                  CompanyRegistrationNumber: z.string().exactOptional(),
                  Country: z
                    .object({
                      Id: z
                        .preprocess(
                          (val) =>
                            typeof val === 'string' &&
                            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                              ? Number(val)
                              : val,
                          z.int32(),
                        )
                        .exactOptional(),
                      Name: z.string().exactOptional(),
                      Value: z.string().exactOptional(),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  CountryId: z
                    .preprocess(
                      (val) =>
                        typeof val === 'string' &&
                        /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                        (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                          ? Number(val)
                          : val,
                      z.int32(),
                    )
                    .exactOptional(),
                  Currency: z
                    .object({
                      Code: z.string().exactOptional(),
                      Id: z
                        .preprocess(
                          (val) =>
                            typeof val === 'string' &&
                            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                              ? Number(val)
                              : val,
                          z.int32(),
                        )
                        .exactOptional(),
                      Name: z.string().exactOptional(),
                      Symbol: z.string().exactOptional(),
                      Value: z.string().exactOptional(),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  CurrencyId: z
                    .preprocess(
                      (val) =>
                        typeof val === 'string' &&
                        /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                        (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                          ? Number(val)
                          : val,
                      z.int32(),
                    )
                    .exactOptional(),
                  CurrencySymbol: z.string().exactOptional(),
                  DefaultDateFormat: z.string().exactOptional(),
                  DefaultDueDateInDays: z
                    .preprocess(
                      (val) =>
                        typeof val === 'string' &&
                        /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                        (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                          ? Number(val)
                          : val,
                      z.int32(),
                    )
                    .exactOptional(),
                  DoNotTrack: z
                    .preprocess(
                      ((read) => (val: unknown) => {
                        const result = read.safeParse(val)
                        return result.success ? result.data : val
                      })(z.stringbool()),
                      z.boolean(),
                    )
                    .exactOptional(),
                  EnableClientPortal: z
                    .preprocess(
                      ((read) => (val: unknown) => {
                        const result = read.safeParse(val)
                        return result.success ? result.data : val
                      })(z.stringbool()),
                      z.boolean(),
                    )
                    .exactOptional(),
                  EnablePredictiveInvoicing: z
                    .preprocess(
                      ((read) => (val: unknown) => {
                        const result = read.safeParse(val)
                        return result.success ? result.data : val
                      })(z.stringbool()),
                      z.boolean(),
                    )
                    .exactOptional(),
                  EnableRecurringInvoicing: z
                    .preprocess(
                      ((read) => (val: unknown) => {
                        const result = read.safeParse(val)
                        return result.success ? result.data : val
                      })(z.stringbool()),
                      z.boolean(),
                    )
                    .exactOptional(),
                  HasInvoiceLogo: z
                    .preprocess(
                      ((read) => (val: unknown) => {
                        const result = read.safeParse(val)
                        return result.success ? result.data : val
                      })(z.stringbool()),
                      z.boolean(),
                    )
                    .exactOptional(),
                  Iban: z.string().exactOptional(),
                  Id: z
                    .preprocess(
                      (val) =>
                        typeof val === 'string' &&
                        /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                        (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                          ? Number(val)
                          : val,
                      z.int32(),
                    )
                    .exactOptional(),
                  InvoiceTemplate: z.enum(['Default', 'Template1', 'Template2']).exactOptional(),
                  InvoiceTemplateColorHex: z.string().exactOptional(),
                  PhoneNumber: z.string().exactOptional(),
                  Profession: z
                    .enum([
                      'Other',
                      'DesignAndCreative',
                      'SoftwareDevelopment',
                      'ContentWritingAndMarketing',
                      'Freelancers',
                      'Consultants',
                      'Smes',
                      'Enterprise',
                      'ECommerce',
                      'Individual',
                    ])
                    .exactOptional(),
                  ReceiveSmsNotifications: z
                    .preprocess(
                      ((read) => (val: unknown) => {
                        const result = read.safeParse(val)
                        return result.success ? result.data : val
                      })(z.stringbool()),
                      z.boolean(),
                    )
                    .exactOptional(),
                  ReferralProgram: z.enum(['Enabled', 'Disabled']).exactOptional(),
                  StoreCheckoutFields: z
                    .enum(['ShowMinimumRequiredFields', 'ShowAllFields'])
                    .exactOptional(),
                  StoreColorHex: z.string().exactOptional(),
                  StoreCurrency: z
                    .object({
                      Code: z.string().exactOptional(),
                      Id: z
                        .preprocess(
                          (val) =>
                            typeof val === 'string' &&
                            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                              ? Number(val)
                              : val,
                          z.int32(),
                        )
                        .exactOptional(),
                      Name: z.string().exactOptional(),
                      Symbol: z.string().exactOptional(),
                      Value: z.string().exactOptional(),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  StoreCurrencyId: z
                    .preprocess(
                      (val) =>
                        typeof val === 'string' &&
                        /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                        (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                          ? Number(val)
                          : val,
                      z.int32(),
                    )
                    .exactOptional(),
                  StoreCustomJavaScript: z.string().exactOptional(),
                  StoreDescription: z.string().exactOptional(),
                  StoreEmail: z.string().exactOptional(),
                  StoreLanguage: z
                    .object({
                      Id: z
                        .preprocess(
                          (val) =>
                            typeof val === 'string' &&
                            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                              ? Number(val)
                              : val,
                          z.int32(),
                        )
                        .exactOptional(),
                      Name: z.string().exactOptional(),
                      UiCulture: z.string().exactOptional(),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  StoreLanguageId: z
                    .preprocess(
                      (val) =>
                        typeof val === 'string' &&
                        /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                        (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                          ? Number(val)
                          : val,
                      z.int32(),
                    )
                    .exactOptional(),
                  StoreName: z.string().exactOptional(),
                  StorePurchaseEmailMessage: z.string().exactOptional(),
                  StorePurchaseThankYouMessage: z.string().exactOptional(),
                  StoreTextColorHex: z.string().exactOptional(),
                  StoreUrl: z.string().exactOptional(),
                  SubscribeToProductEmails: z
                    .preprocess(
                      ((read) => (val: unknown) => {
                        const result = read.safeParse(val)
                        return result.success ? result.data : val
                      })(z.stringbool()),
                      z.boolean(),
                    )
                    .exactOptional(),
                  Swift: z.string().exactOptional(),
                  Terms: z.string().exactOptional(),
                  UserId: z
                    .preprocess(
                      (val) =>
                        typeof val === 'string' &&
                        /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                        (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                          ? Number(val)
                          : val,
                      z.int32(),
                    )
                    .exactOptional(),
                  UserSignature: z.string().exactOptional(),
                  VatNumber: z.string().exactOptional(),
                  YearsOfExperience: z
                    .preprocess(
                      (val) =>
                        typeof val === 'string' &&
                        /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                        (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                          ? Number(val)
                          : val,
                      z.int32(),
                    )
                    .exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
              Status: z.enum(['Normal', 'Fraudlent', 'Locked']).exactOptional(),
              SubscriptionPlan: z
                .object({
                  CancellatedOn: z.iso.datetime({ offset: true }).exactOptional(),
                  CouponCode: z.string().exactOptional(),
                  CurrencyCode: z.string().exactOptional(),
                  ExternalIdentifier: z.string().exactOptional(),
                  Features: z
                    .preprocess(
                      (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                      z.array(z.enum(['Api', 'Teams', 'Clients', 'Shop', 'PaymentLinks', 'Cname'])),
                    )
                    .exactOptional(),
                  HasDuePayment: z
                    .preprocess(
                      ((read) => (val: unknown) => {
                        const result = read.safeParse(val)
                        return result.success ? result.data : val
                      })(z.stringbool()),
                      z.boolean(),
                    )
                    .exactOptional(),
                  HasDuePaymentSince: z.iso.datetime({ offset: true }).exactOptional(),
                  Id: z
                    .preprocess(
                      (val) =>
                        typeof val === 'string' &&
                        /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                        (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                          ? Number(val)
                          : val,
                      z.int32(),
                    )
                    .exactOptional(),
                  Identifier: z.string().exactOptional(),
                  IsActive: z
                    .preprocess(
                      ((read) => (val: unknown) => {
                        const result = read.safeParse(val)
                        return result.success ? result.data : val
                      })(z.stringbool()),
                      z.boolean(),
                    )
                    .exactOptional(),
                  IsLifetime: z
                    .preprocess(
                      ((read) => (val: unknown) => {
                        const result = read.safeParse(val)
                        return result.success ? result.data : val
                      })(z.stringbool()),
                      z.boolean(),
                    )
                    .exactOptional(),
                  LastPaymentOn: z.iso.datetime({ offset: true }).exactOptional(),
                  MaxClients: z
                    .preprocess(
                      (val) =>
                        typeof val === 'string' &&
                        /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                        (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                          ? Number(val)
                          : val,
                      z.int32(),
                    )
                    .exactOptional(),
                  Name: z.string().exactOptional(),
                  OnHold: z
                    .preprocess(
                      ((read) => (val: unknown) => {
                        const result = read.safeParse(val)
                        return result.success ? result.data : val
                      })(z.stringbool()),
                      z.boolean(),
                    )
                    .exactOptional(),
                  OrderIdentifier: z.string().exactOptional(),
                  Price: z
                    .preprocess(
                      (val) =>
                        typeof val === 'string' &&
                        /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                        (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                          ? Number(val)
                          : val,
                      z.float64(),
                    )
                    .exactOptional(),
                  Recurrence: z.enum(['Monthly', 'Yearly']).exactOptional(),
                  SaleId: z
                    .preprocess((val) => {
                      if (
                        typeof val !== 'string' ||
                        !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val)
                      )
                        return val
                      if (/^-?\d+$/.test(val)) return BigInt(val)
                      const num = Number(val)
                      return Number.isSafeInteger(num) ? BigInt(num) : val
                    }, z.int64())
                    .exactOptional()
                    .openapi({ type: 'integer', format: 'int64' }),
                  Status: z
                    .enum(['ActiveTrial', 'ExpiredTrial', 'Active', 'Canceled', 'Fraudlent'])
                    .exactOptional(),
                  SystemCancelationReason: z.enum(['FailToCaptureFee', 'Fraud']).exactOptional(),
                  TrialEndsOn: z.iso.datetime({ offset: true }).exactOptional(),
                  TrialNumberOfDays: z
                    .preprocess(
                      (val) =>
                        typeof val === 'string' &&
                        /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                        (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                          ? Number(val)
                          : val,
                      z.int32(),
                    )
                    .exactOptional(),
                  TrialStartsOn: z.iso.datetime({ offset: true }).exactOptional(),
                  UserId: z
                    .preprocess(
                      (val) =>
                        typeof val === 'string' &&
                        /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                        (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                          ? Number(val)
                          : val,
                      z.int32(),
                    )
                    .exactOptional(),
                  Version: z
                    .preprocess(
                      (val) =>
                        typeof val === 'string' &&
                        /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                        (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                          ? Number(val)
                          : val,
                      z.int32(),
                    )
                    .exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
              Type: z
                .enum(['Anonymous', 'Customer', 'SystemAdministrator', 'Collaborator'])
                .exactOptional(),
              Username: z.string().exactOptional(),
              VerifiedOn: z.iso.datetime({ offset: true }).exactOptional(),
              YearsOfExperience: z
                .enum(['One', 'OneToThree', 'ThreeToFive', 'SixPlus'])
                .exactOptional(),
            })
            .exactOptional()
            .openapi({ required: [] }),
          UserId: z
            .preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.int32(),
            )
            .exactOptional(),
        })
        .openapi({ required: [] }),
    },
    'application/xml': { schema: PaymentLinkSchema },
    'text/html': { schema: PaymentLinkSchema },
    'text/json': { schema: PaymentLinkSchema },
    'text/xml': { schema: PaymentLinkSchema },
  },
  required: true,
}

const XAuthKeySecurityScheme = {
  description:
    'Your account API key. Can be retrieved from your [account settings](/account/settings#api-tab).',
  in: 'header',
  name: 'x-auth-key',
  type: 'apiKey',
}

const XAuthSecretSecurityScheme = {
  description:
    'Your account API secret. Can be retrieved from your [account settings](/account/settings#api-tab). Keep it hidden.',
  in: 'header',
  name: 'x-auth-secret',
  type: 'apiKey',
}

export const getApiClientAllRoute = createRoute({
  method: 'get',
  path: '/api/client/all',
  tags: ['Client'],
  summary: 'Return all clients for the account',
  operationId: 'ClientApi_All',
  request: {
    headers: z.object({
      'x-auth-key': z
        .string()
        .default('[authentication key]')
        .openapi({
          param: {
            description: '',
            in: 'header',
            name: 'x-auth-key',
            required: true,
            schema: { default: '[authentication key]', type: 'string' },
          },
        }),
      'x-auth-secret': z
        .string()
        .default('[authentication secret]')
        .openapi({
          param: {
            description: '',
            in: 'header',
            name: 'x-auth-secret',
            required: true,
            schema: { default: '[authentication secret]', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: z.array(ClientDetailsApiModelSchema) },
        'application/xml': { schema: z.array(ClientDetailsApiModelSchema) },
        'text/html': { schema: z.array(ClientDetailsApiModelSchema) },
        'text/json': { schema: z.array(ClientDetailsApiModelSchema) },
        'text/xml': { schema: z.array(ClientDetailsApiModelSchema) },
      },
    },
  },
})

export const getApiClientCandeleteRoute = createRoute({
  method: 'get',
  path: '/api/client/candelete',
  tags: ['Client'],
  summary: 'Check if the provided client can be deleted',
  operationId: 'ClientApi_CanDelete',
  request: {
    query: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            in: 'query',
            name: 'id',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
    headers: z.object({
      'x-auth-key': z
        .string()
        .default('[authentication key]')
        .openapi({
          param: {
            description: '',
            in: 'header',
            name: 'x-auth-key',
            required: true,
            schema: { default: '[authentication key]', type: 'string' },
          },
        }),
      'x-auth-secret': z
        .string()
        .default('[authentication secret]')
        .openapi({
          param: {
            description: '',
            in: 'header',
            name: 'x-auth-secret',
            required: true,
            schema: { default: '[authentication secret]', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: z.boolean() },
        'application/xml': { schema: z.boolean() },
        'text/html': { schema: z.boolean() },
        'text/json': { schema: z.boolean() },
        'text/xml': { schema: z.boolean() },
      },
    },
  },
})

export const postApiClientDeleteRoute = createRoute({
  method: 'post',
  path: '/api/client/delete',
  tags: ['Client'],
  summary: 'Delete an existing client',
  operationId: 'ClientApi_Delete',
  request: {
    headers: z.object({
      'x-auth-key': z
        .string()
        .default('[authentication key]')
        .openapi({
          param: {
            description: '',
            in: 'header',
            name: 'x-auth-key',
            required: true,
            schema: { default: '[authentication key]', type: 'string' },
          },
        }),
      'x-auth-secret': z
        .string()
        .default('[authentication secret]')
        .openapi({
          param: {
            description: '',
            in: 'header',
            name: 'x-auth-secret',
            required: true,
            schema: { default: '[authentication secret]', type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': { schema: ClientDeleteApiModelSchema },
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              Id: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional()
                .openapi({ description: 'Id of client to be deleted' }),
            })
            .openapi({ required: [] }),
        },
        'application/xml': { schema: ClientDeleteApiModelSchema },
        'text/html': { schema: ClientDeleteApiModelSchema },
        'text/json': { schema: ClientDeleteApiModelSchema },
        'text/xml': { schema: ClientDeleteApiModelSchema },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: z.int32() },
        'application/xml': { schema: z.int32() },
        'text/html': { schema: z.int32() },
        'text/json': { schema: z.int32() },
        'text/xml': { schema: z.int32() },
      },
    },
  },
})

export const getApiClientDetailsRoute = createRoute({
  method: 'get',
  path: '/api/client/details',
  tags: ['Client'],
  summary: 'Return client details. Activities and invoices included.',
  operationId: 'ClientApi_Details',
  request: {
    query: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            in: 'query',
            name: 'id',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
    headers: z.object({
      'x-auth-key': z
        .string()
        .default('[authentication key]')
        .openapi({
          param: {
            description: '',
            in: 'header',
            name: 'x-auth-key',
            required: true,
            schema: { default: '[authentication key]', type: 'string' },
          },
        }),
      'x-auth-secret': z
        .string()
        .default('[authentication secret]')
        .openapi({
          param: {
            description: '',
            in: 'header',
            name: 'x-auth-secret',
            required: true,
            schema: { default: '[authentication secret]', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: ClientDetailsApiModelSchema },
        'application/xml': { schema: ClientDetailsApiModelSchema },
        'text/html': { schema: ClientDetailsApiModelSchema },
        'text/json': { schema: ClientDetailsApiModelSchema },
        'text/xml': { schema: ClientDetailsApiModelSchema },
      },
    },
  },
})

export const postApiClientNewRoute = createRoute({
  method: 'post',
  path: '/api/client/new',
  tags: ['Client'],
  summary: 'Create a client',
  operationId: 'ClientApi_New',
  request: {
    headers: z.object({
      'x-auth-key': z
        .string()
        .default('[authentication key]')
        .openapi({
          param: {
            description: '',
            in: 'header',
            name: 'x-auth-key',
            required: true,
            schema: { default: '[authentication key]', type: 'string' },
          },
        }),
      'x-auth-secret': z
        .string()
        .default('[authentication secret]')
        .openapi({
          param: {
            description: '',
            in: 'header',
            name: 'x-auth-secret',
            required: true,
            schema: { default: '[authentication secret]', type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': { schema: ClientCreateApiModelSchema },
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              AdditionalEmails: z
                .preprocess(
                  (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                  z.array(AdditionalClientEmailApiModelSchema),
                )
                .exactOptional()
                .openapi({ description: 'Client additional emails contact for CC' }),
              Address: z
                .string()
                .exactOptional()
                .openapi({ description: 'Client business address' }),
              ClientCountryId: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional()
                .openapi({ description: 'Indicates the country where the clients is from' }),
              ClientCurrencyId: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional()
                .openapi({
                  description:
                    'Indicates the default system currency used by the user for the client',
                }),
              CompanyRegistrationNumber: z
                .string()
                .exactOptional()
                .openapi({ description: "Client's Company Registration Number" }),
              DefaultDueDateInDays: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional()
                .openapi({ description: 'Client custom payment terms' }),
              Email: z.string().exactOptional().openapi({ description: 'Client email' }),
              Name: z.string().exactOptional().openapi({ description: 'Name of the client' }),
              PhoneNumber: z
                .string()
                .exactOptional()
                .openapi({ description: 'Client phone numer' }),
              UiLanguageId: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional()
                .openapi({
                  description: 'Hold a value of the language in which the invoice will be sent',
                }),
              Vat: z.string().exactOptional().openapi({ description: "Client's VAT number" }),
            })
            .openapi({ required: [] }),
        },
        'application/xml': { schema: ClientCreateApiModelSchema },
        'text/html': { schema: ClientCreateApiModelSchema },
        'text/json': { schema: ClientCreateApiModelSchema },
        'text/xml': { schema: ClientCreateApiModelSchema },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: z.int32() },
        'application/xml': { schema: z.int32() },
        'text/html': { schema: z.int32() },
        'text/json': { schema: z.int32() },
        'text/xml': { schema: z.int32() },
      },
    },
  },
})

export const postApiClientUpdateRoute = createRoute({
  method: 'post',
  path: '/api/client/update',
  tags: ['Client'],
  summary: 'Update an existing client',
  operationId: 'ClientApi_Update',
  request: {
    headers: z.object({
      'x-auth-key': z
        .string()
        .default('[authentication key]')
        .openapi({
          param: {
            description: '',
            in: 'header',
            name: 'x-auth-key',
            required: true,
            schema: { default: '[authentication key]', type: 'string' },
          },
        }),
      'x-auth-secret': z
        .string()
        .default('[authentication secret]')
        .openapi({
          param: {
            description: '',
            in: 'header',
            name: 'x-auth-secret',
            required: true,
            schema: { default: '[authentication secret]', type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': { schema: ClientUpdateApiModelSchema },
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              AdditionalEmails: z
                .preprocess(
                  (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                  z.array(AdditionalClientEmailApiModelSchema),
                )
                .exactOptional()
                .openapi({ description: 'Client additional emails contact for CC' }),
              Address: z
                .string()
                .exactOptional()
                .openapi({ description: 'Client business address' }),
              ClientCountryId: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional()
                .openapi({ description: 'Indicates the country where the clients is from' }),
              ClientCurrencyId: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional()
                .openapi({
                  description:
                    'Indicates the default system currency used by the user for the client',
                }),
              CompanyRegistrationNumber: z
                .string()
                .exactOptional()
                .openapi({ description: "Client's Company Registration Number" }),
              DefaultDueDateInDays: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional()
                .openapi({ description: 'Client custom payment terms' }),
              Email: z.string().exactOptional().openapi({ description: 'Client email' }),
              Id: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional()
                .openapi({ description: 'Entity id' }),
              Name: z.string().exactOptional().openapi({ description: 'Name of the client' }),
              PhoneNumber: z
                .string()
                .exactOptional()
                .openapi({ description: 'Client phone numer' }),
              UiLanguageId: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional()
                .openapi({
                  description: 'Hold a value of the language in which the invoice will be sent',
                }),
              Vat: z.string().exactOptional().openapi({ description: "Client's VAT number" }),
            })
            .openapi({ required: [] }),
        },
        'application/xml': { schema: ClientUpdateApiModelSchema },
        'text/html': { schema: ClientUpdateApiModelSchema },
        'text/json': { schema: ClientUpdateApiModelSchema },
        'text/xml': { schema: ClientUpdateApiModelSchema },
      },
      required: true,
    },
  },
  responses: { 204: { description: 'No Content' } },
})

export const getApiEstimationAllRoute = createRoute({
  method: 'get',
  path: '/api/estimation/all',
  tags: ['Estimation'],
  summary: 'Return all estimation for the account',
  operationId: 'EstimationApi_All',
  request: {
    query: z.object({
      'queryOptions.page': z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'queryOptions.page',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      'queryOptions.pageSize': z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'queryOptions.pageSize',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
    headers: z.object({
      'x-auth-key': z
        .string()
        .default('[authentication key]')
        .openapi({
          param: {
            description: '',
            in: 'header',
            name: 'x-auth-key',
            required: true,
            schema: { default: '[authentication key]', type: 'string' },
          },
        }),
      'x-auth-secret': z
        .string()
        .default('[authentication secret]')
        .openapi({
          param: {
            description: '',
            in: 'header',
            name: 'x-auth-secret',
            required: true,
            schema: { default: '[authentication secret]', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: ListResultEstimationDetailsApiModelSchema },
        'application/xml': { schema: ListResultEstimationDetailsApiModelSchema },
        'text/html': { schema: ListResultEstimationDetailsApiModelSchema },
        'text/json': { schema: ListResultEstimationDetailsApiModelSchema },
        'text/xml': { schema: ListResultEstimationDetailsApiModelSchema },
      },
    },
  },
})

export const postApiEstimationChangestatusRoute = createRoute({
  method: 'post',
  path: '/api/estimation/changestatus',
  tags: ['Estimation'],
  summary: 'Change estimation status',
  operationId: 'EstimationApi_ChangeStatus',
  request: {
    headers: z.object({
      'x-auth-key': z
        .string()
        .default('[authentication key]')
        .openapi({
          param: {
            description: '',
            in: 'header',
            name: 'x-auth-key',
            required: true,
            schema: { default: '[authentication key]', type: 'string' },
          },
        }),
      'x-auth-secret': z
        .string()
        .default('[authentication secret]')
        .openapi({
          param: {
            description: '',
            in: 'header',
            name: 'x-auth-secret',
            required: true,
            schema: { default: '[authentication secret]', type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': { schema: EstimationChangeStatusApiModelSchema },
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              Id: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional()
                .openapi({ description: 'Estimation Id' }),
              Status: z
                .enum(['Draft', 'Accepted', 'Rejected'])
                .exactOptional()
                .openapi({ description: 'New status of the estimation' }),
            })
            .openapi({ required: [] }),
        },
        'application/xml': { schema: EstimationChangeStatusApiModelSchema },
        'text/html': { schema: EstimationChangeStatusApiModelSchema },
        'text/json': { schema: EstimationChangeStatusApiModelSchema },
        'text/xml': { schema: EstimationChangeStatusApiModelSchema },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: z.boolean() },
        'application/xml': { schema: z.boolean() },
        'text/html': { schema: z.boolean() },
        'text/json': { schema: z.boolean() },
        'text/xml': { schema: z.boolean() },
      },
    },
  },
})

export const postApiEstimationConvertRoute = createRoute({
  method: 'post',
  path: '/api/estimation/convert',
  tags: ['Estimation'],
  summary: 'Convert the estimation to an invoice',
  operationId: 'EstimationApi_Convert',
  request: {
    headers: z.object({
      'x-auth-key': z
        .string()
        .default('[authentication key]')
        .openapi({
          param: {
            description: '',
            in: 'header',
            name: 'x-auth-key',
            required: true,
            schema: { default: '[authentication key]', type: 'string' },
          },
        }),
      'x-auth-secret': z
        .string()
        .default('[authentication secret]')
        .openapi({
          param: {
            description: '',
            in: 'header',
            name: 'x-auth-secret',
            required: true,
            schema: { default: '[authentication secret]', type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': { schema: z.int32() },
        'application/x-www-form-urlencoded': {
          schema: z.preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.int32(),
          ),
        },
        'application/xml': { schema: z.int32() },
        'text/html': { schema: z.int32() },
        'text/json': { schema: z.int32() },
        'text/xml': { schema: z.int32() },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: InvoiceFullDetailsApiModelSchema },
        'application/xml': { schema: InvoiceFullDetailsApiModelSchema },
        'text/html': { schema: InvoiceFullDetailsApiModelSchema },
        'text/json': { schema: InvoiceFullDetailsApiModelSchema },
        'text/xml': { schema: InvoiceFullDetailsApiModelSchema },
      },
    },
  },
})

export const postApiEstimationDeleteRoute = createRoute({
  method: 'post',
  path: '/api/estimation/delete',
  tags: ['Estimation'],
  summary: 'Delete an existing estimation',
  operationId: 'EstimationApi_Delete',
  request: {
    headers: z.object({
      'x-auth-key': z
        .string()
        .default('[authentication key]')
        .openapi({
          param: {
            description: '',
            in: 'header',
            name: 'x-auth-key',
            required: true,
            schema: { default: '[authentication key]', type: 'string' },
          },
        }),
      'x-auth-secret': z
        .string()
        .default('[authentication secret]')
        .openapi({
          param: {
            description: '',
            in: 'header',
            name: 'x-auth-secret',
            required: true,
            schema: { default: '[authentication secret]', type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': { schema: EstimationDeleteApiModelSchema },
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              Id: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional()
                .openapi({ description: 'Id of estimation to be deleted' }),
            })
            .openapi({ required: [] }),
        },
        'application/xml': { schema: EstimationDeleteApiModelSchema },
        'text/html': { schema: EstimationDeleteApiModelSchema },
        'text/json': { schema: EstimationDeleteApiModelSchema },
        'text/xml': { schema: EstimationDeleteApiModelSchema },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: z.int32() },
        'application/xml': { schema: z.int32() },
        'text/html': { schema: z.int32() },
        'text/json': { schema: z.int32() },
        'text/xml': { schema: z.int32() },
      },
    },
  },
})

export const getApiEstimationDetailsRoute = createRoute({
  method: 'get',
  path: '/api/estimation/details',
  tags: ['Estimation'],
  summary: 'Return estimation data',
  operationId: 'EstimationApi_Details',
  request: {
    query: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: '',
            in: 'query',
            name: 'id',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
    headers: z.object({
      'x-auth-key': z
        .string()
        .default('[authentication key]')
        .openapi({
          param: {
            description: '',
            in: 'header',
            name: 'x-auth-key',
            required: true,
            schema: { default: '[authentication key]', type: 'string' },
          },
        }),
      'x-auth-secret': z
        .string()
        .default('[authentication secret]')
        .openapi({
          param: {
            description: '',
            in: 'header',
            name: 'x-auth-secret',
            required: true,
            schema: { default: '[authentication secret]', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: EstimationFullDetailsApiModelSchema },
        'application/xml': { schema: EstimationFullDetailsApiModelSchema },
        'text/html': { schema: EstimationFullDetailsApiModelSchema },
        'text/json': { schema: EstimationFullDetailsApiModelSchema },
        'text/xml': { schema: EstimationFullDetailsApiModelSchema },
      },
    },
  },
})

export const postApiEstimationNewRoute = createRoute({
  method: 'post',
  path: '/api/estimation/new',
  tags: ['Estimation'],
  summary: 'Create an estimation',
  operationId: 'EstimationApi_New',
  request: {
    headers: z.object({
      'x-auth-key': z
        .string()
        .default('[authentication key]')
        .openapi({
          param: {
            description: '',
            in: 'header',
            name: 'x-auth-key',
            required: true,
            schema: { default: '[authentication key]', type: 'string' },
          },
        }),
      'x-auth-secret': z
        .string()
        .default('[authentication secret]')
        .openapi({
          param: {
            description: '',
            in: 'header',
            name: 'x-auth-secret',
            required: true,
            schema: { default: '[authentication secret]', type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': { schema: EstimationCreateApiModelSchema },
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              Attachments: z
                .preprocess(
                  (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                  z.array(
                    z
                      .object({
                        Link: z
                          .string()
                          .exactOptional()
                          .openapi({ description: 'Link to the file' }),
                        ObfuscatedFileName: z
                          .string()
                          .exactOptional()
                          .openapi({ description: 'Hashed file name to avoid url wildguessing' }),
                        OriginalFileName: z
                          .string()
                          .exactOptional()
                          .openapi({ description: 'Name of the file' }),
                        Size: z
                          .preprocess((val) => {
                            if (
                              typeof val !== 'string' ||
                              !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val)
                            )
                              return val
                            if (/^-?\d+$/.test(val)) return BigInt(val)
                            const num = Number(val)
                            return Number.isSafeInteger(num) ? BigInt(num) : val
                          }, z.int64())
                          .exactOptional()
                          .openapi({
                            type: 'integer',
                            format: 'int64',
                            description: 'File size number in bytes',
                          }),
                        Type: z
                          .enum(['External', 'Uploaded'])
                          .exactOptional()
                          .openapi({ description: 'Type of the link (Attached or external)' }),
                      })
                      .openapi({ required: [] }),
                  ),
                )
                .exactOptional()
                .openapi({ description: 'List of estimation attachments' }),
              ClientId: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional()
                .openapi({ description: 'The client to whom this estimation is assigned' }),
              ClonedFromId: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional()
                .openapi({
                  description:
                    'Indicate from which estimation this estimation has been cloned from',
                }),
              CurrencyId: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional()
                .openapi({ description: 'Id of the currency for the estimation amounts' }),
              ExpiresOn: z.iso
                .datetime({ offset: true })
                .exactOptional()
                .openapi({ description: 'Indicates when the estimation will be proclamed as due' }),
              IssuedOn: z.iso
                .datetime({ offset: true })
                .exactOptional()
                .openapi({ description: 'Indicates when the estimation was issued' }),
              Items: z
                .preprocess(
                  (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                  z.array(
                    z
                      .object({
                        Cost: z
                          .preprocess(
                            (val) =>
                              typeof val === 'string' &&
                              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                ? Number(val)
                                : val,
                            z.float64(),
                          )
                          .exactOptional()
                          .openapi({ description: 'Amount per unit' }),
                        Description: z
                          .string()
                          .exactOptional()
                          .openapi({
                            description: 'Additional description attached to the estimation item',
                          }),
                        DiscountPercentage: z
                          .preprocess(
                            (val) =>
                              typeof val === 'string' &&
                              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                ? Number(val)
                                : val,
                            z.float64(),
                          )
                          .exactOptional()
                          .openapi({ description: 'Discount percentage for the overall amount' }),
                        Quantity: z
                          .preprocess(
                            (val) =>
                              typeof val === 'string' &&
                              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                ? Number(val)
                                : val,
                            z.float64(),
                          )
                          .exactOptional()
                          .openapi({ description: 'Quantity in total used for the work type' }),
                        TaxId: z
                          .preprocess(
                            (val) =>
                              typeof val === 'string' &&
                              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                ? Number(val)
                                : val,
                            z.int32(),
                          )
                          .exactOptional()
                          .openapi({ description: 'Tax applied on the item' }),
                        TaxPercentage: z
                          .preprocess(
                            (val) =>
                              typeof val === 'string' &&
                              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                ? Number(val)
                                : val,
                            z.float64(),
                          )
                          .exactOptional()
                          .openapi({ description: 'Task percentage. Ex: 18%' }),
                        WorkTypeId: z
                          .preprocess(
                            (val) =>
                              typeof val === 'string' &&
                              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                ? Number(val)
                                : val,
                            z.int32(),
                          )
                          .exactOptional()
                          .openapi({ description: 'Work type (Name of the service)' }),
                      })
                      .openapi({ required: [] }),
                  ),
                )
                .exactOptional()
                .openapi({ description: 'List of estimation items' }),
              Notes: z
                .string()
                .exactOptional()
                .openapi({ description: 'Internal note regarding the estimation' }),
              Number: z
                .string()
                .exactOptional()
                .openapi({ description: 'Unique estimation number' }),
              PaymentGateways: z
                .preprocess(
                  (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                  z.array(EstimationGatewayApiModelSchema),
                )
                .exactOptional()
                .openapi({ description: 'List of enabled payment gateways for this estimation' }),
              PoNumber: z
                .string()
                .exactOptional()
                .openapi({ description: 'Unique number generated by the buyer' }),
              Status: z
                .enum(['Draft', 'Accepted', 'Rejected'])
                .exactOptional()
                .openapi({
                  description: 'Indicate the status of the estimation (paid/unpaid/overdue)',
                }),
              Terms: z.string().exactOptional().openapi({ description: 'Terms of agreement' }),
            })
            .openapi({ required: [] }),
        },
        'application/xml': { schema: EstimationCreateApiModelSchema },
        'text/html': { schema: EstimationCreateApiModelSchema },
        'text/json': { schema: EstimationCreateApiModelSchema },
        'text/xml': { schema: EstimationCreateApiModelSchema },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: EstimationFullDetailsApiModelSchema },
        'application/xml': { schema: EstimationFullDetailsApiModelSchema },
        'text/html': { schema: EstimationFullDetailsApiModelSchema },
        'text/json': { schema: EstimationFullDetailsApiModelSchema },
        'text/xml': { schema: EstimationFullDetailsApiModelSchema },
      },
    },
  },
})

export const postApiEstimationSendtoclientRoute = createRoute({
  method: 'post',
  path: '/api/estimation/sendtoclient',
  tags: ['Estimation'],
  summary: 'Send the provided estimation to the client',
  operationId: 'EstimationApi_SendToClient',
  request: {
    headers: z.object({
      'x-auth-key': z
        .string()
        .default('[authentication key]')
        .openapi({
          param: {
            description: '',
            in: 'header',
            name: 'x-auth-key',
            required: true,
            schema: { default: '[authentication key]', type: 'string' },
          },
        }),
      'x-auth-secret': z
        .string()
        .default('[authentication secret]')
        .openapi({
          param: {
            description: '',
            in: 'header',
            name: 'x-auth-secret',
            required: true,
            schema: { default: '[authentication secret]', type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': { schema: SendEstimationToClientApiModelSchema },
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              AttachPdf: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'Should attach pdf file' }),
              EstimationId: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional()
                .openapi({ description: 'Id of the estimation' }),
              Id: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional()
                .openapi({ description: 'Id of the estimation' }),
              Message: z
                .string()
                .exactOptional()
                .openapi({ description: 'Message to be embedded in the email' }),
              SendToSelf: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'Should email copy be send to self' }),
              Subject: z.string().exactOptional().openapi({ description: 'Subject for the email' }),
            })
            .openapi({ required: [] }),
        },
        'application/xml': { schema: SendEstimationToClientApiModelSchema },
        'text/html': { schema: SendEstimationToClientApiModelSchema },
        'text/json': { schema: SendEstimationToClientApiModelSchema },
        'text/xml': { schema: SendEstimationToClientApiModelSchema },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: z.int32() },
        'application/xml': { schema: z.int32() },
        'text/html': { schema: z.int32() },
        'text/json': { schema: z.int32() },
        'text/xml': { schema: z.int32() },
      },
    },
  },
})

export const getApiEstimationStatusRoute = createRoute({
  method: 'get',
  path: '/api/estimation/status',
  tags: ['Estimation'],
  summary: 'Retrieve the status of the estimation',
  operationId: 'EstimationApi_Status',
  request: {
    query: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            in: 'query',
            name: 'id',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
    headers: z.object({
      'x-auth-key': z
        .string()
        .default('[authentication key]')
        .openapi({
          param: {
            description: '',
            in: 'header',
            name: 'x-auth-key',
            required: true,
            schema: { default: '[authentication key]', type: 'string' },
          },
        }),
      'x-auth-secret': z
        .string()
        .default('[authentication secret]')
        .openapi({
          param: {
            description: '',
            in: 'header',
            name: 'x-auth-secret',
            required: true,
            schema: { default: '[authentication secret]', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: z.enum(['Draft', 'Accepted', 'Rejected']) },
        'application/xml': { schema: z.enum(['Draft', 'Accepted', 'Rejected']) },
        'text/html': { schema: z.enum(['Draft', 'Accepted', 'Rejected']) },
        'text/json': { schema: z.enum(['Draft', 'Accepted', 'Rejected']) },
        'text/xml': { schema: z.enum(['Draft', 'Accepted', 'Rejected']) },
      },
    },
  },
})

export const postApiEstimationUpdateRoute = createRoute({
  method: 'post',
  path: '/api/estimation/update',
  tags: ['Estimation'],
  summary: 'Update an existing estimation',
  operationId: 'EstimationApi_Update',
  request: {
    headers: z.object({
      'x-auth-key': z
        .string()
        .default('[authentication key]')
        .openapi({
          param: {
            description: '',
            in: 'header',
            name: 'x-auth-key',
            required: true,
            schema: { default: '[authentication key]', type: 'string' },
          },
        }),
      'x-auth-secret': z
        .string()
        .default('[authentication secret]')
        .openapi({
          param: {
            description: '',
            in: 'header',
            name: 'x-auth-secret',
            required: true,
            schema: { default: '[authentication secret]', type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': { schema: EstimationUpdateApiModelSchema },
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              Attachments: z
                .preprocess(
                  (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                  z.array(
                    z
                      .object({
                        Id: z
                          .preprocess(
                            (val) =>
                              typeof val === 'string' &&
                              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                ? Number(val)
                                : val,
                            z.int32(),
                          )
                          .exactOptional()
                          .openapi({ description: 'Id of estimation attachment' }),
                        Link: z
                          .string()
                          .exactOptional()
                          .openapi({ description: 'Link to the file' }),
                        ObfuscatedFileName: z
                          .string()
                          .exactOptional()
                          .openapi({ description: 'Hashed file name to avoid url wildguessing' }),
                        OriginalFileName: z
                          .string()
                          .exactOptional()
                          .openapi({ description: 'Name of the file' }),
                        Size: z
                          .preprocess((val) => {
                            if (
                              typeof val !== 'string' ||
                              !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val)
                            )
                              return val
                            if (/^-?\d+$/.test(val)) return BigInt(val)
                            const num = Number(val)
                            return Number.isSafeInteger(num) ? BigInt(num) : val
                          }, z.int64())
                          .exactOptional()
                          .openapi({
                            type: 'integer',
                            format: 'int64',
                            description: 'File size number in bytes',
                          }),
                        Type: z
                          .enum(['External', 'Uploaded'])
                          .exactOptional()
                          .openapi({ description: 'Type of the link (Attached or external)' }),
                      })
                      .openapi({ required: [] }),
                  ),
                )
                .exactOptional()
                .openapi({ description: 'List of estimation attachments' }),
              ClientId: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional()
                .openapi({ description: 'The client to whom this estimation is assigned' }),
              ClonedFromId: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional()
                .openapi({
                  description:
                    'Indicate from which estimation this estimation has been cloned from',
                }),
              CurrencyId: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional()
                .openapi({ description: 'Id of the currency for the estimation amounts' }),
              ExpiresOn: z.iso
                .datetime({ offset: true })
                .exactOptional()
                .openapi({ description: 'Indicates when the estimation will be proclamed as due' }),
              Id: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional()
                .openapi({ description: 'estimation id' }),
              IssuedOn: z.iso
                .datetime({ offset: true })
                .exactOptional()
                .openapi({ description: 'Indicates when the estimation was issued' }),
              Items: z
                .preprocess(
                  (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                  z.array(
                    z
                      .object({
                        Cost: z
                          .preprocess(
                            (val) =>
                              typeof val === 'string' &&
                              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                ? Number(val)
                                : val,
                            z.float64(),
                          )
                          .exactOptional()
                          .openapi({ description: 'Amount per unit' }),
                        Description: z
                          .string()
                          .exactOptional()
                          .openapi({
                            description: 'Additional description attached to the estimation item',
                          }),
                        DiscountPercentage: z
                          .preprocess(
                            (val) =>
                              typeof val === 'string' &&
                              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                ? Number(val)
                                : val,
                            z.float64(),
                          )
                          .exactOptional()
                          .openapi({ description: 'Discount percentage for the overall amount' }),
                        Id: z
                          .preprocess(
                            (val) =>
                              typeof val === 'string' &&
                              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                ? Number(val)
                                : val,
                            z.int32(),
                          )
                          .exactOptional()
                          .openapi({ description: 'Id of estimation item' }),
                        Quantity: z
                          .preprocess(
                            (val) =>
                              typeof val === 'string' &&
                              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                ? Number(val)
                                : val,
                            z.float64(),
                          )
                          .exactOptional()
                          .openapi({ description: 'Quantity in total used for the work type' }),
                        TaxId: z
                          .preprocess(
                            (val) =>
                              typeof val === 'string' &&
                              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                ? Number(val)
                                : val,
                            z.int32(),
                          )
                          .exactOptional()
                          .openapi({ description: 'Tax applied on the item' }),
                        TaxPercentage: z
                          .preprocess(
                            (val) =>
                              typeof val === 'string' &&
                              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                ? Number(val)
                                : val,
                            z.float64(),
                          )
                          .exactOptional()
                          .openapi({ description: 'Task percentage. Ex: 18%' }),
                        WorkTypeId: z
                          .preprocess(
                            (val) =>
                              typeof val === 'string' &&
                              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                ? Number(val)
                                : val,
                            z.int32(),
                          )
                          .exactOptional()
                          .openapi({ description: 'Work type (Name of the service)' }),
                      })
                      .openapi({ required: [] }),
                  ),
                )
                .exactOptional()
                .openapi({ description: 'List of estimation items' }),
              Notes: z
                .string()
                .exactOptional()
                .openapi({ description: 'Internal note regarding the estimation' }),
              Number: z
                .string()
                .exactOptional()
                .openapi({ description: 'Unique estimation number' }),
              PaymentGateways: z
                .preprocess(
                  (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                  z.array(EstimationGatewayApiModelSchema),
                )
                .exactOptional()
                .openapi({ description: 'List of enabled payment gateways for this estimation' }),
              PoNumber: z
                .string()
                .exactOptional()
                .openapi({ description: 'Unique number generated by the buyer' }),
              Status: z
                .enum(['Draft', 'Accepted', 'Rejected'])
                .exactOptional()
                .openapi({
                  description: 'Indicate the status of the estimation (paid/unpaid/overdue)',
                }),
              Terms: z.string().exactOptional().openapi({ description: 'Terms of agreement' }),
            })
            .openapi({ required: [] }),
        },
        'application/xml': { schema: EstimationUpdateApiModelSchema },
        'text/html': { schema: EstimationUpdateApiModelSchema },
        'text/json': { schema: EstimationUpdateApiModelSchema },
        'text/xml': { schema: EstimationUpdateApiModelSchema },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: EstimationFullDetailsApiModelSchema },
        'application/xml': { schema: EstimationFullDetailsApiModelSchema },
        'text/html': { schema: EstimationFullDetailsApiModelSchema },
        'text/json': { schema: EstimationFullDetailsApiModelSchema },
        'text/xml': { schema: EstimationFullDetailsApiModelSchema },
      },
    },
  },
})

export const getApiEstimationUriRoute = createRoute({
  method: 'get',
  path: '/api/estimation/uri',
  tags: ['Estimation'],
  summary: "Return the unique url to the client's invoice",
  operationId: 'EstimationApi_Uri',
  request: {
    query: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: '',
            in: 'query',
            name: 'id',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
    headers: z.object({
      'x-auth-key': z
        .string()
        .default('[authentication key]')
        .openapi({
          param: {
            description: '',
            in: 'header',
            name: 'x-auth-key',
            required: true,
            schema: { default: '[authentication key]', type: 'string' },
          },
        }),
      'x-auth-secret': z
        .string()
        .default('[authentication secret]')
        .openapi({
          param: {
            description: '',
            in: 'header',
            name: 'x-auth-secret',
            required: true,
            schema: { default: '[authentication secret]', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: EstimationUriApiModelSchema },
        'application/xml': { schema: EstimationUriApiModelSchema },
        'text/html': { schema: EstimationUriApiModelSchema },
        'text/json': { schema: EstimationUriApiModelSchema },
        'text/xml': { schema: EstimationUriApiModelSchema },
      },
    },
  },
})

export const getApiGeneralCountriesRoute = createRoute({
  method: 'get',
  path: '/api/general/countries',
  tags: ['General'],
  summary: 'Return all of the platform supported countries',
  operationId: 'GeneralApi_Countries',
  request: {
    headers: z.object({
      'x-auth-key': z
        .string()
        .default('[authentication key]')
        .openapi({
          param: {
            description: '',
            in: 'header',
            name: 'x-auth-key',
            required: true,
            schema: { default: '[authentication key]', type: 'string' },
          },
        }),
      'x-auth-secret': z
        .string()
        .default('[authentication secret]')
        .openapi({
          param: {
            description: '',
            in: 'header',
            name: 'x-auth-secret',
            required: true,
            schema: { default: '[authentication secret]', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: z.array(CountryDetailsApiModelSchema) },
        'application/xml': { schema: z.array(CountryDetailsApiModelSchema) },
        'text/html': { schema: z.array(CountryDetailsApiModelSchema) },
        'text/json': { schema: z.array(CountryDetailsApiModelSchema) },
        'text/xml': { schema: z.array(CountryDetailsApiModelSchema) },
      },
    },
  },
})

export const getApiGeneralCurrenciesRoute = createRoute({
  method: 'get',
  path: '/api/general/currencies',
  tags: ['General'],
  summary: 'Return all of the platform supported currencies',
  operationId: 'GeneralApi_Currencies',
  request: {
    headers: z.object({
      'x-auth-key': z
        .string()
        .default('[authentication key]')
        .openapi({
          param: {
            description: '',
            in: 'header',
            name: 'x-auth-key',
            required: true,
            schema: { default: '[authentication key]', type: 'string' },
          },
        }),
      'x-auth-secret': z
        .string()
        .default('[authentication secret]')
        .openapi({
          param: {
            description: '',
            in: 'header',
            name: 'x-auth-secret',
            required: true,
            schema: { default: '[authentication secret]', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: z.array(CurrencyDetailsApiModelSchema) },
        'application/xml': { schema: z.array(CurrencyDetailsApiModelSchema) },
        'text/html': { schema: z.array(CurrencyDetailsApiModelSchema) },
        'text/json': { schema: z.array(CurrencyDetailsApiModelSchema) },
        'text/xml': { schema: z.array(CurrencyDetailsApiModelSchema) },
      },
    },
  },
})

export const getApiGeneralDateformatsRoute = createRoute({
  method: 'get',
  path: '/api/general/dateformats',
  tags: ['General'],
  summary: 'Return all of the platform supported Date Formats',
  operationId: 'GeneralApi_DateFormats',
  request: {
    headers: z.object({
      'x-auth-key': z
        .string()
        .default('[authentication key]')
        .openapi({
          param: {
            description: '',
            in: 'header',
            name: 'x-auth-key',
            required: true,
            schema: { default: '[authentication key]', type: 'string' },
          },
        }),
      'x-auth-secret': z
        .string()
        .default('[authentication secret]')
        .openapi({
          param: {
            description: '',
            in: 'header',
            name: 'x-auth-secret',
            required: true,
            schema: { default: '[authentication secret]', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: z.array(z.string()) },
        'application/xml': { schema: z.array(z.string()) },
        'text/html': { schema: z.array(z.string()) },
        'text/json': { schema: z.array(z.string()) },
        'text/xml': { schema: z.array(z.string()) },
      },
    },
  },
})

export const getApiGeneralUilanguagesRoute = createRoute({
  method: 'get',
  path: '/api/general/uilanguages',
  tags: ['General'],
  summary: 'Return all of the platform supported UI languages',
  operationId: 'GeneralApi_UiLanguages',
  request: {
    headers: z.object({
      'x-auth-key': z
        .string()
        .default('[authentication key]')
        .openapi({
          param: {
            description: '',
            in: 'header',
            name: 'x-auth-key',
            required: true,
            schema: { default: '[authentication key]', type: 'string' },
          },
        }),
      'x-auth-secret': z
        .string()
        .default('[authentication secret]')
        .openapi({
          param: {
            description: '',
            in: 'header',
            name: 'x-auth-secret',
            required: true,
            schema: { default: '[authentication secret]', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: z.array(UILanguageDetailsApiModelSchema) },
        'application/xml': { schema: z.array(UILanguageDetailsApiModelSchema) },
        'text/html': { schema: z.array(UILanguageDetailsApiModelSchema) },
        'text/json': { schema: z.array(UILanguageDetailsApiModelSchema) },
        'text/xml': { schema: z.array(UILanguageDetailsApiModelSchema) },
      },
    },
  },
})

export const getApiInvoiceAllRoute = createRoute({
  method: 'get',
  path: '/api/invoice/all',
  tags: ['Invoice'],
  summary: 'Return all invoices for the account',
  operationId: 'InvoiceApi_All',
  request: {
    query: z.object({
      'queryOptions.page': z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'queryOptions.page',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      'queryOptions.pageSize': z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'queryOptions.pageSize',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
    headers: z.object({
      'x-auth-key': z
        .string()
        .default('[authentication key]')
        .openapi({
          param: {
            description: '',
            in: 'header',
            name: 'x-auth-key',
            required: true,
            schema: { default: '[authentication key]', type: 'string' },
          },
        }),
      'x-auth-secret': z
        .string()
        .default('[authentication secret]')
        .openapi({
          param: {
            description: '',
            in: 'header',
            name: 'x-auth-secret',
            required: true,
            schema: { default: '[authentication secret]', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: ListResultInvoiceDetailsApiModelSchema },
        'application/xml': { schema: ListResultInvoiceDetailsApiModelSchema },
        'text/html': { schema: ListResultInvoiceDetailsApiModelSchema },
        'text/json': { schema: ListResultInvoiceDetailsApiModelSchema },
        'text/xml': { schema: ListResultInvoiceDetailsApiModelSchema },
      },
    },
  },
})

export const getApiInvoiceAllcategoriesRoute = createRoute({
  method: 'get',
  path: '/api/invoice/allcategories',
  tags: ['Invoice'],
  summary: 'Return all invoice categories for the account',
  request: {
    query: z.object({
      query: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'query', required: false, schema: { type: 'string' } },
        }),
    }),
    headers: z.object({
      'x-auth-key': z
        .string()
        .default('[authentication key]')
        .openapi({
          param: {
            description: '',
            in: 'header',
            name: 'x-auth-key',
            required: true,
            schema: { default: '[authentication key]', type: 'string' },
          },
        }),
      'x-auth-secret': z
        .string()
        .default('[authentication secret]')
        .openapi({
          param: {
            description: '',
            in: 'header',
            name: 'x-auth-secret',
            required: true,
            schema: { default: '[authentication secret]', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: ListResultInvoiceCategoryApiModelSchema },
        'application/xml': { schema: ListResultInvoiceCategoryApiModelSchema },
        'text/html': { schema: ListResultInvoiceCategoryApiModelSchema },
        'text/json': { schema: ListResultInvoiceCategoryApiModelSchema },
        'text/xml': { schema: ListResultInvoiceCategoryApiModelSchema },
      },
    },
  },
})

export const postApiInvoiceChangestatusRoute = createRoute({
  method: 'post',
  path: '/api/invoice/changestatus',
  tags: ['Invoice'],
  summary: 'Change invoice status',
  operationId: 'InvoiceApi_ChangeStatus',
  request: {
    headers: z.object({
      'x-auth-key': z
        .string()
        .default('[authentication key]')
        .openapi({
          param: {
            description: '',
            in: 'header',
            name: 'x-auth-key',
            required: true,
            schema: { default: '[authentication key]', type: 'string' },
          },
        }),
      'x-auth-secret': z
        .string()
        .default('[authentication secret]')
        .openapi({
          param: {
            description: '',
            in: 'header',
            name: 'x-auth-secret',
            required: true,
            schema: { default: '[authentication secret]', type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': { schema: ChangeStatusApiModelSchema },
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              Id: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional()
                .openapi({ description: 'Invoice Id' }),
              Status: z
                .enum(['Draft', 'Paid', 'Unpaid', 'Overdue', 'Void'])
                .exactOptional()
                .openapi({ description: 'New status of the invoice' }),
            })
            .openapi({ required: [] }),
        },
        'application/xml': { schema: ChangeStatusApiModelSchema },
        'text/html': { schema: ChangeStatusApiModelSchema },
        'text/json': { schema: ChangeStatusApiModelSchema },
        'text/xml': { schema: ChangeStatusApiModelSchema },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: z.boolean() },
        'application/xml': { schema: z.boolean() },
        'text/html': { schema: z.boolean() },
        'text/json': { schema: z.boolean() },
        'text/xml': { schema: z.boolean() },
      },
    },
  },
})

export const postApiInvoiceDeleteRoute = createRoute({
  method: 'post',
  path: '/api/invoice/delete',
  tags: ['Invoice'],
  summary: 'Delete an existing invoice',
  operationId: 'InvoiceApi_Delete',
  request: {
    headers: z.object({
      'x-auth-key': z
        .string()
        .default('[authentication key]')
        .openapi({
          param: {
            description: '',
            in: 'header',
            name: 'x-auth-key',
            required: true,
            schema: { default: '[authentication key]', type: 'string' },
          },
        }),
      'x-auth-secret': z
        .string()
        .default('[authentication secret]')
        .openapi({
          param: {
            description: '',
            in: 'header',
            name: 'x-auth-secret',
            required: true,
            schema: { default: '[authentication secret]', type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': { schema: InvoiceDeleteApiModelSchema },
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              Id: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional()
                .openapi({ description: 'Id of invoice to be deleted' }),
            })
            .openapi({ required: [] }),
        },
        'application/xml': { schema: InvoiceDeleteApiModelSchema },
        'text/html': { schema: InvoiceDeleteApiModelSchema },
        'text/json': { schema: InvoiceDeleteApiModelSchema },
        'text/xml': { schema: InvoiceDeleteApiModelSchema },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: z.int32() },
        'application/xml': { schema: z.int32() },
        'text/html': { schema: z.int32() },
        'text/json': { schema: z.int32() },
        'text/xml': { schema: z.int32() },
      },
    },
  },
})

export const postApiInvoiceDeletecategoryRoute = createRoute({
  method: 'post',
  path: '/api/invoice/deletecategory',
  tags: ['Invoice'],
  summary: 'Delete an existing invoice category',
  request: {
    headers: z.object({
      'x-auth-key': z
        .string()
        .default('[authentication key]')
        .openapi({
          param: {
            description: '',
            in: 'header',
            name: 'x-auth-key',
            required: true,
            schema: { default: '[authentication key]', type: 'string' },
          },
        }),
      'x-auth-secret': z
        .string()
        .default('[authentication secret]')
        .openapi({
          param: {
            description: '',
            in: 'header',
            name: 'x-auth-secret',
            required: true,
            schema: { default: '[authentication secret]', type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': { schema: InvoiceCategoryDeleteApiModelSchema },
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              Id: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional(),
            })
            .openapi({ required: [] }),
        },
        'application/xml': { schema: InvoiceCategoryDeleteApiModelSchema },
        'text/html': { schema: InvoiceCategoryDeleteApiModelSchema },
        'text/json': { schema: InvoiceCategoryDeleteApiModelSchema },
        'text/xml': { schema: InvoiceCategoryDeleteApiModelSchema },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: z.int32() },
        'application/xml': { schema: z.int32() },
        'text/html': { schema: z.int32() },
        'text/json': { schema: z.int32() },
        'text/xml': { schema: z.int32() },
      },
    },
  },
})

export const getApiInvoiceDetailsRoute = createRoute({
  method: 'get',
  path: '/api/invoice/details',
  tags: ['Invoice'],
  summary: 'Return invoice data',
  operationId: 'InvoiceApi_Details',
  request: {
    query: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: '',
            in: 'query',
            name: 'id',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
    headers: z.object({
      'x-auth-key': z
        .string()
        .default('[authentication key]')
        .openapi({
          param: {
            description: '',
            in: 'header',
            name: 'x-auth-key',
            required: true,
            schema: { default: '[authentication key]', type: 'string' },
          },
        }),
      'x-auth-secret': z
        .string()
        .default('[authentication secret]')
        .openapi({
          param: {
            description: '',
            in: 'header',
            name: 'x-auth-secret',
            required: true,
            schema: { default: '[authentication secret]', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: InvoiceFullDetailsApiModelSchema },
        'application/xml': { schema: InvoiceFullDetailsApiModelSchema },
        'text/html': { schema: InvoiceFullDetailsApiModelSchema },
        'text/json': { schema: InvoiceFullDetailsApiModelSchema },
        'text/xml': { schema: InvoiceFullDetailsApiModelSchema },
      },
    },
  },
})

export const postApiInvoiceNewRoute = createRoute({
  method: 'post',
  path: '/api/invoice/new',
  tags: ['Invoice'],
  summary: 'Create an invoice',
  operationId: 'InvoiceApi_New',
  request: {
    headers: z.object({
      'x-auth-key': z
        .string()
        .default('[authentication key]')
        .openapi({
          param: {
            description: '',
            in: 'header',
            name: 'x-auth-key',
            required: true,
            schema: { default: '[authentication key]', type: 'string' },
          },
        }),
      'x-auth-secret': z
        .string()
        .default('[authentication secret]')
        .openapi({
          param: {
            description: '',
            in: 'header',
            name: 'x-auth-secret',
            required: true,
            schema: { default: '[authentication secret]', type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': { schema: InvoiceCreateApiModelSchema },
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              Attachments: z
                .preprocess(
                  (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                  z.array(
                    z
                      .object({
                        Link: z
                          .string()
                          .exactOptional()
                          .openapi({ description: 'Link to the file' }),
                        ObfuscatedFileName: z
                          .string()
                          .exactOptional()
                          .openapi({ description: 'Hashed file name to avoid url wildguessing' }),
                        OriginalFileName: z
                          .string()
                          .exactOptional()
                          .openapi({ description: 'Name of the file' }),
                        Size: z
                          .preprocess((val) => {
                            if (
                              typeof val !== 'string' ||
                              !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val)
                            )
                              return val
                            if (/^-?\d+$/.test(val)) return BigInt(val)
                            const num = Number(val)
                            return Number.isSafeInteger(num) ? BigInt(num) : val
                          }, z.int64())
                          .exactOptional()
                          .openapi({
                            type: 'integer',
                            format: 'int64',
                            description: 'File size number in bytes',
                          }),
                        Type: z
                          .enum(['External', 'Uploaded'])
                          .exactOptional()
                          .openapi({ description: 'Type of the link (Attached or external)' }),
                      })
                      .openapi({ required: [] }),
                  ),
                )
                .exactOptional()
                .openapi({ description: 'List of invoice attachments' }),
              ClientId: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional()
                .openapi({ description: 'The client to whom this invoice is assigned' }),
              ClonedFromId: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional()
                .openapi({
                  description: 'Indicate from which invoice this invoice has been cloned from',
                }),
              CurrencyId: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional()
                .openapi({ description: 'Id of the currency for the invoice amounts' }),
              Duedate: z.iso
                .datetime({ offset: true })
                .exactOptional()
                .openapi({ description: 'Indicates when the invoice will be proclamed as due' }),
              InvoiceCategoryId: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional()
                .openapi({ description: 'Hold the id of the invoice category' }),
              IssuedOn: z.iso
                .datetime({ offset: true })
                .exactOptional()
                .openapi({ description: 'Indicates when the invoice was issued' }),
              Items: z
                .preprocess(
                  (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                  z.array(
                    z
                      .object({
                        Cost: z
                          .preprocess(
                            (val) =>
                              typeof val === 'string' &&
                              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                ? Number(val)
                                : val,
                            z.float64(),
                          )
                          .exactOptional()
                          .openapi({ description: 'Amount per unit' }),
                        Description: z
                          .string()
                          .exactOptional()
                          .openapi({
                            description: 'Additional description attached to the invoice item',
                          }),
                        DiscountPercentage: z
                          .preprocess(
                            (val) =>
                              typeof val === 'string' &&
                              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                ? Number(val)
                                : val,
                            z.float64(),
                          )
                          .exactOptional()
                          .openapi({ description: 'Discount percentage for the overall amount' }),
                        Quantity: z
                          .preprocess(
                            (val) =>
                              typeof val === 'string' &&
                              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                ? Number(val)
                                : val,
                            z.float64(),
                          )
                          .exactOptional()
                          .openapi({ description: 'Quantity in total used for the work type' }),
                        TaxId: z
                          .preprocess(
                            (val) =>
                              typeof val === 'string' &&
                              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                ? Number(val)
                                : val,
                            z.int32(),
                          )
                          .exactOptional()
                          .openapi({ description: 'Tax applied on the item' }),
                        TaxPercentage: z
                          .preprocess(
                            (val) =>
                              typeof val === 'string' &&
                              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                ? Number(val)
                                : val,
                            z.float64(),
                          )
                          .exactOptional()
                          .openapi({ description: 'Task percentage. Ex: 18%' }),
                        WorkTypeId: z
                          .preprocess(
                            (val) =>
                              typeof val === 'string' &&
                              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                ? Number(val)
                                : val,
                            z.int32(),
                          )
                          .exactOptional()
                          .openapi({ description: 'Work type (Name of the service)' }),
                      })
                      .openapi({ required: [] }),
                  ),
                )
                .exactOptional()
                .openapi({ description: 'List of invoice items' }),
              Notes: z
                .string()
                .exactOptional()
                .openapi({ description: 'Internal note regarding the invoice' }),
              Number: z.string().exactOptional().openapi({ description: 'Unique invoice number' }),
              PaymentGateways: z
                .preprocess(
                  (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                  z.array(InvoiceGatewayApiModelSchema),
                )
                .exactOptional()
                .openapi({ description: 'List of enabled payment gateways for this invoice' }),
              PoNumber: z
                .string()
                .exactOptional()
                .openapi({ description: 'Unique number generated by the buyer' }),
              RecurringProfile: z
                .object({
                  DayOfMonth: z
                    .preprocess(
                      (val) =>
                        typeof val === 'string' &&
                        /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                        (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                          ? Number(val)
                          : val,
                      z.int32(),
                    )
                    .exactOptional()
                    .openapi({ description: 'Day of month when the recurrance should happen' }),
                  DayOfWeek: z
                    .enum([
                      'Sunday',
                      'Monday',
                      'Tuesday',
                      'Wednesday',
                      'Thursday',
                      'Friday',
                      'Saturday',
                    ])
                    .exactOptional()
                    .openapi({ description: 'Day when the recurrance should happen' }),
                  DueDateInDays: z
                    .preprocess(
                      (val) =>
                        typeof val === 'string' &&
                        /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                        (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                          ? Number(val)
                          : val,
                      z.int32(),
                    )
                    .exactOptional()
                    .openapi({
                      description:
                        'Total number of days for the client to pay the invoice after issuing it',
                    }),
                  EndOfRecurrance: z.iso
                    .datetime({ offset: true })
                    .exactOptional()
                    .openapi({ description: 'Indcate the date when the recurrance should stop' }),
                  Month: z
                    .preprocess(
                      (val) =>
                        typeof val === 'string' &&
                        /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                        (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                          ? Number(val)
                          : val,
                      z.int32(),
                    )
                    .exactOptional()
                    .openapi({ description: 'Month when the recurrance should happen' }),
                  RecurrancePattern: z
                    .enum(['Daily', 'Weekly', 'Monthly', 'Yearly'])
                    .exactOptional()
                    .openapi({ description: 'How often the recurrance occurs' }),
                  RecurranceValue: z
                    .preprocess(
                      (val) =>
                        typeof val === 'string' &&
                        /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                        (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                          ? Number(val)
                          : val,
                      z.int32(),
                    )
                    .exactOptional()
                    .openapi({
                      description:
                        'Recurring every [value] RecurrancePattern\r\nEx: Recur every 1 week',
                    }),
                  StartOfRecurrance: z.iso
                    .datetime({ offset: true })
                    .exactOptional()
                    .openapi({ description: 'Indcate the date when the recurrance has started' }),
                  Status: z
                    .enum(['Pending', 'Active', 'Cancelled', 'Finished'])
                    .exactOptional()
                    .openapi({ description: 'The status of the recurrance' }),
                  Title: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description:
                        'Title of the recurring profile. \r\nEx: BRAND PACKAGE - 2017-08-16 - 2018-08-16',
                    }),
                })
                .exactOptional()
                .openapi({ description: 'Definition of invoice recurring profile', required: [] }),
              RecurringProfileId: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional()
                .openapi({ description: 'Hold the id of the recurring profile' }),
              ShouldSendReminders: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'Should send email reminders to client?' }),
              Status: z
                .enum(['Draft', 'Paid', 'Unpaid', 'Overdue', 'Void'])
                .exactOptional()
                .openapi({
                  description: 'Indicate the status of the invoice (paid/unpaid/overdue)',
                }),
              Terms: z.string().exactOptional().openapi({ description: 'Terms of agreement' }),
            })
            .openapi({ required: [] }),
        },
        'application/xml': { schema: InvoiceCreateApiModelSchema },
        'text/html': { schema: InvoiceCreateApiModelSchema },
        'text/json': { schema: InvoiceCreateApiModelSchema },
        'text/xml': { schema: InvoiceCreateApiModelSchema },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: InvoiceFullDetailsApiModelSchema },
        'application/xml': { schema: InvoiceFullDetailsApiModelSchema },
        'text/html': { schema: InvoiceFullDetailsApiModelSchema },
        'text/json': { schema: InvoiceFullDetailsApiModelSchema },
        'text/xml': { schema: InvoiceFullDetailsApiModelSchema },
      },
    },
  },
})

export const postApiInvoiceNewcategoryRoute = createRoute({
  method: 'post',
  path: '/api/invoice/newcategory',
  tags: ['Invoice'],
  summary: 'Create an invoice category',
  request: {
    headers: z.object({
      'x-auth-key': z
        .string()
        .default('[authentication key]')
        .openapi({
          param: {
            description: '',
            in: 'header',
            name: 'x-auth-key',
            required: true,
            schema: { default: '[authentication key]', type: 'string' },
          },
        }),
      'x-auth-secret': z
        .string()
        .default('[authentication secret]')
        .openapi({
          param: {
            description: '',
            in: 'header',
            name: 'x-auth-secret',
            required: true,
            schema: { default: '[authentication secret]', type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': { schema: InvoiceCategoryCreateApiModelSchema },
        'application/x-www-form-urlencoded': { schema: InvoiceCategoryCreateApiModelSchema },
        'application/xml': { schema: InvoiceCategoryCreateApiModelSchema },
        'text/html': { schema: InvoiceCategoryCreateApiModelSchema },
        'text/json': { schema: InvoiceCategoryCreateApiModelSchema },
        'text/xml': { schema: InvoiceCategoryCreateApiModelSchema },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: InvoiceCategoryApiModelSchema },
        'application/xml': { schema: InvoiceCategoryApiModelSchema },
        'text/html': { schema: InvoiceCategoryApiModelSchema },
        'text/json': { schema: InvoiceCategoryApiModelSchema },
        'text/xml': { schema: InvoiceCategoryApiModelSchema },
      },
    },
  },
})

export const getApiInvoicePdfRoute = createRoute({
  method: 'get',
  path: '/api/invoice/pdf',
  tags: ['Invoice'],
  summary: 'Return the PDF for the invoice',
  operationId: 'InvoiceApi_Pdf',
  request: {
    query: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: '',
            in: 'query',
            name: 'id',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      signedVersion: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: '',
            in: 'query',
            name: 'signedVersion',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
    }),
    headers: z.object({
      'x-auth-key': z
        .string()
        .default('[authentication key]')
        .openapi({
          param: {
            description: '',
            in: 'header',
            name: 'x-auth-key',
            required: true,
            schema: { default: '[authentication key]', type: 'string' },
          },
        }),
      'x-auth-secret': z
        .string()
        .default('[authentication secret]')
        .openapi({
          param: {
            description: '',
            in: 'header',
            name: 'x-auth-secret',
            required: true,
            schema: { default: '[authentication secret]', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: InvoiceUriApiModelSchema },
        'application/xml': { schema: InvoiceUriApiModelSchema },
        'text/html': { schema: InvoiceUriApiModelSchema },
        'text/json': { schema: InvoiceUriApiModelSchema },
        'text/xml': { schema: InvoiceUriApiModelSchema },
      },
    },
  },
})

export const postApiInvoiceSendtoaccountantRoute = createRoute({
  method: 'post',
  path: '/api/invoice/sendtoaccountant',
  tags: ['Invoice'],
  summary: 'Send the provided invoice to the accountant',
  operationId: 'InvoiceApi_SendToAccountant',
  request: {
    headers: z.object({
      'x-auth-key': z
        .string()
        .default('[authentication key]')
        .openapi({
          param: {
            description: '',
            in: 'header',
            name: 'x-auth-key',
            required: true,
            schema: { default: '[authentication key]', type: 'string' },
          },
        }),
      'x-auth-secret': z
        .string()
        .default('[authentication secret]')
        .openapi({
          param: {
            description: '',
            in: 'header',
            name: 'x-auth-secret',
            required: true,
            schema: { default: '[authentication secret]', type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': { schema: SendInvoiceToAccountantApiModelSchema },
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              Id: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional()
                .openapi({ description: 'Id of the invoice' }),
            })
            .openapi({ required: [] }),
        },
        'application/xml': { schema: SendInvoiceToAccountantApiModelSchema },
        'text/html': { schema: SendInvoiceToAccountantApiModelSchema },
        'text/json': { schema: SendInvoiceToAccountantApiModelSchema },
        'text/xml': { schema: SendInvoiceToAccountantApiModelSchema },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: z.int32() },
        'application/xml': { schema: z.int32() },
        'text/html': { schema: z.int32() },
        'text/json': { schema: z.int32() },
        'text/xml': { schema: z.int32() },
      },
    },
  },
})

export const postApiInvoiceSendtoclientRoute = createRoute({
  method: 'post',
  path: '/api/invoice/sendtoclient',
  tags: ['Invoice'],
  summary: 'Send the provided invoice to the client',
  operationId: 'InvoiceApi_SendToClient',
  request: {
    headers: z.object({
      'x-auth-key': z
        .string()
        .default('[authentication key]')
        .openapi({
          param: {
            description: '',
            in: 'header',
            name: 'x-auth-key',
            required: true,
            schema: { default: '[authentication key]', type: 'string' },
          },
        }),
      'x-auth-secret': z
        .string()
        .default('[authentication secret]')
        .openapi({
          param: {
            description: '',
            in: 'header',
            name: 'x-auth-secret',
            required: true,
            schema: { default: '[authentication secret]', type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': { schema: SendInvoiceToClientApiModelSchema },
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              AttachPdf: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'Should attach pdf file' }),
              Id: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional()
                .openapi({ description: 'Id of the invoice' }),
              InvoiceId: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional()
                .openapi({ description: 'Id of the invoice' }),
              Message: z
                .string()
                .exactOptional()
                .openapi({ description: 'Message to be embedded in the email' }),
              SendToSelf: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'Should email copy be send to self' }),
              Subject: z.string().exactOptional().openapi({ description: 'Subject for the email' }),
            })
            .openapi({ required: [] }),
        },
        'application/xml': { schema: SendInvoiceToClientApiModelSchema },
        'text/html': { schema: SendInvoiceToClientApiModelSchema },
        'text/json': { schema: SendInvoiceToClientApiModelSchema },
        'text/xml': { schema: SendInvoiceToClientApiModelSchema },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: z.int32() },
        'application/xml': { schema: z.int32() },
        'text/html': { schema: z.int32() },
        'text/json': { schema: z.int32() },
        'text/xml': { schema: z.int32() },
      },
    },
  },
})

export const getApiInvoiceStatusRoute = createRoute({
  method: 'get',
  path: '/api/invoice/status',
  tags: ['Invoice'],
  summary: 'Retrieve the status of the invoice',
  operationId: 'InvoiceApi_Status',
  request: {
    query: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            in: 'query',
            name: 'id',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
    headers: z.object({
      'x-auth-key': z
        .string()
        .default('[authentication key]')
        .openapi({
          param: {
            description: '',
            in: 'header',
            name: 'x-auth-key',
            required: true,
            schema: { default: '[authentication key]', type: 'string' },
          },
        }),
      'x-auth-secret': z
        .string()
        .default('[authentication secret]')
        .openapi({
          param: {
            description: '',
            in: 'header',
            name: 'x-auth-secret',
            required: true,
            schema: { default: '[authentication secret]', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: z.enum(['Draft', 'Paid', 'Unpaid', 'Overdue', 'Void']) },
        'application/xml': { schema: z.enum(['Draft', 'Paid', 'Unpaid', 'Overdue', 'Void']) },
        'text/html': { schema: z.enum(['Draft', 'Paid', 'Unpaid', 'Overdue', 'Void']) },
        'text/json': { schema: z.enum(['Draft', 'Paid', 'Unpaid', 'Overdue', 'Void']) },
        'text/xml': { schema: z.enum(['Draft', 'Paid', 'Unpaid', 'Overdue', 'Void']) },
      },
    },
  },
})

export const postApiInvoiceUpdateRoute = createRoute({
  method: 'post',
  path: '/api/invoice/update',
  tags: ['Invoice'],
  summary: 'Update an existing invoice',
  operationId: 'InvoiceApi_Update',
  request: {
    headers: z.object({
      'x-auth-key': z
        .string()
        .default('[authentication key]')
        .openapi({
          param: {
            description: '',
            in: 'header',
            name: 'x-auth-key',
            required: true,
            schema: { default: '[authentication key]', type: 'string' },
          },
        }),
      'x-auth-secret': z
        .string()
        .default('[authentication secret]')
        .openapi({
          param: {
            description: '',
            in: 'header',
            name: 'x-auth-secret',
            required: true,
            schema: { default: '[authentication secret]', type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': { schema: InvoiceUpdateApiModelSchema },
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              Attachments: z
                .preprocess(
                  (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                  z.array(
                    z
                      .object({
                        Id: z
                          .preprocess(
                            (val) =>
                              typeof val === 'string' &&
                              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                ? Number(val)
                                : val,
                            z.int32(),
                          )
                          .exactOptional()
                          .openapi({ description: 'Id of invoice attachment' }),
                        Link: z
                          .string()
                          .exactOptional()
                          .openapi({ description: 'Link to the file' }),
                        ObfuscatedFileName: z
                          .string()
                          .exactOptional()
                          .openapi({ description: 'Hashed file name to avoid url wildguessing' }),
                        OriginalFileName: z
                          .string()
                          .exactOptional()
                          .openapi({ description: 'Name of the file' }),
                        Size: z
                          .preprocess((val) => {
                            if (
                              typeof val !== 'string' ||
                              !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val)
                            )
                              return val
                            if (/^-?\d+$/.test(val)) return BigInt(val)
                            const num = Number(val)
                            return Number.isSafeInteger(num) ? BigInt(num) : val
                          }, z.int64())
                          .exactOptional()
                          .openapi({
                            type: 'integer',
                            format: 'int64',
                            description: 'File size number in bytes',
                          }),
                        Type: z
                          .enum(['External', 'Uploaded'])
                          .exactOptional()
                          .openapi({ description: 'Type of the link (Attached or external)' }),
                      })
                      .openapi({ required: [] }),
                  ),
                )
                .exactOptional()
                .openapi({ description: 'List of invoice attachments' }),
              ClientId: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional()
                .openapi({ description: 'The client to whom this invoice is assigned' }),
              ClonedFromId: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional()
                .openapi({
                  description: 'Indicate from which invoice this invoice has been cloned from',
                }),
              CurrencyId: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional()
                .openapi({ description: 'Id of the currency for the invoice amounts' }),
              Duedate: z.iso
                .datetime({ offset: true })
                .exactOptional()
                .openapi({ description: 'Indicates when the invoice will be proclamed as due' }),
              Id: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional()
                .openapi({ description: 'Invoice id' }),
              InvoiceCategoryId: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional()
                .openapi({ description: 'Hold the id of the invoice category' }),
              IssuedOn: z.iso
                .datetime({ offset: true })
                .exactOptional()
                .openapi({ description: 'Indicates when the invoice was issued' }),
              Items: z
                .preprocess(
                  (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                  z.array(
                    z
                      .object({
                        Cost: z
                          .preprocess(
                            (val) =>
                              typeof val === 'string' &&
                              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                ? Number(val)
                                : val,
                            z.float64(),
                          )
                          .exactOptional()
                          .openapi({ description: 'Amount per unit' }),
                        Description: z
                          .string()
                          .exactOptional()
                          .openapi({
                            description: 'Additional description attached to the invoice item',
                          }),
                        DiscountPercentage: z
                          .preprocess(
                            (val) =>
                              typeof val === 'string' &&
                              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                ? Number(val)
                                : val,
                            z.float64(),
                          )
                          .exactOptional()
                          .openapi({ description: 'Discount percentage for the overall amount' }),
                        Id: z
                          .preprocess(
                            (val) =>
                              typeof val === 'string' &&
                              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                ? Number(val)
                                : val,
                            z.int32(),
                          )
                          .exactOptional()
                          .openapi({ description: 'Id of invoice item' }),
                        Quantity: z
                          .preprocess(
                            (val) =>
                              typeof val === 'string' &&
                              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                ? Number(val)
                                : val,
                            z.float64(),
                          )
                          .exactOptional()
                          .openapi({ description: 'Quantity in total used for the work type' }),
                        TaxId: z
                          .preprocess(
                            (val) =>
                              typeof val === 'string' &&
                              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                ? Number(val)
                                : val,
                            z.int32(),
                          )
                          .exactOptional()
                          .openapi({ description: 'Tax applied on the item' }),
                        TaxPercentage: z
                          .preprocess(
                            (val) =>
                              typeof val === 'string' &&
                              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                ? Number(val)
                                : val,
                            z.float64(),
                          )
                          .exactOptional()
                          .openapi({ description: 'Task percentage. Ex: 18%' }),
                        WorkTypeId: z
                          .preprocess(
                            (val) =>
                              typeof val === 'string' &&
                              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                ? Number(val)
                                : val,
                            z.int32(),
                          )
                          .exactOptional()
                          .openapi({ description: 'Work type (Name of the service)' }),
                      })
                      .openapi({ required: [] }),
                  ),
                )
                .exactOptional()
                .openapi({ description: 'List of invoice items' }),
              Notes: z
                .string()
                .exactOptional()
                .openapi({ description: 'Internal note regarding the invoice' }),
              Number: z.string().exactOptional().openapi({ description: 'Unique invoice number' }),
              PaymentGateways: z
                .preprocess(
                  (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                  z.array(InvoiceGatewayApiModelSchema),
                )
                .exactOptional()
                .openapi({ description: 'List of enabled payment gateways for this invoice' }),
              PoNumber: z
                .string()
                .exactOptional()
                .openapi({ description: 'Unique number generated by the buyer' }),
              RecurringProfile: z
                .object({
                  DayOfMonth: z
                    .preprocess(
                      (val) =>
                        typeof val === 'string' &&
                        /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                        (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                          ? Number(val)
                          : val,
                      z.int32(),
                    )
                    .exactOptional()
                    .openapi({ description: 'Day of month when the recurrance should happen' }),
                  DayOfWeek: z
                    .enum([
                      'Sunday',
                      'Monday',
                      'Tuesday',
                      'Wednesday',
                      'Thursday',
                      'Friday',
                      'Saturday',
                    ])
                    .exactOptional()
                    .openapi({ description: 'Day when the recurrance should happen' }),
                  DueDateInDays: z
                    .preprocess(
                      (val) =>
                        typeof val === 'string' &&
                        /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                        (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                          ? Number(val)
                          : val,
                      z.int32(),
                    )
                    .exactOptional()
                    .openapi({
                      description:
                        'Total number of days for the client to pay the invoice after issuing it',
                    }),
                  EndOfRecurrance: z.iso
                    .datetime({ offset: true })
                    .exactOptional()
                    .openapi({ description: 'Indcate the date when the recurrance should stop' }),
                  Month: z
                    .preprocess(
                      (val) =>
                        typeof val === 'string' &&
                        /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                        (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                          ? Number(val)
                          : val,
                      z.int32(),
                    )
                    .exactOptional()
                    .openapi({ description: 'Month when the recurrance should happen' }),
                  RecurrancePattern: z
                    .enum(['Daily', 'Weekly', 'Monthly', 'Yearly'])
                    .exactOptional()
                    .openapi({ description: 'How often the recurrance occurs' }),
                  RecurranceValue: z
                    .preprocess(
                      (val) =>
                        typeof val === 'string' &&
                        /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                        (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                          ? Number(val)
                          : val,
                      z.int32(),
                    )
                    .exactOptional()
                    .openapi({
                      description:
                        'Recurring every [value] RecurrancePattern\r\nEx: Recur every 1 week',
                    }),
                  StartOfRecurrance: z.iso
                    .datetime({ offset: true })
                    .exactOptional()
                    .openapi({ description: 'Indcate the date when the recurrance has started' }),
                  Status: z
                    .enum(['Pending', 'Active', 'Cancelled', 'Finished'])
                    .exactOptional()
                    .openapi({ description: 'The status of the recurrance' }),
                  Title: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description:
                        'Title of the recurring profile. \r\nEx: BRAND PACKAGE - 2017-08-16 - 2018-08-16',
                    }),
                })
                .exactOptional()
                .openapi({ description: 'Definition of invoice recurring profile', required: [] }),
              RecurringProfileId: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional()
                .openapi({ description: 'Hold the id of the recurring profile' }),
              ShouldSendReminders: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'Should send email reminders to client?' }),
              Status: z
                .enum(['Draft', 'Paid', 'Unpaid', 'Overdue', 'Void'])
                .exactOptional()
                .openapi({
                  description: 'Indicate the status of the invoice (paid/unpaid/overdue)',
                }),
              Terms: z.string().exactOptional().openapi({ description: 'Terms of agreement' }),
            })
            .openapi({ required: [] }),
        },
        'application/xml': { schema: InvoiceUpdateApiModelSchema },
        'text/html': { schema: InvoiceUpdateApiModelSchema },
        'text/json': { schema: InvoiceUpdateApiModelSchema },
        'text/xml': { schema: InvoiceUpdateApiModelSchema },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: InvoiceFullDetailsApiModelSchema },
        'application/xml': { schema: InvoiceFullDetailsApiModelSchema },
        'text/html': { schema: InvoiceFullDetailsApiModelSchema },
        'text/json': { schema: InvoiceFullDetailsApiModelSchema },
        'text/xml': { schema: InvoiceFullDetailsApiModelSchema },
      },
    },
  },
})

export const postApiInvoiceUpdatecategoryRoute = createRoute({
  method: 'post',
  path: '/api/invoice/updatecategory',
  tags: ['Invoice'],
  summary: 'Update an existing invoice category',
  request: {
    headers: z.object({
      'x-auth-key': z
        .string()
        .default('[authentication key]')
        .openapi({
          param: {
            description: '',
            in: 'header',
            name: 'x-auth-key',
            required: true,
            schema: { default: '[authentication key]', type: 'string' },
          },
        }),
      'x-auth-secret': z
        .string()
        .default('[authentication secret]')
        .openapi({
          param: {
            description: '',
            in: 'header',
            name: 'x-auth-secret',
            required: true,
            schema: { default: '[authentication secret]', type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': { schema: InvoiceCategoryUpdateApiModelSchema },
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              Id: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional()
                .openapi({ description: 'Entity id' }),
              Name: z.string().exactOptional().openapi({ description: 'Category name' }),
            })
            .openapi({ required: [] }),
        },
        'application/xml': { schema: InvoiceCategoryUpdateApiModelSchema },
        'text/html': { schema: InvoiceCategoryUpdateApiModelSchema },
        'text/json': { schema: InvoiceCategoryUpdateApiModelSchema },
        'text/xml': { schema: InvoiceCategoryUpdateApiModelSchema },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: InvoiceCategoryApiModelSchema },
        'application/xml': { schema: InvoiceCategoryApiModelSchema },
        'text/html': { schema: InvoiceCategoryApiModelSchema },
        'text/json': { schema: InvoiceCategoryApiModelSchema },
        'text/xml': { schema: InvoiceCategoryApiModelSchema },
      },
    },
  },
})

export const getApiInvoiceUriRoute = createRoute({
  method: 'get',
  path: '/api/invoice/uri',
  tags: ['Invoice'],
  summary: "Return the unique url to the client's invoice",
  operationId: 'InvoiceApi_Uri',
  request: {
    query: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: '',
            in: 'query',
            name: 'id',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
    headers: z.object({
      'x-auth-key': z
        .string()
        .default('[authentication key]')
        .openapi({
          param: {
            description: '',
            in: 'header',
            name: 'x-auth-key',
            required: true,
            schema: { default: '[authentication key]', type: 'string' },
          },
        }),
      'x-auth-secret': z
        .string()
        .default('[authentication secret]')
        .openapi({
          param: {
            description: '',
            in: 'header',
            name: 'x-auth-secret',
            required: true,
            schema: { default: '[authentication secret]', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: InvoiceUriApiModelSchema },
        'application/xml': { schema: InvoiceUriApiModelSchema },
        'text/html': { schema: InvoiceUriApiModelSchema },
        'text/json': { schema: InvoiceUriApiModelSchema },
        'text/xml': { schema: InvoiceUriApiModelSchema },
      },
    },
  },
})

export const getApiOrderAllRoute = createRoute({
  method: 'get',
  path: '/api/order/all',
  tags: ['Order'],
  summary: 'Return all orders for the account',
  operationId: 'OrderApi_All',
  request: {
    query: z.object({
      'queryOptions.page': z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'queryOptions.page',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      'queryOptions.pageSize': z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'queryOptions.pageSize',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
    headers: z.object({
      'x-auth-key': z
        .string()
        .default('[authentication key]')
        .openapi({
          param: {
            description: '',
            in: 'header',
            name: 'x-auth-key',
            required: true,
            schema: { default: '[authentication key]', type: 'string' },
          },
        }),
      'x-auth-secret': z
        .string()
        .default('[authentication secret]')
        .openapi({
          param: {
            description: '',
            in: 'header',
            name: 'x-auth-secret',
            required: true,
            schema: { default: '[authentication secret]', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: ListResultOrderDetailsApiModelSchema },
        'application/xml': { schema: ListResultOrderDetailsApiModelSchema },
        'text/html': { schema: ListResultOrderDetailsApiModelSchema },
        'text/json': { schema: ListResultOrderDetailsApiModelSchema },
        'text/xml': { schema: ListResultOrderDetailsApiModelSchema },
      },
    },
  },
})

export const postApiOrderChangeshippingdetailsRoute = createRoute({
  method: 'post',
  path: '/api/order/changeshippingdetails',
  tags: ['Order'],
  summary: 'Change order shipping details',
  operationId: 'OrderApi_ChangeShippingDetails',
  request: {
    query: z.object({
      orderId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            in: 'query',
            name: 'orderId',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
    headers: z.object({
      'x-auth-key': z
        .string()
        .default('[authentication key]')
        .openapi({
          param: {
            description: '',
            in: 'header',
            name: 'x-auth-key',
            required: true,
            schema: { default: '[authentication key]', type: 'string' },
          },
        }),
      'x-auth-secret': z
        .string()
        .default('[authentication secret]')
        .openapi({
          param: {
            description: '',
            in: 'header',
            name: 'x-auth-secret',
            required: true,
            schema: { default: '[authentication secret]', type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': { schema: OrderShippingDetailsApiModelSchema },
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              Address: z
                .string()
                .exactOptional()
                .openapi({ description: 'Client street and number' }),
              CountryId: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional()
                .openapi({ description: 'Client country id' }),
              Email: z.string().exactOptional().openapi({ description: 'Client email' }),
              Name: z.string().exactOptional().openapi({ description: 'Client name' }),
              PhoneNumber: z
                .string()
                .exactOptional()
                .openapi({ description: 'Client phone number' }),
            })
            .openapi({ required: [] }),
        },
        'application/xml': { schema: OrderShippingDetailsApiModelSchema },
        'text/html': { schema: OrderShippingDetailsApiModelSchema },
        'text/json': { schema: OrderShippingDetailsApiModelSchema },
        'text/xml': { schema: OrderShippingDetailsApiModelSchema },
      },
      required: true,
    },
  },
  responses: { 204: { description: 'No Content' } },
})

export const postApiOrderChangestatusRoute = createRoute({
  method: 'post',
  path: '/api/order/changestatus',
  tags: ['Order'],
  summary: 'Change order status',
  operationId: 'OrderApi_ChangeStatus',
  request: {
    headers: z.object({
      'x-auth-key': z
        .string()
        .default('[authentication key]')
        .openapi({
          param: {
            description: '',
            in: 'header',
            name: 'x-auth-key',
            required: true,
            schema: { default: '[authentication key]', type: 'string' },
          },
        }),
      'x-auth-secret': z
        .string()
        .default('[authentication secret]')
        .openapi({
          param: {
            description: '',
            in: 'header',
            name: 'x-auth-secret',
            required: true,
            schema: { default: '[authentication secret]', type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': { schema: ChangeOrderStatusApiModelSchema },
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              Id: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional()
                .openapi({ description: 'Order Id' }),
              Reason: z
                .string()
                .exactOptional()
                .openapi({ description: 'Reason for status change' }),
              Status: z
                .enum([
                  'PendingPayment',
                  'Processing',
                  'Shipped',
                  'Completed',
                  'OnHold',
                  'Cancelled',
                  'Refunded',
                  'Failed',
                ])
                .exactOptional()
                .openapi({ description: 'New status of the order' }),
            })
            .openapi({ required: [] }),
        },
        'application/xml': { schema: ChangeOrderStatusApiModelSchema },
        'text/html': { schema: ChangeOrderStatusApiModelSchema },
        'text/json': { schema: ChangeOrderStatusApiModelSchema },
        'text/xml': { schema: ChangeOrderStatusApiModelSchema },
      },
      required: true,
    },
  },
  responses: { 204: { description: 'No Content' } },
})

export const postApiOrderDeleteRoute = createRoute({
  method: 'post',
  path: '/api/order/delete',
  tags: ['Order'],
  summary: 'Delete an existing order',
  operationId: 'OrderApi_Delete',
  request: {
    headers: z.object({
      'x-auth-key': z
        .string()
        .default('[authentication key]')
        .openapi({
          param: {
            description: '',
            in: 'header',
            name: 'x-auth-key',
            required: true,
            schema: { default: '[authentication key]', type: 'string' },
          },
        }),
      'x-auth-secret': z
        .string()
        .default('[authentication secret]')
        .openapi({
          param: {
            description: '',
            in: 'header',
            name: 'x-auth-secret',
            required: true,
            schema: { default: '[authentication secret]', type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': { schema: OrderDeleteApiModelSchema },
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              Id: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional()
                .openapi({ description: 'Id of order to be deleted' }),
            })
            .openapi({ required: [] }),
        },
        'application/xml': { schema: OrderDeleteApiModelSchema },
        'text/html': { schema: OrderDeleteApiModelSchema },
        'text/json': { schema: OrderDeleteApiModelSchema },
        'text/xml': { schema: OrderDeleteApiModelSchema },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: z.int32() },
        'application/xml': { schema: z.int32() },
        'text/html': { schema: z.int32() },
        'text/json': { schema: z.int32() },
        'text/xml': { schema: z.int32() },
      },
    },
  },
})

export const getApiOrderDetailsRoute = createRoute({
  method: 'get',
  path: '/api/order/details',
  tags: ['Order'],
  summary: 'Return order details',
  operationId: 'OrderApi_Details',
  request: {
    query: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            in: 'query',
            name: 'id',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
    headers: z.object({
      'x-auth-key': z
        .string()
        .default('[authentication key]')
        .openapi({
          param: {
            description: '',
            in: 'header',
            name: 'x-auth-key',
            required: true,
            schema: { default: '[authentication key]', type: 'string' },
          },
        }),
      'x-auth-secret': z
        .string()
        .default('[authentication secret]')
        .openapi({
          param: {
            description: '',
            in: 'header',
            name: 'x-auth-secret',
            required: true,
            schema: { default: '[authentication secret]', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: OrderFullDetailsApiModelSchema },
        'application/xml': { schema: OrderFullDetailsApiModelSchema },
        'text/html': { schema: OrderFullDetailsApiModelSchema },
        'text/json': { schema: OrderFullDetailsApiModelSchema },
        'text/xml': { schema: OrderFullDetailsApiModelSchema },
      },
    },
  },
})

export const postApiOrderNewRoute = createRoute({
  method: 'post',
  path: '/api/order/new',
  tags: ['Order'],
  summary: 'Create an order',
  operationId: 'OrderApi_New',
  request: {
    headers: z.object({
      'x-auth-key': z
        .string()
        .default('[authentication key]')
        .openapi({
          param: {
            description: '',
            in: 'header',
            name: 'x-auth-key',
            required: true,
            schema: { default: '[authentication key]', type: 'string' },
          },
        }),
      'x-auth-secret': z
        .string()
        .default('[authentication secret]')
        .openapi({
          param: {
            description: '',
            in: 'header',
            name: 'x-auth-secret',
            required: true,
            schema: { default: '[authentication secret]', type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': { schema: OrderCreateApiModelSchema },
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              AfterPaymentDescription: z
                .string()
                .exactOptional()
                .openapi({ description: 'After payment description' }),
              Attachments: z
                .preprocess(
                  (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                  z.array(
                    z
                      .object({
                        Link: z
                          .string()
                          .exactOptional()
                          .openapi({ description: 'Link to the file' }),
                        ObfuscatedFileName: z
                          .string()
                          .exactOptional()
                          .openapi({ description: 'Hashed file name to avoid url wildguessing' }),
                        OriginalFileName: z
                          .string()
                          .exactOptional()
                          .openapi({ description: 'Name of the file' }),
                        Size: z
                          .preprocess((val) => {
                            if (
                              typeof val !== 'string' ||
                              !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val)
                            )
                              return val
                            if (/^-?\d+$/.test(val)) return BigInt(val)
                            const num = Number(val)
                            return Number.isSafeInteger(num) ? BigInt(num) : val
                          }, z.int64())
                          .exactOptional()
                          .openapi({
                            type: 'integer',
                            format: 'int64',
                            description: 'File size number in bytes',
                          }),
                        Type: z
                          .enum(['External', 'Uploaded'])
                          .exactOptional()
                          .openapi({ description: 'Type of the link (Attached or external)' }),
                      })
                      .openapi({ required: [] }),
                  ),
                )
                .exactOptional()
                .openapi({ description: 'List of Order attachments' }),
              CouponCode: z
                .string()
                .exactOptional()
                .openapi({ description: 'Coupon to apply in order to get the discount' }),
              CurrencyId: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional()
                .openapi({ description: 'Foreign key Currency' }),
              Description: z
                .string()
                .exactOptional()
                .openapi({ description: 'Product description' }),
              DiscountAmount: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.float64(),
                )
                .exactOptional()
                .openapi({ description: 'Discount amount' }),
              Items: z
                .preprocess(
                  (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                  z.array(
                    z
                      .object({
                        Cost: z
                          .preprocess(
                            (val) =>
                              typeof val === 'string' &&
                              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                ? Number(val)
                                : val,
                            z.float64(),
                          )
                          .exactOptional()
                          .openapi({ description: 'Work item cost' }),
                        Description: z
                          .string()
                          .exactOptional()
                          .openapi({ description: 'General description' }),
                        ProductItemId: z
                          .preprocess(
                            (val) =>
                              typeof val === 'string' &&
                              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                ? Number(val)
                                : val,
                            z.int32(),
                          )
                          .exactOptional()
                          .openapi({ description: 'Foreign key product item id' }),
                        Quantity: z
                          .preprocess(
                            (val) =>
                              typeof val === 'string' &&
                              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                ? Number(val)
                                : val,
                            z.float64(),
                          )
                          .exactOptional()
                          .openapi({ description: 'Work item quantity' }),
                        ReferenceId: z
                          .string()
                          .exactOptional()
                          .openapi({ description: 'Order SKU' }),
                        SubTotalAmount: z
                          .preprocess(
                            (val) =>
                              typeof val === 'string' &&
                              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                ? Number(val)
                                : val,
                            z.float64(),
                          )
                          .exactOptional()
                          .openapi({ description: 'Subtotal amount of product' }),
                        TaxAmount: z
                          .preprocess(
                            (val) =>
                              typeof val === 'string' &&
                              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                ? Number(val)
                                : val,
                            z.float64(),
                          )
                          .exactOptional()
                          .openapi({ description: 'Tax amount' }),
                        TaxId: z
                          .preprocess(
                            (val) =>
                              typeof val === 'string' &&
                              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                ? Number(val)
                                : val,
                            z.int32(),
                          )
                          .exactOptional()
                          .openapi({ description: 'Foreign key Tax id' }),
                        TaxPercentage: z
                          .preprocess(
                            (val) =>
                              typeof val === 'string' &&
                              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                ? Number(val)
                                : val,
                            z.float64(),
                          )
                          .exactOptional()
                          .openapi({ description: 'Tax percentage' }),
                        TotalAmount: z
                          .preprocess(
                            (val) =>
                              typeof val === 'string' &&
                              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                ? Number(val)
                                : val,
                            z.float64(),
                          )
                          .exactOptional()
                          .openapi({ description: 'Total amount of product' }),
                        WorkTypeId: z
                          .preprocess(
                            (val) =>
                              typeof val === 'string' &&
                              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                ? Number(val)
                                : val,
                            z.int32(),
                          )
                          .exactOptional()
                          .openapi({ description: 'Foreign key work type id' }),
                      })
                      .openapi({ required: [] }),
                  ),
                )
                .exactOptional()
                .openapi({ description: 'List of Order items' }),
              Name: z.string().exactOptional().openapi({ description: 'Product alias' }),
              Note: z.string().exactOptional().openapi({ description: 'Customer note to seller' }),
              OrderBillingDetails: z
                .object({
                  Address: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'Client street and number' }),
                  CountryId: z
                    .preprocess(
                      (val) =>
                        typeof val === 'string' &&
                        /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                        (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                          ? Number(val)
                          : val,
                      z.int32(),
                    )
                    .exactOptional()
                    .openapi({ description: 'Client country id' }),
                  Email: z.string().exactOptional().openapi({ description: 'Client email' }),
                  Name: z.string().exactOptional().openapi({ description: 'Client name' }),
                  PhoneNumber: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'Client phone number' }),
                })
                .exactOptional()
                .openapi({ required: [] }),
              OrderShippingDetails: z
                .object({
                  Address: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'Client street and number' }),
                  CountryId: z
                    .preprocess(
                      (val) =>
                        typeof val === 'string' &&
                        /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                        (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                          ? Number(val)
                          : val,
                      z.int32(),
                    )
                    .exactOptional()
                    .openapi({ description: 'Client country id' }),
                  Email: z.string().exactOptional().openapi({ description: 'Client email' }),
                  Name: z.string().exactOptional().openapi({ description: 'Client name' }),
                  PhoneNumber: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'Client phone number' }),
                })
                .exactOptional()
                .openapi({ required: [] }),
              ProductId: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional()
                .openapi({ description: 'Product id' }),
              Referral: z
                .string()
                .exactOptional()
                .openapi({ description: 'Represent the referral for this order' }),
              ShippingAmount: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.float64(),
                )
                .exactOptional()
                .openapi({ description: 'Cost for shipping the product' }),
              ShippingDescription: z
                .string()
                .exactOptional()
                .openapi({ description: 'Client instructions for shipping' }),
              Status: z
                .enum([
                  'PendingPayment',
                  'Processing',
                  'Shipped',
                  'Completed',
                  'OnHold',
                  'Cancelled',
                  'Refunded',
                  'Failed',
                ])
                .exactOptional()
                .openapi({ description: 'Order status' }),
              SubTotalAmount: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.float64(),
                )
                .exactOptional()
                .openapi({ description: 'Sub total amount' }),
              TaxAmount: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.float64(),
                )
                .exactOptional()
                .openapi({ description: 'Tax amount' }),
              TotalAmount: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.float64(),
                )
                .exactOptional()
                .openapi({ description: 'Total amount' }),
              WhatHappensNextDescription: z
                .string()
                .exactOptional()
                .openapi({ description: 'What happens next description' }),
            })
            .openapi({ required: [] }),
        },
        'application/xml': { schema: OrderCreateApiModelSchema },
        'text/html': { schema: OrderCreateApiModelSchema },
        'text/json': { schema: OrderCreateApiModelSchema },
        'text/xml': { schema: OrderCreateApiModelSchema },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: z.int32() },
        'application/xml': { schema: z.int32() },
        'text/html': { schema: z.int32() },
        'text/json': { schema: z.int32() },
        'text/xml': { schema: z.int32() },
      },
    },
  },
})

export const getApiPaymentSupportedRoute = createRoute({
  method: 'get',
  path: '/api/payment/supported',
  tags: ['Payment'],
  summary: 'Return all supported payment gateways (no currencies means all are supported)',
  operationId: 'PaymentApi_Supported',
  request: {
    headers: z.object({
      'x-auth-key': z
        .string()
        .default('[authentication key]')
        .openapi({
          param: {
            description: '',
            in: 'header',
            name: 'x-auth-key',
            required: true,
            schema: { default: '[authentication key]', type: 'string' },
          },
        }),
      'x-auth-secret': z
        .string()
        .default('[authentication secret]')
        .openapi({
          param: {
            description: '',
            in: 'header',
            name: 'x-auth-secret',
            required: true,
            schema: { default: '[authentication secret]', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: z.array(PaymentGatewayDetailsApiModelSchema) },
        'application/xml': { schema: z.array(PaymentGatewayDetailsApiModelSchema) },
        'text/html': { schema: z.array(PaymentGatewayDetailsApiModelSchema) },
        'text/json': { schema: z.array(PaymentGatewayDetailsApiModelSchema) },
        'text/xml': { schema: z.array(PaymentGatewayDetailsApiModelSchema) },
      },
    },
  },
})

export const getApiPaymentlinkAllRoute = createRoute({
  method: 'get',
  path: '/api/paymentlink/all',
  tags: ['PaymentLink'],
  summary: 'Create a payment link',
  operationId: 'PaymentLinkApi_All',
  request: {
    query: z.object({
      'queryOptions.page': z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'queryOptions.page',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      'queryOptions.pageSize': z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'queryOptions.pageSize',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
    headers: z.object({
      'x-auth-key': z
        .string()
        .default('[authentication key]')
        .openapi({
          param: {
            description: '',
            in: 'header',
            name: 'x-auth-key',
            required: true,
            schema: { default: '[authentication key]', type: 'string' },
          },
        }),
      'x-auth-secret': z
        .string()
        .default('[authentication secret]')
        .openapi({
          param: {
            description: '',
            in: 'header',
            name: 'x-auth-secret',
            required: true,
            schema: { default: '[authentication secret]', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: ListResultPaymentLinkSchema },
        'application/xml': { schema: ListResultPaymentLinkSchema },
        'text/html': { schema: ListResultPaymentLinkSchema },
        'text/json': { schema: ListResultPaymentLinkSchema },
        'text/xml': { schema: ListResultPaymentLinkSchema },
      },
    },
  },
})

export const postApiPaymentlinkDeleteRoute = createRoute({
  method: 'post',
  path: '/api/paymentlink/delete',
  tags: ['PaymentLink'],
  summary: 'Delete an existing payment link',
  operationId: 'PaymentLinkApi_Delete',
  request: {
    headers: z.object({
      'x-auth-key': z
        .string()
        .default('[authentication key]')
        .openapi({
          param: {
            description: '',
            in: 'header',
            name: 'x-auth-key',
            required: true,
            schema: { default: '[authentication key]', type: 'string' },
          },
        }),
      'x-auth-secret': z
        .string()
        .default('[authentication secret]')
        .openapi({
          param: {
            description: '',
            in: 'header',
            name: 'x-auth-secret',
            required: true,
            schema: { default: '[authentication secret]', type: 'string' },
          },
        }),
    }),
    body: PaymentLinkRequestBody,
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: z.int32() },
        'application/xml': { schema: z.int32() },
        'text/html': { schema: z.int32() },
        'text/json': { schema: z.int32() },
        'text/xml': { schema: z.int32() },
      },
    },
  },
})

export const postApiPaymentlinkNewRoute = createRoute({
  method: 'post',
  path: '/api/paymentlink/new',
  tags: ['PaymentLink'],
  summary: 'Create a payment link',
  operationId: 'PaymentLinkApi_New',
  request: {
    headers: z.object({
      'x-auth-key': z
        .string()
        .default('[authentication key]')
        .openapi({
          param: {
            description: '',
            in: 'header',
            name: 'x-auth-key',
            required: true,
            schema: { default: '[authentication key]', type: 'string' },
          },
        }),
      'x-auth-secret': z
        .string()
        .default('[authentication secret]')
        .openapi({
          param: {
            description: '',
            in: 'header',
            name: 'x-auth-secret',
            required: true,
            schema: { default: '[authentication secret]', type: 'string' },
          },
        }),
    }),
    body: PaymentLinkRequestBody,
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: z.int32() },
        'application/xml': { schema: z.int32() },
        'text/html': { schema: z.int32() },
        'text/json': { schema: z.int32() },
        'text/xml': { schema: z.int32() },
      },
    },
  },
})

export const getApiPaymentlinkUriRoute = createRoute({
  method: 'get',
  path: '/api/paymentlink/uri',
  tags: ['PaymentLink'],
  summary: "Return the unique url to the client's payment link",
  operationId: 'PaymentLinkApi_Uri',
  request: {
    query: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: '',
            in: 'query',
            name: 'id',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
    headers: z.object({
      'x-auth-key': z
        .string()
        .default('[authentication key]')
        .openapi({
          param: {
            description: '',
            in: 'header',
            name: 'x-auth-key',
            required: true,
            schema: { default: '[authentication key]', type: 'string' },
          },
        }),
      'x-auth-secret': z
        .string()
        .default('[authentication secret]')
        .openapi({
          param: {
            description: '',
            in: 'header',
            name: 'x-auth-secret',
            required: true,
            schema: { default: '[authentication secret]', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: PaymentLinkUriApiModelSchema },
        'application/xml': { schema: PaymentLinkUriApiModelSchema },
        'text/html': { schema: PaymentLinkUriApiModelSchema },
        'text/json': { schema: PaymentLinkUriApiModelSchema },
        'text/xml': { schema: PaymentLinkUriApiModelSchema },
      },
    },
  },
})

export const getApiProductAllRoute = createRoute({
  method: 'get',
  path: '/api/product/all',
  tags: ['Product'],
  summary: 'Return all products for the account',
  operationId: 'ProductApi_All',
  request: {
    query: z.object({
      'queryOptions.page': z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'queryOptions.page',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      'queryOptions.pageSize': z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'queryOptions.pageSize',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
    headers: z.object({
      'x-auth-key': z
        .string()
        .default('[authentication key]')
        .openapi({
          param: {
            description: '',
            in: 'header',
            name: 'x-auth-key',
            required: true,
            schema: { default: '[authentication key]', type: 'string' },
          },
        }),
      'x-auth-secret': z
        .string()
        .default('[authentication secret]')
        .openapi({
          param: {
            description: '',
            in: 'header',
            name: 'x-auth-secret',
            required: true,
            schema: { default: '[authentication secret]', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: ListResultProductDetailsApiModelSchema },
        'application/xml': { schema: ListResultProductDetailsApiModelSchema },
        'text/html': { schema: ListResultProductDetailsApiModelSchema },
        'text/json': { schema: ListResultProductDetailsApiModelSchema },
        'text/xml': { schema: ListResultProductDetailsApiModelSchema },
      },
    },
  },
})

export const postApiProductDeleteRoute = createRoute({
  method: 'post',
  path: '/api/product/delete',
  tags: ['Product'],
  summary: 'Delete an existing product',
  operationId: 'ProductApi_Delete',
  request: {
    headers: z.object({
      'x-auth-key': z
        .string()
        .default('[authentication key]')
        .openapi({
          param: {
            description: '',
            in: 'header',
            name: 'x-auth-key',
            required: true,
            schema: { default: '[authentication key]', type: 'string' },
          },
        }),
      'x-auth-secret': z
        .string()
        .default('[authentication secret]')
        .openapi({
          param: {
            description: '',
            in: 'header',
            name: 'x-auth-secret',
            required: true,
            schema: { default: '[authentication secret]', type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': { schema: ProductDeleteApiModelSchema },
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              Id: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional()
                .openapi({ description: 'Id of product to be deleted' }),
            })
            .openapi({ required: [] }),
        },
        'application/xml': { schema: ProductDeleteApiModelSchema },
        'text/html': { schema: ProductDeleteApiModelSchema },
        'text/json': { schema: ProductDeleteApiModelSchema },
        'text/xml': { schema: ProductDeleteApiModelSchema },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: z.int32() },
        'application/xml': { schema: z.int32() },
        'text/html': { schema: z.int32() },
        'text/json': { schema: z.int32() },
        'text/xml': { schema: z.int32() },
      },
    },
  },
})

export const getApiProductDetailsRoute = createRoute({
  method: 'get',
  path: '/api/product/details',
  tags: ['Product'],
  summary: 'Return product details',
  operationId: 'ProductApi_Details',
  request: {
    query: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            in: 'query',
            name: 'id',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
    headers: z.object({
      'x-auth-key': z
        .string()
        .default('[authentication key]')
        .openapi({
          param: {
            description: '',
            in: 'header',
            name: 'x-auth-key',
            required: true,
            schema: { default: '[authentication key]', type: 'string' },
          },
        }),
      'x-auth-secret': z
        .string()
        .default('[authentication secret]')
        .openapi({
          param: {
            description: '',
            in: 'header',
            name: 'x-auth-secret',
            required: true,
            schema: { default: '[authentication secret]', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: ProductFullDetailsApiModelSchema },
        'application/xml': { schema: ProductFullDetailsApiModelSchema },
        'text/html': { schema: ProductFullDetailsApiModelSchema },
        'text/json': { schema: ProductFullDetailsApiModelSchema },
        'text/xml': { schema: ProductFullDetailsApiModelSchema },
      },
    },
  },
})

export const postApiProductNewRoute = createRoute({
  method: 'post',
  path: '/api/product/new',
  tags: ['Product'],
  summary: 'Create a product',
  operationId: 'ProductApi_New',
  request: {
    headers: z.object({
      'x-auth-key': z
        .string()
        .default('[authentication key]')
        .openapi({
          param: {
            description: '',
            in: 'header',
            name: 'x-auth-key',
            required: true,
            schema: { default: '[authentication key]', type: 'string' },
          },
        }),
      'x-auth-secret': z
        .string()
        .default('[authentication secret]')
        .openapi({
          param: {
            description: '',
            in: 'header',
            name: 'x-auth-secret',
            required: true,
            schema: { default: '[authentication secret]', type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': { schema: ProductCreateApiModelSchema },
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              AfterPaymentDescription: z
                .string()
                .exactOptional()
                .openapi({ description: 'After payment description' }),
              Attachments: z
                .preprocess(
                  (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                  z.array(
                    z
                      .object({
                        Id: z
                          .preprocess(
                            (val) =>
                              typeof val === 'string' &&
                              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                ? Number(val)
                                : val,
                            z.int32(),
                          )
                          .exactOptional()
                          .openapi({ description: 'Product attachment id' }),
                        Link: z
                          .string()
                          .exactOptional()
                          .openapi({ description: 'Link to the file' }),
                        ObfuscatedFileName: z
                          .string()
                          .exactOptional()
                          .openapi({ description: 'Hashed file name to avoid url wildguessing' }),
                        OriginalFileName: z
                          .string()
                          .exactOptional()
                          .openapi({ description: 'Name of the file' }),
                        Size: z
                          .preprocess((val) => {
                            if (
                              typeof val !== 'string' ||
                              !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val)
                            )
                              return val
                            if (/^-?\d+$/.test(val)) return BigInt(val)
                            const num = Number(val)
                            return Number.isSafeInteger(num) ? BigInt(num) : val
                          }, z.int64())
                          .exactOptional()
                          .openapi({
                            type: 'integer',
                            format: 'int64',
                            description: 'File size number in bytes',
                          }),
                        Type: z
                          .enum(['External', 'Uploaded'])
                          .exactOptional()
                          .openapi({ description: 'Type of the link (Attached or external)' }),
                      })
                      .openapi({ required: [] }),
                  ),
                )
                .exactOptional()
                .openapi({ description: 'List of product attachments' }),
              ButtonCallToAction: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Default button call to action\r\nEx: Buy now, subscribe, ...',
                }),
              Coupons: z
                .preprocess(
                  (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                  z.array(
                    z
                      .object({
                        Code: z
                          .string()
                          .exactOptional()
                          .openapi({ description: 'Coupon to apply in order to get the discount' }),
                        DiscountAmount: z
                          .preprocess(
                            (val) =>
                              typeof val === 'string' &&
                              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                ? Number(val)
                                : val,
                            z.float64(),
                          )
                          .exactOptional()
                          .openapi({ description: 'Discount amount' }),
                        DiscountPercentage: z
                          .preprocess(
                            (val) =>
                              typeof val === 'string' &&
                              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                ? Number(val)
                                : val,
                            z.float64(),
                          )
                          .exactOptional()
                          .openapi({ description: 'Discount percentage' }),
                        Id: z
                          .preprocess(
                            (val) =>
                              typeof val === 'string' &&
                              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                ? Number(val)
                                : val,
                            z.int32(),
                          )
                          .exactOptional()
                          .openapi({ description: 'Product coupon id' }),
                        ValidUntil: z.iso
                          .datetime({ offset: true })
                          .exactOptional()
                          .openapi({ description: 'Coupon expiration date' }),
                      })
                      .openapi({ required: [] }),
                  ),
                )
                .exactOptional()
                .openapi({ description: 'List of product coupons' }),
              CurrencyId: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional()
                .openapi({ description: 'Foreign key Currency' }),
              Description: z
                .string()
                .exactOptional()
                .openapi({ description: 'Product description' }),
              Discounts: z
                .preprocess(
                  (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                  z.array(
                    z
                      .object({
                        DiscountAmount: z
                          .preprocess(
                            (val) =>
                              typeof val === 'string' &&
                              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                ? Number(val)
                                : val,
                            z.float64(),
                          )
                          .exactOptional()
                          .openapi({ description: 'Discount amount' }),
                        DiscountPercentage: z
                          .preprocess(
                            (val) =>
                              typeof val === 'string' &&
                              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                ? Number(val)
                                : val,
                            z.float64(),
                          )
                          .exactOptional()
                          .openapi({ description: 'Discount percentage' }),
                        Id: z
                          .preprocess(
                            (val) =>
                              typeof val === 'string' &&
                              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                ? Number(val)
                                : val,
                            z.int32(),
                          )
                          .exactOptional()
                          .openapi({ description: 'Product discount id' }),
                        Name: z.string().exactOptional().openapi({ description: 'Name' }),
                        ValidFrom: z.iso
                          .datetime({ offset: true })
                          .exactOptional()
                          .openapi({ description: 'Discount start date' }),
                        ValidTo: z.iso
                          .datetime({ offset: true })
                          .exactOptional()
                          .openapi({ description: 'Discount expiration date' }),
                      })
                      .openapi({ required: [] }),
                  ),
                )
                .exactOptional()
                .openapi({ description: 'List of product discounts' }),
              IsFeatured: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'Indicate that the product is set as featured' }),
              Items: z
                .preprocess(
                  (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                  z.array(
                    z
                      .object({
                        Cost: z
                          .preprocess(
                            (val) =>
                              typeof val === 'string' &&
                              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                ? Number(val)
                                : val,
                            z.float64(),
                          )
                          .exactOptional()
                          .openapi({ description: 'Work item cost' }),
                        Description: z
                          .string()
                          .exactOptional()
                          .openapi({ description: 'General description' }),
                        Id: z
                          .preprocess(
                            (val) =>
                              typeof val === 'string' &&
                              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                ? Number(val)
                                : val,
                            z.int32(),
                          )
                          .exactOptional()
                          .openapi({ description: 'Product item id' }),
                        MinimumQuantity: z
                          .preprocess(
                            (val) =>
                              typeof val === 'string' &&
                              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                ? Number(val)
                                : val,
                            z.float64(),
                          )
                          .exactOptional()
                          .openapi({
                            description: 'Minimum required quantity in order to buy a work item',
                          }),
                        ReferenceId: z
                          .string()
                          .exactOptional()
                          .openapi({ description: 'Product SKU' }),
                        SubTotalAmount: z
                          .preprocess(
                            (val) =>
                              typeof val === 'string' &&
                              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                ? Number(val)
                                : val,
                            z.float64(),
                          )
                          .exactOptional()
                          .openapi({ description: 'Subtotal amount of product' }),
                        TaxAmount: z
                          .preprocess(
                            (val) =>
                              typeof val === 'string' &&
                              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                ? Number(val)
                                : val,
                            z.float64(),
                          )
                          .exactOptional()
                          .openapi({ description: 'Tax amount' }),
                        TaxId: z
                          .preprocess(
                            (val) =>
                              typeof val === 'string' &&
                              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                ? Number(val)
                                : val,
                            z.int32(),
                          )
                          .exactOptional()
                          .openapi({ description: 'Foreign key Tax id' }),
                        TaxPercentage: z
                          .preprocess(
                            (val) =>
                              typeof val === 'string' &&
                              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                ? Number(val)
                                : val,
                            z.float64(),
                          )
                          .exactOptional()
                          .openapi({ description: 'Tax percentage' }),
                        TotalAmount: z
                          .preprocess(
                            (val) =>
                              typeof val === 'string' &&
                              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                ? Number(val)
                                : val,
                            z.float64(),
                          )
                          .exactOptional()
                          .openapi({ description: 'Total amount of product' }),
                        WorkTypeId: z
                          .preprocess(
                            (val) =>
                              typeof val === 'string' &&
                              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                ? Number(val)
                                : val,
                            z.int32(),
                          )
                          .exactOptional()
                          .openapi({ description: 'Foreign key work type id' }),
                      })
                      .openapi({ required: [] }),
                  ),
                )
                .exactOptional()
                .openapi({ description: 'List of product items' }),
              Name: z.string().exactOptional().openapi({ description: 'Product alias' }),
              PaymentGateways: z
                .preprocess(
                  (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                  z.array(ProductGatewayApiModelSchema),
                )
                .exactOptional()
                .openapi({ description: 'List of enabled payment gateways for this product' }),
              ShippingAmount: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.float64(),
                )
                .exactOptional()
                .openapi({ description: 'Cost for shipping the product' }),
              ShippingDescription: z
                .string()
                .exactOptional()
                .openapi({ description: 'Client instructions for shipping' }),
              Status: z
                .enum(['Active', 'NotAvailable', 'Inactive'])
                .exactOptional()
                .openapi({ description: 'Product availability status' }),
              WhatHappensNextDescription: z
                .string()
                .exactOptional()
                .openapi({ description: 'What happens next description' }),
            })
            .openapi({ required: [] }),
        },
        'application/xml': { schema: ProductCreateApiModelSchema },
        'text/html': { schema: ProductCreateApiModelSchema },
        'text/json': { schema: ProductCreateApiModelSchema },
        'text/xml': { schema: ProductCreateApiModelSchema },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: z.int32() },
        'application/xml': { schema: z.int32() },
        'text/html': { schema: z.int32() },
        'text/json': { schema: z.int32() },
        'text/xml': { schema: z.int32() },
      },
    },
  },
})

export const postApiProductUpdateRoute = createRoute({
  method: 'post',
  path: '/api/product/update',
  tags: ['Product'],
  summary: 'Update an existing product',
  operationId: 'ProductApi_Update',
  request: {
    headers: z.object({
      'x-auth-key': z
        .string()
        .default('[authentication key]')
        .openapi({
          param: {
            description: '',
            in: 'header',
            name: 'x-auth-key',
            required: true,
            schema: { default: '[authentication key]', type: 'string' },
          },
        }),
      'x-auth-secret': z
        .string()
        .default('[authentication secret]')
        .openapi({
          param: {
            description: '',
            in: 'header',
            name: 'x-auth-secret',
            required: true,
            schema: { default: '[authentication secret]', type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': { schema: ProductUpdateApiModelSchema },
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              AfterPaymentDescription: z
                .string()
                .exactOptional()
                .openapi({ description: 'After payment description' }),
              Attachments: z
                .preprocess(
                  (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                  z.array(
                    z
                      .object({
                        Id: z
                          .preprocess(
                            (val) =>
                              typeof val === 'string' &&
                              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                ? Number(val)
                                : val,
                            z.int32(),
                          )
                          .exactOptional()
                          .openapi({ description: 'Product attachment id' }),
                        Link: z
                          .string()
                          .exactOptional()
                          .openapi({ description: 'Link to the file' }),
                        ObfuscatedFileName: z
                          .string()
                          .exactOptional()
                          .openapi({ description: 'Hashed file name to avoid url wildguessing' }),
                        OriginalFileName: z
                          .string()
                          .exactOptional()
                          .openapi({ description: 'Name of the file' }),
                        Size: z
                          .preprocess((val) => {
                            if (
                              typeof val !== 'string' ||
                              !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val)
                            )
                              return val
                            if (/^-?\d+$/.test(val)) return BigInt(val)
                            const num = Number(val)
                            return Number.isSafeInteger(num) ? BigInt(num) : val
                          }, z.int64())
                          .exactOptional()
                          .openapi({
                            type: 'integer',
                            format: 'int64',
                            description: 'File size number in bytes',
                          }),
                        Type: z
                          .enum(['External', 'Uploaded'])
                          .exactOptional()
                          .openapi({ description: 'Type of the link (Attached or external)' }),
                      })
                      .openapi({ required: [] }),
                  ),
                )
                .exactOptional()
                .openapi({ description: 'List of product attachments' }),
              ButtonCallToAction: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Default button call to action\r\nEx: Buy now, subscribe, ...',
                }),
              Coupons: z
                .preprocess(
                  (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                  z.array(
                    z
                      .object({
                        Code: z
                          .string()
                          .exactOptional()
                          .openapi({ description: 'Coupon to apply in order to get the discount' }),
                        DiscountAmount: z
                          .preprocess(
                            (val) =>
                              typeof val === 'string' &&
                              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                ? Number(val)
                                : val,
                            z.float64(),
                          )
                          .exactOptional()
                          .openapi({ description: 'Discount amount' }),
                        DiscountPercentage: z
                          .preprocess(
                            (val) =>
                              typeof val === 'string' &&
                              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                ? Number(val)
                                : val,
                            z.float64(),
                          )
                          .exactOptional()
                          .openapi({ description: 'Discount percentage' }),
                        Id: z
                          .preprocess(
                            (val) =>
                              typeof val === 'string' &&
                              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                ? Number(val)
                                : val,
                            z.int32(),
                          )
                          .exactOptional()
                          .openapi({ description: 'Product coupon id' }),
                        ValidUntil: z.iso
                          .datetime({ offset: true })
                          .exactOptional()
                          .openapi({ description: 'Coupon expiration date' }),
                      })
                      .openapi({ required: [] }),
                  ),
                )
                .exactOptional()
                .openapi({ description: 'List of product coupons' }),
              CurrencyId: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional()
                .openapi({ description: 'Foreign key Currency' }),
              Description: z
                .string()
                .exactOptional()
                .openapi({ description: 'Product description' }),
              Discounts: z
                .preprocess(
                  (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                  z.array(
                    z
                      .object({
                        DiscountAmount: z
                          .preprocess(
                            (val) =>
                              typeof val === 'string' &&
                              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                ? Number(val)
                                : val,
                            z.float64(),
                          )
                          .exactOptional()
                          .openapi({ description: 'Discount amount' }),
                        DiscountPercentage: z
                          .preprocess(
                            (val) =>
                              typeof val === 'string' &&
                              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                ? Number(val)
                                : val,
                            z.float64(),
                          )
                          .exactOptional()
                          .openapi({ description: 'Discount percentage' }),
                        Id: z
                          .preprocess(
                            (val) =>
                              typeof val === 'string' &&
                              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                ? Number(val)
                                : val,
                            z.int32(),
                          )
                          .exactOptional()
                          .openapi({ description: 'Product discount id' }),
                        Name: z.string().exactOptional().openapi({ description: 'Name' }),
                        ValidFrom: z.iso
                          .datetime({ offset: true })
                          .exactOptional()
                          .openapi({ description: 'Discount start date' }),
                        ValidTo: z.iso
                          .datetime({ offset: true })
                          .exactOptional()
                          .openapi({ description: 'Discount expiration date' }),
                      })
                      .openapi({ required: [] }),
                  ),
                )
                .exactOptional()
                .openapi({ description: 'List of product discounts' }),
              Id: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional()
                .openapi({ description: 'Product id' }),
              IsFeatured: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'Indicate that the product is set as featured' }),
              Items: z
                .preprocess(
                  (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                  z.array(
                    z
                      .object({
                        Cost: z
                          .preprocess(
                            (val) =>
                              typeof val === 'string' &&
                              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                ? Number(val)
                                : val,
                            z.float64(),
                          )
                          .exactOptional()
                          .openapi({ description: 'Work item cost' }),
                        Description: z
                          .string()
                          .exactOptional()
                          .openapi({ description: 'General description' }),
                        Id: z
                          .preprocess(
                            (val) =>
                              typeof val === 'string' &&
                              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                ? Number(val)
                                : val,
                            z.int32(),
                          )
                          .exactOptional()
                          .openapi({ description: 'Product item id' }),
                        MinimumQuantity: z
                          .preprocess(
                            (val) =>
                              typeof val === 'string' &&
                              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                ? Number(val)
                                : val,
                            z.float64(),
                          )
                          .exactOptional()
                          .openapi({
                            description: 'Minimum required quantity in order to buy a work item',
                          }),
                        ReferenceId: z
                          .string()
                          .exactOptional()
                          .openapi({ description: 'Product SKU' }),
                        SubTotalAmount: z
                          .preprocess(
                            (val) =>
                              typeof val === 'string' &&
                              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                ? Number(val)
                                : val,
                            z.float64(),
                          )
                          .exactOptional()
                          .openapi({ description: 'Subtotal amount of product' }),
                        TaxAmount: z
                          .preprocess(
                            (val) =>
                              typeof val === 'string' &&
                              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                ? Number(val)
                                : val,
                            z.float64(),
                          )
                          .exactOptional()
                          .openapi({ description: 'Tax amount' }),
                        TaxId: z
                          .preprocess(
                            (val) =>
                              typeof val === 'string' &&
                              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                ? Number(val)
                                : val,
                            z.int32(),
                          )
                          .exactOptional()
                          .openapi({ description: 'Foreign key Tax id' }),
                        TaxPercentage: z
                          .preprocess(
                            (val) =>
                              typeof val === 'string' &&
                              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                ? Number(val)
                                : val,
                            z.float64(),
                          )
                          .exactOptional()
                          .openapi({ description: 'Tax percentage' }),
                        TotalAmount: z
                          .preprocess(
                            (val) =>
                              typeof val === 'string' &&
                              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                ? Number(val)
                                : val,
                            z.float64(),
                          )
                          .exactOptional()
                          .openapi({ description: 'Total amount of product' }),
                        WorkTypeId: z
                          .preprocess(
                            (val) =>
                              typeof val === 'string' &&
                              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                ? Number(val)
                                : val,
                            z.int32(),
                          )
                          .exactOptional()
                          .openapi({ description: 'Foreign key work type id' }),
                      })
                      .openapi({ required: [] }),
                  ),
                )
                .exactOptional()
                .openapi({ description: 'List of product items' }),
              Name: z.string().exactOptional().openapi({ description: 'Product alias' }),
              PaymentGateways: z
                .preprocess(
                  (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                  z.array(ProductGatewayApiModelSchema),
                )
                .exactOptional()
                .openapi({ description: 'List of enabled payment gateways for this product' }),
              ShippingAmount: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.float64(),
                )
                .exactOptional()
                .openapi({ description: 'Cost for shipping the product' }),
              ShippingDescription: z
                .string()
                .exactOptional()
                .openapi({ description: 'Client instructions for shipping' }),
              Status: z
                .enum(['Active', 'NotAvailable', 'Inactive'])
                .exactOptional()
                .openapi({ description: 'Product availability status' }),
              WhatHappensNextDescription: z
                .string()
                .exactOptional()
                .openapi({ description: 'What happens next description' }),
            })
            .openapi({ required: [] }),
        },
        'application/xml': { schema: ProductUpdateApiModelSchema },
        'text/html': { schema: ProductUpdateApiModelSchema },
        'text/json': { schema: ProductUpdateApiModelSchema },
        'text/xml': { schema: ProductUpdateApiModelSchema },
      },
      required: true,
    },
  },
  responses: { 204: { description: 'No Content' } },
})

export const getApiTaxAllRoute = createRoute({
  method: 'get',
  path: '/api/tax/all',
  tags: ['Tax'],
  summary: 'Return all taxes for the account',
  operationId: 'TaxApi_All',
  request: {
    headers: z.object({
      'x-auth-key': z
        .string()
        .default('[authentication key]')
        .openapi({
          param: {
            description: '',
            in: 'header',
            name: 'x-auth-key',
            required: true,
            schema: { default: '[authentication key]', type: 'string' },
          },
        }),
      'x-auth-secret': z
        .string()
        .default('[authentication secret]')
        .openapi({
          param: {
            description: '',
            in: 'header',
            name: 'x-auth-secret',
            required: true,
            schema: { default: '[authentication secret]', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: z.array(TaxDetailsApiModelSchema) },
        'application/xml': { schema: z.array(TaxDetailsApiModelSchema) },
        'text/html': { schema: z.array(TaxDetailsApiModelSchema) },
        'text/json': { schema: z.array(TaxDetailsApiModelSchema) },
        'text/xml': { schema: z.array(TaxDetailsApiModelSchema) },
      },
    },
  },
})

export const postApiTaxDeleteRoute = createRoute({
  method: 'post',
  path: '/api/tax/delete',
  tags: ['Tax'],
  summary: 'Delete an existing tax',
  operationId: 'TaxApi_Delete',
  request: {
    headers: z.object({
      'x-auth-key': z
        .string()
        .default('[authentication key]')
        .openapi({
          param: {
            description: '',
            in: 'header',
            name: 'x-auth-key',
            required: true,
            schema: { default: '[authentication key]', type: 'string' },
          },
        }),
      'x-auth-secret': z
        .string()
        .default('[authentication secret]')
        .openapi({
          param: {
            description: '',
            in: 'header',
            name: 'x-auth-secret',
            required: true,
            schema: { default: '[authentication secret]', type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': { schema: TaxDeleteApiModelSchema },
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              Id: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional()
                .openapi({ description: 'Id of tax to be deleted' }),
            })
            .openapi({ required: [] }),
        },
        'application/xml': { schema: TaxDeleteApiModelSchema },
        'text/html': { schema: TaxDeleteApiModelSchema },
        'text/json': { schema: TaxDeleteApiModelSchema },
        'text/xml': { schema: TaxDeleteApiModelSchema },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: z.int32() },
        'application/xml': { schema: z.int32() },
        'text/html': { schema: z.int32() },
        'text/json': { schema: z.int32() },
        'text/xml': { schema: z.int32() },
      },
    },
  },
})

export const postApiTaxNewRoute = createRoute({
  method: 'post',
  path: '/api/tax/new',
  tags: ['Tax'],
  summary: 'Create a tax',
  operationId: 'TaxApi_New',
  request: {
    headers: z.object({
      'x-auth-key': z
        .string()
        .default('[authentication key]')
        .openapi({
          param: {
            description: '',
            in: 'header',
            name: 'x-auth-key',
            required: true,
            schema: { default: '[authentication key]', type: 'string' },
          },
        }),
      'x-auth-secret': z
        .string()
        .default('[authentication secret]')
        .openapi({
          param: {
            description: '',
            in: 'header',
            name: 'x-auth-secret',
            required: true,
            schema: { default: '[authentication secret]', type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': { schema: TaxCreateApiModelSchema },
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              Name: z.string().exactOptional().openapi({ description: 'Name of the task' }),
              Percentage: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.float64(),
                )
                .exactOptional()
                .openapi({ description: 'Task percentage. Ex: 18%' }),
            })
            .openapi({ required: [] }),
        },
        'application/xml': { schema: TaxCreateApiModelSchema },
        'text/html': { schema: TaxCreateApiModelSchema },
        'text/json': { schema: TaxCreateApiModelSchema },
        'text/xml': { schema: TaxCreateApiModelSchema },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: z.int32() },
        'application/xml': { schema: z.int32() },
        'text/html': { schema: z.int32() },
        'text/json': { schema: z.int32() },
        'text/xml': { schema: z.int32() },
      },
    },
  },
})

export const postApiTaxUpdateRoute = createRoute({
  method: 'post',
  path: '/api/tax/update',
  tags: ['Tax'],
  summary: 'Update an existing tax',
  operationId: 'TaxApi_Update',
  request: {
    headers: z.object({
      'x-auth-key': z
        .string()
        .default('[authentication key]')
        .openapi({
          param: {
            description: '',
            in: 'header',
            name: 'x-auth-key',
            required: true,
            schema: { default: '[authentication key]', type: 'string' },
          },
        }),
      'x-auth-secret': z
        .string()
        .default('[authentication secret]')
        .openapi({
          param: {
            description: '',
            in: 'header',
            name: 'x-auth-secret',
            required: true,
            schema: { default: '[authentication secret]', type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': { schema: TaxUpdateApiModelSchema },
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              Id: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional()
                .openapi({ description: 'Entity id' }),
              Name: z.string().exactOptional().openapi({ description: 'Name of the task' }),
              Percentage: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.float64(),
                )
                .exactOptional()
                .openapi({ description: 'Task percentage. Ex: 18%' }),
            })
            .openapi({ required: [] }),
        },
        'application/xml': { schema: TaxUpdateApiModelSchema },
        'text/html': { schema: TaxUpdateApiModelSchema },
        'text/json': { schema: TaxUpdateApiModelSchema },
        'text/xml': { schema: TaxUpdateApiModelSchema },
      },
      required: true,
    },
  },
  responses: { 204: { description: 'No Content' } },
})

export const getApiWorktypeAllRoute = createRoute({
  method: 'get',
  path: '/api/worktype/all',
  tags: ['WorkType'],
  summary: 'Return all work types for the account',
  operationId: 'WorkTypeApi_All',
  request: {
    headers: z.object({
      'x-auth-key': z
        .string()
        .default('[authentication key]')
        .openapi({
          param: {
            description: '',
            in: 'header',
            name: 'x-auth-key',
            required: true,
            schema: { default: '[authentication key]', type: 'string' },
          },
        }),
      'x-auth-secret': z
        .string()
        .default('[authentication secret]')
        .openapi({
          param: {
            description: '',
            in: 'header',
            name: 'x-auth-secret',
            required: true,
            schema: { default: '[authentication secret]', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: z.array(WorkTypeDetailsApiModelSchema) },
        'application/xml': { schema: z.array(WorkTypeDetailsApiModelSchema) },
        'text/html': { schema: z.array(WorkTypeDetailsApiModelSchema) },
        'text/json': { schema: z.array(WorkTypeDetailsApiModelSchema) },
        'text/xml': { schema: z.array(WorkTypeDetailsApiModelSchema) },
      },
    },
  },
})

export const postApiWorktypeDeleteRoute = createRoute({
  method: 'post',
  path: '/api/worktype/delete',
  tags: ['WorkType'],
  summary: 'Delete an existing work type',
  operationId: 'WorkTypeApi_Delete',
  request: {
    headers: z.object({
      'x-auth-key': z
        .string()
        .default('[authentication key]')
        .openapi({
          param: {
            description: '',
            in: 'header',
            name: 'x-auth-key',
            required: true,
            schema: { default: '[authentication key]', type: 'string' },
          },
        }),
      'x-auth-secret': z
        .string()
        .default('[authentication secret]')
        .openapi({
          param: {
            description: '',
            in: 'header',
            name: 'x-auth-secret',
            required: true,
            schema: { default: '[authentication secret]', type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': { schema: WorkTypeDeleteApiModelSchema },
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              Id: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional()
                .openapi({ description: 'Id of work type to be deleted' }),
            })
            .openapi({ required: [] }),
        },
        'application/xml': { schema: WorkTypeDeleteApiModelSchema },
        'text/html': { schema: WorkTypeDeleteApiModelSchema },
        'text/json': { schema: WorkTypeDeleteApiModelSchema },
        'text/xml': { schema: WorkTypeDeleteApiModelSchema },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: z.int32() },
        'application/xml': { schema: z.int32() },
        'text/html': { schema: z.int32() },
        'text/json': { schema: z.int32() },
        'text/xml': { schema: z.int32() },
      },
    },
  },
})

export const getApiWorktypeDetailsRoute = createRoute({
  method: 'get',
  path: '/api/worktype/details',
  tags: ['WorkType'],
  summary: 'Return work type details',
  operationId: 'WorkTypeApi_Details',
  request: {
    query: z.object({
      workTypeId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            in: 'query',
            name: 'workTypeId',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
    headers: z.object({
      'x-auth-key': z
        .string()
        .default('[authentication key]')
        .openapi({
          param: {
            description: '',
            in: 'header',
            name: 'x-auth-key',
            required: true,
            schema: { default: '[authentication key]', type: 'string' },
          },
        }),
      'x-auth-secret': z
        .string()
        .default('[authentication secret]')
        .openapi({
          param: {
            description: '',
            in: 'header',
            name: 'x-auth-secret',
            required: true,
            schema: { default: '[authentication secret]', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: WorkTypeDetailsApiModelSchema },
        'application/xml': { schema: WorkTypeDetailsApiModelSchema },
        'text/html': { schema: WorkTypeDetailsApiModelSchema },
        'text/json': { schema: WorkTypeDetailsApiModelSchema },
        'text/xml': { schema: WorkTypeDetailsApiModelSchema },
      },
    },
  },
})

export const postApiWorktypeNewRoute = createRoute({
  method: 'post',
  path: '/api/worktype/new',
  tags: ['WorkType'],
  summary: 'Create a work type',
  operationId: 'WorkTypeApi_New',
  request: {
    headers: z.object({
      'x-auth-key': z
        .string()
        .default('[authentication key]')
        .openapi({
          param: {
            description: '',
            in: 'header',
            name: 'x-auth-key',
            required: true,
            schema: { default: '[authentication key]', type: 'string' },
          },
        }),
      'x-auth-secret': z
        .string()
        .default('[authentication secret]')
        .openapi({
          param: {
            description: '',
            in: 'header',
            name: 'x-auth-secret',
            required: true,
            schema: { default: '[authentication secret]', type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': { schema: WorkTypeCreateApiModelSchema },
        'application/x-www-form-urlencoded': { schema: WorkTypeCreateApiModelSchema },
        'application/xml': { schema: WorkTypeCreateApiModelSchema },
        'text/html': { schema: WorkTypeCreateApiModelSchema },
        'text/json': { schema: WorkTypeCreateApiModelSchema },
        'text/xml': { schema: WorkTypeCreateApiModelSchema },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: z.int32() },
        'application/xml': { schema: z.int32() },
        'text/html': { schema: z.int32() },
        'text/json': { schema: z.int32() },
        'text/xml': { schema: z.int32() },
      },
    },
  },
})

export const getApiWorktypeSearchRoute = createRoute({
  method: 'get',
  path: '/api/worktype/search',
  tags: ['WorkType'],
  summary: 'Return all work types for the account that match the query param',
  operationId: 'WorkTypeApi_Search',
  request: {
    query: z.object({
      'queryOptions.query': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'queryOptions.query',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'queryOptions.orderBy': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'queryOptions.orderBy',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'queryOptions.order': z
        .enum(['None', 'Asc', 'Desc'])
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'queryOptions.order',
            required: false,
            schema: { enum: ['None', 'Asc', 'Desc'], type: 'string' },
          },
        }),
      'queryOptions.page': z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'queryOptions.page',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      'queryOptions.pageSize': z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'queryOptions.pageSize',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
    headers: z.object({
      'x-auth-key': z
        .string()
        .default('[authentication key]')
        .openapi({
          param: {
            description: '',
            in: 'header',
            name: 'x-auth-key',
            required: true,
            schema: { default: '[authentication key]', type: 'string' },
          },
        }),
      'x-auth-secret': z
        .string()
        .default('[authentication secret]')
        .openapi({
          param: {
            description: '',
            in: 'header',
            name: 'x-auth-secret',
            required: true,
            schema: { default: '[authentication secret]', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: z.array(WorkTypeDetailsApiModelSchema) },
        'application/xml': { schema: z.array(WorkTypeDetailsApiModelSchema) },
        'text/html': { schema: z.array(WorkTypeDetailsApiModelSchema) },
        'text/json': { schema: z.array(WorkTypeDetailsApiModelSchema) },
        'text/xml': { schema: z.array(WorkTypeDetailsApiModelSchema) },
      },
    },
  },
})

export const postApiWorktypeUpdateRoute = createRoute({
  method: 'post',
  path: '/api/worktype/update',
  tags: ['WorkType'],
  summary: 'Update an existing work type',
  operationId: 'WorkTypeApi_Update',
  request: {
    headers: z.object({
      'x-auth-key': z
        .string()
        .default('[authentication key]')
        .openapi({
          param: {
            description: '',
            in: 'header',
            name: 'x-auth-key',
            required: true,
            schema: { default: '[authentication key]', type: 'string' },
          },
        }),
      'x-auth-secret': z
        .string()
        .default('[authentication secret]')
        .openapi({
          param: {
            description: '',
            in: 'header',
            name: 'x-auth-secret',
            required: true,
            schema: { default: '[authentication secret]', type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': { schema: WorkTypeUpdateApiModelSchema },
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              Id: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional()
                .openapi({ description: 'Entity id' }),
              Title: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Indicates the title of of the work type (Logo design, development...)',
                }),
            })
            .openapi({ required: [] }),
        },
        'application/xml': { schema: WorkTypeUpdateApiModelSchema },
        'text/html': { schema: WorkTypeUpdateApiModelSchema },
        'text/json': { schema: WorkTypeUpdateApiModelSchema },
        'text/xml': { schema: WorkTypeUpdateApiModelSchema },
      },
      required: true,
    },
  },
  responses: { 204: { description: 'No Content' } },
})
