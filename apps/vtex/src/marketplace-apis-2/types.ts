type Matcher = {
  Description?: (string | null) | undefined
  IsActive: boolean
  MatcherId: string
  UpdatesNotificationEndpoint: string | null
  'hook-base-address': string
}
type Score = { Approve: number; Reject: number }
type SaveaccountconfigRequest = {
  MatchFlux: string
  Matchers: Matcher[]
  Score: Score
  SpecificationsMapping: string[]
}
type SaveautoapproveforaccountRequest = { Enabled: boolean }
type SaveautoapproveforaccountsellerRequest = { Enabled: boolean }
type PutselleraccountconfigRequest = {
  mapping: { [x: string]: unknown } | null
  matchFlux: string
  sellerId: string
}
type Image = { imageName: string; imageUrl: string }
type ProductSpecification = { fieldName?: string | undefined; fieldValues?: string[] | undefined }
type SkuSpecification = { fieldName?: string | undefined; fieldValues?: string[] | undefined }
type SaveSuggestionRequest = {
  AvailableQuantity: number
  BrandName: string
  CategoryFullPath: string
  EAN: string
  Height: number
  Images: Image[]
  Length: number
  MeasurementUnit?: string | undefined
  Pricing: {
    Currency?: string | undefined
    CurrencySymbol?: string | undefined
    SalePrice?: number | undefined
  }
  ProductDescription: string
  ProductId: string
  ProductName: string
  ProductSpecifications?: ProductSpecification[] | undefined
  RefId: string
  SellerId: string
  SellerStockKeepingUnitId?: number | undefined
  SkuName: string
  SkuSpecifications?: SkuSpecification[] | undefined
  UnitMultiplier?: number | undefined
  Weight: number
  Width: number
}
type Product = {
  brandId: number
  categoryId: number
  description: string
  name: string
  specifications: string | null
}
type Images = { [x: string]: unknown }[]
type Specifications = { Embalagem: string }
type Sku = {
  eans: string[] | null
  height: number
  images: Images
  length: number
  measurementUnit: string | null
  name: string
  refId: string | null
  specifications: Specifications
  unitMultiplier: number
  weight: number
  width: number
}
type MatchRequest = {
  matchType: string
  matcherId: string
  product?: Product | undefined
  productRef?: (string | null) | undefined
  score: string
  sku?: Sku | undefined
  skuRef?: (string | null) | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/suggestions': {
      $get: {
        input: {
          query: {
            accountName: string
            q?: string | undefined
            type?: string | undefined
            seller?: string | undefined
            status?: string | undefined
            hasmapping?: string | undefined
            matcherid?: string | undefined
            _from?: number | undefined
            _to?: number | undefined
          }
        } & { header: { Accept: string; 'Content-Type': string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/suggestions/configuration': {
      $get: {
        input: { query: { accountName: string } } & {
          header: { Accept: string; 'Content-Type': string }
        }
        output: {
          MatchFlux?: string | undefined
          Matchers?: { [x: string]: unknown }[] | undefined
          Rules?: { [x: string]: unknown } | undefined
          Score?: { [x: string]: unknown } | undefined
          SpecificationsMapping?: { [x: string]: unknown }[] | undefined
        }
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { query: { accountName: string } } & {
          header: { Accept: string; 'Content-Type': string }
        } & { json: SaveaccountconfigRequest }
        output: {
          MatchFlux?: string | undefined
          Matchers?: { [x: string]: unknown }[] | undefined
          Rules?: { Item?: number[] | undefined; Product?: string[] | undefined } | undefined
          Score?: { Approve?: number | undefined; Reject?: number | undefined } | undefined
          SpecificationsMapping?: { [x: string]: unknown }[] | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/suggestions/configuration/autoapproval/toggle': {
      $get: {
        input: { query: { sellerId: string; accountName: string } } & {
          header: { Accept: string; 'Content-Type': string }
        }
        output: { Enabled?: boolean | undefined }
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { query: { accountName: string } } & {
          header: { Accept: string; 'Content-Type': string }
        } & { json: SaveautoapproveforaccountRequest }
        output: { Enabled?: boolean | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/suggestions/configuration/autoapproval/toggle/seller/:sellerId': {
      $put: {
        input: { param: { sellerId: string } } & { query: { accountName: string } } & {
          header: { Accept: string; 'Content-Type': string }
        } & { json: SaveautoapproveforaccountsellerRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/suggestions/configuration/seller/:sellerId': {
      $get: {
        input: { param: { sellerId: string } } & { query: { accountName: string } } & {
          header: { Accept: string; 'Content-Type': string }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $put: {
        input: { param: { sellerId: string } } & { query: { accountName: string } } & {
          header: { Accept: string; 'Content-Type': string }
        } & { json: PutselleraccountconfigRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/suggestions/matches/action/:actionName': {
      $put: {
        input: { param: { actionName: string } } & { query: { accountName: string } } & {
          header: { 'Content-Type': string; Accept: string }
        } & { json: { [x: string]: unknown } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/suggestions/:sellerId/:sellerSkuId': {
      $delete: {
        input: { param: { sellerId: string; sellerSkuId: string } } & {
          query: { accountName: string }
        } & { header: { Accept: string; 'Content-Type': string } }
        output: {}
        outputFormat: string
        status: 200
      }
      $get: {
        input: { param: { sellerId: string; sellerSkuId: string } } & {
          query: { accountName: string }
        } & { header: { Accept: string; 'Content-Type': string } }
        output: {}
        outputFormat: string
        status: 200
      }
      $put: {
        input: { param: { sellerId: string; sellerSkuId: string } } & {
          query: { accountName: string }
        } & { header: { Accept: string; 'Content-Type': string } } & { json: SaveSuggestionRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/suggestions/:sellerId/:sellerskuid/versions': {
      $get: {
        input: { param: { sellerId: string; sellerskuid: string } } & {
          query: { accountName: string }
        } & { header: { Accept: string; 'Content-Type': string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/suggestions/:sellerId/:sellerskuid/versions/:version': {
      $get: {
        input: { param: { sellerId: string; sellerskuid: string; version: string } } & {
          query: { accountName: string }
        } & { header: { Accept: string; 'Content-Type': string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/suggestions/:sellerId/:sellerskuid/versions/:version/matches/:matchid': {
      $put: {
        input: {
          param: { sellerId: string; sellerskuid: string; version: string; matchid: string }
        } & { query: { accountName: string } } & {
          header: { Accept: string; 'Content-Type': string }
        } & { json: MatchRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  },
  '/'
>
export default routes
