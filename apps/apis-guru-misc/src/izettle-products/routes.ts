import { createRoute, z } from '@hono/zod-openapi'

const CategoryDTOSchema = z
  .object({ name: z.string().min(0).max(100), uuid: z.uuid() })
  .openapi({ required: ['name', 'uuid'] })
  .openapi('CategoryDTO')

const SourceDTOSchema = z
  .object({ external: z.boolean().exactOptional(), name: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('SourceDTO')

const MetadataDTOSchema = z
  .object({ inPos: z.boolean(), source: SourceDTOSchema.exactOptional() })
  .openapi({ required: ['inPos'] })
  .openapi('MetadataDTO')

const PresentationSchema = z
  .object({
    additionalImageUrls: z.array(z.url()).min(0).max(25).exactOptional(),
    displayImageUrl: z.url().exactOptional(),
    mediaUrls: z.array(z.url()).min(0).max(8).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Presentation')

const SearchEngineOptimizationSchema = z
  .object({
    metaDescription: z.string().min(0).max(320).exactOptional(),
    slug: z.string().min(1).max(256).exactOptional(),
    title: z.string().min(0).max(256).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('SearchEngineOptimization')

const WeightSchema = z
  .object({ unit: z.enum(['kg', 'g', 'oz', 'lb']), weight: z.number().nonnegative() })
  .openapi({ required: ['unit', 'weight'] })
  .openapi('Weight')

const ShippingSchema = z
  .object({
    shippingPricingModel: z.enum(['FREE', 'STANDARD']).exactOptional(),
    weight: WeightSchema.exactOptional(),
    weightInGrams: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(0n).max(2147483647n),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', minimum: 0, maximum: 2147483647 }),
  })
  .openapi({ required: [] })
  .openapi('Shipping')

const OnlinePropertiesSchema = z
  .object({
    description: z.string().min(0).max(3500).exactOptional(),
    presentation: PresentationSchema.exactOptional(),
    seo: SearchEngineOptimizationSchema.exactOptional(),
    shipping: ShippingSchema.exactOptional(),
    status: z.enum(['ACTIVE', 'HIDDEN']),
    title: z.string().min(0).max(256).exactOptional(),
  })
  .openapi({ required: ['status'] })
  .openapi('OnlineProperties')

const PresentationDTOSchema = z
  .object({
    backgroundColor: z.string().exactOptional(),
    imageUrl: z.string().exactOptional(),
    textColor: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PresentationDTO')

const VariantOptionPropertiesSchema = z
  .object({
    imageUrl: z.string().min(1).max(256).exactOptional(),
    value: z.string().min(1).max(256),
  })
  .openapi({ required: ['value'] })
  .openapi('VariantOptionProperties')

const VariantOptionDefinitionSchema = z
  .object({
    name: z.string().min(1).max(30),
    properties: z.array(VariantOptionPropertiesSchema).min(1).max(99),
  })
  .openapi({ required: ['name', 'properties'] })
  .openapi('VariantOptionDefinition')

const VariantOptionDefinitionsSchema = z
  .object({ definitions: z.array(VariantOptionDefinitionSchema).min(1).max(3) })
  .openapi({ required: ['definitions'] })
  .openapi('VariantOptionDefinitions')

const PriceSchema = z
  .object({
    amount: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(0n),
      )
      .openapi({ type: 'integer', format: 'int64', minimum: 0 }),
    currencyId: z.enum([
      'AED',
      'AFA',
      'AFN',
      'ALL',
      'AMD',
      'ANG',
      'AOA',
      'ARS',
      'AUD',
      'AWG',
      'AZM',
      'AZN',
      'BAM',
      'BBD',
      'BDT',
      'BGN',
      'BHD',
      'BIF',
      'BMD',
      'BND',
      'BOB',
      'BRL',
      'BSD',
      'BTN',
      'BWP',
      'BYR',
      'BZD',
      'CAD',
      'CDF',
      'CHF',
      'CLP',
      'CNY',
      'COP',
      'CRC',
      'CSD',
      'CUC',
      'CUP',
      'CVE',
      'CYP',
      'CZK',
      'DJF',
      'DKK',
      'DOP',
      'DZD',
      'EEK',
      'EGP',
      'ERN',
      'ETB',
      'EUR',
      'FJD',
      'FKP',
      'GBP',
      'GEL',
      'GGP',
      'GHC',
      'GHS',
      'GIP',
      'GMD',
      'GNF',
      'GTQ',
      'GYD',
      'HKD',
      'HNL',
      'HRK',
      'HTG',
      'HUF',
      'IDR',
      'ILS',
      'IMP',
      'INR',
      'IQD',
      'IRR',
      'ISK',
      'JEP',
      'JMD',
      'JOD',
      'JPY',
      'KES',
      'KGS',
      'KHR',
      'KMF',
      'KPW',
      'KRW',
      'KWD',
      'KYD',
      'KZT',
      'LAK',
      'LBP',
      'LKR',
      'LRD',
      'LSL',
      'LTL',
      'LVL',
      'LYD',
      'MAD',
      'MDL',
      'MGA',
      'MKD',
      'MMK',
      'MNT',
      'MOP',
      'MRO',
      'MTL',
      'MUR',
      'MVR',
      'MWK',
      'MXN',
      'MYR',
      'MZM',
      'MZN',
      'NAD',
      'NGN',
      'NIO',
      'NOK',
      'NPR',
      'NZD',
      'OMR',
      'PAB',
      'PEN',
      'PGK',
      'PHP',
      'PKR',
      'PLN',
      'PYG',
      'QAR',
      'RON',
      'RSD',
      'RUB',
      'RWF',
      'SAR',
      'SBD',
      'SCR',
      'SDD',
      'SDG',
      'SEK',
      'SGD',
      'SHP',
      'SIT',
      'SKK',
      'SLL',
      'SOS',
      'SPL',
      'SRD',
      'SSP',
      'STD',
      'SVC',
      'SYP',
      'SZL',
      'THB',
      'TJS',
      'TMM',
      'TMT',
      'TND',
      'TOP',
      'TRL',
      'TRY',
      'TTD',
      'TVD',
      'TWD',
      'TZS',
      'UAH',
      'UGX',
      'USD',
      'UYU',
      'UZS',
      'VEB',
      'VEF',
      'VND',
      'VUV',
      'WST',
      'XAF',
      'XAG',
      'XAU',
      'XCD',
      'XDR',
      'XOF',
      'XPD',
      'XPF',
      'XPT',
      'YER',
      'ZAR',
      'ZMK',
      'ZMW',
      'ZWD',
      'ZWL',
    ]),
  })
  .openapi({ required: ['amount', 'currencyId'] })
  .openapi('Price')

const VariantOptionSchema = z
  .object({ name: z.string().min(1).max(30), value: z.string().min(1).max(256) })
  .openapi({ required: ['name', 'value'] })
  .openapi('VariantOption')

const VariantDTOSchema = z
  .object({
    barcode: z.string().min(0).max(128).exactOptional(),
    costPrice: PriceSchema.exactOptional(),
    description: z.string().min(0).max(1024).exactOptional(),
    name: z.string().min(0).max(256).exactOptional(),
    options: z.array(VariantOptionSchema).min(1).max(99).exactOptional(),
    presentation: PresentationDTOSchema.exactOptional(),
    price: PriceSchema.exactOptional(),
    sku: z.string().min(0).max(64).exactOptional(),
    uuid: z.uuid(),
    vatPercentage: z.number().min(0).max(100).exactOptional().openapi({ deprecated: true }),
  })
  .openapi({ required: ['uuid'] })
  .openapi('VariantDTO')

const FullProductUpdateRequestSchema = z
  .object({
    categories: z
      .array(z.string())
      .min(0)
      .max(1)
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      })
      .exactOptional(),
    category: CategoryDTOSchema.exactOptional(),
    description: z.string().min(0).max(1024).exactOptional(),
    externalReference: z.string().exactOptional(),
    imageLookupKeys: z
      .array(z.string())
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      })
      .exactOptional(),
    metadata: MetadataDTOSchema.exactOptional(),
    name: z.string().min(1).max(256),
    online: OnlinePropertiesSchema.exactOptional(),
    presentation: PresentationDTOSchema.exactOptional(),
    taxCode: z.string().exactOptional(),
    taxExempt: z.boolean().exactOptional(),
    taxRates: z
      .array(z.uuid())
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      })
      .exactOptional(),
    unitName: z.string().exactOptional(),
    uuid: z.uuid(),
    variantOptionDefinitions: VariantOptionDefinitionsSchema.exactOptional(),
    variants: z.array(VariantDTOSchema).exactOptional(),
    vatPercentage: z.number().min(0).max(100).exactOptional(),
  })
  .openapi({ required: ['name', 'uuid'] })
  .openapi('FullProductUpdateRequest')

const BulkImportRequestSchema = z
  .object({ products: z.array(FullProductUpdateRequestSchema) })
  .openapi({ required: ['products'] })
  .openapi('BulkImportRequest')

const CategoryResponseSchema = z
  .object({ categories: z.array(CategoryDTOSchema) })
  .openapi({ required: ['categories'] })
  .openapi('CategoryResponse')

const ConstraintViolationSchema = z
  .object({
    constraintType: z
      .enum([
        'MUST_BE_FALSE',
        'MUST_BE_TRUE',
        'MUST_BE_LESS_THAN',
        'MUST_BE_GREATER_THAN',
        'DIGIT_OUT_OF_BOUNDS',
        'DATE_MUST_BE_IN_THE_FUTURE',
        'MUST_BE_LESS_OR_EQUAL_THAN',
        'MUST_BE_GREATER_OR_EQUAL_TO',
        'MUST_NOT_BE_NULL',
        'MUST_BE_NULL',
        'DATE_MUST_BE_IN_THE_PAST',
        'MUST_MATCH_PATTERN',
        'INVALID_SIZE',
        'INVALID_EMAIL',
        'MUST_NOT_BE_EMPTY',
        'INVALID_RANGE',
        'UNKNOWN',
      ])
      .exactOptional(),
    developerMessage: z.string().exactOptional(),
    expected: z.string().exactOptional(),
    propertyName: z.string().exactOptional(),
    value: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ConstraintViolation')

const CreateCategoriesRequestSchema = z
  .object({ categories: z.array(CategoryDTOSchema) })
  .openapi({ required: ['categories'] })
  .openapi('CreateCategoriesRequest')

const CreateSlugRequestSchema = z
  .object({ productName: z.string().min(1).max(256) })
  .openapi({ required: ['productName'] })
  .openapi('CreateSlugRequest')

const DiscountRequestSchema = z
  .object({
    amount: PriceSchema.exactOptional(),
    description: z.string().min(0).max(128).exactOptional(),
    externalReference: z.string().min(0).max(128).exactOptional(),
    imageLookupKeys: z
      .array(z.string())
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      })
      .exactOptional(),
    name: z.string().min(0).max(64).exactOptional(),
    percentage: z.number().min(0).max(100).exactOptional(),
    uuid: z.uuid(),
  })
  .openapi({ required: ['uuid'] })
  .openapi('DiscountRequest')

const DiscountResponseSchema = z
  .object({
    amount: PriceSchema.exactOptional(),
    created: z.iso.datetime({ offset: true }),
    description: z.string().exactOptional(),
    etag: z.string(),
    externalReference: z.string().exactOptional(),
    imageLookupKeys: z
      .array(z.string())
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      })
      .exactOptional(),
    name: z.string(),
    percentage: z.number().exactOptional(),
    updated: z.iso.datetime({ offset: true }),
    updatedBy: z.uuid().exactOptional(),
    uuid: z.uuid(),
  })
  .openapi({ required: ['created', 'etag', 'name', 'updated', 'uuid'] })
  .openapi('DiscountResponse')

