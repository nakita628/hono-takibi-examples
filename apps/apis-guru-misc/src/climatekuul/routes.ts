import { createRoute, z } from '@hono/zod-openapi'

const Leg1Schema = z
  .object({
    destination_airport_code: z.string(),
    origin_airport_code: z.string(),
    travel_class: z.string(),
  })
  .openapi({
    example: {
      destination_airport_code: 'DXB',
      origin_airport_code: 'KHI',
      travel_class: 'Economy',
    },
    required: ['origin_airport_code', 'destination_airport_code', 'travel_class'],
    title: 'Leg1',
  })
  .openapi('Leg1')

const AirtravelMultilegRequestSchema = z
  .object({
    apiKey_l1: z.string(),
    apiKey_l2: z.string(),
    contactEmail: z.string(),
    contactFirstName: z.string(),
    contactLastName: z.string(),
    leg1: Leg1Schema,
    leg2: Leg1Schema,
    leg3: Leg1Schema,
    legs_count: z.string(),
    number_of_passengers: z.string(),
    travel_mode: z.string(),
  })
  .openapi({
    example: {
      apiKey_l1: 'qNahlSrEaduQ',
      apiKey_l2: 'eCqMeAfaDBWG',
      contactEmail: 'example@example.com',
      contactFirstName: 'abc',
      contactLastName: 'xyz',
      leg1: {
        destination_airport_code: 'DXB',
        origin_airport_code: 'KHI',
        travel_class: 'Economy',
      },
      leg2: {
        destination_airport_code: 'LHR',
        origin_airport_code: 'DXB',
        travel_class: 'Business',
      },
      leg3: {
        destination_airport_code: 'KHI',
        origin_airport_code: 'FRA',
        travel_class: 'Premium Economy',
      },
      legs_count: '2',
      number_of_passengers: '2',
      travel_mode: 'multileg',
    },
    required: [
      'travel_mode',
      'legs_count',
      'leg1',
      'leg2',
      'leg3',
      'number_of_passengers',
      'apiKey_l1',
      'apiKey_l2',
      'contactFirstName',
      'contactLastName',
      'contactEmail',
    ],
    title: 'airtravelMultilegRequest',
  })
  .openapi('AirtravelMultilegRequest')

export const postAirtravelCoordinatesRoute = createRoute({
  method: 'post',
  path: '/airtravelCoordinates',
  tags: ['AirtravelCoordinates'],
  summary: 'airtravelCoordinates',
  operationId: 'airtravelCoordinates',
  request: {
    headers: z.object({
      'Content-Type': z
        .string()
        .openapi({
          param: {
            description: '',
            in: 'header',
            name: 'Content-Type',
            required: true,
            schema: { example: 'application/x-www-form-urlencoded', type: 'string' },
            style: 'simple',
          },
          example: 'application/x-www-form-urlencoded',
        }),
    }),
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              apiKey_l1: z
                .string()
                .openapi({
                  description: 'Client Api Key',
                  example: 'd95fead6-e8a6-4547-9fb9-7835101a3960',
                }),
              apiKey_l2: z
                .string()
                .openapi({
                  description: 'Integration Partner Api Key',
                  example: 'c60f8db5-7204-4427-960d-27400c38b166',
                }),
              destination_airport_latitude: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.float64(),
                )
                .openapi({
                  description: 'Destination latitude (like:  50.870752, value = -90<=x<=90)',
                  example: 24.9056,
                }),
              destination_airport_longitude: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.float64(),
                )
                .openapi({
                  description: 'Destination longitude (like:  4.669490, value = -180<=x<=180)',
                  example: 67.1569,
                }),
              number_of_passengers: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .openapi({ description: 'Number of passengers (like: 1, 2 ,3 )', example: 2 }),
              origin_airport_latitude: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.float64(),
                )
                .openapi({
                  description: 'Origin latitude (like: 23.372628 value = -90<=x<=90 )',
                  example: 31.5208,
                }),
              origin_airport_longitude: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.float64(),
                )
                .openapi({
                  description: 'Origin longitude (like: 113.159339, value = -180<=x<=180 )',
                  example: 74.4028,
                }),
              travel_class: z
                .string()
                .openapi({
                  description:
                    "Travel class can be 'First Class', 'Economy', 'Business' or 'Premium Economy'",
                  example: 'Economy',
                }),
              travel_mode: z
                .string()
                .openapi({
                  description: "Travel mode can be 'one way' or 'round trip'",
                  example: 'round trip',
                }),
            })
            .openapi({
              required: [
                'number_of_passengers',
                'travel_class',
                'travel_mode',
                'origin_airport_latitude',
                'origin_airport_longitude',
                'destination_airport_latitude',
                'destination_airport_longitude',
                'apiKey_l1',
                'apiKey_l2',
              ],
            }),
        },
      },
    },
  },
  responses: { 200: { description: '', headers: z.object({}) } },
  servers: [{ url: 'http://api.climatekuul.com:8000/footprint', variables: {} }],
})

