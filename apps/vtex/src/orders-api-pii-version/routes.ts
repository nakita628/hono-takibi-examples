import { createRoute, z } from '@hono/zod-openapi'

const AddressSchema = z
  .object({
    addressId: z.string().openapi({ description: 'Address ID.' }),
    addressType: z.string().openapi({ description: 'Address type.' }),
    city: z.string().openapi({ description: 'Address city.' }),
    complement: z.string().openapi({ description: 'Address complement.' }),
    country: z.string().openapi({ description: 'Address country.' }),
    geoCoordinates: z.array(z.string()).openapi({ description: 'Geolocation coordinates.' }),
    neighborhood: z.string().openapi({ description: 'Address neighborhood.' }),
    number: z.string().openapi({ description: 'Address number.' }),
    postalCode: z.string().openapi({ description: 'Address postal code.' }),
    receiverName: z.string().openapi({ description: 'Address receiver name.' }),
    reference: z.string().nullable().openapi({ description: 'Address reference.' }),
    state: z.string().openapi({ description: 'Address state.' }),
    street: z.string().openapi({ description: 'Address street.' }),
  })
  .openapi({
    example: {
      addressId: '-1425945657910',
      addressType: 'residential',
      city: 'Rio de Janeiro',
      complement: '3',
      country: 'BRA',
      geoCoordinates: [],
      neighborhood: 'Botafogo',
      number: '300',
      postalCode: '22250-040',
      receiverName: 'Rodrigo Cunha',
      reference: null,
      state: 'RJ',
      street: 'Praia de Botafogo',
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
    title: 'Address',
  })
  .openapi('Address')

const BRLSchema = z
  .object({
    Count: z.int32().openapi({ description: 'Count.' }),
    Facets: z.string().nullable().openapi({ description: 'Facets.' }),
    Max: z.int32().openapi({ description: 'Maximum.' }),
    Mean: z.number().openapi({ description: 'Mean.' }),
    Min: z.int32().openapi({ description: 'Minimum.' }),
    Missing: z.int32().openapi({ description: 'Missing.' }),
    StdDev: z.number().openapi({ description: 'Standard deviation.' }),
    Sum: z.int32().openapi({ description: 'Sum.' }),
    SumOfSquares: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64', description: 'Sum of squares.' }),
  })
  .openapi({
    example: {
      Count: 84,
      Facets: null,
      Max: 21526180,
      Mean: 262672.75,
      Min: 1160,
      Missing: 0,
      StdDev: 2348087.3869179883,
      Sum: 22064511,
      SumOfSquares: 463417439039853,
    },
    required: ['Count', 'Max', 'Mean', 'Min', 'Missing', 'StdDev', 'Sum', 'SumOfSquares', 'Facets'],
    title: 'BRL',
  })
  .openapi('BRL')

const BRL1Schema = z
  .object({
    Count: z.int32().openapi({ description: 'Count.' }),
    Facets: z.string().nullable().openapi({ description: 'Facets.' }),
    Max: z.int32().openapi({ description: 'Maximum.' }),
    Mean: z.number().openapi({ description: 'Mean.' }),
    Min: z.int32().openapi({ description: 'Minimum.' }),
    Missing: z.int32().openapi({ description: 'Missing.' }),
    StdDev: z.number().openapi({ description: 'Standard deviation.' }),
    Sum: z.int32().openapi({ description: 'Sum.' }),
    SumOfSquares: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64', description: 'Sum of squares.' }),
  })
  .openapi({
    example: {
      Count: 84,
      Facets: null,
      Max: 89,
      Mean: 2.2261904761904763,
      Min: 1,
      Missing: 0,
      StdDev: 9.660940100525016,
      Sum: 187,
      SumOfSquares: 8163,
    },
    required: ['Count', 'Max', 'Mean', 'Min', 'Missing', 'StdDev', 'Sum', 'SumOfSquares', 'Facets'],
    title: 'BRL1',
  })
  .openapi('BRL1')

const ItemsRemovedSchema = z
  .object({
    id: z.string().openapi({ description: 'Id of removed item.' }),
    name: z.string().openapi({ description: 'Name of removed item.' }),
    price: z.int32().openapi({ description: 'Removed items price in cents.' }),
    quantity: z.int32().openapi({ description: 'Quantity of items removed.' }),
    unitMultiplier: z.string().nullable().openapi({ description: 'Removed item unit multiplier.' }),
  })
  .openapi({
    example: {
      id: '1234568358',
      name: 'Bay Max L',
      price: 3290,
      quantity: 1,
      unitMultiplier: null,
    },
    required: ['id', 'name', 'quantity', 'price', 'unitMultiplier'],
    title: 'ItemsRemoved',
  })
  .openapi('ItemsRemoved')

const ReceiptSchema = z
  .object({
    date: z.string().openapi({ description: 'Date.' }),
    orderId: z.string().openapi({ description: 'Order ID.' }),
    receipt: z.string().openapi({ description: 'Receipt.' }),
  })
  .openapi({
    example: {
      date: '2019-02-06T20:46:04.4003606+00:00',
      orderId: 'v5195004lux-01',
      receipt: '029f9ab8-751a-4b1e-bf81-7dd25d14b49b',
    },
    required: ['date', 'orderId', 'receipt'],
    title: 'Receipt',
  })
  .openapi('Receipt')

const ChangesDatumSchema = z
  .object({
    discountValue: z.int32().openapi({ description: 'Discount value in cents.' }),
    incrementValue: z.int32().openapi({ description: 'Order value increment in cents.' }),
    itemsAdded: z
      .array(z.string())
      .openapi({ description: 'Array with information on items added to the order.' }),
    itemsRemoved: z
      .array(ItemsRemovedSchema)
      .openapi({ description: 'Array with information on items removed from the order.' }),
    reason: z.string().openapi({ description: 'Change reason.' }),
    receipt: ReceiptSchema,
  })
  .openapi({
    example: {
      discountValue: 3290,
      incrementValue: 0,
      itemsAdded: [],
      itemsRemoved: [
        { id: '1234568358', name: 'Bay Max L', price: 3290, quantity: 1, unitMultiplier: null },
      ],
      reason: 'Blah',
      receipt: {
        date: '2019-02-06T20:46:04.4003606+00:00',
        orderId: 'v5195004lux-01',
        receipt: '029f9ab8-751a-4b1e-bf81-7dd25d14b49b',
      },
    },
    required: [
      'reason',
      'discountValue',
      'incrementValue',
      'itemsAdded',
      'itemsRemoved',
      'receipt',
    ],
    title: 'ChangesDatum',
  })
  .openapi('ChangesDatum')

const ChangesAttachmentSchema = z
  .object({
    changesData: z
      .array(ChangesDatumSchema)
      .openapi({ description: 'Array with data on order changes.' }),
    id: z.string().openapi({ description: 'Change ID.' }),
  })
  .openapi({
    example: {
      changesData: [
        {
          discountValue: 3290,
          incrementValue: 0,
          itemsAdded: [],
          itemsRemoved: [
            { id: '1234568358', name: 'Bay Max L', price: 3290, quantity: 1, unitMultiplier: null },
          ],
          reason: 'Blah',
          receipt: {
            date: '2019-02-06T20:46:04.4003606+00:00',
            orderId: 'v5195004lux-01',
            receipt: '029f9ab8-751a-4b1e-bf81-7dd25d14b49b',
          },
        },
      ],
      id: 'changeAttachment',
    },
    required: ['id', 'changesData'],
    title: 'ChangesAttachment',
  })
  .openapi('ChangesAttachment')

const ClientProfileDataSchema = z
  .object({
    corporateDocument: z
      .string()
      .nullable()
      .openapi({ description: 'Company document, in case client is corporate.' }),
    corporateName: z
      .string()
      .nullable()
      .openapi({ description: 'Company name, in case client is corporate.' }),
    corporatePhone: z
      .string()
      .nullable()
      .openapi({ description: 'Company telephone number, in case client is corporate.' }),
    customerClass: z.string().nullable().openapi({ description: 'Customer class.' }),
    document: z.string().openapi({ description: 'Client document.' }),
    documentType: z.string().openapi({ description: 'Client document type.' }),
    email: z.string().openapi({ description: 'Client email address.' }),
    firstName: z.string().openapi({ description: 'Client first name.' }),
    id: z.string().openapi({ description: 'Client ID.' }),
    isCorporate: z.boolean().openapi({ description: 'Indicates whether client is corporate.' }),
    lastName: z.string().openapi({ description: 'Client last name.' }),
    phone: z.string().openapi({ description: 'Client telephone number.' }),
    stateInscription: z
      .string()
      .nullable()
      .openapi({ description: 'Company state inscription, in case client is corporate.' }),
    tradeName: z
      .string()
      .nullable()
      .openapi({ description: 'Company trade name, in case client is corporate.' }),
    userProfileId: z.string().openapi({ description: 'User profile ID.' }),
  })
  .openapi({
    example: {
      corporateDocument: null,
      corporateName: null,
      corporatePhone: null,
      customerClass: null,
      document: '11047867702',
      documentType: 'cpf',
      email: 'rodrigo.cunha@vtex.com.br',
      firstName: 'Rodrigo',
      id: 'clientProfileData',
      isCorporate: false,
      lastName: 'VTEX',
      phone: '+5521972321094',
      stateInscription: null,
      tradeName: null,
      userProfileId: '5a3692de-358a-4bea-8885-044bce33bb93',
    },
    required: [
      'id',
      'email',
      'firstName',
      'lastName',
      'documentType',
      'document',
      'phone',
      'corporateName',
      'tradeName',
      'corporateDocument',
      'stateInscription',
      'corporatePhone',
      'isCorporate',
      'userProfileId',
      'customerClass',
    ],
    title: 'ClientProfileData',
  })
  .openapi('ClientProfileData')

const CurrencyCodeSchema = z
  .object({ BRL: BRLSchema })
  .openapi({
    example: {
      BRL: {
        Count: 84,
        Facets: null,
        Max: 21526180,
        Mean: 262672.75,
        Min: 1160,
        Missing: 0,
        StdDev: 2348087.3869179883,
        Sum: 22064511,
        SumOfSquares: 463417439039853,
      },
    },
    required: ['BRL'],
    title: 'CurrencyCode',
  })
  .openapi('CurrencyCode')

const CurrencyCode1Schema = z
  .object({ BRL: BRL1Schema })
  .openapi({
    example: {
      BRL: {
        Count: 84,
        Facets: null,
        Max: 89,
        Mean: 2.2261904761904763,
        Min: 1,
        Missing: 0,
        StdDev: 9.660940100525016,
        Sum: 187,
        SumOfSquares: 8163,
      },
    },
    required: ['BRL'],
    title: 'CurrencyCode1',
  })
  .openapi('CurrencyCode1')

const CurrencyFormatInfoSchema = z
  .object({
    CurrencyDecimalDigits: z.int32().openapi({ description: 'Currency decimal digits.' }),
    CurrencyDecimalSeparator: z.string().openapi({ description: 'Currency decimal separator.' }),
    CurrencyGroupSeparator: z.string().openapi({ description: 'Currency group separator.' }),
    CurrencyGroupSize: z.int32().openapi({ description: 'Currency group size.' }),
    StartsWithCurrencySymbol: z
      .boolean()
      .openapi({
        description: 'Indicates whether value representations start with currency symbol.',
      }),
  })
  .openapi({
    example: {
      CurrencyDecimalDigits: 2,
      CurrencyDecimalSeparator: ',',
      CurrencyGroupSeparator: '.',
      CurrencyGroupSize: 3,
      StartsWithCurrencySymbol: true,
    },
    required: [
      'CurrencyDecimalDigits',
      'CurrencyDecimalSeparator',
      'CurrencyGroupSeparator',
      'CurrencyGroupSize',
      'StartsWithCurrencySymbol',
    ],
    title: 'CurrencyFormatInfo',
  })
  .openapi('CurrencyFormatInfo')

const DeliveryIdSchema = z
  .object({
    courierId: z.string().openapi({ description: 'Courier ID.' }),
    courierName: z.string().openapi({ description: 'Courier name.' }),
    dockId: z.string().openapi({ description: 'Dock ID.' }),
    quantity: z.int32().openapi({ description: 'Quantity.' }),
    warehouseId: z.string().openapi({ description: 'Warehouse ID.' }),
  })
  .openapi({
    example: {
      courierId: '197a56f',
      courierName: 'Todos os CEPS',
      dockId: '1',
      quantity: 1,
      warehouseId: '1_1',
    },
    required: ['courierId', 'courierName', 'dockId', 'quantity', 'warehouseId'],
    title: 'DeliveryId',
  })
  .openapi('DeliveryId')

const FulfillmentSchema = z
  .object({
    Count: z.int32().openapi({ description: 'Count.' }),
    Facets: z.string().nullable().openapi({ description: 'Facets.' }),
    Max: z.int32().openapi({ description: 'Maximum.' }),
    Mean: z.number().openapi({ description: 'Mean.' }),
    Min: z.int32().openapi({ description: 'Minimum.' }),
    Missing: z.int32().openapi({ description: 'Missing.' }),
    StdDev: z.number().openapi({ description: 'Standard deviation.' }),
    Sum: z.int32().openapi({ description: 'Sum.' }),
    SumOfSquares: z.int32().openapi({ description: 'Sum of squares.' }),
  })
  .openapi({
    example: {
      Count: 68,
      Facets: null,
      Max: 11150,
      Mean: 1395.5882352941176,
      Min: 1250,
      Missing: 0,
      StdDev: 1200.5513439298484,
      Sum: 94900,
      SumOfSquares: 229010000,
    },
    required: ['Count', 'Max', 'Mean', 'Min', 'Missing', 'StdDev', 'Sum', 'SumOfSquares', 'Facets'],
    title: 'Fulfillment',
  })
  .openapi('Fulfillment')

const Marketplace1Schema = z
  .object({
    Count: z.int32().openapi({ description: 'Count.' }),
    Facets: z.string().nullable().openapi({ description: 'Facets.' }),
    Max: z.int32().openapi({ description: 'Maximum.' }),
    Mean: z.number().openapi({ description: 'Mean.' }),
    Min: z.int32().openapi({ description: 'Minimum.' }),
    Missing: z.int32().openapi({ description: 'Missing.' }),
    StdDev: z.number().openapi({ description: 'Standard deviation.' }),
    Sum: z.int32().openapi({ description: 'Sum.' }),
    SumOfSquares: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64', description: 'Sum of squares.' }),
  })
  .openapi({
    example: {
      Count: 16,
      Facets: null,
      Max: 21526180,
      Mean: 1373100.6875,
      Min: 1160,
      Missing: 0,
      StdDev: 5374326.141087491,
      Sum: 21969611,
      SumOfSquares: 463417210029853,
    },
    required: ['Count', 'Max', 'Mean', 'Min', 'Missing', 'StdDev', 'Sum', 'SumOfSquares', 'Facets'],
    title: 'Marketplace1',
  })
  .openapi('Marketplace1')

const OriginSchema = z
  .object({ Fulfillment: FulfillmentSchema, Marketplace: Marketplace1Schema })
  .openapi({
    example: {
      Fulfillment: {
        Count: 68,
        Facets: null,
        Max: 11150,
        Mean: 1395.5882352941176,
        Min: 1250,
        Missing: 0,
        StdDev: 1200.5513439298484,
        Sum: 94900,
        SumOfSquares: 229010000,
      },
      Marketplace: {
        Count: 16,
        Facets: null,
        Max: 21526180,
        Mean: 1373100.6875,
        Min: 1160,
        Missing: 0,
        StdDev: 5374326.141087491,
        Sum: 21969611,
        SumOfSquares: 463417210029853,
      },
    },
    required: ['Fulfillment', 'Marketplace'],
    title: 'Origin',
  })
  .openapi('Origin')

const FacetsSchema = z
  .object({ currencyCode: CurrencyCodeSchema, origin: OriginSchema })
  .openapi({
    example: {
      currencyCode: {
        BRL: {
          Count: 84,
          Facets: null,
          Max: 21526180,
          Mean: 262672.75,
          Min: 1160,
          Missing: 0,
          StdDev: 2348087.3869179883,
          Sum: 22064511,
          SumOfSquares: 463417439039853,
        },
      },
      origin: {
        Fulfillment: {
          Count: 68,
          Facets: null,
          Max: 11150,
          Mean: 1395.5882352941176,
          Min: 1250,
          Missing: 0,
          StdDev: 1200.5513439298484,
          Sum: 94900,
          SumOfSquares: 229010000,
        },
        Marketplace: {
          Count: 16,
          Facets: null,
          Max: 21526180,
          Mean: 1373100.6875,
          Min: 1160,
          Missing: 0,
          StdDev: 5374326.141087491,
          Sum: 21969611,
          SumOfSquares: 463417210029853,
        },
      },
    },
    required: ['origin', 'currencyCode'],
    title: 'Facets',
  })
  .openapi('Facets')

const Fulfillment1Schema = z
  .object({
    Count: z.int32().openapi({ description: 'Count.' }),
    Facets: z.string().nullable().openapi({ description: 'Facets.' }),
    Max: z.int32().openapi({ description: 'Maximum.' }),
    Mean: z.number().openapi({ description: 'Mean.' }),
    Min: z.int32().openapi({ description: 'Minimum.' }),
    Missing: z.int32().openapi({ description: 'Missing.' }),
    StdDev: z.number().openapi({ description: 'Standard deviation.' }),
    Sum: z.int32().openapi({ description: 'Sum.' }),
    SumOfSquares: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64', description: 'Sum of squares.' }),
  })
  .openapi({
    example: {
      Count: 68,
      Facets: null,
      Max: 1,
      Mean: 1,
      Min: 1,
      Missing: 0,
      StdDev: 0,
      Sum: 68,
      SumOfSquares: 68,
    },
    required: ['Count', 'Max', 'Mean', 'Min', 'Missing', 'StdDev', 'Sum', 'SumOfSquares', 'Facets'],
    title: 'Fulfillment1',
  })
  .openapi('Fulfillment1')

const Marketplace2Schema = z
  .object({
    Count: z.int32().openapi({ description: 'Count.' }),
    Facets: z.string().nullable().openapi({ description: 'Facets.' }),
    Max: z.int32().openapi({ description: 'Maximum.' }),
    Mean: z.number().openapi({ description: 'Mean.' }),
    Min: z.int32().openapi({ description: 'Minimum.' }),
    Missing: z.int32().openapi({ description: 'Missing.' }),
    StdDev: z.number().openapi({ description: 'Standard deviation.' }),
    Sum: z.int32().openapi({ description: 'Sum.' }),
    SumOfSquares: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64', description: 'Sum of squares.' }),
  })
  .openapi({
    example: {
      Count: 16,
      Facets: null,
      Max: 89,
      Mean: 7.4375,
      Min: 1,
      Missing: 0,
      StdDev: 21.92401651157926,
      Sum: 119,
      SumOfSquares: 8095,
    },
    required: ['Count', 'Max', 'Mean', 'Min', 'Missing', 'StdDev', 'Sum', 'SumOfSquares', 'Facets'],
    title: 'Marketplace2',
  })
  .openapi('Marketplace2')

const Origin1Schema = z
  .object({ Fulfillment: Fulfillment1Schema, Marketplace: Marketplace2Schema })
  .openapi({
    example: {
      Fulfillment: {
        Count: 68,
        Facets: null,
        Max: 1,
        Mean: 1,
        Min: 1,
        Missing: 0,
        StdDev: 0,
        Sum: 68,
        SumOfSquares: 68,
      },
      Marketplace: {
        Count: 16,
        Facets: null,
        Max: 89,
        Mean: 7.4375,
        Min: 1,
        Missing: 0,
        StdDev: 21.92401651157926,
        Sum: 119,
        SumOfSquares: 8095,
      },
    },
    required: ['Fulfillment', 'Marketplace'],
    title: 'Origin1',
  })
  .openapi('Origin1')

const Facets1Schema = z
  .object({ currencyCode: CurrencyCode1Schema, origin: Origin1Schema })
  .openapi({
    example: {
      currencyCode: {
        BRL: {
          Count: 84,
          Facets: null,
          Max: 89,
          Mean: 2.2261904761904763,
          Min: 1,
          Missing: 0,
          StdDev: 9.660940100525016,
          Sum: 187,
          SumOfSquares: 8163,
        },
      },
      origin: {
        Fulfillment: {
          Count: 68,
          Facets: null,
          Max: 1,
          Mean: 1,
          Min: 1,
          Missing: 0,
          StdDev: 0,
          Sum: 68,
          SumOfSquares: 68,
        },
        Marketplace: {
          Count: 16,
          Facets: null,
          Max: 89,
          Mean: 7.4375,
          Min: 1,
          Missing: 0,
          StdDev: 21.92401651157926,
          Sum: 119,
          SumOfSquares: 8095,
        },
      },
    },
    required: ['origin', 'currencyCode'],
    title: 'Facets1',
  })
  .openapi('Facets1')

const Item1Schema = z
  .object({
    itemIndex: z.string().openapi({ description: 'Index of the SKU being invoiced.', example: 67 }),
    price: z
      .int32()
      .openapi({
        description:
          'Total price of the SKU being invoiced in cents. Do not use any decimal separator. For instance, `$24.99` should be represented as `2499`.',
        example: 2499,
      }),
    quantity: z
      .int32()
      .openapi({ description: 'Quantity cof the SKU being invoiced.', example: 3 }),
  })
  .openapi({
    example: { id: '1234', price: 10000, quantity: 1 },
    required: ['itemIndex', 'price', 'quantity'],
    title: 'Item1',
  })
  .openapi('Item1')

const InvoiceNotificationRequestSchema = z
  .object({
    cfop: z
      .string()
      .exactOptional()
      .openapi({ description: 'Fiscal code used in Brazil.', example: '6.104' }),
    courier: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The name of the carrier responsible for delivering the order.\n\r> This field should only be used when sending **tracking** information. When the request is used for sending the invoice, this field should be left empty (`""`).',
      }),
    extraValue: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'Extra value in the invoice in cents. Do not use any decimal separator. For instance, `$24.99` should be represented as `2499`.',
        example: 100,
      }),
    invoiceKey: z.string().nullable().exactOptional().openapi({ description: 'Invoice key.' }),
    invoiceNumber: z
      .string()
      .openapi({ description: 'Number that identifies the invoice.', example: '123456789' }),
    invoiceUrl: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'URL of the invoice. Can be used to send the URL of an XML file, for example, which is useful for some integrations.',
      }),
    invoiceValue: z
      .string()
      .openapi({
        description:
          'Total amount being invoiced in cents. Do not use any decimal separator. For instance, `$24.99` should be represented as `2499`.',
        example: 2499,
      }),
    issuedDate: z
      .string()
      .openapi({
        description: 'Issuance date of the invoice in ISO format.',
        example: '2020-07-15',
      }),
    items: z
      .array(Item1Schema)
      .openapi({ description: 'Array containing the SKUs that are being invoiced.' }),
    trackingNumber: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Code that identifies the order tracking.\n\r> This field should only be used when sending the **tracking** information. When the request is used for sending the invoice, this field should be left empty (`""`).',
      }),
    trackingUrl: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'URL used to track the order.\n\r> This field should only be used when sending the **tracking** information. When the request is used for sending the invoice, this field should be left empty (`""`).',
      }),
    type: z
      .string()
      .openapi({
        description:
          'The type of invoice. There are two possible values: `"Output"` and `"Input"`. The `"Output"` type should be used when the invoice you are sending is a selling invoice. The `"Input"` type should be used when you send a return invoice.',
        example: 'Output',
      }),
    volumes: z
      .int()
      .exactOptional()
      .openapi({ description: 'Number of volumes in the invoice.', example: 3 }),
  })
  .openapi({
    example: {
      courier: null,
      extraValue: 100,
      invoiceKey: null,
      invoiceNumber: '9999',
      invoiceUrl: null,
      invoiceValue: 2499,
      issuedDate: '2019-01-30',
      items: [{ id: '1234', price: 10000, quantity: 1 }],
      trackingNumber: null,
      trackingUrl: null,
      type: 'Output',
    },
    required: ['type', 'issuedDate', 'invoiceNumber', 'invoiceValue', 'items'],
    title: 'InvoiceNotificationRequest',
  })
  .openapi('InvoiceNotificationRequest')

