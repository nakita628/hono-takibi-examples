type Empty = { [x: string]: unknown }
type Certification = {
  authority?: string | undefined
  link?: string | undefined
  logo?: string | undefined
  name?: string | undefined
  validUntil?: string | undefined
  value?: string | undefined
}
type DestinationStatus = {
  destination?: string | undefined
  status?: 'UNKNOWN' | 'ACTIVE' | 'PENDING' | 'DISAPPROVED' | undefined
}
type Issue = {
  attribute?: string | undefined
  description?: string | undefined
  destination?: string | undefined
  resolution?: 'RESOLUTION_UNSPECIFIED' | 'USER_ACTION' | 'PENDING_PROCESSING' | undefined
  severity?: 'SEVERITY_UNSPECIFIED' | 'ERROR' | 'WARNING' | 'INFO' | undefined
  timestamp?: string | undefined
  title?: string | undefined
  type?: string | undefined
}
type ProductCertification = {
  brand?: string | undefined
  certification?: Certification[] | undefined
  countryCode?: string[] | undefined
  destinationStatuses?: DestinationStatus[] | undefined
  issues?: Issue[] | undefined
  mpn?: string[] | undefined
  name?: string | undefined
  productCode?: string[] | undefined
  productType?: string[] | undefined
  title?: string | undefined
}
type ListProductCertificationsResponse = {
  nextPageToken?: string | undefined
  productCertifications?: ProductCertification[] | undefined
}
type Image = {
  imageUrl?: string | undefined
  status?:
    | 'STATUS_UNSPECIFIED'
    | 'PENDING_PROCESSING'
    | 'PENDING_CRAWL'
    | 'OK'
    | 'ROBOTED'
    | 'XROBOTED'
    | 'CRAWL_ERROR'
    | 'PROCESSING_ERROR'
    | 'DECODING_ERROR'
    | 'TOO_BIG'
    | 'CRAWL_SKIPPED'
    | 'HOSTLOADED'
    | 'HTTP_404'
    | undefined
  type?: 'TYPE_UNSPECIFIED' | 'CRAWLED' | 'UPLOADED' | undefined
}
type Capacity = { unit?: string | undefined; value?: string | undefined }
type Count = { unit?: string | undefined; value?: string | undefined }
type FeatureDescription = {
  headline?: string | undefined
  image?: Image | undefined
  text?: string | undefined
}
type Grocery = {
  activeIngredients?: string | undefined
  alcoholByVolume?: number | undefined
  allergens?: string | undefined
  derivedNutritionClaim?: string[] | undefined
  directions?: string | undefined
  indications?: string | undefined
  ingredients?: string | undefined
  nutritionClaim?: string[] | undefined
  storageInstructions?: string | undefined
}
type FloatUnit = { amount?: number | undefined; unit?: string | undefined }
type VoluntaryNutritionFact = {
  dailyPercentage?: number | undefined
  name?: string | undefined
  value?: FloatUnit | undefined
}
type Nutrition = {
  addedSugars?: FloatUnit | undefined
  addedSugarsDailyPercentage?: number | undefined
  calcium?: FloatUnit | undefined
  calciumDailyPercentage?: number | undefined
  cholesterol?: FloatUnit | undefined
  cholesterolDailyPercentage?: number | undefined
  dietaryFiber?: FloatUnit | undefined
  dietaryFiberDailyPercentage?: number | undefined
  energy?: FloatUnit | undefined
  energyFromFat?: FloatUnit | undefined
  folateDailyPercentage?: number | undefined
  folateFolicAcid?: FloatUnit | undefined
  folateMcgDfe?: number | undefined
  iron?: FloatUnit | undefined
  ironDailyPercentage?: number | undefined
  monounsaturatedFat?: FloatUnit | undefined
  nutritionFactMeasure?: string | undefined
  polyols?: FloatUnit | undefined
  polyunsaturatedFat?: FloatUnit | undefined
  potassium?: FloatUnit | undefined
  potassiumDailyPercentage?: number | undefined
  preparedSizeDescription?: string | undefined
  protein?: FloatUnit | undefined
  proteinDailyPercentage?: number | undefined
  saturatedFat?: FloatUnit | undefined
  saturatedFatDailyPercentage?: number | undefined
  servingSizeDescription?: string | undefined
  servingSizeMeasure?: FloatUnit | undefined
  servingsPerContainer?: string | undefined
  sodium?: FloatUnit | undefined
  sodiumDailyPercentage?: number | undefined
  starch?: FloatUnit | undefined
  totalCarbohydrate?: FloatUnit | undefined
  totalCarbohydrateDailyPercentage?: number | undefined
  totalFat?: FloatUnit | undefined
  totalFatDailyPercentage?: number | undefined
  totalSugars?: FloatUnit | undefined
  totalSugarsDailyPercentage?: number | undefined
  transFat?: FloatUnit | undefined
  transFatDailyPercentage?: number | undefined
  vitaminD?: FloatUnit | undefined
  vitaminDDailyPercentage?: number | undefined
  voluntaryNutritionFact?: VoluntaryNutritionFact[] | undefined
}
type ProductDetail = {
  attributeName?: string | undefined
  attributeValue?: string | undefined
  sectionName?: string | undefined
}
type Price = { amount?: string | undefined; currency?: string | undefined }
type Attributes = {
  additionalImageLink?: Image[] | undefined
  ageGroup?: string | undefined
  brand?: string | undefined
  capacity?: Capacity | undefined
  color?: string | undefined
  count?: Count | undefined
  description?: string | undefined
  disclosureDate?: string | undefined
  excludedDestination?: string[] | undefined
  featureDescription?: FeatureDescription[] | undefined
  flavor?: string | undefined
  format?: string | undefined
  gender?: string | undefined
  grocery?: Grocery | undefined
  gtin?: string[] | undefined
  imageLink?: Image | undefined
  includedDestination?: string[] | undefined
  itemGroupId?: string | undefined
  material?: string | undefined
  mpn?: string | undefined
  nutrition?: Nutrition | undefined
  pattern?: string | undefined
  productDetail?: ProductDetail[] | undefined
  productHighlight?: string[] | undefined
  productLine?: string | undefined
  productName?: string | undefined
  productPageUrl?: string | undefined
  productType?: string[] | undefined
  releaseDate?: string | undefined
  richProductContent?: string[] | undefined
  scent?: string | undefined
  size?: string | undefined
  sizeSystem?: string | undefined
  sizeType?: string[] | undefined
  suggestedRetailPrice?: Price | undefined
  targetClientId?: string | undefined
  theme?: string | undefined
  title?: string | undefined
  videoLink?: string[] | undefined
}
type Product = {
  attributes?: Attributes | undefined
  contentLanguage?: string | undefined
  destinationStatuses?: DestinationStatus[] | undefined
  issues?: Issue[] | undefined
  name?: string | undefined
  parent?: string | undefined
  productId?: string | undefined
  targetCountry?: string | undefined
}
type ListProductsResponse = { nextPageToken?: string | undefined; products?: Product[] | undefined }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v1/:name': {
      $delete: {
        input: { param: { name: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: Empty
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { name: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: ProductCertification
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { name: string } } & {
          query: {
            updateMask?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: ProductCertification }
        output: ProductCertification
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:parent/productCertifications': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
            pageSize?: number | undefined
            pageToken?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: ListProductCertificationsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:parent/products': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
            include?: ('UNKNOWN' | 'ATTRIBUTES' | 'ISSUES' | 'DESTINATION_STATUSES')[] | undefined
            pageSize?: number | undefined
            pageToken?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: ListProductsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:parent/products/:name': {
      $delete: {
        input: { param: { parent: string; name: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: Empty
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { parent: string; name: string } } & {
          query: {
            include?: ('UNKNOWN' | 'ATTRIBUTES' | 'ISSUES' | 'DESTINATION_STATUSES')[] | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: Product
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { parent: string; name: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: Attributes }
        output: Empty
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