export const patchAirtravelCoordinatesConfirmCarbonOffsetRoute = createRoute({
  method: 'patch',
  path: '/airtravelCoordinates/confirmCarbonOffset',
  tags: ['AirtravelCoordinates'],
  summary: 'confirmCarbonOffset',
  operationId: 'confirmCarbonOffset4',
  request: {
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              carbonOffset: z
                .string()
                .openapi({ description: 'Confirm Carbon Offset (Value = y/n)', example: 'y' }),
              contactEmail: z
                .string()
                .exactOptional()
                .openapi({ description: 'Contact email', example: 'example@example.com' }),
              contactFirstName: z
                .string()
                .exactOptional()
                .openapi({ description: 'Contact first name', example: 'abc' }),
              contactLastName: z
                .string()
                .exactOptional()
                .openapi({ description: 'Contact last name', example: 'xyz' }),
              transaction_id: z
                .string()
                .openapi({ description: 'transaction_id', example: '60a78ed201d88997746c91b5' }),
            })
            .openapi({ required: ['transaction_id', 'carbonOffset'] }),
        },
      },
    },
  },
  responses: { 200: { description: '', headers: z.object({}) } },
  servers: [{ url: 'http://api.climatekuul.com:8000/footprint', variables: {} }],
})

export const patchAirtravelCoordinatesConfirmPaymentRoute = createRoute({
  method: 'patch',
  path: '/airtravelCoordinates/confirmPayment',
  tags: ['AirtravelCoordinates'],
  summary: 'confirmPayment',
  operationId: 'confirmPayment4',
  request: {
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              apiKey_l1: z
                .string()
                .openapi({
                  description: 'apikey_l1 (Like: d95fead6-e8a6-4247-9fb9-7835101a4560)',
                  example: 'd95fead6-e8a6-4247-9fb9-7835101a4560',
                }),
              apiKey_l2: z
                .string()
                .openapi({
                  description: 'apikey_l2 (Like: c60f8db5-7904-4227-960d-27400c38b166)',
                  example: 'c60f8db5-7904-4227-960d-27400c38b166',
                }),
              confirmPayment: z
                .string()
                .openapi({ description: 'Confirm Payment (Value = y/n)', example: 'y' }),
              paymentID: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .openapi({ description: 'Payment Id', example: 34567878 }),
              transaction_id: z
                .string()
                .openapi({ description: 'transaction_id', example: '60a78ed201d88997746c91b5' }),
            })
            .openapi({
              required: ['transaction_id', 'confirmPayment', 'paymentID', 'apiKey_l1', 'apiKey_l2'],
            }),
        },
      },
    },
  },
  responses: { 200: { description: '', headers: z.object({}) } },
  servers: [{ url: 'http://api.climatekuul.com:8000/footprint', variables: {} }],
})

export const patchAirtravelCoordinatesConfirmPlantingRoute = createRoute({
  method: 'patch',
  path: '/airtravelCoordinates/confirmPlanting',
  tags: ['AirtravelCoordinates'],
  summary: 'confirmPlanting',
  operationId: 'confirmsPlanting4',
  request: {
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              apiKey_l1: z
                .string()
                .openapi({
                  description: 'apikey_l1 (Like: d95fead6-e8a6-4247-9fb9-7835101a4560)',
                  example: 'd95fead6-e8a6-4247-9fb9-7835101a4560',
                }),
              apiKey_l2: z
                .string()
                .openapi({
                  description: 'apikey_l2 (Like: c60f8db5-7904-4227-960d-27400c38b166)',
                  example: 'c60f8db5-7904-4227-960d-27400c38b166',
                }),
              confirmPlanting: z
                .string()
                .openapi({ description: 'Confirm Planting (Value = y/n)', example: 'y' }),
              transaction_id: z
                .string()
                .openapi({ description: 'transaction_id', example: '60a78ed201d88997746c91b5' }),
            })
            .openapi({ required: ['transaction_id', 'confirmPlanting', 'apiKey_l1', 'apiKey_l2'] }),
        },
      },
    },
  },
  responses: { 200: { description: '', headers: z.object({}) } },
  servers: [{ url: 'http://api.climatekuul.com:8000/footprint', variables: {} }],
})

export const patchAirtravelCoordinatesConfirmTransactionRoute = createRoute({
  method: 'patch',
  path: '/airtravelCoordinates/confirmTransaction',
  tags: ['AirtravelCoordinates'],
  summary: 'confirmTransaction',
  operationId: 'confirmPaymentOfTransaction4',
  request: {
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              confirmTransaction: z
                .string()
                .openapi({
                  description: 'Confirm Payment Of Transaction (Value = y/n)',
                  example: 'y',
                }),
              transaction_id: z
                .string()
                .openapi({ description: 'transaction_id', example: '60a78ed201d88997746c91b5' }),
            })
            .openapi({ required: ['transaction_id', 'confirmTransaction'] }),
        },
      },
    },
  },
  responses: { 200: { description: '', headers: z.object({}) } },
  servers: [{ url: 'http://api.climatekuul.com:8000/footprint', variables: {} }],
})

