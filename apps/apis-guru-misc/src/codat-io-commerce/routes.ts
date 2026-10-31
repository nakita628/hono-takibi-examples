import { createRoute, z } from '@hono/zod-openapi'

const AddressSchema = z
  .object({
    city: z
      .string()
      .exactOptional()
      .openapi({ description: 'The third line of the address, or city' }),
    country: z.string().exactOptional().openapi({ description: 'The country for the address' }),
    line1: z.string().exactOptional().openapi({ description: 'The first line of the address' }),
    line2: z.string().exactOptional().openapi({ description: 'The second line of the address' }),
    postalCode: z
      .string()
      .exactOptional()
      .openapi({ description: 'The postal (or zip) code for the address' }),
    region: z
      .string()
      .exactOptional()
      .openapi({ description: 'The fourth line of the address, or region' }),
    type: z
      .enum(['Billing', 'Delivery', 'Order', 'Inventory', 'Unknown'])
      .exactOptional()
      .openapi({ description: 'The type of the address' }),
  })
  .openapi({ title: 'Address', 'x-internal': true, required: [] })
  .openapi('Address')

const PhoneNumberSchema = z
  .object({
    number: z
      .string()
      .nullable()
      .openapi({
        description: 'A phone number.',
        examples: ['+44 25691 154789', '(877) 492-8687', '01224 658 999'],
      }),
    type: z
      .enum(['Primary', 'Landline', 'Mobile', 'Fax', 'Unknown'])
      .openapi({ description: 'The type of phone number' }),
  })
  .openapi({ required: ['number', 'type'], title: 'Phone', 'x-internal': true })
  .openapi('PhoneNumber')

const DateTimeSchema = z
  .string()
  .openapi({
    description:
      'In Codat\'s data model, dates and times are represented using the <a class="external" href="https://en.wikipedia.org/wiki/ISO_8601" target="_blank">ISO 8601 standard</a>. Date and time fields are formatted as strings; for example:\n\n```\n2020-10-08T22:40:50Z\n2021-01-01T00:00:00\n```\n\n\n\nWhen syncing data that contains `DateTime` fields from Codat, make sure you support the following cases when reading time information:\n\n- Coordinated Universal Time (UTC): `2021-11-15T06:00:00Z`\n- Unqualified local time: `2021-11-15T01:00:00`\n- UTC time offsets: `2021-11-15T01:00:00-05:00`\n\n> Time zones\n> \n> Not all dates from Codat will contain information about time zones.  \n> Where it is not available from the underlying platform, Codat will return these as times local to the business whose data has been synced.',
    example: '2022-10-23T00:00:00Z',
    title: 'Date time',
  })
  .openapi('DateTime')

const CreatedDateSchema = z
  .object({
    createdDate: DateTimeSchema.exactOptional().openapi({
      description: 'The date the entity was created.',
    }),
  })
  .openapi({ 'x-internal': true, required: [] })
  .openapi('CreatedDate')

const ModifiedDatesSchema = z
  .object({
    modifiedDate: DateTimeSchema.exactOptional().openapi({
      description: 'The date on which this record was last modified in Codat.',
    }),
  })
  .openapi({ title: 'ModifiedDate', 'x-internal': true, required: [] })
  .and(
    z
      .object({
        sourceModifiedDate: DateTimeSchema.exactOptional().openapi({
          description: 'The date on which this record was last modified in the originating system',
        }),
      })
      .openapi({ title: 'Source Modified Date', 'x-internal': true, required: [] }),
  )
  .openapi({ 'x-internal': true })
  .openapi('ModifiedDates')

const CompanyInfoSchema = z
  .object({
    accountBalances: z
      .array(
        z
          .object({
            available: z
              .number()
              .exactOptional()
              .openapi({ description: "The account's current balance" }),
            currency: z
              .string()
              .openapi({
                description:
                  'The currency data type in Codat is the [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) currency code, e.g. _GBP_.\n\n## Unknown currencies\n\nIn line with the ISO 4217 specification, the code _XXX_ is used when the data source does not return a currency for a transaction. \n\nThere are only a very small number of edge cases where this currency code is returned by the Codat system.',
                examples: ['GBP', 'USD', 'EUR'],
                title: 'Currency',
                'x-internal': true,
              })
              .exactOptional()
              .openapi({ description: 'The currency of the account' }),
            pending: z
              .number()
              .exactOptional()
              .openapi({ description: 'Funds that are not yet available in the balance' }),
            reserved: z
              .number()
              .exactOptional()
              .openapi({ description: 'Funds reserved as holdings' }),
          })
          .openapi({ title: 'Account Balance', 'x-internal': true, required: [] }),
      )
      .exactOptional()
      .openapi({
        description: "The available and current cash balances for the company's accounts",
      }),
    addresses: z
      .array(AddressSchema)
      .exactOptional()
      .openapi({ description: 'Addresses associated with the company' }),
    baseCurrency: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The currency data type in Codat is the [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) currency code, e.g. _GBP_.\n\n## Unknown currencies\n\nIn line with the ISO 4217 specification, the code _XXX_ is used when the data source does not return a currency for a transaction. \n\nThere are only a very small number of edge cases where this currency code is returned by the Codat system.',
        examples: ['GBP', 'USD', 'EUR'],
        title: 'Currency',
        'x-internal': true,
      }),
    commercePlatformRef: z
      .string()
      .exactOptional()
      .openapi({ description: 'Identifier or reference for the company in the commerce platform' }),
    companyLegalName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The full legal name of the company', example: 'Codat Limited' }),
    companyName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the company', example: 'Codat' }),
    phoneNumbers: z
      .array(PhoneNumberSchema)
      .exactOptional()
      .openapi({ description: 'Phone numbers associated with the company' }),
    registrationNumber: z
      .string()
      .exactOptional()
      .openapi({ description: 'The registration number of the company', examples: [10480375] }),
    sourceUrls: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          "URL addresses for the originating system. For example, potential use cases include 'deeplinking' to the originating system",
        example: {
          url1: 'https://connect.sandbox.com/v2/customers',
          url2: 'https://connect.sandbox.com/v2/disputes',
        },
      }),
    webLinks: z
      .array(
        z
          .object({
            type: z
              .enum(['Website', 'Social', 'Unknown'])
              .exactOptional()
              .openapi({ description: 'The type of the weblink.' }),
            url: z.url().exactOptional().openapi({ description: 'The full URL for the weblink.' }),
          })
          .openapi({
            description: 'Weblink associated with the company.',
            example: { type: 'Website', url: 'https://codat.io' },
            title: 'Weblink',
            required: [],
          }),
      )
      .exactOptional()
      .openapi({ description: 'Weblinks associated with the company' }),
  })
  .openapi({ required: [] })
  .and(CreatedDateSchema)
  .and(ModifiedDatesSchema)
  .openapi({
    description:
      'In the Codat system, company information includes standard commercial details about \na linked company, such as their address, phone number, and company registration.\n\nExplore our [data coverage](https://knowledge.codat.io/supported-features/commerce?view=tab-by-data-type&dataType=companyInfo) for this data type.\n',
    title: 'Company Info',
  })
  .openapi('CompanyInfo')

