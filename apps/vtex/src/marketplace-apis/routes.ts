import { createRoute, z } from '@hono/zod-openapi'

const AccountableSchema = z
  .object({
    email: z
      .string()
      .default('email@email.com')
      .openapi({
        description: 'Email address of the person responsible for the seller.',
        title: 'email',
      }),
    name: z
      .string()
      .default('Jane Smith')
      .openapi({ description: 'Name of the person responsible for the seller.', title: 'name' }),
    phone: z
      .string()
      .default('1234567890')
      .openapi({
        description: 'Phone number of the person responsible for the seller.',
        title: 'phone',
      }),
  })
  .openapi({ required: ['name', 'email', 'phone'], title: 'accountable' })
  .openapi('Accountable')

const AddressSchema = z
  .object({
    city: z
      .string()
      .default('Rio de Janeiro')
      .openapi({ description: "City name, from the seller's address.", title: 'city' }),
    complement: z
      .string()
      .default('Appartment 1234')
      .openapi({ description: "Seller's address complement.", title: 'complement' }),
    neighborhood: z
      .string()
      .default('VTEX quarter')
      .openapi({ description: "Seller's address neighborhood.", title: 'The neighborhood schema' }),
    number: z
      .string()
      .default('25')
      .openapi({ description: "Street's number, from the seller's address.", title: 'number' }),
    postalcode: z
      .string()
      .default('12345678')
      .openapi({ description: "Postal code from the seller's address.", title: 'postalCode' }),
    state: z
      .string()
      .default('RJ')
      .openapi({ description: "State, from the seller's address.", title: 'state' }),
    street: z
      .string()
      .default('VTEX street')
      .openapi({ description: "Street information, from the seller's address.", title: 'street' }),
  })
  .openapi({
    required: ['postalcode', 'complement', 'street', 'number', 'neighborhood', 'state', 'city'],
    title: 'address',
  })
  .openapi('Address')

const AcceptSellerLeadRequestSchema = z
  .object({
    accountId: z
      .string()
      .default('5fb38ace-d95e-45ad-970d-ee97cce9fbcd')
      .openapi({ description: "Marketplace's account ID" }),
    accountable: AccountableSchema,
    address: AddressSchema,
    document: z
      .string()
      .default('12345671000')
      .openapi({ description: "Company's legal document code." }),
    email: z
      .string()
      .default('seller@email.com')
      .openapi({ description: 'email of the admin responsible for the seller.' }),
    hasAcceptedLegalTerms: z
      .boolean()
      .default(true)
      .openapi({
        description:
          "Indicates if the seller has accepted the platform's legal terms and conditions.",
      }),
    salesChannel: z
      .string()
      .default('1')
      .openapi({
        description:
          'Sales channel (or [trade policy](https://help.vtex.com/en/tutorial/como-funciona-uma-politica-comercial--6Xef8PZiFm40kg2STrMkMV#master-data)) associated to the seller account created.',
      }),
    sellerAccountName: z
      .string()
      .default('seller123')
      .openapi({
        description: "Name of the seller's account, part of the url of their VTEX Admin.",
      }),
    sellerEmail: z
      .string()
      .default('selleremail@email.com')
      .openapi({ description: "Seller's contact email." }),
    sellerName: z
      .string()
      .default('Seller Name')
      .openapi({ description: "Seller's store's name." }),
    sellerType: z
      .int32()
      .default(1)
      .openapi({
        description:
          'Type of seller, including: \n\n`1`: regular seller \n\n`2`: whitelabel seller',
      }),
  })
  .openapi({
    example: {
      accountId: '5fb38ace-d95e-45ad-970d-ee97cce9fbcd',
      accountable: { email: 'email@email.com', name: 'Jane Smith', phone: '1234567890' },
      address: {
        city: 'Rio de Janeiro',
        complement: 'Appartment 1234',
        neighborhood: 'VTEX quarter',
        number: '25',
        postalcode: '12345678',
        state: 'RJ',
        street: 'VTEX street',
      },
      affiliateId: 'MKP',
      document: '12345671000',
      email: 'seller@email.com',
      hasAcceptedLegalTerms: true,
      salesChannel: '1',
      sellerAccountName: 'seller123',
      sellerEmail: 'selleremail@email.com',
      sellerName: 'Seller Name',
      sellerType: 1,
    },
    required: [
      'sellerEmail',
      'sellerName',
      'sellerAccountName',
      'salesChannel',
      'email',
      'sellerType',
      'accountId',
      'document',
      'hasAcceptedLegalTerms',
      'address',
      'accountable',
    ],
    title: '',
  })
  .openapi('AcceptSellerLeadRequest')

const AvailableSalesChannelSchema = z
  .object({
    id: z.int32().default(1).openapi({ description: "Sales Channel's ID." }),
    isSelected: z
      .boolean()
      .default(true)
      .openapi({
        description:
          'Flag defining if the sales channel (or [trade policy](https://help.vtex.com/en/tutorial/como-funciona-uma-politica-comercial--6Xef8PZiFm40kg2STrMkMV#master-data)) is selected or not.',
      }),
    name: z.string().default('Main Store').openapi({ description: 'Name of the Sales Channel.' }),
  })
  .openapi({
    example: { id: 1, isSelected: true, name: 'Loja Principal' },
    required: ['isSelected', 'id', 'name'],
    title: 'Available Sales Channel',
  })
  .openapi('AvailableSalesChannel')

const BulkUpsertSellerCommissionsRequestSchema = z
  .object({
    categoryFullPath: z
      .string()
      .nullable()
      .default('Appliances/Oven')
      .openapi({
        description:
          "Full path to the SKU's category. It should be written as {department}/{category}. For example: if the department is **Appliances** and the category is **Oven**, the full path should be 'Appliances/Oven'.",
      }),
    categoryId: z
      .string()
      .default('6')
      .openapi({
        description:
          "Marketplace's Category ID that the product belongs to, configured in the Catalog.",
      }),
    freightCommissionPercentage: z
      .number()
      .default(2.43)
      .openapi({ description: 'Percentage of the comission applied to the freight in decimals.' }),
    productCommissionPercentage: z
      .number()
      .default(9.85)
      .openapi({ description: 'Percentage of the comission applied to the product in decimals.' }),
  })
  .openapi({
    example: {
      categoryFullPath: null,
      categoryId: '6',
      freightCommissionPercentage: 2.43,
      productCommissionPercentage: 9.85,
    },
    required: [
      'categoryId',
      'categoryFullPath',
      'productCommissionPercentage',
      'freightCommissionPercentage',
    ],
    title: '',
  })
  .openapi('BulkUpsertSellerCommissionsRequest')

const CreateSellerLeadRequestSchema = z
  .object({
    accountId: z
      .string()
      .default('5fb38ace-d95e-45ad-970d-ee97cce9fbcd')
      .openapi({ description: "Marketplace's account ID" }),
    accountable: AccountableSchema,
    address: AddressSchema,
    document: z
      .string()
      .default('12345671000')
      .openapi({ description: "Company's legal document code." }),
    email: z.string().default('email@email.com'),
    hasAcceptedLegalTerms: z
      .boolean()
      .default(true)
      .openapi({
        description:
          "Indicates if the seller has accepted the platform's legal terms and conditions.",
      }),
    salesChannel: z
      .string()
      .default('1')
      .openapi({
        description:
          'Sales channel (or [trade policy](https://help.vtex.com/en/tutorial/como-funciona-uma-politica-comercial--6Xef8PZiFm40kg2STrMkMV#master-data)) associated to the seller account created.',
      }),
    sellerAccountName: z
      .string()
      .default('seller123')
      .openapi({
        description: "Name of the seller's account, part of the url of their VTEX Admin.",
      }),
    sellerEmail: z
      .string()
      .default('selleremail@email.com')
      .openapi({ description: "Seller's contact email;" }),
    sellerName: z
      .string()
      .default('Seller Name')
      .openapi({ description: "Seller's store's name." }),
    sellerType: z
      .int32()
      .default(1)
      .openapi({
        description:
          'Type of seller, including: \n\n`1`: regular seller \n\n`2`: whitelabel seller',
      }),
  })
  .openapi({
    required: [
      'sellerEmail',
      'sellerName',
      'sellerAccountName',
      'salesChannel',
      'email',
      'sellerType',
      'accountId',
      'accountable',
      'hasAcceptedLegalTerms',
      'address',
      'document',
    ],
    title: '',
  })
  .openapi('CreateSellerLeadRequest')

const GroupsSchema = z
  .object({
    id: z
      .string()
      .default('8d845239bf1448dc8bc3ed3121837511')
      .exactOptional()
      .openapi({ description: "Group's unique identifier code." }),
    name: z
      .string()
      .default('franchise Accounts')
      .exactOptional()
      .openapi({ description: 'Name of the tag chosen to identify the group.' }),
  })
  .openapi({
    description:
      'Array of groups attached to the seller. Groups are defined by key-words that group sellers into categories defined by the marketplace when adding a new seller through the [Configure Seller Account](https://developers.vtex.com/vtex-rest-api/reference/sellers#putupsertseller) endpoint. It is possible to filter sellers by group in the Seller Management page in your VTEX Admin. Know more about groups through our [Seller Management](https://help.vtex.com/en/tutorial/gerenciamento-de-sellers-beta--6eEiOISwxuAWJ8w6MtK7iv#groups) documentation.',
    example: {
      groups: [
        { id: '8d845239bf1448dc8bc3ed3121837511', name: 'long tail' },
        { id: 'b9bcd348ab9c4cec8285ff9485c27a72', name: 'franchise accounts' },
      ],
    },
    required: ['groups'],
    title: 'groups',
  })
  .openapi('Groups')

