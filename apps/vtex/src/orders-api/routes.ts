import { createRoute, z } from '@hono/zod-openapi'

const AddLogRequestSchema = z
  .object({ message: z.string(), source: z.string() })
  .openapi({
    example: { message: 'Teste add interactions', source: 'Postman' },
    required: ['source', 'message'],
    title: 'AddLogRequest',
  })
  .openapi('AddLogRequest')

const DimensionSchema = z
  .object({
    cubicweight: z.number().openapi({ description: "Item's cubic weight." }),
    height: z.int32().openapi({ description: "Item's height." }),
    length: z.int32().openapi({ description: "Item's length." }),
    weight: z.int32().openapi({ description: "Item's weight." }),
    width: z.int32().openapi({ description: "Item's width." }),
  })
  .openapi({
    example: { cubicweight: 0.7031, height: 15, length: 15, weight: 15, width: 15 },
    required: ['cubicweight', 'height', 'length', 'weight', 'width'],
    title: 'Dimension',
  })
  .openapi('Dimension')

const AdditionalInfoSchema = z
  .object({
    brandId: z.string().openapi({ description: "Item's brand ID." }),
    brandName: z.string().openapi({ description: "Item's brand name." }),
    categoriesIds: z.string().openapi({ description: "Item's category ID." }),
    commercialConditionId: z.string().openapi({ description: 'Commercial conditions ID.' }),
    dimension: DimensionSchema,
    offeringInfo: z
      .string()
      .nullable()
      .openapi({
        description:
          'Information about services related to the item. For example: guarantee or installation.',
      }),
    offeringType: z.string().nullable().openapi({ description: 'Offering type.' }),
    offeringTypeId: z.string().nullable().openapi({ description: 'Offering type ID.' }),
    productClusterId: z
      .string()
      .openapi({ description: 'All product clusters related to the item.' }),
  })
  .openapi({
    description: 'Additional information about the item.',
    example: {
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
    required: [
      'brandName',
      'brandId',
      'categoriesIds',
      'productClusterId',
      'commercialConditionId',
      'dimension',
      'offeringInfo',
      'offeringType',
      'offeringTypeId',
    ],
    title: 'AdditionalInfo',
  })
  .openapi('AdditionalInfo')

const AddressSchema = z
  .object({
    addressId: z.string().openapi({ description: 'Shipping address ID.' }),
    addressType: z
      .string()
      .openapi({
        description: 'Type of address. For example, `Residential` or `Pickup`, among others.',
      }),
    city: z.string().openapi({ description: 'City of the shipping address.' }),
    complement: z
      .string()
      .openapi({ description: 'Complement to the shipping address when it applies.' }),
    country: z
      .string()
      .openapi({
        description:
          'Three letters ISO code of the country of the shipping address (ISO 3166 ALPHA-3).',
      }),
    entityId: z.string().nullable().openapi({ description: 'Shipping address entity ID.' }),
    geoCoordinates: z
      .array(z.string())
      .openapi({
        description: 'Array with two numbers with geocoordinates, first longitude then latitude.',
      }),
    neighborhood: z.string().openapi({ description: 'Neighborhood of the shipping address.' }),
    number: z
      .string()
      .openapi({
        description: 'Number of the building, house or apartment in the shipping address.',
      }),
    postalCode: z.string().openapi({ description: 'Postal code of the shipping address.' }),
    receiverName: z
      .string()
      .openapi({ description: 'Name of the person who is going to receive the order.' }),
    reference: z
      .string()
      .nullable()
      .openapi({
        description: 'Complement to help locate the shipping address, in case of delivery.',
      }),
    state: z.string().openapi({ description: 'State of the shipping address.' }),
    street: z.string().openapi({ description: 'Street of the shipping address.' }),
    versionId: z.string().nullable().openapi({ description: 'Shipping address version ID.' }),
  })
  .openapi({
    description: 'Shipping address details.',
    example: {
      addressId: '-1425945657910',
      addressType: 'residential',
      city: 'Rio de Janeiro',
      complement: '3',
      country: 'BRA',
      entityId: 'eabfb564-99d6-40d8-bd6c-bddbd4990aad',
      geoCoordinates: [],
      neighborhood: 'Botafogo',
      number: '300',
      postalCode: '22250-040',
      receiverName: 'Rodrigo Cunha',
      reference: null,
      state: 'RJ',
      street: 'Praia de Botafogo',
      versionId: 'e9c3bec2-125d-4b96-a021-316c3aa9f14f',
    },
    required: [
      'addressType',
      'receiverName',
      'addressId',
      'versionId',
      'entityId',
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
    Count: z.int32(),
    Facets: z.string().nullable(),
    Max: z.int32(),
    Mean: z.number(),
    Min: z.int32(),
    Missing: z.int32(),
    StdDev: z.number(),
    Sum: z.int32(),
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
      .openapi({ type: 'integer', format: 'int64' }),
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
    Count: z.int32(),
    Facets: z.string().nullable(),
    Max: z.int32(),
    Mean: z.number(),
    Min: z.int32(),
    Missing: z.int32(),
    StdDev: z.number(),
    Sum: z.int32(),
    SumOfSquares: z.int32(),
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
    id: z.string().openapi({ description: 'SKU ID of the item removed from the order.' }),
    name: z.string().openapi({ description: 'Name of the item removed from the order.' }),
    price: z.int32().openapi({ description: 'Total amount of items removed from the order.' }),
    quantity: z.int32().openapi({ description: 'Quantity of items removed from the order.' }),
    unitMultiplier: z
      .string()
      .nullable()
      .openapi({ description: 'Unit multiplier of the item removed from the order.' }),
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
    date: z.string().openapi({ description: 'Date when the receipt was created.' }),
    orderId: z.string().openapi({ description: 'ID of the order.' }),
    receipt: z.string().openapi({ description: "Receipt's unique identifier code." }),
  })
  .openapi({
    description: 'Information about the receipt for changed orders.',
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
    discountValue: z.int32().openapi({ description: 'Order change discount value.' }),
    incrementValue: z.int32().openapi({ description: 'Order change increment value.' }),
    itemsAdded: z.array(z.string()).openapi({ description: 'List of items added to the order.' }),
    itemsRemoved: z
      .array(ItemsRemovedSchema)
      .openapi({ description: 'List of items removed from the order.' }),
    reason: z
      .string()
      .openapi({
        description:
          'Text explaining why there was a change in the order. This information may be shown to the customer in the UI or transactional emails.',
      }),
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
    changesData: z.array(ChangesDatumSchema).openapi({ description: 'Order change details.' }),
    id: z.string().openapi({ description: 'Object ID, the expect value is `changeAttachment`.' }),
  })
  .openapi({
    description: 'Information about changes in the order.',
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
      .openapi({
        description: 'If the customer is a legal entity, here goes the corporate document.',
      }),
    corporateName: z
      .string()
      .nullable()
      .openapi({ description: 'If the customer is a legal entity, here goes the corporate name.' }),
    corporatePhone: z
      .string()
      .nullable()
      .openapi({
        description: "If the customer is a legal entity, here goes the corpany's phone number.",
      }),
    customerClass: z
      .string()
      .nullable()
      .openapi({ description: 'Identification of the class the customer belongs to.' }),
    document: z
      .string()
      .openapi({ description: 'Document identification code informed by the customer.' }),
    documentType: z
      .string()
      .openapi({ description: 'Type of the document informed by the customer.' }),
    email: z.string().openapi({ description: "Customer's email." }),
    firstName: z.string().openapi({ description: "Customer's first name." }),
    id: z
      .string()
      .openapi({ description: 'Object ID, the expected value is `clientProfileData`.' }),
    isCorporate: z
      .boolean()
      .openapi({
        description:
          'The value is `true` when the customer is a legal entity and `false` when not.',
      }),
    lastName: z.string().openapi({ description: "Customer's last name." }),
    phone: z.string().openapi({ description: "Customers's phone number." }),
    stateInscription: z
      .string()
      .nullable()
      .openapi({
        description: 'If the customer is a legal entity, here goes the state inscription.',
      }),
    tradeName: z
      .string()
      .nullable()
      .openapi({ description: 'If the customer is a legal entity, here goes the trade name.' }),
    userProfileId: z.string().openapi({ description: 'Customer user profile ID.' }),
  })
  .openapi({
    description: "Object with information on the client's profile.",
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

const CommititemfeedorderstatusRequestSchema = z
  .object({
    handles: z.array(z.string()).openapi({ description: 'List of item handles to commit' }),
  })
  .openapi({
    example: {
      handles: [
        'AQEBSM/bSqonHYtx+UrHdbuJ0i7M9yMbI2jtYwMIPdEc4BenuneaCTC9VEJ3dgAy1XtfQvHBvgwZTO8LvGObIKNqiKXDZiMKY25vK+pblZEqf1pWdLMugu5XoHA5ZAd4IcBcXrBcrlr1GU8uvPEBoVLOsVBP9IAxIZkkeEedIDg3K6GPyEXVuPlTEYb/0OCunEGxWF+AZ1frFdXh7ulORTcuqO5oDlBGbpD+QYzCmF4mUZtQ0VVWh9icM1QBVh6PlJ0D/lfwnJKWpBn3jf8c+DTm7sD7wb1Lcz9uWMLhDtPwvH9vue4MvKU9sCahEQe7K5jWuwwb54szGbFKdfcACsTSQ9WlyBfMdbV83c27k68G3cnaBFExkC1MLHHE9UzpQ6l4s43BT4k95ocgMXffnj/HMUYXn+OCvlvjytY59x1OCRE=',
      ],
    },
    required: ['handles'],
    title: 'CommititemfeedorderstatusRequest',
  })
  .openapi('CommititemfeedorderstatusRequest')

const ConfirmitemfeedorderstatusRequestSchema = z
  .object({ commitToken: z.string() })
  .openapi({
    example: {
      commitToken:
        'Marketplace##{"Receipt":"+eXJYhj5rDqHa28+XUcfebDO4pve3TvMpPlW0ivc5STyE/40J6wxooXgBF8LZ9CdhZkFJnMYBVDwPwQtNEoZQrVtErDB2Yq2zs16QqsJuYxSrQtBfl9rMfmkO5orB9oDHSpvwL6DjDzcuJeQBBNxono/m4F6BloJEsk9BmuTmPaRI+7xsrN5Oeg8NPUoNSnsT983JPr1B+Y+TbbFjC1R8ZkvFHGVfti1QbhOwmYWTHPG08YMqla+Qwh7kUONLBXPqporF/CcqJo5YVTSu2uBcCuXkUo+OH9uUTn6hHkUROo=","PublisheId":"C0111A50CEB244E59C95422870127A4F","PublisheId_Item":"C0111A50CEB244E59C95422870127A4F","EventId":"0dc05b6b-48a5-4f03-975a-a69fb6550aaa","LastSendOverwrite":null}',
    },
    required: ['commitToken'],
    title: 'ConfirmitemfeedorderstatusRequest',
  })
  .openapi('ConfirmitemfeedorderstatusRequest')

const ConnectorResponsesSchema = z
  .object({
    Message: z
      .string()
      .nullable()
      .openapi({ description: "Information about the connector's responses." }),
    ReturnCode: z.string().nullable().openapi({ description: 'Connector return code.' }),
    Tid: z.string().openapi({ description: 'Connector transaction ID.' }),
    authId: z.string().openapi({ description: 'Connector authorization ID.' }),
  })
  .openapi({
    example: { Message: null, ReturnCode: null, Tid: '101770752', authId: '170852' },
    required: ['Tid', 'ReturnCode', 'Message', 'authId'],
    title: 'ConnectorResponses',
  })
  .openapi('ConnectorResponses')

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
    CurrencyDecimalDigits: z
      .int32()
      .openapi({ description: 'Quantity of currency decimal digits.' }),
    CurrencyDecimalSeparator: z
      .string()
      .openapi({ description: 'Defines what currency decimal separator will be applied.' }),
    CurrencyGroupSeparator: z
      .string()
      .openapi({ description: 'Defines what currency group separator will be applied.' }),
    CurrencyGroupSize: z
      .int32()
      .openapi({ description: 'Defines how many characters will be grouped.' }),
    StartsWithCurrencySymbol: z
      .boolean()
      .openapi({
        description:
          'Defines if all prices will be initiated with the currency symbol (`true`) or not (`false`).',
      }),
  })
  .openapi({
    description: 'Object with currency format details.',
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
    accountCarrierName: z
      .string()
      .openapi({
        description:
          "Name of the account's [carrier](https://help.vtex.com/en/tutorial/transportadoras-na-vtex--7u9duMD5UQa2QQwukAWMcE).",
      }),
    courierId: z
      .string()
      .openapi({
        description:
          "[Carrier](https://help.vtex.com/en/tutorial/transportadoras-na-vtex--7u9duMD5UQa2QQwukAWMcE)'s ID.",
      }),
    courierName: z.string().openapi({ description: "Carrier's name." }),
    dockId: z
      .string()
      .openapi({
        description:
          'ID of the [loading dock](https://help.vtex.com/pt/tutorial/doca--5DY8xHEjOLYDVL41Urd5qj).',
      }),
    kitItemDetails: z
      .array(z.any())
      .nullable()
      .openapi({
        description:
          'Information about [kits](https://help.vtex.com/tutorial/what-is-a-kit--5ov5s3eHM4AqAAgqWwoc28), if there are any.',
      }),
    quantity: z.int32().openapi({ description: 'Quantity of items.' }),
    warehouseId: z
      .string()
      .openapi({
        description:
          'ID of the [warehouse](https://help.vtex.com/tutorial/warehouse--6oIxvsVDTtGpO7y6zwhGpb).',
      }),
  })
  .openapi({
    description: 'Information about delivery IDs.',
    example: {
      accountCarrierName: 'recorrenciaqa',
      courierId: '197a56f',
      courierName: 'Todos os CEPS',
      dockId: '1',
      kitItemDetails: [],
      quantity: 1,
      warehouseId: '1_1',
    },
    required: [
      'courierId',
      'courierName',
      'dockId',
      'quantity',
      'warehouseId',
      'accountCarrierName',
      'kitItemDetails',
    ],
    title: 'DeliveryId',
  })
  .openapi('DeliveryId')

const EventSchema = z
  .object({ city: z.string(), date: z.string(), description: z.string(), state: z.string() })
  .openapi({
    example: {
      city: 'Rio de Janeiro',
      date: '2015-06-23',
      description: 'Coletado pela transportadora',
      state: 'RJ',
    },
    required: ['city', 'state', 'description', 'date'],
    title: 'Event',
  })
  .openapi('Event')

const ExportCompletedResponseSchema = z
  .object({
    cancelled: z
      .boolean()
      .openapi({ description: 'If the export request was cancelled (`true`) or not (`false`).' }),
    completedDate: z.string().openapi({ description: 'Order export process completed date.' }),
    dateOfRequest: z.string().openapi({ description: 'Order export request date.' }),
    email: z.string().openapi({ description: 'Order export requester email.' }),
    filter: z.string().openapi({ description: 'Order export request filter.' }),
    hostUri: z.string().openapi({ description: 'Host URL.' }),
    id: z.string().openapi({ description: 'Order export request ID.' }),
    instanceId: z.string().openapi({ description: 'Instance ID.' }),
    lasUpdateTime: z.string().openapi({ description: 'Order export process update time.' }),
    linkToDownload: z.string().openapi({ description: 'Link to order export download.' }),
    publishId: z.string().openapi({ description: 'Order export publish ID.' }),
    query: z.string().openapi({ description: 'Order export request filter query.' }),
    rowNumber: z.int32().openapi({ description: 'Order export total rows.' }),
    rowsProcessed: z.int32().openapi({ description: 'Order export total processed rows.' }),
    startDate: z.string().openapi({ description: 'Order export process start date.' }),
    utcTime: z.string().openapi({ description: 'UTC time.' }),
  })
  .openapi({
    example: {
      cancelled: false,
      completedDate: '2017-05-10T18:31:35.5530698+00:00',
      dateOfRequest: '2017-05-10T18:31:28.3984674+00:00',
      email: 'renan.servare@vtex.com.br',
      filter: 'generateCsv=true&orderBy=creationDate%2cdesc&page=1&utc=-0300',
      hostUri: 'http://accountname.vtexcommercestable.com.br/',
      id: 'a83d6d30-a52a-4706-9fc9-e2e7c1841acb',
      instanceId: 'i-0b359c34e40c3f281',
      lasUpdateTime: '2017-05-10T18:31:35.5250685+00:00',
      linkToDownload:
        'http://accountname.vtexcommercestable.com.br/api/oms/pub/636300378883984674/report?AWSAccessKeyId=ASIAJM7A43QHIYFHFSMQ&Expires=1494527496&x-amz-security-token=FQoDYXdzEHsaDBnJIX7Yxf7j6gEuTCK3A3AS4wJiFF97%2FpIGtq4rpqA2F7CqU0g%2BIhPPdD%2FaqnF9TKxX1%2BSj4JloO%2F54XdgL3VZyb%2B76Z0FrOZAYnGZvuE%2FMB4KUz1d4NKFOh0sFt%2FxzYFrBOLvMO%2F%2FW3LMG%2FuyiHecP9pYceVysntj41jJeRcLG%2BRBN4Z69TQBQrUp%2FOS%2FOaJFssVvF6olk5WjK9gYxBDpUUiOQvyAIdhmRKiMfhfOSdT%2FgrPG06YGJE18lm4kIThxH3aqE1k2pl3gVd250QRFzGrFRCPgylnlm5C9xEFf2Mr794Dc2I2ki5GCR8Vhxwgi3rlCvI4G8R1PIXcwG7YfFyzb%2BgKUYCsAcvUschtbpWm5ahXZsJG2FioeFIzHbd3xQ5I2yjV9lrKyUiQHjxsyX7Z0dd7YkKkclmOR85wrhgxHLLpOrM021lYNbm1K9a%2FfPjIOxhMt3a1dgkwNaIJmgxnY3n%2FDgNSJsDpYEpckx9tNqbcuCEJYLC54fmbOH%2B3Nip%2Fks3X%2FBmvzo2iB79Y5cucIEkl9wFeKr9kqw5t5u4ciFf%2F4opHnT85eHZm3POEYsD9XxcIHUrlYyLbMawaFwBgklp6oo7LDNyAU%3D&Signature=%2BFGUxl8zViIqttg5f5y%2F9tbAQhw%3D',
      publishId: '263fd533551e445caceec991385ef610',
      query:
        '{"Queries":[{"Quoted":true,"FieldName":"InstanceId","FieldValue":"263FD533551E445CACEEC991385EF610"},{"Quoted":true,"FieldName":"OrderIsComplete","FieldValue":"True"}],"Oper":"AND"}',
      rowNumber: 8,
      rowsProcessed: 8,
      startDate: '2017-05-10T18:31:27.4043359+00:00',
      utcTime: '-0300',
    },
    required: [
      'id',
      'cancelled',
      'query',
      'filter',
      'email',
      'hostUri',
      'utcTime',
      'dateOfRequest',
      'startDate',
      'lasUpdateTime',
      'instanceId',
      'publishId',
      'linkToDownload',
      'completedDate',
      'rowsProcessed',
      'rowNumber',
    ],
    title: 'ExportCompletedResponse',
  })
  .openapi('ExportCompletedResponse')

const ExportInProgressResponseSchema = z
  .object({
    cancelled: z
      .boolean()
      .openapi({ description: 'If the export request was cancelled (`true`) or not (`false`).' }),
    completedDate: z.string().openapi({ description: 'Order export process completed date.' }),
    dateOfRequest: z.string().openapi({ description: 'Order export request date.' }),
    email: z.string().openapi({ description: 'Order export requester email.' }),
    filter: z.string().openapi({ description: 'Order export request filter.' }),
    hostUri: z.string().openapi({ description: 'Host URL.' }),
    id: z.string().openapi({ description: 'Order export request ID.' }),
    instanceId: z.string().openapi({ description: 'Instance ID.' }),
    lasUpdateTime: z.string().openapi({ description: 'Order export process update time.' }),
    linkToDownload: z.string().openapi({ description: 'Link to order export download.' }),
    publishId: z.string().openapi({ description: 'Order export publish ID.' }),
    query: z.string().openapi({ description: 'Order export request filter query.' }),
    rowNumber: z.int32().openapi({ description: 'Order export total rows.' }),
    rowsProcessed: z.int32().openapi({ description: 'Order export total processed rows.' }),
    startDate: z.string().openapi({ description: 'Order export process start date.' }),
    utcTime: z.string().openapi({ description: 'UTC time.' }),
  })
  .openapi({
    example: {
      cancelled: false,
      completedDate: '2022-05-10T16:21:30.7714518+00:00',
      dateOfRequest: '2017-05-10T16:21:31.7452567+00:00',
      email: 'renan.servare@vtex.com.br',
      filter: 'generateCsv=true&orderBy=creationDate%2cdesc&page=1&utc=-0300',
      hostUri: 'http://accountname.vtexcommercestable.com.br/',
      id: 'b7bdafba-2456-4aba-9bc0-1d598df685bd',
      instanceId: 'i-0a3b7a89f1fe13ba9',
      lasUpdateTime: '2017-05-10T16:21:30.7714518+00:00',
      linkToDownload:
        'http://accountname.vtexcommercestable.com.br/api/oms/pub/636300378883984674/report?AWSAccessKeyId=ASIAJM7A43QHIYFHFSMQ&Expires=1494527496&x-amz-security-token=FQoDYXdzEHsaDBnJIX7Yxf7j6gEuTCK3A',
      publishId: '263fd533551e445caceec991385ef610',
      query:
        '{"Queries":[{"Quoted":true,"FieldName":"InstanceId","FieldValue":"263FD533551E445CACEEC991385EF610"},{"Quoted":true,"FieldName":"OrderIsComplete","FieldValue":"True"}],"Oper":"AND"}',
      rowNumber: 0,
      rowsProcessed: 0,
      startDate: '2017-05-10T16:21:30.7714518+00:00',
      utcTime: '-0300',
    },
    required: [
      'id',
      'cancelled',
      'query',
      'filter',
      'email',
      'hostUri',
      'utcTime',
      'dateOfRequest',
      'startDate',
      'lasUpdateTime',
      'instanceId',
      'publishId',
      'linkToDownload',
      'completedDate',
      'rowsProcessed',
      'rowNumber',
    ],
    title: 'ExportInProgressResponse',
  })
  .openapi('ExportInProgressResponse')

const FulfillmentSchema = z
  .object({
    Count: z.int32(),
    Facets: z.string().nullable(),
    Max: z.int32(),
    Mean: z.number(),
    Min: z.int32(),
    Missing: z.int32(),
    StdDev: z.number(),
    Sum: z.int32(),
    SumOfSquares: z.int32(),
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
    Count: z.int32(),
    Facets: z.string().nullable(),
    Max: z.int32(),
    Mean: z.number(),
    Min: z.int32(),
    Missing: z.int32(),
    StdDev: z.number(),
    Sum: z.int32(),
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
      .openapi({ type: 'integer', format: 'int64' }),
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
    Count: z.int32(),
    Facets: z.string().nullable(),
    Max: z.int32(),
    Mean: z.int32(),
    Min: z.int32(),
    Missing: z.int32(),
    StdDev: z.int32(),
    Sum: z.int32(),
    SumOfSquares: z.int32(),
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
    Count: z.int32(),
    Facets: z.string().nullable(),
    Max: z.int32(),
    Mean: z.number(),
    Min: z.int32(),
    Missing: z.int32(),
    StdDev: z.number(),
    Sum: z.int32(),
    SumOfSquares: z.int32(),
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

const FeedFilterSchema = z
  .object({
    disableSingleFire: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        description:
          'Sets a limit to how many times a specific order shows on the feed, after it first meets filtering conditions. Using the `FromOrders` type configuration with JSONata filtering expressions might cause orders to appear more than once on a feed, whenever changes are made to that order. If this field is `false` orders will appear in the feed only once.',
      }),
    expression: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'JSONata query expression that defines what conditions must be met for an order to be included in the feed. This should only be used in case `type` is set to `FromOrders`.',
      }),
    status: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          "List of order statuses that should be included in the feed. This should only be used in case `type` is set to `FromWorkflow`. The status event will be removed, if it can't deliver a message more than 100 times, 4 days progressively. \r\n\r\n**Status available to filter** \r\n\r\n- order-created \n\r\n- on-order-completed \n\r\n- on-order-completed-ffm \n\r\n- payment-pending \n\r\n- waiting-for-order-authorization \n\r\n- approve-payment \n\r\n- payment-approved \n\r\n- request-cancel \n\r\n- waiting-for-seller-decision \n\r\n- waiting-ffmt-authorization \n\r\n- waiting-for-authorization \n\r\n- waiting-for-manual-authorization \n\r\n- authorize-fulfillment \n\r\n- order-create-error \n\r\n- order-creation-error \n\r\n- window-to-cancel \n\r\n- window-to-change-seller \n\r\n- waiting-for-mkt-authorization \n\r\n- waiting-seller-handling \n\r\n- ready-for-handling \n\r\n- start-handling \n\r\n- handling \n\r\n- invoice-after-cancellation-deny \n\r\n- order-accepted \n\r\n- invoice \n\r\n- invoiced \n\r\n- replaced \n\r\n- cancellation-requested \n\r\n- cancel \n\r\n- canceled",
      }),
    type: z
      .string()
      .default('FromWorkflow')
      .openapi({
        description:
          'Determines what orders appear in the feed and how they are filtered. There are two possible values:\n\r\n\r-`FromWorkflow`: the feed will receive order updates only when order’s statuses change and orders can be filtered by status, using the `status` field described below.\n\r\n\r-`FromOrders`: the feed gets updates whenever any change is made to an order. in this case, orders can be filtered by any property, according to JSONata expressions passed in the `expression` field described below.',
      }),
  })
  .openapi({
    description: 'Object with type and status that will filter feed orders.',
    required: ['type'],
    title: 'Filter',
  })
  .openapi('FeedFilter')

const QueueSchema = z
  .object({
    MessageRetentionPeriodInSeconds: z
      .int32()
      .openapi({
        description:
          'Maximum life span of an order update in the feed. When a feed item is on the feed for this period of time, it is removed from the feed. Measured in seconds.',
        example: 3456000,
      }),
    visibilityTimeoutInSeconds: z
      .int32()
      .openapi({
        description:
          'Period of time for which an item becomes invisible after it has been [retrieved](https://developers.vtex.com/vtex-rest-api/reference/feed-v3#getfeedorderstatus1). Measured in seconds.',
        example: 250,
      }),
  })
  .openapi({
    description: 'Object with information about timeout and message retention.',
    required: ['visibilityTimeoutInSeconds', 'MessageRetentionPeriodInSeconds'],
    title: 'Queue',
  })
  .openapi('Queue')

const FeedConfigurationRequestSchema = z
  .object({ filter: FeedFilterSchema, queue: QueueSchema })
  .openapi({ required: ['filter', 'queue'], title: 'FeedConfigurationRequest' })
  .openapi('FeedConfigurationRequest')

const FromSchema = z
  .object({
    aliasMaskType: z
      .int32()
      .openapi({ description: 'Conversation tracker mask type.', example: 0 }),
    conversationRelatedTo: z
      .string()
      .openapi({ description: 'Related order ID.', example: '1305371685465-01' }),
    conversationSubject: z
      .string()
      .openapi({ description: 'Conversation subject.', example: 'oms' }),
    email: z.string().openapi({ description: "Sender's email.", example: 'noreply@store.com.br' }),
    emailAlias: z
      .string()
      .openapi({
        description: 'Sender transactional tracker email.',
        example: '64d8bd8dbe5c4e7b93b8b3c237e50be1@ct.name.com.br',
      }),
    name: z.string().openapi({ description: "Sender's name.", example: 'no reply' }),
    role: z
      .string()
      .nullable()
      .openapi({
        description: 'If it is a client or null, for transactional emails.',
        example: 'null',
      }),
  })
  .openapi({
    description: 'Conversation sender.',
    example: {
      aliasMaskType: 0,
      conversationRelatedTo: '1305371685465-01',
      conversationSubject: 'oms',
      email: 'noreply@store.com.br',
      emailAlias: 'noreply@vtexcommerce.com.br-9814872b.ct.store.com.br',
      name: 'no reply',
      role: 'null',
    },
    required: [
      'conversationRelatedTo',
      'conversationSubject',
      'emailAlias',
      'aliasMaskType',
      'email',
      'name',
      'role',
    ],
    title: 'From',
  })
  .openapi('From')

const ToSchema = z
  .object({
    aliasMaskType: z
      .int32()
      .openapi({ description: 'Conversation tracker mask type.', example: 0 }),
    conversationRelatedTo: z
      .string()
      .openapi({ description: 'Related order ID.', example: '1305371685465-01' }),
    conversationSubject: z
      .string()
      .openapi({ description: 'Conversation subject.', example: 'oms' }),
    email: z
      .string()
      .openapi({ description: "Receiver's email.", example: 'customer.name@email.com' }),
    emailAlias: z
      .string()
      .openapi({
        description: 'Sender transactional tracker email.',
        example: '64d8bd8dbe5c4e7b93b8b3c237e50be1@ct.name.com.br',
      }),
    name: z.string().openapi({ description: "Receiver's name.", example: 'Mary John' }),
    role: z
      .string()
      .openapi({
        description: 'If it is a customer or null, for transactional emails.',
        example: 'Customer',
      }),
  })
  .openapi({
    description: 'Conversation receiver.',
    example: {
      aliasMaskType: 0,
      conversationRelatedTo: '1305371685465-01',
      conversationSubject: 'oms',
      email: 'customer.name@email.com',
      emailAlias: '64d8bd8dbe5c4e7b93b8b3c237e50be1@ct.name.com.br',
      name: 'Mary John',
      role: 'Customer',
    },
    required: [
      'conversationRelatedTo',
      'conversationSubject',
      'emailAlias',
      'aliasMaskType',
      'email',
      'name',
      'role',
    ],
    title: 'To',
  })
  .openapi('To')

const GetConversationSchema = z
  .object({
    attachmentNames: z
      .array(
        z
          .string()
          .openapi({ description: 'Name of the attachment.', example: 'attachments439505' }),
      )
      .openapi({ description: "List with attachments' names, if there are any." }),
    body: z
      .string()
      .openapi({
        description: 'Conversation content body.',
        example:
          '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"> <html xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:v="urn:schemas-microsoft-com:vml" style="-webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; box-sizing: border-box; width: 100%; height: 100%; margin: 0; padding: 0; background: #f1f1f1 !important;"> <head> <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/> <meta http-equiv="X-UA-Compatible" content="IE=edge"/> <meta name="viewport" content="width=device-width, initial-scale=1.0"/> <title>recorrenciaqa</title> <!--[if gte mso 9]> <xml> <o:OfficeDocumentSettings> <o:AllowPNG/> <o:PixelsPerInch>96</o:PixelsPerInch> </o:OfficeDocumentSettings> </xml> <![endif]--> <style> a[x-apple-data-detectors] { color: inherit !important; text-decoration: none !important; font-size: inherit !important; font-family: inherit !important; font-weight: inherit !important; line-height: inherit !important; } </style> <style> @media (max-width: 600px) { img { max-width: 100% !important; height: auto !important; } } </style> <style> @media screen and (min-width: 30em) { .ph4-ns { padding-left: 2rem !important; padding-right: 2rem !important; } .mv4-ns { margin-top: 2rem !important; margin-bottom: 2rem !important; } } </style> </head> <body style="-webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; box-sizing: border-box; width: 100%; height: 100%; margin: 0; padding: 0; background: #f1f1f1 !important; font-family: -apple-system, BlinkMacSystemFont, \'Segoe UI\', Roboto, Helvetica, Arial, sans-serif;"> <table width="100%" border="0" cellpadding="0" cellspacing="0" style="box-sizing: border-box; margin: 0; padding: 0; background: #f1f1f1; border-collapse: collapse; border-spacing: 0; mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-family: -apple-system, BlinkMacSystemFont, \'Segoe UI\', Roboto, Helvetica, Arial, sans-serif; width: 100%; height: 100%; line-height: 100% !important;"> <tr style="box-sizing: border-box !important;"> <td align="left" valign="top" style="font-size: 14px; line-height: 20px; box-sizing: border-box; border-collapse: collapse; text-align: left !important; font-family: -apple-system, BlinkMacSystemFont, \'Segoe UI\', Roboto, Helvetica, Arial, sans-serif;"> <table class="mv4-ns" width="100%" align="center" border="0" cellpadding="0" cellspacing="0" style="box-sizing: border-box; max-width: 40rem; width: 100%; background-color: #fff; border-collapse: collapse; border-spacing: 0; mso-table-lspace: 0pt; mso-table-rspace: 0pt !important; font-family: -apple-system, BlinkMacSystemFont, \'Segoe UI\', Roboto, Helvetica, Arial, sans-serif;" bgcolor="#fff"> <tr style="box-sizing: border-box !important;"> <td class="ph4-ns" style="font-size: 14px; line-height: 20px; box-sizing: border-box; border-collapse: collapse; border-bottom-style: solid; border-bottom-width: 1px; border-color: #eee; width: 100%; padding-bottom: 2rem; text-align: center !important; font-family: -apple-system, BlinkMacSystemFont, \'Segoe UI\', Roboto, Helvetica, Arial, sans-serif;" align="center"> <div style="box-sizing: border-box; width: 8rem; margin-bottom: 1rem; margin-top: 2rem; margin-right: auto; margin-left: auto !important;"> <a href="http://.com.br" style="box-sizing: border-box !important;"> <img alt="" border="0" width="auto" src="http://licensemanager.vtex.com.br/api/site/pub/accounts/9ddcfba5-3855-49ec-b61e-b2847b9314cc/logos/show" style="vertical-align: top; outline: none; text-decoration: none; -ms-interpolation-mode: bicubic; max-width: 100%; border: none; max-height: 80px !important;"> </img></a> </div> <h1 style="margin: 0; font-size: 50px; line-height: 58px; box-sizing: border-box !important;">Seu pagamento foi aprovado.</h1> <div style="box-sizing: border-box; color: #777; margin-top: .5rem !important;"> Referente ao Pedido <span style="font-weight: 700 !important;">#1305371685465-01</span> </div> </td> </tr> <tr style="box-sizing: border-box !important;"> <td class="ph4-ns" style="font-size: 14px; line-height: 20px; box-sizing: border-box; border-collapse: collapse; text-align: left; width: 100% !important; font-family: -apple-system, BlinkMacSystemFont, \'Segoe UI\', Roboto, Helvetica, Arial, sans-serif;" align="left"> <div style="box-sizing: border-box; margin-top: 2rem !important;"> <p style="box-sizing: border-box !important;">    Olá, jose.     Estamos providenciando a emissão da Nota Fiscal do seu pedido e o envio do seu produto.  </p> </div> </td> </tr> <tr style="box-sizing: border-box !important;"> <td class="ph4-ns" style="font-size: 14px; line-height: 20px; box-sizing: border-box; border-collapse: collapse; text-align: left; width: 100%; padding-bottom: 2rem; padding-top: 1rem !important; font-family: -apple-system, BlinkMacSystemFont, \'Segoe UI\', Roboto, Helvetica, Arial, sans-serif;" align="left"> <h3 style="font-size: 20px; line-height: 36px; text-transform: uppercase; letter-spacing: 1.2pt; font-weight: 300; margin-top: 16px; box-sizing: border-box; margin: 0 !important;">Pagamento</h3>    <div style="box-sizing: border-box; line-height: 1.5; font-size: 1.25rem !important;"> Visa  final 1111  <br/>R$ 3,99  à vista  </div>     </td> </tr> <tr style="box-sizing: border-box !important;"> <td class="ph4-ns" style="font-size: 14px; line-height: 20px; box-sizing: border-box; border-collapse: collapse; text-align: left; border-top-style: solid; border-top-width: 1px; border-color: #eee; padding-top: 1rem; padding-bottom: 1rem !important; font-family: -apple-system, BlinkMacSystemFont, \'Segoe UI\', Roboto, Helvetica, Arial, sans-serif;" align="left"> <p style="box-sizing: border-box !important;"> Atenciosamente,<br/>Equipe recorrenciaqa </p> </td> </tr> </table> </td> </tr> </table> </body> </html>',
      }),
    date: z
      .string()
      .openapi({ description: 'Conversation date.', example: '2023-01-23T09:23:31.0000000+00:00' }),
    firstWords: z
      .string()
      .openapi({
        description: 'First words of Conversation content.',
        example: 'Your payment has been aproved and we are waiting for...',
      }),
    from: FromSchema,
    hasAttachment: z
      .boolean()
      .openapi({
        description:
          'When set as `true`, it means there are attachments, when set as `false`, there are not.',
        example: false,
      }),
    id: z
      .string()
      .openapi({
        description: 'Conversation ID.',
        example: '2023-01-23t09-23-08_619a80a05aa34efb982b309c7a1910e3',
      }),
    subject: z
      .string()
      .openapi({
        description: 'Conversation content subject.',
        example: 'Your payment has been aproved.',
      }),
    to: z.array(ToSchema).openapi({ description: 'Conversation receiver.' }),
  })
  .openapi({
    example: {
      attachmentNames: ['attachments439505'],
      body: '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"> <html xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:v="urn:schemas-microsoft-com:vml" style="-webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; box-sizing: border-box; width: 100%; height: 100%; margin: 0; padding: 0; background: #f1f1f1 !important;"> <head> <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/> <meta http-equiv="X-UA-Compatible" content="IE=edge"/> <meta name="viewport" content="width=device-width, initial-scale=1.0"/> <title>recorrenciaqa</title> <!--[if gte mso 9]> <xml> <o:OfficeDocumentSettings> <o:AllowPNG/> <o:PixelsPerInch>96</o:PixelsPerInch> </o:OfficeDocumentSettings> </xml> <![endif]--> <style> a[x-apple-data-detectors] { color: inherit !important; text-decoration: none !important; font-size: inherit !important; font-family: inherit !important; font-weight: inherit !important; line-height: inherit !important; } </style> <style> @media (max-width: 600px) { img { max-width: 100% !important; height: auto !important; } } </style> <style> @media screen and (min-width: 30em) { .ph4-ns { padding-left: 2rem !important; padding-right: 2rem !important; } .mv4-ns { margin-top: 2rem !important; margin-bottom: 2rem !important; } } </style> </head> <body style="-webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; box-sizing: border-box; width: 100%; height: 100%; margin: 0; padding: 0; background: #f1f1f1 !important; font-family: -apple-system, BlinkMacSystemFont, \'Segoe UI\', Roboto, Helvetica, Arial, sans-serif;"> <table width="100%" border="0" cellpadding="0" cellspacing="0" style="box-sizing: border-box; margin: 0; padding: 0; background: #f1f1f1; border-collapse: collapse; border-spacing: 0; mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-family: -apple-system, BlinkMacSystemFont, \'Segoe UI\', Roboto, Helvetica, Arial, sans-serif; width: 100%; height: 100%; line-height: 100% !important;"> <tr style="box-sizing: border-box !important;"> <td align="left" valign="top" style="font-size: 14px; line-height: 20px; box-sizing: border-box; border-collapse: collapse; text-align: left !important; font-family: -apple-system, BlinkMacSystemFont, \'Segoe UI\', Roboto, Helvetica, Arial, sans-serif;"> <table class="mv4-ns" width="100%" align="center" border="0" cellpadding="0" cellspacing="0" style="box-sizing: border-box; max-width: 40rem; width: 100%; background-color: #fff; border-collapse: collapse; border-spacing: 0; mso-table-lspace: 0pt; mso-table-rspace: 0pt !important; font-family: -apple-system, BlinkMacSystemFont, \'Segoe UI\', Roboto, Helvetica, Arial, sans-serif;" bgcolor="#fff"> <tr style="box-sizing: border-box !important;"> <td class="ph4-ns" style="font-size: 14px; line-height: 20px; box-sizing: border-box; border-collapse: collapse; border-bottom-style: solid; border-bottom-width: 1px; border-color: #eee; width: 100%; padding-bottom: 2rem; text-align: center !important; font-family: -apple-system, BlinkMacSystemFont, \'Segoe UI\', Roboto, Helvetica, Arial, sans-serif;" align="center"> <div style="box-sizing: border-box; width: 8rem; margin-bottom: 1rem; margin-top: 2rem; margin-right: auto; margin-left: auto !important;"> <a href="http://.com.br" style="box-sizing: border-box !important;"> <img alt="" border="0" width="auto" src="http://licensemanager.vtex.com.br/api/site/pub/accounts/9ddcfba5-3855-49ec-b61e-b2847b9314cc/logos/show" style="vertical-align: top; outline: none; text-decoration: none; -ms-interpolation-mode: bicubic; max-width: 100%; border: none; max-height: 80px !important;"> </img></a> </div> <h1 style="margin: 0; font-size: 50px; line-height: 58px; box-sizing: border-box !important;">Seu pagamento foi aprovado.</h1> <div style="box-sizing: border-box; color: #777; margin-top: .5rem !important;"> Referente ao Pedido <span style="font-weight: 700 !important;">#1305371685465-01</span> </div> </td> </tr> <tr style="box-sizing: border-box !important;"> <td class="ph4-ns" style="font-size: 14px; line-height: 20px; box-sizing: border-box; border-collapse: collapse; text-align: left; width: 100% !important; font-family: -apple-system, BlinkMacSystemFont, \'Segoe UI\', Roboto, Helvetica, Arial, sans-serif;" align="left"> <div style="box-sizing: border-box; margin-top: 2rem !important;"> <p style="box-sizing: border-box !important;">    Olá, jose.     Estamos providenciando a emissão da Nota Fiscal do seu pedido e o envio do seu produto.  </p> </div> </td> </tr> <tr style="box-sizing: border-box !important;"> <td class="ph4-ns" style="font-size: 14px; line-height: 20px; box-sizing: border-box; border-collapse: collapse; text-align: left; width: 100%; padding-bottom: 2rem; padding-top: 1rem !important; font-family: -apple-system, BlinkMacSystemFont, \'Segoe UI\', Roboto, Helvetica, Arial, sans-serif;" align="left"> <h3 style="font-size: 20px; line-height: 36px; text-transform: uppercase; letter-spacing: 1.2pt; font-weight: 300; margin-top: 16px; box-sizing: border-box; margin: 0 !important;">Pagamento</h3>    <div style="box-sizing: border-box; line-height: 1.5; font-size: 1.25rem !important;"> Visa  final 1111  <br/>R$ 3,99  à vista  </div>     </td> </tr> <tr style="box-sizing: border-box !important;"> <td class="ph4-ns" style="font-size: 14px; line-height: 20px; box-sizing: border-box; border-collapse: collapse; text-align: left; border-top-style: solid; border-top-width: 1px; border-color: #eee; padding-top: 1rem; padding-bottom: 1rem !important; font-family: -apple-system, BlinkMacSystemFont, \'Segoe UI\', Roboto, Helvetica, Arial, sans-serif;" align="left"> <p style="box-sizing: border-box !important;"> Atenciosamente,<br/>Equipe recorrenciaqa </p> </td> </tr> </table> </td> </tr> </table> </body> </html>',
      date: '2023-01-23T09:23:31.0000000+00:00',
      firstWords: 'Your payment has been aproved and we are waiting for...',
      from: {
        aliasMaskType: 0,
        conversationRelatedTo: '1305371685465-01',
        conversationSubject: 'oms',
        email: 'noreply@store.com.br',
        emailAlias: 'noreply@vtexcommerce.com.br-9814872b.ct.store.com.br',
        name: 'no reply',
        role: 'null',
      },
      hasAttachment: false,
      id: '2023-01-23t09-23-08_619a80a05aa34efb982b309c7a1910e3',
      subject: 'Your payment has been aproved.',
      to: [
        {
          aliasMaskType: 0,
          conversationRelatedTo: '1305371685465-01',
          conversationSubject: 'oms',
          email: 'customer.name@email.com',
          emailAlias: '64d8bd8dbe5c4e7b93b8b3c237e50be1@ct.name.com.br',
          name: 'Mary John',
          role: 'Customer',
        },
      ],
    },
    required: [
      'id',
      'from',
      'to',
      'subject',
      'firstWords',
      'body',
      'hasAttachment',
      'attachmentNames',
      'date',
    ],
    title: 'GetConversation',
  })
  .openapi('GetConversation')