const CustomerSchema = z
  .object({
    id: z
      .string()
      .openapi({
        description: 'A unique, persistent identifier for this record',
        examples: [
          '13d946f0-c5d5-42bc-b092-97ece17923ab',
          '9wg4lep4ush5cxs79pl8sozmsndbaukll3ind4g7buqbm1h2',
          7110701885,
          'EILBDVJVNUAGVKRQ',
        ],
        'x-codat-validation': [{ validator: 'UniqueWithinConnection' }],
      }),
  })
  .openapi({ required: ['id'], 'x-stoplight': { id: '516bf0ecc4907' } })
  .and(
    z
      .object({
        addresses: z
          .array(AddressSchema)
          .exactOptional()
          .openapi({ description: 'Addresses of the customer' }),
        customerName: z
          .string()
          .exactOptional()
          .openapi({ description: 'Name of the customer', example: 'Fred Smith' }),
        defaultCurrency: z
          .any()
          .openapi({
            description:
              'Default currency of any transactional data for the customer, \nfor example, orders or payments\n',
          })
          .and(
            z
              .string()
              .openapi({
                description:
                  'The currency data type in Codat is the [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) currency code, e.g. _GBP_.\n\n## Unknown currencies\n\nIn line with the ISO 4217 specification, the code _XXX_ is used when the data source does not return a currency for a transaction. \n\nThere are only a very small number of edge cases where this currency code is returned by the Codat system.',
                examples: ['GBP', 'USD', 'EUR'],
                title: 'Currency',
                'x-internal': true,
              }),
          )
          .exactOptional(),
        emailAddress: z
          .string()
          .exactOptional()
          .openapi({
            description: 'Email address of the customer',
            example: 'fred.smith@myCompany.com',
          }),
        note: z
          .string()
          .exactOptional()
          .openapi({ description: 'Any additional information about the customer' }),
        phone: z.lazy(() => PhoneNumberSchema).exactOptional(),
      })
      .openapi({ required: [] }),
  )
  .and(CreatedDateSchema)
  .and(ModifiedDatesSchema)
  .openapi({
    description:
      'When a customer places an order with the connected commerce store their details are added to the Customers dataset. You can use the data from the Customers endpoints to calculate key metrics, such as customer churn.\n\nExplore our [data coverage](https://knowledge.codat.io/supported-features/commerce?view=tab-by-data-type&dataType=commerce-customers) for this data type.',
    examples: [
      {
        customers: [
          {
            addresses: [
              {
                city: 'London',
                country: 'United Kingdom',
                line1: '301 Duck Pond',
                line2: '28 Green Street',
                postalCode: 'WX1X 0BE',
                region: 'England',
                type: 'billing',
              },
              {
                city: 'Paris',
                country: 'France',
                line1: 'Bread Street',
                line2: 'Bird Avenue',
                postalCode: 'WDF 123',
                region: 'France',
                type: 'delivery',
              },
            ],
            createdDate: '0001-01-01T00:00:00',
            customerName: 'Daffy Duck',
            defaultCurrency: 'GBP',
            emailAddress: 'd.duck@warnerbros.com',
            id: '15',
            modifiedDate: null,
            note: 'Regular customer',
            phone: '(877) 492-8687',
            sourceModifiedDate: '2020-09-15T23:52:28',
          },
          {
            addresses: [
              {
                city: 'London',
                country: 'United Kingdom',
                line1: '101 Fire Rooms',
                line2: 'Engine Street',
                postalCode: 'WC1X 0BE',
                region: 'England',
                type: 'billing',
              },
            ],
            createdDate: '0001-01-01T00:00:00',
            customerName: 'Tasmanian Devil',
            defaultCurrency: 'GBP',
            emailAddress: 't.devil@warnerbros.com',
            id: '18',
            modifiedDate: null,
            note: 'Handle with care',
            phone: '+1-202-555-0181',
            sourceModifiedDate: '2020-04-16T02:41:52',
          },
          {
            addresses: [
              {
                city: 'Yorkshire',
                country: 'United Kingdom',
                line1: '301 Carrot Street',
                line2: 'Orange Town',
                postalCode: 'WF1X 0BE',
                region: 'England',
                type: 'billing',
              },
              {
                city: 'Paris',
                country: 'France',
                line1: '424 Field Street',
                line2: 'The Meadow',
                postalCode: 'WDF 123',
                region: 'France',
                type: 'delivery',
              },
            ],
            createdDate: '0001-01-01T00:00:00',
            customerName: 'Bugs Bunny',
            defaultCurrency: 'GBP',
            emailAddress: 'b.bunny@warnerbros.com',
            id: 'a99f5e0c-a4db-452f-8d2c-8fd15482b384',
            modifiedDate: null,
            note: 'Regular customer',
            phone: '',
            sourceModifiedDate: '2020-08-12T14:37:37',
          },
        ],
      },
    ],
    title: 'Customer',
  })
  .openapi('Customer')

const HRefSchema = z
  .object({ href: z.string().exactOptional() })
  .openapi({ title: 'Hypertext reference', 'x-internal': true, required: [] })
  .openapi('HRef')

const LinksSchema = z
  .object({
    current: HRefSchema,
    next: HRefSchema.exactOptional(),
    previous: HRefSchema.exactOptional(),
    self: HRefSchema,
  })
  .openapi({
    examples: [
      {
        current: { href: '/companies/{id}/data/{dataType}?page=1&pageSize=10' },
        self: { href: '/companies/{id}/data/{dataType}' },
      },
    ],
    required: ['self', 'current'],
    'x-internal': true,
  })
  .openapi('Links')

const PagingInfoSchema = z
  .object({ _links: LinksSchema, pageNumber: z.int(), pageSize: z.int(), totalResults: z.int() })
  .openapi({
    examples: [
      {
        _links: {
          current: { href: '/companies/{id}/data/{dataType}?page=1&pageSize=10' },
          pageNumber: 1,
          pageSize: 10,
          self: { href: '/companies/{id}/data/{dataType}' },
          totalResults: 1,
        },
      },
    ],
    required: ['pageNumber', 'pageSize', 'totalResults', '_links'],
    'x-internal': true,
  })
  .openapi('PagingInfo')

const CustomersSchema = z
  .object({ results: z.array(CustomerSchema).exactOptional() })
  .openapi({ required: [] })
  .and(PagingInfoSchema)
  .openapi({ 'x-internal': true })
  .openapi('Customers')

const RecordRefSchema = z
  .object({
    id: z
      .string()
      .openapi({
        description: 'The unique identitifer of the record being referenced',
        examples: [
          '13d946f0-c5d5-42bc-b092-97ece17923ab',
          '9wg4lep4ush5cxs79pl8sozmsndbaukll3ind4g7buqbm1h2',
          7110701885,
          'EILBDVJVNUAGVKRQ',
        ],
      }),
    type: z.string().openapi({ description: 'The type of record being referenced.' }),
  })
  .openapi({ description: '', required: ['id', 'type'], title: 'Record Ref', 'x-internal': true })
  .openapi('RecordRef')

const DisputeSchema = z
  .object({
    id: z
      .string()
      .openapi({
        description: 'A unique, persistent identifier for this record',
        examples: [
          '13d946f0-c5d5-42bc-b092-97ece17923ab',
          '9wg4lep4ush5cxs79pl8sozmsndbaukll3ind4g7buqbm1h2',
          7110701885,
          'EILBDVJVNUAGVKRQ',
        ],
        'x-codat-validation': [{ validator: 'UniqueWithinConnection' }],
      }),
  })
  .openapi({ required: ['id'], 'x-stoplight': { id: '516bf0ecc4907' } })
  .and(
    z
      .object({
        currency: z
          .string()
          .openapi({
            description: 'Currency of the disputed transaction.',
            examples: ['GBP', 'USD', 'EUR'],
            title: 'Currency',
            'x-internal': true,
          }),
        disputedTransactions: RecordRefSchema.and(
          z
            .object({
              type: z
                .enum(['Fee', 'Order', 'Payment', 'ServiceCharge', 'Unknown'])
                .exactOptional()
                .openapi({ 'x-internal': true }),
            })
            .openapi({ required: [] }),
        )
          .exactOptional()
          .openapi({
            title: 'Transaction Source Reference',
            'x-internal': true,
            description: 'Link to the source event which triggered this transaction.',
          }),
        dueDate: DateTimeSchema.exactOptional().openapi({
          description: 'Date when the next action in the dispute resolution is due',
        }),
        reason: z
          .string()
          .exactOptional()
          .openapi({ description: 'Reason for the dispute', examples: ['Unhappy with product'] }),
        status: z
          .enum([
            'Won',
            'Lost',
            'Accepted',
            'Processing',
            'ChargeRefunded',
            'EvidenceRequired',
            'InquiryEvidenceRequired',
            'InquiryProcessing',
            'InquiryClosed',
            'WaitingThirdParty',
            'Unknown',
          ])
          .exactOptional()
          .openapi({
            description: 'Current status of the dispute',
            example: 'EvidenceRequired',
            'x-internal': true,
          }),
        totalAmount: z
          .number()
          .exactOptional()
          .openapi({
            description: 'Total transaction amount that is under dispute.',
            examples: [194.12, -283.56, 0],
          }),
      })
      .openapi({ required: ['currency'] }),
  )
  .and(CreatedDateSchema)
  .and(ModifiedDatesSchema)
  .openapi({
    description:
      "A customer may file a payment dispute with their bank or other card issuer when they're unsatisfied with their purchase or believe they have been charged incorrectly. For example:  \n- They didn't receive an order.  \n- The product they received was different to the commerce store's description.  \n- They've been the victim of online fraud.  \n\nYou can use data from the Disputes endpoints to calculate key metrics, such as the number of chargebacks.\n\nExplore our [data coverage](https://knowledge.codat.io/supported-features/commerce?view=tab-by-data-type&dataType=commerce-disputes) for this data type.",
    examples: [
      {
        createdDate: '2021-03-22T14:39:55',
        currency: 'GBP',
        disputedTransactions: [{ id: 'e63ad857-7e12-4e64-9185-cdfd7c45d09d', type: 'Order' }],
        dueDate: '2021-03-29T14:39:55',
        id: '03e608e3-bd1c-454f-8c2b-fb0133e43b95',
        modifiedDate: '2022-02-02T11:02:45Z',
        reason: 'Unhappy with product',
        sourceModifiedDate: '2021-03-22T14:39:55',
        status: 'InquiryEvidenceRequired',
        totalAmount: -47.66,
      },
    ],
    title: 'Dispute',
  })
  .openapi('Dispute')

const DisputesSchema = z
  .object({ results: z.array(DisputeSchema).exactOptional() })
  .openapi({ required: [] })
  .and(PagingInfoSchema)
  .openapi({ 'x-internal': true })
  .openapi('Disputes')

