type AdditionalClientEmailApiModel = { Email?: string | undefined }
type ClientDetailsApiModel = {
  AdditionalEmails?: AdditionalClientEmailApiModel[] | undefined
  Address?: string | undefined
  ClientCountryId?: number | undefined
  ClientCurrencyId?: number | undefined
  CompanyRegistrationNumber?: string | undefined
  CreatedOn?: string | undefined
  DefaultDueDateInDays?: number | undefined
  Email?: string | undefined
  Id?: number | undefined
  Name?: string | undefined
  PhoneNumber?: string | undefined
  UiLanguageId?: number | undefined
  Vat?: string | undefined
}
type ClientDeleteApiModel = { Id?: number | undefined }
type ClientCreateApiModel = {
  AdditionalEmails?: AdditionalClientEmailApiModel[] | undefined
  Address?: string | undefined
  ClientCountryId?: number | undefined
  ClientCurrencyId?: number | undefined
  CompanyRegistrationNumber?: string | undefined
  DefaultDueDateInDays?: number | undefined
  Email?: string | undefined
  Name?: string | undefined
  PhoneNumber?: string | undefined
  UiLanguageId?: number | undefined
  Vat?: string | undefined
}
type ClientUpdateApiModel = {
  AdditionalEmails?: AdditionalClientEmailApiModel[] | undefined
  Address?: string | undefined
  ClientCountryId?: number | undefined
  ClientCurrencyId?: number | undefined
  CompanyRegistrationNumber?: string | undefined
  DefaultDueDateInDays?: number | undefined
  Email?: string | undefined
  Id?: number | undefined
  Name?: string | undefined
  PhoneNumber?: string | undefined
  UiLanguageId?: number | undefined
  Vat?: string | undefined
}
type IErrorInfo = {
  Code?: string | undefined
  FaultMessage?: string | undefined
  Group?: string | undefined
  UserVisibleMessage?: string | undefined
}
type CurrencyDetailsApiModel = {
  Code?: string | undefined
  Id?: number | undefined
  Name?: string | undefined
  Symbol?: string | undefined
  Value?: string | undefined
}
type EstimationDetailsApiModel = {
  AccessToken?: string | undefined
  Client?: ClientDetailsApiModel | undefined
  ClonedFromId?: number | undefined
  Currency?: CurrencyDetailsApiModel | undefined
  DiscountAmount?: number | undefined
  ExpiresOn?: string | undefined
  Id?: number | undefined
  IssuedOn?: string | undefined
  Notes?: string | undefined
  Number?: string | undefined
  PoNumber?: string | undefined
  Status?: 'Draft' | 'Accepted' | 'Rejected' | undefined
  SubTotalAmount?: number | undefined
  TaxAmount?: number | undefined
  Terms?: string | undefined
  TotalAmount?: number | undefined
}
type ListResultEstimationDetailsApiModel = {
  Count?: number | undefined
  ErrorMessages?: IErrorInfo[] | undefined
  IsFaulted?: boolean | undefined
  Result?: EstimationDetailsApiModel[] | undefined
  TotalCount?: number | undefined
}
type EstimationChangeStatusApiModel = {
  Id?: number | undefined
  Status?: 'Draft' | 'Accepted' | 'Rejected' | undefined
}
type InvoiceActivityApiModel = {
  Id?: number | undefined
  InvoiceNumber?: string | undefined
  Link?: string | undefined
  Message?: string | undefined
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
    | undefined
}
type InvoiceAttachmentApiModel = {
  Id?: number | undefined
  Link?: string | undefined
  ObfuscatedFileName?: string | undefined
  OriginalFileName?: string | undefined
  Size?: bigint | undefined
  Type?: 'External' | 'Uploaded' | undefined
}
type InvoiceItemApiModel = {
  Cost?: number | undefined
  Description?: string | undefined
  DiscountAmount?: number | undefined
  DiscountPercentage?: number | undefined
  Id?: number | undefined
  Quantity?: number | undefined
  SubTotalAmount?: number | undefined
  TaxAmount?: number | undefined
  TaxId?: number | undefined
  TaxPercentage?: number | undefined
  TotalAmount?: number | undefined
  WorkTypeId?: number | undefined
}
type InvoiceGatewayApiModel = { Name?: string | undefined }
type InvoicePaymentApiModel = {
  Amount?: number | undefined
  Id?: number | undefined
  IsAutomatic?: boolean | undefined
  Note?: string | undefined
  PaidOn?: string | undefined
  ReferenceId?: string | undefined
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
    | undefined
}
type InvoiceRecurringApiModel = {
  DayOfMonth?: number | undefined
  DayOfWeek?:
    | 'Sunday'
    | 'Monday'
    | 'Tuesday'
    | 'Wednesday'
    | 'Thursday'
    | 'Friday'
    | 'Saturday'
    | undefined
  DueDateInDays?: number | undefined
  EndOfRecurrance?: string | undefined
  Month?: number | undefined
  RecurrancePattern?: 'Daily' | 'Weekly' | 'Monthly' | 'Yearly' | undefined
  RecurranceValue?: number | undefined
  StartOfRecurrance?: string | undefined
  Status?: 'Pending' | 'Active' | 'Cancelled' | 'Finished' | undefined
  Title?: string | undefined
}
type InvoiceFullDetailsApiModel = {
  AccessToken?: string | undefined
  Activities?: InvoiceActivityApiModel[] | undefined
  Attachments?: InvoiceAttachmentApiModel[] | undefined
  Client?: ClientDetailsApiModel | undefined
  ClonedFromId?: number | undefined
  Currency?: CurrencyDetailsApiModel | undefined
  DiscountAmount?: number | undefined
  Duedate?: string | undefined
  EnablePartialPayments?: boolean | undefined
  Id?: number | undefined
  InvoiceCategoryId?: number | undefined
  IssuedOn?: string | undefined
  Items?: InvoiceItemApiModel[] | undefined
  Notes?: string | undefined
  Number?: string | undefined
  PaymentGateways?: InvoiceGatewayApiModel[] | undefined
  Payments?: InvoicePaymentApiModel[] | undefined
  PoNumber?: string | undefined
  RecurringProfile?: InvoiceRecurringApiModel | undefined
  RecurringProfileId?: number | undefined
  ShouldSendReminders?: boolean | undefined
  Status?: 'Draft' | 'Paid' | 'Unpaid' | 'Overdue' | 'Void' | undefined
  SubTotalAmount?: number | undefined
  TaxAmount?: number | undefined
  Terms?: string | undefined
  TotalAmount?: number | undefined
}
type EstimationDeleteApiModel = { Id?: number | undefined }
type EstimationActivityApiModel = {
  EstimationNumber?: string | undefined
  Id?: number | undefined
  Link?: string | undefined
  Message?: string | undefined
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
    | undefined
}
type EstimationAttachmentApiModel = {
  Id?: number | undefined
  Link?: string | undefined
  ObfuscatedFileName?: string | undefined
  OriginalFileName?: string | undefined
  Size?: bigint | undefined
  Type?: 'External' | 'Uploaded' | undefined
}
type EstimationItemApiModel = {
  Cost?: number | undefined
  Description?: string | undefined
  DiscountAmount?: number | undefined
  DiscountPercentage?: number | undefined
  Id?: number | undefined
  Quantity?: number | undefined
  SubTotalAmount?: number | undefined
  TaxAmount?: number | undefined
  TaxId?: number | undefined
  TaxPercentage?: number | undefined
  TotalAmount?: number | undefined
  WorkTypeId?: number | undefined
}
type EstimationGatewayApiModel = { Name?: string | undefined }
type EstimationFullDetailsApiModel = {
  AccessToken?: string | undefined
  Activities?: EstimationActivityApiModel[] | undefined
  Attachments?: EstimationAttachmentApiModel[] | undefined
  Client?: ClientDetailsApiModel | undefined
  ClonedFromId?: number | undefined
  Currency?: CurrencyDetailsApiModel | undefined
  DiscountAmount?: number | undefined
  ExpiresOn?: string | undefined
  Id?: number | undefined
  IssuedOn?: string | undefined
  Items?: EstimationItemApiModel[] | undefined
  Notes?: string | undefined
  Number?: string | undefined
  PaymentGateways?: EstimationGatewayApiModel[] | undefined
  PoNumber?: string | undefined
  Status?: 'Draft' | 'Accepted' | 'Rejected' | undefined
  SubTotalAmount?: number | undefined
  TaxAmount?: number | undefined
  Terms?: string | undefined
  TotalAmount?: number | undefined
}
type EstimationCreateAttachmentApiModel = {
  Link?: string | undefined
  ObfuscatedFileName?: string | undefined
  OriginalFileName?: string | undefined
  Size?: bigint | undefined
  Type?: 'External' | 'Uploaded' | undefined
}
type EstimationCreateItemApiModel = {
  Cost?: number | undefined
  Description?: string | undefined
  DiscountPercentage?: number | undefined
  Quantity?: number | undefined
  TaxId?: number | undefined
  TaxPercentage?: number | undefined
  WorkTypeId?: number | undefined
}
type EstimationCreateApiModel = {
  Attachments?: EstimationCreateAttachmentApiModel[] | undefined
  ClientId?: number | undefined
  ClonedFromId?: number | undefined
  CurrencyId?: number | undefined
  ExpiresOn?: string | undefined
  IssuedOn?: string | undefined
  Items?: EstimationCreateItemApiModel[] | undefined
  Notes?: string | undefined
  Number?: string | undefined
  PaymentGateways?: EstimationGatewayApiModel[] | undefined
  PoNumber?: string | undefined
  Status?: 'Draft' | 'Accepted' | 'Rejected' | undefined
  Terms?: string | undefined
}
type SendEstimationToClientApiModel = {
  AttachPdf?: boolean | undefined
  EstimationId?: number | undefined
  Id?: number | undefined
  Message?: string | undefined
  SendToSelf?: boolean | undefined
  Subject?: string | undefined
}
type EstimationUpdateAttachmentApiModel = {
  Id?: number | undefined
  Link?: string | undefined
  ObfuscatedFileName?: string | undefined
  OriginalFileName?: string | undefined
  Size?: bigint | undefined
  Type?: 'External' | 'Uploaded' | undefined
}
type EstimationUpdateItemApiModel = {
  Cost?: number | undefined
  Description?: string | undefined
  DiscountPercentage?: number | undefined
  Id?: number | undefined
  Quantity?: number | undefined
  TaxId?: number | undefined
  TaxPercentage?: number | undefined
  WorkTypeId?: number | undefined
}
type EstimationUpdateApiModel = {
  Attachments?: EstimationUpdateAttachmentApiModel[] | undefined
  ClientId?: number | undefined
  ClonedFromId?: number | undefined
  CurrencyId?: number | undefined
  ExpiresOn?: string | undefined
  Id?: number | undefined
  IssuedOn?: string | undefined
  Items?: EstimationUpdateItemApiModel[] | undefined
  Notes?: string | undefined
  Number?: string | undefined
  PaymentGateways?: EstimationGatewayApiModel[] | undefined
  PoNumber?: string | undefined
  Status?: 'Draft' | 'Accepted' | 'Rejected' | undefined
  Terms?: string | undefined
}
type EstimationUriApiModel = { Link?: string | undefined }
type CountryDetailsApiModel = {
  Id?: number | undefined
  Name?: string | undefined
  Value?: string | undefined
}
type UILanguageDetailsApiModel = {
  Id?: number | undefined
  Name?: string | undefined
  UiCulture?: string | undefined
}
type InvoiceDetailsApiModel = {
  AccessToken?: string | undefined
  Client?: ClientDetailsApiModel | undefined
  ClonedFromId?: number | undefined
  Currency?: CurrencyDetailsApiModel | undefined
  DiscountAmount?: number | undefined
  Duedate?: string | undefined
  EnablePartialPayments?: boolean | undefined
  Id?: number | undefined
  InvoiceCategoryId?: number | undefined
  IssuedOn?: string | undefined
  Notes?: string | undefined
  Number?: string | undefined
  PoNumber?: string | undefined
  RecurringProfile?: InvoiceRecurringApiModel | undefined
  RecurringProfileId?: number | undefined
  ShouldSendReminders?: boolean | undefined
  Status?: 'Draft' | 'Paid' | 'Unpaid' | 'Overdue' | 'Void' | undefined
  SubTotalAmount?: number | undefined
  TaxAmount?: number | undefined
  Terms?: string | undefined
  TotalAmount?: number | undefined
}
type ListResultInvoiceDetailsApiModel = {
  Count?: number | undefined
  ErrorMessages?: IErrorInfo[] | undefined
  IsFaulted?: boolean | undefined
  Result?: InvoiceDetailsApiModel[] | undefined
  TotalCount?: number | undefined
}
type InvoiceCategoryApiModel = { Id?: number | undefined; Name?: string | undefined }
type ListResultInvoiceCategoryApiModel = {
  Count?: number | undefined
  ErrorMessages?: IErrorInfo[] | undefined
  IsFaulted?: boolean | undefined
  Result?: InvoiceCategoryApiModel[] | undefined
  TotalCount?: number | undefined
}
type ChangeStatusApiModel = {
  Id?: number | undefined
  Status?: 'Draft' | 'Paid' | 'Unpaid' | 'Overdue' | 'Void' | undefined
}
type InvoiceDeleteApiModel = { Id?: number | undefined }
type InvoiceCategoryDeleteApiModel = { Id?: number | undefined }
type InvoiceCreateAttachmentApiModel = {
  Link?: string | undefined
  ObfuscatedFileName?: string | undefined
  OriginalFileName?: string | undefined
  Size?: bigint | undefined
  Type?: 'External' | 'Uploaded' | undefined
}
type InvoiceCreateItemApiModel = {
  Cost?: number | undefined
  Description?: string | undefined
  DiscountPercentage?: number | undefined
  Quantity?: number | undefined
  TaxId?: number | undefined
  TaxPercentage?: number | undefined
  WorkTypeId?: number | undefined
}
type InvoiceCreateApiModel = {
  Attachments?: InvoiceCreateAttachmentApiModel[] | undefined
  ClientId?: number | undefined
  ClonedFromId?: number | undefined
  CurrencyId?: number | undefined
  Duedate?: string | undefined
  InvoiceCategoryId?: number | undefined
  IssuedOn?: string | undefined
  Items?: InvoiceCreateItemApiModel[] | undefined
  Notes?: string | undefined
  Number?: string | undefined
  PaymentGateways?: InvoiceGatewayApiModel[] | undefined
  PoNumber?: string | undefined
  RecurringProfile?: InvoiceRecurringApiModel | undefined
  RecurringProfileId?: number | undefined
  ShouldSendReminders?: boolean | undefined
  Status?: 'Draft' | 'Paid' | 'Unpaid' | 'Overdue' | 'Void' | undefined
  Terms?: string | undefined
}
type InvoiceCategoryCreateApiModel = { Name?: string | undefined }
type InvoiceUriApiModel = { Link?: string | undefined }
type SendInvoiceToAccountantApiModel = { Id?: number | undefined }
type SendInvoiceToClientApiModel = {
  AttachPdf?: boolean | undefined
  Id?: number | undefined
  InvoiceId?: number | undefined
  Message?: string | undefined
  SendToSelf?: boolean | undefined
  Subject?: string | undefined
}
type InvoiceUpdateAttachmentApiModel = {
  Id?: number | undefined
  Link?: string | undefined
  ObfuscatedFileName?: string | undefined
  OriginalFileName?: string | undefined
  Size?: bigint | undefined
  Type?: 'External' | 'Uploaded' | undefined
}
type InvoiceUpdateItemApiModel = {
  Cost?: number | undefined
  Description?: string | undefined
  DiscountPercentage?: number | undefined
  Id?: number | undefined
  Quantity?: number | undefined
  TaxId?: number | undefined
  TaxPercentage?: number | undefined
  WorkTypeId?: number | undefined
}
type InvoiceUpdateApiModel = {
  Attachments?: InvoiceUpdateAttachmentApiModel[] | undefined
  ClientId?: number | undefined
  ClonedFromId?: number | undefined
  CurrencyId?: number | undefined
  Duedate?: string | undefined
  Id?: number | undefined
  InvoiceCategoryId?: number | undefined
  IssuedOn?: string | undefined
  Items?: InvoiceUpdateItemApiModel[] | undefined
  Notes?: string | undefined
  Number?: string | undefined
  PaymentGateways?: InvoiceGatewayApiModel[] | undefined
  PoNumber?: string | undefined
  RecurringProfile?: InvoiceRecurringApiModel | undefined
  RecurringProfileId?: number | undefined
  ShouldSendReminders?: boolean | undefined
  Status?: 'Draft' | 'Paid' | 'Unpaid' | 'Overdue' | 'Void' | undefined
  Terms?: string | undefined
}
type InvoiceCategoryUpdateApiModel = { Id?: number | undefined; Name?: string | undefined }
type OrderBillingDetailsApiModel = {
  Address?: string | undefined
  CountryId?: number | undefined
  Email?: string | undefined
  Name?: string | undefined
  PhoneNumber?: string | undefined
}
type OrderShippingDetailsApiModel = {
  Address?: string | undefined
  CountryId?: number | undefined
  Email?: string | undefined
  Name?: string | undefined
  PhoneNumber?: string | undefined
}
type OrderDetailsApiModel = {
  AccessToken?: string | undefined
  AfterPaymentDescription?: string | undefined
  CouponCode?: string | undefined
  Currency?: CurrencyDetailsApiModel | undefined
  CurrencyId?: number | undefined
  Description?: string | undefined
  DiscountAmount?: number | undefined
  Id?: number | undefined
  Name?: string | undefined
  Note?: string | undefined
  OrderBillingDetails?: OrderBillingDetailsApiModel | undefined
  OrderShippingDetails?: OrderShippingDetailsApiModel | undefined
  ProductId?: number | undefined
  Referral?: string | undefined
  ShippingAmount?: number | undefined
  ShippingDescription?: string | undefined
  Status?:
    | 'PendingPayment'
    | 'Processing'
    | 'Shipped'
    | 'Completed'
    | 'OnHold'
    | 'Cancelled'
    | 'Refunded'
    | 'Failed'
    | undefined
  SubTotalAmount?: number | undefined
  TaxAmount?: number | undefined
  TotalAmount?: number | undefined
  TotalWithShipping?: number | undefined
  WhatHappensNextDescription?: string | undefined
}
type ListResultOrderDetailsApiModel = {
  Count?: number | undefined
  ErrorMessages?: IErrorInfo[] | undefined
  IsFaulted?: boolean | undefined
  Result?: OrderDetailsApiModel[] | undefined
  TotalCount?: number | undefined
}
type ChangeOrderStatusApiModel = {
  Id?: number | undefined
  Reason?: string | undefined
  Status?:
    | 'PendingPayment'
    | 'Processing'
    | 'Shipped'
    | 'Completed'
    | 'OnHold'
    | 'Cancelled'
    | 'Refunded'
    | 'Failed'
    | undefined
}
type OrderDeleteApiModel = { Id?: number | undefined }
type OrderAttachmentApiModel = {
  Link?: string | undefined
  ObfuscatedFileName?: string | undefined
  OriginalFileName?: string | undefined
  Size?: bigint | undefined
  Type?: 'External' | 'Uploaded' | undefined
}
type OrderItemApiModel = {
  Cost?: number | undefined
  Description?: string | undefined
  ProductItemId?: number | undefined
  Quantity?: number | undefined
  ReferenceId?: string | undefined
  SubTotalAmount?: number | undefined
  TaxAmount?: number | undefined
  TaxId?: number | undefined
  TaxPercentage?: number | undefined
  TotalAmount?: number | undefined
  WorkTypeId?: number | undefined
}
type OrderFullDetailsApiModel = {
  AccessToken?: string | undefined
  AfterPaymentDescription?: string | undefined
  Attachments?: OrderAttachmentApiModel[] | undefined
  CouponCode?: string | undefined
  Currency?: CurrencyDetailsApiModel | undefined
  CurrencyId?: number | undefined
  Description?: string | undefined
  DiscountAmount?: number | undefined
  Id?: number | undefined
  Items?: OrderItemApiModel[] | undefined
  Name?: string | undefined
  Note?: string | undefined
  OrderBillingDetails?: OrderBillingDetailsApiModel | undefined
  OrderShippingDetails?: OrderShippingDetailsApiModel | undefined
  ProductId?: number | undefined
  Referral?: string | undefined
  ShippingAmount?: number | undefined
  ShippingDescription?: string | undefined
  Status?:
    | 'PendingPayment'
    | 'Processing'
    | 'Shipped'
    | 'Completed'
    | 'OnHold'
    | 'Cancelled'
    | 'Refunded'
    | 'Failed'
    | undefined
  SubTotalAmount?: number | undefined
  TaxAmount?: number | undefined
  TotalAmount?: number | undefined
  TotalWithShipping?: number | undefined
  WhatHappensNextDescription?: string | undefined
}
type OrderCreateApiModel = {
  AfterPaymentDescription?: string | undefined
  Attachments?: OrderAttachmentApiModel[] | undefined
  CouponCode?: string | undefined
  CurrencyId?: number | undefined
  Description?: string | undefined
  DiscountAmount?: number | undefined
  Items?: OrderItemApiModel[] | undefined
  Name?: string | undefined
  Note?: string | undefined
  OrderBillingDetails?: OrderBillingDetailsApiModel | undefined
  OrderShippingDetails?: OrderShippingDetailsApiModel | undefined
  ProductId?: number | undefined
  Referral?: string | undefined
  ShippingAmount?: number | undefined
  ShippingDescription?: string | undefined
  Status?:
    | 'PendingPayment'
    | 'Processing'
    | 'Shipped'
    | 'Completed'
    | 'OnHold'
    | 'Cancelled'
    | 'Refunded'
    | 'Failed'
    | undefined
  SubTotalAmount?: number | undefined
  TaxAmount?: number | undefined
  TotalAmount?: number | undefined
  WhatHappensNextDescription?: string | undefined
}
type CurrencyApiModel = { Name?: string | undefined; Value?: string | undefined }
type PaymentGatewayDetailsApiModel = {
  Name?: string | undefined
  SupportedCurrencies?: CurrencyApiModel[] | undefined
}
type Client = {
  Address?: string | undefined
  ClientCountryId?: number | undefined
  ClientCurrencyId?: number | undefined
  CompanyRegistrationNumber?: string | undefined
  DefaultDueDateInDays?: number | undefined
  Email?: string | undefined
  Id?: number | undefined
  Name?: string | undefined
  PhoneNumber?: string | undefined
  UiLanguageId?: number | undefined
  UserId?: number | undefined
  Vat?: string | undefined
}
type Currency = {
  Code?: string | undefined
  Id?: number | undefined
  Name?: string | undefined
  Symbol?: string | undefined
  Value?: string | undefined
}
type Activity = {
  EstimationId?: number | undefined
  EstimationNumber?: string | undefined
  Id?: number | undefined
  InvoiceId?: number | undefined
  InvoiceNumber?: string | undefined
  Link?: string | undefined
  Message?: string | undefined
  OrderId?: number | undefined
  OrderNumber?: string | undefined
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
    | undefined
  UserId?: number | undefined
}
type InvoiceAttachment = {
  Id?: number | undefined
  InvoiceId?: number | undefined
  Link?: string | undefined
  ObfuscatedFileName?: string | undefined
  OriginalFileName?: string | undefined
  Size?: bigint | undefined
  Type?: 'External' | 'Uploaded' | undefined
}
type InvoiceItem = {
  Cost?: number | undefined
  Description?: string | undefined
  DiscountAmount?: number | undefined
  DiscountPercentage?: number | undefined
  Id?: number | undefined
  InvoiceId?: number | undefined
  Quantity?: number | undefined
  SubTotalAmount?: number | undefined
  TaxAmount?: number | undefined
  TaxId?: number | undefined
  TaxPercentage?: number | undefined
  TotalAmount?: number | undefined
  WorkTypeId?: number | undefined
}
type PaymentGatewayForInvoice = { Id?: number | undefined; Name?: string | undefined }
type Payment = {
  Amount?: number | undefined
  Id?: number | undefined
  Invoice?: Invoice | undefined
  InvoiceId?: number | undefined
  IsAutomatic?: boolean | undefined
  Note?: string | undefined
  PaidOn?: string | undefined
  ReferenceId?: string | undefined
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
    | undefined
}
type Invoice = {
  AccessToken?: string | undefined
  Activities?: Activity[] | undefined
  Attachments?: InvoiceAttachment[] | undefined
  ClientId?: number | undefined
  ClonedFromId?: number | undefined
  CurrencyId?: number | undefined
  DiscountAmount?: number | undefined
  Duedate?: string | undefined
  EnablePartialPayments?: boolean | undefined
  EstimationId?: number | undefined
  Id?: number | undefined
  InvoiceCategoryId?: number | undefined
  IsDigitallySigned?: boolean | undefined
  IssuedOn?: string | undefined
  Items?: InvoiceItem[] | undefined
  Notes?: string | undefined
  Number?: string | undefined
  OrderId?: number | undefined
  PaymentGateways?: PaymentGatewayForInvoice[] | undefined
  PaymentLinkId?: number | undefined
  Payments?: Payment[] | undefined
  PoNumber?: string | undefined
  RecurringProfileId?: number | undefined
  ShouldSendReminders?: boolean | undefined
  Status?: 'Draft' | 'Paid' | 'Unpaid' | 'Overdue' | 'Void' | undefined
  SubTotalAmount?: number | undefined
  TaxAmount?: number | undefined
  Terms?: string | undefined
  TotalAmount?: number | undefined
  UserId?: number | undefined
}
type Tax = {
  Id?: number | undefined
  Name?: string | undefined
  Percentage?: number | undefined
  UserId?: number | undefined
}
type WorkType = { Id?: number | undefined; Title?: string | undefined; UserId?: number | undefined }
type PaymentLinkItem = {
  Cost?: number | undefined
  DiscountAmount?: number | undefined
  DiscountPercentage?: number | undefined
  Id?: number | undefined
  PaymentLinkId?: number | undefined
  Quantity?: number | undefined
  SubTotalAmount?: number | undefined
  Tax?: Tax | undefined
  TaxAmount?: number | undefined
  TaxId?: number | undefined
  TaxPercentage?: number | undefined
  TotalAmount?: number | undefined
  WorkType?: WorkType | undefined
  WorkTypeId?: number | undefined
}
type ExternalConnection = {
  AccessToken?: string | undefined
  AccessTokenSecret?: string | undefined
  Data?: string | undefined
  ExpiresOn?: string | undefined
  ExternalUserId?: string | undefined
  ExternalUsername?: string | undefined
  Id?: number | undefined
  Provider?: string | undefined
  UserId?: number | undefined
}
type Country = { Id?: number | undefined; Name?: string | undefined; Value?: string | undefined }
type UiLanguage = {
  Id?: number | undefined
  Name?: string | undefined
  UiCulture?: string | undefined
}
type UserSettings = {
  AccountantEmail?: string | undefined
  Address?: string | undefined
  ApiKey?: string | undefined
  ApiSecret?: string | undefined
  BackgroundImage?: string | undefined
  Bank?: string | undefined
  BankAccount?: string | undefined
  Cname?: string | undefined
  CompanyRegistrationNumber?: string | undefined
  Country?: Country | undefined
  CountryId?: number | undefined
  Currency?: Currency | undefined
  CurrencyId?: number | undefined
  CurrencySymbol?: string | undefined
  DefaultDateFormat?: string | undefined
  DefaultDueDateInDays?: number | undefined
  DoNotTrack?: boolean | undefined
  EnableClientPortal?: boolean | undefined
  EnablePredictiveInvoicing?: boolean | undefined
  EnableRecurringInvoicing?: boolean | undefined
  HasInvoiceLogo?: boolean | undefined
  Iban?: string | undefined
  Id?: number | undefined
  InvoiceTemplate?: 'Default' | 'Template1' | 'Template2' | undefined
  InvoiceTemplateColorHex?: string | undefined
  PhoneNumber?: string | undefined
  Profession?:
    | 'Other'
    | 'DesignAndCreative'
    | 'SoftwareDevelopment'
    | 'ContentWritingAndMarketing'
    | 'Freelancers'
    | 'Consultants'
    | 'Smes'
    | 'Enterprise'
    | 'ECommerce'
    | 'Individual'
    | undefined
  ReceiveSmsNotifications?: boolean | undefined
  ReferralProgram?: 'Enabled' | 'Disabled' | undefined
  StoreCheckoutFields?: 'ShowMinimumRequiredFields' | 'ShowAllFields' | undefined
  StoreColorHex?: string | undefined
  StoreCurrency?: Currency | undefined
  StoreCurrencyId?: number | undefined
  StoreCustomJavaScript?: string | undefined
  StoreDescription?: string | undefined
  StoreEmail?: string | undefined
  StoreLanguage?: UiLanguage | undefined
  StoreLanguageId?: number | undefined
  StoreName?: string | undefined
  StorePurchaseEmailMessage?: string | undefined
  StorePurchaseThankYouMessage?: string | undefined
  StoreTextColorHex?: string | undefined
  StoreUrl?: string | undefined
  SubscribeToProductEmails?: boolean | undefined
  Swift?: string | undefined
  Terms?: string | undefined
  UserId?: number | undefined
  UserSignature?: string | undefined
  VatNumber?: string | undefined
  YearsOfExperience?: number | undefined
}
type SubscriptionPlan = {
  CancellatedOn?: string | undefined
  CouponCode?: string | undefined
  CurrencyCode?: string | undefined
  ExternalIdentifier?: string | undefined
  Features?: ('Api' | 'Teams' | 'Clients' | 'Shop' | 'PaymentLinks' | 'Cname')[] | undefined
  HasDuePayment?: boolean | undefined
  HasDuePaymentSince?: string | undefined
  Id?: number | undefined
  Identifier?: string | undefined
  IsActive?: boolean | undefined
  IsLifetime?: boolean | undefined
  LastPaymentOn?: string | undefined
  MaxClients?: number | undefined
  Name?: string | undefined
  OnHold?: boolean | undefined
  OrderIdentifier?: string | undefined
  Price?: number | undefined
  Recurrence?: 'Monthly' | 'Yearly' | undefined
  SaleId?: bigint | undefined
  Status?: 'ActiveTrial' | 'ExpiredTrial' | 'Active' | 'Canceled' | 'Fraudlent' | undefined
  SystemCancelationReason?: 'FailToCaptureFee' | 'Fraud' | undefined
  TrialEndsOn?: string | undefined
  TrialNumberOfDays?: number | undefined
  TrialStartsOn?: string | undefined
  UserId?: number | undefined
  Version?: number | undefined
}
type User = {
  ActionNotificationsLastReadOn?: string | undefined
  Email?: string | undefined
  ExternalConnections?: ExternalConnection[] | undefined
  HasBeenOnboarded?: boolean | undefined
  Id?: number | undefined
  IsLocked?: boolean | undefined
  IsVerified?: boolean | undefined
  KnowledgeNotificationsLastReadOn?: string | undefined
  LastSeenOn?: string | undefined
  Name?: string | undefined
  Password?: string | undefined
  PasswordSalt?: string | undefined
  ReferralPath?: string | undefined
  ReferredUsers?: number | undefined
  ReferrerKey?: string | undefined
  Settings?: UserSettings | undefined
  Status?: 'Normal' | 'Fraudlent' | 'Locked' | undefined
  SubscriptionPlan?: SubscriptionPlan | undefined
  Type?: 'Anonymous' | 'Customer' | 'SystemAdministrator' | 'Collaborator' | undefined
  Username?: string | undefined
  VerifiedOn?: string | undefined
  YearsOfExperience?: 'One' | 'OneToThree' | 'ThreeToFive' | 'SixPlus' | undefined
}
type PaymentLink = {
  AccessToken?: string | undefined
  Client?: Client | undefined
  ClientId?: number | undefined
  Currency?: Currency | undefined
  CurrencyId?: number | undefined
  DiscountAmount?: number | undefined
  Id?: number | undefined
  Invoice?: Invoice | undefined
  Items?: PaymentLinkItem[] | undefined
  Number?: string | undefined
  SubTotalAmount?: number | undefined
  TaxAmount?: number | undefined
  TotalAmount?: number | undefined
  User?: User | undefined
  UserId?: number | undefined
}
type ListResultPaymentLink = {
  Count?: number | undefined
  ErrorMessages?: IErrorInfo[] | undefined
  IsFaulted?: boolean | undefined
  Result?: PaymentLink[] | undefined
  TotalCount?: number | undefined
}
type PaymentLinkUriApiModel = { Link?: string | undefined }
type ProductDetailsApiModel = {
  AccessToken?: string | undefined
  AfterPaymentDescription?: string | undefined
  ButtonCallToAction?: string | undefined
  Currency?: CurrencyDetailsApiModel | undefined
  CurrencyId?: number | undefined
  Description?: string | undefined
  Id?: number | undefined
  IsFeatured?: boolean | undefined
  Name?: string | undefined
  ShippingAmount?: number | undefined
  ShippingDescription?: string | undefined
  Status?: 'Active' | 'NotAvailable' | 'Inactive' | undefined
  SubTotalAmount?: number | undefined
  TotalAmount?: number | undefined
  TotalWithShipping?: number | undefined
  WhatHappensNextDescription?: string | undefined
}
type ListResultProductDetailsApiModel = {
  Count?: number | undefined
  ErrorMessages?: IErrorInfo[] | undefined
  IsFaulted?: boolean | undefined
  Result?: ProductDetailsApiModel[] | undefined
  TotalCount?: number | undefined
}
type ProductDeleteApiModel = { Id?: number | undefined }
type ProductAttachmentApiModel = {
  Id?: number | undefined
  Link?: string | undefined
  ObfuscatedFileName?: string | undefined
  OriginalFileName?: string | undefined
  Size?: bigint | undefined
  Type?: 'External' | 'Uploaded' | undefined
}
type ProductCouponApiModel = {
  Code?: string | undefined
  DiscountAmount?: number | undefined
  DiscountPercentage?: number | undefined
  Id?: number | undefined
  ValidUntil?: string | undefined
}
type ProductDiscountApiModel = {
  DiscountAmount?: number | undefined
  DiscountPercentage?: number | undefined
  Id?: number | undefined
  Name?: string | undefined
  ValidFrom?: string | undefined
  ValidTo?: string | undefined
}
type ProductItemApiModel = {
  Cost?: number | undefined
  Description?: string | undefined
  Id?: number | undefined
  MinimumQuantity?: number | undefined
  ReferenceId?: string | undefined
  SubTotalAmount?: number | undefined
  TaxAmount?: number | undefined
  TaxId?: number | undefined
  TaxPercentage?: number | undefined
  TotalAmount?: number | undefined
  WorkTypeId?: number | undefined
}
type ProductGatewayApiModel = { Name?: string | undefined }
type ProductFullDetailsApiModel = {
  AccessToken?: string | undefined
  AfterPaymentDescription?: string | undefined
  Attachments?: ProductAttachmentApiModel[] | undefined
  ButtonCallToAction?: string | undefined
  Coupons?: ProductCouponApiModel[] | undefined
  Currency?: CurrencyDetailsApiModel | undefined
  CurrencyId?: number | undefined
  Description?: string | undefined
  Discounts?: ProductDiscountApiModel[] | undefined
  Id?: number | undefined
  IsFeatured?: boolean | undefined
  Items?: ProductItemApiModel[] | undefined
  Name?: string | undefined
  PaymentGateways?: ProductGatewayApiModel[] | undefined
  ShippingAmount?: number | undefined
  ShippingDescription?: string | undefined
  Status?: 'Active' | 'NotAvailable' | 'Inactive' | undefined
  SubTotalAmount?: number | undefined
  TotalAmount?: number | undefined
  TotalWithShipping?: number | undefined
  WhatHappensNextDescription?: string | undefined
}
type ProductCreateApiModel = {
  AfterPaymentDescription?: string | undefined
  Attachments?: ProductAttachmentApiModel[] | undefined
  ButtonCallToAction?: string | undefined
  Coupons?: ProductCouponApiModel[] | undefined
  CurrencyId?: number | undefined
  Description?: string | undefined
  Discounts?: ProductDiscountApiModel[] | undefined
  IsFeatured?: boolean | undefined
  Items?: ProductItemApiModel[] | undefined
  Name?: string | undefined
  PaymentGateways?: ProductGatewayApiModel[] | undefined
  ShippingAmount?: number | undefined
  ShippingDescription?: string | undefined
  Status?: 'Active' | 'NotAvailable' | 'Inactive' | undefined
  WhatHappensNextDescription?: string | undefined
}
type ProductUpdateApiModel = {
  AfterPaymentDescription?: string | undefined
  Attachments?: ProductAttachmentApiModel[] | undefined
  ButtonCallToAction?: string | undefined
  Coupons?: ProductCouponApiModel[] | undefined
  CurrencyId?: number | undefined
  Description?: string | undefined
  Discounts?: ProductDiscountApiModel[] | undefined
  Id?: number | undefined
  IsFeatured?: boolean | undefined
  Items?: ProductItemApiModel[] | undefined
  Name?: string | undefined
  PaymentGateways?: ProductGatewayApiModel[] | undefined
  ShippingAmount?: number | undefined
  ShippingDescription?: string | undefined
  Status?: 'Active' | 'NotAvailable' | 'Inactive' | undefined
  WhatHappensNextDescription?: string | undefined
}
type TaxDetailsApiModel = {
  CreatedOn?: string | undefined
  Id?: number | undefined
  Name?: string | undefined
  Percentage?: number | undefined
}
type TaxDeleteApiModel = { Id?: number | undefined }
type TaxCreateApiModel = { Name?: string | undefined; Percentage?: number | undefined }
type TaxUpdateApiModel = {
  Id?: number | undefined
  Name?: string | undefined
  Percentage?: number | undefined
}
type WorkTypeDetailsApiModel = {
  CreatedOn?: string | undefined
  Id?: number | undefined
  Title?: string | undefined
}
type WorkTypeDeleteApiModel = { Id?: number | undefined }
type WorkTypeCreateApiModel = { Title?: string | undefined }
type WorkTypeUpdateApiModel = { Id?: number | undefined; Title?: string | undefined }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/api/client/all': {
      $get:
        | {
            input: { header: { 'x-auth-key': string; 'x-auth-secret': string } }
            output: ClientDetailsApiModel[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'x-auth-key': string; 'x-auth-secret': string } }
            output: ClientDetailsApiModel[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { header: { 'x-auth-key': string; 'x-auth-secret': string } }
            output: ClientDetailsApiModel[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { header: { 'x-auth-key': string; 'x-auth-secret': string } }
            output: ClientDetailsApiModel[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { header: { 'x-auth-key': string; 'x-auth-secret': string } }
            output: ClientDetailsApiModel[]
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/client/candelete': {
      $get:
        | {
            input: { query: { id: number } } & {
              header: { 'x-auth-key': string; 'x-auth-secret': string }
            }
            output: boolean
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { id: number } } & {
              header: { 'x-auth-key': string; 'x-auth-secret': string }
            }
            output: boolean
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { id: number } } & {
              header: { 'x-auth-key': string; 'x-auth-secret': string }
            }
            output: boolean
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { id: number } } & {
              header: { 'x-auth-key': string; 'x-auth-secret': string }
            }
            output: boolean
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { id: number } } & {
              header: { 'x-auth-key': string; 'x-auth-secret': string }
            }
            output: boolean
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/client/delete': {
      $post:
        | {
            input: { header: { 'x-auth-key': string; 'x-auth-secret': string } } & {
              json: ClientDeleteApiModel
            } & { form: ClientDeleteApiModel }
            output: number
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'x-auth-key': string; 'x-auth-secret': string } } & {
              json: ClientDeleteApiModel
            } & { form: ClientDeleteApiModel }
            output: number
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { header: { 'x-auth-key': string; 'x-auth-secret': string } } & {
              json: ClientDeleteApiModel
            } & { form: ClientDeleteApiModel }
            output: number
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { header: { 'x-auth-key': string; 'x-auth-secret': string } } & {
              json: ClientDeleteApiModel
            } & { form: ClientDeleteApiModel }
            output: number
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { header: { 'x-auth-key': string; 'x-auth-secret': string } } & {
              json: ClientDeleteApiModel
            } & { form: ClientDeleteApiModel }
            output: number
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/client/details': {
      $get:
        | {
            input: { query: { id: number } } & {
              header: { 'x-auth-key': string; 'x-auth-secret': string }
            }
            output: ClientDetailsApiModel
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { id: number } } & {
              header: { 'x-auth-key': string; 'x-auth-secret': string }
            }
            output: ClientDetailsApiModel
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { id: number } } & {
              header: { 'x-auth-key': string; 'x-auth-secret': string }
            }
            output: ClientDetailsApiModel
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { id: number } } & {
              header: { 'x-auth-key': string; 'x-auth-secret': string }
            }
            output: ClientDetailsApiModel
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { id: number } } & {
              header: { 'x-auth-key': string; 'x-auth-secret': string }
            }
            output: ClientDetailsApiModel
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/client/new': {
      $post:
        | {
            input: { header: { 'x-auth-key': string; 'x-auth-secret': string } } & {
              json: ClientCreateApiModel
            } & { form: ClientCreateApiModel }
            output: number
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'x-auth-key': string; 'x-auth-secret': string } } & {
              json: ClientCreateApiModel
            } & { form: ClientCreateApiModel }
            output: number
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { header: { 'x-auth-key': string; 'x-auth-secret': string } } & {
              json: ClientCreateApiModel
            } & { form: ClientCreateApiModel }
            output: number
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { header: { 'x-auth-key': string; 'x-auth-secret': string } } & {
              json: ClientCreateApiModel
            } & { form: ClientCreateApiModel }
            output: number
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { header: { 'x-auth-key': string; 'x-auth-secret': string } } & {
              json: ClientCreateApiModel
            } & { form: ClientCreateApiModel }
            output: number
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/client/update': {
      $post: {
        input: { header: { 'x-auth-key': string; 'x-auth-secret': string } } & {
          json: ClientUpdateApiModel
        } & { form: ClientUpdateApiModel }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/api/estimation/all': {
      $get:
        | {
            input: {
              query: {
                'queryOptions.page'?: number | undefined
                'queryOptions.pageSize'?: number | undefined
              }
            } & { header: { 'x-auth-key': string; 'x-auth-secret': string } }
            output: ListResultEstimationDetailsApiModel
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                'queryOptions.page'?: number | undefined
                'queryOptions.pageSize'?: number | undefined
              }
            } & { header: { 'x-auth-key': string; 'x-auth-secret': string } }
            output: ListResultEstimationDetailsApiModel
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                'queryOptions.page'?: number | undefined
                'queryOptions.pageSize'?: number | undefined
              }
            } & { header: { 'x-auth-key': string; 'x-auth-secret': string } }
            output: ListResultEstimationDetailsApiModel
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                'queryOptions.page'?: number | undefined
                'queryOptions.pageSize'?: number | undefined
              }
            } & { header: { 'x-auth-key': string; 'x-auth-secret': string } }
            output: ListResultEstimationDetailsApiModel
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                'queryOptions.page'?: number | undefined
                'queryOptions.pageSize'?: number | undefined
              }
            } & { header: { 'x-auth-key': string; 'x-auth-secret': string } }
            output: ListResultEstimationDetailsApiModel
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/estimation/changestatus': {
      $post:
        | {
            input: { header: { 'x-auth-key': string; 'x-auth-secret': string } } & {
              json: EstimationChangeStatusApiModel
            } & { form: EstimationChangeStatusApiModel }
            output: boolean
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'x-auth-key': string; 'x-auth-secret': string } } & {
              json: EstimationChangeStatusApiModel
            } & { form: EstimationChangeStatusApiModel }
            output: boolean
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { header: { 'x-auth-key': string; 'x-auth-secret': string } } & {
              json: EstimationChangeStatusApiModel
            } & { form: EstimationChangeStatusApiModel }
            output: boolean
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { header: { 'x-auth-key': string; 'x-auth-secret': string } } & {
              json: EstimationChangeStatusApiModel
            } & { form: EstimationChangeStatusApiModel }
            output: boolean
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { header: { 'x-auth-key': string; 'x-auth-secret': string } } & {
              json: EstimationChangeStatusApiModel
            } & { form: EstimationChangeStatusApiModel }
            output: boolean
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/estimation/convert': {
      $post:
        | {
            input: { header: { 'x-auth-key': string; 'x-auth-secret': string } } & {
              json: number
            } & { form: number }
            output: InvoiceFullDetailsApiModel
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'x-auth-key': string; 'x-auth-secret': string } } & {
              json: number
            } & { form: number }
            output: InvoiceFullDetailsApiModel
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { header: { 'x-auth-key': string; 'x-auth-secret': string } } & {
              json: number
            } & { form: number }
            output: InvoiceFullDetailsApiModel
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { header: { 'x-auth-key': string; 'x-auth-secret': string } } & {
              json: number
            } & { form: number }
            output: InvoiceFullDetailsApiModel
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { header: { 'x-auth-key': string; 'x-auth-secret': string } } & {
              json: number
            } & { form: number }
            output: InvoiceFullDetailsApiModel
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/estimation/delete': {
      $post:
        | {
            input: { header: { 'x-auth-key': string; 'x-auth-secret': string } } & {
              json: EstimationDeleteApiModel
            } & { form: EstimationDeleteApiModel }
            output: number
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'x-auth-key': string; 'x-auth-secret': string } } & {
              json: EstimationDeleteApiModel
            } & { form: EstimationDeleteApiModel }
            output: number
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { header: { 'x-auth-key': string; 'x-auth-secret': string } } & {
              json: EstimationDeleteApiModel
            } & { form: EstimationDeleteApiModel }
            output: number
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { header: { 'x-auth-key': string; 'x-auth-secret': string } } & {
              json: EstimationDeleteApiModel
            } & { form: EstimationDeleteApiModel }
            output: number
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { header: { 'x-auth-key': string; 'x-auth-secret': string } } & {
              json: EstimationDeleteApiModel
            } & { form: EstimationDeleteApiModel }
            output: number
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/estimation/details': {
      $get:
        | {
            input: { query: { id: number } } & {
              header: { 'x-auth-key': string; 'x-auth-secret': string }
            }
            output: EstimationFullDetailsApiModel
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { id: number } } & {
              header: { 'x-auth-key': string; 'x-auth-secret': string }
            }
            output: EstimationFullDetailsApiModel
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { id: number } } & {
              header: { 'x-auth-key': string; 'x-auth-secret': string }
            }
            output: EstimationFullDetailsApiModel
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { id: number } } & {
              header: { 'x-auth-key': string; 'x-auth-secret': string }
            }
            output: EstimationFullDetailsApiModel
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { id: number } } & {
              header: { 'x-auth-key': string; 'x-auth-secret': string }
            }
            output: EstimationFullDetailsApiModel
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/estimation/new': {
      $post:
        | {
            input: { header: { 'x-auth-key': string; 'x-auth-secret': string } } & {
              json: EstimationCreateApiModel
            } & { form: EstimationCreateApiModel }
            output: EstimationFullDetailsApiModel
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'x-auth-key': string; 'x-auth-secret': string } } & {
              json: EstimationCreateApiModel
            } & { form: EstimationCreateApiModel }
            output: EstimationFullDetailsApiModel
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { header: { 'x-auth-key': string; 'x-auth-secret': string } } & {
              json: EstimationCreateApiModel
            } & { form: EstimationCreateApiModel }
            output: EstimationFullDetailsApiModel
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { header: { 'x-auth-key': string; 'x-auth-secret': string } } & {
              json: EstimationCreateApiModel
            } & { form: EstimationCreateApiModel }
            output: EstimationFullDetailsApiModel
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { header: { 'x-auth-key': string; 'x-auth-secret': string } } & {
              json: EstimationCreateApiModel
            } & { form: EstimationCreateApiModel }
            output: EstimationFullDetailsApiModel
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/estimation/sendtoclient': {
      $post:
        | {
            input: { header: { 'x-auth-key': string; 'x-auth-secret': string } } & {
              json: SendEstimationToClientApiModel
            } & { form: SendEstimationToClientApiModel }
            output: number
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'x-auth-key': string; 'x-auth-secret': string } } & {
              json: SendEstimationToClientApiModel
            } & { form: SendEstimationToClientApiModel }
            output: number
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { header: { 'x-auth-key': string; 'x-auth-secret': string } } & {
              json: SendEstimationToClientApiModel
            } & { form: SendEstimationToClientApiModel }
            output: number
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { header: { 'x-auth-key': string; 'x-auth-secret': string } } & {
              json: SendEstimationToClientApiModel
            } & { form: SendEstimationToClientApiModel }
            output: number
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { header: { 'x-auth-key': string; 'x-auth-secret': string } } & {
              json: SendEstimationToClientApiModel
            } & { form: SendEstimationToClientApiModel }
            output: number
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/estimation/status': {
      $get:
        | {
            input: { query: { id: number } } & {
              header: { 'x-auth-key': string; 'x-auth-secret': string }
            }
            output: 'Draft' | 'Accepted' | 'Rejected'
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { id: number } } & {
              header: { 'x-auth-key': string; 'x-auth-secret': string }
            }
            output: 'Draft' | 'Accepted' | 'Rejected'
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { id: number } } & {
              header: { 'x-auth-key': string; 'x-auth-secret': string }
            }
            output: 'Draft' | 'Accepted' | 'Rejected'
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { id: number } } & {
              header: { 'x-auth-key': string; 'x-auth-secret': string }
            }
            output: 'Draft' | 'Accepted' | 'Rejected'
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { id: number } } & {
              header: { 'x-auth-key': string; 'x-auth-secret': string }
            }
            output: 'Draft' | 'Accepted' | 'Rejected'
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/estimation/update': {
      $post:
        | {
            input: { header: { 'x-auth-key': string; 'x-auth-secret': string } } & {
              json: EstimationUpdateApiModel
            } & { form: EstimationUpdateApiModel }
            output: EstimationFullDetailsApiModel
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'x-auth-key': string; 'x-auth-secret': string } } & {
              json: EstimationUpdateApiModel
            } & { form: EstimationUpdateApiModel }
            output: EstimationFullDetailsApiModel
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { header: { 'x-auth-key': string; 'x-auth-secret': string } } & {
              json: EstimationUpdateApiModel
            } & { form: EstimationUpdateApiModel }
            output: EstimationFullDetailsApiModel
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { header: { 'x-auth-key': string; 'x-auth-secret': string } } & {
              json: EstimationUpdateApiModel
            } & { form: EstimationUpdateApiModel }
            output: EstimationFullDetailsApiModel
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { header: { 'x-auth-key': string; 'x-auth-secret': string } } & {
              json: EstimationUpdateApiModel
            } & { form: EstimationUpdateApiModel }
            output: EstimationFullDetailsApiModel
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/estimation/uri': {
      $get:
        | {
            input: { query: { id: number } } & {
              header: { 'x-auth-key': string; 'x-auth-secret': string }
            }
            output: EstimationUriApiModel
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { id: number } } & {
              header: { 'x-auth-key': string; 'x-auth-secret': string }
            }
            output: EstimationUriApiModel
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { id: number } } & {
              header: { 'x-auth-key': string; 'x-auth-secret': string }
            }
            output: EstimationUriApiModel
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { id: number } } & {
              header: { 'x-auth-key': string; 'x-auth-secret': string }
            }
            output: EstimationUriApiModel
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { id: number } } & {
              header: { 'x-auth-key': string; 'x-auth-secret': string }
            }
            output: EstimationUriApiModel
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/general/countries': {
      $get:
        | {
            input: { header: { 'x-auth-key': string; 'x-auth-secret': string } }
            output: CountryDetailsApiModel[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'x-auth-key': string; 'x-auth-secret': string } }
            output: CountryDetailsApiModel[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { header: { 'x-auth-key': string; 'x-auth-secret': string } }
            output: CountryDetailsApiModel[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { header: { 'x-auth-key': string; 'x-auth-secret': string } }
            output: CountryDetailsApiModel[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { header: { 'x-auth-key': string; 'x-auth-secret': string } }
            output: CountryDetailsApiModel[]
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/general/currencies': {
      $get:
        | {
            input: { header: { 'x-auth-key': string; 'x-auth-secret': string } }
            output: CurrencyDetailsApiModel[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'x-auth-key': string; 'x-auth-secret': string } }
            output: CurrencyDetailsApiModel[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { header: { 'x-auth-key': string; 'x-auth-secret': string } }
            output: CurrencyDetailsApiModel[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { header: { 'x-auth-key': string; 'x-auth-secret': string } }
            output: CurrencyDetailsApiModel[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { header: { 'x-auth-key': string; 'x-auth-secret': string } }
            output: CurrencyDetailsApiModel[]
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/general/dateformats': {
      $get:
        | {
            input: { header: { 'x-auth-key': string; 'x-auth-secret': string } }
            output: string[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'x-auth-key': string; 'x-auth-secret': string } }
            output: string[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { header: { 'x-auth-key': string; 'x-auth-secret': string } }
            output: string[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { header: { 'x-auth-key': string; 'x-auth-secret': string } }
            output: string[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { header: { 'x-auth-key': string; 'x-auth-secret': string } }
            output: string[]
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/general/uilanguages': {
      $get:
        | {
            input: { header: { 'x-auth-key': string; 'x-auth-secret': string } }
            output: UILanguageDetailsApiModel[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'x-auth-key': string; 'x-auth-secret': string } }
            output: UILanguageDetailsApiModel[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { header: { 'x-auth-key': string; 'x-auth-secret': string } }
            output: UILanguageDetailsApiModel[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { header: { 'x-auth-key': string; 'x-auth-secret': string } }
            output: UILanguageDetailsApiModel[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { header: { 'x-auth-key': string; 'x-auth-secret': string } }
            output: UILanguageDetailsApiModel[]
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/invoice/all': {
      $get:
        | {
            input: {
              query: {
                'queryOptions.page'?: number | undefined
                'queryOptions.pageSize'?: number | undefined
              }
            } & { header: { 'x-auth-key': string; 'x-auth-secret': string } }
            output: ListResultInvoiceDetailsApiModel
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                'queryOptions.page'?: number | undefined
                'queryOptions.pageSize'?: number | undefined
              }
            } & { header: { 'x-auth-key': string; 'x-auth-secret': string } }
            output: ListResultInvoiceDetailsApiModel
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                'queryOptions.page'?: number | undefined
                'queryOptions.pageSize'?: number | undefined
              }
            } & { header: { 'x-auth-key': string; 'x-auth-secret': string } }
            output: ListResultInvoiceDetailsApiModel
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                'queryOptions.page'?: number | undefined
                'queryOptions.pageSize'?: number | undefined
              }
            } & { header: { 'x-auth-key': string; 'x-auth-secret': string } }
            output: ListResultInvoiceDetailsApiModel
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                'queryOptions.page'?: number | undefined
                'queryOptions.pageSize'?: number | undefined
              }
            } & { header: { 'x-auth-key': string; 'x-auth-secret': string } }
            output: ListResultInvoiceDetailsApiModel
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/invoice/allcategories': {
      $get:
        | {
            input: { query: { query?: string | undefined } } & {
              header: { 'x-auth-key': string; 'x-auth-secret': string }
            }
            output: ListResultInvoiceCategoryApiModel
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { query?: string | undefined } } & {
              header: { 'x-auth-key': string; 'x-auth-secret': string }
            }
            output: ListResultInvoiceCategoryApiModel
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { query?: string | undefined } } & {
              header: { 'x-auth-key': string; 'x-auth-secret': string }
            }
            output: ListResultInvoiceCategoryApiModel
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { query?: string | undefined } } & {
              header: { 'x-auth-key': string; 'x-auth-secret': string }
            }
            output: ListResultInvoiceCategoryApiModel
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { query?: string | undefined } } & {
              header: { 'x-auth-key': string; 'x-auth-secret': string }
            }
            output: ListResultInvoiceCategoryApiModel
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/invoice/changestatus': {
      $post:
        | {
            input: { header: { 'x-auth-key': string; 'x-auth-secret': string } } & {
              json: ChangeStatusApiModel
            } & { form: ChangeStatusApiModel }
            output: boolean
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'x-auth-key': string; 'x-auth-secret': string } } & {
              json: ChangeStatusApiModel
            } & { form: ChangeStatusApiModel }
            output: boolean
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { header: { 'x-auth-key': string; 'x-auth-secret': string } } & {
              json: ChangeStatusApiModel
            } & { form: ChangeStatusApiModel }
            output: boolean
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { header: { 'x-auth-key': string; 'x-auth-secret': string } } & {
              json: ChangeStatusApiModel
            } & { form: ChangeStatusApiModel }
            output: boolean
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { header: { 'x-auth-key': string; 'x-auth-secret': string } } & {
              json: ChangeStatusApiModel
            } & { form: ChangeStatusApiModel }
            output: boolean
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/invoice/delete': {
      $post:
        | {
            input: { header: { 'x-auth-key': string; 'x-auth-secret': string } } & {
              json: InvoiceDeleteApiModel
            } & { form: InvoiceDeleteApiModel }
            output: number
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'x-auth-key': string; 'x-auth-secret': string } } & {
              json: InvoiceDeleteApiModel
            } & { form: InvoiceDeleteApiModel }
            output: number
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { header: { 'x-auth-key': string; 'x-auth-secret': string } } & {
              json: InvoiceDeleteApiModel
            } & { form: InvoiceDeleteApiModel }
            output: number
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { header: { 'x-auth-key': string; 'x-auth-secret': string } } & {
              json: InvoiceDeleteApiModel
            } & { form: InvoiceDeleteApiModel }
            output: number
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { header: { 'x-auth-key': string; 'x-auth-secret': string } } & {
              json: InvoiceDeleteApiModel
            } & { form: InvoiceDeleteApiModel }
            output: number
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/invoice/deletecategory': {
      $post:
        | {
            input: { header: { 'x-auth-key': string; 'x-auth-secret': string } } & {
              json: InvoiceCategoryDeleteApiModel
            } & { form: InvoiceCategoryDeleteApiModel }
            output: number
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'x-auth-key': string; 'x-auth-secret': string } } & {
              json: InvoiceCategoryDeleteApiModel
            } & { form: InvoiceCategoryDeleteApiModel }
            output: number
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { header: { 'x-auth-key': string; 'x-auth-secret': string } } & {
              json: InvoiceCategoryDeleteApiModel
            } & { form: InvoiceCategoryDeleteApiModel }
            output: number
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { header: { 'x-auth-key': string; 'x-auth-secret': string } } & {
              json: InvoiceCategoryDeleteApiModel
            } & { form: InvoiceCategoryDeleteApiModel }
            output: number
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { header: { 'x-auth-key': string; 'x-auth-secret': string } } & {
              json: InvoiceCategoryDeleteApiModel
            } & { form: InvoiceCategoryDeleteApiModel }
            output: number
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/invoice/details': {
      $get:
        | {
            input: { query: { id: number } } & {
              header: { 'x-auth-key': string; 'x-auth-secret': string }
            }
            output: InvoiceFullDetailsApiModel
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { id: number } } & {
              header: { 'x-auth-key': string; 'x-auth-secret': string }
            }
            output: InvoiceFullDetailsApiModel
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { id: number } } & {
              header: { 'x-auth-key': string; 'x-auth-secret': string }
            }
            output: InvoiceFullDetailsApiModel
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { id: number } } & {
              header: { 'x-auth-key': string; 'x-auth-secret': string }
            }
            output: InvoiceFullDetailsApiModel
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { id: number } } & {
              header: { 'x-auth-key': string; 'x-auth-secret': string }
            }
            output: InvoiceFullDetailsApiModel
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/invoice/new': {
      $post:
        | {
            input: { header: { 'x-auth-key': string; 'x-auth-secret': string } } & {
              json: InvoiceCreateApiModel
            } & { form: InvoiceCreateApiModel }
            output: InvoiceFullDetailsApiModel
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'x-auth-key': string; 'x-auth-secret': string } } & {
              json: InvoiceCreateApiModel
            } & { form: InvoiceCreateApiModel }
            output: InvoiceFullDetailsApiModel
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { header: { 'x-auth-key': string; 'x-auth-secret': string } } & {
              json: InvoiceCreateApiModel
            } & { form: InvoiceCreateApiModel }
            output: InvoiceFullDetailsApiModel
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { header: { 'x-auth-key': string; 'x-auth-secret': string } } & {
              json: InvoiceCreateApiModel
            } & { form: InvoiceCreateApiModel }
            output: InvoiceFullDetailsApiModel
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { header: { 'x-auth-key': string; 'x-auth-secret': string } } & {
              json: InvoiceCreateApiModel
            } & { form: InvoiceCreateApiModel }
            output: InvoiceFullDetailsApiModel
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/invoice/newcategory': {
      $post:
        | {
            input: { header: { 'x-auth-key': string; 'x-auth-secret': string } } & {
              json: InvoiceCategoryCreateApiModel
            } & { form: InvoiceCategoryCreateApiModel }
            output: InvoiceCategoryApiModel
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'x-auth-key': string; 'x-auth-secret': string } } & {
              json: InvoiceCategoryCreateApiModel
            } & { form: InvoiceCategoryCreateApiModel }
            output: InvoiceCategoryApiModel
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { header: { 'x-auth-key': string; 'x-auth-secret': string } } & {
              json: InvoiceCategoryCreateApiModel
            } & { form: InvoiceCategoryCreateApiModel }
            output: InvoiceCategoryApiModel
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { header: { 'x-auth-key': string; 'x-auth-secret': string } } & {
              json: InvoiceCategoryCreateApiModel
            } & { form: InvoiceCategoryCreateApiModel }
            output: InvoiceCategoryApiModel
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { header: { 'x-auth-key': string; 'x-auth-secret': string } } & {
              json: InvoiceCategoryCreateApiModel
            } & { form: InvoiceCategoryCreateApiModel }
            output: InvoiceCategoryApiModel
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/invoice/pdf': {
      $get:
        | {
            input: { query: { id: number; signedVersion?: boolean | undefined } } & {
              header: { 'x-auth-key': string; 'x-auth-secret': string }
            }
            output: InvoiceUriApiModel
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { id: number; signedVersion?: boolean | undefined } } & {
              header: { 'x-auth-key': string; 'x-auth-secret': string }
            }
            output: InvoiceUriApiModel
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { id: number; signedVersion?: boolean | undefined } } & {
              header: { 'x-auth-key': string; 'x-auth-secret': string }
            }
            output: InvoiceUriApiModel
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { id: number; signedVersion?: boolean | undefined } } & {
              header: { 'x-auth-key': string; 'x-auth-secret': string }
            }
            output: InvoiceUriApiModel
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { id: number; signedVersion?: boolean | undefined } } & {
              header: { 'x-auth-key': string; 'x-auth-secret': string }
            }
            output: InvoiceUriApiModel
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/invoice/sendtoaccountant': {
      $post:
        | {
            input: { header: { 'x-auth-key': string; 'x-auth-secret': string } } & {
              json: SendInvoiceToAccountantApiModel
            } & { form: SendInvoiceToAccountantApiModel }
            output: number
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'x-auth-key': string; 'x-auth-secret': string } } & {
              json: SendInvoiceToAccountantApiModel
            } & { form: SendInvoiceToAccountantApiModel }
            output: number
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { header: { 'x-auth-key': string; 'x-auth-secret': string } } & {
              json: SendInvoiceToAccountantApiModel
            } & { form: SendInvoiceToAccountantApiModel }
            output: number
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { header: { 'x-auth-key': string; 'x-auth-secret': string } } & {
              json: SendInvoiceToAccountantApiModel
            } & { form: SendInvoiceToAccountantApiModel }
            output: number
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { header: { 'x-auth-key': string; 'x-auth-secret': string } } & {
              json: SendInvoiceToAccountantApiModel
            } & { form: SendInvoiceToAccountantApiModel }
            output: number
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/invoice/sendtoclient': {
      $post:
        | {
            input: { header: { 'x-auth-key': string; 'x-auth-secret': string } } & {
              json: SendInvoiceToClientApiModel
            } & { form: SendInvoiceToClientApiModel }
            output: number
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'x-auth-key': string; 'x-auth-secret': string } } & {
              json: SendInvoiceToClientApiModel
            } & { form: SendInvoiceToClientApiModel }
            output: number
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { header: { 'x-auth-key': string; 'x-auth-secret': string } } & {
              json: SendInvoiceToClientApiModel
            } & { form: SendInvoiceToClientApiModel }
            output: number
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { header: { 'x-auth-key': string; 'x-auth-secret': string } } & {
              json: SendInvoiceToClientApiModel
            } & { form: SendInvoiceToClientApiModel }
            output: number
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { header: { 'x-auth-key': string; 'x-auth-secret': string } } & {
              json: SendInvoiceToClientApiModel
            } & { form: SendInvoiceToClientApiModel }
            output: number
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/invoice/status': {
      $get:
        | {
            input: { query: { id: number } } & {
              header: { 'x-auth-key': string; 'x-auth-secret': string }
            }
            output: 'Draft' | 'Paid' | 'Unpaid' | 'Overdue' | 'Void'
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { id: number } } & {
              header: { 'x-auth-key': string; 'x-auth-secret': string }
            }
            output: 'Draft' | 'Paid' | 'Unpaid' | 'Overdue' | 'Void'
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { id: number } } & {
              header: { 'x-auth-key': string; 'x-auth-secret': string }
            }
            output: 'Draft' | 'Paid' | 'Unpaid' | 'Overdue' | 'Void'
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { id: number } } & {
              header: { 'x-auth-key': string; 'x-auth-secret': string }
            }
            output: 'Draft' | 'Paid' | 'Unpaid' | 'Overdue' | 'Void'
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { id: number } } & {
              header: { 'x-auth-key': string; 'x-auth-secret': string }
            }
            output: 'Draft' | 'Paid' | 'Unpaid' | 'Overdue' | 'Void'
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/invoice/update': {
      $post:
        | {
            input: { header: { 'x-auth-key': string; 'x-auth-secret': string } } & {
              json: InvoiceUpdateApiModel
            } & { form: InvoiceUpdateApiModel }
            output: InvoiceFullDetailsApiModel
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'x-auth-key': string; 'x-auth-secret': string } } & {
              json: InvoiceUpdateApiModel
            } & { form: InvoiceUpdateApiModel }
            output: InvoiceFullDetailsApiModel
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { header: { 'x-auth-key': string; 'x-auth-secret': string } } & {
              json: InvoiceUpdateApiModel
            } & { form: InvoiceUpdateApiModel }
            output: InvoiceFullDetailsApiModel
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { header: { 'x-auth-key': string; 'x-auth-secret': string } } & {
              json: InvoiceUpdateApiModel
            } & { form: InvoiceUpdateApiModel }
            output: InvoiceFullDetailsApiModel
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { header: { 'x-auth-key': string; 'x-auth-secret': string } } & {
              json: InvoiceUpdateApiModel
            } & { form: InvoiceUpdateApiModel }
            output: InvoiceFullDetailsApiModel
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/invoice/updatecategory': {
      $post:
        | {
            input: { header: { 'x-auth-key': string; 'x-auth-secret': string } } & {
              json: InvoiceCategoryUpdateApiModel
            } & { form: InvoiceCategoryUpdateApiModel }
            output: InvoiceCategoryApiModel
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'x-auth-key': string; 'x-auth-secret': string } } & {
              json: InvoiceCategoryUpdateApiModel
            } & { form: InvoiceCategoryUpdateApiModel }
            output: InvoiceCategoryApiModel
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { header: { 'x-auth-key': string; 'x-auth-secret': string } } & {
              json: InvoiceCategoryUpdateApiModel
            } & { form: InvoiceCategoryUpdateApiModel }
            output: InvoiceCategoryApiModel
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { header: { 'x-auth-key': string; 'x-auth-secret': string } } & {
              json: InvoiceCategoryUpdateApiModel
            } & { form: InvoiceCategoryUpdateApiModel }
            output: InvoiceCategoryApiModel
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { header: { 'x-auth-key': string; 'x-auth-secret': string } } & {
              json: InvoiceCategoryUpdateApiModel
            } & { form: InvoiceCategoryUpdateApiModel }
            output: InvoiceCategoryApiModel
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/invoice/uri': {
      $get:
        | {
            input: { query: { id: number } } & {
              header: { 'x-auth-key': string; 'x-auth-secret': string }
            }
            output: InvoiceUriApiModel
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { id: number } } & {
              header: { 'x-auth-key': string; 'x-auth-secret': string }
            }
            output: InvoiceUriApiModel
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { id: number } } & {
              header: { 'x-auth-key': string; 'x-auth-secret': string }
            }
            output: InvoiceUriApiModel
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { id: number } } & {
              header: { 'x-auth-key': string; 'x-auth-secret': string }
            }
            output: InvoiceUriApiModel
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { id: number } } & {
              header: { 'x-auth-key': string; 'x-auth-secret': string }
            }
            output: InvoiceUriApiModel
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/order/all': {
      $get:
        | {
            input: {
              query: {
                'queryOptions.page'?: number | undefined
                'queryOptions.pageSize'?: number | undefined
              }
            } & { header: { 'x-auth-key': string; 'x-auth-secret': string } }
            output: ListResultOrderDetailsApiModel
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                'queryOptions.page'?: number | undefined
                'queryOptions.pageSize'?: number | undefined
              }
            } & { header: { 'x-auth-key': string; 'x-auth-secret': string } }
            output: ListResultOrderDetailsApiModel
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                'queryOptions.page'?: number | undefined
                'queryOptions.pageSize'?: number | undefined
              }
            } & { header: { 'x-auth-key': string; 'x-auth-secret': string } }
            output: ListResultOrderDetailsApiModel
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                'queryOptions.page'?: number | undefined
                'queryOptions.pageSize'?: number | undefined
              }
            } & { header: { 'x-auth-key': string; 'x-auth-secret': string } }
            output: ListResultOrderDetailsApiModel
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                'queryOptions.page'?: number | undefined
                'queryOptions.pageSize'?: number | undefined
              }
            } & { header: { 'x-auth-key': string; 'x-auth-secret': string } }
            output: ListResultOrderDetailsApiModel
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/order/changeshippingdetails': {
      $post: {
        input: { query: { orderId: number } } & {
          header: { 'x-auth-key': string; 'x-auth-secret': string }
        } & { json: OrderShippingDetailsApiModel } & { form: OrderShippingDetailsApiModel }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/api/order/changestatus': {
      $post: {
        input: { header: { 'x-auth-key': string; 'x-auth-secret': string } } & {
          json: ChangeOrderStatusApiModel
        } & { form: ChangeOrderStatusApiModel }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/api/order/delete': {
      $post:
        | {
            input: { header: { 'x-auth-key': string; 'x-auth-secret': string } } & {
              json: OrderDeleteApiModel
            } & { form: OrderDeleteApiModel }
            output: number
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'x-auth-key': string; 'x-auth-secret': string } } & {
              json: OrderDeleteApiModel
            } & { form: OrderDeleteApiModel }
            output: number
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { header: { 'x-auth-key': string; 'x-auth-secret': string } } & {
              json: OrderDeleteApiModel
            } & { form: OrderDeleteApiModel }
            output: number
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { header: { 'x-auth-key': string; 'x-auth-secret': string } } & {
              json: OrderDeleteApiModel
            } & { form: OrderDeleteApiModel }
            output: number
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { header: { 'x-auth-key': string; 'x-auth-secret': string } } & {
              json: OrderDeleteApiModel
            } & { form: OrderDeleteApiModel }
            output: number
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/order/details': {
      $get:
        | {
            input: { query: { id: number } } & {
              header: { 'x-auth-key': string; 'x-auth-secret': string }
            }
            output: OrderFullDetailsApiModel
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { id: number } } & {
              header: { 'x-auth-key': string; 'x-auth-secret': string }
            }
            output: OrderFullDetailsApiModel
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { id: number } } & {
              header: { 'x-auth-key': string; 'x-auth-secret': string }
            }
            output: OrderFullDetailsApiModel
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { id: number } } & {
              header: { 'x-auth-key': string; 'x-auth-secret': string }
            }
            output: OrderFullDetailsApiModel
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { id: number } } & {
              header: { 'x-auth-key': string; 'x-auth-secret': string }
            }
            output: OrderFullDetailsApiModel
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/order/new': {
      $post:
        | {
            input: { header: { 'x-auth-key': string; 'x-auth-secret': string } } & {
              json: OrderCreateApiModel
            } & { form: OrderCreateApiModel }
            output: number
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'x-auth-key': string; 'x-auth-secret': string } } & {
              json: OrderCreateApiModel
            } & { form: OrderCreateApiModel }
            output: number
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { header: { 'x-auth-key': string; 'x-auth-secret': string } } & {
              json: OrderCreateApiModel
            } & { form: OrderCreateApiModel }
            output: number
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { header: { 'x-auth-key': string; 'x-auth-secret': string } } & {
              json: OrderCreateApiModel
            } & { form: OrderCreateApiModel }
            output: number
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { header: { 'x-auth-key': string; 'x-auth-secret': string } } & {
              json: OrderCreateApiModel
            } & { form: OrderCreateApiModel }
            output: number
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/payment/supported': {
      $get:
        | {
            input: { header: { 'x-auth-key': string; 'x-auth-secret': string } }
            output: PaymentGatewayDetailsApiModel[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'x-auth-key': string; 'x-auth-secret': string } }
            output: PaymentGatewayDetailsApiModel[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { header: { 'x-auth-key': string; 'x-auth-secret': string } }
            output: PaymentGatewayDetailsApiModel[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { header: { 'x-auth-key': string; 'x-auth-secret': string } }
            output: PaymentGatewayDetailsApiModel[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { header: { 'x-auth-key': string; 'x-auth-secret': string } }
            output: PaymentGatewayDetailsApiModel[]
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/paymentlink/all': {
      $get:
        | {
            input: {
              query: {
                'queryOptions.page'?: number | undefined
                'queryOptions.pageSize'?: number | undefined
              }
            } & { header: { 'x-auth-key': string; 'x-auth-secret': string } }
            output: ListResultPaymentLink
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                'queryOptions.page'?: number | undefined
                'queryOptions.pageSize'?: number | undefined
              }
            } & { header: { 'x-auth-key': string; 'x-auth-secret': string } }
            output: ListResultPaymentLink
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                'queryOptions.page'?: number | undefined
                'queryOptions.pageSize'?: number | undefined
              }
            } & { header: { 'x-auth-key': string; 'x-auth-secret': string } }
            output: ListResultPaymentLink
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                'queryOptions.page'?: number | undefined
                'queryOptions.pageSize'?: number | undefined
              }
            } & { header: { 'x-auth-key': string; 'x-auth-secret': string } }
            output: ListResultPaymentLink
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                'queryOptions.page'?: number | undefined
                'queryOptions.pageSize'?: number | undefined
              }
            } & { header: { 'x-auth-key': string; 'x-auth-secret': string } }
            output: ListResultPaymentLink
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/paymentlink/delete': {
      $post:
        | {
            input: { header: { 'x-auth-key': string; 'x-auth-secret': string } } & {
              json: PaymentLink
            } & { form: PaymentLink }
            output: number
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'x-auth-key': string; 'x-auth-secret': string } } & {
              json: PaymentLink
            } & { form: PaymentLink }
            output: number
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { header: { 'x-auth-key': string; 'x-auth-secret': string } } & {
              json: PaymentLink
            } & { form: PaymentLink }
            output: number
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { header: { 'x-auth-key': string; 'x-auth-secret': string } } & {
              json: PaymentLink
            } & { form: PaymentLink }
            output: number
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { header: { 'x-auth-key': string; 'x-auth-secret': string } } & {
              json: PaymentLink
            } & { form: PaymentLink }
            output: number
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/paymentlink/new': {
      $post:
        | {
            input: { header: { 'x-auth-key': string; 'x-auth-secret': string } } & {
              json: PaymentLink
            } & { form: PaymentLink }
            output: number
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'x-auth-key': string; 'x-auth-secret': string } } & {
              json: PaymentLink
            } & { form: PaymentLink }
            output: number
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { header: { 'x-auth-key': string; 'x-auth-secret': string } } & {
              json: PaymentLink
            } & { form: PaymentLink }
            output: number
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { header: { 'x-auth-key': string; 'x-auth-secret': string } } & {
              json: PaymentLink
            } & { form: PaymentLink }
            output: number
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { header: { 'x-auth-key': string; 'x-auth-secret': string } } & {
              json: PaymentLink
            } & { form: PaymentLink }
            output: number
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/paymentlink/uri': {
      $get:
        | {
            input: { query: { id: number } } & {
              header: { 'x-auth-key': string; 'x-auth-secret': string }
            }
            output: PaymentLinkUriApiModel
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { id: number } } & {
              header: { 'x-auth-key': string; 'x-auth-secret': string }
            }
            output: PaymentLinkUriApiModel
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { id: number } } & {
              header: { 'x-auth-key': string; 'x-auth-secret': string }
            }
            output: PaymentLinkUriApiModel
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { id: number } } & {
              header: { 'x-auth-key': string; 'x-auth-secret': string }
            }
            output: PaymentLinkUriApiModel
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { id: number } } & {
              header: { 'x-auth-key': string; 'x-auth-secret': string }
            }
            output: PaymentLinkUriApiModel
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/product/all': {
      $get:
        | {
            input: {
              query: {
                'queryOptions.page'?: number | undefined
                'queryOptions.pageSize'?: number | undefined
              }
            } & { header: { 'x-auth-key': string; 'x-auth-secret': string } }
            output: ListResultProductDetailsApiModel
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                'queryOptions.page'?: number | undefined
                'queryOptions.pageSize'?: number | undefined
              }
            } & { header: { 'x-auth-key': string; 'x-auth-secret': string } }
            output: ListResultProductDetailsApiModel
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                'queryOptions.page'?: number | undefined
                'queryOptions.pageSize'?: number | undefined
              }
            } & { header: { 'x-auth-key': string; 'x-auth-secret': string } }
            output: ListResultProductDetailsApiModel
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                'queryOptions.page'?: number | undefined
                'queryOptions.pageSize'?: number | undefined
              }
            } & { header: { 'x-auth-key': string; 'x-auth-secret': string } }
            output: ListResultProductDetailsApiModel
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                'queryOptions.page'?: number | undefined
                'queryOptions.pageSize'?: number | undefined
              }
            } & { header: { 'x-auth-key': string; 'x-auth-secret': string } }
            output: ListResultProductDetailsApiModel
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/product/delete': {
      $post:
        | {
            input: { header: { 'x-auth-key': string; 'x-auth-secret': string } } & {
              json: ProductDeleteApiModel
            } & { form: ProductDeleteApiModel }
            output: number
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'x-auth-key': string; 'x-auth-secret': string } } & {
              json: ProductDeleteApiModel
            } & { form: ProductDeleteApiModel }
            output: number
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { header: { 'x-auth-key': string; 'x-auth-secret': string } } & {
              json: ProductDeleteApiModel
            } & { form: ProductDeleteApiModel }
            output: number
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { header: { 'x-auth-key': string; 'x-auth-secret': string } } & {
              json: ProductDeleteApiModel
            } & { form: ProductDeleteApiModel }
            output: number
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { header: { 'x-auth-key': string; 'x-auth-secret': string } } & {
              json: ProductDeleteApiModel
            } & { form: ProductDeleteApiModel }
            output: number
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/product/details': {
      $get:
        | {
            input: { query: { id: number } } & {
              header: { 'x-auth-key': string; 'x-auth-secret': string }
            }
            output: ProductFullDetailsApiModel
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { id: number } } & {
              header: { 'x-auth-key': string; 'x-auth-secret': string }
            }
            output: ProductFullDetailsApiModel
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { id: number } } & {
              header: { 'x-auth-key': string; 'x-auth-secret': string }
            }
            output: ProductFullDetailsApiModel
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { id: number } } & {
              header: { 'x-auth-key': string; 'x-auth-secret': string }
            }
            output: ProductFullDetailsApiModel
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { id: number } } & {
              header: { 'x-auth-key': string; 'x-auth-secret': string }
            }
            output: ProductFullDetailsApiModel
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/product/new': {
      $post:
        | {
            input: { header: { 'x-auth-key': string; 'x-auth-secret': string } } & {
              json: ProductCreateApiModel
            } & { form: ProductCreateApiModel }
            output: number
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'x-auth-key': string; 'x-auth-secret': string } } & {
              json: ProductCreateApiModel
            } & { form: ProductCreateApiModel }
            output: number
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { header: { 'x-auth-key': string; 'x-auth-secret': string } } & {
              json: ProductCreateApiModel
            } & { form: ProductCreateApiModel }
            output: number
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { header: { 'x-auth-key': string; 'x-auth-secret': string } } & {
              json: ProductCreateApiModel
            } & { form: ProductCreateApiModel }
            output: number
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { header: { 'x-auth-key': string; 'x-auth-secret': string } } & {
              json: ProductCreateApiModel
            } & { form: ProductCreateApiModel }
            output: number
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/product/update': {
      $post: {
        input: { header: { 'x-auth-key': string; 'x-auth-secret': string } } & {
          json: ProductUpdateApiModel
        } & { form: ProductUpdateApiModel }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/api/tax/all': {
      $get:
        | {
            input: { header: { 'x-auth-key': string; 'x-auth-secret': string } }
            output: TaxDetailsApiModel[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'x-auth-key': string; 'x-auth-secret': string } }
            output: TaxDetailsApiModel[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { header: { 'x-auth-key': string; 'x-auth-secret': string } }
            output: TaxDetailsApiModel[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { header: { 'x-auth-key': string; 'x-auth-secret': string } }
            output: TaxDetailsApiModel[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { header: { 'x-auth-key': string; 'x-auth-secret': string } }
            output: TaxDetailsApiModel[]
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/tax/delete': {
      $post:
        | {
            input: { header: { 'x-auth-key': string; 'x-auth-secret': string } } & {
              json: TaxDeleteApiModel
            } & { form: TaxDeleteApiModel }
            output: number
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'x-auth-key': string; 'x-auth-secret': string } } & {
              json: TaxDeleteApiModel
            } & { form: TaxDeleteApiModel }
            output: number
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { header: { 'x-auth-key': string; 'x-auth-secret': string } } & {
              json: TaxDeleteApiModel
            } & { form: TaxDeleteApiModel }
            output: number
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { header: { 'x-auth-key': string; 'x-auth-secret': string } } & {
              json: TaxDeleteApiModel
            } & { form: TaxDeleteApiModel }
            output: number
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { header: { 'x-auth-key': string; 'x-auth-secret': string } } & {
              json: TaxDeleteApiModel
            } & { form: TaxDeleteApiModel }
            output: number
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/tax/new': {
      $post:
        | {
            input: { header: { 'x-auth-key': string; 'x-auth-secret': string } } & {
              json: TaxCreateApiModel
            } & { form: TaxCreateApiModel }
            output: number
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'x-auth-key': string; 'x-auth-secret': string } } & {
              json: TaxCreateApiModel
            } & { form: TaxCreateApiModel }
            output: number
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { header: { 'x-auth-key': string; 'x-auth-secret': string } } & {
              json: TaxCreateApiModel
            } & { form: TaxCreateApiModel }
            output: number
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { header: { 'x-auth-key': string; 'x-auth-secret': string } } & {
              json: TaxCreateApiModel
            } & { form: TaxCreateApiModel }
            output: number
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { header: { 'x-auth-key': string; 'x-auth-secret': string } } & {
              json: TaxCreateApiModel
            } & { form: TaxCreateApiModel }
            output: number
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/tax/update': {
      $post: {
        input: { header: { 'x-auth-key': string; 'x-auth-secret': string } } & {
          json: TaxUpdateApiModel
        } & { form: TaxUpdateApiModel }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/api/worktype/all': {
      $get:
        | {
            input: { header: { 'x-auth-key': string; 'x-auth-secret': string } }
            output: WorkTypeDetailsApiModel[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'x-auth-key': string; 'x-auth-secret': string } }
            output: WorkTypeDetailsApiModel[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { header: { 'x-auth-key': string; 'x-auth-secret': string } }
            output: WorkTypeDetailsApiModel[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { header: { 'x-auth-key': string; 'x-auth-secret': string } }
            output: WorkTypeDetailsApiModel[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { header: { 'x-auth-key': string; 'x-auth-secret': string } }
            output: WorkTypeDetailsApiModel[]
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/worktype/delete': {
      $post:
        | {
            input: { header: { 'x-auth-key': string; 'x-auth-secret': string } } & {
              json: WorkTypeDeleteApiModel
            } & { form: WorkTypeDeleteApiModel }
            output: number
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'x-auth-key': string; 'x-auth-secret': string } } & {
              json: WorkTypeDeleteApiModel
            } & { form: WorkTypeDeleteApiModel }
            output: number
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { header: { 'x-auth-key': string; 'x-auth-secret': string } } & {
              json: WorkTypeDeleteApiModel
            } & { form: WorkTypeDeleteApiModel }
            output: number
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { header: { 'x-auth-key': string; 'x-auth-secret': string } } & {
              json: WorkTypeDeleteApiModel
            } & { form: WorkTypeDeleteApiModel }
            output: number
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { header: { 'x-auth-key': string; 'x-auth-secret': string } } & {
              json: WorkTypeDeleteApiModel
            } & { form: WorkTypeDeleteApiModel }
            output: number
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/worktype/details': {
      $get:
        | {
            input: { query: { workTypeId: number } } & {
              header: { 'x-auth-key': string; 'x-auth-secret': string }
            }
            output: WorkTypeDetailsApiModel
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { workTypeId: number } } & {
              header: { 'x-auth-key': string; 'x-auth-secret': string }
            }
            output: WorkTypeDetailsApiModel
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { workTypeId: number } } & {
              header: { 'x-auth-key': string; 'x-auth-secret': string }
            }
            output: WorkTypeDetailsApiModel
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { workTypeId: number } } & {
              header: { 'x-auth-key': string; 'x-auth-secret': string }
            }
            output: WorkTypeDetailsApiModel
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { workTypeId: number } } & {
              header: { 'x-auth-key': string; 'x-auth-secret': string }
            }
            output: WorkTypeDetailsApiModel
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/worktype/new': {
      $post:
        | {
            input: { header: { 'x-auth-key': string; 'x-auth-secret': string } } & {
              json: WorkTypeCreateApiModel
            } & { form: WorkTypeCreateApiModel }
            output: number
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'x-auth-key': string; 'x-auth-secret': string } } & {
              json: WorkTypeCreateApiModel
            } & { form: WorkTypeCreateApiModel }
            output: number
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { header: { 'x-auth-key': string; 'x-auth-secret': string } } & {
              json: WorkTypeCreateApiModel
            } & { form: WorkTypeCreateApiModel }
            output: number
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { header: { 'x-auth-key': string; 'x-auth-secret': string } } & {
              json: WorkTypeCreateApiModel
            } & { form: WorkTypeCreateApiModel }
            output: number
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { header: { 'x-auth-key': string; 'x-auth-secret': string } } & {
              json: WorkTypeCreateApiModel
            } & { form: WorkTypeCreateApiModel }
            output: number
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/worktype/search': {
      $get:
        | {
            input: {
              query: {
                'queryOptions.query'?: string | undefined
                'queryOptions.orderBy'?: string | undefined
                'queryOptions.order'?: 'None' | 'Asc' | 'Desc' | undefined
                'queryOptions.page'?: number | undefined
                'queryOptions.pageSize'?: number | undefined
              }
            } & { header: { 'x-auth-key': string; 'x-auth-secret': string } }
            output: WorkTypeDetailsApiModel[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                'queryOptions.query'?: string | undefined
                'queryOptions.orderBy'?: string | undefined
                'queryOptions.order'?: 'None' | 'Asc' | 'Desc' | undefined
                'queryOptions.page'?: number | undefined
                'queryOptions.pageSize'?: number | undefined
              }
            } & { header: { 'x-auth-key': string; 'x-auth-secret': string } }
            output: WorkTypeDetailsApiModel[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                'queryOptions.query'?: string | undefined
                'queryOptions.orderBy'?: string | undefined
                'queryOptions.order'?: 'None' | 'Asc' | 'Desc' | undefined
                'queryOptions.page'?: number | undefined
                'queryOptions.pageSize'?: number | undefined
              }
            } & { header: { 'x-auth-key': string; 'x-auth-secret': string } }
            output: WorkTypeDetailsApiModel[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                'queryOptions.query'?: string | undefined
                'queryOptions.orderBy'?: string | undefined
                'queryOptions.order'?: 'None' | 'Asc' | 'Desc' | undefined
                'queryOptions.page'?: number | undefined
                'queryOptions.pageSize'?: number | undefined
              }
            } & { header: { 'x-auth-key': string; 'x-auth-secret': string } }
            output: WorkTypeDetailsApiModel[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                'queryOptions.query'?: string | undefined
                'queryOptions.orderBy'?: string | undefined
                'queryOptions.order'?: 'None' | 'Asc' | 'Desc' | undefined
                'queryOptions.page'?: number | undefined
                'queryOptions.pageSize'?: number | undefined
              }
            } & { header: { 'x-auth-key': string; 'x-auth-secret': string } }
            output: WorkTypeDetailsApiModel[]
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/worktype/update': {
      $post: {
        input: { header: { 'x-auth-key': string; 'x-auth-secret': string } } & {
          json: WorkTypeUpdateApiModel
        } & { form: WorkTypeUpdateApiModel }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  },
  '/'
>
export default routes
