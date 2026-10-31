import { createRoute, z } from '@hono/zod-openapi'

const ImageSchema = z
  .object({
    imageName: z.string().openapi({ description: 'Name of the SKU image.' }),
    imageUrl: z
      .string()
      .default('https://imageurl.example')
      .openapi({
        description:
          'URL of the SKU image. The image must be sent through `https` protocol, otherwise it will not be rendered in VTEX Admin.',
      }),
  })
  .openapi({
    example: {
      imageName: 'Principal',
      imageUrl: 'https://i.pinimg.com/originals/2d/96/4a/2d964a6bf37d9224d0615dc85fccdd62.jpg',
    },
    required: ['imageName', 'imageUrl'],
    title: 'Image',
  })
  .openapi('Image')

const ImagesSchema = z
  .object({
    'imagem1.jpg': z
      .string()
      .default('https://imageurl.example')
      .openapi({
        description:
          "Array containing the URLs of the SKU's images.  The image must be sent through `https` protocol, otherwise it will not be rendered in VTEX Admin.",
      }),
  })
  .openapi({
    example: [{ 'imagem1.jpg': 'imageurl.example' }],
    required: ['imagem1.jpg'],
    title: 'Images',
  })
  .openapi('Images')

const MatchMultipleSchema = z
  .object({
    object: z
      .object({
        brandId: z
          .int32()
          .nullable()
          .default(1234567)
          .exactOptional()
          .openapi({
            description:
              "Marketplace's Brand ID that the product belongs to, configured in the Catalog. It should be the brand chosen for the received SKU to be matched with. The `brandId` is already mapped through the [Get SKU Suggestion by ID](https://developers.vtex.com/vtex-rest-api/reference/getsuggestion). This field is nulled when the inserted value is 0, and is mandatory for the 'newproduct' action.",
          }),
        categoryId: z
          .int32()
          .nullable()
          .default(12)
          .openapi({
            description:
              "Marketplace's Category ID that the product belongs to, configured in the Catalog. It should be the category chosen for the received SKU to be matched with. The `categoryId` is already mapped through the [Get SKU Suggestion by ID](https://developers.vtex.com/vtex-rest-api/reference/getsuggestion). You can choose to keep the same suggested `categoryID`, or overwrite it with another value in this request. This field is nulled when the inserted value is 0.",
          }),
        itemId: z
          .string()
          .default('1234567')
          .openapi({
            description:
              "This field can be used to link any string that identifies that SKU. Its most common use is the seller's SKU ID.",
          }),
        matchId: z
          .string()
          .default('vtex-matcher')
          .openapi({
            description:
              "Whenever an SKU suggestion is matched, it is associated to a unique ID. Fill in this field with the matchId you wish to filter by. The `matchId`'s value can be obtained through the [Get SKU Suggestion by ID](https://developers.vtex.com/vtex-rest-api/reference/getsuggestion) endpoint.",
          }),
        matcherId: z
          .string()
          .default('vtex-matcher')
          .openapi({
            description:
              "Identifies the matching entity. It can be either VTEX's matcher, or an external matcher developed by partners, for example. The `matcherId`'s value can be obtained through the [Get SKU Suggestion by ID](https://developers.vtex.com/vtex-rest-api/reference/getsuggestion) endpoint.",
          }),
        productRef: z
          .string()
          .nullable()
          .default('123 product ref')
          .exactOptional()
          .openapi({
            description:
              "Fill in this field on your request when the matched item is a product. This field is mandatory for the 'productassociation' action.",
          }),
        sellerId: z
          .string()
          .default('seller123')
          .openapi({
            description:
              'A string that identifies the seller in the marketplace. This ID must be created by the marketplace and informed to the seller before the integration is built.',
          }),
        skuRef: z
          .string()
          .nullable()
          .default('123 sku ref')
          .exactOptional()
          .openapi({
            description:
              "Fill in this field on your request when the matched item is an SKU. This field is mandatory for the 'skuassociation' action.",
          }),
        versionId: z
          .string()
          .default('')
          .openapi({
            description:
              "Whenever an SKU Suggestion is updated or changed, a new version of the original one is created. All versions are logged, so you can search for previous our current states of SKU suggestions. This field is the versionId associated to the version you choose to search for. You can get this field's value through the [Get SKU Suggestion by ID](https://developers.vtex.com/vtex-rest-api/reference/getsuggestion). through the `latestVersionId` field.",
          }),
      })
      .exactOptional()
      .openapi({
        required: ['itemId', 'versionId', 'matchId', 'matcherId', 'categoryId', 'sellerId'],
        title: '',
      }),
  })
  .openapi({ title: 'MatchMultiple', required: [] })
  .openapi('MatchMultiple')

const ProductSchema = z
  .object({
    brandId: z
      .int32()
      .default(1234567)
      .openapi({
        description:
          "Marketplace's Brand ID that the product belongs to, configured in the Catalog. It should be the brand chosen for the received SKU to be matched with. The brandId is already mapped through the Get Suggestions API. This field is nulled when the inserted value is 0.",
      }),
    categoryId: z
      .int32()
      .default(12)
      .openapi({
        description:
          "Marketplace's Category ID that the product belongs to, configured in the Catalog. It should be the category chosen for the received SKU to be matched with. The `categoryId` is already mapped through the [Get SKU Suggestion by ID](https://developers.vtex.com/vtex-rest-api/reference/getsuggestion). You can choose to keep the same suggested `categoryID`, or overwrite it with another value in this request. This field is nulled when the inserted value is 0.",
      }),
    description: z
      .string()
      .default('Description of the product, how it will appear on the marketplace.')
      .openapi({ description: "Product's description." }),
    name: z
      .string()
      .default('Book')
      .openapi({ description: 'Name of the product that will be matched.' }),
    specifications: z
      .string()
      .nullable()
      .default('')
      .openapi({
        description: 'This field is optional. Add here any product specifications or details.',
      }),
  })
  .openapi({
    required: ['name', 'description', 'categoryId', 'brandId', 'specifications'],
    title: 'Product',
  })
  .openapi('Product')

const SpecificationsSchema = z
  .object({
    Embalagem: z
      .string()
      .openapi({ description: "Packaging specifications. Should include package's weight." }),
  })
  .openapi({ example: { Embalagem: '3 kg' }, required: ['Embalagem'], title: 'Specifications' })
  .openapi('Specifications')

const SkuSchema = z
  .object({
    eans: z
      .array(z.string())
      .nullable()
      .default(['12345678901213'])
      .openapi({ description: 'SKU reference code.' }),
    height: z.int32().default(10).openapi({ description: 'Height of the SKU.' }),
    images: ImagesSchema,
    length: z.int32().default(10).openapi({ description: 'Length of the SKU.' }),
    measurementUnit: z
      .string()
      .nullable()
      .default('un')
      .openapi({
        description:
          "Measurement unit that should be used for this SKU. If this information doesn't apply, you should use the default value un.",
      }),
    name: z.string().default('').openapi({ description: '' }),
    refId: z.string().nullable().default('1234').openapi({ description: 'SKU reference code.' }),
    specifications: SpecificationsSchema,
    unitMultiplier: z
      .int32()
      .default(1)
      .openapi({
        description:
          "Unit multiplier for this SKU. If this information doesn't apply, you should use the default value 1.",
      }),
    weight: z.int32().default(100).openapi({ description: 'Weight of the SKU.' }),
    width: z.int32().default(20).openapi({ description: 'Width of the SKU.' }),
  })
  .openapi({
    example: {
      eans: ['12345678901213'],
      height: 1,
      images: [{ 'imagem1.jpg': 'imageurl.example' }],
      length: 1,
      measurementUnit: 'un',
      name: 'Sku exemplo',
      refId: null,
      specifications: { Embalagem: '3 kg' },
      unitMultiplier: 1,
      weight: 1,
      width: 1,
    },
    required: [
      'name',
      'eans',
      'refId',
      'height',
      'width',
      'length',
      'weight',
      'images',
      'unitMultiplier',
      'measurementUnit',
      'specifications',
    ],
    title: 'SKU',
  })
  .openapi('Sku')

