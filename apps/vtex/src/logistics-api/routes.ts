import { createRoute, z } from '@hono/zod-openapi'

const AddressSchema = z
  .object({
    city: z.string(),
    complement: z.string(),
    coordinates: z.string().nullable(),
    country: z
      .object({ acronym: z.string(), name: z.string() })
      .openapi({
        example: { acronym: 'BRA', name: 'Brazil' },
        required: ['acronym', 'name'],
        title: 'Country',
      }),
    neighborhood: z.string(),
    number: z.string(),
    postalCode: z.string(),
    state: z.string(),
    street: z.string(),
  })
  .openapi({
    example: {
      city: 'Rio de Janeiro',
      complement: '',
      coordinates: null,
      country: { acronym: 'BRA', name: 'Brazil' },
      neighborhood: 'Catete',
      number: '100',
      postalCode: '22220070',
      state: 'RJ',
      street: 'Artur Bernardes Street',
    },
    required: [
      'postalCode',
      'country',
      'city',
      'state',
      'neighborhood',
      'street',
      'number',
      'complement',
      'coordinates',
    ],
    title: 'Address',
  })
  .openapi('Address')

const Address1Schema = z
  .object({
    city: z.string(),
    complement: z.string(),
    coordinates: z.array(z.array(z.number())),
    country: z
      .object({ acronym: z.string(), name: z.string() })
      .openapi({
        example: { acronym: 'BRA', name: 'Brazil' },
        required: ['acronym', 'name'],
        title: 'Country',
      }),
    neighborhood: z.string(),
    number: z.string(),
    postalCode: z.string(),
    state: z.string(),
    street: z.string(),
  })
  .openapi({
    example: {
      city: 'Rio de Janeiro',
      complement: '',
      coordinates: [[-43.18228090000002, -22.9460398]],
      country: { acronym: 'BRA', name: 'Brazil' },
      neighborhood: 'Catete',
      number: '100',
      postalCode: '22220070',
      state: 'RJ',
      street: 'Artur Bernardes Street',
    },
    required: [
      'postalCode',
      'country',
      'city',
      'state',
      'neighborhood',
      'street',
      'number',
      'complement',
      'coordinates',
    ],
    title: 'Address1',
  })
  .openapi('Address1')

const Address2Schema = z
  .object({
    city: z.string(),
    complement: z.string(),
    country: z
      .object({ acronym: z.string(), name: z.string() })
      .openapi({
        example: { acronym: 'BRA', name: 'Brazil' },
        required: ['acronym', 'name'],
        title: 'Country',
      }),
    location: z
      .object({ latitude: z.number(), longitude: z.number() })
      .openapi({
        example: { latitude: -22.974477767944336, longitude: -43.18672561645508 },
        required: ['latitude', 'longitude'],
        title: 'Location5',
      }),
    neighborhood: z.string(),
    number: z.string(),
    postalCode: z.string(),
    reference: z.string().nullable(),
    state: z.string(),
    street: z.string(),
  })
  .openapi({
    example: {
      city: 'Rio de Janeiro',
      complement: '',
      country: { acronym: 'BRA', name: 'Brazil' },
      location: { latitude: -22.974477767944336, longitude: -43.18672561645508 },
      neighborhood: 'Copacabana',
      number: '',
      postalCode: '22070002',
      reference: null,
      state: 'RJ',
      street: 'Avenida Atl├óntica',
    },
    required: [
      'postalCode',
      'country',
      'city',
      'state',
      'neighborhood',
      'street',
      'number',
      'complement',
      'reference',
      'location',
    ],
    title: 'Address2',
  })
  .openapi('Address2')

const Address4Schema = z
  .object({
    city: z.string(),
    complement: z.string(),
    country: z
      .object({ acronym: z.string(), name: z.string() })
      .openapi({
        example: { acronym: 'BRA', name: 'Brazil' },
        required: ['acronym', 'name'],
        title: 'Country',
      }),
    location: z
      .object({ latitude: z.number(), longitude: z.number() })
      .openapi({
        example: { latitude: -22.974477767944336, longitude: -43.18672561645508 },
        required: ['latitude', 'longitude'],
        title: 'Location5',
      }),
    neighborhood: z.string(),
    number: z.string(),
    postalCode: z.string(),
    state: z.string(),
    street: z.string(),
  })
  .openapi({
    example: {
      city: 'Rio de Janeiro',
      complement: '',
      country: { acronym: 'BRA', name: 'Brazil' },
      location: { latitude: -22.92860984802246, longitude: -22.92860984802246 },
      neighborhood: 'Catete',
      number: '',
      postalCode: '22220070',
      state: 'RJ',
      street: 'Rua Artur Bernardes',
    },
    required: [
      'postalCode',
      'country',
      'city',
      'state',
      'neighborhood',
      'street',
      'number',
      'complement',
      'location',
    ],
    title: 'Address4',
  })
  .openapi('Address4')

const BalanceSchema = z
  .object({
    hasUnlimitedQuantity: z.boolean(),
    reservedQuantity: z.int32(),
    totalQuantity: z.int32(),
    warehouseId: z.string(),
    warehouseName: z.string(),
  })
  .openapi({
    example: {
      hasUnlimitedQuantity: false,
      reservedQuantity: 9,
      totalQuantity: 101,
      warehouseId: '1937054',
      warehouseName: 'Estoque A',
    },
    required: [
      'warehouseId',
      'warehouseName',
      'totalQuantity',
      'reservedQuantity',
      'hasUnlimitedQuantity',
    ],
    title: 'Balance',
  })
  .openapi('Balance')

const BusinessHourSchema = z
  .object({ closingTime: z.string(), dayOfWeek: z.int32(), openingTime: z.string() })
  .openapi({
    example: { closingTime: '20:00:00', dayOfWeek: 1, openingTime: '08:00:00' },
    required: ['dayOfWeek', 'openingTime', 'closingTime'],
    title: 'BusinessHour',
  })
  .openapi('BusinessHour')

const CalculateSLARequestSchema = z
  .object({
    items: z
      .array(
        z
          .object({
            additionalHandlingTime: z.string(),
            dimension: z
              .object({ height: z.int32(), length: z.int32(), weight: z.int32(), width: z.int32() })
              .openapi({
                example: { height: 1, length: 1, weight: 150, width: 1 },
                required: ['weight', 'height', 'width', 'length'],
                title: 'Dimension',
              }),
            groupItemId: z.string().nullable(),
            id: z.string(),
            kitItem: z
              .array(
                z
                  .object({
                    additionalHandlingTime: z.string(),
                    dimension: z
                      .object({
                        height: z.int32(),
                        length: z.int32(),
                        weight: z.int32(),
                        width: z.int32(),
                      })
                      .openapi({
                        example: { height: 1, length: 1, weight: 150, width: 1 },
                        required: ['weight', 'height', 'width', 'length'],
                        title: 'Dimension',
                      }),
                    groupItemId: z.string().nullable(),
                    id: z.string(),
                    kitItem: z.array(z.string()).openapi({ description: '' }),
                    price: z.int32(),
                    quantity: z.int32(),
                  })
                  .openapi({
                    example: {
                      additionalHandlingTime: '00:00:00',
                      dimension: { height: 5, length: 17, weight: 150, width: 17 },
                      groupItemId: null,
                      id: '2000042',
                      kitItem: [],
                      price: 0,
                      quantity: 1,
                    },
                    required: [
                      'id',
                      'groupItemId',
                      'kitItem',
                      'quantity',
                      'price',
                      'additionalHandlingTime',
                      'dimension',
                    ],
                    title: 'KitItem',
                  }),
              )
              .openapi({ description: '' }),
            price: z.int32(),
            quantity: z.int32(),
          })
          .openapi({
            example: {
              additionalHandlingTime: '00:00:00',
              dimension: { height: 5, length: 17, weight: 150, width: 17 },
              groupItemId: null,
              id: '1',
              kitItem: [
                {
                  additionalHandlingTime: '00:00:00',
                  dimension: { height: 5, length: 17, weight: 150, width: 17 },
                  groupItemId: null,
                  id: '2000042',
                  kitItem: [],
                  price: 0,
                  quantity: 1,
                },
                {
                  additionalHandlingTime: '00:00:00',
                  dimension: { height: 5, length: 17, weight: 150, width: 17 },
                  groupItemId: null,
                  id: '2390059',
                  kitItem: [],
                  price: 0,
                  quantity: 1,
                },
              ],
              price: 0,
              quantity: 1,
            },
            required: [
              'id',
              'groupItemId',
              'kitItem',
              'quantity',
              'price',
              'additionalHandlingTime',
              'dimension',
            ],
            title: 'Item3',
          }),
      )
      .openapi({ description: '' }),
    location: z
      .object({
        country: z.string(),
        point: z.array(z.number()).openapi({ description: '' }),
        zipCode: z.string(),
      })
      .openapi({
        example: { country: 'BRA', point: [-43.32475950000003, -22.9999575], zipCode: '22780084' },
        required: ['zipCode', 'country', 'point'],
        title: 'Location3',
      }),
    salesChannel: z.string(),
  })
  .openapi({
    example: {
      items: [
        {
          additionalHandlingTime: '00:00:00',
          dimension: { height: 5, length: 17, weight: 150, width: 17 },
          groupItemId: null,
          id: '1',
          kitItem: [
            {
              additionalHandlingTime: '00:00:00',
              dimension: { height: 5, length: 17, weight: 150, width: 17 },
              groupItemId: null,
              id: '2000042',
              kitItem: [],
              price: 0,
              quantity: 1,
            },
            {
              additionalHandlingTime: '00:00:00',
              dimension: { height: 5, length: 17, weight: 150, width: 17 },
              groupItemId: null,
              id: '2390059',
              kitItem: [],
              price: 0,
              quantity: 1,
            },
          ],
          price: 0,
          quantity: 1,
        },
      ],
      location: { country: 'BRA', point: [-43.32475950000003, -22.9999575], zipCode: '22780084' },
      salesChannel: '1',
    },
    required: ['items', 'location', 'salesChannel'],
    title: 'CalculateSLARequest',
  })
  .openapi('CalculateSLARequest')

const CountrySchema = z
  .object({ acronym: z.string(), name: z.string() })
  .openapi({
    example: { acronym: 'BRA', name: 'Brazil' },
    required: ['acronym', 'name'],
    title: 'Country',
  })
  .openapi('Country')

const CreateReservationSchema = z
  .object({
    AuthorizedDateUtc: z.string(),
    CanceledDateUtc: z.string(),
    ConfirmedDateUtc: z.string(),
    Errors: z.array(z.string()).openapi({ description: '' }),
    IsSucess: z.boolean(),
    LastUpdateDateUtc: z.string(),
    LockId: z.string(),
    MaximumConfirmationDateUtc: z.string(),
    PickupPointItemOptions: z.string().nullable(),
    ReservationDateUtc: z.string(),
    SalesChannel: z.string(),
    SlaRequest: z
      .array(
        z
          .object({
            deliveryWindows: z.string().nullable(),
            dockId: z.string(),
            dockTime: z.string(),
            freightTableId: z.string(),
            freightTableName: z.string(),
            item: z
              .object({
                additionalHandlingTime: z.string(),
                dimension: z
                  .object({
                    height: z.number(),
                    length: z.number(),
                    maxSumDimension: z.number(),
                    weight: z.number(),
                    width: z.number(),
                  })
                  .openapi({
                    example: { height: 10, length: 35, maxSumDimension: 0, weight: 800, width: 12 },
                    required: ['weight', 'height', 'width', 'length', 'maxSumDimension'],
                    title: 'Dimension1',
                  }),
                groupItemId: z.string().nullable(),
                id: z.string(),
                kitItem: z.array(z.string()).openapi({ description: '' }),
                modal: z.string().nullable(),
                price: z.number(),
                quantity: z.int32(),
                unlimitedQuantity: z.boolean(),
              })
              .openapi({
                example: {
                  additionalHandlingTime: '00:00:00',
                  dimension: { height: 10, length: 35, maxSumDimension: 0, weight: 800, width: 12 },
                  groupItemId: null,
                  id: '2390059',
                  kitItem: [],
                  modal: null,
                  price: 0,
                  quantity: 1,
                  unlimitedQuantity: false,
                },
                required: [
                  'id',
                  'groupItemId',
                  'quantity',
                  'price',
                  'modal',
                  'additionalHandlingTime',
                  'dimension',
                  'kitItem',
                  'unlimitedQuantity',
                ],
                title: 'Item1',
              }),
            listPrice: z.number(),
            location: z
              .object({
                country: z.string(),
                deliveryPointId: z.string().nullable(),
                inStore: z
                  .object({ IsCheckedIn: z.boolean(), StoreId: z.string() })
                  .openapi({
                    example: { IsCheckedIn: false, StoreId: '180082' },
                    required: ['IsCheckedIn', 'StoreId'],
                    title: 'InStore1',
                  }),
                point: z.string().nullable(),
                zipCode: z.string(),
              })
              .openapi({
                example: {
                  country: 'BRA',
                  deliveryPointId: null,
                  inStore: { IsCheckedIn: false, StoreId: '180082' },
                  point: null,
                  zipCode: '22220070',
                },
                required: ['zipCode', 'country', 'deliveryPointId', 'point', 'inStore'],
                title: 'Location1',
              }),
            pickupStoreInfo: z.string().nullable(),
            promotionalPrice: z.number(),
            slaType: z.string(),
            slaTypeName: z.string(),
            timeToDockPlusDockTime: z.string(),
            totalTime: z.string(),
            transitTime: z.string(),
            wareHouseId: z.string(),
            wmsEndPoint: z.string(),
          })
          .openapi({
            example: {
              deliveryWindows: null,
              dockId: '1_1_1',
              dockTime: '00:00:00',
              freightTableId: '11cc4b6',
              freightTableName: 'Correios PAC',
              item: {
                additionalHandlingTime: '00:00:00',
                dimension: { height: 10, length: 35, maxSumDimension: 0, weight: 800, width: 12 },
                groupItemId: null,
                id: '2390059',
                kitItem: [],
                modal: null,
                price: 0,
                quantity: 1,
                unlimitedQuantity: false,
              },
              listPrice: 10.5,
              location: {
                country: 'BRA',
                deliveryPointId: null,
                inStore: { IsCheckedIn: false, StoreId: '180082' },
                point: null,
                zipCode: '22220070',
              },
              pickupStoreInfo: null,
              promotionalPrice: 10.5,
              slaType: 'Normal',
              slaTypeName: 'Normal',
              timeToDockPlusDockTime: '1.00:00:00',
              totalTime: '3.00:00:00',
              transitTime: '2.00:00:00',
              wareHouseId: '1937054',
              wmsEndPoint: '',
            },
            required: [
              'item',
              'slaType',
              'slaTypeName',
              'freightTableName',
              'freightTableId',
              'listPrice',
              'promotionalPrice',
              'transitTime',
              'dockTime',
              'timeToDockPlusDockTime',
              'totalTime',
              'deliveryWindows',
              'wareHouseId',
              'dockId',
              'wmsEndPoint',
              'location',
              'pickupStoreInfo',
            ],
            title: 'SlaRequest',
          }),
      )
      .openapi({ description: '' }),
    Status: z.int32(),
  })
  .openapi({
    example: {
      AuthorizedDateUtc: '2016-04-15T19:59:20.0397988+00:00',
      CanceledDateUtc: '0001-01-01T00:00:00+00:00',
      ConfirmedDateUtc: '0001-01-01T00:00:00+00:00',
      Errors: [],
      IsSucess: true,
      LastUpdateDateUtc: '2016-04-15T19:59:20.0397988+00:00',
      LockId: '3bfe679d-c0a8-475a-b315-706f84a9deb4',
      MaximumConfirmationDateUtc: '2016-04-15T20:09:20.0397988+00:00',
      PickupPointItemOptions: null,
      ReservationDateUtc: '2016-04-15T19:59:20.0397988+00:00',
      SalesChannel: '2',
      SlaRequest: [
        {
          deliveryWindows: null,
          dockId: '1_1_1',
          dockTime: '00:00:00',
          freightTableId: '11cc4b6',
          freightTableName: 'Correios PAC',
          item: {
            additionalHandlingTime: '00:00:00',
            dimension: { height: 10, length: 35, maxSumDimension: 0, weight: 800, width: 12 },
            groupItemId: null,
            id: '2390059',
            kitItem: [],
            modal: null,
            price: 0,
            quantity: 1,
            unlimitedQuantity: false,
          },
          listPrice: 10.5,
          location: {
            country: 'BRA',
            deliveryPointId: null,
            inStore: { IsCheckedIn: false, StoreId: '180082' },
            point: null,
            zipCode: '22220070',
          },
          pickupStoreInfo: null,
          promotionalPrice: 10.5,
          slaType: 'Normal',
          slaTypeName: 'Normal',
          timeToDockPlusDockTime: '1.00:00:00',
          totalTime: '3.00:00:00',
          transitTime: '2.00:00:00',
          wareHouseId: '1937054',
          wmsEndPoint: '',
        },
      ],
      Status: 1,
    },
    required: [
      'LastUpdateDateUtc',
      'SalesChannel',
      'LockId',
      'ReservationDateUtc',
      'MaximumConfirmationDateUtc',
      'Status',
      'SlaRequest',
      'PickupPointItemOptions',
      'CanceledDateUtc',
      'AuthorizedDateUtc',
      'ConfirmedDateUtc',
      'Errors',
      'IsSucess',
    ],
    title: '',
  })
  .openapi('CreateReservation')

const CreateReservationRequestSchema = z
  .object({
    autorizationExpirationTTL: z.string(),
    deliveryItemOptions: z
      .array(
        z
          .object({
            aditionalTimeBlockedDays: z.string(),
            deliveryWindows: z.array(z.string()).openapi({ description: '' }),
            dockId: z.string(),
            dockTime: z.string(),
            item: z
              .object({
                additionalHandlingTime: z.string(),
                dimension: z
                  .object({
                    height: z.int32(),
                    length: z.int32(),
                    weight: z.int32(),
                    width: z.int32(),
                  })
                  .openapi({
                    example: { height: 1, length: 1, weight: 150, width: 1 },
                    required: ['weight', 'height', 'width', 'length'],
                    title: 'Dimension',
                  }),
                groupItemId: z.string().nullable(),
                id: z.string(),
                kitItem: z.array(z.string()).openapi({ description: '' }),
                price: z.int32(),
                quantity: z.int32(),
              })
              .openapi({
                example: {
                  additionalHandlingTime: '00:00:00',
                  dimension: { height: 1, length: 1, weight: 150, width: 1 },
                  groupItemId: null,
                  id: '2390059',
                  kitItem: [],
                  price: 0,
                  quantity: 1,
                },
                required: [
                  'id',
                  'groupItemId',
                  'kitItem',
                  'quantity',
                  'price',
                  'additionalHandlingTime',
                  'dimension',
                ],
                title: 'Item',
              }),
            listPrice: z.number(),
            location: z
              .object({
                country: z.string(),
                inStore: z
                  .object({ IsCheckedIn: z.boolean(), StoreId: z.string().nullable() })
                  .openapi({
                    example: { IsCheckedIn: false, StoreId: null },
                    required: ['IsCheckedIn', 'StoreId'],
                    title: 'InStore',
                  }),
                zipCode: z.string(),
              })
              .openapi({
                example: {
                  country: 'BRA',
                  inStore: { IsCheckedIn: false, StoreId: null },
                  zipCode: '22220070',
                },
                required: ['zipCode', 'country', 'inStore'],
                title: 'Location',
              }),
            promotionalPrice: z.number(),
            slaType: z.string(),
            slaTypeName: z.string(),
            timeToDockPlusDockTime: z.string(),
            totalTime: z.string(),
            transitTime: z.string(),
            wareHouseId: z.string().nullable(),
          })
          .openapi({
            example: {
              aditionalTimeBlockedDays: '00:00:00',
              deliveryWindows: [],
              dockId: '1a8bce3',
              dockTime: '00:00:00',
              item: {
                additionalHandlingTime: '00:00:00',
                dimension: { height: 1, length: 1, weight: 150, width: 1 },
                groupItemId: null,
                id: '2390059',
                kitItem: [],
                price: 0,
                quantity: 1,
              },
              listPrice: 10.5,
              location: {
                country: 'BRA',
                inStore: { IsCheckedIn: false, StoreId: null },
                zipCode: '22220070',
              },
              promotionalPrice: 10.5,
              slaType: 'Expressa',
              slaTypeName: 'Expressa',
              timeToDockPlusDockTime: '1.00:00:00',
              totalTime: '3.00:00:00',
              transitTime: '2.00:00:00',
              wareHouseId: null,
            },
            required: [
              'item',
              'slaType',
              'slaTypeName',
              'listPrice',
              'promotionalPrice',
              'transitTime',
              'dockTime',
              'timeToDockPlusDockTime',
              'aditionalTimeBlockedDays',
              'totalTime',
              'deliveryWindows',
              'wareHouseId',
              'dockId',
              'location',
            ],
            title: 'DeliveryItemOption',
          }),
      )
      .openapi({ description: '' }),
    lockId: z.string().nullable(),
    salesChannel: z.string(),
  })
  .openapi({
    example: {
      autorizationExpirationTTL: '00:10:00',
      deliveryItemOptions: [
        {
          aditionalTimeBlockedDays: '00:00:00',
          deliveryWindows: [],
          dockId: '1a8bce3',
          dockTime: '00:00:00',
          item: {
            additionalHandlingTime: '00:00:00',
            dimension: { height: 1, length: 1, weight: 150, width: 1 },
            groupItemId: null,
            id: '2390059',
            kitItem: [],
            price: 0,
            quantity: 1,
          },
          listPrice: 10.5,
          location: {
            country: 'BRA',
            inStore: { IsCheckedIn: false, StoreId: null },
            zipCode: '22220070',
          },
          promotionalPrice: 10.5,
          slaType: 'Expressa',
          slaTypeName: 'Expressa',
          timeToDockPlusDockTime: '1.00:00:00',
          totalTime: '3.00:00:00',
          transitTime: '2.00:00:00',
          wareHouseId: null,
        },
      ],
      lockId: null,
      salesChannel: '1',
    },
    required: ['salesChannel', 'lockId', 'autorizationExpirationTTL', 'deliveryItemOptions'],
    title: 'CreateReservationRequest',
  })
  .openapi('CreateReservationRequest')

const CreateUpdateSchema = z
  .object({
    address: z
      .object({
        city: z.string(),
        complement: z.string(),
        country: z
          .object({ acronym: z.string(), name: z.string() })
          .openapi({
            example: { acronym: 'BRA', name: 'Brazil' },
            required: ['acronym', 'name'],
            title: 'Country',
          }),
        location: z
          .object({ latitude: z.number(), longitude: z.number() })
          .openapi({
            example: { latitude: -22.974477767944336, longitude: -43.18672561645508 },
            required: ['latitude', 'longitude'],
            title: 'Location5',
          }),
        neighborhood: z.string(),
        number: z.string(),
        postalCode: z.string(),
        reference: z.string().nullable(),
        state: z.string(),
        street: z.string(),
      })
      .openapi({
        example: {
          city: 'Rio de Janeiro',
          complement: '',
          country: { acronym: 'BRA', name: 'Brazil' },
          location: { latitude: -22.974477767944336, longitude: -43.18672561645508 },
          neighborhood: 'Copacabana',
          number: '',
          postalCode: '22070002',
          reference: null,
          state: 'RJ',
          street: 'Avenida Atl├óntica',
        },
        required: [
          'postalCode',
          'country',
          'city',
          'state',
          'neighborhood',
          'street',
          'number',
          'complement',
          'reference',
          'location',
        ],
        title: 'Address2',
      }),
    businessHours: z
      .array(
        z
          .object({ closingTime: z.string(), dayOfWeek: z.int32(), openingTime: z.string() })
          .openapi({
            example: { closingTime: '20:00:00', dayOfWeek: 1, openingTime: '08:00:00' },
            required: ['dayOfWeek', 'openingTime', 'closingTime'],
            title: 'BusinessHour',
          }),
      )
      .openapi({ description: '' }),
    description: z.string(),
    formatted_address: z.string(),
    id: z.string(),
    instructions: z.string(),
    isActive: z.boolean(),
    name: z.string(),
    pickupHolidays: z.array(z.string()).openapi({ description: '' }),
    tagsLabel: z.array(z.string()).openapi({ description: '' }),
  })
  .openapi({
    example: {
      address: {
        city: 'Rio de Janeiro',
        complement: '',
        country: { acronym: 'BRA', name: 'Brazil' },
        location: { latitude: -22.974477767944336, longitude: -43.18672561645508 },
        neighborhood: 'Copacabana',
        number: '',
        postalCode: '22070002',
        reference: null,
        state: 'RJ',
        street: 'Avenida Atl├óntica',
      },
      businessHours: [
        { closingTime: '20:00:00', dayOfWeek: 1, openingTime: '08:00:00' },
        { closingTime: '20:00:00', dayOfWeek: 2, openingTime: '08:00:00' },
        { closingTime: '20:00:00', dayOfWeek: 3, openingTime: '08:00:00' },
        { closingTime: '20:00:00', dayOfWeek: 4, openingTime: '08:00:00' },
        { closingTime: '20:00:00', dayOfWeek: 5, openingTime: '08:00:00' },
      ],
      description: '',
      formatted_address: 'undefined',
      id: 'rteste',
      instructions: 'Obrigat├│rio apresentar documento de identifica├º├úo',
      isActive: true,
      name: 'Loja Copacabana',
      pickupHolidays: [],
      tagsLabel: ['zonasul', 'rio de janeiro'],
    },
    required: [
      'id',
      'name',
      'description',
      'instructions',
      'formatted_address',
      'address',
      'isActive',
      'businessHours',
      'tagsLabel',
      'pickupHolidays',
    ],
    title: 'Create/Update',
  })
  .openapi('CreateUpdate')

const CreateUpdateCarrierDeliveryWindowsRequestSchema = z
  .object({
    carrierSchedule: z.array(z.string()).openapi({ description: '' }),
    dayOfWeekForDelivery: z
      .array(
        z
          .object({
            dayOfWeek: z
              .int()
              .openapi({
                description: 'Day of the week, from `0` (sunday) to `6` (saturday).',
                example: 2,
              }),
            deliveryRanges: z
              .array(
                z
                  .object({
                    deliveryCapacity: z
                      .array(
                        z
                          .object({
                            capacityType: z
                              .string()
                              .openapi({
                                description:
                                  'Defines how the delivery capacity is measured for this reservation window, by maximum number of orders (`"ORDERS_QUANTITY"`) or SKUs (`"SKUS_QUANTITY"`).',
                                example: 'ORDERS_QUANTITY',
                              }),
                            maxValue: z
                              .number()
                              .openapi({
                                description:
                                  'Maximum number of orders or SKUs that the store is capable of fulfilling.',
                                example: 0,
                              }),
                          })
                          .openapi({
                            example: { capacityType: 'ORDERS_QUANTITY', maxValue: 55 },
                            required: ['capacityType', 'maxValue'],
                          }),
                      )
                      .exactOptional()
                      .openapi({
                        description:
                          'Sets maximum delivery capacity for a given reservation window for scheduled delivery.',
                      }),
                    endTime: z
                      .string()
                      .openapi({
                        description: 'End time for day of the week.',
                        example: '12:30:00',
                      }),
                    listPrice: z
                      .number()
                      .openapi({ description: 'List price for day of the week.', example: 0 }),
                    startTime: z
                      .string()
                      .openapi({
                        description: 'Start time for day of the week.',
                        example: '11:00:00',
                        title: 'startTime',
                      }),
                  })
                  .openapi({ required: ['startTime', 'endTime', 'listPrice'] }),
              )
              .openapi({ description: 'Reservation windows for scheduled delivery.' }),
          })
          .openapi({ required: ['dayOfWeek', 'deliveryRanges'] }),
      )
      .openapi({
        description:
          'Select the chosen days for delivery. Values for each day of the week are: 0 = sunday, 1 = monday, 2 = tuesday, 3 = wednesday, 4 = thursday, 5 = friday, 6 = saturday. Make sure to add the available hours for the chosen days, following the example.',
      }),
    deliveryOnWeekends: z.boolean(),
    factorCubicWeight: z.string().nullable(),
    id: z.string(),
    maxDimension: z
      .object({
        height: z.string().nullable(),
        length: z.string().nullable(),
        maxSumDimension: z.string().nullable(),
      })
      .openapi({
        example: { height: null, length: null, maxSumDimension: null },
        required: ['maxSumDimension', 'height', 'length'],
        title: 'MaxDimension1',
      }),
    maxRangeDelivery: z.int32(),
    minimunCubicWeight: z.string().nullable(),
    modals: z.array(z.string()).openapi({ description: '' }),
    name: z.string(),
    numberOfItemsPerShipment: z.string().nullable(),
    onlyItemsWithDefinedModal: z.boolean(),
    scheduledDelivery: z.boolean(),
    slaType: z.string(),
  })
  .openapi({
    example: {
      carrierSchedule: [],
      dayOfWeekForDelivery: [
        {
          dayOfWeek: 0,
          deliveryRanges: [
            { endTime: '12:00:00', listPrice: 10, startTime: '08:00:00' },
            { endTime: '18:00:00', listPrice: 10, startTime: '12:01:00' },
          ],
        },
        {
          dayOfWeek: 1,
          deliveryRanges: [
            { endTime: '12:00:00', listPrice: 10, startTime: '08:00:00' },
            { endTime: '18:00:00', listPrice: 10, startTime: '12:01:00' },
          ],
        },
        {
          dayOfWeek: 2,
          deliveryRanges: [
            { endTime: '12:00:00', listPrice: 10, startTime: '08:00:00' },
            { endTime: '18:00:00', listPrice: 10, startTime: '12:01:00' },
          ],
        },
        {
          dayOfWeek: 3,
          deliveryRanges: [
            { endTime: '12:00:00', listPrice: 10, startTime: '08:00:00' },
            { endTime: '18:00:00', listPrice: 10, startTime: '12:01:00' },
          ],
        },
        {
          dayOfWeek: 4,
          deliveryRanges: [
            { endTime: '12:00:00', listPrice: 10, startTime: '08:00:00' },
            { endTime: '18:00:00', listPrice: 10, startTime: '12:01:00' },
          ],
        },
        {
          dayOfWeek: 5,
          deliveryRanges: [
            { endTime: '12:00:00', listPrice: 10, startTime: '08:00:00' },
            { endTime: '18:00:00', listPrice: 10, startTime: '12:01:00' },
          ],
        },
        {
          dayOfWeek: 6,
          deliveryRanges: [
            { endTime: '12:00:00', listPrice: 10, startTime: '08:00:00' },
            { endTime: '18:00:00', listPrice: 10, startTime: '12:01:00' },
          ],
        },
      ],
      deliveryOnWeekends: false,
      factorCubicWeight: null,
      id: '11cc4b5',
      maxDimension: { height: null, length: null, maxSumDimension: null },
      maxRangeDelivery: 7,
      minimunCubicWeight: null,
      modals: [],
      name: 'Entrega Agendada',
      numberOfItemsPerShipment: null,
      onlyItemsWithDefinedModal: false,
      scheduledDelivery: true,
      slaType: 'Entrega Agendada',
    },
    required: [
      'id',
      'name',
      'slaType',
      'factorCubicWeight',
      'minimunCubicWeight',
      'numberOfItemsPerShipment',
      'modals',
      'onlyItemsWithDefinedModal',
      'maxDimension',
      'scheduledDelivery',
      'maxRangeDelivery',
      'dayOfWeekForDelivery',
      'deliveryOnWeekends',
      'carrierSchedule',
    ],
    title: 'Create/UpdateCarrier(DeliveryWindows)Request',
  })
  .openapi('CreateUpdateCarrierDeliveryWindowsRequest')

const CreateUpdateCarrierRequestSchema = z
  .object({
    carrierSchedule: z.array(z.string()).openapi({ description: '' }),
    dayOfWeekBlockeds: z.array(z.string()).openapi({ description: '' }),
    dayOfWeekForDelivery: z
      .array(
        z
          .object({
            dayOfWeek: z
              .int()
              .openapi({
                description: 'Day of the week, from `0` (sunday) to `6` (saturday).',
                example: 2,
              }),
            deliveryRanges: z
              .array(
                z
                  .object({
                    deliveryCapacity: z
                      .array(
                        z
                          .object({
                            capacityType: z
                              .string()
                              .openapi({
                                description:
                                  'Defines how the delivery capacity is measured for this reservation window, by maximum number of orders (`"ORDERS_QUANTITY"`) or SKUs (`"SKUS_QUANTITY"`).',
                                example: 'ORDERS_QUANTITY',
                              }),
                            maxValue: z
                              .number()
                              .openapi({
                                description:
                                  'Maximum number of orders or SKUs that the store is capable of fulfilling.',
                                example: 0,
                              }),
                          })
                          .openapi({
                            example: { capacityType: 'ORDERS_QUANTITY', maxValue: 55 },
                            required: ['capacityType', 'maxValue'],
                          }),
                      )
                      .exactOptional()
                      .openapi({
                        description:
                          'Sets maximum delivery capacity for a given reservation window for scheduled delivery.',
                      }),
                    endTime: z
                      .string()
                      .openapi({
                        description: 'End time for day of the week.',
                        example: '12:30:00',
                      }),
                    listPrice: z
                      .number()
                      .openapi({ description: 'List price for day of the week.', example: 0 }),
                    startTime: z
                      .string()
                      .openapi({
                        description: 'Start time for day of the week.',
                        example: '11:00:00',
                        title: 'startTime',
                      }),
                  })
                  .openapi({ required: ['startTime', 'endTime', 'listPrice'] }),
              )
              .openapi({ description: 'Reservation windows for scheduled delivery.' }),
          })
          .openapi({ required: ['dayOfWeek', 'deliveryRanges'] }),
      )
      .nullable()
      .openapi({
        description:
          'Select the chosen days for delivery. Values for each day of the week are: 0 = sunday, 1 = monday, 2 = tuesday, 3 = wednesday, 4 = thursday, 5 = friday, 6 = saturday. Make sure to add the available hours for the chosen days, following the example.',
      }),
    deliveryOnWeekends: z.boolean(),
    exclusiveToDeliveryPoints: z.boolean(),
    factorCubicWeight: z.string().nullable(),
    freightTableProcessStatus: z.int32(),
    freightTableValueError: z.string().nullable(),
    freightValue: z.array(z.string()).openapi({ description: '' }),
    id: z.string(),
    isPolygon: z.boolean(),
    maxDimension: z
      .object({
        height: z.int32(),
        length: z.int32(),
        maxSumDimension: z.int32(),
        weight: z.int32(),
        width: z.int32(),
      })
      .openapi({
        example: { height: 0, length: 0, maxSumDimension: 0, weight: 0, width: 0 },
        required: ['weight', 'height', 'width', 'length', 'maxSumDimension'],
        title: 'MaxDimension',
      }),
    maxRangeDelivery: z.int32(),
    minimunCubicWeight: z.int32(),
    modals: z.array(z.string()).openapi({ description: '' }),
    name: z.string(),
    numberOfItemsPerShipment: z.string().nullable(),
    onlyItemsWithDefinedModal: z.boolean(),
    scheduledDelivery: z.boolean(),
    slaType: z.string(),
  })
  .openapi({
    example: {
      carrierSchedule: [],
      dayOfWeekBlockeds: [],
      dayOfWeekForDelivery: null,
      deliveryOnWeekends: false,
      exclusiveToDeliveryPoints: false,
      factorCubicWeight: null,
      freightTableProcessStatus: 1,
      freightTableValueError: null,
      freightValue: [],
      id: '13942e4',
      isPolygon: false,
      maxDimension: { height: 0, length: 0, maxSumDimension: 0, weight: 0, width: 0 },
      maxRangeDelivery: 0,
      minimunCubicWeight: 0,
      modals: [],
      name: 'Transportadora Expressa',
      numberOfItemsPerShipment: null,
      onlyItemsWithDefinedModal: false,
      scheduledDelivery: false,
      slaType: 'Expressa',
    },
    required: [
      'id',
      'slaType',
      'name',
      'scheduledDelivery',
      'maxRangeDelivery',
      'dayOfWeekForDelivery',
      'dayOfWeekBlockeds',
      'freightValue',
      'factorCubicWeight',
      'freightTableProcessStatus',
      'freightTableValueError',
      'modals',
      'onlyItemsWithDefinedModal',
      'deliveryOnWeekends',
      'carrierSchedule',
      'maxDimension',
      'exclusiveToDeliveryPoints',
      'minimunCubicWeight',
      'isPolygon',
      'numberOfItemsPerShipment',
    ],
    title: 'Create/UpdateCarrierRequest',
  })
  .openapi('CreateUpdateCarrierRequest')