const ListSchema = z
  .object({
    ShippingEstimatedDate: z
      .string()
      .nullable()
      .openapi({ description: 'Shipping estimate date.' }),
    ShippingEstimatedDateMax: z
      .string()
      .nullable()
      .openapi({ description: 'Maximum shipping estimate date.' }),
    ShippingEstimatedDateMin: z
      .string()
      .nullable()
      .openapi({ description: 'Minimum shipping estimate date.' }),
    affiliateId: z
      .string()
      .openapi({
        description: 'Three letter code indicating the marketplace in which the order was placed.',
      }),
    authorizedDate: z.string().nullable().openapi({ description: 'Authorized date.' }),
    callCenterOperatorName: z
      .string()
      .nullable()
      .openapi({ description: 'Call center operator name.' }),
    clientName: z.string().openapi({ description: 'Client name.' }),
    creationDate: z.string().openapi({ description: 'Creation date.' }),
    currencyCode: z.string().openapi({ description: 'Currency code.' }),
    items: z.string().nullable().openapi({ description: 'Order items.' }),
    lastMessageUnread: z.string().nullable().openapi({ description: 'Last unread message.' }),
    listId: z.string().nullable().openapi({ description: 'List ID.' }),
    listType: z.string().nullable().openapi({ description: 'List type.' }),
    marketPlaceOrderId: z
      .string()
      .nullable()
      .openapi({ description: 'ID of the order in the marketplace.' }),
    orderId: z.string().openapi({ description: 'Order ID.' }),
    orderIsComplete: z.boolean().openapi({ description: 'Indicates whether order is complete.' }),
    origin: z
      .string()
      .openapi({ description: 'Indicates whether order is marketplace, fulfillment or chain.' }),
    paymentNames: z.string().openapi({ description: 'Order payment names.' }),
    salesChannel: z.string().openapi({ description: 'Sales channel.' }),
    sequence: z.string().openapi({ description: 'Order sequence number.' }),
    status: z.string().openapi({ description: 'Order status.' }),
    statusDescription: z.string().openapi({ description: 'Order status description.' }),
    totalItems: z.int32().openapi({ description: 'Total items.' }),
    totalValue: z.int32().openapi({ description: 'Order total value in cents.' }),
    workflowInErrorState: z
      .boolean()
      .openapi({ description: 'Indicates whether order workflow is in error state.' }),
    workflowInRetry: z
      .boolean()
      .openapi({ description: 'Indicates whether workflow is in retry.' }),
  })
  .openapi({
    example: {
      ShippingEstimatedDate: null,
      ShippingEstimatedDateMax: null,
      ShippingEstimatedDateMin: null,
      affiliateId: '',
      authorizedDate: '2019-02-07T21:29:54+00:00',
      callCenterOperatorName: null,
      clientName: 'J C',
      creationDate: '2019-02-04T10:29:11+00:00',
      currencyCode: 'BRL',
      items: null,
      lastMessageUnread:
        ' Lux Store 96 Sua Nota Fiscal foi emitida. Referente ao Pedido #v502559llux-01 Olá, J. Estamos empacotando seu produto para providenci',
      listId: null,
      listType: null,
      marketPlaceOrderId: null,
      orderId: 'v502559llux-01',
      orderIsComplete: true,
      origin: 'Marketplace',
      paymentNames: 'Boleto Bancário',
      salesChannel: '1',
      sequence: '502559',
      status: 'invoiced',
      statusDescription: 'Faturado',
      totalItems: 1,
      totalValue: 7453,
      workflowInErrorState: false,
      workflowInRetry: false,
    },
    required: [
      'orderId',
      'creationDate',
      'clientName',
      'items',
      'totalValue',
      'paymentNames',
      'status',
      'statusDescription',
      'marketPlaceOrderId',
      'sequence',
      'salesChannel',
      'affiliateId',
      'origin',
      'workflowInErrorState',
      'workflowInRetry',
      'lastMessageUnread',
      'ShippingEstimatedDate',
      'ShippingEstimatedDateMax',
      'ShippingEstimatedDateMin',
      'orderIsComplete',
      'listId',
      'listType',
      'authorizedDate',
      'callCenterOperatorName',
      'totalItems',
      'currencyCode',
    ],
    title: 'List',
  })
  .openapi('List')

const PagingSchema = z
  .object({
    currentPage: z.int32().openapi({ description: 'Current returned page.' }),
    pages: z.int32().openapi({ description: 'Number of pages.' }),
    perPage: z.int32().openapi({ description: 'Number of items returned per page.' }),
    total: z.int32().openapi({ description: 'Paging total.' }),
  })
  .openapi({
    example: { currentPage: 1, pages: 6, perPage: 15, total: 84 },
    required: ['total', 'pages', 'currentPage', 'perPage'],
    title: 'Paging',
  })
  .openapi('Paging')

const TotalItemsSchema = z
  .object({
    Count: z.int32().openapi({ description: 'Count.' }),
    Facets: z.string().nullable().openapi({ description: 'Facets.' }),
    Max: z.int32().openapi({ description: 'Maximum.' }),
    Mean: z.number().openapi({ description: 'Mean.' }),
    Min: z.int32().openapi({ description: 'Minimum.' }),
    Missing: z.int32().openapi({ description: 'Missing.' }),
    StdDev: z.number().openapi({ description: 'Standard deviation.' }),
    Sum: z.int32().openapi({ description: 'Sum.' }),
    SumOfSquares: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64', description: 'Sum of squares.' }),
  })
  .openapi({
    example: {
      Count: 84,
      Facets: {
        currencyCode: {
          BRL: {
            Count: 84,
            Facets: null,
            Max: 89,
            Mean: 2.2261904761904763,
            Min: 1,
            Missing: 0,
            StdDev: 9.660940100525016,
            Sum: 187,
            SumOfSquares: 8163,
          },
        },
        origin: {
          Fulfillment: {
            Count: 68,
            Facets: null,
            Max: 1,
            Mean: 1,
            Min: 1,
            Missing: 0,
            StdDev: 0,
            Sum: 68,
            SumOfSquares: 68,
          },
          Marketplace: {
            Count: 16,
            Facets: null,
            Max: 89,
            Mean: 7.4375,
            Min: 1,
            Missing: 0,
            StdDev: 21.92401651157926,
            Sum: 119,
            SumOfSquares: 8095,
          },
        },
      },
      Max: 89,
      Mean: 2.2261904761904763,
      Min: 1,
      Missing: 0,
      StdDev: 9.660940100525016,
      Sum: 187,
      SumOfSquares: 8163,
    },
    required: ['Count', 'Max', 'Mean', 'Min', 'Missing', 'StdDev', 'Sum', 'SumOfSquares', 'Facets'],
    title: 'TotalItems',
  })
  .openapi('TotalItems')

const TotalValueSchema = z
  .object({
    Count: z.int32().openapi({ description: 'Value count.' }),
    Facets: FacetsSchema,
    Max: z.int32().openapi({ description: 'Value maximum.' }),
    Mean: z.number().openapi({ description: 'Value mean.' }),
    Min: z.int32().openapi({ description: 'Value minimum.' }),
    Missing: z.int32().openapi({ description: 'Missing values.' }),
    StdDev: z.number().openapi({ description: 'Values standard deviation.' }),
    Sum: z.int32().openapi({ description: 'Values sum.' }),
    SumOfSquares: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64', description: 'Values sum of squares' }),
  })
  .openapi({
    example: {
      Count: 84,
      Facets: {
        currencyCode: {
          BRL: {
            Count: 84,
            Facets: null,
            Max: 21526180,
            Mean: 262672.75,
            Min: 1160,
            Missing: 0,
            StdDev: 2348087.3869179883,
            Sum: 22064511,
            SumOfSquares: 463417439039853,
          },
        },
        origin: {
          Fulfillment: {
            Count: 68,
            Facets: null,
            Max: 11150,
            Mean: 1395.5882352941176,
            Min: 1250,
            Missing: 0,
            StdDev: 1200.5513439298484,
            Sum: 94900,
            SumOfSquares: 229010000,
          },
          Marketplace: {
            Count: 16,
            Facets: null,
            Max: 21526180,
            Mean: 1373100.6875,
            Min: 1160,
            Missing: 0,
            StdDev: 5374326.141087491,
            Sum: 21969611,
            SumOfSquares: 463417210029853,
          },
        },
      },
      Max: 21526180,
      Mean: 262672.75,
      Min: 1160,
      Missing: 0,
      StdDev: 2348087.3869179883,
      Sum: 22064511,
      SumOfSquares: 463417439039853,
    },
    required: ['Count', 'Max', 'Mean', 'Min', 'Missing', 'StdDev', 'Sum', 'SumOfSquares', 'Facets'],
    title: 'TotalValue',
  })
  .openapi('TotalValue')

const Stats1Schema = z
  .object({ totalItems: TotalItemsSchema, totalValue: TotalValueSchema })
  .openapi({
    example: {
      totalItems: {
        Count: 84,
        Facets: {
          currencyCode: {
            BRL: {
              Count: 84,
              Facets: null,
              Max: 89,
              Mean: 2.2261904761904763,
              Min: 1,
              Missing: 0,
              StdDev: 9.660940100525016,
              Sum: 187,
              SumOfSquares: 8163,
            },
          },
          origin: {
            Fulfillment: {
              Count: 68,
              Facets: null,
              Max: 1,
              Mean: 1,
              Min: 1,
              Missing: 0,
              StdDev: 0,
              Sum: 68,
              SumOfSquares: 68,
            },
            Marketplace: {
              Count: 16,
              Facets: null,
              Max: 89,
              Mean: 7.4375,
              Min: 1,
              Missing: 0,
              StdDev: 21.92401651157926,
              Sum: 119,
              SumOfSquares: 8095,
            },
          },
        },
        Max: 89,
        Mean: 2.2261904761904763,
        Min: 1,
        Missing: 0,
        StdDev: 9.660940100525016,
        Sum: 187,
        SumOfSquares: 8163,
      },
      totalValue: {
        Count: 84,
        Facets: {
          currencyCode: {
            BRL: {
              Count: 84,
              Facets: null,
              Max: 21526180,
              Mean: 262672.75,
              Min: 1160,
              Missing: 0,
              StdDev: 2348087.3869179883,
              Sum: 22064511,
              SumOfSquares: 463417439039853,
            },
          },
          origin: {
            Fulfillment: {
              Count: 68,
              Facets: null,
              Max: 11150,
              Mean: 1395.5882352941176,
              Min: 1250,
              Missing: 0,
              StdDev: 1200.5513439298484,
              Sum: 94900,
              SumOfSquares: 229010000,
            },
            Marketplace: {
              Count: 16,
              Facets: null,
              Max: 21526180,
              Mean: 1373100.6875,
              Min: 1160,
              Missing: 0,
              StdDev: 5374326.141087491,
              Sum: 21969611,
              SumOfSquares: 463417210029853,
            },
          },
        },
        Max: 21526180,
        Mean: 262672.75,
        Min: 1160,
        Missing: 0,
        StdDev: 2348087.3869179883,
        Sum: 22064511,
        SumOfSquares: 463417439039853,
      },
    },
    required: ['totalValue', 'totalItems'],
    title: 'Stats1',
  })
  .openapi('Stats1')

const StatsSchema = z
  .object({ stats: Stats1Schema })
  .openapi({
    example: {
      stats: {
        totalItems: {
          Count: 84,
          Facets: {
            currencyCode: {
              BRL: {
                Count: 84,
                Facets: null,
                Max: 89,
                Mean: 2.2261904761904763,
                Min: 1,
                Missing: 0,
                StdDev: 9.660940100525016,
                Sum: 187,
                SumOfSquares: 8163,
              },
            },
            origin: {
              Fulfillment: {
                Count: 68,
                Facets: null,
                Max: 1,
                Mean: 1,
                Min: 1,
                Missing: 0,
                StdDev: 0,
                Sum: 68,
                SumOfSquares: 68,
              },
              Marketplace: {
                Count: 16,
                Facets: null,
                Max: 89,
                Mean: 7.4375,
                Min: 1,
                Missing: 0,
                StdDev: 21.92401651157926,
                Sum: 119,
                SumOfSquares: 8095,
              },
            },
          },
          Max: 89,
          Mean: 2.2261904761904763,
          Min: 1,
          Missing: 0,
          StdDev: 9.660940100525016,
          Sum: 187,
          SumOfSquares: 8163,
        },
        totalValue: {
          Count: 84,
          Facets: {
            currencyCode: {
              BRL: {
                Count: 84,
                Facets: null,
                Max: 21526180,
                Mean: 262672.75,
                Min: 1160,
                Missing: 0,
                StdDev: 2348087.3869179883,
                Sum: 22064511,
                SumOfSquares: 463417439039853,
              },
            },
            origin: {
              Fulfillment: {
                Count: 68,
                Facets: null,
                Max: 11150,
                Mean: 1395.5882352941176,
                Min: 1250,
                Missing: 0,
                StdDev: 1200.5513439298484,
                Sum: 94900,
                SumOfSquares: 229010000,
              },
              Marketplace: {
                Count: 16,
                Facets: null,
                Max: 21526180,
                Mean: 1373100.6875,
                Min: 1160,
                Missing: 0,
                StdDev: 5374326.141087491,
                Sum: 21969611,
                SumOfSquares: 463417210029853,
              },
            },
          },
          Max: 21526180,
          Mean: 262672.75,
          Min: 1160,
          Missing: 0,
          StdDev: 2348087.3869179883,
          Sum: 22064511,
          SumOfSquares: 463417439039853,
        },
      },
    },
    required: ['stats'],
    title: 'Stats',
  })
  .openapi('Stats')

