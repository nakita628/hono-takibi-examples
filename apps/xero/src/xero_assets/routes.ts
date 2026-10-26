import { createRoute, z } from '@hono/zod-openapi'

const PaginationSchema = z
  .object({
    page: z.int().exactOptional().openapi({ example: 1 }),
    pageSize: z.int().exactOptional().openapi({ example: 10 }),
    pageCount: z.int().exactOptional().openapi({ example: 1 }),
    itemCount: z.int().exactOptional().openapi({ example: 2 }),
  })
  .openapi({ required: [] })
  .openapi('Pagination')

const AssetStatusSchema = z
  .enum(['Draft', 'Registered', 'Disposed'])
  .openapi({ description: 'See Asset Status Codes.', example: 'Draft' })
  .openapi('AssetStatus')

const BookDepreciationSettingSchema = z
  .object({
    depreciationMethod: z
      .enum([
        'NoDepreciation',
        'StraightLine',
        'DiminishingValue100',
        'DiminishingValue150',
        'DiminishingValue200',
        'FullDepreciation',
      ])
      .exactOptional()
      .openapi({
        example: 'StraightLine',
        description: 'The method of depreciation applied to this asset. See Depreciation Methods',
      }),
    averagingMethod: z
      .enum(['FullMonth', 'ActualDays'])
      .exactOptional()
      .openapi({
        example: 'ActualDays',
        description: 'The method of averaging applied to this asset. See Averaging Methods',
      }),
    depreciationRate: z
      .float64()
      .exactOptional()
      .openapi({
        'x-is-money': true,
        example: 0.05,
        description: 'The rate of depreciation (e.g. 0.05)',
      }),
    effectiveLifeYears: z
      .int()
      .exactOptional()
      .openapi({ example: 5, description: 'Effective life of the asset in years (e.g. 5)' }),
    depreciationCalculationMethod: z
      .enum(['Rate', 'Life', 'None'])
      .exactOptional()
      .openapi({ example: 'None', description: 'See Depreciation Calculation Methods' }),
    depreciableObjectId: z
      .uuid()
      .exactOptional()
      .openapi({
        example: '68f17094-af97-4f1b-b36b-013b45b6ad3c',
        description: 'Unique Xero identifier for the depreciable object',
      }),
    depreciableObjectType: z
      .string()
      .exactOptional()
      .openapi({ example: 'Asset', description: 'The type of asset object' }),
    bookEffectiveDateOfChangeId: z
      .uuid()
      .exactOptional()
      .openapi({
        example: '68f17094-af97-4f1b-b36b-013b45b6ad3c',
        description: 'Unique Xero identifier for the effective date change',
      }),
  })
  .openapi({ required: [] })
  .openapi('BookDepreciationSetting')

