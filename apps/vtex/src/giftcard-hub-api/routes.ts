import { createRoute, z } from '@hono/zod-openapi'

const ItemSchema = z
  .object({
    id: z.string(),
    name: z.string().nullable(),
    price: z.int32(),
    productId: z.string(),
    quantity: z.int32(),
    refId: z.string(),
  })
  .default({
    id: '2000002',
    name: null,
    price: 200,
    productId: '2000000',
    quantity: 1,
    refId: 'MEV41',
  })
  .openapi({ required: ['productId', 'id', 'refId', 'name', 'price', 'quantity'], title: 'Item' })
  .openapi('Item')

const CartSchema = z
  .object({
    discounts: z.int32(),
    grandTotal: z.int32(),
    items: z.array(ItemSchema).openapi({ description: '' }),
    itemsTotal: z.int32(),
    redemptionCode: z.string().nullable(),
    relationName: z.string().nullable(),
    shipping: z.int32(),
    taxes: z.int32(),
  })
  .openapi({
    example: {
      discounts: 20,
      grandTotal: 182,
      itemsTotal: 200,
      redemptionCode: null,
      relationName: null,
      shipping: 2,
      taxes: 0,
    },
    required: [
      'grandTotal',
      'relationName',
      'redemptionCode',
      'discounts',
      'shipping',
      'taxes',
      'items',
      'itemsTotal',
    ],
    title: 'Cart',
  })
  .openapi('Cart')

const Item1Schema = z
  .object({
    discount: z.int32(),
    id: z.string(),
    name: z.string(),
    price: z.int32(),
    priceTags: z.array(z.string()).openapi({ description: '' }),
    productId: z.string(),
    quantity: z.int32(),
    refId: z.string().nullable(),
    shippingDiscount: z.int32(),
    value: z.int32(),
  })
  .openapi({
    example: {
      discount: 0,
      id: '2000330',
      name: 'T-Shirt M',
      price: 15,
      priceTags: [],
      productId: '2000196',
      quantity: 1,
      refId: null,
      shippingDiscount: 0,
      value: 15,
    },
    required: [
      'id',
      'productId',
      'refId',
      'name',
      'value',
      'price',
      'quantity',
      'shippingDiscount',
      'discount',
      'priceTags',
    ],
    title: 'Item1',
  })
  .openapi('Item1')

const Cart1Schema = z
  .object({
    discounts: z.int32(),
    grandTotal: z.int32(),
    items: z.array(Item1Schema).openapi({ description: '' }),
    itemsTotal: z.int32(),
    shipping: z.int32(),
    taxes: z.int32(),
  })
  .openapi({
    example: { discounts: 0, grandTotal: 0, itemsTotal: 15, shipping: 0, taxes: 0 },
    required: ['items', 'grandTotal', 'discounts', 'shipping', 'taxes', 'itemsTotal'],
    title: 'Cart1',
  })
  .openapi('Cart1')

const Cart2Schema = z
  .object({
    discounts: z.int32(),
    grandTotal: z.int32(),
    items: z.array(ItemSchema).openapi({ description: '' }),
    itemsTotal: z.int32(),
    redemptionCode: z.string(),
    relationName: z.string(),
    shipping: z.int32(),
    taxes: z.int32(),
  })
  .openapi({
    example: {
      discounts: -20,
      grandTotal: 182,
      itemsTotal: 200,
      redemptionCode: 'FASD-ASDS-ASDA-ASDA',
      relationName: 'loyalty-program',
      shipping: 2,
      taxes: 0,
    },
    required: [
      'grandTotal',
      'relationName',
      'redemptionCode',
      'discounts',
      'shipping',
      'taxes',
      'items',
      'itemsTotal',
    ],
    title: 'Cart2',
  })
  .openapi('Cart2')

const ClientSchema = z
  .object({ document: z.string(), email: z.string(), id: z.string() })
  .default({ document: '42151783120', email: 'email@domain.com', id: '3b1ab' })
  .openapi({ required: ['id', 'email', 'document'], title: 'Client' })
  .openapi('Client')

const ClientProfileSchema = z
  .object({
    birthDate: z.string(),
    document: z.string(),
    documentType: z.string(),
    email: z.string(),
    firstName: z.string(),
    isCorporate: z.boolean(),
    lastName: z.string(),
    phone: z.string(),
  })
  .openapi({
    example: {
      birthDate: '0001-01-01T00:00:00',
      document: '10617764093',
      documentType: 'cpf',
      email: 'email@domain.com',
      firstName: 'John',
      isCorporate: false,
      lastName: 'Smith',
      phone: '+5521993759875',
    },
    required: [
      'email',
      'firstName',
      'lastName',
      'document',
      'documentType',
      'phone',
      'birthDate',
      'isCorporate',
    ],
    title: 'ClientProfile',
  })
  .openapi('ClientProfile')

const CreateGiftCardCancellationTransactionRequestSchema = z
  .object({ requestId: z.string(), value: z.number() })
  .default({ requestId: '1209', value: 12 })
  .openapi({
    required: ['value', 'requestId'],
    title: 'CreateGiftCardCancellationTransactionRequest',
  })
  .openapi('CreateGiftCardCancellationTransactionRequest')

const CreateGiftCardSettlementTransactionRequestSchema = z
  .object({ cart: Cart2Schema, client: ClientSchema })
  .default({
    cart: {
      discounts: 20,
      grandTotal: 182,
      items: [
        { id: '2002', name: null, price: 200, productId: '200', quantity: 1, refId: 'MEV41' },
      ],
      itemsTotal: 200,
      redemptionCode: 'FASD',
      relationName: 'rewards-program',
      shipping: 2,
      taxes: 0,
    },
    client: {
      document: '42151783120',
      email: 'convidadovtex@gmail.com',
      id: '3b1abc17-988e-4a14-8b7f-31fc6a5b955c',
    },
  })
  .openapi({ required: ['client', 'cart'], title: 'CreateGiftCardSettlementTransactionRequest' })
  .openapi('CreateGiftCardSettlementTransactionRequest')

const ShippingSchema = z
  .object({
    city: z.string(),
    complement: z.string(),
    country: z.string(),
    neighborhood: z.string(),
    number: z.string(),
    postalCode: z.string(),
    receiverName: z.string(),
    reference: z.string(),
    state: z.string(),
    street: z.string(),
  })
  .openapi({
    example: {
      city: 'Leblon',
      complement: '',
      country: 'BRA',
      neighborhood: '',
      number: '9678',
      postalCode: '24417-246',
      receiverName: 'John Smith',
      reference: '',
      state: 'RJ',
      street: 'Rua Aidea Barreto do Couto',
    },
    required: [
      'receiverName',
      'postalCode',
      'city',
      'state',
      'country',
      'street',
      'number',
      'neighborhood',
      'complement',
      'reference',
    ],
    title: 'Shipping',
  })
  .openapi('Shipping')