const ItemAttachmentSchema = z
  .object({
    content: z.looseObject({}).openapi({ description: "Attachment's custom field for content." }),
    name: z.string().nullable().openapi({ description: "Attachment's name." }),
  })
  .openapi({
    description: 'Information about attachments, if it applies.',
    example: { content: {}, name: null },
    required: ['content', 'name'],
    title: 'ItemAttachment',
  })
  .openapi('ItemAttachment')

const ItemSchema = z
  .object({
    additionalInfo: AdditionalInfoSchema,
    assemblies: z
      .array(z.any())
      .nullable()
      .openapi({ description: "Retrieves information about orders item's customizations." }),
    attachmentOfferings: z
      .array(
        z
          .object({
            name: z.string().nullable().openapi({ description: 'Name of the attachment.' }),
            required: z
              .boolean()
              .nullable()
              .openapi({ description: 'If the attachment is required (`true`) or not (`false`).' }),
            schema: z
              .looseObject({})
              .nullable()
              .openapi({
                description: 'Schema of the content declared in the field `attachmentOfferings`.',
              }),
          })
          .openapi({ required: ['name', 'required', 'schema'] }),
      )
      .nullable()
      .openapi({ description: 'List of attachments details.' }),
    attachments: z
      .array(z.string())
      .openapi({ description: 'Array containing information on attachments.' }),
    bundleItems: z
      .array(z.string())
      .openapi({
        description:
          "Information on services sold along with the item's SKU. For example, a gift package.",
      }),
    callCenterOperator: z
      .string()
      .nullable()
      .openapi({ description: 'Call center operator responsible for the order.' }),
    commission: z.int32().openapi({ description: 'Commission value registered for the seller.' }),
    components: z.array(z.string()).openapi({ description: "Item's components." }),
    costPrice: z.int().openapi({ description: "Item's cost price." }),
    detailUrl: z.string().openapi({ description: 'URL slug of the item.' }),
    ean: z.string().nullable().openapi({ description: 'EAN of the SKU.' }),
    freightCommission: z.int32().openapi({ description: 'Value of the freight commission.' }),
    id: z
      .string()
      .openapi({ description: "Item's SKU ID, which is a unique numerical identifier." }),
    imageUrl: z.string().openapi({ description: "Item's SKU image URL." }),
    isGift: z
      .boolean()
      .openapi({
        description:
          'This field is `true` when the item is a gift in order context and `false` when it is not.',
      }),
    itemAttachment: ItemAttachmentSchema,
    listPrice: z.int32().openapi({ description: "Item's list price." }),
    lockId: z.string().openapi({ description: 'Reservation ID.' }),
    manualPrice: z.string().nullable().openapi({ description: "Item's manual price." }),
    measurementUnit: z.string().openapi({ description: "Item's measurement unit." }),
    name: z.string().openapi({ description: "Item's name." }),
    offerings: z
      .array(
        z
          .string()
          .openapi({
            description:
              'Name of the service related to the item. For example, guarantee or installation.',
          }),
      )
      .openapi({
        description:
          "Item's offerings, which are services related to the item. For example, guarantee or installation.",
      }),
    params: z.array(z.string()).openapi({ description: 'Information about params.' }),
    parentAssemblyBinding: z
      .string()
      .nullable()
      .openapi({ description: 'Parent assembly binding.' }),
    parentItemIndex: z.string().nullable().openapi({ description: 'Parent item index.' }),
    preSaleDate: z.string().nullable().openapi({ description: "Item's pre sale date." }),
    price: z.int32().openapi({ description: "Item's price." }),
    priceDefinitions: z
      .object({
        calculatedSellingPrice: z
          .int()
          .openapi({ description: "Item's calculated unitary selling price in cents." }),
        sellingPrices: z
          .array(
            z
              .object({
                quantity: z.int().openapi({ description: 'Quantity of items.' }),
                value: z.int().openapi({ description: 'Total value of items in cents.' }),
              })
              .openapi({ required: ['value', 'quantity'] }),
          )
          .openapi({ description: "Details on item's selling price." }),
        total: z.int().openapi({ description: "Total value of all item's units in cents." }),
      })
      .openapi({
        description: "Item's price information.",
        required: ['sellingPrices', 'calculatedSellingPrice', 'total'],
      }),
    priceTags: z
      .array(z.string())
      .openapi({ description: "List of objects with item's price modifiers." }),
    priceValidUntil: z
      .string()
      .nullable()
      .openapi({
        description: 'Date until when the price is going to be valid if there is a promotion.',
      }),
    productId: z.string().openapi({ description: 'ID of the Product associated with the item.' }),
    quantity: z.int32().openapi({ description: 'Quantity of items.' }),
    refId: z
      .string()
      .openapi({ description: 'Product referencial code associated with the item.' }),
    rewardValue: z.int32().openapi({ description: "Item's reward value." }),
    seller: z.string().openapi({ description: 'Seller related to the order.' }),
    sellerSku: z.string().openapi({ description: 'SKU ID from the seller perspective.' }),
    sellingPrice: z.int32().openapi({ description: "Item's selling price." }),
    serialNumbers: z
      .string()
      .nullable()
      .openapi({
        deprecated: true,
        description:
          'This field identifies the order in the `handling` status in the workflow, and it was used for VTEX internal control.',
      }),
    shippingPrice: z.string().nullable().openapi({ description: "Item's shipping price." }),
    tax: z.int32().openapi({ description: "Item's tax." }),
    taxCode: z.string().nullable().openapi({ description: " Item's tax code." }),
    uniqueId: z
      .string()
      .openapi({
        description:
          'Unique ID is an alphanumeric sequence that identifies an SKU in a given order.',
      }),
    unitMultiplier: z.int32().openapi({ description: "Item's unit multiplier." }),
  })
  .openapi({
    example: {
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
      assemblies: [],
      attachmentOfferings: [
        {
          name: 'vtex.subscription.weekly',
          required: false,
          schema: {
            'vtex.subscription.key.frequency': {
              Domain: [' 1 week', ' 2 week', ' 3 week', ' 4 week'],
              MaximumNumberOfCharacters: 7,
            },
          },
        },
        {
          name: 'vtex.subscription.daily',
          required: false,
          schema: {
            'vtex.subscription.key.frequency': { Domain: ['1 day'], MaximumNumberOfCharacters: 5 },
          },
        },
      ],
      attachments: [],
      bundleItems: [],
      callCenterOperator: 'callCenterOp5473869',
      commission: 0,
      components: [],
      costPrice: 52,
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
      priceDefinitions: {
        calculatedSellingPrice: 99,
        sellingPrices: [{ quantity: 1, value: 99 }],
        total: 99,
      },
      priceTags: [],
      priceValidUntil: null,
      productId: '9429485',
      quantity: 1,
      refId: 'BIGHEROBML',
      rewardValue: 0,
      seller: '1',
      sellerSku: '1234568358',
      sellingPrice: 3290,
      serialNumbers: '3',
      shippingPrice: null,
      tax: 0,
      taxCode: null,
      uniqueId: '87F0945396994B349158C7D9C9941442',
      unitMultiplier: 1,
    },
    required: [
      'uniqueId',
      'id',
      'productId',
      'ean',
      'lockId',
      'itemAttachment',
      'attachments',
      'quantity',
      'seller',
      'name',
      'refId',
      'price',
      'listPrice',
      'manualPrice',
      'priceTags',
      'imageUrl',
      'detailUrl',
      'components',
      'bundleItems',
      'params',
      'offerings',
      'attachmentOfferings',
      'sellerSku',
      'priceValidUntil',
      'commission',
      'tax',
      'preSaleDate',
      'additionalInfo',
      'measurementUnit',
      'unitMultiplier',
      'sellingPrice',
      'isGift',
      'shippingPrice',
      'rewardValue',
      'freightCommission',
      'priceDefinitions',
      'taxCode',
      'parentItemIndex',
      'parentAssemblyBinding',
      'callCenterOperator',
      'serialNumbers',
      'assemblies',
      'costPrice',
    ],
    title: 'Item',
  })
  .openapi('Item')

const MarketplaceSchema = z
  .object({
    baseURL: z.string().openapi({ description: 'Marketplace base URL.' }),
    isCertified: z.string().nullable().openapi({ description: 'If is a certified marketplace.' }),
    name: z.string().openapi({ description: 'Name of the marketplace.' }),
  })
  .openapi({
    description: 'Details about the marketplace related to the order.',
    example: {
      baseURL: 'http://oms.vtexinternal.com.br/api/oms?an=luxstore',
      isCertified: null,
      name: 'luxstore',
    },
    required: ['baseURL', 'isCertified', 'name'],
    title: 'Marketplace',
  })
  .openapi('Marketplace')

const PackageAttachmentSchema = z
  .object({ packages: z.array(z.string()).openapi({ description: 'Packages details.' }) })
  .openapi({
    description: 'Package object populated after order invoiced.',
    example: { packages: [] },
    required: ['packages'],
    title: 'PackageAttachment',
  })
  .openapi('PackageAttachment')

const PaymentSchema = z
  .object({
    accountId: z.string().openapi({ description: "Payment's account ID." }),
    bankIssuedInvoiceBarCodeNumber: z
      .string()
      .openapi({ description: 'Number of the bank issued invoice bar code.' }),
    bankIssuedInvoiceBarCodeType: z
      .string()
      .openapi({ description: 'Type of the bank issued invoice bar code.' }),
    bankIssuedInvoiceIdentificationNumber: z
      .string()
      .openapi({ description: 'Numeric sequence that identifies the bank issued invoice.' }),
    bankIssuedInvoiceIdentificationNumberFormatted: z
      .string()
      .openapi({ description: 'Bank issued invoice ID formatted.' }),
    billingAddress: z.looseObject({}).openapi({ description: 'Billing address information.' }),
    cardHolder: z
      .string()
      .nullable()
      .openapi({ description: 'Name of the person who owns the card.' }),
    cardNumber: z
      .string()
      .nullable()
      .openapi({ description: 'Numeric sequence of the card used in the transaction.' }),
    connectorResponses: z
      .object({
        Message: z
          .string()
          .openapi({ description: "Provider's operation/error message to be logged." }),
        ReturnCode: z
          .string()
          .openapi({ description: "Provider's operation/error code to be logged." }),
        Tid: z
          .string()
          .openapi({ description: "Provider's unique identifier for the transaction." }),
        authId: z.string().openapi({ description: "Connector's authorization ID." }),
      })
      .openapi({
        description: 'Information about the connector responses.',
        required: ['Tid', 'ReturnCode', 'Message', 'authId'],
      }),
    cvv2: z
      .string()
      .nullable()
      .openapi({
        description:
          'Card Verification Value (CVV2) is a security code used by payment processors to reduce fraudulent credit and debit card transactions.',
      }),
    dueDate: z.string().openapi({ description: 'Payment due date, with the format `yyyy-mm-dd`.' }),
    expireMonth: z
      .string()
      .nullable()
      .openapi({ description: 'Expire month of the card used in the transaction (2-digits).' }),
    expireYear: z
      .string()
      .nullable()
      .openapi({ description: 'Expire year of the card used in the transaction (4-digits).' }),
    firstDigits: z
      .string()
      .nullable()
      .openapi({ description: 'Fist digits of the card used in the transaction.' }),
    giftCardAsDiscount: z
      .boolean()
      .openapi({
        description:
          'When this field is set as `true`, the Gift Card is a discount over the price, and when set as `false`, it is not a discount.',
      }),
    giftCardCaption: z.string().nullable().openapi({ description: "Gift Card's caption." }),
    giftCardId: z.string().nullable().openapi({ description: "Gift Card's ID." }),
    giftCardName: z.string().nullable().openapi({ description: "Gift Card's name." }),
    giftCardProvider: z.string().openapi({ description: "Gift Card provider's ID." }),
    group: z.string().openapi({ description: 'Name of the collection the Gift Card belongs to.' }),
    id: z
      .string()
      .openapi({ description: 'VTEX payment ID that can be used as unique identifier.' }),
    installments: z.int32().openapi({ description: 'Number of payment installments.' }),
    koinUrl: z.string().openapi({ description: "Payment's account ID." }),
    lastDigits: z
      .string()
      .nullable()
      .openapi({ description: 'Last digits of the card used in the transaction.' }),
    parentAccountId: z
      .string()
      .openapi({
        description:
          'This field retrieves the main account if the payment was made in a subaccount.',
      }),
    paymentSystem: z.string().openapi({ description: "Payment system's ID." }),
    paymentSystemName: z.string().openapi({ description: "Payment system's name." }),
    redemptionCode: z
      .string()
      .nullable()
      .openapi({ description: 'Code for the customer to use the Gift Card.' }),
    referenceValue: z.int32().openapi({ description: "Payment's reference value in cents." }),
    tid: z
      .string()
      .nullable()
      .openapi({ description: "Provider's unique identifier for the transaction." }),
    url: z.string().openapi({ description: "Payment's URL." }),
    value: z.int32().openapi({ description: "Payment's final amount in cents." }),
  })
  .openapi({
    description: 'Payment details.',
    example: {
      accountId: '5BC5C6B417FE432AB971B1D399F190C9',
      bankIssuedInvoiceBarCodeNumber: '325349573975945245345439573421443986734065',
      bankIssuedInvoiceBarCodeType: 'i25',
      bankIssuedInvoiceIdentificationNumber: '23797770100000019003099260100022107500729050',
      bankIssuedInvoiceIdentificationNumberFormatted: '32534.95739 75945.24534 54395.734214 5',
      billingAddress: {},
      cardHolder: null,
      cardNumber: null,
      connectorResponses: {
        Message: 'logMessage',
        ReturnCode: '200',
        Tid: '94857956',
        authId: '857956',
      },
      cvv2: null,
      dueDate: '2019-02-02',
      expireMonth: null,
      expireYear: null,
      firstDigits: null,
      giftCardAsDiscount: false,
      giftCardCaption: null,
      giftCardId: null,
      giftCardName: null,
      giftCardProvider: 'presentCard',
      group: 'bankInvoice',
      id: 'D3DEECAB3C6C4B9EAF8EF4C1FE062FF3',
      installments: 1,
      koinUrl: 'koinURL',
      lastDigits: null,
      parentAccountId: '5BC5C6B417FE432AB971B1D399F190C9',
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
      'giftCardProvider',
      'giftCardAsDiscount',
      'koinUrl',
      'accountId',
      'parentAccountId',
      'bankIssuedInvoiceIdentificationNumber',
      'bankIssuedInvoiceIdentificationNumberFormatted',
      'bankIssuedInvoiceBarCodeNumber',
      'bankIssuedInvoiceBarCodeType',
      'billingAddress',
    ],
    title: 'Payment',
  })
  .openapi('Payment')