const MainImageSchema = z
  .object({
    ImageId: z
      .string()
      .default('53878805')
      .openapi({ description: "Code identifying the image's file." }),
    ImageLabel: z.string().nullable().default('Image 1').openapi({ description: "Image's label." }),
    ImagePath: z
      .string()
      .default('~/archives/ids/155411-#width#-#height#/Webp.net-resizeimage.jpg')
      .openapi({ description: "Path for the image's file." }),
    ImageTag: z
      .string()
      .default(
        '<img src="~/archives/ids/155411-#width#-#height#/Webp.net-resizeimage.jpg" width="#width#" height="#height#" alt="Image name and description" id="" />',
      )
      .openapi({ description: 'HTML tag for the selected image.' }),
    ImageText: z
      .string()
      .default('Image name and description')
      .openapi({ description: 'Alt text for the image.' }),
    IsMain: z
      .boolean()
      .default(true)
      .openapi({ description: 'Whether the image is the main one or not.' }),
    IsZoomSize: z
      .boolean()
      .default(true)
      .openapi({ description: 'If zoom can be applied to the image.' }),
    LastModified: z
      .string()
      .default('2021-05-06T21:37:24.262529')
      .openapi({ description: 'Date of the last changed made to the offer.' }),
  })
  .openapi({
    example: {
      ImageId: '53878805',
      ImageLabel: null,
      ImagePath:
        '~/arquivos/ids/53878805-#width#-#height#/image-8b4364782e664d76a6ebc8702008e478.jpg',
      ImageTag:
        '<img src="~/arquivos/ids/53878805-#width#-#height#/image-8b4364782e664d76a6ebc8702008e478.jpg" width="#width#" height="#height#" alt="image-8b4364782e664d76a6ebc8702008e478" id="" />',
      ImageText: 'image-8b4364782e664d76a6ebc8702008e478',
      IsMain: true,
      IsZoomSize: true,
      LastModified: '2021-04-06T03:01:30.747',
    },
    required: [
      'ImageId',
      'ImageLabel',
      'ImageTag',
      'ImagePath',
      'IsMain',
      'IsZoomSize',
      'ImageText',
      'LastModified',
    ],
    title: 'MainImage',
  })
  .openapi('MainImage')

const OffersPerSalesChannelSchema = z
  .object({
    AvailableQuantity: z
      .int32()
      .default(30)
      .openapi({ description: 'Available SKU stock quantity' }),
    ListPrice: z.int32().default(1200).openapi({ description: "SKU's suggested selling price" }),
    Price: z.int32().default(1300).openapi({ description: "SKU's price." }),
    PriceWithoutDiscount: z
      .int32()
      .default(1400)
      .openapi({ description: "SKU's price without discount applied." }),
    SaleChannel: z
      .int32()
      .default(1)
      .openapi({
        description:
          'The sales channel (or [trade policy](https://help.vtex.com/en/tutorial/como-funciona-uma-politica-comercial--6Xef8PZiFm40kg2STrMkMV#master-data)) of the SKU.',
      }),
  })
  .openapi({
    example: {
      AvailableQuantity: 0,
      ListPrice: 0,
      Price: 0,
      PriceWithoutDiscount: 0,
      SaleChannel: 1,
    },
    required: ['SaleChannel', 'Price', 'ListPrice', 'PriceWithoutDiscount', 'AvailableQuantity'],
    title: 'OffersPerSalesChannel',
  })
  .openapi('OffersPerSalesChannel')

const OfferSchema = z
  .object({
    AvailableSalesChannels: z
      .string()
      .nullable()
      .default('1')
      .openapi({
        description:
          'The sales channel (or [trade policy](https://help.vtex.com/en/tutorial/como-funciona-uma-politica-comercial--6Xef8PZiFm40kg2STrMkMV#master-data)) ID in which the SKU is available.',
      }),
    OffersPerSalesChannel: z.array(OffersPerSalesChannelSchema).openapi({ description: '' }),
    SellerId: z
      .string()
      .default('1')
      .openapi({
        description:
          'ID of the seller in the marketplace. This ID must be created by the marketplace.',
      }),
    SellerSkuId: z
      .string()
      .default('1070268')
      .openapi({
        description:
          'A string that identifies the SKU in the seller. This is the ID that the marketplace will use for future references to this SKU, such as price and inventory notifications.',
      }),
  })
  .openapi({
    example: {
      AvailableSalesChannels: null,
      OffersPerSalesChannel: [
        { AvailableQuantity: 0, ListPrice: 0, Price: 0, PriceWithoutDiscount: 0, SaleChannel: 1 },
      ],
      SellerId: '1',
      SellerSkuId: '1070268',
    },
    required: ['SellerId', 'SellerSkuId', 'OffersPerSalesChannel', 'AvailableSalesChannels'],
    title: 'Offer',
  })
  .openapi('Offer')

const ResendSellerLeadRequestRequestSchema = z
  .object({
    status: z
      .string()
      .default('accepted')
      .openapi({
        description: "Seller Lead's status. Includes `accepted`, `connected` or `invited`.",
      }),
  })
  .openapi({ example: { status: 'accepted' }, required: ['status'], title: '' })
  .openapi('ResendSellerLeadRequestRequest')

const SellerCommissionConfigurationSchema = z
  .object({
    categoriesCommissionConfiguration: z
      .array(z.string())
      .default([])
      .openapi({
        description: 'Array with percentage of the comission applied to categories in decimals.',
      }),
    freightCommissionPercentage: z
      .number()
      .default(2.43)
      .openapi({ description: 'Percentage of the comission applied to the freight in decimals.' }),
    productCommissionPercentage: z
      .number()
      .default(9.85)
      .openapi({ description: 'Percentage of the comission applied to the product in decimals.' }),
  })
  .openapi({
    example: {
      categoriesCommissionConfiguration: [],
      freightCommissionPercentage: 4,
      productCommissionPercentage: 3,
    },
    required: [
      'productCommissionPercentage',
      'freightCommissionPercentage',
      'categoriesCommissionConfiguration',
    ],
    title: 'Seller Commission Configuration',
  })
  .openapi('SellerCommissionConfiguration')

const Sku2Schema = z
  .object({
    EanId: z
      .string()
      .nullable()
      .default('768655')
      .openapi({ description: "EAN's unique identifier number" }),
    IsActive: z
      .boolean()
      .default(true)
      .openapi({
        description: 'Whether the SKU is active in the sales channel (true), or not (false).',
      }),
    MainImage: z.object({}).openapi({ description: "Main image's information." }),
    Name: z.string().default('Color: Black').openapi({ description: 'Summarized name of the SKU' }),
    NameComplete: z
      .string()
      .default('Name of the Product - 123 Color: Black')
      .openapi({ description: 'Complete name of the SKU' }),
    Offers: z.array(OfferSchema).openapi({ description: 'Array with offers' }),
    RefId: z.string().nullable().default('1234').openapi({ description: "SKU's Reference ID" }),
    SkuId: z.string().default('1070268').openapi({ description: "SKU's unique identifier number" }),
  })
  .openapi({
    example: {
      EanId: null,
      IsActive: true,
      MainImage: {
        ImageId: '53878805',
        ImageLabel: null,
        ImagePath:
          '~/arquivos/ids/53878805-#width#-#height#/image-8b4364782e664d76a6ebc8702008e478.jpg',
        ImageTag:
          '<img src="~/arquivos/ids/53878805-#width#-#height#/image-8b4364782e664d76a6ebc8702008e478.jpg" width="#width#" height="#height#" alt="image-8b4364782e664d76a6ebc8702008e478" id="" />',
        ImageText: 'image-8b4364782e664d76a6ebc8702008e478',
        IsMain: true,
        IsZoomSize: true,
        LastModified: '2021-04-06T03:01:30.747',
      },
      Name: 'Cor:Preto',
      NameComplete: 'Produto Teste 04 - Preto - 40 Cor:Preto',
      Offers: [
        {
          AvailableSalesChannels: null,
          OffersPerSalesChannel: [
            {
              AvailableQuantity: 0,
              ListPrice: 0,
              Price: 0,
              PriceWithoutDiscount: 0,
              SaleChannel: 1,
            },
          ],
          SellerId: '1',
          SellerSkuId: '1070268',
        },
        {
          AvailableSalesChannels: null,
          OffersPerSalesChannel: [
            {
              AvailableQuantity: 10000000,
              ListPrice: 1200,
              Price: 1200,
              PriceWithoutDiscount: 1200,
              SaleChannel: 0,
            },
          ],
          SellerId: 'madesacms',
          SellerSkuId: '3298',
        },
      ],
      RefId: null,
      SkuId: '1070268',
    },
    required: [
      'SkuId',
      'EanId',
      'RefId',
      'NameComplete',
      'Name',
      'IsActive',
      'MainImage',
      'Offers',
    ],
    title: 'Sku',
  })
  .openapi('Sku2')

const UpsertMappingRequestSchema = z
  .object({
    marketplaceSalesChannel: z
      .int32()
      .default(1)
      .openapi({
        description:
          "Marketplace's sales channel that will be associated to the seller's [affiliate](https://help.vtex.com/en/tutorial/configuring-affiliates--tutorials_187).",
      }),
    sellerChannel: z
      .string()
      .default('GCB')
      .openapi({
        description:
          "Seller's [affiliate](https://help.vtex.com/en/tutorial/configuring-affiliates--tutorials_187) that will be associated with the marketplace's sales channel. Through the affiliate, the seller determines which of his sales channel will be used for the mapping.",
      }),
  })
  .openapi({
    example: { marketplaceSalesChannel: 1, sellerChannel: 'GCB' },
    required: ['marketplaceSalesChannel', 'sellerChannel'],
    title: 'UpsertMappingRequest',
  })
  .openapi('UpsertMappingRequest')

const UpsertSellerCommissionsRequestSchema = z
  .object({
    categoryFullPath: z
      .string()
      .nullable()
      .default('Appliances/Oven')
      .openapi({
        description:
          "Full path to the SKU's category. It should be written as {department}/{category}. For example: if the department is **Appliances** and the category is **Oven**, the full path should be 'Appliances/Oven'.",
      }),
    categoryId: z
      .string()
      .default('6')
      .openapi({
        description:
          "Marketplace's Category ID that the product belongs to, configured in the Catalog.",
      }),
    freightCommissionPercentage: z
      .number()
      .default(2.43)
      .openapi({ description: 'Percentage of the comission applied to the freight in decimals.' }),
    productCommissionPercentage: z
      .number()
      .default(9.85)
      .openapi({ description: 'Percentage of the comission applied to the product in decimals.' }),
  })
  .openapi({
    example: {
      categoryFullPath: null,
      categoryId: '6',
      freightCommissionPercentage: 2.43,
      productCommissionPercentage: 9.85,
    },
    required: [
      'categoryId',
      'categoryFullPath',
      'productCommissionPercentage',
      'freightCommissionPercentage',
    ],
    title: '',
  })
  .openapi('UpsertSellerCommissionsRequest')