const ListOrdersSchema = z
  .object({
    facets: z.array(z.string()).openapi({ description: 'Array of facets.' }),
    list: z
      .array(ListSchema)
      .openapi({ description: 'Array containing information on orders listed.' }),
    paging: PagingSchema,
    stats: StatsSchema,
  })
  .openapi({
    example: {
      facets: [],
      list: [
        {
          ShippingEstimatedDate: null,
          ShippingEstimatedDateMax: null,
          ShippingEstimatedDateMin: null,
          affiliateId: '',
          authorizedDate: '2019-02-07T21:29:54+00:00',
          callCenterOperatorName: null,
          clientName: 'J C',
          creationDate: '2019-02-04T10:29:11+00:00',
          currencyCode: 'BRL',
          items: null,
          lastMessageUnread:
            ' Lux Store 96 Sua Nota Fiscal foi emitida. Referente ao Pedido #v502559llux-01 Olá, J. Estamos empacotando seu produto para providenci',
          listId: null,
          listType: null,
          marketPlaceOrderId: null,
          orderId: 'v502559llux-01',
          orderIsComplete: true,
          origin: 'Marketplace',
          paymentNames: 'Boleto Bancário',
          salesChannel: '1',
          sequence: '502559',
          status: 'invoiced',
          statusDescription: 'Faturado',
          totalItems: 1,
          totalValue: 7453,
          workflowInErrorState: false,
          workflowInRetry: false,
        },
        {
          ShippingEstimatedDate: '2019-02-04T20:33:46+00:00',
          ShippingEstimatedDateMax: null,
          ShippingEstimatedDateMin: null,
          affiliateId: '',
          authorizedDate: '2019-01-28T20:33:04+00:00',
          callCenterOperatorName: null,
          clientName: 'Rodrigo VTEX',
          creationDate: '2019-01-28T20:09:43+00:00',
          currencyCode: 'BRL',
          items: null,
          lastMessageUnread:
            ' Lux Store Seu pedido foi alterado! Pedido realizado em: 28/01/2019 Olá, Rodrigo. Seu pedido foi alterado. Seguem informações abaixo: ',
          listId: null,
          listType: null,
          marketPlaceOrderId: null,
          orderId: 'v502556llux-01',
          orderIsComplete: true,
          origin: 'Marketplace',
          paymentNames: 'Boleto Bancário',
          salesChannel: '1',
          sequence: '502556',
          status: 'handling',
          statusDescription: 'Preparando Entrega',
          totalItems: 1,
          totalValue: 1160,
          workflowInErrorState: false,
          workflowInRetry: false,
        },
        {
          ShippingEstimatedDate: '2019-01-31T12:36:30+00:00',
          ShippingEstimatedDateMax: null,
          ShippingEstimatedDateMin: null,
          affiliateId: '',
          authorizedDate: '2019-01-24T12:36:01+00:00',
          callCenterOperatorName: null,
          clientName: 'test test',
          creationDate: '2019-01-24T12:35:19+00:00',
          currencyCode: 'BRL',
          items: null,
          lastMessageUnread:
            ' Lux Store 96 Sua Nota Fiscal foi emitida. Referente ao Pedido #v502553llux-01 Olá, test. Estamos empacotando seu produto para provide',
          listId: null,
          listType: null,
          marketPlaceOrderId: null,
          orderId: 'v502553llux-01',
          orderIsComplete: true,
          origin: 'Marketplace',
          paymentNames: 'Mastercard',
          salesChannel: '1',
          sequence: '502554',
          status: 'ready-for-handling',
          statusDescription: 'Pronto para o manuseio',
          totalItems: 1,
          totalValue: 10150,
          workflowInErrorState: false,
          workflowInRetry: false,
        },
        {
          ShippingEstimatedDate: '2019-01-30T16:40:55+00:00',
          ShippingEstimatedDateMax: null,
          ShippingEstimatedDateMin: null,
          affiliateId: '',
          authorizedDate: '2019-01-23T16:40:27+00:00',
          callCenterOperatorName: null,
          clientName: 'test test',
          creationDate: '2019-01-23T16:39:45+00:00',
          currencyCode: 'BRL',
          items: null,
          lastMessageUnread:
            ' Lux Store 96 Seu pagamento foi aprovado. Referente ao Pedido #v502550llux-01 Olá, test. Estamos providenciando a emissão da Nota Fisc',
          listId: null,
          listType: null,
          marketPlaceOrderId: null,
          orderId: 'v502550llux-01',
          orderIsComplete: true,
          origin: 'Marketplace',
          paymentNames: 'Mastercard',
          salesChannel: '1',
          sequence: '502551',
          status: 'ready-for-handling',
          statusDescription: 'Pronto para o manuseio',
          totalItems: 1,
          totalValue: 10150,
          workflowInErrorState: false,
          workflowInRetry: false,
        },
        {
          ShippingEstimatedDate: '2019-01-30T16:35:30+00:00',
          ShippingEstimatedDateMax: null,
          ShippingEstimatedDateMin: null,
          affiliateId: '',
          authorizedDate: '2019-01-23T16:35:04+00:00',
          callCenterOperatorName: null,
          clientName: 'test test',
          creationDate: '2019-01-23T16:34:20+00:00',
          currencyCode: 'BRL',
          items: null,
          lastMessageUnread:
            ' Lux Store 96 Seu pagamento foi aprovado. Referente ao Pedido #v502547llux-01 Olá, test. Estamos providenciando a emissão da Nota Fisc',
          listId: null,
          listType: null,
          marketPlaceOrderId: null,
          orderId: 'v502547llux-01',
          orderIsComplete: true,
          origin: 'Marketplace',
          paymentNames: 'Mastercard',
          salesChannel: '1',
          sequence: '502548',
          status: 'ready-for-handling',
          statusDescription: 'Pronto para o manuseio',
          totalItems: 1,
          totalValue: 10150,
          workflowInErrorState: false,
          workflowInRetry: false,
        },
        {
          ShippingEstimatedDate: null,
          ShippingEstimatedDateMax: null,
          ShippingEstimatedDateMin: null,
          affiliateId: '',
          authorizedDate: null,
          callCenterOperatorName: null,
          clientName: 'test test',
          creationDate: '2018-12-28T18:15:28+00:00',
          currencyCode: 'BRL',
          items: null,
          lastMessageUnread:
            ' Lux Store 96 Seu pedido foi cancelado. Referente ao Pedido #v502544llux-01 Resumo Itens R$ 89,90 Total R$ 89,90 Produto Alavanca De M',
          listId: null,
          listType: null,
          marketPlaceOrderId: null,
          orderId: 'v502544llux-01',
          orderIsComplete: true,
          origin: 'Marketplace',
          paymentNames: 'Boleto Bancário',
          salesChannel: '1',
          sequence: '502544',
          status: 'canceled',
          statusDescription: 'Cancelado',
          totalItems: 1,
          totalValue: 8990,
          workflowInErrorState: false,
          workflowInRetry: false,
        },
        {
          ShippingEstimatedDate: null,
          ShippingEstimatedDateMax: null,
          ShippingEstimatedDateMin: null,
          affiliateId: '',
          authorizedDate: null,
          callCenterOperatorName: null,
          clientName: 'Douglas Rodrigues',
          creationDate: '2018-12-18T18:48:17+00:00',
          currencyCode: 'BRL',
          items: null,
          lastMessageUnread:
            ' Lux Store 96 Seu pedido foi cancelado. Referente ao Pedido #v502541llux-01 Resumo Itens R$ 32,90 Total R$ 32,90 Produto Bay Max L 1 u',
          listId: null,
          listType: null,
          marketPlaceOrderId: null,
          orderId: 'v502541llux-01',
          orderIsComplete: true,
          origin: 'Marketplace',
          paymentNames: 'Boleto Bancário',
          salesChannel: '1',
          sequence: '502541',
          status: 'canceled',
          statusDescription: 'Cancelado',
          totalItems: 1,
          totalValue: 3290,
          workflowInErrorState: false,
          workflowInRetry: false,
        },
        {
          ShippingEstimatedDate: '2018-12-19T18:22:26+00:00',
          ShippingEstimatedDateMax: null,
          ShippingEstimatedDateMin: null,
          affiliateId: '',
          authorizedDate: '2018-12-12T18:22:22+00:00',
          callCenterOperatorName: null,
          clientName: 'test test',
          creationDate: '2018-12-12T18:21:47+00:00',
          currencyCode: 'BRL',
          items: null,
          lastMessageUnread:
            ' Lux Store 96 Seu pagamento foi aprovado. Referente ao Pedido #v502538llux-01 Olá, test. Estamos providenciando a emissão da Nota Fisc',
          listId: null,
          listType: null,
          marketPlaceOrderId: null,
          orderId: 'v502538llux-01',
          orderIsComplete: true,
          origin: 'Marketplace',
          paymentNames: 'Mastercard',
          salesChannel: '1',
          sequence: '502538',
          status: 'ready-for-handling',
          statusDescription: 'Pronto para o manuseio',
          totalItems: 1,
          totalValue: 8990,
          workflowInErrorState: false,
          workflowInRetry: false,
        },
        {
          ShippingEstimatedDate: null,
          ShippingEstimatedDateMax: null,
          ShippingEstimatedDateMin: null,
          affiliateId: 'SCP',
          authorizedDate: '2018-11-30T17:34:42+00:00',
          callCenterOperatorName: null,
          clientName: 'roberta grecco',
          creationDate: '2018-11-30T17:34:01+00:00',
          currencyCode: 'BRL',
          items: null,
          lastMessageUnread: 'cancelamento teste shp ',
          listId: null,
          listType: null,
          marketPlaceOrderId: '880102018018-01',
          orderId: 'SCP-880102018018-01',
          orderIsComplete: true,
          origin: 'Fulfillment',
          paymentNames: '',
          salesChannel: '1',
          sequence: '502537',
          status: 'canceled',
          statusDescription: 'Cancelado',
          totalItems: 1,
          totalValue: 1250,
          workflowInErrorState: false,
          workflowInRetry: false,
        },
        {
          ShippingEstimatedDate: null,
          ShippingEstimatedDateMax: null,
          ShippingEstimatedDateMin: null,
          affiliateId: 'SCP',
          authorizedDate: '2018-11-30T17:29:22+00:00',
          callCenterOperatorName: null,
          clientName: 'roberta grecco',
          creationDate: '2018-11-30T17:28:35+00:00',
          currencyCode: 'BRL',
          items: null,
          lastMessageUnread: null,
          listId: null,
          listType: null,
          marketPlaceOrderId: '880091692043-01',
          orderId: 'SCP-880091692043-01',
          orderIsComplete: true,
          origin: 'Fulfillment',
          paymentNames: '',
          salesChannel: '1',
          sequence: '502536',
          status: 'invoiced',
          statusDescription: 'Faturado',
          totalItems: 1,
          totalValue: 1250,
          workflowInErrorState: false,
          workflowInRetry: false,
        },
        {
          ShippingEstimatedDate: null,
          ShippingEstimatedDateMax: null,
          ShippingEstimatedDateMin: null,
          affiliateId: 'SCP',
          authorizedDate: '2018-11-30T17:18:44+00:00',
          callCenterOperatorName: null,
          clientName: 'roberta grecco',
          creationDate: '2018-11-30T17:18:00+00:00',
          currencyCode: 'BRL',
          items: null,
          lastMessageUnread: 'Teste de cancelamento do ShopFácil ',
          listId: null,
          listType: null,
          marketPlaceOrderId: '880091058221-01',
          orderId: 'SCP-880091058221-01',
          orderIsComplete: true,
          origin: 'Fulfillment',
          paymentNames: '',
          salesChannel: '1',
          sequence: '502535',
          status: 'canceled',
          statusDescription: 'Cancelado',
          totalItems: 1,
          totalValue: 1250,
          workflowInErrorState: false,
          workflowInRetry: false,
        },
        {
          ShippingEstimatedDate: '2018-12-07T17:11:39+00:00',
          ShippingEstimatedDateMax: null,
          ShippingEstimatedDateMin: null,
          affiliateId: 'SCP',
          authorizedDate: '2018-11-30T17:11:42+00:00',
          callCenterOperatorName: null,
          clientName: 'roberta grecco',
          creationDate: '2018-11-30T17:10:59+00:00',
          currencyCode: 'BRL',
          items: null,
          lastMessageUnread: null,
          listId: null,
          listType: null,
          marketPlaceOrderId: '880090643370-01',
          orderId: 'SCP-880090643370-01',
          orderIsComplete: true,
          origin: 'Fulfillment',
          paymentNames: '',
          salesChannel: '1',
          sequence: '502534',
          status: 'ready-for-handling',
          statusDescription: 'Pronto para o manuseio',
          totalItems: 1,
          totalValue: 1250,
          workflowInErrorState: false,
          workflowInRetry: false,
        },
        {
          ShippingEstimatedDate: null,
          ShippingEstimatedDateMax: null,
          ShippingEstimatedDateMin: null,
          affiliateId: 'SCP',
          authorizedDate: null,
          callCenterOperatorName: null,
          clientName: 'roberta grecco',
          creationDate: '2018-11-30T17:10:45+00:00',
          currencyCode: 'BRL',
          items: null,
          lastMessageUnread: null,
          listId: null,
          listType: null,
          marketPlaceOrderId: '880090622238-01',
          orderId: 'SCP-880090622238-01',
          orderIsComplete: true,
          origin: 'Fulfillment',
          paymentNames: '',
          salesChannel: '1',
          sequence: '502533',
          status: 'canceled',
          statusDescription: 'Cancelado',
          totalItems: 1,
          totalValue: 1250,
          workflowInErrorState: false,
          workflowInRetry: false,
        },
        {
          ShippingEstimatedDate: null,
          ShippingEstimatedDateMax: null,
          ShippingEstimatedDateMin: null,
          affiliateId: 'MNC',
          authorizedDate: '2018-11-20T21:13:06+00:00',
          callCenterOperatorName: null,
          clientName: 'Carlos VTEX',
          creationDate: '2018-11-20T21:09:01+00:00',
          currencyCode: 'BRL',
          items: null,
          lastMessageUnread: null,
          listId: null,
          listType: null,
          marketPlaceOrderId: '877730530419-01',
          orderId: 'MNC-877730530419-01',
          orderIsComplete: true,
          origin: 'Fulfillment',
          paymentNames: '',
          salesChannel: '1',
          sequence: '502532',
          status: 'canceled',
          statusDescription: 'Cancelado',
          totalItems: 1,
          totalValue: 11150,
          workflowInErrorState: false,
          workflowInRetry: false,
        },
        {
          ShippingEstimatedDate: '2018-11-23T16:58:48+00:00',
          ShippingEstimatedDateMax: null,
          ShippingEstimatedDateMin: null,
          affiliateId: 'SCP',
          authorizedDate: '2018-11-16T16:58:53+00:00',
          callCenterOperatorName: null,
          clientName: 'roberta grecco',
          creationDate: '2018-11-16T16:58:18+00:00',
          currencyCode: 'BRL',
          items: null,
          lastMessageUnread: null,
          listId: null,
          listType: null,
          marketPlaceOrderId: '876733475998-01',
          orderId: 'SCP-876733475998-01',
          orderIsComplete: true,
          origin: 'Fulfillment',
          paymentNames: '',
          salesChannel: '1',
          sequence: '502531',
          status: 'ready-for-handling',
          statusDescription: 'Pronto para o manuseio',
          totalItems: 1,
          totalValue: 1250,
          workflowInErrorState: false,
          workflowInRetry: false,
        },
      ],
      paging: { currentPage: 1, pages: 6, perPage: 15, total: 84 },
      stats: {
        stats: {
          totalItems: {
            Count: 84,
            Facets: {
              currencyCode: {
                BRL: {
                  Count: 84,
                  Facets: null,
                  Max: 89,
                  Mean: 2.2261904761904763,
                  Min: 1,
                  Missing: 0,
                  StdDev: 9.660940100525016,
                  Sum: 187,
                  SumOfSquares: 8163,
                },
              },
              origin: {
                Fulfillment: {
                  Count: 68,
                  Facets: null,
                  Max: 1,
                  Mean: 1,
                  Min: 1,
                  Missing: 0,
                  StdDev: 0,
                  Sum: 68,
                  SumOfSquares: 68,
                },
                Marketplace: {
                  Count: 16,
                  Facets: null,
                  Max: 89,
                  Mean: 7.4375,
                  Min: 1,
                  Missing: 0,
                  StdDev: 21.92401651157926,
                  Sum: 119,
                  SumOfSquares: 8095,
                },
              },
            },
            Max: 89,
            Mean: 2.2261904761904763,
            Min: 1,
            Missing: 0,
            StdDev: 9.660940100525016,
            Sum: 187,
            SumOfSquares: 8163,
          },
          totalValue: {
            Count: 84,
            Facets: {
              currencyCode: {
                BRL: {
                  Count: 84,
                  Facets: null,
                  Max: 21526180,
                  Mean: 262672.75,
                  Min: 1160,
                  Missing: 0,
                  StdDev: 2348087.3869179883,
                  Sum: 22064511,
                  SumOfSquares: 463417439039853,
                },
              },
              origin: {
                Fulfillment: {
                  Count: 68,
                  Facets: null,
                  Max: 11150,
                  Mean: 1395.5882352941176,
                  Min: 1250,
                  Missing: 0,
                  StdDev: 1200.5513439298484,
                  Sum: 94900,
                  SumOfSquares: 229010000,
                },
                Marketplace: {
                  Count: 16,
                  Facets: null,
                  Max: 21526180,
                  Mean: 1373100.6875,
                  Min: 1160,
                  Missing: 0,
                  StdDev: 5374326.141087491,
                  Sum: 21969611,
                  SumOfSquares: 463417210029853,
                },
              },
            },
            Max: 21526180,
            Mean: 262672.75,
            Min: 1160,
            Missing: 0,
            StdDev: 2348087.3869179883,
            Sum: 22064511,
            SumOfSquares: 463417439039853,
          },
        },
      },
    },
    required: ['list', 'facets', 'paging', 'stats'],
    title: 'ListOrders',
  })
  .openapi('ListOrders')

const PickupStoreInfoSchema = z
  .object({
    additionalInfo: z
      .string()
      .nullable()
      .openapi({ description: 'Pickup additional information.' }),
    address: z.string().nullable().openapi({ description: 'Pickup address.' }),
    dockId: z.string().nullable().openapi({ description: 'Pickup dock ID.' }),
    friendlyName: z.string().nullable().openapi({ description: 'Pickup friendly name.' }),
    isPickupStore: z.boolean().openapi({ description: 'Indicates whether it is pickup store.' }),
  })
  .openapi({
    example: {
      additionalInfo: null,
      address: null,
      dockId: null,
      friendlyName: null,
      isPickupStore: false,
    },
    required: ['additionalInfo', 'address', 'dockId', 'friendlyName', 'isPickupStore'],
    title: 'PickupStoreInfo',
  })
  .openapi('PickupStoreInfo')

const SlaSchema = z
  .object({
    deliveryChannel: z.string().openapi({ description: 'SLA delivery channel.' }),
    deliveryWindow: z.string().nullable().openapi({ description: 'SLA delivery window.' }),
    id: z.string().openapi({ description: 'SLA ID.' }),
    name: z.string().openapi({ description: 'SLA name.' }),
    pickupStoreInfo: PickupStoreInfoSchema,
    polygonName: z.string().nullable().openapi({ description: 'SLA polygon name.' }),
    price: z.int32().openapi({ description: 'SLA price in cents.' }),
    shippingEstimate: z.string().openapi({ description: 'SLA shipping estimate.' }),
  })
  .openapi({
    example: {
      deliveryChannel: 'delivery',
      deliveryWindow: null,
      id: 'Normal',
      name: 'Normal',
      pickupStoreInfo: {
        additionalInfo: null,
        address: null,
        dockId: null,
        friendlyName: null,
        isPickupStore: false,
      },
      polygonName: null,
      price: 1160,
      shippingEstimate: '5bd',
    },
    required: [
      'id',
      'name',
      'shippingEstimate',
      'deliveryWindow',
      'price',
      'deliveryChannel',
      'pickupStoreInfo',
      'polygonName',
    ],
    title: 'Sla',
  })
  .openapi('Sla')

const LogisticsInfoSchema = z
  .object({
    addressId: z.string().openapi({ description: 'Address ID.' }),
    deliveryChannel: z.string().openapi({ description: 'Delivery channel.' }),
    deliveryCompany: z.string().openapi({ description: 'Delivery company.' }),
    deliveryIds: z.array(DeliveryIdSchema).openapi({ description: 'Array of delivery IDs.' }),
    deliveryWindow: z.string().nullable().openapi({ description: 'Delivery window information.' }),
    itemIndex: z
      .int32()
      .openapi({ description: 'Item index, matching the index in the `items` array.' }),
    listPrice: z.int32().openapi({ description: 'List price in cents.' }),
    lockTTL: z.string().openapi({ description: 'Reservation lasting period.' }),
    pickupStoreInfo: PickupStoreInfoSchema,
    polygonName: z.string().nullable().openapi({ description: 'Polygon name.' }),
    price: z.int32().openapi({ description: 'Prince in cents.' }),
    selectedSla: z.string().openapi({ description: 'Selected SLA.' }),
    sellingPrice: z.int32().openapi({ description: 'Selling price in cents.' }),
    shippingEstimate: z.string().openapi({ description: 'Shipping estimate.' }),
    shippingEstimateDate: z.string().openapi({ description: 'Shipping estimate date.' }),
    shipsTo: z
      .array(z.string())
      .openapi({
        description: 'List of countries (three letter ISO code) to which shipping is available.',
      }),
    slas: z.array(SlaSchema).openapi({ description: 'Array with information on the SLAs.' }),
  })
  .openapi({
    example: {
      addressId: '-1425945657910',
      deliveryChannel: 'delivery',
      deliveryCompany: 'Todos os CEPS',
      deliveryIds: [
        {
          courierId: '197a56f',
          courierName: 'Todos os CEPS',
          dockId: '1',
          quantity: 1,
          warehouseId: '1_1',
        },
      ],
      deliveryWindow: null,
      itemIndex: 0,
      listPrice: 1160,
      lockTTL: '10d',
      pickupStoreInfo: {
        additionalInfo: null,
        address: null,
        dockId: null,
        friendlyName: null,
        isPickupStore: false,
      },
      polygonName: null,
      price: 1160,
      selectedSla: 'Normal',
      sellingPrice: 1160,
      shippingEstimate: '5bd',
      shippingEstimateDate: '2019-02-04T20:33:46.4595004+00:00',
      shipsTo: ['BRA'],
      slas: [
        {
          deliveryChannel: 'delivery',
          deliveryWindow: null,
          id: 'Normal',
          name: 'Normal',
          pickupStoreInfo: {
            additionalInfo: null,
            address: null,
            dockId: null,
            friendlyName: null,
            isPickupStore: false,
          },
          polygonName: null,
          price: 1160,
          shippingEstimate: '5bd',
        },
        {
          deliveryChannel: 'delivery',
          deliveryWindow: null,
          id: 'Expressa',
          name: 'Expressa',
          pickupStoreInfo: {
            additionalInfo: null,
            address: null,
            dockId: null,
            friendlyName: null,
            isPickupStore: false,
          },
          polygonName: null,
          price: 1160,
          shippingEstimate: '5bd',
        },
        {
          deliveryChannel: 'delivery',
          deliveryWindow: null,
          id: 'Quebra Kit',
          name: 'Quebra Kit',
          pickupStoreInfo: {
            additionalInfo: null,
            address: null,
            dockId: null,
            friendlyName: null,
            isPickupStore: false,
          },
          polygonName: null,
          price: 1392,
          shippingEstimate: '2bd',
        },
        {
          deliveryChannel: 'delivery',
          deliveryWindow: null,
          id: 'Sob Encomenda',
          name: 'Sob Encomenda',
          pickupStoreInfo: {
            additionalInfo: null,
            address: null,
            dockId: null,
            friendlyName: null,
            isPickupStore: false,
          },
          polygonName: null,
          price: 1392,
          shippingEstimate: '32bd',
        },
      ],
    },
    required: [
      'itemIndex',
      'selectedSla',
      'lockTTL',
      'price',
      'listPrice',
      'sellingPrice',
      'deliveryWindow',
      'deliveryCompany',
      'shippingEstimate',
      'shippingEstimateDate',
      'slas',
      'shipsTo',
      'deliveryIds',
      'deliveryChannel',
      'pickupStoreInfo',
      'addressId',
      'polygonName',
    ],
    title: 'LogisticsInfo',
  })
  .openapi('LogisticsInfo')

const MarketplaceSchema = z
  .object({
    baseURL: z.string().openapi({ description: 'Marketplace base URL.' }),
    isCertified: z
      .string()
      .nullable()
      .openapi({ description: 'Indicates whether marketplace is certified.' }),
    name: z.string().openapi({ description: 'Marketplace name.' }),
  })
  .openapi({
    example: {
      baseURL: 'http://oms.vtexinternal.com.br/api/oms?an=luxstore',
      isCertified: null,
      name: 'luxstore',
    },
    required: ['baseURL', 'isCertified', 'name'],
    title: 'Marketplace',
  })
  .openapi('Marketplace')

const PaymentSchema = z
  .object({
    cardHolder: z.string().nullable().openapi({ description: 'Card holder' }),
    cardNumber: z.string().nullable().openapi({ description: 'Card number.' }),
    connectorResponses: z.looseObject({}).openapi({ description: 'Connector responses.' }),
    cvv2: z.string().nullable().openapi({ description: 'Card verification code.' }),
    dueDate: z.string().openapi({ description: 'Due date.' }),
    expireMonth: z.string().nullable().openapi({ description: 'Card expiration month.' }),
    expireYear: z.string().nullable().openapi({ description: 'Card expiration year.' }),
    firstDigits: z.string().nullable().openapi({ description: 'Card first digits.' }),
    giftCardCaption: z.string().nullable().openapi({ description: 'Gift card caption.' }),
    giftCardId: z.string().nullable().openapi({ description: 'Gift card ID.' }),
    giftCardName: z.string().nullable().openapi({ description: 'Gift card name.' }),
    group: z.string().openapi({ description: 'Payment group.' }),
    id: z.string().openapi({ description: 'Payment ID.' }),
    installments: z.int32().openapi({ description: 'Payment installments.' }),
    lastDigits: z.string().nullable().openapi({ description: 'Card last digits.' }),
    paymentSystem: z.string().openapi({ description: 'Payment system.' }),
    paymentSystemName: z.string().openapi({ description: 'Payment system name.' }),
    redemptionCode: z.string().nullable().openapi({ description: 'Redemption code.' }),
    referenceValue: z
      .int32()
      .openapi({ description: 'Reference value for interest calculation in cents.' }),
    tid: z.string().nullable().openapi({ description: 'Payment TID.' }),
    url: z.string().openapi({ description: 'Payment URL.' }),
    value: z.int32().openapi({ description: 'Payment value in cents.' }),
  })
  .openapi({
    example: {
      cardHolder: null,
      cardNumber: null,
      connectorResponses: {},
      cvv2: null,
      dueDate: '2019-02-02',
      expireMonth: null,
      expireYear: null,
      firstDigits: null,
      giftCardCaption: null,
      giftCardId: null,
      giftCardName: null,
      group: 'bankInvoice',
      id: 'D3DEECAB3C6C4B9EAF8EF4C1FE062FF3',
      installments: 1,
      lastDigits: null,
      paymentSystem: '6',
      paymentSystemName: 'Boleto Bancário',
      redemptionCode: null,
      referenceValue: 4450,
      tid: null,
      url: 'https://luxstore.vtexpayments.com.br:443/BankIssuedInvoice/Transaction/418213DE29634837A63DD693A937A696/Payment/D3DEECAB3C6C4B9EAF8EF4C1FE062FF3/Installment/{Installment}',
      value: 4450,
    },
    required: [
      'id',
      'paymentSystem',
      'paymentSystemName',
      'value',
      'installments',
      'referenceValue',
      'cardHolder',
      'cardNumber',
      'firstDigits',
      'lastDigits',
      'cvv2',
      'expireMonth',
      'expireYear',
      'url',
      'giftCardId',
      'giftCardName',
      'giftCardCaption',
      'redemptionCode',
      'group',
      'tid',
      'dueDate',
      'connectorResponses',
    ],
    title: 'Payment',
  })
  .openapi('Payment')

