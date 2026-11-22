type PricingConfiguration = {
  blockAccount?: boolean | undefined
  blockedRoutes?: (string[] | null) | undefined
  defaultMarkup: number
  hasMigrated: boolean
  hasOptionalBasePrice?: boolean | undefined
  hasPriceInheritance?: boolean | undefined
  migrationStatus?: string | undefined
  minimumMarkups: { [x: string]: number }
  priceInheritance?: string | undefined
  priceTableLimit?: (number | null) | undefined
  priceTableSelectionStrategy?: string | undefined
  priceVariation?:
    | { lowerLimit?: (number | null) | undefined; upperLimit?: (number | null) | undefined }
    | undefined
  sellersToOverride?: { [x: string]: unknown }[] | undefined
  tradePolicyConfigs?:
    | {
        minimumMarkup?: number | undefined
        rulesShouldAffectListPrice?: boolean | undefined
        tradePolicyId?: string | undefined
      }[]
    | undefined
}
type DateRange = { from: string; to: string }
type FixedPrice = {
  dateRange?: DateRange | undefined
  listPrice: number | null
  minQuantity: number
  tradePolicyId: string
  value: number
}
type Getprice = {
  basePrice: number
  costPrice: number
  fixedPrices: FixedPrice[]
  itemId: string
  listPrice: number
  markup: number
}
type Getcomputedprice = {
  costPrice?: number | undefined
  listPrice: number
  priceValidUntil: string
  sellingPrice: number
  tradePolicyId: string
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/pricing/config': {
      $get: {
        input: { header: { 'Content-Type': string; Accept: string } }
        output: PricingConfiguration
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/pricing/migration': {
      $get: {
        input: { header: { 'Content-Type': string; Accept: string } }
        output: { hasMigrated?: boolean | undefined; isActive?: boolean | undefined }
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/pricing/pipeline/catalog': {
      $get: {
        input: { header: { 'Content-Type': string; Accept: string } }
        output: {
          percentualModifier?: number | undefined
          rules?:
            | {
                context?:
                  | {
                      brands?: { [x: string]: string } | undefined
                      categories?: { [x: string]: string } | undefined
                      dateRange?:
                        | ({ from?: string | undefined; to?: string | undefined } | null)
                        | undefined
                      internalCategories?: ({ [x: string]: unknown } | null) | undefined
                      markupRange?:
                        | ({ from?: number | undefined; to?: number | undefined } | null)
                        | undefined
                      stockStatuses?: ({ [x: string]: unknown } | null) | undefined
                    }
                  | undefined
                id?: number | undefined
              }[]
            | undefined
          tradePolicyId?: string | undefined
        }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/pricing/pipeline/catalog/:priceTableId': {
      $get:
        | {
            input: { param: { priceTableId: string } } & {
              header: { 'Content-Type': string; Accept: string }
            }
            output: {
              percentualModifier?: number | undefined
              rules?:
                | {
                    context?:
                      | {
                          brands?: { [x: string]: string } | undefined
                          categories?: { [x: string]: string } | undefined
                          dateRange?:
                            | ({ from?: string | undefined; to?: string | undefined } | null)
                            | undefined
                          internalCategories?: ({ [x: string]: unknown } | null) | undefined
                          markupRange?:
                            | ({ from?: number | undefined; to?: number | undefined } | null)
                            | undefined
                          stockStatuses?: ({ [x: string]: unknown } | null) | undefined
                        }
                      | undefined
                    id?: number | undefined
                  }[]
                | undefined
              tradePolicyId?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { priceTableId: string } } & {
              header: { 'Content-Type': string; Accept: string }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { priceTableId: string } } & {
              header: { 'Content-Type': string; Accept: string }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { priceTableId: string } } & {
              header: { 'Content-Type': string; Accept: string }
            }
            output: {}
            outputFormat: string
            status: 429
          }
      $put: {
        input: { param: { priceTableId: string } } & {
          header: { 'Content-Type': string; Accept: string }
        } & {
          json: {
            rules: {
              context: {
                brands: { [x: string]: string }
                categories: { [x: string]: string }
                dateRange: { from: string; to: string }
                internalCategories?: ({ [x: string]: unknown } | null) | undefined
                markupRange: { from: number; to: number } | null
                stockStatuses?: ({ [x: string]: unknown } | null) | undefined
              }
              id: number
              percentualModifier: number
            }[]
          }
        }
        output: {}
        outputFormat: string
        status: 201
      }
    }
  } & {
    '/pricing/prices/:itemId': {
      $delete: {
        input: { param: { itemId: number } } & {
          header: { 'Content-Type': string; Accept: string }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $get: {
        input: { param: { itemId: number } } & {
          header: { 'Content-Type': string; Accept: string }
        }
        output: Getprice
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { itemId: number } } & {
          header: { Accept: string; 'Content-Type': string }
        } & {
          json: {
            basePrice: number
            costPrice?: number | undefined
            fixedPrices?:
              | {
                  dateRange?: { from: string; to: string } | undefined
                  listPrice?: number | undefined
                  minQuantity: number
                  tradePolicyId: string
                  value: number
                }[]
              | undefined
            listPrice: number
            markup: number
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/pricing/prices/:itemId/computed/:priceTableId': {
      $get: {
        input: { param: { itemId: number; priceTableId: string } } & {
          query: { categoryIds: number; brandId: number; quantity: number }
        } & { header: { 'Content-Type': string; Accept: string } }
        output: Getcomputedprice
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/pricing/prices/:itemId/fixed': {
      $get: {
        input: { param: { itemId: number } } & {
          header: { Accept: string; 'Content-Type': string }
        }
        output: FixedPrice[]
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/pricing/prices/:itemId/fixed/:priceTableId': {
      $delete: {
        input: { param: { itemId: number; priceTableId: string } } & {
          header: { 'Content-Type': string; Accept: string }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $get: {
        input: { param: { itemId: number; priceTableId: string } } & {
          header: { 'Content-Type': string; Accept: string }
        }
        output: FixedPrice[]
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { param: { itemId: number; priceTableId: string } } & {
          header: { 'Content-Type': string; Accept: string }
        } & {
          json: {
            dateRange?: { from: string; to: string } | undefined
            listPrice?: number | undefined
            minQuantity: number
            value: number
          }[]
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/pricing/tables': {
      $get: {
        input: { header: { 'Content-Type': string; Accept: string } }
        output: string[]
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