export const postAirtravelMultilegRoute = createRoute({
  method: 'post',
  path: '/airtravelMultileg',
  tags: ['airtravelMultileg'],
  summary: 'airtravelMultileg',
  operationId: 'airtravelMultileg',
  request: {
    body: {
      description: '',
      content: {
        'application/json': {
          schema: AirtravelMultilegRequestSchema,
          example: {
            apiKey_l1: 'd95fead6-e8a6-4547-9fb9-7835101a3960',
            apiKey_l2: 'c60f8db5-7204-4427-960d-27400c38b166',
            leg1: {
              destination_airport_code: 'DXB',
              origin_airport_code: 'KHI',
              travel_class: 'Economy',
            },
            leg2: {
              destination_airport_code: 'LHR',
              origin_airport_code: 'DXB',
              travel_class: 'Business',
            },
            leg3: {
              destination_airport_code: 'KHI',
              origin_airport_code: 'FRA',
              travel_class: 'Premium Economy',
            },
            legs_count: '2',
            number_of_passengers: '2',
            travel_mode: 'multileg',
          },
        },
      },
      required: true,
    },
  },
  responses: { 200: { description: '', headers: z.object({}) } },
  servers: [{ url: 'http://api.climatekuul.com:8000/footprint', variables: {} }],
})

export const patchAirtravelMultilegConfirmCarbonOffsetRoute = createRoute({
  method: 'patch',
  path: '/airtravelMultileg/confirmCarbonOffset',
  tags: ['airtravelMultileg'],
  summary: 'confirmCarbonOffset',
  operationId: 'confirmCarbonOffset3',
  request: {
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              carbonOffset: z
                .string()
                .openapi({ description: 'Confirm Carbon Offset (Value = y/n)', example: 'y' }),
              contactEmail: z
                .string()
                .exactOptional()
                .openapi({ description: 'Contact email', example: 'example@example.com' }),
              contactFirstName: z
                .string()
                .exactOptional()
                .openapi({ description: 'Contact first name', example: 'abc' }),
              contactLastName: z
                .string()
                .exactOptional()
                .openapi({ description: 'Contact last name', example: 'xyz' }),
              transaction_id: z
                .string()
                .openapi({ description: 'transaction_id', example: '60a75c0e94c8cb95a6d0e02e' }),
            })
            .openapi({ required: ['transaction_id', 'carbonOffset'] }),
        },
      },
    },
  },
  responses: { 200: { description: '', headers: z.object({}) } },
  servers: [{ url: 'http://api.climatekuul.com:8000/footprint', variables: {} }],
})

export const patchAirtravelMultilegConfirmPaymentRoute = createRoute({
  method: 'patch',
  path: '/airtravelMultileg/confirmPayment',
  tags: ['airtravelMultileg'],
  summary: 'confirmPayment',
  operationId: 'confirmPayment3',
  request: {
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              apiKey_l1: z
                .string()
                .openapi({
                  description: 'apikey_l1 (Like: d95fead6-e8a6-4247-9fb9-7835101a4560)',
                  example: 'd95fead6-e8a6-4247-9fb9-7835101a4560',
                }),
              apiKey_l2: z
                .string()
                .openapi({
                  description: 'apikey_l2 (Like: c60f8db5-7904-4227-960d-27400c38b166)',
                  example: 'c60f8db5-7904-4227-960d-27400c38b166',
                }),
              confirmPayment: z
                .string()
                .openapi({ description: 'Confirm Payment (Value = y/n)', example: 'y' }),
              paymentID: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .openapi({ description: 'Payment Id', example: 34567878 }),
              transaction_id: z
                .string()
                .openapi({ description: 'transaction_id', example: '60a75c0e94c8cb95a6d0e02e' }),
            })
            .openapi({
              required: ['transaction_id', 'confirmPayment', 'paymentID', 'apiKey_l1', 'apiKey_l2'],
            }),
        },
      },
    },
  },
  responses: { 200: { description: '', headers: z.object({}) } },
  servers: [{ url: 'http://api.climatekuul.com:8000/footprint', variables: {} }],
})