const MatchRequestSchema = z
  .object({
    matchType: z
      .string()
      .default('itemMatch')
      .openapi({
        description:
          "Define the action you want to apply to each SKU. Values include: \n\n1. `newproduct`: match the SKU as a new product. \n\n2. `itemMatch`: associate the received SKU to an existing SKU. \n\n3. `productMatch`: associate the received SKU to an existing product. \n\n4. `deny`: deny the received SKU. \n\n5. `pending`: the received SKU requires attention. \n\n6. `incomplete`: the received SKU is lacking information to be matched. \n\n7. `insufficientScore`: the score given by the Matcher to this received SKU doesn't qualify it to be matched. \n\nNote that  if the autoApprove setting is enabled, the SKUs will be approved, regardless of the Score.",
        title: 'Match Type',
      }),
    matcherId: z
      .string()
      .default('vtex-matcher')
      .openapi({
        description:
          "Identifies the matching entity. It can be either VTEX's matcher, or an external matcher developed by partners, for example. The `matcherId`'s value can be obtained through the [Get SKU Suggestion by ID](https://developers.vtex.com/vtex-rest-api/reference/getsuggestion) endpoint.",
      }),
    product: ProductSchema.exactOptional(),
    productRef: z
      .string()
      .nullable()
      .default('')
      .exactOptional()
      .openapi({
        description:
          'In `productMatch` actions, fill in this field on your request to match the item to an existing product in the marketplace.',
      }),
    score: z
      .string()
      .default('80')
      .openapi({
        description:
          'Matcher rates received SKUs by correlating the data sent by sellers, to existing fields in the marketplace. The calculation of these scores determines whether the product has been: \n\n`Approved`: score equal to or greater than 80 points. \n\n`Pending`: from 31 to 79 points.\n\n`Denied`: from 0 to 30 points. \n\nNote that  if the autoApprove setting is enabled, the SKUs will be approved, regardless of the Score.',
      }),
    sku: SkuSchema.exactOptional(),
    skuRef: z
      .string()
      .nullable()
      .default('')
      .exactOptional()
      .openapi({
        description:
          'In `itemMatch` actions, fill in this field on your request to match the item to an existing SKU in the marketplace.',
      }),
  })
  .openapi({
    example: {
      matchType: 'itemMatch',
      matcherId: '{{matcherid}}',
      product: {
        brandId: 1234567,
        categoryId: 12,
        description: 'Descricao exemplo',
        name: 'Produto exemplo',
        specifications: null,
      },
      productRef: '{{productRef}}(should be specified when match is a product match)',
      score: '{{score}} (must be decimal)',
      sku: {
        eans: ['12345678901213'],
        height: 1,
        images: [{ 'imagem1.jpg': 'imageurl.example' }],
        length: 1,
        measurementUnit: 'un',
        name: 'Sku exemplo',
        refId: null,
        specifications: { Embalagem: '3 kg' },
        unitMultiplier: 1,
        weight: 1,
        width: 1,
      },
      skuRef: '{{skuid}}(should be specifed when match is a sku match)',
    },
    required: ['matcherId', 'score', 'matchType'],
    title: '',
  })
  .openapi('MatchRequest')

const MatcherSchema = z
  .object({
    Description: z
      .string()
      .nullable()
      .default(null)
      .exactOptional()
      .openapi({
        description: 'Insert in this field any notes about the approval. This field is optional.',
      }),
    IsActive: z
      .boolean()
      .default(true)
      .openapi({
        description: 'Whether the matcher is active in the account (`true`), or not (`false`).',
      }),
    MatcherId: z
      .string()
      .default('vtex-matcher')
      .openapi({
        description:
          "Identifies the matching entity. It can be either VTEX's matcher, or an external matcher developed by partners, for example. The `matcherId`'s value can be obtained through the [Get SKU Suggestion by ID](https://developers.vtex.com/vtex-rest-api/reference/getsuggestion) endpoint.",
      }),
    UpdatesNotificationEndpoint: z
      .string()
      .nullable()
      .default(null)
      .openapi({
        description:
          'The Received SKUs module uses this endpoint to send updates about a suggestion, to the chosen Matcher.',
      }),
    'hook-base-address': z
      .string()
      .default('http://simple-suggestion-matcher.vtex.com.br')
      .openapi({
        description:
          "The chosen Matcher's url. It is the endpoint that the Received SKUs module calls, to send new suggestions for the Matcher's review.",
      }),
  })
  .openapi({
    required: ['MatcherId', 'hook-base-address', 'IsActive', 'UpdatesNotificationEndpoint'],
    title: 'Matcher',
  })
  .openapi('Matcher')

const ProductSpecificationSchema = z
  .object({
    fieldName: z
      .string()
      .default('Fabric type')
      .exactOptional()
      .openapi({ description: "Name of the product specification field. Example: 'Fabric'." }),
    fieldValues: z
      .array(
        z
          .string()
          .default('Cotton')
          .openapi({ description: 'Value of the product specification field.' }),
      )
      .exactOptional()
      .openapi({ description: "Value of the product specification field. Example: 'Cotton'." }),
  })
  .openapi({
    example: { fieldName: 'Color', fieldValues: ['Red', 'Green'] },
    title: 'Product Specification',
    required: [],
  })
  .openapi('ProductSpecification')

const PutselleraccountconfigRequestSchema = z
  .object({
    mapping: z
      .object({})
      .nullable()
      .default({
        'Choose size': 'Size',
        'Choose type': 'Type',
        'Choose voltage': 'Voltage',
        'Choose volume': 'Volume',
      })
      .openapi({
        description:
          'Mapping of SKU and product Specifications. This object should be sent in the following format for all fields you wish to map:\n\n{specificationName}:{specificationValue},\n\nExample:\n\nChoose voltage: Voltage,\n\nChoose size: Size',
      }),
    matchFlux: z
      .string()
      .default('autoApprove')
      .openapi({
        description:
          'This field determines the type of approval configuration applied to SKUs received  from a seller. The possible values include: \n\n- `default` where the Matcher reviews the SKU, and approves it based on its score \n\n- `manual` for manual approvals through the Received SKU UI or Match API \n\n- `autoApprove` for every SKU received from a given seller to be approved automatically, regardless of the Matcher Score.',
      }),
    sellerId: z
      .string()
      .default('seller123')
      .openapi({
        description:
          'A string that identifies the seller in the marketplace. This ID must be created by the marketplace.',
      }),
  })
  .openapi({
    required: ['sellerId', 'mapping', 'matchFlux'],
    title: 'PutselleraccountconfigRequest',
  })
  .openapi('PutselleraccountconfigRequest')

const SkuSpecificationSchema = z
  .object({
    fieldName: z
      .string()
      .default('color')
      .exactOptional()
      .openapi({ description: "Name of the SKU specification field. Example: 'Color'." }),
    fieldValues: z
      .array(
        z.string().default('Red').openapi({ description: 'Value of the SKU specification field.' }),
      )
      .default(['Red'])
      .exactOptional()
      .openapi({
        description: "Array with values of the SKU specification field. Example: 'Red'.",
      }),
  })
  .default({ fieldName: 'Color', fieldValues: ['Red', 'Green'] })
  .openapi({ title: 'skuSpecification', required: [] })
  .openapi('SkuSpecification')