const CreateUpdateDockRequestSchema = z
  .object({
    address: z
      .object({
        city: z.string(),
        complement: z.string(),
        coordinates: z.array(z.array(z.number())),
        country: z
          .object({ acronym: z.string(), name: z.string() })
          .openapi({
            example: { acronym: 'BRA', name: 'Brazil' },
            required: ['acronym', 'name'],
            title: 'Country',
          }),
        neighborhood: z.string(),
        number: z.string(),
        postalCode: z.string(),
        state: z.string(),
        street: z.string(),
      })
      .openapi({
        example: {
          city: 'Rio de Janeiro',
          complement: '',
          coordinates: [[-43.18228090000002, -22.9460398]],
          country: { acronym: 'BRA', name: 'Brazil' },
          neighborhood: 'Catete',
          number: '100',
          postalCode: '22220070',
          state: 'RJ',
          street: 'Artur Bernardes Street',
        },
        required: [
          'postalCode',
          'country',
          'city',
          'state',
          'neighborhood',
          'street',
          'number',
          'complement',
          'coordinates',
        ],
        title: 'Address1',
      }),
    dockTimeFake: z.string(),
    freightTableIds: z.array(z.string()).openapi({ description: '' }),
    id: z.string(),
    name: z.string(),
    pickupStoreInfo: z
      .object({
        additionalInfo: z.string().nullable(),
        address: z
          .object({
            city: z.string(),
            complement: z.string(),
            coordinates: z.string().nullable(),
            country: z
              .object({ acronym: z.string(), name: z.string() })
              .openapi({
                example: { acronym: 'BRA', name: 'Brazil' },
                required: ['acronym', 'name'],
                title: 'Country',
              }),
            neighborhood: z.string(),
            number: z.string(),
            postalCode: z.string(),
            state: z.string(),
            street: z.string(),
          })
          .openapi({
            example: {
              city: 'Rio de Janeiro',
              complement: '',
              coordinates: null,
              country: { acronym: 'BRA', name: 'Brazil' },
              neighborhood: 'Catete',
              number: '100',
              postalCode: '22220070',
              state: 'RJ',
              street: 'Artur Bernardes Street',
            },
            required: [
              'postalCode',
              'country',
              'city',
              'state',
              'neighborhood',
              'street',
              'number',
              'complement',
              'coordinates',
            ],
            title: 'Address',
          }),
        dockId: z.string().nullable(),
        friendlyName: z.string().nullable(),
        isPickupStore: z.boolean(),
        storeId: z.string().nullable(),
      })
      .openapi({
        example: {
          additionalInfo: null,
          address: {
            city: 'Rio de Janeiro',
            complement: '',
            coordinates: null,
            country: { acronym: 'BRA', name: 'Brazil' },
            neighborhood: 'Catete',
            number: '100',
            postalCode: '22220070',
            state: 'RJ',
            street: 'Artur Bernardes Street',
          },
          dockId: null,
          friendlyName: null,
          isPickupStore: false,
          storeId: null,
        },
        required: [
          'isPickupStore',
          'storeId',
          'friendlyName',
          'address',
          'additionalInfo',
          'dockId',
        ],
        title: 'PickupStoreInfo',
      }),
    priority: z.int32(),
    salesChannel: z.string().nullable(),
    salesChannels: z.array(z.string()).openapi({ description: '' }),
    timeFakeOverhead: z.string(),
    wmsEndPoint: z.string(),
  })
  .openapi({
    example: {
      address: {
        city: 'Rio de Janeiro',
        complement: '',
        coordinates: [[-43.18228090000002, -22.9460398]],
        country: { acronym: 'BRA', name: 'Brazil' },
        neighborhood: 'Catete',
        number: '100',
        postalCode: '22220070',
        state: 'RJ',
        street: 'Artur Bernardes Street',
      },
      dockTimeFake: '00:00:00',
      freightTableIds: [],
      id: 'catete',
      name: 'Loja Catete',
      pickupStoreInfo: {
        additionalInfo: null,
        address: {
          city: 'Rio de Janeiro',
          complement: '',
          coordinates: null,
          country: { acronym: 'BRA', name: 'Brazil' },
          neighborhood: 'Catete',
          number: '100',
          postalCode: '22220070',
          state: 'RJ',
          street: 'Artur Bernardes Street',
        },
        dockId: null,
        friendlyName: null,
        isPickupStore: false,
        storeId: null,
      },
      priority: 0,
      salesChannel: null,
      salesChannels: ['1'],
      timeFakeOverhead: '00:00:00',
      wmsEndPoint: '',
    },
    required: [
      'id',
      'name',
      'priority',
      'dockTimeFake',
      'timeFakeOverhead',
      'salesChannels',
      'salesChannel',
      'freightTableIds',
      'wmsEndPoint',
      'pickupStoreInfo',
      'address',
    ],
    title: 'Create/UpdateDockRequest',
  })
  .openapi('CreateUpdateDockRequest')

const CreateUpdateFreightValuesRequestSchema = z
  .object({
    absoluteMoneyCost: z.string(),
    country: z.string(),
    maxVolume: z.int32(),
    operationType: z.int32(),
    polygon: z.string(),
    pricePercent: z.int32(),
    pricePercentByWeight: z.int32(),
    timeCost: z.string(),
    weightEnd: z.int32(),
    weightStart: z.int32(),
    zipCodeEnd: z.string(),
    zipCodeStart: z.string(),
  })
  .openapi({
    example: {
      absoluteMoneyCost: '1.00',
      country: 'BRA',
      maxVolume: 1000000000,
      operationType: 1,
      polygon: '',
      pricePercent: 0,
      pricePercentByWeight: 0,
      timeCost: '2.00:00:00',
      weightEnd: 1000,
      weightStart: 1,
      zipCodeEnd: '99999999',
      zipCodeStart: '0',
    },
    required: [
      'absoluteMoneyCost',
      'country',
      'maxVolume',
      'operationType',
      'pricePercent',
      'pricePercentByWeight',
      'timeCost',
      'weightEnd',
      'weightStart',
      'zipCodeEnd',
      'zipCodeStart',
      'polygon',
    ],
    title: 'Create/UpdateFreightValuesRequest',
  })
  .openapi('CreateUpdateFreightValuesRequest')

const CreateUpdateHolidayRequestSchema = z
  .object({ name: z.string(), startDate: z.string() })
  .openapi({
    example: { name: 'Natal', startDate: '2016-12-25' },
    required: ['name', 'startDate'],
    title: 'Create/UpdateHolidayRequest',
  })
  .openapi('CreateUpdateHolidayRequest')

const CreateUpdatePolygonRequestSchema = z
  .object({
    geoShape: z
      .object({ coordinates: z.array(z.array(z.number())) })
      .openapi({ required: ['coordinates'], title: 'GeoShape' }),
    name: z.string(),
  })
  .openapi({ required: ['name', 'geoShape'], title: 'Create/UpdatePolygonRequest' })
  .openapi('CreateUpdatePolygonRequest')

const CreateUpdateRequestSchema = z
  .object({
    address: z
      .object({
        city: z.string(),
        complement: z.string(),
        country: z
          .object({ acronym: z.string(), name: z.string() })
          .openapi({
            example: { acronym: 'BRA', name: 'Brazil' },
            required: ['acronym', 'name'],
            title: 'Country',
          }),
        location: z
          .object({ latitude: z.number(), longitude: z.number() })
          .openapi({
            example: { latitude: -22.974477767944336, longitude: -43.18672561645508 },
            required: ['latitude', 'longitude'],
            title: 'Location5',
          }),
        neighborhood: z.string(),
        number: z.string(),
        postalCode: z.string(),
        reference: z.string().nullable(),
        state: z.string(),
        street: z.string(),
      })
      .openapi({
        example: {
          city: 'Rio de Janeiro',
          complement: '',
          country: { acronym: 'BRA', name: 'Brazil' },
          location: { latitude: -22.974477767944336, longitude: -43.18672561645508 },
          neighborhood: 'Copacabana',
          number: '',
          postalCode: '22070002',
          reference: null,
          state: 'RJ',
          street: 'Avenida Atl├óntica',
        },
        required: [
          'postalCode',
          'country',
          'city',
          'state',
          'neighborhood',
          'street',
          'number',
          'complement',
          'reference',
          'location',
        ],
        title: 'Address2',
      }),
    businessHours: z
      .array(
        z
          .object({ closingTime: z.string(), dayOfWeek: z.int32(), openingTime: z.string() })
          .openapi({
            example: { closingTime: '20:00:00', dayOfWeek: 1, openingTime: '08:00:00' },
            required: ['dayOfWeek', 'openingTime', 'closingTime'],
            title: 'BusinessHour',
          }),
      )
      .openapi({ description: '' }),
    description: z.string(),
    formatted_address: z.string(),
    id: z.string(),
    instructions: z.string(),
    isActive: z.boolean(),
    name: z.string(),
    tagsLabel: z.array(z.string()).openapi({ description: '' }),
  })
  .openapi({
    example: {
      address: {
        city: 'Rio de Janeiro',
        complement: '',
        country: { acronym: 'BRA', name: 'Brazil' },
        location: { latitude: -22.974477767944336, longitude: -43.18672561645508 },
        neighborhood: 'Copacabana',
        number: '',
        postalCode: '22070002',
        reference: null,
        state: 'RJ',
        street: 'Avenida Atl├óntica',
      },
      businessHours: [
        { closingTime: '20:00:00', dayOfWeek: 1, openingTime: '08:00:00' },
        { closingTime: '20:00:00', dayOfWeek: 2, openingTime: '08:00:00' },
        { closingTime: '20:00:00', dayOfWeek: 3, openingTime: '08:00:00' },
        { closingTime: '20:00:00', dayOfWeek: 4, openingTime: '08:00:00' },
        { closingTime: '20:00:00', dayOfWeek: 5, openingTime: '08:00:00' },
      ],
      description: '',
      formatted_address: 'undefined',
      id: '1a227d3',
      instructions: 'Obrigat├│rio apresentar documento de identifica├º├úo',
      isActive: true,
      name: 'Loja Copacabana',
      tagsLabel: ['zonasul', 'rio de janeiro'],
    },
    required: [
      'id',
      'name',
      'description',
      'instructions',
      'formatted_address',
      'address',
      'isActive',
      'businessHours',
      'tagsLabel',
    ],
    title: 'Create/UpdateRequest',
  })
  .openapi('CreateUpdateRequest')

const CreateUpdateWarehouseRequestSchema = z
  .object({
    id: z.string(),
    name: z.string(),
    warehouseDocks: z
      .array(
        z
          .object({
            cost: z.string(),
            costToDisplay: z.string(),
            dockId: z.string(),
            name: z.string(),
            time: z.string(),
            translateDays: z.string(),
          })
          .openapi({
            example: {
              cost: '5.00',
              costToDisplay: '5,00',
              dockId: '1a8bce3',
              name: 'Centro de Distribui├º├úo Principal',
              time: '3.00:00:00',
              translateDays: 'dias',
            },
            required: ['dockId', 'name', 'time', 'cost', 'translateDays', 'costToDisplay'],
            title: 'WarehouseDock',
          }),
      )
      .openapi({ description: '' }),
  })
  .openapi({
    example: {
      id: '15bfc76',
      name: 'Estoque Principal',
      warehouseDocks: [
        {
          cost: '5.00',
          costToDisplay: '5,00',
          dockId: '1a8bce3',
          name: 'Centro de Distribui├º├úo Principal',
          time: '3.00:00:00',
          translateDays: 'dias',
        },
      ],
    },
    required: ['id', 'name', 'warehouseDocks'],
    title: 'Create/UpdateWarehouseRequest',
  })
  .openapi('CreateUpdateWarehouseRequest')

const DayOfWeekForDeliverySchema = z
  .object({
    dayOfWeek: z.int32(),
    deliveryRanges: z
      .array(
        z
          .object({ endTime: z.string(), listPrice: z.int32(), startTime: z.string() })
          .openapi({
            example: { endTime: '12:00:00', listPrice: 10, startTime: '08:00:00' },
            required: ['startTime', 'endTime', 'listPrice'],
            title: 'DeliveryRange',
          }),
      )
      .openapi({ description: '' }),
  })
  .openapi({
    example: {
      dayOfWeek: 0,
      deliveryRanges: [
        { endTime: '12:00:00', listPrice: 10, startTime: '08:00:00' },
        { endTime: '18:00:00', listPrice: 10, startTime: '12:01:00' },
      ],
    },
    required: ['dayOfWeek', 'deliveryRanges'],
    title: 'DayOfWeekForDelivery',
  })
  .openapi('DayOfWeekForDelivery')

const DayOfWeekForDelivery1Schema = z
  .object({
    dayOfWeek: z.int32(),
    deliveryRanges: z
      .array(
        z
          .object({ endTime: z.string(), listPrice: z.number(), startTime: z.string() })
          .openapi({
            example: { endTime: '12:00:00', listPrice: 10, startTime: '08:00:00' },
            required: ['startTime', 'endTime', 'listPrice'],
            title: 'DeliveryRange1',
          }),
      )
      .openapi({ description: '' }),
  })
  .openapi({
    example: {
      dayOfWeek: 0,
      deliveryRanges: [
        { endTime: '12:00:00', listPrice: 10, startTime: '08:00:00' },
        { endTime: '18:00:00', listPrice: 10, startTime: '12:01:00' },
      ],
    },
    required: ['dayOfWeek', 'deliveryRanges'],
    title: 'DayOfWeekForDelivery1',
  })
  .openapi('DayOfWeekForDelivery1')

const DeliveryItemOptionSchema = z
  .object({
    aditionalTimeBlockedDays: z.string(),
    deliveryWindows: z.array(z.string()).openapi({ description: '' }),
    dockId: z.string(),
    dockTime: z.string(),
    item: z
      .object({
        additionalHandlingTime: z.string(),
        dimension: z
          .object({ height: z.int32(), length: z.int32(), weight: z.int32(), width: z.int32() })
          .openapi({
            example: { height: 1, length: 1, weight: 150, width: 1 },
            required: ['weight', 'height', 'width', 'length'],
            title: 'Dimension',
          }),
        groupItemId: z.string().nullable(),
        id: z.string(),
        kitItem: z.array(z.string()).openapi({ description: '' }),
        price: z.int32(),
        quantity: z.int32(),
      })
      .openapi({
        example: {
          additionalHandlingTime: '00:00:00',
          dimension: { height: 1, length: 1, weight: 150, width: 1 },
          groupItemId: null,
          id: '2390059',
          kitItem: [],
          price: 0,
          quantity: 1,
        },
        required: [
          'id',
          'groupItemId',
          'kitItem',
          'quantity',
          'price',
          'additionalHandlingTime',
          'dimension',
        ],
        title: 'Item',
      }),
    listPrice: z.number(),
    location: z
      .object({
        country: z.string(),
        inStore: z
          .object({ IsCheckedIn: z.boolean(), StoreId: z.string().nullable() })
          .openapi({
            example: { IsCheckedIn: false, StoreId: null },
            required: ['IsCheckedIn', 'StoreId'],
            title: 'InStore',
          }),
        zipCode: z.string(),
      })
      .openapi({
        example: {
          country: 'BRA',
          inStore: { IsCheckedIn: false, StoreId: null },
          zipCode: '22220070',
        },
        required: ['zipCode', 'country', 'inStore'],
        title: 'Location',
      }),
    promotionalPrice: z.number(),
    slaType: z.string(),
    slaTypeName: z.string(),
    timeToDockPlusDockTime: z.string(),
    totalTime: z.string(),
    transitTime: z.string(),
    wareHouseId: z.string().nullable(),
  })
  .openapi({
    example: {
      aditionalTimeBlockedDays: '00:00:00',
      deliveryWindows: [],
      dockId: '1a8bce3',
      dockTime: '00:00:00',
      item: {
        additionalHandlingTime: '00:00:00',
        dimension: { height: 1, length: 1, weight: 150, width: 1 },
        groupItemId: null,
        id: '2390059',
        kitItem: [],
        price: 0,
        quantity: 1,
      },
      listPrice: 10.5,
      location: {
        country: 'BRA',
        inStore: { IsCheckedIn: false, StoreId: null },
        zipCode: '22220070',
      },
      promotionalPrice: 10.5,
      slaType: 'Expressa',
      slaTypeName: 'Expressa',
      timeToDockPlusDockTime: '1.00:00:00',
      totalTime: '3.00:00:00',
      transitTime: '2.00:00:00',
      wareHouseId: null,
    },
    required: [
      'item',
      'slaType',
      'slaTypeName',
      'listPrice',
      'promotionalPrice',
      'transitTime',
      'dockTime',
      'timeToDockPlusDockTime',
      'aditionalTimeBlockedDays',
      'totalTime',
      'deliveryWindows',
      'wareHouseId',
      'dockId',
      'location',
    ],
    title: 'DeliveryItemOption',
  })
  .openapi('DeliveryItemOption')

const DeliveryRangeSchema = z
  .object({ endTime: z.string(), listPrice: z.int32(), startTime: z.string() })
  .openapi({
    example: { endTime: '12:00:00', listPrice: 10, startTime: '08:00:00' },
    required: ['startTime', 'endTime', 'listPrice'],
    title: 'DeliveryRange',
  })
  .openapi('DeliveryRange')

const DeliveryRange1Schema = z
  .object({ endTime: z.string(), listPrice: z.number(), startTime: z.string() })
  .openapi({
    example: { endTime: '12:00:00', listPrice: 10, startTime: '08:00:00' },
    required: ['startTime', 'endTime', 'listPrice'],
    title: 'DeliveryRange1',
  })
  .openapi('DeliveryRange1')

const DeliveryWindowSchema = z
  .object({
    endDateUtc: z.string().exactOptional(),
    listPrice: z.number().exactOptional(),
    startDateUtc: z.string().exactOptional(),
  })
  .openapi({
    example: {
      endDateUtc: '2016-04-20T12:00:00+00:00',
      listPrice: 10,
      startDateUtc: '2016-04-20T08:00:00+00:00',
    },
    title: 'DeliveryWindow',
    required: [],
  })
  .openapi('DeliveryWindow')

const DimensionSchema = z
  .object({ height: z.int32(), length: z.int32(), weight: z.int32(), width: z.int32() })
  .openapi({
    example: { height: 1, length: 1, weight: 150, width: 1 },
    required: ['weight', 'height', 'width', 'length'],
    title: 'Dimension',
  })
  .openapi('Dimension')

const Dimension1Schema = z
  .object({
    height: z.number(),
    length: z.number(),
    maxSumDimension: z.number(),
    weight: z.number(),
    width: z.number(),
  })
  .openapi({
    example: { height: 10, length: 35, maxSumDimension: 0, weight: 800, width: 12 },
    required: ['weight', 'height', 'width', 'length', 'maxSumDimension'],
    title: 'Dimension1',
  })
  .openapi('Dimension1')

const ErrorSchema = z
  .object({ code: z.string(), message: z.string() })
  .openapi({
    example: { code: '429', message: 'Too many active reservation!' },
    required: ['code', 'message'],
    title: 'Error',
  })
  .openapi('Error')

const ErrorbytoomanyactivereservationsSchema = z
  .object({
    error: z
      .object({ code: z.string(), message: z.string() })
      .openapi({
        example: { code: '429', message: 'Too many active reservation!' },
        required: ['code', 'message'],
        title: 'Error',
      }),
  })
  .openapi({
    example: { error: { code: '429', message: 'Too many active reservation!' } },
    required: ['error'],
    title: 'Errorbytoomanyactivereservations',
  })
  .openapi('Errorbytoomanyactivereservations')

const GeoShapeSchema = z
  .object({ coordinates: z.array(z.array(z.number())) })
  .openapi({ required: ['coordinates'], title: 'GeoShape' })
  .openapi('GeoShape')

const GetByIdSchema = z
  .object({
    address: z
      .object({
        city: z.string(),
        complement: z.string(),
        country: z
          .object({ acronym: z.string(), name: z.string() })
          .openapi({
            example: { acronym: 'BRA', name: 'Brazil' },
            required: ['acronym', 'name'],
            title: 'Country',
          }),
        location: z
          .object({ latitude: z.number(), longitude: z.number() })
          .openapi({
            example: { latitude: -22.974477767944336, longitude: -43.18672561645508 },
            required: ['latitude', 'longitude'],
            title: 'Location5',
          }),
        neighborhood: z.string(),
        number: z.string(),
        postalCode: z.string(),
        state: z.string(),
        street: z.string(),
      })
      .openapi({
        example: {
          city: 'Rio de Janeiro',
          complement: '',
          country: { acronym: 'BRA', name: 'Brazil' },
          location: { latitude: -22.92860984802246, longitude: -22.92860984802246 },
          neighborhood: 'Catete',
          number: '',
          postalCode: '22220070',
          state: 'RJ',
          street: 'Rua Artur Bernardes',
        },
        required: [
          'postalCode',
          'country',
          'city',
          'state',
          'neighborhood',
          'street',
          'number',
          'complement',
          'location',
        ],
        title: 'Address4',
      }),
    businessHours: z
      .array(
        z
          .object({ closingTime: z.string(), dayOfWeek: z.int32(), openingTime: z.string() })
          .openapi({
            example: { closingTime: '20:00:00', dayOfWeek: 1, openingTime: '08:00:00' },
            required: ['dayOfWeek', 'openingTime', 'closingTime'],
            title: 'BusinessHour',
          }),
      )
      .openapi({ description: '' }),
    description: z.string(),
    formatted_address: z.string(),
    id: z.string(),
    instructions: z.string(),
    isActive: z.boolean(),
    name: z.string(),
    warehouseId: z.string().nullable(),
  })
  .openapi({
    example: {
      address: {
        city: 'Rio de Janeiro',
        complement: '',
        country: { acronym: 'BRA', name: 'Brazil' },
        location: { latitude: -22.92860984802246, longitude: -22.92860984802246 },
        neighborhood: 'Catete',
        number: '',
        postalCode: '22220070',
        state: 'RJ',
        street: 'Rua Artur Bernardes',
      },
      businessHours: [{ closingTime: '21:00:00', dayOfWeek: 0, openingTime: '11:00:00' }],
      description: 'Loja Barra da Tijuca',
      formatted_address: 'undefined',
      id: '12345',
      instructions: 'Loja Barra da Tijuca',
      isActive: true,
      name: 'Loja Barra da Tijuca',
      warehouseId: null,
    },
    required: [
      'id',
      'name',
      'description',
      'instructions',
      'formatted_address',
      'address',
      'isActive',
      'warehouseId',
      'businessHours',
    ],
    title: 'GetById',
  })
  .openapi('GetById')

const InStoreSchema = z
  .object({ IsCheckedIn: z.boolean(), StoreId: z.string().nullable() })
  .openapi({
    example: { IsCheckedIn: false, StoreId: null },
    required: ['IsCheckedIn', 'StoreId'],
    title: 'InStore',
  })
  .openapi('InStore')

const InStore1Schema = z
  .object({ IsCheckedIn: z.boolean(), StoreId: z.string() })
  .openapi({
    example: { IsCheckedIn: false, StoreId: '180082' },
    required: ['IsCheckedIn', 'StoreId'],
    title: 'InStore1',
  })
  .openapi('InStore1')

const ItemSchema = z
  .object({
    additionalHandlingTime: z.string(),
    dimension: z
      .object({ height: z.int32(), length: z.int32(), weight: z.int32(), width: z.int32() })
      .openapi({
        example: { height: 1, length: 1, weight: 150, width: 1 },
        required: ['weight', 'height', 'width', 'length'],
        title: 'Dimension',
      }),
    groupItemId: z.string().nullable(),
    id: z.string(),
    kitItem: z.array(z.string()).openapi({ description: '' }),
    price: z.int32(),
    quantity: z.int32(),
  })
  .openapi({
    example: {
      additionalHandlingTime: '00:00:00',
      dimension: { height: 1, length: 1, weight: 150, width: 1 },
      groupItemId: null,
      id: '2390059',
      kitItem: [],
      price: 0,
      quantity: 1,
    },
    required: [
      'id',
      'groupItemId',
      'kitItem',
      'quantity',
      'price',
      'additionalHandlingTime',
      'dimension',
    ],
    title: 'Item',
  })
  .openapi('Item')

const Item1Schema = z
  .object({
    additionalHandlingTime: z.string(),
    dimension: z
      .object({
        height: z.number(),
        length: z.number(),
        maxSumDimension: z.number(),
        weight: z.number(),
        width: z.number(),
      })
      .openapi({
        example: { height: 10, length: 35, maxSumDimension: 0, weight: 800, width: 12 },
        required: ['weight', 'height', 'width', 'length', 'maxSumDimension'],
        title: 'Dimension1',
      }),
    groupItemId: z.string().nullable(),
    id: z.string(),
    kitItem: z.array(z.string()).openapi({ description: '' }),
    modal: z.string().nullable(),
    price: z.number(),
    quantity: z.int32(),
    unlimitedQuantity: z.boolean(),
  })
  .openapi({
    example: {
      additionalHandlingTime: '00:00:00',
      dimension: { height: 10, length: 35, maxSumDimension: 0, weight: 800, width: 12 },
      groupItemId: null,
      id: '2390059',
      kitItem: [],
      modal: null,
      price: 0,
      quantity: 1,
      unlimitedQuantity: false,
    },
    required: [
      'id',
      'groupItemId',
      'quantity',
      'price',
      'modal',
      'additionalHandlingTime',
      'dimension',
      'kitItem',
      'unlimitedQuantity',
    ],
    title: 'Item1',
  })
  .openapi('Item1')

const Item3Schema = z
  .object({
    additionalHandlingTime: z.string(),
    dimension: z
      .object({ height: z.int32(), length: z.int32(), weight: z.int32(), width: z.int32() })
      .openapi({
        example: { height: 1, length: 1, weight: 150, width: 1 },
        required: ['weight', 'height', 'width', 'length'],
        title: 'Dimension',
      }),
    groupItemId: z.string().nullable(),
    id: z.string(),
    kitItem: z
      .array(
        z
          .object({
            additionalHandlingTime: z.string(),
            dimension: z
              .object({ height: z.int32(), length: z.int32(), weight: z.int32(), width: z.int32() })
              .openapi({
                example: { height: 1, length: 1, weight: 150, width: 1 },
                required: ['weight', 'height', 'width', 'length'],
                title: 'Dimension',
              }),
            groupItemId: z.string().nullable(),
            id: z.string(),
            kitItem: z.array(z.string()).openapi({ description: '' }),
            price: z.int32(),
            quantity: z.int32(),
          })
          .openapi({
            example: {
              additionalHandlingTime: '00:00:00',
              dimension: { height: 5, length: 17, weight: 150, width: 17 },
              groupItemId: null,
              id: '2000042',
              kitItem: [],
              price: 0,
              quantity: 1,
            },
            required: [
              'id',
              'groupItemId',
              'kitItem',
              'quantity',
              'price',
              'additionalHandlingTime',
              'dimension',
            ],
            title: 'KitItem',
          }),
      )
      .openapi({ description: '' }),
    price: z.int32(),
    quantity: z.int32(),
  })
  .openapi({
    example: {
      additionalHandlingTime: '00:00:00',
      dimension: { height: 5, length: 17, weight: 150, width: 17 },
      groupItemId: null,
      id: '1',
      kitItem: [
        {
          additionalHandlingTime: '00:00:00',
          dimension: { height: 5, length: 17, weight: 150, width: 17 },
          groupItemId: null,
          id: '2000042',
          kitItem: [],
          price: 0,
          quantity: 1,
        },
        {
          additionalHandlingTime: '00:00:00',
          dimension: { height: 5, length: 17, weight: 150, width: 17 },
          groupItemId: null,
          id: '2390059',
          kitItem: [],
          price: 0,
          quantity: 1,
        },
      ],
      price: 0,
      quantity: 1,
    },
    required: [
      'id',
      'groupItemId',
      'kitItem',
      'quantity',
      'price',
      'additionalHandlingTime',
      'dimension',
    ],
    title: 'Item3',
  })
  .openapi('Item3')

const KitItemSchema = z
  .object({
    additionalHandlingTime: z.string(),
    dimension: z
      .object({ height: z.int32(), length: z.int32(), weight: z.int32(), width: z.int32() })
      .openapi({
        example: { height: 1, length: 1, weight: 150, width: 1 },
        required: ['weight', 'height', 'width', 'length'],
        title: 'Dimension',
      }),
    groupItemId: z.string().nullable(),
    id: z.string(),
    kitItem: z.array(z.string()).openapi({ description: '' }),
    price: z.int32(),
    quantity: z.int32(),
  })
  .openapi({
    example: {
      additionalHandlingTime: '00:00:00',
      dimension: { height: 5, length: 17, weight: 150, width: 17 },
      groupItemId: null,
      id: '2000042',
      kitItem: [],
      price: 0,
      quantity: 1,
    },
    required: [
      'id',
      'groupItemId',
      'kitItem',
      'quantity',
      'price',
      'additionalHandlingTime',
      'dimension',
    ],
    title: 'KitItem',
  })
  .openapi('KitItem')

const ListAllAarehousesSchema = z
  .object({
    id: z.string(),
    name: z.string(),
    warehouseDocks: z
      .array(
        z
          .object({ cost: z.number(), dockId: z.string(), time: z.string() })
          .openapi({
            example: { cost: 0, dockId: '1_1_1', time: '1.00:00:00' },
            required: ['dockId', 'time', 'cost'],
            title: 'WarehouseDock1',
          }),
      )
      .openapi({ description: '' }),
  })
  .openapi({
    example: {
      id: '1937054',
      name: 'Estoque A',
      warehouseDocks: [{ cost: 0, dockId: '1_1_1', time: '1.00:00:00' }],
    },
    required: ['id', 'name', 'warehouseDocks'],
    title: '',
  })
  .openapi('ListAllAarehouses')

const ListAllDocksSchema = z
  .object({
    dockTimeFake: z.string(),
    freightTableIds: z.array(z.string()).openapi({ description: '' }),
    id: z.string(),
    name: z.string(),
    pickupStoreInfo: z
      .object({
        additionalInfo: z.string().nullable(),
        address: z.string().nullable(),
        dockId: z.string().nullable(),
        friendlyName: z.string().nullable(),
        isPickupStore: z.boolean(),
        storeId: z.string().nullable(),
      })
      .openapi({
        example: {
          additionalInfo: null,
          address: null,
          dockId: null,
          friendlyName: null,
          isPickupStore: false,
          storeId: null,
        },
        required: [
          'isPickupStore',
          'storeId',
          'friendlyName',
          'address',
          'additionalInfo',
          'dockId',
        ],
        title: 'PickupStoreInfo1',
      }),
    priority: z.int32(),
    salesChannel: z.string().nullable(),
    salesChannels: z.array(z.string()).openapi({ description: '' }),
    timeFakeOverhead: z.string(),
    wmsEndPoint: z.string(),
  })
  .openapi({
    example: {
      dockTimeFake: '1.00:00:00',
      freightTableIds: ['11cc4b6', 'teste1', '186a2a6', '1962962', '173a63f'],
      id: '1a8bce3',
      name: 'Centro de Distribui├º├úo Principal',
      pickupStoreInfo: {
        additionalInfo: null,
        address: null,
        dockId: null,
        friendlyName: null,
        isPickupStore: false,
        storeId: null,
      },
      priority: 0,
      salesChannel: null,
      salesChannels: ['1', '2'],
      timeFakeOverhead: '00:00:00',
      wmsEndPoint: '',
    },
    required: [
      'id',
      'name',
      'priority',
      'dockTimeFake',
      'timeFakeOverhead',
      'salesChannels',
      'salesChannel',
      'freightTableIds',
      'wmsEndPoint',
      'pickupStoreInfo',
    ],
    title: '',
  })
  .openapi('ListAllDocks')

const ListFreightValuesSchema = z
  .object({
    absoluteMoneyCost: z.number(),
    country: z.string(),
    maxVolume: z.number(),
    minimumValueInsurance: z.number(),
    operationType: z.int32(),
    polygon: z.string(),
    pricePercent: z.number(),
    pricePercentByWeight: z.number(),
    restrictedFreights: z.array(z.string()).openapi({ description: '' }),
    timeCost: z.string(),
    weightEnd: z.number(),
    weightStart: z.number(),
    zipCodeEnd: z.string(),
    zipCodeStart: z.string(),
  })
  .openapi({
    example: {
      absoluteMoneyCost: 1,
      country: 'BRA',
      maxVolume: 1000000000,
      minimumValueInsurance: 0,
      operationType: 0,
      polygon: '',
      pricePercent: 0,
      pricePercentByWeight: 0,
      restrictedFreights: [],
      timeCost: '2.00:00:00',
      weightEnd: 1000,
      weightStart: 1,
      zipCodeEnd: '99999999',
      zipCodeStart: '0',
    },
    required: [
      'zipCodeStart',
      'zipCodeEnd',
      'weightStart',
      'weightEnd',
      'absoluteMoneyCost',
      'pricePercent',
      'pricePercentByWeight',
      'maxVolume',
      'timeCost',
      'country',
      'operationType',
      'restrictedFreights',
      'polygon',
      'minimumValueInsurance',
    ],
    title: '',
  })
  .openapi('ListFreightValues')

const ListInventoryBySKUSchema = z
  .object({
    balance: z
      .array(
        z
          .object({
            hasUnlimitedQuantity: z.boolean(),
            reservedQuantity: z.int32(),
            totalQuantity: z.int32(),
            warehouseId: z.string(),
            warehouseName: z.string(),
          })
          .openapi({
            example: {
              hasUnlimitedQuantity: false,
              reservedQuantity: 9,
              totalQuantity: 101,
              warehouseId: '1937054',
              warehouseName: 'Estoque A',
            },
            required: [
              'warehouseId',
              'warehouseName',
              'totalQuantity',
              'reservedQuantity',
              'hasUnlimitedQuantity',
            ],
            title: 'Balance',
          }),
      )
      .openapi({ description: '' }),
    skuId: z.string(),
  })
  .openapi({
    example: {
      balance: [
        {
          hasUnlimitedQuantity: false,
          reservedQuantity: 9,
          totalQuantity: 101,
          warehouseId: '1937054',
          warehouseName: 'Estoque A',
        },
        {
          hasUnlimitedQuantity: false,
          reservedQuantity: 0,
          totalQuantity: 100,
          warehouseId: 'avl',
          warehouseName: 'Estoque InStore',
        },
        {
          hasUnlimitedQuantity: false,
          reservedQuantity: 0,
          totalQuantity: 100,
          warehouseId: '1448dc2',
          warehouseName: 'Estoque C',
        },
        {
          hasUnlimitedQuantity: false,
          reservedQuantity: 0,
          totalQuantity: 100,
          warehouseId: '140ac66',
          warehouseName: 'Estoque B',
        },
        {
          hasUnlimitedQuantity: false,
          reservedQuantity: 0,
          totalQuantity: 100,
          warehouseId: 'pickuppoint',
          warehouseName: 'PickupPoint',
        },
        {
          hasUnlimitedQuantity: false,
          reservedQuantity: 0,
          totalQuantity: 200,
          warehouseId: 'pickuppoint_2',
          warehouseName: 'PickupPoint 2',
        },
        {
          hasUnlimitedQuantity: false,
          reservedQuantity: 0,
          totalQuantity: 1011,
          warehouseId: '15bfc76',
          warehouseName: 'Estoque Principal',
        },
      ],
      skuId: '2390059',
    },
    required: ['skuId', 'balance'],
    title: '',
  })
  .openapi('ListInventoryBySKU')