export const patchAirtravelMultilegConfirmPlantingRoute = createRoute({
  method: 'patch',
  path: '/airtravelMultileg/confirmPlanting',
  tags: ['airtravelMultileg'],
  summary: 'confirmPlanting',
  operationId: 'confirmsPlanting3',
  request: {
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              apiKey_l1: z
                .string()
                .openapi({
                  description: 'apikey_l1 (Like: d95fead6-e8a6-4247-9fb9-7835101a4560)',
                  example: 'd95fead6-e8a6-4247-9fb9-7835101a4560',
                }),
              apiKey_l2: z
                .string()
                .openapi({
                  description: 'apikey_l2 (Like: c60f8db5-7904-4227-960d-27400c38b166)',
                  example: 'c60f8db5-7904-4227-960d-27400c38b166',
                }),
              confirmPlanting: z
                .string()
                .openapi({ description: 'Confirm Planting (Value = y/n)', example: 'y' }),
              transaction_id: z
                .string()
                .openapi({ description: 'transaction_id', example: '60a75c0e94c8cb95a6d0e02e' }),
            })
            .openapi({ required: ['transaction_id', 'confirmPlanting', 'apiKey_l1', 'apiKey_l2'] }),
        },
      },
    },
  },
  responses: { 200: { description: '', headers: z.object({}) } },
  servers: [{ url: 'http://api.climatekuul.com:8000/footprint', variables: {} }],
})

export const patchAirtravelMultilegConfirmTransactionRoute = createRoute({
  method: 'patch',
  path: '/airtravelMultileg/confirmTransaction',
  tags: ['airtravelMultileg'],
  summary: 'confirmTransaction',
  operationId: 'confirmPaymentOfTransaction3',
  request: {
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              confirmTransaction: z
                .string()
                .openapi({
                  description: 'Confirm Payment Of Transaction (Value = y/n)',
                  example: 'y',
                }),
              transaction_id: z
                .string()
                .openapi({ description: 'transaction_id', example: '60a75c0e94c8cb95a6d0e02e' }),
            })
            .openapi({ required: ['transaction_id', 'confirmTransaction'] }),
        },
      },
    },
  },
  responses: { 200: { description: '', headers: z.object({}) } },
  servers: [{ url: 'http://api.climatekuul.com:8000/footprint', variables: {} }],
})

export const postEcommerceDeliveryRoute = createRoute({
  method: 'post',
  path: '/ecommerceDelivery',
  tags: ['EcommerceDelivery'],
  summary: 'ecommerceDelivery',
  operationId: 'ecommerceDelivery',
  request: {
    headers: z.object({
      'Content-Type': z
        .string()
        .openapi({
          param: {
            description: '',
            in: 'header',
            name: 'Content-Type',
            required: true,
            schema: { example: 'application/x-www-form-urlencoded', type: 'string' },
            style: 'simple',
          },
          example: 'application/x-www-form-urlencoded',
        }),
    }),
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              apiKey_l1: z
                .string()
                .openapi({
                  description: 'Client Api Key',
                  example: 'd95fead6-e8a6-4547-9fb9-7835101a3960',
                }),
              apiKey_l2: z
                .string()
                .openapi({
                  description: 'Integration Partner Api Key',
                  example: 'c60f8db5-7204-4427-960d-27400c38b166',
                }),
              destination_airport_code: z
                .string()
                .exactOptional()
                .openapi({ description: 'valid airport code of destination', example: 'BRU' }),
              destination_latitude: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.float64(),
                )
                .openapi({ description: 'valid latitude of destination', example: 50.870752 }),
              destination_longitude: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.float64(),
                )
                .openapi({ description: 'valid longitude of destination', example: 4.66949 }),
              origin_airport_code: z
                .string()
                .exactOptional()
                .openapi({ description: 'valid airport code of origin', example: 'KHI' }),
              origin_latitude: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.float64(),
                )
                .openapi({ description: 'valid latitude of origin', example: 23.372628 }),
              origin_longitude: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.float64(),
                )
                .openapi({ description: 'valid longitude of origin', example: 113.159339 }),
              volumetric_weight: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.float64(),
                )
                .openapi({ description: "Volumetric weight' (like:2.70)", example: 2.7 }),
              waybill_type: z
                .string()
                .openapi({
                  description: "this can be 'air only', 'road only' or 'air and road'",
                  example: 'road only',
                }),
            })
            .openapi({
              required: [
                'waybill_type',
                'origin_latitude',
                'origin_longitude',
                'destination_latitude',
                'destination_longitude',
                'volumetric_weight',
                'apiKey_l1',
                'apiKey_l2',
              ],
            }),
        },
      },
    },
  },
  responses: { 200: { description: '', headers: z.object({}) } },
  servers: [{ url: 'http://api.climatekuul.com:8000/footprint', variables: {} }],
})

export const patchEcommerceDeliveryConfirmCarbonOffsetRoute = createRoute({
  method: 'patch',
  path: '/ecommerceDelivery/confirmCarbonOffset',
  tags: ['EcommerceDelivery'],
  summary: 'confirmCarbonOffset',
  operationId: 'confirmCarbonOffset1',
  request: {
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              carbonOffset: z
                .string()
                .openapi({ description: 'Confirm Carbon Offset (Value = y/n)', example: 'y' }),
              contactEmail: z
                .string()
                .exactOptional()
                .openapi({ description: 'Contact email', example: 'example@example.com' }),
              contactFirstName: z
                .string()
                .exactOptional()
                .openapi({ description: 'Contact first name', example: 'abc' }),
              contactLastName: z
                .string()
                .exactOptional()
                .openapi({ description: 'Contact last name', example: 'xyz' }),
              transaction_id: z
                .string()
                .openapi({ description: 'transaction_id', example: '60a766d401d88997746c91a0' }),
            })
            .openapi({ required: ['transaction_id', 'carbonOffset'] }),
        },
      },
    },
  },
  responses: { 200: { description: '', headers: z.object({}) } },
  servers: [{ url: 'http://api.climatekuul.com:8000/footprint', variables: {} }],
})

