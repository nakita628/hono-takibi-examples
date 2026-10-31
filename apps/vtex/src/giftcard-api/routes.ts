import { createRoute, z } from '@hono/zod-openapi'

const CancelGiftCardTransactionRequestSchema = z
  .object({ requestId: z.string(), value: z.number() })
  .default({ requestId: '6360f', value: 13 })
  .openapi({ required: ['value', 'requestId'], title: 'CancelGiftCardTransactionRequest' })
  .openapi('CancelGiftCardTransactionRequest')

const ItemSchema = z
  .object({
    id: z.string().default('5'),
    name: z.string().default('Insert name here'),
    price: z.int32().default(50),
    productId: z.string().default('5'),
    quantity: z.int32().default(1),
    refId: z.string().default('12'),
  })
  .openapi({
    example: {
      id: '1',
      name: 'Product Name',
      price: 100,
      productId: '1',
      quantity: 1,
      refId: '12',
    },
    required: ['productId', 'id', 'refId', 'name', 'price', 'quantity'],
    title: 'Item',
  })
  .openapi('Item')

const CartSchema = z
  .object({
    discounts: z.int32().default(0),
    grandTotal: z.number().default(122),
    items: z.array(ItemSchema).openapi({ description: '' }),
    itemsTotal: z.int32().default(100),
    redemptionCode: z.string().nullable().default('example code'),
    relationName: z.string().nullable().default('insert name here'),
    shipping: z.int32().default(0),
    taxes: z.int32().default(12),
  })
  .openapi({
    example: {
      discounts: 0,
      grandTotal: 123.1,
      itemsTotal: 100,
      redemptionCode: null,
      relationName: null,
      shipping: 0,
      taxes: 12,
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

const PriceTagSchema = z
  .object({ name: z.string(), value: z.int32() })
  .openapi({
    example: {
      name: 'discount@price-discount_store_183#4911bf6f-22a2-4af1-a365-cce895c3df2c',
      value: 0,
    },
    required: ['name', 'value'],
    title: 'PriceTag',
  })
  .openapi('PriceTag')

const Item2Schema = z
  .object({
    discount: z.number(),
    id: z.string(),
    name: z.string(),
    price: z.number(),
    priceTags: z.array(PriceTagSchema).openapi({ description: '' }),
    productId: z.string(),
    quantity: z.int32(),
    refId: z.string(),
    shippingDiscount: z.int32(),
    value: z.number(),
  })
  .openapi({
    example: {
      discount: -7.5,
      id: '2001023',
      name: 'Vaporizador Des. ColC4nia Branco',
      price: 14.99,
      priceTags: [
        {
          name: 'discount@price-discount_store_183#4911bf6f-22a2-4af1-a365-cce895c3df2c',
          value: 0,
        },
      ],
      productId: '2000492',
      quantity: 1,
      refId: '35994',
      shippingDiscount: 0,
      value: 14.99,
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
    title: 'Item2',
  })
  .openapi('Item2')

const Cart1Schema = z
  .object({
    discounts: z.number(),
    grandTotal: z.int32(),
    items: z.array(Item2Schema).openapi({ description: '' }),
    itemsTotal: z.number(),
    shipping: z.number(),
    taxes: z.int32(),
  })
  .openapi({
    example: { discounts: -7.5, grandTotal: 0, itemsTotal: 14.99, shipping: 7.27, taxes: 0 },
    required: ['items', 'grandTotal', 'discounts', 'shipping', 'taxes', 'itemsTotal'],
    title: 'Cart1',
  })
  .openapi('Cart1')

const ClientSchema = z
  .object({
    document: z.string().default('99999999999'),
    email: z.string().default('email@email.com.br'),
    id: z.string().default('019a0c'),
  })
  .openapi({
    example: {
      document: '21301923110',
      email: 'email@damoain.com',
      id: '019a0cc1-409a-4c16-859b-eefdb81f825e',
    },
    required: ['id', 'email', 'document'],
    title: 'Client',
  })
  .openapi('Client')

const ClientProfileSchema = z
  .object({
    birthDate: z.string(),
    document: z.string(),
    email: z.string(),
    firstName: z.string(),
    isCorporate: z.boolean(),
    lastName: z.string(),
    phone: z.string(),
  })
  .openapi({
    example: {
      birthDate: '0001-01-01T00:00:00',
      document: '02906792063',
      email: 'miguel.scott96@yahoo.com.br',
      firstName: 'miguel',
      isCorporate: false,
      lastName: 'scott',
      phone: '+551111111111',
    },
    required: ['email', 'firstName', 'lastName', 'document', 'phone', 'birthDate', 'isCorporate'],
    title: 'ClientProfile',
  })
  .openapi('ClientProfile')

const CreateGiftCardRequestSchema = z
  .object({
    caption: z
      .string()
      .openapi({ description: 'The caption of the Giftcard.', example: 'rewards program' }),
    expiringDate: z
      .string()
      .openapi({
        description: 'It must be in the format `YYYY-MM-DDThh:mm:ss.fff`.',
        example: '2020-09-01T13:15:30Z',
      }),
    multipleCredits: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'The Giftcard balance can be changed.', example: false }),
    multipleRedemptions: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'The Giftcard can be used to make new purchases until its value is completely used.',
        example: false,
      }),
    profileId: z.string().openapi({ description: "The client's ID.", example: '1234' }),
    relationName: z
      .string()
      .openapi({
        description: 'Represents the relationship between the client and the store.',
        example: 'insert example here',
      }),
    restrictedToOwner: z
      .boolean()
      .exactOptional()
      .openapi({
        description: "The Giftcard can only be used for a specified client's ID.",
        example: false,
      }),
  })
  .openapi({
    example: {
      caption: 'Programa Vtex Fidelidade',
      expiringDate: '2016-01-01T00:00:00',
      multipleCredits: true,
      multipleRedemptions: false,
      profileId: '92de2449-0e02-4ca9-a4aa-a09cc9d8f7ff',
      redemptionCode: 'BAHD-ASDB-ADQW-ASDQ',
      relationName: 'loyalty-program',
      restrictedToOwner: true,
    },
    required: ['relationName', 'expiringDate', 'caption', 'profileId'],
    title: 'CreateGiftCardRequest',
  })
  .openapi('CreateGiftCardRequest')