const SaveSuggestionRequestSchema = z
  .object({
    AvailableQuantity: z.int32().openapi({ description: '' }),
    BrandName: z
      .string()
      .openapi({
        description:
          'Name of the brand to which this SKU belongs. It must match the brand created in the marketplace.',
      }),
    CategoryFullPath: z
      .string()
      .openapi({
        description:
          "Full path to the SKU's category. It should be written as {department}/{category}. For example: if the department is **Appliances** and the category is **Oven**, the full path should be 'Appliances/Oven'.",
      }),
    EAN: z
      .string()
      .default('EAN10')
      .openapi({ description: 'SKU reference code. Mandatory if the RefId is not informed.' }),
    Height: z.int().default(10).openapi({ description: 'Height of the SKU.' }),
    Images: z
      .array(ImageSchema)
      .openapi({ description: 'Array containing the URLs and names the SKU images.' }),
    Length: z.int().default(10).openapi({ description: 'Length of the SKU.' }),
    MeasurementUnit: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Measurement unit that should be used for this SKU. If this information doesn't apply, you should use the default value `un`.",
      }),
    Pricing: z
      .object({
        Currency: z.string().exactOptional(),
        CurrencySymbol: z.string().exactOptional(),
        SalePrice: z.int32().exactOptional(),
      })
      .openapi({ description: '', required: [] }),
    ProductDescription: z
      .string()
      .openapi({
        description:
          'Product Description containing the main information about the product (not the SKU).',
      }),
    ProductId: z
      .string()
      .default('1234')
      .openapi({ description: "Product ID in seller's account." }),
    ProductName: z
      .string()
      .default('')
      .openapi({
        description: 'Name of the suggested product. This field has a limit of 150 characters.',
      }),
    ProductSpecifications: z
      .array(ProductSpecificationSchema)
      .exactOptional()
      .openapi({
        description: 'Array containing the names and values of the product specifications.',
      }),
    RefId: z
      .string()
      .default('REF10')
      .openapi({ description: 'SKU reference code. Mandotory if the EAN is not informed.' }),
    SellerId: z
      .string()
      .default('1')
      .openapi({
        description:
          'ID of the seller in the marketplace. This ID must be created by the marketplace and informed to the seller before the integration is built.',
      }),
    SellerStockKeepingUnitId: z
      .int32()
      .exactOptional()
      .openapi({ description: 'ID of the SKU registered in the seller.' }),
    SkuName: z.string().openapi({ description: 'Name of the suggested SKU.' }),
    SkuSpecifications: z
      .array(SkuSpecificationSchema)
      .exactOptional()
      .openapi({ description: 'Array containing the names and values of the SKU specifications.' }),
    UnitMultiplier: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          "Unit multiplier for this SKU. If this information doesn't apply, you should use the default value `1`.",
      }),
    Weight: z.int().default(100).openapi({ description: 'Weight of the SKU in grams.' }),
    Width: z.int().default(10).openapi({ description: 'Width of the SKU.' }),
  })
  .default({
    AvailableQuantity: 111,
    BrandName: 'Brand 1',
    CategoryFullPath: 'Category 1',
    EAN: 'EAN123',
    Height: 1,
    Images: [
      {
        imageName: 'Principal',
        imageUrl: 'https://i.pinimg.com/originals/2d/96/4a/2d964a6bf37d9224d0615dc85fccdd62.jpg',
      },
    ],
    Length: 1,
    MeasurementUnit: 'un',
    Pricing: { Currency: 'BRL', CurrencySymbol: 'R$', SalePrice: 399 },
    ProductDescription: 'sample',
    ProductId: '321',
    ProductName: 'Product sample',
    ProductSpecifications: [{ fieldName: 'prodspec1', fieldValues: ['value1', 'value2'] }],
    RefId: 'REFID123',
    SellerId: '123',
    SellerStockKeepingUnitId: 567,
    SkuName: 'Sku sample',
    SkuSpecifications: [{ fieldName: 'skuspec1', fieldValues: ['value1', 'value2'] }],
    UnitMultiplier: 1,
    Weight: 1,
    Width: 1,
  })
  .openapi({
    required: [
      'ProductName',
      'ProductId',
      'ProductDescription',
      'BrandName',
      'SkuName',
      'SellerId',
      'Height',
      'Width',
      'Length',
      'Weight',
      'Updated',
      'RefId',
      'CategoryFullPath',
      'Images',
      'EAN',
      'AvailableQuantity',
      'Pricing',
    ],
    title: 'SaveSuggestionRequest',
  })
  .openapi('SaveSuggestionRequest')

const ScoreSchema = z
  .object({
    Approve: z
      .int32()
      .default(80)
      .openapi({
        description:
          'Insert in this field the desired minimum score to approve SKUs. If this field is set as 99, it means all approvals will be made manually.',
      }),
    Reject: z
      .int32()
      .default(30)
      .openapi({ description: 'Insert in this field the desired maximum score to reject SKUs.' }),
  })
  .openapi({
    description:
      'Matcher rates received SKUs by comparing the data sent by sellers to existing fields in the marketplace. The calculation of these scores determines whether the product has been: `Approved` or `Denied`.',
    required: ['Approve', 'Reject'],
    title: 'Score',
  })
  .openapi('Score')

const SaveaccountconfigRequestSchema = z
  .object({
    MatchFlux: z
      .string()
      .default('autoApprove')
      .openapi({
        description:
          'This field determines the type of approval configuration applied to SKUs received  from a seller. The possible values include: \n\n- `default` where the Matcher reviews the SKU, and approves it based on its score \n\n- `manual` for manual approvals through the Received SKU UI or Match API \n\n- `autoApprove` for every SKU received from a given seller to be approved automatically, regardless of the Matcher Score.',
      }),
    Matchers: z
      .array(MatcherSchema)
      .openapi({ description: 'Matchers for approving and rejecting SKUs received from sellers.' }),
    Score: ScoreSchema,
    SpecificationsMapping: z
      .array(
        z
          .string()
          .default(
            '                    "SellerId": "sellerID",\n                    "Mapping": {\n                        "Choose voltage": "Voltage",\n                        "Choose size": "Size",\n                        "Choose volume": "Volume",\n                        "Choose type": "Type"\n                    }',
          ),
      )
      .openapi({ description: 'This attribute maps product and SKU specifications.' }),
  })
  .openapi({
    example: {
      MatchFlux: 'AutoApprove',
      Matchers: [
        {
          Description: null,
          IsActive: true,
          MatcherId: 'vtex-matcher',
          UpdatesNotificationEndpoint: null,
          'hook-base-address': 'http://simple-suggestion-matcher.vtex.com.br',
        },
      ],
      Score: { Approve: 80, Reject: 30 },
      SpecificationsMapping: [],
    },
    required: ['Score', 'Matchers', 'SpecificationsMapping', 'MatchFlux'],
    title: 'SaveaccountconfigRequest',
  })
  .openapi('SaveaccountconfigRequest')

const SaveautoapproveforaccountRequestSchema = z
  .object({
    Enabled: z
      .boolean()
      .default(true)
      .openapi({
        description:
          'Insert `true` if you wish to activate the autoapprove rule for an entire marketplace account. Insert `false` if you wish to deactivate it. Be aware that once enabling the setting through this request, all received SKUs will be automatically approved on your store, regardless of the seller, or the Matcher Score.',
      }),
  })
  .openapi({ required: ['Enabled'], title: 'SaveautoapproveforaccountRequest' })
  .openapi('SaveautoapproveforaccountRequest')

const SaveautoapproveforaccountsellerRequestSchema = z
  .object({
    Enabled: z
      .boolean()
      .default(true)
      .openapi({
        description:
          'Insert `true` if you wish to activate the autoapprove rule for that specific seller account. Insert `false` if you wish to deactivate it. Be aware that once enabling the setting through this request, all SKUs received from this seller will be automatically approved on your store regardless of the Matcher Score.',
      }),
  })
  .openapi({ required: ['Enabled'], title: 'SaveautoapproveforaccountsellerRequest' })
  .openapi('SaveautoapproveforaccountsellerRequest')

const AppKeySecurityScheme = { in: 'header', name: 'X-VTEX-API-AppKey', type: 'apiKey' }

const AppTokenSecurityScheme = { in: 'header', name: 'X-VTEX-API-AppToken', type: 'apiKey' }