export const patchEcommerceDeliveryConfirmPaymentRoute = createRoute({
  method: 'patch',
  path: '/ecommerceDelivery/confirmPayment',
  tags: ['EcommerceDelivery'],
  summary: 'confirmPayment',
  operationId: 'confirmPayment1',
  request: {
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              apiKey_l1: z
                .string()
                .openapi({
                  description: 'apikey_l1 (Like: d95fead6-e8a6-4247-9fb9-7835101a4560)',
                  example: 'd95fead6-e8a6-4247-9fb9-7835101a4560',
                }),
              apiKey_l2: z
                .string()
                .openapi({
                  description: 'apikey_l2 (Like: c60f8db5-7904-4227-960d-27400c38b166)',
                  example: 'c60f8db5-7904-4227-960d-27400c38b166',
                }),
              confirmPayment: z
                .string()
                .openapi({ description: 'Confirm Payment (Value = y/n)', example: 'y' }),
              paymentID: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .openapi({ description: 'Payment Id', example: 34567878 }),
              transaction_id: z
                .string()
                .openapi({ description: 'transaction_id', example: '60a766d401d88997746c91a0' }),
            })
            .openapi({
              required: ['transaction_id', 'confirmPayment', 'paymentID', 'apiKey_l1', 'apiKey_l2'],
            }),
        },
      },
    },
  },
  responses: { 200: { description: '', headers: z.object({}) } },
  servers: [{ url: 'http://api.climatekuul.com:8000/footprint', variables: {} }],
})

export const patchEcommerceDeliveryConfirmPlantingRoute = createRoute({
  method: 'patch',
  path: '/ecommerceDelivery/confirmPlanting',
  tags: ['EcommerceDelivery'],
  summary: 'confirmPlanting',
  operationId: 'confirmsPlanting2',
  request: {
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              apiKey_l1: z
                .string()
                .openapi({
                  description: 'apikey_l1 (Like: d95fead6-e8a6-4247-9fb9-7835101a4560)',
                  example: 'd95fead6-e8a6-4247-9fb9-7835101a4560',
                }),
              apiKey_l2: z
                .string()
                .openapi({
                  description: 'apikey_l2 (Like: c60f8db5-7904-4227-960d-27400c38b166)',
                  example: 'c60f8db5-7904-4227-960d-27400c38b166',
                }),
              confirmPlanting: z
                .string()
                .openapi({ description: 'Confirm Planting (Value = y/n)', example: 'y' }),
              transaction_id: z
                .string()
                .openapi({ description: 'transaction_id', example: '60a766d401d88997746c91a0' }),
            })
            .openapi({ required: ['transaction_id', 'confirmPlanting', 'apiKey_l1', 'apiKey_l2'] }),
        },
      },
    },
  },
  responses: { 200: { description: '', headers: z.object({}) } },
  servers: [{ url: 'http://api.climatekuul.com:8000/footprint', variables: {} }],
})

export const patchEcommerceDeliveryConfirmTransactionRoute = createRoute({
  method: 'patch',
  path: '/ecommerceDelivery/confirmTransaction',
  tags: ['EcommerceDelivery'],
  summary: 'confirmTransaction',
  operationId: 'confirmPaymentOfTransaction1',
  request: {
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              confirmTransaction: z
                .string()
                .openapi({
                  description: 'Confirm Payment Of Transaction (Value = y/n)',
                  example: 'y',
                }),
              transaction_id: z
                .string()
                .openapi({ description: 'transaction_id', example: '60a766d401d88997746c91a0' }),
            })
            .openapi({ required: ['transaction_id', 'confirmTransaction'] }),
        },
      },
    },
  },
  responses: { 200: { description: '', headers: z.object({}) } },
  servers: [{ url: 'http://api.climatekuul.com:8000/footprint', variables: {} }],
})

