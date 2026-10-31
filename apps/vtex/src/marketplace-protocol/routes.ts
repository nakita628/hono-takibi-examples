import { createRoute, z } from '@hono/zod-openapi'

const ApproveorderSchema = z
  .object({
    accountName: z
      .string()
      .nullable()
      .openapi({
        description: 'String that indicates which account made the request.',
        example: 'accountName',
      }),
    code: z
      .string()
      .openapi({
        description:
          'String with a internal Channel Order API code that classifies the response. The possible values returned in this field are described in the Response Codes section of this API Reference.',
        example: 'SOI001',
      }),
    errors: z
      .array(
        z
          .object({
            code: z
              .string()
              .openapi({
                description:
                  'String containing the code returned by the source. Example value: If the source is `Fulfillment`, the code can be FMT005 to indicate that the item(s) in the order are not available.',
                example: 'FMT005',
                title: 'code',
              }),
            description: z
              .string()
              .openapi({
                description:
                  'String containing the error message/description returned by the source.',
                example: 'Message describing the error.',
                title: 'description',
              }),
            source: z
              .string()
              .openapi({
                description:
                  'Includes the following fields pointing out the context of the error: \n\n`Fulfillment` \n\n`Checkout` \n\n`Order Integration`',
                example: 'Fulfillment',
                title: 'Checkout',
              }),
          })
          .openapi({
            example: {
              code: 'FMT005',
              description: 'Message describing the error.',
              source: 'Fulfillment',
            },
            required: ['source', 'code', 'description'],
            title: 'errors',
          }),
      )
      .nullable()
      .openapi({ description: 'List with errors related to the response, if there is any.' }),
    fields: z
      .object({
        fields: z
          .object({
            franchiseOrderId: z
              .string()
              .exactOptional()
              .openapi({
                description:
                  "String with the order's ID inside the franchise seller account in VTEX. Only returned if the order was integrated using the [Multilevel Omnichannel Inventory](https://help.vtex.com/en/tutorial/multilevel-omnichannel-inventory--7M1xyCZWUyCB7PcjNtOyw4) feature, that is: \n\n- `allowFranchises` field set to `true` when integrating the order \r\n- SLA chosen for the order is from a franchise account",
                example: '432874921387409182347',
                title: 'The franchiseOrderId Schema',
              }),
            mainOrderId: z
              .string()
              .openapi({
                description: 'String with the order’s ID inside the main seller account in VTEX.',
                example: 'MKP-123456789',
                title: 'The mainOrderId Schema',
              }),
          })
          .exactOptional()
          .openapi({
            example: { franchiseOrderId: '432874921387409182347', mainOrderId: 'MKP-123456789' },
            required: ['mainOrderId'],
            title: 'fields',
          }),
      })
      .nullable()
      .openapi({
        description:
          "Structure with important fields for the connector. This structure is only returned if the response is successful. Includes the following fields: \n\n`mainOrderId`: String with the order's ID inside the main seller account in VTEX. \n\n`franchiseOrderId`: - String with the order's ID inside the franchise seller account in VTEX. Only returned if the order was integrated using the [Multilevel Omnichannel Inventory](https://help.vtex.com/en/tutorial/multilevel-omnichannel-inventory--7M1xyCZWUyCB7PcjNtOyw4) feature, that is: \n\n- `allowFranchises` field set to `true` when integrating the order \n\n- `SLA` chosen for the order is from a franchise account.",
        example: { franchiseOrderId: '38475934875' },
        required: [],
      }),
    flow: z
      .string()
      .openapi({
        description:
          'String containing the name of the flow responsible for the response. This field can contain the following values: \n\n`PlaceOrder`: when integrating new orders. \n\n`ApproveOrder`: when approving existing orders. \n\n`Unknown`: when we’re not able to identify the flow.',
        example: 'ApproveOrder',
      }),
    marketplaceOrderId: z
      .string()
      .nullable()
      .openapi({
        description: "String that indicates the order's ID in the marketplace.",
        example: '7e62fcd3-827b-400d-be8a-f050a79c4976',
      }),
    message: z
      .string()
      .openapi({
        description: 'String with a message explaining the code returned in the response.',
        example: 'The order was integrated into VTEX successfully',
      }),
    operationId: z
      .string()
      .nullable()
      .openapi({
        description:
          'String GUID that identifies the operation in our service. This field can be used to help us analyze unexpected errors or behaviors.',
        example: '1234567',
      }),
    success: z
      .boolean()
      .openapi({
        description: 'Boolean that indicates if the response is successful or not.',
        example: true,
      }),
  })
  .openapi({
    example: {
      accountName: null,
      code: 'SOI003',
      errors: null,
      fields: null,
      flow: 'ApproveOrder',
      marketplaceOrderId: '7e62fcd3-827b-400d-be8a-f050a79c4976',
      message: 'Order successfully enqueued',
      operationId: null,
      success: true,
    },
    required: [
      'marketplaceOrderId',
      'accountName',
      'code',
      'flow',
      'success',
      'operationId',
      'errors',
      'fields',
      'message',
    ],
    title: 'Approveorder',
  })
  .openapi('Approveorder')

const ClientProfileDataSchema = z
  .object({
    corporateDocument: z
      .string()
      .nullable()
      .openapi({
        description: 'String with the company’s document number, in case of corporate orders.',
        example: '99999999999',
        title: 'corporateDocument',
      }),
    corporateName: z
      .string()
      .nullable()
      .openapi({
        description: 'String with the company’s name, in case of corporate orders.',
        example: 'The Witcher Inc.',
        title: 'corporateName',
      }),
    corporatePhone: z
      .string()
      .nullable()
      .openapi({
        description: 'String with the company’s phone number, in case of corporate orders.',
        example: '99999999999',
        title: 'corporatePhone',
      }),
    document: z
      .string()
      .openapi({
        description: 'String with the customer’s document number.',
        example: '99999999999',
        title: 'The document schema',
      }),
    email: z
      .string()
      .openapi({
        description: "String with the customer's email.",
        example: 'cirilla@cintra.com',
        title: 'email',
      }),
    firstName: z
      .string()
      .openapi({
        description: "String with the customer's first name.",
        example: 'Cirilla',
        title: 'firstName',
      }),
    lastName: z
      .string()
      .openapi({
        description: 'String with the customer’s surname.',
        example: 'Cintra',
        title: 'lastName',
      }),
    phone: z
      .string()
      .openapi({
        description: 'String with the customer’s phone number.',
        example: '99999999999',
        title: 'phone',
      }),
    stateInscription: z
      .string()
      .nullable()
      .openapi({
        description: 'String with the company’s state registration, in case of corporate orders.',
        example: '99999999999',
        title: 'stateInscription',
      }),
    tradeName: z
      .string()
      .nullable()
      .openapi({
        description: 'String with the company’s fantasy name, in case of corporate orders.',
        example: 'The Witcher',
        title: 'tradeName',
      }),
  })
  .openapi({
    description:
      "Structure with the customer's information. An order will be identified as corporate if any of the corporate fields are filled out (`corporateDocument`, `corporatePhone`, `corporateName` or `tradeName`).",
    required: [
      'email',
      'firstName',
      'lastName',
      'phone',
      'document',
      'corporateDocument',
      'corporatePhone',
      'corporateName',
      'tradeName',
      'stateInscription',
    ],
    title: 'ClientProfileData',
  })
  .openapi('ClientProfileData')

const FieldsSchema = z
  .object({
    marketplacePaymentMethod: z
      .string()
      .openapi({
        description: "String with field's key and value.",
        example: 'credit card',
        title: 'marketplacePaymentMethod',
      }),
  })
  .openapi({
    description:
      'String dictionary with the names of the fields and their respective values that must be inserted into the order.',
    example: { marketplacePaymentMethod: 'credit card' },
    required: ['marketplacePaymentMethod'],
    title: 'Fields',
  })
  .openapi('Fields')

const CustomAppSchema = z
  .object({
    fields: FieldsSchema,
    id: z.string().openapi({ description: "App's ID.", example: 'ID', title: 'id' }),
    major: z
      .int()
      .openapi({
        description: 'Integer with the major version of the app. Optional, defaulting to one.',
        example: 1,
        title: 'major',
      }),
  })
  .openapi({
    example: {
      fields: { marketplacePaymentMethod: 'credit card' },
      id: 'marketplace-integration',
      major: 1,
    },
    required: ['id', 'major', 'fields'],
    title: 'CustomApp',
  })
  .openapi('CustomApp')

const CustomDataSchema = z
  .object({ customApps: z.array(CustomAppSchema).openapi({ description: '' }) })
  .openapi({
    description:
      "Structure with the order's customizable fields. To insert custom fields in the order, you must first go through the process of [Creating an app](https://developers.vtex.com/vtex-rest-api/docs/external-marketplace-integration-app-template), and then adding the app, as well as the desired fields, within the seller's `orderForm`. More information on [Creating customizable fields in the cart with Checkout API](https://developers.vtex.com/vtex-rest-api/docs/customizable-fields-with-checkout-api).",
    example: {
      customApps: [
        {
          fields: { marketplacePaymentMethod: 'credit card' },
          id: 'marketplace-integration',
          major: 1,
        },
      ],
    },
    required: ['customApps'],
    title: 'CustomData',
  })
  .openapi('CustomData')

const DeliveryIdsSchema = z
  .object({
    warehouseId: z
      .string()
      .openapi({
        description:
          'String with the ID of the warehouse used for marketplace fulfillment. Required when `isFob` = `true` and `isMarketplaceFulfillment` = `true`.',
        example: 'AR1',
      }),
  })
  .openapi({
    description:
      'List of delivery IDs, used for orders where the marketplace is responsible for the fulfillment of the order, including keeping inventory at a warehouse as well as the delivery.',
    example: { warehouseId: 'AR1' },
    required: ['warehouseId'],
    title: 'DeliveryIds',
  })
  .openapi('DeliveryIds')

const DeliverybyfranchisesellerSchema = z
  .object({
    accountName: z
      .string()
      .openapi({
        description: 'String that indicates which account made the request.',
        example: 'accountName',
      }),
    code: z
      .string()
      .openapi({
        description:
          'String with a internal Channel Order API code that classifies the response. The possible values returned in this field are described in the [Response Codes]() section.',
        example: 'SOI001',
      }),
    errors: z
      .array(
        z
          .object({
            code: z
              .string()
              .openapi({
                description:
                  'String containing the code returned by the source. Example value: If the source is `Fulfillment`, the code can be FMT005 to indicate that the item(s) in the order are not available.',
                example: 'FMT005',
                title: 'code',
              }),
            description: z
              .string()
              .openapi({
                description:
                  'String containing the error message/description returned by the source.',
                example: 'Message describing the error.',
                title: 'description',
              }),
            source: z
              .string()
              .openapi({
                description:
                  'Includes the following fields pointing out the context of the error: \n\n`Fulfillment` \n\n`Checkout` \n\n`Order Integration`',
                example: 'Fulfillment',
                title: 'Checkout',
              }),
          })
          .openapi({
            example: {
              code: 'FMT005',
              description: 'Message describing the error.',
              source: 'Fulfillment',
            },
            required: ['source', 'code', 'description'],
            title: 'errors',
          }),
      )
      .nullable()
      .openapi({ description: "List with errors related to the response, if there's any." }),
    fields: z
      .object({
        fields: z
          .object({
            franchiseOrderId: z
              .string()
              .exactOptional()
              .openapi({
                description:
                  "String with the order's ID inside the franchise seller account in VTEX. Only returned if the order was integrated using the [Multilevel Omnichannel Inventory](https://help.vtex.com/en/tutorial/multilevel-omnichannel-inventory--7M1xyCZWUyCB7PcjNtOyw4) feature, that is: \n\n- `allowFranchises` field set to `true` when integrating the order \r\n- SLA chosen for the order is from a franchise account",
                example: '432874921387409182347',
                title: 'franchiseOrderId',
              }),
            mainOrderId: z
              .string()
              .openapi({
                description: 'String with the order’s ID inside the main seller account in VTEX.',
                example: 'MKP-123456789',
                title: 'mainOrderId',
              }),
          })
          .exactOptional()
          .openapi({
            example: { franchiseOrderId: '432874921387409182347', mainOrderId: 'MKP-123456789' },
            required: ['mainOrderId'],
            title: 'fields',
          }),
      })
      .nullable()
      .openapi({
        description:
          "Structure with important fields for the connector. This structure is only returned if the response is successful. Includes the following fields: \n\n`mainOrderId`: String with the order's ID inside the main seller account in VTEX. \n\n`franchiseOrderId`: - String with the order's ID inside the franchise seller account in VTEX. Only returned if the order was integrated using the [Multilevel Omnichannel Inventory](https://help.vtex.com/en/tutorial/multilevel-omnichannel-inventory--7M1xyCZWUyCB7PcjNtOyw4) feature, that is: \n\n- `allowFranchises` field set to `true` when integrating the order \n\n- `SLA` chosen for the order is from a franchise account.",
        example: { franchiseOrderId: '38475934875' },
        required: [],
      }),
    flow: z
      .string()
      .openapi({
        description:
          'String containing the name of the flow responsible for the response. This field can contain the following values: \n\n`PlaceOrder`: when integrating new orders \n\n`ApproveOrder`: when approving existing orders \n\n`Unknown`: when we’re not able to identify the flow',
        example: 'ApproveOrder',
      }),
    marketplaceOrderId: z
      .string()
      .nullable()
      .openapi({
        description: "String that indicates the order's ID in the marketplace.",
        example: '7e62fcd3-827b-400d-be8a-f050a79c4976',
      }),
    message: z
      .string()
      .nullable()
      .openapi({
        description: 'String with a message explaining the code returned in the response. ',
        example: 'The order was integrated into VTEX successfully',
      }),
    operationId: z
      .string()
      .nullable()
      .openapi({
        description:
          'String GUID that identifies the operation in our service. This field can be used to help us analyze unexpected errors or behaviors.',
        example: '1234567',
      }),
    success: z
      .boolean()
      .openapi({
        description: 'Boolean that indicates if the response is successful or not.',
        example: true,
      }),
  })
  .openapi({
    example: {
      accountName: 'grocery1',
      code: 'SOI003',
      errors: null,
      fields: null,
      flow: 'PlaceOrder',
      marketplaceOrderId: null,
      message: 'Order successfully enqueued',
      operationId: null,
      success: true,
    },
    required: [
      'marketplaceOrderId',
      'accountName',
      'code',
      'flow',
      'success',
      'operationId',
      'errors',
      'fields',
      'message',
    ],
    title: 'Deliverybyfranchiseseller',
  })
  .openapi('Deliverybyfranchiseseller')

const DeliverybysellerSchema = z
  .object({
    accountName: z
      .string()
      .openapi({
        description: 'String that indicates which account made the request.',
        example: 'accountName',
      }),
    code: z
      .string()
      .openapi({
        description:
          'String with a internal Channel Order API code that classifies the response. The possible values returned in this field are described in the [Response Codes]() section.',
        example: 'SOI001',
      }),
    errors: z
      .array(
        z
          .object({
            code: z
              .string()
              .openapi({
                description:
                  'String containing the code returned by the source. Example value: If the source is `Fulfillment`, the code can be FMT005 to indicate that the item(s) in the order are not available.',
                example: 'FMT005',
                title: 'code',
              }),
            description: z
              .string()
              .openapi({
                description:
                  'String containing the error message/description returned by the source.',
                example: 'Message describing the error.',
                title: 'description',
              }),
            source: z
              .string()
              .openapi({
                description:
                  'Includes the following fields pointing out the context of the error: \n\n`Fulfillment` \n\n`Checkout` \n\n`Order Integration`',
                example: 'Fulfillment',
                title: 'Checkout',
              }),
          })
          .openapi({
            example: {
              code: 'FMT005',
              description: 'Message describing the error.',
              source: 'Fulfillment',
            },
            required: ['source', 'code', 'description'],
            title: 'errors',
          }),
      )
      .nullable()
      .openapi({ description: "List with errors related to the response, if there's any." }),
    fields: z
      .object({
        fields: z
          .object({
            franchiseOrderId: z
              .string()
              .exactOptional()
              .openapi({
                description:
                  "String with the order's ID inside the franchise seller account in VTEX. Only returned if the order was integrated using the [Multilevel Omnichannel Inventory](https://help.vtex.com/en/tutorial/multilevel-omnichannel-inventory--7M1xyCZWUyCB7PcjNtOyw4) feature, that is: \n\n- `allowFranchises` field set to `true` when integrating the order \r\n- SLA chosen for the order is from a franchise account",
                example: '432874921387409182347',
                title: 'franchiseOrderId',
              }),
            mainOrderId: z
              .string()
              .openapi({
                description: 'String with the order’s ID inside the main seller account in VTEX.',
                example: 'MKP-123456789',
                title: 'mainOrderId',
              }),
          })
          .exactOptional()
          .openapi({
            example: { franchiseOrderId: '432874921387409182347', mainOrderId: 'MKP-123456789' },
            required: ['mainOrderId'],
            title: 'fields',
          }),
      })
      .nullable()
      .openapi({
        description:
          "Structure with important fields for the connector. This structure is only returned if the response is successful. Includes the following fields: \n\n`mainOrderId`: String with the order's ID inside the main seller account in VTEX. \n\n`franchiseOrderId`: - String with the order's ID inside the franchise seller account in VTEX. Only returned if the order was integrated using the [Multilevel Omnichannel Inventory](https://help.vtex.com/en/tutorial/multilevel-omnichannel-inventory--7M1xyCZWUyCB7PcjNtOyw4) feature, that is: \n\n- `allowFranchises` field set to `true` when integrating the order \n\n- `SLA` chosen for the order is from a franchise account.",
        example: { franchiseOrderId: '38475934875' },
        required: [],
      }),
    flow: z
      .string()
      .openapi({
        description:
          'String containing the name of the flow responsible for the response. This field can contain the following values: \n\n`PlaceOrder`: when integrating new orders \n\n`ApproveOrder`: when approving existing orders \n\n`Unknown`: when we’re not able to identify the flow',
        example: 'ApproveOrder',
      }),
    marketplaceOrderId: z
      .string()
      .nullable()
      .openapi({
        description: "String that indicates the order's ID in the marketplace.",
        example: '7e62fcd3-827b-400d-be8a-f050a79c4976',
      }),
    message: z
      .string()
      .openapi({
        description: 'String with a message explaining the code returned in the response. ',
        example: 'The order was integrated into VTEX successfully',
      }),
    operationId: z
      .string()
      .nullable()
      .openapi({
        description:
          'String GUID that identifies the operation in our service. This field can be used to help us analyze unexpected errors or behaviors.',
        example: '1234567',
      }),
    success: z
      .boolean()
      .openapi({
        description: 'Boolean that indicates if the response is successful or not.',
        example: true,
      }),
  })
  .openapi({
    example: {
      accountName: 'grocery1',
      code: 'SOI003',
      errors: null,
      fields: null,
      flow: 'PlaceOrder',
      marketplaceOrderId: null,
      message: 'Order successfully enqueued',
      operationId: null,
      success: true,
    },
    required: [
      'marketplaceOrderId',
      'accountName',
      'code',
      'flow',
      'success',
      'operationId',
      'errors',
      'fields',
      'message',
    ],
    title: 'Deliverybyseller',
  })
  .openapi('Deliverybyseller')