const TransactionSchema = z
  .object({
    isActive: z
      .boolean()
      .openapi({
        description:
          'When this field is set as `true`, the payment is active, and when it is `false`, the payment is inactive.',
      }),
    merchantName: z
      .string()
      .openapi({ description: 'Name of the merchant that will receive the payment.' }),
    payments: z
      .array(PaymentSchema)
      .openapi({ description: 'Detailed information about payment.' }),
    transactionId: z.string().openapi({ description: 'ID of the transaction.' }),
  })
  .openapi({
    description: 'Financial transaction details.',
    example: {
      isActive: true,
      merchantName: 'luxstore',
      payments: [
        {
          accountId: '5BC5C6B417FE432AB971B1D399F190C9',
          bankIssuedInvoiceBarCodeNumber: '325349573975945245345439573421443986734065',
          bankIssuedInvoiceBarCodeType: 'i25',
          bankIssuedInvoiceIdentificationNumber: '23797770100000019003099260100022107500729050',
          bankIssuedInvoiceIdentificationNumberFormatted: '32534.95739 75945.24534 54395.734214 5',
          billingAddress: {},
          cardHolder: null,
          cardNumber: null,
          connectorResponses: {
            Message: 'logMessage',
            ReturnCode: '200',
            Tid: '94857956',
            authId: '857956',
          },
          cvv2: null,
          dueDate: '2019-02-02',
          expireMonth: null,
          expireYear: null,
          firstDigits: null,
          giftCardAsDiscount: false,
          giftCardCaption: null,
          giftCardId: null,
          giftCardName: null,
          giftCardProvider: 'presentCard',
          group: 'bankInvoice',
          id: 'D3DEECAB3C6C4B9EAF8EF4C1FE062FF3',
          installments: 1,
          koinUrl: 'koinURL',
          lastDigits: null,
          parentAccountId: '5BC5C6B417FE432AB971B1D399F190C9',
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
    giftCards: z
      .array(z.any())
      .exactOptional()
      .openapi({ description: 'Array with information about Gift Cards.' }),
    transactions: z
      .array(TransactionSchema)
      .openapi({ description: 'Information about financial transactions.' }),
  })
  .openapi({
    description: 'Object with information about the payment.',
    example: {
      giftCards: [],
      transactions: [
        {
          isActive: true,
          merchantName: 'luxstore',
          payments: [
            {
              accountId: '5BC5C6B417FE432AB971B1D399F190C9',
              bankIssuedInvoiceBarCodeNumber: '325349573975945245345439573421443986734065',
              bankIssuedInvoiceBarCodeType: 'i25',
              bankIssuedInvoiceIdentificationNumber: '23797770100000019003099260100022107500729050',
              bankIssuedInvoiceIdentificationNumberFormatted:
                '32534.95739 75945.24534 54395.734214 5',
              billingAddress: {},
              cardHolder: null,
              cardNumber: null,
              connectorResponses: {
                Message: 'logMessage',
                ReturnCode: '200',
                Tid: '94857956',
                authId: '857956',
              },
              cvv2: null,
              dueDate: '2019-02-02',
              expireMonth: null,
              expireYear: null,
              firstDigits: null,
              giftCardAsDiscount: false,
              giftCardCaption: null,
              giftCardId: null,
              giftCardName: null,
              giftCardProvider: 'presentCard',
              group: 'bankInvoice',
              id: 'D3DEECAB3C6C4B9EAF8EF4C1FE062FF3',
              installments: 1,
              koinUrl: 'koinURL',
              lastDigits: null,
              parentAccountId: '5BC5C6B417FE432AB971B1D399F190C9',
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
    id: z.string().openapi({ description: 'ID of the rate or benefit.' }),
    rateAndBenefitsIdentifiers: z
      .array(z.string())
      .openapi({ description: "Information about order's promotions and taxes identifiers." }),
  })
  .openapi({
    description: 'Information on promotions and taxes that apply to the order.',
    example: { id: 'ratesAndBenefitsData', rateAndBenefitsIdentifiers: [] },
    required: ['id', 'rateAndBenefitsIdentifiers'],
    title: 'RatesAndBenefitsData',
  })
  .openapi('RatesAndBenefitsData')

const SellerSchema = z
  .object({
    fulfillmentEndpoint: z
      .string()
      .openapi({ description: "URL of the endpoint for fulfillment of seller's orders." }),
    id: z.string().openapi({ description: 'Seller ID that identifies the seller.' }),
    logo: z.string().openapi({ description: "URL of the seller's logo." }),
    name: z.string().openapi({ description: "Seller's name." }),
  })
  .openapi({
    description: 'Information about the seller associated with the order.',
    example: {
      fulfillmentEndpoint: 'http://fulfillment.vtexcommerce.com.br/api/fulfillment?an=accountName',
      id: '1',
      logo: 'https://sellersLogo/images.png',
      name: 'Loja do Suporte',
    },
    required: ['id', 'name', 'logo', 'fulfillmentEndpoint'],
    title: 'Seller',
  })
  .openapi('Seller')

const PickupStoreInfoSchema = z
  .object({
    additionalInfo: z
      .string()
      .nullable()
      .openapi({ description: 'Additional information about the pickup point.' }),
    address: z.string().nullable().openapi({ description: "Pickup point's address." }),
    dockId: z
      .string()
      .nullable()
      .openapi({
        description:
          'ID of the [loading dock](https://help.vtex.com/pt/tutorial/doca--5DY8xHEjOLYDVL41Urd5qj) related to the delivery or the pickup point.',
      }),
    friendlyName: z
      .string()
      .nullable()
      .openapi({ description: 'Name of the pickup point displayed at checkout.' }),
    isPickupStore: z
      .boolean()
      .openapi({
        description:
          'If this field is set `true`, it means the type of shipping is pickup, and if set as `false`, it is not.',
      }),
  })
  .openapi({
    description:
      'Detailed information about a [pickup point](https://help.vtex.com/en/tutorial/pickup-points--2fljn6wLjn8M4lJHA6HP3R).',
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
    deliveryChannel: z
      .string()
      .openapi({ description: 'If the delivery channel is `delivery` or `pickup-in-point`.' }),
    deliveryWindow: z
      .string()
      .nullable()
      .openapi({
        description:
          '[Scheduled delivery window](https://help.vtex.com/tutorial/scheduled-delivery--22g3HAVCGLFiU7xugShOBi) information, if it applies to the item.',
      }),
    id: z
      .string()
      .openapi({
        description:
          'ID of the shipping method used in the [shipping policy](https://help.vtex.com/en/tutorial/shipping-policy--tutorials_140).',
      }),
    lockTTL: z
      .string()
      .openapi({
        description:
          'Logistics [reservation](https://help.vtex.com/en/tutorial/how-does-reservation-work--tutorials_92) waiting time of the SLA.',
      }),
    name: z.string().openapi({ description: 'Name of the shipping policy.' }),
    pickupDistance: z
      .number()
      .openapi({
        description:
          "Distance in kilometers between the pickup point and the customer's address. The distance is measured as a straight line.",
      }),
    pickupPointId: z
      .string()
      .openapi({
        description:
          '[Pickup point](https://help.vtex.com/en/tutorial/pickup-points--2fljn6wLjn8M4lJHA6HP3R) ID related to the SLA.',
      }),
    pickupStoreInfo: PickupStoreInfoSchema,
    polygonName: z
      .string()
      .nullable()
      .openapi({
        description:
          'Name of the [polygon](https://help.vtex.com/en/tutorial/registering-geolocation/) associated with the shipping policy.',
      }),
    price: z
      .int32()
      .openapi({
        description:
          "Shipping price for the item in cents. Does not account for the whole order's shipping price.",
      }),
    shippingEstimate: z
      .string()
      .openapi({
        description:
          'Total shipping estimate time in days. For instance, three business days is represented `3bd`.',
      }),
    transitTime: z
      .string()
      .openapi({
        description:
          'Duration in business days of the time the carrier takes in transit to fulfill the order. For example, three business days is represented `3bd`.',
      }),
  })
  .openapi({
    example: {
      deliveryChannel: 'delivery',
      deliveryWindow: null,
      id: 'Normal',
      lockTTL: '12d',
      name: 'Normal',
      pickupDistance: 0,
      pickupPointId: '1_VTEX-RJ',
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
      transitTime: '3d',
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
      'lockTTL',
      'pickupPointId',
      'transitTime',
      'pickupDistance',
    ],
    title: 'Sla',
  })
  .openapi('Sla')

const LogisticsInfoSchema = z
  .object({
    addressId: z.string().openapi({ description: 'Address ID.' }),
    deliveryChannel: z
      .string()
      .openapi({ description: 'If the delivery channel is `delivery` or `pickup-in-point`.' }),
    deliveryChannels: z
      .array(
        z
          .object({
            id: z
              .string()
              .openapi({
                description:
                  "Delivery channel's shipping type, which can be `delivery` or `pickup-in-point`.",
              }),
            stockBalance: z.int().openapi({ description: 'Stock check for an SKU availability.' }),
          })
          .openapi({ required: ['id', 'stockBalance'] }),
      )
      .openapi({ description: 'List of delivery channels associated with the trade policy.' }),
    deliveryCompany: z
      .string()
      .openapi({
        description:
          "[Carrier](https://help.vtex.com/en/tutorial/transportadoras-na-vtex--7u9duMD5UQa2QQwukAWMcE) company's name.",
      }),
    deliveryIds: z
      .array(DeliveryIdSchema)
      .openapi({ description: 'Information about delivery IDs.' }),
    deliveryWindow: z
      .string()
      .nullable()
      .openapi({
        description:
          '[Scheduled delivery](https://help.vtex.com/tutorial/scheduled-delivery--22g3HAVCGLFiU7xugShOBi) window information, if it applies to the item.',
      }),
    entityId: z.string().openapi({ description: 'Shipping address entity ID.' }),
    itemIndex: z.int32().openapi({ description: 'Index of the item starting from 0.' }),
    listPrice: z
      .int32()
      .openapi({ description: "SKU's optional price for a specific trade policy." }),
    lockTTL: z
      .string()
      .openapi({
        description:
          'Logistics [reservation](https://help.vtex.com/en/tutorial/how-does-reservation-work--tutorials_92) waiting time.',
      }),
    pickupPointId: z
      .string()
      .openapi({
        description:
          "[Pickup point](https://help.vtex.com/en/tutorial/pickup-points--2fljn6wLjn8M4lJHA6HP3R)'s ID.",
      }),
    pickupStoreInfo: PickupStoreInfoSchema,
    polygonName: z
      .string()
      .nullable()
      .openapi({
        description:
          'Name of the [polygon](https://help.vtex.com/en/tutorial/registering-geolocation/) associated with the shipping policy.',
      }),
    price: z
      .int32()
      .openapi({
        description:
          "Shipping price for the item in cents. Does not account for the whole order's shipping price.",
      }),
    selectedSla: z.string().openapi({ description: 'Selected shipping option.' }),
    sellingPrice: z.int32().openapi({ description: "Item's selling price." }),
    shippingEstimate: z
      .string()
      .openapi({
        description:
          'Total shipping estimate time in days. For instance, three business days is represented `3bd`.',
      }),
    shippingEstimateDate: z
      .string()
      .openapi({
        description:
          'Shipping estimate date. It is defined only after the confirmation of the order.',
      }),
    shipsTo: z
      .array(z.string())
      .openapi({
        description:
          'Three letters ISO code of the country of the shipping address (ISO 3166 ALPHA-3).',
      }),
    slas: z
      .array(SlaSchema)
      .openapi({
        description:
          'Information on Service Level Agreement (SLA), corresponding to [shipping policies](https://help.vtex.com/tutorial/shipping-policy--tutorials_140).',
      }),
    transitTime: z
      .string()
      .openapi({
        description:
          'Duration in business days of the time the carrier takes in transit to fulfill the order. For example, three business days is represented `3bd`.',
      }),
    versionId: z.string().nullable().openapi({ description: 'Shipping address version ID.' }),
  })
  .openapi({
    example: {
      addressId: '-1425945657910',
      deliveryChannel: 'delivery',
      deliveryChannels: [{ id: 'delivery', stockBalance: 0 }],
      deliveryCompany: 'Todos os CEPS',
      deliveryIds: [
        {
          accountCarrierName: 'recorrenciaqa',
          courierId: '197a56f',
          courierName: 'Todos os CEPS',
          dockId: '1',
          kitItemDetails: [],
          quantity: 1,
          warehouseId: '1_1',
        },
      ],
      deliveryWindow: null,
      entityId: 'eabfb564-99d6-40d8-bd6c-bddbd4990aad',
      itemIndex: 0,
      listPrice: 1160,
      lockTTL: '10d',
      pickupPointId: '1_VTEX-RJ',
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
          lockTTL: '12d',
          name: 'Normal',
          pickupDistance: 0,
          pickupPointId: '1_VTEX-RJ',
          pickupStoreInfo: {
            additionalInfo: null,
            address: null,
            dockId: null,
            friendlyName: null,
            isPickupStore: false,
          },
          polygonName: 'region196',
          price: 1160,
          shippingEstimate: '5bd',
          transitTime: '3d',
        },
        {
          deliveryChannel: 'delivery',
          deliveryWindow: null,
          id: 'Expressa',
          lockTTL: '12d',
          name: 'Expressa',
          pickupDistance: 0,
          pickupPointId: '1_VTEX-RJ',
          pickupStoreInfo: {
            additionalInfo: null,
            address: null,
            dockId: null,
            friendlyName: null,
            isPickupStore: false,
          },
          polygonName: 'region196',
          price: 1160,
          shippingEstimate: '5bd',
          transitTime: '3d',
        },
        {
          deliveryChannel: 'delivery',
          deliveryWindow: null,
          id: 'Quebra Kit',
          lockTTL: '12d',
          name: 'Quebra Kit',
          pickupDistance: 0,
          pickupPointId: '1_VTEX-RJ',
          pickupStoreInfo: {
            additionalInfo: null,
            address: null,
            dockId: null,
            friendlyName: null,
            isPickupStore: false,
          },
          polygonName: 'region196',
          price: 1392,
          shippingEstimate: '2bd',
          transitTime: '3d',
        },
        {
          deliveryChannel: 'delivery',
          deliveryWindow: null,
          id: 'Sob Encomenda',
          lockTTL: '12d',
          name: 'Sob Encomenda',
          pickupDistance: 0,
          pickupPointId: '1_VTEX-RJ',
          pickupStoreInfo: {
            additionalInfo: null,
            address: null,
            dockId: null,
            friendlyName: null,
            isPickupStore: false,
          },
          polygonName: 'region196',
          price: 1392,
          shippingEstimate: '32bd',
          transitTime: '3d',
        },
      ],
      transitTime: '3d',
      versionId: 'e9c3bec2-125d-4b96-a021-316c3aa9f14f',
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
      'deliveryChannels',
      'deliveryChannel',
      'pickupStoreInfo',
      'addressId',
      'versionId',
      'entityId',
      'polygonName',
      'pickupPointId',
      'transitTime',
    ],
    title: 'LogisticsInfo',
  })
  .openapi('LogisticsInfo')

const SelectedAddressSchema = z
  .object({
    addressId: z.string().openapi({ description: 'Selected address ID.' }),
    addressType: z
      .string()
      .openapi({
        description:
          "Selected adress's shipping type, which can be `pickup`, `residential`, `invoice`, `search`, `inStore`, `commercial` or `giftRegistry`.",
      }),
    city: z.string().openapi({ description: 'City of the selected address.' }),
    complement: z
      .string()
      .openapi({ description: 'Complement to the selected address if it applies.' }),
    country: z
      .string()
      .openapi({
        description:
          'Three letters ISO code of the country of the selected address (ISO 3166 ALPHA-3).',
      }),
    entityId: z
      .string()
      .nullable()
      .openapi({ description: 'Shipping address entity ID  of the selected address.' }),
    geoCoordinates: z
      .array(z.string())
      .openapi({
        description:
          "Array with two numbers with the selected address's geocoordinates, first longitude then latitude.",
      }),
    neighborhood: z.string().openapi({ description: 'Neighborhood of the selected address.' }),
    number: z
      .string()
      .openapi({
        description: 'Number of the building, house or apartment of the selected address.',
      }),
    postalCode: z.string().openapi({ description: 'Postal code of the selected address.' }),
    receiverName: z
      .string()
      .openapi({
        description:
          'Name of the person who is going to receive the order in the selected address.',
      }),
    reference: z
      .string()
      .nullable()
      .openapi({ description: 'Complement to help locate the selected address.' }),
    state: z.string().openapi({ description: 'State of the selected address.' }),
    street: z.string().openapi({ description: 'Street of the selected address.' }),
    versionId: z
      .string()
      .nullable()
      .openapi({ description: 'Shipping address version ID of the selected address.' }),
  })
  .openapi({
    example: {
      addressId: '-1425945657910',
      addressType: 'residential',
      city: 'Rio de Janeiro',
      complement: '10',
      country: 'BRA',
      entityId: 'eabfb564-99d6-40d8-bd6c-bddbd4990aad',
      geoCoordinates: [],
      neighborhood: 'Botafogo',
      number: '518',
      postalCode: '22250-040',
      receiverName: 'Rodrigo Cunha',
      reference: null,
      state: 'RJ',
      street: 'Praia de Botafogo',
      versionId: 'e9c3bec2-125d-4b96-a021-316c3aa9f14f',
    },
    required: [
      'addressId',
      'versionId',
      'entityId',
      'addressType',
      'receiverName',
      'street',
      'number',
      'complement',
      'neighborhood',
      'postalCode',
      'city',
      'state',
      'country',
      'reference',
      'geoCoordinates',
    ],
    title: 'SelectedAddress',
  })
  .openapi('SelectedAddress')

const ShippingDataSchema = z
  .object({
    address: AddressSchema,
    id: z.string().openapi({ description: 'Object ID, the expected value is `shippingData`.' }),
    logisticsInfo: z
      .array(LogisticsInfoSchema)
      .openapi({ description: "Array of objects containing item's logistics information." }),
    selectedAddresses: z
      .array(SelectedAddressSchema)
      .openapi({ description: 'Information about selected adresses.' }),
    trackingHints: z.string().nullable(),
  })
  .openapi({
    description: 'Object containing shipping data.',
    example: {
      address: {
        addressId: '-1425945657910',
        addressType: 'residential',
        city: 'Rio de Janeiro',
        complement: '3',
        country: 'BRA',
        entityId: 'eabfb564-99d6-40d8-bd6c-bddbd4990aad',
        geoCoordinates: [],
        neighborhood: 'Botafogo',
        number: '300',
        postalCode: '22250-040',
        receiverName: 'Rodrigo Cunha',
        reference: null,
        state: 'RJ',
        street: 'Praia de Botafogo',
        versionId: 'e9c3bec2-125d-4b96-a021-316c3aa9f14f',
      },
      id: 'shippingData',
      logisticsInfo: [
        {
          addressId: '4791759472332',
          deliveryChannel: 'delivery',
          deliveryChannels: [{ id: 'delivery', stockBalance: 0 }],
          deliveryCompany: 'Todos os CEPS',
          deliveryIds: [
            {
              accountCarrierName: 'recorrenciaqa',
              courierId: '197a56f',
              courierName: 'Todos os CEPS',
              dockId: '1',
              kitItemDetails: [],
              quantity: 1,
              warehouseId: '1_1',
            },
          ],
          deliveryWindow: null,
          entityId: 'eabfb564-99d6-40d8-bd6c-bddbd4990aad',
          itemIndex: 0,
          listPrice: 1160,
          lockTTL: '10d',
          pickupPointId: 'store67',
          pickupStoreInfo: {
            additionalInfo: null,
            address: null,
            dockId: null,
            friendlyName: null,
            isPickupStore: false,
          },
          polygonName: '',
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
              lockTTL: '12d',
              name: 'Normal',
              pickupDistance: 0,
              pickupPointId: 'store35',
              pickupStoreInfo: {
                additionalInfo: null,
                address: null,
                dockId: null,
                friendlyName: null,
                isPickupStore: false,
              },
              polygonName: '',
              price: 1160,
              shippingEstimate: '5bd',
              transitTime: '3d',
            },
            {
              deliveryChannel: 'delivery',
              deliveryWindow: null,
              id: 'Expressa',
              lockTTL: '12d',
              name: 'Expressa',
              pickupDistance: 0,
              pickupPointId: 'store45',
              pickupStoreInfo: {
                additionalInfo: null,
                address: null,
                dockId: null,
                friendlyName: null,
                isPickupStore: false,
              },
              polygonName: '',
              price: 1160,
              shippingEstimate: '5bd',
              transitTime: '3d',
            },
            {
              deliveryChannel: 'delivery',
              deliveryWindow: null,
              id: 'Quebra Kit',
              lockTTL: '12d',
              name: 'Quebra Kit',
              pickupDistance: 0,
              pickupPointId: 'store45',
              pickupStoreInfo: {
                additionalInfo: null,
                address: null,
                dockId: null,
                friendlyName: null,
                isPickupStore: false,
              },
              polygonName: '',
              price: 1392,
              shippingEstimate: '2bd',
              transitTime: '3d',
            },
            {
              deliveryChannel: 'delivery',
              deliveryWindow: null,
              id: 'Sob Encomenda',
              lockTTL: '12d',
              name: 'Sob Encomenda',
              pickupDistance: 0,
              pickupPointId: 'store46',
              pickupStoreInfo: {
                additionalInfo: null,
                address: null,
                dockId: null,
                friendlyName: null,
                isPickupStore: false,
              },
              polygonName: '',
              price: 1392,
              shippingEstimate: '32bd',
              transitTime: '3d',
            },
          ],
          transitTime: '3d',
          versionId: 'e9c3bec2-125d-4b96-a021-316c3aa9f14f',
        },
      ],
      selectedAddresses: [
        {
          addressId: '-1425945657910',
          addressType: 'residential',
          city: 'Rio de Janeiro',
          complement: '10',
          country: 'BRA',
          entityId: 'eabfb564-99d6-40d8-bd6c-bddbd4990aad',
          geoCoordinates: [],
          neighborhood: 'Botafogo',
          number: '518',
          postalCode: '22250-040',
          receiverName: 'Rodrigo Cunha',
          reference: null,
          state: 'RJ',
          street: 'Praia de Botafogo',
          versionId: 'e9c3bec2-125d-4b96-a021-316c3aa9f14f',
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
    countryCode: z
      .string()
      .openapi({ description: 'Three letters ISO code of the country (ISO 3166 ALPHA-3).' }),
    currencyCode: z
      .string()
      .openapi({ description: 'Currency code in ISO 4217. For example, `BRL`.' }),
    currencyFormatInfo: CurrencyFormatInfoSchema,
    currencyLocale: z.int32().openapi({ description: 'Currency Locale Code in LCID in decimal.' }),
    currencySymbol: z.string().openapi({ description: 'Currency symbol.' }),
    timeZone: z.string().openapi({ description: 'Time zone from where the order was made.' }),
  })
  .openapi({
    description:
      "Object with data from the store's configuration - stored in VTEX's License Manager.",
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

const TotalSchema = z
  .object({
    id: z
      .string()
      .openapi({
        description:
          'Code that identifies if the information is about `Items`, `Discounts`, `Shipping`, `Tax` or `Change`.',
      }),
    name: z
      .string()
      .openapi({ description: 'Name of `Items`, `Discounts`, `Shipping`, `Tax` or `Change`.' }),
    value: z
      .int32()
      .openapi({
        description: 'Total amount of `Items`, `Discounts`, `Shipping`, `Tax` or `Change`.',
      }),
  })
  .openapi({
    example: { id: 'Items', name: 'Total dos Itens', value: 3290 },
    required: ['id', 'name', 'value'],
    title: 'Total',
  })
  .openapi('Total')

const GetOrderSchema = z
  .object({
    affiliateId: z.string(),
    allowCancellation: z.boolean(),
    allowEdition: z.boolean(),
    approvedBy: z.string().nullable(),
    authorizedDate: z.string(),
    callCenterOperatorData: z.string().nullable(),
    cancelReason: z.string().nullable().openapi({ description: 'Explanation for cancellation' }),
    cancelledBy: z.string().nullable().openapi({ description: 'User that canceled the order.' }),
    changesAttachment: ChangesAttachmentSchema,
    clientProfileData: ClientProfileDataSchema,
    commercialConditionData: z.string().nullable(),
    creationDate: z.string(),
    customData: z.string().nullable(),
    emailTracked: z.string(),
    followUpEmail: z.string(),
    giftRegistryData: z.string().nullable(),
    hostname: z.string(),
    invoiceData: z
      .looseObject({})
      .nullable()
      .openapi({ description: "Information pertinent to the order's invoice." }),
    invoicedDate: z.string().nullable(),
    isCheckedIn: z.boolean(),
    isCompleted: z.boolean(),
    items: z.array(ItemSchema).openapi({ description: '' }),
    lastChange: z.string(),
    lastMessage: z.string().nullable(),
    marketingData: z.string().nullable(),
    marketplace: MarketplaceSchema,
    marketplaceItems: z.array(z.string()).openapi({ description: '' }),
    marketplaceOrderId: z.string(),
    marketplaceServicesEndpoint: z.string(),
    merchantName: z.string().nullable(),
    openTextField: z
      .string()
      .nullable()
      .openapi({
        description:
          'This field must be filled in using the following format: \n\r```\n\r{\r\n    "fieldExample": "ValueExample"\r\n  }\n\r```\n\r',
      }),
    orderFormId: z.string(),
    orderGroup: z.string().nullable(),
    orderId: z.string(),
    origin: z.string(),
    packageAttachment: PackageAttachmentSchema,
    paymentData: PaymentDataSchema,
    ratesAndBenefitsData: RatesAndBenefitsDataSchema,
    roundingError: z.int32(),
    salesChannel: z.string(),
    sellerOrderId: z.string(),
    sellers: z.array(SellerSchema).openapi({ description: '' }),
    sequence: z.string(),
    shippingData: ShippingDataSchema,
    status: z.string(),
    statusDescription: z
      .string()
      .openapi({
        deprecated: true,
        description:
          '`Deprecated`. Status description which is displayed on the Admin panel. This field is obsolete and may not return any value.',
      }),
    storePreferencesData: StorePreferencesDataSchema,
    totals: z.array(TotalSchema).openapi({ description: '' }),
    value: z.int32(),
  })
  .openapi({
    example: {
      affiliateId: '',
      allowCancellation: false,
      allowEdition: false,
      approvedBy: "Person's name",
      authorizedDate: '2019-01-28T20:33:04+00:00',
      callCenterOperatorData: null,
      cancelReason: 'Explanation for cancellation',
      cancelledBy: "Person's name",
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
          assemblies: [],
          attachmentOfferings: [
            {
              name: 'vtex.subscription.weekly',
              required: false,
              schema: {
                'vtex.subscription.key.frequency': {
                  Domain: [' 1 week', ' 2 week', ' 3 week', ' 4 week'],
                  MaximumNumberOfCharacters: 7,
                },
              },
            },
          ],
          attachments: [],
          bundleItems: [],
          callCenterOperator: 'callCenterOp5473869',
          commission: 0,
          components: [],
          costPrice: 52,
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
          priceDefinitions: {
            calculatedSellingPrice: 99,
            sellingPrices: [{ quantity: 1, value: 99 }],
            total: 99,
          },
          priceTags: [],
          priceValidUntil: null,
          productId: '9429485',
          quantity: 1,
          refId: 'BIGHEROBML',
          rewardValue: 0,
          seller: '1',
          sellerSku: '1234568358',
          sellingPrice: 3290,
          serialNumbers: '3',
          shippingPrice: null,
          tax: 0,
          taxCode: null,
          uniqueId: '87F0945396994B349158C7D9C9941442',
          unitMultiplier: 1,
        },
      ],
      lastChange: '2019-02-06T20:46:11.7010747+00:00',
      lastMessage: null,
      marketingData: 'marketing data',
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
                accountId: '5BC5C6B417FE432AB971B1D399F190C9',
                bankIssuedInvoiceBarCodeNumber: '325349573975945245345439573421443986734065',
                bankIssuedInvoiceBarCodeType: 'i25',
                bankIssuedInvoiceIdentificationNumber:
                  '23797770100000019003099260100022107500729050',
                bankIssuedInvoiceIdentificationNumberFormatted:
                  '32534.95739 75945.24534 54395.734214 5',
                billingAddress: {},
                cardHolder: null,
                cardNumber: null,
                connectorResponses: {
                  Message: 'logMessage',
                  ReturnCode: '200',
                  Tid: '94857956',
                  authId: '857956',
                },
                cvv2: null,
                dueDate: '2019-02-02',
                expireMonth: null,
                expireYear: null,
                firstDigits: null,
                giftCardAsDiscount: false,
                giftCardCaption: null,
                giftCardId: null,
                giftCardName: null,
                giftCardProvider: 'presentCard',
                group: 'bankInvoice',
                id: 'D3DEECAB3C6C4B9EAF8EF4C1FE062FF3',
                installments: 1,
                koinUrl: 'koinURL',
                lastDigits: null,
                parentAccountId: '5BC5C6B417FE432AB971B1D399F190C9',
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
      sellers: [
        {
          fulfillmentEndpoint:
            'http://fulfillment.vtexcommerce.com.br/api/fulfillment?an=accountName',
          id: '1',
          logo: 'https://sellersLogo/images.png',
          name: 'Loja do Suporte',
        },
      ],
      sequence: '502556',
      shippingData: {
        address: {
          addressId: '-1425945657910',
          addressType: 'residential',
          city: 'Rio de Janeiro',
          complement: '3',
          country: 'BRA',
          entityId: 'eabfb564-99d6-40d8-bd6c-bddbd4990aad',
          geoCoordinates: [],
          neighborhood: 'Botafogo',
          number: '300',
          postalCode: '22250-040',
          receiverName: 'Rodrigo Cunha',
          reference: null,
          state: 'RJ',
          street: 'Praia de Botafogo',
          versionId: 'e9c3bec2-125d-4b96-a021-316c3aa9f14f',
        },
        id: 'shippingData',
        logisticsInfo: [
          {
            addressId: '-1425945657910',
            deliveryChannel: 'delivery',
            deliveryChannels: [
              { id: 'delivery', stockBalance: 0 },
              { id: 'pickup-in-point', stockBalance: 0 },
            ],
            deliveryCompany: 'Todos os CEPS',
            deliveryIds: [
              {
                accountCarrierName: 'recorrenciaqa',
                courierId: '197a56f',
                courierName: 'Todos os CEPS',
                dockId: '1',
                kitItemDetails: [],
                quantity: 1,
                warehouseId: '1_1',
              },
            ],
            deliveryWindow: null,
            entityId: 'eabfb564-99d6-40d8-bd6c-bddbd4990aad',
            itemIndex: 1,
            listPrice: 1160,
            lockTTL: '10d',
            pickupPointId: '1_VTEX-RJ',
            pickupStoreInfo: {
              additionalInfo: null,
              address: null,
              dockId: null,
              friendlyName: null,
              isPickupStore: false,
            },
            polygonName: 'region46',
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
                lockTTL: '12d',
                name: 'Normal',
                pickupDistance: 0,
                pickupPointId: '1_VTEX-RJ',
                pickupStoreInfo: {
                  additionalInfo: null,
                  address: null,
                  dockId: null,
                  friendlyName: null,
                  isPickupStore: false,
                },
                polygonName: 'region196',
                price: 1160,
                shippingEstimate: '5bd',
                transitTime: '3d',
              },
              {
                deliveryChannel: 'delivery',
                deliveryWindow: null,
                id: 'Expressa',
                lockTTL: '12d',
                name: 'Expressa',
                pickupDistance: 0,
                pickupPointId: '1_VTEX-RJ',
                pickupStoreInfo: {
                  additionalInfo: null,
                  address: null,
                  dockId: null,
                  friendlyName: null,
                  isPickupStore: false,
                },
                polygonName: 'region196',
                price: 1160,
                shippingEstimate: '5bd',
                transitTime: '3d',
              },
              {
                deliveryChannel: 'delivery',
                deliveryWindow: null,
                id: 'Quebra Kit',
                lockTTL: '12d',
                name: 'Quebra Kit',
                pickupDistance: 0,
                pickupPointId: '1_VTEX-RJ',
                pickupStoreInfo: {
                  additionalInfo: null,
                  address: null,
                  dockId: null,
                  friendlyName: null,
                  isPickupStore: false,
                },
                polygonName: 'region196',
                price: 1392,
                shippingEstimate: '2bd',
                transitTime: '3d',
              },
              {
                deliveryChannel: 'delivery',
                deliveryWindow: null,
                id: 'Sob Encomenda',
                lockTTL: '12d',
                name: 'Sob Encomenda',
                pickupDistance: 0,
                pickupPointId: '1_VTEX-RJ',
                pickupStoreInfo: {
                  additionalInfo: null,
                  address: null,
                  dockId: null,
                  friendlyName: null,
                  isPickupStore: false,
                },
                polygonName: 'region196',
                price: 1392,
                shippingEstimate: '32bd',
                transitTime: '3d',
              },
            ],
            transitTime: '3d',
            versionId: 'e9c3bec2-125d-4b96-a021-316c3aa9f14f',
          },
        ],
        selectedAddresses: [
          {
            addressId: '-1425945657910',
            addressType: 'residential',
            city: 'Rio de Janeiro',
            complement: '10',
            country: 'BRA',
            entityId: 'eabfb564-99d6-40d8-bd6c-bddbd4990aad',
            geoCoordinates: [],
            neighborhood: 'Botafogo',
            number: '518',
            postalCode: '22250-040',
            receiverName: 'Rodrigo Cunha',
            reference: null,
            state: 'RJ',
            street: 'Praia de Botafogo',
            versionId: 'e9c3bec2-125d-4b96-a021-316c3aa9f14f',
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
    required: [
      'emailTracked',
      'approvedBy',
      'cancelledBy',
      'cancelReason',
      'orderId',
      'sequence',
      'marketplaceOrderId',
      'marketplaceServicesEndpoint',
      'sellerOrderId',
      'origin',
      'affiliateId',
      'salesChannel',
      'merchantName',
      'status',
      'statusDescription',
      'value',
      'creationDate',
      'lastChange',
      'orderGroup',
      'totals',
      'items',
      'marketplaceItems',
      'clientProfileData',
      'giftRegistryData',
      'marketingData',
      'ratesAndBenefitsData',
      'shippingData',
      'paymentData',
      'packageAttachment',
      'sellers',
      'callCenterOperatorData',
      'followUpEmail',
      'lastMessage',
      'hostname',
      'invoiceData',
      'changesAttachment',
      'openTextField',
      'roundingError',
      'orderFormId',
      'commercialConditionData',
      'isCompleted',
      'customData',
      'storePreferencesData',
      'allowCancellation',
      'allowEdition',
      'isCheckedIn',
      'marketplace',
      'authorizedDate',
      'invoicedDate',
    ],
    title: 'GetOrder',
  })
  .openapi('GetOrder')

const Payment1Schema = z
  .object({
    cardHolder: z.string().nullable().openapi({ description: 'Payment card holder.' }),
    cardNumber: z.string().nullable().openapi({ description: 'Payment card number.' }),
    connectorResponses: ConnectorResponsesSchema,
    cvv2: z
      .string()
      .nullable()
      .openapi({
        description:
          'Card Verification Value (CVV2) is a security code used by payment processors to reduce fraudulent credit and debit card transactions.',
      }),
    dueDate: z.string().nullable().openapi({ description: 'Payment due date.' }),
    expireMonth: z.string().nullable().openapi({ description: 'Payment card expire month.' }),
    expireYear: z.string().nullable().openapi({ description: 'Payment card expire year.' }),
    firstDigits: z.string().openapi({ description: 'Payment card first digits.' }),
    giftCardCaption: z.string().nullable().openapi({ description: 'Gift Card caption.' }),
    giftCardId: z.string().nullable().openapi({ description: 'Gift Card ID.' }),
    giftCardName: z.string().nullable().openapi({ description: 'Gift Card name.' }),
    group: z
      .string()
      .openapi({
        description:
          'It represents the payment method. For each method, it can have the following values: \n\r\n- **Credit card:** `creditCard` \r\n\r\n- **Debid card:** `debitCard`\r\n\r\n- **Bank invoice:** `bankInvoice`\r\n\r\n- **Promissory:** `promissory` \r\n\r\n- **Gift card:** `giftCard` \n\r\n- **Pix:** `instantPayment`',
      }),
    id: z.string().openapi({ description: 'Payment ID.' }),
    installments: z.int32().openapi({ description: 'Payment Installments quantity.' }),
    lastDigits: z.string().openapi({ description: 'Payment card last digits.' }),
    paymentSystem: z.string().openapi({ description: 'Payment system ID.' }),
    paymentSystemName: z.string().openapi({ description: 'Payment system name.' }),
    redemptionCode: z
      .string()
      .nullable()
      .openapi({ description: 'Code for the customer to use the Gift Card.' }),
    referenceValue: z.int32().openapi({ description: 'Payment reference Value.' }),
    tid: z.string().openapi({ description: 'Payment transaction ID.' }),
    url: z.string().nullable().openapi({ description: 'Payment URL.' }),
    value: z.int32().openapi({ description: 'Payment value.' }),
  })
  .openapi({
    example: {
      cardHolder: null,
      cardNumber: null,
      connectorResponses: {
        Message: 'logMessage',
        ReturnCode: '200',
        Tid: '101770752',
        authId: '170852',
      },
      cvv2: null,
      dueDate: null,
      expireMonth: null,
      expireYear: null,
      firstDigits: '412341',
      giftCardCaption: null,
      giftCardId: null,
      giftCardName: null,
      group: 'creditCard',
      id: '721CBE1090324D12ABE301FE33DE775A',
      installments: 1,
      lastDigits: '4123',
      paymentSystem: '4',
      paymentSystemName: 'Mastercard',
      redemptionCode: null,
      referenceValue: 10150,
      tid: '101770752',
      url: null,
      value: 10150,
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
    title: 'Payment1',
  })
  .openapi('Payment1')

const GetPaymenttransactionSchema = z
  .object({
    isActive: z
      .boolean()
      .openapi({ description: 'If it is an active transaction (`true`) or not (`false`).' }),
    merchantName: z.string().openapi({ description: "Transaction merchant's name." }),
    payments: z.array(Payment1Schema).openapi({ description: "Payments' details object." }),
    status: z.string().openapi({ description: 'Transaction status.' }),
    transactionId: z.string().openapi({ description: 'Transaction ID.' }),
  })
  .openapi({
    example: {
      isActive: true,
      merchantName: 'LUXSTORE',
      payments: [
        {
          cardHolder: null,
          cardNumber: null,
          connectorResponses: {
            Message: 'logMessage',
            ReturnCode: '200',
            Tid: '101770752',
            authId: '170852',
          },
          cvv2: null,
          dueDate: null,
          expireMonth: null,
          expireYear: null,
          firstDigits: '412341',
          giftCardCaption: null,
          giftCardId: null,
          giftCardName: null,
          group: 'creditCard',
          id: '721CBE1090324D12ABE301FE33DE775A',
          installments: 1,
          lastDigits: '4123',
          paymentSystem: '4',
          paymentSystemName: 'Mastercard',
          redemptionCode: null,
          referenceValue: 10150,
          tid: '101770752',
          url: null,
          value: 10150,
        },
      ],
      status: 'Finished',
      transactionId: 'CB452D77E7D04099A4DB0479087B1D2C',
    },
    required: ['status', 'isActive', 'transactionId', 'merchantName', 'payments'],
    title: 'GetPaymenttransaction',
  })
  .openapi('GetPaymenttransaction')

const GetfeedorderstatusSchema = z
  .object({
    currentChange: z.string(),
    domain: z.string(),
    eventId: z.string(),
    handle: z.string(),
    lastChange: z.string(),
    lastState: z.string(),
    orderId: z.string(),
    state: z.string(),
  })
  .openapi({
    example: {
      currentChange: '2019-08-12T20:54:23.7153839Z',
      domain: 'Fulfillment',
      eventId: 'ED423DDED4C1AE580CADAC1A4D02DA3F',
      handle:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoidnRleGFwcGtleS1wYXJ0bmVyc2xhdGFtLVJNQkpNUyIsIkFwcEtleSI6InZ0ZXhhcHBrZXktcGFydG5lcnNsYXRhbS1STUJKTVMiLCJBY2NvdW50IjoicGFydG5lcnNsYXRhbSIsIkhhbmRsZSI6IkFRRUIzbmtWR0piOXhhNGRjYlpkOTFVVWMyL2JObHc0Qnp3ZlNLV201Rjg2QXgrSGlRM053bEJkb2NwM2wvVytLdjFNQTZ4d3ZLcFYwYjlSeUttNVRpb3hrSVFMSG1Uck9xenB2aFlwU29uMzRrVmlNaWZHY2lnZFFqalBJdk00eWU4amVuaS9QKytaTmVxOFZWeFNGay81Yzg3YS84MTRjTFg2WGZPR2x2WitlTnVjTzA3S3UxK0xXaU5vQmJEY0cycGxKekxkRks3Qld3b1NTV3BmSWhrOGhmSFNkSzlzZVpJeG01QXFLbHFrUHNDNGk5emVaYVpBUVVrSi9aZWo3UjRrRDVRaXFjNmpjcnFheEdHc1lsNHMzUWM0ZmtWdmhYblJVQ2l2ZGdpMEtUYS8zcXlWWU9QTktIV2huTlZxMEZHNDNjME4vaWh6dDc0d1laNVl6aDFJRitHU2t1YTkrN1pCdnQ2VGs1cFRhZmVVclk0ckNPL2Fobnl1eXFLOG53ZkorVWxUTmt2ZVNFS29FdTNiUWQzSmc5R1lYWHlXOVVxRGo5dHJIZ1N5M3ZZa0dBWjd0MDZNZWUwQnBsdFBxWExaIiwiT3JkZXJJZCI6Ijk1MzcxMjAwNDEyNi0wMSIsIk1lc3NhZ2VJZCI6ImI5YjI4NDkwLTNjNzAtNDdjNi1hMTE3LWNhN2FjMTk2MDY1OSIsIkRvbWFpbiI6IkZ1bGZpbGxtZW50IiwiU3RhdGUiOiJyZWFkeS1mb3ItaGFuZGxpbmciLCJMYXN0U3RhdGUiOiJ3aW5kb3ctdG8tY2FuY2VsIiwiTGFzdENoYW5nZSI6IjA4LzEyLzIwMTkgMjA6NTQ6MDEiLCJDdXJyZW50Q2hhbmdlIjoiMDgvMTIvMjAxOSAyMDo1NDoyMyIsIkNyZWF0ZWRBdCI6IjA4LzEyLzIwMTkgMjE6MDE6MzAiLCJpc3MiOiJicm9hZGNhc3QtYXBpLnZ0ZXhjb21tZXJjZS5jb20uYnIiLCJhdWQiOiJwYXJ0bmVyc2xhdGFtX3Z0ZXhhcHBrZXktcGFydG5lcnNsYXRhbS1STUJKTVMifQ.7RQBZQb6pHhFhA_jMKTiSoJbDck7awgD3Xx7sdJcW6w',
      lastChange: '2019-08-12T20:54:01.134057Z',
      lastState: 'window-to-cancel',
      orderId: '953712004126-01',
      state: 'ready-for-handling',
    },
    required: [
      'eventId',
      'handle',
      'domain',
      'state',
      'lastState',
      'orderId',
      'lastChange',
      'currentChange',
    ],
    title: 'Getfeedorderstatus',
  })
  .openapi('Getfeedorderstatus')

const HeadersSchema = z
  .object({ key: z.string() })
  .openapi({ example: { key: 'value' }, required: ['key'], title: 'Headers' })
  .openapi('Headers')

const HookSchema = z
  .object({ headers: HeadersSchema, url: z.string() })
  .openapi({
    example: { headers: { key: 'value' }, url: 'https://endpoint.example/path' },
    required: ['url', 'headers'],
    title: 'Hook',
  })
  .openapi('Hook')

const Origin2Schema = z
  .object({ Account: z.string(), Key: z.string() })
  .openapi({
    example: { Account: 'automacaoqa', Key: 'vtexappkey-appvtex' },
    required: ['Account', 'Key'],
    title: 'Origin2',
  })
  .openapi('Origin2')

const HookConfigurationSchema = z
  .object({
    CurrentChange: z.string(),
    Domain: z.string(),
    LastChange: z.string(),
    LastState: z.string(),
    OrderId: z.string(),
    Origin: Origin2Schema,
    State: z.string(),
  })
  .openapi({
    example: {
      CurrentChange: '2019-08-14T17:12:48.0965893Z',
      Domain: 'Fulfillment',
      LastChange: '2019-08-14T17:11:39.2550122Z',
      LastState: 'window-to-cancel',
      OrderId: 'v52277740atmc-01',
      Origin: { Account: 'automacaoqa', Key: 'vtexappkey-appvtex' },
      State: 'ready-for-handling',
    },
    required: ['Domain', 'OrderId', 'State', 'LastState', 'LastChange', 'CurrentChange', 'Origin'],
    title: 'HookConfiguration',
  })
  .openapi('HookConfiguration')

const HookFilterSchema = z
  .object({
    disableSingleFire: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        description:
          'Sets a limit to how many times a specific order shows on the hook, after it first meets filtering conditions. Using the `FromOrders` type configuration with JSONata filtering expressions might cause orders to appear more than once on a feed, whenever changes are made to that order. If this field is `false` orders will appear in the hook only once. Send this field if you want to filter `FromOrders`.',
      }),
    expression: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'JSONata query expression that defines what conditions must be met for an order to be included in the hook. This should only be used in case `type` is `FromOrders`.',
      }),
    status: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'List of order statuses that should be included in the hook. This should only be used in case `type` is `FromWorkflow`.',
      }),
    type: z
      .string()
      .default('FromWorkflow')
      .openapi({
        description:
          'Determines what orders appear in the hook and how they are filtered. As shown in the examples above, there are two ways:\r\n\r\n - `FromWorkflow`: the hook will receive order updates only when there is a change or update in the [order status](https://help.vtex.com/en/tutorial/order-flow-and-status--tutorials_196). You must send at least one value for the `status` field to determine by which status the orders will be filtered.\r\n\r\n - `FromOrders`: the hook will receive order updates when there is a change in the order. In this case, orders can be filtered by any property, according to JSONata expressions passed in the `expression` field. You must send the request with values for the `expression` and `disableSingleFire` fields.',
      }),
  })
  .openapi({ required: ['type'], title: 'Filter' })
  .openapi('HookFilter')

const HookConfigurationRequestSchema = z
  .object({ filter: HookFilterSchema, hook: HookSchema })
  .openapi({
    example: {
      filter: {
        status: [
          'order-completed',
          'handling',
          'ready-for-handling',
          'waiting-ffmt-authorization',
          'cancel',
        ],
        type: 'FromWorkflow',
      },
      hook: { headers: { key: 'value' }, url: 'https://endpoint.example/path' },
    },
    required: ['filter', 'hook'],
    title: 'HookConfigurationRequest',
  })
  .openapi('HookConfigurationRequest')

const Item1Schema = z
  .object({
    description: z
      .string()
      .default('335')
      .exactOptional()
      .openapi({
        description:
          'You can use this field for additional information about the SKU being invoiced.',
      }),
    id: z.string().openapi({ description: 'ID of the SKU being invoiced.' }),
    price: z
      .int32()
      .default(2499)
      .openapi({
        description:
          'Total price of the SKU being invoiced in cents. Do not use any decimal separator. For instance, `$24.99` should be represented as `2499`.',
      }),
    quantity: z
      .int32()
      .default(2)
      .openapi({ description: 'Quantity currently in inventory of the SKU being invoiced.' }),
  })
  .openapi({
    example: { description: '335', id: '1234', price: 10000, quantity: 1 },
    required: ['id', 'price', 'quantity'],
    title: 'Item1',
  })
  .openapi('Item1')

const InvoiceNotificationRequestSchema = z
  .object({
    courier: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The name of the carrier responsible for delivering the order. *This field should only be used when sending the **tracking** information. When the request is used for sending the invoice, this field should be left empty (`""`).*',
      }),
    dispatchedDate: z
      .string()
      .nullable()
      .default('2019-02-08T13:16:13.4617653+00:00')
      .exactOptional()
      .openapi({ description: 'Order dispatch date. May be `null`.' }),
    embeddedInvoice: z
      .string()
      .nullable()
      .default(
        '<NFe>\r\n<infNFe Id="NFe34687999999090910270550010000000015180000000000" versao="1.10">\r\n<ide>\r\n<cUF>37</cUF>\r\n<cNF>000005177</cNF>\r\n<natOp>Venda a vista</natOp>\r\n<indPag>0</indPag>\r\n<mod>55</mod>\r\n<serie>1</serie>\r\n<nNF>1</nNF>\r\n<dEmi>2018-07-06</dEmi>\r\n<dSaiEnt>2018-07-06</dSaiEnt>\r\n<tpNF>0</tpNF>\r\n<cMunFG>79950308</cMunFG>\r\n<tpImp>1</tpImp>\r\n<tpEmis>1</tpEmis>\r\n<cDV>3</cDV>\r\n<tpAmb>2</tpAmb>\r\n<finNFe>1</finNFe>\r\n<procEmi>0</procEmi>\r\n<verProc>NF-eletronica.com</verProc>\r\n</ide>\r\n<emit>\r\n<CNPJ>99999090998760</CNPJ>\r\n<xNome>NF-e Associacao NF-e</xNome>\r\n<xFant>NF-e</xFant>\r\n<enderEmit>\r\n<xLgr>Rua Central</xLgr>\r\n<nro>100</nro>\r\n<xCpl>Fundos</xCpl>\r\n<xBairro>Distrito Industrial</xBairro>\r\n<cMun>0000000</cMun>\r\n<xMun>Município</xMun>\r\n<UF>SP</UF>\r\n<CEP>0000000</CEP>\r\n<cPais>1058</cPais>\r\n<xPais>Brasil</xPais>\r\n<fone>1733021717</fone>\r\n</enderEmit>\r\n<IE>123456789012</IE>\r\n</emit>\r\n<dest>\r\n<CNPJ>00000000000000</CNPJ>\r\n<xNome>DISTRIBUIDORA DE AGUAS MINERAIS</xNome>\r\n<enderDest>\r\n<xLgr>AV DAS FONTES</xLgr>\r\n<nro>1777</nro>\r\n<xCpl>1001 ANDAR</xCpl>\r\n<xBairro>PARQUE</xBairro>\r\n<cMun>0000000</cMun>\r\n<xMun>Sao Paulo</xMun>\r\n<UF>SP</UF>\r\n<CEP>00000000</CEP>\r\n<cPais>1058</cPais>\r\n<xPais>BRASIL</xPais>\r\n<fone>3900000000</fone>\r\n</enderDest>\r\n<IE> </IE>\r\n</dest>\r\n<retirada>\r\n<CNPJ>000000000004</CNPJ>\r\n<xLgr>AV PAULISTA</xLgr>\r\n<nro>12345</nro>\r\n<xCpl>TERREO</xCpl>\r\n<xBairro>CERQUEIRA CESAR</xBairro>\r\n<cMun>0000000</cMun>\r\n<xMun>SAO PAULO</xMun>\r\n<UF>SP</UF>\r\n</retirada>\r\n<entrega>\r\n<CNPJ>00000000299000194</CNPJ>\r\n<xLgr>AV FARIA LIMA</xLgr>\r\n<nro>154400</nro>\r\n<xCpl>156 ANDAR</xCpl>\r\n<xBairro>PINHEIROS</xBairro>\r\n<cMun>0000308</cMun>\r\n<xMun>SAO PAULO</xMun>\r\n<UF>SP</UF>\r\n</entrega>\r\n<det nItem="1">\r\n<prod>\r\n<cProd>00001</cProd>\r\n<cEAN/>\r\n<xProd>Agua Mineral</xProd>\r\n<CFOP>5101</CFOP>\r\n<uCom>dz</uCom>\r\n<qCom>1000000.0000</qCom>\r\n<vUnCom>1</vUnCom>\r\n<vProd>10000000.00</vProd>\r\n<cEANTrib/>\r\n<uTrib>und</uTrib>\r\n<qTrib>12000000.0000</qTrib>\r\n<vUnTrib>1</vUnTrib>\r\n</prod>\r\n<imposto>\r\n<ICMS>\r\n<ICMS00>\r\n<orig>0</orig>\r\n<CST>00</CST>\r\n<modBC>0</modBC>\r\n<vBC>10000000.00</vBC>\r\n<pICMS>18.00</pICMS>\r\n<vICMS>1800000.00</vICMS>\r\n</ICMS00>\r\n</ICMS>\r\n<PIS>\r\n<PISAliq>\r\n<CST>01</CST>\r\n<vBC>10000000.00</vBC>\r\n<pPIS>0.65</pPIS>\r\n<vPIS>65000</vPIS>\r\n</PISAliq>\r\n</PIS>\r\n<COFINS>\r\n<COFINSAliq>\r\n<CST>01</CST>\r\n<vBC>10000000.00</vBC>\r\n<pCOFINS>2.00</pCOFINS>\r\n<vCOFINS>200000.00</vCOFINS>\r\n</COFINSAliq>\r\n</COFINS>\r\n</imposto>\r\n</det>\r\n<det nItem="2">\r\n<prod>\r\n<cProd>00002</cProd>\r\n<cEAN/>\r\n<xProd>Agua Mineral</xProd>\r\n<CFOP>5101</CFOP>\r\n<uCom>pack</uCom>\r\n<qCom>5000000.0000</qCom>\r\n<vUnCom>2</vUnCom>\r\n<vProd>10000000.00</vProd>\r\n<cEANTrib/>\r\n<uTrib>und</uTrib>\r\n<qTrib>3000000.0000</qTrib>\r\n<vUnTrib>0.3333</vUnTrib>\r\n</prod>\r\n<imposto>\r\n<ICMS>\r\n<ICMS00>\r\n<orig>0</orig>\r\n<CST>00</CST>\r\n<modBC>0</modBC>\r\n<vBC>10000000.00</vBC>\r\n<pICMS>18.00</pICMS>\r\n<vICMS>1800000.00</vICMS>\r\n</ICMS00>\r\n</ICMS>\r\n<PIS>\r\n<PISAliq>\r\n<CST>01</CST>\r\n<vBC>10000000.00</vBC>\r\n<pPIS>0.65</pPIS>\r\n<vPIS>65000</vPIS>\r\n</PISAliq>\r\n</PIS>\r\n<COFINS>\r\n<COFINSAliq>\r\n<CST>01</CST>\r\n<vBC>10000000.00</vBC>\r\n<pCOFINS>2.00</pCOFINS>\r\n<vCOFINS>200000.00</vCOFINS>\r\n</COFINSAliq>\r\n</COFINS>\r\n</imposto>\r\n</det>\r\n<total>\r\n<ICMSTot>\r\n<vBC>20000000.00</vBC>\r\n<vICMS>18.00</vICMS>\r\n<vBCST>0</vBCST>\r\n<vST>0</vST>\r\n<vProd>20000000.00</vProd>\r\n<vFrete>0</vFrete>\r\n<vSeg>0</vSeg>\r\n<vDesc>0</vDesc>\r\n<vII>0</vII>\r\n<vIPI>0</vIPI>\r\n<vPIS>130000.00</vPIS>\r\n<vCOFINS>400000.00</vCOFINS>\r\n<vOutro>0</vOutro>\r\n<vNF>20000000.00</vNF>\r\n</ICMSTot>\r\n</total>\r\n<transp>\r\n<modFrete>0</modFrete>\r\n<transporta>\r\n<CNPJ>00000000000000</CNPJ>\r\n<xNome>Distribuidora de Bebidas Fazenda de SP Ltda.</xNome>\r\n<IE>00000000999119</IE>\r\n<xEnder>Rua Central 100 - Fundos - Distrito Industrial</xEnder>\r\n<xMun>SAO PAULO</xMun>\r\n<UF>SP</UF>\r\n</transporta>\r\n<veicTransp>\r\n<placa>BXI1717</placa>\r\n<UF>SP</UF>\r\n<RNTC>123456789</RNTC>\r\n</veicTransp>\r\n<reboque>\r\n<placa>UUU0000</placa>\r\n<UF>SP</UF>\r\n<RNTC>123456789</RNTC>\r\n</reboque>\r\n<vol>\r\n<qVol>10000</qVol>\r\n<esp>CAIXA</esp>\r\n<marca>LINDOYA</marca>\r\n<nVol>500</nVol>\r\n<pesoL>1000000000.000</pesoL>\r\n<pesoB>1200000000.000</pesoB>\r\n<lacres>\r\n<nLacre>XYZ10231486</nLacre>\r\n</lacres>\r\n</vol>\r\n</transp>\r\n<infAdic>\r\n<infAdFisco>Nota Fiscal de exemplo NF-eletronica.com</infAdFisco>\r\n</infAdic>\r\n</infNFe>\r\n<Signature>\r\n<SignedInfo>\r\n<CanonicalizationMethod Algorithm="http://www.w3.org/TR/2001/REC-xml-c14n-0321120010315"/>\r\n<SignatureMethod Algorithm="http://www.w3.org/2000/09/xmldsig#rsa-sha1"/>\r\n<Reference URI="#NFe3508059999977777777705500100000000000000000">\r\n<Transforms>\r\n<Transform Algorithm="http://www.w3.org/2000/09/xmldsig#enveloped-signature"/>\r\n<Transform Algorithm="http://www.w3.org/TR/2001/REC-xml-c14n-66666615"/>\r\n</Transforms>\r\n<DigestMethod Algorithm="http://www.w3.org/2000/09/xmldsig#sha1"/>\r\n<DigestValue>xFzhgdgnhjSD1e9uqe04lnoHT4ZzLSY=</DigestValue>\r\n</Reference>\r\n</SignedInfo>\r\n<SignatureValue>\r\nIz5Z3PLQbzZt9jnBtr6xsmHZMOu/3plXG9xxfFjRCQYGnD1rjlhzBGrqt026Ca2VHHM/bHNepi6FuFkAi595GScKVuHREUotzifE2OIjgavvTOrMwbXG7+0LYgkwPFiPCao2S33UpZe7MneaxcmKQGKQZw1fP8fsWmaQ4cczZT8=\r\n</SignatureValue>\r\n<KeyInfo>\r\n<X509Data>\r\n<X509Certificate>\r\nMIIEuzCCA6OgAwIBAgIDMTMxMA0GasfFSDAGQUAMIGSMQswCQYDVQQGEwJCUjELMAkGA1UECBMCUlMxFTATBgNVBAcTDFBvcnRvIEFsZWdyZTEdMBsGA1UEChMUVGVzdGUgUHJvamV0byBORmUgUlMxHTAbBgNVBAsTFFRlc3RlIFByb2pldG8gTkZlIFJTMSEwHwYDVQQDExhORmUgLSBBQyBJbnRlcm1lZGlhcmlhIDEwHhcNMDgwNDI4MDkwMTAyWhcNMDkwNDMwMjM1OTU5WjCBnjELMAkGA1UECBMCUlMxHTAfvw4567DRhg76FByb2pldG8gTkZlIFJTMR0wGwYDVQQKExRUZXN0ZSBQcm9qZXRvIE5GZSBSUzEVMBMGA1UEBxMMUE9SVE8gQUxFR1JFMQswCQYDVQQGEwJCUjEtMCsGA1UEAxMkTkZlIC0gQXNzb2NpYWNhbyBORi1lOjk5OTk5MDkwOTEwMjcwMIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDDh6RRv0bj4RYX+tDQrZRb5opa77LBVVs+6LphIfSF3TSWPfnKh0+xLlBFdmnB5YGgbbW9Uon6pZQTfaC8jZhRhI5eFRRofY/Ugoeo0NGt6PcIQNZQd6lLQ/ASd1qWwjqJoEa7udriKjy3h351Mf1bng1VxS1urqC3Dn39ZWIEwQIDAQABo4IBjjCCAYowIgYDVR0jAQEABBgwFoAUPT5TqhNWAm+ZpcVsvB7malDBjEQwDwYDVR0TAQH/BAUwAwEBADAPBgNVHQ8BAf8EBQMDAOAAMAwGA1UdIAEBAAQCMAAwgbwGA1UdEQEBAASBsTCBrqA4BgVgTAEDBKAvBC0wNzA4MTk1MTE1MTk0NTMxMDg3MDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDCgHQYFYEwBAwKgFAQSRmVybmFuZG8gQ2FudG8gQWx0oBkGBWBMAQMDoBAEDjk5OTk5MDkwOTEwMjcwoBcGBWBMAQMHoA4EDDAwMDAwMDAwMDAwMIEfZmVybmFuZG8tYWx0QHByb2NlcmdzLnJzLmdvdi5icjAgBgNVHSUBAf8EFjAUBggrBgEFBQcDAgYIKwYBBQUHAwQwUwYDVR0fAQEABEkwRzBFoEOgQYY/aHR0cDovL25mZWNlcnRpZmljYWRvLnNlZmF6LnJzLmdvdi5ici9MQ1IvQUNJbnRlcm1lZGlhcmlhMzguY3JsMA0GCSqGSIb3DQEBBQUAA4IBAQCNPpaZ3Byu3/70nObXE8NiM53j1ddIFXsb+v2ghCVd4ffExv3hYc+/a3lfgV8H/WfQsdSCTzS2cHrd4Aasr/eXfclVDmf2hcWz+R7iysOHuT6B6r+DvV3JcMdJJCDdynR5REa+zViMnVZo1G3KuceQ7/y5X3WFNVq4kwHvonJ9oExsWyw8rTwUK5bsjz0A2yEwXkmkJIngnF41sP31+9jCImiqkXcmsesFhxzX7iurAQAQCZOm7iwMWxQKcAjXCZrgSZWRQy6mU224sX3HTArHahmLJ9Iw+WYAua5qBJsiN6PC7v5tfhdsgGD46DHMnOecxvkkPolDUyBa7d7xwgm\r\n</X509Certificate>\r\n</X509Data>\r\n</KeyInfo>\r\n</Signature>\r\n</NFe>',
      )
      .exactOptional()
      .openapi({
        description:
          'XML text of the invoice, not the URL. This field is very important for external marketplace integrations such as Mercado Libre.',
      }),
    invoiceKey: z.string().nullable().exactOptional().openapi({ description: '' }),
    invoiceNumber: z
      .string()
      .nullable()
      .openapi({ description: 'Number that identifies the invoice.' }),
    invoiceUrl: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'URL of the invoice. Can be used to send the URL of an XML file, for example, which is useful for some integrations.',
      }),
    invoiceValue: z
      .string()
      .default('2499')
      .openapi({
        description:
          'Total amount being invoiced in cents. Do not use any decimal separator. For instance, `$24.99` should be represented as `2499`.',
      }),
    issuanceDate: z
      .string()
      .openapi({
        description: 'Issuance date of the invoice. You must add date and time in this field.',
        example: '2019-01-31T18:25:43-05:00',
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
          'The number code that identifies the order tracking. *This field should only be used when sending the **tracking** information. When the request is used for sending the invoice, this field should be left empty (`""`).*',
      }),
    trackingUrl: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The URL used to track the order. *This field should only be used when sending the **tracking** information. When the request is used for sending the invoice, this field should be left empty (`""`).*',
      }),
    type: z
      .string()
      .openapi({
        description:
          'The type of invoice. There are two possible values: **Output** and **Input**. The Output type should be used when the invoice you are sending is a selling invoice. The Input type should be used when you send a return invoice.',
      }),
  })
  .openapi({
    example: {
      courier: null,
      dispatchedDate: '2019-01-31T18:25:43-05:00',
      invoiceKey: null,
      invoiceNumber: '9999',
      invoiceUrl: null,
      invoiceValue: '10000',
      issuanceDate: '2019-01-302019-01-31T18:25:43-05:00',
      items: [{ id: '1234', price: 10000, quantity: 1 }],
      trackingNumber: null,
      trackingUrl: null,
      type: 'Output',
    },
    required: ['type', 'issuanceDate', 'invoiceNumber', 'invoiceValue', 'items'],
    title: 'InvoiceNotificationRequest',
  })
  .openapi('InvoiceNotificationRequest')