export const postRequestApiKeyRoute = createRoute({
  method: 'post',
  path: '/requestApiKey',
  tags: ['Request Api Key'],
  summary: 'requestApiKey',
  operationId: 'requestApiKey',
  request: {
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              apiKey_l1: z
                .string()
                .openapi({ description: 'Api Key for client', example: 'qNahlSrEaduQ' }),
              apiKey_l2: z
                .string()
                .openapi({ description: 'Integration Partner Api Key', example: 'eCqMeAfaDBWG' }),
              email: z.string().openapi({ description: 'User email', example: 'abcd@gmail.com' }),
              password: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .openapi({ description: 'User password', example: 234 }),
              userFirstName: z
                .string()
                .openapi({ description: 'User first name', example: 'usman' }),
              userLastName: z.string().openapi({ description: 'User last name', example: 'ch' }),
            })
            .openapi({
              required: [
                'userFirstName',
                'userLastName',
                'email',
                'password',
                'apiKey_l1',
                'apiKey_l2',
              ],
            }),
        },
      },
    },
  },
  responses: { 200: { description: '', headers: z.object({}) } },
  servers: [{ url: 'http://api.climatekuul.com:8000/footprint', variables: {} }],
})

export const postRoadDistanceRoute = createRoute({
  method: 'post',
  path: '/roadDistance',
  tags: ['RoadDistance'],
  summary: 'RoadDistance',
  operationId: 'roadDistance',
  request: {
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              apiKey_l1: z
                .string()
                .openapi({
                  description: 'Client Api Key',
                  example: 'd95fead6-e8a6-4547-9fb9-7835101a3960',
                }),
              apiKey_l2: z
                .string()
                .openapi({
                  description: 'Integration Partner Api Key',
                  example: 'c60f8db5-7204-4427-960d-27400c38b166',
                }),
              travel_distance: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .openapi({ example: 2450 }),
              trip_end: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .openapi({
                  description: 'timestamp in epoch time (like: 1606780799)',
                  example: 18,
                }),
              trip_start: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .openapi({
                  description: 'timestamp in epoch time (like: 1604188800)',
                  example: 16,
                }),
              vehicle_make: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    "vehicle make (like: Honda, Toyota, Smart), Required only when vehicle_type is 'personal car' ",
                  example: 'Honda',
                }),
              vehicle_type: z
                .string()
                .openapi({
                  description:
                    "Vehicle type can be 'personal car', 'light truck' or 'heavy-duty truck'",
                  example: 'personal car',
                }),
              vehicle_year: z
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
                  description:
                    "vehicle year (like: 2010, 2015, 2019), Required only when vehicle_type is 'personal car' ",
                  example: 2010,
                }),
            })
            .openapi({
              required: [
                'travel_distance',
                'vehicle_type',
                'trip_start',
                'trip_end',
                'apiKey_l1',
                'apiKey_l2',
              ],
            }),
        },
      },
    },
  },
  responses: { 200: { description: '', headers: z.object({}) } },
  servers: [{ url: 'http://api.climatekuul.com:8000/footprint', variables: {} }],
})

export const patchRoadDistanceConfirmCarbonOffsetRoute = createRoute({
  method: 'patch',
  path: '/roadDistance/confirmCarbonOffset',
  tags: ['RoadDistance'],
  summary: 'confirmCarbonOffset',
  operationId: 'confirmCarbonOffset5',
  request: {
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              carbonOffset: z
                .string()
                .openapi({ description: 'Confirm Carbon Offset (Value = y/n)', example: 'y' }),
              contactEmail: z
                .string()
                .exactOptional()
                .openapi({ description: 'Contact email', example: 'example@example.com' }),
              contactFirstName: z
                .string()
                .exactOptional()
                .openapi({ description: 'Contact first name', example: 'abc' }),
              contactLastName: z
                .string()
                .exactOptional()
                .openapi({ description: 'Contact last name', example: 'xyz' }),
              transaction_id: z
                .string()
                .openapi({ description: 'transaction_id', example: '60a7823401d88997746c91a7' }),
            })
            .openapi({ required: ['transaction_id', 'carbonOffset'] }),
        },
      },
    },
  },
  responses: { 200: { description: '', headers: z.object({}) } },
  servers: [{ url: 'http://api.climatekuul.com:8000/footprint', variables: {} }],
})

export const patchRoadDistanceConfirmPaymentRoute = createRoute({
  method: 'patch',
  path: '/roadDistance/confirmPayment',
  tags: ['RoadDistance'],
  summary: 'confirmPayment',
  operationId: 'confirmPayment5',
  request: {
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              apiKey_l1: z
                .string()
                .openapi({
                  description: 'apikey_l1 (Like: d95fead6-e8a6-4247-9fb9-7835101a4560)',
                  example: 'd95fead6-e8a6-4247-9fb9-7835101a4560',
                }),
              apiKey_l2: z
                .string()
                .openapi({
                  description: 'apikey_l2 (Like: c60f8db5-7904-4227-960d-27400c38b166)',
                  example: 'c60f8db5-7904-4227-960d-27400c38b166',
                }),
              confirmPayment: z
                .string()
                .openapi({ description: 'Confirm Payment (Value = y/n)', example: 'y' }),
              paymentID: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .openapi({ description: 'Payment Id', example: 34567878 }),
              transaction_id: z
                .string()
                .openapi({ description: 'transaction_id', example: '60a7823401d88997746c91a7' }),
            })
            .openapi({
              required: ['transaction_id', 'confirmPayment', 'paymentID', 'apiKey_l1', 'apiKey_l2'],
            }),
        },
      },
    },
  },
  responses: { 200: { description: '', headers: z.object({}) } },
  servers: [{ url: 'http://api.climatekuul.com:8000/footprint', variables: {} }],
})

