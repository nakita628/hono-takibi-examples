import { createRoute, z } from '@hono/zod-openapi'

const NiAsyncResponseSchema = z
  .object({
    id: z
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
    name: z.string(),
    tag: z.string().exactOptional(),
  })
  .openapi({ required: ['id', 'name'] })
  .openapi('NiAsyncResponse')

const NiBasicStatusSchema = z
  .union([z.literal(0), z.literal(1), z.literal(3), z.literal(4), z.literal(5), z.literal(9)])
  .openapi({
    description:
      'Code | Text\n-- | --\n0 | Success - request accepted for delivery by .\n1 | Busy - you have made more requests in the last second than are permitted by your account. Please retry.\n3 | Invalid - your request is incomplete and missing some mandatory parameters.\n4 | Invalid credentials - the _api_key_ or _api_secret_ you supplied is either not valid or has been disabled.\n5 | Internal Error - the format of the recipient address is not valid.\n9 | Partner quota exceeded - your account does not have sufficient credit to process this request.\n',
    example: 0,
  })
  .openapi('NiBasicStatus')

const NiCallerIdentitySchema = z
  .object({
    caller_name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Full name of the person or business who owns the phone number. `unknown` if this information is not available. This parameter is only present if `cnam` had a value of `true` within the request.',
        example: 'John Smith',
      }),
    caller_type: z
      .enum(['business', 'consumer', 'unknown'])
      .exactOptional()
      .openapi({
        description:
          'The value will be `business` if the owner of a phone number is a business. If the owner is an individual the value will be `consumer`. The value will be `unknown` if this information is not available. This parameter is only present if `cnam` had a value of `true` within the request.',
        example: 'consumer',
      }),
    first_name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'First name of the person who owns the phone number if the owner is an individual. This parameter is only present if `cnam` had a value of `true` within the request.',
        example: 'John',
      }),
    last_name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Last name of the person who owns the phone number if the owner is an individual. This parameter is only present if `cnam` had a value of `true` within the request.',
        example: 'Smith',
      }),
  })
  .openapi({
    description: 'Information about the network `number` is currently connected to.',
    required: [],
  })
  .openapi('NiCallerIdentity')

const NiCurrentCarrierPropertiesSchema = z
  .object({
    country: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The country that `number` is associated with. This is in ISO 3166-1 alpha-2   format.',
        example: 'GB',
        xml: { attribute: true },
      }),
    name: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The full name of the carrier that `number` is associated with.',
        example: 'Acme Inc',
        xml: { attribute: true },
      }),
    network_code: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The [https://en.wikipedia.org/wiki/Mobile_country_code](https://en.wikipedia.org/wiki/Mobile_country_code) for the carrier`number` is associated with. Unreal numbers are marked as`null` and the request is rejected altogether if the number is impossible according to the [E.164](https://en.wikipedia.org/wiki/E.164) guidelines.',
        example: '12345',
        xml: { attribute: true },
      }),
    network_type: z
      .enum([
        'mobile',
        'landline',
        'landline_premium',
        'landline_tollfree',
        'virtual',
        'unknown',
        'pager',
        'null',
      ])
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The type of network that `number` is associated with.',
        example: 'mobile',
        xml: { attribute: true },
      }),
  })
  .nullable()
  .openapi({
    description: 'Information about the network `number` is currently connected to.',
    'x-nexmo-developer-collection-description-shown': true,
    required: [],
  })
  .openapi('NiCurrentCarrierProperties')

const NiInitialCarrierPropertiesSchema = z
  .object({
    country: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The country that `number` is associated with. This is in ISO 3166-1 alpha-2   format.',
        example: 'GB',
        xml: { attribute: true },
      }),
    name: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The full name of the carrier that `number` is associated with.',
        example: 'Acme Inc',
        xml: { attribute: true },
      }),
    network_code: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The [https://en.wikipedia.org/wiki/Mobile_country_code](https://en.wikipedia.org/wiki/Mobile_country_code) for the carrier`number` is associated with. Unreal numbers are marked as`null` and the request is rejected altogether if the number is impossible according to the [E.164](https://en.wikipedia.org/wiki/E.164) guidelines.',
        example: '12345',
        xml: { attribute: true },
      }),
    network_type: z
      .enum([
        'mobile',
        'landline',
        'landline_premium',
        'landline_tollfree',
        'virtual',
        'unknown',
        'pager',
        'null',
      ])
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The type of network that `number` is associated with.',
        example: 'mobile',
        xml: { attribute: true },
      }),
  })
  .nullable()
  .openapi({
    description: 'Information about the network `number` was initially connected to.',
    'x-nexmo-developer-collection-description-shown': true,
    required: [],
  })
  .openapi('NiInitialCarrierProperties')

const NiRealtimeDataSchema = z
  .object({
    active_status: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Whether the end-user's phone number is active within an operator's `network`. Can be `active`, `inactive` or null.",
        example: 'true',
      }),
    handset_status: z
      .string()
      .exactOptional()
      .openapi({
        description: "Whether the end-user's handset is turned on or off.",
        example: 'On',
      }),
  })
  .nullable()
  .openapi({ description: 'Real time data about the `number`', required: [] })
  .openapi('NiRealtimeData')

const NiStandardAdvancedStatusSchema = z
  .union([
    z.literal(0),
    z.literal(1),
    z.literal(3),
    z.literal(4),
    z.literal(5),
    z.literal(9),
    z.literal(19),
    z.literal(43),
    z.literal(44),
    z.literal(45),
    z.literal(999),
  ])
  .openapi({
    description:
      'Code | Text\n-- | --\n0 | Success - request accepted for delivery by .\n1 | Busy - you have made more requests in the last second than are permitted by your account. Please retry.\n3 | Invalid - your request is incomplete and missing some mandatory parameters.\n4 | Invalid credentials - the _api_key_ or _api_secret_ you supplied is either not valid or has been disabled.\n5 | Internal Error - the format of the recipient address is not valid.\n9 | Partner quota exceeded - your account does not have sufficient credit to process this request.\n19 | Facility Not Allowed - your request makes use of a facility that is not enabled on your account.\n43, 44, 45 | Live mobile lookup not returned. Not all return parameters are available.\n999 | Request unparseable.\n',
    example: 0,
  })
  .openapi('NiStandardAdvancedStatus')