const UserPaymentInfoSchema = z
  .object({
    paymentMethods: z
      .array(z.string())
      .openapi({
        description:
          'List of strings with the payment methods used in the order. Required only if invoiceData is defined. The format and some possible values of payment methods accepted in this list can be found in the call [Fetching marketplace information with the Orders API](https://developers.vtex.com/vtex-rest-api/docs/get-marketplace-data-orders-api).',
        example: ['creditCardPaymentGroup'],
      }),
  })
  .openapi({
    description:
      'Structure with the order’s payment data. Required only if `invoiceData` is defined.',
    example: { paymentMethods: ['creditCardPaymentGroup'] },
    required: ['paymentMethods'],
    title: 'UserPaymentInfo',
  })
  .openapi('UserPaymentInfo')

const InvoiceDataSchema = z
  .object({ userPaymentInfo: UserPaymentInfoSchema })
  .openapi({
    description: "Object with the order's billing data.",
    example: { userPaymentInfo: { paymentMethods: ['creditCardPaymentGroup'] } },
    required: ['userPaymentInfo'],
    title: 'InvoiceData',
  })
  .openapi('InvoiceData')

const ItemSchema = z
  .object({
    id: z
      .string()
      .openapi({
        description: 'String with the SKU ID in VTEX’s catalog.',
        example: '1',
        title: 'id',
      }),
    price: z
      .int()
      .openapi({
        description:
          'Integer with the SKU’s unit price. If the value is `USD110.50`, convert it to the format → `11050`.',
        example: 11050,
        title: 'price',
      }),
    quantity: z
      .int()
      .openapi({
        description:
          'Integer with the quantity of the SKU present in the order. The value should be greater than zero.',
        example: 10,
        title: 'quantity',
      }),
  })
  .openapi({
    example: { id: '1', price: 975, quantity: 1 },
    required: ['id', 'price', 'quantity'],
    title: 'Item',
  })
  .openapi('Item')

const LogisticsInfoSchema = z
  .object({
    deliveryIds: DeliveryIdsSchema,
    lockTTL: z
      .string()
      .openapi({
        description:
          "String with the inventory reservation period in VTEX's logistics system. To fill in this field insert the number of days, followed by the letter for the chosen unit. \n\n- Days: `d` \n\n- Business days: `bd`. \n\nExample formats: `12d`, `5d`.",
        example: '5d',
        title: 'lockTTL',
      }),
    price: z
      .int()
      .openapi({
        description:
          'Integer indicating the shipping price for this SKU. If the value is `USD20.50`, convert it to the format → `2050`.',
        example: 2050,
        title: 'price',
      }),
    selectedDeliveryChannel: z
      .string()
      .openapi({
        description:
          'String with the selected delivery channel. This field supports the following values:  \n\n- `delivery`,  \n\n- `pickup-in-point`.',
        example: 'delivery',
        title: 'selectedDeliveryChannel',
      }),
    selectedSla: z
      .string()
      .openapi({
        description: 'String with the selected delivery SLA.',
        example: 'T-G1-2-Express',
        title: 'selectedSla',
      }),
    shippingEstimate: z
      .string()
      .openapi({
        description:
          "String with the order's estimated delivery time. To fill in this field, insert a number,  followed by the letter for the chosen unit. \n\n- Days: `d` \n\n- Business days: `bd`. \n\n- Hours: `h` \n\n- Minutes: `m`. \n\nExample formats: `12d`, `5bd`, `3h`, `50m`.",
        example: '7d',
        title: 'shippingEstimate',
      }),
  })
  .openapi({
    description:
      'List that references the SLAs responsible for delivering each item in the order.  \n\nThis list must contain the same number of items as the `items` list, previously defined. For example: if the order contains 3 SKUs, you must describe 3 SLAs in this list, one for each SKU (even in cases where the same SLA will deliver all of them).  \n\nThe order of the SLAs in this list must also follow the same order as in the `items` list. For example: if the SLA named **Correios Express** will be responsible for delivering the SKU with ID equal to **1015**, which is found at index 0 of the `items` list, it must be in index 0 of the `logisticsInfo` list as well.',
    example: {
      deliveryIds: { warehouseId: 'AR1' },
      lockTTL: '1d',
      price: 2050,
      selectedDeliveryChannel: 'delivery',
      selectedSla: 'Express',
      shippingEstimate: '2d',
    },
    required: [
      'price',
      'selectedDeliveryChannel',
      'selectedSla',
      'lockTTL',
      'shippingEstimate',
      'deliveryIds',
    ],
    title: 'LogisticsInfo',
  })
  .openapi('LogisticsInfo')

const GeoCoordinatesSchema = z
  .object({
    latitude: z
      .string()
      .openapi({
        description:
          'Double value with the latitude coordinates of the address. Required only if the geoCoordinates field is defined. \n\nExample format: `-25.4158764`.',
        example: '-25.4158764',
        title: 'latitude',
      }),
    longitude: z
      .string()
      .openapi({
        description:
          'Double value with the longitude coordinates of the address. Required only if the geoCoordinates field is defined. Example format: `-49.342759`.',
        example: '-49.342759',
        title: 'longitude',
      }),
  })
  .openapi({
    description:
      'Structure with the address geocoordinates. Optional for `delivery` orders, required for `pickup-in-point` orders.',
    required: ['latitude', 'longitude'],
    title: 'GeoCoordinates',
  })
  .openapi('GeoCoordinates')

const SelectedAddressSchema = z
  .object({
    addressId: z
      .string()
      .openapi({
        description:
          'String with the address identifier. Optional for `delivery` type orders, and required for `pickup-in-point` orders.',
        example: '1',
        title: 'addressId',
      }),
    addressType: z
      .string()
      .openapi({
        description:
          'String with the address type. The field supports the values: `residential`, `commercial`, `pickup`.',
        example: 'commercial',
        title: 'addressType',
      }),
    city: z
      .string()
      .exactOptional()
      .openapi({ description: 'String with the city’s name.', example: 'City', title: 'city' }),
    complement: z
      .string()
      .exactOptional()
      .openapi({
        description: "String with the address' complement, like building name, or extra number.",
        example: 'Complement to address',
        title: 'complement',
      }),
    country: z
      .string()
      .openapi({
        description: "String with the state's name, filled in with three letter code.",
        example: 'BRA',
        title: 'country',
      }),
    geoCoordinates: GeoCoordinatesSchema.exactOptional(),
    neighborhood: z
      .string()
      .exactOptional()
      .openapi({
        description: "String with the neighborhood's name.",
        example: "Neighborhood's name",
        title: 'The neighborhood schema',
      }),
    number: z
      .string()
      .exactOptional()
      .openapi({
        description: "String with the street's number.",
        example: '1986',
        title: 'The number',
      }),
    postalCode: z
      .string()
      .openapi({
        description: "String with the address' postal code.",
        example: '81020-235',
        title: 'postalCode',
      }),
    receiverName: z
      .string()
      .openapi({
        description: 'String with the name of the person responsible for receiving the order.',
        example: 'Yennefer of Vengerberg',
        title: 'receiverName',
      }),
    state: z
      .string()
      .exactOptional()
      .openapi({
        description: "String with the state's name, filled in with two letter code.",
        example: 'RJ',
        title: 'state',
      }),
    street: z
      .string()
      .exactOptional()
      .openapi({
        description: "String with the street's name.",
        example: 'The Witcher Avenue',
        title: 'street',
      }),
  })
  .openapi({
    description:
      'List with the delivery addresses selected for the order. We currently only support a single delivery address.',
    required: ['addressType', 'addressId', 'receiverName', 'postalCode', 'country'],
    title: 'SelectedAddress',
  })
  .openapi('SelectedAddress')

const ShippingDataSchema = z
  .object({
    isFob: z
      .boolean()
      .openapi({
        description:
          "Boolean that indicates whether the order's delivery is the marketplace responsibility. Optional, defaulting to false.",
        example: false,
        title: 'isFob',
      }),
    isMarketplaceFulfillment: z
      .boolean()
      .openapi({
        description:
          "Boolean that indicates whether the order's inventory in warehouse is the marketplace's responsibility. Optional, defaulting to false.",
        example: false,
        title: 'isMarketplaceFulfillment',
      }),
    logisticsInfo: z
      .array(LogisticsInfoSchema)
      .openapi({
        description:
          'List that references the SLAs responsible for delivering each item in the order.  \n\nThis list must contain the same number of items as the `items` list, previously defined. For example: if the order contains 3 SKUs, you must describe 3 SLAs in this list, one for each SKU (even in cases where the same SLA will deliver all of them).  \n\nThe order of the SLAs in this list must also follow the same order as in the `items` list. For example: if the SLA named **Correios Express** will be responsible for delivering the SKU with ID equal to **1015**, which is found at index 0 of the `items` list, it must be in index 0 of the `logisticsInfo` list as well.',
      }),
    selectedAddresses: z.array(SelectedAddressSchema).openapi({ description: '' }),
  })
  .openapi({
    required: ['logisticsInfo', 'selectedAddresses', 'isFob', 'isMarketplaceFulfillment'],
    title: 'ShippingData',
  })
  .openapi('ShippingData')

const EnqueueNewOrderRequestSchema = z
  .object({
    allowFranchises: z
      .boolean()
      .openapi({
        description:
          'Boolean indicating whether franchise accounts linked to the main seller should be considered. That is, if the order delivery pickup/SLA can belong to a [franchise account](https://help.vtex.com/en/tutorial/what-is-a-franchise-account--kWQC6RkFSCUFGgY5gSjdl), for example. This field is optional and defaults to `false`.',
        example: false,
        title: 'allowFranchises',
      }),
    clientProfileData: ClientProfileDataSchema,
    connectorEndpoint: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "String with the connector's base endpoint that will receive notifications about the orders processing results, as well as status updates from VTEX OMS. This field accepts query strings. You can use the models below:  \n\n- `https://{{externalconnector}}.com`  \n\n- `https://{{externalconnector.com}}/api/vtex` if you additionaly want to send a relative URL with the endpoint. \n\nThis field is optional if the connector uses the [App Template](https://developers.vtex.com/vtex-rest-api/docs/external-marketplace-integration-app-template) and authenticates on our request via `VtexIdclientAutCookie`.  \n\nIt is required if the connector is native or does not use the App Template.",
        example: 'https://{{externalconnector.com}}/api/vtex',
        title: 'connectorEndpoint',
      }),
    connectorName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'String with the identifier code of the connector responsible for the order.  \n\nThis field is optional if the connector uses the [App Template](https://developers.vtex.com/vtex-rest-api/docs/external-marketplace-integration-app-template) and authenticates on our request via `VtexIdclientAutCookie`.  \n\nIt is required if the connector is native or does not use the App Template.',
        example: 'connectorName',
        title: 'connectorName',
      }),
    customData: CustomDataSchema.exactOptional(),
    invoiceData: InvoiceDataSchema,
    items: z.array(ItemSchema),
    marketplaceOrderId: z
      .string()
      .openapi({
        description: "String that indicates the order's ID in the marketplace.",
        example: '7e62fcd3-827b-400d-be8a-f050a79c4976',
        title: 'marketplaceOrderId',
      }),
    marketplaceOrderStatus: z
      .string()
      .openapi({
        description:
          'Required field including a string with the order’s status in the marketplace. If you send an order with the status APPROVED to integrate, our service will automatically try to advance it’s status in VTEX after integrating it. This field accepts the following values:  \n\n- `new`  \n\n- `approved`',
        example: 'new',
        title: 'marketplaceOrderStatus',
      }),
    marketplacePaymentValue: z
      .int()
      .openapi({
        description:
          'Integer that indicates the order’s total value, which the marketplace will pay to the seller. It’s important to note that this value should include interest, if that’s the case. If the value is `USD110.50`, convert it to the format → `11050`.',
        example: 11050,
        title: 'marketplacePaymentValue',
      }),
    pickupAccountName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'String that indicates the name of the account responsible for the order’s pickup point. It is only required for pickup-in-point orders from franchise accounts, when franchise accounts `allowFranchises` is `true` and the order in question has a `pickup-in-point` delivery type. It is optional otherwise.',
        example: 'accountName',
        title: 'pickupAccountName',
      }),
    shippingData: ShippingDataSchema,
  })
  .openapi({
    example: {
      allowFranchises: false,
      clientProfileData: {
        corporateDocument: null,
        corporateName: null,
        corporatePhone: null,
        document: '99999999999',
        email: 'email@email.com.br',
        firstName: 'John',
        lastName: 'Doe',
        phone: '99999999999',
        stateInscription: null,
        tradeName: null,
      },
      connectorEndpoint: 'https://connector-endpoint.com/api/vtex',
      connectorName: 'SkyHub',
      customData: {
        customApps: [
          {
            fields: { marketplacePaymentMethod: 'credit card' },
            id: 'marketplace-integration',
            major: 1,
          },
        ],
      },
      invoiceData: { userPaymentInfo: { paymentMethods: ['creditCardPaymentGroup'] } },
      marketplaceOrderId: '{{$guid}}',
      marketplaceOrderStatus: 'NEW',
      marketplacePaymentValue: 3025,
      pickupAccountName: '',
      shippingData: {
        isFob: true,
        isMarketplaceFulfillment: true,
        logisticsInfo: [
          {
            deliveryIds: { warehouseId: 'AR1' },
            lockTTL: '1d',
            price: 2050,
            selectedDeliveryChannel: 'delivery',
            selectedSla: 'Express',
            shippingEstimate: '2d',
          },
        ],
        selectedAddresses: [
          {
            addressId: '1',
            addressType: 'Residential',
            city: 'Curitiba',
            complement: '101',
            country: 'BRA',
            geoCoordinates: { latitude: '-29.5', longitude: '-45.8' },
            neighborhood: 'Portão',
            number: '4125',
            postalCode: '81020-235',
            receiverName: 'John Doe',
            state: 'PR',
            street: 'Rua Eduardo Carlos Pereira',
          },
        ],
      },
    },
    required: [
      'marketplaceOrderId',
      'marketplaceOrderStatus',
      'marketplacePaymentValue',
      'allowFranchises',
      'items',
      'clientProfileData',
      'shippingData',
      'invoiceData',
    ],
    title: 'EnqueueNewOrderRequest',
  })
  .openapi('EnqueueNewOrderRequest')