export const patchRoadDistanceConfirmPlantingRoute = createRoute({
  method: 'patch',
  path: '/roadDistance/confirmPlanting',
  tags: ['RoadDistance'],
  summary: 'confirmPlanting',
  operationId: 'confirmsPlanting5',
  request: {
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              apiKey_l1: z
                .string()
                .openapi({
                  description: 'apikey_l1 (Like: d95fead6-e8a6-4247-9fb9-7835101a4560)',
                  example: 'd95fead6-e8a6-4247-9fb9-7835101a4560',
                }),
              apiKey_l2: z
                .string()
                .openapi({
                  description: 'apikey_l2 (Like: c60f8db5-7904-4227-960d-27400c38b166)',
                  example: 'c60f8db5-7904-4227-960d-27400c38b166',
                }),
              confirmPlanting: z
                .string()
                .openapi({ description: 'Confirm Planting (Value = y/n)', example: 'y' }),
              transaction_id: z
                .string()
                .openapi({ description: 'transaction_id', example: '60a7823401d88997746c91a7' }),
            })
            .openapi({ required: ['transaction_id', 'confirmPlanting', 'apiKey_l1', 'apiKey_l2'] }),
        },
      },
    },
  },
  responses: { 200: { description: '', headers: z.object({}) } },
  servers: [{ url: 'http://api.climatekuul.com:8000/footprint', variables: {} }],
})

export const patchRoadDistanceConfirmTransactionRoute = createRoute({
  method: 'patch',
  path: '/roadDistance/confirmTransaction',
  tags: ['RoadDistance'],
  summary: 'confirmTransaction',
  operationId: 'confirmPaymentOfTransaction5',
  request: {
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              confirmTransaction: z
                .string()
                .openapi({
                  description: 'Confirm Payment Of Transaction (Value = y/n)',
                  example: 'y',
                }),
              transaction_id: z
                .string()
                .openapi({ description: 'transaction_id', example: '60a7823401d88997746c91a7' }),
            })
            .openapi({ required: ['transaction_id', 'confirmTransaction'] }),
        },
      },
    },
  },
  responses: { 200: { description: '', headers: z.object({}) } },
  servers: [{ url: 'http://api.climatekuul.com:8000/footprint', variables: {} }],
})

export const postUrbanDeliveryRoute = createRoute({
  method: 'post',
  path: '/urbanDelivery',
  tags: ['UrbanDelivery'],
  summary: 'urbanDelivery',
  operationId: 'urbanDelivery',
  request: {
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              apiKey_l1: z
                .string()
                .openapi({
                  description: 'Client Api Key',
                  example: 'd95fead6-e8a6-4547-9fb9-7835101a3960',
                }),
              apiKey_l2: z
                .string()
                .openapi({
                  description: 'Integration Partner Api Key',
                  example: 'c60f8db5-7204-4427-960d-27400c38b166',
                }),
              destination_latitude: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.float64(),
                )
                .openapi({
                  description: 'Destination latitude (like: 50.870752, value = -90<=x<=90)',
                  example: -89.870752,
                }),
              destination_longitude: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.float64(),
                )
                .openapi({
                  description: 'Destination longitude (like: 4.669490, value = -180<=x<=180)',
                  example: 179.66949,
                }),
              item_count: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .openapi({ description: "item_count' (like:2, value = 0<x<=100)", example: 3 }),
              origin_latitude: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.float64(),
                )
                .openapi({
                  description: 'Origin latitude (like: 23.372628, value = -90<=x<=90)',
                  example: -89.372628,
                }),
              origin_longitude: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.float64(),
                )
                .openapi({
                  description: 'Origin longitude (like: 113.159339, value = -180<=x<=180)',
                  example: -179.159339,
                }),
              vehicle_type: z
                .string()
                .openapi({
                  description:
                    'Vehicle type (like: private car, motorcycle,cargo van,zero-emission)',
                  example: 'PRIVATE CAR',
                }),
            })
            .openapi({
              required: [
                'vehicle_type',
                'origin_latitude',
                'origin_longitude',
                'destination_latitude',
                'destination_longitude',
                'item_count',
                'apiKey_l1',
                'apiKey_l2',
              ],
            }),
        },
      },
    },
  },
  responses: { 200: { description: '', headers: z.object({}) } },
  servers: [{ url: 'http://api.climatekuul.com:8000/footprint', variables: {} }],
})