const NiResponseAsyncSchema = z
  .object({
    error_text: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The status description of your request. Note: This field is equivalent to `status_message` field in the other endpoints',
        example: 'Success',
      }),
    number: z
      .string()
      .exactOptional()
      .openapi({ description: 'The `number` in your request', example: '447700900000' }),
    remaining_balance: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Your account balance in EUR after this request.',
        example: '1.23456789',
        xml: { name: 'remainingBalance' },
      }),
    request_id: z
      .string()
      .max(40)
      .exactOptional()
      .openapi({
        description:
          'The unique identifier for your request. This is a alphanumeric string up to 40 characters.',
        example: 'aaaaaaaa-bbbb-cccc-dddd-0123456789ab',
        xml: { name: 'requestId' },
      }),
    request_price: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'If there is an internal lookup error, the `refund_price` will reflect the lookup price. If `cnam` is requested for a non-US number the `refund_price` will reflect the `cnam` price. If both of these conditions occur, `refund_price` is the sum of the lookup price and `cnam` price.',
        example: '0.01500000',
        xml: { name: 'requestPrice' },
      }),
    status: NiStandardAdvancedStatusSchema.exactOptional(),
  })
  .openapi({ xml: { name: 'lookup' }, required: [] })
  .openapi('NiResponseAsync')

const NiRoamingSchema = z
  .object({
    roaming_country_code: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'If `number` is `roaming`, this is the [code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) of the country `number` is roaming in.',
        example: 'US',
        xml: { attribute: true },
      }),
    roaming_network_code: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'If `number` is `roaming`, this is the id of the carrier network `number` is roaming in.',
        example: '12345',
        xml: { attribute: true },
      }),
    roaming_network_name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'If `number` is `roaming`, this is the name of the carrier network `number` is roaming in.',
        example: 'Acme Inc',
        xml: { attribute: true },
      }),
    status: z
      .enum(['roaming', 'not_roaming'])
      .exactOptional()
      .openapi({
        description: 'Is `number` outside its home carrier network.',
        example: 'roaming',
        xml: { attribute: true },
      }),
  })
  .nullable()
  .openapi({
    description:
      'Information about the roaming status for `number`. This is applicable to mobile numbers only. If unknown, this may return a string of `unknown` instead of an object.',
    required: [],
  })
  .openapi('NiRoaming')

const NiResponseJsonAdvancedAsyncSchema = z
  .object({
    caller_identity: NiCallerIdentitySchema.exactOptional(),
    country_code: z
      .string()
      .regex(/[A-Z]{2}/)
      .openapi({
        description:
          'Two character country code for `number`. This is in [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) format.',
        example: 'GB',
      }),
    country_code_iso3: z
      .string()
      .regex(/[A-Z]{3}/)
      .openapi({
        description:
          'Three character country code for `number`. This is in [ISO 3166-1 alpha-3](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-3) format.',
        example: 'GBR',
      }),
    country_name: z
      .string()
      .openapi({
        description: 'The full name of the country that `number` is registered in.',
        example: 'United Kingdom',
      }),
    country_prefix: z
      .string()
      .openapi({
        description: 'The numeric prefix for the country that `number` is registered in.',
        example: '44',
      }),
    current_carrier: NiCurrentCarrierPropertiesSchema.exactOptional(),
    international_format_number: z
      .string()
      .openapi({
        description: 'The `number` in your request in international format.',
        example: '447700900000',
      }),
    lookup_outcome: z
      .union([z.literal(0), z.literal(1), z.literal(2)])
      .exactOptional()
      .openapi({
        description:
          'Shows if all information about a phone number has been returned. Possible values:\n\nCode | Text\n--- | ---\n0 | Success\n1 | Partial success - some fields populated\n2 | Failed\n',
        example: 0,
      }),
    lookup_outcome_message: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Shows if all information about a phone number has been returned.',
        example: 'Success',
      }),
    national_format_number: z
      .string()
      .openapi({
        description:
          'The `number` in your request in the format used by the country the number belongs to.',
        example: '07700 900000',
      }),
    original_carrier: NiInitialCarrierPropertiesSchema.exactOptional(),
    ported: z
      .enum(['unknown', 'ported', 'not_ported', 'assumed_not_ported', 'assumed_ported', 'null'])
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'If the user has changed carrier for `number`. The assumed status means that the information supplier has replied to the request but has not said explicitly that the number is ported.',
        example: 'not_ported',
      }),
    reachable: z
      .enum([
        'unknown',
        'reachable',
        'undeliverable',
        'absent',
        'bad_number',
        'blacklisted',
        'null',
      ])
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Can you call `number` now. This is applicable to mobile numbers only.',
        example: 'reachable',
      }),
    refund_price: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'If there is an internal lookup error, the `refund_price` will reflect the lookup price. If `cnam` is requested for a non-US number the `refund_price` will reflect the `cnam` price. If both of these conditions occur, `refund_price` is the sum of the lookup price and `cnam` price.',
        example: '0.01500000',
      }),
    remaining_balance: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Your account balance in EUR after this request.',
        example: '1.23456789',
      }),
    request_id: z
      .string()
      .max(40)
      .openapi({
        description:
          'The unique identifier for your request. This is a alphanumeric string up to 40 characters.',
        example: 'aaaaaaaa-bbbb-cccc-dddd-0123456789ab',
      }),
    request_price: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The amount in EUR charged to your account.',
        example: '0.04000000',
      }),
    roaming: NiRoamingSchema.exactOptional(),
    status: NiStandardAdvancedStatusSchema,
    status_message: z
      .string()
      .openapi({ description: 'The status description of your request.', example: 'Success' }),
    valid_number: z
      .enum(['unknown', 'valid', 'not_valid', 'inferred', 'inferred_not_valid'])
      .exactOptional()
      .openapi({
        description:
          'Does `number` exist. `unknown` means the number could not be validated. `valid` means the number is valid. `not_valid` means the number is not valid. `inferred_not_valid` means that the number could not be determined as valid or invalid via an external system and the best guess is that the number is invalid. This is applicable to mobile numbers only.',
        example: 'valid',
      }),
  })
  .openapi({
    description: 'Advanced Response (Async)',
    required: [
      'status',
      'status_message',
      'request_id',
      'international_format_number',
      'national_format_number',
      'country_code',
      'country_code_iso3',
      'country_name',
      'country_prefix',
    ],
  })
  .openapi('NiResponseJsonAdvancedAsync')