const OrderInfoSchema = z
  .object({
    cart: Cart1Schema,
    clientProfile: ClientProfileSchema,
    orderId: z.string(),
    sequence: z.int32(),
    shipping: ShippingSchema,
  })
  .openapi({
    example: {
      cart: { discounts: 0, grandTotal: 0, itemsTotal: 15, shipping: 0, taxes: 0 },
      clientProfile: {
        birthDate: '0001-01-01T00:00:00',
        document: '10617764093',
        documentType: 'cpf',
        email: 'email@domain.com',
        firstName: 'John',
        isCorporate: false,
        lastName: 'Smith',
        phone: '+5521993759875',
      },
      orderId: 'v2915869org-01',
      sequence: 2915869,
      shipping: {
        city: 'Leblon',
        complement: '',
        country: 'BRA',
        neighborhood: '',
        number: '9678',
        postalCode: '24417-246',
        receiverName: 'John Smith',
        reference: '',
        state: 'RJ',
        street: 'Rua Aidea Barreto do Couto',
      },
    },
    required: ['orderId', 'sequence', 'cart', 'clientProfile', 'shipping'],
    title: 'OrderInfo',
  })
  .openapi('OrderInfo')

const CreateGiftCardTransactionRequestSchema = z
  .object({
    description: z.string(),
    operation: z.string(),
    orderInfo: OrderInfoSchema,
    redemptionCode: z.string().nullable(),
    redemptionToken: z.string().nullable(),
    requestId: z.string(),
    value: z.number(),
  })
  .default({
    description: 'example',
    operation: 'Credit',
    orderInfo: {
      cart: {
        discounts: 0,
        grandTotal: 0,
        items: [
          {
            discount: 0,
            id: '2000330',
            name: 'n',
            price: 15,
            priceTags: [],
            productId: '2000196',
            quantity: 1,
            refId: null,
            shippingDiscount: 0,
            value: 15,
          },
        ],
        itemsTotal: 15,
        shipping: 0,
        taxes: 0,
      },
      clientProfile: {
        birthDate: '0001-01-01T00:00:00',
        document: '10617764093',
        documentType: 'cpf',
        email: 'email@domain.com',
        firstName: 'example',
        isCorporate: false,
        lastName: 'example',
        phone: '+5521999999999',
      },
      orderId: 'v2915',
      sequence: 2915869,
      shipping: {
        city: 'Rio de Janeiro',
        complement: 'address',
        country: 'BRA',
        neighborhood: 'address',
        number: '96',
        postalCode: '24417-246',
        receiverName: 'client',
        reference: 'address',
        state: 'RJ',
        street: 'address',
      },
    },
    redemptionCode: null,
    redemptionToken: null,
    requestId: 'v2915',
    value: 28,
  })
  .openapi({
    required: [
      'operation',
      'value',
      'description',
      'redemptionToken',
      'redemptionCode',
      'requestId',
      'orderInfo',
    ],
    title: 'CreateGiftCardTransactionRequest',
  })
  .openapi('CreateGiftCardTransactionRequest')

const CreateGiftCardinGiftCardProviderRequestSchema = z
  .object({
    caption: z.string(),
    emissionDate: z.string(),
    expiringDate: z.string(),
    multipleCredits: z.boolean(),
    multipleRedemptions: z.boolean(),
    profileId: z.string(),
    relationName: z.string(),
    restrictedToOwner: z.boolean(),
  })
  .default({
    caption: 'Rewards Program',
    emissionDate: '2011-02-04T17:02:19.17',
    expiringDate: '2020-02-04T17:02:19.17',
    multipleCredits: true,
    multipleRedemptions: true,
    profileId: '92de2',
    relationName: 'rewards-program',
    restrictedToOwner: true,
  })
  .openapi({
    required: [
      'relationName',
      'emissionDate',
      'expiringDate',
      'caption',
      'restrictedToOwner',
      'multipleRedemptions',
      'multipleCredits',
      'profileId',
    ],
    title: 'CreateGiftCardinGiftCardProviderRequest',
  })
  .openapi('CreateGiftCardinGiftCardProviderRequest')

const CreateUpdateGiftCardProviderbyIDRequestSchema = z
  .object({
    appKey: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Credential provided by the merchant that VTEX will use for identification',
      }),
    appToken: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Credential provided by the merchant that VTEX will use for identification',
      }),
    cancelEnabled: z
      .boolean()
      .openapi({
        description:
          'It says if it is possible to cancel the transaction, generated through the provider',
      }),
    oauthProvider: z.string().openapi({ description: "Provider's authentication" }),
    preAuthEnabled: z
      .boolean()
      .openapi({
        description:
          'Related to the pre-authorization that can happen on the transaction generated through the provider',
      }),
    serviceUrl: z.string().openapi({ description: 'URL from the provider' }),
  })
  .default({
    cancelEnabled: true,
    oauthProvider: 'vtex',
    preAuthEnabled: true,
    serviceUrl: 'https://api.vtex.com.br/example',
  })
  .openapi({
    required: ['serviceUrl', 'oauthProvider', 'preAuthEnabled', 'cancelEnabled'],
    title: '',
  })
  .openapi('CreateUpdateGiftCardProviderbyIDRequest')

const GetGiftCardfromGiftCardProviderRequestSchema = z
  .object({ cart: CartSchema, client: ClientSchema })
  .default({
    cart: {
      discounts: 20,
      grandTotal: 182,
      items: [
        { id: '2002', name: null, price: 200, productId: '2000000', quantity: 1, refId: 'M41' },
      ],
      itemsTotal: 200,
      redemptionCode: null,
      relationName: null,
      shipping: 2,
      taxes: 0,
    },
    client: { document: '42151783120', email: 'email@domain.com', id: '3b1c' },
  })
  .openapi({ required: ['client', 'cart'], title: 'GetGiftCardfromGiftCardProviderRequest' })
  .openapi('GetGiftCardfromGiftCardProviderRequest')

const AppKeySecurityScheme = { in: 'header', name: 'X-VTEX-API-AppKey', type: 'apiKey' }

const AppTokenSecurityScheme = { in: 'header', name: 'X-VTEX-API-AppToken', type: 'apiKey' }