const Item2Schema = z
  .object({
    description: z.string().openapi({ description: 'Description of items.' }),
    ean: z.string().nullable().openapi({ description: 'EAN of the SKU.' }),
    id: z
      .string()
      .openapi({ description: "Item's SKU ID, which is a unique numerical identifier." }),
    price: z.int32().openapi({ description: "Item's price." }),
    productId: z.string().openapi({ description: 'ID of the Product associated with the item.' }),
    quantity: z.int32().openapi({ description: 'Quantity of SKUs.' }),
    refId: z.string().nullable().openapi({ description: "Item's reference ID." }),
    seller: z.string().openapi({ description: 'Seller related to the order.' }),
    sellingPrice: z.int32().openapi({ description: "Details on item's selling price." }),
  })
  .openapi({
    example: {
      description: 'Mangueira Reservatório Ao Cavalete',
      ean: null,
      id: '195',
      price: 7390,
      productId: '134',
      quantity: 1,
      refId: 'TE3121110',
      seller: '1',
      sellingPrice: 7390,
    },
    required: [
      'seller',
      'quantity',
      'description',
      'ean',
      'refId',
      'id',
      'productId',
      'sellingPrice',
      'price',
    ],
    title: 'Item2',
  })
  .openapi('Item2')

const ListSchema = z
  .object({
    ShippingEstimatedDate: z.string().nullable(),
    ShippingEstimatedDateMax: z.string().nullable(),
    ShippingEstimatedDateMin: z.string().nullable(),
    affiliateId: z.string(),
    authorizedDate: z.string().nullable(),
    callCenterOperatorName: z.string().nullable(),
    clientName: z.string(),
    creationDate: z.string(),
    currencyCode: z.string(),
    items: z.string().nullable(),
    lastMessageUnread: z.string().nullable(),
    listId: z.string().nullable(),
    listType: z.string().nullable(),
    marketPlaceOrderId: z.string().nullable(),
    orderId: z.string(),
    orderIsComplete: z.boolean(),
    origin: z.string(),
    paymentNames: z.string(),
    salesChannel: z.string(),
    sequence: z.string(),
    status: z.string(),
    statusDescription: z
      .string()
      .openapi({
        description:
          '`Deprecated`. Status description which is displayed on the Admin panel. This field is obsolete and may not return any value.',
      }),
    totalItems: z.int32(),
    totalValue: z.int32(),
    workflowInErrorState: z.boolean(),
    workflowInRetry: z.boolean(),
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

const List1Schema = z
  .object({
    ShippingEstimatedDate: z
      .string()
      .nullable()
      .openapi({ description: 'Estimate shipping date.' }),
    ShippingEstimatedDateMax: z
      .string()
      .nullable()
      .openapi({ description: 'The most extended shipping estimation possible.' }),
    ShippingEstimatedDateMin: z
      .string()
      .nullable()
      .openapi({ description: 'The least extended shipping estimation possible.' }),
    affiliateId: z
      .string()
      .openapi({
        description:
          'Corresponds to the three-digits [affiliate](https://help.vtex.com/en/tutorial/configuring-affiliates--tutorials_187) identification code of the seller responsible for the order.',
      }),
    authorizedDate: z.string().nullable().openapi({ description: 'Authorized order date.' }),
    callCenterOperatorName: z
      .string()
      .nullable()
      .openapi({ description: 'Call center operator responsible for the order.' }),
    clientName: z.string().openapi({ description: "Order's customer name." }),
    creationDate: z.string().openapi({ description: "Order's creation date." }),
    currencyCode: z
      .string()
      .nullable()
      .openapi({ description: 'Currency code in ISO 4217. For example, `BRL`.' }),
    items: z
      .array(Item2Schema)
      .nullable()
      .openapi({ deprecated: true, description: "Information about order's items" }),
    lastMessageUnread: z
      .string()
      .nullable()
      .openapi({ description: 'Last sent transactional message.' }),
    listId: z.string().nullable().openapi({ description: 'Related Gift List ID.' }),
    listType: z.string().nullable().openapi({ description: 'Related Gift list type.' }),
    marketPlaceOrderId: z.string().nullable().openapi({ description: 'Marketplace order ID.' }),
    orderId: z
      .string()
      .openapi({ description: 'Order ID is a unique code that identifies an order.' }),
    orderIsComplete: z
      .boolean()
      .openapi({
        description:
          'If it is a completed order (`true`) or not (`false`). For more information, see [Order flow and status](https://help.vtex.com/en/tutorial/order-flow-and-status--tutorials_196).',
      }),
    origin: z.string().openapi({ description: 'Order Origin, if `Marketplace` or `Fulfillment`.' }),
    paymentNames: z.string().nullable().openapi({ description: 'Payment system name.' }),
    salesChannel: z
      .string()
      .openapi({
        description:
          'Sales channel (or [trade policy](https://help.vtex.com/tutorial/how-trade-policies-work--6Xef8PZiFm40kg2STrMkMV)) ID related to the order.',
      }),
    sequence: z
      .string()
      .openapi({
        description:
          'Six-digit string that follows the order ID. For example, in order `1268540501456-01 (501456)`, the sequence is `501456`.',
      }),
    status: z
      .string()
      .openapi({
        description:
          'Order [status](https://help.vtex.com/en/tutorial/order-flow-and-status--tutorials_196).',
      }),
    statusDescription: z
      .string()
      .openapi({
        deprecated: true,
        description:
          'Status description which is displayed on the Admin panel. This field is deprecated and may not return any value.',
      }),
    totalItems: z.int32().openapi({ description: "Order's total amount of items." }),
    totalValue: z.int32().openapi({ description: 'Total value amount.' }),
    workflowInErrorState: z
      .boolean()
      .openapi({ description: 'If there is a work flow error (`true`) or not (`false`).' }),
    workflowInRetry: z
      .boolean()
      .openapi({ description: 'If the order is in a work flow retry (`true`) or not (`false`).' }),
  })
  .openapi({
    example: {
      ShippingEstimatedDate: '2019-02-04T20:33:46+00:00',
      ShippingEstimatedDateMax: null,
      ShippingEstimatedDateMin: null,
      affiliateId: 'GTB',
      authorizedDate: '2019-01-28T20:33:04+00:00',
      callCenterOperatorName: null,
      clientName: 'Cunha VTEX',
      creationDate: '2019-01-28T20:09:43+00:00',
      currencyCode: 'BRL',
      items: [
        {
          description: 'Reservoir hose',
          ean: null,
          id: '195',
          price: 7390,
          productId: '134',
          quantity: 1,
          refId: 'TE3121110',
          seller: '1',
          sellingPrice: 7390,
        },
        {
          description: 'Reservoir filter',
          ean: null,
          id: '238',
          price: 5190,
          productId: '162',
          quantity: 1,
          refId: 'XC459N610CA',
          seller: '1',
          sellingPrice: 5190,
        },
      ],
      lastMessageUnread:
        ' Lux Store Seu pedido foi alterado! Pedido realizado em: 28/01/2019 Olá, Rodrigo. Seu pedido foi alterado. Seguem informações abaixo: ',
      listId: null,
      listType: null,
      marketPlaceOrderId: null,
      orderId: '1172452900788-01',
      orderIsComplete: true,
      origin: 'Marketplace',
      paymentNames: 'Boleto Bancário',
      salesChannel: '1',
      sequence: '502556',
      status: 'handling',
      statusDescription: 'Preparing for delivery',
      totalItems: 1,
      totalValue: 1160,
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
    title: 'List1',
  })
  .openapi('List1')

const PagingSchema = z
  .object({ currentPage: z.int32(), pages: z.int32(), perPage: z.int32(), total: z.int32() })
  .openapi({
    example: { currentPage: 1, pages: 6, perPage: 15, total: 84 },
    required: ['total', 'pages', 'currentPage', 'perPage'],
    title: 'Paging',
  })
  .openapi('Paging')

const TotalItemsSchema = z
  .object({
    Count: z.int32(),
    Facets: Facets1Schema,
    Max: z.int32(),
    Mean: z.number(),
    Min: z.int32(),
    Missing: z.int32(),
    StdDev: z.number(),
    Sum: z.int32(),
    SumOfSquares: z.int32(),
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
    Count: z.int32(),
    Facets: FacetsSchema,
    Max: z.int32(),
    Mean: z.number(),
    Min: z.int32(),
    Missing: z.int32(),
    StdDev: z.number(),
    Sum: z.int32(),
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
      .openapi({ type: 'integer', format: 'int64' }),
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
    facets: z.array(z.string()).openapi({ description: '' }),
    list: z.array(ListSchema).openapi({ description: '' }),
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

const RegisterChangeSchema = z
  .object({
    date: z.string().exactOptional().openapi({ description: 'Date of order change.' }),
    orderId: z.string().exactOptional().openapi({ description: 'ID of the order.' }),
    receipt: z.string().exactOptional().openapi({ description: 'Receipt' }),
  })
  .openapi({
    example: {
      date: '2019-02-08T13:54:33.6868469+00:00',
      orderId: 'v502538llux-01',
      receipt: '535d4581-a2a2-4fd2-a206-1c61eae91b1e',
    },
    title: 'RegisterChange',
    required: [],
  })
  .openapi('RegisterChange')

const RegisterChangeRequestSchema = z
  .object({
    discountValue: z
      .int32()
      .default(100)
      .openapi({
        description:
          'This field can be used to apply a discount to the total value of the order. Value in cents.',
      }),
    incrementValue: z
      .int32()
      .default(100)
      .openapi({
        description:
          'This field can be used to increment the total value of the order. Value in cents.',
      }),
    itemsAdded: z
      .array(
        z
          .object({
            id: z.string().default('0').openapi({ description: 'Product ID of the item.' }),
            price: z.int32().default(2499).openapi({ description: 'Price of the item in cents.' }),
            quantity: z.int32().default(1).openapi({ description: 'Amount of items to be added.' }),
          })
          .openapi({ required: ['id', 'price', 'quantity'] }),
      )
      .exactOptional()
      .openapi({ description: 'List of items that should be added to the order.' }),
    itemsRemoved: z
      .array(
        z
          .object({
            id: z.string().default('0').openapi({ description: 'Product ID of the item.' }),
            price: z.int32().default(2499).openapi({ description: 'Price of the item in cents.' }),
            quantity: z
              .int32()
              .default(1)
              .openapi({ description: 'Amount of items to be removed.' }),
          })
          .openapi({ required: ['id', 'price', 'quantity'] }),
      )
      .exactOptional()
      .openapi({ description: 'List of items that should be removed from the order.' }),
    reason: z
      .string()
      .default('Stock shortage')
      .openapi({
        description:
          'Reason for order change. This may be shown to the shopper in the UI or transactional emails.',
      }),
    requestId: z
      .string()
      .default('change-request-0123')
      .openapi({
        description:
          'Request identification of the change. Only the first change made with each `requestId` will be effective on a given order. Use different IDs for different changes to the same order.',
      }),
  })
  .openapi({
    example: {
      discountValue: 1000,
      incrementValue: 0,
      itemsAdded: [{ id: '234788', price: 200, quantity: 1 }],
      itemsRemoved: [{ id: '234794', price: 600, quantity: 2 }],
      reason: 'Promoção dada por telefone',
      requestId: 'change-request-0123',
    },
    required: ['requestId', 'reason', 'discountValue', 'incrementValue'],
    title: 'RegisterChangeRequest',
  })
  .openapi('RegisterChangeRequest')

const TotalItems1Schema = z
  .object({
    Count: z.int32(),
    Facets: z.looseObject({}),
    Max: z.int32(),
    Mean: z.int32(),
    Min: z.int32(),
    Missing: z.int32(),
    StdDev: z.int32(),
    Sum: z.int32(),
    SumOfSquares: z.int32(),
  })
  .openapi({
    example: {
      Count: 19,
      Facets: {},
      Max: 0,
      Mean: 0,
      Min: 0,
      Missing: 0,
      StdDev: 0,
      Sum: 0,
      SumOfSquares: 0,
    },
    required: ['Count', 'Max', 'Mean', 'Min', 'Missing', 'StdDev', 'Sum', 'SumOfSquares', 'Facets'],
    title: 'TotalItems1',
  })
  .openapi('TotalItems1')

const TotalValue1Schema = z
  .object({
    Count: z.int32(),
    Facets: z.looseObject({}),
    Max: z.int32(),
    Mean: z.int32(),
    Min: z.int32(),
    Missing: z.int32(),
    StdDev: z.int32(),
    Sum: z.int32(),
    SumOfSquares: z.int32(),
  })
  .openapi({
    example: {
      Count: 19,
      Facets: {},
      Max: 0,
      Mean: 0,
      Min: 0,
      Missing: 0,
      StdDev: 0,
      Sum: 0,
      SumOfSquares: 0,
    },
    required: ['Count', 'Max', 'Mean', 'Min', 'Missing', 'StdDev', 'Sum', 'SumOfSquares', 'Facets'],
    title: 'TotalValue1',
  })
  .openapi('TotalValue1')

const Stats3Schema = z
  .object({ totalItems: TotalItems1Schema, totalValue: TotalValue1Schema })
  .openapi({
    example: {
      totalItems: {
        Count: 19,
        Facets: {},
        Max: 0,
        Mean: 0,
        Min: 0,
        Missing: 0,
        StdDev: 0,
        Sum: 0,
        SumOfSquares: 0,
      },
      totalValue: {
        Count: 19,
        Facets: {},
        Max: 0,
        Mean: 0,
        Min: 0,
        Missing: 0,
        StdDev: 0,
        Sum: 0,
        SumOfSquares: 0,
      },
    },
    required: ['totalValue', 'totalItems'],
    title: 'Stats3',
  })
  .openapi('Stats3')

const Stats2Schema = z
  .object({ stats: Stats3Schema })
  .openapi({
    example: {
      stats: {
        totalItems: {
          Count: 19,
          Facets: {},
          Max: 0,
          Mean: 0,
          Min: 0,
          Missing: 0,
          StdDev: 0,
          Sum: 0,
          SumOfSquares: 0,
        },
        totalValue: {
          Count: 19,
          Facets: {},
          Max: 0,
          Mean: 0,
          Min: 0,
          Missing: 0,
          StdDev: 0,
          Sum: 0,
          SumOfSquares: 0,
        },
      },
    },
    required: ['stats'],
    title: 'Stats2',
  })
  .openapi('Stats2')

const TestJSONataExpressionSchema = z
  .object({
    Document: z
      .string()
      .openapi({ description: 'JSON document to be evaluated by the expression.' }),
    Expression: z.string().openapi({ description: 'JSONata expression to be tested.' }),
  })
  .openapi({ required: ['Expression', 'Document'] })
  .openapi('TestJSONataExpression')

const UpdateTrackingStatusSchema = z
  .object({ date: z.string(), orderId: z.string(), receipt: z.string() })
  .openapi({
    example: {
      date: '2017-03-29T18:04:31.0521233+00:00',
      orderId: 'v501245lspt-01',
      receipt: 'f67d33a8029c42ce9a8f07fc17f54449',
    },
    required: ['date', 'orderId', 'receipt'],
    title: 'UpdateTrackingStatus',
  })
  .openapi('UpdateTrackingStatus')

const UpdateTrackingStatusRequestSchema = z
  .object({
    deliveredDate: z
      .string()
      .nullable()
      .default('2022-10-01 21:15')
      .openapi({
        description:
          'Date and time of when the package was delivered. Note that it is different from the tracking date parameter. The `deliveredDate` format is `yyyy-mm-dd hh:mm`.',
      }),
    events: z.array(EventSchema).openapi({ description: '' }),
    isDelivered: z.boolean(),
  })
  .openapi({
    example: {
      deliveredDate: null,
      events: [
        {
          city: 'Rio de Janeiro',
          date: '2015-06-23',
          description: 'Coletado pela transportadora',
          state: 'RJ',
        },
        {
          city: 'Sao Paulo',
          date: '2015-06-24',
          description: 'A caminho de Curitiba',
          state: 'SP',
        },
      ],
      isDelivered: false,
    },
    required: ['isDelivered', 'deliveredDate', 'events'],
    title: 'UpdateTrackingStatusRequest',
  })
  .openapi('UpdateTrackingStatusRequest')

const UpdatepartialinvoiceSendTrackingNumberSchema = z
  .object({ date: z.string(), orderId: z.string(), receipt: z.string() })
  .openapi({
    example: {
      date: '2019-02-08T13:16:13.4617653+00:00',
      orderId: '00-v5195004lux-01',
      receipt: '527b1ae251264ef1b7a9b597cd8f16b9',
    },
    required: ['date', 'orderId', 'receipt'],
    title: 'Updatepartialinvoice.SendTrackingNumber',
  })
  .openapi('UpdatepartialinvoiceSendTrackingNumber')

const UpdatepartialinvoiceSendTrackingNumberRequestSchema = z
  .object({
    courier: z
      .string()
      .nullable()
      .openapi({ description: 'The name of the carrier responsible for delivering the order.' }),
    dispatchedDate: z
      .string()
      .nullable()
      .openapi({
        description:
          'Date when the package was dispatched. For example, 2023-01-08T13:16:13.4617653+00:00.',
      }),
    trackingNumber: z
      .string()
      .openapi({ description: 'The number code that identifies the order tracking.' }),
    trackingUrl: z.string().nullable().openapi({ description: 'Package tracking URL.' }),
  })
  .openapi({
    example: {
      courier: 'carrierOne',
      dispatchedDate: '2022-02-08T13:16:13.4617653+00:00',
      trackingNumber: '87658',
      trackingUrl: 'https://www.tracking.com/url',
    },
    required: ['trackingNumber', 'trackingUrl', 'courier', 'dispatchedDate'],
    title: 'Updatepartialinvoice.SendTrackingNumber.Request',
  })
  .openapi('UpdatepartialinvoiceSendTrackingNumberRequest')

const UserorderdetailsSchema = z
  .object({
    affiliateId: z
      .string()
      .openapi({
        description:
          'Corresponds to the three-digit [affiliate](https://help.vtex.com/en/tutorial/configuring-affiliates--tutorials_187) identification code of the seller responsible for the order.',
      }),
    allowCancellation: z
      .boolean()
      .openapi({
        description:
          'When set as `true`, the order can be canceled, and when set as `false`, it is no longer possible to cancel the order.',
      }),
    allowEdition: z
      .boolean()
      .openapi({
        description:
          'When set as `true`, the order can be edited, and when set as `false`, it is no longer possible to edit the order.',
      }),
    authorizedDate: z.string().openapi({ description: 'Authorized order date.' }),
    callCenterOperatorData: z
      .string()
      .nullable()
      .openapi({ description: 'Call center operator responsible for the order.' }),
    cancelReason: z.string().nullable().openapi({ description: 'Reason for order cancellation.' }),
    cancellationData: z
      .object({
        CancellationDate: z
          .string()
          .openapi({ description: 'The date when the order was cancelled.' }),
        Reason: z.string().openapi({ description: 'The reason why the order was cancelled.' }),
        RequestedByPaymentNotification: z
          .boolean()
          .openapi({
            description:
              'If the order cancellation was requested by the payment gateway (`true`) or not (`false`).',
          }),
        RequestedBySellerNotification: z
          .boolean()
          .openapi({
            description:
              'If the order cancellation was requested by the seller (`true`) or not (`false`).',
          }),
        RequestedBySystem: z
          .boolean()
          .openapi({
            description:
              'If the order cancellation was made by the system (`true`) or not (`false`). This type of order cancellation happens in [incomplete orders](https://help.vtex.com/en/tutorial/how-incomplete-orders-work--tutorials_294), for example.',
          }),
        RequestedByUser: z
          .boolean()
          .openapi({
            description:
              'If the order cancellation was requested by the costumer (`true`) or not (`false`).',
          }),
      })
      .openapi({
        description: 'Information about order cancellation, when it applies.',
        required: [
          'RequestedByUser',
          'RequestedBySystem',
          'RequestedBySellerNotification',
          'RequestedByPaymentNotification',
          'Reason',
          'CancellationDate',
        ],
      }),
    changesAttachment: ChangesAttachmentSchema,
    checkedInPickupPointId: z
      .string()
      .openapi({
        description:
          'If the field `isCheckedIn` is set as `true`, the `checkedInPickupPointId` will retrieve the ID of the physical store where the order was made.',
      }),
    clientPreferencesData: z
      .object({
        locale: z
          .string()
          .openapi({ description: "Customer's prefered language while accessing the store." }),
        optinNewsLetter: z
          .boolean()
          .openapi({
            description:
              'When set as `true`, this field indicates customers opted to receive the newsletters, and when set as `false`, it means they did not.',
          }),
      })
      .openapi({
        description: "Information about customer's preferences.",
        required: ['locale', 'optinNewsLetter'],
      }),
    clientProfileData: ClientProfileDataSchema,
    commercialConditionData: z
      .string()
      .nullable()
      .openapi({ description: 'Information about commercial conditions.' }),
    creationDate: z.string().openapi({ description: "Order's creation date." }),
    customData: z
      .string()
      .nullable()
      .openapi({
        description:
          'Custom information in the order. This field is useful for storing data not included in other fields, for example, a message for a gift or a name to be printed in a shirt.',
      }),
    followUpEmail: z
      .string()
      .openapi({
        description: "Email of the store's employee responsible for managing the order.",
      }),
    giftRegistryData: z
      .string()
      .nullable()
      .openapi({ description: 'Information about gift list, when it applies.' }),
    hostname: z
      .string()
      .openapi({ description: 'Account Hostname registered in License Manager.' }),
    invoiceData: z
      .looseObject({})
      .nullable()
      .openapi({ description: "Information pertinent to the order's invoice." }),
    invoicedDate: z.string().nullable().openapi({ description: "Order's invoice date." }),
    isCheckedIn: z
      .boolean()
      .openapi({
        description:
          'This field is set `true` when the order was made via inStore and `false` when it was not.',
      }),
    isCompleted: z
      .boolean()
      .openapi({
        description:
          "When set as `true`, the order's payment has been settled, and when set as `false`, it has not been settled yet.",
      }),
    itemMetadata: z
      .object({
        Items: z
          .array(
            z
              .object({
                AssemblyOptions: z
                  .array(
                    z
                      .object({
                        Composition: z
                          .looseObject({})
                          .nullable()
                          .openapi({ description: "Displays the attachment's composition." }),
                        Id: z
                          .string()
                          .openapi({ description: 'ID of the attachment related to the order.' }),
                        InputValues: z
                          .looseObject({})
                          .nullable()
                          .openapi({ description: "Displays the attachment's content." }),
                        Name: z
                          .string()
                          .openapi({ description: 'Name of the attachment related to the order.' }),
                        Required: z
                          .boolean()
                          .openapi({
                            description:
                              'If this field is set as `true`, when the customer purchases the item sending the attachment is required, and when set as `false`, sending the attachment is optional.',
                          }),
                      })
                      .openapi({
                        required: ['Id', 'Name', 'Required', 'InputValues', 'Composition'],
                      }),
                  )
                  .openapi({
                    description:
                      'Displays information about [assembly options](https://help.vtex.com/en/tutorial/assembly-options--5x5FhNr4f5RUGDEGWzV1nH) related to the item, if there are any.',
                  }),
                DetailUrl: z.string().openapi({ description: 'URL slug of the item.' }),
                Ean: z.string().openapi({ description: 'EAN of the item.' }),
                Id: z
                  .string()
                  .openapi({
                    description: "Item's SKU ID, which is a unique numerical identifier.",
                  }),
                ImageUrl: z.string().openapi({ description: "Item's SKU image URL." }),
                Name: z
                  .string()
                  .openapi({
                    description: 'Name of the item as displayed to customers in the storefront.',
                  }),
                ProductId: z
                  .string()
                  .openapi({ description: 'ID of the Product associated with the item.' }),
                RefId: z.string().openapi({ description: "Item's reference ID." }),
                Seller: z
                  .string()
                  .openapi({
                    description: 'Seller ID that identifies the seller the item belongs to.',
                  }),
                SkuName: z
                  .string()
                  .openapi({ description: 'Name of the SKU corresponding to the item.' }),
              })
              .openapi({
                required: [
                  'Id',
                  'Seller',
                  'Name',
                  'SkuName',
                  'ProductId',
                  'RefId',
                  'Ean',
                  'ImageUrl',
                  'DetailUrl',
                  'AssemblyOptions',
                ],
              }),
          )
          .openapi({ description: 'Metadata items.' }),
      })
      .openapi({
        description: "Metadata information about the order's items.",
        required: ['Items'],
      }),
    items: z.array(ItemSchema).openapi({ description: "Information about order's items." }),
    lastChange: z.string().openapi({ description: "Order's last change date." }),
    lastMessage: z.string().nullable().openapi({ description: 'Last sent transactional message.' }),
    marketingData: z
      .object({
        coupon: z.string().openapi({ description: "Coupon's code information." }),
        id: z
          .string()
          .openapi({ description: 'Object ID which expected value is `marketingData`.' }),
        marketingTags: z
          .array(z.string())
          .openapi({
            description:
              'Marketing tags information. This field can be used to register campaign data or informative tags regarding promotions.',
          }),
        utmCampaign: z
          .string()
          .openapi({
            description:
              'Value of the `utm_campaign` parameter of the URL that led to the request.',
          }),
        utmMedium: z
          .string()
          .openapi({
            description: 'Value of the `utm_medium` parameter of the URL that led to the request.',
          }),
        utmPartner: z.string().openapi({ description: 'UTM Source Parameters.' }),
        utmSource: z
          .string()
          .openapi({
            description: 'Value of the `utm_source` parameter of the URL that led to the request.',
          }),
        utmiCampaign: z.string().openapi({ description: 'Internal UTM value `utmi_cp`.' }),
        utmiPart: z.string().openapi({ description: 'Internal UTM value `utmi_pc`.' }),
        utmipage: z.string().openapi({ description: 'Internal UTM value `utmi_p`.' }),
      })
      .openapi({
        description:
          'Information about promotions and marketing. For example, coupon tracking information and internal or external UTMs.',
        required: [
          'id',
          'utmSource',
          'utmPartner',
          'utmMedium',
          'utmCampaign',
          'coupon',
          'utmiCampaign',
          'utmipage',
          'utmiPart',
          'marketingTags',
        ],
      }),
    marketplace: MarketplaceSchema,
    marketplaceItems: z.array(z.string()).openapi({ description: 'Marketplace details object.' }),
    marketplaceOrderId: z.string().openapi({ description: 'Marketplace order ID.' }),
    marketplaceServicesEndpoint: z
      .string()
      .openapi({ description: 'Marketplace services endpoint.' }),
    merchantName: z.string().openapi({ description: 'Name of the merchant.' }),
    openTextField: z
      .string()
      .nullable()
      .openapi({
        description:
          'Optional field with order\'s additional information. This field must be filled in using the following format: \n\r```\n\r{\r\n    "fieldExample": "ValueExample"\r\n  }\n\r```\n\r',
      }),
    orderFormId: z
      .string()
      .openapi({
        description: '[Order form](https://developers.vtex.com/docs/guides/orderform-fields) ID. ',
      }),
    orderGroup: z.string().openapi({ description: "Order's group ID." }),
    orderId: z
      .string()
      .openapi({ description: 'Order ID is a unique code that identifies an order.' }),
    origin: z.string().openapi({ description: 'Order Origin, if `Marketplace` or `Fulfillment`.' }),
    packageAttachment: PackageAttachmentSchema,
    paymentData: PaymentDataSchema,
    ratesAndBenefitsData: RatesAndBenefitsDataSchema,
    roundingError: z
      .int32()
      .openapi({
        description:
          'Rounding error total amount, if it applies. For example, in orders with a discount over non-integer multiplier items, the rounding price is performed per item, not after the sum of all items. That can cause a difference in the total discount amount, which is informed in this field.',
      }),
    salesChannel: z
      .string()
      .openapi({
        description:
          'Sales channel (or [trade policy](https://help.vtex.com/tutorial/how-trade-policies-work--6Xef8PZiFm40kg2STrMkMV)) ID related to the order.',
      }),
    sellerOrderId: z
      .string()
      .openapi({
        description:
          'ID of the seller related to the order. It can be a VTEX seller or an external seller.',
      }),
    sellers: z
      .array(SellerSchema)
      .openapi({ description: 'List of all sellers associated with the order.' }),
    sequence: z
      .string()
      .openapi({
        description:
          'Sequence is a six-digit string that follows the order ID. For example, in order `1268540501456-01 (501456)`, the sequence is `501456`.',
      }),
    shippingData: ShippingDataSchema,
    status: z
      .string()
      .openapi({
        description:
          'Order [status](https://help.vtex.com/en/tutorial/order-flow-and-status--tutorials_196).',
      }),
    statusDescription: z
      .string()
      .openapi({
        deprecated: true,
        description:
          '`Deprecated`. Status description which is displayed on the Admin panel. This field is obsolete and may not return any value.',
      }),
    storePreferencesData: StorePreferencesDataSchema,
    subscriptionData: z
      .object({
        SubscriptionGroupId: z
          .string()
          .openapi({
            description:
              "ID of the subscription's group. If this field returns `null` and the `executionCount` is `0`, the order is the first one with subscriptions.",
          }),
        Subscriptions: z
          .array(
            z
              .object({
                ExecutionCount: z
                  .int()
                  .openapi({
                    description:
                      'Position of the order in the subscription cycle. The first order will have the value `0`, the second will have the value `1`, and so on.',
                  }),
                ItemIndex: z
                  .int()
                  .openapi({
                    description:
                      "Each item in the subscriptions' order is identified by an index. The position starts in`0`, followed by `1`, `2`, and so on.",
                  }),
                Plan: z
                  .object({
                    frequency: z
                      .object({
                        interval: z
                          .int()
                          .openapi({
                            description:
                              "Number of the time interval configured between subscription orders, which depends on the periodicity. For a `DAILY` periodicity, the field's value will correspond to days, for `MONTHLY` to months, and so on.",
                          }),
                        periodicity: z
                          .string()
                          .openapi({
                            description:
                              'Defines the subscriptions recurrence period. The possible values are `DAILY`,`WEEKLY`, `MONTHLY` and `YEARLY`.',
                          }),
                      })
                      .openapi({
                        description: "Information about subscriptions' recurrence.",
                        required: ['periodicity', 'interval'],
                      }),
                    type: z.string().openapi({ description: 'Type of plan.' }),
                    validity: z
                      .object({
                        begin: z
                          .string()
                          .openapi({
                            description:
                              "Subscriptions' beginning date with the format `yyyy-mm-ddThh:mm:ss`.",
                          }),
                        end: z
                          .string()
                          .openapi({
                            description:
                              "Subscriptions' ending date with the format `yyyy-mm-ddThh:mm:ss`.",
                          }),
                      })
                      .openapi({
                        description:
                          'Information about the period during which the subscription will be valid.',
                        required: ['begin', 'end'],
                      }),
                  })
                  .openapi({
                    description: "Information about the subscription's validility and frequency.",
                    required: ['type', 'frequency', 'validity'],
                  }),
                PriceAtSubscriptionDate: z
                  .number()
                  .openapi({
                    deprecated: true,
                    description:
                      'Price of the order when the customer signed up for subscriptions. Subscriptions created from Admin UI or APIs do not have an original order, so the field returns `0.0`. This field was valid only for Subscriptions v2 and is deprecated in Subscriptions v3.',
                  }),
              })
              .openapi({
                required: ['ExecutionCount', 'PriceAtSubscriptionDate', 'ItemIndex', 'Plan'],
              }),
          )
          .nullable()
          .openapi({ description: 'List with subscriptions and their details.' }),
      })
      .nullable()
      .openapi({
        description:
          'Information about [subscriptions](https://help.vtex.com/tutorial/how-subscriptions-work--frequentlyAskedQuestions_4453).',
        required: ['SubscriptionGroupId', 'Subscriptions'],
      }),
    taxData: z
      .object({
        areTaxesDesignatedByMarketplace: z
          .boolean()
          .openapi({
            description:
              'If the taxes were designated by the marketplace (`true`), or not (`false`).',
          }),
        taxInfoCollection: z
          .array(
            z
              .object({
                itemIndex: z.int().openapi({ description: "Item's indexing number." }),
                priceTags: z
                  .array(
                    z
                      .object({
                        isPercentual: z
                          .boolean()
                          .openapi({
                            description: 'If the tax is a percentage (`true`) or note (`false`).',
                          }),
                        name: z.string().openapi({ description: 'Name that identifies the tax.' }),
                        rawValue: z
                          .string()
                          .openapi({ description: 'The amount that corresponds to the tax.' }),
                      })
                      .openapi({ required: ['isPercentual', 'name', 'rawValue'] }),
                  )
                  .openapi({ description: 'Price tag information.' }),
                sku: z
                  .string()
                  .openapi({ description: 'Alphanumeric sequence that identifies an SKU.' }),
              })
              .openapi({ required: ['itemIndex', 'sku', 'priceTags'] }),
          )
          .openapi({ description: "Array with taxes' details." }),
      })
      .openapi({
        description: "Order's tax information.",
        required: ['areTaxesDesignatedByMarketplace', 'taxInfoCollection'],
      }),
    totals: z
      .array(TotalSchema)
      .openapi({ description: "List with details about orders' totals." }),
    value: z.int32().openapi({ description: "Order's total amount." }),
  })
  .openapi({
    example: {
      affiliateId: '',
      allowCancellation: true,
      allowEdition: false,
      authorizedDate: '2019-01-28T20:33:04+00:00',
      callCenterOperatorData: null,
      cancelReason: 'The size was too big.',
      cancellationData: {
        CancellationDate: '2022-10--05T15:40:33',
        Reason: 'Item was too big in the client.',
        RequestedByPaymentNotification: false,
        RequestedBySellerNotification: false,
        RequestedBySystem: false,
        RequestedByUser: true,
      },
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
              orderId: 'v502556llux-01',
              receipt: '029f9ab8-751a-4b1e-bf81-7dd25d14b49b',
            },
          },
        ],
        id: 'changeAttachment',
      },
      checkedInPickupPointId: 'storeNameExample_901',
      clientPreferencesData: { locale: 'en-US', optinNewsLetter: false },
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
        lastName: 'Cunha',
        phone: '+5521972321094',
        stateInscription: null,
        tradeName: null,
        userProfileId: '5a3692de-358a-4bea-8885-044bce33bb93',
      },
      commercialConditionData: null,
      creationDate: '2019-01-28T20:09:43.899958+00:00',
      customData: null,
      followUpEmail: '7bf3a59bbc56402c810bda9521ba449e@ct.vtex.com.br',
      giftRegistryData: null,
      hostname: 'luxstore',
      invoiceData: null,
      invoicedDate: null,
      isCheckedIn: false,
      isCompleted: true,
      itemMetadata: {
        Items: [
          {
            AssemblyOptions: [
              {
                Composition: {},
                Id: 'vtex.subscription.plan-ana',
                InputValues: {
                  'vtex.subscription.key.frequency': {
                    Domain: ['4 month', '1 month'],
                    MaximumNumberOfCharacters: 8,
                  },
                },
                Name: 'vtex.subscription.plan-ana',
                Required: false,
              },
            ],
            DetailUrl: '/catfood/p',
            Ean: '43673557',
            Id: '18',
            ImageUrl:
              'http://store.vteximg.com.br/ids/155392-55-55/AlconKOI.jpg?v=635918402228600000',
            Name: 'Cat food',
            ProductId: '6',
            RefId: '105',
            Seller: '1',
            SkuName: 'Cat food',
          },
        ],
      },
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
          assemblies: [],
          attachmentOfferings: [
            {
              name: 'vtex.subscription.weekly',
              required: false,
              schema: {
                'vtex.subscription.key.frequency': {
                  Domain: [' 1 week', ' 2 week', ' 3 week', ' 4 week'],
                  MaximumNumberOfCharacters: 7,
                },
              },
            },
          ],
          attachments: [],
          bundleItems: [],
          callCenterOperator: 'callCenterOp5473869',
          commission: 0,
          components: [],
          costPrice: 52,
          detailUrl: '/bay-max-9429485/p',
          ean: null,
          freightCommission: 0,
          id: '1234568358',
          imageUrl:
            'http://luxstore.vteximg.com.br/arquivos/ids/159263-55-55/image-cc1aed75cbfa424a85a94900be3eacec.jpg?v=636795432619830000',
          isGift: false,
          itemAttachment: { content: {}, name: null },
          listPrice: 3290,
          lockId: '00-v502556llux-01',
          manualPrice: null,
          measurementUnit: 'un',
          name: 'Bay Max L',
          offerings: [],
          params: [],
          parentAssemblyBinding: null,
          parentItemIndex: null,
          preSaleDate: null,
          price: 3290,
          priceDefinitions: {
            calculatedSellingPrice: 99,
            sellingPrices: [{ quantity: 1, value: 99 }],
            total: 99,
          },
          priceTags: [],
          priceValidUntil: null,
          productId: '9429485',
          quantity: 1,
          refId: 'BIGHEROBML',
          rewardValue: 0,
          seller: '1',
          sellerSku: '1234568358',
          sellingPrice: 3290,
          serialNumbers: '3',
          shippingPrice: null,
          tax: 0,
          taxCode: null,
          uniqueId: '87F0945396994B349158C7D9C9941442',
          unitMultiplier: 1,
        },
      ],
      lastChange: '2019-02-06T20:46:11.7010747+00:00',
      lastMessage: null,
      marketingData: {
        coupon: 'sale',
        id: 'marketingData',
        marketingTags: ['vtex-subscription'],
        utmCampaign: 'christmas',
        utmMedium: 'utm medium',
        utmPartner: 'utm partner',
        utmSource: 'fb',
        utmiCampaign: ' ',
        utmiPart: ' ',
        utmipage: ' ',
      },
      marketplace: {
        baseURL: 'http://oms.vtexinternal.com.br/api/oms?an=luxstore',
        isCertified: null,
        name: 'luxstore',
      },
      marketplaceItems: [],
      marketplaceOrderId: '',
      marketplaceServicesEndpoint: 'http://oms.vtexinternal.com.br/api/oms?an=luxstore',
      merchantName: 'luxstore',
      openTextField: null,
      orderFormId: 'caae7471333e403f959fa5fd66951340',
      orderGroup: 'v502556lspt',
      orderId: 'v502556llux-01',
      origin: 'Marketplace',
      packageAttachment: { packages: [] },
      paymentData: {
        transactions: [
          {
            isActive: true,
            merchantName: 'luxstore',
            payments: [
              {
                accountId: '5BC5C6B417FE432AB971B1D399F190C9',
                bankIssuedInvoiceBarCodeNumber: '325349573975945245345439573421443986734065',
                bankIssuedInvoiceBarCodeType: 'i25',
                bankIssuedInvoiceIdentificationNumber:
                  '23797770100000019003099260100022107500729050',
                bankIssuedInvoiceIdentificationNumberFormatted:
                  '32534.95739 75945.24534 54395.734214 5',
                billingAddress: {},
                cardHolder: null,
                cardNumber: null,
                connectorResponses: {
                  Message: 'logMessage',
                  ReturnCode: '200',
                  Tid: '94857956',
                  authId: '857956',
                },
                cvv2: null,
                dueDate: '2019-02-02',
                expireMonth: null,
                expireYear: null,
                firstDigits: null,
                giftCardAsDiscount: false,
                giftCardCaption: null,
                giftCardId: null,
                giftCardName: null,
                giftCardProvider: 'presentCard',
                group: 'bankInvoice',
                id: 'D3DEECAB3C6C4B9EAF8EF4C1FE062FF3',
                installments: 1,
                koinUrl: 'koinURL',
                lastDigits: null,
                parentAccountId: '5BC5C6B417FE432AB971B1D399F190C9',
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
      sellerOrderId: '00-v502556llux-01',
      sellers: [
        {
          fulfillmentEndpoint:
            'http://fulfillment.vtexcommerce.com.br/api/fulfillment?an=accountName',
          id: '1',
          logo: 'https://sellersLogo/images.png',
          name: 'Lux Store',
        },
      ],
      sequence: '502556',
      shippingData: {
        address: {
          addressId: '-1425945657910',
          addressType: 'residential',
          city: 'Rio de Janeiro',
          complement: '10',
          country: 'BRA',
          entityId: 'eabfb564-99d6-40d8-bd6c-bddbd4990aad',
          geoCoordinates: [],
          neighborhood: 'Botafogo',
          number: '518',
          postalCode: '22250-040',
          receiverName: 'Rodrigo Cunha',
          reference: null,
          state: 'RJ',
          street: 'Praia de Botafogo',
          versionId: 'e9c3bec2-125d-4b96-a021-316c3aa9f14f',
        },
        id: 'shippingData',
        logisticsInfo: [
          {
            addressId: '-1425945657910',
            deliveryChannel: 'delivery',
            deliveryChannels: [{ id: 'delivery', stockBalance: 0 }],
            deliveryCompany: 'Todos os CEPS',
            deliveryIds: [
              {
                accountCarrierName: 'recorrenciaqa',
                courierId: '197a56f',
                courierName: 'Todos os CEPS',
                dockId: '1',
                kitItemDetails: [],
                quantity: 1,
                warehouseId: '1_1',
              },
            ],
            deliveryWindow: null,
            entityId: 'eabfb564-99d6-40d8-bd6c-bddbd4990aad',
            itemIndex: 0,
            listPrice: 1160,
            lockTTL: '10d',
            pickupPointId: '1_VTEX-RJ',
            pickupStoreInfo: {
              additionalInfo: null,
              address: null,
              dockId: null,
              friendlyName: null,
              isPickupStore: false,
            },
            polygonName: 'region56',
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
                lockTTL: '12d',
                name: 'Normal',
                pickupDistance: 29.861602783203125,
                pickupPointId: '1_VTEX-RJ',
                pickupStoreInfo: {
                  additionalInfo: null,
                  address: null,
                  dockId: null,
                  friendlyName: null,
                  isPickupStore: false,
                },
                polygonName: 'region13',
                price: 1160,
                shippingEstimate: '5bd',
                transitTime: '0d',
              },
              {
                deliveryChannel: 'delivery',
                deliveryWindow: null,
                id: 'Expressa',
                lockTTL: '12d',
                name: 'Expressa',
                pickupDistance: 29.861602783203125,
                pickupPointId: '1_VTEX-RJ',
                pickupStoreInfo: {
                  additionalInfo: null,
                  address: null,
                  dockId: null,
                  friendlyName: null,
                  isPickupStore: false,
                },
                polygonName: 'region13',
                price: 1160,
                shippingEstimate: '5bd',
                transitTime: '0d',
              },
              {
                deliveryChannel: 'delivery',
                deliveryWindow: null,
                id: 'Quebra Kit',
                lockTTL: '12d',
                name: 'Quebra Kit',
                pickupDistance: 29.861602783203125,
                pickupPointId: '1_VTEX-RJ',
                pickupStoreInfo: {
                  additionalInfo: null,
                  address: null,
                  dockId: null,
                  friendlyName: null,
                  isPickupStore: false,
                },
                polygonName: 'region13',
                price: 1392,
                shippingEstimate: '2bd',
                transitTime: '0d',
              },
              {
                deliveryChannel: 'delivery',
                deliveryWindow: null,
                id: 'Sob Encomenda',
                lockTTL: '12d',
                name: 'Sob Encomenda',
                pickupDistance: 29.861602783203125,
                pickupPointId: '1_VTEX-RJ',
                pickupStoreInfo: {
                  additionalInfo: null,
                  address: null,
                  dockId: null,
                  friendlyName: null,
                  isPickupStore: false,
                },
                polygonName: 'region13',
                price: 1392,
                shippingEstimate: '32bd',
                transitTime: '0d',
              },
            ],
            transitTime: '3d',
            versionId: 'e9c3bec2-125d-4b96-a021-316c3aa9f14f',
          },
        ],
        selectedAddresses: [
          {
            addressId: '-1425945657910',
            addressType: 'residential',
            city: 'Rio de Janeiro',
            complement: '10',
            country: 'BRA',
            entityId: 'eabfb564-99d6-40d8-bd6c-bddbd4990aad',
            geoCoordinates: [],
            neighborhood: 'Botafogo',
            number: '518',
            postalCode: '22250-040',
            receiverName: 'Rodrigo Cunha',
            reference: null,
            state: 'RJ',
            street: 'Praia de Botafogo',
            versionId: 'e9c3bec2-125d-4b96-a021-316c3aa9f14f',
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
      subscriptionData: {
        SubscriptionGroupId: 'A64AC73C0FB8693A7ADB4AC69CA4FD5F',
        Subscriptions: [
          {
            ExecutionCount: 724,
            ItemIndex: 0,
            Plan: {
              frequency: { interval: 1, periodicity: 'DAILY' },
              type: 'RECURRING_PAYMENT',
              validity: {
                begin: '2022-01-10T00:00:00.0000000+00:00',
                end: '2024-02-03T00:00:00.0000000+00:00',
              },
            },
            PriceAtSubscriptionDate: 100,
          },
        ],
      },
      taxData: {
        areTaxesDesignatedByMarketplace: true,
        taxInfoCollection: [
          {
            itemIndex: 0,
            priceTags: [
              {
                isPercentual: false,
                name: 'Taxes (Magazine Luisa)',
                rawValue: 'COLOCAR_O_VALOR_SEM_DECIMAL',
              },
            ],
            sku: 'COLOCAR_O_SKUID',
          },
        ],
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
    required: [
      'orderId',
      'sequence',
      'marketplaceOrderId',
      'marketplaceServicesEndpoint',
      'sellerOrderId',
      'origin',
      'affiliateId',
      'salesChannel',
      'merchantName',
      'status',
      'statusDescription',
      'value',
      'creationDate',
      'lastChange',
      'orderGroup',
      'totals',
      'items',
      'marketplaceItems',
      'clientProfileData',
      'giftRegistryData',
      'marketingData',
      'ratesAndBenefitsData',
      'shippingData',
      'paymentData',
      'packageAttachment',
      'sellers',
      'callCenterOperatorData',
      'followUpEmail',
      'lastMessage',
      'hostname',
      'invoiceData',
      'changesAttachment',
      'openTextField',
      'roundingError',
      'orderFormId',
      'commercialConditionData',
      'isCompleted',
      'customData',
      'storePreferencesData',
      'allowCancellation',
      'allowEdition',
      'isCheckedIn',
      'marketplace',
      'authorizedDate',
      'invoicedDate',
      'cancelReason',
      'itemMetadata',
      'subscriptionData',
      'taxData',
      'checkedInPickupPointId',
      'cancellationData',
      'clientPreferencesData',
    ],
    title: 'Userorderdetails',
  })
  .openapi('Userorderdetails')

const UserorderslistSchema = z
  .object({
    facets: z.array(z.string()).openapi({ description: '' }),
    list: z.array(List1Schema).openapi({ description: "List with user's orders details." }),
    paging: PagingSchema,
    stats: Stats2Schema,
  })
  .openapi({
    description: 'Order list object.',
    example: {
      facets: [],
      list: [
        {
          ShippingEstimatedDate: '2019-02-04T20:33:46+00:00',
          ShippingEstimatedDateMax: null,
          ShippingEstimatedDateMin: null,
          affiliateId: '',
          authorizedDate: '2019-01-28T20:33:04+00:00',
          callCenterOperatorName: null,
          clientName: 'Cunha VTEX',
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
          ShippingEstimatedDate: null,
          ShippingEstimatedDateMax: null,
          ShippingEstimatedDateMin: null,
          affiliateId: '',
          authorizedDate: null,
          callCenterOperatorName: null,
          clientName: 'Cunha VTEX',
          creationDate: '2018-08-28T17:42:40+00:00',
          currencyCode: 'BRL',
          items: null,
          lastMessageUnread:
            ' Lux Store 96 Seu pedido foi cancelado. Referente ao Pedido #v502449llux-02 Resumo Itens R$ 1.178,98 Entrega R$ 6,90 Total R$ 1.185,88',
          listId: null,
          listType: null,
          marketPlaceOrderId: null,
          orderId: 'v502449llux-02',
          orderIsComplete: true,
          origin: 'Marketplace',
          paymentNames: 'Promissory',
          salesChannel: '1',
          sequence: '502452',
          status: 'canceled',
          statusDescription: 'Cancelado',
          totalItems: 12,
          totalValue: 118588,
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
          clientName: 'Cunha VTEX',
          creationDate: '2018-08-28T17:42:28.9171556+00:00',
          currencyCode: null,
          items: [
            {
              description: 'Mangueira Reservatório Ao Cavalete',
              ean: null,
              id: '195',
              price: 7390,
              productId: '134',
              quantity: 1,
              refId: 'TE3121110',
              seller: '1',
              sellingPrice: 7390,
            },
            {
              description: 'Mangueira Filtro',
              ean: null,
              id: '238',
              price: 5190,
              productId: '162',
              quantity: 1,
              refId: 'XC459N610CA',
              seller: '1',
              sellingPrice: 5190,
            },
          ],
          lastMessageUnread: null,
          listId: null,
          listType: null,
          marketPlaceOrderId: '',
          orderId: 'v502449llux-01',
          orderIsComplete: true,
          origin: 'Marketplace',
          paymentNames: null,
          salesChannel: '1',
          sequence: '502449',
          status: 'canceled',
          statusDescription: 'Cancelado',
          totalItems: 0,
          totalValue: 21526180,
          workflowInErrorState: false,
          workflowInRetry: false,
        },
        {
          ShippingEstimatedDate: '2017-07-29T19:24:20.7444363+00:00',
          ShippingEstimatedDateMax: null,
          ShippingEstimatedDateMin: null,
          affiliateId: '',
          authorizedDate: null,
          callCenterOperatorName: null,
          clientName: 'Cunha VTEX',
          creationDate: '2017-07-25T23:17:36.7963248+00:00',
          currencyCode: null,
          items: [
            {
              description: 'Aquecedor Britania 1500 Branco',
              ean: '1235567890143',
              id: '1234568212',
              price: 35599,
              productId: '1000200',
              quantity: 1,
              refId: 'branquinho',
              seller: '1',
              sellingPrice: 35599,
            },
          ],
          lastMessageUnread: null,
          listId: null,
          listType: null,
          marketPlaceOrderId: '',
          orderId: 'v502058llux-01',
          orderIsComplete: true,
          origin: 'Marketplace',
          paymentNames: null,
          salesChannel: '1',
          sequence: '502058',
          status: 'invoiced',
          statusDescription: 'Faturado',
          totalItems: 0,
          totalValue: 35599,
          workflowInErrorState: false,
          workflowInRetry: false,
        },
        {
          ShippingEstimatedDate: '2017-06-27T13:59:49.7705236+00:00',
          ShippingEstimatedDateMax: null,
          ShippingEstimatedDateMin: null,
          affiliateId: '',
          authorizedDate: null,
          callCenterOperatorName: null,
          clientName: 'Cunha VTEX',
          creationDate: '2017-06-26T16:57:58.9986524+00:00',
          currencyCode: null,
          items: [
            {
              description: 'Boneco do Mário',
              ean: 'bonecomario',
              id: '1234568183',
              price: 150363,
              productId: '1000257',
              quantity: 1,
              refId: 'bonecomario',
              seller: '1',
              sellingPrice: 150363,
            },
            {
              description: 'Camiseta GG',
              ean: null,
              id: '1234567894',
              price: 899,
              productId: '1000187',
              quantity: 1,
              refId: 'abc1234',
              seller: '1',
              sellingPrice: 899,
            },
          ],
          lastMessageUnread: null,
          listId: null,
          listType: null,
          marketPlaceOrderId: '',
          orderId: 'v501538llux-01',
          orderIsComplete: true,
          origin: 'Marketplace',
          paymentNames: null,
          salesChannel: '1',
          sequence: '501538',
          status: 'invoiced',
          statusDescription: 'Faturado',
          totalItems: 0,
          totalValue: 151262,
          workflowInErrorState: false,
          workflowInRetry: false,
        },
        {
          ShippingEstimatedDate: '2016-12-02T08:00:00+00:00',
          ShippingEstimatedDateMax: null,
          ShippingEstimatedDateMin: null,
          affiliateId: '',
          authorizedDate: null,
          callCenterOperatorName: null,
          clientName: 'Cunha VTEX',
          creationDate: '2016-11-21T19:57:54.0415289+00:00',
          currencyCode: null,
          items: [
            {
              description: 'Camiseta GG',
              ean: null,
              id: '1234567894',
              price: 899,
              productId: '1000187',
              quantity: 2,
              refId: 'abc1234',
              seller: '1',
              sellingPrice: 899,
            },
          ],
          lastMessageUnread: null,
          listId: null,
          listType: null,
          marketPlaceOrderId: '',
          orderId: 'v501020llux-01',
          orderIsComplete: true,
          origin: 'Marketplace',
          paymentNames: null,
          salesChannel: '1',
          sequence: '501020',
          status: 'canceled',
          statusDescription: 'Cancelado',
          totalItems: 0,
          totalValue: 3190,
          workflowInErrorState: false,
          workflowInRetry: false,
        },
        {
          ShippingEstimatedDate: '2016-10-10T14:23:17.1897068+00:00',
          ShippingEstimatedDateMax: null,
          ShippingEstimatedDateMin: null,
          affiliateId: '',
          authorizedDate: null,
          callCenterOperatorName: null,
          clientName: 'Cunha VTEX',
          creationDate: '2016-10-10T17:19:30.8562035+00:00',
          currencyCode: null,
          items: [
            {
              description:
                'SMARTPHONE SAMSUNG GALAXY S7 FLAT SM-G930FZDLZTO 32GB DOURADO TELA 5.1" 4G CÂMERA 12 MP',
              ean: null,
              id: '1234568028',
              price: 299000,
              productId: '1000203',
              quantity: 1,
              refId: 'testefnac',
              seller: '1',
              sellingPrice: 299000,
            },
          ],
          lastMessageUnread: null,
          listId: null,
          listType: null,
          marketPlaceOrderId: '',
          orderId: 'v500973llux-01',
          orderIsComplete: true,
          origin: 'Marketplace',
          paymentNames: null,
          salesChannel: '1',
          sequence: '500973',
          status: 'handling',
          statusDescription: 'Preparando Entrega',
          totalItems: 0,
          totalValue: 299900,
          workflowInErrorState: false,
          workflowInRetry: false,
        },
        {
          ShippingEstimatedDate: '2016-10-10T14:13:34.4927265+00:00',
          ShippingEstimatedDateMax: null,
          ShippingEstimatedDateMin: null,
          affiliateId: '',
          authorizedDate: null,
          callCenterOperatorName: null,
          clientName: 'Cunha VTEX',
          creationDate: '2016-10-10T17:07:59.0889392+00:00',
          currencyCode: null,
          items: [
            {
              description: 'Camiseta GG',
              ean: null,
              id: '1234567894',
              price: 899,
              productId: '1000187',
              quantity: 1,
              refId: 'abc1234',
              seller: '1',
              sellingPrice: 899,
            },
          ],
          lastMessageUnread: null,
          listId: null,
          listType: null,
          marketPlaceOrderId: '',
          orderId: 'v500970llux-01',
          orderIsComplete: true,
          origin: 'Marketplace',
          paymentNames: null,
          salesChannel: '1',
          sequence: '500970',
          status: 'invoiced',
          statusDescription: 'Faturado',
          totalItems: 0,
          totalValue: 1799,
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
          clientName: 'Cunha VTEX',
          creationDate: '2016-08-17T18:35:04.8659804+00:00',
          currencyCode: null,
          items: [
            {
              description: 'Botin Futbol Adidas 11Questra Fg Cesped Hombre Absolut - M',
              ean: 'absolutm',
              id: '549',
              price: 1000,
              productId: '9',
              quantity: 1,
              refId: null,
              seller: '1',
              sellingPrice: 1000,
            },
          ],
          lastMessageUnread: null,
          listId: null,
          listType: null,
          marketPlaceOrderId: '',
          orderId: 'v500890llux-01',
          orderIsComplete: true,
          origin: 'Marketplace',
          paymentNames: null,
          salesChannel: '1',
          sequence: '500890',
          status: 'canceled',
          statusDescription: 'Cancelado',
          totalItems: 0,
          totalValue: 1000,
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
          clientName: 'Cunha VTEX',
          creationDate: '2016-07-29T00:20:47.7736718+00:00',
          currencyCode: null,
          items: [
            {
              description: 'Rooibos Lavanda - Pouch - 50gr',
              ean: '198',
              id: '98',
              price: 5200,
              productId: '1000025',
              quantity: 1,
              refId: '10098',
              seller: '1',
              sellingPrice: 5200,
            },
          ],
          lastMessageUnread: null,
          listId: null,
          listType: null,
          marketPlaceOrderId: '',
          orderId: 'v500838llux-01',
          orderIsComplete: true,
          origin: 'Marketplace',
          paymentNames: null,
          salesChannel: '1',
          sequence: '500838',
          status: 'canceled',
          statusDescription: 'Cancelado',
          totalItems: 0,
          totalValue: 6200,
          workflowInErrorState: false,
          workflowInRetry: false,
        },
      ],
      paging: { currentPage: 1, pages: 10, perPage: 2, total: 19 },
      stats: {
        stats: {
          totalItems: {
            Count: 19,
            Facets: {},
            Max: 0,
            Mean: 0,
            Min: 0,
            Missing: 0,
            StdDev: 0,
            Sum: 0,
            SumOfSquares: 0,
          },
          totalValue: {
            Count: 19,
            Facets: {},
            Max: 0,
            Mean: 0,
            Min: 0,
            Missing: 0,
            StdDev: 0,
            Sum: 0,
            SumOfSquares: 0,
          },
        },
      },
    },
    required: ['list', 'facets', 'paging', 'stats'],
    title: 'Userorderslist',
  })
  .openapi('Userorderslist')

const ReasonParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'Reason for requesting unmasked data. Relevant only for PII platform version.',
      example: 'data-validation',
      in: 'query',
      name: 'reason',
      required: false,
      schema: { example: 'data-validation', type: 'string' },
      style: 'form',
    },
    example: 'data-validation',
  })

const AppKeySecurityScheme = { in: 'header', name: 'X-VTEX-API-AppKey', type: 'apiKey' }

const AppTokenSecurityScheme = { in: 'header', name: 'X-VTEX-API-AppToken', type: 'apiKey' }

export const getApiCheckoutPvtConfigurationWindowToChangeSellerRoute = createRoute({
  method: 'get',
  path: '/api/checkout/pvt/configuration/window-to-change-seller',
  tags: ['Change seller'],
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
  responses: {
    200: {
      description: 'OK',
      content: {
        'text/plain': {
          schema: z.int().openapi({ description: 'Window to change seller measured in days.' }),
          examples: { response: { value: 2 } },
        },
      },
    },
  },
})

export const postApiCheckoutPvtConfigurationWindowToChangeSellerRoute = createRoute({
  method: 'post',
  path: '/api/checkout/pvt/configuration/window-to-change-seller',
  tags: ['Change seller'],
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
      content: {
        'application/json': {
          schema: z
            .object({
              waitingTime: z
                .int()
                .openapi({
                  description:
                    'Number of days after order cancelation by a seller, during which another seller may be assigned to fulfill the order.',
                }),
            })
            .openapi({ required: ['waitingTime'] }),
          example: { waitingTime: 4 },
        },
      },
      required: true,
    },
  },
  responses: { 201: { description: 'Created', headers: z.object({}) } },
})

export const getApiOmsPvtAdminReportsCompletedRoute = createRoute({
  method: 'get',
  path: '/api/oms/pvt/admin/reports/completed',
  tags: ['Export order report'],
  summary: "Export order report with status 'Completed'",
  description:
    'Retrieves a list of all order reports that are `completed`, by `accountName`. Be aware that the scope of the export log is per user. \r\n\r\n> This endpoint is for VTEX internal use, and it is not meant to be used by clients.',
  operationId: 'StatusCompleted',
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
        'application/json; charset=utf-8': {
          schema: z.array(ExportCompletedResponseSchema),
          example: [
            {
              cancelled: false,
              completedDate: '2017-05-10T18:31:35.5530698+00:00',
              dateOfRequest: '2017-05-10T18:31:28.3984674+00:00',
              email: 'renan.servare@vtex.com.br',
              filter: 'generateCsv=true&orderBy=creationDate%2cdesc&page=1&utc=-0300',
              hostUri: 'http://accountname.vtexcommercestable.com.br/',
              id: 'a83d6d30-a52a-4706-9fc9-e2e7c1841acb',
              instanceId: 'i-0b359c34e40c3f281',
              lasUpdateTime: '2017-05-10T18:31:35.5250685+00:00',
              linkToDownload:
                'http://accountname.vtexcommercestable.com.br/api/oms/pub/636300378883984674/report?AWSAccessKeyId=ASIAJM7A43QHIYFHFSMQ&Expires=1494527496&x-amz-security-token=FQoDYXdzEHsaDBnJIX7Yxf7j6gEuTCK3A3AS4wJiFF97%2FpIGtq4rpqA2F7CqU0g%2BIhPPdD%2FaqnF9TKxX1%2BSj4JloO%2F54XdgL3VZyb%2B76Z0FrOZAYnGZvuE%2FMB4KUz1d4NKFOh0sFt%2FxzYFrBOLvMO%2F%2FW3LMG%2FuyiHecP9pYceVysntj41jJeRcLG%2BRBN4Z69TQBQrUp%2FOS%2FOaJFssVvF6olk5WjK9gYxBDpUUiOQvyAIdhmRKiMfhfOSdT%2FgrPG06YGJE18lm4kIThxH3aqE1k2pl3gVd250QRFzGrFRCPgylnlm5C9xEFf2Mr794Dc2I2ki5GCR8Vhxwgi3rlCvI4G8R1PIXcwG7YfFyzb%2BgKUYCsAcvUschtbpWm5ahXZsJG2FioeFIzHbd3xQ5I2yjV9lrKyUiQHjxsyX7Z0dd7YkKkclmOR85wrhgxHLLpOrM021lYNbm1K9a%2FfPjIOxhMt3a1dgkwNaIJmgxnY3n%2FDgNSJsDpYEpckx9tNqbcuCEJYLC54fmbOH%2B3Nip%2Fks3X%2FBmvzo2iB79Y5cucIEkl9wFeKr9kqw5t5u4ciFf%2F4opHnT85eHZm3POEYsD9XxcIHUrlYyLbMawaFwBgklp6oo7LDNyAU%3D&Signature=%2BFGUxl8zViIqttg5f5y%2F9tbAQhw%3D',
              publishId: '263fd533551e445caceec991385ef610',
              query:
                '{"Queries":[{"Quoted":true,"FieldName":"InstanceId","FieldValue":"263FD533551E445CACEEC991385EF610"},{"Quoted":true,"FieldName":"OrderIsComplete","FieldValue":"True"}],"Oper":"AND"}',
              rowNumber: 8,
              rowsProcessed: 8,
              startDate: '2017-05-10T18:31:27.4043359+00:00',
              utcTime: '-0300',
            },
          ],
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
          .openapi({ example: 'Wed, 10 May 2017 18:32:41 GMT', param: { required: false } }),
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
          .openapi({ example: 'v1.36.4', param: { required: false } }),
        'X-Track': z
          .string()
          .exactOptional()
          .openapi({ example: 'stable', param: { required: false } }),
        'X-VTEX-Janus-Router-Backend-App': z
          .string()
          .exactOptional()
          .openapi({ example: 'omsapi-v1.5.161', param: { required: false } }),
      }),
    },
  },
})