const NiResponseJsonAdvancedRoamingUnknownSchema = z
  .object({
    caller_identity: NiCallerIdentitySchema.exactOptional(),
    country_code: z
      .string()
      .regex(/[A-Z]{2}/)
      .openapi({
        description:
          'Two character country code for `number`. This is in [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) format.',
        example: 'GB',
      }),
    country_code_iso3: z
      .string()
      .regex(/[A-Z]{3}/)
      .openapi({
        description:
          'Three character country code for `number`. This is in [ISO 3166-1 alpha-3](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-3) format.',
        example: 'GBR',
      }),
    country_name: z
      .string()
      .openapi({
        description: 'The full name of the country that `number` is registered in.',
        example: 'United Kingdom',
      }),
    country_prefix: z
      .string()
      .openapi({
        description: 'The numeric prefix for the country that `number` is registered in.',
        example: '44',
      }),
    current_carrier: NiCurrentCarrierPropertiesSchema.exactOptional(),
    international_format_number: z
      .string()
      .openapi({
        description: 'The `number` in your request in international format.',
        example: '447700900000',
      }),
    lookup_outcome: z
      .union([z.literal(0), z.literal(1), z.literal(2)])
      .exactOptional()
      .openapi({
        description:
          'Shows if all information about a phone number has been returned. Possible values:\n\nCode | Text\n--- | ---\n0 | Success\n1 | Partial success - some fields populated\n2 | Failed\n',
        example: 0,
      }),
    lookup_outcome_message: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Shows if all information about a phone number has been returned.',
        example: 'Success',
      }),
    national_format_number: z
      .string()
      .openapi({
        description:
          'The `number` in your request in the format used by the country the number belongs to.',
        example: '07700 900000',
      }),
    original_carrier: NiInitialCarrierPropertiesSchema.exactOptional(),
    ported: z
      .enum(['unknown', 'ported', 'not_ported', 'assumed_not_ported', 'assumed_ported', 'null'])
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'If the user has changed carrier for `number`. The assumed status means that the information supplier has replied to the request but has not said explicitly that the number is ported.',
        example: 'not_ported',
      }),
    reachable: z
      .enum([
        'unknown',
        'reachable',
        'undeliverable',
        'absent',
        'bad_number',
        'blacklisted',
        'null',
      ])
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Can you call `number` now. This is applicable to mobile numbers only.',
        example: 'reachable',
      }),
    refund_price: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'If there is an internal lookup error, the `refund_price` will reflect the lookup price. If `cnam` is requested for a non-US number the `refund_price` will reflect the `cnam` price. If both of these conditions occur, `refund_price` is the sum of the lookup price and `cnam` price.',
        example: '0.01500000',
      }),
    remaining_balance: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Your account balance in EUR after this request.',
        example: '1.23456789',
      }),
    request_id: z
      .string()
      .max(40)
      .openapi({
        description:
          'The unique identifier for your request. This is a alphanumeric string up to 40 characters.',
        example: 'aaaaaaaa-bbbb-cccc-dddd-0123456789ab',
      }),
    request_price: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The amount in EUR charged to your account.',
        example: '0.04000000',
      }),
    roaming: z.literal('unknown').exactOptional().openapi({ example: 'unknown' }),
    status: NiStandardAdvancedStatusSchema,
    status_message: z
      .string()
      .openapi({ description: 'The status description of your request.', example: 'Success' }),
    valid_number: z
      .enum(['unknown', 'valid', 'not_valid', 'inferred', 'inferred_not_valid'])
      .exactOptional()
      .openapi({
        description:
          'Does `number` exist. `unknown` means the number could not be validated. `valid` means the number is valid. `not_valid` means the number is not valid. `inferred_not_valid` means that the number could not be determined as valid or invalid via an external system and the best guess is that the number is invalid. This is applicable to mobile numbers only.',
        example: 'valid',
      }),
  })
  .openapi({
    description: 'Unknown Roaming',
    required: [
      'status',
      'status_message',
      'request_id',
      'international_format_number',
      'national_format_number',
      'country_code',
      'country_code_iso3',
      'country_name',
      'country_prefix',
    ],
  })
  .openapi('NiResponseJsonAdvancedRoamingUnknown')

