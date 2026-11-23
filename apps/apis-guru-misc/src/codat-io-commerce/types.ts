type Address = {
  city?: string | undefined
  country?: string | undefined
  line1?: string | undefined
  line2?: string | undefined
  postalCode?: string | undefined
  region?: string | undefined
  type?: 'Billing' | 'Delivery' | 'Order' | 'Inventory' | 'Unknown' | undefined
}
type DateTime = string
type Customer = {
  id: string
  addresses?: Address[] | undefined
  customerName?: string | undefined
  defaultCurrency?: {} | undefined
  emailAddress?: string | undefined
  note?: string | undefined
  phone?: unknown | undefined
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
type Dispute = {
  id: string
  currency: string
  disputedTransactions?:
    | { id: string; type: 'Fee' | 'Order' | 'Payment' | 'ServiceCharge' | 'Unknown' }
    | undefined
  dueDate?: DateTime | undefined
  reason?: string | undefined
  status?:
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
    | undefined
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
type PhoneNumber = {
  number: string | null
  type: 'Primary' | 'Landline' | 'Mobile' | 'Fax' | 'Unknown'
}
type CompanyInfo = {
  accountBalances?:
    | {
        available?: number | undefined
        currency?: {} | undefined
        pending?: number | undefined
        reserved?: number | undefined
      }[]
    | undefined
  addresses?: Address[] | undefined
  baseCurrency?: string | undefined
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
type Order = {
  id: string
  closedDate?: DateTime | undefined
  country?: string | undefined
  currency?: {} | undefined
  customerRef?: { id: string; name: string } | undefined
  locationRef?: { id: string; name: string } | undefined
  orderLineItems?:
    | {
        id: string
        discountAllocations?:
          | { name?: string | undefined; totalAmount?: number | undefined }[]
          | undefined
        productRef?: { id: string; name: string } | undefined
        productVariantRef?: { id: string; name: string } | undefined
        quantity?: number | undefined
        taxPercentage?: number | undefined
        taxes?:
          | {
              rate?: (number | null) | undefined
              taxComponentRef?: { id: string; name: string } | undefined
            }[]
          | undefined
        totalAmount?: number | undefined
        totalTaxAmount?: number | undefined
        unitPrice?: number | undefined
      }[]
    | undefined
  orderNumber?: string | undefined
  payments?:
    | {
        id: string
        amount?: (number | null) | undefined
        currency?: string | undefined
        dueDate?: DateTime | undefined
        paymentProvider?: string | undefined
        status?: 'Pending' | 'Authorized' | 'Paid' | 'Failed' | 'Cancelled' | 'Unknown' | undefined
        type?:
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
          | undefined
        createdDate?: DateTime | undefined
        modifiedDate?: DateTime | undefined
        sourceModifiedDate?: DateTime | undefined
      }[]
    | undefined
  serviceCharges?:
    | {
        description?: string | undefined
        quantity?: number | undefined
        taxAmount?: number | undefined
        taxPercentage?: number | undefined
        taxes?:
          | {
              rate?: (number | null) | undefined
              taxComponentRef?: { id: string; name: string } | undefined
            }[]
          | undefined
        totalAmount?: number | undefined
        type?: 'Generic' | 'Shipping' | 'Overpayment' | 'Unknown' | undefined
      }[]
    | undefined
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
type PaymentMethod = {
  id: string
  name?: string | undefined
  status?: 'Active' | 'Archived' | 'Unknown' | undefined
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
type Payment = {
  id: string
  amount?: number | undefined
  currency?: string | undefined
  dueDate?: DateTime | undefined
  paymentMethodRef?: { id: string; name: string } | undefined
  paymentProvider?: string | undefined
  status?: 'Pending' | 'Authorized' | 'Paid' | 'Failed' | 'Cancelled' | 'Unknown' | undefined
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
type Product = {
  id: string
  categorization?: string | undefined
  description?: string | undefined
  isGiftCard?: boolean | undefined
  name?: string | undefined
  variants?:
    | {
        id: string
        barcode?: string | undefined
        inventory?:
          | {
              locations?:
                | {
                    locationRef?: { id: string; name: string } | undefined
                    quantity?: number | undefined
                  }[]
                | undefined
              totalQuantity?: (number | null) | undefined
            }[]
          | undefined
        isTaxEnabled?: boolean | undefined
        name?: string | undefined
        prices?:
          | { currency?: (string | null) | undefined; unitPrice?: number | undefined }[]
          | undefined
        shippingRequired?: boolean | undefined
        sku?: string | undefined
        status?: 'Unknown' | 'Published' | 'Unpublished' | undefined
        unitOfMeasure?: string | undefined
        vatPercentage?: number | undefined
        createdDate?: DateTime | undefined
        modifiedDate?: DateTime | undefined
        sourceModifiedDate?: DateTime | undefined
      }[]
    | undefined
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
type Transaction = {
  id: string
  currency?: string | undefined
  subType?: string | undefined
  totalAmount?: number | undefined
  transactionSourceRef?:
    | { id: string; type?: 'Fee' | 'Order' | 'Payment' | 'ServiceCharge' | 'Unknown' | undefined }
    | undefined
  type?:
    | 'Payment'
    | 'Refund'
    | 'Payout'
    | 'FailedPayout'
    | 'Transfer'
    | 'PaymentFee'
    | 'PaymentFeeRefund'
    | 'Unknown'
    | undefined
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