const BookDepreciationDetailSchema = z
  .object({
    currentCapitalGain: z
      .float64()
      .exactOptional()
      .openapi({
        'x-is-money': true,
        example: 5.25,
        description:
          'When an asset is disposed, this will be the sell price minus the purchase price if a profit was made.',
      }),
    currentGainLoss: z
      .float64()
      .exactOptional()
      .openapi({
        'x-is-money': true,
        example: 10.5,
        description:
          'When an asset is disposed, this will be the lowest one of sell price or purchase price, minus the current book value.',
      }),
    depreciationStartDate: z.iso
      .date()
      .exactOptional()
      .openapi({ example: '2015-07-01T00:00:00', description: 'YYYY-MM-DD' }),
    costLimit: z
      .float64()
      .exactOptional()
      .openapi({
        'x-is-money': true,
        example: 9000,
        description:
          'The value of the asset you want to depreciate, if this is less than the cost of the asset.',
      }),
    residualValue: z
      .float64()
      .exactOptional()
      .openapi({
        'x-is-money': true,
        example: 10000,
        description: "The value of the asset remaining when you've fully depreciated it.",
      }),
    priorAccumDepreciationAmount: z
      .float64()
      .exactOptional()
      .openapi({
        'x-is-money': true,
        example: 0.45,
        description: 'All depreciation prior to the current financial year.',
      }),
    currentAccumDepreciationAmount: z
      .float64()
      .exactOptional()
      .openapi({
        'x-is-money': true,
        example: 5,
        description: 'All depreciation occurring in the current financial year.',
      }),
    businessUseCapitalGain: z
      .number()
      .exactOptional()
      .openapi({
        'x-is-money': true,
        description:
          '(New Zealand Orgs Only) The portion of capital gain realised from the disposal of a fixed asset that is attributable to its business use.',
      }),
    businessUseCurrentGainLoss: z
      .number()
      .exactOptional()
      .openapi({
        'x-is-money': true,
        description:
          '(New Zealand Orgs Only) Represents the gain or loss from the disposal of the business use portion of a fixed asset. This value records the financial result (profit or loss) related specifically to the asset’s business use.',
      }),
    privateUseCapitalGain: z
      .number()
      .exactOptional()
      .openapi({
        'x-is-money': true,
        description:
          '(New Zealand Orgs Only) The portion of capital gain realised from the disposal of a fixed asset that is attributable to its private (non-business) use.',
      }),
    privateUseCurrentGainLoss: z
      .number()
      .exactOptional()
      .openapi({
        'x-is-money': true,
        description:
          '(New Zealand Orgs Only) Represents the gain or loss from the disposal of the private use portion of a fixed asset. This value records the financial result (profit or loss) related specifically to the asset’s private use.',
      }),
    initialDeductionPercentage: z
      .number()
      .exactOptional()
      .openapi({
        description: '(New Zealand Orgs Only) The Investment Boost deduction percentage.',
      }),
  })
  .openapi({ required: [] })
  .openapi('BookDepreciationDetail')

const AssetSchema = z
  .object({
    assetId: z
      .uuid()
      .exactOptional()
      .openapi({
        description: 'The Xero-generated Id for the asset',
        example: '3b5b3a38-5649-495f-87a1-14a4e5918634',
      }),
    assetName: z
      .string()
      .openapi({ description: 'The name of the asset', example: 'Awesome Truck 3' }),
    assetTypeId: z
      .uuid()
      .exactOptional()
      .openapi({
        description: 'The Xero-generated Id for the asset type',
        example: '3b5b3a38-5649-495f-87a1-14a4e5918634',
      }),
    assetNumber: z
      .string()
      .exactOptional()
      .openapi({ description: 'Must be unique.', example: 'FA-0013' }),
    purchaseDate: z.iso
      .date()
      .exactOptional()
      .openapi({
        description: 'The date the asset was purchased YYYY-MM-DD',
        example: '2015-07-01T00:00:00',
      }),
    purchasePrice: z
      .float64()
      .exactOptional()
      .openapi({
        'x-is-money': true,
        description: 'The purchase price of the asset',
        example: '1000.0000',
      }),
    disposalDate: z.iso
      .date()
      .exactOptional()
      .openapi({ description: 'The date the asset was disposed', example: '2020-07-01T00:00:00' }),
    disposalPrice: z
      .float64()
      .exactOptional()
      .openapi({
        'x-is-money': true,
        description: 'The price the asset was disposed at',
        example: '1.0000',
      }),
    assetStatus: AssetStatusSchema.exactOptional(),
    warrantyExpiryDate: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The date the asset’s warranty expires (if needed) YYYY-MM-DD',
        example: 'ca4c6b39-4f4f-43e8-98da-5e1f350a6694',
      }),
    serialNumber: z
      .string()
      .exactOptional()
      .openapi({
        description: "The asset's serial number",
        example: 'ca4c6b39-4f4f-43e8-98da-5e1f350a6694',
      }),
    bookDepreciationSetting: BookDepreciationSettingSchema.exactOptional(),
    bookDepreciationDetail: BookDepreciationDetailSchema.exactOptional(),
    canRollback: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "Boolean to indicate whether depreciation can be rolled back for this asset individually. This is true if it doesn't have 'legacy' journal entries and if there is no lock period that would prevent this asset from rolling back.",
        example: true,
      }),
    accountingBookValue: z
      .float64()
      .exactOptional()
      .openapi({
        'x-is-money': true,
        description: 'The accounting value of the asset',
        example: 0,
      }),
    isDeleteEnabledForDate: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Boolean to indicate whether delete is enabled', example: true }),
  })
  .openapi({ required: ['assetName'] })
  .openapi('Asset')