const NiResponseJsonAdvancedSyncSchema = z
  .object({
    caller_identity: NiCallerIdentitySchema.exactOptional(),
    country_code: z
      .string()
      .regex(/[A-Z]{2}/)
      .openapi({
        description:
          'Two character country code for `number`. This is in [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) format.',
        example: 'GB',
      }),
    country_code_iso3: z
      .string()
      .regex(/[A-Z]{3}/)
      .openapi({
        description:
          'Three character country code for `number`. This is in [ISO 3166-1 alpha-3](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-3) format.',
        example: 'GBR',
      }),
    country_name: z
      .string()
      .openapi({
        description: 'The full name of the country that `number` is registered in.',
        example: 'United Kingdom',
      }),
    country_prefix: z
      .string()
      .openapi({
        description: 'The numeric prefix for the country that `number` is registered in.',
        example: '44',
      }),
    current_carrier: NiCurrentCarrierPropertiesSchema.exactOptional(),
    international_format_number: z
      .string()
      .openapi({
        description: 'The `number` in your request in international format.',
        example: '447700900000',
      }),
    lookup_outcome: z
      .union([z.literal(0), z.literal(1), z.literal(2)])
      .exactOptional()
      .openapi({
        description:
          'Shows if all information about a phone number has been returned. Possible values:\n\nCode | Text\n--- | ---\n0 | Success\n1 | Partial success - some fields populated\n2 | Failed\n',
        example: 0,
      }),
    lookup_outcome_message: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Shows if all information about a phone number has been returned.',
        example: 'Success',
      }),
    national_format_number: z
      .string()
      .openapi({
        description:
          'The `number` in your request in the format used by the country the number belongs to.',
        example: '07700 900000',
      }),
    original_carrier: NiInitialCarrierPropertiesSchema.exactOptional(),
    ported: z
      .enum(['unknown', 'ported', 'not_ported', 'assumed_not_ported', 'assumed_ported', 'null'])
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'If the user has changed carrier for `number`. The assumed status means that the information supplier has replied to the request but has not said explicitly that the number is ported.',
        example: 'not_ported',
      }),
    reachable: z
      .enum([
        'unknown',
        'reachable',
        'undeliverable',
        'absent',
        'bad_number',
        'blacklisted',
        'null',
      ])
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Can you call `number` now. This is applicable to mobile numbers only.',
        example: 'reachable',
      }),
    real_time_data: NiRealtimeDataSchema.exactOptional(),
    refund_price: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'If there is an internal lookup error, the `refund_price` will reflect the lookup price. If `cnam` is requested for a non-US number the `refund_price` will reflect the `cnam` price. If both of these conditions occur, `refund_price` is the sum of the lookup price and `cnam` price.',
        example: '0.01500000',
      }),
    remaining_balance: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Your account balance in EUR after this request.',
        example: '1.23456789',
      }),
    request_id: z
      .string()
      .max(40)
      .openapi({
        description:
          'The unique identifier for your request. This is a alphanumeric string up to 40 characters.',
        example: 'aaaaaaaa-bbbb-cccc-dddd-0123456789ab',
      }),
    request_price: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The amount in EUR charged to your account.',
        example: '0.04000000',
      }),
    roaming: NiRoamingSchema.exactOptional(),
    status: NiStandardAdvancedStatusSchema,
    status_message: z
      .string()
      .openapi({ description: 'The status description of your request.', example: 'Success' }),
    valid_number: z
      .enum(['unknown', 'valid', 'not_valid', 'inferred', 'inferred_not_valid'])
      .exactOptional()
      .openapi({
        description:
          'Does `number` exist. `unknown` means the number could not be validated. `valid` means the number is valid. `not_valid` means the number is not valid. `inferred_not_valid` means that the number could not be determined as valid or invalid via an external system and the best guess is that the number is invalid. This is applicable to mobile numbers only.',
        example: 'valid',
      }),
  })
  .openapi({
    description: 'Advanced Response (sync)',
    required: [
      'status',
      'status_message',
      'request_id',
      'international_format_number',
      'national_format_number',
      'country_code',
      'country_code_iso3',
      'country_name',
      'country_prefix',
    ],
  })
  .openapi('NiResponseJsonAdvancedSync')

const NiResponseJsonBasicSchema = z
  .object({
    country_code: z
      .string()
      .regex(/[A-Z]{2}/)
      .exactOptional()
      .openapi({
        description:
          'Two character country code for `number`. This is in [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) format.',
        example: 'GB',
      }),
    country_code_iso3: z
      .string()
      .regex(/[A-Z]{3}/)
      .exactOptional()
      .openapi({
        description:
          'Three character country code for `number`. This is in [ISO 3166-1 alpha-3](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-3) format.',
        example: 'GBR',
      }),
    country_name: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The full name of the country that `number` is registered in.',
        example: 'United Kingdom',
      }),
    country_prefix: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The numeric prefix for the country that `number` is registered in.',
        example: '44',
      }),
    international_format_number: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The `number` in your request in international format.',
        example: '447700900000',
      }),
    national_format_number: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The `number` in your request in the format used by the country the number belongs to.',
        example: '07700 900000',
      }),
    request_id: z
      .string()
      .max(40)
      .exactOptional()
      .openapi({
        description:
          'The unique identifier for your request. This is a alphanumeric string up to 40 characters.',
        example: 'aaaaaaaa-bbbb-cccc-dddd-0123456789ab',
      }),
    status: NiBasicStatusSchema.exactOptional(),
    status_message: z
      .string()
      .exactOptional()
      .openapi({ description: 'The status description of your request.', example: 'Success' }),
  })
  .openapi({ required: [] })
  .openapi('NiResponseJsonBasic')

const NiResponseJsonStandardSchema = NiResponseJsonBasicSchema.and(
  z
    .object({
      caller_identity: NiCallerIdentitySchema.exactOptional(),
      caller_name: z
        .string()
        .exactOptional()
        .openapi({
          description:
            'Full name of the person or business who owns the phone number. `unknown` if this information is not available. This parameter is only present if `cnam` had a value of `true` within the request.',
          example: 'John Smith',
        }),
      caller_type: z
        .enum(['business', 'consumer', 'unknown'])
        .exactOptional()
        .openapi({
          description:
            'The value will be `business` if the owner of a phone number is a business. If the owner is an individual the value will be `consumer`. The value will be `unknown` if this information is not available. This parameter is only present if `cnam` had a value of `true` within the request.',
          example: 'consumer',
        }),
      current_carrier: NiCurrentCarrierPropertiesSchema.nullable().exactOptional(),
      first_name: z
        .string()
        .exactOptional()
        .openapi({
          description:
            'First name of the person who owns the phone number if the owner is an individual. This parameter is only present if `cnam` had a value of `true` within the request.',
          example: 'John',
        }),
      last_name: z
        .string()
        .exactOptional()
        .openapi({
          description:
            'Last name of the person who owns the phone number if the owner is an individual. This parameter is only present if `cnam` had a value of `true` within the request.',
          example: 'Smith',
        }),
      original_carrier: NiInitialCarrierPropertiesSchema.exactOptional(),
      ported: z
        .enum(['unknown', 'ported', 'not_ported', 'assumed_not_ported', 'assumed_ported', 'null'])
        .nullable()
        .exactOptional()
        .openapi({
          description:
            'If the user has changed carrier for `number`. The assumed status means that the information supplier has replied to the request but has not said explicitly that the number is ported.',
          example: 'not_ported',
        }),
      refund_price: z
        .string()
        .exactOptional()
        .openapi({
          description:
            'If there is an internal lookup error, the `refund_price` will reflect the lookup price. If `cnam` is requested for a non-US number the `refund_price` will reflect the `cnam` price. If both of these conditions occur, `refund_price` is the sum of the lookup price and `cnam` price.',
          example: '0.01500000',
        }),
      remaining_balance: z
        .string()
        .exactOptional()
        .openapi({
          description: 'Your account balance in EUR after this request.',
          example: '1.23456789',
        }),
      request_price: z
        .string()
        .exactOptional()
        .openapi({
          description: 'The amount in EUR charged to your account.',
          example: '0.04000000',
        }),
    })
    .openapi({ required: [] }),
)
  .openapi({ description: 'Standard Response' })
  .openapi('NiResponseJsonStandard')

