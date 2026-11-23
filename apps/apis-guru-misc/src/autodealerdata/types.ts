type GenericResponse = {
  brandName?: string | undefined
  cacheTimeLimit?: number | undefined
  condition?: string | undefined
  data?: { [x: string]: unknown } | undefined
  modelName?: string | undefined
  msg?: string | undefined
  regionName?: string | undefined
}
type ValidationError = { loc: string[]; msg: string; type: string }
type HTTPValidationError = { detail?: ValidationError[] | undefined }
type BrandResp = {
  brandName?: string | undefined
  cacheTimeLimit?: number | undefined
  condition?: string | undefined
  data: string[]
  modelName?: string | undefined
  msg?: string | undefined
  regionName?: string | undefined
}
type DealershipData = {
  address: string
  dealerName: string
  ids: number[]
  state: string
  zipCode: number
}
type DealershipDataResp = {
  brandName?: string | undefined
  cacheTimeLimit?: number | undefined
  condition?: string | undefined
  data: DealershipData[]
  modelName?: string | undefined
  msg?: string | undefined
  regionName?: string | undefined
}
type DealershipDataPaginated = { dealers: DealershipData[]; maxPages: number; page: number }
type DealershipDataPaginatedResp = {
  brandName?: string | undefined
  cacheTimeLimit?: number | undefined
  condition?: string | undefined
  data: DealershipDataPaginated
  modelName?: string | undefined
  msg?: string | undefined
  regionName?: string | undefined
}
type ModelDict = { modelName: string }
type ModelResp = {
  brandName?: string | undefined
  cacheTimeLimit?: number | undefined
  condition?: string | undefined
  data: ModelDict[]
  modelName?: string | undefined
  msg?: string | undefined
  regionName?: string | undefined
}
type RegionResp = {
  brandName?: string | undefined
  cacheTimeLimit?: number | undefined
  condition?: string | undefined
  data: string[]
  modelName?: string | undefined
  msg?: string | undefined
  regionName?: string | undefined
}
type JSONWebToken = { createdOn?: number | undefined; expires?: number | undefined; token: string }
type BasicModelStats = {
  average: number
  median: number
  name: string
  pVariance: number
  stdDev: number
}
type BasicModelStatsResp = {
  brandName?: string | undefined
  cacheTimeLimit?: number | undefined
  condition?: string | undefined
  data: BasicModelStats[]
  modelName?: string | undefined
  msg?: string | undefined
  regionName?: string | undefined
}
type Listing = {
  askPrice: number
  brandName: string
  color?: string | undefined
  dealerID: number
  firstSeen: string
  interiorColor?: string | undefined
  isNew: boolean
  lastSeen: string
  mileage?: number | undefined
  modelName: string
  msrp: number
  vin: string
  vinDecode?: { [x: string]: unknown } | undefined
  year: number
}
type ListingRespPaginated = { listings: Listing[]; maxPages: number; page: number }
type ListingResp = {
  brandName?: string | undefined
  cacheTimeLimit?: number | undefined
  condition?: string | undefined
  data: ListingRespPaginated
  endDate?: string | undefined
  modelName?: string | undefined
  msg?: string | undefined
  regionName?: string | undefined
  startDate?: string | undefined
}
type EndpointList = { endPoints?: string[] | undefined }
type SubUserJSONWebToken = {
  createdOn?: number | undefined
  domain: string
  endPoints?: string[] | undefined
  expires?: number | undefined
  token: string
  uuid: string
}
type ModelYearDistEntry = {
  brandName: string
  modelName: string
  percentOfMarket: number
  year: number
}
type ModelYearDistResp = {
  brandName?: string | undefined
  cacheTimeLimit?: number | undefined
  condition?: string | undefined
  data: ModelYearDistEntry[]
  modelName?: string | undefined
  msg?: string | undefined
  regionName?: string | undefined
}
type BucketEntry = { bucket: number; modelName: string; percentOfMarket: number }
type BucketResp = {
  brandName?: string | undefined
  cacheTimeLimit?: number | undefined
  condition?: string | undefined
  data: BucketEntry[]
  modelName?: string | undefined
  msg?: string | undefined
  regionName?: string | undefined
}
type SimilarSalePriceData = {
  daysBack: number
  mileCount: number
  milesAvg: number
  milesStdDev: number
  newCount: number
  newSaleAvg: number
  newSaleStdDev: number
  usedCount: number
  usedSaleAvg: number
  usedSaleStdDev: number
}
type SimilarSalePriceResp = {
  brandName?: string | undefined
  cacheTimeLimit?: number | undefined
  condition?: string | undefined
  data: SimilarSalePriceData
  endDate: string
  modelName?: string | undefined
  msg?: string | undefined
  regionName?: string | undefined
  startDate: string
}
type TopModelEntry = {
  brandMarketShare: number
  brandName: string
  modelName: string
  percentOfBrandSales: number
  percentOfTopSales: number
}
type TopModelResp = {
  brandName?: string | undefined
  cacheTimeLimit?: number | undefined
  condition?: string | undefined
  data: TopModelEntry[]
  modelName?: string | undefined
  msg?: string | undefined
  regionName?: string | undefined
}
type VehHistory = {
  dealerName: string
  firstSeen: string
  lastSeen: string
  miles: number
  new: boolean
  price: number
  state: string
  zip: number
}
type VehHistoryData = { data: VehHistory[]; vin: string }
type HistoryResp = {
  brandName?: string | undefined
  cacheTimeLimit?: number | undefined
  condition?: string | undefined
  data: VehHistoryData
  modelName?: string | undefined
  msg?: string | undefined
  regionName?: string | undefined
}
type BooleanResp = {
  brandName?: string | undefined
  cacheTimeLimit?: number | undefined
  condition?: string | undefined
  data: boolean
  modelName?: string | undefined
  msg?: string | undefined
  regionName?: string | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/daysSupply': {
      $get:
        | {
            input: { query: { jwt: string; brandName: string; regionName?: string | undefined } }
            output: GenericResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { jwt: string; brandName: string; regionName?: string | undefined } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/daysToSell': {
      $get:
        | {
            input: { query: { jwt: string; brandName: string; regionName?: string | undefined } }
            output: GenericResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { jwt: string; brandName: string; regionName?: string | undefined } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/getBrands': {
      $get:
        | {
            input: { query: { jwt: string } }
            output: BrandResp
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { jwt: string } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/getDealers': {
      $get:
        | {
            input: { query: { jwt: string; zipCode: number } }
            output: DealershipDataResp
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { jwt: string; zipCode: number } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/getDealersByID': {
      $get:
        | {
            input: { query: { jwt: string; dealerID: number } }
            output: DealershipDataResp
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { jwt: string; dealerID: number } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/getDealersByRegion': {
      $get:
        | {
            input: {
              query: { jwt: string; regionName?: string | undefined; page?: number | undefined }
            }
            output: DealershipDataPaginatedResp
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { jwt: string; regionName?: string | undefined; page?: number | undefined }
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/getInactiveModels': {
      $get:
        | {
            input: { query: { jwt: string; brandName: string } }
            output: ModelResp
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { jwt: string; brandName: string } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/getModels': {
      $get:
        | {
            input: { query: { jwt: string; brandName: string } }
            output: ModelResp
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { jwt: string; brandName: string } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/getRegionBrandMarketShare': {
      $get:
        | {
            input: { query: { jwt: string; brandName: string; regionName?: string | undefined } }
            output: GenericResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { jwt: string; brandName: string; regionName?: string | undefined } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/getRegionMarketShare': {
      $get:
        | {
            input: { query: { jwt: string; regionName?: string | undefined } }
            output: GenericResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { jwt: string; regionName?: string | undefined } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/getRegions': {
      $get:
        | {
            input: { query: { jwt: string } }
            output: RegionResp
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { jwt: string } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/getSubUserKeys': {
      $get:
        | {
            input: { query: { apiID: string; apiKey: string } }
            output: GenericResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { apiID: string; apiKey: string } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/getToken': {
      $get:
        | {
            input: { query: { apiID: string; apiKey: string } }
            output: JSONWebToken
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { apiID: string; apiKey: string } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
      $post:
        | {
            input: { query: { apiID: string; apiKey: string } }
            output: JSONWebToken
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { apiID: string; apiKey: string } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/listPrice': {
      $get:
        | {
            input: { query: { jwt: string; brandName: string; regionName?: string | undefined } }
            output: BasicModelStatsResp
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { jwt: string; brandName: string; regionName?: string | undefined } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/listings': {
      $get:
        | {
            input: {
              query: {
                jwt: string
                dealerID: number
                page?: number | undefined
                newCars?: boolean | undefined
              }
            }
            output: ListingResp
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                jwt: string
                dealerID: number
                page?: number | undefined
                newCars?: boolean | undefined
              }
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/listings2': {
      $get:
        | {
            input: {
              query: {
                jwt: string
                dealerID?: number | undefined
                zipCode?: number | undefined
                latitude?: number | undefined
                longitude?: number | undefined
                radius?: number | undefined
                regionName?: string | undefined
                brandName?: string | undefined
                modelName?: string | undefined
                modelYear?: number | undefined
                mileageLow?: number | undefined
                mileageHigh?: number | undefined
                startDate?: string | undefined
                endDate?: string | undefined
                daysBack?: number | undefined
                page?: number | undefined
                newCars?: boolean | undefined
                extendedSearch?: boolean | undefined
              }
            }
            output: ListingResp
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                jwt: string
                dealerID?: number | undefined
                zipCode?: number | undefined
                latitude?: number | undefined
                longitude?: number | undefined
                radius?: number | undefined
                regionName?: string | undefined
                brandName?: string | undefined
                modelName?: string | undefined
                modelYear?: number | undefined
                mileageLow?: number | undefined
                mileageHigh?: number | undefined
                startDate?: string | undefined
                endDate?: string | undefined
                daysBack?: number | undefined
                page?: number | undefined
                newCars?: boolean | undefined
                extendedSearch?: boolean | undefined
              }
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/listingsByDate': {
      $get:
        | {
            input: {
              query: {
                jwt: string
                dealerID: number
                startDate: string
                endDate: string
                page?: number | undefined
                newCars?: boolean | undefined
              }
            }
            output: ListingResp
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                jwt: string
                dealerID: number
                startDate: string
                endDate: string
                page?: number | undefined
                newCars?: boolean | undefined
              }
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/listingsByRegion': {
      $get:
        | {
            input: {
              query: {
                jwt: string
                regionName: string
                modelName: string
                daysBack?: number | undefined
                page?: number | undefined
                newCars?: boolean | undefined
              }
            }
            output: ListingResp
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                jwt: string
                regionName: string
                modelName: string
                daysBack?: number | undefined
                page?: number | undefined
                newCars?: boolean | undefined
              }
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/listingsByRegionAndDate': {
      $get:
        | {
            input: {
              query: {
                jwt: string
                regionName: string
                modelName: string
                startDate: string
                endDate: string
                page?: number | undefined
                newCars?: boolean | undefined
              }
            }
            output: ListingResp
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                jwt: string
                regionName: string
                modelName: string
                startDate: string
                endDate: string
                page?: number | undefined
                newCars?: boolean | undefined
              }
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/listingsByZipCode': {
      $get:
        | {
            input: {
              query: {
                jwt: string
                zipCode: number
                page?: number | undefined
                newCars?: boolean | undefined
                modelName?: string | undefined
              }
            }
            output: ListingResp
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                jwt: string
                zipCode: number
                page?: number | undefined
                newCars?: boolean | undefined
                modelName?: string | undefined
              }
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/listingsByZipCodeAndDate': {
      $get:
        | {
            input: {
              query: {
                jwt: string
                zipCode: number
                startDate: string
                endDate: string
                page?: number | undefined
                newCars?: boolean | undefined
                modelName?: string | undefined
              }
            }
            output: ListingResp
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                jwt: string
                zipCode: number
                startDate: string
                endDate: string
                page?: number | undefined
                newCars?: boolean | undefined
                modelName?: string | undefined
              }
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/makeSubUserKey': {
      $post:
        | {
            input: { query: { apiID: string; apiKey: string; siteName?: string | undefined } } & {
              json: EndpointList
            }
            output: SubUserJSONWebToken
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { apiID: string; apiKey: string; siteName?: string | undefined } } & {
              json: EndpointList
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/modelYearDist': {
      $get:
        | {
            input: {
              query: {
                jwt: string
                modelName: string
                brandName: string
                regionName?: string | undefined
              }
            }
            output: ModelYearDistResp
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                jwt: string
                modelName: string
                brandName: string
                regionName?: string | undefined
              }
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/regionDailySales': {
      $get:
        | {
            input: { query: { jwt: string; brandName: string; regionName: string; day: string } }
            output: GenericResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { jwt: string; brandName: string; regionName: string; day: string } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/regionSales': {
      $get:
        | {
            input: { query: { jwt: string; brandName: string; regionName: string; month: string } }
            output: GenericResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { jwt: string; brandName: string; regionName: string; month: string } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/revokeSubUserKey': {
      $put:
        | {
            input: { query: { apiID: string; apiKey: string; subUserKeyUUID: string } }
            output: GenericResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { apiID: string; apiKey: string; subUserKeyUUID: string } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/salePrice': {
      $get:
        | {
            input: { query: { jwt: string; brandName: string; regionName?: string | undefined } }
            output: BasicModelStatsResp
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { jwt: string; brandName: string; regionName?: string | undefined } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/salePriceHistogram': {
      $get:
        | {
            input: {
              query: {
                jwt: string
                modelName: string
                brandName: string
                regionName?: string | undefined
              }
            }
            output: BucketResp
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                jwt: string
                modelName: string
                brandName: string
                regionName?: string | undefined
              }
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/similarSalePrice': {
      $get:
        | {
            input: {
              query: {
                jwt: string
                vin: string
                regionName?: string | undefined
                daysBack?: number | undefined
                sameYear?: boolean | undefined
              }
            }
            output: SimilarSalePriceResp
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                jwt: string
                vin: string
                regionName?: string | undefined
                daysBack?: number | undefined
                sameYear?: boolean | undefined
              }
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/topModels': {
      $get:
        | {
            input: { query: { jwt: string; regionName?: string | undefined } }
            output: TopModelResp
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { jwt: string; regionName?: string | undefined } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/valuation': {
      $get:
        | {
            input: {
              query: {
                jwt: string
                vin: string
                dealerID?: number | undefined
                zipCode?: number | undefined
                latitude?: number | undefined
                longitude?: number | undefined
                radius?: number | undefined
                regionName?: string | undefined
                mileageLow?: number | undefined
                mileageHigh?: number | undefined
                startDate?: string | undefined
                endDate?: string | undefined
                daysBack?: number | undefined
                newCars?: boolean | undefined
                extendedSearch?: boolean | undefined
                sameYear?: boolean | undefined
              }
            }
            output: SimilarSalePriceResp
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                jwt: string
                vin: string
                dealerID?: number | undefined
                zipCode?: number | undefined
                latitude?: number | undefined
                longitude?: number | undefined
                radius?: number | undefined
                regionName?: string | undefined
                mileageLow?: number | undefined
                mileageHigh?: number | undefined
                startDate?: string | undefined
                endDate?: string | undefined
                daysBack?: number | undefined
                newCars?: boolean | undefined
                extendedSearch?: boolean | undefined
                sameYear?: boolean | undefined
              }
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/vehicleHistory': {
      $get:
        | {
            input: { query: { jwt: string; vin: string } }
            output: HistoryResp
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { jwt: string; vin: string } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/vehicleSeen': {
      $get:
        | {
            input: { query: { jwt: string; vin: string; afterDate: string } }
            output: BooleanResp
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { jwt: string; vin: string; afterDate: string } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/vinDecode': {
      $get:
        | {
            input: {
              query: {
                jwt: string
                vin: string
                passEmpty?: boolean | undefined
                includeRecall?: boolean | undefined
              }
            }
            output: GenericResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                jwt: string
                vin: string
                passEmpty?: boolean | undefined
                includeRecall?: boolean | undefined
              }
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  },
  '/'
>
export default routes