const AssetsSchema = z
  .object({
    pagination: PaginationSchema.exactOptional(),
    items: z.array(AssetSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Assets')

const AssetStatusQueryParamSchema = z
  .enum(['DRAFT', 'REGISTERED', 'DISPOSED'])
  .openapi({ description: 'See Asset Status Codes.', example: 'DRAFT' })
  .openapi('AssetStatusQueryParam')

const AssetTypeSchema = z
  .object({
    assetTypeId: z
      .uuid()
      .exactOptional()
      .openapi({
        example: '5da209c5-5e19-4a43-b925-71b776c49ced',
        description: 'Xero generated unique identifier for asset types',
      }),
    assetTypeName: z
      .string()
      .openapi({ example: 'Computer Equipment', description: 'The name of the asset type' }),
    fixedAssetAccountId: z
      .uuid()
      .exactOptional()
      .openapi({
        example: '24e260f1-bfc4-4766-ad7f-8a8ce01de879',
        description: 'The asset account for fixed assets of this type',
      }),
    depreciationExpenseAccountId: z
      .uuid()
      .exactOptional()
      .openapi({
        example: 'b23fc79b-d66b-44b0-a240-e138e086fcbc',
        description: 'The expense account for the depreciation of fixed assets of this type',
      }),
    accumulatedDepreciationAccountId: z
      .uuid()
      .exactOptional()
      .openapi({
        example: 'ca4c6b39-4f4f-43e8-98da-5e1f350a6694',
        description: 'The account for accumulated depreciation of fixed assets of this type',
      }),
    bookDepreciationSetting: BookDepreciationSettingSchema,
    locks: z
      .int()
      .exactOptional()
      .openapi({
        example: 33,
        description:
          'All asset types that have accumulated depreciation for any assets that use them are deemed ‘locked’ and cannot be removed.',
      }),
  })
  .openapi({ 'x-snake': 'asset_type', required: ['assetTypeName', 'bookDepreciationSetting'] })
  .openapi('AssetType')

const SettingSchema = z
  .object({
    assetNumberPrefix: z
      .string()
      .exactOptional()
      .openapi({
        example: 'FA-',
        description: 'The prefix used for fixed asset numbers (“FA-” by default)',
      }),
    assetNumberSequence: z
      .string()
      .exactOptional()
      .openapi({ example: '0022', description: 'The next available sequence number' }),
    assetStartDate: z.iso
      .date()
      .exactOptional()
      .openapi({
        example: '2015-07-31T00:00:00',
        description:
          'The date depreciation calculations started on registered fixed assets in Xero',
      }),
    lastDepreciationDate: z.iso
      .date()
      .exactOptional()
      .openapi({ example: '2015-07-01T00:00:00', description: 'The last depreciation date' }),
    defaultGainOnDisposalAccountId: z
      .uuid()
      .exactOptional()
      .openapi({
        example: '346ddb97-739a-4274-b43b-66aa3218d17c',
        description: 'Default account that gains are posted to',
      }),
    defaultLossOnDisposalAccountId: z
      .uuid()
      .exactOptional()
      .openapi({
        example: '1b798541-24e2-4855-9309-c023a0b576f3',
        description: 'Default account that losses are posted to',
      }),
    defaultCapitalGainOnDisposalAccountId: z
      .uuid()
      .exactOptional()
      .openapi({
        example: '6d6a0bdb-e118-45d8-a023-2ad617ec1cb7',
        description: 'Default account that capital gains are posted to',
      }),
    optInForTax: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'opt in for tax calculation', example: false }),
  })
  .openapi({ required: ['name'] })
  .openapi('Setting')

const ResourceValidationErrorsElementSchema = z
  .object({
    resourceName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The field name of the erroneous field' }),
    localisedMessage: z
      .string()
      .exactOptional()
      .openapi({ description: 'Explanation of the resource validation error' }),
    type: z
      .string()
      .exactOptional()
      .openapi({ description: 'Internal type of the resource error message' }),
    title: z
      .string()
      .exactOptional()
      .openapi({ description: 'Title of the resource validation error' }),
    detail: z
      .string()
      .exactOptional()
      .openapi({ description: 'Detail of the resource validation error' }),
  })
  .openapi({
    externalDocs: { url: 'https://developer.xero.com/documentation/api/http-response-codes' },
    required: [],
  })
  .openapi('ResourceValidationErrorsElement')

const FieldValidationErrorsElementSchema = z
  .object({
    fieldName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The field name of the erroneous field' }),
    valueProvided: z.string().exactOptional().openapi({ description: 'The provided value' }),
    localisedMessage: z
      .string()
      .exactOptional()
      .openapi({ description: 'Explanation of the field validation error' }),
    type: z
      .string()
      .exactOptional()
      .openapi({ description: 'Internal type of the field validation error message' }),
    title: z
      .string()
      .exactOptional()
      .openapi({ description: 'Title of the field validation error' }),
    detail: z
      .string()
      .exactOptional()
      .openapi({ description: 'Detail of the field validation error' }),
  })
  .openapi({
    externalDocs: { url: 'https://developer.xero.com/documentation/api/http-response-codes' },
    required: [],
  })
  .openapi('FieldValidationErrorsElement')

const ErrorSchema = z
  .object({
    resourceValidationErrors: z
      .array(ResourceValidationErrorsElementSchema)
      .exactOptional()
      .openapi({ description: 'Array of elements of resource validation errors' }),
    fieldValidationErrors: z
      .array(FieldValidationErrorsElementSchema)
      .exactOptional()
      .openapi({ description: 'Array of elements of field validation errors' }),
    type: z
      .string()
      .exactOptional()
      .openapi({ description: 'The internal type of error, not accessible externally' }),
    title: z.string().exactOptional().openapi({ description: 'Title of the error' }),
    detail: z.string().exactOptional().openapi({ description: 'Detail of the error' }),
  })
  .openapi({
    externalDocs: { url: 'https://developer.xero.com/documentation/api/http-response-codes' },
    required: [],
  })
  .openapi('Error')

const RequiredHeaderParamsSchema = z
  .string()
  .openapi({
    param: {
      in: 'header',
      name: 'xero-tenant-id',
      'x-snake': 'xero_tenant_id',
      description: 'Xero identifier for Tenant',
      example: 'YOUR_XERO_TENANT_ID',
      schema: { type: 'string' },
      required: true,
    },
  })

const IdempotencyKeyParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      in: 'header',
      name: 'Idempotency-Key',
      'x-snake': 'idempotency_key',
      description:
        'This allows you to safely retry requests without the risk of duplicate processing. 128 character max.',
      example: 'KEY_VALUE',
      schema: { type: 'string' },
      required: false,
    },
  })