const NiResponseJsonStandardRoamingUnknownSchema = NiResponseJsonBasicSchema.and(
  z
    .object({
      caller_identity: NiCallerIdentitySchema.exactOptional(),
      caller_name: z
        .string()
        .exactOptional()
        .openapi({
          description:
            'Full name of the person or business who owns the phone number. `unknown` if this information is not available. This parameter is only present if `cnam` had a value of `true` within the request.',
          example: 'John Smith',
        }),
      caller_type: z
        .enum(['business', 'consumer', 'unknown'])
        .exactOptional()
        .openapi({
          description:
            'The value will be `business` if the owner of a phone number is a business. If the owner is an individual the value will be `consumer`. The value will be `unknown` if this information is not available. This parameter is only present if `cnam` had a value of `true` within the request.',
          example: 'consumer',
        }),
      current_carrier: NiCurrentCarrierPropertiesSchema.nullable().exactOptional(),
      first_name: z
        .string()
        .exactOptional()
        .openapi({
          description:
            'First name of the person who owns the phone number if the owner is an individual. This parameter is only present if `cnam` had a value of `true` within the request.',
          example: 'John',
        }),
      last_name: z
        .string()
        .exactOptional()
        .openapi({
          description:
            'Last name of the person who owns the phone number if the owner is an individual. This parameter is only present if `cnam` had a value of `true` within the request.',
          example: 'Smith',
        }),
      original_carrier: NiInitialCarrierPropertiesSchema.exactOptional(),
      ported: z
        .enum(['unknown', 'ported', 'not_ported', 'assumed_not_ported', 'assumed_ported', 'null'])
        .nullable()
        .exactOptional()
        .openapi({
          description:
            'If the user has changed carrier for `number`. The assumed status means that the information supplier has replied to the request but has not said explicitly that the number is ported.',
          example: 'not_ported',
        }),
      refund_price: z
        .string()
        .exactOptional()
        .openapi({
          description:
            'If there is an internal lookup error, the `refund_price` will reflect the lookup price. If `cnam` is requested for a non-US number the `refund_price` will reflect the `cnam` price. If both of these conditions occur, `refund_price` is the sum of the lookup price and `cnam` price.',
          example: '0.01500000',
        }),
      remaining_balance: z
        .string()
        .exactOptional()
        .openapi({
          description: 'Your account balance in EUR after this request.',
          example: '1.23456789',
        }),
      request_price: z
        .string()
        .exactOptional()
        .openapi({
          description: 'The amount in EUR charged to your account.',
          example: '0.04000000',
        }),
    })
    .openapi({ required: [] }),
)
  .openapi({ description: 'Unknown Roaming' })
  .openapi('NiResponseJsonStandardRoamingUnknown')