export const patchUrbanDeliveryConfirmCarbonOffsetRoute = createRoute({
  method: 'patch',
  path: '/urbanDelivery/confirmCarbonOffset',
  tags: ['UrbanDelivery'],
  summary: 'confirmCarbonOffset',
  operationId: 'confirmCarbonOffset',
  request: {
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              carbonOffset: z
                .string()
                .openapi({ description: 'Confirm Carbon Offset (Value = y/n)', example: 'y' }),
              contactEmail: z
                .string()
                .exactOptional()
                .openapi({ description: 'Contact email', example: 'example@example.com' }),
              contactFirstName: z
                .string()
                .exactOptional()
                .openapi({ description: 'Contact first name', example: 'abc' }),
              contactLastName: z
                .string()
                .exactOptional()
                .openapi({ description: 'Contact last name', example: 'xyz' }),
              transaction_id: z
                .string()
                .openapi({ description: 'transaction_id', example: '60a7875a01d88997746c91ae' }),
            })
            .openapi({ required: ['transaction_id', 'carbonOffset'] }),
        },
      },
    },
  },
  responses: { 200: { description: '', headers: z.object({}) } },
  servers: [{ url: 'http://api.climatekuul.com:8000/footprint', variables: {} }],
})

export const patchUrbanDeliveryConfirmPaymentRoute = createRoute({
  method: 'patch',
  path: '/urbanDelivery/confirmPayment',
  tags: ['UrbanDelivery'],
  summary: 'confirmPayment',
  operationId: 'confirmPayment',
  request: {
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              apiKey_l1: z
                .string()
                .openapi({
                  description: 'apikey_l1 (Like: d95fead6-e8a6-4247-9fb9-7835101a4560)',
                  example: 'd95fead6-e8a6-4247-9fb9-7835101a4560',
                }),
              apiKey_l2: z
                .string()
                .openapi({
                  description: 'apikey_l2 (Like: c60f8db5-7904-4227-960d-27400c38b166)',
                  example: 'c60f8db5-7904-4227-960d-27400c38b166',
                }),
              confirmPayment: z
                .string()
                .openapi({ description: 'Confirm Payment (Value = y/n)', example: 'y' }),
              paymentID: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .openapi({ description: 'Payment Id', example: 34567878 }),
              transaction_id: z
                .string()
                .openapi({ description: 'transaction_id', example: '60a7875a01d88997746c91ae' }),
            })
            .openapi({
              required: ['transaction_id', 'confirmPayment', 'paymentID', 'apiKey_l1', 'apiKey_l2'],
            }),
        },
      },
    },
  },
  responses: { 200: { description: '', headers: z.object({}) } },
  servers: [{ url: 'http://api.climatekuul.com:8000/footprint', variables: {} }],
})

export const patchUrbanDeliveryConfirmPlantingRoute = createRoute({
  method: 'patch',
  path: '/urbanDelivery/confirmPlanting',
  tags: ['UrbanDelivery'],
  summary: 'confirmPlanting',
  operationId: 'confirmsPlanting',
  request: {
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              apiKey_l1: z
                .string()
                .openapi({
                  description: 'apikey_l1 (Like: d95fead6-e8a6-4247-9fb9-7835101a4560)',
                  example: 'd95fead6-e8a6-4247-9fb9-7835101a4560',
                }),
              apiKey_l2: z
                .string()
                .openapi({
                  description: 'apikey_l2 (Like: c60f8db5-7904-4227-960d-27400c38b166)',
                  example: 'c60f8db5-7904-4227-960d-27400c38b166',
                }),
              confirmPlanting: z
                .string()
                .openapi({ description: 'Confirm Planting (Value = y/n)', example: 'y' }),
              transaction_id: z
                .string()
                .openapi({ description: 'transaction_id', example: '60a7875a01d88997746c91ae' }),
            })
            .openapi({ required: ['transaction_id', 'confirmPlanting', 'apiKey_l1', 'apiKey_l2'] }),
        },
      },
    },
  },
  responses: { 200: { description: '', headers: z.object({}) } },
  servers: [{ url: 'http://api.climatekuul.com:8000/footprint', variables: {} }],
})

export const patchUrbanDeliveryConfirmTransactionRoute = createRoute({
  method: 'patch',
  path: '/urbanDelivery/confirmTransaction',
  tags: ['UrbanDelivery'],
  summary: 'confirmTransaction',
  operationId: 'confirmPaymentOfTransaction',
  request: {
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              confirmTransaction: z
                .string()
                .openapi({
                  description: 'Confirm Payment Of Transaction (Value = y/n)',
                  example: 'y',
                }),
              transaction_id: z
                .string()
                .openapi({ description: 'transaction_id', example: '60a7875a01d88997746c91ae' }),
            })
            .openapi({ required: ['transaction_id', 'confirmTransaction'] }),
        },
      },
    },
  },
  responses: { 200: { description: '', headers: z.object({}) } },
  servers: [{ url: 'http://api.climatekuul.com:8000/footprint', variables: {} }],
})