const ShippingSchema = z
  .object({
    city: z.string(),
    complement: z.string().nullable(),
    country: z.string(),
    neighborhood: z.string(),
    number: z.string(),
    postalCode: z.string(),
    receiverName: z.string(),
    reference: z.string().nullable(),
    state: z.string(),
    street: z.string(),
  })
  .openapi({
    example: {
      city: 'Rio de Janeiro',
      complement: null,
      country: 'BRA',
      neighborhood: 'Botafogo',
      number: '111',
      postalCode: '22250040',
      receiverName: 'miguel scott',
      reference: null,
      state: 'RJ',
      street: 'Praia de Botafogo',
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
    cart: Cart1Schema.exactOptional(),
    clientProfile: ClientProfileSchema.exactOptional(),
    orderId: z.string().default('v5006').exactOptional(),
    sequence: z.int32().default(5006128).exactOptional(),
    shipping: ShippingSchema.exactOptional(),
  })
  .default({
    cart: {
      discounts: 2.5,
      grandTotal: 0,
      items: [
        {
          discount: 2.5,
          id: '2001023',
          name: 'insert name here',
          price: 14.99,
          priceTags: [{ name: 'insert name here', value: 0 }],
          productId: '2000492',
          quantity: 1,
          refId: '35994',
          shippingDiscount: 0,
          value: 14.99,
        },
      ],
      itemsTotal: 14.99,
      shipping: 7.27,
      taxes: 0,
    },
    clientProfile: {
      birthDate: '0001-01-01T00:00:00',
      document: '02906792063',
      email: 'email@email.com.br',
      firstName: 'example',
      isCorporate: false,
      lastName: 'example',
      phone: '+551111111111',
    },
    orderId: 'v500',
    sequence: 5006128,
    shipping: {
      city: 'Rio de Janeiro',
      complement: null,
      country: 'BRA',
      neighborhood: 'example',
      number: '11',
      postalCode: '22250040',
      receiverName: 'example',
      reference: null,
      state: 'RJ',
      street: 'Praia de Botafogo',
    },
  })
  .openapi({ title: 'OrderInfo', required: [] })
  .openapi('OrderInfo')

const CreateGiftCardTransactionRequestSchema = z
  .object({
    description: z.string().default('insert test here'),
    operation: z.string().default('Debit'),
    orderInfo: OrderInfoSchema.exactOptional(),
    redemptionCode: z.string().default('example code'),
    redemptionToken: z.string().default('example code'),
    requestId: z.string().default('B56CB'),
    value: z.number().default(800),
  })
  .openapi({
    example: {
      description: 'GiftCardHub',
      operation: 'Debit',
      orderInfo: {
        cart: { discounts: -7.5, grandTotal: 0, itemsTotal: 14.99, shipping: 7.27, taxes: 0 },
        clientProfile: {
          birthDate: '0001-01-01T00:00:00',
          document: '02906792063',
          email: 'miguel.scott96@yahoo.com.br',
          firstName: 'miguel',
          isCorporate: false,
          lastName: 'scott',
          phone: '+551111111111',
        },
        orderId: 'v5006128str',
        sequence: 5006128,
        shipping: {
          city: 'Rio de Janeiro',
          complement: null,
          country: 'BRA',
          neighborhood: 'Botafogo',
          number: '111',
          postalCode: '22250040',
          receiverName: 'miguel scott',
          reference: null,
          state: 'RJ',
          street: 'Praia de Botafogo',
        },
      },
      redemptionCode: '',
      redemptionToken: 'b2dac6f2-f365-48cd-82a9-0b376a55557a',
      requestId: 'B56CBE231DEE4E1A859183C1030CE926',
      value: 3,
    },
    required: [
      'operation',
      'value',
      'description',
      'redemptionToken',
      'redemptionCode',
      'requestId',
    ],
    title: 'CreateGiftCardTransactionRequest',
  })
  .openapi('CreateGiftCardTransactionRequest')

const GetGiftCardusingJSONRequestSchema = z
  .object({ cart: CartSchema, client: ClientSchema })
  .openapi({
    example: {
      cart: {
        discounts: 0,
        grandTotal: 123.1,
        itemsTotal: 100,
        redemptionCode: null,
        relationName: null,
        shipping: 0,
        taxes: 12,
      },
      client: {
        document: '21301923110',
        email: 'email@damoain.com',
        id: '019a0cc1-409a-4c16-859b-eefdb81f825e',
      },
    },
    required: ['cart', 'client'],
    title: 'GetGiftCardusingJSONRequest',
  })
  .openapi('GetGiftCardusingJSONRequest')

const SelfSchema = z
  .object({ href: z.string() })
  .openapi({ example: { href: 'cards/589' }, required: ['href'], title: 'Self' })
  .openapi('Self')

const Item1Schema = z
  .object({ _self: SelfSchema, id: z.string() })
  .openapi({
    example: { _self: { href: 'cards/589' }, id: '589' },
    required: ['id', '_self'],
    title: 'Item1',
  })
  .openapi('Item1')

const PagingSchema = z
  .object({ page: z.int32(), pages: z.int32(), perPage: z.int32(), total: z.int32() })
  .openapi({
    example: { page: 0, pages: 1, perPage: 10, total: 4 },
    required: ['page', 'perPage', 'total', 'pages'],
    title: 'Paging',
  })
  .openapi('Paging')

const SettleGiftCardTransactionRequestSchema = z
  .object({ requestId: z.string(), value: z.number() })
  .default({ requestId: '6360f', value: 17.4 })
  .openapi({ required: ['value', 'requestId'], title: 'SettleGiftCardTransactionRequest' })
  .openapi('SettleGiftCardTransactionRequest')

const TransactionsSchema = z
  .object({ href: z.string() })
  .openapi({
    example: { href: 'cards/954/transactions' },
    required: ['href'],
    title: 'Transactions',
  })
  .openapi('Transactions')

const ResponseSchema = z
  .object({
    balance: z.int32(),
    caption: z.string(),
    emissionDate: z.string(),
    expiringDate: z.string(),
    id: z.string().default('2'),
    redemptionCode: z.string(),
    redemptionToken: z.string(),
    relationName: z.string(),
    transactions: TransactionsSchema,
  })
  .openapi({
    example: {
      balance: 0,
      caption: 'Programa Vtex Fidelidade',
      emissionDate: '2014-04-24T20:22:58.163',
      expiringDate: '2016-01-01T00:00:00',
      id: '954',
      redemptionCode: '***********ASDQ',
      redemptionToken: '32ScL57220Vapb8pc50HJ3mWH1cl1L8x',
      relationName: 'cardName',
      transactions: { href: 'cards/954/transactions' },
    },
    required: [
      'id',
      'redemptionToken',
      'redemptionCode',
      'balance',
      'relationName',
      'emissionDate',
      'expiringDate',
      'caption',
      'transactions',
    ],
    title: 'response',
  })
  .openapi('Response')

const Response2Schema = z
  .object({ items: z.array(Item1Schema).openapi({ description: '' }), paging: PagingSchema })
  .openapi({
    example: { paging: { page: 0, pages: 1, perPage: 10, total: 4 } },
    required: ['items', 'paging'],
    title: 'response2',
  })
  .openapi('Response2')

const Response3Schema = z
  .object({ _self: SelfSchema, id: z.string() })
  .openapi({
    example: { _self: { href: 'cards/890/transactions/268' }, id: '268' },
    required: ['id', '_self'],
    title: 'response3',
  })
  .openapi('Response3')

const Response5Schema = z
  .object({
    date: z.string(),
    description: z.string(),
    redemptionMode: z.string(),
    value: z.number(),
  })
  .openapi({
    example: {
      date: '2016-01-01T00:00:00',
      description: 'CrC)dito relacionado a compra 10281230-01',
      redemptionMode: 'redemptionToken',
      value: 123.4,
    },
    required: ['value', 'description', 'date', 'redemptionMode'],
    title: 'response5',
  })
  .openapi('Response5')

const Response6Schema = z
  .object({ date: z.string(), oid: z.string(), value: z.number() })
  .openapi({
    example: { date: '2016-01-01T00:00:00', oid: '7cf8d7970e1c81d05620e46cceb6819f', value: 123.4 },
    required: ['oid', 'value', 'date'],
    title: 'response6',
  })
  .openapi('Response6')

const Response7Schema = z
  .object({ date: z.string(), id: z.string(), value: z.number() })
  .openapi({
    example: { date: '2016-04-06T00:00:00', id: '239d35b430fc75379db966c1d3670c6f', value: 13.4 },
    required: ['id', 'value', 'date'],
    title: 'response7',
  })
  .openapi('Response7')

const AppKeySecurityScheme = { in: 'header', name: 'X-VTEX-API-AppKey', type: 'apiKey' }

const AppTokenSecurityScheme = { in: 'header', name: 'X-VTEX-API-AppToken', type: 'apiKey' }

export const postGiftcardsRoute = createRoute({
  method: 'post',
  path: '/giftcards',
  tags: ['Gift Card'],
  summary: 'Create GiftCard',
  description: 'Creates a GiftCard for a specific user',
  operationId: 'CreateGiftCard',
  request: {
    headers: z.object({
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
      'X-VTEX-API-AppKey': z
        .string()
        .default('{{X-VTEX-API-AppKey}}')
        .openapi({
          param: {
            description: 'The AppKey configured by the merchant',
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
            description: 'The AppToken configured by the merchant',
            in: 'header',
            name: 'X-VTEX-API-AppToken',
            required: true,
            schema: { default: '{{X-VTEX-API-AppToken}}', type: 'string' },
            style: 'simple',
          },
        }),
    }),
    body: {
      description: '',
      content: { 'application/vnd.vtex.giftcard.v1+json': { schema: CreateGiftCardRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: ResponseSchema,
          example: {
            balance: 0,
            caption: 'Programa Vtex Fidelidade',
            emissionDate: '2014-04-24T20:22:58.163',
            expiringDate: '2016-01-01T00:00:00',
            id: '954',
            redemptionCode: '***********ASDQ',
            redemptionToken: '32ScL57220Vapb8pc50HJ3mWH1cl1L8x',
            relationName: 'cardName',
            transactions: { href: 'cards/954/transactions' },
          },
        },
      },
      headers: z.object({}),
    },
  },
})

export const postGiftcardsSearchRoute = createRoute({
  method: 'post',
  path: '/giftcards/_search',
  tags: ['Gift Card'],
  summary: 'Get GiftCard using JSON',
  description: 'Returns the giftcards based on the cart data.',
  operationId: 'GetGiftCardusingJSON',
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
      'REST-Range': z
        .string()
        .default('giftcard=0-49')
        .exactOptional()
        .openapi({
          param: {
            description:
              'PaginationB control.B ThisB queryB variableB mustB followB theB formatB _resources={from}-{to}_.',
            in: 'header',
            name: 'REST-Range',
            required: false,
            schema: { default: 'giftcard=0-49', type: 'string' },
            style: 'simple',
          },
        }),
    }),
    body: {
      description: '',
      content: {
        'application/json': {
          schema: GetGiftCardusingJSONRequestSchema,
          example: {
            cart: {
              discounts: 0,
              grandTotal: 123.1,
              items: [
                {
                  id: '1',
                  name: 'Product Name',
                  price: 100,
                  productId: '1',
                  quantity: 1,
                  refId: '12',
                },
              ],
              itemsTotal: 100,
              redemptionCode: null,
              relationName: null,
              shipping: 0,
              taxes: 12,
            },
            client: {
              document: '21301923110',
              email: 'email@damoain.com',
              id: '019a0cc1-409a-4c16-859b-eefdb81f825e',
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
      content: {
        'application/json': {
          schema: Response2Schema,
          example: {
            items: [
              { _self: { href: 'cards/589' }, id: '589' },
              { _self: { href: 'cards/590' }, id: '590' },
              { _self: { href: 'cards/591' }, id: '591' },
              { _self: { href: 'cards/592' }, id: '592' },
            ],
            paging: { page: 0, pages: 1, perPage: 10, total: 4 },
          },
        },
      },
      headers: z.object({}),
    },
  },
})

export const getGiftcardsGiftCardIDRoute = createRoute({
  method: 'get',
  path: '/giftcards/{giftCardID}',
  tags: ['Gift Card'],
  summary: 'Get GiftCard by ID',
  description: 'Returns associated data for a specified giftcardId.',
  operationId: 'GetGiftCardbyID',
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
      giftCardID: z
        .string()
        .default('2')
        .openapi({
          param: {
            description: '',
            in: 'path',
            name: 'giftCardID',
            required: true,
            schema: { default: '2', type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: ResponseSchema,
          example: {
            balance: 0,
            caption: 'Programa Vtex Fidelidade',
            emissionDate: '2014-04-24T20:22:58.163',
            expiringDate: '2016-01-01T00:00:00',
            id: '954',
            redemptionCode: '***********ASDQ',
            redemptionToken: '32ScL57220Vapb8pc50HJ3mWH1cl1L8x',
            relationName: 'cardName',
            transactions: { href: 'cards/954/transactions' },
          },
        },
      },
      headers: z.object({}),
    },
  },
})

export const getGiftcardsGiftCardIDTransactionsRoute = createRoute({
  method: 'get',
  path: '/giftcards/{giftCardID}/transactions',
  tags: ['Transaction'],
  summary: 'Get GiftCard Transactions',
  description: 'Returns all transaction of a giftcard.',
  operationId: 'GetGiftCardTransactions',
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
      giftCardID: z
        .string()
        .default('2')
        .openapi({
          param: {
            description: '',
            in: 'path',
            name: 'giftCardID',
            required: true,
            schema: { default: '2', type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z.array(Response3Schema),
          example: [
            { _self: { href: 'cards/890/transactions/268' }, id: '268' },
            { _self: { href: 'cards/890/transactions/269' }, id: '269' },
            { _self: { href: 'cards/890/transactions/270' }, id: '270' },
          ],
        },
      },
      headers: z.object({}),
    },
  },
})

export const postGiftcardsGiftCardIDTransactionsRoute = createRoute({
  method: 'post',
  path: '/giftcards/{giftCardID}/transactions',
  tags: ['Transaction'],
  summary: 'Create GiftCard Transaction',
  description: 'Register a new giftcard transaction and authorize the item reservation.',
  operationId: 'CreateGiftCardTransaction',
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
      giftCardID: z
        .string()
        .default('7')
        .openapi({
          param: {
            description: '',
            in: 'path',
            name: 'giftCardID',
            required: true,
            schema: { default: '7', type: 'string' },
            style: 'simple',
          },
        }),
    }),
    body: {
      description: '',
      content: {
        'application/json': {
          schema: CreateGiftCardTransactionRequestSchema,
          example: {
            description: 'GiftCardHub',
            operation: 'Debit',
            orderInfo: {
              cart: {
                discounts: -7.5,
                grandTotal: 0,
                items: [
                  {
                    discount: -7.5,
                    id: '2001023',
                    name: 'Vaporizador Des. ColC4nia Branco',
                    price: 14.99,
                    priceTags: [
                      {
                        name: 'discount@price-discount_store_183#4911bf6f-22a2-4af1-a365-cce895c3df2c',
                        value: 0,
                      },
                    ],
                    productId: '2000492',
                    quantity: 1,
                    refId: '35994',
                    shippingDiscount: 0,
                    value: 14.99,
                  },
                ],
                itemsTotal: 14.99,
                shipping: 7.27,
                taxes: 0,
              },
              clientProfile: {
                birthDate: '0001-01-01T00:00:00',
                document: '02906792063',
                email: 'miguel.scott96@yahoo.com.br',
                firstName: 'miguel',
                isCorporate: false,
                lastName: 'scott',
                phone: '+551111111111',
                profileId: '92de2449-0e02-4ca9-a4aa-a09cc9d8f7ff',
              },
              orderId: 'v5006128str',
              sequence: 5006128,
              shipping: {
                city: 'Rio de Janeiro',
                complement: null,
                country: 'BRA',
                neighborhood: 'Botafogo',
                number: '111',
                postalCode: '22250040',
                receiverName: 'miguel scott',
                reference: null,
                state: 'RJ',
                street: 'Praia de Botafogo',
              },
            },
            redemptionCode: '',
            redemptionToken: 'b2dac6f2-f365-48cd-82a9-0b376a55557a',
            requestId: 'B56CBE231DEE4E1A859183C1030CE926',
            value: 3,
          },
        },
      },
    },
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: Response3Schema,
          example: {
            _self: { href: 'providers/VtexGiftCardProvider/cards/890/transactions/2451' },
            id: '2541',
          },
        },
      },
      headers: z.object({}),
    },
  },
})