const NiResponseXmlAdvancedSchema = z
  .object({
    caller_identity: z
      .object({
        'caller-name': z
          .string()
          .exactOptional()
          .openapi({
            description:
              'Full name of the person or business who owns the phone number. `unknown` if this information is not available. This parameter is only present if `cnam` had a value of `true` within the request.',
            example: 'John Smith',
            xml: { attribute: true },
          }),
        'caller-type': z
          .enum(['business', 'consumer', 'unknown'])
          .exactOptional()
          .openapi({
            description:
              'The value will be `business` if the owner of a phone number is a business. If the owner is an individual the value will be `consumer`. The value will be `unknown` if this information is not available. This parameter is only present if `cnam` had a value of `true` within the request.',
            example: 'consumer',
            xml: { attribute: true },
          }),
        'first-name': z
          .string()
          .exactOptional()
          .openapi({
            description:
              'First name of the person who owns the phone number if the owner is an individual. This parameter is only present if `cnam` had a value of `true` within the request.',
            example: 'John',
            xml: { attribute: true },
          }),
        'last-name': z
          .string()
          .exactOptional()
          .openapi({
            description:
              'Last name of the person who owns the phone number if the owner is an individual. This parameter is only present if `cnam` had a value of `true` within the request.',
            example: 'Smith',
            xml: { attribute: true },
          }),
      })
      .exactOptional()
      .openapi({
        description:
          'Contains details of the number owner, if `cnam` was set to `true` in the request.',
        required: [],
      }),
    caller_name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Full name of the person or business who owns the phone number. `unknown` if this information is not available. This parameter is only present if `cnam` had a value of `true` within the request.',
        example: 'John Smith',
      }),
    caller_type: z
      .enum(['business', 'consumer', 'unknown'])
      .exactOptional()
      .openapi({
        description:
          'The value will be `business` if the owner of a phone number is a business. If the owner is an individual the value will be `consumer`. The value will be `unknown` if this information is not available. This parameter is only present if `cnam` had a value of `true` within the request.',
        example: 'consumer',
      }),
    current_carrier: NiCurrentCarrierPropertiesSchema.exactOptional(),
    error: z
      .object({
        code: z
          .string()
          .exactOptional()
          .openapi({ description: 'The status code', example: 0, xml: { attribute: true } }),
        status_text: z
          .string()
          .exactOptional()
          .openapi({
            description: 'The status description of your request.',
            example: 'Success',
            xml: { 'x-text': true },
          }),
      })
      .exactOptional()
      .openapi({
        description: 'The error code and status of your request',
        'x-nexmo-developer-collection-description-shown': true,
        required: [],
      }),
    firs_name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'First name of the person who owns the phone number if the owner is an individual. This parameter is only present if `cnam` had a value of `true` within the request.',
        example: 'John',
      }),
    international_format_number: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The `number` in your request in international format.',
        example: '447700900000',
      }),
    ip_warnings: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'This property is deprecated and can safely be ignored.',
        example: 'unknown',
      }),
    last_name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Last name of the person who owns the phone number if the owner is an individual. This parameter is only present if `cnam` had a value of `true` within the request.',
        example: 'Smith',
      }),
    local_number: z
      .object({
        country_code: z
          .string()
          .regex(/[A-Z]{2}/)
          .exactOptional()
          .openapi({
            description:
              'Two character country code for `number`. This is in [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) format.',
            example: 'GB',
            xml: { attribute: true },
          }),
        country_code_iso3: z
          .string()
          .regex(/[A-Z]{3}/)
          .exactOptional()
          .openapi({
            description:
              'Three character country code for `number`. This is in [ISO 3166-1 alpha-3](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-3) format.',
            example: 'GBR',
            xml: { attribute: true },
          }),
        country_name: z
          .string()
          .exactOptional()
          .openapi({
            description: 'The full name of the country that `number` is registered in.',
            example: 'United Kingdom',
            xml: { attribute: true },
          }),
        country_prefix: z
          .string()
          .exactOptional()
          .openapi({
            description: 'The numeric prefix for the country that `number` is registered in.',
            example: '44',
            xml: { attribute: true },
          }),
        number: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'The `number` in your request in the format used by the country the number belongs to.',
            example: '07700 900000',
            xml: { 'x-text': true },
          }),
      })
      .exactOptional()
      .openapi({
        description:
          'An object containing the `number` in your request in the format used by the country the number belongs to.',
        'x-nexmo-developer-collection-description-shown': true,
        required: [],
      }),
    lookup_outcome: z
      .object({
        code: z
          .union([z.literal(0), z.literal(1), z.literal(2)])
          .exactOptional()
          .openapi({
            description:
              'Shows if all information about a phone number has been returned. Possible values:\n\nCode | Text\n-- | --\n0 | Success\n1 | Partial success - some fields populated\n2 | Failed\n',
            example: '0',
            xml: { attribute: true },
          }),
        lookup_outcome_message: z
          .string()
          .exactOptional()
          .openapi({
            description: 'Shows if all information about a phone number has been returned.',
            example: 'Success',
            xml: { 'x-text': true },
          }),
      })
      .exactOptional()
      .openapi({
        description:
          'An object indicating whether all information about a phone number has been returned.',
        'x-nexmo-developer-collection-description-shown': true,
        required: [],
      }),
    original_carrier: NiInitialCarrierPropertiesSchema.exactOptional(),
    ported: z
      .object({
        ported_message: z
          .enum(['unknown', 'ported', 'not_ported', 'assumed_not_ported', 'assumed_ported'])
          .exactOptional()
          .openapi({
            description:
              'If the user has changed carrier for `number`. The assumed status means that the information supplier has replied to the request but has not said explicitly that the number is ported.',
            example: 'not_ported',
            xml: { 'x-text': true },
          }),
      })
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'If the user has changed carrier for `number`. The assumed status means that the information supplier has replied to the request but has not said explicitly that the number is ported.',
        required: [],
      }),
    reachable: z
      .enum([
        'unknown',
        'reachable',
        'undeliverable',
        'absent',
        'bad_number',
        'blacklisted',
        'null',
      ])
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Can you call `number` now. This is applicable to mobile numbers only.',
        example: 'reachable',
      }),
    remaining_balance: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Your account balance in EUR after this request.',
        example: '1.23456789',
      }),
    request_id: z
      .string()
      .max(40)
      .exactOptional()
      .openapi({
        description:
          'The unique identifier for your request. This is a alphanumeric string up to 40 characters.',
        example: 'aaaaaaaa-bbbb-cccc-dddd-0123456789ab',
        xml: { name: 'request_id' },
      }),
    request_price: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'If there is an internal lookup error, the `refund_price` will reflect the lookup price. If `cnam` is requested for a non-US number the `refund_price` will reflect the `cnam` price. If both of these conditions occur, `refund_price` is the sum of the lookup price and `cnam` price.',
        example: '0.01500000',
      }),
    roaming: NiRoamingSchema.exactOptional(),
    valid_number: z
      .enum(['unknown', 'valid', 'not_valid', 'inferred_not_valid'])
      .exactOptional()
      .openapi({
        description:
          'Does `number` exist. `unknown` means the number could not be validated. `valid` means the number is valid. `not_valid` means the number is not valid. `inferred_not_valid` means that the number could not be determined as valid or invalid via an external system and the best guess is that the number is invalid. This is applicable to mobile numbers only.',
        example: 'valid',
      }),
  })
  .openapi({ description: 'Advanced', xml: { name: 'lookup' }, required: [] })
  .openapi('NiResponseXmlAdvanced')

const NiResponseXmlBasicSchema = z
  .object({
    error: z
      .object({
        code: z
          .string()
          .exactOptional()
          .openapi({ description: 'The status code', example: 0, xml: { attribute: true } }),
        status_text: z
          .string()
          .exactOptional()
          .openapi({
            description: 'The status description of your request.',
            example: 'Success',
            xml: { 'x-text': true },
          }),
      })
      .exactOptional()
      .openapi({ description: 'The error code and status of your request', required: [] }),
    international_format_number: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The `number` in your request in international format.',
        example: '447700900000',
      }),
    local_number: z
      .object({
        country_code: z
          .string()
          .regex(/[A-Z]{2}/)
          .exactOptional()
          .openapi({
            description:
              'Two character country code for `number`. This is in [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) format.',
            example: 'GB',
            xml: { attribute: true },
          }),
        country_code_iso3: z
          .string()
          .regex(/[A-Z]{3}/)
          .exactOptional()
          .openapi({
            description:
              'Three character country code for `number`. This is in [ISO 3166-1 alpha-3](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-3) format.',
            example: 'GBR',
            xml: { attribute: true },
          }),
        country_name: z
          .string()
          .exactOptional()
          .openapi({
            description: 'The full name of the country that `number` is registered in.',
            example: 'United Kingdom',
            xml: { attribute: true },
          }),
        country_prefix: z
          .string()
          .exactOptional()
          .openapi({
            description: 'The numeric prefix for the country that `number` is registered in.',
            example: '44',
            xml: { attribute: true },
          }),
        number: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'The `number` in your request in the format used by the country the number belongs to.',
            example: '07700 900000',
            xml: { 'x-text': true },
          }),
      })
      .exactOptional()
      .openapi({
        description:
          'An object containing the `number` in your request in the format used by the country the number belongs to.',
        required: [],
      }),
    request_id: z
      .string()
      .max(40)
      .exactOptional()
      .openapi({
        description:
          'The unique identifier for your request. This is a alphanumeric string up to 40 characters.',
        example: 'aaaaaaaa-bbbb-cccc-dddd-0123456789ab',
        xml: { name: 'request_id' },
      }),
  })
  .openapi({ description: 'Basic', xml: { name: 'format' }, required: [] })
  .openapi('NiResponseXmlBasic')