const LocationsSchema = z
  .object({
    id: z
      .string()
      .openapi({
        description: 'A unique, persistent identifier for this record',
        examples: [
          '13d946f0-c5d5-42bc-b092-97ece17923ab',
          '9wg4lep4ush5cxs79pl8sozmsndbaukll3ind4g7buqbm1h2',
          7110701885,
          'EILBDVJVNUAGVKRQ',
        ],
        'x-codat-validation': [{ validator: 'UniqueWithinConnection' }],
      }),
  })
  .openapi({ required: ['id'], 'x-stoplight': { id: '516bf0ecc4907' } })
  .and(
    z
      .object({
        address: AddressSchema.exactOptional().openapi({
          description: 'Address associated with the location',
        }),
        name: z.string().exactOptional().openapi({ description: 'Name of this location' }),
      })
      .openapi({ required: [] }),
  )
  .and(ModifiedDatesSchema)
  .openapi({
    description:
      'The Locations datatype holds information on geographic locations at which stocks of products may be held, as referenced in the Products data type.\n\nLocations also holds information on geographic locations where orders were placed, as referenced in the Orders data type.\n\nExplore our [data coverage](https://knowledge.codat.io/supported-features/commerce?view=tab-by-data-type&dataType=commerce-locations) for this data type.',
    examples: [
      {
        address: {
          city: 'London',
          country: 'United Kingdom',
          line1: 'Warner House',
          line2: "98 Theobald's Road",
          postalCode: 'WC1X 8WB',
          region: '',
          type: 'Inventory',
        },
        id: '15',
        modifiedDate: '2020-08-12T14:37:37',
        name: 'London Warehouse',
        sourceModifiedDate: '2020-08-12T14:37:37',
      },
    ],
    title: 'Locations',
  })
  .openapi('Locations')

const LocationsResponseSchema = z
  .object({ results: z.array(LocationsSchema).exactOptional() })
  .openapi({ required: [] })
  .and(PagingInfoSchema)
  .openapi({ 'x-internal': true })
  .openapi('LocationsResponse')