const OAuth2SecurityScheme = {
  type: 'oauth2',
  description: 'For more information',
  flows: {
    authorizationCode: {
      authorizationUrl: 'https://login.xero.com/identity/connect/authorize',
      tokenUrl: 'https://identity.xero.com/connect/token',
      scopes: {
        email: 'Grant read-only access to your email',
        openid: 'Grant read-only access to your open id',
        profile: 'your profile information',
        assets: 'Grant read-write access to fixed assets',
        'assets.read': 'Grant read-only access to fixed assets',
      },
    },
  },
}

export const getAssetsRoute = createRoute({
  method: 'get',
  path: '/Assets',
  tags: ['Asset'],
  summary: 'searches fixed asset',
  description:
    'By passing in the appropriate options, you can search for available fixed asset in the system',
  operationId: 'getAssets',
  request: {
    headers: z.object({ 'xero-tenant-id': RequiredHeaderParamsSchema }),
    query: z.object({
      status: AssetStatusQueryParamSchema.openapi({
        param: {
          name: 'status',
          in: 'query',
          description: 'Required when retrieving a collection of assets. See Asset Status Codes',
          schema: { $ref: '#/components/schemas/AssetStatusQueryParam' },
          required: true,
        },
      }),
      page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'page',
            in: 'query',
            description:
              'Results are paged. This specifies which page of the results to return. The default page is 1.',
            schema: { type: 'integer', example: 1 },
            required: false,
          },
          example: 1,
        }),
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'pageSize',
            'x-snake': 'page_size',
            in: 'query',
            description:
              'The number of records returned per page. By default the number of records returned is 10.',
            schema: { type: 'integer', example: 5 },
            required: false,
          },
          example: 5,
        }),
      orderBy: z
        .enum([
          'AssetType',
          'AssetName',
          'AssetNumber',
          'PurchaseDate',
          'PurchasePrice',
          'DisposalDate',
          'DisposalPrice',
        ])
        .exactOptional()
        .openapi({
          param: {
            name: 'orderBy',
            'x-snake': 'order_by',
            in: 'query',
            description:
              'Requests can be ordered by AssetType, AssetName, AssetNumber, PurchaseDate and PurchasePrice. If the asset status is DISPOSED it also allows DisposalDate and DisposalPrice.',
            schema: {
              type: 'string',
              enum: [
                'AssetType',
                'AssetName',
                'AssetNumber',
                'PurchaseDate',
                'PurchasePrice',
                'DisposalDate',
                'DisposalPrice',
              ],
              example: 'AssetName',
            },
            required: false,
          },
          example: 'AssetName',
        }),
      sortDirection: z
        .enum(['asc', 'desc'])
        .exactOptional()
        .openapi({
          param: {
            name: 'sortDirection',
            'x-snake': 'sort_direction',
            in: 'query',
            description: 'ASC or DESC',
            schema: { type: 'string', enum: ['asc', 'desc'], example: 'ASC' },
            required: false,
          },
          example: 'ASC',
        }),
      filterBy: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'filterBy',
            'x-snake': 'filter_by',
            in: 'query',
            description:
              'A string that can be used to filter the list to only return assets containing the text. Checks it against the AssetName, AssetNumber, Description and AssetTypeName fields.',
            schema: { type: 'string', example: 'Company Car' },
            required: false,
          },
          example: 'Company Car',
        }),
    }),
  },
  responses: {
    200: {
      description: 'search results matching criteria',
      content: {
        'application/json': {
          schema: AssetsSchema,
          example: {
            pagination: {
              page: 1,
              pageSize: 10,
              pageCount: 2,
              itemCount: 11,
              links: {
                first: { href: 'http://asset.favorit.xero.com/v1/assets?status=DRAFT&page=1' },
                next: { href: 'http://asset.favorit.xero.com/v1/assets?status=DRAFT&page=2' },
                last: { href: 'http://asset.favorit.xero.com/v1/assets?status=DRAFT&page=2' },
              },
            },
            items: [
              {
                assetId: '68f17094-af97-4f1b-b36b-013b45b6ad3c',
                assetName: 'Computer47822',
                assetNumber: '123478074',
                purchaseDate: '2020-01-01T00:00:00',
                purchasePrice: 100,
                disposalPrice: 0,
                assetStatus: 'Draft',
                trackingItems: [],
                bookDepreciationSetting: {
                  depreciableObjectId: '68f17094-af97-4f1b-b36b-013b45b6ad3c',
                  depreciableObjectType: 'Asset',
                  bookEffectiveDateOfChangeId: '5da77739-7f22-4109-b0a0-67480fb89af0',
                  depreciationMethod: 'StraightLine',
                  averagingMethod: 'ActualDays',
                  depreciationRate: 0.5,
                  depreciationCalculationMethod: 'None',
                },
                bookDepreciationDetail: {
                  depreciationStartDate: '2020-01-02T00:00:00',
                  priorAccumDepreciationAmount: 0,
                  currentAccumDepreciationAmount: 0,
                  currentCapitalGain: 0,
                  currentGainLoss: 0,
                },
                taxDepreciationSettings: [],
                taxDepreciationDetails: [],
                canRollback: true,
                accountingBookValue: 100,
                taxValues: [],
                isDeleteEnabledForDate: false,
              },
              {
                assetId: '52ea3adf-f04a-4577-8fd2-43c52a256bd5',
                assetName: 'Computer4148',
                assetNumber: '123466620',
                purchaseDate: '2020-01-01T00:00:00',
                purchasePrice: 100,
                disposalPrice: 0,
                assetStatus: 'Draft',
                trackingItems: [],
                bookDepreciationSetting: {
                  depreciableObjectId: '52ea3adf-f04a-4577-8fd2-43c52a256bd5',
                  depreciableObjectType: 'Asset',
                  bookEffectiveDateOfChangeId: 'c0d5280f-28b6-4329-b5b7-36e08c662010',
                  depreciationMethod: 'StraightLine',
                  averagingMethod: 'ActualDays',
                  depreciationRate: 0.5,
                  depreciationCalculationMethod: 'None',
                },
                bookDepreciationDetail: {
                  depreciationStartDate: '2020-01-02T00:00:00',
                  priorAccumDepreciationAmount: 0,
                  currentAccumDepreciationAmount: 0,
                  currentCapitalGain: 0,
                  currentGainLoss: 0,
                },
                taxDepreciationSettings: [],
                taxDepreciationDetails: [],
                canRollback: true,
                accountingBookValue: 100,
                taxValues: [],
                isDeleteEnabledForDate: false,
              },
            ],
          },
        },
      },
    },
    400: { description: 'bad input parameter' },
  },
  security: [{ OAuth2: ['assets', 'assets.read'] }],
})