export const getGiftcardsGiftCardIDTransactionsTransactionIDRoute = createRoute({
  method: 'get',
  path: '/giftcards/{giftCardID}/transactions/{transactionID}',
  tags: ['Transaction'],
  summary: 'Get GiftCard Transaction by ID',
  operationId: 'GetGiftCardTransactionbyID',
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
      giftCardID: z
        .string()
        .default('6')
        .openapi({
          param: {
            description: '',
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
            description: '',
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
      content: {
        'application/json': {
          schema: Response5Schema,
          example: {
            date: '2016-01-01T00:00:00',
            description: 'CrC)dito relacionado a compra 10281230-01',
            redemptionMode: 'redemptionToken',
            value: 123.4,
          },
        },
      },
      headers: z.object({}),
    },
  },
})

export const getGiftcardsGiftCardIDTransactionsTransactionIDAuthorizationRoute = createRoute({
  method: 'get',
  path: '/giftcards/{giftCardID}/transactions/{transactionID}/authorization',
  tags: ['Transaction'],
  summary: 'Get Transaction Authorizations',
  description: 'Returns the giftcard transaction authorizations.',
  operationId: 'GetTransactionAuthorizations',
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
      giftCardID: z
        .string()
        .default('6')
        .openapi({
          param: {
            description: '',
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
            description: '',
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
      content: {
        'application/json': {
          schema: Response6Schema,
          example: {
            date: '2016-01-01T00:00:00',
            oid: '7cf8d7970e1c81d05620e46cceb6819f',
            value: 123.4,
          },
        },
      },
      headers: z.object({}),
    },
  },
})

export const getGiftcardsGiftCardIDTransactionsTransactionIDCancellationsRoute = createRoute({
  method: 'get',
  path: '/giftcards/{giftCardID}/transactions/{transactionID}/cancellations',
  tags: ['Transaction'],
  summary: 'Get Transaction Cancellations',
  description: 'Returns the giftcard transaction cancellations.',
  operationId: 'GetTransactionCancellations',
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
      giftCardID: z
        .string()
        .default('6')
        .openapi({
          param: {
            description: '',
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
            description: '',
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
      content: {
        'application/json': {
          schema: z.array(Response7Schema),
          example: [
            { date: '2016-04-06T00:00:00', id: '239d35b430fc75379db966c1d3670c6f', value: 13.4 },
            { date: '2016-05-06T00:00:00', id: '49f0bad299687c62334182178bfd75d8', value: 10.4 },
          ],
        },
      },
      headers: z.object({}),
    },
  },
})

export const postGiftcardsGiftCardIDTransactionsTransactionIDCancellationsRoute = createRoute({
  method: 'post',
  path: '/giftcards/{giftCardID}/transactions/{transactionID}/cancellations',
  tags: ['Transaction'],
  summary: 'Cancel GiftCard Transaction',
  description:
    'Creates a cancellation in the transaction. Cancel a item reservation or create a refund.',
  operationId: 'CancelGiftCardTransaction',
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
      giftCardID: z
        .string()
        .default('6')
        .openapi({
          param: {
            description: '',
            in: 'path',
            name: 'giftCardID',
            required: true,
            schema: { default: '6', type: 'string' },
            style: 'simple',
          },
        }),
      transactionID: z
        .string()
        .default('b476900c')
        .openapi({
          param: {
            description: '',
            in: 'path',
            name: 'transactionID',
            required: true,
            schema: { default: 'b476900c', type: 'string' },
            style: 'simple',
          },
        }),
    }),
    body: {
      description: '',
      content: {
        'application/json': {
          schema: CancelGiftCardTransactionRequestSchema,
          example: { requestId: '6360f', value: 13 },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: Response6Schema,
          example: {
            date: '2016-04-06T00:00:00',
            oid: '239d35b430fc75379db966c1d3670c6f',
            value: 13.4,
          },
        },
      },
      headers: z.object({}),
    },
  },
})