const OrderSchema = z
  .object({
    id: z
      .string()
      .openapi({
        description: 'A unique, persistent identifier for this record',
        examples: [
          '13d946f0-c5d5-42bc-b092-97ece17923ab',
          '9wg4lep4ush5cxs79pl8sozmsndbaukll3ind4g7buqbm1h2',
          7110701885,
          'EILBDVJVNUAGVKRQ',
        ],
        'x-codat-validation': [{ validator: 'UniqueWithinConnection' }],
      }),
  })
  .openapi({ required: ['id'], 'x-stoplight': { id: '516bf0ecc4907' } })
  .and(
    z
      .object({
        closedDate: DateTimeSchema.exactOptional().openapi({
          description:
            'Date on which order was closed after the product was shipped, paid for, and any refund period had elapsed.',
        }),
        country: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'The Codat country property is returned as it was provided in the underlying platform by the company without any formatting on our part.\n\nDepending on the platform the value of this property will either be an <a href="https://en.wikipedia.org/wiki/List_of_ISO_3166_country_codes" target="_blank">ISO 3166</a> code (2-alpha or 3-alpha) or free-form text returned as a string name in our model. \n\nFor POST operations against platforms that demand a specific format for the country code, we have documented accepted values in the [options](https://docs.codat.io/codat-api#/operations/get-companies-companyId-connections-connectionId-push) endpoint.',
            examples: ['GBR', 'USA', 'ABW'],
          }),
        currency: z
          .string()
          .openapi({
            description:
              'The currency data type in Codat is the [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) currency code, e.g. _GBP_.\n\n## Unknown currencies\n\nIn line with the ISO 4217 specification, the code _XXX_ is used when the data source does not return a currency for a transaction. \n\nThere are only a very small number of edge cases where this currency code is returned by the Codat system.',
            examples: ['GBP', 'USD', 'EUR'],
            title: 'Currency',
            'x-internal': true,
          })
          .and(z.any().openapi({ description: 'Currency in which the order was placed.' }))
          .exactOptional(),
        customerRef: z
          .object({
            id: z
              .string()
              .openapi({
                description: 'The unique identitifer of the customer being referenced',
                examples: [
                  '13d946f0-c5d5-42bc-b092-97ece17923ab',
                  '9wg4lep4ush5cxs79pl8sozmsndbaukll3ind4g7buqbm1h2',
                  7110701885,
                  'EILBDVJVNUAGVKRQ',
                ],
              }),
            name: z.string().openapi({ description: 'Name of the customer being referenced.' }),
          })
          .exactOptional()
          .openapi({
            description: 'Reference to the customer that placed the order.',
            required: ['id', 'name'],
          }),
        locationRef: z
          .object({
            id: z
              .string()
              .openapi({
                description: 'The unique identitifer of the location being referenced.',
                examples: [
                  '13d946f0-c5d5-42bc-b092-97ece17923ab',
                  '9wg4lep4ush5cxs79pl8sozmsndbaukll3ind4g7buqbm1h2',
                  7110701885,
                  'EILBDVJVNUAGVKRQ',
                ],
              }),
            name: z.string().openapi({ description: 'Name of the location being referenced.' }),
          })
          .exactOptional()
          .openapi({
            description: 'Reference to the geographic location where the order was placed.',
            required: ['id', 'name'],
          }),
        orderLineItems: z
          .array(
            z
              .object({
                id: z
                  .string()
                  .openapi({
                    description: 'A unique, persistent identifier for this record',
                    examples: [
                      '13d946f0-c5d5-42bc-b092-97ece17923ab',
                      '9wg4lep4ush5cxs79pl8sozmsndbaukll3ind4g7buqbm1h2',
                      7110701885,
                      'EILBDVJVNUAGVKRQ',
                    ],
                    'x-codat-validation': [{ validator: 'UniqueWithinConnection' }],
                  }),
              })
              .openapi({ required: ['id'], 'x-stoplight': { id: '516bf0ecc4907' } })
              .and(
                z
                  .object({
                    discountAllocations: z
                      .array(
                        z
                          .object({
                            name: z
                              .string()
                              .exactOptional()
                              .openapi({
                                description:
                                  'Name of the discount in the commerce or point of sale platform.',
                                example: 'Promotional Discount',
                              }),
                            totalAmount: z
                              .number()
                              .exactOptional()
                              .openapi({
                                description: 'Total amount of discount applied.',
                                example: 15.25,
                              }),
                          })
                          .openapi({ 'x-internal': true, required: [] }),
                      )
                      .exactOptional(),
                    productRef: z
                      .object({
                        id: z
                          .string()
                          .openapi({
                            description: 'The unique identitifer of the product being referenced.',
                            examples: [
                              '13d946f0-c5d5-42bc-b092-97ece17923ab',
                              '9wg4lep4ush5cxs79pl8sozmsndbaukll3ind4g7buqbm1h2',
                              7110701885,
                              'EILBDVJVNUAGVKRQ',
                            ],
                          }),
                        name: z
                          .string()
                          .openapi({ description: 'Name of the product being referenced.' }),
                      })
                      .exactOptional()
                      .openapi({
                        description:
                          'Reference that links the line item to the correct product details.',
                        required: ['id', 'name'],
                      }),
                    productVariantRef: z
                      .object({
                        id: z
                          .string()
                          .openapi({
                            description:
                              'The unique identitifer of the product variant being referenced.',
                            examples: [
                              '13d946f0-c5d5-42bc-b092-97ece17923ab',
                              '9wg4lep4ush5cxs79pl8sozmsndbaukll3ind4g7buqbm1h2',
                              7110701885,
                              'EILBDVJVNUAGVKRQ',
                            ],
                          }),
                        name: z
                          .string()
                          .openapi({
                            description: 'Name of the product variant being referenced.',
                          }),
                      })
                      .exactOptional()
                      .openapi({
                        description:
                          'Reference that links the line item to the specific version of product that has been ordered.',
                        required: ['id', 'name'],
                        title: 'Product Variant Ref',
                      }),
                    quantity: z
                      .number()
                      .exactOptional()
                      .openapi({
                        description:
                          'Number of units of the product sold.\nFor refunds, quantity is a negative value.\n',
                      }),
                    taxPercentage: z
                      .number()
                      .exactOptional()
                      .openapi({
                        description:
                          'Percentage rate (from 0 to 100) of any sale tax applied to the unit amount.',
                        examples: [0, 12.5, '45.00'],
                      }),
                    taxes: z
                      .array(
                        z
                          .object({
                            rate: z
                              .number()
                              .nullable()
                              .exactOptional()
                              .openapi({
                                description:
                                  'Tax amount on order line sale as available from source commerce platform.',
                              }),
                            taxComponentRef: z
                              .object({
                                id: z
                                  .string()
                                  .openapi({
                                    description:
                                      'The unique identitifer of the tax component being referenced.',
                                    examples: [
                                      '13d946f0-c5d5-42bc-b092-97ece17923ab',
                                      '9wg4lep4ush5cxs79pl8sozmsndbaukll3ind4g7buqbm1h2',
                                      7110701885,
                                      'EILBDVJVNUAGVKRQ',
                                    ],
                                  }),
                                name: z
                                  .string()
                                  .openapi({
                                    description: 'Name of the tax component being referenced.',
                                  }),
                              })
                              .exactOptional()
                              .openapi({
                                description:
                                  'Taxes rates reference object depending on the rates being available on source commerce package.',
                                required: ['id', 'name'],
                              }),
                          })
                          .openapi({ title: 'Tax Component Allocation', required: [] }),
                      )
                      .exactOptional()
                      .openapi({ description: 'Taxes breakdown as applied to order lines.' }),
                    totalAmount: z
                      .number()
                      .exactOptional()
                      .openapi({
                        description:
                          'Total price of the line item, including discounts, tax and minus any refunds.',
                      }),
                    totalTaxAmount: z
                      .number()
                      .exactOptional()
                      .openapi({ description: 'Total amount of tax applied to the line item.' }),
                    unitPrice: z
                      .number()
                      .exactOptional()
                      .openapi({ description: 'Price per unit of goods or service.' }),
                  })
                  .openapi({ required: [] }),
              ),
          )
          .exactOptional(),
        orderNumber: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'Friendly reference for the order in the commerce or point of sale platform.',
          }),
        payments: z
          .array(
            z
              .object({
                id: z
                  .string()
                  .openapi({
                    description: 'A unique, persistent identifier for this record',
                    examples: [
                      '13d946f0-c5d5-42bc-b092-97ece17923ab',
                      '9wg4lep4ush5cxs79pl8sozmsndbaukll3ind4g7buqbm1h2',
                      7110701885,
                      'EILBDVJVNUAGVKRQ',
                    ],
                    'x-codat-validation': [{ validator: 'UniqueWithinConnection' }],
                  }),
              })
              .openapi({ required: ['id'], 'x-stoplight': { id: '516bf0ecc4907' } })
              .and(
                z
                  .object({
                    amount: z
                      .number()
                      .nullable()
                      .exactOptional()
                      .openapi({
                        description: 'Payment Amount (including gratuity).',
                        examples: [194.12, -283.56, 0],
                      }),
                    currency: z
                      .string()
                      .exactOptional()
                      .openapi({
                        description: 'Currency in which the payment was made.',
                        examples: ['GBP', 'USD', 'EUR'],
                        title: 'Currency',
                        'x-internal': true,
                      }),
                    dueDate: DateTimeSchema.exactOptional().openapi({
                      description: 'Date by which payment must be made',
                    }),
                    paymentProvider: z
                      .string()
                      .exactOptional()
                      .openapi({
                        description: 'Service provider of the payment, if applicable.',
                        examples: ['Amazon Pay', 'Checkout.com', 'SagePay'],
                      }),
                    status: z
                      .enum(['Pending', 'Authorized', 'Paid', 'Failed', 'Cancelled', 'Unknown'])
                      .exactOptional()
                      .openapi({ description: 'Status of the payment', 'x-internal': true }),
                    type: z
                      .enum([
                        'Cash',
                        'Card',
                        'Invoice',
                        'OnlineCard',
                        'Swish',
                        'Vipps',
                        'Mobile',
                        'StoreCredit',
                        'Paypal',
                        'Custom',
                        'Prepaid',
                        'Unknown',
                      ])
                      .nullable()
                      .exactOptional()
                      .openapi({
                        description: 'Status of the payment',
                        example: 'Cash',
                        'x-internal': true,
                      }),
                  })
                  .openapi({ required: [] }),
              )
              .and(CreatedDateSchema)
              .and(ModifiedDatesSchema)
              .openapi({ 'x-internal': true }),
          )
          .exactOptional(),
        serviceCharges: z
          .array(
            z
              .object({
                description: z
                  .string()
                  .exactOptional()
                  .openapi({
                    description: 'Service charges for this order.',
                    example: 'A service charge',
                  }),
                quantity: z
                  .int()
                  .exactOptional()
                  .openapi({
                    description: 'The number of times the charge is charged.',
                    examples: [1, 12, 45],
                  }),
                taxAmount: z
                  .number()
                  .exactOptional()
                  .openapi({
                    description: 'Amount of the service charge that is tax.',
                    examples: [0, 12.5, 45],
                  }),
                taxPercentage: z
                  .number()
                  .exactOptional()
                  .openapi({
                    description:
                      'Percentage rate (from 0 to 100) of any tax applied to the service charge.',
                    examples: [0, 12.5, 45],
                  }),
                taxes: z
                  .array(
                    z
                      .object({
                        rate: z
                          .number()
                          .nullable()
                          .exactOptional()
                          .openapi({
                            description:
                              'Tax amount on order line sale as available from source commerce platform.',
                          }),
                        taxComponentRef: z
                          .object({
                            id: z
                              .string()
                              .openapi({
                                description:
                                  'The unique identitifer of the tax component being referenced.',
                                examples: [
                                  '13d946f0-c5d5-42bc-b092-97ece17923ab',
                                  '9wg4lep4ush5cxs79pl8sozmsndbaukll3ind4g7buqbm1h2',
                                  7110701885,
                                  'EILBDVJVNUAGVKRQ',
                                ],
                              }),
                            name: z
                              .string()
                              .openapi({
                                description: 'Name of the tax component being referenced.',
                              }),
                          })
                          .exactOptional()
                          .openapi({
                            description:
                              'Taxes rates reference object depending on the rates being available on source commerce package.',
                            required: ['id', 'name'],
                          }),
                      })
                      .openapi({ title: 'Tax Component Allocation', required: [] }),
                  )
                  .exactOptional()
                  .openapi({ description: 'Taxes breakdown as applied to service charges.' }),
                totalAmount: z
                  .number()
                  .exactOptional()
                  .openapi({
                    description: 'Total service charge, including taxes.',
                    examples: [0, 12.5, 45],
                  }),
                type: z
                  .enum(['Generic', 'Shipping', 'Overpayment', 'Unknown'])
                  .exactOptional()
                  .openapi({
                    description: 'The type of the service charge.',
                    example: 'Overpayment',
                    'x-internal': true,
                  }),
              })
              .openapi({ 'x-internal': null, required: [] }),
          )
          .exactOptional(),
        totalAmount: z
          .number()
          .exactOptional()
          .openapi({
            description:
              'Total amount of the order, including tax, net of any discounts and refunds.',
          }),
        totalDiscount: z
          .number()
          .exactOptional()
          .openapi({ description: 'Total amount of discount applied to the order.' }),
        totalGratuity: z
          .number()
          .exactOptional()
          .openapi({ description: 'Extra amount added to a bill.' }),
        totalRefund: z
          .number()
          .exactOptional()
          .openapi({
            description:
              'Total amount refunded issued by a merchant on an order (always a negative value).',
          }),
        totalTaxAmount: z
          .number()
          .exactOptional()
          .openapi({ description: 'Total amount of tax applied to the order.' }),
      })
      .openapi({ required: [] }),
  )
  .and(CreatedDateSchema)
  .and(ModifiedDatesSchema)
  .openapi({
    description:
      'Orders contain the transaction details for all products sold by the company, and include details of any payments, service charges, or refunds related to each order. You can use data from the Orders endpoints to calculate key metrics, such as gross sales values and monthly recurring revenue (MRR).\n\nExplore our [data coverage](https://knowledge.codat.io/supported-features/commerce?view=tab-by-data-type&dataType=commerce-orders) for this data type.\n',
    examples: [
      {
        country: 'CAN',
        createdDate: '2021-03-28T03:00:14',
        currency: 'CAD',
        customerRef: { id: '2634d180-7205-43f0-a73d-84af6443a005', name: 'Emmy Roberts' },
        id: '01e63721-1205-478e-8503-9d8bf8a93f44',
        locationRef: { id: '47bbffc7-c045-4b0f-a3bb-ecf1f669edfa' },
        modifiedDate: '2022-02-02T11:02:45Z',
        orderLineItems: [
          {
            discountAllocations: [],
            id: '116113a6-54d3-4624-ba73-26a77a5ffd51',
            productRef: {
              id: 'ac186646-41f2-4280-afea-1012c59459ab',
              name: 'Intelligent Concrete Salad',
            },
            productVariantRef: {
              id: 'f9ca9de5-9e31-460d-ac81-368f4e7c8fc0',
              name: 'Small Incredible Wooden Soap',
            },
            quantity: 1,
            taxPercentage: 20,
            taxes: [
              { taxAmount: '', taxComponentRef: { id: '72', name: 'Sales Tax' } },
              { taxAmount: '', taxComponentRef: { id: '72', name: 'City Tax' } },
            ],
            totalAmount: 12,
            totalTaxAmount: 2,
            unitPrice: 10,
          },
        ],
        orderNumber: '99123956',
        payments: [
          {
            amount: 12,
            createdDate: '2021-03-28T03:00:14',
            currency: 'CAD',
            dueDate: '2021-04-04T03:00:14',
            id: 'defdceb6-83a3-4b7d-a74e-e9ef947d5f48',
            modifiedDate: '2022-02-02T11:02:45',
            status: 'Unknown',
            type: 'Paypal',
          },
        ],
        serviceCharges: [
          {
            description: 'Service Charge',
            quantity: 1,
            taxAmount: 0.2,
            taxPercentage: 20,
            taxes: [{ taxAmount: '', taxComponentRef: { id: '72', name: 'Service Tax' } }],
            totalAmount: 1.2,
            type: 'Generic',
          },
        ],
        sourceModifiedDate: '2021-03-28T03:00:14',
        totalAmount: 12,
        totalDiscount: 0,
        totalGratuity: 1,
        totalRefund: 0,
        totalTaxAmount: 2,
      },
    ],
    title: 'Order',
  })
  .openapi('Order')