export const postAssetsRoute = createRoute({
  method: 'post',
  path: '/Assets',
  tags: ['Asset'],
  summary: 'adds a fixed asset',
  description: 'Adds an asset to the system',
  operationId: 'createAsset',
  request: {
    headers: z.object({
      'xero-tenant-id': RequiredHeaderParamsSchema,
      'Idempotency-Key': IdempotencyKeyParamsSchema,
    }),
    body: {
      description: 'Fixed asset you are creating',
      content: {
        'application/json': {
          schema: AssetSchema,
          example: {
            assetName: 'Computer74863',
            assetNumber: '123477544',
            purchaseDate: '2020-01-01',
            purchasePrice: 100,
            disposalPrice: 23.23,
            assetStatus: 'Draft',
            bookDepreciationSetting: {
              depreciationMethod: 'StraightLine',
              averagingMethod: 'ActualDays',
              depreciationRate: 0.5,
              depreciationCalculationMethod: 'None',
            },
            bookDepreciationDetail: {
              currentCapitalGain: 5.32,
              currentGainLoss: 3.88,
              depreciationStartDate: '2020-01-02',
              costLimit: 100,
              currentAccumDepreciationAmount: 2.25,
            },
            AccountingBookValue: 99.5,
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'return single object - create new asset',
      content: {
        'application/json': {
          schema: AssetSchema,
          example: {
            assetId: '2257c64a-77ca-444c-a5ea-fa9a588c7039',
            assetName: 'Computer74863',
            assetNumber: '123477544',
            purchaseDate: '2020-01-01T00:00:00',
            purchasePrice: 100,
            disposalPrice: 23.23,
            assetStatus: 'Draft',
            trackingItems: [],
            bookDepreciationSetting: {
              depreciableObjectId: '2257c64a-77ca-444c-a5ea-fa9a588c7039',
              depreciableObjectType: 'Asset',
              bookEffectiveDateOfChangeId: 'b58a2ace-1213-4681-9f11-2e30f57b5b8c',
              depreciationMethod: 'StraightLine',
              averagingMethod: 'ActualDays',
              depreciationRate: 0.5,
              depreciationCalculationMethod: 'None',
            },
            bookDepreciationDetail: {
              depreciationStartDate: '2020-01-02T00:00:00',
              priorAccumDepreciationAmount: 0,
              currentAccumDepreciationAmount: 0,
              currentCapitalGain: 0,
              currentGainLoss: 0,
            },
            taxDepreciationSettings: [],
            taxDepreciationDetails: [],
            canRollback: true,
            accountingBookValue: 76.77,
            taxValues: [],
            isDeleteEnabledForDate: true,
          },
        },
      },
    },
    400: { description: 'invalid input, object invalid', content: {} },
  },
  security: [{ OAuth2: ['assets'] }],
})

export const getAssetsIdRoute = createRoute({
  method: 'get',
  path: '/Assets/{id}',
  tags: ['Asset'],
  summary: 'Retrieves fixed asset by id',
  description:
    'By passing in the appropriate asset id, you can search for\na specific fixed asset in the system\n',
  operationId: 'getAssetById',
  request: {
    headers: z.object({ 'xero-tenant-id': RequiredHeaderParamsSchema }),
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            description: 'fixed asset id for single object',
            schema: {
              type: 'string',
              format: 'uuid',
              example: '00000000-0000-0000-0000-000000000000',
            },
          },
          example: '00000000-0000-0000-0000-000000000000',
        }),
    }),
  },
  responses: {
    200: {
      description: 'search results matching criteria',
      content: {
        'application/json': {
          schema: AssetSchema,
          example: {
            assetId: '68f17094-af97-4f1b-b36b-013b45b6ad3c',
            assetName: 'Computer47822',
            assetNumber: '123478074',
            purchaseDate: '2020-01-01T00:00:00',
            purchasePrice: 100,
            disposalPrice: 23,
            assetStatus: 'Draft',
            trackingItems: [],
            bookDepreciationSetting: {
              depreciableObjectId: '68f17094-af97-4f1b-b36b-013b45b6ad3c',
              depreciableObjectType: 'Asset',
              bookEffectiveDateOfChangeId: '5da77739-7f22-4109-b0a0-67480fb89af0',
              depreciationMethod: 'StraightLine',
              averagingMethod: 'ActualDays',
              depreciationRate: 0.5,
              depreciationCalculationMethod: 'None',
            },
            bookDepreciationDetail: {
              depreciationStartDate: '2020-01-02T00:00:00',
              priorAccumDepreciationAmount: 0,
              currentAccumDepreciationAmount: 0,
              currentCapitalGain: 0,
              currentGainLoss: 0,
            },
            taxDepreciationSettings: [],
            taxDepreciationDetails: [],
            canRollback: true,
            metaData: {
              bookDepreciationDetailsCanChange: true,
              taxDepreciationDetailsCanChange: true,
            },
            accountingBookValue: 77,
            taxValues: [],
            isDeleteEnabledForDate: true,
          },
        },
      },
    },
    400: { description: 'bad input parameter' },
  },
  security: [{ OAuth2: ['assets', 'assets.read'] }],
})

