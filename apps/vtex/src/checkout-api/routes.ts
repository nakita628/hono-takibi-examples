import { createRoute, z } from '@hono/zod-openapi'

const ItemSchema = z
  .object({
    id: z.string().openapi({ description: 'The SKU ID.' }),
    quantity: z
      .int32()
      .openapi({
        description: 'The quantity of items of this specific SKU in the cart to be simulated.',
      }),
    seller: z
      .string()
      .openapi({
        description:
          'The ID of the seller responsible for this SKU. This ID can be found in your VTEX Admin.',
      }),
  })
  .openapi({
    example: { id: '{{skuId}}', quantity: 1, seller: '1' },
    required: ['id', 'quantity', 'seller'],
    title: 'Item',
  })
  .openapi('Item')

const OrderFormSimulationRequestSchema = z
  .object({
    country: z.string(),
    items: z
      .array(ItemSchema)
      .openapi({
        description: 'Array containing information about the SKUs inside the cart to be simulated.',
      }),
  })
  .openapi({ example: { country: '{{countryCode-ISO-3-digits}}' }, required: ['items', 'country'] })
  .openapi('OrderFormSimulationRequest')

const PaymentConfigurationSchema = z
  .object({
    allowInstallmentsMerge: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "By default (when `false`), on a multi-seller purchase is on the run, a simple intersection with installments options configured by every seller will be available. When `true`, this option allows a more complex but flexible installment option, since it considers max installments of every seller configuration, even if those don't match. Installment values ​​may not be equal in this case.",
      }),
    requiresAuthenticationForPreAuthorizedPaymentOption: z
      .boolean()
      .openapi({
        description: 'Determines whether pre-authorized payments require authentication',
      }),
  })
  .openapi({
    description: 'Payment Configuration object',
    example: {
      allowInstallmentsMerge: false,
      requiresAuthenticationForPreAuthorizedPaymentOption: false,
    },
    required: ['requiresAuthenticationForPreAuthorizedPaymentOption'],
    title: 'PaymentConfiguration',
  })
  .openapi('PaymentConfiguration')

const PriceChangeRequestSchema = z
  .object({ price: z.int32().openapi({ description: 'The new price of the item.' }) })
  .openapi({ example: { price: 10000 }, required: ['price'] })
  .openapi('PriceChangeRequest')

const SetsinglecustomfieldvalueRequestSchema = z
  .object({
    value: z.string().openapi({ description: 'The value you want to set to the specified field.' }),
  })
  .openapi({ required: ['value'] })
  .openapi('SetsinglecustomfieldvalueRequest')

const UpdateorderFormconfigurationRequestSchema = z
  .object({
    allowManualPrice: z
      .boolean()
      .nullable()
      .openapi({ description: 'Allows the editing of SKU prices right in the cart.' }),
    allowMultipleDeliveries: z
      .boolean()
      .nullable()
      .openapi({
        description:
          'On the same purchase, allows the selection of items from multiple delivery channels.',
      }),
    apps: z
      .array(
        z
          .object({
            fields: z
              .array(z.string().openapi({ example: 'birthdayField' }))
              .exactOptional()
              .openapi({ description: 'Array of fields available to the app.' }),
            id: z
              .string()
              .exactOptional()
              .openapi({ description: 'App ID.', example: 'birthdayApp' }),
            major: z
              .int()
              .exactOptional()
              .openapi({ description: 'App major version.', example: 1 }),
          })
          .openapi({ required: [] }),
      )
      .nullable()
      .openapi({ description: 'Array of objects containing Apps configuration information.' }),
    decimalDigitsPrecision: z.int32().openapi({ description: 'Number of price digits.' }),
    maskFirstPurchaseData: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "Allows, on a first purchase, masking client's data. It could be useful when a shared cart is used and the client doesn't want to share its data.",
      }),
    maxNumberOfWhiteLabelSellers: z
      .int()
      .exactOptional()
      .openapi({
        description: 'Allows the input of a limit of white label sellers involved on the cart.',
      }),
    minimumQuantityAccumulatedForItems: z
      .int32()
      .openapi({ description: 'Minimum SKU quantity by cart.' }),
    minimumValueAccumulated: z.int().nullable().openapi({ description: 'Minimum cart value.' }),
    paymentConfiguration: PaymentConfigurationSchema,
    paymentSystemToCheckFirstInstallment: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "If you want to apply a first installment discount to a particular payment system, set this field to that payment system's ID. Learn more: [Configuring a discount for orders prepaid in full](https://help.vtex.com/en/tutorial/configurar-desconto-de-preco-a-vista--7Lfcj9Wb5dpYfA2gKkACIt).",
        example: '6',
      }),
    recaptchaValidation: z
      .string()
      .default('vtexCriteria')
      .exactOptional()
      .openapi({
        description:
          'Configures reCAPTCHA validation for the account, defining in which situations the shopper will be prompted to validate a purchase with reCAPTCHA. Learn more about [reCAPTCHA validation for VTEX stores](https://help.vtex.com/tutorial/recaptcha-no-checkout--18Te3oDd7f4qcjKu9jhNzP)\n\r\n\rPossible values are:\n\r- `"never"`: no purchases are validated with reCAPTCHA.\n\r- `"always"`: every purchase is validated with reCAPTCHA.\n\r- `"vtexCriteria"`: only some purchases are validated with reCAPTCHA in order to minimize friction and improve shopping experience. VTEX’s algorithm determines which sessions are trustworthy and which should be validated with reCAPTCHA. This is the recommended option.',
      }),
    taxConfiguration: z
      .object({
        appId: z
          .string()
          .exactOptional()
          .openapi({ description: 'Custom data ID sent to the tax system.' }),
        authorizationHeader: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({ description: 'Authorization header.' }),
        url: z.string().nullable().exactOptional().openapi({ description: 'Endpoint URL.' }),
      })
      .nullable()
      .openapi({ description: 'External tax service configuration.', required: [] }),
  })
  .openapi({
    example: {
      allowManualPrice: null,
      allowMultipleDeliveries: null,
      apps: null,
      decimalDigitsPrecision: 2,
      minimumQuantityAccumulatedForItems: 1,
      minimumValueAccumulated: null,
      paymentConfiguration: { requiresAuthenticationForPreAuthorizedPaymentOption: false },
      taxConfiguration: null,
    },
    required: [
      'paymentConfiguration',
      'taxConfiguration',
      'minimumQuantityAccumulatedForItems',
      'decimalDigitsPrecision',
      'minimumValueAccumulated',
      'apps',
      'allowMultipleDeliveries',
      'allowManualPrice',
    ],
  })
  .openapi('UpdateorderFormconfigurationRequest')

const WaitingTimeSchema = z
  .object({
    waitingTime: z
      .int()
      .openapi({
        description:
          'Number of days after order cancelation by a seller, during which another seller may be assigned to fulfill the order.',
      }),
  })
  .openapi({ required: ['waitingTime'] })
  .openapi('WaitingTime')

const AppKeySecurityScheme = { in: 'header', name: 'X-VTEX-API-AppKey', type: 'apiKey' }

const AppTokenSecurityScheme = { in: 'header', name: 'X-VTEX-API-AppToken', type: 'apiKey' }

export const postApiCheckoutPubGatewayCallbackOrderGroupRoute = createRoute({
  method: 'post',
  path: '/api/checkout/pub/gatewayCallback/{orderGroup}',
  tags: ['Order placement'],
  summary: 'Process order',
  description:
    "Order processing callback request, which is made after an order's payment is approved.\n\r\n\r> This request has to be made until five minutes after the [Place order](https://developers.vtex.com/docs/api-reference/checkout-api#put-/api/checkout/pub/orders) or [Place order from existing cart](https://developers.vtex.com/docs/api-reference/checkout-api#post-/api/checkout/pub/orderForm/-orderFormId-/transaction) request has been made, or else, the order will not be processed.",
  operationId: 'ProcessOrder',
  request: {
    params: z.object({
      orderGroup: z
        .string()
        .default('123456789')
        .openapi({
          param: {
            description:
              'Order group. It is the part of the `orderId` that comes before the `-`. For example, the `orderGroup` of the order `123456789-01` is `123456789`.',
            in: 'path',
            name: 'orderGroup',
            required: true,
            schema: { default: '123456789', type: 'string' },
            style: 'simple',
          },
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
      Cookie: z
        .string()
        .default(
          'Vtex_CHKO_Auth=0e/RpYIEZu19BuwXB4tZ7eIGu9HT8vdUAHWQDHDpxMc=; CheckoutDataAccess=0e/PoiTEZu19BuwXB4tZ7eIGu9HT8vdUAHWQDHDpxMc=',
        )
        .openapi({
          param: {
            description:
              'VTEX Chekout cookie associated with a specific order. Use the `Vtex_CHKO_Auth` and the `CheckoutDataAccess` cookies returned by the [Place order](https://developers.vtex.com/vtex-rest-api/reference/order-placement-1#placeorder) or [Place order from existing cart](https://developers.vtex.com/vtex-rest-api/reference/order-placement-1#placeorderfromexistingorderform) API requests, like a browser would.',
            in: 'header',
            name: 'Cookie',
            required: true,
            schema: {
              default:
                'Vtex_CHKO_Auth=0e/RpYIEZu19BuwXB4tZ7eIGu9HT8vdUAHWQDHDpxMc=; CheckoutDataAccess=0e/PoiTEZu19BuwXB4tZ7eIGu9HT8vdUAHWQDHDpxMc=',
              type: 'string',
            },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: {} },
    500: {
      description: 'Internal Server Error',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z
                .object({
                  code: z.string().exactOptional().openapi({ description: 'Error code.' }),
                  exception: z
                    .string()
                    .nullable()
                    .exactOptional()
                    .openapi({ description: 'Error exception.' }),
                  message: z.string().exactOptional().openapi({ description: 'Error message.' }),
                })
                .exactOptional()
                .openapi({ description: 'Information on the error.', required: [] }),
              operationId: z.string().exactOptional().openapi({ description: 'Operation ID.' }),
            })
            .openapi({ required: [] }),
          example: {
            error: {
              code: '001',
              exception: null,
              message:
                'Seu pagamento não foi autorizado. Falha ao enviar os dados de pagamento. Favor entrar em contato com o SAC ou utilizar outra forma de pagamento. *** ',
            },
            operationId: 'a231ed11-255b-4ea0-96c3-1790e1b27f7e',
          },
        },
      },
    },
  },
  security: [],
})

export const getApiCheckoutPubOrderFormRoute = createRoute({
  method: 'get',
  path: '/api/checkout/pub/orderForm',
  tags: ['Shopping cart'],
  summary: 'Get current or create a new cart',
  description:
    'You can use this request to get your current shopping cart information (`orderFormId`) or to create a new cart.\r\n\r\n**Important**: To create a new empty shopping cart you need to send this request with the query param `forceNewCart=true`.\r\n\r\nThe [orderForm](https://developers.vtex.com/docs/guides/orderform-fields) is the data structure which represents a shopping cart and contains all information pertaining to it. Hence, the `orderFormId` obtained in response is the identification code of the newly created cart.\n\r\n\r> This request has a time out of 45 seconds.',
  operationId: 'CreateANewCart',
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
      forceNewCart: z
        .stringbool()
        .default(true)
        .exactOptional()
        .openapi({
          param: {
            description: 'Use this query parameter to create a new empty shopping cart.',
            in: 'query',
            name: 'forceNewCart',
            required: false,
            schema: { default: true, type: 'boolean' },
            style: 'form',
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK', content: {} } },
  security: [],
})

export const getApiCheckoutPubOrderFormOrderFormIdRoute = createRoute({
  method: 'get',
  path: '/api/checkout/pub/orderForm/{orderFormId}',
  tags: ['Shopping cart'],
  summary: 'Get cart information by ID',
  description:
    'Use this request to get all information associated to a given shopping  cart.\r\n\r\nThe [orderForm](https://developers.vtex.com/docs/guides/orderform-fields) is the data structure which represents a shopping cart and contains all information pertaining to it. Hence, the `orderFormId` is the identification code of a given cart.\n\r\n\r> This request has a time out of 45 seconds.',
  operationId: 'GetCartInformationById',
  request: {
    params: z.object({
      orderFormId: z
        .string()
        .default('ede846222cd44046ba6c638442c3505a')
        .openapi({
          param: {
            description:
              'ID of the orderForm corresponding to the cart whose information you want to retrieve.',
            in: 'path',
            name: 'orderFormId',
            required: true,
            schema: { default: 'ede846222cd44046ba6c638442c3505a', type: 'string' },
            style: 'simple',
          },
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
    query: z.object({
      refreshOutdatedData: z
        .stringbool()
        .default(true)
        .exactOptional()
        .openapi({
          param: {
            description:
              'It is possible to use the [Update cart items request](https://developers.vtex.com/vtex-rest-api/reference/cart-update#itemsupdate) so as to allow outdated information in the `orderForm`, which may improve performance in some cases. To guarantee that all cart information is updated, send this request with this parameter as `true`. We recommend doing this in the final stages of the shopping experience, starting from the checkout page.',
            in: 'query',
            name: 'refreshOutdatedData',
            required: false,
            schema: { default: true, type: 'boolean' },
            style: 'form',
          },
        }),
    }),
  },
  responses: { 200: { description: '', content: {}, headers: z.object({}) } },
  security: [],
})

export const postApiCheckoutPubOrderFormOrderFormIdAttachmentsClientPreferencesDataRoute =
  createRoute({
    method: 'post',
    path: '/api/checkout/pub/orderForm/{orderFormId}/attachments/clientPreferencesData',
    tags: ['Cart attachments'],
    summary: 'Add client preferences',
    description:
      'Use this request to include client preferences information to a given shopping cart.\r\n\r\nThe [orderForm](https://developers.vtex.com/docs/guides/orderform-fields) is the data structure which represents a shopping cart and contains all information pertaining to it. Hence, the `orderFormId` is the identification code of a given cart.\n\r\n\r> This request has a time out of 12 seconds.',
    operationId: 'AddClientPreferences',
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
        orderFormId: z
          .string()
          .openapi({
            param: {
              description: 'ID of the orderForm that will receive client profile information.',
              in: 'path',
              name: 'orderFormId',
              required: true,
              schema: { type: 'string' },
              style: 'simple',
            },
          }),
      }),
      body: {
        content: {
          'application/json': {
            schema: z
              .object({
                locale: z
                  .string()
                  .default('EN')
                  .exactOptional()
                  .openapi({
                    description: 'Locale chosen by the shopper. Determines website language.',
                  }),
                optinNewsLetter: z
                  .boolean()
                  .default(false)
                  .exactOptional()
                  .openapi({
                    description:
                      "Indicates whether the shopper opted in to receive the store's news letter.",
                  }),
              })
              .openapi({ required: [] }),
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
            schema: z.any(),
            example: {
              allowManualPrice: false,
              canEditData: true,
              checkedInPickupPointId: null,
              clientPreferencesData: { locale: 'PT', optinNewsLetter: false },
              clientProfileData: null,
              commercialConditionData: null,
              customData: null,
              giftRegistryData: null,
              hooksData: null,
              ignoreProfileData: false,
              invoiceData: null,
              isCheckedIn: false,
              itemMetadata: null,
              items: [],
              itemsOrdination: null,
              loggedIn: false,
              marketingData: null,
              messages: [],
              openTextField: null,
              orderFormId: 'a7e4702410864239959f9bdcf77e3fba',
              paymentData: {
                availableAccounts: [],
                availableTokens: [],
                giftCardMessages: [],
                giftCards: [],
                installmentOptions: [],
                paymentSystems: [],
                payments: [],
                updateStatus: 'updated',
              },
              ratesAndBenefitsData: null,
              salesChannel: '1',
              selectableGifts: [],
              sellers: [],
              shippingData: null,
              storeId: null,
              storePreferencesData: {
                countryCode: 'BRA',
                currencyCode: 'BRL',
                currencyFormatInfo: {
                  currencyDecimalDigits: 2,
                  currencyDecimalSeparator: ',',
                  currencyGroupSeparator: '.',
                  currencyGroupSize: 3,
                  startsWithCurrencySymbol: true,
                },
                currencyLocale: 1046,
                currencySymbol: 'R$',
                saveUserData: true,
                timeZone: 'E. South America Standard Time',
              },
              subscriptionData: null,
              totalizers: [],
              userProfileId: null,
              userType: null,
              value: 0,
            },
          },
        },
      },
    },
    security: [],
  })

export const postApiCheckoutPubOrderFormOrderFormIdAttachmentsClientProfileDataRoute = createRoute({
  method: 'post',
  path: '/api/checkout/pub/orderForm/{orderFormId}/attachments/clientProfileData',
  tags: ['Cart attachments'],
  summary: 'Add client profile',
  description:
    "Use this request to include client profile information to a given shopping cart.\r\n\r\nThe [orderForm](https://developers.vtex.com/docs/guides/orderform-fields) is the data structure which represents a shopping cart and contains all information pertaining to it. Hence, the `orderFormId` is the identification code of a given cart.\n\r\n\r> This request has a time out of 12 seconds.\r\n\r\n>⚠️ The authentication of this endpoint can change depending on the customer context. If you are modifying information from a customer with a complete profile on the store, the response will return the customer's data masked. You can only access the customer data with an authenticated request.",
  operationId: 'AddClientProfile',
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
      orderFormId: z
        .string()
        .openapi({
          param: {
            description: 'ID of the orderForm that will receive client profile information.',
            in: 'path',
            name: 'orderFormId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              corporateDocument: z
                .string()
                .default('12345678000100')
                .exactOptional()
                .openapi({ description: 'Corporate document, if the customer is a legal entity.' }),
              corporateName: z
                .string()
                .default('company-name')
                .exactOptional()
                .openapi({ description: 'Company name, if the customer is a legal entity.' }),
              corporatePhone: z
                .string()
                .default('+551100988887777')
                .exactOptional()
                .openapi({
                  description: 'Corporate phone number, if the customer is a legal entity.',
                }),
              document: z
                .string()
                .default('123456789')
                .openapi({ description: 'Document number informed by the customer.' }),
              documentType: z
                .string()
                .default('cpf')
                .openapi({ description: 'Type of the document informed by the customer.' }),
              email: z
                .string()
                .default('customer@examplemail.com')
                .openapi({ description: "Customer's email address." }),
              firstName: z
                .string()
                .default('first-name')
                .openapi({ description: "Customer's first name." }),
              isCorporate: z
                .boolean()
                .default(false)
                .exactOptional()
                .openapi({ description: '`true` if the customer is a legal entity.' }),
              lastName: z
                .string()
                .default('last-name')
                .openapi({ description: "Customer's last name." }),
              phone: z
                .string()
                .default('+55110988887777')
                .exactOptional()
                .openapi({ description: "Customer's phone number." }),
              stateInscription: z
                .string()
                .default('12345678')
                .exactOptional()
                .openapi({ description: 'State inscription, if the customer is a legal entity.' }),
              tradeName: z
                .string()
                .default('trade-name')
                .exactOptional()
                .openapi({ description: 'Trade name, if the customer is a legal entity.' }),
            })
            .openapi({
              description: "Customer's profile information.",
              required: ['email', 'firstName', 'lastName', 'documentType', 'document'],
            }),
        },
      },
      required: true,
    },
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
  security: [],
})

export const postApiCheckoutPubOrderFormOrderFormIdAttachmentsMarketingDataRoute = createRoute({
  method: 'post',
  path: '/api/checkout/pub/orderForm/{orderFormId}/attachments/marketingData',
  tags: ['Cart attachments'],
  summary: 'Add marketing data',
  description:
    'Use this request to include marketing information to a given shopping cart.\r\n\r\nThe [orderForm](https://developers.vtex.com/docs/guides/orderform-fields) is the data structure which represents a shopping cart and contains all information pertaining to it. Hence, the `orderFormId` is the identification code of a given cart.\n\r\n\r> This request has a time out of 12 seconds.',
  operationId: 'AddMarketingData',
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
      orderFormId: z
        .string()
        .openapi({
          param: {
            description: 'ID of the orderForm that will receive client profile information.',
            in: 'path',
            name: 'orderFormId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              coupon: z
                .string()
                .default('free-shipping')
                .exactOptional()
                .openapi({
                  description:
                    'Sending an existing coupon code in this field will return the corresponding discount in the purchase. Use the [cart simulation](https://developers.vtex.com/vtex-rest-api/reference/orderform#orderformsimulation) request to check which coupons might apply before placing the order.',
                }),
              marketingTags: z
                .array(z.string())
                .default(['tag1', 'tag2'])
                .exactOptional()
                .openapi({ description: 'Marketing tags.' }),
              utmCampaign: z
                .string()
                .default('Black friday')
                .exactOptional()
                .openapi({ description: 'UTM campaign' }),
              utmMedium: z
                .string()
                .default('CPC')
                .exactOptional()
                .openapi({ description: 'UTM medium.' }),
              utmSource: z
                .string()
                .default('Facebook')
                .exactOptional()
                .openapi({ description: 'UTM source.' }),
              utmiCampaign: z
                .string()
                .default('utmi_campaign-exmaple')
                .exactOptional()
                .openapi({ description: 'utmi_campaign (internal utm)' }),
              utmiPage: z
                .string()
                .default('utmi_page-example')
                .exactOptional()
                .openapi({ description: 'utmi_page (internal utm)' }),
              utmiPart: z
                .string()
                .default('utmi_part-exmaple')
                .exactOptional()
                .openapi({ description: 'utmi_part (internal utm)' }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: { 200: { description: 'OK', content: {} } },
  security: [],
})

export const postApiCheckoutPubOrderFormOrderFormIdAttachmentsMerchantContextDataRoute =
  createRoute({
    method: 'post',
    path: '/api/checkout/pub/orderForm/{orderFormId}/attachments/merchantContextData',
    tags: ['Cart attachments'],
    summary: 'Add merchant context data',
    description:
      'This endpoint is used for the merchant to add to the cart any relevant information that is related to the context of a specific order.\r\n\r\nThe [orderForm](https://developers.vtex.com/docs/guides/orderform-fields) is the data structure which represents a shopping cart and contains all information pertaining to it. Hence, the `orderFormId` is the identification code of a given cart.\n\r\n\r> This request has a time out of 12 seconds.',
    operationId: 'AddMerchantContextData',
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
        orderFormId: z
          .string()
          .openapi({
            param: {
              description:
                'ID of the orderForm that will receive the relevant information added by the merchant.',
              example: '29154e27383145cc8ce1f7a1df0d99c4',
              in: 'path',
              name: 'orderFormId',
              required: true,
              schema: { type: 'string' },
              style: 'simple',
            },
          }),
      }),
      body: {
        content: {
          'application/json': {
            schema: z
              .object({
                salesAssociateData: z
                  .object({
                    salesAssociateId: z
                      .string()
                      .default('seller123')
                      .exactOptional()
                      .openapi({
                        description:
                          'Sales Associate (Seller) identification code. All information should be registered by the merchant. Maximum of 100 characters.',
                      }),
                  })
                  .openapi({ description: 'Sales Associate information.', required: [] }),
              })
              .openapi({ required: ['salesAssociateData'] }),
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
                salesAssociateId: z
                  .string()
                  .exactOptional()
                  .openapi({ description: 'Sales Associate (Seller) identification code.' }),
              })
              .openapi({ required: [] }),
            example: { salesAssociateData: { salesAssociateId: 'seller123' } },
          },
        },
      },
    },
    security: [],
  })

export const postApiCheckoutPubOrderFormOrderFormIdAttachmentsPaymentDataRoute = createRoute({
  method: 'post',
  path: '/api/checkout/pub/orderForm/{orderFormId}/attachments/paymentData',
  tags: ['Cart attachments'],
  summary: 'Add payment data',
  description:
    'Use this request to include payment information to a given shopping cart. The payment information attachment in the shopping cart does not determine the final order payment method in itself. However, it allows tha platform to update any relevant information that may be impacted by the payment method.\r\n\r\nThe [orderForm](https://developers.vtex.com/docs/guides/orderform-fields) is the data structure which represents a shopping cart and contains all information pertaining to it. Hence, the `orderFormId` is the identification code of a given cart.\n\r\n\r> This request has a time out of 12 seconds.',
  operationId: 'AddPaymentData',
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
      orderFormId: z
        .string()
        .openapi({
          param: {
            description: 'ID of the orderForm that will receive client profile information.',
            in: 'path',
            name: 'orderFormId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              payments: z
                .array(
                  z
                    .object({
                      group: z
                        .string()
                        .default('bankInvoicePaymentGroup')
                        .exactOptional()
                        .openapi({ description: 'Payment system group.' }),
                      hasDefaultBillingAddress: z
                        .boolean()
                        .default(false)
                        .exactOptional()
                        .openapi({
                          description:
                            'Indicates whether billing address for this payment is the default address.',
                        }),
                      installments: z
                        .int()
                        .default(1)
                        .exactOptional()
                        .openapi({ description: 'Selected number of installments.' }),
                      installmentsInterestRate: z
                        .number()
                        .default(0)
                        .exactOptional()
                        .openapi({ description: "Installments' interest rate." }),
                      installmentsValue: z
                        .int()
                        .default(1)
                        .exactOptional()
                        .openapi({ description: 'Value of the installments.' }),
                      paymentSystem: z
                        .int()
                        .default(1)
                        .exactOptional()
                        .openapi({ description: 'Payment system ID.' }),
                      paymentSystemName: z
                        .string()
                        .default('Boleto Bancário')
                        .exactOptional()
                        .openapi({ description: 'Payment system name.' }),
                      referenceValue: z
                        .int()
                        .default(100)
                        .exactOptional()
                        .openapi({
                          description:
                            'Reference value used to calculate total order value with interest.',
                        }),
                      value: z
                        .int()
                        .default(100)
                        .exactOptional()
                        .openapi({ description: 'Total value assigned to this payment.' }),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional()
                .openapi({
                  description: 'Array with information on each payment chosen by the shopper.',
                }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: { 200: { description: '', content: {}, headers: z.object({}) } },
  security: [],
})

export const postApiCheckoutPubOrderFormOrderFormIdAttachmentsShippingDataRoute = createRoute({
  method: 'post',
  path: '/api/checkout/pub/orderForm/{orderFormId}/attachments/shippingData',
  tags: ['Cart attachments'],
  summary: 'Add shipping address and select delivery option',
  description:
    "Use this request to include shipping information and/or selected delivery option to a given shopping cart.\r\n\r\nTo add shipping addresses send the `selectedAddresses` array. For delivery option use the `logisticsInfo` array.\r\n\r\nThe [orderForm](https://developers.vtex.com/docs/guides/orderform-fields) is the data structure which represents a shopping cart and contains all information pertaining to it. Hence, the `orderFormId` is the identification code of a given cart.\n\r\n\r> This request has a time out of 12 seconds.\r\n\r\n>⚠️ The authentication of this endpoint can change depending on the customer context. If you are modifying information from a customer with a complete profile on the store, the response will return the customer's data masked. You can only access the customer data with an authenticated request.",
  operationId: 'AddShippingAddress',
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
      orderFormId: z
        .string()
        .openapi({
          param: {
            description: 'ID of the orderForm that will receive client profile information.',
            in: 'path',
            name: 'orderFormId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              clearAddressIfPostalCodeNotFound: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'This field should be sent as `false` to prevent the address information from being filled in automatically based on the `postalCode` information.',
                  example: false,
                }),
              logisticsInfo: z
                .array(
                  z
                    .object({
                      itemIndex: z
                        .int()
                        .default(0)
                        .exactOptional()
                        .openapi({ description: 'Index of item in items array' }),
                      selectedDeliveryChannel: z
                        .string()
                        .default('delivery')
                        .exactOptional()
                        .openapi({
                          description:
                            'Delivery channel selected by the customer. For example, `"delivery"` or `"pickup-in-point"`.',
                        }),
                      selectedSla: z
                        .string()
                        .default('normal')
                        .exactOptional()
                        .openapi({
                          description: 'Selected SLA. For example, `"normal"` or `"express"`.',
                        }),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional()
                .openapi({
                  description:
                    'Array with logistics information on each item of the `items` array in the `orderForm`.',
                }),
              selectedAddresses: z
                .array(
                  z
                    .object({
                      addressType: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            'Type of address. For example, `Residential` or `Pickup`, among others.',
                          example: 'residential',
                        }),
                      city: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description: 'City of the shipping address.',
                          example: 'Rio de Janeiro',
                        }),
                      complement: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description: 'Complement to the shipping address in case it applies.',
                          example: '3rd floor',
                        }),
                      country: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            'Three letter ISO code of the country of the shipping address.',
                          example: 'BRA',
                        }),
                      geoCoordinates: z
                        .array(z.number().openapi({ example: -47.924747467041016 }))
                        .default([-47.924747467041016, -15.832582473754883])
                        .exactOptional()
                        .openapi({
                          description:
                            'Array containing two floats with geocoordinates, first longitude, then latitude.',
                        }),
                      neighborhood: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description: 'Neighborhood of the shipping address.',
                          example: 'Botafogo',
                        }),
                      number: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            'Number of the building, house or apartment in the shipping address.',
                          example: '300',
                        }),
                      postalCode: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'Postal Code.', example: '12345-000' }),
                      receiverName: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description: 'Name of the person who is going to receive the order.',
                          example: 'receiver-name',
                        }),
                      reference: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            'Complement that might help locate the shipping address more precisely in case of delivery.',
                          example: 'Grey building',
                        }),
                      state: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'State of the shipping address.', example: 'RJ' }),
                      street: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description: 'Street of the shipping address.',
                          example: 'Praia de Botafogo',
                        }),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional()
                .openapi({ description: 'List of objects with addresses information.' }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: { 200: { description: '', content: {}, headers: z.object({}) } },
  security: [],
})

export const postApiCheckoutPubOrderFormOrderFormIdCouponsRoute = createRoute({
  method: 'post',
  path: '/api/checkout/pub/orderForm/{orderFormId}/coupons',
  tags: ['Shopping cart'],
  summary: 'Add coupons to the cart',
  description: 'Use this request to add coupons to a given shopping cart.',
  operationId: 'AddCoupons',
  request: {
    params: z.object({
      orderFormId: z
        .string()
        .default('ede846222cd44046ba6c638442c3505a')
        .openapi({
          param: {
            description: 'ID of the orderForm that will receive coupon information.',
            in: 'path',
            name: 'orderFormId',
            required: true,
            schema: { default: 'ede846222cd44046ba6c638442c3505a', type: 'string' },
            style: 'simple',
          },
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
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              text: z
                .string()
                .default('freeshipping')
                .exactOptional()
                .openapi({
                  description:
                    'Sending an existing coupon code in this field will return the corresponding discount in the purchase. Use the [cart simulation](https://developers.vtex.com/vtex-rest-api/reference/orderform#orderformsimulation) request to check which coupons might apply before placing the order.',
                }),
            })
            .openapi({ required: [] }),
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
              allowManualPrice: z
                .boolean()
                .exactOptional()
                .openapi({ description: 'Permission to modify item price manually.' }),
              availableAccounts: z
                .array(z.string())
                .exactOptional()
                .openapi({ description: 'Available accounts.' }),
              availableAddresses: z
                .array(
                  z
                    .object({
                      addressId: z.string().exactOptional().openapi({ description: 'Address ID.' }),
                      addressType: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'Address type.' }),
                      city: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'City of the address.' }),
                      complement: z
                        .string()
                        .nullable()
                        .exactOptional()
                        .openapi({ description: 'Complement to the address.' }),
                      country: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'Country of the address. ISO three-letter code.' }),
                      geoCoordinates: z
                        .array(z.number())
                        .exactOptional()
                        .openapi({
                          description:
                            'Array containing two floats with geocoordinates, first longitude, then latitude.',
                        }),
                      isDisposable: z
                        .boolean()
                        .exactOptional()
                        .openapi({ description: 'Indicates whether address is disposable.' }),
                      neighborhood: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'Neighborhood of the address.' }),
                      number: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'Number of the address.' }),
                      receiverName: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'Name of the receiver.' }),
                      reference: z
                        .string()
                        .nullable()
                        .exactOptional()
                        .openapi({
                          description: 'Reference that may help in the location of the address.',
                        }),
                      state: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'State of the address.' }),
                      street: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'Street of the address.' }),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional()
                .openapi({ description: 'Information on each available address.' }),
              canEditData: z
                .boolean()
                .exactOptional()
                .openapi({ description: 'Data can be edited.' }),
              clientPreferencesData: z
                .object({
                  locale: z
                    .string()
                    .exactOptional()
                    .openapi({ description: "Client's locale. Examples: `pt-BR` and `en-US`." }),
                  optinNewsLetter: z
                    .boolean()
                    .exactOptional()
                    .openapi({
                      description:
                        '`true` if the client opted to receive newsletter from the store.',
                    }),
                })
                .exactOptional()
                .openapi({
                  description:
                    'Object containing preferences from the client who placed the order.',
                  required: [],
                }),
              clientProfileData: z
                .object({
                  corporateDocument: z
                    .string()
                    .nullable()
                    .exactOptional()
                    .openapi({
                      description: 'Corporate document, if the customer is a legal entity.',
                    }),
                  corporateName: z
                    .string()
                    .nullable()
                    .exactOptional()
                    .openapi({ description: 'Company name, if the customer is a legal entity.' }),
                  corporatePhone: z
                    .string()
                    .nullable()
                    .exactOptional()
                    .openapi({
                      description: 'Corporate phone number, if the customer is a legal entity.',
                    }),
                  customerClass: z
                    .string()
                    .nullable()
                    .exactOptional()
                    .openapi({ description: 'Customer class.' }),
                  document: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'Document informed by the customer.' }),
                  documentType: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'Type of the document informed by the customer.' }),
                  email: z.string().exactOptional().openapi({ description: 'Email address.' }),
                  firstName: z.string().exactOptional().openapi({ description: 'First name.' }),
                  isCorporate: z
                    .boolean()
                    .exactOptional()
                    .openapi({ description: 'Indicates whether the customer is a legal entity.' }),
                  lastName: z.string().exactOptional().openapi({ description: 'Last name.' }),
                  phone: z.string().exactOptional().openapi({ description: 'Phone number.' }),
                  profileCompleteOnLoading: z
                    .boolean()
                    .exactOptional()
                    .openapi({ description: 'Indicates whether profile is complete on loading.' }),
                  profileErrorOnLoading: z
                    .boolean()
                    .nullable()
                    .exactOptional()
                    .openapi({
                      description: 'Indicates whether profile presents error on loading.',
                    }),
                  stateInscription: z
                    .string()
                    .nullable()
                    .exactOptional()
                    .openapi({
                      description: 'State inscription, if the customer is a legal entity.',
                    }),
                  tradeName: z
                    .string()
                    .nullable()
                    .exactOptional()
                    .openapi({ description: 'Trade name, if the customer is a legal entity.' }),
                })
                .exactOptional()
                .openapi({ description: "Customer's profile information.", required: [] }),
              commercialConditionData: z
                .object({})
                .nullable()
                .exactOptional()
                .openapi({ description: 'Object containing commercial condition information.' }),
              customData: z
                .object({})
                .nullable()
                .exactOptional()
                .openapi({ description: 'Customer additional information.' }),
              giftRegistryData: z
                .object({})
                .nullable()
                .exactOptional()
                .openapi({ description: 'Gift registry list information.' }),
              hooksData: z
                .object({})
                .nullable()
                .exactOptional()
                .openapi({ description: 'Hooks information.' }),
              ignoreProfileData: z
                .boolean()
                .exactOptional()
                .openapi({ description: 'Ignore customer profile data.' }),
              invoiceData: z
                .object({})
                .nullable()
                .exactOptional()
                .openapi({
                  description: "Object containing information pertinent to the order's invoice.",
                }),
              isCheckedIn: z
                .boolean()
                .exactOptional()
                .openapi({ description: 'Indicates whether order is checked in.' }),
              itemMetadata: z
                .object({
                  items: z
                    .array(
                      z
                        .object({
                          detailUrl: z
                            .string()
                            .exactOptional()
                            .openapi({ description: 'Detail URL.' }),
                          ean: z
                            .string()
                            .nullable()
                            .exactOptional()
                            .openapi({ description: 'European Article Number.' }),
                          id: z.string().exactOptional().openapi({ description: 'Item ID.' }),
                          imageUrl: z
                            .string()
                            .exactOptional()
                            .openapi({ description: 'Image URL.' }),
                          name: z
                            .string()
                            .exactOptional()
                            .openapi({ description: 'Product name.' }),
                          productId: z
                            .string()
                            .exactOptional()
                            .openapi({ description: 'Product ID.' }),
                          refId: z.string().exactOptional().openapi({ description: 'Ref ID.' }),
                          seller: z.string().exactOptional().openapi({ description: 'Seller.' }),
                          skuName: z.string().exactOptional().openapi({ description: 'SKU name.' }),
                        })
                        .openapi({ required: [] }),
                    )
                    .exactOptional()
                    .openapi({
                      description: 'List of objects containing metadata on each item in the order.',
                    }),
                })
                .exactOptional()
                .openapi({ description: 'Item metadata.', required: [] }),
              items: z
                .array(
                  z
                    .object({
                      additionalInfo: z
                        .object({
                          brandId: z.string().exactOptional().openapi({ description: 'Brand ID.' }),
                          brandName: z
                            .string()
                            .exactOptional()
                            .openapi({ description: 'Brand name.' }),
                          dimension: z
                            .string()
                            .nullable()
                            .exactOptional()
                            .openapi({ description: 'Dimension.' }),
                          offeringInfo: z
                            .string()
                            .nullable()
                            .exactOptional()
                            .openapi({ description: 'Offering information.' }),
                          offeringType: z
                            .string()
                            .nullable()
                            .exactOptional()
                            .openapi({ description: 'Offering type.' }),
                          offeringTypeId: z
                            .string()
                            .nullable()
                            .exactOptional()
                            .openapi({ description: 'Offering type ID.' }),
                        })
                        .exactOptional()
                        .openapi({ description: 'Additional information.', required: [] }),
                      attachments: z
                        .array(z.string())
                        .exactOptional()
                        .openapi({ description: 'Array containing information on attachments.' }),
                      availability: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'Availability' }),
                      bundleItems: z
                        .array(
                          z
                            .object({
                              id: z
                                .int()
                                .exactOptional()
                                .openapi({ description: 'Service identifier.' }),
                              name: z
                                .string()
                                .exactOptional()
                                .openapi({ description: 'Service name.' }),
                              price: z
                                .int()
                                .exactOptional()
                                .openapi({ description: 'Service price in cents.' }),
                              type: z
                                .string()
                                .exactOptional()
                                .openapi({ description: 'Service type.' }),
                            })
                            .openapi({ required: [] }),
                        )
                        .exactOptional()
                        .openapi({
                          description:
                            'Information on services sold along with the SKU. Example: a gift package.',
                        }),
                      detailUrl: z.string().exactOptional().openapi({ description: 'Detail URL.' }),
                      ean: z
                        .string()
                        .nullable()
                        .exactOptional()
                        .openapi({ description: 'European Article Number.' }),
                      id: z.string().exactOptional().openapi({ description: 'ID of the item.' }),
                      imageUrl: z.string().exactOptional().openapi({ description: 'Image URL.' }),
                      isGift: z
                        .boolean()
                        .exactOptional()
                        .openapi({ description: 'Indicates whether item is a gift.' }),
                      listPrice: z
                        .int()
                        .exactOptional()
                        .openapi({ description: 'List price in cents.' }),
                      manualPrice: z
                        .int()
                        .nullable()
                        .exactOptional()
                        .openapi({ description: 'Manual price in cents.' }),
                      manualPriceAppliedBy: z
                        .string()
                        .nullable()
                        .exactOptional()
                        .openapi({
                          description: 'User that applied the manual price, if that is the case.',
                        }),
                      manufacturerCode: z
                        .string()
                        .nullable()
                        .exactOptional()
                        .openapi({ description: 'Manufacturer code.' }),
                      measurementUnit: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'Measurement unit' }),
                      modalType: z
                        .string()
                        .nullable()
                        .exactOptional()
                        .openapi({ description: 'Modal type.' }),
                      name: z.string().exactOptional().openapi({ description: 'Product name.' }),
                      parentAssemblyBinding: z
                        .string()
                        .nullable()
                        .exactOptional()
                        .openapi({ description: 'Parent assembly binding.' }),
                      parentItemIndex: z
                        .int()
                        .nullable()
                        .exactOptional()
                        .openapi({ description: 'Parent item index.' }),
                      preSaleDate: z
                        .string()
                        .nullable()
                        .exactOptional()
                        .openapi({ description: 'Presale date.' }),
                      price: z.int().exactOptional().openapi({ description: 'Price in cents.' }),
                      priceDefinition: z
                        .object({
                          calculatedSellingPrice: z
                            .int()
                            .exactOptional()
                            .openapi({
                              description: "Item's calculated unitary selling price in cents.",
                            }),
                          sellingPrices: z
                            .array(
                              z
                                .object({
                                  quantity: z
                                    .int()
                                    .exactOptional()
                                    .openapi({
                                      description:
                                        'Rounding quantity, meaning how many items are rounded to this value.',
                                    }),
                                  value: z
                                    .int()
                                    .exactOptional()
                                    .openapi({
                                      description: 'Value in cents for that specific rounding.',
                                    }),
                                })
                                .openapi({ required: [] }),
                            )
                            .exactOptional()
                            .openapi({
                              description:
                                'Array of objects, each containing value (in cents) and quantity for the different rounding instances that can be combined to form the correctly rounded total.',
                            }),
                          total: z
                            .int()
                            .exactOptional()
                            .openapi({
                              description: 'Total value for all units of the item in cents.',
                            }),
                        })
                        .exactOptional()
                        .openapi({
                          description: 'Price information for all units of a specific item.',
                          required: [],
                        }),
                      priceTags: z
                        .array(
                          z
                            .object({
                              identifier: z
                                .string()
                                .exactOptional()
                                .openapi({ description: 'Price tag identifier.' }),
                              isPercentual: z
                                .boolean()
                                .exactOptional()
                                .openapi({
                                  description:
                                    'Indicates whether price tag value is applied through a percentage.',
                                }),
                              name: z
                                .string()
                                .exactOptional()
                                .openapi({ description: 'Price tag name.' }),
                              rawValue: z
                                .int()
                                .exactOptional()
                                .openapi({ description: 'Price tag raw value.' }),
                              value: z
                                .int()
                                .exactOptional()
                                .openapi({ description: 'Price tag value.' }),
                            })
                            .openapi({ required: [] }),
                        )
                        .exactOptional()
                        .openapi({
                          description:
                            'Array of price tags, each of which, modifies the price in some way, like discounts or rates that apply to the item in the context of the order.',
                        }),
                      priceValidUntil: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'Price expiration date and time.' }),
                      productCategories: z
                        .object({
                          '{ID}': z
                            .string()
                            .exactOptional()
                            .openapi({
                              description:
                                'Product category corresponding to the ID in the field key.',
                            }),
                        })
                        .exactOptional()
                        .openapi({
                          description:
                            'Object, where each field is an ID from `productCategoryIds`.',
                          required: [],
                        }),
                      productCategoryIds: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'Product category IDs.' }),
                      productId: z.string().exactOptional().openapi({ description: 'Product ID.' }),
                      productRefId: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'Product Ref ID.' }),
                      quantity: z.int().exactOptional().openapi({ description: 'Quantity.' }),
                      refId: z.string().exactOptional().openapi({ description: 'Ref ID.' }),
                      rewardValue: z
                        .int()
                        .exactOptional()
                        .openapi({ description: 'Reward value in cents.' }),
                      seller: z.string().exactOptional().openapi({ description: 'Seller.' }),
                      sellerChain: z
                        .array(z.string().openapi({ description: 'Seller.' }))
                        .exactOptional()
                        .openapi({
                          description:
                            'Sellers involved in the chain. The list should contain only one seller, unless it is a [Multilevel Omnichannel Inventory](https://help.vtex.com/en/tutorial/multilevel-omnichannel-inventory--7M1xyCZWUyCB7PcjNtOyw4) order.',
                        }),
                      sellingPrice: z
                        .int()
                        .exactOptional()
                        .openapi({
                          description:
                            'Selling price in cents. Note that this field may be subject to rounding discrepancies. We recommend retrieving data from the `priceDefinition` data structure instead.',
                        }),
                      skuName: z.string().exactOptional().openapi({ description: 'SKU name.' }),
                      tax: z.int().exactOptional().openapi({ description: 'Tax value in cents.' }),
                      uniqueId: z.string().exactOptional().openapi({ description: 'Unique ID.' }),
                      unitMultiplier: z
                        .int()
                        .exactOptional()
                        .openapi({ description: 'Unit multiplier' }),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional()
                .openapi({ description: 'Information on each item in the order.' }),
              itemsOrdination: z
                .object({
                  ascending: z
                    .boolean()
                    .exactOptional()
                    .openapi({ description: 'Indicates whether the ordering is ascending.' }),
                  criteria: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'Criteria adopted to order the items in the list.' }),
                })
                .exactOptional()
                .openapi({
                  description:
                    'Object containing information about the ordering of items within the orderForm.',
                  required: [],
                }),
              loggedIn: z
                .boolean()
                .exactOptional()
                .openapi({ description: 'Indicates whether the user is logged into the store.' }),
              marketingData: z
                .object({
                  coupon: z
                    .string()
                    .default('free-shipping')
                    .exactOptional()
                    .openapi({
                      description:
                        'Sending an existing coupon code in this field will return the corresponding discount in the purchase. Use the [cart simulation](https://developers.vtex.com/vtex-rest-api/reference/orderform#orderformsimulation) request to check which coupons might apply before placing the order.',
                    }),
                  utmCampaign: z
                    .string()
                    .nullable()
                    .default('Black friday')
                    .exactOptional()
                    .openapi({ description: 'UTM campaign.' }),
                  utmMedium: z
                    .string()
                    .nullable()
                    .default('CPC')
                    .exactOptional()
                    .openapi({ description: 'UTM medium.' }),
                  utmSource: z
                    .string()
                    .nullable()
                    .default('Facebook')
                    .exactOptional()
                    .openapi({ description: 'UTM source.' }),
                  utmiCampaign: z
                    .string()
                    .nullable()
                    .default('utmi_campaign-exmaple')
                    .exactOptional()
                    .openapi({ description: 'utmi_campaign (internal utm).' }),
                  utmiPage: z
                    .string()
                    .nullable()
                    .default('utmi_page-example')
                    .exactOptional()
                    .openapi({ description: 'utmi_page (internal utm).' }),
                  utmiPart: z
                    .string()
                    .nullable()
                    .default('utmi_part-exmaple')
                    .exactOptional()
                    .openapi({ description: 'utmi_part (internal utm).' }),
                })
                .exactOptional()
                .openapi({
                  description:
                    'Object containIng promotion data such as coupon tracking information and internal or external UTMs.',
                  required: [],
                }),
              messages: z
                .array(z.any())
                .exactOptional()
                .openapi({
                  description:
                    'Array containing an object for each message generated by our servers while processing the request.',
                }),
              openTextField: z
                .string()
                .nullable()
                .default('open-text-example')
                .exactOptional()
                .openapi({
                  description:
                    'Optional field meant to hold additional information about the order. We recommend using this field for text, not data formats such as `JSON` even if escaped. For that purpose, see [Creating customizable fields](https://developers.vtex.com/vtex-rest-api/docs/creating-customizable-fields-in-the-cart-with-checkout-api-1)',
                }),
              orderFormId: z
                .string()
                .exactOptional()
                .openapi({ description: 'ID of the orderForm corresponding to a specific cart.' }),
              paymentData: z
                .object({
                  giftCards: z
                    .array(
                      z
                        .object({
                          balance: z
                            .int()
                            .exactOptional()
                            .openapi({ description: 'Gift card balance in cents.' }),
                          id: z.string().exactOptional().openapi({ description: 'Gift card ID.' }),
                          inUse: z
                            .boolean()
                            .exactOptional()
                            .openapi({ description: 'Indicates whether gift card is in use.' }),
                          isSpecialCard: z
                            .boolean()
                            .exactOptional()
                            .openapi({ description: 'Indicates whether gift card is special.' }),
                          name: z
                            .string()
                            .exactOptional()
                            .openapi({ description: 'Gift card name.' }),
                          redemptionCode: z
                            .string()
                            .exactOptional()
                            .openapi({ description: 'Gift card redemption code.' }),
                          value: z
                            .int()
                            .exactOptional()
                            .openapi({ description: 'Gift card value in cents.' }),
                        })
                        .openapi({ required: [] }),
                    )
                    .exactOptional()
                    .openapi({ description: 'Gift card information, if it applies to the order.' }),
                  transactions: z
                    .array(
                      z
                        .object({
                          isActive: z
                            .boolean()
                            .exactOptional()
                            .openapi({ description: 'Indicates whether transaction is active.' }),
                          merchantName: z
                            .string()
                            .exactOptional()
                            .openapi({ description: 'Merchant name.' }),
                          payments: z
                            .array(
                              z
                                .object({
                                  accountId: z
                                    .string()
                                    .exactOptional()
                                    .openapi({ description: 'Account ID.' }),
                                  bin: z.string().exactOptional().openapi({ description: 'Bin.' }),
                                  installments: z
                                    .int()
                                    .exactOptional()
                                    .openapi({ description: 'Number of installments.' }),
                                  paymentSystem: z
                                    .string()
                                    .exactOptional()
                                    .openapi({ description: 'Payment system.' }),
                                  referenceValue: z
                                    .int()
                                    .exactOptional()
                                    .openapi({
                                      description:
                                        'Reference value for calculating interest rates, in case it applies. Displayed in cents.',
                                    }),
                                  value: z
                                    .int()
                                    .exactOptional()
                                    .openapi({
                                      description:
                                        'Value including interest, in case it applies. Displayed in cents.',
                                    }),
                                })
                                .openapi({ required: [] }),
                            )
                            .exactOptional()
                            .openapi({ description: 'Information on each payment.' }),
                          sharedTransaction: z
                            .boolean()
                            .exactOptional()
                            .openapi({ description: 'Indicates whather transaction is shared.' }),
                          transactionId: z
                            .string()
                            .exactOptional()
                            .openapi({ description: 'Transaction ID.' }),
                        })
                        .openapi({ required: [] }),
                    )
                    .exactOptional()
                    .openapi({
                      description: 'Information on each transaction pertinent to the order.',
                    }),
                })
                .exactOptional()
                .openapi({ description: "Information on the order's payment.", required: [] }),
              profileProvider: z
                .string()
                .exactOptional()
                .openapi({ description: 'Profile provider.' }),
              ratesAndBenefitsData: z
                .object({
                  rateAndBenefitsIdentifiers: z
                    .array(z.string())
                    .exactOptional()
                    .openapi({ description: 'List with rates and benefits identifiers.' }),
                  teaser: z
                    .array(z.string())
                    .exactOptional()
                    .openapi({ description: 'List with rates and benefits teasers.' }),
                })
                .exactOptional()
                .openapi({
                  description: 'Information on rates and benefits that apply to the order.',
                  required: [],
                }),
              salesChannel: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Attribute created by the seller, in their VTEX store configuration.',
                }),
              selectableGifts: z
                .array(z.any())
                .exactOptional()
                .openapi({
                  description: 'Array containing the data of the item selected as a gift.',
                }),
              sellers: z
                .array(
                  z
                    .object({
                      id: z.string().exactOptional().openapi({ description: 'Seller ID.' }),
                      logo: z
                        .string()
                        .nullable()
                        .exactOptional()
                        .openapi({ description: 'Seller logo.' }),
                      name: z.string().exactOptional().openapi({ description: 'Seller name.' }),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional()
                .openapi({ description: 'Information on each seller.' }),
              shippingData: z
                .object({
                  address: z
                    .object({
                      addressId: z.string().exactOptional().openapi({ description: 'Address ID.' }),
                      addressType: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description: 'Type of address. For example, `Residential` or `Pickup`.',
                        }),
                      city: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'City of the shipping address.' }),
                      complement: z
                        .string()
                        .nullable()
                        .exactOptional()
                        .openapi({
                          description: 'Complement to the shipping address, in case it applies.',
                        }),
                      country: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            'Three letter ISO code of the country of the shipping address.',
                        }),
                      geoCoordinates: z
                        .array(z.number())
                        .exactOptional()
                        .openapi({
                          description:
                            'Array containing two floats with geocoordinates, first longitude, then latitude.',
                        }),
                      isDisposable: z
                        .boolean()
                        .exactOptional()
                        .openapi({ description: 'Indicates whether address is disposable.' }),
                      neighborhood: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'Neighborhood of the shipping address.' }),
                      number: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            'Number of the building, house or apartment in the shipping address.',
                        }),
                      postalCode: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'Postal code.' }),
                      receiverName: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description: 'Name of the person who is going to receive the order.',
                        }),
                      reference: z
                        .string()
                        .nullable()
                        .exactOptional()
                        .openapi({
                          description:
                            'Complement that might help locate the shipping address more precisely in case of delivery.',
                        }),
                      state: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'State of the shipping address.' }),
                      street: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'Street of the shipping address.' }),
                    })
                    .exactOptional()
                    .openapi({ description: 'Address information.', required: [] }),
                  availableAddresses: z
                    .array(
                      z
                        .object({
                          addressId: z
                            .string()
                            .exactOptional()
                            .openapi({ description: 'Address ID.' }),
                          addressType: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description:
                                'Type of address. For example, `Residential` or `Pickup`.',
                            }),
                          city: z
                            .string()
                            .exactOptional()
                            .openapi({ description: 'City of the shipping address.' }),
                          complement: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description:
                                'Complement to the shipping address, in case it applies.',
                            }),
                          country: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description:
                                'Three letter ISO code of the country of the shipping address.',
                            }),
                          geoCoordinates: z
                            .array(z.number())
                            .exactOptional()
                            .openapi({
                              description:
                                'Array containing two floats with geocoordinates, first longitude, then latitude.',
                            }),
                          isDisposable: z
                            .boolean()
                            .exactOptional()
                            .openapi({ description: 'Indicates whether address is disposable.' }),
                          neighborhood: z
                            .string()
                            .exactOptional()
                            .openapi({ description: 'Neighborhood of the shipping address.' }),
                          number: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description:
                                'Number of the building, house or apartment in the shipping address.',
                            }),
                          postalCode: z
                            .string()
                            .exactOptional()
                            .openapi({ description: 'Postal code.' }),
                          receiverName: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description: 'Name of the person who is going to receive the order.',
                            }),
                          reference: z
                            .string()
                            .nullable()
                            .exactOptional()
                            .openapi({
                              description:
                                'Complement that might help locate the shipping address more precisely in case of delivery.',
                            }),
                          state: z
                            .string()
                            .exactOptional()
                            .openapi({ description: 'State of the shipping address.' }),
                          street: z
                            .string()
                            .exactOptional()
                            .openapi({ description: 'Street of the shipping address.' }),
                        })
                        .openapi({ required: [] }),
                    )
                    .exactOptional()
                    .openapi({
                      description:
                        'Array with information on the available addresses for the order.',
                    }),
                  logisticsInfo: z
                    .array(
                      z
                        .object({
                          addressId: z
                            .string()
                            .exactOptional()
                            .openapi({ description: 'Address ID.' }),
                          deliveryChannels: z
                            .array(
                              z
                                .object({
                                  id: z
                                    .string()
                                    .exactOptional()
                                    .openapi({ description: 'Delivery channel ID.' }),
                                })
                                .openapi({ required: [] }),
                            )
                            .exactOptional()
                            .openapi({ description: 'List of available delivery channels.' }),
                          itemId: z.string().exactOptional().openapi({ description: 'Item ID.' }),
                          itemIndex: z
                            .int()
                            .exactOptional()
                            .openapi({
                              description:
                                'Index corresponding to the position of the object in the `items` array.',
                            }),
                          selectedDeliveryChannel: z
                            .string()
                            .exactOptional()
                            .openapi({ description: 'Delivery channel selected by the customer.' }),
                          selectedSla: z
                            .string()
                            .exactOptional()
                            .openapi({ description: 'SLA selected by the customer.' }),
                          shipsTo: z
                            .array(
                              z.string().openapi({ description: 'Three letter country code.' }),
                            )
                            .exactOptional()
                            .openapi({
                              description: 'List of countries that the item may be shipped to.',
                            }),
                          slas: z
                            .array(
                              z
                                .object({
                                  deliveryChannel: z
                                    .string()
                                    .exactOptional()
                                    .openapi({ description: 'Delivery channel.' }),
                                  deliveryIds: z
                                    .array(
                                      z
                                        .object({
                                          courierId: z
                                            .string()
                                            .exactOptional()
                                            .openapi({ description: 'Courier ID.' }),
                                          courierName: z
                                            .string()
                                            .exactOptional()
                                            .openapi({ description: 'Courier name.' }),
                                          dockId: z
                                            .string()
                                            .exactOptional()
                                            .openapi({ description: 'Warehouse ID.' }),
                                          quantity: z
                                            .int()
                                            .exactOptional()
                                            .openapi({ description: 'Quantity.' }),
                                          warehouseId: z
                                            .string()
                                            .exactOptional()
                                            .openapi({ description: 'Warehouse ID.' }),
                                        })
                                        .openapi({ required: [] }),
                                    )
                                    .exactOptional()
                                    .openapi({ description: 'Information on each delivery ID.' }),
                                  id: z
                                    .string()
                                    .exactOptional()
                                    .openapi({ description: 'SLA ID.' }),
                                  listPrice: z
                                    .int()
                                    .exactOptional()
                                    .openapi({ description: 'List price in cents.' }),
                                  lockTTL: z
                                    .string()
                                    .exactOptional()
                                    .openapi({ description: 'Estimate date of delivery.' }),
                                  name: z
                                    .string()
                                    .exactOptional()
                                    .openapi({ description: 'SLA name.' }),
                                  pickupDistance: z
                                    .int()
                                    .exactOptional()
                                    .openapi({ description: 'Pickup point distance.' }),
                                  pickupPointId: z
                                    .string()
                                    .nullable()
                                    .exactOptional()
                                    .openapi({ description: 'Pickup point ID.' }),
                                  pickupStoreInfo: z
                                    .object({
                                      additionalInfo: z
                                        .string()
                                        .nullable()
                                        .exactOptional()
                                        .openapi({ description: 'Additional information.' }),
                                      address: z
                                        .object({
                                          addressType: z
                                            .string()
                                            .exactOptional()
                                            .openapi({
                                              description:
                                                'Type of address. For example, `Residential` or `Pickup`.',
                                            }),
                                          city: z
                                            .string()
                                            .exactOptional()
                                            .openapi({
                                              description: 'City of the shipping address.',
                                            }),
                                          complement: z
                                            .string()
                                            .nullable()
                                            .exactOptional()
                                            .openapi({
                                              description:
                                                'Complement to the shipping address, in case it applies.',
                                            }),
                                          country: z
                                            .string()
                                            .exactOptional()
                                            .openapi({
                                              description:
                                                'Three letter ISO code of the country of the shipping address.',
                                            }),
                                          geoCoordinates: z
                                            .array(z.number())
                                            .exactOptional()
                                            .openapi({
                                              description:
                                                'Array containing two floats with geocoordinates, first longitude, then latitude.',
                                            }),
                                          neighborhood: z
                                            .string()
                                            .exactOptional()
                                            .openapi({
                                              description: 'Neighborhood of the shipping address.',
                                            }),
                                          number: z
                                            .string()
                                            .exactOptional()
                                            .openapi({
                                              description:
                                                'Number of the building, house or apartment in the shipping address.',
                                            }),
                                          postalCode: z
                                            .string()
                                            .exactOptional()
                                            .openapi({ description: 'Postal code.' }),
                                          reference: z
                                            .string()
                                            .nullable()
                                            .exactOptional()
                                            .openapi({
                                              description:
                                                'Complement that might help locate the shipping address more precisely in case of delivery.',
                                            }),
                                          state: z
                                            .string()
                                            .exactOptional()
                                            .openapi({
                                              description: 'State of the shipping address.',
                                            }),
                                          street: z
                                            .string()
                                            .exactOptional()
                                            .openapi({
                                              description: 'Street of the shipping address.',
                                            }),
                                        })
                                        .nullable()
                                        .exactOptional()
                                        .openapi({
                                          description: 'Address information.',
                                          required: [],
                                        }),
                                      dockId: z
                                        .string()
                                        .nullable()
                                        .exactOptional()
                                        .openapi({ description: 'Corresponding dock ID.' }),
                                      friendlyName: z
                                        .string()
                                        .nullable()
                                        .exactOptional()
                                        .openapi({ description: 'Friendly name.' }),
                                      isPickupStore: z
                                        .boolean()
                                        .exactOptional()
                                        .openapi({
                                          description: 'Indicates whether it is the pickup store.',
                                        }),
                                    })
                                    .exactOptional()
                                    .openapi({
                                      description: 'Information on the pickup store.',
                                      required: [],
                                    }),
                                  polygonName: z
                                    .string()
                                    .nullable()
                                    .exactOptional()
                                    .openapi({ description: 'Polygon name.' }),
                                  price: z
                                    .int()
                                    .exactOptional()
                                    .openapi({ description: 'Price in cents.' }),
                                  shippingEstimate: z
                                    .string()
                                    .exactOptional()
                                    .openapi({
                                      description:
                                        'Shipping estimate. For instance, Three business days will be represented `3bd`.',
                                    }),
                                  shippingEstimateDate: z
                                    .string()
                                    .nullable()
                                    .exactOptional()
                                    .openapi({ description: 'Shipping estimate date.' }),
                                  tax: z
                                    .int()
                                    .exactOptional()
                                    .openapi({ description: 'Tax in cents.' }),
                                  transitTime: z
                                    .string()
                                    .exactOptional()
                                    .openapi({
                                      description:
                                        'Transit time. For instance, "three business days" is represented `3bd`.',
                                    }),
                                })
                                .openapi({ required: [] }),
                            )
                            .exactOptional()
                            .openapi({ description: 'Information on available SLAs.' }),
                        })
                        .openapi({ required: [] }),
                    )
                    .exactOptional()
                    .openapi({
                      description:
                        'Array with logistics information. Each object in this array corresponds to an object in the `items` array, based on the respective `itemIndex`.',
                    }),
                  selectedAddresses: z
                    .array(
                      z
                        .object({
                          addressId: z
                            .string()
                            .exactOptional()
                            .openapi({ description: 'Address ID.' }),
                          addressType: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description:
                                'Type of address. For example, `Residential` or `Pickup`.',
                            }),
                          city: z
                            .string()
                            .exactOptional()
                            .openapi({ description: 'City of the shipping address.' }),
                          complement: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description:
                                'Complement to the shipping address, in case it applies.',
                            }),
                          country: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description:
                                'Three letter ISO code of the country of the shipping address.',
                            }),
                          geoCoordinates: z
                            .array(z.number())
                            .exactOptional()
                            .openapi({
                              description:
                                'Array containing two floats with geocoordinates, first longitude, then latitude.',
                            }),
                          isDisposable: z
                            .boolean()
                            .exactOptional()
                            .openapi({ description: 'Indicates whether address is disposable.' }),
                          neighborhood: z
                            .string()
                            .exactOptional()
                            .openapi({ description: 'Neighborhood of the shipping address.' }),
                          number: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description:
                                'Number of the building, house or apartment in the shipping address.',
                            }),
                          postalCode: z
                            .string()
                            .exactOptional()
                            .openapi({ description: 'Postal code.' }),
                          receiverName: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description: 'Name of the person who is going to receive the order.',
                            }),
                          reference: z
                            .string()
                            .nullable()
                            .exactOptional()
                            .openapi({
                              description:
                                'Complement that might help locate the shipping address more precisely in case of delivery.',
                            }),
                          state: z
                            .string()
                            .exactOptional()
                            .openapi({ description: 'State of the shipping address.' }),
                          street: z
                            .string()
                            .exactOptional()
                            .openapi({ description: 'Street of the shipping address.' }),
                        })
                        .openapi({ required: [] }),
                    )
                    .exactOptional()
                    .openapi({
                      description:
                        'Array with information on the selected addresses for the order.',
                    }),
                })
                .exactOptional()
                .openapi({
                  description: 'Shipping information pertinent to the order.',
                  required: [],
                }),
              storeId: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({ description: 'ID of the store.' }),
              storePreferencesData: z
                .object({})
                .exactOptional()
                .openapi({
                  description:
                    "Object containing data from the store's configuration (stored in VTEX's License Manager).",
                }),
              subscriptionData: z
                .object({})
                .nullable()
                .exactOptional()
                .openapi({ description: 'Subscription information.' }),
              totalizers: z
                .array(z.any())
                .exactOptional()
                .openapi({
                  description:
                    'Array containing an object for each totalizer for the purchase. Totalizers contain the sum of values for a specific part of the order (e.g. Total item value, Total shipping value).',
                }),
              userProfileId: z
                .string()
                .exactOptional()
                .openapi({ description: 'Unique ID associated with the customer profile.' }),
              userType: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({ description: 'User type.' }),
              value: z
                .int()
                .exactOptional()
                .openapi({
                  description:
                    'Total value of the order without separating cents. For example, $24.99 is represented `2499`.',
                }),
            })
            .openapi({ required: [] }),
          examples: {
            response: {
              value: {
                allowManualPrice: false,
                availableAccounts: [],
                availableAddresses: [
                  {
                    addressId: '666c2e830bd9474ab6f6cc53fb6dd2d2',
                    addressType: 'residential',
                    city: 'Brasília',
                    complement: '15º andar',
                    country: 'BRA',
                    geoCoordinates: [-47.924747467041016, -15.832582473754883],
                    isDisposable: true,
                    neighborhood: 'Copacabana',
                    number: '123',
                    postalCode: '70386000',
                    receiverName: 'Clark Kent',
                    reference: null,
                    state: 'DF',
                    street: 'Rua da minha casa',
                  },
                ],
                canEditData: true,
                clientPreferencesData: { locale: 'pt-BR', optinNewsLetter: false },
                clientProfileData: {
                  corporateDocument: null,
                  corporateName: null,
                  corporatePhone: null,
                  customerClass: null,
                  document: '12345678900',
                  documentType: 'cpf',
                  email: 'clark.kent@example.com',
                  firstName: 'Clark',
                  isCorporate: false,
                  lastName: 'Kent',
                  phone: '+5521998765432',
                  profileCompleteOnLoading: false,
                  profileErrorOnLoading: null,
                  stateInscription: null,
                  tradeName: null,
                },
                commercialConditionData: null,
                customData: null,
                giftRegistryData: null,
                hooksData: null,
                ignoreProfileData: false,
                invoiceData: null,
                isCheckedIn: false,
                itemMetadata: {
                  items: [
                    {
                      assemblyOptions: [],
                      detailUrl: '/chopp-brahma-claro-30l/p',
                      ean: null,
                      id: '2',
                      imageUrl:
                        'http://mystore.vteximg.com.br/arquivos/ids/155400-55-55/30l_v2.png?v=637303412106100000',
                      name: 'Chopp Brahma Claro 30L',
                      productId: '2',
                      refId: 'CBC30L',
                      seller: '1',
                      skuName: 'Chopp Brahma Claro 30L',
                    },
                  ],
                },
                items: [
                  {
                    additionalInfo: {
                      brandId: '2000000',
                      brandName: 'Brahma',
                      dimension: null,
                      offeringInfo: null,
                      offeringType: null,
                      offeringTypeId: null,
                    },
                    assemblies: [],
                    attachmentOfferings: [],
                    attachments: [],
                    availability: 'available',
                    bundleItems: [],
                    components: [],
                    detailUrl: '/chopp-brahma-claro-30l/p',
                    ean: null,
                    id: '2',
                    imageUrl:
                      'http://mystore.vteximg.com.br/arquivos/ids/155400-55-55/30l_v2.png?v=637303412106100000',
                    isGift: false,
                    listPrice: 49900,
                    manualPrice: null,
                    manualPriceAppliedBy: null,
                    manufacturerCode: null,
                    measurementUnit: 'un',
                    modalType: null,
                    name: 'Chopp Brahma Claro 30L',
                    offerings: [],
                    parentAssemblyBinding: null,
                    parentItemIndex: null,
                    preSaleDate: null,
                    price: 32890,
                    priceDefinition: {
                      calculatedSellingPrice: 32890,
                      sellingPrices: [{ quantity: 1, value: 32890 }],
                      total: 32890,
                    },
                    priceTags: [],
                    priceValidUntil: '2022-07-13T18:30:46Z',
                    productCategories: { '1': 'Bebidas' },
                    productCategoryIds: '/1/',
                    productId: '2',
                    productRefId: '',
                    quantity: 1,
                    refId: 'CBC30L',
                    rewardValue: 0,
                    seller: '1',
                    sellerChain: ['1'],
                    sellingPrice: 32890,
                    skuName: 'Chopp Brahma Claro 30L',
                    tax: 0,
                    uniqueId: '9D6E447B3FF64CEDA33B17C01379C119',
                    unitMultiplier: 1,
                  },
                ],
                itemsOrdination: { ascending: true, criteria: 'NAME' },
                loggedIn: false,
                marketingData: {
                  coupon: 'freeshipping',
                  marketingTags: [],
                  utmCampaign: null,
                  utmMedium: null,
                  utmSource: null,
                  utmiCampaign: null,
                  utmiPart: null,
                  utmipage: null,
                },
                messages: [],
                openTextField: null,
                orderFormId: 'ede846222cd44046ba6c638442c3505a',
                paymentData: {
                  giftCards: [],
                  transactions: [
                    {
                      isActive: true,
                      merchantName: 'MYSTORE',
                      payments: [],
                      sharedTransaction: false,
                      transactionId: '296D6D245C17437E823EB77E403FC88D',
                    },
                  ],
                },
                profileProvider: 'VTEX',
                ratesAndBenefitsData: { rateAndBenefitsIdentifiers: [], teaser: [] },
                salesChannel: '1',
                selectableGifts: [],
                sellers: [{ id: '1', logo: '', name: 'lojadobreno' }],
                shippingData: {
                  address: {
                    addressId: 'teste',
                    addressType: 'residential',
                    city: 'Brasília',
                    complement: '15º andar',
                    country: 'BRA',
                    geoCoordinates: [-47.924747467041016, -15.832582473754883],
                    isDisposable: true,
                    neighborhood: 'Copacabana',
                    number: '123',
                    postalCode: '70386000',
                    receiverName: 'Clark Kent',
                    reference: null,
                    state: 'DF',
                    street: 'Rua da minha casa',
                  },
                  availableAddresses: [
                    {
                      addressId: 'teste',
                      addressType: 'residential',
                      city: 'Rio de Janeiro',
                      complement: '15º andar',
                      country: 'BRA',
                      geoCoordinates: [-47.924747467041016, -15.832582473754883],
                      isDisposable: true,
                      neighborhood: 'Copacabana',
                      number: '123',
                      postalCode: '12345000',
                      receiverName: 'Clark Kent',
                      reference: null,
                      state: 'RJ',
                      street: 'Rua da minha casa',
                    },
                  ],
                  logisticsInfo: [
                    {
                      addressId: 'teste',
                      deliveryChannels: [{ id: 'delivery' }, { id: 'pickup-in-point' }],
                      itemId: '2',
                      itemIndex: 0,
                      selectedDeliveryChannel: 'delivery',
                      selectedSla: 'Normal',
                      shipsTo: ['BRA', 'COL', 'USA'],
                      slas: [
                        {
                          availableDeliveryWindows: [],
                          deliveryChannel: 'delivery',
                          deliveryIds: [
                            {
                              courierId: '1',
                              courierName: 'Transportadora',
                              dockId: '1',
                              kitItemDetails: [],
                              quantity: 1,
                              warehouseId: '1_1',
                            },
                          ],
                          deliveryWindow: null,
                          id: 'Normal',
                          listPrice: 1500,
                          lockTTL: '10d',
                          name: 'Normal',
                          pickupDistance: 0,
                          pickupPointId: null,
                          pickupStoreInfo: {
                            additionalInfo: null,
                            address: null,
                            dockId: null,
                            friendlyName: null,
                            isPickupStore: false,
                          },
                          polygonName: null,
                          price: 1500,
                          shippingEstimate: '3bd',
                          shippingEstimateDate: null,
                          tax: 0,
                          transitTime: '3bd',
                        },
                      ],
                    },
                  ],
                  pickupPoints: [],
                  selectedAddresses: [
                    {
                      addressId: 'teste',
                      addressType: 'residential',
                      city: 'Rio de Janeiro',
                      complement: '15º andar',
                      country: 'BRA',
                      geoCoordinates: [-47.924747467041016, -15.832582473754883],
                      isDisposable: true,
                      neighborhood: 'Copacabana',
                      number: '123',
                      postalCode: '12345000',
                      receiverName: 'Clark Kent',
                      reference: null,
                      state: 'RJ',
                      street: 'Rua da minha casa',
                    },
                  ],
                },
                storeId: null,
                storePreferencesData: {},
                subscriptionData: null,
                totalizers: [{ id: 'Items', name: 'Total Items', value: 32890 }],
                userProfileId: 'fb542e51-5488-4c34-8d17-ed8fcf597a94',
                userType: null,
                value: 34390,
              },
            },
          },
        },
      },
      headers: z.object({}),
    },
  },
  security: [],
})

export const putApiCheckoutPubOrderFormOrderFormIdCustomDataAppIdRoute = createRoute({
  method: 'put',
  path: '/api/checkout/pub/orderForm/{orderFormId}/customData/{appId}',
  tags: ['Custom data'],
  summary: 'Set multiple custom field values',
  description:
    'Your account may create `apps`, which contain custom fields, through the [Update orderForm configuration](https://developers.vtex.com/reference/configuration#updateorderformconfiguration) request. The values of these custom fields can then be updated by this request.\n\r\n\rTo do that, you need to inform the ID of the app you created with the configuration API (`appId`).\n\r\n\rIn the body of the request, for each field created in this app (`appFieldName`) you will inform a value (`appFieldValue`).\r\n\r\nThe [orderForm](https://developers.vtex.com/docs/guides/orderform-fields) is the data structure which represents a shopping cart and contains all information pertaining to it. Hence, the `orderFormId` is the identification code of a given cart.',
  operationId: 'SetMultipleCustomFieldValues',
  request: {
    params: z.object({
      orderFormId: z
        .string()
        .openapi({
          param: {
            description: 'ID of the orderForm that will receive the new custom field values.',
            in: 'path',
            name: 'orderFormId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      appId: z
        .string()
        .openapi({
          param: {
            description: 'ID of the app created with the configuration API.',
            in: 'path',
            name: 'appId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
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
    body: {
      content: {
        'application/json': {
          schema: z
            .looseObject({})
            .openapi({ description: 'Here you must add the pairs of Field Name and Field Value.' }),
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
          schema: z.any(),
          example: {
            allowManualPrice: false,
            canEditData: true,
            checkedInPickupPointId: null,
            clientPreferencesData: { locale: 'pt-BR', optinNewsLetter: null },
            clientProfileData: null,
            commercialConditionData: null,
            customData: {
              customApps: [
                {
                  fields: { testField1: 'testValue1', testField2: 'testValue2' },
                  id: 'abcd',
                  major: 1,
                },
              ],
            },
            giftRegistryData: null,
            hooksData: null,
            ignoreProfileData: false,
            invoiceData: null,
            isCheckedIn: false,
            itemMetadata: {
              items: [
                {
                  assemblyOptions: [],
                  detailUrl: '/racao-royal-canin-feline-urinary/p',
                  ean: '123456789',
                  id: '1',
                  imageUrl:
                    'http://lojadobreno.vteximg.com.br/arquivos/ids/155450-55-55/Racao-Royal-Canin-Feline-Urinary-SO.jpg?v=637139444438700000',
                  name: 'Ração Royal Canin Feline Urinary 500g',
                  productId: '1',
                  refId: '0001',
                  seller: '1',
                  skuName: 'Ração Royal Canin Feline Urinary 500g',
                },
              ],
            },
            items: [
              {
                additionalInfo: {
                  brandId: '2000000',
                  brandName: 'Royal Canin',
                  offeringInfo: null,
                  offeringType: null,
                  offeringTypeId: null,
                },
                assemblies: [],
                attachmentOfferings: [],
                attachments: [],
                availability: 'available',
                bundleItems: [],
                components: [],
                detailUrl: '/racao-royal-canin-feline-urinary/p',
                ean: '123456789',
                id: '1',
                imageUrl:
                  'http://lojadobreno.vteximg.com.br/arquivos/ids/155450-55-55/Racao-Royal-Canin-Feline-Urinary-SO.jpg?v=637139444438700000',
                isGift: false,
                listPrice: 30000,
                manualPrice: 10000,
                manufacturerCode: null,
                measurementUnit: 'un',
                modalType: null,
                name: 'Ração Royal Canin Feline Urinary 500g',
                offerings: [],
                parentAssemblyBinding: null,
                parentItemIndex: null,
                preSaleDate: null,
                price: 15000,
                priceTags: [
                  {
                    identifier: null,
                    isPercentual: false,
                    name: 'DISCOUNT@MANUALPRICE',
                    rawValue: -50,
                    value: -5000,
                  },
                ],
                priceValidUntil: '2021-02-27T14:59:00.8288784Z',
                productCategories: { '1': 'Alimentação', '10': 'Ração Seca' },
                productCategoryIds: '/1/10/',
                productId: '1',
                productRefId: '',
                quantity: 1,
                refId: '0001',
                rewardValue: 0,
                seller: '1',
                sellerChain: ['1'],
                sellingPrice: 10000,
                skuName: 'Ração Royal Canin Feline Urinary 500g',
                tax: 0,
                uniqueId: 'E0F2B7AF5CD74D668F1E27537206912C',
                unitMultiplier: 1,
              },
            ],
            itemsOrdination: null,
            loggedIn: false,
            marketingData: null,
            messages: [],
            openTextField: null,
            orderFormId: 'ede846222cd44046ba6c638442c3505a',
            paymentData: {
              availableAccounts: [],
              availableTokens: [],
              giftCardMessages: [],
              giftCards: [],
              installmentOptions: [
                {
                  bin: null,
                  installments: [
                    {
                      count: 1,
                      hasInterestRate: false,
                      interestRate: 0,
                      sellerMerchantInstallments: [
                        {
                          count: 1,
                          hasInterestRate: false,
                          id: 'LOJADOBRENO',
                          interestRate: 0,
                          total: 10000,
                          value: 10000,
                        },
                      ],
                      total: 10000,
                      value: 10000,
                    },
                    {
                      count: 2,
                      hasInterestRate: false,
                      interestRate: 0,
                      sellerMerchantInstallments: [
                        {
                          count: 2,
                          hasInterestRate: false,
                          id: 'LOJADOBRENO',
                          interestRate: 0,
                          total: 10000,
                          value: 5000,
                        },
                      ],
                      total: 10000,
                      value: 5000,
                    },
                  ],
                  paymentGroupName: null,
                  paymentName: null,
                  paymentSystem: '2',
                  value: 10000,
                },
              ],
              paymentSystems: [
                {
                  availablePayments: null,
                  description: null,
                  dueDate: '2020-03-05T16:42:31.7836281Z',
                  groupName: 'creditCardPaymentGroup',
                  id: 2,
                  isCustom: false,
                  name: 'Visa',
                  requiresAuthentication: false,
                  requiresDocument: false,
                  stringId: '2',
                  template: 'creditCardPaymentGroup-template',
                  validator: {
                    cardCodeMask: '999',
                    cardCodeRegex: '^[0-9]{3}$',
                    mask: '9999 9999 9999 9999',
                    regex: '^4[0-9]{15}$',
                    useBillingAddress: true,
                    useCardHolderName: true,
                    useCvv: true,
                    useExpirationDate: true,
                    weights: [2, 1, 2, 1],
                  },
                },
              ],
              payments: [],
            },
            ratesAndBenefitsData: { rateAndBenefitsIdentifiers: [], teaser: [] },
            salesChannel: '1',
            selectableGifts: [],
            sellers: [{ id: '1', logo: '', name: 'lojadobreno' }],
            shippingData: {
              address: null,
              availableAddresses: [],
              logisticsInfo: [
                {
                  addressId: null,
                  deliveryChannels: [{ id: 'pickup-in-point' }, { id: 'delivery' }],
                  itemId: '1',
                  itemIndex: 0,
                  selectedDeliveryChannel: 'delivery',
                  selectedSla: null,
                  shipsTo: ['BRA'],
                  slas: [],
                },
              ],
              pickupPoints: [],
              selectedAddresses: [],
            },
            storeId: null,
            storePreferencesData: {
              countryCode: 'BRA',
              currencyCode: 'BRL',
              currencyFormatInfo: {
                currencyDecimalDigits: 2,
                currencyDecimalSeparator: ',',
                currencyGroupSeparator: '.',
                currencyGroupSize: 3,
                startsWithCurrencySymbol: true,
              },
              currencyLocale: 1046,
              currencySymbol: 'R$',
              saveUserData: true,
              timeZone: 'E. South America Standard Time',
            },
            subscriptionData: null,
            totalizers: [
              { id: 'Items', name: 'Total dos Itens', value: 15000 },
              { id: 'Discounts', name: 'Total dos Descontos', value: -5000 },
            ],
            userProfileId: null,
            userType: null,
            value: 10000,
          },
        },
      },
    },
  },
  security: [],
})

export const putApiCheckoutPubOrderFormOrderFormIdCustomDataAppIdAppFieldNameRoute = createRoute({
  method: 'put',
  path: '/api/checkout/pub/orderForm/{orderFormId}/customData/{appId}/{appFieldName}',
  tags: ['Custom data'],
  summary: 'Set single custom field value',
  description:
    'Your account may create `apps`, which contain custom fields, through the [Update orderForm configuration](https://developers.vtex.com/reference#updateorderformconfiguration) request. The value of a specific custom field can then be updated by this request.\n\r\n\rTo do that, you need to inform in the URL the ID of the app you created with the configuration API (`appId`).\n\r\n\rIn the body of the request, you will inform the new value (`appFieldValue`, passed through the body) of the specific field created in this app (identified by the `appFieldName` parameter, passed through the URL).\r\n\r\nThe [orderForm](https://developers.vtex.com/docs/guides/orderform-fields) is the data structure which represents a shopping cart and contains all information pertaining to it. Hence, the `orderFormId` is the identification code of a given cart.',
  operationId: 'SetSingleCustomFieldValue',
  request: {
    params: z.object({
      orderFormId: z
        .string()
        .openapi({
          param: {
            description: "The ID of the orderForm whose custom field's value you want to change.",
            in: 'path',
            name: 'orderFormId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      appId: z
        .string()
        .openapi({
          param: {
            description:
              'ID of the app created through the Update orderForm Configuration endpoint.',
            in: 'path',
            name: 'appId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      appFieldName: z
        .string()
        .openapi({
          param: {
            description:
              "Name of the app's field created through the Update orderForm Configuration endpoint.",
            in: 'path',
            name: 'appFieldName',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
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
    body: {
      description: '',
      content: {
        'application/json': {
          schema: SetsinglecustomfieldvalueRequestSchema,
          example: { value: '{{appFieldValue}}' },
        },
      },
      required: true,
    },
  },
  responses: { 200: { description: '', content: {}, headers: z.object({}) } },
  security: [],
})

export const deleteApiCheckoutPubOrderFormOrderFormIdCustomDataAppIdAppFieldNameRoute = createRoute(
  {
    method: 'delete',
    path: '/api/checkout/pub/orderForm/{orderFormId}/customData/{appId}/{appFieldName}',
    tags: ['Custom data'],
    summary: 'Remove single custom field value',
    description:
      'Your account may create `apps`, which contain custom fields, through the [Update orderForm configuration](https://developers.vtex.com/reference#updateorderformconfiguration) request. The value of a specific custom field can be removed by this request.\n\r\n\rTo do that, you need to inform in the URL the ID of the app you created with the configuration API (`appId`).\n\r\n\rYou also need to iform the specific field created in this app (identified by the `appFieldName` parameter, also passed through the URL) whose value you want to remove.',
    operationId: 'Removesinglecustomfieldvalue',
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
        orderFormId: z
          .string()
          .openapi({
            param: {
              description:
                'The ID of the orderForm from which you want to remove the custom field value.',
              in: 'path',
              name: 'orderFormId',
              required: true,
              schema: { type: 'string' },
              style: 'simple',
            },
          }),
        appId: z
          .string()
          .openapi({
            param: {
              description:
                'ID of the app created through the Update orderForm Configuration endpoint.',
              in: 'path',
              name: 'appId',
              required: true,
              schema: { type: 'string' },
              style: 'simple',
            },
          }),
        appFieldName: z
          .string()
          .openapi({
            param: {
              description:
                "Name of the app's field created through the Update orderForm Configuration endpoint and which will be deleted.",
              in: 'path',
              name: 'appFieldName',
              required: true,
              schema: { type: 'string' },
              style: 'simple',
            },
          }),
      }),
    },
    responses: { 200: { description: 'OK', content: {} } },
    security: [],
  },
)

export const getApiCheckoutPubOrderFormOrderFormIdInstallmentsRoute = createRoute({
  method: 'get',
  path: '/api/checkout/pub/orderForm/{orderFormId}/installments',
  tags: ['Shopping cart'],
  summary: 'Cart installments',
  description:
    'Retrieves possible amount of installments and respective values for a given cart with a given payment method.\r\n\r\nThe [orderForm](https://developers.vtex.com/docs/guides/orderform-fields) is the data structure which represents a shopping cart and contains all information pertaining to it. Hence, the `orderFormId` is the identification code of a given cart.\n\r\n\rThis endpoint can be used to get the installment options for only one payment method at a time.\n\r\n\rThis endpoint should be called only after the selected `orderForm` already has a `paymentData`.',
  operationId: 'GetCartInstallments',
  request: {
    params: z.object({
      orderFormId: z
        .string()
        .openapi({
          param: {
            description: 'ID of the `orderForm` to be consulted for installments.',
            in: 'path',
            name: 'orderFormId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      paymentSystem: z
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
            description: 'ID of the payment method to be consulted for installments.',
            explode: true,
            in: 'query',
            name: 'paymentSystem',
            required: true,
            schema: { type: 'integer' },
            style: 'form',
          },
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
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
  security: [],
})

export const postApiCheckoutPubOrderFormOrderFormIdItemsRoute = createRoute({
  method: 'post',
  path: '/api/checkout/pub/orderForm/{orderFormId}/items',
  tags: ['Shopping cart'],
  summary: 'Add cart items',
  description:
    'Use this request to add a new item to the shopping cart.\r\n\r\nThe [orderForm](https://developers.vtex.com/docs/guides/orderform-fields) is the data structure which represents a shopping cart and contains all information pertaining to it. Hence, the `orderFormId` is the identification code of a given cart.\n\r\n\r> This request has a time out of 45 seconds.',
  operationId: 'Items',
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
      orderFormId: z
        .string()
        .default('ede846222cd44046ba6c638442c3505a')
        .openapi({
          param: {
            description:
              'ID of the orderForm corresponding to the cart in which the new item will be added.',
            in: 'path',
            name: 'orderFormId',
            required: true,
            schema: { default: 'ede846222cd44046ba6c638442c3505a', type: 'string' },
            style: 'simple',
          },
        }),
    }),
    query: z.object({
      allowedOutdatedData: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.any()),
        )
        .default(['paymentData'])
        .exactOptional()
        .openapi({
          param: {
            description:
              'In order to optimize performance, this parameter allows some information to not be updated when there are changes in the minicart. For instance, if a shopper adds another unit of a given SKU to the cart, it may not be necessary to recalculate payment information, which could impact performance.\n\r\n\rThis array accepts strings and currently the only possible value is `”paymentData”`.',
            in: 'query',
            name: 'allowedOutdatedData',
            required: false,
            schema: { default: ['paymentData'], items: {}, type: 'array' },
            style: 'form',
          },
        }),
    }),
    body: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .object({
              orderItems: z
                .array(
                  z
                    .object({
                      id: z
                        .string()
                        .openapi({
                          description: 'The ID of the SKU in VTEX platform.',
                          example: '2005',
                        }),
                      index: z
                        .int()
                        .openapi({
                          description: 'The position of the item in the array.',
                          example: 0,
                        }),
                      price: z
                        .int()
                        .exactOptional()
                        .openapi({
                          description:
                            'Price of the item in cents. Send this value in case you want to make a bulk price change.',
                          example: 1099,
                        }),
                      quantity: z
                        .int32()
                        .openapi({
                          description: 'The quantity of the item (SKU) in the cart.',
                          example: 3,
                        }),
                      seller: z
                        .string()
                        .openapi({
                          description: 'The seller responsible for the SKU.',
                          example: '1',
                        }),
                    })
                    .openapi({ required: ['quantity', 'seller', 'id', 'index'] }),
                )
                .exactOptional()
                .openapi({
                  description:
                    'Array containing the cart items. Each object inside this array corresponds to a different item.',
                }),
            })
            .openapi({ required: [] }),
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
              allowManualPrice: z
                .boolean()
                .exactOptional()
                .openapi({ description: 'Permission to modify item price manually.' }),
              availableAccounts: z
                .array(z.string())
                .exactOptional()
                .openapi({ description: 'Available accounts.' }),
              availableAddresses: z
                .array(
                  z
                    .object({
                      addressId: z.string().exactOptional().openapi({ description: 'Address ID.' }),
                      addressType: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'Address type.' }),
                      city: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'City of the address.' }),
                      complement: z
                        .string()
                        .nullable()
                        .exactOptional()
                        .openapi({ description: 'Complement to the address.' }),
                      country: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'Country of the address. ISO three-letter code.' }),
                      geoCoordinates: z
                        .array(z.number())
                        .exactOptional()
                        .openapi({
                          description:
                            'Array containing two floats with geocoordinates, first longitude, then latitude.',
                        }),
                      isDisposable: z
                        .boolean()
                        .exactOptional()
                        .openapi({ description: 'Indicates whether address is disposable.' }),
                      neighborhood: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'Neighborhood of the address.' }),
                      number: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'Number of the address.' }),
                      receiverName: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'Name of the receiver.' }),
                      reference: z
                        .string()
                        .nullable()
                        .exactOptional()
                        .openapi({
                          description: 'Reference that may help in the location of the address.',
                        }),
                      state: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'State of the address.' }),
                      street: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'Street of the address.' }),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional()
                .openapi({ description: 'Information on each available address.' }),
              canEditData: z
                .boolean()
                .exactOptional()
                .openapi({ description: 'Data can be edited.' }),
              clientPreferencesData: z
                .object({
                  locale: z
                    .string()
                    .exactOptional()
                    .openapi({ description: "Client's locale. Examples: `pt-BR` and `en-US`." }),
                  optinNewsLetter: z
                    .boolean()
                    .default(false)
                    .exactOptional()
                    .openapi({
                      description:
                        '`true` if the client opted to receive newsletter from the store.',
                    }),
                })
                .exactOptional()
                .openapi({
                  description:
                    'Object containing preferences from the client who placed the order.',
                  required: [],
                }),
              clientProfileData: z
                .object({
                  corporateDocument: z
                    .string()
                    .nullable()
                    .exactOptional()
                    .openapi({
                      description: 'Corporate document, if the customer is a legal entity.',
                    }),
                  corporateName: z
                    .string()
                    .nullable()
                    .exactOptional()
                    .openapi({ description: 'Company name, if the customer is a legal entity.' }),
                  corporatePhone: z
                    .string()
                    .nullable()
                    .exactOptional()
                    .openapi({
                      description: 'Corporate phone number, if the customer is a legal entity.',
                    }),
                  customerClass: z
                    .string()
                    .nullable()
                    .exactOptional()
                    .openapi({ description: 'Customer class.' }),
                  document: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'Document informed by the customer.' }),
                  documentType: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'Type of the document informed by the customer.' }),
                  email: z.string().exactOptional().openapi({ description: 'Email address.' }),
                  firstName: z.string().exactOptional().openapi({ description: 'First name.' }),
                  isCorporate: z
                    .boolean()
                    .exactOptional()
                    .openapi({ description: 'Indicates whether the customer is a legal entity.' }),
                  lastName: z.string().exactOptional().openapi({ description: 'Last name.' }),
                  phone: z.string().exactOptional().openapi({ description: 'Phone number.' }),
                  profileCompleteOnLoading: z
                    .boolean()
                    .exactOptional()
                    .openapi({ description: 'Indicates whether profile is complete on loading.' }),
                  profileErrorOnLoading: z
                    .boolean()
                    .nullable()
                    .exactOptional()
                    .openapi({
                      description: 'Indicates whether profile presents error on loading.',
                    }),
                  stateInscription: z
                    .string()
                    .nullable()
                    .exactOptional()
                    .openapi({
                      description: 'State inscription, if the customer is a legal entity.',
                    }),
                  tradeName: z
                    .string()
                    .nullable()
                    .exactOptional()
                    .openapi({ description: 'Trade name, if the customer is a legal entity.' }),
                })
                .exactOptional()
                .openapi({ description: "Customer's profile information.", required: [] }),
              commercialConditionData: z
                .object({})
                .nullable()
                .exactOptional()
                .openapi({ description: 'Object containing commercial condition information.' }),
              customData: z
                .object({})
                .nullable()
                .exactOptional()
                .openapi({ description: 'Customer additional information.' }),
              giftRegistryData: z
                .object({})
                .nullable()
                .exactOptional()
                .openapi({ description: 'Gift registry list information.' }),
              hooksData: z
                .object({})
                .nullable()
                .exactOptional()
                .openapi({ description: 'Hooks information.' }),
              ignoreProfileData: z
                .boolean()
                .exactOptional()
                .openapi({ description: 'Ignore customer profile data.' }),
              invoiceData: z
                .object({})
                .nullable()
                .exactOptional()
                .openapi({
                  description: "Object containing information pertinent to the order's invoice.",
                }),
              isCheckedIn: z
                .boolean()
                .exactOptional()
                .openapi({ description: 'Indicates whether order is checked in.' }),
              itemMetadata: z
                .object({
                  items: z
                    .array(
                      z
                        .object({
                          detailUrl: z
                            .string()
                            .exactOptional()
                            .openapi({ description: 'Detail URL.' }),
                          ean: z
                            .string()
                            .nullable()
                            .exactOptional()
                            .openapi({ description: 'European Article Number.' }),
                          id: z.string().exactOptional().openapi({ description: 'Item ID.' }),
                          imageUrl: z
                            .string()
                            .exactOptional()
                            .openapi({ description: 'Image URL.' }),
                          name: z
                            .string()
                            .exactOptional()
                            .openapi({ description: 'Product name.' }),
                          productId: z
                            .string()
                            .exactOptional()
                            .openapi({ description: 'Product ID.' }),
                          refId: z.string().exactOptional().openapi({ description: 'Ref ID.' }),
                          seller: z.string().exactOptional().openapi({ description: 'Seller.' }),
                          skuName: z.string().exactOptional().openapi({ description: 'SKU name.' }),
                        })
                        .openapi({ required: [] }),
                    )
                    .exactOptional()
                    .openapi({
                      description: 'List of objects containing metadata on each item in the order.',
                    }),
                })
                .exactOptional()
                .openapi({ description: 'Item metadata.', required: [] }),
              items: z
                .array(
                  z
                    .object({
                      additionalInfo: z
                        .object({
                          brandId: z.string().exactOptional().openapi({ description: 'Brand ID.' }),
                          brandName: z
                            .string()
                            .exactOptional()
                            .openapi({ description: 'Brand name.' }),
                          dimension: z
                            .string()
                            .nullable()
                            .exactOptional()
                            .openapi({ description: 'Dimension.' }),
                          offeringInfo: z
                            .string()
                            .nullable()
                            .exactOptional()
                            .openapi({ description: 'Offering information.' }),
                          offeringType: z
                            .string()
                            .nullable()
                            .exactOptional()
                            .openapi({ description: 'Offering type.' }),
                          offeringTypeId: z
                            .string()
                            .nullable()
                            .exactOptional()
                            .openapi({ description: 'Offering type ID.' }),
                        })
                        .exactOptional()
                        .openapi({ description: 'Additional information.', required: [] }),
                      attachments: z
                        .array(z.string())
                        .exactOptional()
                        .openapi({ description: 'Array containing information on attachments.' }),
                      availability: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'Availability.' }),
                      bundleItems: z
                        .array(
                          z
                            .object({
                              id: z
                                .int()
                                .exactOptional()
                                .openapi({ description: 'Service identifier.' }),
                              name: z
                                .string()
                                .exactOptional()
                                .openapi({ description: 'Service name.' }),
                              price: z
                                .int()
                                .exactOptional()
                                .openapi({ description: 'Service price in cents.' }),
                              type: z
                                .string()
                                .exactOptional()
                                .openapi({ description: 'Service type.' }),
                            })
                            .openapi({ required: [] }),
                        )
                        .exactOptional()
                        .openapi({
                          description:
                            'Information on services sold along with the SKU. Example: a gift package.',
                        }),
                      detailUrl: z.string().exactOptional().openapi({ description: 'Detail URL.' }),
                      ean: z
                        .string()
                        .nullable()
                        .exactOptional()
                        .openapi({ description: 'European Article Number.' }),
                      id: z.string().exactOptional().openapi({ description: 'ID of the item.' }),
                      imageUrl: z.string().exactOptional().openapi({ description: 'Image URL.' }),
                      isGift: z
                        .boolean()
                        .exactOptional()
                        .openapi({ description: 'Indicates whether item is a gift.' }),
                      listPrice: z
                        .int()
                        .exactOptional()
                        .openapi({ description: 'List price in cents.' }),
                      manualPrice: z
                        .int()
                        .nullable()
                        .exactOptional()
                        .openapi({ description: 'Manual price in cents.' }),
                      manualPriceAppliedBy: z
                        .string()
                        .nullable()
                        .exactOptional()
                        .openapi({
                          description: 'User that applied the manual price, if that is the case.',
                        }),
                      manufacturerCode: z
                        .string()
                        .nullable()
                        .exactOptional()
                        .openapi({ description: 'Manufacturer code.' }),
                      measurementUnit: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'Measurement unit.' }),
                      modalType: z
                        .string()
                        .nullable()
                        .exactOptional()
                        .openapi({ description: 'Modal type.' }),
                      name: z.string().exactOptional().openapi({ description: 'Product name.' }),
                      parentAssemblyBinding: z
                        .string()
                        .nullable()
                        .exactOptional()
                        .openapi({ description: 'Parent assembly binding.' }),
                      parentItemIndex: z
                        .int()
                        .nullable()
                        .exactOptional()
                        .openapi({ description: 'Parent item index.' }),
                      preSaleDate: z
                        .string()
                        .nullable()
                        .exactOptional()
                        .openapi({ description: 'Presale date.' }),
                      price: z.int().exactOptional().openapi({ description: 'Price in cents.' }),
                      priceDefinition: z
                        .object({
                          calculatedSellingPrice: z
                            .int()
                            .exactOptional()
                            .openapi({
                              description: "Item's calculated unitary selling price in cents.",
                            }),
                          sellingPrices: z
                            .array(
                              z
                                .object({
                                  quantity: z
                                    .int()
                                    .exactOptional()
                                    .openapi({
                                      description:
                                        'Rounding quantity, meaning how many items are rounded to this value.',
                                    }),
                                  value: z
                                    .int()
                                    .exactOptional()
                                    .openapi({
                                      description: 'Value in cents for that specific rounding.',
                                    }),
                                })
                                .openapi({ required: [] }),
                            )
                            .exactOptional()
                            .openapi({
                              description:
                                'Array of objects, each containing value (in cents) and quantity for the different rounding instances that can be combined to form the correctly rounded total.',
                            }),
                          total: z
                            .int()
                            .exactOptional()
                            .openapi({
                              description: 'Total value for all units of the item in cents.',
                            }),
                        })
                        .exactOptional()
                        .openapi({
                          description: 'Price information for all units of a specific item.',
                          required: [],
                        }),
                      priceTags: z
                        .array(
                          z
                            .object({
                              identifier: z
                                .string()
                                .exactOptional()
                                .openapi({ description: 'Price tag identifier.' }),
                              isPercentual: z
                                .boolean()
                                .exactOptional()
                                .openapi({
                                  description:
                                    'Indicates whether price tag value is applied through a percentage.',
                                }),
                              name: z
                                .string()
                                .exactOptional()
                                .openapi({ description: 'Price tag name.' }),
                              rawValue: z
                                .int()
                                .exactOptional()
                                .openapi({ description: 'Price tag raw value.' }),
                              value: z
                                .int()
                                .exactOptional()
                                .openapi({ description: 'Price tag value.' }),
                            })
                            .openapi({ required: [] }),
                        )
                        .exactOptional()
                        .openapi({
                          description:
                            'Array of price tags, each of which, modifies the price in some way, like discounts or rates that apply to the item in the context of the order.',
                        }),
                      priceValidUntil: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'Price expiration date and time.' }),
                      productCategories: z
                        .object({
                          '{ID}': z
                            .string()
                            .exactOptional()
                            .openapi({
                              description:
                                'Product category corresponding to the ID in the field key.',
                            }),
                        })
                        .exactOptional()
                        .openapi({
                          description:
                            'Object, where each field is an ID from `productCategoryIds`.',
                          required: [],
                        }),
                      productCategoryIds: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'Product category IDs.' }),
                      productId: z.string().exactOptional().openapi({ description: 'Product ID.' }),
                      productRefId: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'Product Ref ID.' }),
                      quantity: z.int().exactOptional().openapi({ description: 'Quantity.' }),
                      refId: z.string().exactOptional().openapi({ description: 'Ref ID.' }),
                      rewardValue: z
                        .int()
                        .exactOptional()
                        .openapi({ description: 'Reward value in cents.' }),
                      seller: z.string().exactOptional().openapi({ description: 'Seller.' }),
                      sellerChain: z
                        .array(z.string().openapi({ description: 'Seller.' }))
                        .exactOptional()
                        .openapi({
                          description:
                            'Sellers involved in the chain. The list should contain only one seller, unless it is a [Multilevel Omnichannel Inventory](https://help.vtex.com/en/tutorial/multilevel-omnichannel-inventory--7M1xyCZWUyCB7PcjNtOyw4) order.',
                        }),
                      sellingPrice: z
                        .int()
                        .exactOptional()
                        .openapi({
                          description:
                            'Selling price in cents. Note that this field may be subject to rounding discrepancies. We recommend retrieving data from the `priceDefinition` data structure instead.',
                        }),
                      skuName: z.string().exactOptional().openapi({ description: 'SKU name.' }),
                      tax: z.int().exactOptional().openapi({ description: 'Tax value in cents.' }),
                      uniqueId: z.string().exactOptional().openapi({ description: 'Unique ID.' }),
                      unitMultiplier: z
                        .int()
                        .exactOptional()
                        .openapi({ description: 'Unit multiplier.' }),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional()
                .openapi({ description: 'Information on each item in the order.' }),
              itemsOrdination: z
                .object({
                  ascending: z
                    .boolean()
                    .exactOptional()
                    .openapi({ description: 'Indicates whether the ordering is ascending.' }),
                  criteria: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'Criteria adopted to order the items in the list.' }),
                })
                .exactOptional()
                .openapi({
                  description:
                    'Object containing information about the ordering of items within the orderForm.',
                  required: [],
                }),
              loggedIn: z
                .boolean()
                .exactOptional()
                .openapi({ description: 'Indicates whether the user is logged into the store.' }),
              marketingData: z
                .object({
                  coupon: z
                    .string()
                    .default('free-shipping')
                    .exactOptional()
                    .openapi({
                      description:
                        'Sending an existing coupon code in this field will return the corresponding discount in the purchase. Use the [cart simulation](https://developers.vtex.com/vtex-rest-api/reference/orderform#orderformsimulation) request to check which coupons might apply before placing the order.',
                    }),
                  utmCampaign: z
                    .string()
                    .default('Black friday')
                    .exactOptional()
                    .openapi({ description: 'UTM campaign' }),
                  utmMedium: z
                    .string()
                    .default('CPC')
                    .exactOptional()
                    .openapi({ description: 'UTM medium.' }),
                  utmSource: z
                    .string()
                    .default('Facebook')
                    .exactOptional()
                    .openapi({ description: 'UTM source.' }),
                  utmiCampaign: z
                    .string()
                    .nullable()
                    .default('utmi_campaign-example')
                    .exactOptional()
                    .openapi({ description: 'utmi_campaign (internal utm).' }),
                  utmiPage: z
                    .string()
                    .nullable()
                    .default('utmi_page-example')
                    .exactOptional()
                    .openapi({ description: 'utmi_page (internal utm).' }),
                  utmiPart: z
                    .string()
                    .nullable()
                    .default('utmi_part-example')
                    .exactOptional()
                    .openapi({ description: 'utmi_part (internal utm).' }),
                })
                .exactOptional()
                .openapi({
                  description:
                    'Object containing promotion data such as coupon tracking information and internal or external UTMs.',
                  required: [],
                }),
              messages: z
                .array(z.any())
                .exactOptional()
                .openapi({
                  description:
                    'Array containing an object for each message generated by our servers while processing the request.',
                }),
              openTextField: z
                .string()
                .nullable()
                .default('open-text-example')
                .exactOptional()
                .openapi({
                  description:
                    'Optional field meant to hold additional information about the order. We recommend using this field for text, not data formats such as `JSON` even if escaped. For that purpose, see [Creating customizable fields](https://developers.vtex.com/vtex-rest-api/docs/creating-customizable-fields-in-the-cart-with-checkout-api-1).',
                }),
              orderFormId: z
                .string()
                .exactOptional()
                .openapi({ description: 'ID of the orderForm corresponding to a specific cart.' }),
              paymentData: z
                .object({
                  giftCards: z
                    .array(
                      z
                        .object({
                          balance: z
                            .int()
                            .exactOptional()
                            .openapi({ description: 'Gift card balance in cents.' }),
                          id: z.string().exactOptional().openapi({ description: 'Gift card ID.' }),
                          inUse: z
                            .boolean()
                            .exactOptional()
                            .openapi({ description: 'Indicates whether gift card is in use.' }),
                          isSpecialCard: z
                            .boolean()
                            .exactOptional()
                            .openapi({ description: 'Indicates whether gift card is special.' }),
                          name: z
                            .string()
                            .exactOptional()
                            .openapi({ description: 'Gift card name.' }),
                          redemptionCode: z
                            .string()
                            .exactOptional()
                            .openapi({ description: 'Gift card redemption code.' }),
                          value: z
                            .int()
                            .exactOptional()
                            .openapi({ description: 'Gift card value in cents.' }),
                        })
                        .openapi({ required: [] }),
                    )
                    .exactOptional()
                    .openapi({ description: 'Gift card information, if it applies to the order.' }),
                  transactions: z
                    .array(
                      z
                        .object({
                          isActive: z
                            .boolean()
                            .exactOptional()
                            .openapi({ description: 'Indicates whether transaction is active.' }),
                          merchantName: z
                            .string()
                            .exactOptional()
                            .openapi({ description: 'Merchant name.' }),
                          payments: z
                            .array(
                              z
                                .object({
                                  accountId: z
                                    .string()
                                    .exactOptional()
                                    .openapi({ description: 'Account ID.' }),
                                  bin: z.string().exactOptional().openapi({ description: 'Bin.' }),
                                  installments: z
                                    .int()
                                    .exactOptional()
                                    .openapi({ description: 'Number of installments.' }),
                                  paymentSystem: z
                                    .string()
                                    .exactOptional()
                                    .openapi({ description: 'Payment system.' }),
                                  referenceValue: z
                                    .int()
                                    .exactOptional()
                                    .openapi({
                                      description:
                                        'Reference value for calculating interest rates, in case it applies. Displayed in cents.',
                                    }),
                                  value: z
                                    .int()
                                    .exactOptional()
                                    .openapi({
                                      description:
                                        'Value including interest, in case it applies. Displayed in cents.',
                                    }),
                                })
                                .openapi({ required: [] }),
                            )
                            .exactOptional()
                            .openapi({ description: 'Information on each payment.' }),
                          sharedTransaction: z
                            .boolean()
                            .exactOptional()
                            .openapi({ description: 'Indicates whather transaction is shared.' }),
                          transactionId: z
                            .string()
                            .exactOptional()
                            .openapi({ description: 'Transaction ID.' }),
                        })
                        .openapi({ required: [] }),
                    )
                    .exactOptional()
                    .openapi({
                      description: 'Information on each transaction pertinent to the order.',
                    }),
                })
                .exactOptional()
                .openapi({ description: "Information on the order's payment.", required: [] }),
              profileProvider: z
                .string()
                .exactOptional()
                .openapi({ description: 'Profile provider.' }),
              ratesAndBenefitsData: z
                .object({
                  rateAndBenefitsIdentifiers: z
                    .array(z.string())
                    .exactOptional()
                    .openapi({ description: 'List with rates and benefits identifiers.' }),
                  teaser: z
                    .array(z.string())
                    .exactOptional()
                    .openapi({ description: 'List with rates and benefits teasers.' }),
                })
                .exactOptional()
                .openapi({
                  description: 'Information on rates and benefits that apply to the order.',
                  required: [],
                }),
              salesChannel: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Attribute created by the seller, in their VTEX store configuration.',
                }),
              selectableGifts: z
                .array(z.any())
                .exactOptional()
                .openapi({
                  description: 'Array containing the data of the item selected as a gift.',
                }),
              sellers: z
                .array(
                  z
                    .object({
                      id: z.string().exactOptional().openapi({ description: 'Seller ID.' }),
                      logo: z
                        .string()
                        .nullable()
                        .exactOptional()
                        .openapi({ description: 'Seller logo.' }),
                      name: z.string().exactOptional().openapi({ description: 'Seller name.' }),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional()
                .openapi({ description: 'Information on each seller.' }),
              shippingData: z
                .object({
                  address: z
                    .object({
                      addressId: z.string().exactOptional().openapi({ description: 'Address ID.' }),
                      addressType: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description: 'Type of address. For example, `Residential` or `Pickup`.',
                        }),
                      city: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'City of the shipping address.' }),
                      complement: z
                        .string()
                        .nullable()
                        .exactOptional()
                        .openapi({
                          description: 'Complement to the shipping address, in case it applies.',
                        }),
                      country: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            'Three letter ISO code of the country of the shipping address.',
                        }),
                      geoCoordinates: z
                        .array(z.number())
                        .exactOptional()
                        .openapi({
                          description:
                            'Array containing two floats with geocoordinates, first longitude, then latitude.',
                        }),
                      isDisposable: z
                        .boolean()
                        .exactOptional()
                        .openapi({ description: 'Indicates whether address is disposable.' }),
                      neighborhood: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'Neighborhood of the shipping address.' }),
                      number: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            'Number of the building, house or apartment in the shipping address.',
                        }),
                      postalCode: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'Postal code.' }),
                      receiverName: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description: 'Name of the person who is going to receive the order.',
                        }),
                      reference: z
                        .string()
                        .nullable()
                        .exactOptional()
                        .openapi({
                          description:
                            'Complement that might help locate the shipping address more precisely in case of delivery.',
                        }),
                      state: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'State of the shipping address.' }),
                      street: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'Street of the shipping address.' }),
                    })
                    .exactOptional()
                    .openapi({ description: 'Address information.', required: [] }),
                  availableAddresses: z
                    .array(
                      z
                        .object({
                          addressId: z
                            .string()
                            .exactOptional()
                            .openapi({ description: 'Address ID.' }),
                          addressType: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description:
                                'Type of address. For example, `Residential` or `Pickup`.',
                            }),
                          city: z
                            .string()
                            .exactOptional()
                            .openapi({ description: 'City of the shipping address.' }),
                          complement: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description:
                                'Complement to the shipping address, in case it applies.',
                            }),
                          country: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description:
                                'Three letter ISO code of the country of the shipping address.',
                            }),
                          geoCoordinates: z
                            .array(z.number())
                            .exactOptional()
                            .openapi({
                              description:
                                'Array containing two floats with geocoordinates, first longitude, then latitude.',
                            }),
                          isDisposable: z
                            .boolean()
                            .exactOptional()
                            .openapi({ description: 'Indicates whether address is disposable.' }),
                          neighborhood: z
                            .string()
                            .exactOptional()
                            .openapi({ description: 'Neighborhood of the shipping address.' }),
                          number: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description:
                                'Number of the building, house or apartment in the shipping address.',
                            }),
                          postalCode: z
                            .string()
                            .exactOptional()
                            .openapi({ description: 'Postal code.' }),
                          receiverName: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description: 'Name of the person who is going to receive the order.',
                            }),
                          reference: z
                            .string()
                            .nullable()
                            .exactOptional()
                            .openapi({
                              description:
                                'Complement that might help locate the shipping address more precisely in case of delivery.',
                            }),
                          state: z
                            .string()
                            .exactOptional()
                            .openapi({ description: 'State of the shipping address.' }),
                          street: z
                            .string()
                            .exactOptional()
                            .openapi({ description: 'Street of the shipping address.' }),
                        })
                        .openapi({ required: [] }),
                    )
                    .exactOptional()
                    .openapi({
                      description:
                        'Array with information on the available addresses for the order.',
                    }),
                  logisticsInfo: z
                    .array(
                      z
                        .object({
                          addressId: z
                            .string()
                            .exactOptional()
                            .openapi({ description: 'Address ID.' }),
                          deliveryChannels: z
                            .array(
                              z
                                .object({
                                  id: z
                                    .string()
                                    .exactOptional()
                                    .openapi({ description: 'Delivery channel ID.' }),
                                })
                                .openapi({ required: [] }),
                            )
                            .exactOptional()
                            .openapi({ description: 'List of available delivery channels.' }),
                          itemId: z.string().exactOptional().openapi({ description: 'Item ID.' }),
                          itemIndex: z
                            .int()
                            .exactOptional()
                            .openapi({
                              description:
                                'Index corresponding to the position of the object in the `items` array.',
                            }),
                          selectedDeliveryChannel: z
                            .string()
                            .exactOptional()
                            .openapi({ description: 'Delivery channel selected by the customer.' }),
                          selectedSla: z
                            .string()
                            .exactOptional()
                            .openapi({ description: 'SLA selected by the customer.' }),
                          shipsTo: z
                            .array(
                              z.string().openapi({ description: 'Three letter country code.' }),
                            )
                            .exactOptional()
                            .openapi({
                              description: 'List of countries that the item may be shipped to.',
                            }),
                          slas: z
                            .array(
                              z
                                .object({
                                  deliveryChannel: z
                                    .string()
                                    .exactOptional()
                                    .openapi({ description: 'Delivery channel.' }),
                                  deliveryIds: z
                                    .array(
                                      z
                                        .object({
                                          courierId: z
                                            .string()
                                            .exactOptional()
                                            .openapi({ description: 'Courier ID.' }),
                                          courierName: z
                                            .string()
                                            .exactOptional()
                                            .openapi({ description: 'Courier name.' }),
                                          dockId: z
                                            .string()
                                            .exactOptional()
                                            .openapi({ description: 'Warehouse ID.' }),
                                          quantity: z
                                            .int()
                                            .exactOptional()
                                            .openapi({ description: 'Quantity.' }),
                                          warehouseId: z
                                            .string()
                                            .exactOptional()
                                            .openapi({ description: 'Warehouse ID.' }),
                                        })
                                        .openapi({ required: [] }),
                                    )
                                    .exactOptional()
                                    .openapi({ description: 'Information on each delivery ID.' }),
                                  id: z
                                    .string()
                                    .exactOptional()
                                    .openapi({ description: 'SLA ID.' }),
                                  listPrice: z
                                    .int()
                                    .exactOptional()
                                    .openapi({ description: 'List price in cents.' }),
                                  lockTTL: z
                                    .string()
                                    .exactOptional()
                                    .openapi({ description: 'Estimate date of delivery.' }),
                                  name: z
                                    .string()
                                    .exactOptional()
                                    .openapi({ description: 'SLA name.' }),
                                  pickupDistance: z
                                    .int()
                                    .exactOptional()
                                    .openapi({ description: 'Pickup point distance.' }),
                                  pickupPointId: z
                                    .string()
                                    .nullable()
                                    .exactOptional()
                                    .openapi({ description: 'Pickup point ID.' }),
                                  pickupStoreInfo: z
                                    .object({
                                      additionalInfo: z
                                        .string()
                                        .nullable()
                                        .exactOptional()
                                        .openapi({ description: 'Additional information.' }),
                                      address: z
                                        .object({
                                          addressType: z
                                            .string()
                                            .exactOptional()
                                            .openapi({
                                              description:
                                                'Type of address. For example, `Residential` or `Pickup`.',
                                            }),
                                          city: z
                                            .string()
                                            .exactOptional()
                                            .openapi({
                                              description: 'City of the shipping address.',
                                            }),
                                          complement: z
                                            .string()
                                            .nullable()
                                            .exactOptional()
                                            .openapi({
                                              description:
                                                'Complement to the shipping address, in case it applies.',
                                            }),
                                          country: z
                                            .string()
                                            .exactOptional()
                                            .openapi({
                                              description:
                                                'Three letter ISO code of the country of the shipping address.',
                                            }),
                                          geoCoordinates: z
                                            .array(z.number())
                                            .exactOptional()
                                            .openapi({
                                              description:
                                                'Array containing two floats with geocoordinates, first longitude, then latitude.',
                                            }),
                                          neighborhood: z
                                            .string()
                                            .exactOptional()
                                            .openapi({
                                              description: 'Neighborhood of the shipping address.',
                                            }),
                                          number: z
                                            .string()
                                            .exactOptional()
                                            .openapi({
                                              description:
                                                'Number of the building, house or apartment in the shipping address.',
                                            }),
                                          postalCode: z
                                            .string()
                                            .exactOptional()
                                            .openapi({ description: 'Postal code.' }),
                                          reference: z
                                            .string()
                                            .nullable()
                                            .exactOptional()
                                            .openapi({
                                              description:
                                                'Complement that might help locate the shipping address more precisely in case of delivery.',
                                            }),
                                          state: z
                                            .string()
                                            .exactOptional()
                                            .openapi({
                                              description: 'State of the shipping address.',
                                            }),
                                          street: z
                                            .string()
                                            .exactOptional()
                                            .openapi({
                                              description: 'Street of the shipping address.',
                                            }),
                                        })
                                        .nullable()
                                        .exactOptional()
                                        .openapi({
                                          description: 'Address information.',
                                          required: [],
                                        }),
                                      dockId: z
                                        .string()
                                        .nullable()
                                        .exactOptional()
                                        .openapi({ description: 'Corresponding dock ID.' }),
                                      friendlyName: z
                                        .string()
                                        .nullable()
                                        .exactOptional()
                                        .openapi({ description: 'Friendly name.' }),
                                      isPickupStore: z
                                        .boolean()
                                        .exactOptional()
                                        .openapi({
                                          description: 'Indicates whether it is the pickup store.',
                                        }),
                                    })
                                    .exactOptional()
                                    .openapi({
                                      description: 'Information on the pickup store.',
                                      required: [],
                                    }),
                                  polygonName: z
                                    .string()
                                    .nullable()
                                    .exactOptional()
                                    .openapi({ description: 'Polygon name.' }),
                                  price: z
                                    .int()
                                    .exactOptional()
                                    .openapi({ description: 'Price in cents.' }),
                                  shippingEstimate: z
                                    .string()
                                    .exactOptional()
                                    .openapi({
                                      description:
                                        'Shipping estimate. For instance, Three business days will be represented `3bd`.',
                                    }),
                                  shippingEstimateDate: z
                                    .string()
                                    .nullable()
                                    .exactOptional()
                                    .openapi({ description: 'Shipping estimate date.' }),
                                  tax: z
                                    .int()
                                    .exactOptional()
                                    .openapi({ description: 'Tax in cents.' }),
                                  transitTime: z
                                    .string()
                                    .exactOptional()
                                    .openapi({
                                      description:
                                        'Transit time. For instance, "three business days" is represented `3bd`.',
                                    }),
                                })
                                .openapi({ required: [] }),
                            )
                            .exactOptional()
                            .openapi({ description: 'Information on available SLAs.' }),
                        })
                        .openapi({ required: [] }),
                    )
                    .exactOptional()
                    .openapi({
                      description:
                        'Array with logistics information. Each object in this array corresponds to an object in the `items` array, based on the respective `itemIndex`.',
                    }),
                  selectedAddresses: z
                    .array(
                      z
                        .object({
                          addressId: z
                            .string()
                            .exactOptional()
                            .openapi({ description: 'Address ID.' }),
                          addressType: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description:
                                'Type of address. For example, `Residential` or `Pickup`.',
                            }),
                          city: z
                            .string()
                            .exactOptional()
                            .openapi({ description: 'City of the shipping address.' }),
                          complement: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description:
                                'Complement to the shipping address, in case it applies.',
                            }),
                          country: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description:
                                'Three letter ISO code of the country of the shipping address.',
                            }),
                          geoCoordinates: z
                            .array(z.number())
                            .exactOptional()
                            .openapi({
                              description:
                                'Array containing two floats with geocoordinates, first longitude, then latitude.',
                            }),
                          isDisposable: z
                            .boolean()
                            .exactOptional()
                            .openapi({ description: 'Indicates whether address is disposable.' }),
                          neighborhood: z
                            .string()
                            .exactOptional()
                            .openapi({ description: 'Neighborhood of the shipping address.' }),
                          number: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description:
                                'Number of the building, house or apartment in the shipping address.',
                            }),
                          postalCode: z
                            .string()
                            .exactOptional()
                            .openapi({ description: 'Postal code.' }),
                          receiverName: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description: 'Name of the person who is going to receive the order.',
                            }),
                          reference: z
                            .string()
                            .nullable()
                            .exactOptional()
                            .openapi({
                              description:
                                'Complement that might help locate the shipping address more precisely in case of delivery.',
                            }),
                          state: z
                            .string()
                            .exactOptional()
                            .openapi({ description: 'State of the shipping address.' }),
                          street: z
                            .string()
                            .exactOptional()
                            .openapi({ description: 'Street of the shipping address.' }),
                        })
                        .openapi({ required: [] }),
                    )
                    .exactOptional()
                    .openapi({
                      description:
                        'Array with information on the selected addresses for the order.',
                    }),
                })
                .exactOptional()
                .openapi({
                  description: 'Shipping information pertinent to the order.',
                  required: [],
                }),
              storeId: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({ description: 'ID of the store.' }),
              storePreferencesData: z
                .object({})
                .exactOptional()
                .openapi({
                  description:
                    "Object containing data from the store's configuration (stored in VTEX's License Manager).",
                }),
              subscriptionData: z
                .object({})
                .nullable()
                .exactOptional()
                .openapi({ description: 'Subscription information.' }),
              totalizers: z
                .array(z.any())
                .exactOptional()
                .openapi({
                  description:
                    'Array containing an object for each totalizer for the purchase. Totalizers contain the sum of values for a specific part of the order (e.g. Total item value, Total shipping value).',
                }),
              userProfileId: z
                .string()
                .exactOptional()
                .openapi({ description: 'Unique ID associated with the customer profile.' }),
              userType: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({ description: 'User type.' }),
              value: z
                .int()
                .exactOptional()
                .openapi({
                  description:
                    'Total value of the order without separating cents. For example, $24.99 is represented `2499`.',
                }),
            })
            .openapi({ required: [] }),
          example: {
            allowManualPrice: false,
            availableAccounts: [],
            availableAddresses: [
              {
                addressId: '666c2e830bd9474ab6f6cc53fb6dd2d2',
                addressType: 'residential',
                city: 'Brasília',
                complement: '15º andar',
                country: 'BRA',
                geoCoordinates: [-47.924747467041016, -15.832582473754883],
                isDisposable: true,
                neighborhood: 'Copacabana',
                number: '123',
                postalCode: '70386000',
                receiverName: 'Clark Kent',
                reference: null,
                state: 'DF',
                street: 'Rua da minha casa',
              },
            ],
            canEditData: true,
            clientPreferencesData: { locale: 'pt-BR', optinNewsLetter: false },
            clientProfileData: {
              corporateDocument: null,
              corporateName: null,
              corporatePhone: null,
              customerClass: null,
              document: '12345678900',
              documentType: 'cpf',
              email: 'clark.kent@example.com',
              firstName: 'Clark',
              isCorporate: false,
              lastName: 'Kent',
              phone: '+5521998765432',
              profileCompleteOnLoading: false,
              profileErrorOnLoading: null,
              stateInscription: null,
              tradeName: null,
            },
            commercialConditionData: null,
            customData: null,
            giftRegistryData: null,
            hooksData: null,
            ignoreProfileData: false,
            invoiceData: null,
            isCheckedIn: false,
            itemMetadata: {
              items: [
                {
                  assemblyOptions: [],
                  detailUrl: '/racao-royal-canin-feline-urinary/p',
                  ean: '123456789',
                  id: '1',
                  imageUrl:
                    'http://lojadobreno.vteximg.com.br/arquivos/ids/155450-55-55/Racao-Royal-Canin-Feline-Urinary-SO.jpg?v=637139444438700000',
                  name: 'Ração Royal Canin Feline Urinary 500g',
                  productId: '1',
                  refId: '0001',
                  seller: '1',
                  skuName: 'Ração Royal Canin Feline Urinary 500g',
                },
              ],
            },
            items: [
              {
                additionalInfo: {
                  brandId: '2000000',
                  brandName: 'Brahma',
                  dimension: null,
                  offeringInfo: null,
                  offeringType: null,
                  offeringTypeId: null,
                },
                assemblies: [],
                attachmentOfferings: [],
                attachments: [],
                availability: 'available',
                bundleItems: [],
                components: [],
                detailUrl: '/chopp-brahma-claro-30l/p',
                ean: null,
                id: '2',
                imageUrl:
                  'http://mystore.vteximg.com.br/arquivos/ids/155400-55-55/30l_v2.png?v=637303412106100000',
                isGift: false,
                listPrice: 49900,
                manualPrice: null,
                manualPriceAppliedBy: null,
                manufacturerCode: null,
                measurementUnit: 'un',
                modalType: null,
                name: 'Chopp Brahma Claro 30L',
                offerings: [],
                parentAssemblyBinding: null,
                parentItemIndex: null,
                preSaleDate: null,
                price: 32890,
                priceDefinition: {
                  calculatedSellingPrice: 32890,
                  sellingPrices: [{ quantity: 1, value: 32890 }],
                  total: 32890,
                },
                priceTags: [],
                priceValidUntil: '2022-07-13T18:30:46Z',
                productCategories: { '1': 'Bebidas' },
                productCategoryIds: '/1/',
                productId: '2005',
                productRefId: '',
                quantity: 3,
                refId: 'CBC30L',
                rewardValue: 0,
                seller: '1',
                sellerChain: ['1'],
                sellingPrice: 32890,
                skuName: 'Chopp Brahma Claro 30L',
                tax: 0,
                uniqueId: '9D6E447B3FF64CEDA33B17C01379C119',
                unitMultiplier: 1,
              },
            ],
            itemsOrdination: { ascending: true, criteria: 'NAME' },
            loggedIn: false,
            marketingData: {
              coupon: 'free-shipping',
              utmCampaign: 'Black friday',
              utmMedium: 'CPC',
              utmSource: 'app',
              utmiCampaign: null,
              utmiPart: null,
              utmipage: null,
            },
            messages: [],
            openTextField: null,
            orderFormId: 'ede846222cd44046ba6c638442c3505a',
            paymentData: {
              availableAccounts: [],
              availableTokens: [],
              giftCardMessages: [],
              giftCards: [],
              installmentOptions: [
                {
                  bin: null,
                  installments: [
                    {
                      count: 1,
                      hasInterestRate: false,
                      interestRate: 0,
                      sellerMerchantInstallments: [
                        {
                          count: 1,
                          hasInterestRate: false,
                          id: 'LOJADOBRENO',
                          interestRate: 0,
                          total: 15000,
                          value: 15000,
                        },
                      ],
                      total: 15000,
                      value: 15000,
                    },
                    {
                      count: 2,
                      hasInterestRate: false,
                      interestRate: 0,
                      sellerMerchantInstallments: [
                        {
                          count: 2,
                          hasInterestRate: false,
                          id: 'LOJADOBRENO',
                          interestRate: 0,
                          total: 15000,
                          value: 7500,
                        },
                      ],
                      total: 15000,
                      value: 7500,
                    },
                  ],
                  paymentGroupName: null,
                  paymentName: null,
                  paymentSystem: '2',
                  value: 15000,
                },
              ],
              paymentSystems: [
                {
                  availablePayments: null,
                  description: null,
                  dueDate: '2020-03-05T14:59:00.7879306Z',
                  groupName: 'creditCardPaymentGroup',
                  id: 2,
                  isCustom: false,
                  name: 'Visa',
                  requiresAuthentication: false,
                  requiresDocument: false,
                  stringId: '2',
                  template: 'creditCardPaymentGroup-template',
                  validator: {
                    cardCodeMask: '999',
                    cardCodeRegex: '^[0-3]{8}$',
                    mask: '9999 9999 9999 9999',
                    regex: '^2[1-8]{17}$',
                    useBillingAddress: true,
                    useCardHolderName: true,
                    useCvv: true,
                    useExpirationDate: true,
                    weights: [2, 1, 2, 1, 2, 1],
                  },
                },
              ],
              payments: [],
            },
            profileProvider: 'VTEX',
            ratesAndBenefitsData: { rateAndBenefitsIdentifiers: [], teaser: [] },
            salesChannel: '1',
            selectableGifts: [],
            sellers: [{ id: '1', logo: '', name: 'lojadobreno' }],
            shippingData: {
              address: {
                addressId: 'teste',
                addressType: 'residential',
                city: 'Brasília',
                complement: '15º andar',
                country: 'BRA',
                geoCoordinates: [-47.924747467041016, -15.832582473754883],
                isDisposable: true,
                neighborhood: 'Copacabana',
                number: '123',
                postalCode: '70386000',
                receiverName: 'Clark Kent',
                reference: null,
                state: 'DF',
                street: 'Rua da minha casa',
              },
              availableAddresses: [
                {
                  addressId: 'teste',
                  addressType: 'residential',
                  city: 'Rio de Janeiro',
                  complement: '15º andar',
                  country: 'BRA',
                  geoCoordinates: [-47.924747467041016, -15.832582473754883],
                  isDisposable: true,
                  neighborhood: 'Copacabana',
                  number: '123',
                  postalCode: '12345000',
                  receiverName: 'Clark Kent',
                  reference: null,
                  state: 'RJ',
                  street: 'Rua da minha casa',
                },
              ],
              logisticsInfo: [
                {
                  addressId: 'teste',
                  deliveryChannels: [{ id: 'delivery' }, { id: 'pickup-in-point' }],
                  itemId: '2',
                  itemIndex: 0,
                  selectedDeliveryChannel: 'delivery',
                  selectedSla: 'Normal',
                  shipsTo: ['BRA', 'COL', 'USA'],
                  slas: [
                    {
                      availableDeliveryWindows: [],
                      deliveryChannel: 'delivery',
                      deliveryIds: [
                        {
                          courierId: '1',
                          courierName: 'Transportadora',
                          dockId: '1',
                          kitItemDetails: [],
                          quantity: 1,
                          warehouseId: '1_1',
                        },
                      ],
                      deliveryWindow: null,
                      id: 'Normal',
                      listPrice: 1500,
                      lockTTL: '10d',
                      name: 'Normal',
                      pickupDistance: 0,
                      pickupPointId: null,
                      pickupStoreInfo: {
                        additionalInfo: null,
                        address: null,
                        dockId: null,
                        friendlyName: null,
                        isPickupStore: false,
                      },
                      polygonName: null,
                      price: 1500,
                      shippingEstimate: '3bd',
                      shippingEstimateDate: null,
                      tax: 0,
                      transitTime: '3bd',
                    },
                  ],
                },
              ],
              pickupPoints: [],
              selectedAddresses: [
                {
                  addressId: 'teste',
                  addressType: 'residential',
                  city: 'Rio de Janeiro',
                  complement: '15º andar',
                  country: 'BRA',
                  geoCoordinates: [-47.924747467041016, -15.832582473754883],
                  isDisposable: true,
                  neighborhood: 'Copacabana',
                  number: '123',
                  postalCode: '12345000',
                  receiverName: 'Clark Kent',
                  reference: null,
                  state: 'RJ',
                  street: 'Rua da minha casa',
                },
              ],
            },
            storeId: null,
            storePreferencesData: {
              countryCode: 'BRA',
              currencyCode: 'BRL',
              currencyFormatInfo: {
                currencyDecimalDigits: 2,
                currencyDecimalSeparator: ',',
                currencyGroupSeparator: '.',
                currencyGroupSize: 3,
                startsWithCurrencySymbol: true,
              },
              currencyLocale: 1046,
              'currencySymboupdate cartl': 'R$',
              saveUserData: true,
              timeZone: 'E. South America Standard Time',
            },
            subscriptionData: null,
            totalizers: [{ id: 'Items', name: 'Total dos Itens', value: 15000 }],
            userProfileId: 'fb542e51-5488-4c34-8d17-ed8fcf597a94',
            userType: null,
            value: 34390,
          },
        },
      },
    },
  },
  security: [],
})

export const postApiCheckoutPubOrderFormOrderFormIdItemsRemoveAllRoute = createRoute({
  method: 'post',
  path: '/api/checkout/pub/orderForm/{orderFormId}/items/removeAll',
  tags: ['Shopping cart'],
  summary: 'Remove all items',
  description:
    'This request removes all items from a given cart, leaving it empty.\r\n\r\nYou must send an empty JSON in the body of the request.\r\n\r\nThe [orderForm](https://developers.vtex.com/docs/guides/orderform-fields) is the data structure which represents a shopping cart and contains all information pertaining to it. Hence, the `orderFormId` is the identification code of a given cart.\r\n\r\n**Important**: **Request Body** must always be sent with empty value "{ }" in this endpoint.',
  operationId: 'RemoveAllItems',
  request: {
    params: z.object({
      orderFormId: z
        .string()
        .default('ede846222cd44046ba6c638442c3505a')
        .openapi({
          param: {
            description:
              'ID of the orderForm corresponding to the cart whose items you want to remove.',
            in: 'path',
            name: 'orderFormId',
            required: true,
            schema: { default: 'ede846222cd44046ba6c638442c3505a', type: 'string' },
            style: 'simple',
          },
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
    body: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .object({})
            .default({})
            .openapi({ description: 'This object must be empty.', title: '' }),
        },
      },
    },
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z.object({}),
          examples: {
            response: {
              value: {
                allowManualPrice: false,
                canEditData: true,
                checkedInPickupPointId: null,
                clientPreferencesData: { locale: 'pt-BR', optinNewsLetter: null },
                clientProfileData: {
                  corporateDocument: null,
                  corporateName: null,
                  corporatePhone: null,
                  customerClass: null,
                  document: '769387308',
                  documentType: 'dni',
                  email: 'john.doe@google.com',
                  firstName: 'John',
                  isCorporate: false,
                  lastName: 'Doe',
                  phone: '+5491111223344',
                  profileCompleteOnLoading: false,
                  profileErrorOnLoading: false,
                  stateInscription: null,
                  tradeName: null,
                },
                commercialConditionData: null,
                customData: null,
                giftRegistryData: null,
                hooksData: null,
                ignoreProfileData: false,
                invoiceData: null,
                isCheckedIn: false,
                itemMetadata: { items: [] },
                items: [],
                itemsOrdination: null,
                loggedIn: false,
                marketingData: null,
                messages: [],
                openTextField: null,
                orderFormId: 'ede846222cd44046ba6c638442c3505a',
                paymentData: {
                  availableAccounts: [],
                  availableTokens: [],
                  giftCardMessages: [],
                  giftCards: [],
                  installmentOptions: [
                    {
                      bin: null,
                      installments: [
                        {
                          count: 1,
                          hasInterestRate: false,
                          interestRate: 0,
                          sellerMerchantInstallments: [
                            {
                              count: 1,
                              hasInterestRate: false,
                              id: 'LOJADOBRENO',
                              interestRate: 0,
                              total: 15000,
                              value: 15000,
                            },
                          ],
                          total: 15000,
                          value: 15000,
                        },
                      ],
                      paymentGroupName: null,
                      paymentName: null,
                      paymentSystem: '2',
                      value: 15000,
                    },
                  ],
                  paymentSystems: [
                    {
                      availablePayments: null,
                      description: null,
                      dueDate: '2020-03-05T14:23:23.8196668Z',
                      groupName: 'creditCardPaymentGroup',
                      id: 4,
                      isCustom: false,
                      name: 'Mastercard',
                      requiresAuthentication: false,
                      requiresDocument: false,
                      stringId: '4',
                      template: 'creditCardPaymentGroup-template',
                      validator: {
                        cardCodeMask: '999',
                        cardCodeRegex: '^[1-3]{9}$',
                        mask: '9999 9999 9999 9999',
                        regex:
                          '^((5(([1-2]|[5-5])[0-3]{8}|0((2|9)([0-2]{5}))|1(0(5((0|[4-8])[1-7]{6})|([2-3]|[1-9])[0-9]{6})|[1-9][0-9]{7})))|((508116)\\d{4,10})|((502121)\\d{4,10})|((589916)\\d{4,10})|(2[0-9]{15})|(67[0-9]{14})|(506387)\\d{4,10})',
                        useBillingAddress: true,
                        useCardHolderName: true,
                        useCvv: true,
                        useExpirationDate: true,
                        weights: [2, 1, 2, 1, 2],
                      },
                    },
                  ],
                  payments: [],
                },
                ratesAndBenefitsData: null,
                salesChannel: '1',
                selectableGifts: [],
                sellers: [],
                shippingData: {
                  address: null,
                  availableAddresses: [],
                  logisticsInfo: [],
                  pickupPoints: [],
                  selectedAddresses: [],
                },
                storeId: null,
                storePreferencesData: {
                  countryCode: 'BRA',
                  currencyCode: 'BRL',
                  currencyFormatInfo: {
                    currencyDecimalDigits: 2,
                    currencyDecimalSeparator: ',',
                    currencyGroupSeparator: '.',
                    currencyGroupSize: 3,
                    startsWithCurrencySymbol: true,
                  },
                  currencyLocale: 1046,
                  currencySymbol: 'R$',
                  saveUserData: true,
                  timeZone: 'E. South America Standard Time',
                },
                subscriptionData: null,
                totalizers: [],
                userProfileId: null,
                userType: null,
                value: 0,
              },
            },
          },
        },
      },
      headers: z.object({}),
    },
  },
  security: [],
})

export const postApiCheckoutPubOrderFormOrderFormIdItemsUpdateRoute = createRoute({
  method: 'post',
  path: '/api/checkout/pub/orderForm/{orderFormId}/items/update',
  tags: ['Shopping cart'],
  summary: 'Update cart items',
  description:
    'You can use this request to:\n\r\n\r1. Change the quantity of one or more items in a specific cart.\n\r2. Remove an item from the cart (by sending the `quantity` value = `0` in the request body).\r\n\r\n**Important**: To remove all items from the cart at the same time, use the [Remove all items](https://developers.vtex.com/vtex-rest-api/reference/removeallitems) endpoint.\r\n\r\nThe [orderForm](https://developers.vtex.com/docs/guides/orderform-fields) is the data structure that represents a shopping cart and contains all information pertaining to it. Hence, the `orderFormId` is the identification code of a given cart.\n\r\n\r> This request has a time out of 45 seconds.',
  operationId: 'ItemsUpdate',
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
      orderFormId: z
        .string()
        .default('ede846222cd44046ba6c638442c3505a')
        .openapi({
          param: {
            description:
              'ID of the `orderForm` corresponding to the cart whose items you want to update.',
            in: 'path',
            name: 'orderFormId',
            required: true,
            schema: { default: 'ede846222cd44046ba6c638442c3505a', type: 'string' },
            style: 'simple',
          },
        }),
    }),
    query: z.object({
      allowedOutdatedData: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.any()),
        )
        .default(['paymentData'])
        .exactOptional()
        .openapi({
          param: {
            description:
              'In order to optimize performance, this parameter allows some information to not be updated when there are changes in the minicart. For instance, if a shopper adds another unit of a given SKU to the cart, it may not be necessary to recalculate payment information, which could impact performance.\n\r\n\rThis array accepts strings and currently the only possible value is `”paymentData”`.',
            in: 'query',
            name: 'allowedOutdatedData',
            required: false,
            schema: { default: ['paymentData'], items: {}, type: 'array' },
            style: 'form',
          },
        }),
    }),
    body: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .object({
              orderItems: z
                .array(
                  z
                    .object({
                      index: z
                        .int()
                        .openapi({
                          description: 'The position of the item in the array.',
                          example: 0,
                        }),
                      quantity: z
                        .int32()
                        .openapi({
                          description: 'The quantity of the item in the cart.',
                          example: 3,
                        }),
                    })
                    .openapi({ required: ['quantity', 'index'] }),
                )
                .exactOptional()
                .openapi({
                  description:
                    'Array containing the cart items. Each object inside this array corresponds to a different item.',
                }),
            })
            .openapi({ required: [] }),
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
              allowManualPrice: z
                .boolean()
                .exactOptional()
                .openapi({ description: 'Permission to modify item price manually.' }),
              availableAccounts: z
                .array(z.string())
                .exactOptional()
                .openapi({ description: 'Available accounts.' }),
              availableAddresses: z
                .array(
                  z
                    .object({
                      addressId: z.string().exactOptional().openapi({ description: 'Address ID.' }),
                      addressType: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'Address type.' }),
                      city: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'City of the address.' }),
                      complement: z
                        .string()
                        .nullable()
                        .exactOptional()
                        .openapi({ description: 'Complement to the address.' }),
                      country: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'Country of the address. ISO three-letter code.' }),
                      geoCoordinates: z
                        .array(z.string())
                        .exactOptional()
                        .openapi({ description: 'List with the two geocoordinates.' }),
                      isDisposable: z
                        .boolean()
                        .exactOptional()
                        .openapi({ description: 'Indicates whether address is disposable.' }),
                      neighborhood: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'Neighborhood of the address.' }),
                      number: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'Number of the address.' }),
                      receiverName: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'Name of the receiver.' }),
                      reference: z
                        .string()
                        .nullable()
                        .exactOptional()
                        .openapi({
                          description: 'Reference that may help in the location of the address.',
                        }),
                      state: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'State of the address.' }),
                      street: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'Street of the address.' }),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional()
                .openapi({ description: 'Information on each available address.' }),
              canEditData: z
                .boolean()
                .exactOptional()
                .openapi({ description: 'Data can be edited.' }),
              clientPreferencesData: z
                .object({
                  locale: z
                    .string()
                    .exactOptional()
                    .openapi({ description: "Client's locale. Examples: `pt-BR` and `en-US`." }),
                  optinNewsLetter: z
                    .boolean()
                    .default(false)
                    .exactOptional()
                    .openapi({
                      description:
                        '`true` if the client opted to receive newsletter from the store.',
                    }),
                })
                .exactOptional()
                .openapi({
                  description:
                    'Object containing preferences from the client who placed the order.',
                  required: [],
                }),
              clientProfileData: z
                .object({
                  corporateDocument: z
                    .string()
                    .nullable()
                    .exactOptional()
                    .openapi({
                      description: 'Corporate document, if the customer is a legal entity.',
                    }),
                  corporateName: z
                    .string()
                    .nullable()
                    .exactOptional()
                    .openapi({ description: 'Company name, if the customer is a legal entity.' }),
                  corporatePhone: z
                    .string()
                    .nullable()
                    .exactOptional()
                    .openapi({
                      description: 'Corporate phone number, if the customer is a legal entity.',
                    }),
                  customerClass: z
                    .string()
                    .nullable()
                    .exactOptional()
                    .openapi({ description: 'Customer class.' }),
                  document: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'Document informed by the customer.' }),
                  documentType: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'Type of the document informed by the customer.' }),
                  email: z.string().exactOptional().openapi({ description: 'Email address.' }),
                  firstName: z.string().exactOptional().openapi({ description: 'First name.' }),
                  isCorporate: z
                    .boolean()
                    .exactOptional()
                    .openapi({ description: 'Indicates whether the customer is a legal entity.' }),
                  lastName: z.string().exactOptional().openapi({ description: 'Last name.' }),
                  phone: z.string().exactOptional().openapi({ description: 'Phone number.' }),
                  profileCompleteOnLoading: z
                    .boolean()
                    .exactOptional()
                    .openapi({ description: 'Indicates whether profile is complete on loading.' }),
                  profileErrorOnLoading: z
                    .boolean()
                    .nullable()
                    .exactOptional()
                    .openapi({
                      description: 'Indicates whether profile presents error on loading.',
                    }),
                  stateInscription: z
                    .string()
                    .nullable()
                    .exactOptional()
                    .openapi({
                      description: 'State inscription, if the customer is a legal entity.',
                    }),
                  tradeName: z
                    .string()
                    .nullable()
                    .exactOptional()
                    .openapi({ description: 'Trade name, if the customer is a legal entity.' }),
                })
                .exactOptional()
                .openapi({ description: "Customer's profile information.", required: [] }),
              commercialConditionData: z
                .object({})
                .nullable()
                .exactOptional()
                .openapi({ description: 'Object containing commercial condition information.' }),
              customData: z
                .object({})
                .nullable()
                .exactOptional()
                .openapi({ description: 'Customer additional information.' }),
              giftRegistryData: z
                .object({})
                .nullable()
                .exactOptional()
                .openapi({ description: 'Gift registry list information.' }),
              hooksData: z
                .object({})
                .nullable()
                .exactOptional()
                .openapi({ description: 'Hooks information.' }),
              ignoreProfileData: z
                .boolean()
                .exactOptional()
                .openapi({ description: 'Ignore customer profile data.' }),
              invoiceData: z
                .object({})
                .nullable()
                .exactOptional()
                .openapi({
                  description: "Object containing information pertinent to the order's invoice.",
                }),
              isCheckedIn: z
                .boolean()
                .exactOptional()
                .openapi({ description: 'Indicates whether order is checked in.' }),
              itemMetadata: z
                .object({
                  items: z
                    .array(
                      z
                        .object({
                          detailUrl: z
                            .string()
                            .exactOptional()
                            .openapi({ description: 'Detail URL.' }),
                          ean: z
                            .string()
                            .nullable()
                            .exactOptional()
                            .openapi({ description: 'European Article Number.' }),
                          id: z.string().exactOptional().openapi({ description: 'Item ID.' }),
                          imageUrl: z
                            .string()
                            .exactOptional()
                            .openapi({ description: 'Image URL.' }),
                          name: z
                            .string()
                            .exactOptional()
                            .openapi({ description: 'Product name.' }),
                          productId: z
                            .string()
                            .exactOptional()
                            .openapi({ description: 'Product ID.' }),
                          refId: z.string().exactOptional().openapi({ description: 'Ref ID.' }),
                          seller: z.string().exactOptional().openapi({ description: 'Seller.' }),
                          skuName: z.string().exactOptional().openapi({ description: 'SKU name.' }),
                        })
                        .openapi({ required: [] }),
                    )
                    .exactOptional()
                    .openapi({
                      description: 'List of objects containing metadata on each item in the order.',
                    }),
                })
                .exactOptional()
                .openapi({ description: 'Item metadata.', required: [] }),
              items: z
                .array(
                  z
                    .object({
                      additionalInfo: z
                        .object({
                          brandId: z.string().exactOptional().openapi({ description: 'Brand ID.' }),
                          brandName: z
                            .string()
                            .exactOptional()
                            .openapi({ description: 'Brand name.' }),
                          dimension: z
                            .string()
                            .nullable()
                            .exactOptional()
                            .openapi({ description: 'Dimension.' }),
                          offeringInfo: z
                            .string()
                            .nullable()
                            .exactOptional()
                            .openapi({ description: 'Offering information.' }),
                          offeringType: z
                            .string()
                            .nullable()
                            .exactOptional()
                            .openapi({ description: 'Offering type.' }),
                          offeringTypeId: z
                            .string()
                            .nullable()
                            .exactOptional()
                            .openapi({ description: 'Offering type ID.' }),
                        })
                        .exactOptional()
                        .openapi({ description: 'Additional information.', required: [] }),
                      attachments: z
                        .array(z.string())
                        .exactOptional()
                        .openapi({ description: 'Array containing information on attachments.' }),
                      availability: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'Availability.' }),
                      bundleItems: z
                        .array(
                          z
                            .object({
                              id: z
                                .int()
                                .exactOptional()
                                .openapi({ description: 'Service identifier.' }),
                              name: z
                                .string()
                                .exactOptional()
                                .openapi({ description: 'Service name.' }),
                              price: z
                                .int()
                                .exactOptional()
                                .openapi({ description: 'Service price in cents.' }),
                              type: z
                                .string()
                                .exactOptional()
                                .openapi({ description: 'Service type.' }),
                            })
                            .openapi({ required: [] }),
                        )
                        .exactOptional()
                        .openapi({
                          description:
                            'Information on services sold along with the SKU. Example: a gift package.',
                        }),
                      detailUrl: z.string().exactOptional().openapi({ description: 'Detail URL.' }),
                      ean: z
                        .string()
                        .nullable()
                        .exactOptional()
                        .openapi({ description: 'European Article Number.' }),
                      id: z.string().exactOptional().openapi({ description: 'ID of the item.' }),
                      imageUrl: z.string().exactOptional().openapi({ description: 'Image URL.' }),
                      isGift: z
                        .boolean()
                        .exactOptional()
                        .openapi({ description: 'Indicates whether item is a gift.' }),
                      listPrice: z
                        .int()
                        .exactOptional()
                        .openapi({ description: 'List price in cents.' }),
                      manualPrice: z
                        .int()
                        .nullable()
                        .exactOptional()
                        .openapi({ description: 'Manual price in cents.' }),
                      manualPriceAppliedBy: z
                        .string()
                        .nullable()
                        .exactOptional()
                        .openapi({
                          description: 'User that applied the manual price, if that is the case.',
                        }),
                      manufacturerCode: z
                        .string()
                        .nullable()
                        .exactOptional()
                        .openapi({ description: 'Manufacturer code.' }),
                      measurementUnit: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'Measurement unit.' }),
                      modalType: z
                        .string()
                        .nullable()
                        .exactOptional()
                        .openapi({ description: 'Modal type.' }),
                      name: z.string().exactOptional().openapi({ description: 'Product name.' }),
                      parentAssemblyBinding: z
                        .string()
                        .nullable()
                        .exactOptional()
                        .openapi({ description: 'Parent assembly binding.' }),
                      parentItemIndex: z
                        .int()
                        .nullable()
                        .exactOptional()
                        .openapi({ description: 'Parent item index.' }),
                      preSaleDate: z
                        .string()
                        .nullable()
                        .exactOptional()
                        .openapi({ description: 'Presale date.' }),
                      price: z.int().exactOptional().openapi({ description: 'Price in cents.' }),
                      priceDefinition: z
                        .object({
                          calculatedSellingPrice: z
                            .int()
                            .exactOptional()
                            .openapi({
                              description: "Item's calculated unitary selling price in cents.",
                            }),
                          sellingPrices: z
                            .array(
                              z
                                .object({
                                  quantity: z
                                    .int()
                                    .exactOptional()
                                    .openapi({
                                      description:
                                        'Rounding quantity, meaning how many items are rounded to this value.',
                                    }),
                                  value: z
                                    .int()
                                    .exactOptional()
                                    .openapi({
                                      description: 'Value in cents for that specific rounding.',
                                    }),
                                })
                                .openapi({ required: [] }),
                            )
                            .exactOptional()
                            .openapi({
                              description:
                                'Array of objects, each containing value (in cents) and quantity for the different rounding instances that can be combined to form the correctly rounded total.',
                            }),
                          total: z
                            .int()
                            .exactOptional()
                            .openapi({
                              description: 'Total value for all units of the item in cents.',
                            }),
                        })
                        .exactOptional()
                        .openapi({
                          description: 'Price information for all units of a specific item.',
                          required: [],
                        }),
                      priceTags: z
                        .array(
                          z
                            .object({
                              identifier: z
                                .string()
                                .exactOptional()
                                .openapi({ description: 'Price tag identifier.' }),
                              isPercentual: z
                                .boolean()
                                .exactOptional()
                                .openapi({
                                  description:
                                    'Indicates whether price tag value is applied through a percentage.',
                                }),
                              name: z
                                .string()
                                .exactOptional()
                                .openapi({ description: 'Price tag name.' }),
                              rawValue: z
                                .int()
                                .exactOptional()
                                .openapi({ description: 'Price tag raw value.' }),
                              value: z
                                .int()
                                .exactOptional()
                                .openapi({ description: 'Price tag value.' }),
                            })
                            .openapi({ required: [] }),
                        )
                        .exactOptional()
                        .openapi({
                          description:
                            'Array of price tags, each of which, modifies the price in some way, like discounts or rates that apply to the item in the context of the order.',
                        }),
                      priceValidUntil: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'Price expiration date and time.' }),
                      productCategories: z
                        .object({
                          '{ID}': z
                            .string()
                            .exactOptional()
                            .openapi({
                              description:
                                'Product category corresponding to the ID in the field key.',
                            }),
                        })
                        .exactOptional()
                        .openapi({
                          description:
                            'Object, where each field is an ID from `productCategoryIds`.',
                          required: [],
                        }),
                      productCategoryIds: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'Product category IDs.' }),
                      productId: z.string().exactOptional().openapi({ description: 'Product ID.' }),
                      productRefId: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'Product Ref ID.' }),
                      quantity: z.int().exactOptional().openapi({ description: 'Quantity.' }),
                      refId: z.string().exactOptional().openapi({ description: 'Ref ID.' }),
                      rewardValue: z
                        .int()
                        .exactOptional()
                        .openapi({ description: 'Reward value in cents.' }),
                      seller: z.string().exactOptional().openapi({ description: 'Seller.' }),
                      sellerChain: z
                        .array(z.string().openapi({ description: 'Seller.' }))
                        .exactOptional()
                        .openapi({
                          description:
                            'Sellers involved in the chain. The list should contain only one seller, unless it is a [Multilevel Omnichannel Inventory](https://help.vtex.com/en/tutorial/multilevel-omnichannel-inventory--7M1xyCZWUyCB7PcjNtOyw4) order.',
                        }),
                      sellingPrice: z
                        .int()
                        .exactOptional()
                        .openapi({
                          description:
                            'Selling price in cents. Note that this field may be subject to rounding discrepancies. We recommend retrieving data from the `priceDefinition` data structure instead.',
                        }),
                      skuName: z.string().exactOptional().openapi({ description: 'SKU name.' }),
                      tax: z.int().exactOptional().openapi({ description: 'Tax value in cents.' }),
                      uniqueId: z.string().exactOptional().openapi({ description: 'Unique ID.' }),
                      unitMultiplier: z
                        .int()
                        .exactOptional()
                        .openapi({ description: 'Unit multiplier.' }),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional()
                .openapi({ description: 'Information on each item in the order.' }),
              itemsOrdination: z
                .object({
                  ascending: z
                    .boolean()
                    .exactOptional()
                    .openapi({ description: 'Indicates whether the ordering is ascending.' }),
                  criteria: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'Criteria adopted to order the items in the list.' }),
                })
                .exactOptional()
                .openapi({
                  description:
                    'Object containing information about the ordering of items within the `orderForm`.',
                  required: [],
                }),
              loggedIn: z
                .boolean()
                .exactOptional()
                .openapi({ description: 'Indicates whether the user is logged into the store.' }),
              marketingData: z
                .object({
                  coupon: z
                    .string()
                    .default('free-shipping')
                    .exactOptional()
                    .openapi({
                      description:
                        'Sending an existing coupon code in this field will return the corresponding discount in the purchase. Use the [cart simulation](https://developers.vtex.com/vtex-rest-api/reference/orderform#orderformsimulation) request to check which coupons might apply before placing the order.',
                    }),
                  utmCampaign: z
                    .string()
                    .default('Black friday')
                    .exactOptional()
                    .openapi({ description: 'UTM campaign' }),
                  utmMedium: z
                    .string()
                    .default('CPC')
                    .exactOptional()
                    .openapi({ description: 'UTM medium.' }),
                  utmSource: z
                    .string()
                    .default('Facebook')
                    .exactOptional()
                    .openapi({ description: 'UTM source.' }),
                  utmiCampaign: z
                    .string()
                    .nullable()
                    .default('utmi_campaign-example')
                    .exactOptional()
                    .openapi({ description: 'utmi_campaign (internal utm).' }),
                  utmiPage: z
                    .string()
                    .nullable()
                    .default('utmi_page-example')
                    .exactOptional()
                    .openapi({ description: 'utmi_page (internal utm).' }),
                  utmiPart: z
                    .string()
                    .nullable()
                    .default('utmi_part-example')
                    .exactOptional()
                    .openapi({ description: 'utmi_part (internal utm).' }),
                })
                .exactOptional()
                .openapi({
                  description:
                    'Object containing promotion data such as coupon tracking information and internal or external UTMs.',
                  required: [],
                }),
              messages: z
                .array(z.any())
                .exactOptional()
                .openapi({
                  description:
                    'Array containing an object for each message generated by our servers while processing the request.',
                }),
              openTextField: z
                .string()
                .nullable()
                .default('open-text-example')
                .exactOptional()
                .openapi({
                  description:
                    'Optional field meant to hold additional information about the order. We recommend using this field for text, not data formats such as `JSON` even if escaped. For that purpose, see [Creating customizable fields](https://developers.vtex.com/vtex-rest-api/docs/creating-customizable-fields-in-the-cart-with-checkout-api-1).',
                }),
              orderFormId: z
                .string()
                .exactOptional()
                .openapi({ description: 'ID of the orderForm corresponding to a specific cart.' }),
              paymentData: z
                .object({
                  giftCards: z
                    .array(
                      z
                        .object({
                          balance: z
                            .int()
                            .exactOptional()
                            .openapi({ description: 'Gift card balance in cents.' }),
                          id: z.string().exactOptional().openapi({ description: 'Gift card ID.' }),
                          inUse: z
                            .boolean()
                            .exactOptional()
                            .openapi({ description: 'Indicates whether gift card is in use.' }),
                          isSpecialCard: z
                            .boolean()
                            .exactOptional()
                            .openapi({ description: 'Indicates whether gift card is special.' }),
                          name: z
                            .string()
                            .exactOptional()
                            .openapi({ description: 'Gift card name.' }),
                          redemptionCode: z
                            .string()
                            .exactOptional()
                            .openapi({ description: 'Gift card redemption code.' }),
                          value: z
                            .int()
                            .exactOptional()
                            .openapi({ description: 'Gift card value in cents.' }),
                        })
                        .openapi({ required: [] }),
                    )
                    .exactOptional()
                    .openapi({ description: 'Gift card information, if it applies to the order.' }),
                  transactions: z
                    .array(
                      z
                        .object({
                          isActive: z
                            .boolean()
                            .exactOptional()
                            .openapi({ description: 'Indicates whether transaction is active.' }),
                          merchantName: z
                            .string()
                            .exactOptional()
                            .openapi({ description: 'Merchant name.' }),
                          payments: z
                            .array(
                              z
                                .object({
                                  accountId: z
                                    .string()
                                    .exactOptional()
                                    .openapi({ description: 'Account ID.' }),
                                  bin: z.string().exactOptional().openapi({ description: 'Bin.' }),
                                  installments: z
                                    .int()
                                    .exactOptional()
                                    .openapi({ description: 'Number of installments.' }),
                                  paymentSystem: z
                                    .string()
                                    .exactOptional()
                                    .openapi({ description: 'Payment system.' }),
                                  referenceValue: z
                                    .int()
                                    .exactOptional()
                                    .openapi({
                                      description:
                                        'Reference value for calculating interest rates, in case it applies. Displayed in cents.',
                                    }),
                                  value: z
                                    .int()
                                    .exactOptional()
                                    .openapi({
                                      description:
                                        'Value including interest, in case it applies. Displayed in cents.',
                                    }),
                                })
                                .openapi({ required: [] }),
                            )
                            .exactOptional()
                            .openapi({ description: 'Information on each payment.' }),
                          sharedTransaction: z
                            .boolean()
                            .exactOptional()
                            .openapi({ description: 'Indicates whather transaction is shared.' }),
                          transactionId: z
                            .string()
                            .exactOptional()
                            .openapi({ description: 'Transaction ID.' }),
                        })
                        .openapi({ required: [] }),
                    )
                    .exactOptional()
                    .openapi({
                      description: 'Information on each transaction pertinent to the order.',
                    }),
                })
                .exactOptional()
                .openapi({ description: "Information on the order's payment.", required: [] }),
              profileProvider: z
                .string()
                .exactOptional()
                .openapi({ description: 'Profile provider.' }),
              ratesAndBenefitsData: z
                .object({
                  rateAndBenefitsIdentifiers: z
                    .array(z.string())
                    .exactOptional()
                    .openapi({ description: 'List with rates and benefits identifiers.' }),
                  teaser: z
                    .array(z.string())
                    .exactOptional()
                    .openapi({ description: 'List with rates and benefits teasers.' }),
                })
                .exactOptional()
                .openapi({
                  description: 'Information on rates and benefits that apply to the order.',
                  required: [],
                }),
              salesChannel: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Attribute created by the seller, in their VTEX store configuration.',
                }),
              selectableGifts: z
                .array(z.any())
                .exactOptional()
                .openapi({
                  description: 'Array containing the data of the item selected as a gift.',
                }),
              sellers: z
                .array(
                  z
                    .object({
                      id: z.string().exactOptional().openapi({ description: 'Seller ID.' }),
                      logo: z
                        .string()
                        .nullable()
                        .exactOptional()
                        .openapi({ description: 'Seller logo.' }),
                      name: z.string().exactOptional().openapi({ description: 'Seller name.' }),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional()
                .openapi({ description: 'Information on each seller.' }),
              shippingData: z
                .object({
                  address: z
                    .object({
                      addressId: z.string().exactOptional().openapi({ description: 'Address ID.' }),
                      addressType: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description: 'Type of address. For example, `Residential` or `Pickup`.',
                        }),
                      city: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'City of the shipping address.' }),
                      complement: z
                        .string()
                        .nullable()
                        .exactOptional()
                        .openapi({
                          description: 'Complement to the shipping address, in case it applies.',
                        }),
                      country: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            'Three letter ISO code of the country of the shipping address.',
                        }),
                      geoCoordinates: z
                        .array(z.string())
                        .exactOptional()
                        .openapi({
                          description:
                            'Array with two strings with geocoordinates, first latitude, then longitude.',
                        }),
                      isDisposable: z
                        .boolean()
                        .exactOptional()
                        .openapi({ description: 'Indicates whether address is disposable.' }),
                      neighborhood: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'Neighborhood of the shipping address.' }),
                      number: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            'Number of the building, house or apartment in the shipping address.',
                        }),
                      postalCode: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'Postal code.' }),
                      receiverName: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description: 'Name of the person who is going to receive the order.',
                        }),
                      reference: z
                        .string()
                        .nullable()
                        .exactOptional()
                        .openapi({
                          description:
                            'Complement that might help locate the shipping address more precisely in case of delivery.',
                        }),
                      state: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'State of the shipping address.' }),
                      street: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'Street of the shipping address.' }),
                    })
                    .exactOptional()
                    .openapi({ description: 'Address information.', required: [] }),
                  availableAddresses: z
                    .array(
                      z
                        .object({
                          addressId: z
                            .string()
                            .exactOptional()
                            .openapi({ description: 'Address ID.' }),
                          addressType: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description:
                                'Type of address. For example, `Residential` or `Pickup`.',
                            }),
                          city: z
                            .string()
                            .exactOptional()
                            .openapi({ description: 'City of the shipping address.' }),
                          complement: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description:
                                'Complement to the shipping address, in case it applies.',
                            }),
                          country: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description:
                                'Three letter ISO code of the country of the shipping address.',
                            }),
                          geoCoordinates: z
                            .array(z.string())
                            .exactOptional()
                            .openapi({
                              description:
                                'Array with two strings with geocoordinates, first latitude, then longitude.',
                            }),
                          isDisposable: z
                            .boolean()
                            .exactOptional()
                            .openapi({ description: 'Indicates whether address is disposable.' }),
                          neighborhood: z
                            .string()
                            .exactOptional()
                            .openapi({ description: 'Neighborhood of the shipping address.' }),
                          number: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description:
                                'Number of the building, house or apartment in the shipping address.',
                            }),
                          postalCode: z
                            .string()
                            .exactOptional()
                            .openapi({ description: 'Postal code.' }),
                          receiverName: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description: 'Name of the person who is going to receive the order.',
                            }),
                          reference: z
                            .string()
                            .nullable()
                            .exactOptional()
                            .openapi({
                              description:
                                'Complement that might help locate the shipping address more precisely in case of delivery.',
                            }),
                          state: z
                            .string()
                            .exactOptional()
                            .openapi({ description: 'State of the shipping address.' }),
                          street: z
                            .string()
                            .exactOptional()
                            .openapi({ description: 'Street of the shipping address.' }),
                        })
                        .openapi({ required: [] }),
                    )
                    .exactOptional()
                    .openapi({
                      description:
                        'Array with information on the available addresses for the order.',
                    }),
                  logisticsInfo: z
                    .array(
                      z
                        .object({
                          addressId: z
                            .string()
                            .exactOptional()
                            .openapi({ description: 'Address ID.' }),
                          deliveryChannels: z
                            .array(
                              z
                                .object({
                                  id: z
                                    .string()
                                    .exactOptional()
                                    .openapi({ description: 'Delivery channel ID.' }),
                                })
                                .openapi({ required: [] }),
                            )
                            .exactOptional()
                            .openapi({ description: 'List of available delivery channels.' }),
                          itemId: z.string().exactOptional().openapi({ description: 'Item ID.' }),
                          itemIndex: z
                            .int()
                            .exactOptional()
                            .openapi({
                              description:
                                'Index corresponding to the position of the object in the `items` array.',
                            }),
                          selectedDeliveryChannel: z
                            .string()
                            .exactOptional()
                            .openapi({ description: 'Delivery channel selected by the customer.' }),
                          selectedSla: z
                            .string()
                            .exactOptional()
                            .openapi({ description: 'SLA selected by the customer.' }),
                          shipsTo: z
                            .array(
                              z.string().openapi({ description: 'Three letter country code.' }),
                            )
                            .exactOptional()
                            .openapi({
                              description: 'List of countries that the item may be shipped to.',
                            }),
                          slas: z
                            .array(
                              z
                                .object({
                                  deliveryChannel: z
                                    .string()
                                    .exactOptional()
                                    .openapi({ description: 'Delivery channel.' }),
                                  deliveryIds: z
                                    .array(
                                      z
                                        .object({
                                          courierId: z
                                            .string()
                                            .exactOptional()
                                            .openapi({ description: 'Courier ID.' }),
                                          courierName: z
                                            .string()
                                            .exactOptional()
                                            .openapi({ description: 'Courier name.' }),
                                          dockId: z
                                            .string()
                                            .exactOptional()
                                            .openapi({ description: 'Warehouse ID.' }),
                                          quantity: z
                                            .int()
                                            .exactOptional()
                                            .openapi({ description: 'Quantity.' }),
                                          warehouseId: z
                                            .string()
                                            .exactOptional()
                                            .openapi({ description: 'Warehouse ID.' }),
                                        })
                                        .openapi({ required: [] }),
                                    )
                                    .exactOptional()
                                    .openapi({ description: 'Information on each delivery ID.' }),
                                  id: z
                                    .string()
                                    .exactOptional()
                                    .openapi({ description: 'SLA ID.' }),
                                  listPrice: z
                                    .int()
                                    .exactOptional()
                                    .openapi({ description: 'List price in cents.' }),
                                  lockTTL: z
                                    .string()
                                    .exactOptional()
                                    .openapi({ description: 'Estimate date of delivery.' }),
                                  name: z
                                    .string()
                                    .exactOptional()
                                    .openapi({ description: 'SLA name.' }),
                                  pickupDistance: z
                                    .int()
                                    .exactOptional()
                                    .openapi({ description: 'Pickup point distance.' }),
                                  pickupPointId: z
                                    .string()
                                    .nullable()
                                    .exactOptional()
                                    .openapi({ description: 'Pickup point ID.' }),
                                  pickupStoreInfo: z
                                    .object({
                                      additionalInfo: z
                                        .string()
                                        .nullable()
                                        .exactOptional()
                                        .openapi({ description: 'Additional information.' }),
                                      address: z
                                        .object({
                                          addressType: z
                                            .string()
                                            .exactOptional()
                                            .openapi({
                                              description:
                                                'Type of address. For example, `Residential` or `Pickup`.',
                                            }),
                                          city: z
                                            .string()
                                            .exactOptional()
                                            .openapi({
                                              description: 'City of the shipping address.',
                                            }),
                                          complement: z
                                            .string()
                                            .nullable()
                                            .exactOptional()
                                            .openapi({
                                              description:
                                                'Complement to the shipping address, in case it applies.',
                                            }),
                                          country: z
                                            .string()
                                            .exactOptional()
                                            .openapi({
                                              description:
                                                'Three letter ISO code of the country of the shipping address.',
                                            }),
                                          geoCoordinates: z
                                            .array(z.string())
                                            .exactOptional()
                                            .openapi({
                                              description:
                                                'Array with two strings with geocoordinates, first latitude, then longitude.',
                                            }),
                                          neighborhood: z
                                            .string()
                                            .exactOptional()
                                            .openapi({
                                              description: 'Neighborhood of the shipping address.',
                                            }),
                                          number: z
                                            .string()
                                            .exactOptional()
                                            .openapi({
                                              description:
                                                'Number of the building, house or apartment in the shipping address.',
                                            }),
                                          postalCode: z
                                            .string()
                                            .exactOptional()
                                            .openapi({ description: 'Postal code.' }),
                                          reference: z
                                            .string()
                                            .nullable()
                                            .exactOptional()
                                            .openapi({
                                              description:
                                                'Complement that might help locate the shipping address more precisely in case of delivery.',
                                            }),
                                          state: z
                                            .string()
                                            .exactOptional()
                                            .openapi({
                                              description: 'State of the shipping address.',
                                            }),
                                          street: z
                                            .string()
                                            .exactOptional()
                                            .openapi({
                                              description: 'Street of the shipping address.',
                                            }),
                                        })
                                        .nullable()
                                        .exactOptional()
                                        .openapi({
                                          description: 'Address information.',
                                          required: [],
                                        }),
                                      dockId: z
                                        .string()
                                        .nullable()
                                        .exactOptional()
                                        .openapi({ description: 'Corresponding dock ID.' }),
                                      friendlyName: z
                                        .string()
                                        .nullable()
                                        .exactOptional()
                                        .openapi({ description: 'Friendly name.' }),
                                      isPickupStore: z
                                        .boolean()
                                        .exactOptional()
                                        .openapi({
                                          description: 'Indicates whether it is the pickup store.',
                                        }),
                                    })
                                    .exactOptional()
                                    .openapi({
                                      description: 'Information on the pickup store.',
                                      required: [],
                                    }),
                                  polygonName: z
                                    .string()
                                    .nullable()
                                    .exactOptional()
                                    .openapi({ description: 'Polygon name.' }),
                                  price: z
                                    .int()
                                    .exactOptional()
                                    .openapi({ description: 'Price in cents.' }),
                                  shippingEstimate: z
                                    .string()
                                    .exactOptional()
                                    .openapi({
                                      description:
                                        'Shipping estimate. For instance, "three business days" will be represented as `3bd`.',
                                    }),
                                  shippingEstimateDate: z
                                    .string()
                                    .nullable()
                                    .exactOptional()
                                    .openapi({ description: 'Shipping estimate date.' }),
                                  tax: z
                                    .int()
                                    .exactOptional()
                                    .openapi({ description: 'Tax in cents.' }),
                                  transitTime: z
                                    .string()
                                    .exactOptional()
                                    .openapi({
                                      description:
                                        'Transit time. For instance, "three business days" is represented as `3bd`.',
                                    }),
                                })
                                .openapi({ required: [] }),
                            )
                            .exactOptional()
                            .openapi({ description: 'Information on available SLAs.' }),
                        })
                        .openapi({ required: [] }),
                    )
                    .exactOptional()
                    .openapi({
                      description:
                        'Array with logistics information. Each object in this array corresponds to an object in the `items` array, based on the respective `itemIndex`.',
                    }),
                  selectedAddresses: z
                    .array(
                      z
                        .object({
                          addressId: z
                            .string()
                            .exactOptional()
                            .openapi({ description: 'Address ID.' }),
                          addressType: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description:
                                'Type of address. For example, `Residential` or `Pickup`.',
                            }),
                          city: z
                            .string()
                            .exactOptional()
                            .openapi({ description: 'City of the shipping address.' }),
                          complement: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description:
                                'Complement to the shipping address, in case it applies.',
                            }),
                          country: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description:
                                'Three letter ISO code of the country of the shipping address.',
                            }),
                          geoCoordinates: z
                            .array(z.string())
                            .exactOptional()
                            .openapi({
                              description:
                                'Array with two strings with geocoordinates, first latitude, then longitude.',
                            }),
                          isDisposable: z
                            .boolean()
                            .exactOptional()
                            .openapi({ description: 'Indicates whether address is disposable.' }),
                          neighborhood: z
                            .string()
                            .exactOptional()
                            .openapi({ description: 'Neighborhood of the shipping address.' }),
                          number: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description:
                                'Number of the building, house or apartment in the shipping address.',
                            }),
                          postalCode: z
                            .string()
                            .exactOptional()
                            .openapi({ description: 'Postal code.' }),
                          receiverName: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description: 'Name of the person who is going to receive the order.',
                            }),
                          reference: z
                            .string()
                            .nullable()
                            .exactOptional()
                            .openapi({
                              description:
                                'Complement that might help locate the shipping address more precisely in case of delivery.',
                            }),
                          state: z
                            .string()
                            .exactOptional()
                            .openapi({ description: 'State of the shipping address.' }),
                          street: z
                            .string()
                            .exactOptional()
                            .openapi({ description: 'Street of the shipping address.' }),
                        })
                        .openapi({ required: [] }),
                    )
                    .exactOptional()
                    .openapi({
                      description:
                        'Array with information on the selected addresses for the order.',
                    }),
                })
                .exactOptional()
                .openapi({
                  description: 'Shipping information pertinent to the order.',
                  required: [],
                }),
              storeId: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({ description: 'ID of the store.' }),
              storePreferencesData: z
                .object({})
                .exactOptional()
                .openapi({
                  description:
                    "Object containing data from the store's configuration (stored in VTEX's License Manager).",
                }),
              subscriptionData: z
                .object({})
                .nullable()
                .exactOptional()
                .openapi({ description: 'Subscription information.' }),
              totalizers: z
                .array(z.any())
                .exactOptional()
                .openapi({
                  description:
                    'Array containing an object for each totalizer for the purchase. Totalizers contain the sum of values for a specific part of the order (e.g. Total item value, Total shipping value).',
                }),
              userProfileId: z
                .string()
                .exactOptional()
                .openapi({ description: 'Unique ID associated with the customer profile.' }),
              userType: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({ description: 'User type.' }),
              value: z
                .int()
                .exactOptional()
                .openapi({
                  description:
                    'Total value of the order without separating cents. For example, $24.99 is represented as `2499`.',
                }),
            })
            .openapi({ required: [] }),
          example: {
            allowManualPrice: false,
            availableAccounts: [],
            availableAddresses: [
              {
                addressId: '666c2e830bd9474ab6f6cc53fb6dd2d2',
                addressType: 'residential',
                city: 'Brasília',
                complement: '15º andar',
                country: 'BRA',
                geoCoordinates: ['-47.924747467041016', '-15.832582473754883'],
                isDisposable: true,
                neighborhood: 'Copacabana',
                number: '123',
                postalCode: '70386000',
                receiverName: 'Clark Kent',
                reference: null,
                state: 'DF',
                street: 'Rua da minha casa',
              },
            ],
            canEditData: true,
            clientPreferencesData: { locale: 'pt-BR', optinNewsLetter: false },
            clientProfileData: {
              corporateDocument: null,
              corporateName: null,
              corporatePhone: null,
              customerClass: null,
              document: '12345678900',
              documentType: 'cpf',
              email: 'clark.kent@example.com',
              firstName: 'Clark',
              isCorporate: false,
              lastName: 'Kent',
              phone: '+5521998765432',
              profileCompleteOnLoading: false,
              profileErrorOnLoading: null,
              stateInscription: null,
              tradeName: null,
            },
            commercialConditionData: null,
            customData: null,
            giftRegistryData: null,
            hooksData: null,
            ignoreProfileData: false,
            invoiceData: null,
            isCheckedIn: false,
            itemMetadata: {
              items: [
                {
                  assemblyOptions: [],
                  detailUrl: '/racao-royal-canin-feline-urinary/p',
                  ean: '123456789',
                  id: '1',
                  imageUrl:
                    'http://lojadobreno.vteximg.com.br/arquivos/ids/155450-55-55/Racao-Royal-Canin-Feline-Urinary-SO.jpg?v=637139444438700000',
                  name: 'Ração Royal Canin Feline Urinary 500g',
                  productId: '1',
                  refId: '0001',
                  seller: '1',
                  skuName: 'Ração Royal Canin Feline Urinary 500g',
                },
              ],
            },
            items: [
              {
                additionalInfo: {
                  brandId: '2000000',
                  brandName: 'Brahma',
                  dimension: null,
                  offeringInfo: null,
                  offeringType: null,
                  offeringTypeId: null,
                },
                assemblies: [],
                attachmentOfferings: [],
                attachments: [],
                availability: 'available',
                bundleItems: [],
                components: [],
                detailUrl: '/chopp-brahma-claro-30l/p',
                ean: null,
                id: '2',
                imageUrl:
                  'http://mystore.vteximg.com.br/arquivos/ids/155400-55-55/30l_v2.png?v=637303412106100000',
                isGift: false,
                listPrice: 49900,
                manualPrice: null,
                manualPriceAppliedBy: null,
                manufacturerCode: null,
                measurementUnit: 'un',
                modalType: null,
                name: 'Chopp Brahma Claro 30L',
                offerings: [],
                parentAssemblyBinding: null,
                parentItemIndex: null,
                preSaleDate: null,
                price: 32890,
                priceDefinition: {
                  calculatedSellingPrice: 32890,
                  sellingPrices: [{ quantity: 1, value: 32890 }],
                  total: 32890,
                },
                priceTags: [],
                priceValidUntil: '2022-07-13T18:30:46Z',
                productCategories: { '1': 'Bebidas' },
                productCategoryIds: '/1/',
                productId: '2',
                productRefId: '',
                quantity: 1,
                refId: 'CBC30L',
                rewardValue: 0,
                seller: '1',
                sellerChain: ['1'],
                sellingPrice: 32890,
                skuName: 'Chopp Brahma Claro 30L',
                tax: 0,
                uniqueId: '9D6E447B3FF64CEDA33B17C01379C119',
                unitMultiplier: 1,
              },
            ],
            itemsOrdination: { ascending: true, criteria: 'NAME' },
            loggedIn: false,
            marketingData: {
              coupon: 'free-shipping',
              utmCampaign: 'Black friday',
              utmMedium: 'CPC',
              utmSource: 'app',
              utmiCampaign: null,
              utmiPart: null,
              utmipage: null,
            },
            messages: [],
            openTextField: null,
            orderFormId: 'ede846222cd44046ba6c638442c3505a',
            paymentData: {
              availableAccounts: [],
              availableTokens: [],
              giftCardMessages: [],
              giftCards: [],
              installmentOptions: [
                {
                  bin: null,
                  installments: [
                    {
                      count: 1,
                      hasInterestRate: false,
                      interestRate: 0,
                      sellerMerchantInstallments: [
                        {
                          count: 1,
                          hasInterestRate: false,
                          id: 'LOJADOBRENO',
                          interestRate: 0,
                          total: 15000,
                          value: 15000,
                        },
                      ],
                      total: 15000,
                      value: 15000,
                    },
                    {
                      count: 2,
                      hasInterestRate: false,
                      interestRate: 0,
                      sellerMerchantInstallments: [
                        {
                          count: 2,
                          hasInterestRate: false,
                          id: 'LOJADOBRENO',
                          interestRate: 0,
                          total: 15000,
                          value: 7500,
                        },
                      ],
                      total: 15000,
                      value: 7500,
                    },
                  ],
                  paymentGroupName: null,
                  paymentName: null,
                  paymentSystem: '2',
                  value: 15000,
                },
              ],
              paymentSystems: [
                {
                  availablePayments: null,
                  description: null,
                  dueDate: '2020-03-05T14:59:00.7879306Z',
                  groupName: 'creditCardPaymentGroup',
                  id: 2,
                  isCustom: false,
                  name: 'Visa',
                  requiresAuthentication: false,
                  requiresDocument: false,
                  stringId: '2',
                  template: 'creditCardPaymentGroup-template',
                  validator: {
                    cardCodeMask: '999',
                    cardCodeRegex: '^[0-3]{8}$',
                    mask: '9999 9999 9999 9999',
                    regex: '^2[1-8]{17}$',
                    useBillingAddress: true,
                    useCardHolderName: true,
                    useCvv: true,
                    useExpirationDate: true,
                    weights: [2, 1, 2, 1, 2, 1],
                  },
                },
              ],
              payments: [],
            },
            profileProvider: 'VTEX',
            ratesAndBenefitsData: { rateAndBenefitsIdentifiers: [], teaser: [] },
            salesChannel: '1',
            selectableGifts: [],
            sellers: [{ id: '1', logo: '', name: 'lojadobreno' }],
            shippingData: {
              address: {
                addressId: 'teste',
                addressType: 'residential',
                city: 'Brasília',
                complement: '15º andar',
                country: 'BRA',
                geoCoordinates: ['-47.924747467041016', '-15.832582473754883'],
                isDisposable: true,
                neighborhood: 'Copacabana',
                number: '123',
                postalCode: '70386000',
                receiverName: 'Clark Kent',
                reference: null,
                state: 'DF',
                street: 'Rua da minha casa',
              },
              availableAddresses: [
                {
                  addressId: 'teste',
                  addressType: 'residential',
                  city: 'Rio de Janeiro',
                  complement: '15º andar',
                  country: 'BRA',
                  geoCoordinates: ['-47.924747467041016', '-15.832582473754883'],
                  isDisposable: true,
                  neighborhood: 'Copacabana',
                  number: '123',
                  postalCode: '12345000',
                  receiverName: 'Clark Kent',
                  reference: null,
                  state: 'RJ',
                  street: 'Rua da minha casa',
                },
              ],
              logisticsInfo: [
                {
                  addressId: 'teste',
                  deliveryChannels: [{ id: 'delivery' }, { id: 'pickup-in-point' }],
                  itemId: '2',
                  itemIndex: 0,
                  selectedDeliveryChannel: 'delivery',
                  selectedSla: 'Normal',
                  shipsTo: ['BRA', 'COL', 'USA'],
                  slas: [
                    {
                      availableDeliveryWindows: [],
                      deliveryChannel: 'delivery',
                      deliveryIds: [
                        {
                          courierId: '1',
                          courierName: 'Transportadora',
                          dockId: '1',
                          kitItemDetails: [],
                          quantity: 1,
                          warehouseId: '1_1',
                        },
                      ],
                      deliveryWindow: null,
                      id: 'Normal',
                      listPrice: 1500,
                      lockTTL: '10d',
                      name: 'Normal',
                      pickupDistance: 0,
                      pickupPointId: null,
                      pickupStoreInfo: {
                        additionalInfo: null,
                        address: null,
                        dockId: null,
                        friendlyName: null,
                        isPickupStore: false,
                      },
                      polygonName: null,
                      price: 1500,
                      shippingEstimate: '3bd',
                      shippingEstimateDate: null,
                      tax: 0,
                      transitTime: '3bd',
                    },
                  ],
                },
              ],
              pickupPoints: [],
              selectedAddresses: [
                {
                  addressId: 'teste',
                  addressType: 'residential',
                  city: 'Rio de Janeiro',
                  complement: '15º andar',
                  country: 'BRA',
                  geoCoordinates: ['-47.924747467041016', '-15.832582473754883'],
                  isDisposable: true,
                  neighborhood: 'Copacabana',
                  number: '123',
                  postalCode: '12345000',
                  receiverName: 'Clark Kent',
                  reference: null,
                  state: 'RJ',
                  street: 'Rua da minha casa',
                },
              ],
            },
            storeId: null,
            storePreferencesData: {
              countryCode: 'BRA',
              currencyCode: 'BRL',
              currencyFormatInfo: {
                currencyDecimalDigits: 2,
                currencyDecimalSeparator: ',',
                currencyGroupSeparator: '.',
                currencyGroupSize: 3,
                startsWithCurrencySymbol: true,
              },
              currencyLocale: 1046,
              'currencySymboupdate cartl': 'R$',
              saveUserData: true,
              timeZone: 'E. South America Standard Time',
            },
            subscriptionData: null,
            totalizers: [{ id: 'Items', name: 'Total dos Itens', value: 15000 }],
            userProfileId: 'fb542e51-5488-4c34-8d17-ed8fcf597a94',
            userType: null,
            value: 34390,
          },
        },
      },
    },
  },
  security: [],
})

export const putApiCheckoutPubOrderFormOrderFormIdItemsItemIndexPriceRoute = createRoute({
  method: 'put',
  path: '/api/checkout/pub/orderForm/{orderFormId}/items/{itemIndex}/price',
  tags: ['Shopping cart'],
  summary: 'Change price',
  description:
    "This request changes the price of an SKU in a cart. You can also perform type of bulk price change with the [Update cart items request](https://developers.vtex.com/vtex-rest-api/reference/shopping-cart#itemsupdate)\r\n\r\nThe [orderForm](https://developers.vtex.com/docs/guides/orderform-fields) is the data structure which represents a shopping cart and contains all information pertaining to it. Hence, the `orderFormId` is the identification code of a given cart.\n\r\n\rYou need to inform which cart you are referring to, by sending its `orderFormId`; and what is the item whose price you want to change, by sending its `itemIndex`.\n\r\n\rYou also need to pass the new price value in the body.\n\r\n\rRemember that, to use this endpoint, the feature of *manual price* must be active. To check if it's active, use the [Get orderForm configuration](https://developers.vtex.com/reference#getorderformconfiguration) endpoint. To make it active, use the [Update orderForm configuration](https://developers.vtex.com/reference#updateorderformconfiguration) endpoint, making the `allowManualPrice` field `true`.\n\r\n\r> Whenever you use this request to change the price of an item, all items in that cart with the same SKU are affected by this change. This applies even to items that share the SKU but have been separated into different objects in the `items` array due to customizations or attachments, for example.",
  operationId: 'PriceChange',
  request: {
    params: z.object({
      orderFormId: z
        .string()
        .default('ede846222cd44046ba6c638442c3505a')
        .openapi({
          param: {
            description:
              'ID of the orderForm corresponding to the cart whose items will have the price changed.',
            in: 'path',
            name: 'orderFormId',
            required: true,
            schema: { default: 'ede846222cd44046ba6c638442c3505a', type: 'string' },
            style: 'simple',
          },
        }),
      itemIndex: z
        .string()
        .openapi({
          param: {
            description:
              'The index of the item in the cart. Each cart item is identified by an index, starting in 0.',
            in: 'path',
            name: 'itemIndex',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
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
    body: {
      description: '',
      content: {
        'application/json': { schema: PriceChangeRequestSchema, example: { price: 10000 } },
      },
      required: true,
    },
  },
  responses: { 200: { description: 'OK', content: {} } },
})

export const postApiCheckoutPubOrderFormOrderFormIdMessagesClearRoute = createRoute({
  method: 'post',
  path: '/api/checkout/pub/orderForm/{orderFormId}/messages/clear',
  tags: ['Configuration'],
  summary: 'Clear orderForm messages',
  description:
    'This request removes all messages from the `messages` field of the orderForm , leaving it empty.\r\n\r\nYou must send an empty JSON in the body of the request.\r\n\r\nThe [orderForm](https://developers.vtex.com/docs/guides/orderform-fields) is the data structure which represents a shopping cart and contains all information pertaining to it. Hence, the `orderFormId` is the identification code of a given cart.\r\n\r\n**Important**: **Request Body** must always be sent with empty value "{ }" in this endpoint.',
  operationId: 'ClearorderFormMessages',
  request: {
    params: z.object({
      orderFormId: z
        .string()
        .default('ede846222cd44046ba6c638442c3505a')
        .openapi({
          param: {
            description:
              'ID of the orderForm corresponding to the cart whose messages you want to remove.',
            in: 'path',
            name: 'orderFormId',
            required: true,
            schema: { default: 'ede846222cd44046ba6c638442c3505a', type: 'string' },
            style: 'simple',
          },
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
    body: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .object({})
            .default({})
            .openapi({ description: 'This object must be empty.', title: '' }),
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
              allowManualPrice: z
                .boolean()
                .exactOptional()
                .openapi({ description: 'Permission to modify item price manually.' }),
              availableAccounts: z
                .array(z.string())
                .exactOptional()
                .openapi({ description: 'Available accounts.' }),
              availableAddresses: z
                .array(
                  z
                    .object({
                      addressId: z.string().exactOptional().openapi({ description: 'Address ID.' }),
                      addressType: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'Address type.' }),
                      city: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'City of the address.' }),
                      complement: z
                        .string()
                        .nullable()
                        .exactOptional()
                        .openapi({ description: 'Complement to the address.' }),
                      country: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'Country of the address. ISO three-letter code.' }),
                      geoCoordinates: z
                        .array(z.number())
                        .exactOptional()
                        .openapi({
                          description:
                            'Array containing two floats with geocoordinates, first longitude, then latitude.',
                        }),
                      isDisposable: z
                        .boolean()
                        .exactOptional()
                        .openapi({ description: 'Indicates whether address is disposable.' }),
                      neighborhood: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'Neighborhood of the address.' }),
                      number: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'Number of the address.' }),
                      receiverName: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'Name of the receiver.' }),
                      reference: z
                        .string()
                        .nullable()
                        .exactOptional()
                        .openapi({
                          description: 'Reference that may help in the location of the address.',
                        }),
                      state: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'State of the address.' }),
                      street: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'Street of the address.' }),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional()
                .openapi({ description: 'Information on each available address.' }),
              canEditData: z
                .boolean()
                .exactOptional()
                .openapi({ description: 'Data can be edited.' }),
              clientPreferencesData: z
                .object({
                  locale: z
                    .string()
                    .exactOptional()
                    .openapi({ description: "Client's locale. Examples: `pt-BR` and `en-US`." }),
                  optinNewsLetter: z
                    .boolean()
                    .default(false)
                    .exactOptional()
                    .openapi({
                      description:
                        '`true` if the client opted to receive newsletter from the store.',
                    }),
                })
                .exactOptional()
                .openapi({
                  description:
                    'Object containing preferences from the client who placed the order.',
                  required: [],
                }),
              clientProfileData: z
                .object({
                  corporateDocument: z
                    .string()
                    .nullable()
                    .exactOptional()
                    .openapi({
                      description: 'Corporate document, if the customer is a legal entity.',
                    }),
                  corporateName: z
                    .string()
                    .nullable()
                    .exactOptional()
                    .openapi({ description: 'Company name, if the customer is a legal entity.' }),
                  corporatePhone: z
                    .string()
                    .nullable()
                    .exactOptional()
                    .openapi({
                      description: 'Corporate phone number, if the customer is a legal entity.',
                    }),
                  customerClass: z
                    .string()
                    .nullable()
                    .exactOptional()
                    .openapi({ description: 'Customer class.' }),
                  document: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'Document informed by the customer.' }),
                  documentType: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'Type of the document informed by the customer.' }),
                  email: z.string().exactOptional().openapi({ description: 'Email address.' }),
                  firstName: z.string().exactOptional().openapi({ description: 'First name.' }),
                  isCorporate: z
                    .boolean()
                    .exactOptional()
                    .openapi({ description: 'Indicates whether the customer is a legal entity.' }),
                  lastName: z.string().exactOptional().openapi({ description: 'Last name.' }),
                  phone: z.string().exactOptional().openapi({ description: 'Phone number.' }),
                  profileCompleteOnLoading: z
                    .boolean()
                    .exactOptional()
                    .openapi({ description: 'Indicates whether profile is complete on loading.' }),
                  profileErrorOnLoading: z
                    .boolean()
                    .nullable()
                    .exactOptional()
                    .openapi({
                      description: 'Indicates whether profile presents error on loading.',
                    }),
                  stateInscription: z
                    .string()
                    .nullable()
                    .exactOptional()
                    .openapi({
                      description: 'State inscription, if the customer is a legal entity.',
                    }),
                  tradeName: z
                    .string()
                    .nullable()
                    .exactOptional()
                    .openapi({ description: 'Trade name, if the customer is a legal entity.' }),
                })
                .exactOptional()
                .openapi({ description: "Customer's profile information.", required: [] }),
              commercialConditionData: z
                .object({})
                .nullable()
                .exactOptional()
                .openapi({ description: 'Object containing commercial condition information.' }),
              customData: z
                .object({})
                .nullable()
                .exactOptional()
                .openapi({ description: 'Customer additional information.' }),
              giftRegistryData: z
                .object({})
                .nullable()
                .exactOptional()
                .openapi({ description: 'Gift registry list information.' }),
              hooksData: z
                .object({})
                .nullable()
                .exactOptional()
                .openapi({ description: 'Hooks information.' }),
              ignoreProfileData: z
                .boolean()
                .exactOptional()
                .openapi({ description: 'Ignore customer profile data.' }),
              invoiceData: z
                .object({})
                .nullable()
                .exactOptional()
                .openapi({
                  description: "Object containing information pertinent to the order's invoice.",
                }),
              isCheckedIn: z
                .boolean()
                .exactOptional()
                .openapi({ description: 'Indicates whether order is checked in.' }),
              itemMetadata: z
                .object({
                  items: z
                    .array(
                      z
                        .object({
                          detailUrl: z
                            .string()
                            .exactOptional()
                            .openapi({ description: 'Detail URL.' }),
                          ean: z
                            .string()
                            .nullable()
                            .exactOptional()
                            .openapi({ description: 'European Article Number.' }),
                          id: z.string().exactOptional().openapi({ description: 'Item ID.' }),
                          imageUrl: z
                            .string()
                            .exactOptional()
                            .openapi({ description: 'Image URL.' }),
                          name: z
                            .string()
                            .exactOptional()
                            .openapi({ description: 'Product name.' }),
                          productId: z
                            .string()
                            .exactOptional()
                            .openapi({ description: 'Product ID.' }),
                          refId: z.string().exactOptional().openapi({ description: 'Ref ID.' }),
                          seller: z.string().exactOptional().openapi({ description: 'Seller.' }),
                          skuName: z.string().exactOptional().openapi({ description: 'SKU name.' }),
                        })
                        .openapi({ required: [] }),
                    )
                    .exactOptional()
                    .openapi({
                      description: 'List of objects containing metadata on each item in the order.',
                    }),
                })
                .exactOptional()
                .openapi({ description: 'Item metadata.', required: [] }),
              items: z
                .array(
                  z
                    .object({
                      additionalInfo: z
                        .object({
                          brandId: z.string().exactOptional().openapi({ description: 'Brand ID.' }),
                          brandName: z
                            .string()
                            .exactOptional()
                            .openapi({ description: 'Brand name.' }),
                          dimension: z
                            .string()
                            .nullable()
                            .exactOptional()
                            .openapi({ description: 'Dimension.' }),
                          offeringInfo: z
                            .string()
                            .nullable()
                            .exactOptional()
                            .openapi({ description: 'Offering information.' }),
                          offeringType: z
                            .string()
                            .nullable()
                            .exactOptional()
                            .openapi({ description: 'Offering type.' }),
                          offeringTypeId: z
                            .string()
                            .nullable()
                            .exactOptional()
                            .openapi({ description: 'Offering type ID.' }),
                        })
                        .exactOptional()
                        .openapi({ description: 'Additional information.', required: [] }),
                      attachments: z
                        .array(z.string())
                        .exactOptional()
                        .openapi({ description: 'Array containing information on attachments.' }),
                      availability: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'Availability.' }),
                      bundleItems: z
                        .array(
                          z
                            .object({
                              id: z
                                .int()
                                .exactOptional()
                                .openapi({ description: 'Service identifier.' }),
                              name: z
                                .string()
                                .exactOptional()
                                .openapi({ description: 'Service name.' }),
                              price: z
                                .int()
                                .exactOptional()
                                .openapi({ description: 'Service price in cents.' }),
                              type: z
                                .string()
                                .exactOptional()
                                .openapi({ description: 'Service type.' }),
                            })
                            .openapi({ required: [] }),
                        )
                        .exactOptional()
                        .openapi({
                          description:
                            'Information on services sold along with the SKU. Example: a gift package.',
                        }),
                      detailUrl: z.string().exactOptional().openapi({ description: 'Detail URL.' }),
                      ean: z
                        .string()
                        .nullable()
                        .exactOptional()
                        .openapi({ description: 'European Article Number.' }),
                      id: z.string().exactOptional().openapi({ description: 'ID of the item.' }),
                      imageUrl: z.string().exactOptional().openapi({ description: 'Image URL.' }),
                      isGift: z
                        .boolean()
                        .exactOptional()
                        .openapi({ description: 'Indicates whether item is a gift.' }),
                      listPrice: z
                        .int()
                        .exactOptional()
                        .openapi({ description: 'List price in cents.' }),
                      manualPrice: z
                        .int()
                        .nullable()
                        .exactOptional()
                        .openapi({ description: 'Manual price in cents.' }),
                      manualPriceAppliedBy: z
                        .string()
                        .nullable()
                        .exactOptional()
                        .openapi({
                          description: 'User that applied the manual price, if that is the case.',
                        }),
                      manufacturerCode: z
                        .string()
                        .nullable()
                        .exactOptional()
                        .openapi({ description: 'Manufacturer code.' }),
                      measurementUnit: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'Measurement unit.' }),
                      modalType: z
                        .string()
                        .nullable()
                        .exactOptional()
                        .openapi({ description: 'Modal type.' }),
                      name: z.string().exactOptional().openapi({ description: 'Product name.' }),
                      parentAssemblyBinding: z
                        .string()
                        .nullable()
                        .exactOptional()
                        .openapi({ description: 'Parent assembly binding.' }),
                      parentItemIndex: z
                        .int()
                        .nullable()
                        .exactOptional()
                        .openapi({ description: 'Parent item index.' }),
                      preSaleDate: z
                        .string()
                        .nullable()
                        .exactOptional()
                        .openapi({ description: 'Presale date.' }),
                      price: z.int().exactOptional().openapi({ description: 'Price in cents.' }),
                      priceDefinition: z
                        .object({
                          calculatedSellingPrice: z
                            .int()
                            .exactOptional()
                            .openapi({
                              description: "Item's calculated unitary selling price in cents.",
                            }),
                          sellingPrices: z
                            .array(
                              z
                                .object({
                                  quantity: z
                                    .int()
                                    .exactOptional()
                                    .openapi({
                                      description:
                                        'Rounding quantity, meaning how many items are rounded to this value.',
                                    }),
                                  value: z
                                    .int()
                                    .exactOptional()
                                    .openapi({
                                      description: 'Value in cents for that specific rounding.',
                                    }),
                                })
                                .openapi({ required: [] }),
                            )
                            .exactOptional()
                            .openapi({
                              description:
                                'Array of objects, each containing value (in cents) and quantity for the different rounding instances that can be combined to form the correctly rounded total.',
                            }),
                          total: z
                            .int()
                            .exactOptional()
                            .openapi({
                              description: 'Total value for all units of the item in cents.',
                            }),
                        })
                        .exactOptional()
                        .openapi({
                          description: 'Price information for all units of a specific item.',
                          required: [],
                        }),
                      priceTags: z
                        .array(
                          z
                            .object({
                              identifier: z
                                .string()
                                .exactOptional()
                                .openapi({ description: 'Price tag identifier.' }),
                              isPercentual: z
                                .boolean()
                                .exactOptional()
                                .openapi({
                                  description:
                                    'Indicates whether price tag value is applied through a percentage.',
                                }),
                              name: z
                                .string()
                                .exactOptional()
                                .openapi({ description: 'Price tag name.' }),
                              rawValue: z
                                .int()
                                .exactOptional()
                                .openapi({ description: 'Price tag raw value.' }),
                              value: z
                                .int()
                                .exactOptional()
                                .openapi({ description: 'Price tag value.' }),
                            })
                            .openapi({ required: [] }),
                        )
                        .exactOptional()
                        .openapi({
                          description:
                            'Array of price tags, each of which, modifies the price in some way, like discounts or rates that apply to the item in the context of the order.',
                        }),
                      priceValidUntil: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'Price expiration date and time.' }),
                      productCategories: z
                        .object({
                          '{ID}': z
                            .string()
                            .exactOptional()
                            .openapi({
                              description:
                                'Product category corresponding to the ID in the field key.',
                            }),
                        })
                        .exactOptional()
                        .openapi({
                          description:
                            'Object, where each field is an ID from `productCategoryIds`.',
                          required: [],
                        }),
                      productCategoryIds: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'Product category IDs.' }),
                      productId: z.string().exactOptional().openapi({ description: 'Product ID.' }),
                      productRefId: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'Product Ref ID.' }),
                      quantity: z.int().exactOptional().openapi({ description: 'Quantity.' }),
                      refId: z.string().exactOptional().openapi({ description: 'Ref ID.' }),
                      rewardValue: z
                        .int()
                        .exactOptional()
                        .openapi({ description: 'Reward value in cents.' }),
                      seller: z.string().exactOptional().openapi({ description: 'Seller.' }),
                      sellerChain: z
                        .array(z.string().openapi({ description: 'Seller.' }))
                        .exactOptional()
                        .openapi({
                          description:
                            'Sellers involved in the chain. The list should contain only one seller, unless it is a [Multilevel Omnichannel Inventory](https://help.vtex.com/en/tutorial/multilevel-omnichannel-inventory--7M1xyCZWUyCB7PcjNtOyw4) order.',
                        }),
                      sellingPrice: z
                        .int()
                        .exactOptional()
                        .openapi({
                          description:
                            'Selling price in cents. Note that this field may be subject to rounding discrepancies. We recommend retrieving data from the `priceDefinition` data structure instead.',
                        }),
                      skuName: z.string().exactOptional().openapi({ description: 'SKU name.' }),
                      tax: z.int().exactOptional().openapi({ description: 'Tax value in cents.' }),
                      uniqueId: z.string().exactOptional().openapi({ description: 'Unique ID.' }),
                      unitMultiplier: z
                        .int()
                        .exactOptional()
                        .openapi({ description: 'Unit multiplier.' }),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional()
                .openapi({ description: 'Information on each item in the order.' }),
              itemsOrdination: z
                .object({
                  ascending: z
                    .boolean()
                    .exactOptional()
                    .openapi({ description: 'Indicates whether the ordering is ascending.' }),
                  criteria: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'Criteria adopted to order the items in the list.' }),
                })
                .exactOptional()
                .openapi({
                  description:
                    'Object containing information about the ordering of items within the orderForm.',
                  required: [],
                }),
              loggedIn: z
                .boolean()
                .exactOptional()
                .openapi({ description: 'Indicates whether the user is logged into the store.' }),
              marketingData: z
                .object({
                  coupon: z
                    .string()
                    .default('free-shipping')
                    .exactOptional()
                    .openapi({
                      description:
                        'Sending an existing coupon code in this field will return the corresponding discount in the purchase. Use the [cart simulation](https://developers.vtex.com/vtex-rest-api/reference/orderform#orderformsimulation) request to check which coupons might apply before placing the order.',
                    }),
                  utmCampaign: z
                    .string()
                    .default('Black friday')
                    .exactOptional()
                    .openapi({ description: 'UTM campaign' }),
                  utmMedium: z
                    .string()
                    .default('CPC')
                    .exactOptional()
                    .openapi({ description: 'UTM medium.' }),
                  utmSource: z
                    .string()
                    .default('Facebook')
                    .exactOptional()
                    .openapi({ description: 'UTM source.' }),
                  utmiCampaign: z
                    .string()
                    .nullable()
                    .default('utmi_campaign-example')
                    .exactOptional()
                    .openapi({ description: 'utmi_campaign (internal utm).' }),
                  utmiPage: z
                    .string()
                    .nullable()
                    .default('utmi_page-example')
                    .exactOptional()
                    .openapi({ description: 'utmi_page (internal utm)' }),
                  utmiPart: z
                    .string()
                    .nullable()
                    .default('utmi_part-example')
                    .exactOptional()
                    .openapi({ description: 'utmi_part (internal utm).' }),
                })
                .exactOptional()
                .openapi({
                  description:
                    'Object containing promotion data such as coupon tracking information and internal or external UTMs.',
                  required: [],
                }),
              messages: z
                .array(z.any())
                .exactOptional()
                .openapi({
                  description:
                    'Array containing an object for each message generated by our servers while processing the request.',
                }),
              openTextField: z
                .string()
                .nullable()
                .default('open-text-example')
                .exactOptional()
                .openapi({
                  description:
                    'Optional field meant to hold additional information about the order. We recommend using this field for text, not data formats such as `JSON` even if escaped. For that purpose, see [Creating customizable fields](https://developers.vtex.com/vtex-rest-api/docs/creating-customizable-fields-in-the-cart-with-checkout-api-1).',
                }),
              orderFormId: z
                .string()
                .exactOptional()
                .openapi({ description: 'ID of the orderForm corresponding to a specific cart.' }),
              paymentData: z
                .object({
                  giftCards: z
                    .array(
                      z
                        .object({
                          balance: z
                            .int()
                            .exactOptional()
                            .openapi({ description: 'Gift card balance in cents.' }),
                          id: z.string().exactOptional().openapi({ description: 'Gift card ID.' }),
                          inUse: z
                            .boolean()
                            .exactOptional()
                            .openapi({ description: 'Indicates whether gift card is in use.' }),
                          isSpecialCard: z
                            .boolean()
                            .exactOptional()
                            .openapi({ description: 'Indicates whether gift card is special.' }),
                          name: z
                            .string()
                            .exactOptional()
                            .openapi({ description: 'Gift card name.' }),
                          redemptionCode: z
                            .string()
                            .exactOptional()
                            .openapi({ description: 'Gift card redemption code.' }),
                          value: z
                            .int()
                            .exactOptional()
                            .openapi({ description: 'Gift card value in cents.' }),
                        })
                        .openapi({ required: [] }),
                    )
                    .exactOptional()
                    .openapi({ description: 'Gift card information, if it applies to the order.' }),
                  transactions: z
                    .array(
                      z
                        .object({
                          isActive: z
                            .boolean()
                            .exactOptional()
                            .openapi({ description: 'Indicates whether transaction is active.' }),
                          merchantName: z
                            .string()
                            .exactOptional()
                            .openapi({ description: 'Merchant name.' }),
                          payments: z
                            .array(
                              z
                                .object({
                                  accountId: z
                                    .string()
                                    .exactOptional()
                                    .openapi({ description: 'Account ID.' }),
                                  bin: z.string().exactOptional().openapi({ description: 'Bin.' }),
                                  installments: z
                                    .int()
                                    .exactOptional()
                                    .openapi({ description: 'Number of installments.' }),
                                  paymentSystem: z
                                    .string()
                                    .exactOptional()
                                    .openapi({ description: 'Payment system.' }),
                                  referenceValue: z
                                    .int()
                                    .exactOptional()
                                    .openapi({
                                      description:
                                        'Reference value for calculating interest rates, in case it applies. Displayed in cents.',
                                    }),
                                  value: z
                                    .int()
                                    .exactOptional()
                                    .openapi({
                                      description:
                                        'Value including interest, in case it applies. Displayed in cents.',
                                    }),
                                })
                                .openapi({ required: [] }),
                            )
                            .exactOptional()
                            .openapi({ description: 'Information on each payment.' }),
                          sharedTransaction: z
                            .boolean()
                            .exactOptional()
                            .openapi({ description: 'Indicates whather transaction is shared.' }),
                          transactionId: z
                            .string()
                            .exactOptional()
                            .openapi({ description: 'Transaction ID.' }),
                        })
                        .openapi({ required: [] }),
                    )
                    .exactOptional()
                    .openapi({
                      description: 'Information on each transaction pertinent to the order.',
                    }),
                })
                .exactOptional()
                .openapi({ description: "Information on the order's payment.", required: [] }),
              profileProvider: z
                .string()
                .exactOptional()
                .openapi({ description: 'Profile provider.' }),
              ratesAndBenefitsData: z
                .object({
                  rateAndBenefitsIdentifiers: z
                    .array(z.string())
                    .exactOptional()
                    .openapi({ description: 'List with rates and benefits identifiers.' }),
                  teaser: z
                    .array(z.string())
                    .exactOptional()
                    .openapi({ description: 'List with rates and benefits teasers.' }),
                })
                .exactOptional()
                .openapi({
                  description: 'Information on rates and benefits that apply to the order.',
                  required: [],
                }),
              salesChannel: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Attribute created by the seller, in their VTEX store configuration.',
                }),
              selectableGifts: z
                .array(z.any())
                .exactOptional()
                .openapi({
                  description: 'Array containing the data of the item selected as a gift.',
                }),
              sellers: z
                .array(
                  z
                    .object({
                      id: z.string().exactOptional().openapi({ description: 'Seller ID.' }),
                      logo: z
                        .string()
                        .nullable()
                        .exactOptional()
                        .openapi({ description: 'Seller logo.' }),
                      name: z.string().exactOptional().openapi({ description: 'Seller name.' }),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional()
                .openapi({ description: 'Information on each seller.' }),
              shippingData: z
                .object({
                  address: z
                    .object({
                      addressId: z.string().exactOptional().openapi({ description: 'Address ID.' }),
                      addressType: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description: 'Type of address. For example, `Residential` or `Pickup`.',
                        }),
                      city: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'City of the shipping address.' }),
                      complement: z
                        .string()
                        .nullable()
                        .exactOptional()
                        .openapi({
                          description: 'Complement to the shipping address, in case it applies.',
                        }),
                      country: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            'Three letter ISO code of the country of the shipping address.',
                        }),
                      geoCoordinates: z
                        .array(z.number())
                        .exactOptional()
                        .openapi({
                          description:
                            'Array containing two floats with geocoordinates, first longitude, then latitude.',
                        }),
                      isDisposable: z
                        .boolean()
                        .exactOptional()
                        .openapi({ description: 'Indicates whether address is disposable.' }),
                      neighborhood: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'Neighborhood of the shipping address.' }),
                      number: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            'Number of the building, house or apartment in the shipping address.',
                        }),
                      postalCode: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'Postal code.' }),
                      receiverName: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description: 'Name of the person who is going to receive the order.',
                        }),
                      reference: z
                        .string()
                        .nullable()
                        .exactOptional()
                        .openapi({
                          description:
                            'Complement that might help locate the shipping address more precisely in case of delivery.',
                        }),
                      state: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'State of the shipping address.' }),
                      street: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'Street of the shipping address.' }),
                    })
                    .exactOptional()
                    .openapi({ description: 'Address information.', required: [] }),
                  availableAddresses: z
                    .array(
                      z
                        .object({
                          addressId: z
                            .string()
                            .exactOptional()
                            .openapi({ description: 'Address ID.' }),
                          addressType: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description:
                                'Type of address. For example, `Residential` or `Pickup`.',
                            }),
                          city: z
                            .string()
                            .exactOptional()
                            .openapi({ description: 'City of the shipping address.' }),
                          complement: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description:
                                'Complement to the shipping address, in case it applies.',
                            }),
                          country: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description:
                                'Three letter ISO code of the country of the shipping address.',
                            }),
                          geoCoordinates: z
                            .array(z.number())
                            .exactOptional()
                            .openapi({
                              description:
                                'Array containing two floats with geocoordinates, first longitude, then latitude.',
                            }),
                          isDisposable: z
                            .boolean()
                            .exactOptional()
                            .openapi({ description: 'Indicates whether address is disposable.' }),
                          neighborhood: z
                            .string()
                            .exactOptional()
                            .openapi({ description: 'Neighborhood of the shipping address.' }),
                          number: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description:
                                'Number of the building, house or apartment in the shipping address.',
                            }),
                          postalCode: z
                            .string()
                            .exactOptional()
                            .openapi({ description: 'Postal code.' }),
                          receiverName: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description: 'Name of the person who is going to receive the order.',
                            }),
                          reference: z
                            .string()
                            .nullable()
                            .exactOptional()
                            .openapi({
                              description:
                                'Complement that might help locate the shipping address more precisely in case of delivery.',
                            }),
                          state: z
                            .string()
                            .exactOptional()
                            .openapi({ description: 'State of the shipping address.' }),
                          street: z
                            .string()
                            .exactOptional()
                            .openapi({ description: 'Street of the shipping address.' }),
                        })
                        .openapi({ required: [] }),
                    )
                    .exactOptional()
                    .openapi({
                      description:
                        'Array with information on the available addresses for the order.',
                    }),
                  logisticsInfo: z
                    .array(
                      z
                        .object({
                          addressId: z
                            .string()
                            .exactOptional()
                            .openapi({ description: 'Address ID.' }),
                          deliveryChannels: z
                            .array(
                              z
                                .object({
                                  id: z
                                    .string()
                                    .exactOptional()
                                    .openapi({ description: 'Delivery channel ID.' }),
                                })
                                .openapi({ required: [] }),
                            )
                            .exactOptional()
                            .openapi({ description: 'List of available delivery channels.' }),
                          itemId: z.string().exactOptional().openapi({ description: 'Item ID.' }),
                          itemIndex: z
                            .int()
                            .exactOptional()
                            .openapi({
                              description:
                                'Index corresponding to the position of the object in the `items` array.',
                            }),
                          selectedDeliveryChannel: z
                            .string()
                            .exactOptional()
                            .openapi({ description: 'Delivery channel selected by the customer.' }),
                          selectedSla: z
                            .string()
                            .exactOptional()
                            .openapi({ description: 'SLA selected by the customer.' }),
                          shipsTo: z
                            .array(
                              z.string().openapi({ description: 'Three letter country code.' }),
                            )
                            .exactOptional()
                            .openapi({
                              description: 'List of countries that the item may be shipped to.',
                            }),
                          slas: z
                            .array(
                              z
                                .object({
                                  deliveryChannel: z
                                    .string()
                                    .exactOptional()
                                    .openapi({ description: 'Delivery channel.' }),
                                  deliveryIds: z
                                    .array(
                                      z
                                        .object({
                                          courierId: z
                                            .string()
                                            .exactOptional()
                                            .openapi({ description: 'Courier ID.' }),
                                          courierName: z
                                            .string()
                                            .exactOptional()
                                            .openapi({ description: 'Courier name.' }),
                                          dockId: z
                                            .string()
                                            .exactOptional()
                                            .openapi({ description: 'Warehouse ID.' }),
                                          quantity: z
                                            .int()
                                            .exactOptional()
                                            .openapi({ description: 'Quantity.' }),
                                          warehouseId: z
                                            .string()
                                            .exactOptional()
                                            .openapi({ description: 'Warehouse ID.' }),
                                        })
                                        .openapi({ required: [] }),
                                    )
                                    .exactOptional()
                                    .openapi({ description: 'Information on each delivery ID.' }),
                                  id: z
                                    .string()
                                    .exactOptional()
                                    .openapi({ description: 'SLA ID.' }),
                                  listPrice: z
                                    .int()
                                    .exactOptional()
                                    .openapi({ description: 'List price in cents.' }),
                                  lockTTL: z
                                    .string()
                                    .exactOptional()
                                    .openapi({ description: 'Estimate date of delivery.' }),
                                  name: z
                                    .string()
                                    .exactOptional()
                                    .openapi({ description: 'SLA name.' }),
                                  pickupDistance: z
                                    .int()
                                    .exactOptional()
                                    .openapi({ description: 'Pickup point distance.' }),
                                  pickupPointId: z
                                    .string()
                                    .nullable()
                                    .exactOptional()
                                    .openapi({ description: 'Pickup point ID.' }),
                                  pickupStoreInfo: z
                                    .object({
                                      additionalInfo: z
                                        .string()
                                        .nullable()
                                        .exactOptional()
                                        .openapi({ description: 'Additional information.' }),
                                      address: z
                                        .object({
                                          addressType: z
                                            .string()
                                            .exactOptional()
                                            .openapi({
                                              description:
                                                'Type of address. For example, `Residential` or `Pickup`.',
                                            }),
                                          city: z
                                            .string()
                                            .exactOptional()
                                            .openapi({
                                              description: 'City of the shipping address.',
                                            }),
                                          complement: z
                                            .string()
                                            .nullable()
                                            .exactOptional()
                                            .openapi({
                                              description:
                                                'Complement to the shipping address, in case it applies.',
                                            }),
                                          country: z
                                            .string()
                                            .exactOptional()
                                            .openapi({
                                              description:
                                                'Three letter ISO code of the country of the shipping address.',
                                            }),
                                          geoCoordinates: z
                                            .array(z.number())
                                            .exactOptional()
                                            .openapi({
                                              description:
                                                'Array containing two floats with geocoordinates, first longitude, then latitude.',
                                            }),
                                          neighborhood: z
                                            .string()
                                            .exactOptional()
                                            .openapi({
                                              description: 'Neighborhood of the shipping address.',
                                            }),
                                          number: z
                                            .string()
                                            .exactOptional()
                                            .openapi({
                                              description:
                                                'Number of the building, house or apartment in the shipping address.',
                                            }),
                                          postalCode: z
                                            .string()
                                            .exactOptional()
                                            .openapi({ description: 'Postal code.' }),
                                          reference: z
                                            .string()
                                            .nullable()
                                            .exactOptional()
                                            .openapi({
                                              description:
                                                'Complement that might help locate the shipping address more precisely in case of delivery.',
                                            }),
                                          state: z
                                            .string()
                                            .exactOptional()
                                            .openapi({
                                              description: 'State of the shipping address.',
                                            }),
                                          street: z
                                            .string()
                                            .exactOptional()
                                            .openapi({
                                              description: 'Street of the shipping address.',
                                            }),
                                        })
                                        .nullable()
                                        .exactOptional()
                                        .openapi({
                                          description: 'Address information.',
                                          required: [],
                                        }),
                                      dockId: z
                                        .string()
                                        .nullable()
                                        .exactOptional()
                                        .openapi({ description: 'Corresponding dock ID.' }),
                                      friendlyName: z
                                        .string()
                                        .nullable()
                                        .exactOptional()
                                        .openapi({ description: 'Friendly name.' }),
                                      isPickupStore: z
                                        .boolean()
                                        .exactOptional()
                                        .openapi({
                                          description: 'Indicates whether it is the pickup store.',
                                        }),
                                    })
                                    .exactOptional()
                                    .openapi({
                                      description: 'Information on the pickup store.',
                                      required: [],
                                    }),
                                  polygonName: z
                                    .string()
                                    .nullable()
                                    .exactOptional()
                                    .openapi({ description: 'Polygon name.' }),
                                  price: z
                                    .int()
                                    .exactOptional()
                                    .openapi({ description: 'Price in cents.' }),
                                  shippingEstimate: z
                                    .string()
                                    .exactOptional()
                                    .openapi({
                                      description:
                                        'Shipping estimate. For instance, Three business days will be represented `3bd`.',
                                    }),
                                  shippingEstimateDate: z
                                    .string()
                                    .nullable()
                                    .exactOptional()
                                    .openapi({ description: 'Shipping estimate date.' }),
                                  tax: z
                                    .int()
                                    .exactOptional()
                                    .openapi({ description: 'Tax in cents.' }),
                                  transitTime: z
                                    .string()
                                    .exactOptional()
                                    .openapi({
                                      description:
                                        'Transit time. For instance, "three business days" is represented `3bd`.',
                                    }),
                                })
                                .openapi({ required: [] }),
                            )
                            .exactOptional()
                            .openapi({ description: 'Information on available SLAs.' }),
                        })
                        .openapi({ required: [] }),
                    )
                    .exactOptional()
                    .openapi({
                      description:
                        'Array with logistics information. Each object in this array corresponds to an object in the `items` array, based on the respective `itemIndex`.',
                    }),
                  selectedAddresses: z
                    .array(
                      z
                        .object({
                          addressId: z
                            .string()
                            .exactOptional()
                            .openapi({ description: 'Address ID.' }),
                          addressType: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description:
                                'Type of address. For example, `Residential` or `Pickup`.',
                            }),
                          city: z
                            .string()
                            .exactOptional()
                            .openapi({ description: 'City of the shipping address.' }),
                          complement: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description:
                                'Complement to the shipping address, in case it applies.',
                            }),
                          country: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description:
                                'Three letter ISO code of the country of the shipping address.',
                            }),
                          geoCoordinates: z
                            .array(z.number())
                            .exactOptional()
                            .openapi({
                              description:
                                'Array containing two floats with geocoordinates, first longitude, then latitude.',
                            }),
                          isDisposable: z
                            .boolean()
                            .exactOptional()
                            .openapi({ description: 'Indicates whether address is disposable.' }),
                          neighborhood: z
                            .string()
                            .exactOptional()
                            .openapi({ description: 'Neighborhood of the shipping address.' }),
                          number: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description:
                                'Number of the building, house or apartment in the shipping address.',
                            }),
                          postalCode: z
                            .string()
                            .exactOptional()
                            .openapi({ description: 'Postal code.' }),
                          receiverName: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description: 'Name of the person who is going to receive the order.',
                            }),
                          reference: z
                            .string()
                            .nullable()
                            .exactOptional()
                            .openapi({
                              description:
                                'Complement that might help locate the shipping address more precisely in case of delivery.',
                            }),
                          state: z
                            .string()
                            .exactOptional()
                            .openapi({ description: 'State of the shipping address.' }),
                          street: z
                            .string()
                            .exactOptional()
                            .openapi({ description: 'Street of the shipping address.' }),
                        })
                        .openapi({ required: [] }),
                    )
                    .exactOptional()
                    .openapi({
                      description:
                        'Array with information on the selected addresses for the order.',
                    }),
                })
                .exactOptional()
                .openapi({
                  description: 'Shipping information pertinent to the order.',
                  required: [],
                }),
              storeId: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({ description: 'ID of the store.' }),
              storePreferencesData: z
                .object({})
                .exactOptional()
                .openapi({
                  description:
                    "Object containing data from the store's configuration (stored in VTEX's License Manager).",
                }),
              subscriptionData: z
                .object({})
                .nullable()
                .exactOptional()
                .openapi({ description: 'Subscription information.' }),
              totalizers: z
                .array(z.any())
                .exactOptional()
                .openapi({
                  description:
                    'Array containing an object for each totalizer for the purchase. Totalizers contain the sum of values for a specific part of the order (e.g. Total item value, Total shipping value).',
                }),
              userProfileId: z
                .string()
                .exactOptional()
                .openapi({ description: 'Unique ID associated with the customer profile.' }),
              userType: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({ description: 'User type.' }),
              value: z
                .int()
                .exactOptional()
                .openapi({
                  description:
                    'Total value of the order without separating cents. For example, $24.99 is represented `2499`.',
                }),
            })
            .openapi({ required: [] }),
          examples: {
            response: {
              value: {
                allowManualPrice: false,
                availableAccounts: [],
                availableAddresses: [
                  {
                    addressId: '666c2e830bd9474ab6f6cc53fb6dd2d2',
                    addressType: 'residential',
                    city: 'Brasília',
                    complement: '15º andar',
                    country: 'BRA',
                    geoCoordinates: [-47.924747467041016, -15.832582473754883],
                    isDisposable: true,
                    neighborhood: 'Copacabana',
                    number: '123',
                    postalCode: '70386000',
                    receiverName: 'Clark Kent',
                    reference: null,
                    state: 'DF',
                    street: 'Rua da minha casa',
                  },
                ],
                canEditData: true,
                clientPreferencesData: { locale: 'pt-BR', optinNewsLetter: false },
                clientProfileData: {
                  corporateDocument: null,
                  corporateName: null,
                  corporatePhone: null,
                  customerClass: null,
                  document: '12345678900',
                  documentType: 'cpf',
                  email: 'clark.kent@example.com',
                  firstName: 'Clark',
                  isCorporate: false,
                  lastName: 'Kent',
                  phone: '+5521998765432',
                  profileCompleteOnLoading: false,
                  profileErrorOnLoading: null,
                  stateInscription: null,
                  tradeName: null,
                },
                commercialConditionData: null,
                customData: null,
                giftRegistryData: null,
                hooksData: null,
                ignoreProfileData: false,
                invoiceData: null,
                isCheckedIn: false,
                itemMetadata: {
                  items: [
                    {
                      assemblyOptions: [],
                      detailUrl: '/chopp-brahma-claro-30l/p',
                      ean: null,
                      id: '2',
                      imageUrl:
                        'http://mystore.vteximg.com.br/arquivos/ids/155400-55-55/30l_v2.png?v=637303412106100000',
                      name: 'Chopp Brahma Claro 30L',
                      productId: '2',
                      refId: 'CBC30L',
                      seller: '1',
                      skuName: 'Chopp Brahma Claro 30L',
                    },
                  ],
                },
                items: [
                  {
                    additionalInfo: {
                      brandId: '2000000',
                      brandName: 'Brahma',
                      dimension: null,
                      offeringInfo: null,
                      offeringType: null,
                      offeringTypeId: null,
                    },
                    assemblies: [],
                    attachmentOfferings: [],
                    attachments: [],
                    availability: 'available',
                    bundleItems: [],
                    components: [],
                    detailUrl: '/chopp-brahma-claro-30l/p',
                    ean: null,
                    id: '2',
                    imageUrl:
                      'http://mystore.vteximg.com.br/arquivos/ids/155400-55-55/30l_v2.png?v=637303412106100000',
                    isGift: false,
                    listPrice: 49900,
                    manualPrice: null,
                    manualPriceAppliedBy: null,
                    manufacturerCode: null,
                    measurementUnit: 'un',
                    modalType: null,
                    name: 'Chopp Brahma Claro 30L',
                    offerings: [],
                    parentAssemblyBinding: null,
                    parentItemIndex: null,
                    preSaleDate: null,
                    price: 32890,
                    priceDefinition: {
                      calculatedSellingPrice: 32890,
                      sellingPrices: [{ quantity: 1, value: 32890 }],
                      total: 32890,
                    },
                    priceTags: [],
                    priceValidUntil: '2022-07-13T18:30:46Z',
                    productCategories: { '1': 'Bebidas' },
                    productCategoryIds: '/1/',
                    productId: '2',
                    productRefId: '',
                    quantity: 1,
                    refId: 'CBC30L',
                    rewardValue: 0,
                    seller: '1',
                    sellerChain: ['1'],
                    sellingPrice: 32890,
                    skuName: 'Chopp Brahma Claro 30L',
                    tax: 0,
                    uniqueId: '9D6E447B3FF64CEDA33B17C01379C119',
                    unitMultiplier: 1,
                  },
                ],
                itemsOrdination: { ascending: true, criteria: 'NAME' },
                loggedIn: false,
                marketingData: {
                  coupon: 'free-shipping',
                  utmCampaign: 'Black friday',
                  utmMedium: 'CPC',
                  utmSource: 'app',
                  utmiCampaign: null,
                  utmiPart: null,
                  utmipage: null,
                },
                messages: [],
                openTextField: null,
                orderFormId: 'ede846222cd44046ba6c638442c3505a',
                paymentData: {
                  giftCards: [],
                  transactions: [
                    {
                      isActive: true,
                      merchantName: 'MYSTORE',
                      payments: [],
                      sharedTransaction: false,
                      transactionId: '296D6D245C17437E823EB77E403FC88D',
                    },
                  ],
                },
                profileProvider: 'VTEX',
                ratesAndBenefitsData: { rateAndBenefitsIdentifiers: [], teaser: [] },
                salesChannel: '1',
                selectableGifts: [],
                sellers: [{ id: '1', logo: '', name: 'lojadobreno' }],
                shippingData: {
                  address: {
                    addressId: 'teste',
                    addressType: 'residential',
                    city: 'Brasília',
                    complement: '15º andar',
                    country: 'BRA',
                    geoCoordinates: [-47.924747467041016, -15.832582473754883],
                    isDisposable: true,
                    neighborhood: 'Copacabana',
                    number: '123',
                    postalCode: '70386000',
                    receiverName: 'Clark Kent',
                    reference: null,
                    state: 'DF',
                    street: 'Rua da minha casa',
                  },
                  availableAddresses: [
                    {
                      addressId: 'teste',
                      addressType: 'residential',
                      city: 'Rio de Janeiro',
                      complement: '15º andar',
                      country: 'BRA',
                      geoCoordinates: [-47.924747467041016, -15.832582473754883],
                      isDisposable: true,
                      neighborhood: 'Copacabana',
                      number: '123',
                      postalCode: '12345000',
                      receiverName: 'Clark Kent',
                      reference: null,
                      state: 'RJ',
                      street: 'Rua da minha casa',
                    },
                  ],
                  logisticsInfo: [
                    {
                      addressId: 'teste',
                      deliveryChannels: [{ id: 'delivery' }, { id: 'pickup-in-point' }],
                      itemId: '2',
                      itemIndex: 0,
                      selectedDeliveryChannel: 'delivery',
                      selectedSla: 'Normal',
                      shipsTo: ['BRA', 'COL', 'USA'],
                      slas: [
                        {
                          availableDeliveryWindows: [],
                          deliveryChannel: 'delivery',
                          deliveryIds: [
                            {
                              courierId: '1',
                              courierName: 'Transportadora',
                              dockId: '1',
                              kitItemDetails: [],
                              quantity: 1,
                              warehouseId: '1_1',
                            },
                          ],
                          deliveryWindow: null,
                          id: 'Normal',
                          listPrice: 1500,
                          lockTTL: '10d',
                          name: 'Normal',
                          pickupDistance: 0,
                          pickupPointId: null,
                          pickupStoreInfo: {
                            additionalInfo: null,
                            address: null,
                            dockId: null,
                            friendlyName: null,
                            isPickupStore: false,
                          },
                          polygonName: null,
                          price: 1500,
                          shippingEstimate: '3bd',
                          shippingEstimateDate: null,
                          tax: 0,
                          transitTime: '3bd',
                        },
                      ],
                    },
                  ],
                  pickupPoints: [],
                  selectedAddresses: [
                    {
                      addressId: 'teste',
                      addressType: 'residential',
                      city: 'Rio de Janeiro',
                      complement: '15º andar',
                      country: 'BRA',
                      geoCoordinates: [-47.924747467041016, -15.832582473754883],
                      isDisposable: true,
                      neighborhood: 'Copacabana',
                      number: '123',
                      postalCode: '12345000',
                      receiverName: 'Clark Kent',
                      reference: null,
                      state: 'RJ',
                      street: 'Rua da minha casa',
                    },
                  ],
                },
                storeId: null,
                storePreferencesData: {},
                subscriptionData: null,
                totalizers: [{ id: 'Items', name: 'Total Items', value: 32890 }],
                userProfileId: 'fb542e51-5488-4c34-8d17-ed8fcf597a94',
                userType: null,
                value: 34390,
              },
            },
          },
        },
      },
      headers: z.object({}),
    },
  },
  security: [],
})

export const patchApiCheckoutPubOrderFormOrderFormIdProfileRoute = createRoute({
  method: 'patch',
  path: '/api/checkout/pub/orderForm/{orderFormId}/profile',
  tags: ['Shopping cart'],
  summary: 'Ignore profile data',
  description:
    'When a shopper provides an email address at Checkout, the platform tries to retrieve existing profile information for that email and add it to the shopping cart information. Use this request if you want to change this behavior for a given cart, meaning profile information will not be included in the order automattically.\r\n\r\nThe [orderForm](https://developers.vtex.com/docs/guides/orderform-fields) is the data structure which represents a shopping cart and contains all information pertaining to it. Hence, the `orderFormId` is the identification code of a given cart.\r\n\r\nNote that this request will only work if you have not sent the `clientProfileData` to the cart yet. Sending it to a cart that already has a `clientProfileData` should return a status `403 Forbidden` error, with an `Access denied` message.',
  operationId: 'IgnoreProfileData',
  request: {
    params: z.object({
      orderFormId: z
        .string()
        .default('ede846222cd44046ba6c638442c3505a')
        .openapi({
          param: {
            description:
              'ID of the orderForm corresponding to the cart whose items will have the price changed.',
            in: 'path',
            name: 'orderFormId',
            required: true,
            schema: { default: 'ede846222cd44046ba6c638442c3505a', type: 'string' },
            style: 'simple',
          },
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
    body: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .object({
              ignoreProfileData: z
                .boolean()
                .default(false)
                .exactOptional()
                .openapi({ description: 'Indicates whether profile data should be ignored.' }),
            })
            .openapi({ required: [] }),
          example: { price: 10000 },
        },
      },
      required: true,
    },
  },
  responses: { 200: { description: '', content: {}, headers: z.object({}) } },
  security: [],
})

export const postApiCheckoutPubOrderFormOrderFormIdTransactionRoute = createRoute({
  method: 'post',
  path: '/api/checkout/pub/orderForm/{orderFormId}/transaction',
  tags: ['Order placement'],
  summary: 'Place order from an existing cart',
  description:
    'This endpoint places an order from an existing `orderForm` object, meaning an existing cart.\n\r\n\rAfter the creation of an order with this request, you have five minutes to send payment information and then request payment processing.',
  operationId: 'PlaceOrderFromExistingOrderForm',
  request: {
    params: z.object({
      orderFormId: z
        .string()
        .default('ede846222cd44046ba6c638442c3505a')
        .openapi({
          param: {
            description:
              'ID of the `orderForm` corresponding to the cart from which to place the order.',
            in: 'path',
            name: 'orderFormId',
            required: true,
            schema: { default: 'ede846222cd44046ba6c638442c3505a', type: 'string' },
            style: 'simple',
          },
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
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              interestValue: z
                .int()
                .default(0)
                .openapi({ description: 'Interest rate to be used in case it applies.' }),
              optinNewsLetter: z
                .boolean()
                .default(false)
                .exactOptional()
                .openapi({
                  description: 'True if the shopper opted to receive the newsletter.',
                  title: 'optinNewsLetter',
                }),
              referenceId: z
                .string()
                .default('41a22925298a4ddca95318131a25b000')
                .openapi({
                  description:
                    'ID of the `orderForm` corresponding to the cart from which to place the order. This is the same as the `orderFormId` parameter.',
                  title: 'referenceId',
                }),
              referenceValue: z
                .int()
                .default(6800)
                .openapi({
                  description:
                    'Reference value of the order for calculating interest if that is the case. Can be equal to the total value and does not separate cents. For example, $24.99 is represented `2499`.',
                }),
              savePersonalData: z
                .boolean()
                .default(false)
                .exactOptional()
                .openapi({
                  description:
                    "`true` if the shopper's data provided during checkout should be saved for future reference.",
                  title: 'savePersonalData',
                }),
              value: z
                .int()
                .default(6800)
                .openapi({
                  description:
                    'Total value of the order without separating cents. For example, $24.99 is represented `2499`.',
                }),
            })
            .openapi({
              required: ['referenceId', 'value', 'referenceValue', 'interestValue'],
              title: '',
            }),
        },
      },
    },
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z.object({}),
          example: {
            orderForm: null,
            orders: [
              {
                changeData: null,
                clientPreferencesData: {
                  attachmentId: 'clientPreferencesData',
                  locale: 'pt-BR',
                  optinNewsLetter: true,
                },
                clientProfileData: {
                  attachmentId: 'clientProfileData',
                  corporateDocument: null,
                  corporateName: null,
                  corporatePhone: null,
                  document: '71279846675',
                  documentType: 'cpf',
                  email: 'marcelo@vtex.com.br',
                  firstName: 'Marcelo',
                  isCorporate: false,
                  lastName: 'Couto',
                  phone: '1234567890',
                  profileCompleteOnLoading: null,
                  profileErrorOnLoading: null,
                  stateInscription: null,
                  tradeName: null,
                },
                creationDate: '2017-02-16T23:42:43.9605088Z',
                followUpEmail: 'f1e7309d88dd4633825ce183d52a50a6@ct.vtex.com.br',
                giftRegistryData: null,
                hostName: 'ambienteqa',
                isCheckedIn: false,
                isCompleted: false,
                items: [
                  {
                    additionalInfo: {
                      brandId: '1',
                      brandName: 'Marca Um',
                      offeringInfo: null,
                      offeringType: null,
                      offeringTypeId: null,
                    },
                    attachmentOfferings: [],
                    attachments: [],
                    availability: 'available',
                    bundleItems: [],
                    components: [],
                    defaultPicker: null,
                    detailUrl: '/produto-selecao-sku-lista/p',
                    ean: null,
                    handlerSequence: 0,
                    handling: false,
                    id: '2000016',
                    imageUrl:
                      'http://store.vteximg.com.br/arquivos/ids/168463-55-55/imagem-modo-lista.png',
                    isGift: false,
                    itemAttachment: { content: {}, name: null },
                    listPrice: 15000,
                    manualPrice: null,
                    measurementUnit: 'un',
                    modalType: null,
                    name: 'Produto Seleção SKU - Lista 35 - Preto',
                    offerings: [],
                    preSaleDate: null,
                    price: 15000,
                    priceTags: [],
                    priceValidUntil: '2018-02-16T23:42:44.5467295Z',
                    productCategories: { '12': 'Departamento 5', '28': 'Categoria 5-3' },
                    productCategoryIds: '/12/28/',
                    productId: '2000002',
                    quantity: 1,
                    refId: '35-Preto',
                    rewardValue: 1,
                    seller: '1',
                    sellingPrice: 15000,
                    skuName: '35 - Preto',
                    tax: 0,
                    uniqueId: '0F93E9C4926A4CD97FDD4C2599BDF9DB',
                    unitMultiplier: 1,
                  },
                ],
                lastChange: '2017-02-16T23:42:47.62285Z',
                marketingData: null,
                merchantName: null,
                openTextField: { attachmentId: 'openTextField', value: null },
                orderGroup: 'v976778amgh',
                orderId: 'v976778amgh-01',
                paymentData: {
                  attachmentId: 'paymentData',
                  giftCards: [],
                  merchantName: 'STORE',
                  payments: [],
                  transactionId: '62FEDE228E2144649CF67812C4E5DD87',
                  transactions: [
                    {
                      isActive: true,
                      merchantName: 'STORE',
                      payments: [],
                      transactionId: '62FEDE228E2144649CF67812C4E5DD87',
                    },
                  ],
                },
                ratesAndBenefitsData: {
                  attachmentId: 'ratesAndBenefitsData',
                  rateAndBenefitsIdentifiers: [],
                  teaser: [],
                },
                roundingError: 0,
                salesChannel: '1',
                sellerOrderId: '00-v976778amgh-01',
                sellers: [{ id: '1', logo: '', name: 'Store' }],
                shippingData: {
                  address: {
                    addressId: '49ad09e5fba8434a8ff1e0faa4b60ceb',
                    addressType: 'residential',
                    city: 'Rio de Janeiro',
                    complement: '15º andar',
                    country: 'BRA',
                    geoCoordinates: [],
                    neighborhood: 'Copacabana',
                    number: '123',
                    postalCode: '28050987',
                    receiverName: 'Marcelo',
                    reference: null,
                    state: 'RJ',
                    street: 'Rua da minha casa',
                  },
                  attachmentId: 'shippingData',
                  availableAddresses: [
                    {
                      addressId: '49ad09e5fba8434a8ff1e0faa4b60ceb',
                      addressType: 'residential',
                      city: 'Rio de Janeiro',
                      complement: '15º andar',
                      country: 'BRA',
                      geoCoordinates: [],
                      neighborhood: 'Copacabana',
                      number: '123',
                      postalCode: '28050642',
                      receiverName: 'Marcelo',
                      reference: null,
                      state: 'RJ',
                      street: 'Rua da minha casa',
                    },
                  ],
                  logisticsInfo: [
                    {
                      itemId: '2000016',
                      itemIndex: 0,
                      selectedSla: 'Normal',
                      shipsTo: ['BRA'],
                      slas: [
                        {
                          availableDeliveryWindows: [
                            {
                              endDateUtc: '2017-03-27T00:00:00+00:00',
                              lisPrice: 0,
                              price: 0,
                              startDateUtc: '2017-03-27T00:00:00+00:00',
                              tax: 0,
                            },
                            {
                              endDateUtc: '2017-03-28T00:00:00+00:00',
                              lisPrice: 0,
                              price: 0,
                              startDateUtc: '2017-03-28T00:00:00+00:00',
                              tax: 0,
                            },
                          ],
                          deliveryIds: [
                            {
                              courierId: '1de4790',
                              courierName: 'N2_2',
                              dockId: 'N2',
                              quantity: 1,
                              warehouseId: '1_1',
                            },
                          ],
                          deliveryWindow: null,
                          id: 'n2_2',
                          listPrice: 650,
                          lockTTL: '7d',
                          name: 'n2_2',
                          pickupStoreInfo: {
                            additionalInfo: null,
                            address: null,
                            dockId: null,
                            friendlyName: null,
                            isPickupStore: false,
                          },
                          price: 650,
                          shippingEstimate: '6bd',
                          shippingEstimateDate: null,
                          tax: 0,
                        },
                        {
                          availableDeliveryWindows: [],
                          deliveryIds: [
                            {
                              courierId: '2p1t',
                              courierName: 'Post_Test_2',
                              dockId: 'N2',
                              quantity: 1,
                              warehouseId: '1_1',
                            },
                          ],
                          deliveryWindow: null,
                          id: 'Normal',
                          listPrice: 650,
                          lockTTL: '7d',
                          name: 'Normal',
                          pickupStoreInfo: {
                            additionalInfo: null,
                            address: null,
                            dockId: null,
                            friendlyName: null,
                            isPickupStore: false,
                          },
                          price: 650,
                          shippingEstimate: '6bd',
                          shippingEstimateDate: null,
                          tax: 0,
                        },
                        {
                          availableDeliveryWindows: [],
                          deliveryIds: [
                            {
                              courierId: '1p1t',
                              courierName: 'Post_Teste',
                              dockId: 'N2',
                              quantity: 1,
                              warehouseId: '1_1',
                            },
                          ],
                          deliveryWindow: null,
                          id: 'P_T',
                          listPrice: 1462,
                          lockTTL: '7d',
                          name: 'P_T',
                          pickupStoreInfo: {
                            additionalInfo: null,
                            address: null,
                            dockId: null,
                            friendlyName: null,
                            isPickupStore: false,
                          },
                          price: 1462,
                          shippingEstimate: '6bd',
                          shippingEstimateDate: null,
                          tax: 0,
                        },
                        {
                          availableDeliveryWindows: [],
                          deliveryIds: [
                            {
                              courierId: '2B9C2C7D-7A76-485D-94EF-701D041E448C',
                              courierName: 'Leve 30kg (De: 10000-000 Até: 25999-999) ',
                              dockId: '1_1_1',
                              quantity: 1,
                              warehouseId: '1_1',
                            },
                          ],
                          deliveryWindow: null,
                          id: 'Econômica',
                          listPrice: 2265,
                          lockTTL: '7d',
                          name: 'Econômica',
                          pickupStoreInfo: {
                            additionalInfo: null,
                            address: null,
                            dockId: null,
                            friendlyName: null,
                            isPickupStore: false,
                          },
                          price: 2265,
                          shippingEstimate: '20bd',
                          shippingEstimateDate: null,
                          tax: 0,
                        },
                      ],
                    },
                  ],
                },
                state: 'order-created',
                storeId: null,
                storePreferencesData: {
                  checkToSavePersonDataByDefault: false,
                  countryCode: 'BRA',
                  currencyCode: 'BRL',
                  currencyFormatInfo: {
                    currencyDecimalDigits: 2,
                    currencyDecimalSeparator: ',',
                    currencyGroupSeparator: '.',
                    currencyGroupSize: 3,
                    startsWithCurrencySymbol: true,
                  },
                  currencyLocale: 1046,
                  currencySymbol: 'R$',
                  templateOptions: { toggleCorporate: false },
                  timeZone: 'E. South America Standard Time',
                },
                timeZoneCreationDate: '2017-02-16T21:42:43.9605088',
                timeZoneLastChange: '2017-02-16T21:42:47.62285',
                totals: [
                  { id: 'Items', name: 'Total dos Itens', value: 15000 },
                  { id: 'Discounts', name: 'Total dos Descontos', value: 0 },
                  { id: 'Shipping', name: 'Total do Frete', value: 650 },
                  { id: 'Tax', name: 'Total da Taxa', value: 0 },
                ],
                userType: '',
                value: 15650,
              },
            ],
            transactionData: {
              gatewayCallbackTemplatePath: '/checkout/gatewayCallback/v976778amgh/{messageCode}',
              merchantTransactions: [
                {
                  id: 'STORE',
                  merchantName: 'STORE',
                  payments: [
                    {
                      accountId: null,
                      bin: null,
                      giftCardId: null,
                      giftCardProvider: null,
                      giftCardRedemptionCode: null,
                      paymentSystem: '6',
                      referenceValue: 15650,
                      value: 15650,
                    },
                  ],
                  transactionId: '62FEDE228E2144649CF67812C4E5ER79',
                },
              ],
              receiverUri: 'https://store.vtexpayments.com.br/split/v976778amgh/payments',
            },
          },
        },
      },
      headers: z.object({}),
    },
  },
  security: [],
})

export const postApiCheckoutPubOrderFormsSimulationRoute = createRoute({
  method: 'post',
  path: '/api/checkout/pub/orderForms/simulation',
  tags: ['Shopping cart'],
  summary: 'Cart simulation',
  description:
    'This endpoint is used to simulate a cart in VTEX Checkout.\r\n\r\nIt receives an **SKU ID**, the **quantity** of items in the cart and the ID of the **Seller**.\r\n\r\nIt sends back all information about the cart, such as the selling price of each item, rates and benefits data, payment and logistics info.\r\n\r\nThis is useful whenever you need to know the availability of fulfilling an order for a specific cart setting, since the API response will let you know the updated price, inventory and shipping data.\r\n\r\n**Important**: The fields (`sku id`, `quantity`, `seller`, `country`, `postalCode` and `geoCoordinates`) are just examples of content that you can simulate in your cart. You can add more fields to the request as per your need. Access the [orderForm](https://developers.vtex.com/docs/guides/orderform-fields) guide to check the available fields.',
  operationId: 'CartSimulation',
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
      RnbBehavior: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            description:
              "This parameter defines which promotions apply to the simulation. Use `0` for simulations at cart stage, which means all promotions apply. In case of window simulation use `1`, which indicates promotions that apply nominal discounts over the total purchase value shouldn't be considered on the simulation.\n\r\n\rNote that if this not sent, the parameter is `1`.",
            in: 'query',
            name: 'RnbBehavior',
            required: false,
            schema: { default: 0, type: 'integer' },
            style: 'form',
          },
        }),
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
            description: 'Trade Policy (Sales Channel) identification.',
            in: 'query',
            name: 'sc',
            required: false,
            schema: { example: 1, type: 'integer' },
            style: 'form',
          },
          example: 1,
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              country: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Three letter ISO code of the country of the shipping address. This value must be sent along with the `postalCode` or `geoCoordinates` values.',
                  example: 'BRA',
                }),
              geoCoordinates: z
                .array(z.number().openapi({ example: -47.924747467041016 }))
                .default([-47.924747467041016, -15.832582473754883])
                .exactOptional()
                .openapi({
                  description:
                    'Array containing two floats with geocoordinates, first longitude, then latitude.',
                }),
              items: z
                .array(
                  z
                    .object({
                      id: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'The SKU ID.', example: '1' }),
                      quantity: z
                        .int32()
                        .exactOptional()
                        .openapi({
                          description:
                            'The quantity of items of this specific SKU in the cart to be simulated.',
                          example: 1,
                        }),
                      seller: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            'The ID of the seller responsible for this SKU. This ID can be found in your VTEX Admin.',
                          example: '1',
                        }),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional()
                .openapi({
                  description:
                    'Array containing information about the SKUs inside the cart to be simulated.',
                }),
              postalCode: z
                .string()
                .exactOptional()
                .openapi({ description: 'Postal code.', example: '12345-000' }),
            })
            .openapi({ required: ['id', 'quantity', 'seller'] }),
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
              country: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Three letter ISO code of the country of the shipping address.',
                }),
              items: z
                .array(
                  z
                    .object({
                      availability: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'Availability.' }),
                      id: z.string().exactOptional().openapi({ description: 'ID of the item.' }),
                      listPrice: z
                        .int()
                        .exactOptional()
                        .openapi({ description: 'List price in cents.' }),
                      measurementUnit: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'Measurement unit.' }),
                      offerings: z
                        .array(z.any())
                        .exactOptional()
                        .openapi({ description: 'Array containing offering information.' }),
                      parentAssemblyBinding: z
                        .string()
                        .nullable()
                        .exactOptional()
                        .openapi({ description: 'Parent assembly binding.' }),
                      parentItemIndex: z
                        .int()
                        .nullable()
                        .exactOptional()
                        .openapi({ description: 'Parent item index.' }),
                      price: z.int().exactOptional().openapi({ description: 'Price in cents.' }),
                      priceDefinition: z
                        .object({
                          calculatedSellingPrice: z
                            .int()
                            .exactOptional()
                            .openapi({
                              description: "Item's calculated unitary selling price in cents.",
                            }),
                          sellingPrices: z
                            .array(
                              z
                                .object({
                                  quantity: z
                                    .int()
                                    .exactOptional()
                                    .openapi({
                                      description:
                                        'Rounding quantity, meaning how many items are rounded to this value.',
                                    }),
                                  value: z
                                    .int()
                                    .exactOptional()
                                    .openapi({
                                      description: 'Value in cents for that specific rounding.',
                                    }),
                                })
                                .openapi({ required: [] }),
                            )
                            .exactOptional()
                            .openapi({
                              description:
                                'Array of objects, each containing value (in cents) and quantity for the different rounding instances that can be combined to form the correctly rounded total.',
                            }),
                          total: z
                            .int()
                            .exactOptional()
                            .openapi({
                              description: 'Total value for all units of the item in cents.',
                            }),
                        })
                        .exactOptional()
                        .openapi({
                          description: 'Price information for all units of a specific item.',
                          required: [],
                        }),
                      priceTags: z
                        .array(
                          z
                            .object({
                              identifier: z
                                .string()
                                .exactOptional()
                                .openapi({ description: 'Price tag identifier.' }),
                              isPercentual: z
                                .boolean()
                                .exactOptional()
                                .openapi({
                                  description:
                                    'Indicates whether price tag value is applied through a percentage.',
                                }),
                              name: z
                                .string()
                                .exactOptional()
                                .openapi({ description: 'Price tag name.' }),
                              owner: z
                                .string()
                                .exactOptional()
                                .openapi({
                                  description:
                                    'Identification of the responsible for the price tag.',
                                }),
                              rawValue: z
                                .int()
                                .exactOptional()
                                .openapi({ description: 'Price tag raw value.' }),
                              value: z
                                .int()
                                .exactOptional()
                                .openapi({ description: 'Price tag value.' }),
                            })
                            .openapi({ required: [] }),
                        )
                        .exactOptional()
                        .openapi({
                          description:
                            'Array of price tags, each of which, modifies the price in some way, like discounts or rates that apply to the item in the context of the order.',
                        }),
                      priceValidUntil: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'Price expiration date and time.' }),
                      quantity: z
                        .int()
                        .exactOptional()
                        .openapi({ description: 'The quantity of the item the cart.' }),
                      requestIndex: z
                        .int()
                        .exactOptional()
                        .openapi({ description: 'Request index information.' }),
                      rewardValue: z
                        .int()
                        .exactOptional()
                        .openapi({ description: 'Reward value in cents.' }),
                      seller: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'The seller responsible for the SKU.' }),
                      sellerChain: z
                        .array(z.string().openapi({ description: 'Seller.' }))
                        .exactOptional()
                        .openapi({
                          description:
                            'Sellers involved in the chain. The list should contain only one seller, unless it is a [Multilevel Omnichannel Inventory](https://help.vtex.com/en/tutorial/multilevel-omnichannel-inventory--7M1xyCZWUyCB7PcjNtOyw4) order.',
                        }),
                      sellingPrice: z
                        .int()
                        .exactOptional()
                        .openapi({
                          description:
                            'Selling price in cents. Note that this field may be subject to rounding discrepancies. We recommend retrieving data from the `priceDefinition` data structure instead.',
                        }),
                      tax: z.int().exactOptional().openapi({ description: 'Tax value in cents.' }),
                      unitMultiplier: z
                        .int()
                        .exactOptional()
                        .openapi({ description: 'Unit multiplier.' }),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional()
                .openapi({ description: 'Information on each item in the cart.' }),
              logisticsInfo: z
                .array(
                  z
                    .object({
                      addressId: z
                        .string()
                        .nullable()
                        .exactOptional()
                        .openapi({ description: 'Address ID.' }),
                      deliveryChannels: z
                        .array(
                          z
                            .object({
                              id: z
                                .string()
                                .exactOptional()
                                .openapi({ description: 'Delivery channel ID.' }),
                            })
                            .openapi({ required: [] }),
                        )
                        .exactOptional()
                        .openapi({ description: 'List of available delivery channels.' }),
                      itemIndex: z
                        .int()
                        .exactOptional()
                        .openapi({ description: 'Index of item in items array.' }),
                      itemMetadata: z
                        .object({
                          items: z
                            .array(
                              z
                                .object({
                                  assemblyOptions: z
                                    .object({
                                      composition: z
                                        .string()
                                        .nullable()
                                        .exactOptional()
                                        .openapi({ description: 'Composition information.' }),
                                      id: z
                                        .string()
                                        .exactOptional()
                                        .openapi({ description: 'Item ID.' }),
                                      inputValues: z
                                        .object({})
                                        .exactOptional()
                                        .openapi({ description: 'Input values information.' }),
                                      name: z
                                        .string()
                                        .exactOptional()
                                        .openapi({ description: 'Item name.' }),
                                      required: z
                                        .boolean()
                                        .exactOptional()
                                        .openapi({
                                          description: 'Indicates whether the item is required.',
                                        }),
                                    })
                                    .exactOptional()
                                    .openapi({
                                      description: 'Assembly options information.',
                                      required: [],
                                    }),
                                  id: z
                                    .string()
                                    .exactOptional()
                                    .openapi({ description: 'Item ID.' }),
                                  seller: z
                                    .string()
                                    .exactOptional()
                                    .openapi({ description: 'Seller.' }),
                                })
                                .openapi({ required: [] }),
                            )
                            .exactOptional()
                            .openapi({
                              description:
                                'List of objects containing metadata on each item in the order.',
                            }),
                        })
                        .exactOptional()
                        .openapi({ description: 'Item metadata.', required: [] }),
                      messages: z
                        .array(z.any())
                        .exactOptional()
                        .openapi({
                          description:
                            'Array containing an object for each message generated by our servers while processing the request.',
                        }),
                      pickupPoints: z
                        .array(z.any())
                        .exactOptional()
                        .openapi({ description: 'Array containing pickup points information.' }),
                      purchaseConditions: z
                        .object({
                          itemPurchaseConditions: z
                            .array(
                              z
                                .object({
                                  id: z
                                    .string()
                                    .exactOptional()
                                    .openapi({ description: 'Item ID.' }),
                                  listPrice: z
                                    .int()
                                    .exactOptional()
                                    .openapi({ description: 'List price in cents.' }),
                                  price: z
                                    .int()
                                    .exactOptional()
                                    .openapi({ description: 'Price in cents.' }),
                                  seller: z
                                    .string()
                                    .exactOptional()
                                    .openapi({ description: 'Seller.' }),
                                  sellerChain: z
                                    .array(z.any())
                                    .exactOptional()
                                    .openapi({
                                      description:
                                        'Sellers involved in the chain. The list should contain only one seller, unless it is a [Multilevel Omnichannel Inventory](https://help.vtex.com/en/tutorial/multilevel-omnichannel-inventory--7M1xyCZWUyCB7PcjNtOyw4) order.',
                                    }),
                                  slas: z
                                    .array(
                                      z
                                        .object({
                                          availableDeliveryWindows: z
                                            .object({
                                              endDateUtc: z
                                                .string()
                                                .exactOptional()
                                                .openapi({
                                                  description:
                                                    'Delivery window ending day and time in UTC.',
                                                }),
                                              lisPrice: z
                                                .int()
                                                .exactOptional()
                                                .openapi({
                                                  description: 'Delivery window list price.',
                                                }),
                                              price: z
                                                .int()
                                                .exactOptional()
                                                .openapi({ description: 'Delivery window price.' }),
                                              startDateUtc: z
                                                .string()
                                                .exactOptional()
                                                .openapi({
                                                  description:
                                                    'Delivery window starting day and time in UTC.',
                                                }),
                                              tax: z
                                                .int()
                                                .exactOptional()
                                                .openapi({ description: 'Delivery window tax.' }),
                                            })
                                            .exactOptional()
                                            .openapi({
                                              description:
                                                'This object contains information about the delivery window available to the shopper.',
                                              required: [],
                                            }),
                                          deliveryChannel: z
                                            .string()
                                            .exactOptional()
                                            .openapi({ description: 'Delivery channel.' }),
                                          deliveryIds: z
                                            .array(
                                              z
                                                .object({
                                                  courierId: z
                                                    .string()
                                                    .exactOptional()
                                                    .openapi({ description: 'Courier ID.' }),
                                                  courierName: z
                                                    .string()
                                                    .exactOptional()
                                                    .openapi({ description: 'Courier name.' }),
                                                  dockId: z
                                                    .string()
                                                    .exactOptional()
                                                    .openapi({ description: 'Warehouse ID.' }),
                                                  quantity: z
                                                    .int()
                                                    .exactOptional()
                                                    .openapi({ description: 'Quantity.' }),
                                                  warehouseId: z
                                                    .string()
                                                    .exactOptional()
                                                    .openapi({ description: 'Warehouse ID.' }),
                                                })
                                                .openapi({ required: [] }),
                                            )
                                            .exactOptional()
                                            .openapi({
                                              description: 'Information on each delivery ID.',
                                            }),
                                          deliveryWindow: z
                                            .object({
                                              endDateUtc: z
                                                .string()
                                                .exactOptional()
                                                .openapi({
                                                  description:
                                                    'Delivery window ending day and time in UTC.',
                                                }),
                                              lisPrice: z
                                                .int()
                                                .exactOptional()
                                                .openapi({
                                                  description: 'Delivery window list price.',
                                                }),
                                              price: z
                                                .int()
                                                .exactOptional()
                                                .openapi({ description: 'Delivery window price.' }),
                                              startDateUtc: z
                                                .string()
                                                .exactOptional()
                                                .openapi({
                                                  description:
                                                    'Delivery window starting day and time in UTC.',
                                                }),
                                              tax: z
                                                .int()
                                                .exactOptional()
                                                .openapi({ description: 'Delivery window tax.' }),
                                            })
                                            .exactOptional()
                                            .openapi({
                                              description:
                                                'In case of scheduled delivery, this object will contain information on the delivery window selected by the shopper.',
                                              required: [],
                                            }),
                                          id: z
                                            .string()
                                            .exactOptional()
                                            .openapi({ description: 'SLA ID.' }),
                                          listPrice: z
                                            .int()
                                            .exactOptional()
                                            .openapi({ description: 'List price in cents.' }),
                                          lockTTL: z
                                            .string()
                                            .exactOptional()
                                            .openapi({ description: 'Estimate date of delivery.' }),
                                          name: z
                                            .string()
                                            .exactOptional()
                                            .openapi({ description: 'SLA name.' }),
                                          pickupDistance: z
                                            .int()
                                            .exactOptional()
                                            .openapi({ description: 'Pickup point distance.' }),
                                          pickupPointId: z
                                            .string()
                                            .nullable()
                                            .exactOptional()
                                            .openapi({ description: 'Pickup point ID.' }),
                                          pickupStoreInfo: z
                                            .object({
                                              additionalInfo: z
                                                .string()
                                                .nullable()
                                                .exactOptional()
                                                .openapi({
                                                  description: 'Additional information.',
                                                }),
                                              address: z
                                                .object({})
                                                .nullable()
                                                .exactOptional()
                                                .openapi({ description: 'Address information.' }),
                                              dockId: z
                                                .string()
                                                .nullable()
                                                .exactOptional()
                                                .openapi({ description: 'Corresponding dock ID.' }),
                                              friendlyName: z
                                                .string()
                                                .nullable()
                                                .exactOptional()
                                                .openapi({ description: 'Friendly name.' }),
                                              isPickupStore: z
                                                .boolean()
                                                .exactOptional()
                                                .openapi({
                                                  description:
                                                    'Indicates whether it is the pickup store.',
                                                }),
                                            })
                                            .exactOptional()
                                            .openapi({
                                              description: 'Information on the pickup store.',
                                              required: [],
                                            }),
                                          polygonName: z
                                            .string()
                                            .nullable()
                                            .exactOptional()
                                            .openapi({ description: 'Polygon name.' }),
                                          price: z
                                            .int()
                                            .exactOptional()
                                            .openapi({ description: 'Price in cents.' }),
                                          shippingEstimate: z
                                            .string()
                                            .exactOptional()
                                            .openapi({
                                              description:
                                                'Shipping estimate. For instance, "three business days" will be represented as `3bd`.',
                                            }),
                                          shippingEstimateDate: z
                                            .string()
                                            .nullable()
                                            .exactOptional()
                                            .openapi({ description: 'Shipping estimate date.' }),
                                          tax: z
                                            .int()
                                            .exactOptional()
                                            .openapi({ description: 'Tax in cents.' }),
                                          transitTime: z
                                            .string()
                                            .exactOptional()
                                            .openapi({
                                              description:
                                                'Transit time. For instance, "three business days" is represented as `3bd`.',
                                            }),
                                        })
                                        .openapi({ required: [] }),
                                    )
                                    .exactOptional()
                                    .openapi({ description: 'Information on available SLAs.' }),
                                })
                                .openapi({ required: [] }),
                            )
                            .exactOptional()
                            .openapi({
                              description:
                                'List of objects containing purchase condition information on each item in the order.',
                            }),
                        })
                        .exactOptional()
                        .openapi({ description: 'Purchase conditions information.', required: [] }),
                      quantity: z.int().exactOptional().openapi({ description: 'Quantity.' }),
                      selectedDeliveryChannel: z
                        .string()
                        .nullable()
                        .exactOptional()
                        .openapi({
                          description:
                            'Delivery channel selected by the customer. For example, `"delivery"` or `"pickup-in-point"`.',
                        }),
                      selectedSla: z
                        .string()
                        .nullable()
                        .exactOptional()
                        .openapi({
                          description: 'Selected SLA. For example, `"normal"` or `"express"`.',
                        }),
                      shipsTo: z
                        .array(z.any())
                        .exactOptional()
                        .openapi({
                          description: 'List of countries that the item may be shipped to.',
                        }),
                      slas: z
                        .array(
                          z
                            .object({
                              availableDeliveryWindows: z
                                .object({
                                  endDateUtc: z
                                    .string()
                                    .exactOptional()
                                    .openapi({
                                      description: 'Delivery window ending day and time in UTC.',
                                    }),
                                  lisPrice: z
                                    .int()
                                    .exactOptional()
                                    .openapi({ description: 'Delivery window list price.' }),
                                  price: z
                                    .int()
                                    .exactOptional()
                                    .openapi({ description: 'Delivery window price.' }),
                                  startDateUtc: z
                                    .string()
                                    .exactOptional()
                                    .openapi({
                                      description: 'Delivery window starting day and time in UTC.',
                                    }),
                                  tax: z
                                    .int()
                                    .exactOptional()
                                    .openapi({ description: 'Delivery window tax.' }),
                                })
                                .exactOptional()
                                .openapi({
                                  description:
                                    'This object contains information about the delivery window available to the shopper.',
                                  required: [],
                                }),
                              deliveryChannel: z
                                .string()
                                .exactOptional()
                                .openapi({ description: 'Delivery channel.' }),
                              deliveryIds: z
                                .array(
                                  z
                                    .object({
                                      courierId: z
                                        .string()
                                        .exactOptional()
                                        .openapi({ description: 'Courier ID.' }),
                                      courierName: z
                                        .string()
                                        .exactOptional()
                                        .openapi({ description: 'Courier name.' }),
                                      dockId: z
                                        .string()
                                        .exactOptional()
                                        .openapi({ description: 'Warehouse ID.' }),
                                      quantity: z
                                        .int()
                                        .exactOptional()
                                        .openapi({ description: 'Quantity.' }),
                                      warehouseId: z
                                        .string()
                                        .exactOptional()
                                        .openapi({ description: 'Warehouse ID.' }),
                                    })
                                    .openapi({ required: [] }),
                                )
                                .exactOptional()
                                .openapi({ description: 'Information on each delivery ID.' }),
                              deliveryWindow: z
                                .object({
                                  endDateUtc: z
                                    .string()
                                    .exactOptional()
                                    .openapi({
                                      description: 'Delivery window ending day and time in UTC.',
                                    }),
                                  lisPrice: z
                                    .int()
                                    .exactOptional()
                                    .openapi({ description: 'Delivery window list price.' }),
                                  price: z
                                    .int()
                                    .exactOptional()
                                    .openapi({ description: 'Delivery window price.' }),
                                  startDateUtc: z
                                    .string()
                                    .exactOptional()
                                    .openapi({
                                      description: 'Delivery window starting day and time in UTC.',
                                    }),
                                  tax: z
                                    .int()
                                    .exactOptional()
                                    .openapi({ description: 'Delivery window tax.' }),
                                })
                                .exactOptional()
                                .openapi({
                                  description:
                                    'In case of scheduled delivery, this object will contain information on the delivery window selected by the shopper.',
                                  required: [],
                                }),
                              id: z.string().exactOptional().openapi({ description: 'SLA ID.' }),
                              listPrice: z
                                .int()
                                .exactOptional()
                                .openapi({ description: 'List price in cents.' }),
                              lockTTL: z
                                .string()
                                .exactOptional()
                                .openapi({ description: 'Estimate date of delivery.' }),
                              name: z
                                .string()
                                .exactOptional()
                                .openapi({ description: 'SLA name.' }),
                              pickupDistance: z
                                .int()
                                .exactOptional()
                                .openapi({ description: 'Pickup point distance.' }),
                              pickupPointId: z
                                .string()
                                .nullable()
                                .exactOptional()
                                .openapi({ description: 'Pickup point ID.' }),
                              pickupStoreInfo: z
                                .object({
                                  additionalInfo: z
                                    .string()
                                    .nullable()
                                    .exactOptional()
                                    .openapi({ description: 'Additional information.' }),
                                  address: z
                                    .object({})
                                    .nullable()
                                    .exactOptional()
                                    .openapi({ description: 'Address information.' }),
                                  dockId: z
                                    .string()
                                    .nullable()
                                    .exactOptional()
                                    .openapi({ description: 'Corresponding dock ID.' }),
                                  friendlyName: z
                                    .string()
                                    .nullable()
                                    .exactOptional()
                                    .openapi({ description: 'Friendly name.' }),
                                  isPickupStore: z
                                    .boolean()
                                    .exactOptional()
                                    .openapi({
                                      description: 'Indicates whether it is the pickup store.',
                                    }),
                                })
                                .exactOptional()
                                .openapi({
                                  description: 'Information on the pickup store.',
                                  required: [],
                                }),
                              polygonName: z
                                .string()
                                .nullable()
                                .exactOptional()
                                .openapi({ description: 'Polygon name.' }),
                              price: z
                                .int()
                                .exactOptional()
                                .openapi({ description: 'Price in cents.' }),
                              shippingEstimate: z
                                .string()
                                .exactOptional()
                                .openapi({
                                  description:
                                    'Shipping estimate. For instance, "three business days" will be represented as `3bd`.',
                                }),
                              shippingEstimateDate: z
                                .string()
                                .nullable()
                                .exactOptional()
                                .openapi({ description: 'Shipping estimate date.' }),
                              tax: z
                                .int()
                                .exactOptional()
                                .openapi({ description: 'Tax in cents.' }),
                              transitTime: z
                                .string()
                                .exactOptional()
                                .openapi({
                                  description:
                                    'Transit time. For instance, "three business days" is represented as `3bd`.',
                                }),
                            })
                            .openapi({ required: [] }),
                        )
                        .exactOptional()
                        .openapi({ description: 'Information on available SLAs.' }),
                      subscriptionData: z
                        .object({})
                        .nullable()
                        .exactOptional()
                        .openapi({ description: 'Subscription information.' }),
                      totals: z
                        .array(
                          z
                            .object({
                              id: z.string().exactOptional().openapi({ description: 'Total ID.' }),
                              name: z
                                .string()
                                .exactOptional()
                                .openapi({ description: 'Total name.' }),
                              value: z
                                .int()
                                .exactOptional()
                                .openapi({ description: 'Total value.' }),
                            })
                            .openapi({ required: [] }),
                        )
                        .exactOptional()
                        .openapi({ description: 'Information on order totals.' }),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional()
                .openapi({
                  description:
                    'Array with logistics information on each item of the `items` array in the `orderForm`.',
                }),
              marketingData: z
                .object({})
                .nullable()
                .exactOptional()
                .openapi({
                  description:
                    'Object containing promotion data such as coupon tracking information and internal or external UTMs.',
                }),
              paymentData: z
                .object({
                  availableAccounts: z
                    .array(z.any())
                    .exactOptional()
                    .openapi({ description: 'Available accounts.' }),
                  availableAssociations: z
                    .object({})
                    .exactOptional()
                    .openapi({ description: 'Available associations.' }),
                  availableTokens: z
                    .array(z.any())
                    .exactOptional()
                    .openapi({ description: 'Available tokens.' }),
                  giftCardMessages: z
                    .array(z.any())
                    .exactOptional()
                    .openapi({ description: 'Array of gift card messages.' }),
                  giftCards: z
                    .array(z.any())
                    .exactOptional()
                    .openapi({ description: 'Gift card information, if it applies to the order.' }),
                  installmentOptions: z
                    .object({
                      bin: z.string().nullable().exactOptional().openapi({ description: 'Bin.' }),
                      installments: z
                        .object({
                          count: z
                            .int()
                            .exactOptional()
                            .openapi({ description: 'Count information.' }),
                          hasInterestRate: z
                            .boolean()
                            .exactOptional()
                            .openapi({
                              description: 'Indicates whether the payment has interest.',
                            }),
                          interestRate: z
                            .int()
                            .exactOptional()
                            .openapi({ description: 'Interest rate value.' }),
                          sellerMerchantInstallments: z
                            .array(z.any())
                            .exactOptional()
                            .openapi({ description: 'Seller merchant installments information.' }),
                          total: z
                            .int()
                            .exactOptional()
                            .openapi({
                              description:
                                'Total value of the order without separating cents. For example, $24.99 is represented `2499`.',
                            }),
                          value: z
                            .int()
                            .exactOptional()
                            .openapi({
                              description:
                                'Value of the order without the interest rate. The value is shown without separating cents.',
                            }),
                        })
                        .exactOptional()
                        .openapi({ description: 'Installments information.', required: [] }),
                      paymentGroupName: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'Payment group name.' }),
                      paymentName: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'Payment name.' }),
                      paymentSystem: z
                        .int()
                        .exactOptional()
                        .openapi({ description: 'Payment system identification.' }),
                      value: z
                        .int()
                        .exactOptional()
                        .openapi({ description: 'Total value assigned to this payment.' }),
                    })
                    .exactOptional()
                    .openapi({ description: 'Installment options information.', required: [] }),
                  paymentSystems: z
                    .array(
                      z
                        .object({
                          availablePayments: z
                            .string()
                            .nullable()
                            .exactOptional()
                            .openapi({ description: 'Availability of payment.' }),
                          description: z
                            .string()
                            .exactOptional()
                            .openapi({ description: 'Description.' }),
                          displayDocument: z
                            .boolean()
                            .exactOptional()
                            .openapi({ description: 'Indicates whether a document is shown.' }),
                          dueDate: z
                            .string()
                            .exactOptional()
                            .openapi({ description: 'Payment due date.' }),
                          groupName: z
                            .string()
                            .exactOptional()
                            .openapi({ description: 'Payment group name.' }),
                          id: z
                            .int()
                            .exactOptional()
                            .openapi({ description: 'Payment system ID.' }),
                          isCustom: z
                            .boolean()
                            .exactOptional()
                            .openapi({ description: 'Indicates whether it is custom.' }),
                          name: z
                            .string()
                            .exactOptional()
                            .openapi({ description: 'Payment system name.' }),
                          requiresAuthentication: z
                            .boolean()
                            .exactOptional()
                            .openapi({
                              description: 'Indicates whether a authentication is required.',
                            }),
                          requiresDocument: z
                            .boolean()
                            .exactOptional()
                            .openapi({ description: 'Indicates whether a document is required.' }),
                          stringId: z
                            .string()
                            .exactOptional()
                            .openapi({ description: 'String ID.' }),
                          template: z
                            .string()
                            .exactOptional()
                            .openapi({ description: 'Template.' }),
                          validator: z
                            .object({})
                            .nullable()
                            .exactOptional()
                            .openapi({ description: 'Payment system validator.' }),
                        })
                        .openapi({ required: [] }),
                    )
                    .exactOptional()
                    .openapi({ description: 'Information on payment systems.' }),
                  payments: z
                    .array(z.any())
                    .exactOptional()
                    .openapi({ description: 'Information on each payment.' }),
                })
                .exactOptional()
                .openapi({ description: 'Payment data information.', required: [] }),
              postalCode: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({ description: 'Postal Code.' }),
              ratesAndBenefitsData: z
                .object({
                  rateAndBenefitsIdentifiers: z
                    .array(z.any())
                    .exactOptional()
                    .openapi({ description: 'List with rates and benefits identifiers.' }),
                  teaser: z
                    .array(z.any())
                    .exactOptional()
                    .openapi({ description: 'List with rates and benefits teasers.' }),
                })
                .exactOptional()
                .openapi({
                  description: 'Information on rates and benefits that apply to the order.',
                  required: [],
                }),
              selectableGifts: z
                .array(z.any())
                .exactOptional()
                .openapi({
                  description: 'Array containing the data of the item selected as a gift.',
                }),
            })
            .openapi({ required: [] }),
          example: {
            country: 'BRA',
            geoCoordinates: [-47.924747467041016, -15.832582473754883],
            itemMetadata: {
              items: [
                {
                  assemblyOptions: [
                    {
                      composition: null,
                      id: 'T-Shirt Customization',
                      inputValues: {
                        'T-Shirt Name': { domain: ['[]'], maximumNumberOfCharacters: 2 },
                      },
                      name: 'T-Shirt Customization',
                      required: false,
                    },
                  ],
                  id: '1',
                  seller: '1',
                },
              ],
            },
            items: [
              {
                availability: 'available',
                id: '1',
                listPrice: 9999,
                measurementUnit: 'un',
                offerings: [],
                parentAssemblyBinding: null,
                parentItemIndex: null,
                price: 9999,
                priceDefinition: {
                  calculatedSellingPrice: 2999700,
                  sellingPrices: [{ quantity: 1, value: 2999700 }],
                  total: 2999700,
                },
                priceTags: [
                  {
                    identifier: '1234abc-5678b-1234c',
                    isPercentual: false,
                    name: 'DISCOUNT@MANUALPRICE',
                    rawValue: -50,
                    value: -5000,
                  },
                ],
                priceValidUntil: '2023-07-12T11:49:01Z',
                quantity: 1,
                requestIndex: 0,
                rewardValue: 0,
                seller: '1',
                sellerChain: ['1'],
                sellingPrice: 2999700,
                tax: 0,
                unitMultiplier: 300,
              },
            ],
            logisticsInfo: [
              {
                addressId: null,
                deliveryChannels: [{ id: 'pickup-in-point' }, { id: 'delivery' }],
                itemIndex: 0,
                quantity: 1,
                selectedDeliveryChannel: null,
                selectedSla: null,
                shipsTo: ['BRA'],
                slas: [
                  {
                    availableDeliveryWindows: {
                      endDateUtc: '2017-03-27T00:00:00+00:00',
                      lisPrice: 0,
                      price: 0,
                      startDateUtc: '2017-03-27T00:00:00+00:00',
                      tax: 0,
                    },
                    deliveryChannel: 'delivery',
                    deliveryIds: [
                      {
                        courierId: '1',
                        courierName: 'Transportadora',
                        dockId: '1',
                        kitItemDetails: [],
                        quantity: 1,
                        warehouseId: '1_1',
                      },
                    ],
                    deliveryWindow: {
                      endDateUtc: '2014-04-21T12:00:00+00:00',
                      listprice: 1000,
                      price: 0,
                      startDateUtc: '2014-04-21T09:00:00+00:00',
                      tax: 0,
                    },
                    id: 'Normal',
                    listPrice: 1500,
                    lockTTL: '10d',
                    name: 'Normal',
                    pickupDistance: 0,
                    pickupPointId: null,
                    pickupStoreInfo: {
                      additionalInfo: null,
                      address: null,
                      dockId: null,
                      friendlyName: null,
                      isPickupStore: false,
                    },
                    polygonName: null,
                    price: 1500,
                    shippingEstimate: '3bd',
                    shippingEstimateDate: null,
                    tax: 0,
                    transitTime: '3bd',
                  },
                ],
              },
            ],
            marketingData: {
              coupon: null,
              marketingTags: ['tag1', 'tag2'],
              utmCampaign: 'Black friday',
              utmMedium: 'CPC',
              utmSource: 'app',
              utmiCampaign: 'true',
              utmiPart: 'true',
              utmipage: 'true',
            },
            messages: [],
            paymentData: {
              availableAccounts: [],
              availableAssociations: {},
              availableTokens: [],
              giftCardMessages: [],
              giftCards: [],
              installmentOptions: [
                {
                  bin: null,
                  installments: [
                    {
                      count: 1,
                      hasInterestRate: false,
                      interestRate: 0,
                      sellerMerchantInstallments: [
                        {
                          count: 1,
                          hasInterestRate: false,
                          id: 'LOJADOBRENO',
                          interestRate: 0,
                          total: 2999700,
                          value: 2999700,
                        },
                      ],
                      total: 2999700,
                      value: 2999700,
                    },
                  ],
                  paymentGroupName: 'creditCardPaymentGroup',
                  paymentName: 'Visa',
                  paymentSystem: '2',
                  value: 2999700,
                },
                {
                  bin: null,
                  installments: [
                    {
                      count: 1,
                      hasInterestRate: false,
                      interestRate: 0,
                      sellerMerchantInstallments: [
                        {
                          count: 1,
                          hasInterestRate: false,
                          id: 'LOJADOBRENO',
                          interestRate: 0,
                          total: 2999700,
                          value: 2999700,
                        },
                      ],
                      total: 2999700,
                      value: 2999700,
                    },
                  ],
                  paymentGroupName: 'bankInvoicePaymentGroup',
                  paymentName: 'Boleto Bancário',
                  paymentSystem: '6',
                  value: 2999700,
                },
                {
                  bin: null,
                  installments: [
                    {
                      count: 1,
                      hasInterestRate: false,
                      interestRate: 0,
                      sellerMerchantInstallments: [
                        {
                          count: 1,
                          hasInterestRate: false,
                          id: 'LOJADOBRENO',
                          interestRate: 0,
                          total: 2999700,
                          value: 2999700,
                        },
                      ],
                      total: 2999700,
                      value: 2999700,
                    },
                  ],
                  paymentGroupName: 'MercadoPagoProPaymentGroup',
                  paymentName: 'MercadoPagoPro',
                  paymentSystem: '127',
                  value: 2999700,
                },
                {
                  bin: null,
                  installments: [
                    {
                      count: 1,
                      hasInterestRate: false,
                      interestRate: 0,
                      sellerMerchantInstallments: [
                        {
                          count: 1,
                          hasInterestRate: false,
                          id: 'LOJADOBRENO',
                          interestRate: 0,
                          total: 2999700,
                          value: 2999700,
                        },
                      ],
                      total: 2999700,
                      value: 2999700,
                    },
                  ],
                  paymentGroupName: 'custom202PaymentGroupPaymentGroup',
                  paymentName: 'Dinheiro',
                  paymentSystem: '202',
                  value: 2999700,
                },
              ],
              paymentSystems: [
                {
                  availablePayments: null,
                  description: '',
                  displayDocument: false,
                  dueDate: '2022-07-22T11:39:36.37197Z',
                  groupName: 'custom202PaymentGroupPaymentGroup',
                  id: 202,
                  isCustom: true,
                  name: 'Dinheiro',
                  requiresAuthentication: false,
                  requiresDocument: false,
                  stringId: '202',
                  template: 'custom202PaymentGroupPaymentGroup-template',
                  validator: null,
                },
                {
                  availablePayments: null,
                  description: '',
                  displayDocument: false,
                  dueDate: '2022-07-19T11:39:36.37197Z',
                  groupName: 'bankInvoicePaymentGroup',
                  id: 6,
                  isCustom: false,
                  name: 'Boleto Bancário',
                  requiresAuthentication: false,
                  requiresDocument: false,
                  stringId: '6',
                  template: 'bankInvoicePaymentGroup-template',
                  validator: null,
                },
                {
                  availablePayments: null,
                  description: '',
                  displayDocument: false,
                  dueDate: '2022-07-19T11:39:36.37197Z',
                  groupName: 'creditCardPaymentGroup',
                  id: 2,
                  isCustom: false,
                  name: 'Visa',
                  requiresAuthentication: false,
                  requiresDocument: false,
                  stringId: '2',
                  template: 'creditCardPaymentGroup-template',
                  validator: null,
                },
                {
                  availablePayments: null,
                  description: '',
                  displayDocument: false,
                  dueDate: '2022-07-19T11:39:36.37197Z',
                  groupName: 'MercadoPagoProPaymentGroup',
                  id: 127,
                  isCustom: false,
                  name: 'MercadoPagoPro',
                  requiresAuthentication: false,
                  requiresDocument: false,
                  stringId: '127',
                  template: 'MercadoPagoProPaymentGroup-template',
                  validator: null,
                },
              ],
              payments: [],
            },
            pickupPoints: [],
            postalCode: '12345-000',
            purchaseConditions: {
              itemPurchaseConditions: [
                {
                  id: '1',
                  listPrice: 9999,
                  price: 9999,
                  seller: '1',
                  sellerChain: ['1'],
                  slas: [
                    {
                      availableDeliveryWindows: {
                        endDateUtc: '2017-03-27T00:00:00+00:00',
                        lisPrice: 0,
                        price: 0,
                        startDateUtc: '2017-03-27T00:00:00+00:00',
                        tax: 0,
                      },
                      deliveryChannel: 'delivery',
                      deliveryIds: [
                        {
                          courierId: '1',
                          courierName: 'Transportadora',
                          dockId: '1',
                          kitItemDetails: [],
                          quantity: 1,
                          warehouseId: '1_1',
                        },
                      ],
                      deliveryWindow: {
                        endDateUtc: '2014-04-21T12:00:00+00:00',
                        listprice: 1000,
                        price: 0,
                        startDateUtc: '2014-04-21T09:00:00+00:00',
                        tax: 0,
                      },
                      id: 'Normal',
                      listPrice: 1500,
                      lockTTL: '10d',
                      name: 'Normal',
                      pickupDistance: 0,
                      pickupPointId: null,
                      pickupStoreInfo: {
                        additionalInfo: null,
                        address: null,
                        dockId: null,
                        friendlyName: null,
                        isPickupStore: false,
                      },
                      polygonName: null,
                      price: 1500,
                      shippingEstimate: '3bd',
                      shippingEstimateDate: null,
                      tax: 0,
                      transitTime: '3bd',
                    },
                  ],
                },
              ],
            },
            ratesAndBenefitsData: { rateAndBenefitsIdentifiers: [], teaser: [] },
            selectableGifts: [],
            subscriptionData: null,
            totals: [{ id: 'Items', name: 'Total dos Itens', value: 2999700 }],
          },
        },
      },
      headers: z.object({}),
    },
  },
  security: [],
})

export const putApiCheckoutPubOrdersRoute = createRoute({
  method: 'put',
  path: '/api/checkout/pub/orders',
  tags: ['Order placement'],
  summary: 'Place order',
  description:
    'Places order without having any prior cart information. This means all information on items, client, payment and shipping must be sent in the body.\r\n\r\n>⚠️ The authentication of this endpoint is required if you are creating an order with an item that has an attachment that creates a Subscription. For more information, access [Subscriptions API](https://developers.vtex.com/docs/api-reference/subscriptions-api-v3).',
  operationId: 'PlaceOrder',
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
        .exactOptional()
        .openapi({
          param: {
            description:
              'Trade Policy (Sales Channel) identification. This query can be used to create an order for a specific sales channel.',
            in: 'query',
            name: 'sc',
            required: false,
            schema: { example: 1, type: 'integer' },
            style: 'form',
          },
          example: 1,
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              clientProfileData: z
                .object({
                  corporateDocument: z
                    .string()
                    .default('12345678000100')
                    .exactOptional()
                    .openapi({
                      description: 'Corporate document, if the customer is a legal entity.',
                    }),
                  corporateName: z
                    .string()
                    .default('company-name')
                    .exactOptional()
                    .openapi({ description: 'Company name, if the customer is a legal entity.' }),
                  corporatePhone: z
                    .string()
                    .default('+551100988887777')
                    .exactOptional()
                    .openapi({
                      description: 'Corporate phone number, if the customer is a legal entity.',
                    }),
                  document: z
                    .string()
                    .default('123456789')
                    .exactOptional()
                    .openapi({ description: 'Document number informed by the customer.' }),
                  documentType: z
                    .string()
                    .default('cpf')
                    .exactOptional()
                    .openapi({ description: 'Type of the document informed by the customer.' }),
                  email: z
                    .string()
                    .default('customer@examplemail.com')
                    .openapi({ description: "Customer's email address." }),
                  firstName: z
                    .string()
                    .default('first-name')
                    .exactOptional()
                    .openapi({ description: "Customer's first name." }),
                  isCorporate: z
                    .boolean()
                    .default(false)
                    .exactOptional()
                    .openapi({ description: '`true` if the customer is a legal entity.' }),
                  lastName: z
                    .string()
                    .default('last-name')
                    .exactOptional()
                    .openapi({ description: "Customer's last name." }),
                  phone: z
                    .string()
                    .default('+55110988887777')
                    .exactOptional()
                    .openapi({ description: "Customer's phone number." }),
                  stateInscription: z
                    .string()
                    .default('12345678')
                    .exactOptional()
                    .openapi({
                      description: 'State inscription, if the customer is a legal entity.',
                    }),
                  tradeName: z
                    .string()
                    .default('trade-name')
                    .exactOptional()
                    .openapi({ description: 'Trade name, if the customer is a legal entity.' }),
                })
                .openapi({
                  description:
                    "Customer's profile information. The `email` functions as a customer's ID.\n\r\n\rFor customers already in your database, sending only the email address is enough to register the order to the shopper’s existing account.\n\r\n\r> If the shopper exists in you database but is not logged in, sending other profile information along with the email will cause the platform to fail placing the order. This happens because this action is interpreted as an attempt to edit profile data, which is not possible unless the customer is logged in to the store.",
                  required: ['email'],
                }),
              items: z
                .array(
                  z
                    .object({
                      attachments: z
                        .array(z.string())
                        .exactOptional()
                        .openapi({ description: 'Array containing information on attachments.' }),
                      bundleItems: z
                        .array(
                          z
                            .object({
                              id: z
                                .string()
                                .exactOptional()
                                .openapi({
                                  description: 'Service identifier.',
                                  example: 'id-example',
                                }),
                              name: z
                                .string()
                                .exactOptional()
                                .openapi({ description: 'Service name.', example: 'name-example' }),
                              price: z
                                .int()
                                .exactOptional()
                                .openapi({
                                  description: 'Service price. The last two digits are the cents.',
                                  example: 199,
                                }),
                              type: z
                                .string()
                                .exactOptional()
                                .openapi({ description: 'Service type.', example: 'type-example' }),
                            })
                            .openapi({ required: [] }),
                        )
                        .exactOptional()
                        .openapi({
                          description:
                            'Information on services sold along with the SKU. Example: a gift package.',
                        }),
                      commission: z
                        .int()
                        .exactOptional()
                        .openapi({ description: 'Comission.', example: 10 }),
                      freightCommission: z
                        .int()
                        .exactOptional()
                        .openapi({ description: 'Freight comission', example: 10 }),
                      id: z.string().openapi({ description: 'The SKU ID.', example: '123' }),
                      isGift: z
                        .boolean()
                        .default(false)
                        .exactOptional()
                        .openapi({ description: 'Indicates whether the order is a gift.' }),
                      itemAttachment: z
                        .object({
                          content: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description:
                                'Content referring to the customization requested by the customer.',
                              example: 'content-example',
                            }),
                          name: z
                            .string()
                            .exactOptional()
                            .openapi({ description: 'Attachment name.', example: 'name-example' }),
                        })
                        .exactOptional()
                        .openapi({ description: 'Item attachment.', required: [] }),
                      measurementUnit: z
                        .string()
                        .default('g')
                        .exactOptional()
                        .openapi({ description: 'SKU measurement unit.' }),
                      price: z
                        .int()
                        .exactOptional()
                        .openapi({
                          description:
                            'Item price within the context of the order without separating cents. For example, $24.99 is represented `2499`.',
                          example: 2499,
                        }),
                      priceTags: z
                        .array(
                          z
                            .object({
                              identifier: z
                                .string()
                                .default('1234abc-5678b-1234c')
                                .exactOptional()
                                .openapi({ description: 'Price tag identifier.' }),
                              isPercentual: z
                                .boolean()
                                .default(false)
                                .exactOptional()
                                .openapi({
                                  description:
                                    '`true` if price tag value is applied through a percentage.',
                                }),
                              name: z
                                .string()
                                .default('discount@name-1234abc-5678b-1234c')
                                .exactOptional()
                                .openapi({ description: 'Price tag name.' }),
                              rawValue: z
                                .int()
                                .default(-12)
                                .exactOptional()
                                .openapi({ description: 'Price tag raw value.' }),
                              value: z
                                .int()
                                .default(-1200)
                                .exactOptional()
                                .openapi({ description: 'Price tag value.' }),
                            })
                            .openapi({ required: [] }),
                        )
                        .exactOptional()
                        .openapi({
                          description:
                            'Array of price tags, each of which, modifies the price in some way, like discounts or rates that apply to the item in the context of the order.',
                        }),
                      quantity: z
                        .int32()
                        .openapi({
                          description:
                            'The quantity of items of this specific SKU in the cart to be simulated.',
                          example: 1,
                        }),
                      seller: z
                        .string()
                        .openapi({
                          description:
                            'The ID of the seller responsible for this SKU. This ID can be found in your VTEX Admin.',
                          example: '1',
                        }),
                      unitMultiplier: z
                        .int()
                        .default(1)
                        .exactOptional()
                        .openapi({ description: 'SKU unit multiplier.' }),
                    })
                    .openapi({
                      example: { id: '123456789', quantity: 1, seller: '1' },
                      required: ['id', 'quantity', 'seller'],
                    }),
                )
                .openapi({
                  description:
                    "Array of objects containing information on each of the order's items.",
                }),
              marketingData: z
                .object({
                  coupon: z
                    .string()
                    .default('free-shipping')
                    .exactOptional()
                    .openapi({
                      description:
                        'Sending an existing coupon code in this field will return the corresponding discount in the purchase. Use the [cart simulation](https://developers.vtex.com/vtex-rest-api/reference/orderform#orderformsimulation) request to check which coupons might apply before placing the order.',
                    }),
                  utmCampaign: z
                    .string()
                    .default('Black friday')
                    .exactOptional()
                    .openapi({ description: 'UTM campaign' }),
                  utmMedium: z
                    .string()
                    .default('CPC')
                    .exactOptional()
                    .openapi({ description: 'UTM medium.' }),
                  utmSource: z
                    .string()
                    .default('Facebook')
                    .exactOptional()
                    .openapi({ description: 'UTM source.' }),
                  utmiCampaign: z
                    .string()
                    .default('utmi_campaign-exmaple')
                    .exactOptional()
                    .openapi({ description: 'utmi_campaign (internal utm)' }),
                  utmiPage: z
                    .string()
                    .default('utmi_page-example')
                    .exactOptional()
                    .openapi({ description: 'utmi_page (internal utm)' }),
                  utmiPart: z
                    .string()
                    .default('utmi_part-exmaple')
                    .exactOptional()
                    .openapi({ description: 'utmi_part (internal utm)' }),
                })
                .exactOptional()
                .openapi({ required: [] }),
              openTextField: z
                .string()
                .default('open-text-example')
                .exactOptional()
                .openapi({
                  description:
                    'Optional field meant to hold additional information about the order. We recommend using this field for text, not data formats such as `JSON` even if escaped. For that purpose, see [Creating customizable fields](https://developers.vtex.com/vtex-rest-api/docs/creating-customizable-fields-in-the-cart-with-checkout-api-1)',
                }),
              paymentData: z
                .object({
                  giftCardMessages: z
                    .array(z.any().default('message-example'))
                    .exactOptional()
                    .openapi({ description: 'Array of gift card messages.' }),
                  giftCards: z
                    .array(
                      z
                        .object({
                          balance: z
                            .int()
                            .exactOptional()
                            .openapi({ description: 'Gift card balance.', example: 500 }),
                          id: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description: 'Gift card ID.',
                              example: '1390324156495k195pmab4rall3di',
                            }),
                          inUse: z
                            .boolean()
                            .exactOptional()
                            .openapi({
                              description: 'Indicates whether gift card is in use.',
                              example: true,
                            }),
                          isSpecialCard: z
                            .boolean()
                            .exactOptional()
                            .openapi({
                              description: 'Indicates whether gift card is special.',
                              example: false,
                            }),
                          name: z
                            .string()
                            .exactOptional()
                            .openapi({ description: 'Gift card name.', example: 'name-example' }),
                          redemptionCode: z
                            .string()
                            .openapi({
                              description: 'Gift card redemption code.',
                              example: 'HYUO-TEZZ-QFFT-HTFR',
                            }),
                          value: z.int().openapi({ description: 'Gift card value.', example: 500 }),
                        })
                        .openapi({ required: ['redemptionCode', 'value'] }),
                    )
                    .exactOptional()
                    .openapi({ description: 'Gift card information, if it applies to the order.' }),
                  paymentSystems: z
                    .array(
                      z
                        .object({
                          description: z
                            .string()
                            .default('description-example')
                            .exactOptional()
                            .openapi({ description: 'Description.' }),
                          groupName: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description: 'Payment group name.',
                              example: 'creditCardPaymentGroup',
                            }),
                          id: z
                            .int()
                            .exactOptional()
                            .openapi({ description: 'Payment system ID.', example: 2 }),
                          isCustom: z
                            .boolean()
                            .default(false)
                            .exactOptional()
                            .openapi({ description: 'Indicates whether it is custom.' }),
                          name: z
                            .string()
                            .exactOptional()
                            .openapi({ description: 'Payment system name.', example: 'Visa' }),
                          requiresDocument: z
                            .boolean()
                            .default(false)
                            .exactOptional()
                            .openapi({ description: 'Indicates whether a document is required.' }),
                          selected: z
                            .boolean()
                            .default(false)
                            .exactOptional()
                            .openapi({
                              description:
                                'Indicates whether this payment system has been selected.',
                            }),
                          stringId: z
                            .string()
                            .default('12345abc')
                            .exactOptional()
                            .openapi({ description: 'String ID.' }),
                          template: z
                            .string()
                            .default('creditCardPaymentGroup-template')
                            .exactOptional()
                            .openapi({ description: 'Template.' }),
                          validator: z
                            .object({
                              cardCodeMask: z
                                .string()
                                .exactOptional()
                                .openapi({ description: 'Card code mask.', example: '999' }),
                              cardCodeRegex: z
                                .string()
                                .exactOptional()
                                .openapi({
                                  description: 'Card code regular expression.',
                                  example: '[^0-9]',
                                }),
                              mask: z
                                .string()
                                .exactOptional()
                                .openapi({
                                  description: 'Validator mask.',
                                  example: '9999 9999 9999 9999',
                                }),
                              regex: z
                                .string()
                                .exactOptional()
                                .openapi({ description: '', example: '^4' }),
                              weights: z
                                .array(z.int())
                                .default([2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2])
                                .exactOptional()
                                .openapi({ description: 'Weights.' }),
                            })
                            .exactOptional()
                            .openapi({ description: 'Payment system validator.', required: [] }),
                        })
                        .openapi({ required: [] }),
                    )
                    .exactOptional()
                    .openapi({ description: 'Information on payment systems.' }),
                  payments: z
                    .array(
                      z
                        .object({
                          accountId: z
                            .string()
                            .default('accountID-example')
                            .exactOptional()
                            .openapi({ description: 'Account ID.' }),
                          bin: z
                            .string()
                            .default('2')
                            .exactOptional()
                            .openapi({ description: 'Payment bin.' }),
                          installments: z
                            .int()
                            .default(2)
                            .openapi({ description: 'Number of installments.' }),
                          paymentSystem: z
                            .string()
                            .default('12')
                            .openapi({ description: 'Payment system.' }),
                          referenceValue: z
                            .int()
                            .default(16175)
                            .openapi({
                              description:
                                'Reference value for calculating interest rates, in case it applies.',
                            }),
                          value: z
                            .int()
                            .default(16175)
                            .openapi({
                              description: 'Value including interest, in case it applies.',
                            }),
                        })
                        .openapi({
                          description: '',
                          required: ['paymentSystem', 'referenceValue', 'value', 'installments'],
                        }),
                    )
                    .openapi({ description: 'Payment information.' }),
                  updateStatus: z
                    .string()
                    .default('updated')
                    .exactOptional()
                    .openapi({
                      description:
                        'Indicates whether this object\'s information is up to date according to the order\'s items. An order can not be placed if `"outdated"`',
                    }),
                })
                .openapi({ description: 'Payment infomation.', required: ['payments'] }),
              salesAssociateData: z
                .object({
                  salesAssociateId: z
                    .string()
                    .default('seller123')
                    .exactOptional()
                    .openapi({
                      description:
                        'Sales Associate (Seller) identification code. All information should be registered by the merchant. Maximum of 100 characters.',
                    }),
                })
                .exactOptional()
                .openapi({ description: 'Sales Associate information.', required: [] }),
              shippingData: z
                .object({
                  address: z
                    .object({
                      addressId: z
                        .string()
                        .default('Home')
                        .exactOptional()
                        .openapi({ description: 'Address ID.' }),
                      addressType: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            'Type of address. For example, `Residential` or `Pickup`, among others.',
                          example: 'residential',
                        }),
                      city: z
                        .string()
                        .default('Rio de Janeiro')
                        .exactOptional()
                        .openapi({ description: 'City of the shipping address.' }),
                      complement: z
                        .string()
                        .default('3rd floor')
                        .exactOptional()
                        .openapi({
                          description: 'Complement to the shipping address in case it applies.',
                        }),
                      country: z
                        .string()
                        .default('BRA')
                        .exactOptional()
                        .openapi({
                          description:
                            'Three letter ISO code of the country of the shipping address.',
                        }),
                      geoCoordinates: z
                        .array(z.number().openapi({ example: -47.924747467041016 }))
                        .default([-47.924747467041016, -15.832582473754883])
                        .exactOptional()
                        .openapi({
                          description:
                            'Array containing two floats with geocoordinates, first longitude, then latitude.',
                        }),
                      neighborhood: z
                        .string()
                        .default('Botafogo')
                        .exactOptional()
                        .openapi({ description: 'Neighborhood of the shipping address.' }),
                      number: z
                        .string()
                        .default('300')
                        .exactOptional()
                        .openapi({
                          description:
                            'Number of the building, house or apartment in the shipping address.',
                        }),
                      postalCode: z
                        .string()
                        .default('12345-000')
                        .exactOptional()
                        .openapi({ description: 'Postal Code.' }),
                      receiverName: z
                        .string()
                        .default('receiver-name')
                        .exactOptional()
                        .openapi({
                          description: 'Name of the person who is going to receive the order.',
                        }),
                      reference: z
                        .string()
                        .default('Grey building')
                        .exactOptional()
                        .openapi({
                          description:
                            'Complement that might help locate the shipping address more precisely in case of delivery.',
                        }),
                      state: z
                        .string()
                        .default('Rio de Janeiro')
                        .exactOptional()
                        .openapi({ description: 'State of the shipping address.' }),
                      street: z
                        .string()
                        .default('Praia de Botafogo')
                        .exactOptional()
                        .openapi({ description: 'Street of the shipping address.' }),
                    })
                    .exactOptional()
                    .openapi({
                      description:
                        'Shipping address.\n\r\n\rFor customers already in your data base, it is enough to send this object only with an `addressId`, which you may obtain from a [Cart simulation request](https://developers.vtex.com/vtex-rest-api/reference/shopping-cart#cartsimulation), for example.',
                      required: [],
                    }),
                  logisticsInfo: z
                    .array(
                      z
                        .object({
                          deliveryWindow: z
                            .object({
                              endDateUtc: z
                                .string()
                                .default('2021-07-13T23:59:59+00:00')
                                .exactOptional()
                                .openapi({
                                  description: 'Delivery window ending day and time in UTC.',
                                }),
                              lisPrice: z
                                .int()
                                .default(0)
                                .exactOptional()
                                .openapi({ description: 'Delivery window list price.' }),
                              price: z
                                .int()
                                .default(0)
                                .exactOptional()
                                .openapi({ description: 'Delivery window price.' }),
                              startDateUtc: z
                                .string()
                                .default('2021-07-13T00:00:00+00:00')
                                .exactOptional()
                                .openapi({
                                  description: 'Delivery window starting day and time in UTC.',
                                }),
                              tax: z
                                .int()
                                .default(0)
                                .exactOptional()
                                .openapi({ description: 'Delivery window tax.' }),
                            })
                            .exactOptional()
                            .openapi({
                              description:
                                'In case of scheduled delivery, this object will contain information on the delivery window selected by the shopper.',
                              required: [],
                            }),
                          itemIndex: z
                            .int()
                            .default(0)
                            .openapi({
                              description:
                                'Index of the item in the `items` array, starting from 0.',
                            }),
                          lockTTL: z
                            .string()
                            .default('8d')
                            .exactOptional()
                            .openapi({ description: 'Logistics reservation waiting time.' }),
                          price: z
                            .int()
                            .default(1099)
                            .openapi({
                              description:
                                "Shipping price for the item. Does not account for the whole order's shipping price.",
                            }),
                          selectedSla: z
                            .string()
                            .default('Express')
                            .openapi({ description: 'Selected shipping option' }),
                          shippingEstimate: z
                            .string()
                            .default('7d')
                            .exactOptional()
                            .openapi({
                              description: 'Estimated time until delivery for the item.',
                            }),
                        })
                        .openapi({ required: ['itemIndex', 'selectedSla', 'price'] }),
                    )
                    .exactOptional()
                    .openapi({
                      description:
                        'Array of objects containing logistics information of each item.',
                    }),
                  updateStatus: z
                    .string()
                    .default('updated')
                    .exactOptional()
                    .openapi({
                      description:
                        'Indicate whether this object\'s information is up to date according to the order\'s items. An order can not be placed if `"outdated"`',
                    }),
                })
                .openapi({ description: 'Shipping information.', required: [] }),
            })
            .openapi({ required: ['items', 'clientProfileData', 'shippingData', 'paymentData'] }),
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
              orderForm: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({
                  description:
                    'This is `null` since this request does not depend on any previously existing orderForm information in the platform.',
                }),
              orders: z
                .array(
                  z
                    .object({
                      allowCancelation: z
                        .boolean()
                        .exactOptional()
                        .openapi({ description: 'Indicates whether cancelation is allowed.' }),
                      allowChangeSeller: z
                        .boolean()
                        .exactOptional()
                        .openapi({ description: 'Indicates whether seller changing is allowed.' }),
                      allowEdition: z
                        .boolean()
                        .exactOptional()
                        .openapi({ description: 'Indicates whether edition is allowed.' }),
                      checkedInPickupPointId: z
                        .string()
                        .nullable()
                        .exactOptional()
                        .openapi({ description: 'Checked in pickuppoint.' }),
                      clientProfileData: z
                        .object({
                          corporateDocument: z
                            .string()
                            .nullable()
                            .exactOptional()
                            .openapi({
                              description: 'Corporate document, if the customer is a legal entity.',
                            }),
                          corporateName: z
                            .string()
                            .nullable()
                            .exactOptional()
                            .openapi({
                              description: 'Company name, if the customer is a legal entity.',
                            }),
                          corporatePhone: z
                            .string()
                            .nullable()
                            .exactOptional()
                            .openapi({
                              description:
                                'Corporate phone number, if the customer is a legal entity.',
                            }),
                          customerClass: z
                            .string()
                            .nullable()
                            .exactOptional()
                            .openapi({ description: 'Customer class.' }),
                          document: z
                            .string()
                            .exactOptional()
                            .openapi({ description: 'Document informed by the customer.' }),
                          documentType: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description: 'Type of the document informed by the customer.',
                            }),
                          email: z
                            .string()
                            .exactOptional()
                            .openapi({ description: 'Email address.' }),
                          firstName: z
                            .string()
                            .exactOptional()
                            .openapi({ description: 'First name.' }),
                          isCorporate: z
                            .boolean()
                            .exactOptional()
                            .openapi({
                              description: 'Indicates whether the customer is a legal entity.',
                            }),
                          lastName: z
                            .string()
                            .exactOptional()
                            .openapi({ description: 'Last name.' }),
                          phone: z
                            .string()
                            .exactOptional()
                            .openapi({ description: 'Phone number.' }),
                          profileCompleteOnLoading: z
                            .boolean()
                            .exactOptional()
                            .openapi({
                              description: 'Indicates whether profile is complete on loading.',
                            }),
                          profileErrorOnLoading: z
                            .boolean()
                            .nullable()
                            .exactOptional()
                            .openapi({
                              description: 'Indicates whether profile presents error on loading.',
                            }),
                          stateInscription: z
                            .string()
                            .nullable()
                            .exactOptional()
                            .openapi({
                              description: 'State inscription, if the customer is a legal entity.',
                            }),
                          tradeName: z
                            .string()
                            .nullable()
                            .exactOptional()
                            .openapi({
                              description: 'Trade name, if the customer is a legal entity.',
                            }),
                        })
                        .exactOptional()
                        .openapi({ description: "Customer's profile information.", required: [] }),
                      creationDate: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'Creation date.' }),
                      followUpEmail: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'Follow up email address.' }),
                      hostName: z.string().exactOptional().openapi({ description: 'Host name.' }),
                      isCheckedIn: z
                        .boolean()
                        .default(false)
                        .exactOptional()
                        .openapi({ description: 'Indicates whether order is checked in.' }),
                      isCompleted: z
                        .boolean()
                        .exactOptional()
                        .openapi({ description: 'Indicates whether order is completed.' }),
                      isUserDataVisible: z
                        .boolean()
                        .exactOptional()
                        .openapi({ description: 'Indicates whether user data is visible.' }),
                      itemMetadata: z
                        .object({
                          items: z
                            .array(
                              z
                                .object({
                                  detailUrl: z
                                    .string()
                                    .exactOptional()
                                    .openapi({ description: 'Detail URL.' }),
                                  ean: z
                                    .string()
                                    .nullable()
                                    .exactOptional()
                                    .openapi({ description: 'European Article Number.' }),
                                  id: z
                                    .string()
                                    .exactOptional()
                                    .openapi({ description: 'Item ID.' }),
                                  imageUrl: z
                                    .string()
                                    .exactOptional()
                                    .openapi({ description: 'Image URL.' }),
                                  name: z
                                    .string()
                                    .exactOptional()
                                    .openapi({ description: 'Product name.' }),
                                  productId: z
                                    .string()
                                    .exactOptional()
                                    .openapi({ description: 'Product ID.' }),
                                  refId: z
                                    .string()
                                    .exactOptional()
                                    .openapi({ description: 'Ref ID.' }),
                                  seller: z
                                    .string()
                                    .exactOptional()
                                    .openapi({ description: 'Seller.' }),
                                  skuName: z
                                    .string()
                                    .exactOptional()
                                    .openapi({ description: 'SKU name.' }),
                                })
                                .openapi({ required: [] }),
                            )
                            .exactOptional()
                            .openapi({
                              description:
                                'List of objects containing metadata on each item in the order.',
                            }),
                        })
                        .exactOptional()
                        .openapi({ description: 'Item metadata.', required: [] }),
                      items: z
                        .array(
                          z
                            .object({
                              additionalInfo: z
                                .object({
                                  brandId: z
                                    .string()
                                    .exactOptional()
                                    .openapi({ description: 'Brand ID.' }),
                                  brandName: z
                                    .string()
                                    .exactOptional()
                                    .openapi({ description: 'Brand name.' }),
                                  dimension: z
                                    .string()
                                    .nullable()
                                    .exactOptional()
                                    .openapi({ description: 'Dimension.' }),
                                  offeringInfo: z
                                    .string()
                                    .nullable()
                                    .exactOptional()
                                    .openapi({ description: 'Offering information.' }),
                                  offeringType: z
                                    .string()
                                    .nullable()
                                    .exactOptional()
                                    .openapi({ description: 'Offering type.' }),
                                  offeringTypeId: z
                                    .string()
                                    .nullable()
                                    .exactOptional()
                                    .openapi({ description: 'Offering type ID.' }),
                                })
                                .exactOptional()
                                .openapi({ description: 'Additional information.', required: [] }),
                              attachments: z
                                .array(z.string())
                                .exactOptional()
                                .openapi({
                                  description: 'Array containing information on attachments.',
                                }),
                              availability: z
                                .string()
                                .exactOptional()
                                .openapi({ description: 'Availability' }),
                              bundleItems: z
                                .array(
                                  z
                                    .object({
                                      id: z
                                        .int()
                                        .exactOptional()
                                        .openapi({ description: 'Service identifier.' }),
                                      name: z
                                        .string()
                                        .exactOptional()
                                        .openapi({ description: 'Service name.' }),
                                      price: z
                                        .int()
                                        .exactOptional()
                                        .openapi({ description: 'Service price in cents.' }),
                                      type: z
                                        .string()
                                        .exactOptional()
                                        .openapi({ description: 'Service type.' }),
                                    })
                                    .openapi({ required: [] }),
                                )
                                .exactOptional()
                                .openapi({
                                  description:
                                    'Information on services sold along with the SKU. Example: a gift package.',
                                }),
                              detailUrl: z
                                .string()
                                .exactOptional()
                                .openapi({ description: 'Detail URL.' }),
                              ean: z
                                .string()
                                .nullable()
                                .exactOptional()
                                .openapi({ description: 'European Article Number.' }),
                              id: z
                                .string()
                                .exactOptional()
                                .openapi({ description: 'ID of the item.' }),
                              imageUrl: z
                                .string()
                                .exactOptional()
                                .openapi({ description: 'Image URL.' }),
                              isGift: z
                                .boolean()
                                .exactOptional()
                                .openapi({ description: 'Indicates whether item is a gift.' }),
                              listPrice: z
                                .int()
                                .exactOptional()
                                .openapi({ description: 'List price in cents.' }),
                              manualPrice: z
                                .int()
                                .nullable()
                                .exactOptional()
                                .openapi({ description: 'Manual price in cents.' }),
                              manualPriceAppliedBy: z
                                .string()
                                .nullable()
                                .exactOptional()
                                .openapi({
                                  description:
                                    'User that applied the manual price, if that is the case.',
                                }),
                              manufacturerCode: z
                                .string()
                                .nullable()
                                .exactOptional()
                                .openapi({ description: 'Manufacturer code.' }),
                              measurementUnit: z
                                .string()
                                .exactOptional()
                                .openapi({ description: 'Measurement unit' }),
                              modalType: z
                                .string()
                                .nullable()
                                .exactOptional()
                                .openapi({ description: 'Modal type.' }),
                              name: z
                                .string()
                                .exactOptional()
                                .openapi({ description: 'Product name.' }),
                              parentAssemblyBinding: z
                                .string()
                                .nullable()
                                .exactOptional()
                                .openapi({ description: 'Parent assembly binding.' }),
                              parentItemIndex: z
                                .int()
                                .nullable()
                                .exactOptional()
                                .openapi({ description: 'Parent item index.' }),
                              preSaleDate: z
                                .string()
                                .nullable()
                                .exactOptional()
                                .openapi({ description: 'Presale date.' }),
                              price: z
                                .int()
                                .exactOptional()
                                .openapi({ description: 'Price in cents.' }),
                              priceDefinition: z
                                .object({
                                  calculatedSellingPrice: z
                                    .int()
                                    .exactOptional()
                                    .openapi({
                                      description:
                                        "Item's calculated unitary selling price in cents.",
                                    }),
                                  sellingPrices: z
                                    .array(
                                      z
                                        .object({
                                          quantity: z
                                            .int()
                                            .exactOptional()
                                            .openapi({
                                              description:
                                                'Rounding quantity, meaning how many items are rounded to this value.',
                                            }),
                                          value: z
                                            .int()
                                            .exactOptional()
                                            .openapi({
                                              description:
                                                'Value in cents for that specific rounding.',
                                            }),
                                        })
                                        .openapi({ required: [] }),
                                    )
                                    .exactOptional()
                                    .openapi({
                                      description:
                                        'Array of objects, each containing value (in cents) and quantity for the different rounding instances that can be combined to form the correctly rounded total.',
                                    }),
                                  total: z
                                    .int()
                                    .exactOptional()
                                    .openapi({
                                      description:
                                        'Total value for all units of the item in cents.',
                                    }),
                                })
                                .exactOptional()
                                .openapi({
                                  description:
                                    'Price information for all units of a specific item.',
                                  required: [],
                                }),
                              priceTags: z
                                .array(
                                  z
                                    .object({
                                      identifier: z
                                        .string()
                                        .exactOptional()
                                        .openapi({ description: 'Price tag identifier.' }),
                                      isPercentual: z
                                        .boolean()
                                        .exactOptional()
                                        .openapi({
                                          description:
                                            'Indicates whether price tag value is applied through a percentage.',
                                        }),
                                      name: z
                                        .string()
                                        .exactOptional()
                                        .openapi({ description: 'Price tag name.' }),
                                      rawValue: z
                                        .int()
                                        .exactOptional()
                                        .openapi({ description: 'Price tag raw value.' }),
                                      value: z
                                        .int()
                                        .exactOptional()
                                        .openapi({ description: 'Price tag value.' }),
                                    })
                                    .openapi({ required: [] }),
                                )
                                .exactOptional()
                                .openapi({
                                  description:
                                    'Array of price tags, each of which, modifies the price in some way, like discounts or rates that apply to the item in the context of the order.',
                                }),
                              priceValidUntil: z
                                .string()
                                .exactOptional()
                                .openapi({ description: 'Price expiration date and time.' }),
                              productCategories: z
                                .object({
                                  '{ID}': z
                                    .string()
                                    .exactOptional()
                                    .openapi({
                                      description:
                                        'Product category corresponding to the ID in the field key.',
                                    }),
                                })
                                .exactOptional()
                                .openapi({
                                  description:
                                    'Object, where each field is an ID from `productCategoryIds`.',
                                  required: [],
                                }),
                              productCategoryIds: z
                                .string()
                                .exactOptional()
                                .openapi({ description: 'Product category IDs.' }),
                              productId: z
                                .string()
                                .exactOptional()
                                .openapi({ description: 'Product ID.' }),
                              productRefId: z
                                .string()
                                .exactOptional()
                                .openapi({ description: 'Product Ref ID.' }),
                              quantity: z
                                .int()
                                .exactOptional()
                                .openapi({ description: 'Quantity.' }),
                              refId: z.string().exactOptional().openapi({ description: 'Ref ID.' }),
                              rewardValue: z
                                .int()
                                .exactOptional()
                                .openapi({ description: 'Reward value in cents.' }),
                              seller: z
                                .string()
                                .exactOptional()
                                .openapi({ description: 'Seller.' }),
                              sellerChain: z
                                .array(z.string().openapi({ description: 'Seller.' }))
                                .exactOptional()
                                .openapi({
                                  description:
                                    'Sellers involved in the chain. The list should contain only one seller, unless it is a [Multilevel Omnichannel Inventory](https://help.vtex.com/pt/tutorial/multilevel-omnichannel-inventory--7M1xyCZWUyCB7PcjNtOyw4) order.',
                                }),
                              sellingPrice: z
                                .int()
                                .exactOptional()
                                .openapi({
                                  description:
                                    'Selling price in cents. Note that this field may be subject to rounding discrepancies. We recommend retrieving data from the `priceDefinition` data structure instead.',
                                }),
                              skuName: z
                                .string()
                                .exactOptional()
                                .openapi({ description: 'SKU name.' }),
                              tax: z
                                .int()
                                .exactOptional()
                                .openapi({ description: 'Tax value in cents.' }),
                              uniqueId: z
                                .string()
                                .exactOptional()
                                .openapi({ description: 'Unique ID.' }),
                              unitMultiplier: z
                                .int()
                                .exactOptional()
                                .openapi({ description: 'Unit multiplier' }),
                            })
                            .openapi({ required: [] }),
                        )
                        .exactOptional()
                        .openapi({ description: 'Information on each item in the order.' }),
                      lastChange: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'Last change.' }),
                      merchantName: z
                        .string()
                        .nullable()
                        .exactOptional()
                        .openapi({ description: 'Merchant name.' }),
                      orderFormCreationDate: z
                        .string()
                        .exactOptional()
                        .openapi({ description: '`orderForm` creation date.' }),
                      orderGroup: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            'Order group. Orders that involve different sellers are split into different orders of a same order group.',
                        }),
                      orderId: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description: 'ID of the order in the Order Management System (OMS).',
                        }),
                      paymentData: z
                        .object({
                          giftCards: z
                            .array(
                              z
                                .object({
                                  balance: z
                                    .int()
                                    .exactOptional()
                                    .openapi({ description: 'Gift card balance in cents.' }),
                                  id: z
                                    .string()
                                    .exactOptional()
                                    .openapi({ description: 'Gift card ID.' }),
                                  inUse: z
                                    .boolean()
                                    .exactOptional()
                                    .openapi({
                                      description: 'Indicates whether gift card is in use.',
                                    }),
                                  isSpecialCard: z
                                    .boolean()
                                    .exactOptional()
                                    .openapi({
                                      description: 'Indicates whether gift card is special.',
                                    }),
                                  name: z
                                    .string()
                                    .exactOptional()
                                    .openapi({ description: 'Gift card name.' }),
                                  redemptionCode: z
                                    .string()
                                    .exactOptional()
                                    .openapi({ description: 'Gift card redemption code.' }),
                                  value: z
                                    .int()
                                    .exactOptional()
                                    .openapi({ description: 'Gift card value in cents.' }),
                                })
                                .openapi({ required: [] }),
                            )
                            .exactOptional()
                            .openapi({
                              description: 'Gift card information, if it applies to the order.',
                            }),
                          transactions: z
                            .array(
                              z
                                .object({
                                  isActive: z
                                    .boolean()
                                    .exactOptional()
                                    .openapi({
                                      description: 'Indicates whether transaction is active.',
                                    }),
                                  merchantName: z
                                    .string()
                                    .exactOptional()
                                    .openapi({ description: 'Merchant name.' }),
                                  payments: z
                                    .array(
                                      z
                                        .object({
                                          accountId: z
                                            .string()
                                            .exactOptional()
                                            .openapi({ description: 'Account ID.' }),
                                          bin: z
                                            .string()
                                            .exactOptional()
                                            .openapi({ description: 'Bin.' }),
                                          installments: z
                                            .int()
                                            .exactOptional()
                                            .openapi({ description: 'Number of installments.' }),
                                          paymentSystem: z
                                            .string()
                                            .exactOptional()
                                            .openapi({ description: 'Payment system.' }),
                                          referenceValue: z
                                            .int()
                                            .exactOptional()
                                            .openapi({
                                              description:
                                                'Reference value for calculating interest rates, in case it applies. Displayed in cents.',
                                            }),
                                          value: z
                                            .int()
                                            .exactOptional()
                                            .openapi({
                                              description:
                                                'Value including interest, in case it applies. Displayed in cents.',
                                            }),
                                        })
                                        .openapi({ required: [] }),
                                    )
                                    .exactOptional()
                                    .openapi({ description: 'Information on each payment.' }),
                                  sharedTransaction: z
                                    .boolean()
                                    .exactOptional()
                                    .openapi({
                                      description: 'Indicates whather transaction is shared.',
                                    }),
                                  transactionId: z
                                    .string()
                                    .exactOptional()
                                    .openapi({ description: 'Transaction ID.' }),
                                })
                                .openapi({ required: [] }),
                            )
                            .exactOptional()
                            .openapi({
                              description:
                                'Information on each transaction pertinent to the order.',
                            }),
                        })
                        .exactOptional()
                        .openapi({
                          description: "Information on the order's payment.",
                          required: [],
                        }),
                      ratesAndBenefitsData: z
                        .object({
                          rateAndBenefitsIdentifiers: z
                            .array(z.string())
                            .exactOptional()
                            .openapi({ description: 'List with rates and benefits identifiers.' }),
                          teaser: z
                            .array(z.string())
                            .exactOptional()
                            .openapi({ description: 'List with rates and benefits teasers.' }),
                        })
                        .exactOptional()
                        .openapi({
                          description: 'Information on rates and benefits that apply to the order.',
                          required: [],
                        }),
                      roundingError: z
                        .int()
                        .exactOptional()
                        .openapi({ description: 'Rounding error.' }),
                      salesAssociateId: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'Sales Associate (Seller) identification code.' }),
                      salesChannel: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'Sales channel.' }),
                      sellerOrderId: z
                        .string()
                        .nullable()
                        .exactOptional()
                        .openapi({ description: 'ID of the order in the seller.' }),
                      sellers: z
                        .array(
                          z
                            .object({
                              id: z.string().exactOptional().openapi({ description: 'Seller ID.' }),
                              logo: z
                                .string()
                                .nullable()
                                .exactOptional()
                                .openapi({ description: 'Seller logo.' }),
                              name: z
                                .string()
                                .exactOptional()
                                .openapi({ description: 'Seller name.' }),
                            })
                            .openapi({ required: [] }),
                        )
                        .exactOptional()
                        .openapi({ description: 'Information on each seller.' }),
                      shippingData: z
                        .object({
                          address: z
                            .object({
                              addressId: z
                                .string()
                                .exactOptional()
                                .openapi({ description: 'Address ID.' }),
                              addressType: z
                                .string()
                                .exactOptional()
                                .openapi({
                                  description:
                                    'Type of address. For example, `Residential` or `Pickup`.',
                                }),
                              city: z
                                .string()
                                .exactOptional()
                                .openapi({ description: 'City of the shipping address.' }),
                              complement: z
                                .string()
                                .nullable()
                                .exactOptional()
                                .openapi({
                                  description:
                                    'Complement to the shipping address, in case it applies.',
                                }),
                              country: z
                                .string()
                                .exactOptional()
                                .openapi({
                                  description:
                                    'Three letter ISO code of the country of the shipping address.',
                                }),
                              geoCoordinates: z
                                .array(z.number())
                                .exactOptional()
                                .openapi({
                                  description:
                                    'Array containing two floats with geocoordinates, first longitude, then latitude.',
                                }),
                              isDisposable: z
                                .boolean()
                                .exactOptional()
                                .openapi({
                                  description: 'Indicates whether address is disposable.',
                                }),
                              neighborhood: z
                                .string()
                                .exactOptional()
                                .openapi({ description: 'Neighborhood of the shipping address.' }),
                              number: z
                                .string()
                                .exactOptional()
                                .openapi({
                                  description:
                                    'Number of the building, house or apartment in the shipping address.',
                                }),
                              postalCode: z
                                .string()
                                .exactOptional()
                                .openapi({ description: 'Postal code.' }),
                              receiverName: z
                                .string()
                                .exactOptional()
                                .openapi({
                                  description:
                                    'Name of the person who is going to receive the order.',
                                }),
                              reference: z
                                .string()
                                .nullable()
                                .exactOptional()
                                .openapi({
                                  description:
                                    'Complement that might help locate the shipping address more precisely in case of delivery.',
                                }),
                              state: z
                                .string()
                                .exactOptional()
                                .openapi({ description: 'State of the shipping address.' }),
                              street: z
                                .string()
                                .exactOptional()
                                .openapi({ description: 'Street of the shipping address.' }),
                            })
                            .exactOptional()
                            .openapi({ description: 'Address information.', required: [] }),
                          availableAddresses: z
                            .array(
                              z
                                .object({
                                  addressId: z
                                    .string()
                                    .exactOptional()
                                    .openapi({ description: 'Address ID.' }),
                                  addressType: z
                                    .string()
                                    .exactOptional()
                                    .openapi({
                                      description:
                                        'Type of address. For example, `Residential` or `Pickup`.',
                                    }),
                                  city: z
                                    .string()
                                    .exactOptional()
                                    .openapi({ description: 'City of the shipping address.' }),
                                  complement: z
                                    .string()
                                    .exactOptional()
                                    .openapi({
                                      description:
                                        'Complement to the shipping address, in case it applies.',
                                    }),
                                  country: z
                                    .string()
                                    .exactOptional()
                                    .openapi({
                                      description:
                                        'Three letter ISO code of the country of the shipping address.',
                                    }),
                                  geoCoordinates: z
                                    .array(z.number())
                                    .exactOptional()
                                    .openapi({
                                      description:
                                        'Array containing two floats with geocoordinates, first longitude, then latitude.',
                                    }),
                                  isDisposable: z
                                    .boolean()
                                    .exactOptional()
                                    .openapi({
                                      description: 'Indicates whether address is disposable.',
                                    }),
                                  neighborhood: z
                                    .string()
                                    .exactOptional()
                                    .openapi({
                                      description: 'Neighborhood of the shipping address.',
                                    }),
                                  number: z
                                    .string()
                                    .exactOptional()
                                    .openapi({
                                      description:
                                        'Number of the building, house or apartment in the shipping address.',
                                    }),
                                  postalCode: z
                                    .string()
                                    .exactOptional()
                                    .openapi({ description: 'Postal code.' }),
                                  receiverName: z
                                    .string()
                                    .exactOptional()
                                    .openapi({
                                      description:
                                        'Name of the person who is going to receive the order.',
                                    }),
                                  reference: z
                                    .string()
                                    .nullable()
                                    .exactOptional()
                                    .openapi({
                                      description:
                                        'Complement that might help locate the shipping address more precisely in case of delivery.',
                                    }),
                                  state: z
                                    .string()
                                    .exactOptional()
                                    .openapi({ description: 'State of the shipping address.' }),
                                  street: z
                                    .string()
                                    .exactOptional()
                                    .openapi({ description: 'Street of the shipping address.' }),
                                })
                                .openapi({ required: [] }),
                            )
                            .exactOptional()
                            .openapi({
                              description:
                                'Array with information on the available addresses for the order.',
                            }),
                          logisticsInfo: z
                            .array(
                              z
                                .object({
                                  addressId: z
                                    .string()
                                    .exactOptional()
                                    .openapi({ description: 'Address ID.' }),
                                  deliveryChannels: z
                                    .array(
                                      z
                                        .object({
                                          id: z
                                            .string()
                                            .exactOptional()
                                            .openapi({ description: 'Delivery channel ID.' }),
                                        })
                                        .openapi({ required: [] }),
                                    )
                                    .exactOptional()
                                    .openapi({
                                      description: 'List of available delivery channels.',
                                    }),
                                  itemId: z
                                    .string()
                                    .exactOptional()
                                    .openapi({ description: 'Item ID.' }),
                                  itemIndex: z
                                    .int()
                                    .exactOptional()
                                    .openapi({
                                      description:
                                        'Index corresponding to the position of the object in the `items` array.',
                                    }),
                                  selectedDeliveryChannel: z
                                    .string()
                                    .exactOptional()
                                    .openapi({
                                      description: 'Delivery channel selected by the customer.',
                                    }),
                                  selectedSla: z
                                    .string()
                                    .exactOptional()
                                    .openapi({ description: 'SLA selected by the customer.' }),
                                  shipsTo: z
                                    .array(
                                      z
                                        .string()
                                        .openapi({ description: 'Three letter country code.' }),
                                    )
                                    .exactOptional()
                                    .openapi({
                                      description:
                                        'List of countries that the item may be shipped to.',
                                    }),
                                  slas: z
                                    .array(
                                      z
                                        .object({
                                          deliveryChannel: z
                                            .string()
                                            .exactOptional()
                                            .openapi({ description: 'Delivery channel.' }),
                                          deliveryIds: z
                                            .array(
                                              z
                                                .object({
                                                  courierId: z
                                                    .string()
                                                    .exactOptional()
                                                    .openapi({ description: 'Courier ID.' }),
                                                  courierName: z
                                                    .string()
                                                    .exactOptional()
                                                    .openapi({ description: 'Courier name.' }),
                                                  dockId: z
                                                    .string()
                                                    .exactOptional()
                                                    .openapi({ description: 'Warehouse ID.' }),
                                                  quantity: z
                                                    .int()
                                                    .exactOptional()
                                                    .openapi({ description: 'Quantity.' }),
                                                  warehouseId: z
                                                    .string()
                                                    .exactOptional()
                                                    .openapi({ description: 'Warehouse ID.' }),
                                                })
                                                .openapi({ required: [] }),
                                            )
                                            .exactOptional()
                                            .openapi({
                                              description: 'Information on each delivery ID.',
                                            }),
                                          id: z
                                            .string()
                                            .exactOptional()
                                            .openapi({ description: 'SLA ID.' }),
                                          listPrice: z
                                            .int()
                                            .exactOptional()
                                            .openapi({ description: 'List price in cents.' }),
                                          lockTTL: z
                                            .string()
                                            .exactOptional()
                                            .openapi({ description: 'Estimate date of delivery.' }),
                                          name: z
                                            .string()
                                            .exactOptional()
                                            .openapi({ description: 'SLA name.' }),
                                          pickupDistance: z
                                            .int()
                                            .exactOptional()
                                            .openapi({ description: 'Pickup point distance.' }),
                                          pickupPointId: z
                                            .string()
                                            .nullable()
                                            .exactOptional()
                                            .openapi({ description: 'Pickup point ID.' }),
                                          pickupStoreInfo: z
                                            .object({
                                              additionalInfo: z
                                                .string()
                                                .nullable()
                                                .exactOptional()
                                                .openapi({
                                                  description: 'Additional information.',
                                                }),
                                              address: z
                                                .object({
                                                  addressType: z
                                                    .string()
                                                    .exactOptional()
                                                    .openapi({
                                                      description:
                                                        'Type of address. For example, `Residential` or `Pickup`.',
                                                    }),
                                                  city: z
                                                    .string()
                                                    .exactOptional()
                                                    .openapi({
                                                      description: 'City of the shipping address.',
                                                    }),
                                                  complement: z
                                                    .string()
                                                    .nullable()
                                                    .exactOptional()
                                                    .openapi({
                                                      description:
                                                        'Complement to the shipping address, in case it applies.',
                                                    }),
                                                  country: z
                                                    .string()
                                                    .exactOptional()
                                                    .openapi({
                                                      description:
                                                        'Three letter ISO code of the country of the shipping address.',
                                                    }),
                                                  geoCoordinates: z
                                                    .array(z.number())
                                                    .exactOptional()
                                                    .openapi({
                                                      description:
                                                        'Array containing two floats with geocoordinates, first longitude, then latitude.',
                                                    }),
                                                  neighborhood: z
                                                    .string()
                                                    .exactOptional()
                                                    .openapi({
                                                      description:
                                                        'Neighborhood of the shipping address.',
                                                    }),
                                                  number: z
                                                    .string()
                                                    .exactOptional()
                                                    .openapi({
                                                      description:
                                                        'Number of the building, house or apartment in the shipping address.',
                                                    }),
                                                  postalCode: z
                                                    .string()
                                                    .exactOptional()
                                                    .openapi({ description: 'Postal code.' }),
                                                  reference: z
                                                    .string()
                                                    .nullable()
                                                    .exactOptional()
                                                    .openapi({
                                                      description:
                                                        'Complement that might help locate the shipping address more precisely in case of delivery.',
                                                    }),
                                                  state: z
                                                    .string()
                                                    .exactOptional()
                                                    .openapi({
                                                      description: 'State of the shipping address.',
                                                    }),
                                                  street: z
                                                    .string()
                                                    .exactOptional()
                                                    .openapi({
                                                      description:
                                                        'Street of the shipping address.',
                                                    }),
                                                })
                                                .nullable()
                                                .exactOptional()
                                                .openapi({
                                                  description: 'Address information.',
                                                  required: [],
                                                }),
                                              dockId: z
                                                .string()
                                                .nullable()
                                                .exactOptional()
                                                .openapi({ description: 'Corresponding dock ID.' }),
                                              friendlyName: z
                                                .string()
                                                .nullable()
                                                .exactOptional()
                                                .openapi({ description: 'Friendly name.' }),
                                              isPickupStore: z
                                                .boolean()
                                                .exactOptional()
                                                .openapi({
                                                  description:
                                                    'Indicates whether it is the pickup store.',
                                                }),
                                            })
                                            .exactOptional()
                                            .openapi({
                                              description: 'Information on the pickup store.',
                                              required: [],
                                            }),
                                          polygonName: z
                                            .string()
                                            .nullable()
                                            .exactOptional()
                                            .openapi({ description: 'Polygon name.' }),
                                          price: z
                                            .int()
                                            .exactOptional()
                                            .openapi({ description: 'Price in cents.' }),
                                          shippingEstimate: z
                                            .string()
                                            .exactOptional()
                                            .openapi({
                                              description:
                                                'Shipping estimate. For instance, Three business days will be represented `3bd`.',
                                            }),
                                          shippingEstimateDate: z
                                            .string()
                                            .nullable()
                                            .exactOptional()
                                            .openapi({ description: 'Shipping estimate date.' }),
                                          tax: z
                                            .int()
                                            .exactOptional()
                                            .openapi({ description: 'Tax in cents.' }),
                                          transitTime: z
                                            .string()
                                            .exactOptional()
                                            .openapi({
                                              description:
                                                'Transit time. For instance, "three business days" is represented `3bd`.',
                                            }),
                                        })
                                        .openapi({ required: [] }),
                                    )
                                    .exactOptional()
                                    .openapi({ description: 'Information on available SLAs.' }),
                                })
                                .openapi({ required: [] }),
                            )
                            .exactOptional()
                            .openapi({
                              description:
                                'Array with logistics information. Each object in this array corresponds to an object in the `items` array, based on the respective `itemIndex`.',
                            }),
                          selectedAddresses: z
                            .array(
                              z
                                .object({
                                  addressId: z
                                    .string()
                                    .exactOptional()
                                    .openapi({ description: 'Address ID.' }),
                                  addressType: z
                                    .string()
                                    .exactOptional()
                                    .openapi({
                                      description:
                                        'Type of address. For example, `Residential` or `Pickup`.',
                                    }),
                                  city: z
                                    .string()
                                    .exactOptional()
                                    .openapi({ description: 'City of the shipping address.' }),
                                  complement: z
                                    .string()
                                    .exactOptional()
                                    .openapi({
                                      description:
                                        'Complement to the shipping address, in case it applies.',
                                    }),
                                  country: z
                                    .string()
                                    .exactOptional()
                                    .openapi({
                                      description:
                                        'Three letter ISO code of the country of the shipping address.',
                                    }),
                                  geoCoordinates: z
                                    .array(z.number())
                                    .exactOptional()
                                    .openapi({
                                      description:
                                        'Array containing two floats with geocoordinates, first longitude, then latitude.',
                                    }),
                                  isDisposable: z
                                    .boolean()
                                    .exactOptional()
                                    .openapi({
                                      description: 'Indicates whether address is disposable.',
                                    }),
                                  neighborhood: z
                                    .string()
                                    .exactOptional()
                                    .openapi({
                                      description: 'Neighborhood of the shipping address.',
                                    }),
                                  number: z
                                    .string()
                                    .exactOptional()
                                    .openapi({
                                      description:
                                        'Number of the building, house or apartment in the shipping address.',
                                    }),
                                  postalCode: z
                                    .string()
                                    .exactOptional()
                                    .openapi({ description: 'Postal code.' }),
                                  receiverName: z
                                    .string()
                                    .exactOptional()
                                    .openapi({
                                      description:
                                        'Name of the person who is going to receive the order.',
                                    }),
                                  reference: z
                                    .string()
                                    .nullable()
                                    .exactOptional()
                                    .openapi({
                                      description:
                                        'Complement that might help locate the shipping address more precisely in case of delivery.',
                                    }),
                                  state: z
                                    .string()
                                    .exactOptional()
                                    .openapi({ description: 'State of the shipping address.' }),
                                  street: z
                                    .string()
                                    .exactOptional()
                                    .openapi({ description: 'Street of the shipping address.' }),
                                })
                                .openapi({ required: [] }),
                            )
                            .exactOptional()
                            .openapi({
                              description:
                                'Array with information on the selected addresses for the order.',
                            }),
                        })
                        .exactOptional()
                        .openapi({
                          description: 'Shipping information pertinent to the order.',
                          required: [],
                        }),
                      state: z
                        .string()
                        .nullable()
                        .exactOptional()
                        .openapi({ description: 'State.' }),
                      storeId: z
                        .string()
                        .nullable()
                        .exactOptional()
                        .openapi({ description: 'Store ID.' }),
                      timeZoneCreationDate: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'Time zone creation date.' }),
                      timeZoneLastChange: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'Time zone last change.' }),
                      totals: z
                        .array(
                          z
                            .object({
                              id: z.string().exactOptional().openapi({ description: 'Total ID.' }),
                              name: z
                                .string()
                                .exactOptional()
                                .openapi({ description: 'Total name.' }),
                              value: z
                                .int()
                                .exactOptional()
                                .openapi({ description: 'Total value.' }),
                            })
                            .openapi({ required: [] }),
                        )
                        .exactOptional()
                        .openapi({ description: 'Information on order totals.' }),
                      userType: z.string().exactOptional().openapi({ description: 'User type.' }),
                      value: z
                        .int()
                        .exactOptional()
                        .openapi({ description: 'Value of the order.' }),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional()
                .openapi({ description: 'Information on each of the orders created.' }),
              transactionData: z
                .object({
                  gatewayCallbackTemplatePath: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description:
                        'Template of the gateway callback path, which may later be used to send information about the transaction.',
                    }),
                  merchantTransactions: z
                    .array(
                      z
                        .object({
                          id: z
                            .string()
                            .exactOptional()
                            .openapi({ description: 'ID of the seller.' }),
                          merchantName: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description: 'Name of the merchant responsible for the sale.',
                            }),
                          payments: z
                            .array(
                              z
                                .object({
                                  accountId: z
                                    .string()
                                    .nullable()
                                    .exactOptional()
                                    .openapi({ description: 'Account ID.' }),
                                  bin: z
                                    .string()
                                    .nullable()
                                    .exactOptional()
                                    .openapi({ description: 'Payment bin.' }),
                                  giftCardId: z
                                    .string()
                                    .nullable()
                                    .exactOptional()
                                    .openapi({ description: 'Gift card ID.' }),
                                  giftCardProvider: z
                                    .string()
                                    .nullable()
                                    .exactOptional()
                                    .openapi({ description: 'Gift card provider.' }),
                                  giftCardRedemptionCode: z
                                    .string()
                                    .nullable()
                                    .exactOptional()
                                    .openapi({ description: 'Gift card redemption code.' }),
                                  paymentSystem: z
                                    .string()
                                    .exactOptional()
                                    .openapi({ description: 'Payment system.' }),
                                  referenceValue: z
                                    .int()
                                    .exactOptional()
                                    .openapi({
                                      description:
                                        'Reference value over which interests may be applied.',
                                    }),
                                  tokenId: z
                                    .string()
                                    .nullable()
                                    .exactOptional()
                                    .openapi({ description: 'Token ID.' }),
                                  value: z
                                    .int()
                                    .exactOptional()
                                    .openapi({
                                      description: 'Total value to be paid in this payment.',
                                    }),
                                })
                                .openapi({ required: [] }),
                            )
                            .exactOptional()
                            .openapi({
                              description:
                                'Information on each payment pertinent to the transaction.',
                            }),
                          transactionId: z
                            .string()
                            .exactOptional()
                            .openapi({ description: 'ID of the transaction in the platform.' }),
                        })
                        .openapi({ required: [] }),
                    )
                    .exactOptional()
                    .openapi({ description: 'Information on each merchant transaction.' }),
                  receiverUri: z.string().exactOptional().openapi({ description: 'Receiver URI.' }),
                })
                .exactOptional()
                .openapi({
                  description: 'Information on each transaction pertinent to the order placed.',
                  required: [],
                }),
            })
            .openapi({ required: [] }),
          example: {
            orderForm: null,
            orders: [
              {
                allowCancellation: false,
                allowChangeSeller: false,
                allowEdition: false,
                changeData: null,
                checkedInPickupPointId: null,
                clientPreferencesData: null,
                clientProfileData: {
                  corporateDocument: null,
                  corporateName: null,
                  corporatePhone: null,
                  customerClass: null,
                  document: '12345678900',
                  documentType: 'cpf',
                  email: 'clark.kent@example.com',
                  firstName: 'Clark',
                  isCorporate: false,
                  lastName: 'Kent',
                  phone: '+5521998765432',
                  profileCompleteOnLoading: false,
                  profileErrorOnLoading: null,
                  stateInscription: null,
                  tradeName: null,
                },
                commercialConditionData: null,
                creationDate: '2021-07-13T18:33:25.3029443Z',
                customData: null,
                followUpEmail: '6c10d76b5170456d89823b38b7c8f6ac@ct.vtex.com.br',
                giftRegistryData: null,
                hooksData: null,
                hostName: 'mystore',
                invoiceData: null,
                isCheckedIn: false,
                isCompleted: false,
                isUserDataVisible: true,
                itemMetadata: {
                  items: [
                    {
                      assemblyOptions: [],
                      detailUrl: '/chopp-brahma-claro-30l/p',
                      ean: null,
                      id: '2',
                      imageUrl:
                        'http://mystore.vteximg.com.br/arquivos/ids/155400-55-55/30l_v2.png?v=637303412106100000',
                      name: 'Chopp Brahma Claro 30L',
                      productId: '2',
                      refId: 'CBC30L',
                      seller: '1',
                      skuName: 'Chopp Brahma Claro 30L',
                    },
                  ],
                },
                items: [
                  {
                    additionalInfo: {
                      brandId: '2000000',
                      brandName: 'Brahma',
                      dimension: null,
                      offeringInfo: null,
                      offeringType: null,
                      offeringTypeId: null,
                    },
                    assemblies: [],
                    attachmentOfferings: [],
                    attachments: [],
                    availability: 'available',
                    bundleItems: [],
                    components: [],
                    detailUrl: '/chopp-brahma-claro-30l/p',
                    ean: null,
                    id: '2',
                    imageUrl:
                      'http://mystore.vteximg.com.br/arquivos/ids/155400-55-55/30l_v2.png?v=637303412106100000',
                    isGift: false,
                    listPrice: 49900,
                    manualPrice: null,
                    manualPriceAppliedBy: null,
                    manufacturerCode: null,
                    measurementUnit: 'un',
                    modalType: null,
                    name: 'Chopp Brahma Claro 30L',
                    offerings: [],
                    parentAssemblyBinding: null,
                    parentItemIndex: null,
                    preSaleDate: null,
                    price: 32890,
                    priceDefinition: {
                      calculatedSellingPrice: 32890,
                      sellingPrices: [{ quantity: 1, value: 32890 }],
                      total: 32890,
                    },
                    priceTags: [],
                    priceValidUntil: '2022-07-13T18:30:46Z',
                    productCategories: { '1': 'Bebidas' },
                    productCategoryIds: '/1/',
                    productId: '2',
                    productRefId: '',
                    quantity: 1,
                    refId: 'CBC30L',
                    rewardValue: 0,
                    seller: '1',
                    sellerChain: ['1'],
                    sellingPrice: 32890,
                    skuName: 'Chopp Brahma Claro 30L',
                    tax: 0,
                    uniqueId: '9D6E447B3FF64CEDA33B17C01379C119',
                    unitMultiplier: 1,
                  },
                ],
                lastChange: '2021-07-13T18:33:27.736557Z',
                marketingData: null,
                merchantName: null,
                openTextField: { value: null },
                orderFormCreationDate: '2021-07-13T18:33:25.1313373Z',
                orderGroup: '1146512005522',
                orderId: '1146512005522-01',
                paymentData: {
                  giftCards: [],
                  transactions: [
                    {
                      isActive: true,
                      merchantName: 'MYSTORE',
                      payments: [],
                      sharedTransaction: false,
                      transactionId: '296D6D245C17437E823EB77E403FC88D',
                    },
                  ],
                },
                ratesAndBenefitsData: { rateAndBenefitsIdentifiers: [], teaser: [] },
                roundingError: 0,
                salesChannel: '1',
                sellerOrderId: '00-1146512005522-01',
                sellers: [{ id: '1', logo: '', name: 'Tracking QA' }],
                shippingData: {
                  address: {
                    addressId: 'teste',
                    addressType: 'residential',
                    city: 'Brasília',
                    complement: '15º andar',
                    country: 'BRA',
                    geoCoordinates: [-47.924747467041016, -15.832582473754883],
                    isDisposable: true,
                    neighborhood: 'Copacabana',
                    number: '123',
                    postalCode: '70386000',
                    receiverName: 'Clark Kent',
                    reference: null,
                    state: 'DF',
                    street: 'Rua da minha casa',
                  },
                  availableAddresses: [
                    {
                      addressId: 'teste',
                      addressType: 'residential',
                      city: 'Rio de Janeiro',
                      complement: '15º andar',
                      country: 'BRA',
                      geoCoordinates: [-47.924747467041016, -15.832582473754883],
                      isDisposable: true,
                      neighborhood: 'Copacabana',
                      number: '123',
                      postalCode: '12345000',
                      receiverName: 'Clark Kent',
                      reference: null,
                      state: 'RJ',
                      street: 'Rua da minha casa',
                    },
                  ],
                  logisticsInfo: [
                    {
                      addressId: 'teste',
                      deliveryChannels: [{ id: 'delivery' }, { id: 'pickup-in-point' }],
                      itemId: '2',
                      itemIndex: 0,
                      selectedDeliveryChannel: 'delivery',
                      selectedSla: 'Normal',
                      shipsTo: ['BRA', 'COL', 'USA'],
                      slas: [
                        {
                          availableDeliveryWindows: [],
                          deliveryChannel: 'delivery',
                          deliveryIds: [
                            {
                              courierId: '1',
                              courierName: 'Transportadora',
                              dockId: '1',
                              kitItemDetails: [],
                              quantity: 1,
                              warehouseId: '1_1',
                            },
                          ],
                          deliveryWindow: null,
                          id: 'Normal',
                          listPrice: 1500,
                          lockTTL: '10d',
                          name: 'Normal',
                          pickupDistance: 0,
                          pickupPointId: null,
                          pickupStoreInfo: {
                            additionalInfo: null,
                            address: null,
                            dockId: null,
                            friendlyName: null,
                            isPickupStore: false,
                          },
                          polygonName: null,
                          price: 1500,
                          shippingEstimate: '3bd',
                          shippingEstimateDate: null,
                          tax: 0,
                          transitTime: '3bd',
                        },
                      ],
                    },
                  ],
                  pickupPoints: [],
                  selectedAddresses: [
                    {
                      addressId: 'teste',
                      addressType: 'residential',
                      city: 'Rio de Janeiro',
                      complement: '15º andar',
                      country: 'BRA',
                      geoCoordinates: [-47.924747467041016, -15.832582473754883],
                      isDisposable: true,
                      neighborhood: 'Copacabana',
                      number: '123',
                      postalCode: '12345000',
                      receiverName: 'Clark Kent',
                      reference: null,
                      state: 'RJ',
                      street: 'Rua da minha casa',
                    },
                  ],
                },
                state: null,
                storeId: null,
                storePreferencesData: {
                  countryCode: 'BRA',
                  currencyCode: 'BRL',
                  currencyFormatInfo: {
                    currencyDecimalDigits: 2,
                    currencyDecimalSeparator: ',',
                    currencyGroupSeparator: '.',
                    currencyGroupSize: 3,
                    startsWithCurrencySymbol: true,
                  },
                  currencyLocale: 1046,
                  currencySymbol: 'R$',
                  saveUserData: false,
                  timeZone: 'E. South America Standard Time',
                },
                subscriptionData: null,
                taxData: null,
                timeZoneCreationDate: '2021-07-13T15:33:25.3029443',
                timeZoneLastChange: '2021-07-13T15:33:27.736557',
                totals: [
                  { id: 'Items', name: 'Total dos Itens', value: 32890 },
                  { id: 'Discounts', name: 'Total dos Descontos', value: 0 },
                  { id: 'Shipping', name: 'Total do Frete', value: 1500 },
                  { id: 'Tax', name: 'Total da Taxa', value: 0 },
                ],
                userType: '',
                value: 34390,
              },
            ],
            salesAssociateData: { salesAssociateId: 'seller123' },
            transactionData: {
              gatewayCallbackTemplatePath: '/checkout/gatewayCallback/1146512005522/{messageCode}',
              merchantTransactions: [
                {
                  id: 'MYSTORE',
                  merchantName: 'MYSTORE',
                  payments: [
                    {
                      accountId: null,
                      bin: null,
                      giftCardId: null,
                      giftCardProvider: null,
                      giftCardRedemptionCode: null,
                      paymentSystem: '6',
                      referenceValue: 34390,
                      tokenId: null,
                      value: 34390,
                    },
                  ],
                  transactionId: '296D6D245C17437E823EB77E403FC88D',
                },
              ],
              receiverUri: 'https://mystore.vtexpayments.com.br/split/1146512005522/payments',
            },
          },
        },
      },
    },
  },
})

export const getApiCheckoutPubPickupPointsRoute = createRoute({
  method: 'get',
  path: '/api/checkout/pub/pickup-points',
  tags: ['Fulfillment'],
  summary: 'List pickup points by location',
  description:
    'Retrieves information on pickup points close to a given location determined by geocoordinates or postal code.\n\r\n\rThe pickup points returned are not necessarily all active ones. Make sure to validate the information consumed by integrations.',
  operationId: 'ListPickupPpointsByLocation',
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
      geoCoordinates: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            z
              .preprocess(
                (val) =>
                  typeof val === 'string' &&
                  /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                  (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                    ? Number(val)
                    : val,
                z.number(),
              )
              .openapi({ example: -47.924747467041016 }),
          ),
        )
        .default([-47.924747467041016, -15.832582473754883])
        .exactOptional()
        .openapi({
          param: {
            description:
              'Geocoordinates (first longitude, then latitude) around which to search for pickup points. If you use this type of search, do not pass postal and country codes.',
            in: 'query',
            name: 'geoCoordinates',
            required: false,
            schema: {
              default: [-47.924747467041016, -15.832582473754883],
              items: { example: -47.924747467041016, type: 'number' },
              type: 'array',
            },
            style: 'form',
          },
        }),
      postalCode: z
        .string()
        .default('1234000')
        .exactOptional()
        .openapi({
          param: {
            description:
              'Postal code around which to search for pickup points. If you use this type of search, make sure to pass a `countryCode` and do not pass `geoCoordinates`.',
            in: 'query',
            name: 'postalCode',
            required: false,
            schema: { default: '1234000', type: 'string' },
            style: 'form',
          },
        }),
      countryCode: z
        .string()
        .default('BRA')
        .exactOptional()
        .openapi({
          param: {
            description:
              'Three letter country code refering to the `postalCode` field. Pass the country code only if you are searching pickup points by postal code.',
            in: 'query',
            name: 'countryCode',
            required: false,
            schema: { default: 'BRA', type: 'string' },
            style: 'form',
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK', content: {} } },
  security: [],
})

export const getApiCheckoutPubPostalCodeCountryCodePostalCodeRoute = createRoute({
  method: 'get',
  path: '/api/checkout/pub/postal-code/{countryCode}/{postalCode}',
  tags: ['Fulfillment'],
  summary: 'Get address by postal code',
  description:
    'Retrieves address information for a given postal code and country.\r\n\r\nThis request can be used to implement auto complete functionality when a customer needs to fill in an address.',
  operationId: 'GetAddressByPostalCode',
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
      countryCode: z
        .string()
        .default('BRA')
        .openapi({
          param: {
            description: 'Three letter country code refering to the `postalCode` field.',
            in: 'path',
            name: 'countryCode',
            required: true,
            schema: { default: 'BRA', type: 'string' },
            style: 'simple',
          },
        }),
      postalCode: z
        .string()
        .default('1234000')
        .openapi({
          param: {
            description: 'Postal code.',
            in: 'path',
            name: 'postalCode',
            required: true,
            schema: { default: '1234000', type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK', content: {} } },
  security: [],
})

export const getApiCheckoutPubProfilesRoute = createRoute({
  method: 'get',
  path: '/api/checkout/pub/profiles',
  tags: ['Cart attachments'],
  summary: 'Get client profile by email',
  description:
    "Retrieve a client's profile information by providing an email address.\n\r\n\rIf the response body fields are empty, the following situations may have occurred:\n\r\n\r1. There is no client registered with the email address provided in your store, or;\n\r2. Client profile is invalid or incomplete. For more information, see [SmartCheckout - Customer information automatic fill-in](https://help.vtex.com/en/tutorial/smartcheckout-customer-information-automatic-fill-in--2Nuu3xAFzdhIzJIldAdtan).\r\n\r\n>⚠️ The authentication of this endpoint can change depending on the customer context. If you are consulting information from a customer with a complete profile on the store, the response will return the customer's data masked. You can only access the customer data with an authenticated request.",
  operationId: 'GetClientProfileByEmail',
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
      email: z
        .string()
        .default('clark.kent@examplemail.com')
        .openapi({
          param: {
            description: "Client's email address to be searched.",
            in: 'query',
            name: 'email',
            required: true,
            schema: { default: 'clark.kent@examplemail.com', type: 'string' },
            style: 'form',
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
              availableAccounts: z
                .array(z.string())
                .exactOptional()
                .openapi({ description: 'Available accounts.' }),
              availableAddresses: z
                .array(
                  z
                    .object({
                      addressId: z.string().exactOptional().openapi({ description: 'Address ID.' }),
                      addressType: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'Address type.' }),
                      city: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'City of the address.' }),
                      complement: z
                        .string()
                        .nullable()
                        .exactOptional()
                        .openapi({ description: 'Complement to the address.' }),
                      country: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'Country of the address. ISO three-letter code.' }),
                      geoCoordinates: z
                        .array(z.number())
                        .exactOptional()
                        .openapi({
                          description:
                            'Array containing two floats with geocoordinates, first longitude, then latitude.',
                        }),
                      isDisposable: z
                        .boolean()
                        .exactOptional()
                        .openapi({ description: 'Indicates whether address is disposable.' }),
                      neighborhood: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'Neighborhood of the address.' }),
                      number: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'Number of the address.' }),
                      receiverName: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'Name of the receiver.' }),
                      reference: z
                        .string()
                        .nullable()
                        .exactOptional()
                        .openapi({
                          description: 'Reference that may help in the location of the address.',
                        }),
                      state: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'State of the address.' }),
                      street: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'Street of the address.' }),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional()
                .openapi({ description: 'Information on each available address.' }),
              isComplete: z
                .boolean()
                .exactOptional()
                .openapi({ description: 'Indicates whether customer profile is complete.' }),
              profileProvider: z
                .string()
                .exactOptional()
                .openapi({ description: 'Profile provider.' }),
              userProfile: z
                .object({
                  corporateDocument: z
                    .string()
                    .nullable()
                    .exactOptional()
                    .openapi({ description: 'Document. Used for corporate clients.' }),
                  corporateName: z
                    .string()
                    .nullable()
                    .exactOptional()
                    .openapi({ description: 'Name of the company. Used for corporate clients.' }),
                  corporatePhone: z
                    .string()
                    .nullable()
                    .exactOptional()
                    .openapi({ description: 'Telephone number. Used for corporate clients.' }),
                  customerClass: z
                    .string()
                    .nullable()
                    .exactOptional()
                    .openapi({ description: 'Customer class.' }),
                  document: z.string().exactOptional().openapi({ description: 'Document.' }),
                  documentType: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'Document type.' }),
                  email: z.string().exactOptional().openapi({ description: 'Email address.' }),
                  firstName: z.string().exactOptional().openapi({ description: 'First name.' }),
                  isCorporate: z
                    .boolean()
                    .default(false)
                    .exactOptional()
                    .openapi({ description: 'Indicates whether client is corporate.' }),
                  lastName: z.string().exactOptional().openapi({ description: 'Last name.' }),
                  phone: z.string().exactOptional().openapi({ description: 'Telephone number.' }),
                  profileCompleteOnLoading: z
                    .string()
                    .nullable()
                    .exactOptional()
                    .openapi({ description: 'Profile complete when loading.' }),
                  profileErrorOnLoading: z
                    .string()
                    .nullable()
                    .exactOptional()
                    .openapi({ description: 'Profile error when loading.' }),
                  stateInscription: z
                    .string()
                    .nullable()
                    .exactOptional()
                    .openapi({ description: 'State inscription. Used for corporate clients.' }),
                  tradeName: z
                    .string()
                    .nullable()
                    .exactOptional()
                    .openapi({ description: 'Trade name. Used for corporate clients.' }),
                })
                .exactOptional()
                .openapi({ description: 'Customer profile information.', required: [] }),
              userProfileId: z
                .string()
                .exactOptional()
                .openapi({ description: 'Unique ID associated with the customer profile.' }),
            })
            .openapi({ required: [] }),
          example: {
            availableAccounts: [],
            availableAddresses: [
              {
                addressId: '666c2e830bd9474ab6f6cc53fb6dd2d2',
                addressType: 'residential',
                city: 'Metropolis',
                complement: null,
                country: 'USA',
                geoCoordinates: [-47.924747467041016, -15.832582473754883],
                isDisposable: false,
                neighborhood: 'My neighborhood',
                number: '123',
                postalCode: '12345-000',
                receiverName: 'Clark Kent',
                reference: null,
                state: 'NY',
                street: 'My street',
              },
            ],
            isComplete: true,
            profileProvider: 'VTEX',
            userProfile: {
              corporateDocument: null,
              corporateName: null,
              corporatePhone: null,
              customerClass: null,
              document: '12345678900',
              documentType: 'cpf',
              email: 'clark.kent@example.com',
              firstName: 'Clark',
              isCorporate: false,
              lastName: 'Kent',
              phone: '+556199999999',
              profileCompleteOnLoading: null,
              profileErrorOnLoading: null,
              stateInscription: null,
              tradeName: null,
            },
            userProfileId: 'fb542e51-5488-4c34-8d17-ed8fcf597a94',
          },
        },
      },
    },
  },
  security: [],
})

export const getApiCheckoutPubRegionsRegionIdRoute = createRoute({
  method: 'get',
  path: '/api/checkout/pub/regions/{regionId}',
  tags: ['Region'],
  summary: 'Get sellers by region or address',
  description:
    'Retrieve a list of sellers that cater to a specific region or address, according to your set up of our [regionalization feature](https://help.vtex.com/en/tutorial/setting-up-price-and-availability-of-skus-by-region--12ne58BmvYsYuGsimmugoc#). Learn more about [Region v2](https://developers.vtex.com/vtex-developer-docs/changelog/region-v2).\n\r\n\rTo access the list of sellers, you must choose one of the following methods:\n\r\n\r1. Send the identification of the list of sellers (`regionId`) as a path parameter through the URL. Or;\n\r2. Send the `country` (3-digit ISO code) and at least one of the two values (`postal Code` or `geo Coordinates`) as query parameters through the URL. For this method, it is also allowed to send both values (`postalCode` or `geoCoordinates`) in the same request.',
  operationId: 'GetSellersByRegion',
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
      regionId: z
        .string()
        .openapi({
          param: {
            description: "ID of the region corresponding to the shopper's location.",
            in: 'path',
            name: 'regionId',
            required: true,
            schema: { example: 'v2.1BB18CE648B5111D0933734ED83EC783', type: 'string' },
            style: 'simple',
          },
          example: 'v2.1BB18CE648B5111D0933734ED83EC783',
        }),
    }),
    query: z.object({
      country: z
        .string()
        .default('BRA')
        .openapi({
          param: {
            description: 'Three letter country code refering to the `postalCode` field.',
            in: 'query',
            name: 'country',
            required: true,
            schema: { default: 'BRA', type: 'string' },
            style: 'form',
          },
        }),
      postalCode: z
        .string()
        .default('1234000')
        .exactOptional()
        .openapi({
          param: {
            description: "Postal code corresponding to the shopper's location.",
            in: 'query',
            name: 'postalCode',
            required: false,
            schema: { default: '1234000', type: 'string' },
            style: 'form',
          },
        }),
      geoCoordinates: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            z
              .preprocess(
                (val) =>
                  typeof val === 'string' &&
                  /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                  (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                    ? Number(val)
                    : val,
                z.number(),
              )
              .openapi({ example: -47.924747467041016 }),
          ),
        )
        .default([-47.924747467041016, -15.832582473754883])
        .exactOptional()
        .openapi({
          param: {
            description:
              "Geocoordinates (first longitude, semicolon, then latitude) corresponding to the shopper's location.",
            in: 'query',
            name: 'geoCoordinates',
            required: false,
            schema: {
              default: [-47.924747467041016, -15.832582473754883],
              items: { example: -47.924747467041016, type: 'number' },
              type: 'array',
            },
            style: 'form',
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
              id: z.string().exactOptional().openapi({ description: 'Region ID.' }),
              sellers: z
                .array(
                  z
                    .object({
                      id: z.string().exactOptional().openapi({ description: 'Seller ID.' }),
                      logo: z
                        .string()
                        .nullable()
                        .exactOptional()
                        .openapi({ description: 'Seller logo.' }),
                      name: z.string().exactOptional().openapi({ description: 'Seller name.' }),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional()
                .openapi({
                  description:
                    'Array with information on each seller retrieved for the given region.',
                }),
            })
            .openapi({ required: [] }),
          example: {
            id: 'v2.1BB18CE648B5111D0933734ED83EC783',
            sellers: [
              { id: 'abacaba', logo: null, name: 'Abacaba Store' },
              { id: 'abacaba2', logo: null, name: 'Abacaba VTEX Outlet' },
              { id: 'abacaba3', logo: null, name: 'Abacaba VTEX Mall' },
            ],
          },
        },
      },
    },
  },
  security: [],
})

export const getApiCheckoutPvtConfigurationOrderFormRoute = createRoute({
  method: 'get',
  path: '/api/checkout/pvt/configuration/orderForm',
  tags: ['Configuration'],
  summary: 'Get orderForm configuration',
  description:
    'Retrieves the settings that are currently applied to every orderForm in the account.\n\r\n\rThese settings are defined by the request [Update orderForm configuration](https://developers.vtex.com/reference/configuration#updateorderformconfiguration).\n\r\n\rAlways use this request to retrieve the current configuration before performing an update. By doing so you ensure that you are modifying only the properties you want.',
  operationId: 'GetorderFormconfiguration',
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
      description: '',
      content: {
        'application/json': {
          schema: z.any(),
          example: {
            allowManualPrice: true,
            allowMultipleDeliveries: false,
            apps: [{ fields: ['name', 'age'], id: 'abcd', major: 1 }],
            decimalDigitsPrecision: 2,
            maskFirstPurchaseData: null,
            maxNumberOfWhiteLabelSellers: null,
            minimumQuantityAccumulatedForItems: 1,
            minimumValueAccumulated: null,
            paymentConfiguration: {
              allowInstallmentsMerge: null,
              blockPaymentSession: null,
              requiresAuthenticationForPreAuthorizedPaymentOption: false,
            },
            recaptchaValidation: 'vtexCriteria',
            taxConfiguration: null,
          },
        },
      },
      headers: z.object({}),
    },
  },
})

export const postApiCheckoutPvtConfigurationOrderFormRoute = createRoute({
  method: 'post',
  path: '/api/checkout/pvt/configuration/orderForm',
  tags: ['Configuration'],
  summary: 'Update orderForm configuration',
  description:
    'Determines settings that will apply to every orderForm in the account.\n\r\n\rFor example, if you create an app using this request, every orderForm of this account will have the custom fields created though it.\n\r\n\r**Important**: always retrieve the current configuration before performing an update to ensure that you are modifying only the properties you want. Otherwise, old values can be overwritten. To retrieve the current configuration, use the request [Get orderForm configuration](https://developers.vtex.com/reference#getorderformconfiguration).',
  operationId: 'UpdateorderFormconfiguration',
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
          schema: UpdateorderFormconfigurationRequestSchema,
          example: {
            allowManualPrice: null,
            allowMultipleDeliveries: null,
            apps: null,
            decimalDigitsPrecision: 2,
            minimumQuantityAccumulatedForItems: 1,
            minimumValueAccumulated: null,
            paymentConfiguration: { requiresAuthenticationForPreAuthorizedPaymentOption: false },
            taxConfiguration: null,
          },
        },
      },
      required: true,
    },
  },
  responses: { 204: { description: '', headers: z.object({}) } },
})

export const getApiCheckoutPvtConfigurationWindowToChangeSellerRoute = createRoute({
  method: 'get',
  path: '/api/checkout/pvt/configuration/window-to-change-seller',
  tags: ['Configuration'],
  summary: 'Get window to change seller',
  description:
    'Retrieves a marketplace’s window to change seller, that is, the period when it is possible to choose another seller to fulfill a given order after the original seller has canceled it.\n\r\n\rThe default period for this window is of 2 days, but it can be configured by the request Update window to change seller.',
  operationId: 'GetWindowToChangeSeller',
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
  responses: { 200: { description: 'OK', content: {} } },
})

export const postApiCheckoutPvtConfigurationWindowToChangeSellerRoute = createRoute({
  method: 'post',
  path: '/api/checkout/pvt/configuration/window-to-change-seller',
  tags: ['Configuration'],
  summary: 'Update window to change seller',
  description:
    'Updates a marketplace’s window to change seller, that is, the period when it is possible to choose another seller to fulfill a given order after the original seller has canceled it.\n\r\n\rIt is possible to check the current window using the request Get window to change seller.',
  operationId: 'UpdateWindowToChangeSeller',
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
      content: { 'application/json': { schema: WaitingTimeSchema, example: { waitingTime: 4 } } },
      required: true,
    },
  },
  responses: { 201: { description: 'Created', headers: z.object({}) } },
})

export const getCheckoutChangeToAnonymousUserOrderFormIdRoute = createRoute({
  method: 'get',
  path: '/checkout/changeToAnonymousUser/{orderFormId}',
  tags: ['Shopping cart'],
  summary: 'Remove all personal data',
  description:
    'This call removes all user information, making a cart anonymous while leaving the items.\r\n\r\nThe [orderForm](https://developers.vtex.com/docs/guides/orderform-fields) is the data structure that represents a shopping cart and contains all information about it. Hence, the `orderFormId` is the identification code of a given cart.\r\n\r\nThis call works by creating a new orderForm, setting a new cookie, and returning a redirect 302 to the cart URL (`/checkout/#/orderform`).',
  operationId: 'Removeallpersonaldata',
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
      orderFormId: z
        .string()
        .default('ede846222cd44046ba6c638442c3505a')
        .openapi({
          param: {
            description:
              "ID of the orderForm corresponding to the cart whose user's personal data you want to remove.",
            in: 'path',
            name: 'orderFormId',
            required: true,
            schema: { default: 'ede846222cd44046ba6c638442c3505a', type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'text/plain': { schema: z.object({}), example: {} } } },
  },
  security: [],
})