export const getApiOmsPvtAdminReportsInprogressRoute = createRoute({
  method: 'get',
  path: '/api/oms/pvt/admin/reports/inprogress',
  tags: ['Export order report'],
  summary: "Export order report with status 'In Progress'",
  description:
    'Retrieves a list of all order reports that are `in progress`, by `accountName`. Be aware that the scope of the export log is per user. \r\n\r\n> This endpoint is for VTEX internal use, and it is not meant to be used by clients.',
  operationId: 'StatusInProgress',
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
        'application/json; charset=utf-8': {
          schema: z.array(ExportInProgressResponseSchema),
          example: [
            {
              cancelled: false,
              completedDate: '2022-05-10T16:21:30.7714518+00:00',
              dateOfRequest: '2017-05-10T16:21:31.7452567+00:00',
              email: 'renan.servare@vtex.com.br',
              filter: 'generateCsv=true&orderBy=creationDate%2cdesc&page=1&utc=-0300',
              hostUri: 'http://accountname.vtexcommercestable.com.br/',
              id: 'b7bdafba-2456-4aba-9bc0-1d598df685bd',
              instanceId: 'i-0a3b7a89f1fe13ba9',
              lasUpdateTime: '2017-05-10T16:21:30.7714518+00:00',
              linkToDownload: 'download.link.url.com',
              publishId: '263fd533551e445caceec991385ef610',
              query:
                '{"Queries":[{"Quoted":true,"FieldName":"InstanceId","FieldValue":"263FD533551E445CACEEC991385EF610"},{"Quoted":true,"FieldName":"OrderIsComplete","FieldValue":"True"}],"Oper":"AND"}',
              rowNumber: 0,
              rowsProcessed: 0,
              startDate: '2017-05-10T16:21:30.7714518+00:00',
              utcTime: '-0300',
            },
          ],
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
        'Content-Length': z
          .string()
          .exactOptional()
          .openapi({ example: '780', param: { required: false } }),
        Date: z
          .string()
          .exactOptional()
          .openapi({ example: 'Wed, 10 May 2017 16:21:34 GMT', param: { required: false } }),
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
        'X-CDNIgnore': z
          .string()
          .exactOptional()
          .openapi({ example: '1', param: { required: false } }),
        'X-Powered-by-VTEX-Janus-Edge': z
          .string()
          .exactOptional()
          .openapi({ example: 'v1.36.4', param: { required: false } }),
        'X-Track': z
          .string()
          .exactOptional()
          .openapi({ example: 'stable', param: { required: false } }),
        'X-VTEX-Janus-Router-Backend-App': z
          .string()
          .exactOptional()
          .openapi({ example: 'omsapi-v1.5.161', param: { required: false } }),
      }),
    },
  },
})