const PickupInPointSchema = z
  .object({
    accountName: z
      .string()
      .openapi({
        description: 'String that indicates which account made the request.',
        example: 'accountName',
      }),
    code: z
      .string()
      .openapi({
        description:
          'String with a internal Channel Order API code that classifies the response. The possible values returned in this field are described in the [Response Codes]() section.',
        example: 'SOI001',
      }),
    errors: z
      .array(
        z
          .object({
            code: z
              .string()
              .openapi({
                description:
                  'String containing the code returned by the source. Example value: If the source is `Fulfillment`, the code can be FMT005 to indicate that the item(s) in the order are not available.',
                example: 'FMT005',
                title: 'code',
              }),
            description: z
              .string()
              .openapi({
                description:
                  'String containing the error message/description returned by the source.',
                example: 'Message describing the error.',
                title: 'description',
              }),
            source: z
              .string()
              .openapi({
                description:
                  'Includes the following fields pointing out the context of the error: \n\n`Fulfillment` \n\n`Checkout` \n\n`Order Integration`',
                example: 'Fulfillment',
                title: 'Checkout',
              }),
          })
          .openapi({
            example: {
              code: 'FMT005',
              description: 'Message describing the error.',
              source: 'Fulfillment',
            },
            required: ['source', 'code', 'description'],
            title: 'errors',
          }),
      )
      .nullable()
      .openapi({ description: "List with errors related to the response, if there's any." }),
    fields: z
      .object({
        fields: z
          .object({
            franchiseOrderId: z
              .string()
              .exactOptional()
              .openapi({
                description:
                  "String with the order's ID inside the franchise seller account in VTEX. Only returned if the order was integrated using the [Multilevel Omnichannel Inventory](https://help.vtex.com/en/tutorial/multilevel-omnichannel-inventory--7M1xyCZWUyCB7PcjNtOyw4) feature, that is: \n\n- `allowFranchises` field set to `true` when integrating the order \r\n- SLA chosen for the order is from a franchise account",
                example: '432874921387409182347',
                title: 'The franchiseOrderId Schema',
              }),
            mainOrderId: z
              .string()
              .openapi({
                description: "String with the order's ID inside the main seller account in VTEX.",
                example: 'MKP-123456789',
                title: 'mainOrderId',
              }),
          })
          .exactOptional()
          .openapi({
            example: { franchiseOrderId: '432874921387409182347', mainOrderId: 'MKP-123456789' },
            required: ['mainOrderId'],
            title: 'fields',
          }),
      })
      .nullable()
      .openapi({
        description:
          "Structure with important fields for the connector. This structure is only returned if the response is successful. Includes the following fields: \n\n`mainOrderId`: String with the order's ID inside the main seller account in VTEX. \n\n`franchiseOrderId`: - String with the order's ID inside the franchise seller account in VTEX. Only returned if the order was integrated using the [Multilevel Omnichannel Inventory](https://help.vtex.com/en/tutorial/multilevel-omnichannel-inventory--7M1xyCZWUyCB7PcjNtOyw4) feature, that is: \n\n- `allowFranchises` field set to `true` when integrating the order \n\n- `SLA` chosen for the order is from a franchise account.",
        example: { franchiseOrderId: '38475934875' },
        required: [],
      }),
    flow: z
      .string()
      .openapi({
        description:
          'String containing the name of the flow responsible for the response. This field can contain the following values: \n\n`PlaceOrder`: when integrating new orders \n\n`ApproveOrder`: when approving existing orders \n\n`Unknown`: when we’re not able to identify the flow',
        example: 'ApproveOrder',
      }),
    marketplaceOrderId: z
      .string()
      .nullable()
      .openapi({
        description: "String that indicates the order's ID in the marketplace.",
        example: '7e62fcd3-827b-400d-be8a-f050a79c4976',
      }),
    message: z
      .string()
      .openapi({
        description: 'String with a message explaining the code returned in the response. ',
        example: 'The order was integrated into VTEX successfully',
      }),
    operationId: z
      .string()
      .nullable()
      .openapi({
        description:
          'String GUID that identifies the operation in our service. This field can be used to help us analyze unexpected errors or behaviors.',
        example: '1234567',
      }),
    success: z
      .boolean()
      .openapi({
        description: 'Boolean that indicates if the response is successful or not.',
        example: true,
      }),
  })
  .openapi({
    example: {
      accountName: 'grocery1',
      code: 'SOI003',
      errors: null,
      fields: null,
      flow: 'PlaceOrder',
      marketplaceOrderId: null,
      message: 'Order successfully enqueued',
      operationId: null,
      success: true,
    },
    required: [
      'marketplaceOrderId',
      'accountName',
      'code',
      'flow',
      'success',
      'operationId',
      'errors',
      'fields',
      'message',
    ],
    title: 'Pickup-in-point',
  })
  .openapi('PickupInPoint')

const PickupInPointfranchiseSchema = z
  .object({
    accountName: z
      .string()
      .openapi({
        description: 'String that indicates which account made the request.',
        example: 'accountName',
      }),
    code: z
      .string()
      .openapi({
        description:
          'String with a internal Channel Order API code that classifies the response. The possible values returned in this field are described in the [Response Codes]() section.',
        example: 'SOI001',
      }),
    errors: z
      .array(
        z
          .object({
            code: z
              .string()
              .openapi({
                description:
                  'String containing the code returned by the source. Example value: If the source is `Fulfillment`, the code can be FMT005 to indicate that the item(s) in the order are not available.',
                example: 'FMT005',
                title: 'code',
              }),
            description: z
              .string()
              .openapi({
                description:
                  'String containing the error message/description returned by the source.',
                example: 'Message describing the error.',
                title: 'description',
              }),
            source: z
              .string()
              .openapi({
                description:
                  'Includes the following fields pointing out the context of the error: \n\n`Fulfillment` \n\n`Checkout` \n\n`Order Integration`',
                example: 'Fulfillment',
                title: 'Checkout',
              }),
          })
          .openapi({
            example: {
              code: 'FMT005',
              description: 'Message describing the error.',
              source: 'Fulfillment',
            },
            required: ['source', 'code', 'description'],
            title: 'errors',
          }),
      )
      .nullable()
      .openapi({ description: "List with errors related to the response, if there's any." }),
    fields: z
      .object({
        fields: z
          .object({
            franchiseOrderId: z
              .string()
              .exactOptional()
              .openapi({
                description:
                  "String with the order's ID inside the franchise seller account in VTEX. Only returned if the order was integrated using the [Multilevel Omnichannel Inventory](https://help.vtex.com/en/tutorial/multilevel-omnichannel-inventory--7M1xyCZWUyCB7PcjNtOyw4) feature, that is: \n\n- `allowFranchises` field set to `true` when integrating the order \r\n- SLA chosen for the order is from a franchise account",
                example: '432874921387409182347',
                title: 'The franchiseOrderId Schema',
              }),
            mainOrderId: z
              .string()
              .openapi({
                description: 'String with the order’s ID inside the main seller account in VTEX.',
                example: 'MKP-123456789',
                title: 'The mainOrderId Schema',
              }),
          })
          .exactOptional()
          .openapi({
            example: { franchiseOrderId: '432874921387409182347', mainOrderId: 'MKP-123456789' },
            required: ['mainOrderId'],
            title: 'fields',
          }),
      })
      .nullable()
      .openapi({
        description:
          "Structure with important fields for the connector. This structure is only returned if the response is successful. Includes the following fields: \n\n`mainOrderId`: String with the order's ID inside the main seller account in VTEX. \n\n`franchiseOrderId`: - String with the order's ID inside the franchise seller account in VTEX. Only returned if the order was integrated using the [Multilevel Omnichannel Inventory](https://help.vtex.com/en/tutorial/multilevel-omnichannel-inventory--7M1xyCZWUyCB7PcjNtOyw4) feature, that is: \n\n- `allowFranchises` field set to `true` when integrating the order \n\n- `SLA` chosen for the order is from a franchise account.",
        example: { franchiseOrderId: '38475934875', mainOrderId: 'MKP-123456789' },
        required: [],
      }),
    flow: z
      .string()
      .openapi({
        description:
          'String containing the name of the flow responsible for the response. This field can contain the following values: \n\n`PlaceOrder`: when integrating new orders \n\n`ApproveOrder`: when approving existing orders \n\n`Unknown`: when we’re not able to identify the flow',
        example: 'ApproveOrder',
      }),
    marketplaceOrderId: z
      .string()
      .nullable()
      .openapi({
        description: "String that indicates the order's ID in the marketplace.",
        example: '7e62fcd3-827b-400d-be8a-f050a79c4976',
      }),
    message: z
      .string()
      .openapi({
        description: 'String with a message explaining the code returned in the response. ',
        example: 'The order was integrated into VTEX successfully',
      }),
    operationId: z
      .string()
      .nullable()
      .openapi({
        description:
          'String GUID that identifies the operation in our service. This field can be used to help us analyze unexpected errors or behaviors.',
        example: '1234567',
      }),
    success: z
      .boolean()
      .openapi({
        description: 'Boolean that indicates if the response is successful or not.',
        example: true,
      }),
  })
  .openapi({
    example: {
      accountName: 'grocery1',
      code: 'SOI003',
      errors: null,
      fields: null,
      flow: 'PlaceOrder',
      marketplaceOrderId: null,
      message: 'Order successfully enqueued',
      operationId: null,
      success: true,
    },
    required: [
      'marketplaceOrderId',
      'accountName',
      'code',
      'flow',
      'success',
      'operationId',
      'errors',
      'fields',
      'message',
    ],
    title: 'Pickup-in-pointfranchise',
  })
  .openapi('PickupInPointfranchise')

const UpdateOrderStatusRequestSchema = z
  .object({
    connectorEndpoint: z
      .string()
      .openapi({
        description:
          "String with the connector's base endpoint that will receive notifications about the orders processing results, as well as status updates from VTEX OMS. This field does not accept query strings. You can use the models below:  \n\n- `https://{{externalconnector}}.com`  \n\n- `https://{{externalconnector.com}}/api/vtex` if you additionaly want to send a relative URL with the endpoint. \n\nThis field is optional if the connector uses the [App Template](https://developers.vtex.com/vtex-rest-api/docs/external-marketplace-integration-app-template) and authenticates on our request via `VtexIdclientAutCookie`.  \n\nIt is required if the connector is native or does not use the App Template.",
        example: 'https://{{externalconnector.com}}/api/vtex',
        title: 'connectorEndpoint',
      }),
    connectorName: z
      .string()
      .openapi({
        description:
          'String with the identifier code of the connector responsible for the order.  \n\nThis field is optional if the connector uses the [App Template](https://developers.vtex.com/vtex-rest-api/docs/external-marketplace-integration-app-template) and authenticates on our request via `VtexIdclientAutCookie`.  \n\nIt is required if the connector is native or does not use the App Template.',
        example: 'connectorName',
        title: 'connectorName',
      }),
    marketplaceOrderId: z
      .string()
      .openapi({
        description: "String that indicates the order's ID in the marketplace.",
        example: '7e62fcd3-827b-400d-be8a-f050a79c4976',
      }),
    marketplaceOrderStatus: z
      .string()
      .openapi({
        description:
          'Required field including a string with the order’s status in the marketplace. If you send an order with the status APPROVED to integrate, our service will automatically try to advance its status in VTEX after integrating it. This field accepts the following values:  \n\n- `new`  \n\n- `approved`.',
        example: 'new',
        title: 'marketplaceOrderStatus',
      }),
  })
  .openapi({
    example: {
      connectorEndpoint: 'https://connector-endpoint.com/api/vtex',
      connectorName: 'Skyhub',
      marketplaceOrderId: '{{$guid}}',
      marketplaceOrderStatus: 'APPROVED',
    },
    required: [
      'marketplaceOrderId',
      'marketplaceOrderStatus',
      'connectorName',
      'connectorEndpoint',
    ],
    title: 'UpdateOrderStatusRequest',
  })
  .openapi('UpdateOrderStatusRequest')

const VtexMapperRegistrationSchema = z
  .object({
    CategoryTreeProcessingNotificationEndpoint: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The `CategoryTreeProcessingNotificationEndpoint` is optional, and should be an endpoint from the external marketplace, that will be notified after the marketplace's category tree is successfully processed or not.",
        example: 'https://CategoryTreeProcessingNotificationEndpoint.com/api',
      }),
    categoryTreeEndPoint: z
      .string()
      .openapi({
        description:
          'Endpoint that returns categories and attributes according to VTEX  Mapper specifications.',
        example: 'http://api.vtexinternal.com.br/api/{{marketplaceName}}/mapper/categories',
      }),
    displayName: z
      .string()
      .openapi({
        description: 'Marketplace Name, that will be displayed in VTEX Mapper.',
        example: 'Marketplace A',
      }),
    mappingEndPoint: z
      .string()
      .openapi({
        description: 'Secure endpoint that will receive the category mapping sent by VTEX Mapper.',
        example: 'http://api.vtexinternal.com.br/api/{{marketplaceName}}/mapper/mapping',
      }),
    properties: z
      .object({})
      .openapi({ description: 'Refers to the `allowsRemap` property.', required: ['allowsRemap'] }),
  })
  .openapi({ required: ['displayName', 'categoryTreeEndPoint', 'mappingEndPoint', 'properties'] })
  .openapi('VtexMapperRegistration')

const BundleItemsItemSchema = z
  .object({
    id: z.int().exactOptional().openapi({ description: 'Service identifier.', example: 7436 }),
    name: z.string().exactOptional().openapi({ description: 'Service name.', example: 'name' }),
    price: z
      .int()
      .exactOptional()
      .openapi({ description: 'Service price. The last two digits are the cents.', example: 10 }),
    type: z.string().exactOptional().openapi({ description: 'Service type.', example: 'type' }),
  })
  .openapi({ required: [] })
  .openapi('BundleItemsItem')

const FulfillmentItemSchema = z
  .object({
    id: z.string().openapi({ description: 'SKU ID.', example: '6' }),
    quantity: z
      .int()
      .openapi({ description: 'Quantity of items of the SKU in the cart.', example: 1 }),
    seller: z
      .string()
      .openapi({ description: 'ID of the seller registered in VTEX.', example: '01' }),
  })
  .openapi({ required: ['id', 'quantity', 'seller'] })
  .openapi('FulfillmentItem')

const ItemAttachmentSchema = z
  .object({
    content: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Content referring to the customization requested by the customer.',
        example: 'content-example',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Attachment name.', example: 'name-example' }),
  })
  .openapi({ required: [] })
  .openapi('ItemAttachment')