const OrdersSchema = z
  .object({ results: z.array(OrderSchema).exactOptional() })
  .openapi({ required: [] })
  .and(PagingInfoSchema)
  .openapi({ 'x-internal': true })
  .openapi('Orders')

const PaymentSchema = z
  .object({
    id: z
      .string()
      .openapi({
        description: 'A unique, persistent identifier for this record',
        examples: [
          '13d946f0-c5d5-42bc-b092-97ece17923ab',
          '9wg4lep4ush5cxs79pl8sozmsndbaukll3ind4g7buqbm1h2',
          7110701885,
          'EILBDVJVNUAGVKRQ',
        ],
        'x-codat-validation': [{ validator: 'UniqueWithinConnection' }],
      }),
  })
  .openapi({ required: ['id'], 'x-stoplight': { id: '516bf0ecc4907' } })
  .and(
    z
      .object({
        amount: z
          .number()
          .exactOptional()
          .openapi({
            description: 'Payment Amount (including gratuity)',
            examples: [194.12, -283.56, 0],
          }),
        currency: z
          .string()
          .exactOptional()
          .openapi({
            description: 'Currency in which the payment was made',
            examples: ['GBP', 'USD', 'EUR'],
            title: 'Currency',
            'x-internal': true,
          }),
        dueDate: DateTimeSchema.exactOptional().openapi({
          description: 'Date by which payment must be made',
        }),
        paymentMethodRef: z
          .object({
            id: z
              .string()
              .openapi({ description: 'The unique identitifer of the location being referenced.' }),
            name: z.string().openapi({ description: 'Name of the location being referenced.' }),
          })
          .exactOptional()
          .openapi({
            description: 'The payment method the payment is linked to in the commerce platform.',
            example: { id: 'EILBDVJVNUAGVKRQ', name: 'AliPay' },
            required: ['id', 'name'],
          }),
        paymentProvider: z
          .string()
          .exactOptional()
          .openapi({
            description: 'Service provider of the payment, if applicable.',
            examples: ['Amazon Pay', 'Checkout.com', 'SagePay'],
          }),
        status: z
          .enum(['Pending', 'Authorized', 'Paid', 'Failed', 'Cancelled', 'Unknown'])
          .exactOptional()
          .openapi({ description: 'Status of the payment', 'x-internal': true }),
      })
      .openapi({ required: [] }),
  )
  .and(CreatedDateSchema)
  .and(ModifiedDatesSchema)
  .openapi({
    description:
      'Payments contain details of all payments made by customers to a company, including: amounts, currency used, payment method, payment provider, and payment status.\n\nRefunds are recorded as separate, negative payments. Note that a refund can only occur in relation to a payment that has been completed (i.e. has a status of `Paid`). When a customer cancels an order _before_ a payment has been completed, the payment shows as `Cancelled`.\n\nYou can use data from the Payments endpoints to calculate key metrics, such as gross sales and monthly recurring revenue (MRR).\n\nExplore our [data coverage](https://knowledge.codat.io/supported-features/commerce?view=tab-by-data-type&dataType=commerce-payments) for this data type.',
    title: 'Payment',
  })
  .openapi('Payment')

const PaymentMethodSchema = z
  .object({
    id: z
      .string()
      .openapi({
        description: 'A unique, persistent identifier for this record',
        examples: [
          '13d946f0-c5d5-42bc-b092-97ece17923ab',
          '9wg4lep4ush5cxs79pl8sozmsndbaukll3ind4g7buqbm1h2',
          7110701885,
          'EILBDVJVNUAGVKRQ',
        ],
        'x-codat-validation': [{ validator: 'UniqueWithinConnection' }],
      }),
  })
  .openapi({ required: ['id'], 'x-stoplight': { id: '516bf0ecc4907' } })
  .and(
    z
      .object({
        name: z
          .string()
          .exactOptional()
          .openapi({ description: 'The name of the PaymentMethod', example: 'Alipay' }),
        status: z
          .enum(['Active', 'Archived', 'Unknown'])
          .exactOptional()
          .openapi({ description: 'Status of the Payment Method', example: 'Active' }),
      })
      .openapi({ required: [] }),
  )
  .and(ModifiedDatesSchema)
  .openapi({
    description:
      'A Payment Method represents the payment method(s) used to make payments.\n\nExplore our [data coverage](https://knowledge.codat.io/supported-features/commerce?view=tab-by-data-type&dataType=commerce-paymentMethods) for this data type.',
    title: 'Payment Method',
  })
  .openapi('PaymentMethod')

const PaymentMethodsSchema = z
  .object({ results: z.array(PaymentMethodSchema).exactOptional() })
  .openapi({ required: [] })
  .and(PagingInfoSchema)
  .openapi({ 'x-internal': true })
  .openapi('PaymentMethods')

const PaymentsSchema = z
  .object({ results: z.array(PaymentSchema).exactOptional() })
  .openapi({ required: [] })
  .and(PagingInfoSchema)
  .openapi({ 'x-internal': true })
  .openapi('Payments')

const ProductSchema = z
  .object({
    id: z
      .string()
      .openapi({
        description: 'A unique, persistent identifier for this record',
        examples: [
          '13d946f0-c5d5-42bc-b092-97ece17923ab',
          '9wg4lep4ush5cxs79pl8sozmsndbaukll3ind4g7buqbm1h2',
          7110701885,
          'EILBDVJVNUAGVKRQ',
        ],
        'x-codat-validation': [{ validator: 'UniqueWithinConnection' }],
      }),
  })
  .openapi({ required: ['id'], 'x-stoplight': { id: '516bf0ecc4907' } })
  .and(
    z
      .object({
        categorization: z
          .string()
          .exactOptional()
          .openapi({
            description: 'Retail category that the product is assigned to',
            examples: ['Hardware', 'Software', 'Support Services'],
          }),
        description: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'Description of the product recorded in the commerce or point of sale platform.',
            examples: [
              '1tb Western Digital Hard Drive',
              'Install of Windows 11 (Professional Edition)',
              '1 hour of support from an agent (phone or remote)',
            ],
          }),
        isGiftCard: z
          .boolean()
          .exactOptional()
          .openapi({
            description:
              'Whether the product represents a gift card or voucher that\ncan be redeemed in the commerce or POS platform\n',
          }),
        name: z
          .string()
          .exactOptional()
          .openapi({
            description: 'Name of the product in the commerce or POS system',
            examples: ['Hard Drive', 'Windows Installation', 'Software Support (Hourly)'],
          }),
        variants: z
          .array(
            z
              .object({
                id: z
                  .string()
                  .openapi({
                    description: 'A unique, persistent identifier for this record',
                    examples: [
                      '13d946f0-c5d5-42bc-b092-97ece17923ab',
                      '9wg4lep4ush5cxs79pl8sozmsndbaukll3ind4g7buqbm1h2',
                      7110701885,
                      'EILBDVJVNUAGVKRQ',
                    ],
                    'x-codat-validation': [{ validator: 'UniqueWithinConnection' }],
                  }),
              })
              .openapi({
                required: ['id'],
                'x-stoplight': { id: '516bf0ecc4907' },
                description: 'Identifier of the product variant, unique to the company.',
              })
              .and(
                z
                  .object({
                    barcode: z
                      .string()
                      .exactOptional()
                      .openapi({
                        description:
                          'Unique product number of the variant. This might be a barcode, UPC, ISBN, etc.',
                        examples: ['564158468416486458646886484', 'CSE370'],
                      }),
                    inventory: z
                      .array(
                        z
                          .object({
                            locations: z
                              .array(
                                z
                                  .object({
                                    locationRef: z
                                      .object({
                                        id: z
                                          .string()
                                          .openapi({
                                            description:
                                              'The unique identitifer of the location being referenced.',
                                            examples: [
                                              '13d946f0-c5d5-42bc-b092-97ece17923ab',
                                              '9wg4lep4ush5cxs79pl8sozmsndbaukll3ind4g7buqbm1h2',
                                              7110701885,
                                              'EILBDVJVNUAGVKRQ',
                                            ],
                                          }),
                                        name: z
                                          .string()
                                          .openapi({
                                            description: 'Name of the location being referenced.',
                                          }),
                                      })
                                      .exactOptional()
                                      .openapi({
                                        description:
                                          'Reference to the geographic location where the order was placed.',
                                        required: ['id', 'name'],
                                      }),
                                    quantity: z.number().exactOptional(),
                                  })
                                  .openapi({
                                    title: 'Product Inventory Location',
                                    'x-internal': true,
                                    required: [],
                                  }),
                              )
                              .exactOptional(),
                            totalQuantity: z.number().nullable().exactOptional(),
                          })
                          .openapi({
                            title: 'Product Inventory',
                            'x-internal': true,
                            required: [],
                          }),
                      )
                      .exactOptional()
                      .openapi({
                        description:
                          'Information about the total inventory as well as the locations inventory is in.',
                      }),
                    isTaxEnabled: z
                      .boolean()
                      .exactOptional()
                      .openapi({
                        description: 'Whether sales taxes are enabled for this product variant.',
                      }),
                    name: z
                      .string()
                      .exactOptional()
                      .openapi({
                        description:
                          'Name of the product recorded in the commerce or point of sale platform.',
                        examples: ['Red Coat', 'Black Coat', 'Large Brown Hat'],
                      }),
                    prices: z
                      .array(
                        z
                          .object({
                            currency: z
                              .string()
                              .nullable()
                              .exactOptional()
                              .openapi({
                                description:
                                  'The currency data type in Codat is the [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) currency code, e.g. _GBP_.\n\n## Unknown currencies\n\nIn line with the ISO 4217 specification, the code _XXX_ is used when the data source does not return a currency for a transaction. \n\nThere are only a very small number of edge cases where this currency code is returned by the Codat system.',
                                examples: ['GBP', 'USD', 'EUR'],
                                title: 'Currency',
                                'x-internal': true,
                              }),
                            unitPrice: z.number().exactOptional(),
                          })
                          .openapi({
                            title: 'Product Price Variant',
                            'x-internal': true,
                            required: [],
                          }),
                      )
                      .exactOptional()
                      .openapi({
                        description: 'Prices for the product variants in different currencies.',
                      }),
                    shippingRequired: z
                      .boolean()
                      .exactOptional()
                      .openapi({
                        description:
                          'Indicates whether or not the product requires physical delivery.',
                      }),
                    sku: z
                      .string()
                      .exactOptional()
                      .openapi({
                        description:
                          'SKU (stock keeping unit) of the variant, as defined by the merchant.',
                        examples: ['Coat-Red-Lrg', 'Coat-Black-Md', 'LargeBrownHat', 'A725BA2'],
                      }),
                    status: z
                      .enum(['Unknown', 'Published', 'Unpublished'])
                      .exactOptional()
                      .openapi({ 'x-internal': true }),
                    unitOfMeasure: z
                      .string()
                      .exactOptional()
                      .openapi({
                        description: 'Unit of measure for the variant, such as `kg` or `meters`.',
                        examples: ['kg', 'm', 'meters'],
                      }),
                    vatPercentage: z
                      .number()
                      .exactOptional()
                      .openapi({
                        description: 'VAT rate for the product variant if sales taxes are enabled.',
                        examples: [12.5, 0, 20],
                      }),
                  })
                  .openapi({ required: [] }),
              )
              .and(CreatedDateSchema)
              .and(ModifiedDatesSchema)
              .openapi({
                description:
                  'Represents a variation of a product available for sale, for example an item of clothing that may be available for sale in multiple sizes and colors.\n',
                title: 'Product Variant',
                'x-internal': true,
              }),
          )
          .exactOptional(),
      })
      .openapi({ required: [] }),
  )
  .openapi({
    description:
      "A Product is an item in the company's inventory, and includes information about the price and quantity of all products, and variants thereof, available for sale.\n\nExplore our [data coverage](https://knowledge.codat.io/supported-features/commerce?view=tab-by-data-type&dataType=commerce-products) for this data type.\n",
    title: 'Product',
  })
  .openapi('Product')