const NiResponseXmlStandardSchema = z
  .object({
    caller_identity: z
      .object({
        'caller-name': z
          .string()
          .exactOptional()
          .openapi({
            description:
              'Full name of the person or business who owns the phone number. `unknown` if this information is not available. This parameter is only present if `cnam` had a value of `true` within the request.',
            example: 'John Smith',
            xml: { attribute: true },
          }),
        'caller-type': z
          .enum(['business', 'consumer', 'unknown'])
          .exactOptional()
          .openapi({
            description:
              'The value will be `business` if the owner of a phone number is a business. If the owner is an individual the value will be `consumer`. The value will be `unknown` if this information is not available. This parameter is only present if `cnam` had a value of `true` within the request.',
            example: 'consumer',
            xml: { attribute: true },
          }),
        caller_name: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'Full name of the person or business who owns the phone number. `unknown` if this information is not available. This parameter is only present if `cnam` had a value of `true` within the request.',
            example: 'John Smith',
          }),
        caller_type: z
          .enum(['business', 'consumer', 'unknown'])
          .exactOptional()
          .openapi({
            description:
              'The value will be `business` if the owner of a phone number is a business. If the owner is an individual the value will be `consumer`. The value will be `unknown` if this information is not available. This parameter is only present if `cnam` had a value of `true` within the request.',
            example: 'consumer',
          }),
        firs_name: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'First name of the person who owns the phone number if the owner is an individual. This parameter is only present if `cnam` had a value of `true` within the request.',
            example: 'John',
          }),
        'first-name': z
          .string()
          .exactOptional()
          .openapi({
            description:
              'First name of the person who owns the phone number if the owner is an individual. This parameter is only present if `cnam` had a value of `true` within the request.',
            example: 'John',
            xml: { attribute: true },
          }),
        'last-name': z
          .string()
          .exactOptional()
          .openapi({
            description:
              'Last name of the person who owns the phone number if the owner is an individual. This parameter is only present if `cnam` had a value of `true` within the request.',
            example: 'Smith',
            xml: { attribute: true },
          }),
        last_name: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'Last name of the person who owns the phone number if the owner is an individual. This parameter is only present if `cnam` had a value of `true` within the request.',
            example: 'Smith',
          }),
      })
      .exactOptional()
      .openapi({
        description:
          'Contains details of the number owner, if `cnam` was set to `true` in the request.',
        'x-nexmo-developer-collection-description-shown': true,
        required: [],
      }),
    current_carrier: NiCurrentCarrierPropertiesSchema.nullable().exactOptional(),
    error: z
      .object({
        code: z
          .string()
          .exactOptional()
          .openapi({ description: 'The status code', example: 0, xml: { attribute: true } }),
        status_text: z
          .string()
          .exactOptional()
          .openapi({
            description: 'The status description of your request.',
            example: 'Success',
            xml: { 'x-text': true },
          }),
      })
      .exactOptional()
      .openapi({ description: 'The error code and status of your request', required: [] }),
    international_format_number: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The `number` in your request in international format.',
        example: '447700900000',
      }),
    local_number: z
      .object({
        country_code: z
          .string()
          .regex(/[A-Z]{2}/)
          .exactOptional()
          .openapi({
            description:
              'Two character country code for `number`. This is in [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) format.',
            example: 'GB',
            xml: { attribute: true },
          }),
        country_code_iso3: z
          .string()
          .regex(/[A-Z]{3}/)
          .exactOptional()
          .openapi({
            description:
              'Three character country code for `number`. This is in [ISO 3166-1 alpha-3](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-3) format.',
            example: 'GBR',
            xml: { attribute: true },
          }),
        country_name: z
          .string()
          .exactOptional()
          .openapi({
            description: 'The full name of the country that `number` is registered in.',
            example: 'United Kingdom',
            xml: { attribute: true },
          }),
        country_prefix: z
          .string()
          .exactOptional()
          .openapi({
            description: 'The numeric prefix for the country that `number` is registered in.',
            example: '44',
            xml: { attribute: true },
          }),
        number: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'The `number` in your request in the format used by the country the number belongs to.',
            example: '07700 900000',
            xml: { 'x-text': true },
          }),
      })
      .exactOptional()
      .openapi({
        description:
          'An object containing the `number` in your request in the format used by the country the number belongs to.',
        required: [],
      }),
    original_carrier: NiInitialCarrierPropertiesSchema.exactOptional(),
    ported: z
      .object({
        ported_message: z
          .enum(['unknown', 'ported', 'not_ported', 'assumed_not_ported', 'assumed_ported'])
          .exactOptional()
          .openapi({
            description:
              'If the user has changed carrier for `number`. The assumed status means that the information supplier has replied to the request but has not said explicitly that the number is ported.',
            example: 'not_ported',
            xml: { 'x-text': true },
          }),
      })
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'If the user has changed carrier for number. The assumed status means that the information supplier has replied to the request but has not said explicitly that the number is ported',
        required: [],
      }),
    remaining_balance: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Your account balance in EUR after this request.',
        example: '1.23456789',
      }),
    request_id: z
      .string()
      .max(40)
      .exactOptional()
      .openapi({
        description:
          'The unique identifier for your request. This is a alphanumeric string up to 40 characters.',
        example: 'aaaaaaaa-bbbb-cccc-dddd-0123456789ab',
        xml: { name: 'request_id' },
      }),
    request_price: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'If there is an internal lookup error, the `refund_price` will reflect the lookup price. If `cnam` is requested for a non-US number the `refund_price` will reflect the `cnam` price. If both of these conditions occur, `refund_price` is the sum of the lookup price and `cnam` price.',
        example: '0.01500000',
      }),
  })
  .openapi({ description: 'Standard', xml: { name: 'lookup' }, required: [] })
  .openapi('NiResponseXmlStandard')

const CallbackParamsSchema = z
  .string()
  .openapi({
    param: {
      description: 'The callback URL',
      example: 'https://example.com/callback',
      in: 'query',
      name: 'callback',
      required: true,
      schema: { format: 'uriref', type: 'string' },
    },
  })

