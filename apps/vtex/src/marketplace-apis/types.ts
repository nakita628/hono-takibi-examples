type OffersPerSalesChannel = {
  AvailableQuantity: number
  ListPrice: number
  Price: number
  PriceWithoutDiscount: number
  SaleChannel: number
}
type Offer = {
  AvailableSalesChannels: string | null
  OffersPerSalesChannel: OffersPerSalesChannel[]
  SellerId: string
  SellerSkuId: string
}
type Sku2 = {
  EanId: string | null
  IsActive: boolean
  MainImage: { [x: string]: unknown }
  Name: string
  NameComplete: string
  Offers: Offer[]
  RefId: string | null
  SkuId: string
}
type Accountable = { email: string; name: string; phone: string }
type Address = {
  city: string
  complement: string
  neighborhood: string
  number: string
  postalcode: string
  state: string
  street: string
}
type CreateSellerLeadRequest = {
  accountId: string
  accountable: Accountable
  address: Address
  document: string
  email: string
  hasAcceptedLegalTerms: boolean
  salesChannel: string
  sellerAccountName: string
  sellerEmail: string
  sellerName: string
  sellerType: number
}
type AcceptSellerLeadRequest = {
  accountId: string
  accountable: Accountable
  address: Address
  document: string
  email: string
  hasAcceptedLegalTerms: boolean
  salesChannel: string
  sellerAccountName: string
  sellerEmail: string
  sellerName: string
  sellerType: number
}
type ResendSellerLeadRequestRequest = { status: string }
type AvailableSalesChannel = { id: number; isSelected: boolean; name: string }
type Groups = { id?: string | undefined; name?: string | undefined }
type UpsertSellerRequest = {
  CSCIdentification: string
  account: string
  allowHybridPayments: boolean
  availableSalesChannels: AvailableSalesChannel[]
  catalogSystemEndpoint: string
  channel: string
  deliveryPolicy: string
  description: string
  email: string
  exchangeReturnPolicy: string
  fulfillmentEndpoint: string
  fulfillmentSellerId: string
  groups?: Groups[] | undefined
  id: string
  isActive: boolean
  isBetterScope: boolean
  isVtex: boolean
  name: string
  password: string | null
  salesChannel: string
  score: number
  securityPrivacyPolicy: string | null
  sellerCommissionConfiguration: { [x: string]: unknown }
  sellerType: number
  taxCode: string
  trustPolicy: string
  user: string | null
}
type BulkUpsertSellerCommissionsRequest = {
  categoryFullPath: string | null
  categoryId: string
  freightCommissionPercentage: number
  productCommissionPercentage: number
}
type UpsertSellerCommissionsRequest = {
  categoryFullPath: string | null
  categoryId: string
  freightCommissionPercentage: number
  productCommissionPercentage: number
}
type UpsertMappingRequest = { marketplaceSalesChannel: number; sellerChannel: string }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/notificator/:sellerId/changenotification/:skuId/inventory': {
      $post: {
        input: { param: { sellerId: string; skuId: string } } & {
          query: { accountName: string; environment: string }
        } & { header: { Accept: string; 'Content-Type': string } }
        output: {}
        outputFormat: string
        status: 202
      }
    }
  } & {
    '/notificator/:sellerId/changenotification/:skuId/price': {
      $post: {
        input: { param: { sellerId: string; skuId: string } } & {
          query: { accountName: string; environment: string }
        } & { header: { 'Content-Type': string; Accept: string } }
        output: {}
        outputFormat: string
        status: 202
      }
    }
  } & {
    '/offer-manager/pvt/offers': {
      $get: {
        input: {
          query: {
            sort?: string | undefined
            rows?: number | undefined
            start?: number | undefined
            fq?: string | undefined
            accountName: string
            environment: string
          }
        } & { header: { 'Content-Type': string; Accept: string } }
        output: {
          BrandId: number
          CategoryId: number
          LastModified: string
          ProductId: string
          ProductName: string
          Skus: Sku2[]
        }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/offer-manager/pvt/product/:productId': {
      $get: {
        input: { param: { productId: string } } & {
          query: { accountName: string; environment: string }
        } & { header: { 'Content-Type': string; Accept: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/offer-manager/pvt/product/:productId/sku/:skuId': {
      $get: {
        input: { param: { productId: string; skuId: string } } & {
          query: { accountName: string; environment: string }
        } & { header: { 'Content-Type': string; Accept: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/seller-register/pvt/seller-leads': {
      $get: {
        input: {
          query: {
            accountName: string
            environment: string
            offset: number
            limit: number
            isConnected: string
            search: string
            status: string
            orderBy: string
          }
        } & { header: { Accept: string; 'Content-Type': string } }
        output: {}
        outputFormat: string
        status: 200
      }
      $post: {
        input: { query: { accountName: string; environment: string } } & {
          header: { Accept: string; 'Content-Type': string }
        } & { json: CreateSellerLeadRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/seller-register/pvt/seller-leads/:sellerLeadId': {
      $delete: {
        input: { param: { sellerLeadId: string } } & {
          query: { accountName: string; environment: string }
        } & { header: { Accept: string; 'Content-Type': string } }
        output: {}
        outputFormat: string
        status: 200
      }
      $get: {
        input: { param: { sellerLeadId: string } } & {
          query: { accountName: string; environment: string }
        } & { header: { Accept: string; 'Content-Type': string } }
        output: {}
        outputFormat: string
        status: 200
      }
      $put: {
        input: { param: { sellerLeadId: string } } & {
          query: { accountName: string; environment: string }
        } & { header: { Accept: string; 'Content-Type': string } } & {
          json: AcceptSellerLeadRequest
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/seller-register/pvt/seller-leads/:sellerLeadId/seller': {
      $put: {
        input: { param: { sellerLeadId: string } } & {
          query: { accountName: string; environment: string; isActive: boolean }
        } & { header: { Accept: string; 'Content-Type': string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/seller-register/pvt/seller-leads/:sellerLeadId/status': {
      $put: {
        input: { param: { sellerLeadId: string } } & {
          query: { accountName: string; environment: string }
        } & { header: { Accept: string; 'Content-Type': string } } & {
          json: ResendSellerLeadRequestRequest
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/seller-register/pvt/sellers': {
      $get: {
        input: {
          query: {
            accountName: string
            environment: string
            from?: number | undefined
            to?: number | undefined
            keyword?: string | undefined
            integration?: string | undefined
            'group '?: string | undefined
            isActive?: boolean | undefined
            isBetterScope?: boolean | undefined
            isVtex?: boolean | undefined
            sc?: string | undefined
            sellerType?: number | undefined
            sort?: string | undefined
          }
        } & { header: { Accept: string; 'Content-Type': string } }
        output: {}
        outputFormat: string
        status: 200
      }
      $post: {
        input: { query: { accountName: string; environment: string } } & {
          header: { Accept: string; 'Content-Type': string }
        } & { json: UpsertSellerRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/seller-register/pvt/sellers/:sellerId': {
      $get: {
        input: { param: { sellerId: string } } & {
          query: { accountName: string; environment: string; sc?: string | undefined }
        } & { header: { Accept: string; 'Content-Type': string } }
        output: {}
        outputFormat: string
        status: 200
      }
      $patch: {
        input: { param: { sellerId: string } } & {
          query: { accountName: string; environment: string }
        } & { header: { Accept: string; 'Content-Type': string } } & {
          json: { operation: string; path: string; value: boolean }[]
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/seller-register/pvt/sellers/:sellerId/commissions': {
      $get: {
        input: { param: { sellerId: string } } & {
          query: { accountName: string; environment: string }
        } & { header: { Accept: string; 'Content-Type': string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/seller-register/pvt/sellers/:sellerId/commissions/categories': {
      $put: {
        input: { param: { sellerId: string } } & {
          query: { accountName: string; environment: string }
        } & { header: { Accept: string; 'Content-Type': string } } & {
          json: BulkUpsertSellerCommissionsRequest[]
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/seller-register/pvt/sellers/:sellerId/commissions/:categoryId': {
      $delete: {
        input: { param: { sellerId: string; categoryId: string } } & {
          query: { accountName: string; environment: string }
        } & { header: { Accept: string; 'Content-Type': string } }
        output: {}
        outputFormat: string
        status: 200
      }
      $get: {
        input: { param: { sellerId: string; categoryId: string } } & {
          query: { accountName: string; environment: string }
        } & { header: { Accept: string; 'Content-Type': string } }
        output: {}
        outputFormat: string
        status: 200
      }
      $put: {
        input: { param: { sellerId: string; categoryId: string } } & {
          query: { accountName: string; environment: string }
        } & { header: { Accept: string; 'Content-Type': string } } & {
          json: UpsertSellerCommissionsRequest
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/seller-register/pvt/sellers/:sellerId/sales-channel/mapping': {
      $get: {
        input: { param: { sellerId: string } } & {
          query: { accountName: string; environment: string; an: string }
        } & { header: { 'Content-Type': string; Accept: string } }
        output: {
          marketplaceSalesChannel?: string | undefined
          sellerChannel?: string | undefined
        }[]
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { sellerId: string } } & {
          query: { accountName: string; environment: string; an: string }
        } & { header: { 'Content-Type': string; Accept: string } } & {
          json: UpsertMappingRequest[]
        }
        output: {
          marketplaceSalesChannel?: string | undefined
          sellerChannel?: string | undefined
        }[]
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
