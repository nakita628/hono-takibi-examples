type AddressAddressType = 'Billing' | 'Delivery' | 'Order' | 'Inventory' | 'Unknown'
type Address = {
  city?: string | undefined
  country?: string | undefined
  line1?: string | undefined
  line2?: string | undefined
  postalCode?: string | undefined
  region?: string | undefined
  type?: AddressAddressType | undefined
}
type PhoneNumberNumber = string | null
type DateTime = string
type Customer = {
  id: string
  addresses?: Address[] | undefined
  customerName?: string | undefined
  defaultCurrency?: {} | undefined
  emailAddress?: string | undefined
  note?: string | undefined
  phone?: PhoneNumberNumber | undefined
  createdDate?: DateTime | undefined
  modifiedDate?: DateTime | undefined
  sourceModifiedDate?: DateTime | undefined
}
type HRef = { href?: string | undefined }
type Links = { current: HRef; next?: HRef | undefined; previous?: HRef | undefined; self: HRef }
type Customers = {
  results?: Customer[] | undefined
  _links: Links
  pageNumber: number
  pageSize: number
  totalResults: number
}
type TransactionAllOf1Currency = string
type TransactionTransactionSourceType = 'Fee' | 'Order' | 'Payment' | 'ServiceCharge' | 'Unknown'
type TransactionTransactionSourceRef = { id: string; type: TransactionTransactionSourceType }
type DisputeDisputeStatus =
  | 'Won'
  | 'Lost'
  | 'Accepted'
  | 'Processing'
  | 'ChargeRefunded'
  | 'EvidenceRequired'
  | 'InquiryEvidenceRequired'
  | 'InquiryProcessing'
  | 'InquiryClosed'
  | 'WaitingThirdParty'
  | 'Unknown'
type Dispute = {
  id: string
  currency: TransactionAllOf1Currency
  disputedTransactions?: TransactionTransactionSourceRef | undefined
  dueDate?: DateTime | undefined
  reason?: string | undefined
  status?: DisputeDisputeStatus | undefined
  totalAmount?: number | undefined
  createdDate?: DateTime | undefined
  modifiedDate?: DateTime | undefined
  sourceModifiedDate?: DateTime | undefined
}
type Disputes = {
  results?: Dispute[] | undefined
  _links: Links
  pageNumber: number
  pageSize: number
  totalResults: number
}
type CompanyInfoAccountBalance = {
  available?: number | undefined
  currency?: {} | undefined
  pending?: number | undefined
  reserved?: number | undefined
}
type PhoneNumberPhoneNumberType = 'Primary' | 'Landline' | 'Mobile' | 'Fax' | 'Unknown'
type PhoneNumber = { number: PhoneNumberNumber; type: PhoneNumberPhoneNumberType }
type CompanyInfo = {
  accountBalances?: CompanyInfoAccountBalance[] | undefined
  addresses?: Address[] | undefined
  baseCurrency?: TransactionAllOf1Currency | undefined
  commercePlatformRef?: string | undefined
  companyLegalName?: string | undefined
  companyName?: string | undefined
  phoneNumbers?: PhoneNumber[] | undefined
  registrationNumber?: string | undefined
  sourceUrls?: { [x: string]: string } | undefined
  webLinks?:
    | { type?: 'Website' | 'Social' | 'Unknown' | undefined; url?: string | undefined }[]
    | undefined
  createdDate?: DateTime | undefined
  modifiedDate?: DateTime | undefined
  sourceModifiedDate?: DateTime | undefined
}
type Locations = {
  id: string
  address?: Address | undefined
  name?: string | undefined
  modifiedDate?: DateTime | undefined
  sourceModifiedDate?: DateTime | undefined
}
type LocationsResponse = {
  results?: Locations[] | undefined
  _links: Links
  pageNumber: number
  pageSize: number
  totalResults: number
}
type CustomerCustomerRef = { id: string; name: string }
type LocationsLocationRef = { id: string; name: string }
type OrderOrderDiscountAllocation = { name?: string | undefined; totalAmount?: number | undefined }
type ProductProductRef = { id: string; name: string }
type ProductProductVariantRef = { id: string; name: string }
type TaxComponentTaxComponentRef = { id: string; name: string }
type TaxComponentTaxComponentAllocation = {
  rate?: (number | null) | undefined
  taxComponentRef?: TaxComponentTaxComponentRef | undefined
}
type OrderOrderLineItem = {
  id: string
  discountAllocations?: OrderOrderDiscountAllocation[] | undefined
  productRef?: ProductProductRef | undefined
  productVariantRef?: ProductProductVariantRef | undefined
  quantity?: number | undefined
  taxPercentage?: number | undefined
  taxes?: TaxComponentTaxComponentAllocation[] | undefined
  totalAmount?: number | undefined
  totalTaxAmount?: number | undefined
  unitPrice?: number | undefined
}
type PaymentPaymentStatus = 'Pending' | 'Authorized' | 'Paid' | 'Failed' | 'Cancelled' | 'Unknown'
type PaymentPaymentType =
  | 'Cash'
  | 'Card'
  | 'Invoice'
  | 'OnlineCard'
  | 'Swish'
  | 'Vipps'
  | 'Mobile'
  | 'StoreCredit'
  | 'Paypal'
  | 'Custom'
  | 'Prepaid'
  | 'Unknown'