export const getGiftcardprovidersRoute = createRoute({
  method: 'get',
  path: '/giftcardproviders',
  tags: ['Provider'],
  summary: 'List All GiftCard Providers',
  description: 'Returns a collection of giftcard providers from a store.',
  operationId: 'ListAllGiftCardProviders',
  request: {
    headers: z.object({
      Accept: z
        .string()
        .default('application/json')
        .openapi({
          param: {
            description:
              'Media type(s) that is/are acceptable for the response. Default value for payment provider protocol is application/json.',
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
            description:
              'The Media type of the body of the request. Default value for payment provider protocol is application/json.',
            in: 'header',
            name: 'Content-Type',
            required: true,
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
      'REST-Range': z
        .string()
        .default('resources=0-49')
        .exactOptional()
        .openapi({
          param: {
            description:
              'Pagination control. This query variable must follow the format _resources={from}-{to}_.',
            in: 'header',
            name: 'REST-Range',
            required: false,
            schema: { default: 'resources=0-49', type: 'string' },
            style: 'simple',
          },
        }),
      'X-VTEX-API-AppKey': z
        .string()
        .default('{{X-VTEX-API-AppKey}}')
        .openapi({
          param: {
            description: 'VTEX API AppKey',
            in: 'header',
            name: 'X-VTEX-API-AppKey',
            required: true,
            schema: { default: '{{X-VTEX-API-AppKey}}', type: 'string' },
            style: 'simple',
          },
        }),
      'X-VTEX-API-AppToken': z
        .string()
        .default('{{X-VTEX-API-AppToken}}')
        .openapi({
          param: {
            description: 'VTEX API AppToken',
            in: 'header',
            name: 'X-VTEX-API-AppToken',
            required: true,
            schema: { default: '{{X-VTEX-API-AppToken}}', type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'text/plain': { schema: z.object({}) } },
      headers: z.object({}),
    },
  },
  security: [],
})

export const putGiftcardprovidersGiftCardProviderIDRoute = createRoute({
  method: 'put',
  path: '/giftcardproviders/{giftCardProviderID}',
  tags: ['Provider'],
  summary: 'Create/Update GiftCard Provider by ID',
  description: 'Create or update a giftcard provider from a store.',
  operationId: 'Create/UpdateGiftCardProviderbyID',
  request: {
    headers: z.object({
      Accept: z
        .string()
        .default('application/json')
        .openapi({
          param: {
            description:
              'Media type(s) that is/are acceptable for the response. Default value for payment provider protocol is application/json.',
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
            description:
              'The Media type of the body of the request. Default value for payment provider protocol is application/json',
            in: 'header',
            name: 'Content-Type',
            required: true,
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
      'X-VTEX-API-AppKey': z
        .string()
        .default('{{X-VTEX-API-AppKey}}')
        .openapi({
          param: {
            description: 'VTEX API AppKey',
            in: 'header',
            name: 'X-VTEX-API-AppKey',
            required: true,
            schema: { default: '{{X-VTEX-API-AppKey}}', type: 'string' },
            style: 'simple',
          },
        }),
      'X-VTEX-API-AppToken': z
        .string()
        .default('{{X-VTEX-API-AppToken}}')
        .openapi({
          param: {
            description: 'VTEX API AppToken',
            in: 'header',
            name: 'X-VTEX-API-AppToken',
            required: true,
            schema: { default: '{{X-VTEX-API-AppToken}}', type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      giftCardProviderID: z
        .string()
        .default('insert identifier here')
        .openapi({
          param: {
            description: "Gift Card provider's ID.",
            in: 'path',
            name: 'giftCardProviderID',
            required: true,
            schema: { default: 'insert identifier here', type: 'string' },
            style: 'simple',
          },
        }),
    }),
    body: {
      description: '',
      content: {
        'application/vnd.vtex.giftcardproviders.v1+json': {
          schema: CreateUpdateGiftCardProviderbyIDRequestSchema,
          example: {
            cancelEnabled: true,
            oauthProvider: 'vtex',
            preAuthEnabled: true,
            serviceUrl: 'https://api.vtex.com.br/basedevmkp',
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: '',
      content: { 'text/plain': { schema: z.object({}) } },
      headers: z.object({}),
    },
  },
})

export const deleteGiftcardprovidersGiftCardProviderIDRoute = createRoute({
  method: 'delete',
  path: '/giftcardproviders/{giftCardProviderID}',
  tags: ['Provider'],
  summary: 'Delete GiftCard Provider by ID',
  description: 'Delete a giftcard provider from a store.',
  operationId: 'DeleteGiftCardProviderbyID',
  request: {
    headers: z.object({
      Accept: z
        .string()
        .default('application/json')
        .openapi({
          param: {
            description:
              'Media type(s) that is/are acceptable for the response. Default value for payment provider protocol is application/json.',
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
            description:
              'The Media type of the body of the request. Default value for payment provider protocol is application/json.',
            in: 'header',
            name: 'Content-Type',
            required: true,
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
      'X-VTEX-API-AppKey': z
        .string()
        .default('{{X-VTEX-API-AppKey}}')
        .openapi({
          param: {
            description: 'VTEX API AppKey',
            in: 'header',
            name: 'X-VTEX-API-AppKey',
            required: true,
            schema: { default: '{{X-VTEX-API-AppKey}}', type: 'string' },
            style: 'simple',
          },
        }),
      'X-VTEX-API-AppToken': z
        .string()
        .default('{{X-VTEX-API-AppToken}}')
        .openapi({
          param: {
            description: 'VTEX API AppToken',
            in: 'header',
            name: 'X-VTEX-API-AppToken',
            required: true,
            schema: { default: '{{X-VTEX-API-AppToken}}', type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      giftCardProviderID: z
        .string()
        .default('insert identifier here')
        .openapi({
          param: {
            description: "Gift Card provider's ID.",
            in: 'path',
            name: 'giftCardProviderID',
            required: true,
            schema: { default: 'insert identifier here', type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'text/plain': { schema: z.object({}) } },
      headers: z.object({}),
    },
    404: { description: 'O provider não existe.\n' },
  },
})

export const postGiftcardprovidersGiftCardProviderIDGiftcardsRoute = createRoute({
  method: 'post',
  path: '/giftcardproviders/{giftCardProviderID}/giftcards',
  tags: ['Transaction'],
  summary: 'Create GiftCard in GiftCard Provider',
  description: 'Creates a giftcard in a giftcard provider.',
  operationId: 'CreateGiftCardinGiftCardProvider',
  request: {
    headers: z.object({
      Accept: z
        .string()
        .default('application/json')
        .openapi({
          param: {
            description:
              'Media type(s) that is/are acceptable for the response. Default value for payment provider protocol is application/json.',
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
            description:
              'The Media type of the body of the request. Default value for payment provider protocol is application/json',
            in: 'header',
            name: 'Content-Type',
            required: true,
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
      'X-VTEX-API-AppKey': z
        .string()
        .default('{{X-VTEX-API-AppKey}}')
        .openapi({
          param: {
            description: 'VTEX API AppKey',
            in: 'header',
            name: 'X-VTEX-API-AppKey',
            required: true,
            schema: { default: '{{X-VTEX-API-AppKey}}', type: 'string' },
            style: 'simple',
          },
        }),
      'X-VTEX-API-AppToken': z
        .string()
        .default('{{X-VTEX-API-AppToken}}')
        .openapi({
          param: {
            description: 'VTEX API AppToken',
            in: 'header',
            name: 'X-VTEX-API-AppToken',
            required: true,
            schema: { default: '{{X-VTEX-API-AppToken}}', type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      giftCardProviderID: z
        .string()
        .default('insert identifier here')
        .openapi({
          param: {
            description: "Gift Card provider's ID.",
            in: 'path',
            name: 'giftCardProviderID',
            required: true,
            schema: { default: 'insert identifier here', type: 'string' },
            style: 'simple',
          },
        }),
    }),
    body: {
      description: '',
      content: {
        'application/vnd.vtex.giftcardproviders.v1+json': {
          schema: CreateGiftCardinGiftCardProviderRequestSchema,
          example: {
            caption: 'Loyalty Program',
            emissionDate: '2011-02-04T17:02:19.17',
            expiringDate: '2020-02-04T17:02:19.17',
            multipleCredits: true,
            multipleRedemptions: true,
            profileId: '92de2449-0e02-4ca9-a4aa-a09cc9d8f7ff',
            relationName: 'loyalty-program',
            restrictedToOwner: true,
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: '',
      content: { 'text/plain': { schema: z.object({}) } },
      headers: z.object({}),
    },
  },
})

export const postGiftcardprovidersGiftCardProviderIDGiftcardsSearchRoute = createRoute({
  method: 'post',
  path: '/giftcardproviders/{giftCardProviderID}/giftcards/_search',
  tags: ['Transaction'],
  summary: 'Get GiftCard from GiftCard Provider',
  description: 'Returns all giftcards from a giftcard provider according to the filters.',
  operationId: 'GetGiftCardfromGiftCardProvider',
  request: {
    headers: z.object({
      Accept: z
        .string()
        .default('application/json')
        .openapi({
          param: {
            description:
              'Media type(s) that is/are acceptable for the response. Default value for payment provider protocol is application/json.',
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
            description:
              'The Media type of the body of the request. Default value for payment provider protocol is application/json',
            in: 'header',
            name: 'Content-Type',
            required: true,
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
      'X-VTEX-API-AppKey': z
        .string()
        .default('{{X-VTEX-API-AppKey}}')
        .openapi({
          param: {
            description: 'VTEX API AppKey',
            in: 'header',
            name: 'X-VTEX-API-AppKey',
            required: true,
            schema: { default: '{{X-VTEX-API-AppKey}}', type: 'string' },
            style: 'simple',
          },
        }),
      'X-VTEX-API-AppToken': z
        .string()
        .default('{{X-VTEX-API-AppToken}}')
        .openapi({
          param: {
            description: 'VTEX API AppToken',
            in: 'header',
            name: 'X-VTEX-API-AppToken',
            required: true,
            schema: { default: '{{X-VTEX-API-AppToken}}', type: 'string' },
            style: 'simple',
          },
        }),
      'REST-Range': z
        .string()
        .default('resources=0-49')
        .openapi({
          param: {
            description: 'Range of documents to show.',
            in: 'header',
            name: 'REST-Range',
            required: true,
            schema: { default: 'resources=0-49', type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      giftCardProviderID: z
        .string()
        .default('insert example here')
        .openapi({
          param: {
            description: "Gift Card provider's ID.",
            in: 'path',
            name: 'giftCardProviderID',
            required: true,
            schema: { default: 'insert example here', type: 'string' },
            style: 'simple',
          },
        }),
    }),
    body: {
      description: '',
      content: {
        'application/vnd.vtex.giftcardproviders.v1+json': {
          schema: GetGiftCardfromGiftCardProviderRequestSchema,
          example: {
            cart: {
              discounts: -20,
              grandTotal: 182,
              items: [
                {
                  id: '2000002',
                  name: null,
                  price: 200,
                  productId: '2000000',
                  quantity: 1,
                  refId: 'MEV41',
                },
              ],
              itemsTotal: 200,
              redemptionCode: null,
              relationName: null,
              shipping: 2,
              taxes: 0,
            },
            client: {
              document: '42151783120',
              email: 'email@domain.com',
              id: '3b1abc17-988e-4a14-8b7f-31fc6a5b955c',
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: '',
      content: { 'text/plain': { schema: z.object({}) } },
      headers: z.object({}),
    },
  },
})

export const getGiftcardprovidersGiftCardProviderIDGiftcardsGiftCardIDRoute = createRoute({
  method: 'get',
  path: '/giftcardproviders/{giftCardProviderID}/giftcards/{giftCardID}',
  tags: ['Transaction'],
  summary: 'Get GiftCard from GiftCard Provider by ID',
  description: 'Returns a specific giftcard from a giftcard provider.',
  operationId: 'GetGiftCardfromGiftCardProviderbyID',
  request: {
    headers: z.object({
      Accept: z
        .string()
        .default('application/json')
        .openapi({
          param: {
            description:
              'Media type(s) that is/are acceptable for the response. Default value for payment provider protocol is application/json.',
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
            description:
              'The Media type of the body of the request. Default value for payment provider protocol is application/json.',
            in: 'header',
            name: 'Content-Type',
            required: true,
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
      'X-VTEX-API-AppKey': z
        .string()
        .default('{{X-VTEX-API-AppKey}}')
        .openapi({
          param: {
            description: 'VTEX API AppKey',
            in: 'header',
            name: 'X-VTEX-API-AppKey',
            required: true,
            schema: { default: '{{X-VTEX-API-AppKey}}', type: 'string' },
            style: 'simple',
          },
        }),
      'X-VTEX-API-AppToken': z
        .string()
        .default('{{X-VTEX-API-AppToken}}')
        .openapi({
          param: {
            description: 'VTEX API AppToken',
            in: 'header',
            name: 'X-VTEX-API-AppToken',
            required: true,
            schema: { default: '{{X-VTEX-API-AppToken}}', type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      giftCardProviderID: z
        .string()
        .default('insert identifier here')
        .openapi({
          param: {
            description: "Gift Card provider's ID.",
            in: 'path',
            name: 'giftCardProviderID',
            required: true,
            schema: { default: 'insert identifier here', type: 'string' },
            style: 'simple',
          },
        }),
      giftCardID: z
        .string()
        .default('6')
        .openapi({
          param: {
            description: 'Gift Card ID.',
            in: 'path',
            name: 'giftCardID',
            required: true,
            schema: { default: '6', type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'text/plain': { schema: z.object({}) } },
      headers: z.object({}),
    },
  },
})

export const getGiftcardprovidersGiftCardProviderIDGiftcardsGiftCardIDTransactionsRoute =
  createRoute({
    method: 'get',
    path: '/giftcardproviders/{giftCardProviderID}/giftcards/{giftCardID}/transactions',
    tags: ['Transaction'],
    summary: 'List All GiftCard Transactions',
    description: 'Return all transaction from a giftcard.',
    operationId: 'ListAllGiftCardTransactions',
    request: {
      headers: z.object({
        Accept: z
          .string()
          .default('application/json')
          .openapi({
            param: {
              description:
                'Media type(s) that is/are acceptable for the response. Default value for payment provider protocol is application/json.',
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
              description:
                'The Media type of the body of the request. Default value for payment provider protocol is application/json.',
              in: 'header',
              name: 'Content-Type',
              required: true,
              schema: { default: 'application/json', type: 'string' },
              style: 'simple',
            },
          }),
        'X-VTEX-API-AppKey': z
          .string()
          .default('{{X-VTEX-API-AppKey}}')
          .openapi({
            param: {
              description: 'VTEX API AppKey',
              in: 'header',
              name: 'X-VTEX-API-AppKey',
              required: true,
              schema: { default: '{{X-VTEX-API-AppKey}}', type: 'string' },
              style: 'simple',
            },
          }),
        'X-VTEX-API-AppToken': z
          .string()
          .default('{{X-VTEX-API-AppToken}}')
          .openapi({
            param: {
              description: 'VTEX API AppToken',
              in: 'header',
              name: 'X-VTEX-API-AppToken',
              required: true,
              schema: { default: '{{X-VTEX-API-AppToken}}', type: 'string' },
              style: 'simple',
            },
          }),
      }),
      params: z.object({
        giftCardProviderID: z
          .string()
          .default('insert identifier here')
          .openapi({
            param: {
              description: "Gift Card provider's ID.",
              in: 'path',
              name: 'giftCardProviderID',
              required: true,
              schema: { default: 'insert identifier here', type: 'string' },
              style: 'simple',
            },
          }),
        giftCardID: z
          .string()
          .default('6')
          .openapi({
            param: {
              description: 'Gift Card ID.',
              in: 'path',
              name: 'giftCardID',
              required: true,
              schema: { default: '6', type: 'string' },
              style: 'simple',
            },
          }),
      }),
    },
    responses: {
      200: {
        description: '',
        content: { 'text/plain': { schema: z.object({}) } },
        headers: z.object({}),
      },
    },
  })

export const postGiftcardprovidersGiftCardProviderIDGiftcardsGiftCardIDTransactionsRoute =
  createRoute({
    method: 'post',
    path: '/giftcardproviders/{giftCardProviderID}/giftcards/{giftCardID}/transactions',
    tags: ['Transaction'],
    summary: 'Create GiftCard Transaction',
    description: 'Creates a transaction to a giftcard.',
    operationId: 'CreateGiftCardTransaction',
    request: {
      headers: z.object({
        Accept: z
          .string()
          .default('application/json')
          .openapi({
            param: {
              description:
                'Media type(s) that is/are acceptable for the response. Default value for payment provider protocol is application/json.',
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
              description:
                'The Media type of the body of the request. Default value for payment provider protocol is application/json',
              in: 'header',
              name: 'Content-Type',
              required: true,
              schema: { default: 'application/json', type: 'string' },
              style: 'simple',
            },
          }),
        'X-VTEX-API-AppKey': z
          .string()
          .default('{{X-VTEX-API-AppKey}}')
          .openapi({
            param: {
              description: 'VTEX API AppKey',
              in: 'header',
              name: 'X-VTEX-API-AppKey',
              required: true,
              schema: { default: '{{X-VTEX-API-AppKey}}', type: 'string' },
              style: 'simple',
            },
          }),
        'X-VTEX-API-AppToken': z
          .string()
          .default('{{X-VTEX-API-AppToken}}')
          .openapi({
            param: {
              description: 'VTEX API AppToken',
              in: 'header',
              name: 'X-VTEX-API-AppToken',
              required: true,
              schema: { default: '{{X-VTEX-API-AppToken}}', type: 'string' },
              style: 'simple',
            },
          }),
      }),
      params: z.object({
        giftCardProviderID: z
          .string()
          .default('insert identifier here')
          .openapi({
            param: {
              description: "Gift Card provider's ID.",
              in: 'path',
              name: 'giftCardProviderID',
              required: true,
              schema: { default: 'insert identifier here', type: 'string' },
              style: 'simple',
            },
          }),
        giftCardID: z
          .string()
          .default('6')
          .openapi({
            param: {
              description: 'Gift Card ID.',
              in: 'path',
              name: 'giftCardID',
              required: true,
              schema: { default: '6', type: 'string' },
              style: 'simple',
            },
          }),
      }),
      body: {
        description: '',
        content: {
          'application/vnd.vtex.giftcardproviders.v1+json': {
            schema: CreateGiftCardTransactionRequestSchema,
            example: {
              description: 'Order v2915869org-01',
              operation: 'Credit',
              orderInfo: {
                cart: {
                  discounts: 0,
                  grandTotal: 0,
                  items: [
                    {
                      discount: 0,
                      id: '2000330',
                      name: 'T-Shirt M',
                      price: 15,
                      priceTags: [],
                      productId: '2000196',
                      quantity: 1,
                      refId: null,
                      shippingDiscount: 0,
                      value: 15,
                    },
                  ],
                  itemsTotal: 15,
                  shipping: 0,
                  taxes: 0,
                },
                clientProfile: {
                  birthDate: '0001-01-01T00:00:00',
                  document: '10617764093',
                  documentType: 'cpf',
                  email: 'email@domain.com',
                  firstName: 'John',
                  isCorporate: false,
                  lastName: 'Smith',
                  phone: '+5521993759875',
                },
                orderId: 'v2915869org-01',
                sequence: 2915869,
                shipping: {
                  city: 'Leblon',
                  complement: 'address',
                  country: 'BRA',
                  neighborhood: 'address',
                  number: '9678',
                  postalCode: '24417-246',
                  receiverName: 'John Smith',
                  reference: 'address',
                  state: 'RJ',
                  street: 'Rua Aidea Barreto do Couto',
                },
              },
              redemptionCode: null,
              redemptionToken: null,
              requestId: 'v2915869org-01',
              value: 28.4,
            },
          },
        },
        required: true,
      },
    },
    responses: {
      200: {
        description: '',
        content: { 'text/plain': { schema: z.object({}) } },
        headers: z.object({}),
      },
    },
  })

export const getGiftcardprovidersGiftCardProviderIDGiftcardsGiftCardIDTransactionsTIdCancellationsRoute =
  createRoute({
    method: 'get',
    path: '/giftcardproviders/{giftCardProviderID}/giftcards/{giftCardID}/transactions/{tId}/cancellations',
    tags: ['Transaction'],
    summary: 'List All GiftCard Cancellation Transactions',
    description: 'Returns a collection of cancellation transactions from a giftcard.',
    operationId: 'ListAllGiftCardCancellationTransactions',
    request: {
      headers: z.object({
        Accept: z
          .string()
          .default('application/json')
          .openapi({
            param: {
              description:
                'Media type(s) that is/are acceptable for the response. Default value for payment provider protocol is application/json.',
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
              description:
                'The Media type of the body of the request. Default value for payment provider protocol is application/json.',
              in: 'header',
              name: 'Content-Type',
              required: true,
              schema: { default: 'application/json', type: 'string' },
              style: 'simple',
            },
          }),
        'X-VTEX-API-AppKey': z
          .string()
          .default('{{X-VTEX-API-AppKey}}')
          .openapi({
            param: {
              description: 'VTEX API AppKey',
              in: 'header',
              name: 'X-VTEX-API-AppKey',
              required: true,
              schema: { default: '{{X-VTEX-API-AppKey}}', type: 'string' },
              style: 'simple',
            },
          }),
        'X-VTEX-API-AppToken': z
          .string()
          .default('{{X-VTEX-API-AppToken}}')
          .openapi({
            param: {
              description: 'VTEX API AppToken',
              in: 'header',
              name: 'X-VTEX-API-AppToken',
              required: true,
              schema: { default: '{{X-VTEX-API-AppToken}}', type: 'string' },
              style: 'simple',
            },
          }),
      }),
      params: z.object({
        giftCardProviderID: z
          .string()
          .default('insert identifier here')
          .openapi({
            param: {
              description: "Gift Card provider's ID.",
              in: 'path',
              name: 'giftCardProviderID',
              required: true,
              schema: { default: 'insert identifier here', type: 'string' },
              style: 'simple',
            },
          }),
        giftCardID: z
          .string()
          .default('6')
          .openapi({
            param: {
              description: 'Gift Card ID.',
              in: 'path',
              name: 'giftCardID',
              required: true,
              schema: { default: '6', type: 'string' },
              style: 'simple',
            },
          }),
        tId: z
          .string()
          .default('b47690')
          .openapi({
            param: {
              description:
                'Transaction ID generated by the provider. It is different from the `transactionID` generated by VTEX.',
              in: 'path',
              name: 'tId',
              required: true,
              schema: { default: 'b47690', type: 'string' },
              style: 'simple',
            },
          }),
      }),
    },
    responses: {
      200: {
        description: '',
        content: { 'text/plain': { schema: z.object({}) } },
        headers: z.object({}),
      },
    },
  })

export const postGiftcardprovidersGiftCardProviderIDGiftcardsGiftCardIDTransactionsTIdCancellationsRoute =
  createRoute({
    method: 'post',
    path: '/giftcardproviders/{giftCardProviderID}/giftcards/{giftCardID}/transactions/{tId}/cancellations',
    tags: ['Transaction'],
    summary: 'Create GiftCard Cancellation Transaction',
    description: 'Creates a cancellation transaction to a giftcard.',
    operationId: 'CreateGiftCardCancellationTransaction',
    request: {
      headers: z.object({
        Accept: z
          .string()
          .default('application/json')
          .openapi({
            param: {
              description:
                'Media type(s) that is/are acceptable for the response. Default value for payment provider protocol is application/json.',
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
              description:
                'The Media type of the body of the request. Default value for payment provider protocol is application/json',
              in: 'header',
              name: 'Content-Type',
              required: true,
              schema: { default: 'application/json', type: 'string' },
              style: 'simple',
            },
          }),
        'X-VTEX-API-AppKey': z
          .string()
          .default('{{X-VTEX-API-AppKey}}')
          .openapi({
            param: {
              description: 'VTEX API AppKey',
              in: 'header',
              name: 'X-VTEX-API-AppKey',
              required: true,
              schema: { default: '{{X-VTEX-API-AppKey}}', type: 'string' },
              style: 'simple',
            },
          }),
        'X-VTEX-API-AppToken': z
          .string()
          .default('{{X-VTEX-API-AppToken}}')
          .openapi({
            param: {
              description: 'VTEX API AppToken',
              in: 'header',
              name: 'X-VTEX-API-AppToken',
              required: true,
              schema: { default: '{{X-VTEX-API-AppToken}}', type: 'string' },
              style: 'simple',
            },
          }),
      }),
      params: z.object({
        giftCardProviderID: z
          .string()
          .default('insert identifier here')
          .openapi({
            param: {
              description: "Gift Card provider's ID.",
              in: 'path',
              name: 'giftCardProviderID',
              required: true,
              schema: { default: 'insert identifier here', type: 'string' },
              style: 'simple',
            },
          }),
        giftCardID: z
          .string()
          .default('6')
          .openapi({
            param: {
              description: 'Gift Card ID.',
              in: 'path',
              name: 'giftCardID',
              required: true,
              schema: { default: '6', type: 'string' },
              style: 'simple',
            },
          }),
        tId: z
          .string()
          .default('b47690')
          .openapi({
            param: {
              description:
                'Transaction ID generated by the provider. It is different from the `transactionID` generated by VTEX.',
              in: 'path',
              name: 'tId',
              required: true,
              schema: { default: 'b47690', type: 'string' },
              style: 'simple',
            },
          }),
      }),
      body: {
        description: '',
        content: {
          'application/vnd.vtex.giftcardproviders.v1+json': {
            schema: CreateGiftCardCancellationTransactionRequestSchema,
            example: { requestId: '12093812masoidj120398', value: 12.1 },
          },
        },
        required: true,
      },
    },
    responses: {
      200: {
        description: '',
        content: { 'text/plain': { schema: z.object({}) } },
        headers: z.object({}),
      },
    },
  })

export const getGiftcardprovidersGiftCardProviderIDGiftcardsGiftCardIDTransactionsTIdSettlementsRoute =
  createRoute({
    method: 'get',
    path: '/giftcardproviders/{giftCardProviderID}/giftcards/{giftCardID}/transactions/{tId}/settlements',
    tags: ['Transaction'],
    summary: 'List All GiftCard Settlement Transactions',
    description: 'Returns a collection of settlement transactions from a giftcard.',
    operationId: 'ListAllGiftCardSettlementTransactions',
    request: {
      headers: z.object({
        Accept: z
          .string()
          .default('application/json')
          .openapi({
            param: {
              description:
                'Media type(s) that is/are acceptable for the response. Default value for payment provider protocol is application/json.',
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
              description:
                'The Media type of the body of the request. Default value for payment provider protocol is application/json.',
              in: 'header',
              name: 'Content-Type',
              required: true,
              schema: { default: 'application/json', type: 'string' },
              style: 'simple',
            },
          }),
        'X-VTEX-API-AppKey': z
          .string()
          .default('{{X-VTEX-API-AppKey}}')
          .openapi({
            param: {
              description: 'VTEX API AppKey',
              in: 'header',
              name: 'X-VTEX-API-AppKey',
              required: true,
              schema: { default: '{{X-VTEX-API-AppKey}}', type: 'string' },
              style: 'simple',
            },
          }),
        'X-VTEX-API-AppToken': z
          .string()
          .default('{{X-VTEX-API-AppToken}}')
          .openapi({
            param: {
              description: 'VTEX API AppToken',
              in: 'header',
              name: 'X-VTEX-API-AppToken',
              required: true,
              schema: { default: '{{X-VTEX-API-AppToken}}', type: 'string' },
              style: 'simple',
            },
          }),
      }),
      params: z.object({
        giftCardProviderID: z
          .string()
          .default('insert identifier here')
          .openapi({
            param: {
              description: "Gift Card provider's ID.",
              in: 'path',
              name: 'giftCardProviderID',
              required: true,
              schema: { default: 'insert identifier here', type: 'string' },
              style: 'simple',
            },
          }),
        giftCardID: z
          .string()
          .default('6')
          .openapi({
            param: {
              description: 'Gift Card ID.',
              in: 'path',
              name: 'giftCardID',
              required: true,
              schema: { default: '6', type: 'string' },
              style: 'simple',
            },
          }),
        tId: z
          .string()
          .default('b47690')
          .openapi({
            param: {
              description:
                'Transaction ID generated by the provider. It is different from the `transactionID` generated by VTEX.',
              in: 'path',
              name: 'tId',
              required: true,
              schema: { default: 'b47690', type: 'string' },
              style: 'simple',
            },
          }),
      }),
    },
    responses: {
      200: {
        description: '',
        content: { 'text/plain': { schema: z.object({}) } },
        headers: z.object({}),
      },
    },
  })

export const postGiftcardprovidersGiftCardProviderIDGiftcardsGiftCardIDTransactionsTIdSettlementsRoute =
  createRoute({
    method: 'post',
    path: '/giftcardproviders/{giftCardProviderID}/giftcards/{giftCardID}/transactions/{tId}/settlements',
    tags: ['Transaction'],
    summary: 'Create GiftCard Settlement Transaction',
    description: 'Creates a settlement transaction to a giftcard.',
    operationId: 'CreateGiftCardSettlementTransaction',
    request: {
      headers: z.object({
        Accept: z
          .string()
          .default('application/json')
          .openapi({
            param: {
              description:
                'Media type(s) that is/are acceptable for the response. Default value for payment provider protocol is application/json',
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
              description:
                'The Media type of the body of the request. Default value for payment provider protocol is application/json',
              in: 'header',
              name: 'Content-Type',
              required: true,
              schema: { default: 'application/json', type: 'string' },
              style: 'simple',
            },
          }),
      }),
      params: z.object({
        giftCardProviderID: z
          .string()
          .default('insert identifier here')
          .openapi({
            param: {
              description: "Gift Card provider's ID.",
              in: 'path',
              name: 'giftCardProviderID',
              required: true,
              schema: { default: 'insert identifier here', type: 'string' },
              style: 'simple',
            },
          }),
        giftCardID: z
          .string()
          .default('6')
          .openapi({
            param: {
              description: 'Gift Card ID.',
              in: 'path',
              name: 'giftCardID',
              required: true,
              schema: { default: '6', type: 'string' },
              style: 'simple',
            },
          }),
        tId: z
          .string()
          .default('b47690')
          .openapi({
            param: {
              description:
                'Transaction ID generated by the provider. It is different from the `transactionID` generated by VTEX.',
              in: 'path',
              name: 'tId',
              required: true,
              schema: { default: 'b47690', type: 'string' },
              style: 'simple',
            },
          }),
      }),
      body: {
        description: '',
        content: {
          'application/json;charset=utf-8': {
            schema: CreateGiftCardSettlementTransactionRequestSchema,
            example: {
              cart: {
                discounts: -20,
                grandTotal: 182,
                items: [
                  {
                    id: '2000002',
                    name: null,
                    price: 200,
                    productId: '2000000',
                    quantity: 1,
                    refId: 'MEV41',
                  },
                ],
                itemsTotal: 200,
                redemptionCode: 'FASD-ASDS-ASDA-ASDA',
                relationName: 'loyalty-program',
                shipping: 2,
                taxes: 0,
              },
              client: {
                document: '42151783120',
                email: 'convidadovtex@gmail.com',
                id: '3b1abc17-988e-4a14-8b7f-31fc6a5b955c',
              },
            },
          },
        },
        required: true,
      },
    },
    responses: {
      200: {
        description: '',
        content: { 'text/plain': { schema: z.object({}) } },
        headers: z.object({}),
      },
    },
  })

export const getGiftcardprovidersGiftCardProviderIDGiftcardsGiftCardIDTransactionsTransactionIDRoute =
  createRoute({
    method: 'get',
    path: '/giftcardproviders/{giftCardProviderID}/giftcards/{giftCardID}/transactions/{transactionID}',
    tags: ['Transaction'],
    summary: 'Get GiftCard Transaction by ID',
    description: 'Returns a specific transaction from a giftcard.',
    operationId: 'GetGiftCardTransactionbyID',
    request: {
      headers: z.object({
        Accept: z
          .string()
          .default('application/json')
          .openapi({
            param: {
              description:
                'Media type(s) that is/are acceptable for the response. Default value for payment provider protocol is application/json.',
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
              description:
                'The Media type of the body of the request. Default value for payment provider protocol is application/json.',
              in: 'header',
              name: 'Content-Type',
              required: true,
              schema: { default: 'application/json', type: 'string' },
              style: 'simple',
            },
          }),
        'X-VTEX-API-AppKey': z
          .string()
          .default('{{X-VTEX-API-AppKey}}')
          .openapi({
            param: {
              description: 'VTEX API AppKey',
              in: 'header',
              name: 'X-VTEX-API-AppKey',
              required: true,
              schema: { default: '{{X-VTEX-API-AppKey}}', type: 'string' },
              style: 'simple',
            },
          }),
        'X-VTEX-API-AppToken': z
          .string()
          .default('{{X-VTEX-API-AppToken}}')
          .openapi({
            param: {
              description: 'VTEX API AppToken',
              in: 'header',
              name: 'X-VTEX-API-AppToken',
              required: true,
              schema: { default: '{{X-VTEX-API-AppToken}}', type: 'string' },
              style: 'simple',
            },
          }),
      }),
      params: z.object({
        giftCardProviderID: z
          .string()
          .default('insert identifier here')
          .openapi({
            param: {
              description: "Gift Card provider's ID.",
              in: 'path',
              name: 'giftCardProviderID',
              required: true,
              schema: { default: 'insert identifier here', type: 'string' },
              style: 'simple',
            },
          }),
        giftCardID: z
          .string()
          .default('6')
          .openapi({
            param: {
              description: 'Gift Card ID.',
              in: 'path',
              name: 'giftCardID',
              required: true,
              schema: { default: '6', type: 'string' },
              style: 'simple',
            },
          }),
        transactionID: z
          .string()
          .default('b47690')
          .openapi({
            param: {
              description: 'Gift Card transaction ID.',
              in: 'path',
              name: 'transactionID',
              required: true,
              schema: { default: 'b47690', type: 'string' },
              style: 'simple',
            },
          }),
      }),
    },
    responses: {
      200: {
        description: '',
        content: { 'text/plain': { schema: z.object({}) } },
        headers: z.object({}),
      },
    },
  })

export const getGiftcardprovidersGiftCardProviderIDGiftcardsGiftCardIDTransactionsTransactionIDAuthorizationRoute =
  createRoute({
    method: 'get',
    path: '/giftcardproviders/{giftCardProviderID}/giftcards/{giftCardID}/transactions/{transactionID}/authorization',
    tags: ['Transaction'],
    summary: 'Get GiftCard Authorization Transaction',
    description: 'Returns the transaction authorization info.',
    operationId: 'GetGiftCardAuthorizationTransaction',
    request: {
      headers: z.object({
        Accept: z
          .string()
          .default('application/json')
          .openapi({
            param: {
              description:
                'Media type(s) that is/are acceptable for the response. Default value for payment provider protocol is application/json.',
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
              description:
                'The Media type of the body of the request. Default value for payment provider protocol is application/json.',
              in: 'header',
              name: 'Content-Type',
              required: true,
              schema: { default: 'application/json', type: 'string' },
              style: 'simple',
            },
          }),
        'X-VTEX-API-AppKey': z
          .string()
          .default('{{X-VTEX-API-AppKey}}')
          .openapi({
            param: {
              description: 'VTEX API AppKey',
              in: 'header',
              name: 'X-VTEX-API-AppKey',
              required: true,
              schema: { default: '{{X-VTEX-API-AppKey}}', type: 'string' },
              style: 'simple',
            },
          }),
        'X-VTEX-API-AppToken': z
          .string()
          .default('{{X-VTEX-API-AppToken}}')
          .openapi({
            param: {
              description: 'VTEX API AppToken',
              in: 'header',
              name: 'X-VTEX-API-AppToken',
              required: true,
              schema: { default: '{{X-VTEX-API-AppToken}}', type: 'string' },
              style: 'simple',
            },
          }),
      }),
      params: z.object({
        giftCardProviderID: z
          .string()
          .default('insert identifier here')
          .openapi({
            param: {
              description: "Gift Card provider's ID.",
              in: 'path',
              name: 'giftCardProviderID',
              required: true,
              schema: { default: 'insert identifier here', type: 'string' },
              style: 'simple',
            },
          }),
        giftCardID: z
          .string()
          .default('6')
          .openapi({
            param: {
              description: 'Gift Card ID.',
              in: 'path',
              name: 'giftCardID',
              required: true,
              schema: { default: '6', type: 'string' },
              style: 'simple',
            },
          }),
        transactionID: z
          .string()
          .default('b47690')
          .openapi({
            param: {
              description: 'Gift Card transaction ID.',
              in: 'path',
              name: 'transactionID',
              required: true,
              schema: { default: 'b47690', type: 'string' },
              style: 'simple',
            },
          }),
      }),
    },
    responses: {
      200: {
        description: '',
        content: { 'text/plain': { schema: z.object({}) } },
        headers: z.object({}),
      },
    },
  })

export const getGiftcardprovidersGiftCardProviderIdRoute = createRoute({
  method: 'get',
  path: '/giftcardproviders/{giftCardProviderId}',
  tags: ['Provider'],
  summary: 'Get GiftCard Provider by ID',
  description: 'Returns a giftcard provider from a store.',
  operationId: 'GetGiftCardProviderbyID',
  request: {
    headers: z.object({
      Accept: z
        .string()
        .default('application/json')
        .openapi({
          param: {
            description:
              'Media type(s) that is/are acceptable for the response. Default value for payment provider protocol is application/json.',
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
            description:
              'The Media type of the body of the request. Default value for payment provider protocol is application/json.',
            in: 'header',
            name: 'Content-Type',
            required: true,
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
      'X-VTEX-API-AppKey': z
        .string()
        .default('{{X-VTEX-API-AppKey}}')
        .openapi({
          param: {
            description: 'VTEX API AppKey',
            in: 'header',
            name: 'X-VTEX-API-AppKey',
            required: true,
            schema: { default: '{{X-VTEX-API-AppKey}}', type: 'string' },
            style: 'simple',
          },
        }),
      'X-VTEX-API-AppToken': z
        .string()
        .default('{{X-VTEX-API-AppToken}}')
        .openapi({
          param: {
            description: 'VTEX API AppToken',
            in: 'header',
            name: 'X-VTEX-API-AppToken',
            required: true,
            schema: { default: '{{X-VTEX-API-AppToken}}', type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      giftCardProviderId: z
        .string()
        .default('insert identifier here')
        .openapi({
          param: {
            description: "Gift Card provider's ID.",
            in: 'path',
            name: 'giftCardProviderId',
            required: true,
            schema: { default: 'insert identifier here', type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'text/plain': { schema: z.object({}) } },
      headers: z.object({}),
    },
    404: { description: 'O provider não existe.\n' },
  },
})