const OrderPlacementSchema = z
  .object({
    clientProfileData: z
      .object({
        corporateDocument: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({
            description: 'Corporate document, if the customer is a legal entity.',
            example: '12345678000100',
          }),
        corporateName: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({
            description: 'Company name, if the customer is a legal entity.',
            example: 'company-name',
          }),
        corporatePhone: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({
            description: 'Corporate phone number, if the customer is a legal entity.',
            example: '+551100988887777',
          }),
        document: z
          .string()
          .openapi({
            description: 'Document number informed by the customer.',
            example: '123456789',
          }),
        documentType: z
          .string()
          .openapi({
            description: 'Type of the document informed by the customer.',
            example: 'cpf',
          }),
        email: z
          .string()
          .openapi({
            description: "Customer's email address.",
            example: 'customer@examplemail.com',
          }),
        firstName: z
          .string()
          .openapi({ description: "Customer's first name.", example: 'first-name' }),
        isCorporate: z
          .boolean()
          .nullable()
          .default(false)
          .openapi({ description: '`true` if the customer is a legal entity.' }),
        lastName: z
          .string()
          .openapi({ description: "Customer's last name.", example: 'last-name' }),
        phone: z
          .string()
          .exactOptional()
          .openapi({ description: "Customer's phone number.", example: '+55110988887777' }),
        stateInscription: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({
            description: 'State inscription, if the customer is a legal entity.',
            example: '12345678',
          }),
        tradeName: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({
            description: 'Trade name, if the customer is a legal entity.',
            example: 'trade-name',
          }),
      })
      .exactOptional()
      .openapi({
        description: "Customer's profile information.",
        required: ['email', 'firstName', 'lastName', 'documentType', 'document', 'isCorporate'],
      }),
    items: z
      .array(
        z
          .object({
            attachments: z
              .array(z.any())
              .exactOptional()
              .openapi({ description: 'Array containing information on attachments.' }),
            bundleItems: z
              .array(BundleItemsItemSchema)
              .exactOptional()
              .openapi({
                description:
                  'Information on services sold along with the SKU. Example: a gift package.',
              }),
            commission: z.int().exactOptional().openapi({ description: 'Comission.', example: 0 }),
            freightCommission: z
              .int()
              .exactOptional()
              .openapi({ description: 'Freight comission.', example: 0 }),
            id: z
              .string()
              .exactOptional()
              .openapi({ description: 'SKU ID.', example: '123456789abc' }),
            isGift: z
              .boolean()
              .exactOptional()
              .openapi({ description: '`true` if the item is a gift.' }),
            itemsAttachment: z
              .array(ItemAttachmentSchema)
              .exactOptional()
              .openapi({ description: 'Attachments sold with the SKU.' }),
            measurementUnit: z
              .string()
              .exactOptional()
              .openapi({ description: 'SKU measurement unit.', example: 'g' }),
            price: z
              .int()
              .exactOptional()
              .openapi({
                description:
                  'SKU price. The last two digits are the cents. For example, $24.99 is represented 2499.',
                example: 2499,
              }),
            priceTags: z
              .array(
                z
                  .object({
                    identifier: z
                      .string()
                      .exactOptional()
                      .openapi({
                        description: 'Price tag identifier.',
                        example: '1234abc-5678b-1234c',
                      }),
                    isPercentual: z
                      .boolean()
                      .exactOptional()
                      .openapi({
                        description: '`true` if price tag value is applied through a percentage.',
                        example: false,
                      }),
                    name: z
                      .string()
                      .exactOptional()
                      .openapi({
                        description: 'Price tag name.',
                        example: 'discount@name-1234abc-5678b-1234c',
                      }),
                    rawValue: z
                      .int()
                      .exactOptional()
                      .openapi({ description: 'Price tag value.', example: -12 }),
                    value: z
                      .int()
                      .exactOptional()
                      .openapi({ description: 'Price tag raw value.', example: -1200 }),
                  })
                  .openapi({ required: [] }),
              )
              .exactOptional()
              .openapi({
                description:
                  'Array of price tags, each of which, modifies the price in some way, like discounts or rates that apply to the item in the context of the order.',
              }),
            quantity: z
              .int()
              .exactOptional()
              .openapi({ description: 'Quantity of the item.', example: 1 }),
            seller: z
              .string()
              .exactOptional()
              .openapi({
                description: 'ID of the seller registered in VTEX.',
                example: 'seller-example',
              }),
            unitMultiplier: z
              .int()
              .exactOptional()
              .openapi({ description: 'SKU unit multiplier.', example: 1 }),
          })
          .openapi({ required: [] }),
      )
      .exactOptional()
      .openapi({ description: 'Array of objects containing data about each SKU in the cart.' }),
    marketingData: z
      .object({
        utmCampaign: z
          .string()
          .exactOptional()
          .openapi({ description: 'UTM campaign', example: 'Black friday' }),
        utmMedium: z
          .string()
          .exactOptional()
          .openapi({ description: 'UTM medium.', example: 'CPC' }),
        utmSource: z
          .string()
          .exactOptional()
          .openapi({ description: 'UTM source.', example: 'Facebook' }),
        utmiCampaign: z
          .string()
          .exactOptional()
          .openapi({
            description: 'utmi_campaign (internal utm)',
            example: 'utmi_campaign-exmaple',
          }),
        utmiPage: z
          .string()
          .exactOptional()
          .openapi({ description: 'utmi_page (internal utm)', example: 'utmi_page-example' }),
        utmiPart: z
          .string()
          .exactOptional()
          .openapi({ description: 'utmi_part (internal utm)', example: 'utmi_part-exmaple' }),
      })
      .exactOptional()
      .openapi({
        description:
          'Marketing tracking data. If the order has no tracking data, the value will be `null`.',
        required: [],
      }),
    marketplaceOrderId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Identifies the order in the marketplace.',
        example: '1138342255777-01',
      }),
    marketplacePaymentValue: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'Amount that the marketplace agrees to pay to the seller. The last two digits are the cents. For example, $24.99 is represented 2499.',
        example: 2499,
      }),
    marketplaceServicesEndpoint: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Endpoint sent by VTEX to the seller, that will be used to send the invoice and tracking data to the marketplace. This endpoint will also be used in [change order in Multilevel Omnichannel Inventory](https://developers.vtex.com/docs/guides/change-orders-multilevel-omnichannel-inventory-external-marketplaces#implementators) operations in external marketplaces.',
        example: 'https://marketplaceservicesendpoint.myvtex.com/',
      }),
    openTextField: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional field meant to hold additional information about the order. We recommend using this field for text, not data formats such as `json` even if escaped. For that purpose, see [Creating customizable fields](https://developers.vtex.com/vtex-rest-api/docs/creating-customizable-fields-in-the-cart-with-checkout-api-1)',
        example: 'open-text-example',
      }),
    paymentData: z
      .object({})
      .nullable()
      .default(null)
      .exactOptional()
      .openapi({
        description:
          'In other contexts, this field tipically holds an object with payment information. However, since the payment is processed by the marketplace, it will be sent to the seller as `null` in this context.',
      }),
    shippingData: z
      .object({
        address: z
          .object({
            addressId: z
              .string()
              .exactOptional()
              .openapi({ description: 'Address ID.', example: 'Home' }),
            addressType: z
              .string()
              .openapi({
                description:
                  'Type of address. For example, `Residential` or `Pickup`, among others.',
                example: 'residential',
              }),
            city: z
              .string()
              .openapi({ description: 'City of the shipping address.', example: 'Rio de Janeiro' }),
            complement: z
              .string()
              .exactOptional()
              .openapi({
                description: 'Complement to the shipping address in case it applies.',
                example: '3rd floor',
              }),
            country: z
              .string()
              .openapi({
                description: 'Three letter ISO code of the country of the shipping address.',
                example: 'BRA',
              }),
            geoCoordinates: z
              .array(z.string().openapi({ example: '00.00000' }))
              .exactOptional()
              .openapi({
                description:
                  'Array with two strings with geocoordinates, first latitude, then longitude.',
              }),
            neighborhood: z
              .string()
              .openapi({
                description: 'Neighborhood of the shipping address.',
                example: 'Botafogo',
              }),
            number: z
              .string()
              .openapi({
                description: 'Number of the building, house or apartment in the shipping address.',
                example: '300',
              }),
            postalCode: z.string().openapi({ description: 'Postal Code.', example: '12345-000' }),
            receiverName: z
              .string()
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
              .openapi({
                description: 'State of the shipping address.',
                example: 'Rio de Janeiro',
              }),
            street: z
              .string()
              .openapi({
                description: 'Street of the shipping address.',
                example: 'Praia de Botafogo',
              }),
          })
          .exactOptional()
          .openapi({
            description: 'Shipping address.',
            required: [
              'addressType',
              'receiverName',
              'postalCode',
              'city',
              'state',
              'country',
              'street',
              'neighborhood',
              'number',
            ],
          }),
        logisticsInfo: z
          .array(
            z
              .object({
                deliveryWindow: z
                  .object({
                    endDateUtc: z
                      .string()
                      .exactOptional()
                      .openapi({
                        description: 'Scheduled delivery window end date in UTC.',
                        example: '2016-04-20T12:00:00+00:00',
                      }),
                    listPrice: z
                      .number()
                      .exactOptional()
                      .openapi({
                        description: 'Scheduled delivery window list price.',
                        example: 10,
                      }),
                    startDateUtc: z
                      .string()
                      .exactOptional()
                      .openapi({
                        description: 'Scheduled delivery window start date in UTC.',
                        example: '2016-04-20T08:00:00+00:00',
                      }),
                  })
                  .exactOptional()
                  .openapi({
                    description:
                      'Scheduled delivery window information, in case it applies to the item.',
                    required: [],
                  }),
                itemIndex: z
                  .int()
                  .openapi({
                    description: 'Index of the item in the `items` array, starting from 0.',
                    example: 0,
                  }),
                lockTTL: z
                  .string()
                  .exactOptional()
                  .openapi({ description: 'Logistics reservation waiting time.', example: '8d' }),
                price: z
                  .int()
                  .openapi({
                    description:
                      "Shipping price for the item. Does not account for the whole order's shipping price.",
                    example: 1099,
                  }),
                selectedSla: z
                  .string()
                  .openapi({ description: 'Selected shipping option', example: 'Express' }),
                shippingEstimate: z
                  .string()
                  .exactOptional()
                  .openapi({
                    description: 'Estimated time until delivery for the item.',
                    example: '7d',
                  }),
              })
              .openapi({ required: ['itemIndex', 'selectedSla', 'price'] }),
          )
          .exactOptional()
          .openapi({
            description: 'Array of objects containing logistics information of each item.',
          }),
        updateStatus: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'Indicate whether this object\'s information is up to date according to the order\'s items. An order can not be placed if `"outdated"`',
            example: 'updated',
          }),
      })
      .exactOptional()
      .openapi({ description: 'Shipping information.', required: [] }),
  })
  .openapi({ required: [] })
  .openapi('OrderPlacement')

const SendCategoryMappingToVtexMapperSchema = z
  .object({
    categories: z
      .array(
        z
          .object({
            children: z
              .array(
                z
                  .object({
                    children: z
                      .array(z.any())
                      .nullable()
                      .default([])
                      .openapi({
                        description:
                          'Grandchildren categories in the marketplace. Send as array of `ID`, `name` and `specifications`.',
                        title: 'children',
                      }),
                    id: z
                      .string()
                      .default('1a')
                      .openapi({
                        description: 'ID of the child  category in the marketplace.',
                        title: 'id',
                      }),
                    name: z
                      .string()
                      .default('Kitchen')
                      .openapi({
                        description: 'Name of the child  category in the marketplace.',
                        title: 'name',
                      }),
                    specifications: z
                      .array(
                        z
                          .object({
                            attributeName: z
                              .string()
                              .default('Color')
                              .openapi({
                                description: 'Name of the attribute sent as a specification.',
                                title: 'attributeName',
                              }),
                            attributeValues: z
                              .array(
                                z
                                  .object({
                                    valueName: z
                                      .string()
                                      .default('Red')
                                      .openapi({
                                        description: 'Name of the value',
                                        title: 'valueName',
                                      }),
                                  })
                                  .default({ valueName: 'Red' })
                                  .openapi({
                                    description:
                                      'Array of the multiple `valueNames` for the attribute specificied.',
                                    required: ['valueName'],
                                    title: 'valueName',
                                  }),
                              )
                              .default([{ valueName: 'Red' }])
                              .openapi({
                                description: 'Values of the atttribute specified.',
                                title: 'attributeValues',
                              }),
                            required: z
                              .boolean()
                              .default(false)
                              .openapi({
                                description:
                                  'If the specification is required, mark this flag as `true`. If not, mark it as `false`.',
                                title: 'required',
                              }),
                          })
                          .openapi({
                            description: 'Specifications of children categories.',
                            example: {
                              attributeName: 'Color',
                              attributeValues: [{ valueName: 'Red' }],
                              required: true,
                            },
                            required: ['attributeName', 'required', 'attributeValues'],
                          }),
                      )
                      .default([
                        {
                          attributeName: 'Color',
                          attributeValues: [{ valueName: 'Red' }],
                          required: true,
                        },
                      ])
                      .openapi({
                        description: 'Specifications for the Product or SKU',
                        title: 'specifications',
                      }),
                  })
                  .openapi({ required: ['id', 'name', 'children', 'specifications'] }),
              )
              .default([])
              .exactOptional()
              .openapi({
                description:
                  'Array with children categories in the marketplace, and their information.',
                title: 'chidren',
              }),
            id: z
              .string()
              .default('1')
              .exactOptional()
              .openapi({
                description: 'ID of the parent category in the marketplace.',
                title: 'id',
              }),
            name: z
              .string()
              .default('Appliances')
              .exactOptional()
              .openapi({
                description: 'Name of the parent category in the marketplace.',
                title: 'name',
              }),
          })
          .openapi({ title: '', required: [] }),
      )
      .default([])
      .openapi({
        description: 'Array with Marketplace parent categories and their information.',
        required: ['id', 'name', 'children'],
        title: '',
      }),
  })
  .openapi({ required: ['categories', 'id', 'name'] })
  .openapi('SendCategoryMappingToVtexMapper')

const AppKeySecurityScheme = { in: 'header', name: 'X-VTEX-API-AppKey', type: 'apiKey' }

const AppTokenSecurityScheme = { in: 'header', name: 'X-VTEX-API-AppToken', type: 'apiKey' }

export const postApiCheckoutPubOrderFormsSimulationRoute = createRoute({
  method: 'post',
  path: '/api/checkout/pub/orderForms/simulation',
  tags: ['External Marketplace'],
  summary: 'Fulfillment simulation - External Marketplace',
  description:
    'This endpoint can be triggered by marketplaces to simulate the fulfillment of an item in the cart.\r\n\r\nThe fulfillment information is useful whenever you need to know the availability of fulfilling an order for a specific cart setting, since the API response will let you know the updated price, inventory and shipping data.',
  operationId: 'fulfillment-simulation-external-marketplace',
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
      affiliateId: z
        .string()
        .default('MNF')
        .exactOptional()
        .openapi({
          param: {
            description: 'The affiliate ID code created by the seller.',
            in: 'query',
            name: 'affiliateId',
            required: false,
            schema: { default: 'MNF', type: 'string' },
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
                    .openapi({
                      description: 'Document informed by the customer.',
                      example: '12345678900',
                    }),
                  documentType: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'Type of the document informed by the customer.',
                      example: 'cpf',
                    }),
                  email: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'Email address.', example: 'clark.kent@example.com' }),
                  firstName: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'First name.', example: 'Clark' }),
                  isCorporate: z
                    .boolean()
                    .exactOptional()
                    .openapi({ description: 'Indicates whether the customer is a legal entity.' }),
                  lastName: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'Last name.', example: 'Kent' }),
                  phone: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'Phone number.', example: '+552199999999' }),
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
              isCheckedIn: z
                .boolean()
                .default(false)
                .exactOptional()
                .openapi({ description: 'Indicates whether order is checked in.' }),
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
                    .default('utmi_campaign-example')
                    .exactOptional()
                    .openapi({ description: 'utmi_campaign (internal utm).' }),
                  utmiPage: z
                    .string()
                    .default('utmi_page-example')
                    .exactOptional()
                    .openapi({ description: 'utmi_page (internal utm).' }),
                  utmiPart: z
                    .string()
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
              postalCode: z
                .string()
                .exactOptional()
                .openapi({ description: 'Postal code.', example: '12345-000' }),
              selectedSla: z
                .string()
                .exactOptional()
                .openapi({ description: 'SLA selected by the customer.', example: 'Normal' }),
              storeId: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({ description: 'ID of the store.' }),
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
})

export const postPortalVtexcommercestableComBrApiMkpCategoryMapperCategoriesMarketplaceIdRoute =
  createRoute({
    method: 'post',
    path: '/portal.vtexcommercestable.com.br/api/mkp-category-mapper/categories/marketplace/{id}',
    tags: ['External Marketplace'],
    summary: 'Send Category Mapping to VTEX Mapper',
    description:
      "Mapping categories guarantees that the VTEX category tree has a correct association with the marketplace’s category tree. \n\nTo perform this association, VTEX made VTEX Mapper available. It is a tool integrated to the VTEX platform that allows the user to relate categories created in VTEX to categories from the marketplace. \n\nThis endpoint allows connectors to send the marketplace's category tree mapped in the integration. \n\nConnectors should send the payload compacted in .gzip format. \n\nFor a detailed explanation of the steps required to develop a custom connector to become an external marketplace for VTEX sellers, check out our complete [External Marketplace Integration Guide](https://developers.vtex.com/vtex-rest-api/docs/external-marketplace-integration-guide).",
    operationId: 'send-category-mapping-vtex-mapper',
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
      params: z.object({
        id: z
          .string()
          .default('123456789')
          .openapi({
            param: {
              description: 'Code identifying returned in the *VTEX Mapper Registration* endpoint.',
              in: 'path',
              name: 'id',
              required: true,
              schema: { default: '123456789', type: 'string' },
              style: 'simple',
            },
          }),
      }),
      body: {
        description: '',
        content: { 'application/json': { schema: SendCategoryMappingToVtexMapperSchema } },
        required: true,
      },
    },
    responses: { 200: { description: 'OK', headers: z.object({}) } },
  })

export const postPortalVtexcommercestableComBrApiMkpCategoryMapperConnectorRegisterRoute =
  createRoute({
    method: 'post',
    path: '/portal.vtexcommercestable.com.br/api/mkp-category-mapper/connector/register',
    tags: ['External Marketplace'],
    summary: 'VTEX Mapper Registration',
    description:
      'Mapping categories guarantees that the VTEX category tree has a correct association with the marketplace’s category tree. \n\nTo perform this association, VTEX made VTEX Mapper available. It is a tool integrated to the VTEX platform that allows the user to relate categories created in VTEX to categories from the marketplace. \n\nThis endpoint allows connectors to register the external marketplace integration in VTEX Mapper. \n\nIn case VTEX Mapper detects an error and the call fails, the connector should check if mandatory information was sent correctly. Ex. are URLs correctly registered in the properties categoryTreeEndPoint and mappingEndPoint? \n\nFor a detailed explanation of the steps required to develop a custom connector to become an external marketplace for VTEX sellers, check out our complete [External Marketplace Integration Guide](https://developers.vtex.com/vtex-rest-api/docs/external-marketplace-integration-guide).',
    operationId: 'vtex-mapper-registration',
    request: {
      query: z.object({
        an: z
          .string()
          .openapi({
            param: {
              description: 'Name of the VTEX account. Used as part of the URL.',
              in: 'query',
              name: 'an',
              required: true,
              schema: { example: 'accountName', type: 'string' },
              style: 'form',
            },
            example: 'accountName',
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
      body: {
        description: '',
        content: { 'application/json': { schema: VtexMapperRegistrationSchema } },
        required: true,
      },
    },
    responses: { 200: { description: 'OK', headers: z.object({}) } },
  })

export const postAccountNameVtexcommercestableComBrApiOrderIntegrationOrdersRoute = createRoute({
  method: 'post',
  path: '/{accountName}.vtexcommercestable.com.br/api/order-integration/orders',
  tags: ['External Marketplace'],
  summary: 'New Order Integration',
  description:
    "API to integrate an external channel's order into the VTEX plataform.\n\nThis process is asynchronous and a notification with the order's integration results will be sent to the endpoint specified in the **connectorEndpoint** field in [App Template](https://developers.vtex.com/vtex-rest-api/docs/external-marketplace-integration-app-template), if the connector uses our App template. The field **connectorName** is also optional for connectors that use our App Template and authenticate using the app's auth cookie. If the account is not informed in the URL host, it should also be defined as a query string parameter in the route: `an={account}`. \n\nFor a detailed explanation of the steps required to develop a custom connector to become an external marketplace for VTEX sellers, check out our complete [External Marketplace Integration Guide](https://developers.vtex.com/vtex-rest-api/docs/external-marketplace-integration-guide).",
  operationId: 'EnqueueNewOrder',
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
      an: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Parameter should indicate the name of the VTEX account where the order is being integrated or updated, meaning the seller responsible for the order.',
            explode: true,
            in: 'query',
            name: 'an',
            required: false,
            schema: { example: 'apiexamples', type: 'string' },
            style: 'form',
          },
          example: 'apiexamples',
        }),
      affiliateId: z
        .string()
        .openapi({
          param: {
            description:
              "ID identifying the marketplace where the order originates. This ID is configured in the seller's VTEX account, and should be informed to the marketplace.",
            explode: true,
            in: 'query',
            name: 'affiliateId',
            required: true,
            schema: { example: 'MKP', type: 'string' },
            style: 'form',
          },
          example: 'MKP',
        }),
    }),
    params: z.object({
      accountName: z
        .string()
        .default('apiexamples')
        .openapi({
          param: {
            description:
              'Parameter should indicate the name of the VTEX account where the order is being integrated or updated, meaning the seller responsible for the order.',
            in: 'path',
            name: 'accountName',
            required: true,
            schema: { default: 'apiexamples', type: 'string' },
          },
        }),
    }),
    body: {
      description: '',
      content: {
        'application/json': {
          schema: EnqueueNewOrderRequestSchema,
          example: {
            allowFranchises: false,
            clientProfileData: {
              corporateDocument: null,
              corporateName: null,
              corporatePhone: null,
              document: '99999999999',
              email: 'email@email.com.br',
              firstName: 'John',
              lastName: 'Doe',
              phone: '99999999999',
              stateInscription: null,
              tradeName: null,
            },
            connectorEndpoint: 'https://connector-endpoint.com/api/vtex',
            connectorName: 'SkyHub',
            customData: {
              customApps: [
                {
                  fields: { marketplacePaymentMethod: 'credit card' },
                  id: 'marketplace-integration',
                  major: 1,
                },
              ],
            },
            invoiceData: { userPaymentInfo: { paymentMethods: ['creditCardPaymentGroup'] } },
            items: [{ id: '1', price: 975, quantity: 1 }],
            marketplaceOrderId: '{{$guid}}',
            marketplaceOrderStatus: 'NEW',
            marketplacePaymentValue: 3025,
            pickupAccountName: '',
            shippingData: {
              isFob: true,
              isMarketplaceFulfillment: true,
              logisticsInfo: [
                {
                  deliveryIds: { warehouseId: 'AR1' },
                  lockTTL: '1d',
                  price: 2050,
                  selectedDeliveryChannel: 'delivery',
                  selectedSla: 'Express',
                  shippingEstimate: '2d',
                },
              ],
              selectedAddresses: [
                {
                  addressId: '1',
                  addressType: 'Residential',
                  city: 'Curitiba',
                  complement: '101',
                  country: 'BRA',
                  geoCoordinates: { latitude: '-29.5', longitude: '-45.8' },
                  neighborhood: 'Portão',
                  number: '4125',
                  postalCode: '81020-235',
                  receiverName: 'John Doe',
                  state: 'PR',
                  street: 'Rua Eduardo Carlos Pereira',
                },
              ],
            },
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
          schema: DeliverybysellerSchema,
          example: {
            accountName: 'grocery1',
            code: 'SOI003',
            errors: null,
            fields: null,
            flow: 'PlaceOrder',
            marketplaceOrderId: null,
            message: 'Order successfully enqueued',
            operationId: null,
            success: true,
          },
        },
      },
      headers: z.object({}),
    },
    default: {
      description: '',
      content: {
        'application/json': {
          schema: DeliverybyfranchisesellerSchema,
          example: {
            accountName: 'grocery1',
            code: 'SOI003',
            errors: null,
            fields: null,
            flow: 'PlaceOrder',
            marketplaceOrderId: null,
            message: 'Order successfully enqueued',
            operationId: null,
            success: true,
          },
        },
      },
      headers: z.object({}),
    },
  },
})