type PaymentPaymentRef = {
  id: string
  amount?: (number | null) | undefined
  currency?: TransactionAllOf1Currency | undefined
  dueDate?: DateTime | undefined
  paymentProvider?: string | undefined
  status?: PaymentPaymentStatus | undefined
  type?: PaymentPaymentType | undefined
  createdDate?: DateTime | undefined
  modifiedDate?: DateTime | undefined
  sourceModifiedDate?: DateTime | undefined
}
type OrderServiceChargeType = 'Generic' | 'Shipping' | 'Overpayment' | 'Unknown'
type OrderServiceCharge = {
  description?: string | undefined
  quantity?: number | undefined
  taxAmount?: number | undefined
  taxPercentage?: number | undefined
  taxes?: TaxComponentTaxComponentAllocation[] | undefined
  totalAmount?: number | undefined
  type?: OrderServiceChargeType | undefined
}
type Order = {
  id: string
  closedDate?: DateTime | undefined
  country?: string | undefined
  currency?: {} | undefined
  customerRef?: CustomerCustomerRef | undefined
  locationRef?: LocationsLocationRef | undefined
  orderLineItems?: OrderOrderLineItem[] | undefined
  orderNumber?: string | undefined
  payments?: PaymentPaymentRef[] | undefined
  serviceCharges?: OrderServiceCharge[] | undefined
  totalAmount?: number | undefined
  totalDiscount?: number | undefined
  totalGratuity?: number | undefined
  totalRefund?: number | undefined
  totalTaxAmount?: number | undefined
  createdDate?: DateTime | undefined
  modifiedDate?: DateTime | undefined
  sourceModifiedDate?: DateTime | undefined
}
type Orders = {
  results?: Order[] | undefined
  _links: Links
  pageNumber: number
  pageSize: number
  totalResults: number
}
type PaymentMethodPaymentMethodStatus = 'Active' | 'Archived' | 'Unknown'
type PaymentMethod = {
  id: string
  name?: string | undefined
  status?: PaymentMethodPaymentMethodStatus | undefined
  modifiedDate?: DateTime | undefined
  sourceModifiedDate?: DateTime | undefined
}
type PaymentMethods = {
  results?: PaymentMethod[] | undefined
  _links: Links
  pageNumber: number
  pageSize: number
  totalResults: number
}
type PaymentMethodPaymentMethodRef = { id: string; name: string }
type Payment = {
  id: string
  amount?: number | undefined
  currency?: TransactionAllOf1Currency | undefined
  dueDate?: DateTime | undefined
  paymentMethodRef?: PaymentMethodPaymentMethodRef | undefined
  paymentProvider?: string | undefined
  status?: PaymentPaymentStatus | undefined
  createdDate?: DateTime | undefined
  modifiedDate?: DateTime | undefined
  sourceModifiedDate?: DateTime | undefined
}
type Payments = {
  results?: Payment[] | undefined
  _links: Links
  pageNumber: number
  pageSize: number
  totalResults: number
}
type RecordRef = { id: string; type: string }
type ProductCategory = {
  ancestorRefs?: RecordRef[] | undefined
  hasChildren?: boolean | undefined
  id?: string | undefined
  name?: string | undefined
  modifiedDate?: DateTime | undefined
  sourceModifiedDate?: DateTime | undefined
}
type ProductCategories = {
  results?: ProductCategory[] | undefined
  _links: Links
  pageNumber: number
  pageSize: number
  totalResults: number
}
type ProductProductInventoryLocation = {
  locationRef?: LocationsLocationRef | undefined
  quantity?: number | undefined
}
type ProductProductInventory = {
  locations?: ProductProductInventoryLocation[] | undefined
  totalQuantity?: (number | null) | undefined
}
type ProductProductPrice = {
  currency?: TransactionAllOf1Currency | undefined
  unitPrice?: number | undefined
}
type ProductProductVariantStatus = 'Unknown' | 'Published' | 'Unpublished'
type ProductProductVariant = {
  id: string
  barcode?: string | undefined
  inventory?: ProductProductInventory[] | undefined
  isTaxEnabled?: boolean | undefined
  name?: string | undefined
  prices?: ProductProductPrice[] | undefined
  shippingRequired?: boolean | undefined
  sku?: string | undefined
  status?: ProductProductVariantStatus | undefined
  unitOfMeasure?: string | undefined
  vatPercentage?: number | undefined
  createdDate?: DateTime | undefined
  modifiedDate?: DateTime | undefined
  sourceModifiedDate?: DateTime | undefined
}
type Product = {
  id: string
  categorization?: string | undefined
  description?: string | undefined
  isGiftCard?: boolean | undefined
  name?: string | undefined
  variants?: ProductProductVariant[] | undefined
}
type Products = {
  results?: Product[] | undefined
  _links: Links
  pageNumber: number
  pageSize: number
  totalResults: number
}
type TaxComponent = {
  id: string
  isCompound?: boolean | undefined
  name?: string | undefined
  rate?: number | undefined
  modifiedDate?: DateTime | undefined
  sourceModifiedDate?: DateTime | undefined
}
type TaxComponents = { taxComponents?: TaxComponent[] | undefined }
type TransactionTransactionType =
  | 'Payment'
  | 'Refund'
  | 'Payout'
  | 'FailedPayout'
  | 'Transfer'
  | 'PaymentFee'
  | 'PaymentFeeRefund'
  | 'Unknown'
