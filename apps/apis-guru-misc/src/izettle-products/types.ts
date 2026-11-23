type CategoryDTO = { name: string; uuid: string }
type CategoryResponse = { categories: CategoryDTO[] }
type CreateCategoriesRequest = { categories: CategoryDTO[] }
type RenameCategoryRequest = { name: string }
type Price = {
  amount: bigint
  currencyId:
    | 'AED'
    | 'AFA'
    | 'AFN'
    | 'ALL'
    | 'AMD'
    | 'ANG'
    | 'AOA'
    | 'ARS'
    | 'AUD'
    | 'AWG'
    | 'AZM'
    | 'AZN'
    | 'BAM'
    | 'BBD'
    | 'BDT'
    | 'BGN'
    | 'BHD'
    | 'BIF'
    | 'BMD'
    | 'BND'
    | 'BOB'
    | 'BRL'
    | 'BSD'
    | 'BTN'
    | 'BWP'
    | 'BYR'
    | 'BZD'
    | 'CAD'
    | 'CDF'
    | 'CHF'
    | 'CLP'
    | 'CNY'
    | 'COP'
    | 'CRC'
    | 'CSD'
    | 'CUC'
    | 'CUP'
    | 'CVE'
    | 'CYP'
    | 'CZK'
    | 'DJF'
    | 'DKK'
    | 'DOP'
    | 'DZD'
    | 'EEK'
    | 'EGP'
    | 'ERN'
    | 'ETB'
    | 'EUR'
    | 'FJD'
    | 'FKP'
    | 'GBP'
    | 'GEL'
    | 'GGP'
    | 'GHC'
    | 'GHS'
    | 'GIP'
    | 'GMD'
    | 'GNF'
    | 'GTQ'
    | 'GYD'
    | 'HKD'
    | 'HNL'
    | 'HRK'
    | 'HTG'
    | 'HUF'
    | 'IDR'
    | 'ILS'
    | 'IMP'
    | 'INR'
    | 'IQD'
    | 'IRR'
    | 'ISK'
    | 'JEP'
    | 'JMD'
    | 'JOD'
    | 'JPY'
    | 'KES'
    | 'KGS'
    | 'KHR'
    | 'KMF'
    | 'KPW'
    | 'KRW'
    | 'KWD'
    | 'KYD'
    | 'KZT'
    | 'LAK'
    | 'LBP'
    | 'LKR'
    | 'LRD'
    | 'LSL'
    | 'LTL'
    | 'LVL'
    | 'LYD'
    | 'MAD'
    | 'MDL'
    | 'MGA'
    | 'MKD'
    | 'MMK'
    | 'MNT'
    | 'MOP'
    | 'MRO'
    | 'MTL'
    | 'MUR'
    | 'MVR'
    | 'MWK'
    | 'MXN'
    | 'MYR'
    | 'MZM'
    | 'MZN'
    | 'NAD'
    | 'NGN'
    | 'NIO'
    | 'NOK'
    | 'NPR'
    | 'NZD'
    | 'OMR'
    | 'PAB'
    | 'PEN'
    | 'PGK'
    | 'PHP'
    | 'PKR'
    | 'PLN'
    | 'PYG'
    | 'QAR'
    | 'RON'
    | 'RSD'
    | 'RUB'
    | 'RWF'
    | 'SAR'
    | 'SBD'
    | 'SCR'
    | 'SDD'
    | 'SDG'
    | 'SEK'
    | 'SGD'
    | 'SHP'
    | 'SIT'
    | 'SKK'
    | 'SLL'
    | 'SOS'
    | 'SPL'
    | 'SRD'
    | 'SSP'
    | 'STD'
    | 'SVC'
    | 'SYP'
    | 'SZL'
    | 'THB'
    | 'TJS'
    | 'TMM'
    | 'TMT'
    | 'TND'
    | 'TOP'
    | 'TRL'
    | 'TRY'
    | 'TTD'
    | 'TVD'
    | 'TWD'
    | 'TZS'
    | 'UAH'
    | 'UGX'
    | 'USD'
    | 'UYU'
    | 'UZS'
    | 'VEB'
    | 'VEF'
    | 'VND'
    | 'VUV'
    | 'WST'
    | 'XAF'
    | 'XAG'
    | 'XAU'
    | 'XCD'
    | 'XDR'
    | 'XOF'
    | 'XPD'
    | 'XPF'
    | 'XPT'
    | 'YER'
    | 'ZAR'
    | 'ZMK'
    | 'ZMW'
    | 'ZWD'
    | 'ZWL'
}
type DiscountResponse = {
  amount?: Price | undefined
  created: string
  description?: string | undefined
  etag: string
  externalReference?: string | undefined
  imageLookupKeys?: string[] | undefined
  name: string
  percentage?: number | undefined
  updated: string
  updatedBy?: string | undefined
  uuid: string
}
type DiscountRequest = {
  amount?: Price | undefined
  description?: string | undefined
  externalReference?: string | undefined
  imageLookupKeys?: string[] | undefined
  name?: string | undefined
  percentage?: number | undefined
  uuid: string
}
type ConstraintViolation = {
  constraintType?:
    | 'MUST_BE_FALSE'
    | 'MUST_BE_TRUE'
    | 'MUST_BE_LESS_THAN'
    | 'MUST_BE_GREATER_THAN'
    | 'DIGIT_OUT_OF_BOUNDS'
    | 'DATE_MUST_BE_IN_THE_FUTURE'
    | 'MUST_BE_LESS_OR_EQUAL_THAN'
    | 'MUST_BE_GREATER_OR_EQUAL_TO'
    | 'MUST_NOT_BE_NULL'
    | 'MUST_BE_NULL'
    | 'DATE_MUST_BE_IN_THE_PAST'
    | 'MUST_MATCH_PATTERN'
    | 'INVALID_SIZE'
    | 'INVALID_EMAIL'
    | 'MUST_NOT_BE_EMPTY'
    | 'INVALID_RANGE'
    | 'UNKNOWN'
    | undefined
  developerMessage?: string | undefined
  expected?: string | undefined
  propertyName?: string | undefined
  value?: string | undefined
}
type ErrorResponse = {
  developerMessage?: string | undefined
  errorType?: string | undefined
  violations?: ConstraintViolation[] | undefined
}
type LibraryImagesResponse = { imageUrls?: string[] | undefined }
type ImportResponse = {
  created?: string | undefined
  errorMessage?: string | undefined
  finished?: string | undefined
  items?: bigint | undefined
  state?: 'IMPORTING' | 'FINISHED_SUCCESS' | 'FINISHED_FAILED' | undefined
  uuid?: string | undefined
}
type SourceDTO = { external?: boolean | undefined; name?: string | undefined }
type MetadataDTO = { inPos: boolean; source?: SourceDTO | undefined }
type Presentation = {
  additionalImageUrls?: string[] | undefined
  displayImageUrl?: string | undefined
  mediaUrls?: string[] | undefined
}
type SearchEngineOptimization = {
  metaDescription?: string | undefined
  slug?: string | undefined
  title?: string | undefined
}
type Weight = { unit: 'kg' | 'g' | 'oz' | 'lb'; weight: number }
type Shipping = {
  shippingPricingModel?: 'FREE' | 'STANDARD' | undefined
  weight?: Weight | undefined
  weightInGrams?: bigint | undefined
}
type OnlineProperties = {
  description?: string | undefined
  presentation?: Presentation | undefined
  seo?: SearchEngineOptimization | undefined
  shipping?: Shipping | undefined
  status: 'ACTIVE' | 'HIDDEN'
  title?: string | undefined
}
type PresentationDTO = {
  backgroundColor?: string | undefined
  imageUrl?: string | undefined
  textColor?: string | undefined
}
type VariantOptionProperties = { imageUrl?: string | undefined; value: string }
type VariantOptionDefinition = { name: string; properties: VariantOptionProperties[] }
type VariantOptionDefinitions = { definitions: VariantOptionDefinition[] }
type VariantOption = { name: string; value: string }
type VariantDTO = {
  barcode?: string | undefined
  costPrice?: Price | undefined
  description?: string | undefined
  name?: string | undefined
  options?: VariantOption[] | undefined
  presentation?: PresentationDTO | undefined
  price?: Price | undefined
  sku?: string | undefined
  uuid: string
  vatPercentage?: number | undefined
}
type FullProductUpdateRequest = {
  categories?: string[] | undefined
  category?: CategoryDTO | undefined
  description?: string | undefined
  externalReference?: string | undefined
  imageLookupKeys?: string[] | undefined
  metadata?: MetadataDTO | undefined
  name: string
  online?: OnlineProperties | undefined
  presentation?: PresentationDTO | undefined
  taxCode?: string | undefined
  taxExempt?: boolean | undefined
  taxRates?: string[] | undefined
  unitName?: string | undefined
  uuid: string
  variantOptionDefinitions?: VariantOptionDefinitions | undefined
  variants?: VariantDTO[] | undefined
  vatPercentage?: number | undefined
}
type BulkImportRequest = { products: FullProductUpdateRequest[] }
type ProductResponse = {
  categories?: string[] | undefined
  category?: CategoryDTO | undefined
  created: string
  description?: string | undefined
  etag: string
  externalReference?: string | undefined
  imageLookupKeys?: string[] | undefined
  metadata?: MetadataDTO | undefined
  name: string
  online?: OnlineProperties | undefined
  presentation?: PresentationDTO | undefined
  taxCode?: string | undefined
  taxExempt?: boolean | undefined
  taxRates?: string[] | undefined
  unitName?: string | undefined
  updated: string
  updatedBy?: string | undefined
  uuid: string
  variantOptionDefinitions?: VariantOptionDefinitions | undefined
  variants: VariantDTO[]
  vatPercentage?: number | undefined
}
type LibraryResponse = {
  deletedDiscounts?: string[] | undefined
  deletedProducts?: string[] | undefined
  discounts?: DiscountResponse[] | undefined
  fromEventLogUuid?: string | undefined
  products?: ProductResponse[] | undefined
  untilEventLogUuid?: string | undefined
}
type ProductCreateRequest = {
  categories?: string[] | undefined
  category?: CategoryDTO | undefined
  createWithDefaultTax?: boolean | undefined
  description?: string | undefined
  externalReference?: string | undefined
  imageLookupKeys?: string[] | undefined
  metadata?: MetadataDTO | undefined
  name: string
  online?: OnlineProperties | undefined
  presentation?: PresentationDTO | undefined
  taxCode?: string | undefined
  taxExempt?: boolean | undefined
  taxRates?: string[] | undefined
  unitName?: string | undefined
  uuid: string
  variantOptionDefinitions?: VariantOptionDefinitions | undefined
  variants?: VariantDTO[] | undefined
  vatPercentage?: number | undefined
}
type CreateSlugRequest = { productName: string }
type SlugResponse = { productName?: string | undefined; slug?: string | undefined }
type Option = { name?: string | undefined; values?: string[] | undefined }
type VariantOptionsResponse = { options?: Option[] | undefined }
type ProductCountResponse = { productCount: number }
type TaxRate = {
  default?: boolean | undefined
  label: string
  percentage?: number | undefined
  uuid: string
}
type TaxRatesResponse = { taxRates?: TaxRate[] | undefined }
type TaxRatesCreateRequest = { taxRates: TaxRate[] }
type TaxRateProductCount = { count?: number | undefined; taxRateUuid?: string | undefined }
type TaxRateProductCountResponse = { counts?: TaxRateProductCount[] | undefined }
type TaxSettingsResponse = {
  organizationUuid?: string | undefined
  taxationMode?: 'EXCLUSIVE' | 'INCLUSIVE' | undefined
  taxationType?: 'NONE' | 'SALES_TAX' | 'VAT' | undefined
}
type TaxSettingsUpdateRequest = { taxationMode: 'EXCLUSIVE' | 'INCLUSIVE' }
type TaxRateUpdateRequest = {
  default?: boolean | undefined
  label?: string | undefined
  percentage?: number | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/organizations/:organizationUuid/categories/v2': {
      $get: {
        input: { param: { organizationUuid: string } }
        output: CategoryResponse
        outputFormat: 'json'
        status: 200
      }
      $post:
        | {
            input: { param: { organizationUuid: string } } & { json: CreateCategoriesRequest }
            output: {}
            outputFormat: string
            status: 201
          }
        | {
            input: { param: { organizationUuid: string } } & { json: CreateCategoriesRequest }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { organizationUuid: string } } & { json: CreateCategoriesRequest }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/organizations/:organizationUuid/categories/v2/:categoryUuid': {
      $delete:
        | {
            input: { param: { organizationUuid: string; categoryUuid: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { organizationUuid: string; categoryUuid: string } }
            output: {}
            outputFormat: string
            status: 404
          }
      $patch:
        | {
            input: { param: { organizationUuid: string; categoryUuid: string } } & {
              json: RenameCategoryRequest
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { organizationUuid: string; categoryUuid: string } } & {
              json: RenameCategoryRequest
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { organizationUuid: string; categoryUuid: string } } & {
              json: RenameCategoryRequest
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/organizations/:organizationUuid/discounts': {
      $get: {
        input: { param: { organizationUuid: string } }
        output: DiscountResponse[]
        outputFormat: 'json'
        status: 200
      }
      $post:
        | {
            input: { param: { organizationUuid: string } } & { json: DiscountRequest }
            output: {}
            outputFormat: string
            status: 201
          }
        | {
            input: { param: { organizationUuid: string } } & { json: DiscountRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/organizations/:organizationUuid/discounts/:discountUuid': {
      $delete:
        | {
            input: { param: { organizationUuid: string; discountUuid: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { organizationUuid: string; discountUuid: string } }
            output: {}
            outputFormat: string
            status: 404
          }
      $get:
        | {
            input: { param: { organizationUuid: string; discountUuid: string } } & {
              header: { 'If-None-Match'?: string | undefined }
            }
            output: DiscountResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organizationUuid: string; discountUuid: string } } & {
              header: { 'If-None-Match'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 304
          }
        | {
            input: { param: { organizationUuid: string; discountUuid: string } } & {
              header: { 'If-None-Match'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 404
          }
      $put:
        | {
            input: { param: { organizationUuid: string; discountUuid: string } } & {
              header: { 'If-Match'?: string | undefined }
            } & { json: DiscountRequest }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { organizationUuid: string; discountUuid: string } } & {
              header: { 'If-Match'?: string | undefined }
            } & { json: DiscountRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organizationUuid: string; discountUuid: string } } & {
              header: { 'If-Match'?: string | undefined }
            } & { json: DiscountRequest }
            output: {}
            outputFormat: string
            status: 412
          }
    }
  } & {
    '/organizations/:organizationUuid/images': {
      $get: {
        input: { param: { organizationUuid: string } }
        output: LibraryImagesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/organizations/:organizationUuid/import/status': {
      $get:
        | {
            input: { param: { organizationUuid: string } }
            output: ImportResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organizationUuid: string } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/organizations/:organizationUuid/import/status/:importUuid': {
      $get:
        | {
            input: { param: { organizationUuid: string; importUuid: string } }
            output: ImportResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organizationUuid: string; importUuid: string } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/organizations/:organizationUuid/import/v2': {
      $post:
        | {
            input: { param: { organizationUuid: string } } & { json: BulkImportRequest }
            output: ImportResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organizationUuid: string } } & { json: BulkImportRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/organizations/:organizationUuid/library': {
      $get:
        | {
            input: { param: { organizationUuid: string } } & {
              query: {
                eventLogUuid?: string | undefined
                limit?: number | undefined
                offset?: string | undefined
                all?: boolean | undefined
              }
            }
            output: LibraryResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organizationUuid: string } } & {
              query: {
                eventLogUuid?: string | undefined
                limit?: number | undefined
                offset?: string | undefined
                all?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 412
          }
    }
  } & {
    '/organizations/:organizationUuid/products': {
      $delete: {
        input: { param: { organizationUuid: string } } & { query: { uuid: string[] } }
        output: {}
        outputFormat: string
        status: 204
      }
      $get: {
        input: { param: { organizationUuid: string } }
        output: ProductResponse[]
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { organizationUuid: string } } & {
          query: { returnEntity?: boolean | undefined }
        } & { json: ProductCreateRequest }
        output: ProductResponse
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/organizations/:organizationUuid/products/online/slug': {
      $post: {
        input: { param: { organizationUuid: string } } & { json: CreateSlugRequest }
        output: SlugResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/organizations/:organizationUuid/products/options': {
      $get: {
        input: { param: { organizationUuid: string } }
        output: VariantOptionsResponse[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/organizations/:organizationUuid/products/v2': {
      $get: {
        input: { param: { organizationUuid: string } } & { query: { sort?: boolean | undefined } }
        output: ProductResponse[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/organizations/:organizationUuid/products/v2/count': {
      $get: {
        input: { param: { organizationUuid: string } }
        output: ProductCountResponse[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/organizations/:organizationUuid/products/v2/:productUuid': {
      $put:
        | {
            input: { param: { organizationUuid: string; productUuid: string } } & {
              header: { 'If-Match'?: string | undefined }
            } & { json: FullProductUpdateRequest }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { organizationUuid: string; productUuid: string } } & {
              header: { 'If-Match'?: string | undefined }
            } & { json: FullProductUpdateRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organizationUuid: string; productUuid: string } } & {
              header: { 'If-Match'?: string | undefined }
            } & { json: FullProductUpdateRequest }
            output: {}
            outputFormat: string
            status: 412
          }
    }
  } & {
    '/organizations/:organizationUuid/products/:productUuid': {
      $delete:
        | {
            input: { param: { organizationUuid: string; productUuid: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { organizationUuid: string; productUuid: string } }
            output: {}
            outputFormat: string
            status: 404
          }
      $get:
        | {
            input: { param: { organizationUuid: string; productUuid: string } } & {
              header: { 'If-None-Match'?: string | undefined }
            }
            output: ProductResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organizationUuid: string; productUuid: string } } & {
              header: { 'If-None-Match'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 304
          }
        | {
            input: { param: { organizationUuid: string; productUuid: string } } & {
              header: { 'If-None-Match'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { organizationUuid: string; productUuid: string } } & {
              header: { 'If-None-Match'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/v1/taxes': {
      $get:
        | { input: {}; output: TaxRatesResponse[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 403 }
      $post:
        | {
            input: { json: TaxRatesCreateRequest }
            output: TaxRatesResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: TaxRatesCreateRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | { input: { json: TaxRatesCreateRequest }; output: {}; outputFormat: string; status: 403 }
    }
  } & {
    '/v1/taxes/count': {
      $get:
        | { input: {}; output: TaxRateProductCountResponse; outputFormat: 'json'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 403 }
    }
  } & {
    '/v1/taxes/settings': {
      $get:
        | { input: {}; output: TaxSettingsResponse; outputFormat: 'json'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 403 }
      $put:
        | {
            input: { json: TaxSettingsUpdateRequest }
            output: TaxSettingsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: TaxSettingsUpdateRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: TaxSettingsUpdateRequest }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/v1/taxes/:taxRateUuid': {
      $delete:
        | {
            input: { param: { taxRateUuid: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { taxRateUuid: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { taxRateUuid: string } }
            output: {}
            outputFormat: string
            status: 404
          }
      $get:
        | {
            input: { param: { taxRateUuid: string } }
            output: TaxRate
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { taxRateUuid: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { taxRateUuid: string } }
            output: {}
            outputFormat: string
            status: 404
          }
      $put:
        | {
            input: { param: { taxRateUuid: string } } & { json: TaxRateUpdateRequest }
            output: TaxRate
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { taxRateUuid: string } } & { json: TaxRateUpdateRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { taxRateUuid: string } } & { json: TaxRateUpdateRequest }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { taxRateUuid: string } } & { json: TaxRateUpdateRequest }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  },
  '/'
>
export default routes
