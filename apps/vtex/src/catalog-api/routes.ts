import { createRoute, z } from '@hono/zod-openapi'

const AlternateIdsSchema = z
  .object({
    Ean: z.string().exactOptional().openapi({ description: 'SKU EAN.' }),
    RefId: z.string().exactOptional().openapi({ description: 'SKU Reference ID.' }),
  })
  .openapi({
    description: 'Array with alternate SKU IDs, such as EAN and RefId.',
    example: { Ean: '8781', RefId: '878181' },
    title: 'AlternateIds',
    required: [],
  })
  .openapi('AlternateIds')

const FieldSchema = z
  .object({
    DomainValues: z.string().nullable().openapi({ description: 'Allowed key values.' }),
    FieldName: z.string().openapi({ description: 'Attachment field name.' }),
    MaxCaracters: z
      .string()
      .openapi({ description: 'Maximum number of characters accepted in the attachment field.' }),
  })
  .openapi({
    example: { DomainValues: 'Adalberto,Pedro,João', FieldName: 'nome', MaxCaracters: '20' },
    required: ['FieldName', 'MaxCaracters', 'DomainValues'],
    title: 'Field',
  })
  .openapi('Field')

const AttachmentSchema = z
  .object({
    Fields: z.array(FieldSchema).openapi({ description: 'Array containing Attachment fields.' }),
    Id: z.int32().openapi({ description: 'Attachment ID.' }),
    IsActive: z.boolean().openapi({ description: 'Defines if the Attachment is active or not.' }),
    IsRequired: z
      .boolean()
      .openapi({ description: 'Defines if the Attachment is required or not.' }),
    Keys: z.array(z.string()).openapi({ description: 'Attachment Keys.' }),
    Name: z.string().openapi({ description: 'Attachment Name.' }),
  })
  .openapi({
    description: 'Object containing information about SKU attachments.',
    example: {
      Fields: [
        { DomainValues: 'Adalberto,Pedro,João', FieldName: 'nome', MaxCaracters: '20' },
        { DomainValues: null, FieldName: 'foto', MaxCaracters: '40' },
      ],
      Id: 3,
      IsActive: true,
      IsRequired: false,
      Keys: ['nome;20', 'foto;40'],
      Name: 'Mensagem',
    },
    required: ['Id', 'Name', 'Keys', 'Fields', 'IsActive', 'IsRequired'],
    title: 'Attachment',
  })
  .openapi('Attachment')

const AttachmentRequestSchema = z
  .object({
    Domains: z
      .array(
        z
          .object({
            DomainValues: z
              .string()
              .exactOptional()
              .openapi({
                description: 'Allowed key values.',
                example: '7,9,10',
                title: 'DomainValues',
              }),
            FieldName: z
              .string()
              .exactOptional()
              .openapi({
                description: 'Attachment key name.',
                example: 'Number',
                title: 'FieldName',
              }),
            MaxCaracters: z
              .string()
              .exactOptional()
              .openapi({
                description: 'Maximum number of characters in the attachment key.',
                example: '1',
                title: 'MaxCaracters',
              }),
          })
          .openapi({ title: '', required: [] }),
      )
      .openapi({
        description: 'List of characteristics related to the attachment.',
        title: 'Domains',
      }),
    IsActive: z
      .boolean()
      .openapi({
        description: 'Defines if the attachment is active or not.',
        example: false,
        title: 'IsActive',
      }),
    IsRequired: z
      .boolean()
      .openapi({
        description: 'Defines if the attachment is required or not.',
        example: false,
        title: 'IsRequired',
      }),
    Name: z
      .string()
      .openapi({ description: 'Attachment Name.', example: 'Shirt customization', title: 'Name' }),
  })
  .openapi({
    example: {
      Domains: [
        {
          DomainValues: '[1-2]#9[1-1][1]basic;#11[0-1][1]basic',
          FieldName: 'Sauce',
          MaxCaracters: '',
        },
        {
          DomainValues:
            '[0-10]#8[0-3][0]medium;#9[0-3][0]medium;#10[0-3][0]medium;#11[0-3][0]medium;#36[0-3][0]medium;#37[0-3][0]medium;#38[0-3][0]medium',
          FieldName: 'Toppings',
          MaxCaracters: '',
        },
      ],
      IsActive: true,
      IsRequired: true,
      Name: 'Ingredients',
    },
    required: ['Name', 'IsRequired', 'IsActive', 'Domains'],
    title: '',
  })
  .openapi('AttachmentRequest')

const AttachmentResponseSchema = z
  .object({
    Domains: z
      .array(
        z
          .object({
            DomainValues: z
              .string()
              .exactOptional()
              .openapi({
                description: 'Allowed key values.',
                example: '7,9,10',
                title: 'DomainValues',
              }),
            FieldName: z
              .string()
              .exactOptional()
              .openapi({
                description: 'Attachment key name.',
                example: 'Number',
                title: 'FieldName',
              }),
            MaxCaracters: z
              .string()
              .exactOptional()
              .openapi({
                description: 'Maximum number of characters in the attachment key.',
                example: '1',
                title: 'MaxCaracters',
              }),
          })
          .openapi({ title: '', required: [] }),
      )
      .openapi({
        description: 'List of characteristics related to the attachment.',
        title: 'Domains',
      }),
    Id: z.int().openapi({ description: 'Attachment ID.', example: 8, title: 'Id' }),
    IsActive: z
      .boolean()
      .openapi({
        description: 'Defines if the attachment is active or not.',
        example: false,
        title: 'IsActive',
      }),
    IsRequired: z
      .boolean()
      .openapi({
        description: 'Defines if the attachment is required or not.',
        example: false,
        title: 'IsRequired',
      }),
    Name: z
      .string()
      .openapi({ description: 'Attachment Name.', example: 'Shirt customization', title: 'Name' }),
  })
  .openapi({
    example: {
      Domains: [
        {
          DomainValues: '[1-2]#9[1-1][1]basic;#11[0-1][1]basic',
          FieldName: 'Sauce',
          MaxCaracters: '',
        },
        {
          DomainValues:
            '[0-10]#8[0-3][0]medium;#9[0-3][0]medium;#10[0-3][0]medium;#11[0-3][0]medium;#36[0-3][0]medium;#37[0-3][0]medium;#38[0-3][0]medium',
          FieldName: 'Toppings',
          MaxCaracters: '',
        },
      ],
      Id: 8,
      IsActive: true,
      IsRequired: true,
      Name: 'Ingredients',
    },
    required: ['Id', 'Name', 'IsRequired', 'IsActive', 'Domains'],
    title: '',
  })
  .openapi('AttachmentResponse')

const BrandCreateUpdateSchema = z
  .object({
    Active: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Defines if the brand is active (`true`) or not (`false`).',
        example: true,
        title: 'Active',
      }),
    AdWordsRemarketingCode: z
      .string()
      .exactOptional()
      .openapi({
        deprecated: true,
        description: 'This is a legacy field. Do not take this information into consideration.',
      }),
    Id: z.int().openapi({ description: "Brand's unique numerical identifier.", example: 2000003 }),
    Keywords: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Store Framework - Deprecated.\r\nLegacy CMS Portal - Alternative search terms that will lead to the specific brand. The user can find the desired brand even when misspelling it. Used especially when words are of foreign origin and have a distinct spelling that is transcribed into a generic one, or when small spelling mistakes occur.\r\n',
        example: 'adidas',
      }),
    LinkId: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Brand page slug. Only lowercase letters and hyphens (`-`) are allowed.',
        example: 'adidas-sports',
        title: 'LinkID',
      }),
    LomadeeCampaignCode: z
      .string()
      .exactOptional()
      .openapi({
        deprecated: true,
        description: 'This is a legacy field. Do not take this information into consideration.',
      }),
    MenuHome: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Store Framework - Deprecated.\r\nLegacy CMS Portal - Defines if the Brand appears in the Department Menu control (`<vtex.cmc:departmentNavigator/>`).\r\n',
        example: true,
        title: 'MenuHome',
      }),
    Name: z.string().openapi({ description: 'Brand name.', example: 'Adidas' }),
    Score: z
      .int()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Store Framework - Deprecated\r\nLegacy CMS Portal - Value used to set the priority on the search result page.\r\n',
        example: 10,
      }),
    SiteTitle: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Meta Title for the Brand page.',
        example: 'Adidas',
        title: 'SiteTitle',
      }),
    Text: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Meta Description for the Brand page. A brief description of the brand, displayed by search engines. Since search engines can only display less than 150 characters, we recommend not exceeding this character limit when creating the description.',
        example: 'Adidas',
        title: 'Text',
      }),
  })
  .openapi({
    description: 'Object containing Brand information.',
    example: {
      Active: true,
      AdWordsRemarketingCode: '',
      Id: 2000013,
      Keywords: 'orma',
      LinkId: null,
      LomadeeCampaignCode: '',
      MenuHome: true,
      Name: 'Orma Carbono2',
      Score: null,
      SiteTitle: 'Orma Carbon2',
      Text: 'Orma Carbon2',
    },
    required: ['Id', 'Name'],
  })
  .openapi('BrandCreateUpdate')

const BrandGetSchema = z
  .object({
    id: z.int().openapi({ description: "Brand's unique numerical identifier." }),
    imageUrl: z.string().nullable().openapi({ description: "URL of the brand's image." }),
    isActive: z
      .boolean()
      .openapi({ description: 'Defines if the brand is active (`true`) or not (`false`).' }),
    metaTagDescription: z
      .string()
      .openapi({
        description:
          'Meta Description for the Brand page. A brief description of the brand, displayed by search engines. Since search engines can only display less than 150 characters, we recommend not exceeding this character limit when creating the description.',
      }),
    name: z.string().openapi({ description: 'Brand name.' }),
    title: z.string().openapi({ description: 'Meta Title for the Brand page.' }),
  })
  .openapi({
    description: 'Object containing Brand information.',
    required: ['id', 'name', 'isActive', 'imageUrl', 'title', 'metaTagDescription'],
  })
  .openapi('BrandGet')

const CategorySchema = z
  .object({
    ActiveStoreFrontLink: z
      .boolean()
      .openapi({
        description:
          'Defines if the Category has an active link on the website (`true`) or not (`false`).',
      }),
    AdWordsRemarketingCode: z
      .string()
      .openapi({
        deprecated: true,
        description: 'This is a legacy field. Do not take this information into consideration.',
      }),
    Description: z.string().openapi({ description: 'Describes details about the category.' }),
    FatherCategoryId: z
      .int()
      .nullable()
      .openapi({
        description: 'ID of the father category, apply in case of category and subcategory.',
      }),
    GlobalCategoryId: z.int().openapi({ description: 'Google Global Category ID.' }),
    HasChildren: z
      .boolean()
      .openapi({
        description: 'Defines if the category has child categories (`true`) or not (`false`).',
      }),
    Id: z.int().openapi({ description: 'Category ID.' }),
    IsActive: z
      .boolean()
      .openapi({ description: 'Shows if the category is active (`true`) or not (`false`).' }),
    Keywords: z.string().openapi({ description: 'Substitutes words for the category.' }),
    LinkId: z.string().nullable().openapi({ description: 'Text Link.' }),
    LomadeeCampaignCode: z
      .string()
      .openapi({
        deprecated: true,
        description: 'This is a legacy field. Do not take this information into consideration.',
      }),
    Name: z.string().openapi({ description: 'Category name.' }),
    Score: z.int().nullable().openapi({ description: 'Score for search ordination.' }),
    ShowBrandFilter: z
      .boolean()
      .openapi({
        description: 'Defines if the category has brand filter (`true`) or not (`false`).',
      }),
    ShowInStoreFront: z
      .boolean()
      .openapi({
        description:
          'Defines if the category is shown on side and upper menu (`true`) or not (`false`).',
      }),
    StockKeepingUnitSelectionMode: z
      .string()
      .openapi({ description: 'Defines how the SKU will be exhibited.' }),
    Title: z.string().openapi({ description: 'Category page title.' }),
  })
  .openapi({
    example: {
      ActiveStoreFrontLink: true,
      AdWordsRemarketingCode: '',
      Description:
        'Discover our range of home appliances. Find smart vacuums, kitchen and laundry appliances to suit your needs. Order online now.',
      FatherCategoryId: null,
      GlobalCategoryId: 3367,
      HasChildren: true,
      Id: 1,
      IsActive: true,
      Keywords: 'Kitchen, Laundry, Appliances',
      LinkId: 'Alimentacao',
      LomadeeCampaignCode: '',
      Name: 'Home Appliances',
      Score: null,
      ShowBrandFilter: true,
      ShowInStoreFront: true,
      StockKeepingUnitSelectionMode: 'LIST',
      Title: 'Home Appliances',
    },
    required: [
      'Id',
      'Name',
      'FatherCategoryId',
      'Title',
      'Description',
      'Keywords',
      'IsActive',
      'LomadeeCampaignCode',
      'AdWordsRemarketingCode',
      'ShowInStoreFront',
      'ShowBrandFilter',
      'ActiveStoreFrontLink',
      'GlobalCategoryId',
      'StockKeepingUnitSelectionMode',
      'Score',
      'LinkId',
      'HasChildren',
    ],
    title: 'Category',
  })
  .openapi('Category')

const CategorySpecificationSchema = z
  .array(
    z
      .object({
        CategoryId: z.int().exactOptional().openapi({ description: 'Category ID.', example: 1 }),
        FieldId: z.int().exactOptional().openapi({ description: 'Specification ID.', example: 1 }),
        IsActive: z
          .boolean()
          .exactOptional()
          .openapi({ description: 'Defines if the specification is active.', example: true }),
        IsStockKeepingUnit: z
          .boolean()
          .exactOptional()
          .openapi({ description: 'Defines if it is an SKU specification.', example: true }),
        Name: z
          .string()
          .exactOptional()
          .openapi({ description: 'Specification name.', example: 'Composition' }),
      })
      .openapi({ description: 'Object containing Specification information.', required: [] }),
  )
  .openapi({
    description: 'Array of objects.',
    example: [
      {
        CategoryId: 1,
        FieldId: 33,
        IsActive: true,
        IsStockKeepingUnit: false,
        Name: 'Specification A',
      },
      {
        CategoryId: 1,
        FieldId: 34,
        IsActive: true,
        IsStockKeepingUnit: false,
        Name: 'Specification B',
      },
      {
        CategoryId: 1,
        FieldId: 35,
        IsActive: false,
        IsStockKeepingUnit: false,
        Name: 'Specification C',
      },
    ],
    required: ['Name', 'CategoryId', 'FieldId', 'IsActive', 'IsStockKeepingUnit'],
    title: 'Category Specification',
  })
  .openapi('CategorySpecification')

const CreateCategoryRequestSchema = z
  .object({
    ActiveStoreFrontLink: z
      .boolean()
      .openapi({
        description: 'If true, the Category link becomes active in store.',
        example: true,
        title: 'ActiveStoreFrontLink',
      }),
    AdWordsRemarketingCode: z
      .string()
      .nullable()
      .openapi({
        deprecated: true,
        description: 'This is a legacy field. Do not take this information into consideration.',
        example: 'Sale',
      }),
    Description: z
      .string()
      .openapi({
        description: 'Text used in meta description tag for Category page.',
        example:
          'Discover our range of home appliances. Find smart vacuums, kitchen and laundry appliances to suit your needs. Order online now.',
        title: 'Description',
      }),
    FatherCategoryId: z
      .int()
      .nullable()
      .openapi({
        description: 'ID of the parent category, apply in case of category and subcategory.',
        example: 2,
        title: 'FatherCategoryId',
      }),
    GlobalCategoryId: z
      .int()
      .openapi({
        description: 'Google Global Category ID.',
        example: 222,
        title: 'GlobalCategoryId',
      }),
    Id: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'Category unique identifier. If not informed, it will be automatically generated by VTEX.',
        example: 1,
        title: 'Id',
      }),
    IsActive: z
      .boolean()
      .openapi({
        description: 'If true, the Category page becomes available in store.',
        example: true,
        title: 'IsActive',
      }),
    Keywords: z
      .string()
      .openapi({
        description: 'Substitute words for the Category.',
        example: 'Kitchen, Laundry, Appliances',
        title: 'Keywords',
      }),
    LomadeeCampaignCode: z
      .string()
      .nullable()
      .openapi({
        deprecated: true,
        description: 'This is a legacy field. Do not take this information into consideration.',
        example: 'Sale',
      }),
    Name: z
      .string()
      .openapi({ description: 'Category name.', example: 'Home Appliances', title: 'Name' }),
    Score: z
      .int()
      .nullable()
      .openapi({ description: 'Score for search sorting order.', example: 3, title: 'Score' }),
    ShowBrandFilter: z
      .boolean()
      .openapi({
        description: 'If true, the Category page displays a Brand filter.',
        example: true,
        title: 'ShowBrandFilter',
      }),
    ShowInStoreFront: z
      .boolean()
      .openapi({
        description: 'If true, the Category is shown in the top and side menu.',
        example: true,
        title: 'ShowInStoreFront',
      }),
    StockKeepingUnitSelectionMode: z
      .string()
      .openapi({
        description: 'Defines how the SKU will be exhibited',
        example: 'SPECIFICATION',
        title: 'StockKeepingUnitSelectionMode',
      }),
    Title: z
      .string()
      .openapi({
        description: 'Text used in title tag for Category page.',
        example: 'Home Appliances',
        title: 'Title',
      }),
  })
  .openapi({
    example: {
      ActiveStoreFrontLink: true,
      AdWordsRemarketingCode: null,
      Description:
        'Discover our range of home appliances. Find smart vacuums, kitchen and laundry appliances to suit your needs. Order online now.',
      FatherCategoryId: null,
      GlobalCategoryId: 800,
      IsActive: true,
      Keywords: 'Kitchen, Laundry, Appliances',
      LomadeeCampaignCode: null,
      Name: 'Home Appliances',
      Score: null,
      ShowBrandFilter: true,
      ShowInStoreFront: true,
      StockKeepingUnitSelectionMode: 'SPECIFICATION',
      Title: 'Home Appliances',
    },
    required: [
      'Name',
      'Keywords',
      'Title',
      'Description',
      'AdWordsRemarketingCode',
      'LomadeeCampaignCode',
      'FatherCategoryId',
      'GlobalCategoryId',
      'ShowInStoreFront',
      'IsActive',
      'ActiveStoreFrontLink',
      'ShowBrandFilter',
      'Score',
      'StockKeepingUnitSelectionMode',
    ],
  })
  .openapi('CreateCategoryRequest')

const CreateSellerRequestSchema = z
  .object({
    ArchiveId: z.int().openapi({ description: 'Seller archive ID.', example: 1 }),
    CNPJ: z
      .string()
      .openapi({ description: 'Company registration number.', example: '12035072751' }),
    CSCIdentification: z
      .string()
      .openapi({ description: 'CSC identification.', example: 'pedrostore' }),
    CatalogSystemEndpoint: z
      .string()
      .openapi({
        description:
          "URL of the endpoint of the seller's catalog. This field will only be displayed if the seller type is VTEX Store. The field format will be as follows: `http://{sellerName}.vtexcommercestable.com.br/api/catalog_system/`.",
        example: 'http://pedrostore.vtexcommercestable.com.br/api/catalog_system/',
      }),
    CategoryCommissionPercentage: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The percentage that must be filled in as agreed between the marketplace and the seller. If there is no such commission, please fill in the field with the value: `0.00`.',
        example: '[{"CategoryId":14,"ProductCommission":15.0,"FreightCommission":0.0}]',
      }),
    DeliveryPolicy: z
      .string()
      .openapi({
        description:
          'Text describing the delivery policy previously agreed between the marketplace and the seller.',
        example: 'Delivery policy text',
      }),
    Description: z
      .string()
      .openapi({
        description:
          'Text describing the seller with a marketing tone. You can display this text in the marketplace window display by [customizing the CMS](https://help.vtex.com/en/tutorial/list-of-controls-for-templates--tutorials_563).',
        example: 'Brief description',
      }),
    Email: z
      .string()
      .openapi({
        description: 'Email of the admin responsible for the seller.',
        example: 'breno@breno.com',
      }),
    ExchangeReturnPolicy: z
      .string()
      .openapi({
        description:
          'Text describing the exchange and return policy previously agreed between the marketplace and the seller.',
        example: 'Exchange return policy text',
      }),
    FreightCommissionPercentage: z
      .number()
      .openapi({
        description:
          'The percentage that must be filled in as agreed between the marketplace and the seller. If there is no such commission, please fill in the field with the value: `0.00`.',
        example: 0,
      }),
    FulfillmentEndpoint: z
      .string()
      .openapi({
        description:
          "URL of the endpoint for fulfillment of seller's orders, which the marketplace will use to communicate with the seller. This field applies to all sellers, regardless of their type. However, for `VTEX Stores`, you don’t need to fill it in because the system will do that automatically. You can edit this field once the seller has been successfully added.",
        example: 'http://pedrostore.vtexcommercestable.com.br/api/fulfillment?affiliateid=LDB&sc=1',
      }),
    FulfillmentSellerId: z
      .int()
      .openapi({
        description:
          'Identification code of the seller responsible for fulfilling the order. This is an optional field used when a seller sells SKUs from another seller. If the seller sells their own SKUs, it must be left blank.',
        example: 1,
      }),
    IsActive: z
      .boolean()
      .openapi({ description: 'If the selle is active (`true`) or not (`false`).', example: true }),
    IsBetterScope: z
      .boolean()
      .openapi({
        description:
          'Indicates whether it is a [comprehensive seller](https://help.vtex.com/en/tutorial/comprehensive-seller--5Qn4O2GpjUIzWTPpvLUfkI).',
        example: false,
      }),
    MerchantName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Name of the marketplace, used to guide payments. This field should be nulled if the marketplace is responsible for processing payments. Check out our [Split Payment](https://help.vtex.com/en/tutorial/split-payment--6k5JidhYRUxileNolY2VLx) article to know more.',
        example: 'pedrostore',
      }),
    Name: z
      .string()
      .openapi({
        description:
          "Name of the account in the seller's environment. You can find it on **Account settings > Account > Account Name**). Applicable only if the seller uses their own payment method.",
        example: 'My pedrostore',
      }),
    Password: z.string().openapi({ description: 'Seller password.', example: 'passoword' }),
    ProductCommissionPercentage: z
      .number()
      .openapi({
        description:
          'The percentage that must be filled in as agreed between the marketplace and the seller. If there is no such commission, please fill in the field with the value: `0.00`.',
        example: 0,
      }),
    SecutityPrivacyPolicy: z
      .string()
      .openapi({
        description:
          'Text describing the security policy previously agreed between the marketplace and the seller.',
        example: 'Secutity privacy policy text',
      }),
    SellerId: z
      .string()
      .openapi({
        description:
          "Code used to identify the seller. It is assigned by the marketplace. We recommend filling it in with the seller's account name.",
        example: 'pedrostore',
      }),
    SellerType: z.int().openapi({ description: 'Seller type.', example: 1 }),
    TrustPolicy: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Seller trust policy. The default value is `'Default'`, but if your store is a B2B marketplace and you want to share the customers'emails with the sellers you need to set this field as `'AllowEmailSharing'`.",
        example: 'Default',
      }),
    UrlLogo: z.string().openapi({ description: 'Seller URL logo.', example: '/myseller' }),
    UseHybridPaymentOptions: z
      .boolean()
      .openapi({
        description:
          'Allows customers to use gift cards from the seller to buy their products on the marketplace. It identifies purchases made with a gift card so that only the final price (with discounts applied) is paid to the seller.',
        example: false,
      }),
    UserName: z.string().openapi({ description: 'Seller username.', example: 'myseller' }),
  })
  .openapi({
    required: [
      'SellerId',
      'Name',
      'Email',
      'Description',
      'ExchangeReturnPolicy',
      'DeliveryPolicy',
      'UseHybridPaymentOptions',
      'UserName',
      'Password',
      'SecutityPrivacyPolicy',
      'CNPJ',
      'CSCIdentification',
      'ArchiveId',
      'UrlLogo',
      'ProductCommissionPercentage',
      'FreightCommissionPercentage',
      'FulfillmentEndpoint',
      'CatalogSystemEndpoint',
      'IsActive',
      'FulfillmentSellerId',
      'SellerType',
      'IsBetterScope',
    ],
    title: '',
  })
  .openapi('CreateSellerRequest')

const DimensionSchema = z
  .object({
    cubicweight: z.number().openapi({ description: 'SKU Cubic Weight.' }),
    height: z.number().openapi({ description: 'SKU Height.' }),
    length: z.number().openapi({ description: 'SKU Length.' }),
    weight: z.number().openapi({ description: 'SKU Weight.' }),
    width: z.number().openapi({ description: 'SKU Width.' }),
  })
  .openapi({
    description: 'Object containing the SKU dimensions to be used on the shipping calculation.',
    example: { cubicweight: 81.6833, height: 65, length: 58, weight: 10000, width: 130 },
    required: ['cubicweight', 'height', 'length', 'weight', 'width'],
    title: 'Dimension',
  })
  .openapi('Dimension')

const GetCategoryTreeChildSchema = z
  .object({
    MetaTagDescription: z
      .string()
      .openapi({
        description: 'Category page Meta tag description.',
        example: 'New and used dolls for sale.',
      }),
    Title: z.string().openapi({ description: 'Category page title.', example: 'Dolls' }),
    children: z
      .array(z.any())
      .openapi({ description: "Array with information about the category's children." }),
    hasChildren: z
      .boolean()
      .openapi({
        description: 'If the category has a category child (`true`) or not (`false`).',
        example: true,
      }),
    id: z.int32().openapi({ description: 'Category ID.', example: 1 }),
    name: z.string().openapi({ description: 'Category name.', example: 'Dolls' }),
    url: z
      .string()
      .openapi({
        description: 'Category URL.',
        example: 'https://lojadobreno.vtexcommercestable.com.br/dolls',
      }),
  })
  .openapi({
    example: {
      MetaTagDescription: 'Video games.',
      Title: 'Games',
      children: [
        {
          children: [],
          hasChildren: false,
          id: 79,
          name: 'Consoles',
          url: 'https://ambienteqa.vtexcommercestable.com.br/games/xbox-360/consoles',
        },
        {
          children: [],
          hasChildren: false,
          id: 126,
          name: 'Acessorio',
          url: 'https://ambienteqa.vtexcommercestable.com.br/games/xbox-360/acessorio',
        },
      ],
      hasChildren: false,
      id: 78,
      name: 'Xbox 360',
      url: 'https://ambienteqa.vtexcommercestable.com.br/games/xbox-360',
    },
    required: ['id', 'name', 'hasChildren', 'url', 'children', 'Title', 'MetaTagDescription'],
    title: 'GetCategoryTreeChild',
  })
  .openapi('GetCategoryTreeChild')

const GetCategoryTreeSchema = z
  .object({
    MetaTagDescription: z
      .string()
      .openapi({
        description: 'Category page Meta tag description.',
        example: 'New and used toys for sale.',
      }),
    Title: z.string().openapi({ description: 'Category page title.', example: 'Toys' }),
    children: z
      .array(GetCategoryTreeChildSchema)
      .openapi({ description: "Array with information about the category's children." }),
    hasChildren: z
      .boolean()
      .openapi({
        description: 'If the category has a category child (`true`) or not (`false`).',
        example: true,
      }),
    id: z.int32().openapi({ description: 'Category ID.', example: 1 }),
    name: z.string().openapi({ description: 'Category name.', example: 'Toys' }),
    url: z
      .string()
      .openapi({
        description: 'Category URL.',
        example: 'https://lojadobreno.vtexcommercestable.com.br/toys',
      }),
  })
  .openapi({
    example: {
      MetaTagDescription: '',
      Title: 'Alimentação para Gatos',
      children: [
        {
          MetaTagDescription: '',
          Title: 'Bebedouro para Gatos',
          children: [],
          hasChildren: false,
          id: 6,
          name: 'Bebedouro',
          url: 'https://lojadobreno.vtexcommercestable.com.br/alimentacao/bebedouro',
        },
        {
          MetaTagDescription: '',
          Title: 'Comedouro para Gatos',
          children: [],
          hasChildren: false,
          id: 7,
          name: 'Comedouro',
          url: 'https://lojadobreno.vtexcommercestable.com.br/alimentacao/comedouro',
        },
        {
          MetaTagDescription: '',
          Title: 'Biscoitos para Gatos',
          children: [],
          hasChildren: false,
          id: 8,
          name: 'Biscoitos',
          url: 'https://lojadobreno.vtexcommercestable.com.br/alimentacao/biscoitos',
        },
        {
          MetaTagDescription: '',
          Title: 'Petiscos para Gatos',
          children: [],
          hasChildren: false,
          id: 9,
          name: 'Petiscos',
          url: 'https://lojadobreno.vtexcommercestable.com.br/alimentacao/petiscos',
        },
        {
          MetaTagDescription: '',
          Title: 'Ração Seca para Gatos',
          children: [],
          hasChildren: false,
          id: 10,
          name: 'Ração Seca',
          url: 'https://lojadobreno.vtexcommercestable.com.br/alimentacao/racao-seca',
        },
        {
          MetaTagDescription: '',
          Title: 'Ração Úmida para Gatos',
          children: [],
          hasChildren: false,
          id: 11,
          name: 'Ração Úmida',
          url: 'https://lojadobreno.vtexcommercestable.com.br/alimentacao/racao-umida',
        },
      ],
      hasChildren: true,
      id: 1,
      name: 'Alimentação',
      url: 'https://lojadobreno.vtexcommercestable.com.br/alimentacao',
    },
    required: ['id', 'name', 'hasChildren', 'url', 'children', 'Title', 'MetaTagDescription'],
    title: 'GetCategoryTree',
  })
  .openapi('GetCategoryTree')

const ImageSchema = z
  .object({
    FileId: z.int32().openapi({ description: 'SKU image ID.' }),
    ImageName: z.string().nullable().openapi({ description: 'Image label.' }),
    ImageUrl: z.string().openapi({ description: 'Image URL.' }),
  })
  .openapi({
    description: 'Object containing SKU images details.',
    example: {
      FileId: 168952,
      ImageName: '',
      ImageUrl: 'http://ambienteqa.vteximg.com.br/arquivos/ids/168952/7508800GG.jpg',
    },
    required: ['ImageUrl', 'ImageName', 'FileId'],
    title: 'Image',
  })
  .openapi('Image')

const ProductSpecificationSchema = z
  .object({
    FieldId: z.int32().openapi({ description: 'Specification ID.' }),
    FieldName: z.string().openapi({ description: 'Specification Name.' }),
    FieldValueIds: z
      .array(z.int32().openapi({ description: 'Specification Value ID.' }))
      .openapi({ description: 'Array with related Specification Values IDs.' }),
    FieldValues: z
      .array(z.string())
      .openapi({ description: 'Array with related Specification Values.' }),
  })
  .openapi({
    example: {
      FieldId: 7,
      FieldName: 'Faixa Etária',
      FieldValueIds: [58, 56, 55, 52],
      FieldValues: ['5 a 6 anos', '7 a 8 anos', '9 a 10 anos', 'Acima de 10 anos'],
    },
    required: ['FieldId', 'FieldName', 'FieldValueIds', 'FieldValues'],
    title: 'ProductSpecification',
  })
  .openapi('ProductSpecification')

const RealDimensionSchema = z
  .object({
    realCubicWeight: z.number().openapi({ description: 'Real SKU Cubic Weight.' }),
    realHeight: z.number().openapi({ description: 'Real SKU Height.' }),
    realLength: z.number().openapi({ description: 'Real SKU Length.' }),
    realWeight: z.number().openapi({ description: 'Real SKU Weight.' }),
    realWidth: z.number().openapi({ description: 'Real SKU Width.' }),
  })
  .openapi({
    description: 'Object containing the real SKU dimensions, which appear in the product page.',
    example: {
      realCubicWeight: 274.1375,
      realHeight: 241,
      realLength: 65,
      realWeight: 9800,
      realWidth: 105,
    },
    required: ['realCubicWeight', 'realHeight', 'realLength', 'realWeight', 'realWidth'],
    title: 'RealDimension',
  })
  .openapi('RealDimension')

const SkuSellerSchema = z
  .object({
    FreightCommissionPercentage: z
      .number()
      .openapi({ description: 'Registered value for Seller Freight Commission.' }),
    IsActive: z.boolean().openapi({ description: 'Defines if the SKU is active.' }),
    ProductCommissionPercentage: z
      .number()
      .openapi({ description: 'Registered value for Seller Product Commission.' }),
    SellerId: z
      .string()
      .openapi({
        description:
          'SKU Seller ID. This is the ID that identifies the seller in the marketplace. It can be the same as the seller name or a unique number. Check the **Sellers management** section in the Admin to get the correct ID.',
      }),
    SellerStockKeepingUnitId: z.string().openapi({ description: 'SKU ID for the SKU Seller.' }),
    StockKeepingUnitId: z.int32().openapi({ description: 'SKU ID.' }),
  })
  .openapi({
    description: 'Object containing related SKU Sellers data.',
    example: {
      FreightCommissionPercentage: 0,
      IsActive: true,
      ProductCommissionPercentage: 0,
      SellerId: '1',
      SellerStockKeepingUnitId: '2001773',
      StockKeepingUnitId: 2001773,
    },
    required: [
      'SellerId',
      'StockKeepingUnitId',
      'SellerStockKeepingUnitId',
      'IsActive',
      'FreightCommissionPercentage',
      'ProductCommissionPercentage',
    ],
    title: 'SkuSeller',
  })
  .openapi('SkuSeller')

const SkuSpecificationSchema = z
  .object({
    FieldId: z.int32().openapi({ description: 'Specification ID.' }),
    FieldName: z.string().openapi({ description: 'Specification Name.' }),
    FieldValueIds: z
      .array(z.int32().openapi({ description: 'Specification Value ID.' }))
      .openapi({ description: 'Array with related Specification Values IDs.' }),
    FieldValues: z
      .array(z.string())
      .openapi({ description: 'Array with related Specification Values.' }),
  })
  .openapi({
    description: 'Object containing related SKU Specifications.',
    example: { FieldId: 102, FieldName: 'Cor', FieldValueIds: [266], FieldValues: ['Padrão'] },
    required: ['FieldId', 'FieldName', 'FieldValueIds', 'FieldValues'],
    title: 'SkuSpecification',
  })
  .openapi('SkuSpecification')

const GetSKUAltIDSchema = z
  .object({
    AlternateIdValues: z
      .array(z.string().openapi({ description: 'Alternative SKU ID.' }))
      .openapi({ description: 'Array with values of alternative SKU IDs.' }),
    AlternateIds: AlternateIdsSchema,
    Attachments: z
      .array(AttachmentSchema)
      .openapi({ description: 'Array with Attachments ID that are related to the SKU.' }),
    BrandId: z.string().openapi({ description: 'Brand ID.' }),
    BrandName: z.string().openapi({ description: 'Brand Name.' }),
    CSCIdentification: z.string().nullable().openapi({ description: 'SKU Seller Identification.' }),
    Categories: z
      .array(z.string().openapi({ description: 'Category ID.' }))
      .openapi({ description: 'Categories of the related product.' }),
    CategoriesFullPath: z
      .array(z.string().openapi({ description: 'Path composed by Category IDs separated by `/`.' }))
      .exactOptional()
      .openapi({ description: 'Path of Categories of the related product.' }),
    Collections: z
      .array(z.string().openapi({ description: 'Collection ID.' }))
      .openapi({ description: 'Array with Collections IDs that are related to the Product.' }),
    CommercialConditionId: z.int32().openapi({ description: 'SKU Commercial Condition ID.' }),
    ComplementName: z.string().exactOptional().openapi({ description: 'Product Complement Name.' }),
    DetailUrl: z.string().openapi({ description: 'Product slug.' }),
    Dimension: DimensionSchema,
    EstimatedDateArrival: z
      .string()
      .nullable()
      .openapi({
        description:
          'SKU estimated arrival date in [ISO-8601](https://en.wikipedia.org/wiki/ISO_8601) format, when the product is on pre-sale. You must take into consideration both the launch date and the freight calculation for the arrival date.',
      }),
    Id: z.int32().openapi({ description: 'SKU ID.' }),
    ImageUrl: z.string().openapi({ description: 'SKU image URL.' }),
    Images: z
      .array(ImageSchema)
      .openapi({ description: 'Array of objects with SKU image details.' }),
    InformationSource: z.string().nullable().openapi({ description: 'Information Source.' }),
    IsActive: z.boolean().openapi({ description: 'Defines if the SKU is active or not.' }),
    IsDirectCategoryActive: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Indicates if the direct Product Category is active or not.' }),
    IsGiftCardRecharge: z
      .boolean()
      .openapi({
        description:
          'Defines if the purchase of the SKU will generate reward value for the customer.',
      }),
    IsInventoried: z.boolean().openapi({ deprecated: true }),
    IsKit: z.boolean().openapi({ description: 'Defines if the SKU is part of a bundle.' }),
    IsProductActive: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Defines if the product is active or not.' }),
    IsTransported: z.boolean().openapi({ deprecated: true }),
    KeyWords: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Keywords related to the product.' }),
    KitItems: z
      .array(z.string().openapi({ description: 'SKU ID of each bundle component.' }))
      .openapi({ description: 'Array with SKU IDs of bundle components.' }),
    ManufacturerCode: z.string().openapi({ description: 'Product Supplier ID.' }),
    MeasurementUnit: z.string().openapi({ description: 'Measurement unit.' }),
    ModalType: z
      .string()
      .nullable()
      .openapi({
        description:
          'Links an unusual type of SKU to a carrier specialized in delivering it. This field should be filled in with the name of the modal (e.g. "Chemicals" or "Refrigerated products"). To learn more about this feature, read our articles [How the modal works](https://help.vtex.com/en/tutorial/how-does-the-modal-work--tutorials_125) and [Setting up modal for carriers](https://help.vtex.com/en/tutorial/configure-modal--3jhLqxuPhuiq24UoykCcqy).',
      }),
    NameComplete: z.string().openapi({ description: 'Product Name and SKU Name combined.' }),
    PositionsInClusters: z
      .record(z.string(), z.int().openapi({ description: 'Product Cluster ID.' }))
      .exactOptional()
      .openapi({
        description:
          'Product Clusters position in each Cluster. Structure: "{Product Cluster ID}": {Position}.\n\n`{Product Cluster ID}` is a string, while `{Position}` is an integer.',
      }),
    ProductCategories: z
      .record(z.string(), z.string().openapi({ description: 'Category ID.' }))
      .openapi({
        description:
          'Object containing product categories. Structure: "{CategoryID}": "{CategoryName}". Both the key and the value are strings.',
      }),
    ProductCategoryIds: z
      .string()
      .openapi({ description: 'Category path composed by category IDs separated by `/`.' }),
    ProductClusterHighlights: z
      .record(z.string(), z.string().openapi({ description: 'Product Cluster ID.' }))
      .exactOptional()
      .openapi({
        description:
          'Product Clusters Highlights. Structure: "{Product Cluster ID}": "{Product Cluster Name}". Both the key and the value are strings.',
      }),
    ProductClusterNames: z
      .record(z.string(), z.string().openapi({ description: 'Product Cluster ID.' }))
      .exactOptional()
      .openapi({
        description:
          'Product Clusters Names. Structure: "{Product Cluster ID}": "{Product Cluster Name}". Both the key and the value are strings.',
      }),
    ProductClustersIds: z
      .string()
      .openapi({ description: 'Product Cluster IDs separated by comma (`,`).' }),
    ProductDescription: z
      .string()
      .openapi({ description: 'Product Description. HTML is allowed.' }),
    ProductFinalScore: z.int().exactOptional().openapi({ description: 'Product Final Score.' }),
    ProductGlobalCategoryId: z
      .int()
      .nullable()
      .openapi({ description: 'Product Global Category ID.' }),
    ProductId: z.int32().openapi({ description: 'Product ID.' }),
    ProductIsVisible: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Defines if the product is visible or not.' }),
    ProductName: z.string().openapi({ description: 'Product Name.' }),
    ProductRefId: z.string().exactOptional().openapi({ description: 'Product Reference ID.' }),
    ProductSpecifications: z
      .array(ProductSpecificationSchema)
      .openapi({ description: 'Array with related Product Specifications.' }),
    RealDimension: RealDimensionSchema,
    ReleaseDate: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Release date of the product.' }),
    RewardValue: z.number().openapi({ description: 'Reward value related to the SKU.' }),
    SalesChannels: z
      .array(z.int32().openapi({ description: 'Trade policy ID.' }))
      .openapi({ description: 'Array of trade policy IDs.' }),
    Services: z
      .array(z.string().openapi({ description: 'Service IDs of each service related to the SKU.' }))
      .openapi({ description: 'Array with Service IDs that are related to the SKU.' }),
    ShowIfNotAvailable: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Defines if the product will be shown if it is not available.' }),
    SkuName: z.string().openapi({ description: 'SKU Name.' }),
    SkuSellers: z
      .array(SkuSellerSchema)
      .openapi({ description: 'Array with related Sellers data.' }),
    SkuSpecifications: z
      .array(SkuSpecificationSchema)
      .openapi({ description: 'Array with related SKU Specifications.' }),
    TaxCode: z.string().exactOptional().openapi({ description: 'SKU Tax Code.' }),
    UnitMultiplier: z
      .number()
      .openapi({
        description:
          'This is the multiple number of SKU. If the Multiplier is 5.0000, the product can be added in multiple quantities of 5, 10, 15, 20, onward.',
      }),
  })
  .openapi({
    example: {
      AlternateIdValues: ['1'],
      AlternateIds: { RefId: '1' },
      Attachments: [],
      BrandId: '2000005',
      BrandName: 'Petmate',
      CSCIdentification: null,
      Categories: [],
      CategoriesFullPath: ['/3/15/', '/3/', '/1/'],
      Collections: [],
      CommercialConditionId: 1,
      ComplementName: '',
      DetailUrl: '/caixa-de-areia-azul-petmate/p',
      Dimension: { cubicweight: 0.2083, height: 10, length: 10, weight: 10, width: 10 },
      EstimatedDateArrival: null,
      Id: 310118450,
      ImageUrl:
        'https://lojadobreno.vteximg.com.br/arquivos/ids/155451-55-55/caixa-areia-azul-petmate.jpg?v=637139451191670000',
      Images: [
        {
          FileId: 155451,
          ImageName: null,
          ImageUrl:
            'https://lojadobreno.vteximg.com.br/arquivos/ids/155451/caixa-areia-azul-petmate.jpg?v=637139451191670000',
        },
      ],
      InformationSource: null,
      IsActive: true,
      IsBrandActive: true,
      IsDirectCategoryActive: true,
      IsGiftCardRecharge: false,
      IsInventoried: true,
      IsKit: false,
      IsProductActive: true,
      IsTransported: true,
      KeyWords: '',
      KitItems: [],
      ManufacturerCode: '123',
      MeasurementUnit: 'un',
      ModalType: null,
      NameComplete: 'Caixa de Areia Azul Petmate sku test',
      PositionsInClusters: { '151': 1, '158': 2 },
      ProductCategories: { '1': 'Alimentação', '3': 'Higiene', '15': 'Caixa de Areia' },
      ProductCategoryIds: '/3/15/',
      ProductClusterHighlights: { '151': 'asdfghj' },
      ProductClusterNames: { '151': 'asdfghj', '158': 'Coleção halloween' },
      ProductClustersIds: '151,158',
      ProductDescription: '',
      ProductFinalScore: 0,
      ProductGlobalCategoryId: 5000,
      ProductId: 2,
      ProductIsVisible: true,
      ProductName: 'Caixa de Areia Azul Petmate',
      ProductRefId: '',
      ProductSpecifications: [],
      RealDimension: {
        realCubicWeight: 0,
        realHeight: 0,
        realLength: 0,
        realWeight: 0,
        realWidth: 0,
      },
      ReleaseDate: '2020-01-06T00:00:00Z',
      RewardValue: 0,
      SalesChannels: [1, 3],
      Services: [],
      ShowIfNotAvailable: true,
      SkuName: 'sku test',
      SkuSellers: [
        {
          FreightCommissionPercentage: 0,
          IsActive: true,
          ProductCommissionPercentage: 0,
          SellerId: '1',
          SellerStockKeepingUnitId: '310118450',
          StockKeepingUnitId: 310118450,
        },
      ],
      SkuSpecifications: [],
      TaxCode: '',
      UnitMultiplier: 1,
      Videos: [],
    },
    required: [
      'Id',
      'ProductId',
      'NameComplete',
      'ProductName',
      'ProductDescription',
      'SkuName',
      'IsActive',
      'IsTransported',
      'IsInventoried',
      'IsGiftCardRecharge',
      'ImageUrl',
      'DetailUrl',
      'CSCIdentification',
      'BrandId',
      'BrandName',
      'Dimension',
      'RealDimension',
      'ManufacturerCode',
      'IsKit',
      'KitItems',
      'Services',
      'Categories',
      'Attachments',
      'Collections',
      'SkuSellers',
      'SalesChannels',
      'Images',
      'SkuSpecifications',
      'ProductSpecifications',
      'ProductClustersIds',
      'ProductCategoryIds',
      'ProductGlobalCategoryId',
      'ProductCategories',
      'CommercialConditionId',
      'RewardValue',
      'AlternateIds',
      'AlternateIdValues',
      'EstimatedDateArrival',
      'MeasurementUnit',
      'UnitMultiplier',
      'InformationSource',
      'ModalType',
    ],
    title: 'GetSKUAltID',
  })
  .openapi('GetSKUAltID')

const GetSKUandContextSchema = z
  .object({
    AlternateIdValues: z
      .array(z.string())
      .openapi({ description: 'Array with values of alternative SKU IDs.' }),
    AlternateIds: AlternateIdsSchema,
    Attachments: z
      .array(AttachmentSchema)
      .openapi({ description: 'Array with Attachments ID that are related to the SKU.' }),
    BrandId: z.string().openapi({ description: 'Product Brand ID.' }),
    BrandName: z.string().openapi({ description: 'Product Brand Name.' }),
    CSCIdentification: z.string().nullable().openapi({ description: 'SKU Seller identification.' }),
    Categories: z
      .array(z.string().openapi({ description: 'Category ID.' }))
      .openapi({ description: 'Array with Categories from the related Product.' }),
    Collections: z
      .array(z.string().openapi({ description: 'Collection ID.' }))
      .openapi({ description: 'Array with Collections ID that are related to the Product.' }),
    CommercialConditionId: z.int32().openapi({ description: 'SKU Commercial Condition ID.' }),
    ComplementName: z.string().exactOptional().openapi({ description: 'Product Complement Name.' }),
    DetailUrl: z.string().openapi({ description: 'Product URL.' }),
    Dimension: DimensionSchema,
    EstimatedDateArrival: z
      .string()
      .nullable()
      .openapi({
        description:
          'To add the product as pre-sale, enter the product estimated arrival date in [ISO-8601](https://en.wikipedia.org/wiki/ISO_8601) format. You must take into consideration both the launch date and the freight calculation for the arrival date.',
      }),
    Id: z.int32().openapi({ description: 'SKU ID.' }),
    ImageUrl: z.string().openapi({ description: 'SKU image URL.' }),
    Images: z.array(ImageSchema).openapi({ description: 'Array with SKU images.' }),
    InformationSource: z.string().nullable().openapi({ description: 'Information Source.' }),
    IsActive: z.boolean().openapi({ description: 'Defines if the SKU is active or not.' }),
    IsGiftCardRecharge: z
      .boolean()
      .openapi({ description: 'Defines if the purchase will generate a reward.' }),
    IsInventoried: z.boolean().nullable().openapi({ deprecated: true }),
    IsKit: z.boolean().openapi({ description: 'Defines if the SKU is part of a bundle.' }),
    IsProductActive: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Defines if the product is active or not.' }),
    IsTransported: z.boolean().nullable().openapi({ deprecated: true }),
    KeyWords: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Keywords related to the product.' }),
    KitItems: z
      .array(z.string().openapi({ description: 'SKU ID.' }))
      .openapi({ description: 'Array with SKU IDs of bundle components.' }),
    ManufacturerCode: z.string().openapi({ description: 'Product Supplier ID.' }),
    MeasurementUnit: z.string().openapi({ description: 'SKU Measurement Unit.' }),
    ModalType: z.string().nullable().openapi({ description: 'Modal Type.' }),
    NameComplete: z.string().openapi({ description: 'Product Name and SKU Name concatenated.' }),
    ProductCategories: z
      .record(z.string(), z.string().openapi({ description: 'Category ID.' }))
      .openapi({
        description:
          'Object containing product categories. Structure: "{CategoryID}": "{CategoryName}".',
      }),
    ProductCategoryIds: z
      .string()
      .openapi({ description: 'Category Hierarchy with Category IDs.' }),
    ProductClustersIds: z.string().openapi({ description: 'Product Clusters IDs.' }),
    ProductDescription: z
      .string()
      .openapi({ description: 'Product Description. HTML is allowed.' }),
    ProductFinalScore: z.int().exactOptional().openapi({ description: 'Product Final Score.' }),
    ProductGlobalCategoryId: z.int().nullable().openapi({ description: 'Global Category ID.' }),
    ProductId: z.int32().openapi({ description: 'ID of the related Product.' }),
    ProductIsVisible: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Defines if the product is visible or not.' }),
    ProductName: z.string().openapi({ description: 'Product Name.' }),
    ProductRefId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Reference ID of the related Product.' }),
    ProductSpecifications: z
      .array(ProductSpecificationSchema)
      .openapi({ description: 'Array with related Product Specifications.' }),
    RealDimension: RealDimensionSchema,
    ReleaseDate: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Release date of the product.' }),
    RewardValue: z.number().openapi({ description: 'Reward value related to the SKU.' }),
    SalesChannels: z
      .array(z.int32())
      .openapi({
        description: 'Array with the ID of all the Sales Channels that are related to the product.',
      }),
    Services: z
      .array(z.string().openapi({ description: 'Service ID.' }))
      .openapi({ description: 'Array with Service IDs that are related to the SKU.' }),
    ShowIfNotAvailable: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Defines if the product will be shown if it is not available.' }),
    SkuName: z.string().openapi({ description: 'SKU Name.' }),
    SkuSellers: z.array(SkuSellerSchema).openapi({ description: 'Array with SKU Sellers data.' }),
    SkuSpecifications: z
      .array(SkuSpecificationSchema)
      .openapi({ description: 'Array with related SKU Specifications.' }),
    TaxCode: z.string().exactOptional().openapi({ description: 'SKU Tax Code.' }),
    UnitMultiplier: z
      .number()
      .openapi({
        description:
          'This is the multiple number of SKU. If the Multiplier is 5.0000, the product can be added in multiple quantities of 5, 10, 15, 20, onward.',
      }),
  })
  .openapi({
    example: {
      AlternateIdValues: ['1'],
      AlternateIds: { RefId: '1' },
      Attachments: [],
      BrandId: '2000005',
      BrandName: 'Petmate',
      CSCIdentification: null,
      Categories: [],
      CategoriesFullPath: ['/3/15/', '/3/', '/1/'],
      Collections: [],
      CommercialConditionId: 1,
      ComplementName: '',
      DetailUrl: '/caixa-de-areia-azul-petmate/p',
      Dimension: { cubicweight: 0.2083, height: 10, length: 10, weight: 10, width: 10 },
      EstimatedDateArrival: null,
      Id: 310118450,
      ImageUrl:
        'https://lojadobreno.vteximg.com.br/arquivos/ids/155451-55-55/caixa-areia-azul-petmate.jpg?v=637139451191670000',
      Images: [
        {
          FileId: 155451,
          ImageName: null,
          ImageUrl:
            'https://lojadobreno.vteximg.com.br/arquivos/ids/155451/caixa-areia-azul-petmate.jpg?v=637139451191670000',
        },
      ],
      InformationSource: null,
      IsActive: true,
      IsBrandActive: true,
      IsDirectCategoryActive: true,
      IsGiftCardRecharge: false,
      IsInventoried: true,
      IsKit: false,
      IsProductActive: true,
      IsTransported: true,
      KeyWords: '',
      KitItems: [],
      ManufacturerCode: '123',
      MeasurementUnit: 'un',
      ModalType: null,
      NameComplete: 'Caixa de Areia Azul Petmate sku test',
      PositionsInClusters: { '151': 1, '158': 2 },
      ProductCategories: { '1': 'Alimentação', '3': 'Higiene', '15': 'Caixa de Areia' },
      ProductCategoryIds: '/3/15/',
      ProductClusterHighlights: { '151': 'asdfghj' },
      ProductClusterNames: { '151': 'asdfghj', '158': 'Coleção halloween' },
      ProductClustersIds: '151,158',
      ProductDescription: '',
      ProductFinalScore: 0,
      ProductGlobalCategoryId: 5000,
      ProductId: 2,
      ProductIsVisible: true,
      ProductName: 'Caixa de Areia Azul Petmate',
      ProductRefId: '',
      ProductSpecifications: [],
      RealDimension: {
        realCubicWeight: 0,
        realHeight: 0,
        realLength: 0,
        realWeight: 0,
        realWidth: 0,
      },
      ReleaseDate: '2020-01-06T00:00:00Z',
      RewardValue: 0,
      SalesChannels: [1, 3],
      Services: [],
      ShowIfNotAvailable: true,
      SkuName: 'sku test',
      SkuSellers: [
        {
          FreightCommissionPercentage: 0,
          IsActive: true,
          ProductCommissionPercentage: 0,
          SellerId: '1',
          SellerStockKeepingUnitId: '310118450',
          StockKeepingUnitId: 310118450,
        },
      ],
      SkuSpecifications: [],
      TaxCode: '',
      UnitMultiplier: 1,
      Videos: [],
    },
    required: [
      'Id',
      'ProductId',
      'NameComplete',
      'ProductName',
      'ProductDescription',
      'SkuName',
      'IsActive',
      'IsTransported',
      'IsInventoried',
      'IsGiftCardRecharge',
      'ImageUrl',
      'DetailUrl',
      'CSCIdentification',
      'BrandId',
      'BrandName',
      'Dimension',
      'RealDimension',
      'ManufacturerCode',
      'IsKit',
      'KitItems',
      'Services',
      'Categories',
      'Attachments',
      'Collections',
      'SkuSellers',
      'SalesChannels',
      'Images',
      'SkuSpecifications',
      'ProductSpecifications',
      'ProductClustersIds',
      'ProductCategoryIds',
      'ProductGlobalCategoryId',
      'ProductCategories',
      'CommercialConditionId',
      'RewardValue',
      'AlternateIds',
      'AlternateIdValues',
      'EstimatedDateArrival',
      'MeasurementUnit',
      'UnitMultiplier',
      'InformationSource',
      'ModalType',
    ],
    title: 'GetSKUandContext',
  })
  .openapi('GetSKUandContext')

const GetSpecFieldValueSchema = z
  .object({
    FieldValueId: z.int32().openapi({ description: 'Specification Field Value ID.' }),
    IsActive: z
      .boolean()
      .openapi({
        description: 'Defines if the Specification Field is active (`true`) or inactive (`false`).',
      }),
    Position: z.int32().openapi({ description: 'Specification Field Value Position.' }),
    Value: z.string().openapi({ description: 'Specification Field Value.' }),
  })
  .openapi({
    example: { FieldValueId: 52, IsActive: true, Position: 1, Value: '0 a 6 meses' },
    required: ['FieldValueId', 'Value', 'IsActive', 'Position'],
    title: 'GetSpecFieldValue',
  })
  .openapi('GetSpecFieldValue')

const GetorUpdateProductSpecificationSchema = z
  .object({
    Id: z.int32().exactOptional().openapi({ description: 'ID of the Specification.', example: 7 }),
    Name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Name of the Specification.', example: 'Fabric' }),
    Value: z
      .array(z.string().openapi({ description: 'Specification value.', example: 'Cotton' }))
      .openapi({ description: 'Array with Specification values.' }),
  })
  .openapi({
    example: { Id: 30, Name: 'Material', Value: ['Iron', 'Plastic'] },
    required: ['Value'],
    title: 'GetorUpdateProductSpecification',
  })
  .openapi('GetorUpdateProductSpecification')

const SKUFileSchema = z
  .file()
  .openapi({
    type: 'string',
    format: 'binary',
    description: 'The image file has a size limit of 3200 x 3200 pixels.',
  })
  .openapi('SKUFile')

const SKUFileURLSchema = z
  .object({
    IsMain: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Defines if the Image is the main image of the SKU.',
        example: true,
        title: 'IsMain',
      }),
    Label: z
      .string()
      .exactOptional()
      .openapi({ description: 'SKU image label.', example: 'Main', title: 'Label' }),
    Name: z
      .string()
      .openapi({ description: 'SKU image name.', example: 'Nike-Red-Janoski-1', title: 'Name' }),
    Text: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'General text of the image.',
        example: 'Nike-Red-Janoski',
        title: 'Text',
      }),
    Url: z
      .string()
      .openapi({
        description:
          "External Image's URL.  The URL must start with the protocol identifier (`http://` or `https://`) and end with the file extension (`.jpg`, `.png` or `.gif`).",
        example: 'https://m.media-amazon.com/images/I/610G2-sJx5L._AC_UX695_.jpg',
        title: 'Url',
      }),
  })
  .openapi({ required: ['Name', 'Url'] })
  .openapi('SKUFileURL')

const SKUServiceSchema = z
  .object({
    Id: z.int().exactOptional().openapi({ description: 'SKU Service ID.', example: 1 }),
    IsActive: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Defines if the SKU Service is active or not.', example: true }),
    Name: z
      .string()
      .exactOptional()
      .openapi({
        description: 'SKU Service Name. Maximum of 50 characters.',
        example: 'Engraving',
      }),
    SkuId: z.int().exactOptional().openapi({ description: 'SKU ID.', example: 1 }),
    SkuServiceTypeId: z
      .int()
      .exactOptional()
      .openapi({ description: 'SKU Service Type ID.', example: 1 }),
    SkuServiceValueId: z
      .int()
      .exactOptional()
      .openapi({ description: 'SKU Service Value ID.', example: 1 }),
    Text: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Internal description of the SKU Service. Maximum of 100 characters.',
        example: 'Name engraving additional service.',
      }),
  })
  .openapi({
    example: {
      Id: 1,
      IsActive: false,
      Name: 'name',
      SkuId: 1,
      SkuServiceTypeId: 1,
      SkuServiceValueId: 1,
      Text: 'text',
    },
    required: [],
  })
  .openapi('SKUService')

const SKUServiceTypeRequestSchema = z
  .object({
    IsActive: z
      .boolean()
      .default(true)
      .openapi({
        description: 'Defines if the SKU Service Type is active or not.',
        title: 'IsActive',
      }),
    IsGiftCard: z
      .boolean()
      .openapi({
        description: 'Defines if the SKU Service Type is displayed as a Gift Card.',
        example: false,
        title: 'IsGiftCard',
      }),
    IsRequired: z
      .boolean()
      .openapi({
        description: 'Defines if the SKU Service type is mandatory.',
        example: false,
        title: 'IsRequired',
      }),
    Name: z
      .string()
      .default('Test API Sku Services')
      .openapi({ description: 'SKU Service Type Name. Maximum of 100 characters.', title: 'Name' }),
    ShowOnAttachmentFront: z
      .boolean()
      .openapi({
        description: 'Defines if the SKU Service Type has an attachment.',
        example: false,
        title: 'ShowOnAttachmentFront',
      }),
    ShowOnCartFront: z
      .boolean()
      .openapi({
        description: 'Defines if the SKU Service Type is displayed on the cart screen.',
        example: false,
        title: 'ShowOnCartFront',
      }),
    ShowOnFileUpload: z
      .boolean()
      .openapi({
        description: 'Defines if the SKU Service Type can be associated with an attachment or not.',
        example: false,
        title: 'ShowOnFileUpload',
      }),
    ShowOnProductFront: z
      .boolean()
      .openapi({
        deprecated: true,
        description: 'Deprecated',
        example: false,
        title: 'ShowOnProductFront',
      }),
  })
  .openapi({
    required: [
      'Name',
      'IsActive',
      'ShowOnProductFront',
      'ShowOnCartFront',
      'ShowOnAttachmentFront',
      'ShowOnFileUpload',
      'IsGiftCard',
      'IsRequired',
    ],
  })
  .openapi('SKUServiceTypeRequest')

const SKUServiceTypeResponseSchema = z
  .object({
    Id: z
      .int()
      .exactOptional()
      .openapi({ description: 'SKU Service Type ID.', example: 2, title: 'Id' }),
    IsActive: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Defines if the SKU Service Type is active or not.',
        example: true,
        title: 'IsActive',
      }),
    IsGiftCard: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        description: 'Defines if the SKU Service Type is displayed as a Gift Card.',
        title: 'IsGiftCard',
      }),
    IsRequired: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        description: 'Defines if the SKU Service type is mandatory.',
        title: 'IsRequired',
      }),
    Name: z
      .string()
      .exactOptional()
      .openapi({
        description: 'SKU Service Type Name. Maximum of 100 characters.',
        example: 'Test API Sku Services',
        title: 'Name',
      }),
    ShowOnAttachmentFront: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        description: 'Defines if the SKU Service Type has an attachment.',
        title: 'ShowOnAttachmentFront',
      }),
    ShowOnCartFront: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Defines if the SKU Service Type is displayed on the cart screen.',
        example: false,
        title: 'ShowOnCartFront',
      }),
    ShowOnFileUpload: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        description: 'Defines if the SKU Service Type can be associated with an attachment or not.',
        title: 'ShowOnFileUpload',
      }),
    ShowOnProductFront: z
      .boolean()
      .exactOptional()
      .openapi({
        deprecated: true,
        description: 'Deprecated.',
        example: false,
        title: 'ShowOnProductFront',
      }),
  })
  .openapi({
    example: {
      Id: 2,
      IsActive: true,
      IsGiftCard: true,
      IsRequired: true,
      Name: 'Test API SKU Services',
      ShowOnAttachmentFront: true,
      ShowOnCartFront: true,
      ShowOnFileUpload: true,
      ShowOnProductFront: true,
    },
    required: [],
  })
  .openapi('SKUServiceTypeResponse')

const SKUServiceValueRequestSchema = z
  .object({
    Cost: z
      .number()
      .openapi({ description: 'SKU Service Value cost.', example: 10.5, title: 'Cost' }),
    Name: z
      .string()
      .openapi({
        description: 'SKU Service Value name. Maximum of 100 characters.',
        example: 'Test ServiceValue API',
        title: 'Name',
      }),
    SkuServiceTypeId: z
      .int()
      .openapi({ description: 'SKU Service Type ID.', example: 2, title: 'SkuServiceTypeId' }),
    Value: z
      .number()
      .openapi({ description: 'SKU Service Value value.', example: 10.5, title: 'Value' }),
  })
  .openapi({
    example: { Cost: 10.5, Name: 'Test ServiceValue API', SkuServiceTypeId: 2, Value: 10.5 },
    required: ['SkuServiceTypeId', 'Name', 'Value', 'Cost'],
    title: 'Request body',
  })
  .openapi('SKUServiceValueRequest')

const SKUServiceValueResponseSchema = z
  .object({
    Cost: z
      .number()
      .openapi({ description: 'SKU Service Value cost.', example: 10.5, title: 'Cost' }),
    Id: z
      .int()
      .exactOptional()
      .openapi({ description: 'SKU Service Value ID.', example: 2, title: 'Id' }),
    Name: z
      .string()
      .openapi({
        description: 'SKU Service Value name. Maximum of 100 characters.',
        example: 'Test ServiceValue API',
        title: 'Name',
      }),
    SkuServiceTypeId: z
      .int()
      .openapi({ description: 'SKU Service Type ID.', example: 2, title: 'SkuServiceTypeId' }),
    Value: z
      .number()
      .openapi({ description: 'SKU Service Value value.', example: 10.5, title: 'Value' }),
  })
  .openapi({
    example: { Cost: 10.5, Id: 2, Name: 'Test ServiceValue API', SkuServiceTypeId: 2, Value: 10.5 },
    required: ['SkuServiceTypeId', 'Name', 'Value', 'Cost'],
    title: 'Request body',
  })
  .openapi('SKUServiceValueResponse')

const SKUSpecificationResponseSchema = z
  .object({
    FieldId: z.int().exactOptional().openapi({ description: 'Specification ID.' }),
    FieldValueId: z
      .int()
      .exactOptional()
      .openapi({
        description: 'Specification Value ID. Required only for `FieldTypeId` as `5`, `6` and `7`.',
      }),
    Id: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'ID of the association of the specification and the SKU. This ID is used to update or delete the specification.',
      }),
    SkuId: z.int().exactOptional().openapi({ description: 'SKU ID.' }),
    Text: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Value of specification. Only for `FieldTypeId` different from `5`, `6` and `7`.',
      }),
  })
  .openapi({
    example: { FieldId: 193, FieldValueId: 360, Id: 1505, SkuId: 1234568387, Text: 'Size 10' },
    title: '',
    required: [],
  })
  .openapi('SKUSpecificationResponse')

const SkuComplementSchema = z
  .array(
    z
      .object({
        ComplementTypeId: z
          .int()
          .exactOptional()
          .openapi({
            description:
              'Complement Type ID. This represents the type of the complement. The possible values are: `1` for Accessory; `2` for Suggestion; `3` for Similar Product; `5` for Show Together.',
          }),
        Id: z
          .int()
          .exactOptional()
          .openapi({ description: 'SKU Complement’s unique numerical identifier.' }),
        ParentSkuId: z
          .int()
          .exactOptional()
          .openapi({ description: 'ID of the Parent SKU, where the Complement will be inserted.' }),
        SkuId: z
          .int()
          .exactOptional()
          .openapi({
            description: 'ID of the SKU which will be inserted as a Complement in the Parent SKU.',
          }),
      })
      .openapi({ required: [] }),
  )
  .openapi({
    example: [{ ComplementTypeId: 1, Id: 61, ParentSkuId: 1, SkuId: 7 }],
    required: ['Id', 'SkuId', 'ParentSkuId', 'ComplementTypeId'],
    title: 'SKU Complement',
  })
  .openapi('SkuComplement')

const SkuKitSchema = z
  .object({
    Id: z
      .int()
      .exactOptional()
      .openapi({ description: 'SKU Kit ID, same as `StockKeepingUnitParent`.' }),
    Quantity: z.int().exactOptional().openapi({ description: 'Component quantity.' }),
    StockKeepingUnitId: z
      .int()
      .exactOptional()
      .openapi({ description: 'SKU ID of the kit component.' }),
    StockKeepingUnitParent: z.int().exactOptional().openapi({ description: 'Parent SKU ID.' }),
    UnitPrice: z.int().exactOptional().openapi({ description: 'Component price per unit.' }),
  })
  .openapi({
    example: {
      Id: 7,
      Quantity: 1,
      StockKeepingUnitId: 1,
      StockKeepingUnitParent: 7,
      UnitPrice: 50,
    },
    title: '',
    required: [],
  })
  .openapi('SkuKit')

const SkulistbyProductIdSchema = z
  .object({
    ActivateIfPossible: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'When set to `true`, this attribute will automatically update the SKU as active once associated with an image or an active component.',
      }),
    CommercialConditionId: z
      .int32()
      .exactOptional()
      .openapi({ description: 'SKU Commercial Condition ID.' }),
    CubicWeight: z
      .number()
      .exactOptional()
      .openapi({
        description:
          '[Cubic weight](https://help.vtex.com/en/tutorial/understanding-the-cubic-weight-factor--tutorials_128).',
      }),
    DateUpdated: z
      .string()
      .exactOptional()
      .openapi({ description: 'Date when the product was updated for the most recent time.' }),
    EstimatedDateArrival: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'SKU estimated arrival date in [ISO-8601](https://en.wikipedia.org/wiki/ISO_8601) format, when the product is on pre-sale. You must take into consideration both the launch date and the freight calculation for the arrival date.',
      }),
    FlagKitItensSellApart: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Defines if the SKU bundle items can be sold separately.' }),
    Height: z.number().exactOptional().openapi({ description: 'SKU Height.' }),
    Id: z.int32().exactOptional().openapi({ description: 'SKU ID.' }),
    InternalNote: z.string().nullable().exactOptional().openapi({ description: 'Internal note.' }),
    IsActive: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Defines if the SKU is active or not.' }),
    IsDynamicKit: z.string().nullable().exactOptional().openapi({ deprecated: true }),
    IsGiftCardRecharge: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Defines if the purchase of the SKU will generate reward value for the customer.',
      }),
    IsInventoried: z.boolean().nullable().exactOptional().openapi({ deprecated: true }),
    IsKit: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Flag to set whether the product SKU is made up of one or more SKUs, thereby becoming a bundle. Must be enabled if you are adding a bundle. Once activated, the flag cannot be reverted.',
      }),
    IsPersisted: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Defines if the SKU is persisted.' }),
    IsRemoved: z
      .boolean()
      .exactOptional()
      .openapi({ deprecated: true, description: 'Defines if the SKU is removed.' }),
    IsTransported: z.boolean().nullable().exactOptional().openapi({ deprecated: true }),
    Length: z.number().exactOptional().openapi({ description: 'SKU Length.' }),
    ManufacturerCode: z.string().exactOptional().openapi({ description: 'Product Supplier ID.' }),
    MeasurementUnit: z.string().exactOptional().openapi({ description: 'Measurement unit.' }),
    ModalId: z.int32().exactOptional().openapi({ description: 'Delivery Method (Modal Type) ID.' }),
    ModalType: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Links an unusual type of SKU to a carrier specialized in delivering it. This field should be filled in with the name of the modal (e.g. "Chemicals" or "Refrigerated products"). To learn more about this feature, read our articles [How the modal works](https://help.vtex.com/en/tutorial/how-does-the-modal-work--tutorials_125) and [Setting up modal for carriers](https://help.vtex.com/en/tutorial/configure-modal--3jhLqxuPhuiq24UoykCcqy).',
      }),
    Name: z.string().exactOptional().openapi({ description: 'SKU Name.' }),
    Position: z.int32().exactOptional().openapi({ description: 'SKU Position.' }),
    ProductId: z.int32().exactOptional().openapi({ description: 'Product ID.' }),
    RealHeight: z.number().nullable().exactOptional().openapi({ description: 'Real SKU Height.' }),
    RealLength: z.number().nullable().exactOptional().openapi({ description: 'Real SKU Length.' }),
    RealWeightKg: z
      .number()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Real Weight of the SKU in the measurement [configured in the store](https://help.vtex.com/en/tutorial/filling-in-system-settings--tutorials_269), which by default is in grams.',
      }),
    RealWidth: z.number().nullable().exactOptional().openapi({ description: 'Real SKU Width.' }),
    RefId: z.string().exactOptional().openapi({ description: 'Product Reference ID.' }),
    ReferenceStockKeepingUnitId: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'SKU Reference ID.' }),
    RewardValue: z
      .number()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Reward value related to the SKU.' }),
    UnitMultiplier: z
      .number()
      .exactOptional()
      .openapi({
        description:
          'This is the multiple number of SKU. If the Multiplier is 5.0000, the product can be added in multiple quantities of 5, 10, 15, 20, onward.',
      }),
    WeightKg: z
      .number()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Weight of the SKU in the measurement [configured in the store](https://help.vtex.com/en/tutorial/filling-in-system-settings--tutorials_269), which by default is in grams.',
      }),
    Width: z.number().exactOptional().openapi({ description: 'SKU Width.' }),
    isKitOptimized: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Defines if the SKU is a Optimized bundle.' }),
  })
  .openapi({
    example: {
      ActivateIfPossible: true,
      CommercialConditionId: 1,
      CubicWeight: 1,
      DateUpdated: '2021-10-29T18:25:00',
      EstimatedDateArrival: null,
      FlagKitItensSellApart: false,
      Height: 6.5,
      Id: 1,
      InternalNote: null,
      IsActive: true,
      IsGiftCardRecharge: false,
      IsInventoried: true,
      IsKit: false,
      IsPersisted: true,
      IsTransported: true,
      Length: 24,
      ManufacturerCode: '',
      MeasurementUnit: 'un',
      ModalId: 1,
      ModalType: null,
      Name: 'Ração Royal Canin Feline Urinary 500g',
      Position: 1,
      ProductId: 1,
      RealHeight: 2.2,
      RealLength: 4.4,
      RealWeightKg: 1.1,
      RealWidth: 3.3,
      RefId: '0001',
      ReferenceStockKeepingUnitId: null,
      RewardValue: null,
      UnitMultiplier: 300,
      WeightKg: 550,
      Width: 14,
      isKitOptimized: false,
    },
    title: 'SkulistbyProductId',
    required: [],
  })
  .openapi('SkulistbyProductId')

const SpecificationGroupInsertRequestSchema = z
  .object({
    CategoryId: z.int32().openapi({ description: 'Category ID.' }),
    Name: z.string().openapi({ description: 'Specification Group Name.' }),
  })
  .openapi({
    example: { CategoryId: 1, Name: 'GroupName1' },
    required: ['CategoryId', 'Name'],
    title: 'Request body',
  })
  .openapi('SpecificationGroupInsertRequest')

const SpecificationsGroupSchema = z
  .object({
    CategoryId: z.int().nullable().openapi({ description: 'Category ID.' }),
    Id: z.int32().openapi({ description: 'Specification Group ID.' }),
    Name: z.string().openapi({ description: 'Specification Group Name.' }),
    Position: z.int32().nullable().openapi({ description: 'Specification Group Position.' }),
  })
  .openapi({
    example: { CategoryId: 1, Id: 4, Name: 'Sizes', Position: 1 },
    required: ['CategoryId', 'Id', 'Name', 'Position'],
    title: 'SpecificationsGroup',
  })
  .openapi('SpecificationsGroup')

const SpecificationsInsertFieldRequestSchema = z
  .object({
    CategoryId: z.int().nullable().openapi({ description: 'Category ID.' }),
    DefaultValue: z
      .string()
      .nullable()
      .openapi({ description: 'Specification Field default Value.' }),
    Description: z.string().nullable().openapi({ description: 'Specification Field Description.' }),
    FieldGroupId: z.int32().openapi({ description: 'Specification Field Group ID.' }),
    FieldGroupName: z.string().openapi({ description: 'Specification Field Group Name.' }),
    FieldId: z.int().nullable().openapi({ description: 'Specification Field ID.' }),
    FieldTypeId: z.int32().openapi({ description: 'Specification Field Type ID.' }),
    FieldValueId: z.int().nullable().openapi({ description: 'Specification Field Value ID.' }),
    IsActive: z
      .boolean()
      .openapi({
        description: 'Defines if the Specification Field is active. The default value is `true`.',
      }),
    IsFilter: z
      .boolean()
      .openapi({
        description:
          'Store Framework - Deprecated.\r\nLegacy CMS Portal - To allow the specification to be used as a facet (filter) on the search navigation bar.\r\n',
      }),
    IsOnProductDetails: z
      .boolean()
      .openapi({
        description:
          'Store Framework - Deprecated.\r\nLegacy CMS Portal -If specification is visible on the product page.\r\n',
      }),
    IsRequired: z
      .boolean()
      .openapi({
        description: 'Makes the Specification Field mandatory (`true`) or optional (`false`).',
      }),
    IsSideMenuLinkActive: z
      .boolean()
      .openapi({
        description:
          'Store Framework - Deprecated.\r\nLegacy CMS Portal - To make the specification field clickable in the search navigation bar.\r\n',
      }),
    IsStockKeepingUnit: z
      .boolean()
      .openapi({
        description:
          'If `true`, it will be added as a SKU specification. If `false`, it will be added as a product specification field.',
      }),
    IsTopMenuLinkActive: z
      .boolean()
      .openapi({
        description:
          "Store Framework - Deprecated.\r\nLegacy CMS Portal - To make the specification visible in the store's upper menu.\r\n",
      }),
    IsWizard: z.boolean().openapi({ deprecated: true, description: 'Deprecated field.' }),
    Name: z.string().openapi({ description: 'Specification Field ID.' }),
    Position: z.int32().openapi({ description: 'Specification Field Position.' }),
  })
  .openapi({
    example: {
      CategoryId: 4,
      DefaultValue: null,
      Description: 'Composition of the product.',
      FieldGroupId: 20,
      FieldGroupName: 'Clothes specifications',
      FieldId: 88,
      FieldTypeId: 1,
      FieldValueId: 1,
      IsActive: true,
      IsFilter: true,
      IsOnProductDetails: false,
      IsRequired: true,
      IsSideMenuLinkActive: true,
      IsStockKeepingUnit: false,
      IsTopMenuLinkActive: true,
      IsWizard: false,
      Name: 'Material',
      Position: 1,
    },
    required: [
      'Name',
      'CategoryId',
      'IsActive',
      'FieldId',
      'IsRequired',
      'FieldTypeId',
      'FieldValueId',
      'Description',
      'IsStockKeepingUnit',
      'IsFilter',
      'IsOnProductDetails',
      'Position',
      'IsWizard',
      'IsTopMenuLinkActive',
      'IsSideMenuLinkActive',
      'DefaultValue',
      'FieldGroupId',
      'FieldGroupName',
    ],
    title: 'Request body',
  })
  .openapi('SpecificationsInsertFieldRequest')

const SpecificationsInsertFieldUpdateRequestSchema = z
  .object({
    CategoryId: z.int().nullable().openapi({ description: 'Category ID.' }),
    DefaultValue: z
      .string()
      .nullable()
      .openapi({ description: 'Specification Field default Value.' }),
    Description: z.string().nullable().openapi({ description: 'Specification Field Description.' }),
    FieldGroupId: z.int32().openapi({ description: 'Specification Field Group ID.' }),
    FieldGroupName: z.string().openapi({ description: 'Specification Field Group Name.' }),
    FieldId: z.int().nullable().openapi({ description: 'Specification Field ID.' }),
    FieldTypeId: z.int32().openapi({ description: 'Specification Field Type ID.' }),
    FieldValueId: z
      .int()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Specification Field Value ID.' }),
    IsActive: z
      .boolean()
      .openapi({
        description: 'Enables(`true`) or disables (`false`) the Specification Field.',
        example: true,
      }),
    IsFilter: z
      .boolean()
      .openapi({
        description:
          'Store Framework - Deprecated.\r\nLegacy CMS Portal - To allow the specification to be used as a facet (filter) on the search navigation bar.\r\n',
      }),
    IsOnProductDetails: z
      .boolean()
      .openapi({
        description:
          'Store Framework - Deprecated.\r\nLegacy CMS Portal -If specification is visible on the product page.\r\n',
      }),
    IsRequired: z
      .boolean()
      .openapi({
        description: 'Makes the Specification Field mandatory (`true`) or optional (`false`).',
      }),
    IsSideMenuLinkActive: z
      .boolean()
      .openapi({
        description:
          'Store Framework - Deprecated.\r\nLegacy CMS Portal - To make the specification field clickable in the search navigation bar.\r\n',
        example: false,
      }),
    IsStockKeepingUnit: z
      .boolean()
      .openapi({
        description:
          'If `true`, it will be added as a SKU specification field. If `false`, it will be added as a product specification field.',
      }),
    IsTopMenuLinkActive: z
      .boolean()
      .openapi({
        description:
          "Store Framework - Deprecated.\r\nLegacy CMS Portal - To make the specification visible in the store's upper menu.\r\n",
      }),
    IsWizard: z.boolean().openapi({ deprecated: true, description: 'Deprecated field.' }),
    Name: z.string().openapi({ description: 'Specification Field ID.' }),
    Position: z.int32().openapi({ description: 'Specification Field Position.' }),
  })
  .openapi({
    required: [
      'Name',
      'CategoryId',
      'IsActive',
      'FieldId',
      'IsRequired',
      'FieldTypeId',
      'Description',
      'IsStockKeepingUnit',
      'IsWizard',
      'IsFilter',
      'IsOnProductDetails',
      'Position',
      'IsTopMenuLinkActive',
      'IsSideMenuLinkActive',
      'DefaultValue',
      'FieldGroupId',
      'FieldGroupName',
    ],
    title: 'Request body',
  })
  .openapi('SpecificationsInsertFieldUpdateRequest')

const SpecificationsInsertFieldValueRequestSchema = z
  .object({
    FieldId: z.int32().openapi({ description: 'Specification Field ID.' }),
    IsActive: z
      .boolean()
      .openapi({
        description:
          'Defines if the Specification Field Value is active (`true`) or inactive (`false`).',
      }),
    Name: z.string().openapi({ description: 'Specification Field Value Name.' }),
    Position: z.int32().openapi({ description: 'Specification Field Value Position.' }),
    Text: z.string().openapi({ description: 'Specification Field Value Description.' }),
  })
  .openapi({
    example: {
      FieldId: 34,
      FieldValueId: 143,
      IsActive: true,
      Name: 'Cotton',
      Position: 100,
      Text: 'Cotton fibers',
    },
    required: ['FieldId', 'Name', 'Text', 'IsActive', 'Position'],
    title: 'SpecificationsInsertFieldValueRequest',
  })
  .openapi('SpecificationsInsertFieldValueRequest')

const SpecificationsUpdateFieldValueRequestSchema = z
  .object({
    FieldId: z.int().nullable().openapi({ description: 'Specification Field ID.' }),
    IsActive: z
      .boolean()
      .openapi({
        description:
          'Defines if the Specification Field Value is active (`true`) or inactive (`false`).',
      }),
    Name: z.string().openapi({ description: 'Specification Field Value Name.' }),
    Position: z.int32().openapi({ description: 'Specification Field Position.' }),
    Text: z.string().nullable().openapi({ description: 'Specification Field Value Description.' }),
  })
  .openapi({
    example: {
      FieldId: 1,
      FieldValueId: 143,
      IsActive: true,
      Name: 'Cotton',
      Position: 100,
      Text: 'Cotton fibers',
    },
    required: ['FieldId', 'Name', 'Text', 'IsActive', 'Position'],
    title: 'Request body',
  })
  .openapi('SpecificationsUpdateFieldValueRequest')

const SupplierRequestSchema = z
  .object({
    CellPhone: z
      .string()
      .openapi({ description: 'Supplier Cellphone.', example: '4444444444', title: 'CellPhone' }),
    Cnpj: z
      .string()
      .openapi({ description: 'Corporate legal ID.', example: '33304981001272', title: 'Cnpj' }),
    CorporateName: z
      .string()
      .openapi({
        description: 'Supplier Corporate Name.',
        example: 'TopStore',
        title: 'CorporateName',
      }),
    CorportePhone: z
      .string()
      .openapi({
        description: 'Supplier Corporate Phone.',
        example: '5555555555',
        title: 'CorportePhone',
      }),
    Email: z
      .string()
      .openapi({ description: 'Supplier email.', example: 'email@email.com', title: 'Email' }),
    IsActive: z
      .boolean()
      .openapi({
        description: 'Defines if the Supplier is active (`true`) or not (`false`).',
        example: false,
        title: 'IsActive',
      }),
    Name: z.string().openapi({ description: 'Supplier Name.', example: 'Supplier', title: 'Name' }),
    Phone: z
      .string()
      .openapi({ description: 'Supplier Phone.', example: '3333333333', title: 'Phone' }),
    StateInscription: z
      .string()
      .openapi({ description: 'State Inscription.', example: '123456', title: 'StateInscription' }),
  })
  .openapi({
    required: [
      'Name',
      'CorporateName',
      'StateInscription',
      'Cnpj',
      'Phone',
      'CellPhone',
      'CorportePhone',
      'Email',
      'IsActive',
    ],
    title: 'Request body',
  })
  .openapi('SupplierRequest')

const SupplierResponseSchema = z
  .object({
    CellPhone: z
      .string()
      .exactOptional()
      .openapi({ description: 'Supplier Cellphone.', example: '4444444444', title: 'CellPhone' }),
    Cnpj: z
      .string()
      .exactOptional()
      .openapi({ description: 'Corporate legal ID.', example: '33304981001272', title: 'Cnpj' }),
    CorporateName: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Supplier Corporate Name.',
        example: 'TopStore',
        title: 'CorporateName',
      }),
    CorportePhone: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Supplier Corporate Phone.',
        example: '5555555555',
        title: 'CorportePhone',
      }),
    Email: z
      .string()
      .exactOptional()
      .openapi({ description: 'Supplier email.', example: 'email@email.com', title: 'Email' }),
    Id: z
      .int()
      .exactOptional()
      .openapi({ description: 'Supplier unique identifier code.', example: 123, title: 'Id' }),
    IsActive: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Defines if the Supplier is active (`true`) or not (`false`).',
        example: false,
        title: 'IsActive',
      }),
    Name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Supplier Name.', example: 'Supplier', title: 'Name' }),
    Phone: z
      .string()
      .exactOptional()
      .openapi({ description: 'Supplier Phone.', example: '3333333333', title: 'Phone' }),
    StateInscription: z
      .string()
      .exactOptional()
      .openapi({ description: 'State Inscription.', example: '123456', title: 'StateInscription' }),
  })
  .openapi({ title: 'Response body', required: [] })
  .openapi('SupplierResponse')

const UpdateSellerRequestSchema = z
  .object({
    ArchiveId: z.int().openapi({ description: 'Seller archive ID.', example: 1 }),
    CNPJ: z
      .string()
      .openapi({ description: 'Company registration number.', example: '12035072751' }),
    CSCIdentification: z
      .string()
      .openapi({ description: 'CSC identification.', example: 'pedrostore' }),
    CatalogSystemEndpoint: z
      .string()
      .openapi({
        description:
          "URL of the endpoint of the seller's catalog. This field will only be displayed if the seller type is VTEX Store. The field format will be as follows: `http://{sellerName}.vtexcommercestable.com.br/api/catalog_system/`.",
        example: 'http://pedrostore.vtexcommercestable.com.br/api/catalog_system/',
      }),
    CategoryCommissionPercentage: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The percentage that must be filled in as agreed between the marketplace and the seller. If there is no such commission, please fill in the field with the value: `0.00`.',
        example: '[{"CategoryId":14,"ProductCommission":15.0,"FreightCommission":0.0}]',
      }),
    DeliveryPolicy: z
      .string()
      .openapi({
        description:
          'Text describing the delivery policy previously agreed between the marketplace and the seller.',
        example: 'Delivery policy text',
      }),
    Description: z
      .string()
      .openapi({
        description:
          'Text describing the seller with a marketing tone. You can display this text in the marketplace window display by [customizing the CMS](https://help.vtex.com/en/tutorial/list-of-controls-for-templates--tutorials_563).',
        example: 'Brief description',
      }),
    Email: z
      .string()
      .openapi({
        description: 'Email of the admin responsible for the seller.',
        example: 'breno@breno.com',
      }),
    ExchangeReturnPolicy: z
      .string()
      .openapi({
        description:
          'Text describing the exchange and return policy previously agreed between the marketplace and the seller.',
        example: 'Exchange return policy text',
      }),
    FreightCommissionPercentage: z
      .number()
      .openapi({
        description:
          'The percentage that must be filled in as agreed between the marketplace and the seller. If there is no such commission, please fill in the field with the value: `0.00`.',
        example: 0,
      }),
    FulfillmentEndpoint: z
      .string()
      .openapi({
        description:
          "URL of the endpoint for fulfillment of seller's orders, which the marketplace will use to communicate with the seller. This field applies to all sellers, regardless of their type. However, for `VTEX Stores`, you don’t need to fill it in because the system will do that automatically. You can edit this field once the seller has been successfully added.",
        example: 'http://pedrostore.vtexcommercestable.com.br/api/fulfillment?affiliateid=LDB&sc=1',
      }),
    FulfillmentSellerId: z
      .int()
      .openapi({
        description:
          'Identification code of the seller responsible for fulfilling the order. This is an optional field used when a seller sells SKUs from another seller. If the seller sells their own SKUs, it must be left blank.',
        example: 1,
      }),
    IsActive: z
      .boolean()
      .openapi({ description: 'If the selle is active (`true`) or not (`false`).', example: true }),
    IsBetterScope: z
      .boolean()
      .openapi({
        description:
          'Indicates whether it is a [comprehensive seller](https://help.vtex.com/en/tutorial/comprehensive-seller--5Qn4O2GpjUIzWTPpvLUfkI).',
        example: false,
      }),
    MerchantName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Name of the marketplace, used to guide payments. This field should be nulled if the marketplace is responsible for processing payments. Check out our [Split Payment](https://help.vtex.com/en/tutorial/split-payment--6k5JidhYRUxileNolY2VLx) article to know more.',
        example: 'pedrostore',
      }),
    Name: z
      .string()
      .openapi({
        description:
          "Name of the account in the seller's environment. You can find it on **Account settings > Account > Account Name**). Applicable only if the seller uses their own payment method.",
        example: 'My pedrostore',
      }),
    Password: z.string().openapi({ description: 'Seller password.', example: 'passoword' }),
    ProductCommissionPercentage: z
      .number()
      .openapi({
        description:
          'The percentage that must be filled in as agreed between the marketplace and the seller. If there is no such commission, please fill in the field with the value: `0.00`.',
        example: 0,
      }),
    SecutityPrivacyPolicy: z
      .string()
      .openapi({
        description:
          'Text describing the security policy previously agreed between the marketplace and the seller.',
        example: 'Secutity privacy policy text',
      }),
    SellerId: z
      .string()
      .openapi({
        description:
          'ID that identifies the seller in the marketplace. It can be the same as the seller name or a unique number. Check the **Sellers management** section in the Admin to get the correct ID.',
        example: 'pedrostore',
      }),
    SellerType: z.int().openapi({ description: 'Seller type.', example: 1 }),
    TrustPolicy: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Seller trust policy. The default value is `'Default'`, but if your store is a B2B marketplace and you want to share the customers'emails with the sellers you need to set this field as `'AllowEmailSharing'`.",
        example: 'Default',
      }),
    UrlLogo: z.string().openapi({ description: 'Seller URL logo.', example: '/myseller' }),
    UseHybridPaymentOptions: z
      .boolean()
      .openapi({
        description:
          'Allows customers to use gift cards from the seller to buy their products on the marketplace. It identifies purchases made with a gift card so that only the final price (with discounts applied) is paid to the seller.',
        example: false,
      }),
    UserName: z.string().openapi({ description: 'Seller username.', example: 'myseller' }),
  })
  .openapi({
    required: [
      'SellerId',
      'Name',
      'Email',
      'Description',
      'ExchangeReturnPolicy',
      'DeliveryPolicy',
      'UseHybridPaymentOptions',
      'UserName',
      'Password',
      'SecutityPrivacyPolicy',
      'CNPJ',
      'CSCIdentification',
      'ArchiveId',
      'UrlLogo',
      'ProductCommissionPercentage',
      'FreightCommissionPercentage',
      'FulfillmentEndpoint',
      'CatalogSystemEndpoint',
      'IsActive',
      'FulfillmentSellerId',
      'SellerType',
      'IsBetterScope',
    ],
    title: '',
  })
  .openapi('UpdateSellerRequest')

const AppKeySecurityScheme = { in: 'header', name: 'X-VTEX-API-AppKey', type: 'apiKey' }

const AppTokenSecurityScheme = { in: 'header', name: 'X-VTEX-API-AppToken', type: 'apiKey' }

export const getApiAddonPvtGiftlistGetListIdRoute = createRoute({
  method: 'get',
  path: '/api/addon/pvt/giftlist/get/{listId}',
  tags: ['Gift List'],
  summary: 'Get Gift List',
  description: 'Retrieves information about a Gift List by its ID.',
  operationId: 'GetGiftList',
  request: {
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
              'HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.',
            in: 'header',
            name: 'Accept',
            required: true,
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      listId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'Gift List unique numerical identifier.',
            in: 'path',
            name: 'listId',
            required: true,
            schema: { example: 1, type: 'integer' },
          },
          example: 1,
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
              IsPublic: z
                .boolean()
                .exactOptional()
                .openapi({
                  description: 'Defines if the gift list is public.',
                  example: true,
                  title: 'IsPublic',
                }),
              address: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({
                  description: 'Address of the gift list.',
                  example: 'Botafogo',
                  title: 'address',
                }),
              dateCreated: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Date when the gift list was created.',
                  example: '2013-10-31T19:03:00',
                  title: 'dateCreated',
                }),
              eventCity: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'City of the event associated with the Gift List.',
                  example: 'Rio de Janeiro',
                  title: 'eventCity',
                }),
              eventDate: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Date of the event associated with the Gift List.',
                  example: '2014-07-20T00:00:00',
                  title: 'eventDate',
                }),
              eventLocation: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Location of the event associated with the Gift List.',
                  example: 'Botafogo',
                  title: 'eventLocation',
                }),
              eventState: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'State of the event associated with the Gift List.',
                  example: 'RJ',
                  title: 'eventState',
                }),
              fileId: z
                .int()
                .nullable()
                .exactOptional()
                .openapi({ description: 'File ID.', example: 155233, title: 'fileId' }),
              fileUrl: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({
                  description: 'File URL.',
                  example: '/arquivos/ids/155233-800-800/gl-0_635266293044683588.jpg',
                  title: 'fileUrl',
                }),
              giftCardId: z
                .int()
                .exactOptional()
                .openapi({ description: 'Gift Card ID.', example: 2, title: 'giftCardId' }),
              giftCardRechargeSkuId: z
                .int()
                .nullable()
                .exactOptional()
                .openapi({
                  description: 'ID of the SKU that recharges the gift card.',
                  example: 1,
                  title: 'giftCardRechargeSkuId',
                }),
              giftListId: z
                .int()
                .exactOptional()
                .openapi({ description: 'Gift List ID.', example: 1, title: 'giftListId' }),
              giftListMembers: z
                .array(
                  z
                    .object({
                      clientId: z
                        .string()
                        .nullable()
                        .exactOptional()
                        .openapi({ description: 'Client ID.', title: 'clientId' }),
                      giftListId: z
                        .int()
                        .exactOptional()
                        .openapi({ description: 'Gift List ID.', title: 'giftListId' }),
                      giftListMemberId: z
                        .int()
                        .exactOptional()
                        .openapi({
                          description: 'Gift List member ID.',
                          title: 'giftListMemberId',
                        }),
                      isActive: z
                        .boolean()
                        .exactOptional()
                        .openapi({
                          description: 'Defines if the Gift List user is active or not.',
                          title: 'isActive',
                        }),
                      isAdmin: z
                        .boolean()
                        .exactOptional()
                        .openapi({
                          description:
                            'Defines if the Gift List member is an administrator of the Gift List or not.',
                          title: 'isAdmin',
                        }),
                      name: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'Name of the Gift List member.', title: 'name' }),
                      surname: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description: 'Surname of the Gift List member.',
                          title: 'surname',
                        }),
                      text1: z
                        .string()
                        .nullable()
                        .exactOptional()
                        .openapi({ description: 'Complementary text.', title: 'text1' }),
                      text2: z
                        .string()
                        .nullable()
                        .exactOptional()
                        .openapi({ description: 'Complementary text.', title: 'text2' }),
                      title: z
                        .string()
                        .nullable()
                        .exactOptional()
                        .openapi({ description: 'Title of the Gift List member.', title: 'title' }),
                      userId: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'User ID.', title: 'userId' }),
                    })
                    .openapi({
                      description: 'Object with information about each gift list member.',
                      example: {
                        clientId: null,
                        giftListId: 2,
                        giftListMemberId: 1,
                        isActive: true,
                        isAdmin: true,
                        name: 'Rafael',
                        surname: 'Villa-Verde',
                        text1: null,
                        text2: null,
                        title: null,
                        userId: '010956A4-A74A-4375-8B7B-3B3B7B89B483',
                      },
                      required: [],
                    }),
                )
                .exactOptional()
                .openapi({
                  description: 'Array of members of the gift list.',
                  title: 'giftListMembers',
                }),
              giftListSkuIds: z
                .array(z.string().openapi({ description: 'SKU ID.' }))
                .exactOptional()
                .openapi({
                  description: 'Array with the IDs of SKUs that are part of the gift list.',
                  title: 'giftListSkuIds',
                }),
              giftListTypeId: z
                .int()
                .exactOptional()
                .openapi({
                  description: 'Gift List Type ID.',
                  example: 1,
                  title: 'giftListTypeId',
                }),
              giftListTypeName: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Gift List Type name.',
                  example: 'Wedding list',
                  title: 'giftListTypeName',
                }),
              isActive: z
                .boolean()
                .exactOptional()
                .openapi({
                  description: 'Defines if the gift list is active.',
                  example: true,
                  title: 'isActive',
                }),
              isAddressOk: z
                .boolean()
                .exactOptional()
                .openapi({
                  description: 'Validates the address of the gift list.',
                  example: false,
                  title: 'isAddressOk',
                }),
              memberNames: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Name of the members of the gift list.',
                  example: 'Rafael Villa-Verde',
                  title: 'memberNames',
                }),
              message: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Gift List message.',
                  example: 'This is a gift list for my wedding.',
                  title: 'message',
                }),
              name: z
                .string()
                .exactOptional()
                .openapi({ description: 'Gift List name.', example: 'My list', title: 'name' }),
              profileSystemUserAddressName: z
                .string()
                .exactOptional()
                .openapi({
                  description: "Name of the user's address.",
                  example: 'CASA',
                  title: 'profileSystemUserAddressName',
                }),
              profileSystemUserId: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'User ID on Profile System.',
                  example: 'a6e7d995-e884-409d-911f-36b25c40169a',
                  title: 'profileSystemUserId',
                }),
              shipsToOwner: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Defines if items purchased from the gift list will be shipped to the owner of the gift list.',
                  example: false,
                  title: 'shipsToOwner',
                }),
              telemarketingId: z
                .int()
                .nullable()
                .exactOptional()
                .openapi({
                  description: 'Telemarketing ID.',
                  example: 1,
                  title: 'telemarketingId',
                }),
              telemarketingObservation: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Telemarketing observation.',
                  example: '',
                  title: 'telemarketingObservation',
                }),
              urlFolder: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Slug of the gift list that will be part of its URL.',
                  example: 'myweddinglist',
                  title: 'urlFolder',
                }),
              userId: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'User ID.',
                  example: 'a6e7d995-e884-409d-911f-36b25c40169a',
                  title: 'userId',
                }),
              version: z
                .int()
                .exactOptional()
                .openapi({
                  description: 'Version of the gift list.',
                  example: 1,
                  title: 'version',
                }),
            })
            .openapi({
              description: 'Object with information about the Gift List.',
              example: {
                IsPublic: false,
                address: null,
                clientId: 3,
                dateCreated: '2011-05-04T13:23:00',
                eventCity: '',
                eventDate: '2012-12-21T00:00:00',
                eventLocation: '',
                eventState: '',
                fileId: null,
                fileUrl: null,
                giftCardId: 2,
                giftCardRechargeSkuId: null,
                giftListId: 1,
                giftListMembers: [],
                giftListSkuIds: [],
                giftListTypeId: 1,
                giftListTypeName: 'Lista de Casamento',
                isActive: false,
                isAddressOk: true,
                memberNames: 'sei lá',
                message: 'mensageeeem',
                name: 'My list',
                profileSystemUserAddressName: 'CASA',
                profileSystemUserId: '010956A4-A74A-4375-8B7B-3B3B7B89B483',
                shipsToOwner: false,
                telemarketingId: null,
                telemarketingObservation: '',
                urlFolder: 'lili',
                userId: '010956A4-A74A-4375-8B7B-3B3B7B89B483',
                version: 1,
              },
              title: '',
              required: [],
            }),
        },
      },
    },
  },
})

export const getApiAddonPvtReviewGetProductRateProductIdRoute = createRoute({
  method: 'get',
  path: '/api/addon/pvt/review/GetProductRate/{productId}',
  tags: ['Product'],
  summary: 'Get Product Review Rate by Product ID',
  description: "Retrieves the review rate of a product by this product's ID.",
  operationId: 'ReviewRateProduct',
  request: {
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
              'HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.',
            in: 'header',
            name: 'Accept',
            required: true,
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      productId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'Product’s unique numerical identifier.',
            in: 'path',
            name: 'productId',
            required: true,
            schema: { example: 1, type: 'integer' },
            style: 'simple',
          },
          example: 1,
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z.number().openapi({ description: 'Review rate numeber.', example: 3 }),
        },
      },
    },
  },
})

export const postApiCatalogPvtAttachmentRoute = createRoute({
  method: 'post',
  path: '/api/catalog/pvt/attachment',
  tags: ['Attachment'],
  summary: 'Create attachment',
  description:
    'Creates a new SKU attachment.\r\n >⚠️ To understand the specific syntax for Assembly Options attachments, read the [Assembly Options](https://help.vtex.com/en/tutorial/assembly-options--5x5FhNr4f5RUGDEGWzV1nH#assembly-options-syntax) documentation. \r\n## Request body example\r\n\r\n```json\r\n{\r\n  "Name": "Test",\r\n  "IsRequired": true,\r\n  "IsActive": true,\r\n  "Domains": [\r\n    {\r\n      "FieldName": "Basic test",\r\n      "MaxCaracters": "",\r\n      "DomainValues": "[1-2]#9[1-1][1]basic;#11[0-1][1]basic"\r\n    },\r\n    {\r\n      "FieldName": "teste",\r\n      "MaxCaracters": "",\r\n      "DomainValues": "[0-10]#8[0-3][0]medium;#9[0-3][0]medium;#10[0-3][0]medium;#11[0-3][0]medium;#36[0-3][0]medium;#37[0-3][0]medium;#38[0-3][0]medium"\r\n    }\r\n  ]\r\n}\r\n```\r\n## Response body example\r\n\r\n```json\r\n{\r\n  "Id": 8,\r\n  "Name": "Test",\r\n  "IsRequired": true,\r\n  "IsActive": true,\r\n  "Domains": [\r\n    {\r\n      "FieldName": "Basic test",\r\n      "MaxCaracters": "",\r\n      "DomainValues": "[1-2]#9[1-1][1]basic;#11[0-1][1]basic"\r\n    },\r\n    {\r\n      "FieldName": "teste",\r\n      "MaxCaracters": "",\r\n      "DomainValues": "[0-10]#8[0-3][0]medium;#9[0-3][0]medium;#10[0-3][0]medium;#11[0-3][0]medium;#36[0-3][0]medium;#37[0-3][0]medium;#38[0-3][0]medium"\r\n    }\r\n  ]\r\n}\r\n```',
  request: {
    headers: z.object({
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
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
    }),
    body: { description: '', content: { 'application/json': { schema: AttachmentRequestSchema } } },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: AttachmentResponseSchema } },
    },
  },
})

export const getApiCatalogPvtAttachmentAttachmentidRoute = createRoute({
  method: 'get',
  path: '/api/catalog/pvt/attachment/{attachmentid}',
  tags: ['Attachment'],
  summary: 'Get attachment',
  description:
    'Gets information about a registered attachment. \r\n >⚠️ To understand the specific syntax for Assembly Options attachments, read the [Assembly Options](https://help.vtex.com/en/tutorial/assembly-options--5x5FhNr4f5RUGDEGWzV1nH#assembly-options-syntax) documentation.\r\n## Response body example\r\n\r\n```json\r\n{\r\n  "Id": 8,\r\n  "Name": "Test",\r\n  "IsRequired": true,\r\n  "IsActive": true,\r\n  "Domains": [\r\n    {\r\n      "FieldName": "Basic test",\r\n      "MaxCaracters": "",\r\n      "DomainValues": "[1-2]#9[1-1][1]basic;#11[0-1][1]basic"\r\n    },\r\n    {\r\n      "FieldName": "teste",\r\n      "MaxCaracters": "",\r\n      "DomainValues": "[0-10]#8[0-3][0]medium;#9[0-3][0]medium;#10[0-3][0]medium;#11[0-3][0]medium;#36[0-3][0]medium;#37[0-3][0]medium;#38[0-3][0]medium"\r\n    }\r\n  ]\r\n}\r\n```',
  request: {
    params: z.object({
      attachmentid: z
        .string()
        .openapi({
          param: {
            description: 'Attachment ID.',
            in: 'path',
            name: 'attachmentid',
            required: true,
            schema: { example: '8', type: 'string' },
          },
          example: '8',
        }),
    }),
    headers: z.object({
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
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: AttachmentResponseSchema } },
    },
  },
})

export const putApiCatalogPvtAttachmentAttachmentidRoute = createRoute({
  method: 'put',
  path: '/api/catalog/pvt/attachment/{attachmentid}',
  tags: ['Attachment'],
  summary: 'Update attachment',
  description:
    'Updates a previously existing SKU attachment with new information. \r\n >⚠️ To understand the specific syntax for Assembly Options attachments, read the [Assembly Options](https://help.vtex.com/en/tutorial/assembly-options--5x5FhNr4f5RUGDEGWzV1nH#assembly-options-syntax) documentation. \r\n## Request body example\r\n\r\n```json\r\n{\r\n  "Name": "Test",\r\n  "IsRequired": true,\r\n  "IsActive": true,\r\n  "Domains": [\r\n    {\r\n      "FieldName": "Basic test",\r\n      "MaxCaracters": "",\r\n      "DomainValues": "[1-2]#9[1-1][1]basic;#11[0-1][1]basic"\r\n    },\r\n    {\r\n      "FieldName": "teste",\r\n      "MaxCaracters": "",\r\n      "DomainValues": "[0-10]#8[0-3][0]medium;#9[0-3][0]medium;#10[0-3][0]medium;#11[0-3][0]medium;#36[0-3][0]medium;#37[0-3][0]medium;#38[0-3][0]medium"\r\n    }\r\n  ]\r\n}\r\n```\r\n## Response body example\r\n\r\n```json\r\n{\r\n  "Id": 8,\r\n  "Name": "Test",\r\n  "IsRequired": true,\r\n  "IsActive": true,\r\n  "Domains": [\r\n    {\r\n      "FieldName": "Basic test",\r\n      "MaxCaracters": "",\r\n      "DomainValues": "[1-2]#9[1-1][1]basic;#11[0-1][1]basic"\r\n    },\r\n    {\r\n      "FieldName": "teste",\r\n      "MaxCaracters": "",\r\n      "DomainValues": "[0-10]#8[0-3][0]medium;#9[0-3][0]medium;#10[0-3][0]medium;#11[0-3][0]medium;#36[0-3][0]medium;#37[0-3][0]medium;#38[0-3][0]medium"\r\n    }\r\n  ]\r\n}\r\n```',
  request: {
    params: z.object({
      attachmentid: z
        .string()
        .openapi({
          param: {
            description: 'Attachment ID.',
            in: 'path',
            name: 'attachmentid',
            required: true,
            schema: { example: 'vtexcommercestable', type: 'string' },
          },
          example: 'vtexcommercestable',
        }),
    }),
    headers: z.object({
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
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
    }),
    body: { description: '', content: { 'application/json': { schema: AttachmentRequestSchema } } },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: AttachmentResponseSchema } },
    },
  },
})

export const deleteApiCatalogPvtAttachmentAttachmentidRoute = createRoute({
  method: 'delete',
  path: '/api/catalog/pvt/attachment/{attachmentid}',
  tags: ['Attachment'],
  summary: 'Delete attachment',
  description: 'Deletes a previously existing SKU attachment.',
  request: {
    params: z.object({
      attachmentid: z
        .string()
        .openapi({
          param: {
            description: 'Attachment ID.',
            in: 'path',
            name: 'attachmentid',
            required: true,
            schema: { example: 'vtexcommercestable', type: 'string' },
          },
          example: 'vtexcommercestable',
        }),
    }),
    headers: z.object({
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
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK' } },
})

export const getApiCatalogPvtAttachmentsRoute = createRoute({
  method: 'get',
  path: '/api/catalog/pvt/attachments',
  tags: ['Attachment'],
  summary: 'Get all attachments',
  description:
    'Retrieves information about all registered attachments. \r\n >⚠️ To understand the specific syntax for Assembly Options attachments, read the [Assembly Options](https://help.vtex.com/en/tutorial/assembly-options--5x5FhNr4f5RUGDEGWzV1nH#assembly-options-syntax) documentation. \r\n## Response body example\r\n\r\n```json\r\n{\r\n    "Page": 1,\r\n    "Size": 11,\r\n    "TotalRows": 11,\r\n    "TotalPage": 1,\r\n    "Data": [\r\n        {\r\n            "Id": 1,\r\n            "Name": "Acessórios do bicho",\r\n            "IsRequired": true,\r\n            "IsActive": true,\r\n            "Domains": [\r\n                {\r\n                    "FieldName": "extra",\r\n                    "MaxCaracters": "",\r\n                    "DomainValues": "[0-3]#1[1-2][1]pricetable1;#3[0-2][0]pricetable2;#5[0-2][0]pricetable3"\r\n                }\r\n            ]\r\n        },\r\n        {\r\n            "Id": 2,\r\n            "Name": "Sobrenome",\r\n            "IsRequired": false,\r\n            "IsActive": true,\r\n            "Domains": []\r\n        },\r\n        {\r\n            "Id": 3,\r\n            "Name": "Assinatura Teste",\r\n            "IsRequired": false,\r\n            "IsActive": true,\r\n            "Domains": [\r\n                {\r\n                    "FieldName": " vtex.subscription.key.frequency",\r\n                    "MaxCaracters": "",\r\n                    "DomainValues": "1 day, 7 day, 1 month, 6 month"\r\n                },\r\n                {\r\n                    "FieldName": "vtex.subscription.key.validity.begin",\r\n                    "MaxCaracters": "",\r\n                    "DomainValues": "1"\r\n                },\r\n                {\r\n                    "FieldName": "vtex.subscription.key.validity.end",\r\n                    "MaxCaracters": "",\r\n                    "DomainValues": "31"\r\n                },\r\n                {\r\n                    "FieldName": "vtex.subscription.key.purchaseday",\r\n                    "MaxCaracters": "",\r\n                    "DomainValues": "1, 2, 20, 31"\r\n                }\r\n            ]\r\n        },\r\n        {\r\n            "Id": 5,\r\n            "Name": "teste",\r\n            "IsRequired": false,\r\n            "IsActive": true,\r\n            "Domains": []\r\n        },\r\n        {\r\n            "Id": 6,\r\n            "Name": "teste2",\r\n            "IsRequired": false,\r\n            "IsActive": true,\r\n            "Domains": []\r\n        },\r\n        {\r\n            "Id": 7,\r\n            "Name": "vtex.subscription.teste3",\r\n            "IsRequired": false,\r\n            "IsActive": true,\r\n            "Domains": []\r\n        },\r\n        {\r\n            "Id": 8,\r\n            "Name": "teste api nova",\r\n            "IsRequired": true,\r\n            "IsActive": true,\r\n            "Domains": [\r\n                {\r\n                    "FieldName": "Basic teste",\r\n                    "MaxCaracters": "",\r\n                    "DomainValues": "[1-2]#9[1-1][1]basic;#11[0-1][1]basic"\r\n                },\r\n                {\r\n                    "FieldName": "teste",\r\n                    "MaxCaracters": "",\r\n                    "DomainValues": "[0-10]#8[0-3][0]medium;#9[0-3][0]medium;#10[0-3][0]medium;#11[0-3][0]medium;#36[0-3][0]medium;#37[0-3][0]medium;#38[0-3][0]medium"\r\n                }\r\n            ]\r\n        },\r\n        {\r\n            "Id": 9,\r\n            "Name": "vtex.subscription.teste",\r\n            "IsRequired": false,\r\n            "IsActive": true,\r\n            "Domains": []\r\n        },\r\n        {\r\n            "Id": 10,\r\n            "Name": "Montagens",\r\n            "IsRequired": false,\r\n            "IsActive": true,\r\n            "Domains": []\r\n        },\r\n        {\r\n            "Id": 11,\r\n            "Name": "vtex.subscription.subscription",\r\n            "IsRequired": false,\r\n            "IsActive": true,\r\n            "Domains": [\r\n                {\r\n                    "FieldName": "vtex.subscription.key.frequency",\r\n                    "MaxCaracters": "15",\r\n                    "DomainValues": "1 month"\r\n                },\r\n                {\r\n                    "FieldName": "vtex.subscription.key.purchaseday",\r\n                    "MaxCaracters": "15",\r\n                    "DomainValues": "1,15,28"\r\n                }\r\n            ]\r\n        },\r\n        {\r\n            "Id": 12,\r\n            "Name": "T-Shirt Customization",\r\n            "IsRequired": false,\r\n            "IsActive": true,\r\n            "Domains": [\r\n                {\r\n                    "FieldName": "T-Shirt Name",\r\n                    "MaxCaracters": "15",\r\n                    "DomainValues": "[]"\r\n                }\r\n            ]\r\n        }\r\n    ]\r\n}\r\n```',
  request: {
    headers: z.object({
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
              Data: z
                .array(AttachmentResponseSchema)
                .exactOptional()
                .openapi({ description: 'Array containing attachments data.', title: 'Data' }),
              Page: z
                .int()
                .exactOptional()
                .openapi({ description: 'Current page of results.', example: 1, title: 'Page' }),
              Size: z
                .int()
                .exactOptional()
                .openapi({
                  description: 'Total number of results in the current page.',
                  example: 11,
                  title: 'Size',
                }),
              TotalPage: z
                .int()
                .exactOptional()
                .openapi({
                  description: 'Total number of pages with results.',
                  example: 1,
                  title: 'TotalPage',
                }),
              TotalRows: z
                .int()
                .exactOptional()
                .openapi({
                  description: 'Total number of rows with results.',
                  example: 11,
                  title: 'TotalRows',
                }),
            })
            .openapi({ title: '', required: [] }),
        },
      },
    },
  },
})

export const postApiCatalogPvtBrandRoute = createRoute({
  method: 'post',
  path: '/api/catalog/pvt/brand',
  tags: ['Brand'],
  summary: 'Create Brand',
  description:
    'Creates a new Brand.\r\n## Request and response body example\r\n\r\n```json\r\n{\r\n  "Id": 2000013,\r\n  "Name": "Orma Carbon",\r\n  "Text": "Orma Carbon",\r\n  "Keywords": "orma",\r\n  "SiteTitle": "Orma Carbon",\r\n  "Active": true,\r\n  "MenuHome": true,\r\n  "AdWordsRemarketingCode": "",\r\n  "LomadeeCampaignCode": "",\r\n  "Score": null,\r\n  "LinkId": "orma-carbon"\r\n}\r\n```',
  request: {
    headers: z.object({
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
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
    }),
    body: {
      description: 'Request body.',
      content: { 'application/json': { schema: BrandCreateUpdateSchema } },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: BrandCreateUpdateSchema,
          example: {
            Active: true,
            AdWordsRemarketingCode: '',
            Id: 2000013,
            Keywords: 'orma',
            LinkId: 'orma-carbon',
            LomadeeCampaignCode: '',
            MenuHome: true,
            Name: 'Orma Carbon',
            Score: null,
            SiteTitle: 'Orma Carbon',
            Text: 'Orma Carbon',
          },
        },
      },
    },
  },
})

export const getApiCatalogPvtBrandBrandIdRoute = createRoute({
  method: 'get',
  path: '/api/catalog/pvt/brand/{brandId}',
  tags: ['Brand'],
  summary: 'Get Brand and context',
  description:
    'Retrieves information about a specific Brand and its context.\r\n## Response body example\r\n\r\n```json\r\n{\r\n  "Id": 2000013,\r\n  "Name": "Orma Carbon",\r\n  "Text": "Orma Carbon",\r\n  "Keywords": "orma",\r\n  "SiteTitle": "Orma Carbon",\r\n  "Active": true,\r\n  "MenuHome": true,\r\n  "AdWordsRemarketingCode": "",\r\n  "LomadeeCampaignCode": "",\r\n  "Score": null,\r\n  "LinkId": "orma-carbon"\r\n}\r\n```',
  request: {
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
              'HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.',
            in: 'header',
            name: 'Accept',
            required: true,
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      brandId: z
        .string()
        .openapi({
          param: {
            description: 'Brand ID.',
            in: 'path',
            name: 'brandId',
            required: true,
            schema: { example: '123', type: 'string' },
            style: 'simple',
          },
          example: '123',
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: BrandCreateUpdateSchema,
          example: {
            Active: true,
            AdWordsRemarketingCode: '',
            Id: 2000013,
            Keywords: 'orma',
            LinkId: 'orma-carbon',
            LomadeeCampaignCode: '',
            MenuHome: true,
            Name: 'Orma Carbon',
            Score: null,
            SiteTitle: 'Orma Carbon',
            Text: 'Orma Carbon',
          },
        },
      },
    },
  },
})

export const putApiCatalogPvtBrandBrandIdRoute = createRoute({
  method: 'put',
  path: '/api/catalog/pvt/brand/{brandId}',
  tags: ['Brand'],
  summary: 'Update Brand',
  description:
    'Updates a previously existing Brand.\r\n## Request and response body example\r\n\r\n```json\r\n{\r\n  "Id": 2000013,\r\n  "Name": "Orma Carbon",\r\n  "Text": "Orma Carbon",\r\n  "Keywords": "orma",\r\n  "SiteTitle": "Orma Carbon",\r\n  "Active": true,\r\n  "MenuHome": true,\r\n  "AdWordsRemarketingCode": "",\r\n  "LomadeeCampaignCode": "",\r\n  "Score": null,\r\n  "LinkId": "orma-carbon"\r\n}\r\n```',
  request: {
    params: z.object({
      brandId: z
        .string()
        .openapi({
          param: {
            description: 'Brand’s unique numerical identifier.',
            in: 'path',
            name: 'brandId',
            required: true,
            schema: { example: '123', type: 'string' },
          },
          example: '123',
        }),
    }),
    headers: z.object({
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
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
    }),
    body: { description: '', content: { 'application/json': { schema: BrandCreateUpdateSchema } } },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: BrandCreateUpdateSchema,
          example: {
            Active: true,
            AdWordsRemarketingCode: '',
            Id: 2000013,
            Keywords: 'orma',
            LinkId: 'orma-carbon',
            LomadeeCampaignCode: '',
            MenuHome: true,
            Name: 'Orma Carbon',
            Score: null,
            SiteTitle: 'Orma Carbon',
            Text: 'Orma Carbon',
          },
        },
      },
    },
  },
})

export const deleteApiCatalogPvtBrandBrandIdRoute = createRoute({
  method: 'delete',
  path: '/api/catalog/pvt/brand/{brandId}',
  tags: ['Brand'],
  summary: 'Delete Brand',
  description: 'Deletes an existing Brand.',
  request: {
    params: z.object({
      brandId: z
        .string()
        .openapi({
          param: {
            description: 'Brand’s unique numerical identifier.',
            in: 'path',
            name: 'brandId',
            required: true,
            schema: { example: '123', type: 'string' },
          },
          example: '123',
        }),
    }),
    headers: z.object({
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
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK' } },
})

export const postApiCatalogPvtCategoryRoute = createRoute({
  method: 'post',
  path: '/api/catalog/pvt/category',
  tags: ['Category'],
  summary: 'Create Category',
  description:
    'Creates a new Category.\r\n\r\nIf there is a need to create a new category with a specific custom ID, specify the `Id` (integer) in the request. Otherwise, VTEX will generate the ID automatically.\r\n\r\n## Request body example (automatically generated ID)\r\n\r\n```json\r\n{\r\n    "Name": "Home Appliances",\r\n    "FatherCategoryId": null,\r\n    "Title": "Home Appliances",\r\n    "Description": "Discover our range of home appliances. Find smart vacuums, kitchen and laundry appliances to suit your needs. Order online now.",\r\n    "Keywords": "Kitchen, Laundry, Appliances",\r\n    "IsActive": true,\r\n    "LomadeeCampaignCode": null,\r\n    "AdWordsRemarketingCode": null,\r\n    "ShowInStoreFront": true,\r\n    "ShowBrandFilter": true,\r\n    "ActiveStoreFrontLink": true,\r\n    "GlobalCategoryId": 604,\r\n    "StockKeepingUnitSelectionMode": "SPECIFICATION",\r\n    "Score": null\r\n}\r\n```\r\n\r\n## Request body example (custom ID)\r\n\r\n```json\r\n{\r\n    "Id": 1,\r\n    "Name": "Home Appliances",\r\n    "FatherCategoryId": null,\r\n    "Title": "Home Appliances",\r\n    "Description": "Discover our range of home appliances. Find smart vacuums, kitchen and laundry appliances to suit your needs. Order online now.",\r\n    "Keywords": "Kitchen, Laundry, Appliances",\r\n    "IsActive": true,\r\n    "LomadeeCampaignCode": null,\r\n    "AdWordsRemarketingCode": null,\r\n    "ShowInStoreFront": true,\r\n    "ShowBrandFilter": true,\r\n    "ActiveStoreFrontLink": true,\r\n    "GlobalCategoryId": 604,\r\n    "StockKeepingUnitSelectionMode": "SPECIFICATION",\r\n    "Score": null\r\n}\r\n```\r\n\r\n## Response body example\r\n\r\n```json\r\n{\r\n    "Id": 1,\r\n    "Name": "Home Appliances",\r\n    "FatherCategoryId": null,\r\n    "Title": "Home Appliances",\r\n    "Description": "Discover our range of home appliances. Find smart vacuums, kitchen and laundry appliances to suit your needs. Order online now.",\r\n    "Keywords": "Kitchen, Laundry, Appliances",\r\n    "IsActive": true,\r\n    "LomadeeCampaignCode": "",\r\n    "AdWordsRemarketingCode": "",\r\n    "ShowInStoreFront": true,\r\n    "ShowBrandFilter": true,\r\n    "ActiveStoreFrontLink": true,\r\n    "GlobalCategoryId": 604,\r\n    "StockKeepingUnitSelectionMode": "LIST",\r\n    "Score": null,\r\n    "LinkId": "Alimentacao",\r\n    "HasChildren": true\r\n}\r\n```',
  request: {
    headers: z.object({
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
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
    }),
    body: {
      description: '',
      content: { 'application/json': { schema: CreateCategoryRequestSchema } },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: CategorySchema,
          example: {
            ActiveStoreFrontLink: true,
            AdWordsRemarketingCode: '',
            Description:
              'Discover our range of home appliances. Find smart vacuums, kitchen and laundry appliances to suit your needs. Order online now.',
            FatherCategoryId: null,
            GlobalCategoryId: 3367,
            HasChildren: true,
            Id: 1,
            IsActive: true,
            Keywords: 'Kitchen, Laundry, Appliances',
            LinkId: 'Alimentacao',
            LomadeeCampaignCode: '',
            Name: 'Home Appliances',
            Score: null,
            ShowBrandFilter: true,
            ShowInStoreFront: true,
            StockKeepingUnitSelectionMode: 'LIST',
            Title: 'Home Appliances',
          },
        },
      },
    },
  },
})

export const getApiCatalogPvtCategoryCategoryIdRoute = createRoute({
  method: 'get',
  path: '/api/catalog/pvt/category/{categoryId}',
  tags: ['Category'],
  summary: 'Get Category by ID',
  description:
    'Retrieves general information about a Category. \r\n## Response body example\r\n\r\n```json\r\n{\r\n    "Id": 1,\r\n    "Name": "Home Appliances",\r\n    "FatherCategoryId": null,\r\n    "Title": "Home Appliances",\r\n    "Description": "Discover our range of home appliances. Find smart vacuums, kitchen and laundry appliances to suit your needs. Order online now.",\r\n    "Keywords": "Kitchen, Laundry, Appliances",\r\n    "IsActive": true,\r\n    "LomadeeCampaignCode": "",\r\n    "AdWordsRemarketingCode": "",\r\n    "ShowInStoreFront": true,\r\n    "ShowBrandFilter": true,\r\n    "ActiveStoreFrontLink": true,\r\n    "GlobalCategoryId": 3367,\r\n    "StockKeepingUnitSelectionMode": "LIST",\r\n    "Score": null,\r\n    "LinkId": "Alimentacao",\r\n    "HasChildren": true\r\n}\r\n```',
  request: {
    headers: z.object({
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
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      categoryId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'Category’s unique numerical identifier.',
            in: 'path',
            name: 'categoryId',
            required: true,
            schema: { example: 9289, type: 'integer' },
          },
          example: 9289,
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: CategorySchema,
          example: {
            ActiveStoreFrontLink: true,
            AdWordsRemarketingCode: '',
            Description:
              'Discover our range of home appliances. Find smart vacuums, kitchen and laundry appliances to suit your needs. Order online now.',
            FatherCategoryId: null,
            GlobalCategoryId: 3367,
            HasChildren: true,
            Id: 1,
            IsActive: true,
            Keywords: 'Kitchen, Laundry, Appliances',
            LinkId: 'Alimentacao',
            LomadeeCampaignCode: '',
            Name: 'Home Appliances',
            Score: null,
            ShowBrandFilter: true,
            ShowInStoreFront: true,
            StockKeepingUnitSelectionMode: 'LIST',
            Title: 'Home Appliances',
          },
        },
      },
    },
  },
})

export const putApiCatalogPvtCategoryCategoryIdRoute = createRoute({
  method: 'put',
  path: '/api/catalog/pvt/category/{categoryId}',
  tags: ['Category'],
  summary: 'Update Category',
  description:
    'Updates a previously existing Category.\r\n\r\n## Request body example\r\n\r\n```json\r\n{\r\n    "Name": "Home Appliances",\r\n    "FatherCategoryId": null,\r\n    "Title": "Home Appliances",\r\n    "Description": "Discover our range of home appliances. Find smart vacuums, kitchen and laundry appliances to suit your needs. Order online now.",\r\n    "Keywords": "Kitchen, Laundry, Appliances",\r\n    "IsActive": true,\r\n    "LomadeeCampaignCode": null,\r\n    "AdWordsRemarketingCode": null,\r\n    "ShowInStoreFront": true,\r\n    "ShowBrandFilter": true,\r\n    "ActiveStoreFrontLink": true,\r\n    "GlobalCategoryId": 604,\r\n    "StockKeepingUnitSelectionMode": "SPECIFICATION",\r\n    "Score": null\r\n}\r\n```\r\n\r\n## Response body example\r\n\r\n```json\r\n{\r\n    "Id": 1,\r\n    "Name": "Home Appliances",\r\n    "FatherCategoryId": null,\r\n    "Title": "Home Appliances",\r\n    "Description": "Discover our range of home appliances. Find smart vacuums, kitchen and laundry appliances to suit your needs. Order online now.",\r\n    "Keywords": "Kitchen, Laundry, Appliances",\r\n    "IsActive": true,\r\n    "LomadeeCampaignCode": "",\r\n    "AdWordsRemarketingCode": "",\r\n    "ShowInStoreFront": true,\r\n    "ShowBrandFilter": true,\r\n    "ActiveStoreFrontLink": true,\r\n    "GlobalCategoryId": 604,\r\n    "StockKeepingUnitSelectionMode": "LIST",\r\n    "Score": null,\r\n    "LinkId": "Alimentacao",\r\n    "HasChildren": true\r\n}\r\n```',
  request: {
    headers: z.object({
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
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      categoryId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'Category’s unique numerical identifier.',
            in: 'path',
            name: 'categoryId',
            required: true,
            schema: { example: 9289, type: 'integer' },
          },
          example: 9289,
        }),
    }),
    body: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .object({
              ActiveStoreFrontLink: z
                .boolean()
                .openapi({
                  description: 'If true, the Category link becomes active in store.',
                  example: true,
                  title: 'ActiveStoreFrontLink',
                }),
              AdWordsRemarketingCode: z
                .string()
                .openapi({
                  deprecated: true,
                  description:
                    'This is a legacy field. Do not take this information into consideration.',
                  example: 'Sale',
                }),
              Description: z
                .string()
                .openapi({
                  description: 'Text used in meta description tag for Category page.',
                  example:
                    'Discover our range of home appliances. Find smart vacuums, kitchen and laundry appliances to suit your needs. Order online now.',
                  title: 'Description',
                }),
              FatherCategoryId: z
                .int()
                .nullable()
                .openapi({
                  description:
                    'ID of the parent category, apply in case of category and subcategory.',
                  example: 2,
                  title: 'FatherCategoryId',
                }),
              GlobalCategoryId: z
                .int()
                .openapi({
                  description: 'Google Global Category ID.',
                  example: 222,
                  title: 'GlobalCategoryId',
                }),
              IsActive: z
                .boolean()
                .openapi({
                  description: 'If true, the Category page becomes available in store.',
                  example: true,
                  title: 'IsActive',
                }),
              Keywords: z
                .string()
                .openapi({
                  description: 'Substitute words for the Category.',
                  example: 'Kitchen, Laundry, Appliances',
                  title: 'Keywords',
                }),
              LomadeeCampaignCode: z
                .string()
                .openapi({
                  deprecated: true,
                  description:
                    'This is a legacy field. Do not take this information into consideration.',
                  example: 'Sale',
                }),
              Name: z
                .string()
                .openapi({
                  description: 'Category name.',
                  example: 'Home Appliances',
                  title: 'Name',
                }),
              Score: z
                .int()
                .openapi({
                  description: 'Score for search sorting order.',
                  example: 3,
                  title: 'Score',
                }),
              ShowBrandFilter: z
                .boolean()
                .openapi({
                  description: 'If true, the Category page displays a Brand filter.',
                  example: true,
                  title: 'ShowBrandFilter',
                }),
              ShowInStoreFront: z
                .boolean()
                .openapi({
                  description: 'If true, the Category is shown in the top and side menu.',
                  example: true,
                  title: 'ShowInStoreFront',
                }),
              StockKeepingUnitSelectionMode: z
                .string()
                .openapi({
                  description: 'Defines how the SKU will be exhibited',
                  example: 'SPECIFICATION',
                  title: 'StockKeepingUnitSelectionMode',
                }),
              Title: z
                .string()
                .openapi({
                  description: 'Text used in title tag for Category page.',
                  example: 'Home Appliances',
                  title: 'Title',
                }),
            })
            .openapi({
              required: [
                'Name',
                'Keywords',
                'Title',
                'Description',
                'AdWordsRemarketingCode',
                'LomadeeCampaignCode',
                'FatherCategoryId',
                'GlobalCategoryId',
                'ShowInStoreFront',
                'IsActive',
                'ActiveStoreFrontLink',
                'ShowBrandFilter',
                'Score',
                'StockKeepingUnitSelectionMode',
              ],
            }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: CategorySchema,
          example: {
            ActiveStoreFrontLink: true,
            AdWordsRemarketingCode: '',
            Description:
              'Discover our range of home appliances. Find smart vacuums, kitchen and laundry appliances to suit your needs. Order online now.',
            FatherCategoryId: null,
            GlobalCategoryId: 3367,
            HasChildren: true,
            Id: 1,
            IsActive: true,
            Keywords: 'Kitchen, Laundry, Appliances',
            LinkId: 'Alimentacao',
            LomadeeCampaignCode: '',
            Name: 'Home Appliances',
            Score: null,
            ShowBrandFilter: true,
            ShowInStoreFront: true,
            StockKeepingUnitSelectionMode: 'LIST',
            Title: 'Home Appliances',
          },
        },
      },
    },
  },
})

export const postApiCatalogPvtCollectionRoute = createRoute({
  method: 'post',
  path: '/api/catalog/pvt/collection',
  tags: ['Legacy Collection'],
  summary: 'Create Collection',
  description:
    ' >⚠️ There are two ways to configure collections, through Legacy CMS Portal or using the Beta Collection module. This endpoint is compatible with [collections configured through the Legacy CMS Portal](https://help.vtex.com/en/tutorial/adding-collections-cms--2YBy6P6X0NFRpkD2ZBxF6L).\n\nCreates a new Collection.\r\n## Request body example\r\n\r\n```json\r\n{\r\n    "Name": "Winter",\r\n    "Searchable": false,\r\n    "Highlight": false,\r\n    "DateFrom": "2021-09-27T10:47:00",\r\n    "DateTo": "2027-09-27T10:47:00"\r\n}\r\n```\r\n\r\n## Response body example\r\n\r\n```json\r\n{\r\n    "Id": 159,\r\n    "Name": "Winter",\r\n    "Description": null,\r\n    "Searchable": false,\r\n    "Highlight": false,\r\n    "DateFrom": "2021-09-27T10:47:00",\r\n    "DateTo": "2027-09-27T10:47:00",\r\n    "TotalProducts": 0,\r\n    "Type": "Manual"\r\n}\r\n```',
  request: {
    headers: z.object({
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
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
    }),
    body: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .object({
              DateFrom: z
                .string()
                .openapi({
                  description: 'Initial value date for the Collection.',
                  example: '2017-09-27T10:47:00',
                  title: 'DateFrom',
                }),
              DateTo: z
                .string()
                .openapi({
                  description: 'Final value date for the Collection.',
                  example: '2017-09-27T10:47:00',
                  title: 'DateTo',
                }),
              Highlight: z
                .boolean()
                .openapi({
                  description: 'Defines if the Collection is highlighted or not.',
                  example: false,
                  title: 'Highlight',
                }),
              Name: z
                .string()
                .openapi({ description: 'Collection Name.', example: 'Test', title: 'Name' }),
              Searchable: z
                .boolean()
                .openapi({
                  description: 'Defines if the Collection is searchable or not.',
                  example: true,
                  title: 'Searchable',
                }),
            })
            .openapi({
              required: ['Name', 'Searchable', 'Highlight', 'DateFrom', 'DateTo'],
              title: 'Resquest body',
            }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              DateFrom: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Initial value date for the Collection.',
                  example: '2017-09-27T10:47:00',
                  title: 'DateFrom',
                }),
              DateTo: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Final value date for the Collection.',
                  example: '2017-09-27T10:47:00',
                  title: 'DateTo',
                }),
              Description: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({
                  description: 'Collection description.',
                  example: 'Winter outfits.',
                  title: 'Description',
                }),
              Highlight: z
                .boolean()
                .exactOptional()
                .openapi({
                  description: 'Defines if the Collection is highlighted or not.',
                  example: false,
                  title: 'Highlight',
                }),
              Id: z
                .int()
                .exactOptional()
                .openapi({ description: 'Collection ID.', example: 150, title: 'Id' }),
              Name: z
                .string()
                .exactOptional()
                .openapi({ description: 'Collection Name.', example: 'Test', title: 'Name' }),
              Searchable: z
                .boolean()
                .exactOptional()
                .openapi({
                  description: 'Defines if the Collection is searchable or not.',
                  example: true,
                  title: 'Searchable',
                }),
              TotalProducts: z
                .int()
                .exactOptional()
                .openapi({
                  description: 'Total quantity of products in the collection.',
                  example: 150,
                  title: 'TotalProducts',
                }),
              Type: z
                .string()
                .exactOptional()
                .openapi({ description: 'Type of collection.', example: 'Manual', title: 'Type' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const postApiCatalogPvtCollectionIndexRoute = createRoute({
  method: 'post',
  path: '/api/catalog/pvt/collection/',
  tags: ['Collection Beta'],
  summary: 'Create Collection',
  description: 'Creates a new collection.',
  operationId: 'POST-CreateCollection',
  request: {
    headers: z.object({
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
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
    }),
    body: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .object({
              DateFrom: z
                .string()
                .openapi({
                  description:
                    'Collection start date and time. If a future date and time are set, the collection will have a scheduled status.',
                  example: '2020-11-26T15:23:00',
                  title: 'DateFrom',
                }),
              DateTo: z
                .string()
                .openapi({
                  description: 'Collection end date and time.',
                  example: '2069-11-26T15:23:00',
                  title: 'DateTo',
                }),
              Description: z
                .string()
                .openapi({
                  description:
                    "Collection's description for internal use, with the collection's details. It will not be used for search engines.",
                  example: 'HomeHalloween',
                  title: 'Description',
                }),
              Highlight: z
                .boolean()
                .openapi({
                  description:
                    'Option if you want the collection to highlight specific products using a tag.',
                  example: false,
                  title: 'Highlight',
                }),
              Name: z
                .string()
                .openapi({
                  description: "Collection's Name.",
                  example: 'Halloween costumes',
                  title: 'Name',
                }),
              Searchable: z
                .boolean()
                .openapi({
                  description: 'Option making the collection searchable in the store.',
                  example: false,
                  title: 'Searchable',
                }),
            })
            .openapi({
              description: '',
              required: [
                'Name',
                'Description',
                'Searchable',
                'Highlight',
                'DateFrom',
                'DateTo',
                'TotalProducts',
                'Type',
              ],
              title: 'Request body',
            }),
        },
      },
      required: true,
    },
  },
  responses: { 200: { description: 'OK' } },
})

export const getApiCatalogPvtCollectionInactiveRoute = createRoute({
  method: 'get',
  path: '/api/catalog/pvt/collection/inactive',
  tags: ['Collection Beta'],
  summary: 'Get All Inactive Collections',
  description: 'Retrieves a list of Collection IDs of the inactive Collections.',
  operationId: 'GET-AllInactiveCollections',
  request: {
    headers: z.object({
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
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK' } },
})

export const getApiCatalogPvtCollectionStockkeepingunitImportfileexampleRoute = createRoute({
  method: 'get',
  path: '/api/catalog/pvt/collection/stockkeepingunit/importfileexample',
  tags: ['Collection Beta'],
  summary: 'Import Collection file example',
  description:
    'Imports a sample of the imported XLS file. You need to save the response file to your device.',
  operationId: 'GET-Importfileexample',
  request: {
    headers: z.object({
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
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK' } },
})

export const getApiCatalogPvtCollectionCollectionIdRoute = createRoute({
  method: 'get',
  path: '/api/catalog/pvt/collection/{collectionId}',
  tags: ['Legacy Collection'],
  summary: 'Get Collection',
  description:
    ' >⚠️ There are two ways to configure collections, through Legacy CMS Portal or using the Beta Collection module. This endpoint is compatible with [collections configured through the Legacy CMS Portal](https://help.vtex.com/en/tutorial/adding-collections-cms--2YBy6P6X0NFRpkD2ZBxF6L).\n\nRetrieves general information of a Collection.\r\n\r\n## Response body example\r\n\r\n```json\r\n{\r\n    "Id": 159,\r\n    "Name": "Winter",\r\n    "Description": null,\r\n    "Searchable": false,\r\n    "Highlight": false,\r\n    "DateFrom": "2021-09-27T10:47:00",\r\n    "DateTo": "2027-09-27T10:47:00",\r\n    "TotalProducts": 0,\r\n    "Type": "Manual"\r\n}\r\n```',
  request: {
    headers: z.object({
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
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      collectionId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'Collection’s unique numerical identifier.',
            in: 'path',
            name: 'collectionId',
            required: true,
            schema: { example: 151, type: 'integer' },
          },
          example: 151,
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
              DateFrom: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Initial value date for the Collection.',
                  example: '2017-09-27T10:47:00',
                  title: 'DateFrom',
                }),
              DateTo: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Final value date for the Collection.',
                  example: '2017-09-27T10:47:00',
                  title: 'DateTo',
                }),
              Description: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({
                  description: 'Collection description.',
                  example: 'Winter outfits.',
                  title: 'Description',
                }),
              Highlight: z
                .boolean()
                .exactOptional()
                .openapi({
                  description: 'Defines if the Collection is highlighted or not.',
                  example: false,
                  title: 'Highlight',
                }),
              Id: z
                .int()
                .exactOptional()
                .openapi({ description: 'Collection ID.', example: 150, title: 'Id' }),
              Name: z
                .string()
                .exactOptional()
                .openapi({ description: 'Collection Name.', example: 'Test', title: 'Name' }),
              Searchable: z
                .boolean()
                .exactOptional()
                .openapi({
                  description: 'Defines if the Collection is searchable or not.',
                  example: true,
                  title: 'Searchable',
                }),
              TotalProducts: z
                .int()
                .exactOptional()
                .openapi({
                  description: 'Total quantity of products in the collection.',
                  example: 150,
                  title: 'TotalProducts',
                }),
              Type: z
                .string()
                .exactOptional()
                .openapi({ description: 'Type of collection.', example: 'Manual', title: 'Type' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const putApiCatalogPvtCollectionCollectionIdRoute = createRoute({
  method: 'put',
  path: '/api/catalog/pvt/collection/{collectionId}',
  tags: ['Legacy Collection'],
  summary: 'Update Collection',
  description:
    ' >⚠️ There are two ways to configure collections, through Legacy CMS Portal or using the Beta Collection module. This endpoint is compatible with [collections configured through the Legacy CMS Portal](https://help.vtex.com/en/tutorial/adding-collections-cms--2YBy6P6X0NFRpkD2ZBxF6L).\n\nUpdates a previously created Collection.\r\n## Request body example\r\n\r\n```json\r\n{\r\n    "Name": "Winter",\r\n    "Searchable": false,\r\n    "Highlight": false,\r\n    "DateFrom": "2021-09-27T10:47:00",\r\n    "DateTo": "2027-09-27T10:47:00"\r\n}\r\n```\r\n\r\n## Response body example\r\n\r\n```json\r\n{\r\n    "Id": 159,\r\n    "Name": "Winter",\r\n    "Description": null,\r\n    "Searchable": false,\r\n    "Highlight": false,\r\n    "DateFrom": "2021-09-27T10:47:00",\r\n    "DateTo": "2027-09-27T10:47:00",\r\n    "TotalProducts": 0,\r\n    "Type": "Manual"\r\n}\r\n```',
  request: {
    headers: z.object({
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
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      collectionId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'Collection’s unique numerical identifier.',
            in: 'path',
            name: 'collectionId',
            required: true,
            schema: { example: 151, type: 'integer' },
          },
          example: 151,
        }),
    }),
    body: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .object({
              DateFrom: z
                .string()
                .openapi({
                  description: 'Initial value date for the Collection.',
                  example: '2017-09-27T10:47:00',
                  title: 'DateFrom',
                }),
              DateTo: z
                .string()
                .openapi({
                  description: 'Final value date for the Collection.',
                  example: '2017-09-27T10:47:00',
                  title: 'DateTo',
                }),
              Highlight: z
                .boolean()
                .openapi({
                  description: 'Defines if the Collection is highlighted or not',
                  example: false,
                  title: 'Highlight',
                }),
              Name: z
                .string()
                .openapi({ description: 'Collection Name.', example: 'Test', title: 'Name' }),
              Searchable: z
                .boolean()
                .openapi({
                  description: 'Defines if the Collection is searchable or not.',
                  example: true,
                  title: 'Searchable',
                }),
            })
            .openapi({
              required: ['Name', 'Searchable', 'Highlight', 'DateFrom', 'DateTo'],
              title: 'Resquest body',
            }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              DateFrom: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Initial value date for the Collection.',
                  example: '2017-09-27T10:47:00',
                  title: 'DateFrom',
                }),
              DateTo: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Final value date for the Collection.',
                  example: '2017-09-27T10:47:00',
                  title: 'DateTo',
                }),
              Description: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({
                  description: 'Collection description.',
                  example: 'Winter outfits.',
                  title: 'Description',
                }),
              Highlight: z
                .boolean()
                .exactOptional()
                .openapi({
                  description: 'Defines if the Collection is highlighted or not.',
                  example: false,
                  title: 'Highlight',
                }),
              Id: z
                .int()
                .exactOptional()
                .openapi({ description: 'Collection ID.', example: 150, title: 'Id' }),
              Name: z
                .string()
                .exactOptional()
                .openapi({ description: 'Collection Name.', example: 'Test', title: 'Name' }),
              Searchable: z
                .boolean()
                .exactOptional()
                .openapi({
                  description: 'Defines if the Collection is searchable or not.',
                  example: true,
                  title: 'Searchable',
                }),
              TotalProducts: z
                .int()
                .exactOptional()
                .openapi({
                  description: 'Total quantity of products in the collection.',
                  example: 150,
                  title: 'TotalProducts',
                }),
              Type: z
                .string()
                .exactOptional()
                .openapi({ description: 'Type of collection.', example: 'Manual', title: 'Type' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const deleteApiCatalogPvtCollectionCollectionIdRoute = createRoute({
  method: 'delete',
  path: '/api/catalog/pvt/collection/{collectionId}',
  tags: ['Legacy Collection'],
  summary: 'Delete Collection',
  description:
    ' >⚠️ There are two ways to configure collections, through Legacy CMS Portal or using the Beta Collection module. This endpoint is compatible with [collections configured through the Legacy CMS Portal](https://help.vtex.com/en/tutorial/adding-collections-cms--2YBy6P6X0NFRpkD2ZBxF6L).\n\nDeletes a previously existing Collection.',
  request: {
    headers: z.object({
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
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      collectionId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'Collection’s unique numerical identifier.',
            in: 'path',
            name: 'collectionId',
            required: true,
            schema: { example: 151, type: 'integer' },
          },
          example: 151,
        }),
    }),
  },
  responses: { 200: { description: 'OK' } },
})

export const postApiCatalogPvtCollectionCollectionIdPositionRoute = createRoute({
  method: 'post',
  path: '/api/catalog/pvt/collection/{collectionId}/position',
  tags: ['Legacy Subcollection'],
  summary: 'Reposition SKU on the Subcollection',
  description:
    ' >⚠️ There are two ways to configure collections, through Legacy CMS Portal or using the Beta Collection module. This endpoint is compatible with [collections configured through the Legacy CMS Portal](https://help.vtex.com/en/tutorial/adding-collections-cms--2YBy6P6X0NFRpkD2ZBxF6L).\n\nEdits the position of an SKU that already exists in the Subcollection,  which is a [Group](https://help.vtex.com/en/tutorial/adding-collections-cms--2YBy6P6X0NFRpkD2ZBxF6L#group-types) within a  Collection.\r\n## Request body example\r\n\r\n```json\r\n{\r\n     "skuId": 1,\r\n     "position": 1,\r\n     "subCollectionId": 17\r\n}\r\n```',
  request: {
    headers: z.object({
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
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      collectionId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'Collection’s unique numerical identifier.',
            in: 'path',
            name: 'collectionId',
            required: true,
            schema: { example: 151, type: 'integer' },
          },
          example: 151,
        }),
    }),
    body: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .object({
              position: z.int().openapi({ description: 'SKU position.', example: 1 }),
              skuId: z.int().openapi({ description: 'SKU ID.', example: 1 }),
              subCollectionId: z.int().openapi({ description: 'Subcollection ID.', example: 17 }),
            })
            .openapi({ required: ['skuId', 'position', 'subCollectionId'], title: '' }),
        },
      },
    },
  },
  responses: { 200: { description: 'OK' } },
})

export const getApiCatalogPvtCollectionCollectionIdProductsRoute = createRoute({
  method: 'get',
  path: '/api/catalog/pvt/collection/{collectionId}/products',
  tags: ['Collection Beta'],
  summary: 'Get products from a collection',
  description: 'Retrieves information about the products from a collection.',
  operationId: 'GET-Productsfromacollection',
  request: {
    headers: z.object({
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
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      collectionId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: "Collection's unique identifier.",
            in: 'path',
            name: 'collectionId',
            required: true,
            schema: { example: 1, type: 'integer' },
            style: 'simple',
          },
          example: 1,
        }),
    }),
    query: z.object({
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
            description: 'Page number.',
            in: 'query',
            name: 'page',
            required: false,
            schema: { example: 2, type: 'integer' },
            style: 'form',
          },
          example: 2,
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
            description: 'Number of the items of the page.',
            in: 'query',
            name: 'pageSize',
            required: false,
            schema: { example: 15, type: 'integer' },
            style: 'form',
          },
          example: 15,
        }),
      Filter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: "Filter used to refine the Collection's products.",
            in: 'query',
            name: 'Filter',
            required: false,
            schema: { example: 'Pre launch', type: 'string' },
            style: 'form',
          },
          example: 'Pre launch',
        }),
      Active: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Defines if the status of the product is active or not.',
            in: 'query',
            name: 'Active',
            required: false,
            schema: { example: true, type: 'boolean' },
            style: 'form',
          },
          example: true,
        }),
      Visible: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Defines if the product is visible on the store or not.',
            in: 'query',
            name: 'Visible',
            required: false,
            schema: { example: true, type: 'boolean' },
            style: 'form',
          },
          example: true,
        }),
      CategoryId: z
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
            description: "Product's Category unique identifier.",
            in: 'query',
            name: 'CategoryId',
            required: false,
            schema: { example: 12, type: 'integer' },
            style: 'form',
          },
          example: 12,
        }),
      BrandId: z
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
            description: "Product's Brand unique identifier.",
            in: 'query',
            name: 'BrandId',
            required: false,
            schema: { example: 3, type: 'integer' },
            style: 'form',
          },
          example: 3,
        }),
      SupplierId: z
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
            description: "Product's Supplier unique identifier.",
            in: 'query',
            name: 'SupplierId',
            required: false,
            schema: { example: 1, type: 'integer' },
            style: 'form',
          },
          example: 1,
        }),
      SalesChannelId: z
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
            description: "Product's Trade Policy unique identifier.",
            in: 'query',
            name: 'SalesChannelId',
            required: false,
            schema: { example: 1, type: 'integer' },
            style: 'form',
          },
          example: 1,
        }),
      ReleaseFrom: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Product past release date.',
            in: 'query',
            name: 'ReleaseFrom',
            required: false,
            schema: { example: '2069-11-26T15:23:00', type: 'string' },
            style: 'form',
          },
          example: '2069-11-26T15:23:00',
        }),
      ReleaseTo: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Product future release date.',
            in: 'query',
            name: 'ReleaseTo',
            required: false,
            schema: { example: '2069-11-26T15:23:00', type: 'string' },
            style: 'form',
          },
          example: '2069-11-26T15:23:00',
        }),
      SpecificationProduct: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Product Specification Field Value. You must also fill in `SpecificationFieldId` to use this parameter.',
            in: 'query',
            name: 'SpecificationProduct',
            required: false,
            schema: { example: 'M', type: 'string' },
            style: 'form',
          },
          example: 'M',
        }),
      SpecificationFieldId: z
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
            description: 'Product Specification Field unique identifier.',
            in: 'query',
            name: 'SpecificationFieldId',
            required: false,
            schema: { example: 40, type: 'integer' },
            style: 'form',
          },
          example: 40,
        }),
    }),
  },
  responses: { 200: { description: 'OK' } },
})

export const postApiCatalogPvtCollectionCollectionIdStockkeepingunitImportexcludeRoute =
  createRoute({
    method: 'post',
    path: '/api/catalog/pvt/collection/{collectionId}/stockkeepingunit/importexclude',
    tags: ['Collection Beta'],
    summary: 'Remove products from Collection by imported file',
    description:
      'Removes products from a collection from the request body file. The file must be an imported template.',
    operationId: 'POST-Removeproductsbyimportfile',
    request: {
      headers: z.object({
        'Content-Type': z
          .string()
          .default('multipart/form-data')
          .openapi({
            param: {
              description: 'Type of the content being sent.',
              in: 'header',
              name: 'Content-Type',
              required: true,
              schema: { default: 'multipart/form-data', type: 'string' },
              style: 'simple',
            },
          }),
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
              schema: { default: 'application/json', type: 'string' },
              style: 'simple',
            },
          }),
      }),
      params: z.object({
        collectionId: z
          .preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.int(),
          )
          .openapi({
            param: {
              description: "Collection's unique identifier.",
              in: 'path',
              name: 'collectionId',
              required: true,
              schema: { example: 1, type: 'integer' },
              style: 'simple',
            },
            example: 1,
          }),
      }),
      body: {
        content: {
          'multipart/form-data': {
            schema: z
              .object({
                file: ((schema) =>
                  z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
                  z.any(),
                )
                  .exactOptional()
                  .openapi({
                    description:
                      'XLS file with information about products to be added to a Collection. The file must be an imported template from [Import Collection file example](https://developers.vtex.com/vtex-developer-docs/reference/get-importfileexample) endpoint.',
                  }),
              })
              .openapi({ required: [] }),
          },
        },
      },
    },
    responses: { 200: { description: 'OK' } },
  })

export const postApiCatalogPvtCollectionCollectionIdStockkeepingunitImportinsertRoute = createRoute(
  {
    method: 'post',
    path: '/api/catalog/pvt/collection/{collectionId}/stockkeepingunit/importinsert',
    tags: ['Collection Beta'],
    summary: 'Add products to Collection by imported file',
    description:
      'Adds products to a collection from the request body file. The file must be an imported template.',
    operationId: 'POST-Addproductsbyimportfile',
    request: {
      headers: z.object({
        'Content-Type': z
          .string()
          .default('multipart/form-data')
          .openapi({
            param: {
              description: 'Type of the content being sent.',
              in: 'header',
              name: 'Content-Type',
              required: true,
              schema: { default: 'multipart/form-data', type: 'string' },
              style: 'simple',
            },
          }),
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
              schema: { default: 'application/json', type: 'string' },
              style: 'simple',
            },
          }),
      }),
      params: z.object({
        collectionId: z
          .preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.int(),
          )
          .openapi({
            param: {
              description: "Collection's unique identifier.",
              in: 'path',
              name: 'collectionId',
              required: true,
              schema: { example: 1, type: 'integer' },
              style: 'simple',
            },
            example: 1,
          }),
      }),
      body: {
        content: {
          'multipart/form-data': {
            schema: z
              .object({
                file: ((schema) =>
                  z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
                  z.any(),
                )
                  .exactOptional()
                  .openapi({
                    description:
                      'XLS file with information about products to be added to a Collection. The file must be an imported template from [Import Collection file example](https://developers.vtex.com/vtex-developer-docs/reference/get-importfileexample) endpoint.',
                  }),
              })
              .openapi({ required: [] }),
          },
        },
      },
    },
    responses: { 200: { description: 'OK' } },
  },
)

export const getApiCatalogPvtCollectionCollectionIdSubcollectionRoute = createRoute({
  method: 'get',
  path: '/api/catalog/pvt/collection/{collectionId}/subcollection',
  tags: ['Legacy Subcollection'],
  summary: 'Get Subcollection by Collection ID',
  description:
    ' >⚠️ There are two ways to configure collections, through Legacy CMS Portal or using the Beta Collection module. This endpoint is compatible with [collections configured through the Legacy CMS Portal](https://help.vtex.com/en/tutorial/adding-collections-cms--2YBy6P6X0NFRpkD2ZBxF6L).\n\nRetrieves all Subcollections given a Collection ID. A Subcollection is a [Group](https://help.vtex.com/en/tutorial/adding-collections-cms--2YBy6P6X0NFRpkD2ZBxF6L#group-types) within a  Collection.\r\n## Response body example\r\n\r\n```json\r\n[\r\n    {\r\n        "Id": 12,\r\n        "CollectionId": 149,\r\n        "Name": "Subcollection",\r\n        "Type": "Inclusive",\r\n        "PreSale": false,\r\n        "Release": true\r\n    },\r\n    {\r\n        "Id": 13,\r\n        "CollectionId": 149,\r\n        "Name": "Test",\r\n        "Type": "Exclusive",\r\n        "PreSale": true,\r\n        "Release": false\r\n    },\r\n    {\r\n        "Id": 14,\r\n        "CollectionId": 149,\r\n        "Name": "asdfghj",\r\n        "Type": "Inclusive",\r\n        "PreSale": false,\r\n        "Release": false\r\n    }\r\n]\r\n```',
  request: {
    headers: z.object({
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
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      collectionId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'Collection’s unique numerical identifier.',
            in: 'path',
            name: 'collectionId',
            required: true,
            schema: { example: 151, type: 'integer' },
          },
          example: 151,
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .array(
              z
                .object({
                  CollectionId: z.int().exactOptional().openapi({ description: 'Collection ID.' }),
                  Id: z.int().exactOptional().openapi({ description: 'Subcollection ID.' }),
                  Name: z.string().exactOptional().openapi({ description: 'Subcollection Name.' }),
                  PreSale: z
                    .boolean()
                    .exactOptional()
                    .openapi({ description: 'Defines if the collection is on PreSale.' }),
                  Release: z
                    .boolean()
                    .exactOptional()
                    .openapi({ description: 'Defines if the collection is a new released one.' }),
                  Type: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description:
                        'Either `“Exclusive”` (all the products contained in it will not be used) or `“Inclusive”` (all the products contained in it will be used).',
                    }),
                })
                .openapi({ required: [] }),
            )
            .openapi({ title: '' }),
          example: [
            {
              CollectionId: 151,
              Id: 17,
              Name: 'group 1',
              PreSale: false,
              Release: false,
              Type: 'Inclusive',
            },
            {
              CollectionId: 151,
              Id: 18,
              Name: 'group 2',
              PreSale: false,
              Release: false,
              Type: 'Inclusive',
            },
          ],
        },
      },
    },
  },
})

export const postApiCatalogPvtProductRoute = createRoute({
  method: 'post',
  path: '/api/catalog/pvt/product',
  tags: ['Product'],
  summary: 'Create Product with Category and Brand',
  description:
    'This endpoint allows two types of request:\r\n\r\n**Type 1:** Creating a new Product as well as a new Category path (including subcategories) and a new Brand by using `CategoryPath` and `BrandName` parameters.\r\n\r\n**Type 2:** Creating a new Product given an existing `BrandId` and an existing `CategoryId`.\r\n\r\nWhen creating a product, regardless of the type of request, if there is a need to create a new product with a specific custom product ID, specify the `Id` (integer) in the request body. Otherwise, VTEX will generate the ID automatically.\r\n\r\n ## Request body examples\r\n\r\n ### Type 1\r\n\r\n Request to create a product, associating it to a new Category and a new Brand by using `CategoryPath` and `BrandName`:\r\n\r\n```json\r\n{\r\n    "Name": "Black T-Shirt",\r\n    "CategoryPath": "Mens/Clothing/T-Shirts",\r\n    "BrandName": "Nike",\r\n    "RefId": "31011706925",\r\n    "Title": "Black T-Shirt",\r\n    "LinkId": "tshirt-black",\r\n    "Description": "This is a cool Tshirt",\r\n    "ReleaseDate": "2022-01-01T00:00:00",\r\n    "IsVisible": true,\r\n    "IsActive": true,\r\n    "TaxCode": "",\r\n    "MetaTagDescription": "tshirt black",\r\n    "ShowWithoutStock": true,\r\n    "Score": 1\r\n}\r\n```\r\n\r\n ### Type 2\r\n\r\nRequest to create a product, associating it to an existing `CategoryId` and `BrandId`:\r\n\r\n```json\r\n{\r\n   "Name": "insert product test",\r\n   "DepartmentId": 1,\r\n   "CategoryId": 2,\r\n   "BrandId": 2000000,\r\n   "LinkId": "insert-product-test",\r\n   "RefId": "310117869",\r\n   "IsVisible": true,\r\n   "Description": "texto de descrição",\r\n   "DescriptionShort": "Utilize o CEP 04548-005 para frete grátis",\r\n   "ReleaseDate": "2019-01-01T00:00:00",\r\n   "KeyWords": "teste,teste2",\r\n   "Title": "product de teste",\r\n   "IsActive": true,\r\n   "TaxCode": "",\r\n   "MetaTagDescription": "tag test",\r\n   "SupplierId": 1,\r\n   "ShowWithoutStock": true,\r\n   "AdWordsRemarketingCode": null,\r\n   "LomadeeCampaignCode": null,\r\n   "Score": 1\r\n}\r\n```\r\n\r\n ## Response body example\r\n\r\n```json\r\n{\r\n   "Id": 52,\r\n   "Name": "insert product test",\r\n   "DepartmentId": 1,\r\n   "CategoryId": 2,\r\n   "BrandId": 2000000,\r\n   "LinkId": "insert-product-test",\r\n   "RefId": "310117869",\r\n   "IsVisible": true,\r\n   "Description": "texto de descrição",\r\n   "DescriptionShort": "Utilize o CEP 04548-005 para frete grátis",\r\n   "ReleaseDate": "2019-01-01T00:00:00",\r\n   "KeyWords": "teste,teste2",\r\n   "Title": "product de teste",\r\n   "IsActive": true,\r\n   "TaxCode": "",\r\n   "MetaTagDescription": "tag test",\r\n   "SupplierId": 1,\r\n   "ShowWithoutStock": true,\r\n   "AdWordsRemarketingCode": null,\r\n   "LomadeeCampaignCode": null,\r\n   "Score": 1\r\n}\r\n```\r\n  \r\n> 📘 Onboarding guide \r\n>\r\n> Check the new [Catalog onboarding guide](https://developers.vtex.com/vtex-rest-api/docs/catalog-overview). We created this guide to improve the onboarding experience for developers at VTEX. It assembles all documentation on our Developer Portal about Catalog and is organized by focusing on the developer\'s journey.',
  request: {
    headers: z.object({
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
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
    }),
    body: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .object({
              AdWordsRemarketingCode: z
                .string()
                .exactOptional()
                .openapi({
                  deprecated: true,
                  description:
                    'This is a legacy field. Do not take this information into consideration.',
                }),
              BrandId: z
                .int()
                .exactOptional()
                .openapi({
                  description:
                    'ID of an existing Brand that will be associated with this product. It is mandatory to use either this field or the `BrandName` field.',
                  example: 12121219,
                  title: 'BrandId',
                }),
              BrandName: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Name of the brand that will be associated with this product. It is mandatory to use either this field or the `BrandId` field. If you wish to create a new brand, that is, in case the brand does not exist yet, use this field instead of `BrandId`.',
                  example: 'Sample Brand',
                }),
              CategoryId: z
                .int()
                .exactOptional()
                .openapi({
                  description:
                    'ID of an existing Category that will be associated with this product. It is mandatory to use either this field or the `CategoryPath` field.',
                  example: 2000090,
                  title: 'CategoryId',
                }),
              CategoryPath: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Path of categories associated with this product, from the highest level of category to the lowest level, separated by `/`. It is mandatory to use either this field or the `CategoryId` field.',
                  example: 'Mens/Clothing/T-Shirts',
                }),
              Description: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Product description.',
                  example:
                    "The Nike Zoom Stefan Janoski Men's Shoe is made with a premium leather upper for superior durability and a flexible midsole for all-day comfort. A tacky gum rubber outsole delivers outstanding traction.",
                  title: 'Description',
                }),
              DescriptionShort: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Short product description. This information can be displayed on both the product page and the shelf, using the following controls:\r\n Store Framework:  `$product.DescriptionShort`.\r\n Legacy CMS Portal: `<vtex.cmc:productDescriptionShort/>`.\r\n',
                  example: 'The Nike Zoom Stefan Janoski is made with a premium leather.',
                  title: 'DescriptionShort',
                }),
              Id: z
                .int()
                .exactOptional()
                .openapi({
                  description:
                    'Product’s unique numerical identifier. If not informed, it will be automatically generated by VTEX.',
                  example: 42,
                  title: 'Id',
                }),
              IsActive: z
                .boolean()
                .exactOptional()
                .openapi({
                  description: 'Activate (`true`) or inactivate (`false`) product.',
                  example: true,
                  title: 'IsActive',
                }),
              IsVisible: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Shows (`true`) or hides (`false`) the product in search result and product pages, but the product can still be added to the shopping cart. Usually applicable for gifts.',
                  example: true,
                  title: 'IsVisible',
                }),
              KeyWords: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Store Framework: Deprecated. \r\nLegacy CMS Portal: Keywords or synonyms related to the product, separated by comma (`,`). "Television", for example, can have a substitute word like "TV". This field is important to make your searches more comprehensive.\r\n',
                  example: 'Zoom,Stefan,Janoski',
                  title: 'KeyWords',
                }),
              LinkId: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    "Slug that will be used to build the product page URL. If it not informed, it will be generated according to the product's name replacing spaces and special characters by hyphens (`-`).",
                  example: 'stefan-janoski-canvas-varsity-red',
                  title: 'LinkId',
                }),
              LomadeeCampaignCode: z
                .string()
                .exactOptional()
                .openapi({
                  deprecated: true,
                  description:
                    'This is a legacy field. Do not take this information into consideration.',
                }),
              MetaTagDescription: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Brief description of the product for SEO. It is recommended not to exceed 150 characters.',
                  example:
                    "The Nike Zoom Stefan Janoski Men's Shoe is made with a premium leather upper for superior durability and a flexible midsole for all-day comfort. A tacky gum rubber outsole delivers outstanding traction.",
                  title: 'MetaTagDescription',
                }),
              Name: z
                .string()
                .openapi({
                  description: "Product's name. Limited to 150 characters.",
                  example: 'Zoom Stefan Janoski Canvas RM SB Varsity Red',
                  title: 'Name',
                }),
              RefId: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Product Reference Code.',
                  example: 'sr_1_90',
                  title: 'RefId',
                }),
              ReleaseDate: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Used to assist in the ordering of the search result of the site. Using the `O=OrderByReleaseDateDESC` query string, you can pull this value and show the display order by release date. This attribute is also used as a condition for dynamic collections.',
                  example: '2019-01-01T00:00:00',
                  title: 'ReleaseDate',
                }),
              Score: z
                .int()
                .exactOptional()
                .openapi({
                  description: 'Value used to set the priority on the search result page.',
                  example: 1,
                  title: 'Score',
                }),
              ShowWithoutStock: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'If `true`, activates the [Notify Me](https://help.vtex.com/en/tutorial/setting-up-the-notify-me-option--2VqVifQuf6Co2KG048Yu6e) option when the product is out of stock.',
                  example: true,
                  title: 'ShowWithoutStock',
                }),
              SupplierId: z.int().nullable().exactOptional().openapi({ deprecated: true }),
              TaxCode: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Product tax code, used for tax calculation.',
                  example: '12345',
                  title: 'TaxCode',
                }),
              Title: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    "Product's Title tag. Limited to 150 characters. It is presented in the browser tab and corresponds to the title of the product page. This field is important for SEO.",
                  example: 'Zoom Stefan Janoski Canvas RM SB Varsity Red',
                  title: 'Title',
                }),
            })
            .openapi({ required: ['Name'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              AdWordsRemarketingCode: z
                .string()
                .exactOptional()
                .openapi({
                  deprecated: true,
                  description:
                    'This is a legacy field. Do not take this information into consideration.',
                }),
              BrandId: z
                .int()
                .exactOptional()
                .openapi({ description: 'Brand ID associated with this product.' }),
              CategoryId: z
                .int()
                .exactOptional()
                .openapi({ description: 'Category ID associated with this product.' }),
              DepartmentId: z
                .int()
                .exactOptional()
                .openapi({ description: "Department ID according to the product's category." }),
              Description: z
                .string()
                .exactOptional()
                .openapi({ description: 'Product description.' }),
              DescriptionShort: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Short product description. This information can be displayed on both the product page and the shelf, using the following controls:\r\n Store Framework:  `$product.DescriptionShort`.\r\n Legacy CMS Portal: `<vtex.cmc:productDescriptionShort/>`.\r\n',
                  title: 'DescriptionShort',
                }),
              Id: z
                .int()
                .exactOptional()
                .openapi({ description: 'Product’s unique numerical identifier.' }),
              IsActive: z
                .boolean()
                .exactOptional()
                .openapi({ description: 'Activate (`true`) or inactivate (`false`) product.' }),
              IsVisible: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Shows (`true`) or hides (`false`) the product in search result and product pages, but the product can still be added to the shopping cart. Usually applicable for gifts.',
                }),
              KeyWords: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Store Framework: Deprecated. \r\nLegacy CMS Portal:  Keywords or synonyms related to the product, separated by comma (`,`). "Television", for example, can have a substitute word like "TV". This field is important to make your searches more comprehensive.\r\n',
                }),
              LinkId: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    "Slug that will be used to build the product page URL. If it not informed, it will be generated according to the product's name replacing spaces and special characters by hyphens (`-`).",
                }),
              LomadeeCampaignCode: z
                .string()
                .exactOptional()
                .openapi({
                  deprecated: true,
                  description:
                    'This is a legacy field. Do not take this information into consideration.',
                }),
              MetaTagDescription: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    "Brief description of the product for SEO. It's recommended that you don't exceed 150 characters.",
                }),
              Name: z
                .string()
                .exactOptional()
                .openapi({ description: "Product's name. Limited to 150 characters." }),
              RefId: z.string().exactOptional().openapi({ description: 'Product Reference Code.' }),
              ReleaseDate: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Used to assist in the ordering of the search result of the site. Using the `O=OrderByReleaseDateDESC` query string, you can pull this value and show the display order by release date. This attribute is also used as a condition for dynamic collections.',
                }),
              Score: z
                .int()
                .exactOptional()
                .openapi({
                  description: 'Value used to set the priority on the search result page.',
                }),
              ShowWithoutStock: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'If `true`, activates the [Notify Me](https://help.vtex.com/en/tutorial/setting-up-the-notify-me-option--2VqVifQuf6Co2KG048Yu6e) option when the product is out of stock.',
                }),
              SupplierId: z.int().nullable().exactOptional().openapi({ deprecated: true }),
              TaxCode: z
                .string()
                .exactOptional()
                .openapi({ description: 'Product tax  code, used for tax calculation.' }),
              Title: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    "Product's Title tag. Limited to 150 characters. It is presented in the browser tab and corresponds to the title of the product page. This field is important for SEO.",
                }),
            })
            .openapi({
              example: {
                AdWordsRemarketingCode: '',
                BrandId: 12121219,
                CategoryId: 2000090,
                DepartmentId: 2000089,
                Description:
                  "The Nike Zoom Stefan Janoski Men's Shoe is made with a premium leather upper for superior durability and a flexible midsole for all-day comfort. A tacky gum rubber outsole delivers outstanding traction.",
                DescriptionShort: 'The Nike Zoom Stefan Janoski is made with a premium leather.',
                Id: 42,
                IsActive: true,
                IsVisible: true,
                KeyWords: 'Zoom,Stefan,Janoski',
                LinkId: 'stefan-janoski-canvas-varsity-red',
                LomadeeCampaignCode: '',
                MetaTagDescription:
                  "The Nike Zoom Stefan Janoski Men's Shoe is made with a premium leather upper for superior durability and a flexible midsole for all-day comfort. A tacky gum rubber outsole delivers outstanding traction.",
                Name: 'Zoom Stefan Janoski Canvas RM SB Varsity Red',
                RefId: 'sr_1_90',
                ReleaseDate: '2020-01-01T00:00:00',
                Score: 1,
                ShowWithoutStock: true,
                SupplierId: 1,
                TaxCode: '',
                Title: 'Zoom Stefan Janoski Canvas RM SB Varsity Re',
              },
              required: [],
            }),
        },
      },
    },
  },
})

export const getApiCatalogPvtProductProductIdRoute = createRoute({
  method: 'get',
  path: '/api/catalog/pvt/product/{productId}',
  tags: ['Product'],
  summary: 'Get Product by ID',
  description:
    "Retrieves a specific Product by its ID. This information is exactly what is needed to create a new Product. \r\n> 📘 Onboarding guide \r\n>\r\n> Check the new [Catalog onboarding guide](https://developers.vtex.com/vtex-rest-api/docs/catalog-overview). We created this guide to improve the onboarding experience for developers at VTEX. It assembles all documentation on our Developer Portal about Catalog and is organized by focusing on the developer's journey.",
  operationId: 'GetProductbyid',
  request: {
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
              'HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.',
            in: 'header',
            name: 'Accept',
            required: true,
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      productId: z
        .string()
        .openapi({
          param: {
            description: 'Product’s unique numerical identifier.',
            in: 'path',
            name: 'productId',
            required: true,
            schema: { type: 'string' },
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
              AdWordsRemarketingCode: z
                .string()
                .exactOptional()
                .openapi({
                  deprecated: true,
                  description:
                    'This is a legacy field. Do not take this information into consideration.',
                }),
              BrandId: z
                .int()
                .exactOptional()
                .openapi({ description: 'Brand ID associated with this product.' }),
              CategoryId: z
                .int()
                .exactOptional()
                .openapi({ description: 'Category ID associated with this product.' }),
              DepartmentId: z
                .int()
                .exactOptional()
                .openapi({ description: "Department ID according to the product's category." }),
              Description: z
                .string()
                .exactOptional()
                .openapi({ description: 'Product description.' }),
              DescriptionShort: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Short product description. This information can be displayed on both the product page and the shelf, using the following controls:\r\n Store Framework:  `$product.DescriptionShort`.\r\n Legacy CMS Portal: `<vtex.cmc:productDescriptionShort/>`.\r\n',
                }),
              Id: z
                .int()
                .exactOptional()
                .openapi({ description: 'Product’s unique numerical identifier.' }),
              IsActive: z
                .boolean()
                .exactOptional()
                .openapi({ description: 'Activate (`true`) or inactivate (`false`) product.' }),
              IsVisible: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Shows (`true`) or hides (`false`) the product in search result and product pages, but the product can still be added to the shopping cart. Usually applicable for gifts.',
                }),
              KeyWords: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Store Framework: Deprecated. \r\nLegacy CMS Portal: Keywords or synonyms related to the product, separated by comma (`,`). "Television", for example, can have a substitute word like "TV". This field is important to make your searches more comprehensive.\r\n',
                }),
              LinkId: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    "Slug that will be used to build the product page URL. If it not informed, it will be generated according to the product's name replacing spaces and special characters by hyphens (`-`).",
                }),
              LomadeeCampaignCode: z
                .string()
                .exactOptional()
                .openapi({
                  deprecated: true,
                  description:
                    'This is a legacy field. Do not take this information into consideration.',
                }),
              MetaTagDescription: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Brief description of the product for SEO. It is recommended not to exceed 150 characters.',
                }),
              Name: z
                .string()
                .exactOptional()
                .openapi({ description: "Product's name. Limited to 150 characters." }),
              RefId: z.string().exactOptional().openapi({ description: 'Product Reference Code.' }),
              ReleaseDate: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Used to assist in the ordering of the search result of the site. Using the `O=OrderByReleaseDateDESC` query string, you can pull this value and show the display order by release date. This attribute is also used as a condition for dynamic collections.',
                }),
              Score: z
                .int()
                .exactOptional()
                .openapi({
                  description: 'Value used to set the priority on the search result page.',
                  example: 1,
                }),
              ShowWithoutStock: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'If `true`, activates the [Notify Me](https://help.vtex.com/en/tutorial/setting-up-the-notify-me-option--2VqVifQuf6Co2KG048Yu6e) option when the product is out of stock.',
                }),
              SupplierId: z.int().nullable().exactOptional().openapi({ deprecated: true }),
              TaxCode: z
                .string()
                .exactOptional()
                .openapi({ description: 'Product tax code, used for tax calculation.' }),
              Title: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    "Product's Title tag. Limited to 150 characters. It is presented in the browser tab and corresponds to the title of the product page. This field is important for SEO.",
                }),
            })
            .openapi({
              example: {
                AdWordsRemarketingCode: '',
                BrandId: 12121219,
                CategoryId: 2000090,
                DepartmentId: 2000089,
                Description:
                  "The Nike Zoom Stefan Janoski Men's Shoe is made with a premium leather upper for superior durability and a flexible midsole for all-day comfort. A tacky gum rubber outsole delivers outstanding traction.",
                DescriptionShort: 'The Nike Zoom Stefan Janoski is made with a premium leather.',
                Id: 42,
                IsActive: true,
                IsVisible: true,
                KeyWords: 'Zoom,Stefan,Janoski',
                LinkId: 'stefan-janoski-canvas-varsity-red',
                LomadeeCampaignCode: '',
                MetaTagDescription:
                  "The Nike Zoom Stefan Janoski Men's Shoe is made with a premium leather upper for superior durability and a flexible midsole for all-day comfort. A tacky gum rubber outsole delivers outstanding traction.",
                Name: 'Zoom Stefan Janoski Canvas RM SB Varsity Red',
                RefId: 'sr_1_90',
                ReleaseDate: '2020-01-01T00:00:00',
                Score: 1,
                ShowWithoutStock: true,
                SupplierId: 1,
                TaxCode: '',
                Title: 'Zoom Stefan Janoski Canvas RM SB Varsity Re',
              },
              required: [],
            }),
        },
      },
    },
  },
})

export const putApiCatalogPvtProductProductIdRoute = createRoute({
  method: 'put',
  path: '/api/catalog/pvt/product/{productId}',
  tags: ['Product'],
  summary: 'Update Product',
  description: 'Updates an existing Product.',
  request: {
    headers: z.object({
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
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      productId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'Product’s unique numerical identifier.',
            in: 'path',
            name: 'productId',
            required: true,
            schema: { example: 1, type: 'integer' },
          },
          example: 1,
        }),
    }),
    body: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .object({
              AdWordsRemarketingCode: z
                .string()
                .exactOptional()
                .openapi({
                  deprecated: true,
                  description:
                    'This is a legacy field. Do not take this information into consideration.',
                }),
              BrandId: z
                .int()
                .openapi({
                  description: 'Brand ID associated with this product.',
                  example: 12121219,
                  title: 'BrandId',
                }),
              CategoryId: z
                .int()
                .openapi({
                  description: 'Category ID associated with this product.',
                  example: 2000090,
                  title: 'CategoryId',
                }),
              DepartmentId: z
                .int()
                .exactOptional()
                .openapi({
                  description: "Department ID according to the product's category.",
                  example: 2000089,
                  title: 'DepartmentId',
                }),
              Description: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Product description.',
                  example:
                    "The Nike Zoom Stefan Janoski Men's Shoe is made with a premium leather upper for superior durability and a flexible midsole for all-day comfort. A tacky gum rubber outsole delivers outstanding traction.",
                  title: 'Description',
                }),
              DescriptionShort: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Short product description. This information can be displayed on both the product page and the shelf, using the following controls:\r\n Store Framework:  `$product.DescriptionShort`.\r\n Legacy CMS Portal: `<vtex.cmc:productDescriptionShort/>`.\r\n',
                  example: 'The Nike Zoom Stefan Janoski is made with a premium leather.',
                  title: 'DescriptionShort',
                }),
              IsActive: z
                .boolean()
                .exactOptional()
                .openapi({
                  description: 'Activate (`true`) or inactivate (`false`) product.',
                  example: true,
                  title: 'IsActive',
                }),
              IsVisible: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Shows (`true`) or hides (`false`) the product in search result and product pages, but the product can still be added to the shopping cart. Usually applicable for gifts.',
                  example: true,
                  title: 'IsVisible',
                }),
              KeyWords: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Store Framework: Deprecated. \r\nLegacy CMS Portal: Keywords or synonyms related to the product, separated by comma (`,`). "Television", for example, can have a substitute word like "TV". This field is important to make your searches more comprehensive.\r\n',
                  example: 'Zoom,Stefan,Janoski',
                  title: 'KeyWords',
                }),
              LinkId: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    "Slug that will be used to build the product page URL. If it not informed, it will be generated according to the product's name replacing spaces and special characters by hyphens (`-`).",
                  example: 'stefan-janoski-canvas-varsity-red',
                  title: 'LinkId',
                }),
              LomadeeCampaignCode: z
                .string()
                .exactOptional()
                .openapi({
                  deprecated: true,
                  description:
                    'This is a legacy field. Do not take this information into consideration.',
                }),
              MetaTagDescription: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Brief description of the product for SEO. It is recommended not to exceed 150 characters.',
                  example:
                    "The Nike Zoom Stefan Janoski Men's Shoe is made with a premium leather upper for superior durability and a flexible midsole for all-day comfort. A tacky gum rubber outsole delivers outstanding traction.",
                  title: 'MetaTagDescription',
                }),
              Name: z
                .string()
                .openapi({
                  description: "Product's name. Limited to 150 characters.",
                  example: 'Zoom Stefan Janoski Canvas RM SB Varsity Red',
                  title: 'Name',
                }),
              RefId: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Product Reference Code.',
                  example: 'sr_1_90',
                  title: 'RefId',
                }),
              ReleaseDate: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Used to assist in the ordering of the search result of the site. Using the `O=OrderByReleaseDateDESC` query string, you can pull this value and show the display order by release date. This attribute is also used as a condition for dynamic collections.',
                  example: '2019-01-01T00:00:00',
                  title: 'ReleaseDate',
                }),
              Score: z
                .int()
                .exactOptional()
                .openapi({
                  description: 'Value used to set the priority on the search result page.',
                  example: 1,
                  title: 'Score',
                }),
              ShowWithoutStock: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'If `true`, activates the [Notify Me](https://help.vtex.com/en/tutorial/setting-up-the-notify-me-option--2VqVifQuf6Co2KG048Yu6e) option when the product is out of stock.',
                  example: true,
                  title: 'ShowWithoutStock',
                }),
              SupplierId: z.int().nullable().exactOptional().openapi({ deprecated: true }),
              TaxCode: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Product tax code, used for tax calculation.',
                  example: '12345',
                  title: 'TaxCode',
                }),
              Title: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    "Product's Title tag. Limited to 150 characters. It is presented in the browser tab and corresponds to the title of the product page. This field is important for SEO.",
                  example: 'Zoom Stefan Janoski Canvas RM SB Varsity Red',
                  title: 'Title',
                }),
            })
            .openapi({ required: ['Name', 'CategoryId', 'BrandId'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              AdWordsRemarketingCode: z
                .string()
                .exactOptional()
                .openapi({
                  deprecated: true,
                  description:
                    'This is a legacy field. Do not take this information into consideration.',
                }),
              BrandId: z
                .int()
                .exactOptional()
                .openapi({ description: 'Brand ID associated with this product.' }),
              CategoryId: z
                .int()
                .exactOptional()
                .openapi({ description: 'Category ID associated with this product.' }),
              DepartmentId: z
                .int()
                .exactOptional()
                .openapi({ description: "Department ID according to the product's category." }),
              Description: z
                .string()
                .exactOptional()
                .openapi({ description: 'Product description.' }),
              DescriptionShort: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Short product description. This information can be displayed on both the product page and the shelf, using the following controls:\r\n Store Framework:  `$product.DescriptionShort`.\r\n Legacy CMS Portal: `<vtex.cmc:productDescriptionShort/>`.\r\n',
                  title: 'DescriptionShort',
                }),
              Id: z
                .int()
                .exactOptional()
                .openapi({ description: 'Product’s unique numerical identifier.' }),
              IsActive: z
                .boolean()
                .exactOptional()
                .openapi({ description: 'Activate (`true`) or inactivate (`false`) product.' }),
              IsVisible: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Shows (`true`) or hides (`false`) the product in search result and product pages, but the product can still be added to the shopping cart. Usually applicable for gifts.',
                }),
              KeyWords: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Store Framework: Deprecated. \r\nLegacy CMS Portal:  Keywords or synonyms related to the product, separated by comma (`,`). "Television", for example, can have a substitute word like "TV". This field is important to make your searches more comprehensive.\r\n',
                }),
              LinkId: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    "Slug that will be used to build the product page URL. If it not informed, it will be generated according to the product's name replacing spaces and special characters by hyphens (`-`).",
                }),
              LomadeeCampaignCode: z
                .string()
                .exactOptional()
                .openapi({
                  deprecated: true,
                  description:
                    'This is a legacy field. Do not take this information into consideration.',
                }),
              MetaTagDescription: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    "Brief description of the product for SEO. It's recommended that you don't exceed 150 characters.",
                }),
              Name: z
                .string()
                .exactOptional()
                .openapi({ description: "Product's name. Limited to 150 characters." }),
              RefId: z.string().exactOptional().openapi({ description: 'Product Reference Code.' }),
              ReleaseDate: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Used to assist in the ordering of the search result of the site. Using the `O=OrderByReleaseDateDESC` query string, you can pull this value and show the display order by release date. This attribute is also used as a condition for dynamic collections.',
                }),
              Score: z
                .int()
                .exactOptional()
                .openapi({
                  description: 'Value used to set the priority on the search result page.',
                }),
              ShowWithoutStock: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'If `true`, activates the [Notify Me](https://help.vtex.com/en/tutorial/setting-up-the-notify-me-option--2VqVifQuf6Co2KG048Yu6e) option when the product is out of stock.',
                }),
              SupplierId: z.int().nullable().exactOptional().openapi({ deprecated: true }),
              TaxCode: z
                .string()
                .exactOptional()
                .openapi({ description: 'Product tax  code, used for tax calculation.' }),
              Title: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    "Product's Title tag. Limited to 150 characters. It is presented in the browser tab and corresponds to the title of the product page. This field is important for SEO.",
                }),
            })
            .openapi({
              example: {
                AdWordsRemarketingCode: '',
                BrandId: 12121219,
                CategoryId: 2000090,
                DepartmentId: 2000089,
                Description:
                  "The Nike Zoom Stefan Janoski Men's Shoe is made with a premium leather upper for superior durability and a flexible midsole for all-day comfort. A tacky gum rubber outsole delivers outstanding traction.",
                DescriptionShort: 'The Nike Zoom Stefan Janoski is made with a premium leather.',
                Id: 42,
                IsActive: true,
                IsVisible: true,
                KeyWords: 'Zoom,Stefan,Janoski',
                LinkId: 'stefan-janoski-canvas-varsity-red',
                LomadeeCampaignCode: '',
                MetaTagDescription:
                  "The Nike Zoom Stefan Janoski Men's Shoe is made with a premium leather upper for superior durability and a flexible midsole for all-day comfort. A tacky gum rubber outsole delivers outstanding traction.",
                Name: 'Zoom Stefan Janoski Canvas RM SB Varsity Red',
                RefId: 'sr_1_90',
                ReleaseDate: '2020-01-01T00:00:00',
                Score: 1,
                ShowWithoutStock: true,
                SupplierId: 1,
                TaxCode: '',
                Title: 'Zoom Stefan Janoski Canvas RM SB Varsity Re',
              },
              required: [],
            }),
        },
      },
    },
  },
})

export const getApiCatalogPvtProductProductIdSalespolicyRoute = createRoute({
  method: 'get',
  path: '/api/catalog/pvt/product/{productId}/salespolicy',
  tags: ['Trade Policy'],
  summary: 'Get Trade Policies by Product ID',
  description:
    'Retrieves a list of Trade Policies associated to a Product based on the Product\'s ID. \r\n## Response body example\r\n\r\n```json\r\n[\r\n    {\r\n        "ProductId": 1,\r\n        "StoreId": 1\r\n    },\r\n    {\r\n        "ProductId": 1,\r\n        "StoreId": 2\r\n    },\r\n    {\r\n        "ProductId": 1,\r\n        "StoreId": 3\r\n    },\r\n    {\r\n        "ProductId": 1,\r\n        "StoreId": 4\r\n    }\r\n]\r\n```',
  request: {
    headers: z.object({
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
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      productId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'Product’s unique numerical identifier.',
            in: 'path',
            name: 'productId',
            required: true,
            schema: { example: 1, type: 'integer' },
          },
          example: 1,
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z.array(
            z
              .object({
                ProductId: z
                  .int()
                  .exactOptional()
                  .openapi({ description: 'Product’s unique numerical identifier.', example: 1 }),
                StoreId: z
                  .int()
                  .exactOptional()
                  .openapi({
                    description: "Trade policy's unique numerical identifier.",
                    example: 1,
                  }),
              })
              .openapi({
                description: 'Object containing the Product ID and the Trade Policy ID.',
                required: [],
              }),
          ),
        },
      },
    },
  },
})

export const postApiCatalogPvtProductProductIdSalespolicyTradepolicyIdRoute = createRoute({
  method: 'post',
  path: '/api/catalog/pvt/product/{productId}/salespolicy/{tradepolicyId}',
  tags: ['Trade Policy'],
  summary: 'Associate Product with Trade Policy',
  description: 'Associates an existing Trade Policy with a Product.',
  request: {
    headers: z.object({
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
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      productId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'Product’s unique numerical identifier.',
            in: 'path',
            name: 'productId',
            required: true,
            schema: { example: 1, type: 'integer' },
          },
          example: 1,
        }),
      tradepolicyId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'Trade Policy’s unique numerical identifier.',
            in: 'path',
            name: 'tradepolicyId',
            required: true,
            schema: { example: 1, type: 'integer' },
          },
          example: 1,
        }),
    }),
  },
  responses: { 200: { description: 'OK' } },
})

export const deleteApiCatalogPvtProductProductIdSalespolicyTradepolicyIdRoute = createRoute({
  method: 'delete',
  path: '/api/catalog/pvt/product/{productId}/salespolicy/{tradepolicyId}',
  tags: ['Trade Policy'],
  summary: 'Remove Product from Trade Policy',
  description: 'Disassociates a Trade Policy of a Product.',
  request: {
    headers: z.object({
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
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      productId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'Product’s unique numerical identifier.',
            in: 'path',
            name: 'productId',
            required: true,
            schema: { example: 1, type: 'integer' },
          },
          example: 1,
        }),
      tradepolicyId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'Trade Policy’s unique numerical identifier.',
            in: 'path',
            name: 'tradepolicyId',
            required: true,
            schema: { example: 1, type: 'integer' },
          },
          example: 1,
        }),
    }),
  },
  responses: { 200: { description: 'OK' } },
})

export const getApiCatalogPvtProductProductIdSimilarcategoryIndexRoute = createRoute({
  method: 'get',
  path: '/api/catalog/pvt/product/{productId}/similarcategory/',
  tags: ['Similar Category'],
  summary: 'Get Similar Categories',
  description:
    'Retrieves Similar Categories from a Product.\r\n\r\n## Response body example\r\n\r\n```json\r\n[\r\n    {\r\n        "ProductId": 1,\r\n        "CategoryId": 1\r\n    },\r\n    {\r\n        "ProductId": 1,\r\n        "CategoryId": 20\r\n    }\r\n]\r\n```',
  request: {
    headers: z.object({
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
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      productId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'Product’s unique numerical identifier.',
            in: 'path',
            name: 'productId',
            required: true,
            schema: { example: 1, type: 'integer' },
          },
          example: 1,
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .array(
              z
                .object({
                  CategoryId: z
                    .int()
                    .exactOptional()
                    .openapi({ description: 'Similar Category ID.', example: 20 }),
                  ProductId: z
                    .int()
                    .exactOptional()
                    .openapi({ description: 'Product ID.', example: 1 }),
                })
                .openapi({
                  description: 'Object containing Product ID and Similar Category ID.',
                  required: [],
                }),
            )
            .openapi({ description: 'Array of objects with similar category information.' }),
          example: [
            { CategoryId: 1, ProductId: 1 },
            { CategoryId: 20, ProductId: 1 },
          ],
        },
      },
    },
  },
})

export const postApiCatalogPvtProductProductIdSimilarcategoryCategoryIdRoute = createRoute({
  method: 'post',
  path: '/api/catalog/pvt/product/{productId}/similarcategory/{categoryId}',
  tags: ['Similar Category'],
  summary: 'Add Similar Category',
  description:
    'Adds a Similar Category to a Product.\r\n\r\n## Response body example\r\n\r\n```json\r\n{\r\n    "ProductId": 1,\r\n    "StoreId": 1\r\n}\r\n```',
  request: {
    headers: z.object({
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
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      productId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'Product’s unique numerical identifier.',
            in: 'path',
            name: 'productId',
            required: true,
            schema: { example: 1, type: 'integer' },
          },
          example: 1,
        }),
      categoryId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'Similar Category’s unique numerical identifier.',
            in: 'path',
            name: 'categoryId',
            required: true,
            schema: { example: 1, type: 'integer' },
          },
          example: 1,
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
              ProductId: z
                .int()
                .exactOptional()
                .openapi({ description: 'Product ID.', example: 1 }),
              StoreId: z
                .int()
                .exactOptional()
                .openapi({ description: 'Trade Policy ID.', example: 1 }),
            })
            .openapi({
              description: 'Object containing information related to the similar category.',
              required: [],
            }),
          example: { ProductId: 1, StoreId: 1 },
        },
      },
    },
  },
})

export const deleteApiCatalogPvtProductProductIdSimilarcategoryCategoryIdRoute = createRoute({
  method: 'delete',
  path: '/api/catalog/pvt/product/{productId}/similarcategory/{categoryId}',
  tags: ['Similar Category'],
  summary: 'Delete Similar Category',
  description: 'Deletes a Similar Category from a Product.',
  request: {
    headers: z.object({
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
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      productId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'Product’s unique numerical identifier.',
            in: 'path',
            name: 'productId',
            required: true,
            schema: { example: 1, type: 'integer' },
          },
          example: 1,
        }),
      categoryId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'Similar Category’s unique numerical identifier.',
            in: 'path',
            name: 'categoryId',
            required: true,
            schema: { example: 1, type: 'integer' },
          },
          example: 1,
        }),
    }),
  },
  responses: { 200: { description: 'OK' } },
})

export const getApiCatalogPvtProductProductIdSpecificationRoute = createRoute({
  method: 'get',
  path: '/api/catalog/pvt/product/{productId}/specification',
  tags: ['Product Specification'],
  summary: 'Get Product Specification and its information by Product ID',
  description:
    'Retrieves information of all specifications of a product by the product\'s ID.\r\n\r\n ### Response body example\r\n\r\n```json\r\n[\r\n    {\r\n        "Id": 227,\r\n        "ProductId": 1,\r\n        "FieldId": 33,\r\n        "FieldValueId": 135,\r\n        "Text": "ValueA"\r\n    },\r\n    {\r\n        "Id": 228,\r\n        "ProductId": 1,\r\n        "FieldId": 34,\r\n        "FieldValueId": 1,\r\n        "Text": "Giant"\r\n    }\r\n]\r\n```',
  operationId: 'GetProductSpecificationbyProductID',
  request: {
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
              'HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.',
            in: 'header',
            name: 'Accept',
            required: true,
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      productId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'Product’s unique numerical identifier.',
            in: 'path',
            name: 'productId',
            required: true,
            schema: { example: 1, type: 'integer' },
            style: 'simple',
          },
          example: 1,
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .array(
              z
                .object({
                  FieldId: z.int().exactOptional().openapi({ description: 'Specification ID.' }),
                  FieldValueId: z
                    .int()
                    .exactOptional()
                    .openapi({ description: 'Current specification value ID.' }),
                  Id: z
                    .int()
                    .exactOptional()
                    .openapi({
                      description:
                        'ID of the association of the specification and the product. This ID is used to update or delete the specification.',
                    }),
                  ProductId: z.int().exactOptional().openapi({ description: 'Product ID.' }),
                  Text: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'Current specification value text.' }),
                })
                .openapi({
                  description: 'Object with the product specification information.',
                  required: [],
                }),
            )
            .openapi({
              example: [
                { FieldId: 33, FieldValueId: 135, Id: 227, ProductId: 1, Text: 'ValueA' },
                { FieldId: 34, FieldValueId: 1, Id: 228, ProductId: 1, Text: 'Giant' },
              ],
              title: '',
            }),
        },
      },
    },
  },
})

export const postApiCatalogPvtProductProductIdSpecificationRoute = createRoute({
  method: 'post',
  path: '/api/catalog/pvt/product/{productId}/specification',
  tags: ['Product Specification'],
  summary: 'Associate Product Specification',
  description:
    'Associates a previously defined Specification to a Product.\r\n\r\n### Request body example\r\n\r\n```json\r\n{\r\n    "FieldId": 19,\r\n    "FieldValueId": 1,\r\n    "Text": "test"\r\n}\r\n```\r\n\r\n### Response body example\r\n\r\n```json\r\n{\r\n    "Id": 41,\r\n    "FieldId": 19,\r\n    "FieldValueId": 1,\r\n    "Text": "test"\r\n}\r\n```',
  request: {
    headers: z.object({
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
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      productId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'Product’s unique numerical identifier.',
            in: 'path',
            name: 'productId',
            required: true,
            schema: { example: 1, type: 'integer' },
          },
          example: 1,
        }),
    }),
    body: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .object({
              FieldId: z
                .int()
                .openapi({ description: 'Specification ID.', example: 19, title: 'Fieldid' }),
              FieldValueId: z
                .int()
                .exactOptional()
                .openapi({
                  description:
                    'Specification Value ID. Mandatory for `FieldTypeId` `5`, `6` and `7`. Must not be used for any other field types',
                  example: 12,
                  title: 'Fieldvalueid',
                }),
              Text: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Value of specification. Only for `FieldTypeId` different from `5`, `6` and `7`.',
                  example: 'Metal',
                  title: 'Text',
                }),
            })
            .openapi({ required: ['FieldId'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              FieldId: z.int().exactOptional().openapi({ description: 'Specification ID.' }),
              FieldValueId: z
                .int()
                .exactOptional()
                .openapi({
                  description:
                    'Specification Value ID. Mandatory for `FieldTypeId` `5`, `6` and `7`. Must not be used for any other field types',
                }),
              Id: z
                .int()
                .exactOptional()
                .openapi({
                  description:
                    'ID of the association of the specification and the product. This ID is used to update or delete the specification.',
                }),
              ProductId: z.int().exactOptional().openapi({ description: 'Product ID.' }),
              Text: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Value of specification. Only for `FieldTypeId` different from `5`, `6` and `7`.',
                }),
            })
            .openapi({
              example: { FieldId: 19, FieldValueId: 1, Id: 41, Text: 'test' },
              title: '',
              required: [],
            }),
        },
      },
    },
  },
})

export const deleteApiCatalogPvtProductProductIdSpecificationRoute = createRoute({
  method: 'delete',
  path: '/api/catalog/pvt/product/{productId}/specification',
  tags: ['Product Specification'],
  summary: 'Delete all Product Specifications by Product ID',
  description: 'Deletes all Product Specifications given a specific Product ID.',
  operationId: 'DeleteAllProductSpecifications',
  request: {
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
              'HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.',
            in: 'header',
            name: 'Accept',
            required: true,
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      productId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'Product’s unique numerical identifier.',
            in: 'path',
            name: 'productId',
            required: true,
            schema: { example: 1, type: 'integer' },
            style: 'simple',
          },
          example: 1,
        }),
    }),
  },
  responses: { 200: { description: 'OK' } },
})

export const deleteApiCatalogPvtProductProductIdSpecificationSpecificationIdRoute = createRoute({
  method: 'delete',
  path: '/api/catalog/pvt/product/{productId}/specification/{specificationId}',
  tags: ['Product Specification'],
  summary: 'Delete a specific Product Specification',
  description:
    'Deletes a specific Product Specification given a Product ID and a Specification ID.',
  operationId: 'DeleteaProductSpecification',
  request: {
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
              'HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.',
            in: 'header',
            name: 'Accept',
            required: true,
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      productId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'Product’s unique numerical identifier.',
            in: 'path',
            name: 'productId',
            required: true,
            schema: { example: 1, type: 'integer' },
            style: 'simple',
          },
          example: 1,
        }),
      specificationId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'Product Specification’s unique numerical identifier.',
            in: 'path',
            name: 'specificationId',
            required: true,
            schema: { example: 7, type: 'integer' },
            style: 'simple',
          },
          example: 7,
        }),
    }),
  },
  responses: { 200: { description: 'OK' } },
})

export const putApiCatalogPvtProductProductIdSpecificationvalueRoute = createRoute({
  method: 'put',
  path: '/api/catalog/pvt/product/{productId}/specificationvalue',
  tags: ['Product Specification'],
  summary: 'Associate product specification using specification name and group name',
  description:
    'Associates a specification to a product using specification name and group name. Automatically creates the informed group, specification and values if they had not been created before.\r\n\r\n ## Request body example\r\n\r\n```json\r\n{\r\n    "FieldName": "Material",\r\n    "GroupName": "Additional Information",\r\n    "RootLevelSpecification": false,\r\n    "FieldValues": [\r\n        "Cotton",\r\n       "Polyester"\r\n        ]\r\n}\r\n```\r\n \r\n \r\n## Response body example\r\n\r\n```json\r\n[\r\n    {\r\n        "Id": 53,\r\n        "ProductId": 3,\r\n        "FieldId": 21,\r\n        "FieldValueId": 60,\r\n        "Text": "Cotton"\r\n    },\r\n    {\r\n        "Id": 54,\r\n        "ProductId": 3,\r\n        "FieldId": 21,\r\n        "FieldValueId": 61,\r\n        "Text": "Polyester"\r\n    }\r\n]\r\n```\r\n',
  request: {
    headers: z.object({
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
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      productId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'Product’s unique numerical identifier.',
            in: 'path',
            name: 'productId',
            required: true,
            schema: { example: 1, type: 'integer' },
          },
          example: 1,
        }),
    }),
    body: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .object({
              FieldName: z
                .string()
                .openapi({ description: 'Specification name.', example: 'Material' }),
              FieldValues: z
                .array(
                  z.string().openapi({ description: 'Specification value.', example: 'Cotton' }),
                )
                .openapi({
                  description: 'Array of specification values.',
                  example: ['Cotton', 'Polyester'],
                }),
              GroupName: z.string().openapi({ description: 'Group name.', example: 'Composition' }),
              RootLevelSpecification: z
                .boolean()
                .openapi({ description: 'Root level specification.', example: true }),
            })
            .openapi({
              description: '',
              example: {
                FieldName: 'Material',
                FieldValues: ['Cotton', 'Polyester'],
                GroupName: 'Composition',
                RootLevelSpecification: true,
              },
              required: ['FieldName', 'GroupName', 'RootLevelSpecification', 'FieldValues'],
            }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .array(
              z
                .object({
                  FieldId: z.int().exactOptional().openapi({ description: 'Specification ID.' }),
                  FieldValueId: z
                    .int()
                    .exactOptional()
                    .openapi({ description: 'Current specification value ID.' }),
                  Id: z
                    .int()
                    .exactOptional()
                    .openapi({
                      description: 'ID of the association of the Product and the specification.',
                    }),
                  ProductId: z.int().exactOptional().openapi({ description: 'Product ID.' }),
                  Text: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'Current specification value text.' }),
                })
                .openapi({
                  description: 'Object with information of the specification.',
                  required: [],
                }),
            )
            .openapi({
              description: 'Array with information of all product specifications.',
              example: [
                { FieldId: 85, FieldValueId: 193, Id: 239, ProductId: 1, Text: 'Value123' },
              ],
              title: '',
            }),
        },
      },
    },
  },
})

export const postApiCatalogPvtSkuattachmentRoute = createRoute({
  method: 'post',
  path: '/api/catalog/pvt/skuattachment',
  tags: ['SKU Attachment'],
  summary: 'Associate SKU Attachment',
  description:
    'Associates an existing SKU to an existing Attachment. \r\n## Request body example\r\n\r\n```json\r\n{\r\n    "AttachmentId": 1,\r\n    "SkuId": 7\r\n}\r\n```\r\n\r\n## Response body example\r\n\r\n```json\r\n{\r\n    "Id": 31,\r\n    "AttachmentId": 1,\r\n    "SkuId": 7\r\n}\r\n```',
  request: {
    headers: z.object({
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
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
    }),
    body: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .object({
              AttachmentId: z
                .int()
                .openapi({ description: 'Attachment ID.', example: 1, title: 'AttachmentId' }),
              SkuId: z
                .int()
                .openapi({
                  description: 'Unique identifier of an SKU.',
                  example: 1,
                  title: 'SkuId',
                }),
            })
            .openapi({ required: ['AttachmentId', 'SkuId'], title: 'Request body' }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              AttachmentId: z
                .int()
                .exactOptional()
                .openapi({ description: 'Attachment ID.', example: 1 }),
              Id: z
                .int()
                .exactOptional()
                .openapi({
                  description: "Identifier of the SKU's association to the attachment.",
                  example: 31,
                }),
              SkuId: z
                .int()
                .exactOptional()
                .openapi({ description: 'Unique identifier of the SKU.', example: 7 }),
            })
            .openapi({
              description:
                'Object containing information about the association between the SKU and the attachment.',
              required: [],
            }),
          example: { AttachmentId: 1, Id: 31, SkuId: 7 },
        },
      },
    },
  },
})

export const deleteApiCatalogPvtSkuattachmentRoute = createRoute({
  method: 'delete',
  path: '/api/catalog/pvt/skuattachment',
  tags: ['SKU Attachment'],
  summary: 'Dissociate attachments and SKUs',
  description: 'Dissociates attachments and SKUs based on an SKU ID or an attachment ID.',
  request: {
    headers: z.object({
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
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
    }),
    query: z.object({
      skuId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'SKU ID. By using this query param, you can dissociate all the attachments from an SKU based on its SKU ID.',
            explode: true,
            in: 'query',
            name: 'skuId',
            required: false,
            schema: { example: 1, format: 'int32', type: 'integer' },
            style: 'form',
          },
          example: 1,
        }),
      attachmentId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Attachment ID. By using this query param, you can dissociate the given attachment from all previously associated SKUs.',
            explode: true,
            in: 'query',
            name: 'attachmentId',
            required: false,
            schema: { example: 1, format: 'int32', type: 'integer' },
            style: 'form',
          },
          example: 1,
        }),
    }),
  },
  responses: { 200: { description: 'OK' } },
})

export const deleteApiCatalogPvtSkuattachmentSkuAttachmentAssociationIdRoute = createRoute({
  method: 'delete',
  path: '/api/catalog/pvt/skuattachment/{skuAttachmentAssociationId}',
  tags: ['SKU Attachment'],
  summary: 'Delete SKU Attachment by Attachment Association ID',
  description: 'Deletes the association of an SKU to an Attachment.',
  request: {
    headers: z.object({
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
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      skuAttachmentAssociationId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description:
              'ID of the association between the attachment and the SKU, which corresponds to the `Id` in the response body of the [Associate SKU Attachment](https://developers.vtex.com/vtex-rest-api/reference/catalog-api-post-sku-attachment) and the [Get SKU Attachment by SKU ID](https://developers.vtex.com/vtex-rest-api/reference/get_api-catalog-pvt-stockkeepingunit-skuid-attachment) endpoints.',
            in: 'path',
            name: 'skuAttachmentAssociationId',
            required: true,
            schema: { example: 1, type: 'integer' },
          },
          example: 1,
        }),
    }),
  },
  responses: { 200: { description: 'OK' } },
})

export const postApiCatalogPvtSkucomplementRoute = createRoute({
  method: 'post',
  path: '/api/catalog/pvt/skucomplement',
  tags: ['SKU Complement'],
  summary: 'Create SKU Complement',
  description:
    'Creates a new SKU Complement on a Parent SKU. \r\n\r\n## Request body example\r\n\r\n```json\r\n{\r\n    "SkuId": 2,\r\n    "ParentSkuId": 1,\r\n    "ComplementTypeId": 2\r\n}\r\n```\r\n \r\n## Response body example\r\n\r\n```json\r\n{\r\n    "Id": 62,\r\n    "SkuId": 2,\r\n    "ParentSkuId": 1,\r\n    "ComplementTypeId": 2\r\n}\r\n```',
  operationId: 'CreateSKUComplement',
  request: {
    headers: z.object({
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
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
    }),
    body: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .object({
              ComplementTypeId: z
                .int()
                .openapi({
                  description:
                    'Complement Type ID. This represents the type of the complement. The possible values are: `1` for Accessory; `2` for Suggestion; `3` for Similar Product; `5` for Show Together.',
                  example: 1,
                  title: 'ComplementTypeId',
                }),
              ParentSkuId: z
                .int()
                .openapi({
                  description: 'ID of the Parent SKU, where the Complement is inserted.',
                  example: 1,
                  title: 'ParentSkuId',
                }),
              SkuId: z
                .int()
                .openapi({
                  description:
                    'ID of the SKU which will be inserted as a Complement in the Parent SKU.',
                  example: 1,
                  title: 'SkuId',
                }),
            })
            .openapi({
              example: { ComplementTypeId: 2, ParentSkuId: 1, SkuId: 2 },
              required: ['ParentSkuId', 'SkuId', 'ComplementTypeId'],
              title: 'Request body',
            }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: SkuComplementSchema,
          example: [{ ComplementTypeId: 1, Id: 61, ParentSkuId: 1, SkuId: 7 }],
        },
      },
    },
  },
})

export const getApiCatalogPvtSkucomplementSkuComplementIdRoute = createRoute({
  method: 'get',
  path: '/api/catalog/pvt/skucomplement/{skuComplementId}',
  tags: ['SKU Complement'],
  summary: 'Get SKU Complement by SKU Complement ID',
  description:
    'Retrieves an existing SKU Complement by its SKU Complement ID. \r\n \r\n## Response body example\r\n\r\n```json\r\n{\r\n    "Id": 62,\r\n    "SkuId": 2,\r\n    "ParentSkuId": 1,\r\n    "ComplementTypeId": 2\r\n}\r\n```',
  operationId: 'GetSKUComplementbySKUComplementID',
  request: {
    headers: z.object({
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
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      skuComplementId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'SKU Complement’s unique numerical identifier.',
            in: 'path',
            name: 'skuComplementId',
            required: true,
            schema: { example: 1, type: 'integer' },
          },
          example: 1,
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: SkuComplementSchema,
          example: [{ ComplementTypeId: 1, Id: 61, ParentSkuId: 1, SkuId: 7 }],
        },
      },
    },
  },
})

export const deleteApiCatalogPvtSkucomplementSkuComplementIdRoute = createRoute({
  method: 'delete',
  path: '/api/catalog/pvt/skucomplement/{skuComplementId}',
  tags: ['SKU Complement'],
  summary: 'Delete SKU Complement by SKU Complement ID',
  description: 'Deletes a previously existing SKU Complement by SKU Complement ID.',
  operationId: 'DeleteSKUComplementbySKUComplementID',
  request: {
    headers: z.object({
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
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      skuComplementId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'SKU Complement’s unique numerical identifier.',
            in: 'path',
            name: 'skuComplementId',
            required: true,
            schema: { example: 1, type: 'integer' },
          },
          example: 1,
        }),
    }),
  },
  responses: { 200: { description: 'OK' } },
})

export const postApiCatalogPvtSkuserviceRoute = createRoute({
  method: 'post',
  path: '/api/catalog/pvt/skuservice',
  tags: ['SKU Service'],
  summary: 'Associate SKU Service',
  description: 'Associates an SKU Service to an SKU.',
  request: {
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
              'HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.',
            in: 'header',
            name: 'Accept',
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
          schema: z
            .object({
              IsActive: z
                .boolean()
                .openapi({
                  description: 'Defines if the SKU Service is active or not.',
                  example: true,
                }),
              Name: z
                .string()
                .openapi({
                  description: 'SKU Service Name. Maximum of 50 characters.',
                  example: 'Engraving',
                }),
              SkuId: z.int().openapi({ description: 'SKU ID.', example: 1 }),
              SkuServiceTypeId: z
                .int()
                .openapi({ description: 'SKU Service Type ID.', example: 1 }),
              SkuServiceValueId: z
                .int()
                .openapi({ description: 'SKU Service Value ID.', example: 1 }),
              Text: z
                .string()
                .openapi({
                  description:
                    'Internal description of the SKU Service. Maximum of 100 characters.',
                  example: 'Name engraving additional service.',
                }),
            })
            .openapi({
              required: [
                'SkuServiceTypeId',
                'SkuServiceValueId',
                'SkuId',
                'Name',
                'Text',
                'IsActive',
              ],
              title: 'Request body',
            }),
        },
      },
    },
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: SKUServiceSchema } } },
  },
})

export const getApiCatalogPvtSkuserviceSkuServiceIdRoute = createRoute({
  method: 'get',
  path: '/api/catalog/pvt/skuservice/{skuServiceId}',
  tags: ['SKU Service'],
  summary: 'Get SKU Service',
  description:
    'Retrieves an SKU Service. \r\n## Response body example\r\n\r\n```json\r\n{\r\n    "Id": 1,\r\n    "SkuServiceTypeId": 1,\r\n    "SkuServiceValueId": 1,\r\n    "SkuId": 1,\r\n    "Name": "name",\r\n    "Text": "text",\r\n    "IsActive": false\r\n}\r\n```',
  request: {
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
              'HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.',
            in: 'header',
            name: 'Accept',
            required: true,
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      skuServiceId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'SKU Service unique identifier.',
            in: 'path',
            name: 'skuServiceId',
            required: true,
            schema: { example: 5, type: 'integer' },
          },
          example: 5,
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: SKUServiceSchema } } },
  },
})

export const putApiCatalogPvtSkuserviceSkuServiceIdRoute = createRoute({
  method: 'put',
  path: '/api/catalog/pvt/skuservice/{skuServiceId}',
  tags: ['SKU Service'],
  summary: 'Update SKU Service',
  description:
    'Updates an SKU Service. \r\n## Request body example\r\n\r\n```json\r\n{\r\n    "Name": "name",\r\n    "Text": "text",\r\n    "IsActive": false\r\n}\r\n```\r\n\r\n## Response body example\r\n\r\n```json\r\n{\r\n    "Id": 1,\r\n    "SkuServiceTypeId": 1,\r\n    "SkuServiceValueId": 1,\r\n    "SkuId": 1,\r\n    "Name": "name",\r\n    "Text": "text",\r\n    "IsActive": false\r\n}\r\n```',
  request: {
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
              'HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.',
            in: 'header',
            name: 'Accept',
            required: true,
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      skuServiceId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'SKU Service unique identifier.',
            in: 'path',
            name: 'skuServiceId',
            required: true,
            schema: { example: 5, type: 'integer' },
          },
          example: 5,
        }),
    }),
    body: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .object({
              IsActive: z
                .boolean()
                .openapi({
                  description: 'Defines if the SKU Service is active or not.',
                  example: true,
                  title: 'IsActive',
                }),
              Name: z
                .string()
                .openapi({
                  description: 'SKU Service Name. Maximum of 50 characters.',
                  example: 'Test name',
                  title: 'Name',
                }),
              SkuId: z.int().openapi({ description: 'SKU ID.', example: 1, title: 'SkuId' }),
              SkuServiceTypeId: z
                .int()
                .openapi({
                  description: 'SKU Service Type ID.',
                  example: 2,
                  title: 'SkuServiceTypeId',
                }),
              SkuServiceValueId: z
                .int()
                .openapi({
                  description: 'SKU Service Value ID.',
                  example: 1,
                  title: 'SkuServiceValueId',
                }),
              Text: z
                .string()
                .openapi({
                  description:
                    'Internal description for the SKU Service. Maximum of 100 characters.',
                  example: 'Text',
                  title: 'Text',
                }),
            })
            .openapi({
              required: [
                'SkuServiceTypeId',
                'SkuServiceValueId',
                'SkuId',
                'Name',
                'Text',
                'IsActive',
              ],
              title: 'Request body',
            }),
        },
      },
    },
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: SKUServiceSchema } } },
  },
})

export const deleteApiCatalogPvtSkuserviceSkuServiceIdRoute = createRoute({
  method: 'delete',
  path: '/api/catalog/pvt/skuservice/{skuServiceId}',
  tags: ['SKU Service'],
  summary: 'Dissociate SKU Service',
  description: 'Dissociates an SKU Service from an SKU.',
  request: {
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
              'HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.',
            in: 'header',
            name: 'Accept',
            required: true,
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      skuServiceId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'SKU Service unique identifier.',
            in: 'path',
            name: 'skuServiceId',
            required: true,
            schema: { example: 1, type: 'integer' },
          },
          example: 1,
        }),
    }),
  },
  responses: { 200: { description: 'OK' } },
})

export const postApiCatalogPvtSkuservicetypeRoute = createRoute({
  method: 'post',
  path: '/api/catalog/pvt/skuservicetype',
  tags: ['SKU Service Type'],
  summary: 'Create SKU Service Type',
  description:
    'Creates a new SKU Service Type. \r\n## Request body example\r\n\r\n```json\r\n{\r\n    "Name": "Test API Sku Services",\r\n    "IsActive": true,\r\n    "ShowOnProductFront": true,\r\n    "ShowOnCartFront": true,\r\n    "ShowOnAttachmentFront": true,\r\n    "ShowOnFileUpload": true,\r\n    "IsGiftCard": true,\r\n    "IsRequired": true\r\n}\r\n```\r\n\r\n## Response body example\r\n\r\n```json\r\n{\r\n    "Id": 2,\r\n    "Name": "Teste API Sku Services",\r\n    "IsActive": true,\r\n    "ShowOnProductFront": true,\r\n    "ShowOnCartFront": true,\r\n    "ShowOnAttachmentFront": true,\r\n    "ShowOnFileUpload": true,\r\n    "IsGiftCard": true,\r\n    "IsRequired": true\r\n}\r\n```',
  request: {
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
              'HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.',
            in: 'header',
            name: 'Accept',
            required: true,
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
    }),
    body: {
      description: '',
      content: { 'application/json': { schema: SKUServiceTypeRequestSchema } },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: SKUServiceTypeResponseSchema } },
    },
  },
})

export const getApiCatalogPvtSkuservicetypeSkuServiceTypeIdRoute = createRoute({
  method: 'get',
  path: '/api/catalog/pvt/skuservicetype/{skuServiceTypeId}',
  tags: ['SKU Service Type'],
  summary: 'Get SKU Service Type',
  description:
    'Retrieves information about an existing SKU Service Type. \r\n## Response body example:\r\n\r\n```json\r\n{\r\n    "Id": 2,\r\n    "Name": "Test API SKU Services",\r\n    "IsActive": true,\r\n    "ShowOnProductFront": true,\r\n    "ShowOnCartFront": true,\r\n    "ShowOnAttachmentFront": true,\r\n    "ShowOnFileUpload": true,\r\n    "IsGiftCard": true,\r\n    "IsRequired": true\r\n}\r\n```',
  request: {
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
              'HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.',
            in: 'header',
            name: 'Accept',
            required: true,
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      skuServiceTypeId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'SKU Service Type unique identifier.',
            in: 'path',
            name: 'skuServiceTypeId',
            required: true,
            schema: { example: 1, type: 'integer' },
          },
          example: 1,
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: SKUServiceTypeResponseSchema } },
    },
  },
})

export const putApiCatalogPvtSkuservicetypeSkuServiceTypeIdRoute = createRoute({
  method: 'put',
  path: '/api/catalog/pvt/skuservicetype/{skuServiceTypeId}',
  tags: ['SKU Service Type'],
  summary: 'Update SKU Service Type',
  description:
    'Updates an existing SKU Service Type.  \r\n## Request body example\r\n\r\n```json\r\n{\r\n    "Name": "Test API Sku Services",\r\n    "IsActive": true,\r\n    "ShowOnProductFront": true,\r\n    "ShowOnCartFront": true,\r\n    "ShowOnAttachmentFront": true,\r\n    "ShowOnFileUpload": true,\r\n    "IsGiftCard": true,\r\n    "IsRequired": true\r\n}\r\n```\r\n\r\n## Response body example\r\n\r\n```json\r\n{\r\n    "Id": 2,\r\n    "Name": "Teste API Sku Services",\r\n    "IsActive": true,\r\n    "ShowOnProductFront": true,\r\n    "ShowOnCartFront": true,\r\n    "ShowOnAttachmentFront": true,\r\n    "ShowOnFileUpload": true,\r\n    "IsGiftCard": true,\r\n    "IsRequired": true\r\n}\r\n```',
  request: {
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
              'HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.',
            in: 'header',
            name: 'Accept',
            required: true,
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      skuServiceTypeId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'SKU Service Type unique identifier.',
            in: 'path',
            name: 'skuServiceTypeId',
            required: true,
            schema: { example: 1, type: 'integer' },
          },
          example: 1,
        }),
    }),
    body: {
      description: '',
      content: { 'application/json': { schema: SKUServiceTypeRequestSchema } },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: SKUServiceTypeResponseSchema } },
    },
  },
})

export const deleteApiCatalogPvtSkuservicetypeSkuServiceTypeIdRoute = createRoute({
  method: 'delete',
  path: '/api/catalog/pvt/skuservicetype/{skuServiceTypeId}',
  tags: ['SKU Service Type'],
  summary: 'Delete SKU Service Type',
  description: 'Deletes an existing SKU Service Type.',
  request: {
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
              'HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.',
            in: 'header',
            name: 'Accept',
            required: true,
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      skuServiceTypeId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'SKU Service Type unique identifier.',
            in: 'path',
            name: 'skuServiceTypeId',
            required: true,
            schema: { example: 1, type: 'integer' },
          },
          example: 1,
        }),
    }),
  },
  responses: { 200: { description: 'OK' } },
})

export const postApiCatalogPvtSkuservicetypeattachmentRoute = createRoute({
  method: 'post',
  path: '/api/catalog/pvt/skuservicetypeattachment',
  tags: ['SKU Service Attachment'],
  summary: 'Associate SKU Service Attachment',
  description:
    'Associates an Attachment for an existing SKU Service Type. \r\n## Request body example\r\n\r\n```json\r\n{\r\n    "AttachmentId": 1,\r\n    "SkuServiceTypeId": 1\r\n}\r\n```\r\n\r\n## Response body example\r\n\r\n```json\r\n{\r\n    "Id": 1,\r\n    "AttachmentId": 1,\r\n    "SkuServiceTypeId": 1\r\n}\r\n```',
  request: {
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
              'HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.',
            in: 'header',
            name: 'Accept',
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
          schema: z
            .object({
              AttachmentId: z
                .int()
                .openapi({ description: 'Attachment ID.', example: 1, title: 'AttachmentId' }),
              SkuServiceTypeId: z
                .int()
                .openapi({
                  description: 'An explanation about the purpose of this instance.',
                  example: 1,
                  title: 'SkuServiceTypeId',
                }),
            })
            .openapi({ required: ['AttachmentId', 'SkuServiceTypeId'], title: 'Request body' }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              AttachmentId: z
                .int()
                .exactOptional()
                .openapi({ description: 'Attachment ID.', example: 1 }),
              Id: z
                .int()
                .exactOptional()
                .openapi({
                  description: 'SKU Service Type Attachment association ID.',
                  example: 1,
                }),
              SkuServiceTypeId: z
                .int()
                .exactOptional()
                .openapi({ description: 'SKU Service Type ID.', example: 1 }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const deleteApiCatalogPvtSkuservicetypeattachmentRoute = createRoute({
  method: 'delete',
  path: '/api/catalog/pvt/skuservicetypeattachment',
  tags: ['SKU Service Attachment'],
  summary: 'Dissociate Attachment by Attachment ID or SKU Service Type ID',
  description:
    'Dissociates an Attachment by its Attachment ID or SKU Service Type ID from an SKU Service Type.',
  request: {
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
              'HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.',
            in: 'header',
            name: 'Accept',
            required: true,
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
    }),
    query: z.object({
      attachmentId: z
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
            description: 'SKU Service Attachment unique identifier.',
            in: 'query',
            name: 'attachmentId',
            required: false,
            schema: { example: 1, type: 'integer' },
          },
          example: 1,
        }),
      skuServiceTypeId: z
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
            description: 'SKU Service Type unique identifier.',
            in: 'query',
            name: 'skuServiceTypeId',
            required: false,
            schema: { example: 1, type: 'integer' },
          },
          example: 1,
        }),
    }),
  },
  responses: { 200: { description: 'OK' } },
})

export const deleteApiCatalogPvtSkuservicetypeattachmentSkuServiceTypeAttachmentIdRoute =
  createRoute({
    method: 'delete',
    path: '/api/catalog/pvt/skuservicetypeattachment/{skuServiceTypeAttachmentId}',
    tags: ['SKU Service Attachment'],
    summary: 'Dissociate Attachment from SKU Service Type',
    description: 'Dissociates an Attachment from an SKU Service Type',
    request: {
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
                'HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.',
              in: 'header',
              name: 'Accept',
              required: true,
              schema: { default: 'application/json', type: 'string' },
              style: 'simple',
            },
          }),
      }),
      params: z.object({
        skuServiceTypeAttachmentId: z
          .preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.int(),
          )
          .openapi({
            param: {
              description: 'SKU Service Attachment unique identifier.',
              in: 'path',
              name: 'skuServiceTypeAttachmentId',
              required: true,
              schema: { example: 1, type: 'integer' },
            },
            example: 1,
          }),
      }),
    },
    responses: { 200: { description: 'OK' } },
  })

export const postApiCatalogPvtSkuservicevalueRoute = createRoute({
  method: 'post',
  path: '/api/catalog/pvt/skuservicevalue',
  tags: ['SKU Service Value'],
  summary: 'Create SKU Service Value',
  description:
    'Creates an SKU Service Value for an existing SKU Service Type. \r\n## Request body example\r\n\r\n```json\r\n{\r\n    "SkuServiceTypeId": 2,\r\n    "Name": "Test ServiceValue API",\r\n    "Value": 10.5,\r\n    "Cost": 10.5\r\n}\r\n```\r\n\r\n## Response body example\r\n\r\n```json\r\n{\r\n    "Id": 2,\r\n    "SkuServiceTypeId": 2,\r\n    "Name": "Test ServiceValue API",\r\n    "Value": 10.5,\r\n    "Cost": 10.5\r\n}\r\n```',
  request: {
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
              'HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.',
            in: 'header',
            name: 'Accept',
            required: true,
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
    }),
    body: {
      description: '',
      content: { 'application/json': { schema: SKUServiceValueRequestSchema } },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: SKUServiceValueResponseSchema } },
    },
  },
})

export const getApiCatalogPvtSkuservicevalueSkuServiceValueIdRoute = createRoute({
  method: 'get',
  path: '/api/catalog/pvt/skuservicevalue/{skuServiceValueId}',
  tags: ['SKU Service Value'],
  summary: 'Get SKU Service Value',
  description:
    'Retrieves an existing SKU Service Value. \r\n## Response body example\r\n\r\n```json\r\n{\r\n    "Id": 2,\r\n    "SkuServiceTypeId": 2,\r\n    "Name": "Test ServiceValue API",\r\n    "Value": 10.5,\r\n    "Cost": 10.5\r\n}\r\n```',
  request: {
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
              'HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.',
            in: 'header',
            name: 'Accept',
            required: true,
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      skuServiceValueId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'SKU Service Value unique identifier.',
            in: 'path',
            name: 'skuServiceValueId',
            required: true,
            schema: { example: 1, type: 'integer' },
          },
          example: 1,
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: SKUServiceValueResponseSchema } },
    },
  },
})

export const putApiCatalogPvtSkuservicevalueSkuServiceValueIdRoute = createRoute({
  method: 'put',
  path: '/api/catalog/pvt/skuservicevalue/{skuServiceValueId}',
  tags: ['SKU Service Value'],
  summary: 'Update SKU Service Value',
  description:
    'Updates an existing SKU Service Value. \r\n## Request body example\r\n\r\n```json\r\n{\r\n    "SkuServiceTypeId": 2,\r\n    "Name": "Test ServiceValue API",\r\n    "Value": 10.5,\r\n    "Cost": 10.5\r\n}\r\n```\r\n\r\n## Response body example\r\n\r\n```json\r\n{\r\n    "Id": 2,\r\n    "SkuServiceTypeId": 2,\r\n    "Name": "Test ServiceValue API",\r\n    "Value": 10.5,\r\n    "Cost": 10.5\r\n}\r\n```',
  request: {
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
              'HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.',
            in: 'header',
            name: 'Accept',
            required: true,
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      skuServiceValueId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'SKU Service Value unique identifier.',
            in: 'path',
            name: 'skuServiceValueId',
            required: true,
            schema: { example: 1, type: 'integer' },
          },
          example: 1,
        }),
    }),
    body: {
      description: '',
      content: { 'application/json': { schema: SKUServiceValueRequestSchema } },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: SKUServiceValueResponseSchema } },
    },
  },
})

export const deleteApiCatalogPvtSkuservicevalueSkuServiceValueIdRoute = createRoute({
  method: 'delete',
  path: '/api/catalog/pvt/skuservicevalue/{skuServiceValueId}',
  tags: ['SKU Service Value'],
  summary: 'Delete SKU Service Value',
  description: 'Deletes an existing SKU Service Value.',
  request: {
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
              'HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.',
            in: 'header',
            name: 'Accept',
            required: true,
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      skuServiceValueId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'SKU Service Value unique identifier.',
            in: 'path',
            name: 'skuServiceValueId',
            required: true,
            schema: { example: 1, type: 'integer' },
          },
          example: 1,
        }),
    }),
  },
  responses: { 200: { description: 'OK' } },
})

export const postApiCatalogPvtSpecificationRoute = createRoute({
  method: 'post',
  path: '/api/catalog/pvt/specification',
  tags: ['Specification'],
  summary: 'Create Specification',
  description:
    'Creates a new Product or SKU Specification. \r\n## Request body example\r\n\r\n```json\r\n{\r\n    "FieldTypeId": 1,\r\n    "CategoryId": 4,\r\n    "FieldGroupId": 20,\r\n    "Name": "Material",\r\n    "Description": "Composition of the product.",\r\n    "Position": 1,\r\n    "IsFilter": true,\r\n    "IsRequired": true,\r\n    "IsOnProductDetails": false,\r\n    "IsStockKeepingUnit": false,\r\n    "IsActive": true,\r\n    "IsTopMenuLinkActive": false,\r\n    "IsSideMenuLinkActive": true,\r\n    "DefaultValue": "Cotton"\r\n}\r\n```\r\n\r\n## Response body example\r\n\r\n```json\r\n{\r\n    "Id": 88,\r\n    "FieldTypeId": 1,\r\n    "CategoryId": 4,\r\n    "FieldGroupId": 20,\r\n    "Name": "Material",\r\n    "Description": "Composition of the product.",\r\n    "Position": 1,\r\n    "IsFilter": true,\r\n    "IsRequired": true,\r\n    "IsOnProductDetails": false,\r\n    "IsStockKeepingUnit": false,\r\n    "IsWizard": false,\r\n    "IsActive": true,\r\n    "IsTopMenuLinkActive": false,\r\n    "IsSideMenuLinkActive": true,\r\n    "DefaultValue": "Cotton"\r\n}\r\n```\r\n',
  request: {
    headers: z.object({
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
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              CategoryId: z
                .int()
                .exactOptional()
                .openapi({
                  description: 'Category ID associated with this specification.',
                  example: 1,
                  title: 'CategoryId',
                }),
              DefaultValue: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Specification default value.',
                  example: 'Cotton',
                  title: 'DefaultValue',
                }),
              Description: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({ deprecated: true, example: 'Composition of the product.' }),
              FieldGroupId: z
                .int()
                .openapi({
                  description:
                    'ID of the group of specifications that contains the new specification.',
                  example: 22,
                  title: 'FieldGroupId',
                }),
              FieldTypeId: z
                .int()
                .openapi({
                  description:
                    'Field Type ID can be `1 - Text`, `2 - Multi-Line Text`, `4 - Number`, `5 - Combo`, `6 - Radio`, `7 - Checkbox`, `8 - Indexed Text`, `9 - Indexed Multi-Line Text`.',
                  example: 1,
                  title: 'FieldTypeId',
                }),
              IsActive: z
                .boolean()
                .exactOptional()
                .openapi({
                  description: 'Enable (`true`) or disable (`false`) specification.',
                  example: true,
                  title: 'IsActive',
                }),
              IsFilter: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Store Framework - Deprecated.\r\nLegacy CMS Portal - To allow the specification to be used as a facet (filter) on the search navigation bar.\r\n',
                  example: false,
                  title: 'IsFilter',
                }),
              IsOnProductDetails: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Store Framework - Deprecated.\r\nLegacy CMS Portal -If specification is visible on the product page.\r\n',
                  example: true,
                  title: 'IsOnProductDetails',
                }),
              IsRequired: z
                .boolean()
                .exactOptional()
                .openapi({
                  description: 'Makes the specification mandatory (`true`) or optional (`false`).',
                  example: false,
                  title: 'IsRequired',
                }),
              IsSideMenuLinkActive: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Store Framework - Deprecated.\r\nLegacy CMS Portal - To make the specification field clickable in the search navigation bar.\r\n',
                  example: false,
                  title: 'IsSideMenuLinkActive',
                }),
              IsStockKeepingUnit: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'If `true`, it will be added as a SKU specification. If `false`, it will be added as a product specification field.',
                  example: false,
                  title: 'IsStockKeepingUnit',
                }),
              IsTopMenuLinkActive: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    "Store Framework - Deprecated.\r\nLegacy CMS Portal - To make the specification visible in the store's upper menu.\r\n",
                  example: false,
                  title: 'IsTopMenuLinkActive',
                }),
              IsWizard: z.boolean().nullable().exactOptional().openapi({ deprecated: true }),
              Name: z
                .string()
                .openapi({
                  description: 'Specification name.',
                  example: 'Material',
                  title: 'Name',
                }),
              Position: z
                .int()
                .exactOptional()
                .openapi({
                  description:
                    'Store Framework - Deprecated.\r\nLegacy CMS Portal - This position number is used in ordering the specifications both in the navigation menu and in the specification listing on the product page.\r\n',
                  example: 1,
                  title: 'Position',
                }),
            })
            .openapi({ required: ['FieldTypeId', 'FieldGroupId', 'Name'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              CategoryId: z
                .int()
                .exactOptional()
                .openapi({ description: 'Category ID associated with this specification.' }),
              DefaultValue: z
                .string()
                .exactOptional()
                .openapi({ description: 'Specification default value.' }),
              Description: z.string().nullable().exactOptional().openapi({ deprecated: true }),
              FieldGroupId: z
                .int()
                .exactOptional()
                .openapi({
                  description:
                    'ID of the group of specifications that contains the new specification.',
                }),
              FieldTypeId: z
                .int()
                .exactOptional()
                .openapi({
                  description:
                    'Field Type ID can be `1 - Text`, `2 - Multi-Line Text`, `4 - Number`, `5 - Combo`, `6 - Radio`, `7 - Checkbox`, `8 - Indexed Text`, `9 - Indexed Multi-Line Text`.',
                  title: 'The FieldTypeId schema',
                }),
              Id: z.int().exactOptional().openapi({ description: 'Specification ID.' }),
              IsActive: z
                .boolean()
                .exactOptional()
                .openapi({ description: 'Enable (`true`) or disable (`false`) specification.' }),
              IsFilter: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Store Framework - Deprecated.\r\nLegacy CMS Portal - To allow the specification to be used as a facet (filter) on the search navigation bar.\r\n',
                }),
              IsOnProductDetails: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Store Framework - Deprecated.\r\nLegacy CMS Portal -If specification is visible on the product page.\r\n',
                }),
              IsRequired: z
                .boolean()
                .exactOptional()
                .openapi({
                  description: 'Makes the specification mandatory (`true`) or optional (`false`).',
                }),
              IsSideMenuLinkActive: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Store Framework - Deprecated.\r\nLegacy CMS Portal - To make the specification field clickable in the search navigation bar.\r\n',
                }),
              IsStockKeepingUnit: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'If `true`, it will be added as a SKU specification. If `false`, it will be added as a product specification field.',
                }),
              IsTopMenuLinkActive: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    "Store Framework - Deprecated.\r\nLegacy CMS Portal - To make the specification visible in the store's upper menu.\r\n",
                }),
              IsWizard: z.boolean().nullable().exactOptional().openapi({ deprecated: true }),
              Name: z.string().exactOptional().openapi({ description: 'Specification name.' }),
              Position: z
                .int()
                .exactOptional()
                .openapi({
                  description:
                    'Store Framework - Deprecated.\r\nLegacy CMS Portal - This position number is used in ordering the specifications both in the navigation menu and in the specification listing on the product page.\r\n',
                }),
            })
            .openapi({ title: '', required: [] }),
          example: {
            CategoryId: 4,
            DefaultValue: 'Cotton',
            Description: 'Composition of the product.',
            FieldGroupId: 20,
            FieldTypeId: 1,
            Id: 88,
            IsActive: true,
            IsFilter: true,
            IsOnProductDetails: false,
            IsRequired: true,
            IsSideMenuLinkActive: true,
            IsStockKeepingUnit: false,
            IsTopMenuLinkActive: false,
            IsWizard: false,
            Name: 'Material',
            Position: 1,
          },
        },
      },
    },
  },
})

export const getApiCatalogPvtSpecificationNonstructuredRoute = createRoute({
  method: 'get',
  path: '/api/catalog/pvt/specification/nonstructured',
  tags: ['Non Structured Specification'],
  summary: 'Get Non Structured Specification by SKU ID',
  description:
    'Gets general information about unmapped Specifications of a Seller\'s SKU in a Marketplace by SKU ID. \r\n## Response body example\r\n\r\n```json\r\n[\r\n{\r\n    "Id": 1010,\r\n    "SkuId": 310119072,\r\n    "SpecificationName": "size",\r\n    "SpecificationValue": "Small"\r\n}\r\n]\r\n```',
  request: {
    headers: z.object({
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
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
    }),
    query: z.object({
      skuId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'SKU’s unique numerical identifier.',
            in: 'query',
            name: 'skuId',
            required: true,
            schema: { example: 1, type: 'integer' },
          },
          example: 1,
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z.array(
            z
              .object({
                Id: z
                  .int()
                  .exactOptional()
                  .openapi({
                    description: 'Non Structured Specification’s unique numerical identifier.',
                    example: 1010,
                    title: 'Id',
                  }),
                SkuId: z
                  .int()
                  .exactOptional()
                  .openapi({
                    description: "SKU's unique numerical identifier.",
                    example: 310119072,
                    title: 'SkuId',
                  }),
                SpecificationName: z
                  .string()
                  .exactOptional()
                  .openapi({
                    description: 'Name of the Non Structured Specification.',
                    example: 'size',
                    title: 'SpecificationName',
                  }),
                SpecificationValue: z
                  .string()
                  .exactOptional()
                  .openapi({
                    description: 'Value of the Non Structured Specification.',
                    example: 'Small',
                    title: 'SpecificationValue',
                  }),
              })
              .openapi({ required: [] }),
          ),
        },
      },
    },
  },
})

export const deleteApiCatalogPvtSpecificationNonstructuredRoute = createRoute({
  method: 'delete',
  path: '/api/catalog/pvt/specification/nonstructured',
  tags: ['Non Structured Specification'],
  summary: 'Delete Non Structured Specification by SKU ID',
  description: "Deletes unmapped Specifications of a Seller'S SKU in a Marketplace by SKU ID.",
  request: {
    headers: z.object({
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
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
    }),
    query: z.object({
      skuId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'SKU’s unique numerical identifier.',
            in: 'query',
            name: 'skuId',
            required: true,
            schema: { example: 1, type: 'integer' },
          },
          example: 1,
        }),
    }),
  },
  responses: { 200: { description: 'OK' } },
})

export const getApiCatalogPvtSpecificationNonstructuredIdRoute = createRoute({
  method: 'get',
  path: '/api/catalog/pvt/specification/nonstructured/{Id}',
  tags: ['Non Structured Specification'],
  summary: 'Get Non Structured Specification by ID',
  description:
    'Retrieves general information about unmapped Specifications of a Seller\'s SKU in a Marketplace. \r\n## Response body example\r\n\r\n```json\r\n{\r\n    "Id": 1010,\r\n    "SkuId": 310119072,\r\n    "SpecificationName": "size",\r\n    "SpecificationValue": "Small"\r\n}\r\n```',
  request: {
    headers: z.object({
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
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      Id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'Non Structured Specification’s unique numerical identifier.',
            in: 'path',
            name: 'Id',
            required: true,
            schema: { example: 1010, type: 'integer' },
          },
          example: 1010,
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z.array(
            z
              .object({
                Id: z
                  .int()
                  .exactOptional()
                  .openapi({
                    description: 'Non Structured Specification’s unique numerical identifier.',
                    example: 1010,
                    title: 'Id',
                  }),
                SkuId: z
                  .int()
                  .exactOptional()
                  .openapi({
                    description: "SKU's unique numerical identifier.",
                    example: 310119072,
                    title: 'SkuId',
                  }),
                SpecificationName: z
                  .string()
                  .exactOptional()
                  .openapi({
                    description: 'Name of the Non Structured Specification.',
                    example: 'size',
                    title: 'SpecificationName',
                  }),
                SpecificationValue: z
                  .string()
                  .exactOptional()
                  .openapi({
                    description: 'Value of the Non Structured Specification.',
                    example: 'Small',
                    title: 'SpecificationValue',
                  }),
              })
              .openapi({ required: [] }),
          ),
        },
      },
    },
  },
})

export const deleteApiCatalogPvtSpecificationNonstructuredIdRoute = createRoute({
  method: 'delete',
  path: '/api/catalog/pvt/specification/nonstructured/{Id}',
  tags: ['Non Structured Specification'],
  summary: 'Delete Non Structured Specification',
  description:
    "Deletes unmapped Specifications of a Seller'S SKU in a Marketplace by its unique ID.",
  request: {
    headers: z.object({
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
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      Id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'Non Structured Specification’s unique numerical identifier.',
            in: 'path',
            name: 'Id',
            required: true,
            schema: { example: 1, type: 'integer' },
          },
          example: 1,
        }),
    }),
  },
  responses: { 200: { description: 'OK' } },
})

export const getApiCatalogPvtSpecificationSpecificationIdRoute = createRoute({
  method: 'get',
  path: '/api/catalog/pvt/specification/{specificationId}',
  tags: ['Specification'],
  summary: 'Get Specification',
  description:
    'Retrieves information of a Product or SKU Specification. \r\n## Response body example\r\n\r\n```json\r\n{\r\n    "Id": 88,\r\n    "FieldTypeId": 1,\r\n    "CategoryId": 4,\r\n    "FieldGroupId": 20,\r\n    "Name": "Material",\r\n    "Description": "Composition of the product.",\r\n    "Position": 1,\r\n    "IsFilter": true,\r\n    "IsRequired": true,\r\n    "IsOnProductDetails": false,\r\n    "IsStockKeepingUnit": false,\r\n    "IsWizard": false,\r\n    "IsActive": true,\r\n    "IsTopMenuLinkActive": false,\r\n    "IsSideMenuLinkActive": true,\r\n    "DefaultValue": "Cotton"\r\n}\r\n```\r\n',
  request: {
    headers: z.object({
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
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      specificationId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'Specification’s unique numerical identifier.',
            in: 'path',
            name: 'specificationId',
            required: true,
            schema: { example: 1, type: 'integer' },
          },
          example: 1,
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
              CategoryId: z
                .int()
                .openapi({
                  description: 'Specification Category ID.',
                  example: 0,
                  title: 'CategoryId',
                }),
              DefaultValue: z
                .string()
                .nullable()
                .openapi({
                  description: 'Specification Default Value.',
                  example: '',
                  title: 'DefaultValue',
                }),
              Description: z
                .string()
                .openapi({
                  description: 'Specification Description.',
                  example: '',
                  title: 'Description',
                }),
              FieldGroupId: z
                .int()
                .openapi({
                  description:
                    'Numerical ID of the Group of Specifications that contains the new Specification.',
                  example: 0,
                  title: 'FieldGroupId',
                }),
              FieldTypeId: z
                .int()
                .openapi({
                  description:
                    'Field Type can be `1 - Text`, `2 - Multi-Line Text`, `4 - Number`, `5 - Combo`, `6 - Radio`, `7 - Checkbox`, `8 - Indexed Text`, `9 - Indexed Multi-Line Text`.',
                  example: 1,
                  title: 'FieldTypeId',
                }),
              Id: z
                .int()
                .openapi({ description: 'Created Specification’s ID.', example: 32, title: 'Id' }),
              IsActive: z
                .boolean()
                .openapi({
                  description: 'Defines if the Specification is active or not.',
                  example: false,
                  title: 'IsActive',
                }),
              IsFilter: z
                .boolean()
                .openapi({
                  description: 'Defines if the Specification can be used as a Filter.',
                  example: false,
                  title: 'IsFilter',
                }),
              IsOnProductDetails: z
                .boolean()
                .openapi({
                  description:
                    'Defines if the Specification will be shown on the Product screen in the specification area.',
                  example: false,
                  title: 'IsOnProductDetails',
                }),
              IsRequired: z
                .boolean()
                .openapi({
                  description: 'Defines if the Specification is required or not.',
                  example: false,
                  title: 'IsRequired',
                }),
              IsSideMenuLinkActive: z
                .boolean()
                .openapi({
                  description: 'Defines if the Specification is shown in the side menu.',
                  example: false,
                  title: 'IsSideMenuLinkActive',
                }),
              IsStockKeepingUnit: z
                .boolean()
                .openapi({
                  description: 'Defines if the Specification is applied to a specific SKU.',
                  example: false,
                  title: 'IsStockKeepingUnit',
                }),
              IsTopMenuLinkActive: z
                .boolean()
                .openapi({
                  description:
                    'Defines if the Specification is shown in the main menu of the site.',
                  example: false,
                  title: 'IsTopMenuLinkActive',
                }),
              IsWizard: z
                .boolean()
                .openapi({
                  deprecated: true,
                  description: 'Deprecated',
                  example: false,
                  title: 'IsWizard',
                }),
              Name: z
                .string()
                .openapi({ description: 'Specification Name.', example: '', title: 'Name' }),
              Position: z
                .int()
                .openapi({
                  description:
                    "The current Specification's position in comparison to the other Specifications.",
                  example: 0,
                  title: 'Position',
                }),
            })
            .openapi({
              required: [
                'Id',
                'FieldTypeId',
                'CategoryId',
                'FieldGroupId',
                'Name',
                'Description',
                'Position',
                'IsFilter',
                'IsRequired',
                'IsOnProductDetails',
                'IsStockKeepingUnit',
                'IsWizard',
                'IsActive',
                'IsTopMenuLinkActive',
                'IsSideMenuLinkActive',
                'DefaultValue',
              ],
              title: 'Request body',
            }),
          example: {
            CategoryId: 10,
            DefaultValue: null,
            Description: 'Peso',
            FieldGroupId: 11,
            FieldTypeId: 6,
            Id: 32,
            IsActive: true,
            IsFilter: false,
            IsOnProductDetails: false,
            IsRequired: true,
            IsSideMenuLinkActive: false,
            IsStockKeepingUnit: true,
            IsTopMenuLinkActive: false,
            IsWizard: false,
            Name: 'Peso',
            Position: 1,
          },
        },
      },
    },
  },
})

export const putApiCatalogPvtSpecificationSpecificationIdRoute = createRoute({
  method: 'put',
  path: '/api/catalog/pvt/specification/{specificationId}',
  tags: ['Specification'],
  summary: 'Update Specification',
  description:
    'Updates a Product or SKU Specification. \r\n## Request body example\r\n\r\n```json\r\n{\r\n    "FieldTypeId": 1,\r\n    "CategoryId": 4,\r\n    "FieldGroupId": 20,\r\n    "Name": "Material",\r\n    "Description": "Composition of the product.",\r\n    "Position": 1,\r\n    "IsFilter": true,\r\n    "IsRequired": true,\r\n    "IsOnProductDetails": false,\r\n    "IsStockKeepingUnit": false,\r\n    "IsActive": true,\r\n    "IsTopMenuLinkActive": false,\r\n    "IsSideMenuLinkActive": true,\r\n    "DefaultValue": "Leather"\r\n}\r\n```\r\n\r\n## Response body example\r\n\r\n```json\r\n{\r\n    "Id": 88,\r\n    "FieldTypeId": 1,\r\n    "CategoryId": 4,\r\n    "FieldGroupId": 20,\r\n    "Name": "Material",\r\n    "Description": "Composition of the product.",\r\n    "Position": 1,\r\n    "IsFilter": true,\r\n    "IsRequired": true,\r\n    "IsOnProductDetails": false,\r\n    "IsStockKeepingUnit": false,\r\n    "IsWizard": false,\r\n    "IsActive": true,\r\n    "IsTopMenuLinkActive": false,\r\n    "IsSideMenuLinkActive": true,\r\n    "DefaultValue": "Leather"\r\n}\r\n```\r\n',
  request: {
    headers: z.object({
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
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      specificationId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'Specification’s unique numerical identifier.',
            in: 'path',
            name: 'specificationId',
            required: true,
            schema: { example: 88, type: 'integer' },
          },
          example: 88,
        }),
    }),
    body: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .object({
              CategoryId: z
                .int()
                .openapi({
                  description: 'Specification Category ID.',
                  example: 0,
                  title: 'CategoryId',
                }),
              DefaultValue: z
                .string()
                .openapi({
                  description: 'Specification Default Value.',
                  example: 'Leather',
                  title: 'DefaultValue',
                }),
              Description: z
                .string()
                .openapi({
                  description: 'Specification Description.',
                  example: 'Composition of the product.',
                  title: 'Description',
                }),
              FieldGroupId: z
                .int()
                .openapi({
                  description:
                    'Numerical ID of the Group of Specifications that contains the new Specification.',
                  example: 0,
                  title: 'FieldGroupId',
                }),
              FieldTypeId: z
                .int()
                .openapi({
                  description:
                    'Field Type can be `1 - Text`, `2 - Multi-Line Text`, `4 - Number`, `5 - Combo`, `6 - Radio`, `7 - Checkbox`, `8 - Indexed Text`, `9 - Indexed Multi-Line Text`.',
                  example: 1,
                  title: 'FieldTypeId',
                }),
              IsActive: z
                .boolean()
                .openapi({
                  description: 'Defines if the Specification is active or not.',
                  example: false,
                  title: 'IsActive',
                }),
              IsFilter: z
                .boolean()
                .openapi({
                  description: 'Defines if the Specification can be used as a Filter.',
                  example: false,
                  title: 'IsFilter',
                }),
              IsOnProductDetails: z
                .boolean()
                .openapi({
                  description:
                    'Defines if the Specification will be  shown on the Product screen in the specification area.',
                  example: false,
                  title: 'IsOnProductDetails',
                }),
              IsRequired: z
                .boolean()
                .openapi({
                  description: 'Defines if the Specification is required or not.',
                  example: false,
                  title: 'IsRequired',
                }),
              IsSideMenuLinkActive: z
                .boolean()
                .openapi({
                  description: 'Defines if the Specification is shown in the side menu.',
                  example: false,
                  title: 'IsSideMenuLinkActive',
                }),
              IsStockKeepingUnit: z
                .boolean()
                .openapi({
                  description: 'Defines if the Specification is applied to a specific SKU.',
                  example: false,
                  title: 'IsStockKeepingUnit',
                }),
              IsTopMenuLinkActive: z
                .boolean()
                .openapi({
                  description:
                    'Defines if the Specification is shown in the main menu of the site.',
                  example: false,
                  title: 'IsTopMenuLinkActive',
                }),
              IsWizard: z
                .boolean()
                .openapi({
                  deprecated: true,
                  description: 'Deprecated',
                  example: false,
                  title: 'IsWizard',
                }),
              Name: z
                .string()
                .openapi({
                  description: 'Specification Name.',
                  example: 'Material',
                  title: 'Name',
                }),
              Position: z
                .int()
                .openapi({
                  description:
                    "The current Specification's position in comparison to the other Specifications.",
                  example: 1,
                  title: 'Position',
                }),
            })
            .openapi({
              required: [
                'FieldTypeId',
                'CategoryId',
                'FieldGroupId',
                'Name',
                'Description',
                'Position',
                'IsFilter',
                'IsRequired',
                'IsOnProductDetails',
                'IsStockKeepingUnit',
                'IsWizard',
                'IsActive',
                'IsTopMenuLinkActive',
                'IsSideMenuLinkActive',
                'DefaultValue',
              ],
              title: 'Request body',
            }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              CategoryId: z
                .int()
                .exactOptional()
                .openapi({ description: 'Category ID associated with this specification.' }),
              DefaultValue: z
                .string()
                .exactOptional()
                .openapi({ description: 'Specification default value.' }),
              Description: z.string().nullable().exactOptional().openapi({ deprecated: true }),
              FieldGroupId: z
                .int()
                .exactOptional()
                .openapi({
                  description:
                    'ID of the group of specifications that contains the new specification.',
                }),
              FieldTypeId: z
                .int()
                .exactOptional()
                .openapi({
                  description:
                    'Field Type ID can be `1 - Text`, `2 - Multi-Line Text`, `4 - Number`, `5 - Combo`, `6 - Radio`, `7 - Checkbox`, `8 - Indexed Text`, `9 - Indexed Multi-Line Text`.',
                  title: 'The FieldTypeId schema',
                }),
              Id: z.int().exactOptional().openapi({ description: 'Specification ID.' }),
              IsActive: z
                .boolean()
                .exactOptional()
                .openapi({ description: 'Enable (`true`) or disable (`false`) specification.' }),
              IsFilter: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Store Framework - Deprecated.\r\nLegacy CMS Portal - To allow the specification to be used as a facet (filter) on the search navigation bar.\r\n',
                }),
              IsOnProductDetails: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Store Framework - Deprecated.\r\nLegacy CMS Portal -If specification is visible on the product page.\r\n',
                }),
              IsRequired: z
                .boolean()
                .exactOptional()
                .openapi({
                  description: 'Makes the specification mandatory (`true`) or optional (`false`).',
                }),
              IsSideMenuLinkActive: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Store Framework - Deprecated.\r\nLegacy CMS Portal - To make the specification field clickable in the search navigation bar.\r\n',
                }),
              IsStockKeepingUnit: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'If `true`, it will be added as a SKU specification. If `false`, it will be added as a product specification field.',
                }),
              IsTopMenuLinkActive: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    "Store Framework - Deprecated.\r\nLegacy CMS Portal - To make the specification visible in the store's upper menu.\r\n",
                }),
              IsWizard: z.boolean().nullable().exactOptional().openapi({ deprecated: true }),
              Name: z.string().exactOptional().openapi({ description: 'Specification name.' }),
              Position: z
                .int()
                .exactOptional()
                .openapi({
                  description:
                    'Store Framework - Deprecated.\r\nLegacy CMS Portal - This position number is used in ordering the specifications both in the navigation menu and in the specification listing on the product page.\r\n',
                }),
            })
            .openapi({ title: '', required: [] }),
          example: {
            CategoryId: 4,
            DefaultValue: 'Leather',
            Description: 'Composition of the product.',
            FieldGroupId: 20,
            FieldTypeId: 1,
            Id: 88,
            IsActive: true,
            IsFilter: true,
            IsOnProductDetails: false,
            IsRequired: true,
            IsSideMenuLinkActive: true,
            IsStockKeepingUnit: false,
            IsTopMenuLinkActive: false,
            IsWizard: false,
            Name: 'Material',
            Position: 1,
          },
        },
      },
    },
  },
})

export const postApiCatalogPvtSpecificationgroupRoute = createRoute({
  method: 'post',
  path: '/api/catalog/pvt/specificationgroup',
  tags: ['Specification Group'],
  summary: 'Create Specification Group',
  description:
    'Create a specification group. \r\n>⚠️ It is also possible to create a Specification Group by using an alternative legacy route: `/api/catalog_system/pvt/specification/group`. \r\n## Request body example\r\n\r\n```json\r\n{\r\n    "CategoryId": 1,\r\n    "Name": "Sizes"\r\n}\r\n```\r\n\r\n## Response body example\r\n\r\n```json\r\n{\r\n  "Id": 6,\r\n  "CategoryId": 1,\r\n  "Name": "Sizes",\r\n  "Position": 3\r\n}\r\n```',
  operationId: 'SpecificationGroupInsert2',
  request: {
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
              'HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.',
            in: 'header',
            name: 'Accept',
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
          schema: SpecificationGroupInsertRequestSchema,
          example: { CategoryId: 1, Name: 'Sizes' },
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
              CategoryId: z.int32().exactOptional().openapi({ description: 'Category ID.' }),
              Id: z.int32().exactOptional().openapi({ description: 'Specification Group ID.' }),
              Name: z
                .string()
                .exactOptional()
                .openapi({ description: 'Specification Group Name.' }),
              Position: z
                .int32()
                .exactOptional()
                .openapi({
                  description:
                    'Store Framework - Deprecated.\r\nLegacy CMS Portal - Specification Group Position.',
                }),
            })
            .openapi({ title: '', required: [] }),
          example: { CategoryId: 1, Id: 10, Name: 'Sizes', Position: 3 },
        },
      },
    },
  },
})

export const putApiCatalogPvtSpecificationgroupGroupIdRoute = createRoute({
  method: 'put',
  path: '/api/catalog/pvt/specificationgroup/{groupId}',
  tags: ['Specification Group'],
  summary: 'Update Specification Group',
  description:
    'Update a specification group. \r\n>⚠️ It is also possible to update a Specification Group by using an alternative legacy route: `/api/catalog_system/pvt/specification/group`.\r\n\r\n## Request and response body example\r\n\r\n```json\r\n{\r\n    "CategoryId": 1,\r\n    "Id": 17,\r\n    "Name": "NewGroupName",\r\n    "Position": 1\r\n}\r\n```',
  request: {
    headers: z.object({
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
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      groupId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'Group’s unique numerical identifier.',
            in: 'path',
            name: 'groupId',
            required: true,
            schema: { example: 1, type: 'integer' },
          },
          example: 1,
        }),
    }),
    body: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .object({
              CategoryId: z
                .int()
                .openapi({
                  description: 'Category ID where the Specification Group is contained.',
                  example: 1,
                  title: 'CategoryId',
                }),
              Id: z.int32().openapi({ description: 'Specification Group ID.', example: 24 }),
              Name: z
                .string()
                .openapi({
                  description: 'Specification Group Name.',
                  example: 'Sizes',
                  title: 'Name',
                }),
              Position: z
                .int()
                .openapi({
                  description: 'Specification Group Position.',
                  example: 1,
                  title: 'Position',
                }),
            })
            .openapi({ required: ['CategoryId', 'Name', 'Id', 'Position'], title: 'Request body' }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              CategoryId: z
                .int()
                .exactOptional()
                .openapi({
                  description: 'Category ID where the Specification Group is contained.',
                  example: 1,
                  title: 'CategoryId',
                }),
              Id: z
                .int32()
                .exactOptional()
                .openapi({ description: 'Specification Group ID.', example: 24 }),
              Name: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Specification Group Name.',
                  example: 'Sizes',
                  title: 'Name',
                }),
              Position: z
                .int()
                .exactOptional()
                .openapi({
                  description: 'Specification Group Position.',
                  example: 1,
                  title: 'Position',
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const postApiCatalogPvtSpecificationvalueRoute = createRoute({
  method: 'post',
  path: '/api/catalog/pvt/specificationvalue',
  tags: ['Specification Value'],
  summary: 'Create Specification Value',
  description:
    'Creates a new Specification Value for a Category. \r\n## Request body example\r\n\r\n```json\r\n{\r\n    "FieldId": 193,\r\n    "Name": "Metal",\r\n    "IsActive": true,\r\n    "Position": 1\r\n  }\r\n```\r\n\r\n## Response body example\r\n\r\n```json\r\n{\r\n  "FieldValueId": 360,\r\n  "FieldId": 193,\r\n  "Name": "Metal",\r\n  "Text": null,\r\n  "IsActive": true,\r\n  "Position": 1\r\n}\r\n```',
  request: {
    headers: z.object({
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
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
    }),
    body: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .object({
              FieldId: z
                .int()
                .openapi({
                  description: 'Specification ID associated with this specification value.',
                  example: 193,
                  title: 'FieldId',
                }),
              IsActive: z
                .boolean()
                .exactOptional()
                .openapi({
                  description: 'Enable (`true`) or disable (`false`) specification value.',
                  example: true,
                  title: 'IsActive',
                }),
              Name: z
                .string()
                .openapi({
                  description: 'Specification Value name.',
                  example: 'Metal',
                  title: 'Name',
                }),
              Position: z
                .int()
                .exactOptional()
                .openapi({
                  description:
                    'The position of the value to be shown on product registration page (`/admin/Site/Produto.aspx`).',
                  example: 1,
                  title: 'Position',
                }),
              Text: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({ deprecated: true, description: 'Specification Value Text.' }),
            })
            .openapi({ required: ['FieldId', 'Name'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              FieldId: z
                .int()
                .exactOptional()
                .openapi({
                  description: 'Specification ID associated with this specification value.',
                }),
              FieldValueId: z
                .int()
                .exactOptional()
                .openapi({ description: 'Specification value ID.' }),
              IsActive: z
                .boolean()
                .exactOptional()
                .openapi({
                  description: 'Enable (`true`) or disable (`false`) specification value.',
                }),
              Name: z
                .string()
                .exactOptional()
                .openapi({ description: 'Specification Value name.' }),
              Position: z
                .int()
                .exactOptional()
                .openapi({
                  description:
                    'The position of the value to be shown on product registration page (`/admin/Site/Produto.aspx`).',
                }),
              Text: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({ deprecated: true, description: 'Specification Value Text.' }),
            })
            .openapi({ title: '', required: [] }),
          example: {
            FieldId: 193,
            FieldValueId: 360,
            IsActive: true,
            Name: 'Metal',
            Position: 1,
            Text: null,
          },
        },
      },
    },
  },
})

export const getApiCatalogPvtSpecificationvalueSpecificationValueIdRoute = createRoute({
  method: 'get',
  path: '/api/catalog/pvt/specificationvalue/{specificationValueId}',
  tags: ['Specification Value'],
  summary: 'Get Specification Value',
  description:
    'Retrieves general information about a Specification Value. \r\n## Response body example\r\n\r\n```json\r\n{\r\n    "FieldValueId": 143,\r\n    "FieldId": 34,\r\n    "Name": "Cotton",\r\n    "Text": "Cotton fibers",\r\n    "IsActive": true,\r\n    "Position": 100\r\n}\r\n```',
  request: {
    headers: z.object({
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
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      specificationValueId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'Specification Value’s unique numerical identifier.',
            in: 'path',
            name: 'specificationValueId',
            required: true,
            schema: { example: 143, type: 'integer' },
          },
          example: 143,
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
              FieldId: z.int().exactOptional().openapi({ description: 'Specification Field ID.' }),
              FieldValueId: z
                .int32()
                .exactOptional()
                .openapi({ description: 'Specification Field Value ID.' }),
              IsActive: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Defines if the Specification Field Value is active (`true`) or inactive (`false`).',
                }),
              Name: z
                .string()
                .exactOptional()
                .openapi({ description: 'Specification Field Value Name.' }),
              Position: z
                .int32()
                .exactOptional()
                .openapi({ description: 'Specification Field Value Position.' }),
              Text: z
                .string()
                .exactOptional()
                .openapi({ description: 'Specification Field Value Description.' }),
            })
            .openapi({ title: '', required: [] }),
          example: {
            FieldId: 34,
            FieldValueId: 143,
            IsActive: true,
            Name: 'Cotton',
            Position: 100,
            Text: 'Cotton fibers',
          },
        },
      },
    },
  },
})

export const putApiCatalogPvtSpecificationvalueSpecificationValueIdRoute = createRoute({
  method: 'put',
  path: '/api/catalog/pvt/specificationvalue/{specificationValueId}',
  tags: ['Specification Value'],
  summary: 'Update Specification Value',
  description:
    'Updates a new Specification Value for a Category. \r\n## Request body example\r\n\r\n```json\r\n{\r\n    "FieldId": 193,\r\n    "Name": "Metal",\r\n    "Text": null,\r\n    "IsActive": true,\r\n    "Position": 1\r\n  }\r\n```\r\n\r\n## Response body example\r\n\r\n```json\r\n{\r\n  "FieldValueId": 360,\r\n  "FieldId": 193,\r\n  "Name": "Metal",\r\n  "Text": null,\r\n  "IsActive": true,\r\n  "Position": 1\r\n}\r\n```',
  request: {
    headers: z.object({
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
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      specificationValueId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: ' Specification Value’s unique numerical identifier.',
            in: 'path',
            name: 'specificationValueId',
            required: true,
            schema: { example: 1, type: 'integer' },
          },
          example: 1,
        }),
    }),
    body: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .object({
              FieldId: z
                .int()
                .openapi({
                  description: 'Specification ID associated with this specification value.',
                  example: 193,
                  title: 'FieldId',
                }),
              IsActive: z
                .boolean()
                .exactOptional()
                .openapi({
                  description: 'Enable (`true`) or disable (`false`) specification value.',
                  example: true,
                  title: 'IsActive',
                }),
              Name: z
                .string()
                .openapi({
                  description: 'Specification Value name.',
                  example: 'Metal',
                  title: 'Name',
                }),
              Position: z
                .int()
                .exactOptional()
                .openapi({
                  description:
                    'The position of the value to be shown on product registration page (`/admin/Site/Produto.aspx`).',
                  example: 1,
                  title: 'Position',
                }),
              Text: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({ deprecated: true, description: 'Specification Value Text.' }),
            })
            .openapi({ required: ['FieldId', 'Name'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              FieldId: z
                .int()
                .exactOptional()
                .openapi({
                  description: 'Specification ID associated with this specification value.',
                }),
              FieldValueId: z
                .int()
                .exactOptional()
                .openapi({ description: 'Specification value ID.' }),
              IsActive: z
                .boolean()
                .exactOptional()
                .openapi({
                  description: 'Enable (`true`) or disable (`false`) specification value.',
                }),
              Name: z
                .string()
                .exactOptional()
                .openapi({ description: 'Specification Value name.' }),
              Position: z
                .int()
                .exactOptional()
                .openapi({
                  description:
                    'The position of the value to be shown on product registration page (`/admin/Site/Produto.aspx`).',
                }),
              Text: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({ deprecated: true, description: 'Specification Value Text.' }),
            })
            .openapi({ title: '', required: [] }),
          example: {
            FieldId: 193,
            FieldValueId: 360,
            IsActive: true,
            Name: 'Metal',
            Position: 1,
            Text: null,
          },
        },
      },
    },
  },
})

export const getApiCatalogPvtStockkeepingunitRoute = createRoute({
  method: 'get',
  path: '/api/catalog/pvt/stockkeepingunit',
  tags: ['SKU'],
  summary: 'Get SKU by RefId',
  description:
    'Retrieves information about a specific SKU by its `RefId`. \r\n\r\n### Response body example\r\n\r\n```json\r\n{\r\n    "Id": 1,\r\n    "ProductId": 1,\r\n    "IsActive": true,\r\n    "Name": "Royal Canin Feline Urinary 500g",\r\n    "RefId": "0001",\r\n    "PackagedHeight": 6.0000,\r\n    "PackagedLength": 24.0000,\r\n    "PackagedWidth": 14.0000,\r\n    "PackagedWeightKg": 550.0000,\r\n    "Height": null,\r\n    "Length": null,\r\n    "Width": null,\r\n    "WeightKg": null,\r\n    "CubicWeight": 1.0000,\r\n    "IsKit": false,\r\n    "CreationDate": "2020-03-12T15:42:00",\r\n    "RewardValue": null,\r\n    "EstimatedDateArrival": null,\r\n    "ManufacturerCode": "",\r\n    "CommercialConditionId": 1,\r\n    "MeasurementUnit": "un",\r\n    "UnitMultiplier": 1.0000,\r\n    "ModalType": null,\r\n    "KitItensSellApart": false,\r\n    "Videos": null\r\n}\r\n```',
  request: {
    headers: z.object({
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
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
    }),
    query: z.object({
      refId: z
        .string()
        .openapi({
          param: {
            description: 'SKU Reference ID.',
            in: 'query',
            name: 'refId',
            required: true,
            schema: { example: '1', type: 'string' },
          },
          example: '1',
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
              ActivateIfPossible: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'When set to `true`, this attribute will automatically update the SKU as active once associated with an image or an active component.',
                }),
              CommercialConditionId: z
                .int()
                .exactOptional()
                .openapi({ description: 'Commercial Condition ID.' }),
              CreationDate: z
                .string()
                .exactOptional()
                .openapi({ description: 'SKU Creation Date.' }),
              CubicWeight: z
                .number()
                .exactOptional()
                .openapi({
                  description:
                    '[Cubic Weight](https://help.vtex.com/en/tutorial/understanding-the-cubic-weight-factor--tutorials_128).',
                }),
              EstimatedDateArrival: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({
                  description:
                    'SKU estimated arrival date in [ISO-8601](https://en.wikipedia.org/wiki/ISO_8601) format, when the product is on pre-sale. You must take into consideration both the launch date and the freight calculation for the arrival date.',
                }),
              Height: z.number().exactOptional().openapi({ description: 'SKU Height.' }),
              Id: z.int().exactOptional().openapi({ description: 'SKU ID.' }),
              IsActive: z
                .boolean()
                .exactOptional()
                .openapi({
                  description: 'Defines if the SKU is active (`true`) or not (`false`).',
                }),
              IsKit: z
                .boolean()
                .exactOptional()
                .openapi({ description: 'Shows if the SKU is a Kit (`true`) or not (`false`).' }),
              KitItensSellApart: z
                .boolean()
                .exactOptional()
                .openapi({ description: 'Defines if Kit components can be sold apart.' }),
              Length: z.number().exactOptional().openapi({ description: 'SKU Length.' }),
              ManufacturerCode: z
                .string()
                .exactOptional()
                .openapi({ description: 'Manufacturer Code.' }),
              MeasurementUnit: z
                .string()
                .exactOptional()
                .openapi({ description: 'Measurement Unit.' }),
              ModalType: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({
                  description:
                    'Links an unusual type of SKU to a carrier specialized in delivering it. This field should be filled in with the name of the modal (e.g. "Chemicals" or "Refrigerated products"). To learn more about this feature, read our articles [How the modal works](https://help.vtex.com/en/tutorial/how-does-the-modal-work--tutorials_125) and [Setting up modal for carriers](https://help.vtex.com/en/tutorial/configure-modal--3jhLqxuPhuiq24UoykCcqy).',
                }),
              Name: z.string().exactOptional().openapi({ description: 'SKU Name.' }),
              PackagedHeight: z
                .number()
                .exactOptional()
                .openapi({ description: 'Packaged Height.' }),
              PackagedLength: z
                .number()
                .exactOptional()
                .openapi({ description: 'Packaged Length.' }),
              PackagedWeightKg: z
                .number()
                .exactOptional()
                .openapi({
                  description:
                    'Packaged Weight, in the measurement [configured in the store](https://help.vtex.com/en/tutorial/filling-in-system-settings--tutorials_269), which by default is in grams.',
                }),
              PackagedWidth: z.number().exactOptional().openapi({ description: 'Packaged Width.' }),
              ProductId: z.int().exactOptional().openapi({ description: 'Product ID.' }),
              RefId: z.string().exactOptional().openapi({ description: 'SKU RefId.' }),
              RewardValue: z
                .number()
                .exactOptional()
                .openapi({
                  description: 'Defines the value of the reward for clients who purchase the SKU.',
                }),
              UnitMultiplier: z
                .number()
                .exactOptional()
                .openapi({
                  description:
                    'This is the multiple number of SKU. If the Multiplier is 5.0000, the product can be added in multiple quantities of 5, 10, 15, 20, onward.',
                }),
              Videos: z.string().nullable().exactOptional().openapi({ description: 'Video URLs.' }),
              WeightKg: z
                .number()
                .exactOptional()
                .openapi({
                  description:
                    'Weight of the SKU in the measurement [configured in the store](https://help.vtex.com/en/tutorial/filling-in-system-settings--tutorials_269), which by default is in grams.',
                }),
              Width: z.number().exactOptional().openapi({ description: 'SKU Width.' }),
            })
            .openapi({ required: [] }),
          example: {
            CommercialConditionId: 1,
            CreationDate: '2020-03-12T15:42:00',
            CubicWeight: 1,
            EstimatedDateArrival: null,
            Height: 0,
            Id: 1,
            IsActive: true,
            IsKit: false,
            KitItensSellApart: false,
            Length: 0,
            ManufacturerCode: '',
            MeasurementUnit: 'un',
            ModalType: null,
            Name: 'Royal Canin Feline Urinary 500g',
            PackagedHeight: 6,
            PackagedLength: 24,
            PackagedWeightKg: 550,
            PackagedWidth: 14,
            ProductId: 1,
            RefId: '0001',
            RewardValue: 0,
            UnitMultiplier: 1,
            Videos: null,
            WeightKg: 0,
            Width: 0,
          },
        },
      },
    },
  },
})

export const postApiCatalogPvtStockkeepingunitRoute = createRoute({
  method: 'post',
  path: '/api/catalog/pvt/stockkeepingunit',
  tags: ['SKU'],
  summary: 'Create SKU',
  description:
    '\r\n\r\nCreates a new SKU.\r\n\r\nIf there is a need to create a new SKU with a specific custom ID, specify the `Id` (integer) in the request. Otherwise, VTEX will generate the ID automatically.\r\n\r\n### Request body example (custom ID)\r\n\r\n```json\r\n{\r\n   "Id": 1, \r\n   "ProductId": 310117069,\r\n   "IsActive": true,\r\n   "ActivateIfPossible": true,\r\n   "Name": "sku test",\r\n   "RefId": "125478",\r\n   "Ean": "8949461894984",\r\n   "PackagedHeight": 10,\r\n   "PackagedLength": 10,\r\n   "PackagedWidth": 10,\r\n   "PackagedWeightKg": 10,\r\n   "Height": null,\r\n   "Length": null,\r\n   "Width": null,\r\n   "WeightKg": null,\r\n   "CubicWeight": 0.1667,\r\n   "IsKit": false,\r\n   "CreationDate": null,\r\n   "RewardValue": null,\r\n   "EstimatedDateArrival": null,\r\n   "ManufacturerCode": "123",\r\n   "CommercialConditionId": 1,\r\n   "MeasurementUnit": "un",\r\n   "UnitMultiplier": 2.0000,\r\n   "ModalType": null,\r\n   "KitItensSellApart": false,\r\n   "Videos": [ "https://www.youtube.com/" ]\r\n}\r\n``` \r\n\r\n### Request body example (automatically generated ID)\r\n\r\n```json\r\n{\r\n   "ProductId": 310117069,\r\n   "IsActive": true,\r\n   "ActivateIfPossible": true,\r\n   "Name": "sku test",\r\n   "RefId": "125478",\r\n   "Ean": "8949461894984",\r\n   "PackagedHeight": 10,\r\n   "PackagedLength": 10,\r\n   "PackagedWidth": 10,\r\n   "PackagedWeightKg": 10,\r\n   "Height": null,\r\n   "Length": null,\r\n   "Width": null,\r\n   "WeightKg": null,\r\n   "CubicWeight": 0.1667,\r\n   "IsKit": false,\r\n   "CreationDate": null,\r\n   "RewardValue": null,\r\n   "EstimatedDateArrival": null,\r\n   "ManufacturerCode": "123",\r\n   "CommercialConditionId": 1,\r\n   "MeasurementUnit": "un",\r\n   "UnitMultiplier": 2.0000,\r\n   "ModalType": null,\r\n   "KitItensSellApart": false,\r\n   "Videos": [ "https://www.youtube.com/" ]\r\n}\r\n``` \r\n\r\n### Response body example\r\n\r\n```json\r\n{\r\n   "Id":1,\r\n   "ProductId": 310117069,\r\n   "IsActive": true,\r\n   "ActivateIfPossible": true,\r\n   "Name": "sku test",\r\n   "RefId": "125478",\r\n   "Ean": "8949461894984",\r\n   "PackagedHeight": 10,\r\n   "PackagedLength": 10,\r\n   "PackagedWidth": 10,\r\n   "PackagedWeightKg": 10,\r\n   "Height": null,\r\n   "Length": null,\r\n   "Width": null,\r\n   "WeightKg": null,\r\n   "CubicWeight": 0.1667,\r\n   "IsKit": false,\r\n   "CreationDate": null,\r\n   "RewardValue": null,\r\n   "EstimatedDateArrival": null,\r\n   "ManufacturerCode": "123",\r\n   "CommercialConditionId": 1,\r\n   "MeasurementUnit": "un",\r\n   "UnitMultiplier": 2.0000,\r\n   "ModalType": null,\r\n   "KitItensSellApart": false,\r\n   "Videos": [ "https://www.youtube.com/" ]\r\n}\r\n```',
  request: {
    headers: z.object({
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
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              ActivateIfPossible: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'When set to `true`, this attribute will automatically update the SKU as active once associated with an image or an active component.',
                  example: true,
                  title: 'ActivateIfPossible',
                }),
              CommercialConditionId: z
                .int()
                .exactOptional()
                .openapi({
                  description:
                    'Used to define SKU specific promotions or installment rules. In case of no specific condition, use `1` (default value). This field does not accept `0`. Find out more by reading [Registering a commercial condition](https://help.vtex.com/tutorial/registering-a-commercial-condition--tutorials_445).',
                  example: 1,
                  title: 'CommercialConditionId',
                }),
              CreationDate: z
                .string()
                .exactOptional()
                .openapi({
                  description: "Date and time of the SKU's creation.",
                  example: '2020-01-25T15:51:29.2614605',
                  title: 'CreationDate',
                }),
              CubicWeight: z
                .number()
                .exactOptional()
                .openapi({
                  description:
                    '[Cubic weight](https://help.vtex.com/en/tutorial/understanding-the-cubic-weight-factor--tutorials_128).',
                  example: 0.1667,
                  title: 'CubicWeight',
                }),
              Ean: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'EAN code. Required only if `RefId` is not informed, but can be used alongside `RefId` as well.',
                  example: '8949461894984',
                  title: 'Ean',
                }),
              EstimatedDateArrival: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({
                  description:
                    'To add the product as pre-sale, enter the product estimated arrival date in [ISO-8601](https://en.wikipedia.org/wiki/ISO_8601) format. You must take into consideration both the launch date and the freight calculation for the arrival date.',
                  example: null,
                  title: 'EstimatedDateArrival',
                }),
              Height: z
                .number()
                .exactOptional()
                .openapi({ description: 'SKU real height.', example: 1, title: 'Height' }),
              Id: z
                .int()
                .exactOptional()
                .openapi({
                  description:
                    'SKU unique identifier. If not informed, it will be automatically generated by VTEX.',
                  example: 1,
                  title: 'Id',
                }),
              IsActive: z
                .boolean()
                .exactOptional()
                .openapi({
                  description: 'Shows if the SKU is active (`true`) or not (`false`).',
                  example: false,
                  title: 'IsActive',
                }),
              IsKit: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Flag to set whether the product SKU is made up of one or more SKUs, thereby becoming a bundle. Must be enabled if you are adding a bundle. Once activated, the flag cannot be reverted.',
                  example: false,
                  title: 'IsKit',
                }),
              KitItensSellApart: z
                .boolean()
                .exactOptional()
                .openapi({
                  description: 'Defines if Kit components can be sold apart.',
                  example: false,
                  title: 'KitItensSellApart',
                }),
              Length: z
                .number()
                .exactOptional()
                .openapi({ description: 'SKU real length.', example: 1, title: 'Length' }),
              ManufacturerCode: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Provided by the manufacturers to identify their product. This field should be filled in if the product has a specific manufacturer’s code.',
                  example: '123',
                  title: 'ManufacturerCode',
                }),
              MeasurementUnit: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    "Used only in cases when you need to convert the unit of measure for sale. If a product is sold in boxes for example, but customers want to buy per square meter (m²). In common cases, use `'un'`.",
                  example: 'un',
                  title: 'MeasurementUnit',
                }),
              ModalType: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({
                  description:
                    'Links an unusual type of SKU to a carrier specialized in delivering it. This field should be filled in with the name of the modal (e.g. "Chemicals" or "Refrigerated products"). To learn more about this feature, read our articles [How the modal works](https://help.vtex.com/en/tutorial/how-does-the-modal-work--tutorials_125) and [Setting up modal for carriers](https://help.vtex.com/en/tutorial/configure-modal--3jhLqxuPhuiq24UoykCcqy).',
                  example: null,
                  title: 'ModalType',
                }),
              Name: z
                .string()
                .openapi({
                  description:
                    'SKU name, meaning the variation of the previously added product. For example: **Product** - _Fridge_, **SKU** - _110V_.',
                  example: 'Size 10',
                  title: 'Name',
                }),
              PackagedHeight: z
                .number()
                .openapi({
                  description: 'Height used for shipping calculation.',
                  example: 10,
                  title: 'PackagedHeight',
                }),
              PackagedLength: z
                .number()
                .openapi({
                  description: 'Length used for shipping calculation.',
                  example: 10,
                  title: 'PackagedLength',
                }),
              PackagedWeightKg: z
                .int()
                .openapi({
                  description:
                    'Weight used for shipping calculation, in the measurement [configured in the store](https://help.vtex.com/en/tutorial/filling-in-system-settings--tutorials_269), which by default is in grams.',
                  example: 10,
                  title: 'PackagedWeightKg',
                }),
              PackagedWidth: z
                .number()
                .openapi({
                  description: 'Width used for shipping calculation.',
                  example: 10,
                  title: 'PackagedWidth',
                }),
              ProductId: z
                .int()
                .openapi({
                  description: 'ID of the Product associated with this SKU.',
                  example: 42,
                  title: 'ProductId',
                }),
              RefId: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Reference code used internally for organizational purposes. Must be unique. Required only if `Ean` is not informed, but can be used alongside `Ean` as well.',
                  example: 'B096QW8Y8Z',
                  title: 'RefId',
                }),
              RewardValue: z
                .number()
                .exactOptional()
                .openapi({
                  description:
                    'Credit that the customer receives when finalizing an order of one specific SKU unit. By filling this field out with `1`, the customer gets U$ 1 credit on the site.',
                  example: 1,
                  title: 'RewardValue',
                }),
              UnitMultiplier: z
                .number()
                .exactOptional()
                .openapi({
                  description:
                    'This is the multiple number of SKU. If the Multiplier is 5.0000, the product can be added in multiple quantities of 5, 10, 15, 20, onward.',
                  example: 2,
                  title: 'UnitMultiplier',
                }),
              Videos: z
                .array(
                  z
                    .string()
                    .openapi({
                      description: 'URL',
                      example: 'https://www.youtube.com/',
                      title: '',
                    }),
                )
                .exactOptional()
                .openapi({
                  description: 'Videos URLs',
                  example: ['https://www.youtube.com/'],
                  title: 'Videos',
                }),
              WeightKg: z
                .number()
                .exactOptional()
                .openapi({
                  description:
                    'Weight of the SKU in the measurement [configured in the store](https://help.vtex.com/en/tutorial/filling-in-system-settings--tutorials_269), which by default is in grams.',
                  example: 1,
                  title: 'WeightKg',
                }),
              Width: z
                .number()
                .exactOptional()
                .openapi({ description: 'SKU real width.', example: 1, title: 'Width' }),
            })
            .openapi({
              required: [
                'ProductId',
                'Name',
                'PackagedHeight',
                'PackagedLength',
                'PackagedWidth',
                'PackagedWeightKg',
              ],
            }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              ActivateIfPossible: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'When set to `true`, this attribute will automatically update the SKU as active once associated with an image or an active component.',
                  title: 'ActivateIfPossible',
                }),
              CommercialConditionId: z
                .int()
                .exactOptional()
                .openapi({
                  description:
                    'Used to define SKU specific promotions or installment rules. In case of no specific condition, use `1` (default value). This field does not accept `0`. Find out more by reading [Registering a commercial condition](https://help.vtex.com/tutorial/registering-a-commercial-condition--tutorials_445).',
                  title: 'CommercialConditionId',
                }),
              CreationDate: z
                .string()
                .exactOptional()
                .openapi({
                  description: "Date and time of the SKU's creation.",
                  title: 'CreationDate',
                }),
              CubicWeight: z
                .number()
                .exactOptional()
                .openapi({
                  description:
                    '[Cubic weight](https://help.vtex.com/en/tutorial/understanding-the-cubic-weight-factor--tutorials_128).',
                  title: 'CubicWeight',
                }),
              Ean: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'EAN code. Required only if `RefId` is not informed, but can be used alongside `RefId` as well.',
                  title: 'Ean',
                }),
              EstimatedDateArrival: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({
                  description:
                    'SKU estimated arrival date in [ISO-8601](https://en.wikipedia.org/wiki/ISO_8601) format, when the product is on pre-sale. You must take into consideration both the launch date and the freight calculation for the arrival date.',
                  title: 'EstimatedDateArrival',
                }),
              Height: z
                .number()
                .exactOptional()
                .openapi({ description: 'SKU real height.', title: 'Height' }),
              Id: z.int().exactOptional().openapi({ description: 'SKU unique identifier.' }),
              IsActive: z
                .boolean()
                .exactOptional()
                .openapi({
                  description: 'Shows if the SKU is active (`true`) or not (`false`).',
                  title: 'IsActive',
                }),
              IsKit: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Flag to set whether the product SKU is made up of one or more SKUs, thereby becoming a bundle. Must be enabled if you are adding a bundle. Once activated, the flag cannot be reverted.',
                  title: 'IsKit',
                }),
              KitItensSellApart: z
                .boolean()
                .exactOptional()
                .openapi({
                  description: 'Defines if Kit components can be sold apart.',
                  title: 'KitItensSellApart',
                }),
              Length: z
                .number()
                .exactOptional()
                .openapi({ description: 'SKU real length.', title: 'Length' }),
              ManufacturerCode: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Provided by the manufacturers to identify their product. This field should be filled in if the product has a specific manufacturer’s code.',
                  title: 'ManufacturerCode',
                }),
              MeasurementUnit: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    "Used only in cases when you need to convert the unit of measure for sale. If a product is sold in boxes for example, but customers want to buy per square meter (m²). In common cases, use `'un'`.",
                  example: 'un',
                  title: 'MeasurementUnit',
                }),
              ModalType: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({
                  description:
                    'Links an unusual type of SKU to a carrier specialized in delivering it. This field should be filled in with the name of the modal (e.g. "Chemicals" or "Refrigerated products"). To learn more about this feature, read our articles [How the modal works](https://help.vtex.com/en/tutorial/how-does-the-modal-work--tutorials_125) and [Setting up modal for carriers](https://help.vtex.com/en/tutorial/configure-modal--3jhLqxuPhuiq24UoykCcqy).',
                  title: 'ModalType',
                }),
              Name: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'SKU name, meaning the variation of the previously added product. For example: **Product** - _Fridge_, **SKU** - _110V_.',
                  title: 'Name',
                }),
              PackagedHeight: z
                .number()
                .exactOptional()
                .openapi({
                  description: 'Height used for shipping calculation.',
                  title: 'PackagedHeight',
                }),
              PackagedLength: z
                .number()
                .exactOptional()
                .openapi({
                  description: 'Length used for shipping calculation.',
                  title: 'PackagedLength',
                }),
              PackagedWeightKg: z
                .int()
                .exactOptional()
                .openapi({
                  description:
                    'Weight used for shipping calculation, in the measurement [configured in the store](https://help.vtex.com/en/tutorial/filling-in-system-settings--tutorials_269), which by default is in grams.',
                  title: 'PackagedWeightKg',
                }),
              PackagedWidth: z
                .number()
                .exactOptional()
                .openapi({
                  description: 'Width used for shipping calculation.',
                  title: 'PackagedWidth',
                }),
              ProductId: z
                .int()
                .exactOptional()
                .openapi({
                  description: 'ID of the Product associated with this SKU.',
                  title: 'ProductId',
                }),
              RefId: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Reference code used internally for organizational purposes. Must be unique. Required only if `Ean` is not informed, but can be used alongside `Ean` as well.',
                  title: 'RefId',
                }),
              RewardValue: z
                .number()
                .exactOptional()
                .openapi({
                  description:
                    'Credit that the customer receives when finalizing an order of one specific SKU unit. By filling this field out with `1`, the customer gets U$ 1 credit on the site.',
                  title: 'RewardValue',
                }),
              UnitMultiplier: z
                .number()
                .exactOptional()
                .openapi({
                  description:
                    'This is the multiple number of SKU. If the Multiplier is 5.0000, the product can be added in multiple quantities of 5, 10, 15, 20, onward.',
                  title: 'UnitMultiplier',
                }),
              Videos: z
                .array(z.string().openapi({ description: 'Video URL.', title: '' }))
                .exactOptional()
                .openapi({ description: 'Videos URLs.', title: 'Videos' }),
              WeightKg: z
                .number()
                .exactOptional()
                .openapi({
                  description:
                    'Weight of the SKU in the measurement [configured in the store](https://help.vtex.com/en/tutorial/filling-in-system-settings--tutorials_269), which by default is in grams.',
                  title: 'WeightKg',
                }),
              Width: z
                .number()
                .exactOptional()
                .openapi({ description: 'SKU real width.', title: 'Width' }),
            })
            .openapi({ required: [] }),
          example: {
            ActivateIfPossible: false,
            CommercialConditionId: 1,
            CreationDate: '2020-01-25T15:51:29.2614605',
            CubicWeight: 0.1667,
            Ean: '8949461894984',
            EstimatedDateArrival: null,
            Height: 1,
            Id: 70,
            IsActive: false,
            IsKit: false,
            KitItensSellApart: false,
            Length: 1,
            ManufacturerCode: '',
            MeasurementUnit: 'un',
            ModalType: null,
            Name: 'Size 10',
            PackagedHeight: 10,
            PackagedLength: 10,
            PackagedWeightKg: 10,
            PackagedWidth: 10,
            ProductId: 42,
            RefId: 'B096QW8Y8Z',
            RewardValue: 0,
            UnitMultiplier: 2,
            Videos: ['https://www.youtube.com/'],
            WeightKg: 1,
            Width: 1,
          },
        },
      },
    },
  },
})

export const putApiCatalogPvtStockkeepingunitCopySkuIdfromSkuIdtoFileIndexRoute = createRoute({
  method: 'put',
  path: '/api/catalog/pvt/stockkeepingunit/copy/{skuIdfrom}/{skuIdto}/file/',
  tags: ['SKU File'],
  summary: 'Copy Files from an SKU to another SKU',
  description:
    'Copy all existing files from an SKU to another SKU. \r\n## Response body example\r\n\r\n```json\r\n[\r\n    {\r\n        "Id": 1964,\r\n        "ArchiveId": 155404,\r\n        "SkuId": 1,\r\n        "IsMain": true,\r\n        "Label": ""\r\n    },\r\n    {\r\n        "Id": 1965,\r\n        "ArchiveId": 155429,\r\n        "SkuId": 1,\r\n        "IsMain": false,\r\n        "Label": ""\r\n    }\r\n]\r\n```',
  request: {
    headers: z.object({
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
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      skuIdfrom: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: '__Origin__ SKU’s unique numerical identifier.',
            in: 'path',
            name: 'skuIdfrom',
            required: true,
            schema: { example: 1, type: 'integer' },
          },
          example: 1,
        }),
      skuIdto: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: '__Target__ SKU’s unique numerical identifier.',
            in: 'path',
            name: 'skuIdto',
            required: true,
            schema: { example: 2, type: 'integer' },
          },
          example: 2,
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .array(
              z
                .object({
                  ArchiveId: z
                    .int()
                    .exactOptional()
                    .openapi({
                      description: 'Unique identifier of the image file.',
                      example: 155404,
                    }),
                  Id: z
                    .int()
                    .exactOptional()
                    .openapi({
                      description: 'Unique identifier of the association of the Image to the SKU.',
                      example: 1,
                      title: 'Id',
                    }),
                  IsMain: z
                    .boolean()
                    .exactOptional()
                    .openapi({
                      description: 'Defines if the Image is the Main Image of the SKU.',
                      example: true,
                      title: 'IsMain',
                    }),
                  Label: z
                    .string()
                    .nullable()
                    .exactOptional()
                    .openapi({ description: 'Image label.', example: 'cat', title: 'Label' }),
                  SkuId: z
                    .int()
                    .exactOptional()
                    .openapi({
                      description: 'Unique identifier of the SKU.',
                      example: 1,
                      title: 'SkuId',
                    }),
                })
                .openapi({
                  description: "Object containing each SKU File's information.",
                  required: [],
                }),
            )
            .openapi({
              description:
                "Array with objects containing information about each of the target SKU's Files.",
              example: [
                { ArchiveId: 155404, Id: 1964, IsMain: true, Label: '', SkuId: 1 },
                { ArchiveId: 155429, Id: 1965, IsMain: false, Label: '', SkuId: 1 },
              ],
            }),
        },
      },
    },
  },
})

export const deleteApiCatalogPvtStockkeepingunitDisassociateSkuIdFileSkuFileIdRoute = createRoute({
  method: 'delete',
  path: '/api/catalog/pvt/stockkeepingunit/disassociate/{skuId}/file/{skuFileId}',
  tags: ['SKU File'],
  summary: 'Disassociate SKU File',
  description: 'Disassociates an SKU File from an SKU.',
  request: {
    headers: z.object({
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
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      skuId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'SKU’s unique numerical identifier.',
            in: 'path',
            name: 'skuId',
            required: true,
            schema: { example: 1, type: 'integer' },
          },
          example: 1,
        }),
      skuFileId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description:
              'ID of the association of the SKU and the image, which can be obtained by placing a request to the [Get SKU File](https://developers.vtex.com/vtex-rest-api/reference/catalog-api-get-sku-file) endpoint and copying the `Id` field.',
            in: 'path',
            name: 'skuFileId',
            required: true,
            schema: { example: 32, type: 'integer' },
          },
          example: 32,
        }),
    }),
  },
  responses: { 200: { description: 'OK' } },
})

export const getApiCatalogPvtStockkeepingunitSkuIdRoute = createRoute({
  method: 'get',
  path: '/api/catalog/pvt/stockkeepingunit/{skuId}',
  tags: ['SKU'],
  summary: 'Get SKU',
  description:
    'Retrieves a specific SKU by its ID.\r\n\r\n### Response body example\r\n\r\n```json\r\n{\r\n    "Id": 1,\r\n    "ProductId": 1,\r\n    "IsActive": true,\r\n    "ActivateIfPossible": true,\r\n    "Name": "Ração Royal Canin Feline Urinary 500g",\r\n    "RefId": "0001",\r\n    "PackagedHeight": 6.5000,\r\n    "PackagedLength": 24.0000,\r\n    "PackagedWidth": 14.0000,\r\n    "PackagedWeightKg": 550.0000,\r\n    "Height": 2.2000,\r\n    "Length": 4.4000,\r\n    "Width": 3.3000,\r\n    "WeightKg": 1.1000,\r\n    "CubicWeight": 0.4550,\r\n    "IsKit": false,\r\n    "CreationDate": "2021-06-08T15:25:00",\r\n    "RewardValue": null,\r\n    "EstimatedDateArrival": null,\r\n    "ManufacturerCode": "",\r\n    "CommercialConditionId": 1,\r\n    "MeasurementUnit": "un",\r\n    "UnitMultiplier": 300.0000,\r\n    "ModalType": null,\r\n    "KitItensSellApart": false,\r\n    "Videos": [\r\n        "www.google.com"\r\n    ]\r\n}\r\n```  \r\n> 📘 Onboarding guide \r\n>\r\n> Check the new [Catalog onboarding guide](https://developers.vtex.com/vtex-rest-api/docs/catalog-overview). We created this guide to improve the onboarding experience for developers at VTEX. It assembles all documentation on our Developer Portal about Catalog and is organized by focusing on the developer\'s journey.',
  operationId: 'Sku',
  request: {
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
              'HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.',
            in: 'header',
            name: 'Accept',
            required: true,
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      skuId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'SKU unique identifier number.',
            in: 'path',
            name: 'skuId',
            required: true,
            schema: { example: 1, type: 'integer' },
            style: 'simple',
          },
          example: 1,
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
              ActivateIfPossible: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'When set to `true`, this attribute will automatically update the SKU as active once associated with an image or an active component.',
                  title: 'ActivateIfPossible',
                }),
              CommercialConditionId: z
                .int()
                .exactOptional()
                .openapi({
                  description:
                    'Used to define SKU specific promotions or installment rules. In case of no specific condition, use `1` (default value). This field does not accept `0`. Find out more by reading [Registering a commercial condition](https://help.vtex.com/tutorial/registering-a-commercial-condition--tutorials_445).',
                  title: 'CommercialConditionId',
                }),
              CreationDate: z
                .string()
                .exactOptional()
                .openapi({
                  description: "Date and time of the SKU's creation.",
                  title: 'CreationDate',
                }),
              CubicWeight: z
                .number()
                .exactOptional()
                .openapi({
                  description:
                    '[Cubic weight](https://help.vtex.com/en/tutorial/understanding-the-cubic-weight-factor--tutorials_128).',
                  title: 'CubicWeight',
                }),
              EstimatedDateArrival: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({
                  description:
                    'SKU estimated arrival date in [ISO-8601](https://en.wikipedia.org/wiki/ISO_8601) format, when the product is on pre-sale. You must take into consideration both the launch date and the freight calculation for the arrival date.',
                  title: 'EstimatedDateArrival',
                }),
              Height: z
                .number()
                .exactOptional()
                .openapi({ description: 'SKU real height.', title: 'Height' }),
              Id: z.int().exactOptional().openapi({ description: 'SKU unique identifier.' }),
              IsActive: z
                .boolean()
                .exactOptional()
                .openapi({
                  description: 'Shows if the SKU is active (`true`) or not (`false`).',
                  title: 'IsActive',
                }),
              IsKit: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Flag to set whether the product SKU is made up of one or more SKUs, thereby becoming a bundle. Must be enabled if you are adding a bundle. Once activated, the flag cannot be reverted.',
                  title: 'IsKit',
                }),
              KitItensSellApart: z
                .boolean()
                .exactOptional()
                .openapi({
                  description: 'Defines if Kit components can be sold apart.',
                  title: 'KitItensSellApart',
                }),
              Length: z
                .number()
                .exactOptional()
                .openapi({ description: 'SKU real length.', title: 'Length' }),
              ManufacturerCode: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Provided by the manufacturers to identify their product. This field should be filled in if the product has a specific manufacturer’s code.',
                  title: 'ManufacturerCode',
                }),
              MeasurementUnit: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    "Used only in cases when you need to convert the unit of measure for sale. If a product is sold in boxes for example, but customers want to buy per square meter (m²). In common cases, use `'un'`.",
                  example: 'un',
                  title: 'MeasurementUnit',
                }),
              ModalType: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({
                  description:
                    'Links an unusual type of SKU to a carrier specialized in delivering it. This field should be filled in with the name of the modal (e.g. "Chemicals" or "Refrigerated products"). To learn more about this feature, read our articles [How the modal works](https://help.vtex.com/en/tutorial/how-does-the-modal-work--tutorials_125) and [Setting up modal for carriers](https://help.vtex.com/en/tutorial/configure-modal--3jhLqxuPhuiq24UoykCcqy).',
                  title: 'ModalType',
                }),
              Name: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'SKU name, meaning the variation of the previously added product. For example: **Product** - _Fridge_, **SKU** - _110V_.',
                  title: 'Name',
                }),
              PackagedHeight: z
                .number()
                .exactOptional()
                .openapi({
                  description: 'Height used for shipping calculation.',
                  title: 'PackagedHeight',
                }),
              PackagedLength: z
                .number()
                .exactOptional()
                .openapi({
                  description: 'Length used for shipping calculation.',
                  title: 'PackagedLength',
                }),
              PackagedWeightKg: z
                .int()
                .exactOptional()
                .openapi({
                  description: 'Weight used for shipping calculation.',
                  title: 'PackagedWeightKg',
                }),
              PackagedWidth: z
                .number()
                .exactOptional()
                .openapi({
                  description: 'Width used for shipping calculation.',
                  title: 'PackagedWidth',
                }),
              ProductId: z
                .int()
                .exactOptional()
                .openapi({
                  description: 'ID of the Product associated with this SKU.',
                  title: 'ProductId',
                }),
              RefId: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Reference code used internally for organizational purposes. Must be unique. It is not required only if EAN code already exists. If not, this field must be provided.',
                  title: 'RefId',
                }),
              RewardValue: z
                .number()
                .exactOptional()
                .openapi({
                  description:
                    'Credit that the customer receives when finalizing an order of one specific SKU unit. By filling this field out with `1`, the customer gets U$ 1 credit on the site.',
                  title: 'RewardValue',
                }),
              UnitMultiplier: z
                .number()
                .exactOptional()
                .openapi({
                  description:
                    'This is the multiple number of SKU. If the Multiplier is 5.0000, the product can be added in multiple quantities of 5, 10, 15, 20, onward.',
                  title: 'UnitMultiplier',
                }),
              Videos: z
                .array(z.string().openapi({ description: 'Video URL.', title: '' }))
                .exactOptional()
                .openapi({ description: 'Videos URLs.', title: 'Videos' }),
              WeightKg: z
                .number()
                .exactOptional()
                .openapi({
                  description:
                    'Weight of the SKU in the measurement [configured in the store](https://help.vtex.com/en/tutorial/filling-in-system-settings--tutorials_269), which by default is in grams.',
                  title: 'WeightKg',
                }),
              Width: z
                .number()
                .exactOptional()
                .openapi({ description: 'SKU real width.', title: 'Width' }),
            })
            .openapi({ required: [] }),
          example: {
            ActivateIfPossible: false,
            CommercialConditionId: 1,
            CreationDate: '2020-01-25T15:51:29.2614605',
            CubicWeight: 0.1667,
            EstimatedDateArrival: null,
            Height: 1,
            Id: 70,
            IsActive: false,
            IsKit: false,
            KitItensSellApart: false,
            Length: 1,
            ManufacturerCode: '',
            MeasurementUnit: 'un',
            ModalType: null,
            Name: 'Size 10',
            PackagedHeight: 10,
            PackagedLength: 10,
            PackagedWeightKg: 10,
            PackagedWidth: 10,
            ProductId: 42,
            RefId: 'B096QW8Y8Z',
            RewardValue: 0,
            UnitMultiplier: 2,
            Videos: ['https://www.youtube.com/'],
            WeightKg: 1,
            Width: 1,
          },
        },
      },
    },
  },
})

export const putApiCatalogPvtStockkeepingunitSkuIdRoute = createRoute({
  method: 'put',
  path: '/api/catalog/pvt/stockkeepingunit/{skuId}',
  tags: ['SKU'],
  summary: 'Update SKU',
  description:
    'Updates an existing SKU. \r\n\r\n### Request body example\r\n\r\n```json\r\n{\r\n   "Id": 310118448,\r\n   "ProductId": 310117069,\r\n   "IsActive": true,\r\n   "ActivateIfPossible": true,\r\n   "Name": "sku test",\r\n   "RefId": "125478",\r\n   "PackagedHeight": 10,\r\n   "PackagedLength": 10,\r\n   "PackagedWidth": 10,\r\n   "PackagedWeightKg": 10,\r\n   "Height": null,\r\n   "Length": null,\r\n   "Width": null,\r\n   "WeightKg": null,\r\n   "CubicWeight": 0.1667,\r\n   "IsKit": false,\r\n   "CreationDate": null,\r\n   "RewardValue": null,\r\n   "EstimatedDateArrival": null,\r\n   "ManufacturerCode": "123",\r\n   "CommercialConditionId": 1,\r\n   "MeasurementUnit": "un",\r\n   "UnitMultiplier": 2.0000,\r\n   "ModalType": null,\r\n   "KitItensSellApart": false,\r\n   "Videos": [ "https://www.youtube.com/" ]\r\n}\r\n```\r\n\r\n### Response body example\r\n\r\n```json\r\n{\r\n    "Id": 310118449,\r\n    "ProductId": 1,\r\n    "IsActive": true,\r\n    "ActivateIfPossible": true,\r\n    "Name": "sku test",\r\n    "RefId": "1254789",\r\n    "PackagedHeight": 10.0,\r\n    "PackagedLength": 10.0,\r\n    "PackagedWidth": 10.0,\r\n    "PackagedWeightKg": 10.0,\r\n    "Height": null,\r\n    "Length": null,\r\n    "Width": null,\r\n    "WeightKg": null,\r\n    "CubicWeight": 0.1667,\r\n    "IsKit": false,\r\n    "CreationDate": "2020-04-22T12:12:47.5219561",\r\n    "RewardValue": null,\r\n    "EstimatedDateArrival": null,\r\n    "ManufacturerCode": "123",\r\n    "CommercialConditionId": 1,\r\n    "MeasurementUnit": "un",\r\n    "UnitMultiplier": 2.0000,\r\n    "ModalType": null,\r\n    "KitItensSellApart": false,\r\n    "Videos": [ "https://www.youtube.com/" ]\r\n}\r\n```',
  request: {
    headers: z.object({
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
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      skuId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'SKU’s unique numerical identifier.',
            in: 'path',
            name: 'skuId',
            required: true,
            schema: { example: 1, type: 'integer' },
          },
          example: 1,
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              ActivateIfPossible: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'When set to `true`, this attribute will automatically update the SKU as active once associated with an image or an active component.',
                  example: false,
                  title: 'ActivateIfPossible',
                }),
              CommercialConditionId: z
                .int()
                .exactOptional()
                .openapi({
                  description:
                    'Used to define SKU specific promotions or installment rules. In case of no specific condition, use `1` (default value). This field does not accept `0`. Find out more by reading [Registering a commercial condition](https://help.vtex.com/tutorial/registering-a-commercial-condition--tutorials_445).',
                  example: 1,
                  title: 'CommercialConditionId',
                }),
              CreationDate: z
                .string()
                .exactOptional()
                .openapi({
                  description: "Date and time of the SKU's creation.",
                  example: '2020-01-25T15:51:00',
                  title: 'CreationDate',
                }),
              CubicWeight: z
                .number()
                .exactOptional()
                .openapi({
                  description:
                    '[Cubic weight](https://help.vtex.com/en/tutorial/understanding-the-cubic-weight-factor--tutorials_128).',
                  example: 0.1667,
                  title: 'CubicWeight',
                }),
              EstimatedDateArrival: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({
                  description:
                    'To add the product as pre-sale, enter the product estimated arrival date in [ISO-8601](https://en.wikipedia.org/wiki/ISO_8601) format. You must take into consideration both the launch date and the freight calculation for the arrival date.',
                  example: null,
                  title: 'EstimatedDateArrival',
                }),
              Height: z
                .number()
                .exactOptional()
                .openapi({ description: 'SKU real height.', example: 1, title: 'Height' }),
              IsActive: z
                .boolean()
                .exactOptional()
                .openapi({
                  description: 'Shows if the SKU is active (`true`) or not (`false`).',
                  example: false,
                  title: 'IsActive',
                }),
              IsKit: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Flag to set whether the product SKU is made up of one or more SKUs, thereby becoming a bundle. Must be enabled if you are adding a bundle. Once activated, the flag cannot be reverted.',
                  example: false,
                  title: 'IsKit',
                }),
              KitItensSellApart: z
                .boolean()
                .exactOptional()
                .openapi({
                  description: 'Defines if Kit components can be sold apart.',
                  example: false,
                  title: 'KitItensSellApart',
                }),
              Length: z
                .number()
                .exactOptional()
                .openapi({ description: 'SKU real length.', example: 1, title: 'Length' }),
              ManufacturerCode: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Provided by the manufacturers to identify their product. This field should be filled in if the product has a specific manufacturer’s code.',
                  example: '123',
                  title: 'ManufacturerCode',
                }),
              MeasurementUnit: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    "Used only in cases when you need to convert the unit of measure for sale. If a product is sold in boxes for example, but customers want to buy per square meter (m²). In common cases, use `'un'`.",
                  example: 'un',
                  title: 'MeasurementUnit',
                }),
              ModalType: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({
                  description:
                    'Links an unusual type of SKU to a carrier specialized in delivering it. This field should be filled in with the name of the modal (e.g. "Chemicals" or "Refrigerated products"). To learn more about this feature, read our articles [How the modal works](https://help.vtex.com/en/tutorial/how-does-the-modal-work--tutorials_125) and [Setting up modal for carriers](https://help.vtex.com/en/tutorial/configure-modal--3jhLqxuPhuiq24UoykCcqy).',
                  example: null,
                  title: 'ModalType',
                }),
              Name: z
                .string()
                .openapi({
                  description:
                    'SKU name, meaning the variation of the previously added product. For example: **Product** - _Fridge_, **SKU** - _110V_.',
                  example: 'Size 10',
                  title: 'Name',
                }),
              PackagedHeight: z
                .number()
                .openapi({
                  description: 'Height used for shipping calculation.',
                  example: 10,
                  title: 'PackagedHeight',
                }),
              PackagedLength: z
                .number()
                .openapi({
                  description: 'Length used for shipping calculation.',
                  example: 10,
                  title: 'PackagedLength',
                }),
              PackagedWeightKg: z
                .int()
                .openapi({
                  description:
                    'Weight used for shipping calculation, in the measurement [configured in the store](https://help.vtex.com/en/tutorial/filling-in-system-settings--tutorials_269), which by default is in grams.',
                  example: 10,
                  title: 'PackagedWeightKg',
                }),
              PackagedWidth: z
                .number()
                .openapi({
                  description: 'Width used for shipping calculation.',
                  example: 10,
                  title: 'PackagedWidth',
                }),
              ProductId: z
                .int()
                .openapi({
                  description: 'ID of the Product associated with this SKU.',
                  example: 42,
                  title: 'ProductId',
                }),
              RefId: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Reference code used internally for organizational purposes. Must be unique. It is not required only if EAN code already exists. If not, this field must be provided.',
                  example: 'B096QW8Y8Z',
                  title: 'RefId',
                }),
              RewardValue: z
                .number()
                .exactOptional()
                .openapi({
                  description:
                    'Credit that the customer receives when finalizing an order of one specific SKU unit. By filling this field out with `1`, the customer gets U$ 1 credit on the site.',
                  example: 1,
                  title: 'RewardValue',
                }),
              UnitMultiplier: z
                .number()
                .exactOptional()
                .openapi({
                  description:
                    'This is the multiple number of SKU. If the Multiplier is 5.0000, the product can be added in multiple quantities of 5, 10, 15, 20, onward.',
                  example: 2,
                  title: 'UnitMultiplier',
                }),
              Videos: z
                .array(
                  z
                    .string()
                    .openapi({
                      description: 'URL',
                      example: 'https://www.youtube.com/',
                      title: '',
                    }),
                )
                .exactOptional()
                .openapi({
                  description: 'Videos URLs',
                  example: ['https://www.youtube.com/'],
                  title: 'Videos',
                }),
              WeightKg: z
                .number()
                .exactOptional()
                .openapi({
                  description:
                    'Weight of the SKU in the measurement [configured in the store](https://help.vtex.com/en/tutorial/filling-in-system-settings--tutorials_269), which by default is in grams.',
                  example: 1,
                  title: 'WeightKg',
                }),
              Width: z
                .number()
                .exactOptional()
                .openapi({ description: 'SKU real width.', example: 1, title: 'Width' }),
            })
            .openapi({
              required: [
                'ProductId',
                'Name',
                'PackagedHeight',
                'PackagedLength',
                'PackagedWidth',
                'PackagedWeightKg',
              ],
            }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              ActivateIfPossible: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'When set to `true`, this attribute will automatically update the SKU as active once associated with an image or an active component.',
                  title: 'ActivateIfPossible',
                }),
              CommercialConditionId: z
                .int()
                .exactOptional()
                .openapi({
                  description:
                    'Used to define SKU specific promotions or installment rules. In case of no specific condition, use `1` (default value). This field does not accept `0`. Find out more by reading [Registering a commercial condition](https://help.vtex.com/tutorial/registering-a-commercial-condition--tutorials_445).',
                  title: 'CommercialConditionId',
                }),
              CreationDate: z
                .string()
                .exactOptional()
                .openapi({ description: "Date and time of the SKU's creation." }),
              CubicWeight: z
                .number()
                .exactOptional()
                .openapi({
                  description:
                    '[Cubic weight](https://help.vtex.com/en/tutorial/understanding-the-cubic-weight-factor--tutorials_128).',
                  title: 'CubicWeight',
                }),
              EstimatedDateArrival: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({
                  description:
                    'SKU estimated arrival date in [ISO-8601](https://en.wikipedia.org/wiki/ISO_8601) format, when the product is on pre-sale. You must take into consideration both the launch date and the freight calculation for the arrival date.',
                  title: 'EstimatedDateArrival',
                }),
              Height: z
                .number()
                .exactOptional()
                .openapi({ description: 'SKU real height.', title: 'Height' }),
              Id: z.int().exactOptional().openapi({ description: 'SKU unique identifier.' }),
              IsActive: z
                .boolean()
                .exactOptional()
                .openapi({
                  description: 'Shows if the SKU is active (`true`) or not (`false`).',
                  title: 'IsActive',
                }),
              IsKit: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Flag to set whether the product SKU is made up of one or more SKUs, thereby becoming a bundle. Must be enabled if you are adding a bundle. Once activated, the flag cannot be reverted.',
                  title: 'IsKit',
                }),
              KitItensSellApart: z
                .boolean()
                .exactOptional()
                .openapi({
                  description: 'Defines if Kit components can be sold apart.',
                  title: 'KitItensSellApart',
                }),
              Length: z
                .number()
                .exactOptional()
                .openapi({ description: 'SKU real length.', title: 'Length' }),
              ManufacturerCode: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Provided by the manufacturers to identify their product. This field should be filled in if the product has a specific manufacturer’s code.',
                  title: 'ManufacturerCode',
                }),
              MeasurementUnit: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    "Used only in cases when you need to convert the unit of measure for sale. If a product is sold in boxes for example, but customers want to buy per square meter (m²). In common cases, use `'un'`.",
                  example: 'un',
                  title: 'MeasurementUnit',
                }),
              ModalType: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({
                  description:
                    'Links an unusual type of SKU to a carrier specialized in delivering it. This field should be filled in with the name of the modal (e.g. "Chemicals" or "Refrigerated products"). To learn more about this feature, read our articles [How the modal works](https://help.vtex.com/en/tutorial/how-does-the-modal-work--tutorials_125) and [Setting up modal for carriers](https://help.vtex.com/en/tutorial/configure-modal--3jhLqxuPhuiq24UoykCcqy).',
                  title: 'ModalType',
                }),
              Name: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'SKU name, meaning the variation of the previously added product. For example: **Product** - _Fridge_, **SKU** - _110V_.',
                  title: 'Name',
                }),
              PackagedHeight: z
                .number()
                .exactOptional()
                .openapi({
                  description: 'Height used for shipping calculation.',
                  title: 'PackagedHeight',
                }),
              PackagedLength: z
                .number()
                .exactOptional()
                .openapi({
                  description: 'Length used for shipping calculation.',
                  title: 'PackagedLength',
                }),
              PackagedWeightKg: z
                .int()
                .exactOptional()
                .openapi({
                  description:
                    'Weight used for shipping calculation, in the measurement [configured in the store](https://help.vtex.com/en/tutorial/filling-in-system-settings--tutorials_269), which by default is in grams.',
                  title: 'PackagedWeightKg',
                }),
              PackagedWidth: z
                .number()
                .exactOptional()
                .openapi({
                  description: 'Width used for shipping calculation.',
                  title: 'PackagedWidth',
                }),
              ProductId: z
                .int()
                .exactOptional()
                .openapi({
                  description: 'ID of the Product associated with this SKU.',
                  title: 'ProductId',
                }),
              RefId: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Reference code used internally for organizational purposes. Must be unique. It is not required only if EAN code already exists. If not, this field must be provided.',
                  title: 'RefId',
                }),
              RewardValue: z
                .number()
                .exactOptional()
                .openapi({
                  description:
                    'Credit that the customer receives when finalizing an order of one specific SKU unit. By filling this field out with `1`, the customer gets U$ 1 credit on the site.',
                  title: 'RewardValue',
                }),
              UnitMultiplier: z
                .number()
                .exactOptional()
                .openapi({
                  description:
                    'This is the multiple number of SKU. If the Multiplier is 5.0000, the product can be added in multiple quantities of 5, 10, 15, 20, onward.',
                  title: 'UnitMultiplier',
                }),
              Videos: z
                .array(z.string().openapi({ description: 'Video URL.', title: '' }))
                .exactOptional()
                .openapi({ description: 'Videos URLs.', title: 'Videos' }),
              WeightKg: z
                .number()
                .exactOptional()
                .openapi({
                  description:
                    'Weight of the SKU in the measurement [configured in the store](https://help.vtex.com/en/tutorial/filling-in-system-settings--tutorials_269), which by default is in grams.',
                  title: 'WeightKg',
                }),
              Width: z
                .number()
                .exactOptional()
                .openapi({ description: 'SKU real width.', title: 'Width' }),
            })
            .openapi({ required: [] }),
          example: {
            ActivateIfPossible: false,
            CommercialConditionId: 1,
            CreationDate: '2020-01-25T15:51:29.2614605',
            CubicWeight: 0.1667,
            EstimatedDateArrival: null,
            Height: 1,
            Id: 70,
            IsActive: false,
            IsKit: false,
            KitItensSellApart: false,
            Length: 1,
            ManufacturerCode: '',
            MeasurementUnit: 'un',
            ModalType: null,
            Name: 'Size 10',
            PackagedHeight: 10,
            PackagedLength: 10,
            PackagedWeightKg: 10,
            PackagedWidth: 10,
            ProductId: 42,
            RefId: 'B096QW8Y8Z',
            RewardValue: 0,
            UnitMultiplier: 2,
            Videos: ['https://www.youtube.com/'],
            WeightKg: 1,
            Width: 1,
          },
        },
      },
    },
  },
})

export const getApiCatalogPvtStockkeepingunitSkuIdAttachmentRoute = createRoute({
  method: 'get',
  path: '/api/catalog/pvt/stockkeepingunit/{skuId}/attachment',
  tags: ['SKU Attachment'],
  summary: 'Get SKU Attachments by SKU ID',
  description:
    'Retrieves existing SKU Attachments by SKU ID. \r\n## Response body example\r\n\r\n```json\r\n[\r\n    {\r\n        "Id": 97,\r\n        "AttachmentId": 1,\r\n        "SkuId": 1\r\n    }\r\n]\r\n```',
  request: {
    headers: z.object({
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
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      skuId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'SKU unique identifier.',
            in: 'path',
            name: 'skuId',
            required: true,
            schema: { example: 1, type: 'integer' },
          },
          example: 1,
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .array(
              z
                .object({
                  AttachmentId: z
                    .int()
                    .exactOptional()
                    .openapi({ description: 'Attachment ID.', example: 1 }),
                  Id: z
                    .int()
                    .exactOptional()
                    .openapi({
                      description: "Identifier of the SKU's association to the attachment.",
                      example: 31,
                    }),
                  SkuId: z
                    .int()
                    .exactOptional()
                    .openapi({ description: 'Unique identifier of the SKU.', example: 7 }),
                })
                .openapi({
                  description:
                    'Object containing information about the association between the SKU and the attachment.',
                  required: [],
                }),
            )
            .openapi({
              description:
                'Array of objects with information about the association between the attachments and the SKU.',
            }),
          example: [{ AttachmentId: 1, Id: 97, SkuId: 1 }],
        },
      },
    },
  },
})

export const getApiCatalogPvtStockkeepingunitSkuIdComplementRoute = createRoute({
  method: 'get',
  path: '/api/catalog/pvt/stockkeepingunit/{skuId}/complement',
  tags: ['SKU Complement'],
  summary: 'Get SKU Complement by SKU ID',
  description:
    'Retrieves an existing SKU Complement by its SKU ID. \r\n\r\n## Response body example\r\n\r\n```json\r\n[\r\n    {\r\n        "Id": 61,\r\n        "SkuId": 7,\r\n        "ParentSkuId": 1,\r\n        "ComplementTypeId": 1\r\n    }\r\n]\r\n```',
  operationId: 'GetSKUComplementbySKUID',
  request: {
    headers: z.object({
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
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      skuId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'SKU’s unique numerical identifier.',
            in: 'path',
            name: 'skuId',
            required: true,
            schema: { example: 1, type: 'integer' },
          },
          example: 1,
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: SkuComplementSchema,
          example: [{ ComplementTypeId: 1, Id: 61, ParentSkuId: 1, SkuId: 7 }],
        },
      },
    },
  },
})

export const getApiCatalogPvtStockkeepingunitSkuIdComplementComplementTypeIdRoute = createRoute({
  method: 'get',
  path: '/api/catalog/pvt/stockkeepingunit/{skuId}/complement/{complementTypeId}',
  tags: ['SKU Complement'],
  summary: 'Get SKU Complements by Complement Type ID',
  description:
    'Retrieves all the existing SKU Complements with the same Complement Type ID of a specific SKU. \r\n\r\n## Response body example\r\n\r\n```json\r\n[\r\n    {\r\n        "Id": 61,\r\n        "SkuId": 7,\r\n        "ParentSkuId": 1,\r\n        "ComplementTypeId": 1\r\n    }\r\n]\r\n```',
  operationId: 'GetSKUComplementsbyComplementTypeID',
  request: {
    headers: z.object({
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
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      skuId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'ID of the SKU which will be inserted as a Complement in the Parent SKU.',
            in: 'path',
            name: 'skuId',
            required: true,
            schema: { example: 1, type: 'integer' },
          },
          example: 1,
        }),
      complementTypeId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description:
              'Complement Type ID. This represents the type of the complement. The possible values are: `1` for Accessory; `2` for Suggestion; `3` for Similar Product; `5` for Show Together.',
            in: 'path',
            name: 'complementTypeId',
            required: true,
            schema: { example: 1, type: 'integer' },
          },
          example: 1,
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: SkuComplementSchema,
          example: [{ ComplementTypeId: 1, Id: 61, ParentSkuId: 1, SkuId: 7 }],
        },
      },
    },
  },
})

export const getApiCatalogPvtStockkeepingunitSkuIdEanRoute = createRoute({
  method: 'get',
  path: '/api/catalog/pvt/stockkeepingunit/{skuId}/ean',
  tags: ['SKU EAN'],
  summary: 'Get EAN by SKU ID',
  description:
    'Retrieves the EAN of the SKU. \r\n## Response body example\r\n\r\n```json\r\n[\r\n    "1234567890123"\r\n]\r\n```',
  request: {
    headers: z.object({
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
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      skuId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'SKU’s unique numerical identifier.',
            in: 'path',
            name: 'skuId',
            required: true,
            schema: { example: 1, type: 'integer' },
          },
          example: 1,
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .array(z.string().openapi({ description: 'EAN.', example: '1234567890123' }))
            .openapi({ description: 'Array with EANs associated with the SKU.' }),
          example: ['1234567890123'],
        },
      },
    },
  },
})

export const deleteApiCatalogPvtStockkeepingunitSkuIdEanRoute = createRoute({
  method: 'delete',
  path: '/api/catalog/pvt/stockkeepingunit/{skuId}/ean',
  tags: ['SKU EAN'],
  summary: 'Delete all SKU EAN values',
  description: 'Deletes all EAN values of an SKU.',
  request: {
    headers: z.object({
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
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      skuId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'SKU’s unique numerical identifier.',
            in: 'path',
            name: 'skuId',
            required: true,
            schema: { example: 1, type: 'integer' },
          },
          example: 1,
        }),
    }),
  },
  responses: { 200: { description: 'OK' } },
})

export const postApiCatalogPvtStockkeepingunitSkuIdEanEanRoute = createRoute({
  method: 'post',
  path: '/api/catalog/pvt/stockkeepingunit/{skuId}/ean/{ean}',
  tags: ['SKU EAN'],
  summary: 'Create SKU EAN',
  description: 'Creates or updates the EAN value of an SKU.',
  request: {
    headers: z.object({
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
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      skuId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'SKU’s unique numerical identifier.',
            in: 'path',
            name: 'skuId',
            required: true,
            schema: { example: 1, type: 'integer' },
          },
          example: 1,
        }),
      ean: z
        .string()
        .openapi({
          param: {
            description: 'EAN.',
            in: 'path',
            name: 'ean',
            required: true,
            schema: { example: '1234567', type: 'string' },
          },
          example: '1234567',
        }),
    }),
  },
  responses: { 200: { description: 'OK' } },
})

export const deleteApiCatalogPvtStockkeepingunitSkuIdEanEanRoute = createRoute({
  method: 'delete',
  path: '/api/catalog/pvt/stockkeepingunit/{skuId}/ean/{ean}',
  tags: ['SKU EAN'],
  summary: 'Delete SKU EAN',
  description: 'Deletes the EAN value of an SKU.',
  request: {
    headers: z.object({
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
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      skuId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'SKU’s unique numerical identifier.',
            in: 'path',
            name: 'skuId',
            required: true,
            schema: { example: 1, type: 'integer' },
          },
          example: 1,
        }),
      ean: z
        .string()
        .openapi({
          param: {
            description: 'EAN number.',
            in: 'path',
            name: 'ean',
            required: true,
            schema: { example: 'ABC123', type: 'string' },
          },
          example: 'ABC123',
        }),
    }),
  },
  responses: { 200: { description: 'OK' } },
})

export const getApiCatalogPvtStockkeepingunitSkuIdFileRoute = createRoute({
  method: 'get',
  path: '/api/catalog/pvt/stockkeepingunit/{skuId}/file',
  tags: ['SKU File'],
  summary: 'Get SKU Files',
  description:
    'Gets general information about all Files in the SKU. \r\n## Response body example\r\n\r\n```json\r\n[\r\n    {\r\n        "Id": 549,\r\n        "ArchiveId": 155485,\r\n        "SkuId": 310118490,\r\n        "Name": "chimera-cat-quimera-5",\r\n        "IsMain": true,\r\n        "Label": "miau"\r\n    },\r\n    {\r\n        "Id": 550,\r\n        "ArchiveId": 155486,\r\n        "SkuId": 310118490,\r\n        "Name": "Gato-siames",\r\n        "IsMain": false,\r\n        "Label": "Gato siames"\r\n    },\r\n    {\r\n        "Id": 555,\r\n        "ArchiveId": 155491,\r\n        "SkuId": 310118490,\r\n        "Name": "Cat-Sleeping-Pics",\r\n        "IsMain": false,\r\n        "Label": null\r\n    }\r\n]\r\n```',
  request: {
    headers: z.object({
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
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      skuId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'SKU’s unique numerical identifier.',
            in: 'path',
            name: 'skuId',
            required: true,
            schema: { example: 1, type: 'integer' },
          },
          example: 1,
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .array(
              z
                .object({
                  ArchiveId: z
                    .int()
                    .exactOptional()
                    .openapi({
                      description: 'Unique identifier of the Image.',
                      example: 1,
                      title: 'ArchiveId',
                    }),
                  Id: z
                    .int()
                    .exactOptional()
                    .openapi({
                      description: 'Unique identifier of the association of the Image to the SKU.',
                      example: 1,
                      title: 'Id',
                    }),
                  IsMain: z
                    .boolean()
                    .exactOptional()
                    .openapi({
                      description: 'Defines if the Image is the Main Image of the SKU.',
                      example: true,
                      title: 'IsMain',
                    }),
                  Label: z
                    .string()
                    .nullable()
                    .exactOptional()
                    .openapi({ description: 'Image label.', example: 'cat', title: 'Label' }),
                  Name: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'Image name.', example: 'cat-picture', title: 'Name' }),
                  SkuId: z
                    .int()
                    .exactOptional()
                    .openapi({
                      description: 'Unique identifier of the SKU.',
                      example: 1,
                      title: 'SkuId',
                    }),
                })
                .openapi({
                  description: "Object containing each SKU File's information.",
                  required: [],
                }),
            )
            .openapi({
              description: 'Array with objects containing SKU Files information.',
              example: [
                {
                  ArchiveId: 155485,
                  Id: 549,
                  IsMain: true,
                  Label: 'miau',
                  Name: 'chimera-cat-quimera-5',
                  SkuId: 310118490,
                },
                {
                  ArchiveId: 155486,
                  Id: 550,
                  IsMain: false,
                  Label: 'Gato siames',
                  Name: 'Gato-siames',
                  SkuId: 310118490,
                },
                {
                  ArchiveId: 155491,
                  Id: 555,
                  IsMain: false,
                  Label: null,
                  Name: 'Cat-Sleeping-Pics',
                  SkuId: 310118490,
                },
              ],
            }),
        },
      },
    },
  },
})

export const postApiCatalogPvtStockkeepingunitSkuIdFileRoute = createRoute({
  method: 'post',
  path: '/api/catalog/pvt/stockkeepingunit/{skuId}/file',
  tags: ['SKU File'],
  summary: 'Create SKU File',
  description:
    'Creates a new Image for an SKU based on its URL or on a form-data request body. \r\n## Request body example\r\n\r\n```json\r\n{\r\n      "IsMain": true,\r\n      "Label": "",\r\n      "Name": "Royal-Canin-Feline-Urinary-SO",\r\n      "Text": null,\r\n      "Url": "https://1.bp.blogspot.com/_SLQk9aAv9-o/S7NNbJPv7NI/AAAAAAAAAN8/V1LcO0ViDc4/s1600/waterbottle.jpg"\r\n      \r\n}\r\n```\r\n\r\n## Response body example\r\n\r\n```json\r\n{\r\n      "Id": 503,\r\n      "ArchiveId": 155491,\r\n      "SkuId": 1,\r\n      "Name": "Royal-Canin-Feline-Urinary-SO",\r\n      "IsMain": true,\r\n      "Label": ""\r\n}\r\n```',
  request: {
    headers: z.object({
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
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      skuId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'SKU’s unique numerical identifier.',
            in: 'path',
            name: 'skuId',
            required: true,
            schema: { example: 123456, type: 'integer' },
          },
          example: 123456,
        }),
    }),
    body: {
      content: {
        'application/json': { schema: SKUFileURLSchema },
        'form-data': { schema: SKUFileSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              ArchiveId: z
                .int()
                .exactOptional()
                .openapi({ description: 'Unique identifier of the image file.' }),
              Id: z
                .int()
                .exactOptional()
                .openapi({
                  description:
                    'ID of the association of the SKU and the image (`SkuFileId`). This is the ID that is used to update or delete it.',
                }),
              IsMain: z
                .boolean()
                .exactOptional()
                .openapi({ description: 'Set the image as the main image for the product.' }),
              Label: z.string().exactOptional().openapi({ description: 'Image label.' }),
              SkuId: z.int().exactOptional().openapi({ description: 'SKU ID.' }),
            })
            .openapi({ title: '', required: [] }),
          example: { ArchiveId: 155569, Id: 625, IsMain: true, Label: 'Main', SkuId: 123456 },
        },
      },
    },
  },
})

export const deleteApiCatalogPvtStockkeepingunitSkuIdFileRoute = createRoute({
  method: 'delete',
  path: '/api/catalog/pvt/stockkeepingunit/{skuId}/file',
  tags: ['SKU File'],
  summary: 'Delete All SKU Files',
  description: 'Deletes all SKU Image Files.',
  request: {
    headers: z.object({
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
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      skuId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'SKU’s unique numerical identifier.',
            in: 'path',
            name: 'skuId',
            required: true,
            schema: { example: 1, type: 'integer' },
          },
          example: 1,
        }),
    }),
  },
  responses: { 200: { description: 'OK' } },
})

export const putApiCatalogPvtStockkeepingunitSkuIdFileSkuFileIdRoute = createRoute({
  method: 'put',
  path: '/api/catalog/pvt/stockkeepingunit/{skuId}/file/{skuFileId}',
  tags: ['SKU File'],
  summary: 'Update SKU File',
  description:
    'Updates a new Image on an SKU based on its URL or on a form-data request body. \r\n## Request body example\r\n\r\n```json\r\n{\r\n    "IsMain": true,\r\n    "Label": null,\r\n    "Name": "toilet-paper",\r\n    "Text": null,\r\n    "Url": "https://images-na.ssl-images-amazon.com/images/I/81DLLXaGI7L._SL1500_.jpg"\r\n}\r\n```\r\n\r\n## Response body example\r\n\r\n```json\r\n{\r\n    "Id": 508,\r\n    "ArchiveId": 155491,\r\n    "SkuId": 7,\r\n    "IsMain": true,\r\n    "Label": null\r\n}\r\n```',
  request: {
    headers: z.object({
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
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      skuId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'SKU’s unique numerical identifier.',
            in: 'path',
            name: 'skuId',
            required: true,
            schema: { example: 123456, type: 'integer' },
          },
          example: 123456,
        }),
      skuFileId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description:
              'ID of the association of the SKU and the image, which can be obtained by placing a request to the [Get SKU File](https://developers.vtex.com/vtex-rest-api/reference/catalog-api-get-sku-file) endpoint and copying the `Id` field.',
            in: 'path',
            name: 'skuFileId',
            required: true,
            schema: { example: 517, type: 'integer' },
          },
          example: 517,
        }),
    }),
    body: { description: '', content: { 'application/json': { schema: SKUFileURLSchema } } },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              ArchiveId: z
                .int()
                .exactOptional()
                .openapi({ description: 'Unique identifier of the image file.' }),
              Id: z
                .int()
                .exactOptional()
                .openapi({
                  description:
                    'ID of the association of the SKU and the image (`SkuFileId`). This is the ID that is used to update or delete it.',
                }),
              IsMain: z
                .boolean()
                .exactOptional()
                .openapi({ description: 'Set the image as the main image for the product.' }),
              Label: z.string().exactOptional().openapi({ description: 'Image label.' }),
              SkuId: z.int().exactOptional().openapi({ description: 'SKU ID.' }),
            })
            .openapi({ title: '', required: [] }),
          example: { ArchiveId: 155569, Id: 625, IsMain: true, Label: 'Main', SkuId: 123456 },
        },
      },
    },
  },
})

export const deleteApiCatalogPvtStockkeepingunitSkuIdFileSkuFileIdRoute = createRoute({
  method: 'delete',
  path: '/api/catalog/pvt/stockkeepingunit/{skuId}/file/{skuFileId}',
  tags: ['SKU File'],
  summary: 'Delete SKU Image File',
  description: 'Deletes a specific SKU Image File.',
  request: {
    headers: z.object({
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
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      skuId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'SKU’s unique numerical identifier.',
            in: 'path',
            name: 'skuId',
            required: true,
            schema: { example: 1, type: 'integer' },
          },
          example: 1,
        }),
      skuFileId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description:
              'ID of the association of the SKU and the image, which can be obtained by placing a request to the [Get SKU File](https://developers.vtex.com/vtex-rest-api/reference/catalog-api-get-sku-file) endpoint and copying the `Id` field.',
            in: 'path',
            name: 'skuFileId',
            required: true,
            schema: { example: 1, type: 'integer' },
          },
          example: 1,
        }),
    }),
  },
  responses: { 200: { description: 'OK' } },
})

export const getApiCatalogPvtStockkeepingunitSkuIdSpecificationRoute = createRoute({
  method: 'get',
  path: '/api/catalog/pvt/stockkeepingunit/{skuId}/specification',
  tags: ['SKU Specification'],
  summary: 'Get SKU Specifications',
  description:
    'Retrieves information about an SKU\'s Specifications. \r\n## Response body example\r\n\r\n```json\r\n[\r\n    {\r\n        "Id": 427,\r\n        "SkuId": 7,\r\n        "FieldId": 32,\r\n        "FieldValueId": 131,\r\n        "Text": "500g"\r\n    },\r\n    {\r\n        "Id": 428,\r\n        "SkuId": 7,\r\n        "FieldId": 40,\r\n        "FieldValueId": 133,\r\n        "Text": "A"\r\n    }\r\n]\r\n```',
  request: {
    headers: z.object({
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
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      skuId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'SKU’s unique numerical identifier.',
            in: 'path',
            name: 'skuId',
            required: true,
            schema: { example: 1, type: 'integer' },
          },
          example: 1,
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(SKUSpecificationResponseSchema) } },
    },
  },
})

export const putApiCatalogPvtStockkeepingunitSkuIdSpecificationRoute = createRoute({
  method: 'put',
  path: '/api/catalog/pvt/stockkeepingunit/{skuId}/specification',
  tags: ['SKU Specification'],
  summary: 'Update SKU Specification',
  description:
    'Updates an existing Specification on an existing SKU. This endpoint only updates the `FieldValueId`. \r\n## Request body example\r\n\r\n```json\r\n{\r\n  "Id": 65,\r\n  "SkuId": 21,\r\n  "FieldId": 32,\r\n  "FieldValueId": 131,\r\n  "Text": "Red"\r\n}\r\n```\r\n\r\n## Response body example\r\n\r\n```json\r\n{\r\n  "Id": 65,\r\n  "SkuId": 21,\r\n  "FieldId": 32,\r\n  "FieldValueId": 131,\r\n  "Text": "Red"\r\n}\r\n```',
  request: {
    headers: z.object({
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
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      skuId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'SKU’s unique numerical identifier.',
            in: 'path',
            name: 'skuId',
            required: true,
            schema: { example: 21, type: 'integer' },
          },
          example: 21,
        }),
    }),
    body: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .object({
              FieldId: z
                .int()
                .openapi({
                  description: 'Specification unique identifier. This field cannot be updated.',
                  example: 32,
                  title: 'FieldId',
                }),
              FieldValueId: z
                .int()
                .openapi({
                  description:
                    'Specification value unique identifier. This field can only be updated with other values of the same `FieldId`.',
                  example: 131,
                  title: 'FieldValueId',
                }),
              Id: z
                .int()
                .openapi({
                  description:
                    'Specification and SKU association unique identifier. This field cannot be updated.',
                  example: 65,
                  title: 'Id',
                }),
              SkuId: z
                .int()
                .exactOptional()
                .openapi({
                  description: 'SKU unique identifier. This field cannot be updated.',
                  example: 21,
                  title: 'SkuId',
                }),
              Text: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Specification Value Name. This field is automatically updated if the `FieldValue` is updated. Otherwise, the value cannot be modified.',
                  example: 'Red',
                  title: 'Text',
                }),
            })
            .openapi({ required: ['Id', 'FieldId', 'FieldValueId'], title: 'Request Body' }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(SKUSpecificationResponseSchema) } },
    },
  },
})

export const postApiCatalogPvtStockkeepingunitSkuIdSpecificationRoute = createRoute({
  method: 'post',
  path: '/api/catalog/pvt/stockkeepingunit/{skuId}/specification',
  tags: ['SKU Specification'],
  summary: 'Associate SKU Specification',
  description:
    'Associates a previously created Specification to an SKU. \r\n## Request body example\r\n\r\n```json\r\n{\r\n    "FieldId": 65,\r\n    "FieldValueId": 138\r\n}\r\n```\r\n\r\n## Response body example\r\n\r\n```json\r\n{\r\n    "Id": 730,\r\n    "SkuId": 31,\r\n    "FieldId": 65,\r\n    "FieldValueId": 138,\r\n    "Text": "Size"\r\n}\r\n```',
  request: {
    headers: z.object({
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
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      skuId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'SKU’s unique numerical identifier.',
            in: 'path',
            name: 'skuId',
            required: true,
            schema: { example: 1234568387, type: 'integer' },
          },
          example: 1234568387,
        }),
    }),
    body: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .object({
              FieldId: z
                .int()
                .openapi({ description: 'Specification ID.', example: 13, title: 'FieldId' }),
              FieldValueId: z
                .int()
                .exactOptional()
                .openapi({
                  description:
                    'Specification Value ID. Required only for `FieldTypeId` as `5`, `6` and `7`.',
                  example: 101,
                  title: 'FieldValueId',
                }),
            })
            .openapi({ required: ['FieldId'], title: '' }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: SKUSpecificationResponseSchema } },
    },
  },
})

export const deleteApiCatalogPvtStockkeepingunitSkuIdSpecificationRoute = createRoute({
  method: 'delete',
  path: '/api/catalog/pvt/stockkeepingunit/{skuId}/specification',
  tags: ['SKU Specification'],
  summary: 'Delete all SKU Specifications',
  description: 'Deletes all SKU Specifications.',
  request: {
    headers: z.object({
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
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      skuId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'SKU’s unique numerical identifier.',
            in: 'path',
            name: 'skuId',
            required: true,
            schema: { example: 1, type: 'integer' },
          },
          example: 1,
        }),
    }),
  },
  responses: { 200: { description: 'OK' } },
})

export const deleteApiCatalogPvtStockkeepingunitSkuIdSpecificationSpecificationIdRoute =
  createRoute({
    method: 'delete',
    path: '/api/catalog/pvt/stockkeepingunit/{skuId}/specification/{specificationId}',
    tags: ['SKU Specification'],
    summary: 'Delete SKU Specification',
    description: 'Deletes a specific SKU Specification.',
    request: {
      headers: z.object({
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
              schema: { default: 'application/json', type: 'string' },
              style: 'simple',
            },
          }),
      }),
      params: z.object({
        skuId: z
          .preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.int(),
          )
          .openapi({
            param: {
              description: 'SKU’s unique numerical identifier.',
              in: 'path',
              name: 'skuId',
              required: true,
              schema: { example: 1, type: 'integer' },
            },
            example: 1,
          }),
        specificationId: z
          .preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.int(),
          )
          .openapi({
            param: {
              description: 'Specification’s unique numerical identifier.',
              in: 'path',
              name: 'specificationId',
              required: true,
              schema: { example: 1, type: 'integer' },
            },
            example: 1,
          }),
      }),
    },
    responses: { 200: { description: 'OK' } },
  })

export const putApiCatalogPvtStockkeepingunitSkuIdSpecificationvalueRoute = createRoute({
  method: 'put',
  path: '/api/catalog/pvt/stockkeepingunit/{skuId}/specificationvalue',
  tags: ['SKU Specification'],
  summary: 'Associate SKU specification using specification name and group name',
  description:
    'Associates a specification to an SKU using specification name and group name. Automatically creates the informed group, specification and values if they had not been created before.\r\n\r\n ## Request body example\r\n\r\n```json\r\n{\r\n    "FieldName": "Size",\r\n    "GroupName": "Sizes",\r\n    "RootLevelSpecification": false,\r\n    "FieldValues": [\r\n        "M"\r\n        ]\r\n}\r\n```\r\n \r\n \r\n## Response body example\r\n\r\n```json\r\n[\r\n    {\r\n        "Id": 419,\r\n        "SkuId": 5,\r\n        "FieldId": 22,\r\n        "FieldValueId": 62,\r\n        "Text": "M"\r\n    }\r\n]\r\n```\r\n',
  request: {
    headers: z.object({
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
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      skuId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'SKU’s unique numerical identifier.',
            in: 'path',
            name: 'skuId',
            required: true,
            schema: { example: 1, type: 'integer' },
          },
          example: 1,
        }),
    }),
    body: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .object({
              FieldName: z
                .string()
                .openapi({ description: 'Specification name.', example: 'Material' }),
              FieldValues: z
                .array(z.string().openapi({ description: 'Specification value.', example: 'M' }))
                .openapi({
                  description:
                    'Array of specification values. SKU Specifications must contain only one value.',
                  example: ['M'],
                }),
              GroupName: z.string().openapi({ description: 'Group name.', example: 'Composition' }),
              RootLevelSpecification: z
                .boolean()
                .openapi({ description: 'Root level specification.', example: true }),
            })
            .openapi({
              description: '',
              example: {
                FieldName: 'Size',
                FieldValues: ['M'],
                GroupName: 'Sizes',
                RootLevelSpecification: true,
              },
              required: ['FieldName', 'GroupName', 'RootLevelSpecification', 'FieldValues'],
            }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .array(
              z
                .object({
                  FieldId: z.int().exactOptional().openapi({ description: 'Specification ID.' }),
                  FieldValueId: z
                    .int()
                    .exactOptional()
                    .openapi({ description: 'Current specification value ID.' }),
                  Id: z
                    .int()
                    .exactOptional()
                    .openapi({
                      description: 'ID of the association of the SKU and the specification.',
                    }),
                  SkuId: z.int().exactOptional().openapi({ description: 'SKU ID.' }),
                  Text: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'Current specification value text.' }),
                })
                .openapi({
                  description: 'Object with information of the specification.',
                  required: [],
                }),
            )
            .openapi({
              description: 'Array with information of all SKU specifications.',
              example: [{ FieldId: 29, FieldValueId: 76, Id: 418, SkuId: 5, Text: 'M' }],
              title: '',
            }),
        },
      },
    },
  },
})

export const getApiCatalogPvtStockkeepingunitkitRoute = createRoute({
  method: 'get',
  path: '/api/catalog/pvt/stockkeepingunitkit',
  tags: ['SKU Kit'],
  summary: 'Get SKU Kit by SKU ID or Parent SKU ID',
  description:
    'Retrieves general information about the components of an SKU Kit by SKU ID or Parent SKU ID. \r\n## Response body example\r\n\r\n```json\r\n{\r\n    "Id": 7,\r\n    "StockKeepingUnitParent": 7,\r\n    "StockKeepingUnitId": 1,\r\n    "Quantity": 1,\r\n    "UnitPrice": 50.0000\r\n}\r\n```',
  request: {
    headers: z.object({
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
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
    }),
    query: z.object({
      skuId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'SKU’s unique numerical identifier.',
            explode: true,
            in: 'query',
            name: 'skuId',
            required: false,
            schema: { example: 1, format: 'int32', type: 'integer' },
            style: 'form',
          },
          example: 1,
        }),
      parentSkuId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Parent SKU’s unique numerical identifier.',
            explode: true,
            in: 'query',
            name: 'parentSkuId',
            required: false,
            schema: { example: 1, format: 'int32', type: 'integer' },
            style: 'form',
          },
          example: 1,
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: SkuKitSchema,
          example: {
            Id: 7,
            Quantity: 1,
            StockKeepingUnitId: 1,
            StockKeepingUnitParent: 7,
            UnitPrice: 50,
          },
        },
      },
    },
  },
})

export const postApiCatalogPvtStockkeepingunitkitRoute = createRoute({
  method: 'post',
  path: '/api/catalog/pvt/stockkeepingunitkit',
  tags: ['SKU Kit'],
  summary: 'Create SKU Kit',
  description:
    'Adds a component to a specific Kit. \r\n## Request body example\r\n\r\n```json\r\n{\r\n    "StockKeepingUnitParent": 7,\r\n    "StockKeepingUnitId": 1,\r\n    "Quantity": 1,\r\n    "UnitPrice": 50.0000\r\n}\r\n``` \r\n## Response body example\r\n\r\n```json\r\n{\r\n    "Id": 7,\r\n    "StockKeepingUnitParent": 7,\r\n    "StockKeepingUnitId": 1,\r\n    "Quantity": 1,\r\n    "UnitPrice": 50.0000\r\n}\r\n```',
  request: {
    headers: z.object({
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
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
    }),
    body: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .object({
              Quantity: z
                .int()
                .openapi({ description: 'Component quantity.', example: 3, title: 'Quantity' }),
              StockKeepingUnitId: z
                .int()
                .openapi({
                  description: 'Component SKU ID.',
                  example: 31018374,
                  title: 'StockKeepingUnitId',
                }),
              StockKeepingUnitParent: z
                .int()
                .openapi({
                  description: 'SKU ID of the SKU Kit.',
                  example: 31018373,
                  title: 'StockKeepingUnitParent',
                }),
              UnitPrice: z
                .number()
                .openapi({
                  description: 'Component price per unit.',
                  example: 15.5,
                  title: 'UnitPrice',
                }),
            })
            .openapi({
              required: ['StockKeepingUnitParent', 'StockKeepingUnitId', 'Quantity', 'UnitPrice'],
              title: 'Request body',
            }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: SkuKitSchema,
          example: {
            Id: 7,
            Quantity: 1,
            StockKeepingUnitId: 1,
            StockKeepingUnitParent: 7,
            UnitPrice: 50,
          },
        },
      },
    },
  },
})

export const deleteApiCatalogPvtStockkeepingunitkitRoute = createRoute({
  method: 'delete',
  path: '/api/catalog/pvt/stockkeepingunitkit',
  tags: ['SKU Kit'],
  summary: 'Delete SKU Kit by SKU ID or Parent SKU ID',
  description:
    'Deletes all Kit’s components based on the Parent SKU ID or deletes a specific Kit’s component based on the SKU ID.',
  request: {
    headers: z.object({
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
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
    }),
    query: z.object({
      skuId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'SKU’s unique numerical identifier.',
            explode: true,
            in: 'query',
            name: 'skuId',
            required: false,
            schema: { example: 1, format: 'int32', type: 'integer' },
            style: 'form',
          },
          example: 1,
        }),
      parentSkuId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Parent SKU’s unique numerical identifier.',
            explode: true,
            in: 'query',
            name: 'parentSkuId',
            required: false,
            schema: { example: 1, format: 'int32', type: 'integer' },
            style: 'form',
          },
          example: 1,
        }),
    }),
  },
  responses: { 200: { description: 'OK' } },
})

export const getApiCatalogPvtStockkeepingunitkitKitIdRoute = createRoute({
  method: 'get',
  path: '/api/catalog/pvt/stockkeepingunitkit/{kitId}',
  tags: ['SKU Kit'],
  summary: 'Get SKU Kit',
  description: 'Retrieves general information about a component of a Kit.',
  request: {
    headers: z.object({
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
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      kitId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'Kit’s unique numerical identifier',
            in: 'path',
            name: 'kitId',
            required: true,
            schema: { example: 1, type: 'integer' },
          },
          example: 1,
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: SkuKitSchema,
          example: {
            Id: 7,
            Quantity: 1,
            StockKeepingUnitId: 1,
            StockKeepingUnitParent: 7,
            UnitPrice: 50,
          },
        },
      },
    },
  },
})

export const deleteApiCatalogPvtStockkeepingunitkitKitIdRoute = createRoute({
  method: 'delete',
  path: '/api/catalog/pvt/stockkeepingunitkit/{kitId}',
  tags: ['SKU Kit'],
  summary: 'Delete SKU Kit by KitId',
  description: 'Deletes a specific Kit’s component based on its Kit ID.',
  request: {
    headers: z.object({
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
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      kitId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'Kit’s unique numerical identifier.',
            in: 'path',
            name: 'kitId',
            required: true,
            schema: { example: 1, type: 'integer' },
          },
          example: 1,
        }),
    }),
  },
  responses: { 200: { description: 'OK' } },
})

export const postApiCatalogPvtSubcollectionRoute = createRoute({
  method: 'post',
  path: '/api/catalog/pvt/subcollection',
  tags: ['Legacy Subcollection'],
  summary: 'Create Subcollection',
  description:
    ' >⚠️ There are two ways to configure collections, through Legacy CMS Portal or using the Beta Collection module. This endpoint is compatible with [collections configured through the Legacy CMS Portal](https://help.vtex.com/en/tutorial/adding-collections-cms--2YBy6P6X0NFRpkD2ZBxF6L).\n\nCreates a new Subcollection, which is a [Group](https://help.vtex.com/en/tutorial/adding-collections-cms--2YBy6P6X0NFRpkD2ZBxF6L#group-types) within a  Collection. A Subcollection can be either “Exclusive” (all the products contained in it will not be used) or “Inclusive” (all the products contained in it will be used).\r\n## Request body example\r\n\r\n```json\r\n{\r\n    "CollectionId": 149,\r\n    "Name": "Test",\r\n    "Type": "Exclusive",\r\n    "PreSale": true,\r\n    "Release": false\r\n}\r\n```\r\n## Response body example\r\n\r\n```json\r\n{\r\n    "Id": 13,\r\n    "CollectionId": 149,\r\n    "Name": "Test",\r\n    "Type": "Exclusive",\r\n    "PreSale": true,\r\n    "Release": false\r\n}\r\n```',
  request: {
    headers: z.object({
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
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
    }),
    body: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .object({
              CollectionId: z
                .int()
                .openapi({ description: 'SubCollection ID.', example: 17, title: 'CollectionId' }),
              Name: z
                .string()
                .openapi({ description: 'SubCollection Name.', example: 'group 1', title: 'Name' }),
              PreSale: z
                .boolean()
                .openapi({
                  description: 'Defines PreSale date.',
                  example: false,
                  title: 'PreSale',
                }),
              Release: z
                .boolean()
                .openapi({
                  description: 'Defines Release date.',
                  example: false,
                  title: 'Release',
                }),
              Type: z
                .string()
                .openapi({
                  description:
                    'Either `“Exclusive”` (all the products contained in it will not be used) or `“Inclusive”` (all the products contained in it will be used).',
                  example: 'Inclusive',
                  title: 'Type',
                }),
            })
            .openapi({
              required: ['CollectionId', 'Name', 'Type', 'PreSale', 'Release'],
              title: '',
            }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              CollectionId: z.int().exactOptional().openapi({ description: 'Collection ID.' }),
              Id: z.int().exactOptional().openapi({ description: 'Subcollection ID.' }),
              Name: z.string().exactOptional().openapi({ description: 'Subcollection Name.' }),
              PreSale: z
                .boolean()
                .exactOptional()
                .openapi({ description: 'Defines if the collection is on PreSale.' }),
              Release: z
                .boolean()
                .exactOptional()
                .openapi({ description: 'Defines if the collection is a new released one.' }),
              Type: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Either `“Exclusive”` (all the products contained in it will not be used) or `“Inclusive”` (all the products contained in it will be used).',
                }),
            })
            .openapi({ title: '', required: [] }),
          example: {
            CollectionId: 151,
            Id: 17,
            Name: 'group 1',
            PreSale: false,
            Release: false,
            Type: 'Inclusive',
          },
        },
      },
    },
  },
})

export const getApiCatalogPvtSubcollectionSubCollectionIdRoute = createRoute({
  method: 'get',
  path: '/api/catalog/pvt/subcollection/{subCollectionId}',
  tags: ['Legacy Subcollection'],
  summary: 'Get Subcollection',
  description:
    ' >⚠️ There are two ways to configure collections, through Legacy CMS Portal or using the Beta Collection module. This endpoint is compatible with [collections configured through the Legacy CMS Portal](https://help.vtex.com/en/tutorial/adding-collections-cms--2YBy6P6X0NFRpkD2ZBxF6L).\n\nRetrieves information about a Subcollection, which is a [Group](https://help.vtex.com/en/tutorial/adding-collections-cms--2YBy6P6X0NFRpkD2ZBxF6L#group-types) within a  Collection.\r\n## Response body example\r\n\r\n```json\r\n{\r\n    "Id": 13,\r\n    "CollectionId": 149,\r\n    "Name": "Test",\r\n    "Type": "Exclusive",\r\n    "PreSale": true,\r\n    "Release": false\r\n}\r\n```',
  request: {
    headers: z.object({
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
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      subCollectionId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description:
              'Subcollection’s unique numerical identifier, which can be obtained by placing a request to [Get Subcollection by Collection ID](https://developers.vtex.com/vtex-rest-api/reference/catalog-api-get-subcollection-collectionid).',
            in: 'path',
            name: 'subCollectionId',
            required: true,
            schema: { example: 17, type: 'integer' },
          },
          example: 17,
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
              CollectionId: z.int().exactOptional().openapi({ description: 'Collection ID.' }),
              Id: z.int().exactOptional().openapi({ description: 'Subcollection ID.' }),
              Name: z.string().exactOptional().openapi({ description: 'Subcollection Name.' }),
              PreSale: z
                .boolean()
                .exactOptional()
                .openapi({ description: 'Defines if the collection is on PreSale.' }),
              Release: z
                .boolean()
                .exactOptional()
                .openapi({ description: 'Defines if the collection is a new released one.' }),
              Type: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Either `“Exclusive”` (all the products contained in it will not be used) or `“Inclusive”` (all the products contained in it will be used).',
                }),
            })
            .openapi({ title: '', required: [] }),
          example: {
            CollectionId: 151,
            Id: 17,
            Name: 'group 1',
            PreSale: false,
            Release: false,
            Type: 'Inclusive',
          },
        },
      },
    },
  },
})

export const putApiCatalogPvtSubcollectionSubCollectionIdRoute = createRoute({
  method: 'put',
  path: '/api/catalog/pvt/subcollection/{subCollectionId}',
  tags: ['Legacy Subcollection'],
  summary: 'Update Subcollection',
  description:
    ' >⚠️ There are two ways to configure collections, through Legacy CMS Portal or using the Beta Collection module. This endpoint is compatible with [collections configured through the Legacy CMS Portal](https://help.vtex.com/en/tutorial/adding-collections-cms--2YBy6P6X0NFRpkD2ZBxF6L).\n\nUpdates a previously created Subcollection, which is a [Group](https://help.vtex.com/en/tutorial/adding-collections-cms--2YBy6P6X0NFRpkD2ZBxF6L#group-types) within a  Collection.\r\n\r\n## Request or response body example\r\n\r\n```json\r\n{\r\n    "CollectionId": 149,\r\n    "Name": "Test",\r\n    "Type": "Exclusive",\r\n    "PreSale": true,\r\n    "Release": false\r\n}\r\n```',
  request: {
    headers: z.object({
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
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      subCollectionId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description:
              'Subcollection’s unique numerical identifier, which can be obtained by placing a request to [Get Subcollection by Collection ID](https://developers.vtex.com/vtex-rest-api/reference/catalog-api-get-subcollection-collectionid).',
            in: 'path',
            name: 'subCollectionId',
            required: true,
            schema: { example: 17, type: 'integer' },
          },
          example: 17,
        }),
    }),
    body: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .object({
              CollectionId: z
                .int()
                .openapi({ description: 'Collection ID.', example: 17, title: 'CollectionId' }),
              Name: z
                .string()
                .openapi({ description: 'Subcollection Name.', example: 'group 1', title: 'Name' }),
              PreSale: z
                .boolean()
                .openapi({
                  description: 'Defines PreSale date.',
                  example: false,
                  title: 'PreSale',
                }),
              Release: z
                .boolean()
                .openapi({
                  description: 'Defines Release date.',
                  example: false,
                  title: 'Release',
                }),
              Type: z
                .string()
                .openapi({
                  description:
                    'Either `“Exclusive”` (all the products contained in it will not be used) or `“Inclusive”` (all the products contained in it will be used).',
                  example: 'Inclusive',
                  title: 'Type',
                }),
            })
            .openapi({
              required: ['CollectionId', 'Name', 'Type', 'PreSale', 'Release'],
              title: '',
            }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              CollectionId: z.int().exactOptional().openapi({ description: 'Collection ID.' }),
              Id: z.int().exactOptional().openapi({ description: 'Subcollection ID.' }),
              Name: z.string().exactOptional().openapi({ description: 'Subcollection Name.' }),
              PreSale: z
                .boolean()
                .exactOptional()
                .openapi({ description: 'Defines if the collection is on PreSale.' }),
              Release: z
                .boolean()
                .exactOptional()
                .openapi({ description: 'Defines if the collection is a new released one.' }),
              Type: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Either `“Exclusive”` (all the products contained in it will not be used) or `“Inclusive”` (all the products contained in it will be used).',
                }),
            })
            .openapi({ title: '', required: [] }),
          example: {
            CollectionId: 151,
            Id: 17,
            Name: 'group 1',
            PreSale: false,
            Release: false,
            Type: 'Inclusive',
          },
        },
      },
    },
  },
})

export const deleteApiCatalogPvtSubcollectionSubCollectionIdRoute = createRoute({
  method: 'delete',
  path: '/api/catalog/pvt/subcollection/{subCollectionId}',
  tags: ['Legacy Subcollection'],
  summary: 'Delete Subcollection',
  description:
    ' >⚠️ There are two ways to configure collections, through Legacy CMS Portal or using the Beta Collection module. This endpoint is compatible with [collections configured through the Legacy CMS Portal](https://help.vtex.com/en/tutorial/adding-collections-cms--2YBy6P6X0NFRpkD2ZBxF6L).\n\nDeletes a previously created Subcollection, which is a [Group](https://help.vtex.com/en/tutorial/adding-collections-cms--2YBy6P6X0NFRpkD2ZBxF6L#group-types) within a  Collection.',
  request: {
    headers: z.object({
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
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      subCollectionId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description:
              'Subcollection’s unique numerical identifier, which can be obtained by placing a request to [Get Subcollection by Collection ID](https://developers.vtex.com/vtex-rest-api/reference/catalog-api-get-subcollection-collectionid).',
            in: 'path',
            name: 'subCollectionId',
            required: true,
            schema: { example: 1, type: 'integer' },
          },
          example: 1,
        }),
    }),
  },
  responses: { 200: { description: 'OK' } },
})

export const postApiCatalogPvtSubcollectionSubCollectionIdBrandRoute = createRoute({
  method: 'post',
  path: '/api/catalog/pvt/subcollection/{subCollectionId}/brand',
  tags: ['Legacy Subcollection'],
  summary: 'Associate Brand to Subcollection',
  description:
    ' >⚠️ There are two ways to configure collections, through Legacy CMS Portal or using the Beta Collection module. This endpoint is compatible with [collections configured through the Legacy CMS Portal](https://help.vtex.com/en/tutorial/adding-collections-cms--2YBy6P6X0NFRpkD2ZBxF6L).\n\nAssociates a single Brand to a Subcollection, which is a [Group](https://help.vtex.com/en/tutorial/adding-collections-cms--2YBy6P6X0NFRpkD2ZBxF6L#group-types) within a  Collection.\r\n## Request body example\r\n\r\n```json\r\n{\r\n    "BrandId": 2000000\r\n}\r\n```\r\n\r\n## Response body example\r\n\r\n```json\r\n{\r\n    "SubCollectionId": 17,\r\n    "BrandId": 2000000\r\n}\r\n```',
  request: {
    headers: z.object({
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
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      subCollectionId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description:
              'Subcollection’s unique numerical identifier, which can be obtained by placing a request to [Get Subcollection by Collection ID](https://developers.vtex.com/vtex-rest-api/reference/catalog-api-get-subcollection-collectionid).',
            in: 'path',
            name: 'subCollectionId',
            required: true,
            schema: { example: 1, type: 'integer' },
          },
          example: 1,
        }),
    }),
    body: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .object({
              BrandId: z
                .int()
                .openapi({
                  description: 'Unique identifier of a Brand.',
                  example: 2000000,
                  title: 'BrandId',
                }),
            })
            .openapi({ required: ['BrandId'], title: 'Request body' }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              BrandId: z
                .int()
                .exactOptional()
                .openapi({ description: 'Unique identifier of the Brand.', example: 2000000 }),
              SubCollectionId: z
                .int()
                .exactOptional()
                .openapi({
                  description: 'Subcollection’s unique numerical identifier.',
                  example: 17,
                }),
            })
            .openapi({ example: { BrandId: 2000000, SubCollectionId: 17 }, required: [] }),
        },
      },
    },
  },
})

export const deleteApiCatalogPvtSubcollectionSubCollectionIdBrandBrandIdRoute = createRoute({
  method: 'delete',
  path: '/api/catalog/pvt/subcollection/{subCollectionId}/brand/{brandId}',
  tags: ['Legacy Subcollection'],
  summary: 'Delete Brand from Subcollection',
  description:
    ' >⚠️ There are two ways to configure collections, through Legacy CMS Portal or using the Beta Collection module. This endpoint is compatible with [collections configured through the Legacy CMS Portal](https://help.vtex.com/en/tutorial/adding-collections-cms--2YBy6P6X0NFRpkD2ZBxF6L).\n\nDeletes a Brand from a Subcollection, which is a [Group](https://help.vtex.com/en/tutorial/adding-collections-cms--2YBy6P6X0NFRpkD2ZBxF6L#group-types) within a  Collection.',
  request: {
    headers: z.object({
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
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      subCollectionId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description:
              'Subcollection’s unique numerical identifier, which can be obtained by placing a request to [Get Subcollection by Collection ID](https://developers.vtex.com/vtex-rest-api/reference/catalog-api-get-subcollection-collectionid).',
            in: 'path',
            name: 'subCollectionId',
            required: true,
            schema: { example: 1, type: 'integer' },
          },
          example: 1,
        }),
      brandId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'Brand’s unique numerical identifier.',
            in: 'path',
            name: 'brandId',
            required: true,
            schema: { example: 1, type: 'integer' },
          },
          example: 1,
        }),
    }),
  },
  responses: { 200: { description: 'OK' } },
})

export const deleteApiCatalogPvtSubcollectionSubCollectionIdBrandCategoryIdRoute = createRoute({
  method: 'delete',
  path: '/api/catalog/pvt/subcollection/{subCollectionId}/brand/{categoryId}',
  tags: ['Legacy Subcollection'],
  summary: 'Delete Category from Subcollection',
  description:
    ' >⚠️ There are two ways to configure collections, through Legacy CMS Portal or using the Beta Collection module. This endpoint is compatible with [collections configured through the Legacy CMS Portal](https://help.vtex.com/en/tutorial/adding-collections-cms--2YBy6P6X0NFRpkD2ZBxF6L).\n\nDeletes a Category from a Subcollection, which is a [Group](https://help.vtex.com/en/tutorial/adding-collections-cms--2YBy6P6X0NFRpkD2ZBxF6L#group-types) within a  Collection.',
  request: {
    headers: z.object({
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
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      subCollectionId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description:
              'Subcollection’s unique numerical identifier, which can be obtained by placing a request to [Get Subcollection by Collection ID](https://developers.vtex.com/vtex-rest-api/reference/catalog-api-get-subcollection-collectionid).',
            in: 'path',
            name: 'subCollectionId',
            required: true,
            schema: { example: 1, type: 'integer' },
          },
          example: 1,
        }),
      categoryId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'Category’s unique numerical identifier.',
            in: 'path',
            name: 'categoryId',
            required: true,
            schema: { example: 1, type: 'integer' },
          },
          example: 1,
        }),
    }),
  },
  responses: { 200: { description: 'OK' } },
})

export const postApiCatalogPvtSubcollectionSubCollectionIdCategoryRoute = createRoute({
  method: 'post',
  path: '/api/catalog/pvt/subcollection/{subCollectionId}/category',
  tags: ['Legacy Subcollection'],
  summary: 'Associate Category to Subcollection',
  description:
    ' >⚠️ There are two ways to configure collections, through Legacy CMS Portal or using the Beta Collection module. This endpoint is compatible with [collections configured through the Legacy CMS Portal](https://help.vtex.com/en/tutorial/adding-collections-cms--2YBy6P6X0NFRpkD2ZBxF6L).\n\nAssociates a single Category to a Subcollection, which is a [Group](https://help.vtex.com/en/tutorial/adding-collections-cms--2YBy6P6X0NFRpkD2ZBxF6L#group-types) within a  Collection.\r\n## Request body example\r\n\r\n```json\r\n{\r\n    "CategoryId": 1\r\n}\r\n```\r\n\r\n## Response body example\r\n\r\n```json\r\n{\r\n    "SubCollectionId": 17,\r\n    "CategoryId": 1\r\n}\r\n```',
  request: {
    headers: z.object({
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
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      subCollectionId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description:
              'Subcollection’s unique numerical identifier, which can be obtained by placing a request to [Get Subcollection by Collection ID](https://developers.vtex.com/vtex-rest-api/reference/catalog-api-get-subcollection-collectionid).',
            in: 'path',
            name: 'subCollectionId',
            required: true,
            schema: { example: 1, type: 'integer' },
          },
          example: 1,
        }),
    }),
    body: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .object({
              CategoryId: z
                .int()
                .openapi({
                  description: 'Unique identifier of a Category.',
                  example: 0,
                  title: 'CategoryId',
                }),
            })
            .openapi({ required: ['CategoryId'], title: 'Request body' }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              CategoryId: z
                .int()
                .exactOptional()
                .openapi({
                  description: 'Unique identifier of the Category.',
                  example: 1,
                  title: 'CategoryId',
                }),
              SubCollectionId: z
                .int()
                .exactOptional()
                .openapi({
                  description: 'Subcollection’s unique numerical identifier.',
                  example: 17,
                }),
            })
            .openapi({ example: { CategoryId: 1, SubCollectionId: 17 }, required: [] }),
        },
      },
    },
  },
})

export const postApiCatalogPvtSubcollectionSubCollectionIdStockkeepingunitRoute = createRoute({
  method: 'post',
  path: '/api/catalog/pvt/subcollection/{subCollectionId}/stockkeepingunit',
  tags: ['Legacy Subcollection'],
  summary: 'Add SKU to Subcollection',
  description:
    ' >⚠️ There are two ways to configure collections, through Legacy CMS Portal or using the Beta Collection module. This endpoint is compatible with [collections configured through the Legacy CMS Portal](https://help.vtex.com/en/tutorial/adding-collections-cms--2YBy6P6X0NFRpkD2ZBxF6L).\n\nAssociates a single SKU to a Subcollection, which is a [Group](https://help.vtex.com/en/tutorial/adding-collections-cms--2YBy6P6X0NFRpkD2ZBxF6L#group-types) within a  Collection.\r\n## Request body example\r\n\r\n```json\r\n{\r\n    "SkuId": 1\r\n}\r\n```\r\n\r\n## Response body example\r\n\r\n```json\r\n{\r\n    "SubCollectionId": 17,\r\n    "SkuId": 1\r\n}\r\n```',
  request: {
    headers: z.object({
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
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      subCollectionId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description:
              'Subcollection’s unique numerical identifier, which can be obtained by placing a request to [Get Subcollection by Collection ID](https://developers.vtex.com/vtex-rest-api/reference/catalog-api-get-subcollection-collectionid).',
            in: 'path',
            name: 'subCollectionId',
            required: true,
            schema: { example: 1, type: 'integer' },
          },
          example: 1,
        }),
    }),
    body: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .object({
              SkuId: z
                .int()
                .openapi({
                  description: 'Unique identifier of an SKU.',
                  example: 1,
                  title: 'SkuId',
                }),
            })
            .openapi({ required: ['SkuId'], title: 'Request body' }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              SkuId: z
                .int()
                .exactOptional()
                .openapi({ description: 'Unique identifier of the SKU.', example: 1 }),
              SubCollectionId: z
                .int()
                .exactOptional()
                .openapi({
                  description: 'Subcollection’s unique numerical identifier.',
                  example: 17,
                }),
            })
            .openapi({ example: { SkuId: 1, SubCollectionId: 17 }, required: [] }),
        },
      },
    },
  },
})

export const deleteApiCatalogPvtSubcollectionSubCollectionIdStockkeepingunitSkuIdRoute =
  createRoute({
    method: 'delete',
    path: '/api/catalog/pvt/subcollection/{subCollectionId}/stockkeepingunit/{skuId}',
    tags: ['Legacy Subcollection'],
    summary: 'Delete SKU from Subcollection',
    description:
      ' >⚠️ There are two ways to configure collections, through Legacy CMS Portal or using the Beta Collection module. This endpoint is compatible with [collections configured through the Legacy CMS Portal](https://help.vtex.com/en/tutorial/adding-collections-cms--2YBy6P6X0NFRpkD2ZBxF6L).\n\nDeletes an SKU from a Subcollection, which is a [Group](https://help.vtex.com/en/tutorial/adding-collections-cms--2YBy6P6X0NFRpkD2ZBxF6L#group-types) within a  Collection.',
    request: {
      headers: z.object({
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
              schema: { default: 'application/json', type: 'string' },
              style: 'simple',
            },
          }),
      }),
      params: z.object({
        subCollectionId: z
          .preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.int(),
          )
          .openapi({
            param: {
              description:
                'Subcollection’s unique numerical identifier, which can be obtained by placing a request to [Get Subcollection by Collection ID](https://developers.vtex.com/vtex-rest-api/reference/catalog-api-get-subcollection-collectionid).',
              in: 'path',
              name: 'subCollectionId',
              required: true,
              schema: { example: 1, type: 'integer' },
            },
            example: 1,
          }),
        skuId: z
          .preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.int(),
          )
          .openapi({
            param: {
              description: 'SKU’s unique numerical identifier.',
              in: 'path',
              name: 'skuId',
              required: true,
              schema: { example: 1, type: 'integer' },
            },
            example: 1,
          }),
      }),
    },
    responses: { 200: { description: 'OK' } },
  })

export const postApiCatalogPvtSupplierRoute = createRoute({
  method: 'post',
  path: '/api/catalog/pvt/supplier',
  tags: ['Supplier'],
  summary: 'Create Supplier',
  description:
    'Creates a new Supplier. \r\n## Request body example\r\n\r\n```json\r\n{\r\n    "Name": "Supplier",\r\n    "CorporateName": "TopStore",\r\n    "StateInscription": "",\r\n    "Cnpj": "33304981001272",\r\n    "Phone": "3333333333",\r\n    "CellPhone": "4444444444",\r\n    "CorportePhone": "5555555555",\r\n    "Email": "email@email.com",\r\n    "IsActive": true\r\n}\r\n```\r\n\r\n## Response body example\r\n\r\n```json\r\n{\r\n    "Id": 1,\r\n    "Name": "Supplier",\r\n    "CorporateName": "TopStore",\r\n    "StateInscription": "",\r\n    "Cnpj": "33304981001272",\r\n    "Phone": "3333333333",\r\n    "CellPhone": "4444444444",\r\n    "CorportePhone": "5555555555",\r\n    "Email": "email@email.com",\r\n    "IsActive": true\r\n}\r\n```',
  request: {
    headers: z.object({
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
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
    }),
    body: { description: '', content: { 'application/json': { schema: SupplierRequestSchema } } },
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: SupplierResponseSchema } } },
  },
})

export const putApiCatalogPvtSupplierSupplierIdRoute = createRoute({
  method: 'put',
  path: '/api/catalog/pvt/supplier/{supplierId}',
  tags: ['Supplier'],
  summary: 'Update Supplier',
  description:
    'Updates general information of an existing Supplier. \r\n## Request body example\r\n\r\n```json\r\n{\r\n    "Name": "Supplier",\r\n    "CorporateName": "TopStore",\r\n    "StateInscription": "",\r\n    "Cnpj": "33304981001272",\r\n    "Phone": "3333333333",\r\n    "CellPhone": "4444444444",\r\n    "CorportePhone": "5555555555",\r\n    "Email": "email@email.com",\r\n    "IsActive": true\r\n}\r\n```\r\n\r\n## Response body example\r\n\r\n```json\r\n{\r\n    "Id": 1,\r\n    "Name": "Supplier",\r\n    "CorporateName": "TopStore",\r\n    "StateInscription": "",\r\n    "Cnpj": "33304981001272",\r\n    "Phone": "3333333333",\r\n    "CellPhone": "4444444444",\r\n    "CorportePhone": "5555555555",\r\n    "Email": "email@email.com",\r\n    "IsActive": true\r\n}\r\n```',
  request: {
    headers: z.object({
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
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      supplierId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: "Supplier's unique numerical identifier.",
            in: 'path',
            name: 'supplierId',
            required: true,
            schema: { example: 1, type: 'integer' },
          },
          example: 1,
        }),
    }),
    body: { description: '', content: { 'application/json': { schema: SupplierRequestSchema } } },
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: SupplierResponseSchema } } },
  },
})

export const deleteApiCatalogPvtSupplierSupplierIdRoute = createRoute({
  method: 'delete',
  path: '/api/catalog/pvt/supplier/{supplierId}',
  tags: ['Supplier'],
  summary: 'Delete Supplier',
  description: 'Deletes an existing Supplier.',
  request: {
    headers: z.object({
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
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      supplierId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: "Supplier's unique numerical identifier.",
            in: 'path',
            name: 'supplierId',
            required: true,
            schema: { example: 1, type: 'integer' },
          },
          example: 1,
        }),
    }),
  },
  responses: { 200: { description: 'OK' } },
})

export const getApiCatalogSystemPubCategoryTreeCategoryLevelsRoute = createRoute({
  method: 'get',
  path: '/api/catalog_system/pub/category/tree/{categoryLevels}',
  tags: ['Category'],
  summary: 'Get Category Tree',
  description:
    'Retrieves the Category Tree of your store. Get all the category levels registered in the Catalog or define the level up to which you want to get.  \r\n> 📘 Onboarding guide \r\n>\r\n> Check the new [Catalog onboarding guide](https://developers.vtex.com/vtex-rest-api/docs/catalog-overview). We created this guide to improve the onboarding experience for developers at VTEX. It assembles all documentation on our Developer Portal about Catalog and is organized by focusing on the developer\'s journey. \r\n## Response body example\r\n\r\n```json\r\n[\r\n    {\r\n        "id": 1,\r\n        "name": "Alimentação",\r\n        "hasChildren": true,\r\n        "url": "https://lojadobreno.vtexcommercestable.com.br/alimentacao",\r\n        "children": [\r\n            {\r\n                "id": 6,\r\n                "name": "Bebedouro",\r\n                "hasChildren": false,\r\n                "url": "https://lojadobreno.vtexcommercestable.com.br/alimentacao/bebedouro",\r\n                "children": [],\r\n                "Title": "Bebedouro para Gatos",\r\n                "MetaTagDescription": ""\r\n            },\r\n            {\r\n                "id": 7,\r\n                "name": "Comedouro",\r\n                "hasChildren": false,\r\n                "url": "https://lojadobreno.vtexcommercestable.com.br/alimentacao/comedouro",\r\n                "children": [],\r\n                "Title": "Comedouro para Gatos",\r\n                "MetaTagDescription": ""\r\n            },\r\n            {\r\n                "id": 8,\r\n                "name": "Biscoitos",\r\n                "hasChildren": false,\r\n                "url": "https://lojadobreno.vtexcommercestable.com.br/alimentacao/biscoitos",\r\n                "children": [],\r\n                "Title": "Biscoitos para Gatos",\r\n                "MetaTagDescription": ""\r\n            },\r\n            {\r\n                "id": 9,\r\n                "name": "Petiscos",\r\n                "hasChildren": false,\r\n                "url": "https://lojadobreno.vtexcommercestable.com.br/alimentacao/petiscos",\r\n                "children": [],\r\n                "Title": "Petiscos para Gatos",\r\n                "MetaTagDescription": ""\r\n            },\r\n            {\r\n                "id": 10,\r\n                "name": "Ração Seca",\r\n                "hasChildren": false,\r\n                "url": "https://lojadobreno.vtexcommercestable.com.br/alimentacao/racao-seca",\r\n                "children": [],\r\n                "Title": "Ração Seca para Gatos",\r\n                "MetaTagDescription": ""\r\n            },\r\n            {\r\n                "id": 11,\r\n                "name": "Ração Úmida",\r\n                "hasChildren": false,\r\n                "url": "https://lojadobreno.vtexcommercestable.com.br/alimentacao/racao-umida",\r\n                "children": [],\r\n                "Title": "Ração Úmida para Gatos",\r\n                "MetaTagDescription": ""\r\n            }\r\n        ],\r\n        "Title": "Alimentação para Gatos",\r\n        "MetaTagDescription": ""\r\n    },\r\n    {\r\n        "id": 2,\r\n        "name": "Brinquedos",\r\n        "hasChildren": true,\r\n        "url": "https://lojadobreno.vtexcommercestable.com.br/brinquedos",\r\n        "children": [\r\n            {\r\n                "id": 12,\r\n                "name": "Bolinhas",\r\n                "hasChildren": false,\r\n                "url": "https://lojadobreno.vtexcommercestable.com.br/brinquedos/bolinhas",\r\n                "children": [],\r\n                "Title": "Bolinhas para Gatos",\r\n                "MetaTagDescription": ""\r\n            },\r\n            {\r\n                "id": 13,\r\n                "name": "Ratinhos",\r\n                "hasChildren": false,\r\n                "url": "https://lojadobreno.vtexcommercestable.com.br/brinquedos/ratinhos",\r\n                "children": [],\r\n                "Title": "Ratinhos",\r\n                "MetaTagDescription": ""\r\n            },\r\n            {\r\n                "id": 19,\r\n                "name": "Arranhador para gato",\r\n                "hasChildren": false,\r\n                "url": "https://lojadobreno.vtexcommercestable.com.br/brinquedos/arranhador-para-gato",\r\n                "children": [],\r\n                "Title": "Brinquedo Arranhador para gatos",\r\n                "MetaTagDescription": "Arranhador gatos é indispensável no lar com felinos. Ideais para afiar as unhas e garantir a diversão"\r\n            }\r\n        ],\r\n        "Title": "Brinquedos para Gatos",\r\n        "MetaTagDescription": ""\r\n    }\r\n]\r\n```',
  operationId: 'CategoryTree',
  request: {
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
              'HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.',
            in: 'header',
            name: 'Accept',
            required: true,
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      categoryLevels: z
        .string()
        .openapi({
          param: {
            description: 'Value of the category level you need to retrieve.',
            in: 'path',
            name: 'categoryLevels',
            required: true,
            schema: { example: '1', type: 'string' },
          },
          example: '1',
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z.array(GetCategoryTreeSchema),
          example: [
            {
              MetaTagDescription: '',
              Title: 'Alimentação para Gatos',
              children: [
                {
                  MetaTagDescription: '',
                  Title: 'Bebedouro para Gatos',
                  children: [],
                  hasChildren: false,
                  id: 6,
                  name: 'Bebedouro',
                  url: 'https://lojadobreno.vtexcommercestable.com.br/alimentacao/bebedouro',
                },
                {
                  MetaTagDescription: '',
                  Title: 'Comedouro para Gatos',
                  children: [],
                  hasChildren: false,
                  id: 7,
                  name: 'Comedouro',
                  url: 'https://lojadobreno.vtexcommercestable.com.br/alimentacao/comedouro',
                },
                {
                  MetaTagDescription: '',
                  Title: 'Biscoitos para Gatos',
                  children: [],
                  hasChildren: false,
                  id: 8,
                  name: 'Biscoitos',
                  url: 'https://lojadobreno.vtexcommercestable.com.br/alimentacao/biscoitos',
                },
                {
                  MetaTagDescription: '',
                  Title: 'Petiscos para Gatos',
                  children: [],
                  hasChildren: false,
                  id: 9,
                  name: 'Petiscos',
                  url: 'https://lojadobreno.vtexcommercestable.com.br/alimentacao/petiscos',
                },
                {
                  MetaTagDescription: '',
                  Title: 'Ração Seca para Gatos',
                  children: [],
                  hasChildren: false,
                  id: 10,
                  name: 'Ração Seca',
                  url: 'https://lojadobreno.vtexcommercestable.com.br/alimentacao/racao-seca',
                },
                {
                  MetaTagDescription: '',
                  Title: 'Ração Úmida para Gatos',
                  children: [],
                  hasChildren: false,
                  id: 11,
                  name: 'Ração Úmida',
                  url: 'https://lojadobreno.vtexcommercestable.com.br/alimentacao/racao-umida',
                },
              ],
              hasChildren: true,
              id: 1,
              name: 'Alimentação',
              url: 'https://lojadobreno.vtexcommercestable.com.br/alimentacao',
            },
            {
              MetaTagDescription: '',
              Title: 'Brinquedos para Gatos',
              children: [
                {
                  MetaTagDescription: '',
                  Title: 'Bolinhas para Gatos',
                  children: [],
                  hasChildren: false,
                  id: 12,
                  name: 'Bolinhas',
                  url: 'https://lojadobreno.vtexcommercestable.com.br/brinquedos/bolinhas',
                },
                {
                  MetaTagDescription: '',
                  Title: 'Ratinhos',
                  children: [],
                  hasChildren: false,
                  id: 13,
                  name: 'Ratinhos',
                  url: 'https://lojadobreno.vtexcommercestable.com.br/brinquedos/ratinhos',
                },
                {
                  MetaTagDescription:
                    'Arranhador gatos é indispensável no lar com felinos. Ideais para afiar as unhas e garantir a diversão',
                  Title: 'Brinquedo Arranhador para gatos',
                  children: [],
                  hasChildren: false,
                  id: 19,
                  name: 'Arranhador para gato',
                  url: 'https://lojadobreno.vtexcommercestable.com.br/brinquedos/arranhador-para-gato',
                },
              ],
              hasChildren: true,
              id: 2,
              name: 'Brinquedos',
              url: 'https://lojadobreno.vtexcommercestable.com.br/brinquedos',
            },
          ],
        },
      },
    },
  },
})

export const getApiCatalogSystemPubProductsVariationsProductIdRoute = createRoute({
  method: 'get',
  path: '/api/catalog_system/pub/products/variations/{productId}',
  tags: ['Product'],
  summary: "Get Product's SKUs by Product ID",
  description:
    'Retrieves data about the product and all SKUs related to it by the product\'s ID.\r\n## Response body example\r\n\r\n```json\r\n{\r\n    "productId": 9,\r\n    "name": "Camisa Masculina",\r\n    "salesChannel": "2",\r\n    "available": true,\r\n    "displayMode": "lista",\r\n    "dimensions": [\r\n        "Cores",\r\n        "Tamanho",\r\n        "País de origem",\r\n        "Gênero"\r\n    ],\r\n    "dimensionsInputType": {\r\n        "Cores": "Combo",\r\n        "Tamanho": "Combo",\r\n        "País de origem": "Combo",\r\n        "Gênero": "Combo"\r\n    },\r\n    "dimensionsMap": {\r\n        "Cores": [\r\n            "Amarelo",\r\n            "Azul",\r\n            "Vermelho"\r\n        ],\r\n        "Tamanho": [\r\n            "P",\r\n            "M",\r\n            "G"\r\n        ],\r\n        "País de origem": [\r\n            "Brasil"\r\n        ],\r\n        "Gênero": [\r\n            "Masculino"\r\n        ]\r\n    },\r\n    "skus": [\r\n        {\r\n            "sku": 310118454,\r\n            "skuname": "Amarela - G",\r\n            "dimensions": {\r\n                "Cores": "Amarelo",\r\n                "Tamanho": "G",\r\n                "País de origem": "Brasil",\r\n                "Gênero": "Masculino"\r\n            },\r\n            "available": false,\r\n            "availablequantity": 0,\r\n            "cacheVersionUsedToCallCheckout": null,\r\n            "listPriceFormated": "R$ 0,00",\r\n            "listPrice": 0,\r\n            "taxFormated": "R$ 0,00",\r\n            "taxAsInt": 0,\r\n            "bestPriceFormated": "R$ 9.999.876,00",\r\n            "bestPrice": 999987600,\r\n            "spotPrice": 999987600,\r\n            "installments": 0,\r\n            "installmentsValue": 0,\r\n            "installmentsInsterestRate": null,\r\n            "image": "https://lojadobreno.vteximg.com.br/arquivos/ids/155467-292-292/image-5d7ad76ad1954c53adecab4138319034.jpg?v=637321899584500000",\r\n            "sellerId": "1",\r\n            "seller": "lojadobreno",\r\n            "measures": {\r\n                "cubicweight": 1.0000,\r\n                "height": 5.0000,\r\n                "length": 20.0000,\r\n                "weight": 200.0000,\r\n                "width": 20.0000\r\n            },\r\n            "unitMultiplier": 1.0000,\r\n            "rewardValue": 0\r\n        },\r\n        {\r\n            "sku": 310118455,\r\n            "skuname": "Vermelha - M",\r\n            "dimensions": {\r\n                "Cores": "Vermelho",\r\n                "Tamanho": "M",\r\n                "País de origem": "Brasil",\r\n                "Gênero": "Masculino"\r\n            },\r\n            "available": true,\r\n            "availablequantity": 99999,\r\n            "cacheVersionUsedToCallCheckout": "38395F1AEF59DF5CEAEDE472328145CD_",\r\n            "listPriceFormated": "R$ 0,00",\r\n            "listPrice": 0,\r\n            "taxFormated": "R$ 0,00",\r\n            "taxAsInt": 0,\r\n            "bestPriceFormated": "R$ 20,00",\r\n            "bestPrice": 2000,\r\n            "spotPrice": 2000,\r\n            "installments": 1,\r\n            "installmentsValue": 2000,\r\n            "installmentsInsterestRate": 0,\r\n            "image": "https://lojadobreno.vteximg.com.br/arquivos/ids/155468-292-292/image-601a6099aace48b89d26fc9f22e8e611.jpg?v=637321906602470000",\r\n            "sellerId": "pedrostore",\r\n            "seller": "pedrostore",\r\n            "measures": {\r\n                "cubicweight": 0.4167,\r\n                "height": 5.0000,\r\n                "length": 20.0000,\r\n                "weight": 200.0000,\r\n                "width": 20.0000\r\n            },\r\n            "unitMultiplier": 1.0000,\r\n            "rewardValue": 0\r\n        }\r\n    ]\r\n}\r\n```',
  operationId: 'ProductVariations',
  request: {
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
              'HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.',
            in: 'header',
            name: 'Accept',
            required: true,
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      productId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'Product’s unique numerical identifier.',
            in: 'path',
            name: 'productId',
            required: true,
            schema: { example: 1, type: 'integer' },
            style: 'simple',
          },
          example: 1,
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
              available: z
                .boolean()
                .exactOptional()
                .openapi({
                  description: 'Defines if the product is available (`true`) or not (`false`).',
                }),
              dimensions: z
                .array(z.string().openapi({ description: 'Name of the SKU specification.' }))
                .exactOptional()
                .openapi({ description: 'Lists SKU specifications.' }),
              dimensionsInputType: z
                .record(z.string(), z.string())
                .exactOptional()
                .openapi({
                  description:
                    'Lists SKU specifications and their field type, in the following format: `"{specificationName}":"{fieldType}"`.',
                }),
              dimensionsMap: z
                .record(z.string(), z.array(z.any()))
                .exactOptional()
                .openapi({
                  description: 'Lists SKU specifications and their possible values inside arrays.',
                }),
              displayMode: z
                .string()
                .exactOptional()
                .openapi({ description: 'Defines the mannner SKUs are displayed.' }),
              name: z.string().exactOptional().openapi({ description: 'Product name.' }),
              productId: z
                .int()
                .exactOptional()
                .openapi({ description: 'Product’s unique numerical identifier.' }),
              salesChannel: z.string().exactOptional().openapi({ description: 'Trade policy ID.' }),
              skus: z
                .array(
                  z
                    .object({
                      available: z
                        .boolean()
                        .exactOptional()
                        .openapi({
                          description: 'Defines if the SKU is available (`true`) or not (`false`).',
                        }),
                      availablequantity: z
                        .int()
                        .exactOptional()
                        .openapi({ description: 'Available quantity of the SKU in stock.' }),
                      bestPrice: z.int().exactOptional().openapi({ description: 'Best price.' }),
                      bestPriceFormated: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description: 'Best price formatted according to the valid currency.',
                        }),
                      cacheVersionUsedToCallCheckout: z
                        .string()
                        .nullable()
                        .exactOptional()
                        .openapi({ description: 'Cache version used to call Checkout.' }),
                      dimensions: z
                        .record(z.string(), z.string())
                        .exactOptional()
                        .openapi({
                          description: 'Lists SKU specifications and their respective values.',
                        }),
                      image: z.string().exactOptional().openapi({ description: 'SKU image URL.' }),
                      installments: z
                        .int()
                        .exactOptional()
                        .openapi({ description: 'Number of installments.' }),
                      installmentsInsterestRate: z
                        .int()
                        .nullable()
                        .exactOptional()
                        .openapi({ description: 'Interest rate of installments.' }),
                      installmentsValue: z
                        .int()
                        .exactOptional()
                        .openapi({ description: 'Value of installments.' }),
                      listPrice: z.int().exactOptional().openapi({ description: 'List price.' }),
                      listPriceFormated: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description: 'List price formatted according to the valid currency.',
                        }),
                      measures: z
                        .object({
                          cubicweight: z
                            .number()
                            .exactOptional()
                            .openapi({ description: 'Cubic weight.' }),
                          height: z.number().exactOptional().openapi({ description: 'Height.' }),
                          length: z.number().exactOptional().openapi({ description: 'Length.' }),
                          weight: z.number().exactOptional().openapi({ description: 'Weight.' }),
                          width: z.number().exactOptional().openapi({ description: 'Width.' }),
                        })
                        .exactOptional()
                        .openapi({ description: 'SKU measures.', required: [] }),
                      rewardValue: z
                        .int()
                        .exactOptional()
                        .openapi({ description: 'SKU reward value for rewards program.' }),
                      sellerId: z.string().exactOptional().openapi({ description: 'Seller ID.' }),
                      sku: z.int().exactOptional().openapi({ description: 'SKU ID.' }),
                      skuname: z.string().exactOptional().openapi({ description: 'SKU Name.' }),
                      spotPrice: z.int().exactOptional().openapi({ description: 'Spot price.' }),
                      taxAsInt: z.int().exactOptional().openapi({ description: 'Tax value.' }),
                      taxFormated: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description: 'Tax value formatted according to the valid currency.',
                        }),
                      unitMultiplier: z
                        .number()
                        .exactOptional()
                        .openapi({ description: 'SKU Unit Multiplier.' }),
                    })
                    .openapi({
                      description: 'Object containing information about a specific SKU.',
                      required: [],
                    }),
                )
                .exactOptional()
                .openapi({ description: "Array containing information about the product's SKUs." }),
            })
            .openapi({
              description: 'Response body.',
              example: {
                available: true,
                dimensions: ['Cores', 'Tamanho', 'País de origem', 'Gênero'],
                dimensionsInputType: {
                  Cores: 'Combo',
                  Gênero: 'Combo',
                  'País de origem': 'Combo',
                  Tamanho: 'Combo',
                },
                dimensionsMap: {
                  Cores: ['Amarelo', 'Azul', 'Vermelho'],
                  Gênero: ['Masculino'],
                  'País de origem': ['Brasil'],
                  Tamanho: ['P', 'M', 'G'],
                },
                displayMode: 'lista',
                name: 'Camisa Masculina',
                productId: 9,
                salesChannel: '2',
                skus: [
                  {
                    available: false,
                    availablequantity: 0,
                    bestPrice: 999987600,
                    bestPriceFormated: 'R$ 9.999.876,00',
                    cacheVersionUsedToCallCheckout: null,
                    dimensions: {
                      Cores: 'Amarelo',
                      Gênero: 'Masculino',
                      'País de origem': 'Brasil',
                      Tamanho: 'G',
                    },
                    image:
                      'https://lojadobreno.vteximg.com.br/arquivos/ids/155467-292-292/image-5d7ad76ad1954c53adecab4138319034.jpg?v=637321899584500000',
                    installments: 0,
                    installmentsInsterestRate: null,
                    installmentsValue: 0,
                    listPrice: 0,
                    listPriceFormated: 'R$ 0,00',
                    measures: { cubicweight: 1, height: 5, length: 20, weight: 200, width: 20 },
                    rewardValue: 0,
                    seller: 'lojadobreno',
                    sellerId: '1',
                    sku: 310118454,
                    skuname: 'Amarela - G',
                    spotPrice: 999987600,
                    taxAsInt: 0,
                    taxFormated: 'R$ 0,00',
                    unitMultiplier: 1,
                  },
                  {
                    available: true,
                    availablequantity: 99999,
                    bestPrice: 2000,
                    bestPriceFormated: 'R$ 20,00',
                    cacheVersionUsedToCallCheckout: '38395F1AEF59DF5CEAEDE472328145CD_',
                    dimensions: {
                      Cores: 'Vermelho',
                      Gênero: 'Masculino',
                      'País de origem': 'Brasil',
                      Tamanho: 'M',
                    },
                    image:
                      'https://lojadobreno.vteximg.com.br/arquivos/ids/155468-292-292/image-601a6099aace48b89d26fc9f22e8e611.jpg?v=637321906602470000',
                    installments: 1,
                    installmentsInsterestRate: 0,
                    installmentsValue: 2000,
                    listPrice: 0,
                    listPriceFormated: 'R$ 0,00',
                    measures: {
                      cubicweight: 0.4167,
                      height: 5,
                      length: 20,
                      weight: 200,
                      width: 20,
                    },
                    rewardValue: 0,
                    seller: 'pedrostore',
                    sellerId: 'pedrostore',
                    sku: 310118455,
                    skuname: 'Vermelha - M',
                    spotPrice: 2000,
                    taxAsInt: 0,
                    taxFormated: 'R$ 0,00',
                    unitMultiplier: 1,
                  },
                ],
              },
              required: [],
            }),
        },
      },
    },
  },
})

export const getApiCatalogSystemPubSaleschannelSalesChannelIdRoute = createRoute({
  method: 'get',
  path: '/api/catalog_system/pub/saleschannel/{salesChannelId}',
  tags: ['Sales Channel'],
  summary: 'Get Sales Channel by ID',
  description:
    'Retrieves a specific sales channel by its ID. \r\n\r\n## Response body example\r\n\r\n```json\r\n{\r\n    "Id": 1,\r\n    "Name": "Loja Principal",\r\n    "IsActive": true,\r\n    "ProductClusterId": null,\r\n    "CountryCode": "BRA",\r\n    "CultureInfo": "pt-BR",\r\n    "TimeZone": "E. South America Standard Time",\r\n    "CurrencyCode": "BRL",\r\n    "CurrencySymbol": "R$",\r\n    "CurrencyLocale": 1046,\r\n    "CurrencyFormatInfo": {\r\n        "CurrencyDecimalDigits": 1,\r\n        "CurrencyDecimalSeparator": ",",\r\n        "CurrencyGroupSeparator": ".",\r\n        "CurrencyGroupSize": 3,\r\n        "StartsWithCurrencySymbol": true\r\n    },\r\n    "Origin": null,\r\n    "Position": 2,\r\n    "ConditionRule": null,\r\n    "CurrencyDecimalDigits": 1\r\n}\r\n```',
  operationId: 'SalesChannelbyId',
  request: {
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
              'HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.',
            in: 'header',
            name: 'Accept',
            required: true,
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      salesChannelId: z
        .string()
        .openapi({
          param: {
            description: '',
            in: 'path',
            name: 'salesChannelId',
            required: true,
            schema: { example: '1', type: 'string' },
            style: 'simple',
          },
          example: '1',
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
              ConditionRule: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({
                  description: 'Defines what is the conditional rule to activate de Sales Channel.',
                  example: 'approved=true',
                  title: 'ConditionRule',
                }),
              CountryCode: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Country Code in ISO 3166-1 alfa-3 Standard.',
                  example: 'BRA',
                  title: 'Id',
                }),
              CultureInfo: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Language Country code in LCIDstring Standard.',
                  example: 'pt-BR',
                  title: 'CultureInfo',
                }),
              CurrencyCode: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Currency Code in ISO 4217 standard.',
                  example: 'BRL',
                  title: 'CurrencyCode',
                }),
              CurrencyDecimalDigits: z
                .int()
                .exactOptional()
                .openapi({
                  description: 'Quantity of Currency Decimal Digits.',
                  example: 1,
                  title: 'CurrencyDecimalDigits',
                }),
              CurrencyFormatInfo: z
                .object({
                  CurrencyDecimalDigits: z
                    .int()
                    .exactOptional()
                    .openapi({
                      description: 'Quantity of Currency Decimal Digits.',
                      example: 1,
                      title: 'CurrencyDecimalDigits',
                    }),
                  CurrencyDecimalSeparator: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'Defines which Currency Decimal Separator will be applied.',
                      example: ',',
                      title: 'CurrencyDecimalSeparator',
                    }),
                  CurrencyGroupSeparator: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'Defines which Currency Group Separator will be applied.',
                      example: '.',
                      title: 'CurrencyGroupSeparator',
                    }),
                  CurrencyGroupSize: z
                    .int()
                    .exactOptional()
                    .openapi({
                      description: 'Define how many characters will be grouped.',
                      example: 3,
                      title: 'CurrencyGroupSize',
                    }),
                  StartsWithCurrencySymbol: z
                    .boolean()
                    .exactOptional()
                    .openapi({
                      description:
                        'Defines if all prices will be initiated with Currency Symbol (`true`) or not (`false`).',
                      example: true,
                      title: 'StartsWithCurrencySymbol',
                    }),
                })
                .exactOptional()
                .openapi({
                  description: 'Object with currency format.',
                  title: 'CurrencyFormatInfo',
                  required: [],
                }),
              CurrencyLocale: z
                .int()
                .exactOptional()
                .openapi({
                  description: 'Currency Locale Code in LCID standard.',
                  example: 1046,
                  title: 'CurrencyLocale',
                }),
              CurrencySymbol: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Currency symbol.',
                  example: 'R$',
                  title: 'CurrencySymbol',
                }),
              Id: z
                .int()
                .exactOptional()
                .openapi({
                  description: 'Sales Channel unique identifier.',
                  example: 1,
                  title: 'Id',
                }),
              IsActive: z
                .boolean()
                .exactOptional()
                .openapi({
                  description: 'Defines if the Sales Channel is active (`true`) or not (`false`).',
                  title: 'IsActive',
                }),
              Name: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Sales Channel name.',
                  example: 'Loja Principal',
                  title: 'Id',
                }),
              Origin: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({
                  description: 'Origin of products in the Sales Channel.',
                  example: null,
                  title: 'Origin',
                }),
              Position: z
                .int()
                .nullable()
                .exactOptional()
                .openapi({
                  description: 'Defines the position on index.',
                  example: 1,
                  title: 'Position',
                }),
              ProductClusterId: z
                .int()
                .nullable()
                .exactOptional()
                .openapi({
                  description:
                    'Product Cluster ID, if the Sales Channel has releated Product Cluster.',
                  example: null,
                  title: 'ProductClusterId',
                }),
              TimeZone: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Name of Time Zone.',
                  example: 'E. South America Standard Time',
                  title: 'TimeZone',
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const postApiCatalogSystemPubSkuStockkeepingunitidsbyrefidsRoute = createRoute({
  method: 'post',
  path: '/api/catalog_system/pub/sku/stockkeepingunitidsbyrefids',
  tags: ['SKU'],
  summary: 'Retrieve SKU ID list by Reference ID list',
  description:
    'Receives a list of Reference IDs and returns a list with the corresponding SKU IDs.\r\n\r\n>⚠️ The list of Reference IDs in the request body cannot have repeated Reference IDs, or the API will return an error 500. \r\n\r\n## Request body example\r\n\r\n```json\r\n[\r\n    "123",\r\n    "D25133K-B2",\r\n    "14-556",\r\n    "DCF880L2-BR"\r\n]\r\n```\r\n\r\n### Response body example\r\n\r\n```json\r\n{\r\n    "123": "435",\r\n    "D25133K-B2": "4351",\r\n    "14-556": "3155",\r\n    "DCF880L2-BR": "4500"\r\n}\r\n```',
  operationId: 'SkuIdlistbyRefIdlist',
  request: {
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
              'HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.',
            in: 'header',
            name: 'Accept',
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
          schema: z
            .array(
              z
                .string()
                .openapi({ description: 'SKU Reference ID.', example: '799', title: 'RefId' }),
            )
            .openapi({
              description:
                "Array with SKU reference IDs from which you need to retrieve the related SKU IDs. Don't repeat values in the array, or the API will return an error 500.",
              required: ['RefId'],
              title: 'body',
            }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .record(z.string(), z.string().openapi({ description: 'Reference ID.' }))
            .openapi({
              description:
                'Object composed by a list of SKU IDs related to each Reference ID list searched. Structure: "{RefId}": "{SkuId}".',
            }),
          example: { '123': '435', '14-556': '3155', 'D25133K-B2': '4351', 'DCF880L2-BR': '4500' },
        },
      },
      headers: z.object({
        'Cache-Control': z
          .string()
          .exactOptional()
          .openapi({ example: 'no-cache', param: { required: false } }),
        Connection: z
          .string()
          .exactOptional()
          .openapi({ example: 'keep-alive', param: { required: false } }),
        'Content-Encoding': z
          .string()
          .exactOptional()
          .openapi({ example: 'gzip', param: { required: false } }),
        'Content-Length': z
          .string()
          .exactOptional()
          .openapi({ example: '189', param: { required: false } }),
        Date: z
          .string()
          .exactOptional()
          .openapi({ example: 'Thu, 31 May 2018 14:45:26 GMT', param: { required: false } }),
        Expires: z
          .string()
          .exactOptional()
          .openapi({ example: '-1', param: { required: false } }),
        Pragma: z
          .string()
          .exactOptional()
          .openapi({ example: 'no-cache', param: { required: false } }),
        Server: z
          .string()
          .exactOptional()
          .openapi({ example: 'Microsoft-IIS/8.5', param: { required: false } }),
        Vary: z
          .string()
          .exactOptional()
          .openapi({ example: 'Accept-Encoding', param: { required: false } }),
        'X-AspNet-Version': z
          .string()
          .exactOptional()
          .openapi({ example: '4.0.30319', param: { required: false } }),
        'X-Powered-By': z
          .string()
          .exactOptional()
          .openapi({ example: 'ASP.NET', param: { required: false } }),
        'X-VTEX-Janus-Router-Backend-App': z
          .string()
          .exactOptional()
          .openapi({ example: 'prtapi-v1.4.974-stable+738', param: { required: false } }),
        no: z
          .string()
          .exactOptional()
          .openapi({ example: '-86FN1DUJ89D', param: { required: false } }),
        p3p: z
          .string()
          .exactOptional()
          .openapi({
            example: 'policyref="/w3c/p3p.xml",CP="ADMa OUR NOR CNT NID DSP NOI COR"',
            param: { required: false },
          }),
        powered: z
          .string()
          .exactOptional()
          .openapi({ example: 'vtex', param: { required: false } }),
        'x-vtex-operation-id': z
          .string()
          .exactOptional()
          .openapi({ example: '0e0702f1-95e7-4e2b-97cf-0a370aa78abb', param: { required: false } }),
      }),
    },
    500: { description: 'Internal Server Error' },
  },
})

export const getApiCatalogSystemPubSpecificationFieldListByCategoryIdCategoryIdRoute = createRoute({
  method: 'get',
  path: '/api/catalog_system/pub/specification/field/listByCategoryId/{categoryId}',
  tags: ['Category Specification'],
  summary: 'Get Specifications By Category ID',
  description:
    'Retrieves all specifications from a category by its ID.\r\n\r\n## Response body example\r\n\r\n```json\r\n[\r\n    {\r\n        "Name": "Specification A",\r\n        "CategoryId": 1,\r\n        "FieldId": 33,\r\n        "IsActive": true,\r\n        "IsStockKeepingUnit": false\r\n    },\r\n    {\r\n        "Name": "Specification B",\r\n        "CategoryId": 1,\r\n        "FieldId": 34,\r\n        "IsActive": true,\r\n        "IsStockKeepingUnit": false\r\n    },\r\n    {\r\n        "Name": "Specification C",\r\n        "CategoryId": 1,\r\n        "FieldId": 35,\r\n        "IsActive": false,\r\n        "IsStockKeepingUnit": false\r\n    }\r\n]\r\n```',
  operationId: 'SpecificationsByCategoryId',
  request: {
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
              'HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.',
            in: 'header',
            name: 'Accept',
            required: true,
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      categoryId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'Category ID.',
            in: 'path',
            name: 'categoryId',
            required: true,
            schema: { example: 1, type: 'integer' },
            style: 'simple',
          },
          example: 1,
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: CategorySpecificationSchema,
          example: [
            {
              CategoryId: 1,
              FieldId: 33,
              IsActive: true,
              IsStockKeepingUnit: false,
              Name: 'Specification A',
            },
            {
              CategoryId: 1,
              FieldId: 34,
              IsActive: true,
              IsStockKeepingUnit: false,
              Name: 'Specification B',
            },
            {
              CategoryId: 1,
              FieldId: 35,
              IsActive: false,
              IsStockKeepingUnit: false,
              Name: 'Specification C',
            },
          ],
        },
      },
    },
  },
})

export const getApiCatalogSystemPubSpecificationFieldListTreeByCategoryIdCategoryIdRoute =
  createRoute({
    method: 'get',
    path: '/api/catalog_system/pub/specification/field/listTreeByCategoryId/{categoryId}',
    tags: ['Category Specification'],
    summary: 'Get Specifications Tree By Category ID',
    description:
      'Lists all specifications including the current category and the level zero specifications from a category by its ID. \r\n\r\n## Response body example\r\n\r\n```json\r\n[\r\n    {\r\n        "Name": "Specification A",\r\n        "CategoryId": 1,\r\n        "FieldId": 33,\r\n        "IsActive": true,\r\n        "IsStockKeepingUnit": false\r\n    },\r\n    {\r\n        "Name": "Specification B",\r\n        "CategoryId": 1,\r\n        "FieldId": 34,\r\n        "IsActive": true,\r\n        "IsStockKeepingUnit": false\r\n    },\r\n    {\r\n        "Name": "Specification C",\r\n        "CategoryId": 1,\r\n        "FieldId": 35,\r\n        "IsActive": false,\r\n        "IsStockKeepingUnit": false\r\n    }\r\n]\r\n```',
    operationId: 'SpecificationsTreeByCategoryId',
    request: {
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
                'HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.',
              in: 'header',
              name: 'Accept',
              required: true,
              schema: { default: 'application/json', type: 'string' },
              style: 'simple',
            },
          }),
      }),
      params: z.object({
        categoryId: z
          .preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.int(),
          )
          .openapi({
            param: {
              description: 'Category ID.',
              in: 'path',
              name: 'categoryId',
              required: true,
              schema: { example: 1, type: 'integer' },
              style: 'simple',
            },
            example: 1,
          }),
      }),
    },
    responses: {
      200: {
        description: 'OK',
        content: {
          'application/json': {
            schema: CategorySpecificationSchema,
            example: [
              {
                CategoryId: 1,
                FieldId: 33,
                IsActive: true,
                IsStockKeepingUnit: false,
                Name: 'Specification A',
              },
              {
                CategoryId: 1,
                FieldId: 34,
                IsActive: true,
                IsStockKeepingUnit: false,
                Name: 'Specification B',
              },
              {
                CategoryId: 1,
                FieldId: 35,
                IsActive: false,
                IsStockKeepingUnit: false,
                Name: 'Specification C',
              },
            ],
          },
        },
      },
    },
  })

export const getApiCatalogSystemPubSpecificationFieldGetFieldIdRoute = createRoute({
  method: 'get',
  path: '/api/catalog_system/pub/specification/fieldGet/{fieldId}',
  tags: ['Specification Field'],
  summary: 'Get Specification Field',
  description:
    'Retrieves details from a specification field by this field\'s ID. \r\n>⚠️ This is a legacy endpoint. We recommend using [Get Specification](https://developers.vtex.com/vtex-rest-api/reference/get_api-catalog-pvt-specification-specificationid) instead.\r\n\r\n## Response body example\r\n\r\n```json\r\n{\r\n    "Name": "Material",\r\n    "CategoryId": 4,\r\n    "FieldId": 88,\r\n    "IsActive": true,\r\n    "IsRequired": true,\r\n    "FieldTypeId": 1,\r\n    "FieldTypeName": "Texto",\r\n    "FieldValueId": null,\r\n    "Description": "Composition of the product.",\r\n    "IsStockKeepingUnit": false,\r\n    "IsFilter": true,\r\n    "IsOnProductDetails": false,\r\n    "Position": 1,\r\n    "IsWizard": false,\r\n    "IsTopMenuLinkActive": false,\r\n    "IsSideMenuLinkActive": true,\r\n    "DefaultValue": null,\r\n    "FieldGroupId": 20,\r\n    "FieldGroupName": "Clothes specifications"\r\n}\r\n```\r\n\r\n',
  operationId: 'SpecificationsField',
  request: {
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
              'HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.',
            in: 'header',
            name: 'Accept',
            required: true,
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      fieldId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'Specification Field ID.',
            in: 'path',
            name: 'fieldId',
            required: true,
            schema: { example: 88, type: 'integer' },
            style: 'simple',
          },
          example: 88,
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
              DefaultValue: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({ description: 'Specification default value.' }),
              Description: z.string().nullable().exactOptional().openapi({ deprecated: true }),
              FieldGroupId: z
                .int()
                .exactOptional()
                .openapi({
                  description:
                    'ID of the group of specifications that contains the new specification.',
                }),
              FieldGroupName: z
                .string()
                .exactOptional()
                .openapi({ description: 'Specification Field Group Name.' }),
              FieldId: z.int().exactOptional().openapi({ description: 'Specification field ID.' }),
              FieldTypeId: z
                .int()
                .exactOptional()
                .openapi({
                  description:
                    'Field Type ID can be `1 - Text`, `2 - Multi-Line Text`, `4 - Number`, `5 - Combo`, `6 - Radio`, `7 - Checkbox`, `8 - Indexed Text`, `9 - Indexed Multi-Line Text`.',
                  title: 'FieldTypeId',
                }),
              FieldTypeName: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Field Type name, which can be `Text`, `Multi-Line Text`, `Number`, `Combo`, `Radio`, `Checkbox`, `Indexed Text` or `Indexed Multi-Line Text`.',
                  title: 'FieldTypeName',
                }),
              FieldValueId: z
                .int()
                .nullable()
                .exactOptional()
                .openapi({ description: 'Specification value ID.' }),
              IsActive: z
                .boolean()
                .exactOptional()
                .openapi({ description: 'Enable (`true`) or disable (`false`) specification.' }),
              IsFilter: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Store Framework - Deprecated.\r\nLegacy CMS Portal - To allow the specification to be used as a facet (filter) on the search navigation bar.\r\n',
                }),
              IsOnProductDetails: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Store Framework - Deprecated.\r\nLegacy CMS Portal -If specification is visible on the product page.\r\n',
                }),
              IsRequired: z
                .boolean()
                .exactOptional()
                .openapi({
                  description: 'Makes the specification mandatory (`true`) or optional (`false`).',
                }),
              IsSideMenuLinkActive: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Store Framework - Deprecated.\r\nLegacy CMS Portal - To make the specification field clickable in the search navigation bar.\r\n',
                }),
              IsStockKeepingUnit: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'If `true`, it will be added as a SKU specification. If `false`, it will be added as a product specification field.',
                }),
              IsTopMenuLinkActive: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    "Store Framework - Deprecated.\r\nLegacy CMS Portal - To make the specification visible in the store's upper menu.\r\n",
                }),
              IsWizard: z.boolean().nullable().exactOptional().openapi({ deprecated: true }),
              Name: z
                .string()
                .exactOptional()
                .openapi({ description: 'Specification field name.' }),
              Position: z
                .int()
                .exactOptional()
                .openapi({
                  description:
                    'Store Framework - Deprecated.\r\nLegacy CMS Portal - This position number is used in ordering the specifications both in the navigation menu and in the specification listing on the product page.\r\n',
                }),
            })
            .openapi({ title: '', required: [] }),
          example: {
            CategoryId: 4,
            DefaultValue: null,
            Description: 'Composition of the product.',
            FieldGroupId: 20,
            FieldGroupName: 'Clothes specifications',
            FieldId: 88,
            FieldTypeId: 1,
            FieldTypeName: 'Texto',
            FieldValueId: null,
            IsActive: true,
            IsFilter: true,
            IsOnProductDetails: false,
            IsRequired: true,
            IsSideMenuLinkActive: true,
            IsStockKeepingUnit: false,
            IsTopMenuLinkActive: false,
            IsWizard: false,
            Name: 'Material',
            Position: 1,
          },
        },
      },
    },
  },
})

export const getApiCatalogSystemPubSpecificationFieldvalueFieldIdRoute = createRoute({
  method: 'get',
  path: '/api/catalog_system/pub/specification/fieldvalue/{fieldId}',
  tags: ['Specification Field Value'],
  summary: 'Get Specification Values By Field ID',
  description:
    'Gets a list of all specification values from a Specification Field by this field\'s ID. \r\n\r\n## Response body example\r\n\r\n```json\r\n[\r\n    {\r\n        "FieldValueId": 52,\r\n        "Value": "0 a 6 meses",\r\n        "IsActive": true,\r\n        "Position": 1\r\n    },\r\n    {\r\n        "FieldValueId": 53,\r\n        "Value": "1 a 2 anos",\r\n        "IsActive": true,\r\n        "Position": 4\r\n    },\r\n    {\r\n        "FieldValueId": 54,\r\n        "Value": "3 a 4 anos",\r\n        "IsActive": true,\r\n        "Position": 3\r\n    },\r\n    {\r\n        "FieldValueId": 55,\r\n        "Value": "5 a 6 anos",\r\n        "IsActive": true,\r\n        "Position": 2\r\n    },\r\n    {\r\n        "FieldValueId": 56,\r\n        "Value": "7 a 8 anos",\r\n        "IsActive": true,\r\n        "Position": 5\r\n    },\r\n    {\r\n        "FieldValueId": 57,\r\n        "Value": "9 a 10 anos",\r\n        "IsActive": true,\r\n        "Position": 6\r\n    },\r\n    {\r\n        "FieldValueId": 58,\r\n        "Value": "Acima de 10 anos",\r\n        "IsActive": true,\r\n        "Position": 7\r\n    }\r\n]\r\n```',
  operationId: 'SpecificationsValuesByFieldId',
  request: {
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
              'HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.',
            in: 'header',
            name: 'Accept',
            required: true,
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      fieldId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'Specification Field ID.',
            in: 'path',
            name: 'fieldId',
            required: true,
            schema: { example: 34, type: 'integer' },
            style: 'simple',
          },
          example: 34,
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z.array(GetSpecFieldValueSchema),
          example: [
            { FieldValueId: 52, IsActive: true, Position: 1, Value: '0 a 6 meses' },
            { FieldValueId: 53, IsActive: true, Position: 4, Value: '1 a 2 anos' },
            { FieldValueId: 54, IsActive: true, Position: 3, Value: '3 a 4 anos' },
            { FieldValueId: 55, IsActive: true, Position: 2, Value: '5 a 6 anos' },
            { FieldValueId: 56, IsActive: true, Position: 5, Value: '7 a 8 anos' },
            { FieldValueId: 57, IsActive: true, Position: 6, Value: '9 a 10 anos' },
            { FieldValueId: 58, IsActive: true, Position: 7, Value: 'Acima de 10 anos' },
          ],
        },
      },
    },
  },
})

export const getApiCatalogSystemPubSpecificationGroupGetGroupIdRoute = createRoute({
  method: 'get',
  path: '/api/catalog_system/pub/specification/groupGet/{groupId}',
  tags: ['Specification Group'],
  summary: 'Get Specification Group',
  description:
    'Retrieves details from a specification group by the ID of the group. \r\n## Response body example\r\n\r\n```json\r\n{\r\n  "CategoryId": 1,\r\n  "Id": 6,\r\n  "Name": "Sizes",\r\n  "Position": 3\r\n}\r\n```',
  operationId: 'SpecificationsGroupGet',
  request: {
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
              'HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.',
            in: 'header',
            name: 'Accept',
            required: true,
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      groupId: z
        .string()
        .openapi({
          param: {
            description: 'Specification Group ID.',
            in: 'path',
            name: 'groupId',
            required: true,
            schema: { example: '6', type: 'string' },
            style: 'simple',
          },
          example: '6',
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: SpecificationsGroupSchema,
          example: { CategoryId: 1, Id: 6, Name: 'Sizes', Position: 3 },
        },
      },
    },
  },
})

export const getApiCatalogSystemPvtBrandListRoute = createRoute({
  method: 'get',
  path: '/api/catalog_system/pvt/brand/list',
  tags: ['Brand'],
  summary: 'Get Brand List',
  description:
    'Retrieves all Brands registered in the store\'s Catalog. \r\n>⚠️ This route\'s response is limited to 20k results. If you need to obtain more results, please use the [Get Brand List](https://developers.vtex.com/vtex-rest-api/reference/catalog-api-get-brand-list) endpoint instead to get a paginated response. \r\n## Response body example\r\n\r\n```json\r\n[\r\n  {\r\n    "id": 9280,\r\n    "name": "Brand",\r\n    "isActive": true,\r\n    "title": "Brand",\r\n    "metaTagDescription": "Brand",\r\n    "imageUrl": null\r\n  },\r\n  {\r\n    "id": 2000000,\r\n    "name": "Orma Carbon",\r\n    "isActive": true,\r\n    "title": "Orma Carbon",\r\n    "metaTagDescription": "Orma Carbon",\r\n    "imageUrl": null\r\n  },\r\n  {\r\n    "id": 2000001,\r\n    "name": "Pedigree",\r\n    "isActive": true,\r\n    "title": "Pedigree",\r\n    "metaTagDescription": "",\r\n    "imageUrl": null\r\n  }\r\n]\r\n```',
  operationId: 'BrandList',
  request: {
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
              'HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.',
            in: 'header',
            name: 'Accept',
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
            .array(BrandGetSchema)
            .openapi({ description: 'An array with all brands registered in the store.' }),
          example: [
            {
              id: 9280,
              imageUrl: null,
              isActive: true,
              metaTagDescription: 'Brand',
              name: 'Brand',
              title: 'Brand',
            },
            {
              id: 2000000,
              imageUrl: null,
              isActive: true,
              metaTagDescription: 'Orma Carbon',
              name: 'Orma Carbon',
              title: 'Orma Carbon',
            },
            {
              id: 2000001,
              imageUrl: null,
              isActive: true,
              metaTagDescription: '',
              name: 'Pedigree',
              title: 'Pedigree',
            },
          ],
        },
      },
    },
  },
})

export const getApiCatalogSystemPvtBrandPagedlistRoute = createRoute({
  method: 'get',
  path: '/api/catalog_system/pvt/brand/pagedlist',
  tags: ['Brand'],
  summary: 'Get Brand List Per Page',
  description:
    'Retrieves all Brands registered in the store\'s Catalog by page number.\r\n## Response body example\r\n\r\n```json\r\n{\r\n  "items": [\r\n    {\r\n      "id": 2000000,\r\n      "name": "Farm",\r\n      "isActive": true,\r\n      "title": "Farm",\r\n      "metaTagDescription": "Farm",\r\n      "imageUrl": null\r\n    },\r\n    {\r\n      "id": 2000001,\r\n      "name": "Adidas",\r\n      "isActive": true,\r\n      "title": "",\r\n      "metaTagDescription": "",\r\n      "imageUrl": null\r\n    },\r\n    {\r\n      "id": 2000002,\r\n      "name": "Brastemp",\r\n      "isActive": true,\r\n      "title": "Brastemp",\r\n      "metaTagDescription": "Brastemp",\r\n      "imageUrl": null\r\n    }\r\n  ],\r\n    "paging": {\r\n      "page": 1,\r\n        "perPage": 3,\r\n          "total": 6,\r\n            "pages": 2\r\n    }\r\n}\r\n```',
  operationId: 'BrandListPerPage',
  request: {
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
              'HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.',
            in: 'header',
            name: 'Accept',
            required: true,
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
    }),
    query: z.object({
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
        .openapi({
          param: {
            description: 'Quantity of brands per page.',
            in: 'query',
            name: 'pageSize',
            required: true,
            schema: { example: 5, type: 'integer' },
          },
          example: 5,
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
        .openapi({
          param: {
            description: 'Page number of the brand list.',
            in: 'query',
            name: 'page',
            required: true,
            schema: { example: 1, type: 'integer' },
          },
          example: 1,
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
              items: z
                .array(BrandGetSchema)
                .openapi({
                  description: "Array of objects with information of the store's brands.",
                  title: 'items',
                }),
              paging: z
                .object({
                  page: z
                    .int()
                    .openapi({
                      description: 'Page number of the brand list.',
                      example: 1,
                      title: 'page',
                    }),
                  pages: z
                    .int()
                    .openapi({ description: 'Total number of pages.', example: 2, title: 'pages' }),
                  perPage: z
                    .int()
                    .openapi({
                      description: 'Quantity of brands per page.',
                      example: 3,
                      title: 'perPage',
                    }),
                  total: z
                    .int()
                    .openapi({
                      description: 'Total of brands in the store.',
                      example: 6,
                      title: 'total',
                    }),
                })
                .openapi({
                  description: 'Object with pagination information.',
                  example: { page: 1, pages: 2, perPage: 3, total: 6 },
                  required: ['page', 'perPage', 'total', 'pages'],
                  title: 'paging',
                }),
            })
            .openapi({ required: ['items', 'paging'], title: '' }),
          example: {
            items: [
              {
                id: 2000000,
                imageUrl: null,
                isActive: true,
                metaTagDescription: 'Farm',
                name: 'Farm',
                title: 'Farm',
              },
              {
                id: 2000001,
                imageUrl: null,
                isActive: true,
                metaTagDescription: '',
                name: 'Adidas',
                title: '',
              },
              {
                id: 2000002,
                imageUrl: null,
                isActive: true,
                metaTagDescription: 'Brastemp',
                name: 'Brastemp',
                title: 'Brastemp',
              },
            ],
            paging: { page: 1, pages: 2, perPage: 3, total: 6 },
          },
        },
      },
    },
  },
})

export const getApiCatalogSystemPvtBrandBrandIdRoute = createRoute({
  method: 'get',
  path: '/api/catalog_system/pvt/brand/{brandId}',
  tags: ['Brand'],
  summary: 'Get Brand',
  description:
    'Retrieves a specific Brand by its ID.\r\n## Response body example\r\n\r\n```json\r\n{\r\n  "id": 7000000,\r\n  "name": "Pedigree",\r\n  "isActive": true,\r\n  "title": "Pedigree",\r\n  "metaTagDescription": "Pedigree",\r\n  "imageUrl": null\r\n}\r\n```',
  operationId: 'Brand',
  request: {
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
              'HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.',
            in: 'header',
            name: 'Accept',
            required: true,
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      brandId: z
        .string()
        .openapi({
          param: {
            description: 'Brand ID.',
            in: 'path',
            name: 'brandId',
            required: true,
            schema: { example: '123', type: 'string' },
            style: 'simple',
          },
          example: '123',
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: BrandGetSchema,
          example: {
            id: 7000000,
            imageUrl: null,
            isActive: true,
            metaTagDescription: 'Pedigree',
            name: 'Pedigree',
            title: 'Pedigree',
          },
        },
      },
    },
  },
})

export const getApiCatalogSystemPvtCollectionSearchRoute = createRoute({
  method: 'get',
  path: '/api/catalog_system/pvt/collection/search',
  tags: ['Collection Beta'],
  summary: 'Get All Collections',
  description: 'Retrieves a list of all collections matching a filter.',
  operationId: 'GET-AllCollections',
  request: {
    headers: z.object({
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
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
    }),
    query: z.object({
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
        .openapi({
          param: {
            description: 'Page number.',
            in: 'query',
            name: 'page',
            required: true,
            schema: { example: 2, type: 'integer' },
            style: 'form',
          },
          example: 2,
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
        .openapi({
          param: {
            description: 'Number of the items of the page.',
            in: 'query',
            name: 'pageSize',
            required: true,
            schema: { example: 15, type: 'integer' },
            style: 'form',
          },
          example: 15,
        }),
      orderByAsc: z
        .stringbool()
        .openapi({
          param: {
            description: 'Defines if the items of the page are in ascending order.',
            in: 'query',
            name: 'orderByAsc',
            required: true,
            schema: { example: true, type: 'boolean' },
            style: 'form',
          },
          example: true,
        }),
    }),
  },
  responses: { 200: { description: 'OK' } },
})

export const getApiCatalogSystemPvtCollectionSearchSearchTermsRoute = createRoute({
  method: 'get',
  path: '/api/catalog_system/pvt/collection/search/{searchTerms}',
  tags: ['Collection Beta'],
  summary: 'Get Collections by search terms',
  description: 'Retrieves a list of collections matching a filter.',
  operationId: 'GET-Collectionsbyseachterms',
  request: {
    headers: z.object({
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
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      searchTerms: z
        .string()
        .openapi({
          param: {
            description: 'String that will search for a collection related to it.',
            in: 'path',
            name: 'searchTerms',
            required: true,
            schema: { example: 'costume', type: 'string' },
            style: 'simple',
          },
          example: 'costume',
        }),
    }),
    query: z.object({
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
            description: 'Page number.',
            in: 'query',
            name: 'page',
            required: false,
            schema: { example: 2, type: 'integer' },
            style: 'form',
          },
          example: 2,
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
            description: 'Number of the items of the page.',
            in: 'query',
            name: 'pageSize',
            required: false,
            schema: { example: 15, type: 'integer' },
            style: 'form',
          },
          example: 15,
        }),
      orderByAsc: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Defines if the items of the page are in ascending order.',
            in: 'query',
            name: 'orderByAsc',
            required: false,
            schema: { example: true, type: 'boolean' },
            style: 'form',
          },
          example: true,
        }),
    }),
  },
  responses: { 200: { description: 'OK' } },
})

export const getApiCatalogSystemPvtCommercialconditionListRoute = createRoute({
  method: 'get',
  path: '/api/catalog_system/pvt/commercialcondition/list',
  tags: ['Commercial Conditions'],
  summary: 'Get all commercial conditions',
  description:
    'Lists all commercial conditions on the store. \r\n## Response body example\r\n\r\n```json\r\n[\r\n    {\r\n        "Id": 1,\r\n        "Name": "Padrão",\r\n        "IsDefault": true\r\n    },\r\n    {\r\n        "Id": 2,\r\n        "Name": "Teste Fast",\r\n        "IsDefault": false\r\n    }\r\n]\r\n```',
  operationId: 'GetAllCommercialConditions',
  request: {
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
              'HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.',
            in: 'header',
            name: 'Accept',
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
            .array(
              z
                .object({
                  Id: z
                    .int()
                    .exactOptional()
                    .openapi({ description: 'Commercial condition ID.', example: 1, title: 'Id' }),
                  IsDefault: z
                    .boolean()
                    .exactOptional()
                    .openapi({
                      description:
                        'Defines if the commercial condition is default (`true`) or not (`false`).',
                      example: true,
                      title: 'IsDefault',
                    }),
                  Name: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'Commercial condition name.',
                      example: 'Padrão',
                      title: 'Name',
                    }),
                })
                .openapi({
                  description: 'Object with information of the commercial condition.',
                  example: { Id: 1, IsDefault: true, Name: 'Padrão' },
                  title: '',
                  required: [],
                }),
            )
            .openapi({
              example: [
                { Id: 1, IsDefault: true, Name: 'Padrão' },
                { Id: 2, IsDefault: false, Name: 'Secundária' },
                { Id: 3, IsDefault: false, Name: 'Parcelamento 18x' },
              ],
              title: 'Array with information of all the commercial conditions.',
            }),
        },
      },
    },
  },
})

export const getApiCatalogSystemPvtCommercialconditionCommercialConditionIdRoute = createRoute({
  method: 'get',
  path: '/api/catalog_system/pvt/commercialcondition/{commercialConditionId}',
  tags: ['Commercial Conditions'],
  summary: 'Get commercial condition',
  description:
    'Retrieves information of a commercial condition by its ID. \r\n## Response body example\r\n\r\n```json\r\n{\r\n    "Id": 1,\r\n    "Name": "Padrão",\r\n    "IsDefault": true\r\n}\r\n```',
  operationId: 'GetCommercialConditions',
  request: {
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
              'HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.',
            in: 'header',
            name: 'Accept',
            required: true,
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      commercialConditionId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'Commercial condition unique numerical identifier.',
            in: 'path',
            name: 'commercialConditionId',
            required: true,
            schema: { example: 1, type: 'integer' },
          },
          example: 1,
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
              Id: z
                .int()
                .exactOptional()
                .openapi({ description: 'Commercial condition ID.', example: 1, title: 'Id' }),
              IsDefault: z
                .boolean()
                .exactOptional()
                .openapi({
                  description: 'If the commercial condition is default (`true`) or not (`false`).',
                  example: true,
                  title: 'IsDefault',
                }),
              Name: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Commercial condition name.',
                  example: 'Padrão',
                  title: 'Name',
                }),
            })
            .openapi({
              description: 'Object with information of the commercial condition.',
              example: { Id: 1, IsDefault: true, Name: 'Padrão' },
              title: '',
              required: [],
            }),
        },
      },
    },
  },
})

export const getApiCatalogSystemPvtProductsGetIndexedInfoProductIdRoute = createRoute({
  method: 'get',
  path: '/api/catalog_system/pvt/products/GetIndexedInfo/{productId}',
  tags: ['Product Indexing'],
  summary: 'Get Product Indexed Information',
  description:
    'Retrieve details of a Product\'s Indexed Information in XML format. \r\n## Response body example\r\n\r\n```xml\r\n"\r\n<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?>\\n\r\n<response>\\n\r\n    <lst name=\\"responseHeader\\">\r\n        <bool name=\\"zkConnected\\">true</bool>\r\n        <int name=\\"status\\">0</int>\r\n        <int name=\\"QTime\\">2</int>\r\n        <lst name=\\"params\\">\r\n            <str name=\\"fl\\">*</str>\r\n            <arr name=\\"fq\\">\r\n                <str>instanceId:394dbdc8-b1f4-4dea-adfa-1ec104f3bfe1</str>\r\n                <str>productId:1</str>\r\n            </arr>\r\n        </lst>\r\n    </lst>\r\n    <result name=\\"response\\" numFound=\\"0\\" start=\\"0\\" maxScore=\\"0.0\\"></result>\r\n    <lst name=\\"facet_counts\\">\r\n        <lst name=\\"facet_queries\\"/>\r\n        <lst name=\\"facet_fields\\"/>\r\n        <lst name=\\"facet_ranges\\"/>\r\n        <lst name=\\"facet_intervals\\"/>\r\n        <lst name=\\"facet_heatmaps\\"/></lst>\\n\r\n</response>\\n"\r\n```',
  operationId: 'IndexedInfo',
  request: {
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
              'HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.',
            in: 'header',
            name: 'Accept',
            required: true,
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      productId: z
        .string()
        .openapi({
          param: {
            description: 'Product’s unique numerical identifier.',
            in: 'path',
            name: 'productId',
            required: true,
            schema: { example: '1', type: 'string' },
            style: 'simple',
          },
          example: '1',
        }),
    }),
  },
  responses: { 200: { description: 'OK', content: {} } },
})

export const getApiCatalogSystemPvtProductsGetProductAndSkuIdsRoute = createRoute({
  method: 'get',
  path: '/api/catalog_system/pvt/products/GetProductAndSkuIds',
  tags: ['Product'],
  summary: 'Get Product and SKU IDs',
  description:
    "Retrieves the IDs of products and SKUs. \r\n> 📘 Onboarding guide \r\n>\r\n> Check the new [Catalog onboarding guide](https://developers.vtex.com/vtex-rest-api/docs/catalog-overview). We created this guide to improve the onboarding experience for developers at VTEX. It assembles all documentation on our Developer Portal about Catalog and is organized by focusing on the developer's journey.",
  operationId: 'ProductAndSkuIds',
  request: {
    query: z.object({
      categoryId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'ID of the category from which you need to retrieve Products and SKUs.',
            explode: true,
            in: 'query',
            name: 'categoryId',
            required: false,
            schema: { example: 1, format: 'int32', type: 'integer' },
            style: 'form',
          },
          example: 1,
        }),
      _from: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Insert the ID that will start the request result.',
            explode: true,
            in: 'query',
            name: '_from',
            required: false,
            schema: { example: 1, format: 'int32', type: 'integer' },
            style: 'form',
          },
          example: 1,
        }),
      _to: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Insert the ID that will end the request result.',
            explode: true,
            in: 'query',
            name: '_to',
            required: false,
            schema: { example: 10, format: 'int32', type: 'integer' },
            style: 'form',
          },
          example: 10,
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
              'HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.',
            in: 'header',
            name: 'Accept',
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
              data: z
                .object({
                  'Product ID': z
                    .object({
                      'SKU ID.': z
                        .int()
                        .exactOptional()
                        .openapi({ description: 'Product SKU ID.' }),
                    })
                    .exactOptional()
                    .openapi({
                      description: 'Array with SKU IDs of a certain product.',
                      required: [],
                    }),
                })
                .exactOptional()
                .openapi({
                  description:
                    'Object composed by Product IDs and SKU IDs, where the parent ID is from Products and the SKU IDs are the Child IDs.',
                  required: [],
                }),
              range: z
                .object({
                  from: z.int().exactOptional().openapi({ description: 'Initial product ID.' }),
                  to: z.int().exactOptional().openapi({ description: 'Final product ID.' }),
                  total: z
                    .int()
                    .exactOptional()
                    .openapi({ description: 'Total quantity of SKUs.' }),
                })
                .exactOptional()
                .openapi({
                  description: 'Object with information about the product and SKUs list.',
                  required: [],
                }),
            })
            .openapi({ required: [] }),
          example: {
            data: {
              '1': [1, 123456, 310118449, 310118489, 7, 2],
              '2': [3, 310118450, 310118451, 4, 8],
              '3': [5],
              '4': [310118448],
              '5': [310118465],
              '6': [],
              '7': [310118452],
              '8': [310118453, 310118459, 310118463],
              '9': [
                310118454, 310118455, 310118456, 310118457, 310118458, 310118460, 310118461,
                310118462, 310118464,
              ],
              '10': [],
              '11': [],
              '12': [310118490],
            },
            range: { from: 1, to: 20, total: 12 },
          },
        },
      },
    },
  },
})

export const getApiCatalogSystemPvtProductsProductgetProductIdRoute = createRoute({
  method: 'get',
  path: '/api/catalog_system/pvt/products/productget/{productId}',
  tags: ['Product'],
  summary: 'Get Product and its general context',
  description:
    "Retrieves a specific product's general information as name, description and the trade policies that it is included.",
  operationId: 'ProductandTradePolicy',
  request: {
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
              'HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.',
            in: 'header',
            name: 'Accept',
            required: true,
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      productId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'Product’s unique numerical identifier.',
            in: 'path',
            name: 'productId',
            required: true,
            schema: { example: 1, type: 'integer' },
            style: 'simple',
          },
          example: 1,
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
              AdWordsRemarketingCode: z
                .string()
                .exactOptional()
                .openapi({
                  deprecated: true,
                  description:
                    'This is a legacy field. Do not take this information into consideration.',
                }),
              BrandId: z
                .int()
                .exactOptional()
                .openapi({ description: 'Product brand ID.', example: 2000000, title: 'BrandId' }),
              CategoryId: z
                .int()
                .exactOptional()
                .openapi({ description: 'Product category ID.', example: 10, title: 'CategoryId' }),
              DepartmentId: z
                .int()
                .exactOptional()
                .openapi({
                  description: 'Product department ID.',
                  example: 1,
                  title: 'DepartmentId',
                }),
              Description: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Product description.',
                  example: 'Description',
                  title: 'Description',
                }),
              DescriptionShort: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Product complement name.',
                  example: '',
                  title: 'DescriptionShort',
                }),
              Id: z
                .int()
                .exactOptional()
                .openapi({ description: 'Product ID.', example: 1, title: 'Id' }),
              IsActive: z
                .boolean()
                .exactOptional()
                .openapi({
                  description: 'If the product is active (`true`) or not (`false`) at the store.',
                  example: true,
                  title: 'IsActive',
                }),
              IsVisible: z
                .boolean()
                .exactOptional()
                .openapi({
                  description: 'If the Product is visible on the store.',
                  example: true,
                  title: 'IsVisible',
                }),
              KeyWords: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Substitutes words for the product.',
                  example: 'ração, racao, animal',
                  title: 'KeyWords',
                }),
              LinkId: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Product text link.',
                  example: 'racao-royal-canin-feline-urinary',
                  title: 'LinkId',
                }),
              ListStoreId: z
                .array(z.any())
                .exactOptional()
                .openapi({
                  description: 'List with the Trade Policies IDs that the product is included.',
                  example: [1, 2],
                  title: 'ListStoreId',
                }),
              LomadeeCampaignCode: z
                .string()
                .exactOptional()
                .openapi({
                  deprecated: true,
                  description:
                    'This is a legacy field. Do not take this information into consideration.',
                }),
              MetaTagDescription: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Product meta tag description.',
                  example: 'Description',
                  title: 'MetaTagDescription',
                }),
              Name: z
                .string()
                .exactOptional()
                .openapi({
                  description: "Product's name. Limited to 150 characters.",
                  example: 'Ração Royal Canin Feline Urinary',
                  title: 'Name',
                }),
              RefId: z
                .string()
                .exactOptional()
                .openapi({ description: 'Product referecial code.', example: '', title: 'RefId' }),
              ReleaseDate: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Product release date.',
                  example: '2020-01-06T00:00:00',
                  title: 'ReleaseDate',
                }),
              ShowWithoutStock: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Defines if the Product will remain being shown in the store even if it’s out of stock.',
                  example: true,
                  title: 'ShowWithoutStock',
                }),
              SupplierId: z
                .int()
                .exactOptional()
                .openapi({ description: 'Product supplier ID.', example: 1, title: 'SupplierId' }),
              TaxCode: z
                .string()
                .exactOptional()
                .openapi({ description: 'Product fiscal code.', example: '', title: 'TaxCode' }),
              Title: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    "Product's Title tag. Limited to 150 characters. It is presented in the browser tab and corresponds to the title of the product page. This field is important for SEO.",
                  example: 'Ração Royal Canin Feline Urinary',
                  title: 'Title',
                }),
            })
            .openapi({ title: '', required: [] }),
          example: {
            AdWordsRemarketingCode: '',
            BrandId: 2000000,
            CategoryId: 10,
            DepartmentId: 1,
            Description: 'Descrição.',
            DescriptionShort: '',
            Id: 1,
            IsActive: true,
            IsVisible: true,
            KeyWords: 'bbbbbbbbbbbb*, a@',
            LinkId: 'racao-royal-canin-feline-urinary',
            ListStoreId: [1, 2, 3],
            LomadeeCampaignCode: '',
            MetaTagDescription: 'Descrição.',
            Name: 'Ração Royal Canin Feline Urinary',
            RefId: '',
            ReleaseDate: '2020-01-06T00:00:00',
            ShowWithoutStock: true,
            SupplierId: 1,
            TaxCode: '',
            Title: 'Ração Royal Canin Feline Urinary',
          },
        },
      },
    },
  },
})

export const getApiCatalogSystemPvtProductsProductgetbyrefidRefIdRoute = createRoute({
  method: 'get',
  path: '/api/catalog_system/pvt/products/productgetbyrefid/{refId}',
  tags: ['Product'],
  summary: 'Get Product by RefId',
  description: 'Retrieves a specific product by its Reference ID.',
  operationId: 'ProductbyRefId',
  request: {
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
              'HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.',
            in: 'header',
            name: 'Accept',
            required: true,
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      refId: z
        .string()
        .openapi({
          param: {
            description: 'Product Referecial Code',
            in: 'path',
            name: 'refId',
            required: true,
            schema: { type: 'string' },
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
              AdWordsRemarketingCode: z
                .string()
                .exactOptional()
                .openapi({
                  deprecated: true,
                  description:
                    'This is a legacy field. Do not take this information into consideration.',
                }),
              BrandId: z.int().exactOptional().openapi({ description: 'ID of the product Brand.' }),
              CategoryId: z
                .int()
                .exactOptional()
                .openapi({ description: 'ID of product Category.' }),
              DepartmentId: z
                .int()
                .exactOptional()
                .openapi({ description: 'ID of product department.' }),
              Description: z
                .string()
                .exactOptional()
                .openapi({ description: 'Product Description, HTML is allowed.' }),
              DescriptionShort: z
                .string()
                .exactOptional()
                .openapi({ description: 'Product Short Description.' }),
              Id: z.int().exactOptional().openapi({ description: 'ID of the Product.' }),
              IsActive: z
                .boolean()
                .exactOptional()
                .openapi({ description: 'If the product is Active.' }),
              IsVisible: z
                .boolean()
                .exactOptional()
                .openapi({ description: 'If the product are visible in search and list pages.' }),
              KeyWords: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Alternatives Keywords to improve the product findability.',
                }),
              LinkId: z.string().exactOptional().openapi({ description: 'Category URL.' }),
              ListStoreId: z
                .array(z.int().openapi({ description: 'Trade policy ID.' }))
                .exactOptional()
                .openapi({
                  description:
                    'Array with the ID of all the trade policies that are related to the product.',
                }),
              LomadeeCampaignCode: z
                .string()
                .exactOptional()
                .openapi({
                  deprecated: true,
                  description:
                    'This is a legacy field. Do not take this information into consideration.',
                }),
              MetaTagDescription: z
                .string()
                .exactOptional()
                .openapi({ description: 'Meta Description for the Product page.' }),
              Name: z.string().exactOptional().openapi({ description: 'Name of the Product.' }),
              RefId: z.string().exactOptional().openapi({ description: 'Product Reference ID.' }),
              ReleaseDate: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Product Release Date, for list ordering and product cluster highlight.',
                }),
              ShowWithoutStock: z
                .boolean()
                .exactOptional()
                .openapi({ description: 'If the product can be visible without stock.' }),
              SupplierId: z.int().exactOptional().openapi({ description: 'Product Supplier ID.' }),
              TaxCode: z.string().exactOptional().openapi({ description: 'SKU Tax Code.' }),
              Title: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    "Product's Title tag. Limited to 150 characters. It is presented in the browser tab and corresponds to the title of the product page. This field is important for SEO.",
                }),
            })
            .openapi({ required: [] }),
          example: {
            AdWordsRemarketingCode: '',
            BrandId: 9280,
            CategoryId: 9287,
            DepartmentId: 9287,
            Description:
              "The Black and Decker LD120-VoltA 20-Volt Max Lithium Drill/Driver with 30 Accessories come with the Black and Decker 20-volt max Lithium Ion Battery. These batteries are always ready, holding a charge up to 18 months. This drill provides an extra level of control with a 24 position clutch that helps to prevent stripping and overdriving screws. It has a soft grip handle that provides added comfort during use and a light weight to prevent user fatigue. This drill is ideal for drilling and screwdriving through wood, metal, and plastic. The LD120-VoltA set includes: LD120 20-Volt MAX Lithium Drill/Driver, (1) LB20 20-Volt MAX Lithium Ion Battery, (1) LCS20 Charger, (6) Brad Point Drill Bits, (10) 1-Inch Screwdriving Bits, (9) 2-Inch Screwdriving Bits, (4) Nut Drivers, (1) Magnetic Bit Tip Holder and is backed by Black and Decker's 2 year limited warranty.",
            DescriptionShort:
              "The Black and Decker LD120-VoltA 20-Volt Max Lithium Drill/Driver with 30 Accessories come with the Black and Decker 20-volt max Lithium Ion Battery. These batteries are always ready, holding a charge up to 18 months. This drill provides an extra level of control with a 24 position clutch that helps to prevent stripping and overdriving screws. It has a soft grip handle that provides added comfort during use and a light weight to prevent user fatigue. This drill is ideal for drilling and screwdriving through wood, metal, and plastic. The LD120-VoltA set includes: LD120 20-Volt MAX Lithium Drill/Driver, (1) LB20 20-Volt MAX Lithium Ion Battery, (1) LCS20 Charger, (6) Brad Point Drill Bits, (10) 1-Inch Screwdriving Bits, (9) 2-Inch Screwdriving Bits, (4) Nut Drivers, (1) Magnetic Bit Tip Holder and is backed by Black and Decker's 2 year limited warranty.",
            Id: 17,
            IsActive: true,
            IsVisible: true,
            KeyWords: 'product,sample',
            LinkId: 'black-decker-20v-max-cordless-drill-driver-with-30-piece-acessories-ld120va',
            ListStoreId: [1],
            LomadeeCampaignCode: '',
            MetaTagDescription:
              "The Black and Decker LD120-VoltA 20-Volt Max Lithium Drill/Driver with 30 Accessories come with the Black and Decker 20-volt max Lithium Ion Battery. These batteries are always ready, holding a charge up to 18 months. This drill provides an extra level of control with a 24 position clutch that helps to prevent stripping and overdriving screws. It has a soft grip handle that provides added comfort during use and a light weight to prevent user fatigue. This drill is ideal for drilling and screwdriving through wood, metal, and plastic. The LD120-VoltA set includes: LD120 20-Volt MAX Lithium Drill/Driver, (1) LB20 20-Volt MAX Lithium Ion Battery, (1) LCS20 Charger, (6) Brad Point Drill Bits, (10) 1-Inch Screwdriving Bits, (9) 2-Inch Screwdriving Bits, (4) Nut Drivers, (1) Magnetic Bit Tip Holder and is backed by Black and Decker's 2 year limited warranty.",
            Name: 'BLACK+DECKER 20V MAX Cordless Drill / Driver with 30-Piece Accessories (LD120VA)',
            RefId: '880010',
            ReleaseDate: '2020-01-01T00:00:00',
            ShowWithoutStock: true,
            SupplierId: 1,
            TaxCode: '',
            Title:
              'BLACK+DECKER 20V MAX Cordless Drill / Driver with 30-Piece Accessories (LD120VA)',
          },
        },
      },
    },
  },
})

export const getApiCatalogSystemPvtProductsProductIdSpecificationRoute = createRoute({
  method: 'get',
  path: '/api/catalog_system/pvt/products/{productId}/specification',
  tags: ['Product Specification'],
  summary: 'Get Product Specification by Product ID',
  description:
    'Retrieves all specifications of a product by the product\'s ID.\r\n> 📘 Onboarding guide \r\n>\r\n> Check the new [Catalog onboarding guide](https://developers.vtex.com/vtex-rest-api/docs/catalog-overview). We created this guide to improve the onboarding experience for developers at VTEX. It assembles all documentation on our Developer Portal about Catalog and is organized by focusing on the developer\'s journey.\r\n\r\n### Response body example\r\n\r\n```json\r\n[\r\n    {\r\n        "Value": [\r\n            "Iron",\r\n            "Plastic"\r\n        ],\r\n        "Id": 30,\r\n        "Name": "Material"\r\n    }\r\n]\r\n```',
  operationId: 'GetProductSpecification',
  request: {
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
              'HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.',
            in: 'header',
            name: 'Accept',
            required: true,
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      productId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'Product’s unique numerical identifier.',
            in: 'path',
            name: 'productId',
            required: true,
            schema: { example: 1, type: 'integer' },
            style: 'simple',
          },
          example: 1,
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .array(GetorUpdateProductSpecificationSchema)
            .openapi({ example: [{ Id: 30, Name: 'Material', Value: ['Iron', 'Plastic'] }] }),
        },
      },
      headers: z.object({
        'Cache-Control': z
          .string()
          .exactOptional()
          .openapi({ param: { required: false }, example: 'no-cache' }),
        'Content-Length': z
          .string()
          .exactOptional()
          .openapi({ example: '102', param: { required: false } }),
        Date: z
          .string()
          .exactOptional()
          .openapi({ example: 'Mon, 22 Jan 2018 23:18:18 GMT', param: { required: false } }),
        Expires: z
          .string()
          .exactOptional()
          .openapi({ example: '-1', param: { required: false } }),
        Pragma: z
          .string()
          .exactOptional()
          .openapi({ example: 'no-cache', param: { required: false } }),
        Server: z
          .string()
          .exactOptional()
          .openapi({ example: 'Microsoft-IIS/10.0', param: { required: false } }),
        'X-AspNet-Version': z
          .string()
          .exactOptional()
          .openapi({ example: '4.0.30319', param: { required: false } }),
        'X-Powered-By': z
          .string()
          .exactOptional()
          .openapi({ example: 'ASP.NET', param: { required: false } }),
        no: z
          .string()
          .exactOptional()
          .openapi({ example: 'CELOCOUTO', param: { required: false } }),
        p3p: z
          .string()
          .exactOptional()
          .openapi({
            example: 'policyref="/w3c/p3p.xml",CP="ADMa OUR NOR CNT NID DSP NOI COR"',
            param: { required: false },
          }),
        powered: z
          .string()
          .exactOptional()
          .openapi({ example: 'vtex', param: { required: false } }),
        'x-vtex-operation-id': z
          .string()
          .exactOptional()
          .openapi({ example: '7ec24c86-1dc8-4ec7-a4b7-79b06b53a742', param: { required: false } }),
      }),
    },
  },
})

export const postApiCatalogSystemPvtProductsProductIdSpecificationRoute = createRoute({
  method: 'post',
  path: '/api/catalog_system/pvt/products/{productId}/specification',
  tags: ['Product Specification'],
  summary: 'Update Product Specification by Product ID',
  description:
    'Updates the value of a product specification by the product\'s ID. The ID or name can be used to identify what product specification will be updated. Specification fields must be previously created in your Catalog.\r\n\r\n### Request body example\r\n\r\n```json\r\n[\r\n    {\r\n        "Value": [\r\n            "Iron",\r\n            "Plastic"\r\n        ],\r\n        "Id": 30,\r\n        "Name": "Material"\r\n    }\r\n]\r\n```',
  operationId: 'UpdateProductSpecification',
  request: {
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
              'HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.',
            in: 'header',
            name: 'Accept',
            required: true,
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      productId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'Product’s unique identifier.',
            in: 'path',
            name: 'productId',
            required: true,
            schema: { example: 1, type: 'integer' },
            style: 'simple',
          },
          example: 1,
        }),
    }),
    body: {
      description: '',
      content: { 'application/json': { schema: z.array(GetorUpdateProductSpecificationSchema) } },
      required: true,
    },
  },
  responses: { 200: { description: 'OK' } },
})

export const getApiCatalogSystemPvtSaleschannelListRoute = createRoute({
  method: 'get',
  path: '/api/catalog_system/pvt/saleschannel/list',
  tags: ['Sales Channel'],
  summary: 'Get Sales Channel List',
  description:
    'Retrieves a list with details about the store\'s sales channels. \r\n## Response body example\r\n\r\n```json\r\n[\r\n    {\r\n        "Id": 1,\r\n        "Name": "Loja Principal",\r\n        "IsActive": true,\r\n        "ProductClusterId": null,\r\n        "CountryCode": "BRA",\r\n        "CultureInfo": "pt-BR",\r\n        "TimeZone": "E. South America Standard Time",\r\n        "CurrencyCode": "BRL",\r\n        "CurrencySymbol": "R$",\r\n        "CurrencyLocale": 1046,\r\n        "CurrencyFormatInfo": {\r\n            "CurrencyDecimalDigits": 1,\r\n            "CurrencyDecimalSeparator": ",",\r\n            "CurrencyGroupSeparator": ".",\r\n            "CurrencyGroupSize": 3,\r\n            "StartsWithCurrencySymbol": true\r\n        },\r\n        "Origin": null,\r\n        "Position": 2,\r\n        "ConditionRule": null,\r\n        "CurrencyDecimalDigits": 1\r\n    }\r\n]\r\n```',
  operationId: 'SalesChannelList',
  request: {
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
              'HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.',
            in: 'header',
            name: 'Accept',
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
          schema: z.array(
            z
              .object({
                ConditionRule: z
                  .string()
                  .nullable()
                  .exactOptional()
                  .openapi({
                    description:
                      'Defines what is the conditional rule to activate de Sales Channel.',
                    example: 'approved=true',
                    title: 'ConditionRule',
                  }),
                CountryCode: z
                  .string()
                  .exactOptional()
                  .openapi({
                    description: 'Country Code in ISO 3166-1 alfa-3 Standard.',
                    example: 'BRA',
                    title: 'Id',
                  }),
                CultureInfo: z
                  .string()
                  .exactOptional()
                  .openapi({
                    description: 'Language Country code in LCIDstring Standard.',
                    example: 'pt-BR',
                    title: 'CultureInfo',
                  }),
                CurrencyCode: z
                  .string()
                  .exactOptional()
                  .openapi({
                    description: 'Currency Code in ISO 4217 standard.',
                    example: 'BRL',
                    title: 'CurrencyCode',
                  }),
                CurrencyDecimalDigits: z
                  .int()
                  .exactOptional()
                  .openapi({
                    description: 'Quantity of Currency Decimal Digits.',
                    example: 1,
                    title: 'CurrencyDecimalDigits',
                  }),
                CurrencyFormatInfo: z
                  .object({
                    CurrencyDecimalDigits: z
                      .int()
                      .exactOptional()
                      .openapi({
                        description: 'Quantity of Currency Decimal Digits.',
                        example: 1,
                        title: 'CurrencyDecimalDigits',
                      }),
                    CurrencyDecimalSeparator: z
                      .string()
                      .exactOptional()
                      .openapi({
                        description: 'Defines which Currency Decimal Separator will be applied.',
                        example: ',',
                        title: 'CurrencyDecimalSeparator',
                      }),
                    CurrencyGroupSeparator: z
                      .string()
                      .exactOptional()
                      .openapi({
                        description: 'Defines which Currency Group Separator will be applied.',
                        example: '.',
                        title: 'CurrencyGroupSeparator',
                      }),
                    CurrencyGroupSize: z
                      .int()
                      .exactOptional()
                      .openapi({
                        description: 'Define how many characters will be grouped.',
                        example: 3,
                        title: 'CurrencyGroupSize',
                      }),
                    StartsWithCurrencySymbol: z
                      .boolean()
                      .exactOptional()
                      .openapi({
                        description:
                          'Defines if all prices will be initiated with Currency Symbol (`true`) or not (`false`).',
                        example: true,
                        title: 'StartsWithCurrencySymbol',
                      }),
                  })
                  .exactOptional()
                  .openapi({
                    description: 'Object with currency format.',
                    title: 'CurrencyFormatInfo',
                    required: [],
                  }),
                CurrencyLocale: z
                  .int()
                  .exactOptional()
                  .openapi({
                    description: 'Currency Locale Code in LCID standard.',
                    example: 1046,
                    title: 'CurrencyLocale',
                  }),
                CurrencySymbol: z
                  .string()
                  .exactOptional()
                  .openapi({
                    description: 'Currency symbol.',
                    example: 'R$',
                    title: 'CurrencySymbol',
                  }),
                Id: z
                  .int()
                  .exactOptional()
                  .openapi({
                    description: 'Sales Channel unique identifier.',
                    example: 1,
                    title: 'Id',
                  }),
                IsActive: z
                  .boolean()
                  .exactOptional()
                  .openapi({
                    description:
                      'Defines if the Sales Channel is active (`true`) or not (`false`).',
                    title: 'IsActive',
                  }),
                Name: z
                  .string()
                  .exactOptional()
                  .openapi({
                    description: 'Sales Channel name.',
                    example: 'Loja Principal',
                    title: 'Id',
                  }),
                Origin: z
                  .string()
                  .nullable()
                  .exactOptional()
                  .openapi({
                    description: 'Origin of products in the Sales Channel.',
                    example: null,
                    title: 'Origin',
                  }),
                Position: z
                  .int()
                  .nullable()
                  .exactOptional()
                  .openapi({
                    description: 'Defines the position on index.',
                    example: 1,
                    title: 'Position',
                  }),
                ProductClusterId: z
                  .int()
                  .nullable()
                  .exactOptional()
                  .openapi({
                    description:
                      'Product Cluster ID, if the Sales Channel has releated Product Cluster.',
                    example: null,
                    title: 'ProductClusterId',
                  }),
                TimeZone: z
                  .string()
                  .exactOptional()
                  .openapi({
                    description: 'Name of Time Zone.',
                    example: 'E. South America Standard Time',
                    title: 'TimeZone',
                  }),
              })
              .openapi({ required: [] }),
          ),
        },
      },
    },
  },
})

export const putApiCatalogSystemPvtSellerRoute = createRoute({
  method: 'put',
  path: '/api/catalog_system/pvt/seller',
  tags: ['Seller'],
  summary: 'Update Seller',
  description: 'Updates a seller.',
  operationId: 'UpdateSeller',
  request: {
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
              'HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.',
            in: 'header',
            name: 'Accept',
            required: true,
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
    }),
    body: {
      description: '',
      content: { 'application/json': { schema: UpdateSellerRequestSchema } },
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
              ArchiveId: z
                .int()
                .nullable()
                .exactOptional()
                .openapi({ description: 'Seller archive ID.' }),
              CNPJ: z
                .string()
                .exactOptional()
                .openapi({ description: 'Company registration number.' }),
              CSCIdentification: z
                .string()
                .exactOptional()
                .openapi({ description: 'CSC identification.' }),
              CatalogSystemEndpoint: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    "URL of the endpoint of the seller's catalog. This field will only be displayed if the seller type is VTEX Store. The field format will be as follows: `http://{sellerName}.vtexcommercestable.com.br/api/catalog_system/`.",
                }),
              CategoryCommissionPercentage: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The percentage that must be filled in as agreed between the marketplace and the seller. If there is no such commission, please fill in the field with the value: `0.00`.',
                }),
              DeliveryPolicy: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Text describing the delivery policy previously agreed between the marketplace and the seller.',
                }),
              Description: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Text describing the seller with a marketing tone. You can display this text in the marketplace window display by [customizing the CMS](https://help.vtex.com/en/tutorial/list-of-controls-for-templates--tutorials_563).',
                }),
              Email: z
                .string()
                .exactOptional()
                .openapi({ description: 'Email of the admin responsible for the seller.' }),
              ExchangeReturnPolicy: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Text describing the exchange and return policy previously agreed between the marketplace and the seller.',
                }),
              FreightCommissionPercentage: z
                .number()
                .exactOptional()
                .openapi({
                  description:
                    'The percentage that must be filled in as agreed between the marketplace and the seller. If there is no such commission, please fill in the field with the value: `0.00`.',
                }),
              FulfillmentEndpoint: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({
                  description:
                    "URL of the endpoint for fulfillment of seller's orders, which the marketplace will use to communicate with the seller. This field applies to all sellers, regardless of their type. However, for `VTEX Stores`, you don’t need to fill it in because the system will do that automatically. You can edit this field once the seller has been successfully added.",
                }),
              FulfillmentSellerId: z
                .int()
                .nullable()
                .exactOptional()
                .openapi({
                  description:
                    'Identification code of the seller responsible for fulfilling the order. This is an optional field used when a seller sells SKUs from another seller. If the seller sells their own SKUs, it must be left blank.',
                }),
              IsActive: z
                .boolean()
                .exactOptional()
                .openapi({ description: 'If the selle is active (`true`) or not (`false`).' }),
              IsBetterScope: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Indicates whether it is a [comprehensive seller](https://help.vtex.com/en/tutorial/comprehensive-seller--5Qn4O2GpjUIzWTPpvLUfkI).',
                }),
              MerchantName: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Name of the marketplace, used to guide payments. This field should be nulled if the marketplace is responsible for processing payments. Check out our [Split Payment](https://help.vtex.com/en/tutorial/split-de-pagamento--6k5JidhYRUxileNolY2VLx) article to know more.',
                }),
              Name: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    "Name of the account in the seller's environment. You can find it on **Account settings > Account > Account Name**). Applicable only if the seller uses their own payment method.",
                }),
              Password: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({ description: 'Seller password.' }),
              ProductCommissionPercentage: z
                .number()
                .exactOptional()
                .openapi({
                  description:
                    'The percentage that must be filled in as agreed between the marketplace and the seller. If there is no such commission, please fill in the field with the value: `0.00`.',
                }),
              SecutityPrivacyPolicy: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Text describing the security policy previously agreed between the marketplace and the seller.',
                }),
              SellerId: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    "Code used to identify the seller. It is assigned by the marketplace. We recommend filling it in with the seller's account name.",
                }),
              SellerType: z.int().exactOptional().openapi({ description: 'Seller type.' }),
              TrustPolicy: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    "Seller trust policy. The default value is `'Default'`, but if your store is a B2B marketplace and you want to share the customers'emails with the sellers you need to set this field as `'AllowEmailSharing'`.",
                }),
              UrlLogo: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({ description: 'Seller URL logo.' }),
              UseHybridPaymentOptions: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Allows customers to use gift cards from the seller to buy their products on the marketplace. It identifies purchases made with a gift card so that only the final price (with discounts applied) is paid to the seller.',
                }),
              UserName: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({ description: 'Seller username.' }),
            })
            .openapi({
              example: {
                ArchiveId: null,
                CNPJ: '12035072751',
                CSCIdentification: 'pedrostore',
                CatalogSystemEndpoint:
                  'http://pedrostore.vtexcommercestable.com.br/api/catalog_system/',
                CategoryCommissionPercentage:
                  '[{"CategoryId":14,"ProductCommission":15.0,"FreightCommission":0.0}]',
                DeliveryPolicy: '',
                Description: '',
                Email: 'breno@breno.com',
                ExchangeReturnPolicy: '',
                FreightCommissionPercentage: 0,
                FulfillmentEndpoint:
                  'http://pedrostore.vtexcommercestable.com.br/api/fulfillment?affiliateid=LDB&sc=1',
                FulfillmentSellerId: null,
                IsActive: true,
                IsBetterScope: false,
                MerchantName: '',
                Name: 'pedrostore',
                Password: null,
                ProductCommissionPercentage: 0,
                SecutityPrivacyPolicy: '',
                SellerId: 'pedrostore',
                SellerType: 1,
                TrustPolicy: 'Default',
                UrlLogo: null,
                UseHybridPaymentOptions: false,
                UserName: null,
              },
              title: '',
              required: [],
            }),
        },
      },
    },
  },
})

export const postApiCatalogSystemPvtSellerRoute = createRoute({
  method: 'post',
  path: '/api/catalog_system/pvt/seller',
  tags: ['Seller'],
  summary: 'Create Seller',
  description: 'Creates a new seller.',
  operationId: 'CreateSeller',
  request: {
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
              'HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.',
            in: 'header',
            name: 'Accept',
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
          schema: CreateSellerRequestSchema,
          example: {
            ArchiveId: 1,
            CNPJ: '12345678912345',
            CSCIdentification: 'myseller',
            CatalogSystemEndpoint: 'http://myseller.vtexcommercestable.com.br/api/catalog_system/',
            DeliveryPolicy: '',
            Description: '',
            Email: 'myseller@vtex.com',
            ExchangeReturnPolicy: '',
            FreightCommissionPercentage: 0,
            FulfillmentEndpoint:
              'http://fulfillment.vtexcommerce.com.br/api/fulfillment?affiliateid=VTX&sc=1&an=myseller',
            FulfillmentSellerId: 2,
            IsActive: true,
            IsBetterScope: false,
            Name: 'My Seller',
            Password: '',
            ProductCommissionPercentage: 1.5,
            SecutityPrivacyPolicy: '',
            SellerId: 'myseller',
            SellerType: 1,
            UrlLogo: '',
            UseHybridPaymentOptions: false,
            UserName: '',
          },
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
              ArchiveId: z
                .int()
                .nullable()
                .exactOptional()
                .openapi({ description: 'Seller archive ID.' }),
              CNPJ: z
                .string()
                .exactOptional()
                .openapi({ description: 'Company registration number.' }),
              CSCIdentification: z
                .string()
                .exactOptional()
                .openapi({ description: 'CSC identification.' }),
              CatalogSystemEndpoint: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    "URL of the endpoint of the seller's catalog. This field will only be displayed if the seller type is VTEX Store. The field format will be as follows: `http://{sellerName}.vtexcommercestable.com.br/api/catalog_system/`.",
                }),
              CategoryCommissionPercentage: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The percentage that must be filled in as agreed between the marketplace and the seller. If there is no such commission, please fill in the field with the value: `0.00`.',
                }),
              DeliveryPolicy: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Text describing the delivery policy previously agreed between the marketplace and the seller.',
                }),
              Description: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Text describing the seller with a marketing tone. You can display this text in the marketplace window display by [customizing the CMS](https://help.vtex.com/en/tutorial/list-of-controls-for-templates--tutorials_563).',
                }),
              Email: z
                .string()
                .exactOptional()
                .openapi({ description: 'Email of the admin responsible for the seller. ' }),
              ExchangeReturnPolicy: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Text describing the exchange and return policy previously agreed between the marketplace and the seller.',
                }),
              FreightCommissionPercentage: z
                .number()
                .exactOptional()
                .openapi({
                  description:
                    'The percentage that must be filled in as agreed between the marketplace and the seller. If there is no such commission, please fill in the field with the value: `0.00`.',
                }),
              FulfillmentEndpoint: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({
                  description:
                    "URL of the endpoint for fulfillment of seller's orders, which the marketplace will use to communicate with the seller. This field applies to all sellers, regardless of their type. However, for `VTEX Stores`, you don’t need to fill it in because the system will do that automatically. You can edit this field once the seller has been successfully added.",
                }),
              FulfillmentSellerId: z
                .int()
                .nullable()
                .exactOptional()
                .openapi({
                  description:
                    'Identification code of the seller responsible for fulfilling the order. This is an optional field used when a seller sells SKUs from another seller. If the seller sells their own SKUs, it must be left blank.',
                }),
              IsActive: z
                .boolean()
                .exactOptional()
                .openapi({ description: 'If the selle is active (`true`) or not (`false`).' }),
              IsBetterScope: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Indicates whether it is a [comprehensive seller](https://help.vtex.com/en/tutorial/comprehensive-seller--5Qn4O2GpjUIzWTPpvLUfkI).',
                }),
              MerchantName: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Name of the marketplace, used to guide payments. This field should be nulled if the marketplace is responsible for processing payments. Check out our [Split Payment](https://help.vtex.com/en/tutorial/split-de-pagamento--6k5JidhYRUxileNolY2VLx) article to know more.',
                }),
              Name: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    "Name of the account in the seller's environment. You can find it on **Account settings > Account > Account Name**). Applicable only if the seller uses their own payment method.",
                }),
              Password: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({ description: 'Seller password.' }),
              ProductCommissionPercentage: z
                .number()
                .exactOptional()
                .openapi({
                  description:
                    'The percentage that must be filled in as agreed between the marketplace and the seller. If there is no such commission, please fill in the field with the value: `0.00`.',
                }),
              SecutityPrivacyPolicy: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Text describing the security policy previously agreed between the marketplace and the seller.',
                }),
              SellerId: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    "Code used to identify the seller. It is assigned by the marketplace. We recommend filling it in with the seller's account name.",
                }),
              SellerType: z.int().exactOptional().openapi({ description: 'Seller type.' }),
              TrustPolicy: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    "Seller trust policy. The default value is `'Default'`, but if your store is a B2B marketplace and you want to share the customers'emails with the sellers you need to set this field as `'AllowEmailSharing'`.",
                }),
              UrlLogo: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({ description: 'Seller URL logo.' }),
              UseHybridPaymentOptions: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Allows customers to use gift cards from the seller to buy their products on the marketplace. It identifies purchases made with a gift card so that only the final price (with discounts applied) is paid to the seller. ',
                }),
              UserName: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({ description: 'Seller username.' }),
            })
            .openapi({
              example: {
                ArchiveId: null,
                CNPJ: '12035072751',
                CSCIdentification: 'pedrostore',
                CatalogSystemEndpoint:
                  'http://pedrostore.vtexcommercestable.com.br/api/catalog_system/',
                CategoryCommissionPercentage:
                  '[{"CategoryId":14,"ProductCommission":15.0,"FreightCommission":0.0}]',
                DeliveryPolicy: '',
                Description: '',
                Email: 'breno@breno.com',
                ExchangeReturnPolicy: '',
                FreightCommissionPercentage: 0,
                FulfillmentEndpoint:
                  'http://pedrostore.vtexcommercestable.com.br/api/fulfillment?affiliateid=LDB&sc=1',
                FulfillmentSellerId: null,
                IsActive: true,
                IsBetterScope: false,
                MerchantName: '',
                Name: 'pedrostore',
                Password: null,
                ProductCommissionPercentage: 0,
                SecutityPrivacyPolicy: '',
                SellerId: 'pedrostore',
                SellerType: 1,
                TrustPolicy: 'Default',
                UrlLogo: null,
                UseHybridPaymentOptions: false,
                UserName: null,
              },
              title: '',
              required: [],
            }),
        },
      },
    },
  },
})

export const getApiCatalogSystemPvtSellerListRoute = createRoute({
  method: 'get',
  path: '/api/catalog_system/pvt/seller/list',
  tags: ['Seller'],
  summary: 'Get Seller List',
  description: "Retrieves the seller's details by its ID.",
  operationId: 'SellerList',
  request: {
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
              'HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.',
            in: 'header',
            name: 'Accept',
            required: true,
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
    }),
    query: z.object({
      sc: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Trade policy ID.',
            explode: true,
            in: 'query',
            name: 'sc',
            required: false,
            schema: { example: 1, format: 'int32', type: 'integer' },
            style: 'form',
          },
          example: 1,
        }),
      sellerType: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Seller type.',
            explode: true,
            in: 'query',
            name: 'sellerType',
            required: false,
            schema: { example: 1, format: 'int32', type: 'integer' },
            style: 'form',
          },
          example: 1,
        }),
      isBetterScope: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'If the seller is better scope.',
            explode: true,
            in: 'query',
            name: 'isBetterScope',
            required: false,
            schema: { example: false, type: 'boolean' },
            style: 'form',
          },
          example: false,
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
              ArchiveId: z
                .int()
                .nullable()
                .exactOptional()
                .openapi({ description: 'Seller archive ID.' }),
              CNPJ: z
                .string()
                .exactOptional()
                .openapi({ description: 'Company registration number.' }),
              CSCIdentification: z
                .string()
                .exactOptional()
                .openapi({ description: 'CSC identification.' }),
              CatalogSystemEndpoint: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    "URL of the endpoint of the seller's catalog. This field will only be displayed if the seller type is VTEX Store. The field format will be as follows: `http://{sellerName}.vtexcommercestable.com.br/api/catalog_system/`.",
                }),
              CategoryCommissionPercentage: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The percentage that must be filled in as agreed between the marketplace and the seller. If there is no such commission, please fill in the field with the value: `0.00`.',
                }),
              DeliveryPolicy: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Text describing the delivery policy previously agreed between the marketplace and the seller.',
                }),
              Description: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Text describing the seller with a marketing tone. You can display this text in the marketplace window display by [customizing the CMS](https://help.vtex.com/en/tutorial/list-of-controls-for-templates--tutorials_563).',
                }),
              Email: z
                .string()
                .exactOptional()
                .openapi({ description: 'Email of the admin responsible for the seller.' }),
              ExchangeReturnPolicy: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Text describing the exchange and return policy previously agreed between the marketplace and the seller.',
                }),
              FreightCommissionPercentage: z
                .number()
                .exactOptional()
                .openapi({
                  description:
                    'The percentage that must be filled in as agreed between the marketplace and the seller. If there is no such commission, please fill in the field with the value: `0.00`.',
                }),
              FulfillmentEndpoint: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({
                  description:
                    "URL of the endpoint for fulfillment of seller's orders, which the marketplace will use to communicate with the seller. This field applies to all sellers, regardless of their type. However, for `VTEX Stores`, you don’t need to fill it in because the system will do that automatically. You can edit this field once the seller has been successfully added.",
                }),
              FulfillmentSellerId: z
                .int()
                .nullable()
                .exactOptional()
                .openapi({
                  description:
                    'Identification code of the seller responsible for fulfilling the order. This is an optional field used when a seller sells SKUs from another seller. If the seller sells their own SKUs, it must be left blank.',
                }),
              IsActive: z
                .boolean()
                .exactOptional()
                .openapi({ description: 'If the selle is active (`true`) or not (`false`).' }),
              IsBetterScope: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Indicates whether it is a [comprehensive seller](https://help.vtex.com/en/tutorial/comprehensive-seller--5Qn4O2GpjUIzWTPpvLUfkI).',
                }),
              MerchantName: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Name of the marketplace, used to guide payments. This field should be nulled if the marketplace is responsible for processing payments. Check out our [Split Payment](https://help.vtex.com/en/tutorial/split-de-pagamento--6k5JidhYRUxileNolY2VLx) article to know more.',
                }),
              Name: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    "Name of the account in the seller's environment. You can find it on **Account settings > Account > Account Name**). Applicable only if the seller uses their own payment method.",
                }),
              Password: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({ description: 'Seller password.' }),
              ProductCommissionPercentage: z
                .number()
                .exactOptional()
                .openapi({
                  description:
                    'The percentage that must be filled in as agreed between the marketplace and the seller. If there is no such commission, please fill in the field with the value: `0.00`.',
                }),
              SecutityPrivacyPolicy: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Text describing the security policy previously agreed between the marketplace and the seller.',
                }),
              SellerId: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    "Code used to identify the seller. It is assigned by the marketplace. We recommend filling it in with the seller's account name.",
                }),
              SellerType: z.int().exactOptional().openapi({ description: 'Seller type.' }),
              TrustPolicy: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    "Seller trust policy. The default value is `'Default'`, but if your store is a B2B marketplace and you want to share the customers'emails with the sellers you need to set this field as `'AllowEmailSharing'`.",
                }),
              UrlLogo: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({ description: 'Seller URL logo.' }),
              UseHybridPaymentOptions: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Allows customers to use gift cards from the seller to buy their products on the marketplace. It identifies purchases made with a gift card so that only the final price (with discounts applied) is paid to the seller.',
                }),
              UserName: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({ description: 'Seller username.' }),
            })
            .openapi({
              example: {
                ArchiveId: null,
                CNPJ: '12035072751',
                CSCIdentification: 'pedrostore',
                CatalogSystemEndpoint:
                  'http://pedrostore.vtexcommercestable.com.br/api/catalog_system/',
                CategoryCommissionPercentage:
                  '[{"CategoryId":14,"ProductCommission":15.0,"FreightCommission":0.0}]',
                DeliveryPolicy: '',
                Description: '',
                Email: 'breno@breno.com',
                ExchangeReturnPolicy: '',
                FreightCommissionPercentage: 0,
                FulfillmentEndpoint:
                  'http://pedrostore.vtexcommercestable.com.br/api/fulfillment?affiliateid=LDB&sc=1',
                FulfillmentSellerId: null,
                IsActive: true,
                IsBetterScope: false,
                MerchantName: '',
                Name: 'pedrostore',
                Password: null,
                ProductCommissionPercentage: 0,
                SecutityPrivacyPolicy: '',
                SellerId: 'pedrostore',
                SellerType: 1,
                TrustPolicy: 'Default',
                UrlLogo: null,
                UseHybridPaymentOptions: false,
                UserName: null,
              },
              title: '',
              required: [],
            }),
        },
      },
    },
  },
})

export const getApiCatalogSystemPvtSellerSellerIdRoute = createRoute({
  method: 'get',
  path: '/api/catalog_system/pvt/seller/{sellerId}',
  tags: ['Seller'],
  summary: 'Get Seller by ID',
  description: "Retrieves the seller's details by its ID.",
  operationId: 'GetSellerbyId',
  request: {
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
              'HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.',
            in: 'header',
            name: 'Accept',
            required: true,
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      sellerId: z
        .string()
        .openapi({
          param: {
            description:
              'ID that identifies the seller in the marketplace. It can be the same as the seller name or a unique number. Check the **Sellers management** section in the Admin to get the correct ID.',
            in: 'path',
            name: 'sellerId',
            required: true,
            schema: { example: 'pedrostore', type: 'string' },
            style: 'simple',
          },
          example: 'pedrostore',
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
              ArchiveId: z
                .int()
                .nullable()
                .exactOptional()
                .openapi({ description: 'Seller archive ID.' }),
              CNPJ: z
                .string()
                .exactOptional()
                .openapi({ description: 'Company registration number.' }),
              CSCIdentification: z
                .string()
                .exactOptional()
                .openapi({ description: 'CSC identification.' }),
              CatalogSystemEndpoint: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    "URL of the endpoint of the seller's catalog. This field will only be displayed if the seller type is VTEX Store. The field format will be as follows: `http://{sellerName}.vtexcommercestable.com.br/api/catalog_system/`.",
                }),
              CategoryCommissionPercentage: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The percentage that must be filled in as agreed between the marketplace and the seller. If there is no such commission, please fill in the field with the value: `0.00`.',
                }),
              DeliveryPolicy: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Text describing the delivery policy previously agreed between the marketplace and the seller.',
                }),
              Description: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Text describing the seller with a marketing tone. You can display this text in the marketplace window display by [customizing the CMS](https://help.vtex.com/en/tutorial/list-of-controls-for-templates--tutorials_563).',
                }),
              Email: z
                .string()
                .exactOptional()
                .openapi({ description: 'Email of the admin responsible for the seller.' }),
              ExchangeReturnPolicy: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Text describing the exchange and return policy previously agreed between the marketplace and the seller.',
                }),
              FreightCommissionPercentage: z
                .number()
                .exactOptional()
                .openapi({
                  description:
                    'The percentage that must be filled in as agreed between the marketplace and the seller. If there is no such commission, please fill in the field with the value: `0.00`.',
                }),
              FulfillmentEndpoint: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({
                  description:
                    "URL of the endpoint for fulfillment of seller's orders, which the marketplace will use to communicate with the seller. This field applies to all sellers, regardless of their type. However, for `VTEX Stores`, you don’t need to fill it in because the system will do that automatically. You can edit this field once the seller has been successfully added.",
                }),
              FulfillmentSellerId: z
                .int()
                .nullable()
                .exactOptional()
                .openapi({
                  description:
                    'Identification code of the seller responsible for fulfilling the order. This is an optional field used when a seller sells SKUs from another seller. If the seller sells their own SKUs, it must be left blank.',
                }),
              IsActive: z
                .boolean()
                .exactOptional()
                .openapi({ description: 'If the selle is active (`true`) or not (`false`).' }),
              IsBetterScope: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Indicates whether it is a [comprehensive seller](https://help.vtex.com/en/tutorial/comprehensive-seller--5Qn4O2GpjUIzWTPpvLUfkI).',
                }),
              MerchantName: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Name of the marketplace, used to guide payments. This field should be nulled if the marketplace is responsible for processing payments. Check out our [Split Payment](https://help.vtex.com/en/tutorial/split-de-pagamento--6k5JidhYRUxileNolY2VLx) article to know more.',
                }),
              Name: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    "Name of the account in the seller's environment. You can find it on **Account settings > Account > Account Name**). Applicable only if the seller uses their own payment method.",
                }),
              Password: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({ description: 'Seller password.' }),
              ProductCommissionPercentage: z
                .number()
                .exactOptional()
                .openapi({
                  description:
                    'The percentage that must be filled in as agreed between the marketplace and the seller. If there is no such commission, please fill in the field with the value: `0.00`.',
                }),
              SecutityPrivacyPolicy: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Text describing the security policy previously agreed between the marketplace and the seller.',
                }),
              SellerId: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    "Code used to identify the seller. It is assigned by the marketplace. We recommend filling it in with the seller's account name.",
                }),
              SellerType: z.int().exactOptional().openapi({ description: 'Seller type.' }),
              TrustPolicy: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    "Seller trust policy. The default value is `'Default'`, but if your store is a B2B marketplace and you want to share the customers'emails with the sellers you need to set this field as `'AllowEmailSharing'`.",
                }),
              UrlLogo: z.string().exactOptional().openapi({ description: 'Seller URL logo.' }),
              UseHybridPaymentOptions: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Allows customers to use gift cards from the seller to buy their products on the marketplace. It identifies purchases made with a gift card so that only the final price (with discounts applied) is paid to the seller. ',
                }),
              UserName: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({ description: 'Seller username.' }),
            })
            .openapi({
              description: 'Object with information of all sellers in the store.',
              example: {
                ArchiveId: null,
                CNPJ: '12035072751',
                CSCIdentification: 'pedrostore',
                CatalogSystemEndpoint:
                  'http://pedrostore.vtexcommercestable.com.br/api/catalog_system/',
                CategoryCommissionPercentage:
                  '[{"CategoryId":14,"ProductCommission":15.0,"FreightCommission":0.0}]',
                DeliveryPolicy: '',
                Description: '',
                Email: 'breno@breno.com',
                ExchangeReturnPolicy: '',
                FreightCommissionPercentage: 0,
                FulfillmentEndpoint:
                  'http://pedrostore.vtexcommercestable.com.br/api/fulfillment?affiliateid=LDB&sc=1',
                FulfillmentSellerId: null,
                IsActive: true,
                IsBetterScope: false,
                MerchantName: '',
                Name: 'pedrostore',
                Password: null,
                ProductCommissionPercentage: 0,
                SecutityPrivacyPolicy: '',
                SellerId: 'pedrostore',
                SellerType: 1,
                TrustPolicy: 'Default',
                UrlLogo: '',
                UseHybridPaymentOptions: false,
                UserName: null,
              },
              title: '',
              required: [],
            }),
        },
      },
    },
  },
})

export const getApiCatalogSystemPvtSellersSellerIdRoute = createRoute({
  method: 'get',
  path: '/api/catalog_system/pvt/sellers/{sellerId}',
  tags: ['Seller'],
  summary: 'Get Seller by ID',
  description: "Retrieves the seller's details by its ID.",
  operationId: 'GetSellersbyId',
  request: {
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
              'HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.',
            in: 'header',
            name: 'Accept',
            required: true,
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      sellerId: z
        .string()
        .openapi({
          param: {
            description:
              'ID that identifies the seller in the marketplace. It can be the same as the seller name or a unique number. Check the **Sellers management** section in the Admin to get the correct ID.',
            in: 'path',
            name: 'sellerId',
            required: true,
            schema: { example: 'pedrostore', type: 'string' },
            style: 'simple',
          },
          example: 'pedrostore',
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
              ArchiveId: z
                .int()
                .nullable()
                .exactOptional()
                .openapi({ description: 'Seller archive ID.' }),
              CNPJ: z
                .string()
                .exactOptional()
                .openapi({ description: 'Company registration number.' }),
              CSCIdentification: z
                .string()
                .exactOptional()
                .openapi({ description: 'CSC identification.' }),
              CatalogSystemEndpoint: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    "URL of the endpoint of the seller's catalog. This field will only be displayed if the seller type is VTEX Store. The field format will be as follows: `http://{sellerName}.vtexcommercestable.com.br/api/catalog_system/`.",
                }),
              CategoryCommissionPercentage: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The percentage that must be filled in as agreed between the marketplace and the seller. If there is no such commission, please fill in the field with the value: `0.00`.',
                }),
              DeliveryPolicy: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Text describing the delivery policy previously agreed between the marketplace and the seller.',
                }),
              Description: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Text describing the seller with a marketing tone. You can display this text in the marketplace window display by [customizing the CMS](https://help.vtex.com/en/tutorial/list-of-controls-for-templates--tutorials_563).',
                }),
              Email: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({ description: 'Email of the admin responsible for the seller. ' }),
              ExchangeReturnPolicy: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Text describing the exchange and return policy previously agreed between the marketplace and the seller.',
                }),
              FreightCommissionPercentage: z
                .number()
                .exactOptional()
                .openapi({
                  description:
                    'The percentage that must be filled in as agreed between the marketplace and the seller. If there is no such commission, please fill in the field with the value: `0.00`.',
                }),
              FulfillmentEndpoint: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({
                  description:
                    "URL of the endpoint for fulfillment of seller's orders, which the marketplace will use to communicate with the seller. This field applies to all sellers, regardless of their type. However, for `VTEX Stores`, you don’t need to fill it in because the system will do that automatically. You can edit this field once the seller has been successfully added.",
                }),
              FulfillmentSellerId: z
                .int()
                .nullable()
                .exactOptional()
                .openapi({
                  description:
                    'Identification code of the seller responsible for fulfilling the order. This is an optional field used when a seller sells SKUs from another seller. If the seller sells their own SKUs, it must be left blank.',
                }),
              IsActive: z
                .boolean()
                .exactOptional()
                .openapi({ description: 'If the selle is active (`true`) or not (`false`).' }),
              IsBetterScope: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Indicates whether it is a [comprehensive seller](https://help.vtex.com/en/tutorial/comprehensive-seller--5Qn4O2GpjUIzWTPpvLUfkI).',
                }),
              MerchantName: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Name of the marketplace, used to guide payments. This field should be nulled if the marketplace is responsible for processing payments. Check out our [Split Payment](https://help.vtex.com/en/tutorial/split-de-pagamento--6k5JidhYRUxileNolY2VLx) article to know more.',
                }),
              Name: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({
                  description:
                    "Name of the account in the seller's environment. You can find it on **Account settings > Account > Account Name**). Applicable only if the seller uses their own payment method.",
                }),
              Password: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({ description: 'Seller password.' }),
              ProductCommissionPercentage: z
                .number()
                .exactOptional()
                .openapi({
                  description:
                    'The percentage that must be filled in as agreed between the marketplace and the seller. If there is no such commission, please fill in the field with the value: `0.00`.',
                }),
              SecutityPrivacyPolicy: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Text describing the security policy previously agreed between the marketplace and the seller.',
                }),
              SellerId: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    "Code used to identify the seller. It is assigned by the marketplace. We recommend filling it in with the seller's account name.",
                }),
              SellerType: z.int().exactOptional().openapi({ description: 'Seller type.' }),
              TrustPolicy: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    "Seller trust policy. The default value is `'Default'`, but if your store is a B2B marketplace and you want to share the customers'emails with the sellers you need to set this field as `'AllowEmailSharing'`.",
                }),
              UrlLogo: z.string().exactOptional().openapi({ description: 'Seller URL logo.' }),
              UseHybridPaymentOptions: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Allows customers to use gift cards from the seller to buy their products on the marketplace. It identifies purchases made with a gift card so that only the final price (with discounts applied) is paid to the seller. ',
                }),
              UserName: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({ description: 'Seller username.' }),
            })
            .openapi({
              description: 'Object with information of all sellers in the store.',
              example: {
                ArchiveId: null,
                CNPJ: '12035072751',
                CSCIdentification: 'pedrostore',
                CatalogSystemEndpoint:
                  'http://pedrostore.vtexcommercestable.com.br/api/catalog_system/',
                CategoryCommissionPercentage:
                  '[{"CategoryId":14,"ProductCommission":15.0,"FreightCommission":0.0}]',
                DeliveryPolicy: '',
                Description: '',
                Email: 'breno@breno.com',
                ExchangeReturnPolicy: '',
                FreightCommissionPercentage: 0,
                FulfillmentEndpoint:
                  'http://pedrostore.vtexcommercestable.com.br/api/fulfillment?affiliateid=LDB&sc=1',
                FulfillmentSellerId: null,
                IsActive: true,
                IsBetterScope: false,
                MerchantName: '',
                Name: 'pedrostore',
                Password: null,
                ProductCommissionPercentage: 0,
                SecutityPrivacyPolicy: '',
                SellerId: 'pedrostore',
                SellerType: 1,
                TrustPolicy: 'Default',
                UrlLogo: '',
                UseHybridPaymentOptions: false,
                UserName: null,
              },
              title: '',
              required: [],
            }),
        },
      },
    },
  },
})

export const postApiCatalogSystemPvtSkuAssociateattachmentsRoute = createRoute({
  method: 'post',
  path: '/api/catalog_system/pvt/sku/associateattachments',
  tags: ['SKU Attachment'],
  summary: 'Associate attachments to an SKU',
  description:
    'Associates attachments to an SKU based on a given SKU ID and attachment names.\n\rThis request removes existing SKU attachment associations and recreates the associations with the attachments being sent. \r\n## Request body example\r\n\r\n```json\r\n{\r\n    "SkuId": 1,\r\n    "AttachmentNames": [\r\n        "T-Shirt Customization"\r\n    ]\r\n}\r\n```',
  operationId: 'AssociateattachmentstoSKU',
  request: {
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
              'HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.',
            in: 'header',
            name: 'Accept',
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
          schema: z
            .object({
              AttachmentNames: z
                .array(
                  z
                    .string()
                    .openapi({ description: 'Attachment Name.', example: 'T-Shirt Customization' }),
                )
                .openapi({
                  description:
                    'Array with all the names of the attachments that you need to associate to the SKU.',
                }),
              SkuId: z.int().openapi({ description: 'Unique identifier of the SKU.', example: 1 }),
            })
            .openapi({ required: ['SkuId', 'AttachmentNames'] }),
          example: { AttachmentNames: ['T-Shirt Customization'], SkuId: 1 },
        },
      },
      required: true,
    },
  },
  responses: { 200: { description: 'OK' } },
})

export const getApiCatalogSystemPvtSkuComplementsParentSkuIdTypeRoute = createRoute({
  method: 'get',
  path: '/api/catalog_system/pvt/sku/complements/{parentSkuId}/{type}',
  tags: ['SKU Complement'],
  summary: 'Get SKU complements by type',
  description:
    'Retrieves all the existing SKU complements with the same complement type ID of a specific SKU. \r\n \r\n## Response body example\r\n\r\n```json\r\n{\r\n    "ParentSkuId": 1,\r\n    "ComplementSkuIds": [\r\n        7\r\n    ],\r\n    "Type": "1"\r\n}\r\n```',
  operationId: 'GetSKUcomplementsbytype',
  request: {
    headers: z.object({
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
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      parentSkuId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'ID of the Parent SKU, where the Complement is inserted.',
            in: 'path',
            name: 'parentSkuId',
            required: true,
            schema: { example: 1, type: 'integer' },
          },
          example: 1,
        }),
      type: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description:
              'Complement Type ID. This represents the type of the complement. The possible values are: `1` for Accessory; `2` for Suggestion; `3` for Similar Product; `5` for Show Together.',
            in: 'path',
            name: 'type',
            required: true,
            schema: { example: 1, type: 'integer' },
          },
          example: 1,
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
              ComplementSkuIds: z
                .array(
                  z.int().openapi({ description: 'SKU Complement ID.', example: 7, title: '' }),
                )
                .openapi({
                  description: 'Array with SKU complements IDs.',
                  example: [7],
                  title: 'ComplementSkuIds',
                }),
              ParentSkuId: z
                .int()
                .openapi({
                  description: 'ID of the Parent SKU, where the Complement is inserted.',
                  example: 1,
                  title: 'ParentSkuId',
                }),
              Type: z
                .string()
                .openapi({
                  description:
                    'Complement Type ID. This represents the type of the complement. The possible values are: `1` for Accessory; `2` for Suggestion; `3` for Similar Product; `5` for Show Together.',
                  example: '1',
                  title: 'Type',
                }),
            })
            .openapi({
              example: { ComplementSkuIds: [7], ParentSkuId: 1, Type: '1' },
              required: ['ParentSkuId', 'ComplementSkuIds', 'Type'],
              title: '',
            }),
        },
      },
    },
  },
})

export const getApiCatalogSystemPvtSkuStockkeepingunitByProductIdProductIdRoute = createRoute({
  method: 'get',
  path: '/api/catalog_system/pvt/sku/stockkeepingunitByProductId/{productId}',
  tags: ['SKU'],
  summary: 'Get SKU list by Product ID',
  description:
    'Retrieves a list with the SKUs related to a product by the product\'s ID.\r\n\r\n### Response body example\r\n\r\n```json\r\n[\r\n    {\r\n        "IsPersisted": true,\r\n        "IsRemoved": false,\r\n        "Id": 2000035,\r\n        "ProductId": 2000024,\r\n        "IsActive": true,\r\n        "Name": "33 - Preto",\r\n        "Height": 8,\r\n        "RealHeight": null,\r\n        "Width": 15,\r\n        "RealWidth": null,\r\n        "Length": 8,\r\n        "RealLength": null,\r\n        "WeightKg": 340,\r\n        "RealWeightKg": null,\r\n        "ModalId": 1,\r\n        "RefId": "",\r\n        "CubicWeight": 0.2,\r\n        "IsKit": false,\r\n        "IsDynamicKit": null,\r\n        "InternalNote": null,\r\n        "DateUpdated": "2015-11-06T19:10:00",\r\n        "RewardValue": 0.01,\r\n        "CommercialConditionId": 1,\r\n        "EstimatedDateArrival": "",\r\n        "FlagKitItensSellApart": false,\r\n        "ManufacturerCode": "",\r\n        "ReferenceStockKeepingUnitId": null,\r\n        "Position": 0,\r\n        "EditionSkuId": null,\r\n        "ApprovedAdminId": 123,\r\n        "EditionAdminId": 123,\r\n        "ActivateIfPossible": true,\r\n        "SupplierCode": null,\r\n        "MeasurementUnit": "un",\r\n        "UnitMultiplier": 2.0000,\r\n        "IsInventoried": null,\r\n        "IsTransported": null,\r\n        "IsGiftCardRecharge": null,\r\n        "ModalType": ""\r\n    }\r\n]\r\n```',
  operationId: 'SkulistbyProductId',
  request: {
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
              'HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.',
            in: 'header',
            name: 'Accept',
            required: true,
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      productId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'Product’s unique numerical identifier.',
            in: 'path',
            name: 'productId',
            required: true,
            schema: { example: 1, type: 'integer' },
            style: 'simple',
          },
          example: 1,
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .array(SkulistbyProductIdSchema)
            .openapi({
              example: [
                {
                  ActivateIfPossible: true,
                  ApprovedAdminId: 123,
                  CommercialConditionId: 1,
                  CubicWeight: 0.2,
                  DateUpdated: '2015-11-06T19:10:00',
                  EditionAdminId: 123,
                  EditionSkuId: null,
                  EstimatedDateArrival: null,
                  FlagKitItensSellApart: false,
                  Height: 8,
                  Id: 2000035,
                  InternalNote: null,
                  IsActive: true,
                  IsDynamicKit: null,
                  IsGiftCardRecharge: null,
                  IsInventoried: null,
                  IsKit: false,
                  IsPersisted: true,
                  IsRemoved: false,
                  IsTransported: null,
                  Length: 8,
                  ManufacturerCode: '',
                  MeasurementUnit: 'un',
                  ModalId: 1,
                  ModalType: null,
                  Name: '33 - Preto',
                  Position: 0,
                  ProductId: 2000024,
                  RealHeight: null,
                  RealLength: null,
                  RealWeightKg: null,
                  RealWidth: null,
                  RefId: '',
                  ReferenceStockKeepingUnitId: null,
                  RewardValue: 0.01,
                  SupplierCode: null,
                  UnitMultiplier: 2,
                  WeightKg: 340,
                  Width: 15,
                },
              ],
            }),
        },
      },
      headers: z.object({
        'Cache-Control': z
          .string()
          .exactOptional()
          .openapi({ example: 'no-cache', param: { required: false } }),
        Connection: z
          .string()
          .exactOptional()
          .openapi({ example: 'keep-alive', param: { required: false } }),
        'Content-Encoding': z
          .string()
          .exactOptional()
          .openapi({ example: 'gzip', param: { required: false } }),
        'Content-Length': z
          .string()
          .exactOptional()
          .openapi({ example: '535', param: { required: false } }),
        Date: z
          .string()
          .exactOptional()
          .openapi({ example: 'Mon, 07 Aug 2017 22:10:41 GMT', param: { required: false } }),
        Expires: z
          .string()
          .exactOptional()
          .openapi({ example: '-1', param: { required: false } }),
        Pragma: z
          .string()
          .exactOptional()
          .openapi({ example: 'no-cache', param: { required: false } }),
        Server: z
          .string()
          .exactOptional()
          .openapi({ example: 'nginx', param: { required: false } }),
        Vary: z
          .string()
          .exactOptional()
          .openapi({ example: 'Accept-Encoding', param: { required: false } }),
        'X-CacheServer': z
          .string()
          .exactOptional()
          .openapi({ example: 'janus-apicache-nginx15', param: { required: false } }),
        'X-Powered-by-VTEX-Janus-ApiCache': z
          .string()
          .exactOptional()
          .openapi({ example: 'v1.3.9', param: { required: false } }),
        'X-Powered-by-VTEX-Janus-Edge': z
          .string()
          .exactOptional()
          .openapi({ example: 'v1.38.0', param: { required: false } }),
        'X-Track': z
          .string()
          .exactOptional()
          .openapi({ example: 'stable', param: { required: false } }),
        'X-VTEX-Cache-Status-Janus-ApiCache': z
          .string()
          .exactOptional()
          .openapi({ example: 'MISS', param: { required: false } }),
        'X-VTEX-Cache-Status-Janus-Edge': z
          .string()
          .exactOptional()
          .openapi({ example: 'MISS', param: { required: false } }),
        'X-VTEX-Janus-Router-Backend-App': z
          .string()
          .exactOptional()
          .openapi({ example: 'prtapi-v1.4.779-stable+579', param: { required: false } }),
        no: z
          .string()
          .exactOptional()
          .openapi({ example: '-LKUTNPH8G7F', param: { required: false } }),
        p3p: z
          .string()
          .exactOptional()
          .openapi({
            example: 'policyref="/w3c/p3p.xml",CP="ADMa OUR NOR CNT NID DSP NOI COR"',
            param: { required: false },
          }),
        powered: z
          .string()
          .exactOptional()
          .openapi({ example: 'vtex', param: { required: false } }),
        'x-vtex-operation-id': z
          .string()
          .exactOptional()
          .openapi({ example: '316e0c8f-7aa1-41dc-859e-47ba1fcb4b0f', param: { required: false } }),
      }),
    },
  },
})

export const getApiCatalogSystemPvtSkuStockkeepingunitbyalternateIdAlternateIdRoute = createRoute({
  method: 'get',
  path: '/api/catalog_system/pvt/sku/stockkeepingunitbyalternateId/{alternateId}',
  tags: ['SKU'],
  summary: 'Get SKU by Alternate ID',
  description:
    'Retrieves an SKU by its Alternate ID.\r\n\r\n### Response body example\r\n\r\n```json\r\n{\r\n    "Id": 310118450,\r\n    "ProductId": 2,\r\n    "NameComplete": "Caixa de Areia Azul Petmate sku test",\r\n    "ComplementName": "",\r\n    "ProductName": "Caixa de Areia Azul Petmate",\r\n    "ProductDescription": "",\r\n    "ProductRefId": "",\r\n    "TaxCode": "",\r\n    "SkuName": "sku test",\r\n    "IsActive": true,\r\n    "IsTransported": true,\r\n    "IsInventoried": true,\r\n    "IsGiftCardRecharge": false,\r\n    "ImageUrl": "https://lojadobreno.vteximg.com.br/arquivos/ids/155451-55-55/caixa-areia-azul-petmate.jpg?v=637139451191670000",\r\n    "DetailUrl": "/caixa-de-areia-azul-petmate/p",\r\n    "CSCIdentification": null,\r\n    "BrandId": "2000005",\r\n    "BrandName": "Petmate",\r\n    "IsBrandActive": true,\r\n    "Dimension": {\r\n        "cubicweight": 0.2083,\r\n        "height": 10.0000,\r\n        "length": 10.0000,\r\n        "weight": 10.0000,\r\n        "width": 10.0000\r\n    },\r\n    "RealDimension": {\r\n        "realCubicWeight": 0.000,\r\n        "realHeight": 0.0,\r\n        "realLength": 0.0,\r\n        "realWeight": 0.0,\r\n        "realWidth": 0.0\r\n    },\r\n    "ManufacturerCode": "123",\r\n    "IsKit": false,\r\n    "KitItems": [],\r\n    "Services": [],\r\n    "Categories": [],\r\n    "CategoriesFullPath": [\r\n        "/3/15/",\r\n        "/3/",\r\n        "/1/"\r\n    ],\r\n    "Attachments": [],\r\n    "Collections": [],\r\n    "SkuSellers": [\r\n        {\r\n            "SellerId": "1",\r\n            "StockKeepingUnitId": 310118450,\r\n            "SellerStockKeepingUnitId": "310118450",\r\n            "IsActive": true,\r\n            "FreightCommissionPercentage": 0.0,\r\n            "ProductCommissionPercentage": 0.0\r\n        }\r\n    ],\r\n    "SalesChannels": [\r\n        1,\r\n        3\r\n    ],\r\n    "Images": [\r\n        {\r\n            "ImageUrl": "https://lojadobreno.vteximg.com.br/arquivos/ids/155451/caixa-areia-azul-petmate.jpg?v=637139451191670000",\r\n            "ImageName": null,\r\n            "FileId": 155451\r\n        }\r\n    ],\r\n    "Videos": [],\r\n    "SkuSpecifications": [],\r\n    "ProductSpecifications": [],\r\n    "ProductClustersIds": "151,158",\r\n    "PositionsInClusters": {\r\n        "151": 1,\r\n        "158": 2\r\n    },\r\n    "ProductClusterNames": {\r\n        "151": "asdfghj",\r\n        "158": "Coleção halloween"\r\n    },\r\n    "ProductClusterHighlights": {\r\n        "151": "asdfghj"\r\n    },\r\n    "ProductCategoryIds": "/3/15/",\r\n    "IsDirectCategoryActive": true,\r\n    "ProductGlobalCategoryId": 5000,\r\n    "ProductCategories": {\r\n        "15": "Caixa de Areia",\r\n        "3": "Higiene",\r\n        "1": "Alimentação"\r\n    },\r\n    "CommercialConditionId": 1,\r\n    "RewardValue": 0.0,\r\n    "AlternateIds": {\r\n        "RefId": "1"\r\n    },\r\n    "AlternateIdValues": [\r\n        "1"\r\n    ],\r\n    "EstimatedDateArrival": null,\r\n    "MeasurementUnit": "un",\r\n    "UnitMultiplier": 1.0000,\r\n    "InformationSource": null,\r\n    "ModalType": null,\r\n    "KeyWords": "",\r\n    "ReleaseDate": "2020-01-06T00:00:00Z",\r\n    "ProductIsVisible": true,\r\n    "ShowIfNotAvailable": true,\r\n    "IsProductActive": true,\r\n    "ProductFinalScore": 0\r\n}\r\n```',
  operationId: 'SkubyAlternateId',
  request: {
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
              'HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.',
            in: 'header',
            name: 'Accept',
            required: true,
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      alternateId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'Product EAN or RefId.',
            in: 'path',
            name: 'alternateId',
            required: true,
            schema: { example: 10, type: 'integer' },
            style: 'simple',
          },
          example: 10,
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: GetSKUAltIDSchema,
          example: {
            AlternateIdValues: ['1'],
            AlternateIds: { RefId: '1' },
            Attachments: [],
            BrandId: '2000005',
            BrandName: 'Petmate',
            CSCIdentification: null,
            Categories: [],
            CategoriesFullPath: ['/3/15/', '/3/', '/1/'],
            Collections: [],
            CommercialConditionId: 1,
            ComplementName: '',
            DetailUrl: '/caixa-de-areia-azul-petmate/p',
            Dimension: { cubicweight: 0.2083, height: 10, length: 10, weight: 10, width: 10 },
            EstimatedDateArrival: null,
            Id: 310118450,
            ImageUrl:
              'https://lojadobreno.vteximg.com.br/arquivos/ids/155451-55-55/caixa-areia-azul-petmate.jpg?v=637139451191670000',
            Images: [
              {
                FileId: 155451,
                ImageName: null,
                ImageUrl:
                  'https://lojadobreno.vteximg.com.br/arquivos/ids/155451/caixa-areia-azul-petmate.jpg?v=637139451191670000',
              },
            ],
            InformationSource: null,
            IsActive: true,
            IsBrandActive: true,
            IsDirectCategoryActive: true,
            IsGiftCardRecharge: false,
            IsInventoried: true,
            IsKit: false,
            IsProductActive: true,
            IsTransported: true,
            KeyWords: '',
            KitItems: [],
            ManufacturerCode: '123',
            MeasurementUnit: 'un',
            ModalType: null,
            NameComplete: 'Caixa de Areia Azul Petmate sku test',
            PositionsInClusters: { '151': 1, '158': 2 },
            ProductCategories: { '1': 'Alimentação', '3': 'Higiene', '15': 'Caixa de Areia' },
            ProductCategoryIds: '/3/15/',
            ProductClusterHighlights: { '151': 'asdfghj' },
            ProductClusterNames: { '151': 'asdfghj', '158': 'Coleção halloween' },
            ProductClustersIds: '151,158',
            ProductDescription: '',
            ProductFinalScore: 0,
            ProductGlobalCategoryId: 5000,
            ProductId: 2,
            ProductIsVisible: true,
            ProductName: 'Caixa de Areia Azul Petmate',
            ProductRefId: '',
            ProductSpecifications: [],
            RealDimension: {
              realCubicWeight: 0,
              realHeight: 0,
              realLength: 0,
              realWeight: 0,
              realWidth: 0,
            },
            ReleaseDate: '2020-01-06T00:00:00Z',
            RewardValue: 0,
            SalesChannels: [1, 3],
            Services: [],
            ShowIfNotAvailable: true,
            SkuName: 'sku test',
            SkuSellers: [
              {
                FreightCommissionPercentage: 0,
                IsActive: true,
                ProductCommissionPercentage: 0,
                SellerId: '1',
                SellerStockKeepingUnitId: '310118450',
                StockKeepingUnitId: 310118450,
              },
            ],
            SkuSpecifications: [],
            TaxCode: '',
            UnitMultiplier: 1,
            Videos: [],
          },
        },
      },
      headers: z.object({
        'Cache-Control': z
          .string()
          .exactOptional()
          .openapi({ example: 'no-cache', param: { required: false } }),
        Connection: z
          .string()
          .exactOptional()
          .openapi({ example: 'keep-alive', param: { required: false } }),
        'Content-Encoding': z
          .string()
          .exactOptional()
          .openapi({ example: 'gzip', param: { required: false } }),
        Date: z
          .string()
          .exactOptional()
          .openapi({ example: 'Thu, 16 Feb 2017 15:21:38 GMT', param: { required: false } }),
        Expires: z
          .string()
          .exactOptional()
          .openapi({ example: '-1', param: { required: false } }),
        Pragma: z
          .string()
          .exactOptional()
          .openapi({ example: 'no-cache', param: { required: false } }),
        Server: z
          .string()
          .exactOptional()
          .openapi({ example: 'nginx', param: { required: false } }),
        'Transfer-Encoding': z
          .string()
          .exactOptional()
          .openapi({ example: 'chunked', param: { required: false } }),
        Vary: z
          .string()
          .exactOptional()
          .openapi({ example: 'Accept-Encoding, Accept-Encoding', param: { required: false } }),
        'X-CacheServer': z
          .string()
          .exactOptional()
          .openapi({ example: 'janus-apicache-nginx14', param: { required: false } }),
        'X-Powered-by-VTEX-Janus-ApiCache': z
          .string()
          .exactOptional()
          .openapi({ example: 'v1.3.9', param: { required: false } }),
        'X-Powered-by-VTEX-Janus-Edge': z
          .string()
          .exactOptional()
          .openapi({ example: 'v1.36.0-beta', param: { required: false } }),
        'X-Track': z
          .string()
          .exactOptional()
          .openapi({ example: 'beta', param: { required: false } }),
        'X-Translate': z
          .string()
          .exactOptional()
          .openapi({ example: '1', param: { required: false } }),
        'X-Translate-BackEnd': z
          .string()
          .exactOptional()
          .openapi({
            example:
              'http%3A%2F%2Fbeta.janus-router-v2.vtexinternal.com.br%2Fapi%2Fcatalog_system%2Fpvt%2Fsku%2FstockkeepingunitbyalternateId%2F8781',
            param: { required: false },
          }),
        'X-VTEX-Cache-Status-Janus-ApiCache': z
          .string()
          .exactOptional()
          .openapi({ example: 'MISS', param: { required: false } }),
        'X-VTEX-Cache-Status-Janus-Edge': z
          .string()
          .exactOptional()
          .openapi({ example: 'MISS', param: { required: false } }),
        'X-VTEX-Janus-Router-Backend-App': z
          .string()
          .exactOptional()
          .openapi({ example: 'prtapi-v1.4.691-beta.1+530', param: { required: false } }),
        no: z
          .string()
          .exactOptional()
          .openapi({ example: '-8NLU58HJKL2', param: { required: false } }),
        p3p: z
          .string()
          .exactOptional()
          .openapi({
            example: 'policyref="/w3c/p3p.xml",CP="ADMa OUR NOR CNT NID DSP NOI COR"',
            param: { required: false },
          }),
        powered: z
          .string()
          .exactOptional()
          .openapi({ example: 'vtex', param: { required: false } }),
        'x-vtex-operation-id': z
          .string()
          .exactOptional()
          .openapi({ example: '3afef265-3349-4726-842c-638308243e05', param: { required: false } }),
      }),
    },
  },
})

export const getApiCatalogSystemPvtSkuStockkeepingunitbyeanEanRoute = createRoute({
  method: 'get',
  path: '/api/catalog_system/pvt/sku/stockkeepingunitbyean/{ean}',
  tags: ['SKU EAN'],
  summary: 'Get SKU by EAN',
  description:
    'Retrieves an SKU by its EAN ID. \r\n## Response body example\r\n\r\n```json\r\n{\r\n    "Id": 2001773,\r\n    "ProductId": 2001426,\r\n    "NameComplete": "Tabela de Basquete",\r\n    "ProductName": "Tabela de Basquete",\r\n    "ProductDescription": "Tabela de Basquete",\r\n    "SkuName": "Tabela de Basquete",\r\n    "IsActive": true,\r\n    "IsTransported": true,\r\n    "IsInventoried": true,\r\n    "IsGiftCardRecharge": false,\r\n    "ImageUrl": "http://ambienteqa.vteximg.com.br/arquivos/ids/168952-55-55/7508800GG.jpg",\r\n    "DetailUrl": "/tabela-de-basquete/p",\r\n    "CSCIdentification": null,\r\n    "BrandId": "2000018",\r\n    "BrandName": "MARCA ARGOLO TESTE",\r\n    "Dimension": {\r\n        "cubicweight": 81.6833,\r\n        "height": 65,\r\n        "length": 58,\r\n        "weight": 10000,\r\n        "width": 130\r\n    },\r\n    "RealDimension": {\r\n        "realCubicWeight": 274.1375,\r\n        "realHeight": 241,\r\n        "realLength": 65,\r\n        "realWeight": 9800,\r\n        "realWidth": 105\r\n    },\r\n    "ManufacturerCode": "",\r\n    "IsKit": false,\r\n    "KitItems": [],\r\n    "Services": [],\r\n    "Categories": [],\r\n    "Attachments": [\r\n        {\r\n            "Id": 3,\r\n            "Name": "Mensagem",\r\n            "Keys": [\r\n                "nome;20",\r\n                "foto;40"\r\n            ],\r\n            "Fields": [\r\n                {\r\n                    "FieldName": "nome",\r\n                    "MaxCaracters": "20",\r\n                    "DomainValues": "Adalberto,Pedro,João"\r\n                },\r\n                {\r\n                    "FieldName": "foto",\r\n                    "MaxCaracters": "40",\r\n                    "DomainValues": null\r\n                }\r\n            ],\r\n            "IsActive": true,\r\n            "IsRequired": false\r\n        }\r\n    ],\r\n    "Collections": [],\r\n    "SkuSellers": [\r\n        {\r\n            "SellerId": "1",\r\n            "StockKeepingUnitId": 2001773,\r\n            "SellerStockKeepingUnitId": "2001773",\r\n            "IsActive": true,\r\n            "FreightCommissionPercentage": 0,\r\n            "ProductCommissionPercentage": 0\r\n        }\r\n    ],\r\n    "SalesChannels": [\r\n        1,\r\n        2,\r\n        3,\r\n        10\r\n    ],\r\n    "Images": [\r\n        {\r\n            "ImageUrl": "http://ambienteqa.vteximg.com.br/arquivos/ids/168952/7508800GG.jpg",\r\n            "ImageName": "",\r\n            "FileId": 168952\r\n        },\r\n        {\r\n            "ImageUrl": "http://ambienteqa.vteximg.com.br/arquivos/ids/168953/7508800_1GG.jpg",\r\n            "ImageName": "",\r\n            "FileId": 168953\r\n        },\r\n        {\r\n            "ImageUrl": "http://ambienteqa.vteximg.com.br/arquivos/ids/168954/7508800_2GG.jpg",\r\n            "ImageName": "",\r\n            "FileId": 168954\r\n        }\r\n    ],\r\n    "SkuSpecifications": [\r\n        {\r\n            "FieldId": 102,\r\n            "FieldName": "Cor",\r\n            "FieldValueIds": [\r\n                266\r\n            ],\r\n            "FieldValues": [\r\n                "Padrão"\r\n            ]\r\n        }\r\n    ],\r\n    "ProductSpecifications": [\r\n        {\r\n            "FieldId": 7,\r\n            "FieldName": "Faixa Etária",\r\n            "FieldValueIds": [\r\n                58,\r\n                56,\r\n                55,\r\n                52\r\n            ],\r\n            "FieldValues": [\r\n                "5 a 6 anos",\r\n                "7 a 8 anos",\r\n                "9 a 10 anos",\r\n                "Acima de 10 anos"\r\n            ]\r\n        },\r\n        {\r\n            "FieldId": 23,\r\n            "FieldName": "Fabricante",\r\n            "FieldValueIds": [],\r\n            "FieldValues": [\r\n                "Xalingo"\r\n            ]\r\n        }\r\n    ],\r\n    "ProductClustersIds": "176,187,192,194,211,217,235,242",\r\n    "ProductCategoryIds": "/59/",\r\n    "ProductGlobalCategoryId": null,\r\n    "ProductCategories": {\r\n        "59": "Brinquedos"\r\n    },\r\n    "CommercialConditionId": 1,\r\n    "RewardValue": 100.0,\r\n    "AlternateIds": {\r\n        "Ean": "8781",\r\n        "RefId": "878181"\r\n    },\r\n    "AlternateIdValues": [\r\n        "8781",\r\n        "878181"\r\n    ],\r\n    "EstimatedDateArrival": "",\r\n    "MeasurementUnit": "un",\r\n    "UnitMultiplier": 2.0000,\r\n    "InformationSource": null,\r\n    "ModalType": ""\r\n}\r\n```',
  operationId: 'SkubyEAN',
  request: {
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
              'HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.',
            in: 'header',
            name: 'Accept',
            required: true,
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      ean: z
        .string()
        .openapi({
          param: {
            description: 'EAN of the SKU which you need to retrieve details from.',
            example: '1234567890123',
            in: 'path',
            name: 'ean',
            required: true,
            schema: { type: 'string' },
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
          schema: GetSKUAltIDSchema,
          example: {
            AlternateIdValues: ['8781', '878181'],
            AlternateIds: { Ean: '8781', RefId: '878181' },
            Attachments: [
              {
                Fields: [
                  { DomainValues: 'Adalberto,Pedro,João', FieldName: 'nome', MaxCaracters: '20' },
                  { DomainValues: null, FieldName: 'foto', MaxCaracters: '40' },
                ],
                Id: 3,
                IsActive: true,
                IsRequired: false,
                Keys: ['nome;20', 'foto;40'],
                Name: 'Mensagem',
              },
            ],
            BrandId: '2000018',
            BrandName: 'MARCA ARGOLO TESTE',
            CSCIdentification: null,
            Categories: [],
            Collections: [],
            CommercialConditionId: 1,
            DetailUrl: '/tabela-de-basquete/p',
            Dimension: { cubicweight: 81.6833, height: 65, length: 58, weight: 10000, width: 130 },
            EstimatedDateArrival: null,
            Id: 2001773,
            ImageUrl: 'http://ambienteqa.vteximg.com.br/arquivos/ids/168952-55-55/7508800GG.jpg',
            Images: [
              {
                FileId: 168952,
                ImageName: '',
                ImageUrl: 'http://ambienteqa.vteximg.com.br/arquivos/ids/168952/7508800GG.jpg',
              },
              {
                FileId: 168953,
                ImageName: '',
                ImageUrl: 'http://ambienteqa.vteximg.com.br/arquivos/ids/168953/7508800_1GG.jpg',
              },
              {
                FileId: 168954,
                ImageName: '',
                ImageUrl: 'http://ambienteqa.vteximg.com.br/arquivos/ids/168954/7508800_2GG.jpg',
              },
            ],
            InformationSource: null,
            IsActive: true,
            IsGiftCardRecharge: false,
            IsInventoried: true,
            IsKit: false,
            IsTransported: true,
            KitItems: [],
            ManufacturerCode: '',
            MeasurementUnit: 'un',
            ModalType: '',
            NameComplete: 'Tabela de Basquete',
            ProductCategories: { '59': 'Brinquedos' },
            ProductCategoryIds: '/59/',
            ProductClustersIds: '176,187,192,194,211,217,235,242',
            ProductDescription: 'Tabela de Basquete',
            ProductGlobalCategoryId: null,
            ProductId: 2001426,
            ProductName: 'Tabela de Basquete',
            ProductSpecifications: [
              {
                FieldId: 7,
                FieldName: 'Faixa Etária',
                FieldValueIds: [58, 56, 55, 52],
                FieldValues: ['5 a 6 anos', '7 a 8 anos', '9 a 10 anos', 'Acima de 10 anos'],
              },
              { FieldId: 23, FieldName: 'Fabricante', FieldValueIds: [], FieldValues: ['Xalingo'] },
            ],
            RealDimension: {
              realCubicWeight: 274.1375,
              realHeight: 241,
              realLength: 65,
              realWeight: 9800,
              realWidth: 105,
            },
            RewardValue: 100,
            SalesChannels: [1, 2, 3, 10],
            Services: [],
            SkuName: 'Tabela de Basquete',
            SkuSellers: [
              {
                FreightCommissionPercentage: 0,
                IsActive: true,
                ProductCommissionPercentage: 0,
                SellerId: '1',
                SellerStockKeepingUnitId: '2001773',
                StockKeepingUnitId: 2001773,
              },
            ],
            SkuSpecifications: [
              { FieldId: 102, FieldName: 'Cor', FieldValueIds: [266], FieldValues: ['Padrão'] },
            ],
            UnitMultiplier: 2,
          },
        },
      },
      headers: z.object({
        'Cache-Control': z
          .string()
          .exactOptional()
          .openapi({ example: 'no-cache', param: { required: false } }),
        Connection: z
          .string()
          .exactOptional()
          .openapi({ example: 'keep-alive', param: { required: false } }),
        'Content-Encoding': z
          .string()
          .exactOptional()
          .openapi({ example: 'gzip', param: { required: false } }),
        'Content-Length': z
          .string()
          .exactOptional()
          .openapi({ example: '1035', param: { required: false } }),
        Date: z
          .string()
          .exactOptional()
          .openapi({ example: 'Thu, 16 Feb 2017 15:19:46 GMT', param: { required: false } }),
        Expires: z
          .string()
          .exactOptional()
          .openapi({ example: '-1', param: { required: false } }),
        Pragma: z
          .string()
          .exactOptional()
          .openapi({ example: 'no-cache', param: { required: false } }),
        Server: z
          .string()
          .exactOptional()
          .openapi({ example: 'nginx', param: { required: false } }),
        Vary: z
          .string()
          .exactOptional()
          .openapi({ example: 'Accept-Encoding', param: { required: false } }),
        'X-CacheServer': z
          .string()
          .exactOptional()
          .openapi({ example: 'janus-apicache-nginx10', param: { required: false } }),
        'X-Powered-by-VTEX-Janus-ApiCache': z
          .string()
          .exactOptional()
          .openapi({ example: 'v1.3.9', param: { required: false } }),
        'X-Powered-by-VTEX-Janus-Edge': z
          .string()
          .exactOptional()
          .openapi({ example: 'v1.35.3', param: { required: false } }),
        'X-Track': z
          .string()
          .exactOptional()
          .openapi({ example: 'stable', param: { required: false } }),
        'X-VTEX-Cache-Status-Janus-ApiCache': z
          .string()
          .exactOptional()
          .openapi({ example: 'MISS', param: { required: false } }),
        'X-VTEX-Cache-Status-Janus-Edge': z
          .string()
          .exactOptional()
          .openapi({ example: 'MISS', param: { required: false } }),
        'X-VTEX-Janus-Router-Backend-App': z
          .string()
          .exactOptional()
          .openapi({ example: 'prtapi-v1.4.683-stable+527', param: { required: false } }),
        no: z
          .string()
          .exactOptional()
          .openapi({ example: '-QTBJG9KGSVN', param: { required: false } }),
        p3p: z
          .string()
          .exactOptional()
          .openapi({
            example: 'policyref="/w3c/p3p.xml",CP="ADMa OUR NOR CNT NID DSP NOI COR"',
            param: { required: false },
          }),
        powered: z
          .string()
          .exactOptional()
          .openapi({ example: 'vtex', param: { required: false } }),
        'x-vtex-operation-id': z
          .string()
          .exactOptional()
          .openapi({ example: '4d81466f-3a82-4fd0-93f7-d11f64545365', param: { required: false } }),
      }),
    },
  },
})

export const getApiCatalogSystemPvtSkuStockkeepingunitbyidSkuIdRoute = createRoute({
  method: 'get',
  path: '/api/catalog_system/pvt/sku/stockkeepingunitbyid/{skuId}',
  tags: ['SKU'],
  summary: 'Get SKU and context',
  description:
    'Retrieves context of an SKU.\r\n> 📘 Onboarding guide \r\n>\r\n> Check the new [Catalog onboarding guide](https://developers.vtex.com/vtex-rest-api/docs/catalog-overview). We created this guide to improve the onboarding experience for developers at VTEX. It assembles all documentation on our Developer Portal about Catalog and is organized by focusing on the developer\'s journey.\r\n\r\n ## Response body example\r\n\r\n```json\r\n{\r\n    "Id": 2001773,\r\n    "ProductId": 2001426,\r\n    "NameComplete": "Tabela de Basquete",\r\n    "ComplementName": "",\r\n    "ProductName": "Tabela de Basquete",\r\n    "ProductDescription": "Tabela de Basquete",\r\n    "SkuName": "Tabela de Basquete",\r\n    "ProductRefId": "0987",\r\n    "TaxCode": "",\r\n    "IsActive": true,\r\n    "IsTransported": true,\r\n    "IsInventoried": true,\r\n    "IsGiftCardRecharge": false,\r\n    "ImageUrl": "http://ambienteqa.vteximg.com.br/arquivos/ids/168952-55-55/7508800GG.jpg",\r\n    "DetailUrl": "/tabela-de-basquete/p",\r\n    "CSCIdentification": null,\r\n    "BrandId": "2000018",\r\n    "BrandName": "MARCA ARGOLO TESTE",\r\n    "IsBrandActive": true,\r\n    "Dimension": {\r\n        "cubicweight": 81.6833,\r\n        "height": 65,\r\n        "length": 58,\r\n        "weight": 10000,\r\n        "width": 130\r\n    },\r\n    "RealDimension": {\r\n        "realCubicWeight": 274.1375,\r\n        "realHeight": 241,\r\n        "realLength": 65,\r\n        "realWeight": 9800,\r\n        "realWidth": 105\r\n    },\r\n    "ManufacturerCode": "",\r\n    "IsKit": false,\r\n    "KitItems": [],\r\n    "Services": [],\r\n    "Categories": [],\r\n    "CategoriesFullPath": [\r\n        "/1/10/",\r\n        "/1/",\r\n        "/20/"\r\n    ],\r\n    "Attachments": [\r\n        {\r\n            "Id": 3,\r\n            "Name": "Mensagem",\r\n            "Keys": [\r\n                "nome;20",\r\n                "foto;40"\r\n            ],\r\n            "Fields": [\r\n                {\r\n                    "FieldName": "nome",\r\n                    "MaxCaracters": "20",\r\n                    "DomainValues": "Adalberto,Pedro,João"\r\n                },\r\n                {\r\n                    "FieldName": "foto",\r\n                    "MaxCaracters": "40",\r\n                    "DomainValues": null\r\n                }\r\n            ],\r\n            "IsActive": true,\r\n            "IsRequired": false\r\n        }\r\n    ],\r\n    "Collections": [],\r\n    "SkuSellers": [\r\n        {\r\n            "SellerId": "1",\r\n            "StockKeepingUnitId": 2001773,\r\n            "SellerStockKeepingUnitId": "2001773",\r\n            "IsActive": true,\r\n            "FreightCommissionPercentage": 0,\r\n            "ProductCommissionPercentage": 0\r\n        }\r\n    ],\r\n    "SalesChannels": [\r\n        1,\r\n        2,\r\n        3,\r\n        10\r\n    ],\r\n    "Images": [\r\n        {\r\n            "ImageUrl": "http://ambienteqa.vteximg.com.br/arquivos/ids/168952/7508800GG.jpg",\r\n            "ImageName": "",\r\n            "FileId": 168952\r\n        },\r\n        {\r\n            "ImageUrl": "http://ambienteqa.vteximg.com.br/arquivos/ids/168953/7508800_1GG.jpg",\r\n            "ImageName": "",\r\n            "FileId": 168953\r\n        },\r\n        {\r\n            "ImageUrl": "http://ambienteqa.vteximg.com.br/arquivos/ids/168954/7508800_2GG.jpg",\r\n            "ImageName": "",\r\n            "FileId": 168954\r\n        }\r\n    ],\r\n    "Videos": [\r\n        "www.google.com"\r\n    ],\r\n    "SkuSpecifications": [\r\n        {\r\n            "FieldId": 102,\r\n            "FieldName": "Cor",\r\n            "FieldValueIds": [\r\n                266\r\n            ],\r\n            "FieldValues": [\r\n                "Padrão"\r\n            ],\r\n            "IsFilter": false,\r\n            "FieldGroupId": 11,\r\n            "FieldGroupName": "Especificações"\r\n        }\r\n    ],\r\n    "ProductSpecifications": [\r\n        {\r\n            "FieldId": 7,\r\n            "FieldName": "Faixa Etária",\r\n            "FieldValueIds": [\r\n                58,\r\n                56,\r\n                55,\r\n                52\r\n            ],\r\n            "FieldValues": [\r\n                "5 a 6 anos",\r\n                "7 a 8 anos",\r\n                "9 a 10 anos",\r\n                "Acima de 10 anos"\r\n            ],\r\n            "IsFilter": true,\r\n            "FieldGroupId": 17,\r\n            "FieldGroupName": "NewGroupName 2"\r\n        },\r\n        {\r\n            "FieldId": 23,\r\n            "FieldName": "Fabricante",\r\n            "FieldValueIds": [],\r\n            "FieldValues": [\r\n                "Xalingo"\r\n            ],\r\n            "IsFilter": false,\r\n            "FieldGroupId": 17,\r\n            "FieldGroupName": "NewGroupName 2"\r\n        }\r\n    ],\r\n    "ProductClustersIds": "176,187,192,194,211,217,235,242",\r\n    "PositionsInClusters": {\r\n        "151": 3,\r\n        "152": 0,\r\n        "158": 1\r\n    },\r\n    "ProductClusterNames": {\r\n        "151": "asdfghj",\r\n        "152": "George",\r\n        "158": "Coleção halloween"\r\n    },\r\n    "ProductClusterHighlights": {\r\n        "151": "asdfghj",\r\n        "152": "George"\r\n    },\r\n    "ProductCategoryIds": "/59/",\r\n    "IsDirectCategoryActive": false,\r\n    "ProductGlobalCategoryId": null,\r\n    "ProductCategories": {\r\n        "59": "Brinquedos"\r\n    },\r\n    "CommercialConditionId": 1,\r\n    "RewardValue": 100.0,\r\n    "AlternateIds": {\r\n        "Ean": "8781",\r\n        "RefId": "878181"\r\n    },\r\n    "AlternateIdValues": [\r\n        "8781",\r\n        "878181"\r\n    ],\r\n    "EstimatedDateArrival": "",\r\n    "MeasurementUnit": "un",\r\n    "UnitMultiplier": 2.0000,\r\n    "InformationSource": "Indexer",\r\n    "ModalType": "",\r\n    "KeyWords": "basquete, tabela",\r\n    "ReleaseDate": "2020-01-06T00:00:00",\r\n    "ProductIsVisible": true,\r\n    "ShowIfNotAvailable": true,\r\n    "IsProductActive": true,\r\n    "ProductFinalScore": 0\r\n}\r\n```',
  operationId: 'SkuContext',
  request: {
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
              'HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.',
            in: 'header',
            name: 'Accept',
            required: true,
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      skuId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: "SKU's unique identifier number.",
            in: 'path',
            name: 'skuId',
            required: true,
            schema: { example: 2001773, type: 'integer' },
            style: 'simple',
          },
          example: 2001773,
        }),
    }),
    query: z.object({
      sc: z
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
            description: "Trade Policy's unique identifier number.",
            in: 'query',
            name: 'sc',
            required: false,
            schema: { example: 1, type: 'integer' },
            style: 'form',
          },
          example: 1,
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: GetSKUandContextSchema,
          example: {
            AlternateIdValues: ['8781', '878181'],
            AlternateIds: { Ean: '8781', RefId: '878181' },
            Attachments: [
              {
                Fields: [
                  { DomainValues: 'Adalberto,Pedro,João', FieldName: 'nome', MaxCaracters: '20' },
                  { DomainValues: null, FieldName: 'foto', MaxCaracters: '40' },
                ],
                Id: 3,
                IsActive: true,
                IsRequired: false,
                Keys: ['nome;20', 'foto;40'],
                Name: 'Mensagem',
              },
            ],
            BrandId: '2000018',
            BrandName: 'MARCA ARGOLO TESTE',
            CSCIdentification: null,
            Categories: [],
            CategoriesFullPath: ['/1/10/', '/1/', '/20/'],
            Collections: [],
            CommercialConditionId: 1,
            ComplementName: '',
            DetailUrl: '/tabela-de-basquete/p',
            Dimension: { cubicweight: 81.6833, height: 65, length: 58, weight: 10000, width: 130 },
            EstimatedDateArrival: null,
            Id: 2001773,
            ImageUrl: 'http://ambienteqa.vteximg.com.br/arquivos/ids/168952-55-55/7508800GG.jpg',
            Images: [
              {
                FileId: 168952,
                ImageName: '',
                ImageUrl: 'http://ambienteqa.vteximg.com.br/arquivos/ids/168952/7508800GG.jpg',
              },
              {
                FileId: 168953,
                ImageName: '',
                ImageUrl: 'http://ambienteqa.vteximg.com.br/arquivos/ids/168953/7508800_1GG.jpg',
              },
              {
                FileId: 168954,
                ImageName: '',
                ImageUrl: 'http://ambienteqa.vteximg.com.br/arquivos/ids/168954/7508800_2GG.jpg',
              },
            ],
            InformationSource: 'Indexer',
            IsActive: true,
            IsBrandActive: true,
            IsDirectCategoryActive: false,
            IsGiftCardRecharge: false,
            IsInventoried: true,
            IsKit: false,
            IsProductActive: true,
            IsTransported: true,
            KeyWords: 'basquete, tabela',
            KitItems: [],
            ManufacturerCode: '',
            MeasurementUnit: 'un',
            ModalType: null,
            NameComplete: 'Tabela de Basquete',
            PositionsInClusters: { '151': 3, '152': 0, '158': 1 },
            ProductCategories: { '59': 'Brinquedos' },
            ProductCategoryIds: '/59/',
            ProductClusterHighlights: { '151': 'asdfghj', '152': 'George' },
            ProductClusterNames: { '151': 'asdfghj', '152': 'George', '158': 'Coleção halloween' },
            ProductClustersIds: '176,187,192,194,211,217,235,242',
            ProductDescription: 'Tabela de Basquete',
            ProductFinalScore: 0,
            ProductGlobalCategoryId: null,
            ProductId: 2001426,
            ProductIsVisible: true,
            ProductName: 'Tabela de Basquete',
            ProductRefId: '0987',
            ProductSpecifications: [
              {
                FieldGroupId: 17,
                FieldGroupName: 'NewGroupName 2',
                FieldId: 7,
                FieldName: 'Faixa Etária',
                FieldValueIds: [58, 56, 55, 52],
                FieldValues: ['5 a 6 anos', '7 a 8 anos', '9 a 10 anos', 'Acima de 10 anos'],
                IsFilter: true,
              },
              {
                FieldGroupId: 17,
                FieldGroupName: 'NewGroupName 2',
                FieldId: 23,
                FieldName: 'Fabricante',
                FieldValueIds: [],
                FieldValues: ['Xalingo'],
                IsFilter: false,
              },
            ],
            RealDimension: {
              realCubicWeight: 274.1375,
              realHeight: 241,
              realLength: 65,
              realWeight: 9800,
              realWidth: 105,
            },
            ReleaseDate: '2020-01-06T00:00:00',
            RewardValue: 100,
            SalesChannels: [1, 2, 3, 10],
            Services: [],
            ShowIfNotAvailable: true,
            SkuName: 'Tabela de Basquete',
            SkuSellers: [
              {
                FreightCommissionPercentage: 0,
                IsActive: true,
                ProductCommissionPercentage: 0,
                SellerId: '1',
                SellerStockKeepingUnitId: '2001773',
                StockKeepingUnitId: 2001773,
              },
            ],
            SkuSpecifications: [
              {
                FieldGroupId: 11,
                FieldGroupName: 'Especificações',
                FieldId: 102,
                FieldName: 'Cor',
                FieldValueIds: [266],
                FieldValues: ['Padrão'],
                IsFilter: false,
              },
            ],
            TaxCode: '',
            UnitMultiplier: 2,
            Videos: ['www.google.com'],
          },
        },
      },
      headers: z.object({
        'Cache-Control': z
          .string()
          .exactOptional()
          .openapi({ example: 'no-cache', param: { required: false } }),
        Connection: z
          .string()
          .exactOptional()
          .openapi({ example: 'keep-alive', param: { required: false } }),
        'Content-Encoding': z
          .string()
          .exactOptional()
          .openapi({ example: 'gzip', param: { required: false } }),
        'Content-Length': z
          .string()
          .exactOptional()
          .openapi({ example: '1044', param: { required: false } }),
        'Content-Type': z
          .string()
          .exactOptional()
          .openapi({ example: 'application/json; charset=utf-8', param: { required: false } }),
        Date: z
          .string()
          .exactOptional()
          .openapi({ example: 'Mon, 13 Feb 2017 15:15:02 GMT', param: { required: false } }),
        'Last-Modified': z
          .string()
          .exactOptional()
          .openapi({ example: 'Mon, 06 Feb 2017 14:32:02 GMT', param: { required: false } }),
        Vary: z
          .string()
          .exactOptional()
          .openapi({ example: 'Accept-Encoding', param: { required: false } }),
        'X-Powered-By-VTEX-Cache': z
          .string()
          .exactOptional()
          .openapi({ example: '2.3.0', param: { required: false } }),
        'X-VTEX-Cache-Backend-Connect-Time': z
          .string()
          .exactOptional()
          .openapi({ example: '0.004', param: { required: false } }),
        'X-VTEX-Cache-Backend-Header-Time': z
          .string()
          .exactOptional()
          .openapi({ example: '0.416', param: { required: false } }),
        'X-VTEX-Cache-Server': z
          .string()
          .exactOptional()
          .openapi({ example: 'apicache12', param: { required: false } }),
        'X-VTEX-Cache-Status-Janus-ApiCache': z
          .string()
          .exactOptional()
          .openapi({ example: 'MISS', param: { required: false } }),
        'X-VTEX-Cache-Time': z
          .string()
          .exactOptional()
          .openapi({ example: '0.415', param: { required: false } }),
        'X-VTEX-Janus-Router-Backend-App': z
          .string()
          .exactOptional()
          .openapi({ example: 'catalogapi-v3.0.45.54', param: { required: false } }),
      }),
    },
  },
})

export const getApiCatalogSystemPvtSkuStockkeepingunitidbyrefidRefIdRoute = createRoute({
  method: 'get',
  path: '/api/catalog_system/pvt/sku/stockkeepingunitidbyrefid/{refId}',
  tags: ['SKU'],
  summary: 'Get SKU ID by Reference ID',
  description:
    'Retrieves an SKU ID by the SKU\'s Reference ID. \r\n\r\n### Response body example\r\n\r\n```json\r\n"310118450"\r\n```',
  operationId: 'SkuIdbyRefId',
  request: {
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
              'HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.',
            in: 'header',
            name: 'Accept',
            required: true,
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      refId: z
        .string()
        .openapi({
          param: {
            description: 'SKU Reference ID.',
            in: 'path',
            name: 'refId',
            required: true,
            schema: { example: '0001', type: 'string' },
            style: 'simple',
          },
          example: '0001',
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z.string().openapi({ description: 'SKU ID.', example: '1' }),
        },
      },
    },
  },
})

export const getApiCatalogSystemPvtSkuStockkeepingunitidsRoute = createRoute({
  method: 'get',
  path: '/api/catalog_system/pvt/sku/stockkeepingunitids',
  tags: ['SKU'],
  summary: 'List all SKU IDs',
  description:
    "Retrieves the IDs of all SKUs in your store. Presents the results with page size and pagination.\r\n> 📘 Onboarding guide \r\n>\r\n> Check the new [Catalog onboarding guide](https://developers.vtex.com/vtex-rest-api/docs/catalog-overview). We created this guide to improve the onboarding experience for developers at VTEX. It assembles all documentation on our Developer Portal about Catalog and is organized by focusing on the developer's journey.\r\n\r\n### Response body example\r\n\r\n```json\r\n[\r\n  1,\r\n  2,\r\n  3,\r\n  4,\r\n  5,\r\n  6,\r\n  7,\r\n  8,\r\n  9,\r\n  10\r\n]\r\n```",
  operationId: 'ListallSKUIDs',
  request: {
    query: z.object({
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
        .openapi({
          param: {
            description: 'Number of the page from where you need to retrieve SKU IDs.',
            explode: true,
            in: 'query',
            name: 'page',
            required: true,
            schema: { example: 1, type: 'integer' },
            style: 'form',
          },
          example: 1,
        }),
      pagesize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description:
              'Size of the page from where you need retrieve SKU IDs. The maximum value is `1000`.',
            explode: true,
            in: 'query',
            name: 'pagesize',
            required: true,
            schema: { example: 25, type: 'integer' },
            style: 'form',
          },
          example: 25,
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
              'HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.',
            in: 'header',
            name: 'Accept',
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
            .array(z.int32().openapi({ description: 'SKU ID.', example: 1 }))
            .openapi({
              description: 'Array composed by SKU IDs, in the search context.',
              example: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            }),
        },
      },
    },
  },
})

export const getApiCatalogSystemPvtSkuStockkeepingunitidsbysaleschannelRoute = createRoute({
  method: 'get',
  path: '/api/catalog_system/pvt/sku/stockkeepingunitidsbysaleschannel',
  tags: ['Trade Policy'],
  summary: 'List all SKUs of a Trade Policy',
  description:
    'Retrieves a list of SKU IDs of a Trade Policy. \r\n## Response body example\r\n\r\n```json\r\n[\r\n    405380,\r\n    405381,\r\n    405382,\r\n    405383,\r\n    405384,\r\n    405385,\r\n    405386,\r\n    405387,\r\n    405388,\r\n    405389,\r\n    405390,\r\n    405391,\r\n    405392,\r\n    405393,\r\n    405394,\r\n    405395,\r\n    405396,\r\n    405397,\r\n    405398,\r\n    405399,\r\n    405400,\r\n    405556\r\n]\r\n```',
  request: {
    headers: z.object({
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
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
    }),
    query: z.object({
      sc: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'Trade Policy’s unique numerical identifier.',
            in: 'query',
            name: 'sc',
            required: true,
            schema: { example: 1, type: 'integer' },
            style: 'form',
          },
          example: 1,
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
            description: 'Page number.',
            in: 'query',
            name: 'page',
            required: false,
            schema: { example: 1, type: 'integer' },
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
            description: 'Number of items in the page.',
            in: 'query',
            name: 'pageSize',
            required: false,
            schema: { example: 1, type: 'integer' },
          },
          example: 1,
        }),
      onlyAssigned: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'If set as `false`, it allows the user to decide if the SKUs that are not assigned to a specific trade policy should be also returned.',
            in: 'query',
            name: 'onlyAssigned',
            required: false,
            schema: { example: true, type: 'boolean' },
          },
          example: true,
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .array(z.int().openapi({ example: 1 }))
            .openapi({ description: 'List of SKU IDs of the Trade Policy.', title: 'data' }),
          example: [
            405380, 405381, 405382, 405383, 405384, 405385, 405386, 405387, 405388, 405389, 405390,
            405391, 405392, 405393, 405394, 405395, 405396, 405397, 405398, 405399, 405400, 405556,
          ],
        },
      },
    },
  },
})

export const postApiCatalogSystemPvtSkusellerChangenotificationSellerIdSellerSkuIdRoute =
  createRoute({
    method: 'post',
    path: '/api/catalog_system/pvt/skuseller/changenotification/{sellerId}/{sellerSkuId}',
    tags: ['SKU Seller'],
    summary: 'Change Notification with Seller ID and Seller SKU ID',
    description:
      ' > ⚠️ Check out the updated version of the SKU Seller endpoints in our [SKU Bindings API documentation](https://developers.vtex.com/vtex-rest-api/reference/getbyskuid). If you are doing this integration for the first time, we recommend that you follow the updated documentation.\n\nThe seller is responsible for suggesting new SKUs to be sold in the VTEX marketplace and also for informing the marketplace about changes in their SKUs that already exist in the marketplace. Both actions start with a catalog notification, which is made by this request.\n\nWith this notification, the seller is telling the marketplace that something has changed about a specific SKU, like price or inventory, or that this is a new SKU that the seller would like to offer to the marketplace.\n\nThere are two information expected by the marketplace in this request: the `sellerId`, which identifies the seller, and the `sellerSkuId`, which identifies the binding of the seller with the SKU.\n\nBoth information are passed through the request URL. The body of the request should be empty.',
    request: {
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
                'HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.',
              in: 'header',
              name: 'Accept',
              required: true,
              schema: { default: 'application/json', type: 'string' },
              style: 'simple',
            },
          }),
      }),
      params: z.object({
        sellerId: z
          .string()
          .openapi({
            param: {
              description:
                'ID that identifies the seller in the marketplace. It can be the same as the seller name or a unique number. Check the **Sellers management** section in the Admin to get the correct ID.',
              in: 'path',
              name: 'sellerId',
              required: true,
              schema: { example: '101', type: 'string' },
              style: 'simple',
            },
            example: '101',
          }),
        sellerSkuId: z
          .string()
          .openapi({
            param: {
              description: 'ID of the binding of the seller with the SKU.',
              in: 'path',
              name: 'sellerSkuId',
              required: true,
              schema: { example: '1', type: 'string' },
              style: 'simple',
            },
            example: '1',
          }),
      }),
    },
    responses: { 204: { description: 'No Content' } },
  })

export const postApiCatalogSystemPvtSkusellerChangenotificationSkuIdRoute = createRoute({
  method: 'post',
  path: '/api/catalog_system/pvt/skuseller/changenotification/{skuId}',
  tags: ['SKU Seller'],
  summary: 'Change Notification with SKU ID',
  description:
    ' > ⚠️ Check out the updated version of the SKU Seller endpoints in our [SKU Bindings API documentation](https://developers.vtex.com/vtex-rest-api/reference/getbyskuid). If you are doing this integration for the first time, we recommend that you follow the updated documentation.\n\nThe seller is responsible for suggesting new SKUs to be sold in the VTEX marketplace and also for informing the marketplace about changes in their SKUs that already exist in the marketplace. Both actions start with a catalog notification, which is made by this request.\n\nWith this notification, the seller is telling the marketplace that something has changed about a specific SKU, like price or inventory, or that this is a new SKU that the seller would like to offer to the marketplace.\n\nThe body of the request should be empty.\r\n## Example\r\n\r\nLet\'s say your seller has the ID `123` in the marketplace and you want to inform the marketplace that has been a change in the SKU with ID `700`.\r\n\r\nIn this case, you would have to replace the `sellerId` parameter with the value `123` and the `skuId` parameter with the value `700`. The URL of the request would be the following.\r\n\r\n```\r\nhttps://{{accountName}}.vtexcommercestable.com.br/api/catalog_system/pvt/skuseller/changenotification/123/700\r\n```\r\n\r\n## Response codes\r\n\r\nThe following response codes are possible for this request.\r\n\r\n* 404: the SKU was not found in the marketplace. The body of the response, in this case, should follow this format: "Seller StockKeepingUnit `{{skuId}}` not found for this seller id `{{sellerId}}`". This means that the seller can now proceed with sending an offer to the marketplace in order to suggest that this SKU is sold there.\r\n* 200: the SKU whose ID was informed in the URL already exists in the marketplace and was found. The marketplace can now proceed with a fulfillment simulation in order to get updated information about this SKU\'s inventory and price.\r\n* 429 - Failure due to too many requests.\r\n* 403 - Failure in the authentication.',
  operationId: 'ChangeNotification',
  request: {
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
              'HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.',
            in: 'header',
            name: 'Accept',
            required: true,
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      skuId: z
        .string()
        .openapi({
          param: {
            description:
              'A string that identifies the SKU in the marketplace. This is the ID that the marketplace will use to look for the SKU whose change the seller wants to inform. If the marketplace finds this ID, it responds with status code 200. Otherwise, it responds with status code 404.',
            in: 'path',
            name: 'skuId',
            required: true,
            schema: { example: '10', type: 'string' },
            style: 'simple',
          },
          example: '10',
        }),
    }),
  },
  responses: {
    200: { description: 'OK' },
    403: { description: 'Forbidden' },
    404: {
      description: 'Not found',
      content: {
        'text/plain': {
          schema: z.string(),
          example:
            'Seller StockKeepingUnit `{{skuId}}` not found for this seller id `{{sellerId}}`',
        },
      },
    },
    429: { description: 'Too many requests' },
  },
})

export const postApiCatalogSystemPvtSkusellerRemoveSellerIdSellerSkuIdRoute = createRoute({
  method: 'post',
  path: '/api/catalog_system/pvt/skuseller/remove/{sellerId}/{sellerSkuId}',
  tags: ['SKU Seller'],
  summary: "Remove a seller's SKU binding",
  description:
    " > ⚠️ Check out the updated version of the SKU Seller endpoints in our [SKU Bindings API documentation](https://developers.vtex.com/vtex-rest-api/reference/getbyskuid). If you are doing this integration for the first time, we recommend that you follow the updated documentation.\n\nRemove a seller's SKU binding, given the seller ID and the SKU ID in the seller's store.",
  operationId: 'DeleteSKUsellerassociation',
  request: {
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
              'HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.',
            in: 'header',
            name: 'Accept',
            required: true,
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      sellerId: z
        .string()
        .openapi({
          param: {
            description:
              'ID that identifies the seller in the marketplace. It can be the same as the seller name or a unique number. Check the **Sellers management** section in the Admin to get the correct ID.',
            in: 'path',
            name: 'sellerId',
            required: true,
            schema: { example: '101', type: 'string' },
            style: 'simple',
          },
          example: '101',
        }),
      sellerSkuId: z
        .string()
        .openapi({
          param: {
            description: "SKU ID in the seller's store.",
            in: 'path',
            name: 'sellerSkuId',
            required: true,
            schema: { example: '1', type: 'string' },
            style: 'simple',
          },
          example: '1',
        }),
    }),
  },
  responses: { 200: { description: 'OK' } },
})

export const getApiCatalogSystemPvtSkusellerSellerIdSellerSkuIdRoute = createRoute({
  method: 'get',
  path: '/api/catalog_system/pvt/skuseller/{sellerId}/{sellerSkuId}',
  tags: ['SKU Seller'],
  summary: "Get details of a seller's SKU",
  description:
    ' > ⚠️ Check out the updated version of the SKU Seller endpoints in our [SKU Bindings API documentation](https://developers.vtex.com/vtex-rest-api/reference/getbyskuid). If you are doing this integration for the first time, we recommend that you follow the updated documentation.\n\nRetrieves the details of a seller\'s SKU given a seller ID and the SKU ID in the seller\'s store. \r\n## Response body example\r\n\r\n```json\r\n{\r\n    "IsPersisted": true,\r\n    "IsRemoved": false,\r\n    "SkuSellerId": 799,\r\n    "SellerId": "myseller",\r\n    "StockKeepingUnitId": 50,\r\n    "SellerStockKeepingUnitId": "502",\r\n    "IsActive": true,\r\n    "UpdateDate": "2018-10-11T04:52:42.1",\r\n    "RequestedUpdateDate": null\r\n}\r\n```',
  operationId: 'GetSKUseller',
  request: {
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
              'HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.',
            in: 'header',
            name: 'Accept',
            required: true,
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      sellerId: z
        .string()
        .openapi({
          param: {
            description:
              'ID that identifies the seller in the marketplace. It can be the same as the seller name or a unique number. Check the **Sellers management** section in the Admin to get the correct ID.',
            in: 'path',
            name: 'sellerId',
            required: true,
            schema: { example: '101', type: 'string' },
            style: 'simple',
          },
          example: '101',
        }),
      sellerSkuId: z
        .string()
        .openapi({
          param: {
            description: "SKU ID in the seller's store.",
            in: 'path',
            name: 'sellerSkuId',
            required: true,
            schema: { example: '1', type: 'string' },
            style: 'simple',
          },
          example: '1',
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
              IsActive: z
                .boolean()
                .openapi({ description: 'Defines if the SKU binding is active.' }),
              IsPersisted: z
                .boolean()
                .openapi({ description: 'Defines if the seller is persisted.' }),
              IsRemoved: z.boolean().openapi({ description: 'Defines if the seller is removed.' }),
              RequestedUpdateDate: z
                .string()
                .nullable()
                .openapi({
                  description:
                    'Date when an SKU binding update was requested for the last time, in UTC format.',
                }),
              SellerId: z
                .string()
                .openapi({
                  description:
                    'ID that identifies the seller in the marketplace. It can be the same as the seller name or a unique number. Check the **Sellers management** section in the Admin to get the correct ID.',
                }),
              SellerStockKeepingUnitId: z.string().openapi({ description: 'SKU seller ID.' }),
              SkuSellerId: z.int32().openapi({ description: "SKU ID in the seller's store." }),
              StockKeepingUnitId: z
                .int32()
                .openapi({ description: 'SKU ID in the VTEX marketplace.' }),
              UpdateDate: z
                .string()
                .openapi({
                  description:
                    'Date when the SKU binding was updated for the last time, in UTC format.',
                }),
            })
            .openapi({
              example: {
                IsActive: true,
                IsPersisted: true,
                IsRemoved: false,
                RequestedUpdateDate: null,
                SellerId: 'myseller',
                SellerStockKeepingUnitId: '502',
                SkuSellerId: 799,
                StockKeepingUnitId: 50,
                UpdateDate: '2018-10-11T04:52:42.1',
              },
              required: [
                'IsPersisted',
                'IsRemoved',
                'SkuSellerId',
                'SellerId',
                'StockKeepingUnitId',
                'SellerStockKeepingUnitId',
                'IsActive',
                'UpdateDate',
                'RequestedUpdateDate',
              ],
            }),
        },
      },
    },
  },
})

export const putApiCatalogSystemPvtSpecificationFieldRoute = createRoute({
  method: 'put',
  path: '/api/catalog_system/pvt/specification/field',
  tags: ['Specification Field'],
  summary: 'Update Specification Field',
  description:
    'Updates a specification field in a category. \r\n>⚠️ This is a legacy endpoint. We recommend using [Update Specification](https://developers.vtex.com/vtex-rest-api/reference/catalog-api-put-specification) instead.\r\n\r\n## Request body example\r\n\r\n```json\r\n{\r\n    "FieldId": 89,\r\n    "Name": "Material",\r\n    "CategoryId": 4,\r\n    "IsActive": true,\r\n    "IsRequired": true,\r\n    "FieldTypeId": 1,\r\n    "Description": "Composition of the product.",\r\n    "IsStockKeepingUnit": false,\r\n    "IsFilter": true,\r\n    "IsOnProductDetails": true,\r\n    "Position": 1,\r\n    "IsWizard": false,\r\n    "IsTopMenuLinkActive": false,\r\n    "IsSideMenuLinkActive": false,\r\n    "DefaultValue": "Cotton",\r\n    "FieldGroupId": 20,\r\n    "FieldGroupName": "Clothes specifications"\r\n}\r\n```\r\n\r\n## Response body example\r\n\r\n```json\r\n89\r\n```',
  operationId: 'SpecificationsInsertFieldUpdate',
  request: {
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
              'HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.',
            in: 'header',
            name: 'Accept',
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
          schema: SpecificationsInsertFieldUpdateRequestSchema,
          example: {
            CategoryId: 4,
            DefaultValue: 'Cotton',
            Description: 'Composition of the product.',
            FieldGroupId: 20,
            FieldGroupName: 'Clothes specifications',
            FieldId: 89,
            FieldTypeId: 1,
            IsActive: true,
            IsFilter: true,
            IsOnProductDetails: true,
            IsRequired: true,
            IsSideMenuLinkActive: false,
            IsStockKeepingUnit: false,
            IsTopMenuLinkActive: false,
            IsWizard: false,
            Name: 'Material',
            Position: 1,
          },
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
          schema: z.int().openapi({ description: 'Specification field ID.' }),
          example: 89,
        },
      },
    },
  },
})

export const postApiCatalogSystemPvtSpecificationFieldRoute = createRoute({
  method: 'post',
  path: '/api/catalog_system/pvt/specification/field',
  tags: ['Specification Field'],
  summary: 'Create Specification Field',
  description:
    'Creates a specification field in a category. \r\n>⚠️ This is a legacy endpoint. We recommend using [Create Specification](https://developers.vtex.com/vtex-rest-api/reference/catalog-api-post-specification) instead.\r\n\r\n## Request body example\r\n\r\n```json\r\n{\r\n    "Name": "Material",\r\n    "CategoryId": 4,\r\n    "FieldId": 88,\r\n    "IsActive": true,\r\n    "IsRequired": true,\r\n    "FieldTypeId": 1,\r\n    "FieldValueId": 1,\r\n    "IsStockKeepingUnit": false,\r\n    "Description": "Composition of the product.",\r\n    "IsFilter": true,\r\n    "IsOnProductDetails": false,\r\n    "Position": 1,\r\n    "IsWizard": false,\r\n    "IsTopMenuLinkActive": true,\r\n    "IsSideMenuLinkActive": true,\r\n    "DefaultValue": null,\r\n    "FieldGroupId": 20,\r\n    "FieldGroupName": "Clothes specifications"\r\n}\r\n```\r\n\r\n## Response body example\r\n\r\n```json\r\n89\r\n```',
  operationId: 'SpecificationsInsertField',
  request: {
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
              'HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.',
            in: 'header',
            name: 'Accept',
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
          schema: SpecificationsInsertFieldRequestSchema,
          example: {
            CategoryId: 4,
            DefaultValue: null,
            Description: 'Composition of the product.',
            FieldGroupId: 20,
            FieldGroupName: 'Clothes specifications',
            FieldId: 88,
            FieldTypeId: 1,
            FieldValueId: 1,
            IsActive: true,
            IsFilter: true,
            IsOnProductDetails: false,
            IsRequired: true,
            IsSideMenuLinkActive: true,
            IsStockKeepingUnit: false,
            IsTopMenuLinkActive: true,
            IsWizard: false,
            Name: 'Material',
            Position: 1,
          },
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
          schema: z.int().openapi({ description: 'Specification field ID.' }),
          example: 89,
        },
      },
    },
  },
})

export const putApiCatalogSystemPvtSpecificationFieldValueRoute = createRoute({
  method: 'put',
  path: '/api/catalog_system/pvt/specification/fieldValue',
  tags: ['Specification Field Value'],
  summary: 'Update Specification Field Value',
  description:
    'Updates a specification field value by the specification field\'s ID. \r\n>⚠️ This is a legacy endpoint. We recommend using [Update Specification Field Value](https://developers.vtex.com/vtex-rest-api/reference/catalog-api-put-specification-value-id) instead.\r\n\r\n\r\n## Request body example\r\n\r\n```json\r\n{\r\n    "FieldId": 1,\r\n    "FieldValueId": 143,\r\n    "Name": "Cotton",\r\n    "Text": "Cotton fibers",\r\n    "IsActive": true,\r\n    "Position": 100\r\n}\r\n```\r\n\r\n## Response body example (200 OK)\r\n\r\n```json\r\n"Field Value Updated"\r\n```',
  operationId: 'SpecificationsUpdateFieldValue',
  request: {
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
              'HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.',
            in: 'header',
            name: 'Accept',
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
          schema: SpecificationsUpdateFieldValueRequestSchema,
          example: {
            FieldId: 1,
            FieldValueId: 143,
            IsActive: true,
            Name: 'Cotton',
            Position: 100,
            Text: 'Cotton fibers',
          },
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
          schema: z.string().openapi({ description: 'Status of the request.' }),
          example: 'Field Value Updated',
        },
      },
    },
  },
})

export const postApiCatalogSystemPvtSpecificationFieldValueRoute = createRoute({
  method: 'post',
  path: '/api/catalog_system/pvt/specification/fieldValue',
  tags: ['Specification Field Value'],
  summary: 'Create Specification Field Value',
  description:
    'Creates a specification field value by the specification field\'s ID. \r\n>⚠️ This is a legacy endpoint. We recommend using [Create Specification Value](https://developers.vtex.com/vtex-rest-api/reference/catalog-api-post-specification-value) instead.\r\n\r\n\r\n## Request body example\r\n\r\n```json\r\n{\r\n    "FieldId": 34,\r\n    "Name": "Cotton",\r\n    "Text": "Cotton fibers",\r\n    "IsActive": true,\r\n    "Position": 100\r\n}\r\n```\r\n\r\n## Response body example\r\n\r\n```json\r\n{\r\n    "FieldValueId": 143,\r\n    "FieldId": 34,\r\n    "Name": "Cotton",\r\n    "Text": "Cotton fibers",\r\n    "IsActive": true,\r\n    "Position": 100\r\n}\r\n```',
  operationId: 'SpecificationsInsertFieldValue',
  request: {
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
              'HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.',
            in: 'header',
            name: 'Accept',
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
          schema: SpecificationsInsertFieldValueRequestSchema,
          example: {
            FieldId: 34,
            IsActive: true,
            Name: 'Cotton',
            Position: 100,
            Text: 'Cotton fibers',
          },
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
              FieldId: z.int().exactOptional().openapi({ description: 'Specification Field ID.' }),
              FieldValueId: z
                .int32()
                .exactOptional()
                .openapi({ description: 'Specification Field Value ID.' }),
              IsActive: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Defines if the Specification Field Value is active (`true`) or inactive (`false`).',
                }),
              Name: z
                .string()
                .exactOptional()
                .openapi({ description: 'Specification Field Value Name.' }),
              Position: z
                .int32()
                .exactOptional()
                .openapi({ description: 'Specification Field Value Position.' }),
              Text: z
                .string()
                .exactOptional()
                .openapi({ description: 'Specification Field Value Description.' }),
            })
            .openapi({ title: '', required: [] }),
          example: {
            FieldId: 34,
            FieldValueId: 143,
            IsActive: true,
            Name: 'Cotton',
            Position: 100,
            Text: 'Cotton fibers',
          },
        },
      },
    },
  },
})

export const getApiCatalogSystemPvtSpecificationFieldValueFieldValueIdRoute = createRoute({
  method: 'get',
  path: '/api/catalog_system/pvt/specification/fieldValue/{fieldValueId}',
  tags: ['Specification Field Value'],
  summary: 'Get Specification Field Value',
  description:
    'Retrieves details from a specification field\'s value by this value\'s ID. \r\n>⚠️ This is a legacy endpoint. We recommend using [Get Specification Value](https://developers.vtex.com/vtex-rest-api/reference/catalog-api-get-specification-value-id) instead.\r\n\r\n## Response body example\r\n\r\n```json\r\n{\r\n    "FieldValueId": 143,\r\n    "FieldId": 34,\r\n    "Name": "TesteInsert",\r\n    "Text": "Value Description",\r\n    "IsActive": true,\r\n    "Position": 100\r\n}\r\n```',
  operationId: 'SpecificationsGetFieldValue',
  request: {
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
              'HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.',
            in: 'header',
            name: 'Accept',
            required: true,
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      fieldValueId: z
        .string()
        .openapi({
          param: {
            description: '',
            in: 'path',
            name: 'fieldValueId',
            required: true,
            schema: { example: '143', type: 'string' },
            style: 'simple',
          },
          example: '143',
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
              FieldId: z.int().exactOptional().openapi({ description: 'Specification Field ID.' }),
              FieldValueId: z
                .int32()
                .exactOptional()
                .openapi({ description: 'Specification Field Value ID.' }),
              IsActive: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Defines if the Specification Field Value is active (`true`) or inactive (`false`).',
                }),
              Name: z
                .string()
                .exactOptional()
                .openapi({ description: 'Specification Field Value Name.' }),
              Position: z
                .int32()
                .exactOptional()
                .openapi({ description: 'Specification Field Value Position.' }),
              Text: z
                .string()
                .exactOptional()
                .openapi({ description: 'Specification Field Value Description.' }),
            })
            .openapi({ title: '', required: [] }),
          example: {
            FieldId: 34,
            FieldValueId: 143,
            IsActive: true,
            Name: 'Cotton',
            Position: 100,
            Text: 'Cotton fibers',
          },
        },
      },
    },
  },
})

export const getApiCatalogSystemPvtSpecificationGroupbycategoryCategoryIdRoute = createRoute({
  method: 'get',
  path: '/api/catalog_system/pvt/specification/groupbycategory/{categoryId}',
  tags: ['Specification Group'],
  summary: 'List Specification Group by Category',
  description:
    'Retrieves a list of specification groups by the category ID. \r\n## Response body example\r\n\r\n```json\r\n[\r\n    {\r\n      "CategoryId": 1,\r\n      "Id": 5,\r\n      "Name": "Materials",\r\n      "Position": 2\r\n    },\r\n    {\r\n      "CategoryId": 1,\r\n      "Id": 6,\r\n      "Name": "Sizes",\r\n      "Position": 3\r\n    }\r\n  ]\r\n```',
  operationId: 'SpecificationsGroupListbyCategory',
  request: {
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
              'HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.',
            in: 'header',
            name: 'Accept',
            required: true,
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      categoryId: z
        .string()
        .openapi({
          param: {
            description: '',
            in: 'path',
            name: 'categoryId',
            required: true,
            schema: { example: '1', type: 'string' },
            style: 'simple',
          },
          example: '1',
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z.array(SpecificationsGroupSchema),
          example: [
            { CategoryId: 1, Id: 5, Name: 'Materials', Position: 2 },
            { CategoryId: 1, Id: 6, Name: 'Sizes', Position: 3 },
          ],
        },
      },
    },
  },
})