export const putAccountNameVtexcommercestableComBrApiOrderIntegrationOrdersStatusRoute =
  createRoute({
    method: 'put',
    path: '/{accountName}.vtexcommercestable.com.br/api/order-integration/orders/status',
    tags: ['External Marketplace'],
    summary: 'Update Order Status',
    description:
      "API request used to update an order status in VTEX.\n\nThis process is asynchronous and a notification with the order's integration results will be sent to the endpoint specified in the **connectiorEndpoint** field or the **connectiorEndpoint** [App Template](https://developers.vtex.com/vtex-rest-api/docs/external-marketplace-integration-app-template), if the connector uses our App template. The field **connectorName** is also optional for connectors that use our App Template and authenticate using the app's auth cookie. \n\nFor a detailed explanation of the steps required to develop a custom connector to become an external marketplace for VTEX sellers, check out our complete [External Marketplace Integration Guide](https://developers.vtex.com/vtex-rest-api/docs/external-marketplace-integration-guide).",
    operationId: 'UpdateOrderStatus',
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
        an: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              description:
                'Parameter should indicate the name of the VTEX account where the order is being integrated or updated, meaning the seller responsible for the order.',
              explode: true,
              in: 'query',
              name: 'an',
              required: false,
              schema: { example: 'apiexamples', type: 'string' },
              style: 'form',
            },
            example: 'apiexamples',
          }),
      }),
      params: z.object({
        accountName: z
          .string()
          .default('apiexamples')
          .openapi({
            param: {
              description:
                'Parameter should indicate the name of the VTEX account where the order is being integrated or updated, meaning the seller responsible for the order.',
              in: 'path',
              name: 'accountName',
              required: true,
              schema: { default: 'apiexamples', type: 'string' },
            },
          }),
      }),
      body: {
        description: '',
        content: {
          'application/json': {
            schema: UpdateOrderStatusRequestSchema,
            example: {
              connectorEndpoint: 'https://connector-endpoint.com/api/vtex',
              connectorName: 'Skyhub',
              marketplaceOrderId: '{{$guid}}',
              marketplaceOrderStatus: 'APPROVED',
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
            schema: ApproveorderSchema,
            example: {
              accountName: null,
              code: 'SOI003',
              errors: null,
              fields: null,
              flow: 'ApproveOrder',
              marketplaceOrderId: '7e62fcd3-827b-400d-be8a-f050a79c4976',
              message: 'Order successfully enqueued',
              operationId: null,
              success: true,
            },
          },
        },
        headers: z.object({}),
      },
    },
  })

export const postAccountNameEnvironmentComBrApiFulfillmentPvtOrdersRoute = createRoute({
  method: 'post',
  path: '/{accountName}.{environment}.com.br/api/fulfillment/pvt/orders',
  tags: ['External Marketplace'],
  summary: 'Place fulfillment order',
  description:
    "Creates fulfillment order, meaning that it is an order for the seller's side in a sale made through a marketplace. This order assumes the transaction itself has already happened on the marketplace's side and, therfore, cares only about the fulfillment side.\n\r\n\r> If you plan to integrate external orders with possible [Price divergence](https://help.vtex.com/en/tutorial/price-divergence-rule--6RlFLhD1rIRRshl83KnCjW#) be mindful of the `isCreatedAsync` request body field. \n\nFor a detailed explanation of the steps required to develop a custom connector to become an external marketplace for VTEX sellers, check out our complete [External Marketplace Integration Guide](https://developers.vtex.com/vtex-rest-api/docs/external-marketplace-integration-guide).",
  operationId: 'PlaceFulfillmentOrder',
  request: {
    params: z.object({
      accountName: z
        .string()
        .default('apiexamples')
        .openapi({
          param: {
            description: 'Name of the VTEX account. Used as part of the URL.',
            in: 'path',
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
            description: 'Environment to be used. It is passed as part of the URL.',
            in: 'path',
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
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Sales channel.',
            in: 'query',
            name: 'sc',
            required: false,
            schema: { example: '1', type: 'string' },
            style: 'form',
          },
          example: '1',
        }),
      affiliateId: z
        .string()
        .openapi({
          param: {
            description:
              "ID identifying the marketplace where the order originates. This ID is configured in the seller's VTEX account, and should be informed to the marketplace.",
            in: 'query',
            name: 'affiliateId',
            required: true,
            schema: { example: 'MKP', type: 'string' },
            style: 'form',
          },
          example: 'MKP',
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
                    .nullable()
                    .exactOptional()
                    .openapi({
                      description: 'Corporate document, if the customer is a legal entity.',
                      example: '12345678000100',
                    }),
                  corporateName: z
                    .string()
                    .nullable()
                    .exactOptional()
                    .openapi({
                      description: 'Company name, if the customer is a legal entity.',
                      example: 'company-name',
                    }),
                  corporatePhone: z
                    .string()
                    .nullable()
                    .exactOptional()
                    .openapi({
                      description: 'Corporate phone number, if the customer is a legal entity.',
                      example: '+551100988887777',
                    }),
                  document: z
                    .string()
                    .openapi({
                      description:
                        'Document informed by the customer. Validation depends on the country.',
                      example: '123456789',
                    }),
                  documentType: z
                    .string()
                    .openapi({
                      description: 'Type of the document informed by the customer.',
                      example: 'cpf',
                    }),
                  email: z
                    .string()
                    .openapi({
                      description: "Customer's email address.",
                      example: 'customer@examplemail.com',
                    }),
                  firstName: z
                    .string()
                    .openapi({ description: "Customer's first name.", example: 'first-name' }),
                  isCorporate: z
                    .boolean()
                    .nullable()
                    .exactOptional()
                    .openapi({
                      description: '`true` if the customer is a legal entity.',
                      example: false,
                    }),
                  lastName: z
                    .string()
                    .openapi({ description: "Customer's last name.", example: 'last-name' }),
                  phone: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: "Customer's phone number.",
                      example: '+55110988887777',
                    }),
                  stateInscription: z
                    .string()
                    .nullable()
                    .exactOptional()
                    .openapi({
                      description: 'State inscription, if the customer is a legal entity.',
                      example: '12345678',
                    }),
                  tradeName: z
                    .string()
                    .nullable()
                    .exactOptional()
                    .openapi({
                      description: 'Trade name, if the customer is a legal entity.',
                      example: 'trade-name',
                    }),
                })
                .openapi({
                  description: "Customer's profile information.",
                  required: ['email', 'firstName', 'lastName', 'documentType', 'document'],
                }),
              isCreatedAsync: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Indicates whether an order is created. It must be `true` if an order is being placed with [Price divergence](https://help.vtex.com/en/tutorial/price-divergence-rule--6RlFLhD1rIRRshl83KnCjW#), otherwise the request will not work.',
                  example: false,
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
                                .int()
                                .exactOptional()
                                .openapi({ description: 'Service identifier.', example: 1034 }),
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
                        .exactOptional()
                        .openapi({ description: 'SKU measurement unit.', example: 'g' }),
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
                                .exactOptional()
                                .openapi({
                                  description: 'Price tag identifier.',
                                  example: '1234abc-5678b-1234c',
                                }),
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
                                .exactOptional()
                                .openapi({
                                  description: 'Price tag name.',
                                  example: 'discount@name-1234abc-5678b-1234c',
                                }),
                              rawValue: z
                                .int()
                                .exactOptional()
                                .openapi({ description: 'Price tag value.', example: -12 }),
                              value: z
                                .int()
                                .exactOptional()
                                .openapi({ description: 'Price tag raw value.', example: -1200 }),
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
                        .exactOptional()
                        .openapi({ description: 'SKU unit multiplier.', example: 1 }),
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
                  utmCampaign: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'UTM campaign', example: 'Black friday' }),
                  utmMedium: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'UTM medium.', example: 'CPC' }),
                  utmSource: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'UTM source.', example: 'Facebook' }),
                  utmiCampaign: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'utmi_campaign (internal utm)',
                      example: 'utmi_campaign-exmaple',
                    }),
                  utmiPage: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'utmi_page (internal utm)',
                      example: 'utmi_page-example',
                    }),
                  utmiPart: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'utmi_part (internal utm)',
                      example: 'utmi_part-exmaple',
                    }),
                })
                .exactOptional()
                .openapi({ required: [] }),
              marketplaceOrderId: z
                .string()
                .openapi({
                  description: 'ID of the order in the marketplace.',
                  example: '123456789',
                }),
              marketplacePaymentValue: z
                .int()
                .openapi({
                  description: 'Value of the payment made to the marketplace.',
                  example: 100,
                }),
              marketplaceServicesEndpoint: z
                .string()
                .openapi({
                  description:
                    'Endpoint provided by the marketplace for post purchase communication. Should be an URL, containing protocol, host, path and query string (in case it applies).',
                  example: 'https://exampleseller.marketplaceservices.com',
                }),
              openTextField: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Optional field meant to hold additional information about the order. We recommend using this field for text, not data formats such as `JSON` even if escaped. For that purpose, see [Creating customizable fields](https://developers.vtex.com/vtex-rest-api/docs/creating-customizable-fields-in-the-cart-with-checkout-api-1)',
                  example: 'open-text-example',
                }),
              paymentData: z
                .object({})
                .nullable()
                .default(null)
                .exactOptional()
                .openapi({
                  description:
                    'In other contexts, this field tipically holds an object with payment information. However, since the payment is processed by the marketplace, it will be sent to the seller as `null` in this context.',
                }),
              shippingData: z
                .object({
                  address: z
                    .object({
                      addressId: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'Address ID.', example: 'Home' }),
                      addressType: z
                        .string()
                        .openapi({
                          description:
                            'Type of address. For example, `Residential` or `Pickup`, among others.',
                          example: 'residential',
                        }),
                      city: z
                        .string()
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
                        .openapi({
                          description:
                            'Three letter ISO code of the country of the shipping address.',
                          example: 'BRA',
                        }),
                      geoCoordinates: z
                        .array(z.string().openapi({ example: '00.00000' }))
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
                          example: 'Botafogo',
                        }),
                      number: z
                        .string()
                        .openapi({
                          description:
                            'Number of the building, house or apartment in the shipping address.',
                          example: '300',
                        }),
                      postalCode: z
                        .string()
                        .openapi({
                          description: 'Postal Code. Validation depends on the country.',
                          example: '12345000',
                        }),
                      receiverName: z
                        .string()
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
                        .openapi({
                          description: 'State of the shipping address.',
                          example: 'Rio de Janeiro',
                        }),
                      street: z
                        .string()
                        .openapi({
                          description: 'Street of the shipping address.',
                          example: 'Praia de Botafogo',
                        }),
                    })
                    .exactOptional()
                    .openapi({
                      description: 'Shipping address.',
                      required: [
                        'addressType',
                        'receiverName',
                        'postalCode',
                        'city',
                        'state',
                        'country',
                        'street',
                        'number',
                      ],
                    }),
                  logisticsInfo: z
                    .array(
                      z
                        .object({
                          deliveryWindow: z
                            .object({
                              endDateUtc: z
                                .string()
                                .exactOptional()
                                .openapi({
                                  description: 'Delivery window ending day and time in UTC.',
                                  example: '2021-07-13T23:59:59+00:00',
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
                                .exactOptional()
                                .openapi({
                                  description: 'Delivery window starting day and time in UTC.',
                                  example: '2021-07-13T00:00:00+00:00',
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
                            .openapi({
                              description:
                                'Index of the item in the `items` array, starting from 0.',
                              example: 0,
                            }),
                          lockTTL: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description: 'Logistics reservation waiting time.',
                              example: '8d',
                            }),
                          price: z
                            .int()
                            .openapi({
                              description:
                                "Shipping price for the item. Does not account for the whole order's shipping price.",
                              example: 1099,
                            }),
                          selectedSla: z
                            .string()
                            .openapi({
                              description: 'Selected shipping option',
                              example: 'Express',
                            }),
                          shippingEstimate: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description: 'Estimated time until delivery for the item.',
                              example: '7d',
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
                    .exactOptional()
                    .openapi({
                      description:
                        'Indicate whether this object\'s information is up to date according to the order\'s items. An order can not be placed if `"outdated"`',
                      example: 'updated',
                    }),
                })
                .openapi({ description: 'Shipping information.', required: [] }),
            })
            .openapi({
              required: [
                'marketplaceOrderId',
                'marketplaceServicesEndpoint',
                'marketplacePaymentValue',
                'items',
                'clientProfileData',
                'shippingData',
              ],
            }),
        },
      },
    },
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const postAccountNameEnvironmentComBrApiFulfillmentPvtOrdersOrderIdFulfillRoute =
  createRoute({
    method: 'post',
    path: '/{accountName}.{environment}.com.br/api/fulfillment/pvt/orders/{orderId}/fulfill',
    tags: ['External Marketplace'],
    summary: 'Authorize dispatch for fulfillment order',
    description:
      "Creates fulfillment order, meaning that it is an order for the seller's side in a sale made through a marketplace. This order assumes the transaction itself has already happened on the marketplace's side and, therfore, cares only about the fulfillment side. \n\nFor a detailed explanation of the steps required to develop a custom connector to become an external marketplace for VTEX sellers, check out our complete [External Marketplace Integration Guide](https://developers.vtex.com/vtex-rest-api/docs/external-marketplace-integration-guide).",
    operationId: 'AuthorizeDispatchForFulfillmentOrder',
    request: {
      params: z.object({
        accountName: z
          .string()
          .default('apiexamples')
          .openapi({
            param: {
              description: 'Name of the VTEX account. Used as part of the URL.',
              in: 'path',
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
              description: 'Environment to be used. It is passed as part of the URL.',
              in: 'path',
              name: 'environment',
              required: true,
              schema: { default: 'vtexcommercestable', type: 'string' },
            },
          }),
        orderId: z
          .string()
          .default('MKP-123')
          .openapi({
            param: {
              description:
                'ID of the order that is to be authorized. It is composed of the `afilliateId` and the `marketplaceOrderId` joined with a `-`. For instance, an order with an ID `"123"` coming from the marketplace `"MKP"` has an `orderId` of `"MKP-123"`.',
              in: 'path',
              name: 'orderId',
              required: true,
              schema: { default: 'MKP-123', type: 'string' },
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
        sc: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              description: 'Sales channel.',
              in: 'query',
              name: 'sc',
              required: false,
              schema: { example: '1', type: 'string' },
              style: 'form',
            },
            example: '1',
          }),
        affiliateId: z
          .string()
          .openapi({
            param: {
              description:
                "ID identifying the marketplace where the order originates. This ID is configured in the seller's VTEX account, and should be informed to the marketplace.",
              in: 'query',
              name: 'affiliateId',
              required: true,
              schema: { example: 'MKP', type: 'string' },
              style: 'form',
            },
            example: 'MKP',
          }),
      }),
      body: {
        content: {
          'application/json': {
            schema: z
              .object({
                marketplaceOrderId: z
                  .string()
                  .default('123')
                  .exactOptional()
                  .openapi({
                    description:
                      'ID of the order in the marketplace. It is the same as the `orderId` without the `afilliateId` at the beginning. For instance, if the `orderId` is `"MKP-123"`, the `marketplaceOrderId` is `"123"`.',
                  }),
              })
              .openapi({ required: [] }),
          },
        },
      },
    },
    responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
  })