export const getGiftcardsGiftCardIDTransactionsTransactionIDSettlementsRoute = createRoute({
  method: 'get',
  path: '/giftcards/{giftCardID}/transactions/{transactionID}/settlements',
  tags: ['Transaction'],
  summary: 'Get Transaction Settlements',
  description: 'Returns the giftcard transaction settlements.',
  operationId: 'GetTransactionSettlements',
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
      giftCardID: z
        .string()
        .default('7')
        .openapi({
          param: {
            description: '',
            in: 'path',
            name: 'giftCardID',
            required: true,
            schema: { default: '7', type: 'string' },
            style: 'simple',
          },
        }),
      transactionID: z
        .string()
        .default('b47690')
        .openapi({
          param: {
            description: '',
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
      content: {
        'application/json': {
          schema: z.array(Response6Schema),
          example: [
            { date: '2016-04-06T00:00:00', oid: 'b8e0c606b2fe543e5b0e639575cd9723', value: 17.4 },
            { date: '2016-05-06T00:00:00', oid: '6cb6cd63c16e219b1eee61f2', value: 10.4 },
          ],
        },
      },
      headers: z.object({}),
    },
  },
})

export const postGiftcardsGiftCardIDTransactionsTransactionIDSettlementsRoute = createRoute({
  method: 'post',
  path: '/giftcards/{giftCardID}/transactions/{transactionID}/settlements',
  tags: ['Transaction'],
  summary: 'Settle GiftCard Transaction',
  description: 'Creates a giftcard transaction settlement.',
  operationId: 'SettleGiftCardTransaction',
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
      giftCardID: z
        .string()
        .default('6')
        .openapi({
          param: {
            description: '',
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
            description: '',
            in: 'path',
            name: 'transactionID',
            required: true,
            schema: { default: 'b47690', type: 'string' },
            style: 'simple',
          },
        }),
    }),
    body: {
      description: '',
      content: {
        'application/json': {
          schema: SettleGiftCardTransactionRequestSchema,
          example: { requestId: '6360f98eb0cf6fd5afa77e39bba8c20fe5807d8c', value: 17.4 },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: Response6Schema,
          example: {
            date: '2016-04-06T00:00:00',
            oid: 'b8e0c606b2fe543e5b0e639575cd9723',
            value: 17.4,
          },
        },
      },
      headers: z.object({}),
    },
  },
})