const TransactionSchema = z
  .object({
    isActive: z.boolean().openapi({ description: 'Indicates whether transaction is active.' }),
    merchantName: z.string().openapi({ description: 'Merchant name.' }),
    payments: z
      .array(PaymentSchema)
      .openapi({ description: 'Array with information on each payment for the order.' }),
    transactionId: z.string().openapi({ description: 'Transaction ID.' }),
  })
  .openapi({
    example: {
      isActive: true,
      merchantName: 'luxstore',
      payments: [
        {
          cardHolder: null,
          cardNumber: null,
          connectorResponses: {},
          cvv2: null,
          dueDate: '2019-02-02',
          expireMonth: null,
          expireYear: null,
          firstDigits: null,
          giftCardCaption: null,
          giftCardId: null,
          giftCardName: null,
          group: 'bankInvoice',
          id: 'D3DEECAB3C6C4B9EAF8EF4C1FE062FF3',
          installments: 1,
          lastDigits: null,
          paymentSystem: '6',
          paymentSystemName: 'Boleto Bancário',
          redemptionCode: null,
          referenceValue: 4450,
          tid: null,
          url: 'https://luxstore.vtexpayments.com.br:443/BankIssuedInvoice/Transaction/418213DE29634837A63DD693A937A696/Payment/D3DEECAB3C6C4B9EAF8EF4C1FE062FF3/Installment/{Installment}',
          value: 4450,
        },
      ],
      transactionId: '418213DE29634837A63DD693A937A696',
    },
    required: ['isActive', 'transactionId', 'merchantName', 'payments'],
    title: 'Transaction',
  })
  .openapi('Transaction')

const PaymentDataSchema = z
  .object({
    transactions: z
      .array(TransactionSchema)
      .openapi({ description: 'Array with information on each transaction of the order.' }),
  })
  .openapi({
    example: {
      transactions: [
        {
          isActive: true,
          merchantName: 'luxstore',
          payments: [
            {
              cardHolder: null,
              cardNumber: null,
              connectorResponses: {},
              cvv2: null,
              dueDate: '2019-02-02',
              expireMonth: null,
              expireYear: null,
              firstDigits: null,
              giftCardCaption: null,
              giftCardId: null,
              giftCardName: null,
              group: 'bankInvoice',
              id: 'D3DEECAB3C6C4B9EAF8EF4C1FE062FF3',
              installments: 1,
              lastDigits: null,
              paymentSystem: '6',
              paymentSystemName: 'Boleto Bancário',
              redemptionCode: null,
              referenceValue: 4450,
              tid: null,
              url: 'https://luxstore.vtexpayments.com.br:443/BankIssuedInvoice/Transaction/418213DE29634837A63DD693A937A696/Payment/D3DEECAB3C6C4B9EAF8EF4C1FE062FF3/Installment/{Installment}',
              value: 4450,
            },
          ],
          transactionId: '418213DE29634837A63DD693A937A696',
        },
      ],
    },
    required: ['transactions'],
    title: 'PaymentData',
  })
  .openapi('PaymentData')

const RatesAndBenefitsDataSchema = z
  .object({
    id: z.string().default('ratesAndBenefitsData').openapi({ description: 'Field ID.' }),
    rateAndBenefitsIdentifiers: z
      .array(z.string())
      .openapi({ description: 'Array with rates and benefits IDs.' }),
  })
  .openapi({
    example: { id: 'ratesAndBenefitsData', rateAndBenefitsIdentifiers: [] },
    required: ['id', 'rateAndBenefitsIdentifiers'],
    title: 'RatesAndBenefitsData',
  })
  .openapi('RatesAndBenefitsData')

const SelectedAddressSchema = AddressSchema.openapi('SelectedAddress')

const SellerSchema = z
  .object({
    id: z.string().openapi({ description: 'Seller ID.' }),
    logo: z.string().openapi({ description: 'Seller logo.' }),
    name: z.string().openapi({ description: 'Seller name.' }),
  })
  .openapi({
    example: { id: '1', logo: '', name: 'Loja do Suporte' },
    required: ['id', 'name', 'logo'],
    title: 'Seller',
  })
  .openapi('Seller')

const ShippingDataSchema = z
  .object({
    address: AddressSchema,
    id: z.string().default('shippingData').openapi({ description: 'Field ID.' }),
    logisticsInfo: z
      .array(LogisticsInfoSchema)
      .openapi({ description: 'Array with logistics information of each item in the order.' }),
    selectedAddresses: z
      .array(AddressSchema)
      .openapi({ description: "Array of the selected addresses' information." }),
    trackingHints: z.string().nullable().openapi({ description: 'Tracking hints.' }),
  })
  .openapi({
    example: {
      address: {
        addressId: '-1425945657910',
        addressType: 'residential',
        city: 'Rio de Janeiro',
        complement: '3',
        country: 'BRA',
        geoCoordinates: [],
        neighborhood: 'Botafogo',
        number: '300',
        postalCode: '22250-040',
        receiverName: 'Rodrigo Cunha',
        reference: null,
        state: 'RJ',
        street: 'Praia de Botafogo',
      },
      id: 'shippingData',
      logisticsInfo: [
        {
          addressId: '-1425945657910',
          deliveryChannel: 'delivery',
          deliveryCompany: 'Todos os CEPS',
          deliveryIds: [
            {
              courierId: '197a56f',
              courierName: 'Todos os CEPS',
              dockId: '1',
              quantity: 1,
              warehouseId: '1_1',
            },
          ],
          deliveryWindow: null,
          itemIndex: 0,
          listPrice: 1160,
          lockTTL: '10d',
          pickupStoreInfo: {
            additionalInfo: null,
            address: null,
            dockId: null,
            friendlyName: null,
            isPickupStore: false,
          },
          polygonName: null,
          price: 1160,
          selectedSla: 'Normal',
          sellingPrice: 1160,
          shippingEstimate: '5bd',
          shippingEstimateDate: '2019-02-04T20:33:46.4595004+00:00',
          shipsTo: ['BRA'],
          slas: [
            {
              deliveryChannel: 'delivery',
              deliveryWindow: null,
              id: 'Normal',
              name: 'Normal',
              pickupStoreInfo: {
                additionalInfo: null,
                address: null,
                dockId: null,
                friendlyName: null,
                isPickupStore: false,
              },
              polygonName: null,
              price: 1160,
              shippingEstimate: '5bd',
            },
            {
              deliveryChannel: 'delivery',
              deliveryWindow: null,
              id: 'Expressa',
              name: 'Expressa',
              pickupStoreInfo: {
                additionalInfo: null,
                address: null,
                dockId: null,
                friendlyName: null,
                isPickupStore: false,
              },
              polygonName: null,
              price: 1160,
              shippingEstimate: '5bd',
            },
            {
              deliveryChannel: 'delivery',
              deliveryWindow: null,
              id: 'Quebra Kit',
              name: 'Quebra Kit',
              pickupStoreInfo: {
                additionalInfo: null,
                address: null,
                dockId: null,
                friendlyName: null,
                isPickupStore: false,
              },
              polygonName: null,
              price: 1392,
              shippingEstimate: '2bd',
            },
            {
              deliveryChannel: 'delivery',
              deliveryWindow: null,
              id: 'Sob Encomenda',
              name: 'Sob Encomenda',
              pickupStoreInfo: {
                additionalInfo: null,
                address: null,
                dockId: null,
                friendlyName: null,
                isPickupStore: false,
              },
              polygonName: null,
              price: 1392,
              shippingEstimate: '32bd',
            },
          ],
        },
      ],
      selectedAddresses: [
        {
          addressId: '-1425945657910',
          addressType: 'residential',
          city: 'Rio de Janeiro',
          complement: '10',
          country: 'BRA',
          geoCoordinates: [],
          neighborhood: 'Botafogo',
          number: '518',
          postalCode: '22250-040',
          receiverName: 'Rodrigo Cunha',
          reference: null,
          state: 'RJ',
          street: 'Praia de Botafogo',
        },
      ],
      trackingHints: null,
    },
    required: ['id', 'address', 'logisticsInfo', 'trackingHints', 'selectedAddresses'],
    title: 'ShippingData',
  })
  .openapi('ShippingData')

const StorePreferencesDataSchema = z
  .object({
    countryCode: z.string().openapi({ description: 'Three letter ISO country code.' }),
    currencyCode: z.string().openapi({ description: 'Currency code.' }),
    currencyFormatInfo: CurrencyFormatInfoSchema,
    currencyLocale: z.int32().openapi({ description: 'Currency locale.' }),
    currencySymbol: z.string().openapi({ description: 'Currency symbol.' }),
    timeZone: z.string().openapi({ description: 'Time zone.' }),
  })
  .openapi({
    example: {
      countryCode: 'BRA',
      currencyCode: 'BRL',
      currencyFormatInfo: {
        CurrencyDecimalDigits: 2,
        CurrencyDecimalSeparator: ',',
        CurrencyGroupSeparator: '.',
        CurrencyGroupSize: 3,
        StartsWithCurrencySymbol: true,
      },
      currencyLocale: 1046,
      currencySymbol: 'R$',
      timeZone: 'E. South America Standard Time',
    },
    required: [
      'countryCode',
      'currencyCode',
      'currencyFormatInfo',
      'currencyLocale',
      'currencySymbol',
      'timeZone',
    ],
    title: 'StorePreferencesData',
  })
  .openapi('StorePreferencesData')

const AcceptParamsSchema = z
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
  })

const ContentTypeParamsSchema = z
  .string()
  .openapi({
    param: {
      description: 'Type of the content being sent.',
      in: 'header',
      name: 'Content-Type',
      required: true,
      schema: { example: 'application/json', type: 'string' },
      style: 'simple',
    },
    example: 'application/json',
  })

const FHasInputInvoiceParamsSchema = z
  .stringbool()
  .default(false)
  .exactOptional()
  .openapi({
    param: {
      description:
        'Filters list to return only orders with non `null` values for the `invoiceInput` field.',
      explode: true,
      in: 'query',
      name: 'f_hasInputInvoice',
      required: false,
      schema: { default: false, type: 'boolean' },
      style: 'form',
    },
  })

const OrderIdParamsSchema = z
  .string()
  .openapi({
    param: {
      description: 'ID of the order.',
      in: 'path',
      name: 'orderId',
      required: true,
      schema: { example: '70caf3941s6df1', type: 'string' },
      style: 'simple',
    },
    example: '70caf3941s6df1',
  })

const PaymentIdParamsSchema = z
  .string()
  .openapi({
    param: {
      description: 'ID of the payment.',
      in: 'path',
      name: 'paymentId',
      required: true,
      schema: { example: '45hsfg5jkyu1384jdsfgh654sfgj1', type: 'string' },
      style: 'simple',
    },
    example: '45hsfg5jkyu1384jdsfgh654sfgj1',
  })

const ReasonParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'Reason for requesting unmasked data.',
      in: 'query',
      name: 'reason',
      required: false,
      schema: { example: 'data-validation', type: 'string' },
      style: 'form',
    },
    example: 'data-validation',
  })

const VtexIdclientAutCookieSecurityScheme = {
  in: 'header',
  name: 'VtexIdclientAutCookie',
  type: 'apiKey',
}

const AppKeySecurityScheme = { in: 'header', name: 'X-VTEX-API-AppKey', type: 'apiKey' }

const AppTokenSecurityScheme = { in: 'header', name: 'X-VTEX-API-AppToken', type: 'apiKey' }