export const getApiOmsPvtFeedOrdersStatusRoute = createRoute({
  method: 'get',
  path: '/api/oms/pvt/feed/orders/status',
  tags: ['Feed v2 (deprecated)'],
  summary: 'Get feed order status',
  description: 'Get feed order status (deprecated)',
  operationId: 'Getfeedorderstatus',
  request: {
    query: z.object({
      maxLot: z
        .string()
        .default('{{maxLot}}')
        .openapi({
          param: {
            description: '',
            explode: true,
            in: 'query',
            name: 'maxLot',
            required: true,
            schema: { default: '{{maxLot}}', type: 'string' },
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
            description: 'Type of the content being sent',
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

export const getApiOmsPvtOrdersRoute = createRoute({
  method: 'get',
  path: '/api/oms/pvt/orders',
  tags: ['Orders'],
  summary: 'List orders',
  description:
    "Retrieves a list of orders according to the filters described below. \r\n\r\nThe limit of information retrieval is 30 pages, the default number of orders per page is 15 and it is possible to configure it up to 100 using the  `per_page` parameter. \r\n\r\n Be aware that as of October 3rd, 2018, this endpoint will not return the `items` property. \n\r\n\r> This should **not** be used for integrations. Use the [orders Feed or hook](https://developers.vtex.com/docs/guides/orders-feed) for this purpose.\n\r\n\rThis endpoint returns only orders that already have been indexed, which takes approximately four minutes. Because of this, the data retrieved may present inconsistencies. To get live up-to-date information and [build order integrations](https://developers.vtex.com/vtex-rest-api/docs/erp-integration-set-up-order-integration) use the [orders Feed or hook](https://developers.vtex.com/docs/guides/orders-feed).\n\r\n> 📘 Onboarding guide \r\n>\r\n> Check the new [Orders onboarding guide](https://developers.vtex.com/vtex-rest-api/docs/orders-overview). We created this guide to improve the onboarding experience for developers at VTEX. It assembles all documentation on our Developer Portal about Orders and is organized by focusing on the developer's journey.\r\n\r\n",
  operationId: 'ListOrders',
  request: {
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
    query: z.object({
      orderBy: z
        .string()
        .default('v502556llux-01,asc')
        .exactOptional()
        .openapi({
          param: {
            description:
              'You can retrieve orders lists filtering by an `OrderField` combined with an `OrderType`. To do so, you have to concatenate them: `orderBy={{OrderField}},{{OrderType}}`. \r\n- `OrderField` values accepted: `creationDate`, `orderId`, `items`, `totalValue` and `origin`. \r\n- `OrderType` values accepted: `asc` and `desc`.',
            explode: true,
            in: 'query',
            name: 'orderBy',
            required: false,
            schema: { default: 'v502556llux-01,asc', type: 'string' },
            style: 'form',
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
          z.int32(),
        )
        .default(10)
        .exactOptional()
        .openapi({
          param: {
            description:
              'Define the number of pages you wish to retrieve, restricted to the limit of 30 pages.',
            explode: true,
            in: 'query',
            name: 'page',
            required: false,
            schema: { default: 10, format: 'int32', type: 'integer' },
            style: 'form',
          },
        }),
      per_page: z
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
        .exactOptional()
        .openapi({
          param: {
            description:
              'Quantity of orders for each page, the default value is 15 and it goes up to 100 orders per page. Be aware that the limit of retrieval ofthis endpoint is 30 pages.',
            explode: true,
            in: 'query',
            name: 'per_page',
            required: false,
            schema: { default: 15, format: 'int32', type: 'integer' },
            style: 'form',
          },
        }),
      f_creationDate: z
        .string()
        .default('creationDate:[2016-01-01T02:00:00.000Z TO 2021-01-01T01:59:59.999Z]')
        .openapi({
          param: {
            description:
              'Concatened value sufix `{{creationDate}}` and range date in Timestamp format. To use the `utc` query parameter, to filter orders by time zone, you must also fill the `f_creationDate` date parameter.',
            explode: true,
            in: 'query',
            name: 'f_creationDate',
            required: true,
            schema: {
              default: 'creationDate:[2016-01-01T02:00:00.000Z TO 2021-01-01T01:59:59.999Z]',
              type: 'string',
            },
            style: 'form',
          },
        }),
      f_hasInputInvoice: z
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
        }),
      q: z
        .string()
        .default(
          '- OrderID: v212333lux-02 \r\n- Client email: taylor@email.com \r\n- Client document: 21133355524 \r\n- Client name: Taylor',
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'This parameter filters using Fulltext and accepts the values below. Be aware that the `+` caracter is not allowed in Fulltext Search. \r\n- Order Id \r\n- Client email \r\n- Client document \r\n- Client name',
            explode: true,
            in: 'query',
            name: 'q',
            required: false,
            schema: {
              default:
                '- OrderID: v212333lux-02 \r\n- Client email: taylor@email.com \r\n- Client document: 21133355524 \r\n- Client name: Taylor',
              type: 'string',
            },
            style: 'form',
          },
        }),
      utc: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .default(-2000)
        .exactOptional()
        .openapi({
          param: {
            description:
              "Converts orders' time zone to the Universal Time Coordinated (UTC) format and shows the amount of orders set for that UTC, up to the limit of 30 pages. For it to work properly, you have to associate it with the `f_creationDate` parameter.",
            explode: true,
            in: 'query',
            name: 'utc',
            required: false,
            schema: { default: -2000, format: 'int32', type: 'integer' },
            style: 'form',
          },
        }),
      f_shippingEstimate: z
        .string()
        .default('0.days')
        .exactOptional()
        .openapi({
          param: {
            description:
              'You can filter orders by shipping estimate time in days by concatenating the desired number of days with the sufix `.days`. For example: \r\n- Next 7 days: `7.days` \r\n- Tomorrow: `1.days` \r\n- Today: `0.days` \r\n- Late: `-1.days`',
            explode: true,
            in: 'query',
            name: 'f_shippingEstimate',
            required: false,
            schema: { default: '0.days', type: 'string' },
            style: 'form',
          },
        }),
      f_invoicedDate: z
        .string()
        .default('invoicedDate:[2022-01-01T02:00:00.000Z TO 2022-01-02T01:59:59.999Z]')
        .exactOptional()
        .openapi({
          param: {
            description:
              'You can filter orders by invoiced date by concatenating the sufix `invoicedDate:` with the range date in Timestamp format. For example: \r\n- 1 Day: `invoicedDate:[2022-01-01T02:00:00.000Z TO 2022-01-02T01:59:59.999Z]`\r\n- 1 Month: `invoicedDate:[2022-01-01T02:00:00.000Z TO 2022-02-01T01:59:59.999Z]` \r\n- 1 Year: `invoicedDate:[2022-01-01T02:00:00.000Z TO 2022-01-01T01:59:59.999Z]`',
            explode: true,
            in: 'query',
            name: 'f_invoicedDate',
            required: false,
            schema: {
              default: 'invoicedDate:[2022-01-01T02:00:00.000Z TO 2022-01-02T01:59:59.999Z]',
              type: 'string',
            },
            style: 'form',
          },
        }),
      f_authorizedDate: z
        .string()
        .default('creationDate:[2022-01-01T02:00:00.000Z TO 2022-01-02T01:59:59.999Z]')
        .exactOptional()
        .openapi({
          param: {
            description:
              'You can filter orders by creation date by concatenating the sufix `authorizedDate:` with the range date in Timestamp format. For example: \r\n- 1 Day: `authorizedDate:[2022-01-01T02:00:00.000Z TO 2022-01-02T01:59:59.999Z]`\r\n- 1 Month: `authorizedDate:[2022-01-01T02:00:00.000Z TO 2022-02-01T01:59:59.999Z]` \r\n- 1 Year: `authorizedDate:[2022-01-01T02:00:00.000Z TO 2022-01-01T01:59:59.999Z]`',
            explode: true,
            in: 'query',
            name: 'f_authorizedDate',
            required: false,
            schema: {
              default: 'creationDate:[2022-01-01T02:00:00.000Z TO 2022-01-02T01:59:59.999Z]',
              type: 'string',
            },
            style: 'form',
          },
        }),
      f_UtmSource: z
        .string()
        .default('christmas_campaign')
        .exactOptional()
        .openapi({
          param: {
            description:
              'You can filter orders by using a Universal Transverse Mercator (UTM) source.',
            explode: true,
            in: 'query',
            name: 'f_UtmSource',
            required: false,
            schema: { default: 'christmas_campaign', type: 'string' },
            style: 'form',
          },
        }),
      f_sellerNames: z
        .string()
        .default('SellerName')
        .exactOptional()
        .openapi({
          param: {
            description: "You can filter orders by using a seller's name.",
            explode: true,
            in: 'query',
            name: 'f_sellerNames',
            required: false,
            schema: { default: 'SellerName', type: 'string' },
            style: 'form',
          },
        }),
      f_callCenterOperatorName: z
        .string()
        .default('Operator%20Name')
        .exactOptional()
        .openapi({
          param: {
            description: "You can filter orders by using a Call Center Operator's identification.",
            explode: true,
            in: 'query',
            name: 'f_callCenterOperatorName',
            required: false,
            schema: { default: 'Operator%20Name', type: 'string' },
            style: 'form',
          },
        }),
      f_salesChannel: z
        .string()
        .default('Main')
        .exactOptional()
        .openapi({
          param: {
            description:
              "You can filter orders by sales channel's ([or trade policy](https://help.vtex.com/en/tutorial/how-trade-policies-work--6Xef8PZiFm40kg2STrMkMV)) name.",
            explode: true,
            in: 'query',
            name: 'f_salesChannel',
            required: false,
            schema: { default: 'Main', type: 'string' },
            style: 'form',
          },
        }),
      salesChannelId: z
        .string()
        .default('1')
        .exactOptional()
        .openapi({
          param: {
            description:
              "You can filter orders by sales channel's ([or trade policy](https://help.vtex.com/en/tutorial/how-trade-policies-work--6Xef8PZiFm40kg2STrMkMV)) ID.",
            explode: true,
            in: 'query',
            name: 'salesChannelId',
            required: false,
            schema: { default: '1', type: 'string' },
            style: 'form',
          },
        }),
      f_affiliateId: z
        .string()
        .default('WLM')
        .exactOptional()
        .openapi({
          param: {
            description: 'You can filter orders by affiliate ID.',
            explode: true,
            in: 'query',
            name: 'f_affiliateId',
            required: false,
            schema: { default: 'WLM', type: 'string' },
            style: 'form',
          },
        }),
      f_status: z
        .string()
        .default('ready-for-handling')
        .exactOptional()
        .openapi({
          param: {
            description:
              'You can filter orders by the following [order status](https://help.vtex.com/en/tutorial/order-flow-and-status--tutorials_196): \r\n- `waiting-for-sellers-confirmation` \r\n- `payment-pending` \r\n- `payment-approved` \r\n- `ready-for-handling` \r\n- `handling` \r\n- `invoiced` \r\n- `canceled`',
            explode: true,
            in: 'query',
            name: 'f_status',
            required: false,
            schema: { default: 'ready-for-handling', type: 'string' },
            style: 'form',
          },
        }),
      incompleteOrders: z
        .stringbool()
        .default(true)
        .exactOptional()
        .openapi({
          param: {
            description:
              'When set as `true`, you retrieve [incomplete orders](https://help.vtex.com/en/tutorial/understanding-incomplete-orders), when set as `false`, you retrieve orders that are not incomplete.',
            explode: true,
            in: 'query',
            name: 'incompleteOrders',
            required: false,
            schema: { default: true, type: 'boolean' },
            style: 'form',
          },
        }),
      f_paymentNames: z
        .string()
        .default('Visa')
        .exactOptional()
        .openapi({
          param: {
            description: 'You can filter orders by payment type.',
            explode: true,
            in: 'query',
            name: 'f_paymentNames',
            required: false,
            schema: { default: 'Visa', type: 'string' },
            style: 'form',
          },
        }),
      f_RnB: z
        .string()
        .default('Free+Shipping')
        .exactOptional()
        .openapi({
          param: {
            description: 'You can filter orders by rates and benefits (promotions).',
            explode: true,
            in: 'query',
            name: 'f_RnB',
            required: false,
            schema: { default: 'Free+Shipping', type: 'string' },
            style: 'form',
          },
        }),
      searchField: z
        .string()
        .default(
          "\r\n- SKU ID: `25` \r\n- Gift List ID: `11223` \r\n- Transaction ID (TID): `54546300238810034995829230012` \r\n- PCI Connector's Transaction ID (TID): `7032909234899834298423209` \r\n- Payment ID (PID): `2` \r\n- Connector's NSU: `2437281`",
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              "You can search orders by using one of the following criterias: \r\n- SKU ID - `sku_Ids&sku_Ids` \r\n- Gift List ID - `listId&listId` \r\n- Transaction ID (TID) - `tid&tid` \r\n- PCI Connector's Transaction ID (TID) - `pci_tid&pci_tid` \r\n- Payment ID (PID) - `paymentId&paymentId` \r\n- Connector's NSU - `nsu&nsu`",
            explode: true,
            in: 'query',
            name: 'searchField',
            required: false,
            schema: {
              default:
                "\r\n- SKU ID: `25` \r\n- Gift List ID: `11223` \r\n- Transaction ID (TID): `54546300238810034995829230012` \r\n- PCI Connector's Transaction ID (TID): `7032909234899834298423209` \r\n- Payment ID (PID): `2` \r\n- Connector's NSU: `2437281`",
              type: 'string',
            },
            style: 'form',
          },
        }),
      f_isInstore: z
        .stringbool()
        .default(true)
        .exactOptional()
        .openapi({
          param: {
            description:
              'When set as `true`, this parameter filters orders made via [inStore](https://help.vtex.com/en/tracks/what-is-instore--zav76TFEZlAjnyBVL5tRc), and when set as `false`, it filters orders that were not made via inStore.',
            explode: true,
            in: 'query',
            name: 'f_isInstore',
            required: false,
            schema: { default: true, type: 'boolean' },
            style: 'form',
          },
        }),
    }),
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
                orderId: '1306331686122-01',
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

export const getApiOmsPvtOrdersOrderIdRoute = createRoute({
  method: 'get',
  path: '/api/oms/pvt/orders/{orderId}',
  tags: ['Orders'],
  summary: 'Get order',
  description:
    'This endpoint retrieves order details by searching a specific order ID or sequence number.\n\r\n\r> The `View order` resource is needed to use this API request. This is included in `OMS - Full access` and `IntegrationProfile - Fulfillment Oms`, among other default roles available in the Admin. Learn more about the [License manager roles and resources](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc).\r\n\r\n> 📘 Onboarding guide \r\n>\r\n> Check the new [Orders onboarding guide](https://developers.vtex.com/vtex-rest-api/docs/orders-overview). We created this guide to improve the onboarding experience for developers at VTEX. It assembles all documentation on our Developer Portal about Orders and is organized by focusing on the developer\'s journey.\r\n\r\n## Response body example\r\n\r\n```json\r\n{\r\n    "orderId": "1244730712239-01",\r\n    "sequence": "502790",\r\n    "marketplaceOrderId": "",\r\n    "marketplaceServicesEndpoint": null,\r\n    "sellerOrderId": "SLR-1244730712239-01",\r\n    "origin": "Marketplace",\r\n    "affiliateId": "",\r\n    "salesChannel": "1",\r\n    "merchantName": null,\r\n    "status": "payment-approved",\r\n    "statusDescription": "Pagamento Aprovado",\r\n    "value": 2012,\r\n    "creationDate": "2022-07-06T09:11:51.4597231+00:00",\r\n    "lastChange": "2022-07-06T09:12:00.2849749+00:00",\r\n    "orderGroup": "1244730712239",\r\n    "totals": [\r\n        {\r\n            "id": "Items",\r\n            "name": "Total dos Itens",\r\n            "value": 2265\r\n        },\r\n        {\r\n            "id": "Discounts",\r\n            "name": "Total dos Descontos",\r\n            "value": -453\r\n        },\r\n        {\r\n            "id": "Shipping",\r\n            "name": "Total do Frete",\r\n            "value": 200\r\n        },\r\n        {\r\n            "id": "Tax",\r\n            "name": "Total da Taxa",\r\n            "value": 0\r\n        }\r\n    ],\r\n    "items": [\r\n        {\r\n            "uniqueId": "A14AD652AC5D40FBB0137D3ADA3CB800",\r\n            "id": "12",\r\n            "productId": "8",\r\n            "ean": null,\r\n            "lockId": null,\r\n            "itemAttachment": {\r\n                "content": {},\r\n                "name": null\r\n            },\r\n            "attachments": [],\r\n            "quantity": 1,\r\n            "seller": "ppxpssp",\r\n            "name": "Camiseta P Azul",\r\n            "refId": "COP01_P-A",\r\n            "price": 2265,\r\n            "listPrice": 2265,\r\n            "manualPrice": null,\r\n            "priceTags": [\r\n                {\r\n                    "name": "discount@price-d0231eb3-e9a4-47b2-9c74-bc346df11ce4#e9bb430d-30b3-4461-a86e-f66f35b2915d",\r\n                    "value": -453,\r\n                    "isPercentual": false,\r\n                    "identifier": "d0231eb3-e9a4-47b2-9c74-bc346df11ce4",\r\n                    "rawValue": -4.53,\r\n                    "rate": null,\r\n                    "jurisCode": null,\r\n                    "jurisType": null,\r\n                    "jurisName": null\r\n                }\r\n            ],\r\n            "imageUrl": "https://ppxps.vteximg.com.br/arquivos/ids/155407-55-55/EE803C74-37A5-4804-B1A6-9F12D22EA505.png?v=637559269453730000",\r\n            "detailUrl": "/camiseta/p",\r\n            "components": [],\r\n            "bundleItems": [],\r\n            "params": [],\r\n            "offerings": [],\r\n            "sellerSku": "12",\r\n            "priceValidUntil": "2023-07-06T09:11:04.0000000+00:00",\r\n            "commission": 0,\r\n            "tax": 0,\r\n            "preSaleDate": null,\r\n            "additionalInfo": {\r\n                "brandName": "Marca TOP",\r\n                "brandId": "2000001",\r\n                "categoriesIds": "/7/",\r\n                "categories": [\r\n                    {\r\n                        "id": 7,\r\n                        "name": "Roupas"\r\n                    }\r\n                ],\r\n                "productClusterId": "",\r\n                "commercialConditionId": "1",\r\n                "dimension": {\r\n                    "cubicweight": 1.0000,\r\n                    "height": 6.0000,\r\n                    "length": 10.0000,\r\n                    "weight": 4.0000,\r\n                    "width": 8.0000\r\n                },\r\n                "offeringInfo": null,\r\n                "offeringType": null,\r\n                "offeringTypeId": null\r\n            },\r\n            "measurementUnit": "un",\r\n            "unitMultiplier": 1.0000,\r\n            "sellingPrice": 1812,\r\n            "isGift": false,\r\n            "shippingPrice": null,\r\n            "rewardValue": 0,\r\n            "freightCommission": 0,\r\n            "priceDefinition": {\r\n                "sellingPrices": [\r\n                    {\r\n                        "value": 1812,\r\n                        "quantity": 1\r\n                    }\r\n                ],\r\n                "calculatedSellingPrice": 1812,\r\n                "total": 1812\r\n            },\r\n            "taxCode": "1122",\r\n            "parentItemIndex": null,\r\n            "parentAssemblyBinding": null,\r\n            "callCenterOperator": null,\r\n            "serialNumbers": null,\r\n            "assemblies": [],\r\n            "costPrice": null\r\n        }\r\n    ],\r\n    "marketplaceItems": [],\r\n    "clientProfileData": {\r\n        "id": "clientProfileData",\r\n        "email": "0bf94cbf23ff410aaaf7c707dd8a808c@ct.vtex.com.br",\r\n        "firstName": "Paulo",\r\n        "lastName": "Filho",\r\n        "documentType": "cpf",\r\n        "document": "11156703794",\r\n        "phone": "+5521971126360",\r\n        "corporateName": null,\r\n        "tradeName": null,\r\n        "corporateDocument": null,\r\n        "stateInscription": null,\r\n        "corporatePhone": null,\r\n        "isCorporate": false,\r\n        "userProfileId": "ca0695a8-df34-4076-8663-725041930c75",\r\n        "customerClass": null\r\n    },\r\n    "giftRegistryData": null,\r\n    "marketingData": {\r\n        "id": "marketingData",\r\n        "utmSource": null,\r\n        "utmPartner": null,\r\n        "utmMedium": null,\r\n        "utmCampaign": null,\r\n        "coupon": null,\r\n        "utmiCampaign": null,\r\n        "utmipage": null,\r\n        "utmiPart": null,\r\n        "marketingTags": [\r\n            "vtex-subscription"\r\n        ]\r\n    },\r\n    "ratesAndBenefitsData": {\r\n        "id": "ratesAndBenefitsData",\r\n        "rateAndBenefitsIdentifiers": [\r\n            {\r\n                "description": "Desconto de 20% no pedido para assinatura",\r\n                "featured": true,\r\n                "id": "d0231eb3-e9a4-47b2-9c74-bc346df11ce4",\r\n                "name": "Desconto 20% assinante",\r\n                "matchedParameters": {},\r\n                "additionalInfo": null\r\n            }\r\n        ]\r\n    },\r\n    "shippingData": {\r\n        "id": "shippingData",\r\n        "address": {\r\n            "addressType": "residential",\r\n            "receiverName": "Paulo Filho",\r\n            "addressId": "1651158093975",\r\n            "postalCode": "21341-270",\r\n            "city": "Rio de Janeiro",\r\n            "state": "RJ",\r\n            "country": "BRA",\r\n            "street": "Rua Pinto Teles",\r\n            "number": "1",\r\n            "neighborhood": "Praça Seca",\r\n            "complement": null,\r\n            "reference": null,\r\n            "geoCoordinates": [\r\n                -43.350608825683594,\r\n                -22.886520385742188\r\n            ]\r\n        },\r\n        "logisticsInfo": [\r\n            {\r\n                "itemIndex": 0,\r\n                "selectedSla": "Normal",\r\n                "lockTTL": "12d",\r\n                "price": 200,\r\n                "listPrice": 200,\r\n                "sellingPrice": 200,\r\n                "deliveryWindow": null,\r\n                "deliveryCompany": "Transportadora",\r\n                "shippingEstimate": "2bd",\r\n                "shippingEstimateDate": "2022-07-08T09:11:57.8421126+00:00",\r\n                "slas": [\r\n                    {\r\n                        "id": "Normal",\r\n                        "name": "Normal",\r\n                        "shippingEstimate": "2bd",\r\n                        "deliveryWindow": null,\r\n                        "price": 200,\r\n                        "deliveryChannel": "delivery",\r\n                        "pickupStoreInfo": {\r\n                            "additionalInfo": null,\r\n                            "address": null,\r\n                            "dockId": null,\r\n                            "friendlyName": null,\r\n                            "isPickupStore": false\r\n                        },\r\n                        "polygonName": "",\r\n                        "lockTTL": "12d",\r\n                        "pickupPointId": null,\r\n                        "transitTime": "2bd"\r\n                    }\r\n                ],\r\n                "shipsTo": [\r\n                    "BRA"\r\n                ],\r\n                "deliveryIds": [\r\n                    {\r\n                        "courierId": "1",\r\n                        "courierName": "Transportadora",\r\n                        "dockId": "169fe66",\r\n                        "quantity": 1,\r\n                        "warehouseId": "166cb0c",\r\n                        "accountCarrierName": null\r\n                    }\r\n                ],\r\n                "deliveryChannel": "delivery",\r\n                "pickupStoreInfo": {\r\n                    "additionalInfo": null,\r\n                    "address": null,\r\n                    "dockId": null,\r\n                    "friendlyName": null,\r\n                    "isPickupStore": false\r\n                },\r\n                "addressId": "1651158093975",\r\n                "polygonName": "",\r\n                "pickupPointId": null,\r\n                "transitTime": "2bd"\r\n            }\r\n        ],\r\n        "trackingHints": null,\r\n        "selectedAddresses": [\r\n            {\r\n                "addressId": "1651158093975",\r\n                "addressType": "residential",\r\n                "receiverName": "Paulo Filho",\r\n                "street": "Rua Pinto Teles",\r\n                "number": "1",\r\n                "complement": null,\r\n                "neighborhood": "Praça Seca",\r\n                "postalCode": "21341-270",\r\n                "city": "Rio de Janeiro",\r\n                "state": "RJ",\r\n                "country": "BRA",\r\n                "reference": null,\r\n                "geoCoordinates": [\r\n                    -43.350608825683594,\r\n                    -22.886520385742188\r\n                ]\r\n            }\r\n        ]\r\n    },\r\n    "paymentData": {\r\n        "giftCards": [],\r\n        "transactions": [\r\n            {\r\n                "isActive": true,\r\n                "transactionId": "A5BF0F884F314F788F4778B464EE1648",\r\n                "merchantName": "PPXPS",\r\n                "payments": [\r\n                    {\r\n                        "id": "06D8D76D4BD549EF9CC209D969ACBA84",\r\n                        "paymentSystem": "47",\r\n                        "paymentSystemName": "Cash",\r\n                        "value": 2012,\r\n                        "installments": 1,\r\n                        "referenceValue": 2012,\r\n                        "cardHolder": null,\r\n                        "cardNumber": null,\r\n                        "firstDigits": null,\r\n                        "lastDigits": null,\r\n                        "cvv2": null,\r\n                        "expireMonth": null,\r\n                        "expireYear": null,\r\n                        "url": null,\r\n                        "giftCardId": null,\r\n                        "giftCardName": null,\r\n                        "giftCardCaption": null,\r\n                        "redemptionCode": null,\r\n                        "group": "cash",\r\n                        "tid": null,\r\n                        "dueDate": null,\r\n                        "connectorResponses": {},\r\n                        "giftCardProvider": null,\r\n                        "giftCardAsDiscount": null,\r\n                        "koinUrl": null,\r\n                        "accountId": null,\r\n                        "parentAccountId": null,\r\n                        "bankIssuedInvoiceIdentificationNumber": null,\r\n                        "bankIssuedInvoiceIdentificationNumberFormatted": null,\r\n                        "bankIssuedInvoiceBarCodeNumber": null,\r\n                        "bankIssuedInvoiceBarCodeType": null,\r\n                        "billingAddress": null\r\n                    }\r\n                ]\r\n            }\r\n        ]\r\n    },\r\n    "packageAttachment": {\r\n        "packages": []\r\n    },\r\n    "sellers": [\r\n        {\r\n            "id": "ppxpssp",\r\n            "name": "ppxpssp",\r\n            "logo": "",\r\n            "fulfillmentEndpoint": "http://fulfillment.vtexcommerce.com.br/api/fulfillment?an=ppxpssp&affiliateId=SLR&sc=1"\r\n        }\r\n    ],\r\n    "callCenterOperatorData": null,\r\n    "followUpEmail": "0a902f64ba1443c3b26ab5cb0b2aad9e@ct.vtex.com.br",\r\n    "lastMessage": null,\r\n    "hostname": "ppxps",\r\n    "invoiceData": null,\r\n    "changesAttachment": null,\r\n    "openTextField": {\r\n        "value": "Order Created By VTEX Subscription System"\r\n    },\r\n    "roundingError": 0,\r\n    "orderFormId": "3d59650b4e9a447d80ecfac4830926d9",\r\n    "commercialConditionData": null,\r\n    "isCompleted": true,\r\n    "customData": null,\r\n    "storePreferencesData": {\r\n        "countryCode": "BRA",\r\n        "currencyCode": "BRL",\r\n        "currencyFormatInfo": {\r\n            "CurrencyDecimalDigits": 2,\r\n            "CurrencyDecimalSeparator": ",",\r\n            "CurrencyGroupSeparator": ".",\r\n            "CurrencyGroupSize": 3,\r\n            "StartsWithCurrencySymbol": true\r\n        },\r\n        "currencyLocale": 1046,\r\n        "currencySymbol": "R$",\r\n        "timeZone": "E. South America Standard Time"\r\n    },\r\n    "allowCancellation": true,\r\n    "allowEdition": false,\r\n    "isCheckedIn": false,\r\n    "marketplace": null,\r\n    "authorizedDate": "2022-07-06T09:11:56.0006230+00:00",\r\n    "invoicedDate": null,\r\n    "cancelReason": null,\r\n    "itemMetadata": {\r\n        "Items": [\r\n            {\r\n                "Id": "12",\r\n                "Seller": "1",\r\n                "Name": "Camiseta P Azul",\r\n                "SkuName": "P Azul",\r\n                "ProductId": "8",\r\n                "RefId": "COP01_P-A",\r\n                "Ean": null,\r\n                "ImageUrl": "http://ppxps.vteximg.com.br/arquivos/ids/155407-55-55/EE803C74-37A5-4804-B1A6-9F12D22EA505.png?v=637559269453730000",\r\n                "DetailUrl": "/camiseta/p",\r\n                "AssemblyOptions": []\r\n            }\r\n        ]\r\n    },\r\n    "subscriptionData": {\r\n        "SubscriptionGroupId": "C191822AF072C7508F9BBBC655FE8E60",\r\n        "Subscriptions": [\r\n            {\r\n                "ExecutionCount": 274,\r\n                "PriceAtSubscriptionDate": 2265.0,\r\n                "ItemIndex": 0,\r\n                "Plan": {\r\n                    "type": "RECURRING_PAYMENT",\r\n                    "frequency": {\r\n                        "periodicity": "DAILY",\r\n                        "interval": 1\r\n                    },\r\n                    "validity": {\r\n                        "begin": "2021-10-05T00:00:00.0000000+00:00",\r\n                        "end": null\r\n                    }\r\n                }\r\n            }\r\n        ]\r\n    },\r\n    "taxData": null,\r\n    "checkedInPickupPointId": null,\r\n    "cancellationData": null\r\n}\r\n```',
  operationId: 'GetOrder',
  request: {
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
      orderId: z
        .string()
        .openapi({
          param: {
            description:
              'Order ID is a unique code that identifies an order. Instead of using `orderId`, you can also make the request using the sequence, a six-digit string that follows the order ID. For example, in order 1268540501456-01 (501456), the sequence is 501456. To use this parameter, replace the value between `{ }` keys in `seq{sequence-number}` with the sequence. For example: `seq501456`.',
            example: '1172452900788-01 or seq501456',
            in: 'path',
            name: 'orderId',
            required: true,
            schema: { example: '1172452900788-01 or seq501456', type: 'string' },
            style: 'simple',
          },
          example: '1172452900788-01 or seq501456',
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
              affiliateId: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Three letter code identifying the marketplace where the order was placed.',
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
                .nullable()
                .exactOptional()
                .openapi({
                  description: 'User that approved the order, in case of manual approval.',
                }),
              authorizedDate: z
                .string()
                .exactOptional()
                .openapi({ description: 'Date in which the order was authorized in UTC.' }),
              callCenterOperatorData: z.string().nullable().exactOptional(),
              cancelReason: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({ description: 'Reason for cancelation.' }),
              cancelledBy: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({ description: 'User that canceled the order.' }),
              changesAttachment: ChangesAttachmentSchema.exactOptional(),
              clientProfileData: ClientProfileDataSchema.exactOptional(),
              commercialConditionData: z.string().nullable().exactOptional(),
              creationDate: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({ description: 'Creation date.' }),
              customData: z.string().nullable().exactOptional(),
              emailTracked: z.string().exactOptional().openapi({ description: 'Email tracked.' }),
              followUpEmail: z.string().exactOptional(),
              giftRegistryData: z.string().nullable().exactOptional(),
              hostname: z.string().exactOptional(),
              invoiceData: z
                .looseObject({})
                .nullable()
                .exactOptional()
                .openapi({ description: "Information pertinent to the order's invoice." }),
              invoicedDate: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({ description: 'Date in which the order was invoiced in UTC.' }),
              isCheckedIn: z
                .boolean()
                .exactOptional()
                .openapi({ description: 'Indicates whether client is checked in.' }),
              isCompleted: z.boolean().exactOptional(),
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
                            .object({
                              cubicweight: z
                                .number()
                                .exactOptional()
                                .openapi({ description: "The item's cubic weight." }),
                              height: z
                                .number()
                                .exactOptional()
                                .openapi({ description: "The item's height." }),
                              length: z
                                .number()
                                .exactOptional()
                                .openapi({ description: "The item's length." }),
                              weight: z
                                .number()
                                .exactOptional()
                                .openapi({ description: "The item's weight." }),
                              width: z
                                .number()
                                .exactOptional()
                                .openapi({ description: "The item's width." }),
                            })
                            .exactOptional()
                            .openapi({ description: 'Dimension of the item.', required: [] }),
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
                        .nullable()
                        .exactOptional()
                        .openapi({ description: 'European Article Number.' }),
                      id: z.string().exactOptional().openapi({ description: 'ID.' }),
                      imageUrl: z.string().exactOptional().openapi({ description: 'Image URL.' }),
                      isGift: z
                        .boolean()
                        .nullable()
                        .exactOptional()
                        .openapi({ description: 'Indicates whether item is a gift.' }),
                      listPrice: z
                        .int()
                        .nullable()
                        .exactOptional()
                        .openapi({ description: 'List price in cents.' }),
                      manualPrice: z
                        .int()
                        .nullable()
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
                        .nullable()
                        .exactOptional()
                        .openapi({ description: 'Price in cents.' }),
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
                        .nullable()
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
                        .nullable()
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
                        .nullable()
                        .exactOptional()
                        .openapi({
                          description:
                            'Selling price in cents. Note that this field may be subject to rounding discrepancies. We recommend retrieving data from the `priceDefinition` data structure instead.',
                        }),
                      skuName: z.string().exactOptional().openapi({ description: 'SKU name.' }),
                      tax: z
                        .int()
                        .nullable()
                        .exactOptional()
                        .openapi({ description: 'Tax value in cents.' }),
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
                .nullable()
                .exactOptional()
                .openapi({ description: 'Date of last change.' }),
              lastMessage: z.string().nullable().exactOptional(),
              marketingData: z.string().nullable().exactOptional(),
              marketplace: MarketplaceSchema.exactOptional(),
              marketplaceItems: z
                .array(z.string())
                .exactOptional()
                .openapi({ description: 'Marketplace items.' }),
              marketplaceOrderId: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({ description: 'ID of the order in the marketplace.' }),
              marketplaceServicesEndpoint: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({ description: 'Marketplace endpoint for post purchase communication.' }),
              merchantName: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({ description: 'Merchant name.' }),
              openTextField: z.string().nullable().exactOptional(),
              orderFormId: z.string().exactOptional(),
              orderGroup: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({ description: 'Order group.' }),
              orderId: z.string().exactOptional().openapi({ description: 'Order ID.' }),
              origin: z.string().nullable().exactOptional().openapi({ description: 'Origin.' }),
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
                          courier: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description:
                                'The name of the carrier responsible for delivering the order.',
                            }),
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
                            .openapi({ description: 'Number that identifies the invoice.' }),
                          invoiceUrl: z
                            .string()
                            .nullable()
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
                                    .openapi({ description: 'Description.' }),
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
                                    .openapi({ description: 'Price in cents.' }),
                                  quantity: z
                                    .int()
                                    .exactOptional()
                                    .openapi({ description: 'Quantity.' }),
                                  unitMultiplier: z
                                    .number()
                                    .exactOptional()
                                    .openapi({ description: 'Unit multiplier.' }),
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
                            .openapi({
                              description:
                                'The number code that identifies the order tracking. *This field should only be used when sending the **tracking** information. When the request is used for sending the invoice, this field should be left empty (`""`).*',
                            }),
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
              roundingError: z.int32().exactOptional(),
              salesChannel: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({ description: 'Sales channel.' }),
              sellerOrderId: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({ description: 'Seller order ID.' }),
              sellers: z.array(SellerSchema).exactOptional().openapi({ description: '' }),
              sequence: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({ description: 'Sequence number.' }),
              shippingData: ShippingDataSchema.exactOptional(),
              status: z
                .string()
                .exactOptional()
                .openapi({ description: 'Status in the order workflow.' }),
              statusDescription: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    '`Deprecated`. Status description which is displayed on the Admin panel.',
                }),
              storePreferencesData: StorePreferencesDataSchema.exactOptional(),
              totals: z
                .array(
                  z
                    .object({
                      id: z.string().exactOptional().openapi({ description: "Order's total ID." }),
                      name: z
                        .string()
                        .exactOptional()
                        .openapi({ description: "Order's total name." }),
                      value: z
                        .int32()
                        .exactOptional()
                        .openapi({ description: "Order's total value." }),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional()
                .openapi({ description: "Information on each of the order's totals." }),
              value: z
                .int32()
                .nullable()
                .exactOptional()
                .openapi({ description: 'Value in cents.' }),
            })
            .openapi({
              example: {
                affiliateId: '',
                allowCancellation: false,
                allowEdition: false,
                approvedBy: "Person's name",
                authorizedDate: '2019-01-28T20:33:04+00:00',
                callCenterOperatorData: null,
                cancelReason: 'Explanation for cancellation',
                cancelledBy: "Person's name",
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
                    assemblies: [],
                    attachmentOfferings: [
                      {
                        name: 'vtex.subscription.weekly',
                        required: false,
                        schema: {
                          'vtex.subscription.key.frequency': {
                            Domain: [' 1 week', ' 2 week', ' 3 week', ' 4 week'],
                            MaximumNumberOfCharacters: 7,
                          },
                        },
                      },
                    ],
                    attachments: [],
                    bundleItems: [],
                    callCenterOperator: 'callCenterOp5473869',
                    commission: 0,
                    components: [],
                    costPrice: 52,
                    detailUrl: '/bay-max-9429485/p',
                    ean: '21394871239',
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
                    priceDefinitions: {
                      calculatedSellingPrice: 99,
                      sellingPrices: [{ quantity: 1, value: 99 }],
                      total: 99,
                    },
                    priceTags: [],
                    priceValidUntil: null,
                    productId: '9429485',
                    quantity: 1,
                    refId: 'BIGHEROBML',
                    rewardValue: 0,
                    seller: '1',
                    sellerSku: '1234568358',
                    sellingPrice: 3290,
                    serialNumbers: '3',
                    shippingPrice: null,
                    tax: 0,
                    taxCode: null,
                    uniqueId: '87F0945396994B349158C7D9C9941442',
                    unitMultiplier: 1,
                  },
                ],
                lastChange: '2019-02-06T20:46:11.7010747+00:00',
                lastMessage: null,
                marketingData: 'marketing data',
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
                          accountId: '5BC5C6B417FE432AB971B1D399F190C9',
                          bankIssuedInvoiceBarCodeNumber:
                            '325349573975945245345439573421443986734065',
                          bankIssuedInvoiceBarCodeType: 'i25',
                          bankIssuedInvoiceIdentificationNumber:
                            '23797770100000019003099260100022107500729050',
                          bankIssuedInvoiceIdentificationNumberFormatted:
                            '32534.95739 75945.24534 54395.734214 5',
                          billingAddress: {},
                          cardHolder: null,
                          cardNumber: null,
                          connectorResponses: {
                            Message: 'logMessage',
                            ReturnCode: '200',
                            Tid: '94857956',
                            authId: '857956',
                          },
                          cvv2: null,
                          dueDate: '2019-02-02',
                          expireMonth: null,
                          expireYear: null,
                          firstDigits: null,
                          giftCardAsDiscount: false,
                          giftCardCaption: null,
                          giftCardId: null,
                          giftCardName: null,
                          giftCardProvider: 'presentCard',
                          group: 'bankInvoice',
                          id: 'D3DEECAB3C6C4B9EAF8EF4C1FE062FF3',
                          installments: 1,
                          koinUrl: 'koinURL',
                          lastDigits: null,
                          parentAccountId: '5BC5C6B417FE432AB971B1D399F190C9',
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
                sellers: [
                  {
                    fulfillmentEndpoint:
                      'http://fulfillment.vtexcommerce.com.br/api/fulfillment?an=accountName',
                    id: '1',
                    logo: 'https://sellersLogo/images.png',
                    name: 'Loja do Suporte',
                  },
                ],
                sequence: '502556',
                shippingData: {
                  address: {
                    addressId: '-1425945657910',
                    addressType: 'residential',
                    city: 'Rio de Janeiro',
                    complement: '3',
                    country: 'BRA',
                    entityId: 'eabfb564-99d6-40d8-bd6c-bddbd4990aad',
                    geoCoordinates: [],
                    neighborhood: 'Botafogo',
                    number: '300',
                    postalCode: '22250-040',
                    receiverName: 'Rodrigo Cunha',
                    reference: null,
                    state: 'RJ',
                    street: 'Praia de Botafogo',
                    versionId: 'e9c3bec2-125d-4b96-a021-316c3aa9f14f',
                  },
                  id: 'shippingData',
                  logisticsInfo: [
                    {
                      addressId: '-1425945657910',
                      deliveryChannel: 'delivery',
                      deliveryChannels: [{ id: 'delivery', stockBalance: 0 }],
                      deliveryCompany: 'Todos os CEPS',
                      deliveryIds: [
                        {
                          accountCarrierName: 'recorrenciaqa',
                          courierId: '197a56f',
                          courierName: 'Todos os CEPS',
                          dockId: '1',
                          kitItemDetails: [],
                          quantity: 1,
                          warehouseId: '1_1',
                        },
                      ],
                      deliveryWindow: null,
                      entityId: 'eabfb564-99d6-40d8-bd6c-bddbd4990aad',
                      itemIndex: 0,
                      listPrice: 1160,
                      lockTTL: '10d',
                      pickupPointId: '1_VTEX-RJ',
                      pickupStoreInfo: {
                        additionalInfo: null,
                        address: null,
                        dockId: null,
                        friendlyName: null,
                        isPickupStore: false,
                      },
                      polygonName: 'region86',
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
                          lockTTL: '12d',
                          name: 'Normal',
                          pickupDistance: 0,
                          pickupPointId: 'store45',
                          pickupStoreInfo: {
                            additionalInfo: null,
                            address: null,
                            dockId: null,
                            friendlyName: null,
                            isPickupStore: false,
                          },
                          polygonName: 'region45',
                          price: 1160,
                          shippingEstimate: '5bd',
                          transitTime: '3d',
                        },
                        {
                          deliveryChannel: 'delivery',
                          deliveryWindow: null,
                          id: 'Expressa',
                          lockTTL: '12d',
                          name: 'Expressa',
                          pickupDistance: 0,
                          pickupPointId: 'store45',
                          pickupStoreInfo: {
                            additionalInfo: null,
                            address: null,
                            dockId: null,
                            friendlyName: null,
                            isPickupStore: false,
                          },
                          polygonName: 'region45',
                          price: 1160,
                          shippingEstimate: '5bd',
                          transitTime: '3d',
                        },
                        {
                          deliveryChannel: 'delivery',
                          deliveryWindow: null,
                          id: 'Quebra Kit',
                          lockTTL: '12d',
                          name: 'Quebra Kit',
                          pickupDistance: 0,
                          pickupPointId: 'store45',
                          pickupStoreInfo: {
                            additionalInfo: null,
                            address: null,
                            dockId: null,
                            friendlyName: null,
                            isPickupStore: false,
                          },
                          polygonName: 'region45',
                          price: 1392,
                          shippingEstimate: '2bd',
                          transitTime: '3d',
                        },
                        {
                          deliveryChannel: 'delivery',
                          deliveryWindow: null,
                          id: 'Sob Encomenda',
                          lockTTL: '12d',
                          name: 'Sob Encomenda',
                          pickupDistance: 0,
                          pickupPointId: 'store45',
                          pickupStoreInfo: {
                            additionalInfo: null,
                            address: null,
                            dockId: null,
                            friendlyName: null,
                            isPickupStore: false,
                          },
                          polygonName: 'region45',
                          price: 1392,
                          shippingEstimate: '32bd',
                          transitTime: '3d',
                        },
                      ],
                      transitTime: '3d',
                      versionId: 'e9c3bec2-125d-4b96-a021-316c3aa9f14f',
                    },
                  ],
                  selectedAddresses: [
                    {
                      addressId: '-1425945657910',
                      addressType: 'residential',
                      city: 'Rio de Janeiro',
                      complement: '10',
                      country: 'BRA',
                      entityId: 'eabfb564-99d6-40d8-bd6c-bddbd4990aad',
                      geoCoordinates: [],
                      neighborhood: 'Botafogo',
                      number: '518',
                      postalCode: '22250-040',
                      receiverName: 'Rodrigo Cunha',
                      reference: null,
                      state: 'RJ',
                      street: 'Praia de Botafogo',
                      versionId: 'e9c3bec2-125d-4b96-a021-316c3aa9f14f',
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
            approvedBy: "Person's name",
            authorizedDate: '2019-01-28T20:33:04+00:00',
            callCenterOperatorData: null,
            cancelReason: 'Explanation for cancellation',
            cancelledBy: "Person's name",
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
                  offeringInfo: 'Fragile.',
                  offeringType: null,
                  offeringTypeId: null,
                  productClusterId: '135,142',
                },
                assemblies: [],
                attachmentOfferings: [
                  {
                    name: 'vtex.subscription.weekly',
                    required: false,
                    schema: {
                      'vtex.subscription.key.frequency': {
                        Domain: [' 1 week', ' 2 week', ' 3 week', ' 4 week'],
                        MaximumNumberOfCharacters: 7,
                      },
                    },
                  },
                ],
                attachments: [],
                bundleItems: [],
                callCenterOperator: 'callCenterOp5473869',
                commission: 0,
                components: [],
                costPrice: 52,
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
                priceDefinitions: {
                  calculatedSellingPrice: 99,
                  sellingPrices: [{ quantity: 1, value: 99 }],
                  total: 99,
                },
                priceTags: [],
                priceValidUntil: null,
                productId: '9429485',
                quantity: 1,
                refId: 'BIGHEROBML',
                rewardValue: 0,
                seller: '1',
                sellerSku: '1234568358',
                sellingPrice: 3290,
                serialNumbers: '3',
                shippingPrice: null,
                tax: 0,
                taxCode: null,
                uniqueId: '87F0945396994B349158C7D9C9941442',
                unitMultiplier: 1,
              },
            ],
            lastChange: '2019-02-06T20:46:11.7010747+00:00',
            lastMessage: null,
            marketingData: 'marketing data',
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
                      accountId: '5BC5C6B417FE432AB971B1D399F190C9',
                      bankIssuedInvoiceBarCodeNumber: '325349573975945245345439573421443986734065',
                      bankIssuedInvoiceBarCodeType: 'i25',
                      bankIssuedInvoiceIdentificationNumber:
                        '23797770100000019003099260100022107500729050',
                      bankIssuedInvoiceIdentificationNumberFormatted:
                        '32534.95739 75945.24534 54395.734214 5',
                      billingAddress: {},
                      cardHolder: null,
                      cardNumber: null,
                      connectorResponses: {
                        Message: 'logMessage',
                        ReturnCode: '200',
                        Tid: '94857956',
                        authId: '857956',
                      },
                      cvv2: null,
                      dueDate: '2019-02-02',
                      expireMonth: null,
                      expireYear: null,
                      firstDigits: null,
                      giftCardAsDiscount: false,
                      giftCardCaption: null,
                      giftCardId: null,
                      giftCardName: null,
                      giftCardProvider: 'presentCard',
                      group: 'bankInvoice',
                      id: 'D3DEECAB3C6C4B9EAF8EF4C1FE062FF3',
                      installments: 1,
                      koinUrl: 'koinURL',
                      lastDigits: null,
                      parentAccountId: '5BC5C6B417FE432AB971B1D399F190C9',
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
            sellers: [
              {
                fulfillmentEndpoint:
                  'http://fulfillment.vtexcommerce.com.br/api/fulfillment?an=accountName',
                id: '1',
                logo: 'https://sellersLogo/images.png',
                name: 'Loja do Suporte',
              },
            ],
            sequence: '502556',
            shippingData: {
              address: {
                addressId: '-1425945657910',
                addressType: 'residential',
                city: 'Rio de Janeiro',
                complement: '3',
                country: 'BRA',
                entityId: 'eabfb564-99d6-40d8-bd6c-bddbd4990aad',
                geoCoordinates: [],
                neighborhood: 'Botafogo',
                number: '300',
                postalCode: '22250-040',
                receiverName: 'Rodrigo Cunha',
                reference: null,
                state: 'RJ',
                street: 'Praia de Botafogo',
                versionId: 'e9c3bec2-125d-4b96-a021-316c3aa9f14f',
              },
              id: 'shippingData',
              logisticsInfo: [
                {
                  addressId: '-1425945657910',
                  deliveryChannel: 'delivery',
                  deliveryChannels: [{ id: 'delivery', stockBalance: 0 }],
                  deliveryCompany: 'Todos os CEPS',
                  deliveryIds: [
                    {
                      accountCarrierName: 'recorrenciaqa',
                      courierId: '197a56f',
                      courierName: 'Todos os CEPS',
                      dockId: '1',
                      kitItemDetails: [],
                      quantity: 1,
                      warehouseId: '1_1',
                    },
                  ],
                  deliveryWindow: null,
                  entityId: 'eabfb564-99d6-40d8-bd6c-bddbd4990aad',
                  itemIndex: 0,
                  listPrice: 1160,
                  lockTTL: '10d',
                  pickupPointId: '1_VTEX-RJ',
                  pickupStoreInfo: {
                    additionalInfo: null,
                    address: null,
                    dockId: null,
                    friendlyName: null,
                    isPickupStore: false,
                  },
                  polygonName: 'region196',
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
                      lockTTL: '12d',
                      name: 'Normal',
                      pickupDistance: 0,
                      pickupPointId: 'store34',
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
                      transitTime: '3d',
                    },
                    {
                      deliveryChannel: 'delivery',
                      deliveryWindow: null,
                      id: 'Expressa',
                      lockTTL: '12d',
                      name: 'Expressa',
                      pickupDistance: 0,
                      pickupPointId: '1_VTEX-RJ',
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
                      transitTime: '3d',
                    },
                    {
                      deliveryChannel: 'delivery',
                      deliveryWindow: null,
                      id: 'Quebra Kit',
                      lockTTL: '12d',
                      name: 'Quebra Kit',
                      pickupDistance: 0,
                      pickupPointId: '1_VTEX-RJ',
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
                      transitTime: '3d',
                    },
                    {
                      deliveryChannel: 'delivery',
                      deliveryWindow: null,
                      id: 'Sob Encomenda',
                      lockTTL: '12d',
                      name: 'Sob Encomenda',
                      pickupDistance: 0,
                      pickupPointId: '1_VTEX-RJ',
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
                      transitTime: '3d',
                    },
                  ],
                  transitTime: '3d',
                  versionId: 'e9c3bec2-125d-4b96-a021-316c3aa9f14f',
                },
              ],
              selectedAddresses: [
                {
                  addressId: '-1425945657910',
                  addressType: 'residential',
                  city: 'Rio de Janeiro',
                  complement: '10',
                  country: 'BRA',
                  entityId: 'eabfb564-99d6-40d8-bd6c-bddbd4990aad',
                  geoCoordinates: [],
                  neighborhood: 'Botafogo',
                  number: '518',
                  postalCode: '22250-040',
                  receiverName: 'Rodrigo Cunha',
                  reference: null,
                  state: 'RJ',
                  street: 'Praia de Botafogo',
                  versionId: 'e9c3bec2-125d-4b96-a021-316c3aa9f14f',
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

export const postApiOmsPvtOrdersOrderIdCancelRoute = createRoute({
  method: 'post',
  path: '/api/oms/pvt/orders/{orderId}/cancel',
  tags: ['Orders'],
  summary: 'Cancel order',
  description:
    'You should use this endpoint to cancel an order by its order identification number (the `orderId`).\n\nA common scenario is one where the seller has a problem with the order fulfillment and needs to request the order cancellation to the marketplace. To do this, the seller would need to make this request, passing the `orderId` in the URL.\n\nYou should expect a response with the date when the notification was received, the orderId, and a receipt protocol code.\n\nBe aware that if the order status is already `Invoiced`, the order can only be canceled if—before using this request—you send a return invoice through the [Order Invoice Notification endpoint](https://developers.vtex.com/reference/invoice#invoicenotification).\n\r\n\r> The `Cancel order` resource is needed to use this API request. This is included in `OMS - Full access` and `IntegrationProfile - Fulfillment Oms`, among other default roles available in the Admin. Learn more about the [License manager roles and resources](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#).',
  operationId: 'CancelOrder',
  request: {
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
      orderId: z
        .string()
        .openapi({
          param: {
            description: 'ID that identifies the order in the seller.',
            example: '1172452900788-01',
            in: 'path',
            name: 'orderId',
            required: true,
            schema: { example: '1172452900788-01', type: 'string' },
            style: 'simple',
          },
          example: '1172452900788-01',
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              reason: z
                .string()
                .default('Unexpected stock shortage')
                .exactOptional()
                .openapi({ description: 'Reason for cancelling the order.' }),
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

export const postApiOmsPvtOrdersOrderIdChangesRoute = createRoute({
  method: 'post',
  path: '/api/oms/pvt/orders/{orderId}/changes',
  tags: ['Orders'],
  summary: 'Register change on order',
  description:
    "\r\n> Timeout settings\r\n>\r\n> This is a synchronous API, which means the application requests data and waits until a value is returned. This behavior can cause timeout errors; to avoid them, we recommend setting the timeout in 20 seconds.\r\n\r\n This request allows [changing an order](https://help.vtex.com/en/tutorial/changing-items-from-a-completed-order--tutorials_190) by:\n\r- Adding items to an order\n\r- Removing items from an order\n\r- Applying discounts to the total value of the order\n\r- Incrementing the total value of the order. \n\nIn those scenarios of order changes, it is possible to insert a [Partial invoice](https://help.vtex.com/en/tracks/orders--2xkTisx4SXOWXQel8Jg8sa/q9GPspTb9cHlMeAZfdEUe). The total value of the order will be updated after the insertion of the invoice, even when there is a partial invoice scenario. The updated value is settled by VTEX's Payment Gateway. The reimbursement for the shopper is automatic. \n\r\n\rThis action can only be done for orders in these status:\n\r- `handling`\n\r- `waiting-for-fulfillment` \n\r\n\r> The `Change order` resource is needed to use this API request. This is included in `OMS - Full access` and `IntegrationProfile - Fulfillment Oms`, among other default roles available in the Admin. Learn more about the [License manager roles and resources](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#).",
  operationId: 'RegisterChange',
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
      orderId: z
        .string()
        .openapi({
          param: {
            description: 'ID that identifies the order in the seller.',
            example: '1172452900788-01',
            in: 'path',
            name: 'orderId',
            required: true,
            schema: { example: '1172452900788-01', type: 'string' },
            style: 'simple',
          },
          example: '1172452900788-01',
        }),
    }),
    body: {
      description: '',
      content: {
        'application/json': {
          schema: RegisterChangeRequestSchema,
          example: {
            discountValue: 1000,
            incrementValue: 0,
            itemsAdded: [{ id: '234788', price: 200, quantity: 1 }],
            itemsRemoved: [{ id: '234794', price: 600, quantity: 2 }],
            reason: 'Promoção dada por telefone',
            requestId: 'change-request-0123',
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
          schema: RegisterChangeSchema,
          example: {
            date: '2019-02-08T13:54:33.6868469+00:00',
            orderId: 'v502538llux-01',
            receipt: '535d4581-a2a2-4fd2-a206-1c61eae91b1e',
          },
        },
      },
    },
  },
})

export const getApiOmsPvtOrdersOrderIdConversationMessageRoute = createRoute({
  method: 'get',
  path: '/api/oms/pvt/orders/{orderId}/conversation-message',
  tags: ['Conversation'],
  summary: 'Retrieve order conversation',
  description: 'List all order conversations of an order by its order ID.',
  operationId: 'GetConversation',
  request: {
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
      orderId: z
        .string()
        .openapi({
          param: {
            description: 'Order ID is a unique code that identifies an order.',
            example: '1172452900788-01',
            in: 'path',
            name: 'orderId',
            required: true,
            schema: { example: '1172452900788-01', type: 'string' },
            style: 'simple',
          },
          example: '1172452900788-01',
        }),
    }),
    query: z.object({ reason: ReasonParamsSchema }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json; charset=utf-8': {
          schema: z.array(GetConversationSchema),
          example: [
            {
              attachmentNames: ['attachments439505'],
              body: '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"> <html xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:v="urn:schemas-microsoft-com:vml" style="-webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; box-sizing: border-box; width: 100%; height: 100%; margin: 0; padding: 0; background: #f1f1f1 !important;"> <head> <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/> <meta http-equiv="X-UA-Compatible" content="IE=edge"/> <meta name="viewport" content="width=device-width, initial-scale=1.0"/> <title>recorrenciaqa</title> <!--[if gte mso 9]> <xml> <o:OfficeDocumentSettings> <o:AllowPNG/> <o:PixelsPerInch>96</o:PixelsPerInch> </o:OfficeDocumentSettings> </xml> <![endif]--> <style> a[x-apple-data-detectors] { color: inherit !important; text-decoration: none !important; font-size: inherit !important; font-family: inherit !important; font-weight: inherit !important; line-height: inherit !important; } </style> <style> @media (max-width: 600px) { img { max-width: 100% !important; height: auto !important; } } </style> <style> @media screen and (min-width: 30em) { .ph4-ns { padding-left: 2rem !important; padding-right: 2rem !important; } .mv4-ns { margin-top: 2rem !important; margin-bottom: 2rem !important; } } </style> </head> <body style="-webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; box-sizing: border-box; width: 100%; height: 100%; margin: 0; padding: 0; background: #f1f1f1 !important; font-family: -apple-system, BlinkMacSystemFont, \'Segoe UI\', Roboto, Helvetica, Arial, sans-serif;"> <table width="100%" border="0" cellpadding="0" cellspacing="0" style="box-sizing: border-box; margin: 0; padding: 0; background: #f1f1f1; border-collapse: collapse; border-spacing: 0; mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-family: -apple-system, BlinkMacSystemFont, \'Segoe UI\', Roboto, Helvetica, Arial, sans-serif; width: 100%; height: 100%; line-height: 100% !important;"> <tr style="box-sizing: border-box !important;"> <td align="left" valign="top" style="font-size: 14px; line-height: 20px; box-sizing: border-box; border-collapse: collapse; text-align: left !important; font-family: -apple-system, BlinkMacSystemFont, \'Segoe UI\', Roboto, Helvetica, Arial, sans-serif;"> <table class="mv4-ns" width="100%" align="center" border="0" cellpadding="0" cellspacing="0" style="box-sizing: border-box; max-width: 40rem; width: 100%; background-color: #fff; border-collapse: collapse; border-spacing: 0; mso-table-lspace: 0pt; mso-table-rspace: 0pt !important; font-family: -apple-system, BlinkMacSystemFont, \'Segoe UI\', Roboto, Helvetica, Arial, sans-serif;" bgcolor="#fff"> <tr style="box-sizing: border-box !important;"> <td class="ph4-ns" style="font-size: 14px; line-height: 20px; box-sizing: border-box; border-collapse: collapse; border-bottom-style: solid; border-bottom-width: 1px; border-color: #eee; width: 100%; padding-bottom: 2rem; text-align: center !important; font-family: -apple-system, BlinkMacSystemFont, \'Segoe UI\', Roboto, Helvetica, Arial, sans-serif;" align="center"> <div style="box-sizing: border-box; width: 8rem; margin-bottom: 1rem; margin-top: 2rem; margin-right: auto; margin-left: auto !important;"> <a href="http://.com.br" style="box-sizing: border-box !important;"> <img alt="" border="0" width="auto" src="http://licensemanager.vtex.com.br/api/site/pub/accounts/9ddcfba5-3855-49ec-b61e-b2847b9314cc/logos/show" style="vertical-align: top; outline: none; text-decoration: none; -ms-interpolation-mode: bicubic; max-width: 100%; border: none; max-height: 80px !important;"> </img></a> </div> <h1 style="margin: 0; font-size: 50px; line-height: 58px; box-sizing: border-box !important;">Seu pagamento foi aprovado.</h1> <div style="box-sizing: border-box; color: #777; margin-top: .5rem !important;"> Referente ao Pedido <span style="font-weight: 700 !important;">#1305371685465-01</span> </div> </td> </tr> <tr style="box-sizing: border-box !important;"> <td class="ph4-ns" style="font-size: 14px; line-height: 20px; box-sizing: border-box; border-collapse: collapse; text-align: left; width: 100% !important; font-family: -apple-system, BlinkMacSystemFont, \'Segoe UI\', Roboto, Helvetica, Arial, sans-serif;" align="left"> <div style="box-sizing: border-box; margin-top: 2rem !important;"> <p style="box-sizing: border-box !important;">    Olá, jose.     Estamos providenciando a emissão da Nota Fiscal do seu pedido e o envio do seu produto.  </p> </div> </td> </tr> <tr style="box-sizing: border-box !important;"> <td class="ph4-ns" style="font-size: 14px; line-height: 20px; box-sizing: border-box; border-collapse: collapse; text-align: left; width: 100%; padding-bottom: 2rem; padding-top: 1rem !important; font-family: -apple-system, BlinkMacSystemFont, \'Segoe UI\', Roboto, Helvetica, Arial, sans-serif;" align="left"> <h3 style="font-size: 20px; line-height: 36px; text-transform: uppercase; letter-spacing: 1.2pt; font-weight: 300; margin-top: 16px; box-sizing: border-box; margin: 0 !important;">Pagamento</h3>    <div style="box-sizing: border-box; line-height: 1.5; font-size: 1.25rem !important;"> Visa  final 1111  <br/>R$ 3,99  à vista  </div>     </td> </tr> <tr style="box-sizing: border-box !important;"> <td class="ph4-ns" style="font-size: 14px; line-height: 20px; box-sizing: border-box; border-collapse: collapse; text-align: left; border-top-style: solid; border-top-width: 1px; border-color: #eee; padding-top: 1rem; padding-bottom: 1rem !important; font-family: -apple-system, BlinkMacSystemFont, \'Segoe UI\', Roboto, Helvetica, Arial, sans-serif;" align="left"> <p style="box-sizing: border-box !important;"> Atenciosamente,<br/>Equipe recorrenciaqa </p> </td> </tr> </table> </td> </tr> </table> </body> </html>',
              date: '2023-01-23T09:23:31.0000000+00:00',
              firstWords: 'Your payment has been aproved and we are waiting for...',
              from: {
                aliasMaskType: 0,
                conversationRelatedTo: '1305371685465-01',
                conversationSubject: 'oms',
                email: 'noreply@store.com.br',
                emailAlias: 'noreply@vtexcommerce.com.br-9814872b.ct.store.com.br',
                name: 'no reply',
                role: 'null',
              },
              hasAttachment: false,
              id: '2023-01-23t09-23-08_619a80a05aa34efb982b309c7a1910e3',
              subject: 'Your payment has been aproved.',
              to: [
                {
                  aliasMaskType: 0,
                  conversationRelatedTo: '1305371685465-01',
                  conversationSubject: 'oms',
                  email: 'customer.name@email.com',
                  emailAlias: '64d8bd8dbe5c4e7b93b8b3c237e50be1@ct.name.com.br',
                  name: 'Mary John',
                  role: 'Customer',
                },
              ],
            },
          ],
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
          .openapi({ example: 'Mon, 13 Feb 2017 15:25:24 GMT', param: { required: false } }),
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

export const postApiOmsPvtOrdersOrderIdInteractionsRoute = createRoute({
  method: 'post',
  path: '/api/oms/pvt/orders/{orderId}/interactions',
  tags: ['Orders'],
  summary: 'Add log in orders',
  description: 'Add a Log in Interactions Order Array.',
  operationId: 'AddLog',
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
      orderId: z
        .string()
        .openapi({
          param: {
            description: 'Order ID is a unique code that identifies an order.',
            example: '1172452900788-01',
            in: 'path',
            name: 'orderId',
            required: true,
            schema: { example: '1172452900788-01', type: 'string' },
            style: 'simple',
          },
          example: '1172452900788-01',
        }),
    }),
    body: {
      description: '',
      content: {
        'application/json': {
          schema: AddLogRequestSchema,
          example: { message: 'Teste add interactions', source: 'Postman' },
        },
      },
      required: true,
    },
  },
  responses: { 200: { description: 'OK' } },
})

export const postApiOmsPvtOrdersOrderIdInvoiceRoute = createRoute({
  method: 'post',
  path: '/api/oms/pvt/orders/{orderId}/invoice',
  tags: ['Invoice'],
  summary: 'Order invoice notification',
  description:
    "Entering the [invoice in the order](https://help.vtex.com/en/tracks/orders--2xkTisx4SXOWXQel8Jg8sa/2WgQrlHTyVo4hLjhUs1LMT) is a required step for its [status](https://help.vtex.com/en/tutorial/order-flow-and-status--tutorials_196#order-status-details) to change to Invoiced - a sign that the order has been successfully completed. Remember that once an order is read as invoiced by the system, this status cannot be changed. \n\nThe total value of the order will be updated after the insertion of the invoice, even when there's a [Partial invoice](https://help.vtex.com/en/tracks/orders--2xkTisx4SXOWXQel8Jg8sa/q9GPspTb9cHlMeAZfdEUe) scenario. The updated value is settled by VTEX's Payment Gateway. The reimbursement for the shopper is automatic. \n\nWe strongly recommend that you always send the object of the invoiced items. With this practice, rounding errors will be avoided. \n\nWhen returning items, an input invoice must be sent through this call. For that, the `type` field should be filled in with `input`. \n\nIt is not allowed to use the same `invoiceNumber` in more than one request to the Order Invoice Notification endpoint.\n\nFor marketplace integrations: once the order is invoiced, the seller should use this request to send the invoice information to the marketplace. Be aware that this endpoint is also used by the seller to send the order tracking information. This, however, should be done in a separate moment, once the seller has the tracking information.  \n\r\n\r> The `Notify invoice` resource is needed to use this API request. This is included in `OMS - Full access` and `IntegrationProfile - Fulfillment Oms`, among other default roles available in the Admin. Learn more about the [License manager roles and resources](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#).\n\r\n\r> 📘 Onboarding guide \r\n>\r\n> Check the new [Orders onboarding guide](https://developers.vtex.com/vtex-rest-api/docs/orders-overview). We created this guide to improve the onboarding experience for developers at VTEX. It assembles all documentation on our Developer Portal about Orders and is organized by focusing on the developer's journey.\r\n\r\n",
  operationId: 'InvoiceNotification',
  request: {
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
      orderId: z
        .string()
        .openapi({
          param: {
            description: 'Unique code that identifies the order whose invoice is being sent.',
            example: '1172452900788-01',
            in: 'path',
            name: 'orderId',
            required: true,
            schema: { example: '1172452900788-01', type: 'string' },
            style: 'simple',
          },
          example: '1172452900788-01',
        }),
    }),
    body: {
      description: '',
      content: {
        'application/json': {
          schema: InvoiceNotificationRequestSchema,
          example: {
            courier: null,
            dispatchedDate: null,
            invoiceKey: null,
            invoiceNumber: '9999',
            invoiceUrl: 'link',
            invoiceValue: '10000',
            issuanceDate: '2019-01-31T18:25:43-05:00',
            items: [{ description: '335', id: '1234', price: 10000, quantity: 1 }],
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
  },
})

export const patchApiOmsPvtOrdersOrderIdInvoiceInvoiceNumberRoute = createRoute({
  method: 'patch',
  path: '/api/oms/pvt/orders/{orderId}/invoice/{invoiceNumber}',
  tags: ['Invoice'],
  summary: "Update order's partial invoice (send tracking number)",
  description:
    'Update a given order, adding its tracking number to its [Partial invoice](https://help.vtex.com/en/tracks/pedidos--2xkTisx4SXOWXQel8Jg8sa/q9GPspTb9cHlMeAZfdEUe).\n\r\n\rAfter using this call to add a tracking number to an order, you can use the [Update order tracking status](https://developers.vtex.com/vtex-rest-api/reference/tracking#updatetrackingstatus) API request to add tracking events.\n\r\n\r> The `Notify invoice` resource is needed to use this API request. This is included in `OMS - Full access` and `IntegrationProfile - Fulfillment Oms`, among other default roles available in the Admin. Learn more about the [License manager roles and resources](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc).',
  operationId: 'Updatepartialinvoice.SendTrackingNumber',
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
      orderId: z
        .string()
        .openapi({
          param: {
            description: 'Unique code that identifies the order whose invoice is being sent.',
            example: '1172452900788-01',
            in: 'path',
            name: 'orderId',
            required: true,
            schema: { example: '1172452900788-01', type: 'string' },
            style: 'simple',
          },
          example: '1172452900788-01',
        }),
      invoiceNumber: z
        .string()
        .openapi({
          param: {
            description: 'Number that identifies the invoice.',
            example: '000030711',
            in: 'path',
            name: 'invoiceNumber',
            required: true,
            schema: { example: '000030711', type: 'string' },
            style: 'simple',
          },
          example: '000030711',
        }),
    }),
    body: {
      description: '',
      content: {
        'application/json': {
          schema: UpdatepartialinvoiceSendTrackingNumberRequestSchema,
          example: {
            courier: 'carrierOne',
            dispatchedDate: '2022-02-08T13:16:13.4617653+00:00',
            trackingNumber: '87658',
            trackingUrl: 'https://www.tracking.com/url',
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
          schema: UpdatepartialinvoiceSendTrackingNumberSchema,
          example: {
            date: '2019-02-08T13:16:13.4617653+00:00',
            orderId: '00-v5195004lux-01',
            receipt: '527b1ae251264ef1b7a9b597cd8f16b9',
          },
        },
      },
    },
  },
})

export const putApiOmsPvtOrdersOrderIdInvoiceInvoiceNumberTrackingRoute = createRoute({
  method: 'put',
  path: '/api/oms/pvt/orders/{orderId}/invoice/{invoiceNumber}/tracking',
  tags: ['Tracking'],
  summary: 'Update order tracking status',
  description:
    "This endpoint sends a tracking event to an order that already has a tracking number registered to its invoice.\n\r\n\rThis request is not meant to send tracking number and URL to the invoice. If you wish to send tracking number and URL to an order, use the [Update order's partial invoice API request](https://developers.vtex.com/docs/api-reference/orders-api#patch-/api/oms/pvt/orders/-orderId-/invoice/-invoiceNumber-). You can also learn more about [Partial invoice](https://help.vtex.com/en/tracks/partial-invoices--2xkTisx4SXOWXQel8Jg8sa/q9GPspTb9cHlMeAZfdEUe) scenarios. \n\r\n\r> The `Notify invoice` resource is needed to use this API request. This is included in `OMS - Full access` and `IntegrationProfile - Fulfillment Oms`, among other default roles available in the Admin. Learn more about the [License manager roles and resources](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc).",
  operationId: 'UpdateTrackingStatus',
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
      orderId: z
        .string()
        .openapi({
          param: {
            description: 'Order ID is a unique code that identifies an order.',
            example: '1172452900788-01',
            in: 'path',
            name: 'orderId',
            required: true,
            schema: { example: '1172452900788-01', type: 'string' },
            style: 'simple',
          },
          example: '1172452900788-01',
        }),
      invoiceNumber: z
        .string()
        .openapi({
          param: {
            description: 'Number that identifies the invoice.',
            example: '000030711',
            in: 'path',
            name: 'invoiceNumber',
            required: true,
            schema: { example: '000030711', type: 'string' },
            style: 'simple',
          },
          example: '000030711',
        }),
    }),
    body: {
      description: '',
      content: {
        'application/json': {
          schema: UpdateTrackingStatusRequestSchema,
          example: {
            deliveredDate: '2022-10-01 21:15',
            events: [
              {
                city: 'Rio de Janeiro',
                date: '2015-06-23',
                description: 'Coletado pela transportadora',
                state: 'RJ',
              },
              {
                city: 'Sao Paulo',
                date: '2015-06-24',
                description: 'A caminho de Curitiba',
                state: 'SP',
              },
            ],
            isDelivered: false,
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
        'application/json; charset=utf-8': {
          schema: UpdateTrackingStatusSchema,
          example: {
            date: '2017-03-29T18:04:31.0521233+00:00',
            orderId: 'v501245lspt-01',
            receipt: 'f67d33a8029c42ce9a8f07fc17f54449',
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
        'Content-Length': z
          .string()
          .exactOptional()
          .openapi({ example: '116', param: { required: false } }),
        Date: z
          .string()
          .exactOptional()
          .openapi({ example: 'Wed, 29 Mar 2017 18:05:00 GMT', param: { required: false } }),
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
          .openapi({ example: 'omsapi-v1.5.143', param: { required: false } }),
      }),
    },
  },
})

export const getApiOmsPvtOrdersOrderIdPaymentTransactionRoute = createRoute({
  method: 'get',
  path: '/api/oms/pvt/orders/{orderId}/payment-transaction',
  tags: ['Payment'],
  summary: 'Retrieve payment transaction',
  description:
    "Retrieves transaction details by order ID. All events in the transaction will be registered in this call's response body. \n\nIn scenarios of [order changes](https://developers.vtex.com/vtex-rest-api/reference/registerchange), it is possible to insert a [Partial invoice](https://help.vtex.com/en/tracks/pedidos--2xkTisx4SXOWXQel8Jg8sa/q9GPspTb9cHlMeAZfdEUe). The total value of the order will be updated after the insertion of the invoice, even when there is a [Partial invoice](https://help.vtex.com/en/tracks/pedidos--2xkTisx4SXOWXQel8Jg8sa/q9GPspTb9cHlMeAZfdEUe) scenario. The updated value is settled by VTEX's Payment Gateway. The reimbursement for the shopper is automatic.",
  operationId: 'GetPaymenttransaction',
  request: {
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
      orderId: z
        .string()
        .openapi({
          param: {
            description: 'Order ID is a unique code that identifies an order.',
            example: '1172452900788-01',
            in: 'path',
            name: 'orderId',
            required: true,
            schema: { example: '1172452900788-01', type: 'string' },
            style: 'simple',
          },
          example: '1172452900788-01',
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: GetPaymenttransactionSchema,
          example: {
            isActive: true,
            merchantName: 'LUXSTORE',
            payments: [
              {
                cardHolder: null,
                cardNumber: null,
                connectorResponses: {
                  Message: 'logMessage',
                  ReturnCode: '200',
                  Tid: '101770752',
                  authId: '170852',
                },
                cvv2: null,
                dueDate: null,
                expireMonth: null,
                expireYear: null,
                firstDigits: '412341',
                giftCardCaption: null,
                giftCardId: null,
                giftCardName: null,
                group: 'creditCard',
                id: '721CBE1090324D12ABE301FE33DE775A',
                installments: 1,
                lastDigits: '4123',
                paymentSystem: '4',
                paymentSystemName: 'Mastercard',
                redemptionCode: null,
                referenceValue: 10150,
                tid: '101770752',
                url: null,
                value: 10150,
              },
            ],
            status: 'Finished',
            transactionId: 'CB452D77E7D04099A4DB0479087B1D2C',
          },
        },
      },
    },
  },
})

export const postApiOmsPvtOrdersOrderIdPaymentsPaymentIdPaymentNotificationRoute = createRoute({
  method: 'post',
  path: '/api/oms/pvt/orders/{orderId}/payments/{paymentId}/payment-notification',
  tags: ['Payment'],
  summary: 'Send payment notification',
  description:
    'Send a payment notification of a given order, by order ID.\n\r\n\r> The `Notify payment` resource is needed to use this API request. This is included in `OMS - Full access` and `IntegrationProfile - Fulfillment Oms`, among other default roles available in the Admin. Learn more about the [License manager roles and resources](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#).',
  operationId: 'SendPaymentNotification',
  request: {
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
      orderId: z
        .string()
        .openapi({
          param: {
            description: 'Order ID is a unique code that identifies an order.',
            example: '1172452900788-01',
            in: 'path',
            name: 'orderId',
            required: true,
            schema: { example: '1172452900788-01', type: 'string' },
            style: 'simple',
          },
          example: '1172452900788-01',
        }),
      paymentId: z
        .string()
        .openapi({
          param: {
            description: 'VTEX payment identifier.',
            example: 'F5C1A4E20D3B4E07B7E871F5B5BC9F91',
            in: 'path',
            name: 'paymentId',
            required: true,
            schema: { example: 'F5C1A4E20D3B4E07B7E871F5B5BC9F91', type: 'string' },
            style: 'simple',
          },
          example: 'F5C1A4E20D3B4E07B7E871F5B5BC9F91',
        }),
    }),
  },
  responses: {
    200: { description: 'OK' },
    400: { description: 'Bad request.' },
    403: { description: 'The credentials are not enabled to access the service.' },
    404: { description: 'Value not found.' },
    429: { description: 'Too many requests.' },
  },
})

export const postApiOmsPvtOrdersOrderIdStartHandlingRoute = createRoute({
  method: 'post',
  path: '/api/oms/pvt/orders/{orderId}/start-handling',
  tags: ['Orders'],
  summary: 'Start handling order',
  description:
    "Changes the status of an order to indicate that it is in `handling`.\n\r\n\r> Expect a `status 204` response with no content in case of a successful request. The store must validate this response to retry the call if the response differs from the `204` code, making this flow the store's responsibility. This endpoint can also respond with `status 500`. \n\r\n\r> The `Change order workflow status` resource is needed to use this API request. This is included in `OMS - Full access` and `IntegrationProfile - Fulfillment Oms`, among other default roles available in the Admin. Learn more about the [License manager roles and resources](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#).",
  operationId: 'StartHandling',
  request: {
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
      orderId: z
        .string()
        .openapi({
          param: {
            description: 'Order ID is a unique code that identifies an order.',
            example: '1172452900788-01',
            in: 'path',
            name: 'orderId',
            required: true,
            schema: { example: '1172452900788-01', type: 'string' },
            style: 'simple',
          },
          example: '1172452900788-01',
        }),
    }),
  },
  responses: {
    204: { description: '[No content](https://httpstatuses.com/204)' },
    401: {
      description: '[Unauthorized](https://httpstatuses.com/401)',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z
                .object({
                  code: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'Error code in the Order Management System',
                      example: 'OMS003',
                      title: 'code',
                    }),
                  exception: z
                    .string()
                    .nullable()
                    .exactOptional()
                    .openapi({ description: 'Exception', example: null, title: 'exception' }),
                  message: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'Error message',
                      example: 'Acesso não autorizado',
                      title: 'message',
                    }),
                })
                .exactOptional()
                .openapi({
                  description: 'Object containing the error information',
                  title: 'error',
                  required: [],
                }),
            })
            .openapi({
              description: 'Root object',
              example: { error: { code: '1', exception: null, message: 'Acesso não autorizado' } },
              required: [],
            }),
        },
      },
    },
    403: { description: '[Forbidden](https://httpstatuses.com/403)' },
    404: { description: '[Not found](https://httpstatuses.com/404)' },
    409: {
      description: '[Conflict](https://httpstatuses.com/409)',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z
                .object({
                  code: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'Error code in the Order Management System',
                      example: 'OMS003',
                      title: 'code',
                    }),
                  exception: z
                    .string()
                    .nullable()
                    .exactOptional()
                    .openapi({ description: 'Exception', example: null, title: 'exception' }),
                  message: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'Error message',
                      example: 'Order status should be ready-for-handling to perform this action',
                      title: 'message',
                    }),
                })
                .exactOptional()
                .openapi({
                  description: 'Object containing the error information',
                  title: 'error',
                  required: [],
                }),
            })
            .openapi({
              description: 'Root object',
              example: {
                error: {
                  code: 'OMS003',
                  exception: null,
                  message: 'Order status should be ready-for-handling to perform this action',
                },
              },
              required: [],
            }),
        },
      },
    },
    429: { description: '[Too many requests](https://httpstatuses.com/429)' },
  },
})