const ListReservationByWarehouseAndSKUSchema = z
  .object({
    aditionalTimeBlockedDays: z.string(),
    availabilityQuantity: z.int32(),
    carrierSchedule: z.array(z.string()).openapi({ description: '' }),
    coordinates: z.string().nullable(),
    deliveryOnWeekends: z.boolean(),
    deliveryWindows: z
      .array(
        z
          .object({
            endDateUtc: z.string().exactOptional(),
            listPrice: z.number().exactOptional(),
            startDateUtc: z.string().exactOptional(),
          })
          .openapi({
            example: {
              endDateUtc: '2016-04-20T12:00:00+00:00',
              listPrice: 10,
              startDateUtc: '2016-04-20T08:00:00+00:00',
            },
            title: 'DeliveryWindow',
            required: [],
          }),
      )
      .openapi({ description: '' }),
    dockId: z.string(),
    dockTime: z.string(),
    freightTableId: z.string(),
    freightTableName: z.string(),
    itemId: z.string(),
    listPrice: z.number(),
    location: z
      .object({
        country: z.string(),
        deliveryPointId: z.string().nullable(),
        inStore: z
          .object({ IsCheckedIn: z.boolean(), StoreId: z.string() })
          .openapi({
            example: { IsCheckedIn: false, StoreId: '180082' },
            required: ['IsCheckedIn', 'StoreId'],
            title: 'InStore1',
          }),
        point: z.string().nullable(),
        zipCode: z.string(),
      })
      .openapi({
        example: {
          country: 'BRA',
          deliveryPointId: null,
          inStore: { IsCheckedIn: false, StoreId: '180082' },
          point: null,
          zipCode: '22220070',
        },
        required: ['zipCode', 'country', 'deliveryPointId', 'point', 'inStore'],
        title: 'Location1',
      }),
    pickupStoreInfo: z.string().nullable(),
    quantity: z.int32(),
    restrictedFreight: z.string().nullable(),
    salesChannel: z.string(),
    slaType: z.string(),
    slaTypeName: z.string(),
    timeToDockPlusDockTime: z.string(),
    totalTime: z.string(),
    transitTime: z.string(),
    wareHouseId: z.string(),
  })
  .openapi({
    example: {
      aditionalTimeBlockedDays: '00:00:00',
      availabilityQuantity: 500,
      carrierSchedule: [],
      coordinates: null,
      deliveryOnWeekends: false,
      deliveryWindows: [
        {
          endDateUtc: '2016-04-20T12:00:00+00:00',
          listPrice: 10,
          startDateUtc: '2016-04-20T08:00:00+00:00',
        },
        {
          endDateUtc: '2016-04-20T18:00:00+00:00',
          listPrice: 10,
          startDateUtc: '2016-04-20T12:01:00+00:00',
        },
        {
          endDateUtc: '2016-04-21T12:00:00+00:00',
          listPrice: 10,
          startDateUtc: '2016-04-21T08:00:00+00:00',
        },
        {
          endDateUtc: '2016-04-21T18:00:00+00:00',
          listPrice: 10,
          startDateUtc: '2016-04-21T12:01:00+00:00',
        },
        {
          endDateUtc: '2016-04-22T12:00:00+00:00',
          listPrice: 10,
          startDateUtc: '2016-04-22T08:00:00+00:00',
        },
        {
          endDateUtc: '2016-04-22T18:00:00+00:00',
          listPrice: 10,
          startDateUtc: '2016-04-22T12:01:00+00:00',
        },
        {
          endDateUtc: '2016-04-23T12:00:00+00:00',
          listPrice: 10,
          startDateUtc: '2016-04-23T08:00:00+00:00',
        },
        {
          endDateUtc: '2016-04-23T18:00:00+00:00',
          listPrice: 10,
          startDateUtc: '2016-04-23T12:01:00+00:00',
        },
        {
          endDateUtc: '2016-04-24T12:00:00+00:00',
          listPrice: 10,
          startDateUtc: '2016-04-24T08:00:00+00:00',
        },
        {
          endDateUtc: '2016-04-24T18:00:00+00:00',
          listPrice: 10,
          startDateUtc: '2016-04-24T12:01:00+00:00',
        },
        {
          endDateUtc: '2016-04-25T12:00:00+00:00',
          listPrice: 10,
          startDateUtc: '2016-04-25T08:00:00+00:00',
        },
        {
          endDateUtc: '2016-04-25T18:00:00+00:00',
          listPrice: 10,
          startDateUtc: '2016-04-25T12:01:00+00:00',
        },
        {
          endDateUtc: '2016-04-26T12:00:00+00:00',
          listPrice: 10,
          startDateUtc: '2016-04-26T08:00:00+00:00',
        },
        {
          endDateUtc: '2016-04-26T18:00:00+00:00',
          listPrice: 10,
          startDateUtc: '2016-04-26T12:01:00+00:00',
        },
      ],
      dockId: '1_1_1',
      dockTime: '00:00:00',
      freightTableId: 'teste1',
      freightTableName: 'Entrega Agendada',
      itemId: '2389945',
      listPrice: 5.25,
      location: {
        country: 'BRA',
        deliveryPointId: null,
        inStore: { IsCheckedIn: false, StoreId: '180082' },
        point: null,
        zipCode: '22220070',
      },
      pickupStoreInfo: null,
      quantity: 1,
      restrictedFreight: null,
      salesChannel: '1',
      slaType: 'Entrega Agendada',
      slaTypeName: 'Entrega Agendada',
      timeToDockPlusDockTime: '1.00:00:00',
      totalTime: '3.00:00:00',
      transitTime: '2.00:00:00',
      wareHouseId: '1937054',
    },
    required: [
      'itemId',
      'quantity',
      'availabilityQuantity',
      'salesChannel',
      'slaType',
      'slaTypeName',
      'freightTableName',
      'freightTableId',
      'listPrice',
      'transitTime',
      'dockTime',
      'timeToDockPlusDockTime',
      'aditionalTimeBlockedDays',
      'totalTime',
      'deliveryWindows',
      'wareHouseId',
      'dockId',
      'location',
      'deliveryOnWeekends',
      'carrierSchedule',
      'restrictedFreight',
      'coordinates',
      'pickupStoreInfo',
    ],
    title: '',
  })
  .openapi('ListReservationByWarehouseAndSKU')

const LocationSchema = z
  .object({
    country: z.string(),
    inStore: z
      .object({ IsCheckedIn: z.boolean(), StoreId: z.string().nullable() })
      .openapi({
        example: { IsCheckedIn: false, StoreId: null },
        required: ['IsCheckedIn', 'StoreId'],
        title: 'InStore',
      }),
    zipCode: z.string(),
  })
  .openapi({
    example: {
      country: 'BRA',
      inStore: { IsCheckedIn: false, StoreId: null },
      zipCode: '22220070',
    },
    required: ['zipCode', 'country', 'inStore'],
    title: 'Location',
  })
  .openapi('Location')

const Location1Schema = z
  .object({
    country: z.string(),
    deliveryPointId: z.string().nullable(),
    inStore: z
      .object({ IsCheckedIn: z.boolean(), StoreId: z.string() })
      .openapi({
        example: { IsCheckedIn: false, StoreId: '180082' },
        required: ['IsCheckedIn', 'StoreId'],
        title: 'InStore1',
      }),
    point: z.string().nullable(),
    zipCode: z.string(),
  })
  .openapi({
    example: {
      country: 'BRA',
      deliveryPointId: null,
      inStore: { IsCheckedIn: false, StoreId: '180082' },
      point: null,
      zipCode: '22220070',
    },
    required: ['zipCode', 'country', 'deliveryPointId', 'point', 'inStore'],
    title: 'Location1',
  })
  .openapi('Location1')

const Location3Schema = z
  .object({
    country: z.string(),
    point: z.array(z.number()).openapi({ description: '' }),
    zipCode: z.string(),
  })
  .openapi({
    example: { country: 'BRA', point: [-43.32475950000003, -22.9999575], zipCode: '22780084' },
    required: ['zipCode', 'country', 'point'],
    title: 'Location3',
  })
  .openapi('Location3')

const Location5Schema = z
  .object({ latitude: z.number(), longitude: z.number() })
  .openapi({
    example: { latitude: -22.974477767944336, longitude: -43.18672561645508 },
    required: ['latitude', 'longitude'],
    title: 'Location5',
  })
  .openapi('Location5')

const MaxDimensionSchema = z
  .object({
    height: z.int32(),
    length: z.int32(),
    maxSumDimension: z.int32(),
    weight: z.int32(),
    width: z.int32(),
  })
  .openapi({
    example: { height: 0, length: 0, maxSumDimension: 0, weight: 0, width: 0 },
    required: ['weight', 'height', 'width', 'length', 'maxSumDimension'],
    title: 'MaxDimension',
  })
  .openapi('MaxDimension')

const MaxDimension1Schema = z
  .object({
    height: z.string().nullable(),
    length: z.string().nullable(),
    maxSumDimension: z.string().nullable(),
  })
  .openapi({
    example: { height: null, length: null, maxSumDimension: null },
    required: ['maxSumDimension', 'height', 'length'],
    title: 'MaxDimension1',
  })
  .openapi('MaxDimension1')

const MaxDimension2Schema = z
  .object({
    height: z.number(),
    length: z.number(),
    maxSumDimension: z.number(),
    weight: z.number(),
    width: z.number(),
  })
  .openapi({
    example: { height: 110, length: 110, maxSumDimension: 200, weight: 0, width: 110 },
    required: ['weight', 'height', 'width', 'length', 'maxSumDimension'],
    title: 'MaxDimension2',
  })
  .openapi('MaxDimension2')

const PickupStoreInfoSchema = z
  .object({
    additionalInfo: z.string().nullable(),
    address: z
      .object({
        city: z.string(),
        complement: z.string(),
        coordinates: z.string().nullable(),
        country: z
          .object({ acronym: z.string(), name: z.string() })
          .openapi({
            example: { acronym: 'BRA', name: 'Brazil' },
            required: ['acronym', 'name'],
            title: 'Country',
          }),
        neighborhood: z.string(),
        number: z.string(),
        postalCode: z.string(),
        state: z.string(),
        street: z.string(),
      })
      .openapi({
        example: {
          city: 'Rio de Janeiro',
          complement: '',
          coordinates: null,
          country: { acronym: 'BRA', name: 'Brazil' },
          neighborhood: 'Catete',
          number: '100',
          postalCode: '22220070',
          state: 'RJ',
          street: 'Artur Bernardes Street',
        },
        required: [
          'postalCode',
          'country',
          'city',
          'state',
          'neighborhood',
          'street',
          'number',
          'complement',
          'coordinates',
        ],
        title: 'Address',
      }),
    dockId: z.string().nullable(),
    friendlyName: z.string().nullable(),
    isPickupStore: z.boolean(),
    storeId: z.string().nullable(),
  })
  .openapi({
    example: {
      additionalInfo: null,
      address: {
        city: 'Rio de Janeiro',
        complement: '',
        coordinates: null,
        country: { acronym: 'BRA', name: 'Brazil' },
        neighborhood: 'Catete',
        number: '100',
        postalCode: '22220070',
        state: 'RJ',
        street: 'Artur Bernardes Street',
      },
      dockId: null,
      friendlyName: null,
      isPickupStore: false,
      storeId: null,
    },
    required: ['isPickupStore', 'storeId', 'friendlyName', 'address', 'additionalInfo', 'dockId'],
    title: 'PickupStoreInfo',
  })
  .openapi('PickupStoreInfo')

const PickupStoreInfo1Schema = z
  .object({
    additionalInfo: z.string().nullable(),
    address: z.string().nullable(),
    dockId: z.string().nullable(),
    friendlyName: z.string().nullable(),
    isPickupStore: z.boolean(),
    storeId: z.string().nullable(),
  })
  .openapi({
    example: {
      additionalInfo: null,
      address: null,
      dockId: null,
      friendlyName: null,
      isPickupStore: false,
      storeId: null,
    },
    required: ['isPickupStore', 'storeId', 'friendlyName', 'address', 'additionalInfo', 'dockId'],
    title: 'PickupStoreInfo1',
  })
  .openapi('PickupStoreInfo1')

const SlaRequestSchema = z
  .object({
    deliveryWindows: z.string().nullable(),
    dockId: z.string(),
    dockTime: z.string(),
    freightTableId: z.string(),
    freightTableName: z.string(),
    item: z
      .object({
        additionalHandlingTime: z.string(),
        dimension: z
          .object({
            height: z.number(),
            length: z.number(),
            maxSumDimension: z.number(),
            weight: z.number(),
            width: z.number(),
          })
          .openapi({
            example: { height: 10, length: 35, maxSumDimension: 0, weight: 800, width: 12 },
            required: ['weight', 'height', 'width', 'length', 'maxSumDimension'],
            title: 'Dimension1',
          }),
        groupItemId: z.string().nullable(),
        id: z.string(),
        kitItem: z.array(z.string()).openapi({ description: '' }),
        modal: z.string().nullable(),
        price: z.number(),
        quantity: z.int32(),
        unlimitedQuantity: z.boolean(),
      })
      .openapi({
        example: {
          additionalHandlingTime: '00:00:00',
          dimension: { height: 10, length: 35, maxSumDimension: 0, weight: 800, width: 12 },
          groupItemId: null,
          id: '2390059',
          kitItem: [],
          modal: null,
          price: 0,
          quantity: 1,
          unlimitedQuantity: false,
        },
        required: [
          'id',
          'groupItemId',
          'quantity',
          'price',
          'modal',
          'additionalHandlingTime',
          'dimension',
          'kitItem',
          'unlimitedQuantity',
        ],
        title: 'Item1',
      }),
    listPrice: z.number(),
    location: z
      .object({
        country: z.string(),
        deliveryPointId: z.string().nullable(),
        inStore: z
          .object({ IsCheckedIn: z.boolean(), StoreId: z.string() })
          .openapi({
            example: { IsCheckedIn: false, StoreId: '180082' },
            required: ['IsCheckedIn', 'StoreId'],
            title: 'InStore1',
          }),
        point: z.string().nullable(),
        zipCode: z.string(),
      })
      .openapi({
        example: {
          country: 'BRA',
          deliveryPointId: null,
          inStore: { IsCheckedIn: false, StoreId: '180082' },
          point: null,
          zipCode: '22220070',
        },
        required: ['zipCode', 'country', 'deliveryPointId', 'point', 'inStore'],
        title: 'Location1',
      }),
    pickupStoreInfo: z.string().nullable(),
    promotionalPrice: z.number(),
    slaType: z.string(),
    slaTypeName: z.string(),
    timeToDockPlusDockTime: z.string(),
    totalTime: z.string(),
    transitTime: z.string(),
    wareHouseId: z.string(),
    wmsEndPoint: z.string(),
  })
  .openapi({
    example: {
      deliveryWindows: null,
      dockId: '1_1_1',
      dockTime: '00:00:00',
      freightTableId: '11cc4b6',
      freightTableName: 'Correios PAC',
      item: {
        additionalHandlingTime: '00:00:00',
        dimension: { height: 10, length: 35, maxSumDimension: 0, weight: 800, width: 12 },
        groupItemId: null,
        id: '2390059',
        kitItem: [],
        modal: null,
        price: 0,
        quantity: 1,
        unlimitedQuantity: false,
      },
      listPrice: 10.5,
      location: {
        country: 'BRA',
        deliveryPointId: null,
        inStore: { IsCheckedIn: false, StoreId: '180082' },
        point: null,
        zipCode: '22220070',
      },
      pickupStoreInfo: null,
      promotionalPrice: 10.5,
      slaType: 'Normal',
      slaTypeName: 'Normal',
      timeToDockPlusDockTime: '1.00:00:00',
      totalTime: '3.00:00:00',
      transitTime: '2.00:00:00',
      wareHouseId: '1937054',
      wmsEndPoint: '',
    },
    required: [
      'item',
      'slaType',
      'slaTypeName',
      'freightTableName',
      'freightTableId',
      'listPrice',
      'promotionalPrice',
      'transitTime',
      'dockTime',
      'timeToDockPlusDockTime',
      'totalTime',
      'deliveryWindows',
      'wareHouseId',
      'dockId',
      'wmsEndPoint',
      'location',
      'pickupStoreInfo',
    ],
    title: 'SlaRequest',
  })
  .openapi('SlaRequest')

const SuccessSchema = z
  .object({
    availableQuantity: z.int32(),
    dispatchedReservationsQuantity: z.int32(),
    isUnlimitedQuantity: z.boolean(),
    quantity: z.int32(),
    skuId: z.string(),
    totalReservedQuantity: z.int32(),
    warehouseId: z.string(),
  })
  .openapi({
    example: {
      availableQuantity: 2147483634,
      dispatchedReservationsQuantity: 0,
      isUnlimitedQuantity: true,
      quantity: 2147483647,
      skuId: '19',
      totalReservedQuantity: 13,
      warehouseId: '1_1',
    },
    required: [
      'skuId',
      'warehouseId',
      'quantity',
      'isUnlimitedQuantity',
      'totalReservedQuantity',
      'dispatchedReservationsQuantity',
      'availableQuantity',
    ],
    title: 'Success',
  })
  .openapi('Success')

const UpdateInventoryBySkuandWarehouseRequestSchema = z
  .object({
    dateUtcOnBalanceSystem: z.string().nullable(),
    quantity: z.int32(),
    unlimitedQuantity: z.boolean(),
  })
  .openapi({
    example: { dateUtcOnBalanceSystem: null, quantity: 101, unlimitedQuantity: false },
    required: ['unlimitedQuantity', 'dateUtcOnBalanceSystem', 'quantity'],
    title: 'UpdateInventoryBySkuandWarehouseRequest',
  })
  .openapi('UpdateInventoryBySkuandWarehouseRequest')

const WarehouseDockSchema = z
  .object({
    cost: z.string(),
    costToDisplay: z.string(),
    dockId: z.string(),
    name: z.string(),
    time: z.string(),
    translateDays: z.string(),
  })
  .openapi({
    example: {
      cost: '5.00',
      costToDisplay: '5,00',
      dockId: '1a8bce3',
      name: 'Centro de Distribui├º├úo Principal',
      time: '3.00:00:00',
      translateDays: 'dias',
    },
    required: ['dockId', 'name', 'time', 'cost', 'translateDays', 'costToDisplay'],
    title: 'WarehouseDock',
  })
  .openapi('WarehouseDock')

const WarehouseDock1Schema = z
  .object({ cost: z.number(), dockId: z.string(), time: z.string() })
  .openapi({
    example: { cost: 0, dockId: '1_1_1', time: '1.00:00:00' },
    required: ['dockId', 'time', 'cost'],
    title: 'WarehouseDock1',
  })
  .openapi('WarehouseDock1')

const AllcarrierSchema = z
  .object({
    carrierSchedule: z.array(z.string()).openapi({ description: '' }),
    dayOfWeekBlockeds: z.array(z.string()).openapi({ description: '' }),
    dayOfWeekForDelivery: z
      .array(
        z
          .object({
            dayOfWeek: z
              .int()
              .openapi({
                description: 'Day of the week, from `0` (sunday) to `6` (saturday).',
                example: 2,
              }),
            deliveryRanges: z
              .array(
                z
                  .object({
                    deliveryCapacity: z
                      .array(
                        z
                          .object({
                            capacityType: z
                              .string()
                              .openapi({
                                description:
                                  'Defines how the delivery capacity is measured for this reservation window, by maximum number of orders (`"ORDERS_QUANTITY"`) or SKUs (`"SKUS_QUANTITY"`).',
                                example: 'ORDERS_QUANTITY',
                              }),
                            maxValue: z
                              .number()
                              .openapi({
                                description:
                                  'Maximum number of orders or SKUs that the store is capable of fulfilling.',
                                example: 0,
                              }),
                          })
                          .openapi({
                            example: { capacityType: 'ORDERS_QUANTITY', maxValue: 55 },
                            required: ['capacityType', 'maxValue'],
                          }),
                      )
                      .exactOptional()
                      .openapi({
                        description:
                          'Sets maximum delivery capacity for a given reservation window for scheduled delivery.',
                      }),
                    endTime: z
                      .string()
                      .openapi({
                        description: 'End time for day of the week.',
                        example: '12:30:00',
                      }),
                    listPrice: z
                      .number()
                      .openapi({ description: 'List price for day of the week.', example: 0 }),
                    startTime: z
                      .string()
                      .openapi({
                        description: 'Start time for day of the week.',
                        example: '11:00:00',
                        title: 'startTime',
                      }),
                  })
                  .openapi({ required: ['startTime', 'endTime', 'listPrice'] }),
              )
              .openapi({ description: 'Reservation windows for scheduled delivery.' }),
          })
          .openapi({ required: ['dayOfWeek', 'deliveryRanges'] }),
      )
      .nullable()
      .openapi({
        description:
          'Select the chosen days for delivery. Values for each day of the week are: 0 = sunday, 1 = monday, 2 = tuesday, 3 = wednesday, 4 = thursday, 5 = friday, 6 = saturday. Make sure to add the available hours for the chosen days, following the example.',
      }),
    deliveryOnWeekends: z.boolean(),
    exclusiveToDeliveryPoints: z.boolean(),
    factorCubicWeight: z.number().nullable(),
    freightTableProcessStatus: z.int32(),
    freightTableValueError: z.string().nullable(),
    freightValue: z.array(z.string()).openapi({ description: '' }),
    id: z.string(),
    isPolygon: z.boolean(),
    maxDimension: z
      .object({
        height: z.number(),
        length: z.number(),
        maxSumDimension: z.number(),
        weight: z.number(),
        width: z.number(),
      })
      .openapi({
        example: { height: 110, length: 110, maxSumDimension: 200, weight: 0, width: 110 },
        required: ['weight', 'height', 'width', 'length', 'maxSumDimension'],
        title: 'MaxDimension2',
      }),
    maxRangeDelivery: z.int32(),
    minimunCubicWeight: z.number(),
    modals: z.array(z.string()).openapi({ description: '' }),
    name: z.string(),
    numberOfItemsPerShipment: z.string().nullable(),
    onlyItemsWithDefinedModal: z.boolean(),
    scheduledDelivery: z.boolean(),
    slaType: z.string(),
  })
  .openapi({
    example: {
      carrierSchedule: [],
      dayOfWeekBlockeds: [],
      dayOfWeekForDelivery: null,
      deliveryOnWeekends: true,
      exclusiveToDeliveryPoints: false,
      factorCubicWeight: 0.0167,
      freightTableProcessStatus: 1,
      freightTableValueError: null,
      freightValue: [],
      id: '11cc4b6',
      isPolygon: false,
      maxDimension: { height: 110, length: 110, maxSumDimension: 200, weight: 0, width: 110 },
      maxRangeDelivery: 0,
      minimunCubicWeight: 10000,
      modals: [],
      name: 'Correios PAC',
      numberOfItemsPerShipment: null,
      onlyItemsWithDefinedModal: false,
      scheduledDelivery: false,
      slaType: 'Normal',
    },
    required: [
      'id',
      'slaType',
      'name',
      'scheduledDelivery',
      'maxRangeDelivery',
      'dayOfWeekForDelivery',
      'dayOfWeekBlockeds',
      'freightValue',
      'factorCubicWeight',
      'freightTableProcessStatus',
      'freightTableValueError',
      'modals',
      'onlyItemsWithDefinedModal',
      'deliveryOnWeekends',
      'carrierSchedule',
      'maxDimension',
      'exclusiveToDeliveryPoints',
      'minimunCubicWeight',
      'isPolygon',
      'numberOfItemsPerShipment',
    ],
    title: 'allcarrier',
  })
  .openapi('Allcarrier')

const CarrierbyidSchema = z
  .object({
    carrierSchedule: z.array(z.string()).openapi({ description: '' }),
    dayOfWeekBlockeds: z.array(z.string()).openapi({ description: '' }),
    dayOfWeekForDelivery: z
      .array(
        z
          .object({
            dayOfWeek: z
              .int()
              .openapi({
                description: 'Day of the week, from `0` (sunday) to `6` (saturday).',
                example: 2,
              }),
            deliveryRanges: z
              .array(
                z
                  .object({
                    deliveryCapacity: z
                      .array(
                        z
                          .object({
                            capacityType: z
                              .string()
                              .openapi({
                                description:
                                  'Defines how the delivery capacity is measured for this reservation window, by maximum number of orders (`"ORDERS_QUANTITY"`) or SKUs (`"SKUS_QUANTITY"`).',
                                example: 'ORDERS_QUANTITY',
                              }),
                            maxValue: z
                              .number()
                              .openapi({
                                description:
                                  'Maximum number of orders or SKUs that the store is capable of fulfilling.',
                                example: 0,
                              }),
                          })
                          .openapi({
                            example: { capacityType: 'ORDERS_QUANTITY', maxValue: 55 },
                            required: ['capacityType', 'maxValue'],
                          }),
                      )
                      .exactOptional()
                      .openapi({
                        description:
                          'Sets maximum delivery capacity for a given reservation window for scheduled delivery.',
                      }),
                    endTime: z
                      .string()
                      .openapi({
                        description: 'End time for day of the week.',
                        example: '12:30:00',
                      }),
                    listPrice: z
                      .number()
                      .openapi({ description: 'List price for day of the week.', example: 0 }),
                    startTime: z
                      .string()
                      .openapi({
                        description: 'Start time for day of the week.',
                        example: '11:00:00',
                        title: 'startTime',
                      }),
                  })
                  .openapi({ required: ['startTime', 'endTime', 'listPrice'] }),
              )
              .openapi({ description: 'Reservation windows for scheduled delivery.' }),
          })
          .openapi({ required: ['dayOfWeek', 'deliveryRanges'] }),
      )
      .nullable()
      .openapi({
        description:
          'Select the chosen days for delivery. Values for each day of the week are: 0 = sunday, 1 = monday, 2 = tuesday, 3 = wednesday, 4 = thursday, 5 = friday, 6 = saturday. Make sure to add the available hours for the chosen days, following the example.',
      }),
    deliveryOnWeekends: z.boolean(),
    exclusiveToDeliveryPoints: z.boolean(),
    factorCubicWeight: z.number(),
    freightTableProcessStatus: z.int32(),
    freightTableValueError: z.string().nullable(),
    freightValue: z.array(z.string()).openapi({ description: '' }),
    id: z.string(),
    isPolygon: z.boolean(),
    maxDimension: z
      .object({
        height: z.number(),
        length: z.number(),
        maxSumDimension: z.number(),
        weight: z.number(),
        width: z.number(),
      })
      .openapi({
        example: { height: 110, length: 110, maxSumDimension: 200, weight: 0, width: 110 },
        required: ['weight', 'height', 'width', 'length', 'maxSumDimension'],
        title: 'MaxDimension2',
      }),
    maxRangeDelivery: z.int32(),
    minimunCubicWeight: z.number(),
    modals: z.array(z.string()).openapi({ description: '' }),
    name: z.string(),
    numberOfItemsPerShipment: z.string().nullable(),
    onlyItemsWithDefinedModal: z.boolean(),
    scheduledDelivery: z.boolean(),
    slaType: z.string(),
  })
  .openapi({
    example: {
      carrierSchedule: [],
      dayOfWeekBlockeds: [],
      dayOfWeekForDelivery: null,
      deliveryOnWeekends: true,
      exclusiveToDeliveryPoints: false,
      factorCubicWeight: 0.0167,
      freightTableProcessStatus: 1,
      freightTableValueError: null,
      freightValue: [],
      id: '11cc4b6',
      isPolygon: false,
      maxDimension: { height: 110, length: 110, maxSumDimension: 200, weight: 0, width: 110 },
      maxRangeDelivery: 0,
      minimunCubicWeight: 10000,
      modals: [],
      name: 'Correios PAC',
      numberOfItemsPerShipment: null,
      onlyItemsWithDefinedModal: false,
      scheduledDelivery: false,
      slaType: 'Normal',
    },
    required: [
      'id',
      'slaType',
      'name',
      'scheduledDelivery',
      'maxRangeDelivery',
      'dayOfWeekForDelivery',
      'dayOfWeekBlockeds',
      'freightValue',
      'factorCubicWeight',
      'freightTableProcessStatus',
      'freightTableValueError',
      'modals',
      'onlyItemsWithDefinedModal',
      'deliveryOnWeekends',
      'carrierSchedule',
      'maxDimension',
      'exclusiveToDeliveryPoints',
      'minimunCubicWeight',
      'isPolygon',
      'numberOfItemsPerShipment',
    ],
    title: 'carrierbyid',
  })
  .openapi('Carrierbyid')

const AppKeySecurityScheme = { in: 'header', name: 'X-VTEX-API-AppKey', type: 'apiKey' }

const AppTokenSecurityScheme = { in: 'header', name: 'X-VTEX-API-AppToken', type: 'apiKey' }

export const getApiLogisticsCapacityResourcesCarrierCapacityTypeShippingPolicyIdTimeFramesRoute =
  createRoute({
    method: 'get',
    path: '/api/logistics-capacity/resources/carrier@{capacityType}@{shippingPolicyId}/time-frames',
    tags: ['Scheduled Delivery'],
    summary: 'Search capacity reservations in time range',
    description:
      'Get information on all capacity reservations made to scheduled delivery windows in a given time range.\n\r\n\r> Note that, while most of our API endpoints return time fields in UTC, this endpoint returns time adjusted to the configured time zone of the account.\n\r\n\r> Note that the combined string `carrier@{capacityType}@{shippingPolicyId}` can be referred to as a "resource" in the API\'s messages.',
    request: {
      headers: z.object({
        'Content-Type': z
          .string()
          .default('application/json; charset=utf-8')
          .openapi({
            param: {
              description: 'Type of the content being sent',
              in: 'header',
              name: 'Content-Type',
              required: true,
              schema: { default: 'application/json; charset=utf-8', type: 'string' },
              style: 'simple',
            },
          }),
        Accept: z
          .string()
          .openapi({
            param: {
              description:
                'HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand',
              in: 'header',
              name: 'Accept',
              required: true,
              schema: { example: 'application/vnd.vtex.availability.v1+json', type: 'string' },
              style: 'simple',
            },
            example: 'application/vnd.vtex.availability.v1+json',
          }),
      }),
      params: z.object({
        capacityType: z
          .string()
          .openapi({
            param: {
              description:
                'How the delivery capacity is measured as defined in the shipping policy. Capacity can be measured by maximum number of orders (`"orders_quantity"`) or SKUs (`"skus_quantity"`).',
              in: 'path',
              name: 'capacityType',
              required: true,
              schema: { example: '{{capacityType}}', type: 'string' },
              style: 'simple',
            },
            example: '{{capacityType}}',
          }),
        shippingPolicyId: z
          .string()
          .openapi({
            param: {
              description: 'ID of shipping policy to search.',
              in: 'path',
              name: 'shippingPolicyId',
              required: true,
              schema: { example: '{{shippingPolicyId}}', type: 'string' },
              style: 'simple',
            },
            example: '{{shippingPolicyId}}',
          }),
      }),
      query: z.object({
        rangeStart: z
          .string()
          .openapi({
            param: {
              description: 'Starting date of time range',
              in: 'query',
              name: 'rangeStart',
              required: true,
              schema: { example: 'yyyy-mm-dd', type: 'string' },
              style: 'form',
            },
            example: 'yyyy-mm-dd',
          }),
        rangeEnd: z
          .string()
          .openapi({
            param: {
              description: 'End date of time range.',
              in: 'query',
              name: 'rangeEnd',
              required: true,
              schema: { example: 'yyyy-mm-dd', type: 'string' },
              style: 'form',
            },
            example: 'yyyy-mm-dd',
          }),
      }),
    },
    responses: { 200: { description: 'OK', content: {} } },
  })

export const getApiLogisticsCapacityResourcesCarrierCapacityTypeShippingPolicyIdTimeFramesWindowDayFWindowStartTimeTWindowEndTimeRoute =
  createRoute({
    method: 'get',
    path: '/api/logistics-capacity/resources/carrier@{capacityType}@{shippingPolicyId}/time-frames/{windowDay}F{windowStartTime}T{windowEndTime}',
    tags: ['Scheduled Delivery'],
    summary: 'Get capacity reservation usage by window',
    description:
      'Retrieves capacity usage of a specific scheduled delivery reservation window.\n\r\n\r> Note that, while most of our API endpoints return time fields in UTC, this endpoint returns time adjusted to the configured time zone of the account.\n\r\n\r> Note that the combined string `carrier@{capacityType}@{shippingPolicyId}` can be referred to as a "resource" in the API\'s messages.',
    request: {
      headers: z.object({
        'Content-Type': z
          .string()
          .default('application/json; charset=utf-8')
          .openapi({
            param: {
              description: 'Type of the content being sent',
              in: 'header',
              name: 'Content-Type',
              required: true,
              schema: { default: 'application/json; charset=utf-8', type: 'string' },
              style: 'simple',
            },
          }),
        Accept: z
          .string()
          .openapi({
            param: {
              description:
                'HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand',
              in: 'header',
              name: 'Accept',
              required: true,
              schema: { example: 'application/vnd.vtex.availability.v1+json', type: 'string' },
              style: 'simple',
            },
            example: 'application/vnd.vtex.availability.v1+json',
          }),
      }),
      params: z.object({
        capacityType: z
          .string()
          .openapi({
            param: {
              description:
                'How the delivery capacity is measured as defined in the shipping policy. Capacity can be measured by maximum number of orders (`"orders_quantity"`) or SKUs (`"skus_quantity"`).',
              in: 'path',
              name: 'capacityType',
              required: true,
              schema: { example: '{{capacityType}}', type: 'string' },
              style: 'simple',
            },
            example: '{{capacityType}}',
          }),
        shippingPolicyId: z
          .string()
          .openapi({
            param: {
              description: 'ID of shipping policy to search.',
              in: 'path',
              name: 'shippingPolicyId',
              required: true,
              schema: { example: '{{shippingPolicyId}}', type: 'string' },
              style: 'simple',
            },
            example: '{{shippingPolicyId}}',
          }),
        windowDay: z
          .string()
          .openapi({
            param: {
              description:
                'Day of the specific scheduled delivery window to be consulted for reservations.',
              in: 'path',
              name: 'windowDay',
              required: true,
              schema: { example: 'yyyy-mm-dd', type: 'string' },
              style: 'simple',
            },
            example: 'yyyy-mm-dd',
          }),
        windowStartTime: z
          .string()
          .openapi({
            param: {
              description:
                'Start time of specific scheduled delivery window to be consulted for reservations.',
              in: 'path',
              name: 'windowStartTime',
              required: true,
              schema: { example: 'hhmm', type: 'string' },
              style: 'simple',
            },
            example: 'hhmm',
          }),
        windowEndTime: z
          .string()
          .openapi({
            param: {
              description:
                'End time of specific scheduled delivery window to be consulted for reservations.',
              in: 'path',
              name: 'windowEndTime',
              required: true,
              schema: { example: 'hhmm', type: 'string' },
              style: 'simple',
            },
            example: 'hhmm',
          }),
      }),
    },
    responses: { 200: { description: 'OK', content: {} } },
  })

export const postApiLogisticsPvtConfigurationCarriersCarrierIdAdddayofweekblockedRoute =
  createRoute({
    method: 'post',
    path: '/api/logistics/pvt/configuration/carriers/{carrierId}/adddayofweekblocked',
    tags: ['Scheduled Delivery'],
    summary: 'Add blocked delivery windows',
    description:
      "Adds blocked delivery windows for your store's shipping policies.\n\r\n\r> Note that, while most of our API endpoints return time fields in UTC, this endpoint returns time adjusted to the configured time zone of the account.",
    operationId: 'AddBlockedDeliveryWindows',
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
      params: z.object({
        carrierId: z
          .string()
          .openapi({
            param: {
              description: '',
              in: 'path',
              name: 'carrierId',
              required: true,
              schema: { type: 'string' },
              style: 'simple',
            },
          }),
      }),
      body: {
        description: '',
        content: {
          'application/json; charset=utf-8': {
            schema: z.string().openapi({ example: '"2016-08-09T08:00:00"' }),
            example: '"2016-08-09T08:00:00"',
          },
        },
        required: true,
      },
    },
    responses: { 200: { description: 'OK', headers: z.object({}) } },
  })