export const postApiOrdersExtendsearchOrdersRoute = createRoute({
  method: 'post',
  path: '/api/orders/extendsearch/orders',
  tags: ['Orders'],
  summary: 'List orders',
  description:
    'Retrieves a list of orders according to the filters described below.\n\r\n\r> This endpoint returns masked order data.\n\r\n\r> This should **not** be used for integrations. Use the [orders Feed or hook](https://developers.vtex.com/vtex-rest-api/docs/feed-v3-1) for this purpose.\n\r\n\rThis endpoint returns only orders that already have been indexed, which takes aproximately four minutes. Because of this, the data retrieved may present inconsistencies. To get live up to date information and [build order integrations](https://developers.vtex.com/vtex-rest-api/docs/erp-integration-set-up-order-integration) use the [orders Feed or hook](https://developers.vtex.com/vtex-rest-api/docs/feed-v3-1).\n\r\n\r> Check the new [Orders onboarding guide](https://developers.vtex.com/vtex-rest-api/docs/orders-overview). We created this guide to improve the onboarding experience for developers at VTEX. It assembles all documentation on our Developer Portal about Orders and is organized by focusing on the developer\'s journey.\n\r\n\r## Do not use request for integrations\n\r> This endpoint returns only orders that already have been indexed, which takes aproximately four minutes. Because of this, the data retrieved may present inconsistencies or become unavailable in periods of peak order volume. In other words, **order integrations built with the List orders endpoint are not reliable** and **will not be supported**. To get live up to date information and [build order integrations](https://developers.vtex.com/vtex-rest-api/docs/erp-integration-set-up-order-integration) use the [orders Feed or hook](https://developers.vtex.com/vtex-rest-api/docs/feed-v3-1).\n\r\n\r## Throtling\n\rEach account can make up to 5000 requests per minute.\n\r\n\r## Request parameters allowed\n\r\n\r| Attribute    | Type        | Description |\r\n| --------------- |:---------:| -------------------------------------------------------------------------------------------:|\r\n| `orderBy` | string | Order Field and Order Type concatenated `orderBy={{OrderField}},{{OrderType}}`  |\r\n| `OrderField` | string | Order Field expected values: `creationDate`,`orderId`,`items`,`totalValue` and `origin` |\r\n| `OrderType` | string | Order Type expected values: `asc` and `desc`  |\r\n\r\n\r\n## Sorting Examples\r\n\r\n\r\nCreationDate:\r\n\r\n    `/api/oms/pvt/orders?orderBy=creationDate,desc`\r\n\r\n\r\nOrderID:\r\n\r\n    `/api/oms/pvt/orders?orderBy=orderId,desc`\r\n\r\n\r\nItems:\r\n\r\n    `/api/oms/pvt/orders?orderBy=items,asc`\r\n\r\n\r\nTotalValue:\r\n\r\n    `/api/oms/pvt/orders?orderBy=totalValue,desc`\r\n\r\n\r\nOrigin: \r\n\r\n    `/api/oms/pvt/orders?orderBy=origin,asc`\r\n\r\n\r\n\r\n\r\n| Attribute    | Type      | Description |\r\n| ------------ |:---------:| -----------:|\r\n| `page` | integer | Page Number  |\r\n\r\n## Pagination Examples:\r\n\r\n    `/api/oms/pvt/orders?page=3`\r\n\r\n\r\n\r\n| Attribute    | Type      | Description |\r\n| ------------ |:---------:| -----------:|\r\n| `per_page` | integer | Quantity orders per page  |\r\n\r\nQuantity per Page Examples:\r\n\r\n    `/api/oms/pvt/orders?per_page=15`\r\n\r\n\r\n\r\n\r\n\r\n<div class="alert alert-info">Pagination Limit: The limit of pages that can be requested is 30.\r\n</div>\r\n\r\n\r\n\r\n## Time zone query \r\n\r\n| Attribute    | Type      | Description |\r\n| ------------ |:---------:| -----------:|\r\n| `utc` | integer | Time Zone. By including this parameter alone in your query, the call will not convert the UTC nor show the number of orders set for that UTC. To filter orders with the desired UTC, you must also modify date and time in the `f_creationDate=creationDate:` parameter.  |\r\n\r\nTime Zone Example:\r\n\r\n    `/api/oms/pvt/orders?utc=-0200`\r\n\r\n\r\n\r\n\r\n## Request filters \r\n\r\n\r\n## Fulltext\r\n\r\n\r\n| Attribute    | Type      | Description |\r\n| ------------ |:---------:| -----------:|\r\n| `q` | string | Fulltext accepts Order Ids, Client E-mail, Client Document and Client Name  |\r\n\r\n> The `+` caracter isn\'t allowed in Fulltext Search\r\n\r\n\r\nFulltext filter Examples:\r\n\r\nOrderID: \r\n    \r\n    `/api/oms/pvt/orders?q=v212333lux-02`\r\n\r\n\r\nEmail:\r\n    \r\n    `/api/oms/pvt/orders?q=rodrigo.cunha@vtex.com`\r\n\r\n\r\nDocument: \r\n    \r\n    `/api/oms/pvt/orders?q=21133355524`\r\n\r\n\r\nClientName:\r\n\r\n    `/api/oms/pvt/orders?q=Cunha`\r\n\r\n\r\n\r\n\r\n## Shipping Estimate\r\n\r\n| Attribute    | Type      | Description |\r\n| ------------ |:---------:| -----------:|\r\n| `f_shippingEstimate` | string | Concatened value of quantity days and sufix `.days`  |\r\n\r\n\r\n\r\n\r\nShipping Estimate filter Examples:\r\n\r\n\r\nNext 7 days:\r\n\r\n    `/api/oms/pvt/orders?f_shippingEstimate=7.days`\r\n\r\n\r\nTomorrow: \r\n\r\n    `/api/oms/pvt/orders?f_shippingEstimate=1.days`\r\n\r\n\r\nToday:\r\n    \r\n    `/api/oms/pvt/orders?f_shippingEstimate=0.days`\r\n\r\n\r\nLate:\r\n    \r\n    `/api/oms/pvt/orders?f_shippingEstimate=-1.days`\r\n\r\n\r\n\r\n\r\n## Invoiced Date\r\n\r\n| Attribute    | Type      | Description |\r\n| ------------ |:---------:| -----------:|\r\n| `f_invoicedDate` | string | Concatened value sufix `invoicedDate` and range date in Timestamp format  |\r\n\r\n\r\n\r\nInvoiced Date filter Examples:\r\n\r\n1 Day: \r\n\r\n    `/api/oms/pvt/orders?f_invoicedDate=invoicedDate:[2017-01-01T02:00:00.000Z TO 2017-01-02T01:59:59.999Z]`\r\n\r\n\r\n1 Month: \r\n    \r\n    `/api/oms/pvt/orders?f_invoicedDate=invoicedDate:[2017-01-01T02:00:00.000Z TO 2017-02-01T01:59:59.999Z]`\r\n\r\n\r\n1 Year:\r\n\r\n    `/api/oms/pvt/orders?f_invoicedDate=invoicedDate:[2016-01-01T02:00:00.000Z TO 2017-01-01T01:59:59.999Z]`\r\n\r\n\r\n\r\n## Order Date\r\n\r\n| Attribute    | Type      | Description |\r\n| ------------ |:---------:| -----------:|\r\n| `f_creationDate` | string | Concatened value suffix `creationDate` and range date in Timestamp format  |\r\n\r\n\r\n\r\nOrder Date filter Examples:\r\n\r\n1 Day:\r\n\r\n    `/api/oms/pvt/orders?f_creationDate=creationDate:[2017-01-01T02:00:00.000Z TO 2017-01-02T01:59:59.999Z]`\r\n\r\n\r\n1 Month:\r\n\r\n    `/api/oms/pvt/orders?f_creationDate=creationDate:[2017-01-01T02:00:00.000Z TO 2017-02-01T01:59:59.999Z]`\r\n\r\n\r\n1 Year:\r\n\r\n    `/api/oms/pvt/orders?f_creationDate=creationDate:[2016-01-01T02:00:00.000Z TO 2017-01-01T01:59:59.999Z]`\r\n\r\n\r\n\r\n\r\n## Authorized Date\r\n\r\n| Attribute    | Type      | Description |\r\n| ------------ |:---------:| -----------:|\r\n| `f_authorizedDate` | string | Concatened value suffix `authorizedDate` and range date in Timestamp format  |\r\n\r\n\r\n\r\nAuthorized Date filter Examples:\r\n\r\n1 Day:\r\n\r\n    `/api/oms/pvt/orders?f_authorizedDate=authorizedDate:[2017-01-01T02:00:00.000Z TO 2017-01-02T01:59:59.999Z]`\r\n\r\n\r\n1 Month:\r\n\r\n    `/api/oms/pvt/orders?f_authorizedDate=authorizedDate:[2017-01-01T02:00:00.000Z TO 2017-02-01T01:59:59.999Z]`\r\n\r\n\r\n1 Year:\r\n\r\n    `/api/oms/pvt/orders?f_authorizedDate=authorizedDate:[2016-01-01T02:00:00.000Z TO 2017-01-01T01:59:59.999Z]`\r\n\r\n\r\n\r\n\r\n## UTMs\r\n\r\n| Attribute    | Type      | Description |\r\n| ------------ |:---------:| -----------:|\r\n| `f_UtmSource` | string | UTM Source value  |\r\n\r\n\r\n\r\nChannels filter Examples:\r\n\r\n    `/api/oms/pvt/orders?f_UtmSource=buscape_campaign`\r\n\r\n\r\n\r\n\r\n## Seller\r\n\r\n| Attribute    | Type      | Description |\r\n| ------------ |:---------:| -----------:|\r\n| `f_sellerNames` | string | Seller Name value  |\r\n\r\n\r\n\r\nSeller filter Examples:\r\n\r\n    `/api/oms/pvt/orders?f_sellerNames=Fast+Shop`\r\n\r\n\r\n\r\n\r\n## Call Center Operator\r\n\r\n| Attribute    | Type      | Description |\r\n| ------------ |:---------:| -----------:|\r\n| `f_callCenterOperatorName` | string | Call Center Operator Value  |\r\n\r\n\r\n\r\nCall Center Operator filter Examples:\r\n\r\n    `/api/oms/pvt/orders?f_callCenterOperatorName=Operator%20Name`\r\n\r\n\r\n\r\n\r\n## Sales Channel Name\r\n\r\n| Attribute    | Type      | Description |\r\n| ------------ |:---------:| -----------:|\r\n| `f_salesChannel` | string | Sales Channel Name Value  |\r\n\r\n\r\n\r\nSales Channel Name filter Examples:\r\n\r\n    `/api/oms/pvt/orders?f_salesChannel=Main`\r\n\r\n\r\n\r\n\r\n\r\n## Sales Channel ID\r\n\r\n| Attribute    | Type      | Description |\r\n| ------------ |:---------:| -----------:|\r\n| `salesChannelId` | string | Sales Channel ID Value  |\r\n\r\n\r\n\r\nSales Channel ID filter Examples:\r\n\r\n    `/api/oms/pvt/orders?salesChannelId=1`\r\n\r\n\r\n\r\n\r\n\r\n## Affiliate ID\r\n\r\n| Attribute    | Type      | Description |\r\n| ------------ |:---------:| -----------:|\r\n| `f_affiliateId` | string | Affiliate ID Value  |\r\n\r\n\r\n\r\nAffiliate ID filter Examples:\r\n\r\n    `/api/oms/pvt/orders?f_affiliateId=WLM`\r\n\r\n\r\n\r\n\r\n## Order Status \r\n\r\n| Attribute    | Type      | Description |\r\n| ------------ |:---------:| -----------:|\r\n| `f_status` | string | Order Status Value  |\r\n\r\n\r\n\r\n| Order Status avaible to filter    |\r\n| --------------------- |\r\n| `waiting-for-sellers-confirmation` | \r\n| `payment-pending` | \r\n| `payment-approved` | \r\n| `ready-for-handling` | \r\n| `handling` | \r\n| `invoiced` | \r\n| `canceled` | \r\n\r\n\r\nOrder Status filter Examples:\r\n\r\n    `/api/oms/pvt/orders?f_status=ready-for-handling`\r\n\r\n\r\n\r\n\r\n## Order Status Description\r\n\r\n| Attribute    | Type      | Description |\r\n| ------------ |:---------:| -----------:|\r\n| `f_statusDescription` | string | Order Status Description Value  |\r\n\r\n\r\n\r\n\r\n\r\n| Order Status Description avaible to filter |\r\n| --------------------- |\r\n| `Aguardando+autorização+para+despachar` | \r\n| `Pagamento+Pendente` | \r\n| `Pagamento+Aprovado` | \r\n| `Pronto+para+o+manuseio` | \r\n| `Preparando+Entrega` | \r\n| `Faturado` | \r\n| `Cancelado` | \r\n\r\nOrder Status Description filter Examples:\r\n\r\n    `/api/oms/pvt/orders?f_statusDescription=Pronto+para+o+manuseio`\r\n\r\n\r\n\r\n\r\n\r\n## Order Situation\r\n\r\n| Attribute    | Type      | Description |\r\n| ------------ |:---------:| -----------:|\r\n| `incompleteOrders` | boolean | If is a Incomplete Order  |\r\n\r\n\r\n> know more about [Incomplete Orders in VTEX Help](https://help.vtex.com/en/tutorial/understanding-incomplete-orders)\r\n\r\nOrder Situation filter Examples:\r\n\r\n    `/api/oms/pvt/orders?incompleteOrders=true`\r\n\r\n\r\n\r\n\r\n\r\n## Error Situation\r\n\r\n| Attribute    | Type      | Description |\r\n| ------------ |:---------:| -----------:|\r\n| `incompleteOrders` | boolean | Error Situation Type  |\r\n\r\n\r\n\r\n| Error Situation Values avaible to filter |\r\n| ------- |\r\n| `all` | \r\n| `perm` | \r\n| `temp` |  \r\n\r\n\r\nError Situation filter Examples:\r\n\r\n    `/api/oms/pvt/orders?filterError=all`\r\n\r\n\r\n\r\n\r\n\r\n\r\n## Payment Type Name\r\n\r\n| Attribute    | Type      | Description |\r\n| ------------ |:---------:| -----------:|\r\n| `f_paymentNames` | string | Payment Type Value  |\r\n\r\n\r\n\r\nPayment Type Name filter Examples:\r\n\r\n    `/api/oms/pvt/orders?f_paymentNames=Visa`\r\n\r\n\r\n\r\n\r\n\r\n## Rates and Benefits Name\r\n\r\n| Attribute    | Type      | Description |\r\n| ------------ |:---------:| -----------:|\r\n| `f_RnB` | string | Rates and Benefits Name  |\r\n\r\n\r\n\r\nRates and Benefits filter Examples:\r\n\r\n    `/api/oms/pvt/orders?f_RnB="Free+Shipping"`\r\n\r\n\r\n\r\n\r\n## Search Field\r\n\r\n| Attribute    | Type      | Description |\r\n| ------------ |:---------:| -----------:|\r\n| `searchField` | string | Affiliate ID Value  |\r\n| `sku_Ids&sku_Ids` | integer | SKU ID  |\r\n| `listId&listId` | integer | Gift List ID  |\r\n| `tid&tid` | integer | Transaction ID (TID)  |\r\n| `pci_tid&pci_tid` | integer | PCI Connector\'s Transaction ID (TID)  |\r\n| `paymentId&paymentId` | integer | Payment ID (PID)  |\r\n| `nsu&nsu` | integer | Connector\'s NSU  |\r\n\r\n\r\n\r\nSearch Field filter Examples:\r\n\r\nSKU ID:\r\n    \r\n    `/api/oms/pvt/orders?searchField=sku_Ids&sku_Ids=11223`\r\n\r\n\r\n\r\nGift List ID:\r\n    \r\n    `/api/oms/pvt/orders?searchField=listId&listId=11223`\r\n\r\n\r\n    \r\nTransaction ID (TID):\r\n    \r\n    `/api/oms/pvt/orders?searchField=tid&tid=54546300238810034995829230012`\r\n\r\n\r\n    \r\nPCI Connector\'s Transaction ID (TID):\r\n\r\n    `/api/oms/pvt/orders?searchField=pci_tid&pci_tid=7032909234899834298423209`\r\n\r\n\r\n    \r\nPayment ID (PID):\r\n    \r\n    `/api/oms/pvt/orders?searchField=paymentId&paymentId=2`\r\n\r\n\r\n    \r\nConnector\'s NSU:\r\n    \r\n    `/api/oms/pvt/orders?searchField=nsu&nsu=2437281`\r\n\\n\\r\\n\\r## Response objects\\n\\r\\n\\r,\r\n**Response object has the following properties:**\r\n\r\n\r\n| Attribute    | Type        | Description |\r\n| --------------- |:---------:| --------------------------------------:|\r\n| `list` | object | Order List Object |\r\n| `shippingEstimateDate` | string | Estimate Shipping Date |\r\n| `affiliateId` | string | Seller Name who was responsible for the order |\r\n| `authorizedDate` | string | Authorized Order Date |\r\n| `callCenterOperatorData` | string | Call Center Operator responsible for the order |\r\n| `name` | string | Client Name|\r\n| `creationDate` | string | Order Creation Date |\r\n| `currencyCode` | string | Currency Code in ISO 4217  |\r\n| `items` | object | Obsolete Field  |\r\n| `lastMessageUnread` | string | Last sent transactional message  |\r\n| `listId` | string | Releated Gift List Id |\r\n| `listType` | string | Releated Gift List Type |\r\n| `marketplaceOrderId` | string | Marketplace Order Id |\r\n| `orderId` | string | Change receipt order Id |\r\n| `orderIsComplete` | boolean | If is a Order Completed |\r\n| `origin` | string | Order Origin: "Marketplace" or "Fulfillment" |\r\n| `paymentNames` | string | Payment System Name |\r\n| `salesChannel` | string | Order Sales Channel Id |\r\n| `sequence` | string | Order Sequence ID |\r\n| `status` | string | Order Status |\r\n| `statusDescription` | string | Status Description |\r\n| `totalItems` | integer | Total Order Items |\r\n| `totalValue` | integer | Total Value Amount |\r\n| `workflowInErrorState` | boolean | If is a Work Flow Error |\r\n| `workflowInRetry` | boolean | If is in a Work Flow Retry |\r\n| `paging` | object | Paging Details Object |\r\n| `pages` | integer | Paging Total Pages |\r\n| `perPage` | integer | Paging total per Page |\r\n| `total` | integer | Total Result |\r\n| `stats` | object | Results segmented by `totalItems` and `totalValue` |\r\n| `totalItems` | integer | Total Order Items segmeted by `currencyCode` and `origin`|\r\n| `totalValue` | integer | Total Value Amount segmeted by `currencyCode` and `origin`|\r\n| `currencyCode` | string | Currency Code in ISO 4217  |\r\n| `origin` | string | Order Origin: "Marketplace" or "Fulfillment" |\r\n| `Count` | integer | Orders Count |\r\n| `Facets` | object | Grouping Object |\r\n| `Max` | object | Paging Details Object |\r\n| `Mean` | object | Paging Details Object |\r\n| `Min` | object | Paging Details Object |\r\n| `Missing` | object | Paging Details Object |\r\n| `StdDev` | object | Paging Details Object |\r\n| `Sum` | object | Paging Details Object |\r\n| `SumOfSquares` | object | Paging Details Object |',
  operationId: 'ListOrders2',
  request: {
    headers: z.object({ 'Content-Type': ContentTypeParamsSchema, Accept: AcceptParamsSchema }),
    query: z.object({ f_hasInputInvoice: FHasInputInvoiceParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              f_creationDate: z
                .string()
                .openapi({
                  description:
                    'Concatened value sufix {{creationDate}} and range date in Timestamp format.',
                  example: 'creationDate:[2021-11-01T00:00:00.000Z TO 2022-11-10T02:00:00.000Z]',
                }),
              page: z
                .int()
                .openapi({ description: 'Number of the page to be retrieved.', example: 1 }),
              per_page: z.int().openapi({ description: 'Number of orders per page.', example: 15 }),
              q: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Full-text search for the orders.',
                  example: 'Postman Test',
                }),
            })
            .openapi({ required: ['f_creationDate', 'per_page', 'page'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json; charset=utf-8': {
          schema: ListOrdersSchema,
          example: {
            facets: [],
            list: [
              {
                ShippingEstimatedDate: null,
                ShippingEstimatedDateMax: null,
                ShippingEstimatedDateMin: null,
                affiliateId: '',
                authorizedDate: '2019-02-07T21:29:54+00:00',
                callCenterOperatorName: null,
                clientName: 'J C',
                creationDate: '2019-02-04T10:29:11+00:00',
                currencyCode: 'BRL',
                items: null,
                lastMessageUnread:
                  ' Lux Store 96 Sua Nota Fiscal foi emitida. Referente ao Pedido #v502559llux-01 Olá, J. Estamos empacotando seu produto para providenci',
                listId: null,
                listType: null,
                marketPlaceOrderId: null,
                orderId: 'v502559llux-01',
                orderIsComplete: true,
                origin: 'Marketplace',
                paymentNames: 'Boleto Bancário',
                salesChannel: '1',
                sequence: '502559',
                status: 'invoiced',
                statusDescription: 'Faturado',
                totalItems: 1,
                totalValue: 7453,
                workflowInErrorState: false,
                workflowInRetry: false,
              },
              {
                ShippingEstimatedDate: '2019-02-04T20:33:46+00:00',
                ShippingEstimatedDateMax: null,
                ShippingEstimatedDateMin: null,
                affiliateId: '',
                authorizedDate: '2019-01-28T20:33:04+00:00',
                callCenterOperatorName: null,
                clientName: 'Rodrigo VTEX',
                creationDate: '2019-01-28T20:09:43+00:00',
                currencyCode: 'BRL',
                items: null,
                lastMessageUnread:
                  ' Lux Store Seu pedido foi alterado! Pedido realizado em: 28/01/2019 Olá, Rodrigo. Seu pedido foi alterado. Seguem informações abaixo: ',
                listId: null,
                listType: null,
                marketPlaceOrderId: null,
                orderId: 'v502556llux-01',
                orderIsComplete: true,
                origin: 'Marketplace',
                paymentNames: 'Boleto Bancário',
                salesChannel: '1',
                sequence: '502556',
                status: 'handling',
                statusDescription: 'Preparando Entrega',
                totalItems: 1,
                totalValue: 1160,
                workflowInErrorState: false,
                workflowInRetry: false,
              },
              {
                ShippingEstimatedDate: '2019-01-31T12:36:30+00:00',
                ShippingEstimatedDateMax: null,
                ShippingEstimatedDateMin: null,
                affiliateId: '',
                authorizedDate: '2019-01-24T12:36:01+00:00',
                callCenterOperatorName: null,
                clientName: 'test test',
                creationDate: '2019-01-24T12:35:19+00:00',
                currencyCode: 'BRL',
                items: null,
                lastMessageUnread:
                  ' Lux Store 96 Sua Nota Fiscal foi emitida. Referente ao Pedido #v502553llux-01 Olá, test. Estamos empacotando seu produto para provide',
                listId: null,
                listType: null,
                marketPlaceOrderId: null,
                orderId: 'v502553llux-01',
                orderIsComplete: true,
                origin: 'Marketplace',
                paymentNames: 'Mastercard',
                salesChannel: '1',
                sequence: '502554',
                status: 'ready-for-handling',
                statusDescription: 'Pronto para o manuseio',
                totalItems: 1,
                totalValue: 10150,
                workflowInErrorState: false,
                workflowInRetry: false,
              },
              {
                ShippingEstimatedDate: '2019-01-30T16:40:55+00:00',
                ShippingEstimatedDateMax: null,
                ShippingEstimatedDateMin: null,
                affiliateId: '',
                authorizedDate: '2019-01-23T16:40:27+00:00',
                callCenterOperatorName: null,
                clientName: 'test test',
                creationDate: '2019-01-23T16:39:45+00:00',
                currencyCode: 'BRL',
                items: null,
                lastMessageUnread:
                  ' Lux Store 96 Seu pagamento foi aprovado. Referente ao Pedido #v502550llux-01 Olá, test. Estamos providenciando a emissão da Nota Fisc',
                listId: null,
                listType: null,
                marketPlaceOrderId: null,
                orderId: 'v502550llux-01',
                orderIsComplete: true,
                origin: 'Marketplace',
                paymentNames: 'Mastercard',
                salesChannel: '1',
                sequence: '502551',
                status: 'ready-for-handling',
                statusDescription: 'Pronto para o manuseio',
                totalItems: 1,
                totalValue: 10150,
                workflowInErrorState: false,
                workflowInRetry: false,
              },
              {
                ShippingEstimatedDate: '2019-01-30T16:35:30+00:00',
                ShippingEstimatedDateMax: null,
                ShippingEstimatedDateMin: null,
                affiliateId: '',
                authorizedDate: '2019-01-23T16:35:04+00:00',
                callCenterOperatorName: null,
                clientName: 'test test',
                creationDate: '2019-01-23T16:34:20+00:00',
                currencyCode: 'BRL',
                items: null,
                lastMessageUnread:
                  ' Lux Store 96 Seu pagamento foi aprovado. Referente ao Pedido #v502547llux-01 Olá, test. Estamos providenciando a emissão da Nota Fisc',
                listId: null,
                listType: null,
                marketPlaceOrderId: null,
                orderId: 'v502547llux-01',
                orderIsComplete: true,
                origin: 'Marketplace',
                paymentNames: 'Mastercard',
                salesChannel: '1',
                sequence: '502548',
                status: 'ready-for-handling',
                statusDescription: 'Pronto para o manuseio',
                totalItems: 1,
                totalValue: 10150,
                workflowInErrorState: false,
                workflowInRetry: false,
              },
              {
                ShippingEstimatedDate: null,
                ShippingEstimatedDateMax: null,
                ShippingEstimatedDateMin: null,
                affiliateId: '',
                authorizedDate: null,
                callCenterOperatorName: null,
                clientName: 'test test',
                creationDate: '2018-12-28T18:15:28+00:00',
                currencyCode: 'BRL',
                items: null,
                lastMessageUnread:
                  ' Lux Store 96 Seu pedido foi cancelado. Referente ao Pedido #v502544llux-01 Resumo Itens R$ 89,90 Total R$ 89,90 Produto Alavanca De M',
                listId: null,
                listType: null,
                marketPlaceOrderId: null,
                orderId: 'v502544llux-01',
                orderIsComplete: true,
                origin: 'Marketplace',
                paymentNames: 'Boleto Bancário',
                salesChannel: '1',
                sequence: '502544',
                status: 'canceled',
                statusDescription: 'Cancelado',
                totalItems: 1,
                totalValue: 8990,
                workflowInErrorState: false,
                workflowInRetry: false,
              },
              {
                ShippingEstimatedDate: null,
                ShippingEstimatedDateMax: null,
                ShippingEstimatedDateMin: null,
                affiliateId: '',
                authorizedDate: null,
                callCenterOperatorName: null,
                clientName: 'Douglas Rodrigues',
                creationDate: '2018-12-18T18:48:17+00:00',
                currencyCode: 'BRL',
                items: null,
                lastMessageUnread:
                  ' Lux Store 96 Seu pedido foi cancelado. Referente ao Pedido #v502541llux-01 Resumo Itens R$ 32,90 Total R$ 32,90 Produto Bay Max L 1 u',
                listId: null,
                listType: null,
                marketPlaceOrderId: null,
                orderId: 'v502541llux-01',
                orderIsComplete: true,
                origin: 'Marketplace',
                paymentNames: 'Boleto Bancário',
                salesChannel: '1',
                sequence: '502541',
                status: 'canceled',
                statusDescription: 'Cancelado',
                totalItems: 1,
                totalValue: 3290,
                workflowInErrorState: false,
                workflowInRetry: false,
              },
              {
                ShippingEstimatedDate: '2018-12-19T18:22:26+00:00',
                ShippingEstimatedDateMax: null,
                ShippingEstimatedDateMin: null,
                affiliateId: '',
                authorizedDate: '2018-12-12T18:22:22+00:00',
                callCenterOperatorName: null,
                clientName: 'test test',
                creationDate: '2018-12-12T18:21:47+00:00',
                currencyCode: 'BRL',
                items: null,
                lastMessageUnread:
                  ' Lux Store 96 Seu pagamento foi aprovado. Referente ao Pedido #v502538llux-01 Olá, test. Estamos providenciando a emissão da Nota Fisc',
                listId: null,
                listType: null,
                marketPlaceOrderId: null,
                orderId: 'v502538llux-01',
                orderIsComplete: true,
                origin: 'Marketplace',
                paymentNames: 'Mastercard',
                salesChannel: '1',
                sequence: '502538',
                status: 'ready-for-handling',
                statusDescription: 'Pronto para o manuseio',
                totalItems: 1,
                totalValue: 8990,
                workflowInErrorState: false,
                workflowInRetry: false,
              },
              {
                ShippingEstimatedDate: null,
                ShippingEstimatedDateMax: null,
                ShippingEstimatedDateMin: null,
                affiliateId: 'SCP',
                authorizedDate: '2018-11-30T17:34:42+00:00',
                callCenterOperatorName: null,
                clientName: 'roberta grecco',
                creationDate: '2018-11-30T17:34:01+00:00',
                currencyCode: 'BRL',
                items: null,
                lastMessageUnread: 'cancelamento teste shp ',
                listId: null,
                listType: null,
                marketPlaceOrderId: '880102018018-01',
                orderId: 'SCP-880102018018-01',
                orderIsComplete: true,
                origin: 'Fulfillment',
                paymentNames: '',
                salesChannel: '1',
                sequence: '502537',
                status: 'canceled',
                statusDescription: 'Cancelado',
                totalItems: 1,
                totalValue: 1250,
                workflowInErrorState: false,
                workflowInRetry: false,
              },
              {
                ShippingEstimatedDate: null,
                ShippingEstimatedDateMax: null,
                ShippingEstimatedDateMin: null,
                affiliateId: 'SCP',
                authorizedDate: '2018-11-30T17:29:22+00:00',
                callCenterOperatorName: null,
                clientName: 'roberta grecco',
                creationDate: '2018-11-30T17:28:35+00:00',
                currencyCode: 'BRL',
                items: null,
                lastMessageUnread: null,
                listId: null,
                listType: null,
                marketPlaceOrderId: '880091692043-01',
                orderId: 'SCP-880091692043-01',
                orderIsComplete: true,
                origin: 'Fulfillment',
                paymentNames: '',
                salesChannel: '1',
                sequence: '502536',
                status: 'invoiced',
                statusDescription: 'Faturado',
                totalItems: 1,
                totalValue: 1250,
                workflowInErrorState: false,
                workflowInRetry: false,
              },
              {
                ShippingEstimatedDate: null,
                ShippingEstimatedDateMax: null,
                ShippingEstimatedDateMin: null,
                affiliateId: 'SCP',
                authorizedDate: '2018-11-30T17:18:44+00:00',
                callCenterOperatorName: null,
                clientName: 'roberta grecco',
                creationDate: '2018-11-30T17:18:00+00:00',
                currencyCode: 'BRL',
                items: null,
                lastMessageUnread: 'Teste de cancelamento do ShopFácil ',
                listId: null,
                listType: null,
                marketPlaceOrderId: '880091058221-01',
                orderId: 'SCP-880091058221-01',
                orderIsComplete: true,
                origin: 'Fulfillment',
                paymentNames: '',
                salesChannel: '1',
                sequence: '502535',
                status: 'canceled',
                statusDescription: 'Cancelado',
                totalItems: 1,
                totalValue: 1250,
                workflowInErrorState: false,
                workflowInRetry: false,
              },
              {
                ShippingEstimatedDate: '2018-12-07T17:11:39+00:00',
                ShippingEstimatedDateMax: null,
                ShippingEstimatedDateMin: null,
                affiliateId: 'SCP',
                authorizedDate: '2018-11-30T17:11:42+00:00',
                callCenterOperatorName: null,
                clientName: 'roberta grecco',
                creationDate: '2018-11-30T17:10:59+00:00',
                currencyCode: 'BRL',
                items: null,
                lastMessageUnread: null,
                listId: null,
                listType: null,
                marketPlaceOrderId: '880090643370-01',
                orderId: 'SCP-880090643370-01',
                orderIsComplete: true,
                origin: 'Fulfillment',
                paymentNames: '',
                salesChannel: '1',
                sequence: '502534',
                status: 'ready-for-handling',
                statusDescription: 'Pronto para o manuseio',
                totalItems: 1,
                totalValue: 1250,
                workflowInErrorState: false,
                workflowInRetry: false,
              },
              {
                ShippingEstimatedDate: null,
                ShippingEstimatedDateMax: null,
                ShippingEstimatedDateMin: null,
                affiliateId: 'SCP',
                authorizedDate: null,
                callCenterOperatorName: null,
                clientName: 'roberta grecco',
                creationDate: '2018-11-30T17:10:45+00:00',
                currencyCode: 'BRL',
                items: null,
                lastMessageUnread: null,
                listId: null,
                listType: null,
                marketPlaceOrderId: '880090622238-01',
                orderId: 'SCP-880090622238-01',
                orderIsComplete: true,
                origin: 'Fulfillment',
                paymentNames: '',
                salesChannel: '1',
                sequence: '502533',
                status: 'canceled',
                statusDescription: 'Cancelado',
                totalItems: 1,
                totalValue: 1250,
                workflowInErrorState: false,
                workflowInRetry: false,
              },
              {
                ShippingEstimatedDate: null,
                ShippingEstimatedDateMax: null,
                ShippingEstimatedDateMin: null,
                affiliateId: 'MNC',
                authorizedDate: '2018-11-20T21:13:06+00:00',
                callCenterOperatorName: null,
                clientName: 'Carlos VTEX',
                creationDate: '2018-11-20T21:09:01+00:00',
                currencyCode: 'BRL',
                items: null,
                lastMessageUnread: null,
                listId: null,
                listType: null,
                marketPlaceOrderId: '877730530419-01',
                orderId: 'MNC-877730530419-01',
                orderIsComplete: true,
                origin: 'Fulfillment',
                paymentNames: '',
                salesChannel: '1',
                sequence: '502532',
                status: 'canceled',
                statusDescription: 'Cancelado',
                totalItems: 1,
                totalValue: 11150,
                workflowInErrorState: false,
                workflowInRetry: false,
              },
              {
                ShippingEstimatedDate: '2018-11-23T16:58:48+00:00',
                ShippingEstimatedDateMax: null,
                ShippingEstimatedDateMin: null,
                affiliateId: 'SCP',
                authorizedDate: '2018-11-16T16:58:53+00:00',
                callCenterOperatorName: null,
                clientName: 'roberta grecco',
                creationDate: '2018-11-16T16:58:18+00:00',
                currencyCode: 'BRL',
                items: null,
                lastMessageUnread: null,
                listId: null,
                listType: null,
                marketPlaceOrderId: '876733475998-01',
                orderId: 'SCP-876733475998-01',
                orderIsComplete: true,
                origin: 'Fulfillment',
                paymentNames: '',
                salesChannel: '1',
                sequence: '502531',
                status: 'ready-for-handling',
                statusDescription: 'Pronto para o manuseio',
                totalItems: 1,
                totalValue: 1250,
                workflowInErrorState: false,
                workflowInRetry: false,
              },
            ],
            paging: { currentPage: 1, pages: 6, perPage: 15, total: 84 },
            stats: {
              stats: {
                totalItems: {
                  Count: 84,
                  Facets: {
                    currencyCode: {
                      BRL: {
                        Count: 84,
                        Facets: null,
                        Max: 89,
                        Mean: 2.2261904761904763,
                        Min: 1,
                        Missing: 0,
                        StdDev: 9.660940100525016,
                        Sum: 187,
                        SumOfSquares: 8163,
                      },
                    },
                    origin: {
                      Fulfillment: {
                        Count: 68,
                        Facets: null,
                        Max: 1,
                        Mean: 1,
                        Min: 1,
                        Missing: 0,
                        StdDev: 0,
                        Sum: 68,
                        SumOfSquares: 68,
                      },
                      Marketplace: {
                        Count: 16,
                        Facets: null,
                        Max: 89,
                        Mean: 7.4375,
                        Min: 1,
                        Missing: 0,
                        StdDev: 21.92401651157926,
                        Sum: 119,
                        SumOfSquares: 8095,
                      },
                    },
                  },
                  Max: 89,
                  Mean: 2.2261904761904763,
                  Min: 1,
                  Missing: 0,
                  StdDev: 9.660940100525016,
                  Sum: 187,
                  SumOfSquares: 8163,
                },
                totalValue: {
                  Count: 84,
                  Facets: {
                    currencyCode: {
                      BRL: {
                        Count: 84,
                        Facets: null,
                        Max: 21526180,
                        Mean: 262672.75,
                        Min: 1160,
                        Missing: 0,
                        StdDev: 2348087.3869179883,
                        Sum: 22064511,
                        SumOfSquares: 463417439039853,
                      },
                    },
                    origin: {
                      Fulfillment: {
                        Count: 68,
                        Facets: null,
                        Max: 11150,
                        Mean: 1395.5882352941176,
                        Min: 1250,
                        Missing: 0,
                        StdDev: 1200.5513439298484,
                        Sum: 94900,
                        SumOfSquares: 229010000,
                      },
                      Marketplace: {
                        Count: 16,
                        Facets: null,
                        Max: 21526180,
                        Mean: 1373100.6875,
                        Min: 1160,
                        Missing: 0,
                        StdDev: 5374326.141087491,
                        Sum: 21969611,
                        SumOfSquares: 463417210029853,
                      },
                    },
                  },
                  Max: 21526180,
                  Mean: 262672.75,
                  Min: 1160,
                  Missing: 0,
                  StdDev: 2348087.3869179883,
                  Sum: 22064511,
                  SumOfSquares: 463417439039853,
                },
              },
            },
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
          .openapi({ example: 'close', param: { required: false } }),
        'Content-Encoding': z
          .string()
          .exactOptional()
          .openapi({ example: 'gzip', param: { required: false } }),
        Date: z
          .string()
          .exactOptional()
          .openapi({ example: 'Mon, 13 Feb 2017 15:25:12 GMT', param: { required: false } }),
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
        'X-CDNIgnore': z
          .string()
          .exactOptional()
          .openapi({ example: '1', param: { required: false } }),
        'X-Powered-by-VTEX-Janus-Edge': z
          .string()
          .exactOptional()
          .openapi({ example: 'v1.35.3', param: { required: false } }),
        'X-Track': z
          .string()
          .exactOptional()
          .openapi({ example: 'stable', param: { required: false } }),
        'X-VTEX-Janus-Router-Backend-App': z
          .string()
          .exactOptional()
          .openapi({ example: 'omsapi-v1.5.135', param: { required: false } }),
      }),
    },
  },
})