export const postFulfillmentEndpointPvtOrderFormsSimulationRoute = createRoute({
  method: 'post',
  path: '/{fulfillmentEndpoint}/pvt/orderForms/simulation',
  tags: ['External Seller'],
  summary: 'Fulfillment simulation - External Seller',
  description:
    'This endpoint may be called upon by VTEX for fulfillment simulation in the external seller different contexts. See examples below.\n\nWhen a [price](https://developers.vtex.com/docs/api-reference/marketplace-apis#post-/notificator/-sellerId-/changenotification/-skuId-/price) or [inventory](https://developers.vtex.com/docs/api-reference/marketplace-apis#post-/notificator/-sellerId-/changenotification/-skuId-/inventory) notification request returns a response with status `200 OK`, it means that the SKU already exists in the marketplace. Whenever this happens, the marketplace will call the seller to get two updated information about the SKU: Price and Inventory.\n\nThe seller needs to have an endpoint implemented in order to receive this call and send a response containing the requested information to the marketplace. We call it the Fulfillment Simulation endpoint.\n\nIf the seller wishes to include other parameters in this call (like account name, or [sales channel](https://help.vtex.com/en/tutorial/como-funciona-uma-politica-comercial--6Xef8PZiFm40kg2STrMkMV) ID), this should be done within their {fulfillmentEndpoint}. This path is then inserted in the marketplace\'s VTEX admin when [configuring a seller](https://help.vtex.com/en/tutorial/configurando-seller--tutorials_392). \n\nThe marketplace will send an object containing an array of items. The seller must use this list to get the updated information about the referred SKUs and send them back to the marketplace, following the response format explained in the API Reference. \n\nThis call is also applied in the Storefront simulation scenario, in which case the request from VTEX does not send the paramenters `country` and `postalCode`. \nThe call\'s payload can be adapted into two scenarios: \n\n- **Displaying items in the storefront**: the address information can be nulled in the request, since they are not mandatory data for this context.   \n- **Making a shopping cart simulation during checkout**: address information must be sent, since this data is needed to calculate freight values. If the address information (including `postalCode` and `country`) is not sent through the call, VTEX interprets the stock balance as zero. Without a valid stock balance, the seller will not be shown as an option during checkout. \n  \n## Request body example - Indexing simulation\n\n```\n{\n    "items": [\n      {\n        "id": "7908010136043",\n        "quantity": 1,\n        "seller": "1",\n      }\n    ],\n    "isCheckedIn": false,\n  }\n``` \n## Request body example - Checkout simulation\n\n```\n{\n    "items": [\n      {\n        "id": "7908010136043",\n        "quantity": 1,\n        "seller": "1",\n      }\n    ],\n    "postalCode": "22270-030",\n    "country": "BRA",\n  }\n```',
  operationId: 'fulfillment-simulation',
  request: {
    params: z.object({
      fulfillmentEndpoint: z
        .string()
        .openapi({
          param: {
            description:
              "This is the fulfillment endpoint registered for each specific external seller in the **seller management** section of VTEX's admin panel.",
            in: 'path',
            name: 'fulfillmentEndpoint',
            required: true,
            schema: { example: 'marketplaceexample.externalseller.com', type: 'string' },
            style: 'simple',
          },
          example: 'marketplaceexample.externalseller.com',
        }),
    }),
    headers: z.object({
      Accept: z
        .string()
        .openapi({
          param: {
            description:
              'HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.',
            in: 'header',
            name: 'Accept',
            required: true,
            schema: { example: 'application/json', type: 'string' },
            style: 'simple',
          },
          example: 'application/json',
        }),
      'Content-Type': z
        .string()
        .openapi({
          param: {
            description: 'Describes the type of the content being sent.',
            in: 'header',
            name: 'Content-Type',
            required: true,
            schema: { example: 'application/json', type: 'string' },
            style: 'simple',
          },
          example: 'application/json',
        }),
    }),
    body: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .object({
              country: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'ISO 3-digit code of the country where the delivery address is located.  This field is mandatory, for shopping carts simulations, where both Country and Postal Code are required. This field should be sent as `null` for storefront simulations, where the information is not necessary.',
                  example: 'USA',
                }),
              geoCoordinates: z
                .array(z.string().openapi({ example: '00.00000000' }))
                .exactOptional()
                .openapi({
                  description:
                    'Geographic coordinates of the delivery address. This may be used instead of the postalCode, in case the marketplace is configured to accept geolocation. Example of value: `[-22.9443504,-43.1825635]`.',
                }),
              items: z
                .array(FulfillmentItemSchema)
                .exactOptional()
                .openapi({ description: 'Array containing the cart items.' }),
              postalCode: z
                .string()
                .openapi({
                  description:
                    'Delivery address postal code. This field is mandatory for shopping carts simulations, where both Country and Postal Code are required. This field should be sent as `null` for storefront simulations, where the information is not necessary.',
                  example: '12345678',
                }),
              sc: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Sales channel (or [trade policy](https://help.vtex.com/en/tutorial/como-funciona-uma-politica-comercial--6Xef8PZiFm40kg2STrMkMV#master-data)) associated to the seller account created.',
                  example: '1',
                }),
            })
            .openapi({ required: ['postalCode'] }),
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
              country: z
                .string()
                .openapi({
                  description:
                    'ISO 3-digit code of the country where the delivery address is located. If you don’t want to send it, use the value null.',
                  example: 'BRA',
                  title: 'Country',
                }),
              items: z
                .array(
                  z
                    .object({
                      id: z
                        .string()
                        .openapi({ description: 'SKU ID', example: '2000037', title: 'id' }),
                      listPrice: z
                        .int()
                        .openapi({
                          description:
                            'List price. It’s the amount presented to the customer as a “previous” price that has been lowered due to a discount. Don’t separate the decimal places. The last two digits are the cents.',
                          example: 67203,
                          title: 'listPrice',
                        }),
                      measurementUnit: z
                        .string()
                        .openapi({
                          description: 'SKU’s measurement unit.',
                          example: 'un',
                          title: 'measurementUnit',
                        }),
                      merchantName: z
                        .string()
                        .openapi({
                          description:
                            'Name of the marketplace, used to guide payments. This field should be nulled if the marketplace is responsible for processing payments. Check out our [​​Payments in VTEX marketplaces](https://help.vtex.com/en/tutorial/payments-in-vtex-marketplaces--2kYOfWCZYweJkYl18bw9yD) article to know more.',
                          example: 'mySeller1',
                          title: 'merchantName',
                        }),
                      offerings: z
                        .array(
                          z
                            .object({
                              id: z
                                .string()
                                .openapi({ description: 'Service ID.', example: '5', title: 'id' }),
                              name: z
                                .string()
                                .openapi({
                                  description: 'Service name.',
                                  example: '1 year warranty',
                                  title: 'name',
                                }),
                              price: z
                                .int()
                                .openapi({
                                  description: 'Service price. The last two digits are the cents.',
                                  example: 10000,
                                  title: 'price',
                                }),
                              type: z
                                .string()
                                .openapi({
                                  description: 'Type of the service.',
                                  example: 'Warranty',
                                  title: 'type',
                                }),
                            })
                            .openapi({
                              description:
                                'Services that may be offered for this SKU. example are the assembly of a piece of furniture or warranty. In case these information are sent, the following fields are mandatory. If you don’t want to send it, use an empty array.',
                              required: ['type', 'id', 'name', 'price'],
                              title: 'offerings',
                            }),
                        )
                        .openapi({
                          description:
                            'Services that may be offered for this SKU. example are the assembly of a piece of furniture or warranty. In case these information are sent, the following fields are mandatory. If you don’t want to send it, use an empty array.',
                          example: [
                            { id: '5', name: '1 year warranty', price: 10000, type: 'Warranty' },
                          ],
                          title: 'offerings',
                        }),
                      price: z
                        .int()
                        .openapi({
                          description:
                            'Actual selling price of the SKU. Don’t separate the decimal places. The last two digits are the cents.',
                          example: 67203,
                          title: 'price',
                        }),
                      priceTags: z
                        .array(
                          z
                            .string()
                            .openapi({
                              description: 'Promotions applied to the SKU.',
                              example: 'promotion 1',
                              title: 'priceTags',
                            }),
                        )
                        .openapi({
                          description: 'List with the promotions applied to the SKU.',
                          title: 'priceTags',
                        }),
                      priceValidUntil: z
                        .string()
                        .nullable()
                        .openapi({
                          description:
                            'Expiration date of the SKU price. Example: `2014-03-01T22:58:28.143`. In case you don’t want to send it, use the value null.',
                          example: '2014-03-01T22:58:28.143',
                          title: 'priceValidUntil',
                        }),
                      quantity: z
                        .int()
                        .default(0)
                        .openapi({
                          description:
                            'Quantity of the item. The seller should send the quantity that was indicated in the request, or the maximum quantity possible.',
                          example: 1,
                          title: 'quantity',
                        }),
                      requestIndex: z
                        .int()
                        .openapi({
                          description: 'Position of this item in the original array (request).',
                          example: 0,
                          title: 'requestIndex',
                        }),
                      seller: z
                        .string()
                        .openapi({
                          description:
                            'ID of the seller as registered in VTEX. You should send the same value that came in the request.',
                          example: '1',
                          title: 'seller',
                        }),
                      unitMultiplier: z
                        .int()
                        .openapi({
                          description: 'SKU unit multiplier. The default value is 1.',
                          example: 1,
                          title: 'unitMultiplier',
                        }),
                    })
                    .openapi({
                      description: 'Contains the data about each SKU in the cart.',
                      required: [
                        'id',
                        'listPrice',
                        'measurementUnit',
                        'merchantName',
                        'offerings',
                        'price',
                        'priceTags',
                        'priceValidUntil',
                        'quantity',
                        'requestIndex',
                        'seller',
                        'unitMultiplier',
                      ],
                      title: 'Items',
                    }),
                )
                .openapi({
                  description: 'Contains the data about each SKU in the cart.',
                  example: [
                    {
                      id: '2000037',
                      listPrice: 67203,
                      measurementUnit: 'un',
                      merchantName: 'mySeller1',
                      offerings: [
                        { id: '5', name: '1 year warranty', price: 10000, type: 'Warranty' },
                      ],
                      price: 67203,
                      priceTags: [],
                      priceValidUntil: '2014-03-01T22:58:28.143',
                      quantity: 1,
                      requestIndex: 0,
                      seller: '1',
                      unitMultiplier: 1,
                    },
                  ],
                  title: 'Items',
                }),
              logisticsInfo: z
                .array(
                  z
                    .object({
                      deliveryChannels: z
                        .array(
                          z
                            .object({
                              id: z
                                .string()
                                .openapi({
                                  description:
                                    'Identifies the channel type whose stock balance will be informed in the next field. Possible values are: pickup-in-point for pickup point and delivery for regular delivery.',
                                  example: 'pickup-in-point',
                                  title: 'id',
                                }),
                              stockBalance: z
                                .int()
                                .openapi({
                                  description:
                                    'Stock balance for the channel type selected in the previous field.',
                                  example: 20,
                                  title: 'stockBalance',
                                }),
                            })
                            .openapi({
                              description:
                                'Object containing ID and stockbalance of each delivery channel.',
                              example: { id: 'delivery', stockBalance: 179 },
                              required: ['id', 'stockBalance'],
                              title: 'deliveryChannels',
                            }),
                        )
                        .openapi({
                          description: 'Array contains the stock balance for each channel.',
                          example: [
                            { id: 'delivery', stockBalance: 179 },
                            { id: 'pickup-in-point', stockBalance: 20 },
                          ],
                          title: 'deliveryChannels',
                        }),
                      itemIndex: z
                        .int()
                        .openapi({
                          description:
                            'Position of this item in the original array, i.e., in the array that came with the request. This index is what identifies which SKU you are referring to for each object inside the logisticsInfo.',
                          example: 0,
                          title: 'itemIndex',
                        }),
                      quantity: z
                        .int()
                        .openapi({
                          description:
                            'Quantity of the item. The seller should send the quantity that was indicated in the request, or the maximum quantity possible.',
                          example: 1,
                          title: 'quantity',
                        }),
                      shipsTo: z
                        .array(
                          z
                            .string()
                            .openapi({
                              description: 'Array of country codes',
                              example: 'BRA',
                              title: 'shipsTo',
                            }),
                        )
                        .openapi({
                          description:
                            'ISO 3-digit code of the countries to where the SKU is delivered.',
                          example: ['BRA', 'BOL'],
                          title: 'shipsTo',
                        }),
                      slas: z
                        .array(
                          z
                            .object({
                              availableDeliveryWindows: z
                                .array(
                                  z
                                    .object({
                                      endDateUtc: z
                                        .string()
                                        .openapi({
                                          description: 'End date of the delivery window.',
                                          example: '2013-02-04T13:00:00+00:00',
                                          title: 'endDateUtc',
                                        }),
                                      price: z
                                        .int()
                                        .openapi({
                                          description:
                                            'Extra price for scheduled delivery. The last two digits are the cents.',
                                          example: 0,
                                          title: 'price',
                                        }),
                                      startDateUtc: z
                                        .string()
                                        .openapi({
                                          description: 'Start date of the delivery window.',
                                          example: '2013-02-04T08:00:00+00:00',
                                          title: 'startDateUtc',
                                        }),
                                    })
                                    .openapi({
                                      description: 'Object with delivery windows information.',
                                      example: {
                                        endDateUtc: '2013-02-04T13:00:00+00:00',
                                        price: 0,
                                        startDateUtc: '2013-02-04T08:00:00+00:00',
                                      },
                                      required: ['startDateUtc', 'endDateUtc', 'price'],
                                      title: 'availableDeliveryWindows',
                                    }),
                                )
                                .openapi({
                                  description:
                                    'Contains the delivery windows available for the SLA.',
                                  example: [
                                    {
                                      endDateUtc: '2013-02-04T13:00:00+00:00',
                                      price: 0,
                                      startDateUtc: '2013-02-04T08:00:00+00:00',
                                    },
                                    {
                                      endDateUtc: '2014-02-04T13:00:00+00:00',
                                      price: 100,
                                      startDateUtc: '2014-02-04T08:00:00+00:00',
                                    },
                                  ],
                                  title: 'availableDeliveryWindows',
                                }),
                              deliveryChannel: z
                                .string()
                                .openapi({
                                  description:
                                    'Type of delivery channel. The values that are possible are: `pickup-in-point` for pickup point and `delivery` for regular delivery.',
                                  example: 'pickup-in-point',
                                  title: 'deliveryChannel',
                                }),
                              id: z
                                .string()
                                .openapi({
                                  description: 'Identifier of the delivery method.',
                                  example: 'Curbside pickup',
                                  title: 'id',
                                }),
                              name: z
                                .string()
                                .openapi({
                                  description: 'Name of the delivery method.',
                                  example: 'Curbside pickup',
                                  title: 'name',
                                }),
                              pickupStoreInfo: z
                                .object({
                                  additionalInfo: z
                                    .string()
                                    .openapi({
                                      description:
                                        'Description or extra information about the pickup point.',
                                      example: 'Pick up your order at the cashier.',
                                      title: 'additionalInfo',
                                    }),
                                  address: z
                                    .object({
                                      addressId: z
                                        .string()
                                        .openapi({
                                          description: 'Identifies the pickup point.',
                                          example: '548304ed-dd40-4416-b12b-4b32bfa7b1e0',
                                          title: 'addressId',
                                        }),
                                      addressType: z
                                        .string()
                                        .openapi({
                                          description: 'The possible value is pickup.',
                                          example: 'pickup',
                                          title: ' addressType',
                                        }),
                                      city: z
                                        .string()
                                        .openapi({
                                          description: "Pickup point's city.",
                                          example: 'Rio de Janeiro',
                                          title: 'city',
                                        }),
                                      complement: z
                                        .string()
                                        .openapi({
                                          description: 'Complement of the pickup point address.',
                                          example: '2nd floor',
                                          title: 'complement',
                                        }),
                                      country: z
                                        .string()
                                        .openapi({
                                          description:
                                            '3-digit ISO code of the country where the pickup point is located.',
                                          example: 'BRA',
                                          title: 'country',
                                        }),
                                      geoCoordinates: z
                                        .array(
                                          z
                                            .number()
                                            .openapi({
                                              description:
                                                'Contains the geographic coordinates of the pickup point.',
                                              example: 25.401705,
                                              title: 'geoCoordinates',
                                            }),
                                        )
                                        .openapi({
                                          description:
                                            'Contains the geographic coordinates of the pickup point.',
                                          example: [-49.334934, 25.401705],
                                          title: 'geoCoordinates',
                                        }),
                                      neighborhood: z
                                        .string()
                                        .openapi({
                                          description:
                                            'Neighborhood where the pickup point is located.',
                                          example: 'Botafogo',
                                          title: 'neighborhood',
                                        }),
                                      number: z
                                        .string()
                                        .openapi({
                                          description: 'Address number of the pickup point.',
                                          example: '100',
                                          title: 'number',
                                        }),
                                      postalCode: z
                                        .string()
                                        .openapi({
                                          description:
                                            'Postal code of the pickup point. This field is mandatory, for shopping carts simulations, where both Country and Postal Code are required. This field should be sent as `null` for storefront simulations, where the information is not necessary.',
                                          example: '82320-040',
                                          title: 'postalCode',
                                        }),
                                      receiverName: z
                                        .string()
                                        .nullable()
                                        .openapi({
                                          description:
                                            'Name of the person who will receive the product. May be sent as `null`.',
                                          example: 'Juliana',
                                          title: 'receiverName',
                                        }),
                                      reference: z
                                        .string()
                                        .nullable()
                                        .openapi({
                                          description: 'A reference for the pickup point address. ',
                                          example: 'Right next to the Unicorn statue.',
                                          title: 'reference',
                                        }),
                                      state: z
                                        .string()
                                        .openapi({
                                          description: "Pickup point's state.",
                                          example: 'RJ',
                                          title: 'state',
                                        }),
                                      street: z
                                        .string()
                                        .openapi({
                                          description: 'Street where the pickup point is located.',
                                          example: 'Rua Praia de Botafogo',
                                          title: 'street',
                                        }),
                                    })
                                    .openapi({
                                      description: 'Address data of the pickup point.',
                                      example: {
                                        addressId: '548304ed-dd40-4416-b12b-4b32bfa7b1e0',
                                        addressType: 'pickup',
                                        city: 'Curitiba',
                                        complement: 'Loja 10',
                                        country: 'BRA',
                                        geoCoordinates: [49.334934, 25.401705],
                                        neighborhood: 'Santa Felicidade',
                                        number: '100',
                                        postalCode: '82320-040',
                                        receiverName: 'Juliana',
                                        reference: 'Right next to the Unicorn statue.',
                                        state: 'PR',
                                        street: 'Rua Domingos Strapasson',
                                      },
                                      required: [
                                        'addressType',
                                        'receiverName',
                                        'addressId',
                                        'postalCode',
                                        'city',
                                        'state',
                                        'country',
                                        'street',
                                        'number',
                                        'neighborhood',
                                        'complement',
                                        'reference',
                                        'geoCoordinates',
                                      ],
                                      title: 'address',
                                    }),
                                  friendlyName: z
                                    .string()
                                    .openapi({
                                      description: 'Friendly name of the pickup point.',
                                      example: 'Store ABC',
                                      title: 'friendlyName',
                                    }),
                                  isPickupStore: z
                                    .boolean()
                                    .openapi({
                                      description: '`true` if it is a pickup point.',
                                      example: true,
                                      title: 'isPickupStore',
                                    }),
                                })
                                .nullable()
                                .openapi({
                                  description:
                                    'Contains the data about the pickup point. If you don’t want to send this, use the value `null`.',
                                  example: {
                                    additionalInfo: '',
                                    address: {
                                      addressId: '548304ed-dd40-4416-b12b-4b32bfa7b1e0',
                                      addressType: 'pickup',
                                      city: 'Curitiba',
                                      complement: 'Loja 10',
                                      country: 'BRA',
                                      geoCoordinates: [49.334934, 25.401705],
                                      neighborhood: 'Santa Felicidade',
                                      number: '100',
                                      postalCode: '82320-040',
                                      receiverName: 'Juliana',
                                      reference: 'Right next to the Unicorn statue.',
                                      state: 'PR',
                                      street: 'Rua Domingos Strapasson',
                                    },
                                    friendlyName: 'Santa Felicidade',
                                    isPickupStore: true,
                                  },
                                  required: [
                                    'isPickupStore',
                                    'friendlyName',
                                    'address',
                                    'additionalInfo',
                                  ],
                                  title: 'pickupStoreInfo',
                                }),
                              price: z
                                .int()
                                .openapi({
                                  description: 'Delivery price. The two last digits are the cents.',
                                  example: 846,
                                  title: 'price',
                                }),
                              shippingEstimate: z
                                .string()
                                .openapi({
                                  description:
                                    'Time estimated for the delivery. Possible suffixes are `bd` for *business day* , `h` for *hours*, and `m` for *minutes*.',
                                  example: '19bd',
                                  title: 'shippingEstimate',
                                }),
                            })
                            .openapi({
                              description: 'Object with delivery methods information.',
                              example: {
                                availableDeliveryWindows: [
                                  {
                                    endDateUtc: '2013-02-04T13:00:00+00:00',
                                    price: 0,
                                    startDateUtc: '2013-02-04T08:00:00+00:00',
                                  },
                                ],
                                deliveryChannel: 'pickup-in-point',
                                id: 'Curbside pickup',
                                name: 'Curbside pickup',
                                pickupStoreInfo: {
                                  additionalInfo: '',
                                  address: {
                                    addressId: '548304ed-dd40-4416-b12b-4b32bfa7b1e0',
                                    addressType: 'pickup',
                                    city: 'Curitiba',
                                    complement: 'Loja 10',
                                    country: 'BRA',
                                    geoCoordinates: [49.334934, 25.401705],
                                    neighborhood: 'Santa Felicidade',
                                    number: '100',
                                    postalCode: '82320-040',
                                    receiverName: 'Juliana',
                                    reference: 'Right next to the Unicorn statue.',
                                    state: 'PR',
                                    street: 'Rua Domingos Strapasson',
                                  },
                                  friendlyName: 'Santa Felicidade',
                                  isPickupStore: true,
                                },
                                price: 0,
                                shippingEstimate: '0bd',
                              },
                              required: [
                                'id',
                                'deliveryChannel',
                                'name',
                                'price',
                                'shippingEstimate',
                                'availableDeliveryWindows',
                                'pickupStoreInfo',
                              ],
                              title: 'slas',
                            }),
                        )
                        .openapi({
                          description: 'Contains the available delivery methods.',
                          example: [
                            {
                              availableDeliveryWindows: [
                                {
                                  endDateUtc: '2013-02-04T13:00:00+00:00',
                                  price: 0,
                                  startDateUtc: '2013-02-04T08:00:00+00:00',
                                },
                              ],
                              deliveryChannel: 'pickup-in-point',
                              id: 'Curbside pickup',
                              name: 'Curbside pickup',
                              pickupStoreInfo: {
                                additionalInfo: '',
                                address: {
                                  addressId: '548304ed-dd40-4416-b12b-4b32bfa7b1e0',
                                  addressType: 'pickup',
                                  city: 'Curitiba',
                                  complement: 'Loja 10',
                                  country: 'BRA',
                                  geoCoordinates: [49.334934, 25.401705],
                                  neighborhood: 'Santa Felicidade',
                                  number: '100',
                                  postalCode: '82320-040',
                                  receiverName: 'Juliana',
                                  reference: 'Right next to the Unicorn statue.',
                                  state: 'PR',
                                  street: 'Rua Domingos Strapasson',
                                },
                                friendlyName: 'Santa Felicidade',
                                isPickupStore: true,
                              },
                              price: 0,
                              shippingEstimate: '0bd',
                            },
                          ],
                          title: 'slas',
                        }),
                      stockBalance: z
                        .int()
                        .openapi({
                          description: 'Stock balance of the SKU.',
                          example: 199,
                          title: 'stockBalance',
                        }),
                    })
                    .openapi({
                      description: 'An explanation about the purpose of this instance.',
                      example: {
                        deliveryChannels: [
                          { id: 'delivery', stockBalance: 179 },
                          { id: 'pickup-in-point', stockBalance: 20 },
                        ],
                        itemIndex: 0,
                        quantity: 1,
                        shipsTo: ['BRA'],
                        slas: [
                          {
                            availableDeliveryWindows: [
                              {
                                endDateUtc: '2013-02-04T13:00:00+00:00',
                                price: 0,
                                startDateUtc: '2013-02-04T08:00:00+00:00',
                              },
                            ],
                            deliveryChannel: 'pickup-in-point',
                            id: 'Curbside pickup',
                            name: 'Curbside pickup',
                            pickupStoreInfo: {
                              additionalInfo: '',
                              address: {
                                addressId: '548304ed-dd40-4416-b12b-4b32bfa7b1e0',
                                addressType: 'pickup',
                                city: 'Curitiba',
                                complement: 'Loja 10',
                                country: 'BRA',
                                geoCoordinates: [49.334934, 25.401705],
                                neighborhood: 'Santa Felicidade',
                                number: '100',
                                postalCode: '82320-040',
                                receiverName: null,
                                reference: null,
                                state: 'PR',
                                street: 'Rua Domingos Strapasson',
                              },
                              friendlyName: 'Santa Felicidade',
                              isPickupStore: true,
                            },
                            price: 0,
                            shippingEstimate: '0bd',
                          },
                        ],
                        stockBalance: 199,
                      },
                      required: [
                        'itemIndex',
                        'quantity',
                        'shipsTo',
                        'slas',
                        'stockBalance',
                        'deliveryChannels',
                      ],
                      title: 'A Schema',
                    }),
                )
                .openapi({
                  description:
                    'Array that contains the data regarding the delivery methods and stock for each item. If all products are unavailable, this field should return empty.',
                  example: [
                    {
                      deliveryChannels: [
                        { id: 'delivery', stockBalance: 179 },
                        { id: 'pickup-in-point', stockBalance: 20 },
                      ],
                      itemIndex: 0,
                      quantity: 1,
                      shipsTo: ['BRA'],
                      slas: [
                        {
                          availableDeliveryWindows: [
                            {
                              endDateUtc: '2013-02-04T13:00:00+00:00',
                              price: 0,
                              startDateUtc: '2013-02-04T08:00:00+00:00',
                            },
                          ],
                          deliveryChannel: 'pickup-in-point',
                          id: 'Curbside pickup',
                          name: 'Curbside pickup',
                          pickupStoreInfo: {
                            additionalInfo: '',
                            address: {
                              addressId: '548304ed-dd40-4416-b12b-4b32bfa7b1e0',
                              addressType: 'pickup',
                              city: 'Curitiba',
                              complement: 'Loja 10',
                              country: 'BRA',
                              geoCoordinates: [49.334934, 25.401705],
                              neighborhood: 'Santa Felicidade',
                              number: '100',
                              postalCode: '82320-040',
                              receiverName: null,
                              reference: null,
                              state: 'PR',
                              street: 'Rua Domingos Strapasson',
                            },
                            friendlyName: 'Santa Felicidade',
                            isPickupStore: true,
                          },
                          price: 0,
                          shippingEstimate: '0bd',
                        },
                      ],
                      stockBalance: 199,
                    },
                  ],
                  title: 'logisticsInfo',
                }),
              postalCode: z
                .string()
                .openapi({
                  description:
                    'Postal code of the delivery address. This field is mandatory, for shopping carts simulations, where both Country and Postal Code are required. This field should be sent as `null` for storefront simulations, where the information is not necessary.',
                  example: '80250000',
                  title: 'postalCode',
                }),
            })
            .openapi({
              description: 'Expected response body of fulfillment simulation',
              example: {
                country: 'BRA',
                logisticsInfo: [
                  {
                    deliveryChannels: [
                      { id: 'delivery', stockBalance: 179 },
                      { id: 'pickup-in-point', stockBalance: 20 },
                    ],
                    itemIndex: 0,
                    quantity: 1,
                    shipsTo: ['BRA'],
                    slas: [
                      {
                        availableDeliveryWindows: [
                          {
                            endDateUtc: '2013-02-04T13:00:00+00:00',
                            price: 0,
                            startDateUtc: '2013-02-04T08:00:00+00:00',
                          },
                        ],
                        deliveryChannel: 'pickup-in-point',
                        id: 'Curbside pickup',
                        name: 'Curbside pickup',
                        pickupStoreInfo: {
                          additionalInfo: '',
                          address: {
                            addressId: '548304ed-dd40-4416-b12b-4b32bfa7b1e0',
                            addressType: 'pickup',
                            city: 'Curitiba',
                            complement: 'Loja 10',
                            country: 'BRA',
                            geoCoordinates: [49.334934, 25.401705],
                            neighborhood: 'Santa Felicidade',
                            number: '100',
                            postalCode: '82320-040',
                            receiverName: 'Juliana',
                            reference: 'Next to the unicorn statue',
                            state: 'PR',
                            street: 'Rua Domingos Strapasson',
                          },
                          friendlyName: 'Santa Felicidade',
                          isPickupStore: true,
                        },
                        price: 0,
                        shippingEstimate: '0bd',
                      },
                    ],
                    stockBalance: 199,
                  },
                ],
                postalCode: '80250000',
              },
              required: ['country', 'items', 'logisticsInfo', 'postalCode'],
              title: 'Response body',
            }),
        },
      },
      headers: z.object({}),
    },
  },
})