export const getAssetTypesRoute = createRoute({
  method: 'get',
  path: '/AssetTypes',
  tags: ['Asset'],
  summary: 'searches fixed asset types',
  description:
    'By passing in the appropriate options, you can search for available fixed asset types in the system',
  operationId: 'getAssetTypes',
  request: { headers: z.object({ 'xero-tenant-id': RequiredHeaderParamsSchema }) },
  responses: {
    200: {
      description: 'search results matching criteria',
      content: {
        'application/json': {
          schema: z.array(AssetTypeSchema),
          example: [
            {
              assetTypeId: '710255c6-d2ed-4463-b992-06c8685add5e',
              assetTypeName: 'Computer Equipment',
              fixedAssetAccountId: '37c35de7-8df0-44bf-8e7c-f1f67cf6a278',
              depreciationExpenseAccountId: '0fbd1820-9dd0-454a-9515-6ec076a84cf7',
              accumulatedDepreciationAccountId: '512eac06-6894-47cd-b421-673b4ca2693a',
              bookDepreciationSetting: {
                depreciableObjectId: '710255c6-d2ed-4463-b992-06c8685add5e',
                depreciableObjectType: 'AssetType',
                bookEffectiveDateOfChangeId: '39b9c2e9-62b1-4efc-ab75-fa9152ffaa5f',
                depreciationMethod: 'StraightLine',
                averagingMethod: 'FullMonth',
                depreciationRate: 25,
                depreciationCalculationMethod: 'None',
              },
              taxDepreciationSettings: [],
              locks: 0,
              lockPrivateUseAccount: false,
            },
            {
              assetTypeId: '1a398a67-9d9d-4783-8689-14a8efce89d9',
              assetTypeName: 'Machinery97704',
              fixedAssetAccountId: '5c93f577-c48f-44cd-8593-01489e319c2b',
              depreciationExpenseAccountId: 'adc14376-c960-43f0-b7f3-4063e5098039',
              accumulatedDepreciationAccountId: '9195cadd-8645-41e6-9f67-7bcd421defe8',
              bookDepreciationSetting: {
                depreciableObjectId: '1a398a67-9d9d-4783-8689-14a8efce89d9',
                depreciableObjectType: 'AssetType',
                bookEffectiveDateOfChangeId: '6d09a96d-7768-4f28-95e8-c9ac870fe36e',
                depreciationMethod: 'DiminishingValue100',
                averagingMethod: 'ActualDays',
                depreciationRate: 40,
                depreciationCalculationMethod: 'None',
              },
              taxDepreciationSettings: [],
              locks: 0,
              lockPrivateUseAccount: false,
            },
          ],
        },
      },
    },
    400: { description: 'bad input parameter' },
  },
  security: [{ OAuth2: ['assets', 'assets.read'] }],
})