export const getApiOrdersPvtDocumentOrderIdRoute = createRoute({
  method: 'get',
  path: '/api/orders/pvt/document/{orderId}',
  tags: ['Orders'],
  summary: 'Get order',
  description:
    'Retrieves order details by searching a specific order ID.\n\r\n\r>If you wish to retrieve unmasked data, use the `reason` parameter.\n\r\n\r> The `View order` resource is needed to use this API request. This is included in `OMS - Full access` and `IntegrationProfile - Fulfillment Oms`, among other default roles available in the Admin. Learn more about the [License manager roles and resources](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#).\n\r\n\r> Check the new [Orders onboarding guide](https://developers.vtex.com/vtex-rest-api/docs/orders-overview). We created this guide to improve the onboarding experience for developers at VTEX. It assembles all documentation on our Developer Portal about Orders and is organized by focusing on the developer\'s journey.\n\r\n\r> Throttling: Each account can make up to 5000 requests per minute.\n\r\n\r## Request object has the following properties:\r\n\r\n| Attribute    | Type        | Description |\r\n| --------------- |:---------:| --------------------------------------:|\r\n| `orderId` | string | Order Id |\r\n\r\n\r\n## Response object has the following properties:\r\n\r\n\r\n| Attribute    | Type        | Description |\r\n| --------------- |:---------:| --------------------------------------:|\r\n| `affiliateId` | string | Seller Name who was responsible for the order |\r\n| `allowCancellation` | boolean | If Cancellation is allowed |\r\n| `allowEdition` | boolean | If Order Edition is allowed |\r\n| `approvedBy` | string | User who approved the order |\r\n| `authorizedDate` | string | Authorized Order Date |\r\n| `callCenterOperatorData` | string | Call Center Operator responsible for the order |\r\n| `cancelReason` | string | Cancel Reason |\r\n| `cancelledBy` | string | User who Cancelled the order |\r\n| `changesAttachment` | object | Change details object |\r\n| `changesData` | object | Array with each change |\r\n| `discountValue` | integer | Change Discount Value |\r\n| `incrementValue` | integer | Change Increment Value |\r\n| `itemsAdded` | object | Added items details |\r\n| `itemsRemoved` | object | Removed items details |\r\n| `id` | integer | Changed SKU ID |\r\n| `name` | string | Changed SKU Name |\r\n| `price` | integer | Changed SKU Price |\r\n| `quantity` | integer | Changed SKU Quantity |\r\n| `unitMultiplier` | integer | Changed SKU Unit Multiplier |\r\n| `reason` | string | Change Reason |\r\n| `receipt` | object | Change receipt details object |\r\n| `date` | string | Change receipt date |\r\n| `orderId` | string | Change receipt order Id |\r\n| `receipt` | object | Change receipt ID |\r\n| `id` | string | Object Id, expect value "changeAttachment" |\r\n| `clientProfileData` | object | Object with all Cliente Profile Data |\r\n| `corporateDocument` | string | Client Corporate Document |\r\n| `corporateName` | string | Client Corporate Name |\r\n| `corporatePhone` | string | Cliente Corporate Telephone |\r\n| `customerClass` | string | Customer class |\r\n| `document` | string | Client Document |\r\n| `documentType` | string | Client Document Type |\r\n| `email` | string | Client e-mail |\r\n| `firstName` | string | Client First Name |\r\n| `id` | string | Object ID, expected value "clientProfileData" |\r\n| `isCorporate` | string | If the Client is a Corporate Client |\r\n| `lastName` | string | Client Last Name|\r\n| `phone` | string | Client Telephone |\r\n| `stateInscription` | string | Client Corporate Inscription |\r\n| `tradeName` | string | Client Corporate Trade Name |\r\n| `userProfileId` | string | Client User Profile ID |\r\n| `commercialConditionData` | object | Commercial condition information, including `"Id"`, `"parentOrderId"`, and `"reason"` |\r\n| `creationDate` | string | Order Creation Date |\r\n| `customData` | object | Custom Data Object |\r\n| `customApps` | object | Custom apps details object |\r\n| `fields` | object | Custom app fields |\r\n| `id` | string | Custom App ID |\r\n| `major` | integer | Major |\r\n| `emailTracked` | string | Client Conversation Tracker email  |\r\n| `followUpEmail` | string | Responsible store e-mail |\r\n| `giftRegistryData` | object | Gift registry list information, including `"addressId"` (object), `"description"` (string), and `"giftRegistryId"` (string) |\r\n| `hostname` | string | Account hostname registered in License Manager |\r\n| `invoiceData` | object | Information pertinent to the order\'s invoice |\r\n| `invoicedDate` | string | Invoice Date |\r\n| `isCheckedIn` | boolean | True if order is from inStore |\r\n| `isCompleted` | boolean | True if the order is completed |\r\n| `items` | object | Order items object |\r\n| `additionalInfo` | string | Order item additional info |\r\n| `brandId` | string | Brand ID |\r\n| `brandName` | string | Brand name |\r\n| `categoriesIds` | string | Item category ID |\r\n| `commercialConditionId` | string | Invoice date |\r\n| `dimension` | object | Item dimension object |\r\n| `cubicweight` | number | Item cubic weight |\r\n| `height` | number | Item height |\r\n| `length` | number | Item length |\r\n| `weight` | number | Item weight |\r\n| `width` | number | Item width |\r\n| `offeringInfo` | string | Extra information on offering |\r\n| `offeringType` | string | Offering type |\r\n| `offeringTypeId` | string | ID of offering type |\r\n| `productClusterId` | string | All releated product clusters |\r\n| `attachments` | object | Attachents Array |\r\n| `content` | object | Attachment Content Custom Field |\r\n| `name` | string | Attachment Name |\r\n| `bundleItems` | object | Invoice date |\r\n| `commission` | string | Comission value registered to Seller |\r\n| `components` | object | If item is a kit, contains components information |\r\n| `detailUrl` | string | Product Slug URL |\r\n| `ean` | string | SKU EAN |\r\n| `freightCommission` | integer | Comission value registered to seller |\r\n| `id` | string | SKU Id |\r\n| `imageUrl` | string | SKU Image URL |\r\n| `isGift` | string | If this item is a gift in order context |\r\n| `itemAttachment` | object | Attachment Object |\r\n| `content` | object | Attachment Content Array |\r\n| `name` | string | Attachment Name |\r\n| `listPrice` | integer | Item List Price |\r\n| `lockId` | string | Reservation ID |\r\n| `manualPrice` | string | Manually inserted price, if there is one. |\r\n| `measurementUnit` | string | Item measurement unit |\r\n| `name` | string | Item name |\r\n| `offerings` | object | Offerings information |\r\n| `params` | object | "ContextParameter" hashset with `"name"` and `"value"` |\r\n| `preSaleDate` | string | Item pre sale date |\r\n| `price` | integer | Item Price |\r\n| `items[].priceDefinition`                        | Object   | Price information for all units of a specific item.                                                                                                                  |\r\n| `items[].priceDefinition.total`                  | Integer  | Total value for all units of the item in cents.                                                                                                                      |\r\n| `items[].priceDefinition.calculatedSellingPrice` | Integer  | Item\'s calculated unitary selling price in cents.                                                                                                                    |\r\n| `items[].priceDefinition.sellingPrices`          | Array    | Array of objects, each containing `value` (in cents) and `quantity` for the different rounding instances that can be combined to form the correctly rounded `total`. |\r\n| `priceTags` | object | Object with all price modifiers |\r\n| `identifier` | string | Price Tag ID |\r\n| `isPercentual` | boolean | Indicates whether the price tag is a percentual modifier |\r\n| `name` | string | Price tag name |\r\n| `rawValue` | string | Price tag raw value |\r\n| `value` | string | Price tag value |\r\n| `priceValidUntil` | string | Price expiration date |\r\n| `productId` | string | Item product ID |\r\n| `quantity` | integer | Item quantity |\r\n| `refId` | string | Item reference ID |\r\n| `rewardValue` | integer | Item reward value |\r\n| `seller` | string | Item seller |\r\n| `sellerSku` | string | Invoice Date |\r\n| `sellingPrice` | integer | Item selling price. For more accurate information, see the `priceDefinition` field |\r\n| `shippingPrice` | string | Item Shipping Price |\r\n| `tax` | integer | Item Tax |\r\n| `taxCode` | string | Item Tax Code |\r\n| `uniqueId` | string | Item Order Unique ID |\r\n| `unitMultiplier` | integer | Item Unit Multipler |\r\n| `lastChange` | string | Order Last Change Date |\r\n| `lastMessage` | string | initial excerpt from last message sent to the customer |\r\n| `marketingData` | string | Marketing Data Object |\r\n| `coupon` | string | Order Disccount Coupon |\r\n| `id` | string |  Object ID, expected value "marketingData" |\r\n| `marketingTags` | object | Marketing Tags Array |\r\n| `utmCampaign` | string | UTM Campaign Parameters |\r\n| `utmMedium` | string | UTM Medium Parameters |\r\n| `utmPartner` | string | UTM Source Parameters |\r\n| `utmSource` | string | UTM Source Parameters|\r\n| `utmiCampaign` | string | UTMI Campaign Internal Parameters |\r\n| `utmiPart` | string | UTMI Part Internal Parameters |\r\n| `utmipage` | string | UTMI Page Internal Parameters |\r\n| `marketplace` | object | Marketplace Details Object |\r\n| `baseURL` | string | Marketplace Base URL |\r\n| `isCertified` | string | If is a Certified Marketplace |\r\n| `name` | string | Marketplace Name |\r\n| `marketplaceItems` | object | Marketplace Details Object |\r\n| `marketplaceOrderId` | string | Marketplace Order Id |\r\n| `marketplaceServicesEndpoint` | string | Marketplace Services Endpoint |\r\n| `merchantName` | string | Merchant Name |\r\n| `openTextField` | object | Open Text Field Object |\r\n| `value` | string | Open Text Field Value |\r\n| `orderFormId` | string | Order Form Id |\r\n| `orderGroup` | string | Order Group Id |\r\n| `orderId` | string | Order Id |\r\n| `origin` | string | Order Origin: "Marketplace", "Fulfillment", or "Chain" (for the third level in a [Multilevel Omnichannel Inventory](https://help.vtex.com/en/tutorial/multilevel-omnichannel-inventory--7M1xyCZWUyCB7PcjNtOyw4?&utm_source=autocomplete#) purchase). |\r\n| `packageAttachment` | object | Package Object |\r\n| `packages` | object | Packages Details Object, populated after order invoiced |\r\n| `cfop` | string | Fiscal code for operations and installments |\r\n| `courier` | string | Package selected Courier |\r\n| `courierStatus` | string | Package Tracking Status |\r\n| `data` | object | Package Tracking Timeline |\r\n| `finished` | string | If the delivery are finished |\r\n| `status` | string | Courier Status |\r\n| `embeddedInvoice` | string | XML of the invoice |\r\n| `invoiceKey` | string | Invoice Credencial Key |\r\n| `invoiceNumber` | string | Package Invoice Number |\r\n| `invoiceUrl` | string | Package Invoice URL |\r\n| `invoiceValue` | string | Package Invoice Value |\r\n| `issuanceDate` | string | Package Issuance Date |\r\n| `items` | string | Items Package Array |\r\n| `description` | string | Item Desciprtion |\r\n| `itemIndex` | string | Item Index |\r\n| `price` | string | Item Price |\r\n| `quantity` | string | Item Quantity |\r\n| `unitMultiplier` | string | Unit Multiplier |\r\n| `trackingNumber` | string | Package Tracking Number |\r\n| `trackingUrl` | string | Tracking Order URL |\r\n| `type` | string | Invoice Type, expected values "Output" and "Input" |\r\n| `paymentData` | object | Payment Object |\r\n| `transactions` | object | Transactions Object |\r\n| `isActive` | boolean | If the payment is Active |\r\n| `merchantName` | string | Merchant Name|\r\n| `payments` | object | Payment Object |\r\n| `cardHolder` | string | Payment Card Holder |\r\n| `connectorResponses` | object | Connector Responses Object |\r\n| `billingAddress` | object | Billing Address information |\r\n| `Message` | string | Connector Responses Message |\r\n| `ReturnCode` | string | Connector Return Code |\r\n| `Tid` | string | Connector Transaction ID |\r\n| `acquirer` | string | Connector acquirer |\r\n| `authId` | string | Connector authorization ID |\r\n| `dueDate` | string | Payment due date |\r\n| `firstDigits` | string | Payment card first digits |\r\n| `giftCardCaption` | string | Gift card caption |\r\n| `giftCardId` | string | Gift card ID |\r\n| `giftCardName` | string | Gift card name |\r\n| `group` | string | Payment group |\r\n| `id` | string | Payment ID |\r\n| `installments` | string | Payment installments quantity |\r\n| `lastDigits` | string | Payment card last digits |\r\n| `paymentSystem` | string | Payment system type ID |\r\n| `paymentSystemName` | string | Payment system name |\r\n| `redemptionCode` | string | Gift card redemption code |\r\n| `referenceValue` | string | Payment reference value |\r\n| `tid` | string | Payment transaction ID |\r\n| `url` | string | Payment URL |\r\n| `value` | string | Payment value with interest if it applies |\r\n| `transactionId` | string | Transaction Id |\r\n| `ratesAndBenefitsData` | string | Rates and Benefits Data Object |\r\n| `id` | string |  Object ID, expected value "ratesAndBenefitsData" |\r\n| `rateAndBenefitsIdentifiers` | object | Rates and Benefits Details Object |\r\n| `additionalInfo` | string |  Rates and Benefits Additional Info |\r\n| `description` | string | Rates and Benefits Description |\r\n| `featured` | string |  If is allowed to acumulate the Rates and Benefits |\r\n| `matchedParameters` | object | March Parameters Array |\r\n| `name` | string |  Rates and Benefits Name |\r\n| `roundingError` | integer | Rounding Error Total Amount  |\r\n| `salesChannel` | string | Order Sales Channel Id |\r\n| `sellerOrderId` | string | Order Seller Id |\r\n| `sellers` | object | Sellers Array |\r\n| `id` | string | Seller Id |\r\n| `logo` | string | URL Seller Logo |\r\n| `name` | string | Seller Name |\r\n| `sequence` | string | Order Sequence ID |\r\n| `shippingData` | object | Shipping Data Object |\r\n| `address` | object | Shipping Address |\r\n| `addressId` | string | Shipping Address Id |\r\n| `addressType` | string | Shipping Address Type |\r\n| `city` | string | Shipping City |\r\n| `complement` | string | Shipping Complement |\r\n| `country` | string | Shipping Country in ISO 3166 ALPHA-3 abbreviation  |\r\n| `geoCoordinates` | object | Shipping Geo Coordinates Array |\r\n| `neighborhood` | string | Shipping Neighborhood |\r\n| `number` | string | Shipping Number |\r\n| `postalCode` | string | Shipping Postal Code |\r\n| `receiverName` | string | Shipping Receiver Name |\r\n| `reference` | string | Shipping Reference |\r\n| `state` | string | Shipping State |\r\n| `street` | string | Shipping Street |\r\n| `id` | string | Object ID, expected value "shippingData"|\r\n| `logisticsInfo` | object | Logistics Info Object |\r\n| `addressId` | string | Adress Id |\r\n| `deliveryChannel` | string | Delivery Channel, allowed values "delivery" or "pickup-in-point" |\r\n| `deliveryCompany` | string | Courier Company Name |\r\n| `deliveryIds` | object | Delivery Ids Object |\r\n| `courierId` | string | Courier Id |\r\n| `courierName` | string | Courier Name |\r\n| `dockId` | string | Releated Dock Id |\r\n| `quantity` | integer | Items Quantity |\r\n| `warehouseId` | string | Releated Warehouse Id |\r\n| `deliveryWindow` | object | Delivery Window Object |\r\n| `endDateUtc` | string | Delivery Date End in UTC  |\r\n| `price` | string | Delivery Window Cost |\r\n| `startDateUtc` | string | Delivery Date Starts in UTC |\r\n| `itemIndex` | integer | Logistic Info Item Index |\r\n| `listPrice` | integer | Logistic Info Item List Price |\r\n| `lockTTL` | string | Stock reservation waiting period |\r\n| `pickupStoreInfo` | object | Pickup Store Info Object |\r\n| `additionalInfo` | string | Pickup Store Additional Info |\r\n| `address` | string | Pickup Store Address |\r\n| `dockId` | string | Pickup Store Releated Dock Id |\r\n| `friendlyName` | string | Pickup Store Friendly Name |\r\n| `isPickupStore` | boolean | If is a Pickup Store |\r\n| `polygonName` | string | Releated Polygom Name |\r\n| `price` | integer | Logistic Info Item Price |\r\n| `selectedSla` | string | Selected SLA |\r\n| `sellingPrice` | integer | Logistic Info Item Selling Price |\r\n| `shippingEstimate` | string | Estimate Shipping Duration |\r\n| `shippingEstimateDate` | string | Estimate Shipping Date |\r\n| `shipsTo` | object | Shipping Country in ISO 3166 ALPHA-3 abbreviation |\r\n| `slas` | object | SLAs Object |\r\n| `deliveryChannel` | string | Delivery Channel, allowed values "delivery" or "pickup-in-point" |\r\n| `deliveryWindow` | object | Delivery Window Object |\r\n| `endDateUtc` | string | Delivery Date End in UTC  |\r\n| `price` | string | Delivery Window Cost |\r\n| `startDateUtc` | string | Delivery Date Starts in UTC |\r\n| `id` | string | SLA Id |\r\n| `pickupStoreInfo` | object | Pickup Store Details Object |\r\n| `additionalInfo` | string | Pickup Store Additional Info |\r\n| `address` | string | Pickup Store Address |\r\n| `dockId` | string | Pickup Store releated Dock Id  |\r\n| `friendlyName` | string | Pickup Store Friendly Name |\r\n| `isPickupStore` | boolean | If is a Pickup Store |\r\n| `polygonName` | string | Releated Polygon Name |\r\n| `price` | integer | SLA Price |\r\n| `shippingEstimate` | string | SLA Shipping Estimate |\r\n| `selectedAddresses` | object | Selected Address Details Object |\r\n| `addressId` | string | Shipping Address Id |\r\n| `addressType` | string | Shipping Address Type |\r\n| `city` | string | Shipping City |\r\n| `complement` | string | Shipping Complement |\r\n| `country` | string | Shipping Country in ISO 3166 ALPHA-3 abbreviation  |\r\n| `geoCoordinates` | object | Shipping Geo Coordinates Array |\r\n| `neighborhood` | string | Shipping Neighborhood |\r\n| `number` | string | Shipping Number |\r\n| `postalCode` | string | Shipping Postal Code |\r\n| `receiverName` | string | Shipping Receiver Name |\r\n| `reference` | string | Shipping Reference |\r\n| `state` | string | Shipping State |\r\n| `street` | string | Shipping Street |\r\n| `trackingHints` | array | Array of tracking hint objects, containing `"courierName"`, `"trackingId"`, `"trackingLabel"`, and `"trackingUrl"` |\r\n| `status` | string | Order Status |\r\n| `statusDescription` | string | Status Description |\r\n| `storePreferencesData` | object | Store Preferences Data Object |\r\n| `countryCode` | string | Country Code in ISO 3166 ALPHA-3 abbreviation |\r\n| `currencyCode` | string | Currency Code in ISO 4217  |\r\n| `currencyFormatInfo` | object | Currency Format Info Object |\r\n| `CurrencyDecimalDigits` | integer | Currency Decimal Digits |\r\n| `CurrencyDecimalSeparator` | string | Currency Decimal Separator |\r\n| `CurrencyGroupSeparator` | string | Currency Group Separator |\r\n| `CurrencyGroupSize` | integer | Currency Group Size |\r\n| `StartsWithCurrencySymbol` | boolean | If Starts With Currency Symbol |\r\n| `currencyLocale` | integer | LCID Decimal |\r\n| `currencySymbol` | string | Currency Symbol |\r\n| `timeZone` | string | Order Time Zone |\r\n| `totals` | object | Totals Object |\r\n| `id` | string | Totals Ids, expected values: "Items", "Discounts", "Shipping" and "Tax" |\r\n| `name` | string | Totals ID Description |\r\n| `value` | integer | Totals Value |\r\n| `value` | integer | Order Value |\r\n',
  operationId: 'GetOrder2',
  request: {
    headers: z.object({ 'Content-Type': ContentTypeParamsSchema, Accept: AcceptParamsSchema }),
    params: z.object({ orderId: OrderIdParamsSchema }),
    query: z.object({ reason: ReasonParamsSchema }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              affiliateId: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Three letter code identifying the marketplace where the order was placed.',
                  example: 'ABC',
                }),
              allowCancellation: z
                .boolean()
                .exactOptional()
                .openapi({
                  description: 'Indicates whether cancelation is allowed for the order.',
                }),
              allowEdition: z
                .boolean()
                .exactOptional()
                .openapi({ description: 'Indicates whether edition is allowed for the order.' }),
              approvedBy: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'User that approved the order, in case of manual approval.',
                  example: 'alex@store.com',
                }),
              authorizedDate: z
                .string()
                .exactOptional()
                .openapi({ description: 'Date in which the order was authorized in UTC.' }),
              callCenterOperatorData: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({ description: 'Call center operator data.' }),
              cancelReason: z
                .string()
                .exactOptional()
                .openapi({ description: 'Reason for cancelation.', example: 'Stock shortage.' }),
              cancelledBy: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'User that canceled the order.',
                  example: 'alex@store.com',
                }),
              changesAttachment: ChangesAttachmentSchema.exactOptional(),
              clientProfileData: ClientProfileDataSchema.exactOptional(),
              commercialConditionData: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({ description: 'Commercial condition data.' }),
              creationDate: z
                .string()
                .exactOptional()
                .openapi({ description: 'Creation date.', example: '2019-01-28T20:09:43+00:00' }),
              customData: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({ description: 'Custom data.' }),
              emailTracked: z
                .string()
                .exactOptional()
                .openapi({ description: 'Email tracked.', example: 'clark.kent@example.com' }),
              followUpEmail: z
                .string()
                .exactOptional()
                .openapi({ description: 'Follow up email.' }),
              giftRegistryData: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({ description: 'Gift registry data.' }),
              hostname: z.string().exactOptional().openapi({ description: 'Host name.' }),
              invoiceData: z
                .looseObject({})
                .nullable()
                .exactOptional()
                .openapi({ description: "Information pertinent to the order's invoice." }),
              invoicedDate: z
                .string()
                .exactOptional()
                .openapi({ description: 'Date in which the order was invoiced in UTC.' }),
              isCheckedIn: z
                .boolean()
                .exactOptional()
                .openapi({ description: 'Indicates whether client is checked in.' }),
              isCompleted: z
                .boolean()
                .exactOptional()
                .openapi({ description: 'Indicates whether order is completed.' }),
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
                            .exactOptional()
                            .openapi({ description: 'Dimension.' }),
                          offeringInfo: z
                            .string()
                            .exactOptional()
                            .openapi({ description: 'Offering information.' }),
                          offeringType: z
                            .string()
                            .exactOptional()
                            .openapi({ description: 'Offering type.' }),
                          offeringTypeId: z
                            .string()
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
                              name: z.string().exactOptional().openapi({ description: 'Name.' }),
                              price: z
                                .int()
                                .exactOptional()
                                .openapi({ description: 'Price in cents.' }),
                              type: z.string().exactOptional().openapi({ description: 'Type' }),
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
                        .exactOptional()
                        .openapi({ description: 'European Article Number.' }),
                      id: z.string().exactOptional().openapi({ description: 'ID.' }),
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
                        .exactOptional()
                        .openapi({ description: 'Manual price in cents.' }),
                      manualPriceAppliedBy: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description: 'User that applied the manual price, if that is the case.',
                        }),
                      manufacturerCode: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'Manufacturer code.' }),
                      measurementUnit: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'Measurement unit' }),
                      modalType: z.string().exactOptional().openapi({ description: 'Modal type.' }),
                      name: z.string().exactOptional().openapi({ description: 'Name.' }),
                      parentAssemblyBinding: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'Parent assembly binding.' }),
                      parentItemIndex: z
                        .int()
                        .exactOptional()
                        .openapi({ description: 'Parent item index.' }),
                      preSaleDate: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'Presale date.' }),
                      price: z.int().exactOptional().openapi({ description: 'Price in cents.' }),
                      priceDefinition: z
                        .object({
                          calculatedSellingPrice: z
                            .int()
                            .exactOptional()
                            .openapi({ description: 'Calculated selling price in cents.' }),
                          sellingPrices: z
                            .array(
                              z
                                .object({
                                  quantity: z
                                    .int()
                                    .exactOptional()
                                    .openapi({ description: 'Quantity.' }),
                                  value: z
                                    .int()
                                    .exactOptional()
                                    .openapi({ description: 'Value in cents.' }),
                                })
                                .openapi({ required: [] }),
                            )
                            .exactOptional()
                            .openapi({ description: 'Selling prices.' }),
                          total: z
                            .int()
                            .exactOptional()
                            .openapi({ description: 'Total in cents.' }),
                        })
                        .exactOptional()
                        .openapi({ description: 'Price information.', required: [] }),
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
                              name: z.string().exactOptional().openapi({ description: 'Name.' }),
                              rawValue: z
                                .int()
                                .exactOptional()
                                .openapi({ description: 'Raw value.' }),
                              value: z.int().exactOptional().openapi({ description: 'Value.' }),
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
                            'Object, where each field is an ID from `productCategoryIds.',
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
                            'Sellers involved in the chain. The list should contain only one seller, unless it is a [Multilevel Omnichannel Inventory](https://help.vtex.com/pt/tutorial/multilevel-omnichannel-inventory--7M1xyCZWUyCB7PcjNtOyw4) order.',
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
                      uniqueId: z
                        .string()
                        .exactOptional()
                        .openapi({ description: "Order's item unique ID." }),
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
                .openapi({
                  description: 'Date of last change.',
                  example: '2019-02-06T20:46:11.7010747+00:00',
                }),
              lastMessage: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({ description: 'Last message.' }),
              marketingData: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({ description: 'Marketing data.' }),
              marketplace: MarketplaceSchema.exactOptional(),
              marketplaceItems: z
                .array(z.string())
                .exactOptional()
                .openapi({ description: 'Marketplace items.' }),
              marketplaceOrderId: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'ID of the order in the marketplace.',
                  example: 'ABC-v5195004lux-01',
                }),
              marketplaceServicesEndpoint: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Marketplace endpoint for post purchase communication.',
                  example: 'http://oms.vtexinternal.com.br/api/oms?an=luxstore',
                }),
              merchantName: z
                .string()
                .exactOptional()
                .openapi({ description: 'Merchant name.', example: 'luxstore' }),
              openTextField: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({ description: 'Open text field.' }),
              orderFormId: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'ID of the shopping cart from which the order was created.',
                }),
              orderGroup: z
                .string()
                .exactOptional()
                .openapi({ description: 'Order group.', example: '00' }),
              orderId: z
                .string()
                .exactOptional()
                .openapi({ description: 'Order ID.', example: 'v5195004lux-01' }),
              origin: z
                .string()
                .exactOptional()
                .openapi({ description: 'Origin.', example: 'Marketplace' }),
              packageAttachment: z
                .object({
                  packages: z
                    .array(
                      z
                        .object({
                          cfop: z
                            .string()
                            .exactOptional()
                            .openapi({ description: 'Fiscal operation code.' }),
                          courier: z.string().exactOptional().openapi({ description: 'Courier.' }),
                          courierStatus: z
                            .string()
                            .exactOptional()
                            .openapi({ description: 'Courier status.' }),
                          embeddedInvoice: z
                            .string()
                            .exactOptional()
                            .openapi({ description: 'Embedded voice in XML.' }),
                          invoiceKey: z
                            .string()
                            .exactOptional()
                            .openapi({ description: 'Invoice key.' }),
                          invoiceNumber: z
                            .string()
                            .exactOptional()
                            .openapi({ description: 'Invoice number.' }),
                          invoiceUrl: z
                            .string()
                            .exactOptional()
                            .openapi({ description: 'Invoice URL.' }),
                          invoiceValue: z
                            .int()
                            .exactOptional()
                            .openapi({ description: 'Invoice value in cents.' }),
                          issuanceDate: z
                            .string()
                            .exactOptional()
                            .openapi({ description: 'Issuance date.' }),
                          items: z
                            .array(
                              z
                                .object({
                                  description: z
                                    .string()
                                    .exactOptional()
                                    .openapi({ description: 'Item description.' }),
                                  itemIndex: z
                                    .int()
                                    .exactOptional()
                                    .openapi({
                                      description:
                                        'Item index in reference to the position of the item in the `items` array.',
                                    }),
                                  price: z
                                    .int()
                                    .exactOptional()
                                    .openapi({ description: 'Item price in cents.' }),
                                  quantity: z
                                    .int()
                                    .exactOptional()
                                    .openapi({ description: 'Item quantity.' }),
                                  unitMultiplier: z
                                    .number()
                                    .exactOptional()
                                    .openapi({ description: 'Item unit multiplier.' }),
                                })
                                .openapi({ required: [] }),
                            )
                            .exactOptional()
                            .openapi({ description: 'Information on each item in the package.' }),
                          restitutions: z
                            .object({
                              refund: z
                                .object({
                                  items: z
                                    .array(
                                      z
                                        .object({
                                          itemIndex: z
                                            .string()
                                            .exactOptional()
                                            .openapi({
                                              description:
                                                'Item index corresponding to the position of the item in the main `items` array.',
                                            }),
                                          quantity: z
                                            .int()
                                            .exactOptional()
                                            .openapi({ description: 'Quantity.' }),
                                        })
                                        .openapi({ required: [] }),
                                    )
                                    .exactOptional()
                                    .openapi({ description: 'Information on items.' }),
                                })
                                .exactOptional()
                                .openapi({ description: 'Information on refunds.', required: [] }),
                            })
                            .exactOptional()
                            .openapi({
                              description:
                                'Information on how restitutions are to be made to the customer, in case of a return (invoice `type` is `input`).',
                              required: [],
                            }),
                          trackingNumber: z
                            .string()
                            .exactOptional()
                            .openapi({ description: 'Tracking number.' }),
                          trackingUrl: z
                            .string()
                            .exactOptional()
                            .openapi({ description: 'Tracking URL.' }),
                          type: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description:
                                'Invoice type `Output` for sales and `Input` for returns.',
                            }),
                          volumes: z
                            .int()
                            .exactOptional()
                            .openapi({
                              description: 'Quantity of packages involved in the order.',
                            }),
                        })
                        .openapi({ required: [] }),
                    )
                    .exactOptional()
                    .openapi({ description: 'Information on each package.' }),
                })
                .exactOptional()
                .openapi({
                  description: 'Package attachment.',
                  example: { packages: [] },
                  required: [],
                }),
              paymentData: PaymentDataSchema.exactOptional(),
              ratesAndBenefitsData: RatesAndBenefitsDataSchema.exactOptional(),
              roundingError: z
                .int32()
                .exactOptional()
                .openapi({ description: 'Rounding error in cents.' }),
              salesChannel: z
                .string()
                .exactOptional()
                .openapi({ description: 'Sales channel.', example: '1' }),
              sellerOrderId: z
                .string()
                .exactOptional()
                .openapi({ description: 'Seller order ID.', example: '00-v5195004lux-01' }),
              sellers: z
                .array(SellerSchema)
                .exactOptional()
                .openapi({ description: 'Array with sellers information.' }),
              sequence: z
                .string()
                .exactOptional()
                .openapi({ description: 'Sequence number.', example: '502556' }),
              shippingData: ShippingDataSchema.exactOptional(),
              status: z
                .string()
                .exactOptional()
                .openapi({ description: 'Status in the order workflow.', example: 'invoiced' }),
              statusDescription: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Status description which is displayed on the Admin panel.',
                  example: 'Faturado',
                }),
              storePreferencesData: StorePreferencesDataSchema.exactOptional(),
              totals: z
                .array(
                  z
                    .object({
                      id: z
                        .string()
                        .exactOptional()
                        .openapi({ description: "Order's total ID.", example: 'Discounts' }),
                      name: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description: "Order's total name.",
                          example: 'Discount total.',
                        }),
                      value: z
                        .int32()
                        .exactOptional()
                        .openapi({ description: "Order's total value.", example: 199 }),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional()
                .openapi({ description: "Information on each of the order's totals." }),
              value: z
                .int32()
                .exactOptional()
                .openapi({ description: 'Value in cents.', example: 2499 }),
            })
            .openapi({
              example: {
                affiliateId: '',
                allowCancellation: false,
                allowEdition: false,
                approvedBy: null,
                authorizedDate: '2019-01-28T20:33:04+00:00',
                callCenterOperatorData: null,
                cancelReason: null,
                cancelledBy: null,
                changesAttachment: {
                  changesData: [
                    {
                      discountValue: 3290,
                      incrementValue: 0,
                      itemsAdded: [],
                      itemsRemoved: [
                        {
                          id: '1234568358',
                          name: 'Bay Max L',
                          price: 3290,
                          quantity: 1,
                          unitMultiplier: null,
                        },
                      ],
                      reason: 'Blah',
                      receipt: {
                        date: '2019-02-06T20:46:04.4003606+00:00',
                        orderId: 'v5195004lux-01',
                        receipt: '029f9ab8-751a-4b1e-bf81-7dd25d14b49b',
                      },
                    },
                  ],
                  id: 'changeAttachment',
                },
                clientProfileData: {
                  corporateDocument: null,
                  corporateName: null,
                  corporatePhone: null,
                  customerClass: null,
                  document: '11047867702',
                  documentType: 'cpf',
                  email: 'rodrigo.cunha@vtex.com.br',
                  firstName: 'Rodrigo',
                  id: 'clientProfileData',
                  isCorporate: false,
                  lastName: 'VTEX',
                  phone: '+5521972321094',
                  stateInscription: null,
                  tradeName: null,
                  userProfileId: '5a3692de-358a-4bea-8885-044bce33bb93',
                },
                commercialConditionData: null,
                creationDate: '2019-01-28T20:09:43.899958+00:00',
                customData: null,
                emailTracked: 'a27499cad31f42b7a771ae34f57c8358@ct.vtex.com.br',
                followUpEmail: '7bf3a59bbc56402c810bda9521ba449e@ct.vtex.com.br',
                giftRegistryData: null,
                hostname: 'luxstore',
                invoiceData: null,
                invoicedDate: null,
                isCheckedIn: false,
                isCompleted: true,
                items: [
                  {
                    additionalInfo: {
                      brandId: '2000023',
                      brandName: 'VTEX',
                      categoriesIds: '/1/',
                      commercialConditionId: '5',
                      dimension: {
                        cubicweight: 0.7031,
                        height: 15,
                        length: 15,
                        weight: 15,
                        width: 15,
                      },
                      offeringInfo: null,
                      offeringType: null,
                      offeringTypeId: null,
                      productClusterId: '135,142',
                    },
                    attachments: [],
                    bundleItems: [],
                    commission: 0,
                    components: [],
                    detailUrl: '/bay-max-9429485/p',
                    ean: null,
                    freightCommission: 0,
                    id: '1234568358',
                    imageUrl:
                      'http://luxstore.vteximg.com.br/arquivos/ids/159263-55-55/image-cc1aed75cbfa424a85a94900be3eacec.jpg?v=636795432619830000',
                    isGift: false,
                    itemAttachment: { content: {}, name: null },
                    listPrice: 3290,
                    lockId: '00-v5195004lux-01',
                    manualPrice: null,
                    measurementUnit: 'un',
                    name: 'Bay Max L',
                    offerings: [],
                    params: [],
                    parentAssemblyBinding: null,
                    parentItemIndex: null,
                    preSaleDate: null,
                    price: 3290,
                    priceDefinitions: null,
                    priceTags: [],
                    priceValidUntil: null,
                    productId: '9429485',
                    quantity: 1,
                    refId: 'BIGHEROBML',
                    rewardValue: 0,
                    seller: '1',
                    sellerSku: '1234568358',
                    sellingPrice: 3290,
                    shippingPrice: null,
                    tax: 0,
                    taxCode: null,
                    uniqueId: '87F0945396994B349158C7D9C9941442',
                    unitMultiplier: 1,
                  },
                ],
                lastChange: '2019-02-06T20:46:11.7010747+00:00',
                lastMessage: null,
                marketingData: null,
                marketplace: {
                  baseURL: 'http://oms.vtexinternal.com.br/api/oms?an=luxstore',
                  isCertified: null,
                  name: 'luxstore',
                },
                marketplaceItems: [],
                marketplaceOrderId: '',
                marketplaceServicesEndpoint: 'http://oms.vtexinternal.com.br/api/oms?an=luxstore',
                merchantName: null,
                openTextField: null,
                orderFormId: 'caae7471333e403f959fa5fd66951340',
                orderGroup: null,
                orderId: 'v5195004lux-01',
                origin: 'Marketplace',
                packageAttachment: { packages: [] },
                paymentData: {
                  transactions: [
                    {
                      isActive: true,
                      merchantName: 'luxstore',
                      payments: [
                        {
                          cardHolder: null,
                          cardNumber: null,
                          connectorResponses: {},
                          cvv2: null,
                          dueDate: '2019-02-02',
                          expireMonth: null,
                          expireYear: null,
                          firstDigits: null,
                          giftCardCaption: null,
                          giftCardId: null,
                          giftCardName: null,
                          group: 'bankInvoice',
                          id: 'D3DEECAB3C6C4B9EAF8EF4C1FE062FF3',
                          installments: 1,
                          lastDigits: null,
                          paymentSystem: '6',
                          paymentSystemName: 'Boleto Bancário',
                          redemptionCode: null,
                          referenceValue: 4450,
                          tid: null,
                          url: 'https://luxstore.vtexpayments.com.br:443/BankIssuedInvoice/Transaction/418213DE29634837A63DD693A937A696/Payment/D3DEECAB3C6C4B9EAF8EF4C1FE062FF3/Installment/{Installment}',
                          value: 4450,
                        },
                      ],
                      transactionId: '418213DE29634837A63DD693A937A696',
                    },
                  ],
                },
                ratesAndBenefitsData: {
                  id: 'ratesAndBenefitsData',
                  rateAndBenefitsIdentifiers: [],
                },
                roundingError: 0,
                salesChannel: '1',
                sellerOrderId: '00-v5195004lux-01',
                sellers: [{ id: '1', logo: '', name: 'Loja do Suporte' }],
                sequence: '502556',
                shippingData: {
                  address: {
                    addressId: '-1425945657910',
                    addressType: 'residential',
                    city: 'Rio de Janeiro',
                    complement: '3',
                    country: 'BRA',
                    geoCoordinates: [],
                    neighborhood: 'Botafogo',
                    number: '300',
                    postalCode: '22250-040',
                    receiverName: 'Rodrigo Cunha',
                    reference: null,
                    state: 'RJ',
                    street: 'Praia de Botafogo',
                  },
                  id: 'shippingData',
                  logisticsInfo: [
                    {
                      addressId: '-1425945657910',
                      deliveryChannel: 'delivery',
                      deliveryCompany: 'Todos os CEPS',
                      deliveryIds: [
                        {
                          courierId: '197a56f',
                          courierName: 'Todos os CEPS',
                          dockId: '1',
                          quantity: 1,
                          warehouseId: '1_1',
                        },
                      ],
                      deliveryWindow: null,
                      itemIndex: 0,
                      listPrice: 1160,
                      lockTTL: '10d',
                      pickupStoreInfo: {
                        additionalInfo: null,
                        address: null,
                        dockId: null,
                        friendlyName: null,
                        isPickupStore: false,
                      },
                      polygonName: null,
                      price: 1160,
                      selectedSla: 'Normal',
                      sellingPrice: 1160,
                      shippingEstimate: '5bd',
                      shippingEstimateDate: '2019-02-04T20:33:46.4595004+00:00',
                      shipsTo: ['BRA'],
                      slas: [
                        {
                          deliveryChannel: 'delivery',
                          deliveryWindow: null,
                          id: 'Normal',
                          name: 'Normal',
                          pickupStoreInfo: {
                            additionalInfo: null,
                            address: null,
                            dockId: null,
                            friendlyName: null,
                            isPickupStore: false,
                          },
                          polygonName: null,
                          price: 1160,
                          shippingEstimate: '5bd',
                        },
                        {
                          deliveryChannel: 'delivery',
                          deliveryWindow: null,
                          id: 'Expressa',
                          name: 'Expressa',
                          pickupStoreInfo: {
                            additionalInfo: null,
                            address: null,
                            dockId: null,
                            friendlyName: null,
                            isPickupStore: false,
                          },
                          polygonName: null,
                          price: 1160,
                          shippingEstimate: '5bd',
                        },
                        {
                          deliveryChannel: 'delivery',
                          deliveryWindow: null,
                          id: 'Quebra Kit',
                          name: 'Quebra Kit',
                          pickupStoreInfo: {
                            additionalInfo: null,
                            address: null,
                            dockId: null,
                            friendlyName: null,
                            isPickupStore: false,
                          },
                          polygonName: null,
                          price: 1392,
                          shippingEstimate: '2bd',
                        },
                        {
                          deliveryChannel: 'delivery',
                          deliveryWindow: null,
                          id: 'Sob Encomenda',
                          name: 'Sob Encomenda',
                          pickupStoreInfo: {
                            additionalInfo: null,
                            address: null,
                            dockId: null,
                            friendlyName: null,
                            isPickupStore: false,
                          },
                          polygonName: null,
                          price: 1392,
                          shippingEstimate: '32bd',
                        },
                      ],
                    },
                  ],
                  selectedAddresses: [
                    {
                      addressId: '-1425945657910',
                      addressType: 'residential',
                      city: 'Rio de Janeiro',
                      complement: '10',
                      country: 'BRA',
                      geoCoordinates: [],
                      neighborhood: 'Botafogo',
                      number: '518',
                      postalCode: '22250-040',
                      receiverName: 'Rodrigo Cunha',
                      reference: null,
                      state: 'RJ',
                      street: 'Praia de Botafogo',
                    },
                  ],
                  trackingHints: null,
                },
                status: 'handling',
                statusDescription: 'Preparando Entrega',
                storePreferencesData: {
                  countryCode: 'BRA',
                  currencyCode: 'BRL',
                  currencyFormatInfo: {
                    CurrencyDecimalDigits: 2,
                    CurrencyDecimalSeparator: ',',
                    CurrencyGroupSeparator: '.',
                    CurrencyGroupSize: 3,
                    StartsWithCurrencySymbol: true,
                  },
                  currencyLocale: 1046,
                  currencySymbol: 'R$',
                  timeZone: 'E. South America Standard Time',
                },
                totals: [
                  { id: 'Items', name: 'Total dos Itens', value: 3290 },
                  { id: 'Discounts', name: 'Total dos Descontos', value: 0 },
                  { id: 'Shipping', name: 'Total do Frete', value: 1160 },
                  { id: 'Tax', name: 'Total da Taxa', value: 0 },
                  { id: 'Change', name: 'Total das mudanças', value: -3290 },
                ],
                value: 1160,
              },
              title: '',
              required: [],
            }),
          example: {
            affiliateId: '',
            allowCancellation: false,
            allowEdition: false,
            approvedBy: null,
            authorizedDate: '2019-01-28T20:33:04+00:00',
            callCenterOperatorData: null,
            cancelReason: null,
            cancelledBy: null,
            changesAttachment: {
              changesData: [
                {
                  discountValue: 3290,
                  incrementValue: 0,
                  itemsAdded: [],
                  itemsRemoved: [
                    {
                      id: '1234568358',
                      name: 'Bay Max L',
                      price: 3290,
                      quantity: 1,
                      unitMultiplier: null,
                    },
                  ],
                  reason: 'Blah',
                  receipt: {
                    date: '2019-02-06T20:46:04.4003606+00:00',
                    orderId: 'v5195004lux-01',
                    receipt: '029f9ab8-751a-4b1e-bf81-7dd25d14b49b',
                  },
                },
              ],
              id: 'changeAttachment',
            },
            clientProfileData: {
              corporateDocument: null,
              corporateName: null,
              corporatePhone: null,
              customerClass: null,
              document: '11047867702',
              documentType: 'cpf',
              email: 'rodrigo.cunha@vtex.com.br',
              firstName: 'Rodrigo',
              id: 'clientProfileData',
              isCorporate: false,
              lastName: 'VTEX',
              phone: '+5521972321094',
              stateInscription: null,
              tradeName: null,
              userProfileId: '5a3692de-358a-4bea-8885-044bce33bb93',
            },
            commercialConditionData: null,
            creationDate: '2019-01-28T20:09:43.899958+00:00',
            customData: null,
            emailTracked: 'a27499cad31f42b7a771ae34f57c8358@ct.vtex.com.br',
            followUpEmail: '7bf3a59bbc56402c810bda9521ba449e@ct.vtex.com.br',
            giftRegistryData: null,
            hostname: 'luxstore',
            invoiceData: null,
            invoicedDate: null,
            isCheckedIn: false,
            isCompleted: true,
            items: [
              {
                additionalInfo: {
                  brandId: '2000023',
                  brandName: 'VTEX',
                  categoriesIds: '/1/',
                  commercialConditionId: '5',
                  dimension: { cubicweight: 0.7031, height: 15, length: 15, weight: 15, width: 15 },
                  offeringInfo: null,
                  offeringType: null,
                  offeringTypeId: null,
                  productClusterId: '135,142',
                },
                attachments: [],
                bundleItems: [],
                commission: 0,
                components: [],
                detailUrl: '/bay-max-9429485/p',
                ean: null,
                freightCommission: 0,
                id: '1234568358',
                imageUrl:
                  'http://luxstore.vteximg.com.br/arquivos/ids/159263-55-55/image-cc1aed75cbfa424a85a94900be3eacec.jpg?v=636795432619830000',
                isGift: false,
                itemAttachment: { content: {}, name: null },
                listPrice: 3290,
                lockId: '00-v5195004lux-01',
                manualPrice: null,
                measurementUnit: 'un',
                name: 'Bay Max L',
                offerings: [],
                params: [],
                parentAssemblyBinding: null,
                parentItemIndex: null,
                preSaleDate: null,
                price: 3290,
                priceDefinitions: null,
                priceTags: [],
                priceValidUntil: null,
                productId: '9429485',
                quantity: 1,
                refId: 'BIGHEROBML',
                rewardValue: 0,
                seller: '1',
                sellerSku: '1234568358',
                sellingPrice: 3290,
                shippingPrice: null,
                tax: 0,
                taxCode: null,
                uniqueId: '87F0945396994B349158C7D9C9941442',
                unitMultiplier: 1,
              },
            ],
            lastChange: '2019-02-06T20:46:11.7010747+00:00',
            lastMessage: null,
            marketingData: null,
            marketplace: {
              baseURL: 'http://oms.vtexinternal.com.br/api/oms?an=luxstore',
              isCertified: null,
              name: 'luxstore',
            },
            marketplaceItems: [],
            marketplaceOrderId: '',
            marketplaceServicesEndpoint: 'http://oms.vtexinternal.com.br/api/oms?an=luxstore',
            merchantName: null,
            openTextField: null,
            orderFormId: 'caae7471333e403f959fa5fd66951340',
            orderGroup: null,
            orderId: 'v5195004lux-01',
            origin: 'Marketplace',
            packageAttachment: { packages: [] },
            paymentData: {
              transactions: [
                {
                  isActive: true,
                  merchantName: 'luxstore',
                  payments: [
                    {
                      cardHolder: null,
                      connectorResponses: {},
                      dueDate: '2019-02-02',
                      firstDigits: null,
                      giftCardCaption: null,
                      giftCardId: null,
                      giftCardName: null,
                      group: 'bankInvoice',
                      id: 'D3DEECAB3C6C4B9EAF8EF4C1FE062FF3',
                      installments: 1,
                      lastDigits: null,
                      paymentSystem: '6',
                      paymentSystemName: 'Boleto Bancário',
                      redemptionCode: null,
                      referenceValue: 4450,
                      tid: null,
                      url: 'https://luxstore.vtexpayments.com.br:443/BankIssuedInvoice/Transaction/418213DE29634837A63DD693A937A696/Payment/D3DEECAB3C6C4B9EAF8EF4C1FE062FF3/Installment/{Installment}',
                      value: 4450,
                    },
                  ],
                  transactionId: '418213DE29634837A63DD693A937A696',
                },
              ],
            },
            ratesAndBenefitsData: { id: 'ratesAndBenefitsData', rateAndBenefitsIdentifiers: [] },
            roundingError: 0,
            salesChannel: '1',
            sellerOrderId: '00-v5195004lux-01',
            sellers: [{ id: '1', logo: '', name: 'Loja do Suporte' }],
            sequence: '502556',
            shippingData: {
              address: {
                addressId: '-1425945657910',
                addressType: 'residential',
                city: 'Rio de Janeiro',
                complement: '3',
                country: 'BRA',
                geoCoordinates: [],
                neighborhood: 'Botafogo',
                number: '300',
                postalCode: '22250-040',
                receiverName: 'Rodrigo Cunha',
                reference: null,
                state: 'RJ',
                street: 'Praia de Botafogo',
              },
              id: 'shippingData',
              logisticsInfo: [
                {
                  addressId: '-1425945657910',
                  deliveryChannel: 'delivery',
                  deliveryCompany: 'Todos os CEPS',
                  deliveryIds: [
                    {
                      courierId: '197a56f',
                      courierName: 'Todos os CEPS',
                      dockId: '1',
                      quantity: 1,
                      warehouseId: '1_1',
                    },
                  ],
                  deliveryWindow: null,
                  itemIndex: 0,
                  listPrice: 1160,
                  lockTTL: '10d',
                  pickupStoreInfo: {
                    additionalInfo: null,
                    address: null,
                    dockId: null,
                    friendlyName: null,
                    isPickupStore: false,
                  },
                  polygonName: null,
                  price: 1160,
                  selectedSla: 'Normal',
                  sellingPrice: 1160,
                  shippingEstimate: '5bd',
                  shippingEstimateDate: '2019-02-04T20:33:46.4595004+00:00',
                  shipsTo: ['BRA'],
                  slas: [
                    {
                      deliveryChannel: 'delivery',
                      deliveryWindow: null,
                      id: 'Normal',
                      name: 'Normal',
                      pickupStoreInfo: {
                        additionalInfo: null,
                        address: null,
                        dockId: null,
                        friendlyName: null,
                        isPickupStore: false,
                      },
                      polygonName: null,
                      price: 1160,
                      shippingEstimate: '5bd',
                    },
                    {
                      deliveryChannel: 'delivery',
                      deliveryWindow: null,
                      id: 'Expressa',
                      name: 'Expressa',
                      pickupStoreInfo: {
                        additionalInfo: null,
                        address: null,
                        dockId: null,
                        friendlyName: null,
                        isPickupStore: false,
                      },
                      polygonName: null,
                      price: 1160,
                      shippingEstimate: '5bd',
                    },
                    {
                      deliveryChannel: 'delivery',
                      deliveryWindow: null,
                      id: 'Quebra Kit',
                      name: 'Quebra Kit',
                      pickupStoreInfo: {
                        additionalInfo: null,
                        address: null,
                        dockId: null,
                        friendlyName: null,
                        isPickupStore: false,
                      },
                      polygonName: null,
                      price: 1392,
                      shippingEstimate: '2bd',
                    },
                    {
                      deliveryChannel: 'delivery',
                      deliveryWindow: null,
                      id: 'Sob Encomenda',
                      name: 'Sob Encomenda',
                      pickupStoreInfo: {
                        additionalInfo: null,
                        address: null,
                        dockId: null,
                        friendlyName: null,
                        isPickupStore: false,
                      },
                      polygonName: null,
                      price: 1392,
                      shippingEstimate: '32bd',
                    },
                  ],
                },
              ],
              selectedAddresses: [
                {
                  addressId: '-1425945657910',
                  addressType: 'residential',
                  city: 'Rio de Janeiro',
                  complement: '10',
                  country: 'BRA',
                  geoCoordinates: [],
                  neighborhood: 'Botafogo',
                  number: '518',
                  postalCode: '22250-040',
                  receiverName: 'Rodrigo Cunha',
                  reference: null,
                  state: 'RJ',
                  street: 'Praia de Botafogo',
                },
              ],
              trackingHints: null,
            },
            status: 'handling',
            statusDescription: 'Preparando Entrega',
            storePreferencesData: {
              countryCode: 'BRA',
              currencyCode: 'BRL',
              currencyFormatInfo: {
                CurrencyDecimalDigits: 2,
                CurrencyDecimalSeparator: ',',
                CurrencyGroupSeparator: '.',
                CurrencyGroupSize: 3,
                StartsWithCurrencySymbol: true,
              },
              currencyLocale: 1046,
              currencySymbol: 'R$',
              timeZone: 'E. South America Standard Time',
            },
            totals: [
              { id: 'Items', name: 'Total dos Itens', value: 3290 },
              { id: 'Discounts', name: 'Total dos Descontos', value: 0 },
              { id: 'Shipping', name: 'Total do Frete', value: 1160 },
              { id: 'Tax', name: 'Total da Taxa', value: 0 },
              { id: 'Change', name: 'Total das mudanças', value: -3290 },
            ],
            value: 1160,
          },
        },
      },
    },
  },
})

