import { createRoute, z } from '@hono/zod-openapi'

const EvntIdSchema = z
  .string()
  .regex(/^evnt_[a-zA-Z0-9]+$/)
  .openapi({ description: 'Unique identifier prefixed with `evnt_`.' })
  .openapi('EvntId')

const DateCreatedSchema = z.iso
  .datetime({ offset: true })
  .openapi({ description: 'A timestamp in ISO 8601 format of the date the resource was created.' })
  .openapi('DateCreated')

const DateModifiedSchema = z.iso
  .datetime({ offset: true })
  .openapi({
    description: 'A timestamp in ISO 8601 format of the date the resource was last modified.',
  })
  .openapi('DateModified')

const ObjectSchema = z
  .string()
  .openapi({ description: 'Value is resource type.' })
  .openapi('Object')

const TrackingEventBaseSchema = z
  .object({
    id: EvntIdSchema,
    time: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'A timestamp in ISO 8601 format of the date USPS registered the event.',
      }),
    date_created: DateCreatedSchema,
    date_modified: DateModifiedSchema,
    object: ObjectSchema.and(z.literal('tracking_event').default('tracking_event')),
  })
  .openapi({
    description:
      'As mail pieces travel through the mail stream, USPS scans their unique barcodes, and Lob processes these mail scans to generate tracking events.',
    required: ['id', 'date_created', 'date_modified', 'object'],
  })
  .openapi('TrackingEventBase')

const TrackingEventDetailsSchema = z
  .object({
    event: z
      .enum([
        'package_accepted',
        'package_arrived',
        'package_departed',
        'package_processing',
        'package_processed',
        'package_in_local_area',
        'delivery_scheduled',
        'out_for_delivery',
        'pickup_available',
        'delivered',
        'package_forwarded',
        'returned_to_sender',
        'address_issue',
        'contact_carrier',
        'delayed',
        'delivery_attempted',
        'delivery_rescheduled',
        'location_inaccessible',
        'notice_left',
        'package_damaged',
        'package_disposed',
        'package_held',
        'package_lost',
        'package_unclaimed',
        'package_undeliverable',
        'reschedule_delivery',
        'other',
      ])
      .openapi({
        description:
          'Find the full table [here](#tag/Tracking-Events). A detailed substatus about the event:\n* `package_accepted` - Package has been accepted into the carrier network for delivery.\n* `package_arrived` - Package has arrived at an intermediate location in the carrier network.\n* `package_departed` - Package has departed from an intermediate location in the carrier network.\n* `package_processing` - Package is processing at an intermediate location in the carrier network.\n* `package_processed` - Package has been processed at an intermediate location.\n* `package_in_local_area` - Package is at a location near the end destination.\n* `delivery_scheduled` - Package is scheduled for delivery.\n* `out_for_delivery` - Package is out for delivery.\n* `pickup_available` - Package is available for pickup at carrier location.\n* `delivered` - Package has been delivered.\n* `package_forwarded` - Package has been forwarded.\n* `returned_to_sender` - Package is to be returned to sender.\n* `address_issue` - Address information is incorrect. Contact carrier to ensure delivery.\n* `contact_carrier` - Contact the carrier for more information.\n* `delayed` - Delivery of package is delayed.\n* `delivery_attempted` - Delivery of package has been attempted. Contact carrier to ensure delivery.\n* `delivery_rescheduled` - Delivery of package has been rescheduled.\n* `location_inaccessible` - Delivery location inaccessible to carrier. Contact carrier to ensure delivery.\n* `notice_left` - Carrier left notice during attempted delivery. Follow carrier instructions on notice.\n* `package_damaged` - Package has been damaged. Contact carrier for more details.\n* `package_disposed` - Package has been disposed.\n* `package_held` - Package held at carrier location. Contact carrier for more details.\n* `package_lost` - Package has been lost. Contact carrier for more details.\n* `package_unclaimed` - Package is unclaimed.\n* `package_undeliverable` - Package is not able to be delivered.\n* `reschedule_delivery` - Contact carrier to reschedule delivery.\n* `other` - Unrecognized carrier status.\n',
      }),
    description: z
      .string()
      .openapi({ description: 'The description as listed in the description for event.' }),
    notes: z
      .string()
      .exactOptional()
      .openapi({ description: 'Event-specific notes from USPS about the tracking event.' }),
    action_required: z
      .boolean()
      .openapi({
        description: '`true` if action is required by the end recipient, `false` otherwise.\n',
      }),
  })
  .openapi({ required: ['event', 'description', 'action_required'] })
  .openapi('TrackingEventDetails')

const TrackingEventCertifiedSchema = TrackingEventBaseSchema.and(
  z
    .object({
      type: z.literal('certified').openapi({ description: 'a Certified letter tracking event' }),
      name: z
        .enum([
          'Mailed',
          'In Transit',
          'In Local Area',
          'Processed for Delivery',
          'Pickup Available',
          'Delivered',
          'Re-Routed',
          'Returned to Sender',
          'Issue',
        ])
        .openapi({
          description:
            'Name of tracking event for Certified letters. Letters sent with USPS Certified Mail are fully tracked by USPS, therefore their tracking events have an additional details object with more detailed information about the tracking event. Some certified tracking event names have multiple meanings, noted in the list here. See the description of the details object for the full set of combined certified tracking event name meanings.\n\n  * `Mailed` - Package has been accepted into the carrier network for delivery.\n\n  * `In Transit` - Maps to four distinct stages of transit.\n\n  * `In Local Area` - Package is at a location near the end destination.\n\n  * `Processed for Delivery` - Maps to two distinct stages of delivery.\n\n  * `Pickup Available` - Package is available for pickup at carrier location.\n\n  * `Delivered` - Package has been delivered.\n\n  * `Re-Routed` - Package has been forwarded.\n\n  * `Returned to Sender` - Package is to be returned to sender.\n\n  * `Issue` - Maps to (at least) 15 possible issues, some of which are actionable.\n',
        }),
      details: TrackingEventDetailsSchema.exactOptional(),
      location: z
        .string()
        .nullable()
        .exactOptional()
        .openapi({
          description:
            'The zip code in which the event occurred if it exists, otherwise will be the name of a Regional Distribution Center if it exists, otherwise will be null.\n',
        }),
    })
    .openapi({ required: ['type', 'name'] }),
).openapi('TrackingEventCertified')

const AdrIdSchema = z
  .string()
  .regex(/^adr_[a-zA-Z0-9]+$/)
  .openapi({ description: 'Unique identifier prefixed with `adr_`.' })
  .openapi('AdrId')

const AddressFieldsUsSchema = z
  .object({
    address_line1: z
      .string()
      .max(64)
      .openapi({ description: 'The primary number, street name, and directional information.' }),
    address_line2: z
      .string()
      .max(64)
      .nullable()
      .exactOptional()
      .openapi({
        description: "An optional field containing any information which can't fit into line 1.",
      }),
    address_city: z.string().max(200),
    address_state: z
      .string()
      .regex(/^[a-zA-Z]{2}$/)
      .openapi({ description: '2 letter state short-name code' }),
    address_zip: z
      .string()
      .regex(/^\d{5}(-\d{4})?$/)
      .openapi({
        description: 'Must follow the ZIP format of `12345` or ZIP+4 format of `12345-1234`.\n',
      }),
  })
  .openapi({ required: ['address_line1', 'address_city', 'address_state', 'address_zip'] })
  .openapi('AddressFieldsUs')

const ResourceDescriptionSchema = z
  .string()
  .max(255)
  .nullable()
  .openapi({
    description:
      'An internal description that identifies this resource. Must be no longer than 255 characters.\n',
  })
  .openapi('ResourceDescription')

const CompanySchema = z
  .string()
  .max(40)
  .nullable()
  .openapi({
    description:
      'Either `name` or `company` is required, you may also add both. Must be no longer than 40 characters. If both `name` and `company` are provided, they will be printed on two separate lines above the rest of the address. This field can be used for any secondary recipient information which is not part of the actual mailing address (Company Name, Department, Attention Line, etc).\n',
  })
  .openapi('Company')

const MetadataSchema = z
  .record(z.string(), z.string())
  .openapi({
    description:
      'Use metadata to store custom information for tagging and labeling back to your internal systems. Must be an object with up to 20 key-value pairs. Keys must be at most 40 characters and values must be at most 500 characters. Neither can contain the characters `"` and `\\`. i.e. \'{"customer_id" : "NEWYORK2015"}\' Nested objects are not supported.  See [Metadata](#section/Metadata) for more information.',
  })
  .openapi('Metadata')

const AddressEditableUsSchema = AddressFieldsUsSchema.and(
  z
    .union([
      z
        .unknown()
        .superRefine((val, ctx) => {
          if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
            if (!Object.hasOwn(val, 'name')) {
              ctx.addIssue({ code: 'custom' })
            }
          }
        })
        .openapi({ title: 'address obj with `name` defined', required: ['name'] }),
      z
        .unknown()
        .superRefine((val, ctx) => {
          if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
            if (!Object.hasOwn(val, 'company')) {
              ctx.addIssue({ code: 'custom' })
            }
          }
        })
        .openapi({ title: 'address obj with `company` defined', required: ['company'] }),
    ])
    .and(
      z
        .object({
          description: ResourceDescriptionSchema.exactOptional(),
          name: z
            .string()
            .max(40)
            .nullable()
            .exactOptional()
            .openapi({
              description:
                'Either `name` or `company` is required, you may also add both. Must be no longer than 40 characters. If both `name` and `company` are provided, they will be printed on two separate lines above the rest of the address.\n',
            }),
          company: CompanySchema.exactOptional(),
          phone: z
            .string()
            .max(40)
            .nullable()
            .exactOptional()
            .openapi({ description: 'Must be no longer than 40 characters.' }),
          email: z
            .string()
            .max(100)
            .nullable()
            .exactOptional()
            .openapi({ description: 'Must be no longer than 100 characters.' }),
          address_country: z.literal('US').default('US').exactOptional(),
          metadata: MetadataSchema.exactOptional(),
        })
        .openapi({ required: [] }),
    ),
).openapi('AddressEditableUs')

const InlineAddressUsSchema = AddressEditableUsSchema.and(
  z
    .object({})
    .openapi({ required: ['address_line1', 'address_city', 'address_state', 'address_zip'] }),
).openapi('InlineAddressUs')

const AddressFieldsIntlSchema = z
  .object({
    address_line1: z
      .string()
      .max(200)
      .openapi({ description: 'The primary number, street name, and directional information.' }),
    address_line2: z
      .string()
      .max(200)
      .nullable()
      .exactOptional()
      .openapi({
        description: "An optional field containing any information which can't fit into line 1.",
      }),
    address_city: z.string().max(200).nullable().exactOptional(),
    address_state: z.string().max(200).nullable().exactOptional(),
    address_zip: z
      .string()
      .max(40)
      .nullable()
      .exactOptional()
      .openapi({ description: 'Optional postal code.' }),
  })
  .openapi({ required: ['address_line1', 'address_country'] })
  .openapi('AddressFieldsIntl')

const CountryExtendedSchema = z
  .enum([
    'AD',
    'AE',
    'AF',
    'AG',
    'AI',
    'AL',
    'AN',
    'AO',
    'AQ',
    'AR',
    'AT',
    'AU',
    'AW',
    'AZ',
    'BA',
    'BB',
    'BD',
    'BE',
    'BF',
    'BG',
    'BH',
    'BI',
    'BJ',
    'BM',
    'BN',
    'BO',
    'BQ',
    'BR',
    'BS',
    'BT',
    'BW',
    'BY',
    'BZ',
    'CA',
    'CD',
    'CG',
    'CH',
    'CI',
    'CK',
    'CL',
    'CM',
    'CN',
    'CO',
    'CR',
    'CS',
    'CU',
    'CV',
    'CW',
    'CY',
    'CZ',
    'DE',
    'DJ',
    'DK',
    'DM',
    'DO',
    'DZ',
    'EC',
    'EE',
    'EG',
    'EH',
    'ER',
    'ES',
    'ET',
    'FI',
    'FJ',
    'FK',
    'FO',
    'FR',
    'GA',
    'GB',
    'GD',
    'GE',
    'GH',
    'GI',
    'GL',
    'GM',
    'GN',
    'GQ',
    'GR',
    'GS',
    'GT',
    'GW',
    'GY',
    'HK',
    'HN',
    'HR',
    'HT',
    'HU',
    'ID',
    'IE',
    'IL',
    'IN',
    'IO',
    'IQ',
    'IR',
    'IS',
    'IT',
    'JM',
    'JO',
    'JP',
    'KE',
    'KG',
    'KH',
    'KI',
    'KM',
    'KN',
    'KP',
    'KR',
    'KW',
    'KY',
    'KZ',
    'LA',
    'LB',
    'LC',
    'LI',
    'LK',
    'LR',
    'LS',
    'LT',
    'LU',
    'LV',
    'LY',
    'MA',
    'MC',
    'MD',
    'ME',
    'MG',
    'MK',
    'ML',
    'MM',
    'MN',
    'MO',
    'MR',
    'MS',
    'MT',
    'MU',
    'MV',
    'MW',
    'MX',
    'MY',
    'MZ',
    'NA',
    'NE',
    'NF',
    'NG',
    'NI',
    'NL',
    'NO',
    'NP',
    'NR',
    'NU',
    'NZ',
    'OM',
    'PA',
    'PE',
    'PG',
    'PH',
    'PK',
    'PL',
    'PN',
    'PT',
    'PY',
    'QA',
    'RO',
    'RS',
    'RU',
    'RW',
    'SA',
    'SB',
    'SC',
    'SD',
    'SE',
    'SG',
    'SH',
    'SI',
    'SK',
    'SL',
    'SM',
    'SN',
    'SO',
    'SR',
    'SS',
    'ST',
    'SV',
    'SX',
    'SY',
    'SZ',
    'TC',
    'TD',
    'TG',
    'TH',
    'TJ',
    'TK',
    'TL',
    'TM',
    'TN',
    'TO',
    'TR',
    'TT',
    'TV',
    'TW',
    'TZ',
    'UA',
    'UG',
    'UY',
    'UZ',
    'VA',
    'VC',
    'VE',
    'VG',
    'VN',
    'VU',
    'WS',
    'YE',
    'ZA',
    'ZM',
    'ZW',
  ])
  .openapi({
    description:
      'Must be a 2 letter country short-name code (ISO 3166). Does not accept `US`, `AS`, `PR`, `FM`, `GU`, `MH`, `MP`, `PW`, or `VI`. For these addresses, please use the US verification API. Also does not accept `PS`, which is not currently supported.',
  })
  .openapi('CountryExtended')

const AddressEditableIntlSchema = AddressFieldsIntlSchema.and(
  z
    .union([
      z
        .unknown()
        .superRefine((val, ctx) => {
          if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
            if (!Object.hasOwn(val, 'name')) {
              ctx.addIssue({ code: 'custom' })
            }
          }
        })
        .openapi({ title: 'address obj with `name` defined', required: ['name'] }),
      z
        .unknown()
        .superRefine((val, ctx) => {
          if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
            if (!Object.hasOwn(val, 'company')) {
              ctx.addIssue({ code: 'custom' })
            }
          }
        })
        .openapi({ title: 'address obj with `company` defined', required: ['company'] }),
    ])
    .and(
      z
        .object({
          description: ResourceDescriptionSchema.exactOptional(),
          name: z
            .string()
            .max(40)
            .nullable()
            .exactOptional()
            .openapi({
              description:
                'Either `name` or `company` is required, you may also add both. Must be no longer than 40 characters. If both `name` and `company` are provided, they will be printed on two separate lines above the rest of the address.\n',
            }),
          company: CompanySchema.exactOptional(),
          phone: z
            .string()
            .max(40)
            .nullable()
            .exactOptional()
            .openapi({ description: 'Must be no longer than 40 characters.' }),
          email: z
            .string()
            .max(100)
            .nullable()
            .exactOptional()
            .openapi({ description: 'Must be no longer than 100 characters.' }),
          address_country: CountryExtendedSchema.exactOptional(),
          metadata: MetadataSchema.exactOptional(),
        })
        .openapi({ required: [] }),
    ),
).openapi('AddressEditableIntl')

const InlineAddressIntlSchema = AddressEditableIntlSchema.and(
  z.object({}).openapi({ required: ['address_line1', 'address_country'] }),
)
  .and(
    z.xor([
      z
        .unknown()
        .superRefine((val, ctx) => {
          if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
            if (!Object.hasOwn(val, 'address_city')) {
              ctx.addIssue({ code: 'custom' })
            }
            if (!Object.hasOwn(val, 'address_state')) {
              ctx.addIssue({ code: 'custom' })
            }
          }
        })
        .openapi({ required: ['address_city', 'address_state'] }),
      z
        .unknown()
        .superRefine((val, ctx) => {
          if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
            if (!Object.hasOwn(val, 'address_zip')) {
              ctx.addIssue({ code: 'custom' })
            }
          }
        })
        .openapi({ required: ['address_zip'] }),
    ]),
  )
  .openapi('InlineAddressIntl')

const InlineAddressSchema = z
  .xor([InlineAddressUsSchema, InlineAddressIntlSchema])
  .openapi('InlineAddress')

const ReturnAddressSchema = z
  .xor([AdrIdSchema, InlineAddressSchema])
  .openapi({
    description:
      'Specifies the address the return envelope will be sent back to. This is an optional argument that is available if an account is signed up for the return envelope tracking beta, and has `return_envelope`, and `perforated_page` fields populated in the API request.',
  })
  .openapi('ReturnAddress')

const MergeVariablesSchema = z
  .object({})
  .nullable()
  .openapi({
    description:
      'You can input a merge variable payload object to your template or QR code redirect URLs to render dynamic content. For example, if you have a template like: `{{variable_name}}`, pass in `{"variable_name": "Harry"}` to render `Harry`. `merge_variables` must be an object. Any type of value is accepted as long as the object is valid JSON; you can use `strings`, `numbers`, `booleans`, `arrays`, `objects`, or `null`. The max length of the object is 25,000 characters. If you call `JSON.stringify` on your object, it can be no longer than 25,000 characters. Your variable names cannot contain any whitespace or any of the following special characters: `!`, `"`, `#`, `%`, `&`, `\'`, `(`, `)`, `*`, `+`, `,`, `/`, `;`, `<`, `=`, `>`, `@`, `[`, `\\`, `]`, `^`, `` ` ``, `{`, `|`, `}`, `~`. More instructions can be found in <a href="https://help.lob.com/print-and-mail/designing-mail-creatives/dynamic-personalization#using-html-and-merge-variables-10" target="_blank">our guide to using html and merge variables</a>. Depending on your <a href="https://dashboard.lob.com/#/settings/account" target="_blank">Merge Variable strictness</a> setting, if you define variables in your HTML but do not pass them here, you will either receive an error or the variable will render as an empty string. These settings only apply on HTML templates and not on QR code redirect URLs.',
  })
  .openapi('MergeVariables')

const SendDateSchema = z
  .union([z.any(), z.any()])
  .openapi({
    description:
      'A timestamp in ISO 8601 format which specifies a date after the current time and up to 180 days in the future to send the letter off for production. Setting a send date overrides the default [cancellation window](#section/Cancellation-Windows) applied to the mailpiece. Until the `send_date` has passed, the mailpiece can be canceled. If a date in the format `2017-11-01` is passed, it will evaluate to midnight UTC of that date (`2017-11-01T00:00:00.000Z`). If a datetime is passed, that exact time will be used. A `send_date` passed with no time zone will default to UTC, while a `send_date` passed with a time zone will be converted to UTC.',
  })
  .openapi('SendDate')

const MailTypeSchema = z
  .enum(['usps_first_class', 'usps_standard'])
  .default('usps_first_class')
  .openapi({
    description:
      'A string designating the mail postage type:\n* `usps_first_class` - (default)\n* `usps_standard` - a <a href="https://lob.com/pricing/print-mail#compare" target="_blank">cheaper option</a> which is\nless predictable and takes longer to deliver. `usps_standard` cannot be used with `4x6`\npostcards or for any postcards sent outside of the United States.\n',
  })
  .openapi('MailType')

const ColorSchema = z
  .boolean()
  .openapi({
    description:
      'Set this key to `true` if you would like to print in color. Set to `false` if you would like to print in black and white.',
  })
  .openapi('Color')

const DoubleSidedSchema = z
  .boolean()
  .default(true)
  .openapi({
    description:
      'Set this attribute to `true` for double sided printing, or `false` for for single sided printing. Defaults to `true`.',
  })
  .openapi('DoubleSided')

const AddressPlacementSchema = z
  .enum(['top_first_page', 'insert_blank_page', 'bottom_first_page_center', 'bottom_first_page'])
  .default('top_first_page')
  .openapi({
    description:
      'Specifies the location of the address information that will show through the double-window envelope. To see how this will impact your letter design, view our letter template.\nSome values are exclusive to certain customers. Upgrade to the appropriate <a href="https://dashboard.lob.com/#/settings/editions" target="_blank">Print & Mail Edition</a> to gain access.\n  * `top_first_page` - (default) print address information at the top of your provided first page\n  * `insert_blank_page` - insert a blank address page at the beginning of your file (you will be charged for the extra page)\n  * `bottom_first_page_center` - **(exclusive, deprecation planned within a few months)** print address information at the bottom center of your provided first page\n  * `bottom_first_page` - **(exclusive)** print address information at the bottom of your provided first page\n',
  })
  .openapi('AddressPlacement')

const Returned_5Schema = z.xor([z.boolean(), z.object({})]).openapi('Returned_5')

const Returned_2Schema = z
  .object({
    id: z
      .string()
      .max(40)
      .openapi({ description: 'The unique identifier of the custom envelope used.' }),
    url: z.string().openapi({ description: 'The url of the envelope asset used.' }),
    object: z.literal('envelope').default('envelope'),
  })
  .nullable()
  .openapi({
    description:
      'A nested custom envelope object containing more information about the custom envelope used or `null` if a custom envelope was not used.',
    required: ['id', 'url', 'object'],
  })
  .openapi('Returned_2')

const DeletedSchema = z
  .boolean()
  .openapi({ description: 'Only returned if the resource has been successfully deleted.' })
  .openapi('Deleted')

const LobBaseSchema = z
  .object({
    date_created: DateCreatedSchema,
    date_modified: DateModifiedSchema,
    deleted: DeletedSchema.exactOptional(),
    object: ObjectSchema,
  })
  .openapi({ required: ['date_created', 'date_modified', 'object'] })
  .openapi('LobBase')

const AddressUsSchema = LobBaseSchema.and(
  z
    .union([
      z
        .unknown()
        .superRefine((val, ctx) => {
          if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
            if (!Object.hasOwn(val, 'name')) {
              ctx.addIssue({ code: 'custom' })
            }
          }
        })
        .openapi({ title: 'address obj with `name` defined', required: ['name'] }),
      z
        .unknown()
        .superRefine((val, ctx) => {
          if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
            if (!Object.hasOwn(val, 'company')) {
              ctx.addIssue({ code: 'custom' })
            }
          }
        })
        .openapi({ title: 'address obj with `company` defined', required: ['company'] }),
    ])
    .and(
      z
        .object({
          id: AdrIdSchema,
          object: z
            .literal('address')
            .default('address')
            .exactOptional()
            .openapi({ description: 'Value is resource type.' }),
          description: ResourceDescriptionSchema.exactOptional(),
          name: z
            .string()
            .max(40)
            .nullable()
            .exactOptional()
            .openapi({
              description:
                'Either `name` or `company` is required, you may also add both. Must be no longer than 40 characters. If both `name` and `company` are provided, they will be printed on two separate lines above the rest of the address.\n',
            }),
          company: z
            .string()
            .max(40)
            .nullable()
            .exactOptional()
            .openapi({
              description:
                'Either `name` or `company` is required, you may also add both. Must be no longer than 40 characters. If both `name` and `company` are provided, they will be printed on two separate lines above the rest of the address. This field can be used for any secondary recipient information which is not part of the actual mailing address (Company Name, Department, Attention Line, etc).\n',
            }),
          phone: z
            .string()
            .max(40)
            .nullable()
            .exactOptional()
            .openapi({ description: 'Must be no longer than 40 characters.' }),
          email: z
            .string()
            .max(100)
            .nullable()
            .exactOptional()
            .openapi({ description: 'Must be no longer than 100 characters.' }),
          address_line1: z
            .string()
            .max(64)
            .openapi({
              description: 'The primary number, street name, and directional information.',
            }),
          address_line2: z
            .string()
            .max(64)
            .nullable()
            .exactOptional()
            .openapi({
              description:
                "An optional field containing any information which can't fit into line 1.",
            }),
          address_city: z.string().max(200),
          address_state: z
            .string()
            .regex(/^[a-zA-Z]{2}$/)
            .openapi({ description: '2 letter state short-name code' }),
          address_zip: z
            .string()
            .regex(/^\d{5}(-\d{4})?$/)
            .openapi({
              description:
                'Must follow the ZIP format of `12345` or ZIP+4 format of `12345-1234`.\n',
            }),
          address_country: z
            .literal('UNITED STATES')
            .exactOptional()
            .openapi({ description: 'Full name of country' }),
          metadata: MetadataSchema.exactOptional(),
          recipient_moved: z
            .boolean()
            .nullable()
            .exactOptional()
            .openapi({
              description:
                'Only returned for accounts on certain <a href="https://dashboard.lob.com/#/settings/editions" target="_blank">Print &amp; Mail Editions</a>. Value is `true` if the address was altered because the recipient filed for a <a href="#tag/National-Change-of-Address">National Change of Address Linkage (NCOALink)</a>, `false` if the NCOALink check was run but no altered address was found, and `null` if the NCOALink check was not run. The NCOALink check does not happen for non-US addresses, for non-deliverable US addresses, or for addresses created before the NCOALink feature was added to your account.\n',
            }),
        })
        .openapi({
          required: ['id', 'address_line1', 'address_city', 'address_state', 'address_zip'],
        }),
    )
    .openapi({
      required: ['id', 'address_line1', 'address_city', 'address_state', 'address_zip'],
      example: {
        id: 'adr_e68217bd744d65c8',
        description: 'Harry - Office',
        name: 'HARRY ZHANG',
        company: 'LOB',
        phone: '5555555555',
        email: 'harry@lob.com',
        address_line1: '210 KING ST STE 6100',
        address_line2: null,
        address_city: 'SAN FRANCISCO',
        address_state: 'CA',
        address_zip: '94107-1741',
        address_country: 'UNITED STATES',
        metadata: {},
        recipient_moved: false,
        date_created: '2019-08-12T00:16:00.361Z',
        date_modified: '2019-08-12T00:16:00.361Z',
        object: 'address',
      },
    }),
).openapi('AddressUs')

const AddressIntlSchema = LobBaseSchema.and(
  z
    .union([
      z
        .unknown()
        .superRefine((val, ctx) => {
          if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
            if (!Object.hasOwn(val, 'name')) {
              ctx.addIssue({ code: 'custom' })
            }
          }
        })
        .openapi({ title: 'address obj with `name` defined', required: ['name'] }),
      z
        .unknown()
        .superRefine((val, ctx) => {
          if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
            if (!Object.hasOwn(val, 'company')) {
              ctx.addIssue({ code: 'custom' })
            }
          }
        })
        .openapi({ title: 'address obj with `company` defined', required: ['company'] }),
    ])
    .and(
      z
        .object({
          id: AdrIdSchema,
          description: ResourceDescriptionSchema.exactOptional(),
          name: z
            .string()
            .max(40)
            .nullable()
            .exactOptional()
            .openapi({
              description:
                'Either `name` or `company` is required, you may also add both. Must be no longer than 40 characters. If both `name` and `company` are provided, they will be printed on two separate lines above the rest of the address.\n',
            }),
          company: CompanySchema.exactOptional(),
          phone: z
            .string()
            .max(40)
            .nullable()
            .exactOptional()
            .openapi({ description: 'Must be no longer than 40 characters.' }),
          email: z
            .string()
            .max(100)
            .nullable()
            .exactOptional()
            .openapi({ description: 'Must be no longer than 100 characters.' }),
          metadata: MetadataSchema.exactOptional(),
          address_line1: z.string().max(200),
          address_line2: z.string().max(200).nullable().exactOptional(),
          address_city: z.string().max(200).nullable().exactOptional(),
          address_state: z
            .string()
            .max(200)
            .nullable()
            .exactOptional()
            .openapi({ description: 'Will be returned as a full string' }),
          address_zip: z
            .string()
            .max(40)
            .nullable()
            .exactOptional()
            .openapi({ description: 'Optional postal code.' }),
          address_country: z
            .enum([
              'AFGHANISTAN',
              'ALBANIA',
              'ALGERIA',
              'AMERICAN SAMOA',
              'ANDORRA',
              'ANGOLA',
              'ANGUILLA',
              'ANTARCTICA',
              'ANTIGUA AND BARBUDA',
              'ARGENTINA',
              'ARUBA',
              'AUSTRALIA',
              'AUSTRIA',
              'AZERBAIJAN',
              'BAHRAIN',
              'BANGLADESH',
              'BARBADOS',
              'BELARUS',
              'BELGIUM',
              'BELIZE',
              'BENIN',
              'BERMUDA',
              'BHUTAN',
              'BOLIVIA (PLURINATIONAL STATE OF)',
              'BONAIRE, SAINT EUSTATIUS AND SABA',
              'BOSNIA AND HERZEGOVINA',
              'BOTSWANA',
              'BRAZIL',
              'BRITISH INDIAN OCEAN TERRITORY',
              'BRITISH VIRGIN ISLANDS',
              'BRUNEI DARUSSALAM',
              'BULGARIA',
              'BURKINA FASO',
              'BURUNDI',
              'CABO VERDE',
              'CAMBODIA',
              'CAMEROON',
              'CANADA',
              'CAYMAN ISLANDS',
              'CENTRAL AFRICAN REPUBLIC',
              'CHAD',
              'CHILE',
              'CHINA',
              'COLOMBIA',
              'COMOROS',
              'CONGO',
              'CONGO, DEMOCRATIC REPUBLIC OF THE',
              'COOK ISLANDS',
              'COSTA RICA',
              "CÔTE D'IVOIRE",
              'CROATIA',
              'CUBA',
              'CURAÇAO',
              'CYPRUS',
              'CZECH REPUBLIC',
              'DENMARK',
              'DJIBOUTI',
              'DOMINICA',
              'DOMINICAN REPUBLIC',
              'ECUADOR',
              'EGYPT',
              'EL SALVADOR',
              'EQUATORIAL GUINEA',
              'ERITREA',
              'ESTONIA',
              'ESWATINI',
              'ETHIOPIA',
              'FALKLAND ISLANDS (MALVINAS)',
              'FAROE ISLANDS',
              'FIJI',
              'FINLAND',
              'FRANCE',
              'GABON',
              'GAMBIA',
              'GEORGIA',
              'GERMANY',
              'GHANA',
              'GIBRALTAR',
              'GREECE',
              'GREENLAND',
              'GRENADA',
              'GUATEMALA',
              'GUINEA',
              'GUINEA-BISSAU',
              'GUYANA',
              'HAITI',
              'HOLY SEE',
              'HONDURAS',
              'HONG KONG',
              'HUNGARY',
              'ICELAND',
              'INDIA',
              'INDONESIA',
              'IRAN (ISLAMIC REPUBLIC OF)',
              'IRAQ',
              'IRELAND',
              'ISRAEL',
              'ITALY',
              'JAMAICA',
              'JAPAN',
              'JORDAN',
              'KAZAKHSTAN',
              'KENYA',
              'KIRIBATI',
              'KOREA (DEMOCRATIC PEOPLE’S REPUBLIC OF)',
              'KOREA, REPUBLIC OF',
              'KUWAIT',
              'KYRGYZSTAN',
              'LAO PEOPLE’S DEMOCRATIC REPUBLIC',
              'LATVIA',
              'LEBANON',
              'LESOTHO',
              'LIBERIA',
              'LIBYA',
              'LIECHTENSTEIN',
              'LITHUANIA',
              'LUXEMBOURG',
              'MACAO',
              'MACEDONIA',
              'MADAGASCAR',
              'MALAWI',
              'MALAYSIA',
              'MALDIVES',
              'MALI',
              'MALTA',
              'MAURITANIA',
              'MAURITIUS',
              'MEXICO',
              'MOLDOVA, REPUBLIC OF',
              'MONACO',
              'MONGOLIA',
              'MONTENEGRO',
              'MONTSERRAT',
              'MOROCCO',
              'MOZAMBIQUE',
              'MYANMAR',
              'NAMIBIA',
              'NAURU',
              'NEPAL',
              'NETHERLAND ANTILLES',
              'NETHERLANDS',
              'NEW ZEALAND',
              'NICARAGUA',
              'NIGER',
              'NIGERIA',
              'NIUE',
              'NORFOLK ISLAND',
              'NORWAY',
              'OMAN',
              'PAKISTAN',
              'PANAMA',
              'PAPUA NEW GUINEA',
              'PARAGUAY',
              'PERU',
              'PHILIPPINES',
              'PITCAIRN',
              'POLAND',
              'PORTUGAL',
              'QATAR',
              'ROMANIA',
              'RUSSIAN FEDERATION',
              'RWANDA',
              'SAINT HELENA',
              'SAINT KITTS AND NEVIS',
              'SAINT LUCIA',
              'SAINT VINCENT AND THE GRENADINES',
              'SAMOA',
              'SAN MARINO',
              'SAO TOME AND PRINCIPE',
              'SAUDI ARABIA',
              'SENEGAL',
              'SERBIA',
              'SEYCHELLES',
              'SIERRA LEONE',
              'SINGAPORE',
              'SINT MAARTEN',
              'SLOVAKIA',
              'SLOVENIA',
              'SOLOMON ISLANDS',
              'SOMALIA',
              'SOUTH AFRICA',
              'SOUTH GEORGIA AND THE SOUTH SANDWICH ISLANDS',
              'SOUTH SUDAN',
              'SPAIN',
              'SRI LANKA',
              'SUDAN',
              'SURINAME',
              'SWEDEN',
              'SWITZERLAND',
              'SYRIAN ARAB REPUBLIC',
              'TAIWAN',
              'TAJIKISTAN',
              'TANZANIA',
              'THAILAND',
              'THE BAHAMAS',
              'TIMOR-LESTE',
              'TOGO',
              'TOKELAU',
              'TONGA',
              'TRINIDAD AND TOBAGO',
              'TUNISIA',
              'TURKEY',
              'TURKMENISTAN',
              'TURKS AND CAICOS ISLANDS',
              'TUVALU',
              'UGANDA',
              'UKRAINE',
              'UNITED ARAB EMIRATES',
              'UNITED KINGDOM',
              'URUGUAY',
              'UZBEKISTAN',
              'VANUATU',
              'VENEZUELA',
              'VIET NAM',
              'WESTERN SAHARA',
              'YEMEN',
              'ZAMBIA',
              'ZIMBABWE',
            ])
            .openapi({ description: 'Full name of country' }),
          object: z
            .literal('address')
            .default('address')
            .exactOptional()
            .openapi({ description: 'Value is resource type.' }),
        })
        .openapi({ required: ['id', 'address_line1', 'address_country'] }),
    )
    .openapi({
      required: ['id', 'address_line1', 'address_country'],
      example: {
        id: 'adr_e68217bd744d65c8',
        description: 'Harry - Office',
        name: 'Harry Zhang',
        company: 'Lob',
        phone: '5555555555',
        email: 'harry@lob.com',
        metadata: {},
        address_line1: '370 WATER ST',
        address_line2: '',
        address_city: 'SUMMERSIDE',
        address_state: 'PRINCE EDWARD ISLAND',
        address_zip: 'C1N 1C4',
        address_country: 'CANADA',
      },
    }),
).openapi('AddressIntl')

const AddressSchema = z.xor([AddressUsSchema, AddressIntlSchema]).openapi('Address')

const SignedLinkSchema = z
  .string()
  .regex(
    /^https:\/\/lob-assets.com\/(letters|postcards|bank-accounts|checks|self-mailers|cards|order-creatives)\/([a-z]{3,4}_[a-z0-9]{15,16}|[a-z]{3}_[a-z0-9]{26}_[a-z]{4}_[a-z0-9]{26})('|_signature)(.pdf|_thumb_[a-z]+_[0-9]+.png|.png)?(version=[a-z0-9]*&)expires=[0-9]{10}&signature=[a-zA-Z0-9-_]+/,
  )
  .openapi({
    description:
      'A [signed link](#section/Asset-URLs) served over HTTPS. The link returned will expire in 30 days to prevent mis-sharing. Each time a GET request is initiated, a new signed URL will be generated.',
  })
  .openapi('SignedLink')

const ThumbnailSchema = z
  .object({
    small: SignedLinkSchema.exactOptional(),
    medium: SignedLinkSchema.exactOptional(),
    large: SignedLinkSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Thumbnail')

const ExpectedDeliveryDateSchema = z.iso
  .date()
  .openapi({
    description:
      "A date in YYYY-MM-DD format of the mailpiece's expected delivery date based on its `send_date`.",
  })
  .openapi('ExpectedDeliveryDate')

const GeneratedSchema = z
  .object({
    to: AddressSchema,
    carrier: z.literal('USPS').default('USPS'),
    thumbnails: z.array(ThumbnailSchema).exactOptional(),
    expected_delivery_date: ExpectedDeliveryDateSchema.exactOptional(),
    date_created: DateCreatedSchema.exactOptional(),
    date_modified: DateModifiedSchema.exactOptional(),
    deleted: DeletedSchema.exactOptional(),
  })
  .openapi({ required: ['to', 'carrier'] })
  .openapi('Generated')

const FromSchema = z
  .object({ from: AddressSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('From')

const LtrIdSchema = z
  .string()
  .regex(/^ltr_[a-zA-Z0-9]+$/)
  .openapi({ description: 'Unique identifier prefixed with `ltr_`.' })
  .openapi('LtrId')

const TmplIdSchema = z
  .string()
  .regex(/^tmpl_[a-zA-Z0-9]+$/)
  .openapi({
    description:
      'Unique identifier prefixed with `tmpl_`. ID of a saved [HTML template](#section/HTML-Templates).',
  })
  .openapi('TmplId')

const VrsnIdSchema = z
  .string()
  .regex(/^vrsn_[a-zA-Z0-9]+$/)
  .openapi({ description: 'Unique identifier prefixed with `vrsn_`.' })
  .openapi('VrsnId')

const CampaignIdSchema = z
  .string()
  .regex(/^(cmp|camp)_[a-zA-Z0-9]+$/)
  .nullable()
  .openapi({
    title: 'campaign_id',
    description:
      'Denotes resources created by the provided campaign id, prefixed with `cmp_`. In the case of snap packs, booklets, and letters with size `us_legal`, however, the campaign id is prefixed with `camp_` instead of `cmp_`.',
  })
  .openapi('CampaignId')

const LtrUseTypeSchema = z
  .union([z.literal('marketing'), z.literal('operational'), z.literal(null)])
  .nullable()
  .openapi({
    description:
      'The use type for each mailpiece. Can be one of marketing, operational, or null. Null use_type is only allowed if an account default use_type is selected in Account Settings. For more information on use_type, see our  [Help Center article](https://help.lob.com/print-and-mail/building-a-mail-strategy/managing-mail-settings/declaring-mail-use-type).',
  })
  .openapi('LtrUseType')

const StatusSchema = z
  .enum(['processed', 'rendered', 'failed'])
  .openapi({
    description:
      'A string describing the PDF render status:\n* `processed` - the rendering process is currently in progress.\n* `rendered` - a PDF has been successfully rendered of the mailpiece.\n* `failed` - one or more issues has caused the rendering process to fail.\n',
  })
  .openapi('Status')

const FailureReasonErrorSchema = z
  .object({
    url: z.string().nullable().exactOptional().openapi({ description: 'Failed URL of asset' }),
    host: z.string().nullable().exactOptional().openapi({ description: 'URL host' }),
    path: z.string().nullable().exactOptional().openapi({ description: 'URL path' }),
    protocol: z.string().nullable().exactOptional().openapi({ description: 'Network protocol' }),
    remediation: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Instructions on how to resolve the error' }),
    error_type: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'HTTP response status code message or service defined error' }),
    status_code: z
      .number()
      .nullable()
      .exactOptional()
      .openapi({ description: 'HTTP response status codes if the error is asset related' }),
  })
  .openapi({ description: 'Failure error details', required: [] })
  .openapi('FailureReasonError')

const FailureReasonSchema = z
  .object({
    remediation: z
      .string()
      .exactOptional()
      .openapi({ description: 'Instructions on how to resolve the error' }),
    failure_reason: z.string().exactOptional().openapi({ description: 'Reason failure occurred' }),
    errors: z.array(FailureReasonErrorSchema).nullable().exactOptional(),
  })
  .openapi({
    description: 'An object describing the reason for failure if the resource failed to render.',
    required: [],
  })
  .openapi('FailureReason')

const LetterGeneratedBaseSchema = GeneratedSchema.and(FromSchema)
  .and(
    z
      .object({
        url: SignedLinkSchema.exactOptional(),
        id: LtrIdSchema,
        template_id: z
          .any()
          .openapi({ description: 'The unique ID of the HTML template used for the letter.' })
          .and(TmplIdSchema)
          .exactOptional(),
        template_version_id: z
          .string()
          .openapi({
            description:
              'The unique ID of the specific version of the HTML template used for the letter.',
          })
          .and(VrsnIdSchema)
          .exactOptional(),
        campaign_id: CampaignIdSchema.exactOptional(),
        use_type: LtrUseTypeSchema,
        fsc: z
          .boolean()
          .default(false)
          .exactOptional()
          .openapi({
            description:
              'This is in beta. Contact support@lob.com or your account contact to learn more. Not available for `A4` letter size.',
          }),
        status: StatusSchema.exactOptional(),
        failure_reason: FailureReasonSchema.nullable().exactOptional(),
        object: z
          .literal('letter')
          .default('letter')
          .exactOptional()
          .openapi({ description: 'Value is resource type.' }),
      })
      .openapi({ required: ['id', 'from', 'use_type'] }),
  )
  .openapi('LetterGeneratedBase')

type CertifiedType = {
  extra_service: 'certified' | 'certified_return_receipt'
  tracking_number?: string | null
  tracking_events: z.infer<typeof TrackingEventCertifiedSchema>[]
  return_address?: z.infer<typeof ReturnAddressSchema>
  description?: z.infer<typeof ResourceDescriptionSchema>
  metadata?: z.infer<typeof MetadataSchema>
  merge_variables?: z.infer<typeof MergeVariablesSchema>
  send_date?: z.infer<typeof SendDateSchema>
  mail_type?: z.infer<typeof MailTypeSchema>
  color: z.infer<typeof ColorSchema>
  double_sided?: z.infer<typeof DoubleSidedSchema>
  address_placement?: z.infer<typeof AddressPlacementSchema>
  return_envelope?: z.infer<typeof Returned_5Schema>
  perforated_page?: number | null
  custom_envelope?: z.infer<typeof Returned_2Schema>
} & z.infer<typeof LetterGeneratedBaseSchema>

const InputToSchema = z
  .object({
    to: z
      .xor([AdrIdSchema, InlineAddressSchema])
      .exactOptional()
      .openapi({
        description:
          'Must either be an address ID or an inline object with correct address parameters. If an object is used, an address will be created, corrected, and standardized for free whenever possible using our US Address Verification engine (if it is a US address), and returned back with an ID. Depending on your <a href="https://dashboard.lob.com/#/settings/editions" target="_blank">Print & Mail Edition</a>, US addresses may also be run through <a href="#tag/National-Change-of-Address">National Change of Address Linkage(NCOALink)</a>. Non-US addresses will be standardized into uppercase only. If a US address used does not meet your account’s <a href="https://dashboard.lob.com/#/settings/account" target="_blank">US Mail strictness setting</a>, the request will fail. <a href="https://help.lob.com/print-and-mail/all-about-addresses" target="_blank">Lob Guide: Verification of Mailing Addresses</a>',
      }),
  })
  .openapi({ required: [] })
  .openapi('InputTo')

const InputFromUsSchema = z
  .object({
    from: z
      .xor([AdrIdSchema, InlineAddressUsSchema])
      .exactOptional()
      .openapi({
        description:
          '*Required* if `to` address is international. Must either be an address ID or an inline object with correct address parameters. Must either be an address ID or an inline object with correct address parameters. All addresses will be standardized into uppercase without being modified by verification.',
      }),
  })
  .openapi({ required: [] })
  .openapi('InputFromUs')

const PostcardSizeSchema = z
  .enum(['4x6', '6x9', '6x11'])
  .default('4x6')
  .openapi({
    description:
      'Specifies the size of the postcard. Only `4x6` postcards can be sent to international destinations.\n',
  })
  .openapi('PostcardSize')

const HtmlStringSchema = z
  .string()
  .regex(/</)
  .max(10000)
  .openapi({ description: 'An HTML string of under 10,000 characters.' })
  .openapi('HtmlString')

const RemoteFileUrlSchema = z
  .string()
  .regex(/^https:\/\/[-a-zA-Z0-9@:%._+~#=\/]{1,256}.(html?|pdf|png|jpg)$/)
  .openapi({
    description:
      'The location of a remote file. Remote URLs have a 5 MB file size limit and must be downloaded within 40 seconds.\n',
  })
  .openapi('RemoteFileUrl')

const LocalFilePathSchema = z
  .string()
  .regex(/^(?!https:\/\/)[a-zA-Z0-9@:%._+~#=\/]{1,256}.(html?|pdf|png|jpg)$/)
  .openapi({ description: 'The path to a local file.' })
  .openapi('LocalFilePath')

const PscFrontSchema = z
  .xor([HtmlStringSchema, TmplIdSchema, RemoteFileUrlSchema, LocalFilePathSchema])
  .openapi({
    description:
      'The artwork to use as the front of your postcard.\n\nNotes:\n- HTML merge variables should not include delimiting whitespace.\n- PDF, PNG, and JPGs must be sized at 4.25"x6.25", 6.25"x9.25", or 6.25"x11.25" at 300 DPI, while supplied HTML will be rendered to the specified `size`.\n\nSee [here](#section/HTML-Examples) for HTML examples.\n',
  })
  .openapi('PscFront')

const PscBackSchema = z
  .xor([HtmlStringSchema, TmplIdSchema, RemoteFileUrlSchema, LocalFilePathSchema])
  .openapi({
    description:
      'The artwork to use as the back of your postcard.\n\nNotes:\n- HTML merge variables should not include delimiting whitespace.\n- PDF, PNG, and JPGs must be sized at 4.25"x6.25", 6.25"x9.25", or 6.25"x11.25" at 300 DPI, while supplied HTML will be rendered to the specified `size`.\n- Be sure to leave room for address and postage information by following the templates provided here:\n  - <a href="https://s3-us-west-2.amazonaws.com/public.lob.com/assets/templates/postcards/4x6_postcard.pdf" target="_blank">4x6 template</a>\n  - <a href="https://s3-us-west-2.amazonaws.com/public.lob.com/assets/templates/postcards/6x9_postcard.pdf" target="_blank">6x9 template</a>\n  - <a href="https://s3-us-west-2.amazonaws.com/public.lob.com/assets/templates/postcards/6x11_postcard.pdf" target="_blank">6x11 template</a>\n\n\nSee [here](#section/HTML-Examples) for HTML examples.\n',
  })
  .openapi('PscBack')

const PostcardResourceParametersSchema = InputToSchema.and(InputFromUsSchema)
  .and(
    z
      .object({
        size: PostcardSizeSchema.exactOptional(),
        merge_variables: MergeVariablesSchema.exactOptional(),
        front: PscFrontSchema,
        back: PscBackSchema,
      })
      .openapi({ required: ['to', 'front', 'back'] }),
  )
  .openapi('PostcardResourceParameters')

const _0Schema = z
  .object({
    template_id: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'The template ID to associate with the resource proof.' }),
    resource_type: z
      .literal('postcard')
      .exactOptional()
      .openapi({ description: 'The type of resource to generate a proof for.' }),
    resource_parameters: PostcardResourceParametersSchema.exactOptional(),
  })
  .openapi({ title: 'Postcard Resource Proof', required: [] })
  .openapi('_0')

const InputFromSchema = z
  .object({
    from: z
      .xor([AdrIdSchema, InlineAddressSchema])
      .exactOptional()
      .openapi({
        description:
          'Must either be an address ID or an inline object with correct address parameters. Must be a US address unless using a `custom_envelope`. All addresses will be standardized into uppercase without being modified by verification.',
      }),
  })
  .openapi({ required: [] })
  .openapi('InputFrom')

const LtrFileSchema = z
  .xor([
    HtmlStringSchema,
    TmplIdSchema,
    RemoteFileUrlSchema,
    z.string().regex(/^(?!https:\/\/)[a-zA-Z0-9@:%._+~#=\/]{1,256}.(html?|pdf)$/),
  ])
  .openapi({
    description:
      'Notes:\n- HTML merge variables should not include delimiting whitespace.\n- All pages of a supplied PDF file must be sized at 8.5"x11", while supplied HTML will be rendered and trimmed to as many 8.5"x11" pages as necessary.\n- For design specifications, please see our <a href="https://s3-us-west-2.amazonaws.com/public.lob.com/assets/templates/letter_template.pdf" target="_blank">PDF</a> and [HTML](#section/HTML-Examples) templates.\n- If a `custom_envelope` is used, follow <a href="https://s3-us-west-2.amazonaws.com/public.lob.com/assets/templates/letter_custom_envelope.pdf" target="_blank">this template</a>.\n- For domestic destinations, the file limit is 60 pages single-sided or 120 pages double-sided. For international destinations, the file limit is 6 pages single-sided or 12 pages double-sided. PDFs that surpass the file limit will error, while HTML that renders more pages than the file limit will be trimmed.\n- Any letters over 6 pages single-sided or 12 pages double-sided will be placed in a <a href="https://s3-us-west-2.amazonaws.com/public.lob.com/assets/templates/letter_flat_template.pdf" target="_blank">flat envelope</a> instead of the standard double window envelope.\n\nSee <a href="https://lob.com/pricing/print-mail#compare" target="_blank">pricing</a> for extra costs incurred.',
  })
  .openapi('LtrFile')

const LtrSizeSchema = z
  .enum(['us_letter', 'us_legal'])
  .default('us_letter')
  .openapi({
    description:
      'Specifies the size of the letter. It accepts two values `us_letter` and `us_legal`. If the [Lob-Version header](#tag/Versioning-and-Changelog) in the request is set to `2024-01-01` and above, the `size` property is automatically included with the default value of `us_letter`, unless explicitly specified.\n\nPlease note that attempting to include the `size` property in the request with the `Lob-Version` header predating to `2024-01-01` will result in an error.\n',
  })
  .openapi('LtrSize')

const LetterResourceParametersSchema = InputToSchema.and(InputFromSchema)
  .and(
    z
      .object({
        merge_variables: MergeVariablesSchema.exactOptional(),
        file: LtrFileSchema,
        color: ColorSchema.and(z.any().default(false)),
        double_sided: DoubleSidedSchema.exactOptional(),
        address_placement: AddressPlacementSchema.exactOptional(),
        size: LtrSizeSchema.exactOptional(),
      })
      .openapi({ required: ['to', 'from', 'file', 'color'] }),
  )
  .openapi('LetterResourceParameters')

const _1Schema = z
  .object({
    template_id: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'The template ID to associate with the resource proof.' }),
    resource_type: z
      .literal('letter')
      .exactOptional()
      .openapi({ description: 'The type of resource to generate a proof for.' }),
    resource_parameters: LetterResourceParametersSchema.exactOptional(),
  })
  .openapi({ title: 'Letter Resource Proof', required: [] })
  .openapi('_1')

const SelfMailerSizeSchema = z
  .enum(['6x18_bifold', '11x9_bifold', '12x9_bifold', '17.75x9_trifold'])
  .default('6x18_bifold')
  .openapi({
    description:
      'Specifies the size of the self mailer. The `17.75x9_trifold` size is in beta. Contact support@lob.com or your account contact to learn more.',
  })
  .openapi('SelfMailerSize')

const SelfMailerResourceParametersSchema = InputToSchema.and(InputFromUsSchema)
  .and(
    z
      .object({
        size: SelfMailerSizeSchema.exactOptional(),
        merge_variables: MergeVariablesSchema.exactOptional(),
        inside: z
          .xor([HtmlStringSchema, TmplIdSchema, RemoteFileUrlSchema, LocalFilePathSchema])
          .openapi({
            description:
              'The artwork to use as the inside of your self mailer.\n\nNotes:\n- HTML merge variables should not include delimiting whitespace.\n- PDF, PNG, and JPGs must be sized at 6"x18" at 300 DPI, while supplied HTML will be rendered to the specified `size`.\n- Be sure to leave room for address and postage information by following the templates provided here:\n  - <a href="https://s3-us-west-2.amazonaws.com/public.lob.com/assets/templates/self_mailers/6x18_sfm_bifold_template.pdf" target="_blank">6x18 bifold template</a>\n  - <a href="https://s3-us-west-2.amazonaws.com/public.lob.com/assets/templates/self_mailers/12x9_sfm_bifold_template.pdf" target="_blank">12x9 bifold template</a>\n  - <a href="https://s3-us-west-2.amazonaws.com/public.lob.com/assets/templates/self_mailers/17_75x9_trifold_sfm_template.pdf" target="_blank">17.75x9 trifold template</a>\n\n\nSee [here](#section/HTML-Examples) for HTML examples.\n',
          }),
        outside: z
          .xor([HtmlStringSchema, TmplIdSchema, RemoteFileUrlSchema, LocalFilePathSchema])
          .openapi({
            description:
              'The artwork to use as the outside of your self mailer.\n\nNotes:\n- HTML merge variables should not include delimiting whitespace.\n- PDF, PNG, and JPGs must be sized at 6"x18" at 300 DPI, while supplied HTML will be rendered to the specified `size`.\n\nSee [here](#section/HTML-Examples) for HTML examples.\n',
          }),
      })
      .openapi({ required: ['to', 'inside', 'outside'] }),
  )
  .openapi('SelfMailerResourceParameters')

const _2Schema = z
  .object({
    template_id: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'The template ID to associate with the resource proof.' }),
    resource_type: z
      .literal('self_mailer')
      .exactOptional()
      .openapi({ description: 'The type of resource to generate a proof for.' }),
    resource_parameters: SelfMailerResourceParametersSchema.exactOptional(),
  })
  .openapi({ title: 'Self Mailer Resource Proof', required: [] })
  .openapi('_2')

const LobCreditsBalanceSchema = z
  .object({
    balance: z
      .number()
      .openapi({
        description:
          "Account's current balance of Lob Credits. Can be positive, negative, or zero.",
        example: 1000,
      }),
  })
  .openapi({ required: ['balance'] })
  .openapi('LobCreditsBalance')

const DateFilterSchema = z
  .record(z.string(), z.string())
  .openapi({
    description:
      'Filter by ISO-8601 date or datetime, e.g. `{ "gt": "2012-01-01", "lt": "2012-01-31T12:34:56Z" }` where `gt` is >, `lt` is <, `gte` is ≥, and `lte` is ≤.',
  })
  .openapi('DateFilter')

const FailureStatusCodeSchema = z
  .union([
    z.literal(401),
    z.literal(403),
    z.literal(404),
    z.literal(413),
    z.literal(422),
    z.literal(429),
    z.literal(500),
  ])
  .openapi({
    description:
      'A conventional HTTP status code:\n  * `401` - Authorization error with your API key or account\n  * `403` - Forbidden error with your API key or account\n  * `404` - The requested item does not exist\n  * `413` - Payload too large\n  * `422` - The query or body parameters did not pass validation\n  * `429` - Too many requests have been sent with an API key in a given amount of time\n  * `500` - An internal server error occurred, please contact support@lob.com\n',
  })
  .openapi('FailureStatusCode')

const ErrorSchema = z
  .object({
    error: z
      .object({
        message: z
          .string()
          .openapi({
            description: 'A human-readable message with more details about the error',
            example: 'Rate limit exceeded. Please wait 5 seconds and try your request again.',
          }),
        status_code: FailureStatusCodeSchema,
        code: z
          .enum([
            'bad_request',
            'conflict',
            'feature_limit_reached',
            'internal_server_error',
            'invalid',
            'not_deletable',
            'not_found',
            'request_timeout',
            'service_unavailable',
            'unrecognized_endpoint',
            'unsupported_lob_version',
            'address_length_exceeds_limit',
            'bank_account_already_verified',
            'bank_error',
            'billing_address_required',
            'custom_envelope_inventory_depleted',
            'deleted_bank_account',
            'failed_deliverability_strictness',
            'file_pages_below_min',
            'file_pages_exceed_max',
            'file_size_exceeds_limit',
            'foreign_return_address',
            'inconsistent_page_dimensions',
            'invalid_bank_account',
            'invalid_bank_account_verification',
            'invalid_check_international',
            'invalid_country_covid',
            'invalid_file',
            'invalid_file_dimensions',
            'invalid_file_download_time',
            'invalid_file_url',
            'invalid_image_dpi',
            'invalid_international_feature',
            'invalid_perforation_return_envelope',
            'invalid_template_html',
            'mail_use_type_can_not_be_null',
            'merge_variable_required',
            'merge_variable_whitespace',
            'payment_method_unverified',
            'pdf_encrypted',
            'special_characters_restricted',
            'unembedded_fonts',
            'email_required',
            'invalid_api_key',
            'publishable_key_not_allowed',
            'rate_limit_exceeded',
            'unauthorized',
            'unauthorized_token',
          ])
          .openapi({
            description:
              'A pre-defined string identifying an error. Error codes fall into three categories:\n\n**GENERIC**\n* `bad_request` - 422: an invalid request was made. See error message for details.\n* `conflict` - 409/422: this operation would leave data in a conflicted state.\n* `feature_limit_reached` - 403: the account has reached its resource limit and requires upgrading to add more.\n* `internal_server_error` - 500: an error has occured on Lob\'s servers. Please try request again.\n* `invalid` - 422: an invalid request was made. See error message for details.\n* `not_deletable` - 422: an attempt was made to delete a resource, but the resource cannot be deleted.\n* `not_found` - 404: the requested resource was not found.\n* `request_timeout` - 408: the request took too long. Please try again.\n* `service_unavailable` - 503: the Lob servers are temporarily unavailable. Please try agian.\n* `unrecognized_endpoint` - 404: the requested endpoint doesn\'t exist.\n* `unsupported_lob_version` - 422: an unsupported Lob API version was requested.\n\n**ADVANCED**\n* `address_length_exceeds_limit` - 422: the sum of to.address_line1 and to.address_line2 cannot surpass 50 characters.\n* `bank_account_already_verified` - 422: the bank account has already been verified.\n* `bank_error` - 422: there\'s an issue with the bank account.\n* `billing_address_required` - 403: in order to create a live mail piece, your account needs to set up a billing address.\n* `custom_envelope_inventory_depleted` - 422: custom envelope inventory is depleted, and more will need to be ordered.\n* `deleted_bank_account` - 404: checks cannot be created with a deleted bank account.\n* `failed_deliverability_strictness` - 422: the `to` address doesn\'t meet strictness requirements. See <a href="https://dashboard.lob.com/#/settings/account" target="_blank">Account Settings</a> to configure strictness.\n* `file_pages_below_min` - 422: not enough pages.\n* `file_pages_exceed_max` - 422: too many pages.\n* `file_size_exceeds_limit` - 422: the file size is too large. See description for details.\n* `foreign_return_address` - 422: the `from` address must be a US address.\n* `inconsistent_page_dimensions` - 422: all pages of the input file must have the same dimensions.\n* `invalid_bank_account` - 422: the provided bank routing number is invalid.\n* `invalid_bank_account_verification` - 422: verification amounts do not match.\n* `invalid_check_international` - 422: checks cannot be sent internationally.\n* `invalid_country_covid` - 422: the postal service in the specified country is currently unable to process the request due to COVID-19 restrictions.\n* `invalid_file` - 422: the file is invalid.\n* `invalid_file_dimensions` - 422: file dimensions are incorrect for the selected mail type.\n* `invalid_file_download_time` - 422: file download from remote server took too long.\n* `invalid_file_url` - 422: the file URL when creating a resource is invalid.\n* `invalid_image_dpi` - 422: DPI must be at least 300.\n* `invalid_international_feature` - 422: the specified product cannot be sent to the destination.\n* `invalid_perforation_return_envelope` - 422: both `return_envelope` and `perforation` must be used together.\n* `invalid_template_html` - 422: the provided HTML is invalid.\n* `mail_use_type_can_not_be_null` - 422: use_type must be one of "marketing" or "operational". Alternatively, an admin can set the account default use type in Account Settings.\n* `merge_variable_required` - 422: a required merge variable is missing.\n* `merge_variable_whitespace` - 422: merge variable names cannot contain whitespace.\n* `payment_method_unverified` - 401: you must have a verified bank account or credit card to submit live requests.\n* `pdf_encrypted` - 422: an encrypted PDF was provided.\n* `special_characters_restricted` - 422: cannot use special characters for merge variable names.\n* `unembedded_fonts` - 422: the provided PDF contains non-standard unembedded fonts. See description for details.\n\n**AUTHENTICATION**\n* `email_required` - 401: account must have a verified email address before creating live resources.\n* `invalid_api_key` - 401/403: the API key is invalid.\n* `publishable_key_not_allowed` - 403: the requested operation needs a secret key, not a publishable key. See [API Keys](#section/API-Keys) for more information.\n* `rate_limit_exceeded` - 429: requests were sent too quickly and must be slowed down.\n* `unauthorized` - 401: the request isn\'t authorized.\n* `unauthorized_token` - 401: token isn\'t authorized.\n',
          }),
      })
      .openapi({ required: ['message', 'status_code', 'code'] }),
  })
  .openapi({
    description:
      "Lob uses RESTful HTTP response codes to indicate success or failure of an API request. In general, 2xx indicates success, 4xx indicate an input error, and 5xx indicates an error on Lob's end.",
    required: ['error'],
  })
  .openapi('Error')

const CountSchema = z
  .int()
  .openapi({ description: 'number of resources in a set' })
  .openapi('Count')

const ListSchema = z
  .object({
    object: ObjectSchema.exactOptional(),
    next_url: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Url of next page of items in list.' }),
    previous_url: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Url of previous page of items in list.' }),
    count: CountSchema.exactOptional(),
    total_count: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'Indicates the total number of records. Provided when the request specifies an "include" query parameter',
      }),
  })
  .openapi({ description: 'Multiple items returned in order', required: [] })
  .openapi('List')

const AddressEditableSchema = z
  .xor([AddressEditableUsSchema, AddressEditableIntlSchema])
  .openapi('AddressEditable')

const AddressDeletionSchema = z
  .object({ id: AdrIdSchema.exactOptional(), deleted: DeletedSchema.exactOptional() })
  .openapi({
    description:
      "Lob uses RESTful HTTP response codes to indicate success or failure of an API request. In general, 2xx indicates success, 4xx indicate an input error, and 5xx indicates an error on Lob's end.",
    required: [],
  })
  .openapi('AddressDeletion')

const BankIdNoDescriptionSchema = z
  .string()
  .regex(/^bank_[a-zA-Z0-9]+$/)
  .openapi('BankIdNoDescription')

const BankIdSchema = BankIdNoDescriptionSchema.and(
  z.string().openapi({ description: 'Unique identifier prefixed with `bank_`.' }),
).openapi('BankId')

const CentsSchema = z.int().min(1).max(100).openapi('Cents')

const BankAccountVerifySchema = z
  .xor([
    z
      .strictObject({
        amounts: z
          .array(CentsSchema)
          .length(2)
          .openapi({
            description:
              'In live mode, an array containing the two microdeposit amounts (in cents) placed in the bank account. In test mode, no microdeposits will be placed, so any two integers between `1` and `100` will work.',
          }),
      })
      .openapi({ title: 'BankAccountVerifyAmounts', required: ['amounts'] }),
    z
      .strictObject({
        descriptor_code: z
          .string()
          .regex(/^[Ss][Mm][A-Za-z0-9]{4}$/)
          .length(6)
          .openapi({
            description:
              'The 6-character code (beginning with `SM`) found in the statement descriptor of the $0.01 microdeposit placed in the bank account.',
          }),
      })
      .openapi({ title: 'BankAccountVerifyDescriptorCode', required: ['descriptor_code'] }),
  ])
  .openapi('BankAccountVerify')

const BankAccountBaseSchema = z
  .object({
    description: ResourceDescriptionSchema.exactOptional(),
    routing_number: z
      .string()
      .length(9)
      .openapi({
        description:
          'Must be a <a href="https://www.frbservices.org/index.html" target="_blank">valid US routing number</a>.',
      }),
    account_number: z.string().max(17),
    account_type: z
      .enum(['company', 'individual'])
      .openapi({ description: 'The type of entity that holds the account.' }),
    signatory: z
      .string()
      .max(30)
      .openapi({
        description:
          'The signatory associated with your account. This name will be printed on checks created with this bank account. If you prefer to use a custom signature image on your checks instead, please create your bank account from the <a href="https://dashboard.lob.com/#/login" target="_blank">Dashboard</a>.',
      }),
    check_template: z
      .enum(['common', 'jpm'])
      .exactOptional()
      .openapi({
        description:
          'The check template used for printing. The defualt value is `common`. If you bank with JP Morgan Chase and wish to use Positive Pay use the `jpm` template. `jpm` requires additional information to be provided.',
      }),
    fractional_routing_number: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The fractional routing number for your home bank account. Required for the `jpm` check template only. Please contact a bank representative if you do not know the fractional routing number associated with your home bank institution.',
      }),
    city: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The city associated with your home bank account. Required for the `jpm` check template only. Please contact a bank representative if you do not know the city associated with your home bank institution.',
      }),
    state: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The state associated with your home bank account. Required for the `jpm` check template only. Please contact a bank representative if you do not know the state associated with your home bank institution.',
      }),
    zipcode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The zipcode associated with your home bank account. Required for the `jpm` check template only. Please contact a bank representative if you do not know the zipcode associated with your home bank institution.',
      }),
    metadata: MetadataSchema.exactOptional(),
  })
  .openapi({ required: ['routing_number', 'account_number', 'account_type', 'signatory'] })
  .openapi('BankAccountBase')

const BankAccountSchema = BankAccountBaseSchema.and(LobBaseSchema)
  .and(
    z
      .object({
        id: BankIdSchema,
        signature_url: z
          .string()
          .nullable()
          .openapi({ description: 'A [signed link](#section/Asset-URLs) to the signature image.' })
          .and(SignedLinkSchema)
          .exactOptional(),
        bank_name: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'The name of the bank based on the provided routing number, e.g. `JPMORGAN CHASE BANK`.',
          }),
        verified: z
          .boolean()
          .default(false)
          .exactOptional()
          .openapi({
            description:
              'A bank account must be verified before a check can be created. More info [here](#operation/bank_account_verify).',
          }),
        microdeposit_type: z
          .enum(['amounts', 'descriptor_code'])
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'The type of microdeposit verification required for this bank account. Always present when `verified` is `false`; `null` once the account is verified. Use this value to determine which field to submit to `POST /v1/bank_accounts/:id/verify`: `amounts` (an array of two integers) or `descriptor_code` (the 6-character code from the bank statement).',
          }),
        object: z
          .literal('bank_account')
          .default('bank_account')
          .exactOptional()
          .openapi({ description: 'Value is resource type.' }),
      })
      .openapi({ required: ['id'] }),
  )
  .openapi({
    example: {
      id: 'bank_a',
      signature_url:
        'https://lob-assets.com/bank-accounts/asd_asdfghjkqwertyui.pdf?expires=1234567890&signature=aksdf',
      bank_name: 'JPMORGAN CHASE BANK',
      verified: false,
      microdeposit_type: 'amounts',
      object: 'bank_account',
      description: 'Test Bank Account',
      routing_number: '322271627',
      account_number: '123456789',
      signatory: 'Jane Doe',
      account_type: 'individual',
      metadata: { spiffy: 'true' },
      date_created: '2019-08-08T19:34:47.571Z',
      date_modified: '2019-08-08T19:34:47.571Z',
    },
  })
  .openapi('BankAccount')

const BankDeletionSchema = z
  .object({ id: BankIdSchema.exactOptional(), deleted: DeletedSchema.exactOptional() })
  .openapi({
    description:
      "Lob uses RESTful HTTP response codes to indicate success or failure of an API request. In general, 2xx indicates success, 4xx indicate an input error, and 5xx indicates an error on Lob's end.",
    required: [],
  })
  .openapi('BankDeletion')

const BgIdSchema = z
  .string()
  .regex(/^bg_[a-zA-Z0-9]+$/)
  .openapi({ description: 'Unique identifier prefixed with `bg_`.' })
  .openapi('BgId')

const BgDescriptionSchema = z
  .string()
  .max(255)
  .openapi({ description: 'Description of the billing group.' })
  .openapi('BgDescription')

const NameSchema = z
  .string()
  .max(255)
  .openapi({ description: 'Name of the billing group.' })
  .openapi('Name')

const BillingGroupBaseSchema = z
  .object({ description: BgDescriptionSchema.exactOptional(), name: NameSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('BillingGroupBase')

const BillingGroupSchema = BillingGroupBaseSchema.and(
  z
    .object({
      id: BgIdSchema.exactOptional(),
      date_created: DateCreatedSchema.exactOptional(),
      date_modified: DateModifiedSchema.exactOptional(),
      object: z
        .literal('billing_group')
        .default('billing_group')
        .exactOptional()
        .openapi({ description: 'Value is resource type.' }),
    })
    .openapi({ required: [] }),
).openapi('BillingGroup')

const BillingGroupEditableSchema = BillingGroupBaseSchema.and(
  z
    .unknown()
    .superRefine((val, ctx) => {
      if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
        if (!Object.hasOwn(val, 'name')) {
          ctx.addIssue({ code: 'custom' })
        }
      }
    })
    .openapi({ required: ['name'] }),
).openapi('BillingGroupEditable')

const BookletIdSchema = z
  .string()
  .regex(/^ord_[0-9a-f]{26}$/)
  .openapi({ description: 'Unique identifier prefixed with `ord_`.' })
  .openapi('BookletId')

const TrackingEventNormalSchema = TrackingEventBaseSchema.and(
  z
    .object({
      type: z
        .literal('normal')
        .openapi({
          description: 'non-Certified postcards, self mailers, letters, checks and snap packs',
        }),
      name: z
        .enum([
          'Mailed',
          'In Transit',
          'In Local Area',
          'Processed for Delivery',
          'Delivered',
          'Re-Routed',
          'Returned to Sender',
          'International Exit',
        ])
        .openapi({
          description:
            'Name of tracking event (for normal postcards, self mailers, letters, checks and snap packs):\n\n  * `Mailed` - The mailpiece has been handed off to and accepted by USPS\n    and is en route. <a href="https://help.lob.com/print-and-mail/getting-data-and-results/tracking-your-mail#mailed-tracking-events-4" target="_blank">More about\n    Mailed.</a>\n    Note this data is only available in Enterprise editions of\n    Lob. <a href="https://lob.com/support/contact#contact" target="_blank">Contact Sales</a> if\n    you want access to this feature.\n\n  * `In Transit` - The mailpiece is being processed at the entry/origin facility.\n\n  * `In Local Area` - The mailpiece is being processed at the destination facility.\n\n  * `Processed for Delivery` - The mailpiece has been greenlit for\n    delivery at the recipient\'s nearest postal facility. The mailpiece\n    should reach the mailbox within 1 business day of this tracking\n    event.\n\n  * `Delivered` - The mail piece has been delivered to \n    the recipient’s address. The final scan is generated when the mail \n    carrier\'s GPS unit leaves the delivery area.\n\n  * `Re-Routed` - The mailpiece is re-routed due to recipient change of\n    address, address errors, or USPS relabeling of barcode/ID tag\n    area.\n\n  * `Returned to Sender` - The mailpiece is being returned to sender due\n    to barcode, ID tag area, or address errors.\n  \n  * `International Exit` - The mail piece has been processed to \n    ship to a destination abroad. This is typically the last \n    scan a US-originated international mail piece will receive \n    from the USPS.\n\n<a href="https://help.lob.com/print-and-mail/getting-data-and-results/tracking-your-mail#mailed-tracking-events-4" target="_blank">More about tracking</a>\n',
        }),
      details: z
        .literal(null)
        .nullable()
        .exactOptional()
        .openapi({ description: 'Will be `null` for `type=normal` events' }),
      location: z
        .string()
        .nullable()
        .exactOptional()
        .openapi({
          description: 'The zip code in which the scan event occurred. Null for `Mailed` events.\n',
        }),
    })
    .openapi({ required: ['type', 'name'] }),
).openapi('TrackingEventNormal')

const BookletUseTypeSchema = z
  .union([z.literal('marketing'), z.literal('operational'), z.literal(null)])
  .nullable()
  .openapi({
    description:
      'The use type for each mailpiece. Can be one of marketing, operational, or null. Null use_type is only allowed if an account default use_type is selected in Account Settings. For more information on use_type, see our  [Help Center article](https://help.lob.com/print-and-mail/building-a-mail-strategy/managing-mail-settings/declaring-mail-use-type).',
  })
  .openapi('BookletUseType')

const BookletSizeSchema = z
  .literal('8.375x5.375')
  .default('8.375x5.375')
  .openapi({ description: 'Specifies the size of the booklet.\n' })
  .openapi('BookletSize')

const BookletPagesSchema = z
  .int()
  .openapi({
    description:
      'Pages specifies the total number of pages in a booklet, where four pages make up one sheet. Pages must always be in increments of four to maintain booklet integrity. For a booklet with dimensions of 8.375x5.375 inches, we allow for 8, 12, 16, 20, 24, 28, or 32 pages.',
  })
  .openapi('BookletPages')

const BookletSourceMaterialSchema = z
  .literal('60# Gloss Text')
  .default('60# Gloss Text')
  .openapi({
    description:
      "Defines the material used to create the mail piece, specifically for booklets.  This property is directly tied to the size of the booklet, ensuring that the appropriate material is selected based on the booklet's dimensions. For booklets with `size` equal to `8.375x5.375` inches, the default source material is `60# Gloss Text`.",
  })
  .openapi('BookletSourceMaterial')

const BookletGeneratedBaseSchema = GeneratedSchema.and(FromSchema)
  .and(
    z
      .object({
        url: SignedLinkSchema.exactOptional(),
        id: BookletIdSchema,
        template_id: z
          .any()
          .openapi({ description: 'The unique ID of the HTML template used for the booklet.' })
          .and(TmplIdSchema)
          .exactOptional(),
        template_version_id: z
          .string()
          .openapi({
            description:
              'The unique ID of the specific version of the HTML template used for the booklet.',
          })
          .and(VrsnIdSchema)
          .exactOptional(),
        campaign_id: CampaignIdSchema.exactOptional(),
        use_type: BookletUseTypeSchema,
        size: BookletSizeSchema.exactOptional(),
        pages: BookletPagesSchema.exactOptional(),
        fsc: z
          .boolean()
          .default(false)
          .exactOptional()
          .openapi({
            description:
              'This is in beta. Contact support@lob.com or your account contact to learn more.',
          }),
        status: StatusSchema.exactOptional(),
        source_material: BookletSourceMaterialSchema.exactOptional(),
        failure_reason: FailureReasonSchema.nullable().exactOptional(),
        object: z
          .literal('booklet')
          .default('booklet')
          .exactOptional()
          .openapi({ description: 'Value is resource type.' }),
      })
      .openapi({ required: ['id', 'from', 'use_type'] }),
  )
  .openapi('BookletGeneratedBase')

const BookletSchema = z
  .object({
    tracking_events: z
      .array(TrackingEventNormalSchema)
      .exactOptional()
      .openapi({ description: 'An array of tracking events ordered by ascending `time`.' }),
    description: ResourceDescriptionSchema.exactOptional(),
    metadata: MetadataSchema.exactOptional(),
    merge_variables: MergeVariablesSchema.exactOptional(),
    send_date: SendDateSchema.exactOptional(),
    mail_type: MailTypeSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .and(BookletGeneratedBaseSchema)
  .openapi('Booklet')

const BookletDeletionSchema = z
  .object({ id: BookletIdSchema.exactOptional(), deleted: DeletedSchema.exactOptional() })
  .openapi({
    description:
      "Lob uses RESTful HTTP response codes to indicate success or failure of an API request. In general, 2xx indicates success, 4xx indicate an input error, and 5xx indicates an error on Lob's end.",
    required: [],
  })
  .openapi('BookletDeletion')

const PrintSpeedSchema = z
  .literal('core')
  .nullable()
  .default('core')
  .openapi({
    description:
      'A string designating the mail speed type:\n* `core` - 2 production business days\n',
  })
  .openapi('PrintSpeed')

const EditableSchema = z
  .object({
    description: ResourceDescriptionSchema.exactOptional(),
    metadata: MetadataSchema.exactOptional(),
    mail_type: MailTypeSchema.exactOptional(),
    merge_variables: MergeVariablesSchema.exactOptional(),
    send_date: SendDateSchema.exactOptional(),
    print_speed: PrintSpeedSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Editable')

const BookletFileSchema = z
  .xor([
    HtmlStringSchema,
    TmplIdSchema,
    RemoteFileUrlSchema,
    z.string().regex(/^(?!https:\/\/)[a-zA-Z0-9@:%._+~#=\/]{1,256}.(html?|pdf)$/),
  ])
  .openapi({
    description:
      'Notes:\n- HTML merge variables should not include delimiting whitespace.\n- All pages of a supplied PDF file must be sized per the `size` attribute, while supplied HTML will be rendered and trimmed to as many `size` pages as necessary.\n- For design specifications, please see our <a href="https://s3-us-west-2.amazonaws.com/public.lob.com/assets/templates/letter_template.pdf" target="_blank">PDF</a> and [HTML](#section/HTML-Examples) templates.\nSee <a href="https://lob.com/pricing/print-mail#compare" target="_blank">pricing</a> for extra costs incurred.',
  })
  .openapi('BookletFile')

const BillingGroupIdSchema = z
  .string()
  .openapi({
    description:
      'An optional string with the billing group ID to tag your usage with. Is used for billing purposes. Requires special activation to use. See <a href="#tag/Billing-Groups">Billing Group API</a> for more information.',
  })
  .openapi('BillingGroupId')

const QrCodeSchema = z
  .object({
    position: z
      .literal('relative')
      .openapi({
        description:
          "Sets how a QR code is being positioned in the document. Together with this, you should provide one of 'top' or 'bottom', and one of 'left' or 'right'.",
      }),
    top: z
      .number()
      .exactOptional()
      .openapi({
        description:
          'Vertical distance (in inches) to place QR code from the top. Only allowed if "bottom" isn\'t provided.',
      }),
    right: z
      .number()
      .exactOptional()
      .openapi({
        description:
          'Horizontal distance (in inches) to place QR code from the right. Only allowed if "left" isn\'t provided.',
      }),
    left: z
      .number()
      .exactOptional()
      .openapi({
        description:
          'Horizontal distance (in inches) to place QR code from the left. Only allowed if "right" isn\'t provided.',
      }),
    bottom: z
      .number()
      .exactOptional()
      .openapi({
        description:
          'Vertical distance (in inches) to place QR code from the bottom. Only allowed if "top" isn\'t provided.',
      }),
    redirect_url: z
      .string()
      .openapi({
        description:
          'The url to redirect the user when a QR code is scanned. The URL can be a literal URL, a template URL containing merge variables, or consist entirely of merge variables. For example, `https://www.example.com` or `https://www.example.com?q={{name}}` or `{{name}}`, respectively. When a merge variable exists in the URL, it is replaced with data from merge_variables. If the variable does not exist, then nothing with be replaced and the destination URL will be the same as the input URL. More details on merge variables can be found in <a href="https://help.lob.com/print-and-mail/designing-mail-creatives/adding-qr-codes#destination-url-and-redirects" target="_blank">our help center</a>.',
      }),
    width: z
      .number()
      .openapi({
        description:
          'The size (in inches) of the QR code with a minimum of 1 inch. All QR codes are generated as a square.',
      }),
    pages: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Specify the pages where the QR code should be stamped in a comma separated format. Your QR code can be printed in the same position on multiple pages. For postcards, the values should either be "front", "back" (for either front or back) or "front,back" (for the QR code to be printed on both sides). For self-mailers and snap packs, the values should either be "inside", "outside" (for either inside or outside) or "inside,outside" (for the QR code to be printed on both sides). For letters and booklets, the values can be specific page numbers ("1", "3"), page number ranges such as "1-3", or a comma separated combination of both ("1,3,5-7").',
      }),
    logo: z
      .object({
        url: z
          .string()
          .regex(/^https:\/\/[-a-zA-Z0-9@:%._+~#=\/]{1,256}.(png|jpe?g)$/)
          .exactOptional()
          .openapi({
            description:
              'The public URL of the logo image to be retrieved and placed over the center of the QR code.',
          }),
      })
      .exactOptional()
      .openapi({
        description:
          'Allows specifying a logo to be placed over the center of the QR code.  Logos must be in PNG or JPEG format and have a maximum file size of 1 MB.',
        required: [],
      }),
    style: z
      .object({
        background_color: z
          .string()
          .regex(/^#[A-Fa-f0-9]{6}$/)
          .exactOptional()
          .openapi({
            description:
              'The background color of the QR code in hexadecimal format. For example, `#000000` is black and `#FFFFFF` is white.',
          }),
        foreground_color: z
          .string()
          .regex(/^#[A-Fa-f0-9]{6}$/)
          .exactOptional()
          .openapi({
            description:
              'The foreground color of the QR code in hexadecimal format. For example, `#000000` is black and `#FFFFFF` is white.',
          }),
      })
      .exactOptional()
      .openapi({ description: 'Customizes the appearance of the QR code.', required: [] }),
  })
  .openapi({
    description: 'Customize and place a QR code on the creative at the required position.',
    required: ['position', 'redirect_url', 'width'],
  })
  .openapi('QrCode')

const BookletEditableSchema = InputToSchema.and(InputFromSchema)
  .and(EditableSchema)
  .and(
    z
      .object({
        file: BookletFileSchema,
        mail_type: MailTypeSchema.exactOptional(),
        billing_group_id: BillingGroupIdSchema.exactOptional(),
        qr_code: QrCodeSchema.exactOptional(),
        use_type: BookletUseTypeSchema,
        fsc: z
          .boolean()
          .default(false)
          .exactOptional()
          .openapi({
            description:
              'This is in beta. Contact support@lob.com or your account contact to learn more. Not available for `A4` and `us_legal` letter size.',
          }),
        size: BookletSizeSchema,
        pages: BookletPagesSchema,
        source_material: BookletSourceMaterialSchema.exactOptional(),
        print_speed: PrintSpeedSchema.exactOptional(),
      })
      .openapi({ required: ['to', 'from', 'file', 'use_type', 'pages', 'size'] }),
  )
  .openapi('BookletEditable')

const BuckslipDescriptionSchema = z
  .string()
  .max(255)
  .nullable()
  .openapi({ description: 'Description of the buckslip.' })
  .openapi('BuckslipDescription')

const BuckslipBaseSchema = z
  .object({
    description: BuckslipDescriptionSchema.exactOptional(),
    size: z
      .literal('8.75x3.75')
      .default('8.75x3.75')
      .exactOptional()
      .openapi({ description: 'The size of the buckslip' }),
  })
  .openapi({ required: [] })
  .openapi('BuckslipBase')

const BuckslipIdSchema = z
  .string()
  .regex(/^bck_[a-zA-Z0-9]+$/)
  .openapi({ description: 'Unique identifier prefixed with `bck_`.' })
  .openapi('BuckslipId')

const BoIdSchema = z
  .string()
  .regex(/^bo_[a-zA-Z0-9]+$/)
  .openapi({ description: 'Unique identifier prefixed with `bo_`.' })
  .openapi('BoId')

const BuckslipOrderSchema = LobBaseSchema.and(
  z
    .object({
      id: BoIdSchema.exactOptional(),
      buckslip_id: BuckslipIdSchema.exactOptional(),
      status: z
        .enum(['pending', 'printing', 'available', 'cancelled', 'depleted'])
        .exactOptional()
        .openapi({ description: 'The status of the buckslip order.' }),
      quantity_ordered: z
        .number()
        .default(0)
        .exactOptional()
        .openapi({ description: 'The quantity of buckslips ordered.' }),
      unit_price: z
        .number()
        .default(0)
        .exactOptional()
        .openapi({ description: 'The unit price for the buckslip order.' }),
      inventory: z
        .number()
        .default(0)
        .exactOptional()
        .openapi({ description: 'The inventory of the buckslip order.' }),
      cancelled_reason: z
        .string()
        .exactOptional()
        .openapi({ description: 'The reason for cancellation.' }),
      availability_date: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          description: 'A timestamp in ISO 8601 format of the date the resource was created.',
        }),
      expected_availability_date: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({ description: 'The fixed deadline for the buckslips to be printed.' }),
    })
    .openapi({ required: [] }),
).openapi('BuckslipOrder')

const BuckslipSchema = LobBaseSchema.and(BuckslipBaseSchema)
  .and(
    z
      .unknown()
      .superRefine((val, ctx) => {
        if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
          if (!Object.hasOwn(val, 'description')) {
            ctx.addIssue({ code: 'custom' })
          }
        }
      })
      .openapi({ required: ['description'] }),
  )
  .and(
    z
      .object({
        id: BuckslipIdSchema,
        auto_reorder: z
          .boolean()
          .default(false)
          .openapi({ description: 'True if the buckslips should be auto-reordered.' }),
        reorder_quantity: z
          .int()
          .nullable()
          .openapi({ description: 'The number of buckslips to be reordered.' }),
        threshold_amount: z
          .int()
          .default(0)
          .openapi({ description: 'The threshold amount of the buckslip' }),
        url: z.url().min(1).max(2083).openapi({ description: 'The signed link for the buckslip.' }),
        raw_url: z.url().min(1).max(2083).openapi({ description: 'The raw URL of the buckslip.' }),
        front_original_url: z
          .url()
          .min(1)
          .max(2083)
          .openapi({ description: 'The original URL of the front template.' }),
        back_original_url: z
          .url()
          .min(1)
          .max(2083)
          .openapi({ description: 'The original URL of the back template.' }),
        thumbnails: z.array(ThumbnailSchema),
        available_quantity: z
          .number()
          .default(0)
          .openapi({ description: 'The available quantity of buckslips.' }),
        allocated_quantity: z
          .number()
          .default(0)
          .openapi({ description: 'The allocated quantity of buckslips.' }),
        onhand_quantity: z
          .number()
          .default(0)
          .openapi({ description: 'The onhand quantity of buckslips.' }),
        pending_quantity: z
          .number()
          .default(0)
          .openapi({ description: 'The pending quantity of buckslips.' }),
        projected_quantity: z
          .number()
          .default(0)
          .openapi({ description: 'The sum of pending and onhand quantities of buckslips.' }),
        buckslip_orders: z
          .array(BuckslipOrderSchema)
          .min(0)
          .openapi({
            description: 'An array of buckslip orders that are associated with the buckslip.',
          }),
        stock: z.enum(['text', 'cover']).openapi({ title: 'The stock of the buckslip.' }),
        weight: z.literal('80#').openapi({ title: 'The weight of the buckslip.' }),
        finish: z.enum(['gloss', 'matte']).openapi({ title: 'The finish of the buckslip.' }),
        status: z
          .enum(['processed', 'rendered', 'failed'])
          .openapi({ title: 'The status of the buckslip.' }),
        object: z.literal('buckslip').default('buckslip').openapi({ description: 'object' }),
      })
      .openapi({
        required: [
          'id',
          'auto_reorder',
          'reorder_quantity',
          'threshold_amount',
          'url',
          'raw_url',
          'front_original_url',
          'back_original_url',
          'thumbnails',
          'available_quantity',
          'allocated_quantity',
          'onhand_quantity',
          'pending_quantity',
          'projected_quantity',
          'buckslip_orders',
          'stock',
          'weight',
          'finish',
          'status',
          'object',
        ],
      }),
  )
  .openapi('Buckslip')

const BuckslipEditableSchema = BuckslipBaseSchema.and(
  z
    .object({
      front: z
        .xor([RemoteFileUrlSchema, LocalFilePathSchema])
        .openapi({ description: 'A PDF template for the front of the buckslip' }),
      back: z
        .xor([RemoteFileUrlSchema, LocalFilePathSchema])
        .exactOptional()
        .openapi({ description: 'A PDF template for the back of the buckslip' }),
    })
    .openapi({ required: ['front'] }),
).openapi('BuckslipEditable')

const BuckslipDeletionSchema = z
  .object({ id: BuckslipIdSchema.exactOptional(), deleted: DeletedSchema.exactOptional() })
  .openapi({
    description:
      "Lob uses RESTful HTTP response codes to indicate success or failure of an API request. In general, 2xx indicates success, 4xx indicate an input error, and 5xx indicates an error on Lob's end.",
    required: [],
  })
  .openapi('BuckslipDeletion')

const BuckslipUpdatableSchema = z
  .object({
    description: BuckslipDescriptionSchema.exactOptional(),
    auto_reorder: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Allows for auto reordering' }),
    reorder_quantity: z
      .number()
      .min(5000)
      .max(10000000)
      .exactOptional()
      .openapi({
        description:
          'The quantity of items to be reordered (only required when auto_reorder is true).',
      }),
  })
  .openapi({ required: [] })
  .openapi('BuckslipUpdatable')

const BuckslipOrderEditableSchema = z
  .object({
    quantity: z
      .int()
      .min(5000)
      .max(10000000)
      .openapi({ description: 'The quantity of buckslips in the order (minimum 5,000).' }),
  })
  .openapi({ required: ['quantity'] })
  .openapi('BuckslipOrderEditable')

const RecipientSchema = z
  .string()
  .max(500)
  .nullable()
  .openapi({ description: "The intended recipient, typically a person's or firm's name." })
  .openapi('Recipient')

const PrimaryLineUsSchema = z
  .string()
  .max(200)
  .openapi({
    description:
      'The primary delivery line (usually the street address) of the address.\nCombination of the following applicable `components`:\n* `primary_number`\n* `street_predirection`\n* `street_name`\n* `street_suffix`\n* `street_postdirection`\n* `secondary_designator`\n* `secondary_number`\n* `pmb_designator`\n* `pmb_number`\n',
  })
  .openapi('PrimaryLineUs')

const SecondaryLineSchema = z
  .string()
  .max(200)
  .openapi({
    description:
      'The secondary delivery line of the address. This field is typically empty but may contain information if `primary_line` is too long.\n',
  })
  .openapi('SecondaryLine')

const UrbanizationSchema = z
  .string()
  .max(200)
  .openapi({
    description:
      'Only present for addresses in Puerto Rico. An urbanization refers to an area, sector, or development within a city. See <a href="https://pe.usps.com/text/pub28/28api_008.htm#:~:text=I51.,-4%20Urbanizations&text=In%20Puerto%20Rico%2C%20identical%20street,placed%20before%20the%20urbanization%20name." target="_blank">USPS documentation</a> for clarification.\n',
  })
  .openapi('Urbanization')

const CityNoDescriptionSchema = z.string().max(200).openapi('CityNoDescription')

const ZipCodeSchema = z
  .string()
  .regex(/^\d{5}((-)?\d{4})?$/)
  .openapi('ZipCode')

const MultipleComponentsSchema = z
  .union([
    z
      .unknown()
      .superRefine((val, ctx) => {
        if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
          if (!Object.hasOwn(val, 'city')) {
            ctx.addIssue({ code: 'custom' })
          }
          if (!Object.hasOwn(val, 'state')) {
            ctx.addIssue({ code: 'custom' })
          }
        }
      })
      .openapi({
        title: 'US verification object with `city` and `state`',
        required: ['city', 'state'],
      }),
    z
      .unknown()
      .superRefine((val, ctx) => {
        if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
          if (!Object.hasOwn(val, 'zip_code')) {
            ctx.addIssue({ code: 'custom' })
          }
        }
      })
      .openapi({ title: 'US verification object with `zip_code`', required: ['zip_code'] }),
  ])
  .and(
    z
      .object({
        recipient: RecipientSchema.exactOptional(),
        primary_line: PrimaryLineUsSchema,
        secondary_line: SecondaryLineSchema.exactOptional(),
        urbanization: UrbanizationSchema.exactOptional(),
        city: CityNoDescriptionSchema.and(
          z
            .string()
            .openapi({
              description:
                'The name of the city. `city` and `state` are required if no `zip_code` is passed.',
            }),
        ).exactOptional(),
        state: z
          .string()
          .max(50)
          .exactOptional()
          .openapi({
            description:
              'The <a href="https://en.wikipedia.org/wiki/ISO_3166-2:US" target="_blank">ISO 3166-2</a> two letter code or subdivision name for the state. `city` and `state` are required if no `zip_code` is passed.',
          }),
        zip_code: z
          .any()
          .openapi({
            description:
              'Required if `city` and `state` are not passed in. If included, must be formatted as a US ZIP or ZIP+4 (e.g. `94107`, `941072282`, `94107-2282`).',
          })
          .and(ZipCodeSchema)
          .exactOptional(),
      })
      .openapi({ required: ['primary_line'] }),
  )
  .openapi('MultipleComponents')

const MultipleComponentsListSchema = z
  .object({ addresses: z.array(MultipleComponentsSchema).min(1).max(20) })
  .openapi({ required: ['addresses'] })
  .openapi('MultipleComponentsList')

const UsVerIdSchema = z
  .string()
  .regex(/^us_ver_[a-zA-Z0-9_]+$/)
  .openapi({ description: 'Unique identifier prefixed with `us_ver_`.' })
  .openapi('UsVerId')

const PrimaryNumberSchema = z
  .string()
  .openapi({
    description:
      'The numeric or alphanumeric part of an address preceding the street name. Often the house, building, or PO Box number.',
  })
  .openapi('PrimaryNumber')

const StreetNameSchema = z
  .string()
  .openapi({ description: 'The name of the street.' })
  .openapi('StreetName')

const CitySchema = CityNoDescriptionSchema.and(
  z.string().openapi({ description: 'The name of the city.' }),
).openapi('City')

const StateSchema = z
  .string()
  .max(2)
  .openapi({
    description:
      'The <a href="https://en.wikipedia.org/wiki/ISO_3166-2" target="_blank">ISO 3166-2</a> two letter code for the state.\n',
  })
  .openapi('State')

const ZipCodePlus_4Schema = z
  .string()
  .regex(/^\d{4}$/)
  .openapi('ZipCodePlus_4')

const ZipCodeTypeSchema = z
  .enum(['standard', 'po_box', 'unique', 'military', ''])
  .openapi({
    description:
      'A description of the ZIP code type. For more detailed information about\neach ZIP code type, see [US Verification Details](#tag/US-Verification-Types).\n',
  })
  .openapi('ZipCodeType')

const CountySchema = z
  .string()
  .openapi({ description: 'County name of the address city.' })
  .openapi('County')

const CountyFipsSchema = z
  .string()
  .regex(/\d{5}/)
  .openapi({
    description:
      'A 5-digit <a href="https://en.wikipedia.org/wiki/FIPS_county_code" target="_blank">FIPS county code</a> which uniquely identifies `components[county]`. It consists of a 2-digit state code and a 3-digit county code.\n',
  })
  .openapi('CountyFips')

const UsComponentsSchema = z
  .object({
    primary_number: PrimaryNumberSchema,
    street_predirection: z
      .enum(['N', 'S', 'E', 'W', 'NE', 'SW', 'SE', 'NW', ''])
      .openapi({
        description:
          'Geographic direction preceding a street name (`N`, `S`, `E`, `W`, `NE`, `SW`, `SE`, `NW`).\n',
      }),
    street_name: StreetNameSchema,
    street_suffix: z
      .string()
      .openapi({
        description:
          'The standard USPS abbreviation for the street suffix (`ST`, `AVE`, `BLVD`, etc).\n',
      }),
    street_postdirection: z
      .enum(['N', 'S', 'E', 'W', 'NE', 'SW', 'SE', 'NW', ''])
      .openapi({
        description:
          'Geographic direction following a street name (`N`, `S`, `E`, `W`, `NE`, `SW`, `SE`, `NW`).\n',
      }),
    secondary_designator: z
      .string()
      .openapi({
        description:
          'The standard USPS abbreviation describing the `components[secondary_number]` (`STE`, `APT`, `BLDG`, etc).\n',
      }),
    secondary_number: z.string().openapi({ description: 'Number of the apartment/unit/etc.\n' }),
    pmb_designator: z
      .string()
      .openapi({
        description:
          'Designator of a <a href="https://en.wikipedia.org/wiki/Commercial_mail_receiving_agency" target="_blank">CMRA-authorized</a> private mailbox.\n',
      }),
    pmb_number: z
      .string()
      .openapi({
        description:
          'Number of a <a href="https://en.wikipedia.org/wiki/Commercial_mail_receiving_agency" target="_blank">CMRA-authorized</a> private mailbox.\n',
      }),
    extra_secondary_designator: z
      .string()
      .openapi({
        description:
          'An extra (often unnecessary) secondary designator provided with the input address.\n',
      }),
    extra_secondary_number: z
      .string()
      .openapi({
        description:
          'An extra (often unnecessary) secondary number provided with the input address.\n',
      }),
    city: CitySchema,
    state: StateSchema,
    zip_code: z
      .string()
      .regex(/^\d{5}$/)
      .openapi({ description: 'The 5-digit ZIP code' }),
    zip_code_plus_4: z
      .any()
      .openapi({ description: 'The 4-digit ZIP add-on code' })
      .and(ZipCodePlus_4Schema),
    zip_code_type: ZipCodeTypeSchema,
    delivery_point_barcode: z
      .string()
      .openapi({
        description:
          'A 12-digit identifier that uniquely identifies a delivery point (location where mail can be sent and received). It consists of the 5-digit ZIP code (`zip_code`), 4-digit ZIP+4 add-on (`zip_code_plus_4`), 2-digit delivery point, and 1-digit delivery point check digit.\n',
      }),
    address_type: z
      .enum(['residential', 'commercial', ''])
      .openapi({
        description:
          'Uses USPS\'s <a href="https://www.usps.com/nationalpremieraccounts/rdi.htm" target="_blank">Residential Delivery Indicator (RDI)</a> to identify\nwhether an address is classified as residential or\nbusiness. Possible values are:\n* `residential` –– The address is residential or a PO Box.\n* `commercial` –– The address is commercial.\n* `\'\'` –– Not enough information provided to be determined.\n',
      }),
    record_type: z
      .enum(['street', 'highrise', 'firm', 'po_box', 'rural_route', 'general_delivery', ''])
      .openapi({
        description:
          'A description of the type of address. Populated if a DPV match is made (`deliverability_analysis[dpv_confirmation]`\nis `Y`, `S`, or `D`). For more detailed information about each record type, see\n[US Verification Details](#tag/US-Verification-Types).\n',
      }),
    default_building_address: z
      .boolean()
      .openapi({
        description:
          'Designates whether or not the address is the default address for a building containing multiple delivery points.\n',
      }),
    county: CountySchema,
    county_fips: CountyFipsSchema,
    carrier_route: z
      .string()
      .openapi({
        description: 'A 4-character code assigned to a mail delivery route within a ZIP code.\n',
      }),
    carrier_route_type: z
      .enum(['city_delivery', 'rural_route', 'highway_contract', 'po_box', 'general_delivery'])
      .openapi({
        description:
          'The type of `components[carrier_route]`. For more detailed information about\neach carrier route type, see [US Verification Details](#tag/US-Verification-Types).\n',
      }),
    po_box_only_flag: z
      .enum(['Y', 'N', ''])
      .openapi({
        description:
          'Indicates the mailing facility for an address only supports PO Box deliveries and other forms of mail delivery are not available.\n',
      }),
    latitude: z
      .float32()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'A positive or negative decimal indicating the geographic latitude of the address, specifying the north-to-south position of a location. This should be used with `longitude` to pinpoint locations on a map. Will not be returned for undeliverable addresses or military addresses (state is `AA`, `AE`, or `AP`).\n',
      }),
    longitude: z
      .float32()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'A positive or negative decimal indicating the geographic longitude of the address, specifying the north-to-south position of a location. This should be used with `latitude` to pinpoint locations on a map. Will not be returned for undeliverable addresses or military addresses (state is `AA`, `AE`, or `AP`).\n',
      }),
  })
  .openapi({
    description: 'A nested object containing a breakdown of each component of an address.',
    required: [
      'primary_number',
      'street_predirection',
      'street_name',
      'street_suffix',
      'street_postdirection',
      'secondary_designator',
      'secondary_number',
      'pmb_designator',
      'pmb_number',
      'extra_secondary_designator',
      'extra_secondary_number',
      'city',
      'state',
      'zip_code',
      'zip_code_plus_4',
      'zip_code_type',
      'delivery_point_barcode',
      'address_type',
      'record_type',
      'default_building_address',
      'county',
      'county_fips',
      'carrier_route',
      'carrier_route_type',
      'po_box_only_flag',
    ],
  })
  .openapi('UsComponents')

const DpvFootnoteSchema = z
  .enum(['AA', 'A1', 'BB', 'CC', 'N1', 'F1', 'G1', 'U1', 'M1', 'M3', 'P1', 'P3', 'R1', 'R7', 'RR'])
  .openapi({ example: 'AA' })
  .openapi('DpvFootnote')

const DeliverabilityAnalysisSchema = z
  .object({
    dpv_confirmation: z
      .enum(['Y', 'S', 'D', 'N', ''])
      .openapi({
        description:
          "Result of Delivery Point Validation (DPV), which determines whether or not the address is deliverable by the USPS. Possible values are:\n* `Y` –– The address is deliverable by the USPS.\n* `S` –– The address is deliverable by removing the provided secondary unit designator. This information may be incorrect or unnecessary.\n* `D` –– The address is deliverable to the building's default address but is missing a secondary unit designator and/or number.\n  There is a chance the mail will not reach the intended recipient.\n* `N` –– The address is not deliverable according to the USPS, but parts of the address are valid (such as the street and ZIP code).\n* `''` –– This address is not deliverable. No matching street could be found within the city or ZIP code.\n",
        example: 'Y',
      }),
    dpv_cmra: z
      .enum(['Y', 'N', ''])
      .openapi({
        description:
          'Indicates whether or not the address is <a href="https://en.wikipedia.org/wiki/Commercial_mail_receiving_agency" target="_blank">CMRA-authorized</a>. Possible values are:\n* `Y` –– Address is CMRA-authorized.\n* `N` –– Address is not CMRA-authorized.\n* `\'\'` –– A DPV match is not made (`deliverability_analysis[dpv_confirmation]` is `N` or an empty string).\n',
        example: 'N',
      }),
    dpv_vacant: z
      .enum(['Y', 'N', ''])
      .openapi({
        description:
          "Indicates that an address was once deliverable, but has become vacant and is no longer receiving deliveries. Possible values are:\n* `Y` –– Address is vacant.\n* `N` –– Address is not vacant.\n* `''` –– A DPV match is not made (`deliverability_analysis[dpv_confirmation]` is `N` or an empty string).\n",
        example: 'N',
      }),
    dpv_active: z
      .enum(['Y', 'N', ''])
      .openapi({
        description:
          "Corresponds to the USPS field `dpv_no_stat`. Indicates that an address has been vacated in the recent past, and is no longer receiving deliveries. If it's been unoccupied for 90+ days, or temporarily vacant, this will be flagged. Possible values are:\n* `Y` –– Address is active.\n* `N` –– Address is not active.\n* `''` –– A DPV match is not made (`deliverability_analysis[dpv_confirmation]` is `N` or an empty string).\n",
        example: 'Y',
      }),
    dpv_inactive_reason: z
      .enum(['01', '02', '03', '04', '05', '06', ''])
      .openapi({
        description:
          "Indicates the reason why an address is vacant or no longer receiving deliveries. Possible values are:\n* `01` –– Address does not receive mail from the USPS directly, but is serviced by a drop address.\n* `02` –– Address not yet deliverable.\n* `03` –– A DPV match is not made (`deliverability_analysis[dpv_confirmation]` is `N` or an empty string).\n* `04` –– Address is a College, Military Zone, or other type.\n* `05` –– Address no longer receives deliveries.\n* `06` –– Address is missing required secondary information.\n* `''` –– A DPV match is not made or the address is active.\n",
        example: '06',
      }),
    dpv_throwback: z
      .enum(['Y', 'N', ''])
      .openapi({
        description:
          "Indicates a street address for which mail is delivered to a PO Box. Possible values are:\n* `Y` –– Address is a PO Box throwback delivery point.\n* `N` –– Address is not a PO Box throwback delivery point.\n* `''` –– A DPV match is not made (`deliverability_analysis[dpv_confirmation]` is `N` or an empty string).\n",
        example: 'N',
      }),
    dpv_non_delivery_day_flag: z
      .enum(['Y', 'N', ''])
      .openapi({
        description:
          "Indicates whether deliveries are not performed on one or more days of the week at an address. Possible values are:\n* `Y` –– Mail delivery does not occur on some days of the week.\n* `N` –– Mail delivery occurs every day of the week.\n* `''` –– A DPV match is not made (`deliverability_analysis[dpv_confirmation]` is `N` or an empty string).\n",
        example: 'N',
      }),
    dpv_non_delivery_day_values: z
      .string()
      .openapi({
        description:
          "Indicates days of the week (starting on Sunday) deliveries are not performed at an address. For example:\n* `YNNNNNN` –– Mail delivery does not occur on Sunday's.\n* `NYNNNYN` –– Mail delivery does not occur on Monday's or Friday's.\n* `''` –– A DPV match is not made (`deliverability_analysis[dpv_confirmation]` is `N` or an empty string) or address receives mail every day of the week (`deliverability_analysis[dpv_non_delivery_day_flag]` is `N` or an empty string).\n",
        example: 'YNNNNNN',
      }),
    dpv_no_secure_location: z
      .enum(['Y', 'N', ''])
      .openapi({
        description:
          "Indicates packages to this address will not be left due to security concerns. Possible values are:\n* `Y` –– Address does not have a secure mailbox.\n* `N` –– Address has a secure mailbox.\n* `''` –– A DPV match is not made (`deliverability_analysis[dpv_confirmation]` is `N` or an empty string).\n",
        example: 'N',
      }),
    dpv_door_not_accessible: z
      .enum(['Y', 'N', ''])
      .openapi({
        description:
          "Indicates the door of the address is not accessible for mail delivery. Possible values are:\n* `Y` –– Door is not accessible.\n* `N` –– Door is accessible.\n* `''` –– A DPV match is not made (`deliverability_analysis[dpv_confirmation]` is `N` or an empty string).\n",
        example: 'N',
      }),
    dpv_footnotes: z
      .array(DpvFootnoteSchema)
      .openapi({
        description:
          'An array of 2-character strings that gives more insight into how `deliverability_analysis[dpv_confirmation]` was determined. Will always include at least 1 string, and can include up to 3. For details, see [US Verification Details](#tag/US-Verification-Types).\n',
        example: ['AA', 'BB'],
      }),
    ews_match: z
      .boolean()
      .openapi({
        description:
          'Indicates whether or not an address has been flagged in the <a href="https://docs.informatica.com/data-engineering/data-engineering-quality/10-4-0/address-validator-port-reference/postal-carrier-certification-data-ports/early-warning-system-return-code.html" target="_blank">Early Warning System</a>, meaning the address is under development and not yet ready to receive mail. However, it should become available in a few months.\n',
        example: false,
      }),
    lacs_indicator: z
      .enum(['Y', 'N', ''])
      .openapi({
        description:
          'Indicates whether this address has been converted by\n<a href="https://postalpro.usps.com/address-quality/lacslink" target="_blank">LACS<sup>Link</sup></a>.\nLACS<sup>Link</sup> corrects outdated addresses into their modern counterparts.\nPossible values are:\n* `Y` –– New address produced with a matching record in LACS<sup>Link</sup>.\n* `N` –– New address could not be produced with a matching record in LACS<sup>Link</sup>.\n* `\'\'` –– A DPV match is not made (`deliverability_analysis[dpv_confirmation]` is `N` or an empty string).\n',
        example: '',
      }),
    lacs_return_code: z
      .string()
      .openapi({
        description:
          "A code indicating how `deliverability_analysis[lacs_indicator]` was determined.\nPossible values are:\n* `A` — A new address was produced because a match was found in LACS<sup>Link</sup>.\n* `92` — A LACS<sup>Link</sup> record was matched after dropping secondary information.\n* `14` — A match was found in LACS<sup>Link</sup>, but could not be converted to a deliverable address.\n* `00` — A match was not found in LACS<sup>Link</sup>, and no new address was produced.\n* `''` — LACS<sup>Link</sup> was not attempted.\n",
        example: '',
      }),
    suite_return_code: z
      .enum(['A', '00', ''])
      .openapi({
        description:
          'A return code that indicates whether the address was matched and corrected by\n<a href="https://postalpro.usps.com/address-quality-solutions/suitelink" target="_blank">Suite<sup>Link</sup></a>.\nSuite<sup>Link</sup> attempts to provide secondary information to business addresses.\nPossible values are:\n* `A` –– A Suite<sup>Link</sup> match was found and secondary information was added.\n* `00` –– A Suite<sup>Link</sup> match could not be found and no secondary information was added.\n* `\'\'` –– Suite<sup>Link</sup> lookup was not attempted.\n',
        example: '',
      }),
  })
  .openapi({
    description: 'A nested object containing a breakdown of the deliverability of an address.',
    required: [
      'dpv_confirmation',
      'dpv_cmra',
      'dpv_vacant',
      'dpv_active',
      'dpv_inactive_reason',
      'dpv_throwback',
      'dpv_non_delivery_day_flag',
      'dpv_non_delivery_day_values',
      'dpv_no_secure_location',
      'dpv_door_not_accessible',
      'dpv_footnotes',
      'ews_match',
      'lacs_indicator',
      'lacs_return_code',
      'suite_return_code',
    ],
  })
  .openapi('DeliverabilityAnalysis')

const LobConfidenceScoreSchema = z
  .object({
    score: z
      .float32()
      .min(0)
      .max(100)
      .nullable()
      .default(null)
      .openapi({
        description:
          'A numerical score between 0 and 100 that represents the percentage of mailpieces Lob has sent to this addresses that have been delivered successfully over the past 2 years. Will be `null` if no tracking data exists for this address.\n',
      }),
    level: z
      .enum(['high', 'medium', 'low', ''])
      .openapi({
        description:
          'Indicates the likelihood that the address is a valid, mail-receiving address. Possible values are:\n  - `high` — Over 70% of mailpieces Lob has sent to this address were delivered successfully and recent mailings were also successful.\n  - `medium` — Between 40% and 70% of mailpieces Lob has sent to this address were delivered successfully.\n  - `low` — Less than 40% of mailpieces Lob has sent to this address were delivered successfully and recent mailings weren\'t successful.\n  - `""` — No tracking data exists for this address or lob deliverability was unable to find a corresponding level of mail success.\n',
      }),
  })
  .openapi({
    description:
      'Lob Confidence Score is a nested object that provides a numerical value between 0-100 of the likelihood that an address is deliverable based on Lob’s mail delivery data to over half of US households.',
    required: ['score', 'level'],
  })
  .openapi('LobConfidenceScore')

const UsVerificationSchema = z
  .object({
    id: UsVerIdSchema.exactOptional(),
    recipient: RecipientSchema.exactOptional(),
    primary_line: PrimaryLineUsSchema.exactOptional(),
    secondary_line: SecondaryLineSchema.exactOptional(),
    urbanization: UrbanizationSchema.exactOptional(),
    last_line: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Combination of the following applicable `components`:\n* City (`city`)\n* State (`state`)\n* ZIP code (`zip_code`)\n* ZIP+4 (`zip_code_plus_4`)\n',
      }),
    deliverability: z
      .enum([
        'deliverable',
        'deliverable_unnecessary_unit',
        'deliverable_incorrect_unit',
        'deliverable_missing_unit',
        'undeliverable',
      ])
      .exactOptional()
      .openapi({
        description:
          "Summarizes the deliverability of the `us_verification` object.\nFor full details, see the `deliverability_analysis` field. Possible values are:\n* `deliverable` – The address is deliverable by the USPS.\n* `deliverable_unnecessary_unit` – The address is deliverable, but the secondary unit information is unnecessary.\n* `deliverable_incorrect_unit` – The address is deliverable to the building's default address but the secondary unit provided may not exist. There is a chance the mail will not reach the intended recipient.\n* `deliverable_missing_unit` – The address is deliverable to the building's default address but is missing secondary unit information. There is a chance the mail will not reach the intended recipient.\n* `undeliverable` – The address is not deliverable according to the USPS.\n",
      }),
    valid_address: z
      .union([z.literal(true), z.literal(false)])
      .exactOptional()
      .openapi({
        description:
          'This field indicates whether an address was found in a more comprehensive address dataset that includes sources from the USPS, open source mapping data, and our proprietary mail delivery data.\nThis field can be interpreted as a representation of whether an address is a real location or not. Additionally a valid address may contradict the deliverability field since an address can be a real valid location but the USPS may not deliver to that address.\n',
      }),
    components: UsComponentsSchema.exactOptional(),
    deliverability_analysis: DeliverabilityAnalysisSchema.exactOptional(),
    lob_confidence_score: LobConfidenceScoreSchema.exactOptional(),
    object: z
      .literal('us_verification')
      .default('us_verification')
      .exactOptional()
      .openapi({ description: 'Value is resource type.' }),
  })
  .openapi({ required: [] })
  .openapi('UsVerification')

const UsVerificationsSchema = z
  .object({
    addresses: z.array(z.xor([UsVerificationSchema, ErrorSchema])),
    errors: z
      .boolean()
      .openapi({
        description: 'Indicates whether any errors occurred during the verification process.',
      }),
  })
  .openapi({ required: ['addresses', 'errors'] })
  .openapi('UsVerifications')

const PrimaryLineSchema = z
  .string()
  .max(200)
  .openapi({
    description: 'The primary delivery line (usually the street address) of the address.\n',
  })
  .openapi('PrimaryLine')

const IntlVerificationBaseSchema = z
  .object({
    recipient: RecipientSchema.exactOptional(),
    primary_line: PrimaryLineSchema.exactOptional(),
    secondary_line: SecondaryLineSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('IntlVerificationBase')

const PostalCodeSchema = z
  .string()
  .max(12)
  .openapi({ description: 'The postal code.' })
  .openapi('PostalCode')

const MultipleComponentsIntlSchema = IntlVerificationBaseSchema.and(
  z
    .object({
      city: CitySchema.exactOptional(),
      state: z.string().exactOptional().openapi({ description: 'The name of the state.' }),
      postal_code: PostalCodeSchema.exactOptional(),
      country: CountryExtendedSchema,
    })
    .openapi({ required: ['primary_line', 'country'] }),
).openapi('MultipleComponentsIntl')

const IntlVerificationsPayloadSchema = z
  .object({ addresses: z.array(MultipleComponentsIntlSchema).min(1).max(20) })
  .openapi({ required: ['addresses'] })
  .openapi('IntlVerificationsPayload')

const IntlVerIdSchema = z
  .string()
  .regex(/^intl_ver_[a-zA-Z0-9]+$/)
  .openapi({ description: 'Unique identifier prefixed with `intl_ver_`.' })
  .openapi('IntlVerId')

const CountryShortSchema = z
  .string()
  .openapi({
    description:
      'The country of the address. Will be returned as a 2 letter country short-name code (ISO 3166).',
    example: 'CA',
  })
  .openapi('CountryShort')

const IntlComponentsSchema = z
  .object({
    primary_number: PrimaryNumberSchema.exactOptional(),
    street_name: StreetNameSchema.exactOptional(),
    city: CitySchema.exactOptional(),
    state: StateSchema.exactOptional(),
    postal_code: PostalCodeSchema.exactOptional(),
  })
  .openapi({
    description: 'A nested object containing a breakdown of each component of an address.',
    required: [],
  })
  .openapi('IntlComponents')

const IntlVerificationSchema = IntlVerificationBaseSchema.and(
  z
    .object({
      id: IntlVerIdSchema.exactOptional(),
      last_line: z
        .string()
        .exactOptional()
        .openapi({
          description:
            'Combination of the following applicable `components`:\n* `city`\n* `state`\n* `zip_code`\n* `zip_code_plus_4`\n',
        }),
      country: CountryShortSchema.exactOptional(),
      coverage: z
        .enum(['SUBBUILDING', 'HOUSENUMBER/BUILDING', 'STREET', 'LOCALITY', 'SPARSE'])
        .exactOptional()
        .openapi({
          description:
            'The coverage level for the country. This represents the maximum level of\naccuracy an input address can be verified to.\n\n* `SUBBUILDING` - Coverage down to unit numbers. For example, in an apartment or a large building\n* `HOUSENUMBER/BUILDING` - Coverage down to house number. For example, the address where a house or building may be located\n* `STREET` - Coverage down to street. This means that we can verify that an street exists in a city, state, country\n* `LOCALITY` - Coverage down to city, state, or village or province. This means that we can verify that a city, village, province, or state exists in a country. Countries differ in how they define what is a province, state, city, village, etc. This attempts to group eveyrthing together.\n* `SPARSE` - Some addresses for this country exist in our databases\n',
        }),
      deliverability: z
        .enum(['deliverable', 'deliverable_missing_info', 'undeliverable', 'no_match'])
        .exactOptional()
        .openapi({
          description:
            'Summarizes the deliverability of the `intl_verification` object. Possible values are:\n* `deliverable` — The address is deliverable.\n* `deliverable_missing_info` — The address is missing some information, but is most likely deliverable.\n* `undeliverable` — The address is most likely not deliverable. Some components of the address (such as city or postal code) may have been found.\n* `no_match` — This address is not deliverable. No matching street could be found within the city or postal code.\n',
        }),
      status: z
        .enum(['LV4', 'LV3', 'LV2', 'LV1', 'LF4', 'LF3', 'LF2', 'LF1', 'LM4', 'LM3', 'LM2', 'LU1'])
        .exactOptional()
        .openapi({
          description:
            'The status level for the country. This represents the maximum level of\naccuracy an input address can be verified to.\n\n* `LV4` - Verified. The input data is correct. All input data was able to match in databases.\n* `LV3` - Verified. The input data is correct. All input data was able to match in databases <em>after</em> some or all elements were standarized. The input data may also be using outdated city, state, or country names.\n* `LV2` - Verified. The input data is correct although some input data is unverifiable due to incomplete data.\n* `LV1` - Verified. The input data is acceptable but in an attempt to standarize user input, errors were introduced.\n* `LF4` - Fixed. The input data is matched and fixed. (Example: Brighon, UK -> Brighton, UK)\n* `LF3` - Fixed. The input data is matched and fixed but some elements such as Subbuilding number and house number cannot be checked.\n* `LF2` - Fixed. The input data is matched but some elements such as Street cannot be checked.\n* `LF1` - Fixed. The input data is acceptable but in an attempt to standarize user input, errors were introduced.\n* `LM4` - Missing Info. The input data cannot be corrected completely.\n* `LM3` - Missing Info. The input data cannot be corrected completely and there were multiple matches found in databases.\n* `LM2` - Missing Info. The input data cannot be corrected completely and only some elements were found.\n* `LU1` - Unverified. The input data cannot be corrected or matched.\n',
        }),
      components: IntlComponentsSchema.exactOptional(),
      object: z
        .literal('intl_verification')
        .default('intl_verification')
        .exactOptional()
        .openapi({ description: 'Value is resource type.' }),
    })
    .openapi({ required: [] }),
).openapi('IntlVerification')

const IntlVerificationsSchema = z
  .object({
    addresses: z.array(z.xor([IntlVerificationSchema, ErrorSchema])),
    errors: z
      .boolean()
      .openapi({
        description: 'Indicates whether any errors occurred during the verification process.',
      }),
  })
  .openapi({ required: ['addresses', 'errors'] })
  .openapi('IntlVerifications')

const CmpScheduleTypeSchema = z
  .literal('immediate')
  .openapi({
    description: 'How the campaign should be scheduled. Only value available today is `immediate`.',
  })
  .openapi('CmpScheduleType')

const CmpUseTypeSchema = z
  .union([z.literal('marketing'), z.literal('operational'), z.literal(null)])
  .nullable()
  .openapi({
    description:
      'The use type for each mailpiece. Can be one of marketing, operational, or null. Null use_type is only allowed if an account default use_type is selected in Account Settings. For more information on use_type, see our  [Help Center article](https://help.lob.com/print-and-mail/building-a-mail-strategy/managing-mail-settings/declaring-mail-use-type).',
  })
  .openapi('CmpUseType')

const CampaignWritableSchema = z
  .object({
    billing_group_id: z
      .string()
      .regex(/^bg_[a-zA-Z0-9]+$/)
      .nullable()
      .exactOptional()
      .openapi({ description: 'Unique identifier prefixed with `bg_`.' }),
    name: z.string().openapi({ description: 'Name of the campaign.' }),
    description: ResourceDescriptionSchema.exactOptional(),
    schedule_type: CmpScheduleTypeSchema,
    target_delivery_date: z.iso
      .datetime({ offset: true })
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'If `schedule_type` is `target_delivery_date`, provide a targeted delivery date for mail pieces in this campaign.',
      }),
    send_date: z.iso
      .datetime({ offset: true })
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'If `schedule_type` is `scheduled_send_date`, provide a date to send this campaign.',
      }),
    cancel_window_campaign_minutes: z
      .int()
      .nullable()
      .exactOptional()
      .openapi({ description: 'A window, in minutes, within which the campaign can be canceled.' }),
    metadata: MetadataSchema.exactOptional(),
    use_type: CmpUseTypeSchema,
    auto_cancel_if_ncoa: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether or not a mail piece should be automatically canceled and not sent if the address is updated via NCOA.',
      }),
    print_speed: PrintSpeedSchema.exactOptional(),
  })
  .openapi({ required: ['name', 'schedule_type', 'use_type'] })
  .openapi('CampaignWritable')

const CmpIdSchema = z
  .string()
  .regex(/^cmp_[a-zA-Z0-9]+$/)
  .openapi({ title: 'Campaign id', description: 'Unique identifier prefixed with `cmp_`.' })
  .openapi('CmpId')

const ReturnedSchema = z
  .object({
    mail_type: MailTypeSchema.exactOptional(),
    size: PostcardSizeSchema.exactOptional(),
    front_original_url: z
      .url()
      .min(1)
      .max(2083)
      .exactOptional()
      .openapi({ description: 'The original URL of the `front` template.' }),
    back_original_url: z
      .url()
      .min(1)
      .max(2083)
      .exactOptional()
      .openapi({ description: 'The original URL of the `back` template.' }),
  })
  .openapi({
    description:
      'Properties that the postcards in your Creative should have. See the `qr_code` attribute below to add a QR code to your creative.',
    required: [],
  })
  .openapi('Returned')

const FromAttributeSchema = z
  .xor([AdrIdSchema, InlineAddressUsSchema])
  .openapi({
    title: 'From',
    description:
      'Must either be an address ID or an inline object with correct address parameters. All addresses will be standardized into uppercase without being modified by verification.',
  })
  .openapi('FromAttribute')

const CreativeBaseSchema = z
  .object({
    from: FromAttributeSchema.exactOptional(),
    description: ResourceDescriptionSchema.exactOptional(),
    metadata: MetadataSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreativeBase')

const CardIdSchema = z
  .string()
  .regex(/^card_[a-zA-Z0-9]+$/)
  .openapi({ description: 'Unique identifier prefixed with `card_`.' })
  .openapi('CardId')

const ExtraServiceSchema = z
  .union([
    z.literal('certified'),
    z.literal('certified_return_receipt'),
    z.literal('registered'),
    z.literal(null),
  ])
  .nullable()
  .openapi({
    description:
      'Add an extra service to your letter. Can only be non-`null` if `mail_type` isn\'t `usps_standard`. See <a href="https://www.lob.com/pricing/print-mail#compare" target="_blank">pricing</a> for extra costs incurred.\n  * `certified` - track and confirm delivery for domestic destinations. An extra sheet (1 PDF page single-sided or 2 PDF pages double-sided) is added to the beginning of your letter for address and barcode information. See here for templates: <a href="https://s3-us-west-2.amazonaws.com/public.lob.com/assets/templates/letter_certified_template.pdf" target="_blank">#10 envelope</a> and <a href="https://s3-us-west-2.amazonaws.com/public.lob.com/assets/templates/letter_certified_flat_template.pdf" target="_blank">flat envelope</a> (used for letters over 6 pages single-sided or 12 pages double-sided). You will not be charged for this extra sheet.\n  * `certified_return_receipt` - request an electronic copy of the recipient\'s signature to prove delivery of your certified letter\n  * `registered` - provides tracking and confirmation for international addresses\n  \nNot available for `us_legal` letter size.\n',
  })
  .openapi('ExtraService')

const Returned_3Schema = z
  .object({
    address_placement: AddressPlacementSchema.exactOptional(),
    buckslips: z
      .array(BuckslipIdSchema)
      .min(0)
      .max(1)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'A single-element array containing an existing buckslip id in a string format. See [buckslips](#tag/Buckslips) for more information.',
      }),
    cards: z
      .array(CardIdSchema)
      .min(0)
      .max(1)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'A single-element array containing an existing card id in a string format. See [cards](#tag/Cards) for more information.',
      }),
    custom_envelope: Returned_2Schema.exactOptional(),
    color: ColorSchema.exactOptional(),
    double_sided: DoubleSidedSchema.exactOptional(),
    extra_service: ExtraServiceSchema.exactOptional(),
    file_original_url: z
      .string()
      .exactOptional()
      .openapi({ description: 'The original URL of the `file` template.' }),
    mail_type: MailTypeSchema.exactOptional(),
  })
  .openapi({
    description:
      'Properties that the letters in your Creative should have. See the `qr_code` attribute below to add a QR code to your creative.',
    required: [],
  })
  .openapi('Returned_3')

const Returned_4Schema = z
  .object({
    mail_type: MailTypeSchema.exactOptional(),
    size: SelfMailerSizeSchema.exactOptional(),
    inside_original_url: z
      .url()
      .min(1)
      .max(2083)
      .exactOptional()
      .openapi({ description: 'The original URL of the `inside` template.' }),
    outside_original_url: z
      .url()
      .min(1)
      .max(2083)
      .exactOptional()
      .openapi({ description: 'The original URL of the `outside` template.' }),
  })
  .openapi({
    description:
      'Properties that the self mailers in your Creative should have. See the `qr_code` attribute below to add a QR code to your creative.',
    required: [],
  })
  .openapi('Returned_4')

const ReturnedResourceSchema = z
  .xor([
    z
      .object({
        resource_type: z
          .literal('postcard')
          .openapi({ description: 'Mailpiece type for the creative' }),
        details: ReturnedSchema,
      })
      .openapi({ title: 'Postcard Creative', required: ['resource_type', 'details'] })
      .and(CreativeBaseSchema),
    z
      .object({
        resource_type: z
          .literal('letter')
          .openapi({ description: 'Mailpiece type for the creative' }),
        details: Returned_3Schema,
      })
      .openapi({ title: 'Letter Creative', required: ['from', 'resource_type', 'details'] })
      .and(CreativeBaseSchema),
    z
      .object({
        resource_type: z
          .literal('self_mailer')
          .openapi({ description: 'Mailpiece type for the creative' }),
        details: Returned_4Schema,
      })
      .openapi({ title: 'Self Mailer Creative', required: ['resource_type', 'details'] })
      .and(CreativeBaseSchema),
  ])
  .openapi('ReturnedResource')

const CrvIdSchema = z
  .string()
  .regex(/^crv_[a-zA-Z0-9]+$/)
  .openapi({
    description: 'Unique identifier prefixed with `crv_`.',
    example: 'crv_2a3b096c409b32c',
  })
  .openapi('CrvId')

const CampaignItemSchema = CampaignWritableSchema.and(
  z
    .object({
      id: CmpIdSchema,
      is_draft: z
        .boolean()
        .default(true)
        .openapi({ description: 'Whether or not the campaign is still a draft.' }),
      creatives: z
        .array(z.any())
        .openapi({
          description: 'An array of creatives that have been associated with this campaign.',
        }),
      uploads: z
        .array(z.any())
        .min(0)
        .max(1)
        .openapi({
          description:
            'A single-element array containing the upload object that is assocated with this campaign.',
        }),
      object: z
        .literal('campaign')
        .default('campaign')
        .openapi({ description: 'Value is resource type.' }),
      date_created: DateCreatedSchema,
      date_modified: DateModifiedSchema,
      deleted: DeletedSchema.exactOptional(),
    })
    .openapi({
      required: [
        'id',
        'name',
        'description',
        'schedule_type',
        'use_type',
        'is_draft',
        'creatives',
        'uploads',
        'auto_cancel_if_ncoa',
        'date_created',
        'date_modified',
        'object',
      ],
    }),
).openapi('CampaignItem')

const CampaignListSchema = z
  .array(CampaignItemSchema)
  .openapi({
    description: 'Array of campaigns associated with the creative ID',
    example: [
      {
        id: 'cmp_ed76e33e7ac4d0bd',
        name: 'My postman Campaign 2',
        description: 'Created via postman again',
        schedule_type: 'immediate',
        send_date: null,
        target_delivery_date: null,
        cancel_window_campaign_minutes: null,
        metadata: {},
        use_type: null,
        is_draft: true,
        deleted: false,
        creatives: [],
        uploads: [],
        auto_cancel_if_ncoa: false,
        date_created: '2022-07-26T20:20:25.016Z',
        date_modified: '2022-07-26T20:20:25.016Z',
        object: 'campaign',
      },
    ],
  })
  .openapi('CampaignList')

const CreativeSchema = LobBaseSchema.and(ReturnedResourceSchema)
  .and(
    z
      .object({
        deleted: z.boolean().openapi({ description: 'Whether the resource has been deleted.' }),
        id: CrvIdSchema,
        template_preview_urls: z
          .object({})
          .openapi({
            title: 'Template Preview URLs',
            description:
              "Preview URLs associated with a creative's artwork asset(s) if the creative uses HTML templates as assets. An empty object will be returned if no `template_preview`s have been generated.",
          }),
        template_previews: z
          .array(z.object({}))
          .openapi({
            title: 'Template Previews',
            description:
              'A list of template preview objects if the creative uses HTML template(s) as artwork asset(s). An empty array will be returned if no `template_preview`s have been generated for the creative.',
          }),
        campaigns: CampaignListSchema,
        object: z
          .literal('creative')
          .default('creative')
          .openapi({ description: 'Value is resource type.' }),
      })
      .openapi({
        required: [
          'id',
          'description',
          'from',
          'resource_type',
          'details',
          'metadata',
          'template_preview_urls',
          'template_previews',
          'campaigns',
          'date_created',
          'date_modified',
          'object',
          'deleted',
        ],
      }),
  )
  .openapi('Creative')

const RequiredAddressColumnMappingSchema = z
  .object({
    name: z
      .string()
      .nullable()
      .default(null)
      .openapi({
        description:
          'The column header from the csv file that should be mapped to the required field `name`',
      }),
    address_line1: z
      .string()
      .nullable()
      .default(null)
      .openapi({
        description:
          'The column header from the csv file that should be mapped to the required field `address_line1`',
      }),
    address_city: z
      .string()
      .nullable()
      .default(null)
      .openapi({
        description:
          'The column header from the csv file that should be mapped to the required field `address_city`',
      }),
    address_state: z
      .string()
      .nullable()
      .default(null)
      .openapi({
        description:
          'The column header from the csv file that should be mapped to the required field `address_state`',
      }),
    address_zip: z
      .string()
      .nullable()
      .default(null)
      .openapi({
        description:
          'The column header from the csv file that should be mapped to the required field `address_zip`',
      }),
  })
  .openapi({
    title: 'Required Address Columns',
    required: ['name', 'address_line1', 'address_city', 'address_state', 'address_zip'],
    example: {
      name: 'recipient_name',
      address_line1: 'primary_line',
      address_city: 'city',
      address_state: 'state',
      address_zip: 'zip_code',
    },
    description:
      'The mapping of column headers in your file to Lob-required fields for the resource created. See our <a href="https://help.lob.com/print-and-mail/building-a-mail-strategy/campaign-or-triggered-sends/campaign-audience-guide#required-columns-2" target="_blank">Campaign Audience Guide</a> for additional details.',
  })
  .openapi('RequiredAddressColumnMapping')

const OptionalAddressColumnMappingSchema = z
  .object({
    address_line2: z
      .string()
      .nullable()
      .default(null)
      .openapi({
        description:
          'The column header from the csv file that should be mapped to the optional field "address_line2"',
      }),
    company: z
      .string()
      .nullable()
      .default(null)
      .openapi({
        description:
          'The column header from the csv file that should be mapped to the optional field "company"',
      }),
    address_country: z
      .string()
      .nullable()
      .default(null)
      .openapi({
        description:
          'The column header from the csv file that should be mapped to the optional field "address_country"',
      }),
  })
  .openapi({
    title: 'Optional Address Columns',
    required: ['address_line2', 'company', 'address_country'],
    example: { address_line2: 'secondary_line', company: 'company', address_country: 'country,' },
    description:
      'The mapping of column headers in your file to Lob-optional fields for the resource created. See our <a href="https://help.lob.com/print-and-mail/building-a-mail-strategy/campaign-or-triggered-sends/campaign-audience-guide#optional-columns-3" target="_blank">Campaign Audience Guide</a> for additional details.',
  })
  .openapi('OptionalAddressColumnMapping')

const UploadsMetadataSchema = z
  .object({
    columns: z
      .array(z.string())
      .default([])
      .openapi({
        description:
          'The list of column names from the csv file which you want associated with each of your mailpieces',
      }),
  })
  .default({ columns: [] })
  .openapi({
    title: 'Metadata',
    required: ['columns'],
    example: { columns: ['recipient_name'] },
    description:
      'The list of column headers in your file as an array that you want as metadata associated with each mailpiece. See our <a href="https://help.lob.com/print-and-mail/building-a-mail-strategy/campaign-or-triggered-sends/campaign-audience-guide#required-columns-2" target="_blank">Campaign Audience Guide</a> for additional details.',
  })
  .openapi('UploadsMetadata')

const MergeVariableColumnMappingSchema = z
  .object({})
  .nullable()
  .default(null)
  .openapi({
    title: 'Merge Variable Mapping',
    example: { name: 'recipient_name', gift_code: 'code', qr_code_redirect_url: 'redirect_url' },
    description:
      'The mapping of column headers in your file to the merge variables present in your creative. See our <a href="https://help.lob.com/print-and-mail/building-a-mail-strategy/campaign-or-triggered-sends/campaign-audience-guide#step-3-map-merge-variable-data-if-applicable-7" target="_blank">Campaign Audience Guide</a> for additional details. <br />If a merge variable has the same "name" as a "key" in the `requiredAddressColumnMapping` or `optionalAddressColumnMapping` objects, then they **CANNOT** have a different value in this object. If a different value is provided, then when the campaign is processing it will get overwritten with the mapped value present in the `requiredAddressColumnMapping` or `optionalAddressColumnMapping` objects. The redirect URLs for QR codes can also be customized using this mapping. If the URL has a variable and the variable mapping existsing here, then data from the respective column in the audience file will be merged into the URL template.',
  })
  .openapi('MergeVariableColumnMapping')

const UploadWritableSchema = z
  .object({
    campaignId: CmpIdSchema.and(
      z
        .string()
        .openapi({ description: 'Associated Campaign ID', example: 'cmp_1933ad629bae1408' }),
    ),
    requiredAddressColumnMapping: RequiredAddressColumnMappingSchema.exactOptional(),
    optionalAddressColumnMapping: OptionalAddressColumnMappingSchema.exactOptional(),
    metadata: UploadsMetadataSchema.exactOptional(),
    mergeVariableColumnMapping: MergeVariableColumnMappingSchema.exactOptional().openapi({
      description: 'test',
    }),
  })
  .openapi({ required: ['campaignId'] })
  .openapi('UploadWritable')

const UplIdSchema = z
  .string()
  .regex(/^upl_[a-zA-Z0-9]+$/)
  .openapi({ description: 'Unique identifier prefixed with `upl_`.' })
  .openapi('UplId')

const UploadStateSchema = z
  .enum([
    'Preprocessing',
    'Draft',
    'Ready for Validation',
    'Validating',
    'Scheduled',
    'Cancelled',
    'Errored',
  ])
  .default('Draft')
  .openapi({
    title: 'Upload State',
    description:
      'The `state` property on the `upload` object. As the file is processed, the `state` will change from `Ready for Validation` to `Validating` and then will be either `Scheduled` (successfully processed) or `Errored` (Unsuccessfully processed).',
  })
  .openapi('UploadState')

const UploadSchema = UploadWritableSchema.and(
  z
    .object({
      id: UplIdSchema,
      accountId: z
        .string()
        .openapi({
          title: 'Account ID',
          description: 'Account ID that made the request',
          example: 'fa9ea650fc7b31a89f92',
        }),
      mode: z
        .enum(['test', 'live'])
        .openapi({
          description:
            'The environment in which the mailpieces were created. Today, will only be `live`.',
        }),
      failuresUrl: z
        .string()
        .exactOptional()
        .openapi({
          title: 'Failures URL',
          example: 'https://www.example.com',
          description: 'Url where your campaign mailpiece failures can be retrieved',
        }),
      originalFilename: z
        .string()
        .exactOptional()
        .openapi({
          title: 'Original Filename',
          example: 'my_audience.csv',
          description: 'Filename of the upload',
        }),
      state: UploadStateSchema,
      totalMailpieces: z
        .int()
        .openapi({
          title: 'Total Mailpieces',
          example: 100,
          description: 'Total number of recipients for the campaign',
        }),
      failedMailpieces: z
        .int()
        .openapi({
          title: 'Failed Mailpieces',
          example: 5,
          description: 'Number of mailpieces that failed to create',
        }),
      validatedMailpieces: z
        .int()
        .openapi({
          title: 'Validated Mailpieces',
          example: 95,
          description: 'Number of mailpieces that were successfully created',
        }),
      bytesProcessed: z
        .int()
        .openapi({
          title: 'Bytes Processed',
          example: 17268,
          description: 'Number of bytes processed in your CSV',
        }),
      dateCreated: z.iso
        .datetime({ offset: true })
        .openapi({
          title: 'Date Created',
          description: 'A timestamp in ISO 8601 format of the date the upload was created',
        }),
      dateModified: z.iso
        .datetime({ offset: true })
        .openapi({
          title: 'Date Modified',
          description: 'A timestamp in ISO 8601 format of the date the upload was last modified',
        }),
    })
    .openapi({
      required: [
        'id',
        'accountId',
        'campaignId',
        'requiredAddressColumnMapping',
        'optionalAddressColumnMapping',
        'metadata',
        'mergeVariableColumnMapping',
        'mode',
        'state',
        'totalMailpieces',
        'failedMailpieces',
        'validatedMailpieces',
        'bytesProcessed',
        'dateCreated',
        'dateModified',
      ],
    }),
).openapi('Upload')

const CampaignSchema = LobBaseSchema.and(CampaignWritableSchema)
  .and(
    z
      .object({
        id: CmpIdSchema,
        is_draft: z
          .boolean()
          .default(true)
          .openapi({ description: 'Whether or not the campaign is still a draft.' }),
        creatives: z
          .array(CreativeSchema)
          .min(0)
          .openapi({
            description: 'An array of creatives that have been associated with this campaign.',
          }),
        uploads: z
          .array(UploadSchema)
          .min(0)
          .max(1)
          .openapi({
            description:
              'A single-element array containing the upload object that is assocated with this campaign.',
          }),
        object: z
          .literal('campaign')
          .default('campaign')
          .openapi({ description: 'Value is resource type.' }),
        use_type: CmpUseTypeSchema,
      })
      .openapi({
        required: [
          'id',
          'name',
          'description',
          'schedule_type',
          'use_type',
          'is_draft',
          'creatives',
          'uploads',
          'auto_cancel_if_ncoa',
          'date_created',
          'date_modified',
          'object',
        ],
      }),
  )
  .openapi('Campaign')

const CampaignUpdatableSchema = z
  .object({
    name: z.string().exactOptional().openapi({ title: 'Name' }),
    description: ResourceDescriptionSchema.exactOptional(),
    schedule_type: CmpScheduleTypeSchema.exactOptional(),
    target_delivery_date: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'If `schedule_type` is `target_delivery_date`, provide a targeted delivery date for mail pieces in this campaign.',
      }),
    send_date: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'If `schedule_type` is `scheduled_send_date`, provide a date to send this campaign.',
      }),
    cancel_window_campaign_minutes: z
      .int()
      .exactOptional()
      .openapi({ description: 'A window, in minutes, within which the campaign can be canceled.' }),
    metadata: MetadataSchema.exactOptional(),
    is_draft: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether or not the campaign is still a draft. Can either be excluded or `false`.',
      }),
    use_type: CmpUseTypeSchema.exactOptional(),
    auto_cancel_if_ncoa: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether or not a mail piece should be automatically canceled and not sent if the address is updated via NCOA.',
      }),
  })
  .openapi({ required: [] })
  .openapi('CampaignUpdatable')

const CardDescriptionSchema = z
  .string()
  .max(255)
  .nullable()
  .openapi({ description: 'Description of the card.' })
  .openapi('CardDescription')

const CardBaseSchema = z
  .object({
    description: CardDescriptionSchema.exactOptional(),
    size: z
      .enum(['3.375x2.125', '2.125x3.375'])
      .default('2.125x3.375')
      .exactOptional()
      .openapi({ description: 'The size of the card' }),
  })
  .openapi({ required: [] })
  .openapi('CardBase')

const CardSchema = LobBaseSchema.and(CardBaseSchema)
  .and(
    z
      .unknown()
      .superRefine((val, ctx) => {
        if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
          if (!Object.hasOwn(val, 'description')) {
            ctx.addIssue({ code: 'custom' })
          }
        }
      })
      .openapi({ required: ['description'] }),
  )
  .and(
    z
      .object({
        id: CardIdSchema,
        url: z.url().min(1).max(2083).openapi({ description: 'The signed link for the card.' }),
        auto_reorder: z
          .boolean()
          .default(false)
          .openapi({ description: 'True if the cards should be auto-reordered.' }),
        reorder_quantity: z
          .int()
          .nullable()
          .openapi({ description: 'The number of cards to be reordered.' }),
        raw_url: z.url().min(1).max(2083).openapi({ description: 'The raw URL of the card.' }),
        front_original_url: z
          .url()
          .min(1)
          .max(2083)
          .openapi({ description: 'The original URL of the front template.' }),
        back_original_url: z
          .url()
          .min(1)
          .max(2083)
          .openapi({ description: 'The original URL of the back template.' }),
        thumbnails: z.array(ThumbnailSchema),
        available_quantity: z
          .int()
          .default(0)
          .openapi({ description: 'The available quantity of cards.' }),
        pending_quantity: z
          .int()
          .default(0)
          .openapi({ description: 'The pending quantity of cards.' }),
        status: z.enum(['processed', 'rendered']).openapi({ title: 'The status of the card.' }),
        orientation: z
          .enum(['horizontal', 'vertical'])
          .default('horizontal')
          .openapi({ description: 'The orientation of the card.' }),
        threshold_amount: z
          .int()
          .default(0)
          .openapi({ description: 'The threshold amount of the card' }),
        object: z.literal('card').default('card').openapi({ description: 'object' }),
      })
      .openapi({
        required: [
          'id',
          'url',
          'auto_reorder',
          'reorder_quantity',
          'raw_url',
          'front_original_url',
          'back_original_url',
          'thumbnails',
          'available_quantity',
          'pending_quantity',
          'status',
          'orientation',
          'threshold_amount',
          'object',
        ],
      }),
  )
  .openapi('Card')

const CardEditableSchema = CardBaseSchema.and(
  z
    .object({
      front: z
        .xor([RemoteFileUrlSchema, LocalFilePathSchema])
        .openapi({ description: 'A PDF template for the front of the card' }),
      back: z
        .xor([RemoteFileUrlSchema, LocalFilePathSchema])
        .default(
          'https://s3.us-west-2.amazonaws.com/public.lob.com/assets/card_blank_horizontal.pdf',
        )
        .exactOptional()
        .openapi({ description: 'A PDF template for the back of the card' }),
    })
    .openapi({ required: ['front'] }),
).openapi('CardEditable')

const CardUpdatableSchema = z
  .object({
    description: CardDescriptionSchema.exactOptional(),
    auto_reorder: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Allows for auto reordering' }),
    reorder_quantity: z
      .number()
      .min(10000)
      .max(10000000)
      .exactOptional()
      .openapi({
        description:
          'The quantity of items to be reordered (only required when auto_reorder is true).',
      }),
  })
  .openapi({ required: [] })
  .openapi('CardUpdatable')

const CardDeletionSchema = z
  .object({ id: CardIdSchema.exactOptional(), deleted: DeletedSchema.exactOptional() })
  .openapi({
    description:
      "Lob uses RESTful HTTP response codes to indicate success or failure of an API request. In general, 2xx indicates success, 4xx indicate an input error, and 5xx indicates an error on Lob's end.",
    required: [],
  })
  .openapi('CardDeletion')

const CoIdSchema = z
  .string()
  .regex(/^co_[a-zA-Z0-9]+$/)
  .openapi({ description: 'Unique identifier prefixed with `co_`.' })
  .openapi('CoId')

const CardOrderSchema = LobBaseSchema.and(
  z
    .object({
      id: CoIdSchema.exactOptional(),
      card_id: CardIdSchema.exactOptional(),
      status: z
        .enum(['pending', 'printing', 'available', 'cancelled', 'depleted'])
        .exactOptional()
        .openapi({ description: 'The status of the card order.' }),
      inventory: z
        .number()
        .default(0)
        .exactOptional()
        .openapi({ description: 'The inventory of the card order.' }),
      quantity_ordered: z
        .number()
        .default(0)
        .exactOptional()
        .openapi({ description: 'The quantity of cards ordered' }),
      unit_price: z
        .number()
        .default(0)
        .exactOptional()
        .openapi({ description: 'The unit price for the card order.' }),
      cancelled_reason: z
        .string()
        .exactOptional()
        .openapi({ description: 'The reason for cancellation.' }),
      availability_date: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          description: 'A timestamp in ISO 8601 format of the date the resource was created.',
        }),
      expected_availability_date: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({ description: 'The fixed deadline for the cards to be printed.' }),
    })
    .openapi({ required: [] }),
).openapi('CardOrder')

const CardOrderEditableSchema = z
  .object({
    quantity: z
      .int()
      .min(10000)
      .max(10000000)
      .openapi({ description: 'The quantity of cards in the order (minimum 10,000).' }),
  })
  .openapi({ required: ['quantity'] })
  .openapi('CardOrderEditable')

const EditableNoMailtypeSchema = z
  .object({
    description: ResourceDescriptionSchema.exactOptional(),
    metadata: MetadataSchema.exactOptional(),
    merge_variables: MergeVariablesSchema.exactOptional(),
    send_date: SendDateSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('EditableNoMailtype')

const ChkUseTypeSchema = z
  .union([z.literal('marketing'), z.literal('operational'), z.literal(null)])
  .nullable()
  .openapi({
    description:
      'TThe use type for each mailpiece. Can be one of marketing, operational, or null. Null use_type is only allowed if an account default use_type is selected in Account Settings. For more information on use_type, see our  [Help Center article](https://help.lob.com/print-and-mail/building-a-mail-strategy/managing-mail-settings/declaring-mail-use-type).',
  })
  .openapi('ChkUseType')

const CheckBaseSchema = EditableNoMailtypeSchema.and(
  z
    .object({
      mail_type: z
        .literal('usps_first_class')
        .default('usps_first_class')
        .exactOptional()
        .openapi({ description: 'Checks must be sent `usps_first_class`' }),
      memo: z
        .string()
        .max(40)
        .nullable()
        .exactOptional()
        .openapi({ description: 'Text to include on the memo line of the check.' }),
      check_number: z
        .int()
        .min(1)
        .max(500000000)
        .exactOptional()
        .openapi({
          description:
            'An integer that designates the check number.\nIf `check_number` is not provided, checks created from a new `bank_account` will start at `10000` and increment with each check created with the `bank_account`.\nA provided `check_number` overrides the defaults. Subsequent checks created with the same `bank_account` will increment from the provided check number.',
        }),
      message: z
        .string()
        .max(400)
        .exactOptional()
        .openapi({
          description: 'Max of 400 characters to be included at the bottom of the check page.',
        }),
      use_type: ChkUseTypeSchema.exactOptional(),
    })
    .openapi({ required: [] }),
).openapi('CheckBase')

const FromUsSchema = z
  .object({ from: AddressUsSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('FromUs')

const ChkIdSchema = z
  .string()
  .regex(/^chk_[a-zA-Z0-9]+$/)
  .openapi({ description: 'Unique identifier prefixed with `chk_`.' })
  .openapi('ChkId')

const ToAddressUsChkSchema = LobBaseSchema.and(
  z
    .union([
      z
        .unknown()
        .superRefine((val, ctx) => {
          if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
            if (!Object.hasOwn(val, 'name')) {
              ctx.addIssue({ code: 'custom' })
            }
          }
        })
        .openapi({ title: 'address obj with `name` defined', required: ['name'] }),
      z
        .unknown()
        .superRefine((val, ctx) => {
          if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
            if (!Object.hasOwn(val, 'company')) {
              ctx.addIssue({ code: 'custom' })
            }
          }
        })
        .openapi({ title: 'address obj with `company` defined', required: ['company'] }),
    ])
    .and(
      z
        .object({
          id: AdrIdSchema,
          object: z
            .literal('address')
            .default('address')
            .exactOptional()
            .openapi({ description: 'Value is resource type.' }),
          description: ResourceDescriptionSchema.exactOptional(),
          name: z
            .string()
            .max(40)
            .nullable()
            .exactOptional()
            .openapi({
              description:
                'Either `name` or `company` is required, you may also add both. Must be no longer than 40 characters. If both `name` and `company` are provided, they will be printed on two separate lines above the rest of the address.\n',
            }),
          company: z
            .string()
            .max(40)
            .nullable()
            .exactOptional()
            .openapi({
              description:
                'Either `name` or `company` is required, you may also add both. Must be no longer than 40 characters. If both `name` and `company` are provided, they will be printed on two separate lines above the rest of the address. This field can be used for any secondary recipient information which is not part of the actual mailing address (Company Name, Department, Attention Line, etc).\n',
            }),
          phone: z
            .string()
            .max(40)
            .nullable()
            .exactOptional()
            .openapi({ description: 'Must be no longer than 40 characters.' }),
          email: z
            .string()
            .max(100)
            .nullable()
            .exactOptional()
            .openapi({ description: 'Must be no longer than 100 characters.' }),
          address_line1: z
            .string()
            .max(50)
            .openapi({
              description: 'The primary number, street name, and directional information.',
            }),
          address_line2: z
            .string()
            .max(50)
            .nullable()
            .exactOptional()
            .openapi({
              description:
                "An optional field containing any information which can't fit into line 1.",
            }),
          address_city: z.string().max(200),
          address_state: z
            .string()
            .regex(/^[a-zA-Z]{2}$/)
            .openapi({ description: '2 letter state short-name code' }),
          address_zip: z
            .string()
            .regex(/^\d{5}(-\d{4})?$/)
            .openapi({
              description:
                'Must follow the ZIP format of `12345` or ZIP+4 format of `12345-1234`.\n',
            }),
          address_country: z
            .literal('UNITED STATES')
            .exactOptional()
            .openapi({ description: 'Full name of country' }),
          metadata: MetadataSchema.exactOptional(),
          recipient_moved: z
            .boolean()
            .nullable()
            .exactOptional()
            .openapi({
              description:
                'Only returned for accounts on certain <a href="https://dashboard.lob.com/#/settings/editions" target="_blank">Print &amp; Mail Editions</a>. Value is `true` if the address was altered because the recipient filed for a <a href="#tag/National-Change-of-Address">National Change of Address Linkage (NCOALink)</a>, `false` if the NCOALink check was run but no altered address was found, and `null` if the NCOALink check was not run. The NCOALink check does not happen for non-US addresses, for non-deliverable US addresses, or for addresses created before the NCOALink feature was added to your account.\n',
            }),
        })
        .openapi({
          required: ['id', 'address_line1', 'address_city', 'address_state', 'address_zip'],
        }),
    )
    .openapi({
      required: ['id', 'address_line1', 'address_city', 'address_state', 'address_zip'],
      example: {
        id: 'adr_e68217bd744d65c8',
        description: 'Harry - Office',
        name: 'HARRY ZHANG',
        company: 'LOB',
        phone: '5555555555',
        email: 'harry@lob.com',
        address_line1: '210 KING ST STE 6100',
        address_line2: null,
        address_city: 'SAN FRANCISCO',
        address_state: 'CA',
        address_zip: '94107-1741',
        address_country: 'UNITED STATES',
        metadata: {},
        recipient_moved: false,
        date_created: '2019-08-12T00:16:00.361Z',
        date_modified: '2019-08-12T00:16:00.361Z',
        object: 'address',
      },
    }),
).openapi('ToAddressUsChk')

const CheckSchema = CheckBaseSchema.and(FromUsSchema)
  .and(
    z
      .object({
        id: ChkIdSchema,
        amount: z
          .float32()
          .max(999999.99)
          .multipleOf(0.01)
          .openapi({ description: 'The payment amount to be sent in US dollars.' }),
        bank_account: BankAccountSchema,
        check_bottom_template_id: z
          .any()
          .openapi({ description: 'The unique ID of the HTML template used for the check bottom.' })
          .and(TmplIdSchema)
          .exactOptional(),
        attachment_template_id: z
          .any()
          .openapi({ description: 'The unique ID of the HTML template used for the attachment.' })
          .and(TmplIdSchema)
          .exactOptional(),
        check_bottom_template_version_id: z
          .string()
          .openapi({
            description:
              'The unique ID of the specific version of the HTML template used for the check bottom.',
          })
          .and(VrsnIdSchema)
          .exactOptional(),
        attachment_template_version_id: z
          .string()
          .openapi({
            description:
              'The unique ID of the specific version of the HTML template used for the attachment.',
          })
          .and(VrsnIdSchema)
          .exactOptional(),
        url: SignedLinkSchema,
        to: ToAddressUsChkSchema,
        carrier: z.literal('USPS').default('USPS'),
        thumbnails: z.array(ThumbnailSchema).exactOptional(),
        expected_delivery_date: ExpectedDeliveryDateSchema.exactOptional(),
        tracking_events: z
          .array(TrackingEventNormalSchema)
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'An array of tracking_event objects ordered by ascending `time`. Will not be populated for checks created in test mode.',
          }),
        use_type: ChkUseTypeSchema,
        status: StatusSchema.exactOptional(),
        failure_reason: FailureReasonSchema.nullable().exactOptional(),
        object: z
          .literal('check')
          .default('check')
          .exactOptional()
          .openapi({ description: 'Value is resource type.' }),
        date_created: DateCreatedSchema,
        date_modified: DateModifiedSchema,
        deleted: DeletedSchema.exactOptional(),
      })
      .openapi({
        required: [
          'bank_account',
          'id',
          'amount',
          'to',
          'url',
          'carrier',
          'date_created',
          'date_modified',
          'use_type',
        ],
      }),
  )
  .openapi('Check')

const InlineAddressUsChkSchema = z
  .union([
    z
      .unknown()
      .superRefine((val, ctx) => {
        if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
          if (!Object.hasOwn(val, 'name')) {
            ctx.addIssue({ code: 'custom' })
          }
        }
      })
      .openapi({ title: 'address obj with `name` defined', required: ['name'] }),
    z
      .unknown()
      .superRefine((val, ctx) => {
        if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
          if (!Object.hasOwn(val, 'company')) {
            ctx.addIssue({ code: 'custom' })
          }
        }
      })
      .openapi({ title: 'address obj with `company` defined', required: ['company'] }),
  ])
  .and(
    z
      .object({
        description: ResourceDescriptionSchema.exactOptional(),
        name: z
          .string()
          .max(40)
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'Either `name` or `company` is required, you may also add both. Must be no longer than 40 characters. If both `name` and `company` are provided, they will be printed on two separate lines above the rest of the address.\n',
          }),
        company: CompanySchema.exactOptional(),
        address_line1: z
          .string()
          .max(50)
          .openapi({
            description: 'The primary number, street name, and directional information.',
          }),
        address_line2: z
          .string()
          .max(50)
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'An optional field for address unit information. Total string sum of this plus `address_line1` may not exceed 50 characters.',
          }),
        address_city: z.string().max(200),
        address_state: z
          .string()
          .regex(/^[a-zA-Z]{2}$/)
          .openapi({ description: '2 letter state short-name code' }),
        address_zip: z
          .string()
          .regex(/^\d{5}(-\d{4})?$/)
          .openapi({
            description: 'Must follow the ZIP format of `12345` or ZIP+4 format of `12345-1234`.\n',
          }),
        phone: z
          .string()
          .max(40)
          .nullable()
          .exactOptional()
          .openapi({ description: 'Must be no longer than 40 characters.' }),
        email: z
          .string()
          .max(100)
          .nullable()
          .exactOptional()
          .openapi({ description: 'Must be no longer than 100 characters.' }),
        address_country: z.literal('US').default('US').exactOptional(),
        metadata: MetadataSchema.exactOptional(),
      })
      .openapi({ required: ['address_line1', 'address_city', 'address_state', 'address_zip'] }),
  )
  .openapi({ required: ['address_line1', 'address_city', 'address_state', 'address_zip'] })
  .openapi('InlineAddressUsChk')

const CheckInputToSchema = z
  .object({
    to: z
      .xor([AdrIdSchema, InlineAddressUsChkSchema])
      .exactOptional()
      .openapi({
        description:
          'Must either be an address ID or an inline object with correct address parameters. Checks cannot be sent internationally (`address_country` must be `US`). The total string of the sum of `address_line1` and `address_line2` must be no longer than 50 characters combined. If an object is used, an address will be created, corrected, and standardized for free whenever possible using our US Address Verification engine, and returned back with an ID. Depending on your <a href="https://dashboard.lob.com/#/settings/editions" target="_blank">Print & Mail Edition</a>, addresses may also be run through [National Change of Address (NCOALink)](#tag/National-Change-of-Address). If an address used does not meet your account’s <a href="https://dashboard.lob.com/#/settings/account" target="_blank">US Mail Strictness Setting</a>, the request will fail. <a href="https://help.lob.com/print-and-mail/all-about-addresses" target="_blank">More about verification of mailing addresses</a>',
      }),
  })
  .openapi({ required: [] })
  .openapi('CheckInputTo')

const CheckBottomSchema = z
  .xor([HtmlStringSchema, TmplIdSchema, RemoteFileUrlSchema, LocalFilePathSchema])
  .openapi({
    description:
      'The artwork to use on the bottom of the check page.\n\nNotes:\n- HTML merge variables should not include delimiting whitespace.\n- PDF, PNG, and JPGs must be sized at 8.5"x11" at 300 DPI, while supplied HTML will be rendered and trimmed to fit on a 8.5"x11" page.\n- The check bottom will always be printed in black & white.\n- Must conform to <a href="https://s3-us-west-2.amazonaws.com/public.lob.com/assets/templates/check_bottom_template.pdf" target="_blank">this template</a>.\n\nNeed more help? Consult our [HTML examples](#section/HTML-Examples).',
  })
  .openapi('CheckBottom')

const ServiceRequestNumberSchema = z
  .string()
  .nullable()
  .openapi({
    description:
      'The service request number (SR#) of an approved USPS promotion (for example, the Integrated Technology promotion) to apply to this mailpiece. Supported on letters, postcards, self mailers, and checks.\n\nThis must be a **top-level** field in the create request, alongside `size`, `front`, and `back` — **not** nested inside `merge_variables` or any other object. A misplaced `service_request_number` is silently ignored: the mailpiece is created successfully with no promotion applied and no error returned.\n\nThe SR# must be approved for your account and cover the resource type, size, and mail type of this mailpiece for the promotion to apply. If omitted, no promotion is applied. See our <a href="https://help.lob.com/print-and-mail/building-a-mail-strategy/usps-promotions-through-lob" target="_blank">guide to USPS promotions through Lob</a> for more information.',
  })
  .openapi('ServiceRequestNumber')

const CheckEditablePropsSchema = CheckBaseSchema.and(CheckInputToSchema)
  .and(
    z
      .object({
        from: z
          .xor([AdrIdSchema, InlineAddressUsSchema])
          .openapi({
            description:
              'Must either be an address ID or an inline object with correct address parameters. Must either be an address ID or an inline object with correct address parameters. All addresses will be standardized into uppercase without being modified by verification.',
          }),
        bank_account: BankIdNoDescriptionSchema.and(
          z.string().openapi({ description: 'The id for a verified bank account.' }),
        ),
        amount: z
          .float32()
          .max(999999.99)
          .openapi({
            description:
              'The payment amount to be sent in US dollars. Amounts will be rounded to two decimal places.',
          }),
        logo: z
          .xor([
            z.string().regex(/^https:\/\/[-a-zA-Z0-9@:%._+~#=\/]{1,256}.(png|jpg)$/),
            z.string().regex(/^(?!https:\/\/)[a-zA-Z0-9@:%._+~#=\/]{1,256}.(png|jpg)$/),
          ])
          .exactOptional()
          .openapi({
            description:
              'Accepts a remote URL or local file upload to an image to print (in grayscale) in the upper-left corner of your check. Image requirements:\n\n  * RGB or CMYK\n\n  * square\n\n  * minimum size: 100px x 100px\n\n  * transparent backgrond\n\n  * `png` or `jpg`',
          }),
        check_bottom: CheckBottomSchema.exactOptional(),
        attachment: z
          .xor([HtmlStringSchema, TmplIdSchema, RemoteFileUrlSchema, LocalFilePathSchema])
          .exactOptional()
          .openapi({
            description:
              'A document to include with the check.\n\nNotes:\n- HTML merge variables should not include delimiting whitespace.\n- All pages of PDF, PNG, and JPGs must be sized at 8.5"x11" at 300 DPI, while supplied HTML will be rendered and trimmed to as many 8.5"x11" pages as necessary.\n- If a PDF is provided, it must be 6 pages or fewer.\n- The attachment will be printed double-sided in black & white and will be included in the envelope after the check page.\n- Please follow these <a href="https://s3-us-west-2.amazonaws.com/public.lob.com/assets/templates/check_attachment_template.pdf" target="_blank">design guidelines</a>.\n\nSee <a href="https://lob.com/pricing/print-mail#compare" target="_blank">pricing</a> for extra costs incurred. Need more help? Consult our [HTML examples](#section/HTML-Examples).',
          }),
        billing_group_id: BillingGroupIdSchema.exactOptional(),
        use_type: ChkUseTypeSchema,
        service_request_number: ServiceRequestNumberSchema.exactOptional(),
        print_speed: PrintSpeedSchema.exactOptional(),
      })
      .openapi({ required: ['bank_account', 'to', 'from', 'amount', 'use_type'] }),
  )
  .openapi('CheckEditableProps')

const CheckEditableSchema = z
  .xor([
    z
      .unknown()
      .superRefine((val, ctx) => {
        if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
          if (!Object.hasOwn(val, 'message')) {
            ctx.addIssue({ code: 'custom' })
          }
        }
      })
      .openapi({ required: ['message'] })
      .and(CheckEditablePropsSchema)
      .openapi({ title: 'words at check bottom' }),
    z
      .unknown()
      .superRefine((val, ctx) => {
        if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
          if (!Object.hasOwn(val, 'check_bottom')) {
            ctx.addIssue({ code: 'custom' })
          }
        }
      })
      .openapi({ required: ['check_bottom'] })
      .and(CheckEditablePropsSchema)
      .openapi({ title: 'image at check bottom' }),
  ])
  .openapi('CheckEditable')

const CheckDeletionSchema = z
  .object({ id: ChkIdSchema.exactOptional(), deleted: DeletedSchema.exactOptional() })
  .openapi({
    description:
      "Lob uses RESTful HTTP response codes to indicate success or failure of an API request. In general, 2xx indicates success, 4xx indicate an input error, and 5xx indicates an error on Lob's end.",
    required: [],
  })
  .openapi('CheckDeletion')

const CrvFrontSchema = z
  .xor([TmplIdSchema, LocalFilePathSchema])
  .openapi({
    description:
      'The artwork to use as the front of your postcard.\n\nNotes:\n- HTML merge variables should not include delimiting whitespace.\n- PDF, PNG, and JPGs must be sized at 4.25"x6.25", 6.25"x9.25", or 6.25"x11.25" at 300 DPI, while supplied HTML template will be rendered to the specified `size`.\n\nSee [here](#section/HTML-Examples) for HTML examples.\n',
  })
  .openapi('CrvFront')

const CrvBackSchema = z
  .xor([TmplIdSchema, LocalFilePathSchema])
  .openapi({
    description:
      'The artwork to use as the back of your postcard creative.\n\nNotes:\n- HTML merge variables should not include delimiting whitespace.\n- PDF, PNG, and JPGs must be sized at 4.25"x6.25", 6.25"x9.25", or 6.25"x11.25" at 300 DPI, while supplied HTML template will be rendered to the specified `size`.\n- Be sure to leave room for address and postage information by following the templates provided here:\n  - <a href="https://s3-us-west-2.amazonaws.com/public.lob.com/assets/templates/postcards/4x6_postcard.pdf" target="_blank">4x6 template</a>\n  - <a href="https://s3-us-west-2.amazonaws.com/public.lob.com/assets/templates/postcards/6x9_postcard.pdf" target="_blank">6x9 template</a>\n  - <a href="https://s3-us-west-2.amazonaws.com/public.lob.com/assets/templates/postcards/6x11_postcard.pdf" target="_blank">6x11 template</a>\n\n\nSee [here](#section/HTML-Examples) for HTML examples.\n',
  })
  .openapi('CrvBack')

const QrCodeCampaignsSchema = z
  .object({
    position: z
      .literal('relative')
      .openapi({
        description:
          "Sets how a QR code is being positioned in the document. Together with this, you should provide one of 'top' or 'bottom', and one of 'left' or 'right'.",
      }),
    top: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Vertical distance (in inches) to place QR code from the top. Only allowed if "bottom" isn\'t provided.',
      }),
    right: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Horizontal distance (in inches) to place QR code from the right. Only allowed if "left" isn\'t provided.',
      }),
    left: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Horizontal distance (in inches) to place QR code from the left. Only allowed if "right" isn\'t provided.',
      }),
    bottom: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Vertical distance (in inches) to place QR code from the bottom. Only allowed if "top" isn\'t provided.',
      }),
    redirect_url: z
      .any()
      .exactOptional()
      .openapi({
        description:
          'The url to redirect the user when a QR code is scanned. The URL can be a standard URL for all recipients in the campaign or customized per recipient. To customize for each recipient, use a mustache style template with merge variables enclosed in curly braces(for example, `https://www.example.com` or `{{name}}` or `https://www.example.com?q={{name}}`). If a merge variable is used in the URL, a mapping to that merge variable should be provided in the `mergeVariableColumnMapping` property when creating an upload. If the variable is not provided/does not exist, then the templated URL will be used. More details on customizing redirect URLs can be found in <a href="https://help.lob.com/print-and-mail/designing-mail-creatives/adding-qr-codes#destination-url-and-redirects" target="_blank">our help center.</a>.\nNote: Please use unique variable names between HTML templates and Redirect URLs to avoid conflicts. For example, if you are using `{{name}}` in the HTML template, use `{{name_redirect}}` in the Redirect URL. They can still be mapped to the same column in the audience file. Failing to set or map the redirect URL when using QR codes may lead to errors in generating mail pieces.\n',
      }),
    width: z
      .string()
      .openapi({
        description:
          'The size (in inches) of the QR code with a minimum of 1 inch. All QR codes are generated as a square.',
      }),
    pages: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Specify the pages where the QR code should be stamped in a comma separated format. Your QR code can be printed in the same position on multiple pages. For postcards, the values should either be "front", "back" (for either front or back) or "front,back" (for the QR code to be printed on both sides). For self-mailers and snap packs, the values should either be "inside", "outside" (for either inside or outside) or "inside,outside" (for the QR code to be printed on both sides). For letters and booklets, the values can be specific page numbers ("1", "3"), page number ranges such as "1-3", or a comma separated combination of both ("1,3,5-7").',
      }),
  })
  .openapi({
    description:
      'Customize and place a QR code on all the postcards, letters or self mailers in a campaign. Redirect URLs are fully customizable i.e. they can be standard single URLs for the whole campaign, or variables can be used to customize them for each recipient. More details on customizing redirect URLs can be found in <a href="https://help.lob.com/print-and-mail/designing-mail-creatives/adding-qr-codes#destination-url-and-redirects" target="_blank">our help center.</a>',
    required: ['position', 'width'],
  })
  .openapi('QrCodeCampaigns')

const WritableSchema = z
  .object({
    mail_type: MailTypeSchema.exactOptional(),
    size: PostcardSizeSchema.exactOptional(),
    qr_code: QrCodeCampaignsSchema.exactOptional(),
  })
  .openapi({
    description:
      'Properties that the postcards in your Creative should have. See the `qr_code` attribute below to add a QR code to your creative.',
    required: ['color'],
  })
  .openapi('Writable')

const LetterAddOnTypesSchema = z
  .enum(['buckslips', 'cards', 'custom_envelope'])
  .openapi('LetterAddOnTypes')

const UserProvidedSchema = z
  .string()
  .regex(/^env_[a-zA-Z0-9]+$/)
  .nullable()
  .openapi({
    description:
      'Accepts an envelope ID for any customized envelope with available inventory. If no inventory is available for the specified ID, the letter will not be sent, and an error will be returned. If the letter has more than 6 sheets, it will be sent in a blank flat envelope. Custom envelopes may be created and ordered from the dashboard. This feature is exclusive to certain customers. Upgrade to the appropriate <a href="https://dashboard.lob.com/#/settings/editions" target="_blank">Print & Mail Edition</a> to gain access.',
  })
  .openapi('UserProvided')

const Writable_2Schema = z
  .object({
    address_placement: AddressPlacementSchema.exactOptional(),
    add_on_types: z
      .array(LetterAddOnTypesSchema)
      .min(0)
      .max(3)
      .nullable()
      .exactOptional()
      .openapi({
        description: 'An array containing the types of add-ons for the Letter Creative.',
      }),
    buckslips: z
      .array(BuckslipIdSchema)
      .min(0)
      .max(1)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'A single-element array containing an existing buckslip id in a string format. See [buckslips](#tag/Buckslips) for more information. Note that buckslip letter campaigns require a minimum send quantity of 5,000 letters per campaign.',
      }),
    cards: z
      .array(CardIdSchema)
      .min(0)
      .max(1)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'A single-element array containing an existing card id in a string format. See [cards](#tag/Cards) for more information.',
      }),
    color: ColorSchema,
    custom_envelope: UserProvidedSchema.exactOptional(),
    double_sided: DoubleSidedSchema.exactOptional(),
    extra_service: ExtraServiceSchema.exactOptional(),
    mail_type: MailTypeSchema.exactOptional(),
    qr_code: QrCodeCampaignsSchema.exactOptional(),
  })
  .openapi({
    description:
      'Properties that the letters in your Creative should have. See the `qr_code` attribute below to add a QR code to your creative.',
    required: ['color'],
  })
  .openapi('Writable_2')

const CrvFileSchema = z
  .xor([TmplIdSchema, LocalFilePathSchema])
  .openapi({
    description:
      'Notes:\n- HTML merge variables should not include delimiting whitespace.\n- All pages of a supplied PDF file must be sized at 8.5"x11", while supplied HTML will be rendered and trimmed to as many 8.5"x11" pages as necessary.\n- For design specifications, please see our <a href="https://s3-us-west-2.amazonaws.com/public.lob.com/assets/templates/letter_template.pdf" target="_blank">PDF</a> and [HTML](#section/HTML-Examples) templates.\n- If a `custom_envelope` is used, follow <a href="https://s3-us-west-2.amazonaws.com/public.lob.com/assets/templates/letter_custom_envelope.pdf" target="_blank">this template</a>.\n- For domestic destinations, the file limit is 60 pages single-sided or 120 pages double-sided. For international destinations, the file limit is 6 pages single-sided or 12 pages double-sided. PDFs that surpass the file limit will error, while HTML that renders more pages than the file limit will be trimmed.\n- Any letters over 6 pages single-sided or 12 pages double-sided will be placed in a <a href="https://s3-us-west-2.amazonaws.com/public.lob.com/assets/templates/letter_flat_template.pdf" target="_blank">flat envelope</a> instead of the standard double window envelope.\n\nSee <a href="https://lob.com/pricing/print-mail#compare" target="_blank">pricing</a> for extra costs incurred.',
  })
  .openapi('CrvFile')

const CrvInsideSchema = z
  .xor([TmplIdSchema, LocalFilePathSchema])
  .openapi({
    description:
      'The artwork to use as the inside of your self mailer creative.\nNotes:\n- HTML merge variables should not include delimiting whitespace.\n- PDF, PNG, and JPGs must be sized at 6.25"x18.25", 12.25"x9.25" or 11.25"x9.25" at 300 DPI, while supplied HTML template will be rendered to the specified `size`.\n- Be sure to leave room for address and postage information by following the templates provided here:\n  - <a href="https://s3-us-west-2.amazonaws.com/public.lob.com/assets/templates/self_mailers/6x18_sfm_bifold_template.pdf" target="_blank">6x18 bifold template</a>\n  - <a href="https://s3-us-west-2.amazonaws.com/public.lob.com/assets/templates/self_mailers/11x9_sfm_bifold_template.pdf" target="_blank">11x9 bifold template</a>\n  - <a href="https://s3-us-west-2.amazonaws.com/public.lob.com/assets/templates/self_mailers/12x9_sfm_bifold_template.pdf" target="_blank">12x9 bifold template</a>\n\n\nSee [here](#section/HTML-Examples) for HTML examples.\n',
  })
  .openapi('CrvInside')

const CrvOutsideSchema = z
  .xor([TmplIdSchema, LocalFilePathSchema])
  .openapi({
    description:
      'The artwork to use as the outside of your self mailer creative.\nNotes:\n- HTML merge variables should not include delimiting whitespace.\n- PDF, PNG, and JPGs must be sized at 6.25"x18.25", 12.25"x9.25" or 11.25"x9.25" at 300 DPI, while supplied HTML template will be rendered to the specified `size`.\n- Be sure to leave room for address and postage information by following the templates provided here:\n  - <a href="https://s3-us-west-2.amazonaws.com/public.lob.com/assets/templates/self_mailers/6x18_sfm_bifold_template.pdf" target="_blank">6x18 bifold template</a>\n  - <a href="https://s3-us-west-2.amazonaws.com/public.lob.com/assets/templates/self_mailers/11x9_sfm_bifold_template.pdf" target="_blank">11x9 bifold template</a>\n  - <a href="https://s3-us-west-2.amazonaws.com/public.lob.com/assets/templates/self_mailers/12x9_sfm_bifold_template.pdf" target="_blank">12x9 bifold template</a>\n\n\nSee [here](#section/HTML-Examples) for HTML examples.\n',
  })
  .openapi('CrvOutside')

const Writable_3Schema = z
  .object({
    mail_type: MailTypeSchema.exactOptional(),
    size: SelfMailerSizeSchema.exactOptional(),
    qr_code: QrCodeCampaignsSchema.exactOptional(),
  })
  .openapi({
    description:
      'Properties that the self mailers in your Creative should have. See the `qr_code` attribute below to add a QR code to your creative.',
    required: ['color'],
  })
  .openapi('Writable_3')

const CreativeWritableSchema = z
  .xor([
    z
      .object({
        resource_type: z
          .literal('postcard')
          .openapi({ description: 'Mailpiece type for the creative' }),
        campaign_id: CmpIdSchema,
        front: CrvFrontSchema,
        back: CrvBackSchema,
        details: WritableSchema,
      })
      .openapi({
        title: 'Postcard Creative',
        required: ['front', 'back', 'campaign_id', 'resource_type', 'details'],
      })
      .and(CreativeBaseSchema),
    z
      .object({
        resource_type: z
          .literal('letter')
          .openapi({ description: 'Mailpiece type for the creative' }),
        campaign_id: CmpIdSchema,
        details: Writable_2Schema,
        file: CrvFileSchema,
      })
      .openapi({
        title: 'Letter Creative',
        required: ['file', 'from', 'campaign_id', 'resource_type', 'details'],
      })
      .and(CreativeBaseSchema),
    z
      .object({
        resource_type: z
          .literal('self_mailer')
          .openapi({ description: 'Mailpiece type for the creative' }),
        campaign_id: CmpIdSchema,
        inside: CrvInsideSchema,
        outside: CrvOutsideSchema,
        details: Writable_3Schema,
      })
      .openapi({
        title: 'Self Mailer Creative',
        required: ['inside', 'outside', 'campaign_id', 'resource_type', 'details'],
      })
      .and(CreativeBaseSchema),
  ])
  .openapi('CreativeWritable')

const RecipientInputSchema = z
  .union([
    z
      .unknown()
      .superRefine((val, ctx) => {
        if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
          if (!Object.hasOwn(val, 'city')) {
            ctx.addIssue({ code: 'custom' })
          }
          if (!Object.hasOwn(val, 'state')) {
            ctx.addIssue({ code: 'custom' })
          }
        }
      })
      .openapi({ title: 'Address object with `city` and `state`', required: ['city', 'state'] }),
    z
      .unknown()
      .superRefine((val, ctx) => {
        if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
          if (!Object.hasOwn(val, 'zip_code')) {
            ctx.addIssue({ code: 'custom' })
          }
        }
      })
      .openapi({ title: 'Address object with `zip_code`', required: ['zip_code'] }),
  ])
  .and(
    z
      .object({
        recipient: RecipientSchema,
        primary_line: PrimaryLineUsSchema,
        secondary_line: SecondaryLineSchema.exactOptional(),
        urbanization: UrbanizationSchema.exactOptional(),
        city: CityNoDescriptionSchema.and(
          z
            .string()
            .openapi({
              description:
                'The name of the city. `city` and `state` are required if no `zip_code` is passed.',
            }),
        ).exactOptional(),
        state: z
          .string()
          .max(50)
          .exactOptional()
          .openapi({
            description:
              'The <a href="https://en.wikipedia.org/wiki/ISO_3166-2:US" target="_blank">ISO 3166-2</a> two letter code or subdivision name for the state. `city` and `state` are required if no `zip_code` is passed.',
          }),
        zip_code: z
          .any()
          .openapi({
            description:
              'Required if `city` and `state` are not passed in. If included, must be formatted as a US ZIP or ZIP+4 (e.g. `94107`, `941072282`, `94107-2282`).',
          })
          .and(ZipCodeSchema)
          .exactOptional(),
      })
      .openapi({ required: ['recipient', 'primary_line'] }),
  )
  .openapi('RecipientInput')

const IdentityValidationCompanySchema = z
  .string()
  .max(500)
  .nullable()
  .openapi({ description: 'The name of the company or firm.' })
  .openapi('IdentityValidationCompany')

const CompanyInputSchema = z
  .union([
    z
      .unknown()
      .superRefine((val, ctx) => {
        if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
          if (!Object.hasOwn(val, 'city')) {
            ctx.addIssue({ code: 'custom' })
          }
          if (!Object.hasOwn(val, 'state')) {
            ctx.addIssue({ code: 'custom' })
          }
        }
      })
      .openapi({ title: 'Address object with `city` and `state`', required: ['city', 'state'] }),
    z
      .unknown()
      .superRefine((val, ctx) => {
        if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
          if (!Object.hasOwn(val, 'zip_code')) {
            ctx.addIssue({ code: 'custom' })
          }
        }
      })
      .openapi({ title: 'Address object with `zip_code`', required: ['zip_code'] }),
  ])
  .and(
    z
      .object({
        company: IdentityValidationCompanySchema,
        primary_line: PrimaryLineUsSchema,
        secondary_line: SecondaryLineSchema.exactOptional(),
        urbanization: UrbanizationSchema.exactOptional(),
        city: CityNoDescriptionSchema.and(
          z
            .string()
            .openapi({
              description:
                'The name of the city. `city` and `state` are required if no `zip_code` is passed.',
            }),
        ).exactOptional(),
        state: z
          .string()
          .max(50)
          .exactOptional()
          .openapi({
            description:
              'The <a href="https://en.wikipedia.org/wiki/ISO_3166-2:US" target="_blank">ISO 3166-2</a> two letter code or subdivision name for the state. `city` and `state` are required if no `zip_code` is passed.',
          }),
        zip_code: z
          .string()
          .openapi({
            description:
              'Required if `city` and `state` are not passed in. If included, must be formatted as a US ZIP or ZIP+4 (e.g. `94107`, `941072282`, `94107-2282`).',
          })
          .and(ZipCodeSchema)
          .exactOptional(),
      })
      .openapi({ required: ['company', 'primary_line'] }),
  )
  .openapi('CompanyInput')

const IdentityValidationWritableSchema = z
  .xor([RecipientInputSchema, CompanyInputSchema])
  .openapi('IdentityValidationWritable')

const IdentityValidationIdSchema = z
  .string()
  .regex(/^id_validation_[a-zA-Z0-9_]+$/)
  .openapi({ description: 'Unique identifier prefixed with `id_validation_`.' })
  .openapi('IdentityValidationId')

const IdentityValidationRecipientSchema = z
  .string()
  .max(500)
  .nullable()
  .openapi({ description: 'The name of the person whose identity is being validated.' })
  .openapi('IdentityValidationRecipient')

const RecipientValidationSchema = z
  .object({
    id: IdentityValidationIdSchema.exactOptional(),
    recipient: IdentityValidationRecipientSchema.exactOptional(),
    primary_line: PrimaryLineUsSchema.exactOptional(),
    secondary_line: SecondaryLineSchema.exactOptional(),
    urbanization: UrbanizationSchema.exactOptional(),
    last_line: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Combination of the following applicable `components`:\n* City (`city`)\n* State (`state`)\n* ZIP code (`zip_code`)\n* ZIP+4 (`zip_code_plus_4`)\n',
      }),
    score: z
      .float32()
      .min(0)
      .max(100)
      .nullable()
      .default(null)
      .exactOptional()
      .openapi({
        description:
          'A numerical score between 0 and 100 that represents the likelihood the provided name is associated with a physical address.\n',
      }),
    confidence: z
      .enum(['high', 'medium', 'low', ''])
      .exactOptional()
      .openapi({
        description:
          'Indicates the likelihood the recipient name and address match based on our custom internal calculation. Possible values are:\n- `high` — Has a Lob confidence score greater than 70.\n- `medium` — Has a Lob confidence score between 40 and 70.\n- `low` — Has a Lob confidence score less than 40.\n- `""` — No tracking data exists for this address.\n',
      }),
    object: z
      .literal('id_validation')
      .default('id_validation')
      .exactOptional()
      .openapi({ description: 'Value is resource type.' }),
  })
  .openapi({ required: [] })
  .openapi('RecipientValidation')

const CompanyValidationSchema = z
  .object({
    id: IdentityValidationIdSchema.exactOptional(),
    company: IdentityValidationCompanySchema.exactOptional(),
    primary_line: PrimaryLineUsSchema.exactOptional(),
    secondary_line: SecondaryLineSchema.exactOptional(),
    urbanization: UrbanizationSchema.exactOptional(),
    last_line: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Combination of the following applicable `components`:\n* City (`city`)\n* State (`state`)\n* ZIP code (`zip_code`)\n* ZIP+4 (`zip_code_plus_4`)\n',
      }),
    score: z
      .float32()
      .min(0)
      .max(100)
      .nullable()
      .default(null)
      .exactOptional()
      .openapi({
        description:
          'A numerical score between 0 and 100 that represents the likelihood the provided name is associated with a physical address.\n',
      }),
    confidence: z
      .enum(['high', 'medium', 'low', ''])
      .exactOptional()
      .openapi({
        description:
          'Indicates the likelihood the recipient name and address match based on our custom internal calculation. Possible values are:\n- `high` — Has a Lob confidence score greater than 70.\n- `medium` — Has a Lob confidence score between 40 and 70.\n- `low` — Has a Lob confidence score less than 40.\n- `""` — No tracking data exists for this address.\n',
      }),
    object: z
      .literal('id_validation')
      .default('id_validation')
      .exactOptional()
      .openapi({ description: 'Value is resource type.' }),
  })
  .openapi({ required: [] })
  .openapi('CompanyValidation')

const IdentityValidationSchema = z
  .xor([RecipientValidationSchema, CompanyValidationSchema])
  .openapi('IdentityValidation')

const CommonSchema = z
  .object({
    quantity: z
      .int()
      .min(2)
      .max(10000000)
      .exactOptional()
      .openapi({
        description:
          'The number of mail pieces that will be part of this Informed Delivery campaign. USPS requires that IMB Codes are in sequence, so any mail pieces sent beyond this quantity will be rejected.\n',
      }),
    status: z.string().exactOptional(),
    ride_along_url: z
      .string()
      .regex(/^https:\/\/.{5,247}$/)
      .min(10)
      .max(255)
      .exactOptional()
      .openapi({
        description:
          'To qualify as part of a promotion, the base domain must match the domain used to register the promotion.\nI.e. If the promo was registered with https://lob.com then you could use any variation of https://lob.com such as\nhttps://lob.com/promotions/promo_123\n',
      }),
    start_date: z.iso
      .date()
      .exactOptional()
      .openapi({
        description:
          'The first date that mail can be handed off to USPS and still included in the informed delivery campaign.\nThe start date must be at least two days in the future. The end date will be automatically calculated to be 45 days from the start.\nFor Target Delivery Date, recommended to set the start date to the earliest possible date (2 days from now).\n',
      }),
    brand_name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The brand name you would like included in the informed delivery email. Will default to the “company” on the users account.',
      }),
    usps_title: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Unique title for the campaign. One will be auto generated if not provided.',
      }),
    lob_campaign_id: z
      .string()
      .regex(/^cmp_[a-zA-Z0-9]+$/)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'When sending as part of Lob’s campaign workflow, include the lob_campaign_id as part of the request to associate this Informed Delivery campaign with the Lob campaign\n',
      }),
  })
  .openapi({ required: [] })
  .openapi('Common')

const InfdIdSchema = z
  .string()
  .regex(/^infd_[a-zA-Z0-9]+$/)
  .openapi({
    description: 'Unique identifier prefixed with `infd_`.',
    example: 'infd_23g423g4234g342',
  })
  .openapi('InfdId')

const UspsCampaignIdSchema = z
  .string()
  .regex(/^[0-9]+$/)
  .openapi({ description: 'A numberical string up to 12 characters long.', example: '1200772869' })
  .openapi('UspsCampaignId')

const ResponseSchema = CommonSchema.and(
  z
    .object({
      id: InfdIdSchema,
      object: z
        .literal('informed_delivery_campaign')
        .openapi({ description: 'Value is the resource type.' }),
      account_id: z.string().openapi({ description: 'Your Lob account id.' }),
      usps_campaign_id: UspsCampaignIdSchema,
      end_date: z.iso
        .datetime({ offset: true })
        .openapi({ description: 'A timestamp in ISO 8601 format of the date the campaign ends.' }),
      start_serial: z
        .int()
        .nullable()
        .openapi({
          description:
            'The first serial number in the range of serial numbers for this campaign.\nOnly non-null when campaign is approved.\n',
        }),
      end_serial: z
        .int()
        .nullable()
        .openapi({
          description:
            'The last serial number in the range of serial numbers for this campaign.\nOnly non-null when campaign is approved.\n',
        }),
      ride_along_image_s3_link: z
        .string()
        .openapi({ description: 'A URL link to the campaigns ride along image.' }),
      representative_image_s3_link: z
        .string()
        .nullable()
        .openapi({ description: 'A URL link to the campaigns representative image.' }),
      date_created: DateCreatedSchema,
      date_modified: DateModifiedSchema,
      mode: z
        .enum(['live', 'test'])
        .openapi({
          description:
            'The mode of the Informed Delivery campaign. This is set by the API token you used to create the campaign.',
        }),
      deleted: z.boolean().openapi({ description: 'Whether the resource has been deleted.' }),
      campaign_code: z
        .string()
        .openapi({
          description: 'The campaign code associated with the Informed Delivery campaign.',
        }),
      service_request_number: z
        .string()
        .nullable()
        .openapi({
          description:
            'The USPS promotion service request number used to create this campaign (if there was one used).',
        }),
    })
    .openapi({
      required: [
        'id',
        'object',
        'account_id',
        'quantity',
        'usps_campaign_id',
        'usps_title',
        'start_date',
        'end_date',
        'start_serial',
        'end_serial',
        'ride_along_url',
        'ride_along_image_s3_link',
        'representative_image_s3_link',
        'status',
        'date_created',
        'date_modified',
        'mode',
        'lob_campaign_id',
        'deleted',
        'campaign_code',
        'brand_name',
        'service_request_number',
      ],
    }),
).openapi('Response')

const WritableBaseSchema = CommonSchema.and(
  z
    .object({
      ride_along_image: z
        .object({})
        .exactOptional()
        .openapi({
          description:
            'JPG Image. Maximum file size is 200 KBs. Maximum pixel size is 300 pixels wide x 200 pixels high',
        }),
      representative_image: z
        .object({})
        .exactOptional()
        .openapi({
          description:
            'JPG Image. Maximum file size is 200 KBs. Maximum pixel size is 300 pixels wide x 200 pixels high',
        }),
    })
    .openapi({ required: [] }),
).openapi('WritableBase')

const CreateSchema = WritableBaseSchema.and(
  z
    .object({
      status: z
        .literal('pending_approval')
        .exactOptional()
        .openapi({
          description:
            'If setting a campaign to `pending_approval` the Informed Delivery campaign will not be active, and you can not send mail using it.\nIt will be editable in this status however, and changes can be made until `approved`.\n**NOTE** that the default status is `approved` which makes the campaign active, but un-editable.\n',
        }),
    })
    .openapi({ required: ['quantity', 'ride_along_image', 'ride_along_url', 'start_date'] }),
).openapi('Create')

const UpdateSchema = WritableBaseSchema.and(
  z
    .object({
      status: z
        .literal('approved')
        .exactOptional()
        .openapi({
          description:
            'After setting an Informed Delivery campaign to “approved” said campaign will activate, and you can start sending mail using it.\nYou will no longer be able to edit an Informed Delivery campaign in this status.\n',
        }),
    })
    .openapi({ required: [] }),
).openapi('Update')

const SingleLineAddressIntlSchema = z
  .object({
    address: z
      .string()
      .max(500)
      .openapi({
        description: 'The entire address in one string (e.g., "370 Water St C1N 1C4").\n',
      }),
    country: CountryExtendedSchema,
  })
  .openapi({ required: ['address', 'country'] })
  .openapi('SingleLineAddressIntl')

const IntlVerificationWritableSchema = z
  .xor([MultipleComponentsIntlSchema, SingleLineAddressIntlSchema])
  .openapi('IntlVerificationWritable')

const NoExtraServiceSchema = z
  .object({
    tracking_events: z
      .array(TrackingEventNormalSchema)
      .exactOptional()
      .openapi({ description: 'An array of tracking events ordered by ascending `time`.' }),
    cards: z
      .array(CardSchema)
      .nullable()
      .exactOptional()
      .openapi({ description: 'An array of cards associated with a specific letter' }),
    buckslips: z
      .array(BuckslipSchema)
      .nullable()
      .exactOptional()
      .openapi({ description: 'An array of buckslip(s) associated with a specific letter' }),
    return_address: ReturnAddressSchema.exactOptional(),
    description: ResourceDescriptionSchema.exactOptional(),
    metadata: MetadataSchema.exactOptional(),
    merge_variables: MergeVariablesSchema.exactOptional(),
    send_date: SendDateSchema.exactOptional(),
    mail_type: MailTypeSchema.exactOptional(),
    color: ColorSchema,
    double_sided: DoubleSidedSchema.exactOptional(),
    address_placement: AddressPlacementSchema.exactOptional(),
    return_envelope: Returned_5Schema.exactOptional(),
    perforated_page: z
      .int()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Required if `return_envelope` is `true`. The number of the page that should be perforated for use with the return envelope. Must be greater than or equal to `1`. The blank page added by `address_placement=insert_blank_page` will be ignored when considering the perforated page number. To see how perforation will impact your letter design, view our <a href="https://s3-us-west-2.amazonaws.com/public.lob.com/assets/templates/letter_perf_template.pdf" target="_blank">perforation guide</a>.',
      }),
    custom_envelope: Returned_2Schema.exactOptional(),
  })
  .openapi({ required: ['color'] })
  .and(LetterGeneratedBaseSchema)
  .openapi('NoExtraService')

const RegisteredSchema = z
  .object({
    extra_service: z
      .literal('registered')
      .openapi({
        description:
          'Add an extra service to your letter. See <a href="https://www.lob.com/pricing/print-mail#compare" target="_blank">pricing</a> for extra costs incurred.\n  * registered - provides tracking and confirmation for international addresses\n',
      }),
    tracking_number: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The tracking number will appear here when it becomes available.\nDummy tracking numbers are not created in test mode.',
      }),
    tracking_events: z
      .array(TrackingEventNormalSchema)
      .max(0)
      .exactOptional()
      .openapi({ description: 'Tracking events are not populated for registered letters.' }),
    return_address: ReturnAddressSchema.exactOptional(),
    description: ResourceDescriptionSchema.exactOptional(),
    metadata: MetadataSchema.exactOptional(),
    merge_variables: MergeVariablesSchema.exactOptional(),
    send_date: SendDateSchema.exactOptional(),
    mail_type: MailTypeSchema.exactOptional(),
    color: ColorSchema,
    double_sided: DoubleSidedSchema.exactOptional(),
    address_placement: AddressPlacementSchema.exactOptional(),
    return_envelope: Returned_5Schema.exactOptional(),
    perforated_page: z
      .int()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Required if `return_envelope` is `true`. The number of the page that should be perforated for use with the return envelope. Must be greater than or equal to `1`. The blank page added by `address_placement=insert_blank_page` will be ignored when considering the perforated page number. To see how perforation will impact your letter design, view our <a href="https://s3-us-west-2.amazonaws.com/public.lob.com/assets/templates/letter_perf_template.pdf" target="_blank">perforation guide</a>.',
      }),
    custom_envelope: Returned_2Schema.exactOptional(),
  })
  .openapi({ required: ['extra_service', 'color'] })
  .and(LetterGeneratedBaseSchema)
  .openapi('Registered')

const CertifiedSchema: z.ZodType<CertifiedType> = z
  .lazy(() =>
    z
      .object({
        extra_service: z
          .enum(['certified', 'certified_return_receipt'])
          .openapi({
            description:
              'Add an extra service to your letter. See <a href="https://www.lob.com/pricing/print-mail#compare" target="_blank">pricing</a> for extra costs incurred.\n  * `certified` - track and confirm delivery for domestic destinations. An extra sheet (1 PDF page single-sided or 2 PDF pages double-sided) is added to the beginning of your letter for address and barcode information. See here for templates: <a href="https://s3-us-west-2.amazonaws.com/public.lob.com/assets/templates/letter_certified_template.pdf" target="_blank">#10 envelope</a> and <a href="https://s3-us-west-2.amazonaws.com/public.lob.com/assets/templates/letter_certified_flat_template.pdf" target="_blank">flat envelope</a> (used for letters over 6 pages single-sided or 12 pages double-sided). You will not be charged for this extra sheet.\n  * `certified_return_receipt` - request an electronic copy of the recipient\'s signature to prove delivery of your certified letter\n',
          }),
        tracking_number: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'The tracking number will be here immediately upon creation.\nDummy tracking numbers are created in test mode.',
          }),
        tracking_events: z
          .array(TrackingEventCertifiedSchema)
          .openapi({
            description:
              'An array of certified tracking events ordered by ascending `time`. Not populated in test mode.',
          }),
        return_address: ReturnAddressSchema.exactOptional(),
        description: ResourceDescriptionSchema.exactOptional(),
        metadata: MetadataSchema.exactOptional(),
        merge_variables: MergeVariablesSchema.exactOptional(),
        send_date: SendDateSchema.exactOptional(),
        mail_type: MailTypeSchema.exactOptional(),
        color: ColorSchema,
        double_sided: DoubleSidedSchema.exactOptional(),
        address_placement: AddressPlacementSchema.exactOptional(),
        return_envelope: Returned_5Schema.exactOptional(),
        perforated_page: z
          .int()
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'Required if `return_envelope` is `true`. The number of the page that should be perforated for use with the return envelope. Must be greater than or equal to `1`. The blank page added by `address_placement=insert_blank_page` will be ignored when considering the perforated page number. To see how perforation will impact your letter design, view our <a href="https://s3-us-west-2.amazonaws.com/public.lob.com/assets/templates/letter_perf_template.pdf" target="_blank">perforation guide</a>.',
          }),
        custom_envelope: Returned_2Schema.exactOptional(),
      })
      .openapi({ required: ['extra_service', 'tracking_events', 'color'] })
      .and(LetterGeneratedBaseSchema),
  )
  .openapi('Certified')

const LetterSchema = z
  .xor([
    z.any().openapi({ title: 'regular' }).and(NoExtraServiceSchema),
    z.any().openapi({ title: 'registered' }).and(RegisteredSchema),
    z.any().openapi({ title: 'certified' }).and(CertifiedSchema),
  ])
  .openapi('Letter')

const LetterDeletionSchema = z
  .object({ id: LtrIdSchema.exactOptional(), deleted: DeletedSchema.exactOptional() })
  .openapi({
    description:
      "Lob uses RESTful HTTP response codes to indicate success or failure of an API request. In general, 2xx indicates success, 4xx indicate an input error, and 5xx indicates an error on Lob's end.",
    required: [],
  })
  .openapi('LetterDeletion')

const UserProvided_2Schema = z
  .xor([z.boolean(), z.string()])
  .default(false)
  .openapi({
    description:
      'Indicates if a return envelope is requested for the letter. The value corresponding to this field is by default a boolean. But if the account is signed up for custom return envelopes, the value is of type string and is `no_9_single_window` for a standard return envelope and a custom `return_envelope_id` for non-standard return envelopes.\n\nTo include a return envelope with your letter, set to `true` and specify the `perforated_page`. See <a href="https://www.lob.com/pricing/print-mail#compare" target="_blank">pricing</a> for extra costs incurred.',
  })
  .openapi('UserProvided_2')

const LetterEditableSchema = InputToSchema.and(InputFromSchema)
  .and(EditableSchema)
  .and(
    z
      .object({
        file: LtrFileSchema,
        extra_service: ExtraServiceSchema.exactOptional(),
        cards: z
          .array(CardIdSchema)
          .min(0)
          .max(1)
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'A single-element array containing an existing card id in a string format. See [cards](#tag/Cards) for more information. Not available for `us_legal` letter size.',
          }),
        mail_type: MailTypeSchema.exactOptional(),
        color: ColorSchema.and(z.any().default(false)),
        double_sided: DoubleSidedSchema.exactOptional(),
        address_placement: AddressPlacementSchema.exactOptional(),
        return_envelope: UserProvided_2Schema.exactOptional(),
        perforated_page: z
          .int()
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'Required if `return_envelope` is `true`. The number of the page that should be perforated for use with the return envelope. Must be greater than or equal to `1`. The blank page added by `address_placement=insert_blank_page` will be ignored when considering the perforated page number. To see how perforation will impact your letter design, view our <a href="https://s3-us-west-2.amazonaws.com/public.lob.com/assets/templates/letter_perf_template.pdf" target="_blank">perforation guide</a>.',
          }),
        custom_envelope: UserProvidedSchema.exactOptional(),
        billing_group_id: BillingGroupIdSchema.exactOptional(),
        qr_code: QrCodeSchema.exactOptional(),
        use_type: LtrUseTypeSchema,
        service_request_number: ServiceRequestNumberSchema.exactOptional(),
        fsc: z
          .boolean()
          .default(false)
          .exactOptional()
          .openapi({
            description:
              'This is in beta. Contact support@lob.com or your account contact to learn more. Not available for `A4` and `us_legal` letter size.',
          }),
        size: LtrSizeSchema.exactOptional(),
        print_speed: PrintSpeedSchema.exactOptional(),
      })
      .openapi({ required: ['to', 'from', 'file', 'color', 'use_type'] }),
  )
  .openapi('LetterEditable')

const PscIdSchema = z
  .string()
  .regex(/^psc_[a-zA-Z0-9]+$/)
  .openapi({ description: 'Unique identifier prefixed with `psc_`.' })
  .openapi('PscId')

const PostcardBaseSchema = EditableSchema.and(
  z.object({ size: PostcardSizeSchema.exactOptional() }).openapi({ required: [] }),
).openapi('PostcardBase')

const PscUseTypeSchema = z
  .union([z.literal('marketing'), z.literal('operational'), z.literal(null)])
  .nullable()
  .openapi({
    description:
      'The use type for each mailpiece. Can be one of marketing, operational, or null. Null use_type is only allowed if an account default use_type is selected in Account Settings. For more information on use_type, see our  [Help Center article](https://help.lob.com/print-and-mail/building-a-mail-strategy/managing-mail-settings/declaring-mail-use-type).',
  })
  .openapi('PscUseType')

const PostcardSchema = PostcardBaseSchema.and(GeneratedSchema)
  .and(FromUsSchema)
  .and(
    z
      .object({
        id: PscIdSchema,
        front_template_id: z
          .string()
          .regex(/^tmpl_[a-zA-Z0-9]+$/)
          .nullable()
          .openapi({
            description:
              'The unique ID of the HTML template used for the front of the postcard. Only filled out when the request contains a valid postcard template ID.',
          }),
        back_template_id: z
          .string()
          .regex(/^tmpl_[a-zA-Z0-9]+$/)
          .nullable()
          .openapi({
            description:
              'The unique ID of the HTML template used for the back of the postcard. Only filled out when the request contains a valid postcard template ID.',
          }),
        front_template_version_id: z
          .string()
          .regex(/^vrsn_[a-zA-Z0-9]+$/)
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'The unique ID of the specific version of the HTML template used for the front of the postcard. Only filled out when the request contains a valid postcard template ID.',
          }),
        back_template_version_id: z
          .string()
          .regex(/^vrsn_[a-zA-Z0-9]+$/)
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'The unique ID of the specific version of the HTML template used for the back of the postcard. Only filled out when the request contains a valid postcard template ID.',
          }),
        tracking_events: z
          .array(TrackingEventNormalSchema)
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'An array of tracking_event objects ordered by ascending `time`. Will not be populated for postcards created in test mode.',
          }),
        url: SignedLinkSchema,
        campaign_id: CampaignIdSchema.exactOptional(),
        use_type: PscUseTypeSchema.exactOptional(),
        fsc: z
          .boolean()
          .default(false)
          .exactOptional()
          .openapi({
            description:
              'This is in beta. Contact support@lob.com or your account contact to learn more. Not available for `4x6` or `A5` postcard sizes.',
          }),
        status: StatusSchema.exactOptional(),
        failure_reason: FailureReasonSchema.nullable().exactOptional(),
        object: z
          .literal('postcard')
          .default('postcard')
          .exactOptional()
          .openapi({ description: 'Value is resource type.' }),
      })
      .openapi({ required: ['id', 'front_template_id', 'back_template_id', 'url'] }),
  )
  .openapi('Postcard')

const PostcardDeletionSchema = z
  .object({ id: PscIdSchema.exactOptional(), deleted: DeletedSchema.exactOptional() })
  .openapi({
    description:
      "Lob uses RESTful HTTP response codes to indicate success or failure of an API request. In general, 2xx indicates success, 4xx indicate an input error, and 5xx indicates an error on Lob's end.",
    required: [],
  })
  .openapi('PostcardDeletion')

const PostcardEditableSchema = PostcardBaseSchema.and(InputToSchema)
  .and(InputFromUsSchema)
  .and(
    z
      .object({
        front: PscFrontSchema,
        back: PscBackSchema,
        billing_group_id: BillingGroupIdSchema.exactOptional(),
        qr_code: QrCodeSchema.exactOptional(),
        use_type: PscUseTypeSchema,
        service_request_number: ServiceRequestNumberSchema.exactOptional(),
        fsc: z
          .boolean()
          .default(false)
          .exactOptional()
          .openapi({
            description:
              'This is in beta. Contact support@lob.com or your account contact to learn more. Not available for `4x6` or `A5` postcard sizes.',
          }),
        print_speed: PrintSpeedSchema.exactOptional(),
      })
      .openapi({ required: ['to', 'front', 'back', 'use_type'] }),
  )
  .openapi('PostcardEditable')

const ScansSchema = z
  .object({ ip_location: z.string().exactOptional(), scan_date: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('Scans')

const QrCodeScansSchema = z
  .object({
    resource_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'Unique identifier for each mail piece.' }),
    date_created: DateCreatedSchema.exactOptional(),
    number_of_scans: z
      .number()
      .exactOptional()
      .openapi({
        description: 'Number of times the QR Code associated with this mail piece was scanned.',
      }),
    scans: z
      .array(ScansSchema)
      .exactOptional()
      .openapi({ description: 'Detailed scan information associated with each mail piece.' }),
  })
  .openapi({ required: [] })
  .openapi('QrCodeScans')

const DomainResponseSchema = z
  .object({
    id: z.string().exactOptional().openapi({ description: 'Unique identifier for a domain.' }),
    domain: z.string().exactOptional().openapi({ description: 'The registered domain/hostname.' }),
    error_redirect_link: z
      .string()
      .exactOptional()
      .openapi({ description: 'URL to redirect customers if a short link is broken or inactive.' }),
    status: z
      .enum(['configured', 'not_configured'])
      .exactOptional()
      .openapi({ description: 'The configuration status of the domain.' }),
    created_at: z
      .string()
      .exactOptional()
      .openapi({ description: 'The date and time the domain was created.' }),
    updated_at: z
      .string()
      .exactOptional()
      .openapi({ description: 'The date and time the domain was last updated.' }),
  })
  .openapi({ required: [] })
  .openapi('DomainResponse')

const DomainDeleteSchema = z
  .object({
    id: z.string().exactOptional().openapi({ description: 'Unique identifier for a domain.' }),
    deleted: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Only returned if the domain was successfully deleted.' }),
  })
  .openapi({ required: [] })
  .openapi('DomainDelete')

const DomainsResponseSchema = ListSchema.and(
  z
    .object({
      data: z
        .array(DomainResponseSchema)
        .exactOptional()
        .openapi({ description: 'List of domains.' }),
    })
    .openapi({ required: [] }),
).openapi('DomainsResponse')

const DomainSchema = z
  .string()
  .openapi({ description: 'The registered domain/hostname.' })
  .openapi('Domain')

const ErrorRedirectLinkSchema = z
  .string()
  .openapi({ description: 'URL to redirect customers if a short link is broken or inactive.' })
  .openapi('ErrorRedirectLink')

const DomainsSchema = z
  .object({ domain: DomainSchema, error_redirect_link: ErrorRedirectLinkSchema.exactOptional() })
  .openapi({ required: ['domain'] })
  .openapi('Domains')

const RedirectLinkSchema = z
  .string()
  .openapi({ description: 'The original target URL.' })
  .openapi('RedirectLink')

const LinkResponseSchema = z
  .object({
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'Unique identifier prefixed with `lnk_`.' }),
    title: z.string().exactOptional().openapi({ description: 'The title of the URL.' }),
    domain_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'A unique identifier for the registered domain.' }),
    redirect_link: RedirectLinkSchema.exactOptional(),
    short_link: z
      .string()
      .exactOptional()
      .openapi({ description: 'The shortened URL for the associated original URL.' }),
    metadata: MetadataSchema.exactOptional(),
    created_at: z
      .string()
      .exactOptional()
      .openapi({ description: 'The date and time the link was created.' }),
    updated_at: z
      .string()
      .exactOptional()
      .openapi({ description: 'The date and time the link was last updated.' }),
  })
  .openapi({ required: [] })
  .openapi('LinkResponse')

const LinkDeleteResponseSchema = z
  .object({
    id: z.string().exactOptional().openapi({ description: 'Unique identifier for a link.' }),
    deleted: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Only returned if the link was successfully deleted.' }),
  })
  .openapi({ required: [] })
  .openapi('LinkDeleteResponse')

const LinkUpdateSchema = z
  .object({
    title: z.string().exactOptional().openapi({ description: 'The title of the URL.' }),
    redirect_link: RedirectLinkSchema,
    metadata: MetadataSchema.exactOptional(),
  })
  .openapi({ required: ['redirect_link'] })
  .openapi('LinkUpdate')

const LinksResponseSchema = ListSchema.and(
  z
    .object({
      data: z.array(LinkResponseSchema).exactOptional().openapi({ description: 'List of links' }),
    })
    .openapi({ required: [] }),
).openapi('LinksResponse')

const LinkSingleSchema = z
  .object({
    title: z.string().exactOptional().openapi({ description: 'The title of the URL.' }),
    redirect_link: RedirectLinkSchema,
    domain: z
      .string()
      .default('lob.st')
      .exactOptional()
      .openapi({ description: 'The registered domain to be used for the short URL.' }),
    slug: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The unique path for the shortened URL, if empty a unique path will be used.',
      }),
    metadata: MetadataSchema.exactOptional(),
  })
  .openapi({ required: ['redirect_link'] })
  .openapi('LinkSingle')

const ResPrfIdSchema = z
  .string()
  .regex(/^res_prf_[a-zA-Z0-9]+$/)
  .openapi({ description: 'Unique identifier prefixed with `res_prf_`.' })
  .openapi('ResPrfId')

const ResPrfResourceTypeSchema = z
  .enum(['postcard', 'letter', 'self_mailer'])
  .openapi({ description: 'The type of resource to generate a proof for.' })
  .openapi('ResPrfResourceType')

const ResPrfStatusSchema = z
  .enum(['processing', 'completed', 'failed'])
  .openapi({ description: 'The processing status of the resource proof.' })
  .openapi('ResPrfStatus')

const IssueEntrySchema = z
  .object({
    code: z.string().openapi({ description: 'A machine-readable error code.' }),
    message: z.string().openapi({ description: 'A human-readable description of the issue.' }),
    urls: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Relevant URLs for more information.' }),
  })
  .openapi({ required: ['code', 'message'] })
  .openapi('IssueEntry')

const ResourceProofBaseSchema = z
  .object({
    template_id: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'The template ID associated with the resource proof, if any.' }),
    resource_type: ResPrfResourceTypeSchema.exactOptional(),
    status: ResPrfStatusSchema.exactOptional(),
    thumbnails: z
      .array(ThumbnailSchema)
      .exactOptional()
      .openapi({ description: 'Thumbnail images of the resource proof.' }),
    url: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'A URL to the resource proof PDF.' }),
    errors: z
      .array(IssueEntrySchema)
      .exactOptional()
      .openapi({ description: 'Errors encountered during processing.' }),
  })
  .openapi({ required: [] })
  .openapi('ResourceProofBase')

const ResourceProofSchema = ResourceProofBaseSchema.and(
  z
    .object({
      id: ResPrfIdSchema,
      date_created: DateCreatedSchema,
      date_modified: DateModifiedSchema,
      object: z
        .string()
        .default('resource_proof')
        .openapi({ description: 'Value is resource type.' }),
    })
    .openapi({
      required: [
        'id',
        'resource_type',
        'status',
        'thumbnails',
        'errors',
        'date_created',
        'date_modified',
        'object',
      ],
    }),
).openapi('ResourceProof')

const ResourceProofUpdatableSchema = z
  .object({
    template_id: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'The template ID to associate with the resource proof.' }),
  })
  .openapi({ required: [] })
  .openapi('ResourceProofUpdatable')

const ResourceProofEditableSchema = z
  .xor([
    z
      .object({
        template_id: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({ description: 'The template ID to associate with the resource proof.' }),
        resource_type: z
          .literal('postcard')
          .exactOptional()
          .openapi({ description: 'The type of resource to generate a proof for.' }),
        resource_parameters: PostcardResourceParametersSchema.exactOptional(),
      })
      .openapi({ title: 'Postcard Resource Proof', required: [] }),
    z
      .object({
        template_id: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({ description: 'The template ID to associate with the resource proof.' }),
        resource_type: z
          .literal('letter')
          .exactOptional()
          .openapi({ description: 'The type of resource to generate a proof for.' }),
        resource_parameters: LetterResourceParametersSchema.exactOptional(),
      })
      .openapi({ title: 'Letter Resource Proof', required: [] }),
    z
      .object({
        template_id: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({ description: 'The template ID to associate with the resource proof.' }),
        resource_type: z
          .literal('self_mailer')
          .exactOptional()
          .openapi({ description: 'The type of resource to generate a proof for.' }),
        resource_parameters: SelfMailerResourceParametersSchema.exactOptional(),
      })
      .openapi({ title: 'Self Mailer Resource Proof', required: [] }),
  ])
  .openapi({
    required: ['resource_type', 'resource_parameters'],
    discriminator: {
      propertyName: 'resource_type',
      mapping: {
        postcard: '#/components/schemas/0',
        letter: '#/components/schemas/1',
        self_mailer: '#/components/schemas/2',
      },
    },
  })
  .openapi('ResourceProofEditable')

const SfmIdSchema = z
  .string()
  .regex(/^sfm_[a-zA-Z0-9]+$/)
  .openapi({ description: 'Unique identifier prefixed with `sfm_`.' })
  .openapi('SfmId')

const SelfMailerBaseSchema = EditableSchema.and(
  z.object({ size: SelfMailerSizeSchema.exactOptional() }).openapi({ required: [] }),
).openapi('SelfMailerBase')

const SfmUseTypeSchema = z
  .union([z.literal('marketing'), z.literal('operational'), z.literal(null)])
  .nullable()
  .openapi({
    description:
      'The use type for each mailpiece. Can be one of marketing, operational, or null. Null use_type is only allowed if an account default use_type is selected in Account Settings. For more information on use_type, see our  [Help Center article](https://help.lob.com/print-and-mail/building-a-mail-strategy/managing-mail-settings/declaring-mail-use-type).',
  })
  .openapi('SfmUseType')

const SelfMailerSchema = SelfMailerBaseSchema.and(GeneratedSchema)
  .and(FromUsSchema)
  .and(
    z
      .object({
        id: SfmIdSchema,
        outside_template_id: TmplIdSchema.and(z.string().nullable())
          .exactOptional()
          .openapi({
            description:
              'The unique ID of the HTML template used for the outside of the self mailer.',
          }),
        inside_template_id: TmplIdSchema.and(z.string().nullable())
          .exactOptional()
          .openapi({
            description:
              'The unique ID of the HTML template used for the inside of the self mailer.',
          }),
        outside_template_version_id: VrsnIdSchema.and(z.string().nullable())
          .exactOptional()
          .openapi({
            description:
              'The unique ID of the specific version of the HTML template used for the outside of the self mailer.',
          }),
        inside_template_version_id: VrsnIdSchema.and(z.string().nullable())
          .exactOptional()
          .openapi({
            description:
              'The unique ID of the specific version of the HTML template used for the inside of the self mailer.',
          }),
        object: z
          .literal('self_mailer')
          .default('self_mailer')
          .exactOptional()
          .openapi({ description: 'Value is resource type.' }),
        tracking_events: z
          .array(TrackingEventCertifiedSchema)
          .exactOptional()
          .openapi({
            description:
              'An array of certified tracking events ordered by ascending `time`. Not populated in test mode.',
          }),
        use_type: SfmUseTypeSchema,
        url: SignedLinkSchema,
        fsc: z
          .boolean()
          .default(false)
          .exactOptional()
          .openapi({
            description:
              'This is in beta. Contact support@lob.com or your account contact to learn more. Not available for `11x9_bifold` self-mailer size.',
          }),
        status: StatusSchema.exactOptional(),
        campaign_id: CampaignIdSchema.exactOptional(),
        failure_reason: FailureReasonSchema.nullable().exactOptional(),
      })
      .openapi({ required: ['id', 'url', 'use_type'] }),
  )
  .openapi('SelfMailer')

const SelfMailerDeletionSchema = z
  .object({ id: SfmIdSchema.exactOptional(), deleted: DeletedSchema.exactOptional() })
  .openapi({
    description:
      "Lob uses RESTful HTTP response codes to indicate success or failure of an API request. In general, 2xx indicates success, 4xx indicate an input error, and 5xx indicates an error on Lob's end.",
    required: [],
  })
  .openapi('SelfMailerDeletion')

const SelfMailerEditableSchema = SelfMailerBaseSchema.and(InputToSchema)
  .and(InputFromUsSchema)
  .and(
    z
      .object({
        inside: z
          .xor([HtmlStringSchema, TmplIdSchema, RemoteFileUrlSchema, LocalFilePathSchema])
          .openapi({
            description:
              'The artwork to use as the inside of your self mailer.\n\nNotes:\n- HTML merge variables should not include delimiting whitespace.\n- PDF, PNG, and JPGs must be sized at 6"x18" at 300 DPI, while supplied HTML will be rendered to the specified `size`.\n- Be sure to leave room for address and postage information by following the templates provided here:\n  - <a href="https://s3-us-west-2.amazonaws.com/public.lob.com/assets/templates/self_mailers/6x18_sfm_bifold_template.pdf" target="_blank">6x18 bifold template</a>\n  - <a href="https://s3-us-west-2.amazonaws.com/public.lob.com/assets/templates/self_mailers/12x9_sfm_bifold_template.pdf" target="_blank">12x9 bifold template</a>\n  - <a href="https://s3-us-west-2.amazonaws.com/public.lob.com/assets/templates/self_mailers/17_75x9_trifold_sfm_template.pdf" target="_blank">17.75x9 trifold template</a>\n\n\nSee [here](#section/HTML-Examples) for HTML examples.\n',
          }),
        outside: z
          .xor([HtmlStringSchema, TmplIdSchema, RemoteFileUrlSchema, LocalFilePathSchema])
          .openapi({
            description:
              'The artwork to use as the outside of your self mailer.\n\nNotes:\n- HTML merge variables should not include delimiting whitespace.\n- PDF, PNG, and JPGs must be sized at 6"x18" at 300 DPI, while supplied HTML will be rendered to the specified `size`.\n\nSee [here](#section/HTML-Examples) for HTML examples.\n',
          }),
        billing_group_id: BillingGroupIdSchema.exactOptional(),
        qr_code: QrCodeSchema.exactOptional(),
        use_type: SfmUseTypeSchema,
        service_request_number: ServiceRequestNumberSchema.exactOptional(),
        fsc: z
          .boolean()
          .default(false)
          .exactOptional()
          .openapi({
            description:
              'This is in beta. Contact support@lob.com or your account contact to learn more. Not available for `11x9_bifold` self-mailer size.',
          }),
        print_speed: PrintSpeedSchema.exactOptional(),
      })
      .openapi({ required: ['to', 'inside', 'outside', 'use_type'] }),
  )
  .openapi('SelfMailerEditable')

const SnapPackIdSchema = z
  .string()
  .regex(/^ord_[0-9a-f]{26}$/)
  .openapi({ description: 'Unique identifier prefixed with `ord_`.' })
  .openapi('SnapPackId')

const SnapPackSizeSchema = z
  .literal('8.5x11')
  .default('8.5x11')
  .openapi({ description: 'Specifies the size of the snap pack.' })
  .openapi('SnapPackSize')

const SnapPackBaseSchema = EditableSchema.and(
  z.object({ size: SnapPackSizeSchema.exactOptional() }).openapi({ required: [] }),
).openapi('SnapPackBase')

const SnapPackUseTypeSchema = z
  .union([z.literal('marketing'), z.literal('operational'), z.literal(null)])
  .nullable()
  .openapi({
    description:
      'The use type for each mailpiece. Can be one of marketing, operational, or null. Null use_type is only allowed if an account default use_type is selected in Account Settings. For more information on use_type, see our  [Help Center article](https://help.lob.com/print-and-mail/building-a-mail-strategy/managing-mail-settings/declaring-mail-use-type).',
  })
  .openapi('SnapPackUseType')

const SnapPackSchema = SnapPackBaseSchema.and(GeneratedSchema)
  .and(FromUsSchema)
  .and(
    z
      .object({
        id: SnapPackIdSchema,
        outside_template_id: TmplIdSchema.and(z.string().nullable())
          .exactOptional()
          .openapi({
            description:
              'The unique ID of the HTML template used for the outside of the snap pack.',
          }),
        inside_template_id: TmplIdSchema.and(z.string().nullable())
          .exactOptional()
          .openapi({
            description: 'The unique ID of the HTML template used for the inside of the snap pack.',
          }),
        outside_template_version_id: VrsnIdSchema.and(z.string().nullable())
          .exactOptional()
          .openapi({
            description:
              'The unique ID of the specific version of the HTML template used for the outside of the snap pack.',
          }),
        inside_template_version_id: VrsnIdSchema.and(z.string().nullable())
          .exactOptional()
          .openapi({
            description:
              'The unique ID of the specific version of the HTML template used for the inside of the snap pack.',
          }),
        object: z
          .literal('snap_pack')
          .default('snap_pack')
          .exactOptional()
          .openapi({ description: 'Value is resource type.' }),
        tracking_events: z
          .array(TrackingEventNormalSchema)
          .exactOptional()
          .openapi({
            description:
              'An array of tracking events ordered by ascending `time`. Not populated in test mode.',
          }),
        use_type: SnapPackUseTypeSchema,
        url: SignedLinkSchema,
        fsc: z
          .boolean()
          .default(false)
          .exactOptional()
          .openapi({
            description:
              'Contact support@lob.com or your account contact to learn more. Not available for snap_pack currently.',
          }),
        status: StatusSchema.exactOptional(),
        campaign_id: CampaignIdSchema.exactOptional(),
        failure_reason: FailureReasonSchema.nullable().exactOptional(),
        color: ColorSchema.exactOptional(),
      })
      .openapi({ required: ['id', 'url', 'use_type'] }),
  )
  .openapi('SnapPack')

const SnapPackDeletionSchema = z
  .object({ id: SnapPackIdSchema.exactOptional(), deleted: DeletedSchema.exactOptional() })
  .openapi({
    description:
      "Lob uses RESTful HTTP response codes to indicate success or failure of an API request. In general, 2xx indicates success, 4xx indicate an input error, and 5xx indicates an error on Lob's end.",
    required: [],
  })
  .openapi('SnapPackDeletion')

const SnapPackEditableSchema = SnapPackBaseSchema.and(InputToSchema)
  .and(InputFromUsSchema)
  .and(
    z
      .object({
        inside: z
          .xor([HtmlStringSchema, TmplIdSchema, RemoteFileUrlSchema, LocalFilePathSchema])
          .openapi({
            description:
              'The artwork to use as the inside of your snap pack.\n\nNotes:\n- HTML merge variables should not include delimiting whitespace.\n- PDF, PNG, and JPGs must be sized at 8.5"x11" at 300 DPI, while supplied HTML will be rendered to the specified `size`.\n- Be sure to leave room for address and postage information by following the template provided here:\n  - <a href="https://s3.us-west-2.amazonaws.com/public.lob.com/assets/8.5x11_Snappack_template_address.pdf" target="_blank">8.5x11 snap pack template</a>\n\n\nSee [here](#section/HTML-Examples) for HTML examples.\n',
          }),
        outside: z
          .xor([HtmlStringSchema, TmplIdSchema, RemoteFileUrlSchema, LocalFilePathSchema])
          .openapi({
            description:
              'The artwork to use as the outside of your snap pack.\n\nNotes:\n- HTML merge variables should not include delimiting whitespace.\n- PDF, PNG, and JPGs must be sized at 6"x18" at 300 DPI, while supplied HTML will be rendered to the specified `size`.\n\nSee [here](#section/HTML-Examples) for HTML examples.\n',
          }),
        billing_group_id: BillingGroupIdSchema.exactOptional(),
        use_type: SnapPackUseTypeSchema,
        color: ColorSchema.and(z.any().default(false)).exactOptional(),
        qr_code: QrCodeSchema.exactOptional(),
        print_speed: PrintSpeedSchema.exactOptional(),
      })
      .openapi({ required: ['to', 'inside', 'outside', 'use_type'] }),
  )
  .openapi('SnapPackEditable')

const TemplateHtmlSchema = z
  .string()
  .max(100000)
  .openapi({
    description:
      'An HTML string of less than 100,000 characters to be used as the `published_version` of this template. See [here](#section/HTML-Examples) for guidance on designing HTML templates. Please see endpoint specific documentation for any other product-specific HTML details:\n- [Postcards](#operation/postcard_create) - `front` and `back`\n- [Self Mailers](#operation/self_mailer_create) - `inside` and `outside`\n- [Letters](#operation/letter_create) - `file`\n- [Checks](#operation/check_create) - `check_bottom` and `attachment`\n- [Cards](#operation/card_create) - `front` and `back`\n\nIf there is a syntax error with your variable names within your HTML, then an error will be thrown, e.g. using a `{{#users}}` opening tag without the corresponding closing tag `{{/users}}`.\n',
  })
  .openapi('TemplateHtml')

const EngineSchema = z
  .enum(['legacy', 'handlebars'])
  .nullable()
  .default('legacy')
  .openapi({
    description:
      "The engine used to combine HTML template with merge variables.\n  * `legacy` - Lob's original engine\n  * `handlebars`\n",
  })
  .openapi('Engine')

const TemplateRequiredVarsSchema = z
  .array(z.string())
  .openapi({
    description:
      'An array of required variables to be used in a template. Only available for `handlebars` templates.\n',
  })
  .openapi('TemplateRequiredVars')

const TemplateVersionWritableSchema = z
  .object({
    description: ResourceDescriptionSchema.exactOptional(),
    html: TemplateHtmlSchema,
    engine: EngineSchema.exactOptional(),
    required_vars: TemplateRequiredVarsSchema.exactOptional(),
  })
  .openapi({ required: ['html'] })
  .openapi('TemplateVersionWritable')

const TemplateVersionSchema = TemplateVersionWritableSchema.and(LobBaseSchema)
  .and(
    z
      .object({
        id: VrsnIdSchema,
        suggest_json_editor: z
          .boolean()
          .exactOptional()
          .openapi({
            description: 'Used by frontend, true if the template uses advanced features.\n',
          }),
        merge_variables: z
          .object({})
          .exactOptional()
          .openapi({
            description:
              "Object representing the keys of every merge variable present in the template. It has one key named 'keys', and its value is an array of strings.\n",
          }),
        object: z
          .literal('version')
          .default('version')
          .exactOptional()
          .openapi({ description: 'Value is resource type.' }),
      })
      .openapi({ required: ['id'] }),
  )
  .openapi('TemplateVersion')

const TemplateVersionUpdatableSchema = z
  .object({
    description: ResourceDescriptionSchema.exactOptional(),
    engine: EngineSchema.exactOptional(),
    required_vars: TemplateRequiredVarsSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TemplateVersionUpdatable')

const TemplateVersionDeletionSchema = z
  .object({ id: VrsnIdSchema.exactOptional(), deleted: DeletedSchema.exactOptional() })
  .openapi({
    description:
      "Lob uses RESTful HTTP response codes to indicate success or failure of an API request. In general, 2xx indicates success, 4xx indicate an input error, and 5xx indicates an error on Lob's end.",
    required: [],
  })
  .openapi('TemplateVersionDeletion')

const TemplateSchema = z
  .object({
    description: ResourceDescriptionSchema.exactOptional(),
    id: TmplIdSchema,
    versions: z
      .array(TemplateVersionSchema)
      .openapi({
        description:
          'An array of all non-deleted [version objects](#tag/Template-Versions) associated with the template.',
      }),
    published_version: z
      .any()
      .openapi({
        description:
          "The template's currently published version. This version will be used in any Print & Mail API requests that reference the specified template.",
      })
      .and(TemplateVersionSchema),
    object: z
      .literal('template')
      .default('template')
      .exactOptional()
      .openapi({ description: 'Value is resource type.' }),
    metadata: MetadataSchema.exactOptional(),
    date_created: DateCreatedSchema.exactOptional(),
    date_modified: DateModifiedSchema.exactOptional(),
    deleted: DeletedSchema.exactOptional(),
  })
  .openapi({ required: ['id', 'versions', 'published_version'] })
  .openapi('Template')

const TemplateUpdateSchema = z
  .object({
    description: ResourceDescriptionSchema.exactOptional(),
    published_version: z
      .string()
      .openapi({
        description:
          "The ID of the published version of a template you'd like to update. The published version is the one that will be used in any Print & Mail API requests that reference the specified template. Will err if the referenced `published_version` has been deleted or does not exist.",
      })
      .and(VrsnIdSchema)
      .exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TemplateUpdate')

const TemplateDeletionSchema = z
  .object({ id: TmplIdSchema.exactOptional(), deleted: DeletedSchema.exactOptional() })
  .openapi({
    description:
      "Lob uses RESTful HTTP response codes to indicate success or failure of an API request. In general, 2xx indicates success, 4xx indicate an input error, and 5xx indicates an error on Lob's end.",
    required: [],
  })
  .openapi('TemplateDeletion')

const TemplateWritableSchema = z
  .object({
    description: ResourceDescriptionSchema.exactOptional(),
    html: TemplateHtmlSchema,
    metadata: MetadataSchema.exactOptional(),
    engine: EngineSchema.exactOptional(),
    required_vars: TemplateRequiredVarsSchema.exactOptional(),
  })
  .openapi({ required: ['html'] })
  .openapi('TemplateWritable')

const UploadUpdatableSchema = z
  .object({
    originalFilename: z
      .string()
      .exactOptional()
      .openapi({
        title: 'Original Filename',
        description: 'Original filename provided when the upload is created.',
      }),
    requiredAddressColumnMapping: RequiredAddressColumnMappingSchema.exactOptional(),
    optionalAddressColumnMapping: OptionalAddressColumnMappingSchema.exactOptional(),
    metadata: UploadsMetadataSchema.exactOptional(),
    mergeVariableColumnMapping: MergeVariableColumnMappingSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UploadUpdatable')

const UploadFileSchema = z
  .object({
    message: z
      .literal('File uploaded successfully')
      .default('File uploaded successfully')
      .openapi({ title: 'Message' }),
    filename: z.string().openapi({ title: 'Filename' }),
  })
  .openapi({ required: ['message', 'filename'] })
  .openapi('UploadFile')

const UploadCreateExportSchema = z
  .object({
    message: z
      .literal('Export is processing')
      .default('Export is processing')
      .openapi({ title: 'Message' }),
    exportId: z.string().openapi({ title: 'Export ID', example: 'ex_2dafd758ed3da9c43' }),
  })
  .openapi({ required: ['message', 'exportId'] })
  .openapi('UploadCreateExport')

const ExIdSchema = z
  .string()
  .regex(/^ex_[a-zA-Z0-9]+$/)
  .openapi({ description: 'Unique identifier prefixed with `ex_`.' })
  .openapi('ExId')

const UsAutocompletionsWritableSchema = z
  .object({
    address_prefix: z
      .string()
      .openapi({
        description: 'Only accepts numbers and street names in an alphanumeric format.\n',
      }),
    city: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'An optional city input used to filter suggestions. Case insensitive and does not match partial abbreviations.\n',
      }),
    state: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'An optional state input used to filter suggestions. Case insensitive and does not match partial abbreviations.\n',
      }),
    zip_code: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'An optional ZIP Code input used to filter suggestions. Matches partial entries.\n',
      }),
    geo_ip_sort: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'If `true`, sort suggestions by proximity to the IP set in the `X-Forwarded-For` header.\n',
      }),
  })
  .openapi({ required: ['address_prefix'] })
  .openapi('UsAutocompletionsWritable')

const UsAutoIdSchema = z
  .string()
  .regex(/^us_auto_[a-zA-Z0-9]+$/)
  .openapi({ description: 'Unique identifier prefixed with `us_auto_`.' })
  .openapi('UsAutoId')

const SuggestionsSchema = z
  .object({
    primary_line: z
      .string()
      .openapi({
        description:
          'The primary delivery line (usually the street address) of the address.\nCombination of the following applicable `components` (primary number &\nsecondary information may be missing or inaccurate):\n* `primary_number`\n* `street_predirection`\n* `street_name`\n* `street_suffix`\n* `street_postdirection`\n* `secondary_designator`\n* `secondary_number`\n* `pmb_designator`\n* `pmb_number`\n',
      }),
    city: CitySchema,
    state: StateSchema,
    zip_code: z
      .any()
      .openapi({
        description:
          'Must be formatted as a US ZIP or ZIP+4 (e.g. `94107`, `941072282`, `94107-2282`).\n',
      })
      .and(ZipCodeSchema),
    object: z
      .literal('us_autocompletion')
      .default('us_autocompletion')
      .exactOptional()
      .openapi({ description: 'Value is resource type.' }),
  })
  .openapi({ required: ['primary_line', 'city', 'state', 'zip_code'] })
  .openapi('Suggestions')

const UsAutocompletionsSchema = z
  .object({
    id: UsAutoIdSchema.exactOptional(),
    suggestions: z
      .array(SuggestionsSchema)
      .min(0)
      .max(10)
      .exactOptional()
      .openapi({ description: 'An array of objects representing suggested addresses.\n' }),
    object: z
      .literal('us_autocompletion')
      .default('us_autocompletion')
      .exactOptional()
      .openapi({ description: 'Value is resource type.' }),
  })
  .openapi({ required: [] })
  .openapi('UsAutocompletions')

const LocationSchema = z
  .object({
    latitude: z
      .float32()
      .min(-90)
      .max(90)
      .nullable()
      .openapi({
        description:
          'A positive or negative decimal indicating the geographic latitude of the address, specifying the north-to-south position of a location. This should be input with `longitude` to pinpoint locations on a map.\n',
      }),
    longitude: z
      .float32()
      .min(-180)
      .max(180)
      .nullable()
      .openapi({
        description:
          'A positive or negative decimal indicating the geographic longitude of the address, specifying the north-to-south position of a location. This should be input with `latitude` to pinpoint locations on a map.\n',
      }),
  })
  .openapi({ required: ['latitude', 'longitude'] })
  .openapi('Location')

const ReverseGeocodeIdSchema = z
  .string()
  .regex(/^us_reverse_geocode_[a-zA-Z0-9_]+$/)
  .openapi({ description: 'Unique identifier prefixed with `us_reverse_geocode_`.' })
  .openapi('ReverseGeocodeId')

const ComponentsSchema = z
  .object({
    zip_code: z
      .string()
      .regex(/^\d{5}$/)
      .openapi({ description: 'The 5-digit ZIP code' }),
    zip_code_plus_4: z
      .any()
      .openapi({ description: 'A 4-digit ZIP add-on code' })
      .and(ZipCodePlus_4Schema),
  })
  .openapi({
    description:
      'A nested object containing a breakdown of each component of a reverse geocoded response.',
    required: ['zip_code', 'zip_code_plus_4'],
  })
  .openapi('Components')

const LocationAnalysisSchema = z
  .object({
    latitude: z
      .float32()
      .min(-90)
      .max(90)
      .nullable()
      .openapi({
        description:
          'A positive or negative decimal indicating the geographic latitude of the address, specifying the north-to-south position of a location. This should be used with `longitude` to pinpoint locations on a map. Will not be returned for undeliverable addresses or military addresses (state is `AA`, `AE`, or `AP`).\n',
      }),
    longitude: z
      .float32()
      .min(-180)
      .max(180)
      .nullable()
      .openapi({
        description:
          'A positive or negative decimal indicating the geographic longitude of the address, specifying the north-to-south position of a location. This should be used with `latitude` to pinpoint locations on a map. Will not be returned for undeliverable addresses or military addresses (state is `AA`, `AE`, or `AP`).\n',
      }),
    distance: z
      .float32()
      .openapi({
        description: 'The distance from the input location to this exact zip code in miles.\n',
      }),
  })
  .openapi({
    description:
      'A nested object containing a breakdown of the analysis of a reverse geocoded location.',
    required: ['latitude', 'longitude', 'distance'],
  })
  .openapi('LocationAnalysis')

const AddressesSchema = z
  .object({
    components: ComponentsSchema.exactOptional(),
    location_analysis: LocationAnalysisSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Addresses')

const ReverseGeocodeSchema = z
  .object({
    id: ReverseGeocodeIdSchema.exactOptional(),
    addresses: z
      .array(AddressesSchema)
      .exactOptional()
      .openapi({ description: 'list of addresses\n' }),
    object: z
      .literal('us_reverse_geocode_lookup')
      .default('us_reverse_geocode_lookup')
      .exactOptional()
      .openapi({ description: 'Value is resource type.' }),
  })
  .openapi({ required: [] })
  .openapi('ReverseGeocode')

const SingleLineAddressSchema = z
  .object({
    address: z
      .string()
      .max(500)
      .openapi({
        description:
          'The entire address in one string (e.g., "210 King Street 94107"). _Does not support a recipient and will error when other payload parameters are provided._\n',
      }),
  })
  .openapi({ required: ['address'] })
  .openapi('SingleLineAddress')

const UsVerificationsWritableSchema = z
  .xor([MultipleComponentsSchema, SingleLineAddressSchema])
  .openapi('UsVerificationsWritable')

const Zip5Schema = z
  .object({
    zip_code: z
      .string()
      .regex(/^\d{5}$/)
      .openapi({ description: 'A 5-digit ZIP code.', example: '94107' }),
  })
  .openapi({ required: ['zip_code'] })
  .openapi('Zip5')

const ZipIdSchema = z
  .string()
  .regex(/^us_zip_[a-zA-Z0-9]+$/)
  .openapi({ description: 'Unique identifier prefixed with `us_zip_`.' })
  .openapi('ZipId')

const ZipLookupCitySchema = z
  .object({
    city: CitySchema,
    state: StateSchema,
    county: CountySchema,
    county_fips: CountyFipsSchema,
    preferred: z
      .boolean()
      .openapi({
        description:
          'Indicates whether or not the city is the <a href="https://en.wikipedia.org/wiki/ZIP_Code#ZIP_Codes_and_previous_zoning_lines" target="_blank">USPS default city</a> (preferred city) of a ZIP code. There is only one preferred city per ZIP code, which will always be in position 0 in the array of cities.\n',
        example: true,
      }),
  })
  .openapi({ required: ['city', 'state', 'county', 'county_fips', 'preferred'] })
  .openapi('ZipLookupCity')

const ZipSchema = Zip5Schema.and(
  z
    .object({
      id: ZipIdSchema,
      cities: z
        .array(ZipLookupCitySchema)
        .openapi({
          description:
            'An array of city objects containing valid cities for the `zip_code`. Multiple cities will be returned if more than one city is associated with the input ZIP code.\n',
        }),
      zip_code_type: ZipCodeTypeSchema,
      object: z
        .literal('us_zip_lookup')
        .default('us_zip_lookup')
        .openapi({ description: 'Value is resource type.' }),
    })
    .openapi({ required: ['id', 'cities', 'zip_code_type', 'object'] }),
).openapi('Zip')

const PostcardTypesSchema = z
  .enum([
    'postcard.created',
    'postcard.rejected',
    'postcard.rendered_pdf',
    'postcard.rendered_thumbnails',
    'postcard.deleted',
    'postcard.delivered',
    'postcard.failed',
    'postcard.mailed',
    'postcard.in_transit',
    'postcard.in_local_area',
    'postcard.international_exit',
    'postcard.processed_for_delivery',
    'postcard.re-routed',
    'postcard.returned_to_sender',
    'postcard.viewed',
  ])
  .openapi({ description: 'Unique identifier referring to status of postcard' })
  .openapi('PostcardTypes')

const SelfMailerTypesSchema = z
  .enum([
    'self_mailer.created',
    'self_mailer.rejected',
    'self_mailer.rendered_pdf',
    'self_mailer.rendered_thumbnails',
    'self_mailer.deleted',
    'self_mailer.delivered',
    'self_mailer.failed',
    'self_mailer.mailed',
    'self_mailer.in_transit',
    'self_mailer.in_local_area',
    'self_mailer.international_exit',
    'self_mailer.processed_for_delivery',
    'self_mailer.re-routed',
    'self_mailer.returned_to_sender',
    'self_mailer.viewed',
  ])
  .openapi({ description: 'Unique identifier referring to status of self mailer' })
  .openapi('SelfMailerTypes')

const LetterTypesSchema = z
  .enum([
    'letter.created',
    'letter.rejected',
    'letter.rendered_pdf',
    'letter.rendered_thumbnails',
    'letter.deleted',
    'letter.delivered',
    'letter.failed',
    'letter.mailed',
    'letter.in_transit',
    'letter.in_local_area',
    'letter.international_exit',
    'letter.processed_for_delivery',
    'letter.re-routed',
    'letter.returned_to_sender',
    'letter.certified.mailed',
    'letter.certified.in_transit',
    'letter.certified.in_local_area',
    'letter.certified.processed_for_delivery',
    'letter.certified.re-routed',
    'letter.certified.returned_to_sender',
    'letter.certified.delivered',
    'letter.certified.pickup_available',
    'letter.certified.issue',
    'letter.return_envelope.created',
    'letter.return_envelope.delivered',
    'letter.return_envelope.in_transit',
    'letter.return_envelope.in_local_area',
    'letter.return_envelope.international_exit',
    'letter.return_envelope.processed_for_delivery',
    'letter.return_envelope.re_routed',
    'letter.return_envelope.returned_to_sender',
    'letter.viewed',
  ])
  .openapi({ description: 'Unique identifier referring to status of letter' })
  .openapi('LetterTypes')

const CheckTypesSchema = z
  .enum([
    'check.created',
    'check.rejected',
    'check.rendered_pdf',
    'check.rendered_thumbnails',
    'check.deleted',
    'check.delivered',
    'check.failed',
    'check.mailed',
    'check.in_transit',
    'check.in_local_area',
    'check.international_exit',
    'check.processed_for_delivery',
    'check.re-routed',
    'check.returned_to_sender',
  ])
  .openapi({ description: 'Unique identifier referring to status of check' })
  .openapi('CheckTypes')

const AddressTypesSchema = z
  .enum(['address.created', 'address.deleted'])
  .openapi({ description: 'Unique identifier referring to status of address' })
  .openapi('AddressTypes')

const BankAccountTypesSchema = z
  .enum(['bank_account.created', 'bank_account.deleted', 'bank_account.verified'])
  .openapi({ description: 'Unique identifier referring to status of bank account' })
  .openapi('BankAccountTypes')

const EventTypeSchema = z
  .object({
    id: z.xor([
      PostcardTypesSchema,
      SelfMailerTypesSchema,
      LetterTypesSchema,
      CheckTypesSchema,
      AddressTypesSchema,
      BankAccountTypesSchema,
    ]),
    enabled_for_test: z
      .boolean()
      .openapi({
        description:
          'Value is `true` if the event type is enabled in both the test and live environments and `false` if it is only enabled in the live environment.',
      }),
    resource: z.enum([
      'postcards',
      'self mailers',
      'letters',
      'checks',
      'addresses',
      'bank accounts',
    ]),
    object: z
      .literal('event_type')
      .default('event_type')
      .openapi({ description: 'Value is resource type.' }),
  })
  .openapi({ required: ['id', 'enabled_for_test', 'resource', 'object'] })
  .openapi('EventType')

const EventsSchema = z
  .object({
    id: z
      .string()
      .regex(/^evt_[a-zA-Z0-9_]+$/)
      .openapi({ description: 'Unique identifier prefixed with `evt_`.' }),
    body: z
      .object({})
      .openapi({
        description:
          'The body of the associated resource as they were at the time of the event, i.e. the [postcard object](#operation/postcard_retrieve), [the letter object](#operation/letter_retrieve), [the check object](#operation/check_retrieve), [the address object](#operation/address_retrieve), or [the bank account object](#operation/bank_account_retrieve). For `.deleted` events, the body matches the response for the corresponding delete endpoint for that resource (e.g. the [postcard delete response](#operation/postcard_delete)).',
      }),
    reference_id: z
      .string()
      .openapi({ description: 'Unique identifier of the related resource for the event.' }),
    event_type: EventTypeSchema,
    date_created: DateCreatedSchema,
    object: z.literal('event').default('event').openapi({ description: 'Value is resource type.' }),
  })
  .openapi({ required: ['id', 'body', 'reference_id', 'event_type', 'date_created', 'object'] })
  .openapi('Events')

const _404Response = {
  description: 'Error',
  content: {
    'application/json': {
      schema: ErrorSchema,
      example: {
        error: {
          code: 'not_found',
          message: 'informed delivery campaign not found',
          status_code: 404,
        },
      },
    },
  },
}

const AddressErrorResponse = {
  description: 'Error',
  content: {
    'application/json': {
      schema: ErrorSchema,
      example: { error: { code: 'not_found', message: 'address not found', status_code: 404 } },
    },
  },
}

const AllAddressesResponse = {
  description:
    'A dictionary with a data property that contains an array of up to `limit` addresses. Each entry in the array is a separate address object. The previous and next page of address entries can be retrieved by calling the endpoint contained in the `previous_url` and `next_url` fields in the API response respectively.<br>If no more addresses are available beyond the current set of returned results, the `next_url` field will be empty.',
  content: {
    'application/json': {
      schema: ListSchema.and(
        z
          .object({
            data: z
              .array(AddressSchema)
              .exactOptional()
              .openapi({ description: 'list of addresses' }),
          })
          .openapi({ required: [] }),
      ),
      example: {
        data: [
          {
            id: 'adr_e68217bd744d65c8',
            description: 'Harry - Office',
            name: 'HARRY ZHANG',
            company: 'LOB',
            phone: '5555555555',
            email: 'harry@lob.com',
            address_line1: '210 KING ST STE 6100',
            address_line2: null,
            address_city: 'SAN FRANCISCO',
            address_state: 'CA',
            address_zip: '94107-1741',
            address_country: 'UNITED STATES',
            metadata: {},
            date_created: '2019-08-12T00:16:00.361Z',
            date_modified: '2019-08-12T00:16:00.361Z',
            object: 'address',
          },
          {
            id: 'adr_asdi2y3riuasasoi',
            description: 'Harry - Office',
            name: 'Harry Zhang',
            company: 'Lob',
            phone: '5555555555',
            email: 'harry@lob.com',
            metadata: {},
            address_line1: '370 WATER ST',
            address_line2: '',
            address_city: 'SUMMERSIDE',
            address_state: 'PRINCE EDWARD ISLAND',
            address_zip: 'C1N 1C4',
            address_country: 'CANADA',
            date_created: '2019-09-20T00:14:00.361Z',
            date_modified: '2019-09-20T00:14:00.361Z',
            object: 'address',
          },
        ],
        object: 'list',
        next_url:
          'https://api.lob.com/v1/addresses?limit=2&after=eyJkYXRlT2Zmc2V0IjoiMjAxOS0wOC0wN1QyMTo1OTo0Ni43NjRaIiwiaWRPZmZzZXQiOiJhZHJfODMwYmYwZWFiZGFhYTQwOSJ9',
        previous_url: null,
        count: 2,
      },
    },
  },
}

const RatelimitLimitHeaderSchema = z
  .int()
  .exactOptional()
  .openapi({
    description: 'The rate limit for a given endpoint.',
    param: { required: false },
    example: 150,
  })

const RatelimitRemainingHeaderSchema = z
  .int()
  .exactOptional()
  .openapi({
    description: 'The number of requests remaining in the current window.',
    param: { required: false },
    example: 100,
  })

const RatelimitResetHeaderSchema = z
  .int()
  .exactOptional()
  .openapi({
    description:
      'The time at which the rate limit window resets in  <a href="https://en.wikipedia.org/wiki/Unix_time" target="_blank">UTC epoch seconds</a>\n',
    param: { required: false },
    example: 1528749846,
  })

const PostAddressResponse = {
  description: 'Echos the writable fields of a newly created address object.',
  content: {
    'application/json': {
      schema: AddressSchema,
      examples: {
        full_us: {
          value: {
            id: 'adr_d3489cd64c791ab5',
            description: 'Harry - Office',
            name: 'HARRY ZHANG',
            company: 'LOB',
            phone: '5555555555',
            email: 'harry@lob.com',
            address_line1: '210 KING ST STE 6100',
            address_city: 'SAN FRANCISCO',
            address_state: 'CA',
            address_zip: '94107',
            address_country: 'UNITED STATES',
            metadata: {},
            date_created: '2017-09-05T17:47:53.767Z',
            date_modified: '2017-09-05T17:47:53.767Z',
            object: 'address',
          },
        },
        full_intl: {
          value: {
            id: 'adr_b9f49f464c836203',
            description: 'Harry - Office',
            name: 'HARRY ZHANG',
            company: 'LOB',
            phone: '5555555555',
            email: 'harry@lob.com',
            address_line1: '370 WATER ST',
            address_city: 'SUMMERSIDE',
            address_state: 'PRINCE EDWARD ISLAND',
            address_zip: 'C1N 1C4',
            address_country: 'CANADA',
            metadata: {},
            date_created: '2021-11-29T20:55:46.843Z',
            date_modified: '2021-11-29T20:56:46.843Z',
            object: 'address',
          },
        },
        ncoa_us_live: {
          value: {
            id: 'adr_d3489cd64c791ab5',
            description: 'Harry - Office',
            name: 'HARRY ZHANG',
            company: 'LOB',
            phone: '5555555555',
            email: 'harry@lob.com',
            address_line1: '████',
            address_line2: '████',
            address_city: 'SAN FRANCISCO',
            address_state: 'CA',
            address_zip: '94107',
            address_country: 'UNITED STATES',
            metadata: {},
            date_created: '2017-09-05T17:47:53.767Z',
            date_modified: '2017-09-05T17:47:53.767Z',
            recipient_moved: true,
            inline: false,
            object: 'address',
          },
        },
        ncoa_us_test: {
          value: {
            id: 'adr_e463565030210e12',
            description: null,
            name: 'TEST KEYS DO NOT VERIFY ADDRESSES',
            company: null,
            phone: null,
            email: null,
            address_line1: '████',
            address_line2: '████',
            address_city: 'SAN FRANCISCO',
            address_state: 'CA',
            address_zip: '94107',
            address_country: 'UNITED STATES',
            metadata: {},
            date_created: '2019-12-05T19:39:19.932Z',
            date_modified: '2019-12-05T19:39:19.932Z',
            recipient_moved: true,
            inline: false,
            object: 'address',
          },
        },
      },
    },
  },
  headers: z.object({
    'ratelimit-limit': RatelimitLimitHeaderSchema,
    'ratelimit-remaining': RatelimitRemainingHeaderSchema,
    'ratelimit-reset': RatelimitResetHeaderSchema,
  }),
}

const AddressResponse = {
  description: 'Returns an address object if a valid identifier was provided.',
  content: { 'application/json': { schema: AddressSchema } },
}

const AddressDeletedResponse = {
  description: 'Deleted',
  content: {
    'application/json': {
      schema: AddressDeletionSchema,
      example: { id: 'adr_123456789', deleted: true },
    },
  },
}

const BankAccountErrorResponse = {
  description: 'Error',
  content: {
    'application/json': {
      schema: ErrorSchema,
      example: {
        error: { code: 'invalid', message: 'routing_number is required', status_code: 422 },
      },
    },
  },
}

const PostBankAccountResponse = {
  description: 'Returns a bank_account object',
  content: {},
  headers: z.object({
    'ratelimit-limit': RatelimitLimitHeaderSchema,
    'ratelimit-remaining': RatelimitRemainingHeaderSchema,
    'ratelimit-reset': RatelimitResetHeaderSchema,
  }),
}

const BankAccountDeletedResponse = {
  description: 'Deleted',
  content: {
    'application/json': {
      schema: BankDeletionSchema,
      example: { id: 'bank_123456789', deleted: true },
    },
  },
}

const AllBankAccountsResponse = {
  description:
    'A dictionary with a data property that contains an array of up to `limit` bank_accounts. Each entry in the array is a separate bank_account. The previous and next page of bank_accounts can be retrieved by calling the endpoint contained in the `previous_url` and `next_url` fields in the API response respectively.<br>If no more bank_accounts are available beyond the current set of returned results, the `next_url` field will be empty.',
  content: {
    'application/json': {
      schema: ListSchema.and(
        z
          .object({
            data: z
              .array(BankAccountSchema)
              .exactOptional()
              .openapi({ description: 'list of bank_accounts' }),
          })
          .openapi({ required: [] }),
      ),
      example: {
        data: [
          {
            id: 'bank_0e3fb07eba0b35b',
            signature_url:
              'https://lob-assets.com/letters/asd_asdfghjklqwertyu.pdf?version=45&expires=1234567890&signature=a',
            description: 'Example bank account',
            metadata: {},
            routing_number: '122100024',
            account_number: '1234564789',
            account_type: 'company',
            signatory: 'John Doe',
            bank_name: 'JPMORGAN CHASE BANK, NA',
            verified: true,
            date_created: '2019-03-30T13:13:22.200Z',
            date_modified: '2019-03-30T13:13:23.385Z',
            object: 'bank_account',
          },
          {
            id: 'bank_eba93f7de3c02d9',
            description: 'Example bank account',
            metadata: {},
            routing_number: '122100024',
            account_number: '1234564789',
            account_type: 'company',
            signatory: 'John Doe',
            bank_name: 'JPMORGAN CHASE BANK, NA',
            verified: true,
            date_created: '2019-03-30T13:11:06.809Z',
            date_modified: '2019-03-30T13:11:07.872Z',
            object: 'bank_account',
          },
        ],
        object: 'list',
        next_url:
          'https://api.lob.com/v1/bank_accounts?limit=2&after=eyJkYXRlT2Zmc2V0IjoiMjAxOS0wMy0zMFQxMzoxMTowNi44MDlaIiwiaWRPZmZzZXQiOiJiYW5rX2ViYTkzZjdkZTNjMDJkOSJ9',
        previous_url: null,
        count: 2,
      },
    },
  },
}

const BillingGroupListErrorResponse = {
  description: 'Error',
  content: {
    'application/json': {
      schema: ErrorSchema,
      example: {
        error: { code: 'not_found', message: 'billing_group not found', status_code: 404 },
      },
    },
  },
}

const BillingGroupErrorResponse = {
  description: 'Error',
  content: {
    'application/json': {
      schema: ErrorSchema,
      example: {
        error: { code: 'invalid', message: 'message about incorrect parameter', status_code: 422 },
      },
    },
  },
}

const PostBillingGroupResponse = {
  description: 'Returns a billing group object',
  content: {},
  headers: z.object({
    'ratelimit-limit': RatelimitLimitHeaderSchema,
    'ratelimit-remaining': RatelimitRemainingHeaderSchema,
    'ratelimit-reset': RatelimitResetHeaderSchema,
  }),
}

const MailpieceErrorResponse = {
  description: 'Error',
  content: {
    'application/json': {
      schema: ErrorSchema,
      example: { error: { code: 'not_found', message: 'to address not found', status_code: 404 } },
    },
  },
}

const BookletDeletedResponse = {
  description: 'Deleted',
  content: {
    'application/json': {
      schema: BookletDeletionSchema,
      example: { id: 'ord_0d6a16a3fff6318ac8f8008dc1', deleted: true },
    },
  },
}

const AllBookletsResponse = {
  description:
    'A dictionary with a data property that contains an array of up to `limit` booklets. Each entry in the array is a separate booklet. The previous and next page of booklets can be retrieved by calling the endpoint contained in the `previous_url` and `next_url` fields in the API response respectively. If no more booklets are available beyond the current set of returned results, the `next_url` field will be empty.',
  content: {
    'application/json': {
      schema: ListSchema.and(
        z
          .object({
            data: z
              .array(BookletSchema)
              .exactOptional()
              .openapi({ description: 'list of booklets' }),
          })
          .openapi({ required: [] }),
      ),
      example: {
        data: [
          {
            id: 'ord_0d6a16a3fff6318ac8f8008dc1',
            description: 'April Campaign',
            metadata: {},
            to: {
              id: 'adr_d3489cd64c791ab5',
              description: null,
              name: 'HARRY ZHANG',
              company: null,
              phone: null,
              email: null,
              address_line1: '210 KING ST STE 6100',
              address_line2: null,
              address_city: 'SAN FRANCISCO',
              address_state: 'CA',
              address_zip: '94107-1741',
              address_country: 'UNITED STATES',
              metadata: {},
              date_created: '2017-09-05T15:54:53.264Z',
              date_modified: '2017-09-05T15:54:53.264Z',
              deleted: true,
              object: 'address',
            },
            from: {
              id: 'adr_b8fb5acf3a2b55db',
              description: null,
              name: 'LEORE AVIDAR',
              company: null,
              phone: null,
              email: null,
              address_line1: '210 KING ST STE 6100',
              address_line2: null,
              address_city: 'SAN FRANCISCO',
              address_state: 'CA',
              address_zip: '94107-1741',
              address_country: 'UNITED STATES',
              metadata: {},
              date_created: '2017-09-05T15:54:53.264Z',
              date_modified: '2017-09-05T15:54:53.264Z',
              deleted: true,
              object: 'address',
            },
            mail_type: 'usps_first_class',
            url: 'https://lob-assets.com/order-creatives/ord_0d6a16a3fff6318ac8f8008dc1_comp_a20fd48ba4efda76ee827400d.pdf?version=v1&expires=1618512040&signature=qvyCqXI1ndBvc4AjvG8FlirqLXEcfmYo4sDrRtabaXMOsX88to9G3K49uIk_aqevvZXe8HoRYD_nWydbQHqaCA',
            carrier: 'USPS',
            tracking_number: null,
            tracking_events: [],
            thumbnails: [
              {
                small:
                  'https://lob-assets.com/order-creatives/ord_0d6a16a3fff6318ac8f8008dc1_comp_a20fd48ba4efda76ee827400d_thumb_small_1.png?version=v1&expires=1618512040&signature=-bipeUHP-hAMcCBSrWM0ZH1VwRdSPNVGGZN9hAZKr6Lh4ly6uxvratVd5LXJCK_zOEMYk_mTWASt0ge7OY6SDA',
                medium:
                  'https://lob-assets.com/order-creatives/ord_0d6a16a3fff6318ac8f8008dc1_comp_a20fd48ba4efda76ee827400d_thumb_medium_1.png?version=v1&expires=1618512040&signature=ryxN7bsXGtw_GRFSP3Cs3A3IYjxZi3cW9BHDCNgMt6p3nobVmsc_iFHt2e-S7ndAXhhN7nP-MQVov3bt3r37BQ',
                large:
                  'https://lob-assets.com/order-creatives/ord_0d6a16a3fff6318ac8f8008dc1_comp_a20fd48ba4efda76ee827400d_thumb_large_1.png?version=v1&expires=1618512040&signature=kBrm00xkyCkJNJRHxH8HshFaebtOxnzjVWOs1VVmGMuw8H6OBNcMAMxt9s49K0jlpHoh3Nr9uSncEZMQaaNjAg',
              },
            ],
            merge_variables: { name: 'Harry' },
            size: '8.375x5.375',
            pages: 8,
            source_material: '60# Gloss Text',
            expected_delivery_date: '2021-03-24',
            date_created: '2021-03-16T18:40:40.504Z',
            date_modified: '2021-03-16T18:40:40.504Z',
            send_date: '2021-03-16T18:45:40.493Z',
            use_type: 'marketing',
            fsc: false,
            object: 'booklet',
          },
          {
            id: 'ord_851100000f31bb1a872f794cee',
            description: 'April Campaign',
            metadata: {},
            to: {
              id: 'adr_f9228b743884ff98',
              description: null,
              name: 'AYA',
              company: null,
              phone: null,
              email: null,
              address_line1: '2812 PARK RD',
              address_line2: null,
              address_city: 'CHARLOTTE',
              address_state: 'NC',
              address_zip: '28209-1314',
              address_country: 'UNITED STATES',
              metadata: {},
              date_created: '2021-03-16T18:40:40.410Z',
              date_modified: '2021-03-16T18:40:40.410Z',
              deleted: true,
              object: 'address',
            },
            from: {
              id: 'adr_210a8d4b0b76d77b',
              description: null,
              name: null,
              company: 'LOB',
              phone: null,
              email: null,
              address_line1: '210 KING ST STE 6100',
              address_line2: null,
              address_city: 'SAN FRANCISCO',
              address_state: 'CA',
              address_zip: '94107-1741',
              address_country: 'UNITED STATES',
              metadata: {},
              date_created: '2018-12-08T03:01:07.651Z',
              date_modified: '2018-12-08T03:01:07.651Z',
              object: 'address',
            },
            mail_type: 'usps_first_class',
            url: 'https://lob-assets.com/order-creatives/ord_851100000f31bb1a872f794cee_comp_a20fd48ba4efda76ee827400d.pdf?version=v1&expires=1618512040&signature=qvyCqXI1ndBvc4AjvG8FlirqLXEcfmYo4sDrRtabaXMOsX88to9G3K49uIk_aqevvZXe8HoRYD_nWydbQHqaCA',
            carrier: 'USPS',
            tracking_number: null,
            tracking_events: [],
            thumbnails: [
              {
                small:
                  'https://lob-assets.com/order-creatives/ord_851100000f31bb1a872f794cee_comp_a20fd48ba4efda76ee827400d_thumb_small_1.png?version=v1&expires=1618512040&signature=-bipeUHP-hAMcCBSrWM0ZH1VwRdSPNVGGZN9hAZKr6Lh4ly6uxvratVd5LXJCK_zOEMYk_mTWASt0ge7OY6SDA',
                medium:
                  'https://lob-assets.com/order-creatives/ord_851100000f31bb1a872f794cee_comp_a20fd48ba4efda76ee827400d_thumb_medium_1.png?version=v1&expires=1618512040&signature=ryxN7bsXGtw_GRFSP3Cs3A3IYjxZi3cW9BHDCNgMt6p3nobVmsc_iFHt2e-S7ndAXhhN7nP-MQVov3bt3r37BQ',
                large:
                  'https://lob-assets.com/order-creatives/ord_851100000f31bb1a872f794cee_comp_a20fd48ba4efda76ee827400d_thumb_large_1.png?version=v1&expires=1618512040&signature=kBrm00xkyCkJNJRHxH8HshFaebtOxnzjVWOs1VVmGMuw8H6OBNcMAMxt9s49K0jlpHoh3Nr9uSncEZMQaaNjAg',
              },
            ],
            merge_variables: { name: 'Harry' },
            size: '8.375x5.375',
            pages: 8,
            source_material: '60# Gloss Text',
            expected_delivery_date: '2021-03-24',
            date_created: '2021-03-16T18:40:40.504Z',
            date_modified: '2021-03-16T18:40:40.504Z',
            send_date: '2021-03-16T18:45:40.493Z',
            use_type: 'marketing',
            fsc: false,
            object: 'booklet',
          },
        ],
        object: 'list',
        next_url: null,
        previous_url: null,
        count: 2,
      },
    },
  },
}

const PostBookletResponse = {
  description: 'Returns a booklet object',
  content: {},
  headers: z.object({
    'ratelimit-limit': RatelimitLimitHeaderSchema,
    'ratelimit-remaining': RatelimitRemainingHeaderSchema,
    'ratelimit-reset': RatelimitResetHeaderSchema,
  }),
}

const BuckslipErrorResponse = {
  description: 'Error',
  content: {
    'application/json': {
      schema: ErrorSchema,
      example: {
        error: { code: 'invalid', message: 'message about incorrect parameter', status_code: 422 },
      },
    },
  },
}

const BuckslipDeletedResponse = {
  description: 'Deleted the buckslip',
  content: {
    'application/json': {
      schema: BuckslipDeletionSchema,
      example: { id: 'buckslip_123456789', deleted: true },
    },
  },
}

const BuckslipOrderErrorResponse = {
  description: 'Error',
  content: {
    'application/json': {
      schema: ErrorSchema,
      example: { error: { code: 'not_found', message: 'buckslip not found', status_code: 404 } },
    },
  },
}

const UsVerificationsErrorResponse = {
  description: 'Error',
  content: {
    'application/json': {
      schema: ErrorSchema,
      example: {
        error: {
          code: 'invalid',
          message: 'primary_line is required or address is required',
          status_code: 422,
        },
      },
    },
  },
}

const BulkUsVerificationsResponse = {
  description: 'Returns a list of US verification objects.',
  content: {
    'application/json': {
      schema: UsVerificationsSchema,
      example: {
        addresses: [
          {
            id: 'us_ver_c7cb63d68f8d6',
            recipient: 'LOB.COM',
            primary_line: '210 KING ST',
            secondary_line: '',
            urbanization: '',
            last_line: 'SAN FRANCISCO CA 94107-1702',
            deliverability: 'deliverable',
            valid_address: true,
            components: {
              primary_number: '210',
              street_predirection: '',
              street_name: 'KING',
              street_suffix: 'ST',
              street_postdirection: '',
              secondary_designator: '',
              secondary_number: '',
              pmb_designator: '',
              pmb_number: '',
              extra_secondary_designator: '',
              extra_secondary_number: '',
              city: 'SAN FRANCISCO',
              state: 'CA',
              zip_code: '94107',
              zip_code_plus_4: '1702',
              zip_code_type: 'standard',
              delivery_point_barcode: '941071728506',
              address_type: 'commercial',
              record_type: 'street',
              default_building_address: false,
              county: 'SAN FRANCISCO',
              county_fips: '06075',
              carrier_route: 'C032',
              carrier_route_type: 'city_delivery',
              po_box_only_flag: 'N',
              latitude: 37.77597542841264,
              longitude: -122.3929557343685,
            },
            deliverability_analysis: {
              dpv_confirmation: 'Y',
              dpv_cmra: 'N',
              dpv_vacant: 'N',
              dpv_active: 'Y',
              dpv_inactive_reason: '',
              dpv_throwback: 'N',
              dpv_non_delivery_day_flag: 'N',
              dpv_non_delivery_day_values: '',
              dpv_no_secure_location: 'N',
              dpv_door_not_accessible: 'N',
              dpv_footnotes: ['AA', 'BB'],
              ews_match: false,
              lacs_indicator: '',
              lacs_return_code: '',
              suite_return_code: '',
            },
            lob_confidence_score: { score: 100, level: 'high' },
            object: 'us_verification',
          },
        ],
        errors: false,
      },
    },
  },
  headers: z.object({
    'ratelimit-limit': RatelimitLimitHeaderSchema,
    'ratelimit-remaining': RatelimitRemainingHeaderSchema,
    'ratelimit-reset': RatelimitResetHeaderSchema,
  }),
}

const IntlVerificationsErrorResponse = {
  description: 'Error',
  content: {
    'application/json': {
      schema: ErrorSchema,
      example: { error: { code: 'invalid', message: 'country is required', status_code: 422 } },
    },
  },
}

const BulkIntlVerificationsResponse = {
  description: 'Returns an array of international verification objects.',
  content: {
    'application/json': {
      schema: IntlVerificationsSchema,
      example: {
        addresses: [
          {
            id: 'intl_ver_c7cb63d68f8d6',
            recipient: null,
            primary_line: '370 WATER ST',
            secondary_line: '',
            last_line: 'SUMMERSIDE PE C1N 1C4',
            country: 'CA',
            coverage: 'SUBBUILDING',
            deliverability: 'deliverable',
            status: 'LV4',
            components: {
              primary_number: '370',
              street_name: 'WATER ST',
              city: 'SUMMERSIDE',
              state: 'PE',
              postal_code: 'C1N 1C4',
            },
            object: 'intl_verification',
          },
        ],
        errors: false,
      },
    },
  },
  headers: z.object({
    'ratelimit-limit': RatelimitLimitHeaderSchema,
    'ratelimit-remaining': RatelimitRemainingHeaderSchema,
    'ratelimit-reset': RatelimitResetHeaderSchema,
  }),
}

const AllCampaignsResponse = {
  description:
    'A dictionary with a data property that contains an array of up to `limit` campaigns. Each entry in the array is a separate campaign. The previous and next page of campaigns can be retrieved by calling the endpoint contained in the `previous_url` and `next_url` fields in the API response respectively.<br>If no more campaigns are available beyond the current set of returned results, the `next_url` field will be empty.',
  content: {
    'application/json': {
      schema: ListSchema.and(
        z
          .object({
            data: z
              .array(CampaignSchema)
              .exactOptional()
              .openapi({ description: 'list of campaigns' }),
          })
          .openapi({ required: [] }),
      ),
      example: {
        data: [
          {
            id: 'cmp_e05ee61ff80764b',
            billing_group_id: 'bg_fe3079dcdd80e5ae',
            name: 'My Campaign',
            description: "My Campaign's description",
            schedule_type: 'immediate',
            send_date: null,
            target_delivery_date: null,
            cancel_window_campaign_minutes: 60,
            metadata: {},
            use_type: 'marketing',
            is_draft: true,
            deleted: false,
            creatives: [],
            uploads: [],
            auto_cancel_if_ncoa: false,
            date_created: '2017-09-05T17:47:53.767Z',
            date_modified: '2017-09-05T17:47:53.767Z',
            object: 'campaign',
          },
        ],
        object: 'list',
        previous_url: null,
        next_url: null,
        count: 1,
      },
    },
  },
}

const CampaignsErrorResponse = {
  description: 'Error',
  content: {
    'application/json': {
      schema: ErrorSchema,
      example: { error: { code: 'not_found', message: 'campaign not found', status_code: 404 } },
    },
  },
}

const CampaignDeletedResponse = {
  description: 'Deleted the campaign.',
  content: {
    'application/json': {
      schema: z
        .object({
          id: CmpIdSchema.exactOptional(),
          deleted: z
            .boolean()
            .exactOptional()
            .openapi({ description: 'True if the resource has been successfully deleted.' }),
        })
        .openapi({
          description:
            "Lob uses RESTful HTTP response codes to indicate success or failure of an API request. In general, 2xx indicates success, 4xx indicate an input error, and 5xx indicates an error on Lob's end.",
          required: [],
        }),
      example: { id: 'cmp_e05ee61ff80764b', deleted: true },
    },
  },
}

const CardDeletedResponse = {
  description: 'Deleted the card',
  content: {
    'application/json': {
      schema: CardDeletionSchema,
      example: { id: 'card_123456789', deleted: true },
    },
  },
}

const CardOrderErrorResponse = {
  description: 'Error',
  content: {
    'application/json': {
      schema: ErrorSchema,
      example: { error: { code: 'not_found', message: 'card not found', status_code: 404 } },
    },
  },
}

const AllChecksResponse = {
  description:
    'A dictionary with a data property that contains an array of up to `limit` checks. Each entry in the array is a separate check. The previous and next page of checks can be retrieved by calling the endpoint contained in the `previous_url` and `next_url` fields in the API response respectively.<br>If no more checks are available beyond the current set of returned results, the `next_url` field will be empty.',
  content: {
    'application/json': {
      schema: ListSchema.and(
        z
          .object({
            data: z.array(CheckSchema).exactOptional().openapi({ description: 'list of checks' }),
          })
          .openapi({ required: [] }),
      ),
      example: {
        data: [
          {
            id: 'chk_0176bf6197100185',
            description: 'Demo Check',
            metadata: {},
            check_number: 12559,
            memo: 'rent',
            amount: 22.5,
            url: 'https://lob-assets.com/checks/chk_0176bf6197100185.pdf?version=v1&expires=1568239682&signature=aqKV5lmg_ktxzyl-qEwIf8-7DbvcguLO0LrfFcyMrUDDt6hxX_da0MEEpElxKR876VUaZrpHq_i_ayDWrsK3BA',
            to: {
              id: 'adr_bae820679f3f536b',
              description: 'Harry - Office',
              name: 'HARRY ZHANG',
              company: 'LOB',
              email: 'harry@lob.com',
              phone: '5555555555',
              address_line1: '210 KING ST STE 6100',
              address_line2: '',
              address_city: 'SAN FRANCISCO',
              address_state: 'CA',
              address_zip: '94107-1741',
              address_country: 'UNITED STATES',
              metadata: {},
              date_created: '2018-12-08T03:08:43.446Z',
              date_modified: '2018-12-08T03:08:43.446Z',
              object: 'address',
              recipient_moved: false,
            },
            from: {
              id: 'adr_210a8d4b0b76d77b',
              name: 'LEORE AVIDAR',
              address_line1: '210 KING ST STE 6100',
              address_city: 'SAN FRANCISCO',
              address_state: 'CA',
              address_zip: '94107-1741',
              address_country: 'UNITED STATES',
              metadata: {},
              date_created: '2018-12-08T03:01:07.651Z',
              date_modified: '2018-12-08T03:01:07.651Z',
              object: 'address',
            },
            bank_account: {
              id: 'bank_8cad8df5354d33f',
              description: 'Test Bank Account',
              metadata: {},
              routing_number: '322271627',
              account_number: '123456789',
              account_type: 'individual',
              signatory: 'John Doe',
              bank_name: 'J.P. MORGAN CHASE BANK, N.A.',
              verified: true,
              date_created: '2015-11-06T19:24:24.440Z',
              date_modified: '2015-11-06T19:41:28.312Z',
              object: 'bank_account',
              signature_url:
                'https://lob-assets.com/bank-accounts/asd_asdfghjkqwertyui.pdf?expires=1234567890&signature=aksdf',
            },
            carrier: 'USPS',
            tracking_events: [],
            thumbnails: [
              {
                small:
                  'https://lob-assets.com/checks/chk_0176bf6197100185_thumb_small_1.png?version=v1&expires=1568239682&signature=T8DfMm_mxJJzIPgm8I0lvYY4Z6I8aFjsGsrEAicEqw8Ei_FaOtiGQKGeY16rdugAt8lmS_iX0lveBoG2RgWDDw',
                medium:
                  'https://lob-assets.com/checks/chk_0176bf6197100185_thumb_medium_1.png?version=v1&expires=1568239682&signature=-iJD7C58xOCD8eQ01StqSlw9WbDymL0Ygze9twfTs9s17zQppr2Zx363_Z4bP3ATHNhF3osjHuAxIasI2Wf6DQ',
                large:
                  'https://lob-assets.com/checks/chk_0176bf6197100185_thumb_large_1.png?version=v1&expires=1568239682&signature=VJlOkVDPKZThstdd632r3Grm2WhoyPkC-pffpcePTw1i1NkpAObDSRaItKMOQgeWkAcUud3SH0tYcVOadaNiCw',
              },
              {
                small:
                  'https://lob-assets.com/checks/chk_0176bf6197100185_thumb_small_2.png?version=v1&expires=1568239682&signature=XpCkOjy2zIKXkuc0s-UAYGNwpD_pgt7c9FKTDUCYbyqXupAg1MV1l2tdqevr0L0LT5FJqrGZH9khD5QRMQTkAA',
                medium:
                  'https://lob-assets.com/checks/chk_0176bf6197100185_thumb_medium_2.png?version=v1&expires=1568239682&signature=sdgnJMzusEfndu7dNmk37eKc0AV7Hmqev6TQAqkCESs5pg7j6dDTsp7v4pnDvhsj8d7SIMcahl1aGiysoom0CA',
                large:
                  'https://lob-assets.com/checks/chk_0176bf6197100185_thumb_large_2.png?version=v1&expires=1568239682&signature=ybe8ovBh8Gf-AWKGRs4CB4XkU-erPVbY66umXARhTiJG2Dg1QlyCb9WmBXWt0tBCwD5NGMl20mHeAgHwecLxBA',
              },
            ],
            expected_delivery_date: '2019-08-16',
            mail_type: 'usps_first_class',
            date_created: '2019-08-08T19:34:47.571Z',
            date_modified: '2019-08-08T19:34:49.612Z',
            send_date: '2019-08-08',
            message: 'pancakes are good',
            object: 'check',
            check_bottom_template_id: 'tmpl_a',
            attachment_template_id: 'tmpl_a',
            check_bottom_template_version_id: 'vrsn_a',
            attachment_template_version_id: 'vrsn_a',
            merge_variables: {},
            use_type: 'operational',
            deleted: true,
          },
          {
            id: 'chk_92b9a6714bc0557c',
            description: 'Demo Check',
            metadata: {},
            check_number: 12558,
            memo: 'rent',
            amount: 22.5,
            url: 'https://lob-assets.com/checks/chk_92b9a6714bc0557c.pdf?version=v1&expires=1568239682&signature=jCct5PvzU58Iz2pSo58nf6rgsMRcJfMbUWThmm6lztFl5Vn2Y204b9h7gvw0vJvkDK2ThfaYqaUbWc0KzTpvAg',
            to: {
              id: 'adr_bae820679f3f536b',
              name: 'HARRY ZHANG',
              address_line1: '210 KING ST STE 6100',
              address_city: 'SAN FRANCISCO',
              address_state: 'CA',
              address_zip: '94107-1741',
              address_country: 'UNITED STATES',
              metadata: {},
              date_created: '2018-12-08T03:08:43.446Z',
              date_modified: '2018-12-08T03:08:43.446Z',
              object: 'address',
            },
            from: {
              id: 'adr_210a8d4b0b76d77b',
              name: 'LEORE AVIDAR',
              address_line1: '210 KING ST STE 6100',
              address_city: 'SAN FRANCISCO',
              address_state: 'CA',
              address_zip: '94107-1741',
              address_country: 'UNITED STATES',
              metadata: {},
              date_created: '2018-12-08T03:01:07.651Z',
              date_modified: '2018-12-08T03:01:07.651Z',
              object: 'address',
            },
            bank_account: {
              id: 'bank_8cad8df5354d33f',
              description: 'Test Bank Account',
              metadata: {},
              routing_number: '322271627',
              account_number: '123456789',
              account_type: 'individual',
              signatory: 'John Doe',
              bank_name: 'J.P. MORGAN CHASE BANK, N.A.',
              verified: true,
              date_created: '2015-11-06T19:24:24.440Z',
              date_modified: '2015-11-06T19:41:28.312Z',
              object: 'bank_account',
            },
            carrier: 'USPS',
            tracking_events: [],
            thumbnails: [
              {
                small:
                  'https://lob-assets.com/checks/chk_92b9a6714bc0557c_thumb_small_1.png?version=v1&expires=1568239682&signature=ublquO_xAdvAkAwGJuOjgZQwcz7c3Ao4NHWHeDVTBEBjcrQr8LavxWEwUc1KU105Zex3SajRQLd6hqJOrDl0Bw',
                medium:
                  'https://lob-assets.com/checks/chk_92b9a6714bc0557c_thumb_medium_1.png?version=v1&expires=1568239682&signature=vHyuOtsanX4HnY_0LNft6ZJ8C67JnbI8ZVCjA2d9nR0Rd6lCl0Nk1s6BAhefbBkzecX9Yp0B8NWN9Q5v1Z4ICw',
                large:
                  'https://lob-assets.com/checks/chk_92b9a6714bc0557c_thumb_large_1.png?version=v1&expires=1568239682&signature=SzCLKJ5m_TKJPLlL9PMw-zW9wo5mVYEK1jCtHwWRwwEaNU2v4Aehy-YHtus3TFJIt8RD2M-0Y3MtCxHwhqSABg',
              },
              {
                small:
                  'https://lob-assets.com/checks/chk_92b9a6714bc0557c_thumb_small_2.png?version=v1&expires=1568239682&signature=iElagODaOCkF_lCUxIw-lK50GhEU1ar_odmslCazZqD4Fsd_rQLx3M4Q5HzYWp4evfzuCoFvk4oAQVuIAaguAw',
                medium:
                  'https://lob-assets.com/checks/chk_92b9a6714bc0557c_thumb_medium_2.png?version=v1&expires=1568239682&signature=2vwvm_QsfmdtkAa-_F4uk-0yeUPRascyhfwOr-OX1ya9i_8gdFQAxMTrP-FfNBVSYFXeknFm6IUPJHggfgeiBg',
                large:
                  'https://lob-assets.com/checks/chk_92b9a6714bc0557c_thumb_large_2.png?version=v1&expires=1568239682&signature=NQf7tP9F4rP66S16hQ8duFpZSbTjaGBGK61Sr3H5D4CWtRyaPdoQlIpT2Jw-eKRcuYRkDEtQse_oWtL5gPqXDQ',
              },
              {
                small:
                  'https://lob-assets.com/checks/chk_92b9a6714bc0557c_thumb_small_3.png?version=v1&expires=1568239682&signature=dbjFd44H9TyZsc3d0fqKon5e0GqZ6GA1dT26MH6WnoX8lrQor2CA6sZJ5qmu0Z4SAFlMKAzb-twqN7faLjEbDQ',
                medium:
                  'https://lob-assets.com/checks/chk_92b9a6714bc0557c_thumb_medium_3.png?version=v1&expires=1568239682&signature=vSgwVs7T9E6KKBK7XU-6jRL9i0jvgTqvNxkdRARFf0UNlryJFm8l_t_x5mPH0sCTFZcLp7ouRaR5hhdHC6vZBQ',
                large:
                  'https://lob-assets.com/checks/chk_92b9a6714bc0557c_thumb_large_3.png?version=v1&expires=1568239682&signature=If4tXlN13WYy7JDPpFkWw0HAQpYNJHqi2UstiPHxUA_8IAj6vXORb-22acI124Pd1bR1QSjBHAW1gbiJ0kjiAQ',
              },
            ],
            merge_variables: null,
            expected_delivery_date: '2019-08-16',
            mail_type: 'usps_first_class',
            date_created: '2019-08-08T19:34:27.802Z',
            date_modified: '2019-08-08T19:34:30.582Z',
            send_date: '2019-08-08T19:34:27.802Z',
            use_type: 'operational',
            object: 'check',
          },
        ],
        object: 'list',
        next_url:
          'https://api.lob.com/v1/checks?limit=2&after=eyJkYXRlT2Zmc2V0IjoiMjAxOS0wOC0wOFQxOTozNDoyNy44MDJaIiwiaWRPZmZzZXQiOiJjaGtfOTJiOWE2NzE0YmMwNTU3YyJ9',
        previous_url: null,
        count: 2,
      },
    },
  },
}

const PostCheckResponse = {
  description: 'Returns a check object',
  content: {},
  headers: z.object({
    'ratelimit-limit': RatelimitLimitHeaderSchema,
    'ratelimit-remaining': RatelimitRemainingHeaderSchema,
    'ratelimit-reset': RatelimitResetHeaderSchema,
  }),
}

const CheckCanceledResponse = {
  description: 'Deleted',
  content: {
    'application/json': {
      schema: CheckDeletionSchema,
      example: { id: 'chk_123456789', deleted: true },
    },
  },
}

const CreativesErrorResponse = {
  description: 'Error',
  content: {
    'application/json': {
      schema: ErrorSchema,
      example: { error: { code: 'not_found', message: 'creative not found', status_code: 404 } },
    },
  },
}

const IdentityValidationErrorResponse = {
  description: 'Error',
  content: {
    'application/json': {
      schema: ErrorSchema,
      example: { error: { code: 'invalid', message: 'recipient is required', status_code: 422 } },
    },
  },
}

const IdentityValidationResponse = {
  description: 'Returns the likelihood a given name is associated with an address.',
  content: {
    'application/json': {
      schema: IdentityValidationSchema,
      example: {
        id: 'id_validation_8a013f3e',
        recipient: 'LARRY LOBSTER',
        primary_line: '210 KING ST.',
        secondary_line: '',
        urbanization: '',
        last_line: 'SAN FRANCISCO CA 94107-1728',
        score: 100,
        confidence: 'high',
        object: 'id_validation',
      },
    },
  },
  headers: z.object({
    'ratelimit-limit': RatelimitLimitHeaderSchema,
    'ratelimit-remaining': RatelimitRemainingHeaderSchema,
    'ratelimit-reset': RatelimitResetHeaderSchema,
  }),
}

const AllInformedDeliveryCampaignsResponse = {
  description:
    'A dictionary with a data property that contains an array of up to `limit` Informed Delivery campaigns. Each entry in the array is a separate campaign. The previous and next page of campaigns can be retrieved by calling the endpoint contained in the `previous_url` and `next_url` fields in the API response respectively. If no more campaigns are available beyond the current set of returned results, the `next_url` field will be empty.',
  content: {
    'application/json': {
      schema: ListSchema.and(
        z
          .object({
            data: z
              .array(ResponseSchema)
              .exactOptional()
              .openapi({ description: 'list of Informed Delivery campaigns' }),
          })
          .openapi({ required: [] }),
      ),
      example: {
        data: [
          {
            id: 'infd_234g5324g324g23',
            object: 'informed_delivery_campaign',
            account_id: 'xxxxxxxxxxxxxxxxxxxx',
            quantity: 20,
            usps_campaign_id: '1234567890',
            usps_title: 'Campaign: 1a1a1a1a-9657-423b-b3c7-2',
            start_date: '2024-08-31T00:00:00.000Z',
            end_date: '2024-10-15T00:00:00.000Z',
            start_serial: 3183487,
            end_serial: 3183506,
            ride_along_url: 'https://www.lob.com',
            ride_along_image_s3_link:
              'https://lob-assets.com/informed-delivery/infd_234g5324g324g23_ride_along.jpg',
            representative_image_s3_link: null,
            status: 'approved',
            date_created: '2024-08-30T23:30:02.980Z',
            date_modified: '2024-08-30T23:30:05.027Z',
            mode: 'live',
            lob_campaign_id: null,
            deleted: false,
            campaign_code: '1a1a1a1a-9657-423b-b3c7-2+Code',
            brand_name: 'Lob',
            service_request_number: null,
          },
          {
            id: 'infd_23g23g234g23g42',
            object: 'informed_delivery_campaign',
            account_id: 'xxxxxxxxxxxxxxxxxxxx',
            quantity: 5,
            usps_campaign_id: '23452345',
            usps_title: 'Campaign: 133d228e-f9e9-4056-aaea-f',
            start_date: '2024-08-31T00:00:00.000Z',
            end_date: '2024-10-15T00:00:00.000Z',
            start_serial: null,
            end_serial: null,
            ride_along_url: 'https://www.lob.com',
            ride_along_image_s3_link:
              'https://lob-assets.com/informed-delivery/infd_23g23g234g23g42_ride_along.jpg',
            representative_image_s3_link: null,
            status: 'pending_approval',
            date_created: '2024-08-30T23:30:02.980Z',
            date_modified: '2024-09-30T23:30:05.027Z',
            mode: 'live',
            lob_campaign_id: null,
            deleted: false,
            campaign_code: '133d228e-f9e9-4056-aaea-f+Code',
            brand_name: 'Lob',
            service_request_number: null,
          },
        ],
        object: 'list',
        next_url: null,
        previous_url: null,
        count: 2,
      },
    },
  },
}

const Writeable_422Response = {
  description: 'Error',
  content: {
    'application/json': {
      schema: ErrorSchema,
      example: {
        error: {
          code: 'invalid',
          message: 'quantity must be greater than or equal to 2',
          status_code: 422,
        },
      },
    },
  },
}

const IntlVerificationsResponse = {
  description: 'Returns an international verification object.',
  content: {
    'application/json': {
      schema: IntlVerificationSchema,
      examples: {
        full: {
          value: {
            id: 'intl_ver_c7cb63d68f8d6',
            recipient: null,
            primary_line: '370 WATER ST',
            secondary_line: '',
            last_line: 'SUMMERSIDE PE C1N 1C4',
            country: 'CA',
            coverage: 'SUBBUILDING',
            deliverability: 'deliverable',
            status: 'LV4',
            components: {
              primary_number: '370',
              street_name: 'WATER ST',
              city: 'SUMMERSIDE',
              state: 'PE',
              postal_code: 'C1N 1C4',
            },
            object: 'intl_verification',
          },
        },
        test: {
          value: {
            id: 'intl_ver_c7cb63d68f8d6',
            recipient: 'TEST KEYS DO NOT VERIFY ADDRESSES',
            primary_line: '370 WATER ST',
            secondary_line: '',
            last_line: 'SUMMERSIDE PE C1N 1C4',
            country: 'CA',
            coverage: 'SUBBUILDING',
            deliverability: 'deliverable',
            status: 'LV4',
            components: {
              primary_number: '370',
              street_name: 'WATER ST',
              city: 'SUMMERSIDE',
              state: 'PE',
              postal_code: 'C1N 1C4',
            },
            object: 'intl_verification',
          },
        },
      },
    },
  },
  headers: z.object({
    'ratelimit-limit': RatelimitLimitHeaderSchema,
    'ratelimit-remaining': RatelimitRemainingHeaderSchema,
    'ratelimit-reset': RatelimitResetHeaderSchema,
  }),
}

const LetterDeletedResponse = {
  description: 'Deleted',
  content: {
    'application/json': {
      schema: LetterDeletionSchema,
      example: { id: 'ltr_123456789', deleted: true },
    },
  },
}

const AllLettersResponse = {
  description:
    'A dictionary with a data property that contains an array of up to `limit` letters. Each entry in the array is a separate letter. The previous and next page of letters can be retrieved by calling the endpoint contained in the `previous_url` and `next_url` fields in the API response respectively. If no more letters are available beyond the current set of returned results, the `next_url` field will be empty.',
  content: {
    'application/json': {
      schema: ListSchema.and(
        z
          .object({
            data: z.array(LetterSchema).exactOptional().openapi({ description: 'list of letters' }),
          })
          .openapi({ required: [] }),
      ),
      example: {
        data: [
          {
            id: 'ltr_5ba44b462c79f07c',
            description: 'Demo Letter',
            metadata: {},
            to: {
              id: 'adr_asdi2y3riuasasoi',
              description: 'Harry - Office',
              name: 'Harry Zhang',
              company: 'Lob',
              phone: '5555555555',
              email: 'harry@lob.com',
              metadata: {},
              address_line1: '370 WATER ST',
              address_line2: '',
              address_city: 'SUMMERSIDE',
              address_state: 'PRINCE EDWARD ISLAND',
              address_zip: 'C1N 1C4',
              address_country: 'CANADA',
              recipient_moved: false,
              date_created: '2019-09-20T00:14:00.361Z',
              date_modified: '2019-09-20T00:14:00.361Z',
              object: 'address',
            },
            from: {
              id: 'adr_210a8d4b0b76d77b',
              description: null,
              name: 'LEORE AVIDAR',
              company: null,
              phone: null,
              email: null,
              address_line1: '210 KING ST STE 6100',
              address_line2: null,
              address_city: 'SAN FRANCISCO',
              address_state: 'CA',
              address_zip: '94107-1741',
              address_country: 'UNITED STATES',
              metadata: {},
              date_created: '2018-12-08T03:01:07.651Z',
              date_modified: '2018-12-08T03:01:07.651Z',
              object: 'address',
            },
            color: true,
            double_sided: false,
            address_placement: 'top_first_page',
            return_envelope: false,
            perforated_page: null,
            extra_service: 'certified',
            custom_envelope: null,
            template_id: 'tmpl_a',
            template_version_id: 'vrsn_a',
            mail_type: 'usps_first_class',
            url: 'https://lob-assets.com/letters/ltr_5ba44b462c79f07c.pdf?version=v1&expires=1568239830&signature=Ob-DUPLJLM4scWQeCDNadPJ4j33MZw16pykOxwv2us-bA7utTYi6oZ8WrEtBYDBBo09XkapR3gdJf0NEr90xAA',
            merge_variables: null,
            carrier: 'USPS',
            tracking_number: '92071902358909000011275538',
            tracking_events: [
              {
                id: 'evnt_9e84094c9368cfb',
                type: 'certified',
                name: 'Delivered',
                details: {
                  event: 'delivered',
                  description: 'Package has been delivered.',
                  notes: 'Delivered, Front Desk/Reception/Mail Room',
                  action_required: false,
                },
                location: '33408',
                time: '2019-10-08T19:41:00Z',
                date_created: '2019-10-08T19:41:00Z',
                date_modified: '2019-10-08T19:41:00Z',
                object: 'tracking_event',
              },
            ],
            thumbnails: [
              {
                small:
                  'https://lob-assets.com/letters/ltr_5ba44b462c79f07c_thumb_small_1.png?version=v1&expires=1568239830&signature=xZUmE8rq8wSECHPEb9c37cUDZBzGUO3XK5LsIPZhI6dOXgm6zJEn8_7tKuZ3JWBmvNJNXdTl_ufkNu4avjQUDw',
                medium:
                  'https://lob-assets.com/letters/ltr_5ba44b462c79f07c_thumb_medium_1.png?version=v1&expires=1568239830&signature=H7354Qpcm9S4aXbrMsBe6QJ6lSNi9IWPgMJtLWLi4Kyx9tHF8Mp9YEc_IL9x89Jfw4-yRzKDXA410X4W0PssBQ',
                large:
                  'https://lob-assets.com/letters/ltr_5ba44b462c79f07c_thumb_large_1.png?version=v1&expires=1568239830&signature=54LUIDKZyItA9pnC87d1pJVAuw8bhKLCsMpNWkB3LgdVWxPxxb_c1IyIWAbSR-dyOYEOlDBCc40J4Kns-O_mAg',
              },
            ],
            expected_delivery_date: '2019-08-16',
            date_created: '2019-08-08T17:09:14.514Z',
            date_modified: '2019-08-08T17:09:16.850Z',
            send_date: '2019-08-08',
            use_type: 'marketing',
            fsc: false,
            object: 'letter',
          },
          {
            id: 'ltr_da8267c6a6545cd6',
            description: 'Demo Letter',
            metadata: {},
            to: {
              id: 'adr_210a8d4b0b76d77b',
              description: null,
              name: 'LEORE AVIDAR',
              company: null,
              phone: null,
              email: null,
              address_line1: '210 KING ST STE 6100',
              address_line2: null,
              address_city: 'SAN FRANCISCO',
              address_state: 'CA',
              address_zip: '94107-1741',
              address_country: 'UNITED STATES',
              metadata: {},
              date_created: '2018-12-08T03:01:07.651Z',
              date_modified: '2018-12-08T03:01:07.651Z',
              object: 'address',
            },
            from: {
              id: 'adr_210a8d4b0b76d77b',
              description: null,
              name: 'LEORE AVIDAR',
              company: null,
              phone: null,
              email: null,
              address_line1: '210 KING ST STE 6100',
              address_line2: null,
              address_city: 'SAN FRANCISCO',
              address_state: 'CA',
              address_zip: '94107-1741',
              address_country: 'UNITED STATES',
              metadata: {},
              date_created: '2018-12-08T03:01:07.651Z',
              date_modified: '2018-12-08T03:01:07.651Z',
              object: 'address',
            },
            color: true,
            double_sided: false,
            address_placement: 'top_first_page',
            return_envelope: false,
            perforated_page: null,
            extra_service: null,
            custom_envelope: null,
            mail_type: 'usps_first_class',
            url: 'https://lob-assets.com/letters/ltr_da8267c6a6545cd6.pdf?version=v1&expires=1568239830&signature=HH-5RnbD4x0eJcnEC9HhqKSvQGsbkjovzvqSKgBijUHKIXwEKQJ4CbYhKs_U2q2A1k20Xefcaw7bfdPKozuqCQ',
            merge_variables: null,
            carrier: 'USPS',
            tracking_number: null,
            tracking_events: [],
            thumbnails: [
              {
                small:
                  'https://lob-assets.com/letters/ltr_da8267c6a6545cd6_thumb_small_1.png?version=v1&expires=1568239830&signature=C1Rs83187HpWGhsg_pJIOhDIKlDtC_IgBBxHiocCEzJ8CncJwqrq5yHke-p97Dv7o81G_pfhFmirai589O6DCw',
                medium:
                  'https://lob-assets.com/letters/ltr_da8267c6a6545cd6_thumb_medium_1.png?version=v1&expires=1568239830&signature=gz63l0yi3sK_sXjYfIVdLSvkknJFr_O5TWRulo_iKIgS-PosIl6J0tDR6bx_Tv5Ab_w7DABg3qdKZ846MZ7TCw',
                large:
                  'https://lob-assets.com/letters/ltr_da8267c6a6545cd6_thumb_large_1.png?version=v1&expires=1568239830&signature=4Y1OIymaWkSO3aBIHCeshFAVnF-pDcF2FFqkx_jovaUFuk4FT1SI24L7_POwTRXQHlETMGlzkP_CGgqselRUAA',
              },
            ],
            expected_delivery_date: '2019-08-16',
            date_created: '2019-08-08T17:08:12.224Z',
            date_modified: '2019-08-08T17:08:13.990Z',
            send_date: '2019-08-08T17:08:12.224Z',
            cards: null,
            use_type: 'marketing',
            fsc: true,
            object: 'letter',
          },
        ],
        object: 'list',
        next_url:
          'https://api.lob.com/v1/letters?limit=2&after=eyJkYXRlT2Zmc2V0IjoiMjAxOS0wOC0wOFQxNzowODoxMi4yMjRaIiwiaWRPZmZzZXQiOiJsdHJfZGE4MjY3YzZhNjU0NWNkNiJ9',
        previous_url: null,
        count: 2,
      },
    },
  },
}

const PostLetterResponse = {
  description: 'Returns a letter object',
  content: {},
  headers: z.object({
    'ratelimit-limit': RatelimitLimitHeaderSchema,
    'ratelimit-remaining': RatelimitRemainingHeaderSchema,
    'ratelimit-reset': RatelimitResetHeaderSchema,
  }),
}

const PostcardDeletedResponse = {
  description: 'Deleted',
  content: {
    'application/json': {
      schema: PostcardDeletionSchema,
      example: { id: 'psc_123456789', deleted: true },
    },
  },
}

const AllPostcardsResponse = {
  description:
    'A dictionary with a data property that contains an array of up to `limit` postcards. Each entry in the array is a separate postcard. The previous and next page of postcards can be retrieved by calling the endpoint contained in the `previous_url` and `next_url` fields in the API response respectively.<br>If no more postcards are available beyond the current set of returned results, the `next_url` field will be empty.',
  content: {
    'application/json': {
      schema: ListSchema.and(
        z
          .object({
            data: z
              .array(PostcardSchema)
              .exactOptional()
              .openapi({ description: 'list of postcards' }),
          })
          .openapi({ required: [] }),
      ),
      example: {
        data: [
          {
            id: 'psc_208e45e48d271294',
            description: null,
            metadata: {},
            to: {
              id: 'adr_210a8d4b0b76d77b',
              description: null,
              name: 'LEORE AVIDAR',
              company: null,
              phone: null,
              email: null,
              address_line1: '210 KING ST STE 6100',
              address_line2: null,
              address_city: 'SAN FRANCISCO',
              address_state: 'CA',
              address_zip: '94107-1741',
              address_country: 'UNITED STATES',
              metadata: {},
              date_created: '2018-12-08T03:01:07.651Z',
              date_modified: '2018-12-08T03:01:07.651Z',
              object: 'address',
            },
            url: 'https://lob-assets.com/postcards/psc_208e45e48d271294.pdf?version=v1&expires=1619218302&signature=NfHHLBSr5tOHA_Z4kij4dKqZG8f3vMDtwvuFVeeF9pV_lylcjLsVVODhNCE5hR6-2slUr6t9WMNsi429Pj7_DA',
            carrier: 'USPS',
            front_template_id: null,
            back_template_id: null,
            front_template_version_id: null,
            back_template_version_id: null,
            date_created: '2021-03-24T22:51:42.838Z',
            date_modified: '2021-03-24T22:51:42.838Z',
            send_date: '2021-03-24T22:51:42.838Z',
            use_type: 'marketing',
            fsc: false,
            object: 'postcard',
          },
          {
            id: 'psc_0e03d1ad7d31f151',
            description: null,
            metadata: {},
            to: {
              id: 'adr_c7cb63d68f8d6',
              description: null,
              name: 'JANE DOE',
              company: 'LOB',
              phone: '5555555555',
              email: 'jane.doe@lob.com',
              address_line1: '370 WATER ST',
              address_line2: '',
              address_city: 'SUMMERSIDE',
              address_state: 'PE',
              address_zip: 'C1N 1C4',
              address_country: 'CANADA',
              metadata: {},
              date_created: '2018-12-08T03:01:07.651Z',
              date_modified: '2018-12-08T03:01:07.651Z',
              object: 'address',
              recipient_moved: false,
            },
            from: {
              id: 'adr_210a8d4b0b76d77b',
              description: null,
              name: 'LEORE AVIDAR',
              company: null,
              phone: null,
              email: null,
              address_line1: '210 KING ST STE 6100',
              address_line2: null,
              address_city: 'SAN FRANCISCO',
              address_state: 'CA',
              address_zip: '94107-1741',
              address_country: 'UNITED STATES',
              metadata: {},
              date_created: '2018-12-08T03:01:07.651Z',
              date_modified: '2018-12-08T03:01:07.651Z',
              object: 'address',
            },
            url: 'https://lob-assets.com/postcards/psc_208e45e48d271294.pdf?version=v1&expires=1619218302&signature=NfHHLBSr5tOHA_Z4kij4dKqZG8f3vMDtwvuFVeeF9pV_lylcjLsVVODhNCE5hR6-2slUr6t9WMNsi429Pj7_DA',
            carrier: 'USPS',
            front_template_id: null,
            back_template_id: null,
            front_template_version_id: null,
            back_template_version_id: null,
            tracking_events: [],
            size: '6x11',
            mail_type: 'usps_first_class',
            merge_variables: {},
            thumbnails: [
              {
                small:
                  'https://lob-assets.com/letters/ltr_4868c3b754655f90_thumb_small_1.png?expires=1540372221&signature=a5fRBJ22ZA78Vgpg34M9UfmHWTS3eha',
                medium:
                  'https://lob-assets.com/letters/ltr_4868c3b754655f90_thumb_medium_1.png?expires=1540372221&signature=bAzL8sv935PY09FWSkpDpWKkyvGSWYF',
                large:
                  'https://lob-assets.com/letters/ltr_4868c3b754655f90_thumb_large_1.png?expires=1540372221&signature=gsKvxXgrm4v4iZD3bOibK7jApNkEMdW',
              },
            ],
            expected_delivery_date: '2021-03-30',
            date_created: '2021-03-24T22:51:42.838Z',
            date_modified: '2021-03-24T22:51:42.838Z',
            send_date: '2021-03-24T22:51:42.838Z',
            use_type: 'marketing',
            fsc: false,
            object: 'postcard',
          },
        ],
        object: 'list',
        previous_url: null,
        next_url: null,
        count: 2,
      },
    },
  },
}

const PostPostcardResponse = {
  description: 'Returns a postcard object',
  content: {},
  headers: z.object({
    'ratelimit-limit': RatelimitLimitHeaderSchema,
    'ratelimit-remaining': RatelimitRemainingHeaderSchema,
    'ratelimit-reset': RatelimitResetHeaderSchema,
  }),
}

const PostResourceProofResponse = {
  description: 'Returns a resource proof object',
  content: {},
  headers: z.object({
    'ratelimit-limit': RatelimitLimitHeaderSchema,
    'ratelimit-remaining': RatelimitRemainingHeaderSchema,
    'ratelimit-reset': RatelimitResetHeaderSchema,
  }),
}

const SelfMailerDeletedResponse = {
  description: 'Deleted',
  content: {
    'application/json': {
      schema: SelfMailerDeletionSchema,
      example: { id: 'sfm_123456789', deleted: true },
    },
  },
}

const AllSelfMailersResponse = {
  description:
    'A dictionary with a data property that contains an array of up to `limit` self_mailers. Each entry in the array is a separate self_mailer. The previous and next page of self_mailers can be retrieved by calling the endpoint contained in the `previous_url` and `next_url` fields in the API response respectively.<br>If no more self_mailers are available beyond the current set of returned results, the `next_url` field will be empty.',
  content: {
    'application/json': {
      schema: ListSchema.and(
        z
          .object({
            data: z
              .array(SelfMailerSchema)
              .exactOptional()
              .openapi({ description: 'list of self_mailers' }),
          })
          .openapi({ required: [] }),
      ),
      example: {
        data: [
          {
            id: 'sfm_7239rhwqkrfaskas',
            description: 'April Campaign',
            metadata: {},
            to: {
              id: 'adr_asdi2y3riuasasoi',
              description: 'Harry - Office',
              name: 'Harry Zhang',
              company: 'Lob',
              phone: '5555555555',
              email: 'harry@lob.com',
              metadata: {},
              address_line1: '370 WATER ST',
              address_line2: '',
              address_city: 'SUMMERSIDE',
              address_state: 'PRINCE EDWARD ISLAND',
              address_zip: 'C1N 1C4',
              address_country: 'CANADA',
              recipient_moved: false,
              date_created: '2019-09-20T00:14:00.361Z',
              date_modified: '2019-09-20T00:14:00.361Z',
              object: 'address',
            },
            from: {
              id: 'adr_210a8d4b0b76d77b',
              description: null,
              name: null,
              company: 'LOB',
              phone: null,
              email: null,
              address_line1: '210 KING ST STE 6100',
              address_line2: null,
              address_city: 'SAN FRANCISCO',
              address_state: 'CA',
              address_zip: '94107-1741',
              address_country: 'UNITED STATES',
              metadata: {},
              date_created: '2018-12-08T03:01:07.651Z',
              date_modified: '2018-12-08T03:01:07.651Z',
              object: 'address',
            },
            url: 'https://lob-assets.com/self-mailers/sfm_8ffbe811dea49dcf.pdf?version=v1&expires=1618781264&signature=YP_bCwrgVA2lz1Gr1YVCJN1f-WspUGsH0aJp2ihjfLXU7lDUV12_xRv4uPch0mfWeOOxEqpyP8hGpgvjmQKNAw',
            outside_template_id: 'tmpl_a3cb937f26d7eec',
            inside_template_id: 'tmpl_a3cb937f26d7eec',
            inside_template_version_id: 'vrsn_bfdf70893b00a85',
            outside_template_version_id: 'vrsn_bfdf70893b00a85',
            carrier: 'USPS',
            tracking_events: [],
            thumbnails: [
              {
                small:
                  'https://lob-assets.com/self-mailers/sfm_8ffbe811dea49dcf_thumb_small_1.png?version=v1&expires=1618781264&signature=A7q5HbRO53sUYYnwGlmP5mTS6ylLE7kS2mYhfcEOdexjyqG7UseK0MD26DppE4Q0aE4u2msDVMxd5ukjMerYCg',
                medium:
                  'https://lob-assets.com/self-mailers/sfm_8ffbe811dea49dcf_thumb_medium_1.png?version=v1&expires=1618781264&signature=b9pynuawVpU_vrhnT_mTpksdE-FLF_ZjdIBOFR_ltIzEGlx-VKD4VvZrqP98lG2D8V7UKQ7SdRr2nUAk4LxvCg',
                large:
                  'https://lob-assets.com/self-mailers/sfm_8ffbe811dea49dcf_thumb_large_1.png?version=v1&expires=1618781264&signature=g2jifhCselPqIj8au6lsbJMNFN8ZX3aM6GkLoAXiHBCS8X5mF9nhVbmO0odpnmwNlV1CWIp-MXVsZkC3NmxqBQ',
              },
              {
                small:
                  'https://lob-assets.com/self-mailers/sfm_8ffbe811dea49dcf_thumb_small_2.png?version=v1&expires=1618781264&signature=biJY4-ZbNNRydPYg3cZkq7wxjILbPBK_nIVyoyQsg5X5q4jlsa-2fzeMa48V9jprUetsC6WEuYvasHosRfG_DQ',
                medium:
                  'https://lob-assets.com/self-mailers/sfm_8ffbe811dea49dcf_thumb_medium_2.png?version=v1&expires=1618781264&signature=xEAX7bURyc8fSphacuo5yb7iVIpT8Xvq05KgMaNQS4r3aCpx0z1p42wbPmW758B5Ae0li1YDYvVyzS7qJIoWAw',
                large:
                  'https://lob-assets.com/self-mailers/sfm_8ffbe811dea49dcf_thumb_large_2.png?version=v1&expires=1618781264&signature=NieHDnoQ7STZUvofHrFt7S987CzIkUJWpaSgpVQPZw-C3_wwTPsIrvxYdXEuFrr6ciTUcxRBFPlE0lurmMkyCA',
              },
            ],
            merge_variables: { name: null },
            size: '6x18_bifold',
            mail_type: 'usps_first_class',
            expected_delivery_date: '2021-03-24',
            date_created: '2021-03-16T18:40:40.504Z',
            date_modified: '2021-03-16T18:41:06.691Z',
            send_date: '2021-03-16T18:45:40.493Z',
            deleted: true,
            use_type: 'marketing',
            fsc: false,
            object: 'self_mailer',
          },
          {
            id: 'sfm_8ffbe811dea49dcf',
            description: 'April Campaign',
            metadata: {},
            to: {
              id: 'adr_f9228b743884ff98',
              description: null,
              name: 'AYA',
              company: null,
              phone: null,
              email: null,
              address_line1: '2812 PARK RD',
              address_line2: null,
              address_city: 'CHARLOTTE',
              address_state: 'NC',
              address_zip: '28209-1314',
              address_country: 'UNITED STATES',
              metadata: {},
              date_created: '2021-03-16T18:40:40.410Z',
              date_modified: '2021-03-16T18:40:40.410Z',
              deleted: true,
              object: 'address',
            },
            from: {
              id: 'adr_210a8d4b0b76d77b',
              description: null,
              name: null,
              company: 'LOB',
              phone: null,
              email: null,
              address_line1: '210 KING ST STE 6100',
              address_line2: null,
              address_city: 'SAN FRANCISCO',
              address_state: 'CA',
              address_zip: '94107-1741',
              address_country: 'UNITED STATES',
              metadata: {},
              date_created: '2018-12-08T03:01:07.651Z',
              date_modified: '2018-12-08T03:01:07.651Z',
              object: 'address',
            },
            url: 'https://lob-assets.com/self-mailers/sfm_8ffbe811dea49dcf.pdf?version=v1&expires=1618781264&signature=YP_bCwrgVA2lz1Gr1YVCJN1f-WspUGsH0aJp2ihjfLXU7lDUV12_xRv4uPch0mfWeOOxEqpyP8hGpgvjmQKNAw',
            outside_template_id: 'tmpl_a3cb937f26d7eec',
            inside_template_id: 'tmpl_a3cb937f26d7eec',
            inside_template_version_id: 'vrsn_bfdf70893b00a85',
            outside_template_version_id: 'vrsn_bfdf70893b00a85',
            carrier: 'USPS',
            tracking_events: [],
            thumbnails: [
              {
                small:
                  'https://lob-assets.com/self-mailers/sfm_8ffbe811dea49dcf_thumb_small_1.png?version=v1&expires=1618781264&signature=A7q5HbRO53sUYYnwGlmP5mTS6ylLE7kS2mYhfcEOdexjyqG7UseK0MD26DppE4Q0aE4u2msDVMxd5ukjMerYCg',
                medium:
                  'https://lob-assets.com/self-mailers/sfm_8ffbe811dea49dcf_thumb_medium_1.png?version=v1&expires=1618781264&signature=b9pynuawVpU_vrhnT_mTpksdE-FLF_ZjdIBOFR_ltIzEGlx-VKD4VvZrqP98lG2D8V7UKQ7SdRr2nUAk4LxvCg',
                large:
                  'https://lob-assets.com/self-mailers/sfm_8ffbe811dea49dcf_thumb_large_1.png?version=v1&expires=1618781264&signature=g2jifhCselPqIj8au6lsbJMNFN8ZX3aM6GkLoAXiHBCS8X5mF9nhVbmO0odpnmwNlV1CWIp-MXVsZkC3NmxqBQ',
              },
              {
                small:
                  'https://lob-assets.com/self-mailers/sfm_8ffbe811dea49dcf_thumb_small_2.png?version=v1&expires=1618781264&signature=biJY4-ZbNNRydPYg3cZkq7wxjILbPBK_nIVyoyQsg5X5q4jlsa-2fzeMa48V9jprUetsC6WEuYvasHosRfG_DQ',
                medium:
                  'https://lob-assets.com/self-mailers/sfm_8ffbe811dea49dcf_thumb_medium_2.png?version=v1&expires=1618781264&signature=xEAX7bURyc8fSphacuo5yb7iVIpT8Xvq05KgMaNQS4r3aCpx0z1p42wbPmW758B5Ae0li1YDYvVyzS7qJIoWAw',
                large:
                  'https://lob-assets.com/self-mailers/sfm_8ffbe811dea49dcf_thumb_large_2.png?version=v1&expires=1618781264&signature=NieHDnoQ7STZUvofHrFt7S987CzIkUJWpaSgpVQPZw-C3_wwTPsIrvxYdXEuFrr6ciTUcxRBFPlE0lurmMkyCA',
              },
            ],
            merge_variables: { name: null },
            size: '6x18_bifold',
            mail_type: 'usps_first_class',
            expected_delivery_date: '2021-03-24',
            date_created: '2021-03-16T18:40:40.504Z',
            date_modified: '2021-03-16T18:41:06.691Z',
            send_date: '2021-03-16T18:45:40.493Z',
            deleted: true,
            use_type: 'marketing',
            fsc: true,
            object: 'self_mailer',
          },
        ],
        object: 'list',
        next_url: null,
        previous_url: null,
        count: 2,
      },
    },
  },
}

const PostSelfMailerResponse = {
  description: 'Returns a self_mailer object',
  content: {},
  headers: z.object({
    'ratelimit-limit': RatelimitLimitHeaderSchema,
    'ratelimit-remaining': RatelimitRemainingHeaderSchema,
    'ratelimit-reset': RatelimitResetHeaderSchema,
  }),
}

const SnapPackDeletedResponse = {
  description: 'Deleted',
  content: {
    'application/json': {
      schema: SnapPackDeletionSchema,
      example: { id: 'ord_0d6a16a3fff6318ac8f8008dc1', deleted: true },
    },
  },
}

const AllSnapPacksResponse = {
  description:
    'A dictionary with a data property that contains an array of up to `limit` snap_packs. Each entry in the array is a separate self_mailer. The previous and next page of snap_packs can be retrieved by calling the endpoint contained in the `previous_url` and `next_url` fields in the API response respectively.<br>If no more snap_packs are available beyond the current set of returned results, the `next_url` field will be empty.',
  content: {
    'application/json': {
      schema: ListSchema.and(
        z
          .object({
            data: z
              .array(SnapPackSchema)
              .exactOptional()
              .openapi({ description: 'list of snap_packs' }),
          })
          .openapi({ required: [] }),
      ),
      example: {
        data: [
          {
            id: 'ord_0d6a16a3fff6318ac8f8008dc1',
            description: 'April Campaign',
            to: {
              id: 'adr_bae820679f3f536b',
              description: null,
              name: 'HARRY ZHANG',
              company: null,
              phone: null,
              email: null,
              address_line1: '210 KING ST STE 6100',
              address_line2: null,
              address_city: 'SAN FRANCISCO',
              address_state: 'CA',
              address_zip: '94107-1741',
              address_country: 'UNITED STATES',
              metadata: {},
              date_created: '2017-09-05T17:47:53.767Z',
              date_modified: '2017-09-05T17:47:53.767Z',
              deleted: true,
              object: 'address',
            },
            from: {
              id: 'adr_210a8d4b0b76d77b',
              description: null,
              name: 'LEORE AVIDAR',
              company: null,
              phone: null,
              email: null,
              address_line1: '210 KING ST STE 6100',
              address_line2: null,
              address_city: 'SAN FRANCISCO',
              address_state: 'CA',
              address_zip: '94107-1741',
              address_country: 'UNITED STATES',
              metadata: {},
              date_created: '2017-09-05T17:47:53.767Z',
              date_modified: '2017-09-05T17:47:53.767Z',
              deleted: true,
              object: 'address',
            },
            url: 'https://lob-assets.com/order-creatives/ord_0d6a16a3fff6318ac8f8008dc1_comp_a20fd48ba4efda76ee827400d.pdf?version=v1&expires=1618512040&signature=qvyCqXI1ndBvc4AjvG8FlirqLXEcfmYo4sDrRtabaXMOsX88to9G3K49uIk_aqevvZXe8HoRYD_nWydbQHqaCA',
            outside_template_id: 'tmpl_a3cb937f26d7eec',
            inside_template_id: 'tmpl_a3cb937f26d7eec',
            inside_template_version_id: 'vrsn_bfdf70893b00a85',
            outside_template_version_id: 'vrsn_bfdf70893b00a85',
            carrier: 'USPS',
            tracking_events: [],
            thumbnails: [
              {
                small:
                  'https://lob-assets.com/order-creatives/ord_0d6a16a3fff6318ac8f8008dc1_comp_a20fd48ba4efda76ee827400d_thumb_small_1.png?version=v1&expires=1618512040&signature=-bipeUHP-hAMcCBSrWM0ZH1VwRdSPNVGGZN9hAZKr6Lh4ly6uxvratVd5LXJCK_zOEMYk_mTWASt0ge7OY6SDA',
                medium:
                  'https://lob-assets.com/order-creatives/ord_0d6a16a3fff6318ac8f8008dc1_comp_a20fd48ba4efda76ee827400d_thumb_medium_1.png?version=v1&expires=1618512040&signature=ryxN7bsXGtw_GRFSP3Cs3A3IYjxZi3cW9BHDCNgMt6p3nobVmsc_iFHt2e-S7ndAXhhN7nP-MQVov3bt3r37BQ',
                large:
                  'https://lob-assets.com/order-creatives/ord_0d6a16a3fff6318ac8f8008dc1_comp_a20fd48ba4efda76ee827400d_thumb_large_1.png?version=v1&expires=1618512040&signature=kBrm00xkyCkJNJRHxH8HshFaebtOxnzjVWOs1VVmGMuw8H6OBNcMAMxt9s49K0jlpHoh3Nr9uSncEZMQaaNjAg',
              },
              {
                small:
                  'https://lob-assets.com/order-creatives/ord_0d6a16a3fff6318ac8f8008dc1_comp_a20fd48ba4efda76ee827400d_thumb_small_2.png?version=v1&expires=1618512040&signature=3gTgU7Fd3KoT_vNlQnTGptRps5ZgnkhSnPrAwk7L98higIzSwfKoLvuu_DIpMM48dHbxckKT9waR8euJ4KSDBQ',
                medium:
                  'https://lob-assets.com/order-creatives/ord_0d6a16a3fff6318ac8f8008dc1_comp_a20fd48ba4efda76ee827400d_thumb_medium_2.png?version=v1&expires=1618512040&signature=Ue1lw5CMj7KRx6cMQL8xPeazaHCdJzWcACd1w3acuYPnWkVIpSt62OIO7hAtpAQK9xm1dhhlFj0rqRZMdRMMBA',
                large:
                  'https://lob-assets.com/order-creatives/ord_0d6a16a3fff6318ac8f8008dc1_comp_a20fd48ba4efda76ee827400d_thumb_large_2.png?version=v1&expires=1618512040&signature=cICc7HEm1xG_eyM4a_wtvPk2FqoLRmtgGa29kJisWnMIYBL0OkyzG4ZCYGMhp-5cZpJlSpXfTgGKh_Qmeo1TDw',
              },
            ],
            merge_variables: { name: null },
            size: '8.5x11',
            mail_type: 'usps_first_class',
            expected_delivery_date: '2021-03-24',
            date_created: '2021-03-16T18:40:40.504Z',
            date_modified: '2021-03-16T18:40:40.504Z',
            send_date: '2021-03-16T18:45:40.493Z',
            use_type: 'marketing',
            fsc: false,
            color: false,
            object: 'snap_pack',
          },
          {
            id: 'ord_851100000f31bb1a872f794cee',
            description: 'April Campaign',
            to: {
              id: 'adr_f9228b743884ff98',
              description: null,
              name: 'AYA',
              company: null,
              phone: null,
              email: null,
              address_line1: '2812 PARK RD',
              address_line2: null,
              address_city: 'CHARLOTTE',
              address_state: 'NC',
              address_zip: '28209-1314',
              address_country: 'UNITED STATES',
              metadata: {},
              date_created: '2021-03-16T18:40:40.410Z',
              date_modified: '2021-03-16T18:40:40.410Z',
              deleted: true,
              object: 'address',
            },
            from: {
              id: 'adr_210a8d4b0b76d77b',
              description: null,
              name: null,
              company: 'LOB',
              phone: null,
              email: null,
              address_line1: '210 KING ST STE 6100',
              address_line2: null,
              address_city: 'SAN FRANCISCO',
              address_state: 'CA',
              address_zip: '94107-1741',
              address_country: 'UNITED STATES',
              metadata: {},
              date_created: '2018-12-08T03:01:07.651Z',
              date_modified: '2018-12-08T03:01:07.651Z',
              object: 'address',
            },
            url: 'https://lob-assets.com/order-creatives/ord_851100000f31bb1a872f794cee_comp_a20fd48ba4efda76ee827400d.pdf?version=v1&expires=1618512040&signature=qvyCqXI1ndBvc4AjvG8FlirqLXEcfmYo4sDrRtabaXMOsX88to9G3K49uIk_aqevvZXe8HoRYD_nWydbQHqaCA',
            outside_template_id: 'tmpl_a3cb937f26d7eec',
            inside_template_id: 'tmpl_a3cb937f26d7eec',
            inside_template_version_id: 'vrsn_bfdf70893b00a85',
            outside_template_version_id: 'vrsn_bfdf70893b00a85',
            carrier: 'USPS',
            tracking_events: [],
            thumbnails: [
              {
                small:
                  'https://lob-assets.com/order-creatives/ord_851100000f31bb1a872f794cee_comp_a20fd48ba4efda76ee827400d_thumb_small_1.png?version=v1&expires=1618512040&signature=-bipeUHP-hAMcCBSrWM0ZH1VwRdSPNVGGZN9hAZKr6Lh4ly6uxvratVd5LXJCK_zOEMYk_mTWASt0ge7OY6SDA',
                medium:
                  'https://lob-assets.com/order-creatives/ord_851100000f31bb1a872f794cee_comp_a20fd48ba4efda76ee827400d_thumb_medium_1.png?version=v1&expires=1618512040&signature=ryxN7bsXGtw_GRFSP3Cs3A3IYjxZi3cW9BHDCNgMt6p3nobVmsc_iFHt2e-S7ndAXhhN7nP-MQVov3bt3r37BQ',
                large:
                  'https://lob-assets.com/order-creatives/ord_851100000f31bb1a872f794cee_comp_a20fd48ba4efda76ee827400d_thumb_large_1.png?version=v1&expires=1618512040&signature=kBrm00xkyCkJNJRHxH8HshFaebtOxnzjVWOs1VVmGMuw8H6OBNcMAMxt9s49K0jlpHoh3Nr9uSncEZMQaaNjAg',
              },
              {
                small:
                  'https://lob-assets.com/order-creatives/ord_851100000f31bb1a872f794cee_comp_a20fd48ba4efda76ee827400d_thumb_small_2.png?version=v1&expires=1618512040&signature=3gTgU7Fd3KoT_vNlQnTGptRps5ZgnkhSnPrAwk7L98higIzSwfKoLvuu_DIpMM48dHbxckKT9waR8euJ4KSDBQ',
                medium:
                  'https://lob-assets.com/order-creatives/ord_851100000f31bb1a872f794cee_comp_a20fd48ba4efda76ee827400d_thumb_medium_2.png?version=v1&expires=1618512040&signature=Ue1lw5CMj7KRx6cMQL8xPeazaHCdJzWcACd1w3acuYPnWkVIpSt62OIO7hAtpAQK9xm1dhhlFj0rqRZMdRMMBA',
                large:
                  'https://lob-assets.com/order-creatives/ord_851100000f31bb1a872f794cee_comp_a20fd48ba4efda76ee827400d_thumb_large_2.png?version=v1&expires=1618512040&signature=cICc7HEm1xG_eyM4a_wtvPk2FqoLRmtgGa29kJisWnMIYBL0OkyzG4ZCYGMhp-5cZpJlSpXfTgGKh_Qmeo1TDw',
              },
            ],
            merge_variables: { name: null },
            size: '8.5x11',
            mail_type: 'usps_first_class',
            expected_delivery_date: '2021-03-24',
            date_created: '2021-03-16T18:40:40.504Z',
            date_modified: '2021-03-16T18:40:40.504Z',
            send_date: '2021-03-16T18:45:40.493Z',
            use_type: 'marketing',
            fsc: false,
            color: false,
            object: 'snap_pack',
          },
        ],
        object: 'list',
        next_url: null,
        previous_url: null,
        count: 2,
      },
    },
  },
}

const PostSnapPackResponse = {
  description: 'Returns a snap_pack object',
  content: {},
  headers: z.object({
    'ratelimit-limit': RatelimitLimitHeaderSchema,
    'ratelimit-remaining': RatelimitRemainingHeaderSchema,
    'ratelimit-reset': RatelimitResetHeaderSchema,
  }),
}

const TemplateErrorResponse = {
  description: 'Error',
  content: {
    'application/json': {
      schema: ErrorSchema,
      example: { error: { code: 'invalid', message: 'html is required', status_code: 422 } },
    },
  },
}

const PostTemplateVersionResponse = {
  description: 'Returns the template version with the given template and version ids.',
  content: {},
  headers: z.object({
    'ratelimit-limit': RatelimitLimitHeaderSchema,
    'ratelimit-remaining': RatelimitRemainingHeaderSchema,
    'ratelimit-reset': RatelimitResetHeaderSchema,
  }),
}

const TemplateVersionDeletedResponse = {
  description: 'Deleted',
  content: {
    'application/json': {
      schema: TemplateVersionDeletionSchema,
      example: { value: { id: 'vrsn_123456789', deleted: true } },
    },
  },
}

const AllTemplateVersionsResponse = {
  description:
    'A dictionary with a data property that contains an array of up to `limit` template versions. Each entry in the array is a separate template version object. The previous and next page of template versions can be retrieved by calling the endpoint contained in the `previous_url` and `next_url` fields in the API response respectively.<br>If no more template versions are available beyond the current set of returned results, the `next_url` field will be empty.',
  content: {
    'application/json': {
      schema: ListSchema.and(
        z
          .object({
            data: z
              .array(TemplateVersionSchema)
              .exactOptional()
              .openapi({ description: 'list of template versions' }),
          })
          .openapi({ required: [] }),
      ),
      example: {
        data: [
          {
            id: 'vrsn_4d6ff5d868bf630',
            description: 'Second Version',
            html: 'Second HTML for ',
            date_created: '2017-11-09T05:09:03.665Z',
            date_modified: '2018-05-22T22:01:10.479Z',
            object: 'version',
          },
          {
            id: 'vrsn_2a17159c1911919',
            description: 'Test Template',
            html: 'HTML for ',
            date_created: '2017-11-09T05:08:40.004Z',
            date_modified: '2018-05-22T22:01:11.309Z',
            object: 'version',
          },
        ],
        object: 'list',
        count: 2,
      },
    },
  },
}

const TemplateDeletedResponse = {
  description: 'Deleted',
  content: {
    'application/json': {
      schema: TemplateDeletionSchema,
      example: { value: { id: 'tmpl_123456789', deleted: true } },
    },
  },
}

const AllTemplatesResponse = {
  description:
    'A dictionary with a data property that contains an array of up to `limit` templates. Each entry in the array is a separate template. The previous and next page of templates can be retrieved by calling the endpoint contained in the `previous_url` and `next_url` fields in the API response respectively.<br>If no more templates are available beyond the current set of returned results, the `next_url` field will be empty.',
  content: {
    'application/json': {
      schema: ListSchema.and(
        z
          .object({
            data: z
              .array(TemplateSchema)
              .exactOptional()
              .openapi({ description: 'list of templates' }),
          })
          .openapi({ required: [] }),
      ),
      example: {
        data: [
          {
            id: 'tmpl_d5a5a89da9106f8',
            description: 'Test Template',
            versions: [
              {
                id: 'vrsn_232a02fb8224791',
                suggest_json_editor: true,
                description: 'Test Template',
                engine: 'legacy',
                html: 'HTML for ',
                date_created: '2019-07-27T23:49:01.512Z',
                date_modified: '2019-07-27T23:49:01.512Z',
                object: 'version',
              },
            ],
            published_version: {
              id: 'vrsn_232a02fb8224791',
              suggest_json_editor: false,
              description: 'Test Template',
              engine: 'handlebars',
              html: 'HTML for ',
              date_created: '2019-07-27T23:49:01.512Z',
              date_modified: '2019-07-27T23:49:01.512Z',
              object: 'version',
            },
            metadata: {},
            date_created: '2019-07-27T23:49:01.511Z',
            date_modified: '2019-07-27T23:49:01.511Z',
            object: 'template',
          },
          {
            id: 'tmpl_59b2150ae120887',
            description: 'Test Template',
            versions: [
              {
                id: 'vrsn_2a7eb63ccb795b9',
                description: 'Test Template',
                html: 'HTML for ',
                date_created: '2019-03-29T10:22:34.643Z',
                date_modified: '2019-03-29T10:22:34.643Z',
                object: 'version',
              },
            ],
            published_version: {
              id: 'vrsn_2a7eb63ccb795b9',
              description: 'Test Template',
              html: 'HTML for ',
              date_created: '2019-03-29T10:22:34.643Z',
              date_modified: '2019-03-29T10:22:34.643Z',
              object: 'version',
            },
            metadata: {},
            date_created: '2019-03-29T10:22:34.642Z',
            date_modified: '2019-03-29T10:22:34.642Z',
            object: 'template',
          },
        ],
        object: 'list',
        previous_url: null,
        next_url:
          'https://api.lob.com/v1/templates?limit=2&after=eyJkYXRlT2Zmc2V0IjoiMjAxOS0wMy0yOVQxMDoyMjozNC42NDJaIiwiaWRPZmZzZXQiOiJ0bXBsXzU5YjIxNTBhZTEyMDg4NyJ9',
        count: 2,
      },
    },
  },
}

const AllUploadsResponse = {
  description: 'An array of matching uploads. Each entry in the array is a separate upload.',
  content: {
    'application/json': {
      schema: z.array(UploadSchema),
      example: [
        {
          id: 'upl_71be866e430b11e9',
          accountId: 'fa9ea650fc7b31a89f92',
          campaignId: 'cmp_1933ad629bae1408',
          mode: 'test',
          failuresUrl: 'https://www.example.com',
          originalFilename: 'my_audience.csv',
          state: 'Draft',
          totalMailpieces: 100,
          failedMailpieces: 5,
          validatedMailpieces: 95,
          bytesProcessed: 17268,
          dateCreated: '2017-09-05T17:47:53.767Z',
          dateModified: '2017-09-05T17:47:53.767Z',
          requiredAddressColumnMapping: {
            name: 'recipient_name',
            address_line1: 'primary_line',
            address_city: 'city',
            address_state: 'state',
            address_zip: 'zip_code',
          },
          optionalAddressColumnMapping: {
            address_line2: 'secondary_line',
            company: 'company',
            address_country: 'country',
          },
          mergeVariableColumnMapping: { gift_code: 'code' },
          metadata: { columns: ['recipient_name', 'zip_code'] },
        },
      ],
    },
  },
}

const UploadValidationErrorResponse = {
  description: 'Validation Error',
  content: {
    'application/json': {
      schema: z
        .object({
          detail: z
            .array(
              z
                .object({
                  loc: z.array(z.union([z.string(), z.int()])).openapi({ title: 'Location' }),
                  msg: z.string().openapi({ title: 'Message' }),
                  type: z.string().openapi({ title: 'Error Type' }),
                })
                .openapi({ title: 'ValidationError', required: ['loc', 'msg', 'type'] }),
            )
            .exactOptional()
            .openapi({ title: 'Detail' }),
        })
        .openapi({ title: 'HTTPValidationError', required: [] }),
    },
  },
}

const UploadNotFoundResponse = {
  description: 'Not Found Error',
  content: {
    'application/json': {
      schema: ErrorSchema,
      example: { error: { code: 'not_found', message: 'upload not found', status_code: 404 } },
    },
  },
}

const UploadExportErrorResponse = {
  description: 'Create Export Error',
  content: {
    'application/json': {
      schema: z
        .object({
          code: z
            .union([z.literal(400), z.literal(404)])
            .openapi({ description: 'A conventional HTTP status code' }),
          message: z
            .string()
            .openapi({ description: 'A human-readable message with more details about the error' }),
          errors: z
            .array(z.string())
            .openapi({ description: 'An array of pre-defined strings that identify an error' }),
        })
        .openapi({
          required: ['code', 'message', 'errors'],
          example: {
            code: 400,
            message: "Invalid body, check 'errors' property for more info.",
            errors: ['type must be a string'],
          },
        }),
    },
  },
}

const UsAutocompletionsErrorResponse = {
  description: 'Error',
  content: {
    'application/json': {
      schema: ErrorSchema,
      example: {
        error: { code: 'invalid', message: 'address_prefix is required', status_code: 422 },
      },
    },
  },
}

const UsAutocompletionsResponse = {
  description: 'Returns a US autocompletion object.',
  content: {
    'application/json': {
      schema: UsAutocompletionsSchema,
      examples: {
        basic: {
          value: {
            id: 'us_auto_a3ac97bcfbb2460ab20c',
            suggestions: [
              {
                primary_line: '185 BAYSIDE VILLAGE PL',
                city: 'SAN FRANCISCO',
                state: 'CA',
                zip_code: '94107',
              },
              {
                primary_line: '185 BRANNAN ST',
                city: 'SAN FRANCISCO',
                state: 'CA',
                zip_code: '94107',
              },
              {
                primary_line: '185 BONIFACIO ST',
                city: 'SAN FRANCISCO',
                state: 'CA',
                zip_code: '94107',
              },
              {
                primary_line: '185 BLAIR TER',
                city: 'SAN FRANCISCO',
                state: 'CA',
                zip_code: '94107',
              },
              {
                primary_line: '185 BLUXOME ST',
                city: 'SAN FRANCISCO',
                state: 'CA',
                zip_code: '94107',
              },
              {
                primary_line: '210 KING ST',
                city: 'SAN FRANCISCO',
                state: 'CA',
                zip_code: '94107',
              },
              {
                primary_line: '185 BRYANT ST',
                city: 'SAN FRANCISCO',
                state: 'CA',
                zip_code: '94107',
              },
            ],
            object: 'us_autocompletion',
          },
        },
        test: {
          value: {
            id: 'us_auto_a3ac97bcfbb2460ab20c',
            suggestions: [
              { primary_line: '1 TELEPHONE RD', city: 'OXFORD', state: 'AR', zip_code: '72565' },
              { primary_line: '1 TELEGA PL', city: 'PALMDALE', state: 'CA', zip_code: '93550' },
              { primary_line: '1 TELEGRAM AVE', city: 'ELMONT', state: 'NY', zip_code: '11003' },
              {
                primary_line: '1 TELEGRAM AVE',
                city: 'GARDEN CITY',
                state: 'KS',
                zip_code: '67846',
              },
              {
                primary_line: '1 TELEGRAPH HILL RD',
                city: 'HOLMDEL',
                state: 'NJ',
                zip_code: '07733',
              },
              {
                primary_line: '1 TELEGRAPH HILL RD S',
                city: 'HOLMDEL',
                state: 'NJ',
                zip_code: '07733',
              },
              {
                primary_line: '1 TELEGRAPH HILL BLVD',
                city: 'SAN FRANCISCO',
                state: 'CA',
                zip_code: '94133',
              },
            ],
            object: 'us_autocompletion',
          },
        },
      },
    },
  },
  headers: z.object({
    'ratelimit-limit': RatelimitLimitHeaderSchema,
    'ratelimit-remaining': RatelimitRemainingHeaderSchema,
    'ratelimit-reset': RatelimitResetHeaderSchema,
  }),
}

const ReverseGeocodeLookupsErrorResponse = {
  description: 'Error',
  content: {
    'application/json': {
      schema: ErrorSchema,
      example: { error: { code: 'invalid', message: 'latitude is required', status_code: 422 } },
    },
  },
}

const ReverseGeocodeLookupsResponse = {
  description: 'Returns a zip lookup object if a valid zip was provided.',
  content: {
    'application/json': {
      schema: ReverseGeocodeSchema,
      example: {
        id: 'us_reverse_geocode_8a013f3e',
        addresses: [
          {
            components: { zip_code: '94107', zip_code_plus_4: '1702' },
            location_analysis: { latitude: 37.78271, longitude: -122.416202, distance: 1.32 },
          },
          {
            components: { zip_code: '94107', zip_code_plus_4: '1702' },
            location_analysis: { latitude: 37.782917, longitude: -122.416131, distance: 1.33 },
          },
        ],
      },
    },
  },
  headers: z.object({
    'ratelimit-limit': RatelimitLimitHeaderSchema,
    'ratelimit-remaining': RatelimitRemainingHeaderSchema,
    'ratelimit-reset': RatelimitResetHeaderSchema,
  }),
}

const UsVerificationsResponse = {
  description: 'Returns a US verification object.',
  content: {
    'application/json': {
      schema: UsVerificationSchema,
      examples: {
        basic: {
          value: {
            id: 'us_ver_c7cb63d68f8d6',
            recipient: 'LOB.COM',
            primary_line: '210 KING ST',
            secondary_line: '',
            urbanization: '',
            last_line: 'SAN FRANCISCO CA 94107-1702',
            deliverability: 'deliverable',
            valid_address: true,
            components: {
              primary_number: '210',
              street_predirection: '',
              street_name: 'KING',
              street_suffix: 'ST',
              street_postdirection: '',
              secondary_designator: '',
              secondary_number: '',
              pmb_designator: '',
              pmb_number: '',
              extra_secondary_designator: '',
              extra_secondary_number: '',
              city: 'SAN FRANCISCO',
              state: 'CA',
              zip_code: '94107',
              zip_code_plus_4: '1702',
              zip_code_type: 'standard',
              delivery_point_barcode: '941071702108',
              address_type: 'commercial',
              record_type: 'street',
              default_building_address: false,
              county: 'SAN FRANCISCO',
              county_fips: '06075',
              carrier_route: 'C032',
              carrier_route_type: 'city_delivery',
              po_box_only_flag: 'N',
              latitude: 37.77597542841264,
              longitude: -122.3929557343685,
            },
            deliverability_analysis: {
              dpv_confirmation: 'Y',
              dpv_cmra: 'N',
              dpv_vacant: 'N',
              dpv_active: 'Y',
              dpv_inactive_reason: '',
              dpv_throwback: 'N',
              dpv_non_delivery_day_flag: 'N',
              dpv_non_delivery_day_values: '',
              dpv_no_secure_location: 'N',
              dpv_door_not_accessible: 'N',
              dpv_footnotes: ['AA', 'BB'],
              ews_match: false,
              lacs_indicator: '',
              lacs_return_code: '',
              suite_return_code: '',
            },
            lob_confidence_score: { score: 100, level: 'high' },
            object: 'us_verification',
          },
        },
        test: {
          value: {
            id: 'us_ver_po_box',
            recipient: 'TEST KEYS DO NOT VERIFY ADDRESSES',
            primary_line: 'PO BOX 720114',
            secondary_line: '',
            urbanization: '',
            last_line: 'SAN FRANCISCO CA 94172-0114',
            deliverability: 'deliverable',
            valid_address: true,
            components: {
              primary_number: '720114',
              street_predirection: '',
              street_name: 'PO BOX',
              street_suffix: '',
              street_postdirection: '',
              secondary_designator: '',
              secondary_number: '',
              pmb_designator: '',
              pmb_number: '',
              extra_secondary_designator: '',
              extra_secondary_number: '',
              city: 'SAN FRANCISCO',
              state: 'CA',
              zip_code: '94172',
              zip_code_plus_4: '0114',
              zip_code_type: 'po_box',
              delivery_point_barcode: '941720114146',
              address_type: 'residential',
              record_type: 'po_box',
              default_building_address: false,
              county: 'SAN FRANCISCO',
              county_fips: '06075',
              carrier_route: 'BOO2',
              carrier_route_type: 'po_box',
              po_box_only_flag: '',
              latitude: 37.75971500260575,
              longitude: -122.69397561170017,
            },
            deliverability_analysis: {
              dpv_confirmation: 'Y',
              dpv_cmra: 'N',
              dpv_vacant: 'N',
              dpv_active: 'Y',
              dpv_inactive_reason: '',
              dpv_throwback: '',
              dpv_non_delivery_day_flag: '',
              dpv_non_delivery_day_values: '',
              dpv_no_secure_location: '',
              dpv_door_not_accessible: '',
              dpv_footnotes: ['AA', 'BB'],
              ews_match: false,
              lacs_indicator: '',
              lacs_return_code: '',
              suite_return_code: '',
            },
            object: 'us_verification',
          },
        },
      },
    },
  },
  headers: z.object({
    'ratelimit-limit': RatelimitLimitHeaderSchema,
    'ratelimit-remaining': RatelimitRemainingHeaderSchema,
    'ratelimit-reset': RatelimitResetHeaderSchema,
  }),
}

const ZipLookupsErrorResponse = {
  description: 'Error',
  content: {
    'application/json': {
      schema: ErrorSchema,
      example: { error: { code: 'invalid', message: 'zip_code is required', status_code: 422 } },
    },
  },
}

const ZipLookupsResponse = {
  description: 'Returns a zip lookup object if a valid zip was provided.',
  content: {
    'application/json': {
      schema: ZipSchema,
      example: {
        id: 'us_zip_c7cb63d68f8d6',
        cities: [
          {
            city: 'SAN FRANCISCO',
            state: 'CA',
            county: 'SAN FRANCISCO',
            county_fips: '06075',
            preferred: true,
          },
        ],
        zip_code_type: 'standard',
        object: 'us_zip_lookup',
        zip_code: '94107',
      },
    },
  },
  headers: z.object({
    'ratelimit-limit': RatelimitLimitHeaderSchema,
    'ratelimit-remaining': RatelimitRemainingHeaderSchema,
    'ratelimit-reset': RatelimitResetHeaderSchema,
  }),
}

const EventsResponse = {
  description: 'Returns an `event` object to the specified server.',
  content: {
    'application/json': {
      schema: EventsSchema,
      example: {
        event_type: {
          resource: 'postcards',
          enabled_for_test: true,
          id: 'postcard.created',
          object: 'event_type',
        },
        reference_id: 'psc_d2d10a2e9cba991c',
        id: 'evt_d95ff8ffd2b5cfb4',
        date_created: '2016-12-04T22:50:08.180Z',
        body: {
          id: 'psc_d2d10a2e9cba991c',
          description: 'Test Postcard',
          metadata: {},
          to: {
            id: 'adr_8e783523dd7f0e70',
            description: 'Test Recipient Address',
            name: 'Harry Zhang',
            company: 'LOB',
            phone: null,
            email: null,
            address_line1: '123 TEST ST',
            address_line2: 'UNIT 1',
            address_city: 'SAN FRANCISCO',
            address_state: 'CA',
            address_zip: '94107',
            address_country: 'UNITED STATES',
            metadata: {},
            date_created: '2016-12-04T10:51:51.844Z',
            date_modified: '2016-12-04T10:51:51.844Z',
            object: 'address',
          },
          from: {
            id: 'adr_d2e26faf793ed422',
            description: 'Test Sender Address',
            name: 'Harry Zhang',
            company: 'LOB',
            phone: null,
            email: null,
            address_line1: '123 TEST ST',
            address_line2: 'UNIT 1',
            address_city: 'SAN FRANCISCO',
            address_state: 'CA',
            address_zip: '94107',
            address_country: 'UNITED STATES',
            metadata: {},
            date_created: '2016-12-04T10:51:51.845Z',
            date_modified: '2016-12-04T10:51:51.845Z',
            object: 'address',
          },
          url: 'https://lob-assets.com/postcards/psc_d2d10a2e9cba991c.pdf?expires=1540372221&signature=dNE8OtbDymujUxBIMYle4H1cv1aZNFk',
          front_template_id: null,
          back_template_id: null,
          carrier: 'USPS',
          tracking_events: [],
          thumbnails: [
            {
              small:
                'https://lob-assets.com/postcards/psc_d2d10a2e9cba991c_thumb_small_1.png?expires=1540372221&signature=McmqScxPgbe7yQY5X31U3vhU8VUlfA1',
              medium:
                'https://lob-assets.com/postcards/psc_d2d10a2e9cba991c_thumb_medium_1.png?expires=1540372221&signature=VBClptOuCcj9Ybay6gE5aetT5j3C7KS',
              large:
                'https://lob-assets.com/postcards/psc_d2d10a2e9cba991c_thumb_large_1.png?expires=1540372221&signature=RAHpIwoYKYM17f0bbaoOiamCkjpzYfH',
            },
            {
              small:
                'https://lob-assets.com/postcards/psc_d2d10a2e9cba991c_thumb_small_1.png?expires=1540372221&signature=5biHoaCmkphQaGJymOZxmTF0hHdiH4N',
              medium:
                'https://lob-assets.com/postcards/psc_d2d10a2e9cba991c_thumb_medium_1.png?expires=1540372221&signature=1ApGx0kn5EO4qQKGJzCe6zEPnQpzpRY',
              large:
                'https://lob-assets.com/postcards/psc_d2d10a2e9cba991c_thumb_large_1.png?expires=1540372221&signature=z80p90RBak6T26IAfg5yg7a6qKF53a8',
            },
          ],
          merge_variables: null,
          mail_type: 'usps_first_class',
          size: '4x6',
          expected_delivery_date: '2016-12-09',
          date_created: '2016-12-04T10:51:51.843Z',
          date_modified: '2016-12-04T10:51:51.843Z',
          send_date: '2016-12-04T10:56:51.843Z',
          object: 'postcard',
        },
        object: 'event',
      },
    },
  },
}

const TrackingEventsResponse = {
  description: 'Returns a `tracking_event` object to the specified server.',
  content: {
    'application/json': {
      schema: z.xor([TrackingEventNormalSchema, TrackingEventCertifiedSchema]),
      examples: {
        normal: {
          value: {
            id: 'evnt_9e84094c9368cfb',
            type: 'normal',
            name: 'In Local Area',
            details: null,
            location: '72231',
            time: '2016-06-30T15:51:41.000Z',
            date_created: '2016-06-30T17:41:59.771Z',
            date_modified: '2016-06-30T17:41:59.771Z',
            object: 'tracking_event',
          },
        },
        certified: {
          value: {
            id: 'evnt_9e84094c9368cfb',
            type: 'certified',
            name: 'Delivered',
            details: {
              event: 'delivered',
              description: 'Package has been delivered.',
              notes: 'Delivered, Front Desk/Reception/Mail Room',
              action_required: false,
            },
            location: '33408',
            time: '2019-10-08T19:41:00Z',
            date_created: '2019-10-08T19:41:00Z',
            date_modified: '2019-10-08T19:41:00Z',
            object: 'tracking_event',
          },
        },
      },
    },
  },
}

const LimitParamsSchema = z
  .preprocess(
    (val) =>
      typeof val === 'string' &&
      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
        ? Number(val)
        : val,
    z.int().min(1).max(100),
  )
  .default(10)
  .exactOptional()
  .openapi({
    param: {
      in: 'query',
      name: 'limit',
      required: false,
      description: 'How many results to return.',
      schema: { type: 'integer', minimum: 1, default: 10, maximum: 100, example: 10 },
    },
    example: 10,
  })

const BeforeAfterParamsSchema = z
  .object({
    before: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A reference to a list entry used for paginating to the previous set of entries. This field is pre-populated in the `previous_url` field in the return response.\n',
      }),
    after: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A reference to a list entry used for paginating to the next set of entries. This field is pre-populated in the `next_url` field in the return response.\n',
      }),
  })
  .openapi({ required: [] })
  .and(
    z.xor([
      z
        .unknown()
        .superRefine((val, ctx) => {
          if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
            if (!Object.hasOwn(val, 'before')) {
              ctx.addIssue({ code: 'custom' })
            }
          }
        })
        .openapi({ required: ['before'] }),
      z
        .unknown()
        .superRefine((val, ctx) => {
          if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
            if (!Object.hasOwn(val, 'after')) {
              ctx.addIssue({ code: 'custom' })
            }
          }
        })
        .openapi({ required: ['after'] }),
    ]),
  )
  .exactOptional()
  .openapi({
    param: {
      in: 'query',
      name: 'before/after',
      required: false,
      description:
        '`before` and `after` are both optional but only one of them can be in the query at a time.\n',
      schema: {
        allOf: [
          {
            type: 'object',
            properties: {
              before: {
                type: 'string',
                description:
                  'A reference to a list entry used for paginating to the previous set of entries. This field is pre-populated in the `previous_url` field in the return response.\n',
              },
              after: {
                type: 'string',
                description:
                  'A reference to a list entry used for paginating to the next set of entries. This field is pre-populated in the `next_url` field in the return response.\n',
              },
            },
          },
          { oneOf: [{ required: ['before'] }, { required: ['after'] }] },
        ],
      },
    },
  })

const IncludeParamsSchema = z
  .preprocess((val) => (val === undefined || Array.isArray(val) ? val : [val]), z.array(z.string()))
  .exactOptional()
  .openapi({
    param: {
      in: 'query',
      name: 'include',
      description:
        'Request that the response include the total count by specifying `include=["total_count"]`.\n',
      schema: { type: 'array', items: { type: 'string' } },
      explode: true,
      required: false,
    },
  })

const DateCreatedParamsSchema = DateFilterSchema.openapi({
  param: {
    in: 'query',
    name: 'date_created',
    description:
      'Filter by date created. Accepted formats are ISO-8601 date or datetime, e.g. `{ "gt": "2012-01-01", "lt": "2012-01-31T12:34:56Z" }` where `gt` is >, `lt` is <, `gte` is ≥, and `lte` is ≤.',
    schema: { $ref: '#/components/schemas/date_filter' },
    style: 'deepObject',
    explode: true,
    required: false,
  },
}).exactOptional()

const MetadataParamsSchema = MetadataSchema.openapi({
  param: {
    in: 'query',
    name: 'metadata',
    description: 'Filter by metadata key-value pair`.',
    schema: { $ref: '#/components/schemas/metadata' },
    style: 'deepObject',
    explode: true,
    required: false,
  },
}).exactOptional()

const OffsetParamsSchema = z
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
      in: 'query',
      name: 'offset',
      required: false,
      description:
        'An integer that designates the offset at which to begin returning results. Defaults to 0.',
      schema: { type: 'integer', default: 0 },
    },
  })

const DateModifiedParamsSchema = DateFilterSchema.openapi({
  param: {
    in: 'query',
    name: 'date_modified',
    description:
      'Filter by date modified. Accepted formats are ISO-8601 date or datetime, e.g. `{ "gt": "2012-01-01", "lt": "2012-01-31T12:34:56Z" }` where `gt` is >, `lt` is <, `gte` is ≥, and `lte` is ≤.',
    schema: { $ref: '#/components/schemas/date_filter' },
    style: 'deepObject',
    explode: true,
    required: false,
  },
}).exactOptional()

const SendDateParamsSchema = SendDateSchema.openapi({
  param: {
    in: 'query',
    name: 'send_date',
    description:
      'Filter by ISO-8601 date or datetime, e.g. `{ "gt": "2012-01-01", "lt": "2012-01-31T12:34:56Z" }` where `gt` is >, `lt` is <, `gte` is ≥, and `lte` is ≤.\n',
    schema: { $ref: '#/components/schemas/send_date' },
    required: false,
  },
}).exactOptional()

const MailTypeParamsSchema = MailTypeSchema.openapi({
  param: {
    in: 'query',
    name: 'mail_type',
    description:
      'A string designating the mail postage type: * `usps_first_class` - (default) * `usps_standard` - a <a href="https://lob.com/pricing/print-mail#compare" target="_blank">cheaper option</a> which is less predictable and takes longer to deliver. `usps_standard` cannot be used with `4x6` postcards or for any postcards sent outside of the United States.\n',
    schema: { $ref: '#/components/schemas/mail_type' },
    required: false,
  },
}).exactOptional()

const SortByParamsSchema = z
  .object({
    date_created: z.enum(['asc', 'desc']).exactOptional(),
    send_date: z.enum(['asc', 'desc']).exactOptional(),
  })
  .openapi({ required: [] })
  .and(
    z.xor([
      z
        .unknown()
        .superRefine((val, ctx) => {
          if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
            if (!Object.hasOwn(val, 'date_created')) {
              ctx.addIssue({ code: 'custom' })
            }
          }
        })
        .openapi({ required: ['date_created'] }),
      z
        .unknown()
        .superRefine((val, ctx) => {
          if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
            if (!Object.hasOwn(val, 'send_date')) {
              ctx.addIssue({ code: 'custom' })
            }
          }
        })
        .openapi({ required: ['send_date'] }),
    ]),
  )
  .exactOptional()
  .openapi({
    param: {
      in: 'query',
      name: 'sort_by',
      description:
        'Sorts items by ascending or descending dates. Use either `date_created` or `send_date`, not both.\n',
      schema: {
        allOf: [
          {
            type: 'object',
            properties: {
              date_created: { type: 'string', enum: ['asc', 'desc'] },
              send_date: { type: 'string', enum: ['asc', 'desc'] },
            },
          },
          { oneOf: [{ required: ['date_created'] }, { required: ['send_date'] }] },
        ],
      },
      required: false,
    },
  })

const CampaignIdParamsSchema = ((schema) =>
  z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
  CampaignIdSchema.openapi({
    param: {
      in: 'query',
      name: 'campaign_id',
      required: false,
      description:
        'Filters resources created by the provided campaign id, prefixed with `cmp_`. In the case of snap packs, booklets, and letters with size `us_legal`, however, the campaign id is prefixed with `camp_` instead of `cmp_`.',
      schema: { $ref: '#/components/schemas/campaign_id' },
    },
  }),
).exactOptional()

const StatusParamsSchema = StatusSchema.openapi({
  param: {
    in: 'query',
    name: 'status',
    description:
      'A string describing the render status:\n* `processed` - the rendering process is currently underway.\n* `rendered` - the rendering process has completed successfully.\n* `failed` - the rendering process has failed.\n',
    schema: { $ref: '#/components/schemas/status' },
    required: false,
  },
}).exactOptional()

const IdemHeaderParamsSchema = z
  .string()
  .max(256)
  .exactOptional()
  .openapi({
    param: {
      in: 'header',
      name: 'Idempotency-Key',
      required: false,
      description:
        'A string of no longer than 256 characters that uniquely identifies this resource. For more help integrating idempotency keys, refer to our <a href="https://help.lob.com/print-and-mail/building-a-mail-strategy/managing-mail-settings#idempotent-requests-12" target="_blank">implementation guide</a>.\n',
      schema: { type: 'string', maxLength: 256, example: '026e7634-24d7-486c-a0bb-4a17fd0eebc5' },
    },
    example: '026e7634-24d7-486c-a0bb-4a17fd0eebc5',
  })

const IdemQueryParamsSchema = z
  .string()
  .max(256)
  .exactOptional()
  .openapi({
    param: {
      in: 'query',
      name: 'idempotency_key',
      required: false,
      description:
        'A string of no longer than 256 characters that uniquely identifies this resource. For more help integrating idempotency keys, refer to our <a href="https://help.lob.com/print-and-mail/building-a-mail-strategy/managing-mail-settings#idempotent-requests-12" target="_blank">implementation guide</a>.\n',
      schema: { type: 'string', maxLength: 256, example: '026e7634-24d7-486c-a0bb-4a17fd0eebc5' },
    },
    example: '026e7634-24d7-486c-a0bb-4a17fd0eebc5',
  })

const LangSpecParamsSchema = z
  .enum(['native', 'match'])
  .exactOptional()
  .openapi({
    param: {
      in: 'header',
      name: 'x-lang-output',
      required: false,
      description:
        '* `native` - Translate response to the native language of the country in the request\n* `match` - match the response to the language in the request\n\nDefault response is in English.\n',
      schema: { type: 'string', enum: ['native', 'match'] },
    },
  })

const ScheduledParamsSchema = z
  .stringbool()
  .exactOptional()
  .openapi({
    param: {
      in: 'query',
      name: 'scheduled',
      description:
        '* `true` - only return orders (past or future) where `send_date` is\ngreater than `date_created`\n* `false` - only return orders where `send_date` is equal to `date_created`\n',
      schema: { type: 'boolean' },
      required: false,
    },
  })

const LobVersionParamsSchema = z
  .string()
  .regex(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/)
  .exactOptional()
  .openapi({
    param: {
      in: 'header',
      name: 'Lob-Version',
      required: false,
      description:
        'A string representing the version of the API being used. Specifically for letters, if this header is set to `2024-01-01` and above, the `size` property is automatically included with the default value of `us_letter`. Refer to `size` for all possible values. For more information on versioning, refer to our [Versioning and Changelog](#tag/Versioning-and-Changelog) documentation.\n',
      schema: { type: 'string', example: '2024-01-01', pattern: '^[0-9]{4}-[0-9]{2}-[0-9]{2}$' },
    },
    example: '2024-01-01',
  })

const BasicAuthSecurityScheme = { type: 'http', scheme: 'basic' }

const LobCreditsBalanceMediaTypeSchema = z.unknown()

const BankAccountMediaTypeSchema = z.unknown()

const BillingGroupMediaTypeSchema = z.unknown()

const AllBillingGroupsMediaTypeSchema = z.unknown()

const BookletMediaTypeSchema = z.unknown()

const AllBuckslipsMediaTypeSchema = z.unknown()

const BuckslipMediaTypeSchema = z.unknown()

const AllBuckslipOrdersMediaTypeSchema = z.unknown()

const BuckslipOrderMediaTypeSchema = z.unknown()

const CampaignMediaTypeSchema = z.unknown()

const AllCardsMediaTypeSchema = z.unknown()

const CardMediaTypeSchema = z.unknown()

const AllCardOrdersMediaTypeSchema = z.unknown()

const CardOrderMediaTypeSchema = z.unknown()

const CheckMediaTypeSchema = z.unknown()

const CreativeMediaTypeSchema = z.unknown()

const InformedDeliveryCampaignMediaTypeSchema = z.unknown()

const LetterMediaTypeSchema = z.unknown()

const PostcardMediaTypeSchema = z.unknown()

const AllQrCodesMediaTypeSchema = z.unknown()

const ResourceProofMediaTypeSchema = z.unknown()

const SelfMailerMediaTypeSchema = z.unknown()

const SnapPackMediaTypeSchema = z.unknown()

const TemplateVersionMediaTypeSchema = z.unknown()

const TemplateMediaTypeSchema = z.unknown()

const UploadMediaTypeSchema = z.unknown()

export const getAccountsRoute = createRoute({
  method: 'get',
  path: '/accounts',
  tags: ['Accounts', 'Lob Credits'],
  summary: 'Get Lob Credits Balance',
  description: "Returns the account's current balance of Lob Credits.",
  operationId: 'get_lob_credits_balance',
  responses: { 200: { description: 'Returns a lob_credits_balance object.', content: {} } },
})

export const getAddressesRoute = createRoute({
  method: 'get',
  path: '/addresses',
  tags: ['Addresses'],
  summary: 'List',
  description:
    'Returns a list of your addresses. The addresses are returned sorted by creation date, with the most recently created addresses appearing first.',
  operationId: 'addresses_list',
  request: {
    query: z
      .looseObject({})
      .transform((val) => {
        const rest: [string, unknown][] = []
        const groups = new Map<string, Record<string, unknown>>()
        const group = (name: string) => {
          const found = groups.get(name)
          if (found !== undefined) return found
          const made: Record<string, unknown> = Object.create(null)
          groups.set(name, made)
          return made
        }
        const isGroup = (item: unknown): item is Record<string, unknown> =>
          typeof item === 'object' && item !== null && !Array.isArray(item)
        const lists = new WeakSet<object>()
        const isIndex = (part: string | undefined) => part !== undefined && /^\d*$/.test(part)
        const child = (target: Record<string, unknown>, key: string, asList: boolean) => {
          const held = target[key]
          if (isGroup(held)) return held
          const made: Record<string, unknown> = Object.create(null)
          if (asList) lists.add(made)
          target[key] = made
          return made
        }
        const set = (
          root: Record<string, unknown>,
          path: readonly string[],
          item: unknown,
        ): void => {
          const work: [Record<string, unknown>, number, unknown, boolean][] = [
            [root, 0, item, false],
          ]
          for (let job = work.pop(); job !== undefined; job = work.pop()) {
            const [target, at, value, split] = job
            const head = path[at]
            if (head === undefined) continue
            const next = path[at + 1]
            if (head === '') {
              if (!split && Array.isArray(value)) {
                for (let i = value.length - 1; i >= 0; i -= 1)
                  work.push([target, at, value[i], true])
                continue
              }
              const size = Object.keys(target).length
              if (next === undefined) {
                target[String(size)] = value
                continue
              }
              const free =
                next === ''
                  ? -1
                  : Object.values(target).findIndex((held) => isGroup(held) && !(next in held))
              work.push([
                child(target, String(free < 0 ? size : free), isIndex(next)),
                at + 1,
                value,
                false,
              ])
              continue
            }
            if (next === undefined) {
              target[head] = value
              continue
            }
            work.push([child(target, head, isIndex(next)), at + 1, value, false])
          }
        }
        const settle = (root: unknown): unknown => {
          if (!isGroup(root)) return root
          const found: [Record<string, unknown>, string, Record<string, unknown>][] = []
          const queue: Record<string, unknown>[] = [root]
          for (const node of queue) {
            for (const [key, inner] of Object.entries(node)) {
              if (isGroup(inner)) {
                found.push([node, key, inner])
                queue.push(inner)
              }
            }
          }
          const finish = (group: Record<string, unknown>): unknown =>
            lists.has(group)
              ? Object.entries(group)
                  .sort((a, b) => Number(a[0]) - Number(b[0]))
                  .map(([, inner]) => inner)
              : Object.assign(Object.create(null), group)
          for (const [parent, key, group] of found.reverse()) {
            parent[key] = finish(group)
          }
          return finish(root)
        }
        const deep: string[] = ['date_created', 'metadata']
        for (const [key, item] of Object.entries(val)) {
          const match = /^([^\[\]]+)((?:\[[^\[\]]*\])+)$/.exec(key)
          const name = match?.[1]
          const path = match?.[2]
          if (name !== undefined && path !== undefined && deep.includes(name)) {
            const parts = path.slice(1, -1).split('][')
            set(group(name), parts, item)
            continue
          }
          rest.push([key, item])
        }
        return Object.fromEntries([
          ...rest,
          ...[...groups].map(([name, held]) => [name, settle(held)] as const),
        ])
      })
      .pipe(
        z.object({
          limit: LimitParamsSchema,
          'before/after': BeforeAfterParamsSchema,
          include: IncludeParamsSchema,
          date_created: DateCreatedParamsSchema,
          metadata: MetadataParamsSchema,
        }),
      ),
  },
  responses: { 200: AllAddressesResponse, default: AddressErrorResponse },
})

export const postAddressesRoute = createRoute({
  method: 'post',
  path: '/addresses',
  tags: ['Addresses'],
  summary: 'Create',
  description: 'Creates a new address given information',
  operationId: 'address_create',
  request: {
    body: {
      content: {
        'application/json': {
          schema: AddressEditableSchema,
          examples: {
            full_us: {
              value: {
                description: 'Harry - Office',
                name: 'Harry Zhang',
                company: 'Lob',
                email: 'harry@lob.com',
                phone: '5555555555',
                address_line1: '210 King St',
                address_line2: '# 6100',
                address_city: 'San Francisco',
                address_state: 'CA',
                address_zip: '94107',
                address_country: 'US',
              },
            },
            ncoa_us_test: {
              value: {
                description: 'Harry - Office',
                name: 'Harry Zhang',
                company: 'Lob',
                email: 'harry@lob.com',
                phone: '5555555555',
                address_line1: 'NCOA',
                address_line2: '#6100',
                address_city: 'San Francisco',
                address_state: 'CA',
                address_zip: '94107',
                address_country: 'US',
              },
            },
            full_intl: {
              value: {
                description: 'Harry - Office',
                name: 'Harry Zhang',
                company: 'Lob',
                email: 'harry@lob.com',
                phone: '5555555555',
                address_line1: '370 WATER ST',
                address_line2: '',
                address_city: 'SUMMERSIDE',
                address_state: 'PRINCE EDWARD ISLAND',
                address_zip: 'C1N 1C4',
                address_country: 'CA',
              },
            },
          },
        },
        'application/x-www-form-urlencoded': {
          schema: AddressEditableSchema,
          examples: {
            full_us: {
              value: {
                description: 'Harry - Office',
                name: 'Harry Zhang',
                company: 'Lob',
                email: 'harry@lob.com',
                phone: '5555555555',
                address_line1: '210 King St',
                address_line2: '# 6100',
                address_city: 'San Francisco',
                address_state: 'CA',
                address_zip: '94107',
                address_country: 'US',
              },
            },
            ncoa_us_test: {
              value: {
                description: 'Harry - Office',
                name: 'Harry Zhang',
                company: 'Lob',
                email: 'harry@lob.com',
                phone: '5555555555',
                address_line1: 'NCOA',
                address_line2: '# 6100',
                address_city: 'San Francisco',
                address_state: 'CA',
                address_zip: '94107',
                address_country: 'US',
              },
            },
            full_intl: {
              value: {
                description: 'Harry - Office',
                name: 'Harry Zhang',
                company: 'Lob',
                email: 'harry@lob.com',
                phone: '5555555555',
                address_line1: '370 WATER ST',
                address_line2: '',
                address_city: 'SUMMERSIDE',
                address_state: 'PRINCE EDWARD ISLAND',
                address_zip: 'C1N 1C4',
                address_country: 'CA',
              },
            },
          },
          encoding: { metadata: {} },
        },
        'multipart/form-data': {
          schema: AddressEditableSchema,
          examples: {
            full_us: {
              value: {
                description: 'Harry - Office',
                name: 'Harry Zhang',
                company: 'Lob',
                email: 'harry@lob.com',
                phone: '5555555555',
                address_line1: '210 King St',
                address_line2: '# 6100',
                address_city: 'San Francisco',
                address_state: 'CA',
                address_zip: '94107',
                address_country: 'US',
              },
            },
            ncoa_us_test: {
              value: {
                description: 'Harry - Office',
                name: 'Harry Zhang',
                company: 'Lob',
                email: 'harry@lob.com',
                phone: '5555555555',
                address_line1: 'NCOA',
                address_line2: '# 6100',
                address_city: 'San Francisco',
                address_state: 'CA',
                address_zip: '94107',
                address_country: 'US',
              },
            },
            full_intl: {
              value: {
                description: 'Harry - Office',
                name: 'Harry Zhang',
                company: 'Lob',
                email: 'harry@lob.com',
                phone: '5555555555',
                address_line1: '370 WATER ST',
                address_line2: '',
                address_city: 'SUMMERSIDE',
                address_state: 'PRINCE EDWARD ISLAND',
                address_zip: 'C1N 1C4',
                address_country: 'CA',
              },
            },
          },
        },
      },
      required: true,
    },
  },
  responses: { 200: PostAddressResponse, default: AddressErrorResponse },
})

export const getAddressesAdrIdRoute = createRoute({
  method: 'get',
  path: '/addresses/{adr_id}',
  tags: ['Addresses'],
  summary: 'Retrieve',
  description:
    'Retrieves the details of an existing address. You need only supply the unique identifier that was returned upon address creation.',
  operationId: 'address_retrieve',
  request: {
    params: z.object({
      adr_id: AdrIdSchema.openapi({
        param: {
          in: 'path',
          name: 'adr_id',
          description: 'id of the address',
          required: true,
          schema: { $ref: '#/components/schemas/adr_id' },
        },
      }),
    }),
  },
  responses: { 200: AddressResponse, default: AddressErrorResponse },
})

export const deleteAddressesAdrIdRoute = createRoute({
  method: 'delete',
  path: '/addresses/{adr_id}',
  tags: ['Addresses'],
  summary: 'Delete',
  description:
    'Deletes the details of an existing address. You need only supply the unique identifier that was returned upon address creation.',
  operationId: 'address_delete',
  request: {
    params: z.object({
      adr_id: AdrIdSchema.openapi({
        param: {
          in: 'path',
          name: 'adr_id',
          description: 'id of the address',
          required: true,
          schema: { $ref: '#/components/schemas/adr_id' },
        },
      }),
    }),
  },
  responses: { 200: AddressDeletedResponse, default: AddressErrorResponse },
})

export const postBankAccountsBankIdVerifyRoute = createRoute({
  method: 'post',
  path: '/bank_accounts/{bank_id}/verify',
  tags: ['Bank Accounts'],
  summary: 'Verify',
  description:
    "Verify a bank account in order to create a check.\n\nCheck the `microdeposit_type` field returned by `GET /v1/bank_accounts/:id` to determine which parameter to submit:\n- `amounts` — provide the two microdeposit amounts (in cents) that appeared\n  in the bank account statement.\n\n- `descriptor_code` — provide the 6-character code (beginning with `SM`)\n  from the bank statement descriptor of the single $0.01 microdeposit.\n\n\nSubmitting the wrong parameter type for the account's `microdeposit_type` will return an error.",
  operationId: 'bank_account_verify',
  request: {
    params: z.object({
      bank_id: BankIdSchema.openapi({
        param: {
          in: 'path',
          name: 'bank_id',
          description: 'id of the bank account to be verified',
          required: true,
          schema: { $ref: '#/components/schemas/bank_id' },
        },
      }),
    }),
    body: {
      content: {
        'application/json': {
          schema: BankAccountVerifySchema,
          examples: {
            amounts: { summary: 'Verify with two deposit amounts', value: { amounts: [25, 63] } },
            descriptor_code: {
              summary: 'Verify with a statement descriptor code',
              value: { descriptor_code: 'SMABCD' },
            },
          },
        },
        'application/x-www-form-urlencoded': {
          schema: z.xor([
            z
              .strictObject({
                amounts: z
                  .preprocess(
                    (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                    z
                      .array(
                        z.preprocess(
                          (val) =>
                            typeof val === 'string' &&
                            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                              ? Number(val)
                              : val,
                          CentsSchema,
                        ),
                      )
                      .length(2),
                  )
                  .openapi({
                    description:
                      'In live mode, an array containing the two microdeposit amounts (in cents) placed in the bank account. In test mode, no microdeposits will be placed, so any two integers between `1` and `100` will work.',
                  }),
              })
              .openapi({ title: 'BankAccountVerifyAmounts', required: ['amounts'] }),
            z
              .strictObject({
                descriptor_code: z
                  .string()
                  .regex(/^[Ss][Mm][A-Za-z0-9]{4}$/)
                  .length(6)
                  .openapi({
                    description:
                      'The 6-character code (beginning with `SM`) found in the statement descriptor of the $0.01 microdeposit placed in the bank account.',
                  }),
              })
              .openapi({ title: 'BankAccountVerifyDescriptorCode', required: ['descriptor_code'] }),
          ]),
          examples: {
            amounts: { summary: 'Verify with two deposit amounts', value: { amounts: [25, 63] } },
            descriptor_code: {
              summary: 'Verify with a statement descriptor code',
              value: { descriptor_code: 'SMABCD' },
            },
          },
        },
        'multipart/form-data': {
          schema: z.xor([
            z
              .strictObject({
                amounts: z
                  .preprocess(
                    (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                    z
                      .array(
                        z.preprocess(
                          (val) =>
                            typeof val === 'string' &&
                            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                              ? Number(val)
                              : val,
                          CentsSchema,
                        ),
                      )
                      .length(2),
                  )
                  .openapi({
                    description:
                      'In live mode, an array containing the two microdeposit amounts (in cents) placed in the bank account. In test mode, no microdeposits will be placed, so any two integers between `1` and `100` will work.',
                  }),
              })
              .openapi({ title: 'BankAccountVerifyAmounts', required: ['amounts'] }),
            z
              .strictObject({
                descriptor_code: z
                  .string()
                  .regex(/^[Ss][Mm][A-Za-z0-9]{4}$/)
                  .length(6)
                  .openapi({
                    description:
                      'The 6-character code (beginning with `SM`) found in the statement descriptor of the $0.01 microdeposit placed in the bank account.',
                  }),
              })
              .openapi({ title: 'BankAccountVerifyDescriptorCode', required: ['descriptor_code'] }),
          ]),
          examples: {
            amounts: { summary: 'Verify with two deposit amounts', value: { amounts: [25, 63] } },
            descriptor_code: {
              summary: 'Verify with a statement descriptor code',
              value: { descriptor_code: 'SMABCD' },
            },
          },
        },
      },
      required: true,
    },
  },
  responses: { 200: PostBankAccountResponse, default: BankAccountErrorResponse },
})

export const getBankAccountsBankIdRoute = createRoute({
  method: 'get',
  path: '/bank_accounts/{bank_id}',
  tags: ['Bank Accounts'],
  summary: 'Retrieve',
  description:
    'Retrieves the details of an existing bank account. You need only supply the unique bank account identifier that was returned upon bank account creation.',
  operationId: 'bank_account_retrieve',
  request: {
    params: z.object({
      bank_id: BankIdSchema.openapi({
        param: {
          in: 'path',
          name: 'bank_id',
          description: 'id of the bank account',
          required: true,
          schema: { $ref: '#/components/schemas/bank_id' },
        },
      }),
    }),
  },
  responses: {
    200: { description: 'Returns a bank account object', content: {} },
    default: BankAccountErrorResponse,
  },
})

export const deleteBankAccountsBankIdRoute = createRoute({
  method: 'delete',
  path: '/bank_accounts/{bank_id}',
  tags: ['Bank Accounts'],
  summary: 'Delete',
  description: 'Permanently deletes a bank account. It cannot be undone.',
  operationId: 'bank_account_delete',
  request: {
    params: z.object({
      bank_id: BankIdSchema.openapi({
        param: {
          in: 'path',
          name: 'bank_id',
          description: 'id of the bank account',
          required: true,
          schema: { $ref: '#/components/schemas/bank_id' },
        },
      }),
    }),
  },
  responses: { 200: BankAccountDeletedResponse, default: BankAccountErrorResponse },
})

export const getBankAccountsRoute = createRoute({
  method: 'get',
  path: '/bank_accounts',
  tags: ['Bank Accounts'],
  summary: 'List',
  description:
    'Returns a list of your bank accounts. The bank accounts are returned sorted by creation date, with the most recently created bank accounts appearing first.',
  operationId: 'bank_accounts_list',
  request: {
    query: z
      .looseObject({})
      .transform((val) => {
        const rest: [string, unknown][] = []
        const groups = new Map<string, Record<string, unknown>>()
        const group = (name: string) => {
          const found = groups.get(name)
          if (found !== undefined) return found
          const made: Record<string, unknown> = Object.create(null)
          groups.set(name, made)
          return made
        }
        const isGroup = (item: unknown): item is Record<string, unknown> =>
          typeof item === 'object' && item !== null && !Array.isArray(item)
        const lists = new WeakSet<object>()
        const isIndex = (part: string | undefined) => part !== undefined && /^\d*$/.test(part)
        const child = (target: Record<string, unknown>, key: string, asList: boolean) => {
          const held = target[key]
          if (isGroup(held)) return held
          const made: Record<string, unknown> = Object.create(null)
          if (asList) lists.add(made)
          target[key] = made
          return made
        }
        const set = (
          root: Record<string, unknown>,
          path: readonly string[],
          item: unknown,
        ): void => {
          const work: [Record<string, unknown>, number, unknown, boolean][] = [
            [root, 0, item, false],
          ]
          for (let job = work.pop(); job !== undefined; job = work.pop()) {
            const [target, at, value, split] = job
            const head = path[at]
            if (head === undefined) continue
            const next = path[at + 1]
            if (head === '') {
              if (!split && Array.isArray(value)) {
                for (let i = value.length - 1; i >= 0; i -= 1)
                  work.push([target, at, value[i], true])
                continue
              }
              const size = Object.keys(target).length
              if (next === undefined) {
                target[String(size)] = value
                continue
              }
              const free =
                next === ''
                  ? -1
                  : Object.values(target).findIndex((held) => isGroup(held) && !(next in held))
              work.push([
                child(target, String(free < 0 ? size : free), isIndex(next)),
                at + 1,
                value,
                false,
              ])
              continue
            }
            if (next === undefined) {
              target[head] = value
              continue
            }
            work.push([child(target, head, isIndex(next)), at + 1, value, false])
          }
        }
        const settle = (root: unknown): unknown => {
          if (!isGroup(root)) return root
          const found: [Record<string, unknown>, string, Record<string, unknown>][] = []
          const queue: Record<string, unknown>[] = [root]
          for (const node of queue) {
            for (const [key, inner] of Object.entries(node)) {
              if (isGroup(inner)) {
                found.push([node, key, inner])
                queue.push(inner)
              }
            }
          }
          const finish = (group: Record<string, unknown>): unknown =>
            lists.has(group)
              ? Object.entries(group)
                  .sort((a, b) => Number(a[0]) - Number(b[0]))
                  .map(([, inner]) => inner)
              : Object.assign(Object.create(null), group)
          for (const [parent, key, group] of found.reverse()) {
            parent[key] = finish(group)
          }
          return finish(root)
        }
        const deep: string[] = ['date_created', 'metadata']
        for (const [key, item] of Object.entries(val)) {
          const match = /^([^\[\]]+)((?:\[[^\[\]]*\])+)$/.exec(key)
          const name = match?.[1]
          const path = match?.[2]
          if (name !== undefined && path !== undefined && deep.includes(name)) {
            const parts = path.slice(1, -1).split('][')
            set(group(name), parts, item)
            continue
          }
          rest.push([key, item])
        }
        return Object.fromEntries([
          ...rest,
          ...[...groups].map(([name, held]) => [name, settle(held)] as const),
        ])
      })
      .pipe(
        z.object({
          limit: LimitParamsSchema,
          'before/after': BeforeAfterParamsSchema,
          include: IncludeParamsSchema,
          date_created: DateCreatedParamsSchema,
          metadata: MetadataParamsSchema,
        }),
      ),
  },
  responses: { 200: AllBankAccountsResponse, default: BankAccountErrorResponse },
})

export const postBankAccountsRoute = createRoute({
  method: 'post',
  path: '/bank_accounts',
  tags: ['Bank Accounts'],
  summary: 'Create',
  description:
    'Creates a new bank account with the provided properties. Bank accounts created in live mode will need to be verified via micro deposits before being able to send live checks. The deposits will appear in the bank account in 2-3 business days and have the description "VERIFICATION".',
  operationId: 'bank_account_create',
  request: {
    body: {
      content: {
        'application/json': {
          schema: BankAccountBaseSchema,
          example: {
            description: 'Test Bank Account',
            routing_number: '322271627',
            account_number: '123456789',
            signatory: 'Jane Doe',
            account_type: 'individual',
            metadata: { spiffy: 'true' },
          },
        },
        'application/x-www-form-urlencoded': {
          schema: BankAccountBaseSchema,
          example: {
            description: 'Test Bank Account',
            routing_number: '322271627',
            account_number: '123456789',
            signatory: 'Jane Doe',
            account_type: 'individual',
            metadata: { spiffy: 'true' },
          },
          encoding: { metadata: {} },
        },
        'multipart/form-data': {
          schema: BankAccountBaseSchema,
          example: {
            description: 'Test Bank Account',
            routing_number: '322271627',
            account_number: '123456789',
            signatory: 'Jane Doe',
            account_type: 'individual',
            metadata: { spiffy: 'true' },
          },
        },
      },
      required: true,
    },
  },
  responses: { 200: PostBankAccountResponse, default: BankAccountErrorResponse },
})

export const getBillingGroupsBgIdRoute = createRoute({
  method: 'get',
  path: '/billing_groups/{bg_id}',
  tags: ['Billing Groups'],
  summary: 'Retrieve',
  description:
    'Retrieves the details of an existing billing_group. You need only supply the unique billing_group identifier that was returned upon billing_group creation.',
  operationId: 'billing_group_retrieve',
  request: {
    params: z.object({
      bg_id: BgIdSchema.openapi({
        param: {
          in: 'path',
          name: 'bg_id',
          description: 'id of the billing_group',
          required: true,
          schema: { $ref: '#/components/schemas/bg_id' },
        },
      }),
    }),
  },
  responses: {
    200: { description: 'Returns a billing_group object.', content: {} },
    default: BillingGroupListErrorResponse,
  },
})

export const postBillingGroupsBgIdRoute = createRoute({
  method: 'post',
  path: '/billing_groups/{bg_id}',
  tags: ['Billing Groups'],
  summary: 'Update',
  description: 'Updates all editable attributes of the billing_group with the given id.',
  operationId: 'billing_group_update',
  request: {
    params: z.object({
      bg_id: BgIdSchema.openapi({
        param: {
          in: 'path',
          name: 'bg_id',
          description: 'id of the billing_group',
          required: true,
          schema: { $ref: '#/components/schemas/bg_id' },
        },
      }),
    }),
    body: {
      content: {
        'application/json': {
          schema: BillingGroupBaseSchema,
          example: {
            name: 'Marketing Dept',
            description: 'Usage group used for the Marketing Dept resource sends',
          },
        },
        'application/x-www-form-urlencoded': {
          schema: BillingGroupBaseSchema,
          example: {
            name: 'Marketing Dept',
            description: 'Usage group used for the Marketing Dept resource sends',
          },
        },
        'multipart/form-data': {
          schema: BillingGroupBaseSchema,
          example: {
            name: 'Marketing Dept',
            description: 'Usage group used for the Marketing Dept resource sends',
          },
        },
      },
      required: true,
    },
  },
  responses: { 200: PostBillingGroupResponse, default: BillingGroupErrorResponse },
})

export const getBillingGroupsRoute = createRoute({
  method: 'get',
  path: '/billing_groups',
  tags: ['Billing Groups'],
  summary: 'List',
  description:
    'Returns a list of your billing_groups. The billing_groups are returned sorted by creation date, with the most recently created billing_groups appearing first.',
  operationId: 'billing_groups_list',
  request: {
    query: z
      .looseObject({})
      .transform((val) => {
        const rest: [string, unknown][] = []
        const groups = new Map<string, Record<string, unknown>>()
        const group = (name: string) => {
          const found = groups.get(name)
          if (found !== undefined) return found
          const made: Record<string, unknown> = Object.create(null)
          groups.set(name, made)
          return made
        }
        const isGroup = (item: unknown): item is Record<string, unknown> =>
          typeof item === 'object' && item !== null && !Array.isArray(item)
        const lists = new WeakSet<object>()
        const isIndex = (part: string | undefined) => part !== undefined && /^\d*$/.test(part)
        const child = (target: Record<string, unknown>, key: string, asList: boolean) => {
          const held = target[key]
          if (isGroup(held)) return held
          const made: Record<string, unknown> = Object.create(null)
          if (asList) lists.add(made)
          target[key] = made
          return made
        }
        const set = (
          root: Record<string, unknown>,
          path: readonly string[],
          item: unknown,
        ): void => {
          const work: [Record<string, unknown>, number, unknown, boolean][] = [
            [root, 0, item, false],
          ]
          for (let job = work.pop(); job !== undefined; job = work.pop()) {
            const [target, at, value, split] = job
            const head = path[at]
            if (head === undefined) continue
            const next = path[at + 1]
            if (head === '') {
              if (!split && Array.isArray(value)) {
                for (let i = value.length - 1; i >= 0; i -= 1)
                  work.push([target, at, value[i], true])
                continue
              }
              const size = Object.keys(target).length
              if (next === undefined) {
                target[String(size)] = value
                continue
              }
              const free =
                next === ''
                  ? -1
                  : Object.values(target).findIndex((held) => isGroup(held) && !(next in held))
              work.push([
                child(target, String(free < 0 ? size : free), isIndex(next)),
                at + 1,
                value,
                false,
              ])
              continue
            }
            if (next === undefined) {
              target[head] = value
              continue
            }
            work.push([child(target, head, isIndex(next)), at + 1, value, false])
          }
        }
        const settle = (root: unknown): unknown => {
          if (!isGroup(root)) return root
          const found: [Record<string, unknown>, string, Record<string, unknown>][] = []
          const queue: Record<string, unknown>[] = [root]
          for (const node of queue) {
            for (const [key, inner] of Object.entries(node)) {
              if (isGroup(inner)) {
                found.push([node, key, inner])
                queue.push(inner)
              }
            }
          }
          const finish = (group: Record<string, unknown>): unknown =>
            lists.has(group)
              ? Object.entries(group)
                  .sort((a, b) => Number(a[0]) - Number(b[0]))
                  .map(([, inner]) => inner)
              : Object.assign(Object.create(null), group)
          for (const [parent, key, group] of found.reverse()) {
            parent[key] = finish(group)
          }
          return finish(root)
        }
        const deep: string[] = ['date_created', 'date_modified']
        for (const [key, item] of Object.entries(val)) {
          const match = /^([^\[\]]+)((?:\[[^\[\]]*\])+)$/.exec(key)
          const name = match?.[1]
          const path = match?.[2]
          if (name !== undefined && path !== undefined && deep.includes(name)) {
            const parts = path.slice(1, -1).split('][')
            set(group(name), parts, item)
            continue
          }
          rest.push([key, item])
        }
        return Object.fromEntries([
          ...rest,
          ...[...groups].map(([name, held]) => [name, settle(held)] as const),
        ])
      })
      .pipe(
        z.object({
          limit: LimitParamsSchema,
          offset: OffsetParamsSchema,
          include: IncludeParamsSchema,
          date_created: DateCreatedParamsSchema,
          date_modified: DateModifiedParamsSchema,
          sort_by: z
            .object({
              date_created: z.enum(['asc', 'desc']).exactOptional(),
              date_modified: z.enum(['asc', 'desc']).exactOptional(),
            })
            .openapi({ required: [] })
            .and(
              z.xor([
                z
                  .unknown()
                  .superRefine((val, ctx) => {
                    if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
                      if (!Object.hasOwn(val, 'date_created')) {
                        ctx.addIssue({ code: 'custom' })
                      }
                    }
                  })
                  .openapi({ required: ['date_created'] }),
                z
                  .unknown()
                  .superRefine((val, ctx) => {
                    if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
                      if (!Object.hasOwn(val, 'date_modified')) {
                        ctx.addIssue({ code: 'custom' })
                      }
                    }
                  })
                  .openapi({ required: ['date_modified'] }),
              ]),
            )
            .exactOptional()
            .openapi({
              param: {
                in: 'query',
                name: 'sort_by',
                description:
                  'Sorts items by ascending or descending dates. Use either `date_created` or `date_modified`, not both.\n',
                schema: {
                  allOf: [
                    {
                      type: 'object',
                      properties: {
                        date_created: { type: 'string', enum: ['asc', 'desc'] },
                        date_modified: { type: 'string', enum: ['asc', 'desc'] },
                      },
                    },
                    { oneOf: [{ required: ['date_created'] }, { required: ['date_modified'] }] },
                  ],
                },
                required: false,
              },
            }),
        }),
      ),
  },
  responses: {
    200: { description: 'Returns a list of billing_groups.', content: {} },
    default: BillingGroupListErrorResponse,
  },
})

export const postBillingGroupsRoute = createRoute({
  method: 'post',
  path: '/billing_groups',
  tags: ['Billing Groups'],
  summary: 'Create',
  description: 'Creates a new billing_group with the provided properties.',
  operationId: 'billing_group_create',
  request: {
    body: {
      content: {
        'application/json': {
          schema: BillingGroupEditableSchema,
          example: {
            name: 'Marketing Dept',
            description: 'Usage group used for the Marketing Dept resource sends',
          },
        },
        'application/x-www-form-urlencoded': {
          schema: BillingGroupEditableSchema,
          example: {
            name: 'Marketing Dept',
            description: 'Usage group used for the Marketing Dept resource sends',
          },
        },
        'multipart/form-data': {
          schema: BillingGroupEditableSchema,
          example: {
            name: 'Marketing Dept',
            description: 'Usage group used for the Marketing Dept resource sends',
          },
        },
      },
      required: true,
    },
  },
  responses: { 200: PostBillingGroupResponse, default: BillingGroupErrorResponse },
})

export const getBookletsBookletIdRoute = createRoute({
  method: 'get',
  path: '/booklets/{booklet_id}',
  tags: ['Booklets'],
  summary: 'Retrieve',
  description:
    'Retrieves the details of an existing booklet. You need to only supply the unique booklet identifier that was returned upon booklet creation.',
  operationId: 'booklet_retrieve',
  request: {
    params: z.object({
      booklet_id: BookletIdSchema.openapi({
        param: {
          in: 'path',
          name: 'booklet_id',
          description: 'id of the booklet',
          required: true,
          schema: { $ref: '#/components/schemas/booklet_id' },
        },
      }),
    }),
  },
  responses: {
    200: { description: 'Returns a booklet object', content: {} },
    default: MailpieceErrorResponse,
  },
})

export const deleteBookletsBookletIdRoute = createRoute({
  method: 'delete',
  path: '/booklets/{booklet_id}',
  tags: ['Booklets'],
  summary: 'Delete',
  description:
    "Completely removes a booklet from production. This can only be done if the booklet's `send_date` has not yet passed. If the booklet is successfully canceled, you will not be charged for it.",
  operationId: 'booklet_delete',
  request: {
    params: z.object({
      booklet_id: BookletIdSchema.openapi({
        param: {
          in: 'path',
          name: 'booklet_id',
          description: 'id of the booklet',
          required: true,
          schema: { $ref: '#/components/schemas/booklet_id' },
        },
      }),
    }),
  },
  responses: { 200: BookletDeletedResponse, default: MailpieceErrorResponse },
})

export const getBookletsRoute = createRoute({
  method: 'get',
  path: '/booklets',
  tags: ['Booklets'],
  summary: 'List',
  description:
    'Returns a list of your booklets. The booklets are returned sorted by creation date, with the most recently created booklets appearing first.',
  operationId: 'booklets_list',
  request: {
    query: z
      .looseObject({})
      .transform((val) => {
        const rest: [string, unknown][] = []
        const groups = new Map<string, Record<string, unknown>>()
        const group = (name: string) => {
          const found = groups.get(name)
          if (found !== undefined) return found
          const made: Record<string, unknown> = Object.create(null)
          groups.set(name, made)
          return made
        }
        const isGroup = (item: unknown): item is Record<string, unknown> =>
          typeof item === 'object' && item !== null && !Array.isArray(item)
        const lists = new WeakSet<object>()
        const isIndex = (part: string | undefined) => part !== undefined && /^\d*$/.test(part)
        const child = (target: Record<string, unknown>, key: string, asList: boolean) => {
          const held = target[key]
          if (isGroup(held)) return held
          const made: Record<string, unknown> = Object.create(null)
          if (asList) lists.add(made)
          target[key] = made
          return made
        }
        const set = (
          root: Record<string, unknown>,
          path: readonly string[],
          item: unknown,
        ): void => {
          const work: [Record<string, unknown>, number, unknown, boolean][] = [
            [root, 0, item, false],
          ]
          for (let job = work.pop(); job !== undefined; job = work.pop()) {
            const [target, at, value, split] = job
            const head = path[at]
            if (head === undefined) continue
            const next = path[at + 1]
            if (head === '') {
              if (!split && Array.isArray(value)) {
                for (let i = value.length - 1; i >= 0; i -= 1)
                  work.push([target, at, value[i], true])
                continue
              }
              const size = Object.keys(target).length
              if (next === undefined) {
                target[String(size)] = value
                continue
              }
              const free =
                next === ''
                  ? -1
                  : Object.values(target).findIndex((held) => isGroup(held) && !(next in held))
              work.push([
                child(target, String(free < 0 ? size : free), isIndex(next)),
                at + 1,
                value,
                false,
              ])
              continue
            }
            if (next === undefined) {
              target[head] = value
              continue
            }
            work.push([child(target, head, isIndex(next)), at + 1, value, false])
          }
        }
        const settle = (root: unknown): unknown => {
          if (!isGroup(root)) return root
          const found: [Record<string, unknown>, string, Record<string, unknown>][] = []
          const queue: Record<string, unknown>[] = [root]
          for (const node of queue) {
            for (const [key, inner] of Object.entries(node)) {
              if (isGroup(inner)) {
                found.push([node, key, inner])
                queue.push(inner)
              }
            }
          }
          const finish = (group: Record<string, unknown>): unknown =>
            lists.has(group)
              ? Object.entries(group)
                  .sort((a, b) => Number(a[0]) - Number(b[0]))
                  .map(([, inner]) => inner)
              : Object.assign(Object.create(null), group)
          for (const [parent, key, group] of found.reverse()) {
            parent[key] = finish(group)
          }
          return finish(root)
        }
        const deep: string[] = ['date_created', 'metadata']
        for (const [key, item] of Object.entries(val)) {
          const match = /^([^\[\]]+)((?:\[[^\[\]]*\])+)$/.exec(key)
          const name = match?.[1]
          const path = match?.[2]
          if (name !== undefined && path !== undefined && deep.includes(name)) {
            const parts = path.slice(1, -1).split('][')
            set(group(name), parts, item)
            continue
          }
          rest.push([key, item])
        }
        return Object.fromEntries([
          ...rest,
          ...[...groups].map(([name, held]) => [name, settle(held)] as const),
        ])
      })
      .pipe(
        z.object({
          limit: LimitParamsSchema,
          'before/after': BeforeAfterParamsSchema,
          include: IncludeParamsSchema,
          date_created: DateCreatedParamsSchema,
          metadata: MetadataParamsSchema,
          send_date: SendDateParamsSchema,
          mail_type: MailTypeParamsSchema,
          sort_by: SortByParamsSchema,
          campaign_id: CampaignIdParamsSchema,
          status: StatusParamsSchema,
        }),
      ),
  },
  responses: { 200: AllBookletsResponse, default: MailpieceErrorResponse },
})

export const postBookletsRoute = createRoute({
  method: 'post',
  path: '/booklets',
  tags: ['Booklets'],
  summary: 'Create',
  description: 'Creates a new booklet.',
  operationId: 'booklet_create',
  request: {
    headers: z.object({ 'Idempotency-Key': IdemHeaderParamsSchema }),
    query: z.object({ idempotency_key: IdemQueryParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: BookletEditableSchema,
          example: {
            description: 'demo',
            to: {
              description: 'Harry - Office',
              name: 'Harry Zhang',
              company: 'Lob',
              email: 'harry@lob.com',
              phone: '5555555555',
              address_line1: '210 King St',
              address_line2: '# 6100',
              address_city: 'San Francisco',
              address_state: 'CA',
              address_zip: '94107',
              address_country: 'US',
            },
            from: {
              name: 'Harry',
              address_line1: '210 King St',
              address_line2: '# 6100',
              address_city: 'San Francisco',
              address_state: 'CA',
              address_zip: '94107',
            },
            file: "<html style='padding-top: 3in; margin: .5in;'>HTML Booklet for {{name}}</html>",
            mail_type: 'usps_first_class',
            merge_variables: { name: 'Harry' },
            metadata: { spiffy: 'true' },
            send_date: '2017-11-01T00:00:00.000Z',
            use_type: 'marketing',
            qr_code: {
              position: 'relative',
              redirect_url: 'https://www.lob.com',
              width: '2',
              top: '2',
              right: '2',
              pages: '1-2,4-5',
            },
            fsc: true,
            size: '8.375x5.375',
            print_speed: 'core',
          },
        },
        'application/x-www-form-urlencoded': {
          schema: InputToSchema.and(InputFromSchema)
            .and(EditableSchema)
            .and(
              z
                .object({
                  file: BookletFileSchema,
                  mail_type: MailTypeSchema.exactOptional(),
                  billing_group_id: BillingGroupIdSchema.exactOptional(),
                  qr_code: z
                    .object({
                      position: z
                        .literal('relative')
                        .openapi({
                          description:
                            "Sets how a QR code is being positioned in the document. Together with this, you should provide one of 'top' or 'bottom', and one of 'left' or 'right'.",
                        }),
                      top: z
                        .preprocess(
                          (val) =>
                            typeof val === 'string' &&
                            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                              ? Number(val)
                              : val,
                          z.number(),
                        )
                        .exactOptional()
                        .openapi({
                          description:
                            'Vertical distance (in inches) to place QR code from the top. Only allowed if "bottom" isn\'t provided.',
                        }),
                      right: z
                        .preprocess(
                          (val) =>
                            typeof val === 'string' &&
                            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                              ? Number(val)
                              : val,
                          z.number(),
                        )
                        .exactOptional()
                        .openapi({
                          description:
                            'Horizontal distance (in inches) to place QR code from the right. Only allowed if "left" isn\'t provided.',
                        }),
                      left: z
                        .preprocess(
                          (val) =>
                            typeof val === 'string' &&
                            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                              ? Number(val)
                              : val,
                          z.number(),
                        )
                        .exactOptional()
                        .openapi({
                          description:
                            'Horizontal distance (in inches) to place QR code from the left. Only allowed if "right" isn\'t provided.',
                        }),
                      bottom: z
                        .preprocess(
                          (val) =>
                            typeof val === 'string' &&
                            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                              ? Number(val)
                              : val,
                          z.number(),
                        )
                        .exactOptional()
                        .openapi({
                          description:
                            'Vertical distance (in inches) to place QR code from the bottom. Only allowed if "top" isn\'t provided.',
                        }),
                      redirect_url: z
                        .string()
                        .openapi({
                          description:
                            'The url to redirect the user when a QR code is scanned. The URL can be a literal URL, a template URL containing merge variables, or consist entirely of merge variables. For example, `https://www.example.com` or `https://www.example.com?q={{name}}` or `{{name}}`, respectively. When a merge variable exists in the URL, it is replaced with data from merge_variables. If the variable does not exist, then nothing with be replaced and the destination URL will be the same as the input URL. More details on merge variables can be found in <a href="https://help.lob.com/print-and-mail/designing-mail-creatives/adding-qr-codes#destination-url-and-redirects" target="_blank">our help center</a>.',
                        }),
                      width: z
                        .preprocess(
                          (val) =>
                            typeof val === 'string' &&
                            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                              ? Number(val)
                              : val,
                          z.number(),
                        )
                        .openapi({
                          description:
                            'The size (in inches) of the QR code with a minimum of 1 inch. All QR codes are generated as a square.',
                        }),
                      pages: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            'Specify the pages where the QR code should be stamped in a comma separated format. Your QR code can be printed in the same position on multiple pages. For postcards, the values should either be "front", "back" (for either front or back) or "front,back" (for the QR code to be printed on both sides). For self-mailers and snap packs, the values should either be "inside", "outside" (for either inside or outside) or "inside,outside" (for the QR code to be printed on both sides). For letters and booklets, the values can be specific page numbers ("1", "3"), page number ranges such as "1-3", or a comma separated combination of both ("1,3,5-7").',
                        }),
                      logo: z
                        .object({
                          url: z
                            .string()
                            .regex(/^https:\/\/[-a-zA-Z0-9@:%._+~#=\/]{1,256}.(png|jpe?g)$/)
                            .exactOptional()
                            .openapi({
                              description:
                                'The public URL of the logo image to be retrieved and placed over the center of the QR code.',
                            }),
                        })
                        .exactOptional()
                        .openapi({
                          description:
                            'Allows specifying a logo to be placed over the center of the QR code.  Logos must be in PNG or JPEG format and have a maximum file size of 1 MB.',
                          required: [],
                        }),
                      style: z
                        .object({
                          background_color: z
                            .string()
                            .regex(/^#[A-Fa-f0-9]{6}$/)
                            .exactOptional()
                            .openapi({
                              description:
                                'The background color of the QR code in hexadecimal format. For example, `#000000` is black and `#FFFFFF` is white.',
                            }),
                          foreground_color: z
                            .string()
                            .regex(/^#[A-Fa-f0-9]{6}$/)
                            .exactOptional()
                            .openapi({
                              description:
                                'The foreground color of the QR code in hexadecimal format. For example, `#000000` is black and `#FFFFFF` is white.',
                            }),
                        })
                        .exactOptional()
                        .openapi({
                          description: 'Customizes the appearance of the QR code.',
                          required: [],
                        }),
                    })
                    .exactOptional()
                    .openapi({
                      description:
                        'Customize and place a QR code on the creative at the required position.',
                      required: ['position', 'redirect_url', 'width'],
                    }),
                  use_type: ((schema) =>
                    z.union([
                      schema,
                      z.preprocess((val) => (val === 'null' ? null : val), schema),
                    ]))(BookletUseTypeSchema),
                  fsc: z
                    .preprocess(
                      ((read) => (val: unknown) => {
                        const result = read.safeParse(val)
                        return result.success ? result.data : val
                      })(z.stringbool()),
                      z.boolean(),
                    )
                    .default(false)
                    .exactOptional()
                    .openapi({
                      description:
                        'This is in beta. Contact support@lob.com or your account contact to learn more. Not available for `A4` and `us_legal` letter size.',
                    }),
                  size: BookletSizeSchema,
                  pages: z.preprocess(
                    (val) =>
                      typeof val === 'string' &&
                      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                        ? Number(val)
                        : val,
                    BookletPagesSchema,
                  ),
                  source_material: BookletSourceMaterialSchema.exactOptional(),
                  print_speed: ((schema) =>
                    z.union([
                      schema,
                      z.preprocess((val) => (val === 'null' ? null : val), schema),
                    ]))(PrintSpeedSchema).exactOptional(),
                })
                .openapi({ required: ['to', 'from', 'file', 'use_type', 'pages', 'size'] }),
            ),
          example: {
            description: 'demo',
            to: {
              description: 'Harry - Office',
              name: 'Harry Zhang',
              company: 'Lob',
              email: 'harry@lob.com',
              phone: '5555555555',
              address_line1: '210 King St',
              address_line2: '# 6100',
              address_city: 'San Francisco',
              address_state: 'CA',
              address_zip: '94107',
              address_country: 'US',
            },
            from: {
              name: 'Harry',
              address_line1: '210 King St',
              address_line2: '# 6100',
              address_city: 'San Francisco',
              address_state: 'CA',
              address_zip: '94107',
            },
            file: "<html style='padding-top: 3in; margin: .5in;'>HTML Booklet for {{name}}</html>",
            mail_type: 'usps_first_class',
            merge_variables: { name: 'Harry' },
            metadata: { spiffy: 'true' },
            send_date: '2017-11-01T00:00:00.000Z',
            use_type: 'marketing',
            qr_code: {
              position: 'relative',
              redirect_url: 'https://www.lob.com',
              width: '2',
              top: '2',
              right: '2',
              pages: '1-2,4-5',
            },
            fsc: true,
            size: '8.375x5.375',
            print_speed: 'core',
          },
        },
        'multipart/form-data': {
          schema: InputToSchema.and(InputFromSchema)
            .and(EditableSchema)
            .and(
              z
                .object({
                  file: BookletFileSchema,
                  mail_type: MailTypeSchema.exactOptional(),
                  billing_group_id: BillingGroupIdSchema.exactOptional(),
                  qr_code: z
                    .object({
                      position: z
                        .literal('relative')
                        .openapi({
                          description:
                            "Sets how a QR code is being positioned in the document. Together with this, you should provide one of 'top' or 'bottom', and one of 'left' or 'right'.",
                        }),
                      top: z
                        .preprocess(
                          (val) =>
                            typeof val === 'string' &&
                            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                              ? Number(val)
                              : val,
                          z.number(),
                        )
                        .exactOptional()
                        .openapi({
                          description:
                            'Vertical distance (in inches) to place QR code from the top. Only allowed if "bottom" isn\'t provided.',
                        }),
                      right: z
                        .preprocess(
                          (val) =>
                            typeof val === 'string' &&
                            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                              ? Number(val)
                              : val,
                          z.number(),
                        )
                        .exactOptional()
                        .openapi({
                          description:
                            'Horizontal distance (in inches) to place QR code from the right. Only allowed if "left" isn\'t provided.',
                        }),
                      left: z
                        .preprocess(
                          (val) =>
                            typeof val === 'string' &&
                            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                              ? Number(val)
                              : val,
                          z.number(),
                        )
                        .exactOptional()
                        .openapi({
                          description:
                            'Horizontal distance (in inches) to place QR code from the left. Only allowed if "right" isn\'t provided.',
                        }),
                      bottom: z
                        .preprocess(
                          (val) =>
                            typeof val === 'string' &&
                            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                              ? Number(val)
                              : val,
                          z.number(),
                        )
                        .exactOptional()
                        .openapi({
                          description:
                            'Vertical distance (in inches) to place QR code from the bottom. Only allowed if "top" isn\'t provided.',
                        }),
                      redirect_url: z
                        .string()
                        .openapi({
                          description:
                            'The url to redirect the user when a QR code is scanned. The URL can be a literal URL, a template URL containing merge variables, or consist entirely of merge variables. For example, `https://www.example.com` or `https://www.example.com?q={{name}}` or `{{name}}`, respectively. When a merge variable exists in the URL, it is replaced with data from merge_variables. If the variable does not exist, then nothing with be replaced and the destination URL will be the same as the input URL. More details on merge variables can be found in <a href="https://help.lob.com/print-and-mail/designing-mail-creatives/adding-qr-codes#destination-url-and-redirects" target="_blank">our help center</a>.',
                        }),
                      width: z
                        .preprocess(
                          (val) =>
                            typeof val === 'string' &&
                            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                              ? Number(val)
                              : val,
                          z.number(),
                        )
                        .openapi({
                          description:
                            'The size (in inches) of the QR code with a minimum of 1 inch. All QR codes are generated as a square.',
                        }),
                      pages: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            'Specify the pages where the QR code should be stamped in a comma separated format. Your QR code can be printed in the same position on multiple pages. For postcards, the values should either be "front", "back" (for either front or back) or "front,back" (for the QR code to be printed on both sides). For self-mailers and snap packs, the values should either be "inside", "outside" (for either inside or outside) or "inside,outside" (for the QR code to be printed on both sides). For letters and booklets, the values can be specific page numbers ("1", "3"), page number ranges such as "1-3", or a comma separated combination of both ("1,3,5-7").',
                        }),
                      logo: z
                        .object({
                          url: z
                            .string()
                            .regex(/^https:\/\/[-a-zA-Z0-9@:%._+~#=\/]{1,256}.(png|jpe?g)$/)
                            .exactOptional()
                            .openapi({
                              description:
                                'The public URL of the logo image to be retrieved and placed over the center of the QR code.',
                            }),
                        })
                        .exactOptional()
                        .openapi({
                          description:
                            'Allows specifying a logo to be placed over the center of the QR code.  Logos must be in PNG or JPEG format and have a maximum file size of 1 MB.',
                          required: [],
                        }),
                      style: z
                        .object({
                          background_color: z
                            .string()
                            .regex(/^#[A-Fa-f0-9]{6}$/)
                            .exactOptional()
                            .openapi({
                              description:
                                'The background color of the QR code in hexadecimal format. For example, `#000000` is black and `#FFFFFF` is white.',
                            }),
                          foreground_color: z
                            .string()
                            .regex(/^#[A-Fa-f0-9]{6}$/)
                            .exactOptional()
                            .openapi({
                              description:
                                'The foreground color of the QR code in hexadecimal format. For example, `#000000` is black and `#FFFFFF` is white.',
                            }),
                        })
                        .exactOptional()
                        .openapi({
                          description: 'Customizes the appearance of the QR code.',
                          required: [],
                        }),
                    })
                    .exactOptional()
                    .openapi({
                      description:
                        'Customize and place a QR code on the creative at the required position.',
                      required: ['position', 'redirect_url', 'width'],
                    }),
                  use_type: ((schema) =>
                    z.union([
                      schema,
                      z.preprocess((val) => (val === 'null' ? null : val), schema),
                    ]))(BookletUseTypeSchema),
                  fsc: z
                    .preprocess(
                      ((read) => (val: unknown) => {
                        const result = read.safeParse(val)
                        return result.success ? result.data : val
                      })(z.stringbool()),
                      z.boolean(),
                    )
                    .default(false)
                    .exactOptional()
                    .openapi({
                      description:
                        'This is in beta. Contact support@lob.com or your account contact to learn more. Not available for `A4` and `us_legal` letter size.',
                    }),
                  size: BookletSizeSchema,
                  pages: z.preprocess(
                    (val) =>
                      typeof val === 'string' &&
                      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                        ? Number(val)
                        : val,
                    BookletPagesSchema,
                  ),
                  source_material: BookletSourceMaterialSchema.exactOptional(),
                  print_speed: ((schema) =>
                    z.union([
                      schema,
                      z.preprocess((val) => (val === 'null' ? null : val), schema),
                    ]))(PrintSpeedSchema).exactOptional(),
                })
                .openapi({ required: ['to', 'from', 'file', 'use_type', 'pages', 'size'] }),
            ),
          example: {
            description: 'demo',
            to: {
              description: 'Harry - Office',
              name: 'Harry Zhang',
              company: 'Lob',
              email: 'harry@lob.com',
              phone: '5555555555',
              address_line1: '210 King St',
              address_line2: '# 6100',
              address_city: 'San Francisco',
              address_state: 'CA',
              address_zip: '94107',
              address_country: 'US',
            },
            from: {
              name: 'Harry',
              address_line1: '210 King St',
              address_line2: '# 6100',
              address_city: 'San Francisco',
              address_state: 'CA',
              address_zip: '94107',
            },
            file: "<html style='padding-top: 3in; margin: .5in;'>HTML Booklet for {{name}}</html>",
            mail_type: 'usps_first_class',
            merge_variables: { name: 'Harry' },
            metadata: { spiffy: 'true' },
            send_date: '2017-11-01T00:00:00.000Z',
            use_type: 'marketing',
            qr_code: {
              position: 'relative',
              redirect_url: 'https://www.lob.com',
              width: '2',
              top: '2',
              right: '2',
              pages: '1-2,4-5',
            },
            fsc: true,
            size: '8.375x5.375',
            print_speed: 'core',
          },
        },
      },
      required: true,
    },
  },
  responses: { 200: PostBookletResponse, default: MailpieceErrorResponse },
})

export const getBuckslipsRoute = createRoute({
  method: 'get',
  path: '/buckslips',
  tags: ['Buckslips'],
  summary: 'List',
  description:
    'Returns a list of your buckslips. The buckslips are returned sorted by creation date, with the most recently created buckslips appearing first.',
  operationId: 'buckslips_list',
  request: {
    query: z.object({
      limit: LimitParamsSchema,
      'before/after': BeforeAfterParamsSchema,
      include: IncludeParamsSchema,
    }),
  },
  responses: {
    200: { description: 'Returns a list of buckslip objects', content: {} },
    default: BuckslipErrorResponse,
  },
})

export const postBuckslipsRoute = createRoute({
  method: 'post',
  path: '/buckslips',
  tags: ['Buckslips'],
  summary: 'Create',
  description: 'Creates a new buckslip given information',
  operationId: 'buckslip_create',
  request: {
    body: {
      content: {
        'application/json': {
          schema: BuckslipEditableSchema,
          example: {
            description: 'Test buckslip',
            front: 'https://s3-us-west-2.amazonaws.com/public.lob.com/assets/buckslip.pdf',
            back: 'https://s3-us-west-2.amazonaws.com/public.lob.com/assets/buckslip.pdf',
          },
        },
        'application/x-www-form-urlencoded': {
          schema: BuckslipEditableSchema,
          example: {
            description: 'Test buckslip',
            front: 'https://s3-us-west-2.amazonaws.com/public.lob.com/assets/buckslip.pdf',
            back: 'https://s3-us-west-2.amazonaws.com/public.lob.com/assets/buckslip.pdf',
          },
        },
        'multipart/form-data': {
          schema: BuckslipEditableSchema,
          example: {
            description: 'Test buckslip',
            front: 'https://s3-us-west-2.amazonaws.com/public.lob.com/assets/buckslip.pdf',
            back: 'https://s3-us-west-2.amazonaws.com/public.lob.com/assets/buckslip.pdf',
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: 'Buckslip created successfully', content: {} },
    default: BuckslipErrorResponse,
  },
})

export const getBuckslipsBuckslipIdRoute = createRoute({
  method: 'get',
  path: '/buckslips/{buckslip_id}',
  tags: ['Buckslips'],
  summary: 'Retrieve',
  description:
    'Retrieves the details of an existing buckslip. You need only supply the unique customer identifier that was returned upon buckslip creation.',
  operationId: 'buckslip_retrieve',
  request: {
    params: z.object({
      buckslip_id: BuckslipIdSchema.openapi({
        param: {
          in: 'path',
          name: 'buckslip_id',
          description: 'id of the buckslip',
          required: true,
          schema: { $ref: '#/components/schemas/buckslip_id' },
        },
      }),
    }),
  },
  responses: {
    200: { description: 'Returns a buckslip object', content: {} },
    default: BuckslipErrorResponse,
  },
})

export const deleteBuckslipsBuckslipIdRoute = createRoute({
  method: 'delete',
  path: '/buckslips/{buckslip_id}',
  tags: ['Buckslips'],
  summary: 'Delete',
  description:
    'Delete an existing buckslip. You need only supply the unique identifier that was returned upon buckslip creation.',
  operationId: 'buckslip_delete',
  request: {
    params: z.object({
      buckslip_id: BuckslipIdSchema.openapi({
        param: {
          in: 'path',
          name: 'buckslip_id',
          description: 'id of the buckslip',
          required: true,
          schema: { $ref: '#/components/schemas/buckslip_id' },
        },
      }),
    }),
  },
  responses: { 200: BuckslipDeletedResponse, default: BuckslipErrorResponse },
})

export const patchBuckslipsBuckslipIdRoute = createRoute({
  method: 'patch',
  path: '/buckslips/{buckslip_id}',
  tags: ['Buckslips'],
  summary: 'Update',
  description:
    'Update the details of an existing buckslip. You need only supply the unique identifier that was returned upon buckslip creation.',
  operationId: 'buckslip_update',
  request: {
    params: z.object({
      buckslip_id: BuckslipIdSchema.openapi({
        param: {
          in: 'path',
          name: 'buckslip_id',
          description: 'id of the buckslip',
          required: true,
          schema: { $ref: '#/components/schemas/buckslip_id' },
        },
      }),
    }),
    body: {
      content: {
        'application/json': {
          schema: BuckslipUpdatableSchema,
          example: { description: 'Test buckslip', auto_reorder: true },
        },
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              description: ((schema) =>
                z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
                BuckslipDescriptionSchema,
              ).exactOptional(),
              auto_reorder: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'Allows for auto reordering' }),
              reorder_quantity: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.number().min(5000).max(10000000),
                )
                .exactOptional()
                .openapi({
                  description:
                    'The quantity of items to be reordered (only required when auto_reorder is true).',
                }),
            })
            .openapi({ required: [] }),
          example: { description: 'Test buckslip', auto_reorder: true },
        },
        'multipart/form-data': {
          schema: z
            .object({
              description: ((schema) =>
                z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
                BuckslipDescriptionSchema,
              ).exactOptional(),
              auto_reorder: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'Allows for auto reordering' }),
              reorder_quantity: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.number().min(5000).max(10000000),
                )
                .exactOptional()
                .openapi({
                  description:
                    'The quantity of items to be reordered (only required when auto_reorder is true).',
                }),
            })
            .openapi({ required: [] }),
          example: { description: 'Test buckslip', auto_reorder: true },
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: 'Returns a buckslip object', content: {} },
    default: BuckslipErrorResponse,
  },
})

export const getBuckslipsBuckslipIdOrdersRoute = createRoute({
  method: 'get',
  path: '/buckslips/{buckslip_id}/orders',
  tags: ['Buckslip Orders'],
  summary: 'Retrieve',
  description: 'Retrieves the buckslip orders associated with the given buckslip id.',
  operationId: 'buckslip_orders_retrieve',
  request: {
    params: z.object({
      buckslip_id: BuckslipIdSchema.openapi({
        param: {
          in: 'path',
          name: 'buckslip_id',
          description: 'The ID of the buckslip to which the buckslip orders belong.',
          required: true,
          schema: { $ref: '#/components/schemas/buckslip_id' },
        },
      }),
    }),
    query: z.object({ limit: LimitParamsSchema, offset: OffsetParamsSchema }),
  },
  responses: {
    200: {
      description: 'Returns the buckslip orders associated with the given buckslip id',
      content: {},
    },
    default: BuckslipOrderErrorResponse,
  },
})

export const postBuckslipsBuckslipIdOrdersRoute = createRoute({
  method: 'post',
  path: '/buckslips/{buckslip_id}/orders',
  tags: ['Buckslip Orders'],
  summary: 'Create',
  description: 'Creates a new buckslip order given information',
  operationId: 'buckslip_order_create',
  request: {
    params: z.object({
      buckslip_id: BuckslipIdSchema.openapi({
        param: {
          in: 'path',
          name: 'buckslip_id',
          description: 'The ID of the buckslip to which the buckslip orders belong.',
          required: true,
          schema: { $ref: '#/components/schemas/buckslip_id' },
        },
      }),
    }),
    body: {
      content: {
        'application/json': { schema: BuckslipOrderEditableSchema, example: { quantity: 10000 } },
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              quantity: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int().min(5000).max(10000000),
                )
                .openapi({
                  description: 'The quantity of buckslips in the order (minimum 5,000).',
                }),
            })
            .openapi({ required: ['quantity'] }),
          example: { quantity: 10000 },
        },
        'multipart/form-data': {
          schema: z
            .object({
              quantity: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int().min(5000).max(10000000),
                )
                .openapi({
                  description: 'The quantity of buckslips in the order (minimum 5,000).',
                }),
            })
            .openapi({ required: ['quantity'] }),
          example: { quantity: 10000 },
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: 'Buckslip order created successfully', content: {} },
    default: BuckslipErrorResponse,
  },
})

export const postBulkUsVerificationsRoute = createRoute({
  method: 'post',
  path: '/bulk/us_verifications',
  tags: ['US Verifications'],
  summary: 'Bulk Verify',
  description:
    'Verify a list of US or US territory addresses _with a live API key_. Requests to this endpoint with a test API key will return a dummy response based on the primary line you input.',
  operationId: 'bulk_us_verifications',
  request: {
    query: z.object({
      case: z
        .enum(['upper', 'proper'])
        .default('upper')
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'case',
            schema: { type: 'string', enum: ['upper', 'proper'], default: 'upper' },
            description:
              'Casing of the verified address. Possible values are `upper` and `proper` for uppercased (e.g. "PO BOX") and proper-cased (e.g. "PO Box"), respectively. Only affects `recipient`, `primary_line`, `secondary_line`, `urbanization`, and `last_line`. Default casing is `upper`.',
            required: false,
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: MultipleComponentsListSchema,
          example: {
            addresses: [
              {
                primary_line: '210 King Street',
                city: 'San Francisco',
                state: 'CA',
                zip_code: '94107',
              },
              {
                recipient: 'Walgreens',
                primary_line: 'Ave Wilson Churchill 123',
                secondary_line: '',
                urbanization: 'URB FAIR OAKS',
                city: 'RIO PIEDRAS',
                state: 'PR',
                zip_code: '00926',
              },
            ],
          },
        },
        'application/x-www-form-urlencoded': {
          schema: MultipleComponentsListSchema,
          example: {
            addresses: [
              {
                primary_line: '210 King Street',
                city: 'San Francisco',
                state: 'CA',
                zip_code: '94107',
              },
              {
                recipient: 'Walgreens',
                primary_line: 'Ave Wilson Churchill 123',
                secondary_line: '',
                urbanization: 'URB FAIR OAKS',
                city: 'RIO PIEDRAS',
                state: 'PR',
                zip_code: '00926',
              },
            ],
          },
        },
        'multipart/form-data': {
          schema: MultipleComponentsListSchema,
          example: {
            addresses: [
              {
                primary_line: '210 King Street',
                city: 'San Francisco',
                state: 'CA',
                zip_code: '94107',
              },
              {
                recipient: 'Walgreens',
                primary_line: 'Ave Wilson Churchill 123',
                secondary_line: '',
                urbanization: 'URB FAIR OAKS',
                city: 'RIO PIEDRAS',
                state: 'PR',
                zip_code: '00926',
              },
            ],
          },
        },
      },
      required: true,
    },
  },
  responses: { 200: BulkUsVerificationsResponse, default: UsVerificationsErrorResponse },
})

export const postBulkIntlVerificationsRoute = createRoute({
  method: 'post',
  path: '/bulk/intl_verifications',
  tags: ['Intl Verifications'],
  summary: 'Bulk Verify',
  description:
    'Verify a list of international (except US or US territories) address _with a live API key_. Requests to this endpoint with a test API key will return a dummy response based on the primary line you input.',
  operationId: 'bulk_intl_verifications',
  request: {
    body: {
      content: {
        'application/json': {
          schema: IntlVerificationsPayloadSchema,
          example: {
            addresses: [
              {
                recipient: 'John Doe',
                primary_line: '370 Water St',
                secondary_line: '',
                city: 'Summerside',
                state: 'Prince Edwards Island',
                postal_code: 'C1N 1C4',
                country: 'CA',
              },
              {
                recipient: 'Jane Doe',
                primary_line: 'UL. DOLSKAYA 1',
                secondary_line: '',
                city: 'MOSCOW',
                state: 'MOSCOW G',
                postal_code: '115569',
                country: 'RU',
              },
            ],
          },
        },
        'multipart/form-data': {
          schema: IntlVerificationsPayloadSchema,
          example: {
            addresses: [
              {
                recipient: 'John Doe',
                primary_line: '370 Water St',
                secondary_line: '',
                city: 'Summerside',
                state: 'Prince Edwards Island',
                postal_code: 'C1N 1C4',
                country: 'CA',
              },
              {
                recipient: 'Jane Doe',
                primary_line: 'UL. DOLSKAYA 1',
                secondary_line: '',
                city: 'MOSCOW',
                state: 'MOSCOW G',
                postal_code: '115569',
                country: 'RU',
              },
            ],
          },
        },
      },
      required: true,
    },
  },
  responses: { 200: BulkIntlVerificationsResponse, default: IntlVerificationsErrorResponse },
})

export const getCampaignsRoute = createRoute({
  method: 'get',
  path: '/campaigns',
  tags: ['Campaigns'],
  summary: 'List',
  description:
    'Returns a list of your campaigns. The campaigns are returned sorted by creation date, with the most recently created campaigns appearing first.',
  operationId: 'campaigns_list',
  request: {
    query: z.object({
      limit: LimitParamsSchema,
      include: IncludeParamsSchema,
      'before/after': BeforeAfterParamsSchema,
    }),
  },
  responses: { 200: AllCampaignsResponse },
})

export const postCampaignsRoute = createRoute({
  method: 'post',
  path: '/campaigns',
  tags: ['Campaigns'],
  summary: 'Create',
  description:
    'Creates a new campaign with the provided properties. See how to launch your first campaign [here](https://help.lob.com/print-and-mail/building-a-mail-strategy/campaign-or-triggered-sends/launch-your-first-campaign).',
  operationId: 'campaign_create',
  request: {
    headers: z.object({ 'x-lang-output': LangSpecParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: CampaignWritableSchema,
          example: {
            name: 'My Demo Campaign',
            description: "My Campaign's description",
            schedule_type: 'immediate',
            print_speed: 'core',
          },
        },
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              billing_group_id: ((schema) =>
                z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
                z
                  .string()
                  .regex(/^bg_[a-zA-Z0-9]+$/)
                  .nullable(),
              )
                .exactOptional()
                .openapi({ description: 'Unique identifier prefixed with `bg_`.' }),
              name: z.string().openapi({ description: 'Name of the campaign.' }),
              description: ((schema) =>
                z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
                ResourceDescriptionSchema,
              ).exactOptional(),
              schedule_type: CmpScheduleTypeSchema,
              target_delivery_date: ((schema) =>
                z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
                z.iso.datetime({ offset: true }).nullable(),
              )
                .exactOptional()
                .openapi({
                  description:
                    'If `schedule_type` is `target_delivery_date`, provide a targeted delivery date for mail pieces in this campaign.',
                }),
              send_date: ((schema) =>
                z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
                z.iso.datetime({ offset: true }).nullable(),
              )
                .exactOptional()
                .openapi({
                  description:
                    'If `schedule_type` is `scheduled_send_date`, provide a date to send this campaign.',
                }),
              cancel_window_campaign_minutes: z
                .preprocess(
                  (val) => (val === 'null' ? null : val),
                  z
                    .preprocess(
                      (val) =>
                        typeof val === 'string' &&
                        /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                        (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                          ? Number(val)
                          : val,
                      z.int(),
                    )
                    .nullable(),
                )
                .exactOptional()
                .openapi({
                  description: 'A window, in minutes, within which the campaign can be canceled.',
                }),
              metadata: MetadataSchema.exactOptional(),
              use_type: ((schema) =>
                z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
                CmpUseTypeSchema,
              ),
              auto_cancel_if_ncoa: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({
                  description:
                    'Whether or not a mail piece should be automatically canceled and not sent if the address is updated via NCOA.',
                }),
              print_speed: ((schema) =>
                z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
                PrintSpeedSchema,
              ).exactOptional(),
            })
            .openapi({ required: ['name', 'schedule_type', 'use_type'] }),
          example: {
            name: 'My Demo Campaign',
            description: "My Campaign's description",
            schedule_type: 'immediate',
            print_speed: 'core',
          },
          encoding: { 'example-prop': {} },
        },
        'multipart/form-data': {
          schema: z
            .object({
              billing_group_id: ((schema) =>
                z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
                z
                  .string()
                  .regex(/^bg_[a-zA-Z0-9]+$/)
                  .nullable(),
              )
                .exactOptional()
                .openapi({ description: 'Unique identifier prefixed with `bg_`.' }),
              name: z.string().openapi({ description: 'Name of the campaign.' }),
              description: ((schema) =>
                z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
                ResourceDescriptionSchema,
              ).exactOptional(),
              schedule_type: CmpScheduleTypeSchema,
              target_delivery_date: ((schema) =>
                z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
                z.iso.datetime({ offset: true }).nullable(),
              )
                .exactOptional()
                .openapi({
                  description:
                    'If `schedule_type` is `target_delivery_date`, provide a targeted delivery date for mail pieces in this campaign.',
                }),
              send_date: ((schema) =>
                z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
                z.iso.datetime({ offset: true }).nullable(),
              )
                .exactOptional()
                .openapi({
                  description:
                    'If `schedule_type` is `scheduled_send_date`, provide a date to send this campaign.',
                }),
              cancel_window_campaign_minutes: z
                .preprocess(
                  (val) => (val === 'null' ? null : val),
                  z
                    .preprocess(
                      (val) =>
                        typeof val === 'string' &&
                        /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                        (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                          ? Number(val)
                          : val,
                      z.int(),
                    )
                    .nullable(),
                )
                .exactOptional()
                .openapi({
                  description: 'A window, in minutes, within which the campaign can be canceled.',
                }),
              metadata: MetadataSchema.exactOptional(),
              use_type: ((schema) =>
                z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
                CmpUseTypeSchema,
              ),
              auto_cancel_if_ncoa: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({
                  description:
                    'Whether or not a mail piece should be automatically canceled and not sent if the address is updated via NCOA.',
                }),
              print_speed: ((schema) =>
                z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
                PrintSpeedSchema,
              ).exactOptional(),
            })
            .openapi({ required: ['name', 'schedule_type', 'use_type'] }),
          example: {
            name: 'My Demo Campaign',
            description: "My Campaign's description",
            schedule_type: 'immediate',
            print_speed: 'core',
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: 'Campaign created successfully', content: {} },
    default: CampaignsErrorResponse,
  },
})

export const getCampaignsCmpIdRoute = createRoute({
  method: 'get',
  path: '/campaigns/{cmp_id}',
  tags: ['Campaigns'],
  summary: 'Retrieve',
  description:
    'Retrieves the details of an existing campaign. You need only supply the unique campaign identifier that was returned upon campaign creation.',
  operationId: 'campaign_retrieve',
  request: {
    params: z.object({
      cmp_id: CmpIdSchema.openapi({
        param: {
          in: 'path',
          name: 'cmp_id',
          description: 'id of the campaign',
          required: true,
          schema: { $ref: '#/components/schemas/cmp_id' },
        },
      }),
    }),
  },
  responses: {
    200: { description: 'Returns a campaign object', content: {} },
    default: CampaignsErrorResponse,
  },
})

export const deleteCampaignsCmpIdRoute = createRoute({
  method: 'delete',
  path: '/campaigns/{cmp_id}',
  tags: ['Campaigns'],
  summary: 'Delete',
  description:
    "Delete an existing campaign. You need only supply the unique identifier that was returned upon campaign creation. Deleting a campaign also deletes any associated mail pieces that have been created but not sent. A campaign's `send_date` matches its associated mail pieces' `send_date`s.",
  operationId: 'campaign_delete',
  request: {
    params: z.object({
      cmp_id: CmpIdSchema.openapi({
        param: {
          in: 'path',
          name: 'cmp_id',
          description: 'id of the campaign',
          required: true,
          schema: { $ref: '#/components/schemas/cmp_id' },
        },
      }),
    }),
  },
  responses: { 200: CampaignDeletedResponse, default: CampaignsErrorResponse },
})

export const patchCampaignsCmpIdRoute = createRoute({
  method: 'patch',
  path: '/campaigns/{cmp_id}',
  tags: ['Campaigns'],
  summary: 'Update',
  description:
    'Update the details of an existing campaign. You need only supply the unique identifier that was returned upon campaign creation.',
  operationId: 'campaign_update',
  request: {
    params: z.object({
      cmp_id: CmpIdSchema.openapi({
        param: {
          in: 'path',
          name: 'cmp_id',
          description: 'id of the campaign',
          required: true,
          schema: { $ref: '#/components/schemas/cmp_id' },
        },
      }),
    }),
    body: {
      content: {
        'application/json': {
          schema: CampaignUpdatableSchema,
          example: { description: 'Test campaign' },
        },
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              name: z.string().exactOptional().openapi({ title: 'Name' }),
              description: ((schema) =>
                z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
                ResourceDescriptionSchema,
              ).exactOptional(),
              schedule_type: CmpScheduleTypeSchema.exactOptional(),
              target_delivery_date: z.iso
                .datetime({ offset: true })
                .exactOptional()
                .openapi({
                  description:
                    'If `schedule_type` is `target_delivery_date`, provide a targeted delivery date for mail pieces in this campaign.',
                }),
              send_date: z.iso
                .datetime({ offset: true })
                .exactOptional()
                .openapi({
                  description:
                    'If `schedule_type` is `scheduled_send_date`, provide a date to send this campaign.',
                }),
              cancel_window_campaign_minutes: z
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
                  description: 'A window, in minutes, within which the campaign can be canceled.',
                }),
              metadata: MetadataSchema.exactOptional(),
              is_draft: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({
                  description:
                    'Whether or not the campaign is still a draft. Can either be excluded or `false`.',
                }),
              use_type: ((schema) =>
                z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
                CmpUseTypeSchema,
              ).exactOptional(),
              auto_cancel_if_ncoa: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({
                  description:
                    'Whether or not a mail piece should be automatically canceled and not sent if the address is updated via NCOA.',
                }),
            })
            .openapi({ required: [] }),
          example: { description: 'Test campaign' },
        },
        'multipart/form-data': {
          schema: z
            .object({
              name: z.string().exactOptional().openapi({ title: 'Name' }),
              description: ((schema) =>
                z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
                ResourceDescriptionSchema,
              ).exactOptional(),
              schedule_type: CmpScheduleTypeSchema.exactOptional(),
              target_delivery_date: z.iso
                .datetime({ offset: true })
                .exactOptional()
                .openapi({
                  description:
                    'If `schedule_type` is `target_delivery_date`, provide a targeted delivery date for mail pieces in this campaign.',
                }),
              send_date: z.iso
                .datetime({ offset: true })
                .exactOptional()
                .openapi({
                  description:
                    'If `schedule_type` is `scheduled_send_date`, provide a date to send this campaign.',
                }),
              cancel_window_campaign_minutes: z
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
                  description: 'A window, in minutes, within which the campaign can be canceled.',
                }),
              metadata: MetadataSchema.exactOptional(),
              is_draft: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({
                  description:
                    'Whether or not the campaign is still a draft. Can either be excluded or `false`.',
                }),
              use_type: ((schema) =>
                z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
                CmpUseTypeSchema,
              ).exactOptional(),
              auto_cancel_if_ncoa: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({
                  description:
                    'Whether or not a mail piece should be automatically canceled and not sent if the address is updated via NCOA.',
                }),
            })
            .openapi({ required: [] }),
          example: { description: 'Test campaign' },
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: 'Returns a campaign object', content: {} },
    default: CampaignsErrorResponse,
  },
})

export const postCampaignsCmpIdSendRoute = createRoute({
  method: 'post',
  path: '/campaigns/{cmp_id}/send',
  tags: ['Campaigns'],
  summary: 'Send Campaign',
  description:
    'Sends a campaign. You need only supply the unique campaign identifier that was returned upon campaign creation.',
  operationId: 'campaign_send',
  request: {
    params: z.object({
      cmp_id: CmpIdSchema.openapi({
        param: {
          in: 'path',
          name: 'cmp_id',
          description: 'id of the campaign',
          required: true,
          schema: { $ref: '#/components/schemas/cmp_id' },
        },
      }),
    }),
  },
  responses: {
    200: { description: 'Returns a campaign object', content: {} },
    default: CampaignsErrorResponse,
  },
})

export const getCardsRoute = createRoute({
  method: 'get',
  path: '/cards',
  tags: ['Cards'],
  summary: 'List',
  description:
    'Returns a list of your cards. The cards are returned sorted by creation date, with the most recently created addresses appearing first.',
  operationId: 'cards_list',
  request: {
    query: z.object({
      limit: LimitParamsSchema,
      'before/after': BeforeAfterParamsSchema,
      include: IncludeParamsSchema,
    }),
  },
  responses: {
    200: { description: 'Returns a list of card objects', content: {} },
    default: MailpieceErrorResponse,
  },
})

export const postCardsRoute = createRoute({
  method: 'post',
  path: '/cards',
  tags: ['Cards'],
  summary: 'Create',
  description: 'Creates a new card given information',
  operationId: 'card_create',
  request: {
    body: {
      content: {
        'application/json': {
          schema: CardEditableSchema,
          example: {
            description: 'Test card',
            front: 'https://s3-us-west-2.amazonaws.com/public.lob.com/assets/card_horizontal.pdf',
            back: 'https://s3-us-west-2.amazonaws.com/public.lob.com/assets/card_horizontal.pdf',
            size: '2.125x3.375',
          },
        },
        'application/x-www-form-urlencoded': {
          schema: CardEditableSchema,
          example: {
            description: 'Test card',
            front: 'https://s3-us-west-2.amazonaws.com/public.lob.com/assets/card_horizontal.pdf',
            back: 'https://s3-us-west-2.amazonaws.com/public.lob.com/assets/card_horizontal.pdf',
            size: '2.125x3.375',
          },
        },
        'multipart/form-data': {
          schema: CardEditableSchema,
          example: {
            description: 'Test card',
            front: 'https://s3-us-west-2.amazonaws.com/public.lob.com/assets/card_horizontal.pdf',
            back: 'https://s3-us-west-2.amazonaws.com/public.lob.com/assets/card_horizontal.pdf',
            size: '2.125x3.375',
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: 'Card created successfully', content: {} },
    default: MailpieceErrorResponse,
  },
})

export const getCardsCardIdRoute = createRoute({
  method: 'get',
  path: '/cards/{card_id}',
  tags: ['Cards'],
  summary: 'Retrieve',
  description:
    'Retrieves the details of an existing card. You need only supply the unique customer identifier that was returned upon card creation.',
  operationId: 'card_retrieve',
  request: {
    params: z.object({
      card_id: CardIdSchema.openapi({
        param: {
          in: 'path',
          name: 'card_id',
          description: 'id of the card',
          required: true,
          schema: { $ref: '#/components/schemas/card_id' },
        },
      }),
    }),
  },
  responses: {
    200: { description: 'Returns a card object', content: {} },
    default: MailpieceErrorResponse,
  },
})

export const postCardsCardIdRoute = createRoute({
  method: 'post',
  path: '/cards/{card_id}',
  tags: ['Cards'],
  summary: 'Update',
  description:
    'Update the details of an existing card. You need only supply the unique identifier that was returned upon card creation.',
  operationId: 'card_update',
  request: {
    params: z.object({
      card_id: CardIdSchema.openapi({
        param: {
          in: 'path',
          name: 'card_id',
          description: 'id of the card',
          required: true,
          schema: { $ref: '#/components/schemas/card_id' },
        },
      }),
    }),
    body: {
      content: {
        'application/json': {
          schema: CardUpdatableSchema,
          example: { description: 'Test card', auto_reorder: true },
        },
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              description: ((schema) =>
                z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
                CardDescriptionSchema,
              ).exactOptional(),
              auto_reorder: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'Allows for auto reordering' }),
              reorder_quantity: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.number().min(10000).max(10000000),
                )
                .exactOptional()
                .openapi({
                  description:
                    'The quantity of items to be reordered (only required when auto_reorder is true).',
                }),
            })
            .openapi({ required: [] }),
          example: { description: 'Test card', auto_reorder: true },
        },
        'multipart/form-data': {
          schema: z
            .object({
              description: ((schema) =>
                z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
                CardDescriptionSchema,
              ).exactOptional(),
              auto_reorder: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'Allows for auto reordering' }),
              reorder_quantity: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.number().min(10000).max(10000000),
                )
                .exactOptional()
                .openapi({
                  description:
                    'The quantity of items to be reordered (only required when auto_reorder is true).',
                }),
            })
            .openapi({ required: [] }),
          example: { description: 'Test card', auto_reorder: true },
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: 'Returns a card object', content: {} },
    default: MailpieceErrorResponse,
  },
})

export const deleteCardsCardIdRoute = createRoute({
  method: 'delete',
  path: '/cards/{card_id}',
  tags: ['Cards'],
  summary: 'Delete',
  description:
    'Delete an existing card. You need only supply the unique identifier that was returned upon card creation.',
  operationId: 'card_delete',
  request: {
    params: z.object({
      card_id: CardIdSchema.openapi({
        param: {
          in: 'path',
          name: 'card_id',
          description: 'id of the card',
          required: true,
          schema: { $ref: '#/components/schemas/card_id' },
        },
      }),
    }),
  },
  responses: { 200: CardDeletedResponse, default: MailpieceErrorResponse },
})

export const getCardsCardIdOrdersRoute = createRoute({
  method: 'get',
  path: '/cards/{card_id}/orders',
  tags: ['Card Orders'],
  summary: 'Retrieve',
  description: 'Retrieves the card orders associated with the given card id.',
  operationId: 'card_orders_retrieve',
  request: {
    params: z.object({
      card_id: CardIdSchema.openapi({
        param: {
          in: 'path',
          name: 'card_id',
          description: 'The ID of the card to which the card orders belong.',
          required: true,
          schema: { $ref: '#/components/schemas/card_id' },
        },
      }),
    }),
    query: z.object({ limit: LimitParamsSchema, offset: OffsetParamsSchema }),
  },
  responses: {
    200: { description: 'Returns the card orders associated with the given card id', content: {} },
    default: CardOrderErrorResponse,
  },
})

export const postCardsCardIdOrdersRoute = createRoute({
  method: 'post',
  path: '/cards/{card_id}/orders',
  tags: ['Card Orders'],
  summary: 'Create',
  description: 'Creates a new card order given information',
  operationId: 'card_order_create',
  request: {
    params: z.object({
      card_id: CardIdSchema.openapi({
        param: {
          in: 'path',
          name: 'card_id',
          description: 'The ID of the card to which the card orders belong.',
          required: true,
          schema: { $ref: '#/components/schemas/card_id' },
        },
      }),
    }),
    body: {
      content: {
        'application/json': { schema: CardOrderEditableSchema, example: { quantity: 10000 } },
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              quantity: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int().min(10000).max(10000000),
                )
                .openapi({ description: 'The quantity of cards in the order (minimum 10,000).' }),
            })
            .openapi({ required: ['quantity'] }),
          example: { quantity: 10000 },
        },
        'multipart/form-data': {
          schema: z
            .object({
              quantity: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int().min(10000).max(10000000),
                )
                .openapi({ description: 'The quantity of cards in the order (minimum 10,000).' }),
            })
            .openapi({ required: ['quantity'] }),
          example: { quantity: 10000 },
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: 'Card order created successfully', content: {} },
    default: MailpieceErrorResponse,
  },
})

export const getChecksRoute = createRoute({
  method: 'get',
  path: '/checks',
  tags: ['Checks'],
  summary: 'List',
  description:
    'Returns a list of your checks. The checks are returned sorted by creation date, with the most recently created checks appearing first.',
  operationId: 'checks_list',
  request: {
    query: z
      .looseObject({})
      .transform((val) => {
        const rest: [string, unknown][] = []
        const groups = new Map<string, Record<string, unknown>>()
        const group = (name: string) => {
          const found = groups.get(name)
          if (found !== undefined) return found
          const made: Record<string, unknown> = Object.create(null)
          groups.set(name, made)
          return made
        }
        const isGroup = (item: unknown): item is Record<string, unknown> =>
          typeof item === 'object' && item !== null && !Array.isArray(item)
        const lists = new WeakSet<object>()
        const isIndex = (part: string | undefined) => part !== undefined && /^\d*$/.test(part)
        const child = (target: Record<string, unknown>, key: string, asList: boolean) => {
          const held = target[key]
          if (isGroup(held)) return held
          const made: Record<string, unknown> = Object.create(null)
          if (asList) lists.add(made)
          target[key] = made
          return made
        }
        const set = (
          root: Record<string, unknown>,
          path: readonly string[],
          item: unknown,
        ): void => {
          const work: [Record<string, unknown>, number, unknown, boolean][] = [
            [root, 0, item, false],
          ]
          for (let job = work.pop(); job !== undefined; job = work.pop()) {
            const [target, at, value, split] = job
            const head = path[at]
            if (head === undefined) continue
            const next = path[at + 1]
            if (head === '') {
              if (!split && Array.isArray(value)) {
                for (let i = value.length - 1; i >= 0; i -= 1)
                  work.push([target, at, value[i], true])
                continue
              }
              const size = Object.keys(target).length
              if (next === undefined) {
                target[String(size)] = value
                continue
              }
              const free =
                next === ''
                  ? -1
                  : Object.values(target).findIndex((held) => isGroup(held) && !(next in held))
              work.push([
                child(target, String(free < 0 ? size : free), isIndex(next)),
                at + 1,
                value,
                false,
              ])
              continue
            }
            if (next === undefined) {
              target[head] = value
              continue
            }
            work.push([child(target, head, isIndex(next)), at + 1, value, false])
          }
        }
        const settle = (root: unknown): unknown => {
          if (!isGroup(root)) return root
          const found: [Record<string, unknown>, string, Record<string, unknown>][] = []
          const queue: Record<string, unknown>[] = [root]
          for (const node of queue) {
            for (const [key, inner] of Object.entries(node)) {
              if (isGroup(inner)) {
                found.push([node, key, inner])
                queue.push(inner)
              }
            }
          }
          const finish = (group: Record<string, unknown>): unknown =>
            lists.has(group)
              ? Object.entries(group)
                  .sort((a, b) => Number(a[0]) - Number(b[0]))
                  .map(([, inner]) => inner)
              : Object.assign(Object.create(null), group)
          for (const [parent, key, group] of found.reverse()) {
            parent[key] = finish(group)
          }
          return finish(root)
        }
        const deep: string[] = ['date_created', 'metadata']
        for (const [key, item] of Object.entries(val)) {
          const match = /^([^\[\]]+)((?:\[[^\[\]]*\])+)$/.exec(key)
          const name = match?.[1]
          const path = match?.[2]
          if (name !== undefined && path !== undefined && deep.includes(name)) {
            const parts = path.slice(1, -1).split('][')
            set(group(name), parts, item)
            continue
          }
          rest.push([key, item])
        }
        return Object.fromEntries([
          ...rest,
          ...[...groups].map(([name, held]) => [name, settle(held)] as const),
        ])
      })
      .pipe(
        z.object({
          limit: LimitParamsSchema,
          'before/after': BeforeAfterParamsSchema,
          include: IncludeParamsSchema,
          date_created: DateCreatedParamsSchema,
          metadata: MetadataParamsSchema,
          scheduled: ScheduledParamsSchema,
          send_date: SendDateParamsSchema,
          mail_type: MailTypeParamsSchema,
          sort_by: SortByParamsSchema,
          status: StatusParamsSchema,
        }),
      ),
  },
  responses: { 200: AllChecksResponse, default: MailpieceErrorResponse },
})

export const postChecksRoute = createRoute({
  method: 'post',
  path: '/checks',
  tags: ['Checks'],
  summary: 'Create',
  description: 'Creates a new check with the provided properties.',
  operationId: 'check_create',
  request: {
    headers: z.object({ 'Idempotency-Key': IdemHeaderParamsSchema }),
    query: z.object({ idempotency_key: IdemQueryParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: CheckEditableSchema,
          example: {
            description: 'Demo Check',
            to: {
              description: 'Harry - Office',
              name: 'Harry Zhang',
              company: 'Lob',
              email: 'harry@lob.com',
              phone: '5555555555',
              address_line1: '210 King St',
              address_line2: '# 6100',
              address_city: 'San Francisco',
              address_state: 'CA',
              address_zip: '94107',
              address_country: 'US',
            },
            from: {
              name: 'Leore Avidar',
              address_line1: '210 King St',
              address_line2: '# 6100',
              address_city: 'San Francisco',
              address_state: 'CA',
              address_zip: '94107-1741',
            },
            bank_account: 'bank_8cad8df5354d33f',
            amount: 22.5,
            memo: 'rent',
            logo: 'https://s3-us-west-2.amazonaws.com/public.lob.com/assets/check_logo.png',
            check_bottom: 'tmpl_23668b406d5afef',
            merge_variables: { name: 'Harry' },
            metadata: { memo: 'rafting trip' },
            attachment: './cool.pdf',
            send_date: '2017-11-01T00:00:00.000Z',
            use_type: 'operational',
            mail_type: 'usps_first_class',
            check_number: 10001,
            print_speed: 'core',
          },
        },
        'application/x-www-form-urlencoded': {
          schema: z.xor([
            z
              .unknown()
              .superRefine((val, ctx) => {
                if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
                  if (!Object.hasOwn(val, 'message')) {
                    ctx.addIssue({ code: 'custom' })
                  }
                }
              })
              .openapi({ required: ['message'] })
              .and(
                EditableNoMailtypeSchema.and(
                  z
                    .object({
                      mail_type: z
                        .literal('usps_first_class')
                        .default('usps_first_class')
                        .exactOptional()
                        .openapi({ description: 'Checks must be sent `usps_first_class`' }),
                      memo: ((schema) =>
                        z.union([
                          schema,
                          z.preprocess((val) => (val === 'null' ? null : val), schema),
                        ]))(z.string().max(40).nullable())
                        .exactOptional()
                        .openapi({ description: 'Text to include on the memo line of the check.' }),
                      check_number: z
                        .preprocess(
                          (val) =>
                            typeof val === 'string' &&
                            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                              ? Number(val)
                              : val,
                          z.int().min(1).max(500000000),
                        )
                        .exactOptional()
                        .openapi({
                          description:
                            'An integer that designates the check number.\nIf `check_number` is not provided, checks created from a new `bank_account` will start at `10000` and increment with each check created with the `bank_account`.\nA provided `check_number` overrides the defaults. Subsequent checks created with the same `bank_account` will increment from the provided check number.',
                        }),
                      message: z
                        .string()
                        .max(400)
                        .exactOptional()
                        .openapi({
                          description:
                            'Max of 400 characters to be included at the bottom of the check page.',
                        }),
                      use_type: ((schema) =>
                        z.union([
                          schema,
                          z.preprocess((val) => (val === 'null' ? null : val), schema),
                        ]))(ChkUseTypeSchema).exactOptional(),
                    })
                    .openapi({ required: [] }),
                )
                  .and(CheckInputToSchema)
                  .and(
                    z
                      .object({
                        from: z
                          .xor([AdrIdSchema, InlineAddressUsSchema])
                          .openapi({
                            description:
                              'Must either be an address ID or an inline object with correct address parameters. Must either be an address ID or an inline object with correct address parameters. All addresses will be standardized into uppercase without being modified by verification.',
                          }),
                        bank_account: BankIdNoDescriptionSchema.and(
                          z
                            .string()
                            .openapi({ description: 'The id for a verified bank account.' }),
                        ),
                        amount: z
                          .preprocess(
                            (val) =>
                              typeof val === 'string' &&
                              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                ? Number(val)
                                : val,
                            z.float32().max(999999.99),
                          )
                          .openapi({
                            description:
                              'The payment amount to be sent in US dollars. Amounts will be rounded to two decimal places.',
                          }),
                        logo: z
                          .xor([
                            z
                              .string()
                              .regex(/^https:\/\/[-a-zA-Z0-9@:%._+~#=\/]{1,256}.(png|jpg)$/),
                            z
                              .string()
                              .regex(/^(?!https:\/\/)[a-zA-Z0-9@:%._+~#=\/]{1,256}.(png|jpg)$/),
                          ])
                          .exactOptional()
                          .openapi({
                            description:
                              'Accepts a remote URL or local file upload to an image to print (in grayscale) in the upper-left corner of your check. Image requirements:\n\n  * RGB or CMYK\n\n  * square\n\n  * minimum size: 100px x 100px\n\n  * transparent backgrond\n\n  * `png` or `jpg`',
                          }),
                        check_bottom: CheckBottomSchema.exactOptional(),
                        attachment: z
                          .xor([
                            HtmlStringSchema,
                            TmplIdSchema,
                            RemoteFileUrlSchema,
                            LocalFilePathSchema,
                          ])
                          .exactOptional()
                          .openapi({
                            description:
                              'A document to include with the check.\n\nNotes:\n- HTML merge variables should not include delimiting whitespace.\n- All pages of PDF, PNG, and JPGs must be sized at 8.5"x11" at 300 DPI, while supplied HTML will be rendered and trimmed to as many 8.5"x11" pages as necessary.\n- If a PDF is provided, it must be 6 pages or fewer.\n- The attachment will be printed double-sided in black & white and will be included in the envelope after the check page.\n- Please follow these <a href="https://s3-us-west-2.amazonaws.com/public.lob.com/assets/templates/check_attachment_template.pdf" target="_blank">design guidelines</a>.\n\nSee <a href="https://lob.com/pricing/print-mail#compare" target="_blank">pricing</a> for extra costs incurred. Need more help? Consult our [HTML examples](#section/HTML-Examples).',
                          }),
                        billing_group_id: BillingGroupIdSchema.exactOptional(),
                        use_type: ((schema) =>
                          z.union([
                            schema,
                            z.preprocess((val) => (val === 'null' ? null : val), schema),
                          ]))(ChkUseTypeSchema),
                        service_request_number: ((schema) =>
                          z.union([
                            schema,
                            z.preprocess((val) => (val === 'null' ? null : val), schema),
                          ]))(ServiceRequestNumberSchema).exactOptional(),
                        print_speed: ((schema) =>
                          z.union([
                            schema,
                            z.preprocess((val) => (val === 'null' ? null : val), schema),
                          ]))(PrintSpeedSchema).exactOptional(),
                      })
                      .openapi({ required: ['bank_account', 'to', 'from', 'amount', 'use_type'] }),
                  ),
              )
              .openapi({ title: 'words at check bottom' }),
            z
              .unknown()
              .superRefine((val, ctx) => {
                if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
                  if (!Object.hasOwn(val, 'check_bottom')) {
                    ctx.addIssue({ code: 'custom' })
                  }
                }
              })
              .openapi({ required: ['check_bottom'] })
              .and(
                EditableNoMailtypeSchema.and(
                  z
                    .object({
                      mail_type: z
                        .literal('usps_first_class')
                        .default('usps_first_class')
                        .exactOptional()
                        .openapi({ description: 'Checks must be sent `usps_first_class`' }),
                      memo: ((schema) =>
                        z.union([
                          schema,
                          z.preprocess((val) => (val === 'null' ? null : val), schema),
                        ]))(z.string().max(40).nullable())
                        .exactOptional()
                        .openapi({ description: 'Text to include on the memo line of the check.' }),
                      check_number: z
                        .preprocess(
                          (val) =>
                            typeof val === 'string' &&
                            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                              ? Number(val)
                              : val,
                          z.int().min(1).max(500000000),
                        )
                        .exactOptional()
                        .openapi({
                          description:
                            'An integer that designates the check number.\nIf `check_number` is not provided, checks created from a new `bank_account` will start at `10000` and increment with each check created with the `bank_account`.\nA provided `check_number` overrides the defaults. Subsequent checks created with the same `bank_account` will increment from the provided check number.',
                        }),
                      message: z
                        .string()
                        .max(400)
                        .exactOptional()
                        .openapi({
                          description:
                            'Max of 400 characters to be included at the bottom of the check page.',
                        }),
                      use_type: ((schema) =>
                        z.union([
                          schema,
                          z.preprocess((val) => (val === 'null' ? null : val), schema),
                        ]))(ChkUseTypeSchema).exactOptional(),
                    })
                    .openapi({ required: [] }),
                )
                  .and(CheckInputToSchema)
                  .and(
                    z
                      .object({
                        from: z
                          .xor([AdrIdSchema, InlineAddressUsSchema])
                          .openapi({
                            description:
                              'Must either be an address ID or an inline object with correct address parameters. Must either be an address ID or an inline object with correct address parameters. All addresses will be standardized into uppercase without being modified by verification.',
                          }),
                        bank_account: BankIdNoDescriptionSchema.and(
                          z
                            .string()
                            .openapi({ description: 'The id for a verified bank account.' }),
                        ),
                        amount: z
                          .preprocess(
                            (val) =>
                              typeof val === 'string' &&
                              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                ? Number(val)
                                : val,
                            z.float32().max(999999.99),
                          )
                          .openapi({
                            description:
                              'The payment amount to be sent in US dollars. Amounts will be rounded to two decimal places.',
                          }),
                        logo: z
                          .xor([
                            z
                              .string()
                              .regex(/^https:\/\/[-a-zA-Z0-9@:%._+~#=\/]{1,256}.(png|jpg)$/),
                            z
                              .string()
                              .regex(/^(?!https:\/\/)[a-zA-Z0-9@:%._+~#=\/]{1,256}.(png|jpg)$/),
                          ])
                          .exactOptional()
                          .openapi({
                            description:
                              'Accepts a remote URL or local file upload to an image to print (in grayscale) in the upper-left corner of your check. Image requirements:\n\n  * RGB or CMYK\n\n  * square\n\n  * minimum size: 100px x 100px\n\n  * transparent backgrond\n\n  * `png` or `jpg`',
                          }),
                        check_bottom: CheckBottomSchema.exactOptional(),
                        attachment: z
                          .xor([
                            HtmlStringSchema,
                            TmplIdSchema,
                            RemoteFileUrlSchema,
                            LocalFilePathSchema,
                          ])
                          .exactOptional()
                          .openapi({
                            description:
                              'A document to include with the check.\n\nNotes:\n- HTML merge variables should not include delimiting whitespace.\n- All pages of PDF, PNG, and JPGs must be sized at 8.5"x11" at 300 DPI, while supplied HTML will be rendered and trimmed to as many 8.5"x11" pages as necessary.\n- If a PDF is provided, it must be 6 pages or fewer.\n- The attachment will be printed double-sided in black & white and will be included in the envelope after the check page.\n- Please follow these <a href="https://s3-us-west-2.amazonaws.com/public.lob.com/assets/templates/check_attachment_template.pdf" target="_blank">design guidelines</a>.\n\nSee <a href="https://lob.com/pricing/print-mail#compare" target="_blank">pricing</a> for extra costs incurred. Need more help? Consult our [HTML examples](#section/HTML-Examples).',
                          }),
                        billing_group_id: BillingGroupIdSchema.exactOptional(),
                        use_type: ((schema) =>
                          z.union([
                            schema,
                            z.preprocess((val) => (val === 'null' ? null : val), schema),
                          ]))(ChkUseTypeSchema),
                        service_request_number: ((schema) =>
                          z.union([
                            schema,
                            z.preprocess((val) => (val === 'null' ? null : val), schema),
                          ]))(ServiceRequestNumberSchema).exactOptional(),
                        print_speed: ((schema) =>
                          z.union([
                            schema,
                            z.preprocess((val) => (val === 'null' ? null : val), schema),
                          ]))(PrintSpeedSchema).exactOptional(),
                      })
                      .openapi({ required: ['bank_account', 'to', 'from', 'amount', 'use_type'] }),
                  ),
              )
              .openapi({ title: 'image at check bottom' }),
          ]),
          example: {
            description: 'Demo Check',
            to: {
              description: 'Harry - Office',
              name: 'Harry Zhang',
              company: 'Lob',
              email: 'harry@lob.com',
              phone: '5555555555',
              address_line1: '210 King St',
              address_line2: '# 6100',
              address_city: 'San Francisco',
              address_state: 'CA',
              address_zip: '94107',
              address_country: 'US',
            },
            from: {
              name: 'Leore Avidar',
              address_line1: '210 King St',
              address_line2: '# 6100',
              address_city: 'San Francisco',
              address_state: 'CA',
              address_zip: '94107-1741',
            },
            bank_account: 'bank_8cad8df5354d33f',
            amount: 22.5,
            memo: 'rent',
            logo: 'https://s3-us-west-2.amazonaws.com/public.lob.com/assets/check_logo.png',
            check_bottom: 'tmpl_23668b406d5afef',
            merge_variables: { name: 'Harry' },
            metadata: { memo: 'rafting trip' },
            attachment: './cool.pdf',
            send_date: '2017-11-01T00:00:00.000Z',
            mail_type: 'usps_first_class',
            check_number: 10001,
            print_speed: 'core',
          },
          encoding: { to: {}, from: {}, merge_variables: {}, metadata: {} },
        },
        'multipart/form-data': {
          schema: z.xor([
            z
              .unknown()
              .superRefine((val, ctx) => {
                if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
                  if (!Object.hasOwn(val, 'message')) {
                    ctx.addIssue({ code: 'custom' })
                  }
                }
              })
              .openapi({ required: ['message'] })
              .and(
                EditableNoMailtypeSchema.and(
                  z
                    .object({
                      mail_type: z
                        .literal('usps_first_class')
                        .default('usps_first_class')
                        .exactOptional()
                        .openapi({ description: 'Checks must be sent `usps_first_class`' }),
                      memo: ((schema) =>
                        z.union([
                          schema,
                          z.preprocess((val) => (val === 'null' ? null : val), schema),
                        ]))(z.string().max(40).nullable())
                        .exactOptional()
                        .openapi({ description: 'Text to include on the memo line of the check.' }),
                      check_number: z
                        .preprocess(
                          (val) =>
                            typeof val === 'string' &&
                            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                              ? Number(val)
                              : val,
                          z.int().min(1).max(500000000),
                        )
                        .exactOptional()
                        .openapi({
                          description:
                            'An integer that designates the check number.\nIf `check_number` is not provided, checks created from a new `bank_account` will start at `10000` and increment with each check created with the `bank_account`.\nA provided `check_number` overrides the defaults. Subsequent checks created with the same `bank_account` will increment from the provided check number.',
                        }),
                      message: z
                        .string()
                        .max(400)
                        .exactOptional()
                        .openapi({
                          description:
                            'Max of 400 characters to be included at the bottom of the check page.',
                        }),
                      use_type: ((schema) =>
                        z.union([
                          schema,
                          z.preprocess((val) => (val === 'null' ? null : val), schema),
                        ]))(ChkUseTypeSchema).exactOptional(),
                    })
                    .openapi({ required: [] }),
                )
                  .and(CheckInputToSchema)
                  .and(
                    z
                      .object({
                        from: z
                          .xor([AdrIdSchema, InlineAddressUsSchema])
                          .openapi({
                            description:
                              'Must either be an address ID or an inline object with correct address parameters. Must either be an address ID or an inline object with correct address parameters. All addresses will be standardized into uppercase without being modified by verification.',
                          }),
                        bank_account: BankIdNoDescriptionSchema.and(
                          z
                            .string()
                            .openapi({ description: 'The id for a verified bank account.' }),
                        ),
                        amount: z
                          .preprocess(
                            (val) =>
                              typeof val === 'string' &&
                              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                ? Number(val)
                                : val,
                            z.float32().max(999999.99),
                          )
                          .openapi({
                            description:
                              'The payment amount to be sent in US dollars. Amounts will be rounded to two decimal places.',
                          }),
                        logo: z
                          .xor([
                            z
                              .string()
                              .regex(/^https:\/\/[-a-zA-Z0-9@:%._+~#=\/]{1,256}.(png|jpg)$/),
                            z
                              .string()
                              .regex(/^(?!https:\/\/)[a-zA-Z0-9@:%._+~#=\/]{1,256}.(png|jpg)$/),
                          ])
                          .exactOptional()
                          .openapi({
                            description:
                              'Accepts a remote URL or local file upload to an image to print (in grayscale) in the upper-left corner of your check. Image requirements:\n\n  * RGB or CMYK\n\n  * square\n\n  * minimum size: 100px x 100px\n\n  * transparent backgrond\n\n  * `png` or `jpg`',
                          }),
                        check_bottom: CheckBottomSchema.exactOptional(),
                        attachment: z
                          .xor([
                            HtmlStringSchema,
                            TmplIdSchema,
                            RemoteFileUrlSchema,
                            LocalFilePathSchema,
                          ])
                          .exactOptional()
                          .openapi({
                            description:
                              'A document to include with the check.\n\nNotes:\n- HTML merge variables should not include delimiting whitespace.\n- All pages of PDF, PNG, and JPGs must be sized at 8.5"x11" at 300 DPI, while supplied HTML will be rendered and trimmed to as many 8.5"x11" pages as necessary.\n- If a PDF is provided, it must be 6 pages or fewer.\n- The attachment will be printed double-sided in black & white and will be included in the envelope after the check page.\n- Please follow these <a href="https://s3-us-west-2.amazonaws.com/public.lob.com/assets/templates/check_attachment_template.pdf" target="_blank">design guidelines</a>.\n\nSee <a href="https://lob.com/pricing/print-mail#compare" target="_blank">pricing</a> for extra costs incurred. Need more help? Consult our [HTML examples](#section/HTML-Examples).',
                          }),
                        billing_group_id: BillingGroupIdSchema.exactOptional(),
                        use_type: ((schema) =>
                          z.union([
                            schema,
                            z.preprocess((val) => (val === 'null' ? null : val), schema),
                          ]))(ChkUseTypeSchema),
                        service_request_number: ((schema) =>
                          z.union([
                            schema,
                            z.preprocess((val) => (val === 'null' ? null : val), schema),
                          ]))(ServiceRequestNumberSchema).exactOptional(),
                        print_speed: ((schema) =>
                          z.union([
                            schema,
                            z.preprocess((val) => (val === 'null' ? null : val), schema),
                          ]))(PrintSpeedSchema).exactOptional(),
                      })
                      .openapi({ required: ['bank_account', 'to', 'from', 'amount', 'use_type'] }),
                  ),
              )
              .openapi({ title: 'words at check bottom' }),
            z
              .unknown()
              .superRefine((val, ctx) => {
                if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
                  if (!Object.hasOwn(val, 'check_bottom')) {
                    ctx.addIssue({ code: 'custom' })
                  }
                }
              })
              .openapi({ required: ['check_bottom'] })
              .and(
                EditableNoMailtypeSchema.and(
                  z
                    .object({
                      mail_type: z
                        .literal('usps_first_class')
                        .default('usps_first_class')
                        .exactOptional()
                        .openapi({ description: 'Checks must be sent `usps_first_class`' }),
                      memo: ((schema) =>
                        z.union([
                          schema,
                          z.preprocess((val) => (val === 'null' ? null : val), schema),
                        ]))(z.string().max(40).nullable())
                        .exactOptional()
                        .openapi({ description: 'Text to include on the memo line of the check.' }),
                      check_number: z
                        .preprocess(
                          (val) =>
                            typeof val === 'string' &&
                            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                              ? Number(val)
                              : val,
                          z.int().min(1).max(500000000),
                        )
                        .exactOptional()
                        .openapi({
                          description:
                            'An integer that designates the check number.\nIf `check_number` is not provided, checks created from a new `bank_account` will start at `10000` and increment with each check created with the `bank_account`.\nA provided `check_number` overrides the defaults. Subsequent checks created with the same `bank_account` will increment from the provided check number.',
                        }),
                      message: z
                        .string()
                        .max(400)
                        .exactOptional()
                        .openapi({
                          description:
                            'Max of 400 characters to be included at the bottom of the check page.',
                        }),
                      use_type: ((schema) =>
                        z.union([
                          schema,
                          z.preprocess((val) => (val === 'null' ? null : val), schema),
                        ]))(ChkUseTypeSchema).exactOptional(),
                    })
                    .openapi({ required: [] }),
                )
                  .and(CheckInputToSchema)
                  .and(
                    z
                      .object({
                        from: z
                          .xor([AdrIdSchema, InlineAddressUsSchema])
                          .openapi({
                            description:
                              'Must either be an address ID or an inline object with correct address parameters. Must either be an address ID or an inline object with correct address parameters. All addresses will be standardized into uppercase without being modified by verification.',
                          }),
                        bank_account: BankIdNoDescriptionSchema.and(
                          z
                            .string()
                            .openapi({ description: 'The id for a verified bank account.' }),
                        ),
                        amount: z
                          .preprocess(
                            (val) =>
                              typeof val === 'string' &&
                              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                ? Number(val)
                                : val,
                            z.float32().max(999999.99),
                          )
                          .openapi({
                            description:
                              'The payment amount to be sent in US dollars. Amounts will be rounded to two decimal places.',
                          }),
                        logo: z
                          .xor([
                            z
                              .string()
                              .regex(/^https:\/\/[-a-zA-Z0-9@:%._+~#=\/]{1,256}.(png|jpg)$/),
                            z
                              .string()
                              .regex(/^(?!https:\/\/)[a-zA-Z0-9@:%._+~#=\/]{1,256}.(png|jpg)$/),
                          ])
                          .exactOptional()
                          .openapi({
                            description:
                              'Accepts a remote URL or local file upload to an image to print (in grayscale) in the upper-left corner of your check. Image requirements:\n\n  * RGB or CMYK\n\n  * square\n\n  * minimum size: 100px x 100px\n\n  * transparent backgrond\n\n  * `png` or `jpg`',
                          }),
                        check_bottom: CheckBottomSchema.exactOptional(),
                        attachment: z
                          .xor([
                            HtmlStringSchema,
                            TmplIdSchema,
                            RemoteFileUrlSchema,
                            LocalFilePathSchema,
                          ])
                          .exactOptional()
                          .openapi({
                            description:
                              'A document to include with the check.\n\nNotes:\n- HTML merge variables should not include delimiting whitespace.\n- All pages of PDF, PNG, and JPGs must be sized at 8.5"x11" at 300 DPI, while supplied HTML will be rendered and trimmed to as many 8.5"x11" pages as necessary.\n- If a PDF is provided, it must be 6 pages or fewer.\n- The attachment will be printed double-sided in black & white and will be included in the envelope after the check page.\n- Please follow these <a href="https://s3-us-west-2.amazonaws.com/public.lob.com/assets/templates/check_attachment_template.pdf" target="_blank">design guidelines</a>.\n\nSee <a href="https://lob.com/pricing/print-mail#compare" target="_blank">pricing</a> for extra costs incurred. Need more help? Consult our [HTML examples](#section/HTML-Examples).',
                          }),
                        billing_group_id: BillingGroupIdSchema.exactOptional(),
                        use_type: ((schema) =>
                          z.union([
                            schema,
                            z.preprocess((val) => (val === 'null' ? null : val), schema),
                          ]))(ChkUseTypeSchema),
                        service_request_number: ((schema) =>
                          z.union([
                            schema,
                            z.preprocess((val) => (val === 'null' ? null : val), schema),
                          ]))(ServiceRequestNumberSchema).exactOptional(),
                        print_speed: ((schema) =>
                          z.union([
                            schema,
                            z.preprocess((val) => (val === 'null' ? null : val), schema),
                          ]))(PrintSpeedSchema).exactOptional(),
                      })
                      .openapi({ required: ['bank_account', 'to', 'from', 'amount', 'use_type'] }),
                  ),
              )
              .openapi({ title: 'image at check bottom' }),
          ]),
          example: {
            description: 'Demo Check',
            to: {
              description: 'Harry - Office',
              name: 'Harry Zhang',
              company: 'Lob',
              email: 'harry@lob.com',
              phone: '5555555555',
              address_line1: '210 King St',
              address_line2: '# 6100',
              address_city: 'San Francisco',
              address_state: 'CA',
              address_zip: '94107',
              address_country: 'US',
            },
            from: {
              name: 'Leore Avidar',
              address_line1: '210 King St',
              address_line2: '# 6100',
              address_city: 'San Francisco',
              address_state: 'CA',
              address_zip: '94107-1741',
            },
            bank_account: 'bank_8cad8df5354d33f',
            amount: 22.5,
            memo: 'rent',
            logo: 'https://s3-us-west-2.amazonaws.com/public.lob.com/assets/check_logo.png',
            check_bottom: 'tmpl_23668b406d5afef',
            merge_variables: { name: 'Harry' },
            metadata: { memo: 'rafting trip' },
            attachment: './cool.pdf',
            send_date: '2017-11-01T00:00:00.000Z',
            use_type: 'operational',
            mail_type: 'usps_first_class',
            check_number: 10001,
            print_speed: 'core',
          },
          encoding: { logo: { contentType: 'image/png, image/jpeg' } },
        },
      },
      required: true,
    },
  },
  responses: { 200: PostCheckResponse, default: MailpieceErrorResponse },
})

export const getChecksChkIdRoute = createRoute({
  method: 'get',
  path: '/checks/{chk_id}',
  tags: ['Checks'],
  summary: 'Retrieve',
  description:
    'Retrieves the details of an existing check. You need only supply the unique check identifier that was returned upon check creation.',
  operationId: 'check_retrieve',
  request: {
    params: z.object({
      chk_id: ChkIdSchema.openapi({
        param: {
          in: 'path',
          name: 'chk_id',
          description: 'id of the check',
          required: true,
          schema: { $ref: '#/components/schemas/chk_id' },
        },
      }),
    }),
  },
  responses: {
    200: { description: 'Returns a check object', content: {} },
    default: MailpieceErrorResponse,
  },
})

export const deleteChecksChkIdRoute = createRoute({
  method: 'delete',
  path: '/checks/{chk_id}',
  tags: ['Checks'],
  summary: 'Cancel',
  description:
    'Completely removes a check from production. This can only be done if the check has a `send_date` and the `send_date` has not yet passed. If the check is successfully canceled, you will not be charged for it. Read more on [cancellation windows](#section/Cancellation-Windows) and [scheduling](#section/Scheduled-Mailings). Scheduling and cancellation is a premium feature. Upgrade to the appropriate <a href="https://dashboard.lob.com/#/settings/editions" target="_blank">Print & Mail Edition</a> to gain access.',
  operationId: 'check_cancel',
  request: {
    params: z.object({
      chk_id: ChkIdSchema.openapi({
        param: {
          in: 'path',
          name: 'chk_id',
          description: 'id of the check',
          required: true,
          schema: { $ref: '#/components/schemas/chk_id' },
        },
      }),
    }),
  },
  responses: { 200: CheckCanceledResponse, default: MailpieceErrorResponse },
})

export const postCreativesRoute = createRoute({
  method: 'post',
  path: '/creatives',
  tags: ['Creatives'],
  summary: 'Create',
  description: 'Creates a new creative with the provided properties',
  operationId: 'creative_create',
  request: {
    headers: z.object({ 'x-lang-output': LangSpecParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: CreativeWritableSchema,
          example: {
            campaign_id: 'cmp_e05ee61ff80764b',
            resource_type: 'postcard',
            description: 'Our 4x6 postcard creative',
            details: {},
          },
        },
        'application/x-www-form-urlencoded': {
          schema: z.xor([
            z
              .object({
                resource_type: z
                  .literal('postcard')
                  .openapi({ description: 'Mailpiece type for the creative' }),
                campaign_id: CmpIdSchema,
                front: CrvFrontSchema,
                back: CrvBackSchema,
                details: WritableSchema,
              })
              .openapi({
                title: 'Postcard Creative',
                required: ['front', 'back', 'campaign_id', 'resource_type', 'details'],
              })
              .and(CreativeBaseSchema),
            z
              .object({
                resource_type: z
                  .literal('letter')
                  .openapi({ description: 'Mailpiece type for the creative' }),
                campaign_id: CmpIdSchema,
                details: z
                  .object({
                    address_placement: AddressPlacementSchema.exactOptional(),
                    add_on_types: z
                      .preprocess(
                        (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                        z.array(LetterAddOnTypesSchema).min(0).max(3),
                      )
                      .nullable()
                      .exactOptional()
                      .openapi({
                        description:
                          'An array containing the types of add-ons for the Letter Creative.',
                      }),
                    buckslips: z
                      .preprocess(
                        (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                        z.array(BuckslipIdSchema).min(0).max(1),
                      )
                      .nullable()
                      .exactOptional()
                      .openapi({
                        description:
                          'A single-element array containing an existing buckslip id in a string format. See [buckslips](#tag/Buckslips) for more information. Note that buckslip letter campaigns require a minimum send quantity of 5,000 letters per campaign.',
                      }),
                    cards: z
                      .preprocess(
                        (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                        z.array(CardIdSchema).min(0).max(1),
                      )
                      .nullable()
                      .exactOptional()
                      .openapi({
                        description:
                          'A single-element array containing an existing card id in a string format. See [cards](#tag/Cards) for more information.',
                      }),
                    color: z.preprocess(
                      ((read) => (val: unknown) => {
                        const result = read.safeParse(val)
                        return result.success ? result.data : val
                      })(z.stringbool()),
                      ColorSchema,
                    ),
                    custom_envelope: ((schema) =>
                      z.union([
                        schema,
                        z.preprocess((val) => (val === 'null' ? null : val), schema),
                      ]))(UserProvidedSchema).exactOptional(),
                    double_sided: z
                      .preprocess(
                        ((read) => (val: unknown) => {
                          const result = read.safeParse(val)
                          return result.success ? result.data : val
                        })(z.stringbool()),
                        DoubleSidedSchema,
                      )
                      .exactOptional(),
                    extra_service: ((schema) =>
                      z.union([
                        schema,
                        z.preprocess((val) => (val === 'null' ? null : val), schema),
                      ]))(ExtraServiceSchema).exactOptional(),
                    mail_type: MailTypeSchema.exactOptional(),
                    qr_code: QrCodeCampaignsSchema.exactOptional(),
                  })
                  .openapi({
                    description:
                      'Properties that the letters in your Creative should have. See the `qr_code` attribute below to add a QR code to your creative.',
                    required: ['color'],
                  }),
                file: CrvFileSchema,
              })
              .openapi({
                title: 'Letter Creative',
                required: ['file', 'from', 'campaign_id', 'resource_type', 'details'],
              })
              .and(CreativeBaseSchema),
            z
              .object({
                resource_type: z
                  .literal('self_mailer')
                  .openapi({ description: 'Mailpiece type for the creative' }),
                campaign_id: CmpIdSchema,
                inside: CrvInsideSchema,
                outside: CrvOutsideSchema,
                details: Writable_3Schema,
              })
              .openapi({
                title: 'Self Mailer Creative',
                required: ['inside', 'outside', 'campaign_id', 'resource_type', 'details'],
              })
              .and(CreativeBaseSchema),
          ]),
          example: {
            campaign_id: 'cmp_e05ee61ff80764b',
            resource_type: 'postcard',
            description: 'Our 4x6 postcard creative',
            details: {},
          },
          encoding: { 'example-prop': {} },
        },
        'multipart/form-data': {
          schema: z.xor([
            z
              .object({
                resource_type: z
                  .literal('postcard')
                  .openapi({ description: 'Mailpiece type for the creative' }),
                campaign_id: CmpIdSchema,
                front: CrvFrontSchema,
                back: CrvBackSchema,
                details: WritableSchema,
              })
              .openapi({
                title: 'Postcard Creative',
                required: ['front', 'back', 'campaign_id', 'resource_type', 'details'],
              })
              .and(CreativeBaseSchema),
            z
              .object({
                resource_type: z
                  .literal('letter')
                  .openapi({ description: 'Mailpiece type for the creative' }),
                campaign_id: CmpIdSchema,
                details: z
                  .object({
                    address_placement: AddressPlacementSchema.exactOptional(),
                    add_on_types: z
                      .preprocess(
                        (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                        z.array(LetterAddOnTypesSchema).min(0).max(3),
                      )
                      .nullable()
                      .exactOptional()
                      .openapi({
                        description:
                          'An array containing the types of add-ons for the Letter Creative.',
                      }),
                    buckslips: z
                      .preprocess(
                        (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                        z.array(BuckslipIdSchema).min(0).max(1),
                      )
                      .nullable()
                      .exactOptional()
                      .openapi({
                        description:
                          'A single-element array containing an existing buckslip id in a string format. See [buckslips](#tag/Buckslips) for more information. Note that buckslip letter campaigns require a minimum send quantity of 5,000 letters per campaign.',
                      }),
                    cards: z
                      .preprocess(
                        (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                        z.array(CardIdSchema).min(0).max(1),
                      )
                      .nullable()
                      .exactOptional()
                      .openapi({
                        description:
                          'A single-element array containing an existing card id in a string format. See [cards](#tag/Cards) for more information.',
                      }),
                    color: z.preprocess(
                      ((read) => (val: unknown) => {
                        const result = read.safeParse(val)
                        return result.success ? result.data : val
                      })(z.stringbool()),
                      ColorSchema,
                    ),
                    custom_envelope: ((schema) =>
                      z.union([
                        schema,
                        z.preprocess((val) => (val === 'null' ? null : val), schema),
                      ]))(UserProvidedSchema).exactOptional(),
                    double_sided: z
                      .preprocess(
                        ((read) => (val: unknown) => {
                          const result = read.safeParse(val)
                          return result.success ? result.data : val
                        })(z.stringbool()),
                        DoubleSidedSchema,
                      )
                      .exactOptional(),
                    extra_service: ((schema) =>
                      z.union([
                        schema,
                        z.preprocess((val) => (val === 'null' ? null : val), schema),
                      ]))(ExtraServiceSchema).exactOptional(),
                    mail_type: MailTypeSchema.exactOptional(),
                    qr_code: QrCodeCampaignsSchema.exactOptional(),
                  })
                  .openapi({
                    description:
                      'Properties that the letters in your Creative should have. See the `qr_code` attribute below to add a QR code to your creative.',
                    required: ['color'],
                  }),
                file: CrvFileSchema,
              })
              .openapi({
                title: 'Letter Creative',
                required: ['file', 'from', 'campaign_id', 'resource_type', 'details'],
              })
              .and(CreativeBaseSchema),
            z
              .object({
                resource_type: z
                  .literal('self_mailer')
                  .openapi({ description: 'Mailpiece type for the creative' }),
                campaign_id: CmpIdSchema,
                inside: CrvInsideSchema,
                outside: CrvOutsideSchema,
                details: Writable_3Schema,
              })
              .openapi({
                title: 'Self Mailer Creative',
                required: ['inside', 'outside', 'campaign_id', 'resource_type', 'details'],
              })
              .and(CreativeBaseSchema),
          ]),
          example: {
            campaign_id: 'cmp_e05ee61ff80764b',
            resource_type: 'postcard',
            description: 'Our 4x6 postcard creative',
            details: {},
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: 'Creative created successfully', content: {} },
    default: CreativesErrorResponse,
  },
})

export const getCreativesCrvIdRoute = createRoute({
  method: 'get',
  path: '/creatives/{crv_id}',
  tags: ['Creatives'],
  summary: 'Retrieve',
  description:
    'Retrieves the details of an existing creative. You need only supply the unique creative identifier that was returned upon creative creation.',
  operationId: 'creative_retrieve',
  request: {
    params: z.object({
      crv_id: CrvIdSchema.openapi({
        param: {
          in: 'path',
          name: 'crv_id',
          description: 'id of the creative',
          required: true,
          schema: { $ref: '#/components/schemas/crv_id' },
        },
      }),
    }),
  },
  responses: {
    200: { description: 'Returns a creative object', content: {} },
    default: CreativesErrorResponse,
  },
})

export const patchCreativesCrvIdRoute = createRoute({
  method: 'patch',
  path: '/creatives/{crv_id}',
  tags: ['Creatives'],
  summary: 'Update',
  description:
    'Update the details of an existing creative. You need only supply the unique identifier that was returned upon creative creation.',
  operationId: 'creative_update',
  request: {
    params: z.object({
      crv_id: CrvIdSchema.openapi({
        param: {
          in: 'path',
          name: 'crv_id',
          description: 'id of the creative',
          required: true,
          schema: { $ref: '#/components/schemas/crv_id' },
        },
      }),
    }),
    body: {
      content: {
        'application/json': {
          schema: CreativeBaseSchema,
          example: { description: 'Test creative' },
        },
        'application/x-www-form-urlencoded': {
          schema: CreativeBaseSchema,
          example: { description: 'Test creative' },
        },
        'multipart/form-data': {
          schema: CreativeBaseSchema,
          example: { description: 'Test creative' },
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: 'Returns a creative object', content: {} },
    default: CreativesErrorResponse,
  },
})

export const postIdentityValidationRoute = createRoute({
  method: 'post',
  path: '/identity_validation',
  tags: ['Identity Validation'],
  summary: 'Identity Validation',
  description: 'Validates whether a given name is associated with an address.',
  operationId: 'identity_validation',
  request: {
    body: {
      content: {
        'application/json': {
          schema: IdentityValidationWritableSchema,
          example: {
            recipient: 'Larry Lobster',
            primary_line: '210 King St.',
            secondary_line: '',
            city: 'San Francisco',
            state: 'CA',
            zip_code: '94107',
          },
        },
        'application/x-www-form-urlencoded': {
          schema: IdentityValidationWritableSchema,
          example: {
            recipient: 'Larry Lobster',
            primary_line: '210 King St.',
            secondary_line: '',
            city: 'San Francisco',
            state: 'CA',
            zip_code: '94107',
          },
        },
        'multipart/form-data': {
          schema: IdentityValidationWritableSchema,
          example: {
            recipient: 'Larry Lobster',
            primary_line: '210 King St.',
            secondary_line: '',
            city: 'San Francisco',
            state: 'CA',
            zip_code: '94107',
          },
        },
      },
      required: true,
    },
  },
  responses: { 200: IdentityValidationResponse, default: IdentityValidationErrorResponse },
})

export const getInformedDeliveryCampaignsRoute = createRoute({
  method: 'get',
  path: '/informed_delivery_campaigns',
  tags: ['Informed Delivery Campaign'],
  summary: 'List',
  description: 'List Informed Delivery campaigns',
  operationId: 'informed_delivery_campaign_list',
  responses: { 200: AllInformedDeliveryCampaignsResponse },
})

export const postInformedDeliveryCampaignsRoute = createRoute({
  method: 'post',
  path: '/informed_delivery_campaigns',
  tags: ['Informed Delivery Campaign'],
  summary: 'Create',
  description: 'Creates a new Informed Delivery campaign',
  operationId: 'informed_delivery_campaign_create',
  request: {
    body: {
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              quantity: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int().min(2).max(10000000),
                )
                .exactOptional()
                .openapi({
                  description:
                    'The number of mail pieces that will be part of this Informed Delivery campaign. USPS requires that IMB Codes are in sequence, so any mail pieces sent beyond this quantity will be rejected.\n',
                }),
              status: z.string().exactOptional(),
              ride_along_url: z
                .string()
                .regex(/^https:\/\/.{5,247}$/)
                .min(10)
                .max(255)
                .exactOptional()
                .openapi({
                  description:
                    'To qualify as part of a promotion, the base domain must match the domain used to register the promotion.\nI.e. If the promo was registered with https://lob.com then you could use any variation of https://lob.com such as\nhttps://lob.com/promotions/promo_123\n',
                }),
              start_date: z.iso
                .date()
                .exactOptional()
                .openapi({
                  description:
                    'The first date that mail can be handed off to USPS and still included in the informed delivery campaign.\nThe start date must be at least two days in the future. The end date will be automatically calculated to be 45 days from the start.\nFor Target Delivery Date, recommended to set the start date to the earliest possible date (2 days from now).\n',
                }),
              brand_name: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The brand name you would like included in the informed delivery email. Will default to the “company” on the users account.',
                }),
              usps_title: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Unique title for the campaign. One will be auto generated if not provided.',
                }),
              lob_campaign_id: ((schema) =>
                z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
                z
                  .string()
                  .regex(/^cmp_[a-zA-Z0-9]+$/)
                  .nullable(),
              )
                .exactOptional()
                .openapi({
                  description:
                    'When sending as part of Lob’s campaign workflow, include the lob_campaign_id as part of the request to associate this Informed Delivery campaign with the Lob campaign\n',
                }),
            })
            .openapi({ required: [] })
            .and(
              z
                .object({
                  ride_along_image: z
                    .object({})
                    .exactOptional()
                    .openapi({
                      description:
                        'JPG Image. Maximum file size is 200 KBs. Maximum pixel size is 300 pixels wide x 200 pixels high',
                    }),
                  representative_image: z
                    .object({})
                    .exactOptional()
                    .openapi({
                      description:
                        'JPG Image. Maximum file size is 200 KBs. Maximum pixel size is 300 pixels wide x 200 pixels high',
                    }),
                })
                .openapi({ required: [] }),
            )
            .and(
              z
                .object({
                  status: z
                    .literal('pending_approval')
                    .exactOptional()
                    .openapi({
                      description:
                        'If setting a campaign to `pending_approval` the Informed Delivery campaign will not be active, and you can not send mail using it.\nIt will be editable in this status however, and changes can be made until `approved`.\n**NOTE** that the default status is `approved` which makes the campaign active, but un-editable.\n',
                    }),
                })
                .openapi({
                  required: ['quantity', 'ride_along_image', 'ride_along_url', 'start_date'],
                }),
            ),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: 'Creative created successfully', content: {} },
    422: Writeable_422Response,
  },
})

export const getInformedDeliveryCampaignsUspsCampaignIdRoute = createRoute({
  method: 'get',
  path: '/informed_delivery_campaigns/{usps_campaign_id}',
  tags: ['Informed Delivery Campaign'],
  summary: 'Retrieve',
  description:
    'Retrieves the details of an existing Informed Delivery campaign. You need only supply the `usps_campaign_id` returned in the campaign creation request.',
  operationId: 'informed_delivery_campaign_retrieve',
  request: {
    params: z.object({
      usps_campaign_id: UspsCampaignIdSchema.openapi({
        param: {
          in: 'path',
          name: 'usps_campaign_id',
          description: 'usps_campaign_id of the Informed Delivery campaign',
          required: true,
          schema: { $ref: '#/components/schemas/usps_campaign_id' },
        },
      }),
    }),
  },
  responses: {
    200: { description: 'Returns a informed delivery campaign object', content: {} },
    404: _404Response,
  },
})

export const patchInformedDeliveryCampaignsUspsCampaignIdRoute = createRoute({
  method: 'patch',
  path: '/informed_delivery_campaigns/{usps_campaign_id}',
  tags: ['Informed Delivery Campaign'],
  summary: 'Update',
  description:
    'Update the details of an existing Informed Delivery campaign.<br> **NOTE:** you can only update a campaign in the `pending_approval` status.',
  operationId: 'informed_delivery_campaign_update',
  request: {
    params: z.object({
      usps_campaign_id: UspsCampaignIdSchema.openapi({
        param: {
          in: 'path',
          name: 'usps_campaign_id',
          description: 'usps_campaign_id of the Informed Delivery campaign',
          required: true,
          schema: { $ref: '#/components/schemas/usps_campaign_id' },
        },
      }),
    }),
    body: {
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              quantity: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int().min(2).max(10000000),
                )
                .exactOptional()
                .openapi({
                  description:
                    'The number of mail pieces that will be part of this Informed Delivery campaign. USPS requires that IMB Codes are in sequence, so any mail pieces sent beyond this quantity will be rejected.\n',
                }),
              status: z.string().exactOptional(),
              ride_along_url: z
                .string()
                .regex(/^https:\/\/.{5,247}$/)
                .min(10)
                .max(255)
                .exactOptional()
                .openapi({
                  description:
                    'To qualify as part of a promotion, the base domain must match the domain used to register the promotion.\nI.e. If the promo was registered with https://lob.com then you could use any variation of https://lob.com such as\nhttps://lob.com/promotions/promo_123\n',
                }),
              start_date: z.iso
                .date()
                .exactOptional()
                .openapi({
                  description:
                    'The first date that mail can be handed off to USPS and still included in the informed delivery campaign.\nThe start date must be at least two days in the future. The end date will be automatically calculated to be 45 days from the start.\nFor Target Delivery Date, recommended to set the start date to the earliest possible date (2 days from now).\n',
                }),
              brand_name: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The brand name you would like included in the informed delivery email. Will default to the “company” on the users account.',
                }),
              usps_title: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Unique title for the campaign. One will be auto generated if not provided.',
                }),
              lob_campaign_id: ((schema) =>
                z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
                z
                  .string()
                  .regex(/^cmp_[a-zA-Z0-9]+$/)
                  .nullable(),
              )
                .exactOptional()
                .openapi({
                  description:
                    'When sending as part of Lob’s campaign workflow, include the lob_campaign_id as part of the request to associate this Informed Delivery campaign with the Lob campaign\n',
                }),
            })
            .openapi({ required: [] })
            .and(
              z
                .object({
                  ride_along_image: z
                    .object({})
                    .exactOptional()
                    .openapi({
                      description:
                        'JPG Image. Maximum file size is 200 KBs. Maximum pixel size is 300 pixels wide x 200 pixels high',
                    }),
                  representative_image: z
                    .object({})
                    .exactOptional()
                    .openapi({
                      description:
                        'JPG Image. Maximum file size is 200 KBs. Maximum pixel size is 300 pixels wide x 200 pixels high',
                    }),
                })
                .openapi({ required: [] }),
            )
            .and(
              z
                .object({
                  status: z
                    .literal('approved')
                    .exactOptional()
                    .openapi({
                      description:
                        'After setting an Informed Delivery campaign to “approved” said campaign will activate, and you can start sending mail using it.\nYou will no longer be able to edit an Informed Delivery campaign in this status.\n',
                    }),
                })
                .openapi({ required: [] }),
            ),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: 'Returns an Informed Delivery campaign object', content: {} },
    404: _404Response,
    422: Writeable_422Response,
  },
})

export const postIntlVerificationsRoute = createRoute({
  method: 'post',
  path: '/intl_verifications',
  tags: ['Intl Verifications'],
  summary: 'Single Verify',
  description:
    'Verify an international (except US or US territories) address _with a live API key_. Requests to this endpoint with a test API key will return a dummy response based on the primary line you input.',
  operationId: 'intl_verification',
  request: {
    headers: z.object({ 'x-lang-output': LangSpecParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: IntlVerificationWritableSchema,
          examples: {
            basic: {
              value: {
                recipient: 'Harry Zhang',
                primary_line: '370 Water St',
                secondary_line: '',
                city: 'Summerside',
                state: 'Prince Edward Island',
                'postal code': 'C1N 1C4',
                country: 'CA',
              },
            },
            full_payload: {
              value: {
                recipient: 'Harry Zhang',
                primary_line: '370 Water St',
                secondary_line: '',
                city: 'Summerside',
                state: 'Prince Edward Island',
                'postal code': 'C1N 1C4',
                country: 'CA',
              },
            },
            single_line: { value: { address: '370 Water St C1N 1C4', country: 'CA' } },
            test: { value: { primary_line: 'deliverable', country: 'CA' } },
          },
        },
        'application/x-www-form-urlencoded': {
          schema: IntlVerificationWritableSchema,
          examples: {
            basic: {
              value: {
                recipient: 'Harry Zhang',
                primary_line: '370 Water St',
                secondary_line: '',
                city: 'Summerside',
                state: 'Prince Edward Island',
                'postal code': 'C1N 1C4',
                country: 'CA',
              },
            },
            full_payload: {
              value: {
                recipient: 'Harry Zhang',
                primary_line: '370 Water St',
                secondary_line: '',
                city: 'Summerside',
                state: 'Prince Edward Island',
                'postal code': 'C1N 1C4',
                country: 'CA',
              },
            },
            single_line: { value: { address: '370 Water St C1N 1C4', country: 'CA' } },
            test: { value: { primary_line: 'deliverable', country: 'CA' } },
          },
        },
        'multipart/form-data': {
          schema: IntlVerificationWritableSchema,
          examples: {
            basic: {
              value: {
                recipient: 'Harry Zhang',
                primary_line: '370 Water St',
                secondary_line: '',
                city: 'Summerside',
                state: 'Prince Edward Island',
                'postal code': 'C1N 1C4',
                country: 'CA',
              },
            },
            full_payload: {
              value: {
                recipient: 'Harry Zhang',
                primary_line: '370 Water St',
                secondary_line: '',
                city: 'Summerside',
                state: 'Prince Edward Island',
                'postal code': 'C1N 1C4',
                country: 'CA',
              },
            },
            single_line: { value: { address: '370 Water St C1N 1C4', country: 'CA' } },
            test: { value: { primary_line: 'deliverable', country: 'CA' } },
          },
        },
      },
      required: true,
    },
  },
  responses: { 200: IntlVerificationsResponse, default: IntlVerificationsErrorResponse },
})

export const getLettersLtrIdRoute = createRoute({
  method: 'get',
  path: '/letters/{ltr_id}',
  tags: ['Letters'],
  summary: 'Retrieve',
  description:
    'Retrieves the details of an existing letter. You need only supply the unique letter identifier that was returned upon letter creation.',
  operationId: 'letter_retrieve',
  request: {
    params: z.object({
      ltr_id: LtrIdSchema.openapi({
        param: {
          in: 'path',
          name: 'ltr_id',
          description: 'id of the letter',
          required: true,
          schema: { $ref: '#/components/schemas/ltr_id' },
        },
      }),
    }),
  },
  responses: {
    200: { description: 'Returns a letter object', content: {} },
    default: MailpieceErrorResponse,
  },
})

export const deleteLettersLtrIdRoute = createRoute({
  method: 'delete',
  path: '/letters/{ltr_id}',
  tags: ['Letters'],
  summary: 'Cancel',
  description:
    'Completely removes a letter from production. This can only be done if the letter has a `send_date` and the `send_date` has not yet passed. If the letter is successfully canceled, you will not be charged for it. Read more on [cancellation windows](#section/Cancellation-Windows) and [scheduling](#section/Scheduled-Mailings). Scheduling and cancellation is a premium feature. Upgrade to the appropriate <a href="https://dashboard.lob.com/#/settings/editions" target="_blank">Print & Mail Edition</a> to gain access.',
  operationId: 'letter_cancel',
  request: {
    params: z.object({
      ltr_id: LtrIdSchema.openapi({
        param: {
          in: 'path',
          name: 'ltr_id',
          description: 'id of the letter',
          required: true,
          schema: { $ref: '#/components/schemas/ltr_id' },
        },
      }),
    }),
  },
  responses: { 200: LetterDeletedResponse, default: MailpieceErrorResponse },
})

export const getLettersRoute = createRoute({
  method: 'get',
  path: '/letters',
  tags: ['Letters'],
  summary: 'List',
  description:
    'Returns a list of your letters. The letters are returned sorted by creation date, with the most recently created letters appearing first.',
  operationId: 'letters_list',
  request: {
    query: z
      .looseObject({})
      .transform((val) => {
        const rest: [string, unknown][] = []
        const groups = new Map<string, Record<string, unknown>>()
        const group = (name: string) => {
          const found = groups.get(name)
          if (found !== undefined) return found
          const made: Record<string, unknown> = Object.create(null)
          groups.set(name, made)
          return made
        }
        const isGroup = (item: unknown): item is Record<string, unknown> =>
          typeof item === 'object' && item !== null && !Array.isArray(item)
        const lists = new WeakSet<object>()
        const isIndex = (part: string | undefined) => part !== undefined && /^\d*$/.test(part)
        const child = (target: Record<string, unknown>, key: string, asList: boolean) => {
          const held = target[key]
          if (isGroup(held)) return held
          const made: Record<string, unknown> = Object.create(null)
          if (asList) lists.add(made)
          target[key] = made
          return made
        }
        const set = (
          root: Record<string, unknown>,
          path: readonly string[],
          item: unknown,
        ): void => {
          const work: [Record<string, unknown>, number, unknown, boolean][] = [
            [root, 0, item, false],
          ]
          for (let job = work.pop(); job !== undefined; job = work.pop()) {
            const [target, at, value, split] = job
            const head = path[at]
            if (head === undefined) continue
            const next = path[at + 1]
            if (head === '') {
              if (!split && Array.isArray(value)) {
                for (let i = value.length - 1; i >= 0; i -= 1)
                  work.push([target, at, value[i], true])
                continue
              }
              const size = Object.keys(target).length
              if (next === undefined) {
                target[String(size)] = value
                continue
              }
              const free =
                next === ''
                  ? -1
                  : Object.values(target).findIndex((held) => isGroup(held) && !(next in held))
              work.push([
                child(target, String(free < 0 ? size : free), isIndex(next)),
                at + 1,
                value,
                false,
              ])
              continue
            }
            if (next === undefined) {
              target[head] = value
              continue
            }
            work.push([child(target, head, isIndex(next)), at + 1, value, false])
          }
        }
        const settle = (root: unknown): unknown => {
          if (!isGroup(root)) return root
          const found: [Record<string, unknown>, string, Record<string, unknown>][] = []
          const queue: Record<string, unknown>[] = [root]
          for (const node of queue) {
            for (const [key, inner] of Object.entries(node)) {
              if (isGroup(inner)) {
                found.push([node, key, inner])
                queue.push(inner)
              }
            }
          }
          const finish = (group: Record<string, unknown>): unknown =>
            lists.has(group)
              ? Object.entries(group)
                  .sort((a, b) => Number(a[0]) - Number(b[0]))
                  .map(([, inner]) => inner)
              : Object.assign(Object.create(null), group)
          for (const [parent, key, group] of found.reverse()) {
            parent[key] = finish(group)
          }
          return finish(root)
        }
        const deep: string[] = ['date_created', 'metadata']
        for (const [key, item] of Object.entries(val)) {
          const match = /^([^\[\]]+)((?:\[[^\[\]]*\])+)$/.exec(key)
          const name = match?.[1]
          const path = match?.[2]
          if (name !== undefined && path !== undefined && deep.includes(name)) {
            const parts = path.slice(1, -1).split('][')
            set(group(name), parts, item)
            continue
          }
          rest.push([key, item])
        }
        return Object.fromEntries([
          ...rest,
          ...[...groups].map(([name, held]) => [name, settle(held)] as const),
        ])
      })
      .pipe(
        z.object({
          limit: LimitParamsSchema,
          'before/after': BeforeAfterParamsSchema,
          include: IncludeParamsSchema,
          date_created: DateCreatedParamsSchema,
          metadata: MetadataParamsSchema,
          campaign_id: CampaignIdParamsSchema,
          status: StatusParamsSchema,
          color: z
            .stringbool()
            .exactOptional()
            .openapi({
              param: {
                in: 'query',
                name: 'color',
                description:
                  'Set to `true` to return only color letters. Set to `false` to return only black & white letters.',
                schema: { type: 'boolean' },
                required: false,
              },
            }),
          scheduled: ScheduledParamsSchema,
          send_date: SendDateParamsSchema,
          mail_type: MailTypeParamsSchema,
          sort_by: SortByParamsSchema,
        }),
      ),
  },
  responses: { 200: AllLettersResponse, default: MailpieceErrorResponse },
})

export const postLettersRoute = createRoute({
  method: 'post',
  path: '/letters',
  tags: ['Letters'],
  summary: 'Create',
  description: 'Creates a new letter given information',
  operationId: 'letter_create',
  request: {
    headers: z.object({
      'Idempotency-Key': IdemHeaderParamsSchema,
      'Lob-Version': LobVersionParamsSchema,
    }),
    query: z.object({ idempotency_key: IdemQueryParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: LetterEditableSchema,
          example: {
            description: 'demo',
            to: {
              description: 'Harry - Office',
              name: 'Harry Zhang',
              company: 'Lob',
              email: 'harry@lob.com',
              phone: '5555555555',
              address_line1: '210 King St',
              address_line2: '# 6100',
              address_city: 'San Francisco',
              address_state: 'CA',
              address_zip: '94107',
              address_country: 'US',
            },
            from: {
              name: 'Harry',
              address_line1: '210 King St',
              address_line2: '# 6100',
              address_city: 'San Francisco',
              address_state: 'CA',
              address_zip: '94107',
            },
            file: "<html style='padding-top: 3in; margin: .5in;'>HTML Letter for {{name}}</html>",
            color: true,
            cards: ['card_c51ae96f5cebf3e'],
            double_sided: false,
            address_placement: 'bottom_first_page',
            mail_type: 'usps_first_class',
            return_envelope: true,
            perforated_page: 1,
            merge_variables: { name: 'Harry' },
            metadata: { spiffy: 'true' },
            send_date: '2017-11-01T00:00:00.000Z',
            extra_service: 'registered',
            custom_envelope: null,
            use_type: 'marketing',
            qr_code: {
              position: 'relative',
              redirect_url: 'https://www.lob.com',
              width: '2',
              top: '2',
              right: '2',
              pages: '1-2,4-5',
            },
            fsc: true,
            print_speed: 'core',
          },
        },
        'application/x-www-form-urlencoded': {
          schema: InputToSchema.and(InputFromSchema)
            .and(EditableSchema)
            .and(
              z
                .object({
                  file: LtrFileSchema,
                  extra_service: ((schema) =>
                    z.union([
                      schema,
                      z.preprocess((val) => (val === 'null' ? null : val), schema),
                    ]))(ExtraServiceSchema).exactOptional(),
                  cards: z
                    .preprocess(
                      (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                      z.array(CardIdSchema).min(0).max(1),
                    )
                    .nullable()
                    .exactOptional()
                    .openapi({
                      description:
                        'A single-element array containing an existing card id in a string format. See [cards](#tag/Cards) for more information. Not available for `us_legal` letter size.',
                    }),
                  mail_type: MailTypeSchema.exactOptional(),
                  color: z
                    .preprocess(
                      ((read) => (val: unknown) => {
                        const result = read.safeParse(val)
                        return result.success ? result.data : val
                      })(z.stringbool()),
                      ColorSchema,
                    )
                    .and(z.any().default(false)),
                  double_sided: z
                    .preprocess(
                      ((read) => (val: unknown) => {
                        const result = read.safeParse(val)
                        return result.success ? result.data : val
                      })(z.stringbool()),
                      DoubleSidedSchema,
                    )
                    .exactOptional(),
                  address_placement: AddressPlacementSchema.exactOptional(),
                  return_envelope: ((schema) =>
                    z.union([
                      z.preprocess(
                        ((read) => (val: unknown) => {
                          const result = read.safeParse(val)
                          return result.success ? result.data : val
                        })(z.stringbool()),
                        schema,
                      ),
                      schema,
                    ]))(UserProvided_2Schema).exactOptional(),
                  perforated_page: z
                    .preprocess(
                      (val) => (val === 'null' ? null : val),
                      z
                        .preprocess(
                          (val) =>
                            typeof val === 'string' &&
                            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                              ? Number(val)
                              : val,
                          z.int(),
                        )
                        .nullable(),
                    )
                    .exactOptional()
                    .openapi({
                      description:
                        'Required if `return_envelope` is `true`. The number of the page that should be perforated for use with the return envelope. Must be greater than or equal to `1`. The blank page added by `address_placement=insert_blank_page` will be ignored when considering the perforated page number. To see how perforation will impact your letter design, view our <a href="https://s3-us-west-2.amazonaws.com/public.lob.com/assets/templates/letter_perf_template.pdf" target="_blank">perforation guide</a>.',
                    }),
                  custom_envelope: ((schema) =>
                    z.union([
                      schema,
                      z.preprocess((val) => (val === 'null' ? null : val), schema),
                    ]))(UserProvidedSchema).exactOptional(),
                  billing_group_id: BillingGroupIdSchema.exactOptional(),
                  qr_code: z
                    .object({
                      position: z
                        .literal('relative')
                        .openapi({
                          description:
                            "Sets how a QR code is being positioned in the document. Together with this, you should provide one of 'top' or 'bottom', and one of 'left' or 'right'.",
                        }),
                      top: z
                        .preprocess(
                          (val) =>
                            typeof val === 'string' &&
                            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                              ? Number(val)
                              : val,
                          z.number(),
                        )
                        .exactOptional()
                        .openapi({
                          description:
                            'Vertical distance (in inches) to place QR code from the top. Only allowed if "bottom" isn\'t provided.',
                        }),
                      right: z
                        .preprocess(
                          (val) =>
                            typeof val === 'string' &&
                            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                              ? Number(val)
                              : val,
                          z.number(),
                        )
                        .exactOptional()
                        .openapi({
                          description:
                            'Horizontal distance (in inches) to place QR code from the right. Only allowed if "left" isn\'t provided.',
                        }),
                      left: z
                        .preprocess(
                          (val) =>
                            typeof val === 'string' &&
                            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                              ? Number(val)
                              : val,
                          z.number(),
                        )
                        .exactOptional()
                        .openapi({
                          description:
                            'Horizontal distance (in inches) to place QR code from the left. Only allowed if "right" isn\'t provided.',
                        }),
                      bottom: z
                        .preprocess(
                          (val) =>
                            typeof val === 'string' &&
                            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                              ? Number(val)
                              : val,
                          z.number(),
                        )
                        .exactOptional()
                        .openapi({
                          description:
                            'Vertical distance (in inches) to place QR code from the bottom. Only allowed if "top" isn\'t provided.',
                        }),
                      redirect_url: z
                        .string()
                        .openapi({
                          description:
                            'The url to redirect the user when a QR code is scanned. The URL can be a literal URL, a template URL containing merge variables, or consist entirely of merge variables. For example, `https://www.example.com` or `https://www.example.com?q={{name}}` or `{{name}}`, respectively. When a merge variable exists in the URL, it is replaced with data from merge_variables. If the variable does not exist, then nothing with be replaced and the destination URL will be the same as the input URL. More details on merge variables can be found in <a href="https://help.lob.com/print-and-mail/designing-mail-creatives/adding-qr-codes#destination-url-and-redirects" target="_blank">our help center</a>.',
                        }),
                      width: z
                        .preprocess(
                          (val) =>
                            typeof val === 'string' &&
                            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                              ? Number(val)
                              : val,
                          z.number(),
                        )
                        .openapi({
                          description:
                            'The size (in inches) of the QR code with a minimum of 1 inch. All QR codes are generated as a square.',
                        }),
                      pages: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            'Specify the pages where the QR code should be stamped in a comma separated format. Your QR code can be printed in the same position on multiple pages. For postcards, the values should either be "front", "back" (for either front or back) or "front,back" (for the QR code to be printed on both sides). For self-mailers and snap packs, the values should either be "inside", "outside" (for either inside or outside) or "inside,outside" (for the QR code to be printed on both sides). For letters and booklets, the values can be specific page numbers ("1", "3"), page number ranges such as "1-3", or a comma separated combination of both ("1,3,5-7").',
                        }),
                      logo: z
                        .object({
                          url: z
                            .string()
                            .regex(/^https:\/\/[-a-zA-Z0-9@:%._+~#=\/]{1,256}.(png|jpe?g)$/)
                            .exactOptional()
                            .openapi({
                              description:
                                'The public URL of the logo image to be retrieved and placed over the center of the QR code.',
                            }),
                        })
                        .exactOptional()
                        .openapi({
                          description:
                            'Allows specifying a logo to be placed over the center of the QR code.  Logos must be in PNG or JPEG format and have a maximum file size of 1 MB.',
                          required: [],
                        }),
                      style: z
                        .object({
                          background_color: z
                            .string()
                            .regex(/^#[A-Fa-f0-9]{6}$/)
                            .exactOptional()
                            .openapi({
                              description:
                                'The background color of the QR code in hexadecimal format. For example, `#000000` is black and `#FFFFFF` is white.',
                            }),
                          foreground_color: z
                            .string()
                            .regex(/^#[A-Fa-f0-9]{6}$/)
                            .exactOptional()
                            .openapi({
                              description:
                                'The foreground color of the QR code in hexadecimal format. For example, `#000000` is black and `#FFFFFF` is white.',
                            }),
                        })
                        .exactOptional()
                        .openapi({
                          description: 'Customizes the appearance of the QR code.',
                          required: [],
                        }),
                    })
                    .exactOptional()
                    .openapi({
                      description:
                        'Customize and place a QR code on the creative at the required position.',
                      required: ['position', 'redirect_url', 'width'],
                    }),
                  use_type: ((schema) =>
                    z.union([
                      schema,
                      z.preprocess((val) => (val === 'null' ? null : val), schema),
                    ]))(LtrUseTypeSchema),
                  service_request_number: ((schema) =>
                    z.union([
                      schema,
                      z.preprocess((val) => (val === 'null' ? null : val), schema),
                    ]))(ServiceRequestNumberSchema).exactOptional(),
                  fsc: z
                    .preprocess(
                      ((read) => (val: unknown) => {
                        const result = read.safeParse(val)
                        return result.success ? result.data : val
                      })(z.stringbool()),
                      z.boolean(),
                    )
                    .default(false)
                    .exactOptional()
                    .openapi({
                      description:
                        'This is in beta. Contact support@lob.com or your account contact to learn more. Not available for `A4` and `us_legal` letter size.',
                    }),
                  size: LtrSizeSchema.exactOptional(),
                  print_speed: ((schema) =>
                    z.union([
                      schema,
                      z.preprocess((val) => (val === 'null' ? null : val), schema),
                    ]))(PrintSpeedSchema).exactOptional(),
                })
                .openapi({ required: ['to', 'from', 'file', 'color', 'use_type'] }),
            ),
          example: {
            description: 'demo',
            to: {
              description: 'Harry - Office',
              name: 'Harry Zhang',
              company: 'Lob',
              email: 'harry@lob.com',
              phone: '5555555555',
              address_line1: '210 King St',
              address_line2: '# 6100',
              address_city: 'San Francisco',
              address_state: 'CA',
              address_zip: '94107',
              address_country: 'US',
            },
            from: {
              name: 'Harry',
              address_line1: '210 King St',
              address_line2: '# 6100',
              address_city: 'San Francisco',
              address_state: 'CA',
              address_zip: '94107',
            },
            file: "<html style='padding-top: 3in; margin: .5in;'>HTML Letter for {{name}}</html>",
            color: true,
            cards: ['card_c51ae96f5cebf3e'],
            double_sided: false,
            address_placement: 'top_first_page',
            mail_type: 'usps_first_class',
            return_envelope: true,
            perforated_page: 1,
            merge_variables: { name: 'Harry' },
            metadata: { spiffy: 'true' },
            send_date: '2017-11-01T00:00:00.000Z',
            extra_service: 'registered',
            custom_envelope: null,
            use_type: 'marketing',
            qr_code: {
              position: 'relative',
              redirect_url: 'https://www.lob.com',
              width: '2',
              bottom: '2',
              right: '2',
              pages: '1,4',
            },
            fsc: true,
            print_speed: 'core',
          },
          encoding: { to: {}, from: {}, merge_variables: {}, metadata: {} },
        },
        'multipart/form-data': {
          schema: InputToSchema.and(InputFromSchema)
            .and(EditableSchema)
            .and(
              z
                .object({
                  file: LtrFileSchema,
                  extra_service: ((schema) =>
                    z.union([
                      schema,
                      z.preprocess((val) => (val === 'null' ? null : val), schema),
                    ]))(ExtraServiceSchema).exactOptional(),
                  cards: z
                    .preprocess(
                      (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                      z.array(CardIdSchema).min(0).max(1),
                    )
                    .nullable()
                    .exactOptional()
                    .openapi({
                      description:
                        'A single-element array containing an existing card id in a string format. See [cards](#tag/Cards) for more information. Not available for `us_legal` letter size.',
                    }),
                  mail_type: MailTypeSchema.exactOptional(),
                  color: z
                    .preprocess(
                      ((read) => (val: unknown) => {
                        const result = read.safeParse(val)
                        return result.success ? result.data : val
                      })(z.stringbool()),
                      ColorSchema,
                    )
                    .and(z.any().default(false)),
                  double_sided: z
                    .preprocess(
                      ((read) => (val: unknown) => {
                        const result = read.safeParse(val)
                        return result.success ? result.data : val
                      })(z.stringbool()),
                      DoubleSidedSchema,
                    )
                    .exactOptional(),
                  address_placement: AddressPlacementSchema.exactOptional(),
                  return_envelope: ((schema) =>
                    z.union([
                      z.preprocess(
                        ((read) => (val: unknown) => {
                          const result = read.safeParse(val)
                          return result.success ? result.data : val
                        })(z.stringbool()),
                        schema,
                      ),
                      schema,
                    ]))(UserProvided_2Schema).exactOptional(),
                  perforated_page: z
                    .preprocess(
                      (val) => (val === 'null' ? null : val),
                      z
                        .preprocess(
                          (val) =>
                            typeof val === 'string' &&
                            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                              ? Number(val)
                              : val,
                          z.int(),
                        )
                        .nullable(),
                    )
                    .exactOptional()
                    .openapi({
                      description:
                        'Required if `return_envelope` is `true`. The number of the page that should be perforated for use with the return envelope. Must be greater than or equal to `1`. The blank page added by `address_placement=insert_blank_page` will be ignored when considering the perforated page number. To see how perforation will impact your letter design, view our <a href="https://s3-us-west-2.amazonaws.com/public.lob.com/assets/templates/letter_perf_template.pdf" target="_blank">perforation guide</a>.',
                    }),
                  custom_envelope: ((schema) =>
                    z.union([
                      schema,
                      z.preprocess((val) => (val === 'null' ? null : val), schema),
                    ]))(UserProvidedSchema).exactOptional(),
                  billing_group_id: BillingGroupIdSchema.exactOptional(),
                  qr_code: z
                    .object({
                      position: z
                        .literal('relative')
                        .openapi({
                          description:
                            "Sets how a QR code is being positioned in the document. Together with this, you should provide one of 'top' or 'bottom', and one of 'left' or 'right'.",
                        }),
                      top: z
                        .preprocess(
                          (val) =>
                            typeof val === 'string' &&
                            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                              ? Number(val)
                              : val,
                          z.number(),
                        )
                        .exactOptional()
                        .openapi({
                          description:
                            'Vertical distance (in inches) to place QR code from the top. Only allowed if "bottom" isn\'t provided.',
                        }),
                      right: z
                        .preprocess(
                          (val) =>
                            typeof val === 'string' &&
                            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                              ? Number(val)
                              : val,
                          z.number(),
                        )
                        .exactOptional()
                        .openapi({
                          description:
                            'Horizontal distance (in inches) to place QR code from the right. Only allowed if "left" isn\'t provided.',
                        }),
                      left: z
                        .preprocess(
                          (val) =>
                            typeof val === 'string' &&
                            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                              ? Number(val)
                              : val,
                          z.number(),
                        )
                        .exactOptional()
                        .openapi({
                          description:
                            'Horizontal distance (in inches) to place QR code from the left. Only allowed if "right" isn\'t provided.',
                        }),
                      bottom: z
                        .preprocess(
                          (val) =>
                            typeof val === 'string' &&
                            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                              ? Number(val)
                              : val,
                          z.number(),
                        )
                        .exactOptional()
                        .openapi({
                          description:
                            'Vertical distance (in inches) to place QR code from the bottom. Only allowed if "top" isn\'t provided.',
                        }),
                      redirect_url: z
                        .string()
                        .openapi({
                          description:
                            'The url to redirect the user when a QR code is scanned. The URL can be a literal URL, a template URL containing merge variables, or consist entirely of merge variables. For example, `https://www.example.com` or `https://www.example.com?q={{name}}` or `{{name}}`, respectively. When a merge variable exists in the URL, it is replaced with data from merge_variables. If the variable does not exist, then nothing with be replaced and the destination URL will be the same as the input URL. More details on merge variables can be found in <a href="https://help.lob.com/print-and-mail/designing-mail-creatives/adding-qr-codes#destination-url-and-redirects" target="_blank">our help center</a>.',
                        }),
                      width: z
                        .preprocess(
                          (val) =>
                            typeof val === 'string' &&
                            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                              ? Number(val)
                              : val,
                          z.number(),
                        )
                        .openapi({
                          description:
                            'The size (in inches) of the QR code with a minimum of 1 inch. All QR codes are generated as a square.',
                        }),
                      pages: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            'Specify the pages where the QR code should be stamped in a comma separated format. Your QR code can be printed in the same position on multiple pages. For postcards, the values should either be "front", "back" (for either front or back) or "front,back" (for the QR code to be printed on both sides). For self-mailers and snap packs, the values should either be "inside", "outside" (for either inside or outside) or "inside,outside" (for the QR code to be printed on both sides). For letters and booklets, the values can be specific page numbers ("1", "3"), page number ranges such as "1-3", or a comma separated combination of both ("1,3,5-7").',
                        }),
                      logo: z
                        .object({
                          url: z
                            .string()
                            .regex(/^https:\/\/[-a-zA-Z0-9@:%._+~#=\/]{1,256}.(png|jpe?g)$/)
                            .exactOptional()
                            .openapi({
                              description:
                                'The public URL of the logo image to be retrieved and placed over the center of the QR code.',
                            }),
                        })
                        .exactOptional()
                        .openapi({
                          description:
                            'Allows specifying a logo to be placed over the center of the QR code.  Logos must be in PNG or JPEG format and have a maximum file size of 1 MB.',
                          required: [],
                        }),
                      style: z
                        .object({
                          background_color: z
                            .string()
                            .regex(/^#[A-Fa-f0-9]{6}$/)
                            .exactOptional()
                            .openapi({
                              description:
                                'The background color of the QR code in hexadecimal format. For example, `#000000` is black and `#FFFFFF` is white.',
                            }),
                          foreground_color: z
                            .string()
                            .regex(/^#[A-Fa-f0-9]{6}$/)
                            .exactOptional()
                            .openapi({
                              description:
                                'The foreground color of the QR code in hexadecimal format. For example, `#000000` is black and `#FFFFFF` is white.',
                            }),
                        })
                        .exactOptional()
                        .openapi({
                          description: 'Customizes the appearance of the QR code.',
                          required: [],
                        }),
                    })
                    .exactOptional()
                    .openapi({
                      description:
                        'Customize and place a QR code on the creative at the required position.',
                      required: ['position', 'redirect_url', 'width'],
                    }),
                  use_type: ((schema) =>
                    z.union([
                      schema,
                      z.preprocess((val) => (val === 'null' ? null : val), schema),
                    ]))(LtrUseTypeSchema),
                  service_request_number: ((schema) =>
                    z.union([
                      schema,
                      z.preprocess((val) => (val === 'null' ? null : val), schema),
                    ]))(ServiceRequestNumberSchema).exactOptional(),
                  fsc: z
                    .preprocess(
                      ((read) => (val: unknown) => {
                        const result = read.safeParse(val)
                        return result.success ? result.data : val
                      })(z.stringbool()),
                      z.boolean(),
                    )
                    .default(false)
                    .exactOptional()
                    .openapi({
                      description:
                        'This is in beta. Contact support@lob.com or your account contact to learn more. Not available for `A4` and `us_legal` letter size.',
                    }),
                  size: LtrSizeSchema.exactOptional(),
                  print_speed: ((schema) =>
                    z.union([
                      schema,
                      z.preprocess((val) => (val === 'null' ? null : val), schema),
                    ]))(PrintSpeedSchema).exactOptional(),
                })
                .openapi({ required: ['to', 'from', 'file', 'color', 'use_type'] }),
            ),
          example: {
            description: 'demo',
            to: {
              description: 'Harry - Office',
              name: 'Harry Zhang',
              company: 'Lob',
              email: 'harry@lob.com',
              phone: '5555555555',
              address_line1: '210 King St',
              address_line2: '# 6100',
              address_city: 'San Francisco',
              address_state: 'CA',
              address_zip: '94107',
              address_country: 'US',
            },
            from: {
              name: 'Harry',
              address_line1: '210 King St',
              address_line2: '# 6100',
              address_city: 'San Francisco',
              address_state: 'CA',
              address_zip: '94107',
            },
            file: "<html style='padding-top: 3in; margin: .5in;'>HTML Letter for {{name}}</html>",
            color: true,
            cards: ['card_c51ae96f5cebf3e'],
            double_sided: false,
            address_placement: 'top_first_page',
            mail_type: 'usps_first_class',
            return_envelope: true,
            perforated_page: 1,
            merge_variables: { name: 'Harry' },
            metadata: { spiffy: 'true' },
            send_date: '2017-11-01T00:00:00.000Z',
            extra_service: 'registered',
            custom_envelope: null,
            use_type: 'marketing',
            qr_code: {
              position: 'relative',
              redirect_url: 'https://www.lob.com',
              width: '2',
              bottom: '2',
              left: '2',
              pages: '1,3-5',
            },
            fsc: 'true,',
            print_speed: 'core',
          },
        },
      },
      required: true,
    },
  },
  responses: { 200: PostLetterResponse, default: MailpieceErrorResponse },
})

export const getPostcardsPscIdRoute = createRoute({
  method: 'get',
  path: '/postcards/{psc_id}',
  tags: ['Postcards'],
  summary: 'Retrieve',
  description:
    'Retrieves the details of an existing postcard. You need only supply the unique customer identifier that was returned upon postcard creation.',
  operationId: 'postcard_retrieve',
  request: {
    params: z.object({
      psc_id: PscIdSchema.openapi({
        param: {
          in: 'path',
          name: 'psc_id',
          description: 'id of the postcard',
          required: true,
          schema: { $ref: '#/components/schemas/psc_id' },
        },
      }),
    }),
  },
  responses: {
    200: { description: 'Returns a postcard object', content: {} },
    default: MailpieceErrorResponse,
  },
})

export const deletePostcardsPscIdRoute = createRoute({
  method: 'delete',
  path: '/postcards/{psc_id}',
  tags: ['Postcards'],
  summary: 'Cancel',
  description:
    'Completely removes a postcard from production. This can only be done if the postcard has a `send_date` and the `send_date` has not yet passed. If the postcard is successfully canceled, you will not be charged for it. Read more on [cancellation windows](#section/Cancellation-Windows) and [scheduling](#section/Scheduled-Mailings). Scheduling and cancellation is a premium feature. Upgrade to the appropriate <a href="https://dashboard.lob.com/#/settings/editions" target="_blank">Print & Mail Edition</a> to gain access.',
  operationId: 'postcard_delete',
  request: {
    params: z.object({
      psc_id: PscIdSchema.openapi({
        param: {
          in: 'path',
          name: 'psc_id',
          description: 'id of the postcard',
          required: true,
          schema: { $ref: '#/components/schemas/psc_id' },
        },
      }),
    }),
  },
  responses: { 200: PostcardDeletedResponse, default: MailpieceErrorResponse },
})

export const getPostcardsRoute = createRoute({
  method: 'get',
  path: '/postcards',
  tags: ['Postcards'],
  summary: 'List',
  description:
    'Returns a list of your postcards. The addresses are returned sorted by creation date, with the most recently created addresses appearing first.',
  operationId: 'postcards_list',
  request: {
    query: z
      .looseObject({})
      .transform((val) => {
        const rest: [string, unknown][] = []
        const groups = new Map<string, Record<string, unknown>>()
        const group = (name: string) => {
          const found = groups.get(name)
          if (found !== undefined) return found
          const made: Record<string, unknown> = Object.create(null)
          groups.set(name, made)
          return made
        }
        const isGroup = (item: unknown): item is Record<string, unknown> =>
          typeof item === 'object' && item !== null && !Array.isArray(item)
        const lists = new WeakSet<object>()
        const isIndex = (part: string | undefined) => part !== undefined && /^\d*$/.test(part)
        const child = (target: Record<string, unknown>, key: string, asList: boolean) => {
          const held = target[key]
          if (isGroup(held)) return held
          const made: Record<string, unknown> = Object.create(null)
          if (asList) lists.add(made)
          target[key] = made
          return made
        }
        const set = (
          root: Record<string, unknown>,
          path: readonly string[],
          item: unknown,
        ): void => {
          const work: [Record<string, unknown>, number, unknown, boolean][] = [
            [root, 0, item, false],
          ]
          for (let job = work.pop(); job !== undefined; job = work.pop()) {
            const [target, at, value, split] = job
            const head = path[at]
            if (head === undefined) continue
            const next = path[at + 1]
            if (head === '') {
              if (!split && Array.isArray(value)) {
                for (let i = value.length - 1; i >= 0; i -= 1)
                  work.push([target, at, value[i], true])
                continue
              }
              const size = Object.keys(target).length
              if (next === undefined) {
                target[String(size)] = value
                continue
              }
              const free =
                next === ''
                  ? -1
                  : Object.values(target).findIndex((held) => isGroup(held) && !(next in held))
              work.push([
                child(target, String(free < 0 ? size : free), isIndex(next)),
                at + 1,
                value,
                false,
              ])
              continue
            }
            if (next === undefined) {
              target[head] = value
              continue
            }
            work.push([child(target, head, isIndex(next)), at + 1, value, false])
          }
        }
        const settle = (root: unknown): unknown => {
          if (!isGroup(root)) return root
          const found: [Record<string, unknown>, string, Record<string, unknown>][] = []
          const queue: Record<string, unknown>[] = [root]
          for (const node of queue) {
            for (const [key, inner] of Object.entries(node)) {
              if (isGroup(inner)) {
                found.push([node, key, inner])
                queue.push(inner)
              }
            }
          }
          const finish = (group: Record<string, unknown>): unknown =>
            lists.has(group)
              ? Object.entries(group)
                  .sort((a, b) => Number(a[0]) - Number(b[0]))
                  .map(([, inner]) => inner)
              : Object.assign(Object.create(null), group)
          for (const [parent, key, group] of found.reverse()) {
            parent[key] = finish(group)
          }
          return finish(root)
        }
        const deep: string[] = ['date_created', 'metadata']
        for (const [key, item] of Object.entries(val)) {
          const match = /^([^\[\]]+)((?:\[[^\[\]]*\])+)$/.exec(key)
          const name = match?.[1]
          const path = match?.[2]
          if (name !== undefined && path !== undefined && deep.includes(name)) {
            const parts = path.slice(1, -1).split('][')
            set(group(name), parts, item)
            continue
          }
          rest.push([key, item])
        }
        return Object.fromEntries([
          ...rest,
          ...[...groups].map(([name, held]) => [name, settle(held)] as const),
        ])
      })
      .pipe(
        z.object({
          limit: LimitParamsSchema,
          'before/after': BeforeAfterParamsSchema,
          include: IncludeParamsSchema,
          date_created: DateCreatedParamsSchema,
          metadata: MetadataParamsSchema,
          campaign_id: CampaignIdParamsSchema,
          status: StatusParamsSchema,
          size: z
            .preprocess(
              (val) => (val === undefined || Array.isArray(val) ? val : [val]),
              z.array(PostcardSizeSchema),
            )
            .exactOptional()
            .openapi({
              param: {
                in: 'query',
                name: 'size',
                description:
                  'Specifies the size of the postcard. Only `4x6` postcards can be sent to international destinations.',
                schema: { type: 'array', items: { $ref: '#/components/schemas/postcard_size' } },
                required: false,
              },
            }),
          scheduled: ScheduledParamsSchema,
          send_date: SendDateParamsSchema,
          mail_type: MailTypeParamsSchema,
          sort_by: SortByParamsSchema,
        }),
      ),
  },
  responses: { 200: AllPostcardsResponse, default: MailpieceErrorResponse },
})

export const postPostcardsRoute = createRoute({
  method: 'post',
  path: '/postcards',
  tags: ['Postcards'],
  summary: 'Create',
  description: 'Creates a new postcard given information',
  operationId: 'postcard_create',
  request: {
    headers: z.object({ 'Idempotency-Key': IdemHeaderParamsSchema }),
    query: z.object({ idempotency_key: IdemQueryParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: PostcardEditableSchema,
          example: {
            description: 'demo',
            to: {
              description: 'Harry - Office',
              name: 'Harry Zhang',
              company: 'Lob',
              email: 'harry@lob.com',
              phone: '5555555555',
              address_line1: '210 King St',
              address_line2: '# 6100',
              address_city: 'San Francisco',
              address_state: 'CA',
              address_zip: '94107',
              address_country: 'US',
            },
            from: {
              description: 'Harry - Office',
              name: 'Harry Zhang',
              company: 'Lob',
              email: 'harry@lob.com',
              phone: '5555555555',
              address_line1: '210 King St',
              address_line2: '# 6100',
              address_city: 'San Francisco',
              address_state: 'CA',
              address_zip: '94107',
              address_country: 'US',
            },
            front: 'tmpl_a1234dddg',
            back: 'tmpl_a1234dddg',
            size: '6x9',
            service_request_number: '12345678',
            mail_type: 'usps_first_class',
            merge_variables: { name: 'Harry' },
            metadata: { spiffy: 'true' },
            send_date: '2017-11-01T00:00:00.000Z',
            use_type: 'marketing',
            qr_code: {
              position: 'relative',
              redirect_url: 'https://www.lob.com',
              width: '2.5',
              top: '2.5',
              right: '2.5',
              pages: 'front,back',
            },
            fsc: true,
            print_speed: 'core',
          },
        },
        'application/x-www-form-urlencoded': {
          schema: PostcardBaseSchema.and(InputToSchema)
            .and(InputFromUsSchema)
            .and(
              z
                .object({
                  front: PscFrontSchema,
                  back: PscBackSchema,
                  billing_group_id: BillingGroupIdSchema.exactOptional(),
                  qr_code: z
                    .object({
                      position: z
                        .literal('relative')
                        .openapi({
                          description:
                            "Sets how a QR code is being positioned in the document. Together with this, you should provide one of 'top' or 'bottom', and one of 'left' or 'right'.",
                        }),
                      top: z
                        .preprocess(
                          (val) =>
                            typeof val === 'string' &&
                            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                              ? Number(val)
                              : val,
                          z.number(),
                        )
                        .exactOptional()
                        .openapi({
                          description:
                            'Vertical distance (in inches) to place QR code from the top. Only allowed if "bottom" isn\'t provided.',
                        }),
                      right: z
                        .preprocess(
                          (val) =>
                            typeof val === 'string' &&
                            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                              ? Number(val)
                              : val,
                          z.number(),
                        )
                        .exactOptional()
                        .openapi({
                          description:
                            'Horizontal distance (in inches) to place QR code from the right. Only allowed if "left" isn\'t provided.',
                        }),
                      left: z
                        .preprocess(
                          (val) =>
                            typeof val === 'string' &&
                            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                              ? Number(val)
                              : val,
                          z.number(),
                        )
                        .exactOptional()
                        .openapi({
                          description:
                            'Horizontal distance (in inches) to place QR code from the left. Only allowed if "right" isn\'t provided.',
                        }),
                      bottom: z
                        .preprocess(
                          (val) =>
                            typeof val === 'string' &&
                            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                              ? Number(val)
                              : val,
                          z.number(),
                        )
                        .exactOptional()
                        .openapi({
                          description:
                            'Vertical distance (in inches) to place QR code from the bottom. Only allowed if "top" isn\'t provided.',
                        }),
                      redirect_url: z
                        .string()
                        .openapi({
                          description:
                            'The url to redirect the user when a QR code is scanned. The URL can be a literal URL, a template URL containing merge variables, or consist entirely of merge variables. For example, `https://www.example.com` or `https://www.example.com?q={{name}}` or `{{name}}`, respectively. When a merge variable exists in the URL, it is replaced with data from merge_variables. If the variable does not exist, then nothing with be replaced and the destination URL will be the same as the input URL. More details on merge variables can be found in <a href="https://help.lob.com/print-and-mail/designing-mail-creatives/adding-qr-codes#destination-url-and-redirects" target="_blank">our help center</a>.',
                        }),
                      width: z
                        .preprocess(
                          (val) =>
                            typeof val === 'string' &&
                            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                              ? Number(val)
                              : val,
                          z.number(),
                        )
                        .openapi({
                          description:
                            'The size (in inches) of the QR code with a minimum of 1 inch. All QR codes are generated as a square.',
                        }),
                      pages: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            'Specify the pages where the QR code should be stamped in a comma separated format. Your QR code can be printed in the same position on multiple pages. For postcards, the values should either be "front", "back" (for either front or back) or "front,back" (for the QR code to be printed on both sides). For self-mailers and snap packs, the values should either be "inside", "outside" (for either inside or outside) or "inside,outside" (for the QR code to be printed on both sides). For letters and booklets, the values can be specific page numbers ("1", "3"), page number ranges such as "1-3", or a comma separated combination of both ("1,3,5-7").',
                        }),
                      logo: z
                        .object({
                          url: z
                            .string()
                            .regex(/^https:\/\/[-a-zA-Z0-9@:%._+~#=\/]{1,256}.(png|jpe?g)$/)
                            .exactOptional()
                            .openapi({
                              description:
                                'The public URL of the logo image to be retrieved and placed over the center of the QR code.',
                            }),
                        })
                        .exactOptional()
                        .openapi({
                          description:
                            'Allows specifying a logo to be placed over the center of the QR code.  Logos must be in PNG or JPEG format and have a maximum file size of 1 MB.',
                          required: [],
                        }),
                      style: z
                        .object({
                          background_color: z
                            .string()
                            .regex(/^#[A-Fa-f0-9]{6}$/)
                            .exactOptional()
                            .openapi({
                              description:
                                'The background color of the QR code in hexadecimal format. For example, `#000000` is black and `#FFFFFF` is white.',
                            }),
                          foreground_color: z
                            .string()
                            .regex(/^#[A-Fa-f0-9]{6}$/)
                            .exactOptional()
                            .openapi({
                              description:
                                'The foreground color of the QR code in hexadecimal format. For example, `#000000` is black and `#FFFFFF` is white.',
                            }),
                        })
                        .exactOptional()
                        .openapi({
                          description: 'Customizes the appearance of the QR code.',
                          required: [],
                        }),
                    })
                    .exactOptional()
                    .openapi({
                      description:
                        'Customize and place a QR code on the creative at the required position.',
                      required: ['position', 'redirect_url', 'width'],
                    }),
                  use_type: ((schema) =>
                    z.union([
                      schema,
                      z.preprocess((val) => (val === 'null' ? null : val), schema),
                    ]))(PscUseTypeSchema),
                  service_request_number: ((schema) =>
                    z.union([
                      schema,
                      z.preprocess((val) => (val === 'null' ? null : val), schema),
                    ]))(ServiceRequestNumberSchema).exactOptional(),
                  fsc: z
                    .preprocess(
                      ((read) => (val: unknown) => {
                        const result = read.safeParse(val)
                        return result.success ? result.data : val
                      })(z.stringbool()),
                      z.boolean(),
                    )
                    .default(false)
                    .exactOptional()
                    .openapi({
                      description:
                        'This is in beta. Contact support@lob.com or your account contact to learn more. Not available for `4x6` or `A5` postcard sizes.',
                    }),
                  print_speed: ((schema) =>
                    z.union([
                      schema,
                      z.preprocess((val) => (val === 'null' ? null : val), schema),
                    ]))(PrintSpeedSchema).exactOptional(),
                })
                .openapi({ required: ['to', 'front', 'back', 'use_type'] }),
            ),
          example: {
            description: 'demo',
            to: {
              description: 'Harry - Office',
              name: 'Harry Zhang',
              company: 'Lob',
              email: 'harry@lob.com',
              phone: '5555555555',
              address_line1: '210 King St',
              address_line2: '# 6100',
              address_city: 'San Francisco',
              address_state: 'CA',
              address_zip: '94107',
              address_country: 'US',
            },
            from: {
              description: 'Harry - Office',
              name: 'Harry Zhang',
              company: 'Lob',
              email: 'harry@lob.com',
              phone: '5555555555',
              address_line1: '210 King St',
              address_line2: '# 6100',
              address_city: 'San Francisco',
              address_state: 'CA',
              address_zip: '94107',
              address_country: 'US',
            },
            front: 'tmpl_c94e83ca2cd5121',
            back: 'tmpl_c94e83ca2cd5121',
            size: '6x9',
            service_request_number: '12345678',
            mail_type: 'usps_first_class',
            merge_variables: { name: 'Harry' },
            metadata: { spiffy: 'true' },
            send_date: '2017-11-01T00:00:00.000Z',
            use_type: 'marketing',
            qr_code: {
              position: 'relative',
              redirect_url: 'https://www.lob.com',
              width: '2.5',
              bottom: '2.5',
              right: '2.5',
              pages: 'back',
            },
            fsc: true,
            print_speed: 'core',
          },
          encoding: { to: {}, from: {}, merge_variables: {}, metadata: {} },
        },
        'multipart/form-data': {
          schema: PostcardBaseSchema.and(InputToSchema)
            .and(InputFromUsSchema)
            .and(
              z
                .object({
                  front: PscFrontSchema,
                  back: PscBackSchema,
                  billing_group_id: BillingGroupIdSchema.exactOptional(),
                  qr_code: z
                    .object({
                      position: z
                        .literal('relative')
                        .openapi({
                          description:
                            "Sets how a QR code is being positioned in the document. Together with this, you should provide one of 'top' or 'bottom', and one of 'left' or 'right'.",
                        }),
                      top: z
                        .preprocess(
                          (val) =>
                            typeof val === 'string' &&
                            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                              ? Number(val)
                              : val,
                          z.number(),
                        )
                        .exactOptional()
                        .openapi({
                          description:
                            'Vertical distance (in inches) to place QR code from the top. Only allowed if "bottom" isn\'t provided.',
                        }),
                      right: z
                        .preprocess(
                          (val) =>
                            typeof val === 'string' &&
                            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                              ? Number(val)
                              : val,
                          z.number(),
                        )
                        .exactOptional()
                        .openapi({
                          description:
                            'Horizontal distance (in inches) to place QR code from the right. Only allowed if "left" isn\'t provided.',
                        }),
                      left: z
                        .preprocess(
                          (val) =>
                            typeof val === 'string' &&
                            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                              ? Number(val)
                              : val,
                          z.number(),
                        )
                        .exactOptional()
                        .openapi({
                          description:
                            'Horizontal distance (in inches) to place QR code from the left. Only allowed if "right" isn\'t provided.',
                        }),
                      bottom: z
                        .preprocess(
                          (val) =>
                            typeof val === 'string' &&
                            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                              ? Number(val)
                              : val,
                          z.number(),
                        )
                        .exactOptional()
                        .openapi({
                          description:
                            'Vertical distance (in inches) to place QR code from the bottom. Only allowed if "top" isn\'t provided.',
                        }),
                      redirect_url: z
                        .string()
                        .openapi({
                          description:
                            'The url to redirect the user when a QR code is scanned. The URL can be a literal URL, a template URL containing merge variables, or consist entirely of merge variables. For example, `https://www.example.com` or `https://www.example.com?q={{name}}` or `{{name}}`, respectively. When a merge variable exists in the URL, it is replaced with data from merge_variables. If the variable does not exist, then nothing with be replaced and the destination URL will be the same as the input URL. More details on merge variables can be found in <a href="https://help.lob.com/print-and-mail/designing-mail-creatives/adding-qr-codes#destination-url-and-redirects" target="_blank">our help center</a>.',
                        }),
                      width: z
                        .preprocess(
                          (val) =>
                            typeof val === 'string' &&
                            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                              ? Number(val)
                              : val,
                          z.number(),
                        )
                        .openapi({
                          description:
                            'The size (in inches) of the QR code with a minimum of 1 inch. All QR codes are generated as a square.',
                        }),
                      pages: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            'Specify the pages where the QR code should be stamped in a comma separated format. Your QR code can be printed in the same position on multiple pages. For postcards, the values should either be "front", "back" (for either front or back) or "front,back" (for the QR code to be printed on both sides). For self-mailers and snap packs, the values should either be "inside", "outside" (for either inside or outside) or "inside,outside" (for the QR code to be printed on both sides). For letters and booklets, the values can be specific page numbers ("1", "3"), page number ranges such as "1-3", or a comma separated combination of both ("1,3,5-7").',
                        }),
                      logo: z
                        .object({
                          url: z
                            .string()
                            .regex(/^https:\/\/[-a-zA-Z0-9@:%._+~#=\/]{1,256}.(png|jpe?g)$/)
                            .exactOptional()
                            .openapi({
                              description:
                                'The public URL of the logo image to be retrieved and placed over the center of the QR code.',
                            }),
                        })
                        .exactOptional()
                        .openapi({
                          description:
                            'Allows specifying a logo to be placed over the center of the QR code.  Logos must be in PNG or JPEG format and have a maximum file size of 1 MB.',
                          required: [],
                        }),
                      style: z
                        .object({
                          background_color: z
                            .string()
                            .regex(/^#[A-Fa-f0-9]{6}$/)
                            .exactOptional()
                            .openapi({
                              description:
                                'The background color of the QR code in hexadecimal format. For example, `#000000` is black and `#FFFFFF` is white.',
                            }),
                          foreground_color: z
                            .string()
                            .regex(/^#[A-Fa-f0-9]{6}$/)
                            .exactOptional()
                            .openapi({
                              description:
                                'The foreground color of the QR code in hexadecimal format. For example, `#000000` is black and `#FFFFFF` is white.',
                            }),
                        })
                        .exactOptional()
                        .openapi({
                          description: 'Customizes the appearance of the QR code.',
                          required: [],
                        }),
                    })
                    .exactOptional()
                    .openapi({
                      description:
                        'Customize and place a QR code on the creative at the required position.',
                      required: ['position', 'redirect_url', 'width'],
                    }),
                  use_type: ((schema) =>
                    z.union([
                      schema,
                      z.preprocess((val) => (val === 'null' ? null : val), schema),
                    ]))(PscUseTypeSchema),
                  service_request_number: ((schema) =>
                    z.union([
                      schema,
                      z.preprocess((val) => (val === 'null' ? null : val), schema),
                    ]))(ServiceRequestNumberSchema).exactOptional(),
                  fsc: z
                    .preprocess(
                      ((read) => (val: unknown) => {
                        const result = read.safeParse(val)
                        return result.success ? result.data : val
                      })(z.stringbool()),
                      z.boolean(),
                    )
                    .default(false)
                    .exactOptional()
                    .openapi({
                      description:
                        'This is in beta. Contact support@lob.com or your account contact to learn more. Not available for `4x6` or `A5` postcard sizes.',
                    }),
                  print_speed: ((schema) =>
                    z.union([
                      schema,
                      z.preprocess((val) => (val === 'null' ? null : val), schema),
                    ]))(PrintSpeedSchema).exactOptional(),
                })
                .openapi({ required: ['to', 'front', 'back', 'use_type'] }),
            ),
          example: {
            description: 'demo',
            to: {
              description: 'Harry - Office',
              name: 'Harry Zhang',
              company: 'Lob',
              email: 'harry@lob.com',
              phone: '5555555555',
              address_line1: '210 King St',
              address_line2: '# 6100',
              address_city: 'San Francisco',
              address_state: 'CA',
              address_zip: '94107',
              address_country: 'US',
            },
            from: {
              description: 'Harry - Office',
              name: 'Harry Zhang',
              company: 'Lob',
              email: 'harry@lob.com',
              phone: '5555555555',
              address_line1: '210 King St',
              address_line2: '# 6100',
              address_city: 'San Francisco',
              address_state: 'CA',
              address_zip: '94107',
              address_country: 'US',
            },
            front: 'tmpl_a1234dddg',
            back: 'tmpl_a1234dddg',
            size: '6x9',
            service_request_number: '12345678',
            mail_type: 'usps_first_class',
            merge_variables: { name: 'Harry' },
            metadata: { spiffy: 'true' },
            send_date: '2017-11-01T00:00:00.000Z',
            use_type: 'marketing',
            qr_code: {
              position: 'relative',
              redirect_url: 'https://www.lob.com',
              width: '2.5',
              bottom: '2.5',
              left: '2.5',
              pages: 'front',
            },
            fsc: true,
            print_speed: 'core',
          },
        },
      },
      required: true,
    },
  },
  responses: { 200: PostPostcardResponse, default: MailpieceErrorResponse },
})

export const getQrCodeAnalyticsRoute = createRoute({
  method: 'get',
  path: '/qr_code_analytics',
  tags: ['QR Codes'],
  summary: 'List',
  description:
    'Returns a list of your QR codes. The QR codes are returned sorted by scan date, with the most recently scanned QR codes appearing first.',
  operationId: 'qr_codes_list',
  request: {
    query: z
      .looseObject({})
      .transform((val) => {
        const rest: [string, unknown][] = []
        const groups = new Map<string, Record<string, unknown>>()
        const group = (name: string) => {
          const found = groups.get(name)
          if (found !== undefined) return found
          const made: Record<string, unknown> = Object.create(null)
          groups.set(name, made)
          return made
        }
        const isGroup = (item: unknown): item is Record<string, unknown> =>
          typeof item === 'object' && item !== null && !Array.isArray(item)
        const lists = new WeakSet<object>()
        const isIndex = (part: string | undefined) => part !== undefined && /^\d*$/.test(part)
        const child = (target: Record<string, unknown>, key: string, asList: boolean) => {
          const held = target[key]
          if (isGroup(held)) return held
          const made: Record<string, unknown> = Object.create(null)
          if (asList) lists.add(made)
          target[key] = made
          return made
        }
        const set = (
          root: Record<string, unknown>,
          path: readonly string[],
          item: unknown,
        ): void => {
          const work: [Record<string, unknown>, number, unknown, boolean][] = [
            [root, 0, item, false],
          ]
          for (let job = work.pop(); job !== undefined; job = work.pop()) {
            const [target, at, value, split] = job
            const head = path[at]
            if (head === undefined) continue
            const next = path[at + 1]
            if (head === '') {
              if (!split && Array.isArray(value)) {
                for (let i = value.length - 1; i >= 0; i -= 1)
                  work.push([target, at, value[i], true])
                continue
              }
              const size = Object.keys(target).length
              if (next === undefined) {
                target[String(size)] = value
                continue
              }
              const free =
                next === ''
                  ? -1
                  : Object.values(target).findIndex((held) => isGroup(held) && !(next in held))
              work.push([
                child(target, String(free < 0 ? size : free), isIndex(next)),
                at + 1,
                value,
                false,
              ])
              continue
            }
            if (next === undefined) {
              target[head] = value
              continue
            }
            work.push([child(target, head, isIndex(next)), at + 1, value, false])
          }
        }
        const settle = (root: unknown): unknown => {
          if (!isGroup(root)) return root
          const found: [Record<string, unknown>, string, Record<string, unknown>][] = []
          const queue: Record<string, unknown>[] = [root]
          for (const node of queue) {
            for (const [key, inner] of Object.entries(node)) {
              if (isGroup(inner)) {
                found.push([node, key, inner])
                queue.push(inner)
              }
            }
          }
          const finish = (group: Record<string, unknown>): unknown =>
            lists.has(group)
              ? Object.entries(group)
                  .sort((a, b) => Number(a[0]) - Number(b[0]))
                  .map(([, inner]) => inner)
              : Object.assign(Object.create(null), group)
          for (const [parent, key, group] of found.reverse()) {
            parent[key] = finish(group)
          }
          return finish(root)
        }
        const deep: string[] = ['date_created']
        for (const [key, item] of Object.entries(val)) {
          const match = /^([^\[\]]+)((?:\[[^\[\]]*\])+)$/.exec(key)
          const name = match?.[1]
          const path = match?.[2]
          if (name !== undefined && path !== undefined && deep.includes(name)) {
            const parts = path.slice(1, -1).split('][')
            set(group(name), parts, item)
            continue
          }
          rest.push([key, item])
        }
        return Object.fromEntries([
          ...rest,
          ...[...groups].map(([name, held]) => [name, settle(held)] as const),
        ])
      })
      .pipe(
        z.object({
          limit: LimitParamsSchema,
          offset: OffsetParamsSchema,
          include: IncludeParamsSchema,
          date_created: DateCreatedParamsSchema,
          scanned: z
            .stringbool()
            .exactOptional()
            .openapi({
              param: {
                in: 'query',
                name: 'scanned',
                description:
                  'Filter list of responses to only include QR codes with at least one scan event.',
                schema: { type: 'boolean' },
                required: false,
              },
            }),
          resource_ids: z
            .preprocess(
              (val) => (val === undefined || Array.isArray(val) ? val : [val]),
              z.array(z.any()).max(100),
            )
            .default([])
            .exactOptional()
            .openapi({
              param: {
                in: 'query',
                name: 'resource_ids',
                description: 'Filter by the resource ID.',
                schema: { type: 'array', maxItems: 100, default: [] },
                required: false,
              },
            }),
        }),
      ),
  },
  responses: {
    200: { description: 'Returns a list of QR Codes and their analytics.', content: {} },
  },
})

export const getDomainsDomainIdRoute = createRoute({
  method: 'get',
  path: '/domains/{domain_id}',
  tags: ['URL Shortener'],
  summary: 'Retrieve a domain',
  description: 'Retrieve details for a single domain.',
  operationId: 'domain_get',
  request: {
    params: z.object({
      domain_id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'domain_id',
            required: true,
            description: 'Unique identifier for a domain.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns domain related details.',
      content: { 'application/json': { schema: DomainResponseSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorSchema } } },
  },
})

export const deleteDomainsDomainIdRoute = createRoute({
  method: 'delete',
  path: '/domains/{domain_id}',
  tags: ['URL Shortener'],
  summary: 'Delete a Domain',
  description:
    'Delete a registered domain. This operation can only be performed if all associated links with the domain are deleted.',
  operationId: 'domain_delete',
  request: {
    params: z.object({
      domain_id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'domain_id',
            required: true,
            description: 'Unique identifier for a domain.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns the deleted link object.',
      content: { 'application/json': { schema: DomainDeleteSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorSchema } } },
  },
})

export const getDomainsRoute = createRoute({
  method: 'get',
  path: '/domains',
  tags: ['URL Shortener'],
  summary: 'List all domains',
  description: 'Retrieve a list of all created domains.',
  operationId: 'domain_list',
  request: {
    query: z.object({
      limit: LimitParamsSchema,
      'before/after': BeforeAfterParamsSchema,
      status: z
        .enum(['configured', 'not_configured'])
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'status',
            description: 'Filter domains by their configuration status.',
            schema: { type: 'string', enum: ['configured', 'not_configured'] },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns a list of all domains.',
      content: { 'application/json': { schema: DomainsResponseSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorSchema } } },
  },
})

export const postDomainsRoute = createRoute({
  method: 'post',
  path: '/domains',
  tags: ['URL Shortener'],
  summary: 'Create Domain',
  description: 'Add a new custom domain that can be used to create custom links.',
  operationId: 'domain_create',
  request: {
    body: {
      content: {
        'application/json': {
          schema: DomainsSchema,
          examples: {
            basic: { value: { domain: 'lob.st' } },
            test: { value: { domain: 'lob.st' } },
          },
        },
        'application/x-www-form-urlencoded': {
          schema: DomainsSchema,
          examples: {
            basic: { value: { domain: 'lob.st' } },
            test: { value: { domain: 'lob.st' } },
          },
        },
        'multipart/form-data': {
          schema: DomainsSchema,
          examples: {
            basic: { value: { domain: 'lob.st' } },
            test: { value: { domain: 'lob.st' } },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Returns a domain object with details.',
      content: { 'application/json': { schema: DomainResponseSchema } },
    },
    default: {
      description: 'Error',
      content: {
        'application/json': {
          schema: ErrorSchema,
          example: { error: { code: 'invalid', message: 'domain is required', status_code: 422 } },
        },
      },
    },
  },
})

export const getLinksLinkIdRoute = createRoute({
  method: 'get',
  path: '/links/{link_id}',
  tags: ['URL Shortener'],
  summary: 'Retrieve a link',
  description: 'Retrieves a single shortened link.',
  operationId: 'links_get',
  request: {
    params: z.object({
      link_id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'link_id',
            required: true,
            description: 'Unique identifier for a link.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns a single link.',
      content: { 'application/json': { schema: LinkResponseSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorSchema } } },
  },
})

export const deleteLinksLinkIdRoute = createRoute({
  method: 'delete',
  path: '/links/{link_id}',
  tags: ['URL Shortener'],
  summary: 'Delete Link',
  description: 'Delete the shortened link.',
  operationId: 'links_delete',
  request: {
    params: z.object({
      link_id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'link_id',
            required: true,
            description: 'Unique identifier for a link.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns the deleted short link object',
      content: { 'application/json': { schema: LinkDeleteResponseSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorSchema } } },
  },
})

export const patchLinksLinkIdRoute = createRoute({
  method: 'patch',
  path: '/links/{link_id}',
  tags: ['URL Shortener'],
  summary: 'Update a Link',
  description: 'Update any of the properties of a shortened link.',
  operationId: 'link_update',
  request: {
    params: z.object({
      link_id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'link_id',
            required: true,
            description: 'Unique identifier for a link.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: LinkUpdateSchema,
          examples: {
            basic: { value: { resource_id: 'ltr_133' } },
            test: { value: { redirect_link: 'ltr_133' } },
          },
        },
        'application/x-www-form-urlencoded': {
          schema: LinkUpdateSchema,
          examples: {
            basic: { value: { resource_id: 'ltr_133' } },
            test: { value: { resource_id: 'ltr_133' } },
          },
        },
        'multipart/form-data': {
          schema: LinkUpdateSchema,
          examples: {
            basic: { value: { resource_id: 'ltr_133' } },
            test: { value: { resource_id: 'ltr_133' } },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Returns the updated link.',
      content: { 'application/json': { schema: LinkResponseSchema } },
    },
    default: {
      description: 'Error',
      content: {
        'application/json': {
          schema: ErrorSchema,
          example: {
            error: { code: 'invalid', message: 'redirect_link is required', status_code: 422 },
          },
        },
      },
    },
  },
})

export const getLinksRoute = createRoute({
  method: 'get',
  path: '/links',
  tags: ['URL Shortener'],
  summary: 'List all links',
  description:
    'Retrieves a list of shortened links. The list is sorted by  creation date, with the most recently created appearing first.',
  operationId: 'links_list',
  request: {
    query: z.object({
      limit: LimitParamsSchema,
      'before/after': BeforeAfterParamsSchema,
      campaign_id: CampaignIdParamsSchema,
      domain_id: z
        .string()
        .regex(/^(dom)_[a-zA-Z0-9]+$/)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'domain_id',
            description: 'Filters links by the provided domain id.',
            schema: { type: 'string', pattern: '^(dom)_[a-zA-Z0-9]+$' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns the deleted link object.',
      content: { 'application/json': { schema: LinksResponseSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorSchema } } },
  },
})

export const postLinksRoute = createRoute({
  method: 'post',
  path: '/links',
  tags: ['URL Shortener'],
  summary: 'Create Link',
  description:
    "Given a long URL, shorten your URL either by using a custom domain or Lob's own short domain.",
  operationId: 'link_create',
  request: {
    body: {
      content: {
        'application/json': {
          schema: LinkSingleSchema,
          examples: {
            basic: { value: { redirect_link: 'https://www.lob.com', slug: 'a1b2c3' } },
            test: { value: { redirect_link: 'https://www.lob.com', slug: 'a1b2c3' } },
          },
        },
        'application/x-www-form-urlencoded': {
          schema: LinkSingleSchema,
          examples: {
            basic: { value: { redirect_link: 'https://www.lob.com', domain: 'lob.st' } },
            test: { value: { redirect_link: 'https://www.lob.com', domain: 'lob.st' } },
          },
        },
        'multipart/form-data': {
          schema: LinkSingleSchema,
          examples: {
            basic: { value: { redirect_link: 'https://www.lob.com' } },
            test: { value: { redirect_link: 'https://www.lob.com' } },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Returns a successfully created link.',
      content: { 'application/json': { schema: LinkResponseSchema } },
    },
    default: {
      description: 'Error',
      content: {
        'application/json': {
          schema: ErrorSchema,
          example: {
            error: { code: 'invalid', message: 'redirect_link is required', status_code: 422 },
          },
        },
      },
    },
  },
})

export const getResourceProofsResPrfIdRoute = createRoute({
  method: 'get',
  path: '/resource_proofs/{res_prf_id}',
  tags: ['Resource Proofs'],
  summary: 'Retrieve',
  description:
    'Retrieves the details of an existing resource proof. You need only supply the unique resource proof identifier.',
  operationId: 'resource_proof_retrieve',
  request: {
    params: z.object({
      res_prf_id: ResPrfIdSchema.openapi({
        param: {
          in: 'path',
          name: 'res_prf_id',
          description: 'id of the resource proof',
          required: true,
          schema: { $ref: '#/components/schemas/res_prf_id' },
        },
      }),
    }),
  },
  responses: {
    200: { description: 'Returns a resource proof object', content: {} },
    default: MailpieceErrorResponse,
  },
})

export const patchResourceProofsResPrfIdRoute = createRoute({
  method: 'patch',
  path: '/resource_proofs/{res_prf_id}',
  tags: ['Resource Proofs'],
  summary: 'Update',
  description: 'Updates the specified resource proof.',
  operationId: 'resource_proof_update',
  request: {
    params: z.object({
      res_prf_id: ResPrfIdSchema.openapi({
        param: {
          in: 'path',
          name: 'res_prf_id',
          description: 'id of the resource proof',
          required: true,
          schema: { $ref: '#/components/schemas/res_prf_id' },
        },
      }),
    }),
    body: {
      content: {
        'application/json': {
          schema: ResourceProofUpdatableSchema,
          example: { template_id: 'tmpl_a1234dddg' },
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: 'Returns an updated resource proof object', content: {} },
    default: MailpieceErrorResponse,
  },
})

export const postResourceProofsRoute = createRoute({
  method: 'post',
  path: '/resource_proofs',
  tags: ['Resource Proofs'],
  summary: 'Create',
  description: 'Creates a new resource proof with the provided properties.',
  operationId: 'resource_proof_create',
  request: {
    body: {
      content: {
        'application/json': {
          schema: ResourceProofEditableSchema,
          example: {
            resource_type: 'postcard',
            resource_parameters: {
              front: 'tmpl_a1234dddg',
              back: 'tmpl_a1234dddg',
              to: 'adr_a1234dddg',
            },
          },
        },
      },
      required: true,
    },
  },
  responses: { 201: PostResourceProofResponse, default: MailpieceErrorResponse },
})

export const getSelfMailersSfmIdRoute = createRoute({
  method: 'get',
  path: '/self_mailers/{sfm_id}',
  tags: ['Self Mailers'],
  summary: 'Retrieve',
  description:
    'Retrieves the details of an existing self_mailer. You need only supply the unique self_mailer identifier that was returned upon self_mailer creation.',
  operationId: 'self_mailer_retrieve',
  request: {
    params: z.object({
      sfm_id: SfmIdSchema.openapi({
        param: {
          in: 'path',
          name: 'sfm_id',
          description: 'id of the self_mailer',
          required: true,
          schema: { $ref: '#/components/schemas/sfm_id' },
        },
      }),
    }),
  },
  responses: {
    200: { description: 'Returns a self_mailer object', content: {} },
    default: MailpieceErrorResponse,
  },
})

export const deleteSelfMailersSfmIdRoute = createRoute({
  method: 'delete',
  path: '/self_mailers/{sfm_id}',
  tags: ['Self Mailers'],
  summary: 'Delete',
  description:
    'Completely removes a self mailer from production. This can only be done if the self mailer\'s `send_date` has not yet passed. If the self mailer is successfully canceled, you will not be charged for it. This feature is exclusive to certain customers. Upgrade to the appropriate <a href="https://dashboard.lob.com/#/settings/editions" target="_blank">Print & Mail Edition</a> to gain access.',
  operationId: 'self_mailer_delete',
  request: {
    params: z.object({
      sfm_id: SfmIdSchema.openapi({
        param: {
          in: 'path',
          name: 'sfm_id',
          description: 'id of the self_mailer',
          required: true,
          schema: { $ref: '#/components/schemas/sfm_id' },
        },
      }),
    }),
  },
  responses: { 200: SelfMailerDeletedResponse, default: MailpieceErrorResponse },
})

export const getSelfMailersRoute = createRoute({
  method: 'get',
  path: '/self_mailers',
  tags: ['Self Mailers'],
  summary: 'List',
  description:
    'Returns a list of your self_mailers. The self_mailers are returned sorted by creation date, with the most recently created self_mailers appearing first.',
  operationId: 'self_mailers_list',
  request: {
    query: z
      .looseObject({})
      .transform((val) => {
        const rest: [string, unknown][] = []
        const groups = new Map<string, Record<string, unknown>>()
        const group = (name: string) => {
          const found = groups.get(name)
          if (found !== undefined) return found
          const made: Record<string, unknown> = Object.create(null)
          groups.set(name, made)
          return made
        }
        const isGroup = (item: unknown): item is Record<string, unknown> =>
          typeof item === 'object' && item !== null && !Array.isArray(item)
        const lists = new WeakSet<object>()
        const isIndex = (part: string | undefined) => part !== undefined && /^\d*$/.test(part)
        const child = (target: Record<string, unknown>, key: string, asList: boolean) => {
          const held = target[key]
          if (isGroup(held)) return held
          const made: Record<string, unknown> = Object.create(null)
          if (asList) lists.add(made)
          target[key] = made
          return made
        }
        const set = (
          root: Record<string, unknown>,
          path: readonly string[],
          item: unknown,
        ): void => {
          const work: [Record<string, unknown>, number, unknown, boolean][] = [
            [root, 0, item, false],
          ]
          for (let job = work.pop(); job !== undefined; job = work.pop()) {
            const [target, at, value, split] = job
            const head = path[at]
            if (head === undefined) continue
            const next = path[at + 1]
            if (head === '') {
              if (!split && Array.isArray(value)) {
                for (let i = value.length - 1; i >= 0; i -= 1)
                  work.push([target, at, value[i], true])
                continue
              }
              const size = Object.keys(target).length
              if (next === undefined) {
                target[String(size)] = value
                continue
              }
              const free =
                next === ''
                  ? -1
                  : Object.values(target).findIndex((held) => isGroup(held) && !(next in held))
              work.push([
                child(target, String(free < 0 ? size : free), isIndex(next)),
                at + 1,
                value,
                false,
              ])
              continue
            }
            if (next === undefined) {
              target[head] = value
              continue
            }
            work.push([child(target, head, isIndex(next)), at + 1, value, false])
          }
        }
        const settle = (root: unknown): unknown => {
          if (!isGroup(root)) return root
          const found: [Record<string, unknown>, string, Record<string, unknown>][] = []
          const queue: Record<string, unknown>[] = [root]
          for (const node of queue) {
            for (const [key, inner] of Object.entries(node)) {
              if (isGroup(inner)) {
                found.push([node, key, inner])
                queue.push(inner)
              }
            }
          }
          const finish = (group: Record<string, unknown>): unknown =>
            lists.has(group)
              ? Object.entries(group)
                  .sort((a, b) => Number(a[0]) - Number(b[0]))
                  .map(([, inner]) => inner)
              : Object.assign(Object.create(null), group)
          for (const [parent, key, group] of found.reverse()) {
            parent[key] = finish(group)
          }
          return finish(root)
        }
        const deep: string[] = ['date_created', 'metadata']
        for (const [key, item] of Object.entries(val)) {
          const match = /^([^\[\]]+)((?:\[[^\[\]]*\])+)$/.exec(key)
          const name = match?.[1]
          const path = match?.[2]
          if (name !== undefined && path !== undefined && deep.includes(name)) {
            const parts = path.slice(1, -1).split('][')
            set(group(name), parts, item)
            continue
          }
          rest.push([key, item])
        }
        return Object.fromEntries([
          ...rest,
          ...[...groups].map(([name, held]) => [name, settle(held)] as const),
        ])
      })
      .pipe(
        z.object({
          limit: LimitParamsSchema,
          'before/after': BeforeAfterParamsSchema,
          include: IncludeParamsSchema,
          date_created: DateCreatedParamsSchema,
          metadata: MetadataParamsSchema,
          size: z
            .preprocess(
              (val) => (val === undefined || Array.isArray(val) ? val : [val]),
              z.array(SelfMailerSizeSchema),
            )
            .exactOptional()
            .openapi({
              param: {
                in: 'query',
                name: 'size',
                description: 'The self mailer sizes to be returned.',
                schema: { type: 'array', items: { $ref: '#/components/schemas/self_mailer_size' } },
                required: false,
              },
            }),
          scheduled: ScheduledParamsSchema,
          send_date: SendDateParamsSchema,
          mail_type: MailTypeParamsSchema,
          sort_by: SortByParamsSchema,
          campaign_id: CampaignIdParamsSchema,
          status: StatusParamsSchema,
        }),
      ),
  },
  responses: { 200: AllSelfMailersResponse, default: MailpieceErrorResponse },
})

export const postSelfMailersRoute = createRoute({
  method: 'post',
  path: '/self_mailers',
  tags: ['Self Mailers'],
  summary: 'Create',
  description: 'Creates a new self_mailer given information',
  operationId: 'self_mailer_create',
  request: {
    headers: z.object({ 'Idempotency-Key': IdemHeaderParamsSchema }),
    query: z.object({ idempotency_key: IdemQueryParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: SelfMailerEditableSchema,
          example: {
            description: 'Demo Self Mailer job',
            to: 'adr_bae820679f3f536b',
            from: 'adr_210a8d4b0b76d77b',
            inside: 'https://lob.com/selfmailerinside.pdf',
            outside: 'https://lob.com/selfmaileroutside.pdf',
            size: '12x9_bifold',
            metadata: { spiffy: 'true' },
            mail_type: 'usps_standard',
            merge_variables: { name: 'Harry' },
            send_date: '2017-11-01T00:00:00.000Z',
            use_type: 'marketing',
            qr_code: {
              position: 'relative',
              redirect_url: 'https://www.lob.com',
              width: '2.5',
              top: '2.5',
              right: '2.5',
              pages: 'inside,outside',
            },
            fsc: true,
            print_speed: 'core',
          },
        },
        'application/x-www-form-urlencoded': {
          schema: SelfMailerBaseSchema.and(InputToSchema)
            .and(InputFromUsSchema)
            .and(
              z
                .object({
                  inside: z
                    .xor([HtmlStringSchema, TmplIdSchema, RemoteFileUrlSchema, LocalFilePathSchema])
                    .openapi({
                      description:
                        'The artwork to use as the inside of your self mailer.\n\nNotes:\n- HTML merge variables should not include delimiting whitespace.\n- PDF, PNG, and JPGs must be sized at 6"x18" at 300 DPI, while supplied HTML will be rendered to the specified `size`.\n- Be sure to leave room for address and postage information by following the templates provided here:\n  - <a href="https://s3-us-west-2.amazonaws.com/public.lob.com/assets/templates/self_mailers/6x18_sfm_bifold_template.pdf" target="_blank">6x18 bifold template</a>\n  - <a href="https://s3-us-west-2.amazonaws.com/public.lob.com/assets/templates/self_mailers/12x9_sfm_bifold_template.pdf" target="_blank">12x9 bifold template</a>\n  - <a href="https://s3-us-west-2.amazonaws.com/public.lob.com/assets/templates/self_mailers/17_75x9_trifold_sfm_template.pdf" target="_blank">17.75x9 trifold template</a>\n\n\nSee [here](#section/HTML-Examples) for HTML examples.\n',
                    }),
                  outside: z
                    .xor([HtmlStringSchema, TmplIdSchema, RemoteFileUrlSchema, LocalFilePathSchema])
                    .openapi({
                      description:
                        'The artwork to use as the outside of your self mailer.\n\nNotes:\n- HTML merge variables should not include delimiting whitespace.\n- PDF, PNG, and JPGs must be sized at 6"x18" at 300 DPI, while supplied HTML will be rendered to the specified `size`.\n\nSee [here](#section/HTML-Examples) for HTML examples.\n',
                    }),
                  billing_group_id: BillingGroupIdSchema.exactOptional(),
                  qr_code: z
                    .object({
                      position: z
                        .literal('relative')
                        .openapi({
                          description:
                            "Sets how a QR code is being positioned in the document. Together with this, you should provide one of 'top' or 'bottom', and one of 'left' or 'right'.",
                        }),
                      top: z
                        .preprocess(
                          (val) =>
                            typeof val === 'string' &&
                            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                              ? Number(val)
                              : val,
                          z.number(),
                        )
                        .exactOptional()
                        .openapi({
                          description:
                            'Vertical distance (in inches) to place QR code from the top. Only allowed if "bottom" isn\'t provided.',
                        }),
                      right: z
                        .preprocess(
                          (val) =>
                            typeof val === 'string' &&
                            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                              ? Number(val)
                              : val,
                          z.number(),
                        )
                        .exactOptional()
                        .openapi({
                          description:
                            'Horizontal distance (in inches) to place QR code from the right. Only allowed if "left" isn\'t provided.',
                        }),
                      left: z
                        .preprocess(
                          (val) =>
                            typeof val === 'string' &&
                            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                              ? Number(val)
                              : val,
                          z.number(),
                        )
                        .exactOptional()
                        .openapi({
                          description:
                            'Horizontal distance (in inches) to place QR code from the left. Only allowed if "right" isn\'t provided.',
                        }),
                      bottom: z
                        .preprocess(
                          (val) =>
                            typeof val === 'string' &&
                            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                              ? Number(val)
                              : val,
                          z.number(),
                        )
                        .exactOptional()
                        .openapi({
                          description:
                            'Vertical distance (in inches) to place QR code from the bottom. Only allowed if "top" isn\'t provided.',
                        }),
                      redirect_url: z
                        .string()
                        .openapi({
                          description:
                            'The url to redirect the user when a QR code is scanned. The URL can be a literal URL, a template URL containing merge variables, or consist entirely of merge variables. For example, `https://www.example.com` or `https://www.example.com?q={{name}}` or `{{name}}`, respectively. When a merge variable exists in the URL, it is replaced with data from merge_variables. If the variable does not exist, then nothing with be replaced and the destination URL will be the same as the input URL. More details on merge variables can be found in <a href="https://help.lob.com/print-and-mail/designing-mail-creatives/adding-qr-codes#destination-url-and-redirects" target="_blank">our help center</a>.',
                        }),
                      width: z
                        .preprocess(
                          (val) =>
                            typeof val === 'string' &&
                            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                              ? Number(val)
                              : val,
                          z.number(),
                        )
                        .openapi({
                          description:
                            'The size (in inches) of the QR code with a minimum of 1 inch. All QR codes are generated as a square.',
                        }),
                      pages: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            'Specify the pages where the QR code should be stamped in a comma separated format. Your QR code can be printed in the same position on multiple pages. For postcards, the values should either be "front", "back" (for either front or back) or "front,back" (for the QR code to be printed on both sides). For self-mailers and snap packs, the values should either be "inside", "outside" (for either inside or outside) or "inside,outside" (for the QR code to be printed on both sides). For letters and booklets, the values can be specific page numbers ("1", "3"), page number ranges such as "1-3", or a comma separated combination of both ("1,3,5-7").',
                        }),
                      logo: z
                        .object({
                          url: z
                            .string()
                            .regex(/^https:\/\/[-a-zA-Z0-9@:%._+~#=\/]{1,256}.(png|jpe?g)$/)
                            .exactOptional()
                            .openapi({
                              description:
                                'The public URL of the logo image to be retrieved and placed over the center of the QR code.',
                            }),
                        })
                        .exactOptional()
                        .openapi({
                          description:
                            'Allows specifying a logo to be placed over the center of the QR code.  Logos must be in PNG or JPEG format and have a maximum file size of 1 MB.',
                          required: [],
                        }),
                      style: z
                        .object({
                          background_color: z
                            .string()
                            .regex(/^#[A-Fa-f0-9]{6}$/)
                            .exactOptional()
                            .openapi({
                              description:
                                'The background color of the QR code in hexadecimal format. For example, `#000000` is black and `#FFFFFF` is white.',
                            }),
                          foreground_color: z
                            .string()
                            .regex(/^#[A-Fa-f0-9]{6}$/)
                            .exactOptional()
                            .openapi({
                              description:
                                'The foreground color of the QR code in hexadecimal format. For example, `#000000` is black and `#FFFFFF` is white.',
                            }),
                        })
                        .exactOptional()
                        .openapi({
                          description: 'Customizes the appearance of the QR code.',
                          required: [],
                        }),
                    })
                    .exactOptional()
                    .openapi({
                      description:
                        'Customize and place a QR code on the creative at the required position.',
                      required: ['position', 'redirect_url', 'width'],
                    }),
                  use_type: ((schema) =>
                    z.union([
                      schema,
                      z.preprocess((val) => (val === 'null' ? null : val), schema),
                    ]))(SfmUseTypeSchema),
                  service_request_number: ((schema) =>
                    z.union([
                      schema,
                      z.preprocess((val) => (val === 'null' ? null : val), schema),
                    ]))(ServiceRequestNumberSchema).exactOptional(),
                  fsc: z
                    .preprocess(
                      ((read) => (val: unknown) => {
                        const result = read.safeParse(val)
                        return result.success ? result.data : val
                      })(z.stringbool()),
                      z.boolean(),
                    )
                    .default(false)
                    .exactOptional()
                    .openapi({
                      description:
                        'This is in beta. Contact support@lob.com or your account contact to learn more. Not available for `11x9_bifold` self-mailer size.',
                    }),
                  print_speed: ((schema) =>
                    z.union([
                      schema,
                      z.preprocess((val) => (val === 'null' ? null : val), schema),
                    ]))(PrintSpeedSchema).exactOptional(),
                })
                .openapi({ required: ['to', 'inside', 'outside', 'use_type'] }),
            ),
          example: {
            description: 'Demo Self Mailer job',
            to: 'adr_bae820679f3f536b',
            from: 'adr_210a8d4b0b76d77b',
            inside: 'https://lob.com/selfmailerinside.pdf',
            outside: 'https://lob.com/selfmaileroutside.pdf',
            size: '12x9_bifold',
            metadata: { spiffy: 'true' },
            mail_type: 'usps_standard',
            merge_variables: { name: 'Harry' },
            send_date: '2017-11-01T00:00:00.000Z',
            use_type: 'marketing',
            qr_code: {
              position: 'relative',
              redirect_url: 'https://www.lob.com',
              width: '2.5',
              top: '2.5',
              right: '2.5',
              pages: 'inside,outside',
            },
            fsc: true,
            print_speed: 'core',
          },
          encoding: { merge_variables: {}, metadata: {} },
        },
        'multipart/form-data': {
          schema: SelfMailerBaseSchema.and(InputToSchema)
            .and(InputFromUsSchema)
            .and(
              z
                .object({
                  inside: z
                    .xor([HtmlStringSchema, TmplIdSchema, RemoteFileUrlSchema, LocalFilePathSchema])
                    .openapi({
                      description:
                        'The artwork to use as the inside of your self mailer.\n\nNotes:\n- HTML merge variables should not include delimiting whitespace.\n- PDF, PNG, and JPGs must be sized at 6"x18" at 300 DPI, while supplied HTML will be rendered to the specified `size`.\n- Be sure to leave room for address and postage information by following the templates provided here:\n  - <a href="https://s3-us-west-2.amazonaws.com/public.lob.com/assets/templates/self_mailers/6x18_sfm_bifold_template.pdf" target="_blank">6x18 bifold template</a>\n  - <a href="https://s3-us-west-2.amazonaws.com/public.lob.com/assets/templates/self_mailers/12x9_sfm_bifold_template.pdf" target="_blank">12x9 bifold template</a>\n  - <a href="https://s3-us-west-2.amazonaws.com/public.lob.com/assets/templates/self_mailers/17_75x9_trifold_sfm_template.pdf" target="_blank">17.75x9 trifold template</a>\n\n\nSee [here](#section/HTML-Examples) for HTML examples.\n',
                    }),
                  outside: z
                    .xor([HtmlStringSchema, TmplIdSchema, RemoteFileUrlSchema, LocalFilePathSchema])
                    .openapi({
                      description:
                        'The artwork to use as the outside of your self mailer.\n\nNotes:\n- HTML merge variables should not include delimiting whitespace.\n- PDF, PNG, and JPGs must be sized at 6"x18" at 300 DPI, while supplied HTML will be rendered to the specified `size`.\n\nSee [here](#section/HTML-Examples) for HTML examples.\n',
                    }),
                  billing_group_id: BillingGroupIdSchema.exactOptional(),
                  qr_code: z
                    .object({
                      position: z
                        .literal('relative')
                        .openapi({
                          description:
                            "Sets how a QR code is being positioned in the document. Together with this, you should provide one of 'top' or 'bottom', and one of 'left' or 'right'.",
                        }),
                      top: z
                        .preprocess(
                          (val) =>
                            typeof val === 'string' &&
                            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                              ? Number(val)
                              : val,
                          z.number(),
                        )
                        .exactOptional()
                        .openapi({
                          description:
                            'Vertical distance (in inches) to place QR code from the top. Only allowed if "bottom" isn\'t provided.',
                        }),
                      right: z
                        .preprocess(
                          (val) =>
                            typeof val === 'string' &&
                            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                              ? Number(val)
                              : val,
                          z.number(),
                        )
                        .exactOptional()
                        .openapi({
                          description:
                            'Horizontal distance (in inches) to place QR code from the right. Only allowed if "left" isn\'t provided.',
                        }),
                      left: z
                        .preprocess(
                          (val) =>
                            typeof val === 'string' &&
                            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                              ? Number(val)
                              : val,
                          z.number(),
                        )
                        .exactOptional()
                        .openapi({
                          description:
                            'Horizontal distance (in inches) to place QR code from the left. Only allowed if "right" isn\'t provided.',
                        }),
                      bottom: z
                        .preprocess(
                          (val) =>
                            typeof val === 'string' &&
                            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                              ? Number(val)
                              : val,
                          z.number(),
                        )
                        .exactOptional()
                        .openapi({
                          description:
                            'Vertical distance (in inches) to place QR code from the bottom. Only allowed if "top" isn\'t provided.',
                        }),
                      redirect_url: z
                        .string()
                        .openapi({
                          description:
                            'The url to redirect the user when a QR code is scanned. The URL can be a literal URL, a template URL containing merge variables, or consist entirely of merge variables. For example, `https://www.example.com` or `https://www.example.com?q={{name}}` or `{{name}}`, respectively. When a merge variable exists in the URL, it is replaced with data from merge_variables. If the variable does not exist, then nothing with be replaced and the destination URL will be the same as the input URL. More details on merge variables can be found in <a href="https://help.lob.com/print-and-mail/designing-mail-creatives/adding-qr-codes#destination-url-and-redirects" target="_blank">our help center</a>.',
                        }),
                      width: z
                        .preprocess(
                          (val) =>
                            typeof val === 'string' &&
                            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                              ? Number(val)
                              : val,
                          z.number(),
                        )
                        .openapi({
                          description:
                            'The size (in inches) of the QR code with a minimum of 1 inch. All QR codes are generated as a square.',
                        }),
                      pages: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            'Specify the pages where the QR code should be stamped in a comma separated format. Your QR code can be printed in the same position on multiple pages. For postcards, the values should either be "front", "back" (for either front or back) or "front,back" (for the QR code to be printed on both sides). For self-mailers and snap packs, the values should either be "inside", "outside" (for either inside or outside) or "inside,outside" (for the QR code to be printed on both sides). For letters and booklets, the values can be specific page numbers ("1", "3"), page number ranges such as "1-3", or a comma separated combination of both ("1,3,5-7").',
                        }),
                      logo: z
                        .object({
                          url: z
                            .string()
                            .regex(/^https:\/\/[-a-zA-Z0-9@:%._+~#=\/]{1,256}.(png|jpe?g)$/)
                            .exactOptional()
                            .openapi({
                              description:
                                'The public URL of the logo image to be retrieved and placed over the center of the QR code.',
                            }),
                        })
                        .exactOptional()
                        .openapi({
                          description:
                            'Allows specifying a logo to be placed over the center of the QR code.  Logos must be in PNG or JPEG format and have a maximum file size of 1 MB.',
                          required: [],
                        }),
                      style: z
                        .object({
                          background_color: z
                            .string()
                            .regex(/^#[A-Fa-f0-9]{6}$/)
                            .exactOptional()
                            .openapi({
                              description:
                                'The background color of the QR code in hexadecimal format. For example, `#000000` is black and `#FFFFFF` is white.',
                            }),
                          foreground_color: z
                            .string()
                            .regex(/^#[A-Fa-f0-9]{6}$/)
                            .exactOptional()
                            .openapi({
                              description:
                                'The foreground color of the QR code in hexadecimal format. For example, `#000000` is black and `#FFFFFF` is white.',
                            }),
                        })
                        .exactOptional()
                        .openapi({
                          description: 'Customizes the appearance of the QR code.',
                          required: [],
                        }),
                    })
                    .exactOptional()
                    .openapi({
                      description:
                        'Customize and place a QR code on the creative at the required position.',
                      required: ['position', 'redirect_url', 'width'],
                    }),
                  use_type: ((schema) =>
                    z.union([
                      schema,
                      z.preprocess((val) => (val === 'null' ? null : val), schema),
                    ]))(SfmUseTypeSchema),
                  service_request_number: ((schema) =>
                    z.union([
                      schema,
                      z.preprocess((val) => (val === 'null' ? null : val), schema),
                    ]))(ServiceRequestNumberSchema).exactOptional(),
                  fsc: z
                    .preprocess(
                      ((read) => (val: unknown) => {
                        const result = read.safeParse(val)
                        return result.success ? result.data : val
                      })(z.stringbool()),
                      z.boolean(),
                    )
                    .default(false)
                    .exactOptional()
                    .openapi({
                      description:
                        'This is in beta. Contact support@lob.com or your account contact to learn more. Not available for `11x9_bifold` self-mailer size.',
                    }),
                  print_speed: ((schema) =>
                    z.union([
                      schema,
                      z.preprocess((val) => (val === 'null' ? null : val), schema),
                    ]))(PrintSpeedSchema).exactOptional(),
                })
                .openapi({ required: ['to', 'inside', 'outside', 'use_type'] }),
            ),
          example: {
            description: 'Demo Self Mailer job',
            to: 'adr_bae820679f3f536b',
            from: 'adr_210a8d4b0b76d77b',
            inside: 'https://lob.com/selfmailerinside.pdf',
            outside: 'https://lob.com/selfmaileroutside.pdf',
            size: '12x9_bifold',
            metadata: { spiffy: 'true' },
            mail_type: 'usps_standard',
            merge_variables: { name: 'Harry' },
            send_date: '2017-11-01T00:00:00.000Z',
            use_type: 'marketing',
            qr_code: {
              position: 'relative',
              redirect_url: 'https://www.lob.com',
              width: '2.5',
              top: '2.5',
              right: '2.5',
              pages: 'inside,outside',
            },
            fsc: true,
            print_speed: 'core',
          },
        },
      },
      required: true,
    },
  },
  responses: { 200: PostSelfMailerResponse, default: MailpieceErrorResponse },
})

export const getSnapPacksSnapPackIdRoute = createRoute({
  method: 'get',
  path: '/snap_packs/{snap_pack_id}',
  tags: ['Snap Packs'],
  summary: 'Retrieve',
  description:
    'Retrieves the details of an existing snap_pack. You need to only supply the unique snap_pack identifier that was returned upon snap_pack creation.',
  operationId: 'snap_pack_retrieve',
  request: {
    params: z.object({
      snap_pack_id: SnapPackIdSchema.openapi({
        param: {
          in: 'path',
          name: 'snap_pack_id',
          description: 'id of the snap_pack',
          required: true,
          schema: { $ref: '#/components/schemas/snap_pack_id' },
        },
      }),
    }),
  },
  responses: {
    200: { description: 'Returns a snap_pack object', content: {} },
    default: MailpieceErrorResponse,
  },
})

export const deleteSnapPacksSnapPackIdRoute = createRoute({
  method: 'delete',
  path: '/snap_packs/{snap_pack_id}',
  tags: ['Snap Packs'],
  summary: 'Delete',
  description:
    "Completely removes a snap pack from production. This can only be done if the snap pack's `send_date` has not yet passed. If the snap pack is successfully canceled, you will not be charged for it.",
  operationId: 'snap_pack_delete',
  request: {
    params: z.object({
      snap_pack_id: SnapPackIdSchema.openapi({
        param: {
          in: 'path',
          name: 'snap_pack_id',
          description: 'id of the snap_pack',
          required: true,
          schema: { $ref: '#/components/schemas/snap_pack_id' },
        },
      }),
    }),
  },
  responses: { 200: SnapPackDeletedResponse, default: MailpieceErrorResponse },
})

export const getSnapPacksRoute = createRoute({
  method: 'get',
  path: '/snap_packs',
  tags: ['Snap Packs'],
  summary: 'List',
  description:
    'Returns a list of your snap_packs. The snap_packs are returned sorted by creation date, with the most recently created snap_packs appearing first.',
  operationId: 'snap_packs_list',
  request: {
    query: z
      .looseObject({})
      .transform((val) => {
        const rest: [string, unknown][] = []
        const groups = new Map<string, Record<string, unknown>>()
        const group = (name: string) => {
          const found = groups.get(name)
          if (found !== undefined) return found
          const made: Record<string, unknown> = Object.create(null)
          groups.set(name, made)
          return made
        }
        const isGroup = (item: unknown): item is Record<string, unknown> =>
          typeof item === 'object' && item !== null && !Array.isArray(item)
        const lists = new WeakSet<object>()
        const isIndex = (part: string | undefined) => part !== undefined && /^\d*$/.test(part)
        const child = (target: Record<string, unknown>, key: string, asList: boolean) => {
          const held = target[key]
          if (isGroup(held)) return held
          const made: Record<string, unknown> = Object.create(null)
          if (asList) lists.add(made)
          target[key] = made
          return made
        }
        const set = (
          root: Record<string, unknown>,
          path: readonly string[],
          item: unknown,
        ): void => {
          const work: [Record<string, unknown>, number, unknown, boolean][] = [
            [root, 0, item, false],
          ]
          for (let job = work.pop(); job !== undefined; job = work.pop()) {
            const [target, at, value, split] = job
            const head = path[at]
            if (head === undefined) continue
            const next = path[at + 1]
            if (head === '') {
              if (!split && Array.isArray(value)) {
                for (let i = value.length - 1; i >= 0; i -= 1)
                  work.push([target, at, value[i], true])
                continue
              }
              const size = Object.keys(target).length
              if (next === undefined) {
                target[String(size)] = value
                continue
              }
              const free =
                next === ''
                  ? -1
                  : Object.values(target).findIndex((held) => isGroup(held) && !(next in held))
              work.push([
                child(target, String(free < 0 ? size : free), isIndex(next)),
                at + 1,
                value,
                false,
              ])
              continue
            }
            if (next === undefined) {
              target[head] = value
              continue
            }
            work.push([child(target, head, isIndex(next)), at + 1, value, false])
          }
        }
        const settle = (root: unknown): unknown => {
          if (!isGroup(root)) return root
          const found: [Record<string, unknown>, string, Record<string, unknown>][] = []
          const queue: Record<string, unknown>[] = [root]
          for (const node of queue) {
            for (const [key, inner] of Object.entries(node)) {
              if (isGroup(inner)) {
                found.push([node, key, inner])
                queue.push(inner)
              }
            }
          }
          const finish = (group: Record<string, unknown>): unknown =>
            lists.has(group)
              ? Object.entries(group)
                  .sort((a, b) => Number(a[0]) - Number(b[0]))
                  .map(([, inner]) => inner)
              : Object.assign(Object.create(null), group)
          for (const [parent, key, group] of found.reverse()) {
            parent[key] = finish(group)
          }
          return finish(root)
        }
        const deep: string[] = ['date_created', 'metadata']
        for (const [key, item] of Object.entries(val)) {
          const match = /^([^\[\]]+)((?:\[[^\[\]]*\])+)$/.exec(key)
          const name = match?.[1]
          const path = match?.[2]
          if (name !== undefined && path !== undefined && deep.includes(name)) {
            const parts = path.slice(1, -1).split('][')
            set(group(name), parts, item)
            continue
          }
          rest.push([key, item])
        }
        return Object.fromEntries([
          ...rest,
          ...[...groups].map(([name, held]) => [name, settle(held)] as const),
        ])
      })
      .pipe(
        z.object({
          limit: LimitParamsSchema,
          'before/after': BeforeAfterParamsSchema,
          include: IncludeParamsSchema,
          date_created: DateCreatedParamsSchema,
          metadata: MetadataParamsSchema,
          send_date: SendDateParamsSchema,
          mail_type: MailTypeParamsSchema,
          sort_by: SortByParamsSchema,
          campaign_id: CampaignIdParamsSchema,
          status: StatusParamsSchema,
        }),
      ),
  },
  responses: { 200: AllSnapPacksResponse, default: MailpieceErrorResponse },
})

export const postSnapPacksRoute = createRoute({
  method: 'post',
  path: '/snap_packs',
  tags: ['Snap Packs'],
  summary: 'Create',
  description: 'Creates a new snap_pack given information',
  operationId: 'snap_pack_create',
  request: {
    headers: z.object({ 'Idempotency-Key': IdemHeaderParamsSchema }),
    query: z.object({ idempotency_key: IdemQueryParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: SnapPackEditableSchema,
          example: {
            description: 'Demo Snap Pack Job',
            to: 'adr_bae820679f3f536b',
            from: 'adr_210a8d4b0b76d77b',
            inside: 'https://lob.com/snappackinside.pdf',
            outside: 'https://lob.com/snappackoutside.pdf',
            size: '8.5x11',
            metadata: { spiffy: 'true' },
            mail_type: 'usps_standard',
            merge_variables: { name: 'Harry' },
            send_date: '2017-11-01T00:00:00.000Z',
            use_type: 'marketing',
            print_speed: 'core',
          },
        },
        'multipart/form-data': {
          schema: SnapPackBaseSchema.and(InputToSchema)
            .and(InputFromUsSchema)
            .and(
              z
                .object({
                  inside: z
                    .xor([HtmlStringSchema, TmplIdSchema, RemoteFileUrlSchema, LocalFilePathSchema])
                    .openapi({
                      description:
                        'The artwork to use as the inside of your snap pack.\n\nNotes:\n- HTML merge variables should not include delimiting whitespace.\n- PDF, PNG, and JPGs must be sized at 8.5"x11" at 300 DPI, while supplied HTML will be rendered to the specified `size`.\n- Be sure to leave room for address and postage information by following the template provided here:\n  - <a href="https://s3.us-west-2.amazonaws.com/public.lob.com/assets/8.5x11_Snappack_template_address.pdf" target="_blank">8.5x11 snap pack template</a>\n\n\nSee [here](#section/HTML-Examples) for HTML examples.\n',
                    }),
                  outside: z
                    .xor([HtmlStringSchema, TmplIdSchema, RemoteFileUrlSchema, LocalFilePathSchema])
                    .openapi({
                      description:
                        'The artwork to use as the outside of your snap pack.\n\nNotes:\n- HTML merge variables should not include delimiting whitespace.\n- PDF, PNG, and JPGs must be sized at 6"x18" at 300 DPI, while supplied HTML will be rendered to the specified `size`.\n\nSee [here](#section/HTML-Examples) for HTML examples.\n',
                    }),
                  billing_group_id: BillingGroupIdSchema.exactOptional(),
                  use_type: ((schema) =>
                    z.union([
                      schema,
                      z.preprocess((val) => (val === 'null' ? null : val), schema),
                    ]))(SnapPackUseTypeSchema),
                  color: z
                    .preprocess(
                      ((read) => (val: unknown) => {
                        const result = read.safeParse(val)
                        return result.success ? result.data : val
                      })(z.stringbool()),
                      ColorSchema,
                    )
                    .and(z.any().default(false))
                    .exactOptional(),
                  qr_code: z
                    .object({
                      position: z
                        .literal('relative')
                        .openapi({
                          description:
                            "Sets how a QR code is being positioned in the document. Together with this, you should provide one of 'top' or 'bottom', and one of 'left' or 'right'.",
                        }),
                      top: z
                        .preprocess(
                          (val) =>
                            typeof val === 'string' &&
                            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                              ? Number(val)
                              : val,
                          z.number(),
                        )
                        .exactOptional()
                        .openapi({
                          description:
                            'Vertical distance (in inches) to place QR code from the top. Only allowed if "bottom" isn\'t provided.',
                        }),
                      right: z
                        .preprocess(
                          (val) =>
                            typeof val === 'string' &&
                            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                              ? Number(val)
                              : val,
                          z.number(),
                        )
                        .exactOptional()
                        .openapi({
                          description:
                            'Horizontal distance (in inches) to place QR code from the right. Only allowed if "left" isn\'t provided.',
                        }),
                      left: z
                        .preprocess(
                          (val) =>
                            typeof val === 'string' &&
                            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                              ? Number(val)
                              : val,
                          z.number(),
                        )
                        .exactOptional()
                        .openapi({
                          description:
                            'Horizontal distance (in inches) to place QR code from the left. Only allowed if "right" isn\'t provided.',
                        }),
                      bottom: z
                        .preprocess(
                          (val) =>
                            typeof val === 'string' &&
                            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                              ? Number(val)
                              : val,
                          z.number(),
                        )
                        .exactOptional()
                        .openapi({
                          description:
                            'Vertical distance (in inches) to place QR code from the bottom. Only allowed if "top" isn\'t provided.',
                        }),
                      redirect_url: z
                        .string()
                        .openapi({
                          description:
                            'The url to redirect the user when a QR code is scanned. The URL can be a literal URL, a template URL containing merge variables, or consist entirely of merge variables. For example, `https://www.example.com` or `https://www.example.com?q={{name}}` or `{{name}}`, respectively. When a merge variable exists in the URL, it is replaced with data from merge_variables. If the variable does not exist, then nothing with be replaced and the destination URL will be the same as the input URL. More details on merge variables can be found in <a href="https://help.lob.com/print-and-mail/designing-mail-creatives/adding-qr-codes#destination-url-and-redirects" target="_blank">our help center</a>.',
                        }),
                      width: z
                        .preprocess(
                          (val) =>
                            typeof val === 'string' &&
                            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                              ? Number(val)
                              : val,
                          z.number(),
                        )
                        .openapi({
                          description:
                            'The size (in inches) of the QR code with a minimum of 1 inch. All QR codes are generated as a square.',
                        }),
                      pages: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            'Specify the pages where the QR code should be stamped in a comma separated format. Your QR code can be printed in the same position on multiple pages. For postcards, the values should either be "front", "back" (for either front or back) or "front,back" (for the QR code to be printed on both sides). For self-mailers and snap packs, the values should either be "inside", "outside" (for either inside or outside) or "inside,outside" (for the QR code to be printed on both sides). For letters and booklets, the values can be specific page numbers ("1", "3"), page number ranges such as "1-3", or a comma separated combination of both ("1,3,5-7").',
                        }),
                      logo: z
                        .object({
                          url: z
                            .string()
                            .regex(/^https:\/\/[-a-zA-Z0-9@:%._+~#=\/]{1,256}.(png|jpe?g)$/)
                            .exactOptional()
                            .openapi({
                              description:
                                'The public URL of the logo image to be retrieved and placed over the center of the QR code.',
                            }),
                        })
                        .exactOptional()
                        .openapi({
                          description:
                            'Allows specifying a logo to be placed over the center of the QR code.  Logos must be in PNG or JPEG format and have a maximum file size of 1 MB.',
                          required: [],
                        }),
                      style: z
                        .object({
                          background_color: z
                            .string()
                            .regex(/^#[A-Fa-f0-9]{6}$/)
                            .exactOptional()
                            .openapi({
                              description:
                                'The background color of the QR code in hexadecimal format. For example, `#000000` is black and `#FFFFFF` is white.',
                            }),
                          foreground_color: z
                            .string()
                            .regex(/^#[A-Fa-f0-9]{6}$/)
                            .exactOptional()
                            .openapi({
                              description:
                                'The foreground color of the QR code in hexadecimal format. For example, `#000000` is black and `#FFFFFF` is white.',
                            }),
                        })
                        .exactOptional()
                        .openapi({
                          description: 'Customizes the appearance of the QR code.',
                          required: [],
                        }),
                    })
                    .exactOptional()
                    .openapi({
                      description:
                        'Customize and place a QR code on the creative at the required position.',
                      required: ['position', 'redirect_url', 'width'],
                    }),
                  print_speed: ((schema) =>
                    z.union([
                      schema,
                      z.preprocess((val) => (val === 'null' ? null : val), schema),
                    ]))(PrintSpeedSchema).exactOptional(),
                })
                .openapi({ required: ['to', 'inside', 'outside', 'use_type'] }),
            ),
          example: {
            description: 'Demo Snap Pack job',
            to: 'adr_bae820679f3f536b',
            from: 'adr_210a8d4b0b76d77b',
            inside: 'https://lob.com/snappackinside.pdf',
            outside: 'https://lob.com/snappackoutside.pdf',
            size: '8.5x11',
            metadata: { spiffy: 'true' },
            mail_type: 'usps_standard',
            merge_variables: { name: 'Harry' },
            send_date: '2017-11-01T00:00:00.000Z',
            use_type: 'marketing',
            print_speed: 'core',
          },
        },
      },
      required: true,
    },
  },
  responses: { 200: PostSnapPackResponse, default: MailpieceErrorResponse },
})

export const getTemplatesTmplIdVersionsVrsnIdRoute = createRoute({
  method: 'get',
  path: '/templates/{tmpl_id}/versions/{vrsn_id}',
  tags: ['Template Versions'],
  summary: 'Retrieve',
  description: 'Retrieves the template version with the given template and version ids.',
  operationId: 'template_version_retrieve',
  request: {
    params: z.object({
      tmpl_id: TmplIdSchema.openapi({
        param: {
          in: 'path',
          name: 'tmpl_id',
          description: 'The ID of the template to which the version belongs.',
          required: true,
          schema: { $ref: '#/components/schemas/tmpl_id' },
        },
      }),
      vrsn_id: VrsnIdSchema.openapi({
        param: {
          in: 'path',
          name: 'vrsn_id',
          description: 'id of the template_version',
          required: true,
          schema: { $ref: '#/components/schemas/vrsn_id' },
        },
      }),
    }),
  },
  responses: {
    200: {
      description: 'Returns the template version with the given template and version ids.',
      content: {},
    },
    default: TemplateErrorResponse,
  },
})

export const postTemplatesTmplIdVersionsVrsnIdRoute = createRoute({
  method: 'post',
  path: '/templates/{tmpl_id}/versions/{vrsn_id}',
  tags: ['Template Versions'],
  summary: 'Update',
  description: 'Updates the template version with the given template and version ids.',
  operationId: 'template_version_update',
  request: {
    params: z.object({
      tmpl_id: TmplIdSchema.openapi({
        param: {
          in: 'path',
          name: 'tmpl_id',
          description: 'The ID of the template to which the version belongs.',
          required: true,
          schema: { $ref: '#/components/schemas/tmpl_id' },
        },
      }),
      vrsn_id: VrsnIdSchema.openapi({
        param: {
          in: 'path',
          name: 'vrsn_id',
          description: 'id of the template_version',
          required: true,
          schema: { $ref: '#/components/schemas/vrsn_id' },
        },
      }),
    }),
    body: {
      content: {
        'application/json': {
          schema: TemplateVersionUpdatableSchema,
          example: { description: 'Some description' },
        },
        'application/x-www-form-urlencoded': {
          schema: TemplateVersionUpdatableSchema,
          example: { description: 'Some description' },
        },
        'multipart/form-data': {
          schema: TemplateVersionUpdatableSchema,
          example: { description: 'Some description' },
        },
      },
      required: true,
    },
  },
  responses: { 200: PostTemplateVersionResponse, default: TemplateErrorResponse },
})

export const deleteTemplatesTmplIdVersionsVrsnIdRoute = createRoute({
  method: 'delete',
  path: '/templates/{tmpl_id}/versions/{vrsn_id}',
  tags: ['Template Versions'],
  summary: 'Delete',
  description:
    "Permanently deletes a template version. A template's `published_version` can not be deleted.",
  operationId: 'template_version_delete',
  request: {
    params: z.object({
      tmpl_id: TmplIdSchema.openapi({
        param: {
          in: 'path',
          name: 'tmpl_id',
          description: 'The ID of the template to which the version belongs.',
          required: true,
          schema: { $ref: '#/components/schemas/tmpl_id' },
        },
      }),
      vrsn_id: VrsnIdSchema.openapi({
        param: {
          in: 'path',
          name: 'vrsn_id',
          description: 'id of the template_version',
          required: true,
          schema: { $ref: '#/components/schemas/vrsn_id' },
        },
      }),
    }),
  },
  responses: { 200: TemplateVersionDeletedResponse, default: TemplateErrorResponse },
})

export const getTemplatesTmplIdVersionsRoute = createRoute({
  method: 'get',
  path: '/templates/{tmpl_id}/versions',
  tags: ['Template Versions'],
  summary: 'List',
  description:
    'Returns a list of template versions for the given template ID. The template versions are sorted by creation date, with the most recently created appearing first.\n',
  operationId: 'template_versions_list',
  request: {
    params: z.object({
      tmpl_id: TmplIdSchema.openapi({
        param: {
          in: 'path',
          name: 'tmpl_id',
          description: 'The ID of the template associated with the retrieved versions',
          required: true,
          schema: { $ref: '#/components/schemas/tmpl_id' },
        },
      }),
    }),
    query: z
      .looseObject({})
      .transform((val) => {
        const rest: [string, unknown][] = []
        const groups = new Map<string, Record<string, unknown>>()
        const group = (name: string) => {
          const found = groups.get(name)
          if (found !== undefined) return found
          const made: Record<string, unknown> = Object.create(null)
          groups.set(name, made)
          return made
        }
        const isGroup = (item: unknown): item is Record<string, unknown> =>
          typeof item === 'object' && item !== null && !Array.isArray(item)
        const lists = new WeakSet<object>()
        const isIndex = (part: string | undefined) => part !== undefined && /^\d*$/.test(part)
        const child = (target: Record<string, unknown>, key: string, asList: boolean) => {
          const held = target[key]
          if (isGroup(held)) return held
          const made: Record<string, unknown> = Object.create(null)
          if (asList) lists.add(made)
          target[key] = made
          return made
        }
        const set = (
          root: Record<string, unknown>,
          path: readonly string[],
          item: unknown,
        ): void => {
          const work: [Record<string, unknown>, number, unknown, boolean][] = [
            [root, 0, item, false],
          ]
          for (let job = work.pop(); job !== undefined; job = work.pop()) {
            const [target, at, value, split] = job
            const head = path[at]
            if (head === undefined) continue
            const next = path[at + 1]
            if (head === '') {
              if (!split && Array.isArray(value)) {
                for (let i = value.length - 1; i >= 0; i -= 1)
                  work.push([target, at, value[i], true])
                continue
              }
              const size = Object.keys(target).length
              if (next === undefined) {
                target[String(size)] = value
                continue
              }
              const free =
                next === ''
                  ? -1
                  : Object.values(target).findIndex((held) => isGroup(held) && !(next in held))
              work.push([
                child(target, String(free < 0 ? size : free), isIndex(next)),
                at + 1,
                value,
                false,
              ])
              continue
            }
            if (next === undefined) {
              target[head] = value
              continue
            }
            work.push([child(target, head, isIndex(next)), at + 1, value, false])
          }
        }
        const settle = (root: unknown): unknown => {
          if (!isGroup(root)) return root
          const found: [Record<string, unknown>, string, Record<string, unknown>][] = []
          const queue: Record<string, unknown>[] = [root]
          for (const node of queue) {
            for (const [key, inner] of Object.entries(node)) {
              if (isGroup(inner)) {
                found.push([node, key, inner])
                queue.push(inner)
              }
            }
          }
          const finish = (group: Record<string, unknown>): unknown =>
            lists.has(group)
              ? Object.entries(group)
                  .sort((a, b) => Number(a[0]) - Number(b[0]))
                  .map(([, inner]) => inner)
              : Object.assign(Object.create(null), group)
          for (const [parent, key, group] of found.reverse()) {
            parent[key] = finish(group)
          }
          return finish(root)
        }
        const deep: string[] = ['date_created']
        for (const [key, item] of Object.entries(val)) {
          const match = /^([^\[\]]+)((?:\[[^\[\]]*\])+)$/.exec(key)
          const name = match?.[1]
          const path = match?.[2]
          if (name !== undefined && path !== undefined && deep.includes(name)) {
            const parts = path.slice(1, -1).split('][')
            set(group(name), parts, item)
            continue
          }
          rest.push([key, item])
        }
        return Object.fromEntries([
          ...rest,
          ...[...groups].map(([name, held]) => [name, settle(held)] as const),
        ])
      })
      .pipe(
        z.object({
          limit: LimitParamsSchema,
          'before/after': BeforeAfterParamsSchema,
          include: IncludeParamsSchema,
          date_created: DateCreatedParamsSchema,
        }),
      ),
  },
  responses: { 200: AllTemplateVersionsResponse, default: TemplateErrorResponse },
})

export const postTemplatesTmplIdVersionsRoute = createRoute({
  method: 'post',
  path: '/templates/{tmpl_id}/versions',
  tags: ['Template Versions'],
  summary: 'Create',
  description: 'Creates a new template version attached to the specified template.',
  operationId: 'create_template_version',
  request: {
    params: z.object({
      tmpl_id: TmplIdSchema.openapi({
        param: {
          in: 'path',
          name: 'tmpl_id',
          description: 'The ID of the template the new version will be attached to',
          required: true,
          schema: { $ref: '#/components/schemas/tmpl_id' },
        },
      }),
    }),
    body: {
      content: {
        'application/json': {
          schema: TemplateVersionWritableSchema,
          example: { description: 'Some Description', html: '<html>HTML for {{name}}</html>' },
        },
        'application/x-www-form-urlencoded': {
          schema: TemplateVersionWritableSchema,
          example: { description: 'Some Description', html: '<html>HTML for {{name}}</html>' },
        },
        'multipart/form-data': {
          schema: TemplateVersionWritableSchema,
          example: { description: 'Some Description', html: '<html>HTML for {{name}}</html>' },
        },
      },
      required: true,
    },
  },
  responses: { 200: PostTemplateVersionResponse, default: TemplateErrorResponse },
})

export const getTemplatesTmplIdRoute = createRoute({
  method: 'get',
  path: '/templates/{tmpl_id}',
  tags: ['Templates'],
  summary: 'Retrieve',
  description:
    'Retrieves the details of an existing template. You need only supply the unique template identifier that was returned upon template creation.',
  operationId: 'template_retrieve',
  request: {
    params: z.object({
      tmpl_id: TmplIdSchema.openapi({
        param: {
          in: 'path',
          name: 'tmpl_id',
          description: 'id of the template',
          required: true,
          schema: { $ref: '#/components/schemas/tmpl_id' },
        },
      }),
    }),
  },
  responses: {
    200: { description: 'Returns a template object', content: {} },
    default: TemplateErrorResponse,
  },
})

export const postTemplatesTmplIdRoute = createRoute({
  method: 'post',
  path: '/templates/{tmpl_id}',
  tags: ['Templates'],
  summary: 'Update',
  description:
    "Updates the description and/or published version of the template with the given id. To update the template's html, create a new version of the template.",
  operationId: 'template_update',
  request: {
    params: z.object({
      tmpl_id: TmplIdSchema.openapi({
        param: {
          in: 'path',
          name: 'tmpl_id',
          description: 'id of the template',
          required: true,
          schema: { $ref: '#/components/schemas/tmpl_id' },
        },
      }),
    }),
    body: {
      content: {
        'application/json': {
          schema: TemplateUpdateSchema,
          example: { description: 'Updated Example', published_version: 'vrsn_a' },
        },
        'application/x-www-form-urlencoded': {
          schema: TemplateUpdateSchema,
          example: { description: 'Updated Example', published_version: 'vrsn_a' },
        },
        'multipart/form-data': {
          schema: TemplateUpdateSchema,
          example: { description: 'Updated Example', published_version: 'vrsn_a' },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Returns the updated template object',
      content: {},
      headers: z.object({
        'ratelimit-limit': RatelimitLimitHeaderSchema,
        'ratelimit-remaining': RatelimitRemainingHeaderSchema,
        'ratelimit-reset': RatelimitResetHeaderSchema,
      }),
    },
    default: TemplateErrorResponse,
  },
})

export const deleteTemplatesTmplIdRoute = createRoute({
  method: 'delete',
  path: '/templates/{tmpl_id}',
  tags: ['Templates'],
  summary: 'Delete',
  description:
    'Permanently deletes a template. Deleting a template also deletes its associated versions. Deleted templates can not be used to create postcard, letter, or check resources.',
  operationId: 'template_delete',
  request: {
    params: z.object({
      tmpl_id: TmplIdSchema.openapi({
        param: {
          in: 'path',
          name: 'tmpl_id',
          description: 'id of the template',
          required: true,
          schema: { $ref: '#/components/schemas/tmpl_id' },
        },
      }),
    }),
  },
  responses: { 200: TemplateDeletedResponse, default: TemplateErrorResponse },
})

export const getTemplatesRoute = createRoute({
  method: 'get',
  path: '/templates',
  tags: ['Templates'],
  summary: 'List',
  description:
    'Returns a list of your templates. The templates are returned sorted by creation date, with the most recently created templates appearing first.',
  operationId: 'templates_list',
  request: {
    query: z
      .looseObject({})
      .transform((val) => {
        const rest: [string, unknown][] = []
        const groups = new Map<string, Record<string, unknown>>()
        const group = (name: string) => {
          const found = groups.get(name)
          if (found !== undefined) return found
          const made: Record<string, unknown> = Object.create(null)
          groups.set(name, made)
          return made
        }
        const isGroup = (item: unknown): item is Record<string, unknown> =>
          typeof item === 'object' && item !== null && !Array.isArray(item)
        const lists = new WeakSet<object>()
        const isIndex = (part: string | undefined) => part !== undefined && /^\d*$/.test(part)
        const child = (target: Record<string, unknown>, key: string, asList: boolean) => {
          const held = target[key]
          if (isGroup(held)) return held
          const made: Record<string, unknown> = Object.create(null)
          if (asList) lists.add(made)
          target[key] = made
          return made
        }
        const set = (
          root: Record<string, unknown>,
          path: readonly string[],
          item: unknown,
        ): void => {
          const work: [Record<string, unknown>, number, unknown, boolean][] = [
            [root, 0, item, false],
          ]
          for (let job = work.pop(); job !== undefined; job = work.pop()) {
            const [target, at, value, split] = job
            const head = path[at]
            if (head === undefined) continue
            const next = path[at + 1]
            if (head === '') {
              if (!split && Array.isArray(value)) {
                for (let i = value.length - 1; i >= 0; i -= 1)
                  work.push([target, at, value[i], true])
                continue
              }
              const size = Object.keys(target).length
              if (next === undefined) {
                target[String(size)] = value
                continue
              }
              const free =
                next === ''
                  ? -1
                  : Object.values(target).findIndex((held) => isGroup(held) && !(next in held))
              work.push([
                child(target, String(free < 0 ? size : free), isIndex(next)),
                at + 1,
                value,
                false,
              ])
              continue
            }
            if (next === undefined) {
              target[head] = value
              continue
            }
            work.push([child(target, head, isIndex(next)), at + 1, value, false])
          }
        }
        const settle = (root: unknown): unknown => {
          if (!isGroup(root)) return root
          const found: [Record<string, unknown>, string, Record<string, unknown>][] = []
          const queue: Record<string, unknown>[] = [root]
          for (const node of queue) {
            for (const [key, inner] of Object.entries(node)) {
              if (isGroup(inner)) {
                found.push([node, key, inner])
                queue.push(inner)
              }
            }
          }
          const finish = (group: Record<string, unknown>): unknown =>
            lists.has(group)
              ? Object.entries(group)
                  .sort((a, b) => Number(a[0]) - Number(b[0]))
                  .map(([, inner]) => inner)
              : Object.assign(Object.create(null), group)
          for (const [parent, key, group] of found.reverse()) {
            parent[key] = finish(group)
          }
          return finish(root)
        }
        const deep: string[] = ['date_created', 'metadata']
        for (const [key, item] of Object.entries(val)) {
          const match = /^([^\[\]]+)((?:\[[^\[\]]*\])+)$/.exec(key)
          const name = match?.[1]
          const path = match?.[2]
          if (name !== undefined && path !== undefined && deep.includes(name)) {
            const parts = path.slice(1, -1).split('][')
            set(group(name), parts, item)
            continue
          }
          rest.push([key, item])
        }
        return Object.fromEntries([
          ...rest,
          ...[...groups].map(([name, held]) => [name, settle(held)] as const),
        ])
      })
      .pipe(
        z.object({
          limit: LimitParamsSchema,
          'before/after': BeforeAfterParamsSchema,
          include: IncludeParamsSchema,
          date_created: DateCreatedParamsSchema,
          metadata: MetadataParamsSchema,
        }),
      ),
  },
  responses: { 200: AllTemplatesResponse, default: TemplateErrorResponse },
})

export const postTemplatesRoute = createRoute({
  method: 'post',
  path: '/templates',
  tags: ['Templates'],
  summary: 'Create',
  description:
    'Creates a new template for use with the Print & Mail API. In Live mode, you can only have as many non-deleted templates as allotted in your current <a href="https://dashboard.lob.com/#/settings/editions" target="_blank">Print & Mail Edition</a>. If you attempt to create a template past your limit, you will receive a `403` error. There is no limit in Test mode.',
  operationId: 'create_template',
  request: {
    body: {
      content: {
        'application/json': {
          schema: TemplateWritableSchema,
          example: {
            description: 'demo',
            html: '<html>HTML for {{name}}</html>',
            metadata: { spiffy: 'true' },
            engine: 'handlebars',
          },
        },
        'application/x-www-form-urlencoded': {
          schema: TemplateWritableSchema,
          example: {
            description: 'demo',
            html: '<html>HTML for {{name}}</html>',
            metadata: { spiffy: 'true' },
            engine: 'handlebars',
          },
        },
        'multipart/form-data': {
          schema: TemplateWritableSchema,
          example: {
            description: 'demo',
            html: '<html>HTML for {{name}}</html>',
            metadata: { spiffy: 'true' },
            engine: 'handlebars',
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Returns a template object',
      content: {},
      headers: z.object({
        'ratelimit-limit': RatelimitLimitHeaderSchema,
        'ratelimit-remaining': RatelimitRemainingHeaderSchema,
        'ratelimit-reset': RatelimitResetHeaderSchema,
      }),
    },
    default: TemplateErrorResponse,
  },
})

export const getUploadsRoute = createRoute({
  method: 'get',
  path: '/uploads',
  tags: ['Uploads'],
  summary: 'List',
  description: 'Returns a list of your uploads. Optionally, filter uploads by campaign.',
  operationId: 'uploads_list',
  request: {
    query: z.object({
      campaignId: CmpIdSchema.openapi({
        param: {
          required: false,
          schema: { $ref: '#/components/schemas/cmp_id' },
          name: 'campaignId',
          description: 'id of the campaign',
          in: 'query',
        },
      }).exactOptional(),
    }),
  },
  responses: { 200: AllUploadsResponse },
})

export const postUploadsRoute = createRoute({
  method: 'post',
  path: '/uploads',
  tags: ['Uploads'],
  summary: 'Create',
  description: 'Creates a new upload with the provided properties.',
  operationId: 'upload_create',
  request: {
    body: { content: { 'application/json': { schema: UploadWritableSchema } }, required: true },
  },
  responses: {
    201: { description: 'Upload created successfully', content: {} },
    422: UploadValidationErrorResponse,
  },
})

export const getUploadsUplIdRoute = createRoute({
  method: 'get',
  path: '/uploads/{upl_id}',
  tags: ['Uploads'],
  summary: 'Retrieve',
  description:
    'Retrieves the details of an existing upload. You need only supply the unique upload identifier that was returned upon upload creation.',
  operationId: 'upload_retrieve',
  request: {
    params: z.object({
      upl_id: UplIdSchema.openapi({
        param: {
          in: 'path',
          name: 'upl_id',
          description: 'id of the upload',
          required: true,
          schema: { $ref: '#/components/schemas/upl_id' },
        },
      }),
    }),
  },
  responses: {
    200: { description: 'Returns an upload object', content: {} },
    404: UploadNotFoundResponse,
    422: UploadValidationErrorResponse,
  },
})

export const deleteUploadsUplIdRoute = createRoute({
  method: 'delete',
  path: '/uploads/{upl_id}',
  tags: ['Uploads'],
  summary: 'Delete',
  description:
    'Delete an existing upload. You need only supply the unique identifier that was returned upon upload creation.',
  operationId: 'upload_delete',
  request: {
    params: z.object({
      upl_id: UplIdSchema.openapi({
        param: {
          in: 'path',
          name: 'upl_id',
          description: 'id of the upload',
          required: true,
          schema: { $ref: '#/components/schemas/upl_id' },
        },
      }),
    }),
  },
  responses: { 204: { description: 'Successful Response' } },
})

export const patchUploadsUplIdRoute = createRoute({
  method: 'patch',
  path: '/uploads/{upl_id}',
  tags: ['Uploads'],
  summary: 'Update',
  description:
    'Update the details of an existing upload. You need only supply the unique identifier that was returned upon upload creation.',
  operationId: 'upload_update',
  request: {
    params: z.object({
      upl_id: UplIdSchema.openapi({
        param: {
          in: 'path',
          name: 'upl_id',
          description: 'id of the upload',
          required: true,
          schema: { $ref: '#/components/schemas/upl_id' },
        },
      }),
    }),
    body: { content: { 'application/json': { schema: UploadUpdatableSchema } }, required: true },
  },
  responses: {
    200: { description: 'Returns an upload object', content: {} },
    404: UploadNotFoundResponse,
    422: UploadValidationErrorResponse,
  },
})

export const postUploadsUplIdFileRoute = createRoute({
  method: 'post',
  path: '/uploads/{upl_id}/file',
  tags: ['Uploads'],
  summary: 'Upload file',
  description:
    'Upload an [audience file](https://help.lob.com/print-and-mail/building-a-mail-strategy/campaign-or-triggered-sends/campaign-audience-guide) and associate it with an upload.',
  operationId: 'upload_file',
  request: {
    params: z.object({
      upl_id: UplIdSchema.openapi({
        param: {
          in: 'path',
          name: 'upl_id',
          description: 'ID of the upload',
          required: true,
          schema: { $ref: '#/components/schemas/upl_id' },
        },
      }),
    }),
    body: {
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              file: z.file().exactOptional().openapi({ type: 'string', format: 'binary' }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    202: {
      description: 'Successful Response',
      content: { 'application/json': { schema: UploadFileSchema } },
    },
    422: UploadValidationErrorResponse,
  },
})

export const postUploadsUplIdExportsRoute = createRoute({
  method: 'post',
  path: '/uploads/{upl_id}/exports',
  tags: ['Uploads'],
  summary: 'Create Export',
  description:
    'Campaign Exports can help you understand exactly which records in a campaign could not be created. By initiating and retrieving an export, you will get row-by-row errors for your campaign. For a step-by-step walkthrough of creating a campaign and exporting failures, see our [Campaigns Guide](https://help.lob.com/print-and-mail/building-a-mail-strategy/campaign-or-triggered-sends/launch-your-first-campaign).\n\nCreate an export file associated with an upload.',
  operationId: 'upload_export_create',
  request: {
    params: z.object({
      upl_id: UplIdSchema.openapi({
        param: {
          in: 'path',
          name: 'upl_id',
          description: 'ID of the upload',
          required: true,
          schema: { $ref: '#/components/schemas/upl_id' },
        },
      }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({ type: z.enum(['all', 'failures', 'successes']).exactOptional() })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: UploadCreateExportSchema } },
    },
    '4XX': UploadExportErrorResponse,
  },
})

export const getUploadsUplIdReportRoute = createRoute({
  method: 'get',
  path: '/uploads/{upl_id}/report',
  tags: ['Uploads'],
  summary: 'Retrieve Line Item Report',
  description:
    "Retrieves the line item data for each row from the csv file associated with the upload id record. NOTE: This endpoint is currently feature flagged. Please reach out to Lob's support team if you  would like access to this API endpoint.",
  operationId: 'report_retrieve',
  request: {
    params: z.object({
      upl_id: UplIdSchema.openapi({
        param: {
          in: 'path',
          name: 'upl_id',
          description: 'ID of the upload',
          required: true,
          schema: { $ref: '#/components/schemas/upl_id' },
        },
      }),
    }),
    query: z.object({
      status: z
        .enum(['Validated', 'Failed', 'Processing'])
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            required: false,
            name: 'status',
            description:
              'The status of line items to filter and retrieve. By default all line items are returned.',
            schema: { enum: ['Validated', 'Failed', 'Processing'], type: 'string' },
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
          z.int().min(1).max(100),
        )
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            required: false,
            name: 'limit',
            description: 'How many results to return.',
            schema: { type: 'integer', minimum: 1, default: 100, maximum: 100, example: 10 },
          },
          example: 10,
        }),
      offset: OffsetParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Returns an report object',
      content: {
        'application/json': {
          schema: z
            .object({
              data: z.array(
                z
                  .object({
                    rowNumber: z
                      .number()
                      .exactOptional()
                      .openapi({
                        title: 'Row Number',
                        description: 'The row number of the csv file containing this data.',
                      }),
                    status: z
                      .enum(['Validated', 'Failed', 'Processing'])
                      .exactOptional()
                      .openapi({ description: 'The processing status of line item.' }),
                    errorMessage: z
                      .string()
                      .nullable()
                      .exactOptional()
                      .openapi({
                        description:
                          'The error message detailing the reason why processing the line item failed.',
                      }),
                    mailpieceId: z
                      .string()
                      .nullable()
                      .exactOptional()
                      .openapi({
                        description:
                          'The mailpiece id created from the line item when it was validated.',
                      }),
                    originalData: z
                      .object({})
                      .exactOptional()
                      .openapi({
                        description:
                          'Key-value pairs where each key is the column header and each value is the value of the column for the row.',
                      }),
                  })
                  .openapi({ required: [] }),
              ),
              next_url: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({ description: 'Url of next page of items in list.' }),
              prev_url: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({ description: 'Url of previous page of items in list.' }),
              count: CountSchema,
              total_count: z
                .int()
                .openapi({
                  description:
                    'Indicates the total number of records. Provided when the request specifies an "include" query parameter',
                }),
            })
            .openapi({ required: ['data', 'count', 'offset', 'total_count'] }),
          example: {
            id: 'ex_6a94fe68fd151e0f8',
            dateCreated: '2021-07-06T22:51:42.838Z',
            dateModified: '2022-07-06T22:51:42.838Z',
            deleted: false,
            s3Url: null,
            state: 'in_progress',
            type: 'failures',
            uploadId: 'upl_71be866e430b11e9',
          },
        },
      },
    },
    404: UploadNotFoundResponse,
  },
})

export const getUploadsUplIdExportsExIdRoute = createRoute({
  method: 'get',
  path: '/uploads/{upl_id}/exports/{ex_id}',
  tags: ['Uploads'],
  summary: 'Retrieve Export',
  description:
    "Retrieves the details of an existing export. You need only supply the unique export identifier that was returned upon export creation. If you try retrieving an export immediately after creating one (i.e., before we're done processing the export), you will get back an export object with `state = in_progress`.",
  operationId: 'export_retrieve',
  request: {
    params: z.object({
      upl_id: UplIdSchema.openapi({
        param: {
          in: 'path',
          name: 'upl_id',
          description: 'ID of the upload',
          required: true,
          schema: { $ref: '#/components/schemas/upl_id' },
        },
      }),
      ex_id: ExIdSchema.openapi({
        param: {
          in: 'path',
          name: 'ex_id',
          description: 'ID of the export',
          required: true,
          schema: { $ref: '#/components/schemas/ex_id' },
        },
      }),
    }),
  },
  responses: {
    200: {
      description: 'Returns an export object',
      content: {
        'application/json': {
          schema: z
            .object({
              id: ExIdSchema,
              dateCreated: z.iso
                .datetime({ offset: true })
                .openapi({
                  description: 'A timestamp in ISO 8601 format of the date the export was created',
                }),
              dateModified: z.iso
                .datetime({ offset: true })
                .openapi({
                  description:
                    'A timestamp in ISO 8601 format of the date the export was last modified',
                }),
              deleted: z
                .boolean()
                .openapi({
                  description: 'Returns as `true` if the resource has been successfully deleted.',
                }),
              s3Url: z.string().openapi({ description: 'The URL for the generated export file.' }),
              state: z
                .enum(['in_progress', 'failed', 'succeeded'])
                .openapi({
                  description:
                    'The state of the export file, which can be `in_progress`, `failed` or `succeeded`.',
                }),
              type: z
                .enum(['all', 'failures', 'successes'])
                .openapi({
                  description:
                    'The export file type, which can be `all`, `failures` or `successes`.',
                }),
              uploadId: UplIdSchema,
            })
            .openapi({
              required: [
                'id',
                'dateCreated',
                'dateModified',
                'deleted',
                's3Url',
                'state',
                'type',
                'uploadId',
              ],
            }),
          example: {
            id: 'ex_6a94fe68fd151e0f8',
            dateCreated: '2021-07-06T22:51:42.838Z',
            dateModified: '2022-07-06T22:51:42.838Z',
            deleted: false,
            s3Url: null,
            state: 'in_progress',
            type: 'failures',
            uploadId: 'upl_71be866e430b11e9',
          },
        },
      },
    },
  },
})

export const postUsAutocompletionsRoute = createRoute({
  method: 'post',
  path: '/us_autocompletions',
  tags: ['US Autocompletions'],
  summary: 'Autocomplete',
  description:
    "Given an address prefix consisting of a partial primary line, as well as optional input of city, state, and zip code, this functionality returns up to 10 full US address suggestions. Not all of them will turn out to be valid addresses; they'll need to be [verified](#operation/verification_us).",
  operationId: 'autocompletion',
  request: {
    query: z.object({
      case: z
        .enum(['upper', 'proper'])
        .default('upper')
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'case',
            schema: { type: 'string', enum: ['upper', 'proper'], default: 'upper' },
            description:
              'Casing of the verified address. Possible values are `upper` and `proper` for uppercased (e.g. "PO BOX") and proper-cased (e.g. "PO Box"), respectively. Only affects `primary_line`, `city`, and `state`. Default casing is `upper`.',
            required: false,
          },
        }),
      valid_addresses: z
        .stringbool()
        .pipe(z.union([z.literal(true), z.literal(false)]))
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'valid_addresses',
            schema: { type: 'boolean', enum: [true, false], default: false },
            description:
              "Possible values are `true` and `false`. If false, not all of the suggestions in the response will be valid addresses; they'll need to be verified in order to determine the deliverability. The valid_addresses flag will greatly reduce the number of keystrokes needed before reaching an intended address.",
            required: false,
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: UsAutocompletionsWritableSchema,
          examples: {
            basic: {
              value: {
                address_prefix: '185 B',
                city: 'San Francisco',
                state: 'CA',
                zip_code: '94107',
                geo_ip_sort: false,
              },
            },
            test: { value: { address_prefix: '1 sugg' } },
          },
        },
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              address_prefix: z
                .string()
                .openapi({
                  description: 'Only accepts numbers and street names in an alphanumeric format.\n',
                }),
              city: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'An optional city input used to filter suggestions. Case insensitive and does not match partial abbreviations.\n',
                }),
              state: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'An optional state input used to filter suggestions. Case insensitive and does not match partial abbreviations.\n',
                }),
              zip_code: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'An optional ZIP Code input used to filter suggestions. Matches partial entries.\n',
                }),
              geo_ip_sort: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({
                  description:
                    'If `true`, sort suggestions by proximity to the IP set in the `X-Forwarded-For` header.\n',
                }),
            })
            .openapi({ required: ['address_prefix'] }),
          examples: {
            basic: {
              value: {
                address_prefix: '185 B',
                city: 'San Francisco',
                state: 'CA',
                zip_code: '94107',
                geo_ip_sort: false,
              },
            },
            test: { value: { address_prefix: '1 sugg' } },
          },
        },
        'multipart/form-data': {
          schema: z
            .object({
              address_prefix: z
                .string()
                .openapi({
                  description: 'Only accepts numbers and street names in an alphanumeric format.\n',
                }),
              city: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'An optional city input used to filter suggestions. Case insensitive and does not match partial abbreviations.\n',
                }),
              state: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'An optional state input used to filter suggestions. Case insensitive and does not match partial abbreviations.\n',
                }),
              zip_code: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'An optional ZIP Code input used to filter suggestions. Matches partial entries.\n',
                }),
              geo_ip_sort: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({
                  description:
                    'If `true`, sort suggestions by proximity to the IP set in the `X-Forwarded-For` header.\n',
                }),
            })
            .openapi({ required: ['address_prefix'] }),
          examples: {
            basic: {
              value: {
                address_prefix: '185 B',
                city: 'San Francisco',
                state: 'CA',
                zip_code: '94107',
                geo_ip_sort: false,
              },
            },
            test: { value: { address_prefix: '1 sugg' } },
          },
        },
      },
      required: true,
    },
  },
  responses: { 200: UsAutocompletionsResponse, default: UsAutocompletionsErrorResponse },
})

export const postUsReverseGeocodeLookupsRoute = createRoute({
  method: 'post',
  path: '/us_reverse_geocode_lookups',
  tags: ['Reverse Geocode Lookups'],
  summary: 'Reverse Geocode Lookup',
  description: 'Reverse geocode a valid US location with a live API key.',
  operationId: 'reverse_geocode_lookup',
  request: {
    query: z.object({
      size: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(50),
        )
        .default(5)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'size',
            schema: { type: 'integer', minimum: 1, default: 5, maximum: 50, example: 5 },
            description:
              'Determines the number of locations returned. Possible values are between 1 and 50 and any number higher will be rounded down to 50. Default size is a list of 5 reverse geocoded locations.',
            required: false,
          },
          example: 5,
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: LocationSchema,
          example: { latitude: 37.7749, longitude: 122.4194 },
        },
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              latitude: z
                .preprocess(
                  (val) => (val === 'null' ? null : val),
                  z
                    .preprocess(
                      (val) =>
                        typeof val === 'string' &&
                        /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                        (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                          ? Number(val)
                          : val,
                      z.float32().min(-90).max(90),
                    )
                    .nullable(),
                )
                .openapi({
                  description:
                    'A positive or negative decimal indicating the geographic latitude of the address, specifying the north-to-south position of a location. This should be input with `longitude` to pinpoint locations on a map.\n',
                }),
              longitude: z
                .preprocess(
                  (val) => (val === 'null' ? null : val),
                  z
                    .preprocess(
                      (val) =>
                        typeof val === 'string' &&
                        /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                        (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                          ? Number(val)
                          : val,
                      z.float32().min(-180).max(180),
                    )
                    .nullable(),
                )
                .openapi({
                  description:
                    'A positive or negative decimal indicating the geographic longitude of the address, specifying the north-to-south position of a location. This should be input with `latitude` to pinpoint locations on a map.\n',
                }),
            })
            .openapi({ required: ['latitude', 'longitude'] }),
          example: { latitude: 37.7749, longitude: 122.4194 },
        },
        'multipart/form-data': {
          schema: z
            .object({
              latitude: z
                .preprocess(
                  (val) => (val === 'null' ? null : val),
                  z
                    .preprocess(
                      (val) =>
                        typeof val === 'string' &&
                        /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                        (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                          ? Number(val)
                          : val,
                      z.float32().min(-90).max(90),
                    )
                    .nullable(),
                )
                .openapi({
                  description:
                    'A positive or negative decimal indicating the geographic latitude of the address, specifying the north-to-south position of a location. This should be input with `longitude` to pinpoint locations on a map.\n',
                }),
              longitude: z
                .preprocess(
                  (val) => (val === 'null' ? null : val),
                  z
                    .preprocess(
                      (val) =>
                        typeof val === 'string' &&
                        /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                        (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                          ? Number(val)
                          : val,
                      z.float32().min(-180).max(180),
                    )
                    .nullable(),
                )
                .openapi({
                  description:
                    'A positive or negative decimal indicating the geographic longitude of the address, specifying the north-to-south position of a location. This should be input with `latitude` to pinpoint locations on a map.\n',
                }),
            })
            .openapi({ required: ['latitude', 'longitude'] }),
          example: { latitude: 37.7749, longitude: 122.4194 },
        },
      },
      required: true,
    },
  },
  responses: { 200: ReverseGeocodeLookupsResponse, default: ReverseGeocodeLookupsErrorResponse },
})

export const postUsVerificationsRoute = createRoute({
  method: 'post',
  path: '/us_verifications',
  tags: ['US Verifications'],
  summary: 'Single Verify',
  description:
    'Verify a US or US territory address _with a live API key_. The address can be in components (e.g. `primary_line` is "210 King Street", `zip_code` is "94107") or as a single string (e.g. "210 King Street 94107"), but not as both. Requests using a test API key validate required fields but return empty values unless specific `primary_line` values are provided. See the [US Verifications Test Environment](#section/US-Verifications-Test-Env) for details.',
  operationId: 'us_verification',
  request: {
    query: z.object({
      case: z
        .enum(['upper', 'proper'])
        .default('upper')
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'case',
            schema: { type: 'string', enum: ['upper', 'proper'], default: 'upper' },
            description:
              'Casing of the verified address. Possible values are `upper` and `proper` for uppercased (e.g. "PO BOX") and proper-cased (e.g. "PO Box"), respectively. Only affects `recipient`, `primary_line`, `secondary_line`, `urbanization`, and `last_line`. Default casing is `upper`.',
            required: false,
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: UsVerificationsWritableSchema,
          examples: {
            basic: {
              value: {
                primary_line: '210 King Street',
                city: 'San Francisco',
                state: 'CA',
                zip_code: '94107',
              },
            },
            full_payload: {
              value: {
                recipient: 'Walgreens',
                primary_line: 'Ave Wilson Churchill 123',
                secondary_line: '',
                urbanization: 'URB FAIR OAKS',
                city: 'RIO PIEDRAS',
                state: 'PR',
                zip_code: '00926',
              },
            },
            single_line: { value: { address: '210 King Street 94107' } },
            test: { value: { primary_line: 'po box', zip_code: '11111' } },
          },
        },
        'application/x-www-form-urlencoded': {
          schema: UsVerificationsWritableSchema,
          examples: {
            basic: {
              value: {
                primary_line: '210 King Street',
                city: 'San Francisco',
                state: 'CA',
                zip_code: '94107',
              },
            },
            full_payload: {
              value: {
                recipient: 'Walgreens',
                primary_line: 'Ave Wilson Churchill 123',
                secondary_line: '',
                urbanization: 'URB FAIR OAKS',
                city: 'RIO PIEDRAS',
                state: 'PR',
                zip_code: '00926',
              },
            },
            single_line: { value: { address: '210 King Street 94107' } },
            test: { value: { primary_line: 'po box', zip_code: '11111' } },
          },
        },
        'multipart/form-data': {
          schema: UsVerificationsWritableSchema,
          examples: {
            basic: {
              value: {
                primary_line: '210 King Street',
                city: 'San Francisco',
                state: 'CA',
                zip_code: '94107',
              },
            },
            full_payload: {
              value: {
                recipient: 'Walgreens',
                primary_line: 'Ave Wilson Churchill 123',
                secondary_line: '',
                urbanization: 'URB FAIR OAKS',
                city: 'RIO PIEDRAS',
                state: 'PR',
                zip_code: '00926',
              },
            },
            single_line: { value: { address: '210 King Street 94107' } },
            test: { value: { primary_line: 'po box', zip_code: '11111' } },
          },
        },
      },
      required: true,
    },
  },
  responses: { 200: UsVerificationsResponse, default: UsVerificationsErrorResponse },
})

export const postUsZipLookupsRoute = createRoute({
  method: 'post',
  path: '/us_zip_lookups',
  tags: ['Zip Lookups'],
  summary: 'Lookups',
  description: 'Returns information about a ZIP code',
  operationId: 'zip_lookup',
  request: {
    body: {
      content: {
        'application/json': { schema: Zip5Schema, example: { zip_code: '94107' } },
        'application/x-www-form-urlencoded': { schema: Zip5Schema, example: { zip_code: '94107' } },
        'multipart/form-data': { schema: Zip5Schema, example: { zip_code: '94107' } },
      },
      required: true,
    },
  },
  responses: { 200: ZipLookupsResponse, default: ZipLookupsErrorResponse },
})