const UpsertSellerRequestSchema = z
  .object({
    CSCIdentification: z
      .string()
      .default('cscidentification 123')
      .openapi({ description: 'SKU Seller Identification' }),
    account: z.string().default('partner01').openapi({ description: "Seller's account name" }),
    allowHybridPayments: z
      .boolean()
      .default(false)
      .openapi({
        description:
          'Flag that allows customers to use gift cards from the seller to buy their products on the marketplace. It identifies purchases made with a gift card so that only the final price (with discounts applied) is paid to the seller.',
      }),
    availableSalesChannels: z
      .array(AvailableSalesChannelSchema)
      .default([])
      .openapi({
        description:
          'Sales channel (or [trade policy](https://help.vtex.com/en/tutorial/como-funciona-uma-politica-comercial--6Xef8PZiFm40kg2STrMkMV#master-data)) available.',
      }),
    catalogSystemEndpoint: z
      .string()
      .default('https://pedrostore.vtexcommercestable.com.br/api/catalog_system/')
      .openapi({
        description:
          "URL of the endpoint of the seller's catalog. This field will only be displayed if the seller type is VTEX Store. The field format will be as follows: `https://{sellerName}.vtexcommercestable.com.br/api/catalog_system/.`",
        title: 'Catalog System Endpoint schema',
      }),
    channel: z.string().default('channel name').openapi({ description: "Channel's name." }),
    deliveryPolicy: z
      .string()
      .default('Describe delivery policy')
      .openapi({
        description:
          'Text describing the delivery policy previously agreed between the marketplace and the seller.',
      }),
    description: z
      .string()
      .default('Seller A, from the B industry.')
      .openapi({ description: 'String describing the seller' }),
    email: z
      .string()
      .default('seller@email.com')
      .openapi({ description: 'email of the admin responsible for the seller.' }),
    exchangeReturnPolicy: z
      .string()
      .default('Describe exchange and returns policy')
      .openapi({
        description:
          'Text describing the exchange and return policy previously agreed between the marketplace and the seller.',
      }),
    fulfillmentEndpoint: z
      .string()
      .default('http://{SellerName}.vtexcommercestable.com.br/api/fulfillment?&sc={TradePolicyID}')
      .openapi({
        description:
          "URL of the endpoint for fulfillment of seller's orders, which the marketplace will use to communicate with the seller. \n\nFor **external sellers**, please include the URL of the seller's endpoint. External sellers have different endpoint standards. The seller must inform this endpoint to the marketplace so that the marketplace can complete the configuration process. \n\nFor **VTEX Stores**, the field format will be as follows: `https://{SellerName}.vtexcommercestable.com.br/api/fulfillment?&sc={TradePolicyID}`. \n\nThe value `SellerName` corresponds to the store name if the seller is a VTEX store. \n\nThe value `TradePolicyID` corresponds to the [trade policy](https://help.vtex.com/en/tutorial/how-trade-policies-work--6Xef8PZiFm40kg2STrMkMV#master-data) created by the seller in their own VTEX environment. The seller must inform this ID to the marketplace so that the marketplace can complete the configuration process. \n\nThe value `AffiliateID` corresponds to the 3-digit affiliate identification code created by the seller. The seller must inform this ID to the marketplace so that the marketplace can complete the configuration process. \n\nTo configure the [Multilevel Omnichannel Inventory](https://developers.vtex.com/vtex-rest-api/docs/multilevel-omnichannel-inventory) feature, fill in this field with the checkout endpoint following this example: `https://{{sellerAccount}}.vtexcommercestable.com.br/api/checkout?affiliateid={{affiliateId}}&sc={{salesChannel`",
      }),
    fulfillmentSellerId: z
      .string()
      .default('seller1')
      .openapi({
        description:
          ' Identification code of the seller responsible for fulfilling the order. This is an optional field used when a seller sells SKUs from another seller. If the seller sells their own SKUs, it must be nulled.',
      }),
    groups: z
      .array(GroupsSchema)
      .exactOptional()
      .openapi({
        description:
          'Array of groups attached to the seller. Groups are defined by key-words that group sellers into categories defined by the marketplace when adding a new seller through the [Configure Seller Account](https://developers.vtex.com/vtex-rest-api/reference/sellers#putupsertseller) endpoint. It is possible to filter sellers by group in the Seller Management page in your VTEX Admin. Know more about groups through our [Seller Management](https://help.vtex.com/en/tutorial/gerenciamento-de-sellers-beta--6eEiOISwxuAWJ8w6MtK7iv#groups) documentation.',
      }),
    id: z
      .string()
      .default('seller123')
      .openapi({
        description:
          "Seller ID assigned by the marketplace. We recommend filling it in with the seller's account name.",
      }),
    isActive: z
      .boolean()
      .default(true)
      .openapi({ description: 'Whether the seller is active on the marketplace or not.' }),
    isBetterScope: z
      .boolean()
      .default(true)
      .openapi({
        description:
          'Flag used by the VTEX Checkout to simmulate shopping carts, products and shipping only in sellers with the boolean set as `true`, avoiding performance issues.',
      }),
    isVtex: z
      .boolean()
      .default(true)
      .openapi({
        description: 'Flag determining whether the seller configured is a VTEX store or not.',
      }),
    name: z
      .string()
      .default('Seller Name')
      .openapi({
        description: "Name of the seller's store, configured in the seller's environment.",
      }),
    password: z
      .string()
      .nullable()
      .default('integrationHubPassword')
      .openapi({
        description: 'User password, if you are using a hub to integrate with the external seller.',
        title: 'password',
      }),
    salesChannel: z
      .string()
      .default('1')
      .openapi({
        description:
          "Sales channel (or [trade policy](https://help.vtex.com/en/tutorial/how-trade-policies-work--6Xef8PZiFm40kg2STrMkMV)) associated to the seller account created. If no value is specified, the system will automatically use the sales channel configured in the seller's [affiliate](https://help.vtex.com/en/tutorial/configuring-affiliates--tutorials_187) ID.",
      }),
    score: z
      .number()
      .default(0)
      .openapi({ description: 'Score attributed to this seller.', title: 'Score' }),
    securityPrivacyPolicy: z
      .string()
      .nullable()
      .default('Describe privacy and security policy')
      .openapi({
        description:
          ' Text describing the security policy previously agreed between the marketplace and the seller.',
      }),
    sellerCommissionConfiguration: z.object({}),
    sellerType: z
      .int32()
      .default(1)
      .openapi({
        description:
          'Type of seller, including: \n\n`1`: regular seller \n\n`2`: whitelabel seller',
      }),
    taxCode: z
      .string()
      .default('34444')
      .openapi({
        description:
          'This code is the Identity Number for the legal entity and is linked to information in its base country.',
      }),
    trustPolicy: z
      .string()
      .default('AllowEmailSharing')
      .openapi({
        description:
          " the marketplace must first allow VTEX to share clients’ email addresses with the seller. To do so, it is necessary to set 'AllowEmailSharing' as the value for the TrustPolicy field",
        title: 'Trust Policy',
      }),
    user: z
      .string()
      .nullable()
      .default('integrationHubUserName')
      .openapi({
        description: 'Username, if you are using a hub to integrate with the external seller.',
        title: 'user',
      }),
  })
  .openapi({
    example: {
      CSCIdentification: '',
      account: 'parceiro01',
      allowHybridPayments: false,
      availableSalesChannels: [
        { id: 1, isSelected: true, name: 'Loja Principal' },
        { id: 2, isSelected: true, name: 'Terceira' },
        { id: 3, isSelected: true, name: 'Marketplaces' },
      ],
      catalogSystemEndpoint: 'https://pedrostore.vtexcommercestable.com.br/api/catalog_system/',
      channel: '',
      deliveryPolicy: '',
      description: '',
      email: 'vtexqa1@vtex.com.br',
      exchangeReturnPolicy: '',
      fulfillmentEndpoint: 'http://fulfillment.vtexcommerce.com.br/api/fulfillment?an=parceiro01',
      fulfillmentSellerId: '',
      groups: [
        {
          groups: [
            { id: '8d845239bf1448dc8bc3ed3121837511', name: 'long tail' },
            { id: 'b9bcd348ab9c4cec8285ff9485c27a72', name: 'franchise accounts' },
          ],
        },
      ],
      id: 'testeMARCUS123',
      isActive: true,
      isBetterScope: false,
      isVtex: true,
      name: 'qamarketplace',
      password: 'integrationHubPassword',
      salesChannel: '',
      score: 0,
      securityPrivacyPolicy: null,
      sellerCommissionConfiguration: {
        categoriesCommissionConfiguration: [],
        freightCommissionPercentage: 4,
        productCommissionPercentage: 3,
      },
      sellerType: 1,
      taxCode: '34444',
      trustPolicy: 'AllowEmailSharing',
      user: 'integrationHubUserName',
    },
    required: [
      'id',
      'name',
      'isActive',
      'fulfillmentEndpoint',
      'allowHybridPayments',
      'taxCode',
      'email',
      'description',
      'sellerCommissionConfiguration',
      'isBetterScope',
      'sellerType',
      'availableSalesChannels',
      'CSCIdentification',
      'account',
      'channel',
      'salesChannel',
      'isVtex',
      'score',
      'exchangeReturnPolicy',
      'deliveryPolicy',
      'securityPrivacyPolicy',
      'fulfillmentSellerId',
      'user',
      'password',
      'catalogSystemEndpoint',
      'trustPolicy',
    ],
    title: 'Configure Seller Account',
  })
  .openapi('UpsertSellerRequest')

const AppKeySecurityScheme = { in: 'header', name: 'X-VTEX-API-AppKey', type: 'apiKey' }

const AppTokenSecurityScheme = { in: 'header', name: 'X-VTEX-API-AppToken', type: 'apiKey' }