export const postApiOrdersPvtDocumentOrderIdActionsStartHandlingRoute = createRoute({
  method: 'post',
  path: '/api/orders/pvt/document/{orderId}/actions/start-handling',
  tags: ['Orders'],
  summary: 'Start handling order',
  description:
    'Change the status of an order to indicate that is is in `handling`.\n\r\n\r> Expect a `status 204` response with no content in case of a successful request.\n\r\n\r> The `Change order workflow status` resource is needed to use this API request. This is included in `OMS - Full access` and `IntegrationProfile - Fulfillment Oms`, among other default roles available in the Admin. Learn more about the [License manager roles and resources](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#).',
  operationId: 'StartHandling2',
  request: {
    headers: z.object({ 'Content-Type': ContentTypeParamsSchema, Accept: AcceptParamsSchema }),
    params: z.object({ orderId: OrderIdParamsSchema }),
  },
  responses: {
    204: { description: 'No content' },
    403: { description: 'Forbidden' },
    404: { description: 'Not found' },
    429: { description: 'Too many requests' },
  },
})

export const postApiOrdersPvtDocumentOrderIdCancelRoute = createRoute({
  method: 'post',
  path: '/api/orders/pvt/document/{orderId}/cancel',
  tags: ['Orders'],
  summary: 'Cancel order',
  description:
    'You should use this endpoint to cancel an order by its `orderId`.\n\nA common scenario is one where the seller has a problem with the order fulfillment and needs to request the order cancellation to the marketplace. To do this, the seller would need to make this request, passing the `orderId` in the URL.\n\nYou should expect a response with the date when the notification was received, the orderId, and a receipt protocol code.\n\nBe aware that if the order status is already `Invoiced`, the order can only be canceled if - before using this request - you send a return invoice through the [Order Invoice Notification endpoint](https://developers.vtex.com/reference/invoice#invoicenotification).\n\r\n\r> The `Cancel order` resource is needed to use this API request. This is included in `OMS - Full access` and `IntegrationProfile - Fulfillment Oms`, among other default roles available in the Admin. Learn more about the [License manager roles and resources](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#).',
  operationId: 'CancelOrder2',
  request: {
    headers: z.object({ 'Content-Type': ContentTypeParamsSchema, Accept: AcceptParamsSchema }),
    params: z.object({ orderId: OrderIdParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              reason: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Reason for cancelling the order.',
                  example: 'Unexpected stock shortage',
                }),
            })
            .openapi({ required: [] }),
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
              date: z
                .string()
                .exactOptional()
                .openapi({ description: 'Date and time when the notification was received.' }),
              orderId: z
                .string()
                .exactOptional()
                .openapi({ description: 'Identification of the order in the seller.' }),
              receipt: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Protocol code generated by the update. It may be `null`.',
                }),
            })
            .openapi({
              example: {
                date: '2014-02-07T15:22:56.7612218-02:00',
                orderId: '123543123',
                receipt: '38e0e47da2934847b489216d208cfd91',
              },
              required: [],
            }),
        },
      },
    },
    403: { description: 'The credentials are not enabled to access the service.' },
    404: { description: 'Value not found.' },
    429: { description: 'Too many requests.' },
  },
})