const ErrorResponseSchema = z
  .object({
    developerMessage: z.string().exactOptional(),
    errorType: z.string().exactOptional(),
    violations: z
      .array(ConstraintViolationSchema)
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      })
      .exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ErrorResponse')

const ImportResponseSchema = z
  .object({
    created: z.iso.datetime({ offset: true }).exactOptional(),
    errorMessage: z.string().exactOptional(),
    finished: z.iso.datetime({ offset: true }).exactOptional(),
    items: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    state: z.enum(['IMPORTING', 'FINISHED_SUCCESS', 'FINISHED_FAILED']).exactOptional(),
    uuid: z.uuid().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ImportResponse')

const LibraryImagesResponseSchema = z
  .object({ imageUrls: z.array(z.string()).exactOptional() })
  .openapi({ required: [] })
  .openapi('LibraryImagesResponse')

const ProductResponseSchema = z
  .object({
    categories: z
      .array(z.string())
      .min(0)
      .max(1)
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      })
      .exactOptional(),
    category: CategoryDTOSchema.exactOptional(),
    created: z.iso.datetime({ offset: true }),
    description: z.string().exactOptional(),
    etag: z.string(),
    externalReference: z.string().exactOptional(),
    imageLookupKeys: z
      .array(z.string())
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      })
      .exactOptional(),
    metadata: MetadataDTOSchema.exactOptional(),
    name: z.string(),
    online: OnlinePropertiesSchema.exactOptional(),
    presentation: PresentationDTOSchema.exactOptional(),
    taxCode: z.string().exactOptional(),
    taxExempt: z.boolean().exactOptional(),
    taxRates: z
      .array(z.uuid())
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      })
      .exactOptional(),
    unitName: z.string().exactOptional(),
    updated: z.iso.datetime({ offset: true }),
    updatedBy: z.uuid().exactOptional(),
    uuid: z.uuid(),
    variantOptionDefinitions: VariantOptionDefinitionsSchema.exactOptional(),
    variants: z.array(VariantDTOSchema).min(1).max(99),
    vatPercentage: z.number().exactOptional(),
  })
  .openapi({ required: ['created', 'etag', 'name', 'updated', 'uuid', 'variants'] })
  .openapi('ProductResponse')