const CnamParamsSchema = z
  .stringbool()
  .default(false)
  .exactOptional()
  .openapi({
    param: {
      description:
        'Indicates if the name of the person who owns the phone number should be looked up and returned in the response. Set to true to receive phone number owner name in the response. This features is available for US numbers only and incurs an additional charge.',
      example: true,
      in: 'query',
      name: 'cnam',
      schema: { default: false, type: 'boolean' },
      required: false,
    },
  })

const CountryParamsSchema = z
  .string()
  .regex(/[A-Z]{2}/)
  .exactOptional()
  .openapi({
    param: {
      description:
        'If a number does not have a country code or is uncertain, set the two-character country code. This code must be in ISO 3166-1 alpha-2 format and in upper case. For example, GB or US. If you set country and number is already in [E.164](https://en.wikipedia.org/wiki/E.164) format, country must match the country code in number.',
      example: 'GB',
      in: 'query',
      name: 'country',
      schema: { pattern: '[A-Z]{2}', type: 'string' },
      required: false,
    },
  })

const FormatParamsSchema = z
  .enum(['json', 'xml'])
  .openapi({
    param: {
      description: 'The format of the response',
      example: 'json',
      in: 'path',
      name: 'format',
      required: true,
      schema: { enum: ['json', 'xml'], type: 'string' },
    },
  })

const IpParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      deprecated: true,
      description:
        'This parameter is deprecated as we are no longer able to retrieve reliable IP data globally from carriers. ',
      example: '123.0.0.255',
      in: 'query',
      name: 'ip',
      schema: { type: 'string' },
      required: false,
    },
  })

const NumberParamsSchema = z
  .string()
  .regex(/^[0-9-+\(\)\s]*$/)
  .openapi({
    param: {
      description:
        'A single phone number that you need insight about in national or international format.',
      example: '447700900000',
      in: 'query',
      name: 'number',
      required: true,
      schema: { pattern: '^[0-9-+\\(\\)\\s]*$', type: 'string' },
    },
  })

const RealTimeDataParamsSchema = z
  .stringbool()
  .exactOptional()
  .openapi({
    param: {
      description: 'A boolean to choose whether to get real time data back in the response.',
      example: 'true',
      in: 'query',
      name: 'real_time_data',
      required: false,
      schema: { type: 'boolean' },
    },
  })

const ApiKeySecurityScheme = {
  description:
    'You can find your API key in your [account overview](https://dashboard.nexmo.com/account-overview)',
  in: 'query',
  name: 'api_key',
  type: 'apiKey',
}

const ApiSecretSecurityScheme = {
  description:
    'You can find your API secret in your [account overview](https://dashboard.nexmo.com/account-overview)',
  in: 'query',
  name: 'api_secret',
  type: 'apiKey',
}

export const getAdvancedAsyncFormatRoute = createRoute({
  method: 'get',
  path: '/advanced/async/{format}',
  summary: 'Advanced Number Insight (async)',
  description:
    'Provides [advanced number insight](/number-insight/overview#basic-standard-and-advanced-apis) number information **asynchronously** using the URL specified in the `callback` parameter.  recommends asynchronous use of the Number Insight Advanced API, to avoid timeouts.\n\nNote that this endpoint also supports `POST` requests.\n',
  operationId: 'getNumberInsightAsync',
  request: {
    params: z.object({ format: FormatParamsSchema }),
    query: z.object({
      callback: CallbackParamsSchema,
      number: NumberParamsSchema,
      country: CountryParamsSchema,
      cnam: CnamParamsSchema,
      ip: IpParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: z.xor([NiResponseAsyncSchema]) },
        'text/xml': { schema: NiResponseAsyncSchema },
      },
    },
  },
})

export const getAdvancedFormatRoute = createRoute({
  method: 'get',
  path: '/advanced/{format}',
  summary: 'Advanced Number Insight (sync)',
  description:
    'Provides [advanced number insight](/number-insight/overview#basic-standard-and-advanced-apis) information about a number synchronously, in the same way that the basic and standard endpoints do.\n\nVonage recommends accessing the Advanced API **asynchronously** using the `/advanced/async` endpoint, to avoid timeouts.\n\nNote that this endpoint also supports `POST` requests.\n',
  operationId: 'getNumberInsightAdvanced',
  request: {
    params: z.object({ format: FormatParamsSchema }),
    query: z.object({
      real_time_data: RealTimeDataParamsSchema,
      number: NumberParamsSchema,
      country: CountryParamsSchema,
      cnam: CnamParamsSchema,
      ip: IpParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z.xor([
            NiResponseJsonAdvancedSyncSchema,
            NiResponseJsonAdvancedRoamingUnknownSchema,
          ]),
        },
        'text/xml': { schema: NiResponseXmlAdvancedSchema },
      },
    },
  },
})

export const getBasicFormatRoute = createRoute({
  method: 'get',
  path: '/basic/{format}',
  summary: 'Basic Number Insight',
  description:
    'Provides [basic number insight](/number-insight/overview#basic-standard-and-advanced-apis) information about a number.\n\nNote that this endpoint also supports `POST` requests.\n',
  operationId: 'getNumberInsightBasic',
  request: {
    params: z.object({ format: FormatParamsSchema }),
    query: z.object({ number: NumberParamsSchema, country: CountryParamsSchema }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: NiResponseJsonBasicSchema },
        'text/xml': { schema: NiResponseXmlBasicSchema },
      },
    },
  },
})

export const getStandardFormatRoute = createRoute({
  method: 'get',
  path: '/standard/{format}',
  summary: 'Standard Number Insight',
  description:
    'Provides [standard number insight](/number-insight/overview#basic-standard-and-advanced-apis) information about a number.\n\nNote that this endpoint also supports `POST` requests.\n',
  operationId: 'getNumberInsightStandard',
  request: {
    params: z.object({ format: FormatParamsSchema }),
    query: z.object({
      number: NumberParamsSchema,
      country: CountryParamsSchema,
      cnam: CnamParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: z.xor([NiResponseJsonStandardSchema]) },
        'text/xml': { schema: NiResponseXmlStandardSchema },
      },
    },
  },
})
