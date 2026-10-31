import { createRoute, z } from '@hono/zod-openapi'

const AnalyticsProductColumnFilterOperatorNameSchema = z
  .string()
  .openapi({
    description: 'Indicate the operator you want to apply on the columnId',
    'x-lov': 'AnalyticsProductColumnFilterOperatorName',
  })
  .openapi('AnalyticsProductColumnFilterOperatorName')

const AnalyticsProductColumnFilterSchema = z
  .object({
    operatorName: AnalyticsProductColumnFilterOperatorNameSchema,
    values: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Must be null if the operator is "IsNull" or "IsNotNull".\nCan contains multiple value in case of "InList" operator. Otherwise a single value is expected.\n',
        example: ['My value'],
      }),
  })
  .openapi({
    example: {
      '672644c7-5bd0-4e25-88c1-1f732bda5e4c': {
        operatorName: 'NumericalGreaterThan',
        values: ['100'],
      },
    },
    required: ['operatorName'],
  })
  .openapi('AnalyticsProductColumnFilter')

const AdditionalAnalyticsProductColumnFiltersSchema = z
  .record(z.string(), AnalyticsProductColumnFilterSchema)
  .openapi({
    description:
      "Describes a filter on a product's column.\nThe key is the column identifier of your catalog or a custom column.\n",
  })
  .openapi('AdditionalAnalyticsProductColumnFilters')

type AnalyticsProductColumnFiltersType = {
  additionalAnalyticsProductColumnFilters?: z.infer<
    typeof AdditionalAnalyticsProductColumnFiltersSchema
  >
  sku?: string
  title?: string
}

const BeezUPCommonProductColumnFilterOperatorNameSchema = z
  .string()
  .openapi({
    description: 'Indicate the operator you want to make on the columnId',
    'x-lov': 'ProductColumnFilterOperatorName',
  })
  .openapi('BeezUPCommonProductColumnFilterOperatorName')

const BeezUPCommonAdditionalProductFiltersValueSchema = z
  .object({
    operatorName: BeezUPCommonProductColumnFilterOperatorNameSchema.exactOptional(),
    values: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Must be null if the operator is "IsNull" or "IsNotNull".\nCan contains multiple value in case of "InList" operator. Otherwise a single value is expected.\n',
        example: ['My value'],
      }),
  })
  .openapi({
    example: {
      '672644c7-5bd0-4e25-88c1-1f732bda5e4c': { operatorName: 'GreaterTo', values: ['100'] },
    },
    required: [],
  })
  .openapi('BeezUPCommonAdditionalProductFiltersValue')

const BeezUPCommonAdditionalProductFiltersSchema = z
  .record(z.string(), BeezUPCommonAdditionalProductFiltersValueSchema)
  .openapi({
    description:
      "Describe a filter on a product's column.\nThe key is the column identifier of your catalog or a custom column.\n",
  })
  .openapi('BeezUPCommonAdditionalProductFilters')

const BeezUPCommonApiSettingsStatusSchema = z
  .enum(['warning', 'success', 'failed'])
  .openapi({ example: 'success' })
  .openapi('BeezUPCommonApiSettingsStatus')

const BeezUPCommonBeezUPColumnNameSchema = z
  .string()
  .openapi({ description: 'The BeezUP column name', example: 'CategoryFirstLevel' })
  .openapi('BeezUPCommonBeezUPColumnName')

const BeezUPCommonCatalogCategoryFilterSchema = z
  .object({
    categoryPath: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'Indicates on which catalog category path you want to make the filter',
        example: ['Maison', 'Chambre'],
      }),
  })
  .openapi({ required: [] })
  .openapi('BeezUPCommonCatalogCategoryFilter')

const BeezUPCommonCatalogCategoryIdSchema = z
  .guid()
  .openapi({
    description: 'The catalog category identifier',
    example: '81a058a6-0451-4b79-84ef-94c58d0ed4ac',
  })
  .openapi('BeezUPCommonCatalogCategoryId')

const BeezUPCommonCatalogCategoryPathSchema = z
  .array(z.string())
  .openapi({
    description: 'The catalog category path',
    example: ['Vêtements', 'Femmes', 'Chaussures'],
  })
  .openapi('BeezUPCommonCatalogCategoryPath')

const BeezUPCommonCatalogColumnIdSchema = z
  .guid()
  .openapi({
    description: 'The catalog column identifier (catalog or custom column)',
    example: 'bea7c21e-948b-4ac3-9ffd-4396e62c4163',
  })
  .openapi('BeezUPCommonCatalogColumnId')

const BeezUPCommonCatalogColumnUserNameSchema = z
  .string()
  .openapi({
    description: 'The catalog column named by the user (catalog or custom column)',
    example: 'My title',
  })
  .openapi('BeezUPCommonCatalogColumnUserName')

const BeezUPCommonChannelIdSchema = z
  .guid()
  .openapi({
    description: 'The channel identifier',
    example: '2dc136a7-0d3d-4cc9-a825-a28a42c53e28',
  })
  .openapi('BeezUPCommonChannelId')

const BeezUPCommonHttpUrlSchema = z
  .string()
  .regex(/^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/)
  .openapi({
    description:
      'The URL <a href="https://en.wikipedia.org/wiki/URL">https://en.wikipedia.org/wiki/URL</a>',
    example: 'http://www.mydomain.com',
  })
  .openapi('BeezUPCommonHttpUrl')

const BeezUPCommonChannelNameSchema = z
  .string()
  .openapi({ description: 'The channel name', example: 'Amazon FRA' })
  .openapi('BeezUPCommonChannelName')

const BeezUPCommonChannelBasicInfoSchema = z
  .object({
    channelId: BeezUPCommonChannelIdSchema,
    channelImageUrl: BeezUPCommonHttpUrlSchema,
    channelName: BeezUPCommonChannelNameSchema,
  })
  .openapi({
    description: 'The basic info related to a channel',
    required: ['channelId', 'channelName', 'channelImageUrl'],
  })
  .openapi('BeezUPCommonChannelBasicInfo')

const BeezUPCommonChannelCatalogIdSchema = z
  .guid()
  .openapi({
    description: 'The channel catalog identifier',
    example: '6d6b04de-406b-4539-8e7e-bf3e8da5dfb0',
  })
  .openapi('BeezUPCommonChannelCatalogId')

const BeezUPCommonChannelCategoryFilterSchema = z
  .object({
    categoryPath: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'Indicates on which channel category path you want to make the filter',
        example: ['Home', 'Bedroom'],
      }),
  })
  .openapi({ required: [] })
  .openapi('BeezUPCommonChannelCategoryFilter')

const BeezUPCommonChannelCategoryIdSchema = z
  .guid()
  .openapi({ example: '24f508da-a069-4467-b9d3-15baebe9bac7' })
  .openapi('BeezUPCommonChannelCategoryId')

const BeezUPCommonChannelCategoryPathSchema = z
  .array(z.string())
  .openapi({ description: 'The channel category path', example: ['Clothing', 'Women', 'Shoes'] })
  .openapi('BeezUPCommonChannelCategoryPath')

const BeezUPCommonChannelColumnIdSchema = z
  .guid()
  .openapi({
    description: 'The channel column identifier',
    example: '8a76f06a-fefc-4c0d-bcfe-b210f1482977',
  })
  .openapi('BeezUPCommonChannelColumnId')

const BeezUPCommonChannelColumnNameSchema = z
  .string()
  .openapi({ description: 'The channel column name', example: 'NAME' })
  .openapi('BeezUPCommonChannelColumnName')

const BeezUPCommonColumnDataTypeSchema = z
  .enum([
    'String',
    'Url',
    'Text',
    'Decimal',
    'DateTime',
    'Int',
    'SpecialInt',
    'InStock',
    'Unknown',
    'ImageUrl',
  ])
  .default('String')
  .openapi({
    description: 'Data type of the column, will be used for parsing and for consolidation proces',
    example: 'String',
  })
  .openapi('BeezUPCommonColumnDataType')

const BeezUPCommonColumnImportanceSchema = z
  .enum(['Required', 'Recommended', 'Optional'])
  .default('Optional')
  .openapi({ description: 'Importance of the column', example: 'Required' })
  .openapi('BeezUPCommonColumnImportance')

const BeezUPCommonCountryIsoCodeAlpha3Schema = z
  .string()
  .openapi({
    description:
      'The country iso code alpha 3 <a href="https://en.wikipedia.org/wiki/ISO_3166-1_alpha-3">(ISO 3166-1_alpha-3)</a>',
    example: 'FRA',
    'x-lov': 'Country',
  })
  .openapi('BeezUPCommonCountryIsoCodeAlpha3')

const BeezUPCommonCurrencyCodeSchema = z
  .string()
  .openapi({
    description:
      'The currency code <a href="https://en.wikipedia.org/wiki/ISO_4217">(ISO 4217)</a>\n',
    example: 'EUR',
  })
  .openapi('BeezUPCommonCurrencyCode')

const BeezUPCommonDocUrlSchema = z
  .url()
  .openapi({
    description: 'The documentation related to this operation.',
    example: 'https://api-docs.beezup.com/#operation/EnableChannelCatalog',
  })
  .openapi('BeezUPCommonDocUrl')

const BeezUPCommonEmailSchema = z
  .email()
  .regex(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/)
  .openapi({ description: 'The email', example: 'paulsimon@mysupercompany.com' })
  .openapi('BeezUPCommonEmail')

const BeezUPCommonUserErrorMessageSchema = z
  .object({
    arguments: z
      .array(
        z
          .object({
            name: z
              .string()
              .openapi({
                description: 'The key of the parameter',
                example: 'currentCatalogImportationId',
              }),
            value: z
              .object({})
              .openapi({ description: 'The value of the parameter. Depending to the type.' }),
          })
          .openapi({ required: ['name', 'value'] }),
      )
      .exactOptional()
      .openapi({ description: 'a dictionary string/object' }),
    code: z
      .string()
      .openapi({
        description:
          "the error code. The error code can be a pattern containing the argument's name",
        example: 'CatalogImportationAlreadyInProgress(ExecutionId currentCatalogImportationId)',
      }),
    cultureName: z
      .string()
      .exactOptional()
      .openapi({
        description: 'If the error is translated, the culture name will be indicated',
        example: 'en',
        'x-lov': 'Go2CultureName',
      }),
    docUrl: BeezUPCommonDocUrlSchema.exactOptional(),
    message: z
      .string()
      .openapi({
        description: 'The error message',
        example:
          'There is already an importation in progress: b24d0dd8-a561-478a-9b26-34f573f03527\n',
      }),
  })
  .openapi({ required: ['code', 'message'] })
  .openapi('BeezUPCommonUserErrorMessage')

const BeezUPCommonErrorResponseMessageSchema = z
  .object({ errors: z.array(BeezUPCommonUserErrorMessageSchema) })
  .openapi({ required: ['errors'] })
  .openapi('BeezUPCommonErrorResponseMessage')

const BeezUPCommonExceptionDetailSchema = z
  .object({
    helpLink: z.string().exactOptional(),
    message: z.string().exactOptional(),
    stackTrace: z.string().exactOptional(),
    type: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('BeezUPCommonExceptionDetail')

const BeezUPCommonErrorSummarySchema = z
  .object({
    errorArguments: z.record(z.string(), z.string()).exactOptional(),
    errorCode: z.string().exactOptional(),
    errorGuid: z.uuid().exactOptional(),
    errorMessage: z.string().exactOptional(),
    exceptionDetail: BeezUPCommonExceptionDetailSchema.exactOptional(),
    objectName: z.string().exactOptional(),
    propertyName: z.string().exactOptional(),
    propertyValue: z.string().exactOptional(),
    source: z.string().exactOptional(),
    technicalErrorMessage: z.string().exactOptional(),
    utcDate: z.iso.datetime({ offset: true }).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('BeezUPCommonErrorSummary')

const BeezUPCommonHrefSchema = z
  .string()
  .openapi({
    description: 'Indicate the relative uri for this link',
    example: '/v2/marketplaces/orders/{marketplaceTechnicalCode}/{accountId}/{beezUPOrderId}',
  })
  .openapi('BeezUPCommonHref')

const BeezUPCommonHttpMethodSchema = z
  .enum(['GET', 'POST', 'PATCH', 'DELETE', 'PUT', 'HEAD'])
  .default('GET')
  .openapi({ description: 'Indicate the http method to use on this link', example: 'GET' })
  .openapi('BeezUPCommonHttpMethod')

const BeezUPCommonInfoSummarySchema = z
  .object({
    informationArguments: z.record(z.string(), z.string()).exactOptional(),
    informationCode: z.string().exactOptional(),
    informationMessage: z.string().exactOptional(),
    objectName: z.string().exactOptional(),
    propertyName: z.string().exactOptional(),
    propertyValue: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('BeezUPCommonInfoSummary')

const BeezUPCommonSuccessSummarySchema = z
  .object({
    objectName: z.string().exactOptional(),
    propertyName: z.string().exactOptional(),
    propertyValue: z.string().exactOptional(),
    successArguments: z.record(z.string(), z.string()).exactOptional(),
    successCode: z.string().exactOptional(),
    successMessage: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('BeezUPCommonSuccessSummary')

const BeezUPCommonWarningSummarySchema = z
  .object({
    technicalErrorMessage: z.string().exactOptional(),
    warningArguments: z.record(z.string(), z.string()).exactOptional(),
    warningCode: z.string().exactOptional(),
    warningMessage: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('BeezUPCommonWarningSummary')

const BeezUPCommonInfoSummariesSchema = z
  .object({
    errors: z.array(BeezUPCommonErrorSummarySchema).exactOptional(),
    informations: z.array(BeezUPCommonInfoSummarySchema).exactOptional(),
    successes: z.array(BeezUPCommonSuccessSummarySchema).exactOptional(),
    warnings: z.array(BeezUPCommonWarningSummarySchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('BeezUPCommonInfoSummaries')

const BeezUPCommonLOVLink3Schema = z
  .object({
    href: z
      .url()
      .openapi({
        description: 'Indicate the uri to the list of value',
        example: '/v2/public/Go2CultureName',
      }),
    method: BeezUPCommonHttpMethodSchema.exactOptional(),
  })
  .openapi({
    description: 'Describe the way you have to follow to get access to the LOV',
    required: ['href'],
  })
  .openapi('BeezUPCommonLOVLink3')

const BeezUPCommonOperationIdSchema = z
  .string()
  .openapi({ description: 'The operationId to call.', example: 'GetOrder' })
  .openapi('BeezUPCommonOperationId')

const BeezUPCommonParameterInSchema = z
  .enum(['path', 'header', 'query', 'body'])
  .openapi({
    description:
      '* path: if the parameter must be pass in the path uri\n* header: if the parameter must be passed in http header\n* query: if the parameter must be passed in querystring\n* body: if the paramter must be passed in the body\n',
    example: 'path',
  })
  .openapi('BeezUPCommonParameterIn')

const BeezUPCommonParameterTypeSchema = z
  .enum(['string', 'integer', 'number', 'boolean', 'object', 'array', 'date', 'date-time'])
  .default('string')
  .openapi({ description: 'The value type of the parameter', example: 'string' })
  .openapi('BeezUPCommonParameterType')

const BeezUPCommonLinkParameterProperty3Schema = z
  .object({
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'description of the parameter', example: 'the store identifier' }),
    label: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The label corresponding to the link parameter property. This label is automatically translated based on the Accept-Language http header.',
        example: 'The translated label',
      }),
    lovLink: BeezUPCommonLOVLink3Schema.exactOptional(),
    lovRequired: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "If true, you MUST use indicate a value from the list of values otherwise it's a freetext",
        example: 'true',
      }),
    required: z.boolean().exactOptional().openapi({ example: 'true' }),
    schema: z
      .string()
      .exactOptional()
      .openapi({ description: 'schema of the parameter', example: 'orderListRequest' }),
    type: BeezUPCommonParameterTypeSchema,
    value: z
      .object({})
      .exactOptional()
      .openapi({
        description: 'The value of the parameter. It can be an integer a string or an object.',
      }),
  })
  .openapi({ required: ['type'] })
  .openapi('BeezUPCommonLinkParameterProperty3')

const BeezUPCommonLinkParameter3Schema = z
  .object({
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'description of the parameter', example: 'the store identifier' }),
    in: BeezUPCommonParameterInSchema,
    label: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The label corresponding to the link parameter. This label is automatically translated based on the Accept-Language http header.',
        example: 'The translated label',
      }),
    lovLink: BeezUPCommonLOVLink3Schema.exactOptional(),
    lovRequired: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "If true, you MUST indicate a value from the list of values otherwise it's a freetext",
        example: 'true',
      }),
    properties: z
      .record(z.string(), BeezUPCommonLinkParameterProperty3Schema)
      .exactOptional()
      .openapi({
        description:
          'If the parameter is an object with flexible properties (additionProperties/dictionary), we will describe the properties of the object.',
        example: { shipOrder: { type: 'string' } },
      }),
    required: z.boolean().default(false).exactOptional().openapi({ example: 'true' }),
    schema: z
      .string()
      .exactOptional()
      .openapi({ description: 'schema of the parameter', example: 'orderListRequest' }),
    type: BeezUPCommonParameterTypeSchema.exactOptional(),
    value: z
      .object({})
      .exactOptional()
      .openapi({
        description: 'The value of the parameter. It can be an integer a string or an object.',
      }),
  })
  .openapi({ required: ['in'] })
  .openapi('BeezUPCommonLinkParameter3')

const BeezUPCommonLink3Schema = z
  .object({
    allOptionalParamsProvided: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'indicates whether all optionals params have been provided' }),
    allRequiredParamsProvided: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'indicates whether all required params have been provided' }),
    description: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The description of the link',
        example: 'This is a description link',
      }),
    docUrl: BeezUPCommonDocUrlSchema.exactOptional(),
    href: BeezUPCommonHrefSchema,
    info: BeezUPCommonInfoSummariesSchema.exactOptional(),
    label: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The label corresponding to the link. This label is automatically translated based on the Accept-Language http header.',
        example: 'The translated label',
      }),
    method: BeezUPCommonHttpMethodSchema.exactOptional(),
    operationId: BeezUPCommonOperationIdSchema.exactOptional(),
    parameters: z.record(z.string(), BeezUPCommonLinkParameter3Schema).exactOptional(),
    urlTemplated: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'indicates whether the href is templated or not' }),
  })
  .openapi({ required: ['href'] })
  .openapi('BeezUPCommonLink3')

const BeezUPCommonListOfValueItemSchema = z
  .object({
    codeIdentifier: z.string().openapi({ example: 'FRA' }),
    intIdentifier: z.int32().openapi({ example: '1' }),
    position: z.int32().exactOptional().openapi({ example: '1' }),
    translationText: z.string().exactOptional().openapi({ example: 'France' }),
  })
  .openapi({
    description: 'This object is used by LOV apis',
    required: ['codeIdentifier', 'intIdentifier'],
  })
  .openapi('BeezUPCommonListOfValueItem')

const BeezUPCommonMarketplaceAccountIdSchema = z
  .int32()
  .openapi({
    description:
      'The marketplace account identifier in BeezUP. This account identifier is based on your api settings.',
    example: '1234',
  })
  .openapi('BeezUPCommonMarketplaceAccountId')

const BeezUPCommonMarketplaceBusinessCodeSchema = z
  .string()
  .openapi({
    description:
      'In an marketplace technical code like CDiscount you can have several marketplaces like GO SPORT, etc. We identify them by a business code.',
    example: 'GOSPORT',
    'x-lov': 'MarketplaceBusinessCode',
  })
  .openapi('BeezUPCommonMarketplaceBusinessCode')

const BeezUPCommonMarketplaceTechnicalCodeSchema = z
  .string()
  .openapi({
    description: 'The technical code of the marketplace.',
    example: 'Amazon',
    'x-lov': 'OMMarketplaceTechnicalCode',
  })
  .openapi('BeezUPCommonMarketplaceTechnicalCode')

const BeezUPCommonPageNumberSchema = z
  .int32()
  .min(1)
  .default(1)
  .openapi({ description: 'Indicates the page number', example: '1' })
  .openapi('BeezUPCommonPageNumber')

const BeezUPCommonPageSizeSchema = z
  .int32()
  .min(25)
  .max(100)
  .default(100)
  .openapi({ description: 'Indicate the item count per page', example: '100' })
  .openapi('BeezUPCommonPageSize')

const BeezUPCommonPaginationResultLinksSchema = z
  .object({
    first: BeezUPCommonLink3Schema,
    last: BeezUPCommonLink3Schema,
    next: BeezUPCommonLink3Schema.exactOptional(),
    previous: BeezUPCommonLink3Schema.exactOptional(),
  })
  .openapi({
    description: "The navigation links 'first', 'last', 'next', 'previous'",
    required: ['first', 'last'],
  })
  .openapi('BeezUPCommonPaginationResultLinks')

const BeezUPCommonPaginationResultSchema = z
  .object({
    entryCount: z
      .int()
      .min(0)
      .openapi({ description: 'The entry count currently returned', example: '25' }),
    links: BeezUPCommonPaginationResultLinksSchema,
    pageCount: z.int().min(0).openapi({ description: 'The page count', example: '38' }),
    totalEntryCount: z
      .int()
      .min(0)
      .openapi({ description: 'The total entry count', example: '943' }),
  })
  .openapi({
    example: {
      entryCount: '25',
      links: {
        first: {
          href: '/v2/user/marketplaces/orders/list/full',
          method: 'POST',
          parameters: [
            {
              in: 'body',
              name: 'request',
              schema: 'orderListRequest',
              type: 'object',
              value: {
                beginPeriodUtcDate: '2014-08-25T07:32:31.584Z',
                endPeriodUtcDate: '2014-09-24T07:32:31.584Z',
                pageNumber: '1',
                pageSize: '25',
              },
            },
          ],
        },
        last: {
          href: '/v2/user/marketplaces/orders/list/full',
          method: 'POST',
          parameters: [
            {
              in: 'body',
              name: 'request',
              schema: 'orderListRequest',
              type: 'object',
              value: {
                beginPeriodUtcDate: '2014-08-25T07:32:31.584Z',
                endPeriodUtcDate: '2014-09-24T07:32:31.584Z',
                pageNumber: '38',
                pageSize: '25',
              },
            },
          ],
        },
        next: {
          href: '/v2/user/marketplaces/orders/list/full',
          method: 'POST',
          parameters: [
            {
              in: 'body',
              name: 'request',
              schema: 'orderListRequest',
              type: 'object',
              value: {
                beginPeriodUtcDate: '2014-08-25T07:32:31.584Z',
                endPeriodUtcDate: '2014-09-24T07:32:31.584Z',
                pageNumber: '2',
                pageSize: '25',
              },
            },
          ],
        },
      },
      pageCount: '38',
      totalEntryCount: '943',
    },
    required: ['entryCount', 'pageCount', 'totalEntryCount', 'links'],
  })
  .openapi('BeezUPCommonPaginationResult')

const BeezUPCommonProductBasicInfoSchema = z
  .object({
    productExists: z
      .boolean()
      .openapi({
        description: 'Indicates if the product still exists in your catalog',
        example: 'true',
      }),
    productId: z
      .guid()
      .openapi({
        description: 'The product identifier',
        example: '00000000-0000-0000-0000-000000000000',
      }),
    productImageUrl: z
      .url()
      .exactOptional()
      .openapi({
        description: 'The product image Url',
        example:
          'http://i2.cdscdn.com/pdt2/3/9/0/1/550x550/hai6901018043390/rw/haier-b20fwrss-refrigerateur-americain.jpg',
      }),
    productSku: z.string().openapi({ description: 'The product SKU', example: 'SKU1234' }),
    productTitle: z
      .string()
      .openapi({ description: 'The product tile', example: 'My supert product' }),
  })
  .openapi({
    description: 'The basic information related to a product',
    required: ['productId', 'productSku', 'productTitle', 'productExists'],
  })
  .openapi('BeezUPCommonProductBasicInfo')

const BeezUPCommonProductIdSchema = z
  .guid()
  .openapi({
    description: 'The product identifier',
    example: '578419df-1bbf-41a6-96fa-862e42182b67',
  })
  .openapi('BeezUPCommonProductId')

const BeezUPCommonStoreIdSchema = z
  .guid()
  .openapi({ description: 'The store identifier', example: '64f43358-63a1-47f7-97ec-0301fc39956b' })
  .openapi('BeezUPCommonStoreId')

const BeezUPCommonUserIdSchema = z
  .guid()
  .openapi({ description: 'The user identifier', example: '8a7fbdec-9e71-472e-9974-27d5c1d57cf8' })
  .openapi('BeezUPCommonUserId')

const HttpMethodSchema = z
  .enum(['GET', 'POST', 'PATCH', 'DELETE', 'PUT', 'HEAD'])
  .default('GET')
  .openapi({
    description: 'Indicate the http method to use on this link',
    example: 'GET',
    'x-exclude': true,
  })
  .openapi('HttpMethod')

const LOVLink3Schema = z
  .object({
    href: z
      .url()
      .openapi({
        description: 'Indicate the uri to the list of value',
        example: '/merchant/lov/v1/Go2CultureName',
      }),
    method: HttpMethodSchema.exactOptional(),
  })
  .openapi({
    description: 'Describe the way you have to follow to get access to the LOV',
    required: ['href'],
    'x-exclude': true,
  })
  .openapi('LOVLink3')

const AccountIdSchema = z
  .int32()
  .openapi({
    description:
      'The marketplace account identifier in BeezUP. This account identifier is based on your api settings.',
    example: '1234',
  })
  .openapi('AccountId')

const AccountingEmailsSchema = z
  .array(BeezUPCommonEmailSchema)
  .openapi({
    description: 'Your company accounting emails',
    example: ['myaccountemail@mysupercompany.com'],
  })
  .openapi('AccountingEmails')

const AddressSchema = z
  .string()
  .openapi({ description: 'Your address', example: '21 jump street' })
  .openapi('Address')

const CitySchema = z
  .string()
  .openapi({ description: 'Your address city', example: 'New-York' })
  .openapi('City')

const CompanySchema = z
  .string()
  .openapi({ description: 'Your company name', example: 'My super company' })
  .openapi('Company')

const PostalCodeSchema = z
  .string()
  .openapi({ description: 'Your address postal code', example: '13014' })
  .openapi('PostalCode')

const VatNumberSchema = z
  .string()
  .openapi({
    description:
      'Your company VATNumber. Used for french company. This number is checked with official web service before being saved.',
    example: '1234567890',
  })
  .openapi('VatNumber')

const CompanyInfoSchema = z
  .object({
    accountingEmails: AccountingEmailsSchema.exactOptional(),
    address: AddressSchema,
    city: CitySchema,
    company: CompanySchema,
    countryIsoCodeAlpha3: BeezUPCommonCountryIsoCodeAlpha3Schema,
    postalCode: PostalCodeSchema,
    vatNumber: VatNumberSchema.exactOptional(),
  })
  .openapi({ required: ['company', 'address', 'postalCode', 'city', 'countryIsoCodeAlpha3'] })
  .openapi('CompanyInfo')

const LinksActivateUserAccountLinkSchema = BeezUPCommonLink3Schema.and(
  z.any().openapi({ example: { href: '/v2/user/customer/account/activate', method: 'POST' } }),
).openapi('LinksActivateUserAccountLink')

const LinksChangeEmailLinkSchema = BeezUPCommonLink3Schema.and(
  z.any().openapi({ example: { href: '/v2/user/customer/account/changeEmail', method: 'POST' } }),
).openapi('LinksChangeEmailLink')

const LinksChangePasswordLinkSchema = BeezUPCommonLink3Schema.and(
  z
    .any()
    .openapi({ example: { href: '/v2/user/customer/account/changePassword', method: 'POST' } }),
).openapi('LinksChangePasswordLink')

const LinksGetCreditCardInfoLinkSchema = BeezUPCommonLink3Schema.and(
  z.any().openapi({ example: { href: '/v2/user/customer/account/creditCardInfo', method: 'GET' } }),
).openapi('LinksGetCreditCardInfoLink')

const LinksGetProfilePictureInfoLinkSchema = BeezUPCommonLink3Schema.and(
  z
    .any()
    .openapi({ example: { href: '/v2/user/customer/account/profilePictureInfo', method: 'GET' } }),
).openapi('LinksGetProfilePictureInfoLink')

const LinksSaveCompanyInfoLinkSchema = BeezUPCommonLink3Schema.and(
  z.any().openapi({ example: { href: '/v2/user/customer/account/companyInfo', method: 'PUT' } }),
).openapi('LinksSaveCompanyInfoLink')

const LinksSaveCreditCardInfoLinkSchema = BeezUPCommonLink3Schema.and(
  z.any().openapi({ example: { href: '/v2/user/customer/account/creditCardInfo', method: 'PUT' } }),
).openapi('LinksSaveCreditCardInfoLink')

const LinksSavePersonalInfoLinkSchema = BeezUPCommonLink3Schema.and(
  z.any().openapi({ example: { href: '/v2/user/customer/account/personalInfo', method: 'PUT' } }),
).openapi('LinksSavePersonalInfoLink')

const LinksSaveProfilePictureInfoLinkSchema = BeezUPCommonLink3Schema.and(
  z
    .any()
    .openapi({ example: { href: '/v2/user/customer/account/profilePictureInfo', method: 'PUT' } }),
).openapi('LinksSaveProfilePictureInfoLink')

const LinksGetUserAccountInfoLinkSchema = BeezUPCommonLink3Schema.and(
  z.any().openapi({ example: { href: '/v2/user/customer/account', method: 'GET' } }),
).openapi('LinksGetUserAccountInfoLink')

const AccountInfoLinksSchema = z
  .object({
    activateUserAccount: LinksActivateUserAccountLinkSchema.exactOptional(),
    changeEmail: LinksChangeEmailLinkSchema,
    changePassword: LinksChangePasswordLinkSchema,
    getCreditCardInfo: LinksGetCreditCardInfoLinkSchema,
    getProfilePictureInfo: LinksGetProfilePictureInfoLinkSchema,
    saveCompanyInfo: LinksSaveCompanyInfoLinkSchema,
    saveCreditCardInfo: LinksSaveCreditCardInfoLinkSchema,
    savePersonalInfo: LinksSavePersonalInfoLinkSchema,
    saveProfilePictureInfo: LinksSaveProfilePictureInfoLinkSchema,
    self: LinksGetUserAccountInfoLinkSchema,
  })
  .openapi({
    description: 'The different actions you can make on this account',
    required: [
      'self',
      'savePersonalInfo',
      'changeEmail',
      'changePassword',
      'getProfilePictureInfo',
      'saveCompanyInfo',
      'saveProfilePictureInfo',
      'getCreditCardInfo',
      'saveCreditCardInfo',
    ],
  })
  .openapi('AccountInfoLinks')

const BeezUPTimeZoneIdSchema = z
  .int32()
  .openapi({
    description: 'The time zone identifier based on the list of values /v2/user/lov/BeezUPTimeZone',
    example: '79',
    'x-lov': 'BeezUPTimeZone',
  })
  .openapi('BeezUPTimeZoneId')

const FirstNameSchema = z
  .string()
  .openapi({ description: 'Your first name', example: 'Paul' })
  .openapi('FirstName')

const LastNameSchema = z
  .string()
  .openapi({ description: 'Your last name', example: 'Simon' })
  .openapi('LastName')

const PhoneNumberSchema = z
  .string()
  .openapi({ description: 'Your phone number', example: '5551234' })
  .openapi('PhoneNumber')

const WhatIDoSchema = z
  .string()
  .openapi({ description: 'Your role in your company', example: "I'm the Manager on this company" })
  .openapi('WhatIDo')

const PersonalInfoSchema = z
  .object({
    beezUPTimeZoneId: BeezUPTimeZoneIdSchema,
    firstName: FirstNameSchema,
    lastName: LastNameSchema,
    phoneNumber: PhoneNumberSchema,
    whatIDo: WhatIDoSchema.exactOptional(),
  })
  .openapi({ required: ['firstName', 'lastName', 'phoneNumber', 'beezUPTimeZoneId'] })
  .openapi('PersonalInfo')

const ProfilePictureUrlSchema = z
  .string()
  .regex(/^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/)
  .openapi({
    description: 'Indicate the url of your picture profil',
    example:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Marlon_Brando_%28cropped%29.jpg/220px-Marlon_Brando_%28cropped%29.jpg',
  })
  .openapi('ProfilePictureUrl')

const AccountStatusSchema = z
  .enum(['Active', 'SystemBlocked', 'UserBlocked', 'NotActivated'])
  .openapi({
    description:
      'The account status\n* Active:  When the account is active\n* SystemBlocked:  When all stores on the account are blocked by the system\n* UserBlocked: When all stores on the account are blocked on GO not on the system\n* NotActivated: When the email is not verified\n',
    example: 'Active',
  })
  .openapi('AccountStatus')

const AccountInfoSchema = z
  .object({
    commercialOwnerEmail: BeezUPCommonEmailSchema.exactOptional(),
    companyInfo: CompanyInfoSchema.exactOptional(),
    email: BeezUPCommonEmailSchema,
    info: BeezUPCommonInfoSummariesSchema.exactOptional(),
    links: AccountInfoLinksSchema,
    personalInfo: PersonalInfoSchema.exactOptional(),
    profilePictureUrl: ProfilePictureUrlSchema.exactOptional(),
    status: AccountStatusSchema,
    userId: BeezUPCommonUserIdSchema,
  })
  .openapi({ required: ['userId', 'email', 'status', 'links'] })
  .openapi('AccountInfo')

const LinksGetPublicationsLinkSchema = BeezUPCommonLink3Schema.and(
  z
    .any()
    .openapi({
      example: { href: '/v2/user/marketplaces/channelcatalogs/publications/Amazon/123/history' },
    }),
).openapi('LinksGetPublicationsLink')

const AccountPublicationsLinksSchema = z
  .object({ self: LinksGetPublicationsLinkSchema })
  .openapi({ required: ['self'] })
  .openapi('AccountPublicationsLinks')

const FeedTypeSchema = z
  .enum(['Products', 'Inventory', 'Pricing', 'Images', 'Relationships', 'Unpublish', 'Offers'])
  .openapi({
    description: 'The Feed Type',
    example: 'Offers',
    'x-lov': 'MarketplacePublicationFeedType',
  })
  .openapi('FeedType')

const PublicationFeedReportingSchema = z
  .object({
    completed: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Indicates if the publication is completed or not',
        example: 'true',
      }),
    endUtcDate: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'The feed publication end time (UTC timezone)',
        example: '2016-02-13T12:02:00Z',
      }),
    errorMessage: z
      .string()
      .exactOptional()
      .openapi({ description: 'The error message', example: '' }),
    exportedProducts: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'The product count downloaded from BeezUP Export',
        example: '10142',
      }),
    failedItems: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'The item count (products or offers) the marketplace flagged as failed',
        example: '1',
      }),
    feedType: FeedTypeSchema,
    htmlReportGenerationErrorMessage: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The error message if the Html Report generation failed',
        example: 'Example error message',
      }),
    htmlReportUrl: z
      .url()
      .exactOptional()
      .openapi({
        description: 'The Url for the Html Report generated',
        example: 'http://www.myreporthtml.com',
      }),
    processingStatus: z.string().openapi({ description: 'The processing status', example: 'Done' }),
    publishedItems: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'The item count (products or offers) the marketplace flagged as successful',
        example: '10041',
      }),
    publishedItemsWithWarning: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The item count (products or offers) the marketplace flagged as successful with warnings',
        example: '123',
      }),
    startUtcDate: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'The feed publication start time (UTC timezone)',
        example: '2016-02-13T12:01:11Z',
      }),
    transmittedItems: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'The item count (products or offers) sent to the marketplace',
        example: '10042',
      }),
  })
  .openapi({
    description: 'Publication feed reporting',
    required: ['feedType', 'processingStatus', 'startUtcDate'],
  })
  .openapi('PublicationFeedReporting')

const PublicationTypeSchema = z
  .enum(['PublishProducts', 'PublishOffers', 'Unpublish'])
  .openapi({
    description: 'The Publication Type',
    example: 'PublishOffers',
    'x-lov': 'MarketplacePublicationType',
  })
  .openapi('PublicationType')

const PublicationReportingSchema = z
  .object({
    feeds: z
      .array(PublicationFeedReportingSchema)
      .openapi({
        description: 'The feeds that were published',
        example: [
          {
            endUtcDate: '2016-02-13T12:02:00Z',
            errorMessage: '',
            exportedProducts: '10142',
            failedItems: '1',
            feedType: 'Offers',
            htmlReportGenerationErrorMessage: '',
            htmlReportUrl: 'http://www.myreporthtml.com',
            processingStatus: 'Done',
            publishedItems: '10041',
            publishedItemsWithWarning: '123',
            startUtcDate: '2016-02-13T12:01:11Z',
            transmittedItems: '10042',
          },
        ],
      }),
    publicationType: PublicationTypeSchema,
  })
  .openapi({
    description: 'Model for a publication reporting, can have multiple feeds',
    required: ['publicationType', 'feeds'],
  })
  .openapi('PublicationReporting')

const AccountPublicationsSchema = z
  .object({
    links: AccountPublicationsLinksSchema,
    publications: z.array(PublicationReportingSchema).openapi({
      description: 'The recent publications for the requested account',
      example: [
        {
          feeds: [
            {
              endUtcDate: '2016-02-13T12:02:00Z',
              errorMessage: '',
              exportedProducts: '10142',
              failedItems: '1',
              feedType: 'Offers',
              htmlReportGenerationErrorMessage: '',
              htmlReportUrl: 'http://www.myreporthtml.com',
              processingStatus: 'Done',
              publishedItems: '10041',
              publishedItemsWithWarning: '123',
              startUtcDate: '2016-02-13T12:01:11Z',
              transmittedItems: '10042',
            },
            {
              endUtcDate: '2016-02-13T12:02:00Z',
              errorMessage: '',
              exportedProducts: '10142',
              failedItems: '1',
              feedType: 'Inventory',
              htmlReportGenerationErrorMessage: '',
              htmlReportUrl: 'http://www.myreporthtml.com',
              processingStatus: 'Done',
              publishedItems: '10041',
              publishedItemsWithWarning: '123',
              startUtcDate: '2016-02-13T12:01:11Z',
              transmittedItems: '10042',
            },
            {
              errorMessage: '',
              exportedProducts: '10142',
              failedItems: '1',
              feedType: 'Pricing',
              htmlReportGenerationErrorMessage: '',
              htmlReportUrl: 'http://www.myreporthtml.com',
              processingStatus: 'InProgress',
              publishedItems: '10041',
              publishedItemsWithWarning: '123',
              startUtcDate: '2016-02-13T12:01:11Z',
              transmittedItems: '10042',
            },
          ],
          publicationType: 'PublishOffers',
        },
        {
          feeds: [
            {
              endUtcDate: '2016-02-13T12:02:00Z',
              errorMessage: '',
              exportedProducts: '10142',
              failedItems: '1',
              feedType: 'Product',
              htmlReportGenerationErrorMessage: '',
              htmlReportUrl: 'http://www.myreporthtml.com',
              processingStatus: 'Done',
              publishedItems: '10041',
              publishedItemsWithWarning: '123',
              startUtcDate: '2016-02-13T12:01:11Z',
              transmittedItems: '10042',
            },
            {
              endUtcDate: '2016-02-13T12:02:00Z',
              errorMessage: '',
              exportedProducts: '10142',
              failedItems: '1',
              feedType: 'Inventory',
              htmlReportGenerationErrorMessage: '',
              htmlReportUrl: 'http://www.myreporthtml.com',
              processingStatus: 'Done',
              publishedItems: '10041',
              publishedItemsWithWarning: '123',
              startUtcDate: '2016-02-13T12:01:11Z',
              transmittedItems: '10042',
            },
            {
              errorMessage: '',
              exportedProducts: '10142',
              failedItems: '1',
              feedType: 'Pricing',
              htmlReportGenerationErrorMessage: '',
              htmlReportUrl: 'http://www.myreporthtml.com',
              processingStatus: 'InProgress',
              publishedItems: '10041',
              publishedItemsWithWarning: '123',
              startUtcDate: '2016-02-13T12:01:11Z',
              transmittedItems: '10042',
            },
          ],
          publicationType: 'PublishProducts',
        },
      ],
    }),
  })
  .openapi({
    description: 'The publication history for an account',
    required: ['links', 'publications'],
  })
  .openapi('AccountPublications')

const AccountSynchronizationSchema = z
  .object({
    accountId: AccountIdSchema,
    completedHarvestSynchroUtcDate: z.iso.datetime({ offset: true }).exactOptional(),
    marketplaceBusinessCode: BeezUPCommonMarketplaceBusinessCodeSchema,
    marketplaceTechnicalCode: BeezUPCommonMarketplaceTechnicalCodeSchema,
  })
  .openapi({ required: ['accountId', 'marketplaceTechnicalCode', 'marketplaceBusinessCode'] })
  .openapi('AccountSynchronization')

const AccountSynchronizationListSchema = z
  .object({ accountSynchronizations: z.array(AccountSynchronizationSchema).exactOptional() })
  .openapi({ required: [] })
  .openapi('AccountSynchronizationList')

const ActivateSubscriptionRequestSchema = z
  .object({
    recoverBeginPeriodOrderLastModificationUtcDate: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'If set, the date must be in the past the subscription will recover existing orders using the begin period order last modification date. If not set then you will receive new/updated orders in real-time.',
      }),
    recoverEndPeriodOrderLastModificationUtcDate: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'If end period set, first the date must be in the past, the subscription will recover existing orders using the begin and the end period order last modification date. \nIf end period is not set and the begin period is set, then you will recover existing orders from the past using the begin period last modification date and after than you will continue to receive new/updated orders in real-time.\nIf begin/end period are not set then you will receive new/updated orders in real-time.\nREMARK: The begin period is required if the end period is fulfilled.\nREMARK: If the end period is order last modification date is indicated then once we have push all orders to your target url the subscription will be desactivated.',
      }),
  })
  .openapi({ 'x-format': 'Message', required: [] })
  .openapi('ActivateSubscriptionRequest')

const AddChannelCatalogRequestSchema = z
  .object({ channelId: BeezUPCommonChannelIdSchema, storeId: BeezUPCommonStoreIdSchema })
  .openapi({ required: ['channelId', 'storeId'] })
  .openapi('AddChannelCatalogRequest')

const AlertEnabledSchema = z
  .boolean()
  .openapi({ description: 'Is the alert enable ?', example: 'true' })
  .openapi('AlertEnabled')

const AlertIdSchema = z
  .int32()
  .openapi({ description: 'Alert identifier', example: '8' })
  .openapi('AlertId')

const AlertNameSchema = z
  .string()
  .openapi({ description: 'The alert name', example: 'NoImportSinceXDays' })
  .openapi('AlertName')

const AlertPropertyIdSchema = z
  .int32()
  .openapi({ description: 'The property identifier of the alert', example: '2' })
  .openapi('AlertPropertyId')

const AlertPropertyValueSchema = z
  .string()
  .openapi({ description: 'The property value', example: '2' })
  .openapi('AlertPropertyValue')

const LinksAnalyticsIndexLinkSchema = BeezUPCommonLink3Schema.and(
  z.any().openapi({ example: { href: '/v2/user/analytics', method: 'GET' } }),
).openapi('LinksAnalyticsIndexLink')

const LinksGetTrackingStatusLinkSchema = BeezUPCommonLink3Schema.and(
  z.any().openapi({ example: { href: '/v2/user/analytics/tracking/status', method: 'GET' } }),
).openapi('LinksGetTrackingStatusLink')

const AnalyticsIndexLinksSchema = z
  .object({
    self: LinksAnalyticsIndexLinkSchema,
    trackingStatus: LinksGetTrackingStatusLinkSchema.exactOptional(),
  })
  .openapi({ required: ['self'] })
  .openapi('AnalyticsIndexLinks')

const AnalyticsIndexLovLinksSchema = z
  .object({
    analyticsNumericalProductColumnFilterOperatorNameLov:
      BeezUPCommonLOVLink3Schema.exactOptional(),
    analyticsProductColumnFilterOperatorNameLov: BeezUPCommonLOVLink3Schema.exactOptional(),
    analyticsStringProductColumnFilterOperatorNameLov: BeezUPCommonLOVLink3Schema.exactOptional(),
    performanceIndicatorFilterOperatorNameLov: BeezUPCommonLOVLink3Schema.exactOptional(),
    performanceIndicatorFormulaOperatorNameLov: BeezUPCommonLOVLink3Schema.exactOptional(),
    performanceIndicatorFormulaParameterTypeLov: BeezUPCommonLOVLink3Schema.exactOptional(),
    performanceIndicatorTypeForReportsByCategoryLov: BeezUPCommonLOVLink3Schema.exactOptional(),
    performanceIndicatorTypeForReportsByChannelLov: BeezUPCommonLOVLink3Schema.exactOptional(),
    performanceIndicatorTypeForReportsByProductLov: BeezUPCommonLOVLink3Schema.exactOptional(),
    performanceIndicatorTypeLov: BeezUPCommonLOVLink3Schema.exactOptional(),
    storeOptimisationRuleExecutionStatusLov: BeezUPCommonLOVLink3Schema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AnalyticsIndexLovLinks')

const LinksOptimiseLinkSchema = BeezUPCommonLink3Schema.and(
  z
    .any()
    .openapi({
      example: {
        href: '/v2/user/analytics/8f95eb1a-3691-4750-950d-a13c4a8a9bcc/optimisations/enable',
        method: 'POST',
        parameters: {
          request: {
            in: 'body',
            schema: 'optimiseRequest',
            type: 'object',
            value: {
              advancedFilters: {
                globalmarginPercent: '10',
                linkClickToOrderMaxDay: '5',
                linkClickToOrderType: 'OnClickDate',
                marginType: 'Global',
                onlyDirectSales: 'true',
                onlyPaymentValidatedOrders: 'true',
                performanceIndicatorFormula: {
                  firstParameter: 'Cost',
                  operatorName: 'Multiply',
                  secondParamter: 'ROI',
                  thirdParameter: '100',
                },
              },
              analyticsProductColumnFilters: {
                additionalAnalyticsProductColumnFilters: [
                  {
                    columnId: '672644c7-5bd0-4e25-88c1-1f732bda5e4c',
                    operatorName: 'NumericalGreaterThan',
                    values: ['100'],
                  },
                ],
                sku: 'M1234',
                title: 'Refrigérateur',
              },
              beginPeriodUtcDate: '2006-11-20T00:00:00Z',
              categoryFilter: { categoryPath: ['Home', 'Bedroom'] },
              channelId: '2dc136a7-0d3d-4cc9-a825-a28a42c53e28',
              endPeriodUtcDate: '2006-12-20T00:00:00Z',
              pageNumber: '1',
              pageSize: '100',
              performanceIndicatorFilters: [
                { operatorName: 'Equals', performanceIndicator: 'Cost', value: '10' },
              ],
              productState: 'All',
            },
          },
        },
      },
    }),
).openapi('LinksOptimiseLink')

const LinksOptimiseAllLinkSchema = BeezUPCommonLink3Schema.and(
  z
    .any()
    .openapi({
      example: {
        href: '/v2/user/analytics/8f95eb1a-3691-4750-950d-a13c4a8a9bcc/optimisations/all/enable',
        method: 'POST',
        parameters: {
          request: {
            in: 'body',
            schema: 'optimiseAllRequest',
            type: 'object',
            value: {
              advancedFilters: {
                globalmarginPercent: '10',
                linkClickToOrderMaxDay: '5',
                linkClickToOrderType: 'OnClickDate',
                marginType: 'Global',
                onlyDirectSales: 'true',
                onlyPaymentValidatedOrders: 'true',
                performanceIndicatorFormula: {
                  firstParameter: 'Cost',
                  operatorName: 'Multiply',
                  secondParamter: 'ROI',
                  thirdParameter: '100',
                },
              },
              analyticsProductColumnFilters: {
                additionalAnalyticsProductColumnFilters: [
                  {
                    columnId: '672644c7-5bd0-4e25-88c1-1f732bda5e4c',
                    operatorName: 'NumericalGreaterThan',
                    values: ['100'],
                  },
                ],
                sku: 'M1234',
                title: 'Refrigérateur',
              },
              beginPeriodUtcDate: '2006-11-20T00:00:00Z',
              categoryFilter: { categoryPath: ['Home', 'Bedroom'] },
              channelId: '2dc136a7-0d3d-4cc9-a825-a28a42c53e28',
              endPeriodUtcDate: '2006-12-20T00:00:00Z',
              performanceIndicatorFilters: [
                { operatorName: 'Equals', performanceIndicator: 'Cost', value: '10' },
              ],
              productState: 'All',
            },
          },
        },
      },
    }),
).openapi('LinksOptimiseAllLink')

const LinksOptimiseByCategoryLinkSchema = BeezUPCommonLink3Schema.and(
  z
    .any()
    .openapi({
      example: {
        href: '/v2/user/analytics/8f95eb1a-3691-4750-950d-a13c4a8a9bcc/optimisations/byCategory/4c376178-25b4-4656-a86e-e3bd3a25b139/enable',
        method: 'POST',
        parameters: {
          request: { in: 'body', type: '​array', value: ['a2d38563-50f0-43f1-be2b-b16e7ec4f007'] },
        },
      },
    }),
).openapi('LinksOptimiseByCategoryLink')

const LinksOptimiseByChannelLinkSchema = BeezUPCommonLink3Schema.and(
  z
    .any()
    .openapi({
      example: {
        href: '/v2/user/analytics/8f95eb1a-3691-4750-950d-a13c4a8a9bcc/optimisations/byChannel/a2d38563-50f0-43f1-be2b-b16e7ec4f007/enable',
        method: 'POST',
      },
    }),
).openapi('LinksOptimiseByChannelLink')

const LinksOptimiseByProductLinkSchema = BeezUPCommonLink3Schema.and(
  z
    .any()
    .openapi({
      example: {
        href: '/v2/user/analytics/8f95eb1a-3691-4750-950d-a13c4a8a9bcc/optimisations/byProduct/6d469a54-8426-4855-abc2-9e062e2056b9/enable',
        method: 'POST',
        parameters: {
          request: { in: 'body', type: '​array', value: ['a2d38563-50f0-43f1-be2b-b16e7ec4f007'] },
        },
      },
    }),
).openapi('LinksOptimiseByProductLink')

const LinksGetStoreReportByCategoryLinkSchema = BeezUPCommonLink3Schema.and(
  z
    .any()
    .openapi({
      example: {
        href: '/v2/user/analytics/8f95eb1a-3691-4750-950d-a13c4a8a9bcc/reports/bycategory',
        method: 'POST',
        parameters: { request: { in: 'body', schema: 'reportByCategoryRequest', type: 'object' } },
      },
    }),
).openapi('LinksGetStoreReportByCategoryLink')

const LinksGetStoreReportByChannelLinkSchema = BeezUPCommonLink3Schema.and(
  z
    .any()
    .openapi({
      example: {
        href: '/v2/user/analytics/8f95eb1a-3691-4750-950d-a13c4a8a9bcc/reports/bychannel',
        method: 'POST',
        parameters: { request: { in: 'body', schema: 'reportByChannelRequest', type: 'object' } },
      },
    }),
).openapi('LinksGetStoreReportByChannelLink')

const LinksGetStoreReportByDayLinkSchema = BeezUPCommonLink3Schema.and(
  z
    .any()
    .openapi({
      example: {
        href: '/v2/user/analytics/8f95eb1a-3691-4750-950d-a13c4a8a9bcc/reports/byday',
        method: 'POST',
        parameters: { request: { in: 'body', schema: 'reportByDayRequest', type: 'object' } },
      },
    }),
).openapi('LinksGetStoreReportByDayLink')

const LinksGetStoreReportByProductLinkSchema = BeezUPCommonLink3Schema.and(
  z
    .any()
    .openapi({
      example: {
        href: '/v2/user/analytics/8f95eb1a-3691-4750-950d-a13c4a8a9bcc/reports/byproduct',
        method: 'POST',
        parameters: { request: { in: 'body', schema: 'reportByProductRequest', type: 'object' } },
      },
    }),
).openapi('LinksGetStoreReportByProductLink')

const LinksGetReportFiltersLinkSchema = BeezUPCommonLink3Schema.and(
  z
    .any()
    .openapi({
      example: {
        href: '/v2/user/analytics/8f95eb1a-3691-4750-950d-a13c4a8a9bcc/reports/filters',
        method: 'GET',
      },
    }),
).openapi('LinksGetReportFiltersLink')

const LinksGetRulesLinkSchema = BeezUPCommonLink3Schema.and(
  z
    .any()
    .openapi({
      example: {
        href: '/v2/user/analytics/10af9486-e28e-47ab-b045-e13e4acd55c3/rules',
        method: 'GET',
      },
    }),
).openapi('LinksGetRulesLink')

const LinksGetStoreTrackedClicksLinkSchema = BeezUPCommonLink3Schema.and(
  z
    .any()
    .openapi({
      example: {
        href: '/v2/user/analytics/8f95eb1a-3691-4750-950d-a13c4a8a9bcc/tracking/clicks',
        method: 'GET',
      },
    }),
).openapi('LinksGetStoreTrackedClicksLink')

const LinksGetStoreTrackedExternalOrdersLinkSchema = BeezUPCommonLink3Schema.and(
  z
    .any()
    .openapi({
      example: {
        href: '/v2/user/analytics/8f95eb1a-3691-4750-950d-a13c4a8a9bcc/tracking/externalorders',
        method: 'GET',
      },
    }),
).openapi('LinksGetStoreTrackedExternalOrdersLink')

const LinksGetStoreTrackedOrdersLinkSchema = BeezUPCommonLink3Schema.and(
  z
    .any()
    .openapi({
      example: {
        href: '/v2/user/analytics/8f95eb1a-3691-4750-950d-a13c4a8a9bcc/tracking/orders',
        method: 'GET',
      },
    }),
).openapi('LinksGetStoreTrackedOrdersLink')

const LinksGetStoreTrackingStatusLinkSchema = BeezUPCommonLink3Schema.and(
  z
    .any()
    .openapi({
      example: {
        href: '/v2/user/analytics/8f95eb1a-3691-4750-950d-a13c4a8a9bcc/tracking/status',
        method: 'GET',
      },
    }),
).openapi('LinksGetStoreTrackingStatusLink')

const AnalyticsStoreIndexLinksSchema = z
  .object({
    optimise: LinksOptimiseLinkSchema.exactOptional(),
    optimiseAll: LinksOptimiseAllLinkSchema.exactOptional(),
    optimiseByCategory: LinksOptimiseByCategoryLinkSchema.exactOptional(),
    optimiseByChannel: LinksOptimiseByChannelLinkSchema.exactOptional(),
    optimiseByProduct: LinksOptimiseByProductLinkSchema.exactOptional(),
    reportByCategory: LinksGetStoreReportByCategoryLinkSchema.exactOptional(),
    reportByChannel: LinksGetStoreReportByChannelLinkSchema.exactOptional(),
    reportByDay: LinksGetStoreReportByDayLinkSchema.exactOptional(),
    reportByProduct: LinksGetStoreReportByProductLinkSchema.exactOptional(),
    reportFilters: LinksGetReportFiltersLinkSchema,
    rules: LinksGetRulesLinkSchema.exactOptional(),
    self: LinksAnalyticsIndexLinkSchema,
    trackedClicks: LinksGetStoreTrackedClicksLinkSchema,
    trackedExternalOrders: LinksGetStoreTrackedExternalOrdersLinkSchema.exactOptional(),
    trackedOrders: LinksGetStoreTrackedOrdersLinkSchema,
    trackingStatus: LinksGetStoreTrackingStatusLinkSchema,
  })
  .openapi({
    required: ['self', 'trackingStatus', 'trackedClicks', 'trackedOrders', 'reportFilters'],
  })
  .openapi('AnalyticsStoreIndexLinks')

const AnalyticsStoreIndexSchema = z
  .object({ links: AnalyticsStoreIndexLinksSchema })
  .openapi({ required: ['links'] })
  .openapi('AnalyticsStoreIndex')

const AnalyticsIndexSchema = z
  .object({
    links: AnalyticsIndexLinksSchema,
    lovLinks: AnalyticsIndexLovLinksSchema.exactOptional(),
    stores: z.array(AnalyticsStoreIndexSchema),
  })
  .openapi({ description: 'The Analytics API operation index.', required: ['links', 'stores'] })
  .openapi('AnalyticsIndex')

const AnalyticsProductColumnFiltersSchema: z.ZodType<AnalyticsProductColumnFiltersType> = z
  .lazy(() =>
    z
      .object({
        additionalAnalyticsProductColumnFilters:
          AdditionalAnalyticsProductColumnFiltersSchema.exactOptional(),
        sku: z
          .string()
          .exactOptional()
          .openapi({ description: 'The product sku filter', example: 'M1234' }),
        title: z
          .string()
          .exactOptional()
          .openapi({ description: 'The product title filter', example: 'Refrigérateur' }),
      })
      .openapi({ required: [] }),
  )
  .openapi('AnalyticsProductColumnFilters')

const ApiCredentialSchema = z
  .object({
    primaryToken: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The primary token to be used in the next call in the user scope API',
        example: '3b22980d8d1143c6ba7adf4e55b9a153',
      }),
    productName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The product name related to this credential', example: 'UserAPI' }),
    secondaryToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The secondary token. Could be usefull if you want to share your access with someone else.',
        example: '162ae17fd52044c38cce3388ea5b0c91',
      }),
  })
  .openapi({ description: 'Your api credential', required: [] })
  .openapi('ApiCredential')

const ApiCredentialsSchema = z
  .object({
    credentials: z
      .array(ApiCredentialSchema)
      .exactOptional()
      .openapi({
        description: 'Your API credential list',
        example: [
          {
            primaryToken: '3b22980d8d1143c6ba7adf4e55b9a153',
            productName: 'UserApi',
            secondaryToken: '162ae17fd52044c38cce3388ea5b0c91',
          },
        ],
      }),
  })
  .openapi({ required: [] })
  .openapi('ApiCredentials')

const CompareOptionsSchema = z
  .enum([
    'None',
    'IgnoreCase',
    'IgnoreNonSpace',
    'IgnoreSymbols',
    'OrdinalIgnoreCase',
    'StringSort',
    'Ordinal',
  ])
  .default('None')
  .openapi({
    description: 'Indicate how the product sku are compared for the duplication check.',
    example: 'IgnoreCase',
  })
  .openapi('CompareOptions')

const DuplicateProductValueStrategySchema = z
  .enum([
    'None',
    'SkipAllDuplicateProducts',
    'KeepFirstDuplicateProductOnly',
    'FailImportationIfAnyDuplicateProduct',
  ])
  .default('None')
  .openapi({
    description: 'Indicate the duplicate product sku strategy.',
    example: 'KeepFirstDuplicateProductOnly',
  })
  .openapi('DuplicateProductValueStrategy')

const DuplicateProductValueConfigurationSchema = z
  .object({ compareOptions: CompareOptionsSchema, strategy: DuplicateProductValueStrategySchema })
  .openapi({
    description: 'Describe how you want to manage the duplication of the product value',
    required: ['strategy', 'compareOptions'],
  })
  .openapi('DuplicateProductValueConfiguration')

const CompressionFormatStrategySchema = z
  .enum(['None', 'Zip', 'TarGz', 'Gzip', 'Bzip2', 'Rar'])
  .openapi({ description: 'Indicate the compression type', example: 'None' })
  .openapi('CompressionFormatStrategy')

const CredentialSchema = z
  .object({
    password: z
      .string()
      .exactOptional()
      .openapi({ description: 'The password', example: 'MyPassword' }),
    userName: z.string().openapi({ description: 'The user name', example: 'MyLogin' }),
  })
  .openapi({ description: 'Provides the credentials', required: ['userName'] })
  .openapi('Credential')

const DownloadCatalogStrategySchema = z
  .enum(['SimpleUri', 'FtpLatest', 'Sftp', 'SftpLatest', 'Ftps', 'FtpsLatest', 'Local'])
  .openapi({
    description: 'Indicate the download strategy (simple uri, ftps, ftplatest file, etc...)',
    example: 'SimpleUri',
  })
  .openapi('DownloadCatalogStrategy')

const InputFileFetchConfigurationSchema = z
  .object({
    compressedRelativePath: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Indicate the relative path in the compressed file',
        example: 'folder/file.xxx',
      }),
    compressionFormatStrategy: CompressionFormatStrategySchema.exactOptional(),
    credential: CredentialSchema.exactOptional(),
    downloadCatalogStrategy: DownloadCatalogStrategySchema,
    downloadTimeout: z
      .int32()
      .default(30)
      .exactOptional()
      .openapi({ description: 'Indicate the download time out in second', example: '360' }),
    uri: z
      .string()
      .openapi({
        description: 'Indicate the Uri of the file. (http, https, ftp, ftps, sftp are allowed)',
        example: 'http://www.mywebsite.com/mycatalog.csv',
      }),
  })
  .openapi({
    description: 'Describe the way to download the file',
    required: ['uri', 'downloadCatalogStrategy'],
  })
  .openapi('InputFileFetchConfiguration')

const CsvSeparatorSchema = z
  .string()
  .default(';')
  .openapi({
    description: 'Indicate the separator of the values in the CSV file. Generally ";"',
    example: ';',
  })
  .openapi('CsvSeparator')

const InputFileReadCsvConfigurationSchema = z
  .object({
    csvSeparator: CsvSeparatorSchema,
    csvTextQualifier: z
      .string()
      .default('"')
      .exactOptional()
      .openapi({
        description: 'Indicate the text qualifier of the CSV file. Generally the value is "',
        example: '"',
      }),
    hasHeaderRecord: z
      .boolean()
      .default(true)
      .openapi({
        description: 'Indicate if the csv file contains the column name at the first row',
        example: 'true',
      }),
    ignoreHeaderRecord: z
      .boolean()
      .default(false)
      .openapi({
        description: 'Indicate if the importation should not use the csv column name from the file',
        example: 'true',
      }),
  })
  .openapi({
    description: 'The CSV file description',
    required: ['hasHeaderRecord', 'ignoreHeaderRecord', 'csvSeparator'],
  })
  .openapi('InputFileReadCsvConfiguration')

const FileFormatStrategySchema = z
  .enum(['Unknown', 'Csv', 'Xml', 'Json'])
  .openapi({ description: 'CSV or XML', example: 'Csv' })
  .openapi('FileFormatStrategy')

const InputFileReadXmlConfigurationSchema = z
  .object({
    flattenXmlChildElements: z
      .boolean()
      .openapi({
        description:
          'Indicate if the children xml nodes should be flatten with there parent to take in account the sub node values.',
        example: 'true',
      }),
    useXmlAttributes: z
      .boolean()
      .openapi({
        description:
          'Indicate if the importation should take in account the attribute in the xml nodes.',
        example: 'true',
      }),
  })
  .openapi({
    description: 'The XML file description',
    required: ['useXmlAttributes', 'flattenXmlChildElements'],
  })
  .openapi('InputFileReadXmlConfiguration')

const InputFileReadConfigurationSchema = z
  .object({
    csvFileReadProperties: InputFileReadCsvConfigurationSchema.exactOptional(),
    cultureName: z
      .string()
      .default('')
      .exactOptional()
      .openapi({
        description:
          'The culture name of the file.  (i.e. fr-FR). If null then Invariant culture will be used.',
        example: 'fr-FR',
      }),
    encodingTypeName: z
      .string()
      .default('UTF-8')
      .exactOptional()
      .openapi({ description: 'The encoding type. UTF-8 by default.', example: 'UTF-8' }),
    format: FileFormatStrategySchema,
    xmlFileReadProperties: InputFileReadXmlConfigurationSchema.exactOptional(),
  })
  .openapi({
    description:
      'Describe how to read the file. If FileFormatStrategy is CSV, csvFileReadProperties is required. Otherwise the xmlFileReadProperties is required.\n',
    required: ['format'],
  })
  .openapi('InputFileReadConfiguration')

const InputFileConfigurationSchema = z
  .object({
    fetch: InputFileFetchConfigurationSchema,
    fileNumber: z
      .int32()
      .min(1)
      .openapi({ description: 'The file number starting by 1', example: '1' }),
    read: InputFileReadConfigurationSchema,
  })
  .openapi({
    description: 'Describe how to get and read a file',
    required: ['fileNumber', 'fetch', 'read'],
  })
  .openapi('InputFileConfiguration')

const InputConfigurationSchema = z
  .object({
    files: z
      .array(InputFileConfigurationSchema)
      .min(1)
      .openapi({ description: 'The list of files to get and read' }),
    transformFileUrl: z
      .url()
      .exactOptional()
      .openapi({
        description: 'Can be null. Use to transform multiple files with an XSLT file.',
        example: 'http://beezupblob.com/Mytransformation.xslt',
      }),
  })
  .openapi({ description: 'Describe the input configuration', required: ['files'] })
  .openapi('InputConfiguration')

const SchedulingTypeSchema = z
  .enum(['Schedule', 'Interval'])
  .default('Interval')
  .openapi({
    description:
      'Indicate the scheduling type. Schedule or Interval. We recommand you to use interval for a better reporting.',
    example: 'Schedule',
  })
  .openapi('SchedulingType')

const AutoImportConfigurationSchema = z
  .object({
    duplicateProductConfiguration: DuplicateProductValueConfigurationSchema,
    input: InputConfigurationSchema,
    inputConfiguredByUserId: BeezUPCommonUserIdSchema,
    pauseStatusChangedByUserId: BeezUPCommonUserIdSchema.exactOptional(),
    pauseStatusChangedUtcDate: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'Indicate when the pause status has changed in UTC date.',
        example: '2017-04-01T13:21:42Z',
      }),
    paused: z
      .boolean()
      .default(false)
      .openapi({
        description: 'Indicate if the auto import is in pause or not.',
        example: 'false',
      }),
    scheduledByUserId: BeezUPCommonUserIdSchema.exactOptional(),
    schedulingLocalTimeZoneName: z
      .string()
      .default('Romance Standard Time')
      .exactOptional()
      .openapi({
        description:
          'Indicate the time zone name of the scheduling. If the scheduling type is "Schedule"',
        example: 'Romance Standard Time',
      }),
    schedulingType: SchedulingTypeSchema,
    schedulingValue: z
      .array(z.string())
      .min(1)
      .openapi({
        description:
          'Indicate the scheduling value. If the scheduling type is Interval then the value will be a duration otherwise the values will be the time.',
        example: ['21:00:00', '23:00:00', '08:30:00'],
      }),
  })
  .openapi({
    required: [
      'input',
      'inputConfiguredByUserId',
      'schedulingType',
      'schedulingValue',
      'paused',
      'duplicateProductConfiguration',
    ],
  })
  .openapi('AutoImportConfiguration')

const LinksImportationActivateAutoImportLinkSchema = BeezUPCommonLink3Schema.and(
  z
    .any()
    .openapi({
      example: {
        href: '/v2/user/catalogs/a42b780d-4585-4566-800e-4d77a4d6f8a3/autoImport/activate',
        method: 'POST',
      },
    }),
).openapi('LinksImportationActivateAutoImportLink')

const LinksAutoPauseAutoImportLinkSchema = BeezUPCommonLink3Schema.and(
  z
    .any()
    .openapi({
      example: {
        href: '/v2/user/catalogs/a42b780d-4585-4566-800e-4d77a4d6f8a3/autoImport/pause',
        method: 'POST',
      },
    }),
).openapi('LinksAutoPauseAutoImportLink')

const LinksAutoResumeAutoImportLinkSchema = BeezUPCommonLink3Schema.and(
  z
    .any()
    .openapi({
      example: {
        href: '/v2/user/catalogs/a42b780d-4585-4566-800e-4d77a4d6f8a3/autoImport/resume',
        method: 'POST',
      },
    }),
).openapi('LinksAutoResumeAutoImportLink')

const LinksAutoScheduleAutoImportLinkSchema = BeezUPCommonLink3Schema.and(
  z
    .any()
    .openapi({
      example: {
        href: '/v2/user/catalogs/a42b780d-4585-4566-800e-4d77a4d6f8a3/autoImport/scheduling/schedules',
        method: 'POST',
        parameters: {
          request: {
            in: 'body',
            required: true,
            schema: 'scheduleAutoImportRequest',
            type: 'object',
          },
        },
      },
    }),
).openapi('LinksAutoScheduleAutoImportLink')

const LinksAutoConfigureAutoImportIntervalLinkSchema = BeezUPCommonLink3Schema.and(
  z
    .any()
    .openapi({
      example: {
        href: '/v2/user/catalogs/a42b780d-4585-4566-800e-4d77a4d6f8a3/autoImport/scheduling/interval',
        method: 'POST',
        parameters: {
          request: {
            in: 'body',
            required: true,
            schema: 'configureAutoImportIntervalRequest',
            type: 'object',
          },
        },
      },
    }),
).openapi('LinksAutoConfigureAutoImportIntervalLink')

const LinksAutoGetAutoImportConfigurationLinkSchema = BeezUPCommonLink3Schema.and(
  z
    .any()
    .openapi({
      example: {
        href: '/v2/user/catalogs/a42b780d-4585-4566-800e-4d77a4d6f8a3/autoImport',
        method: 'GET',
      },
    }),
).openapi('LinksAutoGetAutoImportConfigurationLink')

const LinksAutoStartAutoImportLinkSchema = BeezUPCommonLink3Schema.and(
  z
    .any()
    .openapi({
      example: {
        href: '/v2/user/catalogs/a42b780d-4585-4566-800e-4d77a4d6f8a3/autoImport/start',
        method: 'POST',
      },
    }),
).openapi('LinksAutoStartAutoImportLink')

const AutoImportConfigurationLinksSchema = z
  .object({
    activate: LinksImportationActivateAutoImportLinkSchema.exactOptional(),
    pause: LinksAutoPauseAutoImportLinkSchema.exactOptional(),
    resume: LinksAutoResumeAutoImportLinkSchema.exactOptional(),
    schedule: LinksAutoScheduleAutoImportLinkSchema.exactOptional(),
    scheduleInterval: LinksAutoConfigureAutoImportIntervalLinkSchema.exactOptional(),
    self: LinksAutoGetAutoImportConfigurationLinkSchema,
    start: LinksAutoStartAutoImportLinkSchema.exactOptional(),
  })
  .openapi({ required: ['self'] })
  .openapi('AutoImportConfigurationLinks')

const AutomaticTransitionSchema = z
  .object({
    accountId: AccountIdSchema,
    enabled: z.boolean().openapi({ example: 'false' }),
    marketplaceTechnicalCode: BeezUPCommonMarketplaceTechnicalCodeSchema,
    orderStatusTransitionId: z.int32().openapi({ example: '1234' }),
  })
  .openapi({
    required: ['marketplaceTechnicalCode', 'accountId', 'orderStatusTransitionId', 'enabled'],
  })
  .openapi('AutomaticTransition')

const BeezUPOrderStatusSchema = z
  .string()
  .openapi({
    description: 'BeezUP order status. Unified for all marketplaces.',
    example: 'Shipped',
    'x-lov': 'BeezUPOrderState',
  })
  .openapi('BeezUPOrderStatus')

const BusinessOperationTypeSchema = z
  .string()
  .openapi({ example: 'ShipOrder', 'x-lov': 'OrderChangeBusinessOperationType' })
  .openapi('BusinessOperationType')

const LinksConfigureAutomaticTransitionsLinkSchema = BeezUPCommonLink3Schema.and(
  z
    .any()
    .openapi({
      example: {
        href: '/v2/user/marketplaces/orders/autoTransitions',
        method: 'POST',
        parameters: {
          request: { in: 'body', request: 'true', schema: 'configureAutomaticTransitionRequest' },
        },
      },
    }),
).openapi('LinksConfigureAutomaticTransitionsLink')

const AutomaticTransitionInfoLinksSchema = z
  .object({ configure: LinksConfigureAutomaticTransitionsLinkSchema })
  .openapi({ required: ['configure'] })
  .openapi('AutomaticTransitionInfoLinks')

const AutomaticTransitionInfoSchema = AutomaticTransitionSchema.and(
  z
    .object({
      beezUPOrderStatus: BeezUPOrderStatusSchema,
      businessOperationType: BusinessOperationTypeSchema,
      links: AutomaticTransitionInfoLinksSchema.exactOptional(),
      marketplaceBusinessCode: BeezUPCommonMarketplaceBusinessCodeSchema,
    })
    .openapi({
      required: [
        'marketplaceTechnicalCode',
        'marketplaceBusinessCode',
        'accountId',
        'beezUPOrderStatus',
        'businessOperationType',
        'orderStatusTransitionId',
        'enabled',
      ],
    }),
).openapi('AutomaticTransitionInfo')

const LinksGetAutomaticTransitionsLinkSchema = BeezUPCommonLink3Schema.and(
  z
    .any()
    .openapi({ example: { href: '/v2/user/marketplaces/orders/autoTransitions', method: 'GET' } }),
).openapi('LinksGetAutomaticTransitionsLink')

const AutomaticTransitionInfoListLinksSchema = z
  .object({
    configure: LinksConfigureAutomaticTransitionsLinkSchema,
    self: LinksGetAutomaticTransitionsLinkSchema,
  })
  .openapi({ required: ['self', 'configure'] })
  .openapi('AutomaticTransitionInfoListLinks')

const AutomaticTransitionInfoListSchema = z
  .object({
    automaticTransitionInfos: z.array(AutomaticTransitionInfoSchema).exactOptional(),
    links: AutomaticTransitionInfoListLinksSchema,
  })
  .openapi({ required: ['links'] })
  .openapi('AutomaticTransitionInfoList')

const BeezUPOrderIdSchema = z
  .uuid()
  .openapi({
    description: 'The BeezUP Order identifier',
    example: '00000000000000000000000000000000000000000000000',
  })
  .openapi('BeezUPOrderId')

const OrderIdentifierSchema = z
  .object({
    accountId: AccountIdSchema,
    beezUPOrderId: BeezUPOrderIdSchema,
    marketplaceTechnicalCode: BeezUPCommonMarketplaceTechnicalCodeSchema,
  })
  .openapi({ required: ['marketplaceTechnicalCode', 'accountId', 'beezUPOrderId'] })
  .openapi('OrderIdentifier')

const OrderOperationResponseSchema = z
  .object({
    errors: z
      .array(BeezUPCommonUserErrorMessageSchema)
      .exactOptional()
      .openapi({ description: 'The error list' }),
    order: OrderIdentifierSchema,
    status: z
      .int()
      .openapi({
        description: 'Indicates the http status corresponding to the individual operation',
        example: '204',
      }),
    success: z
      .boolean()
      .openapi({ description: 'Indicates if the operation succeed or not', example: 'true' }),
  })
  .openapi({
    description: 'The response given by the batch operation for an order',
    required: ['order', 'success', 'status'],
  })
  .openapi('OrderOperationResponse')

const BatchOrderOperationResponseSchema = z
  .object({ operations: z.array(OrderOperationResponseSchema) })
  .openapi({ description: 'The response given by the batch operation', required: ['operations'] })
  .openapi('BatchOrderOperationResponse')

const CanBeTruncatedSchema = z
  .boolean()
  .default(false)
  .openapi({
    description:
      'If the size of the value is greater than the limit we can truncate the value instead of failing...',
    example: 'false',
  })
  .openapi('CanBeTruncated')

const DisplayGroupNameSchema = z
  .string()
  .openapi({
    description: 'Indicate the display group name where the column must be putted',
    example: 'Category',
  })
  .openapi('DisplayGroupName')

const BeezUPColumnConfigurationSchema = z
  .object({
    beezUPColumnName: BeezUPCommonBeezUPColumnNameSchema,
    canBeTruncated: CanBeTruncatedSchema.exactOptional(),
    columnDataType: BeezUPCommonColumnDataTypeSchema.exactOptional(),
    columnImportance: BeezUPCommonColumnImportanceSchema,
    description: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Describe the BeezUP column',
        example: 'Use for big text, like description',
      }),
    displayGroupName: DisplayGroupNameSchema,
    unique: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        description:
          '/!\\ ONLY AVAILABLE ON CATALOG COLUMN NOT ON CUSTOM COLUMNS!!\r\nIf true, an error happen at the second occurence of the same value for this column\r\nThis information will be used during the importation process and later for mapping proposal',
        example: 'false',
      }),
  })
  .openapi({
    description: 'Describe a BeezUP column',
    required: ['beezUPColumnName', 'columnImportance', 'displayGroupName'],
  })
  .openapi('BeezUPColumnConfiguration')

const BeezUPMarketplaceAccountIdSchema = z
  .int32()
  .openapi({
    description:
      'The marketplace account identifier in BeezUP. This account identifier is based on your api settings.',
    example: '1234',
  })
  .openapi('BeezUPMarketplaceAccountId')

const BeezUPMarketplaceBusinessCodeSchema = z
  .string()
  .openapi({
    description:
      'In an marketplace technical code like CDiscount you can have several marketplaces like GO SPORT, etc. We identify them by a business code.',
    example: 'GOSPORT',
    'x-lov': 'MarketplaceBusinessCode',
  })
  .openapi('BeezUPMarketplaceBusinessCode')

const BeezUPMarketplaceTechnicalCodeSchema = z
  .string()
  .openapi({
    description: 'The technical code of the marketplace.',
    example: 'Amazon',
    'x-lov': 'MarketplaceTechnicalCode',
  })
  .openapi('BeezUPMarketplaceTechnicalCode')

const BeezUPOrderUUIDSchema = z
  .string()
  .openapi({ description: 'beezUPOrderUUID' })
  .openapi('BeezUPOrderUUID')

const BillingPeriodSchema = z
  .object({
    billingPeriodInMonth: z
      .int32()
      .openapi({ description: 'The billing period in month', example: '12' }),
    discountPercentage: z
      .float64()
      .openapi({
        description: 'The discount percentage related to this billing period',
        example: '20.0',
      }),
  })
  .openapi({ required: ['billingPeriodInMonth', 'discountPercentage'] })
  .openapi('BillingPeriod')

const BillingPeriodInMonthSchema = z
  .int32()
  .min(1)
  .openapi({
    description: 'Can be null. The billing period in month based on /billingPeriods',
    example: '12',
  })
  .openapi('BillingPeriodInMonth')

const LinksGetBillingPeriodsLinkSchema = BeezUPCommonLink3Schema.and(
  z.any().openapi({ example: { href: '/v2/user/customer/billingPeriods', method: 'GET' } }),
).openapi('LinksGetBillingPeriodsLink')

const BillingPeriodListLinksSchema = z
  .object({ self: LinksGetBillingPeriodsLinkSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('BillingPeriodListLinks')

const BillingPeriodListSchema = z
  .object({
    billingPeriods: z
      .array(BillingPeriodSchema)
      .openapi({
        description: 'The billing period list',
        example: [{ billingPeriodInMonth: '12', discountPercentage: '20' }],
      }),
    links: BillingPeriodListLinksSchema,
  })
  .openapi({ required: ['links', 'billingPeriods'] })
  .openapi('BillingPeriodList')

const BonusTypeSchema = z
  .enum(['OnlinePaymentMethodBonus', 'PreviousInvoiceProrataBonus', 'PreviousContractBonus'])
  .openapi('BonusType')

const BonusInfoSchema = z
  .object({ amount: z.float64().openapi({ example: '12.34' }), bonusType: BonusTypeSchema })
  .openapi({ required: ['bonusType', 'amount'] })
  .openapi('BonusInfo')

const CardNumberSchema = z
  .string()
  .openapi({ description: 'Card number', example: '1234567890091234' })
  .openapi('CardNumber')

const CardVerificationCodeSchema = z
  .string()
  .openapi({ description: 'Card Verification Code', example: '123' })
  .openapi('CardVerificationCode')

const CatalogColumnNameSchema = z
  .string()
  .openapi({ description: 'The catalog column name', example: 'SKU' })
  .openapi('CatalogColumnName')

const ColumnCultureNameSchema = z
  .string()
  .openapi({
    description:
      'If non null, culture used to parse the value to the storage type of this column\\r\\n will be used for parsing and for consolidation proces',
    example: 'fr-FR',
  })
  .openapi('ColumnCultureName')

const ColumnFormatSchema = z
  .string()
  .openapi({
    description:
      'If non null, format used to parse the value to the storage type of this column\\r\\n will be used for parsing and for consolidation proces',
    example: 'MM/dd/yyyy',
  })
  .openapi('ColumnFormat')

const ColumnConfigurationSchema = z
  .object({
    beezUPColumnName: BeezUPCommonBeezUPColumnNameSchema.exactOptional(),
    canBeTruncated: CanBeTruncatedSchema.exactOptional(),
    columnCultureName: ColumnCultureNameSchema.exactOptional(),
    columnDataType: BeezUPCommonColumnDataTypeSchema,
    columnFormat: ColumnFormatSchema.exactOptional(),
    columnImportance: BeezUPCommonColumnImportanceSchema,
    displayGroupName: DisplayGroupNameSchema.exactOptional(),
  })
  .openapi({
    description:
      'Indicates the configuration applied on the column (catalog or custom) during the importation process.',
    required: ['columnImportance', 'columnDataType'],
  })
  .openapi('ColumnConfiguration')

const ColumnIdSchema = z
  .guid()
  .openapi({
    description: 'The catalog column identifier',
    example: '8f6671d6-a9bc-4de0-a0c4-4643b0c3f871',
  })
  .openapi('ColumnId')

const LinksCatalogChangeCatalogColumnUserNameLinkSchema = BeezUPCommonLink3Schema.and(
  z
    .any()
    .openapi({
      example: {
        href: '/v2/user/catalogs/a42b780d-4585-4566-800e-4d77a4d6f8a3/catalogColumns/b45c1999-e089-4bb1-a219-80a7a50a6f53/rename',
        method: 'POST',
        parameters: {
          request: {
            in: 'body',
            required: true,
            schema: 'changeUserColumnNameRequest',
            type: 'object',
          },
        },
      },
    }),
).openapi('LinksCatalogChangeCatalogColumnUserNameLink')

const CatalogColumnLinksSchema = z
  .object({ rename: LinksCatalogChangeCatalogColumnUserNameLinkSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('CatalogColumnLinks')

const UserColumNameSchema = z
  .string()
  .openapi({ description: 'Column named by the user', example: 'My SKU' })
  .openapi('UserColumName')

const CatalogColumnSchema = z
  .object({
    catalogColumnName: CatalogColumnNameSchema,
    configuration: ColumnConfigurationSchema,
    duplicateProductValueConfiguration: DuplicateProductValueConfigurationSchema.exactOptional(),
    id: ColumnIdSchema,
    ignored: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        description:
          'IF true, the product values of this column will be not taken in account during the importation process',
      }),
    links: CatalogColumnLinksSchema,
    userColumName: UserColumNameSchema,
  })
  .openapi({
    description: 'The catalog column configuration',
    example: {
      catalogColumnName: 'SKU',
      configuration: {
        beezUPColumnName: 'CategoryFirstLevel',
        canBeTruncated: 'false',
        columnCultureName: 'fr-FR',
        columnDataType: 'String',
        columnFormat: 'MM/dd/yyyy',
        columnImportance: 'Required',
        displayGroupName: 'Category',
      },
      duplicateProductValueConfiguration: {
        compareOptions: 'IgnoreCase',
        strategy: 'KeepFirstDuplicateProductOnly',
      },
      id: '8a76f06a-fefc-4c0d-bcfe-b210f1482977',
      ignored: 'true',
      userColumName: 'My SKU',
    },
    required: ['id', 'catalogColumnName', 'userColumName', 'configuration', 'links'],
  })
  .openapi('CatalogColumn')

const CatalogColumnListSchema = z
  .object({ catalogColumns: z.array(CatalogColumnSchema) })
  .openapi({ required: ['catalogColumns'] })
  .openapi('CatalogColumnList')

const LinksCatalogGetBeezUPColumnsLinkSchema = BeezUPCommonLink3Schema.and(
  z.any().openapi({ example: { href: '/v2/user/catalogs/beezupColumns', method: 'GET' } }),
).openapi('LinksCatalogGetBeezUPColumnsLink')

const LinksCatalogIndexLinkSchema = BeezUPCommonLink3Schema.and(
  z.any().openapi({ example: { href: '/v2/user/catalogs', method: 'GET' } }),
).openapi('LinksCatalogIndexLink')

const CatalogIndexLinksSchema = z
  .object({
    beezUPColumns: LinksCatalogGetBeezUPColumnsLinkSchema,
    self: LinksCatalogIndexLinkSchema,
  })
  .openapi({ required: ['self', 'beezUPColumns'] })
  .openapi('CatalogIndexLinks')

const CatalogIndexLOVLinksSchema = z
  .object({
    beezUPColumnDataTypeLov: BeezUPCommonLOVLink3Schema,
    beezUPColumnDisplayGroupLov: BeezUPCommonLOVLink3Schema,
    beezUPColumnImportanceLov: BeezUPCommonLOVLink3Schema,
    beezUPColumnLov: BeezUPCommonLOVLink3Schema,
    compareOptionLov: BeezUPCommonLOVLink3Schema,
    duplicateProductValueStrategyLov: BeezUPCommonLOVLink3Schema,
  })
  .openapi({
    required: [
      'beezUPColumnLov',
      'beezUPColumnDataTypeLov',
      'beezUPColumnImportanceLov',
      'beezUPColumnDisplayGroupLov',
      'duplicateProductValueStrategyLov',
      'compareOptionLov',
    ],
  })
  .openapi('CatalogIndexLOVLinks')

const LinksCatalogGetCatalogColumnsLinkSchema = BeezUPCommonLink3Schema.and(
  z
    .any()
    .openapi({
      example: {
        href: '/v2/user/catalogs/a42b780d-4585-4566-800e-4d77a4d6f8a3/catalogColumns',
        method: 'GET',
      },
    }),
).openapi('LinksCatalogGetCatalogColumnsLink')

const LinksCatalogGetCategoriesLinkSchema = BeezUPCommonLink3Schema.and(
  z
    .any()
    .openapi({
      example: {
        href: '/v2/user/catalogs/a42b780d-4585-4566-800e-4d77a4d6f8a3/categories',
        method: 'GET',
      },
    }),
).openapi('LinksCatalogGetCategoriesLink')

const LinksCatalogComputeExpressionLinkSchema = BeezUPCommonLink3Schema.and(
  z
    .any()
    .openapi({
      example: {
        href: '/v2/user/catalogs/a42b780d-4585-4566-800e-4d77a4d6f8a3/customColumns/computeExpression',
        method: 'POST',
        parameters: {
          request: {
            in: 'body',
            required: true,
            schema: 'computeExpressionRequest',
            type: 'object',
          },
        },
      },
    }),
).openapi('LinksCatalogComputeExpressionLink')

const LinksCatalogGetCustomColumnsLinkSchema = BeezUPCommonLink3Schema.and(
  z
    .any()
    .openapi({
      example: {
        href: '/v2/user/catalogs/a42b780d-4585-4566-800e-4d77a4d6f8a3/customColumns',
        method: 'GET',
      },
    }),
).openapi('LinksCatalogGetCustomColumnsLink')

const LinksImportationGetReportingsLinkSchema = BeezUPCommonLink3Schema.and(
  z
    .any()
    .openapi({
      example: {
        href: '/v2/user/catalogs/a42b780d-4585-4566-800e-4d77a4d6f8a3/importations',
        method: 'GET',
      },
    }),
).openapi('LinksImportationGetReportingsLink')

const LinksImportationGetManualUpdateLastInputConfigLinkSchema = BeezUPCommonLink3Schema.and(
  z
    .any()
    .openapi({
      example: {
        href: '/v2/user/catalogs/a42b780d-4585-4566-800e-4d77a4d6f8a3/inputConfiguration',
        method: 'GET',
      },
    }),
).openapi('LinksImportationGetManualUpdateLastInputConfigLink')

const LinksCatalogGetProductsLinkSchema = BeezUPCommonLink3Schema.and(
  z
    .any()
    .openapi({
      example: {
        href: '/v2/user/catalogs/a42b780d-4585-4566-800e-4d77a4d6f8a3/products/list',
        method: 'POST',
        parameters: {
          request: { in: 'body', required: true, schema: 'getProductsRequest', type: 'object' },
        },
      },
    }),
).openapi('LinksCatalogGetProductsLink')

const LinksCatalogGetRandomProductsLinkSchema = BeezUPCommonLink3Schema.and(
  z
    .any()
    .openapi({
      example: {
        href: '/v2/user/catalogs/a42b780d-4585-4566-800e-4d77a4d6f8a3/products/random',
        method: 'GET',
      },
    }),
).openapi('LinksCatalogGetRandomProductsLink')

const LinksCatalogStoreIndexLinkSchema = BeezUPCommonLink3Schema.and(
  z
    .any()
    .openapi({
      example: { href: '/v2/user/catalogs/a42b780d-4585-4566-800e-4d77a4d6f8a3', method: 'GET' },
    }),
).openapi('LinksCatalogStoreIndexLink')

const LinksImportationStartManualUpdateLinkSchema = BeezUPCommonLink3Schema.and(
  z
    .any()
    .openapi({
      example: {
        href: '/v2/user/catalogs/a42b780d-4585-4566-800e-4d77a4d6f8a3/importations/start',
        method: 'POST',
        parameters: {
          request: {
            in: 'body',
            required: true,
            schema: 'startManualImportRequest',
            type: 'object',
          },
        },
      },
    }),
).openapi('LinksImportationStartManualUpdateLink')

const CatalogStoreIndexLinksSchema = z
  .object({
    autoImportInfo: LinksAutoGetAutoImportConfigurationLinkSchema.exactOptional(),
    catalogColumns: LinksCatalogGetCatalogColumnsLinkSchema.exactOptional(),
    categories: LinksCatalogGetCategoriesLinkSchema.exactOptional(),
    computeExpression: LinksCatalogComputeExpressionLinkSchema.exactOptional(),
    customColumns: LinksCatalogGetCustomColumnsLinkSchema.exactOptional(),
    importations: LinksImportationGetReportingsLinkSchema.exactOptional(),
    inputConfiguration: LinksImportationGetManualUpdateLastInputConfigLinkSchema.exactOptional(),
    products: LinksCatalogGetProductsLinkSchema.exactOptional(),
    randomProducts: LinksCatalogGetRandomProductsLinkSchema.exactOptional(),
    self: LinksCatalogStoreIndexLinkSchema,
    startImportation: LinksImportationStartManualUpdateLinkSchema.exactOptional(),
  })
  .openapi({ required: ['self'] })
  .openapi('CatalogStoreIndexLinks')

const CatalogStoreStatusSchema = z
  .enum(['OK', 'Failed', 'Outdated'])
  .openapi({
    description:
      'Indicates the status of the catalog store.\n* OK: If the latest importation is a success!\n* Failed: If the latest importation has failed !\n* Outdated: If the latest succeed importation is later than 1 day.\n',
    example: 'OK',
  })
  .openapi('CatalogStoreStatus')

const CatalogStoreIndexSchema = z
  .object({ links: CatalogStoreIndexLinksSchema, status: CatalogStoreStatusSchema })
  .openapi({ required: ['links', 'status'] })
  .openapi('CatalogStoreIndex')

const CatalogStoreIndexListSchema = z
  .object({
    links: z
      .record(z.string(), CatalogStoreIndexSchema)
      .exactOptional()
      .openapi({ description: 'The key is the store identifier.' }),
  })
  .openapi({ required: [] })
  .openapi('CatalogStoreIndexList')

const CatalogIndexSchema = z
  .object({
    links: CatalogIndexLinksSchema,
    lovLinks: CatalogIndexLOVLinksSchema,
    storeLinks: CatalogStoreIndexListSchema.exactOptional(),
  })
  .openapi({ required: ['links', 'lovLinks'] })
  .openapi('CatalogIndex')

const CategorySchema = z
  .object({
    categoryId: BeezUPCommonCatalogCategoryIdSchema.exactOptional(),
    categoryPath: BeezUPCommonCatalogCategoryPathSchema,
    selfProductCount: z
      .int32()
      .openapi({ description: 'The product count related to this category', example: '101' }),
    totalProductCount: z
      .int32()
      .openapi({
        description: 'The total product count related to this category and his sub categories',
        example: '101',
      }),
  })
  .openapi({
    description: 'The catalog category',
    required: ['categoryPath', 'totalProductCount', 'selfProductCount'],
  })
  .openapi('Category')

const CategoryListSchema = z
  .object({ categories: z.array(CategorySchema).openapi({ description: 'The category list' }) })
  .openapi({ description: 'The object which contains the category list', required: ['categories'] })
  .openapi('CategoryList')

const CategoryMappingStatusSchema = z
  .enum(['warning', 'success', 'failed'])
  .openapi({ example: 'success' })
  .openapi('CategoryMappingStatus')

const CategoryMappingStateSchema = z
  .object({
    status: CategoryMappingStatusSchema.exactOptional(),
    uncategorizedProductCount: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Indicates the uncategorized product count', example: '101' }),
    withoutCategoryCostProductCount: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'Indicates the count of products without cost defined',
        example: '42',
      }),
  })
  .openapi({ description: 'The category mapping state of the channel catalog', required: [] })
  .openapi('CategoryMappingState')

const EncryptedBlocklyExpressionSchema = z
  .string()
  .openapi({
    description: 'The encrypted XML Blockly representation of the expression',
    example: 'apokpoa,opz,sixsoisiosnoisn',
  })
  .openapi('EncryptedBlocklyExpression')

const EncryptedExpressionSchema = z
  .string()
  .openapi({
    description: 'The encrypted excel expression of the column',
    example: 'uziushdczaniodnndonisodndsiondsoidsndoin',
  })
  .openapi('EncryptedExpression')

const ChangeCustomColumnExpressionRequestSchema = z
  .object({
    encryptedBlocklyExpression: EncryptedBlocklyExpressionSchema,
    encryptedExpression: EncryptedExpressionSchema,
  })
  .openapi({
    description: 'The request message to change the custom column expression',
    required: ['encryptedExpression', 'encryptedBlocklyExpression'],
  })
  .openapi('ChangeCustomColumnExpressionRequest')

const ChangeCustomColumnRequestSchema = z
  .object({
    encryptedBlocklyExpression: EncryptedBlocklyExpressionSchema,
    encryptedExpression: EncryptedExpressionSchema,
    userColumName: UserColumNameSchema,
  })
  .openapi({
    description: 'The message request to change a custom column expression an user name',
    required: ['encryptedExpression', 'encryptedBlocklyExpression', 'userColumName'],
  })
  .openapi('ChangeCustomColumnRequest')

const ChangeEmailRequestSchema = z
  .object({ newEmail: BeezUPCommonEmailSchema })
  .openapi({ required: ['newEmail'] })
  .openapi('ChangeEmailRequest')

const ChangeOrderRequestSchema = z
  .record(z.string(), z.string())
  .openapi({
    description:
      'All properties with the prefix order_ are translated in the list of values /user/lov#OrderMetaInfoPosted',
    example: {
      order_Shipping_CarrierName: 'La poste',
      order_Shipping_EstimatedDeliveryDate: '2014-09-24T09:58:00Z',
      order_Shipping_FulfillmentDate: '2014-09-23T09:58:00Z',
      order_Shipping_ShipperTrackingNumber: '1H01845163783',
      order_Shipping_ShippingUrl: 'https://trackingpackage.com?number=1H01845163783',
    },
  })
  .openapi('ChangeOrderRequest')

const EtagSchema = z
  .string()
  .openapi({
    description:
      'ETag value to identify the order.\\\nThis information is required for the operation GetOrder and ChangeOrder.\\\nFor more details go to this link: http://tools.ietf.org/html/rfc7232#section-2.3\n',
    example: '"ca071a4580129f932a03971968ffef69"',
  })
  .openapi('Etag')

const OrderIdentifierWithETagSchema = OrderIdentifierSchema.and(
  z
    .object({ etag: EtagSchema })
    .openapi({ required: ['marketplaceTechnicalCode', 'accountId', 'beezUPOrderId', 'etag'] }),
).openapi('OrderIdentifierWithETag')

const ChangeOrderListRequestItemSchema = z
  .object({
    changeOrderRequest: ChangeOrderRequestSchema.exactOptional(),
    order: OrderIdentifierWithETagSchema,
  })
  .openapi({
    description: 'Contains the order identifier and the change order request',
    required: ['order'],
  })
  .openapi('ChangeOrderListRequestItem')

const ChangeOrderListRequestSchema = z
  .object({
    changeOrders: z
      .array(ChangeOrderListRequestItemSchema)
      .openapi({ description: 'The change order operations' }),
  })
  .openapi({
    description: 'Contains all change order operations you want to make.  (max 100 items per call)',
    required: ['changeOrders'],
  })
  .openapi('ChangeOrderListRequest')

const ChangeOrderListRequestItemV2Schema = z
  .object({
    changeOrderRequest: ChangeOrderRequestSchema.exactOptional(),
    order: OrderIdentifierSchema,
  })
  .openapi({
    description: 'Contains the order identifier and the change order request',
    required: ['order'],
  })
  .openapi('ChangeOrderListRequestItemV2')

const ChangeOrderListRequestV2Schema = z
  .object({
    changeOrders: z
      .array(ChangeOrderListRequestItemV2Schema)
      .openapi({ description: 'The change order operations' }),
  })
  .openapi({
    description: 'Contains all change order operations you want to make.  (max 100 items per call)',
    required: ['changeOrders'],
  })
  .openapi('ChangeOrderListRequestV2')

const ExecutionUUIDSchema = z
  .uuid()
  .openapi({
    description: 'The execution identifier',
    example: '8D4176FA78D5A7Fffa91e9edc694ec5858be9a1b109507c',
  })
  .openapi('ExecutionUUID')

const SourceTypeSchema = z
  .enum(['Api', 'Go'])
  .openapi({ description: 'Indicates the origin of the operation', example: 'Api' })
  .openapi('SourceType')

const ChangeOrderReportingSchema = z
  .object({
    changeOrderType: BusinessOperationTypeSchema.exactOptional(),
    creationUtcDate: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'The creation UTC date of the execution',
        example: '2017-04-01T13:10:03Z',
      }),
    details: z.record(z.string(), z.object({})).exactOptional(),
    errorMessage: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The error message during the execution',
        example: 'This is an error message',
      }),
    executionUUID: ExecutionUUIDSchema.exactOptional(),
    ipAddress: z
      .string()
      .exactOptional()
      .openapi({ description: 'The IP address who request this operation', example: '127.0.0.1' }),
    lastUpdateUtcDate: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'The last update UTC date of the execution',
        example: '2017-04-01T13:10:05Z',
      }),
    processingStatus: z
      .string()
      .exactOptional()
      .openapi({ description: 'The processing status of the execution', example: 'Done' }),
    sourceType: SourceTypeSchema.exactOptional(),
    sourceUserId: BeezUPCommonUserIdSchema.exactOptional(),
    sourceUserName: z.string().exactOptional().openapi({ example: 'Guillaume Tell' }),
    testMode: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'This operation was a test', example: 'false' }),
  })
  .openapi({ description: 'The reporting related to a change order operation', required: [] })
  .openapi('ChangeOrderReporting')

const ChangePasswordRequestSchema = z
  .object({
    newPassword: z
      .string()
      .openapi({
        description:
          'Your new password. Which must respect the same constraints as the user registeration',
      }),
    oldPassword: z.string().openapi({ description: 'Your current password' }),
  })
  .openapi({ required: ['oldPassword', 'newPassword'] })
  .openapi('ChangePasswordRequest')

const ChangeUserColumnNameRequestSchema = z
  .object({ userColumName: UserColumNameSchema })
  .openapi({
    description: 'The message request for the change user column name',
    required: ['userColumName'],
  })
  .openapi('ChangeUserColumnNameRequest')

const ChannelCatalogCategoryMappingSettingsSchema = z
  .object({
    categoryMappingDisabledByMerchant: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "Optional parameter. Indicates that you have decided to do not map your categories with the channel's categories.",
        example: 'false',
      }),
  })
  .openapi({ required: [] })
  .openapi('ChannelCatalogCategoryMappingSettings')

const ChannelCategorySettingsSchema = z
  .object({
    mappingLeafRequired: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Indicates if the category mapping is required on category path leaf or not',
        example: 'true',
      }),
    mappingRequired: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Indicates if the category mapping is required, otherwise you can map the categories but it will not block the publication of your catalog',
        example: 'true',
      }),
  })
  .openapi({ required: [] })
  .openapi('ChannelCategorySettings')

const CostTypeSchema = z
  .enum(['CPC_Global', 'CPA_Global', 'CPC_ByCategory', 'CPA_ByCategory', 'Fixed_Global'])
  .openapi({
    description:
      'CPC means cost per click.\nCPA means cost per action.\nYou can have CPC/CPA with a global cost value.\nYou can have CPC/CPA by category the cost value MUST be null\nYou can have global fixed price.\n',
    example: 'Fixed_Global',
  })
  .openapi('CostType')

const ChannelCostSettingsSchema = z
  .object({
    costType: CostTypeSchema,
    globalCostValue: z
      .number()
      .exactOptional()
      .openapi({
        description: 'In case of global cost type, you have to indicate the cost value.',
        example: '10.21',
      }),
  })
  .openapi({
    description: 'Indicate the default configuration of the cost on this channel.',
    required: ['costType'],
  })
  .openapi('ChannelCostSettings')

const ChannelCatalogColumnMappingSchema = z
  .object({
    catalogColumnId: BeezUPCommonCatalogColumnIdSchema.exactOptional(),
    channelCategoryPath: BeezUPCommonChannelCategoryPathSchema.exactOptional(),
    channelColumnId: BeezUPCommonChannelColumnIdSchema,
  })
  .openapi({
    description:
      'Represent a mapping between a channel column (considering channel category mapping) and a catalog column',
    required: ['channelColumnId'],
  })
  .openapi('ChannelCatalogColumnMapping')

const ChannelCatalogColumnMappingWithNameSchema = ChannelCatalogColumnMappingSchema.and(
  z
    .object({
      catalogBeezUPColumnName: BeezUPCommonBeezUPColumnNameSchema.exactOptional(),
      catalogColumnName: BeezUPCommonCatalogColumnUserNameSchema.exactOptional(),
      channelBeezUPColumnName: BeezUPCommonBeezUPColumnNameSchema.exactOptional(),
      channelColumnName: BeezUPCommonChannelColumnNameSchema,
    })
    .openapi({ required: ['channelColumnId', 'channelColumnName'] }),
).openapi('ChannelCatalogColumnMappingWithName')

const ChannelCatalogColumnMappingListWithNameSchema = z
  .array(ChannelCatalogColumnMappingWithNameSchema)
  .openapi({ description: 'The column mapping list between a channel and a catalog' })
  .openapi('ChannelCatalogColumnMappingListWithName')

const CostSettingsSchema = z
  .object({
    costType: CostTypeSchema,
    globalCostValue: z
      .number()
      .exactOptional()
      .openapi({
        description: 'In case of global cost type, you have to indicate the cost value.',
        example: '10.21',
      }),
  })
  .openapi({
    description:
      'If this property is not indicated please force the user to configure the cost settings.\nDefines the cost type you have on this channel with the cost value.\n',
    required: ['costType'],
  })
  .openapi('CostSettings')

const ExclusionFilterNameSchema = z
  .string()
  .openapi({ description: 'The exclusion filter name', example: 'Exclude sony products' })
  .openapi('ExclusionFilterName')

const FilterOperatorNameSchema = z
  .string()
  .openapi({
    description: 'The exclusion filter operator name',
    example: 'Contains',
    'x-lov': 'ProductColumnFilterOperatorName',
  })
  .openapi('FilterOperatorName')

const ExclusionFilterSchema = z
  .object({
    channelColumnId: BeezUPCommonChannelColumnIdSchema,
    enabled: z
      .boolean()
      .openapi({ description: 'indicates if the filter is currently enable.', example: 'true' }),
    groupId: z
      .guid()
      .openapi({
        description:
          'Indicate the filter\'s group. All filters in the same group means an "AND" operation in the filter group',
        example: 'd9833f4b-718a-436f-bab5-89da3d21bf60',
      }),
    name: ExclusionFilterNameSchema,
    operatorName: FilterOperatorNameSchema,
    position: z
      .int32()
      .min(1)
      .openapi({ description: 'The position of the exclusion filter', example: '1' }),
    positionInGroup: z
      .int32()
      .min(1)
      .openapi({
        description:
          'Indicate the filter group position. This information is used for the UI purpose and must be unique in the filter group.',
        example: '1',
      }),
    value: z
      .string()
      .max(4000)
      .exactOptional()
      .openapi({
        description: 'The value indicate by the user when the filter operation requires it.',
        example: 'sony',
      }),
  })
  .openapi({
    description: 'The exclusion filter',
    required: [
      'name',
      'position',
      'groupId',
      'positionInGroup',
      'channelColumnId',
      'operatorName',
      'enabled',
    ],
  })
  .openapi('ExclusionFilter')

const ExclusionFiltersSchema = z
  .array(ExclusionFilterSchema)
  .openapi({ description: 'The exclusion filter list' })
  .openapi('ExclusionFilters')

const GeneralSettingsSchema = z
  .object({
    acceptToPublishInfo: z
      .boolean()
      .openapi({
        description:
          'If true then you authorize disclosure of my statistics generated from clicks and sales',
        example: 'true',
      }),
    activeBeezUPTracking: z
      .boolean()
      .default(true)
      .openapi({
        description: 'Activate BeezUP tracking for my statistics (checked by default)',
        example: 'true',
      }),
    doNotExportOutOfStockProducts: z
      .boolean()
      .openapi({
        description:
          'Do not export "out of stock" products. Note: this option is not taken into account by the counter.\n',
        example: 'true',
      }),
  })
  .openapi({
    description: 'Represents the general settings of your channel catalog',
    required: ['acceptToPublishInfo', 'doNotExportOutOfStockProducts', 'activeBeezUPTracking'],
  })
  .openapi('GeneralSettings')

const LinksGetChannelCatalogCategoriesLinkSchema = BeezUPCommonLink3Schema.and(
  z
    .any()
    .openapi({
      description: 'If you did not configure the cost settings this link will not be displayed.',
    }),
)
  .and(
    z
      .any()
      .openapi({
        example: {
          href: '/v2/user/channelCatalogs/6d6b04de-406b-4539-8e7e-bf3e8da5dfb0/categories',
          method: 'GET',
        },
      }),
  )
  .openapi('LinksGetChannelCatalogCategoriesLink')

const ExternalLinksGetChannelInfoLinkSchema = BeezUPCommonLink3Schema.and(
  z
    .any()
    .openapi({
      example: { href: '/v2/user/channels/6d6b04de-406b-4539-8e7e-bf3e8da5dfb0', method: 'GET' },
    }),
).openapi('ExternalLinksGetChannelInfoLink')

const LinksConfigureChannelCatalogColumnMappingsLinkSchema = BeezUPCommonLink3Schema.and(
  z
    .any()
    .openapi({
      example: {
        href: '/v2/user/channelCatalogs/6d6b04de-406b-4539-8e7e-bf3e8da5dfb0/columnMappings',
        method: 'PUT',
      },
    }),
).openapi('LinksConfigureChannelCatalogColumnMappingsLink')

const LinksConfigureChannelCatalogCostSettingsLinkSchema = BeezUPCommonLink3Schema.and(
  z
    .any()
    .openapi({
      example: {
        href: '/v2/user/channelCatalogs/6d6b04de-406b-4539-8e7e-bf3e8da5dfb0/settings/cost',
        method: 'POST',
      },
    }),
).openapi('LinksConfigureChannelCatalogCostSettingsLink')

const LinksConfigureChannelCatalogGeneralSettingsLinkSchema = BeezUPCommonLink3Schema.and(
  z
    .any()
    .openapi({
      example: {
        href: '/v2/user/channelCatalogs/6d6b04de-406b-4539-8e7e-bf3e8da5dfb0/settings/general',
        method: 'POST',
      },
    }),
).openapi('LinksConfigureChannelCatalogGeneralSettingsLink')

const LinksDeleteChannelCatalogLinkSchema = BeezUPCommonLink3Schema.and(
  z
    .any()
    .openapi({
      example: {
        href: '/v2/user/channelCatalogs/6d6b04de-406b-4539-8e7e-bf3e8da5dfb0',
        method: 'DELETE',
      },
    }),
).openapi('LinksDeleteChannelCatalogLink')

const LinksDisableChannelCatalogLinkSchema = BeezUPCommonLink3Schema.and(
  z
    .any()
    .openapi({
      example: {
        href: '/v2/user/channelCatalogs/6d6b04de-406b-4539-8e7e-bf3e8da5dfb0/disable',
        method: 'POST',
      },
    }),
).openapi('LinksDisableChannelCatalogLink')

const LinksDisableChannelCatalogCategoryMappingLinkSchema = BeezUPCommonLink3Schema.and(
  z
    .any()
    .openapi({
      example: {
        href: '/v2/user/channelCatalogs/6d6b04de-406b-4539-8e7e-bf3e8da5dfb0/categories/disableMapping',
        method: 'POST',
      },
    }),
).openapi('LinksDisableChannelCatalogCategoryMappingLink')

const LinksEnableChannelCatalogLinkSchema = BeezUPCommonLink3Schema.and(
  z
    .any()
    .openapi({
      example: {
        href: '/v2/user/channelCatalogs/6d6b04de-406b-4539-8e7e-bf3e8da5dfb0/enable',
        method: 'POST',
      },
    }),
).openapi('LinksEnableChannelCatalogLink')

const LinksGetChannelCatalogExclusionFiltersLinkSchema = BeezUPCommonLink3Schema.and(
  z
    .any()
    .openapi({
      example: {
        href: '/v2/user/channelCatalogs/6d6b04de-406b-4539-8e7e-bf3e8da5dfb0/exclusionFilters',
        method: 'GET',
      },
    }),
).openapi('LinksGetChannelCatalogExclusionFiltersLink')

const LinksGetChannelCatalogExportationCacheInfoLinkSchema = BeezUPCommonLink3Schema.and(
  z
    .any()
    .openapi({
      example: {
        href: '/v2/user/channelCatalogs/6d6b04de-406b-4539-8e7e-bf3e8da5dfb0/exportations/cache',
        method: 'GET',
      },
    }),
).openapi('LinksGetChannelCatalogExportationCacheInfoLink')

const ExternalLinksGetChannelCatalogMarketplaceSettingsLinkSchema = BeezUPCommonLink3Schema.and(
  z
    .any()
    .openapi({
      example: {
        href: '/v2/user/marketplaces/channelcatatalogs/6d6b04de-406b-4539-8e7e-bf3e8da5dfb0/settings',
        method: 'GET',
      },
    }),
).openapi('ExternalLinksGetChannelCatalogMarketplaceSettingsLink')

const LinksGetChannelCatalogProductInfoListLinkSchema = BeezUPCommonLink3Schema.and(
  z
    .any()
    .openapi({
      example: {
        href: '/v2/user/channelCatalogs/6d6b04de-406b-4539-8e7e-bf3e8da5dfb0/products',
        method: 'POST',
      },
    }),
).openapi('LinksGetChannelCatalogProductInfoListLink')

const LinksReenableChannelCatalogCategoryMappingLinkSchema = BeezUPCommonLink3Schema.and(
  z
    .any()
    .openapi({
      example: {
        href: '/v2/user/channelCatalogs/6d6b04de-406b-4539-8e7e-bf3e8da5dfb0/categories/reenableMapping',
        method: 'POST',
      },
    }),
).openapi('LinksReenableChannelCatalogCategoryMappingLink')

const LinksGetChannelCatalogLinkSchema = BeezUPCommonLink3Schema.and(
  z
    .any()
    .openapi({
      example: {
        href: '/v2/user/channelCatalogs/6d6b04de-406b-4539-8e7e-bf3e8da5dfb0',
        method: 'GET',
      },
    }),
).openapi('LinksGetChannelCatalogLink')

const ChannelCatalogLinksSchema = z
  .object({
    categoryMappings: LinksGetChannelCatalogCategoriesLinkSchema.exactOptional(),
    channelInfo: ExternalLinksGetChannelInfoLinkSchema.exactOptional(),
    configureColumnMappings: LinksConfigureChannelCatalogColumnMappingsLinkSchema.exactOptional(),
    configureCostSettings: LinksConfigureChannelCatalogCostSettingsLinkSchema.exactOptional(),
    configureGeneralSettings: LinksConfigureChannelCatalogGeneralSettingsLinkSchema.exactOptional(),
    delete: LinksDeleteChannelCatalogLinkSchema.exactOptional(),
    disable: LinksDisableChannelCatalogLinkSchema.exactOptional(),
    disableCategoryMappings: LinksDisableChannelCatalogCategoryMappingLinkSchema.exactOptional(),
    enable: LinksEnableChannelCatalogLinkSchema.exactOptional(),
    exclusionFilters: LinksGetChannelCatalogExclusionFiltersLinkSchema.exactOptional(),
    exportationCacheInfo: LinksGetChannelCatalogExportationCacheInfoLinkSchema.exactOptional(),
    marketplaceSettings:
      ExternalLinksGetChannelCatalogMarketplaceSettingsLinkSchema.exactOptional(),
    products: LinksGetChannelCatalogProductInfoListLinkSchema.exactOptional(),
    reenableCategoryMappings: LinksReenableChannelCatalogCategoryMappingLinkSchema.exactOptional(),
    self: LinksGetChannelCatalogLinkSchema,
  })
  .openapi({
    description: 'Indicates the actions you can do on a channel catalog',
    required: ['self'],
  })
  .openapi('ChannelCatalogLinks')

const ColumnMappingStatusSchema = z
  .enum(['warning', 'success', 'failed'])
  .openapi({ example: 'success' })
  .openapi('ColumnMappingStatus')

const ChannelCatalogStateSchema = z
  .object({
    apiSettingsStatus: BeezUPCommonApiSettingsStatusSchema.exactOptional(),
    categoryMappingState: CategoryMappingStateSchema,
    columnMappingStatus: ColumnMappingStatusSchema,
    exportedProductCount: z.int32().openapi({ example: '101' }),
  })
  .openapi({
    description: 'Channel Catalog State',
    required: ['exportedProductCount', 'columnMappingStatus', 'categoryMappingState'],
  })
  .openapi('ChannelCatalogState')

const ChannelCatalogSchema = BeezUPCommonChannelBasicInfoSchema.and(
  z
    .object({
      categoryMappingSettings: ChannelCatalogCategoryMappingSettingsSchema.exactOptional(),
      channelCatalogId: BeezUPCommonChannelCatalogIdSchema,
      channelCategorySettings: ChannelCategorySettingsSchema,
      channelCostSettings: ChannelCostSettingsSchema,
      columnMappings: ChannelCatalogColumnMappingListWithNameSchema.exactOptional(),
      costSettings: CostSettingsSchema.exactOptional(),
      enabled: z
        .boolean()
        .openapi({ description: 'Indicates if the channel catalog is enable', example: 'true' }),
      exclusionFilters: ExclusionFiltersSchema.exactOptional(),
      exportUrl: BeezUPCommonHttpUrlSchema.exactOptional(),
      generalSettings: GeneralSettingsSchema,
      isMarketplace: z
        .boolean()
        .openapi({
          description: 'Indicates if this channel catalog is related to a marketplace',
          example: 'true',
        }),
      links: ChannelCatalogLinksSchema,
      state: ChannelCatalogStateSchema,
      storeId: BeezUPCommonStoreIdSchema,
      types: z
        .array(z.string())
        .openapi({
          description: 'The channel type list related to the channel',
          example: ['Marketplace'],
        }),
    })
    .openapi({
      description: 'The channel catalog',
      required: [
        'channelCatalogId',
        'channelId',
        'channelName',
        'channelImageUrl',
        'types',
        'storeId',
        'enabled',
        'state',
        'links',
        'generalSettings',
        'channelCostSettings',
        'channelCategorySettings',
        'isMarketplace',
      ],
    }),
).openapi('ChannelCatalog')

const ChannelCatalogCategoryCostValueSchema = z
  .number()
  .openapi({
    description:
      'In case of CPC_ByCategory or CPA_ByCategory cost type, you have to indicate the cost value.',
    example: '10.21',
  })
  .openapi('ChannelCatalogCategoryCostValue')

const ChannelCatalogCategoryConfigurationSchema = z
  .object({
    autoMapNewSubCategories: z
      .boolean()
      .openapi({
        description:
          'Great feature! In case of mapping to parent catalog category, you can ask to automatically map new sub catalog category in the next importation to this channel category path.',
        example: 'true',
      }),
    catalogCategoryPath: BeezUPCommonCatalogCategoryPathSchema,
    channelCategoryPath: BeezUPCommonChannelCategoryPathSchema.exactOptional(),
    costValue: ChannelCatalogCategoryCostValueSchema.exactOptional(),
  })
  .openapi({
    description:
      'Represent a mapping between a catalog category path and a channel category path.\nThe cost on this mapping can be applied.\n',
    required: ['autoMapNewSubCategories', 'catalogCategoryPath'],
  })
  .openapi('ChannelCatalogCategoryConfiguration')

const LinksConfigureChannelCatalogCategoryLinkSchema = BeezUPCommonLink3Schema.and(
  z
    .any()
    .openapi({
      example: {
        href: '/v2/user/channelCatalogs/6d6b04de-406b-4539-8e7e-bf3e8da5dfb0/category/configure',
        method: 'POST',
      },
    }),
).openapi('LinksConfigureChannelCatalogCategoryLink')

const ChannelCatalogCategoryMappingInfoLinksSchema = z
  .object({ configureCategories: LinksConfigureChannelCatalogCategoryLinkSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('ChannelCatalogCategoryMappingInfoLinks')

const ChannelCatalogCategoryConfigurationInfoSchema = z
  .object({
    catalogCategoryPath: BeezUPCommonCatalogCategoryPathSchema,
    channelCategoryPath: BeezUPCommonChannelCategoryPathSchema.exactOptional(),
    costValue: ChannelCatalogCategoryCostValueSchema.exactOptional(),
    links: ChannelCatalogCategoryMappingInfoLinksSchema,
  })
  .openapi({
    description: 'For all catalog categories the current mapping applied',
    required: ['catalogCategoryPath', 'links'],
  })
  .openapi('ChannelCatalogCategoryConfigurationInfo')

const CostStatusSchema = z
  .enum(['required', 'optional', 'notConfigurable'])
  .openapi({ example: 'required' })
  .openapi('CostStatus')

const ChannelCatalogCategoryMappingsLinksSchema = z
  .object({
    disable: LinksDisableChannelCatalogCategoryMappingLinkSchema.exactOptional(),
    reenable: LinksReenableChannelCatalogCategoryMappingLinkSchema.exactOptional(),
    self: LinksGetChannelCatalogCategoriesLinkSchema,
  })
  .openapi({ description: 'The action you can do on the category mappings', required: ['self'] })
  .openapi('ChannelCatalogCategoryMappingsLinks')

const MappingStatusSchema = z
  .enum(['required', 'optional', 'notConfigurable'])
  .openapi({ example: 'required' })
  .openapi('MappingStatus')

const ChannelCatalogCategoryConfigurationListSchema = z
  .object({
    channelCatalogCategoryConfigurations: z.array(ChannelCatalogCategoryConfigurationInfoSchema),
    costStatus: CostStatusSchema,
    links: ChannelCatalogCategoryMappingsLinksSchema,
    mappingStatus: MappingStatusSchema,
  })
  .openapi({
    required: ['links', 'channelCatalogCategoryConfigurations', 'mappingStatus', 'costStatus'],
  })
  .openapi('ChannelCatalogCategoryConfigurationList')

const ChannelCatalogColumnMappingListSchema = z
  .array(ChannelCatalogColumnMappingSchema)
  .openapi({ description: 'The column mapping list between a channel and a catalog' })
  .openapi('ChannelCatalogColumnMappingList')

const ChannelCatalogExportCacheInfoSchema = z
  .object({
    cacheStatus: z
      .string()
      .openapi({
        description: 'The cache status',
        example: 'ReadyForGeneration',
        'x-lov': 'ChannelCatalogExportCacheStatus',
      }),
    expirationUtcDate: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'The expiration UTC date of the cache',
        example: '2014-08-25T08:02:31.584Z',
      }),
    feedUrl: z
      .string()
      .exactOptional()
      .openapi({ description: 'The feed url', example: 'https://www.scootmotoshop.com/feed.xml' }),
    lastContentChangeUtcDate: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'The last content change UTC date',
        example: '2014-08-25T07:30:31.584Z',
      }),
    lastUpdateUtcDate: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'The last update UTC date of the cache',
        example: '2014-08-25T07:32:31.584Z',
      }),
  })
  .openapi({ required: ['cacheStatus'] })
  .openapi('ChannelCatalogExportCacheInfo')

const LinksClearChannelCatalogExportationCacheLinkSchema = BeezUPCommonLink3Schema.and(
  z
    .any()
    .openapi({
      example: {
        href: '/v2/user/channelCatalogs/6d6b04de-406b-4539-8e7e-bf3e8da5dfb0/exportations/cache/clear',
        method: 'POST',
      },
    }),
).openapi('LinksClearChannelCatalogExportationCacheLink')

const ChannelCatalogExportCacheInfoResponseLinksSchema = z
  .object({
    clear: LinksClearChannelCatalogExportationCacheLinkSchema.exactOptional(),
    self: LinksGetChannelCatalogExportationCacheInfoLinkSchema,
  })
  .openapi({ required: ['self'] })
  .openapi('ChannelCatalogExportCacheInfoResponseLinks')

const ChannelCatalogExportCacheInfoResponseSchema = z
  .object({
    cacheInfo: ChannelCatalogExportCacheInfoSchema,
    links: ChannelCatalogExportCacheInfoResponseLinksSchema,
  })
  .openapi({ required: ['cacheInfo', 'links'] })
  .openapi('ChannelCatalogExportCacheInfoResponse')

const ChannelCatalogExportationReportingSchema = z
  .object({
    cacheStatus: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The cache status during the exportation',
        example: 'Available',
        'x-lov': 'ChannelCatalogExportationCacheGenerationStatus',
      }),
    clientIpAddress: z
      .string()
      .openapi({
        description: 'The IP address of the client who requests this exportation',
        example: '42.101.42.101',
      }),
    clientUserAgent: z
      .string()
      .openapi({
        description: 'The http header User-Agent sent by the client who requests this operation',
        example: 'Wget/1.13.4 (linux-gnu)',
      }),
    exportationDuration: z
      .string()
      .regex(
        /(00:1[5-9])|(00:[2-5][0-9])|(0[1-9]:[0-5][0-9])|(1[0-9]:[0-5][0-9])|(2[0-3]:[0-5][0-9])/,
      )
      .exactOptional()
      .openapi({
        description: "The exportation duration. \\\n'00:01:00' measn 1 minute.\n",
        example: '00:01:00',
      }),
    exportationUtcDate: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'The exportation UTC date', example: '2014-08-25T07:32:31.584Z' }),
    exportedProductCount: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'The exportated product count during this exportation',
        example: '10142',
      }),
  })
  .openapi({ required: ['exportationUtcDate', 'clientIpAddress', 'clientUserAgent'] })
  .openapi('ChannelCatalogExportationReporting')

const LinksGetChannelCatalogExportationHistoryLinkSchema = BeezUPCommonLink3Schema.and(
  z
    .any()
    .openapi({
      example: {
        href: '/v2/user/channelCatalogs/6d6b04de-406b-4539-8e7e-bf3e8da5dfb0/exportations/history',
        method: 'GET',
      },
    }),
).openapi('LinksGetChannelCatalogExportationHistoryLink')

const ChannelCatalogExportationHistoryLinksSchema = z
  .object({ self: LinksGetChannelCatalogExportationHistoryLinkSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('ChannelCatalogExportationHistoryLinks')

const ChannelCatalogExportationHistorySchema = z
  .object({
    exportations: z.array(ChannelCatalogExportationReportingSchema),
    links: ChannelCatalogExportationHistoryLinksSchema,
    paginationResult: BeezUPCommonPaginationResultSchema.exactOptional(),
  })
  .openapi({ required: ['links', 'exportations'] })
  .openapi('ChannelCatalogExportationHistory')

const LinksAddChannelCatalogLinkSchema = BeezUPCommonLink3Schema.and(
  z.any().openapi({ example: { href: '/v2/user/channelCatalogs', method: 'POST' } }),
).openapi('LinksAddChannelCatalogLink')

const ExternalLinksCatalogGetBeezUPColumnsLinkSchema = BeezUPCommonLink3Schema.and(
  z.any().openapi({ example: { href: '/v2/user/catalogs/beezUPColumns', method: 'GET' } }),
).openapi('ExternalLinksCatalogGetBeezUPColumnsLink')

const LinksGetChannelCatalogFilterOperatorsLinkSchema = BeezUPCommonLink3Schema.and(
  z.any().openapi({ example: { href: '/v2/user/channelCatalogs/filterOperators', method: 'GET' } }),
).openapi('LinksGetChannelCatalogFilterOperatorsLink')

const LinksGetChannelCatalogsLinkSchema = BeezUPCommonLink3Schema.and(
  z.any().openapi({ example: { href: '/v2/user/channelCatalogs', method: 'GET' } }),
).openapi('LinksGetChannelCatalogsLink')

const ChannelCatalogListLinksSchema = z
  .object({
    add: LinksAddChannelCatalogLinkSchema.exactOptional(),
    beezUPColumns: ExternalLinksCatalogGetBeezUPColumnsLinkSchema.exactOptional(),
    filterOperators: LinksGetChannelCatalogFilterOperatorsLinkSchema.exactOptional(),
    self: LinksGetChannelCatalogsLinkSchema.exactOptional(),
  })
  .openapi({
    description:
      'Indicates how global actions you can do like how to create a channel catalog, exclusion filter operators, etc...\n',
    required: [],
  })
  .openapi('ChannelCatalogListLinks')

const ChannelCatalogListLovLinksSchema = z
  .object({
    channelCatalogExclusionFilterOperatorLov: BeezUPCommonLOVLink3Schema.exactOptional(),
    channelCatalogExportCacheStatusLov: BeezUPCommonLOVLink3Schema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ChannelCatalogListLovLinks')

const ChannelCatalogListSchema = z
  .object({
    channelCatalogs: z
      .record(z.string(), ChannelCatalogSchema)
      .exactOptional()
      .openapi({
        description: 'The channel catalog list. The key is the channel catalog identifier',
      }),
    links: ChannelCatalogListLinksSchema.exactOptional(),
    lovLinks: ChannelCatalogListLovLinksSchema.exactOptional(),
  })
  .openapi({ description: 'This is the index of the channel catalog API', required: [] })
  .openapi('ChannelCatalogList')

const ChannelCatalogMarketplacePropertyDiscriminatorTypeSchema = z
  .enum([
    'channelCatalogMarketplaceStringProperty',
    'channelCatalogMarketplaceIntegerProperty',
    'channelCatalogMarketplaceBooleanProperty',
    'channelCatalogMarketplaceNumberProperty',
  ])
  .openapi({ example: 'string' })
  .openapi('ChannelCatalogMarketplacePropertyDiscriminatorType')

const ChannelCatalogMarketplacePropertyNameSchema = z
  .string()
  .openapi({
    description: 'Channel catalog marketplace property name',
    example: 'PaypalAddress',
    'x-lov': 'MarketplaceStoreProperty',
  })
  .openapi('ChannelCatalogMarketplacePropertyName')

const TypeSchema = z
  .enum(['string', 'integer', 'boolean', 'number'])
  .openapi({ description: 'The Data Type', example: 'string' })
  .openapi('Type')

const ChannelCatalogMarketplacePropertySchema = z
  .object({
    description: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Indicate the description of the property',
        example: 'If true allows to retireve one marketplace country only',
      }),
    discriminatorType: ChannelCatalogMarketplacePropertyDiscriminatorTypeSchema,
    info: BeezUPCommonInfoSummariesSchema.exactOptional(),
    lovLink: BeezUPCommonLOVLink3Schema.exactOptional(),
    lovRequired: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        description: 'Indicates if the property value must be in the list of value.',
        example: 'true',
      }),
    maxItems: z
      .int32()
      .min(1)
      .default(1)
      .exactOptional()
      .openapi({
        description: 'Indicates the maximum item count of the property value',
        example: '2',
      }),
    maxLength: z
      .int32()
      .min(1)
      .exactOptional()
      .openapi({ description: 'Indicates the maximum size of the property value', example: '500' }),
    minItems: z
      .int32()
      .min(0)
      .default(1)
      .exactOptional()
      .openapi({
        description: 'Indicates the minimum item count of the property value.',
        example: '1',
      }),
    minLength: z
      .int32()
      .min(0)
      .default(0)
      .exactOptional()
      .openapi({ description: 'Indicates the minimum size of the property value', example: '1' }),
    name: ChannelCatalogMarketplacePropertyNameSchema,
    offerIdRequired: z
      .int()
      .exactOptional()
      .openapi({
        description: 'Indicates the offer identifier required to configure this property.',
        example: '10',
      }),
    pattern: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Channel catalog marketplace setting value format validation regular expression',
        example:
          '(?:[a-z0-9!#$%&\'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&\'*+/=?^_`{|}~-]+)*|"(?:[\\x01-\\x08\\x0b\\x0c\\x0e-\\x1f\\x21\\x23-\\x5b\\x5d-\\x7f]|\\\\[\\x01-\\x09\\x0b\\x0c\\x0e-\\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\\x01-\\x08\\x0b\\x0c\\x0e-\\x1f\\x21-\\x5a\\x53-\\x7f]|\\\\[\\x01-\\x09\\x0b\\x0c\\x0e-\\x7f])+)\\])',
      }),
    position: z
      .int()
      .min(1)
      .openapi({
        description: 'Indicate the position of the property in the display group',
        example: '1',
      }),
    readOnly: z
      .boolean()
      .default(false)
      .openapi({
        description:
          'Indicate if the value cannot be changed. This is used for example for ebay token that should not be changed.',
        example: 'false',
      }),
    required: z
      .boolean()
      .default(false)
      .openapi({ description: 'Indicate if the property is required or not', example: 'true' }),
    type: TypeSchema,
    visible: z
      .boolean()
      .default(true)
      .openapi({
        description: 'Indicates if this property should be displayed in the configuration page.',
        example: 'true',
      }),
  })
  .openapi({
    description: 'Model for fetching a channel catalog marketplace property',
    discriminator: { propertyName: 'discriminatorType' },
    required: ['name', 'position', 'readOnly', 'required', 'visible', 'type', 'discriminatorType'],
  })
  .openapi('ChannelCatalogMarketplaceProperty')

const ChannelCatalogMarketplaceBooleanPropertySchema = ChannelCatalogMarketplacePropertySchema.and(
  z
    .object({
      default: z
        .boolean()
        .exactOptional()
        .openapi({ description: 'Indicate the default values of the property', example: 'false' }),
    })
    .openapi({ required: [] }),
).openapi('ChannelCatalogMarketplaceBooleanProperty')

const ChannelCatalogMarketplaceSettingDiscriminatorTypeSchema = z
  .enum([
    'channelCatalogMarketplaceStringSetting',
    'channelCatalogMarketplaceIntegerSetting',
    'channelCatalogMarketplaceBooleanSetting',
    'channelCatalogMarketplaceNumberSetting',
  ])
  .openapi({ example: 'string' })
  .openapi('ChannelCatalogMarketplaceSettingDiscriminatorType')

const ChannelCatalogMarketplaceSettingSchema = z
  .object({
    discriminatorType: ChannelCatalogMarketplaceSettingDiscriminatorTypeSchema,
    name: ChannelCatalogMarketplacePropertyNameSchema,
  })
  .openapi({
    description: 'Model for fetching a channel catalog marketplace setting',
    discriminator: { propertyName: 'discriminatorType' },
    required: ['name', 'discriminatorType'],
  })
  .openapi('ChannelCatalogMarketplaceSetting')

const ChannelCatalogMarketplaceBooleanSettingSchema = ChannelCatalogMarketplaceSettingSchema.and(
  z
    .object({
      value: z
        .boolean()
        .exactOptional()
        .openapi({ description: 'Channel catalog marketplace property values', example: 'false' }),
    })
    .openapi({ required: [] }),
).openapi('ChannelCatalogMarketplaceBooleanSetting')

const ChannelCatalogMarketplaceIntegerPropertySchema = ChannelCatalogMarketplacePropertySchema.and(
  z
    .object({
      default: z
        .array(z.int())
        .exactOptional()
        .openapi({ description: 'Indicate the default values of the property', example: ['201'] }),
    })
    .openapi({ required: [] }),
).openapi('ChannelCatalogMarketplaceIntegerProperty')

const ChannelCatalogMarketplaceIntegerSettingSchema = ChannelCatalogMarketplaceSettingSchema.and(
  z
    .object({
      values: z
        .array(z.int())
        .exactOptional()
        .openapi({ description: 'Channel catalog marketplace property values', example: ['201'] }),
    })
    .openapi({ required: [] }),
).openapi('ChannelCatalogMarketplaceIntegerSetting')

const ChannelCatalogMarketplaceNumberPropertySchema = ChannelCatalogMarketplacePropertySchema.and(
  z
    .object({
      default: z
        .array(z.number())
        .exactOptional()
        .openapi({
          description: 'Indicate the default values of the property',
          example: ['201.69'],
        }),
    })
    .openapi({ required: [] }),
).openapi('ChannelCatalogMarketplaceNumberProperty')

const ChannelCatalogMarketplaceNumberSettingSchema = ChannelCatalogMarketplaceSettingSchema.and(
  z
    .object({
      values: z
        .array(z.number())
        .exactOptional()
        .openapi({
          description: 'Channel catalog marketplace property values',
          example: ['201.69'],
        }),
    })
    .openapi({ required: [] }),
).openapi('ChannelCatalogMarketplaceNumberSetting')

const ExternalLinksGetExternalConfigurationPageLinkSchema = BeezUPCommonLink3Schema.openapi(
  'ExternalLinksGetExternalConfigurationPageLink',
)

const LinksGetChannelCatalogMarketplacePropertiesLinkSchema = BeezUPCommonLink3Schema.and(
  z
    .any()
    .openapi({
      example: {
        href: '/v2/user/marketplaces/channelcatatalogs/6a90fcfd-24c7-422e-a65f-aadb1725bbfe/properties',
      },
    }),
).openapi('LinksGetChannelCatalogMarketplacePropertiesLink')

const LinksGetChannelCatalogMarketplaceSettingsLinkSchema = BeezUPCommonLink3Schema.and(
  z
    .any()
    .openapi({
      example: {
        href: '/v2/user/marketplaces/channelcatatalogs/6a90fcfd-24c7-422e-a65f-aadb1725bbfe/settings',
      },
    }),
).openapi('LinksGetChannelCatalogMarketplaceSettingsLink')

const ChannelCatalogMarketplacePropertiesLinksSchema = z
  .object({
    externalConfigurationPage: ExternalLinksGetExternalConfigurationPageLinkSchema.exactOptional(),
    self: LinksGetChannelCatalogMarketplacePropertiesLinkSchema,
    settings: LinksGetChannelCatalogMarketplaceSettingsLinkSchema.exactOptional(),
  })
  .openapi({ required: ['self'] })
  .openapi('ChannelCatalogMarketplacePropertiesLinks')

const ChannelCatalogMarketplacePropertyGroupSchema = z
  .object({
    name: z
      .string()
      .openapi({
        description: 'Indicate the code identifier of the group',
        example: 'AccountInformations',
        'x-lov': 'MarketplaceStorePropertyGroup',
      }),
    position: z
      .int()
      .min(1)
      .openapi({ description: 'Indicate the position of the group', example: '1' }),
    properties: z.array(ChannelCatalogMarketplacePropertySchema).openapi({
      example: [
        {
          name: 'EbayToken',
          position: '1',
          readOnly: 'true',
          values: [
            'AgAAAA**AQAAAA**aAAAAA**2VFhVg**nY+sHZ2PrBmdj6wVnY+sEZ2PrA2dj6AElISgCJaLpwWdj6x9nY+seQ**OEsBAA**AAMAAA**jzsVAMwj1dPBsyCEp0Fuj/toSBrfZF2JpKKDrrXIirMzgvgbsyxnA2h1wl7WjFD+TfdCmaBq3CAFLOog/433G5gsse1DLTT6uXFajdiHnPVfnL7QtKIpQEIwL8ZO5Tx1dGl0XQLsU7knPwbGHn5X6Z3JzXrCGvvpw2+MIzDNhasYlqPfOEr8Lct5dcsIIdhXl/qgrzALe5++v76/XjaXvP6eic3uCWBEXBiXC1uisjEtOqaNIPkFaiICBaXsQUzVZdM68bQatBg5bwf6hxvqOyNJRw4pttGStovcXXjL+aszw7ejbxLv1lJ6qeTMj5oRwTPl0AzBAejcY+DTBrLEmgdzrvWHLvMOa1ijGOGzVodBoDGimiqadCPQpAVZr0e7HvQIVbOlbmKpuCUFJ4RPCv0NxpkCm1/nxZWeS9H8gd/SfLf9Chgd115dcKzgxFBoSh7myJcw+MRM7szPQ2Pwv980dTRyHvbI8XR4OieYvXmU4H7Nl51N8B3qkjYFkdcp6J06eqs4dO68lDNdWZfXHkjwI3dY6umDUp4y82IdQl8IykPty3/DZfUAfqafgiAwMHZvXjewp5HhPjDi2zgf+5EcDlvf6rNMzjsghjdWUQi4WldDk+LXgkos6jswIQaNPdpW1D4KyPYWtGYknx0Xzzuc6WmBoVwGFalgMvCWWI9Gs2w6PG5GqB9zm1Fnr3svtPbNYPQ6q3VQpkKL2SWQXy383O1cp6ZMLI9GwZe0FnrqCxb/wc4XJUVw2RoR3qiX',
          ],
        },
        {
          name: 'PaypalAddress',
          pattern:
            '(?:[a-z0-9!#$%&\'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&\'*+/=?^_`{|}~-]+)*|"(?:[\\x01-\\x08\\x0b\\x0c\\x0e-\\x1f\\x21\\x23-\\x5b\\x5d-\\x7f]|\\\\[\\x01-\\x09\\x0b\\x0c\\x0e-\\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\\x01-\\x08\\x0b\\x0c\\x0e-\\x1f\\x21-\\x5a\\x53-\\x7f]|\\\\[\\x01-\\x09\\x0b\\x0c\\x0e-\\x7f])+)\\])',
          position: '2',
          required: true,
          'x-pattern':
            '(?:[a-z0-9!#$%&\'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&\'*+/=?^_`{|}~-]+)*|"(?:[\\x01-\\x08\\x0b\\x0c\\x0e-\\x1f\\x21\\x23-\\x5b\\x5d-\\x7f]|\\\\[\\x01-\\x09\\x0b\\x0c\\x0e-\\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\\x01-\\x08\\x0b\\x0c\\x0e-\\x1f\\x21-\\x5a\\x53-\\x7f]|\\\\[\\x01-\\x09\\x0b\\x0c\\x0e-\\x7f])+)\\])',
        },
      ],
    }),
  })
  .openapi({ required: ['name', 'position', 'properties'] })
  .openapi('ChannelCatalogMarketplacePropertyGroup')

const ChannelCatalogMarketplacePropertiesSchema = z
  .object({
    info: BeezUPCommonInfoSummariesSchema.exactOptional(),
    links: ChannelCatalogMarketplacePropertiesLinksSchema,
    propertyGroups: z.array(ChannelCatalogMarketplacePropertyGroupSchema).openapi({
      description: 'The groups settings with constraints',
      example: [
        {
          name: 'AccountInformations',
          position: '1',
          properties: [
            {
              name: 'EbayToken',
              position: '1',
              readOnly: 'true',
              values: [
                'AgAAAA**AQAAAA**aAAAAA**2VFhVg**nY+sHZ2PrBmdj6wVnY+sEZ2PrA2dj6AElISgCJaLpwWdj6x9nY+seQ**OEsBAA**AAMAAA**jzsVAMwj1dPBsyCEp0Fuj/toSBrfZF2JpKKDrrXIirMzgvgbsyxnA2h1wl7WjFD+TfdCmaBq3CAFLOog/433G5gsse1DLTT6uXFajdiHnPVfnL7QtKIpQEIwL8ZO5Tx1dGl0XQLsU7knPwbGHn5X6Z3JzXrCGvvpw2+MIzDNhasYlqPfOEr8Lct5dcsIIdhXl/qgrzALe5++v76/XjaXvP6eic3uCWBEXBiXC1uisjEtOqaNIPkFaiICBaXsQUzVZdM68bQatBg5bwf6hxvqOyNJRw4pttGStovcXXjL+aszw7ejbxLv1lJ6qeTMj5oRwTPl0AzBAejcY+DTBrLEmgdzrvWHLvMOa1ijGOGzVodBoDGimiqadCPQpAVZr0e7HvQIVbOlbmKpuCUFJ4RPCv0NxpkCm1/nxZWeS9H8gd/SfLf9Chgd115dcKzgxFBoSh7myJcw+MRM7szPQ2Pwv980dTRyHvbI8XR4OieYvXmU4H7Nl51N8B3qkjYFkdcp6J06eqs4dO68lDNdWZfXHkjwI3dY6umDUp4y82IdQl8IykPty3/DZfUAfqafgiAwMHZvXjewp5HhPjDi2zgf+5EcDlvf6rNMzjsghjdWUQi4WldDk+LXgkos6jswIQaNPdpW1D4KyPYWtGYknx0Xzzuc6WmBoVwGFalgMvCWWI9Gs2w6PG5GqB9zm1Fnr3svtPbNYPQ6q3VQpkKL2SWQXy383O1cp6ZMLI9GwZe0FnrqCxb/wc4XJUVw2RoR3qiX',
              ],
            },
            {
              name: 'PayPalEmailAddress',
              pattern:
                '(?:[a-z0-9!#$%&\'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&\'*+/=?^_`{|}~-]+)*|"(?:[\\x01-\\x08\\x0b\\x0c\\x0e-\\x1f\\x21\\x23-\\x5b\\x5d-\\x7f]|\\\\[\\x01-\\x09\\x0b\\x0c\\x0e-\\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\\x01-\\x08\\x0b\\x0c\\x0e-\\x1f\\x21-\\x5a\\x53-\\x7f]|\\\\[\\x01-\\x09\\x0b\\x0c\\x0e-\\x7f])+)\\])',
              position: '2',
              required: true,
              'x-pattern':
                '(?:[a-z0-9!#$%&\'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&\'*+/=?^_`{|}~-]+)*|"(?:[\\x01-\\x08\\x0b\\x0c\\x0e-\\x1f\\x21\\x23-\\x5b\\x5d-\\x7f]|\\\\[\\x01-\\x09\\x0b\\x0c\\x0e-\\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\\x01-\\x08\\x0b\\x0c\\x0e-\\x1f\\x21-\\x5a\\x53-\\x7f]|\\\\[\\x01-\\x09\\x0b\\x0c\\x0e-\\x7f])+)\\])',
            },
          ],
        },
        {
          displayGroupCode: 'AnnounceTitle',
          displayGroupPosition: '2',
          properties: [
            { name: 'Postalcode', position: '1', required: true },
            {
              lovLink: { href: '/v2/user/lov/Country_eBay' },
              lovRequired: 'true',
              name: 'Country',
              position: '2',
              required: true,
            },
            {
              lovLink: { href: '/v2/user/lov/ReturnsWithinDuration_eBay' },
              lovRequired: 'true',
              name: 'ReturnsWithinOption',
              position: '3',
              required: true,
            },
            {
              lovLink: { href: '/v2/user/lov/FRA_ShippingService_eBay' },
              lovRequired: 'true',
              name: 'ShippingService',
              position: '4',
              required: true,
            },
            {
              lovLink: { href: '/v2/user/lov/Currency_eBay' },
              lovRequired: 'true',
              name: 'Currency',
              position: '5',
              required: true,
            },
            {
              lovLink: { href: '/v2/user/lov/PaymentMethods_eBay' },
              lovRequired: 'true',
              maxItems: 2,
              minItems: 1,
              name: 'PaymentMethods',
              position: '6',
              required: true,
            },
          ],
        },
        {
          displayGroupCode: 'SalesConditions',
          displayGroupPosition: '3',
          properties: [
            {
              lovLink: { href: '/v2/user/lov/ReturnsAcceptedOption_eBay' },
              lovRequired: 'true',
              name: 'ReturnsAcceptedOption',
              position: '1',
              required: true,
            },
            {
              lovLink: { href: '/v2/user/lov/ShippingCostPaidByOption_eBay' },
              lovRequired: 'true',
              name: 'ShippingCostPaidByOption',
              position: '2',
              required: true,
            },
            {
              lovLink: { href: '/v2/user/lov/RefundOption_eBay' },
              lovRequired: 'true',
              name: 'RefundOption',
              position: '3',
              required: true,
            },
            {
              lovLink: { href: '/v2/user/lov/ReturnsWithinDuration_eBay' },
              lovRequired: 'true',
              name: 'ReturnsWithinOption',
              position: '4',
              required: true,
            },
            { maxLength: 5000, name: 'ReturnDescription', position: '5', required: false },
          ],
        },
        {
          displayGroupCode: 'HTML',
          displayGroupPosition: '4',
          properties: [{ maxLength: 50000, name: 'Template_HTML', position: '1', required: false }],
        },
        {
          displayGroupCode: 'OrdersRetrievalOptions',
          displayGroupPosition: '5',
          properties: [
            {
              description: 'If true allows to retireve one marketplace country only',
              name: 'RetrieveOnlyOneCountry',
              position: '1',
              required: false,
              type: 'boolean',
            },
          ],
        },
      ],
    }),
  })
  .openapi({ required: ['links', 'propertyGroups'] })
  .openapi('ChannelCatalogMarketplaceProperties')

const ChannelCatalogMarketplaceSettingArraySchema = z
  .array(ChannelCatalogMarketplaceSettingSchema)
  .openapi({
    example: [
      { name: 'Country', values: ['FR'] },
      { name: 'Currency', values: ['EUR'] },
      { name: 'ListingDuration', values: ['GTC'] },
      { name: 'PaymentMethods', values: ['CCAccepted'] },
      { name: 'PayPalEmailAddress', values: ['pascal@ixeoline.com'] },
      { name: 'PostalCode', values: ['69630'] },
      { name: 'RefundOption', values: ['MoneyBackOrExchange'] },
      { name: 'ReturnsAcceptedOption', values: ['ReturnsAccepted'] },
      { name: 'ReturnsWithinOption', values: ['Days_10'] },
      { name: 'ShippingCostPaidByOption', values: ['Buyer'] },
      { name: 'ShippingService', values: ['FR_ColiposteColissimo'] },
    ],
  })
  .openapi('ChannelCatalogMarketplaceSettingArray')

const LinksSetChannelCatalogMarketplaceSettingsLinkSchema = BeezUPCommonLink3Schema.and(
  z
    .any()
    .openapi({
      example: {
        href: '/v2/user/marketplaces/channelcatatalogs/6a90fcfd-24c7-422e-a65f-aadb1725bbfe/settings',
        method: 'POST',
        parameters: {
          request: {
            in: 'body',
            schema: 'setChannelCatalogMarketplaceSettingsRequest',
            type: 'object',
          },
        },
      },
    }),
).openapi('LinksSetChannelCatalogMarketplaceSettingsLink')

const ChannelCatalogMarketplaceSettingsLinksSchema = z
  .object({
    save: LinksSetChannelCatalogMarketplaceSettingsLinkSchema,
    self: LinksGetChannelCatalogMarketplaceSettingsLinkSchema,
  })
  .openapi({ required: ['self', 'save'] })
  .openapi('ChannelCatalogMarketplaceSettingsLinks')

const ChannelCatalogMarketplaceSettingsSchema = z
  .object({
    links: ChannelCatalogMarketplaceSettingsLinksSchema,
    settings: z.array(ChannelCatalogMarketplaceSettingSchema).openapi({
      example: [
        { name: 'Country', values: ['FR'] },
        { name: 'Currency', values: ['EUR'] },
        { name: 'ListingDuration', values: ['GTC'] },
        { name: 'PaymentMethods', values: ['CCAccepted'] },
        { name: 'PayPalEmailAddress', values: ['pascal@ixeoline.com'] },
        { name: 'PostalCode', values: ['69630'] },
        { name: 'RefundOption', values: ['MoneyBackOrExchange'] },
        { name: 'ReturnsAcceptedOption', values: ['ReturnsAccepted'] },
        { name: 'ReturnsWithinOption', values: ['Days_10'] },
        { name: 'ShippingCostPaidByOption', values: ['Buyer'] },
        { name: 'ShippingService', values: ['FR_ColiposteColissimo'] },
      ],
    }),
  })
  .openapi({
    description: 'The channel catalog marketplace settings',
    required: ['links', 'settings'],
  })
  .openapi('ChannelCatalogMarketplaceSettings')

const ChannelCatalogMarketplaceStringPropertySchema = ChannelCatalogMarketplacePropertySchema.and(
  z
    .object({
      default: z
        .array(z.string())
        .exactOptional()
        .openapi({
          description: 'Indicate the default values of the property',
          example: ['My default value'],
        }),
    })
    .openapi({ required: [] }),
).openapi('ChannelCatalogMarketplaceStringProperty')

const ChannelCatalogMarketplaceStringSettingSchema = ChannelCatalogMarketplaceSettingSchema.and(
  z
    .object({
      values: z
        .array(z.string())
        .exactOptional()
        .openapi({
          description: 'Channel catalog marketplace property values',
          example: ['myemail@mydomain.com'],
        }),
    })
    .openapi({ required: [] }),
).openapi('ChannelCatalogMarketplaceStringSetting')

const ChannelCatalogProductByChannelCatalogRequestSchema = z
  .object({
    channelCatalogIds: z
      .array(BeezUPCommonChannelCatalogIdSchema)
      .openapi({ description: 'The list of channel catalog identifier' }),
    productId: BeezUPCommonProductIdSchema,
    storeId: BeezUPCommonStoreIdSchema,
  })
  .openapi({ required: ['storeId', 'productId', 'channelCatalogIds'] })
  .openapi('ChannelCatalogProductByChannelCatalogRequest')

const LinksDisableChannelCatalogProductLinkSchema = BeezUPCommonLink3Schema.and(
  z
    .any()
    .openapi({
      example: {
        href: '/v2/user/channelCatalogs/6d6b04de-406b-4539-8e7e-bf3e8da5dfb0/products/578419df-1bbf-41a6-96fa-862e42182b67/disable',
        method: 'POST',
      },
    }),
).openapi('LinksDisableChannelCatalogProductLink')

const LinksOverrideChannelCatalogProductValuesLinkSchema = BeezUPCommonLink3Schema.and(
  z
    .any()
    .openapi({
      example: {
        href: '/v2/user/channelCatalogs/6d6b04de-406b-4539-8e7e-bf3e8da5dfb0/products/578419df-1bbf-41a6-96fa-862e42182b67/overrides',
        method: 'POST',
      },
    }),
).openapi('LinksOverrideChannelCatalogProductValuesLink')

const LinksReenableChannelCatalogProductLinkSchema = BeezUPCommonLink3Schema.and(
  z
    .any()
    .openapi({
      example: {
        href: '/v2/user/channelCatalogs/6d6b04de-406b-4539-8e7e-bf3e8da5dfb0/products/578419df-1bbf-41a6-96fa-862e42182b67/reenable',
        method: 'POST',
      },
    }),
).openapi('LinksReenableChannelCatalogProductLink')

const LinksGetChannelCatalogProductInfoLinkSchema = BeezUPCommonLink3Schema.and(
  z
    .any()
    .openapi({
      example: {
        href: '/v2/user/channelCatalogs/6d6b04de-406b-4539-8e7e-bf3e8da5dfb0/products/578419df-1bbf-41a6-96fa-862e42182b67',
        method: 'GET',
      },
    }),
).openapi('LinksGetChannelCatalogProductInfoLink')

const ChannelCatalogProductInfoLinksSchema = z
  .object({
    disable: LinksDisableChannelCatalogProductLinkSchema.exactOptional(),
    override: LinksOverrideChannelCatalogProductValuesLinkSchema,
    reenable: LinksReenableChannelCatalogProductLinkSchema.exactOptional(),
    self: LinksGetChannelCatalogProductInfoLinkSchema,
  })
  .openapi({
    description: 'Indicates the differents actions you can do on a channel product',
    required: ['self', 'override'],
  })
  .openapi('ChannelCatalogProductInfoLinks')

const ProductOverrideWithCatalogValueSchema = z
  .object({
    catalogValue: z
      .string()
      .exactOptional()
      .openapi({ description: 'The catalog product value', example: 'Sony' }),
    override: z
      .string()
      .openapi({ description: 'The overridden product value', example: 'Sony bravia' }),
  })
  .openapi({ required: ['override'] })
  .openapi('ProductOverrideWithCatalogValue')

const ProductOverridesWithCatalogValuesSchema = z
  .record(z.string(), ProductOverrideWithCatalogValueSchema)
  .openapi({
    description: 'The key is the channel column identifier',
    example: {
      '0EA21509-1141-57BD-B679-371BC98B2ADA': {
        catalogValue: 'http://www.toto.com/thing/images/cache/ldldld.jpg',
        override: 'http://www.blalbla.nl/images/cache/ldldld.jpg',
      },
      '2A77749D-0AAB-5245-89B5-6A1A4E06DACA': {
        catalogValue: 'http://www.toto.com/thing/images/cache/dldldl.jpg',
        override: 'http://www.blalbla.nl/images/cache/dldldl.jpg',
      },
      '54B3B3CB-5CA5-5471-9DAE-5310C032059A': {
        catalogValue: 'http://www.toto.com/thing/cache/dlmdl.jpg',
        override: 'http://www.blalbla.nl/images/cache/dlmdl.jpg',
      },
      '57F70E81-E4F2-5034-BC65-E1D5C48EBEDA': { catalogValue: 'Sony', override: 'Sony bravia' },
      '8a76f06a-fefc-4c0d-bcfe-b210f1482977': { catalogValue: 'x235', override: '3563' },
      'B7B79A0B-A8DE-54DA-964C-E2704DF3738A': {
        catalogValue: 'x_ezlSHBELNL56',
        override: 'SHBELNL56',
      },
    },
  })
  .openapi('ProductOverridesWithCatalogValues')

const ChannelCatalogProductInfoSchema = BeezUPCommonProductBasicInfoSchema.and(
  z
    .object({
      disabled: z
        .boolean()
        .default(false)
        .openapi({
          description: 'Indicates if the product has been disabled or not',
          example: 'false',
        }),
      excluded: z
        .boolean()
        .default(false)
        .openapi({
          description: 'Indicates if the product has been excluded by a exclusion filter',
          example: 'true',
        }),
      excludedBy: z
        .array(ExclusionFilterNameSchema)
        .exactOptional()
        .openapi({ example: ['Exclude sony products'] }),
      links: ChannelCatalogProductInfoLinksSchema,
      overrides: ProductOverridesWithCatalogValuesSchema,
      uncategorized: z
        .boolean()
        .openapi({
          description:
            "Indicates if the product's category has been NOT mapped to a channel category",
          example: 'true',
        }),
    })
    .openapi({
      description: 'The channel catalog product information',
      required: [
        'productId',
        'productExists',
        'overrides',
        'disabled',
        'uncategorized',
        'excluded',
        'links',
      ],
    }),
).openapi('ChannelCatalogProductInfo')

const ChannelCatalogProductByChannelCatalogResponseSchema = z
  .object({
    channelCatalogs: z
      .record(z.string(), ChannelCatalogProductInfoSchema)
      .exactOptional()
      .openapi({
        description:
          'The channel catalog product by channel catalog. The key is the channel catalog identifier',
      }),
  })
  .openapi({ required: [] })
  .openapi('ChannelCatalogProductByChannelCatalogResponse')

const ChannelCatalogProductFiltersSchema = z
  .object({
    additionalProductFilters: BeezUPCommonAdditionalProductFiltersSchema.exactOptional(),
    catalogEans: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'The catalog product EAN filter (multiple values)' }),
    catalogMpns: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'The catalog product MPN filter (multiple values)' }),
    catalogSkus: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'The catalog product SKU filter (multiple values)' }),
    channelEans: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'The channel product EAN filter (multiple values)' }),
    channelMpns: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'The channel product MPN filter (multiple values)' }),
    channelSkus: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'The channel product SKU filter (multiple values)' }),
    title: z
      .string()
      .exactOptional()
      .openapi({ description: 'The product title filter', example: 'Refrigérateur' }),
  })
  .openapi({ required: [] })
  .openapi('ChannelCatalogProductFilters')

const LinksExportChannelCatalogProductInfoListLinkSchema = BeezUPCommonLink3Schema.and(
  z
    .any()
    .openapi({
      example: {
        href: '/v2/user/channelCatalogs/6d6b04de-406b-4539-8e7e-bf3e8da5dfb0/products/export',
        method: 'POST',
        parameters: { format: { in: 'query', required: true, type: 'string', value: 'csv' } },
      },
    }),
).openapi('LinksExportChannelCatalogProductInfoListLink')

const ChannelCatalogProductInfoListLinksSchema = z
  .object({
    export: LinksExportChannelCatalogProductInfoListLinkSchema.exactOptional(),
    self: LinksGetChannelCatalogProductInfoListLinkSchema,
  })
  .openapi({ required: ['self'] })
  .openapi('ChannelCatalogProductInfoListLinks')

const ChannelCatalogProductInfoListSchema = z
  .object({
    links: ChannelCatalogProductInfoListLinksSchema,
    paginationResult: BeezUPCommonPaginationResultSchema,
    productInfos: z.array(ChannelCatalogProductInfoSchema),
  })
  .openapi({
    description: 'The channel catalog product info list',
    required: ['paginationResult', 'links', 'productInfos'],
  })
  .openapi('ChannelCatalogProductInfoList')

const ChannelCatalogProductsCountersSchema = z
  .object({
    disabledProductCountExcludingUncategorized: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Disabled product count EXCLUDING uncategorized products on existing products.',
        example: '150',
      }),
    disabledProductCountIncludingUncategorized: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Disabled product count INCLUDING uncategorized products on existing products.',
        example: '169',
      }),
    excludedProductCountExcludingUncategorizedAndDisabled: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Excluded product count EXCLUDING uncategorized products AND disabled products on existing products.',
        example: '50',
      }),
    excludedProductCountIncludingUncategorizedAndDisabled: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Excluded product count INCLUDING uncategorized products AND disabled products on existing products.',
        example: '66',
      }),
    existingProductCount: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'Imported product count currently in your catalog.',
        example: '1000',
      }),
    uncategorizedProductCount: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'Product count WITHOUT category mapped on existing products.',
        example: '250',
      }),
  })
  .openapi({
    description: 'The channel catalog products counters. For each counter you will have a count.',
    required: [],
  })
  .openapi('ChannelCatalogProductsCounters')

const ChannelCategoryChannelCodeSchema = z
  .string()
  .openapi({ description: 'The channel category channel code identifier', example: '1342' })
  .openapi('ChannelCategoryChannelCode')

const ChannelColumnDescriptionSchema = z
  .string()
  .openapi({
    description: 'The channel column description',
    example:
      'Please enter the base prices (price per unit) according to <a href="http://www.gesetze-im-internet.de/pangv/__2.html">Article PAngV</a>',
  })
  .openapi('ChannelColumnDescription')

const ChannelColumnConfigurationSchema = z
  .object({
    beezUPColumnName: BeezUPCommonBeezUPColumnNameSchema.exactOptional(),
    columnDataType: BeezUPCommonColumnDataTypeSchema,
    columnImportance: BeezUPCommonColumnImportanceSchema,
  })
  .openapi({
    description:
      'The channel column configuration. The BeezUP Column Name is optional. If the BeezUP column is mapped we will indicate the data type and column importance of the BeezUP column.',
    required: ['columnImportance', 'columnDataType'],
  })
  .openapi('ChannelColumnConfiguration')

const ChannelColumnRestrictedValuesSchema = z
  .record(z.string(), z.string())
  .openapi({
    description:
      'The restricted values. The key will be the restricted value identifier (format:guid) and the value will be the restriced value\n',
  })
  .openapi('ChannelColumnRestrictedValues')

const ChannelColumnShowInMappingSchema = z
  .boolean()
  .openapi({
    description: 'Indicates if this column must shown in the mapping page or not',
    example: 'true',
  })
  .openapi('ChannelColumnShowInMapping')

const ChannelCategoryColumnOverrideSchema = z
  .object({
    channelColumnDescription: ChannelColumnDescriptionSchema.exactOptional(),
    channelColumnId: BeezUPCommonChannelColumnIdSchema,
    channelColumnName: BeezUPCommonChannelColumnNameSchema,
    configuration: ChannelColumnConfigurationSchema,
    restrictedValues: ChannelColumnRestrictedValuesSchema.exactOptional(),
    showInMapping: ChannelColumnShowInMappingSchema,
  })
  .openapi({ required: ['channelColumnId', 'channelColumnName', 'showInMapping', 'configuration'] })
  .openapi('ChannelCategoryColumnOverride')

const ChannelCategoryColumnOverridesSchema = z
  .record(z.string(), ChannelCategoryColumnOverrideSchema)
  .openapi({ description: 'The channel category column overrides' })
  .openapi('ChannelCategoryColumnOverrides')

const ChannelCategoryDefaultCostSchema = z
  .number()
  .openapi({ description: 'The default cost on this channel category', example: '10.42' })
  .openapi('ChannelCategoryDefaultCost')

const ChannelCategoryLevelSchema = z
  .int32()
  .min(1)
  .max(9)
  .openapi({ description: 'The channel category level starting from 1', example: '3' })
  .openapi('ChannelCategoryLevel')

const ChannelCategorySchema = z
  .object({
    channelCategoryChannelCode: ChannelCategoryChannelCodeSchema.exactOptional(),
    channelCategoryColumnOverrides: ChannelCategoryColumnOverridesSchema.exactOptional(),
    channelCategoryDefaultCost: ChannelCategoryDefaultCostSchema.exactOptional(),
    channelCategoryId: BeezUPCommonChannelCategoryIdSchema,
    channelCategoryLevel: ChannelCategoryLevelSchema,
    channelCategoryPath: BeezUPCommonChannelCategoryPathSchema,
  })
  .openapi({
    description: 'The channel category',
    required: ['channelCategoryId', 'channelCategoryPath', 'channelCategoryLevel'],
  })
  .openapi('ChannelCategory')

const ChannelColumnSchema = z
  .object({
    channelColumnDescription: ChannelColumnDescriptionSchema.exactOptional(),
    channelColumnId: BeezUPCommonChannelColumnIdSchema,
    channelColumnName: BeezUPCommonChannelColumnNameSchema,
    configuration: ChannelColumnConfigurationSchema,
    position: z
      .int()
      .openapi({ description: 'The position of the column starting from 1', example: '1' }),
    restrictedValues: ChannelColumnRestrictedValuesSchema.exactOptional(),
    showInMapping: ChannelColumnShowInMappingSchema,
  })
  .openapi({
    description: 'The channel column',
    required: [
      'channelColumnId',
      'channelColumnName',
      'showInMapping',
      'position',
      'configuration',
    ],
  })
  .openapi('ChannelColumn')

const ChannelFirstLevelCategorySchema = z
  .object({
    channelCategoryChannelCode: ChannelCategoryChannelCodeSchema.exactOptional(),
    channelCategoryColumnOverrides: ChannelCategoryColumnOverridesSchema.exactOptional(),
    channelCategoryDefaultCost: ChannelCategoryDefaultCostSchema.exactOptional(),
    channelCategoryId: BeezUPCommonChannelCategoryIdSchema,
    channelCategoryLevel: ChannelCategoryLevelSchema,
    channelCategoryName: z
      .string()
      .openapi({ description: 'The channel category name', example: 'Clothing' }),
    subCategories: z.array(ChannelCategorySchema).exactOptional(),
  })
  .openapi({
    description: 'The first level category with his sub categories',
    required: ['channelCategoryId', 'channelCategoryName', 'channelCategoryLevel'],
  })
  .openapi('ChannelFirstLevelCategory')

const LinksGetChannelInfoLinkSchema = BeezUPCommonLink3Schema.and(
  z
    .any()
    .openapi({
      example: { href: '/v2/user/channels/6d6b04de-406b-4539-8e7e-bf3e8da5dfb0', method: 'GET' },
    }),
).openapi('LinksGetChannelInfoLink')

const ChannelHeaderLinksSchema = z
  .object({ self: LinksGetChannelInfoLinkSchema.exactOptional() })
  .openapi({ description: 'The links related to an available channel', required: [] })
  .openapi('ChannelHeaderLinks')

const ChannelHeaderSchema = z
  .object({
    channelId: BeezUPCommonChannelIdSchema,
    channelLogoUrl: BeezUPCommonHttpUrlSchema,
    channelName: BeezUPCommonChannelNameSchema,
    links: ChannelHeaderLinksSchema,
    types: z
      .array(z.string())
      .openapi({ description: 'The type list related to a channel', example: ['Marketplace'] }),
  })
  .openapi({
    description: 'The available channel',
    required: ['channelId', 'channelName', 'channelLogoUrl', 'links', 'types'],
  })
  .openapi('ChannelHeader')

const ChannelInfoSchema = z
  .object({
    beezUPOffer: z
      .string()
      .exactOptional()
      .openapi({ description: 'Indicate the BeezUP offer', example: 'First month free' }),
    channelDescription: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Indicae a description to the channel',
        example:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia dolorum, animi voluptatibus maiores, assumenda maxime illum, labore quae quas ducimus laudantium provident veritatis doloremque dignissimos eum. Error magni illum autem.',
      }),
    channelId: BeezUPCommonChannelIdSchema,
    channelLogoUrl: BeezUPCommonHttpUrlSchema.exactOptional(),
    channelName: BeezUPCommonChannelNameSchema,
    details: z
      .object({
        businessModel: z
          .string()
          .exactOptional()
          .openapi({ description: 'The business model of the channel', example: 'CPC' }),
        category: z
          .string()
          .exactOptional()
          .openapi({ description: 'The channel category', example: 'NULL' }),
        channelType: z
          .string()
          .exactOptional()
          .openapi({ description: 'The channel type', example: 'Comparator' }),
        costs: z
          .string()
          .exactOptional()
          .openapi({
            description: "The cost's description of the channel",
            example: 'CPC variation from 0.10€ to 0.20€',
          }),
        homeUrl: z
          .url()
          .exactOptional()
          .openapi({
            description: 'The home url of the channel',
            example: 'http://www.achetezfacile.com',
          }),
        subscriptionLink: z
          .string()
          .exactOptional()
          .openapi({
            description: 'The subscription link to the channel',
            example: 'By Email at : stephanie.gregis@m6.fr\n',
          }),
        trackingType: z
          .string()
          .exactOptional()
          .openapi({ description: 'The tracking type', example: 'Redirect' }),
      })
      .exactOptional()
      .openapi({ required: [] }),
    keyNumbers: z
      .object({
        categories: z
          .string()
          .exactOptional()
          .openapi({ description: 'The estimated category count of the channel', example: 'NC' }),
        products: z
          .string()
          .exactOptional()
          .openapi({ description: 'The estimated product count of the channel', example: '1M' }),
        stores: z
          .string()
          .exactOptional()
          .openapi({ description: 'The estimated store count of the channel', example: '3000' }),
        viewsPerMonth: z
          .string()
          .exactOptional()
          .openapi({
            description: 'The estimated view count per month of the channel',
            example: '3M',
          }),
      })
      .exactOptional()
      .openapi({ required: [] }),
    salesContact: z
      .object({
        email: z
          .email()
          .exactOptional()
          .openapi({
            description: 'Indicate the sales contact email',
            example: 'stephanie.gregis@m6.fr',
          }),
        name: z
          .string()
          .exactOptional()
          .openapi({ description: 'Indicate the BeezUP offer', example: 'Stéphanie Gregis' }),
        phoneNumber: z
          .string()
          .exactOptional()
          .openapi({
            description: 'The sales contact phone number',
            example: '0033 6 08 87 85 45',
          }),
      })
      .exactOptional()
      .openapi({ required: [] }),
    technicalContact: z
      .object({
        email: z
          .string()
          .exactOptional()
          .openapi({ description: 'The technical contact email', example: 'pierre.guedon@m6.fr' }),
        name: z
          .string()
          .exactOptional()
          .openapi({ description: 'The technical contact name', example: 'Pierre Guédon' }),
        phoneNumber: z
          .string()
          .exactOptional()
          .openapi({ description: 'The technical contact phone number', example: 'NC' }),
      })
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({ required: ['channelId', 'channelName'] })
  .openapi('ChannelInfo')

const ChannelRootCategorySchema = z
  .object({ firstLevelCategories: z.array(ChannelFirstLevelCategorySchema) })
  .openapi({
    description: 'Get channel first level category list',
    required: ['firstLevelCategories'],
  })
  .openapi('ChannelRootCategory')

const ClearMerchantOrderInfoListRequestSchema = z
  .object({
    orders: z
      .array(OrderIdentifierSchema)
      .min(1)
      .max(100)
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      })
      .openapi({
        example: [
          { accountId: '1234', beezUPOrderId: '0', marketplaceTechnicalCode: 'Amazon' },
          { accountId: '5678', beezUPOrderId: '0', marketplaceTechnicalCode: 'Amazon' },
          { accountId: '9876', beezUPOrderId: '0', marketplaceTechnicalCode: 'Ebay' },
        ],
      }),
  })
  .openapi({ required: ['orders'] })
  .openapi('ClearMerchantOrderInfoListRequest')

const ClickIncludedAndAdditionalClickPriceSchema = z
  .object({
    additionalClickPrice: z
      .float64()
      .exactOptional()
      .openapi({ description: 'The additional click price' }),
    clickIncluded: z.int32().exactOptional().openapi({ description: 'The click included' }),
  })
  .openapi({ required: [] })
  .openapi('ClickIncludedAndAdditionalClickPrice')

const ClickIncludedAndVariablePriceSchema = z
  .object({
    clickIncluded: z.int32().exactOptional().openapi({ description: 'Click included' }),
    variablePrice: z
      .float64()
      .exactOptional()
      .openapi({ description: 'The pricing applied for this range' }),
  })
  .openapi({ required: [] })
  .openapi('ClickIncludedAndVariablePrice')

const ProductValuesSchema = z
  .record(z.string(), z.string())
  .openapi({
    description: 'The key is the column identifier',
    example: {
      '012929c0-e78b-462a-a96e-25c061575385':
        'http://media.conforama.fr/Medias/500000/80000/5000/500/10/G_585511_A.jpg',
      '46602e10-bc45-4944-a440-63d5f7ece1f8': '42',
      '68082b11-4ffd-4bec-964a-465a471c7d37': 'SKU1234',
      'b6d74510-41ce-42ec-947a-0bdf62e9beee': 'Refrigerateur',
      'ba270fa0-8482-46be-905a-cae4ca746b92':
        'http://www.conforama.fr/gros-electromenager/encastrable/refrigerateur-encastrable/refrigerateur-combine-161-litres-far-r5115s/p/585511',
    },
  })
  .openapi('ProductValues')

const ComputeExpressionRequestSchema = z
  .object({ encryptedExpression: EncryptedExpressionSchema, productValues: ProductValuesSchema })
  .openapi({
    description:
      'The request message to compute an expression based on the provided product values',
    required: ['productValues', 'encryptedExpression'],
  })
  .openapi('ComputeExpressionRequest')

const ConfigureAutoImportIntervalRequestSchema = z
  .object({
    interval: z
      .string()
      .regex(
        /(00:1[5-9])|(00:[2-5][0-9])|(0[1-9]:[0-5][0-9])|(1[0-9]:[0-5][0-9])|(2[0-3]:[0-5][0-9])/,
      )
      .openapi({
        description: 'Indicate the interval in time span. (i.e. "04:00:00" for every 4 hours)',
        example: '04:00:00',
      }),
  })
  .openapi({
    description: 'The message request to configure the auto import interval',
    required: ['interval'],
  })
  .openapi('ConfigureAutoImportIntervalRequest')

const ConfigureAutomaticTransitionRequestSchema = z
  .object({ automaticTransitions: z.array(AutomaticTransitionSchema) })
  .openapi({ required: ['automaticTransitions'] })
  .openapi('ConfigureAutomaticTransitionRequest')

const ConfigureCatalogColumnCatalogRequestSchema = z
  .object({ catalogColumn: CatalogColumnSchema })
  .openapi({
    description: 'The request to configure a catalog column',
    required: ['catalogColumn'],
  })
  .openapi('ConfigureCatalogColumnCatalogRequest')

const ConfigureCategoryRequestSchema = z
  .object({
    channelCatalogCategories: z.array(ChannelCatalogCategoryConfigurationSchema),
    overrideSubCategoryMappings: z
      .boolean()
      .openapi({
        description:
          'Great feature! In case of mapping to parent channel category, you can ask to override the mapping of all sub channel category to this catalog category path',
        example: 'true',
      }),
  })
  .openapi({
    description:
      'The request message to make a mapping between catalog category path and a channel category path',
    required: ['overrideSubCategoryMappings', 'channelCatalogCategories'],
  })
  .openapi('ConfigureCategoryRequest')

const ConsumptionAvailabilityStatusSchema = z
  .enum(['Available', 'Degraded', 'Unavailable'])
  .openapi({ description: 'The subscription consumption status' })
  .openapi('ConsumptionAvailabilityStatus')

const ContractBillingPeriodInfoSchema = z
  .object({
    amountBillingPeriodDiscount: z
      .float64()
      .exactOptional()
      .openapi({
        description: 'The amount discounted related to the billing period',
        example: '20.0',
      }),
    billingPeriodInMonth: BillingPeriodInMonthSchema.exactOptional(),
    billingPeriodPercentDiscount: z
      .float64()
      .exactOptional()
      .openapi({
        description: 'The discount percent related to the billing period',
        example: '10.0',
      }),
  })
  .openapi({
    description: 'Describe the billing period information related to the offer.',
    required: [],
  })
  .openapi('ContractBillingPeriodInfo')

const ContractBonusInfoSchema = z
  .object({ bonuses: z.array(BonusInfoSchema) })
  .openapi({
    description: 'Describe the bonus information related to your current contract.',
    required: ['bonuses'],
  })
  .openapi('ContractBonusInfo')

const ContractClickInfoSchema = z
  .object({
    additionalClickPrice: z
      .float64()
      .exactOptional()
      .openapi({ description: 'The addition click price in the offer', example: '0.001' }),
    clickIncluded: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The click included in the offer', example: '5000' }),
    initialOfferClickIncluded: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The click included in your current contract', example: '5000' }),
  })
  .openapi({ description: 'Describe the click information related to the offer.', required: [] })
  .openapi('ContractClickInfo')

const CouponOfferCodeSchema = z
  .guid()
  .openapi({
    description: 'Your special coupon offer identifier',
    example: '04efc310-bc25-4710-a83a-faf200284fe5',
  })
  .openapi('CouponOfferCode')

const PaymentMethodSchema = z
  .enum(['Transfer', 'Debit', 'Paypal', 'Check', 'CreditNote', 'Loss', 'OnlinePayment'])
  .default('OnlinePayment')
  .openapi({ description: 'Payment method' })
  .openapi('PaymentMethod')

const FixedAndVariableClickModelInfoSchema = z
  .object({
    clickIncludedAndAdditionalClickPrices: z.array(ClickIncludedAndAdditionalClickPriceSchema),
  })
  .openapi({
    description: 'Internal usage: Old offer type. Describe the fix and variable model information',
    required: ['clickIncludedAndAdditionalClickPrices'],
  })
  .openapi('FixedAndVariableClickModelInfo')

const OfferIdSchema = z
  .int32()
  .min(1)
  .openapi({
    description: 'The offer id based on /offers. Not a free offer of course.',
    example: '1',
  })
  .openapi('OfferId')

const VariableModelInfoSchema = z
  .object({
    clickIncludedAndVariablePrices: z
      .array(ClickIncludedAndVariablePriceSchema)
      .openapi({ description: 'Click included with variable pricing information' }),
    overflowClickCount: z.int32().openapi({ description: 'The overflow click count' }),
    overflowClickPrice: z.float64().openapi({ description: 'The overflow click price' }),
  })
  .openapi({
    description: 'Internal usage: Old offer type. Describe the fix and variable model information',
    required: ['clickIncludedAndVariablePrices', 'overflowClickCount', 'overflowClickPrice'],
  })
  .openapi('VariableModelInfo')

const ContractCommitmentInfoSchema = z
  .object({
    commercialCreatorUserId: z
      .guid()
      .exactOptional()
      .openapi({
        description: 'The commercial that is responsible of the creation of your account',
        example: '6e07814d-26a9-494b-91b2-e5ed0b9aba8c',
      }),
    commercialUserId: z
      .guid()
      .exactOptional()
      .openapi({
        description: 'Your current commercial user id',
        example: '0ddc2b79-10fe-4071-8161-42faa897082f',
      }),
    commitmentCalculatedFinishDate: z.iso
      .date()
      .exactOptional()
      .openapi({
        description: 'The commitment end date related to the offer',
        example: '2017-06-02',
      }),
    commitmentPeriodInMonth: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'The commitment period in month related to the offer',
        example: '1',
      }),
    contractType: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'Internal usage: Old offer type. Your contract type',
        example: '1234',
      }),
    couponOfferCode: CouponOfferCodeSchema.exactOptional(),
    currentContractId: z
      .guid()
      .exactOptional()
      .openapi({
        description: 'Your current contract id',
        example: 'dce56457-aa23-478d-8d76-b56eb9be799f',
      }),
    currentContractTerminationDate: z.iso
      .date()
      .exactOptional()
      .openapi({ description: 'The current contract termination date', example: '2017-06-02' }),
    currentCustomerPaymentMethod: PaymentMethodSchema.exactOptional(),
    fixedAndVariableClickInfo: FixedAndVariableClickModelInfoSchema.exactOptional(),
    isCustomerWantsToTerminateHisContract: z
      .boolean()
      .exactOptional()
      .openapi({
        description: "If true, this means you want to leave us and that's sad... :'-(",
        example: 'false',
      }),
    isModelMustBeTransmittedInNewContract: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Internal usage: Old offer type. Is the current contract model needs to be converted into a new contract type',
        example: 'false',
      }),
    minBillingPeriodInMonths: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'The minimum billing period in month authorized for this offer.',
        example: '1',
      }),
    model: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Interal usage: Old offer type. The model description',
        example: 'BLABLA',
      }),
    newContractStartDate: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'The start date related to the offer',
        example: '2017-05-01T13:02:24',
      }),
    offerId: OfferIdSchema.exactOptional(),
    offerName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The offer Name', example: 'Premium' }),
    paymentDelayInDays: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The payment delay in days related to the offer', example: '1' }),
    paymentMethodAuthorized: PaymentMethodSchema.exactOptional(),
    requestedPaymentMethod: PaymentMethodSchema.exactOptional(),
    trialPeriodFinishDate: z.iso
      .date()
      .exactOptional()
      .openapi({ description: 'The trial period end date related to the offer' }),
    trialPeriodInMonth: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The trial period in month related to the offer', example: '0' }),
    variableModelInfo: VariableModelInfoSchema.exactOptional(),
  })
  .openapi({
    description: 'Describe the commitment information related to the offer.',
    required: [],
  })
  .openapi('ContractCommitmentInfo')

const PromotionalCodeValiditySchema = z
  .enum(['None', 'Valid', 'Invalid', 'ExpiredOrInactive'])
  .openapi({ description: 'Indicate the validaty of the discount', example: 'Valid' })
  .openapi('PromotionalCodeValidity')

const ContractDiscountInfoSchema = z
  .object({
    amountCodePromoDiscount: z
      .float64()
      .exactOptional()
      .openapi({ description: 'The discount amount', example: '101.42' }),
    amountCodePromoDiscountPerMonth: z
      .float64()
      .exactOptional()
      .openapi({ description: 'The amount discounted per month', example: '101.42' }),
    couponDiscountCode: z
      .string()
      .exactOptional()
      .openapi({ description: 'The discount code', example: 'I-LOVE-BEEZUP' }),
    couponDiscountId: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Internal use: The discount id', example: '1' }),
    customerHasActualDiscount: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Do you have currently a discount on your contract ?',
        example: 'true',
      }),
    discountDurationInMonth: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Duration of the discount in month', example: '1' }),
    isCouponDiscountLinkedToCouponOffer: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Is this discount is related to a coupon offer', example: 'true' }),
    percentDiscount: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Percentage of the discount', example: '20.0' }),
    promotionalCodeValidity: PromotionalCodeValiditySchema.exactOptional(),
  })
  .openapi({ description: 'Describe the discount information related to the offer.', required: [] })
  .openapi('ContractDiscountInfo')

const ContractIdSchema = z
  .guid()
  .openapi({
    description: 'Your contract identifier',
    example: '7098487a-86f6-4322-b8a5-b67f7363b3e7',
  })
  .openapi('ContractId')

const StoreCountSchema = z
  .int32()
  .min(1)
  .openapi({ description: 'The store count you want to have in your contract.', example: '1' })
  .openapi('StoreCount')

const ContractInfoSchema = z
  .object({
    additionalClickPrice: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Additional click price' }),
    billingPeriodInMonth: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The billing period in month' }),
    billingPeriodPercentDiscount: z
      .float64()
      .exactOptional()
      .openapi({ description: 'The percent discount related to the billing period' }),
    clickIncluded: z.int32().exactOptional().openapi({ description: 'The click included' }),
    commitmentCalculatedFinishUtcDate: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The calculated end date of commitment' }),
    commitmentPeriodInMonth: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The commitment period in month' }),
    contractId: ContractIdSchema.exactOptional(),
    currencyCode: BeezUPCommonCurrencyCodeSchema.exactOptional(),
    discountDurationInMonth: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The discount duration in month' }),
    discountEndUtcDate: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The end of your discount' }),
    fixedAndVariableClickInfo: FixedAndVariableClickModelInfoSchema.exactOptional(),
    fixedPrice: z
      .float64()
      .exactOptional()
      .openapi({ description: 'The fixed price of your contract' }),
    ipUserCreation: z
      .string()
      .exactOptional()
      .openapi({ description: 'The IP of the user who creates the contract' }),
    ipUserModification: z
      .string()
      .exactOptional()
      .openapi({ description: 'The IP of the user who modified the contract' }),
    isCommitmentRenewalAutomatically: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Is commitment is automatically renewed' }),
    isModifiableContract: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Is the contract is modifiable ?' }),
    offerId: OfferIdSchema.exactOptional(),
    offerName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The offer name based on /offers' }),
    percentDiscount: z
      .float64()
      .exactOptional()
      .openapi({ description: 'The percent of the discount' }),
    startUtcDate: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The start date of your contract' }),
    storeCount: StoreCountSchema.exactOptional(),
    trialPeriodInMonth: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The trial period in month' }),
    variableModelInfo: VariableModelInfoSchema.exactOptional(),
  })
  .openapi({ description: 'Describe the conditions of a contract', required: [] })
  .openapi('ContractInfo')

const ContractMoneyInfoSchema = z
  .object({
    amountExcludingTaxesAndExcludingCodePromoDiscountIncludingBillingPeriodDiscount: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'The amount excluding taxes and excluding code promo discount including billing period discount.',
      }),
    amountExcludingTaxesAndExcludingDiscounts: z
      .float64()
      .exactOptional()
      .openapi({ description: 'The amount excluding taxes and excluding discounts.' }),
    amountExcludingTaxesIncludingDiscounts: z
      .float64()
      .exactOptional()
      .openapi({ description: 'The amount excluding taxes including discounts.' }),
    amountExcludingTaxesIncludingDiscountsPerMonth: z
      .float64()
      .exactOptional()
      .openapi({ description: 'The amount excluding taxes including discounts per month.' }),
    amountIncludingTaxesExcludingDiscountIncludingBillingPeriodDiscount: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'The amount including taxes excluding discount including billing period discount.',
      }),
    amountIncludingTaxesIncludingDiscounts: z
      .float64()
      .exactOptional()
      .openapi({ description: 'The amount including taxes including discounts.' }),
    amountTaxesExcludingDiscountIncludingBillingPeriodDiscount: z
      .float64()
      .exactOptional()
      .openapi({ description: 'The taxes excluding discount including billing period discount.' }),
    amountTaxesIncludingDiscounts: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Taxes including discounts.' }),
    currencyCode: BeezUPCommonCurrencyCodeSchema.exactOptional(),
    initialOfferFixedPrice: z
      .float64()
      .exactOptional()
      .openapi({ description: 'The initial offer fixed price.' }),
    vatPercent: z.float64().exactOptional().openapi({ description: 'The VAT percent.' }),
  })
  .openapi({ description: 'Describe the pricing information related to the offer.', required: [] })
  .openapi('ContractMoneyInfo')

const ContractStoreInfoSchema = z
  .object({
    additionalStorePrice: z
      .float64()
      .exactOptional()
      .openapi({ description: 'The additional store price.' }),
    maxStoreCount: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The maximum store count related to the offer.' }),
    minStoreCount: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The minimum store count related to the offer.' }),
    ownedStoreCount: z.int32().exactOptional().openapi({ description: 'The owned store count.' }),
    storeCount: StoreCountSchema.exactOptional(),
    storeIncluded: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The store count included in the offer.' }),
  })
  .openapi({ description: 'Describe the store information related to the offer.', required: [] })
  .openapi('ContractStoreInfo')

const ContractTerminationReasonSchema = z
  .string()
  .openapi({
    description: 'The termination reason, if your current contract is scheduled to be terminated.',
    example: "I'm crazy, I want to leave your splendid service...",
  })
  .openapi('ContractTerminationReason')

const ContractTerminationReasonTypeSchema = z
  .int32()
  .openapi({
    description:
      'The contract termination reason type identifier, if your current contract is scheduled to be terminated. The value is based on the list of values /user/lov/ContractTerminationReason',
    example: '1',
    'x-lov': 'ContractTerminationReason',
  })
  .openapi('ContractTerminationReasonType')

const LinksTerminateCurrentContractLinkSchema = BeezUPCommonLink3Schema.and(
  z
    .any()
    .openapi({
      example: { href: '/v2/user/customer/contracts/current/disableAutoRenewal', method: 'POST' },
    }),
).openapi('LinksTerminateCurrentContractLink')

const LinksReactivateCurrentContractLinkSchema = BeezUPCommonLink3Schema.and(
  z
    .any()
    .openapi({
      example: { href: '/v2/user/customer/contracts/current/reenableAutoRenewal', method: 'POST' },
    }),
).openapi('LinksReactivateCurrentContractLink')

const CurrentContractInfoLinksSchema = z
  .object({
    disable: LinksTerminateCurrentContractLinkSchema.exactOptional(),
    reenable: LinksReactivateCurrentContractLinkSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CurrentContractInfoLinks')

const CurrentContractInfoSchema = ContractInfoSchema.and(
  z
    .object({ links: CurrentContractInfoLinksSchema })
    .openapi({ description: 'Get the conditions of your current contract', required: ['links'] }),
).openapi('CurrentContractInfo')

const LinksCreateContractLinkSchema = BeezUPCommonLink3Schema.and(
  z
    .any()
    .openapi({
      example: {
        href: '/v2/user/customer/contracts',
        method: 'POST',
        parameters: {
          request: {
            in: 'body',
            type: 'object',
            value: {
              billingPeriodInMonth: '12',
              couponDiscountCode: 'I-LOVE-BEEZUP',
              couponOfferCode: '04efc310-bc25-4710-a83a-faf200284fe5',
              offerId: '1',
              storeCount: '1',
            },
          },
        },
      },
    }),
).openapi('LinksCreateContractLink')

const LinksGetContractsLinkSchema = BeezUPCommonLink3Schema.and(
  z.any().openapi({ example: { href: '/v2/user/customer/contracts', method: 'GET' } }),
).openapi('LinksGetContractsLink')

const ContractsLinksSchema = z
  .object({
    create: LinksCreateContractLinkSchema.exactOptional(),
    self: LinksGetContractsLinkSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ContractsLinks')

const LinksDeleteNextContractLinkSchema = BeezUPCommonLink3Schema.and(
  z.any().openapi({ example: { href: '/v2/user/customer/contracts/next', method: 'DELETE' } }),
).openapi('LinksDeleteNextContractLink')

const NextContractInfoLinksSchema = z
  .object({ delete: LinksDeleteNextContractLinkSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('NextContractInfoLinks')

const NextContractInfoSchema = ContractInfoSchema.and(
  z
    .object({ links: NextContractInfoLinksSchema })
    .openapi({ description: 'Get the conditions of your next contract', required: ['links'] }),
).openapi('NextContractInfo')

const ContractsSchema = z
  .object({
    current: CurrentContractInfoSchema.exactOptional(),
    links: ContractsLinksSchema,
    next: NextContractInfoSchema.exactOptional(),
  })
  .openapi({ required: ['links'] })
  .openapi('Contracts')

const CopyOptimisationRequestSchema = z
  .object({
    channelIdSource: BeezUPCommonChannelIdSchema,
    channelIdTarget: BeezUPCommonChannelIdSchema,
    keepExistingOptimisation: z
      .boolean()
      .openapi({ description: 'If true the existing optimisation will be kept', example: 'false' }),
  })
  .openapi({
    description: 'Copy the optimisation between 2 channels',
    required: ['channelIdSource', 'channelIdTarget', 'keepExistingOptimisation'],
  })
  .openapi('CopyOptimisationRequest')

const CopyOptimisationResponseSchema = z
  .object({
    catalogProductCount: z
      .int()
      .openapi({ description: 'The catalog product count', example: '101' }),
    channel: BeezUPCommonChannelBasicInfoSchema,
    enabledProductCount: z
      .int()
      .openapi({ description: 'The enabled product count', example: '101' }),
  })
  .openapi({
    description: 'Products optimisatisation copied',
    required: ['channel', 'catalogProductCount', 'enabledProductCount'],
  })
  .openapi('CopyOptimisationResponse')

const CouponDiscountCodeSchema = z
  .string()
  .openapi({ description: 'The coupon discount code', example: 'I-LOVE-BEEZUP' })
  .openapi('CouponDiscountCode')

const OfferRequestSchema = z
  .object({
    billingPeriodInMonth: BillingPeriodInMonthSchema,
    couponDiscountCode: CouponDiscountCodeSchema.exactOptional(),
    couponOfferCode: CouponOfferCodeSchema.exactOptional(),
    offerId: OfferIdSchema,
    storeCount: StoreCountSchema,
  })
  .openapi({ required: ['offerId', 'storeCount', 'billingPeriodInMonth'] })
  .openapi('OfferRequest')

const CreateContractSchema = OfferRequestSchema.openapi('CreateContract')

const CreateContractResponseLinksSchema = z
  .object({
    contracts: LinksGetContractsLinkSchema.exactOptional(),
    self: LinksCreateContractLinkSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateContractResponseLinks')

const CreateContractResponseSchema = z
  .object({
    info: BeezUPCommonInfoSummariesSchema.exactOptional(),
    links: CreateContractResponseLinksSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateContractResponse')

const CreateCustomColumnRequestSchema = z
  .object({
    displayGroupName: DisplayGroupNameSchema,
    encryptedBlocklyExpression: EncryptedBlocklyExpressionSchema,
    encryptedExpression: EncryptedExpressionSchema,
    userColumnName: UserColumNameSchema,
  })
  .openapi({
    description: 'The request message to create a custom column',
    required: [
      'userColumnName',
      'encryptedExpression',
      'encryptedBlocklyExpression',
      'displayGroupName',
    ],
  })
  .openapi('CreateCustomColumnRequest')

const OptimisationActionNameSchema = z
  .enum(['reenable', 'disable'])
  .openapi({ description: 'The optimisation action', example: 'reenable' })
  .openapi('OptimisationActionName')

const CreateRuleRequestSchema = z
  .object({
    endUtcDate: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'The end validity utc date of the rule',
        example: '2017-09-30T10:42:40.001Z',
      }),
    optimisationActionName: OptimisationActionNameSchema,
    reportFilterId: z
      .guid()
      .openapi({
        description: 'The report filter to use for the rule',
        example: 'fb19c53c-2f63-4262-9d94-2d7faa500acd',
      }),
    ruleName: z.string().openapi({ description: 'The name of the rule', example: 'My rule' }),
    startUtcDate: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'The start validity utc date of the rule',
        example: '2016-08-29T09:12:33.001Z',
      }),
  })
  .openapi({ required: ['optimisationActionName', 'ruleName', 'reportFilterId'] })
  .openapi('CreateRuleRequest')

const StoreCountryIsoCodeAlpha3Schema = z
  .string()
  .openapi({
    description: 'The country iso code alpha 3 based on the list of values /user/lov/StoreCountry',
    example: 'DEU',
    'x-lov': 'StoreCountry',
  })
  .openapi('StoreCountryIsoCodeAlpha3')

const StoreNameSchema = z
  .string()
  .openapi({ description: 'The store name. Must be unique.', example: 'My Store' })
  .openapi('StoreName')

const StoreSectorSchema = z
  .string()
  .openapi({
    description: "The store's sector based on the list of values /user/lov/ParamSector",
    example: 'ANIMALERIE',
    'x-lov': 'ParamSector',
  })
  .openapi('StoreSector')

const StoreSectorsSchema = z
  .array(StoreSectorSchema)
  .openapi({
    description: "The store's sectors based on the list of values /user/lov/ParamSector",
    example: ['ANIMALERIE', 'AUTOMOTO'],
  })
  .openapi('StoreSectors')

const StoreUrlSchema = z
  .string()
  .regex(/^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/)
  .openapi({ description: 'The url of your store', example: 'http://www.mystore.com' })
  .openapi('StoreUrl')

const CreateStoreRequestSchema = z
  .object({
    countryIsoCodeAlpha3: StoreCountryIsoCodeAlpha3Schema,
    id: BeezUPCommonStoreIdSchema.exactOptional(),
    name: StoreNameSchema,
    sectors: StoreSectorsSchema,
    url: StoreUrlSchema,
  })
  .openapi({
    description:
      'The request to create a store. The store identifier is optional, if null it will be automatically computed.',
    required: ['name', 'url', 'countryIsoCodeAlpha3', 'sectors'],
  })
  .openapi('CreateStoreRequest')

const SubscriptionMerchantApplicationNameSchema = z
  .string()
  .openapi({ description: 'The name of your application', example: 'MyApp' })
  .openapi('SubscriptionMerchantApplicationName')

const SubscriptionMerchantApplicationVersionSchema = z
  .string()
  .default('1.0')
  .openapi({ description: 'The version of your application', example: '1.0' })
  .openapi('SubscriptionMerchantApplicationVersion')

const EmailSchema = z
  .email()
  .regex(/^(.+)@(.+)$/)
  .openapi({
    description: 'The email',
    example: 'paulsimon@mysupercompany.com',
    'x-exclude': true,
    'x-pattern': '^(.+)@(.+)$',
  })
  .openapi('Email')

const SubscriptionNameSchema = z
  .string()
  .openapi({ description: 'The subscription name you want to use', example: 'MySubscriptionName' })
  .openapi('SubscriptionName')

const HttpUrlSchema = z
  .string()
  .regex(/^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/)
  .openapi({
    description:
      'The URL <a href="https://en.wikipedia.org/wiki/URL">https://en.wikipedia.org/wiki/URL</a>',
    example: 'http://www.mydomain.com',
    'x-exclude': true,
    'x-pattern': '^(https?:\\/\\/)?([\\da-z\\.-]+)\\.([a-z\\.]{2,6})([\\/\\w \\.-]*)*\\/?$',
  })
  .openapi('HttpUrl')

const CreateSubscriptionRequestSchema = z
  .object({
    merchantApplicationName: SubscriptionMerchantApplicationNameSchema,
    merchantApplicationVersion: SubscriptionMerchantApplicationVersionSchema,
    merchantEmailAlert: EmailSchema.exactOptional(),
    name: SubscriptionNameSchema,
    targetUrl: HttpUrlSchema,
  })
  .openapi({
    required: ['targetUrl', 'name', 'merchantApplicationName', 'merchantApplicationVersion'],
    'x-format': 'Message',
  })
  .openapi('CreateSubscriptionRequest')

const ExpirationMonthSchema = z
  .int32()
  .min(1)
  .max(12)
  .openapi({ description: 'Expiration Month', example: '12' })
  .openapi('ExpirationMonth')

const ExpirationYearSchema = z
  .int32()
  .min(2017)
  .max(9000)
  .openapi({ description: 'Expiration Year', example: '2017' })
  .openapi('ExpirationYear')

const CreditCardInfoSchema = z
  .object({
    cardNumber: CardNumberSchema,
    cardVerificationCode: CardVerificationCodeSchema,
    expirationMonth: ExpirationMonthSchema,
    expirationYear: ExpirationYearSchema,
  })
  .openapi({
    required: ['cardNumber', 'cardVerificationCode', 'expirationMonth', 'expirationYear'],
  })
  .openapi('CreditCardInfo')

const CreditCardInfoWithCardTypeSchema = z
  .object({
    cardNumber: CardNumberSchema,
    cardType: z
      .string()
      .openapi({
        description: 'Your credit card type. Example: VISA, MasterCard, etc...',
        example: 'VISA',
      }),
    expirationMonth: ExpirationMonthSchema,
    expirationYear: ExpirationYearSchema,
  })
  .openapi({ required: ['cardNumber', 'expirationMonth', 'expirationYear', 'cardType'] })
  .openapi('CreditCardInfoWithCardType')

const CreditCardInfoResponseLinksSchema = z
  .object({
    saveCreditCardInfo: LinksSaveCreditCardInfoLinkSchema,
    self: LinksGetCreditCardInfoLinkSchema,
  })
  .openapi({
    description: 'The different actions you can make on this offer',
    required: ['self', 'saveCreditCardInfo'],
  })
  .openapi('CreditCardInfoResponseLinks')

const CreditCardInfoResponseSchema = z
  .object({
    creditCardInfo: CreditCardInfoWithCardTypeSchema.exactOptional(),
    currentPaymentMethod: PaymentMethodSchema,
    info: BeezUPCommonInfoSummariesSchema.exactOptional(),
    links: CreditCardInfoResponseLinksSchema,
  })
  .openapi({ required: ['links', 'currentPaymentMethod'] })
  .openapi('CreditCardInfoResponse')

const CultureNameSchema = z
  .string()
  .openapi({
    description: 'If the error is translated, the culture name will be indicated',
    example: 'en',
    'x-exclude': true,
    'x-lov': 'Go2CultureName',
  })
  .openapi('CultureName')

const CurrencyCodeSchema = z
  .string()
  .regex(/^[A-Z]{3}$/)
  .openapi({
    description:
      'The currency code <a href="https://en.wikipedia.org/wiki/ISO_4217">(ISO 4217)</a>\n',
    example: 'EUR',
    'x-exclude': true,
    'x-pattern': '^[A-Z]{3}$',
  })
  .openapi('CurrencyCode')

const LinksCatalogDeleteCustomColumnLinkSchema = BeezUPCommonLink3Schema.and(
  z
    .any()
    .openapi({
      example: {
        href: '/v2/user/catalogs/a42b780d-4585-4566-800e-4d77a4d6f8a3/customColumns/5b56bb78-bc0b-485e-abd8-8db7eed995cb',
        method: 'DELETE',
      },
    }),
).openapi('LinksCatalogDeleteCustomColumnLink')

const LinksCatalogGetCustomColumnExpressionLinkSchema = BeezUPCommonLink3Schema.and(
  z
    .any()
    .openapi({
      example: {
        href: '/v2/user/catalogs/a42b780d-4585-4566-800e-4d77a4d6f8a3/customColumns/5b56bb78-bc0b-485e-abd8-8db7eed995cb/expression',
        method: 'GET',
      },
    }),
).openapi('LinksCatalogGetCustomColumnExpressionLink')

const LinksCatalogChangeCustomColumnUserNameLinkSchema = BeezUPCommonLink3Schema.and(
  z
    .any()
    .openapi({
      example: {
        href: '/v2/user/catalogs/a42b780d-4585-4566-800e-4d77a4d6f8a3/customColumns/5b56bb78-bc0b-485e-abd8-8db7eed995cb/rename',
        method: 'POST',
        parameters: {
          request: {
            in: 'body',
            required: true,
            schema: 'changeUserColumnNameRequest',
            type: 'object',
          },
        },
      },
    }),
).openapi('LinksCatalogChangeCustomColumnUserNameLink')

const LinksCatalogSaveCustomColumnLinkSchema = BeezUPCommonLink3Schema.and(
  z
    .any()
    .openapi({
      example: {
        href: '/v2/user/catalogs/a42b780d-4585-4566-800e-4d77a4d6f8a3/customColumns/{columnId}',
        method: 'POST',
        parameters: {
          columnId: { in: 'path', required: true, type: 'string' },
          request: {
            in: 'body',
            required: true,
            schema: 'createCustomColumnRequest',
            type: 'object',
          },
        },
      },
    }),
).openapi('LinksCatalogSaveCustomColumnLink')

const LinksCatalogChangeCustomColumnExpressionLinkSchema = BeezUPCommonLink3Schema.and(
  z
    .any()
    .openapi({
      example: {
        href: '/v2/user/catalogs/a42b780d-4585-4566-800e-4d77a4d6f8a3/customColumns/5b56bb78-bc0b-485e-abd8-8db7eed995cb/expression',
        method: 'PUT',
        parameters: {
          request: {
            in: 'body',
            required: true,
            schema: 'changeCustomColumnExpressionRequest',
            type: 'object',
          },
        },
      },
    }),
).openapi('LinksCatalogChangeCustomColumnExpressionLink')

const CustomColumnLinksSchema = z
  .object({
    delete: LinksCatalogDeleteCustomColumnLinkSchema,
    expression: LinksCatalogGetCustomColumnExpressionLinkSchema,
    rename: LinksCatalogChangeCustomColumnUserNameLinkSchema,
    save: LinksCatalogSaveCustomColumnLinkSchema,
    saveExpression: LinksCatalogChangeCustomColumnExpressionLinkSchema,
  })
  .openapi({ required: ['save', 'delete', 'rename', 'expression', 'saveExpression'] })
  .openapi('CustomColumnLinks')

const CustomColumnSchema = z
  .object({
    catalogColumnDependencies: z.array(CatalogColumnNameSchema).exactOptional(),
    configuration: ColumnConfigurationSchema,
    id: ColumnIdSchema,
    links: CustomColumnLinksSchema,
    userColumName: UserColumNameSchema,
  })
  .openapi({
    description: 'The custom column configuration',
    required: ['id', 'userColumName', 'configuration', 'links'],
  })
  .openapi('CustomColumn')

const CustomColumnListLinksSchema = z
  .object({
    add: LinksCatalogSaveCustomColumnLinkSchema.exactOptional(),
    self: LinksCatalogGetCustomColumnsLinkSchema,
  })
  .openapi({ required: ['self'] })
  .openapi('CustomColumnListLinks')

const CustomColumnListSchema = z
  .object({ customColumns: z.array(CustomColumnSchema), links: CustomColumnListLinksSchema })
  .openapi({ required: ['links', 'customColumns'] })
  .openapi('CustomColumnList')

const LinksGetFriendInfoLinkSchema = BeezUPCommonLink3Schema.and(
  z
    .any()
    .openapi({
      example: {
        href: '/v2/user/customer/friends/{userId}',
        method: 'GET',
        parameters: { userId: { in: 'path', required: true, type: 'string' } },
      },
    }),
).openapi('LinksGetFriendInfoLink')

const LinksGetOfferLinkSchema = BeezUPCommonLink3Schema.and(
  z
    .any()
    .openapi({
      example: {
        href: '/v2/user/customer/offers',
        method: 'POST',
        parameters: {
          request: { in: 'body', required: true, schema: 'offerRequest', type: 'object' },
        },
      },
    }),
).openapi('LinksGetOfferLink')

const LinksGetInvoicesLinkSchema = BeezUPCommonLink3Schema.and(
  z.any().openapi({ example: { href: '/v2/user/customer/invoices', method: 'GET' } }),
).openapi('LinksGetInvoicesLink')

const LinksLogoutLinkSchema = BeezUPCommonLink3Schema.and(
  z.any().openapi({ example: { href: '/v2/user/customer/security/logout', method: 'POST' } }),
).openapi('LinksLogoutLink')

const LinksGetCustomerIndexLinkSchema = BeezUPCommonLink3Schema.and(
  z.any().openapi({ example: { href: '/v2/user/customer', method: 'GET' } }),
).openapi('LinksGetCustomerIndexLink')

const LinksGetStandardOffersLinkSchema = BeezUPCommonLink3Schema.and(
  z.any().openapi({ example: { href: '/v2/user/customer/offers', method: 'GET' } }),
).openapi('LinksGetStandardOffersLink')

const LinksGetStoresLinkSchema = BeezUPCommonLink3Schema.and(
  z.any().openapi({ example: { href: '/v2/user/customer/stores', method: 'GET' } }),
).openapi('LinksGetStoresLink')

const CustomerIndexLinksSchema = z
  .object({
    accountInfo: LinksGetUserAccountInfoLinkSchema,
    billingPeriods: LinksGetBillingPeriodsLinkSchema,
    contracts: LinksGetContractsLinkSchema.exactOptional(),
    friendInfo: LinksGetFriendInfoLinkSchema,
    getOffer: LinksGetOfferLinkSchema.exactOptional(),
    invoices: LinksGetInvoicesLinkSchema.exactOptional(),
    logout: LinksLogoutLinkSchema.exactOptional(),
    self: LinksGetCustomerIndexLinkSchema,
    standardOffers: LinksGetStandardOffersLinkSchema,
    stores: LinksGetStoresLinkSchema.exactOptional(),
  })
  .openapi({
    description: 'Gives you want you can do on this API',
    required: ['self', 'accountInfo', 'billingPeriods', 'standardOffers', 'friendInfo'],
  })
  .openapi('CustomerIndexLinks')

const CustomerIndexLovLinksSchema = z
  .object({
    activeOfferLov: BeezUPCommonLOVLink3Schema.exactOptional(),
    beezUPTimeZoneLov: BeezUPCommonLOVLink3Schema.exactOptional(),
    contractTerminationReasonLov: BeezUPCommonLOVLink3Schema.exactOptional(),
    countryLov: BeezUPCommonLOVLink3Schema.exactOptional(),
    customerStatusLov: BeezUPCommonLOVLink3Schema.exactOptional(),
    invoicePaymentStatusLov: BeezUPCommonLOVLink3Schema.exactOptional(),
    offerLov: BeezUPCommonLOVLink3Schema.exactOptional(),
    storeCountryLov: BeezUPCommonLOVLink3Schema.exactOptional(),
    storeSectorLov: BeezUPCommonLOVLink3Schema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CustomerIndexLovLinks')

const CustomerIndexSchema = z
  .object({ links: CustomerIndexLinksSchema, lovLinks: CustomerIndexLovLinksSchema })
  .openapi({ description: 'The index of the customer API', required: ['links', 'lovLinks'] })
  .openapi('CustomerIndex')

const DateSearchTypeSchema = z
  .enum(['Modification', 'Purchase', 'MarketPlaceModification'])
  .default('Modification')
  .openapi({ description: 'Indicates on which date you want to make the filter' })
  .openapi('DateSearchType')

const LinksImportationConfigureCatalogColumnLinkSchema = BeezUPCommonLink3Schema.and(
  z
    .any()
    .openapi({
      example: {
        href: '/v2/user/catalogs/a42b780d-4585-4566-800e-4d77a4d6f8a3/importations/222ef571-bdb7-436d-a01a-e5a0e9161c0c/catalogColumns/b45c1999-e089-4bb1-a219-80a7a50a6f53',
        method: 'POST',
        parameters: {
          request: {
            in: 'body',
            required: true,
            schema: 'configureCatalogColumnCatalogRequest',
            type: 'object',
          },
        },
      },
    }),
).openapi('LinksImportationConfigureCatalogColumnLink')

const LinksImportationIgnoreColumnLinkSchema = BeezUPCommonLink3Schema.and(
  z
    .any()
    .openapi({
      example: {
        href: '/v2/user/catalogs/a42b780d-4585-4566-800e-4d77a4d6f8a3/importations/222ef571-bdb7-436d-a01a-e5a0e9161c0c/catalogColumns/b45c1999-e089-4bb1-a219-80a7a50a6f53/ignore',
        method: 'POST',
      },
    }),
).openapi('LinksImportationIgnoreColumnLink')

const LinksImportationMapCatalogColumnLinkSchema = BeezUPCommonLink3Schema.and(
  z
    .any()
    .openapi({
      example: {
        href: '/v2/user/catalogs/a42b780d-4585-4566-800e-4d77a4d6f8a3/importations/222ef571-bdb7-436d-a01a-e5a0e9161c0c/catalogColumns/b45c1999-e089-4bb1-a219-80a7a50a6f53/map',
        method: 'POST',
        parameters: {
          request: { in: 'body', required: true, schema: 'mapBeezUPColumnRequest', type: 'object' },
        },
      },
    }),
).openapi('LinksImportationMapCatalogColumnLink')

const LinksImportationReattendColumnLinkSchema = BeezUPCommonLink3Schema.and(
  z
    .any()
    .openapi({
      example: {
        href: '/v2/user/catalogs/a42b780d-4585-4566-800e-4d77a4d6f8a3/importations/222ef571-bdb7-436d-a01a-e5a0e9161c0c/catalogColumns/b45c1999-e089-4bb1-a219-80a7a50a6f53/reattend',
        method: 'POST',
      },
    }),
).openapi('LinksImportationReattendColumnLink')

const LinksImportationUnmapCatalogColumnLinkSchema = BeezUPCommonLink3Schema.and(
  z
    .any()
    .openapi({
      example: {
        href: '/v2/user/catalogs/a42b780d-4585-4566-800e-4d77a4d6f8a3/importations/222ef571-bdb7-436d-a01a-e5a0e9161c0c/catalogColumns/b45c1999-e089-4bb1-a219-80a7a50a6f53/map',
        method: 'POST',
      },
    }),
).openapi('LinksImportationUnmapCatalogColumnLink')

const DetectedCatalogColumnLinksSchema = z
  .object({
    configure: LinksImportationConfigureCatalogColumnLinkSchema.exactOptional(),
    ignore: LinksImportationIgnoreColumnLinkSchema.exactOptional(),
    map: LinksImportationMapCatalogColumnLinkSchema.exactOptional(),
    reattend: LinksImportationReattendColumnLinkSchema.exactOptional(),
    unmap: LinksImportationUnmapCatalogColumnLinkSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DetectedCatalogColumnLinks')

const DetectedCatalogColumnSchema = CatalogColumnSchema.and(
  z
    .object({ links: DetectedCatalogColumnLinksSchema })
    .openapi({
      description: 'The catalog column detected during the first parsing step',
      required: ['id', 'catalogColumnName', 'links'],
    }),
).openapi('DetectedCatalogColumn')

const LinksImportationGetDetectedCatalogColumnsLinkSchema = BeezUPCommonLink3Schema.and(
  z
    .any()
    .openapi({
      example: {
        href: '/v2/user/catalogs/a42b780d-4585-4566-800e-4d77a4d6f8a3/importations/222ef571-bdb7-436d-a01a-e5a0e9161c0c/catalogColumns',
        method: 'GET',
      },
    }),
).openapi('LinksImportationGetDetectedCatalogColumnsLink')

const DetectedCatalogColumnListLinksSchema = z
  .object({ self: LinksImportationGetDetectedCatalogColumnsLinkSchema })
  .openapi({ required: ['self'] })
  .openapi('DetectedCatalogColumnListLinks')

const DetectedCatalogColumnListSchema = z
  .object({
    detectedCatalogColumns: z
      .array(DetectedCatalogColumnSchema)
      .exactOptional()
      .openapi({ description: 'Contains all deteted catalog columns' }),
    links: DetectedCatalogColumnListLinksSchema,
  })
  .openapi({ description: 'The list of detected catalog column', required: ['links'] })
  .openapi('DetectedCatalogColumnList')

const DocUrlSchema = z
  .url()
  .openapi({
    description: 'The documentation related to this operation.',
    example: 'https://api-docs.imn.io/#operation/EnableChannelCatalog',
    'x-exclude': true,
  })
  .openapi('DocUrl')

const ErrorCodeSchema = z.string().openapi({ description: 'Error Code' }).openapi('ErrorCode')

const UserErrorMessageArgumentsSchema = z
  .record(z.string(), z.object({}))
  .openapi({ description: 'a dictionary string/object', 'x-exclude': true })
  .openapi('UserErrorMessageArguments')

const UserErrorMessageSchema = z
  .object({
    arguments: UserErrorMessageArgumentsSchema.exactOptional(),
    code: ErrorCodeSchema,
    cultureName: CultureNameSchema.exactOptional(),
    docUrl: DocUrlSchema.exactOptional(),
    message: z
      .string()
      .openapi({
        description: 'The error message',
        example:
          'There is already an importation in progress: b24d0dd8-a561-478a-9b26-34f573f03527\n',
      }),
  })
  .openapi({ required: ['code', 'message'], 'x-exclude': true })
  .openapi('UserErrorMessage')

const ErrorResponseMessageSchema = z
  .object({ errors: z.array(UserErrorMessageSchema) })
  .openapi({ required: ['errors'], 'x-exclude': true })
  .openapi('ErrorResponseMessage')

const ErrorResponseMessagePaymentRequiredLinksSchema = z
  .object({ offer: LinksGetOfferLinkSchema })
  .openapi({ required: ['offer'] })
  .openapi('ErrorResponseMessagePaymentRequiredLinks')

const ErrorResponseMessagePaymentRequiredSchema = BeezUPCommonErrorResponseMessageSchema.and(
  z
    .object({ links: ErrorResponseMessagePaymentRequiredLinksSchema })
    .openapi({ required: ['errors', 'links'] }),
).openapi('ErrorResponseMessagePaymentRequired')

const ExceptionDetailSchema = z
  .object({
    helpLink: z.string().exactOptional(),
    message: z.string().exactOptional(),
    stackTrace: z.string().exactOptional(),
    type: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ExceptionDetail')

const ErrorSummarySchema = z
  .object({
    errorArguments: z.record(z.string(), z.string()).exactOptional(),
    errorCode: z.string().exactOptional(),
    errorGuid: z.uuid().exactOptional(),
    errorMessage: z.string().exactOptional(),
    exceptionDetail: ExceptionDetailSchema.exactOptional(),
    objectName: z.string().exactOptional(),
    propertyName: z.string().exactOptional(),
    propertyValue: z.string().exactOptional(),
    source: z.string().exactOptional(),
    technicalErrorMessage: z.string().exactOptional(),
    utcDate: z.iso.datetime({ offset: true }).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ErrorSummary')

const ExchangedMessagesItemSchema = z
  .object({
    operationName: z.string(),
    requestUri: z.url().exactOptional(),
    requestUtcDate: z.iso.datetime({ offset: true }).exactOptional(),
    responseUri: z.url().exactOptional(),
    responseUtcDate: z.iso.datetime({ offset: true }).exactOptional(),
  })
  .openapi({ required: ['operationName'] })
  .openapi('ExchangedMessagesItem')

const LinksConfigureChannelCatalogExclusionFiltersLinkSchema = BeezUPCommonLink3Schema.and(
  z
    .any()
    .openapi({
      example: {
        href: '/v2/user/channelCatalogs/6d6b04de-406b-4539-8e7e-bf3e8da5dfb0/exclusionFilters',
        method: 'PUT',
      },
    }),
).openapi('LinksConfigureChannelCatalogExclusionFiltersLink')

const ExclusionFiltersResponseLinksSchema = z
  .object({
    configure: LinksConfigureChannelCatalogExclusionFiltersLinkSchema.exactOptional(),
    self: LinksGetChannelCatalogExclusionFiltersLinkSchema,
  })
  .openapi({ required: ['self'] })
  .openapi('ExclusionFiltersResponseLinks')

const ExclusionFiltersResponseSchema = z
  .object({
    exclusionFilters: ExclusionFiltersSchema.exactOptional(),
    links: ExclusionFiltersResponseLinksSchema,
  })
  .openapi({ required: ['links'] })
  .openapi('ExclusionFiltersResponse')

const ExecutionIdSchema = z
  .guid()
  .openapi({
    description: 'The execution identifier of the catalog importation',
    example: 'bf3bc288-604c-4267-925e-66b1a15dca75',
  })
  .openapi('ExecutionId')

const ExportOrderListFormatSchema = z
  .literal('csv')
  .default('csv')
  .openapi({ description: 'The type of the file to export', example: 'csv' })
  .openapi('ExportOrderListFormat')

const InvoiceAvailabilityTypeSchema = z
  .string()
  .openapi({
    description: 'Indicates on which invoice availability to filter',
    example: 'All',
    'x-lov': 'InvoiceAvailabilityType',
  })
  .openapi('InvoiceAvailabilityType')

const MarketplaceOrderIdSchema = z
  .string()
  .openapi({ description: 'The order marketplace identifier', example: 'AMAZON12345' })
  .openapi('MarketplaceOrderId')

const OrderMerchantInfoSynchronizationStatusSchema = z
  .string()
  .openapi({
    description: 'Indicates on which order merchant info synchronization status to filter',
    example: 'All',
    'x-lov': 'OrderMerchantInfoSynchronizationStatus',
  })
  .openapi('OrderMerchantInfoSynchronizationStatus')

const OrderBuyerNameSchema = z
  .string()
  .openapi({ description: 'Buyer full name', example: 'Monroe' })
  .openapi('OrderBuyerName')

const OrderMerchantOrderIdSchema = z
  .string()
  .openapi({ description: 'The order merchant identifier', example: 'MyOrderMerchantId' })
  .openapi('OrderMerchantOrderId')

const OrderListRequestWithoutPaginationSchema = z
  .object({
    accountIds: z
      .array(AccountIdSchema)
      .exactOptional()
      .openapi({ description: 'Account Id list', example: ['12345'] }),
    beezUPOrderStatuses: z
      .array(BeezUPOrderStatusSchema)
      .exactOptional()
      .openapi({ example: ['InProgress'] }),
    beginPeriodUtcDate: z.iso
      .datetime({ offset: true })
      .openapi({
        description:
          'The begin period you want to make the search. \\\nThe period MUST not be greater than 62 days.\nThe begin period MUST be lower than the end period.\n',
        example: '2017-03-01T13:10:01Z',
      }),
    dateSearchType: DateSearchTypeSchema.exactOptional(),
    endPeriodUtcDate: z.iso
      .datetime({ offset: true })
      .openapi({
        description:
          'The end period of you search. \\\nThe period MUST not be greater than 62 days. \\\nThe end period MUST be greater than the begin period.\nThe end period MUST be lower to the current date.\n',
        example: '2017-04-01T13:10:01Z',
      }),
    invoiceAvailabilityType: InvoiceAvailabilityTypeSchema.exactOptional(),
    marketplaceBusinessCodes: z
      .array(BeezUPCommonMarketplaceBusinessCodeSchema)
      .exactOptional()
      .openapi({ example: ['PRICEMINISTER'] }),
    marketplaceOrderIds: z
      .array(MarketplaceOrderIdSchema)
      .exactOptional()
      .openapi({ example: ['AmazonOrderId1234'] }),
    marketplaceTechnicalCodes: z
      .array(BeezUPCommonMarketplaceTechnicalCodeSchema)
      .exactOptional()
      .openapi({ example: ['PriceMinister'] }),
    orderMerchantInfoSynchronizationStatus:
      OrderMerchantInfoSynchronizationStatusSchema.exactOptional(),
    order_Buyer_Name: OrderBuyerNameSchema.exactOptional(),
    order_MerchantOrderIds: z
      .array(OrderMerchantOrderIdSchema)
      .exactOptional()
      .openapi({ description: 'Merchant order id list', example: ['MyOrderId1234'] }),
    storeIds: z
      .array(BeezUPCommonStoreIdSchema)
      .exactOptional()
      .openapi({ description: 'Store Id list' }),
  })
  .openapi({ required: ['beginPeriodUtcDate', 'endPeriodUtcDate'] })
  .openapi('OrderListRequestWithoutPagination')

const ExportOrderListRequestSchema = z
  .object({
    format: ExportOrderListFormatSchema.exactOptional(),
    orderListRequestWithoutPagination: OrderListRequestWithoutPaginationSchema,
    storeId: BeezUPCommonStoreIdSchema,
  })
  .openapi({
    description:
      'The message request to export order list. The store identifier is requested to regroup the exportations.',
    required: ['storeId', 'orderListRequestWithoutPagination'],
  })
  .openapi('ExportOrderListRequest')

const FilterOperatorDataTypeSchema = z
  .enum(['string', 'number'])
  .default('string')
  .openapi({ description: 'Data type of the operator', example: 'string' })
  .openapi('FilterOperatorDataType')

const FilterOperatorSchema = z
  .object({
    expectedChannelColumnDataType: FilterOperatorDataTypeSchema.exactOptional(),
    expectedValueDataType: FilterOperatorDataTypeSchema.exactOptional(),
    name: FilterOperatorNameSchema.exactOptional(),
    valueRequired: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'This operator requires a value', example: 'true' }),
  })
  .openapi({ description: 'The filter operator', required: [] })
  .openapi('FilterOperator')

const FooterContentHtmlSchema = z
  .string()
  .max(1000)
  .openapi({ description: 'Footer Content HTML', 'x-minValueLength': '0' })
  .openapi('FooterContentHtml')

const FriendCountryIsoCodeAlpha3Schema = z
  .string()
  .openapi({
    description: "Your friend's user country iso code alpha 3",
    example: 'USA',
    'x-lov': 'Country',
  })
  .openapi('FriendCountryIsoCodeAlpha3')

const FriendEmailSchema = z
  .email()
  .regex(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/)
  .openapi({ description: "Your friend's user email", example: 'humphray.bogart@yahoo.ma' })
  .openapi('FriendEmail')

const FriendProfilePictureUrlSchema = z
  .string()
  .regex(/^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/)
  .openapi({
    description: "Your friend's user profile picture url",
    example:
      'https://www.biography.com/.image/c_fill,cs_srgb,dpr_1.0,g_face,h_300,q_80,w_300/MTE4MDAzNDEwNDU3MjMyOTEw/humphrey-bogart-9217486-1-402.jpg',
  })
  .openapi('FriendProfilePictureUrl')

const FunctionalitySchema = z
  .object({
    code: z.string().openapi({ description: 'The functionality code', example: 'MARKETMANA' }),
    order: z
      .int32()
      .openapi({
        description: 'UI purpose: Indicate the position of the functionality',
        example: '1',
      }),
  })
  .openapi({ required: ['code', 'order'] })
  .openapi('Functionality')

const FunctionalityRightInfoSchema = z
  .object({
    functionalityCode: z
      .string()
      .openapi({ description: 'The functionality code', example: 'COMPAMANA' }),
    maxValueInterger: z
      .int()
      .exactOptional()
      .openapi({
        description: 'The max value for this functionality code considering your rights',
        example: '10',
      }),
    unlimited: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'If you can use this functionality unlimitedly', example: 'true' }),
  })
  .openapi({
    description: 'Describe the rights for a functionality',
    required: ['functionalityCode'],
  })
  .openapi('FunctionalityRightInfo')

const MarketplaceAccountIdSchema = z
  .int()
  .openapi({ description: 'Marketplace Account Identifier', example: '50' })
  .openapi('MarketplaceAccountId')

const InvoiceSequenceNumberSchema = z
  .int()
  .min(0)
  .openapi({ description: 'Invoice Sequence Number', example: '879' })
  .openapi('InvoiceSequenceNumber')

const MarketplaceTechnicalCodeSchema = z
  .string()
  .openapi({ description: 'Marketplace Technical Code', example: 'CDISCOUNT' })
  .openapi('MarketplaceTechnicalCode')

const GenerateBatchOrderInvoiceRequestItemSchema = z
  .object({
    accountId: MarketplaceAccountIdSchema,
    beezUPOrderUUID: BeezUPOrderUUIDSchema,
    invoiceSequenceNumber: InvoiceSequenceNumberSchema,
    marketplaceTechnicalCode: MarketplaceTechnicalCodeSchema,
  })
  .openapi({
    required: ['marketplaceTechnicalCode', 'accountId', 'beezUPOrderUUID', 'invoiceSequenceNumber'],
  })
  .openapi('GenerateBatchOrderInvoiceRequestItem')

const GenerateBatchOrderInvoiceErrorResponseItemDetailSchema = z
  .object({
    errorMessage: UserErrorMessageSchema.exactOptional(),
    request: GenerateBatchOrderInvoiceRequestItemSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GenerateBatchOrderInvoiceErrorResponseItemDetail')

const GenerateBatchOrderInvoiceErrorResponseItemDetailsSchema = z
  .array(GenerateBatchOrderInvoiceErrorResponseItemDetailSchema)
  .openapi('GenerateBatchOrderInvoiceErrorResponseItemDetails')

const GenerateBatchOrderInvoiceErrorResponseItemSchema = z
  .object({
    count: z.int(),
    errorType: z.string(),
    errors: GenerateBatchOrderInvoiceErrorResponseItemDetailsSchema,
  })
  .openapi({ required: ['errorType', 'count', 'errors'] })
  .openapi('GenerateBatchOrderInvoiceErrorResponseItem')

const GenerateBatchOrderInvoiceRequestSchema = z
  .array(GenerateBatchOrderInvoiceRequestItemSchema)
  .openapi('GenerateBatchOrderInvoiceRequest')

const InvoiceLocationSchema = z.string().openapi('InvoiceLocation')

const GenerateOrderInvoiceResponseSchema = z
  .object({
    accountId: MarketplaceAccountIdSchema,
    beezUPOrderUUID: BeezUPOrderUUIDSchema,
    invoiceLocation: InvoiceLocationSchema.exactOptional(),
    invoiceSequenceNumber: InvoiceSequenceNumberSchema.exactOptional(),
    marketplaceTechnicalCode: MarketplaceTechnicalCodeSchema,
  })
  .openapi({ required: ['marketplaceTechnicalCode', 'accountId', 'beezUPOrderUUID'] })
  .openapi('GenerateOrderInvoiceResponse')

const GenerateBatchOrderInvoiceResponseSchema = z
  .array(GenerateOrderInvoiceResponseSchema)
  .openapi('GenerateBatchOrderInvoiceResponse')

const GenerateOrderInvoiceRequestSchema = z
  .object({ invoiceSequenceNumber: InvoiceSequenceNumberSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('GenerateOrderInvoiceRequest')

const ProductSetVisibilityCriteriaLogicTypeSchema = z
  .enum(['funnel', 'cumulative'])
  .openapi({
    description:
      'Indicate how you want to combine the filters:\n* funnel: You will get the products which meet at least one of the product set criterion. The criteria are applied in the following order:\n  - categorization\n  - exclusion filters\n  - deactivations\n* cumulative: You will get the products which have all the product set criteria\n',
  })
  .openapi('ProductSetVisibilityCriteriaLogicType')

const ProductSetVisibilityCriteriaSchema = z
  .object({
    disabled: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Search disabled products. If null the filter will not be taken in account.',
        example: 'false',
      }),
    excluded: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Search excluded products by at least an exclusion filter. If null the filter will not be taken in account.',
        example: 'false',
      }),
    exist: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'If false, search for products absent from the current catalog. If true, search for products currently in the catalog. If null the filter will not be taken in account.',
        example: 'true',
      }),
    logic: ProductSetVisibilityCriteriaLogicTypeSchema,
    uncategorized: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Search product WITHOUT category mapped with the channel. If null the filter will not be taken in account.',
        example: 'false',
      }),
  })
  .openapi({ required: ['logic'] })
  .openapi('ProductSetVisibilityCriteria')

const GetChannelCatalogProductInfoListRequestSchema = z
  .object({
    catalogCategoryFilter: BeezUPCommonCatalogCategoryFilterSchema.exactOptional(),
    channelCategoryFilter: BeezUPCommonChannelCategoryFilterSchema.exactOptional(),
    criteria: ProductSetVisibilityCriteriaSchema,
    overridden: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Search overridden products. If null the filter will not be taken in account.',
        example: 'true',
      }),
    pageNumber: z.int32().min(1).openapi({ example: '1' }),
    pageSize: z.int32().min(100).openapi({ example: '100' }),
    productFilters: ChannelCatalogProductFiltersSchema.exactOptional(),
  })
  .openapi({ required: ['pageNumber', 'pageSize', 'criteria'] })
  .openapi('GetChannelCatalogProductInfoListRequest')

const GetImportationProductsReportRequestErrorCodeSchema = z
  .object({
    errorCode: ErrorCodeSchema.exactOptional(),
    userColumnName: UserColumNameSchema.exactOptional(),
  })
  .openapi({ description: 'Get Importation Products Report Request Error Codes', required: [] })
  .openapi('GetImportationProductsReportRequestErrorCode')

const GetImportationProductsReportRequestErrorCodesSchema = z
  .array(GetImportationProductsReportRequestErrorCodeSchema)
  .openapi({ description: 'Get Importation Products Report Request Error Codes' })
  .openapi('GetImportationProductsReportRequestErrorCodes')

const GetImportationProductsReportRequestSchema = z
  .object({
    ean: z.string().exactOptional().openapi({ description: 'Filter by EAN (equals)' }),
    errorCodes: GetImportationProductsReportRequestErrorCodesSchema.exactOptional(),
    mpn: z.string().exactOptional().openapi({ description: 'Filter by MPN (equals)' }),
    pageNumber: BeezUPCommonPageNumberSchema,
    pageSize: BeezUPCommonPageSizeSchema,
    sku: z.string().exactOptional().openapi({ description: 'Filter by Sku (equals)' }),
    title: z.string().exactOptional().openapi({ description: 'Filter by Title (StartsWith)' }),
  })
  .openapi({
    description: 'Get Importation Products Report Request',
    required: ['pageNumber', 'pageSize'],
  })
  .openapi('GetImportationProductsReportRequest')

const ProductErrorCodeSchema = z
  .object({
    beezUPColumnName: BeezUPCommonBeezUPColumnNameSchema.exactOptional(),
    errorCode: ErrorCodeSchema.exactOptional(),
    errorMessage: z.string().exactOptional(),
    userColumName: UserColumNameSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ProductErrorCode')

const ProductErrorCodesSchema = z.array(ProductErrorCodeSchema).openapi('ProductErrorCodes')

const SkuSchema = z
  .string()
  .max(50)
  .openapi({
    description:
      'The Stock Keeping Unit (SKU), i.e. a merchant-specific identifier for a product or service, or the product to which the offer refers. http://schema.org/sku',
  })
  .openapi('Sku')

const ProductErrorSchema = z
  .object({
    ean: z.string().exactOptional(),
    errors: ProductErrorCodesSchema,
    lineNumber: z.int(),
    mpn: z.string().exactOptional(),
    sku: SkuSchema.exactOptional(),
    title: z.string().exactOptional(),
  })
  .openapi({ required: ['lineNumber', 'errors'] })
  .openapi('ProductError')

const ProductErrorsSchema = z
  .array(ProductErrorSchema)
  .openapi({ description: 'Product Errors' })
  .openapi('ProductErrors')

const GetImportationProductsReportResponseSchema = z
  .object({
    paginationResult: BeezUPCommonPaginationResultSchema,
    productErrors: ProductErrorsSchema.exactOptional(),
  })
  .openapi({
    description: 'Get Importation Products Report Response',
    required: ['paginationResult'],
  })
  .openapi('GetImportationProductsReportResponse')

const GetImportationReportResponseDiffSchema = z
  .object({
    createdCount: z.int(),
    deletedCount: z.int(),
    unchangedCount: z.int().exactOptional(),
    updatedCount: z.int(),
  })
  .openapi({ required: ['createdCount', 'updatedCount', 'deletedCount'] })
  .openapi('GetImportationReportResponseDiff')

const GetImportationReportResponseErrorSchema = z
  .object({
    beezUPColumnName: BeezUPCommonBeezUPColumnNameSchema.exactOptional(),
    errorCode: ErrorCodeSchema,
    productCount: z.int(),
    userColumName: UserColumNameSchema,
  })
  .openapi({ required: ['errorCode', 'userColumName', 'productCount'] })
  .openapi('GetImportationReportResponseError')

const GetImportationReportResponseErrorsSchema = z
  .array(GetImportationReportResponseErrorSchema)
  .openapi('GetImportationReportResponseErrors')

const GetImportationReportResponseImportationInfoSchema = z
  .object({
    beginUtcDate: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'The start date of the importation',
        example: '2017-04-01T13:01:01Z',
      }),
    endUtcDate: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'The start date of the importation',
        example: '2017-04-01T13:01:01Z',
      }),
    inputConfiguration: InputFileConfigurationSchema,
    userId: BeezUPCommonUserIdSchema,
  })
  .openapi({ required: ['beginUtcDate', 'endUtcDate', 'userId', 'inputConfiguration'] })
  .openapi('GetImportationReportResponseImportationInfo')

const GetImportationReportResponseProductMetricsSchema = z
  .object({
    activeCount: z.int(),
    detectedCount: z.int(),
    duplicatedCount: z.int(),
    failedCount: z.int(),
  })
  .openapi({ required: ['detectedCount', 'duplicatedCount', 'failedCount', 'activeCount'] })
  .openapi('GetImportationReportResponseProductMetrics')

const GetImportationReportResponseSchema = z
  .object({
    categories: GetImportationReportResponseDiffSchema.exactOptional(),
    columns: GetImportationReportResponseDiffSchema.exactOptional(),
    errors: GetImportationReportResponseErrorsSchema,
    executionId: ExecutionIdSchema,
    importationInfo: GetImportationReportResponseImportationInfoSchema,
    productMetrics: GetImportationReportResponseProductMetricsSchema.exactOptional(),
    products: GetImportationReportResponseDiffSchema.exactOptional(),
  })
  .openapi({
    description: 'Get Importation Report Response',
    required: ['executionId', 'importationInfo', 'errors'],
  })
  .openapi('GetImportationReportResponse')

const InvoiceContentHtmlSchema = z
  .string()
  .openapi({ description: 'Invoice Content HTML' })
  .openapi('InvoiceContentHtml')

const GetOrderInvoiceDesignPreviewResponseSchema = z
  .object({ invoiceHtmlContent: InvoiceContentHtmlSchema })
  .openapi({ required: ['invoiceHtmlContent'] })
  .openapi('GetOrderInvoiceDesignPreviewResponse')

const InvoicePrefixSchema = z
  .string()
  .regex(/^[a-zA-Z0-9#_-]{1,50}$/)
  .openapi({
    description:
      'Invoice Prefix. Can contain 1 to 50 characters, with alphanumeric characters in lowercase uppercase and #, _, -',
    example: 'TOTO',
    'x-pattern': '^[a-zA-Z0-9#_-]{1,50}$',
  })
  .openapi('InvoicePrefix')

const ProductVATPercentSchema = z
  .number()
  .min(0)
  .max(100)
  .openapi({ description: 'Product VAT in percent', example: '4.0' })
  .openapi('ProductVATPercent')

const ShippingVATPercentSchema = z
  .number()
  .min(0)
  .max(100)
  .openapi({ description: 'Shipping cost VAT in percent', example: '8.0' })
  .openapi('ShippingVATPercent')

const OrderInvoiceGeneralSettingsSchema = z
  .object({
    cultureName: CultureNameSchema,
    invoicePrefix: InvoicePrefixSchema,
    invoiceStartingSequenceNumber: InvoiceSequenceNumberSchema,
    productVATPercent: ProductVATPercentSchema,
    shippingVATPercent: ShippingVATPercentSchema,
  })
  .openapi({
    description: 'Order Invoice General Settings',
    required: [
      'cultureName',
      'productVATPercent',
      'shippingVATPercent',
      'invoicePrefix',
      'invoiceStartingSequenceNumber',
    ],
  })
  .openapi('OrderInvoiceGeneralSettings')

const GetOrderInvoiceGeneralSettingsResponseSchema = OrderInvoiceGeneralSettingsSchema.and(
  z
    .object({ lastInvoiceSequenceNumber: InvoiceSequenceNumberSchema.exactOptional() })
    .openapi({ required: [] }),
).openapi('GetOrderInvoiceGeneralSettingsResponse')

const OrderInvoiceUriSchema = z
  .string()
  .regex(/^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.?&\%-=])*\/?$/)
  .openapi({
    description: 'order invoice url',
    example: 'http://www.mydomain.com',
    'x-exclude': true,
    'x-pattern': '^(https?:\\/\\/)?([\\da-z\\.-]+)\\.([a-z\\.]{2,6})([\\/\\w \\.?&\\%-=])*\\/?$',
  })
  .openapi('OrderInvoiceUri')

const GetOrderInvoicePdfFromHtmlInvoiceUrlRequestSchema = z
  .object({ orderInvoiceUri: OrderInvoiceUriSchema })
  .openapi({ required: ['orderInvoiceUri'] })
  .openapi('GetOrderInvoicePdfFromHtmlInvoiceUrlRequest')

const GetProductsRequestSchema = z
  .object({
    categoryPath: BeezUPCommonCatalogCategoryPathSchema.exactOptional(),
    columnIdList: z.array(BeezUPCommonCatalogColumnIdSchema).min(1).max(5).exactOptional(),
    ean: z
      .string()
      .exactOptional()
      .openapi({ description: 'Search for product by ean', example: 'MySku123' }),
    exists: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Search for existing products or not. If null you will received both.',
        example: 'true',
      }),
    mpn: z
      .string()
      .exactOptional()
      .openapi({ description: 'Search for product by mpn', example: 'MySku123' }),
    orderByCatalogColumnId: BeezUPCommonCatalogColumnIdSchema.exactOptional(),
    pageNumber: BeezUPCommonPageNumberSchema,
    pageSize: BeezUPCommonPageSizeSchema,
    productIdList: z
      .array(BeezUPCommonProductIdSchema)
      .exactOptional()
      .openapi({ description: 'Filter with a list of product identifier' }),
    sku: z
      .string()
      .exactOptional()
      .openapi({ description: 'Search for product by sku', example: 'MySku123' }),
    title: z
      .string()
      .exactOptional()
      .openapi({ description: 'Search for products containing this title', example: 'Frigo' }),
    withoutSubCategories: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Do not retrieve sub categories. By default, this value is set to false',
        example: 'false',
      }),
  })
  .openapi({
    description: 'The request message to get products based on these filters',
    required: ['pageNumber', 'pageSize'],
  })
  .openapi('GetProductsRequest')

const GravatarProfilePictureUrlSchema = z
  .string()
  .regex(/^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/)
  .openapi({
    description: 'Indicate the url of your picture profil based on gravatar',
    example: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?d=mm',
  })
  .openapi('GravatarProfilePictureUrl')

const HarvestOrderReportingSchema = z
  .object({
    beezUPForcedStatus: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The marketplace order status forced by BeezUP during the order change oepration. This could happend when there is no status on the marketplace side.',
        example: 'In_progress_3',
      }),
    beezUPStatus: BeezUPOrderStatusSchema.exactOptional(),
    creationUtcDate: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'The creation UTC date of the execution',
        example: '2017-04-01T13:10:03Z',
      }),
    errorMessage: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The warning message during the execution',
        example: 'This is an error message',
      }),
    executionUUID: ExecutionUUIDSchema.exactOptional(),
    lastUpdateUtcDate: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'The last update UTC date of the execution',
        example: '2017-04-01T13:10:05Z',
      }),
    marketplaceStatus: z
      .string()
      .exactOptional()
      .openapi({ description: 'The order marketplace status', example: 'In_progress_3' }),
    processingStatus: z
      .string()
      .exactOptional()
      .openapi({ description: 'The processing status of the execution', example: 'Done' }),
    warningMessage: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The warning message during the execution',
        example: 'This is a warning',
      }),
  })
  .openapi({ description: 'The reporting related to a harvest order operation', required: [] })
  .openapi('HarvestOrderReporting')

const HeaderContentHtmlSchema = z
  .string()
  .max(1000)
  .openapi({ description: 'Header Content HTML', 'x-minValueLength': '0' })
  .openapi('HeaderContentHtml')

const HrefSchema = z
  .string()
  .openapi({
    description: 'Indicate the relative uri for this link',
    example: '/merchant/orders/v1/{marketplaceCode}/{IMNOrderId}',
    'x-exclude': true,
  })
  .openapi('Href')

const LinksImportationCancelLinkSchema = BeezUPCommonLink3Schema.and(
  z
    .any()
    .openapi({
      example: {
        href: '/v2/user/catalogs/a42b780d-4585-4566-800e-4d77a4d6f8a3/importations/222ef571-bdb7-436d-a01a-e5a0e9161c0c/cancel',
        method: 'POST',
      },
    }),
).openapi('LinksImportationCancelLink')

const LinksImportationGetImportationMonitoringLinkSchema = BeezUPCommonLink3Schema.and(
  z
    .any()
    .openapi({
      example: {
        href: '/v2/user/catalogs/a42b780d-4585-4566-800e-4d77a4d6f8a3/importations/222ef571-bdb7-436d-a01a-e5a0e9161c0c',
        method: 'GET',
      },
    }),
).openapi('LinksImportationGetImportationMonitoringLink')

const ImportAlreadyInProgressResponseLinksSchema = z
  .object({
    cancelCurrentImportation: LinksImportationCancelLinkSchema,
    currentImportation: LinksImportationGetImportationMonitoringLinkSchema,
  })
  .openapi({
    description: 'The action links',
    required: ['currentImportation', 'cancelCurrentImportation'],
  })
  .openapi('ImportAlreadyInProgressResponseLinks')

const ImportAlreadyInProgressResponseSchema = z
  .object({
    errors: z
      .array(BeezUPCommonUserErrorMessageSchema)
      .openapi({ description: 'The error message list' }),
    links: ImportAlreadyInProgressResponseLinksSchema,
  })
  .openapi({ required: ['errors', 'links'] })
  .openapi('ImportAlreadyInProgressResponse')

const LinksImportationMapCustomColumnLinkSchema = BeezUPCommonLink3Schema.and(
  z
    .any()
    .openapi({
      example: {
        href: '/v2/user/catalogs/a42b780d-4585-4566-800e-4d77a4d6f8a3/importations/222ef571-bdb7-436d-a01a-e5a0e9161c0c/customColumns/5b56bb78-bc0b-485e-abd8-8db7eed995cb/map',
        method: 'POST',
        parameters: {
          request: { in: 'body', required: true, schema: 'mapBeezUPColumnRequest', type: 'object' },
        },
      },
    }),
).openapi('LinksImportationMapCustomColumnLink')

const LinksImportationGetProductSampleCustomColumnValueLinkSchema = BeezUPCommonLink3Schema.and(
  z
    .any()
    .openapi({
      example: {
        href: '/v2/user/catalogs/a42b780d-4585-4566-800e-4d77a4d6f8a3/importations/222ef571-bdb7-436d-a01a-e5a0e9161c0c/productSamples/{productSampleIndex}/customColumns/5b56bb78-bc0b-485e-abd8-8db7eed995cb',
        method: 'GET',
        parameters: { productSampleIndex: { in: 'path', required: true, type: 'integer' } },
      },
    }),
).openapi('LinksImportationGetProductSampleCustomColumnValueLink')

const LinksImportationSaveCustomColumnLinkSchema = BeezUPCommonLink3Schema.and(
  z
    .any()
    .openapi({
      example: {
        href: '/v2/user/catalogs/a42b780d-4585-4566-800e-4d77a4d6f8a3/importations/222ef571-bdb7-436d-a01a-e5a0e9161c0c/customColumns/{columnId}',
        method: 'POST',
        parameters: {
          columnId: { in: 'path', required: true, type: 'string' },
          request: {
            in: 'body',
            required: true,
            schema: 'createCustomColumnRequest',
            type: 'object',
          },
        },
      },
    }),
).openapi('LinksImportationSaveCustomColumnLink')

const LinksImportationUnmapCustomColumnLinkSchema = BeezUPCommonLink3Schema.and(
  z
    .any()
    .openapi({
      example: {
        href: '/v2/user/catalogs/a42b780d-4585-4566-800e-4d77a4d6f8a3/importations/222ef571-bdb7-436d-a01a-e5a0e9161c0c/customColumns/5b56bb78-bc0b-485e-abd8-8db7eed995cb/map',
        method: 'POST',
      },
    }),
).openapi('LinksImportationUnmapCustomColumnLink')

const ImportationCustomColumnLinksSchema = z
  .object({
    delete: LinksCatalogDeleteCustomColumnLinkSchema,
    expression: LinksCatalogGetCustomColumnExpressionLinkSchema,
    map: LinksImportationMapCustomColumnLinkSchema.exactOptional(),
    productSampleValue: LinksImportationGetProductSampleCustomColumnValueLinkSchema.exactOptional(),
    save: LinksImportationSaveCustomColumnLinkSchema,
    unmap: LinksImportationUnmapCustomColumnLinkSchema.exactOptional(),
  })
  .openapi({ required: ['save', 'delete', 'expression'] })
  .openapi('ImportationCustomColumnLinks')

const ImportationCustomColumnSchema = z
  .object({
    configuration: ColumnConfigurationSchema,
    id: ColumnIdSchema,
    links: ImportationCustomColumnLinksSchema,
    userColumName: UserColumNameSchema,
  })
  .openapi({
    description: 'The custom column configuration',
    required: ['id', 'userColumName', 'configuration', 'links'],
  })
  .openapi('ImportationCustomColumn')

const ImportationCustomColumnListSchema = z
  .object({
    customColumns: z.array(ImportationCustomColumnSchema),
    links: CustomColumnListLinksSchema,
  })
  .openapi({ required: ['links', 'customColumns'] })
  .openapi('ImportationCustomColumnList')

const LinksImportationGetCustomColumnsLinkSchema = BeezUPCommonLink3Schema.and(
  z
    .any()
    .openapi({
      example: {
        href: '/v2/user/catalogs/a42b780d-4585-4566-800e-4d77a4d6f8a3/importations/222ef571-bdb7-436d-a01a-e5a0e9161c0c/customColumns',
        method: 'GET',
      },
    }),
).openapi('LinksImportationGetCustomColumnsLink')

const ImportationCustomColumnListLinksSchema = z
  .object({
    add: LinksImportationSaveCustomColumnLinkSchema.exactOptional(),
    self: LinksImportationGetCustomColumnsLinkSchema,
  })
  .openapi({ required: ['self'] })
  .openapi('ImportationCustomColumnListLinks')

const LinksImportationCommitLinkSchema = BeezUPCommonLink3Schema.and(
  z
    .any()
    .openapi({
      example: {
        href: '/v2/user/catalogs/a42b780d-4585-4566-800e-4d77a4d6f8a3/importations/222ef571-bdb7-436d-a01a-e5a0e9161c0c/commit',
        method: 'POST',
      },
    }),
).openapi('LinksImportationCommitLink')

const LinksImportationCommitColumnsLinkSchema = BeezUPCommonLink3Schema.and(
  z
    .any()
    .openapi({
      example: {
        href: '/v2/user/catalogs/a42b780d-4585-4566-800e-4d77a4d6f8a3/importations/222ef571-bdb7-436d-a01a-e5a0e9161c0c/commitColumns',
        method: 'POST',
      },
    }),
).openapi('LinksImportationCommitColumnsLink')

const LinksImportationConfigureRemainingCatalogColumnsLinkSchema = BeezUPCommonLink3Schema.and(
  z
    .any()
    .openapi({
      example: {
        href: '/v2/user/catalogs/a42b780d-4585-4566-800e-4d77a4d6f8a3/importations/222ef571-bdb7-436d-a01a-e5a0e9161c0c/configureRemainingCatalogColumns',
        method: 'POST',
      },
    }),
).openapi('LinksImportationConfigureRemainingCatalogColumnsLink')

const LinksImportationGetProductSampleLinkSchema = BeezUPCommonLink3Schema.and(
  z
    .any()
    .openapi({
      example: {
        href: '/v2/user/catalogs/a42b780d-4585-4566-800e-4d77a4d6f8a3/importations/222ef571-bdb7-436d-a01a-e5a0e9161c0c/productSamples/{productSampleIndex}',
        method: 'GET',
        parameters: { productSampleIndex: { in: 'path', required: true, type: 'integer' } },
      },
    }),
).openapi('LinksImportationGetProductSampleLink')

const LinksImportationTechnicalProgressionLinkSchema = BeezUPCommonLink3Schema.and(
  z
    .any()
    .openapi({
      example: {
        href: '/v2/user/catalogs/a42b780d-4585-4566-800e-4d77a4d6f8a3/importations/222ef571-bdb7-436d-a01a-e5a0e9161c0c/technicalProgression',
        method: 'GET',
      },
    }),
).openapi('LinksImportationTechnicalProgressionLink')

const ImportationMonitoringLinksSchema = z
  .object({
    activateAutoImport: LinksImportationActivateAutoImportLinkSchema.exactOptional(),
    cancel: LinksImportationCancelLinkSchema.exactOptional(),
    catalogColumns: LinksImportationGetDetectedCatalogColumnsLinkSchema.exactOptional(),
    commit: LinksImportationCommitLinkSchema.exactOptional(),
    commitColumns: LinksImportationCommitColumnsLinkSchema.exactOptional(),
    configureRemainingCatalogColumns:
      LinksImportationConfigureRemainingCatalogColumnsLinkSchema.exactOptional(),
    customColumns: LinksImportationGetCustomColumnsLinkSchema.exactOptional(),
    productSamples: LinksImportationGetProductSampleLinkSchema.exactOptional(),
    self: LinksImportationGetImportationMonitoringLinkSchema,
    technicalProgression: LinksImportationTechnicalProgressionLinkSchema,
  })
  .openapi({
    description: 'Applicable operations considering the state of the importation',
    required: ['self', 'technicalProgression'],
  })
  .openapi('ImportationMonitoringLinks')

const ImportationMonitoringSchema = z
  .object({
    beginUtcDate: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'The start date of the importation',
        example: '2017-04-01T13:01:01Z',
      }),
    errors: z
      .array(BeezUPCommonUserErrorMessageSchema)
      .exactOptional()
      .openapi({ description: 'In case of error a description will be indicated' }),
    executionId: ExecutionIdSchema,
    lastUpdateUtcDate: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'The last update of the reporting',
        example: '2017-04-01T13:10:09Z',
      }),
    links: ImportationMonitoringLinksSchema.exactOptional(),
    steps: z
      .record(z.string(), z.boolean())
      .openapi({
        description:
          'Contains all steps of the importation process with a boolean. If true the step has been passed, false the step is not complete',
        example: {
          isCatalogImportComputeDiffCompleted: 'false',
          isCatalogImportPrepareReadCompleted: 'false',
          isCatalogUpdateCompleted: 'false',
          isSavedInDb: 'false',
        },
      }),
    success: z
      .boolean()
      .openapi({
        description: 'Indicates if the importation was successfully completed or not',
        example: 'true',
      }),
    userId: BeezUPCommonUserIdSchema.exactOptional(),
  })
  .openapi({
    description: 'Describe the reporting of the catalog importation',
    required: ['success', 'executionId', 'lastUpdateUtcDate', 'beginUtcDate', 'steps'],
  })
  .openapi('ImportationMonitoring')

const LinksImportationGetReportLinkSchema = BeezUPCommonLink3Schema.and(
  z
    .any()
    .openapi({
      example: {
        href: '/v2/user/catalogs/a42b780d-4585-4566-800e-4d77a4d6f8a3/importations/222ef571-bdb7-436d-a01a-e5a0e911432/report',
        method: 'GET',
      },
    }),
).openapi('LinksImportationGetReportLink')

const ImportationReportingLinksSchema = z
  .object({ report: LinksImportationGetReportLinkSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('ImportationReportingLinks')

const ImportationReportingSchema = z
  .object({
    autoImported: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Indicate if this importation is an auto import or not.',
        example: 'true',
      }),
    beginUtcDate: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'Indicate the begin UTC date of this importation.',
        example: '2017-04-01T13:01:01Z',
      }),
    endUtcDate: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'Indicate the end UTC date of this importation.',
        example: '2017-04-01T13:10:09Z',
      }),
    errors: z
      .array(BeezUPCommonUserErrorMessageSchema)
      .exactOptional()
      .openapi({ description: 'Indicate the error message list related to this importation.' }),
    executionId: ExecutionIdSchema,
    inputConfigurationUrl: z
      .url()
      .exactOptional()
      .openapi({
        description: 'Indicate the input url of this importation.',
        example: 'http://blal.com/catalog.csv',
      }),
    lastUpdateUtcDate: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'Indicate the last update UTC date of the reporting.',
        example: '2017-04-01T13:10:09Z',
      }),
    links: ImportationReportingLinksSchema.exactOptional(),
    stepName: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The last step name of the importation process',
        example: 'IsSaveInDb',
      }),
    steps: z
      .record(z.string(), z.boolean())
      .openapi({
        description: 'Indicate the steps that have been passed during the importation process',
        example: {
          isCatalogImportComputeDiffCompleted: 'false',
          isCatalogImportPrepareReadCompleted: 'false',
          isCatalogUpdateCompleted: 'false',
          isSavedInDb: 'false',
        },
      }),
    success: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Indicate if the importation succeed or not.', example: 'true' }),
    totalProductCount: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Indicate the total product count detected in the catalog during the importation.',
        example: '101',
      }),
    totalProductErrorCount: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Indicate the total product count in error detected in the catalog during the importation.',
        example: '0',
      }),
    totalProductSuccessCount: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Indicate the total product count in success in the catalog during the importation.',
        example: '101',
      }),
    userId: BeezUPCommonUserIdSchema.exactOptional(),
  })
  .openapi({
    description: 'The catalog importation reporting',
    required: ['executionId', 'beginUtcDate', 'lastUpdateUtcDate', 'steps'],
  })
  .openapi('ImportationReporting')

const ImportationTechnicalProgressionSchema = z
  .object({
    stepsProgression: z
      .record(z.string(), z.array(z.string()))
      .exactOptional()
      .openapi({ description: 'Indicate for each step of the importation the uris to look at' }),
  })
  .openapi({ required: [] })
  .openapi('ImportationTechnicalProgression')

const ImportationsResponseLinksSchema = z
  .object({
    self: LinksImportationGetReportingsLinkSchema.exactOptional(),
    start: LinksImportationStartManualUpdateLinkSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ImportationsResponseLinks')

const ImportationsResponseSchema = z
  .object({
    importations: z.array(ImportationReportingSchema).exactOptional(),
    links: ImportationsResponseLinksSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ImportationsResponse')

const ImportationsPerStoreResponseSchema = z
  .record(z.string(), ImportationsResponseSchema)
  .openapi('ImportationsPerStoreResponse')

const InfoSummarySchema = z
  .object({
    informationArguments: z.record(z.string(), z.string()).exactOptional(),
    informationCode: z.string().exactOptional(),
    informationMessage: z.string().exactOptional(),
    objectName: z.string().exactOptional(),
    propertyName: z.string().exactOptional(),
    propertyValue: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('InfoSummary')

const SuccessSummarySchema = z
  .object({
    objectName: z.string().exactOptional(),
    propertyName: z.string().exactOptional(),
    propertyValue: z.string().exactOptional(),
    successArguments: z.record(z.string(), z.string()).exactOptional(),
    successCode: z.string().exactOptional(),
    successMessage: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('SuccessSummary')

const WarningSummarySchema = z
  .object({
    technicalErrorMessage: z.string().exactOptional(),
    warningArguments: z.record(z.string(), z.string()).exactOptional(),
    warningCode: z.string().exactOptional(),
    warningMessage: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('WarningSummary')

const InfoSummariesSchema = z
  .object({
    errors: z.array(ErrorSummarySchema).exactOptional(),
    informations: z.array(InfoSummarySchema).exactOptional(),
    successes: z.array(SuccessSummarySchema).exactOptional(),
    warnings: z.array(WarningSummarySchema).exactOptional(),
  })
  .openapi({ 'x-exclude': true, required: [] })
  .openapi('InfoSummaries')

const InitialsProfilePictureUrlSchema = z
  .string()
  .regex(/^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/)
  .openapi({
    description: 'Indicate the url of your picture profil based on your initials',
    example: 'https://dummyimage.com/50x50/000000/fff&text=AM',
  })
  .openapi('InitialsProfilePictureUrl')

const InvoiceNumberSchema = z
  .string()
  .openapi({ description: 'Your invoice number', example: 'B1234' })
  .openapi('InvoiceNumber')

const InvoicePaymentStatusSchema = z
  .enum(['Paid', 'NotPaid', 'PartiallyPaid', 'Loss'])
  .openapi({ description: 'The payment status', example: 'Paid' })
  .openapi('InvoicePaymentStatus')

const InvoiceSchema = z
  .object({
    amount: z.float64().openapi({ description: 'The amount of your invoice', example: '101.42' }),
    amountToBePaid: z
      .float64()
      .openapi({ description: 'The remaining amount to be paid for this invoice', example: '0.0' }),
    contractId: ContractIdSchema,
    currencyCode: BeezUPCommonCurrencyCodeSchema,
    dueDate: z.iso.date().openapi({ example: '2016-05-10' }),
    invoiceDate: z.iso.date().openapi({ description: 'The invoice date', example: '2016-05-01' }),
    invoiceNumber: InvoiceNumberSchema,
    invoiceUrl: z
      .url()
      .exactOptional()
      .openapi({
        description: 'The url of the invoice document',
        example:
          'https://beezupbilling.blob.core.windows.net/invoicepdf/2000/CustomerUserId_00000000-0000-0000-0000-000000000000/ContractId_00000000-0000-0000-0000-000000000000/2000-01-01_B1234.pdf',
      }),
    paymentStatus: InvoicePaymentStatusSchema,
  })
  .openapi({
    required: [
      'invoiceDate',
      'contractId',
      'invoiceNumber',
      'amount',
      'amountToBePaid',
      'currencyCode',
      'paymentStatus',
      'dueDate',
    ],
  })
  .openapi('Invoice')

const InvoiceListLinksSchema = z
  .object({ self: LinksGetInvoicesLinkSchema })
  .openapi({ required: ['self'] })
  .openapi('InvoiceListLinks')

const InvoiceListSchema = z
  .object({
    invoices: z
      .array(InvoiceSchema)
      .openapi({
        example: [
          {
            amount: '101',
            amountToBePaid: '0',
            contractId: '7098487a-86f6-4322-b8a5-b67f7363b3e7',
            currencyCode: 'EUR',
            dueDate: '2016-05-10',
            invoiceDate: '2016-05-01',
            invoiceNumber: 'B1234',
            invoiceUrl:
              'https://beezupbilling.blob.core.windows.net/invoicepdf/2000/CustomerUserId_00000000-0000-0000-0000-000000000000/ContractId_00000000-0000-0000-0000-000000000000/2000-01-01_B1234.pdf',
            paymentStatus: 'Paid',
          },
        ],
      }),
    links: InvoiceListLinksSchema,
  })
  .openapi({ required: ['links', 'invoices'] })
  .openapi('InvoiceList')

const LastManualImportInputConfigurationSchema = z
  .object({ input: InputConfigurationSchema })
  .openapi({ description: 'Last manual import input configuration', required: ['input'] })
  .openapi('LastManualImportInputConfiguration')

const LinksMigrateLegacyTrackingChannelCatalogLinkSchema = BeezUPCommonLink3Schema.and(
  z
    .any()
    .openapi({
      example: {
        href: '/v2/user/legacyTracking/channelCatalogs/6d6b04de-406b-4539-8e7e-bf3e8da5dfb0/migrate',
        method: 'POST',
      },
    }),
).openapi('LinksMigrateLegacyTrackingChannelCatalogLink')

const LinksGetLegacyTrackingChannelCatalogLinkSchema = BeezUPCommonLink3Schema.and(
  z
    .any()
    .openapi({
      example: {
        href: '/v2/user/legacyTracking/channelCatalogs/6d6b04de-406b-4539-8e7e-bf3e8da5dfb0',
        method: 'GET',
      },
    }),
).openapi('LinksGetLegacyTrackingChannelCatalogLink')

const LegacyTrackingChannelCatalogLinksSchema = z
  .object({
    migrate: LinksMigrateLegacyTrackingChannelCatalogLinkSchema.exactOptional(),
    self: LinksGetLegacyTrackingChannelCatalogLinkSchema,
  })
  .openapi({
    description: 'Indicates the actions you can do on a channel catalog',
    required: ['self'],
  })
  .openapi('LegacyTrackingChannelCatalogLinks')

const LegacyTrackingChannelCatalogSchema = z
  .object({ links: LegacyTrackingChannelCatalogLinksSchema })
  .openapi({ description: 'The channel catalog', required: ['links'] })
  .openapi('LegacyTrackingChannelCatalog')

const LinksGetLegacyTrackingChannelCatalogsLinkSchema = BeezUPCommonLink3Schema.and(
  z.any().openapi({ example: { href: '/v2/user/legacyTracking/channelCatalogs', method: 'GET' } }),
).openapi('LinksGetLegacyTrackingChannelCatalogsLink')

const LegacyTrackingChannelCatalogListLinksSchema = z
  .object({ self: LinksGetLegacyTrackingChannelCatalogsLinkSchema.exactOptional() })
  .openapi({
    description:
      'Indicates how global actions you can do like how to create a channel catalog, exclusion filter operators, etc...\n',
    required: [],
  })
  .openapi('LegacyTrackingChannelCatalogListLinks')

const LegacyTrackingChannelCatalogListSchema = z
  .object({
    channelCatalogs: z
      .record(z.string(), LegacyTrackingChannelCatalogSchema)
      .exactOptional()
      .openapi({
        description: 'The channel catalog list. The key is the channel catalog identifier',
      }),
    links: LegacyTrackingChannelCatalogListLinksSchema.exactOptional(),
  })
  .openapi({ description: 'This is the index of the channel catalog API', required: [] })
  .openapi('LegacyTrackingChannelCatalogList')

const OperationIdSchema = z
  .string()
  .openapi({ description: 'The operationId to call.', example: 'GetOrder', 'x-exclude': true })
  .openapi('OperationId')

const ParameterInSchema = z
  .enum(['path', 'header', 'query', 'body', 'file'])
  .openapi({
    description:
      '* path: if the parameter must be pass in the path uri\n* header: if the parameter must be passed in http header\n* query: if the parameter must be passed in querystring\n* body: if the parameter must be passed in the body\n* file: if the parameter must be passed in a multipart/form-data (https://swagger.io/docs/specification/2-0/file-upload/)\n',
    example: 'path',
    'x-exclude': true,
  })
  .openapi('ParameterIn')

const ValidationPatternSchema = z
  .string()
  .openapi({ description: 'The regular expression to validate the value', example: '*.-api$' })
  .openapi('ValidationPattern')

const ParameterTypeSchema = z
  .enum(['string', 'integer', 'number', 'boolean', 'object', 'array', 'date', 'date-time', 'file'])
  .default('string')
  .openapi({ description: 'The value type of the parameter', example: 'string', 'x-exclude': true })
  .openapi('ParameterType')

const LinkParameterProperty3Schema = z
  .object({
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'description of the parameter', example: 'the store identifier' }),
    label: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The label corresponding to the link parameter property. This label is automatically translated based on the Accept-Language http header.',
        example: 'The translated label',
      }),
    lovLink: LOVLink3Schema.exactOptional(),
    lovRequired: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "If true, you MUST use indicate a value from the list of values otherwise it's a freetext",
        example: 'true',
      }),
    pattern: ValidationPatternSchema.exactOptional(),
    required: z.boolean().exactOptional().openapi({ example: 'true' }),
    schema: z
      .string()
      .exactOptional()
      .openapi({ description: 'schema of the parameter', example: 'orderListRequest' }),
    type: ParameterTypeSchema,
    value: z
      .object({})
      .exactOptional()
      .openapi({
        description: 'The value of the parameter. It can be an integer a string or an object.',
      }),
  })
  .openapi({ required: ['type'], 'x-exclude': true })
  .openapi('LinkParameterProperty3')

const LinkParameter3Schema = z
  .object({
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'description of the parameter', example: 'the store identifier' }),
    in: ParameterInSchema,
    label: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The label corresponding to the link parameter. This label is automatically translated based on the Accept-Language http header.',
        example: 'The translated label',
      }),
    lovLink: LOVLink3Schema.exactOptional(),
    lovRequired: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "If true, you MUST indicate a value from the list of values otherwise it's a freetext",
        example: 'true',
      }),
    pattern: ValidationPatternSchema.exactOptional(),
    properties: z
      .record(z.string(), LinkParameterProperty3Schema)
      .exactOptional()
      .openapi({
        description:
          'If the parameter is an object with flexible properties (additionProperties/dictionary), we will describe the properties of the object.',
      }),
    required: z.boolean().default(false).exactOptional().openapi({ example: 'true' }),
    schema: z
      .string()
      .exactOptional()
      .openapi({ description: 'schema of the parameter', example: 'orderListRequest' }),
    value: z
      .object({})
      .exactOptional()
      .openapi({
        description: 'The value of the parameter. It can be an integer a string or an object.',
      }),
  })
  .openapi({ required: ['in'], 'x-exclude': true })
  .openapi('LinkParameter3')

const LinkParameter3TypesSchema = z
  .record(z.string(), LinkParameter3Schema)
  .openapi('LinkParameter3Types')

const Link3Schema = z
  .object({
    allOptionalParamsProvided: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'indicates whether all optionals params have been provided' }),
    allRequiredParamsProvided: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'indicates whether all required params have been provided' }),
    description: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The description of the link',
        example: 'This is a description link',
      }),
    docUrl: DocUrlSchema.exactOptional(),
    href: HrefSchema,
    info: InfoSummariesSchema.exactOptional(),
    label: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The label corresponding to the link. This label is automatically translated based on the Accept-Language http header.',
        example: 'The translated label',
      }),
    method: HttpMethodSchema.exactOptional(),
    operationId: OperationIdSchema.exactOptional(),
    parameters: LinkParameter3TypesSchema.exactOptional(),
    rel: z
      .string()
      .exactOptional()
      .openapi({ description: 'Indicate the relation name related to the link' }),
    urlTemplated: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'indicates whether the href is templated or not' }),
  })
  .openapi({ required: ['href'], 'x-exclude': true })
  .openapi('Link3')

const LinkClickToOrderTypeSchema = z
  .enum(['OnPurchaseDate', 'OnClickDate'])
  .default('OnPurchaseDate')
  .openapi({ example: 'OnClickDate' })
  .openapi('LinkClickToOrderType')

const LinksChangeOrderLinkSchema = BeezUPCommonLink3Schema.and(
  z
    .object({
      rel: z
        .string()
        .exactOptional()
        .openapi({
          description: 'Indicate the relation name related to the link',
          example: 'self',
        }),
    })
    .openapi({ required: [] }),
)
  .and(
    z
      .any()
      .openapi({
        example: {
          href: '/v2/user/marketplaces/orders/Amazon/1001/00000000000000000000000000000000000000000000000/ShipOrder',
          method: 'POST',
          parameters: {
            'If-Match': {
              in: 'header',
              required: true,
              type: 'string',
              value: '"ca071a4580129f932a03971968ffef69"',
            },
            request: {
              in: 'body',
              properties: {
                order_Shipping_CarrierName: {
                  lovLink: { href: '/v2/user/PriceMinisterCarrierName' },
                  lovRequired: 'true',
                  required: true,
                  type: 'string',
                },
                order_Shipping_FulfillmentDate: { required: true, type: 'date-time' },
                order_Shipping_Method: {
                  lovLink: { href: '/v2/user/ShippingMethod_PriceMinister' },
                  lovRequired: 'false',
                  required: true,
                  type: 'string',
                },
                order_Shipping_ShipperTrackingNumber: { required: true, type: 'string' },
              },
              schema: 'changeOrderRequest',
              type: 'object',
            },
            testMode: { in: 'query', required: false, type: 'boolean', value: 'false' },
            userName: { in: 'query', required: true, type: 'string' },
          },
          rel: 'ShipOrder',
          templated: 'true',
        },
      }),
  )
  .openapi('LinksChangeOrderLink')

const LinksChangeOrderV3LinkSchema = Link3Schema.and(
  z
    .object({
      rel: z
        .string()
        .exactOptional()
        .openapi({
          description: 'Indicate the relation name related to the link',
          example: 'self',
        }),
    })
    .openapi({ required: [] }),
)
  .and(
    z
      .any()
      .openapi({
        example: {
          href: '/orders/v3/Amazon/1001/00000000000000000000000000000000000000000000000/ShipOrder',
          method: 'POST',
          parameters: {
            'If-Match': {
              in: 'header',
              required: true,
              type: 'string',
              value: '"ca071a4580129f932a03971968ffef69"',
            },
            request: {
              in: 'body',
              properties: {
                order_Shipping_CarrierName: {
                  lovLink: { href: '/v2/user/PriceMinisterCarrierName' },
                  lovRequired: 'true',
                  required: true,
                  type: 'string',
                },
                order_Shipping_FulfillmentDate: { required: true, type: 'date-time' },
                order_Shipping_Method: {
                  lovLink: { href: '/v2/user/ShippingMethod_PriceMinister' },
                  lovRequired: 'false',
                  required: true,
                  type: 'string',
                },
                order_Shipping_ShipperTrackingNumber: { required: true, type: 'string' },
              },
              schema: 'changeOrderRequest',
              type: 'object',
            },
            testMode: { in: 'query', required: false, type: 'boolean', value: 'false' },
            userName: { in: 'query', required: true, type: 'string' },
          },
          rel: 'ShipOrder',
          templated: 'true',
        },
      }),
  )
  .openapi('LinksChangeOrderV3Link')

const LinksClearMerchantOrderInfoLinkSchema = BeezUPCommonLink3Schema.and(
  z
    .any()
    .openapi({
      example: {
        href: '/v2/user/marketplaces/orders/Amazon/1001/00000000000000000000000000000000000000000000000/clearMerchantOrderInfo',
        method: 'POST',
      },
    }),
).openapi('LinksClearMerchantOrderInfoLink')

const LinksClearMerchantOrderInfoListLinkSchema = BeezUPCommonLink3Schema.and(
  z
    .any()
    .openapi({
      example: { href: '/v2/user/marketplaces/orders/clearMerchantOrderInfos', method: 'POST' },
    }),
).openapi('LinksClearMerchantOrderInfoListLink')

const LinksClearMerchantOrderInfoListV3LinkSchema = Link3Schema.and(
  z.any().openapi({ example: { href: '/orders/v3/clearMerchantOrderInfos', method: 'POST' } }),
).openapi('LinksClearMerchantOrderInfoListV3Link')

const LinksClearMerchantOrderInfoV3LinkSchema = Link3Schema.and(
  z
    .any()
    .openapi({
      example: {
        href: '/orders/v3/Amazon/1001/00000000000000000000000000000000000000000000000/clearMerchantOrderInfo',
        method: 'POST',
      },
    }),
).openapi('LinksClearMerchantOrderInfoV3Link')

const LinksConfigureChannelCatalogExclusionFiltersCopyLinkSchema = BeezUPCommonLink3Schema.and(
  z
    .any()
    .openapi({
      example: {
        href: '/v2/user/channelCatalogs/6d6b04de-406b-4539-8e7e-bf3e8da5dfb0/exclusionFilters/6d6b04de-406b-4539-8e7e-bf3e8da5dfb0/copy',
        method: 'POST',
      },
    }),
).openapi('LinksConfigureChannelCatalogExclusionFiltersCopyLink')

const LinksConfigureChannelCatalogProductValueOverrideCopyLinkSchema = BeezUPCommonLink3Schema.and(
  z
    .any()
    .openapi({
      example: {
        href: '/v2/user/channelCatalogs/6d6b04de-406b-4539-8e7e-bf3e8da5dfb0/products/578419df-1bbf-41a6-96fa-862e42182b67/overrides/copy',
        method: 'POST',
      },
    }),
).openapi('LinksConfigureChannelCatalogProductValueOverrideCopyLink')

const LinksCreateRuleLinkSchema = BeezUPCommonLink3Schema.and(
  z
    .any()
    .openapi({
      example: {
        href: '/v2/user/analytics/10af9486-e28e-47ab-b045-e13e4acd55c3/rules',
        method: 'POST',
        parameters: {
          request: {
            in: 'body',
            schema: 'createRuleRequest',
            type: 'object',
            value: {
              endUtcDate: '2017-09-30T10:42:40.001Z',
              optimisationActionName: 'reenable',
              reportFilterId: 'fb19c53c-2f63-4262-9d94-2d7faa500acd',
              ruleName: 'My rule',
              startUtcDate: '2016-08-29T09:12:33.001Z',
            },
          },
        },
      },
    }),
).openapi('LinksCreateRuleLink')

const LinksDeleteReportFilterLinkSchema = BeezUPCommonLink3Schema.and(
  z
    .any()
    .openapi({
      example: {
        href: '/v2/user/analytics/8f95eb1a-3691-4750-950d-a13c4a8a9bcc/reports/filters/fb19c53c-2f63-4262-9d94-2d7faa500acd',
        method: 'DELETE',
      },
    }),
).openapi('LinksDeleteReportFilterLink')

const LinksDeleteRuleLinkSchema = BeezUPCommonLink3Schema.and(
  z
    .any()
    .openapi({
      example: {
        href: '/v2/user/analytics/10af9486-e28e-47ab-b045-e13e4acd55c3/rules/c38006b4-29d0-4b8a-978b-701a0b12d5a8',
        method: 'DELETE',
      },
    }),
).openapi('LinksDeleteRuleLink')

const LinksDisableRuleLinkSchema = BeezUPCommonLink3Schema.and(
  z
    .any()
    .openapi({
      example: {
        href: '/v2/user/analytics/10af9486-e28e-47ab-b045-e13e4acd55c3/rules/c38006b4-29d0-4b8a-978b-701a0b12d5a8/disable',
        method: 'POST',
      },
    }),
).openapi('LinksDisableRuleLink')

const LinksEnableRuleLinkSchema = BeezUPCommonLink3Schema.and(
  z
    .any()
    .openapi({
      example: {
        href: '/v2/user/analytics/10af9486-e28e-47ab-b045-e13e4acd55c3/rules/c38006b4-29d0-4b8a-978b-701a0b12d5a8/enable',
        method: 'POST',
      },
    }),
).openapi('LinksEnableRuleLink')

const LinksExportOrdersLinkSchema = BeezUPCommonLink3Schema.and(
  z
    .any()
    .openapi({
      example: {
        href: '/v2/user/marketplaces/orders/exportations',
        method: 'POST',
        properties: {
          request: { in: 'body', required: true, schema: 'exportOrderListRequest', type: 'object' },
        },
      },
    }),
).openapi('LinksExportOrdersLink')

const LinksGetChannelCatalogExclusionFiltersCopyLinkSchema = BeezUPCommonLink3Schema.and(
  z
    .any()
    .openapi({
      example: {
        href: '/v2/user/channelCatalogs/6d6b04de-406b-4539-8e7e-bf3e8da5dfb0/exclusionFilters/6d6b04de-406b-4539-8e7e-bf3e8da5dfb0/copy',
        method: 'GET',
      },
    }),
).openapi('LinksGetChannelCatalogExclusionFiltersCopyLink')

const LinksGetChannelCatalogProductValueOverrideCopyLinkSchema = BeezUPCommonLink3Schema.and(
  z
    .any()
    .openapi({
      example: {
        href: '/v2/user/channelCatalogs/6d6b04de-406b-4539-8e7e-bf3e8da5dfb0/products/578419df-1bbf-41a6-96fa-862e42182b67/overrides/copy',
        method: 'GET',
      },
    }),
).openapi('LinksGetChannelCatalogProductValueOverrideCopyLink')

const LinksGetChannelsIndexLinkSchema = BeezUPCommonLink3Schema.and(
  z.any().openapi({ example: { href: '/v2/public/channels', method: 'GET' } }),
).openapi('LinksGetChannelsIndexLink')

const LinksGetChannelsLinkSchema = BeezUPCommonLink3Schema.and(
  z.any().openapi({ example: { href: '/v2/public/channels/FRA', method: 'GET' } }),
).openapi('LinksGetChannelsLink')

const LinksGetMarketplaceAccountsSynchronizationLinkSchema = BeezUPCommonLink3Schema.and(
  z.any().openapi({ example: { href: '/v2/user/marketplaces/orders/status', method: 'GET' } }),
).openapi('LinksGetMarketplaceAccountsSynchronizationLink')

const LinksGetMarketplaceAccountsSynchronizationV3LinkSchema = Link3Schema.and(
  z.any().openapi({ example: { href: '/orders/v3/status', method: 'GET' } }),
).openapi('LinksGetMarketplaceAccountsSynchronizationV3Link')

const LinksGetMarketplaceChannelCatalogsLinkSchema = BeezUPCommonLink3Schema.and(
  z.any().openapi({ example: { href: '/v2/user/marketplaces/channelcatalogs' } }),
).openapi('LinksGetMarketplaceChannelCatalogsLink')

const LinksGetOrderExportationsLinkSchema = BeezUPCommonLink3Schema.and(
  z
    .any()
    .openapi({ example: { href: '/v2/user/marketplaces/orders/exportations', method: 'GET' } }),
).openapi('LinksGetOrderExportationsLink')

const LinksGetOrderHistoryLinkSchema = BeezUPCommonLink3Schema.and(
  z
    .any()
    .openapi({
      example: {
        href: '/v2/user/marketplaces/orders/Amazon/1001/00000000000000000000000000000000000000000000000/history',
        method: 'GET',
      },
    }),
).openapi('LinksGetOrderHistoryLink')

const LinksGetOrderHistoryV3LinkSchema = Link3Schema.and(
  z
    .any()
    .openapi({
      example: {
        href: '/orders/v3/Amazon/1001/00000000000000000000000000000000000000000000000/history',
        method: 'GET',
      },
    }),
).openapi('LinksGetOrderHistoryV3Link')

const LinksGetOrderIndexLinkSchema = BeezUPCommonLink3Schema.and(
  z.any().openapi({ example: { href: '/v2/user/marketplaces/orders', method: 'GET' } }),
).openapi('LinksGetOrderIndexLink')

const LinksGetOrderLinkSchema = BeezUPCommonLink3Schema.and(
  z
    .any()
    .openapi({
      example: {
        href: '/v2/user/marketplaces/orders/Amazon/1001/00000000000000000000000000000000000000000000000',
        method: 'GET',
      },
    }),
).openapi('LinksGetOrderLink')

const LinksGetOrderListFullLinkSchema = BeezUPCommonLink3Schema.and(
  z
    .any()
    .openapi({
      example: {
        href: '/v2/user/marketplaces/orders/list/full',
        method: 'POST',
        properties: {
          'Accept-Encoding': { in: 'header', required: true, schema: 'string', type: '​array' },
          request: { in: 'body', required: false, schema: 'orderListRequest', type: 'object' },
        },
      },
    }),
).openapi('LinksGetOrderListFullLink')

const LinksGetOrderListFullV3LinkSchema = Link3Schema.and(
  z
    .any()
    .openapi({
      example: {
        href: '/orders/v3/list/full',
        method: 'POST',
        properties: {
          'Accept-Encoding': { in: 'header', required: true, type: 'string' },
          request: { in: 'body', required: false, schema: 'orderListRequest', type: 'object' },
        },
      },
    }),
).openapi('LinksGetOrderListFullV3Link')

const LinksGetOrderListLightLinkSchema = BeezUPCommonLink3Schema.and(
  z
    .any()
    .openapi({
      example: {
        href: '/v2/user/marketplaces/orders/list/light',
        method: 'POST',
        properties: {
          request: { in: 'body', required: false, schema: 'orderListRequest', type: 'object' },
        },
      },
    }),
).openapi('LinksGetOrderListLightLink')

const LinksGetOrderListLightV3LinkSchema = Link3Schema.and(
  z
    .any()
    .openapi({
      example: {
        href: '/orders/v3/list/light',
        method: 'POST',
        properties: {
          request: { in: 'body', required: false, schema: 'orderListRequest', type: 'object' },
        },
      },
    }),
).openapi('LinksGetOrderListLightV3Link')

const LinksGetOrderV3LinkSchema = Link3Schema.and(
  z
    .any()
    .openapi({
      example: {
        href: '/orders/v3/Amazon/1001/00000000000000000000000000000000000000000000000',
        method: 'GET',
      },
    }),
).openapi('LinksGetOrderV3Link')

const LinksGetPublicListOfValuesLinkSchema = BeezUPCommonLink3Schema.and(
  z.any().openapi({ example: { href: '/v2/public/lov/ChannelType', method: 'GET' } }),
).openapi('LinksGetPublicListOfValuesLink')

const LinksGetPublicLovIndexLinkSchema = BeezUPCommonLink3Schema.and(
  z.any().openapi({ example: { href: '/v2/public/lov', method: 'GET' } }),
).openapi('LinksGetPublicLovIndexLink')

const LinksGetReportFilterLinkSchema = BeezUPCommonLink3Schema.and(
  z
    .any()
    .openapi({
      example: {
        href: '/v2/user/analytics/10af9486-e28e-47ab-b045-e13e4acd55c3/reports/filters/fb19c53c-2f63-4262-9d94-2d7faa500acd',
        method: 'GET',
      },
    }),
).openapi('LinksGetReportFilterLink')

const LinksGetRuleLinkSchema = BeezUPCommonLink3Schema.and(
  z
    .any()
    .openapi({
      example: {
        href: '/v2/user/analytics/10af9486-e28e-47ab-b045-e13e4acd55c3/rules/c38006b4-29d0-4b8a-978b-701a0b12d5a8',
        method: 'GET',
      },
    }),
).openapi('LinksGetRuleLink')

const LinksGetRulesExecutionsLinkSchema = BeezUPCommonLink3Schema.and(
  z
    .any()
    .openapi({
      example: {
        href: '/v2/user/analytics/10af9486-e28e-47ab-b045-e13e4acd55c3/rules/executions',
        method: 'GET',
      },
    }),
).openapi('LinksGetRulesExecutionsLink')

const LinksGetUserListOfValuesLinkSchema = BeezUPCommonLink3Schema.and(
  z.any().openapi({ example: { href: '/v2/user/lov/Go2CultureName', method: 'GET' } }),
).openapi('LinksGetUserListOfValuesLink')

const LinksGetUserLovIndexLinkSchema = BeezUPCommonLink3Schema.and(
  z.any().openapi({ example: { href: '/v2/user/lov', method: 'GET' } }),
).openapi('LinksGetUserLovIndexLink')

const LinksHarvestAllLinkSchema = BeezUPCommonLink3Schema.and(
  z.any().openapi({ example: { href: '/v2/user/marketplaces/orders/harvest', method: 'POST' } }),
).openapi('LinksHarvestAllLink')

const LinksHarvestAllV3LinkSchema = Link3Schema.and(
  z.any().openapi({ example: { href: '/orders/v3/harvest', method: 'POST' } }),
).openapi('LinksHarvestAllV3Link')

const LinksHarvestOrderLinkSchema = BeezUPCommonLink3Schema.and(
  z
    .any()
    .openapi({
      example: {
        href: '/v2/user/marketplaces/orders/Amazon/1001/00000000000000000000000000000000000000000000000/harvest',
        method: 'POST',
      },
    }),
).openapi('LinksHarvestOrderLink')

const LinksHarvestOrderV3LinkSchema = Link3Schema.and(
  z
    .any()
    .openapi({
      example: {
        href: '/orders/v3/Amazon/1001#/00000000000000000000000000000000000000000000000/harvest',
        method: 'POST',
      },
    }),
).openapi('LinksHarvestOrderV3Link')

const LinksImportationDeleteCustomColumnLinkSchema = BeezUPCommonLink3Schema.and(
  z
    .any()
    .openapi({
      example: {
        href: '/v2/user/catalogs/a42b780d-4585-4566-800e-4d77a4d6f8a3/importations/222ef571-bdb7-436d-a01a-e5a0e9161c0c/customColumns/5b56bb78-bc0b-485e-abd8-8db7eed995cb',
        method: 'DELETE',
      },
    }),
).openapi('LinksImportationDeleteCustomColumnLink')

const LinksImportationGetCustomColumnExpressionLinkSchema = BeezUPCommonLink3Schema.and(
  z
    .any()
    .openapi({
      example: {
        href: '/v2/user/catalogs/a42b780d-4585-4566-800e-4d77a4d6f8a3/importations/222ef571-bdb7-436d-a01a-e5a0e9161c0c/customColumns/5b56bb78-bc0b-485e-abd8-8db7eed995cb/expression',
        method: 'GET',
      },
    }),
).openapi('LinksImportationGetCustomColumnExpressionLink')

const LinksMoveDownRuleLinkSchema = BeezUPCommonLink3Schema.and(
  z
    .any()
    .openapi({
      example: {
        href: '/v2/user/analytics/10af9486-e28e-47ab-b045-e13e4acd55c3/rules/c38006b4-29d0-4b8a-978b-701a0b12d5a8/movedown',
        method: 'POST',
      },
    }),
).openapi('LinksMoveDownRuleLink')

const LinksMoveUpRuleLinkSchema = BeezUPCommonLink3Schema.and(
  z
    .any()
    .openapi({
      example: {
        href: '/v2/user/analytics/10af9486-e28e-47ab-b045-e13e4acd55c3/rules/c38006b4-29d0-4b8a-978b-701a0b12d5a8/moveup',
        method: 'POST',
      },
    }),
).openapi('LinksMoveUpRuleLink')

const LinksPublishCatalogToMarketplaceLinkSchema = BeezUPCommonLink3Schema.and(
  z
    .any()
    .openapi({
      example: { href: '/v2/user/marketplaces/channelcatalogs/publications/Cdiscount/123/publish' },
    }),
).openapi('LinksPublishCatalogToMarketplaceLink')

const LinksRunRuleLinkSchema = BeezUPCommonLink3Schema.and(
  z
    .any()
    .openapi({
      example: {
        href: '/v2/user/analytics/10af9486-e28e-47ab-b045-e13e4acd55c3/rules/c38006b4-29d0-4b8a-978b-701a0b12d5a8/run',
        method: 'POST',
      },
    }),
).openapi('LinksRunRuleLink')

const LinksRunRulesLinkSchema = BeezUPCommonLink3Schema.and(
  z
    .any()
    .openapi({
      example: {
        href: '/v2/user/analytics/10af9486-e28e-47ab-b045-e13e4acd55c3/rules/run',
        method: 'POST',
      },
    }),
).openapi('LinksRunRulesLink')

const LinksSaveReportFilterLinkSchema = BeezUPCommonLink3Schema.and(
  z
    .any()
    .openapi({
      example: {
        href: '/v2/user/analytics/8f95eb1a-3691-4750-950d-a13c4a8a9bcc/reports/filters/{reportFilterId}',
        method: 'PUT',
        parameters: [{ in: 'path', name: 'reportFilterId', type: 'string' }],
        templated: 'true',
      },
    }),
).openapi('LinksSaveReportFilterLink')

const LinksSetMerchantOrderInfoLinkSchema = BeezUPCommonLink3Schema.and(
  z
    .any()
    .openapi({
      example: {
        href: '/v2/user/marketplaces/orders/Amazon/1001/00000000000000000000000000000000000000000000000/setMerchantOrderInfo',
        method: 'POST',
        parameters: {
          request: { in: 'body', schema: 'setMerchantOrderInfoRequest', type: 'object' },
        },
      },
    }),
).openapi('LinksSetMerchantOrderInfoLink')

const LinksSetMerchantOrderInfoListLinkSchema = BeezUPCommonLink3Schema.and(
  z
    .any()
    .openapi({
      example: {
        href: '/v2/user/marketplaces/orders/setMerchantOrderInfos',
        method: 'POST',
        parameters: {
          request: {
            in: 'body',
            required: true,
            schema: 'setMerchantOrderInfoRequest',
            type: 'object',
          },
        },
      },
    }),
).openapi('LinksSetMerchantOrderInfoListLink')

const LinksSetMerchantOrderInfoListV3LinkSchema = Link3Schema.and(
  z
    .any()
    .openapi({
      example: {
        href: '/orders/v3/setMerchantOrderInfos',
        method: 'POST',
        parameters: {
          request: {
            in: 'body',
            required: true,
            schema: 'setMerchantOrderInfoRequest',
            type: 'object',
          },
        },
      },
    }),
).openapi('LinksSetMerchantOrderInfoListV3Link')

const LinksSetMerchantOrderInfoV3LinkSchema = Link3Schema.and(
  z
    .any()
    .openapi({
      example: {
        href: '/orders/v3/Amazon/1001/00000000000000000000000000000000000000000000000/setMerchantOrderInfo',
        method: 'POST',
        parameters: {
          request: { in: 'body', schema: 'setMerchantOrderInfoRequest', type: 'object' },
        },
      },
    }),
).openapi('LinksSetMerchantOrderInfoV3Link')

const LinksUpdateRuleLinkSchema = BeezUPCommonLink3Schema.and(
  z
    .any()
    .openapi({
      example: {
        href: '/v2/user/analytics/10af9486-e28e-47ab-b045-e13e4acd55c3/rules/c38006b4-29d0-4b8a-978b-701a0b12d5a8',
        method: 'PATCH',
        parameters: {
          request: {
            in: 'body',
            schema: 'updateRuleRequest',
            type: 'object',
            value: {
              'endUtcDate"': '2016-08-29T09:12:33.001Z',
              ruleName: 'My Rule Renamed',
              startUtcDate: '2016-08-29T09:12:33.001Z',
            },
          },
        },
      },
    }),
).openapi('LinksUpdateRuleLink')

const LinksCreateStoreLinkSchema = BeezUPCommonLink3Schema.and(
  z.any().openapi({ example: { href: '/v2/user/customer/stores', method: 'POST' } }),
).openapi('LinksCreateStoreLink')

const LinksDeleteStoreLinkSchema = BeezUPCommonLink3Schema.and(
  z
    .any()
    .openapi({
      example: {
        href: '/v2/user/customer/stores/51afae05-277e-4902-8b17-5a811a23a2c6',
        method: 'DELETE',
      },
    }),
).openapi('LinksDeleteStoreLink')

const LinksDeleteStoreShareLinkSchema = BeezUPCommonLink3Schema.and(
  z
    .any()
    .openapi({
      example: {
        href: '/v2/user/stores/51afae05-277e-4902-8b17-5a811a23a2c6/shares/277596c1-a5a9-4cce-9f34-b5906451a98f',
        method: 'DELETE',
      },
    }),
).openapi('LinksDeleteStoreShareLink')

const LinksGetStoreLinkSchema = BeezUPCommonLink3Schema.and(
  z
    .any()
    .openapi({
      example: {
        href: '/v2/user/customer/stores/51afae05-277e-4902-8b17-5a811a23a2c6',
        method: 'GET',
      },
    }),
).openapi('LinksGetStoreLink')

const LinksGetStoreSharesLinkSchema = BeezUPCommonLink3Schema.and(
  z
    .any()
    .openapi({
      example: {
        href: '/v2/user/customer/stores/51afae05-277e-4902-8b17-5a811a23a2c6/shares',
        method: 'GET',
      },
    }),
).openapi('LinksGetStoreSharesLink')

const LinksSaveStoreAlertsLinkSchema = BeezUPCommonLink3Schema.and(
  z
    .any()
    .openapi({
      example: {
        href: '/v2/user/customer/stores/51afae05-277e-4902-8b17-5a811a23a2c6/alerts',
        method: 'POST',
      },
    }),
).openapi('LinksSaveStoreAlertsLink')

const LinksShareStoreLinkSchema = BeezUPCommonLink3Schema.and(
  z
    .any()
    .openapi({
      example: {
        href: '/v2/user/customer/stores/51afae05-277e-4902-8b17-5a811a23a2c6/shares',
        method: 'POST',
        parameters: { email: { in: 'body', required: true, type: 'string' } },
      },
    }),
).openapi('LinksShareStoreLink')

const LinksUpdateStoreLinkSchema = BeezUPCommonLink3Schema.and(
  z
    .any()
    .openapi({
      example: {
        href: '/v2/user/customer/stores/51afae05-277e-4902-8b17-5a811a23a2c6',
        method: 'PATCH',
      },
    }),
).openapi('LinksUpdateStoreLink')

const ListOfValueItemSchema = z
  .object({
    codeIdentifier: z.string().openapi({ example: 'FRA' }),
    intIdentifier: z.int32().openapi({ example: '1' }),
    position: z.int32().exactOptional().openapi({ example: '1' }),
    translationText: z.string().exactOptional().openapi({ example: 'France' }),
  })
  .openapi({
    description: 'This object is used by LOV apis',
    required: ['codeIdentifier', 'intIdentifier'],
  })
  .openapi('ListOfValueItem')

const LoginRequestSchema = z
  .object({
    login: BeezUPCommonEmailSchema,
    password: z.string().openapi({ description: 'Your password', example: 'I@mW0nder$Full' }),
  })
  .openapi({ required: ['login', 'password'] })
  .openapi('LoginRequest')

const MapBeezUPColumnRequestSchema = z
  .object({ beezUPColumnName: BeezUPCommonBeezUPColumnNameSchema })
  .openapi({ required: ['beezUPColumnName'] })
  .openapi('MapBeezUPColumnRequest')

const MarginTypeSchema = z
  .enum(['Tracker', 'Global'])
  .default('Tracker')
  .openapi({ example: 'Global' })
  .openapi('MarginType')

const PublicationStrategyKindSchema = z
  .enum(['Delta', 'Full'])
  .default('Delta')
  .openapi({
    description:
      'Define the publication strategy kind, for that you have 2 choices \n* Delta - This is the recommanded publication strategy kind, this strategy will push to the marketplace only the difference between your catalog and the previous published feeds done by BeezUP. \n* Full - If you want to force the publication of all your catalog feeds to the marketplace. \n      !WARNING! Depending to the marketplace this operation will purge the existing offers on the marketplace that are not in the catalog or unknown from the publication feed referential.\n',
  })
  .openapi('PublicationStrategyKind')

const PublicationStrategySchema = z
  .string()
  .openapi({ description: 'The Publication Type', 'x-lov': 'MarketplacePublicationV3Strategy' })
  .openapi('PublicationStrategy')

const MarketplaceChannelCatalogPublicationOptionSchema = z
  .object({
    feedType: FeedTypeSchema,
    kind: PublicationStrategyKindSchema,
    link: LinksPublishCatalogToMarketplaceLinkSchema,
    strategy: PublicationStrategySchema,
    withUnpublish: z.boolean(),
  })
  .openapi({ required: ['kind', 'feedType', 'withUnpublish', 'strategy', 'link'] })
  .openapi('MarketplaceChannelCatalogPublicationOption')

const MarketplaceChannelCatalogLinksSchema = z
  .object({
    properties: LinksGetChannelCatalogMarketplacePropertiesLinkSchema,
    publications: LinksGetPublicationsLinkSchema.exactOptional(),
    publishOptions: z.array(MarketplaceChannelCatalogPublicationOptionSchema).exactOptional(),
    settings: LinksGetChannelCatalogMarketplaceSettingsLinkSchema,
  })
  .openapi({
    description:
      'Indicate the actions you can do on a channel catalog. If the settings are valid, you will be able to access to the publication history.',
    required: ['properties', 'settings'],
  })
  .openapi('MarketplaceChannelCatalogLinks')

const MarketplaceChannelCatalogLovLinksSchema = z
  .object({
    cancelationReasonCodeLOV: BeezUPCommonLOVLink3Schema.exactOptional(),
    carrierCodeLOV: BeezUPCommonLOVLink3Schema.exactOptional(),
    marketplaceStorePropertyGroupLOV: BeezUPCommonLOVLink3Schema.exactOptional(),
    marketplaceStorePropertyLOV: BeezUPCommonLOVLink3Schema.exactOptional(),
    refundReasonCodeLOV: BeezUPCommonLOVLink3Schema.exactOptional(),
    shippingMethodLOV: BeezUPCommonLOVLink3Schema.exactOptional(),
  })
  .openapi({ description: 'Indicates the List Of Values related to the marketplace', required: [] })
  .openapi('MarketplaceChannelCatalogLovLinks')

const MarketplaceChannelCatalogSchema = z
  .object({
    apiSettingsStatus: BeezUPCommonApiSettingsStatusSchema,
    beezUPChannelCatalogId: BeezUPCommonChannelCatalogIdSchema,
    beezUPChannelId: BeezUPCommonChannelIdSchema,
    beezUPMarketplaceName: z
      .any()
      .openapi({ description: 'The marketplace name', example: 'ebay FRA' }),
    beezUPStoreId: BeezUPCommonStoreIdSchema,
    beezUPStoreName: z.string().openapi({ description: 'The store name', example: 'My Store 1' }),
    enabled: z
      .boolean()
      .openapi({ description: 'The enabled status of the Channel Catalog', example: 'true' }),
    links: MarketplaceChannelCatalogLinksSchema,
    lovLinks: MarketplaceChannelCatalogLovLinksSchema,
    marketplaceAccountId: BeezUPCommonMarketplaceAccountIdSchema.exactOptional(),
    marketplaceBusinessCode: BeezUPCommonMarketplaceBusinessCodeSchema,
    marketplaceIsoCountryCodeAlpha2: z
      .string()
      .openapi({
        description:
          'The marketplace country iso code alpha 2 (see http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2#Decoding_table for more details)',
        example: 'FR',
      }),
    marketplaceMarketPlaceId: z
      .string()
      .openapi({ description: 'The marketplace identifier in the marketplace', example: '71' }),
    marketplaceMerchantIdentifiers: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description: 'The marketplace merchant identifier list',
        example: { Ebay_PayPalEmailAddress: 'yourEbayId@paypal.com' },
      }),
    marketplaceTechnicalCode: BeezUPCommonMarketplaceTechnicalCodeSchema,
  })
  .openapi({
    description:
      'This object indicates you the association between a channel catalog and a marketplace. The account identifier will be automatically defined based on your marketplace merchant identfier.',
    required: [
      'apiSettingsStatus',
      'enabled',
      'marketplaceTechnicalCode',
      'marketplaceBusinessCode',
      'marketplaceMarketPlaceId',
      'marketplaceIsoCountryCodeAlpha2',
      'beezUPMarketplaceName',
      'beezUPChannelId',
      'beezUPChannelCatalogId',
      'beezUPStoreId',
      'beezUPStoreName',
      'lovLinks',
      'links',
    ],
  })
  .openapi('MarketplaceChannelCatalog')

const MarketplaceChannelCatalogListLinksSchema = z
  .object({ self: LinksGetMarketplaceChannelCatalogsLinkSchema })
  .openapi({ required: ['self'] })
  .openapi('MarketplaceChannelCatalogListLinks')

const MarketplaceChannelCatalogListSchema = z
  .object({
    links: MarketplaceChannelCatalogListLinksSchema,
    marketplaceChannelCatalogs: z
      .array(MarketplaceChannelCatalogSchema)
      .openapi({ description: 'The list of marketplace channel catalog' }),
  })
  .openapi({
    description: 'The marketplace channel catalog list',
    required: ['links', 'marketplaceChannelCatalogs'],
  })
  .openapi('MarketplaceChannelCatalogList')

const MarketplaceOrderStatusSchema = z
  .string()
  .openapi({ description: 'The marketplace order state', example: 'In_progress_3' })
  .openapi('MarketplaceOrderStatus')

const MessageIdSchema = z
  .string()
  .openapi({
    description: "The message identifier. It's a guid.",
    example: 'b0d3faea-f881-439f-ba92-02b1168511ea',
    'x-exclude': true,
  })
  .openapi('MessageId')

const OMReadyMarketplaceBusinessCodeResponseSchema = z
  .array(ListOfValueItemSchema)
  .openapi('OMReadyMarketplaceBusinessCodeResponse')

const PreviousFixPeriodInvoiceProrataInfoSchema = z
  .object({
    amountAfterTax: z
      .float64()
      .exactOptional()
      .openapi({ description: 'The amout after tax of the previous invoice', example: '101.42' }),
    amountToBePaid: z
      .float64()
      .exactOptional()
      .openapi({ description: 'The amount to be payed of the previous invoice', example: '0.0' }),
    computedProrataToBeDeducted: z
      .float64()
      .exactOptional()
      .openapi({ description: 'The prorata amount', example: '194.66' }),
    contractId: z
      .guid()
      .exactOptional()
      .openapi({
        description: 'The contract id related to the previous invoice',
        example: '8a7fbdec-9e71-472e-9974-27d5c1d57cf8',
      }),
    fixedPeriodEndDate: z.iso
      .date()
      .exactOptional()
      .openapi({
        description: 'The fixed end period of the previous invoice',
        example: '2017-05-01',
      }),
    fixedPeriodStartDate: z.iso
      .date()
      .exactOptional()
      .openapi({
        description: 'The fixed start period of the previous invoice',
        example: '2017-04-01',
      }),
    invoiceNumber: z
      .string()
      .exactOptional()
      .openapi({ description: 'The previous invoice number', example: 'B1234' }),
  })
  .openapi({
    description: 'Describe the prorata info based on your previous invoice',
    required: [],
  })
  .openapi('PreviousFixPeriodInvoiceProrataInfo')

const OfferContentSchema = z
  .object({
    contractBillingPeriodInfo: ContractBillingPeriodInfoSchema,
    contractBonusInfo: ContractBonusInfoSchema,
    contractClickInfo: ContractClickInfoSchema,
    contractCommitmentInfo: ContractCommitmentInfoSchema,
    contractDiscountInfo: ContractDiscountInfoSchema,
    contractMoneyInfo: ContractMoneyInfoSchema,
    contractStoreInfo: ContractStoreInfoSchema,
    contractTerminationReason: ContractTerminationReasonSchema.exactOptional(),
    contractTerminationReasonType: ContractTerminationReasonTypeSchema.exactOptional(),
    notifyVatExemption: z
      .boolean()
      .openapi({
        description: 'Internal usage: Indicates if we have to notify you about VAT exemption.',
        example: 'true',
      }),
    previousFixPeriodInvoiceProrataInfo: PreviousFixPeriodInvoiceProrataInfoSchema,
  })
  .openapi({
    required: [
      'previousFixPeriodInvoiceProrataInfo',
      'contractBillingPeriodInfo',
      'contractClickInfo',
      'contractCommitmentInfo',
      'contractDiscountInfo',
      'contractMoneyInfo',
      'contractStoreInfo',
      'contractBonusInfo',
      'notifyVatExemption',
    ],
  })
  .openapi('OfferContent')

const OfferLinksSchema = z
  .object({ createContract: LinksCreateContractLinkSchema.exactOptional() })
  .openapi({ description: 'The different actions you can make on this offer', required: [] })
  .openapi('OfferLinks')

const OfferSchema = z
  .object({
    content: OfferContentSchema.exactOptional(),
    info: BeezUPCommonInfoSummariesSchema.exactOptional(),
    links: OfferLinksSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Offer')

const OfferFunctionalitySchema = z
  .object({
    functionalityCode: z
      .string()
      .openapi({ description: 'The functionality code', example: 'MARKETMANA' }),
    maxValueInteger: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'The max value in integer for this feature in this offer',
        example: '4',
      }),
    text: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A description text of this feature',
        example: 'Marketplace management',
      }),
    unlimited: z
      .boolean()
      .openapi({ description: 'Is this feature is unlimited for this offer?', example: 'false' }),
  })
  .openapi({ required: ['functionalityCode', 'unlimited'] })
  .openapi('OfferFunctionality')

const PerformanceIndicatorFormulaParameterTypeSchema = z
  .enum([
    'Cost',
    'TotalSales',
    'Margin',
    'TotalSalesMinusCost',
    'MarginMinusCost',
    'OrderCount',
    'ClickCount',
    'SoldProductCount',
    'One',
  ])
  .openapi({
    description: 'Indicate on which indicator or value you want to make your formula',
    example: 'Cost',
  })
  .openapi('PerformanceIndicatorFormulaParameterType')

const PerformanceIndicatorFormulaOperatorNameSchema = z
  .enum(['Multiply', 'Divide'])
  .openapi({ example: 'Multiply' })
  .openapi('PerformanceIndicatorFormulaOperatorName')

const PerformanceIndicatorFormulaSchema = z
  .object({
    firstParameter: PerformanceIndicatorFormulaParameterTypeSchema.exactOptional(),
    operatorName: PerformanceIndicatorFormulaOperatorNameSchema.exactOptional(),
    secondParameter: PerformanceIndicatorFormulaParameterTypeSchema.exactOptional(),
    thirdParameter: z
      .int()
      .default(100)
      .exactOptional()
      .openapi({
        description: 'Indicate the value of the third parameter of your formula',
        example: '100',
      }),
  })
  .openapi({
    description: 'The KPI formula',
    example: {
      firstParameter: 'Cost',
      operatorName: 'Multiply',
      secondParamter: 'ROI',
      thirdParameter: '100',
    },
    required: [],
  })
  .openapi('PerformanceIndicatorFormula')

const ReportAdvancedFiltersSchema = z
  .object({
    globalMarginPercent: z
      .int()
      .min(0)
      .max(100)
      .exactOptional()
      .openapi({
        description: "If the margin type is 'Global', indicate the percentage of sale price.",
        example: '10',
      }),
    linkClickToOrderMaxDay: z
      .int()
      .min(0)
      .max(180)
      .default(30)
      .exactOptional()
      .openapi({
        description:
          'If the linkOrderType is OnClickDate, indicate the max day to search the click from the order',
        example: '5',
      }),
    linkClickToOrderType: LinkClickToOrderTypeSchema,
    marginType: MarginTypeSchema,
    onlyDirectSales: z
      .boolean()
      .default(false)
      .openapi({
        description:
          'If true, you will get only direct sales. Otherwise the indirect sales will be included.',
        example: 'true',
      }),
    onlyPaymentValidatedOrders: z
      .boolean()
      .default(false)
      .openapi({
        description:
          'If true, you will get the only the orders with payment validated. Otherwise, you will get all orders validated or not.',
        example: 'true',
      }),
    performanceIndicatorFormula: PerformanceIndicatorFormulaSchema,
  })
  .openapi({
    required: [
      'marginType',
      'linkClickToOrderType',
      'onlyPaymentValidatedOrders',
      'onlyDirectSales',
      'performanceIndicatorFormula',
    ],
  })
  .openapi('ReportAdvancedFilters')

const PerformanceIndicatorFilterOperatorNameSchema = z
  .string()
  .openapi({
    description: 'Indicates the operator you want to apply on this indicator',
    example: 'Equals',
    'x-lov': 'PerformanceIndicatorFilterOperatorName',
  })
  .openapi('PerformanceIndicatorFilterOperatorName')

const PerformanceIndicatorTypeSchema = z
  .enum([
    'ClickCount',
    'Cost',
    'OrderCount',
    'ProductCount',
    'SoldProductCount',
    'DisabledProductCount',
    'EnabledProductCount',
    'TotalSales',
    'Margin',
    'ROI',
    'PerformanceIndicator',
  ])
  .openapi({
    description: 'Indicate on which indicator or value you want to make your formula',
    example: 'Cost',
  })
  .openapi('PerformanceIndicatorType')

const PerformanceIndicatorFilterSchema = z
  .object({
    operatorName: PerformanceIndicatorFilterOperatorNameSchema,
    performanceIndicator: PerformanceIndicatorTypeSchema,
    value: z
      .number()
      .openapi({
        description: 'Indicates the filter value to apply on this indicator',
        example: '10.42',
      }),
  })
  .openapi({ required: ['performanceIndicator', 'operatorName', 'value'] })
  .openapi('PerformanceIndicatorFilter')

const ReportFilterPeriodTypeSchema = z
  .enum([
    'Custom',
    'Yesterday',
    'Last7Days',
    'LastWeek',
    'ThisMonth',
    'Last30Days',
    'LastMonth',
    'Last60Days',
    'Last90Days',
    'Last3Months',
  ])
  .openapi({ description: 'Indicates the period type we want use for the report filter' })
  .openapi('ReportFilterPeriodType')

const ReportFilterCommonParametersSchema = z
  .object({
    advancedFilters: ReportAdvancedFiltersSchema,
    beginPeriodUtcDate: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          "The begin date period you want to get the report. It's required only in case of custom period type !",
        example: '2006-11-20T00:00:00Z',
      }),
    categoryFilter: BeezUPCommonCatalogCategoryFilterSchema.exactOptional(),
    channelId: BeezUPCommonChannelIdSchema.exactOptional(),
    endPeriodUtcDate: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          "The end date period you want to get the report. It's required only in case of custom period type !",
        example: '2006-12-20T00:00:00Z',
      }),
    performanceIndicatorFilters: z
      .array(PerformanceIndicatorFilterSchema)
      .exactOptional()
      .openapi({ example: [{ indicator: 'Cost', operatorName: 'Equals', value: '10' }] }),
    periodType: ReportFilterPeriodTypeSchema,
  })
  .openapi({
    description: 'Contains common filter parameters',
    required: ['periodType', 'advancedFilters'],
  })
  .openapi('ReportFilterCommonParameters')

const OrderByDirectionSchema = z
  .enum(['Ascending', 'Descending'])
  .openapi({ description: 'Indicate which direction to order results by', example: 'Ascending' })
  .openapi('OrderByDirection')

const OrderedReportFilterCommonParametersSchema = ReportFilterCommonParametersSchema.and(
  z
    .object({
      orderBy: PerformanceIndicatorTypeSchema.exactOptional(),
      orderByDirection: OrderByDirectionSchema.exactOptional(),
    })
    .openapi({ required: [] }),
)
  .openapi({ description: 'Contains common filter parameters with Order By functionnality' })
  .openapi('OrderedReportFilterCommonParameters')

const ProductColumnsToDisplaySchema = z
  .array(BeezUPCommonCatalogColumnIdSchema)
  .min(0)
  .max(1)
  .openapi({ example: ['4b460e31-3d1f-4117-922d-b159a64ec1d2'] })
  .openapi('ProductColumnsToDisplay')

const ProductStateFilterSchema = z
  .enum(['All', 'Enabled', 'Disabled'])
  .default('All')
  .openapi({ description: 'You can filter on the product state.', example: 'All' })
  .openapi('ProductStateFilter')

const ReportTypeSchema = z
  .enum(['ByChannel', 'ByCategory', 'ByProduct', 'ByDay'])
  .openapi({ description: 'The report type', example: 'ByProduct' })
  .openapi('ReportType')

const OptimiseAllRequestSchema = OrderedReportFilterCommonParametersSchema.and(
  z
    .object({
      analyticsProductColumnFilters: AnalyticsProductColumnFiltersSchema.exactOptional(),
      productColumnsToDisplay: ProductColumnsToDisplaySchema.exactOptional(),
      productState: ProductStateFilterSchema.exactOptional(),
      reportType: ReportTypeSchema,
    })
    .openapi({
      required: ['beginPeriodUtcDate', 'endPeriodUtcDate', 'advancedFilters', 'reportType'],
    }),
).openapi('OptimiseAllRequest')

const PaginationRequestParametersSchema = z
  .object({
    pageNumber: BeezUPCommonPageNumberSchema.exactOptional(),
    pageSize: BeezUPCommonPageSizeSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PaginationRequestParameters')

const OptimiseRequestSchema = OptimiseAllRequestSchema.and(
  PaginationRequestParametersSchema,
).openapi('OptimiseRequest')

const OrderHeaderLinksSchema = z
  .object({ self: LinksGetOrderLinkSchema })
  .openapi({ required: ['self'] })
  .openapi('OrderHeaderLinks')

const OrderMerchantECommerceSoftwareNameSchema = z
  .string()
  .openapi({ description: 'The e-commerce software name of the merchant', example: 'Prestashop' })
  .openapi('OrderMerchantECommerceSoftwareName')

const OrderMerchantECommerceSoftwareVersionSchema = z
  .string()
  .openapi({ description: 'The e-commece software version of the merchant', example: '123.0.1' })
  .openapi('OrderMerchantECommerceSoftwareVersion')

const ProcessingSchema = z
  .boolean()
  .openapi({
    description:
      'If true, there is currently a harvest or an order change in progress. Otherwise false.',
    example: 'false',
  })
  .openapi('Processing')

const OrderHeaderSchema = z
  .object({
    accountId: AccountIdSchema,
    beezUPOrderId: BeezUPOrderIdSchema,
    beezUPOrderUrl: BeezUPCommonHttpUrlSchema.exactOptional(),
    etag: EtagSchema,
    links: OrderHeaderLinksSchema,
    marketplaceBusinessCode: BeezUPCommonMarketplaceBusinessCodeSchema,
    marketplaceTechnicalCode: BeezUPCommonMarketplaceTechnicalCodeSchema,
    order_Buyer_Name: OrderBuyerNameSchema.exactOptional(),
    order_CurrencyCode: BeezUPCommonCurrencyCodeSchema.exactOptional(),
    order_Invoice_Number: z
      .string()
      .exactOptional()
      .openapi({ description: 'The order invoice number' }),
    order_Invoice_Uri: z.string().exactOptional().openapi({ description: 'The order invoice URI' }),
    order_LastModificationUtcDate: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'The last modification UTC date done by BeezUP of this order',
        example: '2017-04-16T10:30:23Z',
      }),
    order_MarketplaceLastModificationUtcDate: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'The last modification UTC date done by the marketplace on this order',
        example: '2017-04-16T10:25:23Z',
      }),
    order_MarketplaceOrderId: MarketplaceOrderIdSchema,
    order_MerchantECommerceSoftwareName: OrderMerchantECommerceSoftwareNameSchema.exactOptional(),
    order_MerchantECommerceSoftwareVersion:
      OrderMerchantECommerceSoftwareVersionSchema.exactOptional(),
    order_MerchantOrderId: OrderMerchantOrderIdSchema.exactOptional(),
    order_PurchaseUtcDate: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'The purchase date of this order', example: '2017-03-31T21:30:23Z' }),
    order_Status_BeezUPOrderStatus: BeezUPOrderStatusSchema,
    order_Status_MarketplaceOrderStatus: MarketplaceOrderStatusSchema.exactOptional(),
    order_TotalPrice: z
      .number()
      .exactOptional()
      .openapi({
        description:
          'The total price of this order (corresponding to the amount paid by the customer)',
        example: '101.42',
      }),
    processing: ProcessingSchema,
  })
  .openapi({
    description:
      'Describe the basic information related to an order. All properties with the prefix order_ are translated in the list of values /user/lov/OrderMetaInfoOrderDetails',
    required: [
      'marketplaceTechnicalCode',
      'accountId',
      'beezUPOrderId',
      'marketplaceBusinessCode',
      'order_MarketplaceOrderId',
      'order_Status_BeezUPOrderStatus',
      'order_PurchaseUtcDate',
      'order_LastModificationUtcDate',
      'order_MarketplaceLastModificationUtcDate',
      'processing',
      'etag',
      'links',
    ],
  })
  .openapi('OrderHeader')

const OrderLinksSchema = OrderHeaderLinksSchema.and(
  z
    .object({
      clearMerchantInfo: LinksClearMerchantOrderInfoLinkSchema,
      harvest: LinksHarvestOrderLinkSchema,
      history: LinksGetOrderHistoryLinkSchema,
      setMerchantInfo: LinksSetMerchantOrderInfoLinkSchema,
    })
    .openapi({ required: ['self', 'history', 'harvest', 'setMerchantInfo', 'clearMerchantInfo'] }),
).openapi('OrderLinks')

const OrderItemSchema = z
  .object({
    beezUPOrderItemId: z
      .string()
      .openapi({ description: 'The BeezUP identifier of the order Item', example: '1' }),
    orderItem_BeezUPStoreId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The store id in the beezup system related to the order item. This property will help you to match the order to the inventory system.',
        example: '00000000-cceb-4c20-b2c9-000000000000',
      }),
    orderItem_Condition: z
      .string()
      .exactOptional()
      .openapi({ description: 'The merchant product condition of the order item', example: 'New' }),
    orderItem_ImageUrl: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The URL of the image of the order item',
        example: 'http://blabla.com//das6-45.jpg',
      }),
    orderItem_ItemPrice: z
      .number()
      .exactOptional()
      .openapi({ description: 'The price of the order item', example: '6.86' }),
    orderItem_ItemTax: z
      .number()
      .exactOptional()
      .openapi({ description: 'The tax of the order item', example: '0.0' }),
    orderItem_MarketPlaceProductId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The marketplace product identifier of the order item',
        example: '',
      }),
    orderItem_MarketplaceImageUri: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The marketplace image uri',
        example: 'http://beezupblob.com/marketplaceImg.jpg',
      }),
    orderItem_MarketplaceProductUri: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The merchant product uri of the order item',
        example: 'http://beezupblob.com/productLink.xml',
      }),
    orderItem_MerchantImportedProductId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The product id indicated in the catalog importation in BeezUP system for this order item. This property will help you to match the order to the inventory system.',
        example: '73267',
      }),
    orderItem_MerchantImportedProductIdColumnName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The column name for the product id indicated in the catalog importation in BeezUP system related to this order item. This property will help you to match the order to the inventory system.',
        example: 'reference',
      }),
    orderItem_MerchantImportedProductUrl: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The product url indicated in the catalog importation in BeezUP system related to this order item',
        example: 'http://blabla.com/my-folder/73267.html',
      }),
    orderItem_MerchantProductId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The merchant product id of the order item',
        example: 'BlaLdas6-4.5',
      }),
    orderItem_MerchantProductIdColumnName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The column name indicate in the mapping for the product id related to the order item',
        example: 'reference_produit',
      }),
    orderItem_OrderItemType: z
      .string()
      .openapi({ description: 'The order item type of the order item', example: 'Product' }),
    orderItem_Quantity: z
      .number()
      .exactOptional()
      .openapi({ description: 'The quantity of the order item', example: '1.0' }),
    orderItem_Shipping_Price: z
      .number()
      .exactOptional()
      .openapi({ description: 'The shipping price of the order item', example: '0.0' }),
    orderItem_Title: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The title of the order item',
        example: 'bLA acide-plomb 6v-4.5ah 70x48x106mm',
      }),
    orderItem_TotalPrice: z
      .number()
      .exactOptional()
      .openapi({ description: 'The total price of the order item', example: '6.86' }),
    orderItem_gtin: z
      .string()
      .exactOptional()
      .openapi({ description: 'The order item gtin', example: 'gtin_sample' }),
  })
  .openapi({
    description:
      'Describe an order item. All properties with the prefix orderItem_ are translated in the list of values /user/lov/OrderMetaInfoOrderItems',
    required: ['beezUPOrderItemId', 'orderItem_OrderItemType'],
  })
  .openapi('OrderItem')

const OrderTransitionLinksSchema = z
  .array(LinksChangeOrderLinkSchema)
  .openapi({
    description: 'Contains the authorized change actions for an order',
    example: [
      {
        href: '/v2/user/marketplaces/orders/Amazon/1001/00000000000000000000000000000000000000000000000/ShipOrder',
        method: 'POST',
        parameters: {
          'If-Match': {
            in: 'header',
            required: true,
            type: 'string',
            value: '"ca071a4580129f932a03971968ffef69"',
          },
          request: {
            in: 'body',
            properties: {
              order_Shipping_CarrierName: {
                lovLink: { href: '/v2/user/PriceMinisterCarrierName' },
                lovRequired: 'true',
                required: true,
                type: 'string',
              },
              order_Shipping_FulfillmentDate: { required: true, type: 'date-time' },
              order_Shipping_Method: {
                lovLink: { href: '/v2/user/ShippingMethod_PriceMinister' },
                lovRequired: 'false',
                required: true,
                type: 'string',
              },
              order_Shipping_ShipperTrackingNumber: { required: true, type: 'string' },
            },
            schema: 'changeOrderRequest',
            type: 'object',
          },
          testMode: { in: 'query', required: false, type: 'boolean', value: 'false' },
          userName: { in: 'query', required: true, type: 'string' },
        },
        rel: 'ShipOrder',
        templated: 'true',
      },
      {
        href: '/v2/user/marketplaces/orders/Amazon/1001/00000000000000000000000000000000000000000000000/CancelOrder',
        method: 'POST',
        parameters: {
          'If-Match': {
            in: 'header',
            required: true,
            type: 'string',
            value: '"ca071a4580129f932a03971968ffef69"',
          },
          request: {
            in: 'body',
            properties: { order_Cancel_Reason: { required: true, type: 'string' } },
            schema: 'changeOrderRequest',
            type: 'object',
          },
          testMode: { in: 'query', required: false, type: 'boolean', value: 'false' },
          userName: { in: 'query', required: true, type: 'string' },
        },
        rel: 'CancelOrder',
        templated: 'true',
      },
    ],
  })
  .openapi('OrderTransitionLinks')

const OrderSchema = OrderHeaderSchema.and(
  z
    .object({
      links: OrderLinksSchema,
      orderItems: z.array(OrderItemSchema),
      order_Buyer_AddressCity: z
        .string()
        .exactOptional()
        .openapi({ description: 'The Buyer address city of this order', example: 'Marseille' }),
      order_Buyer_AddressCountryIsoCodeAlpha2: z
        .string()
        .exactOptional()
        .openapi({
          description:
            'The Buyer address country iso code alpha 2 (see http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2#/decoding_table for more details)',
          example: 'FR',
        }),
      order_Buyer_AddressCountryName: z
        .string()
        .exactOptional()
        .openapi({ description: 'The Buyer address country name', example: 'France' }),
      order_Buyer_AddressLine1: z
        .string()
        .exactOptional()
        .openapi({
          description: 'The Buyer address line 1 of this order',
          example: '5 rue amélie',
        }),
      order_Buyer_AddressLine2: z
        .string()
        .exactOptional()
        .openapi({ description: 'The Buyer address line 2 of this order', example: 'BDR' }),
      order_Buyer_AddressLine3: z
        .string()
        .exactOptional()
        .openapi({ description: 'The Buyer address line 3 of this order', example: 'RDC' }),
      order_Buyer_AddressPostalCode: z
        .string()
        .exactOptional()
        .openapi({ description: 'The Buyer address postal code of this order', example: '13014' }),
      order_Buyer_AddressStateOrRegion: z
        .string()
        .exactOptional()
        .openapi({
          description: 'The Buyer address state or region of this order',
          example: 'BDR',
        }),
      order_Buyer_Civility: z
        .string()
        .exactOptional()
        .openapi({ description: 'The buyer civility for this order', example: 'Marseille' }),
      order_Buyer_CompanyName: z
        .string()
        .exactOptional()
        .openapi({ description: 'The buyer company name for this order', example: 'Marsillia' }),
      order_Buyer_Email: z
        .string()
        .exactOptional()
        .openapi({
          description: 'The email of the buyer for this order',
          example: 'client_000000@manomano.fr',
        }),
      order_Buyer_FirstName: z
        .string()
        .exactOptional()
        .openapi({ description: 'Order Buyer first name', example: 'Monroe' }),
      order_Buyer_Identifier: z
        .string()
        .exactOptional()
        .openapi({ description: 'The buyer identifier for this order', example: '1234567890' }),
      order_Buyer_LastName: z
        .string()
        .exactOptional()
        .openapi({ description: 'Order Buyer last name', example: 'Monroe' }),
      order_Buyer_MobilePhone: z
        .string()
        .exactOptional()
        .openapi({
          description: 'The mobile phone number of the buyer for this order',
          example: '+33000000042',
        }),
      order_Buyer_Phone: z
        .string()
        .exactOptional()
        .openapi({
          description: 'The phone number of the buyer for this order',
          example: '+33000000101',
        }),
      order_Comment: z
        .string()
        .exactOptional()
        .openapi({
          description: 'The comment associated to this order',
          example: 'This is a comment',
        }),
      order_FulfilledBy: z
        .string()
        .exactOptional()
        .openapi({ description: 'The order FulfilledBy' }),
      order_IsBusiness: z
        .boolean()
        .exactOptional()
        .openapi({ description: 'The order IsBusiness' }),
      order_IsPrime: z
        .boolean()
        .exactOptional()
        .openapi({
          description: 'Indicates if the order is considered as Prime (only on Amazon)',
          example: 'true',
        }),
      order_MarketPlaceChannel: z
        .string()
        .exactOptional()
        .openapi({
          description: 'Useful to identify the origin of the order. For example in Amazon.',
          example: 'Amazon France',
        }),
      order_OrderItemsSourceUri: z
        .url()
        .exactOptional()
        .openapi({
          description:
            'Technical information: The url to the source of this order items. We received this information from the marketplace.\n',
          example: 'http://beezupblob.com/orderItems.xml',
        }),
      order_OrderSourceUri: z
        .url()
        .exactOptional()
        .openapi({
          description:
            'Technical information: The url to the source of this order. We received this information from the marketplace.\n',
          example: 'http://beezupblob.com/order.xml',
        }),
      order_PayingUtcDate: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          description: 'The UTC date of the payment of this order',
          example: '2017-04-01T13:22:01Z',
        }),
      order_PaymentMethod: z
        .string()
        .exactOptional()
        .openapi({ description: 'The payment method of this order', example: '1 / 1X' }),
      order_Shipping_AddressCity: z
        .string()
        .exactOptional()
        .openapi({ description: 'The shipping address city of this order', example: 'Marseille' }),
      order_Shipping_AddressCountryIsoCodeAlpha2: z
        .string()
        .exactOptional()
        .openapi({
          description:
            'The shipping address country iso code alpha 2 (see http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2#/decoding_table for more details)',
          example: 'FR',
        }),
      order_Shipping_AddressCountryName: z
        .string()
        .exactOptional()
        .openapi({ description: 'The shipping address country name', example: 'France' }),
      order_Shipping_AddressLine1: z
        .string()
        .exactOptional()
        .openapi({
          description: 'The shipping address line 1 of this order',
          example: '5 rue amélie',
        }),
      order_Shipping_AddressLine2: z
        .string()
        .exactOptional()
        .openapi({ description: 'The shipping address line 2 of this order', example: 'BDR' }),
      order_Shipping_AddressLine3: z
        .string()
        .exactOptional()
        .openapi({ description: 'The shipping address line 3 of this order', example: 'RDC' }),
      order_Shipping_AddressName: z
        .string()
        .exactOptional()
        .openapi({
          description: 'The name of the person in the shipping address for this order',
          example: 'Jacques BAUREGARD',
        }),
      order_Shipping_AddressPostalCode: z
        .string()
        .exactOptional()
        .openapi({
          description: 'The shipping address postal code of this order',
          example: '13014',
        }),
      order_Shipping_AddressStateOrRegion: z
        .string()
        .exactOptional()
        .openapi({
          description: 'The shipping address state or region of this order',
          example: 'BDR',
        }),
      order_Shipping_Civility: z
        .string()
        .exactOptional()
        .openapi({
          description: 'The civility of the person in the shipping address for this order',
          example: 'MRS',
        }),
      order_Shipping_CompanyName: z
        .string()
        .exactOptional()
        .openapi({
          description: 'The company name of the shipping address for this order',
          example: 'My Company',
        }),
      order_Shipping_EarliestShipUtcDate: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          description: 'The UTC date of the earliest ship for this order',
          example: '2017-04-02T21:30:00Z',
        }),
      order_Shipping_Email: z
        .string()
        .exactOptional()
        .openapi({
          description: 'The email of the person in the shipping address for this order',
          example: 'client_000000@manomano.fr',
        }),
      order_Shipping_FirstName: z
        .string()
        .exactOptional()
        .openapi({ description: 'Order Shipping first name', example: 'Monroe' }),
      order_Shipping_LastName: z
        .string()
        .exactOptional()
        .openapi({ description: 'Order Shipping last name', example: 'Monroe' }),
      order_Shipping_LatestShipUtcDate: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          description: 'The UTC date of the latest ship for this order',
          example: '2017-04-30T21:30:00Z',
        }),
      order_Shipping_Method: z
        .string()
        .exactOptional()
        .openapi({ description: 'The shipping method of this order', example: 'DPD Domicile' }),
      order_Shipping_MobilePhone: z
        .string()
        .exactOptional()
        .openapi({
          description:
            'The mobile phone number of the person in the shipping address for this order',
          example: '+33000000042',
        }),
      order_Shipping_Phone: z
        .string()
        .exactOptional()
        .openapi({
          description: 'The phone number of the person in the shipping address for this order',
          example: '+33000000041',
        }),
      order_Shipping_Price: z
        .number()
        .exactOptional()
        .openapi({ description: 'The shipping price of this order', example: '6.9' }),
      order_Shipping_ShippingTax: z
        .number()
        .exactOptional()
        .openapi({ description: 'The shipping tax for this order', example: '0.0' }),
      order_TotalCommission: z
        .number()
        .exactOptional()
        .openapi({ description: 'The total commission of this order', example: '0.0' }),
      order_TotalTax: z
        .number()
        .exactOptional()
        .openapi({ description: 'The total tax of this order', example: '0.0' }),
      transitionLinks: OrderTransitionLinksSchema,
    })
    .openapi({
      description:
        'Describe in details all informations related to an order. All properties with the prefix order_ are translated in the list of values /user/lov/OrderMetaInfoOrderDetails.',
      required: [
        'marketplaceTechnicalCode',
        'accountId',
        'beezUPOrderId',
        'marketplaceBusinessCode',
        'order_MarketplaceOrderId',
        'order_Status_BeezUPOrderStatus',
        'order_PurchaseUtcDate',
        'order_LastModificationUtcDate',
        'order_MarketplaceLastModificationUtcDate',
        'processing',
        'etag',
        'links',
        'orderItems',
        'transitionLinks',
      ],
    }),
).openapi('Order')

const OrderChangeTypeSchema = z
  .string()
  .openapi({
    description: 'The business operation type that can be done on an order',
    'x-lov': 'OrderChangeBusinessOperationType',
  })
  .openapi('OrderChangeType')

const OrderExportationReportingProcessingStatusSchema = z
  .enum(['None', 'InProgress', 'Done', 'Failed', 'AlreadyInProgress', 'Aborted', 'Suspended'])
  .openapi({ example: 'Done' })
  .openapi('OrderExportationReportingProcessingStatus')

const OrderExportationReportingSchema = z
  .object({
    abortionUtcDate: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ example: '2017-04-01T13:10:12Z' }),
    beginUtcDate: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ example: '2017-04-01T13:10:12Z' }),
    blobNameUri: z
      .string()
      .exactOptional()
      .openapi({ example: 'http://beezuporder2.blob.com/yourReport.csv' }),
    endUtcDate: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ example: '2017-04-01T15:10:12Z' }),
    enqueuedUtcDate: z.iso.datetime({ offset: true }).openapi({ example: '2017-04-01T13:09:12Z' }),
    errorMessage: z.string().exactOptional().openapi({ example: 'You have an error here' }),
    executionUUID: z.uuid().openapi({ example: '00000000000000000000000000000000000000000000000' }),
    expirationUtcDate: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ example: '2017-04-01T13:39:12Z' }),
    failureUtcDate: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ example: '2017-04-01T13:39:12Z' }),
    ipAddress: z.string().openapi({ example: '127.0.0.1' }),
    jsonCriteria: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Raw representation of the JSON',
        example:
          '{"StartDate:"2016-09-30T22:00:00Z","EndDate:"2016-10-30T23:00:00Z","OrderListingFilterDateSearchType:0,"MarketPlaceOrderIds:null,"BeezUPOrderStatusNames:null,"ResultByPage:20,"MerchantOrderIds:null,"PageIndex:0,"MarketPlaceTechnicalCodes:["PriceMinister","Amazon","CDiscount","Mirakl"],"MarketPlaceBusinessCodes:["PRICEMINISTER"],"AccountIds:[1234,987],"StoreIds:["00000000-0000-0000-0000-00000000007c"],"BuyerFullName:null}',
      }),
    lastUpdateUtcDate: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ example: '2017-04-01T15:10:12Z' }),
    orderCount: z.int32().exactOptional().openapi({ example: '1024' }),
    processingStatus: OrderExportationReportingProcessingStatusSchema,
    remainingOrderCount: z.int32().exactOptional().openapi({ example: '0' }),
    resumedUtcDate: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ example: '2017-04-01T13:39:12Z' }),
    sourceType: SourceTypeSchema,
    sourceUserId: BeezUPCommonUserIdSchema.exactOptional(),
    sourceUserName: z.string().openapi({ example: 'Marilyn monroe' }),
    suspendedUtcDate: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ example: '2017-04-01T13:39:12Z' }),
    timeoutDuration: z.string().exactOptional().openapi({ example: '00:30:00' }),
    warningMessage: z.string().exactOptional().openapi({ example: 'You have a warning here' }),
  })
  .openapi({
    description: 'Represent the reporting of the Order report exportations',
    required: [
      'enqueuedUtcDate',
      'executionUUID',
      'ipAddress',
      'processingStatus',
      'sourceType',
      'sourceUserName',
    ],
  })
  .openapi('OrderExportationReporting')

const OrderExportationsLinksSchema = z
  .object({ self: LinksGetOrderExportationsLinkSchema })
  .openapi({ required: ['self'] })
  .openapi('OrderExportationsLinks')

const OrderExportationsSchema = z
  .object({
    exportations: z.array(OrderExportationReportingSchema),
    links: OrderExportationsLinksSchema,
    paginationResult: BeezUPCommonPaginationResultSchema.exactOptional(),
  })
  .openapi({
    description:
      'The list of Order report exportations.\\\nThe paginationResult properties can be null if the list is empty.\n',
    required: ['links', 'exportations'],
  })
  .openapi('OrderExportations')

const OrderHarvestErrorValueSchema = z
  .object({ errorMessage: z.string(), technicalCodePropertyName: z.string() })
  .openapi({ required: ['technicalCodePropertyName', 'errorMessage'] })
  .openapi('OrderHarvestErrorValue')

const OrderHarvestErrorsSchema = z
  .record(z.string(), OrderHarvestErrorValueSchema)
  .openapi({ description: 'The key is the OrderMetaInfo.' })
  .openapi('OrderHarvestErrors')

const OrderHeaderWithLinksSchema = OrderHeaderSchema.and(
  z.object({ links: OrderHeaderLinksSchema }).openapi({ required: ['links'] }),
).openapi('OrderHeaderWithLinks')

const OrderHistorySchema = z
  .object({
    changeOrderReportings: z
      .array(ChangeOrderReportingSchema)
      .exactOptional()
      .openapi({ description: 'The list of change order operation' }),
    harvestOrderReportings: z.array(HarvestOrderReportingSchema).exactOptional(),
    lastModificationUtcDate: z.iso.datetime({ offset: true }).exactOptional(),
  })
  .openapi({ description: 'Describe the history related to an order', required: [] })
  .openapi('OrderHistory')

const OrderIndexLinksSchema = z
  .object({
    autoTransitions: LinksGetAutomaticTransitionsLinkSchema,
    clearMerchantInfos: LinksClearMerchantOrderInfoListLinkSchema,
    export: LinksExportOrdersLinkSchema,
    exportations: LinksGetOrderExportationsLinkSchema.exactOptional(),
    harvest: LinksHarvestAllLinkSchema,
    lightOrders: LinksGetOrderListLightLinkSchema,
    orders: LinksGetOrderListFullLinkSchema,
    self: LinksGetOrderIndexLinkSchema,
    setMerchantInfos: LinksSetMerchantOrderInfoListLinkSchema,
    status: LinksGetMarketplaceAccountsSynchronizationLinkSchema,
  })
  .openapi({
    description: 'Gives you all entry point operations you can do on this API',
    required: [
      'self',
      'status',
      'harvest',
      'setMerchantInfos',
      'clearMerchantInfos',
      'export',
      'autoTransitions',
      'orders',
      'lightOrders',
    ],
  })
  .openapi('OrderIndexLinks')

const OrderIndexLovLinksSchema = z
  .object({
    orderChangeBusinessOperationType: BeezUPCommonLOVLink3Schema,
    orderProperty: BeezUPCommonLOVLink3Schema,
    orderPropertyPosted: BeezUPCommonLOVLink3Schema,
    orderState: BeezUPCommonLOVLink3Schema,
  })
  .openapi({
    description:
      'Gives you all the LOV to get the translations realated to operation name, codes, property names and statuses.',
    required: [
      'orderChangeBusinessOperationType',
      'orderState',
      'orderProperty',
      'orderPropertyPosted',
    ],
  })
  .openapi('OrderIndexLovLinks')

const OrderIndexSchema = z
  .object({ links: OrderIndexLinksSchema, lovLinks: OrderIndexLovLinksSchema })
  .openapi({ required: ['links', 'lovLinks'] })
  .openapi('OrderIndex')

const OrderInvoiceDesignSettingsSchema = z
  .object({
    footerContentHtml: FooterContentHtmlSchema.exactOptional(),
    headerContentHtml: HeaderContentHtmlSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('OrderInvoiceDesignSettings')

const OrderListDateSearchTypeSchema = z
  .enum(['Modification', 'Purchase', 'MarketPlaceModification'])
  .default('Modification')
  .openapi({ description: 'Indicates on which date you want to make the filter' })
  .openapi('OrderListDateSearchType')

const OrderListLinksSchema = z
  .object({
    clearMerchantInfos: LinksClearMerchantOrderInfoListLinkSchema,
    export: LinksExportOrdersLinkSchema,
    harvest: LinksHarvestAllLinkSchema,
    setMerchantInfos: LinksSetMerchantOrderInfoListLinkSchema,
    status: LinksGetMarketplaceAccountsSynchronizationLinkSchema,
  })
  .openapi({
    description: 'The list of actions you can do from the order list response',
    required: ['harvest', 'setMerchantInfos', 'clearMerchantInfos', 'export', 'status'],
  })
  .openapi('OrderListLinks')

const OrderListFullLinksSchema = OrderListLinksSchema.and(
  z
    .object({ self: LinksGetOrderListFullLinkSchema })
    .openapi({
      required: ['self', 'harvest', 'setMerchantInfos', 'clearMerchantInfos', 'export', 'status'],
    }),
).openapi('OrderListFullLinks')

const OrderListFullSchema = z
  .object({
    links: OrderListFullLinksSchema,
    orders: z.array(OrderSchema),
    paginationResult: BeezUPCommonPaginationResultSchema.exactOptional(),
  })
  .openapi({
    description:
      'The order list with all information we have from the orders and its items.\\\nThe paginationResult properties can be null if the list is empty.\n',
    required: ['orders', 'links'],
  })
  .openapi('OrderListFull')

const OrderWithLinksSchema = OrderSchema.and(
  z
    .object({ links: OrderLinksSchema, transitionLinks: OrderTransitionLinksSchema })
    .openapi({ required: ['links', 'transitionLinks'] }),
).openapi('OrderWithLinks')

const PaginationResultLinksSchema = z
  .object({
    first: Link3Schema,
    last: Link3Schema,
    next: Link3Schema.exactOptional(),
    previous: Link3Schema.exactOptional(),
  })
  .openapi({
    description: "The navigation links 'first', 'last', 'next', 'previous'",
    required: ['first', 'last'],
    'x-exclude': true,
  })
  .openapi('PaginationResultLinks')

const PaginationResultSchema = z
  .object({
    entryCount: z
      .int()
      .min(0)
      .openapi({ description: 'The entry count currently returned', example: '25' }),
    links: PaginationResultLinksSchema,
    pageCount: z.int().min(0).openapi({ description: 'The page count', example: '38' }),
    totalEntryCount: z
      .int()
      .min(0)
      .openapi({ description: 'The total entry count', example: '943' }),
  })
  .openapi({
    example: {
      entryCount: '25',
      links: {
        first: {
          href: '/merchant/orders/v1/list/full',
          method: 'POST',
          parameters: [
            {
              in: 'body',
              name: 'request',
              schema: 'orderListRequest',
              type: 'object',
              value: {
                beginPeriodUtcDate: '2014-08-25T07:32:31.584Z',
                endPeriodUtcDate: '2014-09-24T07:32:31.584Z',
                pageNumber: '1',
                pageSize: '25',
              },
            },
          ],
        },
        last: {
          href: '/merchant/orders/v1/list/full',
          method: 'POST',
          parameters: [
            {
              in: 'body',
              name: 'request',
              schema: 'orderListRequest',
              type: 'object',
              value: {
                beginPeriodUtcDate: '2014-08-25T07:32:31.584Z',
                endPeriodUtcDate: '2014-09-24T07:32:31.584Z',
                pageNumber: '38',
                pageSize: '25',
              },
            },
          ],
        },
        next: {
          href: '/merchant/orders/v1/list/full',
          method: 'POST',
          parameters: [
            {
              in: 'body',
              name: 'request',
              schema: 'orderListRequest',
              type: 'object',
              value: {
                beginPeriodUtcDate: '2014-08-25T07:32:31.584Z',
                endPeriodUtcDate: '2014-09-24T07:32:31.584Z',
                pageNumber: '2',
                pageSize: '25',
              },
            },
          ],
        },
      },
      pageCount: '38',
      totalEntryCount: '943',
    },
    required: ['entryCount', 'pageCount', 'totalEntryCount', 'links'],
    'x-exclude': true,
  })
  .openapi('PaginationResult')

const OrderListFullWithLinksSchema = z
  .object({
    links: OrderListFullLinksSchema,
    orders: z.array(OrderWithLinksSchema),
    paginationResult: PaginationResultSchema,
  })
  .openapi({ required: ['paginationResult', 'orders', 'links'] })
  .openapi('OrderListFullWithLinks')

const OrderListLightLinksSchema = OrderListLinksSchema.and(
  z
    .object({ self: LinksGetOrderListLightLinkSchema })
    .openapi({
      required: ['self', 'harvest', 'setMerchantInfos', 'clearMerchantInfos', 'export', 'status'],
    }),
).openapi('OrderListLightLinks')

const OrderListLightSchema = z
  .object({
    links: OrderListLightLinksSchema,
    orders: z.array(OrderHeaderSchema),
    paginationResult: BeezUPCommonPaginationResultSchema.exactOptional(),
  })
  .openapi({
    description:
      'The order list with minimum information we have from the orders.\\\nThe paginationResult properties can be null if the list is empty.\n',
    required: ['orders', 'links'],
  })
  .openapi('OrderListLight')

const OrderListLightWithLinksSchema = z
  .object({
    links: OrderListLightLinksSchema,
    orders: z.array(OrderHeaderWithLinksSchema),
    paginationResult: PaginationResultSchema,
  })
  .openapi({ required: ['paginationResult', 'orders', 'links'] })
  .openapi('OrderListLightWithLinks')

const PageNumberSchema = z
  .int32()
  .min(1)
  .default(1)
  .openapi({ description: 'Indicates the page number', example: '1' })
  .openapi('PageNumber')

const PageSizeSchema = z
  .int32()
  .min(25)
  .max(100)
  .default(100)
  .openapi({ description: 'Indicate the order count per page', example: '100' })
  .openapi('PageSize')

const OrderListRequestSchema = OrderListRequestWithoutPaginationSchema.and(
  z
    .object({ pageNumber: PageNumberSchema, pageSize: PageSizeSchema })
    .openapi({ required: ['beginPeriodUtcDate', 'endPeriodUtcDate', 'pageSize', 'pageNumber'] }),
).openapi('OrderListRequest')

const PreviewOrderInvoiceRequestSchema = z
  .object({ invoiceSequenceNumber: InvoiceSequenceNumberSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('PreviewOrderInvoiceRequest')

const PreviewOrderInvoiceResponseSchema = z
  .object({ invoiceHtmlContent: InvoiceContentHtmlSchema })
  .openapi({ required: ['invoiceHtmlContent'] })
  .openapi('PreviewOrderInvoiceResponse')

const ProductSchema = z
  .object({
    categoryId: BeezUPCommonCatalogCategoryIdSchema,
    exists: z
      .boolean()
      .openapi({
        description: 'Indicates if the product exists in the current catalog',
        example: 'true',
      }),
    productId: BeezUPCommonProductIdSchema,
    values: ProductValuesSchema,
  })
  .openapi({
    description: 'Represent a catalog product',
    required: ['productId', 'categoryId', 'values', 'exists'],
  })
  .openapi('Product')

const ProductListSchema = z
  .object({
    paginationResult: BeezUPCommonPaginationResultSchema,
    products: z.array(ProductSchema),
  })
  .openapi({ required: ['paginationResult', 'products'] })
  .openapi('ProductList')

const ProductOverridesSchema = z
  .record(z.string(), z.string())
  .openapi({
    description: 'The key is the channel column identifier',
    example: {
      '0EA21509-1141-57BD-B679-371BC98B2ADA': 'http://www.blalbla.nl/images/cache/ldldld.jpg',
      '2A77749D-0AAB-5245-89B5-6A1A4E06DACA': 'http://www.blalbla.nl/images/cache/dldldl.jpg',
      '54B3B3CB-5CA5-5471-9DAE-5310C032059A': 'http://www.blalbla.nl/images/cache/dlmdl.jpg',
      '57F70E81-E4F2-5034-BC65-E1D5C48EBEDA': 'Sony bravia',
      '8a76f06a-fefc-4c0d-bcfe-b210f1482977': '3563',
      'B7B79A0B-A8DE-54DA-964C-E2704DF3738A': 'SHBELNL56',
    },
  })
  .openapi('ProductOverrides')

const ProductOverridesCopyResponseSchema = z
  .record(z.string(), z.string())
  .openapi({
    description: 'Product overrides compatibilites list',
    example: {
      '0EA21509-1141-57BD-B679-371BC98B2ADA': 'http://www.blalbla.nl/images/cache/ldldld.jpg',
      '2A77749D-0AAB-5245-89B5-6A1A4E06DACA': 'http://www.blalbla.nl/images/cache/dldldl.jpg',
      '54B3B3CB-5CA5-5471-9DAE-5310C032059A': 'http://www.blalbla.nl/images/cache/dlmdl.jpg',
      '57F70E81-E4F2-5034-BC65-E1D5C48EBEDA': 'Sony bravia',
      '8a76f06a-fefc-4c0d-bcfe-b210f1482977': '3563',
      'B7B79A0B-A8DE-54DA-964C-E2704DF3738A': 'SHBELNL56',
    },
  })
  .openapi('ProductOverridesCopyResponse')

const ProductSampleSchema = z
  .object({ productValues: ProductValuesSchema.exactOptional() })
  .openapi({ description: 'Describe a product sample', required: [] })
  .openapi('ProductSample')

const ProfilePictureSelectedSchema = z
  .enum(['gravatar', 'initials', 'uploaded'])
  .openapi({
    description:
      'Your profile picture choice about usage of gravatar picture, initials picture or uploaded picture.',
    example: 'initials',
  })
  .openapi('ProfilePictureSelected')

const ProfilePictureInfoSchema = z
  .object({
    profilePictureSelected: ProfilePictureSelectedSchema,
    profilePictureUrl: ProfilePictureUrlSchema.exactOptional(),
  })
  .openapi({ required: ['profilePictureSelected'] })
  .openapi('ProfilePictureInfo')

const ProfilePictureInfoResponseLinksSchema = z
  .object({
    save: LinksSaveProfilePictureInfoLinkSchema,
    self: LinksGetProfilePictureInfoLinkSchema,
  })
  .openapi({ required: ['self', 'save'] })
  .openapi('ProfilePictureInfoResponseLinks')

const ProfilePictureInfoWithDefaultSchema = ProfilePictureInfoSchema.and(
  z
    .object({
      gravatarProfilePictureUrl: GravatarProfilePictureUrlSchema,
      initialsProfilePictureUrl: InitialsProfilePictureUrlSchema,
    })
    .openapi({
      required: [
        'profilePictureSelected',
        'initialsProfilePictureUrl',
        'gravatarProfilePictureUrl',
      ],
    }),
).openapi('ProfilePictureInfoWithDefault')

const ProfilePictureInfoResponseSchema = z
  .object({
    links: ProfilePictureInfoResponseLinksSchema,
    profilePictureInfo: ProfilePictureInfoWithDefaultSchema,
  })
  .openapi({ required: ['profilePictureInfo', 'links'] })
  .openapi('ProfilePictureInfoResponse')

const PublicChannelIndexSchema = z
  .object({
    channels: z
      .record(z.string(), LinksGetChannelsLinkSchema)
      .exactOptional()
      .openapi({
        description: 'The key is the country iso code',
        example: {
          DEU: { href: '/v2/public/channels/DEU', method: 'GET' },
          ESP: { href: "/v2/public/channels/ESP'", method: 'GET' },
          FRA: { href: '/v2/public/channels/FRA', method: 'GET' },
          GBR: { href: '/v2/public/channels/GBR', method: 'GET' },
          ITA: { href: '/v2/public/channels/ITA', method: 'GET' },
        },
      }),
    links: z
      .object({
        channelCountryLov: LinksGetPublicListOfValuesLinkSchema.exactOptional(),
        channelTypeLov: LinksGetPublicListOfValuesLinkSchema.exactOptional(),
        sectorLov: LinksGetPublicListOfValuesLinkSchema.exactOptional(),
        self: LinksGetChannelsIndexLinkSchema.exactOptional(),
      })
      .exactOptional()
      .openapi({
        example: {
          channelCountryLov: { href: '/v2/public/lov/www_ChannelCountry', method: 'GET' },
          channelTypeLov: { href: '/v2/public/lov/ChannelType', method: 'GET' },
          sectorLov: { href: '/v2/public/lov/ParamSector', method: 'GET' },
          self: { href: '/v2/public/channels', method: 'GET' },
        },
        required: [],
      }),
  })
  .openapi({ required: [] })
  .openapi('PublicChannelIndex')

const PublicChannelInfoSchema = z
  .object({
    homeUrl: z
      .url()
      .openapi({ description: 'The channel home url', example: 'http://www.amazon.fr' }),
    logoUrl: z
      .url()
      .openapi({
        description: 'The channel logo url',
        example: 'http://beezupcdn.blob.core.windows.net/comparators/Amazon%2520Direct%2520FRA.png',
      }),
    name: z.string().openapi({ description: 'The channel name', example: 'Amazon Direct FRA' }),
    sectors: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'The sector list related to a channel',
        example: ['BRICOLAGE', 'INFO', 'GENERALIST'],
      }),
    types: z
      .array(z.string())
      .openapi({ description: 'The type list related to a channel', example: ['Marketplace'] }),
  })
  .openapi({ required: ['name', 'homeUrl', 'logoUrl', 'types'] })
  .openapi('PublicChannelInfo')

const PublicChannelInfoListSchema = z
  .object({
    channels: z.array(PublicChannelInfoSchema).exactOptional(),
    links: z
      .object({ self: LinksGetChannelsLinkSchema.exactOptional() })
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({ required: [] })
  .openapi('PublicChannelInfoList')

const PublicListOfValuesResponseLinksSchema = z
  .object({ self: LinksGetPublicListOfValuesLinkSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('PublicListOfValuesResponseLinks')

const PublicListOfValuesResponseSchema = z
  .object({
    items: z.array(BeezUPCommonListOfValueItemSchema).exactOptional(),
    links: PublicListOfValuesResponseLinksSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PublicListOfValuesResponse')

const PublicLovLinksSchema = z
  .record(z.string(), LinksGetPublicListOfValuesLinkSchema)
  .openapi({ description: 'List of lov link. The key is the list name.' })
  .openapi('PublicLovLinks')

const PublicLovIndexLinksSchema = z
  .object({
    lists: PublicLovLinksSchema.exactOptional(),
    self: LinksGetPublicLovIndexLinkSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PublicLovIndexLinks')

const PublicLovIndexSchema = z
  .object({ links: PublicLovIndexLinksSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('PublicLovIndex')

const PublishCatalogToMarketplaceRequestSchema = z
  .object({
    feedType: FeedTypeSchema,
    publicationStrategyKind: PublicationStrategyKindSchema,
    withUnpublish: z
      .boolean()
      .openapi({
        description:
          'In full publication strategy kind, for some marktetplace, you can ask to unpublish or not your existing feeds on the markeptlace absent from your exported catalog.',
      }),
  })
  .openapi({
    description: 'Publish the catalog to the marketplace',
    required: ['feedType', 'publicationStrategyKind', 'withUnpublish'],
  })
  .openapi('PublishCatalogToMarketplaceRequest')

const RandomProductListSchema = z
  .object({ products: z.array(ProductSchema) })
  .openapi({ required: ['products'] })
  .openapi('RandomProductList')

const RegisterRequestSchema = z
  .object({
    commercialOwnerUserId: z
      .uuid()
      .exactOptional()
      .openapi({
        description: 'The user id of your commercial in BeezUP.',
        example: '47ea14ab-195d-4f9a-a24e-32c329ee40f6',
      }),
    cultureName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Can be null. Default: en-GB. The culture name you want to use. FYI. \\\nThe email activation will use this culture.\n',
        example: 'en-GB',
      }),
    email: z
      .string()
      .openapi({
        description: 'Your email. We refuse disposable email.',
        example: 'myemail@mycompany.com',
      }),
    password: z
      .string()
      .openapi({
        description:
          'The password you want to use for your new account. \\\nThe password length must be greater or equals to 6 and lower or equals to 128. \\\nThe password must contains at least one number and one special character\n',
        example: 'I@mW0nder$Full',
      }),
  })
  .openapi({ required: ['email', 'password'] })
  .openapi('RegisterRequest')

const ReportByCategoryLinksSchema = z
  .object({
    disableProducts: LinksOptimiseByCategoryLinkSchema.exactOptional(),
    enableProducts: LinksOptimiseByCategoryLinkSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ReportByCategoryLinks')

const ReportByCategorySchema = z
  .object({
    allProductCount: z
      .int()
      .openapi({
        description:
          'The product count for this category. This includes all the products that have been imported and can still have associated clicks and orders.',
        example: '101',
      }),
    catalogCategoryId: BeezUPCommonCatalogCategoryIdSchema,
    catalogCategoryPath: BeezUPCommonCatalogCategoryPathSchema.exactOptional(),
    catalogProductCount: z
      .int()
      .openapi({
        description:
          'The catalog product count for this category. This includes all products that are still present in your imported catalog.',
        example: '101',
      }),
    clickCount: z
      .int()
      .openapi({ description: 'The click count for this category', example: '1001' }),
    cost: z.number().openapi({ description: 'The cost for this category', example: '12.42' }),
    enabledProductCount: z
      .int()
      .openapi({
        description:
          'The enabled product count for this category. This includes all products that are still present in your imported catalog and have not been disabled via the optimisation feature.',
        example: '101',
      }),
    links: ReportByCategoryLinksSchema,
    margin: z
      .number()
      .exactOptional()
      .openapi({ description: 'The margin for this category', example: '3.33' }),
    orderCount: z
      .int()
      .openapi({ description: 'The order count for this category', example: '25' }),
    performanceIndicator: z
      .number()
      .openapi({
        description:
          'The performance indicator based on the performance indicator formula indicated in the request for this category',
        example: '25.33',
      }),
    roi: z
      .number()
      .exactOptional()
      .openapi({ description: 'The Return On Investment for this category', example: '25.33' }),
    soldProductCount: z
      .int()
      .openapi({ description: 'The product sold count count for this category', example: '2' }),
    totalSales: z
      .number()
      .openapi({ description: 'The total sales for this category', example: '234.42' }),
  })
  .openapi({
    required: [
      'catalogCategoryId',
      'allProductCount',
      'catalogProductCount',
      'enabledProductCount',
      'clickCount',
      'cost',
      'orderCount',
      'performanceIndicator',
      'totalSales',
      'soldProductCount',
      'links',
    ],
  })
  .openapi('ReportByCategory')

const ReportByCategoryRequestSchema = OrderedReportFilterCommonParametersSchema.and(
  PaginationRequestParametersSchema,
).openapi('ReportByCategoryRequest')

const ReportByCommonResponseLinksSchema = z
  .object({
    disableAllProducts: LinksOptimiseAllLinkSchema.exactOptional(),
    disableProducts: LinksOptimiseLinkSchema.exactOptional(),
    enableAllProducts: LinksOptimiseAllLinkSchema.exactOptional(),
    enableProducts: LinksOptimiseLinkSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ReportByCommonResponseLinks')

const ReportByCategoryResponseLinksSchema = ReportByCommonResponseLinksSchema.openapi(
  'ReportByCategoryResponseLinks',
)

const ReportByCategoryResponseSchema = z
  .object({
    categories: z.array(ReportByCategorySchema).exactOptional(),
    currencyCode: BeezUPCommonCurrencyCodeSchema.exactOptional(),
    links: ReportByCategoryResponseLinksSchema.exactOptional(),
    paginationResult: BeezUPCommonPaginationResultSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ReportByCategoryResponse')

const ReportByChannelLinksSchema = z
  .object({
    disableProducts: LinksOptimiseByChannelLinkSchema.exactOptional(),
    enableProducts: LinksOptimiseByChannelLinkSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ReportByChannelLinks')

const ReportByChannelSchema = z
  .object({
    catalogProductCount: z
      .int()
      .openapi({ description: 'The catalog product count', example: '101' }),
    channel: BeezUPCommonChannelBasicInfoSchema,
    clickCount: z.int().openapi({ description: 'The click count', example: '1024' }),
    cost: z.number().openapi({ description: 'The cost for', example: '1234.12' }),
    enabledProductCount: z
      .int()
      .openapi({ description: 'The enabled product count', example: '101' }),
    links: ReportByChannelLinksSchema,
    margin: z.number().exactOptional().openapi({ description: 'The margin', example: '23.1' }),
    orderCount: z.int().openapi({ description: 'The order count', example: '42' }),
    performanceIndicator: z
      .number()
      .openapi({
        description:
          'The performance indicator based on the performance indicator formula indicated in the request',
        example: '12.21',
      }),
    roi: z
      .number()
      .exactOptional()
      .openapi({ description: 'The Return On Investment', example: '42.42' }),
    soldProductCount: z
      .int()
      .openapi({ description: 'The product sold count count', example: '2' }),
    totalSales: z.number().openapi({ description: 'The total sales', example: '234.42' }),
  })
  .openapi({
    required: [
      'channel',
      'catalogProductCount',
      'enabledProductCount',
      'clickCount',
      'cost',
      'orderCount',
      'performanceIndicator',
      'totalSales',
      'soldProductCount',
      'links',
    ],
  })
  .openapi('ReportByChannel')

const ReportByChannelRequestSchema = OrderedReportFilterCommonParametersSchema.and(
  PaginationRequestParametersSchema,
).openapi('ReportByChannelRequest')

const ReportByChannelResponseLinksSchema = ReportByCommonResponseLinksSchema.openapi(
  'ReportByChannelResponseLinks',
)

const ReportByChannelResponseSchema = z
  .object({
    channels: z.array(ReportByChannelSchema),
    currencyCode: BeezUPCommonCurrencyCodeSchema,
    links: ReportByChannelResponseLinksSchema,
    paginationResult: BeezUPCommonPaginationResultSchema,
  })
  .openapi({ required: ['currencyCode', 'paginationResult', 'channels', 'links'] })
  .openapi('ReportByChannelResponse')

const ReportByDayAllChannelsSchema = z
  .object({
    clickCount: z.int().openapi({ description: 'The click count', example: '101' }),
    cost: z.number().openapi({ description: 'The cost', example: '10.42' }),
    margin: z.number().openapi({ description: 'The margin', example: '42.42' }),
    orderCount: z.int().openapi({ description: 'The order count', example: '42' }),
    performanceIndicator: z
      .number()
      .openapi({
        description:
          'The performance indicator based on the performance indicator formula indicated in the request',
        example: '23.09',
      }),
    roi: z.number().openapi({ description: 'The Return On Investment', example: '23.11' }),
    soldProductCount: z
      .int()
      .openapi({ description: 'The product sold count count', example: '2' }),
    totalSales: z.number().openapi({ description: 'The total sales', example: '234.42' }),
  })
  .openapi({
    required: [
      'clickCount',
      'cost',
      'orderCount',
      'roi',
      'margin',
      'performanceIndicator',
      'totalSales',
      'soldProductCount',
    ],
  })
  .openapi('ReportByDayAllChannels')

const ReportByDayByChannelSchema = ReportByDayAllChannelsSchema.and(
  z.object({ channel: BeezUPCommonChannelBasicInfoSchema }).openapi({ required: ['channel'] }),
).openapi('ReportByDayByChannel')

const ReportByDaySchema = z
  .object({
    allChannels: ReportByDayAllChannelsSchema,
    byChannels: z.array(ReportByDayByChannelSchema),
    day: z.iso.date().openapi({ example: '2017-04-23T00:00:00Z' }),
  })
  .openapi({ required: ['day', 'allChannels', 'byChannels'] })
  .openapi('ReportByDay')

const ReportByDayGlobalAllChannelsSchema = z
  .object({
    performanceIndicator: z
      .number()
      .openapi({ description: 'Indicates the global performance indicator', example: '10.42' }),
  })
  .openapi({ required: ['performanceIndicator'] })
  .openapi('ReportByDayGlobalAllChannels')

const ReportByDayGlobalByChannelSchema = ReportByDayGlobalAllChannelsSchema.and(
  z.object({ channel: BeezUPCommonChannelBasicInfoSchema }).openapi({ required: ['channel'] }),
).openapi('ReportByDayGlobalByChannel')

const ReportByDayGlobalSchema = z
  .object({
    allChannels: ReportByDayGlobalAllChannelsSchema,
    byChannels: z.array(ReportByDayGlobalByChannelSchema),
  })
  .openapi({ required: ['allChannels', 'byChannels'] })
  .openapi('ReportByDayGlobal')

const ReportByDayResponseSchema = z
  .object({
    currencyCode: BeezUPCommonCurrencyCodeSchema,
    days: z.array(ReportByDaySchema),
    globalPerformanceIndicators: ReportByDayGlobalSchema,
  })
  .openapi({ required: ['currencyCode', 'globalPerformanceIndicators', 'days'] })
  .openapi('ReportByDayResponse')

const ReportByDayPerStoreResponseSchema = z
  .record(z.string(), ReportByDayResponseSchema)
  .openapi({ description: 'The key is the StoreId.' })
  .openapi('ReportByDayPerStoreResponse')

const ReportByDayRequestSchema = z
  .object({
    advancedFilters: ReportAdvancedFiltersSchema.exactOptional(),
    beginPeriodUtcDate: z.iso
      .date()
      .openapi({
        description: 'The begin date of the period for the report',
        example: '2006-11-20T00:00:00Z',
      }),
    catalogCategoryId: BeezUPCommonCatalogCategoryIdSchema.exactOptional(),
    channelIds: z
      .array(BeezUPCommonChannelIdSchema)
      .exactOptional()
      .openapi({
        description: 'Indicate the channel identifier list',
        example: ['2dc136a7-0d3d-4cc9-a825-a28a42c53e28'],
      }),
    endPeriodUtcDate: z.iso
      .date()
      .openapi({
        description: 'The end date of the period for the report',
        example: '2006-12-20T00:00:00Z',
      }),
    productId: BeezUPCommonProductIdSchema.exactOptional(),
  })
  .openapi({ required: ['beginPeriodUtcDate', 'endPeriodUtcDate'] })
  .openapi('ReportByDayRequest')

const ReportByProductAllChannelsLinksSchema = z
  .object({
    disableProductForAllChannels: LinksOptimiseByProductLinkSchema,
    enableProductForAllChannels: LinksOptimiseByProductLinkSchema,
  })
  .openapi({ required: ['enableProductForAllChannels', 'disableProductForAllChannels'] })
  .openapi('ReportByProductAllChannelsLinks')

const ReportByProductOneChannelLinksSchema = z
  .object({
    disableProductForOneChannel: LinksOptimiseByProductLinkSchema,
    enableProductForOneChannel: LinksOptimiseByProductLinkSchema,
    productInfo: LinksGetChannelCatalogProductInfoLinkSchema,
  })
  .openapi({
    description:
      'If the report concerned one product for one channel the channel catalog product info will give you all you need to enable or disable the product.',
    required: ['productInfo', 'enableProductForOneChannel', 'disableProductForOneChannel'],
  })
  .openapi('ReportByProductOneChannelLinks')

const ReportByProductLinksSchema = z
  .object({
    allChannelsLinks: ReportByProductAllChannelsLinksSchema.exactOptional(),
    oneChannelLinks: ReportByProductOneChannelLinksSchema.exactOptional(),
  })
  .openapi({
    description: 'Depending if the report concerned multiple channels or one channel.',
    required: [],
  })
  .openapi('ReportByProductLinks')

const ReportByProductSchema = z
  .object({
    channelCount: z
      .int()
      .openapi({
        description: 'The channel count where this product can be enabled',
        example: '2',
      }),
    clickCount: z
      .int()
      .openapi({ description: 'The click count for this product', example: '1234' }),
    cost: z.number().openapi({ description: 'The cost for this product', example: '101.42' }),
    enabledOnChannelCount: z
      .int()
      .openapi({ description: 'The count of channel where this product is enabled', example: '1' }),
    links: ReportByProductLinksSchema,
    margin: z
      .number()
      .exactOptional()
      .openapi({ description: 'The margin for this product', example: '50.0' }),
    orderCount: z
      .int()
      .openapi({ description: 'The order count for this product', example: '234' }),
    performanceIndicator: z
      .number()
      .openapi({
        description:
          'The performance indicator based on the performance indicator formula indicated in the request for this product',
        example: '10.12',
      }),
    product: BeezUPCommonProductBasicInfoSchema,
    roi: z
      .number()
      .exactOptional()
      .openapi({ description: 'The Return On Investment for this product', example: '42.01' }),
    soldProductCount: z
      .int()
      .openapi({ description: 'The product sold count count for this product', example: '2' }),
    totalSales: z
      .number()
      .openapi({ description: 'The total sales for this product', example: '234.42' }),
  })
  .openapi({
    required: [
      'product',
      'enabledOnChannelCount',
      'channelCount',
      'clickCount',
      'cost',
      'orderCount',
      'performanceIndicator',
      'totalSales',
      'soldProductCount',
      'links',
    ],
  })
  .openapi('ReportByProduct')

const ReportByProductRequestSchema = OrderedReportFilterCommonParametersSchema.and(
  PaginationRequestParametersSchema,
)
  .and(
    z
      .object({
        analyticsProductColumnFilters: AnalyticsProductColumnFiltersSchema.exactOptional(),
        productColumnsToDisplay: ProductColumnsToDisplaySchema.exactOptional(),
        productState: ProductStateFilterSchema,
      })
      .openapi({
        required: ['beginPeriodUtcDate', 'endPeriodUtcDate', 'advancedFilters', 'productState'],
      }),
  )
  .openapi('ReportByProductRequest')

const ReportByProductResponseLinksSchema = ReportByCommonResponseLinksSchema.openapi(
  'ReportByProductResponseLinks',
)

const ReportByProductResponseSchema = z
  .object({
    currencyCode: BeezUPCommonCurrencyCodeSchema,
    links: ReportByProductResponseLinksSchema,
    paginationResult: BeezUPCommonPaginationResultSchema,
    products: z.array(ReportByProductSchema),
  })
  .openapi({ required: ['paginationResult', 'currencyCode', 'products', 'links'] })
  .openapi('ReportByProductResponse')

const ReportFilterLinksSchema = z
  .object({
    delete: LinksDeleteReportFilterLinkSchema.exactOptional(),
    save: LinksSaveReportFilterLinkSchema.exactOptional(),
    self: LinksGetReportFilterLinkSchema.exactOptional(),
  })
  .openapi({ description: 'Indicates the actions you can do on this report filter', required: [] })
  .openapi('ReportFilterLinks')

const ReportFilterParametersSchema = ReportFilterCommonParametersSchema.and(
  z
    .object({
      analyticsProductColumnFilters: AnalyticsProductColumnFiltersSchema.exactOptional(),
      productColumnsToDisplay: ProductColumnsToDisplaySchema.exactOptional(),
      productState: ProductStateFilterSchema.exactOptional(),
      reportType: ReportTypeSchema,
    })
    .openapi({
      required: ['beginPeriodUtcDate', 'endPeriodUtcDate', 'advancedFilters', 'reportType'],
    }),
).openapi('ReportFilterParameters')

const ReportFilterSchema = z
  .object({
    links: ReportFilterLinksSchema.exactOptional(),
    parameters: ReportFilterParametersSchema,
    reportFilterId: z
      .guid()
      .openapi({
        description: 'Report filter identifier',
        example: 'fb19c53c-2f63-4262-9d94-2d7faa500acd',
      }),
    reportFilterName: z
      .string()
      .openapi({ description: 'Report filter name', example: 'My report filter' }),
  })
  .openapi({ required: ['reportFilterId', 'reportFilterName', 'parameters'] })
  .openapi('ReportFilter')

const ReportFilterHeaderLinksSchema = z
  .object({ self: LinksGetReportFilterLinkSchema })
  .openapi({ required: ['self'] })
  .openapi('ReportFilterHeaderLinks')

const ReportFilterHeaderSchema = z
  .object({
    links: ReportFilterHeaderLinksSchema,
    reportFilterId: z
      .guid()
      .openapi({
        description: 'Report filter identifier',
        example: 'fb19c53c-2f63-4262-9d94-2d7faa500acd',
      }),
    reportFilterName: z
      .string()
      .openapi({ description: 'Report filter name', example: 'My report filter' }),
    reportType: ReportTypeSchema,
  })
  .openapi({ required: ['reportFilterName', 'reportFilterId', 'reportType', 'links'] })
  .openapi('ReportFilterHeader')

const ReportFiltersLinksSchema = z
  .object({ save: LinksSaveReportFilterLinkSchema, self: LinksGetReportFiltersLinkSchema })
  .openapi({ required: ['self', 'save'] })
  .openapi('ReportFiltersLinks')

const ReportFilterListSchema = z
  .object({ links: ReportFiltersLinksSchema, reportFilters: z.array(ReportFilterHeaderSchema) })
  .openapi({ required: ['reportFilters', 'links'] })
  .openapi('ReportFilterList')

const RuleLastExecutionStatusSchema = z
  .enum(['InProgress', 'Succeeded', 'Failed', 'Unknown'])
  .openapi({ description: 'The status of the last execution', example: 'Succeeded' })
  .openapi('RuleLastExecutionStatus')

const RuleLinksSchema = z
  .object({
    delete: LinksDeleteRuleLinkSchema.exactOptional(),
    disable: LinksDisableRuleLinkSchema.exactOptional(),
    enable: LinksEnableRuleLinkSchema.exactOptional(),
    movedown: LinksMoveDownRuleLinkSchema.exactOptional(),
    moveup: LinksMoveUpRuleLinkSchema.exactOptional(),
    reportFilter: LinksGetReportFilterLinkSchema.exactOptional(),
    run: LinksRunRuleLinkSchema.exactOptional(),
    self: LinksGetRuleLinkSchema,
    update: LinksUpdateRuleLinkSchema.exactOptional(),
  })
  .openapi({ description: 'Links to retrieve/action on other entities', required: ['self'] })
  .openapi('RuleLinks')

const RuleSchema = z
  .object({
    actionName: OptimisationActionNameSchema,
    enabled: z.boolean().openapi({ description: 'Is the rule enabled', example: 'true' }),
    lastExecutionStatus: RuleLastExecutionStatusSchema.exactOptional(),
    lastExecutionUtcDate: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'The utc date of the last execution',
        example: '2016-08-29T09:12:33.001Z',
      }),
    links: RuleLinksSchema,
    position: z.int().openapi({ description: 'Rule execution position', example: '1' }),
    reportFilterId: z
      .guid()
      .openapi({
        description: 'Report filter identifier linked to the rule',
        example: 'fb19c53c-2f63-4262-9d94-2d7faa500acd',
      }),
    ruleId: z
      .guid()
      .openapi({
        description: 'The identifier of the rule',
        example: 'c38006b4-29d0-4b8a-978b-701a0b12d5a8',
      }),
    ruleName: z.string().openapi({ description: 'The name of the rule', example: 'My Rule' }),
    validityEndUtcDate: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Rule validity end utc date', example: '3016-08-29T09:12:33.001Z' }),
    validityStartUtcDate: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'Rule validity start utc date',
        example: '2016-08-29T09:12:33.001Z',
      }),
  })
  .openapi({
    required: [
      'ruleId',
      'ruleName',
      'actionName',
      'reportFilterId',
      'position',
      'enabled',
      'links',
    ],
  })
  .openapi('Rule')

const RuleExecutionReportingErrorTypeSchema = z
  .enum(['ChannelNotPresent', 'StoreIsInSystemBlockState'])
  .openapi({
    description: 'The error type for this execution if any',
    example: 'ChannelNotPresent',
  })
  .openapi('RuleExecutionReportingErrorType')

const RuleExecutionReportingExecutionSourceSchema = z
  .enum(['Scheduler', 'User'])
  .openapi({ description: 'The requestor type for the execution of the rule', example: 'User' })
  .openapi('RuleExecutionReportingExecutionSource')

const RuleExecutionReportingLinksSchema = z
  .object({ rule: LinksGetRuleLinkSchema.exactOptional() })
  .openapi({ description: 'Links to retrieve/action on this rule execution', required: [] })
  .openapi('RuleExecutionReportingLinks')

const RuleExecutionReportingStatusSchema = z
  .enum(['InProgress', 'Succeeded', 'AlreadyInProgress', 'Aborted', 'Failed', 'Unknown'])
  .openapi({ description: 'The status of the execution of the rule', example: 'Succeeded' })
  .openapi('RuleExecutionReportingStatus')

const RuleExecutionReportingSchema = z
  .object({
    activeAffectedProductCount: z
      .int()
      .exactOptional()
      .openapi({ description: 'The count of affected active products', example: '1' }),
    affectedChannelCount: z
      .int()
      .exactOptional()
      .openapi({ description: 'The count of affected Channels across all products', example: '1' }),
    affectedProductCount: z
      .int()
      .exactOptional()
      .openapi({ description: 'The count of affected products, active or not', example: '1' }),
    completedUtcDate: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'The completed utc date of the execution of the rule',
        example: '2016-08-29T09:12:33.001Z',
      }),
    errorType: RuleExecutionReportingErrorTypeSchema.exactOptional(),
    executionSource: RuleExecutionReportingExecutionSourceSchema,
    links: RuleExecutionReportingLinksSchema.exactOptional(),
    optimisationActionName: OptimisationActionNameSchema.exactOptional(),
    reportUrl: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The url for the excel report for this execution',
        example: 'http://www.google.com',
      }),
    ruleId: z
      .guid()
      .openapi({
        description: 'The rule identifier',
        example: 'fd9a23a1-569b-40af-af91-f7275a57bf89',
      }),
    ruleName: z.string().openapi({ description: 'The name of the rule', example: 'toto' }),
    startedUtcDate: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'The start utc date of the execution of the rule',
        example: '2016-08-29T09:12:33.001Z',
      }),
    status: RuleExecutionReportingStatusSchema,
    userId: z
      .guid()
      .exactOptional()
      .openapi({
        description: 'The userId that executed the rule if any',
        example: 'e8289350-69f8-45a6-b0ca-b641c83e0422',
      }),
  })
  .openapi({ required: ['ruleId', 'ruleName', 'status', 'executionSource'] })
  .openapi('RuleExecutionReporting')

const RuleExecutionReportingsSchema = z
  .object({
    executions: z
      .array(RuleExecutionReportingSchema)
      .exactOptional()
      .openapi({ description: 'The rules executions history' }),
    paginationResult: BeezUPCommonPaginationResultSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('RuleExecutionReportings')

const RuleListLinksSchema = z
  .object({
    create: LinksCreateRuleLinkSchema,
    history: LinksGetRulesExecutionsLinkSchema,
    run: LinksRunRulesLinkSchema,
    self: LinksGetRulesLinkSchema,
  })
  .openapi({
    description: 'Links to know if the user can create a rule or run all rules',
    required: ['self', 'create', 'history', 'run'],
  })
  .openapi('RuleListLinks')

const RuleListSchema = z
  .object({
    links: RuleListLinksSchema,
    rules: z.array(RuleSchema).openapi({ description: 'Rule list' }),
  })
  .openapi({ required: ['rules', 'links'] })
  .openapi('RuleList')

const SaveReportFilterRequestSchema = z
  .object({
    parameters: ReportFilterParametersSchema,
    reportFilterName: z
      .string()
      .openapi({ description: 'Report filter name', example: 'My report filter' }),
  })
  .openapi({ required: ['reportFilterName', 'parameters'] })
  .openapi('SaveReportFilterRequest')

const StoreAlertPropertySchema = z
  .object({ propertyId: AlertPropertyIdSchema, propertyValue: AlertPropertyValueSchema })
  .openapi({ required: ['propertyId', 'propertyValue'] })
  .openapi('StoreAlertProperty')

const SaveStoreAlertRequestSchema = z
  .object({
    enabled: AlertEnabledSchema,
    properties: z
      .array(StoreAlertPropertySchema)
      .exactOptional()
      .openapi({
        description: 'Properties to configure the alert',
        example: [{ propertyId: '2', propertyValue: '3' }],
      }),
  })
  .openapi({ required: ['enabled'] })
  .openapi('SaveStoreAlertRequest')

const SaveStoreAlertsRequestSchema = z
  .record(z.string(), SaveStoreAlertRequestSchema)
  .openapi({ description: 'The key is the alert identifier (alertId)' })
  .openapi('SaveStoreAlertsRequest')

const ScheduleAutoImportRequestSchema = z
  .object({
    localTimeZoneName: z
      .string()
      .default('Romance Standard Time')
      .exactOptional()
      .openapi({
        description: 'If null the local time zone name will be "Romance Standard Time"',
        example: 'Romance Standard Time',
      }),
    schedules: z
      .array(
        z
          .string()
          .regex(
            /(00:1[5-9])|(00:[2-5][0-9])|(0[1-9]:[0-5][0-9])|(1[0-9]:[0-5][0-9])|(2[0-3]:[0-5][0-9])/,
          ),
      )
      .min(1)
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      })
      .openapi({
        description:
          'Indicate the time span you want to import your catalog. (i.e. "21:00:00" to import your catalog at 9PM)',
        example: ['21:00:00', '23:00:00', '08:30:00'],
      }),
  })
  .openapi({
    description: 'The message request to schedule the auto import',
    required: ['schedules'],
  })
  .openapi('ScheduleAutoImportRequest')

const SetChannelCatalogMarketplaceSettingsRequestSchema = z
  .object({ settings: ChannelCatalogMarketplaceSettingArraySchema })
  .openapi({
    description: 'The channel catalog marketplace settings to save',
    required: ['settings'],
  })
  .openapi('SetChannelCatalogMarketplaceSettingsRequest')

const SetMerchantOrderInfoListRequestItemSchema = OrderIdentifierSchema.and(
  z
    .object({ order_MerchantOrderId: OrderMerchantOrderIdSchema })
    .openapi({
      required: ['marketplaceTechnicalCode', 'accountId', 'beezUPOrderId', 'order_MerchantOrderId'],
    }),
).openapi('SetMerchantOrderInfoListRequestItem')

const SetMerchantOrderInfoListRequestSchema = z
  .object({
    order_MerchantECommerceSoftwareName: OrderMerchantECommerceSoftwareNameSchema,
    order_MerchantECommerceSoftwareVersion: OrderMerchantECommerceSoftwareVersionSchema,
    orders: z
      .array(SetMerchantOrderInfoListRequestItemSchema)
      .min(1)
      .max(100)
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      })
      .openapi({
        example: [
          {
            accountId: '1234',
            beezUPOrderId: '8D47FF1427A26B064ca98e95f644361ada5a5be0bbb3b53',
            marketplaceTechnicalCode: 'Amazon',
            order_MerchantOrderId: 'BX1234',
          },
          {
            accountId: '5678',
            beezUPOrderId: '8D47FF149F213D055f26e3c413e4c9ba5c5cfda460547a4',
            marketplaceTechnicalCode: 'Amazon',
            order_MerchantOrderId: 'BX5678',
          },
          {
            accountId: '9876',
            beezUPOrderId: '8D47FF150217B60bdec05ab61c445d1a59e3da050b52823',
            marketplaceTechnicalCode: 'Ebay',
            order_MerchantOrderId: 'BX9876',
          },
        ],
      }),
  })
  .openapi({
    required: [
      'order_MerchantECommerceSoftwareName',
      'order_MerchantECommerceSoftwareVersion',
      'orders',
    ],
  })
  .openapi('SetMerchantOrderInfoListRequest')

const SetMerchantOrderInfoRequestSchema = z
  .object({
    order_MerchantECommerceSoftwareName: OrderMerchantECommerceSoftwareNameSchema,
    order_MerchantECommerceSoftwareVersion: OrderMerchantECommerceSoftwareVersionSchema,
    order_MerchantOrderId: OrderMerchantOrderIdSchema,
  })
  .openapi({
    required: [
      'order_MerchantOrderId',
      'order_MerchantECommerceSoftwareName',
      'order_MerchantECommerceSoftwareVersion',
    ],
  })
  .openapi('SetMerchantOrderInfoRequest')

const StandardOfferLinksSchema = z
  .object({ getOffer: LinksGetOfferLinkSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('StandardOfferLinks')

const StandardOfferSchema = z
  .object({
    additionalClickPrice: z
      .float64()
      .exactOptional()
      .openapi({ description: 'The additional click price', example: '0.1234' }),
    currencyCode: BeezUPCommonCurrencyCodeSchema.exactOptional(),
    fixedPrice: z
      .float64()
      .exactOptional()
      .openapi({ description: 'The fixed price of the offer', example: '101.42' }),
    functionalities: z
      .array(OfferFunctionalitySchema)
      .exactOptional()
      .openapi({
        example: [
          {
            functionalityCode: 'MARKETMANA',
            maxValueInteger: '4',
            text: 'Marketplace management',
            unlimited: 'false',
          },
        ],
      }),
    includedClick: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The included click', example: '1200' }),
    isMostPopular: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'UI purpose. Is the offer is the most popular', example: 'true' }),
    isOldOffer: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Is an old offer', example: 'false' }),
    links: StandardOfferLinksSchema,
    name: z.string().openapi({ description: 'The offer name', example: 'Wonder offer' }),
    offerId: z.int32().openapi({ description: 'The offer Id', example: '1234' }),
    position: z
      .int32()
      .exactOptional()
      .openapi({ description: 'UI purpose. The position of the offer', example: '1' }),
  })
  .openapi({ required: ['offerId', 'name', 'links'] })
  .openapi('StandardOffer')

const StandardOffersLinksSchema = z
  .object({ self: LinksGetStandardOffersLinkSchema })
  .openapi({ required: ['self'] })
  .openapi('StandardOffersLinks')

const StandardOffersSchema = z
  .object({
    functionalities: z
      .array(FunctionalitySchema)
      .openapi({
        description: 'All functionalities...',
        example: [{ code: 'MARKETMANA', order: '1' }],
      }),
    links: StandardOffersLinksSchema,
    offers: z
      .array(StandardOfferSchema)
      .openapi({
        description: 'All standard offers',
        example: [
          {
            additionalClickPrice: '0',
            currencyCode: 'EUR',
            fixedPrice: '101',
            functionalities: [
              {
                functionalityCode: 'MARKETMANA',
                maxValueInteger: '4',
                text: 'Marketplace management',
                unlimited: 'false',
              },
            ],
            includedClick: '1200',
            isMostPopular: 'true',
            name: 'Wonder offer',
            offerId: '1234',
            position: '1',
          },
        ],
      }),
  })
  .openapi({ required: ['links', 'offers', 'functionalities'] })
  .openapi('StandardOffers')

const StartManualImportRequestSchema = z
  .object({
    duplicateProductSkuConfiguration: DuplicateProductValueConfigurationSchema.exactOptional(),
    input: InputConfigurationSchema,
  })
  .openapi({
    description:
      'The message request start a manual importation process. Indicate the way to handle duplicate product. Can be null if you want to reuse the configuration of the previous importation succeed.',
    required: ['input'],
  })
  .openapi('StartManualImportRequest')

const StoreLinksSchema = z
  .object({
    deleteStore: LinksDeleteStoreLinkSchema.exactOptional(),
    self: LinksGetStoreLinkSchema.exactOptional(),
    share: LinksShareStoreLinkSchema.exactOptional(),
    shares: LinksGetStoreSharesLinkSchema.exactOptional(),
    updateStore: LinksUpdateStoreLinkSchema.exactOptional(),
  })
  .openapi({ description: 'The action links for this store', required: [] })
  .openapi('StoreLinks')

const StoreStatusSchema = z
  .enum(['Active', 'SystemBlocked', 'UserBlocked'])
  .openapi({
    description:
      'The store status\n* Active:  When the store is active\n* SystemBlocked:  When the store is blocked by the system\n* UserBlocked: When the store is blocked on GO not on the system\n',
    example: 'Active',
  })
  .openapi('StoreStatus')

const StoreUserRoleSchema = z
  .enum(['Owner', 'User'])
  .openapi({
    description:
      'Indicates the role can have a user on a store.\n* Owner: Indicates that you are the owner of this store\n* User: Indicates that you are a simple user on this store\n',
    example: 'User',
  })
  .openapi('StoreUserRole')

const StoreSchema = z
  .object({
    countryIsoCodeAlpha3: StoreCountryIsoCodeAlpha3Schema,
    creationUtcDate: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'The creation date of the store', example: '2017-04-01T22:30:00Z' }),
    currencyCode: BeezUPCommonCurrencyCodeSchema,
    goVersion: z.int32().openapi({ description: 'The version of GO to use', example: '2' }),
    isTest: z.boolean().openapi({ description: 'Is the store a test or a production store' }),
    links: StoreLinksSchema,
    name: StoreNameSchema,
    offerId: OfferIdSchema,
    offerName: z.string().openapi({ description: 'The offer Name', example: 'Premium' }),
    ownerUserId: z
      .guid()
      .openapi({
        description: 'The user id of the owner of the store',
        example: '00000000-0000-0000-0000-000000000000',
      }),
    sectors: StoreSectorsSchema,
    shareCount: z
      .int()
      .openapi({ description: 'The share count related to this store', example: '5' }),
    status: StoreStatusSchema,
    storeId: BeezUPCommonStoreIdSchema,
    url: StoreUrlSchema,
    userRole: StoreUserRoleSchema,
  })
  .openapi({
    required: [
      'storeId',
      'name',
      'url',
      'countryIsoCodeAlpha3',
      'currencyCode',
      'userRole',
      'status',
      'ownerUserId',
      'shareCount',
      'creationUtcDate',
      'sectors',
      'goVersion',
      'links',
      'offerId',
      'offerName',
      'isTest',
    ],
  })
  .openapi('Store')

const StoreAlertLinksSchema = z
  .object({ save: LinksSaveStoreAlertsLinkSchema.exactOptional() })
  .openapi({ description: 'The different actions you can make on this alert', required: [] })
  .openapi('StoreAlertLinks')

const StoreAlertPropertyInfoSchema = StoreAlertPropertySchema.and(
  z
    .object({
      propertyName: z
        .string()
        .openapi({ description: 'The property name of the alert', example: 'NbDays' }),
      propertyValidationExpression: z
        .string()
        .exactOptional()
        .openapi({
          description: 'The regular expression related to the alert property',
          example: '\\b0*([1-9]|[12][0-9]|30)\\b',
        }),
    })
    .openapi({ required: ['propertyId', 'propertyName', 'propertyValue'] }),
).openapi('StoreAlertPropertyInfo')

const StoreAlertSchema = z
  .object({
    alertId: AlertIdSchema,
    alertName: AlertNameSchema,
    enabled: AlertEnabledSchema,
    links: StoreAlertLinksSchema,
    properties: z
      .array(StoreAlertPropertyInfoSchema)
      .exactOptional()
      .openapi({
        description: 'The current configuration properties of the alert',
        example: [
          {
            propertyId: '2',
            propertyValidationExpression: '\\b0*([1-9]|[12][0-9]|30)\\b',
            propertyValue: '2',
          },
        ],
      }),
  })
  .openapi({ required: ['links', 'alertId', 'alertName', 'enabled'] })
  .openapi('StoreAlert')

const StoreAlertsSchema = z
  .object({
    alerts: z
      .array(StoreAlertSchema)
      .exactOptional()
      .openapi({
        example: [
          {
            alertId: '8',
            alertName: 'NoImportSinceXDays',
            isActive: 'true',
            properties: [
              {
                propertyId: '2',
                propertyValidationExpression: '\\b0*([1-9]|[12][0-9]|30)\\b',
                propertyValue: '2',
              },
            ],
          },
        ],
      }),
  })
  .openapi({ required: [] })
  .openapi('StoreAlerts')

const StoreIdSchema = z
  .guid()
  .openapi({ description: 'The store identifier', 'x-exclude': true })
  .openapi('StoreId')

const StoreListLinksSchema = z
  .object({
    createStore: LinksCreateStoreLinkSchema.exactOptional(),
    self: LinksGetStoresLinkSchema.exactOptional(),
  })
  .openapi({ description: 'The action links you can do globally on stores', required: [] })
  .openapi('StoreListLinks')

const StoreListSchema = z
  .object({ links: StoreListLinksSchema, stores: z.array(StoreSchema) })
  .openapi({ required: ['links', 'stores'] })
  .openapi('StoreList')

const StoreShareLinksSchema = z
  .object({ deleteShare: LinksDeleteStoreShareLinkSchema.exactOptional() })
  .openapi({ description: 'The different actions you can make on this store share', required: [] })
  .openapi('StoreShareLinks')

const StoreShareSchema = z
  .object({
    links: StoreShareLinksSchema,
    userId: BeezUPCommonUserIdSchema,
    userRole: StoreUserRoleSchema,
  })
  .openapi({ required: ['userId', 'userRole', 'links'] })
  .openapi('StoreShare')

const StoreSharesLinksSchema = z
  .object({
    self: LinksGetStoreSharesLinkSchema.exactOptional(),
    share: LinksShareStoreLinkSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('StoreSharesLinks')

const StoreSharesSchema = z
  .object({ links: StoreSharesLinksSchema, shares: z.array(StoreShareSchema) })
  .openapi({ required: ['links', 'shares'] })
  .openapi('StoreShares')

const StoreTrackingStatusSchema = z
  .object({
    clickSynchronizationUtcDate: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'The utc date of the latest synchronized click',
        example: '2016-08-29T09:12:33.001Z',
      }),
    marketplaceOrderSynchonizationUtcDate: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'The utc date of the latest synchronized marketplace order',
        example: '2016-08-29T09:12:33.001Z',
      }),
    orderSynchonizationUtcDate: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'The utc date of the latest synchronized order',
        example: '2016-08-29T09:12:33.001Z',
      }),
  })
  .openapi({ required: [] })
  .openapi('StoreTrackingStatus')

const SubscriptionIdSchema = z
  .guid()
  .openapi({ description: 'The identifier of the subscription to the orders for a merchant' })
  .openapi('SubscriptionId')

const SubscriptionStatusSchema = z
  .enum(['active', 'inactive'])
  .openapi({ description: 'The status of your subscription', example: 'active' })
  .openapi('SubscriptionStatus')

const SubscriptionSchema = z
  .object({
    consumerHealthStatus: ConsumptionAvailabilityStatusSchema.exactOptional(),
    consumerLastRequestSentUri: HttpUrlSchema.exactOptional(),
    consumerUnvailableSinceUtcDate: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'This date indicates since when the subscription consumer is unavailable',
      }),
    id: SubscriptionIdSchema,
    lastErrorMessage: ErrorResponseMessageSchema.exactOptional(),
    lastOrderPushedModificationUtcDate: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'This modification date correspond to the last order pushed by your subscription consumer',
      }),
    lastRetryUtcDate: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The last date we retry to send orders' }),
    lastSuccessfulOrderPushedUtcDate: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'The date of the last pushed order successfully received by your subscription consumer',
      }),
    maxRetryCount: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'The maximum BeezUP will retry to push orders. When we the retry count will reach maximum retry count, the subscription will be deactivated.',
      }),
    merchantApplicationName: SubscriptionMerchantApplicationNameSchema,
    merchantApplicationVersion: SubscriptionMerchantApplicationVersionSchema,
    merchantEmailAlert: EmailSchema.exactOptional(),
    name: SubscriptionNameSchema,
    nextScheduledRetryUtcDate: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The next scheduled  date we retry to send orders' }),
    recoverBeginPeriodOrderLastModificationUtcDate: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'Recover existing orders using the begin period order last modification date. If not set then you will receive new/updated orders in real-time.',
      }),
    recoverEndPeriodOrderLastModificationUtcDate: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'Recover existing orders using the begin and the end period order last modification date.\nOtherwise, you will receive new/updated orders in real-time.\n',
      }),
    retryCount: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'The retry count. When we the retry count will reach maximum retry count, the subscription will be deactivated.',
      }),
    status: SubscriptionStatusSchema,
    targetUrl: HttpUrlSchema,
  })
  .openapi({
    description: 'The subscription definition',
    required: [
      'id',
      'targetUrl',
      'status',
      'name',
      'merchantApplicationName',
      'merchantApplicationVersion',
    ],
  })
  .openapi('Subscription')

const SubscriptionLinksSchema = z
  .object({
    activate: Link3Schema.exactOptional(),
    deactivate: Link3Schema.exactOptional(),
    delete: Link3Schema.exactOptional(),
    reporting: Link3Schema.exactOptional(),
    retry: Link3Schema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('SubscriptionLinks')

const SubscriptionIndexSchema = SubscriptionSchema.and(
  z.object({ links: SubscriptionLinksSchema.exactOptional() }).openapi({ required: [] }),
).openapi('SubscriptionIndex')

const SubscriptionPushReportingSchema = z
  .object({
    duration: z.string().openapi({ description: 'The duration of the push operation' }),
    errorMessage: ErrorResponseMessageSchema.exactOptional(),
    eventId: MessageIdSchema,
    httpStatus: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The HTTP status received from the consumer' }),
    lastOrderModificationUtcDate: z.iso
      .datetime({ offset: true })
      .openapi({
        description:
          'This modification date correspond to the last order pushed by your subscription consumer',
      }),
    maxRetryCount: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'The maximum BeezUP will retry to push orders. When we the retry count will reach maximum retry count, the subscription will be deactivated.',
      }),
    nextScheduledRetryUtcDate: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The next scheduled  date we retry to send orders' }),
    orderCount: z.int32().openapi({ description: 'The order count sent' }),
    requestUri: HttpUrlSchema.exactOptional(),
    responseUri: HttpUrlSchema.exactOptional(),
    retryCount: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'The retry count. When we the retry count will reach maximum retry count, the subscription will be deactivated.',
      }),
    subscriptionId: SubscriptionIdSchema,
    succeed: z.boolean().openapi({ description: 'Indicates if the push operation has succeed' }),
  })
  .openapi({
    description: 'The subscription push reporting',
    required: [
      'subscriptionId',
      'eventId',
      'succeed',
      'lastOrderModificationUtcDate',
      'orderCount',
      'duration',
    ],
  })
  .openapi('SubscriptionPushReporting')

const TerminateContractSchema = z
  .object({
    contractTerminationReason: ContractTerminationReasonSchema.exactOptional(),
    contractTerminationReasonType: ContractTerminationReasonTypeSchema,
  })
  .openapi({
    description: 'The contract termination info',
    required: ['contractTerminationReasonType'],
  })
  .openapi('TerminateContract')

const TrackedClickSchema = z
  .object({
    channel: BeezUPCommonChannelBasicInfoSchema,
    ipAddress: z
      .string()
      .openapi({ description: 'The user IP address for the click', example: '127.0.0.1' }),
    product: BeezUPCommonProductBasicInfoSchema,
    utcDate: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'The utc date of the click', example: '2016-08-29T09:12:33.001Z' }),
  })
  .openapi({ required: ['utcDate', 'product', 'ipAddress', 'channel'] })
  .openapi('TrackedClick')

const TrackedClicksSchema = z
  .object({ clicks: z.array(TrackedClickSchema) })
  .openapi({ required: ['clicks'] })
  .openapi('TrackedClicks')

const TrackedExternalOrderProductSchema = z
  .object({
    margin: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The product's margin for the external order. This property is voluntarily a string because the value could be an invalid one",
        example: '9.66',
      }),
    productActive: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "We tried to get the catalog product if it's still active based on the product SKU. This property can be null, if we cannot found the product. This is possible if the product is not referenced in the imported catalog.",
        example: 'true',
      }),
    productId: z
      .guid()
      .exactOptional()
      .openapi({
        description:
          'We tried to get the catalog product identifier based on the product SKU. This property can be null, if we cannot found the product. This is possible if the product is not referenced in the imported catalog.',
        example: '6d469a54-8426-4855-abc2-9e062e2056b9',
      }),
    productImageUrl: z
      .url()
      .exactOptional()
      .openapi({
        description:
          'We tried to get the catalog product image Url based on the product SKU. This property can be null, if we cannot found the product. This is possible if the product is not referenced in the imported catalog.',
        example:
          'http://cdn3.sarenza.net/static/_img/productsV4/0000010744/MD_0000010744_29411_09.jpg?201308142051',
      }),
    productSku: z
      .string()
      .openapi({
        description: 'The product sku received for the external order',
        example: 'something',
      }),
    productTitle: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'We tried to get the catalog product title based on the product SKU. This property can be null, if we cannot found the product. This is possible if the product is not referenced in the imported catalog.',
        example: 'Something great',
      }),
    quantity: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The quantity of this product for the external order. This property is voluntarily a string because the value could be an invalid one',
        example: '1.00',
      }),
    unitPrice: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The product's unit price for the external order. This property is voluntarily a string because the value could be an invalid one.",
        example: '101.42',
      }),
  })
  .openapi({ required: ['productSku'] })
  .openapi('TrackedExternalOrderProduct')

const TrackedExternalOrderSchema = z
  .object({
    currencyCode: BeezUPCommonCurrencyCodeSchema,
    merchantOrderId: z
      .string()
      .openapi({ description: 'The merchant order identifier', example: 'My_Order_Merchant_Id' }),
    paymentValidated: z
      .boolean()
      .openapi({
        description: 'Indicate if the payment of this external order has been validated or not',
        example: 'false',
      }),
    products: z
      .array(TrackedExternalOrderProductSchema)
      .exactOptional()
      .openapi({
        description: 'Can be null. The product list included in the external order',
        example: [
          {
            margin: '9',
            merchantOrderId: 'My_Merchant_Order_Id',
            productActive: 'true',
            productImageUrl:
              'http://cdn3.sarenza.net/static/_img/productsV4/0000010744/MD_0000010744_29411_09.jpg?201308142051',
            productSku: 'something',
            productTitle: 'Something great',
            quantity: '1',
            unitPrice: '101',
          },
        ],
      }),
    totalAmount: z
      .number()
      .openapi({ description: 'The total amount of the external order', example: '101.42' }),
    utcDate: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'The utc date of the external order',
        example: '2016-08-29T09:12:33.001Z',
      }),
    visitorId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Can be null. The visitor identifier of the external order',
        example: 'A_VISITOR_ID',
      }),
  })
  .openapi({
    required: ['utcDate', 'merchantOrderId', 'totalAmount', 'currencyCode', 'paymentValidated'],
  })
  .openapi('TrackedExternalOrder')

const TrackedExternalOrdersSchema = z
  .object({ externalOrders: z.array(TrackedExternalOrderSchema) })
  .openapi({ required: ['externalOrders'] })
  .openapi('TrackedExternalOrders')

const TrackedOrderProductSchema = BeezUPCommonProductBasicInfoSchema.and(
  z
    .object({
      margin: z
        .number()
        .openapi({ description: "The product's margin for the order", example: '9.66' }),
      quantity: z
        .number()
        .openapi({ description: 'The quantity of this product for the order', example: '1.0' }),
      unitPrice: z
        .number()
        .openapi({ description: "The product's unit price for the order", example: '101.42' }),
    })
    .openapi({
      required: [
        'productId',
        'productSku',
        'productTitle',
        'productImageUrl',
        'productExists',
        'unitPrice',
        'quantity',
        'margin',
      ],
    }),
).openapi('TrackedOrderProduct')

const TrackedOrderSchema = z
  .object({
    channel: BeezUPCommonChannelBasicInfoSchema,
    currencyCode: BeezUPCommonCurrencyCodeSchema,
    merchantOrderId: z
      .string()
      .openapi({ description: 'The merchant order identifier', example: 'My_Merchant_Order_Id' }),
    paymentValidated: z
      .boolean()
      .openapi({
        description: 'Indicate if the payment of this order has been validated or not',
        example: 'false',
      }),
    products: z
      .array(TrackedOrderProductSchema)
      .openapi({
        description: 'The product list of this order',
        example: [
          {
            margin: '9',
            productActive: 'true',
            productId: '00000000-0000-0000-0000-000000000000',
            productImageUrl:
              'http://i2.cdscdn.com/pdt2/3/9/0/1/550x550/hai6901018043390/rw/haier-b20fwrss-refrigerateur-americain.jpg',
            productSku: 'SKU123345',
            productTitle: 'My super product title',
            quantity: '1',
            unitPrice: '101',
          },
        ],
      }),
    totalAmount: z
      .number()
      .openapi({ description: 'The total amount of the order', example: '101.42' }),
    utcDate: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'The utc date of the order', example: '2016-08-29T09:12:33.001Z' }),
  })
  .openapi({
    required: [
      'utcDate',
      'channel',
      'merchantOrderId',
      'totalAmount',
      'currencyCode',
      'paymentValidated',
      'products',
    ],
  })
  .openapi('TrackedOrder')

const TrackedOrdersSchema = z
  .object({ orders: z.array(TrackedOrderSchema) })
  .openapi({ required: ['orders'] })
  .openapi('TrackedOrders')

const TrackingStatusSchema = z
  .object({
    clickSynchronizationUtcDate: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'The utc date of the latest synchronized click',
        example: '2016-08-29T09:12:33.001Z',
      }),
    marketplaceOrderSynchonizationUtcDate: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'The utc date of the latest synchronized marketplace order',
        example: '2016-08-29T09:12:33.001Z',
      }),
    orderSynchonizationUtcDate: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'The utc date of the latest synchronized order',
        example: '2016-08-29T09:12:33.001Z',
      }),
  })
  .openapi({
    required: [
      'clickSynchronizationUtcDate',
      'orderSynchonizationUtcDate',
      'marketplaceOrderSynchonizationUtcDate',
    ],
  })
  .openapi('TrackingStatus')

const UnmapCategoryRequestSchema = z
  .object({ catalogCategoryPath: BeezUPCommonCatalogCategoryPathSchema })
  .openapi({
    description: 'The request message to unmap a catalog category path to a channel category path',
    required: ['catalogCategoryPath'],
  })
  .openapi('UnmapCategoryRequest')

const UpdateRuleRequestSchema = z
  .object({
    endUtcDate: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'Not required. The end validity utc date of the rule',
        example: '2016-08-29T09:12:33.001Z',
      }),
    ruleName: z
      .string()
      .openapi({ description: 'The name of the rule', example: 'My Rule Renamed' }),
    startUtcDate: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'Not required. The start validity utc date of the rule.',
        example: '2016-08-29T09:12:33.001Z',
      }),
  })
  .openapi({
    description: 'This update will replace the following values.',
    required: ['ruleName'],
  })
  .openapi('UpdateRuleRequest')

const UpdateStoreRequestSchema = z
  .object({ name: StoreNameSchema, sectors: StoreSectorsSchema, url: StoreUrlSchema })
  .openapi({ required: ['name', 'url', 'sectors'] })
  .openapi('UpdateStoreRequest')

const UpgradeOfferRequiredSchema = z
  .object({
    offerId: z.int32().openapi({ description: 'The offer identifier required', example: '9' }),
  })
  .openapi({
    description: 'The message contains the offer identifier required to execute this operation',
    required: ['offerId'],
  })
  .openapi('UpgradeOfferRequired')

const UserFriendInfoSchema = z
  .object({
    company: z
      .string()
      .openapi({ description: "Your friend's user company name", example: 'World company' }),
    countryIsoCodeAlpha3: FriendCountryIsoCodeAlpha3Schema,
    email: FriendEmailSchema,
    firstName: z
      .string()
      .openapi({ description: "Your friend's user first name", example: 'Bogart' }),
    lastName: z
      .string()
      .openapi({ description: "Your friend's user last name", example: 'Humphrey' }),
    profilePictureUrl: FriendProfilePictureUrlSchema.exactOptional(),
    userId: z
      .guid()
      .openapi({
        description: "Your friend's user id",
        example: '00c4a9d2-fc8e-4b3d-8e52-c4f276245bc1',
      }),
    whatIDo: z
      .string()
      .exactOptional()
      .openapi({
        description: "Your friend's user occupation in his company",
        example: "I'm an actor...",
      }),
  })
  .openapi({
    required: ['userId', 'lastName', 'firstName', 'email', 'countryIsoCodeAlpha3', 'company'],
  })
  .openapi('UserFriendInfo')

const UserIdSchema = z
  .guid()
  .openapi({
    description: 'The user identifier',
    example: '8a7fbdec-9e71-472e-9974-27d5c1d57cf8',
    'x-exclude': true,
  })
  .openapi('UserId')

const UserListOfValuesResponseLinksSchema = z
  .object({ self: LinksGetUserListOfValuesLinkSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('UserListOfValuesResponseLinks')

const UserListOfValuesResponseSchema = z
  .object({
    items: z.array(BeezUPCommonListOfValueItemSchema).exactOptional(),
    links: UserListOfValuesResponseLinksSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UserListOfValuesResponse')

const UserLovLinksSchema = z
  .record(z.string(), LinksGetUserListOfValuesLinkSchema)
  .openapi({ description: 'List of lov link. The key is the list name.' })
  .openapi('UserLovLinks')

const UserLovIndexLinksSchema = z
  .object({
    lists: UserLovLinksSchema.exactOptional(),
    self: LinksGetUserLovIndexLinkSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UserLovIndexLinks')

const UserLovIndexSchema = z
  .object({ links: UserLovIndexLinksSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('UserLovIndex')

const ZendeskTokenSchema = z
  .object({
    token: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A JWT token build from your name and email to use on Zendesk',
        example:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c',
      }),
  })
  .openapi({ description: 'JWT token to access Zendesk restricted help center', required: [] })
  .openapi('ZendeskToken')

const _304NotModifiedResponse = {
  description:
    'The ETag sent in the http header If-None-Match did not change. So you are up to date !',
  headers: z.object({
    ETag: {
      description:
        'ETag value to identify the current version of the resource\\\nFor more details go to this link: http://tools.ietf.org/html/rfc7232#section-2.3\n',
      schema: z
        .string()
        .exactOptional()
        .openapi({
          description:
            'ETag value to identify the current version of the resource\\\nFor more details go to this link: http://tools.ietf.org/html/rfc7232#section-2.3\n',
          param: { required: false },
        }),
    },
    'Last-Modified': {
      description:
        'Last modification UTC date of the resource\\\nFor more details go to this link: https://tools.ietf.org/html/rfc7232#section-2.2\n',
      schema: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          description:
            'Last modification UTC date of the resource\\\nFor more details go to this link: https://tools.ietf.org/html/rfc7232#section-2.2\n',
          param: { required: false },
        }),
    },
  }),
}

const _412PreConditionFailedResponse = {
  description:
    'The ETag sent in the http header If-Match did not match with the current version. Please refresh the information related to this resource.',
  headers: z.object({
    ETag: {
      description:
        'The ETag value to identify the resource.\\\nFor more details go to this link: http://tools.ietf.org/html/rfc7232#section-2.3\n',
      schema: z
        .string()
        .exactOptional()
        .openapi({
          description:
            'The ETag value to identify the resource.\\\nFor more details go to this link: http://tools.ietf.org/html/rfc7232#section-2.3\n',
          param: { required: false },
        }),
    },
  }),
}

const BadRequestResponseResponse = {
  description: 'Invalid request',
  content: { 'application/json': { schema: BeezUPCommonErrorResponseMessageSchema } },
}

const GeneralErrorResponse = {
  description: 'Occurs when something goes wrong',
  content: { 'application/json': { schema: BeezUPCommonErrorResponseMessageSchema } },
}

const StoreNotFoundResponseResponse = {
  description: 'Store or resource not found',
  content: { 'application/json': { schema: BeezUPCommonErrorResponseMessageSchema } },
}

const GenerateBatchOrderInvoiceErrorResponseResponse = {
  description: 'GenerateBatchOrderInvoiceErrorResponse',
  content: {
    'application/json': { schema: z.array(GenerateBatchOrderInvoiceErrorResponseItemSchema) },
  },
}

const ImportAlreadyInProgressResponse = {
  description: 'A catalog importation is already in progress!',
  content: { 'application/json': { schema: ImportAlreadyInProgressResponseSchema } },
}

const ImportStartedResponse = {
  description: 'Catalog importation started',
  content: { 'application/json': { schema: LinksImportationGetImportationMonitoringLinkSchema } },
  headers: z.object({
    Location: {
      description: 'The location of the new resource to poll',
      schema: z
        .string()
        .exactOptional()
        .openapi({
          description: 'The location of the new resource to poll',
          param: { required: false },
        }),
    },
    'Retry-After': {
      description: 'The duration in second to wait before polling this resource',
      schema: z
        .int()
        .min(5)
        .default(5)
        .exactOptional()
        .openapi({
          description: 'The duration in second to wait before polling this resource',
          param: { required: false },
        }),
    },
  }),
}

const OrderGenerateForbiddenResponseResponse = {
  description:
    'OwnerId not authorized\nThe required order invoice settings have not been set\nBeezUPOrderStatus forbidden\n',
  content: { 'application/json': { schema: ErrorResponseMessageSchema } },
}

const OrderGenerateTooManyRequestsResponseResponse = {
  description: 'Too many Requests. Please retry in a few seconds\n',
  content: { 'application/json': { schema: ErrorResponseMessageSchema } },
}

const OrderInvoiceConflictResponseResponse = {
  description: 'The InvoiceNumber is already used\nThere is already an invoice for this order\n',
  content: { 'application/json': { schema: ErrorResponseMessageSchema } },
}

const OrderInvoiceDesignSettingsNotFoundResponseResponse = {
  description: 'The order invoice design is not found\n',
  content: { 'application/json': { schema: ErrorResponseMessageSchema } },
}

const OrderInvoiceGeneralSettingsNotFoundResponseResponse = {
  description: 'The order invoice general settings are not found\n',
  content: { 'application/json': { schema: ErrorResponseMessageSchema } },
}

const OrderInvoiceNotFoundResponse = {
  description: 'The order invoice does not exist\n',
  content: { 'application/json': { schema: ErrorResponseMessageSchema } },
}

const OrderNotFoundResponseResponse = {
  description: 'The order cannot be retrieved\n',
  content: { 'application/json': { schema: ErrorResponseMessageSchema } },
}

const OrderSubscriptionTargetNotAvailableResponseResponse = {
  description: 'The target url is not available',
  content: { 'application/json': { schema: ErrorResponseMessageSchema } },
}

const OwnerIdNotAuthorizedResponseResponse = {
  description: 'The ownerId is not found or not authorized',
  content: { 'application/json': { schema: ErrorResponseMessageSchema } },
}

const ProcessingResponseResponse = {
  description:
    'The marketplace configuration related to this channel catalog is currently in progress. Please retry later.',
  headers: z.object({
    'Retry-After': {
      description: 'Indicate the duration to before the next retry in second.',
      schema: z
        .int32()
        .exactOptional()
        .openapi({
          description: 'Indicate the duration to before the next retry in second.',
          param: { required: false },
        }),
    },
  }),
}

const RetryRejectedResponseResponse = {
  description:
    'The subscription is deactivated or your subscription consumption availability status is available.',
  content: { 'application/json': { schema: ErrorResponseMessageSchema } },
}

const SaveOrderInvoiceDesignSettingsBadRequestResponseResponse = {
  description: 'The design did not pass the validation\n',
  content: { 'application/json': { schema: ErrorResponseMessageSchema } },
}

const SaveOrderInvoiceGeneralSettingsBadRequestResponseResponse = {
  description: 'The settingsgeneral did not pass the validation\n',
  content: { 'application/json': { schema: ErrorResponseMessageSchema } },
}

const SubscriptionAlreadyExistsResponseResponse = {
  description: 'The subscription id is already used.',
  content: { 'application/json': { schema: ErrorResponseMessageSchema } },
}

const SubscriptionNotFoundResponseResponse = {
  description: 'The subscription is not found',
  content: { 'application/json': { schema: ErrorResponseMessageSchema } },
}

const AcceptEncodingRequiredParameterParamsSchema = z
  .preprocess(
    (val) =>
      val === undefined
        ? val
        : (Array.isArray(val) ? val : [val]).flatMap((item) =>
            typeof item === 'string' ? item.split(',').map((part) => part.trim()) : [item],
          ),
    z.array(z.string()),
  )
  .openapi({
    param: {
      description:
        'Allows the client to indicate whether it accepts a compressed encoding to reduce traffic size.',
      in: 'header',
      name: 'Accept-Encoding',
      required: true,
      schema: { items: { type: 'string' }, type: 'array' },
      style: 'simple',
    },
  })

const AcceptLanguageParameterParamsSchema = z
  .preprocess(
    (val) =>
      val === undefined
        ? val
        : (Array.isArray(val) ? val : [val]).flatMap((item) =>
            typeof item === 'string' ? item.split(',').map((part) => part.trim()) : [item],
          ),
    z.array(z.string()),
  )
  .exactOptional()
  .openapi({
    param: {
      description: 'Indicates that the client accepts the following languages.',
      in: 'header',
      name: 'Accept-Language',
      required: false,
      schema: { items: { type: 'string' }, type: 'array' },
      style: 'simple',
    },
  })

const AccountIdParamsSchema = z
  .string()
  .openapi({
    param: {
      description: 'The Account Identifier',
      in: 'path',
      name: 'accountId',
      required: true,
      schema: { format: 'MarketplaceAccountId', type: 'string' },
    },
  })

const AccountIdParameterParamsSchema = z
  .preprocess(
    (val) =>
      typeof val === 'string' &&
      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
        ? Number(val)
        : val,
    z.int32(),
  )
  .openapi({
    param: {
      example: '1001',
      in: 'path',
      name: 'accountId',
      required: true,
      schema: { format: 'int32', type: 'integer' },
    },
  })

const BeezUPOrderIdParameterParamsSchema = z
  .uuid()
  .openapi({
    param: {
      description: 'The BeezUP Order identifier',
      example: '00000000000000000000000000000000000000000000000',
      in: 'path',
      name: 'beezUPOrderId',
      required: true,
      schema: { format: 'uuid', type: 'string' },
    },
  })

const BeezUPOrderUUIDParamsSchema = z
  .string()
  .openapi({
    param: {
      description: 'The BeezUP Order UUID',
      in: 'path',
      name: 'beezUPOrderUUID',
      required: true,
      schema: { format: 'BeezUPOrderUUID', type: 'string' },
    },
  })

const CatalogColumnIdParamsSchema = z
  .guid()
  .openapi({
    param: {
      description: 'The catalog column identifier',
      in: 'path',
      name: 'columnId',
      required: true,
      schema: { format: 'guid', type: 'string' },
    },
  })

const ChangeOrderTypeParameterParamsSchema = z
  .string()
  .openapi({
    param: {
      description: 'The Order change type',
      in: 'path',
      name: 'changeOrderType',
      required: true,
      schema: { type: 'string' },
      'x-lov': 'OrderChangeBusinessOperationType',
    },
  })

const ChannelCatalogIdParameterParamsSchema = z
  .guid()
  .openapi({
    param: {
      description: 'The channel catalog identifier',
      example: '6d6b04de-406b-4539-8e7e-bf3e8da5dfb0',
      in: 'path',
      name: 'channelCatalogId',
      required: true,
      schema: { format: 'guid', type: 'string' },
    },
  })

const ChannelIdParameterParamsSchema = z
  .guid()
  .openapi({
    param: {
      description: 'The channel identifier',
      example: '2dc136a7-0d3d-4cc9-a825-a28a42c53e28',
      in: 'path',
      name: 'channelId',
      required: true,
      schema: { format: 'guid', type: 'string' },
    },
  })

const CustomColumnIdParamsSchema = z
  .guid()
  .openapi({
    param: {
      description: 'The custom column identifier',
      in: 'path',
      name: 'columnId',
      required: true,
      schema: { format: 'guid', type: 'string' },
    },
  })

const ExecutionIdParamsSchema = z
  .guid()
  .openapi({
    param: {
      description: 'The execution identifier of you catalog importation',
      in: 'path',
      name: 'executionId',
      required: true,
      schema: { format: 'guid', type: 'string' },
    },
  })

const ExportFormatInQueryGeneralParameterParamsSchema = z
  .enum(['xlsx', 'csv'])
  .openapi({
    param: {
      description: 'The file type of the exportation',
      in: 'query',
      name: 'format',
      required: true,
      schema: { enum: ['xlsx', 'csv'], type: 'string' },
    },
  })

const GroupIdParameterParamsSchema = z
  .guid()
  .openapi({
    param: {
      description: 'The exclusion filter group identifier',
      example: '6d6b04de-406b-4539-8e7e-bf3e8da5dfb0',
      in: 'path',
      name: 'groupId',
      required: true,
      schema: { format: 'guid', type: 'string' },
    },
  })

const IfMatchParameterParamsSchema = z
  .string()
  .openapi({
    param: {
      description:
        'ETag value to identify the last known version of requested resource.\\\nTo ensure that you are making a change on the lastest version of the resource.\\\nFor more details go to this link: http://tools.ietf.org/html/rfc7232#section-2.3\n',
      in: 'header',
      name: 'If-Match',
      required: true,
      schema: { type: 'string' },
    },
  })

const IfNoneMatchParameterParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        'ETag value to identify the last known version of requested resource.\\\nTo avoid useless exchange, we recommend you to indicate the ETag you previously got from this operation.\\\nIf the ETag value does not match the response will be 200 to give you a new content, otherwise the response will be: 304 Not Modified, without any content.\\\nFor more details go to this link: http://tools.ietf.org/html/rfc7232#section-2.3\n',
      in: 'header',
      name: 'If-None-Match',
      required: false,
      schema: { type: 'string' },
    },
  })

const MarketplaceTechnicalCodeParamsSchema = z
  .string()
  .openapi({
    param: {
      description: 'The Marketplace Technical Code',
      in: 'path',
      name: 'marketplaceTechnicalCode',
      required: true,
      schema: { format: 'MarketplaceTechnicalCode', type: 'string' },
    },
  })

const MarketplaceTechnicalCodeParameterParamsSchema = z
  .string()
  .openapi({
    param: {
      description: 'The marketplace technical code',
      example: 'Amazon',
      in: 'path',
      name: 'marketplaceTechnicalCode',
      required: true,
      schema: { type: 'string' },
    },
  })

const OptimisationActionNameGeneralParametersParamsSchema = z
  .enum(['reenable', 'disable'])
  .openapi({
    param: {
      in: 'path',
      name: 'actionName',
      required: true,
      schema: { enum: ['reenable', 'disable'], format: 'optimisationActionName', type: 'string' },
    },
  })

const PageNumberQueryStrngParameterParamsSchema = z
  .preprocess(
    (val) =>
      typeof val === 'string' &&
      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
        ? Number(val)
        : val,
    z.int32().min(1),
  )
  .openapi({
    param: {
      description: 'The page number you want to get',
      example: '1',
      in: 'query',
      name: 'pageNumber',
      required: true,
      schema: { format: 'int32', minimum: 1, type: 'integer' },
    },
  })

const PageSizeQueryStrngParameterParamsSchema = z
  .preprocess(
    (val) =>
      typeof val === 'string' &&
      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
        ? Number(val)
        : val,
    z.int32().min(25).max(100),
  )
  .openapi({
    param: {
      description: 'The entry count you want to get',
      example: '25',
      in: 'query',
      name: 'pageSize',
      required: true,
      schema: { format: 'int32', maximum: 100, minimum: 25, type: 'integer' },
    },
  })

const ProductIdParameterParamsSchema = z
  .guid()
  .openapi({
    param: {
      description: 'The product identifier',
      example: '578419df-1bbf-41a6-96fa-862e42182b67',
      in: 'path',
      name: 'productId',
      required: true,
      schema: { format: 'guid', type: 'string' },
    },
  })

const ProductSampleIndexParamsSchema = z
  .preprocess(
    (val) =>
      typeof val === 'string' &&
      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
        ? Number(val)
        : val,
    z.int32().min(0).max(99),
  )
  .openapi({
    param: {
      description: 'Index of the product sample. Starting from 0 to 99.',
      in: 'path',
      name: 'productSampleIndex',
      required: true,
      schema: { format: 'int32', maximum: 99, minimum: 0, type: 'integer' },
    },
  })

const ReportFilterIdOnlyGeneralParametersParamsSchema = z
  .guid()
  .openapi({
    param: {
      description: 'Your report filter identifier',
      in: 'path',
      name: 'reportFilterId',
      required: true,
      schema: { format: 'guid', type: 'string' },
    },
  })

const RuleIdOnlyGeneralParametersParamsSchema = z
  .guid()
  .openapi({
    param: {
      description: 'Your rule identifier',
      in: 'path',
      name: 'ruleId',
      required: true,
      schema: { format: 'guid', type: 'string' },
    },
  })

const StoreIdOnlyGeneralParametersParamsSchema = z
  .guid()
  .openapi({
    param: {
      description: 'Your store identifier',
      in: 'path',
      name: 'storeId',
      required: true,
      schema: { format: 'guid', type: 'string' },
    },
  })

const StoreIdsParameterParamsSchema = z
  .preprocess(
    (val) =>
      val === undefined
        ? val
        : (Array.isArray(val) ? val : [val]).flatMap((item) =>
            typeof item === 'string' ? item.split(',') : [item],
          ),
    z.array(z.string()),
  )
  .exactOptional()
  .openapi({
    param: {
      description: 'StoredIds to filter',
      explode: false,
      in: 'query',
      name: 'storeIds',
      required: false,
      schema: { items: { type: 'string' }, type: 'array' },
      style: 'form',
    },
  })

const SubscriptionIdPathParameterParamsSchema = z
  .string()
  .openapi({
    param: {
      in: 'path',
      name: 'id',
      required: true,
      schema: { format: 'SubscriptionId', type: 'string' },
    },
  })

const TestModeInQueryParameterParamsSchema = z
  .stringbool()
  .default(false)
  .exactOptional()
  .openapi({
    param: {
      description:
        'If true, the operation will be not be sent to marketplace. But the validation will be taken in account.',
      example: 'false',
      in: 'query',
      name: 'testMode',
      required: false,
      schema: { default: 'false', type: 'boolean' },
    },
  })

const UserNameInQueryParameterParamsSchema = z
  .string()
  .openapi({
    param: {
      description:
        "Sometimes the user in the e-commerce application is not the same as user associated with the current subscription key. We recommend providing your application's user login.",
      in: 'query',
      name: 'userName',
      required: true,
      schema: { type: 'string' },
    },
  })

const OptimiseByCategoryRequestRequestBody = {
  description: 'The channel identifier list concerned by this optimisation',
  content: {
    'application/json': {
      schema: z
        .array(z.guid())
        .length(1)
        .superRefine((items, ctx) => {
          const seen = new Map()
          for (const [i, val] of items.entries()) {
            const key = JSON.stringify(val)
            if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
            else seen.set(key, i)
          }
        })
        .openapi({ example: ['a2d38563-50f0-43f1-be2b-b16e7ec4f007'] }),
    },
  },
}

const ChangeOrderListRequestRequestBody = {
  content: { 'application/json': { schema: ChangeOrderListRequestSchema } },
  required: true,
}

const ChangeOrderRequestRequestBody = {
  content: { 'application/json': { schema: ChangeOrderRequestSchema } },
}

const ChangeUserColumnNameRequestRequestBody = {
  content: { 'application/json': { schema: ChangeUserColumnNameRequestSchema } },
  required: true,
}

const ClearMerchantOrderInfoListRequestRequestBody = {
  content: { 'application/json': { schema: ClearMerchantOrderInfoListRequestSchema } },
  required: true,
}

const GetChannelCatalogProductInfoListRequestRequestBody = {
  description: 'The channel catalog product list filter',
  content: { 'application/json': { schema: GetChannelCatalogProductInfoListRequestSchema } },
  required: true,
}

const MapBeezUPColumnRequestRequestBody = {
  content: { 'application/json': { schema: MapBeezUPColumnRequestSchema } },
  required: true,
}

const OrderInvoiceDesignSettingsRequestBody = {
  content: { 'application/json': { schema: OrderInvoiceDesignSettingsSchema } },
  required: true,
}

const OrderListRequestRequestBody = {
  content: { 'application/json': { schema: OrderListRequestSchema } },
  required: true,
}

const ReportByDayRequestRequestBody = {
  content: { 'application/json': { schema: ReportByDayRequestSchema } },
  required: true,
}

const SetMerchantOrderInfoListRequestRequestBody = {
  content: { 'application/json': { schema: SetMerchantOrderInfoListRequestSchema } },
  required: true,
}

const SetMerchantOrderInfoRequestRequestBody = {
  content: { 'application/json': { schema: SetMerchantOrderInfoRequestSchema } },
  required: true,
}

const ApiKeySecurityScheme = { in: 'header', name: 'Ocp-Apim-Subscription-Key', type: 'apiKey' }

export const postOrdersV3BatchesChangeOrdersRoute = createRoute({
  method: 'post',
  path: '/orders/v3/batches/changeOrders',
  tags: ['Marketplaces - Orders V3 - Batches'],
  summary:
    'Send a batch of operations to change your marketplace Order information: accept, ship, etc.  (max 100 items per call)',
  description:
    'The purpose of this operation is to reduce the amount of request to the API. \nMax 100 items per call.\n',
  operationId: 'ChangeOrderListV3',
  request: {
    query: z.object({
      userName: UserNameInQueryParameterParamsSchema,
      testMode: TestModeInQueryParameterParamsSchema,
    }),
    body: ChangeOrderListRequestRequestBody,
  },
  responses: {
    202: {
      description:
        'Succesfully received and processed batched operations. Please check response to see the status per operation.',
      content: { 'application/json': { schema: BatchOrderOperationResponseSchema } },
    },
    400: {
      description: 'Requested too many batch operations',
      content: { 'application/json': { schema: ErrorResponseMessageSchema } },
    },
    default: GeneralErrorResponse,
  },
})

export const postOrdersV3BatchesChangeOrdersChangeOrderTypeRoute = createRoute({
  method: 'post',
  path: '/orders/v3/batches/changeOrders/{changeOrderType}',
  tags: ['Marketplaces - Orders V3 - Batches'],
  summary:
    'Send a batch of operations to change your marketplace Order information: accept, ship, etc.  (max 100 items per call)',
  description:
    'The purpose of this operation is to reduce the amount of request to the API. \nMax 100 items per call.\n',
  operationId: 'ChangeOrderListV2',
  request: {
    query: z.object({
      userName: UserNameInQueryParameterParamsSchema,
      testMode: TestModeInQueryParameterParamsSchema,
    }),
    params: z.object({ changeOrderType: ChangeOrderTypeParameterParamsSchema }),
    body: {
      content: { 'application/json': { schema: ChangeOrderListRequestV2Schema } },
      required: true,
    },
  },
  responses: {
    202: {
      description:
        'Succesfully received and processed batched operations. Please check response to see the status per operation.',
      content: { 'application/json': { schema: BatchOrderOperationResponseSchema } },
    },
    400: {
      description: 'Requested too many batch operations',
      content: { 'application/json': { schema: ErrorResponseMessageSchema } },
    },
    default: GeneralErrorResponse,
  },
})

export const postOrdersV3BatchesClearMerchantOrderInfosRoute = createRoute({
  method: 'post',
  path: '/orders/v3/batches/clearMerchantOrderInfos',
  tags: ['Marketplaces - Orders V3 - Batches'],
  summary:
    "Send a batch of operations to clear an Order's merchant information (max 100 items per call)",
  description: 'The purpose of this operation is to reduce the amount of request to the API.',
  operationId: 'ClearMerchantOrderInfoListV3',
  request: {
    query: z.object({ testMode: TestModeInQueryParameterParamsSchema }),
    body: ClearMerchantOrderInfoListRequestRequestBody,
  },
  responses: {
    202: {
      description:
        'Succesfully received and processed batched operations. Please check response to see the status per operation.',
      content: { 'application/json': { schema: BatchOrderOperationResponseSchema } },
    },
    400: {
      description: 'Requested too many batch operations',
      content: { 'application/json': { schema: ErrorResponseMessageSchema } },
    },
    default: GeneralErrorResponse,
  },
})

export const postOrdersV3BatchesSetMerchantOrderInfosRoute = createRoute({
  method: 'post',
  path: '/orders/v3/batches/setMerchantOrderInfos',
  tags: ['Marketplaces - Orders V3 - Batches'],
  summary:
    "Send a batch of operations to set an Order's merchant information  (max 100 items per call)",
  description: 'The purpose of this operation is to reduce the amount of request to the API.',
  operationId: 'SetMerchantOrderInfoListV3',
  request: {
    query: z.object({ testMode: TestModeInQueryParameterParamsSchema }),
    body: SetMerchantOrderInfoListRequestRequestBody,
  },
  responses: {
    202: {
      description:
        'Succesfully received and processed batched operations. Please check response to see the status per operation.',
      content: { 'application/json': { schema: BatchOrderOperationResponseSchema } },
    },
    400: {
      description: 'Requested too many batch operations',
      content: { 'application/json': { schema: ErrorResponseMessageSchema } },
    },
    default: GeneralErrorResponse,
  },
})

export const postOrdersV3HarvestRoute = createRoute({
  method: 'post',
  path: '/orders/v3/harvest',
  tags: ['Marketplaces - Orders V3 - Global'],
  summary: 'Send harvest request to all your marketplaces',
  operationId: 'HarvestAllV3',
  request: {
    query: z.object({
      storeId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The StoreId to filter by',
            example: '04730364-9826-4ff3-92e4-51fccd02bf10',
            in: 'query',
            name: 'storeId',
            required: false,
            schema: { format: 'StoreId', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    202: {
      description: 'Successfully sent harvest request to all marketplaces',
      headers: z.object({
        'Retry-After': {
          description:
            'Indicates the duration in seconds to wait to be able to make this request again',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description:
                'Indicates the duration in seconds to wait to be able to make this request again',
              param: { required: false },
            }),
        },
      }),
    },
    404: {
      description: 'Requested Store could not be found',
      content: { 'application/json': { schema: ErrorResponseMessageSchema } },
    },
    409: {
      description: 'Failed to send harvest request because allowed rate limits have been exceeded',
      content: { 'application/json': { schema: ErrorResponseMessageSchema } },
      headers: z.object({
        'Retry-After': {
          description:
            'Indicates the duration in seconds to wait to be able to make this request again',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description:
                'Indicates the duration in seconds to wait to be able to make this request again',
              param: { required: false },
            }),
        },
      }),
    },
    default: GeneralErrorResponse,
  },
})

export const postOrdersV3ListFullRoute = createRoute({
  method: 'post',
  path: '/orders/v3/list/full',
  tags: ['Marketplaces - Orders V3 - List'],
  summary: 'Get a paginated list of all Orders with all Order and Order Item(s) properties',
  description:
    'The purpose of this operation is to reduce the amount of request to the API.\\\n\\\nPrevious implmentation of this feature only returned a partial (light) version of the Orders. The purpose of this API is to reduce the number of incoming requests by returning the complete (full) Order and Order Item(s) properties.\n',
  operationId: 'GetOrderListFullV3',
  request: {
    headers: z.object({
      'Accept-Encoding': z
        .string()
        .openapi({
          param: {
            description:
              'Allows the client to indicate wether it accepts a compressed encoding to reduce traffic size',
            in: 'header',
            name: 'Accept-Encoding',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: OrderListRequestRequestBody,
  },
  responses: {
    200: {
      description: 'Successfully fetched the full list of Orders',
      content: { 'application/json': { schema: OrderListFullWithLinksSchema } },
    },
    400: {
      description:
        'Could not process request for given parameters values. Please check error message for more details.',
      content: { 'application/json': { schema: ErrorResponseMessageSchema } },
    },
    default: GeneralErrorResponse,
  },
})

export const postOrdersV3ListLightRoute = createRoute({
  method: 'post',
  path: '/orders/v3/list/light',
  tags: ['Marketplaces - Orders V3 - List'],
  summary: 'Get a paginated list of all Orders without details',
  operationId: 'GetOrderListLightV3',
  request: { body: OrderListRequestRequestBody },
  responses: {
    200: {
      description: 'Successfully fetched the list of Orders',
      content: { 'application/json': { schema: OrderListLightWithLinksSchema } },
    },
    400: {
      description:
        'Could not process request for given parameters values. Please check error message for more details.',
      content: { 'application/json': { schema: ErrorResponseMessageSchema } },
    },
    default: GeneralErrorResponse,
  },
})

export const getOrdersV3LovOrderManagementReadyMarketplaceBusinessCodeRoute = createRoute({
  method: 'get',
  path: '/orders/v3/lov/orderManagementReadyMarketplaceBusinessCode',
  tags: ['Marketplaces - Orders V3 - Global'],
  description: 'Get the list of MarketplaceBusinessCode ready for Order Management',
  operationId: 'GetOrderManagementReadyMarketplaceBusinessCode',
  request: {
    headers: z.object({ 'Accept-Language': AcceptLanguageParameterParamsSchema }),
    query: z.object({ storeIds: StoreIdsParameterParamsSchema }),
  },
  responses: {
    200: {
      description: 'Successfully fetched current synchronization status',
      content: { 'application/json': { schema: OMReadyMarketplaceBusinessCodeResponseSchema } },
    },
    304: _304NotModifiedResponse,
    404: {
      description: 'Requested Store could not be found',
      content: { 'application/json': { schema: ErrorResponseMessageSchema } },
    },
    default: GeneralErrorResponse,
  },
})

export const getOrdersV3StatusRoute = createRoute({
  method: 'get',
  path: '/orders/v3/status',
  tags: ['Marketplaces - Orders V3 - Global'],
  description: 'Get current synchronization status between your marketplaces and BeezUP accounts',
  operationId: 'GetMarketplaceAccountsSynchronizationV3',
  request: {
    headers: z.object({ 'If-None-Match': IfNoneMatchParameterParamsSchema }),
    query: z.object({ storeIds: StoreIdsParameterParamsSchema }),
  },
  responses: {
    200: {
      description:
        'Successfully fetched the list of MarketplaceBusinessCode ready for Order Management',
      content: { 'application/json': { schema: AccountSynchronizationListSchema } },
    },
    304: _304NotModifiedResponse,
    400: {
      description: 'Invalid store id',
      content: { 'application/json': { schema: ErrorResponseMessageSchema } },
    },
    default: GeneralErrorResponse,
  },
})

export const postOrdersV3MarketplaceTechnicalCodeAccountIdHarvestRoute = createRoute({
  method: 'post',
  path: '/orders/v3/{marketplaceTechnicalCode}/{accountId}/harvest',
  tags: ['Marketplaces - Orders V3 - Order'],
  summary: 'Send harvest request for an Account',
  operationId: 'HarvestAccount',
  request: {
    params: z.object({
      marketplaceTechnicalCode: MarketplaceTechnicalCodeParameterParamsSchema,
      accountId: AccountIdParameterParamsSchema,
    }),
    query: z.object({
      marketplaceOrderId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'marketplaceOrderId',
            schema: { type: 'string' },
            required: false,
          },
        }),
      beezUPOrderId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'beezUPOrderId',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    202: {
      description: 'Successfully sent Order harvest request',
      headers: z.object({
        'Retry-After': {
          description:
            'Indicates the duration in seconds to wait to be able to make this request again',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description:
                'Indicates the duration in seconds to wait to be able to make this request again',
              param: { required: false },
            }),
        },
      }),
    },
    404: {
      description: 'Requested Account Or beezUPOrderId could not be found',
      content: { 'application/json': { schema: ErrorResponseMessageSchema } },
    },
    409: {
      description: 'Failed to send harvest request because allowed rate limits have been exceeded',
      content: { 'application/json': { schema: ErrorResponseMessageSchema } },
      headers: z.object({
        'Retry-After': {
          description:
            'Indicates the duration in seconds to wait to be able to make this request again',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description:
                'Indicates the duration in seconds to wait to be able to make this request again',
              param: { required: false },
            }),
        },
      }),
    },
    default: GeneralErrorResponse,
  },
})

export const getOrdersV3MarketplaceTechnicalCodeAccountIdBeezUPOrderIdRoute = createRoute({
  method: 'get',
  path: '/orders/v3/{marketplaceTechnicalCode}/{accountId}/{beezUPOrderId}',
  tags: ['Marketplaces - Orders V3 - Order'],
  summary: 'Get full Order and Order Item(s) properties',
  operationId: 'GetOrderV3',
  request: {
    params: z.object({
      marketplaceTechnicalCode: MarketplaceTechnicalCodeParameterParamsSchema,
      accountId: AccountIdParameterParamsSchema,
      beezUPOrderId: BeezUPOrderIdParameterParamsSchema,
    }),
    headers: z.object({ 'If-None-Match': IfNoneMatchParameterParamsSchema }),
  },
  responses: {
    200: {
      description: 'Successfully fetched Order and Order Item(s) properties',
      content: { 'application/json': { schema: OrderWithLinksSchema } },
      headers: z.object({
        ETag: {
          description:
            'ETag value to identify the current version of requested Order\\\nFor more details go to this link: http://tools.ietf.org/html/rfc7232#section-2.3\n',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'ETag value to identify the current version of requested Order\\\nFor more details go to this link: http://tools.ietf.org/html/rfc7232#section-2.3\n',
              param: { required: false },
            }),
        },
        'Last-Modified': {
          description:
            'Last modification UTC date of the order\\\nFor more details go to this link: https://tools.ietf.org/html/rfc7232#section-2.2\n',
          schema: z.iso
            .datetime({ offset: true })
            .exactOptional()
            .openapi({
              description:
                'Last modification UTC date of the order\\\nFor more details go to this link: https://tools.ietf.org/html/rfc7232#section-2.2\n',
              param: { required: false },
            }),
        },
      }),
    },
    304: _304NotModifiedResponse,
    404: {
      description: 'Requested Order could not be found',
      content: { 'application/json': { schema: ErrorResponseMessageSchema } },
    },
    default: GeneralErrorResponse,
  },
})

export const headOrdersV3MarketplaceTechnicalCodeAccountIdBeezUPOrderIdRoute = createRoute({
  method: 'head',
  path: '/orders/v3/{marketplaceTechnicalCode}/{accountId}/{beezUPOrderId}',
  tags: ['Marketplaces - Orders V3 - Order'],
  summary: 'Get the meta information about the order (ETag, Last-Modified)',
  description:
    'The purpose of this operation is to reduce the bandwith usage by getting just the meta information about the order (ETag, Last-Modified) with the body.\nThis could be useful\n',
  operationId: 'HeadOrderV3',
  request: {
    params: z.object({
      marketplaceTechnicalCode: MarketplaceTechnicalCodeParameterParamsSchema,
      accountId: AccountIdParameterParamsSchema,
      beezUPOrderId: BeezUPOrderIdParameterParamsSchema,
    }),
    headers: z.object({ 'If-None-Match': IfNoneMatchParameterParamsSchema }),
  },
  responses: {
    200: {
      description: 'Successfully fetched Order and Order Item(s) properties',
      headers: z.object({
        ETag: {
          description:
            'ETag value to identify the current version of requested Order\\\nFor more details go to this link: http://tools.ietf.org/html/rfc7232#section-2.3\n',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'ETag value to identify the current version of requested Order\\\nFor more details go to this link: http://tools.ietf.org/html/rfc7232#section-2.3\n',
              param: { required: false },
            }),
        },
        'Last-Modified': {
          description:
            'Last modification UTC date of the order\\\nFor more details go to this link: https://tools.ietf.org/html/rfc7232#section-2.2\n',
          schema: z.iso
            .datetime({ offset: true })
            .exactOptional()
            .openapi({
              description:
                'Last modification UTC date of the order\\\nFor more details go to this link: https://tools.ietf.org/html/rfc7232#section-2.2\n',
              param: { required: false },
            }),
        },
      }),
    },
    304: _304NotModifiedResponse,
    404: {
      description: 'Requested Order could not be found',
      content: { 'application/json': { schema: ErrorResponseMessageSchema } },
    },
    default: GeneralErrorResponse,
  },
})

export const postOrdersV3MarketplaceTechnicalCodeAccountIdBeezUPOrderIdClearMerchantOrderInfoRoute =
  createRoute({
    method: 'post',
    path: '/orders/v3/{marketplaceTechnicalCode}/{accountId}/{beezUPOrderId}/clearMerchantOrderInfo',
    tags: ['Marketplaces - Orders V3 - Order'],
    summary: "Clear an Order's merchant information",
    operationId: 'ClearMerchantOrderInfoV3',
    request: {
      params: z.object({
        marketplaceTechnicalCode: MarketplaceTechnicalCodeParameterParamsSchema,
        accountId: AccountIdParameterParamsSchema,
        beezUPOrderId: BeezUPOrderIdParameterParamsSchema,
      }),
      query: z.object({ testMode: TestModeInQueryParameterParamsSchema }),
    },
    responses: {
      202: { description: 'Clear Order merchant order info accepted' },
      400: {
        description:
          'Could not update Order merchant information. Please see body for more information.',
        content: { 'application/json': { schema: ErrorResponseMessageSchema } },
      },
      404: {
        description: 'Requested Order could not be found',
        content: { 'application/json': { schema: ErrorResponseMessageSchema } },
      },
      default: GeneralErrorResponse,
    },
  })

export const postOrdersV3MarketplaceTechnicalCodeAccountIdBeezUPOrderIdHarvestRoute = createRoute({
  method: 'post',
  path: '/orders/v3/{marketplaceTechnicalCode}/{accountId}/{beezUPOrderId}/harvest',
  tags: ['Marketplaces - Orders V3 - Order'],
  summary: 'Send harvest request for a single Order',
  operationId: 'HarvestOrderV3',
  request: {
    params: z.object({
      marketplaceTechnicalCode: MarketplaceTechnicalCodeParameterParamsSchema,
      accountId: AccountIdParameterParamsSchema,
      beezUPOrderId: BeezUPOrderIdParameterParamsSchema,
    }),
  },
  responses: {
    202: {
      description: 'Successfully sent Order harvest request',
      headers: z.object({
        'Retry-After': {
          description:
            'Indicates the duration in seconds to wait to be able to make this request again',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description:
                'Indicates the duration in seconds to wait to be able to make this request again',
              param: { required: false },
            }),
        },
      }),
    },
    404: {
      description: 'Requested Order could not be found',
      content: { 'application/json': { schema: ErrorResponseMessageSchema } },
    },
    409: {
      description: 'Failed to send harvest request because allowed rate limits have been exceeded',
      content: { 'application/json': { schema: ErrorResponseMessageSchema } },
      headers: z.object({
        'Retry-After': {
          description:
            'Indicates the duration in seconds to wait to be able to make this request again',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description:
                'Indicates the duration in seconds to wait to be able to make this request again',
              param: { required: false },
            }),
        },
      }),
    },
    default: GeneralErrorResponse,
  },
})

export const getOrdersV3MarketplaceTechnicalCodeAccountIdBeezUPOrderIdHistoryRoute = createRoute({
  method: 'get',
  path: '/orders/v3/{marketplaceTechnicalCode}/{accountId}/{beezUPOrderId}/history',
  tags: ['Marketplaces - Orders V3 - Order'],
  summary: "Get an Order's harvest and change history",
  operationId: 'GetOrderHistoryV3',
  request: {
    params: z.object({
      marketplaceTechnicalCode: MarketplaceTechnicalCodeParameterParamsSchema,
      accountId: AccountIdParameterParamsSchema,
      beezUPOrderId: BeezUPOrderIdParameterParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Successfully fetched Order history',
      content: { 'application/json': { schema: OrderHistorySchema } },
    },
    304: _304NotModifiedResponse,
    404: {
      description: 'Requested Order could not be found',
      content: { 'application/json': { schema: ErrorResponseMessageSchema } },
    },
    default: GeneralErrorResponse,
  },
})

export const getOrdersV3MarketplaceTechnicalCodeAccountIdBeezUPOrderIdHistoryOrderChangeExecutionUUIDRoute =
  createRoute({
    method: 'get',
    path: '/orders/v3/{marketplaceTechnicalCode}/{accountId}/{beezUPOrderId}/history/{orderChangeExecutionUUID}',
    tags: ['Marketplaces - Orders V3 - Order'],
    summary: 'Get the order change reporting',
    description: 'This operation will help you to know the status of your order change operation',
    operationId: 'GetOrderChangeReportingV3',
    request: {
      params: z.object({
        marketplaceTechnicalCode: MarketplaceTechnicalCodeParameterParamsSchema,
        accountId: AccountIdParameterParamsSchema,
        beezUPOrderId: BeezUPOrderIdParameterParamsSchema,
        orderChangeExecutionUUID: z
          .string()
          .openapi({
            param: {
              description: 'The order change execution id',
              in: 'path',
              name: 'orderChangeExecutionUUID',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'Successfully fetched Order change reporting',
        content: { 'application/json': { schema: ChangeOrderReportingSchema } },
      },
      304: _304NotModifiedResponse,
      404: {
        description: 'Requested Order could not be found',
        content: { 'application/json': { schema: ErrorResponseMessageSchema } },
      },
      default: GeneralErrorResponse,
    },
  })

export const postOrdersV3MarketplaceTechnicalCodeAccountIdBeezUPOrderIdSetMerchantOrderInfoRoute =
  createRoute({
    method: 'post',
    path: '/orders/v3/{marketplaceTechnicalCode}/{accountId}/{beezUPOrderId}/setMerchantOrderInfo',
    tags: ['Marketplaces - Orders V3 - Order'],
    summary: "Set an Order's merchant information",
    operationId: 'SetMerchantOrderInfoV3',
    request: {
      params: z.object({
        marketplaceTechnicalCode: MarketplaceTechnicalCodeParameterParamsSchema,
        accountId: AccountIdParameterParamsSchema,
        beezUPOrderId: BeezUPOrderIdParameterParamsSchema,
      }),
      query: z.object({ testMode: TestModeInQueryParameterParamsSchema }),
      body: SetMerchantOrderInfoRequestRequestBody,
    },
    responses: {
      202: { description: 'Set Order merchant order info accepted' },
      400: {
        description:
          'Could not update Order merchant information. Please see body for more information.',
        content: { 'application/json': { schema: ErrorResponseMessageSchema } },
      },
      404: {
        description: 'Requested Order could not be found',
        content: { 'application/json': { schema: ErrorResponseMessageSchema } },
      },
      default: GeneralErrorResponse,
    },
  })

export const postOrdersV3MarketplaceTechnicalCodeAccountIdBeezUPOrderIdChangeOrderTypeRoute =
  createRoute({
    method: 'post',
    path: '/orders/v3/{marketplaceTechnicalCode}/{accountId}/{beezUPOrderId}/{changeOrderType}',
    tags: ['Marketplaces - Orders V3 - Order'],
    summary: 'Change your marketplace Order Information (accept, ship, etc.)',
    operationId: 'ChangeOrderV3',
    request: {
      params: z.object({
        marketplaceTechnicalCode: MarketplaceTechnicalCodeParameterParamsSchema,
        accountId: AccountIdParameterParamsSchema,
        beezUPOrderId: BeezUPOrderIdParameterParamsSchema,
        changeOrderType: ChangeOrderTypeParameterParamsSchema,
      }),
      query: z.object({
        userName: UserNameInQueryParameterParamsSchema,
        testMode: TestModeInQueryParameterParamsSchema,
      }),
      body: ChangeOrderRequestRequestBody,
    },
    responses: {
      202: {
        description: 'Order change request accepted',
        headers: z.object({
          Location: {
            description:
              'Indicate the address you should follow to know the status of your order change operation',
            schema: z
              .string()
              .exactOptional()
              .openapi({
                description:
                  'Indicate the address you should follow to know the status of your order change operation',
                param: { required: false },
              }),
          },
        }),
      },
      400: {
        description:
          'Invalid order change request, could not be send to the marketplace. Please check the body of this request.',
        content: { 'application/json': { schema: ErrorResponseMessageSchema } },
      },
      404: {
        description: 'Requested Order could not be found',
        content: { 'application/json': { schema: ErrorResponseMessageSchema } },
      },
      409: {
        description:
          'Already processing a change request for this Order.\\\nPlease refresh your clients Order information and retry later.\n',
        content: { 'application/json': { schema: ErrorResponseMessageSchema } },
        headers: z.object({
          Location: {
            description:
              'Indicate the address you should follow to know the status of the existing order change operation',
            schema: z
              .string()
              .exactOptional()
              .openapi({
                description:
                  'Indicate the address you should follow to know the status of the existing order change operation',
                param: { required: false },
              }),
          },
          'Retry-After': {
            description:
              'Indicates the duration in seconds to wait to be able to make this request again',
            schema: z
              .int()
              .exactOptional()
              .openapi({
                description:
                  'Indicates the duration in seconds to wait to be able to make this request again',
                param: { required: false },
              }),
          },
        }),
      },
      412: _412PreConditionFailedResponse,
      default: GeneralErrorResponse,
    },
  })

export const getV2PublicChannelsIndexRoute = createRoute({
  method: 'get',
  path: '/v2/public/channels/',
  tags: ['Public - Channels - Public Channels'],
  summary: 'Get public channel index',
  description:
    'Use this operation to get the correct link to the channels and to the list of values',
  operationId: 'GetChannelsIndex',
  request: { headers: z.object({ 'If-None-Match': IfNoneMatchParameterParamsSchema }) },
  responses: {
    200: {
      description: 'Channel list regrouped by country and links to list of values',
      content: { 'application/json': { schema: PublicChannelIndexSchema } },
    },
    304: _304NotModifiedResponse,
    default: GeneralErrorResponse,
  },
})

export const getV2PublicChannelsCountryIsoCodeRoute = createRoute({
  method: 'get',
  path: '/v2/public/channels/{countryIsoCode}',
  tags: ['Public - Channels - Public Channels'],
  summary: 'The channel list for one country',
  operationId: 'GetChannels',
  request: {
    params: z.object({
      countryIsoCode: z
        .string()
        .openapi({
          param: {
            description:
              'The country iso code alpha 3 based on this: https://en.wikipedia.org/wiki/ISO_3166-1_alpha-3#Decoding_table \\\nTo know which country are available you have to use the operation: GetChannelsByCountry\n',
            in: 'path',
            name: 'countryIsoCode',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    headers: z.object({
      'Accept-Encoding': AcceptEncodingRequiredParameterParamsSchema,
      'If-None-Match': IfNoneMatchParameterParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'The channel list for one country',
      content: {
        'application/json': {
          schema: PublicChannelInfoListSchema,
          examples: {
            response: {
              value: {
                channels: [
                  {
                    homeUrl: 'http://www.amazon.fr',
                    logoUrl:
                      'http://beezupcdn.blob.core.windows.net/comparators/Amazon%2520Direct%2520FRA.png',
                    name: 'Amazon Direct FRA',
                    types: ['Marketplace'],
                  },
                ],
              },
            },
          },
        },
      },
    },
    304: _304NotModifiedResponse,
    404: {
      description: 'Channel country not found',
      content: { 'application/json': { schema: BeezUPCommonErrorResponseMessageSchema } },
    },
    default: GeneralErrorResponse,
  },
})

export const getV2PublicLovIndexRoute = createRoute({
  method: 'get',
  path: '/v2/public/lov/',
  tags: ['Public - List of Values - LOV'],
  summary: 'Get all list names',
  operationId: 'GetPublicLovIndex',
  request: { headers: z.object({ 'If-None-Match': IfNoneMatchParameterParamsSchema }) },
  responses: {
    200: {
      description: 'Get the list names',
      content: { 'application/json': { schema: PublicLovIndexSchema } },
      headers: z.object({
        'Cache-Control': {
          description:
            'Indicates the directive around the caching mechanisms.\\\nFor more information, please go to this link: https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.9\n',
          style: 'simple',
          schema: z
            .array(z.string())
            .exactOptional()
            .openapi({
              description:
                'Indicates the directive around the caching mechanisms.\\\nFor more information, please go to this link: https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.9\n',
              param: { required: false },
            }),
        },
        ETag: {
          description: 'The ETag corresponding to the LOV Index',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'The ETag corresponding to the LOV Index',
              param: { required: false },
            }),
        },
      }),
    },
    304: {
      description:
        'The ETag sent in the http header If-None-Match did not change. So you can keep your version.',
      headers: z.object({
        'Cache-Control': {
          description:
            'Indicates the directive around the caching mechanisms.\\\nFor more information, please go to this link: https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.9\n',
          style: 'simple',
          schema: z
            .array(z.string())
            .exactOptional()
            .openapi({
              description:
                'Indicates the directive around the caching mechanisms.\\\nFor more information, please go to this link: https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.9\n',
              param: { required: false },
            }),
        },
        ETag: {
          description: 'The ETag corresponding to the LOV Index',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'The ETag corresponding to the LOV Index',
              param: { required: false },
            }),
        },
      }),
    },
    default: GeneralErrorResponse,
  },
})

export const getV2PublicLovListNameRoute = createRoute({
  method: 'get',
  path: '/v2/public/lov/{listName}',
  tags: ['Public - List of Values - LOV'],
  summary: 'Get the list of values related to this list name',
  operationId: 'GetPublicListOfValues',
  request: {
    params: z.object({
      listName: z
        .string()
        .openapi({
          param: {
            description: 'The list of value name your want to get',
            in: 'path',
            name: 'listName',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    headers: z.object({
      'Accept-Language': AcceptLanguageParameterParamsSchema,
      'If-None-Match': IfNoneMatchParameterParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'The list of values',
      content: { 'application/json': { schema: PublicListOfValuesResponseSchema } },
      headers: z.object({
        'Cache-Control': {
          description:
            'Indicates the directive around the caching mechanisms.\\\nFor more information, please go to this link: https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.9\n',
          style: 'simple',
          schema: z
            .array(z.string())
            .exactOptional()
            .openapi({
              description:
                'Indicates the directive around the caching mechanisms.\\\nFor more information, please go to this link: https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.9\n',
              param: { required: false },
            }),
        },
        'Content-Language': {
          description: 'Indicates the language use in the response',
          style: 'simple',
          schema: z
            .array(z.string())
            .exactOptional()
            .openapi({
              description: 'Indicates the language use in the response',
              param: { required: false },
            }),
        },
        ETag: {
          description: 'The ETag corresponding to the LOV Index',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'The ETag corresponding to the LOV Index',
              param: { required: false },
            }),
        },
      }),
    },
    304: {
      description:
        'The ETag sent in the http header If-None-Match did not change. So you can keep your version.',
      headers: z.object({
        'Cache-Control': {
          description:
            'Indicates the directive around the caching mechanisms.\\\nFor more information, please go to this link: https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.9\n',
          style: 'simple',
          schema: z
            .array(z.string())
            .exactOptional()
            .openapi({
              description:
                'Indicates the directive around the caching mechanisms.\\\nFor more information, please go to this link: https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.9\n',
              param: { required: false },
            }),
        },
        ETag: {
          description: 'The ETag corresponding to the LOV Index',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'The ETag corresponding to the LOV Index',
              param: { required: false },
            }),
        },
      }),
    },
    404: {
      description: 'List not found',
      content: { 'application/json': { schema: BeezUPCommonErrorResponseMessageSchema } },
    },
    default: GeneralErrorResponse,
  },
})

export const postV2PublicSecurityLoginRoute = createRoute({
  method: 'post',
  path: '/v2/public/security/login',
  tags: ['Public - Security - Security'],
  summary: 'Login',
  description: 'User Login - The login will give your tokens',
  operationId: 'Login',
  request: {
    body: { content: { 'application/json': { schema: LoginRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Your tokens',
      content: { 'application/json': { schema: ApiCredentialsSchema } },
    },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: BeezUPCommonErrorResponseMessageSchema } },
    },
    403: { description: 'Invalid credentials' },
    500: GeneralErrorResponse,
  },
})

export const postV2PublicSecurityLostpasswordRoute = createRoute({
  method: 'post',
  path: '/v2/public/security/lostpassword',
  tags: ['Public - Security - Security'],
  summary: 'Lost password',
  description: 'Lost password - Your password will be regenerated and sent to your email',
  operationId: 'LostPassword',
  request: {
    body: {
      description: 'Your email',
      content: { 'application/json': { schema: BeezUPCommonEmailSchema } },
      required: true,
    },
  },
  responses: {
    204: { description: 'New password sent' },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: BeezUPCommonErrorResponseMessageSchema } },
    },
    404: { description: 'Email not found' },
    500: GeneralErrorResponse,
    502: {
      description: 'Problem with SMTP service',
      content: { 'application/json': { schema: BeezUPCommonErrorResponseMessageSchema } },
    },
  },
})

export const postV2PublicSecurityRegisterRoute = createRoute({
  method: 'post',
  path: '/v2/public/security/register',
  tags: ['Public - Security - Security'],
  summary: 'User Registration',
  description: 'User Registration - Create a new user on BeezUP',
  operationId: 'Register',
  request: {
    body: { content: { 'application/json': { schema: RegisterRequestSchema } }, required: true },
  },
  responses: {
    204: { description: 'Customer registered' },
    400: { description: 'Email or password is invalid. Disposable email are refused.' },
    409: { description: 'Email already used' },
    500: GeneralErrorResponse,
  },
})

export const getV2UserAnalyticsIndexRoute = createRoute({
  method: 'get',
  path: '/v2/user/analytics/',
  tags: ['Analytics - Global'],
  summary: 'Get the Analytics API operation index',
  operationId: 'AnalyticsIndex',
  responses: {
    200: {
      description: 'Analytics API operation index',
      content: { 'application/json': { schema: AnalyticsIndexSchema } },
    },
    default: GeneralErrorResponse,
  },
})

export const postV2UserAnalyticsReportsBydayRoute = createRoute({
  method: 'post',
  path: '/v2/user/analytics/reports/byday',
  tags: ['Analytics - Statistics'],
  summary: 'Get the report by day for a StoreId',
  description: 'Get the report by day for a StoreId',
  operationId: 'GetStoreReportByDayPerStore',
  request: { body: ReportByDayRequestRequestBody },
  responses: {
    200: {
      description: 'Your reporting by day',
      content: { 'application/json': { schema: ReportByDayPerStoreResponseSchema } },
    },
    400: BadRequestResponseResponse,
    404: StoreNotFoundResponseResponse,
    default: GeneralErrorResponse,
  },
})

export const getV2UserAnalyticsTrackingStatusRoute = createRoute({
  method: 'get',
  path: '/v2/user/analytics/tracking/status',
  tags: ['Analytics - Tracking'],
  summary: 'Get the global synchronization status of clicks and orders',
  description:
    'Clicks and orders are eventually consistent. \\\nThis operation gets the current global state of projections.\n',
  operationId: 'GetTrackingStatus',
  responses: {
    200: {
      description: 'The tracking status informations',
      content: { 'application/json': { schema: TrackingStatusSchema } },
    },
    default: GeneralErrorResponse,
  },
})

export const getV2UserAnalyticsStoreIdRoute = createRoute({
  method: 'get',
  path: '/v2/user/analytics/{storeId}',
  tags: ['Analytics - Global'],
  summary: 'Get the Analytics API operation index for one store',
  operationId: 'AnalyticsStoreIndex',
  request: { params: z.object({ storeId: StoreIdOnlyGeneralParametersParamsSchema }) },
  responses: {
    200: {
      description: 'Analytics API operation index for one store',
      content: { 'application/json': { schema: AnalyticsStoreIndexSchema } },
    },
    404: StoreNotFoundResponseResponse,
    default: GeneralErrorResponse,
  },
})

export const postV2UserAnalyticsStoreIdOptimisationsAllActionNameRoute = createRoute({
  method: 'post',
  path: '/v2/user/analytics/{storeId}/optimisations/all/{actionName}',
  tags: ['Analytics - Optimisations'],
  summary: 'Optimise all products',
  description:
    '/!\\ WARNING /!\\ \\\nApply the operation on every product related to this request. \\\nThis operation is used at the bottom of the analytics page result.\n',
  operationId: 'OptimiseAll',
  request: {
    params: z.object({
      storeId: StoreIdOnlyGeneralParametersParamsSchema,
      actionName: OptimisationActionNameGeneralParametersParamsSchema,
    }),
    body: { content: { 'application/json': { schema: OptimiseAllRequestSchema } }, required: true },
  },
  responses: {
    204: { description: 'Products optimisatized' },
    400: BadRequestResponseResponse,
    404: StoreNotFoundResponseResponse,
    default: GeneralErrorResponse,
  },
})

export const postV2UserAnalyticsStoreIdOptimisationsBycategoryCatalogCategoryIdActionNameRoute =
  createRoute({
    method: 'post',
    path: '/v2/user/analytics/{storeId}/optimisations/bycategory/{catalogCategoryId}/{actionName}',
    tags: ['Analytics - Optimisations'],
    summary: 'Optimise products by category',
    description:
      "/!\\ WARNING /!\\ \\\nThis operation will reenable or disable products's category for every channel indicated in the body.\n",
    operationId: 'OptimiseByCategory',
    request: {
      params: z.object({
        storeId: StoreIdOnlyGeneralParametersParamsSchema,
        catalogCategoryId: z
          .guid()
          .openapi({
            param: {
              description: 'The category identifier concerned by this optimisation',
              in: 'path',
              name: 'catalogCategoryId',
              required: true,
              schema: { format: 'guid', type: 'string' },
            },
          }),
        actionName: OptimisationActionNameGeneralParametersParamsSchema,
      }),
      body: OptimiseByCategoryRequestRequestBody,
    },
    responses: {
      204: { description: 'Products optimisatized' },
      400: BadRequestResponseResponse,
      404: StoreNotFoundResponseResponse,
      default: GeneralErrorResponse,
    },
  })

export const postV2UserAnalyticsStoreIdOptimisationsBychannelChannelIdActionNameRoute = createRoute(
  {
    method: 'post',
    path: '/v2/user/analytics/{storeId}/optimisations/bychannel/{channelId}/{actionName}',
    tags: ['Analytics - Optimisations'],
    summary: 'Optimise products by channel',
    description: '/!\\ WARNING /!\\ \\\nApply the operation on every product on this channel.\n',
    operationId: 'OptimiseByChannel',
    request: {
      params: z.object({
        storeId: StoreIdOnlyGeneralParametersParamsSchema,
        channelId: z
          .guid()
          .openapi({
            param: {
              description: 'The channel identifier concerned by this optimisation',
              in: 'path',
              name: 'channelId',
              required: true,
              schema: { format: 'guid', type: 'string' },
            },
          }),
        actionName: OptimisationActionNameGeneralParametersParamsSchema,
      }),
    },
    responses: {
      204: { description: 'Products optimisatized' },
      400: BadRequestResponseResponse,
      404: StoreNotFoundResponseResponse,
      default: GeneralErrorResponse,
    },
  },
)

export const postV2UserAnalyticsStoreIdOptimisationsByproductProductIdActionNameRoute = createRoute(
  {
    method: 'post',
    path: '/v2/user/analytics/{storeId}/optimisations/byproduct/{productId}/{actionName}',
    tags: ['Analytics - Optimisations'],
    summary: 'Optimise product',
    description:
      '/!\\ WARNING /!\\ \\\nThis operation will reenable or disable this product for every channel indicated in the body.\n',
    operationId: 'OptimiseByProduct',
    request: {
      params: z.object({
        storeId: StoreIdOnlyGeneralParametersParamsSchema,
        productId: z
          .guid()
          .openapi({
            param: {
              description: 'The product identifier concerned by this optimisation',
              in: 'path',
              name: 'productId',
              required: true,
              schema: { format: 'guid', type: 'string' },
            },
          }),
        actionName: OptimisationActionNameGeneralParametersParamsSchema,
      }),
      body: OptimiseByCategoryRequestRequestBody,
    },
    responses: {
      204: { description: 'Product(s) optimisatized' },
      400: BadRequestResponseResponse,
      404: StoreNotFoundResponseResponse,
      default: GeneralErrorResponse,
    },
  },
)

export const postV2UserAnalyticsStoreIdOptimisationsCopyRoute = createRoute({
  method: 'post',
  path: '/v2/user/analytics/{storeId}/optimisations/copy',
  tags: ['Analytics - Optimisations'],
  summary: 'Copy product optimisations between 2 channels',
  operationId: 'CopyOptimisation',
  request: {
    params: z.object({ storeId: StoreIdOnlyGeneralParametersParamsSchema }),
    body: {
      content: { 'application/json': { schema: CopyOptimisationRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Products optimisatisation copied',
      content: { 'application/json': { schema: CopyOptimisationResponseSchema } },
    },
    400: BadRequestResponseResponse,
    404: StoreNotFoundResponseResponse,
    default: GeneralErrorResponse,
  },
})

export const postV2UserAnalyticsStoreIdOptimisationsActionNameRoute = createRoute({
  method: 'post',
  path: '/v2/user/analytics/{storeId}/optimisations/{actionName}',
  tags: ['Analytics - Optimisations'],
  summary: 'Optimise products by page',
  description:
    '/!\\ WARNING /!\\ \\\nApply the operation on every product related to this request. \\\nThis operation is used at the bottom of the analytics page result.\n',
  operationId: 'Optimise',
  request: {
    params: z.object({
      storeId: StoreIdOnlyGeneralParametersParamsSchema,
      actionName: OptimisationActionNameGeneralParametersParamsSchema,
    }),
    body: { content: { 'application/json': { schema: OptimiseRequestSchema } }, required: true },
  },
  responses: {
    204: { description: 'Products optimisatized' },
    400: BadRequestResponseResponse,
    404: StoreNotFoundResponseResponse,
    default: GeneralErrorResponse,
  },
})

export const postV2UserAnalyticsStoreIdReportsBycategoryRoute = createRoute({
  method: 'post',
  path: '/v2/user/analytics/{storeId}/reports/bycategory',
  tags: ['Analytics - Statistics'],
  summary: 'Get the report by category',
  description: 'Get the report by category',
  operationId: 'GetStoreReportByCategory',
  request: {
    params: z.object({ storeId: StoreIdOnlyGeneralParametersParamsSchema }),
    body: {
      content: { 'application/json': { schema: ReportByCategoryRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Your reporting by channel',
      content: { 'application/json': { schema: ReportByCategoryResponseSchema } },
    },
    400: BadRequestResponseResponse,
    404: StoreNotFoundResponseResponse,
    default: GeneralErrorResponse,
  },
})

export const postV2UserAnalyticsStoreIdReportsBychannelRoute = createRoute({
  method: 'post',
  path: '/v2/user/analytics/{storeId}/reports/bychannel',
  tags: ['Analytics - Statistics'],
  summary: 'Get the report by channel',
  description: 'Get the report by channel',
  operationId: 'GetStoreReportByChannel',
  request: {
    params: z.object({ storeId: StoreIdOnlyGeneralParametersParamsSchema }),
    body: {
      content: { 'application/json': { schema: ReportByChannelRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Your reporting by channel',
      content: { 'application/json': { schema: ReportByChannelResponseSchema } },
    },
    400: BadRequestResponseResponse,
    404: StoreNotFoundResponseResponse,
    default: GeneralErrorResponse,
  },
})

export const postV2UserAnalyticsStoreIdReportsBydayRoute = createRoute({
  method: 'post',
  path: '/v2/user/analytics/{storeId}/reports/byday',
  tags: ['Analytics - Statistics'],
  summary: 'Get the report by day for a StoreId',
  description: 'Get the report by day for a StoreId',
  operationId: 'GetStoreReportByDay',
  request: {
    params: z.object({ storeId: StoreIdOnlyGeneralParametersParamsSchema }),
    body: ReportByDayRequestRequestBody,
  },
  responses: {
    200: {
      description: 'Your reporting by day',
      content: { 'application/json': { schema: ReportByDayResponseSchema } },
    },
    400: BadRequestResponseResponse,
    404: StoreNotFoundResponseResponse,
    default: GeneralErrorResponse,
  },
})

export const postV2UserAnalyticsStoreIdReportsByproductRoute = createRoute({
  method: 'post',
  path: '/v2/user/analytics/{storeId}/reports/byproduct',
  tags: ['Analytics - Statistics'],
  summary: 'Get the report by product',
  description: 'Get the report by product',
  operationId: 'GetStoreReportByProduct',
  request: {
    params: z.object({ storeId: StoreIdOnlyGeneralParametersParamsSchema }),
    body: {
      content: { 'application/json': { schema: ReportByProductRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Your reporting by product',
      content: { 'application/json': { schema: ReportByProductResponseSchema } },
    },
    400: BadRequestResponseResponse,
    404: StoreNotFoundResponseResponse,
    default: GeneralErrorResponse,
  },
})

export const getV2UserAnalyticsStoreIdReportsFiltersRoute = createRoute({
  method: 'get',
  path: '/v2/user/analytics/{storeId}/reports/filters',
  tags: ['Analytics - Reports'],
  summary: 'Get report filter list for the given store',
  operationId: 'GetReportFilters',
  request: { params: z.object({ storeId: StoreIdOnlyGeneralParametersParamsSchema }) },
  responses: {
    200: {
      description: 'Report filter list',
      content: { 'application/json': { schema: ReportFilterListSchema } },
    },
    404: StoreNotFoundResponseResponse,
    default: GeneralErrorResponse,
  },
})

export const getV2UserAnalyticsStoreIdReportsFiltersReportFilterIdRoute = createRoute({
  method: 'get',
  path: '/v2/user/analytics/{storeId}/reports/filters/{reportFilterId}',
  tags: ['Analytics - Reports'],
  summary: 'Get the report filter description',
  operationId: 'GetReportFilter',
  request: {
    params: z.object({
      storeId: StoreIdOnlyGeneralParametersParamsSchema,
      reportFilterId: ReportFilterIdOnlyGeneralParametersParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Report filter',
      content: { 'application/json': { schema: ReportFilterSchema } },
    },
    404: {
      description: 'Report filter not found',
      content: { 'application/json': { schema: BeezUPCommonErrorResponseMessageSchema } },
    },
    default: GeneralErrorResponse,
  },
})

export const putV2UserAnalyticsStoreIdReportsFiltersReportFilterIdRoute = createRoute({
  method: 'put',
  path: '/v2/user/analytics/{storeId}/reports/filters/{reportFilterId}',
  tags: ['Analytics - Reports'],
  summary: 'Save the report filter',
  operationId: 'SaveReportFilter',
  request: {
    params: z.object({
      storeId: StoreIdOnlyGeneralParametersParamsSchema,
      reportFilterId: ReportFilterIdOnlyGeneralParametersParamsSchema,
    }),
    body: {
      content: { 'application/json': { schema: SaveReportFilterRequestSchema } },
      required: true,
    },
  },
  responses: {
    204: { description: 'Report filter saved' },
    400: BadRequestResponseResponse,
    401: {
      description:
        'This report filter is used by rule. In the error message you will find the rule identifier.',
      content: { 'application/json': { schema: BeezUPCommonErrorResponseMessageSchema } },
    },
    403: {
      description:
        'This report filter identifier is already used by another store, please check your identifiers.',
      content: { 'application/json': { schema: BeezUPCommonErrorResponseMessageSchema } },
    },
    404: StoreNotFoundResponseResponse,
    409: {
      description: 'Report filter name already exists',
      content: { 'application/json': { schema: BeezUPCommonErrorResponseMessageSchema } },
    },
    default: GeneralErrorResponse,
  },
})

export const deleteV2UserAnalyticsStoreIdReportsFiltersReportFilterIdRoute = createRoute({
  method: 'delete',
  path: '/v2/user/analytics/{storeId}/reports/filters/{reportFilterId}',
  tags: ['Analytics - Reports'],
  summary: 'Delete the report filter',
  operationId: 'DeleteReportFilter',
  request: {
    params: z.object({
      storeId: StoreIdOnlyGeneralParametersParamsSchema,
      reportFilterId: ReportFilterIdOnlyGeneralParametersParamsSchema,
    }),
  },
  responses: {
    204: { description: 'Report filter deleted' },
    401: {
      description:
        'This report filter is used by rule. In the error message you will find the rule identifier.',
      content: { 'application/json': { schema: BeezUPCommonErrorResponseMessageSchema } },
    },
    404: {
      description: 'Report filter not found',
      content: { 'application/json': { schema: BeezUPCommonErrorResponseMessageSchema } },
    },
    default: GeneralErrorResponse,
  },
})

export const getV2UserAnalyticsStoreIdRulesRoute = createRoute({
  method: 'get',
  path: '/v2/user/analytics/{storeId}/rules',
  tags: ['Analytics - Rules'],
  summary: 'Gets the list of rules for a given store',
  operationId: 'GetRules',
  request: { params: z.object({ storeId: StoreIdOnlyGeneralParametersParamsSchema }) },
  responses: {
    200: { description: 'Rule list', content: { 'application/json': { schema: RuleListSchema } } },
    404: StoreNotFoundResponseResponse,
    default: GeneralErrorResponse,
  },
})

export const postV2UserAnalyticsStoreIdRulesRoute = createRoute({
  method: 'post',
  path: '/v2/user/analytics/{storeId}/rules',
  tags: ['Analytics - Rules'],
  summary: 'Rule creation',
  operationId: 'CreateRule',
  request: {
    params: z.object({ storeId: StoreIdOnlyGeneralParametersParamsSchema }),
    body: { content: { 'application/json': { schema: CreateRuleRequestSchema } }, required: true },
  },
  responses: {
    204: { description: 'Rule created' },
    400: {
      description: 'Period on filter cannot be custom or filter does not exist',
      content: { '*/*': { schema: BeezUPCommonErrorResponseMessageSchema } },
    },
    401: {
      description: 'Store not allowed to use rules. Please upgrade your offer or contact us.',
      content: { '*/*': { schema: BeezUPCommonErrorResponseMessageSchema } },
    },
    403: {
      description:
        'Reached the maximum amount of rules allowed for your offer. Please upgrade your offer or contact us.',
      content: { '*/*': { schema: BeezUPCommonErrorResponseMessageSchema } },
    },
    404: StoreNotFoundResponseResponse,
    default: GeneralErrorResponse,
  },
})

export const getV2UserAnalyticsStoreIdRulesExecutionsRoute = createRoute({
  method: 'get',
  path: '/v2/user/analytics/{storeId}/rules/executions',
  tags: ['Analytics - Rules'],
  summary: 'Get the rules execution history',
  operationId: 'GetRulesExecutions',
  request: {
    params: z.object({ storeId: StoreIdOnlyGeneralParametersParamsSchema }),
    query: z.object({
      pageNumber: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1),
        )
        .default(1)
        .openapi({
          param: {
            description: 'The page to retrieve',
            in: 'query',
            name: 'pageNumber',
            required: true,
            schema: { default: '1', minimum: 1, type: 'integer' },
          },
        }),
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(10).max(100),
        )
        .default(10)
        .openapi({
          param: {
            description: 'The count of rule history to retrieve',
            in: 'query',
            name: 'pageSize',
            required: true,
            schema: { default: '10', maximum: 100, minimum: 10, type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Rules executions list',
      content: { 'application/json': { schema: RuleExecutionReportingsSchema } },
    },
    400: BadRequestResponseResponse,
    404: StoreNotFoundResponseResponse,
    default: GeneralErrorResponse,
  },
})

export const postV2UserAnalyticsStoreIdRulesRunRoute = createRoute({
  method: 'post',
  path: '/v2/user/analytics/{storeId}/rules/run',
  tags: ['Analytics - Rules'],
  summary: 'Run all rules for this store',
  operationId: 'RunRules',
  request: { params: z.object({ storeId: StoreIdOnlyGeneralParametersParamsSchema }) },
  responses: {
    204: { description: 'All rules executed.' },
    401: {
      description: 'Store not allowed to use rules. Please upgrade your offer or contact us.',
      content: { 'application/json': { schema: BeezUPCommonErrorResponseMessageSchema } },
    },
    404: {
      description: 'Rule not found',
      content: { 'application/json': { schema: BeezUPCommonErrorResponseMessageSchema } },
    },
    409: {
      description: 'Rules for this store are currently running. Please try again later.',
      content: { 'application/json': { schema: BeezUPCommonErrorResponseMessageSchema } },
    },
    default: GeneralErrorResponse,
  },
})

export const getV2UserAnalyticsStoreIdRulesRuleIdRoute = createRoute({
  method: 'get',
  path: '/v2/user/analytics/{storeId}/rules/{ruleId}',
  tags: ['Analytics - Rules'],
  summary: 'Gets the rule',
  operationId: 'GetRule',
  request: {
    params: z.object({
      storeId: StoreIdOnlyGeneralParametersParamsSchema,
      ruleId: RuleIdOnlyGeneralParametersParamsSchema,
    }),
  },
  responses: {
    200: { description: 'Get Rule', content: { 'application/json': { schema: RuleSchema } } },
    404: StoreNotFoundResponseResponse,
    default: GeneralErrorResponse,
  },
})

export const deleteV2UserAnalyticsStoreIdRulesRuleIdRoute = createRoute({
  method: 'delete',
  path: '/v2/user/analytics/{storeId}/rules/{ruleId}',
  tags: ['Analytics - Rules'],
  summary: 'Delete Rule',
  operationId: 'DeleteRule',
  request: {
    params: z.object({
      storeId: StoreIdOnlyGeneralParametersParamsSchema,
      ruleId: RuleIdOnlyGeneralParametersParamsSchema,
    }),
  },
  responses: {
    204: { description: 'Rule deleted' },
    404: {
      description: 'Rule not found',
      content: { 'application/json': { schema: BeezUPCommonErrorResponseMessageSchema } },
    },
    409: {
      description: 'Rules for this store are currently running. Please try again later.',
      content: { 'application/json': { schema: BeezUPCommonErrorResponseMessageSchema } },
    },
    default: GeneralErrorResponse,
  },
})

export const patchV2UserAnalyticsStoreIdRulesRuleIdRoute = createRoute({
  method: 'patch',
  path: '/v2/user/analytics/{storeId}/rules/{ruleId}',
  tags: ['Analytics - Rules'],
  summary: 'Update Rule',
  operationId: 'UpdateRule',
  request: {
    params: z.object({
      storeId: StoreIdOnlyGeneralParametersParamsSchema,
      ruleId: RuleIdOnlyGeneralParametersParamsSchema,
    }),
    body: { content: { 'application/json': { schema: UpdateRuleRequestSchema } }, required: true },
  },
  responses: {
    204: { description: 'Rule updated' },
    400: {
      description: 'Filter does not exist or period on filter cannot be custom',
      content: { 'application/json': { schema: BeezUPCommonErrorResponseMessageSchema } },
    },
    401: {
      description: 'Store not allowed to use rules. Please upgrade your offer or contact us.',
      content: { 'application/json': { schema: BeezUPCommonErrorResponseMessageSchema } },
    },
    404: {
      description: 'Rule not found',
      content: { 'application/json': { schema: BeezUPCommonErrorResponseMessageSchema } },
    },
    409: {
      description: 'Rules for this store are currently running. Please try again later.',
      content: { 'application/json': { schema: BeezUPCommonErrorResponseMessageSchema } },
    },
    default: GeneralErrorResponse,
  },
})

export const postV2UserAnalyticsStoreIdRulesRuleIdDisableRoute = createRoute({
  method: 'post',
  path: '/v2/user/analytics/{storeId}/rules/{ruleId}/disable',
  tags: ['Analytics - Rules'],
  summary: 'Disable rule',
  operationId: 'DisableRule',
  request: {
    params: z.object({
      storeId: StoreIdOnlyGeneralParametersParamsSchema,
      ruleId: RuleIdOnlyGeneralParametersParamsSchema,
    }),
  },
  responses: {
    204: { description: 'Rule disabled' },
    404: {
      description: 'Rule not found',
      content: { 'application/json': { schema: BeezUPCommonErrorResponseMessageSchema } },
    },
    409: {
      description: 'Rules for this store are currently running. Please try again later.',
      content: { 'application/json': { schema: BeezUPCommonErrorResponseMessageSchema } },
    },
    default: GeneralErrorResponse,
  },
})

export const postV2UserAnalyticsStoreIdRulesRuleIdEnableRoute = createRoute({
  method: 'post',
  path: '/v2/user/analytics/{storeId}/rules/{ruleId}/enable',
  tags: ['Analytics - Rules'],
  summary: 'Enable rule',
  operationId: 'EnableRule',
  request: {
    params: z.object({
      storeId: StoreIdOnlyGeneralParametersParamsSchema,
      ruleId: RuleIdOnlyGeneralParametersParamsSchema,
    }),
  },
  responses: {
    204: { description: 'Rune enabled' },
    404: {
      description: 'Rule not found',
      content: { 'application/json': { schema: BeezUPCommonErrorResponseMessageSchema } },
    },
    409: {
      description: 'Rules for this store are currently running. Please try again later.',
      content: { 'application/json': { schema: BeezUPCommonErrorResponseMessageSchema } },
    },
    default: GeneralErrorResponse,
  },
})

export const postV2UserAnalyticsStoreIdRulesRuleIdMovedownRoute = createRoute({
  method: 'post',
  path: '/v2/user/analytics/{storeId}/rules/{ruleId}/movedown',
  tags: ['Analytics - Rules'],
  summary: 'Move the rule down',
  operationId: 'MoveDownRule',
  request: {
    params: z.object({
      storeId: StoreIdOnlyGeneralParametersParamsSchema,
      ruleId: RuleIdOnlyGeneralParametersParamsSchema,
    }),
  },
  responses: {
    204: { description: 'Rule moved down' },
    400: {
      description: 'Priority can only be changed when more than one rule is defined',
      content: { 'application/json': { schema: BeezUPCommonErrorResponseMessageSchema } },
    },
    404: {
      description: 'Rule not found',
      content: { 'application/json': { schema: BeezUPCommonErrorResponseMessageSchema } },
    },
    409: {
      description: 'Rules for this store are currently running. Please try again later.',
      content: { 'application/json': { schema: BeezUPCommonErrorResponseMessageSchema } },
    },
    default: GeneralErrorResponse,
  },
})

export const postV2UserAnalyticsStoreIdRulesRuleIdMoveupRoute = createRoute({
  method: 'post',
  path: '/v2/user/analytics/{storeId}/rules/{ruleId}/moveup',
  tags: ['Analytics - Rules'],
  summary: 'Move the rule up',
  operationId: 'MoveUpRule',
  request: {
    params: z.object({
      storeId: StoreIdOnlyGeneralParametersParamsSchema,
      ruleId: RuleIdOnlyGeneralParametersParamsSchema,
    }),
  },
  responses: {
    204: { description: 'Rule moved up' },
    400: {
      description: 'Priority can only be changed when more than one rule is defined',
      content: { 'application/json': { schema: BeezUPCommonErrorResponseMessageSchema } },
    },
    404: {
      description: 'Rule not found',
      content: { 'application/json': { schema: BeezUPCommonErrorResponseMessageSchema } },
    },
    409: {
      description: 'Rules for this store are currently running. Please try again later.',
      content: { 'application/json': { schema: BeezUPCommonErrorResponseMessageSchema } },
    },
    default: GeneralErrorResponse,
  },
})

export const postV2UserAnalyticsStoreIdRulesRuleIdRunRoute = createRoute({
  method: 'post',
  path: '/v2/user/analytics/{storeId}/rules/{ruleId}/run',
  tags: ['Analytics - Rules'],
  summary: 'Run rule',
  operationId: 'RunRule',
  request: {
    params: z.object({
      storeId: StoreIdOnlyGeneralParametersParamsSchema,
      ruleId: RuleIdOnlyGeneralParametersParamsSchema,
    }),
  },
  responses: {
    204: { description: 'Rule executed' },
    400: {
      description: 'Rule is not enabled. Please enable this run before trying to run it.',
      content: { 'application/json': { schema: BeezUPCommonErrorResponseMessageSchema } },
    },
    401: {
      description: 'Store not allowed to use rules. Please upgrade your offer or contact us.',
      content: { 'application/json': { schema: BeezUPCommonErrorResponseMessageSchema } },
    },
    404: {
      description: 'Rule not found',
      content: { 'application/json': { schema: BeezUPCommonErrorResponseMessageSchema } },
    },
    409: {
      description: 'Rules for this store are currently running. Please try again later.',
      content: { 'application/json': { schema: BeezUPCommonErrorResponseMessageSchema } },
    },
    default: GeneralErrorResponse,
  },
})

export const getV2UserAnalyticsStoreIdTrackingClicksRoute = createRoute({
  method: 'get',
  path: '/v2/user/analytics/{storeId}/tracking/clicks',
  tags: ['Analytics - Tracking'],
  summary: 'Get the latest tracked clicks',
  operationId: 'GetStoreTrackedClicks',
  request: {
    params: z.object({ storeId: StoreIdOnlyGeneralParametersParamsSchema }),
    query: z.object({
      count: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(5).max(100),
        )
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            description: 'The amount of clicks to retrieve',
            in: 'query',
            name: 'count',
            required: false,
            schema: { default: '100', maximum: 100, minimum: 5, type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Click list',
      content: { 'application/json': { schema: TrackedClicksSchema } },
    },
    404: StoreNotFoundResponseResponse,
    default: GeneralErrorResponse,
  },
})

export const getV2UserAnalyticsStoreIdTrackingExternalordersRoute = createRoute({
  method: 'get',
  path: '/v2/user/analytics/{storeId}/tracking/externalorders',
  tags: ['Analytics - Tracking'],
  summary: 'Get the latest tracked external orders',
  operationId: 'GetStoreTrackedExternalOrders',
  request: {
    params: z.object({ storeId: StoreIdOnlyGeneralParametersParamsSchema }),
    query: z.object({
      count: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(5).max(100),
        )
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            description: 'The amount of external orders to retrieve',
            in: 'query',
            name: 'count',
            required: false,
            schema: { default: '100', maximum: 100, minimum: 5, type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'External Order list',
      content: { 'application/json': { schema: TrackedExternalOrdersSchema } },
    },
    400: BadRequestResponseResponse,
    404: StoreNotFoundResponseResponse,
    default: GeneralErrorResponse,
  },
})

export const getV2UserAnalyticsStoreIdTrackingOrdersRoute = createRoute({
  method: 'get',
  path: '/v2/user/analytics/{storeId}/tracking/orders',
  tags: ['Analytics - Tracking'],
  summary: 'Get the latest tracked orders',
  operationId: 'GetStoreTrackedOrders',
  request: {
    params: z.object({ storeId: StoreIdOnlyGeneralParametersParamsSchema }),
    query: z.object({
      count: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(5).max(100),
        )
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            description: 'The amount of orders to retrieve',
            in: 'query',
            name: 'count',
            required: false,
            schema: { default: '100', maximum: 100, minimum: 5, type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Order list',
      content: { 'application/json': { schema: TrackedOrdersSchema } },
    },
    400: BadRequestResponseResponse,
    404: StoreNotFoundResponseResponse,
    default: GeneralErrorResponse,
  },
})

export const getV2UserAnalyticsStoreIdTrackingStatusRoute = createRoute({
  method: 'get',
  path: '/v2/user/analytics/{storeId}/tracking/status',
  tags: ['Analytics - Tracking'],
  summary: 'Get the synchronization status of clicks and orders of a store',
  description:
    'Clicks and orders are eventually consistent. \\\nThis operation gets the current state of projections for a store.\n',
  operationId: 'GetStoreTrackingStatus',
  request: { params: z.object({ storeId: StoreIdOnlyGeneralParametersParamsSchema }) },
  responses: {
    200: {
      description: 'Store Tracking Status',
      content: { 'application/json': { schema: StoreTrackingStatusSchema } },
    },
    404: StoreNotFoundResponseResponse,
    default: GeneralErrorResponse,
  },
})

export const getV2UserCatalogsIndexRoute = createRoute({
  method: 'get',
  path: '/v2/user/catalogs/',
  tags: ['Catalogs - Global'],
  summary: 'Get the index of the catalog API',
  description:
    'The operation will give you all the operations you will be able to do and all the LOV used in this API.',
  operationId: 'CatalogIndex',
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: CatalogIndexSchema } } },
    default: GeneralErrorResponse,
  },
})

export const getV2UserCatalogsBeezupColumnsRoute = createRoute({
  method: 'get',
  path: '/v2/user/catalogs/beezupColumns',
  tags: ['Catalogs - Global'],
  summary: 'Get the BeezUP columns',
  description:
    'Get the BeezUP columns, this columns are used for mapping during the manual catalog importation process.',
  operationId: 'Catalog_GetBeezUPColumns',
  responses: {
    200: {
      description: 'The catalog API index',
      content: { 'application/json': { schema: z.array(BeezUPColumnConfigurationSchema) } },
    },
    default: GeneralErrorResponse,
  },
})

export const getV2UserCatalogsImportationsRoute = createRoute({
  method: 'get',
  path: '/v2/user/catalogs/importations',
  tags: ['Catalogs - Importation Process'],
  summary: 'Get the latest catalog importation reporting for all your stores',
  operationId: 'Importation_GetReportingsAllStores',
  responses: {
    200: {
      description: 'The last importation reportings',
      content: { 'application/json': { schema: ImportationsPerStoreResponseSchema } },
    },
    404: {
      description: 'UserId not found',
      content: { 'application/json': { schema: BeezUPCommonErrorResponseMessageSchema } },
    },
    default: GeneralErrorResponse,
  },
})

export const getV2UserCatalogsStoreIdRoute = createRoute({
  method: 'get',
  path: '/v2/user/catalogs/{storeId}',
  tags: ['Catalogs - Catalog'],
  summary: 'Get the index of the catalog API for this store',
  description:
    'The operation will give you all the operations you will be able to do on this store for this API.',
  operationId: 'CatalogStoreIndex',
  request: { params: z.object({ storeId: StoreIdOnlyGeneralParametersParamsSchema }) },
  responses: {
    200: {
      description: 'The catalog index',
      content: { 'application/json': { schema: CatalogStoreIndexSchema } },
    },
    default: GeneralErrorResponse,
  },
})

export const getV2UserCatalogsStoreIdAutoImportRoute = createRoute({
  method: 'get',
  path: '/v2/user/catalogs/{storeId}/autoImport',
  tags: ['Catalogs - Auto'],
  summary: 'Get the auto import configuration',
  operationId: 'Auto_GetAutoImportConfiguration',
  request: { params: z.object({ storeId: StoreIdOnlyGeneralParametersParamsSchema }) },
  responses: {
    200: {
      description: 'Auto import configuration',
      content: { 'application/json': { schema: AutoImportConfigurationSchema } },
    },
    404: {
      description: 'StoreId or Auto Import configuration not found',
      content: { 'application/json': { schema: BeezUPCommonErrorResponseMessageSchema } },
    },
    default: GeneralErrorResponse,
  },
})

export const deleteV2UserCatalogsStoreIdAutoImportRoute = createRoute({
  method: 'delete',
  path: '/v2/user/catalogs/{storeId}/autoImport',
  tags: ['Catalogs - Auto'],
  summary: 'Delete Auto Import',
  operationId: 'Auto_DeleteAutoImport',
  request: { params: z.object({ storeId: StoreIdOnlyGeneralParametersParamsSchema }) },
  responses: {
    204: { description: 'Auto import deleted' },
    400: {
      description: 'Occurs when the catalog auto import is not configured.',
      content: { 'application/json': { schema: BeezUPCommonErrorResponseMessageSchema } },
    },
    404: {
      description: 'Occurs when a user tries to work on the wrong store.',
      content: { 'application/json': { schema: BeezUPCommonErrorResponseMessageSchema } },
    },
    default: GeneralErrorResponse,
  },
})

export const postV2UserCatalogsStoreIdAutoImportActivateRoute = createRoute({
  method: 'post',
  path: '/v2/user/catalogs/{storeId}/autoImport/activate',
  tags: ['Catalogs - Auto'],
  summary: 'Activate the auto importation of the last successful manual catalog importation.',
  description:
    'Once you have made your fist manual catalog importation with success, you can call this operation to import it automatically. No parameter required, we know which one it is.',
  operationId: 'Importation_ActivateAutoImport',
  request: { params: z.object({ storeId: StoreIdOnlyGeneralParametersParamsSchema }) },
  responses: {
    204: { description: 'Auto import activated' },
    400: {
      description: 'Occurs when the user tries to auto import a local file.',
      content: { 'application/json': { schema: BeezUPCommonErrorResponseMessageSchema } },
    },
    404: {
      description: 'Occurs when a user tries to work on the wrong store.',
      content: { 'application/json': { schema: BeezUPCommonErrorResponseMessageSchema } },
    },
    409: {
      description: 'When a catalog importation is already in progress!',
      content: { 'application/json': { schema: BeezUPCommonErrorResponseMessageSchema } },
    },
    default: GeneralErrorResponse,
  },
})

export const postV2UserCatalogsStoreIdAutoImportPauseRoute = createRoute({
  method: 'post',
  path: '/v2/user/catalogs/{storeId}/autoImport/pause',
  tags: ['Catalogs - Auto'],
  summary: 'Pause Auto Import',
  operationId: 'Auto_PauseAutoImport',
  request: { params: z.object({ storeId: StoreIdOnlyGeneralParametersParamsSchema }) },
  responses: {
    204: { description: 'Auto import paused' },
    400: {
      description: 'Occurs when the catalog auto import is not configured.',
      content: { 'application/json': { schema: BeezUPCommonErrorResponseMessageSchema } },
    },
    404: {
      description: 'Occurs when a user tries to work on the wrong store.',
      content: { 'application/json': { schema: BeezUPCommonErrorResponseMessageSchema } },
    },
    default: GeneralErrorResponse,
  },
})

export const postV2UserCatalogsStoreIdAutoImportResumeRoute = createRoute({
  method: 'post',
  path: '/v2/user/catalogs/{storeId}/autoImport/resume',
  tags: ['Catalogs - Auto'],
  summary: 'Resume Auto Import',
  operationId: 'Auto_ResumeAutoImport',
  request: { params: z.object({ storeId: StoreIdOnlyGeneralParametersParamsSchema }) },
  responses: {
    204: { description: 'Auto import resumed' },
    400: {
      description: 'Occurs when the catalog auto import is not configured.',
      content: { 'application/json': { schema: BeezUPCommonErrorResponseMessageSchema } },
    },
    404: {
      description: 'Occurs when a user tries to work on the wrong store.',
      content: { 'application/json': { schema: BeezUPCommonErrorResponseMessageSchema } },
    },
    default: GeneralErrorResponse,
  },
})

export const postV2UserCatalogsStoreIdAutoImportSchedulingIntervalRoute = createRoute({
  method: 'post',
  path: '/v2/user/catalogs/{storeId}/autoImport/scheduling/interval',
  tags: ['Catalogs - Auto'],
  summary: 'Configure Auto Import Interval',
  operationId: 'Auto_ConfigureAutoImportInterval',
  request: {
    params: z.object({ storeId: StoreIdOnlyGeneralParametersParamsSchema }),
    body: {
      content: { 'application/json': { schema: ConfigureAutoImportIntervalRequestSchema } },
      required: true,
    },
  },
  responses: {
    204: { description: 'Auto import scheduling interval saved' },
    400: {
      description:
        '\nWhen the min catalog Auto Import scheduling interval delay has been reached.\nWhen the max catalog Auto Import count has been reached.',
      content: { 'application/json': { schema: BeezUPCommonErrorResponseMessageSchema } },
    },
    404: {
      description: 'Occurs when a user tries to work on the wrong store.',
      content: { 'application/json': { schema: BeezUPCommonErrorResponseMessageSchema } },
    },
    default: GeneralErrorResponse,
  },
})

export const postV2UserCatalogsStoreIdAutoImportSchedulingSchedulesRoute = createRoute({
  method: 'post',
  path: '/v2/user/catalogs/{storeId}/autoImport/scheduling/schedules',
  tags: ['Catalogs - Auto'],
  summary: 'Configure Auto Import Schedules',
  operationId: 'Auto_ScheduleAutoImport',
  request: {
    params: z.object({ storeId: StoreIdOnlyGeneralParametersParamsSchema }),
    body: {
      content: { 'application/json': { schema: ScheduleAutoImportRequestSchema } },
      required: true,
    },
  },
  responses: {
    204: { description: 'Auto import scheduling saved' },
    400: {
      description:
        '\nWhen the max catalog Auto Import count has been reached.\nWhen the min catalog Auto Import scheduling interval delay has been reached.\nWhen the max catalog Auto Import count has been reached.',
      content: { 'application/json': { schema: BeezUPCommonErrorResponseMessageSchema } },
    },
    404: {
      description: 'Occurs when a user tries to work on the wrong store.',
      content: { 'application/json': { schema: BeezUPCommonErrorResponseMessageSchema } },
    },
    default: GeneralErrorResponse,
  },
})

export const postV2UserCatalogsStoreIdAutoImportStartRoute = createRoute({
  method: 'post',
  path: '/v2/user/catalogs/{storeId}/autoImport/start',
  tags: ['Catalogs - Auto'],
  summary: 'Start Auto Import Manually',
  operationId: 'Auto_StartAutoImport',
  request: { params: z.object({ storeId: StoreIdOnlyGeneralParametersParamsSchema }) },
  responses: {
    202: ImportStartedResponse,
    400: {
      description:
        'Occurs when the catalog auto import is not configured.\nWhen a user column name is duplicate.\nWhen the catalog column name are duplicate.\nWhen the BeezUP column have duplicate mapping.\nOccurs when the required beezup column is not mapped to any column.\nOccurs when the category hierarchy is not correctly mapped.\nOccurs when the duplicate strategy on {catalogColumnName} is not found.\nWhen the user tries to import to ofen the catalog file to download count max limit has been reached.',
      content: { 'application/json': { schema: BeezUPCommonErrorResponseMessageSchema } },
    },
    404: {
      description: 'Occurs when a user tries to work on the wrong store.',
      content: { 'application/json': { schema: BeezUPCommonErrorResponseMessageSchema } },
    },
    409: {
      description: 'An importation is already in progress',
      content: { 'application/json': { schema: BeezUPCommonErrorResponseMessageSchema } },
    },
    default: GeneralErrorResponse,
  },
})

export const getV2UserCatalogsStoreIdCatalogColumnsRoute = createRoute({
  method: 'get',
  path: '/v2/user/catalogs/{storeId}/catalogColumns',
  tags: ['Catalogs - Catalog'],
  summary: 'Get catalog column list',
  operationId: 'Catalog_GetCatalogColumns',
  request: { params: z.object({ storeId: StoreIdOnlyGeneralParametersParamsSchema }) },
  responses: {
    200: {
      description: 'Catalog column list',
      content: { 'application/json': { schema: CatalogColumnListSchema } },
    },
    404: {
      description: 'StoreId not found',
      content: { 'application/json': { schema: BeezUPCommonErrorResponseMessageSchema } },
    },
    default: GeneralErrorResponse,
  },
})

export const postV2UserCatalogsStoreIdCatalogColumnsColumnIdRenameRoute = createRoute({
  method: 'post',
  path: '/v2/user/catalogs/{storeId}/catalogColumns/{columnId}/rename',
  tags: ['Catalogs - Catalog'],
  summary: 'Change Catalog Column User Name',
  operationId: 'Catalog_ChangeCatalogColumnUserName',
  request: {
    params: z.object({
      storeId: StoreIdOnlyGeneralParametersParamsSchema,
      columnId: CatalogColumnIdParamsSchema,
    }),
    body: ChangeUserColumnNameRequestRequestBody,
  },
  responses: {
    204: { description: 'Catalog column user name changed' },
    400: {
      description: 'When a user column name is duplicate.',
      content: { 'application/json': { schema: BeezUPCommonErrorResponseMessageSchema } },
    },
    404: {
      description:
        'Occurs when a user tries to work on the wrong store.\nOccurs when a catalog column is not found.',
      content: { 'application/json': { schema: BeezUPCommonErrorResponseMessageSchema } },
    },
    409: ImportAlreadyInProgressResponse,
    default: GeneralErrorResponse,
  },
})

export const getV2UserCatalogsStoreIdCategoriesRoute = createRoute({
  method: 'get',
  path: '/v2/user/catalogs/{storeId}/categories',
  tags: ['Catalogs - Catalog'],
  summary: 'Get category list',
  operationId: 'Catalog_GetCategories',
  request: {
    params: z.object({ storeId: StoreIdOnlyGeneralParametersParamsSchema }),
    headers: z.object({
      'Accept-Encoding': z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',').map((part) => part.trim()) : [item],
                ),
          z.array(z.string()),
        )
        .openapi({
          param: {
            description:
              'Indicates that the client accepts that the response will be compressed to reduce traffic size.',
            in: 'header',
            name: 'Accept-Encoding',
            required: true,
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Categories',
      content: { 'application/json': { schema: CategoryListSchema } },
      headers: z.object({
        'Content-Encoding': {
          description: 'Indicates the compression use in the response',
          style: 'simple',
          schema: z
            .array(z.string())
            .exactOptional()
            .openapi({
              description: 'Indicates the compression use in the response',
              param: { required: false },
            }),
        },
      }),
    },
    404: {
      description: 'StoreId not found',
      content: { 'application/json': { schema: BeezUPCommonErrorResponseMessageSchema } },
    },
    default: GeneralErrorResponse,
  },
})

export const getV2UserCatalogsStoreIdCustomColumnsRoute = createRoute({
  method: 'get',
  path: '/v2/user/catalogs/{storeId}/customColumns',
  tags: ['Catalogs - Catalog'],
  summary: 'Get custom column list',
  operationId: 'Catalog_GetCustomColumns',
  request: { params: z.object({ storeId: StoreIdOnlyGeneralParametersParamsSchema }) },
  responses: {
    200: {
      description: 'Custom column list',
      content: { 'application/json': { schema: CustomColumnListSchema } },
    },
    404: {
      description: 'StoreId not found',
      content: { 'application/json': { schema: BeezUPCommonErrorResponseMessageSchema } },
    },
    default: GeneralErrorResponse,
  },
})

export const postV2UserCatalogsStoreIdCustomColumnsComputeExpressionRoute = createRoute({
  method: 'post',
  path: '/v2/user/catalogs/{storeId}/customColumns/computeExpression',
  tags: ['Catalogs - Catalog'],
  summary: 'Compute the expression for this catalog.',
  operationId: 'Catalog_ComputeExpression',
  request: {
    params: z.object({ storeId: StoreIdOnlyGeneralParametersParamsSchema }),
    body: {
      content: { 'application/json': { schema: ComputeExpressionRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Compute an expression',
      content: { 'application/json': { schema: z.string() } },
    },
    400: {
      description: 'Occurs when the expression cannot be computed',
      content: { 'application/json': { schema: z.string() } },
    },
    default: GeneralErrorResponse,
  },
})

export const putV2UserCatalogsStoreIdCustomColumnsColumnIdRoute = createRoute({
  method: 'put',
  path: '/v2/user/catalogs/{storeId}/customColumns/{columnId}',
  tags: ['Catalogs - Catalog'],
  summary: 'Create or replace a custom column',
  operationId: 'Catalog_SaveCustomColumn',
  request: {
    params: z.object({
      storeId: StoreIdOnlyGeneralParametersParamsSchema,
      columnId: CustomColumnIdParamsSchema,
    }),
    body: {
      content: { 'application/json': { schema: CreateCustomColumnRequestSchema } },
      required: true,
    },
  },
  responses: {
    204: { description: 'Custom column saved' },
    400: {
      description:
        'Occurs when a catalog custom column id is already used by a catalog column.\nWhen the catalog custom column count limit has been reached.',
      content: { 'application/json': { schema: BeezUPCommonErrorResponseMessageSchema } },
    },
    404: { description: 'Occurs when a user tries to work on the wrong store.' },
    409: ImportAlreadyInProgressResponse,
    default: GeneralErrorResponse,
  },
})

export const deleteV2UserCatalogsStoreIdCustomColumnsColumnIdRoute = createRoute({
  method: 'delete',
  path: '/v2/user/catalogs/{storeId}/customColumns/{columnId}',
  tags: ['Catalogs - Catalog'],
  summary: 'Delete custom column',
  operationId: 'Catalog_DeleteCustomColumn',
  request: {
    params: z.object({
      storeId: StoreIdOnlyGeneralParametersParamsSchema,
      columnId: CustomColumnIdParamsSchema,
    }),
  },
  responses: {
    204: { description: 'Custom column deleted' },
    403: {
      description: 'Occurs when the parent category is not found.',
      content: { 'application/json': { schema: BeezUPCommonErrorResponseMessageSchema } },
    },
    404: {
      description: 'Occurs when a user tries to work on the wrong store.',
      content: { 'application/json': { schema: BeezUPCommonErrorResponseMessageSchema } },
    },
    409: {
      description: 'When a catalog importation is already in progress!',
      content: { 'application/json': { schema: BeezUPCommonErrorResponseMessageSchema } },
    },
    default: GeneralErrorResponse,
  },
})

export const getV2UserCatalogsStoreIdCustomColumnsColumnIdExpressionRoute = createRoute({
  method: 'get',
  path: '/v2/user/catalogs/{storeId}/customColumns/{columnId}/expression',
  tags: ['Catalogs - Catalog'],
  summary: 'Get the encrypted custom column expression',
  operationId: 'Catalog_GetCustomColumnExpression',
  request: {
    params: z.object({
      storeId: StoreIdOnlyGeneralParametersParamsSchema,
      columnId: CustomColumnIdParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Encrypted expression',
      content: {
        'application/json': {
          schema: z.string().openapi({ example: 'zlkzjkzjlzlknzklnzlknaklnaklanlknaklan' }),
        },
      },
    },
    404: {
      description:
        'Occurs when a user tries to work on the wrong store.\nOccurs when a catalog custom column is not found.',
    },
    default: GeneralErrorResponse,
  },
})

export const putV2UserCatalogsStoreIdCustomColumnsColumnIdExpressionRoute = createRoute({
  method: 'put',
  path: '/v2/user/catalogs/{storeId}/customColumns/{columnId}/expression',
  tags: ['Catalogs - Catalog'],
  summary: 'Change custom column expression',
  operationId: 'Catalog_ChangeCustomColumnExpression',
  request: {
    params: z.object({
      storeId: StoreIdOnlyGeneralParametersParamsSchema,
      columnId: CustomColumnIdParamsSchema,
    }),
    body: {
      content: { 'application/json': { schema: ChangeCustomColumnExpressionRequestSchema } },
      required: true,
    },
  },
  responses: {
    204: { description: 'Custom column expression saved' },
    403: {
      description:
        'Occurs when the user try to change a custom column related to a Category. If you want to change this custom column expression you have to make a new manual importation.',
      content: { 'application/json': { schema: BeezUPCommonErrorResponseMessageSchema } },
    },
    404: {
      description:
        'Occurs when a user tries to work on the wrong store.\nOccurs when a catalog custom column is not found.',
      content: { 'application/json': { schema: BeezUPCommonErrorResponseMessageSchema } },
    },
    409: ImportAlreadyInProgressResponse,
    default: GeneralErrorResponse,
  },
})

export const postV2UserCatalogsStoreIdCustomColumnsColumnIdRenameRoute = createRoute({
  method: 'post',
  path: '/v2/user/catalogs/{storeId}/customColumns/{columnId}/rename',
  tags: ['Catalogs - Catalog'],
  summary: 'Change Custom Column User Name',
  operationId: 'Catalog_ChangeCustomColumnUserName',
  request: {
    params: z.object({
      storeId: StoreIdOnlyGeneralParametersParamsSchema,
      columnId: CustomColumnIdParamsSchema,
    }),
    body: ChangeUserColumnNameRequestRequestBody,
  },
  responses: {
    204: { description: 'Custom column renamed' },
    400: {
      description: 'When a user column name is duplicate.',
      content: { 'application/json': { schema: BeezUPCommonErrorResponseMessageSchema } },
    },
    404: {
      description:
        'Occurs when a user tries to work on the wrong store.\nOccurs when a catalog column is not found.',
      content: { 'application/json': { schema: BeezUPCommonErrorResponseMessageSchema } },
    },
    409: ImportAlreadyInProgressResponse,
    default: GeneralErrorResponse,
  },
})

export const getV2UserCatalogsStoreIdImportationsRoute = createRoute({
  method: 'get',
  path: '/v2/user/catalogs/{storeId}/importations',
  tags: ['Catalogs - Importation Process'],
  summary: 'Get the latest catalog importation reporting',
  operationId: 'Importation_GetReportings',
  request: { params: z.object({ storeId: StoreIdOnlyGeneralParametersParamsSchema }) },
  responses: {
    200: {
      description: 'The last importation reportings',
      content: { 'application/json': { schema: ImportationsResponseSchema } },
    },
    404: {
      description: 'StoreId not found',
      content: { 'application/json': { schema: BeezUPCommonErrorResponseMessageSchema } },
    },
    default: GeneralErrorResponse,
  },
})

export const postV2UserCatalogsStoreIdImportationsStartRoute = createRoute({
  method: 'post',
  path: '/v2/user/catalogs/{storeId}/importations/start',
  tags: ['Catalogs - Importation Process'],
  summary: 'Start Manual Import',
  operationId: 'Importation_StartManualUpdate',
  request: {
    params: z.object({ storeId: StoreIdOnlyGeneralParametersParamsSchema }),
    body: {
      content: { 'application/json': { schema: StartManualImportRequestSchema } },
      required: true,
    },
  },
  responses: {
    202: ImportStartedResponse,
    400: {
      description:
        'Missing Input configuration in the request\nOccurs when there is a duplicate file number in the input configuration\nOccurs when there is a duplicate file Uri in the input configuration',
      content: { 'application/json': { schema: BeezUPCommonErrorResponseMessageSchema } },
    },
    404: {
      description: 'StoreId not found',
      content: { 'application/json': { schema: BeezUPCommonErrorResponseMessageSchema } },
    },
    409: ImportAlreadyInProgressResponse,
    default: GeneralErrorResponse,
  },
})

export const getV2UserCatalogsStoreIdImportationsExecutionIdRoute = createRoute({
  method: 'get',
  path: '/v2/user/catalogs/{storeId}/importations/{executionId}',
  tags: ['Catalogs - Importation Process'],
  summary: 'Get the importation status',
  operationId: 'Importation_GetImportationMonitoring',
  request: {
    params: z.object({
      storeId: StoreIdOnlyGeneralParametersParamsSchema,
      executionId: ExecutionIdParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: ImportationMonitoringSchema } },
    },
    404: {
      description:
        'ExecutionId not found or not yet synchronized. If not synchronized within 30 sec after the import has been started, please contact our support',
      content: { 'application/json': { schema: BeezUPCommonErrorResponseMessageSchema } },
    },
    default: GeneralErrorResponse,
  },
})

export const postV2UserCatalogsStoreIdImportationsExecutionIdCancelRoute = createRoute({
  method: 'post',
  path: '/v2/user/catalogs/{storeId}/importations/{executionId}/cancel',
  tags: ['Catalogs - Importation Process'],
  summary: 'Cancel importation',
  operationId: 'Importation_Cancel',
  request: {
    params: z.object({
      storeId: StoreIdOnlyGeneralParametersParamsSchema,
      executionId: ExecutionIdParamsSchema,
    }),
  },
  responses: {
    204: { description: 'Catalog importation canceled' },
    404: {
      description:
        'Occurs when a user tries to work on the wrong store.\nOccurs when the message concerns the wrong execution.',
      content: { 'application/json': { schema: BeezUPCommonErrorResponseMessageSchema } },
    },
    409: {
      description: 'Occurs when this importation is already finished.',
      content: { 'application/json': { schema: BeezUPCommonErrorResponseMessageSchema } },
    },
    default: GeneralErrorResponse,
  },
})

export const getV2UserCatalogsStoreIdImportationsExecutionIdCatalogColumnsRoute = createRoute({
  method: 'get',
  path: '/v2/user/catalogs/{storeId}/importations/{executionId}/catalogColumns',
  tags: ['Catalogs - Importation Catalog Info'],
  summary: 'Get detected catalog columns during this importation.',
  operationId: 'Importation_GetDetectedCatalogColumns',
  request: {
    params: z.object({
      storeId: StoreIdOnlyGeneralParametersParamsSchema,
      executionId: ExecutionIdParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: DetectedCatalogColumnListSchema } },
    },
    404: {
      description:
        'ExecutionId not found or not yet synchronized. If not synchronized within 30 sec, please contact our support',
      content: { 'application/json': { schema: BeezUPCommonErrorResponseMessageSchema } },
    },
    409: {
      description:
        'Catalog preparation read step is not completed. Please refer to the reporting of this execution for more details.',
      content: { 'application/json': { schema: BeezUPCommonErrorResponseMessageSchema } },
    },
    default: GeneralErrorResponse,
  },
})

export const postV2UserCatalogsStoreIdImportationsExecutionIdCatalogColumnsColumnIdRoute =
  createRoute({
    method: 'post',
    path: '/v2/user/catalogs/{storeId}/importations/{executionId}/catalogColumns/{columnId}',
    tags: ['Catalogs - Importation Catalog Info'],
    summary: 'Configure catalog column',
    operationId: 'Importation_ConfigureCatalogColumn',
    request: {
      params: z.object({
        storeId: StoreIdOnlyGeneralParametersParamsSchema,
        executionId: ExecutionIdParamsSchema,
        columnId: CustomColumnIdParamsSchema,
      }),
      body: {
        content: { 'application/json': { schema: ConfigureCatalogColumnCatalogRequestSchema } },
        required: true,
      },
    },
    responses: {
      204: {
        description:
          'Catalog column configured. This operation has no impact on the current catalog until you commit the catalog importation.',
      },
      400: {
        description: '\nWhen the catalog column name is not found',
        content: { 'application/json': { schema: BeezUPCommonErrorResponseMessageSchema } },
      },
      404: {
        description:
          'Occurs when a user tries to work on the wrong store.\nOccurs when the message concerns the wrong execution.\nOccurs when a catalog column is not found.',
        content: { 'application/json': { schema: BeezUPCommonErrorResponseMessageSchema } },
      },
      409: {
        description: 'Occurs when this importation is already finished.',
        content: { 'application/json': { schema: BeezUPCommonErrorResponseMessageSchema } },
      },
      default: GeneralErrorResponse,
    },
  })

export const postV2UserCatalogsStoreIdImportationsExecutionIdCatalogColumnsColumnIdIgnoreRoute =
  createRoute({
    method: 'post',
    path: '/v2/user/catalogs/{storeId}/importations/{executionId}/catalogColumns/{columnId}/ignore',
    tags: ['Catalogs - Importation Catalog Info'],
    summary: 'Ignore Column',
    operationId: 'Importation_IgnoreColumn',
    request: {
      params: z.object({
        storeId: StoreIdOnlyGeneralParametersParamsSchema,
        executionId: ExecutionIdParamsSchema,
        columnId: CustomColumnIdParamsSchema,
      }),
    },
    responses: {
      204: {
        description:
          'Catalog column ignored. This operation has no impact on the current catalog until you commit the catalog importation.',
      },
      404: {
        description:
          'Occurs when a user tries to work on the wrong store.\nOccurs when the message concerns the wrong execution.\nOccurs when a catalog column is not found.',
        content: { 'application/json': { schema: BeezUPCommonErrorResponseMessageSchema } },
      },
      409: {
        description: 'Occurs when this importation is already finished.',
        content: { 'application/json': { schema: BeezUPCommonErrorResponseMessageSchema } },
      },
      default: GeneralErrorResponse,
    },
  })

export const postV2UserCatalogsStoreIdImportationsExecutionIdCatalogColumnsColumnIdMapRoute =
  createRoute({
    method: 'post',
    path: '/v2/user/catalogs/{storeId}/importations/{executionId}/catalogColumns/{columnId}/map',
    tags: ['Catalogs - Importation Catalog Info'],
    summary: 'Map catalog column to a BeezUP column',
    operationId: 'Importation_MapCatalogColumn',
    request: {
      params: z.object({
        storeId: StoreIdOnlyGeneralParametersParamsSchema,
        executionId: ExecutionIdParamsSchema,
        columnId: CatalogColumnIdParamsSchema,
      }),
      body: MapBeezUPColumnRequestRequestBody,
    },
    responses: {
      204: {
        description:
          'Catalog column mapped. This operation has no impact on the current catalog until you commit the catalog importation.',
      },
      404: {
        description:
          'Occurs when a user tries to work on the wrong store.\nOccurs when the message concerns the wrong execution.\nOccurs when a catalog column is not found.',
        content: { 'application/json': { schema: BeezUPCommonErrorResponseMessageSchema } },
      },
      409: {
        description: 'Occurs when this importation is already finished.',
        content: { 'application/json': { schema: BeezUPCommonErrorResponseMessageSchema } },
      },
      default: GeneralErrorResponse,
    },
  })

export const postV2UserCatalogsStoreIdImportationsExecutionIdCatalogColumnsColumnIdReattendRoute =
  createRoute({
    method: 'post',
    path: '/v2/user/catalogs/{storeId}/importations/{executionId}/catalogColumns/{columnId}/reattend',
    tags: ['Catalogs - Importation Catalog Info'],
    summary: 'Reattend Column',
    operationId: 'Importation_ReattendColumn',
    request: {
      params: z.object({
        storeId: StoreIdOnlyGeneralParametersParamsSchema,
        executionId: ExecutionIdParamsSchema,
        columnId: CustomColumnIdParamsSchema,
      }),
    },
    responses: {
      204: {
        description:
          'Catalog column reattended. This operation has no impact on the current catalog until you commit the catalog importation.',
      },
      404: {
        description:
          'Occurs when a user tries to work on the wrong store.\nOccurs when the message concerns the wrong execution.\nOccurs when a catalog column is not found.',
        content: { 'application/json': { schema: BeezUPCommonErrorResponseMessageSchema } },
      },
      409: {
        description: 'Occurs when this importation is already finished.',
        content: { 'application/json': { schema: BeezUPCommonErrorResponseMessageSchema } },
      },
      default: GeneralErrorResponse,
    },
  })

export const postV2UserCatalogsStoreIdImportationsExecutionIdCatalogColumnsColumnIdUnmapRoute =
  createRoute({
    method: 'post',
    path: '/v2/user/catalogs/{storeId}/importations/{executionId}/catalogColumns/{columnId}/unmap',
    tags: ['Catalogs - Importation Catalog Info'],
    summary: 'Unmap catalog column',
    operationId: 'Importation_UnmapCatalogColumn',
    request: {
      params: z.object({
        storeId: StoreIdOnlyGeneralParametersParamsSchema,
        executionId: ExecutionIdParamsSchema,
        columnId: CatalogColumnIdParamsSchema,
      }),
    },
    responses: {
      204: {
        description:
          'Catalog Column unmapped. This operation has no impact on the current catalog until you commit the catalog importation.',
      },
      404: {
        description:
          'Occurs when a user tries to work on the wrong store.\nOccurs when the message concerns the wrong execution.\nOccurs when a catalog column is not found.',
        content: { 'application/json': { schema: BeezUPCommonErrorResponseMessageSchema } },
      },
      409: {
        description: 'Occurs when this importation is already finished.',
        content: { 'application/json': { schema: BeezUPCommonErrorResponseMessageSchema } },
      },
      default: GeneralErrorResponse,
    },
  })

export const postV2UserCatalogsStoreIdImportationsExecutionIdCommitRoute = createRoute({
  method: 'post',
  path: '/v2/user/catalogs/{storeId}/importations/{executionId}/commit',
  tags: ['Catalogs - Importation Process'],
  summary: 'Commit Importation',
  operationId: 'Importation_Commit',
  request: {
    params: z.object({
      storeId: StoreIdOnlyGeneralParametersParamsSchema,
      executionId: ExecutionIdParamsSchema,
    }),
  },
  responses: {
    204: { description: 'Catalog importation committed' },
    400: {
      description: '',
      content: { 'application/json': { schema: BeezUPCommonErrorResponseMessageSchema } },
    },
    404: {
      description:
        'Occurs when a user tries to work on the wrong store.\nOccurs when the message concerns the wrong execution.',
      content: { 'application/json': { schema: BeezUPCommonErrorResponseMessageSchema } },
    },
    409: {
      description: 'Occurs when this importation is already finished.',
      content: { 'application/json': { schema: BeezUPCommonErrorResponseMessageSchema } },
    },
    default: GeneralErrorResponse,
  },
})

export const postV2UserCatalogsStoreIdImportationsExecutionIdCommitColumnsRoute = createRoute({
  method: 'post',
  path: '/v2/user/catalogs/{storeId}/importations/{executionId}/commitColumns',
  tags: ['Catalogs - Importation Process'],
  summary: 'Commit columns',
  operationId: 'Importation_CommitColumns',
  request: {
    params: z.object({
      storeId: StoreIdOnlyGeneralParametersParamsSchema,
      executionId: ExecutionIdParamsSchema,
    }),
  },
  responses: {
    204: {
      description:
        'Columns configuration have been committed. This operation has no impact on the current catalog until you commit the catalog importation.',
    },
    400: {
      description:
        'When a user column name is duplicate.\nWhen the catalog column name are duplicate.\nWhen the BeezUP column have duplicate mapping.\nOccurs when the required beezup column is not mapped to any column.\nOccurs when the category hierarchy is not correctly mapped.\nWhen the catalog column count limit has been reached.\nWhen the catalog custom column count limit has been reached.',
      content: { 'application/json': { schema: BeezUPCommonErrorResponseMessageSchema } },
    },
    404: {
      description:
        'Occurs when a user tries to work on the wrong store.\nOccurs when the message concerns the wrong execution.\nOccurs when a catalog column is not found.',
      content: { 'application/json': { schema: BeezUPCommonErrorResponseMessageSchema } },
    },
    default: GeneralErrorResponse,
  },
})

export const postV2UserCatalogsStoreIdImportationsExecutionIdConfigureRemainingCatalogColumnsRoute =
  createRoute({
    method: 'post',
    path: '/v2/user/catalogs/{storeId}/importations/{executionId}/configureRemainingCatalogColumns',
    tags: ['Catalogs - Importation Process'],
    summary: 'Configure remaining catalog columns',
    description: 'This operation should be used after you have mapped the required BeezUP Columns',
    operationId: 'Importation_ConfigureRemainingCatalogColumns',
    request: {
      params: z.object({
        storeId: StoreIdOnlyGeneralParametersParamsSchema,
        executionId: ExecutionIdParamsSchema,
      }),
    },
    responses: {
      204: {
        description:
          'Remaining catalog columns have been configured. This operation has no impact on the current catalog until you commit the catalog importation.',
      },
      400: {
        description:
          'When a user column name is duplicate.\nWhen the catalog column name are duplicate.\nWhen the BeezUP column have duplicate mapping.\nOccurs when the required beezup column is not mapped to any column.\nOccurs when the category hierarchy is not correctly mapped.\nOccurs when the duplicate strategy on {catalogColumnName} is not found.',
        content: { 'application/json': { schema: BeezUPCommonErrorResponseMessageSchema } },
      },
      404: {
        description:
          'Occurs when a user tries to work on the wrong store.\nOccurs when the message concerns the wrong execution.\nOccurs when a catalog column is not found.',
        content: { 'application/json': { schema: BeezUPCommonErrorResponseMessageSchema } },
      },
      409: { description: 'Occurs when this importation is already finished.' },
      default: GeneralErrorResponse,
    },
  })

export const getV2UserCatalogsStoreIdImportationsExecutionIdCustomColumnsRoute = createRoute({
  method: 'get',
  path: '/v2/user/catalogs/{storeId}/importations/{executionId}/customColumns',
  tags: ['Catalogs - Importation Catalog Info'],
  summary: 'Get custom columns currently place in this importation',
  operationId: 'Importation_GetCustomColumns',
  request: {
    params: z.object({
      storeId: StoreIdOnlyGeneralParametersParamsSchema,
      executionId: ExecutionIdParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Custom columns of current Importation successfully retrieved',
      content: { 'application/json': { schema: ImportationCustomColumnListSchema } },
    },
    404: {
      description:
        'ExecutionId not found or not yet synchronized. If not synchronized within 30 sec, please contact our support',
      content: { 'application/json': { schema: BeezUPCommonErrorResponseMessageSchema } },
    },
    409: {
      description:
        'Catalog preparation read step is not completed. Please refer to the reporting of this execution for more details.',
      content: { 'application/json': { schema: BeezUPCommonErrorResponseMessageSchema } },
    },
    default: GeneralErrorResponse,
  },
})

export const putV2UserCatalogsStoreIdImportationsExecutionIdCustomColumnsColumnIdRoute =
  createRoute({
    method: 'put',
    path: '/v2/user/catalogs/{storeId}/importations/{executionId}/customColumns/{columnId}',
    tags: ['Catalogs - Importation Catalog Info'],
    summary: 'Create or replace a custom column',
    operationId: 'Importation_SaveCustomColumn',
    request: {
      params: z.object({
        storeId: StoreIdOnlyGeneralParametersParamsSchema,
        executionId: ExecutionIdParamsSchema,
        columnId: CustomColumnIdParamsSchema,
      }),
      body: {
        content: { 'application/json': { schema: ChangeCustomColumnRequestSchema } },
        required: true,
      },
    },
    responses: {
      204: {
        description:
          'Custom column configured. This operation has no impact on the current catalog until you commit the catalog importation.',
      },
      404: {
        description:
          'Occurs when a user tries to work on the wrong store.\nOccurs when the message concerns the wrong execution.',
        content: { 'application/json': { schema: BeezUPCommonErrorResponseMessageSchema } },
      },
      409: {
        description: 'Occurs when this importation is already finished.',
        content: { 'application/json': { schema: BeezUPCommonErrorResponseMessageSchema } },
      },
      default: GeneralErrorResponse,
    },
  })

export const deleteV2UserCatalogsStoreIdImportationsExecutionIdCustomColumnsColumnIdRoute =
  createRoute({
    method: 'delete',
    path: '/v2/user/catalogs/{storeId}/importations/{executionId}/customColumns/{columnId}',
    tags: ['Catalogs - Importation Catalog Info'],
    summary: 'Delete Custom Column',
    operationId: 'Importation_DeleteCustomColumn',
    request: {
      params: z.object({
        storeId: StoreIdOnlyGeneralParametersParamsSchema,
        executionId: ExecutionIdParamsSchema,
        columnId: CustomColumnIdParamsSchema,
      }),
    },
    responses: {
      204: { description: 'When the custom column for this importation is correctly deleted' },
      404: {
        description:
          'Occurs when a user tries to work on the wrong store.\nOccurs when the message concerns the wrong execution.',
        content: { 'application/json': { schema: BeezUPCommonErrorResponseMessageSchema } },
      },
      default: GeneralErrorResponse,
    },
  })

export const getV2UserCatalogsStoreIdImportationsExecutionIdCustomColumnsColumnIdExpressionRoute =
  createRoute({
    method: 'get',
    path: '/v2/user/catalogs/{storeId}/importations/{executionId}/customColumns/{columnId}/expression',
    tags: ['Catalogs - Importation Catalog Info'],
    summary: 'Get the encrypted custom column expression in this importation',
    operationId: 'Importation_GetCustomColumnExpression',
    request: {
      params: z.object({
        storeId: StoreIdOnlyGeneralParametersParamsSchema,
        executionId: ExecutionIdParamsSchema,
        columnId: CustomColumnIdParamsSchema,
      }),
    },
    responses: {
      200: {
        description: 'Encrypted expression',
        content: {
          'application/json': {
            schema: z.string().openapi({ example: 'zlkzjkzjlzlknzklnzlknaklnaklanlknaklan' }),
          },
        },
      },
      404: {
        description:
          'ExecutionId not found or not yet synchronized. If not synchronized within 30 sec, please contact our support',
        content: { 'application/json': { schema: BeezUPCommonErrorResponseMessageSchema } },
      },
      409: {
        description:
          'Catalog preparation read step is not completed. Please refer to the reporting of this execution for more details.',
        content: { 'application/json': { schema: BeezUPCommonErrorResponseMessageSchema } },
      },
      default: GeneralErrorResponse,
    },
  })

export const postV2UserCatalogsStoreIdImportationsExecutionIdCustomColumnsColumnIdMapRoute =
  createRoute({
    method: 'post',
    path: '/v2/user/catalogs/{storeId}/importations/{executionId}/customColumns/{columnId}/map',
    tags: ['Catalogs - Importation Catalog Info'],
    summary: 'Map custom column to a BeezUP column',
    operationId: 'Importation_MapCustomColumn',
    request: {
      params: z.object({
        storeId: StoreIdOnlyGeneralParametersParamsSchema,
        executionId: ExecutionIdParamsSchema,
        columnId: CustomColumnIdParamsSchema,
      }),
      body: MapBeezUPColumnRequestRequestBody,
    },
    responses: {
      204: {
        description:
          'Custom column mapped. This operation has no impact on the current catalog until you commit the catalog importation.',
      },
      404: {
        description:
          'Occurs when a user tries to work on the wrong store.\nOccurs when the message concerns the wrong execution.\nOccurs when a catalog column is not found.',
        content: { 'application/json': { schema: BeezUPCommonErrorResponseMessageSchema } },
      },
      409: {
        description: 'Occurs when this importation is already finished.',
        content: { 'application/json': { schema: BeezUPCommonErrorResponseMessageSchema } },
      },
      default: GeneralErrorResponse,
    },
  })

export const postV2UserCatalogsStoreIdImportationsExecutionIdCustomColumnsColumnIdUnmapRoute =
  createRoute({
    method: 'post',
    path: '/v2/user/catalogs/{storeId}/importations/{executionId}/customColumns/{columnId}/unmap',
    tags: ['Catalogs - Importation Catalog Info'],
    summary: 'Unmap custom column',
    operationId: 'Importation_UnmapCustomColumn',
    request: {
      params: z.object({
        storeId: StoreIdOnlyGeneralParametersParamsSchema,
        executionId: ExecutionIdParamsSchema,
        columnId: CustomColumnIdParamsSchema,
      }),
    },
    responses: {
      204: {
        description:
          'Custom column unmapped. This operation has no impact on the current catalog until you commit the catalog importation.',
      },
      404: {
        description:
          'Occurs when a user tries to work on the wrong store.\nOccurs when the message concerns the wrong execution.\nOccurs when a catalog column is not found.',
        content: { 'application/json': { schema: BeezUPCommonErrorResponseMessageSchema } },
      },
      409: {
        description: 'Occurs when this importation is already finished.',
        content: { 'application/json': { schema: BeezUPCommonErrorResponseMessageSchema } },
      },
      default: GeneralErrorResponse,
    },
  })

export const getV2UserCatalogsStoreIdImportationsExecutionIdProductSamplesProductSampleIndexRoute =
  createRoute({
    method: 'get',
    path: '/v2/user/catalogs/{storeId}/importations/{executionId}/productSamples/{productSampleIndex}',
    tags: ['Catalogs - Importation Catalog Info'],
    summary:
      'Get the product sample related to this importation with all columns (catalog and custom)',
    operationId: 'Importation_GetProductSample',
    request: {
      params: z.object({
        storeId: StoreIdOnlyGeneralParametersParamsSchema,
        executionId: ExecutionIdParamsSchema,
        productSampleIndex: ProductSampleIndexParamsSchema,
      }),
    },
    responses: {
      200: { description: 'OK', content: { 'application/json': { schema: ProductSampleSchema } } },
      404: {
        description:
          "ExecutionId not found or not yet synchronized. If not synchronized within 30 sec, please contact our support\n      schema:\n$ref: 'https://api.beezup.com/swaggerhub/domains/BeezUP/api.beezup.com/v2#/definitions/BeezUP.Common.ErrorResponseMessage'",
      },
      409: {
        description:
          'Catalog preparation read step is not completed. Please refer to the reporting of this execution for more details.',
        content: { 'application/json': { schema: BeezUPCommonErrorResponseMessageSchema } },
      },
      default: GeneralErrorResponse,
    },
  })

export const getV2UserCatalogsStoreIdImportationsExecutionIdProductSamplesProductSampleIndexCustomColumnsColumnIdRoute =
  createRoute({
    method: 'get',
    path: '/v2/user/catalogs/{storeId}/importations/{executionId}/productSamples/{productSampleIndex}/customColumns/{columnId}',
    tags: ['Catalogs - Importation Catalog Info'],
    summary: 'Get product sample custom column value related to this importation.',
    description:
      '/!\\ Use this operation only when you just changed the custom column expression and you want to get a precise the property value. Otherwise use the operation Importation_GetProductSample which will give you all property values',
    operationId: 'Importation_GetProductSampleCustomColumnValue',
    request: {
      params: z.object({
        storeId: StoreIdOnlyGeneralParametersParamsSchema,
        executionId: ExecutionIdParamsSchema,
        productSampleIndex: ProductSampleIndexParamsSchema,
        columnId: CustomColumnIdParamsSchema,
      }),
    },
    responses: {
      200: {
        description: 'Product sample custom column value',
        content: {
          'application/json': {
            schema: z.string().openapi({ example: 'A value computed from a expression' }),
          },
        },
      },
      404: {
        description:
          'ExecutionId not found or not yet synchronized. If not synchronized within 30 sec, please contact our support',
        content: { 'application/json': { schema: BeezUPCommonErrorResponseMessageSchema } },
        headers: z.object({
          'Retry-After': {
            description: 'The duration in second to wait before polling this resource',
            schema: z
              .int()
              .min(5)
              .default(5)
              .exactOptional()
              .openapi({
                description: 'The duration in second to wait before polling this resource',
                param: { required: false },
              }),
          },
        }),
      },
      409: {
        description:
          'Catalog preparation read step is not completed. Please refer to the reporting of this execution for more details.',
        content: { 'application/json': { schema: BeezUPCommonErrorResponseMessageSchema } },
      },
      default: GeneralErrorResponse,
    },
  })

export const postV2UserCatalogsStoreIdImportationsExecutionIdProductsListRoute = createRoute({
  method: 'post',
  path: '/v2/user/catalogs/{storeId}/importations/{executionId}/products/list',
  tags: ['Catalogs - Importation Process'],
  summary: 'Importation Get Products Report',
  operationId: 'Importation_GetProductsReport',
  request: {
    params: z.object({
      storeId: StoreIdOnlyGeneralParametersParamsSchema,
      executionId: ExecutionIdParamsSchema,
    }),
    body: {
      content: { 'application/json': { schema: GetImportationProductsReportRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Get Products Report Response',
      content: { 'application/json': { schema: GetImportationProductsReportResponseSchema } },
    },
    404: {
      description:
        'Occurs when a user tries to work on the wrong store.\nOccurs when the message concerns the wrong execution.',
    },
    409: { description: 'Report Not ready Yet. Please retry in a few minutes.' },
  },
})

export const getV2UserCatalogsStoreIdImportationsExecutionIdReportRoute = createRoute({
  method: 'get',
  path: '/v2/user/catalogs/{storeId}/importations/{executionId}/report',
  tags: ['Catalogs - Importation Process'],
  summary: 'Importation Get Report',
  operationId: 'Importation_GetReport',
  request: {
    params: z.object({
      storeId: StoreIdOnlyGeneralParametersParamsSchema,
      executionId: ExecutionIdParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Get Report Response',
      content: { 'application/json': { schema: GetImportationReportResponseSchema } },
    },
    404: {
      description:
        'Occurs when a user tries to work on the wrong store.\nOccurs when the message concerns the wrong execution.',
    },
    409: { description: 'Report Not ready Yet. Please retry in a few minutes.' },
  },
})

export const getV2UserCatalogsStoreIdImportationsExecutionIdTechnicalProgressionRoute = createRoute(
  {
    method: 'get',
    path: '/v2/user/catalogs/{storeId}/importations/{executionId}/technicalProgression',
    tags: ['Catalogs - Importation Process'],
    summary: 'Get technical progression',
    operationId: 'Importation_TechnicalProgression',
    request: {
      params: z.object({
        storeId: StoreIdOnlyGeneralParametersParamsSchema,
        executionId: ExecutionIdParamsSchema,
      }),
    },
    responses: {
      200: {
        description: 'When the technical progression is correctly retrived',
        content: { 'application/json': { schema: ImportationTechnicalProgressionSchema } },
      },
      404: {
        description:
          'Occurs when a user tries to work on the wrong store.\nOccurs when the message concerns the wrong execution.',
        content: { 'application/json': { schema: BeezUPCommonErrorResponseMessageSchema } },
      },
      409: {
        description: 'Occurs when this importation is already finished.',
        content: { 'application/json': { schema: BeezUPCommonErrorResponseMessageSchema } },
      },
      default: GeneralErrorResponse,
    },
  },
)

export const getV2UserCatalogsStoreIdInputConfigurationRoute = createRoute({
  method: 'get',
  path: '/v2/user/catalogs/{storeId}/inputConfiguration',
  tags: ['Catalogs - Catalog'],
  summary: 'Get the last input configuration',
  operationId: 'Importation_GetManualUpdateLastInputConfig',
  request: { params: z.object({ storeId: StoreIdOnlyGeneralParametersParamsSchema }) },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: LastManualImportInputConfigurationSchema } },
    },
    404: {
      description: 'StoreId or Manual Update last configuration not found',
      content: { 'application/json': { schema: BeezUPCommonErrorResponseMessageSchema } },
    },
    default: GeneralErrorResponse,
  },
})

export const getV2UserCatalogsStoreIdProductsRoute = createRoute({
  method: 'get',
  path: '/v2/user/catalogs/{storeId}/products',
  tags: ['Catalogs - Catalog'],
  summary: 'Get product by Sku',
  operationId: 'Catalog_GetProductBySku',
  request: {
    params: z.object({ storeId: StoreIdOnlyGeneralParametersParamsSchema }),
    query: z.object({
      sku: z
        .string()
        .openapi({
          param: {
            description: 'The product sku you want to get',
            in: 'query',
            name: 'sku',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Product', content: { 'application/json': { schema: ProductSchema } } },
    404: {
      description: 'StoreId or Product not found',
      content: { 'application/json': { schema: BeezUPCommonErrorResponseMessageSchema } },
    },
    default: GeneralErrorResponse,
  },
})

export const postV2UserCatalogsStoreIdProductsListRoute = createRoute({
  method: 'post',
  path: '/v2/user/catalogs/{storeId}/products/list',
  tags: ['Catalogs - Catalog'],
  summary: 'Get product list',
  operationId: 'Catalog_GetProducts',
  request: {
    params: z.object({ storeId: StoreIdOnlyGeneralParametersParamsSchema }),
    body: { content: { 'application/json': { schema: GetProductsRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Product list',
      content: { 'application/json': { schema: ProductListSchema } },
    },
    404: {
      description: 'StoreId not found',
      content: { 'application/json': { schema: BeezUPCommonErrorResponseMessageSchema } },
    },
    default: GeneralErrorResponse,
  },
})

export const getV2UserCatalogsStoreIdProductsRandomRoute = createRoute({
  method: 'get',
  path: '/v2/user/catalogs/{storeId}/products/random',
  tags: ['Catalogs - Catalog'],
  summary: 'Get random product list',
  description: 'We will return 10 products randomly selected with all product values',
  operationId: 'Catalog_GetRandomProducts',
  request: { params: z.object({ storeId: StoreIdOnlyGeneralParametersParamsSchema }) },
  responses: {
    200: {
      description: 'Random product list',
      content: { 'application/json': { schema: RandomProductListSchema } },
    },
    404: {
      description: 'StoreId not found',
      content: { 'application/json': { schema: BeezUPCommonErrorResponseMessageSchema } },
    },
    default: GeneralErrorResponse,
  },
})

export const getV2UserCatalogsStoreIdProductsProductIdRoute = createRoute({
  method: 'get',
  path: '/v2/user/catalogs/{storeId}/products/{productId}',
  tags: ['Catalogs - Catalog'],
  summary: 'Get product by ProductId',
  operationId: 'Catalog_GetProductByProductId',
  request: {
    params: z.object({
      storeId: StoreIdOnlyGeneralParametersParamsSchema,
      productId: z
        .guid()
        .openapi({
          param: {
            description: 'The product identifier you want to get',
            in: 'path',
            name: 'productId',
            required: true,
            schema: { format: 'guid', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Product', content: { 'application/json': { schema: ProductSchema } } },
    404: {
      description: 'StoreId not found',
      content: { 'application/json': { schema: BeezUPCommonErrorResponseMessageSchema } },
    },
    default: GeneralErrorResponse,
  },
})

export const getV2UserChannelCatalogsIndexRoute = createRoute({
  method: 'get',
  path: '/v2/user/channelCatalogs/',
  tags: ['Channel Catalogs - Global'],
  summary: 'List all your current channel catalogs',
  operationId: 'GetChannelCatalogs',
  request: {
    query: z.object({
      storeId: z
        .guid()
        .exactOptional()
        .openapi({
          param: {
            description: 'The store identifier',
            example: '04730364-9826-4ff3-92e4-51fccd02bf10',
            in: 'query',
            name: 'storeId',
            required: false,
            schema: { format: 'guid', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: ChannelCatalogListSchema } },
    },
    default: GeneralErrorResponse,
  },
})

export const postV2UserChannelCatalogsIndexRoute = createRoute({
  method: 'post',
  path: '/v2/user/channelCatalogs/',
  tags: ['Channel Catalogs - Global'],
  summary: 'Add a new channel catalog',
  operationId: 'AddChannelCatalog',
  request: {
    body: {
      content: { 'application/json': { schema: AddChannelCatalogRequestSchema } },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'When the channel has been successfully added for this store',
      content: { 'application/json': { schema: LinksGetChannelCatalogLinkSchema } },
      headers: z.object({
        Location: {
          description: 'The new location',
          schema: z
            .string()
            .exactOptional()
            .openapi({ description: 'The new location', param: { required: false } }),
        },
        'Retry-After': {
          description: 'The duration in second to wait before polling this resource',
          schema: z
            .int()
            .min(5)
            .default(5)
            .exactOptional()
            .openapi({
              description: 'The duration in second to wait before polling this resource',
              param: { required: false },
            }),
        },
      }),
    },
    404: {
      description: 'StoreId not found or not authorized',
      content: { 'application/json': { schema: BeezUPCommonErrorResponseMessageSchema } },
    },
    default: GeneralErrorResponse,
  },
})

export const getV2UserChannelCatalogsFilterOperatorsRoute = createRoute({
  method: 'get',
  path: '/v2/user/channelCatalogs/filterOperators',
  tags: ['Channel Catalogs - Global'],
  summary: 'Get channel catalog filter operators',
  operationId: 'GetChannelCatalogFilterOperators',
  responses: {
    200: {
      description: 'Channel catalog  filter operator list',
      content: { 'application/json': { schema: z.array(FilterOperatorSchema) } },
    },
    default: GeneralErrorResponse,
  },
})

export const postV2UserChannelCatalogsProductsRoute = createRoute({
  method: 'post',
  path: '/v2/user/channelCatalogs/products',
  tags: ['Channel Catalogs - Products'],
  summary: 'Get channel catalog products related to these channel catalogs',
  operationId: 'GetChannelCatalogProductByChannelCatalog',
  request: {
    body: {
      content: {
        'application/json': { schema: ChannelCatalogProductByChannelCatalogRequestSchema },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'The channel catalog product by channel catalog',
      content: {
        'application/json': { schema: ChannelCatalogProductByChannelCatalogResponseSchema },
      },
    },
    404: {
      description: 'ProductId not found or not authorized',
      content: { 'application/json': { schema: BeezUPCommonErrorResponseMessageSchema } },
    },
    default: GeneralErrorResponse,
  },
})

export const getV2UserChannelCatalogsChannelCatalogIdRoute = createRoute({
  method: 'get',
  path: '/v2/user/channelCatalogs/{channelCatalogId}',
  tags: ['Channel Catalogs - Global'],
  summary: 'Get the channel catalog information',
  operationId: 'GetChannelCatalog',
  request: { params: z.object({ channelCatalogId: ChannelCatalogIdParameterParamsSchema }) },
  responses: {
    200: {
      description: 'Channel catalog',
      content: { 'application/json': { schema: ChannelCatalogSchema } },
    },
    404: {
      description: 'ChannelCatalogId not found or not authorized',
      content: { 'application/json': { schema: BeezUPCommonErrorResponseMessageSchema } },
    },
    default: GeneralErrorResponse,
  },
})

export const deleteV2UserChannelCatalogsChannelCatalogIdRoute = createRoute({
  method: 'delete',
  path: '/v2/user/channelCatalogs/{channelCatalogId}',
  tags: ['Channel Catalogs - Global'],
  summary: 'Delete the channel catalog',
  operationId: 'DeleteChannelCatalog',
  request: { params: z.object({ channelCatalogId: ChannelCatalogIdParameterParamsSchema }) },
  responses: {
    204: { description: 'Channel catalog deleted' },
    404: {
      description: 'ChannelCatalogId not found or not authorized',
      content: { 'application/json': { schema: BeezUPCommonErrorResponseMessageSchema } },
    },
    default: GeneralErrorResponse,
  },
})

export const getV2UserChannelCatalogsChannelCatalogIdCategoriesRoute = createRoute({
  method: 'get',
  path: '/v2/user/channelCatalogs/{channelCatalogId}/categories',
  tags: ['Channel Catalogs - Categories'],
  summary: 'Get channel catalog categories',
  operationId: 'GetChannelCatalogCategories',
  request: { params: z.object({ channelCatalogId: ChannelCatalogIdParameterParamsSchema }) },
  responses: {
    200: {
      description: 'Channel catalog category mappings',
      content: { 'application/json': { schema: ChannelCatalogCategoryConfigurationListSchema } },
    },
    404: {
      description: 'ChannelCatalogId not found or not authorized',
      content: { 'application/json': { schema: BeezUPCommonErrorResponseMessageSchema } },
    },
    default: GeneralErrorResponse,
  },
})

export const postV2UserChannelCatalogsChannelCatalogIdCategoriesConfigureRoute = createRoute({
  method: 'post',
  path: '/v2/user/channelCatalogs/{channelCatalogId}/categories/configure',
  tags: ['Channel Catalogs - Categories'],
  summary: 'Configure channel catalog category',
  operationId: 'ConfigureChannelCatalogCategory',
  request: {
    params: z.object({ channelCatalogId: ChannelCatalogIdParameterParamsSchema }),
    body: {
      content: { 'application/json': { schema: ConfigureCategoryRequestSchema } },
      required: true,
    },
  },
  responses: {
    204: { description: 'Channel catalog category configured' },
    400: {
      description: 'BadRequest. See Error Response for more details',
      content: { 'application/json': { schema: BeezUPCommonErrorResponseMessageSchema } },
    },
    404: {
      description: 'ChannelCatalogId not found or not authorized',
      content: { 'application/json': { schema: BeezUPCommonErrorResponseMessageSchema } },
    },
    default: GeneralErrorResponse,
  },
})

export const postV2UserChannelCatalogsChannelCatalogIdCategoriesDisableMappingRoute = createRoute({
  method: 'post',
  path: '/v2/user/channelCatalogs/{channelCatalogId}/categories/disableMapping',
  tags: ['Channel Catalogs - Categories'],
  summary: 'Disable a channel catalog category mapping',
  operationId: 'DisableChannelCatalogCategoryMapping',
  request: { params: z.object({ channelCatalogId: ChannelCatalogIdParameterParamsSchema }) },
  responses: {
    204: { description: 'Channel catalog category mapping disabled' },
    404: {
      description: 'ChannelCatalogId not found or not authorized',
      content: { 'application/json': { schema: BeezUPCommonErrorResponseMessageSchema } },
    },
    default: GeneralErrorResponse,
  },
})

export const postV2UserChannelCatalogsChannelCatalogIdCategoriesReenableMappingRoute = createRoute({
  method: 'post',
  path: '/v2/user/channelCatalogs/{channelCatalogId}/categories/reenableMapping',
  tags: ['Channel Catalogs - Categories'],
  summary: 'Reenable a channel catalog category mapping',
  operationId: 'ReenableChannelCatalogCategoryMapping',
  request: { params: z.object({ channelCatalogId: ChannelCatalogIdParameterParamsSchema }) },
  responses: {
    204: { description: 'Channel catalog category mapping reenabled' },
    404: {
      description: 'ChannelCatalogId not found or not authorized',
      content: { 'application/json': { schema: BeezUPCommonErrorResponseMessageSchema } },
    },
    default: GeneralErrorResponse,
  },
})

export const putV2UserChannelCatalogsChannelCatalogIdColumnMappingsRoute = createRoute({
  method: 'put',
  path: '/v2/user/channelCatalogs/{channelCatalogId}/columnMappings',
  tags: ['Channel Catalogs - Column Mappings'],
  summary: 'Configure channel catalog column mappings',
  operationId: 'ConfigureChannelCatalogColumnMappings',
  request: {
    params: z.object({ channelCatalogId: ChannelCatalogIdParameterParamsSchema }),
    body: {
      content: { 'application/json': { schema: ChannelCatalogColumnMappingListSchema } },
      required: true,
    },
  },
  responses: {
    204: { description: 'Channel catalog column mappings configured' },
    404: {
      description: 'ChannelCatalogId not found or not authorized',
      content: { 'application/json': { schema: BeezUPCommonErrorResponseMessageSchema } },
    },
    default: GeneralErrorResponse,
  },
})

export const postV2UserChannelCatalogsChannelCatalogIdDisableRoute = createRoute({
  method: 'post',
  path: '/v2/user/channelCatalogs/{channelCatalogId}/disable',
  tags: ['Channel Catalogs - Settings'],
  summary: 'Disable a channel catalog',
  operationId: 'DisableChannelCatalog',
  request: { params: z.object({ channelCatalogId: ChannelCatalogIdParameterParamsSchema }) },
  responses: {
    204: { description: 'Channel catalog disabled' },
    404: {
      description: 'Occurs when a user tries to work on the wrong ChanelCatalogId.',
      content: { 'application/json': { schema: BeezUPCommonErrorResponseMessageSchema } },
    },
    default: GeneralErrorResponse,
  },
})

export const postV2UserChannelCatalogsChannelCatalogIdEnableRoute = createRoute({
  method: 'post',
  path: '/v2/user/channelCatalogs/{channelCatalogId}/enable',
  tags: ['Channel Catalogs - Settings'],
  summary: 'Enable a channel catalog',
  operationId: 'EnableChannelCatalog',
  request: { params: z.object({ channelCatalogId: ChannelCatalogIdParameterParamsSchema }) },
  responses: {
    204: { description: 'Channel catalog enabled' },
    402: {
      description: 'You have to upgrade your offer to activate this channel catalog',
      content: { 'application/json': { schema: UpgradeOfferRequiredSchema } },
    },
    404: {
      description: 'Occurs when a user tries to work on the wrong ChanelCatalogId.',
      content: { 'application/json': { schema: BeezUPCommonErrorResponseMessageSchema } },
    },
    default: GeneralErrorResponse,
  },
})

export const getV2UserChannelCatalogsChannelCatalogIdExclusionFiltersRoute = createRoute({
  method: 'get',
  path: '/v2/user/channelCatalogs/{channelCatalogId}/exclusionFilters',
  tags: ['Channel Catalogs - Exclusion Filters'],
  summary: 'Get channel catalog exclusion filters',
  operationId: 'GetChannelCatalogExclusionFilters',
  request: { params: z.object({ channelCatalogId: ChannelCatalogIdParameterParamsSchema }) },
  responses: {
    200: {
      description: 'Channel catalog exclusion filter list',
      content: { 'application/json': { schema: ExclusionFiltersResponseSchema } },
    },
    404: {
      description: 'ChannelCatalogId not found or not authorized',
      content: { 'application/json': { schema: BeezUPCommonErrorResponseMessageSchema } },
    },
    default: GeneralErrorResponse,
  },
})

export const putV2UserChannelCatalogsChannelCatalogIdExclusionFiltersRoute = createRoute({
  method: 'put',
  path: '/v2/user/channelCatalogs/{channelCatalogId}/exclusionFilters',
  tags: ['Channel Catalogs - Exclusion Filters'],
  summary: 'Configure channel catalog exclusion filters',
  operationId: 'ConfigureChannelCatalogExclusionFilters',
  request: {
    params: z.object({ channelCatalogId: ChannelCatalogIdParameterParamsSchema }),
    body: { content: { 'application/json': { schema: ExclusionFiltersSchema } }, required: true },
  },
  responses: {
    204: { description: 'Channel catalog exclusion filter list configured' },
    400: {
      description: 'BadRequest. See Error Response for more details',
      content: { 'application/json': { schema: BeezUPCommonErrorResponseMessageSchema } },
    },
    404: {
      description: 'ChannelCatalogId not found or not authorized',
      content: { 'application/json': { schema: BeezUPCommonErrorResponseMessageSchema } },
    },
    default: GeneralErrorResponse,
  },
})

export const getV2UserChannelCatalogsChannelCatalogIdExportationsCacheRoute = createRoute({
  method: 'get',
  path: '/v2/user/channelCatalogs/{channelCatalogId}/exportations/cache',
  tags: ['Channel Catalogs - Exportations'],
  summary: 'Get the exportation cache information',
  operationId: 'GetChannelCatalogExportationCacheInfo',
  request: { params: z.object({ channelCatalogId: ChannelCatalogIdParameterParamsSchema }) },
  responses: {
    200: {
      description: 'Channel catalog exportation cache information',
      content: { 'application/json': { schema: ChannelCatalogExportCacheInfoResponseSchema } },
    },
    404: {
      description: 'ChannelCatalogId not found or not authorized',
      content: { 'application/json': { schema: BeezUPCommonErrorResponseMessageSchema } },
    },
    default: GeneralErrorResponse,
  },
})

export const postV2UserChannelCatalogsChannelCatalogIdExportationsCacheClearRoute = createRoute({
  method: 'post',
  path: '/v2/user/channelCatalogs/{channelCatalogId}/exportations/cache/clear',
  tags: ['Channel Catalogs - Exportations'],
  summary: 'Clear the exportation cache',
  operationId: 'ClearChannelCatalogExportationCache',
  request: { params: z.object({ channelCatalogId: ChannelCatalogIdParameterParamsSchema }) },
  responses: {
    204: { description: 'Channel catalog exportation cache cleared' },
    404: {
      description: 'ChannelCatalogId not found or not authorized',
      content: { 'application/json': { schema: BeezUPCommonErrorResponseMessageSchema } },
    },
    default: GeneralErrorResponse,
  },
})

export const getV2UserChannelCatalogsChannelCatalogIdExportationsHistoryRoute = createRoute({
  method: 'get',
  path: '/v2/user/channelCatalogs/{channelCatalogId}/exportations/history',
  tags: ['Channel Catalogs - Exportations'],
  summary: 'Get the exportation history',
  operationId: 'GetChannelCatalogExportationHistory',
  request: {
    params: z.object({ channelCatalogId: ChannelCatalogIdParameterParamsSchema }),
    query: z.object({
      pageNumber: PageNumberQueryStrngParameterParamsSchema,
      pageSize: PageSizeQueryStrngParameterParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Channel catalog exportation history',
      content: { 'application/json': { schema: ChannelCatalogExportationHistorySchema } },
    },
    404: {
      description: 'ChannelCatalogId not found or not authorized',
      content: { 'application/json': { schema: BeezUPCommonErrorResponseMessageSchema } },
    },
    default: GeneralErrorResponse,
  },
})

export const postV2UserChannelCatalogsChannelCatalogIdProductsRoute = createRoute({
  method: 'post',
  path: '/v2/user/channelCatalogs/{channelCatalogId}/products',
  tags: ['Channel Catalogs - Products'],
  summary: 'Get channel catalog product information list',
  operationId: 'GetChannelCatalogProductInfoList',
  request: {
    params: z.object({ channelCatalogId: ChannelCatalogIdParameterParamsSchema }),
    body: GetChannelCatalogProductInfoListRequestRequestBody,
  },
  responses: {
    200: {
      description: 'Channel catalog product information',
      content: { 'application/json': { schema: ChannelCatalogProductInfoListSchema } },
    },
    404: {
      description: 'ChannelCatalogId not found or not authorized',
      content: { 'application/json': { schema: BeezUPCommonErrorResponseMessageSchema } },
    },
    default: GeneralErrorResponse,
  },
})

export const getV2UserChannelCatalogsChannelCatalogIdProductsCountersRoute = createRoute({
  method: 'get',
  path: '/v2/user/channelCatalogs/{channelCatalogId}/products/counters',
  tags: ['Channel Catalogs - Products'],
  summary: "Get channel catalog products' counters",
  operationId: 'GetChannelCatalogProductsCounters',
  request: { params: z.object({ channelCatalogId: ChannelCatalogIdParameterParamsSchema }) },
  responses: {
    200: {
      description: "Channel catalog products' counters",
      content: { 'application/json': { schema: ChannelCatalogProductsCountersSchema } },
    },
    404: {
      description: 'ChannelCatalogId not found or not authorized',
      content: { 'application/json': { schema: BeezUPCommonErrorResponseMessageSchema } },
    },
    default: GeneralErrorResponse,
  },
})

export const postV2UserChannelCatalogsChannelCatalogIdProductsExportRoute = createRoute({
  method: 'post',
  path: '/v2/user/channelCatalogs/{channelCatalogId}/products/export',
  tags: ['Channel Catalogs - Products'],
  summary: 'Export channel catalog product information list',
  operationId: 'ExportChannelCatalogProductInfoList',
  request: {
    params: z.object({ channelCatalogId: ChannelCatalogIdParameterParamsSchema }),
    query: z.object({ format: ExportFormatInQueryGeneralParameterParamsSchema }),
    body: GetChannelCatalogProductInfoListRequestRequestBody,
  },
  responses: {
    200: {
      description: 'Channel catalog product information list exported',
      content: {
        'application/json': {
          schema: BeezUPCommonLink3Schema,
          examples: {
            response: {
              value: {
                href: 'https://beezupchannel.blob.core.windows.net/reports/exports/Excel_Products.xslx',
                method: 'GET',
              },
            },
          },
        },
      },
      headers: z.object({
        Location: {
          description:
            'To indicate the url of the export file\nExample: https://beezupchannel.blob.core.windows.net/reports/exports/Excel_Products.xslx\n',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'To indicate the url of the export file\nExample: https://beezupchannel.blob.core.windows.net/reports/exports/Excel_Products.xslx\n',
              param: { required: false },
            }),
        },
      }),
    },
    404: {
      description: 'ChannelCatalogId not found or not authorized',
      content: { 'application/json': { schema: BeezUPCommonErrorResponseMessageSchema } },
    },
    default: GeneralErrorResponse,
  },
})

export const getV2UserChannelCatalogsChannelCatalogIdProductsProductIdRoute = createRoute({
  method: 'get',
  path: '/v2/user/channelCatalogs/{channelCatalogId}/products/{productId}',
  tags: ['Channel Catalogs - Products'],
  summary: 'Get channel catalog product information',
  operationId: 'GetChannelCatalogProductInfo',
  request: {
    params: z.object({
      channelCatalogId: ChannelCatalogIdParameterParamsSchema,
      productId: ProductIdParameterParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Channel catalog product information',
      content: { 'application/json': { schema: ChannelCatalogProductInfoSchema } },
    },
    404: {
      description: 'ChannelCatalog or ProductId not found or not authorized',
      content: { 'application/json': { schema: BeezUPCommonErrorResponseMessageSchema } },
    },
    default: GeneralErrorResponse,
  },
})

export const postV2UserChannelCatalogsChannelCatalogIdProductsProductIdDisableRoute = createRoute({
  method: 'post',
  path: '/v2/user/channelCatalogs/{channelCatalogId}/products/{productId}/disable',
  tags: ['Channel Catalogs - Products Optimisation'],
  summary: 'Disable channel catalog product',
  description:
    'By default a all your catalog products are exposed to the channel.\nYou can disable a product by using this operation.\n/!\\ In case of massive optimisation we recommand you to use the analytics api\n',
  operationId: 'DisableChannelCatalogProduct',
  request: {
    params: z.object({
      channelCatalogId: ChannelCatalogIdParameterParamsSchema,
      productId: ProductIdParameterParamsSchema,
    }),
  },
  responses: {
    204: { description: 'Channel catalog product disabled' },
    404: {
      description: 'ChannelCatalogId Or ProductId not found or not authorized',
      content: { 'application/json': { schema: BeezUPCommonErrorResponseMessageSchema } },
    },
    default: GeneralErrorResponse,
  },
})

export const putV2UserChannelCatalogsChannelCatalogIdProductsProductIdOverridesRoute = createRoute({
  method: 'put',
  path: '/v2/user/channelCatalogs/{channelCatalogId}/products/{productId}/overrides',
  tags: ['Channel Catalogs - Products Overrides'],
  summary: 'Override channel catalog product values',
  operationId: 'OverrideChannelCatalogProductValues',
  request: {
    params: z.object({
      channelCatalogId: ChannelCatalogIdParameterParamsSchema,
      productId: ProductIdParameterParamsSchema,
    }),
    body: { content: { 'application/json': { schema: ProductOverridesSchema } }, required: true },
  },
  responses: {
    204: { description: 'Channel catalog product overriden' },
    400: {
      description: 'BadRequest. See Error Response for more details',
      content: { 'application/json': { schema: BeezUPCommonErrorResponseMessageSchema } },
    },
    404: {
      description: 'ChannelCatalogId or ProductId not found or not authorized',
      content: { 'application/json': { schema: BeezUPCommonErrorResponseMessageSchema } },
    },
    default: GeneralErrorResponse,
  },
})

export const getV2UserChannelCatalogsChannelCatalogIdProductsProductIdOverridesCopyRoute =
  createRoute({
    method: 'get',
    path: '/v2/user/channelCatalogs/{channelCatalogId}/products/{productId}/overrides/copy',
    tags: ['Channel Catalogs - Products Overrides'],
    summary: 'Get channel catalog product value override compatibilities status',
    operationId: 'GetChannelCatalogProductValueOverrideCopy',
    request: {
      params: z.object({
        channelCatalogId: ChannelCatalogIdParameterParamsSchema,
        productId: ProductIdParameterParamsSchema,
      }),
    },
    responses: {
      204: { description: 'placeholder. will be completed soon.' },
      404: {
        description: 'ChannelCatalog or ProductId not found or not authorized',
        content: { 'application/json': { schema: BeezUPCommonErrorResponseMessageSchema } },
      },
      default: GeneralErrorResponse,
    },
  })

export const postV2UserChannelCatalogsChannelCatalogIdProductsProductIdOverridesCopyRoute =
  createRoute({
    method: 'post',
    path: '/v2/user/channelCatalogs/{channelCatalogId}/products/{productId}/overrides/copy',
    tags: ['Channel Catalogs - Products Overrides'],
    summary: 'Copy channel catalog product value override',
    operationId: 'ConfigureChannelCatalogProductValueOverrideCopy',
    request: {
      params: z.object({
        channelCatalogId: ChannelCatalogIdParameterParamsSchema,
        productId: ProductIdParameterParamsSchema,
      }),
    },
    responses: {
      204: { description: 'Channel catalog product value override deleted' },
      404: {
        description: 'ChannelCatalogId or ProductId not found or not authorized',
        content: { 'application/json': { schema: BeezUPCommonErrorResponseMessageSchema } },
      },
      default: GeneralErrorResponse,
    },
  })

export const deleteV2UserChannelCatalogsChannelCatalogIdProductsProductIdOverridesChannelColumnIdRoute =
  createRoute({
    method: 'delete',
    path: '/v2/user/channelCatalogs/{channelCatalogId}/products/{productId}/overrides/{channelColumnId}',
    tags: ['Channel Catalogs - Products Overrides'],
    summary: 'Delete a specific channel catalog product value override',
    operationId: 'DeleteChannelCatalogProductValueOverride',
    request: {
      params: z.object({
        channelCatalogId: ChannelCatalogIdParameterParamsSchema,
        productId: ProductIdParameterParamsSchema,
        channelColumnId: z
          .guid()
          .openapi({
            param: {
              description: 'The channel column identifier',
              example: '8a76f06a-fefc-4c0d-bcfe-b210f1482977',
              in: 'path',
              name: 'channelColumnId',
              required: true,
              schema: { format: 'guid', type: 'string' },
            },
          }),
      }),
    },
    responses: {
      204: { description: 'Channel catalog product value override deleted' },
      404: {
        description: 'ChannelCatalogId or ProductId not found or not authorized',
        content: { 'application/json': { schema: BeezUPCommonErrorResponseMessageSchema } },
      },
      default: GeneralErrorResponse,
    },
  })

export const postV2UserChannelCatalogsChannelCatalogIdProductsProductIdReenableRoute = createRoute({
  method: 'post',
  path: '/v2/user/channelCatalogs/{channelCatalogId}/products/{productId}/reenable',
  tags: ['Channel Catalogs - Products Optimisation'],
  summary: 'Reenable channel catalog product',
  description:
    'By default a all your catalog products are exposed to the channel.\nYou can reenable a product by using this operation.\n/!\\ In case of massive optimisation we recommand you to use the analytics api\n',
  operationId: 'ReenableChannelCatalogProduct',
  request: {
    params: z.object({
      channelCatalogId: ChannelCatalogIdParameterParamsSchema,
      productId: ProductIdParameterParamsSchema,
    }),
  },
  responses: {
    204: { description: 'Channel catalog product reenabled' },
    404: {
      description: 'ChannelCatalogId or ProductId not found or not authorized',
      content: { 'application/json': { schema: BeezUPCommonErrorResponseMessageSchema } },
    },
    default: GeneralErrorResponse,
  },
})

export const putV2UserChannelCatalogsChannelCatalogIdSettingsCostRoute = createRoute({
  method: 'put',
  path: '/v2/user/channelCatalogs/{channelCatalogId}/settings/cost',
  tags: ['Channel Catalogs - Settings'],
  summary: 'Configure channel catalog cost settings',
  operationId: 'ConfigureChannelCatalogCostSettings',
  request: {
    params: z.object({ channelCatalogId: ChannelCatalogIdParameterParamsSchema }),
    body: { content: { 'application/json': { schema: CostSettingsSchema } }, required: true },
  },
  responses: {
    204: { description: 'Channel catalog cost settings configured' },
    404: {
      description: 'Occurs when a user tries to work on the wrong ChanelCatalogId.',
      content: { 'application/json': { schema: BeezUPCommonErrorResponseMessageSchema } },
    },
    default: GeneralErrorResponse,
  },
})

export const putV2UserChannelCatalogsChannelCatalogIdSettingsGeneralRoute = createRoute({
  method: 'put',
  path: '/v2/user/channelCatalogs/{channelCatalogId}/settings/general',
  tags: ['Channel Catalogs - Settings'],
  summary: 'Configure channel catalog general settings',
  operationId: 'ConfigureChannelCatalogGeneralSettings',
  request: {
    params: z.object({ channelCatalogId: ChannelCatalogIdParameterParamsSchema }),
    body: { content: { 'application/json': { schema: GeneralSettingsSchema } }, required: true },
  },
  responses: {
    204: { description: 'Channel catalog general settings configured' },
    404: {
      description: 'Occurs when a user tries to work on the wrong ChanelCatalogId.',
      content: { 'application/json': { schema: BeezUPCommonErrorResponseMessageSchema } },
    },
    default: GeneralErrorResponse,
  },
})

export const getV2UserChannelsIndexRoute = createRoute({
  method: 'get',
  path: '/v2/user/channels/',
  tags: ['Channels - Channels Global'],
  summary: 'List all available channel for this store',
  operationId: 'GetAvailableChannels',
  request: {
    query: z.object({
      storeId: z
        .guid()
        .openapi({
          param: {
            description: 'The store identifier',
            example: '04730364-9826-4ff3-92e4-51fccd02bf10',
            in: 'query',
            name: 'storeId',
            required: true,
            schema: { format: 'guid', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Available channel list for this store',
      content: { 'application/json': { schema: z.array(ChannelHeaderSchema) } },
    },
  },
})

export const getV2UserChannelsChannelIdRoute = createRoute({
  method: 'get',
  path: '/v2/user/channels/{channelId}',
  tags: ['Channels - Channels Global'],
  summary: 'Get channel information',
  operationId: 'GetChannelInfo',
  request: { params: z.object({ channelId: ChannelIdParameterParamsSchema }) },
  responses: {
    200: {
      description: 'Channel information',
      content: { 'application/json': { schema: ChannelInfoSchema } },
    },
  },
})

export const getV2UserChannelsChannelIdCategoriesRoute = createRoute({
  method: 'get',
  path: '/v2/user/channels/{channelId}/categories',
  tags: ['Channels - Channels Global'],
  summary: 'Get channel categories',
  operationId: 'GetChannelCategories',
  request: {
    params: z.object({ channelId: ChannelIdParameterParamsSchema }),
    headers: z.object({
      'Accept-Encoding': z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',').map((part) => part.trim()) : [item],
                ),
          z.array(z.string()),
        )
        .openapi({
          param: {
            description:
              'Indicates that the client accepts that the response will be compressed to reduce traffic size.',
            in: 'header',
            name: 'Accept-Encoding',
            required: true,
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Channel categories',
      content: { 'application/json': { schema: ChannelRootCategorySchema } },
      headers: z.object({
        'Content-Encoding': {
          description: 'Indicates the compression use in the response',
          style: 'simple',
          schema: z
            .array(z.string())
            .exactOptional()
            .openapi({
              description: 'Indicates the compression use in the response',
              param: { required: false },
            }),
        },
      }),
    },
  },
})

export const postV2UserChannelsChannelIdColumnsRoute = createRoute({
  method: 'post',
  path: '/v2/user/channels/{channelId}/columns',
  tags: ['Channels - Channels Global'],
  summary: 'Get channel columns',
  operationId: 'GetChannelColumns',
  request: {
    params: z.object({ channelId: ChannelIdParameterParamsSchema }),
    headers: z.object({
      'Accept-Encoding': z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',').map((part) => part.trim()) : [item],
                ),
          z.array(z.string()),
        )
        .openapi({
          param: {
            description:
              'Indicates that the client accepts that the response will be compressed to reduce traffic size.',
            in: 'header',
            name: 'Accept-Encoding',
            required: true,
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'simple',
          },
        }),
    }),
    body: {
      description: 'Allow you to filter the channel column identifier list your want to get',
      content: { 'application/json': { schema: z.array(BeezUPCommonChannelColumnIdSchema) } },
    },
  },
  responses: {
    200: {
      description: 'Channel columns',
      content: { 'application/json': { schema: z.array(ChannelColumnSchema) } },
      headers: z.object({
        'Content-Encoding': {
          description: 'Indicates the compression use in the response',
          style: 'simple',
          schema: z
            .array(z.string())
            .exactOptional()
            .openapi({
              description: 'Indicates the compression use in the response',
              param: { required: false },
            }),
        },
      }),
    },
  },
})

export const getV2UserCustomerIndexRoute = createRoute({
  method: 'get',
  path: '/v2/user/customer/',
  tags: ['Customer - Global'],
  summary: 'The index of all operations and LOV',
  operationId: 'GetCustomerIndex',
  request: { headers: z.object({ 'If-None-Match': IfNoneMatchParameterParamsSchema }) },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: CustomerIndexSchema } } },
    304: _304NotModifiedResponse,
    default: GeneralErrorResponse,
  },
})

export const getV2UserCustomerAccountRoute = createRoute({
  method: 'get',
  path: '/v2/user/customer/account',
  tags: ['Customer - Account'],
  summary: 'Get user account information',
  operationId: 'GetUserAccountInfo',
  request: { headers: z.object({ 'If-None-Match': IfNoneMatchParameterParamsSchema }) },
  responses: {
    200: {
      description: 'User account information',
      content: { 'application/json': { schema: AccountInfoSchema } },
    },
    304: _304NotModifiedResponse,
    default: GeneralErrorResponse,
  },
})

export const postV2UserCustomerAccountActivateRoute = createRoute({
  method: 'post',
  path: '/v2/user/customer/account/activate',
  tags: ['Customer - Account'],
  summary: 'Activate the user account',
  operationId: 'ActivateUserAccount',
  request: {
    body: {
      description: 'The email activation id received by email.',
      content: { 'application/json': { schema: z.guid() } },
      required: true,
    },
  },
  responses: {
    204: { description: 'User account activated.' },
    403: {
      description: 'Invalid email activation id',
      content: { 'application/json': { schema: BeezUPCommonErrorResponseMessageSchema } },
    },
    409: {
      description: 'User account already activated.',
      content: { 'application/json': { schema: BeezUPCommonErrorResponseMessageSchema } },
    },
    default: GeneralErrorResponse,
  },
})

export const postV2UserCustomerAccountChangeEmailRoute = createRoute({
  method: 'post',
  path: '/v2/user/customer/account/changeEmail',
  tags: ['Customer - Account'],
  summary: 'Change user email',
  operationId: 'ChangeEmail',
  request: {
    body: { content: { 'application/json': { schema: ChangeEmailRequestSchema } }, required: true },
  },
  responses: {
    204: { description: 'Email updated' },
    400: {
      description: "New email does not respect the emails's constraints",
      content: { 'application/json': { schema: BeezUPCommonErrorResponseMessageSchema } },
    },
    default: GeneralErrorResponse,
  },
})

export const postV2UserCustomerAccountChangePasswordRoute = createRoute({
  method: 'post',
  path: '/v2/user/customer/account/changePassword',
  tags: ['Customer - Account'],
  summary: 'Change user password',
  operationId: 'ChangePassword',
  request: {
    body: {
      content: { 'application/json': { schema: ChangePasswordRequestSchema } },
      required: true,
    },
  },
  responses: {
    204: { description: 'Password updated' },
    400: {
      description:
        "Old password is invalid or the new password does not respect the password's constraints",
      content: { 'application/json': { schema: BeezUPCommonErrorResponseMessageSchema } },
    },
    default: GeneralErrorResponse,
  },
})

export const putV2UserCustomerAccountCompanyInfoRoute = createRoute({
  method: 'put',
  path: '/v2/user/customer/account/companyInfo',
  tags: ['Customer - Account'],
  summary: 'Change company information',
  operationId: 'SaveCompanyInfo',
  request: {
    body: { content: { 'application/json': { schema: CompanyInfoSchema } }, required: true },
  },
  responses: {
    204: { description: 'Company information saved' },
    400: {
      description: 'Bad request or invalid VATNumber.',
      content: { 'application/json': { schema: BeezUPCommonErrorResponseMessageSchema } },
    },
    403: {
      description: 'User not found or unauthorized',
      content: { 'application/json': { schema: BeezUPCommonErrorResponseMessageSchema } },
    },
    default: GeneralErrorResponse,
  },
})

export const getV2UserCustomerAccountCreditCardInfoRoute = createRoute({
  method: 'get',
  path: '/v2/user/customer/account/creditCardInfo',
  tags: ['Customer - Account'],
  summary: 'Get credit card information',
  operationId: 'GetCreditCardInfo',
  request: { headers: z.object({ 'If-None-Match': IfNoneMatchParameterParamsSchema }) },
  responses: {
    200: {
      description: 'User credit card information',
      content: { 'application/json': { schema: CreditCardInfoResponseSchema } },
    },
    304: _304NotModifiedResponse,
    404: {
      description: 'Credit Card not found',
      content: { 'application/json': { schema: BeezUPCommonErrorResponseMessageSchema } },
    },
    503: {
      description:
        'We are unable to get your credit card info. This is a temporary state. Please retry later',
      content: { 'application/json': { schema: BeezUPCommonErrorResponseMessageSchema } },
    },
    default: GeneralErrorResponse,
  },
})

export const putV2UserCustomerAccountCreditCardInfoRoute = createRoute({
  method: 'put',
  path: '/v2/user/customer/account/creditCardInfo',
  tags: ['Customer - Account'],
  summary: 'Save user credit card info',
  operationId: 'SaveCreditCardInfo',
  request: {
    body: {
      description: 'Credit card info',
      content: { 'application/json': { schema: CreditCardInfoSchema } },
      required: true,
    },
  },
  responses: {
    202: {
      description:
        'The credit card information has been accepted for processing, the authorization will be processed shortly.',
    },
    400: {
      description: 'BadRequest',
      content: { 'application/json': { schema: BeezUPCommonErrorResponseMessageSchema } },
    },
    502: {
      description: 'Communication problem with our payment service',
      content: { 'application/json': { schema: BeezUPCommonErrorResponseMessageSchema } },
    },
    default: GeneralErrorResponse,
  },
})

export const putV2UserCustomerAccountPersonalInfoRoute = createRoute({
  method: 'put',
  path: '/v2/user/customer/account/personalInfo',
  tags: ['Customer - Account'],
  summary: 'Save user personal information',
  operationId: 'SavePersonalInfo',
  request: {
    body: { content: { 'application/json': { schema: PersonalInfoSchema } }, required: true },
  },
  responses: {
    204: { description: 'User account information updated' },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: BeezUPCommonErrorResponseMessageSchema } },
    },
    default: GeneralErrorResponse,
  },
})

export const getV2UserCustomerAccountProfilePictureInfoRoute = createRoute({
  method: 'get',
  path: '/v2/user/customer/account/profilePictureInfo',
  tags: ['Customer - Account'],
  summary: 'Get profile picture information',
  operationId: 'GetProfilePictureInfo',
  request: { headers: z.object({ 'If-None-Match': IfNoneMatchParameterParamsSchema }) },
  responses: {
    200: {
      description: 'Profile picture information',
      content: { 'application/json': { schema: ProfilePictureInfoResponseSchema } },
    },
    304: _304NotModifiedResponse,
    default: GeneralErrorResponse,
  },
})

export const putV2UserCustomerAccountProfilePictureInfoRoute = createRoute({
  method: 'put',
  path: '/v2/user/customer/account/profilePictureInfo',
  tags: ['Customer - Account'],
  summary: 'Change user picture information',
  operationId: 'SaveProfilePictureInfo',
  request: {
    body: { content: { 'application/json': { schema: ProfilePictureInfoSchema } }, required: true },
  },
  responses: {
    204: { description: 'User profile picture information saved.' },
    400: {
      description: 'BadRequest (Url invalid)',
      content: { 'application/json': { schema: BeezUPCommonErrorResponseMessageSchema } },
    },
    413: {
      description: 'The picture size is too large',
      content: { 'application/json': { schema: BeezUPCommonErrorResponseMessageSchema } },
    },
    415: {
      description: 'The content type of the image must be an image',
      content: { 'application/json': { schema: BeezUPCommonErrorResponseMessageSchema } },
    },
    default: GeneralErrorResponse,
  },
})

export const postV2UserCustomerAccountResendEmailActivationRoute = createRoute({
  method: 'post',
  path: '/v2/user/customer/account/resendEmailActivation',
  tags: ['Customer - Account'],
  summary: 'Resend email activation',
  operationId: 'ResendEmailActivation',
  responses: {
    204: { description: 'Email activation resent' },
    400: {
      description:
        'Email activation not sent because of email problem. Ensure that your email is the correct one.',
      content: { 'application/json': { schema: BeezUPCommonErrorResponseMessageSchema } },
    },
    409: {
      description: 'Email activation not available because user account already activated.',
      content: { 'application/json': { schema: BeezUPCommonErrorResponseMessageSchema } },
    },
    429: {
      description: 'Email activation sent recently, must retry later. (One per hour)',
      content: { 'application/json': { schema: BeezUPCommonErrorResponseMessageSchema } },
      headers: z.object({
        'Retry-After': {
          description: 'The duration in second to wait before making another request',
          schema: z
            .int()
            .default(60)
            .exactOptional()
            .openapi({
              description: 'The duration in second to wait before making another request',
              param: { required: false },
            }),
        },
      }),
    },
    502: {
      description:
        'Email activate send failed because of our email service. Ensure that your email is the correct one otherwise please contact our support if the problem persists.',
      content: { 'application/json': { schema: BeezUPCommonErrorResponseMessageSchema } },
    },
    default: GeneralErrorResponse,
  },
})

export const getV2UserCustomerBillingPeriodsRoute = createRoute({
  method: 'get',
  path: '/v2/user/customer/billingPeriods',
  tags: ['Customer - Contracts'],
  summary: 'Get billing periods conditions',
  operationId: 'GetBillingPeriods',
  request: { headers: z.object({ 'If-None-Match': IfNoneMatchParameterParamsSchema }) },
  responses: {
    200: {
      description: 'Get the billing periods conditions',
      content: { 'application/json': { schema: BillingPeriodListSchema } },
    },
    304: _304NotModifiedResponse,
    default: GeneralErrorResponse,
  },
})

export const getV2UserCustomerContractsRoute = createRoute({
  method: 'get',
  path: '/v2/user/customer/contracts',
  tags: ['Customer - Contracts'],
  summary: 'Get contract list',
  operationId: 'GetContracts',
  request: { headers: z.object({ 'If-None-Match': IfNoneMatchParameterParamsSchema }) },
  responses: {
    200: {
      description: 'Contract list',
      content: { 'application/json': { schema: ContractsSchema } },
    },
    304: _304NotModifiedResponse,
    default: GeneralErrorResponse,
  },
})

export const postV2UserCustomerContractsRoute = createRoute({
  method: 'post',
  path: '/v2/user/customer/contracts',
  tags: ['Customer - Contracts'],
  summary: 'Create a new contract',
  description:
    'Now you are ready to create your contract. Before that, please ensure that you check the offer with the same request parameterts. /offers\n',
  operationId: 'CreateContract',
  request: {
    body: { content: { 'application/json': { schema: CreateContractSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'New contract has been created. Some warnings can be present in response.',
      content: { 'application/json': { schema: CreateContractResponseSchema } },
    },
    400: {
      description: 'Bad request. (Invalid billing period, invalid offer, etc.)',
      content: { 'application/json': { schema: BeezUPCommonErrorResponseMessageSchema } },
    },
    403: {
      description: 'The contract is not modifiable or the coupon offer has been already used',
      content: { 'application/json': { schema: BeezUPCommonErrorResponseMessageSchema } },
    },
    default: GeneralErrorResponse,
  },
})

export const postV2UserCustomerContractsCurrentDisableAutoRenewalRoute = createRoute({
  method: 'post',
  path: '/v2/user/customer/contracts/current/disableAutoRenewal',
  tags: ['Customer - Contracts'],
  summary: 'Schedule termination of your current contract at the end of the commitment.',
  description:
    'By default your contract are automatically renew. By calling this operation you can disable the auto renewal.',
  operationId: 'TerminateCurrentContract',
  request: {
    body: {
      description: 'Indicate the termination reason',
      content: { 'application/json': { schema: TerminateContractSchema } },
      required: true,
    },
  },
  responses: {
    204: { description: 'Your current contract termination has been scheduled' },
    400: {
      description: 'Invalid reason type',
      content: { 'application/json': { schema: BeezUPCommonErrorResponseMessageSchema } },
    },
    404: {
      description: 'No current contract',
      content: { 'application/json': { schema: BeezUPCommonErrorResponseMessageSchema } },
    },
    default: GeneralErrorResponse,
  },
})

export const postV2UserCustomerContractsCurrentReenableAutoRenewalRoute = createRoute({
  method: 'post',
  path: '/v2/user/customer/contracts/current/reenableAutoRenewal',
  tags: ['Customer - Contracts'],
  summary: 'Reactivate your terminated contract.',
  description: 'By calling this operation you can re-enable the auto renewal.',
  operationId: 'ReactivateCurrentContract',
  responses: {
    204: { description: 'Your current contract has been resumed' },
    404: {
      description: 'No current contract',
      content: { 'application/json': { schema: BeezUPCommonErrorResponseMessageSchema } },
    },
    default: GeneralErrorResponse,
  },
})

export const deleteV2UserCustomerContractsNextRoute = createRoute({
  method: 'delete',
  path: '/v2/user/customer/contracts/next',
  tags: ['Customer - Contracts'],
  summary: 'Delete your next contract',
  operationId: 'DeleteNextContract',
  responses: {
    204: { description: 'Next contract has been deleted' },
    default: GeneralErrorResponse,
  },
})

export const getV2UserCustomerFriendsUserIdRoute = createRoute({
  method: 'get',
  path: '/v2/user/customer/friends/{userId}',
  tags: ['Customer - Friends'],
  summary: 'Get friend information',
  operationId: 'GetFriendInfo',
  request: {
    params: z.object({
      userId: z
        .guid()
        .openapi({
          param: {
            description: 'Your friend user id',
            in: 'path',
            name: 'userId',
            required: true,
            schema: { format: 'guid', type: 'string' },
          },
        }),
    }),
    headers: z.object({ 'If-None-Match': IfNoneMatchParameterParamsSchema }),
  },
  responses: {
    200: {
      description: 'Get friend info',
      content: { 'application/json': { schema: UserFriendInfoSchema } },
    },
    304: _304NotModifiedResponse,
    404: {
      description: 'User not found',
      content: { 'application/json': { schema: BeezUPCommonErrorResponseMessageSchema } },
    },
    default: GeneralErrorResponse,
  },
})

export const getV2UserCustomerInvoicesRoute = createRoute({
  method: 'get',
  path: '/v2/user/customer/invoices',
  tags: ['Customer - Invoices'],
  summary: 'Get all your invoices',
  operationId: 'GetInvoices',
  request: { headers: z.object({ 'If-None-Match': IfNoneMatchParameterParamsSchema }) },
  responses: {
    200: {
      description: 'Get all invoices of a customer',
      content: { 'application/json': { schema: InvoiceListSchema } },
    },
    304: _304NotModifiedResponse,
    default: GeneralErrorResponse,
  },
})

export const getV2UserCustomerOffersRoute = createRoute({
  method: 'get',
  path: '/v2/user/customer/offers',
  tags: ['Customer - Contracts'],
  summary: 'Get all standard offers',
  operationId: 'GetStandardOffers',
  request: { headers: z.object({ 'If-None-Match': IfNoneMatchParameterParamsSchema }) },
  responses: {
    200: {
      description: 'Get all standard offers',
      content: { 'application/json': { schema: StandardOffersSchema } },
    },
    304: _304NotModifiedResponse,
    default: GeneralErrorResponse,
  },
})

export const postV2UserCustomerOffersRoute = createRoute({
  method: 'post',
  path: '/v2/user/customer/offers',
  tags: ['Customer - Contracts'],
  summary: 'Get offer pricing',
  description:
    'Get the offer pricing then you can create your contract with the same request parameters. /v2/user/customer/contracts\n',
  operationId: 'GetOffer',
  request: {
    body: { content: { 'application/json': { schema: OfferRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Get the offer proposal considering your current contract',
      content: { 'application/json': { schema: OfferSchema } },
    },
    400: {
      description:
        'Bad request. (Invalid billing period, invalid offer, etc.). You cannot get a pricing for a free offer.',
      content: { 'application/json': { schema: BeezUPCommonErrorResponseMessageSchema } },
    },
    403: {
      description: 'You current contract is not modifiable. Please choose another offer.',
      content: { 'application/json': { schema: BeezUPCommonErrorResponseMessageSchema } },
    },
    default: GeneralErrorResponse,
  },
})

export const postV2UserCustomerSecurityLogoutRoute = createRoute({
  method: 'post',
  path: '/v2/user/customer/security/logout',
  tags: ['Customer - Security'],
  summary: 'Log out the current user from go2',
  description: 'Log out the current user from go2',
  operationId: 'Logout',
  responses: { 204: { description: 'User logout' }, default: GeneralErrorResponse },
})

export const getV2UserCustomerStoresRoute = createRoute({
  method: 'get',
  path: '/v2/user/customer/stores',
  tags: ['Customer - Stores'],
  summary: 'Get store list',
  operationId: 'GetStores',
  request: { headers: z.object({ 'If-None-Match': IfNoneMatchParameterParamsSchema }) },
  responses: {
    200: {
      description: 'Store list',
      content: { 'application/json': { schema: StoreListSchema } },
    },
    304: _304NotModifiedResponse,
    default: GeneralErrorResponse,
  },
})

export const postV2UserCustomerStoresRoute = createRoute({
  method: 'post',
  path: '/v2/user/customer/stores',
  tags: ['Customer - Stores'],
  summary: 'Create a new store',
  operationId: 'CreateStore',
  request: {
    body: { content: { 'application/json': { schema: CreateStoreRequestSchema } }, required: true },
  },
  responses: {
    201: {
      description:
        'The store has been created successfully. The http header Location contains the new resource url. The body contains the link to the new resource.',
      content: { 'application/json': { schema: LinksGetStoreLinkSchema } },
    },
    402: {
      description: 'The maximum amount of store has been reached. Please upgrade your contract.',
      content: { 'application/json': { schema: ErrorResponseMessagePaymentRequiredSchema } },
    },
    409: {
      description: 'The customer has a store with the same name',
      content: { 'application/json': { schema: BeezUPCommonErrorResponseMessageSchema } },
    },
    default: GeneralErrorResponse,
  },
})

export const getV2UserCustomerStoresStoreIdRoute = createRoute({
  method: 'get',
  path: '/v2/user/customer/stores/{storeId}',
  tags: ['Customer - Stores'],
  summary: "Get store's information",
  operationId: 'GetStore',
  request: {
    params: z.object({ storeId: StoreIdOnlyGeneralParametersParamsSchema }),
    headers: z.object({ 'If-None-Match': IfNoneMatchParameterParamsSchema }),
  },
  responses: {
    200: {
      description: 'The store information',
      content: { 'application/json': { schema: StoreSchema } },
    },
    304: _304NotModifiedResponse,
    404: {
      description: 'Store not found or not authorized',
      content: { 'application/json': { schema: BeezUPCommonErrorResponseMessageSchema } },
    },
    default: GeneralErrorResponse,
  },
})

export const deleteV2UserCustomerStoresStoreIdRoute = createRoute({
  method: 'delete',
  path: '/v2/user/customer/stores/{storeId}',
  tags: ['Customer - Stores'],
  summary: 'Delete a store',
  operationId: 'DeleteStore',
  request: { params: z.object({ storeId: StoreIdOnlyGeneralParametersParamsSchema }) },
  responses: {
    204: { description: 'Store deleted' },
    404: {
      description: 'Store not found or customer not the owner',
      content: { 'application/json': { schema: BeezUPCommonErrorResponseMessageSchema } },
    },
    default: GeneralErrorResponse,
  },
})

export const patchV2UserCustomerStoresStoreIdRoute = createRoute({
  method: 'patch',
  path: '/v2/user/customer/stores/{storeId}',
  tags: ['Customer - Stores'],
  summary: "Update some store's information.",
  description: "Update some store's information. FYI, you cannot change the country.\n",
  operationId: 'UpdateStore',
  request: {
    params: z.object({ storeId: StoreIdOnlyGeneralParametersParamsSchema }),
    body: { content: { 'application/json': { schema: UpdateStoreRequestSchema } }, required: true },
  },
  responses: {
    204: { description: 'Store updated' },
    404: {
      description: 'Store not found or customer not the owner',
      content: { 'application/json': { schema: BeezUPCommonErrorResponseMessageSchema } },
    },
    409: {
      description: 'The store name already used',
      content: { 'application/json': { schema: BeezUPCommonErrorResponseMessageSchema } },
    },
    default: GeneralErrorResponse,
  },
})

export const getV2UserCustomerStoresStoreIdAlertsRoute = createRoute({
  method: 'get',
  path: '/v2/user/customer/stores/{storeId}/alerts',
  tags: ['Customer - Alerts'],
  summary: "Get store's alerts",
  operationId: 'GetStoreAlerts',
  request: {
    params: z.object({ storeId: StoreIdOnlyGeneralParametersParamsSchema }),
    headers: z.object({ 'If-None-Match': IfNoneMatchParameterParamsSchema }),
  },
  responses: {
    200: {
      description: 'User account alerts information',
      content: { 'application/json': { schema: StoreAlertsSchema } },
    },
    304: _304NotModifiedResponse,
    404: {
      description: 'Store not found or not authorized',
      content: { 'application/json': { schema: BeezUPCommonErrorResponseMessageSchema } },
    },
    default: GeneralErrorResponse,
  },
})

export const postV2UserCustomerStoresStoreIdAlertsRoute = createRoute({
  method: 'post',
  path: '/v2/user/customer/stores/{storeId}/alerts',
  tags: ['Customer - Alerts'],
  summary: 'Save store alerts',
  description:
    'You just have to send the alert you want to update, does not need all alerts. (PARTIAL UPDATE ACCEPTED)',
  operationId: 'SaveStoreAlerts',
  request: {
    params: z.object({ storeId: StoreIdOnlyGeneralParametersParamsSchema }),
    body: {
      content: { 'application/json': { schema: SaveStoreAlertsRequestSchema } },
      required: true,
    },
  },
  responses: {
    204: { description: 'Store alerts saved' },
    400: {
      description: 'BadRequest',
      content: { 'application/json': { schema: BeezUPCommonErrorResponseMessageSchema } },
    },
    404: {
      description: 'Store not found or not authorized',
      content: { 'application/json': { schema: BeezUPCommonErrorResponseMessageSchema } },
    },
    default: GeneralErrorResponse,
  },
})

export const getV2UserCustomerStoresStoreIdRightsRoute = createRoute({
  method: 'get',
  path: '/v2/user/customer/stores/{storeId}/rights',
  tags: ['Customer - Rights'],
  summary: "Get store's rights",
  operationId: 'GetRights',
  request: { params: z.object({ storeId: StoreIdOnlyGeneralParametersParamsSchema }) },
  responses: {
    200: {
      description: "The store's rights",
      content: { 'application/json': { schema: z.array(FunctionalityRightInfoSchema) } },
    },
    404: {
      description: 'Store not found or not authorized',
      content: { 'application/json': { schema: BeezUPCommonErrorResponseMessageSchema } },
    },
    default: GeneralErrorResponse,
  },
})

export const getV2UserCustomerStoresStoreIdSharesRoute = createRoute({
  method: 'get',
  path: '/v2/user/customer/stores/{storeId}/shares',
  tags: ['Customer - Shares'],
  summary: 'Get shares related to this store',
  operationId: 'GetStoreShares',
  request: {
    params: z.object({ storeId: StoreIdOnlyGeneralParametersParamsSchema }),
    headers: z.object({ 'If-None-Match': IfNoneMatchParameterParamsSchema }),
  },
  responses: {
    200: {
      description: 'The sharing list of the store',
      content: { 'application/json': { schema: StoreSharesSchema } },
    },
    304: _304NotModifiedResponse,
    404: {
      description: 'Store not found or customer not the owner',
      content: { 'application/json': { schema: BeezUPCommonErrorResponseMessageSchema } },
    },
    default: GeneralErrorResponse,
  },
})

export const postV2UserCustomerStoresStoreIdSharesRoute = createRoute({
  method: 'post',
  path: '/v2/user/customer/stores/{storeId}/shares',
  tags: ['Customer - Shares'],
  summary: 'Share a store to another user',
  operationId: 'ShareStore',
  request: {
    params: z.object({ storeId: StoreIdOnlyGeneralParametersParamsSchema }),
    body: {
      description: "Your friend's email",
      content: { 'application/json': { schema: FriendEmailSchema } },
      required: true,
    },
  },
  responses: {
    204: { description: 'Store shared' },
    402: {
      description: 'Free offer is not allowed to share store.',
      content: { 'application/json': { schema: ErrorResponseMessagePaymentRequiredSchema } },
    },
    404: {
      description: 'Only the owner of the store can make this operation or user not found',
      content: { 'application/json': { schema: BeezUPCommonErrorResponseMessageSchema } },
    },
    default: GeneralErrorResponse,
  },
})

export const deleteV2UserCustomerStoresStoreIdSharesUserIdRoute = createRoute({
  method: 'delete',
  path: '/v2/user/customer/stores/{storeId}/shares/{userId}',
  tags: ['Customer - Shares'],
  summary: 'Delete a share of a store to another user',
  operationId: 'DeleteStoreShare',
  request: {
    params: z.object({
      storeId: StoreIdOnlyGeneralParametersParamsSchema,
      userId: z
        .guid()
        .openapi({
          param: {
            description: 'The friend user id',
            in: 'path',
            name: 'userId',
            required: true,
            schema: { format: 'guid', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Share deleted' },
    404: {
      description: 'Store not found or customer not the owner',
      content: { 'application/json': { schema: BeezUPCommonErrorResponseMessageSchema } },
    },
    default: GeneralErrorResponse,
  },
})

export const getV2UserCustomerZendeskTokenRoute = createRoute({
  method: 'get',
  path: '/v2/user/customer/zendeskToken',
  tags: ['Customer - Security'],
  summary: 'Zendesk token',
  description:
    'Zendesk token - Generates a JWT token to access BeezUP restricted Help Center in SSO as described here: https://support.zendesk.com/hc/en-us/articles/222874768-Using-restricted-Help-Center-content-with-the-Web-Widget',
  operationId: 'ZendeskToken',
  responses: {
    200: {
      description: 'A JWT token to connect the Zendesk Web Widget',
      content: { 'application/json': { schema: ZendeskTokenSchema } },
    },
    500: GeneralErrorResponse,
  },
})

export const getV2UserLegacyTrackingChannelCatalogsIndexRoute = createRoute({
  method: 'get',
  path: '/v2/user/legacyTracking/channelCatalogs/',
  tags: ['Channel Catalogs - Legacy Tracking - Global'],
  summary: 'List all your current channel catalogs configured to use legacy tracking format',
  operationId: 'GetLegacyTrackingChannelCatalogs',
  request: {
    query: z.object({
      storeId: z
        .guid()
        .exactOptional()
        .openapi({
          param: {
            description: 'The store identifier',
            example: '04730364-9826-4ff3-92e4-51fccd02bf10',
            in: 'query',
            name: 'storeId',
            required: false,
            schema: { format: 'guid', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: LegacyTrackingChannelCatalogListSchema } },
    },
    default: GeneralErrorResponse,
  },
})

export const getV2UserLegacyTrackingChannelCatalogsChannelCatalogIdRoute = createRoute({
  method: 'get',
  path: '/v2/user/legacyTracking/channelCatalogs/{channelCatalogId}',
  tags: ['Channel Catalogs - Legacy Tracking - Global'],
  summary: 'Get the channel catalog configured to use legacy tracking format information',
  operationId: 'GetLegacyTrackingChannelCatalog',
  request: { params: z.object({ channelCatalogId: ChannelCatalogIdParameterParamsSchema }) },
  responses: {
    200: {
      description: 'Channel catalog configured to use legacy tracking format',
      content: { 'application/json': { schema: LegacyTrackingChannelCatalogSchema } },
    },
    404: {
      description: 'Channel catalog not found or not authorized',
      content: { 'application/json': { schema: BeezUPCommonErrorResponseMessageSchema } },
    },
    default: GeneralErrorResponse,
  },
})

export const postV2UserLegacyTrackingChannelCatalogsChannelCatalogIdMigrateRoute = createRoute({
  method: 'post',
  path: '/v2/user/legacyTracking/channelCatalogs/{channelCatalogId}/migrate',
  tags: ['Channel Catalogs - Legacy Tracking - Global'],
  summary: 'Migrate a channel catalog to current tracking format',
  operationId: 'MigrateLegacyTrackingChannelCatalog',
  request: { params: z.object({ channelCatalogId: ChannelCatalogIdParameterParamsSchema }) },
  responses: {
    204: { description: 'Channel catalog migrated' },
    404: {
      description: 'Channel catalog not found or not authorized',
      content: { 'application/json': { schema: BeezUPCommonErrorResponseMessageSchema } },
    },
    default: GeneralErrorResponse,
  },
})

export const getV2UserLovIndexRoute = createRoute({
  method: 'get',
  path: '/v2/user/lov/',
  tags: ['User - List of Values - LOV'],
  summary: 'Get all list names',
  operationId: 'GetUserLovIndex',
  responses: {
    200: {
      description: 'Get the list names',
      content: { 'application/json': { schema: UserLovIndexSchema } },
      headers: z.object({
        'Cache-Control': {
          description:
            'Indicates the directive around the caching mechanisms.\\\nFor more information, please go to this link: https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.9\n',
          style: 'simple',
          schema: z
            .array(z.string())
            .exactOptional()
            .openapi({
              description:
                'Indicates the directive around the caching mechanisms.\\\nFor more information, please go to this link: https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.9\n',
              param: { required: false },
            }),
        },
        ETag: {
          description: 'The ETag corresponding to the LOV Index',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'The ETag corresponding to the LOV Index',
              param: { required: false },
            }),
        },
      }),
    },
    304: {
      description:
        'The ETag sent in the http header If-None-Match did not change. So you can keep your version.',
      headers: z.object({
        'Cache-Control': {
          description:
            'Indicates the directive around the caching mechanisms.\\\nFor more information, please go to this link: https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.9\n',
          style: 'simple',
          schema: z
            .array(z.string())
            .exactOptional()
            .openapi({
              description:
                'Indicates the directive around the caching mechanisms.\\\nFor more information, please go to this link: https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.9\n',
              param: { required: false },
            }),
        },
        ETag: {
          description: 'The ETag corresponding to the LOV Index',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'The ETag corresponding to the LOV Index',
              param: { required: false },
            }),
        },
      }),
    },
    default: GeneralErrorResponse,
  },
})

export const getV2UserLovListNameRoute = createRoute({
  method: 'get',
  path: '/v2/user/lov/{listName}',
  tags: ['User - List of Values - LOV'],
  summary: 'Get the list of values related to this list name',
  operationId: 'GetUserListOfValues',
  request: {
    params: z.object({
      listName: z
        .string()
        .openapi({
          param: {
            description: 'The list of value name your want to get',
            in: 'path',
            name: 'listName',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    headers: z.object({
      'Accept-Language': AcceptLanguageParameterParamsSchema,
      'If-None-Match': IfNoneMatchParameterParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'The list of values',
      content: { 'application/json': { schema: UserListOfValuesResponseSchema } },
      headers: z.object({
        'Cache-Control': {
          description:
            'Indicates the directive around the caching mechanisms.\\\nFor more information, please go to this link: https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.9\n',
          style: 'simple',
          schema: z
            .array(z.string())
            .exactOptional()
            .openapi({
              description:
                'Indicates the directive around the caching mechanisms.\\\nFor more information, please go to this link: https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.9\n',
              param: { required: false },
            }),
        },
        'Content-Language': {
          description: 'Indicates the language use in the response',
          style: 'simple',
          schema: z
            .array(z.string())
            .exactOptional()
            .openapi({
              description: 'Indicates the language use in the response',
              param: { required: false },
            }),
        },
        ETag: {
          description: 'The ETag corresponding to the LOV Index',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'The ETag corresponding to the LOV Index',
              param: { required: false },
            }),
        },
      }),
    },
    304: {
      description:
        'The ETag sent in the http header If-None-Match did not change. So you can keep your version.',
      headers: z.object({
        'Cache-Control': {
          description:
            'Indicates the directive around the caching mechanisms.\\\nFor more information, please go to this link: https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.9\n',
          style: 'simple',
          schema: z
            .array(z.string())
            .exactOptional()
            .openapi({
              description:
                'Indicates the directive around the caching mechanisms.\\\nFor more information, please go to this link: https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.9\n',
              param: { required: false },
            }),
        },
        ETag: {
          description: 'The ETag corresponding to the LOV Index',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'The ETag corresponding to the LOV Index',
              param: { required: false },
            }),
        },
      }),
    },
    404: {
      description: 'List not found',
      content: { 'application/json': { schema: BeezUPCommonErrorResponseMessageSchema } },
    },
    default: GeneralErrorResponse,
  },
})

export const getV2UserMarketplacesChannelcatalogsIndexRoute = createRoute({
  method: 'get',
  path: '/v2/user/marketplaces/channelcatalogs/',
  tags: ['Marketplaces - Channel catalogs - Global'],
  summary: 'Get your marketplace channel catalog list',
  operationId: 'GetMarketplaceChannelCatalogs',
  request: {
    query: z.object({
      storeId: z
        .guid()
        .exactOptional()
        .openapi({
          param: {
            description: 'The StoreId to filter by',
            example: '04730364-9826-4ff3-92e4-51fccd02bf10',
            in: 'query',
            name: 'storeId',
            required: false,
            schema: { format: 'guid', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Marketplace channel catalog list',
      content: { 'application/json': { schema: MarketplaceChannelCatalogListSchema } },
    },
    404: { description: 'Store not found' },
  },
})

export const getV2UserMarketplacesChannelcatalogsPublicationsMarketplaceTechnicalCodeAccountIdHistoryRoute =
  createRoute({
    method: 'get',
    path: '/v2/user/marketplaces/channelcatalogs/publications/{marketplaceTechnicalCode}/{accountId}/history',
    tags: ['Marketplaces - Channel catalogs - Publications'],
    summary: 'Fetch the publication history for an account, sorted by descending start date',
    operationId: 'GetPublications',
    request: {
      params: z.object({
        marketplaceTechnicalCode: z
          .string()
          .openapi({
            param: {
              description: 'Marketplace Technical Code to query (required)',
              in: 'path',
              name: 'marketplaceTechnicalCode',
              required: true,
              schema: { type: 'string' },
              'x-lov': 'MarketplaceTechnicalCode',
            },
          }),
        accountId: z
          .preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.int32(),
          )
          .openapi({
            param: {
              description: 'Account Id to query (required)',
              in: 'path',
              name: 'accountId',
              required: true,
              schema: { format: 'int32', type: 'integer' },
            },
          }),
      }),
      query: z.object({
        channelCatalogId: z
          .guid()
          .exactOptional()
          .openapi({
            param: {
              description: 'Channel Catalog Id by which to filter (optional)',
              in: 'query',
              name: 'channelCatalogId',
              required: false,
              schema: { format: 'guid', type: 'string' },
            },
          }),
        count: z
          .preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.int32().min(10).max(100),
          )
          .default(10)
          .exactOptional()
          .openapi({
            param: {
              description: 'Amount of entries to fetch (optional, default set to 10)',
              in: 'query',
              name: 'count',
              required: false,
              schema: {
                default: '10',
                format: 'int32',
                maximum: 100,
                minimum: 10,
                type: 'integer',
              },
            },
          }),
        publicationTypes: z
          .preprocess(
            (val) =>
              val === undefined
                ? val
                : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                    typeof item === 'string' ? item.split(',') : [item],
                  ),
            z.array(
              z.enum([
                'PublishProducts',
                'PublishOffers',
                'Unpublish',
                'PublishRelationshipsEnum',
                'PublishProductImagesEnum',
                'PublishInventoryEnum',
                'PublishPricingEnum',
              ]),
            ),
          )
          .openapi({
            param: {
              description: 'Publication types by which to filter (optional)',
              explode: false,
              in: 'query',
              name: 'publicationTypes',
              required: true,
              schema: {
                items: {
                  enum: [
                    'PublishProducts',
                    'PublishOffers',
                    'Unpublish',
                    'PublishRelationshipsEnum',
                    'PublishProductImagesEnum',
                    'PublishInventoryEnum',
                    'PublishPricingEnum',
                  ],
                  format: 'publicationType',
                  type: 'string',
                },
                type: 'array',
              },
              style: 'form',
              'x-lov': 'MarketplacePublicationType',
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'Successfully fetched channel catalog settings',
        content: { 'application/json': { schema: AccountPublicationsSchema } },
      },
      400: {
        description: 'Feature only available for Amazon, Ebay, CDiscount and Mirakl marketplaces',
      },
      404: {
        description: 'Requested account, marketplace or authorization for current user not found',
      },
      503: ProcessingResponseResponse,
      default: GeneralErrorResponse,
    },
  })

export const postV2UserMarketplacesChannelcatalogsPublicationsMarketplaceTechnicalCodeAccountIdPublishRoute =
  createRoute({
    method: 'post',
    path: '/v2/user/marketplaces/channelcatalogs/publications/{marketplaceTechnicalCode}/{accountId}/publish',
    tags: ['Marketplaces - Channel catalogs - Publications'],
    summary: '[PREVIEW] Launch a publication of the catalog to the marketplace',
    operationId: 'PublishCatalogToMarketplace',
    request: {
      params: z.object({
        marketplaceTechnicalCode: z
          .string()
          .openapi({
            param: {
              description: 'Marketplace Technical Code to query (required)',
              in: 'path',
              name: 'marketplaceTechnicalCode',
              required: true,
              schema: { type: 'string' },
              'x-lov': 'MarketplaceTechnicalCode',
            },
          }),
        accountId: z
          .preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.int32(),
          )
          .openapi({
            param: {
              description: 'Account Id to query (required)',
              in: 'path',
              name: 'accountId',
              required: true,
              schema: { format: 'int32', type: 'integer' },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: PublishCatalogToMarketplaceRequestSchema } },
        required: true,
      },
    },
    responses: {
      202: { description: 'Publication request accepted' },
      400: {
        description:
          'One or more channel catalog marketplace property keys or values are invalid for requested marketplace channel catalog. See response for details.',
        content: { 'application/json': { schema: BeezUPCommonErrorResponseMessageSchema } },
      },
      404: {
        description: 'Requested account, marketplace or authorization for current user not found',
      },
      503: ProcessingResponseResponse,
      default: GeneralErrorResponse,
    },
  })

export const getV2UserMarketplacesChannelcatalogsChannelCatalogIdPropertiesRoute = createRoute({
  method: 'get',
  path: '/v2/user/marketplaces/channelcatalogs/{channelCatalogId}/properties',
  tags: ['Marketplaces - Channel catalogs - Settings'],
  summary: 'Get the marketplace properties for a channel catalog',
  operationId: 'GetChannelCatalogMarketplaceProperties',
  request: {
    params: z.object({
      channelCatalogId: z
        .guid()
        .openapi({
          param: {
            in: 'path',
            name: 'channelCatalogId',
            required: true,
            schema: { format: 'guid', type: 'string' },
          },
        }),
    }),
    query: z.object({
      redirectionPageUrl: z
        .url()
        .openapi({
          param: {
            in: 'query',
            name: 'redirectionPageUrl',
            required: true,
            schema: { format: 'uri', type: 'string' },
          },
        }),
    }),
    headers: z.object({ 'Accept-Language': AcceptLanguageParameterParamsSchema }),
  },
  responses: {
    200: {
      description: 'Successfully fetched channel catalog properties',
      content: { 'application/json': { schema: ChannelCatalogMarketplacePropertiesSchema } },
    },
    404: { description: 'Marketplace channel Catalog not found' },
    503: ProcessingResponseResponse,
    default: GeneralErrorResponse,
  },
})

export const getV2UserMarketplacesChannelcatalogsChannelCatalogIdSettingsRoute = createRoute({
  method: 'get',
  path: '/v2/user/marketplaces/channelcatalogs/{channelCatalogId}/settings',
  tags: ['Marketplaces - Channel catalogs - Settings'],
  summary: 'Get the marketplace settings for a channel catalog',
  operationId: 'GetChannelCatalogMarketplaceSettings',
  request: {
    params: z.object({
      channelCatalogId: z
        .guid()
        .openapi({
          param: {
            description: 'Channel Catalog Id to query (required)',
            in: 'path',
            name: 'channelCatalogId',
            required: true,
            schema: { format: 'guid', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successfully fetched channel catalog settings',
      content: { 'application/json': { schema: ChannelCatalogMarketplaceSettingsSchema } },
    },
    404: { description: 'Marketplace channel catalog not found' },
    503: ProcessingResponseResponse,
    default: GeneralErrorResponse,
  },
})

export const postV2UserMarketplacesChannelcatalogsChannelCatalogIdSettingsRoute = createRoute({
  method: 'post',
  path: '/v2/user/marketplaces/channelcatalogs/{channelCatalogId}/settings',
  tags: ['Marketplaces - Channel catalogs - Settings'],
  summary: 'Save new marketplace settings for a channel catalog',
  description: 'Allow you to configure your marketplace settings.\nPartial update accepted.\n',
  operationId: 'SetChannelCatalogMarketplaceSettings',
  request: {
    params: z.object({
      channelCatalogId: z
        .guid()
        .openapi({
          param: {
            description: 'Channel Catalog Id to query',
            in: 'path',
            name: 'channelCatalogId',
            required: true,
            schema: { format: 'guid', type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Settings to save',
      content: {
        'application/json': { schema: SetChannelCatalogMarketplaceSettingsRequestSchema },
      },
      required: true,
    },
  },
  responses: {
    204: { description: 'Successfully saved channel catalog marketplace settings' },
    400: {
      description:
        'One or more channel catalog marketplace property keys or values are invalid for requested marketplace channel catalog. See response for details.',
      content: { 'application/json': { schema: BeezUPCommonErrorResponseMessageSchema } },
    },
    404: { description: 'Marketplace channel catalog not found' },
    503: ProcessingResponseResponse,
    default: GeneralErrorResponse,
  },
})

export const getV2UserMarketplacesOrdersIndexRoute = createRoute({
  method: 'get',
  path: '/v2/user/marketplaces/orders/',
  tags: ['Marketplaces - Orders - Global'],
  summary: '[DEPRECATED] Get all actions you can do on the order API',
  operationId: 'GetOrderIndex',
  request: { headers: z.object({ 'If-None-Match': IfNoneMatchParameterParamsSchema }) },
  responses: {
    200: {
      description: 'Order index',
      content: { 'application/json': { schema: OrderIndexSchema } },
    },
    304: _304NotModifiedResponse,
    default: GeneralErrorResponse,
  },
  deprecated: true,
})

export const getV2UserMarketplacesOrdersAutomaticTransitionsRoute = createRoute({
  method: 'get',
  path: '/v2/user/marketplaces/orders/automaticTransitions',
  tags: ['Marketplaces - Orders - AutoTransitions'],
  summary: 'Get list of configured automatic Order status transitions',
  operationId: 'GetAutomaticTransitions',
  request: {
    query: z.object({
      storeId: z
        .guid()
        .exactOptional()
        .openapi({
          param: {
            description: 'The StoreId to filter by',
            example: '04730364-9826-4ff3-92e4-51fccd02bf10',
            in: 'query',
            name: 'storeId',
            required: false,
            schema: { format: 'guid', type: 'string' },
          },
        }),
    }),
    headers: z.object({ 'If-None-Match': IfNoneMatchParameterParamsSchema }),
  },
  responses: {
    200: {
      description: 'Successfully fetched list of configured automatic Order status transitions',
      content: { 'application/json': { schema: AutomaticTransitionInfoListSchema } },
    },
    304: _304NotModifiedResponse,
    404: {
      description: 'Requested Store could not be found',
      content: { 'application/json': { schema: BeezUPCommonErrorResponseMessageSchema } },
    },
    default: GeneralErrorResponse,
  },
})

export const postV2UserMarketplacesOrdersAutomaticTransitionsRoute = createRoute({
  method: 'post',
  path: '/v2/user/marketplaces/orders/automaticTransitions',
  tags: ['Marketplaces - Orders - AutoTransitions'],
  summary: 'Configure new or existing automatic Order status transition',
  operationId: 'ConfigureAutomaticTransitions',
  request: {
    body: {
      content: { 'application/json': { schema: ConfigureAutomaticTransitionRequestSchema } },
      required: true,
    },
  },
  responses: {
    204: {
      description: 'Successfully confirugred new or existing automatic Order status transition',
    },
    400: {
      description: 'Requested automatic Order status transition could not be configured',
      content: { 'application/json': { schema: BeezUPCommonErrorResponseMessageSchema } },
    },
    default: GeneralErrorResponse,
  },
})

export const postV2UserMarketplacesOrdersBatchesChangeOrdersChangeOrderTypeRoute = createRoute({
  method: 'post',
  path: '/v2/user/marketplaces/orders/batches/changeOrders/{changeOrderType}',
  tags: ['Marketplaces - Orders - Batches'],
  summary:
    '[DEPRECATED] Send a batch of operations to change your marketplace Order information: accept, ship, etc.  (max 100 items per call)',
  description:
    'The purpose of this operation is to reduce the amount of request to the API. \nMax 100 items per call.\n',
  operationId: 'ChangeOrderList',
  request: {
    params: z.object({ changeOrderType: ChangeOrderTypeParameterParamsSchema }),
    query: z.object({
      userName: UserNameInQueryParameterParamsSchema,
      testMode: TestModeInQueryParameterParamsSchema,
    }),
    body: ChangeOrderListRequestRequestBody,
  },
  responses: {
    202: {
      description:
        'Succesfully received and processed batched operations. Please check response to see the status per operation.',
      content: { 'application/json': { schema: BatchOrderOperationResponseSchema } },
    },
    400: {
      description: 'Requested too many batch operations',
      content: { 'application/json': { schema: BeezUPCommonErrorResponseMessageSchema } },
    },
    default: GeneralErrorResponse,
  },
  deprecated: true,
})

export const postV2UserMarketplacesOrdersBatchesClearMerchantOrderInfosRoute = createRoute({
  method: 'post',
  path: '/v2/user/marketplaces/orders/batches/clearMerchantOrderInfos',
  tags: ['Marketplaces - Orders - Batches'],
  summary:
    "[DEPRECATED] Send a batch of operations to clear an Order's merchant information (max 100 items per call)",
  description: 'The purpose of this operation is to reduce the amount of request to the API.',
  operationId: 'ClearMerchantOrderInfoList',
  request: { body: ClearMerchantOrderInfoListRequestRequestBody },
  responses: {
    202: {
      description:
        'Succesfully received and processed batched operations. Please check response to see the status per operation.',
      content: { 'application/json': { schema: BatchOrderOperationResponseSchema } },
    },
    400: {
      description: 'Requested too many batch operations',
      content: { 'application/json': { schema: BeezUPCommonErrorResponseMessageSchema } },
    },
    default: GeneralErrorResponse,
  },
  deprecated: true,
})

export const postV2UserMarketplacesOrdersBatchesSetMerchantOrderInfosRoute = createRoute({
  method: 'post',
  path: '/v2/user/marketplaces/orders/batches/setMerchantOrderInfos',
  tags: ['Marketplaces - Orders - Batches'],
  summary:
    "[DEPRECATED] Send a batch of operations to set an Order's merchant information  (max 100 items per call)",
  description: 'The purpose of this operation is to reduce the amount of request to the API.',
  operationId: 'SetMerchantOrderInfoList',
  request: { body: SetMerchantOrderInfoListRequestRequestBody },
  responses: {
    202: {
      description:
        'Succesfully received and processed batched operations. Please check response to see the status per operation.',
      content: { 'application/json': { schema: BatchOrderOperationResponseSchema } },
    },
    400: {
      description: 'Requested too many batch operations',
      content: { 'application/json': { schema: BeezUPCommonErrorResponseMessageSchema } },
    },
    default: GeneralErrorResponse,
  },
  deprecated: true,
})

export const getV2UserMarketplacesOrdersExportationsRoute = createRoute({
  method: 'get',
  path: '/v2/user/marketplaces/orders/exportations',
  tags: ['Marketplaces - Orders - Exports'],
  summary: 'Get a paginated list of Order report exportations',
  operationId: 'GetOrderExportations',
  request: {
    query: z.object({
      pageNumber: PageNumberQueryStrngParameterParamsSchema,
      pageSize: PageSizeQueryStrngParameterParamsSchema,
      storeId: z
        .guid()
        .openapi({
          param: {
            description: 'The store identifier to regroup the order exportations',
            in: 'query',
            name: 'storeId',
            required: true,
            schema: { format: 'guid', type: 'string' },
          },
        }),
    }),
    headers: z.object({ 'If-None-Match': IfNoneMatchParameterParamsSchema }),
  },
  responses: {
    200: {
      description: 'Successfully fetched the list of Order report exportations',
      content: { 'application/json': { schema: OrderExportationsSchema } },
    },
    304: _304NotModifiedResponse,
    400: {
      description:
        'Could not process request for given parameters values. Please check error message for more details.',
      content: { 'application/json': { schema: BeezUPCommonErrorResponseMessageSchema } },
    },
    default: GeneralErrorResponse,
  },
})

export const postV2UserMarketplacesOrdersExportationsRoute = createRoute({
  method: 'post',
  path: '/v2/user/marketplaces/orders/exportations',
  tags: ['Marketplaces - Orders - Exports'],
  summary: 'Request a new Order report exportation to be generated',
  description:
    'A new file will be generated containing a summary of all the Orders matching the requested filter settings.',
  operationId: 'ExportOrders',
  request: {
    body: {
      content: { 'application/json': { schema: ExportOrderListRequestSchema } },
      required: true,
    },
  },
  responses: {
    202: { description: 'Successfully requested new Order report exportation generation' },
    400: {
      description:
        'Could not process request for given parameters values. Please check error message for more details.',
      content: { 'application/json': { schema: BeezUPCommonErrorResponseMessageSchema } },
    },
    404: {
      description: 'No orders have been found for this request.',
      content: { 'application/json': { schema: BeezUPCommonErrorResponseMessageSchema } },
    },
    default: GeneralErrorResponse,
  },
})

export const postV2UserMarketplacesOrdersHarvestRoute = createRoute({
  method: 'post',
  path: '/v2/user/marketplaces/orders/harvest',
  tags: ['Marketplaces - Orders - Global'],
  summary: '[DEPRECATED] Send harvest request to all your marketplaces',
  operationId: 'HarvestAll',
  request: {
    query: z.object({
      storeId: z
        .guid()
        .exactOptional()
        .openapi({
          param: {
            description: 'The StoreId to filter by',
            example: '04730364-9826-4ff3-92e4-51fccd02bf10',
            in: 'query',
            name: 'storeId',
            required: false,
            schema: { format: 'guid', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    202: {
      description: 'Successfully sent harvest request to all marketplaces',
      headers: z.object({
        'Retry-After': {
          description:
            'Indicates the duration in seconds to wait to be able to make this request again',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description:
                'Indicates the duration in seconds to wait to be able to make this request again',
              param: { required: false },
            }),
        },
      }),
    },
    404: {
      description: 'Requested Store could not be found',
      content: { 'application/json': { schema: BeezUPCommonErrorResponseMessageSchema } },
    },
    409: {
      description: 'Failed to send harvest request because allowed rate limits have been exceeded',
      content: { 'application/json': { schema: BeezUPCommonErrorResponseMessageSchema } },
      headers: z.object({
        'Retry-After': {
          description:
            'Indicates the duration in seconds to wait to be able to make this request again',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description:
                'Indicates the duration in seconds to wait to be able to make this request again',
              param: { required: false },
            }),
        },
      }),
    },
    default: GeneralErrorResponse,
  },
  deprecated: true,
})

export const postV2UserMarketplacesOrdersInvoicesGenerateRoute = createRoute({
  method: 'post',
  path: '/v2/user/marketplaces/orders/invoices/generate',
  tags: ['OM Invoice - API - Generation'],
  summary: 'Generate an Order Invoice batch',
  operationId: 'GenerateBatchOrderInvoice',
  request: {
    query: z.object({ userName: UserNameInQueryParameterParamsSchema }),
    body: {
      content: { 'application/json': { schema: GenerateBatchOrderInvoiceRequestSchema } },
      required: true,
    },
  },
  responses: {
    202: {
      description:
        'The locations of the generated invoice. Might take a few seconds to be available',
      content: { 'application/json': { schema: GenerateBatchOrderInvoiceResponseSchema } },
    },
    400: GenerateBatchOrderInvoiceErrorResponseResponse,
    403: OrderGenerateForbiddenResponseResponse,
    404: OrderNotFoundResponseResponse,
    409: OrderInvoiceConflictResponseResponse,
    429: OrderGenerateTooManyRequestsResponseResponse,
    default: GeneralErrorResponse,
  },
})

export const postV2UserMarketplacesOrdersInvoicesGetPdfInvoiceRoute = createRoute({
  method: 'post',
  path: '/v2/user/marketplaces/orders/invoices/getPdfInvoice',
  tags: ['OM Invoice - API - Generation'],
  summary: 'Returns the PDF version of the invoice',
  operationId: 'GetOrderInvoicePdf',
  request: {
    body: {
      content: {
        'application/json': { schema: GetOrderInvoicePdfFromHtmlInvoiceUrlRequestSchema },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'The PDF version of the HTML invoice URL in the request',
      content: {
        'application/pdf': { schema: z.file().openapi({ type: 'string', format: 'binary' }) },
      },
    },
    403: OwnerIdNotAuthorizedResponseResponse,
    404: OrderInvoiceNotFoundResponse,
    default: GeneralErrorResponse,
  },
})

export const getV2UserMarketplacesOrdersInvoicesSettingsDesignRoute = createRoute({
  method: 'get',
  path: '/v2/user/marketplaces/orders/invoices/settings/design',
  tags: ['OM Invoice - API - Settings'],
  summary: 'Get Order Invoice design settings',
  operationId: 'GetOrderInvoiceDesignSettings',
  responses: {
    200: {
      description: 'Design successfully retrieved',
      content: { 'application/json': { schema: OrderInvoiceDesignSettingsSchema } },
    },
    403: OwnerIdNotAuthorizedResponseResponse,
    404: OrderInvoiceDesignSettingsNotFoundResponseResponse,
    default: GeneralErrorResponse,
  },
})

export const putV2UserMarketplacesOrdersInvoicesSettingsDesignRoute = createRoute({
  method: 'put',
  path: '/v2/user/marketplaces/orders/invoices/settings/design',
  tags: ['OM Invoice - API - Settings'],
  summary: 'Save Order Invoice design settings',
  operationId: 'SaveOrderInvoiceDesignSettings',
  request: { body: OrderInvoiceDesignSettingsRequestBody },
  responses: {
    204: { description: 'Design successfully saved' },
    400: SaveOrderInvoiceDesignSettingsBadRequestResponseResponse,
    403: OwnerIdNotAuthorizedResponseResponse,
    default: GeneralErrorResponse,
  },
})

export const postV2UserMarketplacesOrdersInvoicesSettingsDesignPreviewRoute = createRoute({
  method: 'post',
  path: '/v2/user/marketplaces/orders/invoices/settings/design/preview',
  tags: ['OM Invoice - API - Settings'],
  summary: 'View a preview an Order Invoice using custom design settings',
  operationId: 'GetOrderInvoiceDesignSettingsPreview',
  request: {
    headers: z.object({
      'Accept-Encoding': z
        .string()
        .openapi({
          param: {
            description:
              'Allows the client to indicate wether it accepts a compressed encoding to reduce traffic size',
            in: 'header',
            name: 'Accept-Encoding',
            required: true,
            schema: { items: { type: 'string' }, type: 'string' },
            style: 'simple',
          },
        }),
    }),
    body: OrderInvoiceDesignSettingsRequestBody,
  },
  responses: {
    200: {
      description: 'Design Preview successfully retrieved',
      content: { 'application/json': { schema: GetOrderInvoiceDesignPreviewResponseSchema } },
    },
    403: OwnerIdNotAuthorizedResponseResponse,
    default: GeneralErrorResponse,
  },
})

export const getV2UserMarketplacesOrdersInvoicesSettingsGeneralRoute = createRoute({
  method: 'get',
  path: '/v2/user/marketplaces/orders/invoices/settings/general',
  tags: ['OM Invoice - API - Settings'],
  summary: 'Get Order Invoice general settings',
  operationId: 'GetOrderInvoiceGeneralSettings',
  responses: {
    200: {
      description: 'Settings successfully retrieved',
      content: { 'application/json': { schema: GetOrderInvoiceGeneralSettingsResponseSchema } },
    },
    403: OwnerIdNotAuthorizedResponseResponse,
    404: OrderInvoiceGeneralSettingsNotFoundResponseResponse,
    default: GeneralErrorResponse,
  },
})

export const putV2UserMarketplacesOrdersInvoicesSettingsGeneralRoute = createRoute({
  method: 'put',
  path: '/v2/user/marketplaces/orders/invoices/settings/general',
  tags: ['OM Invoice - API - Settings'],
  summary: 'Save Order Invoice general settings',
  operationId: 'SaveOrderInvoiceGeneralSettings',
  request: {
    body: {
      content: { 'application/json': { schema: OrderInvoiceGeneralSettingsSchema } },
      required: true,
    },
  },
  responses: {
    204: { description: 'General Settings successfully saved' },
    400: SaveOrderInvoiceGeneralSettingsBadRequestResponseResponse,
    403: OwnerIdNotAuthorizedResponseResponse,
    default: GeneralErrorResponse,
  },
})

export const postV2UserMarketplacesOrdersInvoicesMarketplaceTechnicalCodeAccountIdBeezUPOrderUUIDGenerateRoute =
  createRoute({
    method: 'post',
    path: '/v2/user/marketplaces/orders/invoices/{marketplaceTechnicalCode}/{accountId}/{beezUPOrderUUID}/generate',
    tags: ['OM Invoice - API - Generation'],
    summary: 'Generate an Order Invoice',
    operationId: 'GenerateOrderInvoice',
    request: {
      params: z.object({
        marketplaceTechnicalCode: MarketplaceTechnicalCodeParamsSchema,
        accountId: AccountIdParamsSchema,
        beezUPOrderUUID: BeezUPOrderUUIDParamsSchema,
      }),
      query: z.object({ userName: UserNameInQueryParameterParamsSchema }),
      body: {
        content: { 'application/json': { schema: GenerateOrderInvoiceRequestSchema } },
        required: true,
      },
    },
    responses: {
      202: {
        description: 'Request Accepted.',
        headers: z.object({
          Location: {
            description:
              'The location of the generated invoice. Might take a few seconds to be available',
            schema: z
              .string()
              .exactOptional()
              .openapi({
                description:
                  'The location of the generated invoice. Might take a few seconds to be available',
                param: { required: false },
              }),
          },
        }),
      },
      403: OrderGenerateForbiddenResponseResponse,
      404: OrderNotFoundResponseResponse,
      409: OrderInvoiceConflictResponseResponse,
      429: OrderGenerateTooManyRequestsResponseResponse,
      default: GeneralErrorResponse,
    },
  })

export const postV2UserMarketplacesOrdersInvoicesMarketplaceTechnicalCodeAccountIdBeezUPOrderUUIDPreviewRoute =
  createRoute({
    method: 'post',
    path: '/v2/user/marketplaces/orders/invoices/{marketplaceTechnicalCode}/{accountId}/{beezUPOrderUUID}/preview',
    tags: ['OM Invoice - API - Generation'],
    summary: 'View a preview an Order Invoice',
    operationId: 'GetOrderInvoicePreview',
    request: {
      params: z.object({
        marketplaceTechnicalCode: MarketplaceTechnicalCodeParamsSchema,
        accountId: AccountIdParamsSchema,
        beezUPOrderUUID: BeezUPOrderUUIDParamsSchema,
      }),
      headers: z.object({
        'Accept-Encoding': z
          .string()
          .openapi({
            param: {
              description:
                'Allows the client to indicate wether it accepts a compressed encoding to reduce traffic size',
              in: 'header',
              name: 'Accept-Encoding',
              required: true,
              schema: { items: { type: 'string' }, type: 'string' },
              style: 'simple',
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: PreviewOrderInvoiceRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Order Invoice preview successfully returned.',
        content: { 'application/json': { schema: PreviewOrderInvoiceResponseSchema } },
      },
      403: OrderGenerateForbiddenResponseResponse,
      404: OrderNotFoundResponseResponse,
      409: OrderInvoiceConflictResponseResponse,
      default: GeneralErrorResponse,
    },
  })

export const postV2UserMarketplacesOrdersListFullRoute = createRoute({
  method: 'post',
  path: '/v2/user/marketplaces/orders/list/full',
  tags: ['Marketplaces - Orders - List'],
  summary:
    '[DEPRECATED] Get a paginated list of all Orders with all Order and Order Item(s) properties',
  description:
    'DEPRECATED - Use /orders/v3 instead\nThe purpose of this operation is to reduce the amount of request to the API.\\\n\\\nPrevious implmentation of this feature only returned a partial (light) version of the Orders. The purpose of this API is to reduce the number of incoming requests by returning the complete (full) Order and Order Item(s) properties.\n',
  operationId: 'GetOrderListFull',
  request: {
    headers: z.object({
      'Accept-Encoding': z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',').map((part) => part.trim()) : [item],
                ),
          z.array(z.string()),
        )
        .openapi({
          param: {
            description:
              'Allows the client to indicate wether it accepts a compressed encoding to reduce traffic size',
            in: 'header',
            name: 'Accept-Encoding',
            required: true,
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'simple',
          },
        }),
    }),
    body: OrderListRequestRequestBody,
  },
  responses: {
    200: {
      description: 'Successfully fetched the full list of Orders',
      content: { 'application/json': { schema: OrderListFullSchema } },
    },
    400: {
      description:
        'Could not process request for given parameters values. Please check error message for more details.',
      content: { 'application/json': { schema: BeezUPCommonErrorResponseMessageSchema } },
    },
    default: GeneralErrorResponse,
  },
  deprecated: true,
})

export const postV2UserMarketplacesOrdersListLightRoute = createRoute({
  method: 'post',
  path: '/v2/user/marketplaces/orders/list/light',
  tags: ['Marketplaces - Orders - List'],
  summary: '[DEPRECATED] Get a paginated list of all Orders without details',
  description: 'Use /orders/v3 instead',
  operationId: 'GetOrderListLight',
  request: { body: OrderListRequestRequestBody },
  responses: {
    200: {
      description: 'Successfully fetched the list of Orders',
      content: { 'application/json': { schema: OrderListLightSchema } },
    },
    400: {
      description:
        'Could not process request for given parameters values. Please check error message for more details.',
      content: { 'application/json': { schema: BeezUPCommonErrorResponseMessageSchema } },
    },
    default: GeneralErrorResponse,
  },
  deprecated: true,
})

export const getV2UserMarketplacesOrdersStatusRoute = createRoute({
  method: 'get',
  path: '/v2/user/marketplaces/orders/status',
  tags: ['Marketplaces - Orders - Global'],
  summary:
    '[DEPRECATED] Get current synchronization status between your marketplaces and BeezUP accounts',
  description: 'Use /orders/v3',
  operationId: 'GetMarketplaceAccountsSynchronization',
  request: {
    query: z.object({
      storeId: z
        .guid()
        .exactOptional()
        .openapi({
          param: {
            description: 'The StoreId to filter by',
            example: '04730364-9826-4ff3-92e4-51fccd02bf10',
            in: 'query',
            name: 'storeId',
            required: false,
            schema: { format: 'guid', type: 'string' },
          },
        }),
    }),
    headers: z.object({ 'If-None-Match': IfNoneMatchParameterParamsSchema }),
  },
  responses: {
    200: {
      description: 'Successfully fetched current synchronization status',
      content: { 'application/json': { schema: AccountSynchronizationListSchema } },
    },
    304: _304NotModifiedResponse,
    404: {
      description: 'Requested Store could not be found',
      content: { 'application/json': { schema: BeezUPCommonErrorResponseMessageSchema } },
    },
    default: GeneralErrorResponse,
  },
  deprecated: true,
})

export const getV2UserMarketplacesOrdersSubscriptionsIndexRoute = createRoute({
  method: 'get',
  path: '/v2/user/marketplaces/orders/subscriptions/',
  tags: ['Marketplaces - Orders - Subscriptions - Subscriptions'],
  summary: 'Get the subscription list',
  operationId: 'GetSubscriptionList',
  responses: {
    200: {
      description: 'The subscription list',
      content: { 'application/json': { schema: z.array(SubscriptionIndexSchema) } },
    },
    default: GeneralErrorResponse,
  },
})

export const getV2UserMarketplacesOrdersSubscriptionsIdRoute = createRoute({
  method: 'get',
  path: '/v2/user/marketplaces/orders/subscriptions/{id}',
  tags: ['Marketplaces - Orders - Subscriptions - Subscriptions'],
  summary: 'Get a subscription to the orders',
  operationId: 'GetSubscription',
  request: { params: z.object({ id: SubscriptionIdPathParameterParamsSchema }) },
  responses: {
    200: {
      description: 'Subscription info',
      content: { 'application/json': { schema: SubscriptionIndexSchema } },
    },
    404: SubscriptionNotFoundResponseResponse,
    default: GeneralErrorResponse,
  },
})

export const postV2UserMarketplacesOrdersSubscriptionsIdRoute = createRoute({
  method: 'post',
  path: '/v2/user/marketplaces/orders/subscriptions/{id}',
  tags: ['Marketplaces - Orders - Subscriptions - Subscriptions'],
  summary: 'Creates a subscription to the orders',
  description:
    'Please take a look at this sequence diagram to understand the subscription process to follow [here](https://www.websequencediagrams.com/files/render?link=SBYbeIc8NGshk6ooCbmjoBLIMl4fIGO1xjJbPBQAglBo0n6BwEReh7NXQiPSjOTX)',
  operationId: 'CreateSubscription',
  request: {
    params: z.object({ id: SubscriptionIdPathParameterParamsSchema }),
    body: {
      content: { 'application/json': { schema: CreateSubscriptionRequestSchema } },
      required: true,
    },
  },
  responses: {
    202: { description: 'Subscription creation accepted' },
    400: {
      description: 'Invalid subscription request.',
      content: { 'application/json': { schema: ErrorResponseMessageSchema } },
    },
    404: SubscriptionNotFoundResponseResponse,
    409: SubscriptionAlreadyExistsResponseResponse,
    default: GeneralErrorResponse,
  },
})

export const deleteV2UserMarketplacesOrdersSubscriptionsIdRoute = createRoute({
  method: 'delete',
  path: '/v2/user/marketplaces/orders/subscriptions/{id}',
  tags: ['Marketplaces - Orders - Subscriptions - Subscriptions'],
  summary: 'Delete a subscription to the orders',
  operationId: 'DeleteSubscription',
  request: { params: z.object({ id: SubscriptionIdPathParameterParamsSchema }) },
  responses: {
    202: { description: 'Subscription deletion accepted' },
    404: SubscriptionNotFoundResponseResponse,
    default: GeneralErrorResponse,
  },
})

export const postV2UserMarketplacesOrdersSubscriptionsIdActivateRoute = createRoute({
  method: 'post',
  path: '/v2/user/marketplaces/orders/subscriptions/{id}/activate',
  tags: ['Marketplaces - Orders - Subscriptions - Subscriptions'],
  summary: 'Activate a subscription to the orders',
  description:
    'At this moment, BeezUP will ensure that your callback url is respecting this specification: \n- https://app.swaggerhub.com/apis/BeezUP/public_marketplaces_orders_subscriptions_consumer-dev/1.0#/Subscriptions/Verification\n\nAfter that we will send you the orders related to your subscription, respecting this specification: \n- https://app.swaggerhub.com/apis/BeezUP/public_marketplaces_orders_subscriptions_consumer-dev/1.0#/Subscriptions/PushOrders\n',
  operationId: 'ActivateSubscription',
  request: {
    params: z.object({ id: SubscriptionIdPathParameterParamsSchema }),
    body: { content: { 'application/json': { schema: ActivateSubscriptionRequestSchema } } },
  },
  responses: {
    202: { description: 'Subscription activation accepted' },
    400: {
      description: 'Activation subscription request is invalid',
      content: { 'application/json': { schema: ErrorResponseMessageSchema } },
    },
    404: SubscriptionNotFoundResponseResponse,
    503: OrderSubscriptionTargetNotAvailableResponseResponse,
    default: GeneralErrorResponse,
  },
})

export const postV2UserMarketplacesOrdersSubscriptionsIdDeactivateRoute = createRoute({
  method: 'post',
  path: '/v2/user/marketplaces/orders/subscriptions/{id}/deactivate',
  tags: ['Marketplaces - Orders - Subscriptions - Subscriptions'],
  summary: 'Deactivate a subscription to the orders',
  operationId: 'DeactivateSubscription',
  request: { params: z.object({ id: SubscriptionIdPathParameterParamsSchema }) },
  responses: {
    202: { description: 'Subscription deactivation accepted' },
    404: SubscriptionNotFoundResponseResponse,
    default: GeneralErrorResponse,
  },
})

export const getV2UserMarketplacesOrdersSubscriptionsIdReportingRoute = createRoute({
  method: 'get',
  path: '/v2/user/marketplaces/orders/subscriptions/{id}/reporting',
  tags: ['Marketplaces - Orders - Subscriptions - Subscriptions'],
  summary: 'Get the push reporting related to this subscription',
  operationId: 'GetSubscriptionPushReporting',
  request: {
    params: z.object({ id: SubscriptionIdPathParameterParamsSchema }),
    query: z.object({
      pageNumber: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'pageNumber',
            required: false,
            schema: { format: 'PageNumber', minimum: 1, type: 'integer' },
          },
        }),
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(100),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'pageSize',
            required: false,
            schema: { format: 'PageSize', maximum: 100, minimum: 1, type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Subscription push reporting info',
      content: { 'application/json': { schema: z.array(SubscriptionPushReportingSchema) } },
      headers: z.object({
        Link: {
          description:
            'Based on the RFC 5988 - Web Linking, the page navigation will be indicated here with the rel=next, rel=previous, rel=first, rel=last, the pageNumber and the pageSize will be indicated in the link param',
          style: 'simple',
          schema: z
            .array(z.string())
            .exactOptional()
            .openapi({
              description:
                'Based on the RFC 5988 - Web Linking, the page navigation will be indicated here with the rel=next, rel=previous, rel=first, rel=last, the pageNumber and the pageSize will be indicated in the link param',
              param: { required: false },
            }),
        },
        'X-Total-Count': {
          description: 'The total item count related to this query',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The total item count related to this query',
              param: { required: false },
            }),
        },
      }),
    },
    404: SubscriptionNotFoundResponseResponse,
    default: GeneralErrorResponse,
  },
})

export const postV2UserMarketplacesOrdersSubscriptionsIdRetryRoute = createRoute({
  method: 'post',
  path: '/v2/user/marketplaces/orders/subscriptions/{id}/retry',
  tags: ['Marketplaces - Orders - Subscriptions - Subscriptions'],
  summary: 'Force retry push orders immediatly',
  description:
    'In case your subscription consumption is unavailable and your subscription is still active you can ask to retry immediatly to push orders instead of waiting the next scheduled retry date',
  operationId: 'RetryPushOrders',
  request: { params: z.object({ id: SubscriptionIdPathParameterParamsSchema }) },
  responses: {
    202: { description: 'Retry push orders request accepted' },
    404: SubscriptionNotFoundResponseResponse,
    409: RetryRejectedResponseResponse,
    default: GeneralErrorResponse,
  },
})

export const getV2UserMarketplacesOrdersMarketplaceTechnicalCodeAccountIdBeezUPOrderIdRoute =
  createRoute({
    method: 'get',
    path: '/v2/user/marketplaces/orders/{marketplaceTechnicalCode}/{accountId}/{beezUPOrderId}',
    tags: ['Marketplaces - Orders - Order'],
    summary: '[DEPRECATED] DEPRECATED - Get full Order and Order Item(s) properties',
    description: 'DEPRECATED - Use /orders/v3 instead',
    operationId: 'GetOrder',
    request: {
      params: z.object({
        marketplaceTechnicalCode: MarketplaceTechnicalCodeParameterParamsSchema,
        accountId: AccountIdParameterParamsSchema,
        beezUPOrderId: BeezUPOrderIdParameterParamsSchema,
      }),
      headers: z.object({ 'If-None-Match': IfNoneMatchParameterParamsSchema }),
    },
    responses: {
      200: {
        description: 'Successfully fetched Order and Order Item(s) properties',
        content: { 'application/json': { schema: OrderSchema } },
        headers: z.object({
          ETag: {
            description:
              'ETag value to identify the current version of requested Order\\\nFor more details go to this link: http://tools.ietf.org/html/rfc7232#section-2.3\n',
            schema: z
              .string()
              .exactOptional()
              .openapi({
                description:
                  'ETag value to identify the current version of requested Order\\\nFor more details go to this link: http://tools.ietf.org/html/rfc7232#section-2.3\n',
                param: { required: false },
              }),
          },
          'Last-Modified': {
            description:
              'Last modification UTC date of the order\\\nFor more details go to this link: https://tools.ietf.org/html/rfc7232#section-2.2\n',
            schema: z.iso
              .datetime({ offset: true })
              .exactOptional()
              .openapi({
                description:
                  'Last modification UTC date of the order\\\nFor more details go to this link: https://tools.ietf.org/html/rfc7232#section-2.2\n',
                param: { required: false },
              }),
          },
        }),
      },
      304: _304NotModifiedResponse,
      404: {
        description: 'Requested Order could not be found',
        content: { 'application/json': { schema: BeezUPCommonErrorResponseMessageSchema } },
      },
      default: GeneralErrorResponse,
    },
    deprecated: true,
  })

export const headV2UserMarketplacesOrdersMarketplaceTechnicalCodeAccountIdBeezUPOrderIdRoute =
  createRoute({
    method: 'head',
    path: '/v2/user/marketplaces/orders/{marketplaceTechnicalCode}/{accountId}/{beezUPOrderId}',
    tags: ['Marketplaces - Orders - Order'],
    summary:
      '[DEPRECATED] DEPRECATED - Get the meta information about the order (ETag, Last-Modified)',
    description:
      'DEPRECATED - Use /orders/v3 instead\nThe purpose of this operation is to reduce the bandwith usage by getting just the meta information about the order (ETag, Last-Modified) with the body.\nThis could be useful\n',
    operationId: 'HeadOrder',
    request: {
      params: z.object({
        marketplaceTechnicalCode: MarketplaceTechnicalCodeParameterParamsSchema,
        accountId: AccountIdParameterParamsSchema,
        beezUPOrderId: BeezUPOrderIdParameterParamsSchema,
      }),
      headers: z.object({ 'If-None-Match': IfNoneMatchParameterParamsSchema }),
    },
    responses: {
      200: {
        description: 'Successfully fetched Order and Order Item(s) properties',
        headers: z.object({
          ETag: {
            description:
              'ETag value to identify the current version of requested Order\\\nFor more details go to this link: http://tools.ietf.org/html/rfc7232#section-2.3\n',
            schema: z
              .string()
              .exactOptional()
              .openapi({
                description:
                  'ETag value to identify the current version of requested Order\\\nFor more details go to this link: http://tools.ietf.org/html/rfc7232#section-2.3\n',
                param: { required: false },
              }),
          },
          'Last-Modified': {
            description:
              'Last modification UTC date of the order\\\nFor more details go to this link: https://tools.ietf.org/html/rfc7232#section-2.2\n',
            schema: z.iso
              .datetime({ offset: true })
              .exactOptional()
              .openapi({
                description:
                  'Last modification UTC date of the order\\\nFor more details go to this link: https://tools.ietf.org/html/rfc7232#section-2.2\n',
                param: { required: false },
              }),
          },
        }),
      },
      304: _304NotModifiedResponse,
      404: {
        description: 'Requested Order could not be found',
        content: { 'application/json': { schema: BeezUPCommonErrorResponseMessageSchema } },
      },
      default: GeneralErrorResponse,
    },
    deprecated: true,
  })

export const postV2UserMarketplacesOrdersMarketplaceTechnicalCodeAccountIdBeezUPOrderIdClearMerchantOrderInfoRoute =
  createRoute({
    method: 'post',
    path: '/v2/user/marketplaces/orders/{marketplaceTechnicalCode}/{accountId}/{beezUPOrderId}/clearMerchantOrderInfo',
    tags: ['Marketplaces - Orders - Order'],
    summary: "[DEPRECATED] Clear an Order's merchant information",
    operationId: 'ClearMerchantOrderInfo',
    request: {
      params: z.object({
        marketplaceTechnicalCode: MarketplaceTechnicalCodeParameterParamsSchema,
        accountId: AccountIdParameterParamsSchema,
        beezUPOrderId: BeezUPOrderIdParameterParamsSchema,
      }),
    },
    responses: {
      204: { description: 'Successfully cleared Order merchant order info set' },
      400: {
        description:
          'Could not update Order merchant information. Please see body for more information.',
        content: { 'application/json': { schema: BeezUPCommonErrorResponseMessageSchema } },
      },
      404: {
        description: 'Requested Order could not be found',
        content: { 'application/json': { schema: BeezUPCommonErrorResponseMessageSchema } },
      },
      default: GeneralErrorResponse,
    },
    deprecated: true,
  })

export const postV2UserMarketplacesOrdersMarketplaceTechnicalCodeAccountIdBeezUPOrderIdHarvestRoute =
  createRoute({
    method: 'post',
    path: '/v2/user/marketplaces/orders/{marketplaceTechnicalCode}/{accountId}/{beezUPOrderId}/harvest',
    tags: ['Marketplaces - Orders - Order'],
    summary: '[DEPRECATED] Send harvest request for a single Order',
    operationId: 'HarvestOrder',
    request: {
      params: z.object({
        marketplaceTechnicalCode: MarketplaceTechnicalCodeParameterParamsSchema,
        accountId: AccountIdParameterParamsSchema,
        beezUPOrderId: BeezUPOrderIdParameterParamsSchema,
      }),
    },
    responses: {
      202: {
        description: 'Successfully sent Order harvest request',
        headers: z.object({
          'Retry-After': {
            description:
              'Indicates the duration in seconds to wait to be able to make this request again',
            schema: z
              .int()
              .exactOptional()
              .openapi({
                description:
                  'Indicates the duration in seconds to wait to be able to make this request again',
                param: { required: false },
              }),
          },
        }),
      },
      404: {
        description: 'Requested Order could not be found',
        content: { 'application/json': { schema: BeezUPCommonErrorResponseMessageSchema } },
      },
      409: {
        description:
          'Failed to send harvest request because allowed rate limits have been exceeded',
        content: { 'application/json': { schema: BeezUPCommonErrorResponseMessageSchema } },
        headers: z.object({
          'Retry-After': {
            description:
              'Indicates the duration in seconds to wait to be able to make this request again',
            schema: z
              .int()
              .exactOptional()
              .openapi({
                description:
                  'Indicates the duration in seconds to wait to be able to make this request again',
                param: { required: false },
              }),
          },
        }),
      },
      default: GeneralErrorResponse,
    },
    deprecated: true,
  })

export const getV2UserMarketplacesOrdersMarketplaceTechnicalCodeAccountIdBeezUPOrderIdHistoryRoute =
  createRoute({
    method: 'get',
    path: '/v2/user/marketplaces/orders/{marketplaceTechnicalCode}/{accountId}/{beezUPOrderId}/history',
    tags: ['Marketplaces - Orders - Order'],
    summary: "[DEPRECATED] Get an Order's harvest and change history",
    operationId: 'GetOrderHistory',
    request: {
      params: z.object({
        marketplaceTechnicalCode: MarketplaceTechnicalCodeParameterParamsSchema,
        accountId: AccountIdParameterParamsSchema,
        beezUPOrderId: BeezUPOrderIdParameterParamsSchema,
      }),
      headers: z.object({ 'If-None-Match': IfNoneMatchParameterParamsSchema }),
    },
    responses: {
      200: {
        description: 'Successfully fetched Order history',
        content: { 'application/json': { schema: OrderHistorySchema } },
      },
      304: _304NotModifiedResponse,
      404: {
        description: 'Requested Order could not be found',
        content: { 'application/json': { schema: BeezUPCommonErrorResponseMessageSchema } },
      },
      default: GeneralErrorResponse,
    },
    deprecated: true,
  })

export const postV2UserMarketplacesOrdersMarketplaceTechnicalCodeAccountIdBeezUPOrderIdSetMerchantOrderInfoRoute =
  createRoute({
    method: 'post',
    path: '/v2/user/marketplaces/orders/{marketplaceTechnicalCode}/{accountId}/{beezUPOrderId}/setMerchantOrderInfo',
    tags: ['Marketplaces - Orders - Order'],
    summary: "[DEPRECATED] Set an Order's merchant information",
    operationId: 'SetMerchantOrderInfo',
    request: {
      params: z.object({
        marketplaceTechnicalCode: MarketplaceTechnicalCodeParameterParamsSchema,
        accountId: AccountIdParameterParamsSchema,
        beezUPOrderId: BeezUPOrderIdParameterParamsSchema,
      }),
      body: SetMerchantOrderInfoRequestRequestBody,
    },
    responses: {
      204: { description: 'Successfully set Order merchant order info set' },
      400: {
        description:
          'Could not update Order merchant information. Please see body for more information.',
        content: { 'application/json': { schema: BeezUPCommonErrorResponseMessageSchema } },
      },
      404: {
        description: 'Requested Order could not be found',
        content: { 'application/json': { schema: BeezUPCommonErrorResponseMessageSchema } },
      },
      default: GeneralErrorResponse,
    },
    deprecated: true,
  })

export const postV2UserMarketplacesOrdersMarketplaceTechnicalCodeAccountIdBeezUPOrderIdChangeOrderTypeRoute =
  createRoute({
    method: 'post',
    path: '/v2/user/marketplaces/orders/{marketplaceTechnicalCode}/{accountId}/{beezUPOrderId}/{changeOrderType}',
    tags: ['Marketplaces - Orders - Order'],
    summary: '[DEPRECATED] Change your marketplace Order Information (accept, ship, etc.)',
    operationId: 'ChangeOrder',
    request: {
      params: z.object({
        marketplaceTechnicalCode: MarketplaceTechnicalCodeParameterParamsSchema,
        accountId: AccountIdParameterParamsSchema,
        beezUPOrderId: BeezUPOrderIdParameterParamsSchema,
        changeOrderType: ChangeOrderTypeParameterParamsSchema,
      }),
      query: z.object({
        userName: UserNameInQueryParameterParamsSchema,
        testMode: TestModeInQueryParameterParamsSchema,
      }),
      headers: z.object({ 'If-Match': IfMatchParameterParamsSchema }),
      body: ChangeOrderRequestRequestBody,
    },
    responses: {
      202: { description: 'Order change request accepted' },
      400: {
        description:
          'Invalid order change request, could not be send to the marketplace. Please check the body of this request.',
        content: { 'application/json': { schema: BeezUPCommonErrorResponseMessageSchema } },
      },
      404: {
        description: 'Requested Order could not be found',
        content: { 'application/json': { schema: BeezUPCommonErrorResponseMessageSchema } },
      },
      409: {
        description:
          'Already processing a change request for this Order.\\\nPlease refresh your clients Order information and retry later.\n',
        content: { 'application/json': { schema: BeezUPCommonErrorResponseMessageSchema } },
        headers: z.object({
          'Retry-After': {
            description:
              'Indicates the duration in seconds to wait to be able to make this request again',
            schema: z
              .int()
              .exactOptional()
              .openapi({
                description:
                  'Indicates the duration in seconds to wait to be able to make this request again',
                param: { required: false },
              }),
          },
        }),
      },
      412: _412PreConditionFailedResponse,
      default: GeneralErrorResponse,
    },
    deprecated: true,
  })