export const postNotificatorSellerIdChangenotificationSkuIdInventoryRoute = createRoute({
  method: 'post',
  path: '/notificator/{sellerId}/changenotification/{skuId}/inventory',
  tags: ['Notification'],
  summary: 'Notify marketplace of inventory update',
  description:
    'This endpoint is used by *sellers* to notify marketplaces that the inventory level has changed for one of their SKUs. \n\nThere is no request body in this call, indicating the new inventory level, for instance. It only notifies a specific marketplace (`accountName`) that a seller (`sellerId`) has changed the inventory level of an SKU (`skuId`). \n\n*Marketplaces* will then call the [fulfillment endpoint](https://developers.vtex.com/vtex-rest-api/reference/fulfillment-simulation) provided in the seller registration form to get the updated inventory  information.',
  operationId: 'InventoryNotification',
  request: {
    query: z.object({
      accountName: z
        .string()
        .default('apiexamples')
        .openapi({
          param: {
            description:
              'Name of the VTEX account that belongs to the marketplace. The notification will be posted into this account.',
            in: 'query',
            name: 'accountName',
            required: true,
            schema: { default: 'apiexamples', type: 'string' },
          },
        }),
      environment: z
        .string()
        .default('vtexcommercestable')
        .openapi({
          param: {
            description: 'Environment to use. Used as part of the URL.',
            in: 'query',
            name: 'environment',
            required: true,
            schema: { default: 'vtexcommercestable', type: 'string' },
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
      skuId: z
        .string()
        .default('1234')
        .openapi({
          param: {
            description:
              'A string that identifies the SKU in the seller, that suffered the change. This is the ID that the marketplace will use for all  references to this SKU, such as price and inventory notifications.',
            in: 'path',
            name: 'skuId',
            required: true,
            schema: { default: '1234', type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: { 202: { description: 'Accepted', headers: z.object({}) } },
})

export const postNotificatorSellerIdChangenotificationSkuIdPriceRoute = createRoute({
  method: 'post',
  path: '/notificator/{sellerId}/changenotification/{skuId}/price',
  tags: ['Notification'],
  summary: 'Notify marketplace of price update',
  description:
    'This endpoint is used by *sellers* to notify marketplaces that the price has changed for one of their SKUs. \n\nThere is no request body in this call, indicating the new price value, for instance. It only notifies a specific marketplace (`accountName`) that a seller (`sellerId`) has changed the price of an SKU (`skuId`). \n\n*Marketplaces* will then call the [fulfillment endpoint](https://developers.vtex.com/vtex-rest-api/reference/fulfillment-simulation) provided in the seller registration form to get the updated price information.',
  operationId: 'PriceNotification',
  request: {
    query: z.object({
      accountName: z
        .string()
        .default('apiexamples')
        .openapi({
          param: {
            description:
              'Name of the VTEX account that belongs to the marketplace. The notification will be posted into this account.',
            in: 'query',
            name: 'accountName',
            required: true,
            schema: { default: 'apiexamples', type: 'string' },
          },
        }),
      environment: z
        .string()
        .default('vtexcommercestable')
        .openapi({
          param: {
            description: 'Environment to use. Used as part of the URL.',
            in: 'query',
            name: 'environment',
            required: true,
            schema: { default: 'vtexcommercestable', type: 'string' },
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
              'HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.',
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
      skuId: z
        .string()
        .default('1234')
        .openapi({
          param: {
            description:
              "A string that identifies the seller's SKU that suffered the change. This is the ID that the marketplace will use for all  references to this SKU, such as price and inventory notifications.",
            in: 'path',
            name: 'skuId',
            required: true,
            schema: { default: '1234', type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: { 202: { description: 'Accepted', headers: z.object({}) } },
})

export const getOfferManagerPvtOffersRoute = createRoute({
  method: 'get',
  path: '/offer-manager/pvt/offers',
  tags: ['Matched Offers'],
  summary: 'Get Matched Offers List',
  description:
    "Offers are seller's products and SKUs that were sent to the marketplace, and already have their price and inventory level configured. \n\n This endpoint retrieves the available offers in a marketplace. It differs from the Get Suggestions endpoints, since it retrieves products that were already matched by the marketplace, and are currently in its catalog. \n\nIt is possible to filter the search through the following parameters: \n\n- rows \n- sort \n\n- start \n\n- fq",
  operationId: 'Getofferslist',
  request: {
    query: z.object({
      sort: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Criteria used to sort the list of offers. For sorting values in ascending order, use `asc`, while for descending order, use `desc`. To fill in the field, insert the sorting criteria, followed by 'asc', or 'desc', separated by a comma. You can sort by the following criteria: \n\n- **price:** sorts offers by price. *Ascending* goes from lowest to highest price, while *Descending* goes from highest to lowest price. \n\n- **name:** sorts offers by *productName*, in alphabetical order. *Ascending* goes from *A* to *Z*, while *Descending* goes from *Z* to *A*. \n\n- **availability:** availability in the sales channel (sc). The default value is 1. \n\nEx. sort=availability,desc \n\nEx. sort=name,asc \n\nEx. price,desc",
            explode: true,
            in: 'query',
            name: 'sort',
            required: false,
            schema: { example: 'availability,desc', type: 'string' },
            style: 'form',
          },
          example: 'availability,desc',
        }),
      rows: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(20)
        .exactOptional()
        .openapi({
          param: {
            description:
              'Number of rows included in the response. Each row corresponds to a single offer. The default amount of rows in the response is 1, and the maximum amount is 50. To have more than one offer listed in the response, please add the `rows` parameter with a number greater than 1.',
            explode: true,
            in: 'query',
            name: 'rows',
            required: false,
            schema: { default: 20, type: 'integer' },
            style: 'form',
          },
        }),
      start: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(21)
        .exactOptional()
        .openapi({
          param: {
            description:
              'Number corresponding to the row from which the offer list will begin, used for pagination. Filters the list of offers by retrieving the offers starting from the row defined. The default value is 0, if the param is not included in the call.',
            explode: true,
            in: 'query',
            name: 'start',
            required: false,
            schema: { default: 21, type: 'integer' },
            style: 'form',
          },
        }),
      fq: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "This filter query can be used to filter offers by the criteria described below. It should be filled in by following the format: `fq={{criteriaName}}:{{criteriaValue}}`. \n\n- **productId:** integer of the product ID \n\n- **productName:** string of the product's name \n\n- **skuId:** integer of the SKU ID \n\n- **eanId:** string of the EAN ID \n\n- **refId:** string of the Ref ID \n\n- **categoryId:** integer of the category ID \n\n- **brandId:** integer of the brand ID \n\n- **sellerId:** string of the seller ID \n\n- **sc:** integer of the sales channel's ID (trade policy in VTEX) \n\nEx: skuId:172 \n\nEx: categoryId:13 \n\nEx. productName:Product example-123",
            explode: true,
            in: 'query',
            name: 'fq',
            required: false,
            schema: { example: 'skuId:172', type: 'string' },
            style: 'form',
          },
          example: 'skuId:172',
        }),
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
      environment: z
        .string()
        .default('vtexcommercestable')
        .openapi({
          param: {
            description: 'Environment to use. Used as part of the URL.',
            in: 'query',
            name: 'environment',
            required: true,
            schema: { default: 'vtexcommercestable', type: 'string' },
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
              'HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.',
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
                BrandId: z
                  .int32()
                  .default(2004291)
                  .openapi({
                    description:
                      "Offer's brand ID that the product belongs to, configured in the Catalog. It should be the marketplace's brand chosen for the offer to be matched with.",
                  }),
                CategoryId: z
                  .int32()
                  .default(1563)
                  .openapi({
                    description:
                      "Offer's Category ID that the product belongs to, configured in the Catalog. It should be the marketplace's category chosen for the offer to be matched with.",
                  }),
                LastModified: z
                  .string()
                  .default('2021-05-06T21:37:24.262529')
                  .openapi({ description: 'Last date the offer was modified.' }),
                ProductId: z
                  .string()
                  .default('941947')
                  .openapi({
                    description:
                      "A string that identifies the seller's product. This is the ID that the marketplace will use for all references to this product.",
                  }),
                ProductName: z
                  .string()
                  .default('Name of the Product - 123')
                  .openapi({ description: "Name of the offer's product." }),
                Skus: z.array(Sku2Schema).openapi({ description: 'Array of SKUs in the offer.' }),
              })
              .openapi({
                required: [
                  'LastModified',
                  'ProductId',
                  'CategoryId',
                  'BrandId',
                  'ProductName',
                  'Skus',
                ],
                title: 'getMatchedOffersResponse',
              }),
          ),
          example: [
            {
              BrandId: 2004291,
              CategoryId: 1563,
              LastModified: '2021-05-06T21:37:24.262529',
              ProductId: '941947',
              ProductName: 'Produto Teste 04 - Preto - 40',
              Skus: [
                {
                  EanId: null,
                  IsActive: true,
                  MainImage: {
                    ImageId: '53878805',
                    ImageLabel: null,
                    ImagePath:
                      '~/arquivos/ids/53878805-#width#-#height#/image-8b4364782e664d76a6ebc8702008e478.jpg',
                    ImageTag:
                      '<img src="~/arquivos/ids/53878805-#width#-#height#/image-8b4364782e664d76a6ebc8702008e478.jpg" width="#width#" height="#height#" alt="image-8b4364782e664d76a6ebc8702008e478" id="" />',
                    ImageText: 'image-8b4364782e664d76a6ebc8702008e478',
                    IsMain: true,
                    IsZoomSize: true,
                    LastModified: '2021-04-06T03:01:30.747',
                  },
                  Name: 'Cor:Preto',
                  NameComplete: 'Produto Teste 04 - Preto - 40 Cor:Preto',
                  Offers: [
                    {
                      AvailableSalesChannels: null,
                      OffersPerSalesChannel: [
                        {
                          AvailableQuantity: 0,
                          ListPrice: 0,
                          Price: 0,
                          PriceWithoutDiscount: 0,
                          SaleChannel: 1,
                        },
                      ],
                      SellerId: '1',
                      SellerSkuId: '1070268',
                    },
                    {
                      AvailableSalesChannels: null,
                      OffersPerSalesChannel: [
                        {
                          AvailableQuantity: 10000000,
                          ListPrice: 1200,
                          Price: 1200,
                          PriceWithoutDiscount: 1200,
                          SaleChannel: 0,
                        },
                      ],
                      SellerId: 'madesacms',
                      SellerSkuId: '3298',
                    },
                  ],
                  RefId: null,
                  SkuId: '1070268',
                },
              ],
            },
          ],
        },
      },
    },
  },
})

export const getOfferManagerPvtProductProductIdRoute = createRoute({
  method: 'get',
  path: '/offer-manager/pvt/product/{productId}',
  tags: ['Matched Offers'],
  summary: "Get Matched Offer's Data by Product ID",
  description:
    "Offers are seller products and SKUs that were sent to the marketplace, and already have their price and inventory level configured. \n\nThis endpoint retrieves the available offers for a speciic Product ID in the marketplace's catalog. It differs from the Get Suggestions endpoints, since it retrieves products that were already matched by the marketplace operator, and are currently active in its catalog. \n\nThe call returns a list of offers for that ID, that contain the following data: \n\n- Seller that sells the SKU \n\n- Correspondent SKU ID \n\n- SKU's price value \n\n- Inventory level \n\n- Sales channel (or [trade policy](https://help.vtex.com/en/tutorial/como-funciona-uma-politica-comercial--6Xef8PZiFm40kg2STrMkMV#master-data)) that it is available at.",
  operationId: 'GetProductoffers',
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
      environment: z
        .string()
        .default('vtexcommercestable')
        .openapi({
          param: {
            description: 'Environment to use. Used as part of the URL.',
            in: 'query',
            name: 'environment',
            required: true,
            schema: { default: 'vtexcommercestable', type: 'string' },
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
              'HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.',
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
        .default('123456')
        .openapi({
          param: {
            description:
              "A string that identifies the seller's product. This is the ID that the marketplace will use for all references to this product, such as price and inventory notifications.",
            in: 'path',
            name: 'productId',
            required: true,
            schema: { default: '123456', type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK', headers: z.object({}) } },
})

export const getOfferManagerPvtProductProductIdSkuSkuIdRoute = createRoute({
  method: 'get',
  path: '/offer-manager/pvt/product/{productId}/sku/{skuId}',
  tags: ['Matched Offers'],
  summary: "Get Matched Offer's Data by SKU ID",
  description:
    "Offers are seller products and SKUs that were sent to the marketplace, and already have their price and inventory level configured. \n\nThis endpoint retrieves the available offers for a speciic SKU ID in the marketplace's catalog. It differs from the Get Suggestions endpoints, since it retrieves products that were already matched by the marketplace operator, and are currently active in its catalog. \n\nThe call returns a list of offers for that ID, that contain the following data: \n\n- Seller that sells the SKU \n\n- Correspondent SKU ID \n\n- SKU's price value \n\n- Inventory level \n\n- Sales channel (or [trade policy](https://help.vtex.com/en/tutorial/como-funciona-uma-politica-comercial--6Xef8PZiFm40kg2STrMkMV#master-data)) that it is available at.",
  operationId: 'GetSKUoffers',
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
      environment: z
        .string()
        .default('vtexcommercestable')
        .openapi({
          param: {
            description: 'Environment to use. Used as part of the URL.',
            in: 'query',
            name: 'environment',
            required: true,
            schema: { default: 'vtexcommercestable', type: 'string' },
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
              'HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.',
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
        .default('123456')
        .openapi({
          param: {
            description:
              "A string that identifies the seller's product. This is the ID that the marketplace will use for all references to this product, such as price and inventory notifications.",
            in: 'path',
            name: 'productId',
            required: true,
            schema: { default: '123456', type: 'string' },
            style: 'simple',
          },
        }),
      skuId: z
        .string()
        .default('1234')
        .openapi({
          param: {
            description:
              "A string that identifies the seller's SKU. This is the ID that the marketplace will use for all references to this SKU, such as price and inventory notifications.",
            in: 'path',
            name: 'skuId',
            required: true,
            schema: { default: '1234', type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK', headers: z.object({}) } },
})

export const getSellerRegisterPvtSellerLeadsRoute = createRoute({
  method: 'get',
  path: '/seller-register/pvt/seller-leads',
  tags: ['Seller Invite'],
  summary: 'List Seller Leads',
  description:
    "This call's response includes a list of all sellers invited by the marketplace operator to join them. Retrieved results can be filtered by adding optional query fields to the request. Each seller listed includes the following information: \n\n- `id` \n\n- `createdAt` \n\n- `status` \n\n- `isConnected` \n\n- `sellerEmail` \n\n- `sellerName` \n\n- `salesChannel` \n\n- `email`",
  operationId: 'ListSellerLeads',
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
      environment: z
        .string()
        .default('vtexcommercestable')
        .openapi({
          param: {
            description: 'Environment to use. Used as part of the URL.',
            in: 'query',
            name: 'environment',
            required: true,
            schema: { default: 'vtexcommercestable', type: 'string' },
          },
        }),
      offset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .default(0)
        .openapi({
          param: {
            description:
              'This field determines the limit used to retrieve the list of sellers. The response includes objects starting `from` the value inputted here.',
            explode: true,
            in: 'query',
            name: 'offset',
            required: true,
            schema: { default: 0, format: 'int32', type: 'integer' },
            style: 'form',
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
          z.int32(),
        )
        .default(15)
        .openapi({
          param: {
            description:
              'This field determines the limit used to retrieve the list of sellers. The response includes objects until the value inputted here.            ',
            explode: true,
            in: 'query',
            name: 'limit',
            required: true,
            schema: { default: 15, format: 'int32', type: 'integer' },
            style: 'form',
          },
        }),
      isConnected: z
        .string()
        .default('')
        .openapi({
          param: {
            description:
              'Query param that enables results to be filter by whether the seller lead is already connected to the marketplace or not.',
            explode: true,
            in: 'query',
            name: 'isConnected',
            required: true,
            schema: { default: '', type: 'string' },
            style: 'form',
          },
        }),
      search: z
        .string()
        .default('user email')
        .openapi({
          param: {
            description:
              "Custom search field, that filters sellers invited by specific marketplace operator's  email.",
            explode: true,
            in: 'query',
            name: 'search',
            required: true,
            schema: { default: 'user email', type: 'string' },
            style: 'form',
          },
        }),
      status: z
        .string()
        .default('invited')
        .openapi({
          param: {
            description: "Seller Lead's status. Includes `accepted`, `connected` or `invited`.",
            explode: true,
            in: 'query',
            name: 'status',
            required: true,
            schema: { default: 'invited', type: 'string' },
            style: 'form',
          },
        }),
      orderBy: z
        .string()
        .openapi({
          param: {
            description:
              'Query param determining how data will be ordered in the response, ordering by name or ID in descending our ascending order. Includes the following values: \n\n`namesort` = desc/asc \n\n`idsort` = desc/asc',
            explode: true,
            in: 'query',
            name: 'orderBy',
            required: true,
            schema: { type: 'string' },
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

export const postSellerRegisterPvtSellerLeadsRoute = createRoute({
  method: 'post',
  path: '/seller-register/pvt/seller-leads',
  tags: ['Seller Invite'],
  summary: 'Invite Seller Lead',
  description:
    "This API is used by marketplace operators to invite sellers to join their marketplace. The request sends an email to the seller, inviting sellers to activate their store. The invitation's link in the email is unique per user, and available for only seven days for the seller to click and begin activating their store. \n\nThe email template is completely customizable. All email templates that VTEX sends to seller leads can be found and edited in the marketplace's VTEX Admin, on the Message Center section.",
  operationId: 'CreateSellerLead',
  request: {
    query: z.object({
      accountName: z
        .string()
        .default('apiexample')
        .openapi({
          param: {
            description:
              'Name of the VTEX account that belongs to the marketplace. All data extracted, and changes added will be posted into this account.',
            in: 'query',
            name: 'accountName',
            required: true,
            schema: { default: 'apiexample', type: 'string' },
          },
        }),
      environment: z
        .string()
        .default('vtexcommercestable')
        .openapi({
          param: {
            description: 'Environment to use. Used as part of the URL.',
            in: 'query',
            name: 'environment',
            required: true,
            schema: { default: 'vtexcommercestable', type: 'string' },
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
          schema: CreateSellerLeadRequestSchema,
          example: {
            accountId: '5fb38ace-d95e-45ad-970d-ee97cce9fbcd',
            accountable: { email: 'email@email.com', name: 'Jane Smith', phone: '1234567890' },
            address: {
              city: 'Rio de Janeiro',
              complement: 'Appartment 1234',
              neighborhood: 'VTEX quarter',
              number: '25',
              postalcode: '12345678',
              state: 'RJ',
              street: 'VTEX street',
            },
            document: '12345671000',
            email: 'email@email.com',
            hasAcceptedLegalTerms: true,
            salesChannel: '1',
            sellerAccountName: 'seller123',
            sellerEmail: 'selleremail@email.com',
            sellerName: 'Seller Name',
            sellerType: 1,
          },
        },
      },
      required: true,
    },
  },
  responses: { 200: { description: 'OK', headers: z.object({}) } },
})

export const getSellerRegisterPvtSellerLeadsSellerLeadIdRoute = createRoute({
  method: 'get',
  path: '/seller-register/pvt/seller-leads/{sellerLeadId}',
  tags: ['Seller Invite'],
  summary: "Get Seller Lead's Data by Id",
  description:
    "Marketplace operators may call this endpoint to retrieve information about a specific seller invited to the Seller Portal, by searching through their `Seller Lead Id`. To know the chosen seller's `sellerLeadId`, marketplace operators can count on the *List Sellers* endpoint's response as well. Each seller listed includes the following information: \n\n- `id` \n\n- `createdAt` \n\n- `status` \n\n- `isConnected` \n\n- `sellerEmail` \n\n- `sellerName` \n\n- `salesChannel` \n\n- `email`",
  operationId: 'RetrieveSellerLead',
  request: {
    query: z.object({
      accountName: z
        .string()
        .default('apiexamples')
        .openapi({
          param: {
            description: 'Name of the VTEX account that belongs to the marketplace.',
            in: 'query',
            name: 'accountName',
            required: true,
            schema: { default: 'apiexamples', type: 'string' },
          },
        }),
      environment: z
        .string()
        .default('vtexcommercestable')
        .openapi({
          param: {
            description: 'Environment to use. Used as part of the URL.',
            in: 'query',
            name: 'environment',
            required: true,
            schema: { default: 'vtexcommercestable', type: 'string' },
          },
        }),
    }),
    params: z.object({
      sellerLeadId: z
        .string()
        .openapi({
          param: {
            description: 'ID of the Seller Lead invited to the marketplace.',
            in: 'path',
            name: 'sellerLeadId',
            required: true,
            schema: { type: 'string' },
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

export const putSellerRegisterPvtSellerLeadsSellerLeadIdRoute = createRoute({
  method: 'put',
  path: '/seller-register/pvt/seller-leads/{sellerLeadId}',
  tags: ['Seller Invite'],
  summary: 'Accept Seller Lead',
  description:
    "This endpoint is triggered by the seller onboarding wizard, once the seller confirms their invitation. It can be used by marketplace operators to manually accept seller leads, and carry on with their onboarding process. \n\nNote that there's no specific API call that allows status changes. The operations only allow the seller lead to move forward: \n\n From `invite` > to `Accept` > closing on `Create Seller`.  \n\nIf you want to change the status, you can start the process again, by deleting that lead through the *Delete Seller Lead* endpoint, and resending the invite through the *Resend Seller Lead's Invite* endpoint.",
  operationId: 'AcceptSellerLead',
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
      environment: z
        .string()
        .default('vtexcommercestable')
        .openapi({
          param: {
            description: 'Environment to use. Used as part of the URL.',
            in: 'query',
            name: 'environment',
            required: true,
            schema: { default: 'vtexcommercestable', type: 'string' },
          },
        }),
    }),
    params: z.object({
      sellerLeadId: z
        .string()
        .openapi({
          param: {
            description: 'ID of the Seller Lead invited to the marketplace.',
            in: 'path',
            name: 'sellerLeadId',
            required: true,
            schema: { type: 'string' },
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
            description: 'Type of the content being sent.',
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
          schema: AcceptSellerLeadRequestSchema,
          example: {
            accountId: '5fb38ace-d95e-45ad-970d-ee97cce9fbcd',
            accountable: { email: 'email@email.com', name: 'Jane Smith', phone: '1234567890' },
            address: {
              city: 'Rio de Janeiro',
              complement: 'Appartment 1234',
              neighborhood: 'VTEX quarter',
              number: '25',
              postalcode: '12345678',
              state: 'RJ',
              street: 'VTEX street',
            },
            document: '12345671000',
            email: 'seller@email.com',
            hasAcceptedLegalTerms: true,
            salesChannel: '1',
            sellerAccountName: 'seller123',
            sellerEmail: 'selleremail@email.com',
            sellerName: 'Seller Name',
            sellerType: 1,
          },
        },
      },
      required: true,
    },
  },
  responses: { 200: { description: 'OK', headers: z.object({}) } },
})

export const deleteSellerRegisterPvtSellerLeadsSellerLeadIdRoute = createRoute({
  method: 'delete',
  path: '/seller-register/pvt/seller-leads/{sellerLeadId}',
  tags: ['Seller Invite'],
  summary: 'Delete Seller Lead',
  description:
    'This endpoint permanently deletes a seller previously invited to the marketplace, if the seller has not already accepted the invitation.',
  operationId: 'RemoveSellerLead',
  request: {
    query: z.object({
      accountName: z
        .string()
        .default('apiexamples')
        .openapi({
          param: {
            description: 'Name of the VTEX account that belongs to the marketplace.',
            in: 'query',
            name: 'accountName',
            required: true,
            schema: { default: 'apiexamples', type: 'string' },
          },
        }),
      environment: z
        .string()
        .default('vtexcommercestable')
        .openapi({
          param: {
            description: 'Environment to use. Used as part of the URL.',
            in: 'query',
            name: 'environment',
            required: true,
            schema: { default: 'vtexcommercestable', type: 'string' },
          },
        }),
    }),
    params: z.object({
      sellerLeadId: z
        .string()
        .openapi({
          param: {
            description: 'ID of the Seller Lead invited to the marketplace.',
            in: 'path',
            name: 'sellerLeadId',
            required: true,
            schema: { type: 'string' },
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

export const putSellerRegisterPvtSellerLeadsSellerLeadIdSellerRoute = createRoute({
  method: 'put',
  path: '/seller-register/pvt/seller-leads/{sellerLeadId}/seller',
  tags: ['Seller Invite'],
  summary: 'Create Seller From Lead',
  description:
    "This endpoint is used by marketplace operators to create seller accounts. The request will only accept Seller Leads whose status is `accepted`. If they are already `connected` or `invited`, the call will not be fulfilled. \n\nThe creation of the account at VTEX is done by an internal Billing service. There is no seller account and marketplace affiliation if you do not go through this step. \n\nNote that there's no specific API call that allows status changes. The operations only allow the seller lead to move forward: \n\n From `invite` > to `Accept` > closing on `Create Seller`.  \n\nIf you want to change the status, you can start the process again, by deleting that lead through the *Delete Seller Lead* endpoint, and resending the invite through the *Resend Seller Lead's Invite* endpoint.",
  operationId: 'CreateSellerFromSellerLead',
  request: {
    query: z.object({
      accountName: z
        .string()
        .default('apiexamples')
        .openapi({
          param: {
            description:
              "Marketplace's account name, the same one inputted on the endpoint's path.",
            in: 'query',
            name: 'accountName',
            required: true,
            schema: { default: 'apiexamples', type: 'string' },
          },
        }),
      environment: z
        .string()
        .default('vtexcommercestable')
        .openapi({
          param: {
            description: 'Environment to use. Used as part of the URL.',
            in: 'query',
            name: 'environment',
            required: true,
            schema: { default: 'vtexcommercestable', type: 'string' },
          },
        }),
      isActive: z
        .stringbool()
        .default(false)
        .openapi({
          param: {
            description:
              'Whether the Seller Lead is `active` or not in Seller Portal. This request only supports the value `false` in this field. If that´s not the case, the request will respond with an internal error.',
            explode: true,
            in: 'query',
            name: 'isActive',
            required: true,
            schema: { default: false, type: 'boolean' },
            style: 'form',
          },
        }),
    }),
    params: z.object({
      sellerLeadId: z
        .string()
        .openapi({
          param: {
            description: 'ID of the Seller Lead invited to the marketplace.',
            in: 'path',
            name: 'sellerLeadId',
            required: true,
            schema: { type: 'string' },
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

export const putSellerRegisterPvtSellerLeadsSellerLeadIdStatusRoute = createRoute({
  method: 'put',
  path: '/seller-register/pvt/seller-leads/{sellerLeadId}/status',
  tags: ['Seller Invite'],
  summary: 'Resend Seller Lead Invite',
  description:
    'This endpoint allows marketplace operators to resend an invitation to a seller lead, previously invited to join their marketplace. The request will only accept Seller Leads whose status is `invited`. If they are already `connected` or `accepted`, the call will not be fulfilled.',
  operationId: 'ResendSellerLeadRequest',
  request: {
    query: z.object({
      accountName: z
        .string()
        .default('apiexamples')
        .openapi({
          param: {
            description: 'Name of the VTEX account that belongs to the marketplace.',
            in: 'query',
            name: 'accountName',
            required: true,
            schema: { default: 'apiexamples', type: 'string' },
          },
        }),
      environment: z
        .string()
        .default('vtexcommercestable')
        .openapi({
          param: {
            description: 'Environment to use. Used as part of the URL.',
            in: 'query',
            name: 'environment',
            required: true,
            schema: { default: 'vtexcommercestable', type: 'string' },
          },
        }),
    }),
    params: z.object({
      sellerLeadId: z
        .string()
        .openapi({
          param: {
            description: 'ID of the Seller Lead invited to the marketplace.',
            in: 'path',
            name: 'sellerLeadId',
            required: true,
            schema: { type: 'string' },
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
            description: 'Type of the content being sent.',
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
          schema: ResendSellerLeadRequestRequestSchema,
          example: { status: 'accepted' },
        },
      },
      required: true,
    },
  },
  responses: { 200: { description: 'OK', headers: z.object({}) } },
})

export const getSellerRegisterPvtSellersRoute = createRoute({
  method: 'get',
  path: '/seller-register/pvt/sellers',
  tags: ['Sellers'],
  summary: 'List Sellers',
  description:
    "This endpoint lists all Sellers. This call's results can be filtered by [trade policies](https://help.vtex.com/en/tutorial/como-funciona-uma-politica-comercial--6Xef8PZiFm40kg2STrMkMV#master-data) through the `sc` query param.",
  operationId: 'GetListSellers',
  request: {
    query: z.object({
      accountName: z
        .string()
        .default('apiexamples')
        .openapi({
          param: {
            description: 'Name of the VTEX account that belongs to the marketplace.',
            in: 'query',
            name: 'accountName',
            required: true,
            schema: { default: 'apiexamples', type: 'string' },
          },
        }),
      environment: z
        .string()
        .default('vtexcommercestable')
        .openapi({
          param: {
            description: 'Environment to use. Used as part of the URL.',
            in: 'query',
            name: 'environment',
            required: true,
            schema: { default: 'vtexcommercestable', type: 'string' },
          },
        }),
      from: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            description: 'The start number of pagination, being `0` the default value.',
            in: 'query',
            name: 'from',
            required: false,
            schema: { default: 0, type: 'number' },
          },
        }),
      to: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            description: 'The end number of pagination, being `100` the default value.',
            in: 'query',
            name: 'to',
            required: false,
            schema: { default: 100, type: 'number' },
          },
        }),
      keyword: z
        .string()
        .default('keyword')
        .exactOptional()
        .openapi({
          param: {
            description: 'Search sellers by a keyword in `sellerId` or `sellerName`.',
            in: 'query',
            name: 'keyword',
            required: false,
            schema: { default: 'keyword', type: 'string' },
          },
        }),
      integration: z
        .string()
        .default('vtex-seller')
        .exactOptional()
        .openapi({
          param: {
            description:
              'Filters sellers by the name of who made the integration, if VTEX or an external hub. The possible values for VTEX integrations are: `vtex-sellerportal`, `vtex-seller` and `vtex-franchise`.',
            in: 'query',
            name: 'integration',
            required: false,
            schema: { default: 'vtex-seller', type: 'string' },
          },
        }),
      'group ': z
        .string()
        .default('Group')
        .exactOptional()
        .openapi({
          param: {
            description:
              'Groups are defined by keywords that group sellers into categories defined by the marketplace.',
            in: 'query',
            name: 'group ',
            required: false,
            schema: { default: 'Group', type: 'string' },
          },
        }),
      isActive: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'Enables to filter sellers that are active (`true`) or unactive (`false`) in the marketplace.',
            in: 'query',
            name: 'isActive',
            required: false,
            schema: { default: false, type: 'boolean' },
          },
        }),
      isBetterScope: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'The flag `isBetterScope` is used by the VTEX Checkout to simulate shopping carts, products, and shipping only in sellers with the field set as `true`, avoiding performance issues. When used as a query param, `isBetterScope` filters sellers that have the flag set as `true` or `false`.',
            in: 'query',
            name: 'isBetterScope',
            required: false,
            schema: { default: false, type: 'boolean' },
          },
        }),
      isVtex: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'When set as `true`, the list returned will be of sellers who have a VTEX store configured. When set as `false`, the list will be of sellers who do not have a VTEX store configured.',
            in: 'query',
            name: 'isVtex',
            required: false,
            schema: { default: false, type: 'boolean' },
          },
        }),
      sc: z
        .string()
        .default('1')
        .exactOptional()
        .openapi({
          param: {
            description:
              "Filters sellers available for the marketplace's sales channel (or [trade policy](https://help.vtex.com/en/tutorial/how-trade-policies-work--6Xef8PZiFm40kg2STrMkMV)) indicated in this field.",
            in: 'query',
            name: 'sc',
            required: false,
            schema: { default: '1', type: 'string' },
          },
        }),
      sellerType: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            description:
              'Filters sellers by their type, which can be regular seller (`1`) or whitelabel seller (`2`).',
            in: 'query',
            name: 'sellerType',
            required: false,
            schema: { default: 1, type: 'integer' },
          },
        }),
      sort: z
        .string()
        .default('id:asc')
        .exactOptional()
        .openapi({
          param: {
            description:
              'Narrow the search filtering by the fields: `id`, `name` or `pendingoffers`. The list retrieved can be organized in an ascending (`asc`) or descending (`desc`) order. The standardized format is `{field}:{order}`, and the default value is `id:asc`.',
            in: 'query',
            name: 'sort',
            required: false,
            schema: { default: 'id:asc', type: 'string' },
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

export const postSellerRegisterPvtSellersRoute = createRoute({
  method: 'post',
  path: '/seller-register/pvt/sellers',
  tags: ['Sellers'],
  summary: 'Configure Seller Account',
  description:
    'This endpoint is used by marketplace operators to configure the accounts of sellers that have already accepted the invitation to join their marketplaces. \n\nFor marketplaces to [add sellers](https://help.vtex.com/en/tutorial/adding-a-seller--tutorials_392) without the [Seller Invite](https://help.vtex.com/en/tutorial/marketplace-invited-sellers--6rb2FkcslmDueJ689Ulb9A) feature, call this endpoint directly. \n\nThis call includes all the information a seller needs to activate their account.',
  operationId: 'UpsertSellerRequest',
  request: {
    query: z.object({
      accountName: z
        .string()
        .default('apiexamples')
        .openapi({
          param: {
            description:
              "Marketplace's account name, the same one inputted on the endpoint's path.",
            in: 'query',
            name: 'accountName',
            required: true,
            schema: { default: 'apiexamples', type: 'string' },
          },
        }),
      environment: z
        .string()
        .default('vtexcommercestable')
        .openapi({
          param: {
            description: 'Environment to use. Used as part of the URL.',
            in: 'query',
            name: 'environment',
            required: true,
            schema: { default: 'vtexcommercestable', type: 'string' },
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
    body: {
      description: '',
      content: {
        'application/json': {
          schema: UpsertSellerRequestSchema,
          example: {
            CSCIdentification: 'cscidentification 123',
            account: 'partner01',
            allowHybridPayments: false,
            availableSalesChannels: [
              { id: 1, isSelected: true, name: 'Loja Principal' },
              { id: 2, isSelected: true, name: 'Terceira' },
              { id: 3, isSelected: true, name: 'Marketplaces' },
            ],
            catalogSystemEndpoint:
              'https://pedrostore.vtexcommercestable.com.br/api/catalog_system/',
            channel: 'marketplaceA',
            deliveryPolicy: 'Describe delivery policy',
            description: 'Seller A, from the B industry.',
            email: 'seller@email.com',
            exchangeReturnPolicy: 'Describe exchange and returns policy',
            fulfillmentEndpoint:
              'http://fulfillment.vtexcommerce.com.br/api/fulfillment?an=parceiro01',
            fulfillmentSellerId: 'seller1',
            groups: [
              {
                groups: [
                  { id: '8d845239bf1448dc8bc3ed3121837511', name: 'long tail' },
                  { id: 'b9bcd348ab9c4cec8285ff9485c27a72', name: 'franchise accounts' },
                ],
              },
            ],
            id: 'testeMARCUS123',
            isActive: true,
            isBetterScope: false,
            isVtex: true,
            name: 'qamarketplace',
            password: null,
            salesChannel: '1',
            score: 0,
            securityPrivacyPolicy: null,
            sellerCommissionConfiguration: {
              categoriesCommissionConfiguration: [],
              freightCommissionPercentage: 4,
              productCommissionPercentage: 3,
            },
            sellerType: 1,
            taxCode: '34444',
            trustPolicy: 'Default',
            user: null,
          },
        },
      },
      required: true,
    },
  },
  responses: { 200: { description: 'OK', headers: z.object({}) } },
})

export const getSellerRegisterPvtSellersSellerIdRoute = createRoute({
  method: 'get',
  path: '/seller-register/pvt/sellers/{sellerId}',
  tags: ['Sellers'],
  summary: 'Get Seller data by ID',
  description:
    'Marketplace operator may call this endpoint to retrieve information about a specific seller by filtering by ID. It is also possible to filter results by sales channel (or [trade policy](https://help.vtex.com/en/tutorial/como-funciona-uma-politica-comercial--6Xef8PZiFm40kg2STrMkMV#master-data)) through the `sc` query param.',
  operationId: 'GetRetrieveSeller',
  request: {
    query: z.object({
      accountName: z
        .string()
        .default('apiexamples')
        .openapi({
          param: {
            description: 'Name of the VTEX account that belongs to the marketplace.',
            in: 'query',
            name: 'accountName',
            required: true,
            schema: { default: 'apiexamples', type: 'string' },
          },
        }),
      environment: z
        .string()
        .default('vtexcommercestable')
        .openapi({
          param: {
            description: 'Environment to use. Used as part of the URL.',
            in: 'query',
            name: 'environment',
            required: true,
            schema: { default: 'vtexcommercestable', type: 'string' },
          },
        }),
      sc: z
        .string()
        .default('1')
        .exactOptional()
        .openapi({
          param: {
            description:
              'Sales channel (or [trade policy](https://help.vtex.com/en/tutorial/how-trade-policies-work--6Xef8PZiFm40kg2STrMkMV)) associated to the seller account created.',
            explode: true,
            in: 'query',
            name: 'sc',
            required: false,
            schema: { default: '1', type: 'string' },
            style: 'form',
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
              'A string that identifies the seller in the marketplace. This ID must be created by the marketplace',
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

export const patchSellerRegisterPvtSellersSellerIdRoute = createRoute({
  method: 'patch',
  path: '/seller-register/pvt/sellers/{sellerId}',
  tags: ['Sellers'],
  summary: 'Update Seller by Seller ID',
  description:
    "This endpoint allows marketplace operators to update the information of sellers connected to their account. You can replace a path's value with another value in order to update that single information. There is no need to fill all the body params available, only the one you wish to update.",
  operationId: 'UpdateSeller',
  request: {
    query: z.object({
      accountName: z
        .string()
        .default('apiexamples')
        .openapi({
          param: {
            description: 'Name of the VTEX account that belongs to the marketplace.',
            in: 'query',
            name: 'accountName',
            required: true,
            schema: { default: 'apiexamples', type: 'string' },
          },
        }),
      environment: z
        .string()
        .default('vtexcommercestable')
        .openapi({
          param: {
            description: 'Environment to use. Used as part of the URL.',
            in: 'query',
            name: 'environment',
            required: true,
            schema: { default: 'vtexcommercestable', type: 'string' },
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
    params: z.object({
      sellerId: z
        .string()
        .default('seller123')
        .openapi({
          param: {
            description:
              'A string that identifies the seller in the marketplace. This ID must be created by the marketplace',
            in: 'path',
            name: 'sellerId',
            required: true,
            schema: { default: 'seller123', type: 'string' },
            style: 'simple',
          },
        }),
    }),
    body: {
      description: 'array of objects',
      content: {
        'application/json': {
          schema: z
            .array(
              z
                .object({
                  operation: z
                    .string()
                    .default('replace')
                    .openapi({
                      description:
                        'The action being performed, which is always going to be `replace`.',
                    }),
                  path: z
                    .string()
                    .default('/field')
                    .openapi({
                      description:
                        "The path in which the value is being updated. It follows the standardized format `/{field}`, where `{field}` is the path's name.",
                    }),
                  value: z
                    .boolean()
                    .default(false)
                    .openapi({
                      description:
                        'The value that is being updated. Notice that the type will depend on the path that is being updated.',
                    }),
                })
                .openapi({ required: ['operation', 'path', 'value'] }),
            )
            .openapi({ description: 'array of objects', title: 'Request body' }),
        },
      },
    },
  },
  responses: { 200: { description: 'OK', headers: z.object({}) } },
})

export const getSellerRegisterPvtSellersSellerIdCommissionsRoute = createRoute({
  method: 'get',
  path: '/seller-register/pvt/sellers/{sellerId}/commissions',
  tags: ['Seller Commissions'],
  summary: 'List Seller Commissions by seller ID',
  description: 'This endpoint retrieves all comissions configured for a specific seller.',
  operationId: 'ListSellerCommissions',
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
      environment: z
        .string()
        .default('vtexcommercestable')
        .openapi({
          param: {
            description: 'Environment to use. Used as part of the URL.',
            in: 'query',
            name: 'environment',
            required: true,
            schema: { default: 'vtexcommercestable', type: 'string' },
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

export const putSellerRegisterPvtSellersSellerIdCommissionsCategoriesRoute = createRoute({
  method: 'put',
  path: '/seller-register/pvt/sellers/{sellerId}/commissions/categories',
  tags: ['Seller Commissions'],
  summary: 'Upsert Seller Commissions in Bulk',
  description:
    'This endpoint is used by marketplace operators to define comissions for multiple categories.',
  operationId: 'BulkUpsertSellerCommissions',
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
      environment: z
        .string()
        .default('vtexcommercestable')
        .openapi({
          param: {
            description: 'Environment to use. Used as part of the URL.',
            in: 'query',
            name: 'environment',
            required: true,
            schema: { default: 'vtexcommercestable', type: 'string' },
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
              'A string that identifies the seller in the marketplace. This ID must be created by the marketplace.',
            in: 'path',
            name: 'sellerId',
            required: true,
            schema: { default: 'seller123', type: 'string' },
            style: 'simple',
          },
        }),
    }),
    body: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .array(BulkUpsertSellerCommissionsRequestSchema)
            .openapi({
              description: '',
              example: [
                {
                  categoryFullPath: null,
                  categoryId: '6',
                  freightCommissionPercentage: 2.43,
                  productCommissionPercentage: 9.85,
                },
              ],
            }),
          example: [
            {
              categoryFullPath: null,
              categoryId: '6',
              freightCommissionPercentage: 2.43,
              productCommissionPercentage: 9.85,
            },
          ],
        },
      },
      required: true,
    },
  },
  responses: { 200: { description: 'OK', headers: z.object({}) } },
})

export const getSellerRegisterPvtSellersSellerIdCommissionsCategoryIdRoute = createRoute({
  method: 'get',
  path: '/seller-register/pvt/sellers/{sellerId}/commissions/{categoryId}',
  tags: ['Seller Commissions'],
  summary: 'Get Seller Commissions by Category ID',
  description: 'This endpoint retrieves seller comissions applied to the selected category.',
  operationId: 'RetrieveSellerCommissions',
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
      environment: z
        .string()
        .default('vtexcommercestable')
        .openapi({
          param: {
            description: 'Environment to use. Used as part of the URL.',
            in: 'query',
            name: 'environment',
            required: true,
            schema: { default: 'vtexcommercestable', type: 'string' },
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
              'A string that identifies the seller in the marketplace. This ID must be created by the marketplace.',
            in: 'path',
            name: 'sellerId',
            required: true,
            schema: { default: 'seller123', type: 'string' },
            style: 'simple',
          },
        }),
      categoryId: z
        .string()
        .default('6')
        .openapi({
          param: {
            description: 'ID of the category in which the comission was applied',
            in: 'path',
            name: 'categoryId',
            required: true,
            schema: { default: '6', type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK', headers: z.object({}) } },
})

export const putSellerRegisterPvtSellersSellerIdCommissionsCategoryIdRoute = createRoute({
  method: 'put',
  path: '/seller-register/pvt/sellers/{sellerId}/commissions/{categoryId}',
  tags: ['Seller Commissions'],
  summary: 'Upsert Seller Commissions by Category ID',
  description:
    'This endpoint is used by marketplace operators to define comissions for a single category, by ID.',
  operationId: 'UpsertSellerCommissions',
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
      environment: z
        .string()
        .default('vtexcommercestable')
        .openapi({
          param: {
            description: 'Environment to use. Used as part of the URL.',
            in: 'query',
            name: 'environment',
            required: true,
            schema: { default: 'vtexcommercestable', type: 'string' },
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
      categoryId: z
        .string()
        .default('6')
        .openapi({
          param: {
            description: 'ID of the category in which the comission will be applied.',
            in: 'path',
            name: 'categoryId',
            required: true,
            schema: { default: '6', type: 'string' },
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
          schema: UpsertSellerCommissionsRequestSchema,
          example: {
            categoryFullPath: null,
            categoryId: '6',
            freightCommissionPercentage: 2.43,
            productCommissionPercentage: 9.85,
          },
        },
      },
      required: true,
    },
  },
  responses: { 200: { description: 'OK', headers: z.object({}) } },
})

export const deleteSellerRegisterPvtSellersSellerIdCommissionsCategoryIdRoute = createRoute({
  method: 'delete',
  path: '/seller-register/pvt/sellers/{sellerId}/commissions/{categoryId}',
  tags: ['Seller Commissions'],
  summary: 'Remove Seller Commissions by Category ID',
  description: 'This endpoint removes a seller comission on the selected category.',
  operationId: 'RemoveSellerCommissions',
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
      environment: z
        .string()
        .default('vtexcommercestable')
        .openapi({
          param: {
            description: 'Environment to use. Used as part of the URL.',
            in: 'query',
            name: 'environment',
            required: true,
            schema: { default: 'vtexcommercestable', type: 'string' },
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
              'A string that identifies the seller in the marketplace. This ID must be created by the marketplace.',
            in: 'path',
            name: 'sellerId',
            required: true,
            schema: { default: 'seller123', type: 'string' },
            style: 'simple',
          },
        }),
      categoryId: z
        .string()
        .default('6')
        .openapi({
          param: {
            description: 'ID of the category in which the comission was applied',
            in: 'path',
            name: 'categoryId',
            required: true,
            schema: { default: '6', type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK', headers: z.object({}) } },
})

export const getSellerRegisterPvtSellersSellerIdSalesChannelMappingRoute = createRoute({
  method: 'get',
  path: '/seller-register/pvt/sellers/{sellerId}/sales-channel/mapping',
  tags: ['Sales Channel Mapping'],
  summary: 'Get Sales Channel Mapping Data',
  description:
    "Retrieves information about the mapping between marketplace's sales channels and a specific seller.",
  operationId: 'RetrieveMapping',
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
              'HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.',
            in: 'header',
            name: 'Accept',
            required: true,
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
    }),
    query: z.object({
      accountName: z
        .string()
        .default('apiexamples')
        .openapi({
          param: {
            description:
              'Name of the VTEX account that belongs to the marketplace. Used as part of the URL',
            in: 'query',
            name: 'accountName',
            required: true,
            schema: { default: 'apiexamples', type: 'string' },
          },
        }),
      environment: z
        .string()
        .default('vtexcommercestable')
        .openapi({
          param: {
            description: 'Environment to use. Used as part of the URL.',
            in: 'query',
            name: 'environment',
            required: true,
            schema: { default: 'vtexcommercestable', type: 'string' },
          },
        }),
      an: z
        .string()
        .default('apiexamples')
        .openapi({
          param: {
            description:
              "Marketplace's account name, the same one inputted on the endpoint's path.",
            in: 'query',
            name: 'an',
            required: true,
            schema: { default: 'apiexamples', type: 'string' },
            style: 'form',
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
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              marketplaceSalesChannel: z
                .int()
                .default(1)
                .exactOptional()
                .openapi({
                  description:
                    "Marketplace's sales channel that will be associated to the seller's [affiliate](https://help.vtex.com/en/tutorial/configuring-affiliates--tutorials_187).",
                }),
              sellerChannel: z
                .string()
                .default('GCB')
                .exactOptional()
                .openapi({
                  description:
                    "Seller's [affiliate](https://help.vtex.com/en/tutorial/configuring-affiliates--tutorials_187) that will be associated with the marketplace's sales channel. Through the affiliate, the seller determines which of his sales channel will be used for the mapping.",
                }),
            })
            .openapi({
              example: [{ marketplaceSalesChannel: '1', sellerChannel: 'GCC' }],
              title: 'UpsertMapping',
              required: [],
            }),
        },
      },
      headers: z.object({}),
    },
  },
})

export const putSellerRegisterPvtSellersSellerIdSalesChannelMappingRoute = createRoute({
  method: 'put',
  path: '/seller-register/pvt/sellers/{sellerId}/sales-channel/mapping',
  tags: ['Sales Channel Mapping'],
  summary: 'Upsert Sales Channel Mapping',
  description:
    "This endpoint allows the marketplace to map its sales channels with a seller's [affiliate](https://help.vtex.com/en/tutorial/configuring-affiliates--tutorials_187). The seller can have multiple sales channels associated with the same marketplace, by creating different affiliates. The mapping enables the seller to segment catalog, prices, inventory, logistics, and payments in the marketplace.",
  operationId: 'UpsertMapping',
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
              'HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.',
            in: 'header',
            name: 'Accept',
            required: true,
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
    }),
    query: z.object({
      accountName: z
        .string()
        .default('apiexamples')
        .openapi({
          param: {
            description:
              'Name of the VTEX account that belongs to the marketplace. Used as part of the URL.',
            in: 'query',
            name: 'accountName',
            required: true,
            schema: { default: 'apiexamples', type: 'string' },
          },
        }),
      environment: z
        .string()
        .default('vtexcommercestable')
        .openapi({
          param: {
            description: 'Environment to use. Used as part of the URL.',
            in: 'query',
            name: 'environment',
            required: true,
            schema: { default: 'vtexcommercestable', type: 'string' },
          },
        }),
      an: z
        .string()
        .default('apiexamples')
        .openapi({
          param: {
            description:
              "Marketplace's account name, the same one inputted on the endpoint's path.",
            explode: true,
            in: 'query',
            name: 'an',
            required: true,
            schema: { default: 'apiexamples', type: 'string' },
            style: 'form',
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
    body: {
      content: {
        'application/json': {
          schema: z.array(UpsertMappingRequestSchema).openapi({
            example: [
              { marketplaceSalesChannel: 1, sellerChannel: 'GCB' },
              { marketplaceSalesChannel: 2, sellerChannel: 'GCB' },
            ],
          }),
          example: [
            { marketplaceSalesChannel: 1, sellerChannel: 'GCB' },
            { marketplaceSalesChannel: 2, sellerChannel: 'GCB' },
          ],
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
              marketplaceSalesChannel: z
                .int()
                .default(1)
                .exactOptional()
                .openapi({
                  description:
                    "Marketplace's sales channel that will be associated to the seller's [affiliate](https://help.vtex.com/en/tutorial/configuring-affiliates--tutorials_187).",
                }),
              sellerChannel: z
                .string()
                .default('GCB')
                .exactOptional()
                .openapi({
                  description:
                    "Seller's [affiliate](https://help.vtex.com/en/tutorial/configuring-affiliates--tutorials_187) that will be associated with the marketplace's sales channel. Through the affiliate, the seller determines which of his sales channel will be used for the mapping.",
                }),
            })
            .openapi({
              example: [{ marketplaceSalesChannel: '1', sellerChannel: 'GCC' }],
              title: 'UpsertMapping',
              required: [],
            }),
        },
      },
      headers: z.object({}),
    },
  },
})