export const getApiLogisticsPvtConfigurationCarriersCarrierIdGetdayofweekblockedRoute = createRoute(
  {
    method: 'get',
    path: '/api/logistics/pvt/configuration/carriers/{carrierId}/getdayofweekblocked',
    tags: ['Scheduled Delivery'],
    summary: 'Retrieve blocked delivery windows',
    description:
      "Lists all blocked delivery windows of your store's shipping policies, searching by carrier ID.\n\r\n\r> Note that, while most of our API endpoints return time fields in UTC, this endpoint returns **Scheduled Delivery** related time fields adjusted to the configured time zone of the account.",
    operationId: 'RetrieveBlockedDeliveryWindows',
    request: {
      headers: z.object({
        'Content-Type': z
          .string()
          .default('application/json; charset=utf-8')
          .openapi({
            param: {
              description: 'Type of the content being sent',
              in: 'header',
              name: 'Content-Type',
              required: true,
              schema: { default: 'application/json; charset=utf-8', type: 'string' },
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
        carrierId: z
          .string()
          .openapi({
            param: {
              description: '',
              in: 'path',
              name: 'carrierId',
              required: true,
              schema: { type: 'string' },
              style: 'simple',
            },
          }),
      }),
    },
    responses: { 200: { description: 'OK' } },
  },
)

export const postApiLogisticsPvtConfigurationCarriersCarrierIdRemovedayofweekblockedRoute =
  createRoute({
    method: 'post',
    path: '/api/logistics/pvt/configuration/carriers/{carrierId}/removedayofweekblocked',
    tags: ['Scheduled Delivery'],
    summary: 'Remove blocked delivery windows',
    description:
      "Removes the blocked delivery windows set to your store's shipping policies.\n\r\n\r> Note that, while most of our API endpoints return time fields in UTC, this endpoint returns time adjusted to the configured time zone of the account.",
    operationId: 'RemoveBlockedDeliveryWindows',
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
      params: z.object({
        carrierId: z
          .string()
          .openapi({
            param: {
              description: '',
              in: 'path',
              name: 'carrierId',
              required: true,
              schema: { type: 'string' },
              style: 'simple',
            },
          }),
      }),
      body: {
        description: '',
        content: {
          'application/json; charset=utf-8': {
            schema: z.string().openapi({ example: '"2016-08-09T08:00:00"' }),
            example: '"2016-08-09T08:00:00"',
          },
        },
        required: true,
      },
    },
    responses: { 200: { description: 'OK', headers: z.object({}) } },
  })

export const getApiLogisticsPvtConfigurationDocksRoute = createRoute({
  method: 'get',
  path: '/api/logistics/pvt/configuration/docks',
  tags: ['Docks'],
  summary: 'List all  docks',
  description: 'Informs a list of all docks.',
  operationId: 'AllDocks',
  request: {
    headers: z.object({
      'Content-Type': z
        .string()
        .default('application/json; charset=utf-8')
        .openapi({
          param: {
            description: 'Type of the content being sent',
            in: 'header',
            name: 'Content-Type',
            required: true,
            schema: { default: 'application/json; charset=utf-8', type: 'string' },
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
        'application/json; charset=utf-8': {
          schema: z.array(
            z
              .object({
                dockTimeFake: z.string(),
                freightTableIds: z.array(z.string()).openapi({ description: '' }),
                id: z.string(),
                name: z.string(),
                pickupStoreInfo: z
                  .object({
                    additionalInfo: z.string().nullable(),
                    address: z.string().nullable(),
                    dockId: z.string().nullable(),
                    friendlyName: z.string().nullable(),
                    isPickupStore: z.boolean(),
                    storeId: z.string().nullable(),
                  })
                  .openapi({
                    example: {
                      additionalInfo: null,
                      address: null,
                      dockId: null,
                      friendlyName: null,
                      isPickupStore: false,
                      storeId: null,
                    },
                    required: [
                      'isPickupStore',
                      'storeId',
                      'friendlyName',
                      'address',
                      'additionalInfo',
                      'dockId',
                    ],
                    title: 'PickupStoreInfo1',
                  }),
                priority: z.int32(),
                salesChannel: z.string().nullable(),
                salesChannels: z.array(z.string()).openapi({ description: '' }),
                timeFakeOverhead: z.string(),
                wmsEndPoint: z.string(),
              })
              .openapi({
                example: {
                  dockTimeFake: '1.00:00:00',
                  freightTableIds: ['11cc4b6', 'teste1', '186a2a6', '1962962', '173a63f'],
                  id: '1a8bce3',
                  name: 'Centro de Distribui├º├úo Principal',
                  pickupStoreInfo: {
                    additionalInfo: null,
                    address: null,
                    dockId: null,
                    friendlyName: null,
                    isPickupStore: false,
                    storeId: null,
                  },
                  priority: 0,
                  salesChannel: null,
                  salesChannels: ['1', '2'],
                  timeFakeOverhead: '00:00:00',
                  wmsEndPoint: '',
                },
                required: [
                  'id',
                  'name',
                  'priority',
                  'dockTimeFake',
                  'timeFakeOverhead',
                  'salesChannels',
                  'salesChannel',
                  'freightTableIds',
                  'wmsEndPoint',
                  'pickupStoreInfo',
                ],
              }),
          ),
          example: [
            {
              dockTimeFake: '1.00:00:00',
              freightTableIds: ['11cc4b6', 'teste1', '186a2a6', '1962962', '173a63f'],
              id: '1a8bce3',
              name: 'Centro de Distribuição Principal',
              pickupStoreInfo: {
                additionalInfo: null,
                address: null,
                dockId: null,
                friendlyName: null,
                isPickupStore: false,
                storeId: null,
              },
              priority: 0,
              salesChannel: null,
              salesChannels: ['1', '2'],
              timeFakeOverhead: '00:00:00',
              wmsEndPoint: '',
            },
            {
              dockTimeFake: '00:00:00',
              freightTableIds: ['1962962', 'teste1', '11cc4b6'],
              id: '1_1_1',
              name: 'Doca A',
              pickupStoreInfo: {
                additionalInfo: null,
                address: null,
                dockId: null,
                friendlyName: null,
                isPickupStore: false,
                storeId: null,
              },
              priority: 1,
              salesChannel: null,
              salesChannels: ['1', '11', '4', '2', '12', '13', '14', '7', '16'],
              timeFakeOverhead: '00:00:00',
              wmsEndPoint: '',
            },
            {
              dockTimeFake: '1.00:00:00',
              freightTableIds: [],
              id: '139270d',
              name: 'Doca B',
              pickupStoreInfo: {
                additionalInfo: null,
                address: null,
                dockId: null,
                friendlyName: null,
                isPickupStore: false,
                storeId: null,
              },
              priority: 0,
              salesChannel: null,
              salesChannels: ['1'],
              timeFakeOverhead: '1.00:00:00',
              wmsEndPoint: '',
            },
            {
              dockTimeFake: '00:00:00',
              freightTableIds: [],
              id: '18dd839',
              name: 'Doca C',
              pickupStoreInfo: {
                additionalInfo: null,
                address: null,
                dockId: null,
                friendlyName: null,
                isPickupStore: false,
                storeId: null,
              },
              priority: 0,
              salesChannel: null,
              salesChannels: ['1'],
              timeFakeOverhead: '00:00:00',
              wmsEndPoint: 'http://recurrent-env-beta.elasticbeanstalk.com/recorrenciawms',
            },
            {
              dockTimeFake: '1.00:00:00',
              freightTableIds: [],
              id: 'avl',
              name: 'Doca InStore',
              pickupStoreInfo: {
                additionalInfo: null,
                address: null,
                dockId: null,
                friendlyName: null,
                isPickupStore: false,
                storeId: null,
              },
              priority: 0,
              salesChannel: null,
              salesChannels: ['18'],
              timeFakeOverhead: '1.00:00:00',
              wmsEndPoint: '',
            },
            {
              dockTimeFake: '1.00:00:00',
              freightTableIds: [],
              id: 'pickup_1',
              name: 'Pickup Point 1',
              pickupStoreInfo: {
                additionalInfo: null,
                address: null,
                dockId: null,
                friendlyName: null,
                isPickupStore: false,
                storeId: null,
              },
              priority: 0,
              salesChannel: null,
              salesChannels: ['1'],
              timeFakeOverhead: '00:00:00',
              wmsEndPoint: '',
            },
            {
              dockTimeFake: '1.00:00:00',
              freightTableIds: [],
              id: 'pickup_2',
              name: 'Pickup Point 2',
              pickupStoreInfo: {
                additionalInfo: null,
                address: null,
                dockId: null,
                friendlyName: null,
                isPickupStore: false,
                storeId: null,
              },
              priority: 0,
              salesChannel: null,
              salesChannels: ['1'],
              timeFakeOverhead: '00:00:00',
              wmsEndPoint: '',
            },
            {
              dockTimeFake: '1.00:00:00',
              freightTableIds: [],
              id: 'pickup_3',
              name: 'Pickup Point 3',
              pickupStoreInfo: {
                additionalInfo: null,
                address: null,
                dockId: null,
                friendlyName: null,
                isPickupStore: false,
                storeId: null,
              },
              priority: 0,
              salesChannel: null,
              salesChannels: ['1'],
              timeFakeOverhead: '00:00:00',
              wmsEndPoint: '',
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
        'Content-Encoding': z
          .string()
          .exactOptional()
          .openapi({ example: 'gzip', param: { required: false } }),
        'Content-Length': z
          .string()
          .exactOptional()
          .openapi({ example: '469', param: { required: false } }),
        Date: z
          .string()
          .exactOptional()
          .openapi({ example: 'Fri, 15 Apr 2016 19:58:37 GMT', param: { required: false } }),
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
        'X-CacheServer': z
          .string()
          .exactOptional()
          .openapi({ example: 'janus-apicache-nginx5', param: { required: false } }),
        'X-Powered-by-VTEX-Janus-ApiCache': z
          .string()
          .exactOptional()
          .openapi({ example: 'v1.3.8', param: { required: false } }),
        'X-Powered-by-VTEX-Janus-Edge': z
          .string()
          .exactOptional()
          .openapi({ example: 'v1.26.4', param: { required: false } }),
        'X-Powered-by-VTEX-Janus-Router': z
          .string()
          .exactOptional()
          .openapi({ example: '2.1.155', param: { required: false } }),
        'X-Track': z
          .string()
          .exactOptional()
          .openapi({ example: 'stable', param: { required: false } }),
        'X-VTEX-Cache-Status-Janus-ApiCache': z
          .string()
          .exactOptional()
          .openapi({ example: 'MISS', param: { required: false } }),
        'X-VTEX-Janus-Router-Backend-App': z
          .string()
          .exactOptional()
          .openapi({ example: 'logist-v6.2.96-stable+863', param: { required: false } }),
        'x-vtex-operation-id': z
          .string()
          .exactOptional()
          .openapi({ example: '4dc9fc80-722a-468f-8f7d-aabe2b804b18', param: { required: false } }),
      }),
    },
  },
})

export const postApiLogisticsPvtConfigurationDocksRoute = createRoute({
  method: 'post',
  path: '/api/logistics/pvt/configuration/docks',
  tags: ['Docks'],
  summary: 'Create/update dock',
  description: 'Creates or updates docks to be used in your logistic operation.',
  operationId: 'Create/UpdateDock',
  request: {
    headers: z.object({
      'Content-Type': z
        .string()
        .default('application/json; charset=utf-8')
        .openapi({
          param: {
            description: 'Type of the content being sent',
            in: 'header',
            name: 'Content-Type',
            required: true,
            schema: { default: 'application/json; charset=utf-8', type: 'string' },
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
    body: {
      description: '',
      content: {
        'application/json; charset=utf-8': {
          schema: z
            .object({
              address: z
                .object({
                  city: z.string(),
                  complement: z.string(),
                  coordinates: z.array(z.array(z.number())),
                  country: z
                    .object({ acronym: z.string(), name: z.string() })
                    .openapi({
                      example: { acronym: 'BRA', name: 'Brazil' },
                      required: ['acronym', 'name'],
                      title: 'Country',
                    }),
                  neighborhood: z.string(),
                  number: z.string(),
                  postalCode: z.string(),
                  state: z.string(),
                  street: z.string(),
                })
                .openapi({
                  example: {
                    city: 'Rio de Janeiro',
                    complement: '',
                    coordinates: [[-43.18228090000002, -22.9460398]],
                    country: { acronym: 'BRA', name: 'Brazil' },
                    neighborhood: 'Catete',
                    number: '100',
                    postalCode: '22220070',
                    state: 'RJ',
                    street: 'Artur Bernardes Street',
                  },
                  required: [
                    'postalCode',
                    'country',
                    'city',
                    'state',
                    'neighborhood',
                    'street',
                    'number',
                    'complement',
                    'coordinates',
                  ],
                  title: 'Address1',
                }),
              dockTimeFake: z.string(),
              freightTableIds: z.array(z.string()).openapi({ description: '' }),
              id: z.string(),
              name: z.string(),
              priority: z.int32(),
              salesChannel: z.string().nullable(),
              salesChannels: z.array(z.string()).openapi({ description: '' }),
              timeFakeOverhead: z.string(),
              wmsEndPoint: z.string(),
            })
            .openapi({
              example: {
                address: {
                  city: 'Rio de Janeiro',
                  complement: '',
                  coordinates: [[-43.18228090000002, -22.9460398]],
                  country: { acronym: 'BRA', name: 'Brazil' },
                  neighborhood: 'Catete',
                  number: '100',
                  postalCode: '22220070',
                  state: 'RJ',
                  street: 'Artur Bernardes Street',
                },
                dockTimeFake: '00:00:00',
                freightTableIds: [],
                id: 'catete',
                name: 'Loja Catete',
                priority: 0,
                salesChannel: null,
                salesChannels: ['1'],
                timeFakeOverhead: '00:00:00',
                wmsEndPoint: '',
              },
              required: [
                'id',
                'name',
                'priority',
                'dockTimeFake',
                'timeFakeOverhead',
                'salesChannels',
                'salesChannel',
                'freightTableIds',
                'wmsEndPoint',
                'address',
              ],
              title: 'Create/UpdateDockRequest',
            }),
          example: {
            address: {
              city: 'Rio de Janeiro',
              complement: '',
              coordinates: [[-43.18228090000002, -22.9460398]],
              country: { acronym: 'BRA', name: 'Brazil' },
              neighborhood: 'Catete',
              number: '100',
              postalCode: '22220070',
              state: 'RJ',
              street: 'Artur Bernardes Street',
            },
            dockTimeFake: '00:00:00',
            freightTableIds: [],
            id: 'catete',
            name: 'Loja Catete',
            priority: 0,
            salesChannel: null,
            salesChannels: ['1'],
            timeFakeOverhead: '00:00:00',
            wmsEndPoint: '',
          },
        },
      },
      required: true,
    },
  },
  responses: { 200: { description: 'OK', headers: z.object({}) } },
})

export const getApiLogisticsPvtConfigurationDocksDockIdRoute = createRoute({
  method: 'get',
  path: '/api/logistics/pvt/configuration/docks/{dockId}',
  tags: ['Docks'],
  summary: 'List dock by ID',
  description: "Informs a given dock's information, searching by dock ID.",
  operationId: 'DockById',
  request: {
    headers: z.object({
      'Content-Type': z
        .string()
        .default('application/json; charset=utf-8')
        .openapi({
          param: {
            description: 'Type of the content being sent',
            in: 'header',
            name: 'Content-Type',
            required: true,
            schema: { default: 'application/json; charset=utf-8', type: 'string' },
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
      dockId: z
        .string()
        .openapi({
          param: {
            description: '',
            in: 'path',
            name: 'dockId',
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
        'application/json; charset=utf-8': {
          schema: z
            .object({
              dockTimeFake: z.string(),
              freightTableIds: z.array(z.string()).openapi({ description: '' }),
              id: z.string(),
              name: z.string(),
              pickupStoreInfo: z
                .object({
                  additionalInfo: z.string().nullable(),
                  address: z.string().nullable(),
                  dockId: z.string().nullable(),
                  friendlyName: z.string().nullable(),
                  isPickupStore: z.boolean(),
                  storeId: z.string().nullable(),
                })
                .openapi({
                  example: {
                    additionalInfo: null,
                    address: null,
                    dockId: null,
                    friendlyName: null,
                    isPickupStore: false,
                    storeId: null,
                  },
                  required: [
                    'isPickupStore',
                    'storeId',
                    'friendlyName',
                    'address',
                    'additionalInfo',
                    'dockId',
                  ],
                  title: 'PickupStoreInfo1',
                }),
              priority: z.int32(),
              salesChannel: z.string().nullable(),
              salesChannels: z.array(z.string()).openapi({ description: '' }),
              timeFakeOverhead: z.string(),
              wmsEndPoint: z.string(),
            })
            .openapi({
              example: {
                dockTimeFake: '1.00:00:00',
                freightTableIds: ['11cc4b6', 'teste1', '186a2a6', '1962962', '173a63f'],
                id: '1a8bce3',
                name: 'Centro de Distribui├º├úo Principal',
                pickupStoreInfo: {
                  additionalInfo: null,
                  address: null,
                  dockId: null,
                  friendlyName: null,
                  isPickupStore: false,
                  storeId: null,
                },
                priority: 0,
                salesChannel: null,
                salesChannels: ['1', '2'],
                timeFakeOverhead: '00:00:00',
                wmsEndPoint: '',
              },
              required: [
                'id',
                'name',
                'priority',
                'dockTimeFake',
                'timeFakeOverhead',
                'salesChannels',
                'salesChannel',
                'freightTableIds',
                'wmsEndPoint',
                'pickupStoreInfo',
              ],
              title: '',
            }),
          example: {
            dockTimeFake: '1.00:00:00',
            freightTableIds: ['11cc4b6', 'teste1', '186a2a6', '1962962', '173a63f'],
            id: '1a8bce3',
            name: 'Centro de Distribui├º├úo Principal',
            pickupStoreInfo: {
              additionalInfo: null,
              address: null,
              dockId: null,
              friendlyName: null,
              isPickupStore: false,
              storeId: null,
            },
            priority: 0,
            salesChannel: null,
            salesChannels: ['1', '2'],
            timeFakeOverhead: '00:00:00',
            wmsEndPoint: '',
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
          .openapi({ example: '391', param: { required: false } }),
        Date: z
          .string()
          .exactOptional()
          .openapi({ example: 'Fri, 15 Apr 2016 19:58:51 GMT', param: { required: false } }),
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
        'X-CacheServer': z
          .string()
          .exactOptional()
          .openapi({ example: 'janus-apicache-nginx2', param: { required: false } }),
        'X-Powered-by-VTEX-Janus-ApiCache': z
          .string()
          .exactOptional()
          .openapi({ example: 'v1.3.8', param: { required: false } }),
        'X-Powered-by-VTEX-Janus-Edge': z
          .string()
          .exactOptional()
          .openapi({ example: 'v1.26.4', param: { required: false } }),
        'X-Powered-by-VTEX-Janus-Router': z
          .string()
          .exactOptional()
          .openapi({ example: '2.1.155', param: { required: false } }),
        'X-Track': z
          .string()
          .exactOptional()
          .openapi({ example: 'stable', param: { required: false } }),
        'X-VTEX-Cache-Status-Janus-ApiCache': z
          .string()
          .exactOptional()
          .openapi({ example: 'MISS', param: { required: false } }),
        'X-VTEX-Janus-Router-Backend-App': z
          .string()
          .exactOptional()
          .openapi({ example: 'logist-v6.2.96-stable+863', param: { required: false } }),
        'x-vtex-operation-id': z
          .string()
          .exactOptional()
          .openapi({ example: '7df9de37-d013-4823-bbd7-5726aa8d7f7a', param: { required: false } }),
      }),
    },
  },
})

export const deleteApiLogisticsPvtConfigurationDocksDockIdRoute = createRoute({
  method: 'delete',
  path: '/api/logistics/pvt/configuration/docks/{dockId}',
  tags: ['Docks'],
  summary: 'Delete dock',
  description: 'Deletes dock by dock ID.',
  operationId: 'Dock',
  request: {
    headers: z.object({
      'Content-Type': z
        .string()
        .default('application/json; charset=utf-8')
        .openapi({
          param: {
            description: 'Type of the content being sent',
            in: 'header',
            name: 'Content-Type',
            required: true,
            schema: { default: 'application/json; charset=utf-8', type: 'string' },
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
      dockId: z
        .string()
        .openapi({
          param: {
            description: '',
            in: 'path',
            name: 'dockId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK', headers: z.object({}) } },
})

export const postApiLogisticsPvtConfigurationDocksDockIdActivationRoute = createRoute({
  method: 'post',
  path: '/api/logistics/pvt/configuration/docks/{dockId}/activation',
  tags: ['Docks'],
  summary: 'Activate dock',
  description: 'Activates dock through dock ID.',
  operationId: 'ActivateDock',
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
    params: z.object({
      dockId: z
        .string()
        .openapi({
          param: {
            description: '',
            in: 'path',
            name: 'dockId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK', headers: z.object({}) } },
})

export const postApiLogisticsPvtConfigurationDocksDockIdDeactivationRoute = createRoute({
  method: 'post',
  path: '/api/logistics/pvt/configuration/docks/{dockId}/deactivation',
  tags: ['Docks'],
  summary: 'Deactivate dock',
  description: 'Deactivate dock by dock ID',
  operationId: 'DeactivateDock',
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
    params: z.object({
      dockId: z
        .string()
        .openapi({
          param: {
            description: '',
            in: 'path',
            name: 'dockId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK', headers: z.object({}) } },
})

export const postApiLogisticsPvtConfigurationFreightsCarrierIdValuesUpdateRoute = createRoute({
  method: 'post',
  path: '/api/logistics/pvt/configuration/freights/{carrierId}/values/update',
  tags: ['Freight Values'],
  summary: 'Create/update freight values',
  description:
    "Creates or updates the freight values of your store's carriers. Learn more in [Shipping rate template](https://help.vtex.com/en/tutorial/planilha-de-frete--tutorials_127#).",
  operationId: 'Create/UpdateFreightValues',
  request: {
    headers: z.object({
      'Content-Type': z
        .string()
        .default('application/json; charset=utf-8')
        .openapi({
          param: {
            description: 'Type of the content being sent',
            in: 'header',
            name: 'Content-Type',
            required: true,
            schema: { default: 'application/json; charset=utf-8', type: 'string' },
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
      carrierId: z
        .string()
        .openapi({
          param: {
            description: '',
            in: 'path',
            name: 'carrierId',
            required: true,
            schema: { example: 'carrier123', type: 'string' },
            style: 'simple',
          },
          example: 'carrier123',
        }),
    }),
    body: {
      content: {
        'application/json; charset=utf-8': {
          schema: z
            .array(
              z
                .object({
                  absoluteMoneyCost: z
                    .string()
                    .openapi({
                      description: 'Fixed shipping cost to be charged in a decimal number.',
                      example: '1.00',
                    }),
                  country: z
                    .string()
                    .openapi({
                      description:
                        'Three letter ISO code for the country where the delivery will take place.',
                      example: 'BRA',
                    }),
                  maxVolume: z
                    .int32()
                    .openapi({
                      description: 'Maximum volume that can be transported by the carrier in cm³.',
                      example: 1000000000,
                    }),
                  operationType: z
                    .int32()
                    .openapi({
                      description:
                        'Indicates desired action for the object. Possible values are `1` (Insert), `2` (Update) or `3`(Delete).',
                      example: 1,
                    }),
                  polygon: z
                    .string()
                    .openapi({
                      description:
                        'Polygon ID, according to the [geolocation](https://help.vtex.com/en/tutorial/registering-geolocation/) feature.',
                      example: 'polygon2',
                    }),
                  pricePercent: z
                    .int32()
                    .openapi({
                      description:
                        '[Price-based additional shipping charge](https://help.vtex.com/en/tutorial/additional-shipping-costs--2vqGwMn0LabkOHY6zSHYNV), calculated based on the total price of the order, in decimal number. You must fill in this field with a percentage value. For example, for an additional charge of 10%, fill in the table with 10.',
                      example: 10,
                    }),
                  pricePercentByWeight: z
                    .int32()
                    .openapi({
                      description:
                        '[Weight-based additional shipping charge](https://help.vtex.com/en/tutorial/additional-shipping-costs--2vqGwMn0LabkOHY6zSHYNV), calculated based on the total weight of the order.',
                      example: 0,
                    }),
                  timeCost: z
                    .string()
                    .openapi({
                      description:
                        'Delivery time frame informed by the carrier, in the format DD.HH:MM:SS.',
                      example: '2.00:00:00',
                    }),
                  weightEnd: z
                    .int32()
                    .openapi({ description: 'Maximum weight allowed.', example: 1000 }),
                  weightStart: z
                    .int32()
                    .openapi({ description: 'Minimum weight allowed', example: 1 }),
                  zipCodeEnd: z
                    .string()
                    .openapi({ description: 'End of postal code interval.', example: '1234500' }),
                  zipCodeStart: z
                    .string()
                    .openapi({ description: 'Start of postal code interval.', example: '1000000' }),
                })
                .openapi({
                  required: [
                    'absoluteMoneyCost',
                    'country',
                    'maxVolume',
                    'operationType',
                    'pricePercent',
                    'pricePercentByWeight',
                    'timeCost',
                    'weightEnd',
                    'weightStart',
                    'zipCodeEnd',
                    'zipCodeStart',
                    'polygon',
                  ],
                  title: 'Create/UpdateFreightValuesRequest',
                }),
            )
            .openapi({
              description:
                'Array of objects, each containing information on a specific freight interval.',
            }),
        },
      },
      required: true,
    },
  },
  responses: { 200: { description: 'OK', headers: z.object({}) } },
})

export const getApiLogisticsPvtConfigurationFreightsCarrierIdCepValuesRoute = createRoute({
  method: 'get',
  path: '/api/logistics/pvt/configuration/freights/{carrierId}/{cep}/values',
  tags: ['Freight Values'],
  summary: 'List freight values',
  description:
    "Lists freight values apointed to your store's carriers, searching by carrier ID and postal code (`cep`).",
  operationId: 'FreightValues',
  request: {
    headers: z.object({
      'Content-Type': z
        .string()
        .default('application/json; charset=utf-8')
        .openapi({
          param: {
            description: 'Type of the content being sent',
            in: 'header',
            name: 'Content-Type',
            required: true,
            schema: { default: 'application/json; charset=utf-8', type: 'string' },
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
      carrierId: z
        .string()
        .openapi({
          param: {
            description: 'Carrier ID',
            in: 'path',
            name: 'carrierId',
            required: true,
            schema: { example: 'carrier-123', type: 'string' },
            style: 'simple',
          },
          example: 'carrier-123',
        }),
      cep: z
        .string()
        .openapi({
          param: {
            description: 'Postal code.',
            in: 'path',
            name: 'cep',
            required: true,
            schema: { example: '12345000', type: 'string' },
            style: 'simple',
          },
          example: '12345000',
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json; charset=utf-8': {
          schema: z.array(
            z
              .object({
                absoluteMoneyCost: z.number(),
                country: z.string(),
                maxVolume: z.number(),
                minimumValueInsurance: z.number(),
                operationType: z.int32(),
                polygon: z.string(),
                pricePercent: z.number(),
                pricePercentByWeight: z.number(),
                restrictedFreights: z.array(z.string()).openapi({ description: '' }),
                timeCost: z.string(),
                weightEnd: z.number(),
                weightStart: z.number(),
                zipCodeEnd: z.string(),
                zipCodeStart: z.string(),
              })
              .openapi({
                example: {
                  absoluteMoneyCost: 1,
                  country: 'BRA',
                  maxVolume: 1000000000,
                  minimumValueInsurance: 0,
                  operationType: 0,
                  polygon: '',
                  pricePercent: 0,
                  pricePercentByWeight: 0,
                  restrictedFreights: [],
                  timeCost: '2.00:00:00',
                  weightEnd: 1000,
                  weightStart: 1,
                  zipCodeEnd: '99999999',
                  zipCodeStart: '0',
                },
                required: [
                  'zipCodeStart',
                  'zipCodeEnd',
                  'weightStart',
                  'weightEnd',
                  'absoluteMoneyCost',
                  'pricePercent',
                  'pricePercentByWeight',
                  'maxVolume',
                  'timeCost',
                  'country',
                  'operationType',
                  'restrictedFreights',
                  'polygon',
                  'minimumValueInsurance',
                ],
              }),
          ),
          example: [
            {
              absoluteMoneyCost: 1,
              country: 'BRA',
              maxVolume: 1000000000,
              minimumValueInsurance: 0,
              operationType: 0,
              polygon: '',
              pricePercent: 0,
              pricePercentByWeight: 0,
              restrictedFreights: [],
              timeCost: '2.00:00:00',
              weightEnd: 1000,
              weightStart: 1,
              zipCodeEnd: '99999999',
              zipCodeStart: '0',
            },
            {
              absoluteMoneyCost: 15,
              country: 'BRA',
              maxVolume: 1000000000,
              minimumValueInsurance: 0,
              operationType: 0,
              polygon: '',
              pricePercent: 0,
              pricePercentByWeight: 0,
              restrictedFreights: [],
              timeCost: '2.00:00:00',
              weightEnd: 10000,
              weightStart: 1001.001,
              zipCodeEnd: '99999999',
              zipCodeStart: '0',
            },
            {
              absoluteMoneyCost: 20,
              country: 'BRA',
              maxVolume: 1000000000,
              minimumValueInsurance: 0,
              operationType: 0,
              polygon: '',
              pricePercent: 0,
              pricePercentByWeight: 0,
              restrictedFreights: [],
              timeCost: '2.00:00:00',
              weightEnd: 100000,
              weightStart: 10001.001,
              zipCodeEnd: '99999999',
              zipCodeStart: '0',
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
          .openapi({ example: '919', param: { required: false } }),
        Date: z
          .string()
          .exactOptional()
          .openapi({ example: 'Fri, 15 Apr 2016 19:49:41 GMT', param: { required: false } }),
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
        'X-CacheServer': z
          .string()
          .exactOptional()
          .openapi({ example: 'janus-apicache-nginx1', param: { required: false } }),
        'X-Powered-by-VTEX-Janus-ApiCache': z
          .string()
          .exactOptional()
          .openapi({ example: 'v1.3.8', param: { required: false } }),
        'X-Powered-by-VTEX-Janus-Edge': z
          .string()
          .exactOptional()
          .openapi({ example: 'v1.26.4', param: { required: false } }),
        'X-Powered-by-VTEX-Janus-Router': z
          .string()
          .exactOptional()
          .openapi({ example: '2.1.155', param: { required: false } }),
        'X-Track': z
          .string()
          .exactOptional()
          .openapi({ example: 'stable', param: { required: false } }),
        'X-VTEX-Cache-Status-Janus-ApiCache': z
          .string()
          .exactOptional()
          .openapi({ example: 'MISS', param: { required: false } }),
        'X-VTEX-Janus-Router-Backend-App': z
          .string()
          .exactOptional()
          .openapi({ example: 'logist-v6.2.96-stable+863', param: { required: false } }),
        'x-vtex-operation-id': z
          .string()
          .exactOptional()
          .openapi({ example: 'f0945154-c722-40a6-8c24-3873f8cd16c7', param: { required: false } }),
      }),
    },
  },
})

export const getApiLogisticsPvtConfigurationGeoshapeRoute = createRoute({
  method: 'get',
  path: '/api/logistics/pvt/configuration/geoshape',
  tags: ['Polygons'],
  summary: 'List paged polygons',
  description: 'Lists stored polygons.',
  operationId: 'PagedPolygons',
  request: {
    query: z.object({
      page: z
        .string()
        .openapi({
          param: {
            description: '',
            explode: true,
            in: 'query',
            name: 'page',
            required: true,
            schema: { example: '{{page}}', type: 'string' },
            style: 'form',
          },
          example: '{{page}}',
        }),
      perPage: z
        .string()
        .openapi({
          param: {
            description: '',
            explode: true,
            in: 'query',
            name: 'perPage',
            required: true,
            schema: { example: '{{perPage}}', type: 'string' },
            style: 'form',
          },
          example: '{{perPage}}',
        }),
    }),
    headers: z.object({
      'Content-Type': z
        .string()
        .default('application/json; charset=utf-8')
        .openapi({
          param: {
            description: 'Type of the content being sent',
            in: 'header',
            name: 'Content-Type',
            required: true,
            schema: { default: 'application/json; charset=utf-8', type: 'string' },
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
  responses: { 200: { description: 'OK', headers: z.object({}) } },
})

export const putApiLogisticsPvtConfigurationGeoshapeRoute = createRoute({
  method: 'put',
  path: '/api/logistics/pvt/configuration/geoshape',
  tags: ['Polygons'],
  summary: 'Create/update polygon',
  description: "Creates or updates your store's polygons by geoshape coordinates and polygon name.",
  operationId: 'CreateUpdatePolygon',
  request: {
    headers: z.object({
      'Content-Type': z
        .string()
        .default('application/json; charset=utf-8')
        .openapi({
          param: {
            description: 'Type of the content being sent',
            in: 'header',
            name: 'Content-Type',
            required: true,
            schema: { default: 'application/json; charset=utf-8', type: 'string' },
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
    body: {
      description: '',
      content: {
        'application/json; charset=utf-8': {
          schema: z
            .object({
              geoShape: z
                .object({ coordinates: z.array(z.array(z.number())) })
                .openapi({ required: ['coordinates'], title: 'GeoShape' }),
              name: z.string(),
            })
            .openapi({ required: ['name', 'geoShape'], title: 'Create/UpdatePolygonRequest' }),
        },
      },
      required: true,
    },
  },
  responses: { 200: { description: 'OK', headers: z.object({}) } },
})

export const getApiLogisticsPvtConfigurationGeoshapePolygonNameRoute = createRoute({
  method: 'get',
  path: '/api/logistics/pvt/configuration/geoshape/{polygonName}',
  tags: ['Polygons'],
  summary: 'List polygon by ID',
  description: "Lists your store's polygons by searching through polygon name",
  operationId: 'PolygonbyId',
  request: {
    headers: z.object({
      'Content-Type': z
        .string()
        .default('application/json; charset=utf-8')
        .openapi({
          param: {
            description: 'Type of the content being sent',
            in: 'header',
            name: 'Content-Type',
            required: true,
            schema: { default: 'application/json; charset=utf-8', type: 'string' },
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
      polygonName: z
        .string()
        .openapi({
          param: {
            description: '',
            in: 'path',
            name: 'polygonName',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK', headers: z.object({}) } },
})

export const deleteApiLogisticsPvtConfigurationGeoshapePolygonNameRoute = createRoute({
  method: 'delete',
  path: '/api/logistics/pvt/configuration/geoshape/{polygonName}',
  tags: ['Polygons'],
  summary: 'Delete polygon',
  description: 'Deletes polygon set up in your store, by polygon name.',
  operationId: 'DeletePolygon',
  request: {
    headers: z.object({
      'Content-Type': z
        .string()
        .default('application/json; charset=utf-8')
        .openapi({
          param: {
            description: 'Type of the content being sent',
            in: 'header',
            name: 'Content-Type',
            required: true,
            schema: { default: 'application/json; charset=utf-8', type: 'string' },
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
      polygonName: z
        .string()
        .openapi({
          param: {
            description: '',
            in: 'path',
            name: 'polygonName',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK', headers: z.object({}) } },
})

export const getApiLogisticsPvtConfigurationHolidaysRoute = createRoute({
  method: 'get',
  path: '/api/logistics/pvt/configuration/holidays',
  tags: ['Holidays'],
  summary: 'List all holidays',
  description: 'Lists information of all holidays.',
  operationId: 'AllHolidays',
  request: {
    headers: z.object({
      'Content-Type': z
        .string()
        .default('application/json; charset=utf-8')
        .openapi({
          param: {
            description: 'Type of the content being sent',
            in: 'header',
            name: 'Content-Type',
            required: true,
            schema: { default: 'application/json; charset=utf-8', type: 'string' },
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
  responses: { 200: { description: 'OK', headers: z.object({}) } },
})

export const getApiLogisticsPvtConfigurationHolidaysHolidayIdRoute = createRoute({
  method: 'get',
  path: '/api/logistics/pvt/configuration/holidays/{holidayId}',
  tags: ['Holidays'],
  summary: 'List holiday by ID',
  description: "Lists holiday's information by holiday ID.",
  operationId: 'HolidayById',
  request: {
    headers: z.object({
      'Content-Type': z
        .string()
        .default('application/json; charset=utf-8')
        .openapi({
          param: {
            description: 'Type of the content being sent',
            in: 'header',
            name: 'Content-Type',
            required: true,
            schema: { default: 'application/json; charset=utf-8', type: 'string' },
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
      holidayId: z
        .string()
        .openapi({
          param: {
            description: '',
            in: 'path',
            name: 'holidayId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK', headers: z.object({}) } },
})

export const putApiLogisticsPvtConfigurationHolidaysHolidayIdRoute = createRoute({
  method: 'put',
  path: '/api/logistics/pvt/configuration/holidays/{holidayId}',
  tags: ['Holidays'],
  summary: 'Create/update holiday',
  description: 'Creates or updates holidays through holiday ID.',
  operationId: 'Create/UpdateHoliday',
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
        .default('application/json; charset=utf-8')
        .openapi({
          param: {
            description: 'Type of the content being sent',
            in: 'header',
            name: 'Content-Type',
            required: true,
            schema: { default: 'application/json; charset=utf-8', type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      holidayId: z
        .string()
        .openapi({
          param: {
            description: '',
            in: 'path',
            name: 'holidayId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    body: {
      description: '',
      content: {
        'application/json; charset=utf-8': {
          schema: z
            .object({ name: z.string(), startDate: z.string() })
            .openapi({
              example: { name: 'Natal', startDate: '2016-12-25' },
              required: ['name', 'startDate'],
              title: 'Create/UpdateHolidayRequest',
            }),
          example: { name: 'Natal', startDate: '2016-12-25' },
        },
      },
      required: true,
    },
  },
  responses: { 200: { description: 'OK', headers: z.object({}) } },
})

export const deleteApiLogisticsPvtConfigurationHolidaysHolidayIdRoute = createRoute({
  method: 'delete',
  path: '/api/logistics/pvt/configuration/holidays/{holidayId}',
  tags: ['Holidays'],
  summary: 'Delete holiday',
  description: 'Deletes given holidays set up in your store.',
  operationId: 'Holiday',
  request: {
    headers: z.object({
      'Content-Type': z
        .string()
        .default('application/json; charset=utf-8')
        .openapi({
          param: {
            description: 'Type of the content being sent',
            in: 'header',
            name: 'Content-Type',
            required: true,
            schema: { default: 'application/json; charset=utf-8', type: 'string' },
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
      holidayId: z
        .string()
        .openapi({
          param: {
            description: '',
            in: 'path',
            name: 'holidayId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK', headers: z.object({}) } },
})

export const getApiLogisticsPvtConfigurationPickuppointsRoute = createRoute({
  method: 'get',
  path: '/api/logistics/pvt/configuration/pickuppoints',
  tags: ['Pickup points'],
  summary: 'List all pickup points',
  description: "Lists all of your store's pickup points.",
  operationId: 'ListAllPickupPpoints',
  request: {
    headers: z.object({
      'Content-Type': z
        .string()
        .default('application/json; charset=utf-8')
        .openapi({
          param: {
            description: 'Type of the content being sent',
            in: 'header',
            name: 'Content-Type',
            required: true,
            schema: { default: 'application/json; charset=utf-8', type: 'string' },
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
        'application/json; charset=utf-8': {
          schema: z
            .array(
              z
                .object({
                  accountGroupId: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'Account group ID.' }),
                  accountOwnerId: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'Account owner ID.' }),
                  accountOwnerName: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'Account owner name.' }),
                  address: z
                    .object({
                      city: z.string().exactOptional().openapi({ description: 'City.' }),
                      complement: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'Address complement.' }),
                      country: z
                        .object({
                          acronym: z
                            .string()
                            .exactOptional()
                            .openapi({ description: 'Three letter ISO code.' }),
                          name: z
                            .string()
                            .exactOptional()
                            .openapi({ description: 'Country name.' }),
                        })
                        .exactOptional()
                        .openapi({ example: { acronym: 'BRA', name: 'Brazil' }, required: [] }),
                      location: z
                        .object({
                          latitude: z
                            .number()
                            .exactOptional()
                            .openapi({ description: 'Latitude.' }),
                          longitude: z
                            .number()
                            .exactOptional()
                            .openapi({ description: 'Longitude.' }),
                        })
                        .exactOptional()
                        .openapi({
                          description: 'Geolocation properties.',
                          example: { latitude: -22.974477767944336, longitude: -43.18672561645508 },
                          required: [],
                        }),
                      neighborhood: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'Neighborhood.' }),
                      number: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'Pickup point address number.' }),
                      postalCode: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'Postal code.' }),
                      state: z.string().exactOptional().openapi({ description: 'State.' }),
                      street: z.string().exactOptional().openapi({ description: 'Street name.' }),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  businessHours: z
                    .array(
                      z
                        .object({
                          closingTime: z
                            .string()
                            .exactOptional()
                            .openapi({ description: 'Closing time in `hh:mm:ss`.' }),
                          dayOfWeek: z
                            .int()
                            .exactOptional()
                            .openapi({
                              description: 'Day of the week, from `0` (sunday) to `6` (saturday).',
                            }),
                          openingTime: z
                            .string()
                            .exactOptional()
                            .openapi({ description: 'Opening time in `hh:mm:ss`.' }),
                        })
                        .openapi({
                          example: {
                            closingTime: '20:00:00',
                            dayOfWeek: 1,
                            openingTime: '08:00:00',
                          },
                          required: [],
                        }),
                    )
                    .exactOptional()
                    .openapi({
                      description: 'Business hours information for each day of the week.',
                    }),
                  description: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'Pickup point description.' }),
                  distance: z.number().exactOptional().openapi({ description: 'Distance.' }),
                  formatted_address: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'Formated address.' }),
                  id: z.string().exactOptional().openapi({ description: 'Pickup point ID.' }),
                  instructions: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'Instructions.' }),
                  isActive: z
                    .boolean()
                    .exactOptional()
                    .openapi({ description: 'Indicates whether pickup point is active.' }),
                  isThirdPartyPickup: z
                    .boolean()
                    .exactOptional()
                    .openapi({ description: 'Indicates whether pickup point is third party.' }),
                  name: z.string().exactOptional().openapi({ description: 'Pickup point name.' }),
                  originalId: z.string().exactOptional().openapi({ description: 'Original ID.' }),
                  parentAccountName: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'Parent account name.' }),
                  pickupHolidays: z
                    .array(z.string().openapi({ description: 'Holliday date.' }))
                    .exactOptional()
                    .openapi({ description: 'Holidays which apply for pickup point.' }),
                  seller: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'Seller corresponding to pickup point.' }),
                  tagsLabel: z
                    .array(z.string().openapi({ description: 'Tag' }))
                    .exactOptional()
                    .openapi({ description: 'List of tags.' }),
                })
                .openapi({
                  example: {
                    _sort: [1624907190000],
                    accountGroupId: '814a304c-6fe9-4160-b81e-4c7799170993',
                    accountOwnerId: 'c97ef6c8-491a-439f-927c-f9918644329f',
                    accountOwnerName: 'coinshop',
                    address: {
                      city: 'Rio de Janeiro',
                      complement: '',
                      country: { acronym: 'BRA', name: 'Brasil' },
                      location: { latitude: -22.83468, longitude: -43.36043 },
                      neighborhood: 'Barros Filho',
                      number: '21000',
                      postalCode: '21515-001',
                      reference: '',
                      state: 'RJ',
                      street: 'Avenida Brasil',
                    },
                    businessHours: [
                      { closingTime: '23:59:00', dayOfWeek: 1, openingTime: '00:00:00' },
                      { closingTime: '23:59:00', dayOfWeek: 2, openingTime: '00:00:00' },
                      { closingTime: '23:59:00', dayOfWeek: 3, openingTime: '00:00:00' },
                      { closingTime: '23:59:00', dayOfWeek: 4, openingTime: '00:00:00' },
                      { closingTime: '23:59:00', dayOfWeek: 5, openingTime: '00:00:00' },
                    ],
                    description: 'Pup1 description',
                    distance: 1624907186176,
                    formatted_address: 'undefined',
                    id: '777',
                    instructions: '',
                    isActive: true,
                    isThirdPartyPickup: false,
                    name: 'RetireAqui',
                    originalId: 'Id',
                    parentAccountName: 'parent account name',
                    pickupHolidays: [],
                    seller: 'coinshop',
                    tagsLabel: [],
                  },
                  required: [],
                }),
            )
            .openapi({
              example: [
                {
                  address: {
                    city: 'Rio de Janeiro',
                    complement: '',
                    country: { acronym: 'BRA', name: 'Brazil' },
                    location: { latitude: -22.92860984802246, longitude: -22.92860984802246 },
                    neighborhood: 'Catete',
                    number: '',
                    postalCode: '22220070',
                    state: 'RJ',
                    street: 'Rua Artur Bernardes',
                  },
                  businessHours: [
                    { closingTime: '21:00:00', dayOfWeek: 0, openingTime: '11:00:00' },
                  ],
                  description: 'Loja Barra da Tijuca',
                  formatted_address: 'undefined',
                  id: '12345',
                  instructions: 'Loja Barra da Tijuca',
                  isActive: true,
                  name: 'Loja Barra da Tijuca',
                  warehouseId: null,
                },
              ],
            }),
        },
      },
    },
  },
})

export const getApiLogisticsPvtConfigurationPickuppointsSearchRoute = createRoute({
  method: 'get',
  path: '/api/logistics/pvt/configuration/pickuppoints/_search',
  tags: ['Pickup points'],
  summary: 'List paged Pickup Points',
  description: 'Lists paged pickup points in your store.',
  operationId: 'Getpaged',
  request: {
    query: z.object({
      page: z
        .string()
        .openapi({
          param: {
            description: '',
            explode: true,
            in: 'query',
            name: 'page',
            required: true,
            schema: { example: '{{pageNumber}}', type: 'string' },
            style: 'form',
          },
          example: '{{pageNumber}}',
        }),
      pageSize: z
        .string()
        .openapi({
          param: {
            description: '',
            explode: true,
            in: 'query',
            name: 'pageSize',
            required: true,
            schema: { example: '{{pageSize}}', type: 'string' },
            style: 'form',
          },
          example: '{{pageSize}}',
        }),
      keyword: z
        .string()
        .openapi({
          param: {
            description: '',
            explode: true,
            in: 'query',
            name: 'keyword',
            required: true,
            schema: { example: '', type: 'string' },
            style: 'form',
          },
          example: '',
        }),
    }),
    headers: z.object({
      'Content-Type': z
        .string()
        .default('application/json; charset=utf-8')
        .openapi({
          param: {
            description: 'Type of the content being sent',
            in: 'header',
            name: 'Content-Type',
            required: true,
            schema: { default: 'application/json; charset=utf-8', type: 'string' },
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
  responses: { 200: { description: 'OK', headers: z.object({}) } },
})

export const getApiLogisticsPvtConfigurationPickuppointsPickupPointIdRoute = createRoute({
  method: 'get',
  path: '/api/logistics/pvt/configuration/pickuppoints/{pickupPointId}',
  tags: ['Pickup points'],
  summary: 'List Pickup Point By ID',
  description: "Lists your store's pickup points while searching by ID.",
  operationId: 'GetById',
  request: {
    headers: z.object({
      'Content-Type': z
        .string()
        .default('application/json; charset=utf-8')
        .openapi({
          param: {
            description: 'Type of the content being sent',
            in: 'header',
            name: 'Content-Type',
            required: true,
            schema: { default: 'application/json; charset=utf-8', type: 'string' },
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
      pickupPointId: z
        .string()
        .openapi({
          param: {
            description: '',
            in: 'path',
            name: 'pickupPointId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json; charset=utf-8': {
          schema: z
            .object({
              address: z
                .object({
                  city: z.string(),
                  complement: z.string(),
                  country: z
                    .object({ acronym: z.string(), name: z.string() })
                    .openapi({
                      example: { acronym: 'BRA', name: 'Brazil' },
                      required: ['acronym', 'name'],
                      title: 'Country',
                    }),
                  location: z
                    .object({ latitude: z.number(), longitude: z.number() })
                    .openapi({
                      example: { latitude: -22.974477767944336, longitude: -43.18672561645508 },
                      required: ['latitude', 'longitude'],
                      title: 'Location5',
                    }),
                  neighborhood: z.string(),
                  number: z.string(),
                  postalCode: z.string(),
                  state: z.string(),
                  street: z.string(),
                })
                .openapi({
                  example: {
                    city: 'Rio de Janeiro',
                    complement: '',
                    country: { acronym: 'BRA', name: 'Brazil' },
                    location: { latitude: -22.92860984802246, longitude: -22.92860984802246 },
                    neighborhood: 'Catete',
                    number: '',
                    postalCode: '22220070',
                    state: 'RJ',
                    street: 'Rua Artur Bernardes',
                  },
                  required: [
                    'postalCode',
                    'country',
                    'city',
                    'state',
                    'neighborhood',
                    'street',
                    'number',
                    'complement',
                    'location',
                  ],
                  title: 'Address4',
                }),
              businessHours: z
                .array(
                  z
                    .object({
                      closingTime: z.string(),
                      dayOfWeek: z.int32(),
                      openingTime: z.string(),
                    })
                    .openapi({
                      example: { closingTime: '20:00:00', dayOfWeek: 1, openingTime: '08:00:00' },
                      required: ['dayOfWeek', 'openingTime', 'closingTime'],
                      title: 'BusinessHour',
                    }),
                )
                .openapi({ description: '' }),
              description: z.string(),
              formatted_address: z.string(),
              id: z.string(),
              instructions: z.string(),
              isActive: z.boolean(),
              name: z.string(),
              warehouseId: z.string().nullable(),
            })
            .openapi({
              example: {
                address: {
                  city: 'Rio de Janeiro',
                  complement: '',
                  country: { acronym: 'BRA', name: 'Brazil' },
                  location: { latitude: -22.92860984802246, longitude: -22.92860984802246 },
                  neighborhood: 'Catete',
                  number: '',
                  postalCode: '22220070',
                  state: 'RJ',
                  street: 'Rua Artur Bernardes',
                },
                businessHours: [{ closingTime: '21:00:00', dayOfWeek: 0, openingTime: '11:00:00' }],
                description: 'Loja Barra da Tijuca',
                formatted_address: 'undefined',
                id: '12345',
                instructions: 'Loja Barra da Tijuca',
                isActive: true,
                name: 'Loja Barra da Tijuca',
                warehouseId: null,
              },
              required: [
                'id',
                'name',
                'description',
                'instructions',
                'formatted_address',
                'address',
                'isActive',
                'warehouseId',
                'businessHours',
              ],
              title: 'GetById',
            }),
          example: {
            address: {
              city: 'Rio de Janeiro',
              complement: '',
              country: { acronym: 'BRA', name: 'Brazil' },
              location: { latitude: -22.92860984802246, longitude: -22.92860984802246 },
              neighborhood: 'Catete',
              number: '',
              postalCode: '22220070',
              state: 'RJ',
              street: 'Rua Artur Bernardes',
            },
            businessHours: [{ closingTime: '21:00:00', dayOfWeek: 0, openingTime: '11:00:00' }],
            description: 'Loja Barra da Tijuca',
            formatted_address: 'undefined',
            id: '12345',
            instructions: 'Loja Barra da Tijuca',
            isActive: true,
            name: 'Loja Barra da Tijuca',
            warehouseId: null,
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
          .openapi({ example: '546', param: { required: false } }),
        Date: z
          .string()
          .exactOptional()
          .openapi({ example: 'Wed, 25 Oct 2017 20:24:00 GMT', param: { required: false } }),
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
        'X-CacheServer': z
          .string()
          .exactOptional()
          .openapi({ example: 'janus-apicache-nginx-21', param: { required: false } }),
        'X-Powered-by-VTEX-Janus-ApiCache': z
          .string()
          .exactOptional()
          .openapi({ example: 'v1.3.19', param: { required: false } }),
        'X-Powered-by-VTEX-Janus-Edge': z
          .string()
          .exactOptional()
          .openapi({ example: 'v1.44.1-beta', param: { required: false } }),
        'X-Track': z
          .string()
          .exactOptional()
          .openapi({ example: 'beta', param: { required: false } }),
        'X-VTEX-Cache-Status-Janus-ApiCache': z
          .string()
          .exactOptional()
          .openapi({ example: 'MISS', param: { required: false } }),
        'X-VTEX-Janus-Router-Backend-App': z
          .string()
          .exactOptional()
          .openapi({ example: 'logist-v6.3.54-beta.2+1365', param: { required: false } }),
        'x-vtex-operation-id': z
          .string()
          .exactOptional()
          .openapi({ example: 'd9cb24ab-d650-4728-8a79-a981fbbdc9a2', param: { required: false } }),
      }),
    },
  },
})

export const putApiLogisticsPvtConfigurationPickuppointsPickupPointIdRoute = createRoute({
  method: 'put',
  path: '/api/logistics/pvt/configuration/pickuppoints/{pickupPointId}',
  tags: ['Pickup points'],
  summary: 'Create/Update Pickup Point',
  description:
    'Creates or updates [pickup points](https://help.vtex.com/en/subcategory/pickup-points--1c5Btie9ou2Gg2iUo0ggqM#) in your store by Pickup Point ID.',
  operationId: 'CreateUpdatePickupPoint',
  request: {
    headers: z.object({
      'Content-Type': z
        .string()
        .default('application/json; charset=utf-8')
        .openapi({
          param: {
            description: 'Type of the content being sent',
            in: 'header',
            name: 'Content-Type',
            required: true,
            schema: { default: 'application/json; charset=utf-8', type: 'string' },
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
      pickupPointId: z
        .string()
        .openapi({
          param: {
            description: 'Pickup Point ID. Cannot contain spaces.',
            in: 'path',
            name: 'pickupPointId',
            required: true,
            schema: { example: '123456789', type: 'string' },
            style: 'simple',
          },
          example: '123456789',
        }),
    }),
    body: {
      description: '',
      content: {
        'application/json; charset=utf-8': {
          schema: z
            .object({
              address: z
                .object({
                  city: z
                    .string()
                    .openapi({ description: 'Address city.', example: 'Rio de Janeiro' }),
                  complement: z
                    .string()
                    .openapi({ description: 'Address complement.', example: '3rd floor' }),
                  country: z
                    .object({
                      acronym: z
                        .string()
                        .openapi({
                          description: 'Three letter ISO code of the address country.',
                          example: 'BRA',
                        }),
                      name: z
                        .string()
                        .openapi({ description: 'Address country name.', example: 'Brasil' }),
                    })
                    .openapi({ required: ['acronym', 'name'] }),
                  location: z
                    .object({
                      latitude: z
                        .number()
                        .openapi({ description: 'latitude', example: -22.974477767944336 }),
                      longitude: z
                        .number()
                        .openapi({ description: 'longitude', example: -43.18672561645508 }),
                    })
                    .openapi({ required: ['latitude', 'longitude'] }),
                  neighborhood: z
                    .string()
                    .openapi({ description: 'Address neighborhood.', example: 'Botafogo' }),
                  number: z
                    .string()
                    .openapi({ description: 'Address street number.', example: '200' }),
                  postalCode: z.string().openapi({ description: 'Postal code.' }),
                  reference: z
                    .string()
                    .openapi({
                      description:
                        'Complement that might help locate the shipping address more precisely in case of delivery.',
                      example: 'Grey building',
                    }),
                  state: z.string().openapi({ description: 'Address state.', example: 'RJ' }),
                  street: z
                    .string()
                    .openapi({
                      description: 'Address street name.',
                      example: 'Praia de botafogo.',
                    }),
                })
                .openapi({
                  example: {
                    city: 'Rio de Janeiro',
                    complement: '',
                    country: { acronym: 'BRA', name: 'Brazil' },
                    location: { latitude: -22.974477767944336, longitude: -43.18672561645508 },
                    neighborhood: 'Copacabana',
                    number: '',
                    postalCode: '22070002',
                    reference: 'Grey building',
                    state: 'RJ',
                    street: 'Avenida Atl├óntica',
                  },
                  required: [
                    'postalCode',
                    'country',
                    'city',
                    'state',
                    'neighborhood',
                    'street',
                    'number',
                    'complement',
                    'reference',
                    'location',
                  ],
                }),
              businessHours: z
                .array(
                  z
                    .object({
                      closingTime: z.string(),
                      dayOfWeek: z.int32(),
                      openingTime: z.string(),
                    })
                    .openapi({
                      example: { closingTime: '20:00:00', dayOfWeek: 1, openingTime: '08:00:00' },
                      required: ['dayOfWeek', 'openingTime', 'closingTime'],
                      title: 'BusinessHour',
                    }),
                )
                .openapi({ description: '' }),
              description: z
                .string()
                .openapi({
                  description: 'Pickup point description.',
                  example: 'Pickup your items in our store.',
                }),
              formatted_address: z.string().openapi({ description: 'Formated address.' }),
              id: z
                .string()
                .openapi({
                  description: 'Pickup Point ID. Cannot contain spaces.',
                  example: '123456789',
                }),
              instructions: z
                .string()
                .openapi({
                  description: 'Pickup point instructions.',
                  example: 'Bring your ID in order to pickup your order.',
                }),
              isActive: z.boolean(),
              isThirdPartyPickup: z.boolean().exactOptional(),
              name: z
                .string()
                .openapi({ description: 'Pickup point name.', example: 'Pickup store.' }),
              tagsLabel: z.array(z.string()).openapi({ description: '' }),
            })
            .openapi({
              example: {
                address: {
                  city: 'Rio de Janeiro',
                  complement: '',
                  country: { acronym: 'BRA', name: 'Brazil' },
                  location: { latitude: -22.974477767944336, longitude: -43.18672561645508 },
                  neighborhood: 'Copacabana',
                  number: '',
                  postalCode: '22070002',
                  reference: 'Grey building',
                  state: 'RJ',
                  street: 'Avenida Atl├óntica',
                },
                businessHours: [
                  { closingTime: '20:00:00', dayOfWeek: 1, openingTime: '08:00:00' },
                  { closingTime: '20:00:00', dayOfWeek: 2, openingTime: '08:00:00' },
                  { closingTime: '20:00:00', dayOfWeek: 3, openingTime: '08:00:00' },
                  { closingTime: '20:00:00', dayOfWeek: 4, openingTime: '08:00:00' },
                  { closingTime: '20:00:00', dayOfWeek: 5, openingTime: '08:00:00' },
                ],
                description: '',
                formatted_address: 'undefined',
                id: '1a227d3',
                instructions: 'Obrigat├│rio apresentar documento de identifica├º├úo',
                isActive: true,
                name: 'Loja Copacabana',
                tagsLabel: ['zonasul', 'rio de janeiro'],
              },
              required: [
                'id',
                'name',
                'description',
                'instructions',
                'formatted_address',
                'address',
                'isActive',
                'businessHours',
                'tagsLabel',
              ],
            }),
          example: {
            address: {
              city: 'Rio de Janeiro',
              complement: '',
              country: { acronym: 'BRA', name: 'Brazil' },
              location: { latitude: -22.974477767944336, longitude: -43.18672561645508 },
              neighborhood: 'Copacabana',
              number: '',
              postalCode: '22070002',
              reference: 'Grey building',
              state: 'RJ',
              street: 'Avenida Atl├óntica',
            },
            businessHours: [
              { closingTime: '20:00:00', dayOfWeek: 1, openingTime: '08:00:00' },
              { closingTime: '20:00:00', dayOfWeek: 2, openingTime: '08:00:00' },
              { closingTime: '20:00:00', dayOfWeek: 3, openingTime: '08:00:00' },
              { closingTime: '20:00:00', dayOfWeek: 4, openingTime: '08:00:00' },
              { closingTime: '20:00:00', dayOfWeek: 5, openingTime: '08:00:00' },
            ],
            description: '',
            formatted_address: 'undefined',
            id: '1a227d3',
            instructions: 'Obrigat├│rio apresentar documento de identifica├º├úo',
            isActive: true,
            name: 'Loja Copacabana',
            tagsLabel: ['zonasul', 'rio de janeiro'],
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
        'application/json; charset=utf-8': {
          schema: z
            .object({
              address: z
                .object({
                  city: z.string(),
                  complement: z.string(),
                  country: z
                    .object({ acronym: z.string(), name: z.string() })
                    .openapi({
                      example: { acronym: 'BRA', name: 'Brazil' },
                      required: ['acronym', 'name'],
                      title: 'Country',
                    }),
                  location: z
                    .object({ latitude: z.number(), longitude: z.number() })
                    .openapi({
                      example: { latitude: -22.974477767944336, longitude: -43.18672561645508 },
                      required: ['latitude', 'longitude'],
                      title: 'Location5',
                    }),
                  neighborhood: z.string(),
                  number: z.string(),
                  postalCode: z.string(),
                  reference: z.string().nullable(),
                  state: z.string(),
                  street: z.string(),
                })
                .openapi({
                  example: {
                    city: 'Rio de Janeiro',
                    complement: '',
                    country: { acronym: 'BRA', name: 'Brazil' },
                    location: { latitude: -22.974477767944336, longitude: -43.18672561645508 },
                    neighborhood: 'Copacabana',
                    number: '',
                    postalCode: '22070002',
                    reference: null,
                    state: 'RJ',
                    street: 'Avenida Atl├óntica',
                  },
                  required: [
                    'postalCode',
                    'country',
                    'city',
                    'state',
                    'neighborhood',
                    'street',
                    'number',
                    'complement',
                    'reference',
                    'location',
                  ],
                  title: 'Address2',
                }),
              businessHours: z
                .array(
                  z
                    .object({
                      closingTime: z.string(),
                      dayOfWeek: z.int32(),
                      openingTime: z.string(),
                    })
                    .openapi({
                      example: { closingTime: '20:00:00', dayOfWeek: 1, openingTime: '08:00:00' },
                      required: ['dayOfWeek', 'openingTime', 'closingTime'],
                      title: 'BusinessHour',
                    }),
                )
                .openapi({ description: '' }),
              description: z.string(),
              formatted_address: z.string(),
              id: z.string(),
              instructions: z.string(),
              isActive: z.boolean(),
              name: z.string(),
              pickupHolidays: z.array(z.string()).openapi({ description: '' }),
              tagsLabel: z.array(z.string()).openapi({ description: '' }),
            })
            .openapi({
              example: {
                address: {
                  city: 'Rio de Janeiro',
                  complement: '',
                  country: { acronym: 'BRA', name: 'Brazil' },
                  location: { latitude: -22.974477767944336, longitude: -43.18672561645508 },
                  neighborhood: 'Copacabana',
                  number: '',
                  postalCode: '22070002',
                  reference: null,
                  state: 'RJ',
                  street: 'Avenida Atl├óntica',
                },
                businessHours: [
                  { closingTime: '20:00:00', dayOfWeek: 1, openingTime: '08:00:00' },
                  { closingTime: '20:00:00', dayOfWeek: 2, openingTime: '08:00:00' },
                  { closingTime: '20:00:00', dayOfWeek: 3, openingTime: '08:00:00' },
                  { closingTime: '20:00:00', dayOfWeek: 4, openingTime: '08:00:00' },
                  { closingTime: '20:00:00', dayOfWeek: 5, openingTime: '08:00:00' },
                ],
                description: '',
                formatted_address: 'undefined',
                id: 'rteste',
                instructions: 'Obrigat├│rio apresentar documento de identifica├º├úo',
                isActive: true,
                name: 'Loja Copacabana',
                pickupHolidays: [],
                tagsLabel: ['zonasul', 'rio de janeiro'],
              },
              required: [
                'id',
                'name',
                'description',
                'instructions',
                'formatted_address',
                'address',
                'isActive',
                'businessHours',
                'tagsLabel',
                'pickupHolidays',
              ],
              title: 'Create/Update',
            }),
          example: {
            address: {
              city: 'Rio de Janeiro',
              complement: '',
              country: { acronym: 'BRA', name: 'Brazil' },
              location: { latitude: -22.974477767944336, longitude: -43.18672561645508 },
              neighborhood: 'Copacabana',
              number: '',
              postalCode: '22070002',
              reference: null,
              state: 'RJ',
              street: 'Avenida Atl├óntica',
            },
            businessHours: [
              { closingTime: '20:00:00', dayOfWeek: 1, openingTime: '08:00:00' },
              { closingTime: '20:00:00', dayOfWeek: 2, openingTime: '08:00:00' },
              { closingTime: '20:00:00', dayOfWeek: 3, openingTime: '08:00:00' },
              { closingTime: '20:00:00', dayOfWeek: 4, openingTime: '08:00:00' },
              { closingTime: '20:00:00', dayOfWeek: 5, openingTime: '08:00:00' },
            ],
            description: '',
            formatted_address: 'undefined',
            id: 'rteste',
            instructions: 'Obrigat├│rio apresentar documento de identifica├º├úo',
            isActive: true,
            name: 'Loja Copacabana',
            pickupHolidays: [],
            tagsLabel: ['zonasul', 'rio de janeiro'],
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
          .openapi({ example: '922', param: { required: false } }),
        Date: z
          .string()
          .exactOptional()
          .openapi({ example: 'Fri, 14 Dec 2018 17:39:52 GMT', param: { required: false } }),
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
          .openapi({ example: 'Powered by VTEX', param: { required: false } }),
        'X-CDNIgnore': z
          .string()
          .exactOptional()
          .openapi({ example: '1', param: { required: false } }),
        'X-Powered-by-VTEX-Janus-Edge': z
          .string()
          .exactOptional()
          .openapi({ example: 'v1.44.60', param: { required: false } }),
        'X-Track': z
          .string()
          .exactOptional()
          .openapi({ example: 'stable', param: { required: false } }),
        'X-VTEX-Janus-Router-Backend-App': z
          .string()
          .exactOptional()
          .openapi({ example: 'logist-v6.4.58+1915', param: { required: false } }),
        'x-vtex-operation-id': z
          .string()
          .exactOptional()
          .openapi({ example: 'c0c59544-e9bb-476c-81c8-ebf4d5f027f2', param: { required: false } }),
      }),
    },
  },
})

export const deleteApiLogisticsPvtConfigurationPickuppointsPickupPointIdRoute = createRoute({
  method: 'delete',
  path: '/api/logistics/pvt/configuration/pickuppoints/{pickupPointId}',
  tags: ['Pickup points'],
  summary: 'Delete Pickup Point',
  description: 'Deletes a given pickup point for your store, by pickup point ID.',
  operationId: 'Delete',
  request: {
    headers: z.object({
      'Content-Type': z
        .string()
        .default('application/json; charset=utf-8')
        .openapi({
          param: {
            description: 'Type of the content being sent',
            in: 'header',
            name: 'Content-Type',
            required: true,
            schema: { default: 'application/json; charset=utf-8', type: 'string' },
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
      pickupPointId: z
        .string()
        .openapi({
          param: {
            description: '',
            in: 'path',
            name: 'pickupPointId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK', headers: z.object({}) } },
})

export const getApiLogisticsPvtConfigurationWarehousesRoute = createRoute({
  method: 'get',
  path: '/api/logistics/pvt/configuration/warehouses',
  tags: ['Warehouses'],
  summary: 'List all warehouses',
  description: 'Lists information about all warehouses set up in your store.',
  operationId: 'AllWarehouses',
  request: {
    headers: z.object({
      'Content-Type': z
        .string()
        .default('application/json; charset=utf-8')
        .openapi({
          param: {
            description: 'Type of the content being sent',
            in: 'header',
            name: 'Content-Type',
            required: true,
            schema: { default: 'application/json; charset=utf-8', type: 'string' },
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
        'application/json; charset=utf-8': {
          schema: z.array(
            z
              .object({
                id: z
                  .string()
                  .openapi({
                    description: 'Code that identifies a warehouse.',
                    example: 'warehouse123',
                  }),
                isActive: z
                  .boolean()
                  .openapi({
                    description: 'Shows if the warehouse is active (`true`) or inactive (`false`).',
                    example: true,
                  }),
                name: z
                  .string()
                  .openapi({ description: 'Name of the warehouse.', example: 'Main Warehouse' }),
                pickupPointIds: z
                  .array(z.any())
                  .openapi({
                    description:
                      "This field returns a list of the [pickup points' IDs](https://help.vtex.com/en/tutorial/pickup-points--2fljn6wLjn8M4lJHA6HP3R) associated with the given warehouse.",
                    example: ['NameId1'],
                  }),
                priority: z
                  .int()
                  .openapi({
                    description:
                      'If the warehouse was configured as a priority. When no priority was set, the value returns`0`.',
                    example: 0,
                  }),
                warehouseDocks: z
                  .array(
                    z
                      .object({
                        cost: z
                          .number()
                          .openapi({
                            description:
                              'Extra charges added to the shipping rate when **Additional shipping costs** are configured.',
                            example: 1,
                          }),
                        dockId: z
                          .string()
                          .openapi({
                            description: 'Code that identifies a dock.',
                            example: 'dock1',
                          }),
                        time: z
                          .string()
                          .openapi({
                            description:
                              "This field returns the dock's processing time in days and hours. If none is configured, the request returns `00:00:00`.",
                            example: '00:00:00',
                          }),
                      })
                      .openapi({
                        description:
                          'Information related to the docks available for the given warehouse.',
                        example: { cost: 0, dockId: '1_1_1', time: '1.00:00:00' },
                        required: ['dockId', 'time', 'cost'],
                        title: 'WarehouseDock1',
                      }),
                  )
                  .openapi({
                    description: 'Information related to the docks available for the warehouses.',
                  }),
              })
              .openapi({
                example: {
                  id: '1937054',
                  isActive: true,
                  name: 'Estoque A',
                  pickupPointIds: [1, 2, 3],
                  priority: 0,
                  warehouseDocks: [{ cost: 0, dockId: '1_1_1', time: '1.00:00:00' }],
                },
                required: [
                  'id',
                  'name',
                  'warehouseDocks',
                  'pickupPointIds',
                  'priority',
                  'isActive',
                ],
              }),
          ),
          example: [
            {
              id: '1937054',
              isActive: true,
              name: 'Estoque A',
              pickupPointIds: [1, 2, 3],
              priority: 0,
              warehouseDocks: [{ cost: 0, dockId: '1_1_1', time: '1.00:00:00' }],
            },
            {
              id: '140ac66',
              isActive: true,
              name: 'Estoque B',
              pickupPointIds: [1, 2, 3],
              priority: 0,
              warehouseDocks: [{ cost: 0, dockId: '139270d', time: '00:00:00' }],
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
          .openapi({ example: '877', param: { required: false } }),
        Date: z
          .string()
          .exactOptional()
          .openapi({ example: 'Fri, 15 Apr 2016 20:00:55 GMT', param: { required: false } }),
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
        'X-CacheServer': z
          .string()
          .exactOptional()
          .openapi({ example: 'janus-apicache-nginx5', param: { required: false } }),
        'X-Powered-by-VTEX-Janus-ApiCache': z
          .string()
          .exactOptional()
          .openapi({ example: 'v1.3.8', param: { required: false } }),
        'X-Powered-by-VTEX-Janus-Edge': z
          .string()
          .exactOptional()
          .openapi({ example: 'v1.26.4', param: { required: false } }),
        'X-Powered-by-VTEX-Janus-Router': z
          .string()
          .exactOptional()
          .openapi({ example: '2.1.155', param: { required: false } }),
        'X-Track': z
          .string()
          .exactOptional()
          .openapi({ example: 'stable', param: { required: false } }),
        'X-VTEX-Cache-Status-Janus-ApiCache': z
          .string()
          .exactOptional()
          .openapi({ example: 'MISS', param: { required: false } }),
        'X-VTEX-Janus-Router-Backend-App': z
          .string()
          .exactOptional()
          .openapi({ example: 'logist-v6.2.96-stable+863', param: { required: false } }),
        'x-vtex-operation-id': z
          .string()
          .exactOptional()
          .openapi({ example: '718fc3ea-7ad8-458c-a20b-e9cc63df3173', param: { required: false } }),
      }),
    },
  },
})

export const postApiLogisticsPvtConfigurationWarehousesRoute = createRoute({
  method: 'post',
  path: '/api/logistics/pvt/configuration/warehouses',
  tags: ['Warehouses'],
  summary: 'Create/update warehouse',
  description: "Creates or updates your store's warehouses",
  operationId: 'Create/UpdateWarehouse',
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
        .default('application/json; charset=utf-8')
        .openapi({
          param: {
            description: 'Type of the content being sent',
            in: 'header',
            name: 'Content-Type',
            required: true,
            schema: { default: 'application/json; charset=utf-8', type: 'string' },
            style: 'simple',
          },
        }),
    }),
    body: {
      description: '',
      content: {
        'application/json; charset=utf-8': {
          schema: z
            .object({
              id: z.string(),
              name: z.string(),
              warehouseDocks: z
                .array(
                  z
                    .object({
                      cost: z.string(),
                      costToDisplay: z.string(),
                      dockId: z.string(),
                      name: z.string(),
                      time: z.string(),
                      translateDays: z.string(),
                    })
                    .openapi({
                      example: {
                        cost: '5.00',
                        costToDisplay: '5,00',
                        dockId: '1a8bce3',
                        name: 'Centro de Distribui├º├úo Principal',
                        time: '3.00:00:00',
                        translateDays: 'dias',
                      },
                      required: [
                        'dockId',
                        'name',
                        'time',
                        'cost',
                        'translateDays',
                        'costToDisplay',
                      ],
                      title: 'WarehouseDock',
                    }),
                )
                .openapi({ description: '' }),
            })
            .openapi({
              example: {
                id: '15bfc76',
                name: 'Estoque Principal',
                warehouseDocks: [
                  {
                    cost: '5.00',
                    costToDisplay: '5,00',
                    dockId: '1a8bce3',
                    name: 'Centro de Distribui├º├úo Principal',
                    time: '3.00:00:00',
                    translateDays: 'dias',
                  },
                ],
              },
              required: ['id', 'name', 'warehouseDocks'],
              title: 'Create/UpdateWarehouseRequest',
            }),
          example: {
            id: '15bfc76',
            name: 'Estoque Principal',
            warehouseDocks: [
              {
                cost: '5.00',
                costToDisplay: '5,00',
                dockId: '1a8bce3',
                name: 'Centro de Distribui├º├úo Principal',
                time: '3.00:00:00',
                translateDays: 'dias',
              },
            ],
          },
        },
      },
      required: true,
    },
  },
  responses: { 200: { description: 'OK', headers: z.object({}) } },
})

export const getApiLogisticsPvtConfigurationWarehousesWarehouseIdRoute = createRoute({
  method: 'get',
  path: '/api/logistics/pvt/configuration/warehouses/{warehouseId}',
  tags: ['Warehouses'],
  summary: 'List warehouse by ID',
  description: 'Lists the information of a given warehouse, searching by warehouse ID.',
  operationId: 'WarehouseById',
  request: {
    headers: z.object({
      'Content-Type': z
        .string()
        .default('application/json; charset=utf-8')
        .openapi({
          param: {
            description: 'Type of the content being sent',
            in: 'header',
            name: 'Content-Type',
            required: true,
            schema: { default: 'application/json; charset=utf-8', type: 'string' },
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
      warehouseId: z
        .string()
        .openapi({
          param: {
            description: '',
            in: 'path',
            name: 'warehouseId',
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
        'application/json; charset=utf-8': {
          schema: z
            .object({
              id: z.string().exactOptional(),
              isActive: z
                .boolean()
                .exactOptional()
                .openapi({
                  description: 'Shows if the warehouse is active (`true`) or inactive (`false`).',
                  example: true,
                }),
              name: z.string().exactOptional(),
              pickupPointIds: z
                .array(z.any())
                .exactOptional()
                .openapi({
                  description:
                    "This field returns a list of the [pickup points' IDs](https://help.vtex.com/en/tutorial/pickup-points--2fljn6wLjn8M4lJHA6HP3R) associated with the given warehouse.",
                  example: ['NameId1'],
                }),
              priority: z
                .int()
                .exactOptional()
                .openapi({
                  description:
                    'If the warehouse was configured as a priority. When no priority was set, the value returns`0`.',
                  example: 0,
                }),
              warehouseDocks: z
                .array(
                  z
                    .object({ cost: z.number(), dockId: z.string(), time: z.string() })
                    .openapi({
                      example: { cost: 0, dockId: '1_1_1', time: '1.00:00:00' },
                      required: ['dockId', 'time', 'cost'],
                      title: 'WarehouseDock1',
                    }),
                )
                .exactOptional()
                .openapi({ description: '' }),
            })
            .openapi({
              example: {
                id: '1937054',
                isActive: true,
                name: 'Estoque A',
                pickupPointIds: [1, 2, 3],
                priority: 0,
                warehouseDocks: [{ cost: 0, dockId: '1_1_1', time: '1.00:00:00' }],
              },
              required: [],
            }),
          example: {
            id: '15bfc76',
            isActive: true,
            name: 'Estoque Principal',
            pickupPointIds: [1, 2, 3],
            priority: 0,
            warehouseDocks: [{ cost: 5, dockId: '1a8bce3', time: '3.00:00:00' }],
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
          .openapi({ example: '119', param: { required: false } }),
        Date: z
          .string()
          .exactOptional()
          .openapi({ example: 'Fri, 15 Apr 2016 20:01:12 GMT', param: { required: false } }),
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
        'X-CacheServer': z
          .string()
          .exactOptional()
          .openapi({ example: 'janus-apicache-nginx5', param: { required: false } }),
        'X-Powered-by-VTEX-Janus-ApiCache': z
          .string()
          .exactOptional()
          .openapi({ example: 'v1.3.8', param: { required: false } }),
        'X-Powered-by-VTEX-Janus-Edge': z
          .string()
          .exactOptional()
          .openapi({ example: 'v1.26.4', param: { required: false } }),
        'X-Track': z
          .string()
          .exactOptional()
          .openapi({ example: 'stable', param: { required: false } }),
        'X-VTEX-Cache-Status-Janus-ApiCache': z
          .string()
          .exactOptional()
          .openapi({ example: 'MISS', param: { required: false } }),
        'X-VTEX-Janus-Processado': z
          .string()
          .exactOptional()
          .openapi({ example: '119', param: { required: false } }),
        'X-VTEX-Janus-Router-Backend-App': z
          .string()
          .exactOptional()
          .openapi({ example: 'logist-v6.2.96-stable+863', param: { required: false } }),
        'X-VTEX-Janus-SO': z
          .string()
          .exactOptional()
          .openapi({ example: 'Linux', param: { required: false } }),
        'x-vtex-operation-id': z
          .string()
          .exactOptional()
          .openapi({ example: '22863291-d5a7-43a6-b611-352e80d6fd24', param: { required: false } }),
      }),
    },
  },
})

export const deleteApiLogisticsPvtConfigurationWarehousesWarehouseIdRoute = createRoute({
  method: 'delete',
  path: '/api/logistics/pvt/configuration/warehouses/{warehouseId}',
  tags: ['Warehouses'],
  summary: 'Remove warehouse',
  description: 'Deletes given warehouse by warehouse ID.',
  operationId: 'RemoveWarehouse',
  request: {
    headers: z.object({
      'Content-Type': z
        .string()
        .default('application/json; charset=utf-8')
        .openapi({
          param: {
            description: 'Type of the content being sent',
            in: 'header',
            name: 'Content-Type',
            required: true,
            schema: { default: 'application/json; charset=utf-8', type: 'string' },
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
      warehouseId: z
        .string()
        .openapi({
          param: {
            description: '',
            in: 'path',
            name: 'warehouseId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK', headers: z.object({}) } },
})

export const postApiLogisticsPvtConfigurationWarehousesWarehouseIdActivationRoute = createRoute({
  method: 'post',
  path: '/api/logistics/pvt/configuration/warehouses/{warehouseId}/activation',
  tags: ['Warehouses'],
  summary: 'Activate warehouse',
  description: 'Activates a given warehouse, by warehouse ID.',
  operationId: 'ActivateWarehouse',
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
    params: z.object({
      warehouseId: z
        .string()
        .openapi({
          param: {
            description: '',
            in: 'path',
            name: 'warehouseId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK', headers: z.object({}) } },
})

export const postApiLogisticsPvtConfigurationWarehousesWarehouseIdDeactivationRoute = createRoute({
  method: 'post',
  path: '/api/logistics/pvt/configuration/warehouses/{warehouseId}/deactivation',
  tags: ['Warehouses'],
  summary: 'Deactivate warehouse',
  description: 'Deactivates a given warehouse by warehouse ID.',
  operationId: 'DeactivateWarehouse',
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
    params: z.object({
      warehouseId: z
        .string()
        .openapi({
          param: {
            description: '',
            in: 'path',
            name: 'warehouseId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK', headers: z.object({}) } },
})

export const getApiLogisticsPvtInventoryItemsItemIdWarehousesWarehouseIdDispatchedRoute =
  createRoute({
    method: 'get',
    path: '/api/logistics/pvt/inventory/items/{itemId}/warehouses/{warehouseId}/dispatched',
    tags: ['Inventory'],
    summary: 'List inventory with dispatched reservations',
    description:
      'Lists inventory with dispatched reservations. When the number of active reservations is more than 2000 the return is an error with status code 400 (BadRequest) and the message: Too many active reservations.',
    operationId: 'Getinventorywithdispatchedreservations',
    request: {
      headers: z.object({
        'Content-Type': z
          .string()
          .default('application/json; charset=utf-8')
          .openapi({
            param: {
              description: 'Type of the content being sent',
              in: 'header',
              name: 'Content-Type',
              required: true,
              schema: { default: 'application/json; charset=utf-8', type: 'string' },
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
        itemId: z
          .string()
          .openapi({
            param: {
              description: '',
              in: 'path',
              name: 'itemId',
              required: true,
              schema: { type: 'string' },
              style: 'simple',
            },
          }),
        warehouseId: z
          .string()
          .openapi({
            param: {
              description: '',
              in: 'path',
              name: 'warehouseId',
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
              .array(
                z
                  .object({
                    availableQuantity: z
                      .int()
                      .exactOptional()
                      .openapi({ description: 'Available quantity.' }),
                    dispatchedReservationsQuantity: z
                      .int()
                      .exactOptional()
                      .openapi({ description: 'Dispatched reservations quantity.' }),
                    isUnlimitedQuantity: z
                      .boolean()
                      .exactOptional()
                      .openapi({
                        description:
                          'Indicates whether the SKU\'s availability is unlimited ("infinite inventory").',
                      }),
                    quantity: z.int().exactOptional().openapi({ description: 'SKU quantity.' }),
                    skuId: z.string().exactOptional().openapi({ description: 'SKU ID.' }),
                    totalReservedQuantity: z
                      .int()
                      .exactOptional()
                      .openapi({ description: 'Total reserved quantity of the SKU.' }),
                    warehouseId: z
                      .string()
                      .exactOptional()
                      .openapi({ description: 'Warehouse ID.' }),
                  })
                  .openapi({ required: [] }),
              )
              .openapi({
                example: [
                  {
                    availableQuantity: 2147483647,
                    dispatchedReservationsQuantity: 0,
                    isUnlimitedQuantity: true,
                    quantity: 2147483647,
                    skuId: '1',
                    totalReservedQuantity: 0,
                    warehouseId: '1',
                  },
                ],
              }),
          },
        },
      },
    },
  })

export const getApiLogisticsPvtInventoryItemsSkuIdDocksDockIdRoute = createRoute({
  method: 'get',
  path: '/api/logistics/pvt/inventory/items/{skuId}/docks/{dockId}',
  tags: ['Inventory'],
  summary: 'List inventory per dock',
  description: 'Lists inventory information per dock set up in your store.',
  operationId: 'Inventoryperdock',
  request: {
    headers: z.object({
      'Content-Type': z
        .string()
        .default('application/json; charset=utf-8')
        .openapi({
          param: {
            description: 'Type of the content being sent',
            in: 'header',
            name: 'Content-Type',
            required: true,
            schema: { default: 'application/json; charset=utf-8', type: 'string' },
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
      skuId: z
        .string()
        .openapi({
          param: {
            description: '',
            in: 'path',
            name: 'skuId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      dockId: z
        .string()
        .openapi({
          param: {
            description: '',
            in: 'path',
            name: 'dockId',
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
            .array(
              z
                .object({
                  availableQuantity: z
                    .int()
                    .exactOptional()
                    .openapi({
                      description:
                        'Amount of items available for sale. Difference between total quantity and reserved quantity.',
                    }),
                  dateOfSupplyUtc: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'Date of supply lot in UTC.' }),
                  deliveryChannel: z
                    .array(z.string())
                    .exactOptional()
                    .openapi({ description: 'List of delivery channels available.' }),
                  dockId: z.string().exactOptional().openapi({ description: 'Dock ID.' }),
                  isUnlimited: z
                    .boolean()
                    .exactOptional()
                    .openapi({
                      description:
                        'Indicates whether the SKU\'s availability is unlimited ("infinite inventory").',
                    }),
                  keepSellingAfterExpiration: z
                    .boolean()
                    .exactOptional()
                    .openapi({
                      description:
                        'Indicates whether SKU can continue to be sold after the available quantity gets to 0.',
                    }),
                  reservedQuantity: z
                    .int()
                    .exactOptional()
                    .openapi({ description: 'Reserved quantity of the SKU.' }),
                  salesChannel: z
                    .array(z.string())
                    .exactOptional()
                    .openapi({ description: 'List of sales channels associated.' }),
                  skuId: z.string().exactOptional().openapi({ description: 'SKU ID.' }),
                  timeToRefill: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'Time to refill (deprecated).' }),
                  totalQuantity: z
                    .int()
                    .exactOptional()
                    .openapi({ description: 'Total quantity of SKU.' }),
                  transfer: z.string().exactOptional().openapi({ description: 'Transfer.' }),
                  warehouseId: z.string().exactOptional().openapi({ description: 'Warehouse ID.' }),
                })
                .openapi({ required: [] }),
            )
            .openapi({
              example: [
                {
                  availableQuantity: 1000000,
                  dateOfSupplyUtc: '2020-04-05T00:00:00+00:00',
                  deliveryChannels: ['delivery'],
                  dockId: '1',
                  isUnlimited: true,
                  keepSellingAfterExpiration: false,
                  reservedQuantity: 0,
                  salesChannel: ['1'],
                  skuId: '1',
                  supplyLotId: null,
                  timeToRefill: '01:50:00',
                  totalQuantity: 1000000,
                  transfer: 'transfer1',
                  warehouseId: '1',
                },
                {
                  availableQuantity: 1000000,
                  dateOfSupplyUtc: '2020-04-05T00:00:00+00:00',
                  deliveryChannels: ['delivery'],
                  dockId: '1',
                  isUnlimited: true,
                  keepSellingAfterExpiration: false,
                  reservedQuantity: 117,
                  salesChannel: ['1'],
                  skuId: '1',
                  supplyLotId: null,
                  timeToRefill: '01:50:00',
                  totalQuantity: 1000117,
                  transfer: 'transfer2',
                  warehouseId: '1_1',
                },
              ],
            }),
        },
      },
    },
  },
})

export const getApiLogisticsPvtInventoryItemsSkuIdDocksDockIdWarehousesWarehouseIdRoute =
  createRoute({
    method: 'get',
    path: '/api/logistics/pvt/inventory/items/{skuId}/docks/{dockId}/warehouses/{warehouseId}',
    tags: ['Inventory'],
    summary: 'List inventory per dock and warehouse',
    description: 'Lists information of inventory per dock and warehouse.',
    operationId: 'Inventoryperdockandwarehouse',
    request: {
      headers: z.object({
        'Content-Type': z
          .string()
          .default('application/json; charset=utf-8')
          .openapi({
            param: {
              description: 'Type of the content being sent',
              in: 'header',
              name: 'Content-Type',
              required: true,
              schema: { default: 'application/json; charset=utf-8', type: 'string' },
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
        skuId: z
          .string()
          .openapi({
            param: {
              description: '',
              in: 'path',
              name: 'skuId',
              required: true,
              schema: { type: 'string' },
              style: 'simple',
            },
          }),
        dockId: z
          .string()
          .openapi({
            param: {
              description: '',
              in: 'path',
              name: 'dockId',
              required: true,
              schema: { type: 'string' },
              style: 'simple',
            },
          }),
        warehouseId: z
          .string()
          .openapi({
            param: {
              description: '',
              in: 'path',
              name: 'warehouseId',
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
              .array(
                z
                  .object({
                    availableQuantity: z
                      .int()
                      .exactOptional()
                      .openapi({
                        description:
                          'Amount of items available for sale. Difference between total quantity and reserved quantity.',
                      }),
                    dateOfSupplyUtc: z
                      .string()
                      .exactOptional()
                      .openapi({ description: 'Date of supply lot in UTC.' }),
                    deliveryChannel: z
                      .array(z.string())
                      .exactOptional()
                      .openapi({ description: 'List of delivery channels available.' }),
                    dockId: z.string().exactOptional().openapi({ description: 'Dock ID.' }),
                    isUnlimited: z
                      .boolean()
                      .exactOptional()
                      .openapi({
                        description:
                          'Indicates whether the SKU\'s availability is unlimited ("infinite inventory").',
                      }),
                    keepSellingAfterExpiration: z
                      .boolean()
                      .exactOptional()
                      .openapi({
                        description:
                          'Indicates whether SKU can continue to be sold after the available quantity gets to 0.',
                      }),
                    reservedQuantity: z
                      .int()
                      .exactOptional()
                      .openapi({ description: 'Reserved quantity of the SKU.' }),
                    salesChannel: z
                      .array(z.string())
                      .exactOptional()
                      .openapi({ description: 'List of sales channels associated.' }),
                    skuId: z.string().exactOptional().openapi({ description: 'SKU ID.' }),
                    timeToRefill: z
                      .string()
                      .exactOptional()
                      .openapi({ description: 'Time to refill (deprecated).' }),
                    totalQuantity: z
                      .int()
                      .exactOptional()
                      .openapi({ description: 'Total quantity of SKU.' }),
                    transfer: z.string().exactOptional().openapi({ description: 'Transfer.' }),
                    warehouseId: z
                      .string()
                      .exactOptional()
                      .openapi({ description: 'Warehouse ID.' }),
                  })
                  .openapi({ required: [] }),
              )
              .openapi({
                example: [
                  {
                    availableQuantity: 1000000,
                    dateOfSupplyUtc: '2020-04-05T00:00:00+00:00',
                    deliveryChannels: ['delivery'],
                    dockId: '1',
                    isUnlimited: true,
                    keepSellingAfterExpiration: false,
                    reservedQuantity: 0,
                    salesChannel: ['1'],
                    skuId: '1',
                    supplyLotId: null,
                    timeToRefill: '12:50:00',
                    totalQuantity: 1000000,
                    transfer: 'Tranfer1',
                    warehouseId: '1',
                  },
                ],
              }),
          },
        },
      },
    },
  })

export const getApiLogisticsPvtInventoryItemsSkuIdWarehousesWarehouseIdRoute = createRoute({
  method: 'get',
  path: '/api/logistics/pvt/inventory/items/{skuId}/warehouses/{warehouseId}',
  tags: ['Inventory'],
  summary: 'List inventory per warehouse',
  description: 'Lists inventory information per warehouse on your store.',
  operationId: 'Inventoryperwarehouse',
  request: {
    headers: z.object({
      'Content-Type': z
        .string()
        .default('application/json; charset=utf-8')
        .openapi({
          param: {
            description: 'Type of the content being sent',
            in: 'header',
            name: 'Content-Type',
            required: true,
            schema: { default: 'application/json; charset=utf-8', type: 'string' },
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
      skuId: z
        .string()
        .openapi({
          param: {
            description: '',
            in: 'path',
            name: 'skuId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      warehouseId: z
        .string()
        .openapi({
          param: {
            description: '',
            in: 'path',
            name: 'warehouseId',
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
            .array(
              z
                .object({
                  availableQuantity: z
                    .int()
                    .exactOptional()
                    .openapi({
                      description:
                        'Amount of items available for sale. Difference between total quantity and reserved quantity.',
                    }),
                  dateOfSupplyUtc: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'Date of supply lot in UTC.' }),
                  deliveryChannel: z
                    .array(z.string())
                    .exactOptional()
                    .openapi({ description: 'List of delivery channels available.' }),
                  dockId: z.string().exactOptional().openapi({ description: 'Dock ID.' }),
                  isUnlimited: z
                    .boolean()
                    .exactOptional()
                    .openapi({
                      description:
                        'Indicates whether the SKU\'s availability is unlimited ("infinite inventory").',
                    }),
                  keepSellingAfterExpiration: z
                    .boolean()
                    .exactOptional()
                    .openapi({
                      description:
                        'Indicates whether SKU can continue to be sold after the available quantity gets to 0.',
                    }),
                  reservedQuantity: z
                    .int()
                    .exactOptional()
                    .openapi({ description: 'Reserved quantity of the SKU.' }),
                  salesChannel: z
                    .array(z.string())
                    .exactOptional()
                    .openapi({ description: 'List of sales channels associated.' }),
                  skuId: z.string().exactOptional().openapi({ description: 'SKU ID.' }),
                  timeToRefill: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'Time to refill (deprecated).' }),
                  totalQuantity: z
                    .int()
                    .exactOptional()
                    .openapi({ description: 'Total quantity of SKU.' }),
                  transfer: z.string().exactOptional().openapi({ description: 'Transfer.' }),
                  warehouseId: z.string().exactOptional().openapi({ description: 'Warehouse ID.' }),
                })
                .openapi({ required: [] }),
            )
            .openapi({
              example: [
                {
                  availableQuantity: 1000000,
                  dateOfSupplyUtc: '12020-04-05T00:00:00+00:00',
                  deliveryChannels: ['delivery'],
                  dockId: '1',
                  isUnlimited: true,
                  keepSellingAfterExpiration: false,
                  reservedQuantity: 0,
                  salesChannel: ['1'],
                  skuId: '1',
                  supplyLotId: '05-05-22',
                  timeToRefill: '1',
                  totalQuantity: 1000000,
                  transfer: 'Transfer 1',
                  warehouseId: '1',
                },
              ],
            }),
        },
      },
    },
  },
})

export const getApiLogisticsPvtInventoryItemsSkuIdWarehousesWarehouseIdSupplyLotsRoute =
  createRoute({
    method: 'get',
    path: '/api/logistics/pvt/inventory/items/{skuId}/warehouses/{warehouseId}/supplyLots',
    tags: ['Inventory'],
    summary: 'List supply lots',
    description: 'Returns a list of the supply lots of an SKU in a specific warehouse.',
    operationId: 'GetSupplyLots',
    request: {
      headers: z.object({
        Accept: z
          .string()
          .openapi({
            param: {
              description:
                'HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.',
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
              description: 'Type of the content being sent.',
              in: 'header',
              name: 'Content-Type',
              required: true,
              schema: { example: 'application/json; charset=utf-8', type: 'string' },
              style: 'simple',
            },
            example: 'application/json; charset=utf-8',
          }),
      }),
      params: z.object({
        skuId: z
          .string()
          .openapi({
            param: {
              description: 'ID of the SKU.',
              in: 'path',
              name: 'skuId',
              required: true,
              schema: { type: 'string' },
              style: 'simple',
            },
          }),
        warehouseId: z
          .string()
          .openapi({
            param: {
              description: 'ID of the warehouse where the SKU is located.',
              in: 'path',
              name: 'warehouseId',
              required: true,
              schema: { type: 'string' },
              style: 'simple',
            },
          }),
      }),
    },
    responses: { 200: { description: 'OK', headers: z.object({}) } },
  })

export const putApiLogisticsPvtInventoryItemsSkuIdWarehousesWarehouseIdSupplyLotsSupplyLotIdRoute =
  createRoute({
    method: 'put',
    path: '/api/logistics/pvt/inventory/items/{skuId}/warehouses/{warehouseId}/supplyLots/{supplyLotId}',
    tags: ['Inventory'],
    summary: 'Save supply lot',
    description:
      'Creates a new Supply Lot. A Supply Lot lets the store sell products that are not currently available in stock but whose arrival is already scheduled.\n\nCheck out our [documentation](https://help.vtex.com/en/tutorial/setting-up-future-inventory--UMSGjooqRfkRbeoh94kS4) about this feature.',
    operationId: 'SaveSupplyLot',
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
          .default('application/json; charset=utf-8')
          .openapi({
            param: {
              description: 'Type of the content being sent',
              in: 'header',
              name: 'Content-Type',
              required: true,
              schema: { default: 'application/json; charset=utf-8', type: 'string' },
              style: 'simple',
            },
          }),
      }),
      params: z.object({
        skuId: z
          .string()
          .openapi({
            param: {
              description: 'ID of the SKU whose availability is being scheduled.',
              in: 'path',
              name: 'skuId',
              required: true,
              schema: { type: 'string' },
              style: 'simple',
            },
          }),
        warehouseId: z
          .string()
          .openapi({
            param: {
              description: 'ID of the warehouse where the SKU will arrive.',
              in: 'path',
              name: 'warehouseId',
              required: true,
              schema: { type: 'string' },
              style: 'simple',
            },
          }),
        supplyLotId: z
          .string()
          .openapi({
            param: {
              description:
                "ID of the Supply Lot in which the SKU's scheduling should be considered.",
              in: 'path',
              name: 'supplyLotId',
              required: true,
              schema: { type: 'string' },
              style: 'simple',
            },
          }),
      }),
      body: {
        description: '',
        content: {
          'application/json; charset=utf-8': {
            schema: z
              .object({
                dateOfSupplyUtc: z.string(),
                keepSellingAfterExpiration: z.boolean(),
                quantity: z.number(),
              })
              .openapi({
                example: {
                  dateOfSupplyUtc: '2020-04-05T00:00:00+00:00',
                  keepSellingAfterExpiration: true,
                  quantity: 1000,
                },
                required: ['quantity', 'dateOfSupplyUtc', 'keepSellingAfterExpiration'],
                title: 'SaveSupplyLot',
              }),
            example: {
              dateOfSupplyUtc: '2020-04-05T00:00:00+00:00',
              keepSellingAfterExpiration: true,
              quantity: 1000,
            },
          },
        },
        required: true,
      },
    },
    responses: { 200: { description: 'OK', headers: z.object({}) } },
  })

export const postApiLogisticsPvtInventoryItemsSkuIdWarehousesWarehouseIdSupplyLotsSupplyLotIdTransferRoute =
  createRoute({
    method: 'post',
    path: '/api/logistics/pvt/inventory/items/{skuId}/warehouses/{warehouseId}/supplyLots/{supplyLotId}/transfer',
    tags: ['Inventory'],
    summary: 'Transfer supply lot',
    description:
      'Transfers an SKU from a Supply Lot to the currently available inventory.\n\nCheck out how this transfer works in further detail by reading our [documentation](https://help.vtex.com/pt/tutorial/configurar-estoque-futuro--UMSGjooqRfkRbeoh94kS4) about this feature.',
    operationId: 'TransferSupplyLot',
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
          .default('application/json; charset=utf-8')
          .openapi({
            param: {
              description: 'Type of the content being sent',
              in: 'header',
              name: 'Content-Type',
              required: true,
              schema: { default: 'application/json; charset=utf-8', type: 'string' },
              style: 'simple',
            },
          }),
      }),
      params: z.object({
        skuId: z
          .string()
          .openapi({
            param: {
              description: 'ID of the SKU.',
              in: 'path',
              name: 'skuId',
              required: true,
              schema: { type: 'string' },
              style: 'simple',
            },
          }),
        warehouseId: z
          .string()
          .openapi({
            param: {
              description: 'ID of the warehouse where the SKU is located.',
              in: 'path',
              name: 'warehouseId',
              required: true,
              schema: { type: 'string' },
              style: 'simple',
            },
          }),
        supplyLotId: z
          .string()
          .openapi({
            param: {
              description:
                'ID of the Supply Lot in which the SKU is currently located and from where it will be transfered.',
              in: 'path',
              name: 'supplyLotId',
              required: true,
              schema: { type: 'string' },
              style: 'simple',
            },
          }),
      }),
    },
    responses: { 200: { description: 'OK', headers: z.object({}) } },
  })

export const postApiLogisticsPvtInventoryReservationsRoute = createRoute({
  method: 'post',
  path: '/api/logistics/pvt/inventory/reservations',
  tags: ['Reservations'],
  summary: 'Create reservation',
  description:
    'Creates [reservation](https://help.vtex.com/en/tutorial/how-does-reservation-work--tutorials_92).',
  operationId: 'CreateReservation',
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
        .default('application/json; charset=utf-8')
        .openapi({
          param: {
            description: 'Type of the content being sent.',
            in: 'header',
            name: 'Content-Type',
            required: true,
            schema: { default: 'application/json; charset=utf-8', type: 'string' },
            style: 'simple',
          },
        }),
    }),
    body: {
      description: '',
      content: {
        'application/json; charset=utf-8': {
          schema: z
            .object({
              autorizationExpirationTTL: z.string(),
              deliveryItemOptions: z
                .array(
                  z
                    .object({
                      aditionalTimeBlockedDays: z.string(),
                      deliveryWindows: z.array(z.string()).openapi({ description: '' }),
                      dockId: z.string(),
                      dockTime: z.string(),
                      item: z
                        .object({
                          additionalHandlingTime: z.string(),
                          dimension: z
                            .object({
                              height: z.int32(),
                              length: z.int32(),
                              weight: z.int32(),
                              width: z.int32(),
                            })
                            .openapi({
                              example: { height: 1, length: 1, weight: 150, width: 1 },
                              required: ['weight', 'height', 'width', 'length'],
                              title: 'Dimension',
                            }),
                          groupItemId: z.string().nullable(),
                          id: z.string(),
                          kitItem: z.array(z.string()).openapi({ description: '' }),
                          price: z.int32(),
                          quantity: z.int32(),
                        })
                        .openapi({
                          example: {
                            additionalHandlingTime: '00:00:00',
                            dimension: { height: 1, length: 1, weight: 150, width: 1 },
                            groupItemId: null,
                            id: '2390059',
                            kitItem: [],
                            price: 0,
                            quantity: 1,
                          },
                          required: [
                            'id',
                            'groupItemId',
                            'kitItem',
                            'quantity',
                            'price',
                            'additionalHandlingTime',
                            'dimension',
                          ],
                          title: 'Item',
                        }),
                      listPrice: z.number(),
                      location: z
                        .object({
                          country: z.string(),
                          inStore: z
                            .object({ IsCheckedIn: z.boolean(), StoreId: z.string().nullable() })
                            .openapi({
                              example: { IsCheckedIn: false, StoreId: null },
                              required: ['IsCheckedIn', 'StoreId'],
                              title: 'InStore',
                            }),
                          zipCode: z.string(),
                        })
                        .openapi({
                          example: {
                            country: 'BRA',
                            inStore: { IsCheckedIn: false, StoreId: null },
                            zipCode: '22220070',
                          },
                          required: ['zipCode', 'country', 'inStore'],
                          title: 'Location',
                        }),
                      promotionalPrice: z.number(),
                      slaType: z.string(),
                      slaTypeName: z.string(),
                      timeToDockPlusDockTime: z.string(),
                      totalTime: z.string(),
                      transitTime: z.string(),
                      wareHouseId: z.string().nullable(),
                    })
                    .openapi({
                      example: {
                        aditionalTimeBlockedDays: '00:00:00',
                        deliveryWindows: [],
                        dockId: '1a8bce3',
                        dockTime: '00:00:00',
                        item: {
                          additionalHandlingTime: '00:00:00',
                          dimension: { height: 1, length: 1, weight: 150, width: 1 },
                          groupItemId: null,
                          id: '2390059',
                          kitItem: [],
                          price: 0,
                          quantity: 1,
                        },
                        listPrice: 10.5,
                        location: {
                          country: 'BRA',
                          inStore: { IsCheckedIn: false, StoreId: null },
                          zipCode: '22220070',
                        },
                        promotionalPrice: 10.5,
                        slaType: 'Expressa',
                        slaTypeName: 'Expressa',
                        timeToDockPlusDockTime: '1.00:00:00',
                        totalTime: '3.00:00:00',
                        transitTime: '2.00:00:00',
                        wareHouseId: null,
                      },
                      required: [
                        'item',
                        'slaType',
                        'slaTypeName',
                        'listPrice',
                        'promotionalPrice',
                        'transitTime',
                        'dockTime',
                        'timeToDockPlusDockTime',
                        'aditionalTimeBlockedDays',
                        'totalTime',
                        'deliveryWindows',
                        'wareHouseId',
                        'dockId',
                        'location',
                      ],
                      title: 'DeliveryItemOption',
                    }),
                )
                .openapi({ description: '' }),
              lockId: z.string().nullable(),
              salesChannel: z.string(),
            })
            .openapi({
              example: {
                autorizationExpirationTTL: '00:10:00',
                deliveryItemOptions: [
                  {
                    aditionalTimeBlockedDays: '00:00:00',
                    deliveryWindows: [],
                    dockId: '1a8bce3',
                    dockTime: '00:00:00',
                    item: {
                      additionalHandlingTime: '00:00:00',
                      dimension: { height: 1, length: 1, weight: 150, width: 1 },
                      groupItemId: null,
                      id: '2390059',
                      kitItem: [],
                      price: 0,
                      quantity: 1,
                    },
                    listPrice: 10.5,
                    location: {
                      country: 'BRA',
                      inStore: { IsCheckedIn: false, StoreId: null },
                      zipCode: '22220070',
                    },
                    promotionalPrice: 10.5,
                    slaType: 'Expressa',
                    slaTypeName: 'Expressa',
                    timeToDockPlusDockTime: '1.00:00:00',
                    totalTime: '3.00:00:00',
                    transitTime: '2.00:00:00',
                    wareHouseId: null,
                  },
                ],
                lockId: null,
                salesChannel: '1',
              },
              required: [
                'salesChannel',
                'lockId',
                'autorizationExpirationTTL',
                'deliveryItemOptions',
              ],
              title: 'CreateReservationRequest',
            }),
          example: {
            autorizationExpirationTTL: '00:10:00',
            deliveryItemOptions: [
              {
                aditionalTimeBlockedDays: '00:00:00',
                deliveryWindows: [],
                dockId: '1a8bce3',
                dockTime: '00:00:00',
                item: {
                  additionalHandlingTime: '00:00:00',
                  dimension: { height: 1, length: 1, weight: 150, width: 1 },
                  groupItemId: null,
                  id: '2390059',
                  kitItem: [],
                  price: 0,
                  quantity: 1,
                },
                listPrice: 10.5,
                location: {
                  country: 'BRA',
                  inStore: { IsCheckedIn: false, StoreId: null },
                  zipCode: '22220070',
                },
                promotionalPrice: 10.5,
                slaType: 'Expressa',
                slaTypeName: 'Expressa',
                timeToDockPlusDockTime: '1.00:00:00',
                totalTime: '3.00:00:00',
                transitTime: '2.00:00:00',
                wareHouseId: null,
              },
            ],
            lockId: null,
            salesChannel: '1',
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
          schema: z
            .object({
              AuthorizedDateUtc: z.string(),
              CanceledDateUtc: z.string(),
              ConfirmedDateUtc: z.string(),
              Errors: z.array(z.string()).openapi({ description: '' }),
              IsSucess: z.boolean(),
              LastUpdateDateUtc: z.string(),
              LockId: z.string(),
              MaximumConfirmationDateUtc: z.string(),
              PickupPointItemOptions: z.string().nullable(),
              ReservationDateUtc: z.string(),
              SalesChannel: z.string(),
              SlaRequest: z
                .array(
                  z
                    .object({
                      deliveryWindows: z.string().nullable(),
                      dockId: z.string(),
                      dockTime: z.string(),
                      freightTableId: z.string(),
                      freightTableName: z.string(),
                      item: z
                        .object({
                          additionalHandlingTime: z.string(),
                          dimension: z
                            .object({
                              height: z.number(),
                              length: z.number(),
                              maxSumDimension: z.number(),
                              weight: z.number(),
                              width: z.number(),
                            })
                            .openapi({
                              example: {
                                height: 10,
                                length: 35,
                                maxSumDimension: 0,
                                weight: 800,
                                width: 12,
                              },
                              required: ['weight', 'height', 'width', 'length', 'maxSumDimension'],
                              title: 'Dimension1',
                            }),
                          groupItemId: z.string().nullable(),
                          id: z.string(),
                          kitItem: z.array(z.string()).openapi({ description: '' }),
                          modal: z.string().nullable(),
                          price: z.number(),
                          quantity: z.int32(),
                          unlimitedQuantity: z.boolean(),
                        })
                        .openapi({
                          example: {
                            additionalHandlingTime: '00:00:00',
                            dimension: {
                              height: 10,
                              length: 35,
                              maxSumDimension: 0,
                              weight: 800,
                              width: 12,
                            },
                            groupItemId: null,
                            id: '2390059',
                            kitItem: [],
                            modal: null,
                            price: 0,
                            quantity: 1,
                            unlimitedQuantity: false,
                          },
                          required: [
                            'id',
                            'groupItemId',
                            'quantity',
                            'price',
                            'modal',
                            'additionalHandlingTime',
                            'dimension',
                            'kitItem',
                            'unlimitedQuantity',
                          ],
                          title: 'Item1',
                        }),
                      listPrice: z.number(),
                      location: z
                        .object({
                          country: z.string(),
                          deliveryPointId: z.string().nullable(),
                          inStore: z
                            .object({ IsCheckedIn: z.boolean(), StoreId: z.string() })
                            .openapi({
                              example: { IsCheckedIn: false, StoreId: '180082' },
                              required: ['IsCheckedIn', 'StoreId'],
                              title: 'InStore1',
                            }),
                          point: z.string().nullable(),
                          zipCode: z.string(),
                        })
                        .openapi({
                          example: {
                            country: 'BRA',
                            deliveryPointId: null,
                            inStore: { IsCheckedIn: false, StoreId: '180082' },
                            point: null,
                            zipCode: '22220070',
                          },
                          required: ['zipCode', 'country', 'deliveryPointId', 'point', 'inStore'],
                          title: 'Location1',
                        }),
                      pickupStoreInfo: z.string().nullable(),
                      promotionalPrice: z.number(),
                      slaType: z.string(),
                      slaTypeName: z.string(),
                      timeToDockPlusDockTime: z.string(),
                      totalTime: z.string(),
                      transitTime: z.string(),
                      wareHouseId: z.string(),
                      wmsEndPoint: z.string(),
                    })
                    .openapi({
                      example: {
                        deliveryWindows: null,
                        dockId: '1_1_1',
                        dockTime: '00:00:00',
                        freightTableId: '11cc4b6',
                        freightTableName: 'Correios PAC',
                        item: {
                          additionalHandlingTime: '00:00:00',
                          dimension: {
                            height: 10,
                            length: 35,
                            maxSumDimension: 0,
                            weight: 800,
                            width: 12,
                          },
                          groupItemId: null,
                          id: '2390059',
                          kitItem: [],
                          modal: null,
                          price: 0,
                          quantity: 1,
                          unlimitedQuantity: false,
                        },
                        listPrice: 10.5,
                        location: {
                          country: 'BRA',
                          deliveryPointId: null,
                          inStore: { IsCheckedIn: false, StoreId: '180082' },
                          point: null,
                          zipCode: '22220070',
                        },
                        pickupStoreInfo: null,
                        promotionalPrice: 10.5,
                        slaType: 'Normal',
                        slaTypeName: 'Normal',
                        timeToDockPlusDockTime: '1.00:00:00',
                        totalTime: '3.00:00:00',
                        transitTime: '2.00:00:00',
                        wareHouseId: '1937054',
                        wmsEndPoint: '',
                      },
                      required: [
                        'item',
                        'slaType',
                        'slaTypeName',
                        'freightTableName',
                        'freightTableId',
                        'listPrice',
                        'promotionalPrice',
                        'transitTime',
                        'dockTime',
                        'timeToDockPlusDockTime',
                        'totalTime',
                        'deliveryWindows',
                        'wareHouseId',
                        'dockId',
                        'wmsEndPoint',
                        'location',
                        'pickupStoreInfo',
                      ],
                      title: 'SlaRequest',
                    }),
                )
                .openapi({ description: '' }),
              Status: z.int32(),
            })
            .openapi({
              example: {
                AuthorizedDateUtc: '2016-04-15T19:59:20.0397988+00:00',
                CanceledDateUtc: '0001-01-01T00:00:00+00:00',
                ConfirmedDateUtc: '0001-01-01T00:00:00+00:00',
                Errors: [],
                IsSucess: true,
                LastUpdateDateUtc: '2016-04-15T19:59:20.0397988+00:00',
                LockId: '3bfe679d-c0a8-475a-b315-706f84a9deb4',
                MaximumConfirmationDateUtc: '2016-04-15T20:09:20.0397988+00:00',
                PickupPointItemOptions: null,
                ReservationDateUtc: '2016-04-15T19:59:20.0397988+00:00',
                SalesChannel: '2',
                SlaRequest: [
                  {
                    deliveryWindows: null,
                    dockId: '1_1_1',
                    dockTime: '00:00:00',
                    freightTableId: '11cc4b6',
                    freightTableName: 'Correios PAC',
                    item: {
                      additionalHandlingTime: '00:00:00',
                      dimension: {
                        height: 10,
                        length: 35,
                        maxSumDimension: 0,
                        weight: 800,
                        width: 12,
                      },
                      groupItemId: null,
                      id: '2390059',
                      kitItem: [],
                      modal: null,
                      price: 0,
                      quantity: 1,
                      unlimitedQuantity: false,
                    },
                    listPrice: 10.5,
                    location: {
                      country: 'BRA',
                      deliveryPointId: null,
                      inStore: { IsCheckedIn: false, StoreId: '180082' },
                      point: null,
                      zipCode: '22220070',
                    },
                    pickupStoreInfo: null,
                    promotionalPrice: 10.5,
                    slaType: 'Normal',
                    slaTypeName: 'Normal',
                    timeToDockPlusDockTime: '1.00:00:00',
                    totalTime: '3.00:00:00',
                    transitTime: '2.00:00:00',
                    wareHouseId: '1937054',
                    wmsEndPoint: '',
                  },
                ],
                Status: 1,
              },
              required: [
                'LastUpdateDateUtc',
                'SalesChannel',
                'LockId',
                'ReservationDateUtc',
                'MaximumConfirmationDateUtc',
                'Status',
                'SlaRequest',
                'PickupPointItemOptions',
                'CanceledDateUtc',
                'AuthorizedDateUtc',
                'ConfirmedDateUtc',
                'Errors',
                'IsSucess',
              ],
            }),
          example: {
            AuthorizedDateUtc: '2016-04-15T19:59:20.0397988+00:00',
            CanceledDateUtc: '0001-01-01T00:00:00+00:00',
            ConfirmedDateUtc: '0001-01-01T00:00:00+00:00',
            Errors: [],
            IsSucess: true,
            LastUpdateDateUtc: '2016-04-15T19:59:20.0397988+00:00',
            LockId: '3bfe679d-c0a8-475a-b315-706f84a9deb4',
            MaximumConfirmationDateUtc: '2016-04-15T20:09:20.0397988+00:00',
            PickupPointItemOptions: null,
            ReservationDateUtc: '2016-04-15T19:59:20.0397988+00:00',
            SalesChannel: '2',
            SlaRequest: [
              {
                deliveryWindows: null,
                dockId: '1_1_1',
                dockTime: '00:00:00',
                freightTableId: '11cc4b6',
                freightTableName: 'Correios PAC',
                item: {
                  additionalHandlingTime: '00:00:00',
                  dimension: { height: 10, length: 35, maxSumDimension: 0, weight: 800, width: 12 },
                  groupItemId: null,
                  id: '2390059',
                  kitItem: [],
                  modal: null,
                  price: 0,
                  quantity: 1,
                  unlimitedQuantity: false,
                },
                listPrice: 10.5,
                location: {
                  country: 'BRA',
                  deliveryPointId: null,
                  inStore: { IsCheckedIn: false, StoreId: '180082' },
                  point: null,
                  zipCode: '22220070',
                },
                pickupStoreInfo: null,
                promotionalPrice: 10.5,
                slaType: 'Normal',
                slaTypeName: 'Normal',
                timeToDockPlusDockTime: '1.00:00:00',
                totalTime: '3.00:00:00',
                transitTime: '2.00:00:00',
                wareHouseId: '1937054',
                wmsEndPoint: '',
              },
            ],
            Status: 1,
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
          .openapi({ example: '620', param: { required: false } }),
        Date: z
          .string()
          .exactOptional()
          .openapi({ example: 'Fri, 15 Apr 2016 19:59:18 GMT', param: { required: false } }),
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
        'X-CacheServer': z
          .string()
          .exactOptional()
          .openapi({ example: 'janus-apicache-nginx5', param: { required: false } }),
        'X-Powered-by-VTEX-Janus-ApiCache': z
          .string()
          .exactOptional()
          .openapi({ example: 'v1.3.8', param: { required: false } }),
        'X-Powered-by-VTEX-Janus-Edge': z
          .string()
          .exactOptional()
          .openapi({ example: 'v1.26.4', param: { required: false } }),
        'X-Powered-by-VTEX-Janus-Router': z
          .string()
          .exactOptional()
          .openapi({ example: '2.1.155', param: { required: false } }),
        'X-Track': z
          .string()
          .exactOptional()
          .openapi({ example: 'stable', param: { required: false } }),
        'X-VTEX-Janus-Router-Backend-App': z
          .string()
          .exactOptional()
          .openapi({ example: 'logist-v6.2.96-stable+863', param: { required: false } }),
        'x-vtex-operation-id': z
          .string()
          .exactOptional()
          .openapi({ example: '4e3847c0-596e-4abd-a761-e711bb68bdfa', param: { required: false } }),
      }),
    },
  },
})

export const getApiLogisticsPvtInventoryReservationsReservationIdRoute = createRoute({
  method: 'get',
  path: '/api/logistics/pvt/inventory/reservations/{reservationId}',
  tags: ['Reservations'],
  summary: 'List reservation by ID',
  description: "Lists reservation's information by ID.",
  operationId: 'ReservationById',
  request: {
    headers: z.object({
      'Content-Type': z
        .string()
        .default('application/json; charset=utf-8')
        .openapi({
          param: {
            description: 'Type of the content being sent',
            in: 'header',
            name: 'Content-Type',
            required: true,
            schema: { default: 'application/json; charset=utf-8', type: 'string' },
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
      reservationId: z
        .string()
        .openapi({
          param: {
            description: '',
            in: 'path',
            name: 'reservationId',
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
        'application/json; charset=utf-8': {
          schema: z
            .object({
              AuthorizedDateUtc: z
                .string()
                .exactOptional()
                .openapi({ description: 'Authorized date in UTC.' }),
              CanceledDateUtc: z
                .string()
                .exactOptional()
                .openapi({ description: 'Canceled date in UTC.' }),
              ConfirmedDateUtc: z
                .string()
                .exactOptional()
                .openapi({ description: 'Confirmed date in UTC.' }),
              Errors: z
                .array(z.string())
                .exactOptional()
                .openapi({ description: 'Information on errors, if there are any.' }),
              IsSucess: z.boolean().exactOptional(),
              LastUpdateDateUtc: z
                .string()
                .exactOptional()
                .openapi({ description: 'Date of the last update in UTC.' }),
              LockId: z.string().exactOptional().openapi({ description: 'Lock ID.' }),
              MaximumConfirmationDateUtc: z
                .string()
                .exactOptional()
                .openapi({ description: 'Maximum confirmation date in UTC.' }),
              PickupPointItemOptions: z
                .string()
                .exactOptional()
                .openapi({ description: 'Pickup point item options.' }),
              ReservationDateUtc: z
                .string()
                .exactOptional()
                .openapi({ description: 'Reservation date in UTC.' }),
              SalesChannel: z.string().exactOptional().openapi({ description: 'Sales channel.' }),
              SlaRequest: z
                .array(
                  z
                    .object({
                      deliveryWindows: z.string().nullable().exactOptional(),
                      dockId: z.string().exactOptional(),
                      dockTime: z.string().exactOptional(),
                      freightTableId: z.string().exactOptional(),
                      freightTableName: z.string().exactOptional(),
                      item: z
                        .object({
                          additionalHandlingTime: z.string(),
                          dimension: z
                            .object({
                              height: z.number(),
                              length: z.number(),
                              maxSumDimension: z.number(),
                              weight: z.number(),
                              width: z.number(),
                            })
                            .openapi({
                              example: {
                                height: 10,
                                length: 35,
                                maxSumDimension: 0,
                                weight: 800,
                                width: 12,
                              },
                              required: ['weight', 'height', 'width', 'length', 'maxSumDimension'],
                              title: 'Dimension1',
                            }),
                          groupItemId: z.string().nullable(),
                          id: z.string(),
                          kitItem: z.array(z.string()).openapi({ description: '' }),
                          modal: z.string().nullable(),
                          price: z.number(),
                          quantity: z.int32(),
                          unlimitedQuantity: z.boolean(),
                        })
                        .exactOptional()
                        .openapi({
                          example: {
                            additionalHandlingTime: '00:00:00',
                            dimension: {
                              height: 10,
                              length: 35,
                              maxSumDimension: 0,
                              weight: 800,
                              width: 12,
                            },
                            groupItemId: null,
                            id: '2390059',
                            kitItem: [],
                            modal: null,
                            price: 0,
                            quantity: 1,
                            unlimitedQuantity: false,
                          },
                          required: [
                            'id',
                            'groupItemId',
                            'quantity',
                            'price',
                            'modal',
                            'additionalHandlingTime',
                            'dimension',
                            'kitItem',
                            'unlimitedQuantity',
                          ],
                          title: 'Item1',
                        }),
                      listPrice: z.number().exactOptional(),
                      location: z
                        .object({
                          country: z.string(),
                          deliveryPointId: z.string().nullable(),
                          inStore: z
                            .object({ IsCheckedIn: z.boolean(), StoreId: z.string() })
                            .openapi({
                              example: { IsCheckedIn: false, StoreId: '180082' },
                              required: ['IsCheckedIn', 'StoreId'],
                              title: 'InStore1',
                            }),
                          point: z.string().nullable(),
                          zipCode: z.string(),
                        })
                        .exactOptional()
                        .openapi({
                          example: {
                            country: 'BRA',
                            deliveryPointId: null,
                            inStore: { IsCheckedIn: false, StoreId: '180082' },
                            point: null,
                            zipCode: '22220070',
                          },
                          required: ['zipCode', 'country', 'deliveryPointId', 'point', 'inStore'],
                          title: 'Location1',
                        }),
                      pickupStoreInfo: z.string().nullable().exactOptional(),
                      promotionalPrice: z.number().exactOptional(),
                      slaType: z.string().exactOptional(),
                      slaTypeName: z.string().exactOptional(),
                      timeToDockPlusDockTime: z.string().exactOptional(),
                      totalTime: z.string().exactOptional(),
                      transitTime: z.string().exactOptional(),
                      wareHouseId: z.string().exactOptional(),
                      wmsEndPoint: z.string().exactOptional(),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional()
                .openapi({ description: 'Information on SLA request.' }),
              Status: z
                .int32()
                .exactOptional()
                .openapi({
                  description:
                    'Reservation status, being:\n\r`0`: `NotCommitted`\n\r`1`: `Authorized`\n\r`2`: `Confirmed`\n\r`3`: `Canceled_AbortedCommitted`\n\r`4`: `Canceled_AuthorizationExpired`\n\r`5`: `Canceled_Manually`',
                }),
            })
            .openapi({
              example: {
                AuthorizedDateUtc: '2016-04-15T19:59:20.0397988+00:00',
                CanceledDateUtc: '0001-01-01T00:00:00+00:00',
                ConfirmedDateUtc: '0001-01-01T00:00:00+00:00',
                Errors: [],
                IsSucess: true,
                LastUpdateDateUtc: '2016-04-15T19:59:20.0397988+00:00',
                LockId: '3bfe679d-c0a8-475a-b315-706f84a9deb4',
                MaximumConfirmationDateUtc: '2016-04-15T20:09:20.0397988+00:00',
                PickupPointItemOptions: 'PUP 1',
                ReservationDateUtc: '2016-04-15T19:59:20.0397988+00:00',
                SalesChannel: '2',
                SlaRequest: [
                  {
                    deliveryWindows: null,
                    dockId: '1_1_1',
                    dockTime: '00:00:00',
                    freightTableId: '11cc4b6',
                    freightTableName: 'Correios PAC',
                    item: {
                      additionalHandlingTime: '00:00:00',
                      dimension: {
                        height: 10,
                        length: 35,
                        maxSumDimension: 0,
                        weight: 800,
                        width: 12,
                      },
                      groupItemId: null,
                      id: '2390059',
                      kitItem: [],
                      modal: null,
                      price: 0,
                      quantity: 1,
                      unlimitedQuantity: false,
                    },
                    listPrice: 10.5,
                    location: {
                      country: 'BRA',
                      deliveryPointId: null,
                      inStore: { IsCheckedIn: false, StoreId: '180082' },
                      point: null,
                      zipCode: '22220070',
                    },
                    pickupStoreInfo: null,
                    promotionalPrice: 10.5,
                    slaType: 'Normal',
                    slaTypeName: 'Normal',
                    timeToDockPlusDockTime: '1.00:00:00',
                    totalTime: '3.00:00:00',
                    transitTime: '2.00:00:00',
                    wareHouseId: '1937054',
                    wmsEndPoint: '',
                  },
                ],
                Status: 1,
              },
              required: [],
            }),
          example: {
            AuthorizedDateUtc: '2016-04-15T19:59:40.9832533+00:00',
            CanceledDateUtc: '0001-01-01T00:00:00+00:00',
            ConfirmedDateUtc: '0001-01-01T00:00:00+00:00',
            Errors: [],
            IsSucess: true,
            LastUpdateDateUtc: '2016-04-15T19:59:40.9832533+00:00',
            LockId: '621a9121-06c9-4731-96d1-edf8c5c23877',
            MaximumConfirmationDateUtc: '2016-04-15T20:09:40.9832533+00:00',
            PickupPointItemOptions: 'PUP 1',
            ReservationDateUtc: '2016-04-15T19:59:40.9832533+00:00',
            SalesChannel: '2',
            SlaRequest: [
              {
                deliveryWindows: null,
                dockId: '1_1_1',
                dockTime: '00:00:00',
                freightTableId: '11cc4b6',
                freightTableName: 'Correios PAC',
                item: {
                  additionalHandlingTime: '00:00:00',
                  dimension: { height: 10, length: 35, maxSumDimension: 0, weight: 800, width: 12 },
                  groupItemId: null,
                  id: '2390059',
                  kitItem: [],
                  modal: null,
                  price: 0,
                  quantity: 1,
                  unlimitedQuantity: false,
                },
                listPrice: 10.5,
                location: {
                  country: 'BRA',
                  deliveryPointId: null,
                  inStore: { IsCheckedIn: false, StoreId: '180082' },
                  point: null,
                  zipCode: '22220070',
                },
                pickupStoreInfo: null,
                promotionalPrice: 10.5,
                slaType: 'Normal',
                slaTypeName: 'Normal',
                timeToDockPlusDockTime: '1.00:00:00',
                totalTime: '3.00:00:00',
                transitTime: '2.00:00:00',
                wareHouseId: '1937054',
                wmsEndPoint: '',
              },
            ],
            Status: 1,
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
          .openapi({ example: '621', param: { required: false } }),
        Date: z
          .string()
          .exactOptional()
          .openapi({ example: 'Fri, 15 Apr 2016 20:00:01 GMT', param: { required: false } }),
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
        'X-CacheServer': z
          .string()
          .exactOptional()
          .openapi({ example: 'janus-apicache-nginx5', param: { required: false } }),
        'X-Powered-by-VTEX-Janus-ApiCache': z
          .string()
          .exactOptional()
          .openapi({ example: 'v1.3.8', param: { required: false } }),
        'X-Powered-by-VTEX-Janus-Edge': z
          .string()
          .exactOptional()
          .openapi({ example: 'v1.26.4', param: { required: false } }),
        'X-Powered-by-VTEX-Janus-Router': z
          .string()
          .exactOptional()
          .openapi({ example: '2.1.155', param: { required: false } }),
        'X-Track': z
          .string()
          .exactOptional()
          .openapi({ example: 'stable', param: { required: false } }),
        'X-VTEX-Cache-Status-Janus-ApiCache': z
          .string()
          .exactOptional()
          .openapi({ example: 'MISS', param: { required: false } }),
        'X-VTEX-Janus-Router-Backend-App': z
          .string()
          .exactOptional()
          .openapi({ example: 'logist-v6.2.96-stable+863', param: { required: false } }),
        'x-vtex-operation-id': z
          .string()
          .exactOptional()
          .openapi({ example: 'ffa62df6-4fd0-4cf0-a348-1f3964abc4c4', param: { required: false } }),
      }),
    },
  },
})

export const postApiLogisticsPvtInventoryReservationsReservationIdAcknowledgeRoute = createRoute({
  method: 'post',
  path: '/api/logistics/pvt/inventory/reservations/{reservationId}/acknowledge',
  tags: ['Reservations'],
  summary: 'Acknowledgment reservation',
  description: 'Acknowledges reservations made by reservation ID.',
  operationId: 'AcknowledgmentReservation',
  request: {
    headers: z.object({
      'Content-Type': z
        .string()
        .default('application/json; charset=utf-8')
        .openapi({
          param: {
            description: 'Type of the content being sent',
            in: 'header',
            name: 'Content-Type',
            required: true,
            schema: { default: 'application/json; charset=utf-8', type: 'string' },
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
      reservationId: z
        .string()
        .openapi({
          param: {
            description: '',
            in: 'path',
            name: 'reservationId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK', headers: z.object({}) } },
})

export const postApiLogisticsPvtInventoryReservationsReservationIdCancelRoute = createRoute({
  method: 'post',
  path: '/api/logistics/pvt/inventory/reservations/{reservationId}/cancel',
  tags: ['Reservations'],
  summary: 'Cancel reservation',
  description: 'Cancels reservation by reservation ID.',
  operationId: 'CancelReservation',
  request: {
    headers: z.object({
      'Content-Type': z
        .string()
        .default('application/json; charset=utf-8')
        .openapi({
          param: {
            description: 'Type of the content being sent',
            in: 'header',
            name: 'Content-Type',
            required: true,
            schema: { default: 'application/json; charset=utf-8', type: 'string' },
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
      reservationId: z
        .string()
        .openapi({
          param: {
            description: '',
            in: 'path',
            name: 'reservationId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK', headers: z.object({}) } },
})

export const postApiLogisticsPvtInventoryReservationsReservationIdConfirmRoute = createRoute({
  method: 'post',
  path: '/api/logistics/pvt/inventory/reservations/{reservationId}/confirm',
  tags: ['Reservations'],
  summary: 'Confirm reservation',
  description: 'Confirms reservation by reservation ID.',
  operationId: 'ConfirmReservation',
  request: {
    headers: z.object({
      'Content-Type': z
        .string()
        .default('application/json; charset=utf-8')
        .openapi({
          param: {
            description: 'Type of the content being sent',
            in: 'header',
            name: 'Content-Type',
            required: true,
            schema: { default: 'application/json; charset=utf-8', type: 'string' },
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
      reservationId: z
        .string()
        .openapi({
          param: {
            description: '',
            in: 'path',
            name: 'reservationId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK', headers: z.object({}) } },
})

export const getApiLogisticsPvtInventoryReservationsWarehouseIdSkuIdRoute = createRoute({
  method: 'get',
  path: '/api/logistics/pvt/inventory/reservations/{warehouseId}/{skuId}',
  tags: ['Reservations'],
  summary: 'List reservation by warehouse and SKU',
  description: 'Lists reservations in your store, by searching through warehouse and SKU.',
  operationId: 'ReservationbyWarehouseandSku',
  request: {
    headers: z.object({
      'Content-Type': z
        .string()
        .default('application/json; charset=utf-8')
        .openapi({
          param: {
            description: 'Type of the content being sent',
            in: 'header',
            name: 'Content-Type',
            required: true,
            schema: { default: 'application/json; charset=utf-8', type: 'string' },
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
      warehouseId: z
        .string()
        .openapi({
          param: {
            description: '',
            in: 'path',
            name: 'warehouseId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      skuId: z
        .string()
        .openapi({
          param: {
            description: '',
            in: 'path',
            name: 'skuId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK', headers: z.object({}) } },
})

export const getApiLogisticsPvtInventorySkusSkuIdRoute = createRoute({
  method: 'get',
  path: '/api/logistics/pvt/inventory/skus/{skuId}',
  tags: ['Inventory'],
  summary: 'List inventory by SKU',
  description: "Lists your store's inventory by SKU ID",
  operationId: 'InventoryBySku',
  request: {
    headers: z.object({
      'Content-Type': z
        .string()
        .default('application/json; charset=utf-8')
        .openapi({
          param: {
            description: 'Type of the content being sent',
            in: 'header',
            name: 'Content-Type',
            required: true,
            schema: { default: 'application/json; charset=utf-8', type: 'string' },
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
      skuId: z
        .string()
        .openapi({
          param: {
            description: '',
            in: 'path',
            name: 'skuId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json; charset=utf-8': {
          schema: z
            .object({
              balance: z
                .array(
                  z
                    .object({
                      hasUnlimitedQuantity: z.boolean(),
                      reservedQuantity: z.int32(),
                      totalQuantity: z.int32(),
                      warehouseId: z.string(),
                      warehouseName: z.string(),
                    })
                    .openapi({
                      example: {
                        hasUnlimitedQuantity: false,
                        reservedQuantity: 9,
                        totalQuantity: 101,
                        warehouseId: '1937054',
                        warehouseName: 'Estoque A',
                      },
                      required: [
                        'warehouseId',
                        'warehouseName',
                        'totalQuantity',
                        'reservedQuantity',
                        'hasUnlimitedQuantity',
                      ],
                      title: 'Balance',
                    }),
                )
                .openapi({ description: '' }),
              skuId: z.string(),
            })
            .openapi({
              example: {
                balance: [
                  {
                    hasUnlimitedQuantity: false,
                    reservedQuantity: 9,
                    totalQuantity: 101,
                    warehouseId: '1937054',
                    warehouseName: 'Estoque A',
                  },
                  {
                    hasUnlimitedQuantity: false,
                    reservedQuantity: 0,
                    totalQuantity: 100,
                    warehouseId: 'avl',
                    warehouseName: 'Estoque InStore',
                  },
                  {
                    hasUnlimitedQuantity: false,
                    reservedQuantity: 0,
                    totalQuantity: 100,
                    warehouseId: '1448dc2',
                    warehouseName: 'Estoque C',
                  },
                  {
                    hasUnlimitedQuantity: false,
                    reservedQuantity: 0,
                    totalQuantity: 100,
                    warehouseId: '140ac66',
                    warehouseName: 'Estoque B',
                  },
                  {
                    hasUnlimitedQuantity: false,
                    reservedQuantity: 0,
                    totalQuantity: 100,
                    warehouseId: 'pickuppoint',
                    warehouseName: 'PickupPoint',
                  },
                  {
                    hasUnlimitedQuantity: false,
                    reservedQuantity: 0,
                    totalQuantity: 200,
                    warehouseId: 'pickuppoint_2',
                    warehouseName: 'PickupPoint 2',
                  },
                  {
                    hasUnlimitedQuantity: false,
                    reservedQuantity: 0,
                    totalQuantity: 1011,
                    warehouseId: '15bfc76',
                    warehouseName: 'Estoque Principal',
                  },
                ],
                skuId: '2390059',
              },
              required: ['skuId', 'balance'],
            }),
          example: {
            balance: [
              {
                hasUnlimitedQuantity: false,
                reservedQuantity: 9,
                totalQuantity: 101,
                warehouseId: '1937054',
                warehouseName: 'Estoque A',
              },
              {
                hasUnlimitedQuantity: false,
                reservedQuantity: 0,
                totalQuantity: 100,
                warehouseId: 'avl',
                warehouseName: 'Estoque InStore',
              },
              {
                hasUnlimitedQuantity: false,
                reservedQuantity: 0,
                totalQuantity: 100,
                warehouseId: '1448dc2',
                warehouseName: 'Estoque C',
              },
              {
                hasUnlimitedQuantity: false,
                reservedQuantity: 0,
                totalQuantity: 100,
                warehouseId: '140ac66',
                warehouseName: 'Estoque B',
              },
              {
                hasUnlimitedQuantity: false,
                reservedQuantity: 0,
                totalQuantity: 100,
                warehouseId: 'pickuppoint',
                warehouseName: 'PickupPoint',
              },
              {
                hasUnlimitedQuantity: false,
                reservedQuantity: 0,
                totalQuantity: 200,
                warehouseId: 'pickuppoint_2',
                warehouseName: 'PickupPoint 2',
              },
              {
                hasUnlimitedQuantity: false,
                reservedQuantity: 0,
                totalQuantity: 1011,
                warehouseId: '15bfc76',
                warehouseName: 'Estoque Principal',
              },
            ],
            skuId: '2390059',
          },
        },
      },
      headers: z.object({
        'Cache-Control': z
          .string()
          .exactOptional()
          .openapi({ example: 'no-cache', param: { required: false } }),
        'Content-Length': z
          .string()
          .exactOptional()
          .openapi({ example: '926', param: { required: false } }),
        Date: z
          .string()
          .exactOptional()
          .openapi({ example: 'Fri, 20 May 2016 14:11:32 GMT', param: { required: false } }),
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
        'x-vtex-operation-id': z
          .string()
          .exactOptional()
          .openapi({ example: '79a7a62f-03b8-42f8-bcb9-686bb6d67155', param: { required: false } }),
      }),
    },
  },
})

export const putApiLogisticsPvtInventorySkusSkuIdWarehousesWarehouseIdRoute = createRoute({
  method: 'put',
  path: '/api/logistics/pvt/inventory/skus/{skuId}/warehouses/{warehouseId}',
  tags: ['Inventory'],
  summary: 'Update inventory by SKU and warehouse',
  description: 'Updates inventory for a given SKU and warehouse.',
  operationId: 'UpdateInventoryBySkuandWarehouse',
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
        .default('application/json; charset=utf-8')
        .openapi({
          param: {
            description: 'Type of the content being sent.',
            in: 'header',
            name: 'Content-Type',
            required: true,
            schema: { default: 'application/json; charset=utf-8', type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      skuId: z
        .string()
        .openapi({
          param: {
            description: '',
            in: 'path',
            name: 'skuId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      warehouseId: z
        .string()
        .openapi({
          param: {
            description: '',
            in: 'path',
            name: 'warehouseId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    body: {
      description: '',
      content: {
        'application/json; charset=utf-8': {
          schema: z
            .object({
              dateUtcOnBalanceSystem: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Defines the corresponding moment to the informed warehouse. It is useful due to the liberation of handling order reservations. \r\n\r\nWhen requested as `null`, this value will be the date/time of the request. Its format is `DateTimeOffset`, as in `yyyy-mm-dd-Thh:mm:ss`. For example: `2022-03-15T00:52:16`.',
                  example: 'null',
                }),
              quantity: z.int32(),
              'timeToRefill (deprecated)': z.string(),
              unlimitedQuantity: z.boolean(),
            })
            .openapi({
              example: {
                dateUtcOnBalanceSystem: '2022-03-15T00:52:16',
                quantity: 101,
                'timeToRefill (deprecated)': '00:00:00',
                unlimitedQuantity: false,
              },
              required: ['unlimitedQuantity', 'quantity', 'timeToRefill (deprecated)'],
              title: 'UpdateInventoryBySkuandWarehouseRequest',
            }),
          example: {
            dateUtcOnBalanceSystem: 'null',
            quantity: 101,
            'timeToRefill (deprecated)': '00:00:00',
            unlimitedQuantity: false,
          },
        },
      },
      required: true,
    },
  },
  responses: { 200: { description: 'OK', headers: z.object({}) } },
})

export const getApiLogisticsPvtShippingPoliciesRoute = createRoute({
  method: 'get',
  path: '/api/logistics/pvt/shipping-policies',
  tags: ['Shipping Policies'],
  summary: 'List shipping policies',
  description:
    'This endpoint lists existing shipping policies from carriers in your store.\n\r\n\r> Note that, while most of our API endpoints return time fields in UTC, this endpoint returns **Scheduled Delivery** related time fields adjusted to the configured time zone of the account.',
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
    query: z.object({
      page: z
        .string()
        .openapi({
          param: {
            description:
              'Desired number of pages to retrieve information from your Shipping Policies.',
            in: 'query',
            name: 'page',
            required: true,
            schema: { example: 'page', type: 'string' },
          },
          example: 'page',
        }),
      perPage: z
        .string()
        .openapi({
          param: {
            description:
              'Desired number of items per page, to retrieve information from your Shipping Policies.',
            in: 'query',
            name: 'perPage',
            required: true,
            schema: { example: 'perPage', type: 'string' },
          },
          example: 'perPage',
        }),
    }),
  },
  responses: { 200: { description: 'OK' } },
})

export const postApiLogisticsPvtShippingPoliciesRoute = createRoute({
  method: 'post',
  path: '/api/logistics/pvt/shipping-policies',
  tags: ['Shipping Policies'],
  summary: 'Create shipping policy',
  description:
    'This endpoint creates new shipping policies from carriers in your store.\n\r\n\r> Note that, while most of our API endpoints return time fields in UTC, this endpoint returns **Scheduled Delivery** related time fields adjusted to the configured time zone of the account.',
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
      description: '',
      content: {
        'application/json': {
          schema: z
            .object({
              businessHourSettings: z
                .object({
                  carrierBusinessHours: z
                    .array(
                      z
                        .object({
                          closingTime: z
                            .string()
                            .openapi({
                              description: 'Closing time.',
                              example: '23:59:59',
                              title: 'closingTime',
                            }),
                          dayOfWeek: z
                            .int()
                            .openapi({
                              description: 'Day of the week, from `0` (sunday) to `6` (saturday).',
                              example: 1,
                              title: 'dayOfWeek',
                            }),
                          openingTime: z
                            .string()
                            .openapi({
                              description: 'Opening time.',
                              example: '00:00:00',
                              title: 'openingTime',
                            }),
                        })
                        .openapi({
                          description: 'Object containing business hour configuration.',
                          required: ['openingTime', 'closingTime', 'dayOfWeek'],
                        }),
                    )
                    .openapi({
                      description: 'Array containing objects with business hour configurations.',
                      title: 'carrierBusinessHours',
                    }),
                  isOpenOutsideBusinessHours: z
                    .boolean()
                    .openapi({
                      description:
                        'Select whether the shipping policy allows deliveries outside business hours.',
                      example: true,
                      title: 'isOpenOutsideBusinessHours',
                    }),
                })
                .openapi({
                  description: 'Business hour configuration.',
                  example: {
                    carrierBusinessHours: [
                      { closingTime: '18:59:59', dayOfWeek: 0, openingTime: '09:00:00' },
                    ],
                    isOpenOutsideBusinessHours: true,
                  },
                  required: ['carrierBusinessHours', 'isOpenOutsideBusinessHours'],
                  title: 'businessHourSettings',
                }),
              carrierSchedule: z
                .array(
                  z
                    .object({
                      dayOfWeek: z
                        .int()
                        .exactOptional()
                        .openapi({
                          description: 'Day of the week, from `0` (sunday) to `6` (saturday).',
                          example: 0,
                        }),
                      timeLimit: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'Time limit.', example: 'time_limit' }),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional()
                .openapi({
                  description: 'Schedule sent by the carrier, to configure Shipping policy',
                  title: 'carrierSchedule',
                }),
              cubicWeightSettings: z
                .object({
                  minimunAcceptableVolumetricWeight: z
                    .number()
                    .openapi({
                      description: '',
                      example: 0,
                      title: 'minimunAcceptableVolumetricWeight',
                    }),
                  volumetricFactor: z
                    .number()
                    .openapi({
                      description: 'Factor that will be used on the cubic weight calculation.',
                      example: 0,
                      title: 'volumetricFactor',
                    }),
                })
                .openapi({
                  description: "Measure that accounts package's volume, and not only weight.",
                  example: { minimunAcceptableVolumetricWeight: 5, volumetricFactor: 3 },
                  required: ['volumetricFactor', 'minimunAcceptableVolumetricWeight'],
                  title: 'cubicWeightSettings',
                }),
              deliveryScheduleSettings: z
                .object({
                  dayOfWeekForDelivery: z
                    .array(
                      z
                        .object({
                          dayOfWeek: z
                            .int()
                            .openapi({
                              description: 'Day of the week, from `0` (sunday) to `6` (saturday).',
                              example: 2,
                            }),
                          deliveryRanges: z
                            .array(
                              z
                                .object({
                                  deliveryCapacity: z
                                    .array(
                                      z
                                        .object({
                                          capacityType: z
                                            .string()
                                            .openapi({
                                              description:
                                                'Defines how the delivery capacity is measured for this reservation window, by maximum number of orders (`"ORDERS_QUANTITY"`) or SKUs (`"SKUS_QUANTITY"`).',
                                              example: 'ORDERS_QUANTITY',
                                            }),
                                          maxValue: z
                                            .number()
                                            .openapi({
                                              description:
                                                'Maximum number of orders or SKUs that the store is capable of fulfilling.',
                                              example: 0,
                                            }),
                                        })
                                        .openapi({
                                          example: {
                                            capacityType: 'ORDERS_QUANTITY',
                                            maxValue: 55,
                                          },
                                          required: ['capacityType', 'maxValue'],
                                        }),
                                    )
                                    .exactOptional()
                                    .openapi({
                                      description:
                                        'Sets maximum delivery capacity for a given reservation window for scheduled delivery.',
                                    }),
                                  endTime: z
                                    .string()
                                    .openapi({
                                      description: 'End time for day of the week.',
                                      example: '12:30:00',
                                    }),
                                  listPrice: z
                                    .number()
                                    .openapi({
                                      description: 'List price for day of the week.',
                                      example: 0,
                                    }),
                                  startTime: z
                                    .string()
                                    .openapi({
                                      description: 'Start time for day of the week.',
                                      example: '11:00:00',
                                      title: 'startTime',
                                    }),
                                })
                                .openapi({ required: ['startTime', 'endTime', 'listPrice'] }),
                            )
                            .openapi({
                              description: 'Reservation windows for scheduled delivery.',
                            }),
                        })
                        .openapi({ required: ['dayOfWeek', 'deliveryRanges'] }),
                    )
                    .openapi({
                      description:
                        'Select the chosen days for delivery. Values for each day of the week are: 0 = sunday, 1 = monday, 2 = tuesday, 3 = wednesday, 4 = thursday, 5 = friday, 6 = saturday. Make sure to add the available hours for the chosen days, following the example.',
                      example: [
                        {
                          dayOfWeek: 2,
                          deliveryRanges: [
                            { endTime: '12:00:00', listPrice: 10, startTime: '08:00:00' },
                            { endTime: '18:00:00', listPrice: 10, startTime: '12:01:00' },
                          ],
                          maxRangeDelivery: 5,
                        },
                      ],
                      title: 'dayOfWeekForDelivery',
                    }),
                  maxRangeDelivery: z
                    .number()
                    .openapi({
                      description:
                        "Range of days available within a delivery window, for the customer to choose the scheduled delivery. For example, if the configured maxRangeDelivery is equal 7, and the customer buys something on a Tuesday, the options for scheduled delivery will be shown until the following Tuesday (7 days from the purchase day). If no options are available within the maxRangeDelivery set, this shipping policy won't be shown on the checkout.",
                      example: 0,
                      title: 'maxRangeDelivery',
                    }),
                  useDeliverySchedule: z
                    .boolean()
                    .openapi({
                      description: 'Select the Scheduled Delivery configuration.',
                      example: true,
                      title: 'useDeliverySchedule',
                    }),
                })
                .openapi({
                  description: 'Settings for the Scheduled Delivery feature.',
                  example: {
                    dayOfWeekForDelivery: [
                      {
                        dayOfWeek: 2,
                        deliveryRanges: [
                          { endTime: '12:00:00', listPrice: 5, startTime: '08:00:00' },
                          { endTime: '18:00:00', listPrice: 10, startTime: '12:01:00' },
                        ],
                      },
                    ],
                    maxRangeDelivery: 5,
                    useDeliverySchedule: true,
                  },
                  required: ['useDeliverySchedule', 'dayOfWeekForDelivery', 'maxRangeDelivery'],
                  title: 'deliveryScheduleSettings',
                }),
              id: z
                .string()
                .openapi({
                  description: 'ID of the shipping policy.',
                  example: '123',
                  title: 'id schema',
                }),
              isActive: z
                .boolean()
                .openapi({
                  description: 'Indicates whether shipping policy is active or not.',
                  example: false,
                }),
              maxDimension: z
                .object({
                  largestMeasure: z
                    .number()
                    .openapi({
                      description: 'Largest measure of the package.',
                      example: 0,
                      title: 'largestMeasure',
                    }),
                  maxMeasureSum: z
                    .number()
                    .openapi({
                      description: 'Sum of all maximum measures of the package.',
                      example: 0,
                      title: 'maxMeasureSum',
                    }),
                })
                .openapi({
                  description:
                    'Object containing attributes of maximum dimension permitted by the shipping policy (carrier).',
                  example: { largestMeasure: 15, maxMeasureSum: 25 },
                  required: ['largestMeasure', 'maxMeasureSum'],
                  title: 'maxDimension',
                }),
              maximumValueAceptable: z
                .number()
                .openapi({
                  description: 'Maximum value accepted by the carrier, to realize the shipping.',
                  example: 0,
                  title: 'maximumValueAceptable',
                }),
              minimumValueAceptable: z
                .number()
                .openapi({
                  description: 'Minimum value accepted by the carrier, to realize the shipping.',
                  example: 0,
                  title: 'minimumValueAceptable',
                }),
              modalSettings: z
                .object({
                  modals: z
                    .array(z.any())
                    .openapi({
                      description: 'Type of special freight.',
                      example: ['Modal1'],
                      title: 'modals',
                    }),
                  useOnlyItemsWithDefinedModal: z
                    .boolean()
                    .openapi({
                      description:
                        "When set as `true`, the modal's configurations will apply only for items with a defined modal.",
                      example: false,
                      title: 'useOnlyItemsWithDefinedModal',
                    }),
                })
                .openapi({
                  description:
                    'Configurations for the [modal](https://help.vtex.com/en/tutorial/how-does-the-modal-work--tutorials_125), which is the attachement of a specific product to a carrier specialized in delivering that type of product.',
                  example: { modals: ['Modal1'], useOnlyItemsWithDefinedModal: false },
                  required: ['modals', 'useOnlyItemsWithDefinedModal'],
                  title: 'modalSettings',
                }),
              name: z
                .string()
                .openapi({
                  description: 'Name of the shipping policy.',
                  example: 'Normal',
                  title: 'name',
                }),
              numberOfItemsPerShipment: z
                .int()
                .openapi({
                  description:
                    "Capacity of your store's logistics of shipment, determines number of items permitted per shipment.",
                  example: 5,
                  title: 'numberOfItemsPerShipment',
                }),
              pickupPointsSettings: z
                .object({
                  pickupPointIds: z
                    .array(z.any())
                    .openapi({
                      description:
                        'Insert the IDs for pickup points previously configured in your store.',
                      example: ['Id1', 'Id2'],
                      title: 'pickupPointIds',
                    }),
                  pickupPointTags: z
                    .array(z.any())
                    .openapi({
                      description:
                        'Insert the tags for pickup points previously configured in your store.',
                      example: ['Tag1', 'Tag2'],
                      title: 'pickupPointTags',
                    }),
                  sellers: z
                    .array(z.any())
                    .openapi({
                      description:
                        'Sellers that will be associated with the [pickup points](https://help.vtex.com/en/tutorial/pickup-points--2fljn6wLjn8M4lJHA6HP3R) of the shipping policy being created.',
                      example: ['Seller1'],
                      title: 'sellers',
                    }),
                })
                .openapi({
                  description: 'Configuration for Pickup Points.',
                  example: {
                    pickupPointIds: ['null'],
                    pickupPointTags: ['null'],
                    sellers: ['cosmetics2'],
                  },
                  required: ['pickupPointIds', 'pickupPointTags', 'sellers'],
                  title: 'pickupPointsSettings',
                }),
              shippingMethod: z
                .string()
                .openapi({
                  description:
                    'Type of shipping available for this shipping policy (carrier). Options shown on freight simulation',
                  example: 'Normal',
                  title: 'shippingMethod',
                }),
              weekendAndHolidays: z
                .object({
                  holiday: z
                    .boolean()
                    .openapi({
                      description: 'Does the shipping policy allow deliveries onholidays?',
                      example: false,
                      title: 'holiday',
                    }),
                  saturday: z
                    .boolean()
                    .openapi({
                      description: 'Does the shipping policy allow deliveries on saturdays?',
                      example: false,
                      title: 'saturday',
                    }),
                  sunday: z
                    .boolean()
                    .openapi({
                      description: 'Does the shipping policy allow deliveries on sundays?',
                      example: false,
                      title: 'sunday',
                    }),
                })
                .openapi({
                  description:
                    'If the shipping policy includes deliveries on weekends and holidays.',
                  example: { holiday: false, saturday: false, sunday: false },
                  required: ['saturday', 'sunday', 'holiday'],
                  title: 'weekendAndHolidays',
                }),
            })
            .openapi({
              required: [
                'id',
                'name',
                'shippingMethod',
                'weekendAndHolidays',
                'maxDimension',
                'numberOfItemsPerShipment',
                'minimumValueAceptable',
                'maximumValueAceptable',
                'deliveryScheduleSettings',
                'cubicWeightSettings',
                'modalSettings',
                'businessHourSettings',
                'pickupPointsSettings',
                'isActive',
              ],
              title: 'Request body',
            }),
        },
      },
    },
  },
  responses: { 200: { description: 'OK' } },
})

export const getApiLogisticsPvtShippingPoliciesIdRoute = createRoute({
  method: 'get',
  path: '/api/logistics/pvt/shipping-policies/{id}',
  tags: ['Shipping Policies'],
  summary: 'Retrieve shipping policy by ID',
  description:
    'This endpoint lists existing [shipping policies](https://help.vtex.com/en/tutorial/shipping-policy--tutorials_140) from carriers in your store, searching by their IDs.\n\r\n\r> Note that, while most of our API endpoints return time fields in UTC, this endpoint returns **Scheduled Delivery** related time fields adjusted to the configured time zone of the account.',
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
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'ID of the shipping policy.',
            in: 'path',
            name: 'id',
            required: true,
            schema: { example: 'id', type: 'string' },
          },
          example: 'id',
        }),
    }),
  },
  responses: { 200: { description: 'OK' } },
})

export const putApiLogisticsPvtShippingPoliciesIdRoute = createRoute({
  method: 'put',
  path: '/api/logistics/pvt/shipping-policies/{id}',
  tags: ['Shipping Policies'],
  summary: 'Update shipping policy',
  description:
    'This endpoint updates information on existing Shipping Policies from carriers.\n\r\n\r> Note that, while most of our API endpoints return time fields in UTC, this endpoint returns **Scheduled Delivery** related time fields adjusted to the configured time zone of the account.',
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
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: "Shipping policy's ID",
            in: 'path',
            name: 'id',
            required: true,
            schema: { example: 'shippingpolicyid1', type: 'string' },
          },
          example: 'shippingpolicyid1',
        }),
    }),
    body: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .object({
              deliveryOnWeekends: z
                .boolean()
                .openapi({
                  description: 'If the shipping policy (carrier) delivers on weekends',
                  example: false,
                  title: 'deliveryOnWeekends',
                }),
              deliveryScheduleSettings: z
                .object({
                  dayOfWeekForDelivery: z
                    .array(
                      z
                        .object({
                          dayOfWeek: z
                            .int()
                            .openapi({
                              description: 'Day of the week, from `0` (sunday) to `6` (saturday).',
                              example: 2,
                            }),
                          deliveryRanges: z
                            .array(
                              z
                                .object({
                                  deliveryCapacity: z
                                    .array(
                                      z
                                        .object({
                                          capacityType: z
                                            .string()
                                            .openapi({
                                              description:
                                                'Defines how the delivery capacity is measured for this reservation window, by maximum number of orders (`"ORDERS_QUANTITY"`) or SKUs (`"SKUS_QUANTITY"`).',
                                              example: 'ORDERS_QUANTITY',
                                            }),
                                          maxValue: z
                                            .number()
                                            .openapi({
                                              description:
                                                'Maximum number of orders or SKUs that the store is capable of fulfilling.',
                                              example: 0,
                                            }),
                                        })
                                        .openapi({
                                          example: {
                                            capacityType: 'ORDERS_QUANTITY',
                                            maxValue: 55,
                                          },
                                          required: ['capacityType', 'maxValue'],
                                        }),
                                    )
                                    .exactOptional()
                                    .openapi({
                                      description:
                                        'Sets maximum delivery capacity for a given reservation window for scheduled delivery.',
                                    }),
                                  endTime: z
                                    .string()
                                    .openapi({
                                      description: 'End time for day of the week.',
                                      example: '12:30:00',
                                    }),
                                  listPrice: z
                                    .number()
                                    .openapi({
                                      description: 'List price for day of the week.',
                                      example: 0,
                                    }),
                                  startTime: z
                                    .string()
                                    .openapi({
                                      description: 'Start time for day of the week.',
                                      example: '11:00:00',
                                      title: 'startTime',
                                    }),
                                })
                                .openapi({ required: ['startTime', 'endTime', 'listPrice'] }),
                            )
                            .openapi({
                              description: 'Reservation windows for scheduled delivery.',
                            }),
                        })
                        .openapi({ required: ['dayOfWeek', 'deliveryRanges'] }),
                    )
                    .openapi({
                      description:
                        'Select the chosen days for delivery. Values for each day of the week are: 0 = sunday, 1 = monday, 2 = tuesday, 3 = wednesday, 4 = thursday, 5 = friday, 6 = saturday. Make sure to add the available hours for the chosen days, following the example.',
                    }),
                  maxRangeDelivery: z
                    .number()
                    .openapi({
                      description:
                        "Range of days available within a delivery window, for the customer to choose the scheduled delivery. For example, if the configured maxRangeDelivery is equal 7, and the customer buys something on a Tuesday, the options for scheduled delivery will be shown until the following Tuesday (7 days from the purchase day). If no options are available within the maxRangeDelivery set, this shipping policy won't be shown on the checkout.",
                      example: 0,
                    }),
                  useDeliverySchedule: z
                    .boolean()
                    .openapi({
                      description: 'Select the Scheduled Delivery configuration.',
                      example: true,
                    }),
                })
                .exactOptional()
                .openapi({
                  description: 'Settings for the Scheduled Delivery feature.',
                  required: ['useDeliverySchedule', 'dayOfWeekForDelivery', 'maxRangeDelivery'],
                }),
              isActive: z
                .boolean()
                .openapi({
                  description: 'If the shipping policy is active or not.',
                  example: true,
                  title: 'isActive',
                }),
              maxDimension: z
                .object({
                  largestMeasure: z
                    .number()
                    .openapi({
                      description: 'Largest measure of the package.',
                      example: 0,
                      title: 'largestMeasure',
                    }),
                  maxMeasureSum: z
                    .number()
                    .openapi({
                      description: 'Sum of all maximum measures of the package.',
                      example: 0,
                      title: 'maxMeasureSum',
                    }),
                })
                .openapi({
                  description:
                    'Object containing attributes of maximum dimension permitted by the shipping policy (carrier).',
                  example: { largestMeasure: 10, maxMeasureSum: 30 },
                  required: ['largestMeasure', 'maxMeasureSum'],
                  title: 'maxDimension',
                }),
              name: z
                .string()
                .openapi({
                  description: 'Name of the shipping policy',
                  example: 'Correios PAC',
                  title: 'name',
                }),
              shippingMethod: z
                .string()
                .openapi({
                  description:
                    'Type of shipping available for this shipping policy (carrier). Options shown on freight simulation.',
                  example: 'Normal',
                  title: 'shippingMethod',
                }),
            })
            .openapi({
              required: [
                'name',
                'shippingMethod',
                'deliveryOnWeekends',
                'maxDimension',
                'isActive',
              ],
              title: 'Request body',
            }),
        },
      },
    },
  },
  responses: { 200: { description: 'OK' } },
})

export const deleteApiLogisticsPvtShippingPoliciesIdRoute = createRoute({
  method: 'delete',
  path: '/api/logistics/pvt/shipping-policies/{id}',
  tags: ['Shipping Policies'],
  summary: 'Delete shipping policies by ID',
  description:
    'This endpoint deletes existing shipping policies from carriers in your store, searching by their IDs.',
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
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'ID of the shipping policy.',
            in: 'path',
            name: 'id',
            required: true,
            schema: { example: 'id', type: 'string' },
          },
          example: 'id',
        }),
    }),
  },
  responses: { 200: { description: 'OK' } },
})

export const postApiLogisticsPvtShippingCalculateRoute = createRoute({
  method: 'post',
  path: '/api/logistics/pvt/shipping/calculate',
  tags: ['SLA'],
  summary: 'Calculate SLA',
  description:
    "Endpoint used by the checkout to calculate the Service Level Agreement (SLA), a contract between the store and shoppers on the order's fulfillment conditions, such as the shipping estimated date. \r\n\r\nThe calculation of the estimated date considers the [shipping policy](https://help.vtex.com/en/tutorial/shipping-policy--tutorials_140) and [loading dock](https://help.vtex.com/en/tutorial/loading-dock--5DY8xHEjOLYDVL41Urd5qj) related to the order.",
  operationId: 'CalculateSLA',
  request: {
    headers: z.object({
      'Content-Type': z
        .string()
        .default('application/json; charset=utf-8')
        .openapi({
          param: {
            description: 'Type of the content being sent.',
            in: 'header',
            name: 'Content-Type',
            required: true,
            schema: { default: 'application/json; charset=utf-8', type: 'string' },
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
        'application/json; charset=utf-8': {
          schema: z
            .array(
              z
                .object({
                  items: z
                    .array(
                      z
                        .object({
                          additionalHandlingTime: z.string(),
                          dimension: z
                            .object({
                              height: z.int32(),
                              length: z.int32(),
                              weight: z.int32(),
                              width: z.int32(),
                            })
                            .openapi({
                              example: { height: 1, length: 1, weight: 150, width: 1 },
                              required: ['weight', 'height', 'width', 'length'],
                              title: 'Dimension',
                            }),
                          groupItemId: z.string().nullable(),
                          id: z.string(),
                          kitItem: z
                            .array(
                              z
                                .object({
                                  additionalHandlingTime: z.string(),
                                  dimension: z
                                    .object({
                                      height: z.int32(),
                                      length: z.int32(),
                                      weight: z.int32(),
                                      width: z.int32(),
                                    })
                                    .openapi({
                                      example: { height: 1, length: 1, weight: 150, width: 1 },
                                      required: ['weight', 'height', 'width', 'length'],
                                      title: 'Dimension',
                                    }),
                                  groupItemId: z.string().nullable(),
                                  id: z.string(),
                                  kitItem: z.array(z.string()).openapi({ description: '' }),
                                  price: z.int32(),
                                  quantity: z.int32(),
                                })
                                .openapi({
                                  example: {
                                    additionalHandlingTime: '00:00:00',
                                    dimension: { height: 5, length: 17, weight: 150, width: 17 },
                                    groupItemId: null,
                                    id: '2000042',
                                    kitItem: [],
                                    price: 0,
                                    quantity: 1,
                                  },
                                  required: [
                                    'id',
                                    'groupItemId',
                                    'kitItem',
                                    'quantity',
                                    'price',
                                    'additionalHandlingTime',
                                    'dimension',
                                  ],
                                  title: 'KitItem',
                                }),
                            )
                            .openapi({ description: '' }),
                          price: z.int32(),
                          quantity: z.int32(),
                        })
                        .openapi({
                          example: {
                            additionalHandlingTime: '00:00:00',
                            dimension: { height: 5, length: 17, weight: 150, width: 17 },
                            groupItemId: null,
                            id: '1',
                            kitItem: [
                              {
                                additionalHandlingTime: '00:00:00',
                                dimension: { height: 5, length: 17, weight: 150, width: 17 },
                                groupItemId: null,
                                id: '2000042',
                                kitItem: [],
                                price: 0,
                                quantity: 1,
                              },
                              {
                                additionalHandlingTime: '00:00:00',
                                dimension: { height: 5, length: 17, weight: 150, width: 17 },
                                groupItemId: null,
                                id: '2390059',
                                kitItem: [],
                                price: 0,
                                quantity: 1,
                              },
                            ],
                            price: 0,
                            quantity: 1,
                          },
                          required: [
                            'id',
                            'groupItemId',
                            'kitItem',
                            'quantity',
                            'price',
                            'additionalHandlingTime',
                            'dimension',
                          ],
                          title: 'Item3',
                        }),
                    )
                    .openapi({ description: '' }),
                  location: z
                    .object({
                      country: z.string(),
                      point: z.array(z.number()).openapi({ description: '' }),
                      zipCode: z.string(),
                    })
                    .openapi({
                      example: {
                        country: 'BRA',
                        point: [-43.32475950000003, -22.9999575],
                        zipCode: '22780084',
                      },
                      required: ['zipCode', 'country', 'point'],
                      title: 'Location3',
                    }),
                  salesChannel: z.string(),
                })
                .openapi({
                  example: {
                    items: [
                      {
                        additionalHandlingTime: '00:00:00',
                        dimension: { height: 5, length: 17, weight: 150, width: 17 },
                        groupItemId: null,
                        id: '1',
                        kitItem: [
                          {
                            additionalHandlingTime: '00:00:00',
                            dimension: { height: 5, length: 17, weight: 150, width: 17 },
                            groupItemId: null,
                            id: '2000042',
                            kitItem: [],
                            price: 0,
                            quantity: 1,
                          },
                          {
                            additionalHandlingTime: '00:00:00',
                            dimension: { height: 5, length: 17, weight: 150, width: 17 },
                            groupItemId: null,
                            id: '2390059',
                            kitItem: [],
                            price: 0,
                            quantity: 1,
                          },
                        ],
                        price: 0,
                        quantity: 1,
                      },
                    ],
                    location: {
                      country: 'BRA',
                      point: [-43.32475950000003, -22.9999575],
                      zipCode: '22780084',
                    },
                    salesChannel: '1',
                  },
                  required: ['items', 'location', 'salesChannel'],
                  title: 'CalculateSLARequest',
                }),
            )
            .openapi({ description: '' }),
          example: [
            {
              items: [
                {
                  additionalHandlingTime: '00:00:00',
                  dimension: { height: 5, length: 17, weight: 150, width: 17 },
                  groupItemId: null,
                  id: '1',
                  kitItem: [
                    {
                      additionalHandlingTime: '00:00:00',
                      dimension: { height: 5, length: 17, weight: 150, width: 17 },
                      groupItemId: null,
                      id: '2000042',
                      kitItem: [],
                      price: 0,
                      quantity: 1,
                    },
                    {
                      additionalHandlingTime: '00:00:00',
                      dimension: { height: 5, length: 17, weight: 150, width: 17 },
                      groupItemId: null,
                      id: '2390059',
                      kitItem: [],
                      price: 0,
                      quantity: 1,
                    },
                  ],
                  price: 0,
                  quantity: 1,
                },
              ],
              location: {
                country: 'BRA',
                point: [-43.32475950000003, -22.9999575],
                zipCode: '22780084',
              },
              salesChannel: '1',
            },
          ],
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json; charset=utf-8': {
          schema: z.array(
            z.array(
              z
                .object({
                  aditionalTimeBlockedDays: z.string(),
                  availabilityQuantity: z.int32(),
                  carrierSchedule: z.array(z.string()).openapi({ description: '' }),
                  coordinates: z.string().nullable(),
                  deliveryOnWeekends: z.boolean(),
                  deliveryWindows: z
                    .array(
                      z
                        .object({
                          endDateUtc: z.string().exactOptional(),
                          listPrice: z.number().exactOptional(),
                          startDateUtc: z.string().exactOptional(),
                        })
                        .openapi({
                          example: {
                            endDateUtc: '2016-04-20T12:00:00+00:00',
                            listPrice: 10,
                            startDateUtc: '2016-04-20T08:00:00+00:00',
                          },
                          title: 'DeliveryWindow',
                          required: [],
                        }),
                    )
                    .openapi({ description: '' }),
                  dockId: z.string(),
                  dockTime: z.string(),
                  freightTableId: z.string(),
                  freightTableName: z.string(),
                  itemId: z.string(),
                  listPrice: z.number(),
                  location: z
                    .object({
                      country: z.string(),
                      deliveryPointId: z.string().nullable(),
                      inStore: z
                        .object({ IsCheckedIn: z.boolean(), StoreId: z.string() })
                        .openapi({
                          example: { IsCheckedIn: false, StoreId: '180082' },
                          required: ['IsCheckedIn', 'StoreId'],
                          title: 'InStore1',
                        }),
                      point: z.string().nullable(),
                      zipCode: z.string(),
                    })
                    .openapi({
                      example: {
                        country: 'BRA',
                        deliveryPointId: null,
                        inStore: { IsCheckedIn: false, StoreId: '180082' },
                        point: null,
                        zipCode: '22220070',
                      },
                      required: ['zipCode', 'country', 'deliveryPointId', 'point', 'inStore'],
                      title: 'Location1',
                    }),
                  pickupStoreInfo: z.string().nullable(),
                  quantity: z.int32(),
                  restrictedFreight: z.string().nullable(),
                  salesChannel: z.string(),
                  slaType: z.string(),
                  slaTypeName: z.string(),
                  timeToDockPlusDockTime: z.string(),
                  totalTime: z.string(),
                  transitTime: z.string(),
                  wareHouseId: z.string(),
                })
                .openapi({
                  example: {
                    aditionalTimeBlockedDays: '00:00:00',
                    availabilityQuantity: 500,
                    carrierSchedule: [],
                    coordinates: null,
                    deliveryOnWeekends: false,
                    deliveryWindows: [
                      {
                        endDateUtc: '2016-04-20T12:00:00+00:00',
                        listPrice: 10,
                        startDateUtc: '2016-04-20T08:00:00+00:00',
                      },
                      {
                        endDateUtc: '2016-04-20T18:00:00+00:00',
                        listPrice: 10,
                        startDateUtc: '2016-04-20T12:01:00+00:00',
                      },
                      {
                        endDateUtc: '2016-04-21T12:00:00+00:00',
                        listPrice: 10,
                        startDateUtc: '2016-04-21T08:00:00+00:00',
                      },
                      {
                        endDateUtc: '2016-04-21T18:00:00+00:00',
                        listPrice: 10,
                        startDateUtc: '2016-04-21T12:01:00+00:00',
                      },
                      {
                        endDateUtc: '2016-04-22T12:00:00+00:00',
                        listPrice: 10,
                        startDateUtc: '2016-04-22T08:00:00+00:00',
                      },
                      {
                        endDateUtc: '2016-04-22T18:00:00+00:00',
                        listPrice: 10,
                        startDateUtc: '2016-04-22T12:01:00+00:00',
                      },
                      {
                        endDateUtc: '2016-04-23T12:00:00+00:00',
                        listPrice: 10,
                        startDateUtc: '2016-04-23T08:00:00+00:00',
                      },
                      {
                        endDateUtc: '2016-04-23T18:00:00+00:00',
                        listPrice: 10,
                        startDateUtc: '2016-04-23T12:01:00+00:00',
                      },
                      {
                        endDateUtc: '2016-04-24T12:00:00+00:00',
                        listPrice: 10,
                        startDateUtc: '2016-04-24T08:00:00+00:00',
                      },
                      {
                        endDateUtc: '2016-04-24T18:00:00+00:00',
                        listPrice: 10,
                        startDateUtc: '2016-04-24T12:01:00+00:00',
                      },
                      {
                        endDateUtc: '2016-04-25T12:00:00+00:00',
                        listPrice: 10,
                        startDateUtc: '2016-04-25T08:00:00+00:00',
                      },
                      {
                        endDateUtc: '2016-04-25T18:00:00+00:00',
                        listPrice: 10,
                        startDateUtc: '2016-04-25T12:01:00+00:00',
                      },
                      {
                        endDateUtc: '2016-04-26T12:00:00+00:00',
                        listPrice: 10,
                        startDateUtc: '2016-04-26T08:00:00+00:00',
                      },
                      {
                        endDateUtc: '2016-04-26T18:00:00+00:00',
                        listPrice: 10,
                        startDateUtc: '2016-04-26T12:01:00+00:00',
                      },
                    ],
                    dockId: '1_1_1',
                    dockTime: '00:00:00',
                    freightTableId: 'teste1',
                    freightTableName: 'Entrega Agendada',
                    itemId: '2389945',
                    listPrice: 5.25,
                    location: {
                      country: 'BRA',
                      deliveryPointId: null,
                      inStore: { IsCheckedIn: false, StoreId: '180082' },
                      point: null,
                      zipCode: '22220070',
                    },
                    pickupStoreInfo: null,
                    quantity: 1,
                    restrictedFreight: null,
                    salesChannel: '1',
                    slaType: 'Entrega Agendada',
                    slaTypeName: 'Entrega Agendada',
                    timeToDockPlusDockTime: '1.00:00:00',
                    totalTime: '3.00:00:00',
                    transitTime: '2.00:00:00',
                    wareHouseId: '1937054',
                  },
                  required: [
                    'itemId',
                    'quantity',
                    'availabilityQuantity',
                    'salesChannel',
                    'slaType',
                    'slaTypeName',
                    'freightTableName',
                    'freightTableId',
                    'listPrice',
                    'transitTime',
                    'dockTime',
                    'timeToDockPlusDockTime',
                    'aditionalTimeBlockedDays',
                    'totalTime',
                    'deliveryWindows',
                    'wareHouseId',
                    'dockId',
                    'location',
                    'deliveryOnWeekends',
                    'carrierSchedule',
                    'restrictedFreight',
                    'coordinates',
                    'pickupStoreInfo',
                  ],
                }),
            ),
          ),
          example: [
            [
              {
                aditionalTimeBlockedDays: '00:00:00',
                availabilityQuantity: 500,
                carrierSchedule: [],
                coordinates: null,
                deliveryOnWeekends: false,
                deliveryWindows: [
                  {
                    endDateUtc: '2016-04-20T12:00:00+00:00',
                    listPrice: 10,
                    startDateUtc: '2016-04-20T08:00:00+00:00',
                  },
                  {
                    endDateUtc: '2016-04-20T18:00:00+00:00',
                    listPrice: 10,
                    startDateUtc: '2016-04-20T12:01:00+00:00',
                  },
                  {
                    endDateUtc: '2016-04-21T12:00:00+00:00',
                    listPrice: 10,
                    startDateUtc: '2016-04-21T08:00:00+00:00',
                  },
                  {
                    endDateUtc: '2016-04-21T18:00:00+00:00',
                    listPrice: 10,
                    startDateUtc: '2016-04-21T12:01:00+00:00',
                  },
                  {
                    endDateUtc: '2016-04-22T12:00:00+00:00',
                    listPrice: 10,
                    startDateUtc: '2016-04-22T08:00:00+00:00',
                  },
                  {
                    endDateUtc: '2016-04-22T18:00:00+00:00',
                    listPrice: 10,
                    startDateUtc: '2016-04-22T12:01:00+00:00',
                  },
                  {
                    endDateUtc: '2016-04-23T12:00:00+00:00',
                    listPrice: 10,
                    startDateUtc: '2016-04-23T08:00:00+00:00',
                  },
                  {
                    endDateUtc: '2016-04-23T18:00:00+00:00',
                    listPrice: 10,
                    startDateUtc: '2016-04-23T12:01:00+00:00',
                  },
                  {
                    endDateUtc: '2016-04-24T12:00:00+00:00',
                    listPrice: 10,
                    startDateUtc: '2016-04-24T08:00:00+00:00',
                  },
                  {
                    endDateUtc: '2016-04-24T18:00:00+00:00',
                    listPrice: 10,
                    startDateUtc: '2016-04-24T12:01:00+00:00',
                  },
                  {
                    endDateUtc: '2016-04-25T12:00:00+00:00',
                    listPrice: 10,
                    startDateUtc: '2016-04-25T08:00:00+00:00',
                  },
                  {
                    endDateUtc: '2016-04-25T18:00:00+00:00',
                    listPrice: 10,
                    startDateUtc: '2016-04-25T12:01:00+00:00',
                  },
                  {
                    endDateUtc: '2016-04-26T12:00:00+00:00',
                    listPrice: 10,
                    startDateUtc: '2016-04-26T08:00:00+00:00',
                  },
                  {
                    endDateUtc: '2016-04-26T18:00:00+00:00',
                    listPrice: 10,
                    startDateUtc: '2016-04-26T12:01:00+00:00',
                  },
                ],
                dockId: '1_1_1',
                dockTime: '00:00:00',
                freightTableId: 'teste1',
                freightTableName: 'Entrega Agendada',
                itemId: '2389945',
                listPrice: 5.25,
                location: {
                  country: 'BRA',
                  deliveryPointId: null,
                  inStore: { IsCheckedIn: false, StoreId: '180082' },
                  point: null,
                  zipCode: '22220070',
                },
                pickupStoreInfo: null,
                quantity: 1,
                restrictedFreight: null,
                salesChannel: '1',
                slaType: 'Entrega Agendada',
                slaTypeName: 'Entrega Agendada',
                timeToDockPlusDockTime: '1.00:00:00',
                totalTime: '3.00:00:00',
                transitTime: '2.00:00:00',
                wareHouseId: '1937054',
              },
              {
                aditionalTimeBlockedDays: '00:00:00',
                availabilityQuantity: 500,
                carrierSchedule: [],
                coordinates: null,
                deliveryOnWeekends: false,
                deliveryWindows: [
                  {
                    endDateUtc: '2016-04-20T12:00:00+00:00',
                    listPrice: 10,
                    startDateUtc: '2016-04-20T08:00:00+00:00',
                  },
                  {
                    endDateUtc: '2016-04-20T18:00:00+00:00',
                    listPrice: 10,
                    startDateUtc: '2016-04-20T12:01:00+00:00',
                  },
                  {
                    endDateUtc: '2016-04-21T12:00:00+00:00',
                    listPrice: 10,
                    startDateUtc: '2016-04-21T08:00:00+00:00',
                  },
                  {
                    endDateUtc: '2016-04-21T18:00:00+00:00',
                    listPrice: 10,
                    startDateUtc: '2016-04-21T12:01:00+00:00',
                  },
                  {
                    endDateUtc: '2016-04-22T12:00:00+00:00',
                    listPrice: 10,
                    startDateUtc: '2016-04-22T08:00:00+00:00',
                  },
                  {
                    endDateUtc: '2016-04-22T18:00:00+00:00',
                    listPrice: 10,
                    startDateUtc: '2016-04-22T12:01:00+00:00',
                  },
                  {
                    endDateUtc: '2016-04-23T12:00:00+00:00',
                    listPrice: 10,
                    startDateUtc: '2016-04-23T08:00:00+00:00',
                  },
                  {
                    endDateUtc: '2016-04-23T18:00:00+00:00',
                    listPrice: 10,
                    startDateUtc: '2016-04-23T12:01:00+00:00',
                  },
                  {
                    endDateUtc: '2016-04-24T12:00:00+00:00',
                    listPrice: 10,
                    startDateUtc: '2016-04-24T08:00:00+00:00',
                  },
                  {
                    endDateUtc: '2016-04-24T18:00:00+00:00',
                    listPrice: 10,
                    startDateUtc: '2016-04-24T12:01:00+00:00',
                  },
                  {
                    endDateUtc: '2016-04-25T12:00:00+00:00',
                    listPrice: 10,
                    startDateUtc: '2016-04-25T08:00:00+00:00',
                  },
                  {
                    endDateUtc: '2016-04-25T18:00:00+00:00',
                    listPrice: 10,
                    startDateUtc: '2016-04-25T12:01:00+00:00',
                  },
                  {
                    endDateUtc: '2016-04-26T12:00:00+00:00',
                    listPrice: 10,
                    startDateUtc: '2016-04-26T08:00:00+00:00',
                  },
                  {
                    endDateUtc: '2016-04-26T18:00:00+00:00',
                    listPrice: 10,
                    startDateUtc: '2016-04-26T12:01:00+00:00',
                  },
                ],
                dockId: '1_1_1',
                dockTime: '00:00:00',
                freightTableId: 'teste1',
                freightTableName: 'Entrega Agendada',
                itemId: '2390059',
                listPrice: 5.25,
                location: {
                  country: 'BRA',
                  deliveryPointId: null,
                  inStore: { IsCheckedIn: false, StoreId: '180082' },
                  point: null,
                  zipCode: '22220070',
                },
                pickupStoreInfo: null,
                quantity: 1,
                restrictedFreight: null,
                salesChannel: '1',
                slaType: 'Entrega Agendada',
                slaTypeName: 'Entrega Agendada',
                timeToDockPlusDockTime: '1.00:00:00',
                totalTime: '3.00:00:00',
                transitTime: '2.00:00:00',
                wareHouseId: '1937054',
              },
              {
                aditionalTimeBlockedDays: '00:00:00',
                availabilityQuantity: 500,
                carrierSchedule: [],
                coordinates: null,
                deliveryOnWeekends: true,
                deliveryWindows: [],
                dockId: '1_1_1',
                dockTime: '00:00:00',
                freightTableId: '11cc4b6',
                freightTableName: 'Correios PAC',
                itemId: '2389945',
                listPrice: 7.88,
                location: {
                  country: 'BRA',
                  deliveryPointId: null,
                  inStore: { IsCheckedIn: false, StoreId: '180082' },
                  point: null,
                  zipCode: '22220070',
                },
                pickupStoreInfo: null,
                quantity: 1,
                restrictedFreight: null,
                salesChannel: '1',
                slaType: 'Normal',
                slaTypeName: 'Normal',
                timeToDockPlusDockTime: '1.00:00:00',
                totalTime: '3.00:00:00',
                transitTime: '2.00:00:00',
                wareHouseId: '1937054',
              },
              {
                aditionalTimeBlockedDays: '00:00:00',
                availabilityQuantity: 500,
                carrierSchedule: [],
                coordinates: null,
                deliveryOnWeekends: true,
                deliveryWindows: [],
                dockId: '1_1_1',
                dockTime: '00:00:00',
                freightTableId: '11cc4b6',
                freightTableName: 'Correios PAC',
                itemId: '2390059',
                listPrice: 7.88,
                location: {
                  country: 'BRA',
                  deliveryPointId: null,
                  inStore: { IsCheckedIn: false, StoreId: '180082' },
                  point: null,
                  zipCode: '22220070',
                },
                pickupStoreInfo: null,
                quantity: 1,
                restrictedFreight: null,
                salesChannel: '1',
                slaType: 'Normal',
                slaTypeName: 'Normal',
                timeToDockPlusDockTime: '1.00:00:00',
                totalTime: '3.00:00:00',
                transitTime: '2.00:00:00',
                wareHouseId: '1937054',
              },
            ],
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
        'Content-Encoding': z
          .string()
          .exactOptional()
          .openapi({ example: 'gzip', param: { required: false } }),
        'Content-Length': z
          .string()
          .exactOptional()
          .openapi({ example: '632', param: { required: false } }),
        Date: z
          .string()
          .exactOptional()
          .openapi({ example: 'Fri, 15 Apr 2016 20:00:26 GMT', param: { required: false } }),
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
        'X-CacheServer': z
          .string()
          .exactOptional()
          .openapi({ example: 'janus-apicache-nginx1', param: { required: false } }),
        'X-Powered-by-VTEX-Janus-ApiCache': z
          .string()
          .exactOptional()
          .openapi({ example: 'v1.3.8', param: { required: false } }),
        'X-Powered-by-VTEX-Janus-Edge': z
          .string()
          .exactOptional()
          .openapi({ example: 'v1.26.4', param: { required: false } }),
        'X-Powered-by-VTEX-Janus-Router': z
          .string()
          .exactOptional()
          .openapi({ example: '2.1.155', param: { required: false } }),
        'X-Track': z
          .string()
          .exactOptional()
          .openapi({ example: 'stable', param: { required: false } }),
        'X-VTEX-Janus-Router-Backend-App': z
          .string()
          .exactOptional()
          .openapi({ example: 'logist-v6.2.96-stable+863', param: { required: false } }),
        'x-vtex-operation-id': z
          .string()
          .exactOptional()
          .openapi({ example: '0c124229-3bb5-4fc2-9d4e-94b9cbe4281f', param: { required: false } }),
      }),
    },
  },
})