const LibraryResponseSchema = z
  .object({
    deletedDiscounts: z
      .array(z.uuid())
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      })
      .exactOptional(),
    deletedProducts: z
      .array(z.uuid())
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      })
      .exactOptional(),
    discounts: z
      .array(DiscountResponseSchema)
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      })
      .exactOptional(),
    fromEventLogUuid: z.uuid().exactOptional(),
    products: z
      .array(ProductResponseSchema)
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      })
      .exactOptional(),
    untilEventLogUuid: z.uuid().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('LibraryResponse')

const OptionSchema = z
  .object({ name: z.string().exactOptional(), values: z.array(z.string()).exactOptional() })
  .openapi({ required: [] })
  .openapi('Option')

const ProductCountResponseSchema = z
  .object({ productCount: z.int32() })
  .openapi({ required: ['productCount'] })
  .openapi('ProductCountResponse')

const ProductCreateRequestSchema = z
  .object({
    categories: z
      .array(z.string())
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      })
      .exactOptional(),
    category: CategoryDTOSchema.exactOptional(),
    createWithDefaultTax: z.boolean().exactOptional(),
    description: z.string().min(0).max(1024).exactOptional(),
    externalReference: z.string().min(0).max(128).exactOptional(),
    imageLookupKeys: z
      .array(z.string())
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      })
      .exactOptional(),
    metadata: MetadataDTOSchema.exactOptional(),
    name: z.string().min(1).max(256),
    online: OnlinePropertiesSchema.exactOptional(),
    presentation: PresentationDTOSchema.exactOptional(),
    taxCode: z.string().exactOptional(),
    taxExempt: z.boolean().exactOptional(),
    taxRates: z
      .array(z.uuid())
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      })
      .exactOptional(),
    unitName: z.string().min(0).max(32).exactOptional(),
    uuid: z.uuid(),
    variantOptionDefinitions: VariantOptionDefinitionsSchema.exactOptional(),
    variants: z.array(VariantDTOSchema).exactOptional(),
    vatPercentage: z.number().min(0).max(100).exactOptional(),
  })
  .openapi({ required: ['name', 'uuid'] })
  .openapi('ProductCreateRequest')

const RenameCategoryRequestSchema = z
  .object({
    name: z
      .string()
      .regex(/\S|\S.*\S/)
      .min(1)
      .max(100),
  })
  .openapi({ required: ['name'] })
  .openapi('RenameCategoryRequest')