export const getApiOmsUserOrdersRoute = createRoute({
  method: 'get',
  path: '/api/oms/user/orders',
  tags: ['User orders'],
  summary: "Retrieve user's orders",
  description:
    'Lists all orders from a given client, filtering by their email. \r\n\r\n> Note that these requests are meant to be made by **Call center operator** profiles. Otherwise, they will return only orders from the same email making the request.',
  operationId: 'Userorderslist',
  request: {
    query: z.object({
      clientEmail: z
        .string()
        .openapi({
          param: {
            description: 'Customer email.',
            explode: true,
            in: 'query',
            name: 'clientEmail',
            required: true,
            schema: { example: 'customer@mail.com', type: 'string' },
            style: 'form',
          },
          example: 'customer@mail.com',
        }),
      page: z
        .string()
        .openapi({
          param: {
            description: 'Page number for result pagination.',
            explode: true,
            in: 'query',
            name: 'page',
            required: true,
            schema: { example: '15', type: 'string' },
            style: 'form',
          },
          example: '15',
        }),
      per_page: z
        .string()
        .openapi({
          param: {
            description: 'Page quantity for result pagination.',
            explode: true,
            in: 'query',
            name: 'per_page',
            required: true,
            schema: { example: '15', type: 'string' },
            style: 'form',
          },
          example: '15',
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
          schema: UserorderslistSchema,
          example: {
            facets: [],
            list: [
              {
                ShippingEstimatedDate: '2019-02-04T20:33:46+00:00',
                ShippingEstimatedDateMax: null,
                ShippingEstimatedDateMin: null,
                affiliateId: '',
                authorizedDate: '2019-01-28T20:33:04+00:00',
                callCenterOperatorName: null,
                clientName: 'Cunha VTEX',
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
                ShippingEstimatedDate: null,
                ShippingEstimatedDateMax: null,
                ShippingEstimatedDateMin: null,
                affiliateId: '',
                authorizedDate: null,
                callCenterOperatorName: null,
                clientName: 'Cunha VTEX',
                creationDate: '2018-08-28T17:42:40+00:00',
                currencyCode: 'BRL',
                items: null,
                lastMessageUnread:
                  ' Lux Store 96 Seu pedido foi cancelado. Referente ao Pedido #v502449llux-02 Resumo Itens R$ 1.178,98 Entrega R$ 6,90 Total R$ 1.185,88',
                listId: null,
                listType: null,
                marketPlaceOrderId: null,
                orderId: 'v502449llux-02',
                orderIsComplete: true,
                origin: 'Marketplace',
                paymentNames: 'Promissory',
                salesChannel: '1',
                sequence: '502452',
                status: 'canceled',
                statusDescription: 'Cancelado',
                totalItems: 12,
                totalValue: 118588,
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
                clientName: 'Cunha VTEX',
                creationDate: '2018-08-28T17:42:28.9171556+00:00',
                currencyCode: null,
                items: [
                  {
                    description: 'Mangueira Reservatório Ao Cavalete',
                    ean: null,
                    id: '195',
                    price: 7390,
                    productId: '134',
                    quantity: 1,
                    refId: 'TE3121110',
                    seller: '1',
                    sellingPrice: 7390,
                  },
                  {
                    description: 'Mangueira Filtro',
                    ean: null,
                    id: '238',
                    price: 5190,
                    productId: '162',
                    quantity: 1,
                    refId: 'XC459N610CA',
                    seller: '1',
                    sellingPrice: 5190,
                  },
                ],
                lastMessageUnread: null,
                listId: null,
                listType: null,
                marketPlaceOrderId: '',
                orderId: 'v502449llux-01',
                orderIsComplete: true,
                origin: 'Marketplace',
                paymentNames: null,
                salesChannel: '1',
                sequence: '502449',
                status: 'canceled',
                statusDescription: 'Cancelado',
                totalItems: 0,
                totalValue: 21526180,
                workflowInErrorState: false,
                workflowInRetry: false,
              },
              {
                ShippingEstimatedDate: '2017-07-29T19:24:20.7444363+00:00',
                ShippingEstimatedDateMax: null,
                ShippingEstimatedDateMin: null,
                affiliateId: '',
                authorizedDate: null,
                callCenterOperatorName: null,
                clientName: 'Cunha VTEX',
                creationDate: '2017-07-25T23:17:36.7963248+00:00',
                currencyCode: null,
                items: [
                  {
                    description: 'Aquecedor Britania 1500 Branco',
                    ean: '1235567890143',
                    id: '1234568212',
                    price: 35599,
                    productId: '1000200',
                    quantity: 1,
                    refId: 'branquinho',
                    seller: '1',
                    sellingPrice: 35599,
                  },
                ],
                lastMessageUnread: null,
                listId: null,
                listType: null,
                marketPlaceOrderId: '',
                orderId: 'v502058llux-01',
                orderIsComplete: true,
                origin: 'Marketplace',
                paymentNames: null,
                salesChannel: '1',
                sequence: '502058',
                status: 'invoiced',
                statusDescription: 'Faturado',
                totalItems: 0,
                totalValue: 35599,
                workflowInErrorState: false,
                workflowInRetry: false,
              },
              {
                ShippingEstimatedDate: '2017-06-27T13:59:49.7705236+00:00',
                ShippingEstimatedDateMax: null,
                ShippingEstimatedDateMin: null,
                affiliateId: '',
                authorizedDate: null,
                callCenterOperatorName: null,
                clientName: 'Cunha VTEX',
                creationDate: '2017-06-26T16:57:58.9986524+00:00',
                currencyCode: null,
                items: [
                  {
                    description: 'Boneco do Mário',
                    ean: 'bonecomario',
                    id: '1234568183',
                    price: 150363,
                    productId: '1000257',
                    quantity: 1,
                    refId: 'bonecomario',
                    seller: '1',
                    sellingPrice: 150363,
                  },
                  {
                    description: 'Camiseta GG',
                    ean: null,
                    id: '1234567894',
                    price: 899,
                    productId: '1000187',
                    quantity: 1,
                    refId: 'abc1234',
                    seller: '1',
                    sellingPrice: 899,
                  },
                ],
                lastMessageUnread: null,
                listId: null,
                listType: null,
                marketPlaceOrderId: '',
                orderId: 'v501538llux-01',
                orderIsComplete: true,
                origin: 'Marketplace',
                paymentNames: null,
                salesChannel: '1',
                sequence: '501538',
                status: 'invoiced',
                statusDescription: 'Faturado',
                totalItems: 0,
                totalValue: 151262,
                workflowInErrorState: false,
                workflowInRetry: false,
              },
              {
                ShippingEstimatedDate: '2016-12-02T08:00:00+00:00',
                ShippingEstimatedDateMax: null,
                ShippingEstimatedDateMin: null,
                affiliateId: '',
                authorizedDate: null,
                callCenterOperatorName: null,
                clientName: 'Cunha VTEX',
                creationDate: '2016-11-21T19:57:54.0415289+00:00',
                currencyCode: null,
                items: [
                  {
                    description: 'Camiseta GG',
                    ean: null,
                    id: '1234567894',
                    price: 899,
                    productId: '1000187',
                    quantity: 2,
                    refId: 'abc1234',
                    seller: '1',
                    sellingPrice: 899,
                  },
                ],
                lastMessageUnread: null,
                listId: null,
                listType: null,
                marketPlaceOrderId: '',
                orderId: 'v501020llux-01',
                orderIsComplete: true,
                origin: 'Marketplace',
                paymentNames: null,
                salesChannel: '1',
                sequence: '501020',
                status: 'canceled',
                statusDescription: 'Cancelado',
                totalItems: 0,
                totalValue: 3190,
                workflowInErrorState: false,
                workflowInRetry: false,
              },
              {
                ShippingEstimatedDate: '2016-10-10T14:23:17.1897068+00:00',
                ShippingEstimatedDateMax: null,
                ShippingEstimatedDateMin: null,
                affiliateId: '',
                authorizedDate: null,
                callCenterOperatorName: null,
                clientName: 'Cunha VTEX',
                creationDate: '2016-10-10T17:19:30.8562035+00:00',
                currencyCode: null,
                items: [
                  {
                    description:
                      'SMARTPHONE SAMSUNG GALAXY S7 FLAT SM-G930FZDLZTO 32GB DOURADO TELA 5.1" 4G CÂMERA 12 MP',
                    ean: null,
                    id: '1234568028',
                    price: 299000,
                    productId: '1000203',
                    quantity: 1,
                    refId: 'testefnac',
                    seller: '1',
                    sellingPrice: 299000,
                  },
                ],
                lastMessageUnread: null,
                listId: null,
                listType: null,
                marketPlaceOrderId: '',
                orderId: 'v500973llux-01',
                orderIsComplete: true,
                origin: 'Marketplace',
                paymentNames: null,
                salesChannel: '1',
                sequence: '500973',
                status: 'handling',
                statusDescription: 'Preparando Entrega',
                totalItems: 0,
                totalValue: 299900,
                workflowInErrorState: false,
                workflowInRetry: false,
              },
              {
                ShippingEstimatedDate: '2016-10-10T14:13:34.4927265+00:00',
                ShippingEstimatedDateMax: null,
                ShippingEstimatedDateMin: null,
                affiliateId: '',
                authorizedDate: null,
                callCenterOperatorName: null,
                clientName: 'Cunha VTEX',
                creationDate: '2016-10-10T17:07:59.0889392+00:00',
                currencyCode: null,
                items: [
                  {
                    description: 'Camiseta GG',
                    ean: null,
                    id: '1234567894',
                    price: 899,
                    productId: '1000187',
                    quantity: 1,
                    refId: 'abc1234',
                    seller: '1',
                    sellingPrice: 899,
                  },
                ],
                lastMessageUnread: null,
                listId: null,
                listType: null,
                marketPlaceOrderId: '',
                orderId: 'v500970llux-01',
                orderIsComplete: true,
                origin: 'Marketplace',
                paymentNames: null,
                salesChannel: '1',
                sequence: '500970',
                status: 'invoiced',
                statusDescription: 'Faturado',
                totalItems: 0,
                totalValue: 1799,
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
                clientName: 'Cunha VTEX',
                creationDate: '2016-08-17T18:35:04.8659804+00:00',
                currencyCode: null,
                items: [
                  {
                    description: 'Botin Futbol Adidas 11Questra Fg Cesped Hombre Absolut - M',
                    ean: 'absolutm',
                    id: '549',
                    price: 1000,
                    productId: '9',
                    quantity: 1,
                    refId: null,
                    seller: '1',
                    sellingPrice: 1000,
                  },
                ],
                lastMessageUnread: null,
                listId: null,
                listType: null,
                marketPlaceOrderId: '',
                orderId: 'v500890llux-01',
                orderIsComplete: true,
                origin: 'Marketplace',
                paymentNames: null,
                salesChannel: '1',
                sequence: '500890',
                status: 'canceled',
                statusDescription: 'Cancelado',
                totalItems: 0,
                totalValue: 1000,
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
                clientName: 'Cunha VTEX',
                creationDate: '2016-07-29T00:20:47.7736718+00:00',
                currencyCode: null,
                items: [
                  {
                    description: 'Rooibos Lavanda - Pouch - 50gr',
                    ean: '198',
                    id: '98',
                    price: 5200,
                    productId: '1000025',
                    quantity: 1,
                    refId: '10098',
                    seller: '1',
                    sellingPrice: 5200,
                  },
                ],
                lastMessageUnread: null,
                listId: null,
                listType: null,
                marketPlaceOrderId: '',
                orderId: 'v500838llux-01',
                orderIsComplete: true,
                origin: 'Marketplace',
                paymentNames: null,
                salesChannel: '1',
                sequence: '500838',
                status: 'canceled',
                statusDescription: 'Cancelado',
                totalItems: 0,
                totalValue: 6200,
                workflowInErrorState: false,
                workflowInRetry: false,
              },
            ],
            paging: { currentPage: 1, pages: 10, perPage: 2, total: 19 },
            stats: {
              stats: {
                totalItems: {
                  Count: 19,
                  Facets: {},
                  Max: 0,
                  Mean: 0,
                  Min: 0,
                  Missing: 0,
                  StdDev: 0,
                  Sum: 0,
                  SumOfSquares: 0,
                },
                totalValue: {
                  Count: 19,
                  Facets: {},
                  Max: 0,
                  Mean: 0,
                  Min: 0,
                  Missing: 0,
                  StdDev: 0,
                  Sum: 0,
                  SumOfSquares: 0,
                },
              },
            },
          },
        },
      },
    },
  },
})

export const getApiOmsUserOrdersOrderIdRoute = createRoute({
  method: 'get',
  path: '/api/oms/user/orders/{orderId}',
  tags: ['User orders'],
  summary: 'Retrieve user order details',
  description:
    "Lists all details from a user's order, through client's perspective. \r\n\r\n> Note that these requests are meant to be made by **Call center operator** profiles. Otherwise, they will return only orders from the same email making the request.",
  operationId: 'Userorderdetails',
  request: {
    query: z.object({
      clientEmail: z
        .string()
        .openapi({
          param: {
            description: 'Customer email.',
            explode: true,
            in: 'query',
            name: 'clientEmail',
            required: true,
            schema: { example: 'customer@mail.com', type: 'string' },
            style: 'form',
          },
          example: 'customer@mail.com',
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
      orderId: z
        .string()
        .openapi({
          param: {
            description: 'Order ID is a unique code that identifies an order.',
            in: 'path',
            name: 'orderId',
            required: true,
            schema: { example: '1172452900788-01', type: 'string' },
            style: 'simple',
          },
          example: '1172452900788-01',
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: UserorderdetailsSchema,
          example: {
            affiliateId: 'GHB',
            allowCancellation: true,
            allowEdition: false,
            authorizedDate: '2019-01-28T20:33:04+00:00',
            callCenterOperatorData: null,
            cancelReason: 'The size was too big.',
            cancellationData: {
              CancellationDate: '2022-10--05T15:40:33',
              Reason: 'Item was too big in the client.',
              RequestedByPaymentNotification: false,
              RequestedBySellerNotification: false,
              RequestedBySystem: false,
              RequestedByUser: true,
            },
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
                    orderId: 'v502556llux-01',
                    receipt: '029f9ab8-751a-4b1e-bf81-7dd25d14b49b',
                  },
                },
              ],
              id: 'changeAttachment',
            },
            checkedInPickupPointId: 'storeNameExample_901',
            clientPreferencesData: { locale: 'en-US', optinNewsLetter: false },
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
              lastName: 'Cunha',
              phone: '+5521972321094',
              stateInscription: null,
              tradeName: null,
              userProfileId: '5a3692de-358a-4bea-8885-044bce33bb93',
            },
            commercialConditionData: null,
            creationDate: '2019-01-28T20:09:43.899958+00:00',
            customData: null,
            followUpEmail: '7bf3a59bbc56402c810bda9521ba449e@ct.vtex.com.br',
            giftRegistryData: null,
            hostname: 'luxstore',
            invoiceData: null,
            invoicedDate: null,
            isCheckedIn: false,
            isCompleted: true,
            itemMetadata: {
              Items: [
                {
                  AssemblyOptions: [
                    {
                      Composition: {},
                      Id: 'vtex.subscription.plan-ana',
                      InputValues: {
                        'vtex.subscription.key.frequency': {
                          Domain: ['4 month', '1 month'],
                          MaximumNumberOfCharacters: 8,
                        },
                      },
                      Name: 'vtex.subscription.plan-ana',
                      Required: false,
                    },
                  ],
                  DetailUrl: '/catfood/p',
                  Ean: '43673557',
                  Id: '18',
                  ImageUrl:
                    'http://store.vteximg.com.br/ids/155392-55-55/AlconKOI.jpg?v=635918402228600000',
                  Name: 'Cat food',
                  ProductId: '6',
                  RefId: '105',
                  Seller: '1',
                  SkuName: 'Cat food',
                },
              ],
            },
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
                assemblies: [],
                attachmentOfferings: [
                  {
                    name: 'vtex.subscription.weekly',
                    required: false,
                    schema: {
                      'vtex.subscription.key.frequency': {
                        Domain: ['1 week', ' 2 week', ' 3 week', ' 4 week'],
                        MaximumNumberOfCharacters: 7,
                      },
                    },
                  },
                ],
                attachments: [],
                bundleItems: [],
                callCenterOperator: 'callCenterOp5473869',
                commission: 0,
                components: [],
                costPrice: 52,
                detailUrl: '/bay-max-9429485/p',
                ean: '3256873',
                freightCommission: 0,
                id: '1234568358',
                imageUrl:
                  'http://luxstore.vteximg.com.br/arquivos/ids/159263-55-55/image-cc1aed75cbfa424a85a94900be3eacec.jpg?v=636795432619830000',
                isGift: false,
                itemAttachment: { content: {}, name: null },
                listPrice: 3290,
                lockId: '00-v502556llux-01',
                manualPrice: null,
                measurementUnit: 'un',
                name: 'Bay Max L',
                offerings: [],
                params: [],
                parentAssemblyBinding: null,
                parentItemIndex: null,
                preSaleDate: null,
                price: 3290,
                priceDefinitions: {
                  calculatedSellingPrice: 99,
                  sellingPrices: [{ quantity: 1, value: 99 }],
                  total: 99,
                },
                priceTags: [],
                priceValidUntil: null,
                productId: '9429485',
                quantity: 1,
                refId: 'BIGHEROBML',
                rewardValue: 0,
                seller: '1',
                sellerSku: '1234568358',
                sellingPrice: 3290,
                serialNumbers: '3',
                shippingPrice: null,
                tax: 0,
                taxCode: null,
                uniqueId: '87F0945396994B349158C7D9C9941442',
                unitMultiplier: 1,
              },
            ],
            lastChange: '2019-02-06T20:46:11.7010747+00:00',
            lastMessage: null,
            marketingData: {
              coupon: 'sale',
              id: 'marketingData',
              marketingTags: ['vtex-subscription'],
              utmCampaign: 'christmas',
              utmMedium: 'utm medium name',
              utmPartner: 'utm partner name',
              utmSource: 'fb',
              utmiCampaign: ' ',
              utmiPart: ' ',
              utmipage: ' ',
            },
            marketplace: {
              baseURL: 'http://oms.vtexinternal.com.br/api/oms?an=luxstore',
              isCertified: null,
              name: 'luxstore',
            },
            marketplaceItems: [],
            marketplaceOrderId: '',
            marketplaceServicesEndpoint: 'http://oms.vtexinternal.com.br/api/oms?an=luxstore',
            merchantName: 'luxstore',
            openTextField: null,
            orderFormId: 'caae7471333e403f959fa5fd66951340',
            orderGroup: 'v502556lspt',
            orderId: '1172452900788-01',
            origin: 'Marketplace',
            packageAttachment: { packages: [] },
            paymentData: {
              giftCards: [],
              transactions: [
                {
                  isActive: true,
                  merchantName: 'luxstore',
                  payments: [
                    {
                      accountId: '5BC5C6B417FE432AB971B1D399F190C9',
                      bankIssuedInvoiceBarCodeNumber: '325349573975945245345439573421443986734065',
                      bankIssuedInvoiceBarCodeType: 'i25',
                      bankIssuedInvoiceIdentificationNumber:
                        '23797770100000019003099260100022107500729050',
                      bankIssuedInvoiceIdentificationNumberFormatted:
                        '32534.95739 75945.24534 54395.734214 5',
                      billingAddress: {},
                      cardHolder: null,
                      cardNumber: null,
                      connectorResponses: {
                        Message: 'logMessage',
                        ReturnCode: '200',
                        Tid: '94857956',
                        authId: '857956',
                      },
                      cvv2: null,
                      dueDate: '2019-02-02',
                      expireMonth: null,
                      expireYear: null,
                      firstDigits: null,
                      giftCardAsDiscount: false,
                      giftCardCaption: null,
                      giftCardId: null,
                      giftCardName: null,
                      giftCardProvider: 'presentCard',
                      group: 'bankInvoice',
                      id: 'D3DEECAB3C6C4B9EAF8EF4C1FE062FF3',
                      installments: 1,
                      koinUrl: 'koinURL',
                      lastDigits: null,
                      parentAccountId: '5BC5C6B417FE432AB971B1D399F190C9',
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
            sellerOrderId: '00-v502556llux-01',
            sellers: [
              {
                fulfillmentEndpoint:
                  'http://fulfillment.vtexcommerce.com.br/api/fulfillment?an=accountName',
                id: '1',
                logo: 'https://sellersLogo/images.png',
                name: 'Lux Store',
              },
            ],
            sequence: '502556',
            shippingData: {
              address: {
                addressId: '-1425945657910',
                addressType: 'residential',
                city: 'Rio de Janeiro',
                complement: '10',
                country: 'BRA',
                entityId: 'eabfb564-99d6-40d8-bd6c-bddbd4990aad',
                geoCoordinates: [],
                neighborhood: 'Botafogo',
                number: '518',
                postalCode: '22250-040',
                receiverName: 'Rodrigo Cunha',
                reference: null,
                state: 'RJ',
                street: 'Praia de Botafogo',
                versionId: 'e9c3bec2-125d-4b96-a021-316c3aa9f14f',
              },
              id: 'shippingData',
              logisticsInfo: [
                {
                  addressId: '-1425945657910',
                  deliveryChannel: 'delivery',
                  deliveryChannels: [{ id: 'delivery', stockBalance: 0 }],
                  deliveryCompany: 'Todos os CEPS',
                  deliveryIds: [
                    {
                      accountCarrierName: 'recorrenciaqa',
                      courierId: '197a56f',
                      courierName: 'Todos os CEPS',
                      dockId: '1',
                      kitItemDetails: [],
                      quantity: 1,
                      warehouseId: '1_1',
                    },
                  ],
                  deliveryWindow: null,
                  entityId: 'eabfb564-99d6-40d8-bd6c-bddbd4990aad',
                  itemIndex: 0,
                  listPrice: 1160,
                  lockTTL: '10d',
                  pickupPointId: '1_VTEX-RJ',
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
                      lockTTL: '12d',
                      name: 'Normal',
                      pickupDistance: 0,
                      pickupPointId: '1_VTEX-RJ',
                      pickupStoreInfo: {
                        additionalInfo: null,
                        address: null,
                        dockId: null,
                        friendlyName: null,
                        isPickupStore: false,
                      },
                      polygonName: 'region196',
                      price: 1160,
                      shippingEstimate: '5bd',
                      transitTime: '3d',
                    },
                    {
                      deliveryChannel: 'delivery',
                      deliveryWindow: null,
                      id: 'Expressa',
                      lockTTL: '12d',
                      name: 'Expressa',
                      pickupDistance: 0,
                      pickupPointId: '1_VTEX-RJ',
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
                      transitTime: '3d',
                    },
                    {
                      deliveryChannel: 'delivery',
                      deliveryWindow: null,
                      id: 'Quebra Kit',
                      lockTTL: '12d',
                      name: 'Quebra Kit',
                      pickupDistance: 0,
                      pickupPointId: '1_VTEX-RJ',
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
                      transitTime: '3d',
                    },
                    {
                      deliveryChannel: 'delivery',
                      deliveryWindow: null,
                      id: 'Sob Encomenda',
                      lockTTL: '12d',
                      name: 'Sob Encomenda',
                      pickupDistance: 0,
                      pickupPointId: '1_VTEX-RJ',
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
                      transitTime: '3d',
                    },
                  ],
                  transitTime: '3d',
                  versionId: 'e9c3bec2-125d-4b96-a021-316c3aa9f14f',
                },
              ],
              selectedAddresses: [
                {
                  addressId: '-1425945657910',
                  addressType: 'residential',
                  city: 'Rio de Janeiro',
                  complement: '10',
                  country: 'BRA',
                  entityId: 'eabfb564-99d6-40d8-bd6c-bddbd4990aad',
                  geoCoordinates: [],
                  neighborhood: 'Botafogo',
                  number: '518',
                  postalCode: '22250-040',
                  receiverName: 'Rodrigo Cunha',
                  reference: null,
                  state: 'RJ',
                  street: 'Praia de Botafogo',
                  versionId: 'e9c3bec2-125d-4b96-a021-316c3aa9f14f',
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
            subscriptionData: {
              SubscriptionGroupId: 'A64AC73C0FB8693A7ADB4AC69CA4FD5F',
              Subscriptions: [
                {
                  ExecutionCount: 724,
                  ItemIndex: 0,
                  Plan: {
                    frequency: { interval: 1, periodicity: 'DAILY' },
                    type: 'RECURRING_PAYMENT',
                    validity: {
                      begin: '2022-01-10T00:00:00.0000000+00:00',
                      end: '2024-02-03T00:00:00.0000000+00:00',
                    },
                  },
                  PriceAtSubscriptionDate: 100,
                },
              ],
            },
            taxData: {
              areTaxesDesignatedByMarketplace: true,
              taxInfoCollection: [
                {
                  itemIndex: 0,
                  priceTags: [
                    {
                      isPercentual: false,
                      name: 'Taxes (Magazine Luisa)',
                      rawValue: 'COLOCAR_O_VALOR_SEM_DECIMAL',
                    },
                  ],
                  sku: 'COLOCAR_O_SKUID',
                },
              ],
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

export const postApiOrdersExpressionsJsonataRoute = createRoute({
  method: 'post',
  path: '/api/orders/expressions/jsonata',
  tags: ['Feed v3'],
  summary: 'Test JSONata expression',
  description:
    "This endpoint allows you to test a JSON document with a JSONata expression, returning `true` if the document meets the criteria posed in the expression, or `false` if it does not.\n\r\n\rSince JSONata expressions can be used to filter order updates in the [Orders API feed and hook](https://developers.vtex.com/docs/guides/orders-feed), this endpoint can be used to test an expression's results before configuring the [feed or hook](https://developers.vtex.com/docs/guides/orders-feed).\n\r\n\rLearn more about how to use JSONata expressions, in the [JSONata documentation](https://docs.jsonata.org/overview.html).",
  operationId: 'TestJSONataExpression',
  request: {
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
            description: 'Type of the content being sent',
            in: 'header',
            name: 'Content-Type',
            required: true,
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: TestJSONataExpressionSchema,
          example: {
            Document: '{\\"status\\":\\"canceled\\"}',
            Expression: 'status = \\"canceled\\"',
          },
        },
      },
    },
  },
  responses: { 200: { description: 'OK', content: {} } },
})

export const getApiOrdersFeedRoute = createRoute({
  method: 'get',
  path: '/api/orders/feed',
  tags: ['Feed v3'],
  summary: 'Retrieve feed items',
  description:
    'Retrieve items from [feed](https://developers.vtex.com/docs/guides/orders-feed) queue. \n\r\nThe event will be removed if the message `send retry` is equal to, or greater than the maximum retention period.\r\n\r\n> This API will return `404 Not Found` if there is no [Feed Configuration](https://developers.vtex.com/docs/guides/orders-feed) available for the given X-VTEX-API-AppKey.',
  operationId: 'Getfeedorderstatus1',
  request: {
    query: z.object({
      maxlot: z
        .string()
        .default('{{maxLot}}')
        .openapi({
          param: {
            description: 'Lot quantity to retrieve. Maximum accepted value is 10.',
            explode: true,
            in: 'query',
            name: 'maxlot',
            required: true,
            schema: { default: '{{maxLot}}', type: 'string' },
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
            description: 'Type of the content being sent',
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
          schema: z.array(GetfeedorderstatusSchema),
          example: [
            {
              currentChange: '2019-08-12T20:54:23.7153839Z',
              domain: 'Fulfillment',
              eventId: 'ED423DDED4C1AE580CADAC1A4D02DA3F',
              handle:
                'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoidnRleGFwcGtleS1wYXJ0bmVyc2xhdGFtLVJNQkpNUyIsIkFwcEtleSI6InZ0ZXhhcHBrZXktcGFydG5lcnNsYXRhbS1STUJKTVMiLCJBY2NvdW50IjoicGFydG5lcnNsYXRhbSIsIkhhbmRsZSI6IkFRRUIzbmtWR0piOXhhNGRjYlpkOTFVVWMyL2JObHc0Qnp3ZlNLV201Rjg2QXgrSGlRM053bEJkb2NwM2wvVytLdjFNQTZ4d3ZLcFYwYjlSeUttNVRpb3hrSVFMSG1Uck9xenB2aFlwU29uMzRrVmlNaWZHY2lnZFFqalBJdk00eWU4amVuaS9QKytaTmVxOFZWeFNGay81Yzg3YS84MTRjTFg2WGZPR2x2WitlTnVjTzA3S3UxK0xXaU5vQmJEY0cycGxKekxkRks3Qld3b1NTV3BmSWhrOGhmSFNkSzlzZVpJeG01QXFLbHFrUHNDNGk5emVaYVpBUVVrSi9aZWo3UjRrRDVRaXFjNmpjcnFheEdHc1lsNHMzUWM0ZmtWdmhYblJVQ2l2ZGdpMEtUYS8zcXlWWU9QTktIV2huTlZxMEZHNDNjME4vaWh6dDc0d1laNVl6aDFJRitHU2t1YTkrN1pCdnQ2VGs1cFRhZmVVclk0ckNPL2Fobnl1eXFLOG53ZkorVWxUTmt2ZVNFS29FdTNiUWQzSmc5R1lYWHlXOVVxRGo5dHJIZ1N5M3ZZa0dBWjd0MDZNZWUwQnBsdFBxWExaIiwiT3JkZXJJZCI6Ijk1MzcxMjAwNDEyNi0wMSIsIk1lc3NhZ2VJZCI6ImI5YjI4NDkwLTNjNzAtNDdjNi1hMTE3LWNhN2FjMTk2MDY1OSIsIkRvbWFpbiI6IkZ1bGZpbGxtZW50IiwiU3RhdGUiOiJyZWFkeS1mb3ItaGFuZGxpbmciLCJMYXN0U3RhdGUiOiJ3aW5kb3ctdG8tY2FuY2VsIiwiTGFzdENoYW5nZSI6IjA4LzEyLzIwMTkgMjA6NTQ6MDEiLCJDdXJyZW50Q2hhbmdlIjoiMDgvMTIvMjAxOSAyMDo1NDoyMyIsIkNyZWF0ZWRBdCI6IjA4LzEyLzIwMTkgMjE6MDE6MzAiLCJpc3MiOiJicm9hZGNhc3QtYXBpLnZ0ZXhjb21tZXJjZS5jb20uYnIiLCJhdWQiOiJwYXJ0bmVyc2xhdGFtX3Z0ZXhhcHBrZXktcGFydG5lcnNsYXRhbS1STUJKTVMifQ.7RQBZQb6pHhFhA_jMKTiSoJbDck7awgD3Xx7sdJcW6w',
              lastChange: '2019-08-12T20:54:01.134057Z',
              lastState: 'window-to-cancel',
              orderId: '953712004126-01',
              state: 'ready-for-handling',
            },
          ],
        },
      },
    },
  },
})

export const postApiOrdersFeedRoute = createRoute({
  method: 'post',
  path: '/api/orders/feed',
  tags: ['Feed v3'],
  summary: 'Commit feed items',
  description:
    'Commit items in the [feed](https://developers.vtex.com/docs/guides/orders-feed) queue.',
  operationId: 'Commititemfeedorderstatus',
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
      content: {
        'application/json': {
          schema: CommititemfeedorderstatusRequestSchema,
          example: {
            handles: [
              'AQEBSM/bSqonHYtx+UrHdbuJ0i7M9yMbI2jtYwMIPdEc4BenuneaCTC9VEJ3dgAy1XtfQvHBvgwZTO8LvGObIKNqiKXDZiMKY25vK+pblZEqf1pWdLMugu5XoHA5ZAd4IcBcXrBcrlr1GU8uvPEBoVLOsVBP9IAxIZkkeEedIDg3K6GPyEXVuPlTEYb/0OCunEGxWF+AZ1frFdXh7ulORTcuqO5oDlBGbpD+QYzCmF4mUZtQ0VVWh9icM1QBVh6PlJ0D/lfwnJKWpBn3jf8c+DTm7sD7wb1Lcz9uWMLhDtPwvH9vue4MvKU9sCahEQe7K5jWuwwb54szGbFKdfcACsTSQ9WlyBfMdbV83c27k68G3cnaBFExkC1MLHHE9UzpQ6l4s43BT4k95ocgMXffnj/HMUYXn+OCvlvjytY59x1OCRE=',
            ],
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: 'OK', content: { 'text/plain': { schema: z.looseObject({}) } } },
  },
})

export const getApiOrdersFeedConfigRoute = createRoute({
  method: 'get',
  path: '/api/orders/feed/config',
  tags: ['Feed v3'],
  summary: 'Get feed configuration',
  description:
    "The Orders Feed v3 is the best way to create order integrations. Below you can find details on the configuration API specification, and to know more see our [Feed v3 guide](https://developers.vtex.com/vtex-rest-api/docs/orders-feed) and our [order integration guide](https://developers.vtex.com/vtex-rest-api/docs/erp-integration-set-up-order-integration).\n\r\n> 📘 Onboarding guide \r\n>\r\n> Check the new [Orders onboarding guide](https://developers.vtex.com/vtex-rest-api/docs/orders-overview). We created this guide to improve the onboarding experience for developers at VTEX. It assembles all documentation on our Developer Portal about Orders and is organized by focusing on the developer's journey.\r\n\r\n",
  operationId: 'GetFeedConfiguration',
  request: {
    headers: z.object({
      'Content-Type': z
        .string()
        .default('application/json')
        .openapi({
          param: {
            description: 'Type of the content being sent',
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
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              approximateAgeOfOldestMessageInSeconds: z
                .number()
                .exactOptional()
                .openapi({
                  description:
                    'Aproximate age of the oldest message in the feed, measured in seconds.',
                }),
              filter: z
                .object({
                  disableSingleFire: z
                    .boolean()
                    .exactOptional()
                    .openapi({
                      description:
                        'Sets a limit to how many times a specific order shows on the feed, after it first meets filtering conditions. Using the `FromOrders` type configuration with JSONata filtering expressions might cause orders to appear more than once on a feed, whenever changes are made to that order. If this field is `false` orders will appear in the feed only once.',
                    }),
                  expression: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description:
                        'JSONata query expression that defines what conditions must be met for an order to be included in the feed. This should only be used in case `type` is `FromOrders`.',
                    }),
                  status: z
                    .array(
                      z
                        .string()
                        .openapi({ description: 'Order status to be filtered in the feed.' }),
                    )
                    .exactOptional()
                    .openapi({
                      description:
                        'List of order statuses that should be included in the feed. This should only be used in case `type` is `FromWorkflow`.',
                    }),
                  type: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description:
                        'Determines what orders appear in the feed and how they are filtered. If a feed has the `FromWorkflow` type configuration, it will receive order updates only when order’s statuses change and orders can be filtered by status, using the `status` field. A feed with the `FromOrders` type configuration gets updates whenever any change is made to an order. in this case, orders can be filtered by any property, according to JSONata expressions set in the `expression` field.',
                    }),
                })
                .exactOptional()
                .openapi({
                  description: 'Information on how orders are filtered to show on the feed.',
                  required: [],
                }),
              quantity: z
                .int()
                .exactOptional()
                .openapi({
                  description:
                    'Current number of messages in the feed, including messages that may not be visible due to time out after retrieval.',
                }),
              queue: z
                .object({
                  MessageRetentionPeriodInSeconds: z
                    .int()
                    .exactOptional()
                    .openapi({
                      description:
                        'Maximum life span of an order update after it gets to the feed. When a feed item is on the feed for this period of time, it is removed from the feed. Measured in seconds.',
                    }),
                  visibilityTimeoutInSeconds: z
                    .int()
                    .exactOptional()
                    .openapi({
                      description:
                        'Period of time for which an item is not visible in the feed after it has been retrieved with the Get feed items request. Measured in seconds.',
                    }),
                })
                .exactOptional()
                .openapi({
                  description: 'Information that define the functioning of the queue.',
                  required: [],
                }),
            })
            .openapi({
              example: {
                filter: {
                  disableSingleFire: false,
                  expression: 'status = "payment-pending"',
                  type: 'FromOrders',
                },
                queue: { messageRetentionPeriodInSeconds: 345600, visibilityTimeoutInSeconds: 240 },
              },
              required: [],
            }),
        },
      },
    },
  },
})

export const postApiOrdersFeedConfigRoute = createRoute({
  method: 'post',
  path: '/api/orders/feed/config',
  tags: ['Feed v3'],
  summary: 'Create or update feed configuration',
  description:
    'The Orders Feed v3 is the best way to create order integrations. Below you can find details on the configuration API specification, and to know more see our [Feed v3 guide](https://developers.vtex.com/vtex-rest-api/docs/orders-feed) and our [order integration guide](https://developers.vtex.com/vtex-rest-api/docs/erp-integration-set-up-order-integration)\n\r\n\rThere are two types of filtering that can be used. The `FromWorkflow` type filters orders by status, whereas the `FromOrders` type uses JSONata expressions to filter orders according to any property in the orders JSON document. This enables stores to filter delivered orders and orders in which products have been added or removed, for example. To learn more, access the [JSONata documentation](https://docs.jsonata.org/overview.html) and test filtering JSONata expressions with our [Test JSONata expression](https://developers.vtex.com/docs/api-reference/orders-api#post-/api/orders/expressions/jsonata) endpoint.',
  operationId: 'FeedConfiguration',
  request: {
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
          schema: FeedConfigurationRequestSchema,
          example: {
            filter: { disableSingleFire: false, expression: 'value > 100', type: 'FromOrders' },
            queue: { MessageRetentionPeriodInSeconds: 345600, visibilityTimeoutInSeconds: 250 },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success' },
    403: { description: 'The credentials are not enabled to access the service' },
    404: { description: 'Value not found' },
    429: { description: 'Too many requests' },
  },
})

export const deleteApiOrdersFeedConfigRoute = createRoute({
  method: 'delete',
  path: '/api/orders/feed/config',
  tags: ['Feed v3'],
  summary: 'Delete feed configuration',
  description:
    'Deletes the configuration set up in [Feed v3](https://developers.vtex.com/docs/guides/orders-feed).',
  operationId: 'FeedConfigurationDelete',
  request: {
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
  responses: {
    200: { description: 'OK' },
    400: { description: 'Bad request - Unable to check address / Only https scheme is accepted' },
    403: { description: 'The credentials are not enabled to access the service' },
    404: { description: 'Value not found' },
    429: { description: 'Too many requests' },
  },
})

export const getApiOrdersHookConfigRoute = createRoute({
  method: 'get',
  path: '/api/orders/hook/config',
  tags: ['Order hook'],
  summary: 'Get hook configuration',
  description:
    "Retrieves a given hook's configuration details. Learn more with the [orders hook guide](https://developers.vtex.com/vtex-rest-api/docs/orders-feed#hook). \r\n\r\n> 📘 Onboarding guide \r\n>\r\n> Check the new [Orders onboarding guide](https://developers.vtex.com/vtex-rest-api/docs/orders-overview). We created this guide to improve the onboarding experience for developers at VTEX. It assembles all documentation on our Developer Portal about Orders and is organized by focusing on the developer's journey.\r\n\r\n",
  operationId: 'GetHookConfiguration',
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
      clientEmail: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Customer email.',
            explode: true,
            in: 'query',
            name: 'clientEmail',
            required: false,
            schema: { example: 'customer@mail.com', type: 'string' },
            style: 'form',
          },
          example: 'customer@mail.com',
        }),
      page: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Page number for result pagination.',
            explode: true,
            in: 'query',
            name: 'page',
            required: false,
            schema: { example: '10', type: 'string' },
            style: 'form',
          },
          example: '10',
        }),
      per_page: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Page quantity for result pagination.',
            explode: true,
            in: 'query',
            name: 'per_page',
            required: false,
            schema: { example: '15', type: 'string' },
            style: 'form',
          },
          example: '15',
        }),
    }),
  },
  responses: { 200: { description: 'OK', headers: z.object({}) } },
})