export const postAssetTypesRoute = createRoute({
  method: 'post',
  path: '/AssetTypes',
  tags: ['Asset'],
  summary: 'adds a fixed asset type',
  description: 'Adds an fixed asset type to the system',
  operationId: 'createAssetType',
  request: {
    headers: z.object({
      'xero-tenant-id': RequiredHeaderParamsSchema,
      'Idempotency-Key': IdempotencyKeyParamsSchema,
    }),
    body: {
      description: 'Asset type to add',
      content: {
        'application/json': {
          schema: AssetTypeSchema,
          example: {
            assetTypeName: 'Machinery11004',
            fixedAssetAccountId: '3d8d063a-c148-4bb8-8b3c-a5e2ad3b1e82',
            depreciationExpenseAccountId: 'd1602f69-f900-4616-8d34-90af393fa368',
            accumulatedDepreciationAccountId: '9195cadd-8645-41e6-9f67-7bcd421defe8',
            bookDepreciationSetting: {
              depreciationMethod: 'DiminishingValue100',
              averagingMethod: 'ActualDays',
              depreciationRate: 0.05,
              depreciationCalculationMethod: 'None',
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'results single object -  created fixed type',
      content: {
        'application/json': {
          schema: AssetTypeSchema,
          example: {
            assetTypeId: '85509b5d-308e-420d-9532-b85105058916',
            assetTypeName: 'Machinery11004',
            fixedAssetAccountId: '3d8d063a-c148-4bb8-8b3c-a5e2ad3b1e82',
            depreciationExpenseAccountId: 'd1602f69-f900-4616-8d34-90af393fa368',
            accumulatedDepreciationAccountId: '9195cadd-8645-41e6-9f67-7bcd421defe8',
            bookDepreciationSetting: {
              depreciableObjectId: '00000000-0000-0000-0000-000000000000',
              depreciableObjectType: 'None',
              depreciationMethod: 'DiminishingValue100',
              averagingMethod: 'ActualDays',
              depreciationRate: 0.05,
              depreciationCalculationMethod: 'None',
            },
            locks: 0,
            lockPrivateUseAccount: false,
          },
        },
      },
    },
    400: { description: 'invalid input, object invalid', content: {} },
    409: { description: 'a type already exists' },
  },
  security: [{ OAuth2: ['assets'] }],
})

export const getSettingsRoute = createRoute({
  method: 'get',
  path: '/Settings',
  tags: ['Asset'],
  summary: 'searches fixed asset settings',
  description:
    'By passing in the appropriate options, you can search for available fixed asset types in the system',
  operationId: 'getAssetSettings',
  request: { headers: z.object({ 'xero-tenant-id': RequiredHeaderParamsSchema }) },
  responses: {
    200: {
      description: 'search results matching criteria',
      content: {
        'application/json': {
          schema: SettingSchema,
          example: {
            assetNumberPrefix: 'FA-',
            assetNumberSequence: '0007',
            assetStartDate: '2016-01-01T00:00:00',
            optInForTax: false,
          },
        },
      },
    },
    400: { description: 'bad input parameter' },
  },
  security: [{ OAuth2: ['assets', 'assets.read'] }],
})