export const postFulfillmentEndpointPvtOrdersRoute = createRoute({
  method: 'post',
  path: '/{fulfillmentEndpoint}/pvt/orders',
  tags: ['External Seller'],
  summary: 'Order placement',
  description:
    'This request is sent by VTEX to the external seller once the customer finishes their checkout, to let the seller know there is a newly placed order. It does that by calling the **Order Placement** endpoint, which needs to be implemented by the seller.\n\nThe marketplace will send information such as the items contained in the cart, the client’s profile data, the shipping data, and the payment data. With all that, the seller will be able to create the order in their own store.',
  operationId: 'order-placement',
  request: {
    params: z.object({
      fulfillmentEndpoint: z
        .string()
        .openapi({
          param: {
            description:
              "This is the fulfillment endpoint registered for each specific external seller in the **seller management** section of VTEX's admin panel.",
            in: 'path',
            name: 'fulfillmentEndpoint',
            required: true,
            schema: { example: 'https://marketplaceexample.externalseller.com', type: 'string' },
            style: 'simple',
          },
          example: 'https://marketplaceexample.externalseller.com',
        }),
    }),
    headers: z.object({
      'content-length': z
        .string()
        .openapi({
          param: {
            description: 'Length of the request body.',
            in: 'header',
            name: 'content-length',
            required: true,
            schema: { example: '2183', type: 'string' },
            style: 'simple',
          },
          example: '2183',
        }),
      authorization: z
        .string()
        .openapi({
          param: {
            description: 'Indicates authorization.',
            in: 'header',
            name: 'authorization',
            required: true,
            schema: { example: 'VTEX key="appKey" token="appToken"', type: 'string' },
            style: 'simple',
          },
          example: 'VTEX key="appKey" token="appToken"',
        }),
      'x-vtex-api-appkey': z
        .string()
        .openapi({
          param: {
            description: 'VTEX API app key.',
            in: 'header',
            name: 'x-vtex-api-appkey',
            required: true,
            schema: { example: 'appKey', type: 'string' },
            style: 'simple',
          },
          example: 'appKey',
        }),
      'x-vtex-api-apptoken': z
        .string()
        .openapi({
          param: {
            description: 'VTEX API app token.',
            in: 'header',
            name: 'x-vtex-api-apptoken',
            required: true,
            schema: { example: 'appToken', type: 'string' },
            style: 'simple',
          },
          example: 'appToken',
        }),
      accept: z
        .string()
        .openapi({
          param: {
            description:
              'HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.',
            in: 'header',
            name: 'accept',
            required: true,
            schema: { example: 'application/json', type: 'string' },
            style: 'simple',
          },
          example: 'application/json',
        }),
      'accept-enconding': z
        .string()
        .openapi({
          param: {
            description: 'Indicates the types of response enconding the client can understand.',
            in: 'header',
            name: 'accept-enconding',
            required: true,
            schema: { example: 'gzip, deflate', type: 'string' },
            style: 'simple',
          },
          example: 'gzip, deflate',
        }),
      'x-vtex-operation-id': z
        .string()
        .openapi({
          param: {
            description: 'VTEX operation ID.',
            in: 'header',
            name: 'x-vtex-operation-id',
            required: true,
            schema: { example: '8032114b-63e9-4e64-b30c-f7afcf676d7a', type: 'string' },
            style: 'simple',
          },
          example: '8032114b-63e9-4e64-b30c-f7afcf676d7a',
        }),
      'x-forwarded-proto': z
        .string()
        .openapi({
          param: {
            description: 'Determines the protocol used by the client in the request.',
            in: 'header',
            name: 'x-forwarded-proto',
            required: true,
            schema: { example: 'https', type: 'string' },
            style: 'simple',
          },
          example: 'https',
        }),
      'x-forwarded-for': z
        .string()
        .openapi({
          param: {
            description: 'Identifies the originating IP address of the HTTP client.',
            in: 'header',
            name: 'x-forwarded-for',
            required: true,
            schema: { example: '179.35.30.186, 130.176.35.67, 172.16.247.49', type: 'string' },
            style: 'simple',
          },
          example: '179.35.30.186, 130.176.35.67, 172.16.247.49',
        }),
      'x-vtex-cache-client-bypass': z
        .string()
        .openapi({
          param: {
            description: 'VTEX cache client bypass.',
            in: 'header',
            name: 'x-vtex-cache-client-bypass',
            required: true,
            schema: { example: '1', type: 'string' },
            style: 'simple',
          },
          example: '1',
        }),
      'content-type': z
        .string()
        .openapi({
          param: {
            description: 'Describes the type of the content being sent.',
            in: 'header',
            name: 'content-type',
            required: true,
            schema: { example: 'application/json', type: 'string' },
            style: 'simple',
          },
          example: 'application/json',
        }),
      traceparent: z
        .string()
        .openapi({
          param: {
            description: 'Identifies the incoming request in a tracing system.',
            in: 'header',
            name: 'traceparent',
            required: true,
            schema: {
              example: '00-083c0ca18bc8d94183f333809a70cd64-bf5e9a641e230540-00',
              type: 'string',
            },
            style: 'simple',
          },
          example: '00-083c0ca18bc8d94183f333809a70cd64-bf5e9a641e230540-00',
        }),
    }),
    body: {
      description: '',
      content: { 'application/json': { schema: OrderPlacementSchema, example: {} } },
      required: true,
    },
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const postFulfillmentEndpointPvtOrdersOrderIdCancelRoute = createRoute({
  method: 'post',
  path: '/{fulfillmentEndpoint}/pvt/orders/{orderId}/cancel',
  tags: ['External Seller'],
  summary: 'Marketplace order cancellation',
  description:
    'This request may be sent from VTEX to the external seller in case of order cancelation. For that, the seller will need to implement the Marketplace order cancellation endpoint. Whenever this request is received by the seler, the order should be canceled and the fulfillment flow should not proceed. \n\nFor the seller to: \n\n- **Evaluate a cancellation request:** it is possible to send an empty body as a response to the cancellation request, meaning that the seller is evaluating whether to proceed with the cancellation or not. \n\n- **Confirm the cancellation request:** it is possible to confirm the order cancellation by the marketplace by responding to the call with a body including only one information: the `marketplaceOrderId`, which identifies the order in the marketplace. The seller should use this ID to trigger the cancellation of the corresponding order. The seller should then respond with the same `marketplaceOrderId` and also with the `orderId`, which identifies the order in the seller, the date and time of the notification receipt, and a protocol code that confirms the receipt of the request (which may have the value `null`). \n\n- **Refuse a cancellation request:** it is possible to to [send the Invoice](https://developers.vtex.com/vtex-rest-api/reference/external-seller#send-invoice), meaning that the cancellation has been denied, and the flow continues to the [Order Invoicing](https://developers.vtex.com/vtex-rest-api/docs/external-seller-integration-connector#order-invoicing) step, and the ones that follow it. \n\nThis call should be made twice: once for the *Evaluate cancellation request* scenario, and a second time to *Confirm cancellation* or *Refuse cancellation*.',
  operationId: 'mkp-order-cancellation',
  request: {
    params: z.object({
      fulfillmentEndpoint: z
        .string()
        .openapi({
          param: {
            description:
              "This is the fulfillment endpoint registered for each specific external seller in the **seller management** section of VTEX's admin panel.",
            in: 'path',
            name: 'fulfillmentEndpoint',
            required: true,
            schema: { example: 'marketplaceexample.externalseller.com', type: 'string' },
            style: 'simple',
          },
          example: 'marketplaceexample.externalseller.com',
        }),
      orderId: z
        .string()
        .default('1138342255777-01')
        .openapi({
          param: {
            description: 'ID of the order being fulfilled',
            in: 'path',
            name: 'orderId',
            required: true,
            schema: { default: '1138342255777-01', type: 'string' },
            style: 'simple',
          },
        }),
    }),
    headers: z.object({
      Accept: z
        .string()
        .openapi({
          param: {
            description:
              'HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.',
            in: 'header',
            name: 'Accept',
            required: true,
            schema: { example: 'application/json', type: 'string' },
            style: 'simple',
          },
          example: 'application/json',
        }),
      'Content-Type': z
        .string()
        .openapi({
          param: {
            description: 'Describes the type of the content being sent.',
            in: 'header',
            name: 'Content-Type',
            required: true,
            schema: { example: 'application/json', type: 'string' },
            style: 'simple',
          },
          example: 'application/json',
        }),
    }),
    body: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .object({
              marketplaceOrderId: z
                .string()
                .default('1138342255777-01')
                .openapi({
                  description:
                    'Identifies the order. The seller should use this ID to trigger the cancellation of the corresponding order.',
                }),
            })
            .openapi({ required: ['marketplaceOrderId'] }),
          example: { marketplaceOrderId: '1138342255777-01' },
        },
      },
      required: true,
    },
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const postFulfillmentEndpointPvtOrdersSellerOrderIdFulfillRoute = createRoute({
  method: 'post',
  path: '/{fulfillmentEndpoint}/pvt/orders/{sellerOrderId}/fulfill',
  tags: ['External Seller'],
  summary: 'Authorize fulfillment',
  description:
    'This request is sent from VTEX to the seller after the payment is approved, to notify them that the fulfillment process can start.',
  operationId: 'authorize-fulfillment',
  request: {
    params: z.object({
      fulfillmentEndpoint: z
        .string()
        .openapi({
          param: {
            description:
              "This is the fulfillment endpoint registered for each specific external seller in the **seller management** section of VTEX's admin panel.",
            in: 'path',
            name: 'fulfillmentEndpoint',
            required: true,
            schema: { example: 'https://marketplaceexample.externalseller.com', type: 'string' },
            style: 'simple',
          },
          example: 'https://marketplaceexample.externalseller.com',
        }),
      sellerOrderId: z
        .string()
        .openapi({
          param: {
            description:
              "Seller's order ID of the order ready for fulfillment. The seller can be a VTEX seller or an external one.",
            example: '00-1268540501456-01',
            in: 'path',
            name: 'sellerOrderId',
            required: true,
            schema: { example: '00-1268540501456-01', type: 'string' },
            style: 'simple',
          },
          example: '00-1268540501456-01',
        }),
    }),
    headers: z.object({
      Accept: z
        .string()
        .openapi({
          param: {
            description:
              'HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.',
            in: 'header',
            name: 'Accept',
            required: true,
            schema: { example: 'application/json', type: 'string' },
            style: 'simple',
          },
          example: 'application/json',
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
          schema: z
            .object({
              marketplaceOrderId: z
                .string()
                .openapi({
                  description:
                    'Identifies the order. The seller should use this ID to trigger the fulfillment process of the corresponding order.',
                  example: '1138342255777-01',
                }),
            })
            .openapi({ required: ['marketplaceOrderId'] }),
        },
      },
      required: true,
    },
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const postMarketplaceServicesEndpointPvtOrdersMarketplaceOrderIdCancelRoute = createRoute({
  method: 'post',
  path: '/{marketplaceServicesEndpoint}/pvt/orders/{marketplaceOrderId}/cancel',
  tags: ['External Seller'],
  summary: 'Cancel order in marketplace',
  description:
    'This request is sent by the external seller to the VTEX marketplace to cancel an order.',
  operationId: 'cancel-order-in-marketplace',
  request: {
    params: z.object({
      marketplaceServicesEndpoint: z
        .string()
        .openapi({
          param: {
            description:
              'This is an endpoint sent from VTEX to the external seller in the [Order placement request](https://developers.vtex.com/vtex-rest-api/reference/external-seller#order-placement).',
            in: 'path',
            name: 'marketplaceServicesEndpoint',
            required: true,
            schema: { example: 'marketplaceservicesendpoint.myvtex.com', type: 'string' },
            style: 'simple',
          },
          example: 'marketplaceservicesendpoint.myvtex.com',
        }),
      marketplaceOrderId: z
        .string()
        .openapi({
          param: {
            description: 'Identifies the order in the marketplace.',
            in: 'path',
            name: 'marketplaceOrderId',
            required: true,
            schema: { example: '1138342255777-01', type: 'string' },
            style: 'simple',
          },
          example: '1138342255777-01',
        }),
    }),
    headers: z.object({
      Accept: z
        .string()
        .openapi({
          param: {
            description:
              'HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.',
            in: 'header',
            name: 'Accept',
            required: true,
            schema: { example: 'application/json', type: 'string' },
            style: 'simple',
          },
          example: 'application/json',
        }),
      'Content-Type': z
        .string()
        .openapi({
          param: {
            description: 'Describes the type of the content being sent.',
            in: 'header',
            name: 'Content-Type',
            required: true,
            schema: { example: 'application/json', type: 'string' },
            style: 'simple',
          },
          example: 'application/json',
        }),
    }),
    body: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .object({
              reason: z
                .string()
                .openapi({
                  description: "Insert here the reason for the order's cancellation.",
                  example: 'Product is unavailable',
                }),
            })
            .openapi({ required: ['reason'] }),
        },
      },
      required: true,
    },
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const postMarketplaceServicesEndpointPvtOrdersMarketplaceOrderIdInvoiceRoute = createRoute({
  method: 'post',
  path: '/{marketplaceServicesEndpoint}/pvt/orders/{marketplaceOrderId}/invoice',
  tags: ['External Seller'],
  summary: 'Send invoice',
  description:
    'This request is sent by the external seller to the VTEX marketplace to send invoice information.\n\nThis can be necessary in a regular order or in the case of a return. The `type` field is used to indicate which of these is the case.',
  operationId: 'send-invoice',
  request: {
    params: z.object({
      marketplaceServicesEndpoint: z
        .string()
        .openapi({
          param: {
            description:
              'This is an endpoint sent from VTEX to the external seller in the [Order placement request](https://developers.vtex.com/vtex-rest-api/reference/external-seller#order-placement).',
            in: 'path',
            name: 'marketplaceServicesEndpoint',
            required: true,
            schema: { example: 'marketplaceservicesendpoint.myvtex.com', type: 'string' },
            style: 'simple',
          },
          example: 'marketplaceservicesendpoint.myvtex.com',
        }),
      marketplaceOrderId: z
        .string()
        .openapi({
          param: {
            description: 'Identifies the order in the marketplace.',
            in: 'path',
            name: 'marketplaceOrderId',
            required: true,
            schema: { example: '1138342255777-01', type: 'string' },
            style: 'simple',
          },
          example: '1138342255777-01',
        }),
    }),
    headers: z.object({
      Accept: z
        .string()
        .openapi({
          param: {
            description:
              'HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.',
            in: 'header',
            name: 'Accept',
            required: true,
            schema: { example: 'application/json', type: 'string' },
            style: 'simple',
          },
          example: 'application/json',
        }),
      'Content-Type': z
        .string()
        .openapi({
          param: {
            description: 'Describes the type of the content being sent.',
            in: 'header',
            name: 'Content-Type',
            required: true,
            schema: { example: 'application/json', type: 'string' },
            style: 'simple',
          },
          example: 'application/json',
        }),
    }),
    body: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .object({
              courier: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Courier, if available on invoice.',
                  example: 'courier-example',
                }),
              invoiceNumber: z
                .string()
                .openapi({ description: 'Invoice number', example: 'NFe-00002' }),
              invoiceValue: z
                .int()
                .exactOptional()
                .openapi({ description: 'Invoice value.', example: 6000 }),
              issuanceDate: z
                .string()
                .exactOptional()
                .openapi({ description: 'Issuance date.', example: '2021-05-21T10:00:00' }),
              items: z
                .array(
                  z
                    .object({
                      id: z.string().openapi({ description: 'SKU ID.', example: '6' }),
                      price: z.int().openapi({ description: 'Price of the item.', example: 5500 }),
                      quantity: z
                        .int()
                        .openapi({
                          description: 'Quantity of items of the SKU in the cart.',
                          example: 1,
                        }),
                    })
                    .openapi({ description: '', required: ['id', 'quantity', 'price'] }),
                )
                .openapi({ description: 'Array containing the order items.' }),
              trackingNumber: z
                .string()
                .exactOptional()
                .openapi({ description: 'Tracking number.', example: '12345678abc' }),
              trackingUrl: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Tracking URL.',
                  example: 'https://courier-example.com/tracking',
                }),
              type: z
                .string()
                .openapi({
                  description:
                    'Indicates the type of the invoice. Use `"Output"` for regular orders and `"Input"` for returns.',
                  example: 'Output',
                }),
            })
            .openapi({ required: ['type', 'invoiceNumber', 'items'] }),
        },
      },
      required: true,
    },
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const postMarketplaceServicesEndpointPvtOrdersMarketplaceOrderIdInvoiceInvoiceNumberRoute =
  createRoute({
    method: 'post',
    path: '/{marketplaceServicesEndpoint}/pvt/orders/{marketplaceOrderId}/invoice/{invoiceNumber}',
    tags: ['External Seller'],
    summary: 'Send tracking information',
    description:
      "This request is sent by the external seller to the VTEX marketplace to add tracking information to a given order's invoice, in case it is necessary to do so after the invoice has been sent.",
    operationId: 'send-tracking-information',
    request: {
      params: z.object({
        marketplaceServicesEndpoint: z
          .string()
          .openapi({
            param: {
              description:
                'This is an endpoint sent from VTEX to the external seller in the [Order placement request](https://developers.vtex.com/vtex-rest-api/reference/external-seller#order-placement).',
              in: 'path',
              name: 'marketplaceServicesEndpoint',
              required: true,
              schema: { example: 'marketplaceservicesendpoint.myvtex.com', type: 'string' },
              style: 'simple',
            },
            example: 'marketplaceservicesendpoint.myvtex.com',
          }),
        marketplaceOrderId: z
          .string()
          .openapi({
            param: {
              description: 'Identifies the order in the marketplace.',
              in: 'path',
              name: 'marketplaceOrderId',
              required: true,
              schema: { example: '1138342255777-01', type: 'string' },
              style: 'simple',
            },
            example: '1138342255777-01',
          }),
        invoiceNumber: z
          .string()
          .openapi({
            param: {
              description: 'Invoice number.',
              in: 'path',
              name: 'invoiceNumber',
              required: true,
              schema: { example: 'NFe-00002', type: 'string' },
              style: 'simple',
            },
            example: 'NFe-00002',
          }),
      }),
      headers: z.object({
        Accept: z
          .string()
          .openapi({
            param: {
              description:
                'HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.',
              in: 'header',
              name: 'Accept',
              required: true,
              schema: { example: 'application/json', type: 'string' },
              style: 'simple',
            },
            example: 'application/json',
          }),
        'Content-Type': z
          .string()
          .openapi({
            param: {
              description: 'Describes the type of the content being sent.',
              in: 'header',
              name: 'Content-Type',
              required: true,
              schema: { example: 'application/json', type: 'string' },
              style: 'simple',
            },
            example: 'application/json',
          }),
      }),
      body: {
        description: '',
        content: {
          'application/json': {
            schema: z
              .object({
                courier: z
                  .string()
                  .exactOptional()
                  .openapi({ description: 'Courier.', example: 'courier-example' }),
                dispatchedDate: z
                  .string()
                  .exactOptional()
                  .openapi({ description: 'Date of order dispatch.', example: '2021-06-09' }),
                trackingNumber: z
                  .string()
                  .exactOptional()
                  .openapi({ description: 'Tracking number.', example: '12345678abc' }),
                trackingUrl: z
                  .string()
                  .exactOptional()
                  .openapi({
                    description: 'Tracking URL.',
                    example: 'https://courier-example.com/tracking',
                  }),
              })
              .openapi({ required: [] }),
          },
        },
        required: true,
      },
    },
    responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
  })

export const postMarketplaceServicesEndpointPvtOrdersMarketplaceOrderIdInvoiceInvoiceNumberTrackingRoute =
  createRoute({
    method: 'post',
    path: '/{marketplaceServicesEndpoint}/pvt/orders/{marketplaceOrderId}/invoice/{invoiceNumber}/tracking',
    tags: ['External Seller'],
    summary: 'Update tracking status',
    description:
      "This request is sent by the external seller to the VTEX marketplace to update a given order's tracking status.",
    operationId: 'update-tracking-status',
    request: {
      params: z.object({
        marketplaceServicesEndpoint: z
          .string()
          .openapi({
            param: {
              description:
                'This is an endpoint sent from VTEX to the external seller in the [Order placement request](https://developers.vtex.com/vtex-rest-api/reference/external-seller#order-placement).',
              in: 'path',
              name: 'marketplaceServicesEndpoint',
              required: true,
              schema: { example: 'marketplaceservicesendpoint.myvtex.com', type: 'string' },
              style: 'simple',
            },
            example: 'marketplaceservicesendpoint.myvtex.com',
          }),
        marketplaceOrderId: z
          .string()
          .openapi({
            param: {
              description: 'Identifies the order in the marketplace.',
              in: 'path',
              name: 'marketplaceOrderId',
              required: true,
              schema: { example: '1138342255777-01', type: 'string' },
              style: 'simple',
            },
            example: '1138342255777-01',
          }),
        invoiceNumber: z
          .string()
          .openapi({
            param: {
              description: 'Invoice number.',
              in: 'path',
              name: 'invoiceNumber',
              required: true,
              schema: { example: 'NFe-00002', type: 'string' },
              style: 'simple',
            },
            example: 'NFe-00002',
          }),
      }),
      headers: z.object({
        Accept: z
          .string()
          .openapi({
            param: {
              description:
                'HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.',
              in: 'header',
              name: 'Accept',
              required: true,
              schema: { example: 'application/json', type: 'string' },
              style: 'simple',
            },
            example: 'application/json',
          }),
        'Content-Type': z
          .string()
          .openapi({
            param: {
              description: 'Describes the type of the content being sent.',
              in: 'header',
              name: 'Content-Type',
              required: true,
              schema: { example: 'application/json', type: 'string' },
              style: 'simple',
            },
            example: 'application/json',
          }),
      }),
      body: {
        description: '',
        content: {
          'application/json': {
            schema: z
              .object({
                events: z
                  .array(
                    z
                      .object({
                        city: z
                          .string()
                          .exactOptional()
                          .openapi({
                            description: 'City where the event ocurred.',
                            example: 'Rio de Janeiro',
                          }),
                        date: z
                          .string()
                          .exactOptional()
                          .openapi({
                            description: 'Date when event ocurred.',
                            example: '2021-03-16',
                          }),
                        description: z
                          .string()
                          .exactOptional()
                          .openapi({
                            description: 'Description of the event.',
                            example: 'Order delivered.',
                          }),
                        state: z
                          .string()
                          .exactOptional()
                          .openapi({
                            description: 'State where the event ocurred.',
                            example: 'Rio de Janeiro',
                          }),
                      })
                      .openapi({ required: [] }),
                  )
                  .exactOptional()
                  .openapi({
                    description: 'Array containing information on each tracking event received.',
                  }),
                isDelivered: z
                  .boolean()
                  .openapi({
                    description:
                      'Indicates if order has been delivered. `false` if it is in transit.',
                    example: true,
                  }),
              })
              .openapi({ required: ['isDelivered'] }),
          },
        },
        required: true,
      },
    },
    responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
  })