export const getSuggestionsRoute = createRoute({
  method: 'get',
  path: '/suggestions',
  tags: ['Get Suggestions'],
  summary: 'Get all SKU suggestions',
  description:
    "This endpoint retrieves a list of all SKUs sent by the seller for the Marketplace's approval. Marketplace operators should use this endpoint whenever they want to check the full list of received SKUs and their  information. \n\nNote that all the information sent by the seller will be in the [content] object. All remaining information in this endpoint's response is given by the Matcher. \n\nMatcher rates received SKUs by correlating the data sent by sellers, to existing fields in the marketplace. The calculation of these scores determines whether the product has been: \n\n`Approved`: score equal to or greater than 80 points. \n\n`Pending`: from 31 to 79 points.\n\n`Denied`: from 0 to 30 points. \n\nNote that  if the autoApprove setting is enabled, the SKUs will be approved, regardless of the Score.",
  operationId: 'Getsuggestions',
  request: {
    query: z.object({
      accountName: z
        .string()
        .default('apiexamples')
        .openapi({
          param: {
            description: 'Name of the VTEX account. Used as part of the URL',
            in: 'query',
            name: 'accountName',
            required: true,
            schema: { default: 'apiexamples', type: 'string' },
          },
        }),
      q: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'This field allows you to customize your search. You can fill in this query param if you want to narrow down your search using the available filters on Received SKU modules.',
            explode: true,
            in: 'query',
            name: 'q',
            required: false,
            schema: { example: '', type: 'string' },
            style: 'form',
          },
          example: '',
        }),
      type: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'This field allows users to filter SKU suggestions, by searching only the new suggestions that were just sent, and suggestions that have already been sent, but were updated. Possible values for this field include `new` and `update`.',
            explode: true,
            in: 'query',
            name: 'type',
            required: false,
            schema: { example: 'new', type: 'string' },
            style: 'form',
          },
          example: 'new',
        }),
      seller: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A string that identifies the seller in the marketplace. This ID must be created by the marketplace and informed to the seller so it can call this endpoint.',
            explode: true,
            in: 'query',
            name: 'seller',
            required: false,
            schema: { example: '', type: 'string' },
            style: 'form',
          },
          example: '',
        }),
      status: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Narrow down you search, filtering by status. Values allowed on this field include: `accepted`, `pending` and `denied.`',
            explode: true,
            in: 'query',
            name: 'status',
            required: false,
            schema: { example: 'accepted', type: 'string' },
            style: 'form',
          },
          example: 'accepted',
        }),
      hasmapping: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "This field allows you to filter SKUs that have mapping or not. Insert `true` to filter SKUs that have mapping, or `false` to retrieve SKUs that aren't mapped.",
            explode: true,
            in: 'query',
            name: 'hasmapping',
            required: false,
            schema: { example: 'true', type: 'string' },
            style: 'form',
          },
          example: 'true',
        }),
      matcherid: z
        .string()
        .default('vtex-matcher')
        .exactOptional()
        .openapi({
          param: {
            description:
              "Identifies the matching entity. It can be either VTEX's matcher, or an external matcher developed by partners, for example. The `matcherId`'s value can be obtained through the [Get SKU Suggestion by ID](https://developers.vtex.com/vtex-rest-api/reference/getsuggestion) endpoint.",
            explode: true,
            in: 'query',
            name: 'matcherid',
            required: false,
            schema: { default: 'vtex-matcher', type: 'string' },
            style: 'form',
          },
        }),
      _from: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(1),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            description:
              'Define your pagination range, by adding the pagination starting value. Values should be bigger than 0, with a maximum of 50 records per page.',
            explode: true,
            in: 'query',
            name: '_from',
            required: false,
            schema: { default: 1, format: 'int32', minimum: 1, type: 'integer' },
            style: 'form',
          },
        }),
      _to: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(1),
        )
        .default(50)
        .exactOptional()
        .openapi({
          param: {
            description:
              'Define your pagination range, by adding the pagination ending value. Values should be bigger than 0, with a maximum of 50 records per page.',
            explode: true,
            in: 'query',
            name: '_to',
            required: false,
            schema: { default: 50, format: 'int32', minimum: 1, type: 'integer' },
            style: 'form',
          },
        }),
    }),
    headers: z.object({
      Accept: z
        .string()
        .default('application/json')
        .openapi({
          param: {
            description:
              'HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.',
            in: 'header',
            name: 'Accept',
            required: true,
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
      'Content-Type': z
        .string()
        .default('application/json')
        .openapi({
          param: {
            description: 'Type of the content being sent.',
            in: 'header',
            name: 'Content-Type',
            required: true,
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK', headers: z.object({}) } },
})

export const getSuggestionsConfigurationRoute = createRoute({
  method: 'get',
  path: '/suggestions/configuration',
  tags: ['SKU Approval Settings'],
  summary: "Get Account's Approval Settings",
  description:
    "This endpoint retrieves the current approval settings of a marketplace's Received SKUs module. Its response includes: \n\n- `Score`: Matcher scores for approving and rejecting SKUs received from sellers. \n\n- `Matchers`: All Matchers configured on the marketplace, and their respective details. \n\n- `SpecificationsMapping`: Mapping of product and SKU specifications, per seller. \n\n- `MatchFlux`: This field determines the type of approval configuration applied to SKUs received from a seller. \n\nThe possible values include: \n\n-`default`, where the Matcher reviews the SKU, and approves it based on its score. \n\n-`manual`, for manual approvals through the Received SKU UI, or Match API. \n\n-`autoApprove`, for every SKU received from a given seller to be approved automatically, regardless of their Matcher Score.",
  operationId: 'Getaccountconfig',
  request: {
    query: z.object({
      accountName: z
        .string()
        .default('apiexamples')
        .openapi({
          param: {
            description:
              'Name of the VTEX account that belongs to the marketplace. All data extracted, and changes added will be posted into this account.',
            in: 'query',
            name: 'accountName',
            required: true,
            schema: { default: 'apiexamples', type: 'string' },
          },
        }),
    }),
    headers: z.object({
      Accept: z
        .string()
        .default('application/json')
        .openapi({
          param: {
            description:
              'HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.',
            in: 'header',
            name: 'Accept',
            required: true,
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
      'Content-Type': z
        .string()
        .default('application/json')
        .openapi({
          param: {
            description: 'Describes the type of the content being sent.',
            in: 'header',
            name: 'Content-Type',
            required: true,
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              MatchFlux: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'This field determines the type of approval configuration applied to SKUs received from a seller.',
                }),
              Matchers: z
                .array(z.any())
                .exactOptional()
                .openapi({
                  description:
                    'All Matchers configured on the marketplace, and their respective details.',
                }),
              Rules: z.object({}).exactOptional().openapi({ description: 'Items and products.' }),
              Score: z
                .object({})
                .exactOptional()
                .openapi({
                  description:
                    'Matcher scores for approving and rejecting SKUs received from sellers.',
                }),
              SpecificationsMapping: z
                .array(z.any())
                .exactOptional()
                .openapi({ description: 'Mapping of product and SKU specifications, per seller.' }),
            })
            .openapi({ required: [] }),
          example: {
            MatchFlux: 'Default',
            Matchers: [
              {
                Description: null,
                IsActive: true,
                MatcherId: 'vtex-matcher',
                UpdatesNotificationEndpoint: null,
                'hook-base-address': 'http://portal.vtexinternal.com/api/ssm/hooks',
              },
            ],
            Rules: { Item: [], Product: [] },
            Score: { Approve: 80, Reject: 30 },
            SpecificationsMapping: [],
          },
        },
      },
      headers: z.object({}),
    },
  },
})

export const putSuggestionsConfigurationRoute = createRoute({
  method: 'put',
  path: '/suggestions/configuration',
  tags: ['SKU Approval Settings'],
  summary: "Save Account's Approval Settings",
  description:
    'Marketplaces use this endpoint to create or update approval settings on their Received SKUs module. \n\nThe request includes all the details necessary to implement the chosen approval settings.',
  operationId: 'Saveaccountconfig',
  request: {
    query: z.object({
      accountName: z
        .string()
        .default('apiexamples')
        .openapi({
          param: {
            description:
              'Name of the VTEX account that belongs to the marketplace. All data extracted, and changes added will be posted into this account.',
            in: 'query',
            name: 'accountName',
            required: true,
            schema: { default: 'apiexamples', type: 'string' },
          },
        }),
    }),
    headers: z.object({
      Accept: z
        .string()
        .default('application/json')
        .openapi({
          param: {
            description:
              'HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.',
            in: 'header',
            name: 'Accept',
            required: true,
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
      'Content-Type': z
        .string()
        .default('application/json')
        .openapi({
          param: {
            description: 'Describes the type of the content being sent.',
            in: 'header',
            name: 'Content-Type',
            required: true,
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
    }),
    body: {
      description: '',
      content: { 'application/json': { schema: SaveaccountconfigRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              MatchFlux: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    "Type of approval configuration that apply to received SKUs sent by sellers. The possible values are: \n\n`default`: the matcher approves the SKU. \n\n`manual`: manual SKU's approvals. \n\n`AutoApprove`: automatic SKU's approvals.",
                }),
              Matchers: z
                .object({
                  Description: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'The note inserted on the request body.' }),
                  IsActive: z
                    .boolean()
                    .exactOptional()
                    .openapi({
                      description:
                        'Whether the matcher is active in the account (`true`), or not (`false`).',
                    }),
                  MatcherId: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description:
                        "Identifies the matching entity. It can be either [VTEX's matcher](https://help.vtex.com/en/tutorial/understanding-vtex-matcher-scoring), or an external matcher.",
                    }),
                  UpdatesNotificationEndpoint: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description:
                        "The [received SKUs](https://help.vtex.com/en/tutorial/cataloging-received-skus--tutorials_396) module calls this endpoint for matcher's suggestions updates.",
                    }),
                  'hook-base-address': z
                    .string()
                    .exactOptional()
                    .openapi({ description: "The given Matcher's URL." }),
                })
                .exactOptional()
                .openapi({
                  description:
                    '[Matchers](https://help.vtex.com/en/tutorial/understanding-vtex-matcher-scoring) configurations for approving and rejecting [received SKUs](https://help.vtex.com/en/tutorial/cataloging-received-skus--tutorials_396) sent by sellers.',
                  required: [],
                }),
              Rules: z
                .object({
                  Item: z
                    .array(z.int().openapi({ description: 'SKU ID.' }))
                    .exactOptional()
                    .openapi({ description: "SKUs' ID." }),
                  Product: z
                    .array(z.string().openapi({ description: 'Product name.' }))
                    .exactOptional()
                    .openapi({ description: "Product's name." }),
                })
                .exactOptional()
                .openapi({
                  description: 'Items and products that belong to sellers.',
                  required: [],
                }),
              Score: z
                .object({
                  Approve: z
                    .int()
                    .exactOptional()
                    .openapi({ description: 'Score to approve SKUs sent by sellers.' }),
                  Reject: z
                    .int()
                    .exactOptional()
                    .openapi({ description: 'Score to reject SKUs sent by sellers.' }),
                })
                .exactOptional()
                .openapi({
                  description:
                    "[Matcher's rates](https://help.vtex.com/en/tutorial/understanding-vtex-matcher-scoring) to approve or reject [received SKUs](https://help.vtex.com/en/tutorial/cataloging-received-skus--tutorials_396) sent by sellers.",
                  example: { Approve: 80, Reject: 30 },
                  required: [],
                }),
              SpecificationsMapping: z
                .object({
                  Mapping: z
                    .object({})
                    .exactOptional()
                    .openapi({
                      description:
                        'The attributes and values mapped between the marketplace and the seller.',
                    }),
                  SellerId: z.string().exactOptional().openapi({ description: 'The Seller ID.' }),
                })
                .exactOptional()
                .openapi({
                  description:
                    "This attribute maps product and SKU's specifications between the marketplace and the seller.",
                  required: [],
                }),
            })
            .openapi({
              example: {
                MatchFlux: 'AutoApprove',
                Matchers: [
                  {
                    Description: 'Note',
                    IsActive: true,
                    MatcherId: 'vtex-matcher',
                    UpdatesNotificationEndpoint: 'notification.endpoint',
                    'hook-base-address': 'http://simple-suggestion-matcher.vtex.com.br',
                  },
                ],
                Rules: { Item: [1], Product: ['Shirt'] },
                Score: { Approve: 80, Reject: 30 },
                SpecificationsMapping: [
                  { Mapping: { Yellow: 'Light yellow' }, SellerId: 'Store1' },
                ],
              },
              required: [],
            }),
        },
      },
      headers: z.object({}),
    },
  },
})

export const getSuggestionsConfigurationAutoapprovalToggleRoute = createRoute({
  method: 'get',
  path: '/suggestions/configuration/autoapproval/toggle',
  tags: ['SKU Approval Settings'],
  summary: 'Get autoApprove Status in Account Settings',
  description:
    'This endpoint can be used to check whether the autoapprove setting is active or not, for a specific seller. \n\nIf the response is `true`, the autoapprove setting is active. If the response is `false`, it is inactive.',
  operationId: 'GetautoApprovevaluefromconfig',
  request: {
    query: z.object({
      sellerId: z
        .string()
        .default('seller123')
        .openapi({
          param: {
            description:
              'A string that identifies the seller in the marketplace. This ID must be created by the marketplace.',
            in: 'query',
            name: 'sellerId',
            required: true,
            schema: { default: 'seller123', type: 'string' },
            style: 'form',
          },
        }),
      accountName: z
        .string()
        .default('apiexamples')
        .openapi({
          param: {
            description:
              'Name of the VTEX account that belongs to the marketplace. All data extracted, and changes added will be posted into this account.',
            in: 'query',
            name: 'accountName',
            required: true,
            schema: { default: 'apiexamples', type: 'string' },
          },
        }),
    }),
    headers: z.object({
      Accept: z
        .string()
        .default('application/json')
        .openapi({
          param: {
            description:
              'HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.',
            in: 'header',
            name: 'Accept',
            required: true,
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
      'Content-Type': z
        .string()
        .default('application/json')
        .openapi({
          param: {
            description: 'Describes the type of the content being sent.',
            in: 'header',
            name: 'Content-Type',
            required: true,
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              Enabled: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'If the auto-approve setting is active for a given seller (`true`) or not (`false`).',
                }),
            })
            .openapi({ required: [] }),
          example: { Enabled: false },
        },
      },
    },
  },
})

export const putSuggestionsConfigurationAutoapprovalToggleRoute = createRoute({
  method: 'put',
  path: '/suggestions/configuration/autoapproval/toggle',
  tags: ['SKU Approval Settings'],
  summary: "Activate autoApprove in Marketplace's Account",
  description:
    "This endpoint enables the autoapprove rule to a marketplace's whole Received SKUs module. Once enabling the rule, received SKUs will be automatically approved on your store, regardless of the seller. \n\n For the autoapprove rule to work as expected, the approval [Matcher score](https://help.vtex.com/en/tutorial/entendendo-a-pontuacao-do-vtex-matcher--tutorials_424) should be set up as 80 (default value), but you can configure a different number through the field `Score` in [Save Account's Approval Settings](https://developers.vtex.com/vtex-rest-api/reference/saveaccountconfig).",
  operationId: 'Saveautoapproveforaccount',
  request: {
    query: z.object({
      accountName: z
        .string()
        .default('apiexamples')
        .openapi({
          param: {
            description:
              'Name of the VTEX account that belongs to the marketplace. All data extracted, and changes added will be posted into this account.',
            in: 'query',
            name: 'accountName',
            required: true,
            schema: { default: 'apiexamples', type: 'string' },
          },
        }),
    }),
    headers: z.object({
      Accept: z
        .string()
        .default('application/json')
        .openapi({
          param: {
            description:
              'HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.',
            in: 'header',
            name: 'Accept',
            required: true,
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
      'Content-Type': z
        .string()
        .default('application/json')
        .openapi({
          param: {
            description: 'Describes the type of the content being sent.',
            in: 'header',
            name: 'Content-Type',
            required: true,
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
    }),
    body: {
      description: '',
      content: {
        'application/json': {
          schema: SaveautoapproveforaccountRequestSchema,
          example: { Enabled: true },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              Enabled: z
                .boolean()
                .exactOptional()
                .openapi({
                  description: 'If the auto-approve setting is active (`true`) or not (`false`).',
                }),
            })
            .openapi({ required: [] }),
          example: { Enabled: false },
        },
      },
      headers: z.object({}),
    },
  },
})

export const putSuggestionsConfigurationAutoapprovalToggleSellerSellerIdRoute = createRoute({
  method: 'put',
  path: '/suggestions/configuration/autoapproval/toggle/seller/{sellerId}',
  tags: ['SKU Approval Settings'],
  summary: 'Activate autoApprove Setting for a Seller',
  description:
    'This endpoint enables the auto approve setting to received SKUs from a specific seller. Be aware that once enabling the rule through this request, all received SKUs from that seller will be automatically approved on your store, regardless of the Matcher Score.',
  operationId: 'Saveautoapproveforaccountseller',
  request: {
    query: z.object({
      accountName: z
        .string()
        .default('apiexamples')
        .openapi({
          param: {
            description:
              'Name of the VTEX account that belongs to the marketplace. All data extracted, and changes added will be posted into this account.',
            in: 'query',
            name: 'accountName',
            required: true,
            schema: { default: 'apiexamples', type: 'string' },
          },
        }),
    }),
    params: z.object({
      sellerId: z
        .string()
        .default('seller123')
        .openapi({
          param: {
            description:
              'A string that identifies the seller in the marketplace. This ID must be created by the marketplace.',
            in: 'path',
            name: 'sellerId',
            required: true,
            schema: { default: 'seller123', type: 'string' },
            style: 'simple',
          },
        }),
    }),
    headers: z.object({
      Accept: z
        .string()
        .default('application/json')
        .openapi({
          param: {
            description:
              'HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.',
            in: 'header',
            name: 'Accept',
            required: true,
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
      'Content-Type': z
        .string()
        .default('application/json')
        .openapi({
          param: {
            description: 'Describes the type of the content being sent.',
            in: 'header',
            name: 'Content-Type',
            required: true,
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
    }),
    body: {
      description: '',
      content: {
        'application/json': {
          schema: SaveautoapproveforaccountsellerRequestSchema,
          example: { Enabled: true },
        },
      },
      required: true,
    },
  },
  responses: { 200: { description: 'OK', headers: z.object({}) } },
})

export const getSuggestionsConfigurationSellerSellerIdRoute = createRoute({
  method: 'get',
  path: '/suggestions/configuration/seller/{sellerId}',
  tags: ['SKU Approval Settings'],
  summary: "Get Seller's Approval Settings",
  description:
    'This endpoint retrieves the current Received SKUs approval settings applied to a specific seller. Its response includes: \n\n- `sellerId`: A string that identifies the seller in the marketplace. \n\n- `accountId`: Marketplace’s account ID. \n\n- `accountName`: Marketplace’s account name. \n\n- `mapping`: Mapping of SKU and product Specifications. \n\n- `matchFlux`: This field determines the type of approval configuration applied to SKUs received  from a seller. \n\nThe possible values include:  \n\n-`default`, where the Matcher reviews the SKU, and approves it based on its score. \n\n-`manual`, for manual approvals through the Received SKU UI and Match API. \n\n-`autoApprove`, for every SKU received from a given seller to be approved automatically, regardless of the Matcher Score.',
  operationId: 'Getselleraccountconfig',
  request: {
    query: z.object({
      accountName: z
        .string()
        .default('apiexamples')
        .openapi({
          param: {
            description:
              'Name of the VTEX account that belongs to the marketplace. All data extracted, and changes added will be posted into this account.',
            in: 'query',
            name: 'accountName',
            required: true,
            schema: { default: 'apiexamples', type: 'string' },
          },
        }),
    }),
    params: z.object({
      sellerId: z
        .string()
        .default('seller123')
        .openapi({
          param: {
            description:
              'A string that identifies the seller in the marketplace. This ID must be created by the marketplace.',
            in: 'path',
            name: 'sellerId',
            required: true,
            schema: { default: 'seller123', type: 'string' },
            style: 'simple',
          },
        }),
    }),
    headers: z.object({
      Accept: z
        .string()
        .default('application/json')
        .openapi({
          param: {
            description:
              'HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.',
            in: 'header',
            name: 'Accept',
            required: true,
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
      'Content-Type': z
        .string()
        .default('application/json')
        .openapi({
          param: {
            description: 'Describes the type of the content being sent.',
            in: 'header',
            name: 'Content-Type',
            required: true,
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK', headers: z.object({}) } },
})

export const putSuggestionsConfigurationSellerSellerIdRoute = createRoute({
  method: 'put',
  path: '/suggestions/configuration/seller/{sellerId}',
  tags: ['SKU Approval Settings'],
  summary: "Save Seller's Approval Settings",
  description:
    'Marketplaces use this endpoint to create or update approval settings to a specific seller, on the Received SKUs module. \n\nThe request includes all the details necessary to implement the chosen approval settings.',
  operationId: 'Putselleraccountconfig',
  request: {
    query: z.object({
      accountName: z
        .string()
        .default('apiexamples')
        .openapi({
          param: {
            description:
              'Name of the VTEX account that belongs to the marketplace. All data extracted, and changes added will be posted into this account.',
            in: 'query',
            name: 'accountName',
            required: true,
            schema: { default: 'apiexamples', type: 'string' },
          },
        }),
    }),
    params: z.object({
      sellerId: z
        .string()
        .default('seller123')
        .openapi({
          param: {
            description:
              'A string that identifies the seller in the marketplace. This ID must be created by the marketplace.',
            in: 'path',
            name: 'sellerId',
            required: true,
            schema: { default: 'seller123', type: 'string' },
            style: 'simple',
          },
        }),
    }),
    headers: z.object({
      Accept: z
        .string()
        .default('application/json')
        .openapi({
          param: {
            description:
              'HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.',
            in: 'header',
            name: 'Accept',
            required: true,
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
      'Content-Type': z
        .string()
        .default('application/json')
        .openapi({
          param: {
            description: 'Describes the type of the content being sent.',
            in: 'header',
            name: 'Content-Type',
            required: true,
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
    }),
    body: {
      description: '',
      content: {
        'application/json': {
          schema: PutselleraccountconfigRequestSchema,
          example: { mapping: null, matchFlux: 'Default', sellerId: '1a' },
        },
      },
      required: true,
    },
  },
  responses: { 200: { description: 'OK', headers: z.object({}) } },
})

export const putSuggestionsMatchesActionActionNameRoute = createRoute({
  method: 'put',
  path: '/suggestions/matches/action/{actionName}',
  tags: ['Match Received SKUs'],
  summary: 'Match Multiple Received SKUs',
  description:
    'This endpoint allows the user to bulk approve, deny, or associate received SKUs. In a single request, you can match up to 25 received SKUs from your sellers.\n\nThrough the `actionName` attribute you can select the operation you want to apply to the received SKU. \n\nActions include: \n\n1. `newproduct`: match the SKU as a new product. \n\n2. `skuassociation`: associate the received SKU to an existing SKU. \n\n3. `productassociation`: associate the received SKU to an existing product. \n\n4. `deny`: deny the received SKU.',
  operationId: 'MatchMultiple',
  request: {
    query: z.object({
      accountName: z
        .string()
        .default('apiexamples')
        .openapi({
          param: {
            description: 'Name of the VTEX account. Used as part of the URL',
            in: 'query',
            name: 'accountName',
            required: true,
            schema: { default: 'apiexamples', type: 'string' },
          },
        }),
    }),
    headers: z.object({
      'Content-Type': z
        .string()
        .default('application/json')
        .openapi({
          param: {
            description: 'Describes the type of the content being sent.',
            in: 'header',
            name: 'Content-Type',
            required: true,
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
      Accept: z
        .string()
        .default('application/json')
        .openapi({
          param: {
            description:
              'HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand',
            in: 'header',
            name: 'Accept',
            required: true,
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      actionName: z
        .string()
        .default('newprodcut')
        .openapi({
          param: {
            description:
              'This field refers to the operation you choose to apply to received SKUs. Values include: newproduct, skuassociation, productassociation or deny.',
            in: 'path',
            name: 'actionName',
            required: true,
            schema: { default: 'newprodcut', type: 'string' },
            style: 'simple',
          },
        }),
    }),
    body: {
      description: '',
      content: {
        'application/json': {
          schema: z.unknown().superRefine((val, ctx) => {
            if (Array.isArray(val)) {
              {
                const Schema = MatchMultipleSchema
                for (let i = 0; i < val.length; i++) {
                  if (!Schema.safeParse(val[i]).success) {
                    ctx.addIssue({ code: 'custom' })
                  }
                }
              }
            }
          }),
        },
      },
      required: true,
    },
  },
  responses: { 200: { description: 'OK', headers: z.object({}) } },
})

export const getSuggestionsSellerIdSellerSkuIdRoute = createRoute({
  method: 'get',
  path: '/suggestions/{sellerId}/{sellerSkuId}',
  tags: ['Get Suggestions'],
  summary: 'Get SKU Suggestion by ID',
  description:
    "This endpoint retrieves the data of a specific SKU sent by the seller, to the marketplace. Marketplaces or external matchers can call this endpoint when they want to check the information about a single SKU. \n\nNote that all the information sent by the seller will be in the [content] object. All remaining information in this endpoint's response is given by the Matcher. \n\nMatcher rates received SKUs by correlating the data sent by sellers, to existing fields in the marketplace. The calculation of these scores determines whether the product has been: \n\n`Approved`: score equal to or greater than 80 points. \n\n`Pending`: from 31 to 79 points.\n\n`Denied`: from 0 to 30 points. \n\nNote that  if the autoApprove setting is enabled, the SKUs will be approved, regardless of the Score.",
  operationId: 'GetSuggestion',
  request: {
    query: z.object({
      accountName: z
        .string()
        .default('apiexamples')
        .openapi({
          param: {
            description: 'Name of the VTEX account. Used as part of the URL',
            in: 'query',
            name: 'accountName',
            required: true,
            schema: { default: 'apiexamples', type: 'string' },
          },
        }),
    }),
    headers: z.object({
      Accept: z
        .string()
        .default('application/json')
        .openapi({
          param: {
            description:
              'HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.',
            in: 'header',
            name: 'Accept',
            required: true,
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
      'Content-Type': z
        .string()
        .default('application/json')
        .openapi({
          param: {
            description: 'Describes the type of the content being sent.',
            in: 'header',
            name: 'Content-Type',
            required: true,
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      sellerId: z
        .string()
        .default('seller123')
        .openapi({
          param: {
            description:
              'A string that identifies the seller in the marketplace. This ID must be created by the marketplace and informed to the seller before the integration is built.',
            in: 'path',
            name: 'sellerId',
            required: true,
            schema: { default: 'seller123', type: 'string' },
            style: 'simple',
          },
        }),
      sellerSkuId: z
        .string()
        .default('1234')
        .openapi({
          param: {
            description:
              'A string that identifies the SKU in the marketplace. This is the ID that the marketplace will use for future references to this SKU, such as price and inventory notifications.',
            in: 'path',
            name: 'sellerSkuId',
            required: true,
            schema: { default: '1234', type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK', headers: z.object({}) } },
})

export const putSuggestionsSellerIdSellerSkuIdRoute = createRoute({
  method: 'put',
  path: '/suggestions/{sellerId}/{sellerSkuId}',
  tags: ['Manage Suggestions'],
  summary: 'Send SKU Suggestion',
  description:
    "This request is used by the seller when it wants to suggest that one of their SKUs is sold in the marketplace.\n\nBefore using this request, the seller should always use the [Change Notification](https://developers.vtex.com/vtex-rest-api/reference/catalog-api-get-seller-sku-notification) request in order to check if the SKU already exists in the marketplace. If it doesn't, then this is the next call in the SKU integration flow.\n\nIn the Send Suggestion request, the seller must send information about the SKU, such as the product and SKU name, the seller ID, and the image URL. All parameters are explained below. ",
  operationId: 'SaveSuggestion',
  request: {
    query: z.object({
      accountName: z
        .string()
        .default('apiexamples')
        .openapi({
          param: {
            description:
              'Name of the VTEX account to which the seller wants to suggest a new SKU. It is used as part of the request URL.',
            in: 'query',
            name: 'accountName',
            required: true,
            schema: { default: 'apiexamples', type: 'string' },
          },
        }),
    }),
    headers: z.object({
      Accept: z
        .string()
        .default('application/json')
        .openapi({
          param: {
            description:
              'HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.',
            in: 'header',
            name: 'Accept',
            required: true,
            schema: {
              default: 'application/json',
              example: 'application/vnd.vtex.suggestion.v0+json',
              type: 'string',
            },
            style: 'simple',
          },
          example: 'application/vnd.vtex.suggestion.v0+json',
        }),
      'Content-Type': z
        .string()
        .default('application/json')
        .openapi({
          param: {
            description: 'Describes the type of the content being sent.',
            in: 'header',
            name: 'Content-Type',
            required: true,
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      sellerId: z
        .string()
        .default('seller123')
        .openapi({
          param: {
            description:
              'A string that identifies the seller in the marketplace. This ID must be created by the marketplace and informed to the seller before the integration is built.',
            in: 'path',
            name: 'sellerId',
            required: true,
            schema: { default: 'seller123', type: 'string' },
            style: 'simple',
          },
        }),
      sellerSkuId: z
        .string()
        .default('1234')
        .openapi({
          param: {
            description:
              'A string that identifies the SKU in the seller. This is the ID that the marketplace will use for future references to this SKU, such as price and inventory notifications.',
            in: 'path',
            name: 'sellerSkuId',
            required: true,
            schema: { default: '1234', type: 'string' },
            style: 'simple',
          },
        }),
    }),
    body: {
      description: '',
      content: {
        'application/json': {
          schema: SaveSuggestionRequestSchema,
          example: {
            AvailableQuantity: 111,
            BrandName: 'Brand 1',
            CategoryFullPath: 'Category 1',
            EAN: 'EAN123',
            Height: 1,
            Images: [
              {
                imageName: 'Principal',
                imageUrl:
                  'https://i.pinimg.com/originals/2d/96/4a/2d964a6bf37d9224d0615dc85fccdd62.jpg',
              },
            ],
            Length: 1,
            MeasurementUnit: 'un',
            NameComplete: 'Complete product name',
            Pricing: { Currency: 'BRL', CurrencySymbol: 'R$', SalePrice: 399 },
            ProductDescription: 'sample',
            ProductId: '321',
            ProductName: 'Product sample',
            ProductSpecifications: [{ fieldName: 'Fabric', fieldValues: ['Cotton', 'Velvet'] }],
            RefId: 'REFID123',
            SellerId: 'string',
            SellerStockKeepingUnitId: 567,
            SkuName: 'Sku sample',
            SkuSpecifications: [{ fieldName: 'Color', fieldValues: ['Red', 'Blue'] }],
            UnitMultiplier: 1,
            Updated: null,
            Weight: 1,
            Width: 1,
          },
        },
      },
      required: true,
    },
  },
  responses: { 200: { description: 'OK', headers: z.object({}) } },
})

export const deleteSuggestionsSellerIdSellerSkuIdRoute = createRoute({
  method: 'delete',
  path: '/suggestions/{sellerId}/{sellerSkuId}',
  tags: ['Manage Suggestions'],
  summary: 'Delete SKU Suggestion',
  description:
    'This endpoint deletes a chosen SKU suggestion. Only one SKU should be deleted per request. This request cannot be undone. A workaround to revert its action, is to send the suggestion again, through the Send Suggestion API.',
  operationId: 'DeleteSuggestion',
  request: {
    query: z.object({
      accountName: z
        .string()
        .default('apiexamples')
        .openapi({
          param: {
            description: 'Name of the VTEX account. Used as part of the URL.',
            in: 'query',
            name: 'accountName',
            required: true,
            schema: { default: 'apiexamples', type: 'string' },
          },
        }),
    }),
    headers: z.object({
      Accept: z
        .string()
        .default('application/json')
        .openapi({
          param: {
            description:
              'HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.',
            in: 'header',
            name: 'Accept',
            required: true,
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
      'Content-Type': z
        .string()
        .default('application/json')
        .openapi({
          param: {
            description: 'Describes the type of the content being sent.',
            in: 'header',
            name: 'Content-Type',
            required: true,
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      sellerId: z
        .string()
        .default('seller123')
        .openapi({
          param: {
            description:
              'A string that identifies the seller in the marketplace. This ID must be created by the marketplace and informed to the seller before the integration is built.',
            in: 'path',
            name: 'sellerId',
            required: true,
            schema: { default: 'seller123', type: 'string' },
            style: 'simple',
          },
        }),
      sellerSkuId: z
        .string()
        .default('1234')
        .openapi({
          param: {
            description:
              'A string that identifies the SKU in the marketplace. This is the ID that the marketplace will use for future references to this SKU, such as price and inventory notifications.',
            in: 'path',
            name: 'sellerSkuId',
            required: true,
            schema: { default: '1234', type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK', headers: z.object({}) } },
})

export const getSuggestionsSellerIdSellerskuidVersionsRoute = createRoute({
  method: 'get',
  path: '/suggestions/{sellerId}/{sellerskuid}/versions',
  tags: ['Get Versions'],
  summary: 'Get all Versions',
  description:
    "Whenever an SKU Suggestion is updated or changed, a new version of the original one is created. All versions are logged, so you can search for previous our current states of SKU suggestions. \n\nThis endpoint retrieves the data of *all* previous and latest versions of a specific SKU suggestion, sent by the seller. Whenever an SKU is updated, it is important to map previous versions, to compare and identify changes. \n\nThe response's object [latestversion] provides the information of the most recent version of that SKU suggestion.",
  operationId: 'GetVersions',
  request: {
    query: z.object({
      accountName: z
        .string()
        .default('apiexamples')
        .openapi({
          param: {
            description: 'Name of the VTEX account. Used as part of the URL',
            in: 'query',
            name: 'accountName',
            required: true,
            schema: { default: 'apiexamples', type: 'string' },
          },
        }),
    }),
    headers: z.object({
      Accept: z
        .string()
        .default('application/json')
        .openapi({
          param: {
            description:
              'HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand',
            in: 'header',
            name: 'Accept',
            required: true,
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
      'Content-Type': z
        .string()
        .default('application/json')
        .openapi({
          param: {
            description: 'Describes the type of the content being sent.',
            in: 'header',
            name: 'Content-Type',
            required: true,
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      sellerId: z
        .string()
        .default('seller123')
        .openapi({
          param: {
            description:
              'A string that identifies the seller in the marketplace. This ID must be created by the marketplace and informed to the seller before the integration is built.',
            in: 'path',
            name: 'sellerId',
            required: true,
            schema: { default: 'seller123', type: 'string' },
            style: 'simple',
          },
        }),
      sellerskuid: z
        .string()
        .default('1234')
        .openapi({
          param: {
            description:
              'A string that identifies the SKU in the marketplace. This is the ID that the marketplace will use for future references to this SKU, such as price and inventory notifications.',
            in: 'path',
            name: 'sellerskuid',
            required: true,
            schema: { default: '1234', type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK', headers: z.object({}) } },
})

export const getSuggestionsSellerIdSellerskuidVersionsVersionRoute = createRoute({
  method: 'get',
  path: '/suggestions/{sellerId}/{sellerskuid}/versions/{version}',
  tags: ['Get Versions'],
  summary: 'Get Version by ID',
  description:
    "Whenever an SKU Suggestion is updated or changed, a new version of the original one is created. All versions are logged, so you can search for previous our current states of SKU suggestions. \n\nThis endpoint retrieves a specific *version* of a chosen SKU sent by the seller. Add the Seller's ID, Seller's SKU ID, and version ID in the path to detail your search.",
  operationId: 'GetSuggestionbyversion',
  request: {
    query: z.object({
      accountName: z
        .string()
        .default('apiexamples')
        .openapi({
          param: {
            description: 'Name of the VTEX account. Used as part of the URL',
            in: 'query',
            name: 'accountName',
            required: true,
            schema: { default: 'apiexamples', type: 'string' },
          },
        }),
    }),
    headers: z.object({
      Accept: z
        .string()
        .default('application/json')
        .openapi({
          param: {
            description:
              'HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand',
            in: 'header',
            name: 'Accept',
            required: true,
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
      'Content-Type': z
        .string()
        .default('application/json')
        .openapi({
          param: {
            description: 'Describes the type of the content being sent.',
            in: 'header',
            name: 'Content-Type',
            required: true,
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      sellerId: z
        .string()
        .default('seller123')
        .openapi({
          param: {
            description:
              'A string that identifies the seller in the marketplace. This ID must be created by the marketplace and informed to the seller before the integration is built.',
            in: 'path',
            name: 'sellerId',
            required: true,
            schema: { default: 'seller123', type: 'string' },
            style: 'simple',
          },
        }),
      sellerskuid: z
        .string()
        .default('1234')
        .openapi({
          param: {
            description:
              'A string that identifies the SKU in the marketplace. This is the ID that the marketplace will use for future references to this SKU, such as price and inventory notifications.',
            in: 'path',
            name: 'sellerskuid',
            required: true,
            schema: { default: '1234', type: 'string' },
            style: 'simple',
          },
        }),
      version: z
        .string()
        .default('09072021142808277')
        .openapi({
          param: {
            description:
              "Whenever an SKU Suggestion is updated or changed, a new version of the original one is created. All versions are logged, so you can search for previous our current states of SKU suggestions. This field is the `versionId` associated to the version you choose to search for. You can get this field's value through the [Get SKU Suggestion by ID](https://developers.vtex.com/vtex-rest-api/reference/getsuggestion). through the `latestVersionId` field.",
            in: 'path',
            name: 'version',
            required: true,
            schema: { default: '09072021142808277', type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK', headers: z.object({}) } },
})

export const putSuggestionsSellerIdSellerskuidVersionsVersionMatchesMatchidRoute = createRoute({
  method: 'put',
  path: '/suggestions/{sellerId}/{sellerskuid}/versions/{version}/matches/{matchid}',
  tags: ['Match Received SKUs'],
  summary: 'Match Received SKUs individually',
  description:
    "All SKUs sent from a seller to a marketplace must be reviewed and matched. Actions in the matching process are added in the request body through the [matchType] object. Match type actions include: \n\n1. `newproduct`: match the SKU as a new product. \n\n2. `itemMatch`: associate the received SKU to an existing SKU. \n\n3. `productMatch`: associate the received SKU to an existing product. \n\n4. `deny`: deny the received SKU. \n\n5. `pending`: the received SKU requires attention. \n\n6. `incomplete`: the received SKU is lacking information to be matched. \n\n7. `insufficientScore`: the score given by the Matcher to this received SKU doesn't qualify it to be matched. \n\nNote that  if the autoApprove setting is enabled, the SKUs will be approved, regardless of the Score.",
  operationId: 'Match',
  request: {
    query: z.object({
      accountName: z
        .string()
        .default('apiexamples')
        .openapi({
          param: {
            description: 'Name of the VTEX account. Used as part of the URL',
            in: 'query',
            name: 'accountName',
            required: true,
            schema: { default: 'apiexamples', type: 'string' },
          },
        }),
    }),
    headers: z.object({
      Accept: z
        .string()
        .default('application/json')
        .openapi({
          param: {
            description:
              'HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand',
            in: 'header',
            name: 'Accept',
            required: true,
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
      'Content-Type': z
        .string()
        .default('application/json')
        .openapi({
          param: {
            description: 'Describes the type of the content being sent.',
            in: 'header',
            name: 'Content-Type',
            required: true,
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      sellerId: z
        .string()
        .default('seller123')
        .openapi({
          param: {
            description:
              'A string that identifies the seller in the marketplace. This ID must be created by the marketplace and informed to the seller before the integration is built.',
            in: 'path',
            name: 'sellerId',
            required: true,
            schema: { default: 'seller123', type: 'string' },
            style: 'simple',
          },
        }),
      sellerskuid: z
        .string()
        .default('1234')
        .openapi({
          param: {
            description:
              'A string that identifies the SKU in the marketplace. This is the ID that the marketplace will use for future references to this SKU, such as price and inventory notifications.',
            in: 'path',
            name: 'sellerskuid',
            required: true,
            schema: { default: '1234', type: 'string' },
            style: 'simple',
          },
        }),
      version: z
        .string()
        .default('09072021142808277')
        .openapi({
          param: {
            description:
              "Whenever an SKU Suggestion is updated or changed, a new version of the original one is created. All versions are logged, so you can search for previous our current states of SKU suggestions. This field is the versionId associated to the version you choose to search for. You can get this field's value through the[Get SKU Suggestion by ID](https://developers.vtex.com/vtex-rest-api/reference/getsuggestion). through the `latestVersionId` field.",
            in: 'path',
            name: 'version',
            required: true,
            schema: { default: '09072021142808277', type: 'string' },
            style: 'simple',
          },
        }),
      matchid: z
        .string()
        .openapi({
          param: {
            description:
              "Whenever an SKU suggestion is matched, it is associated to a unique ID. Fill in this field with the matchId you wish to filter by. The `matchId`'s value can be obtained through the *[Get SKU Suggestion by ID](https://developers.vtex.com/vtex-rest-api/reference/getsuggestion) endpoint.",
            in: 'path',
            name: 'matchid',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    body: {
      description: '',
      content: {
        'application/json': {
          schema: MatchRequestSchema,
          example: {
            matchType: 'itemMatch',
            matcherId: '{{matcherid}}',
            product: {
              brandId: 1234567,
              categoryId: 12,
              description: 'Book description',
              matchType: 'itemMatch',
              name: 'Book A',
              specifications: null,
            },
            productRef: '{{productRef}}(should be specified when match is a product match)',
            score: '{{score}} (must be decimal)',
            sku: {
              eans: ['12345678901213'],
              height: 1,
              images: [{ 'imagem1.jpg': { 'imagem1.jpg': 'https://imageurl.example' } }],
              length: 1,
              measurementUnit: 'un',
              name: 'Sku exemplo',
              refId: null,
              specifications: { Embalagem: '3 k   g' },
              unitMultiplier: 1,
              weight: 1,
              width: 1,
            },
            skuRef: '{{skuid}}(should be specifed when match is a sku match)',
          },
        },
      },
      required: true,
    },
  },
  responses: { 200: { description: 'OK', headers: z.object({}) } },
})
