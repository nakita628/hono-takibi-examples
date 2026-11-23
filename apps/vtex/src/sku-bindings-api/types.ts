declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/catalog/pvt/skusellers/:skuId': {
      $get: {
        input: { param: { skuId: string } } & { header: { 'Content-Type': string; Accept: string } }
        output: {
          Id?: number | undefined
          IsActive?: boolean | undefined
          LastUpdateDate?: string | undefined
          SalesPolicy?: number | undefined
          SellerId?: string | undefined
          SellerSkuId?: string | undefined
          StockKeepingUnitId?: number | undefined
        }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/sku-binding/pvt/skuseller/activate/:sellerId/:skuSellerId': {
      $post: {
        input: { param: { sellerId: string; skuSellerId: string } } & {
          header: { 'Content-Type': string; Accept: string }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/sku-binding/pvt/skuseller/admin': {
      $get: {
        input: {
          query: {
            sellerId?: string | undefined
            skuId?: string | undefined
            sellerSkuId?: string | undefined
            isActive?: boolean | undefined
            size?: string | undefined
          }
        } & { header: { 'Content-Type': string; Accept: string } }
        output: {
          IsActive?: boolean | undefined
          IsPersisted?: boolean | undefined
          IsRemoved?: boolean | undefined
          RequestedUpdateDate?: (string | null) | undefined
          SellerId?: string | undefined
          SellerStockKeepingUnitId?: string | undefined
          SkuSellerId?: number | undefined
          StockKeepingUnitId?: number | undefined
          UpdateDate?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/sku-binding/pvt/skuseller/changenotification/:sellerId/:sellerSkuId': {
      $post:
        | {
            input: { param: { sellerId: string; sellerSkuId: string } } & {
              header: { 'Content-Type': string; Accept: string }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { sellerId: string; sellerSkuId: string } } & {
              header: { 'Content-Type': string; Accept: string }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { sellerId: string; sellerSkuId: string } } & {
              header: { 'Content-Type': string; Accept: string }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { sellerId: string; sellerSkuId: string } } & {
              header: { 'Content-Type': string; Accept: string }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { sellerId: string; sellerSkuId: string } } & {
              header: { 'Content-Type': string; Accept: string }
            }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/sku-binding/pvt/skuseller/changenotification/:skuId': {
      $post:
        | {
            input: { param: { skuId: string } } & {
              header: { 'Content-Type': string; Accept: string }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { skuId: string } } & {
              header: { 'Content-Type': string; Accept: string }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { skuId: string } } & {
              header: { 'Content-Type': string; Accept: string }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { skuId: string } } & {
              header: { 'Content-Type': string; Accept: string }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { skuId: string } } & {
              header: { 'Content-Type': string; Accept: string }
            }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/sku-binding/pvt/skuseller/inactivate/:sellerId/:skuSellerId': {
      $post: {
        input: { param: { sellerId: string; skuSellerId: string } } & {
          header: { 'Content-Type': string; Accept: string }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/sku-binding/pvt/skuseller/insertion': {
      $post:
        | {
            input: { header: { 'Content-Type': string; Accept: string } } & {
              json: {
                IsActive: boolean
                SellerId: string
                SellerStockKeepingUnitId: string
                StockKeepingUnitId: number
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { header: { 'Content-Type': string; Accept: string } } & {
              json: {
                IsActive: boolean
                SellerId: string
                SellerStockKeepingUnitId: string
                StockKeepingUnitId: number
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { header: { 'Content-Type': string; Accept: string } } & {
              json: {
                IsActive: boolean
                SellerId: string
                SellerStockKeepingUnitId: string
                StockKeepingUnitId: number
              }
            }
            output: {}
            outputFormat: string
            status: 409
          }
    }
  } & {
    '/sku-binding/pvt/skuseller/list/bysellerId/:sellerId': {
      $get: {
        input: { param: { sellerId: string } } & {
          header: { 'Content-Type': string; Accept: string }
        }
        output: {
          FreightCommissionPercentage?: (number | null) | undefined
          IsActive?: boolean | undefined
          ProductCommissionPercentage?: (number | null) | undefined
          SellerId?: string | undefined
          SellerStockKeepingUnitId?: string | undefined
          StockKeepingUnitId?: number | undefined
        }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/sku-binding/pvt/skuseller/paged/sellerid/:sellerId': {
      $get: {
        input: { param: { sellerId: string } } & { query: { page: string; size: string } } & {
          header: { 'Content-Type': string; Accept: string }
        }
        output: {
          FreightCommissionPercentage?: (number | null) | undefined
          IsActive?: boolean | undefined
          ProductCommissionPercentage?: (number | null) | undefined
          SellerId?: string | undefined
          SellerStockKeepingUnitId?: string | undefined
          StockKeepingUnitId?: number | undefined
        }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/sku-binding/pvt/skuseller/remove/:sellerId/:sellerSkuId': {
      $post: {
        input: { param: { sellerId: string; sellerSkuId: string } } & {
          header: { 'Content-Type': string; Accept: string }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/sku-binding/pvt/skuseller/:sellerId/:sellerSkuId': {
      $get: {
        input: { param: { sellerId: string; sellerSkuId: string } } & {
          header: { 'Content-Type': string; Accept: string }
        }
        output: {
          IsActive: boolean
          IsPersisted: boolean
          IsRemoved: boolean
          RequestedUpdateDate: string | null
          SellerId: string
          SellerStockKeepingUnitId: string
          SkuSellerId: number
          StockKeepingUnitId: number
          UpdateDate: string
        }
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { sellerId: string; sellerSkuId: string } } & {
          header: { 'Content-Type': string; Accept: string }
        } & { json: { StockKeepingUnitId: number } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  },
  '/'
>
export default routes