const ProductCategorySchema = z
  .object({
    ancestorRefs: z
      .array(RecordRefSchema)
      .exactOptional()
      .openapi({
        description:
          'A collection of parent product categories implicitly ordered with the immediate parent last in the list.',
      }),
    hasChildren: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'A boolean indicating whether there are other product categories beneath this one in the hierarchy.',
      }),
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The unique identifier of the product category', example: '"102"' }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the product category', example: 'Entertainment' }),
  })
  .openapi({ required: [] })
  .and(ModifiedDatesSchema)
  .openapi({
    description:
      'Product categories are used to classify a group of products together, either by type (e.g. "Furniture"), or sometimes by tax profile.\n\nExplore our [data coverage](https://knowledge.codat.io/supported-features/commerce?view=tab-by-data-type&dataType=commerce-productCategories) for this data type.',
    examples: [
      {
        productCategories: [
          {
            ancestorRefs: [],
            hasChildren: true,
            id: '100',
            modifiedDate: '2022-01-01T12:00:00Z',
            name: 'Entertainment',
            sourceModifiedDate: '2021-10-01T12:53:21Z',
          },
          {
            ancestorRefs: [{ id: '100', name: 'Entertainment' }],
            hasChildren: true,
            id: '101',
            modifiedDate: '2022-01-01T12:00:00Z',
            name: 'Cinema',
            sourceModifiedDate: '2021-10-01T12:55:02Z',
          },
          {
            ancestorRefs: [
              { id: '100', name: 'Entertainment' },
              { id: '101', name: 'Cinema' },
            ],
            hasChildren: false,
            id: '102',
            modifiedDate: '2022-01-01T12:00:00Z',
            name: 'Movie',
            sourceModifiedDate: '2021-12-25T12:00:00Z',
          },
        ],
      },
    ],
    title: 'Product Category',
  })
  .openapi('ProductCategory')

const ProductCategoriesSchema = z
  .object({ results: z.array(ProductCategorySchema).exactOptional() })
  .openapi({ required: [] })
  .and(PagingInfoSchema)
  .openapi({ 'x-internal': true })
  .openapi('ProductCategories')

const ProductsSchema = z
  .object({ results: z.array(ProductSchema).exactOptional() })
  .openapi({ required: [] })
  .and(PagingInfoSchema)
  .openapi({ 'x-internal': true })
  .openapi('Products')

const TaxComponentSchema = z
  .object({
    id: z
      .string()
      .openapi({
        description: 'A unique, persistent identifier for this record',
        examples: [
          '13d946f0-c5d5-42bc-b092-97ece17923ab',
          '9wg4lep4ush5cxs79pl8sozmsndbaukll3ind4g7buqbm1h2',
          7110701885,
          'EILBDVJVNUAGVKRQ',
        ],
        'x-codat-validation': [{ validator: 'UniqueWithinConnection' }],
      }),
  })
  .openapi({ required: ['id'], 'x-stoplight': { id: '516bf0ecc4907' } })
  .and(
    z
      .object({
        isCompound: z
          .boolean()
          .exactOptional()
          .openapi({
            description:
              'The Boolean flag to indicate when a Tax Rate Component compounds on a sale.',
            examples: [true, false],
          }),
        name: z
          .string()
          .exactOptional()
          .openapi({
            description: 'Name of the Tax Rate Component in the source commerce platform.',
            example: 'Sales Tax',
          }),
        rate: z
          .float32()
          .exactOptional()
          .openapi({
            description:
              'Rate of taxation represented as a fraction of the net price (typically in the range 0.00 - 1.00).',
            examples: [0.15, 0.2],
          }),
      })
      .openapi({ required: [] }),
  )
  .and(ModifiedDatesSchema.openapi({ required: ['name'] }))
  .openapi({
    description:
      'The Tax Components endpoints return tax rates data from the commerce platform, including tax rate names and values. This is to support the mapping of tax rates from the commerce platform to those in the accounting platform.\n\nExplore our [data coverage](https://knowledge.codat.io/supported-features/commerce?view=tab-by-data-type&dataType=commerce-disputes) for this data type.',
    examples: [
      {
        id: '13d946f0-c5d5-42bc-b092-97ece17923ab',
        isCompound: true,
        modifiedDate: '2022-10-23T00:00:00Z',
        name: 'Sales Tax (15%)',
        rate: 0.15,
        sourceModifiedDate: '2022-10-23T00:00:00Z',
      },
    ],
    title: 'Tax Component',
  })
  .openapi('TaxComponent')

const TaxComponentsSchema = z
  .object({ taxComponents: z.array(TaxComponentSchema).exactOptional() })
  .openapi({ 'x-internal': true, required: [] })
  .openapi('TaxComponents')