export const postApiOrdersHookConfigRoute = createRoute({
  method: 'post',
  path: '/api/orders/hook/config',
  tags: ['Order hook'],
  summary: 'Create or update hook configuration',
  description:
    'Configures filtering rules applied to orders hook. Learn more with the [orders hook guide](https://developers.vtex.com/vtex-rest-api/docs/orders-feed#hook).\n\r\n\rThere are two types of filtering that can be used: \n\r\n\r - `FromWorkflow`: filters orders by status.\n\r\n\r - `FromOrders`: uses JSONata expressions to filter orders according to any property in the orders JSON document.\n\r\n\r This enables stores to filter delivered orders and orders in which products have been added or removed, for example.\n\r\n\rTo learn more, access the [JSONata documentation](https://docs.jsonata.org/overview.html) and test filtering JSONata expressions with our [expressions API](https://developers.vtex.com/docs/api-reference/orders-api#post-/api/orders/expressions/jsonata).',
  operationId: 'HookConfiguration',
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
      content: {
        'application/json': {
          schema: HookConfigurationRequestSchema,
          example: {
            filter: { disableSingleFire: false, expression: 'value > 100', type: 'FromOrders' },
            hook: { headers: { key: 'value' }, url: 'https://endpoint.example/path' },
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
          schema: HookConfigurationSchema,
          example: {
            CurrentChange: '2019-08-14T17:12:48.0965893Z',
            Domain: 'Fulfillment',
            LastChange: '2019-08-14T17:11:39.2550122Z',
            LastState: 'window-to-cancel',
            OrderId: 'v52277740atmc-01',
            Origin: { Account: 'automacaoqa', Key: 'vtexappkey-appvtex' },
            State: 'ready-for-handling',
          },
        },
      },
    },
  },
})

export const deleteApiOrdersHookConfigRoute = createRoute({
  method: 'delete',
  path: '/api/orders/hook/config',
  tags: ['Order hook'],
  summary: 'Delete hook configuration',
  description:
    'Deletes a given hook configuration.\n\r\n\rLearn more with the [orders hook guide](https://developers.vtex.com/vtex-rest-api/docs/orders-feed#hook).',
  operationId: 'DeleteHookConfiguration',
  request: {
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
  responses: {
    200: { description: 'Success' },
    403: { description: 'The credentials are not enabled to access the service' },
    404: { description: 'Value not found' },
    429: { description: 'Too many requests' },
  },
})