const SlugResponseSchema = z
  .object({ productName: z.string().exactOptional(), slug: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('SlugResponse')

const TaxRateSchema = z
  .object({
    default: z.boolean().exactOptional(),
    label: z.string().min(0).max(512),
    percentage: z.number().max(100).exactOptional(),
    uuid: z.uuid(),
  })
  .openapi({ required: ['label', 'uuid'] })
  .openapi('TaxRate')

const TaxRateProductCountSchema = z
  .object({ count: z.int32().exactOptional(), taxRateUuid: z.uuid().exactOptional() })
  .openapi({ required: [] })
  .openapi('TaxRateProductCount')

const TaxRateProductCountResponseSchema = z
  .object({ counts: z.array(TaxRateProductCountSchema).exactOptional() })
  .openapi({ required: [] })
  .openapi('TaxRateProductCountResponse')

const TaxRateUpdateRequestSchema = z
  .object({
    default: z.boolean().exactOptional(),
    label: z.string().min(0).max(512).exactOptional(),
    percentage: z.number().max(100).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TaxRateUpdateRequest')

const TaxRatesCreateRequestSchema = z
  .object({ taxRates: z.array(TaxRateSchema).min(0).max(15) })
  .openapi({ required: ['taxRates'] })
  .openapi('TaxRatesCreateRequest')

const TaxRatesResponseSchema = z
  .object({ taxRates: z.array(TaxRateSchema).exactOptional() })
  .openapi({ required: [] })
  .openapi('TaxRatesResponse')

const TaxSettingsResponseSchema = z
  .object({
    organizationUuid: z.uuid().exactOptional(),
    taxationMode: z.enum(['EXCLUSIVE', 'INCLUSIVE']).exactOptional(),
    taxationType: z.enum(['NONE', 'SALES_TAX', 'VAT']).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TaxSettingsResponse')

const TaxSettingsUpdateRequestSchema = z
  .object({ taxationMode: z.enum(['EXCLUSIVE', 'INCLUSIVE']) })
  .openapi({ required: ['taxationMode'] })
  .openapi('TaxSettingsUpdateRequest')

const VariantOptionsResponseSchema = z
  .object({ options: z.array(OptionSchema).exactOptional() })
  .openapi({ required: [] })
  .openapi('VariantOptionsResponse')

const ZettleOauthSecurityScheme = {
  description:
    'For more information about authorization API visit: https://developer.zettle.com/docs/api/oauth/overview',
  flows: {
    authorizationCode: {
      authorizationUrl: 'https://oauth.zettle.com/authorize',
      scopes: {
        'READ:PRODUCT': 'Access to read product library data',
        'WRITE:PRODUCT': 'Access to write product library data',
      },
      tokenUrl: 'https://oauth.zettle.com/token',
    },
  },
  type: 'oauth2',
}

export const getOrganizationsOrganizationUuidCategoriesV2Route = createRoute({
  method: 'get',
  path: '/organizations/{organizationUuid}/categories/v2',
  tags: ['categories'],
  summary: 'Retrieve all categories',
  operationId: 'getProductTypes',
  request: {
    params: z.object({
      organizationUuid: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            name: 'organizationUuid',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'List of all categories',
      content: { 'application/json': { schema: CategoryResponseSchema } },
    },
  },
  security: [{ ZettleOauth: ['READ:PRODUCT'] }],
})

export const postOrganizationsOrganizationUuidCategoriesV2Route = createRoute({
  method: 'post',
  path: '/organizations/{organizationUuid}/categories/v2',
  tags: ['categories'],
  summary: 'Create a new category',
  operationId: 'createCategories',
  request: {
    params: z.object({
      organizationUuid: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            name: 'organizationUuid',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateCategoriesRequestSchema } },
      required: true,
    },
  },
  responses: {
    201: { description: 'Category created' },
    400: { description: 'Category already exists' },
    404: { description: 'Organization not found' },
  },
  security: [{ ZettleOauth: ['WRITE:PRODUCT'] }],
})

export const deleteOrganizationsOrganizationUuidCategoriesV2CategoryUuidRoute = createRoute({
  method: 'delete',
  path: '/organizations/{organizationUuid}/categories/v2/{categoryUuid}',
  tags: ['categories'],
  summary: 'Delete a category',
  operationId: 'deleteCategory',
  request: {
    params: z.object({
      organizationUuid: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            name: 'organizationUuid',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
      categoryUuid: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            name: 'categoryUuid',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Category deleted' },
    404: { description: 'Organization not found' },
  },
  security: [{ ZettleOauth: ['WRITE:PRODUCT'] }],
})

export const patchOrganizationsOrganizationUuidCategoriesV2CategoryUuidRoute = createRoute({
  method: 'patch',
  path: '/organizations/{organizationUuid}/categories/v2/{categoryUuid}',
  tags: ['categories'],
  summary: 'Rename a category',
  operationId: 'renameCategory',
  request: {
    params: z.object({
      organizationUuid: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            name: 'organizationUuid',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
      categoryUuid: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            name: 'categoryUuid',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: RenameCategoryRequestSchema } },
      required: true,
    },
  },
  responses: {
    204: { description: 'Category renamed' },
    400: { description: 'Category already exists' },
    404: { description: 'Organization not found' },
  },
  security: [{ ZettleOauth: ['WRITE:PRODUCT'] }],
})

export const getOrganizationsOrganizationUuidDiscountsRoute = createRoute({
  method: 'get',
  path: '/organizations/{organizationUuid}/discounts',
  tags: ['discounts'],
  summary: 'Retrieve all discounts',
  operationId: 'getAllDiscounts',
  request: {
    params: z.object({
      organizationUuid: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            name: 'organizationUuid',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'List of all discounts',
      content: { 'application/json': { schema: z.array(DiscountResponseSchema) } },
    },
  },
  security: [{ ZettleOauth: ['READ:PRODUCT'] }],
})

export const postOrganizationsOrganizationUuidDiscountsRoute = createRoute({
  method: 'post',
  path: '/organizations/{organizationUuid}/discounts',
  tags: ['discounts'],
  summary: 'Create a discount',
  description:
    'Creates a single discount entity. The location of the newly created discount will be available in the successful response as a HttpHeaders.LOCATION header',
  operationId: 'createDiscount',
  request: {
    params: z.object({
      organizationUuid: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            name: 'organizationUuid',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: DiscountRequestSchema } } },
  },
  responses: {
    201: {
      description: 'Discount created',
      headers: z.object({
        ETag: {
          description: 'ETag value',
          style: 'simple',
          schema: z
            .string()
            .exactOptional()
            .openapi({ description: 'ETag value', param: { required: false } }),
        },
        Location: {
          description: 'Location of newly created Discount',
          style: 'simple',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'Location of newly created Discount',
              param: { required: false },
            }),
        },
      }),
    },
    400: {
      description: 'Invalid request body',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
  security: [{ ZettleOauth: ['WRITE:PRODUCT'] }],
})

export const getOrganizationsOrganizationUuidDiscountsDiscountUuidRoute = createRoute({
  method: 'get',
  path: '/organizations/{organizationUuid}/discounts/{discountUuid}',
  tags: ['discounts'],
  summary: 'Retrieve a single discount',
  description:
    'Get the full discount with the provided UUID. The method supports conditional GET through providing a HttpHeaders.IF_NONE_MATCH header. If the conditional prerequisite is fullfilled, the full discount is returned: otherwise a 304 not modified will be returned with an empty body.',
  operationId: 'getDiscount',
  request: {
    headers: z.object({
      'If-None-Match': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'If-None-Match',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      organizationUuid: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            name: 'organizationUuid',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
      discountUuid: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            name: 'discountUuid',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Discount',
      content: { 'application/json': { schema: DiscountResponseSchema } },
      headers: z.object({
        ETag: {
          description: 'ETag value',
          style: 'simple',
          schema: z
            .string()
            .exactOptional()
            .openapi({ description: 'ETag value', param: { required: false } }),
        },
      }),
    },
    304: { description: 'Not modified' },
    404: { description: 'Organization or Discount not found' },
  },
  security: [{ ZettleOauth: ['READ:PRODUCT'] }],
})

export const putOrganizationsOrganizationUuidDiscountsDiscountUuidRoute = createRoute({
  method: 'put',
  path: '/organizations/{organizationUuid}/discounts/{discountUuid}',
  tags: ['discounts'],
  summary: 'Update a single discount',
  description:
    'Updates a discount entity using JSON merge patch (https://tools.ietf.org/html/rfc7386). This means that only included fields will be changed: null values removes the field on the target entity, and other values updates the field. Conditional updates are supported through the HttpHeaders.IF_MATCH header. If the conditional prerequisite is fullfilled, the discount is updated: otherwise a 412 precondition failed will be returned with an empty body.',
  operationId: 'updateDiscount',
  request: {
    headers: z.object({
      'If-Match': z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'header', name: 'If-Match', schema: { type: 'string' }, required: false },
        }),
    }),
    params: z.object({
      organizationUuid: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            name: 'organizationUuid',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
      discountUuid: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            name: 'discountUuid',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: DiscountRequestSchema } }, required: true },
  },
  responses: {
    204: {
      description: 'Discount updated',
      headers: z.object({
        ETag: {
          description: 'ETag value',
          style: 'simple',
          schema: z
            .string()
            .exactOptional()
            .openapi({ description: 'ETag value', param: { required: false } }),
        },
        Location: {
          description: 'Location of updated Discount',
          style: 'simple',
          schema: z
            .string()
            .exactOptional()
            .openapi({ description: 'Location of updated Discount', param: { required: false } }),
        },
      }),
    },
    400: {
      description: 'Invalid request body',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    412: { description: 'Precondition failed: ETag did not match the expected value' },
  },
  security: [{ ZettleOauth: ['WRITE:PRODUCT'] }],
})

export const deleteOrganizationsOrganizationUuidDiscountsDiscountUuidRoute = createRoute({
  method: 'delete',
  path: '/organizations/{organizationUuid}/discounts/{discountUuid}',
  tags: ['discounts'],
  summary: 'Delete a single discount ',
  operationId: 'deleteDiscount',
  request: {
    params: z.object({
      organizationUuid: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            name: 'organizationUuid',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
      discountUuid: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            name: 'discountUuid',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Discount deleted' },
    404: { description: 'Organization or Discount not found' },
  },
  security: [{ ZettleOauth: ['WRITE:PRODUCT'] }],
})

export const getOrganizationsOrganizationUuidImagesRoute = createRoute({
  method: 'get',
  path: '/organizations/{organizationUuid}/images',
  tags: ['images'],
  summary: 'Retrieve all library item images',
  description:
    'Retrieves all library items images used by the organization, sorted by updated date',
  operationId: 'getAllImageUrls',
  request: {
    params: z.object({
      organizationUuid: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            name: 'organizationUuid',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'List of all image urls',
      content: { 'application/json': { schema: LibraryImagesResponseSchema } },
    },
  },
  security: [{ ZettleOauth: ['READ:PRODUCT'] }],
})

export const getOrganizationsOrganizationUuidImportStatusRoute = createRoute({
  method: 'get',
  path: '/organizations/{organizationUuid}/import/status',
  tags: ['import'],
  summary: 'Get status for latest import',
  operationId: 'getLatestImportStatus',
  request: {
    params: z.object({
      organizationUuid: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            name: 'organizationUuid',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Import status',
      content: { 'application/json': { schema: ImportResponseSchema } },
    },
    404: { description: 'Organization or import not found' },
  },
  security: [{ ZettleOauth: ['READ:PRODUCT'] }],
})

export const getOrganizationsOrganizationUuidImportStatusImportUuidRoute = createRoute({
  method: 'get',
  path: '/organizations/{organizationUuid}/import/status/{importUuid}',
  tags: ['import'],
  summary: 'Get status for an import',
  operationId: 'getStatusByUuid',
  request: {
    params: z.object({
      organizationUuid: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            name: 'organizationUuid',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
      importUuid: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            name: 'importUuid',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Import status',
      content: { 'application/json': { schema: ImportResponseSchema } },
    },
    404: { description: 'Organization or import not found' },
  },
  security: [{ ZettleOauth: ['READ:PRODUCT'] }],
})

export const postOrganizationsOrganizationUuidImportV2Route = createRoute({
  method: 'post',
  path: '/organizations/{organizationUuid}/import/v2',
  tags: ['import'],
  summary: 'Import library items',
  operationId: 'importLibraryV2',
  request: {
    params: z.object({
      organizationUuid: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            name: 'organizationUuid',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: BulkImportRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Import status',
      content: { 'application/json': { schema: ImportResponseSchema } },
    },
    400: {
      description: 'Invalid request body',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
  security: [{ ZettleOauth: ['WRITE:PRODUCT'] }],
})

export const getOrganizationsOrganizationUuidLibraryRoute = createRoute({
  method: 'get',
  path: '/organizations/{organizationUuid}/library',
  tags: ['library'],
  summary: 'Retrieve the entire library',
  description:
    'Will return the entire library for the authenticated user. If size of the library exceeds server preferences (normally 500) or the value of the optional limit parameter, the result will be paginated. Paginated responses return a Link header, indicating the next URI to fetch. The resulting header value will look something like:\n\n<https://products.izettle.com/organizations/self/library?limit=X&offset=Y>; rel="next"\n\nwhere limit is number of items in response, and offset is the current position in pagination. The rel-part in the header is the links relation to the data previously recieved. The idea is that as long as this header is present there are still items remaining to be fetched. When either the header is not present or it\'s value doesn\'t contain any "next" value, all items have been sent to the client.\n\nNote: The client should NOT try to extract query parameters from the URI, but rather use it as-is for the next request. Also, clients should be perpared that one Link header might contain multiple other IRIs that are not "next" (there will never be more than one "next" though). See more at:\n\n    IETF: https://tools.ietf.org/html/rfc5988\n    GitHub: https://developer.github.com/guides/traversing-with-pagination/\n\nIf eventLogUuid is provided, the response will only include events affecting the library since that event. Such responses are normally quite small and would be a preferred method for most fat clients after retrieving the initial full library.\n',
  operationId: 'getLibrary',
  request: {
    params: z.object({
      organizationUuid: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            name: 'organizationUuid',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
    query: z.object({
      eventLogUuid: z
        .uuid()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'eventLogUuid',
            schema: { format: 'uuid', type: 'string' },
            required: false,
          },
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(1).max(500),
        )
        .default(500)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'limit',
            schema: { default: 500, format: 'int32', maximum: 500, minimum: 1, type: 'integer' },
            required: false,
          },
        }),
      offset: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'offset', schema: { type: 'string' }, required: false },
        }),
      all: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'all', schema: { type: 'boolean' }, required: false },
        }),
    }),
  },
  responses: {
    200: {
      description: 'List of library items',
      content: { 'application/json': { schema: LibraryResponseSchema } },
      headers: z.object({
        Link: {
          description:
            'If the response is paginated this header will contain the URI for the next page. See more at: https://tools.ietf.org/html/rfc5988',
          style: 'simple',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'If the response is paginated this header will contain the URI for the next page. See more at: https://tools.ietf.org/html/rfc5988',
              param: { required: false },
            }),
        },
      }),
    },
    412: {
      description:
        'Invalid event log uuid. If the eventLogUuid query parameter was provided a 412 response indicates that the number of changes in the product exceeds the limit since that particular event (currently 500 changes). \nWhen this happens, the client should remove the eventLogUuid query parameters and try again.',
    },
  },
  security: [{ ZettleOauth: ['READ:PRODUCT'] }],
})

export const getOrganizationsOrganizationUuidProductsRoute = createRoute({
  method: 'get',
  path: '/organizations/{organizationUuid}/products',
  tags: ['products'],
  summary: 'Retrieve all products visible in POS',
  operationId: 'getAllProductsInPos',
  request: {
    params: z.object({
      organizationUuid: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            name: 'organizationUuid',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'A list of products',
      content: { 'application/json': { schema: z.array(ProductResponseSchema) } },
    },
  },
  security: [{ ZettleOauth: ['READ:PRODUCT'] }],
})

export const postOrganizationsOrganizationUuidProductsRoute = createRoute({
  method: 'post',
  path: '/organizations/{organizationUuid}/products',
  tags: ['products'],
  summary: 'Create a new product',
  operationId: 'createProduct',
  request: {
    params: z.object({
      organizationUuid: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            name: 'organizationUuid',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
    query: z.object({
      returnEntity: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'returnEntity',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ProductCreateRequestSchema } },
      required: true,
    },
  },
  responses: {
    201: {
      description:
        "Product created. It will include the Product in the response only if 'returnEntity' is true",
      content: { 'application/json': { schema: ProductResponseSchema } },
      headers: z.object({
        ETag: {
          description: 'ETag value',
          style: 'simple',
          schema: z
            .string()
            .exactOptional()
            .openapi({ description: 'ETag value', param: { required: false } }),
        },
        Location: {
          description: 'Location of newly created Product',
          style: 'simple',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'Location of newly created Product',
              param: { required: false },
            }),
        },
      }),
    },
  },
  security: [{ ZettleOauth: ['WRITE:PRODUCT'] }],
})

export const deleteOrganizationsOrganizationUuidProductsRoute = createRoute({
  method: 'delete',
  path: '/organizations/{organizationUuid}/products',
  tags: ['products'],
  summary: 'Delete a list of products',
  operationId: 'deleteProducts',
  request: {
    params: z.object({
      organizationUuid: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            name: 'organizationUuid',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
    query: z.object({
      uuid: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.uuid()),
        )
        .openapi({
          param: {
            description: 'List of product UUIDs to be deleted',
            in: 'query',
            name: 'uuid',
            required: true,
            schema: { items: { format: 'uuid', type: 'string' }, type: 'array' },
          },
        }),
    }),
  },
  responses: { 204: { description: 'Products deleted' } },
  security: [{ ZettleOauth: ['WRITE:PRODUCT'] }],
})

export const postOrganizationsOrganizationUuidProductsOnlineSlugRoute = createRoute({
  method: 'post',
  path: '/organizations/{organizationUuid}/products/online/slug',
  tags: ['products/online'],
  summary: 'Create a product identifier',
  description:
    'Creates a unique slug (identifier) for a product. The slug is used to create a product URL',
  operationId: 'createProductSlug',
  request: {
    params: z.object({
      organizationUuid: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            name: 'organizationUuid',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: CreateSlugRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Product slug',
      content: { 'application/json': { schema: SlugResponseSchema } },
    },
  },
  security: [{ ZettleOauth: ['READ:PRODUCT'] }],
})

export const getOrganizationsOrganizationUuidProductsOptionsRoute = createRoute({
  method: 'get',
  path: '/organizations/{organizationUuid}/products/options',
  tags: ['products'],
  summary: 'Retrieve an aggregate of active Options in the library',
  operationId: 'getAllOptions',
  request: {
    params: z.object({
      organizationUuid: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            name: 'organizationUuid',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'List of Options',
      content: { 'application/json': { schema: z.array(VariantOptionsResponseSchema) } },
    },
  },
  security: [{ ZettleOauth: ['READ:PRODUCT'] }],
})

export const getOrganizationsOrganizationUuidProductsV2Route = createRoute({
  method: 'get',
  path: '/organizations/{organizationUuid}/products/v2',
  tags: ['products'],
  summary: 'Retrieve all products visible in POS – v2',
  operationId: 'getAllProductsV2',
  request: {
    params: z.object({
      organizationUuid: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            name: 'organizationUuid',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
    query: z.object({
      sort: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, sorts response by created date',
            in: 'query',
            name: 'sort',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'A list of products',
      content: { 'application/json': { schema: z.array(ProductResponseSchema) } },
    },
  },
  security: [{ ZettleOauth: ['READ:PRODUCT'] }],
})

export const getOrganizationsOrganizationUuidProductsV2CountRoute = createRoute({
  method: 'get',
  path: '/organizations/{organizationUuid}/products/v2/count',
  tags: ['products'],
  summary: 'Retrieve the count of existing products',
  operationId: 'countAllProducts',
  request: {
    params: z.object({
      organizationUuid: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            name: 'organizationUuid',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Count of existing products',
      content: { 'application/json': { schema: z.array(ProductCountResponseSchema) } },
    },
  },
  security: [{ ZettleOauth: ['READ:PRODUCT'] }],
})

export const putOrganizationsOrganizationUuidProductsV2ProductUuidRoute = createRoute({
  method: 'put',
  path: '/organizations/{organizationUuid}/products/v2/{productUuid}',
  tags: ['products'],
  summary: 'Update a single product',
  description:
    'Updates a product entity using JSON merge patch (https://tools.ietf.org/html/rfc7386). This means that only included fields will be changed: null values removes the field on the target entity, and other values updates the field. Conditional updates are supported through the HttpHeaders.IF_MATCH header. If the conditional prerequisite is fullfilled, the product is updated: otherwise a 412 (precondition failed) will be returned with an empty body.',
  operationId: 'updateProduct',
  request: {
    headers: z.object({
      'If-Match': z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'header', name: 'If-Match', schema: { type: 'string' }, required: false },
        }),
    }),
    params: z.object({
      organizationUuid: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            name: 'organizationUuid',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
      productUuid: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            name: 'productUuid',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: FullProductUpdateRequestSchema } },
      required: true,
    },
  },
  responses: {
    204: {
      description: 'Product updated',
      headers: z.object({
        ETag: {
          description: 'ETag value',
          style: 'simple',
          schema: z
            .string()
            .exactOptional()
            .openapi({ description: 'ETag value', param: { required: false } }),
        },
        Location: {
          description: 'Location of updated product',
          style: 'simple',
          schema: z
            .string()
            .exactOptional()
            .openapi({ description: 'Location of updated product', param: { required: false } }),
        },
      }),
    },
    400: {
      description: 'Invalid request body',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    412: { description: 'Precondition failed: ETag did not match the expected value' },
  },
  security: [{ ZettleOauth: ['WRITE:PRODUCT'] }],
})

export const getOrganizationsOrganizationUuidProductsProductUuidRoute = createRoute({
  method: 'get',
  path: '/organizations/{organizationUuid}/products/{productUuid}',
  tags: ['products'],
  summary: 'Retrieve a single product',
  description:
    'Get the full product with the provided UUID. The method supports conditional GET through providing a HttpHeaders.IF_NONE_MATCH header. If the conditional prerequisite is fullfilled, the full product is returned, otherwise a 304 not modified will be returned with an empty body.',
  operationId: 'getProduct',
  request: {
    headers: z.object({
      'If-None-Match': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'If-None-Match',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      organizationUuid: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            name: 'organizationUuid',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
      productUuid: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            name: 'productUuid',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Product',
      content: { 'application/json': { schema: ProductResponseSchema } },
      headers: z.object({
        ETag: {
          description: 'ETag value',
          style: 'simple',
          schema: z
            .string()
            .exactOptional()
            .openapi({ description: 'ETag value', param: { required: false } }),
        },
      }),
    },
    304: { description: 'Not modified' },
    400: { description: 'Malformed ETag' },
    404: { description: 'Organization or Product not found' },
  },
  security: [{ ZettleOauth: ['READ:PRODUCT'] }],
})

export const deleteOrganizationsOrganizationUuidProductsProductUuidRoute = createRoute({
  method: 'delete',
  path: '/organizations/{organizationUuid}/products/{productUuid}',
  tags: ['products'],
  summary: 'Delete a single product',
  operationId: 'deleteProduct',
  request: {
    params: z.object({
      organizationUuid: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            name: 'organizationUuid',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
      productUuid: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            name: 'productUuid',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Product deleted' },
    404: { description: 'Organization or Product not found' },
  },
  security: [{ ZettleOauth: ['WRITE:PRODUCT'] }],
})

export const getV1TaxesRoute = createRoute({
  method: 'get',
  path: '/v1/taxes',
  tags: ['taxes'],
  summary: 'Get all available tax rates',
  operationId: 'getTaxRates',
  responses: {
    200: {
      description: 'List of tax rates',
      content: { 'application/json': { schema: z.array(TaxRatesResponseSchema) } },
    },
    403: { description: 'Not a sales tax user' },
  },
  security: [{ ZettleOauth: ['READ:PRODUCT'] }],
})

export const postV1TaxesRoute = createRoute({
  method: 'post',
  path: '/v1/taxes',
  tags: ['taxes'],
  summary: 'Create new tax rates',
  operationId: 'createTaxRates',
  request: {
    body: {
      content: { 'application/json': { schema: TaxRatesCreateRequestSchema } },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Tax rates created',
      content: { 'application/json': { schema: TaxRatesResponseSchema } },
    },
    400: {
      description: 'Invalid request body',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    403: { description: 'Not a sales tax user' },
  },
  security: [{ ZettleOauth: ['WRITE:PRODUCT'] }],
})

export const getV1TaxesCountRoute = createRoute({
  method: 'get',
  path: '/v1/taxes/count',
  tags: ['taxes'],
  summary: 'Get all tax rates and a count of products associated with each',
  operationId: 'getProductCountForAllTaxes',
  responses: {
    200: {
      description: 'Count of products for each tax rate',
      content: { 'application/json': { schema: TaxRateProductCountResponseSchema } },
    },
    403: { description: 'Not a sales tax user' },
  },
  security: [{ ZettleOauth: ['READ:PRODUCT'] }],
})

export const getV1TaxesSettingsRoute = createRoute({
  method: 'get',
  path: '/v1/taxes/settings',
  tags: ['taxes'],
  summary: 'Get the organization tax settings ',
  operationId: 'getTaxSettings',
  responses: {
    200: {
      description: 'Tax settings',
      content: { 'application/json': { schema: TaxSettingsResponseSchema } },
    },
    403: { description: 'Not a sales tax user' },
  },
  security: [{ ZettleOauth: ['READ:PRODUCT'] }],
})

export const putV1TaxesSettingsRoute = createRoute({
  method: 'put',
  path: '/v1/taxes/settings',
  tags: ['taxes'],
  summary: 'Update the organization tax settings',
  operationId: 'setTaxationMode',
  request: {
    body: {
      content: { 'application/json': { schema: TaxSettingsUpdateRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Updated tax settings',
      content: { 'application/json': { schema: TaxSettingsResponseSchema } },
    },
    400: {
      description: 'Invalid request body',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    403: { description: 'Not a sales tax user' },
  },
  security: [{ ZettleOauth: ['WRITE:PRODUCT'] }],
})

export const getV1TaxesTaxRateUuidRoute = createRoute({
  method: 'get',
  path: '/v1/taxes/{taxRateUuid}',
  tags: ['taxes'],
  summary: 'Get a single tax rate',
  operationId: 'getTaxRate',
  request: {
    params: z.object({
      taxRateUuid: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            name: 'taxRateUuid',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Single tax rate',
      content: { 'application/json': { schema: TaxRateSchema } },
    },
    403: { description: 'Not a sales tax user' },
    404: { description: 'Tax rate not found' },
  },
  security: [{ ZettleOauth: ['READ:PRODUCT'] }],
})

export const putV1TaxesTaxRateUuidRoute = createRoute({
  method: 'put',
  path: '/v1/taxes/{taxRateUuid}',
  tags: ['taxes'],
  summary: 'Update a single tax rate',
  operationId: 'updateTaxRate',
  request: {
    params: z.object({
      taxRateUuid: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            name: 'taxRateUuid',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: TaxRateUpdateRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Updated tax rate',
      content: { 'application/json': { schema: TaxRateSchema } },
    },
    400: {
      description: 'Invalid request body',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    403: { description: 'Not a sales tax user' },
    404: { description: 'Tax rate not found' },
  },
  security: [{ ZettleOauth: ['WRITE:PRODUCT'] }],
})

export const deleteV1TaxesTaxRateUuidRoute = createRoute({
  method: 'delete',
  path: '/v1/taxes/{taxRateUuid}',
  tags: ['taxes'],
  summary: 'Delete a single tax rate',
  operationId: 'deleteTaxRate',
  request: {
    params: z.object({
      taxRateUuid: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            name: 'taxRateUuid',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Tax rate deleted' },
    403: { description: 'Not a sales tax user' },
    404: { description: 'Tax rate not found' },
  },
  security: [{ ZettleOauth: ['WRITE:PRODUCT'] }],
})