const TransactionSchema = z
  .object({
    id: z
      .string()
      .openapi({
        description: 'A unique, persistent identifier for this record',
        examples: [
          '13d946f0-c5d5-42bc-b092-97ece17923ab',
          '9wg4lep4ush5cxs79pl8sozmsndbaukll3ind4g7buqbm1h2',
          7110701885,
          'EILBDVJVNUAGVKRQ',
        ],
        'x-codat-validation': [{ validator: 'UniqueWithinConnection' }],
      }),
  })
  .openapi({ required: ['id'], 'x-stoplight': { id: '516bf0ecc4907' } })
  .and(
    z
      .object({
        currency: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'The currency data type in Codat is the [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) currency code, e.g. _GBP_.\n\n## Unknown currencies\n\nIn line with the ISO 4217 specification, the code _XXX_ is used when the data source does not return a currency for a transaction. \n\nThere are only a very small number of edge cases where this currency code is returned by the Codat system.',
            examples: ['GBP', 'USD', 'EUR'],
            title: 'Currency',
            'x-internal': true,
          }),
        subType: z
          .string()
          .exactOptional()
          .openapi({
            description: 'Non-standardised transaction type data from the commerce platform',
            examples: ['CardPayment', 'Invoice payment'],
          }),
        totalAmount: z
          .number()
          .exactOptional()
          .openapi({ description: 'The total transaction amount', examples: [194.12, -283.56, 0] }),
        transactionSourceRef: RecordRefSchema.and(
          z
            .object({
              type: z
                .enum(['Fee', 'Order', 'Payment', 'ServiceCharge', 'Unknown'])
                .exactOptional()
                .openapi({ 'x-internal': true }),
            })
            .openapi({ required: [] }),
        )
          .openapi({ title: 'Transaction Source Reference', 'x-internal': true })
          .exactOptional()
          .openapi({ description: 'Link to the source event which triggered this transaction' }),
        type: z
          .enum([
            'Payment',
            'Refund',
            'Payout',
            'FailedPayout',
            'Transfer',
            'PaymentFee',
            'PaymentFeeRefund',
            'Unknown',
          ])
          .exactOptional()
          .openapi({
            description:
              "The type of the platform transaction:  \n- `Unknown`  \n- `FailedPayout` — Failed transfer of funds from the seller's merchant account to their bank account.  \n- `Payment` — Credit and debit card payments.  \n- `PaymentFee` — Payment provider's fee on each card payment.  \n- `PaymentFeeRefund` — Payment provider's fee that has been refunded to the seller.  \n- `Payout` — Transfer of funds from the seller's merchant account to their bank account.  \n- `Refund` — Refunds to a customer's credit or debit card.  \n- `Transfer` — Secure transfer of funds to the seller's bank account.  ",
            'x-iternal': true,
          }),
      })
      .openapi({ required: [] }),
  )
  .and(
    CreatedDateSchema.and(
      z
        .object({
          sourceCreatedDate: DateTimeSchema.exactOptional().openapi({
            description: 'The date on which this record was created in the originating system',
          }),
        })
        .openapi({ 'x-stoplight': { id: 'gdyjg7bg783br' }, required: [] }),
    )
      .openapi({ 'x-stoplight': { id: 'c590b4405180f' } })
      .and(ModifiedDatesSchema)
      .openapi({ 'x-stoplight': { id: '9e815c1766554' } }),
  )
  .openapi({
    description:
      'Details of all financial transactions recorded in the commerce or point of sale system are added to the Transactions data type. For example, payments, service charges, and fees.\n\nYou can use data from the Transactions endpoints to calculate key metrics, such as:  \n- Transaction volumes  \n- Average transaction volume  \n- Average transaction value  \n- Returns  \n- Payouts\n\nExplore our [data coverage](https://knowledge.codat.io/supported-features/commerce?view=tab-by-data-type&dataType=commerce-transactions) for this data type.',
    examples: [],
    title: 'Transaction',
  })
  .openapi('Transaction')

const TransactionsSchema = z
  .object({ results: z.array(TransactionSchema).exactOptional() })
  .openapi({ required: [] })
  .and(PagingInfoSchema)
  .openapi({ 'x-internal': true })
  .openapi('Transactions')

const CompanyIdParamsSchema = z
  .uuid()
  .openapi({
    param: {
      in: 'path',
      name: 'companyId',
      required: true,
      schema: {
        description: 'Unique identifier for your SMB in Codat.',
        example: '8a210b68-6988-11ed-a1eb-0242ac120002',
        format: 'uuid',
        type: 'string',
      },
    },
    description: 'Unique identifier for your SMB in Codat.',
    example: '8a210b68-6988-11ed-a1eb-0242ac120002',
  })

const ConnectionIdParamsSchema = z
  .uuid()
  .openapi({
    param: {
      in: 'path',
      name: 'connectionId',
      required: true,
      schema: {
        description: "Unique identifier for a company's data connection.",
        example: '2e9d2c44-f675-40ba-8049-353bfcb5e171',
        format: 'uuid',
        type: 'string',
      },
    },
    description: "Unique identifier for a company's data connection.",
    example: '2e9d2c44-f675-40ba-8049-353bfcb5e171',
  })

const OrderByParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        'Field to order results by. [Read more](https://docs.codat.io/using-the-api/ordering-results).',
      in: 'query',
      name: 'orderBy',
      required: false,
      schema: { example: '-modifiedDate', type: 'string' },
      'x-stoplight': { id: '4je9lwo02netu' },
    },
    example: '-modifiedDate',
  })

const PageParamsSchema = z
  .preprocess(
    (val) =>
      typeof val === 'string' &&
      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
        ? Number(val)
        : val,
    z.int32().min(0),
  )
  .default(1)
  .openapi({
    param: {
      description: 'Page number. [Read more](https://docs.codat.io/using-the-api/paging).',
      in: 'query',
      name: 'page',
      required: true,
      schema: { default: 1, example: 1, format: 'int32', minimum: 0, type: 'integer' },
      'x-stoplight': { id: '1318joqblpp4e' },
    },
    example: 1,
  })

const PageSizeParamsSchema = z
  .preprocess(
    (val) =>
      typeof val === 'string' &&
      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
        ? Number(val)
        : val,
    z.int32().min(1).max(5000),
  )
  .default(100)
  .exactOptional()
  .openapi({
    param: {
      description:
        'Number of records to return in a page. [Read more](https://docs.codat.io/using-the-api/paging).',
      in: 'query',
      name: 'pageSize',
      schema: {
        default: 100,
        example: 100,
        format: 'int32',
        maximum: 5000,
        minimum: 1,
        type: 'integer',
      },
      'x-stoplight': { id: 's2ika6rltk5y6' },
      required: false,
    },
    example: 100,
  })

const QueryParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'Codat query string. [Read more](https://docs.codat.io/using-the-api/querying).',
      in: 'query',
      name: 'query',
      required: false,
      schema: { type: 'string' },
      'x-stoplight': { id: 'gupdb9kt30hfq' },
    },
  })

const AuthHeaderSecurityScheme = {
  description:
    'The word "Basic" followed by a space and your API Key, base64 encoded, which can be found [here](https://app.codat.io/developers/api-keys)',
  in: 'header',
  name: 'Authorization',
  type: 'apiKey',
}

export const getCompaniesCompanyIdConnectionsConnectionIdDataCommerceCustomersRoute = createRoute({
  method: 'get',
  path: '/companies/{companyId}/connections/{connectionId}/data/commerce-customers',
  tags: ['Customers'],
  summary: 'List customers',
  description: 'List all commerce customers for the given company and data connection',
  operationId: 'list-customers',
  request: {
    params: z.object({ companyId: CompanyIdParamsSchema, connectionId: ConnectionIdParamsSchema }),
    query: z.object({
      page: PageParamsSchema,
      pageSize: PageSizeParamsSchema,
      query: QueryParamsSchema,
      orderBy: OrderByParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: CustomersSchema,
          examples: {
            Customers: {
              value: {
                _links: {
                  current: { href: '../dictionary' },
                  next: { href: '../dictionary' },
                  previous: { href: '../dictionary' },
                  self: { href: '../dictionary' },
                },
                pageNumber: 0,
                pageSize: 0,
                results: [
                  {
                    amount: 194.12,
                    createdDate: '2019-08-24T14:15:22Z',
                    currency: 'GBP',
                    dueDate: '2019-08-24T14:15:22Z',
                    id: '13d946f0-c5d5-42bc-b092-97ece17923ab',
                    modifiedDate: '2019-08-24T14:15:22Z',
                    paymentMethodRef: { id: 'EILBDVJVNUAGVKRQ', name: 'AliPay' },
                    paymentProvider: 'Amazon Pay',
                    sourceModifiedDate: '2019-08-24T14:15:22Z',
                    status: 'Pending',
                  },
                ],
                totalResults: 0,
              },
            },
          },
        },
      },
    },
  },
})

export const getCompaniesCompanyIdConnectionsConnectionIdDataCommerceDisputesRoute = createRoute({
  method: 'get',
  path: '/companies/{companyId}/connections/{connectionId}/data/commerce-disputes',
  tags: ['Disputes'],
  summary: 'List disputes',
  description: 'List commerce disputes',
  operationId: 'list-disputes',
  request: {
    params: z.object({ companyId: CompanyIdParamsSchema, connectionId: ConnectionIdParamsSchema }),
    query: z.object({
      page: PageParamsSchema,
      pageSize: PageSizeParamsSchema,
      query: QueryParamsSchema,
      orderBy: OrderByParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: DisputesSchema,
          examples: {
            Example: {
              value: {
                _links: {
                  current: { href: '../dictionary' },
                  next: { href: '../dictionary' },
                  previous: { href: '../dictionary' },
                  self: { href: '../dictionary' },
                },
                pageNumber: 0,
                pageSize: 0,
                results: [
                  {
                    createdDate: '2019-08-24T14:15:22Z',
                    currency: 'GBP',
                    disputedTransactions: {
                      id: '13d946f0-c5d5-42bc-b092-97ece17923ab',
                      type: 'Fee',
                    },
                    dueDate: '2021-03-29T14:39:55',
                    id: '13d946f0-c5d5-42bc-b092-97ece17923ab',
                    modifiedDate: '2019-08-24T14:15:22Z',
                    reason: 'Unhappy with product',
                    sourceModifiedDate: '2019-08-24T14:15:22Z',
                    status: 'Won',
                    totalAmount: 194.12,
                  },
                ],
                totalResults: 0,
              },
            },
          },
        },
      },
    },
  },
})