export const postApiOrdersPvtDocumentOrderIdInvoicesRoute = createRoute({
  method: 'post',
  path: '/api/orders/pvt/document/{orderId}/invoices',
  tags: ['Invoice'],
  summary: 'Order invoice notification',
  description:
    'Once the order is invoiced, the seller should use this request to send the invoice information to the marketplace.\n\nWe strongly recommend that you always send the object of the invoiced items. With this practice, rounding errors will be avoided.\n\nIt is not allowed to use the same `invoiceNumber` in more than one request to the Order Invoice Notification endpoint.\n\nBe aware that this endpoint is also used by the seller to send the order tracking information. This, however, should be done in a separate moment, once the seller has the tracking information.\n\r\n\r> The `Notify invoice` resource is needed to use this API request. This is included in `OMS - Full access` and `IntegrationProfile - Fulfillment Oms`, among other default roles available in the Admin. Learn more about the [License manager roles and resources](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#).',
  operationId: 'InvoiceNotification2',
  request: {
    headers: z.object({ 'Content-Type': ContentTypeParamsSchema, Accept: AcceptParamsSchema }),
    params: z.object({ orderId: OrderIdParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: InvoiceNotificationRequestSchema,
          example: {
            courier: null,
            dispatchedDate: null,
            invoiceKey: null,
            invoiceNumber: '9999',
            invoiceUrl: null,
            invoiceValue: '10000',
            issuanceDate: '2010-01-31',
            items: [{ id: '1234', price: 10000, quantity: 1 }],
            trackingNumber: null,
            trackingUrl: null,
            type: 'Output',
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
              date: z
                .string()
                .exactOptional()
                .openapi({ description: 'Date and time when the notification was received.' }),
              orderId: z
                .string()
                .exactOptional()
                .openapi({ description: 'Identification of the order in the seller.' }),
              receipt: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Protocol code generated by the update. It may be `null`.',
                }),
            })
            .openapi({
              example: {
                date: '2014-02-07T15:22:56.7612218-02:00',
                orderId: '123543123',
                receipt: '38e0e47da2934847b489216d208cfd91',
              },
              required: [],
            }),
        },
      },
    },
    403: { description: 'Forbidden' },
    404: { description: 'Not found' },
    429: { description: 'Too many requests' },
  },
})

export const postApiOrdersPvtDocumentOrderIdPaymentPaymentIdNotifyPaymentRoute = createRoute({
  method: 'post',
  path: '/api/orders/pvt/document/{orderId}/payment/{paymentId}/notify-payment',
  tags: ['Payment'],
  summary: 'Send payment notification',
  description:
    'Send a payment notification of a given order, by order ID and payment ID.\n\r\n\r> The `Notify payment` resource is needed to use this API request. This is included in `OMS - Full access` and `IntegrationProfile - Fulfillment Oms`, among other default roles available in the Admin. Learn more about the [License manager roles and resources](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#).\n\r\n\r> Learn more about [Transaction Details](https://help.vtex.com/en/tutorial/how-to-view-the-orders-details).\r\n\r\n\r\n## Request body properties\r\n\r\n| Attribute    | Type        | Description |\r\n| --------------- |:---------:| --------------------------------------:|\r\n| `orderId` | string | Order Id |\r\n| `paymentId` | string | Payment ID |',
  operationId: 'SendPaymentNotification2',
  request: {
    headers: z.object({ 'Content-Type': ContentTypeParamsSchema, Accept: AcceptParamsSchema }),
    params: z.object({ orderId: OrderIdParamsSchema, paymentId: PaymentIdParamsSchema }),
  },
  responses: {
    200: { description: 'OK' },
    400: { description: 'Bad Request' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
    429: { description: 'Too Many Requests' },
  },
})