type Transaction = {
  id: string
  currency?: TransactionAllOf1Currency | undefined
  subType?: string | undefined
  totalAmount?: number | undefined
  transactionSourceRef?:
    | { id: string; type?: TransactionTransactionSourceType | undefined }
    | undefined
  type?: TransactionTransactionType | undefined
  createdDate?: DateTime | undefined
  sourceCreatedDate?: DateTime | undefined
  modifiedDate?: DateTime | undefined
  sourceModifiedDate?: DateTime | undefined
}
type Transactions = {
  results?: Transaction[] | undefined
  _links: Links
  pageNumber: number
  pageSize: number
  totalResults: number
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/companies/:companyId/connections/:connectionId/data/commerce-customers': {
      $get: {
        input: { param: { companyId: string; connectionId: string } } & {
          query: {
            page: number
            pageSize?: number | undefined
            query?: string | undefined
            orderBy?: string | undefined
          }
        }
        output: Customers
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/companies/:companyId/connections/:connectionId/data/commerce-disputes': {
      $get: {
        input: { param: { companyId: string; connectionId: string } } & {
          query: {
            page: number
            pageSize?: number | undefined
            query?: string | undefined
            orderBy?: string | undefined
          }
        }
        output: Disputes
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/companies/:companyId/connections/:connectionId/data/commerce-info': {
      $get: {
        input: { param: { companyId: string; connectionId: string } }
        output: CompanyInfo
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/companies/:companyId/connections/:connectionId/data/commerce-locations': {
      $get: {
        input: { param: { companyId: string; connectionId: string } }
        output: LocationsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/companies/:companyId/connections/:connectionId/data/commerce-orders': {
      $get: {
        input: { param: { companyId: string; connectionId: string } } & {
          query: {
            page: number
            pageSize?: number | undefined
            query?: string | undefined
            orderBy?: string | undefined
          }
        }
        output: Orders
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/companies/:companyId/connections/:connectionId/data/commerce-paymentMethods': {
      $get: {
        input: { param: { companyId: string; connectionId: string } } & {
          query: {
            page: number
            pageSize?: number | undefined
            query?: string | undefined
            orderBy?: string | undefined
          }
        }
        output: PaymentMethods
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/companies/:companyId/connections/:connectionId/data/commerce-payments': {
      $get: {
        input: { param: { companyId: string; connectionId: string } } & {
          query: {
            page: number
            pageSize?: number | undefined
            query?: string | undefined
            orderBy?: string | undefined
          }
        }
        output: Payments
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/companies/:companyId/connections/:connectionId/data/commerce-productCategories': {
      $get: {
        input: { param: { companyId: string; connectionId: string } } & {
          query: {
            page: number
            pageSize?: number | undefined
            query?: string | undefined
            orderBy?: string | undefined
          }
        }
        output: ProductCategories
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/companies/:companyId/connections/:connectionId/data/commerce-products': {
      $get: {
        input: { param: { companyId: string; connectionId: string } } & {
          query: {
            page: number
            pageSize?: number | undefined
            query?: string | undefined
            orderBy?: string | undefined
          }
        }
        output: Products
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/companies/:companyId/connections/:connectionId/data/commerce-taxComponents': {
      $get: {
        input: { param: { companyId: string; connectionId: string } }
        output: TaxComponents
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/companies/:companyId/connections/:connectionId/data/commerce-transactions': {
      $get: {
        input: { param: { companyId: string; connectionId: string } } & {
          query: {
            page: number
            pageSize?: number | undefined
            query?: string | undefined
            orderBy?: string | undefined
          }
        }
        output: Transactions
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