export const getCompaniesCompanyIdConnectionsConnectionIdDataCommerceInfoRoute = createRoute({
  method: 'get',
  path: '/companies/{companyId}/connections/{connectionId}/data/commerce-info',
  tags: ['Company info'],
  summary: 'Get company info',
  description:
    'Retrieve information about the company, as seen in the commerce platform.\n\nThis may include information like addresses, tax registration details and social media or website information.',
  operationId: 'get-company-info',
  request: {
    params: z.object({ companyId: CompanyIdParamsSchema, connectionId: ConnectionIdParamsSchema }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: CompanyInfoSchema } } },
  },
})

export const getCompaniesCompanyIdConnectionsConnectionIdDataCommerceLocationsRoute = createRoute({
  method: 'get',
  path: '/companies/{companyId}/connections/{connectionId}/data/commerce-locations',
  tags: ['Locations'],
  summary: 'List locations',
  description:
    'Retrieve a list of locations as seen in the commerce platform.\n\nA `location` is a geographic place at which stocks of products may be held, or from where orders were placed.',
  operationId: 'list-locations',
  request: {
    params: z.object({ companyId: CompanyIdParamsSchema, connectionId: ConnectionIdParamsSchema }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: LocationsResponseSchema,
          examples: {
            Example: {
              value: {
                _links: {
                  current: { href: '../dictionary' },
                  next: { href: '../dictionary' },
                  previous: { href: '../dictionary' },
                  self: { href: '../dictionary' },
                },
                pageNumber: 0,
                pageSize: 0,
                results: [
                  {
                    address: {
                      city: 'string',
                      country: 'string',
                      line1: 'string',
                      line2: 'string',
                      postalCode: 'string',
                      region: 'string',
                      type: 'Billing',
                    },
                    id: '13d946f0-c5d5-42bc-b092-97ece17923ab',
                    modifiedDate: '2019-08-24T14:15:22Z',
                    name: 'string',
                    sourceModifiedDate: '2019-08-24T14:15:22Z',
                  },
                ],
                totalResults: 0,
              },
            },
          },
        },
      },
    },
  },
})

export const getCompaniesCompanyIdConnectionsConnectionIdDataCommerceOrdersRoute = createRoute({
  method: 'get',
  path: '/companies/{companyId}/connections/{connectionId}/data/commerce-orders',
  tags: ['Orders'],
  summary: 'List orders',
  description: 'Get a list of orders placed or held on the linked commerce platform',
  operationId: 'list-orders',
  request: {
    params: z.object({ companyId: CompanyIdParamsSchema, connectionId: ConnectionIdParamsSchema }),
    query: z.object({
      page: PageParamsSchema,
      pageSize: PageSizeParamsSchema,
      query: QueryParamsSchema,
      orderBy: OrderByParamsSchema,
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: OrdersSchema } } },
  },
})

export const getCompaniesCompanyIdConnectionsConnectionIdDataCommercePaymentMethodsRoute =
  createRoute({
    method: 'get',
    path: '/companies/{companyId}/connections/{connectionId}/data/commerce-paymentMethods',
    tags: ['Payments'],
    summary: 'List payment methods',
    description:
      'Retrieve a list of payment methods, such as card, cash or other online payment methods, as held in the linked commerce platform.',
    operationId: 'list-payment-methods',
    request: {
      params: z.object({
        companyId: CompanyIdParamsSchema,
        connectionId: ConnectionIdParamsSchema,
      }),
      query: z.object({
        page: PageParamsSchema,
        pageSize: PageSizeParamsSchema,
        query: QueryParamsSchema,
        orderBy: OrderByParamsSchema,
      }),
    },
    responses: {
      200: { description: 'OK', content: { 'application/json': { schema: PaymentMethodsSchema } } },
    },
  })

export const getCompaniesCompanyIdConnectionsConnectionIdDataCommercePaymentsRoute = createRoute({
  method: 'get',
  path: '/companies/{companyId}/connections/{connectionId}/data/commerce-payments',
  tags: ['Payments'],
  summary: 'List payments',
  description: 'List commerce payments for the given company & data connection.',
  operationId: 'list-payments',
  request: {
    params: z.object({ companyId: CompanyIdParamsSchema, connectionId: ConnectionIdParamsSchema }),
    query: z.object({
      page: PageParamsSchema,
      pageSize: PageSizeParamsSchema,
      query: QueryParamsSchema,
      orderBy: OrderByParamsSchema,
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: PaymentsSchema } } },
  },
})

export const getCompaniesCompanyIdConnectionsConnectionIdDataCommerceProductCategoriesRoute =
  createRoute({
    method: 'get',
    path: '/companies/{companyId}/connections/{connectionId}/data/commerce-productCategories',
    tags: ['Products'],
    summary: 'List product categories',
    description:
      'Product categories are used to classify a group of products together, either by type (eg "Furniture"), or sometimes by tax profile.',
    operationId: 'list-product-categories',
    request: {
      params: z.object({
        companyId: CompanyIdParamsSchema,
        connectionId: ConnectionIdParamsSchema,
      }),
      query: z.object({
        page: PageParamsSchema,
        pageSize: PageSizeParamsSchema,
        query: QueryParamsSchema,
        orderBy: OrderByParamsSchema,
      }),
    },
    responses: {
      200: {
        description: 'OK',
        content: { 'application/json': { schema: ProductCategoriesSchema } },
      },
    },
  })

export const getCompaniesCompanyIdConnectionsConnectionIdDataCommerceProductsRoute = createRoute({
  method: 'get',
  path: '/companies/{companyId}/connections/{connectionId}/data/commerce-products',
  tags: ['Products'],
  summary: 'List products',
  description:
    "The Products data type provides the company's product inventory, and includes the price and quantity of all products, and product variants, available for sale.",
  operationId: 'list-products',
  request: {
    params: z.object({ companyId: CompanyIdParamsSchema, connectionId: ConnectionIdParamsSchema }),
    query: z.object({
      page: PageParamsSchema,
      pageSize: PageSizeParamsSchema,
      query: QueryParamsSchema,
      orderBy: OrderByParamsSchema,
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: ProductsSchema } } },
  },
})

export const getCompaniesCompanyIdConnectionsConnectionIdDataCommerceTaxComponentsRoute =
  createRoute({
    method: 'get',
    path: '/companies/{companyId}/connections/{connectionId}/data/commerce-taxComponents',
    tags: ['Tax components'],
    summary: 'List tax components',
    description:
      'This endpoint returns a lits of tax rates from the commerce platform, including tax rate names and values. This supports the mapping of tax rates from the commerce platform to the accounting platform.',
    operationId: 'get-tax-components',
    request: {
      params: z.object({
        companyId: CompanyIdParamsSchema,
        connectionId: ConnectionIdParamsSchema,
      }),
    },
    responses: {
      200: {
        description: 'OK',
        content: {
          'application/json': {
            schema: TaxComponentsSchema,
            examples: {
              Example: {
                value: {
                  taxComponents: [
                    {
                      id: '85b32439-37a0-4085-b710-054732bbcea2',
                      isCompound: false,
                      modifiedDate: '2021-08-06T06:00:27',
                      name: 'Sales Tax (10%)',
                      rate: 0.1,
                      sourceModifiedDate: '2021-08-06T06:00:27',
                    },
                    {
                      id: '687e67ae-80f2-44e0-b17a-6a3e1f9c00f9',
                      isCompound: false,
                      modifiedDate: '2021-08-06T06:00:27',
                      name: 'Sales Tax (15%)',
                      rate: 0.15,
                      sourceModifiedDate: '2022-04-25T02:45:27',
                    },
                  ],
                },
              },
            },
          },
        },
      },
    },
  })

export const getCompaniesCompanyIdConnectionsConnectionIdDataCommerceTransactionsRoute =
  createRoute({
    method: 'get',
    path: '/companies/{companyId}/connections/{connectionId}/data/commerce-transactions',
    tags: ['Transactions'],
    summary: 'List transactions',
    description:
      'Details of all financial transactions recorded in the commerce or point of sale system are added to the Transactions data type. For example, payments, service charges, and fees.',
    operationId: 'list-transactions',
    request: {
      params: z.object({
        companyId: CompanyIdParamsSchema,
        connectionId: ConnectionIdParamsSchema,
      }),
      query: z.object({
        page: PageParamsSchema,
        pageSize: PageSizeParamsSchema,
        query: QueryParamsSchema,
        orderBy: OrderByParamsSchema,
      }),
    },
    responses: {
      200: { description: 'OK', content: { 'application/json': { schema: TransactionsSchema } } },
    },
  })
