import { createRoute, z } from '@hono/zod-openapi'

export const getAtmsRoute = createRoute({
  method: 'get',
  path: '/atms',
  tags: ['ATM'],
  description: 'Gets a list of all `ATM` objects.',
  request: {
    headers: z.object({
      'If-Modified-Since': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Used for conditional request, to retrieve data only if modified since a given date',
            in: 'header',
            name: 'If-Modified-Since',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'If-None-Match': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Used for conditional request, to retrieve data only if the given Etag value does not match',
            in: 'header',
            name: 'If-None-Match',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response with a list of `ATM` data',
      content: {
        'application/prs.openbanking.opendata.v1.3+json': {
          schema: z
            .strictObject({
              data: z.array(
                z
                  .strictObject({
                    ATMID: z
                      .string()
                      .min(1)
                      .max(35)
                      .openapi({
                        description:
                          'ATM terminal device identification for the acquirer and the issuer',
                      }),
                    ATMServices: z
                      .array(
                        z
                          .enum([
                            'Balance',
                            'BillPayments',
                            'CashDeposits',
                            'CashWithdrawal',
                            'CharityDonation',
                            'ChequeBookRequest',
                            'ChequeDeposits',
                            'FastCash',
                            'MiniStatement',
                            'MobileBankingRegistration',
                            'MobilePaymentRegistration',
                            'MobilePhoneTopUp',
                            'OrderStatement',
                            'PINActivation',
                            'PINChange',
                          ])
                          .openapi({ description: 'Information about ATM services' }),
                      )
                      .min(1)
                      .superRefine((items, ctx) => {
                        const seen = new Map()
                        for (const [i, val] of items.entries()) {
                          const key = JSON.stringify(val)
                          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
                          else seen.set(key, i)
                        }
                      })
                      .openapi({ description: 'Information about ATM services' }),
                    AccessibilityTypes: z
                      .array(
                        z
                          .enum([
                            'AudioCashMachine',
                            'AutomaticDoors',
                            'ChairAccess',
                            'DriveThru',
                            'ExternalRamp',
                            'InductionLoop',
                            'InternalRamp',
                            'LevelAccess',
                            'LowerLevelCounter',
                            'WheelchairAccess',
                          ])
                          .openapi({ description: 'Information about the accessibility' }),
                      )
                      .superRefine((items, ctx) => {
                        const seen = new Map()
                        for (const [i, val] of items.entries()) {
                          const key = JSON.stringify(val)
                          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
                          else seen.set(key, i)
                        }
                      })
                      .exactOptional()
                      .openapi({ description: 'Information about the accessibility' }),
                    AdditionalATMServices: z
                      .array(
                        z.string().min(1).max(350).openapi({ description: 'maxLength 350 text' }),
                      )
                      .exactOptional()
                      .openapi({ description: 'ATM Service Description' }),
                    Address: z
                      .strictObject({
                        BuildingNumberOrName: z
                          .string()
                          .min(1)
                          .max(350)
                          .exactOptional()
                          .openapi({
                            description:
                              'Number or Name that identifies the position of a building on a street',
                          }),
                        Country: z
                          .string()
                          .regex(/[A-Z]{2}/)
                          .openapi({ description: 'Nation with its own government' }),
                        CountrySubDivision: z
                          .string()
                          .min(1)
                          .max(35)
                          .exactOptional()
                          .openapi({
                            description:
                              'Identifies a subdivision of a country such as state, region, county',
                          }),
                        OptionalAddressField: z
                          .string()
                          .min(1)
                          .max(350)
                          .exactOptional()
                          .openapi({ description: 'Directions for customers' }),
                        PostCode: z
                          .string()
                          .min(1)
                          .max(16)
                          .openapi({
                            description:
                              'Identifier consisting of a group of letters and/or numbers that is added to a postal address to assist the sorting of mail',
                          }),
                        StreetName: z
                          .string()
                          .min(1)
                          .max(70)
                          .openapi({ description: 'Name of a street or thoroughfare' }),
                        TownName: z
                          .string()
                          .min(1)
                          .max(35)
                          .exactOptional()
                          .openapi({
                            description:
                              'Name of a built-up area, with defined boundaries, and a local government',
                          }),
                      })
                      .openapi({
                        description: 'Postal Address',
                        required: ['StreetName', 'PostCode', 'Country'],
                      }),
                    BranchIdentification: z
                      .string()
                      .min(1)
                      .max(35)
                      .exactOptional()
                      .openapi({
                        description:
                          'Unique and unambiguous identification of a retail branch of a financial institution',
                      }),
                    Currency: z
                      .array(
                        z
                          .string()
                          .regex(/[A-Z]{3}/)
                          .openapi({ description: 'Active or Historic Currency Code' }),
                      )
                      .min(1)
                      .superRefine((items, ctx) => {
                        const seen = new Map()
                        for (const [i, val] of items.entries()) {
                          const key = JSON.stringify(val)
                          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
                          else seen.set(key, i)
                        }
                      })
                      .openapi({ description: 'Defines currency type available for dispense' }),
                    GeographicLocation: z
                      .strictObject({
                        Latitude: z
                          .string()
                          .regex(/^-?\d{1,3}\.\d{1,8}$/)
                          .openapi({
                            description:
                              'The Latitude measured in decimal format according to ISO 213',
                          }),
                        Longitude: z
                          .string()
                          .regex(/^-?\d{1,3}\.\d{1,8}$/)
                          .openapi({
                            description:
                              'The longitude measured in decimal format according to ISO 213',
                          }),
                      })
                      .openapi({
                        description: 'Geographic Coordinates',
                        required: ['Latitude', 'Longitude'],
                      }),
                    LocationCategory: z
                      .enum([
                        'Airport',
                        'BankSpecialisedOutlet',
                        'BranchExternal',
                        'BranchInternal',
                        'BranchLobby',
                        'BureauDeChange',
                        'CoachStation',
                        'CommercialSpaceInternal',
                        'ConvenienceStore',
                        'ExhibitionCentre',
                        'FactoryOrOffice',
                        'FillingStation',
                        'FinancialInstitution',
                        'GovernmentOffice',
                        'Hospital',
                        'Hotel',
                        'KioskPod',
                        'LeisureCentre',
                        'PleasurePark',
                        'PublicHouse',
                        'RailwayStation',
                        'RemoteUnit',
                        'RetailerDepartmentStore',
                        'RetailerOutlet',
                        'SeaportTerminal',
                        'ServiceStation',
                        'ShoppingCentreExternal',
                        'ShoppingCentreInternal',
                        'StorageDepot',
                        'SupermarketExternal',
                        'SupermarketInternal',
                        'UndergroundRailwayStation',
                        'UniversityOrCollege',
                      ])
                      .exactOptional()
                      .openapi({ description: 'Indicates the environment of the ATM' }),
                    MinimumValueDispensed: z
                      .enum(['£5', '£10', '£20', '£50', '£100'])
                      .exactOptional()
                      .openapi({ description: 'Minimum currency denominations usually available' }),
                    Organisation: z
                      .strictObject({
                        Brand: z
                          .strictObject({
                            TrademarkID: z
                              .string()
                              .min(1)
                              .max(35)
                              .openapi({
                                description:
                                  'The trademark number that has been registered with the Intellectual Property Office. Note: The 2 letter IPO prefix should be omitted',
                              }),
                            TrademarkIPOCode: z
                              .enum(['UK', 'EU'])
                              .openapi({
                                description:
                                  'The Intellectual Property Office (IPO) is the official body responsible for intellectual property (IP) rights including patents, designs, trademarks and copyright. (Code: UK or EU only)',
                              }),
                          })
                          .openapi({
                            description: 'Brand',
                            required: ['TrademarkIPOCode', 'TrademarkID'],
                          }),
                        ParentOrganisation: z
                          .strictObject({
                            BIC: z
                              .string()
                              .regex(/[A-Z]{6}[A-Z2-9][A-NP-Z0-9]([A-Z0-9]{3})?/)
                              .exactOptional()
                              .openapi({ description: 'The BIC from the organisation' }),
                            LEI: z
                              .string()
                              .regex(/^[A-Z0-9]{18,18}[0-9]{2,2}$/)
                              .exactOptional()
                              .openapi({ description: 'The LEI ID of the organisation' }),
                            OrganisationName: z
                              .strictObject({
                                LegalName: z
                                  .string()
                                  .min(1)
                                  .max(35)
                                  .openapi({ description: 'Legal Name of the organisation' }),
                              })
                              .openapi({
                                description: 'Organisation Name',
                                required: ['LegalName'],
                              }),
                          })
                          .openapi({
                            description: 'Parent organisation',
                            required: ['OrganisationName'],
                          }),
                      })
                      .openapi({
                        description: 'Organisation',
                        required: ['ParentOrganisation', 'Brand'],
                      }),
                    SiteID: z
                      .string()
                      .min(1)
                      .max(35)
                      .exactOptional()
                      .openapi({ description: 'Site identifying code, where ATM is located' }),
                    SiteName: z
                      .string()
                      .min(1)
                      .max(35)
                      .exactOptional()
                      .openapi({ description: 'Site identifying name, where ATM is located' }),
                    SupportedLanguages: z
                      .array(z.string().openapi({ description: 'must be ISO 693-2 codes' }))
                      .min(1)
                      .openapi({ description: 'Languages that the ATM supports' }),
                  })
                  .openapi({
                    required: [
                      'Organisation',
                      'ATMID',
                      'Address',
                      'GeographicLocation',
                      'SupportedLanguages',
                      'ATMServices',
                      'Currency',
                    ],
                    title: 'ATM',
                  }),
              ),
              meta: z
                .strictObject({
                  Agreement: z.literal(
                    'Use of the APIs and any related data will be subject to the terms of the Open Licence and subject to terms and conditions',
                  ),
                  LastUpdated: z.iso.datetime({ offset: true }),
                  License: z
                    .literal('https://www.openbanking.org.uk/open-licence')
                    .openapi({ description: 'Open Banking License' }),
                  TermsOfUse: z
                    .literal('https://www.openbanking.org.uk/terms')
                    .openapi({ description: 'Open Banking Terms of Use' }),
                  TotalResults: z.int(),
                })
                .openapi({
                  required: ['LastUpdated', 'TotalResults', 'Agreement', 'License', 'TermsOfUse'],
                  title: 'Meta data',
                }),
            })
            .openapi({ required: ['meta', 'data'] }),
        },
      },
      headers: z.object({
        'Cache-Control': {
          description: 'Describes how long this response can be cached',
          schema: z
            .string()
            .default('max-age=28800')
            .exactOptional()
            .openapi({
              description: 'Describes how long this response can be cached',
              param: { required: false },
            }),
        },
        Etag: {
          description: 'A unique ID identifying whether this resource has changed',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'A unique ID identifying whether this resource has changed',
              param: { required: false },
            }),
        },
        'Strict-Transport-Security': {
          description: 'HTTPS strict transport security header',
          schema: z
            .string()
            .default('max-age=31536000')
            .exactOptional()
            .openapi({
              description: 'HTTPS strict transport security header',
              param: { required: false },
            }),
        },
        'X-Content-Type-Options': {
          description:
            'Ensures each page has a content type and prevents browsers from doing MIME type sniffing',
          schema: z
            .string()
            .default('nosniff')
            .exactOptional()
            .openapi({
              description:
                'Ensures each page has a content type and prevents browsers from doing MIME type sniffing',
              param: { required: false },
            }),
        },
        'X-Frame-Options': {
          description: 'Prevent this request from being loaded in any iframes',
          schema: z
            .string()
            .default('DENY')
            .exactOptional()
            .openapi({
              description: 'Prevent this request from being loaded in any iframes',
              param: { required: false },
            }),
        },
      }),
    },
    400: {
      description: 'You have sent a request which could not be understood.',
      content: {
        'application/prs.openbanking.opendata.v1.3+json': {
          schema: z
            .strictObject({
              description: z.literal('You have sent a request which could not be understood.'),
              status: z.literal('400'),
              title: z.literal('Bad request'),
            })
            .openapi({ required: ['status', 'title', 'description'], title: '400 Error object' }),
        },
      },
      headers: z.object({
        'Strict-Transport-Security': {
          description: 'HTTPS strict transport security header',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'HTTPS strict transport security header',
              param: { required: false },
            }),
        },
        'X-Content-Type-Options': {
          description:
            'Ensures each page has a content type and prevents browsers from doing MIME type sniffing',
          schema: z
            .string()
            .default('nosniff')
            .exactOptional()
            .openapi({
              description:
                'Ensures each page has a content type and prevents browsers from doing MIME type sniffing',
              param: { required: false },
            }),
        },
        'X-Frame-Options': {
          description: 'Prevent this request from being loaded in any iframes',
          schema: z
            .string()
            .default('DENY')
            .exactOptional()
            .openapi({
              description: 'Prevent this request from being loaded in any iframes',
              param: { required: false },
            }),
        },
      }),
    },
    408: {
      description: 'Your client has failed to submit a request, and a timeout has occurred.',
      content: {
        'application/prs.openbanking.opendata.v1.3+json': {
          schema: z
            .strictObject({
              description: z.literal(
                'Your client has failed to submit a request, and a timeout has occurred.',
              ),
              status: z.literal('408'),
              title: z.literal('Client timeout'),
            })
            .openapi({ required: ['status', 'title', 'description'], title: '408 Error object' }),
        },
      },
      headers: z.object({
        'Strict-Transport-Security': {
          description: 'HTTPS strict transport security header',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'HTTPS strict transport security header',
              param: { required: false },
            }),
        },
        'X-Content-Type-Options': {
          description:
            'Ensures each page has a content type and prevents browsers from doing MIME type sniffing',
          schema: z
            .string()
            .default('nosniff')
            .exactOptional()
            .openapi({
              description:
                'Ensures each page has a content type and prevents browsers from doing MIME type sniffing',
              param: { required: false },
            }),
        },
        'X-Frame-Options': {
          description: 'Prevent this request from being loaded in any iframes',
          schema: z
            .string()
            .default('DENY')
            .exactOptional()
            .openapi({
              description: 'Prevent this request from being loaded in any iframes',
              param: { required: false },
            }),
        },
      }),
    },
    429: {
      description: 'You have requested this resource too often. Slow down.',
      content: {
        'application/prs.openbanking.opendata.v1.3+json': {
          schema: z
            .strictObject({
              description: z.literal('You have requested this resource too often. Slow down.'),
              status: z.literal('429'),
              title: z.literal('Too many requests'),
            })
            .openapi({ required: ['status', 'title', 'description'], title: '429 Error object' }),
        },
      },
      headers: z.object({
        'Strict-Transport-Security': {
          description: 'HTTPS strict transport security header',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'HTTPS strict transport security header',
              param: { required: false },
            }),
        },
        'X-Content-Type-Options': {
          description:
            'Ensures each page has a content type and prevents browsers from doing MIME type sniffing',
          schema: z
            .string()
            .default('nosniff')
            .exactOptional()
            .openapi({
              description:
                'Ensures each page has a content type and prevents browsers from doing MIME type sniffing',
              param: { required: false },
            }),
        },
        'X-Frame-Options': {
          description: 'Prevent this request from being loaded in any iframes',
          schema: z
            .string()
            .default('DENY')
            .exactOptional()
            .openapi({
              description: 'Prevent this request from being loaded in any iframes',
              param: { required: false },
            }),
        },
      }),
    },
    500: {
      description: 'An error occurred on the server. No further information is available.',
      content: {
        'application/prs.openbanking.opendata.v1.3+json': {
          schema: z
            .strictObject({
              description: z.literal(
                'An error occurred on the server. No further information is available.',
              ),
              status: z.literal('500'),
              title: z.literal('Internal server error'),
            })
            .openapi({ required: ['status', 'title', 'description'], title: '500 Error object' }),
        },
      },
      headers: z.object({
        'Strict-Transport-Security': {
          description: 'HTTPS strict transport security header',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'HTTPS strict transport security header',
              param: { required: false },
            }),
        },
        'X-Content-Type-Options': {
          description:
            'Ensures each page has a content type and prevents browsers from doing MIME type sniffing',
          schema: z
            .string()
            .default('nosniff')
            .exactOptional()
            .openapi({
              description:
                'Ensures each page has a content type and prevents browsers from doing MIME type sniffing',
              param: { required: false },
            }),
        },
        'X-Frame-Options': {
          description: 'Prevent this request from being loaded in any iframes',
          schema: z
            .string()
            .default('DENY')
            .exactOptional()
            .openapi({
              description: 'Prevent this request from being loaded in any iframes',
              param: { required: false },
            }),
        },
      }),
    },
    503: {
      description: 'The service is temporarily unavailable.',
      content: {
        'application/prs.openbanking.opendata.v1.3+json': {
          schema: z
            .strictObject({
              description: z.literal('The service is temporarily unavailable.'),
              status: z.literal('503'),
              title: z.literal('Service temporarily unavailable'),
            })
            .openapi({ required: ['status', 'title', 'description'], title: '503 Error object' }),
        },
      },
      headers: z.object({
        'Strict-Transport-Security': {
          description: 'HTTPS strict transport security header',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'HTTPS strict transport security header',
              param: { required: false },
            }),
        },
        'X-Content-Type-Options': {
          description:
            'Ensures each page has a content type and prevents browsers from doing MIME type sniffing',
          schema: z
            .string()
            .default('nosniff')
            .exactOptional()
            .openapi({
              description:
                'Ensures each page has a content type and prevents browsers from doing MIME type sniffing',
              param: { required: false },
            }),
        },
        'X-Frame-Options': {
          description: 'Prevent this request from being loaded in any iframes',
          schema: z
            .string()
            .default('DENY')
            .exactOptional()
            .openapi({
              description: 'Prevent this request from being loaded in any iframes',
              param: { required: false },
            }),
        },
      }),
    },
    default: {
      description: 'A standard error response.',
      content: {
        'application/prs.openbanking.opendata.v1.3+json': {
          schema: z
            .strictObject({
              description: z
                .string()
                .openapi({ description: 'Further details describing the error' }),
              status: z
                .string()
                .openapi({ description: 'This corresponds to the HTTP status code' }),
              title: z.string().openapi({ description: 'A short title of the type of error' }),
            })
            .openapi({ required: ['status', 'title', 'description'], title: 'Error object' }),
        },
      },
      headers: z.object({
        'Strict-Transport-Security': {
          description: 'HTTPS strict transport security header',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'HTTPS strict transport security header',
              param: { required: false },
            }),
        },
        'X-Content-Type-Options': {
          description:
            'Ensures each page has a content type and prevents browsers from doing MIME type sniffing',
          schema: z
            .string()
            .default('nosniff')
            .exactOptional()
            .openapi({
              description:
                'Ensures each page has a content type and prevents browsers from doing MIME type sniffing',
              param: { required: false },
            }),
        },
        'X-Frame-Options': {
          description: 'Prevent this request from being loaded in any iframes',
          schema: z
            .string()
            .default('DENY')
            .exactOptional()
            .openapi({
              description: 'Prevent this request from being loaded in any iframes',
              param: { required: false },
            }),
        },
      }),
    },
  },
})

export const headAtmsRoute = createRoute({
  method: 'head',
  path: '/atms',
  tags: ['ATM'],
  description: 'Gets header information on the current set of `ATM` data',
  request: {
    headers: z.object({
      'If-Modified-Since': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Used for conditional request, to retrieve data only if modified since a given date',
            in: 'header',
            name: 'If-Modified-Since',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'If-None-Match': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Used for conditional request, to retrieve data only if the given Etag value does not match',
            in: 'header',
            name: 'If-None-Match',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    default: {
      description: 'No response',
      content: {
        'application/prs.openbanking.opendata.v1.3+json': {
          schema: z.object({}).openapi({ title: 'No response' }),
        },
      },
    },
  },
})

export const getBranchesRoute = createRoute({
  method: 'get',
  path: '/branches',
  tags: ['Branch'],
  description: 'Gets a list of all `Branch` objects.',
  request: {
    headers: z.object({
      'If-Modified-Since': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Used for conditional request, to retrieve data only if modified since a given date',
            in: 'header',
            name: 'If-Modified-Since',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'If-None-Match': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Used for conditional request, to retrieve data only if the given Etag value does not match',
            in: 'header',
            name: 'If-None-Match',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response with a list of `Branch` data',
      content: {
        'application/prs.openbanking.opendata.v1.3+json': {
          schema: z
            .strictObject({
              data: z.array(
                z
                  .strictObject({
                    ATMAtBranch: z
                      .boolean()
                      .openapi({ description: 'Indicated whether an ATM is at the branch' }),
                    AccessibilityTypes: z
                      .enum([
                        'AudioCashMachine',
                        'AutomaticDoors',
                        'ChairAccess',
                        'DriveThru',
                        'ExternalRamp',
                        'InductionLoop',
                        'InternalRamp',
                        'LevelAccess',
                        'LowerLevelCounter',
                        'WheelchairAccess',
                      ])
                      .exactOptional()
                      .openapi({ description: 'Information about the accessibility' }),
                    Address: z
                      .strictObject({
                        BuildingNumberOrName: z
                          .string()
                          .min(1)
                          .max(350)
                          .exactOptional()
                          .openapi({
                            description:
                              'Number or Name that identifies the position of a building on a street',
                          }),
                        Country: z
                          .string()
                          .regex(/[A-Z]{2}/)
                          .openapi({ description: 'Nation with its own government' }),
                        CountrySubDivision: z
                          .string()
                          .min(1)
                          .max(35)
                          .exactOptional()
                          .openapi({
                            description:
                              'Identifies a subdivision of a country such as state, region, county',
                          }),
                        OptionalAddressField: z
                          .string()
                          .min(1)
                          .max(350)
                          .exactOptional()
                          .openapi({ description: 'Directions for customers' }),
                        PostCode: z
                          .string()
                          .min(1)
                          .max(16)
                          .exactOptional()
                          .openapi({
                            description:
                              'Identifier consisting of a group of letters and/or numbers that is added to a postal address to assist the sorting of mail',
                          }),
                        StreetName: z
                          .string()
                          .min(1)
                          .max(70)
                          .exactOptional()
                          .openapi({ description: 'Name of a street or thoroughfare' }),
                        TownName: z
                          .string()
                          .min(1)
                          .max(35)
                          .exactOptional()
                          .openapi({
                            description:
                              'Name of a built-up area, with defined boundaries, and a local government',
                          }),
                      })
                      .openapi({ description: 'Postal Address', required: ['Country'] }),
                    AlternatePhone: z
                      .array(
                        z
                          .strictObject({
                            AlternateTelephoneNumber: z
                              .string()
                              .regex(/^[+][0-9]{1,3}-[0-9()+-]{1,30}$/)
                              .exactOptional()
                              .openapi({
                                description:
                                  'Collection of information that identifies a phone number, as defined by telecom services.',
                              }),
                            AlternateTelephoneNumberDescription: z
                              .string()
                              .min(1)
                              .max(35)
                              .exactOptional()
                              .openapi({ description: 'Description of the telephone number' }),
                          })
                          .openapi({ description: 'Alternative Phone Number', required: [] }),
                      )
                      .exactOptional(),
                    ArrivalTime: z
                      .string()
                      .regex(
                        /^(([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9].\d{3})|(^24:00:00\.000)(?:Z|[+-](?:2[0-3]|[01][0-9]):[0-5][0-9])?$/,
                      )
                      .exactOptional()
                      .openapi({
                        description: 'Time that the mobile branch is scheduled to arrive',
                      }),
                    BranchDescription: z
                      .string()
                      .min(1)
                      .max(140)
                      .exactOptional()
                      .openapi({ description: 'Description of the branch' }),
                    BranchFacilitiesName: z
                      .array(
                        z
                          .enum([
                            'BusinessITSupport',
                            'CollectionLockers',
                            'MeetingRooms',
                            'Parking',
                            'Wifi',
                          ])
                          .openapi({ description: 'Information about branch facilities' }),
                      )
                      .superRefine((items, ctx) => {
                        const seen = new Map()
                        for (const [i, val] of items.entries()) {
                          const key = JSON.stringify(val)
                          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
                          else seen.set(key, i)
                        }
                      })
                      .exactOptional()
                      .openapi({ description: 'Information about branch facilities' }),
                    BranchIdentification: z
                      .string()
                      .min(1)
                      .max(35)
                      .openapi({
                        description:
                          'Unique and unambiguous identification of a retail branch of a financial institution',
                      }),
                    BranchMediatedServiceName: z
                      .array(
                        z
                          .enum([
                            'BureauDeChange',
                            'BusinessCounter',
                            'CardIssuanceFacility',
                            'CounterServices',
                            'DriveThru',
                            'MortgageAdvisor',
                            'NightSafe',
                            'OnDemandCurrency',
                            'PremierCounter',
                            'VideoBanking',
                            'WheelChairAccess',
                          ])
                          .openapi({ description: 'Information about mediated branch facilities' }),
                      )
                      .superRefine((items, ctx) => {
                        const seen = new Map()
                        for (const [i, val] of items.entries()) {
                          const key = JSON.stringify(val)
                          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
                          else seen.set(key, i)
                        }
                      })
                      .exactOptional()
                      .openapi({ description: 'Information about mediated branch facilities' }),
                    BranchName: z
                      .string()
                      .min(1)
                      .max(35)
                      .exactOptional()
                      .openapi({
                        description:
                          'Name by which a party is known and which is usually used to identify that party',
                      }),
                    BranchOtherFacilities: z
                      .array(
                        z.string().min(1).max(350).openapi({ description: 'maxLength 350 text' }),
                      )
                      .exactOptional()
                      .openapi({
                        description: 'Any other facilities not mentioned in BranchFacilitiesName',
                      }),
                    BranchOtherMediatedServices: z
                      .array(
                        z.string().min(1).max(350).openapi({ description: 'maxLength 350 text' }),
                      )
                      .exactOptional()
                      .openapi({
                        description: 'Mediated Services not described in BranchMediatedServiceName',
                      }),
                    BranchOtherSelfServices: z
                      .array(
                        z.string().min(1).max(350).openapi({ description: 'maxLength 350 text' }),
                      )
                      .exactOptional()
                      .openapi({
                        description: 'Self Services not described in BranchSelfServeServiceName',
                      }),
                    BranchPhoto: z
                      .url()
                      .exactOptional()
                      .openapi({ description: 'Image related to the branch' }),
                    BranchSelfServeServiceName: z
                      .array(
                        z
                          .enum([
                            'AccountVerificationService',
                            'AssistedServiceCounter',
                            'BusinessDepositTerminal',
                            'CashChequeDepositMachineCoin',
                            'CashChequeDepositMachineNoCoin',
                            'ExternalAtmAudio',
                            'ExternalAtmNoAudio',
                            'ExternalQuickServicePoint',
                            'InternalAtmAudio',
                            'InternalAtmNoAudio',
                            'InternalQuickServicePoint',
                            'LodgementDevice',
                            'OnlineBankingPoint',
                            'QuickDeposit',
                            'SaturdayCounterService',
                            'SelfServiceAccountOpening',
                            'StatementPrinter',
                          ])
                          .openapi({
                            description: 'Information about self service branch services',
                          }),
                      )
                      .superRefine((items, ctx) => {
                        const seen = new Map()
                        for (const [i, val] of items.entries()) {
                          const key = JSON.stringify(val)
                          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
                          else seen.set(key, i)
                        }
                      })
                      .exactOptional(),
                    BranchType: z
                      .enum(['Physical', 'Mobile'])
                      .openapi({ description: 'Information on the type of branch' }),
                    CustomerSegment: z
                      .array(
                        z
                          .enum([
                            'Business',
                            'Corporate',
                            'Personal',
                            'Premier',
                            'Private',
                            'Select',
                            'SME',
                            'Wealth',
                          ])
                          .openapi({
                            description: 'Customer segment which the branch is able to service',
                          }),
                      )
                      .superRefine((items, ctx) => {
                        const seen = new Map()
                        for (const [i, val] of items.entries()) {
                          const key = JSON.stringify(val)
                          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
                          else seen.set(key, i)
                        }
                      })
                      .openapi({
                        description: 'Customer segment which the branch is able to service',
                      }),
                    DaysOfTheWeek: z
                      .string()
                      .min(1)
                      .max(35)
                      .exactOptional()
                      .openapi({
                        description:
                          'Description on when the mobile branch is available. e.g. The weekend of Glastonbury festival; or Mondays and during the shrimp season also Wednesdays',
                      }),
                    DepartureTime: z
                      .string()
                      .regex(
                        /^(([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9].\d{3})|(^24:00:00\.000)(?:Z|[+-](?:2[0-3]|[01][0-9]):[0-5][0-9])?$/,
                      )
                      .exactOptional()
                      .openapi({
                        description: 'Time that the mobile branch is scheduled to depart',
                      }),
                    FaxNumber: z
                      .array(
                        z
                          .string()
                          .regex(/^[+][0-9]{1,3}-[0-9()+-]{1,30}$/)
                          .openapi({
                            description:
                              'Collection of information that identifies a phone number, as defined by telecom services.',
                          }),
                      )
                      .exactOptional()
                      .openapi({
                        description:
                          'Collection of information that identifies a FAX number, as defined by telecom services.',
                      }),
                    GeographicLocation: z
                      .strictObject({
                        Latitude: z
                          .string()
                          .regex(/^-?\d{1,3}\.\d{1,8}$/)
                          .openapi({
                            description:
                              'The Latitude measured in decimal format according to ISO 213',
                          }),
                        Longitude: z
                          .string()
                          .regex(/^-?\d{1,3}\.\d{1,8}$/)
                          .openapi({
                            description:
                              'The longitude measured in decimal format according to ISO 213',
                          }),
                      })
                      .exactOptional()
                      .openapi({
                        description: 'Geographic Coordinates',
                        required: ['Latitude', 'Longitude'],
                      }),
                    OpeningTimes: z
                      .array(
                        z
                          .object({
                            ClosingTime: z
                              .string()
                              .regex(
                                /^(([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9].\d{3})|(^24:00:00\.000)(?:Z|[+-](?:2[0-3]|[01][0-9]):[0-5][0-9])?$/,
                              )
                              .openapi({
                                description:
                                  'ISOTime, local time hh:mm:ss.sss or time in utc hh:mm:ss.sssZ or time with timezone hh:mm:ss.sss+hh:mm hh:mm:ss.sss-hh:mm',
                              }),
                            OpeningDay: z
                              .enum([
                                'Monday',
                                'Tuesday',
                                'Wednesday',
                                'Thursday',
                                'Friday',
                                'Saturday',
                                'Sunday',
                                'Public and Bank Holiday',
                              ])
                              .openapi({ description: 'Day of the week' }),
                            OpeningTime: z
                              .string()
                              .regex(
                                /^(([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9].\d{3})|(^24:00:00\.000)(?:Z|[+-](?:2[0-3]|[01][0-9]):[0-5][0-9])?$/,
                              )
                              .openapi({
                                description:
                                  'ISOTime, local time hh:mm:ss.sss or time in utc hh:mm:ss.sssZ or time with timezone hh:mm:ss.sss+hh:mm hh:mm:ss.sss-hh:mm',
                              }),
                            UnavailableFinishTime: z
                              .string()
                              .regex(
                                /^(([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9].\d{3})|(^24:00:00\.000)(?:Z|[+-](?:2[0-3]|[01][0-9]):[0-5][0-9])?$/,
                              )
                              .exactOptional()
                              .openapi({
                                description:
                                  'ISOTime, local time hh:mm:ss.sss or time in utc hh:mm:ss.sssZ or time with timezone hh:mm:ss.sss+hh:mm hh:mm:ss.sss-hh:mm',
                              }),
                            UnavailableStartTime: z
                              .string()
                              .regex(
                                /^(([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9].\d{3})|(^24:00:00\.000)(?:Z|[+-](?:2[0-3]|[01][0-9]):[0-5][0-9])?$/,
                              )
                              .exactOptional()
                              .openapi({
                                description:
                                  'ISOTime, local time hh:mm:ss.sss or time in utc hh:mm:ss.sssZ or time with timezone hh:mm:ss.sss+hh:mm hh:mm:ss.sss-hh:mm',
                              }),
                          })
                          .openapi({ required: ['OpeningDay', 'OpeningTime', 'ClosingTime'] }),
                      )
                      .min(1)
                      .openapi({ description: 'Branch Opening Times' }),
                    Organisation: z
                      .strictObject({
                        Brand: z
                          .strictObject({
                            TrademarkID: z
                              .string()
                              .min(1)
                              .max(35)
                              .openapi({
                                description:
                                  'The trademark number that has been registered with the Intellectual Property Office. Note: The 2 letter IPO prefix should be omitted',
                              }),
                            TrademarkIPOCode: z
                              .enum(['UK', 'EU'])
                              .openapi({
                                description:
                                  'The Intellectual Property Office (IPO) is the official body responsible for intellectual property (IP) rights including patents, designs, trademarks and copyright. (Code: UK or EU only)',
                              }),
                          })
                          .openapi({
                            description: 'Brand',
                            required: ['TrademarkIPOCode', 'TrademarkID'],
                          }),
                        ParentOrganisation: z
                          .strictObject({
                            BIC: z
                              .string()
                              .regex(/[A-Z]{6}[A-Z2-9][A-NP-Z0-9]([A-Z0-9]{3})?/)
                              .exactOptional()
                              .openapi({ description: 'The BIC from the organisation' }),
                            LEI: z
                              .string()
                              .regex(/^[A-Z0-9]{18,18}[0-9]{2,2}$/)
                              .exactOptional()
                              .openapi({ description: 'The LEI ID of the organisation' }),
                            OrganisationName: z
                              .strictObject({
                                LegalName: z
                                  .string()
                                  .min(1)
                                  .max(35)
                                  .openapi({ description: 'Legal Name of the organisation' }),
                              })
                              .openapi({
                                description: 'Organisation Name',
                                required: ['LegalName'],
                              }),
                          })
                          .openapi({
                            description: 'Parent organisation',
                            required: ['OrganisationName'],
                          }),
                      })
                      .openapi({
                        description: 'Organisation',
                        required: ['ParentOrganisation', 'Brand'],
                      }),
                    ParkingLocation: z
                      .string()
                      .min(1)
                      .max(50)
                      .exactOptional()
                      .openapi({
                        description:
                          'Place where the mobile branch is located, such as between the news agent and the church.',
                      }),
                    PlannedBranchClosure: z
                      .array(
                        z
                          .strictObject({
                            EndDate: z
                              .string()
                              .regex(
                                /^[0-9]{4}-(0[1-9]|(1[0|1|2]))-((0[1-9])|((1|2)[0-9])|(30|31))$/,
                              )
                              .exactOptional()
                              .openapi({
                                description:
                                  'Date when a branch is due to re-open following temporary closure',
                              }),
                            StartDate: z
                              .string()
                              .regex(
                                /^[0-9]{4}-(0[1-9]|(1[0|1|2]))-((0[1-9])|((1|2)[0-9])|(30|31))$/,
                              )
                              .exactOptional()
                              .openapi({
                                description:
                                  'Date when a branch is due to close temporarily or permanently',
                              }),
                          })
                          .openapi({ description: 'Planned branch closure', required: [] }),
                      )
                      .exactOptional(),
                    StopName: z
                      .string()
                      .min(1)
                      .max(15)
                      .exactOptional()
                      .openapi({ description: 'Name of the stop of the mobile branch' }),
                    TelephoneNumber: z
                      .string()
                      .regex(/^[+][0-9]{1,3}-[0-9()+-]{1,30}$/)
                      .openapi({
                        description:
                          'Collection of information that identifies a phone number, as defined by telecom services.',
                      }),
                  })
                  .openapi({
                    required: [
                      'Organisation',
                      'BranchIdentification',
                      'BranchType',
                      'CustomerSegment',
                      'Address',
                      'TelephoneNumber',
                      'OpeningTimes',
                      'ATMAtBranch',
                    ],
                    title: 'Branch',
                  }),
              ),
              meta: z
                .strictObject({
                  Agreement: z.literal(
                    'Use of the APIs and any related data will be subject to the terms of the Open Licence and subject to terms and conditions',
                  ),
                  LastUpdated: z.iso.datetime({ offset: true }),
                  License: z
                    .literal('https://www.openbanking.org.uk/open-licence')
                    .openapi({ description: 'Open Banking License' }),
                  TermsOfUse: z
                    .literal('https://www.openbanking.org.uk/terms')
                    .openapi({ description: 'Open Banking Terms of Use' }),
                  TotalResults: z.int(),
                })
                .openapi({
                  required: ['LastUpdated', 'TotalResults', 'Agreement', 'License', 'TermsOfUse'],
                  title: 'Meta data',
                }),
            })
            .openapi({ required: ['meta', 'data'] }),
        },
      },
      headers: z.object({
        'Cache-Control': {
          description: 'Describes how long this response can be cached',
          schema: z
            .string()
            .default('max-age=28800')
            .exactOptional()
            .openapi({
              description: 'Describes how long this response can be cached',
              param: { required: false },
            }),
        },
        Etag: {
          description: 'A unique ID identifying whether this resource has changed',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'A unique ID identifying whether this resource has changed',
              param: { required: false },
            }),
        },
        'Strict-Transport-Security': {
          description: 'HTTPS strict transport security header',
          schema: z
            .string()
            .default('max-age=31536000')
            .exactOptional()
            .openapi({
              description: 'HTTPS strict transport security header',
              param: { required: false },
            }),
        },
        'X-Content-Type-Options': {
          description:
            'Ensures each page has a content type and prevents browsers from doing MIME type sniffing',
          schema: z
            .string()
            .default('nosniff')
            .exactOptional()
            .openapi({
              description:
                'Ensures each page has a content type and prevents browsers from doing MIME type sniffing',
              param: { required: false },
            }),
        },
        'X-Frame-Options': {
          description: 'Prevent this request from being loaded in any iframes',
          schema: z
            .string()
            .default('DENY')
            .exactOptional()
            .openapi({
              description: 'Prevent this request from being loaded in any iframes',
              param: { required: false },
            }),
        },
      }),
    },
    400: {
      description: 'You have sent a request which could not be understood.',
      content: {
        'application/prs.openbanking.opendata.v1.3+json': {
          schema: z
            .strictObject({
              description: z.literal('You have sent a request which could not be understood.'),
              status: z.literal('400'),
              title: z.literal('Bad request'),
            })
            .openapi({ required: ['status', 'title', 'description'], title: '400 Error object' }),
        },
      },
      headers: z.object({
        'Strict-Transport-Security': {
          description: 'HTTPS strict transport security header',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'HTTPS strict transport security header',
              param: { required: false },
            }),
        },
        'X-Content-Type-Options': {
          description:
            'Ensures each page has a content type and prevents browsers from doing MIME type sniffing',
          schema: z
            .string()
            .default('nosniff')
            .exactOptional()
            .openapi({
              description:
                'Ensures each page has a content type and prevents browsers from doing MIME type sniffing',
              param: { required: false },
            }),
        },
        'X-Frame-Options': {
          description: 'Prevent this request from being loaded in any iframes',
          schema: z
            .string()
            .default('DENY')
            .exactOptional()
            .openapi({
              description: 'Prevent this request from being loaded in any iframes',
              param: { required: false },
            }),
        },
      }),
    },
    408: {
      description: 'Your client has failed to submit a request, and a timeout has occurred.',
      content: {
        'application/prs.openbanking.opendata.v1.3+json': {
          schema: z
            .strictObject({
              description: z.literal(
                'Your client has failed to submit a request, and a timeout has occurred.',
              ),
              status: z.literal('408'),
              title: z.literal('Client timeout'),
            })
            .openapi({ required: ['status', 'title', 'description'], title: '408 Error object' }),
        },
      },
      headers: z.object({
        'Strict-Transport-Security': {
          description: 'HTTPS strict transport security header',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'HTTPS strict transport security header',
              param: { required: false },
            }),
        },
        'X-Content-Type-Options': {
          description:
            'Ensures each page has a content type and prevents browsers from doing MIME type sniffing',
          schema: z
            .string()
            .default('nosniff')
            .exactOptional()
            .openapi({
              description:
                'Ensures each page has a content type and prevents browsers from doing MIME type sniffing',
              param: { required: false },
            }),
        },
        'X-Frame-Options': {
          description: 'Prevent this request from being loaded in any iframes',
          schema: z
            .string()
            .default('DENY')
            .exactOptional()
            .openapi({
              description: 'Prevent this request from being loaded in any iframes',
              param: { required: false },
            }),
        },
      }),
    },
    429: {
      description: 'You have requested this resource too often. Slow down.',
      content: {
        'application/prs.openbanking.opendata.v1.3+json': {
          schema: z
            .strictObject({
              description: z.literal('You have requested this resource too often. Slow down.'),
              status: z.literal('429'),
              title: z.literal('Too many requests'),
            })
            .openapi({ required: ['status', 'title', 'description'], title: '429 Error object' }),
        },
      },
      headers: z.object({
        'Strict-Transport-Security': {
          description: 'HTTPS strict transport security header',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'HTTPS strict transport security header',
              param: { required: false },
            }),
        },
        'X-Content-Type-Options': {
          description:
            'Ensures each page has a content type and prevents browsers from doing MIME type sniffing',
          schema: z
            .string()
            .default('nosniff')
            .exactOptional()
            .openapi({
              description:
                'Ensures each page has a content type and prevents browsers from doing MIME type sniffing',
              param: { required: false },
            }),
        },
        'X-Frame-Options': {
          description: 'Prevent this request from being loaded in any iframes',
          schema: z
            .string()
            .default('DENY')
            .exactOptional()
            .openapi({
              description: 'Prevent this request from being loaded in any iframes',
              param: { required: false },
            }),
        },
      }),
    },
    500: {
      description: 'An error occurred on the server. No further information is available.',
      content: {
        'application/prs.openbanking.opendata.v1.3+json': {
          schema: z
            .strictObject({
              description: z.literal(
                'An error occurred on the server. No further information is available.',
              ),
              status: z.literal('500'),
              title: z.literal('Internal server error'),
            })
            .openapi({ required: ['status', 'title', 'description'], title: '500 Error object' }),
        },
      },
      headers: z.object({
        'Strict-Transport-Security': {
          description: 'HTTPS strict transport security header',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'HTTPS strict transport security header',
              param: { required: false },
            }),
        },
        'X-Content-Type-Options': {
          description:
            'Ensures each page has a content type and prevents browsers from doing MIME type sniffing',
          schema: z
            .string()
            .default('nosniff')
            .exactOptional()
            .openapi({
              description:
                'Ensures each page has a content type and prevents browsers from doing MIME type sniffing',
              param: { required: false },
            }),
        },
        'X-Frame-Options': {
          description: 'Prevent this request from being loaded in any iframes',
          schema: z
            .string()
            .default('DENY')
            .exactOptional()
            .openapi({
              description: 'Prevent this request from being loaded in any iframes',
              param: { required: false },
            }),
        },
      }),
    },
    503: {
      description: 'The service is temporarily unavailable.',
      content: {
        'application/prs.openbanking.opendata.v1.3+json': {
          schema: z
            .strictObject({
              description: z.literal('The service is temporarily unavailable.'),
              status: z.literal('503'),
              title: z.literal('Service temporarily unavailable'),
            })
            .openapi({ required: ['status', 'title', 'description'], title: '503 Error object' }),
        },
      },
      headers: z.object({
        'Strict-Transport-Security': {
          description: 'HTTPS strict transport security header',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'HTTPS strict transport security header',
              param: { required: false },
            }),
        },
        'X-Content-Type-Options': {
          description:
            'Ensures each page has a content type and prevents browsers from doing MIME type sniffing',
          schema: z
            .string()
            .default('nosniff')
            .exactOptional()
            .openapi({
              description:
                'Ensures each page has a content type and prevents browsers from doing MIME type sniffing',
              param: { required: false },
            }),
        },
        'X-Frame-Options': {
          description: 'Prevent this request from being loaded in any iframes',
          schema: z
            .string()
            .default('DENY')
            .exactOptional()
            .openapi({
              description: 'Prevent this request from being loaded in any iframes',
              param: { required: false },
            }),
        },
      }),
    },
    default: {
      description: 'A standard error response.',
      content: {
        'application/prs.openbanking.opendata.v1.3+json': {
          schema: z
            .strictObject({
              description: z
                .string()
                .openapi({ description: 'Further details describing the error' }),
              status: z
                .string()
                .openapi({ description: 'This corresponds to the HTTP status code' }),
              title: z.string().openapi({ description: 'A short title of the type of error' }),
            })
            .openapi({ required: ['status', 'title', 'description'], title: 'Error object' }),
        },
      },
      headers: z.object({
        'Strict-Transport-Security': {
          description: 'HTTPS strict transport security header',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'HTTPS strict transport security header',
              param: { required: false },
            }),
        },
        'X-Content-Type-Options': {
          description:
            'Ensures each page has a content type and prevents browsers from doing MIME type sniffing',
          schema: z
            .string()
            .default('nosniff')
            .exactOptional()
            .openapi({
              description:
                'Ensures each page has a content type and prevents browsers from doing MIME type sniffing',
              param: { required: false },
            }),
        },
        'X-Frame-Options': {
          description: 'Prevent this request from being loaded in any iframes',
          schema: z
            .string()
            .default('DENY')
            .exactOptional()
            .openapi({
              description: 'Prevent this request from being loaded in any iframes',
              param: { required: false },
            }),
        },
      }),
    },
  },
})

export const headBranchesRoute = createRoute({
  method: 'head',
  path: '/branches',
  tags: ['Branch'],
  description: 'Gets header information on the current set of `Branch` data',
  request: {
    headers: z.object({
      'If-Modified-Since': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Used for conditional request, to retrieve data only if modified since a given date',
            in: 'header',
            name: 'If-Modified-Since',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'If-None-Match': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Used for conditional request, to retrieve data only if the given Etag value does not match',
            in: 'header',
            name: 'If-None-Match',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    default: {
      description: 'No response',
      content: {
        'application/prs.openbanking.opendata.v1.3+json': {
          schema: z.object({}).openapi({ title: 'No response' }),
        },
      },
    },
  },
})

export const getBusinessCurrentAccountsRoute = createRoute({
  method: 'get',
  path: '/business-current-accounts',
  tags: ['BCA'],
  description: 'Gets a list of all `Branch Current Account` objects.',
  request: {
    headers: z.object({
      'If-Modified-Since': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Used for conditional request, to retrieve data only if modified since a given date',
            in: 'header',
            name: 'If-Modified-Since',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'If-None-Match': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Used for conditional request, to retrieve data only if the given Etag value does not match',
            in: 'header',
            name: 'If-None-Match',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response with a list of `Branch Current Account` data',
      content: {
        'application/prs.openbanking.opendata.v1.3+json': {
          schema: z
            .strictObject({
              data: z.array(
                z
                  .object({
                    AccessChannels: z
                      .array(
                        z
                          .enum([
                            'ATM',
                            'Branch',
                            'BusinessCommercialCentre',
                            'CallCentre',
                            'MobileApps',
                            'MobileBanking',
                            'Online',
                            'Phone',
                            'Post',
                            'PostOffice',
                            'RelationshipManager',
                            'Text',
                          ])
                          .openapi({ description: 'Channel' }),
                      )
                      .min(1)
                      .openapi({
                        description: 'Ways to interact with the bank when managing account',
                      }),
                    Benefits: z
                      .strictObject({
                        Benefit: z
                          .boolean()
                          .openapi({ description: 'Describe  one or more benefits if they exist' }),
                        BenefitGroup: z
                          .array(
                            z
                              .strictObject({
                                BenefitItem: z
                                  .strictObject({
                                    BenefitDetail: z
                                      .array(
                                        z
                                          .strictObject({
                                            BenefitDescription: z
                                              .string()
                                              .exactOptional()
                                              .openapi({
                                                description:
                                                  'A textual explanation of what the benefit is',
                                              }),
                                            BenefitID: z
                                              .string()
                                              .exactOptional()
                                              .openapi({
                                                description:
                                                  'Unique benefit identifier per organisation',
                                              }),
                                            BenefitName: z
                                              .string()
                                              .exactOptional()
                                              .openapi({ description: 'The name of the benefit' }),
                                            BenefitType: z
                                              .string()
                                              .exactOptional()
                                              .openapi({
                                                description:
                                                  'Type that represents the nature of the benefit',
                                              }),
                                            BenefitValue: z
                                              .string()
                                              .exactOptional()
                                              .openapi({
                                                description:
                                                  'The value or values permissible for a specific benefit for an individual product representing a product characteristic',
                                              }),
                                            Counter: z
                                              .int()
                                              .exactOptional()
                                              .openapi({
                                                description:
                                                  'Counter for the criteria (e.g. number of DD)',
                                              }),
                                            CriteriaType: z
                                              .array(
                                                z
                                                  .enum([
                                                    'CashDeposit',
                                                    'Deposit',
                                                    'DirectDebit',
                                                    'InitialDeposit',
                                                    'InternetLogon',
                                                    'MobileLogon',
                                                    'RegularDeposit',
                                                  ])
                                                  .openapi({
                                                    description:
                                                      'Criteria that is required in order to be eligible for the Benefit',
                                                  }),
                                              )
                                              .exactOptional(),
                                            DefaultToAccounts: z
                                              .boolean()
                                              .exactOptional()
                                              .openapi({
                                                description:
                                                  'Is the benefit part of the default account',
                                              }),
                                            MaximumCriteria: z
                                              .string()
                                              .regex(/^-?\d{1,10}\.\d{1,2}$/)
                                              .exactOptional()
                                              .openapi({
                                                description: 'Maximum amount for the criteria',
                                              }),
                                            MinimumCriteria: z
                                              .string()
                                              .regex(/^-?\d{1,10}\.\d{1,2}$/)
                                              .exactOptional()
                                              .openapi({
                                                description: 'Minimum amount for the criteria',
                                              }),
                                            PromotionEndDate: z
                                              .string()
                                              .regex(
                                                /^[0-9]{4}-(0[1-9]|(1[0|1|2]))-((0[1-9])|((1|2)[0-9])|(30|31))$/,
                                              )
                                              .exactOptional()
                                              .openapi({
                                                description:
                                                  'If the benefit is temporal the end date is when the benefit is no longer applicable',
                                              }),
                                            PromotionStartDate: z
                                              .string()
                                              .regex(
                                                /^[0-9]{4}-(0[1-9]|(1[0|1|2]))-((0[1-9])|((1|2)[0-9])|(30|31))$/,
                                              )
                                              .exactOptional()
                                              .openapi({
                                                description:
                                                  'If the benefit is temporal the start date is when the benefit comes into effect',
                                              }),
                                          })
                                          .openapi({ description: 'Benefit detail', required: [] }),
                                      )
                                      .exactOptional(),
                                    DateOfChange: z
                                      .string()
                                      .regex(
                                        /^[0-9]{4}-(0[1-9]|(1[0|1|2]))-((0[1-9])|((1|2)[0-9])|(30|31))$/,
                                      )
                                      .exactOptional()
                                      .openapi({
                                        description:
                                          'Date of the change if it refers to future terms',
                                      }),
                                    LengthPromotionalInDays: z
                                      .int()
                                      .exactOptional()
                                      .openapi({
                                        description:
                                          'Describes the length if only a duration is given instead of a date in days',
                                      }),
                                    StartPromotionOrFutureTerms: z
                                      .string()
                                      .regex(
                                        /^[0-9]{4}-(0[1-9]|(1[0|1|2]))-((0[1-9])|((1|2)[0-9])|(30|31))$/,
                                      )
                                      .exactOptional()
                                      .openapi({ description: 'Describes the start date' }),
                                    StopPromotionOrFutureTerms: z
                                      .string()
                                      .regex(
                                        /^[0-9]{4}-(0[1-9]|(1[0|1|2]))-((0[1-9])|((1|2)[0-9])|(30|31))$/,
                                      )
                                      .exactOptional()
                                      .openapi({ description: 'Describes the end date' }),
                                  })
                                  .openapi({ description: 'Benefit Item', required: [] }),
                                BenefitSubType: z
                                  .enum(['FutureMultipleTerms', 'Promotional', 'Regular'])
                                  .exactOptional()
                                  .openapi({ description: 'Benefit Subtype Code' }),
                              })
                              .openapi({
                                description: 'Benefit Interest Group',
                                required: ['BenefitItem'],
                              }),
                          )
                          .exactOptional(),
                      })
                      .openapi({ description: 'Benefit', required: ['Benefit'] }),
                    CAPricing: z
                      .array(
                        z
                          .strictObject({
                            CAPricingItem: z
                              .strictObject({
                                DateOfChange: z
                                  .string()
                                  .regex(
                                    /^[0-9]{4}-(0[1-9]|(1[0|1|2]))-((0[1-9])|((1|2)[0-9])|(30|31))$/,
                                  )
                                  .exactOptional()
                                  .openapi({
                                    description: 'Date of the change if it refers to future terms',
                                  }),
                                ExchangeRateAdjustment: z
                                  .string()
                                  .regex(/^-?\d{1,3}\.\d{1,4}$/)
                                  .exactOptional()
                                  .openapi({
                                    description:
                                      'The margin added, by certain card issuers, to the scheme rate in order to arrive at the exchange rate qouted as the reference exchange rate to the cardholder',
                                  }),
                                LengthPromotionalInDays: z
                                  .int()
                                  .exactOptional()
                                  .openapi({
                                    description:
                                      'Describes the length if only a duration is given instead of a date',
                                  }),
                                StartPromotionOrFutureTerms: z
                                  .string()
                                  .regex(
                                    /^[0-9]{4}-(0[1-9]|(1[0|1|2]))-((0[1-9])|((1|2)[0-9])|(30|31))$/,
                                  )
                                  .exactOptional()
                                  .openapi({ description: 'Describes the start date' }),
                                StopPromotionOrFutureTerms: z
                                  .string()
                                  .regex(
                                    /^[0-9]{4}-(0[1-9]|(1[0|1|2]))-((0[1-9])|((1|2)[0-9])|(30|31))$/,
                                  )
                                  .exactOptional()
                                  .openapi({ description: 'Describes the end date' }),
                              })
                              .openapi({ description: 'Card Pricing', required: [] }),
                            ProductState: z
                              .enum(['FutureMultipleTerms', 'Promotional', 'Regular'])
                              .openapi({
                                description:
                                  'Describes if the offering is promotional or a description of a future state.',
                              }),
                          })
                          .openapi({
                            description: 'Card Price',
                            required: ['ProductState', 'CAPricingItem'],
                          }),
                      )
                      .min(1),
                    CardNotes: z
                      .string()
                      .exactOptional()
                      .openapi({
                        description: 'Optional additional notes to supplement the card details',
                      }),
                    CardType: z
                      .array(
                        z
                          .enum([
                            'BasicCard',
                            'BusinessQuickLodgeCard',
                            'Cashcard',
                            'ContactlessCashcard',
                            'ContactlessDebitMastercard',
                            'ContactlessDebitVisa',
                            'DebitMastercard',
                            'VisaDebit',
                            'DepositCard',
                            'OperatorCard',
                            'POCACard',
                          ])
                          .openapi({ description: 'Indicates the card scheme' }),
                      )
                      .min(1)
                      .openapi({ description: 'Card Type available' }),
                    CardWithdrawalLimit: z
                      .string()
                      .regex(/^-?\d{1,10}\.\d{1,2}$/)
                      .openapi({
                        description:
                          'The daily Limit that a customer can get via the ATM. This describes the default limit rather than the maximum',
                      }),
                    ChequeBookAvailable: z
                      .boolean()
                      .openapi({ description: 'Can a chequebook be issued' }),
                    Contactless: z
                      .boolean()
                      .openapi({ description: 'Does the card issued have contactless facility' }),
                    CreditInterest: z
                      .strictObject({
                        CreditCharged: z
                          .boolean()
                          .openapi({
                            description:
                              'Is credit paid to the account. The answer will be the condition of all other fields to be filled',
                          }),
                        CreditInterestGroup: z
                          .array(
                            z
                              .strictObject({
                                CreditInterestItem: z
                                  .strictObject({
                                    CalculationFrequency: z
                                      .enum([
                                        'Daily',
                                        'Weekly',
                                        'Monthly',
                                        'Quarterly',
                                        'Half-Yearly',
                                        'Yearly',
                                        'Overnight',
                                      ])
                                      .exactOptional()
                                      .openapi({
                                        description: 'How often is interest applied to account',
                                      }),
                                    CalculationMethod: z
                                      .enum(['Banded', 'Tiered', 'Whole'])
                                      .exactOptional()
                                      .openapi({ description: 'Method for interest calculation' }),
                                    DateOfChange: z
                                      .string()
                                      .regex(
                                        /^[0-9]{4}-(0[1-9]|(1[0|1|2]))-((0[1-9])|((1|2)[0-9])|(30|31))$/,
                                      )
                                      .exactOptional()
                                      .openapi({
                                        description:
                                          'Date of the change if it refers to future terms',
                                      }),
                                    EndDate: z
                                      .string()
                                      .regex(
                                        /^[0-9]{4}-(0[1-9]|(1[0|1|2]))-((0[1-9])|((1|2)[0-9])|(30|31))$/,
                                      )
                                      .exactOptional()
                                      .openapi({
                                        description:
                                          'If interest is charged on a specific date range as end date (often used for promotion)',
                                      }),
                                    FixedInterestLength: z
                                      .int()
                                      .exactOptional()
                                      .openapi({ description: 'Fixed interest length in days' }),
                                    InterestNotes: z
                                      .string()
                                      .exactOptional()
                                      .openapi({
                                        description:
                                          'Additional notes to supplement the interest details',
                                      }),
                                    InterestRateType: z
                                      .enum(['Fixed', 'Variable'])
                                      .exactOptional()
                                      .openapi({
                                        description: 'Credit Interest Payment Rate Type',
                                      }),
                                    InterestTiers: z
                                      .array(
                                        z
                                          .strictObject({
                                            APRAERRate: z
                                              .string()
                                              .regex(/^-?\d{1,3}\.\d{1,4}$/)
                                              .exactOptional()
                                              .openapi({
                                                description: 'AER or APR Rate for comparison',
                                              }),
                                            DailyChargeForMaximum: z
                                              .string()
                                              .regex(/^-?\d{1,10}\.\d{1,2}$/)
                                              .exactOptional()
                                              .openapi({
                                                description: 'Special charge on tiered overdraft',
                                              }),
                                            DailyChargeForMinimum: z
                                              .string()
                                              .regex(/^-?\d{1,10}\.\d{1,2}$/)
                                              .exactOptional()
                                              .openapi({
                                                description: 'Special charge on tiered overdraft',
                                              }),
                                            InterestTier: z
                                              .string()
                                              .exactOptional()
                                              .openapi({ description: 'Identifier for the tier' }),
                                            Rate: z
                                              .string()
                                              .regex(/^-?\d{1,3}\.\d{1,4}$/)
                                              .exactOptional()
                                              .openapi({
                                                description: 'Rate being paid by the bank (gross)',
                                              }),
                                            RateComparisonType: z
                                              .enum(['APR', 'AER', 'Gross', 'Net', 'RepApr'])
                                              .exactOptional()
                                              .openapi({ description: 'Rate Comparison Type' }),
                                            TierValueMaximum: z
                                              .string()
                                              .min(1)
                                              .max(15)
                                              .exactOptional()
                                              .openapi({
                                                description: 'Max Value of interst tier',
                                              }),
                                            TierValueMinimum: z
                                              .string()
                                              .regex(/^-?\d{1,10}\.\d{1,2}$/)
                                              .exactOptional()
                                              .openapi({
                                                description: 'Lower value of interest tier',
                                              }),
                                          })
                                          .openapi({
                                            description: 'Credit Interest Tiers',
                                            required: [],
                                          }),
                                      )
                                      .exactOptional(),
                                    LengthPromotionalInDays: z
                                      .int()
                                      .exactOptional()
                                      .openapi({
                                        description:
                                          'Describes the length if only a duration is given instead of a date',
                                      }),
                                    PaymentMethod: z
                                      .enum(['Compound', 'PayAway', 'SelfCredit', 'SimpleInterest'])
                                      .exactOptional()
                                      .openapi({
                                        description: 'Credit Interest Payment Method Code',
                                      }),
                                    StartDate: z
                                      .string()
                                      .regex(
                                        /^[0-9]{4}-(0[1-9]|(1[0|1|2]))-((0[1-9])|((1|2)[0-9])|(30|31))$/,
                                      )
                                      .exactOptional()
                                      .openapi({
                                        description:
                                          'If interest is charged on a specific date range as start date (often used for promotion)',
                                      }),
                                    StartPromotionOrFutureTerms: z
                                      .string()
                                      .regex(
                                        /^[0-9]{4}-(0[1-9]|(1[0|1|2]))-((0[1-9])|((1|2)[0-9])|(30|31))$/,
                                      )
                                      .exactOptional()
                                      .openapi({ description: 'Describes the start date' }),
                                    StopPromotionOrFutureTerms: z
                                      .string()
                                      .regex(
                                        /^[0-9]{4}-(0[1-9]|(1[0|1|2]))-((0[1-9])|((1|2)[0-9])|(30|31))$/,
                                      )
                                      .exactOptional()
                                      .openapi({ description: 'Describes the end date' }),
                                  })
                                  .openapi({ description: 'Credit Interest item', required: [] }),
                                InterestTierSubType: z
                                  .enum(['FutureMultipleTerms', 'Promotional', 'Regular'])
                                  .exactOptional()
                                  .openapi({
                                    description:
                                      'Describes if the offering is promotional, regular or a description of a future state',
                                  }),
                              })
                              .openapi({
                                description: 'Credit Interest Group',
                                required: ['CreditInterestItem'],
                              }),
                          )
                          .exactOptional(),
                      })
                      .openapi({ description: 'Credit Interest', required: ['CreditCharged'] }),
                    CreditScoringPartOfAccountOpeningForGettingAnAccount: z
                      .boolean()
                      .openapi({
                        description:
                          'Indicates whether a credit check performed on an inquiry to open an account is submitted',
                      }),
                    CreditScoringPartOfAccountOpeningForIDVerification: z
                      .boolean()
                      .exactOptional()
                      .openapi({
                        description:
                          'Indicates whether a credit check is used to check the address of a potential new account holder',
                      }),
                    CreditScoringPartOfAccountOpeningIDVerificationIsAHardOrSoftCreditScore: z
                      .array(
                        z
                          .enum(['Hard', 'Soft'])
                          .openapi({ description: 'Indicates the type of scoring' }),
                      )
                      .exactOptional(),
                    CreditScoringPartOfAccountOpeningIDVerificationText: z
                      .array(z.string())
                      .exactOptional()
                      .openapi({ description: 'Details on the specific credit scoring' }),
                    CreditScoringPartOfAccountOpeningIsAHardOrSoftCreditScore: z
                      .array(
                        z
                          .enum(['Hard', 'Soft'])
                          .openapi({ description: 'Indicates the type of scoring' }),
                      )
                      .exactOptional()
                      .openapi({ description: 'Describes the type of credit scoring' }),
                    CreditScoringPartOfAccountOpeningText: z
                      .string()
                      .exactOptional()
                      .openapi({ description: 'Details on the specific credit scoring' }),
                    Currency: z
                      .array(
                        z
                          .string()
                          .regex(/[A-Z]{3}/)
                          .openapi({ description: 'Active or Historic Currency Code' }),
                      )
                      .min(1)
                      .openapi({
                        description: 'Currency of the Account. Default to GBP at present',
                      }),
                    Eligibility: z
                      .strictObject({
                        AgeRestricted: z
                          .boolean()
                          .openapi({
                            description:
                              "Indicates a customer's age is part of eligibility criteria",
                          }),
                        AnnualBusinessTurnover: z
                          .string()
                          .regex(/^-?\d{1,10}\.\d{1,2}$/)
                          .exactOptional()
                          .openapi({ description: 'Annual Business Turnover' }),
                        AnnualBusinessTurnoverCurrency: z
                          .string()
                          .regex(/[A-Z]{3}/)
                          .exactOptional()
                          .openapi({ description: 'Annual Business Turnover Currency' }),
                        Description: z
                          .string()
                          .openapi({ description: 'One paragraph detailing the eligibility' }),
                        EligibilityName: z
                          .string()
                          .exactOptional()
                          .openapi({
                            description:
                              'Free text description, denotes non standard eligibilities not included in the code list',
                          }),
                        EligibilityNotes: z
                          .string()
                          .exactOptional()
                          .openapi({
                            description:
                              'Optional additional notes to supplement the eligibility conditions. Only used for very specific conditions',
                          }),
                        EligibilityType: z
                          .enum([
                            'AnyBusinessCustomer',
                            'BusinessOnly',
                            'CreditCard',
                            'CreditScoring',
                            'EmailAddress',
                            'ExistingCustomers',
                            'IdAndV',
                            'Mortgage',
                            'NoArrearsOnLoan',
                            'NoCustomerInArrears',
                            'NoOverOverdraftThirtyDays',
                            'NoSoleUkAccountOrBankrupt',
                            'NTB',
                            'NTBBusiness',
                            'SoleStudentAccount',
                            'SoleUkAccount',
                            'StudentsOnly',
                            'TwoMonthsOfCourseStart',
                            'UCASFulltimeTwoYears',
                          ])
                          .exactOptional()
                          .openapi({ description: 'Eligibility type' }),
                        IncomeCondition: z
                          .string()
                          .exactOptional()
                          .openapi({
                            description:
                              'Stipulates any particular definition of income that applies to the income eligibility and/or method by which income must paid into the account (eg Salary DD)',
                          }),
                        IncomeTurnoverRelated: z
                          .boolean()
                          .openapi({ description: 'Indicates if eligibility linked to income' }),
                        MarketingEligibility: z
                          .array(
                            z
                              .enum([
                                'ExistingCustomers',
                                'NewCustomersOnly',
                                'SwitchersOnly',
                                'StartUp',
                              ])
                              .openapi({ description: 'Specific eligibility for marketing' }),
                          )
                          .superRefine((items, ctx) => {
                            const seen = new Map()
                            for (const [i, val] of items.entries()) {
                              const key = JSON.stringify(val)
                              if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
                              else seen.set(key, i)
                            }
                          })
                          .exactOptional(),
                        MaxNumberOfAccounts: z
                          .string()
                          .exactOptional()
                          .openapi({
                            description: 'Maximum number of the same prodcut the customer may hold',
                          }),
                        MaximumAge: z
                          .int()
                          .exactOptional()
                          .openapi({
                            description: 'Maximum age, in years, allowed to hold the account',
                          }),
                        MaximumAgeToOpen: z
                          .int()
                          .exactOptional()
                          .openapi({ description: 'Maximum age, in years, to open an account' }),
                        MaximumOpeningAmount: z
                          .boolean()
                          .exactOptional()
                          .openapi({ description: 'A maximum amount to be deposited at opening' }),
                        MinIncomeTurnoverPaidIntoAccount: z
                          .int()
                          .exactOptional()
                          .openapi({
                            description: 'Minimum Income Amount required to paid into the account',
                          }),
                        MinimumAge: z
                          .int()
                          .exactOptional()
                          .openapi({
                            description: 'Minimum age, in years, required to hold an account',
                          }),
                        MinimumDeposit: z
                          .boolean()
                          .exactOptional()
                          .openapi({
                            description: 'A minimum deposit required to hold this account',
                          }),
                        MinimumIncomeFrequency: z
                          .enum([
                            'AcademicTerm',
                            'HalfYearly',
                            'Monthly',
                            'Quarterly',
                            'Weekly',
                            'Yearly',
                          ])
                          .exactOptional()
                          .openapi({
                            description:
                              'The frequency that the minimum mentioned before is deposited in the account. Yearly is very important for premium accounts',
                          }),
                        MinimumIncomeTurnoverAmount: z
                          .string()
                          .regex(/^-?\d{1,10}\.\d{1,2}$/)
                          .exactOptional()
                          .openapi({
                            description: 'Minimum income / Turnover required to hold the product',
                          }),
                        MinimumIncomeTurnoverCurrency: z
                          .string()
                          .regex(/[A-Z]{3}/)
                          .exactOptional()
                          .openapi({ description: 'Minimum income / Turnover Currency' }),
                        MinimumOperatingBalance: z
                          .string()
                          .regex(/^-?\d{1,10}\.\d{1,2}$/)
                          .exactOptional()
                          .openapi({ description: 'Minimum Operating Balance' }),
                        MinimumOperatingBalanceCurrency: z
                          .string()
                          .regex(/[A-Z]{3}/)
                          .exactOptional()
                          .openapi({ description: 'Minimum Operating Balance currency' }),
                        MinimumOperatingBalanceExists: z
                          .boolean()
                          .exactOptional()
                          .openapi({ description: 'Is there a Minimum Operating Balance?' }),
                        OpeningDepositMaximumAmount: z
                          .string()
                          .regex(/^-?\d{1,10}\.\d{1,2}$/)
                          .exactOptional()
                          .openapi({ description: 'Maximum Amount to be depositing at opening' }),
                        OpeningDepositMaximumCurrency: z
                          .string()
                          .regex(/[A-Z]{3}/)
                          .exactOptional()
                          .openapi({
                            description:
                              'The currency of the Minimum Amount to be depositing at opening',
                          }),
                        OpeningDepositMinimum: z
                          .string()
                          .regex(/^-?\d{1,10}\.\d{1,2}$/)
                          .exactOptional()
                          .openapi({ description: 'Minimum Amount to be held on account' }),
                        OpeningDepositMinimumCurrency: z
                          .string()
                          .regex(/[A-Z]{3}/)
                          .exactOptional()
                          .openapi({
                            description:
                              'The currency of the Minimum Amount to be depositing at opening',
                          }),
                        OtherFinancialHoldingRequired: z
                          .boolean()
                          .openapi({
                            description:
                              'Indicates that it is necessary to hold another product with the bank in order to be eligible for this product or feature',
                          }),
                        PreviousBankruptcy: z
                          .boolean()
                          .openapi({
                            description:
                              'Describes if a previous bankruptcy / insolvency disqualfies for this account Details in ELI-280',
                          }),
                        ResidencyRestricted: z
                          .boolean()
                          .openapi({
                            description:
                              "Indicates a customer's residency forms part of the eligibility criteria",
                          }),
                        ResidencyRestrictedRegion: z
                          .enum([
                            'UK',
                            'EEA',
                            'EU',
                            'EFTA',
                            'GB - ENG',
                            'GB - NIR',
                            'GB - SCT',
                            'GB - WLS',
                            'IRL',
                          ])
                          .exactOptional()
                          .openapi({
                            description:
                              'Indicates a customer must be current resident of a geographic area/country',
                          }),
                        SingleJointIncome: z
                          .enum(['Joint', 'SoleIncome', 'SoleOrJoint', 'Turnover'])
                          .exactOptional()
                          .openapi({
                            description:
                              'Minimum Income Source. For certain products a minimum income is required. This can be mandated as to the single income or to a joint income. This field describes this',
                          }),
                        ThirdSectorOrganisations: z
                          .boolean()
                          .openapi({
                            description:
                              'Is the product available to operate as a Clubs or Societies account?',
                          }),
                      })
                      .openapi({
                        description: 'Eligibility',
                        required: [
                          'AgeRestricted',
                          'OtherFinancialHoldingRequired',
                          'Description',
                          'IncomeTurnoverRelated',
                          'ResidencyRestricted',
                          'ThirdSectorOrganisations',
                          'PreviousBankruptcy',
                        ],
                      }),
                    Feature: z
                      .array(
                        z
                          .object({
                            DateOfChange: z
                              .string()
                              .regex(
                                /^[0-9]{4}-(0[1-9]|(1[0|1|2]))-((0[1-9])|((1|2)[0-9])|(30|31))$/,
                              )
                              .exactOptional()
                              .openapi({
                                description: 'Date of the change if it refers to future terms',
                              }),
                            ExistingFeature: z
                              .boolean()
                              .openapi({
                                description: 'Indicates whether the account has any feature',
                              }),
                            FeatureDetails: z
                              .array(
                                z
                                  .object({
                                    CriteriaType: z
                                      .string()
                                      .exactOptional()
                                      .openapi({
                                        description:
                                          'Criteria that is required in order to be eligible for the feature',
                                      }),
                                    DateOfChange: z
                                      .string()
                                      .regex(
                                        /^[0-9]{4}-(0[1-9]|(1[0|1|2]))-((0[1-9])|((1|2)[0-9])|(30|31))$/,
                                      )
                                      .exactOptional()
                                      .openapi({
                                        description:
                                          'Date of the change if it refers to future terms',
                                      }),
                                    FeatureDescription: z
                                      .string()
                                      .exactOptional()
                                      .openapi({
                                        description: 'A textual explanation of what the feature',
                                      }),
                                    FeatureName: z
                                      .string()
                                      .exactOptional()
                                      .openapi({ description: 'The name of the feature' }),
                                    FeatureSubType: z
                                      .enum(['FutureMultipleTerms', 'Promotional', 'Regular'])
                                      .exactOptional()
                                      .openapi({ description: '' }),
                                    FeatureType: z
                                      .string()
                                      .exactOptional()
                                      .openapi({
                                        description:
                                          'Type that represents the nature of the feature',
                                      }),
                                    FeatureValue: z
                                      .string()
                                      .exactOptional()
                                      .openapi({
                                        description:
                                          'The value or values permissible for a specific feature for an individual product representing a product characteristic',
                                      }),
                                    LengthPromotionalInDays: z
                                      .int()
                                      .exactOptional()
                                      .openapi({
                                        description:
                                          'Describes the length if only a duration is given instead of a date',
                                      }),
                                    StartPromotionOrFutureTerms: z
                                      .string()
                                      .regex(
                                        /^[0-9]{4}-(0[1-9]|(1[0|1|2]))-((0[1-9])|((1|2)[0-9])|(30|31))$/,
                                      )
                                      .exactOptional()
                                      .openapi({ description: 'Describes the start date' }),
                                    StopPromotionOrFutureTerms: z
                                      .string()
                                      .regex(
                                        /^[0-9]{4}-(0[1-9]|(1[0|1|2]))-((0[1-9])|((1|2)[0-9])|(30|31))$/,
                                      )
                                      .exactOptional()
                                      .openapi({ description: 'Describes the end date' }),
                                  })
                                  .openapi({ description: 'Feature Details', required: [] }),
                              )
                              .exactOptional()
                              .openapi({ description: 'Feature details' }),
                            LengthPromotionalInDays: z
                              .int()
                              .exactOptional()
                              .openapi({
                                description:
                                  'Describes the length if only a duration is given instead of a date',
                              }),
                            ProductState: z
                              .enum(['FutureMultipleTerms', 'Promotional', 'Regular'])
                              .exactOptional()
                              .openapi({
                                description:
                                  'Describes if the offering is promotional or a description of a future state.',
                              }),
                            StartPromotionOrFutureTerms: z
                              .string()
                              .regex(
                                /^[0-9]{4}-(0[1-9]|(1[0|1|2]))-((0[1-9])|((1|2)[0-9])|(30|31))$/,
                              )
                              .exactOptional()
                              .openapi({ description: 'Describes the start date' }),
                            StopPromotionOrFutureTerms: z
                              .string()
                              .regex(
                                /^[0-9]{4}-(0[1-9]|(1[0|1|2]))-((0[1-9])|((1|2)[0-9])|(30|31))$/,
                              )
                              .exactOptional()
                              .openapi({ description: 'Describes the end date' }),
                          })
                          .openapi({
                            description: 'Account Features',
                            required: ['ExistingFeature'],
                          }),
                      )
                      .exactOptional(),
                    FeesAndCharges: z
                      .array(
                        z
                          .strictObject({
                            Fees: z
                              .strictObject({
                                DateOfChange: z
                                  .string()
                                  .regex(
                                    /^[0-9]{4}-(0[1-9]|(1[0|1|2]))-((0[1-9])|((1|2)[0-9])|(30|31))$/,
                                  )
                                  .exactOptional()
                                  .openapi({
                                    description: 'Date of the change if it refers to future terms',
                                  }),
                                FeeDetails: z
                                  .array(
                                    z
                                      .strictObject({
                                        FeeDetail: z
                                          .strictObject({
                                            DateOfChange: z
                                              .string()
                                              .regex(
                                                /^[0-9]{4}-(0[1-9]|(1[0|1|2]))-((0[1-9])|((1|2)[0-9])|(30|31))$/,
                                              )
                                              .exactOptional()
                                              .openapi({
                                                description:
                                                  'Date of the change if it refers to future terms',
                                              }),
                                            FeeSubDetails: z
                                              .strictObject({
                                                FeeAmount: z
                                                  .string()
                                                  .regex(/^-?\d{1,10}\.\d{1,2}$/)
                                                  .exactOptional()
                                                  .openapi({ description: 'Fee in GBP' }),
                                                FeeFrequency: z
                                                  .enum([
                                                    'AcademicTerm',
                                                    'AccountClosing',
                                                    'AccountOpening',
                                                    'AtTimeOfLoanRepayment',
                                                    'ChargingPeriod',
                                                    'Daily',
                                                    'EveryFiveBusinessDays',
                                                    'Item',
                                                    'Monthly',
                                                    'OnAccountAnniversary',
                                                    'PerHour',
                                                    'PerOccurrence',
                                                    'PerSheet',
                                                    'PerTransactionAmount',
                                                    'PerTransactionPercentage',
                                                    'Quarterly',
                                                    'SixMonthly',
                                                    'StartOfLoan',
                                                    'StatementMonthly',
                                                    'Weekly',
                                                    'Yearly',
                                                  ])
                                                  .openapi({
                                                    description: 'Triggering frequency of the fee',
                                                  }),
                                                FeeHigherTier: z
                                                  .int()
                                                  .exactOptional()
                                                  .openapi({
                                                    description:
                                                      'Higher occurrence / range boundary e.g. For returned cheques this could be 10, which means the first 10 returned cheque fits into this range',
                                                  }),
                                                FeeLowerTier: z
                                                  .int()
                                                  .exactOptional()
                                                  .openapi({
                                                    description:
                                                      'Lower occurrence / range boundary e.g. For returned cheques this could be 0, which means the first returned cheque fits into this range',
                                                  }),
                                                FeeMax: z
                                                  .string()
                                                  .regex(/^-?\d{1,10}\.\d{1,2}$/)
                                                  .exactOptional()
                                                  .openapi({ description: 'Fee in GBP' }),
                                                FeeMin: z
                                                  .string()
                                                  .regex(/^-?\d{1,10}\.\d{1,2}$/)
                                                  .exactOptional()
                                                  .openapi({ description: 'Fee in GBP' }),
                                                FeeRate: z
                                                  .string()
                                                  .regex(/^-?\d{1,3}\.\d{1,4}$/)
                                                  .exactOptional()
                                                  .openapi({ description: '% Rate' }),
                                                FeesAndChargesNotes: z
                                                  .string()
                                                  .exactOptional()
                                                  .openapi({
                                                    description:
                                                      'Supplementary information for fees and charges',
                                                  }),
                                                Negotiable: z
                                                  .boolean()
                                                  .openapi({
                                                    description:
                                                      'Indicates that this Fee Rate or Fee Amount is negotiable based on risk or other factor',
                                                  }),
                                                RepresentativeRate: z
                                                  .string()
                                                  .regex(/^-?\d{1,3}\.\d{1,4}$/)
                                                  .exactOptional()
                                                  .openapi({ description: 'Representative Rate' }),
                                              })
                                              .openapi({
                                                description: 'Fee Sub Details',
                                                required: ['FeeFrequency', 'Negotiable'],
                                              }),
                                            FeeType: z
                                              .enum([
                                                'Other',
                                                'ATMDonation',
                                                'ATMDeposATMPaidIn',
                                                'ReportCertBalance',
                                                'ATMAbroadConVisaCredit',
                                                'ATMAbroadConVisaDebit',
                                                'ATMCardnetEnvIn',
                                                'ATMCashGroupATMCreditCard',
                                                'ATMCashNonGroupATMCredittcard',
                                                'ATMCashGroupATMDebitCard',
                                                'ATMCashNonGroupATMDebitcard',
                                                'ATMConGroupATM',
                                                'ATMAbroad',
                                                'ATMForeignCashDebCard',
                                                'ATMAbroadGoldVisaDebit',
                                                'ATMSpainCashCard',
                                                'ATMSpainDebitCard',
                                                'ATMSpainConversionDebitCard',
                                                'ATMSpainConversionCashCard',
                                                'ATMNonSterlingWithdrawal',
                                                'ATMAbroadVisaCredit',
                                                'ATMAbroadVisaDebit',
                                                'ATMAbroadConVisaGoldDebit',
                                                'ATMWidthdrawCash',
                                                'BACSOnLineAncilliary',
                                                'BACSBatch',
                                                'BACSOnLineFile',
                                                'BACSFileItem',
                                                'BACSOnLineSetup ',
                                                'BACSItem',
                                                'BACSItemInterbranch',
                                                'BACSBulkBatch',
                                                'BACSOnLineOverlimit',
                                                'BACSOnLinePayment',
                                                'BACSRecallItem',
                                                'BACSOnLineService',
                                                'BACSBulkInternet',
                                                'BACSTELDirDebSmartCard',
                                                'BACSTELDirDebWebInit',
                                                'BACSTELirDebWebInit',
                                                'BACSTELDirDebOverlimit',
                                                'BACSTELDirDebPayment',
                                                'BACSTELDirDebService',
                                                'BACSTELDirDebAncilliary',
                                                'BACSDirectItemProfile',
                                                'BACSTELAncilliary',
                                                'BACSTELSmartCard',
                                                'BACSTELFile',
                                                'BACSTELSetup ',
                                                'BACSTELOverlimit',
                                                'BACSTELPayment',
                                                'BACSTELService',
                                                'CHAPSOutBranch',
                                                'CHAPSCancellation',
                                                'CHAPSOutOnlineDepositAcc',
                                                'CHAPSIn',
                                                'CHAPSOutInterBank',
                                                'CHAPSInterBank',
                                                'CHAPSOutPost',
                                                'CHAPSOutInterBranch',
                                                'CHAPSOut',
                                                'CHAPSOutOnline',
                                                'CHAPSandForeignPay',
                                                'CHAPSOutManual',
                                                'CardCardReplacement',
                                                'DraftsCounter',
                                                'DraftsBankers',
                                                'DraftsIntlPayableAbroad',
                                                'DraftsLostStolen',
                                                'CardPersonalisedCard',
                                                'DraftsIntlStoppedCancelled',
                                                'EuroChqXLess',
                                                'EuroChqXPlus',
                                                'FPSOutFutureDated',
                                                'FPSOutImmediate',
                                                'FPSOut',
                                                'FPSOutOwn',
                                                'FPSInBranch',
                                                'FPSUKPayUrgent',
                                                'LegalArticlesReport',
                                                'LegalSealing',
                                                'LegalBondAndGuarantee',
                                                'LegalCourtOrder',
                                                'LegalCoSearch',
                                                'LegalDepositAssignment',
                                                'LegalGuaranteePrep',
                                                'LegalLifePolicyPrepCo',
                                                'LegalLifePolicyPrepPersonal',
                                                'LegalPriorityPariPassu',
                                                'LegalSubordinationAgreement',
                                                'DirDebDirectDebitAdmin',
                                                'DirDebDirectDebitCancel',
                                                'IntlPayBIBForeignLimit',
                                                'IntlPayCreditTransCust',
                                                'IntlPayCreditTransNonCust',
                                                'IntlPayUrgentPaymentForeign',
                                                'IntlPayExpressMoneyMover',
                                                'IntlPayEEAPayUrgent',
                                                'IntlPayIrishPayUrgent',
                                                'IntlPayEEAPay',
                                                'IntlPayForeignIn1CPlus',
                                                'IntlPayForeignPaymentInUKAcc',
                                                'IntlPayForeignCharge',
                                                'IntlPayForeignCancellation',
                                                'IntlPayForeignStandardEUEuroBIC',
                                                'IntlPayFXFeeRate',
                                                'IntlPayForeignInternet',
                                                'IntlPayForeign',
                                                'IntlPayForeignInbound',
                                                'IntlPayFXPaymentOut',
                                                'IntlPayForeignInSub1C',
                                                'IntlPayFXRate',
                                                'IntlPayForeignStandardEUEuroNoBIC',
                                                'IntlPayFXPaymentOutIR',
                                                'IntlPayFXFee',
                                                'IntlPayPurchaseNonSterling',
                                                'IntlPayPostPaymentForeign',
                                                'IntlPayPurchaseRateNonSterling',
                                                'IntlPayPaymentTracing',
                                                'IntlPayStandardMoneyMover',
                                                'IntlPayMT101Transaction',
                                                'IntlPayTransNonSterling',
                                                'IntlPayTransRateNonSterling',
                                                'IntlPayForeignUrgentEUEuroBIC',
                                                'IntlPayForeignUrgentEUEuroNoBIC',
                                                'IntlPayUrgentPaymentGroup',
                                                'IntlPayUrgentPaymentUK',
                                                'IntlPayUSAPayUrgent',
                                                'IntlPayCurrencyPurchase',
                                                'IntlPayWorldpayPayment',
                                                'IntlPayCurrencyWithdraw',
                                                'InvPayBankDetailsWrong',
                                                'InvPayForeignBCNR',
                                                'InvPayForeignRecall',
                                                'InvGeneralInq',
                                                'InvOldInstruction',
                                                'InvPayPaymentRecall',
                                                'InvPayReturnDebitXVLess',
                                                'InvPayReturnDebitXVPlus',
                                                'InvPayStopPayment',
                                                'InvPayStandingOrdUnpaid',
                                                'SafeKeepAccess',
                                                'SafeKeepDeedMedium',
                                                'SafeKeepingEnvelope',
                                                'SafeKeepingInspection',
                                                'SafeKeepingLargeItem',
                                                'SafeKeepMultipleItems',
                                                'SafeKeepingParcel',
                                                'SafeKeepDeedSmall',
                                                'SafeKeepOneItem',
                                                'SafeKeepSafeCustody',
                                                'LoanArrangementFeePC',
                                                'LoanArrangement',
                                                'LoanEarlyRepayment',
                                                'LoanLatePayment',
                                                'LoanSMEUnsecuredLoan',
                                                'LoanTieredArrangement',
                                                'NightSafeNightSafeBankOpen',
                                                'NightSafeCreditSub5K',
                                                'NightSafeNightSafe',
                                                'NightSafeNightSafePaidIn',
                                                'OverdraftAnnualReview',
                                                'OverdraftTempOverdraft',
                                                'OverdraftUnauthorisedBorrowing',
                                                'POPostOfficeCounterCredit',
                                                'POPostOfficeCashCredit',
                                                'POPostOfficeCashOut',
                                                'POPostOfficeWithdrawal',
                                                'ChqBookTheftLossAllStopped',
                                                'ChqIssuedCurrencyAcc',
                                                'ChqCopy',
                                                'ChqDraft',
                                                'ChqIn',
                                                'ChqDraftSterling',
                                                'ChqOutIssued',
                                                'ChqSpecialChqPresentation',
                                                'ChqCounterCheque',
                                                'ChqChequeswithStatement',
                                                'ChqStopped',
                                                'ChqTrans',
                                                'ChqDraftFX',
                                                'ChqForeignCourier',
                                                'ChqForeignNegTenThou',
                                                'ChqForeignNegHundred',
                                                'ChequeForeignBankDivi',
                                                'ChqForeignNegFiftyThou',
                                                'ChqPensionCheque',
                                                'ChequeForeignOtherDivi',
                                                'ChqForeignNegFiveThou',
                                                'ChqForeignNegMax',
                                                'ChqForeignGBPMMDPlus',
                                                'ChqGiftCheque',
                                                'ChqCounterLodgement',
                                                'ChqCashDropLodgement',
                                                'ChqChequePhotocopy',
                                                'ChqPostOfficeCredit',
                                                'ChqPostOfficeChequeCollected',
                                                'ChqChequeRetrieval',
                                                'ChqReconcilliationPerTrans',
                                                'ChqSpecialPresentationCount',
                                                'ChqSpecialPresentationPTT',
                                                'ChqUnpaidCharge',
                                                'ChqUnpaidTransIn',
                                                'ChqUnpaidTransOut',
                                                'ChqUnpaidCheque',
                                                'ReportAuditLetter',
                                                'ReportFAXAdviceAdditional',
                                                'ReportTelAdviceAdditional',
                                                'ReportCreditHistory',
                                                'ReportCertInterestDuplicate',
                                                'ReportCertInterest',
                                                'ReportCreditHistoryAdditionalInYear',
                                                'ReportForeignStatusEnqElec',
                                                'ReportForeignStatusEnq',
                                                'ReportCashBackorInterestAnal',
                                                'ReportStatementChqDaily',
                                                'ReportStatementChqFortnightly',
                                                'ReportStatementChqMonthly',
                                                'ReportStatementChqWeekly',
                                                'ReportStatementAndDiviChq',
                                                'ReportReference',
                                                'ReportReferralItem',
                                                'ReportStatementByATM',
                                                'ReportStatementByBranch',
                                                'ReportStatementCopyRegular',
                                                'ReportStatusEnquiry',
                                                'ReportStatementFrequent',
                                                'ReportStatementMonthly',
                                                'ReportStatementCopy1',
                                                'ReportStatementToBranch',
                                                'ReportSMSTextMiniStatementorAlert',
                                                'ReportStatementFortnightly',
                                                'ReportSMSTextMiniStatementWoM',
                                                'ReportSMSTextAlertBalance',
                                                'ReportSMSTextAlert',
                                                'ReportTaxCert',
                                                'ReportWeeklyStatement',
                                                'ReportTextMessageBanking',
                                                'SEPACancellation',
                                                'SEPABranch',
                                                'SEPACredit',
                                                'SEPADirectDebit',
                                                'SEPAIn',
                                                'SEPAEuro',
                                                'SEPAOut',
                                                'SEPAUnpaid',
                                                'SEPAWinbitsAnnual Service',
                                                'SEPAWinbitsTransaction',
                                                'TransBillPaymentBranch',
                                                'TransBillCollect',
                                                'TransTelephoneBillPayment',
                                                'TransBankPayment',
                                                'TransBillPaymentTelephone',
                                                'TransCorrespondentBankFee',
                                                'TransCreditTransferUKDifferent',
                                                'TransCreditTransferUKSame',
                                                'TransCredit',
                                                'TransCreditTransfer',
                                                'TransBranchCredit',
                                                'TransDebit',
                                                'TransDebCardDeb',
                                                'TransUKDirDeb',
                                                'TransManualDeb',
                                                'TransBuyForeignWithGBP',
                                                'TransGoodValueReq',
                                                'TransSWIFTOutUKForeign',
                                                'TransInconpleteInstruction',
                                                'TransManualEntries',
                                                'TransManualTrans',
                                                'TransNonSterling',
                                                'TransPOSSaleForeign',
                                                'TransPriPaymentPost',
                                                'TransPOSSaleUK',
                                                'TransReturnPayment',
                                                'TransReconciliationPerTrans',
                                                'TransStandingOrdAdmin',
                                                'TransStandingOrd',
                                                'TransStandingOrdManPay',
                                                'TransTravellersChqOtherBank',
                                                'TransTelBusiPriPaymentForeignToUKAcc',
                                                'TransTeleItem',
                                                'TransTelBusiPriPaymentToGrpAcc',
                                                'TransTravellersChqRate',
                                                'TransTransferExGroup',
                                                'TransUnauthorisedPaidTrans',
                                                'TransUrgentPaymentPostal',
                                                'TransUnpaidTrans',
                                                'TransTelBusiPriPaymentToNonGrpAcc',
                                                'TransSWIFTOutNonEEASterling',
                                                'AutoAutoCredit',
                                                'AutoAutomatedEntries',
                                                'AutoAutoCreditPhoneInet',
                                                'AutoAutomatedTrans',
                                                'AutoDebitCardCommercial',
                                                'AutoFPSAutoCredit',
                                                'VisaConvertAbroadForeign',
                                                'VisaBureauDeChange',
                                                'VisaTravellersChqorCurrency',
                                                'OnlineInternetBillPayment',
                                                'OnlineBusinessOnlineEuroPayment',
                                                'OnlineBusinessOnlineUrgentEuroPayment',
                                                'OnlineBusinessOnlineForeignPayment',
                                                'OnlineInterbankTransfer',
                                                'OnlineInterbankPerTransfer',
                                                'OnlineInterbranchTransfer',
                                                'OnlineInterbranchPerTransfer',
                                                'OnlineSubscriptionMonthly',
                                                'OnlineBankingPayment',
                                                'OnlineBankingSubscription',
                                                'OnlinePOSSale',
                                                'OnlinePersonalCustAncillarys',
                                                'OnlinePersonalCustService',
                                                'OnlinePersonalCustOverlimits',
                                                'OnlineReplacementCardReader',
                                                'OnlinePersonalCustSetUp',
                                                'OnlinePersonalCustTransaction',
                                                'OnlinePaymentinGBPtoUK',
                                                'OnlineUrgentPayment',
                                                'OnlinePaymentinUSDtoUS',
                                                'OnlineBulkDirectDebSterling',
                                                'ForeignChqSent',
                                                'ForeignChqSelf',
                                                'ForeignChqEncashment',
                                                'ForeignFXInwardsCust',
                                                'ForeignFXTransfersROI',
                                                'ForeignFXForwardTrans',
                                                'ForeignFXTransfersBOI',
                                                'ForeignExMaintenance',
                                                'ForeignFXInwardsNonCust',
                                                'ForeignFXOutwards',
                                                'ForeignPurchase',
                                                'ForeignStatusRep',
                                                'ForeignChqDraft',
                                                'ForeignChqCLess',
                                                'ForeignChqMLess',
                                                'ForeignChqOther',
                                                'ForeignChqMPlus',
                                                'ForeignChqCCC',
                                                'ServiceCAccountFee',
                                                'ServiceCAccountFeeMonthly',
                                                'ServiceCAccountFeeQuarterly',
                                                'ServiceCBalanceHandling',
                                                'ServiceCFixedTariff',
                                                'ServiceCBusiDepAccBreakage',
                                                'ServiceCMonitorDaily',
                                                'ServiceCManagementFee',
                                                'ServiceCMinimumMonthlyFee',
                                                'ServiceCMonitorMonthly',
                                                'ServiceCMonitorWeekly',
                                                'ServiceCSecurityFee',
                                                'ServiceCMT940AccountFirst',
                                                'ServiceCMT940AccountSubsequent',
                                                'ServiceCOther',
                                                'CounterCoinHandling',
                                                'CounterCashIn',
                                                'CounterCashInNotUs',
                                                'CounterCashOut',
                                                'CounterCashX',
                                                'CounterForeignCashMax',
                                                'CounterForeignNoteHandling',
                                                'CounterForeignCashOut',
                                                'CounterCashFeeRate',
                                                'CounterForeignCashOutTx',
                                                'CounterCounterLodgement',
                                                'CounterCashDropLodgement',
                                                'CounterNotesLodged',
                                                'CounterNotesOut',
                                                'CounterCashInOwn',
                                                'CounterPaidTrans',
                                                'CounterCashFeePercent',
                                              ])
                                              .openapi({
                                                description: 'A description of the Fee type',
                                              }),
                                            LengthPromotionalInDays: z
                                              .int()
                                              .exactOptional()
                                              .openapi({
                                                description:
                                                  'Describes the length if only a duration is given instead of a date',
                                              }),
                                            Other: z
                                              .string()
                                              .exactOptional()
                                              .openapi({ description: 'Describe other fee type' }),
                                            StartPromotionOrFutureTerms: z
                                              .string()
                                              .regex(
                                                /^[0-9]{4}-(0[1-9]|(1[0|1|2]))-((0[1-9])|((1|2)[0-9])|(30|31))$/,
                                              )
                                              .exactOptional()
                                              .openapi({ description: 'Describes the start date' }),
                                            StopPromotionOrFutureTerms: z
                                              .string()
                                              .regex(
                                                /^[0-9]{4}-(0[1-9]|(1[0|1|2]))-((0[1-9])|((1|2)[0-9])|(30|31))$/,
                                              )
                                              .exactOptional()
                                              .openapi({ description: 'Describes the end date' }),
                                          })
                                          .openapi({
                                            description: 'Fee Detail',
                                            required: ['FeeType', 'FeeSubDetails'],
                                          }),
                                        FeeSubType: z
                                          .enum(['FutureMultipleTerms', 'Promotional', 'Regular'])
                                          .openapi({ description: 'Fee Sub Type code' }),
                                      })
                                      .openapi({
                                        description: 'Fee Details',
                                        required: ['FeeSubType', 'FeeDetail'],
                                      }),
                                  )
                                  .min(1),
                                FeeHigherTier: z
                                  .int()
                                  .exactOptional()
                                  .openapi({
                                    description:
                                      'Higher occurrence / range boundary e.g. For returned cheques this could be 10, which means the first 10 returned cheque fits into this range',
                                  }),
                                FeeLowerTier: z
                                  .int()
                                  .exactOptional()
                                  .openapi({
                                    description:
                                      'Lower occurrence / range boundary e.g.. For returned cheques this could be 0, which means the first returned cheque fits into this range',
                                  }),
                                LengthPromotionalInDays: z
                                  .int()
                                  .exactOptional()
                                  .openapi({
                                    description:
                                      'Describes the length if only a duration is given instead of a date',
                                  }),
                                StartPromotionOrFutureTerms: z
                                  .string()
                                  .regex(
                                    /^[0-9]{4}-(0[1-9]|(1[0|1|2]))-((0[1-9])|((1|2)[0-9])|(30|31))$/,
                                  )
                                  .exactOptional()
                                  .openapi({ description: 'Describes the start date' }),
                                StopPromotionOrFutureTerms: z
                                  .string()
                                  .regex(
                                    /^[0-9]{4}-(0[1-9]|(1[0|1|2]))-((0[1-9])|((1|2)[0-9])|(30|31))$/,
                                  )
                                  .exactOptional()
                                  .openapi({ description: 'Describes the end date' }),
                              })
                              .openapi({ description: 'Fees', required: ['FeeDetails'] }),
                            ProductState: z
                              .enum(['FutureMultipleTerms', 'Promotional', 'Regular'])
                              .openapi({
                                description:
                                  'Describes if the offering is promotional or a description of a future state.',
                              }),
                          })
                          .openapi({
                            description: 'Fees And Charges',
                            required: ['ProductState', 'Fees'],
                          }),
                      )
                      .min(1),
                    InternationalPaymentsSupported: z
                      .boolean()
                      .openapi({
                        description: 'Indicates that the account supports international payments',
                      }),
                    MaximumMonthlyCharge: z
                      .string()
                      .regex(/^-?\d{1,10}\.\d{1,2}$/)
                      .exactOptional()
                      .openapi({ description: 'The maximum Relevant Charges that could accrue' }),
                    MobileWallet: z
                      .array(
                        z
                          .enum([
                            'AndroidPay',
                            'ApplePay',
                            'IssuerMobileApp',
                            'MobileBankingApp',
                            'Other',
                            'PayM',
                            'SamsungPay',
                            'VodafoneWallet',
                          ])
                          .openapi({
                            description:
                              'Mobile wallet supported by this product. A mobile wallet being any electronic device that allows an individual to make electronic commerce transactions',
                          }),
                      )
                      .exactOptional()
                      .openapi({
                        description:
                          'Mobile wallet supported by this product. A mobile wallet being any electronic device that allows an individual to make electronic commerce transactions',
                      }),
                    Organisation: z
                      .strictObject({
                        Brand: z
                          .strictObject({
                            TrademarkID: z
                              .string()
                              .min(1)
                              .max(35)
                              .openapi({
                                description:
                                  'The trademark number that has been registered with the Intellectual Property Office. Note: The 2 letter IPO prefix should be omitted',
                              }),
                            TrademarkIPOCode: z
                              .enum(['UK', 'EU'])
                              .openapi({
                                description:
                                  'The Intellectual Property Office (IPO) is the official body responsible for intellectual property (IP) rights including patents, designs, trademarks and copyright. (Code: UK or EU only)',
                              }),
                          })
                          .openapi({
                            description: 'Brand',
                            required: ['TrademarkIPOCode', 'TrademarkID'],
                          }),
                        ParentOrganisation: z
                          .strictObject({
                            BIC: z
                              .string()
                              .regex(/[A-Z]{6}[A-Z2-9][A-NP-Z0-9]([A-Z0-9]{3})?/)
                              .exactOptional()
                              .openapi({ description: 'The BIC from the organisation' }),
                            LEI: z
                              .string()
                              .regex(/^[A-Z0-9]{18,18}[0-9]{2,2}$/)
                              .exactOptional()
                              .openapi({ description: 'The LEI ID of the organisation' }),
                            OrganisationName: z
                              .strictObject({
                                LegalName: z
                                  .string()
                                  .min(1)
                                  .max(35)
                                  .openapi({ description: 'Legal Name of the organisation' }),
                              })
                              .openapi({
                                description: 'Organisation Name',
                                required: ['LegalName'],
                              }),
                          })
                          .openapi({
                            description: 'Parent organisation',
                            required: ['OrganisationName'],
                          }),
                      })
                      .openapi({
                        description: 'Organisation',
                        required: ['ParentOrganisation', 'Brand'],
                      }),
                    Overdraft: z
                      .array(
                        z
                          .strictObject({
                            DateOfChange: z
                              .string()
                              .regex(
                                /^[0-9]{4}-(0[1-9]|(1[0|1|2]))-((0[1-9])|((1|2)[0-9])|(30|31))$/,
                              )
                              .exactOptional()
                              .openapi({
                                description: 'Date of the change if it refers to future terms',
                              }),
                            FeeChargeNegotiableIndicator: z
                              .enum(['No', 'Yes'])
                              .exactOptional()
                              .openapi({ description: 'Fee Charge negotiable Indicator' }),
                            FeesAndCharges: z
                              .array(
                                z
                                  .strictObject({
                                    FeeChargeAmount: z
                                      .string()
                                      .regex(/^-?\d{1,10}\.\d{1,2}$/)
                                      .exactOptional()
                                      .openapi({ description: 'Charge applied to tier' }),
                                    FeeChargeApplicationFrequency: z
                                      .enum([
                                        'AcademicTerm',
                                        'Daily',
                                        'Weekly',
                                        'Monthly',
                                        'Quarterly',
                                        'Half-Yearly',
                                        'Yearly',
                                        'Overnight',
                                        'Other',
                                      ])
                                      .exactOptional()
                                      .openapi({
                                        description:
                                          'Frequency with which the rate, or amount is charged',
                                      }),
                                    FeeChargeCalculationFrequency: z
                                      .enum([
                                        'AcademicTerm',
                                        'Daily',
                                        'Weekly',
                                        'Monthly',
                                        'Quarterly',
                                        'Half-Yearly',
                                        'Yearly',
                                        'Overnight',
                                        'Other',
                                      ])
                                      .exactOptional()
                                      .openapi({
                                        description:
                                          'Frequency with which the rate, or amount is calculated',
                                      }),
                                    FeeChargeOtherApplicationFrequency: z
                                      .strictObject({
                                        Code: z
                                          .string()
                                          .length(4)
                                          .exactOptional()
                                          .openapi({
                                            description:
                                              "Code mnemonic for 'Other' code set value applicable to specified attribute",
                                          }),
                                        Description: z
                                          .string()
                                          .exactOptional()
                                          .openapi({
                                            description:
                                              "Description for 'Other' code set value applicable to specified attribute",
                                          }),
                                        Name: z
                                          .string()
                                          .min(1)
                                          .max(256)
                                          .exactOptional()
                                          .openapi({
                                            description:
                                              "Name of 'Other' code set value applicable to specified attribute",
                                          }),
                                      })
                                      .exactOptional()
                                      .openapi({ description: 'Other Code Type', required: [] }),
                                    FeeChargeOtherCalculationFrequency: z
                                      .strictObject({
                                        Code: z
                                          .string()
                                          .length(4)
                                          .exactOptional()
                                          .openapi({
                                            description:
                                              "Code mnemonic for 'Other' code set value applicable to specified attribute",
                                          }),
                                        Description: z
                                          .string()
                                          .exactOptional()
                                          .openapi({
                                            description:
                                              "Description for 'Other' code set value applicable to specified attribute",
                                          }),
                                        Name: z
                                          .string()
                                          .min(1)
                                          .max(256)
                                          .exactOptional()
                                          .openapi({
                                            description:
                                              "Name of 'Other' code set value applicable to specified attribute",
                                          }),
                                      })
                                      .exactOptional()
                                      .openapi({ description: 'Other Code Type', required: [] }),
                                    FeeChargeOtherType: z
                                      .strictObject({
                                        Code: z
                                          .string()
                                          .length(4)
                                          .exactOptional()
                                          .openapi({
                                            description:
                                              "Code mnemonic for 'Other' code set value applicable to specified attribute",
                                          }),
                                        Description: z
                                          .string()
                                          .exactOptional()
                                          .openapi({
                                            description:
                                              "Description for 'Other' code set value applicable to specified attribute",
                                          }),
                                        Name: z
                                          .string()
                                          .min(1)
                                          .max(256)
                                          .exactOptional()
                                          .openapi({
                                            description:
                                              "Name of 'Other' code set value applicable to specified attribute",
                                          }),
                                      })
                                      .exactOptional()
                                      .openapi({ description: 'Other Code Type', required: [] }),
                                    FeeChargeRate: z
                                      .string()
                                      .regex(/^-?\d{1,3}\.\d{1,4}$/)
                                      .exactOptional()
                                      .openapi({ description: 'Fee charge rate applied to tier' }),
                                    FeeChargeRateOtherType: z
                                      .strictObject({
                                        Code: z
                                          .string()
                                          .length(4)
                                          .exactOptional()
                                          .openapi({
                                            description:
                                              "Code mnemonic for 'Other' code set value applicable to specified attribute",
                                          }),
                                        Description: z
                                          .string()
                                          .exactOptional()
                                          .openapi({
                                            description:
                                              "Description for 'Other' code set value applicable to specified attribute",
                                          }),
                                        Name: z
                                          .string()
                                          .min(1)
                                          .max(256)
                                          .exactOptional()
                                          .openapi({
                                            description:
                                              "Name of 'Other' code set value applicable to specified attribute",
                                          }),
                                      })
                                      .exactOptional()
                                      .openapi({ description: 'Other Code Type', required: [] }),
                                    FeeChargeRateType: z
                                      .enum(['Gross', 'Net', 'Other'])
                                      .exactOptional()
                                      .openapi({ description: 'Rate type other than EAR' }),
                                    FeeChargeType: z
                                      .enum([
                                        'Periodic',
                                        'Minimum',
                                        'Maximum',
                                        'Setup',
                                        'Review',
                                        'Renewal',
                                        'MinimumSetup',
                                        'MaximumSetup',
                                        'Total',
                                        'Item',
                                        'EmergencyLending',
                                        'Other',
                                      ])
                                      .openapi({ description: 'Type of fee or charge' }),
                                  })
                                  .openapi({
                                    description: 'Overdraft Fees Charges',
                                    required: ['FeeChargeType'],
                                  }),
                              )
                              .exactOptional(),
                            LengthPromotionalInDays: z
                              .int()
                              .exactOptional()
                              .openapi({
                                description:
                                  'Describes the length if only a duration is given instead of a date',
                              }),
                            MaximumMonthlyOverdraftCharge: z
                              .string()
                              .regex(/^-?\d{1,10}\.\d{1,2}$/)
                              .exactOptional()
                              .openapi({
                                description:
                                  'Maximum Monthly Charge (MMC) for Overdraft fee and charges.',
                              }),
                            Notes: z
                              .string()
                              .exactOptional()
                              .openapi({ description: 'Notes on the overdraft' }),
                            OverdraftProductState: z
                              .enum(['FutureMultipleTerms', 'Promotional', 'Regular'])
                              .exactOptional()
                              .openapi({
                                description:
                                  'Describes if the offering is promotional or a description of a future state.',
                              }),
                            OverdraftTierBandSet: z
                              .array(
                                z
                                  .strictObject({
                                    ArrangementOtherType: z
                                      .strictObject({
                                        Code: z
                                          .string()
                                          .length(4)
                                          .exactOptional()
                                          .openapi({
                                            description:
                                              "Code mnemonic for 'Other' code set value applicable to specified attribute",
                                          }),
                                        Description: z
                                          .string()
                                          .exactOptional()
                                          .openapi({
                                            description:
                                              "Description for 'Other' code set value applicable to specified attribute",
                                          }),
                                        Name: z
                                          .string()
                                          .min(1)
                                          .max(256)
                                          .exactOptional()
                                          .openapi({
                                            description:
                                              "Name of 'Other' code set value applicable to specified attribute",
                                          }),
                                      })
                                      .exactOptional()
                                      .openapi({ description: 'Other Code Type', required: [] }),
                                    ArrangementType: z
                                      .enum(['Unarranged', 'Arranged', 'Other'])
                                      .openapi({
                                        description: 'Defines the arrangement of the overdraft',
                                      }),
                                    BufferAmount: z
                                      .string()
                                      .regex(/^-?\d{1,10}\.\d{1,2}$/)
                                      .exactOptional()
                                      .openapi({
                                        description: 'Amount on overdraft that is prearranged',
                                      }),
                                    CMADefinedIndicator: z
                                      .boolean()
                                      .openapi({
                                        description:
                                          'describes that the tiers and bands are set by the CMA order, as opposed to be set by the banks',
                                      }),
                                    EAR: z
                                      .string()
                                      .regex(/^-?\d{1,3}\.\d{1,4}$/)
                                      .exactOptional()
                                      .openapi({ description: 'EAR of the Overdraft Set' }),
                                    FeesAndCharges: z
                                      .array(
                                        z
                                          .strictObject({
                                            FeeChargeAmount: z
                                              .string()
                                              .regex(/^-?\d{1,10}\.\d{1,2}$/)
                                              .exactOptional()
                                              .openapi({ description: 'Charge applied to tier' }),
                                            FeeChargeApplicationFrequency: z
                                              .enum([
                                                'AcademicTerm',
                                                'Daily',
                                                'Weekly',
                                                'Monthly',
                                                'Quarterly',
                                                'Half-Yearly',
                                                'Yearly',
                                                'Overnight',
                                                'Other',
                                              ])
                                              .exactOptional()
                                              .openapi({
                                                description:
                                                  'Frequency with which the rate, or amount is charged',
                                              }),
                                            FeeChargeCalculationFrequency: z
                                              .enum([
                                                'AcademicTerm',
                                                'Daily',
                                                'Weekly',
                                                'Monthly',
                                                'Quarterly',
                                                'Half-Yearly',
                                                'Yearly',
                                                'Overnight',
                                                'Other',
                                              ])
                                              .exactOptional()
                                              .openapi({
                                                description:
                                                  'Frequency with which the rate, or amount is calculated',
                                              }),
                                            FeeChargeOtherApplicationFrequency: z
                                              .strictObject({
                                                Code: z
                                                  .string()
                                                  .length(4)
                                                  .exactOptional()
                                                  .openapi({
                                                    description:
                                                      "Code mnemonic for 'Other' code set value applicable to specified attribute",
                                                  }),
                                                Description: z
                                                  .string()
                                                  .exactOptional()
                                                  .openapi({
                                                    description:
                                                      "Description for 'Other' code set value applicable to specified attribute",
                                                  }),
                                                Name: z
                                                  .string()
                                                  .min(1)
                                                  .max(256)
                                                  .exactOptional()
                                                  .openapi({
                                                    description:
                                                      "Name of 'Other' code set value applicable to specified attribute",
                                                  }),
                                              })
                                              .exactOptional()
                                              .openapi({
                                                description: 'Other Code Type',
                                                required: [],
                                              }),
                                            FeeChargeOtherCalculationFrequency: z
                                              .strictObject({
                                                Code: z
                                                  .string()
                                                  .length(4)
                                                  .exactOptional()
                                                  .openapi({
                                                    description:
                                                      "Code mnemonic for 'Other' code set value applicable to specified attribute",
                                                  }),
                                                Description: z
                                                  .string()
                                                  .exactOptional()
                                                  .openapi({
                                                    description:
                                                      "Description for 'Other' code set value applicable to specified attribute",
                                                  }),
                                                Name: z
                                                  .string()
                                                  .min(1)
                                                  .max(256)
                                                  .exactOptional()
                                                  .openapi({
                                                    description:
                                                      "Name of 'Other' code set value applicable to specified attribute",
                                                  }),
                                              })
                                              .exactOptional()
                                              .openapi({
                                                description: 'Other Code Type',
                                                required: [],
                                              }),
                                            FeeChargeOtherType: z
                                              .strictObject({
                                                Code: z
                                                  .string()
                                                  .length(4)
                                                  .exactOptional()
                                                  .openapi({
                                                    description:
                                                      "Code mnemonic for 'Other' code set value applicable to specified attribute",
                                                  }),
                                                Description: z
                                                  .string()
                                                  .exactOptional()
                                                  .openapi({
                                                    description:
                                                      "Description for 'Other' code set value applicable to specified attribute",
                                                  }),
                                                Name: z
                                                  .string()
                                                  .min(1)
                                                  .max(256)
                                                  .exactOptional()
                                                  .openapi({
                                                    description:
                                                      "Name of 'Other' code set value applicable to specified attribute",
                                                  }),
                                              })
                                              .exactOptional()
                                              .openapi({
                                                description: 'Other Code Type',
                                                required: [],
                                              }),
                                            FeeChargeRate: z
                                              .string()
                                              .regex(/^-?\d{1,3}\.\d{1,4}$/)
                                              .exactOptional()
                                              .openapi({
                                                description: 'Fee charge rate applied to tier',
                                              }),
                                            FeeChargeRateOtherType: z
                                              .strictObject({
                                                Code: z
                                                  .string()
                                                  .length(4)
                                                  .exactOptional()
                                                  .openapi({
                                                    description:
                                                      "Code mnemonic for 'Other' code set value applicable to specified attribute",
                                                  }),
                                                Description: z
                                                  .string()
                                                  .exactOptional()
                                                  .openapi({
                                                    description:
                                                      "Description for 'Other' code set value applicable to specified attribute",
                                                  }),
                                                Name: z
                                                  .string()
                                                  .min(1)
                                                  .max(256)
                                                  .exactOptional()
                                                  .openapi({
                                                    description:
                                                      "Name of 'Other' code set value applicable to specified attribute",
                                                  }),
                                              })
                                              .exactOptional()
                                              .openapi({
                                                description: 'Other Code Type',
                                                required: [],
                                              }),
                                            FeeChargeRateType: z
                                              .enum(['Gross', 'Net', 'Other'])
                                              .exactOptional()
                                              .openapi({ description: 'Rate type other than EAR' }),
                                            FeeChargeType: z
                                              .enum([
                                                'Periodic',
                                                'Minimum',
                                                'Maximum',
                                                'Setup',
                                                'Review',
                                                'Renewal',
                                                'MinimumSetup',
                                                'MaximumSetup',
                                                'Total',
                                                'Item',
                                                'EmergencyLending',
                                                'Other',
                                              ])
                                              .openapi({ description: 'Type of fee or charge' }),
                                          })
                                          .openapi({
                                            description: 'Overdraft Fees Charges',
                                            required: ['FeeChargeType'],
                                          }),
                                      )
                                      .exactOptional()
                                      .openapi({ description: 'Type of fee or charge' }),
                                    Notes: z
                                      .string()
                                      .exactOptional()
                                      .openapi({ description: 'Notes on the Overdraft' }),
                                    OverdraftTierBand: z
                                      .array(
                                        z
                                          .strictObject({
                                            EAR: z
                                              .string()
                                              .regex(/^-?\d{1,3}\.\d{1,4}$/)
                                              .exactOptional()
                                              .openapi({ description: 'EAR of the Tier' }),
                                            FeesAndCharges: z
                                              .array(
                                                z
                                                  .strictObject({
                                                    FeeChargeAmount: z
                                                      .string()
                                                      .regex(/^-?\d{1,10}\.\d{1,2}$/)
                                                      .exactOptional()
                                                      .openapi({
                                                        description: 'Charge applied to tier',
                                                      }),
                                                    FeeChargeApplicationFrequency: z
                                                      .enum([
                                                        'AcademicTerm',
                                                        'Daily',
                                                        'Weekly',
                                                        'Monthly',
                                                        'Quarterly',
                                                        'Half-Yearly',
                                                        'Yearly',
                                                        'Overnight',
                                                        'Other',
                                                      ])
                                                      .exactOptional()
                                                      .openapi({
                                                        description:
                                                          'Frequency with which the rate, or amount is charged',
                                                      }),
                                                    FeeChargeCalculationFrequency: z
                                                      .enum([
                                                        'AcademicTerm',
                                                        'Daily',
                                                        'Weekly',
                                                        'Monthly',
                                                        'Quarterly',
                                                        'Half-Yearly',
                                                        'Yearly',
                                                        'Overnight',
                                                        'Other',
                                                      ])
                                                      .exactOptional()
                                                      .openapi({
                                                        description:
                                                          'Frequency with which the rate, or amount is calculated',
                                                      }),
                                                    FeeChargeOtherApplicationFrequency: z
                                                      .strictObject({
                                                        Code: z
                                                          .string()
                                                          .length(4)
                                                          .exactOptional()
                                                          .openapi({
                                                            description:
                                                              "Code mnemonic for 'Other' code set value applicable to specified attribute",
                                                          }),
                                                        Description: z
                                                          .string()
                                                          .exactOptional()
                                                          .openapi({
                                                            description:
                                                              "Description for 'Other' code set value applicable to specified attribute",
                                                          }),
                                                        Name: z
                                                          .string()
                                                          .min(1)
                                                          .max(256)
                                                          .exactOptional()
                                                          .openapi({
                                                            description:
                                                              "Name of 'Other' code set value applicable to specified attribute",
                                                          }),
                                                      })
                                                      .exactOptional()
                                                      .openapi({
                                                        description: 'Other Code Type',
                                                        required: [],
                                                      }),
                                                    FeeChargeOtherCalculationFrequency: z
                                                      .strictObject({
                                                        Code: z
                                                          .string()
                                                          .length(4)
                                                          .exactOptional()
                                                          .openapi({
                                                            description:
                                                              "Code mnemonic for 'Other' code set value applicable to specified attribute",
                                                          }),
                                                        Description: z
                                                          .string()
                                                          .exactOptional()
                                                          .openapi({
                                                            description:
                                                              "Description for 'Other' code set value applicable to specified attribute",
                                                          }),
                                                        Name: z
                                                          .string()
                                                          .min(1)
                                                          .max(256)
                                                          .exactOptional()
                                                          .openapi({
                                                            description:
                                                              "Name of 'Other' code set value applicable to specified attribute",
                                                          }),
                                                      })
                                                      .exactOptional()
                                                      .openapi({
                                                        description: 'Other Code Type',
                                                        required: [],
                                                      }),
                                                    FeeChargeOtherType: z
                                                      .strictObject({
                                                        Code: z
                                                          .string()
                                                          .length(4)
                                                          .exactOptional()
                                                          .openapi({
                                                            description:
                                                              "Code mnemonic for 'Other' code set value applicable to specified attribute",
                                                          }),
                                                        Description: z
                                                          .string()
                                                          .exactOptional()
                                                          .openapi({
                                                            description:
                                                              "Description for 'Other' code set value applicable to specified attribute",
                                                          }),
                                                        Name: z
                                                          .string()
                                                          .min(1)
                                                          .max(256)
                                                          .exactOptional()
                                                          .openapi({
                                                            description:
                                                              "Name of 'Other' code set value applicable to specified attribute",
                                                          }),
                                                      })
                                                      .exactOptional()
                                                      .openapi({
                                                        description: 'Other Code Type',
                                                        required: [],
                                                      }),
                                                    FeeChargeRate: z
                                                      .string()
                                                      .regex(/^-?\d{1,3}\.\d{1,4}$/)
                                                      .exactOptional()
                                                      .openapi({
                                                        description:
                                                          'Fee charge rate applied to tier',
                                                      }),
                                                    FeeChargeRateOtherType: z
                                                      .strictObject({
                                                        Code: z
                                                          .string()
                                                          .length(4)
                                                          .exactOptional()
                                                          .openapi({
                                                            description:
                                                              "Code mnemonic for 'Other' code set value applicable to specified attribute",
                                                          }),
                                                        Description: z
                                                          .string()
                                                          .exactOptional()
                                                          .openapi({
                                                            description:
                                                              "Description for 'Other' code set value applicable to specified attribute",
                                                          }),
                                                        Name: z
                                                          .string()
                                                          .min(1)
                                                          .max(256)
                                                          .exactOptional()
                                                          .openapi({
                                                            description:
                                                              "Name of 'Other' code set value applicable to specified attribute",
                                                          }),
                                                      })
                                                      .exactOptional()
                                                      .openapi({
                                                        description: 'Other Code Type',
                                                        required: [],
                                                      }),
                                                    FeeChargeRateType: z
                                                      .enum(['Gross', 'Net', 'Other'])
                                                      .exactOptional()
                                                      .openapi({
                                                        description: 'Rate type other than EAR',
                                                      }),
                                                    FeeChargeType: z
                                                      .enum([
                                                        'Periodic',
                                                        'Minimum',
                                                        'Maximum',
                                                        'Setup',
                                                        'Review',
                                                        'Renewal',
                                                        'MinimumSetup',
                                                        'MaximumSetup',
                                                        'Total',
                                                        'Item',
                                                        'EmergencyLending',
                                                        'Other',
                                                      ])
                                                      .openapi({
                                                        description: 'Type of fee or charge',
                                                      }),
                                                  })
                                                  .openapi({
                                                    description: 'Overdraft Fees Charges',
                                                    required: ['FeeChargeType'],
                                                  }),
                                              )
                                              .superRefine((items, ctx) => {
                                                const seen = new Map()
                                                for (const [i, val] of items.entries()) {
                                                  const key = JSON.stringify(val)
                                                  if (seen.has(key))
                                                    ctx.addIssue({ code: 'custom', path: [i] })
                                                  else seen.set(key, i)
                                                }
                                              })
                                              .exactOptional(),
                                            Notes: z
                                              .string()
                                              .exactOptional()
                                              .openapi({ description: 'Notes on the Overdraft' }),
                                            TierBandIdentification: z
                                              .string()
                                              .exactOptional()
                                              .openapi({
                                                description: 'Identification of the tier or band',
                                              }),
                                            TierValueMaximum: z
                                              .string()
                                              .min(1)
                                              .max(15)
                                              .openapi({
                                                description: 'Maximum value of the tier',
                                              }),
                                            TierValueMinimum: z
                                              .string()
                                              .regex(/^-?\d{1,10}\.\d{1,2}$/)
                                              .openapi({
                                                description: 'Minimum value of the tier',
                                              }),
                                          })
                                          .openapi({
                                            description: 'Tiers',
                                            required: ['TierValueMinimum', 'TierValueMaximum'],
                                          }),
                                      )
                                      .exactOptional(),
                                    TierBandSetIdentification: z
                                      .string()
                                      .exactOptional()
                                      .openapi({
                                        description: 'Identification of the set of tiers or bands',
                                      }),
                                  })
                                  .openapi({
                                    description: 'Tier Bandset',
                                    required: ['CMADefinedIndicator', 'ArrangementType'],
                                  }),
                              )
                              .exactOptional()
                              .openapi({ description: 'Overdraft Tier Band Set' }),
                            OverdraftType: z
                              .enum(['Committed', 'OnDemand'])
                              .exactOptional()
                              .openapi({
                                description: 'Defines if the overdraft facility is committed ',
                              }),
                            StartPromotionOrFutureTerms: z
                              .string()
                              .regex(
                                /^[0-9]{4}-(0[1-9]|(1[0|1|2]))-((0[1-9])|((1|2)[0-9])|(30|31))$/,
                              )
                              .exactOptional()
                              .openapi({ description: 'Describes the start date' }),
                            StopPromotionOrFutureTerms: z
                              .string()
                              .regex(
                                /^[0-9]{4}-(0[1-9]|(1[0|1|2]))-((0[1-9])|((1|2)[0-9])|(30|31))$/,
                              )
                              .exactOptional()
                              .openapi({ description: 'Describes the end date' }),
                            Term: z
                              .string()
                              .exactOptional()
                              .openapi({
                                description:
                                  'The duration of the overdraft, if it is non permanent',
                              }),
                          })
                          .openapi({ description: 'Overdraft', required: [] }),
                      )
                      .exactOptional(),
                    OverdraftOffered: z
                      .boolean()
                      .openapi({
                        description: 'Indicates whether an overdraft offered for this account',
                      }),
                    ProductDescription: z
                      .string()
                      .openapi({
                        description:
                          'Description of the product provided by the parent organisation',
                      }),
                    ProductIdentifier: z
                      .string()
                      .openapi({
                        description:
                          'Identifier within the parent organisation for the product. Must be unique in the organisation',
                      }),
                    ProductName: z
                      .string()
                      .exactOptional()
                      .openapi({
                        description:
                          'The name of the product used for marketing purposes from a customer perspective. i.e. what the customer would recognise',
                      }),
                    ProductSegment: z
                      .array(
                        z
                          .enum([
                            'Basic',
                            'Business',
                            'General',
                            'Graduate',
                            'International',
                            'Packaged',
                            'Personal',
                            'Premium',
                            'Reward',
                            'SME',
                            'Student',
                            'YoungAdult',
                            'Youth',
                          ])
                          .openapi({
                            description:
                              'Marketing or industry segment that the product is designed for',
                          }),
                      )
                      .min(1),
                    ProductType: z
                      .literal('BCA')
                      .openapi({ description: 'Descriptive code for the product category' }),
                    ProductURL: z
                      .array(z.url())
                      .min(1)
                      .openapi({
                        description:
                          'URL provided by the organisation which redirects to the product (on live products only). There might be more than one product at a given URL',
                      }),
                    TsandCs: z
                      .array(z.string())
                      .min(1)
                      .openapi({
                        description:
                          'URL provided by the parent organisation which redirects to the current T&Cs',
                      }),
                  })
                  .openapi({
                    description: 'Business current account',
                    required: [
                      'Organisation',
                      'ProductType',
                      'ProductSegment',
                      'InternationalPaymentsSupported',
                      'ProductIdentifier',
                      'CardWithdrawalLimit',
                      'ProductDescription',
                      'TsandCs',
                      'AccessChannels',
                      'CardType',
                      'Contactless',
                      'ChequeBookAvailable',
                      'CreditScoringPartOfAccountOpeningForGettingAnAccount',
                      'ProductURL',
                      'Currency',
                      'OverdraftOffered',
                      'CAPricing',
                      'Eligibility',
                      'CreditInterest',
                      'FeesAndCharges',
                      'Benefits',
                    ],
                    title: 'Business current account',
                  }),
              ),
              meta: z
                .strictObject({
                  Agreement: z.literal(
                    'Use of the APIs and any related data will be subject to the terms of the Open Licence and subject to terms and conditions',
                  ),
                  LastUpdated: z.iso.datetime({ offset: true }),
                  License: z
                    .literal('https://www.openbanking.org.uk/open-licence')
                    .openapi({ description: 'Open Banking License' }),
                  TermsOfUse: z
                    .literal('https://www.openbanking.org.uk/terms')
                    .openapi({ description: 'Open Banking Terms of Use' }),
                  TotalResults: z.int(),
                })
                .openapi({
                  required: ['LastUpdated', 'TotalResults', 'Agreement', 'License', 'TermsOfUse'],
                  title: 'Meta data',
                }),
            })
            .openapi({ required: ['meta', 'data'] }),
        },
      },
      headers: z.object({
        'Cache-Control': {
          description: 'Describes how long this response can be cached',
          schema: z
            .string()
            .default('max-age=28800')
            .exactOptional()
            .openapi({
              description: 'Describes how long this response can be cached',
              param: { required: false },
            }),
        },
        Etag: {
          description: 'A unique ID identifying whether this resource has changed',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'A unique ID identifying whether this resource has changed',
              param: { required: false },
            }),
        },
        'Strict-Transport-Security': {
          description: 'HTTPS strict transport security header',
          schema: z
            .string()
            .default('max-age=31536000')
            .exactOptional()
            .openapi({
              description: 'HTTPS strict transport security header',
              param: { required: false },
            }),
        },
        'X-Content-Type-Options': {
          description:
            'Ensures each page has a content type and prevents browsers from doing MIME type sniffing',
          schema: z
            .string()
            .default('nosniff')
            .exactOptional()
            .openapi({
              description:
                'Ensures each page has a content type and prevents browsers from doing MIME type sniffing',
              param: { required: false },
            }),
        },
        'X-Frame-Options': {
          description: 'Prevent this request from being loaded in any iframes',
          schema: z
            .string()
            .default('DENY')
            .exactOptional()
            .openapi({
              description: 'Prevent this request from being loaded in any iframes',
              param: { required: false },
            }),
        },
      }),
    },
    400: {
      description: 'You have sent a request which could not be understood.',
      content: {
        'application/prs.openbanking.opendata.v1.3+json': {
          schema: z
            .strictObject({
              description: z.literal('You have sent a request which could not be understood.'),
              status: z.literal('400'),
              title: z.literal('Bad request'),
            })
            .openapi({ required: ['status', 'title', 'description'], title: '400 Error object' }),
        },
      },
      headers: z.object({
        'Strict-Transport-Security': {
          description: 'HTTPS strict transport security header',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'HTTPS strict transport security header',
              param: { required: false },
            }),
        },
        'X-Content-Type-Options': {
          description:
            'Ensures each page has a content type and prevents browsers from doing MIME type sniffing',
          schema: z
            .string()
            .default('nosniff')
            .exactOptional()
            .openapi({
              description:
                'Ensures each page has a content type and prevents browsers from doing MIME type sniffing',
              param: { required: false },
            }),
        },
        'X-Frame-Options': {
          description: 'Prevent this request from being loaded in any iframes',
          schema: z
            .string()
            .default('DENY')
            .exactOptional()
            .openapi({
              description: 'Prevent this request from being loaded in any iframes',
              param: { required: false },
            }),
        },
      }),
    },
    408: {
      description: 'Your client has failed to submit a request, and a timeout has occurred.',
      content: {
        'application/prs.openbanking.opendata.v1.3+json': {
          schema: z
            .strictObject({
              description: z.literal(
                'Your client has failed to submit a request, and a timeout has occurred.',
              ),
              status: z.literal('408'),
              title: z.literal('Client timeout'),
            })
            .openapi({ required: ['status', 'title', 'description'], title: '408 Error object' }),
        },
      },
      headers: z.object({
        'Strict-Transport-Security': {
          description: 'HTTPS strict transport security header',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'HTTPS strict transport security header',
              param: { required: false },
            }),
        },
        'X-Content-Type-Options': {
          description:
            'Ensures each page has a content type and prevents browsers from doing MIME type sniffing',
          schema: z
            .string()
            .default('nosniff')
            .exactOptional()
            .openapi({
              description:
                'Ensures each page has a content type and prevents browsers from doing MIME type sniffing',
              param: { required: false },
            }),
        },
        'X-Frame-Options': {
          description: 'Prevent this request from being loaded in any iframes',
          schema: z
            .string()
            .default('DENY')
            .exactOptional()
            .openapi({
              description: 'Prevent this request from being loaded in any iframes',
              param: { required: false },
            }),
        },
      }),
    },
    429: {
      description: 'You have requested this resource too often. Slow down.',
      content: {
        'application/prs.openbanking.opendata.v1.3+json': {
          schema: z
            .strictObject({
              description: z.literal('You have requested this resource too often. Slow down.'),
              status: z.literal('429'),
              title: z.literal('Too many requests'),
            })
            .openapi({ required: ['status', 'title', 'description'], title: '429 Error object' }),
        },
      },
      headers: z.object({
        'Strict-Transport-Security': {
          description: 'HTTPS strict transport security header',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'HTTPS strict transport security header',
              param: { required: false },
            }),
        },
        'X-Content-Type-Options': {
          description:
            'Ensures each page has a content type and prevents browsers from doing MIME type sniffing',
          schema: z
            .string()
            .default('nosniff')
            .exactOptional()
            .openapi({
              description:
                'Ensures each page has a content type and prevents browsers from doing MIME type sniffing',
              param: { required: false },
            }),
        },
        'X-Frame-Options': {
          description: 'Prevent this request from being loaded in any iframes',
          schema: z
            .string()
            .default('DENY')
            .exactOptional()
            .openapi({
              description: 'Prevent this request from being loaded in any iframes',
              param: { required: false },
            }),
        },
      }),
    },
    500: {
      description: 'An error occurred on the server. No further information is available.',
      content: {
        'application/prs.openbanking.opendata.v1.3+json': {
          schema: z
            .strictObject({
              description: z.literal(
                'An error occurred on the server. No further information is available.',
              ),
              status: z.literal('500'),
              title: z.literal('Internal server error'),
            })
            .openapi({ required: ['status', 'title', 'description'], title: '500 Error object' }),
        },
      },
      headers: z.object({
        'Strict-Transport-Security': {
          description: 'HTTPS strict transport security header',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'HTTPS strict transport security header',
              param: { required: false },
            }),
        },
        'X-Content-Type-Options': {
          description:
            'Ensures each page has a content type and prevents browsers from doing MIME type sniffing',
          schema: z
            .string()
            .default('nosniff')
            .exactOptional()
            .openapi({
              description:
                'Ensures each page has a content type and prevents browsers from doing MIME type sniffing',
              param: { required: false },
            }),
        },
        'X-Frame-Options': {
          description: 'Prevent this request from being loaded in any iframes',
          schema: z
            .string()
            .default('DENY')
            .exactOptional()
            .openapi({
              description: 'Prevent this request from being loaded in any iframes',
              param: { required: false },
            }),
        },
      }),
    },
    503: {
      description: 'The service is temporarily unavailable.',
      content: {
        'application/prs.openbanking.opendata.v1.3+json': {
          schema: z
            .strictObject({
              description: z.literal('The service is temporarily unavailable.'),
              status: z.literal('503'),
              title: z.literal('Service temporarily unavailable'),
            })
            .openapi({ required: ['status', 'title', 'description'], title: '503 Error object' }),
        },
      },
      headers: z.object({
        'Strict-Transport-Security': {
          description: 'HTTPS strict transport security header',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'HTTPS strict transport security header',
              param: { required: false },
            }),
        },
        'X-Content-Type-Options': {
          description:
            'Ensures each page has a content type and prevents browsers from doing MIME type sniffing',
          schema: z
            .string()
            .default('nosniff')
            .exactOptional()
            .openapi({
              description:
                'Ensures each page has a content type and prevents browsers from doing MIME type sniffing',
              param: { required: false },
            }),
        },
        'X-Frame-Options': {
          description: 'Prevent this request from being loaded in any iframes',
          schema: z
            .string()
            .default('DENY')
            .exactOptional()
            .openapi({
              description: 'Prevent this request from being loaded in any iframes',
              param: { required: false },
            }),
        },
      }),
    },
    default: {
      description: 'A standard error response.',
      content: {
        'application/prs.openbanking.opendata.v1.3+json': {
          schema: z
            .strictObject({
              description: z
                .string()
                .openapi({ description: 'Further details describing the error' }),
              status: z
                .string()
                .openapi({ description: 'This corresponds to the HTTP status code' }),
              title: z.string().openapi({ description: 'A short title of the type of error' }),
            })
            .openapi({ required: ['status', 'title', 'description'], title: 'Error object' }),
        },
      },
      headers: z.object({
        'Strict-Transport-Security': {
          description: 'HTTPS strict transport security header',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'HTTPS strict transport security header',
              param: { required: false },
            }),
        },
        'X-Content-Type-Options': {
          description:
            'Ensures each page has a content type and prevents browsers from doing MIME type sniffing',
          schema: z
            .string()
            .default('nosniff')
            .exactOptional()
            .openapi({
              description:
                'Ensures each page has a content type and prevents browsers from doing MIME type sniffing',
              param: { required: false },
            }),
        },
        'X-Frame-Options': {
          description: 'Prevent this request from being loaded in any iframes',
          schema: z
            .string()
            .default('DENY')
            .exactOptional()
            .openapi({
              description: 'Prevent this request from being loaded in any iframes',
              param: { required: false },
            }),
        },
      }),
    },
  },
})

export const headBusinessCurrentAccountsRoute = createRoute({
  method: 'head',
  path: '/business-current-accounts',
  tags: ['BCA'],
  description: 'Gets header information on the current set of `Business Current Account` data',
  request: {
    headers: z.object({
      'If-Modified-Since': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Used for conditional request, to retrieve data only if modified since a given date',
            in: 'header',
            name: 'If-Modified-Since',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'If-None-Match': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Used for conditional request, to retrieve data only if the given Etag value does not match',
            in: 'header',
            name: 'If-None-Match',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    default: {
      description: 'No response',
      content: {
        'application/prs.openbanking.opendata.v1.3+json': {
          schema: z.object({}).openapi({ title: 'No response' }),
        },
      },
    },
  },
})

export const getCommercialCreditCardsRoute = createRoute({
  method: 'get',
  path: '/commercial-credit-cards',
  tags: ['CCC'],
  description: 'Gets a list of all `Commerical Credit Card` objects.',
  request: {
    headers: z.object({
      'If-Modified-Since': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Used for conditional request, to retrieve data only if modified since a given date',
            in: 'header',
            name: 'If-Modified-Since',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'If-None-Match': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Used for conditional request, to retrieve data only if the given Etag value does not match',
            in: 'header',
            name: 'If-None-Match',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response with a list of `Commercial Credit Card` data',
      content: {
        'application/prs.openbanking.opendata.v1.3+json': {
          schema: z
            .strictObject({
              data: z.array(
                z
                  .strictObject({
                    Benefits: z
                      .strictObject({
                        Benefit: z
                          .boolean()
                          .openapi({ description: 'Describe  one or more benefits if they exist' }),
                        BenefitGroup: z
                          .array(
                            z
                              .strictObject({
                                BenefitItem: z
                                  .strictObject({
                                    BenefitDetail: z
                                      .array(
                                        z
                                          .strictObject({
                                            BenefitDescription: z
                                              .string()
                                              .exactOptional()
                                              .openapi({
                                                description:
                                                  'A textual explanation of what the benefit is',
                                              }),
                                            BenefitID: z
                                              .string()
                                              .exactOptional()
                                              .openapi({
                                                description:
                                                  'Unique benefit identifier per organisation',
                                              }),
                                            BenefitName: z
                                              .string()
                                              .exactOptional()
                                              .openapi({ description: 'The name of the benefit' }),
                                            BenefitType: z
                                              .string()
                                              .exactOptional()
                                              .openapi({
                                                description:
                                                  'Type that represents the nature of the benefit',
                                              }),
                                            BenefitValue: z
                                              .string()
                                              .exactOptional()
                                              .openapi({
                                                description:
                                                  'The value or values permissible for a specific benefit for an individual product representing a product characteristic',
                                              }),
                                            Counter: z
                                              .int()
                                              .exactOptional()
                                              .openapi({
                                                description:
                                                  'Counter for the criteria (e.g. number of DD)',
                                              }),
                                            CriteriaType: z
                                              .array(
                                                z
                                                  .enum([
                                                    'CashDeposit',
                                                    'Deposit',
                                                    'DirectDebit',
                                                    'InitialDeposit',
                                                    'InternetLogon',
                                                    'MobileLogon',
                                                    'RegularDeposit',
                                                  ])
                                                  .openapi({
                                                    description:
                                                      'Criteria that is required in order to be eligible for the Benefit',
                                                  }),
                                              )
                                              .exactOptional(),
                                            DefaultToAccounts: z
                                              .boolean()
                                              .exactOptional()
                                              .openapi({
                                                description:
                                                  'Is the benefit part of the default account',
                                              }),
                                            MaximumCriteria: z
                                              .string()
                                              .regex(/^-?\d{1,10}\.\d{1,2}$/)
                                              .exactOptional()
                                              .openapi({
                                                description: 'Maximum amount for the criteria',
                                              }),
                                            MinimumCriteria: z
                                              .string()
                                              .regex(/^-?\d{1,10}\.\d{1,2}$/)
                                              .exactOptional()
                                              .openapi({
                                                description: 'Minimum amount for the criteria',
                                              }),
                                            PromotionEndDate: z
                                              .string()
                                              .regex(
                                                /^[0-9]{4}-(0[1-9]|(1[0|1|2]))-((0[1-9])|((1|2)[0-9])|(30|31))$/,
                                              )
                                              .exactOptional()
                                              .openapi({
                                                description:
                                                  'If the benefit is temporal the end date is when the benefit is no longer applicable',
                                              }),
                                            PromotionStartDate: z
                                              .string()
                                              .regex(
                                                /^[0-9]{4}-(0[1-9]|(1[0|1|2]))-((0[1-9])|((1|2)[0-9])|(30|31))$/,
                                              )
                                              .exactOptional()
                                              .openapi({
                                                description:
                                                  'If the benefit is temporal the start date is when the benefit comes into effect',
                                              }),
                                          })
                                          .openapi({ description: 'Benefit detail', required: [] }),
                                      )
                                      .exactOptional(),
                                    DateOfChange: z
                                      .string()
                                      .regex(
                                        /^[0-9]{4}-(0[1-9]|(1[0|1|2]))-((0[1-9])|((1|2)[0-9])|(30|31))$/,
                                      )
                                      .exactOptional()
                                      .openapi({
                                        description:
                                          'Date of the change if it refers to future terms',
                                      }),
                                    LengthPromotionalInDays: z
                                      .int()
                                      .exactOptional()
                                      .openapi({
                                        description:
                                          'Describes the length if only a duration is given instead of a date in days',
                                      }),
                                    StartPromotionOrFutureTerms: z
                                      .string()
                                      .regex(
                                        /^[0-9]{4}-(0[1-9]|(1[0|1|2]))-((0[1-9])|((1|2)[0-9])|(30|31))$/,
                                      )
                                      .exactOptional()
                                      .openapi({ description: 'Describes the start date' }),
                                    StopPromotionOrFutureTerms: z
                                      .string()
                                      .regex(
                                        /^[0-9]{4}-(0[1-9]|(1[0|1|2]))-((0[1-9])|((1|2)[0-9])|(30|31))$/,
                                      )
                                      .exactOptional()
                                      .openapi({ description: 'Describes the end date' }),
                                  })
                                  .openapi({ description: 'Benefit Item', required: [] }),
                                BenefitSubType: z
                                  .enum(['FutureMultipleTerms', 'Promotional', 'Regular'])
                                  .exactOptional()
                                  .openapi({ description: 'Benefit Subtype Code' }),
                              })
                              .openapi({
                                description: 'Benefit Interest Group',
                                required: ['BenefitItem'],
                              }),
                          )
                          .exactOptional(),
                      })
                      .openapi({ description: 'Benefit', required: ['Benefit'] }),
                    Description: z.string().openapi({ description: 'Product description' }),
                    Details: z
                      .strictObject({
                        CCSubType: z
                          .enum(['FutureMultipleTerms', 'Promotional', 'Regular'])
                          .openapi({ description: 'CCC Subtype Code' }),
                        CommercialCreditCardItem: z
                          .strictObject({
                            APRRate: z
                              .string()
                              .regex(/^-?\d{1,3}\.\d{1,4}$/)
                              .openapi({ description: 'Annual Percentage Rate' }),
                            AbilityToSetIndividualLimits: z
                              .boolean()
                              .exactOptional()
                              .openapi({
                                description:
                                  'The ability to set separate limts on different cards in one account',
                              }),
                            AccessToOnlineDataReportingTool: z
                              .boolean()
                              .openapi({
                                description:
                                  'Describes whether the account have access to an online tool for reprting on expenditure',
                              }),
                            AllocationofRepayment: z
                              .string()
                              .exactOptional()
                              .openapi({ description: 'Allocation rules for repayment' }),
                            AnnualAccountFeeType: z
                              .string()
                              .exactOptional()
                              .openapi({
                                description:
                                  'Details on annual account fee, such as non payable when there is a turnover above a certain sum',
                              }),
                            AnnualFeeAmount: z
                              .string()
                              .regex(/^-?\d{1,10}\.\d{1,2}$/)
                              .openapi({ description: 'Standard fee on the card' }),
                            BalanceTransferInterestRatePeriod: z
                              .enum(['Annual', 'Monthly'])
                              .exactOptional()
                              .openapi({
                                description:
                                  'The period used to define the specific interest rate for balance transfers',
                              }),
                            BalanceTransferRate: z
                              .string()
                              .regex(/^-?\d{1,3}\.\d{1,4}$/)
                              .exactOptional()
                              .openapi({ description: 'Balance transfer rate' }),
                            CardScheme: z
                              .enum(['Cashcard', 'CreditMastercard', 'CreditVisa'])
                              .openapi({ description: 'Card Scheme Code' }),
                            CashAdvanceRate: z
                              .string()
                              .regex(/^-?\d{1,3}\.\d{1,4}$/)
                              .openapi({ description: 'Cash advance rate' }),
                            CashWithdrawalsAllowed: z
                              .boolean()
                              .openapi({
                                description: 'Describes whether cash withdrawals are allowed',
                              }),
                            CashbackPercent: z
                              .string()
                              .regex(/^-?\d{1,3}\.\d{1,4}$/)
                              .exactOptional()
                              .openapi({ description: 'Percent of cashback on amount spend' }),
                            ChequeFeePercent: z
                              .string()
                              .regex(/^-?\d{1,3}\.\d{1,4}$/)
                              .exactOptional()
                              .openapi({ description: 'Percentage fee on convenience cheques' }),
                            ConvenienceCheque: z
                              .boolean()
                              .openapi({
                                description:
                                  'Describes whether the card account allow convenience cheques',
                              }),
                            DateOfChange: z
                              .string()
                              .regex(
                                /^[0-9]{4}-(0[1-9]|(1[0|1|2]))-((0[1-9])|((1|2)[0-9])|(30|31))$/,
                              )
                              .exactOptional()
                              .openapi({
                                description: 'Date of the change if it refers to future terms',
                              }),
                            DaysInterestFreeCreditIfPaymentFull: z
                              .int()
                              .openapi({
                                description:
                                  'Describes how many interest free days are given if the card is fully paid at each term',
                              }),
                            ExchangeRateAdjustment: z
                              .string()
                              .regex(/^-?\d{1,3}\.\d{1,4}$/)
                              .openapi({
                                description:
                                  'The margin added, by certain card issuers, to the scheme rate in order to arrive at the exchange rate qouted as the reference exchange rate to the cardholder',
                              }),
                            FeesOnCheque: z
                              .string()
                              .regex(/^-?\d{1,10}\.\d{1,2}$/)
                              .exactOptional()
                              .openapi({ description: 'Percentage fee on a convenince cheques' }),
                            ForeignCashFee: z
                              .string()
                              .regex(/^-?\d{1,10}\.\d{1,2}$/)
                              .exactOptional()
                              .openapi({
                                description:
                                  'Additional card fee applied to sterling cash withdrawal made abroad',
                              }),
                            ForeignCashFeeRate: z
                              .string()
                              .regex(/^-?\d{1,3}\.\d{1,4}$/)
                              .exactOptional()
                              .openapi({
                                description:
                                  'Additional card fee rate applied to sterling cash withdrawal made abroad',
                              }),
                            ForeignPurchaseFee: z
                              .string()
                              .regex(/^-?\d{1,10}\.\d{1,2}$/)
                              .exactOptional()
                              .openapi({
                                description:
                                  'Additional card fee applied to sterling retail transactions made abroad',
                              }),
                            ForeignPurchaseFeeRate: z
                              .string()
                              .regex(/^-?\d{1,3}\.\d{1,4}$/)
                              .exactOptional()
                              .openapi({
                                description:
                                  'Additional card fee rate applied to sterling retail transactions made abroad',
                              }),
                            IssuingEmergencyCardsFees: z
                              .string()
                              .regex(/^-?\d{1,10}\.\d{1,2}$/)
                              .openapi({
                                description: 'Amount payable for issuing an emergency card',
                              }),
                            LengthPromotionalInDays: z
                              .int()
                              .exactOptional()
                              .openapi({
                                description:
                                  'Describes the length if only a duration is given instead of a date',
                              }),
                            MaximumNumberOfCardsPermitted: z
                              .int()
                              .exactOptional()
                              .openapi({ description: 'The maximum numbers of cards per account' }),
                            MinimumCreditLimit: z
                              .string()
                              .regex(/^-?\d{1,10}\.\d{1,2}$/)
                              .openapi({ description: 'Minimum £500, maximum subject to status' }),
                            MinimumLendingAmount: z
                              .string()
                              .regex(/^-?\d{1,10}\.\d{1,2}$/)
                              .exactOptional()
                              .openapi({ description: 'The minimum lending available' }),
                            MinimumRepaymentAmount: z
                              .string()
                              .regex(/^-?\d{1,10}\.\d{1,2}$/)
                              .exactOptional()
                              .openapi({ description: 'Minimum repayment amount' }),
                            MinimumRepaymentPercentage: z
                              .string()
                              .regex(/^-?\d{1,3}\.\d{1,4}$/)
                              .exactOptional()
                              .openapi({ description: 'Minimum repayment as percentage' }),
                            NonSterlingCashFee: z
                              .string()
                              .regex(/^-?\d{1,10}\.\d{1,2}$/)
                              .exactOptional()
                              .openapi({
                                description:
                                  'An additional fee applied to certain card cash withdrawals. This fee also applies to cash near fees such as gambling',
                              }),
                            NonSterlingCashFeeRate: z
                              .string()
                              .regex(/^-?\d{1,3}\.\d{1,4}$/)
                              .exactOptional()
                              .openapi({
                                description:
                                  'An additional fee rate applied to certain card cash withdrawals. This fee also applies to cash near fees such as gambling',
                              }),
                            NonSterlingPurchaseFee: z
                              .string()
                              .regex(/^-?\d{1,10}\.\d{1,2}$/)
                              .exactOptional()
                              .openapi({
                                description:
                                  'An additional fee applied to certain card retail transactions',
                              }),
                            NonSterlingPurchaseFeeRate: z
                              .string()
                              .regex(/^-?\d{1,3}\.\d{1,4}$/)
                              .exactOptional()
                              .openapi({
                                description:
                                  'An additional fee rate applied to certain card retail transactions',
                              }),
                            NonSterlingTransactionFee: z
                              .string()
                              .regex(/^-?\d{1,10}\.\d{1,2}$/)
                              .exactOptional()
                              .openapi({
                                description: 'A fee applied to all non-Sterling card transactions',
                              }),
                            NonSterlingTransactionFeeRate: z
                              .string()
                              .regex(/^-?\d{1,3}\.\d{1,4}$/)
                              .exactOptional()
                              .openapi({
                                description:
                                  'A fee rate applied to all non-Sterling card transactions',
                              }),
                            OverLimitFee: z
                              .string()
                              .regex(/^-?\d{1,10}\.\d{1,2}$/)
                              .exactOptional()
                              .openapi({
                                description:
                                  'Fee applicable if the card was credited over its limit',
                              }),
                            PaymentDaysAfterStatement: z
                              .int()
                              .openapi({
                                description:
                                  'How many days after statement is the payment expected',
                              }),
                            PaymentSchemeExchangeFee: z
                              .string()
                              .regex(/^-?\d{1,10}\.\d{1,2}$/)
                              .exactOptional()
                              .openapi({
                                description:
                                  'Any payment network fee applied to some or all non-sterling transactions that the card issuer recover directly from the cardholder',
                              }),
                            PaymentSchemeExchangeFeeRate: z
                              .string()
                              .regex(/^-?\d{1,3}\.\d{1,4}$/)
                              .exactOptional()
                              .openapi({
                                description:
                                  'Any payment network fee rate applied to some or all non-sterling transactions that the card issuer recover directly from the cardholder',
                              }),
                            PaymentSchemeExchangeRate: z
                              .string()
                              .regex(/^-?\d{1,3}\.\d{1,4}$/)
                              .exactOptional()
                              .openapi({
                                description:
                                  'The base exchange rate used in settlement of the transaction between issuer and scheme',
                              }),
                            PurchaseRate: z
                              .string()
                              .regex(/^-?\d{1,3}\.\d{1,4}$/)
                              .openapi({ description: 'Purchase rate' }),
                            RepaymentFrequency: z
                              .enum([
                                'Daily',
                                'Flexible',
                                'Fortnightly',
                                'HalfYearly',
                                'Monthly',
                                'Quarterly',
                                'Weekly',
                                'Yearly',
                              ])
                              .openapi({ description: 'Repayment frequency' }),
                            RepaymentNotes: z
                              .string()
                              .exactOptional()
                              .openapi({ description: 'Additional notes' }),
                            StartPromotionOrFutureTerms: z
                              .string()
                              .regex(
                                /^[0-9]{4}-(0[1-9]|(1[0|1|2]))-((0[1-9])|((1|2)[0-9])|(30|31))$/,
                              )
                              .exactOptional()
                              .openapi({ description: 'Describes the start date' }),
                            StatementAtAccountLevel: z
                              .boolean()
                              .openapi({
                                description:
                                  'Describes whether there is a statement at account level',
                              }),
                            StatementAtPersonalLevel: z
                              .boolean()
                              .openapi({
                                description: 'Describes whether there is a statement at card level',
                              }),
                            StopPromotionOrFutureTerms: z
                              .string()
                              .regex(
                                /^[0-9]{4}-(0[1-9]|(1[0|1|2]))-((0[1-9])|((1|2)[0-9])|(30|31))$/,
                              )
                              .exactOptional()
                              .openapi({ description: 'Describes the end date' }),
                          })
                          .openapi({
                            description: 'Commercial Credit Card Item ',
                            required: [
                              'MinimumCreditLimit',
                              'RepaymentFrequency',
                              'APRRate',
                              'PurchaseRate',
                              'CashAdvanceRate',
                              'CardScheme',
                              'AccessToOnlineDataReportingTool',
                              'CashWithdrawalsAllowed',
                              'ConvenienceCheque',
                              'DaysInterestFreeCreditIfPaymentFull',
                              'IssuingEmergencyCardsFees',
                              'AnnualFeeAmount',
                              'PaymentDaysAfterStatement',
                              'StatementAtAccountLevel',
                              'StatementAtPersonalLevel',
                              'ExchangeRateAdjustment',
                            ],
                          }),
                      })
                      .openapi({
                        description: 'Commercial Credit Card Group ',
                        required: ['CCSubType', 'CommercialCreditCardItem'],
                      }),
                    Eligibility: z
                      .strictObject({
                        AgeRestricted: z
                          .boolean()
                          .openapi({
                            description:
                              "Indicates a customer's age is part of eligibility criteria",
                          }),
                        AnnualBusinessTurnover: z
                          .string()
                          .regex(/^-?\d{1,10}\.\d{1,2}$/)
                          .exactOptional()
                          .openapi({ description: 'Annual Business Turnover' }),
                        AnnualBusinessTurnoverCurrency: z
                          .string()
                          .regex(/[A-Z]{3}/)
                          .exactOptional()
                          .openapi({ description: 'Annual Business Turnover Currency' }),
                        Description: z
                          .string()
                          .openapi({ description: 'One paragraph detailing the eligibility' }),
                        EligibilityName: z
                          .string()
                          .exactOptional()
                          .openapi({
                            description:
                              'Free text description, denotes non standard eligibilities not included in the code list',
                          }),
                        EligibilityNotes: z
                          .string()
                          .exactOptional()
                          .openapi({
                            description:
                              'Optional additional notes to supplement the eligibility conditions. Only used for very specific conditions',
                          }),
                        EligibilityType: z
                          .enum([
                            'AnyBusinessCustomer',
                            'BusinessOnly',
                            'CreditCard',
                            'CreditScoring',
                            'EmailAddress',
                            'ExistingCustomers',
                            'IdAndV',
                            'Mortgage',
                            'NoArrearsOnLoan',
                            'NoCustomerInArrears',
                            'NoOverOverdraftThirtyDays',
                            'NoSoleUkAccountOrBankrupt',
                            'NTB',
                            'NTBBusiness',
                            'SoleStudentAccount',
                            'SoleUkAccount',
                            'StudentsOnly',
                            'TwoMonthsOfCourseStart',
                            'UCASFulltimeTwoYears',
                          ])
                          .exactOptional()
                          .openapi({ description: 'Eligibility type' }),
                        IncomeCondition: z
                          .string()
                          .exactOptional()
                          .openapi({
                            description:
                              'Stipulates any particular definition of income that applies to the income eligibility and/or method by which income must paid into the account (eg Salary DD)',
                          }),
                        IncomeTurnoverRelated: z
                          .boolean()
                          .openapi({ description: 'Indicates if eligibility linked to income' }),
                        MarketingEligibility: z
                          .array(
                            z
                              .enum([
                                'ExistingCustomers',
                                'NewCustomersOnly',
                                'SwitchersOnly',
                                'StartUp',
                              ])
                              .openapi({ description: 'Specific eligibility for marketing' }),
                          )
                          .superRefine((items, ctx) => {
                            const seen = new Map()
                            for (const [i, val] of items.entries()) {
                              const key = JSON.stringify(val)
                              if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
                              else seen.set(key, i)
                            }
                          })
                          .exactOptional(),
                        MaxNumberOfAccounts: z
                          .string()
                          .exactOptional()
                          .openapi({
                            description: 'Maximum number of the same prodcut the customer may hold',
                          }),
                        MaximumAge: z
                          .int()
                          .exactOptional()
                          .openapi({
                            description: 'Maximum age, in years, allowed to hold the account',
                          }),
                        MaximumAgeToOpen: z
                          .int()
                          .exactOptional()
                          .openapi({ description: 'Maximum age, in years, to open an account' }),
                        MaximumOpeningAmount: z
                          .boolean()
                          .exactOptional()
                          .openapi({ description: 'A maximum amount to be deposited at opening' }),
                        MinIncomeTurnoverPaidIntoAccount: z
                          .int()
                          .exactOptional()
                          .openapi({
                            description: 'Minimum Income Amount required to paid into the account',
                          }),
                        MinimumAge: z
                          .int()
                          .exactOptional()
                          .openapi({
                            description: 'Minimum age, in years, required to hold an account',
                          }),
                        MinimumDeposit: z
                          .boolean()
                          .exactOptional()
                          .openapi({
                            description: 'A minimum deposit required to hold this account',
                          }),
                        MinimumIncomeFrequency: z
                          .enum([
                            'AcademicTerm',
                            'HalfYearly',
                            'Monthly',
                            'Quarterly',
                            'Weekly',
                            'Yearly',
                          ])
                          .exactOptional()
                          .openapi({
                            description:
                              'The frequency that the minimum mentioned before is deposited in the account. Yearly is very important for premium accounts',
                          }),
                        MinimumIncomeTurnoverAmount: z
                          .string()
                          .regex(/^-?\d{1,10}\.\d{1,2}$/)
                          .exactOptional()
                          .openapi({
                            description: 'Minimum income / Turnover required to hold the product',
                          }),
                        MinimumIncomeTurnoverCurrency: z
                          .string()
                          .regex(/[A-Z]{3}/)
                          .exactOptional()
                          .openapi({ description: 'Minimum income / Turnover Currency' }),
                        MinimumOperatingBalance: z
                          .string()
                          .regex(/^-?\d{1,10}\.\d{1,2}$/)
                          .exactOptional()
                          .openapi({ description: 'Minimum Operating Balance' }),
                        MinimumOperatingBalanceCurrency: z
                          .string()
                          .regex(/[A-Z]{3}/)
                          .exactOptional()
                          .openapi({ description: 'Minimum Operating Balance currency' }),
                        MinimumOperatingBalanceExists: z
                          .boolean()
                          .exactOptional()
                          .openapi({ description: 'Is there a Minimum Operating Balance?' }),
                        OpeningDepositMaximumAmount: z
                          .string()
                          .regex(/^-?\d{1,10}\.\d{1,2}$/)
                          .exactOptional()
                          .openapi({ description: 'Maximum Amount to be depositing at opening' }),
                        OpeningDepositMaximumCurrency: z
                          .string()
                          .regex(/[A-Z]{3}/)
                          .exactOptional()
                          .openapi({
                            description:
                              'The currency of the Minimum Amount to be depositing at opening',
                          }),
                        OpeningDepositMinimum: z
                          .string()
                          .regex(/^-?\d{1,10}\.\d{1,2}$/)
                          .exactOptional()
                          .openapi({ description: 'Minimum Amount to be held on account' }),
                        OpeningDepositMinimumCurrency: z
                          .string()
                          .regex(/[A-Z]{3}/)
                          .exactOptional()
                          .openapi({
                            description:
                              'The currency of the Minimum Amount to be depositing at opening',
                          }),
                        OtherFinancialHoldingRequired: z
                          .boolean()
                          .openapi({
                            description:
                              'Indicates that it is necessary to hold another product with the bank in order to be eligible for this product or feature',
                          }),
                        PreviousBankruptcy: z
                          .boolean()
                          .openapi({
                            description:
                              'Describes if a previous bankruptcy / insolvency disqualfies for this account Details in ELI-280',
                          }),
                        ResidencyRestricted: z
                          .boolean()
                          .openapi({
                            description:
                              "Indicates a customer's residency forms part of the eligibility criteria",
                          }),
                        ResidencyRestrictedRegion: z
                          .enum([
                            'UK',
                            'EEA',
                            'EU',
                            'EFTA',
                            'GB - ENG',
                            'GB - NIR',
                            'GB - SCT',
                            'GB - WLS',
                            'IRL',
                          ])
                          .exactOptional()
                          .openapi({
                            description:
                              'Indicates a customer must be current resident of a geographic area/country',
                          }),
                        SingleJointIncome: z
                          .enum(['Joint', 'SoleIncome', 'SoleOrJoint', 'Turnover'])
                          .exactOptional()
                          .openapi({
                            description:
                              'Minimum Income Source. For certain products a minimum income is required. This can be mandated as to the single income or to a joint income. This field describes this',
                          }),
                        ThirdSectorOrganisations: z
                          .boolean()
                          .openapi({
                            description:
                              'Is the product available to operate as a Clubs or Societies account?',
                          }),
                      })
                      .openapi({
                        description: 'Eligibility',
                        required: [
                          'AgeRestricted',
                          'OtherFinancialHoldingRequired',
                          'Description',
                          'IncomeTurnoverRelated',
                          'ResidencyRestricted',
                          'ThirdSectorOrganisations',
                          'PreviousBankruptcy',
                        ],
                      }),
                    KeyFeatures: z.string().openapi({ description: 'Product key features' }),
                    Organisation: z
                      .strictObject({
                        Brand: z
                          .strictObject({
                            TrademarkID: z
                              .string()
                              .min(1)
                              .max(35)
                              .openapi({
                                description:
                                  'The trademark number that has been registered with the Intellectual Property Office. Note: The 2 letter IPO prefix should be omitted',
                              }),
                            TrademarkIPOCode: z
                              .enum(['UK', 'EU'])
                              .openapi({
                                description:
                                  'The Intellectual Property Office (IPO) is the official body responsible for intellectual property (IP) rights including patents, designs, trademarks and copyright. (Code: UK or EU only)',
                              }),
                          })
                          .openapi({
                            description: 'Brand',
                            required: ['TrademarkIPOCode', 'TrademarkID'],
                          }),
                        ParentOrganisation: z
                          .strictObject({
                            BIC: z
                              .string()
                              .regex(/[A-Z]{6}[A-Z2-9][A-NP-Z0-9]([A-Z0-9]{3})?/)
                              .exactOptional()
                              .openapi({ description: 'The BIC from the organisation' }),
                            LEI: z
                              .string()
                              .regex(/^[A-Z0-9]{18,18}[0-9]{2,2}$/)
                              .exactOptional()
                              .openapi({ description: 'The LEI ID of the organisation' }),
                            OrganisationName: z
                              .strictObject({
                                LegalName: z
                                  .string()
                                  .min(1)
                                  .max(35)
                                  .openapi({ description: 'Legal Name of the organisation' }),
                              })
                              .openapi({
                                description: 'Organisation Name',
                                required: ['LegalName'],
                              }),
                          })
                          .openapi({
                            description: 'Parent organisation',
                            required: ['OrganisationName'],
                          }),
                      })
                      .openapi({
                        description: 'Organisation',
                        required: ['ParentOrganisation', 'Brand'],
                      }),
                    OtherKeyFeatures: z
                      .string()
                      .exactOptional()
                      .openapi({ description: 'Additional Features of the card' }),
                    PaymentHoliday: z
                      .boolean()
                      .openapi({ description: 'Indicates whether a payment holiday is possible' }),
                    PaymentHolidayDescription: z
                      .string()
                      .exactOptional()
                      .openapi({
                        description: 'Detailed description on the payment holiday if available',
                      }),
                    ProductIdentifier: z
                      .string()
                      .openapi({
                        description:
                          'Identifier within the parent organisation for the product. Must be unique in the organisation',
                      }),
                    ProductName: z
                      .string()
                      .openapi({ description: 'Name of the Commercial Credit Card' }),
                    ProductSegment: z
                      .array(
                        z
                          .enum(['Cashback', 'Corporate', 'General', 'Reward', 'SME'])
                          .openapi({
                            description:
                              'Marketing or industry segment that the product is designed for',
                          }),
                      )
                      .exactOptional()
                      .openapi({
                        description:
                          'Marketing or industry segment that the product is designed for',
                      }),
                    ProductType: z
                      .literal('CommercialCreditCards')
                      .openapi({ description: 'Descriptive code for the product category' }),
                    ProductURL: z
                      .array(z.url())
                      .min(1)
                      .openapi({
                        description:
                          'URL provided by the organisation which redirects to the product (on live products only). There might be more than one product at a given URL',
                      }),
                    TsandCs: z
                      .array(z.string())
                      .min(1)
                      .openapi({
                        description:
                          'URL provided by the parent organisation which redirects to the current T&Cs. Only applies on live products',
                      }),
                  })
                  .openapi({
                    description: 'Commercial Credit Card',
                    required: [
                      'Organisation',
                      'ProductName',
                      'ProductType',
                      'ProductIdentifier',
                      'ProductURL',
                      'Description',
                      'KeyFeatures',
                      'PaymentHoliday',
                      'TsandCs',
                      'Details',
                      'Eligibility',
                      'Benefits',
                    ],
                  }),
              ),
              meta: z
                .strictObject({
                  Agreement: z.literal(
                    'Use of the APIs and any related data will be subject to the terms of the Open Licence and subject to terms and conditions',
                  ),
                  LastUpdated: z.iso.datetime({ offset: true }),
                  License: z
                    .literal('https://www.openbanking.org.uk/open-licence')
                    .openapi({ description: 'Open Banking License' }),
                  TermsOfUse: z
                    .literal('https://www.openbanking.org.uk/terms')
                    .openapi({ description: 'Open Banking Terms of Use' }),
                  TotalResults: z.int(),
                })
                .openapi({
                  required: ['LastUpdated', 'TotalResults', 'Agreement', 'License', 'TermsOfUse'],
                  title: 'Meta data',
                }),
            })
            .openapi({ required: ['meta', 'data'] }),
        },
      },
      headers: z.object({
        'Cache-Control': {
          description: 'Describes how long this response can be cached',
          schema: z
            .string()
            .default('max-age=28800')
            .exactOptional()
            .openapi({
              description: 'Describes how long this response can be cached',
              param: { required: false },
            }),
        },
        Etag: {
          description: 'A unique ID identifying whether this resource has changed',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'A unique ID identifying whether this resource has changed',
              param: { required: false },
            }),
        },
        'Strict-Transport-Security': {
          description: 'HTTPS strict transport security header',
          schema: z
            .string()
            .default('max-age=31536000')
            .exactOptional()
            .openapi({
              description: 'HTTPS strict transport security header',
              param: { required: false },
            }),
        },
        'X-Content-Type-Options': {
          description:
            'Ensures each page has a content type and prevents browsers from doing MIME type sniffing',
          schema: z
            .string()
            .default('nosniff')
            .exactOptional()
            .openapi({
              description:
                'Ensures each page has a content type and prevents browsers from doing MIME type sniffing',
              param: { required: false },
            }),
        },
        'X-Frame-Options': {
          description: 'Prevent this request from being loaded in any iframes',
          schema: z
            .string()
            .default('DENY')
            .exactOptional()
            .openapi({
              description: 'Prevent this request from being loaded in any iframes',
              param: { required: false },
            }),
        },
      }),
    },
    400: {
      description: 'You have sent a request which could not be understood.',
      content: {
        'application/prs.openbanking.opendata.v1.3+json': {
          schema: z
            .strictObject({
              description: z.literal('You have sent a request which could not be understood.'),
              status: z.literal('400'),
              title: z.literal('Bad request'),
            })
            .openapi({ required: ['status', 'title', 'description'], title: '400 Error object' }),
        },
      },
      headers: z.object({
        'Strict-Transport-Security': {
          description: 'HTTPS strict transport security header',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'HTTPS strict transport security header',
              param: { required: false },
            }),
        },
        'X-Content-Type-Options': {
          description:
            'Ensures each page has a content type and prevents browsers from doing MIME type sniffing',
          schema: z
            .string()
            .default('nosniff')
            .exactOptional()
            .openapi({
              description:
                'Ensures each page has a content type and prevents browsers from doing MIME type sniffing',
              param: { required: false },
            }),
        },
        'X-Frame-Options': {
          description: 'Prevent this request from being loaded in any iframes',
          schema: z
            .string()
            .default('DENY')
            .exactOptional()
            .openapi({
              description: 'Prevent this request from being loaded in any iframes',
              param: { required: false },
            }),
        },
      }),
    },
    408: {
      description: 'Your client has failed to submit a request, and a timeout has occurred.',
      content: {
        'application/prs.openbanking.opendata.v1.3+json': {
          schema: z
            .strictObject({
              description: z.literal(
                'Your client has failed to submit a request, and a timeout has occurred.',
              ),
              status: z.literal('408'),
              title: z.literal('Client timeout'),
            })
            .openapi({ required: ['status', 'title', 'description'], title: '408 Error object' }),
        },
      },
      headers: z.object({
        'Strict-Transport-Security': {
          description: 'HTTPS strict transport security header',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'HTTPS strict transport security header',
              param: { required: false },
            }),
        },
        'X-Content-Type-Options': {
          description:
            'Ensures each page has a content type and prevents browsers from doing MIME type sniffing',
          schema: z
            .string()
            .default('nosniff')
            .exactOptional()
            .openapi({
              description:
                'Ensures each page has a content type and prevents browsers from doing MIME type sniffing',
              param: { required: false },
            }),
        },
        'X-Frame-Options': {
          description: 'Prevent this request from being loaded in any iframes',
          schema: z
            .string()
            .default('DENY')
            .exactOptional()
            .openapi({
              description: 'Prevent this request from being loaded in any iframes',
              param: { required: false },
            }),
        },
      }),
    },
    429: {
      description: 'You have requested this resource too often. Slow down.',
      content: {
        'application/prs.openbanking.opendata.v1.3+json': {
          schema: z
            .strictObject({
              description: z.literal('You have requested this resource too often. Slow down.'),
              status: z.literal('429'),
              title: z.literal('Too many requests'),
            })
            .openapi({ required: ['status', 'title', 'description'], title: '429 Error object' }),
        },
      },
      headers: z.object({
        'Strict-Transport-Security': {
          description: 'HTTPS strict transport security header',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'HTTPS strict transport security header',
              param: { required: false },
            }),
        },
        'X-Content-Type-Options': {
          description:
            'Ensures each page has a content type and prevents browsers from doing MIME type sniffing',
          schema: z
            .string()
            .default('nosniff')
            .exactOptional()
            .openapi({
              description:
                'Ensures each page has a content type and prevents browsers from doing MIME type sniffing',
              param: { required: false },
            }),
        },
        'X-Frame-Options': {
          description: 'Prevent this request from being loaded in any iframes',
          schema: z
            .string()
            .default('DENY')
            .exactOptional()
            .openapi({
              description: 'Prevent this request from being loaded in any iframes',
              param: { required: false },
            }),
        },
      }),
    },
    500: {
      description: 'An error occurred on the server. No further information is available.',
      content: {
        'application/prs.openbanking.opendata.v1.3+json': {
          schema: z
            .strictObject({
              description: z.literal(
                'An error occurred on the server. No further information is available.',
              ),
              status: z.literal('500'),
              title: z.literal('Internal server error'),
            })
            .openapi({ required: ['status', 'title', 'description'], title: '500 Error object' }),
        },
      },
      headers: z.object({
        'Strict-Transport-Security': {
          description: 'HTTPS strict transport security header',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'HTTPS strict transport security header',
              param: { required: false },
            }),
        },
        'X-Content-Type-Options': {
          description:
            'Ensures each page has a content type and prevents browsers from doing MIME type sniffing',
          schema: z
            .string()
            .default('nosniff')
            .exactOptional()
            .openapi({
              description:
                'Ensures each page has a content type and prevents browsers from doing MIME type sniffing',
              param: { required: false },
            }),
        },
        'X-Frame-Options': {
          description: 'Prevent this request from being loaded in any iframes',
          schema: z
            .string()
            .default('DENY')
            .exactOptional()
            .openapi({
              description: 'Prevent this request from being loaded in any iframes',
              param: { required: false },
            }),
        },
      }),
    },
    503: {
      description: 'The service is temporarily unavailable.',
      content: {
        'application/prs.openbanking.opendata.v1.3+json': {
          schema: z
            .strictObject({
              description: z.literal('The service is temporarily unavailable.'),
              status: z.literal('503'),
              title: z.literal('Service temporarily unavailable'),
            })
            .openapi({ required: ['status', 'title', 'description'], title: '503 Error object' }),
        },
      },
      headers: z.object({
        'Strict-Transport-Security': {
          description: 'HTTPS strict transport security header',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'HTTPS strict transport security header',
              param: { required: false },
            }),
        },
        'X-Content-Type-Options': {
          description:
            'Ensures each page has a content type and prevents browsers from doing MIME type sniffing',
          schema: z
            .string()
            .default('nosniff')
            .exactOptional()
            .openapi({
              description:
                'Ensures each page has a content type and prevents browsers from doing MIME type sniffing',
              param: { required: false },
            }),
        },
        'X-Frame-Options': {
          description: 'Prevent this request from being loaded in any iframes',
          schema: z
            .string()
            .default('DENY')
            .exactOptional()
            .openapi({
              description: 'Prevent this request from being loaded in any iframes',
              param: { required: false },
            }),
        },
      }),
    },
    default: {
      description: 'A standard error response.',
      content: {
        'application/prs.openbanking.opendata.v1.3+json': {
          schema: z
            .strictObject({
              description: z
                .string()
                .openapi({ description: 'Further details describing the error' }),
              status: z
                .string()
                .openapi({ description: 'This corresponds to the HTTP status code' }),
              title: z.string().openapi({ description: 'A short title of the type of error' }),
            })
            .openapi({ required: ['status', 'title', 'description'], title: 'Error object' }),
        },
      },
      headers: z.object({
        'Strict-Transport-Security': {
          description: 'HTTPS strict transport security header',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'HTTPS strict transport security header',
              param: { required: false },
            }),
        },
        'X-Content-Type-Options': {
          description:
            'Ensures each page has a content type and prevents browsers from doing MIME type sniffing',
          schema: z
            .string()
            .default('nosniff')
            .exactOptional()
            .openapi({
              description:
                'Ensures each page has a content type and prevents browsers from doing MIME type sniffing',
              param: { required: false },
            }),
        },
        'X-Frame-Options': {
          description: 'Prevent this request from being loaded in any iframes',
          schema: z
            .string()
            .default('DENY')
            .exactOptional()
            .openapi({
              description: 'Prevent this request from being loaded in any iframes',
              param: { required: false },
            }),
        },
      }),
    },
  },
})

export const headCommercialCreditCardsRoute = createRoute({
  method: 'head',
  path: '/commercial-credit-cards',
  tags: ['CCC'],
  description: 'Gets header information on the current set of `Commerical Credit Card` data',
  request: {
    headers: z.object({
      'If-Modified-Since': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Used for conditional request, to retrieve data only if modified since a given date',
            in: 'header',
            name: 'If-Modified-Since',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'If-None-Match': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Used for conditional request, to retrieve data only if the given Etag value does not match',
            in: 'header',
            name: 'If-None-Match',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    default: {
      description: 'No response',
      content: {
        'application/prs.openbanking.opendata.v1.3+json': {
          schema: z.object({}).openapi({ title: 'No response' }),
        },
      },
    },
  },
})

export const getPersonalCurrentAccountsRoute = createRoute({
  method: 'get',
  path: '/personal-current-accounts',
  tags: ['PCA'],
  description: 'Gets a list of all `Personal Current Account` objects.',
  request: {
    headers: z.object({
      'If-Modified-Since': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Used for conditional request, to retrieve data only if modified since a given date',
            in: 'header',
            name: 'If-Modified-Since',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'If-None-Match': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Used for conditional request, to retrieve data only if the given Etag value does not match',
            in: 'header',
            name: 'If-None-Match',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response with a list of `Personal Current Account` data',
      content: {
        'application/prs.openbanking.opendata.v1.3+json': {
          schema: z
            .strictObject({
              data: z.array(
                z
                  .object({
                    AccessChannels: z
                      .array(
                        z
                          .enum([
                            'ATM',
                            'Branch',
                            'BusinessCommercialCentre',
                            'CallCentre',
                            'MobileApps',
                            'MobileBanking',
                            'Online',
                            'Phone',
                            'Post',
                            'PostOffice',
                            'RelationshipManager',
                            'Text',
                          ])
                          .openapi({ description: 'Channel' }),
                      )
                      .min(1)
                      .openapi({
                        description: 'Ways to interact with the bank when managing account',
                      }),
                    Benefits: z
                      .strictObject({
                        Benefit: z
                          .boolean()
                          .openapi({ description: 'Describe  one or more benefits if they exist' }),
                        BenefitGroup: z
                          .array(
                            z
                              .strictObject({
                                BenefitItem: z
                                  .strictObject({
                                    BenefitDetail: z
                                      .array(
                                        z
                                          .strictObject({
                                            BenefitDescription: z
                                              .string()
                                              .exactOptional()
                                              .openapi({
                                                description:
                                                  'A textual explanation of what the benefit is',
                                              }),
                                            BenefitID: z
                                              .string()
                                              .exactOptional()
                                              .openapi({
                                                description:
                                                  'Unique benefit identifier per organisation',
                                              }),
                                            BenefitName: z
                                              .string()
                                              .exactOptional()
                                              .openapi({ description: 'The name of the benefit' }),
                                            BenefitType: z
                                              .string()
                                              .exactOptional()
                                              .openapi({
                                                description:
                                                  'Type that represents the nature of the benefit',
                                              }),
                                            BenefitValue: z
                                              .string()
                                              .exactOptional()
                                              .openapi({
                                                description:
                                                  'The value or values permissible for a specific benefit for an individual product representing a product characteristic',
                                              }),
                                            Counter: z
                                              .int()
                                              .exactOptional()
                                              .openapi({
                                                description:
                                                  'Counter for the criteria (e.g. number of DD)',
                                              }),
                                            CriteriaType: z
                                              .array(
                                                z
                                                  .enum([
                                                    'CashDeposit',
                                                    'Deposit',
                                                    'DirectDebit',
                                                    'InitialDeposit',
                                                    'InternetLogon',
                                                    'MobileLogon',
                                                    'RegularDeposit',
                                                  ])
                                                  .openapi({
                                                    description:
                                                      'Criteria that is required in order to be eligible for the Benefit',
                                                  }),
                                              )
                                              .exactOptional(),
                                            DefaultToAccounts: z
                                              .boolean()
                                              .exactOptional()
                                              .openapi({
                                                description:
                                                  'Is the benefit part of the default account',
                                              }),
                                            MaximumCriteria: z
                                              .string()
                                              .regex(/^-?\d{1,10}\.\d{1,2}$/)
                                              .exactOptional()
                                              .openapi({
                                                description: 'Maximum amount for the criteria',
                                              }),
                                            MinimumCriteria: z
                                              .string()
                                              .regex(/^-?\d{1,10}\.\d{1,2}$/)
                                              .exactOptional()
                                              .openapi({
                                                description: 'Minimum amount for the criteria',
                                              }),
                                            PromotionEndDate: z
                                              .string()
                                              .regex(
                                                /^[0-9]{4}-(0[1-9]|(1[0|1|2]))-((0[1-9])|((1|2)[0-9])|(30|31))$/,
                                              )
                                              .exactOptional()
                                              .openapi({
                                                description:
                                                  'If the benefit is temporal the end date is when the benefit is no longer applicable',
                                              }),
                                            PromotionStartDate: z
                                              .string()
                                              .regex(
                                                /^[0-9]{4}-(0[1-9]|(1[0|1|2]))-((0[1-9])|((1|2)[0-9])|(30|31))$/,
                                              )
                                              .exactOptional()
                                              .openapi({
                                                description:
                                                  'If the benefit is temporal the start date is when the benefit comes into effect',
                                              }),
                                          })
                                          .openapi({ description: 'Benefit detail', required: [] }),
                                      )
                                      .exactOptional(),
                                    DateOfChange: z
                                      .string()
                                      .regex(
                                        /^[0-9]{4}-(0[1-9]|(1[0|1|2]))-((0[1-9])|((1|2)[0-9])|(30|31))$/,
                                      )
                                      .exactOptional()
                                      .openapi({
                                        description:
                                          'Date of the change if it refers to future terms',
                                      }),
                                    LengthPromotionalInDays: z
                                      .int()
                                      .exactOptional()
                                      .openapi({
                                        description:
                                          'Describes the length if only a duration is given instead of a date in days',
                                      }),
                                    StartPromotionOrFutureTerms: z
                                      .string()
                                      .regex(
                                        /^[0-9]{4}-(0[1-9]|(1[0|1|2]))-((0[1-9])|((1|2)[0-9])|(30|31))$/,
                                      )
                                      .exactOptional()
                                      .openapi({ description: 'Describes the start date' }),
                                    StopPromotionOrFutureTerms: z
                                      .string()
                                      .regex(
                                        /^[0-9]{4}-(0[1-9]|(1[0|1|2]))-((0[1-9])|((1|2)[0-9])|(30|31))$/,
                                      )
                                      .exactOptional()
                                      .openapi({ description: 'Describes the end date' }),
                                  })
                                  .openapi({ description: 'Benefit Item', required: [] }),
                                BenefitSubType: z
                                  .enum(['FutureMultipleTerms', 'Promotional', 'Regular'])
                                  .exactOptional()
                                  .openapi({ description: 'Benefit Subtype Code' }),
                              })
                              .openapi({
                                description: 'Benefit Interest Group',
                                required: ['BenefitItem'],
                              }),
                          )
                          .exactOptional(),
                      })
                      .openapi({ description: 'Benefit', required: ['Benefit'] }),
                    CAPricing: z
                      .array(
                        z
                          .strictObject({
                            CAPricingItem: z
                              .strictObject({
                                DateOfChange: z
                                  .string()
                                  .regex(
                                    /^[0-9]{4}-(0[1-9]|(1[0|1|2]))-((0[1-9])|((1|2)[0-9])|(30|31))$/,
                                  )
                                  .exactOptional()
                                  .openapi({
                                    description: 'Date of the change if it refers to future terms',
                                  }),
                                ExchangeRateAdjustment: z
                                  .string()
                                  .regex(/^-?\d{1,3}\.\d{1,4}$/)
                                  .exactOptional()
                                  .openapi({
                                    description:
                                      'The margin added, by certain card issuers, to the scheme rate in order to arrive at the exchange rate qouted as the reference exchange rate to the cardholder',
                                  }),
                                LengthPromotionalInDays: z
                                  .int()
                                  .exactOptional()
                                  .openapi({
                                    description:
                                      'Describes the length if only a duration is given instead of a date',
                                  }),
                                StartPromotionOrFutureTerms: z
                                  .string()
                                  .regex(
                                    /^[0-9]{4}-(0[1-9]|(1[0|1|2]))-((0[1-9])|((1|2)[0-9])|(30|31))$/,
                                  )
                                  .exactOptional()
                                  .openapi({ description: 'Describes the start date' }),
                                StopPromotionOrFutureTerms: z
                                  .string()
                                  .regex(
                                    /^[0-9]{4}-(0[1-9]|(1[0|1|2]))-((0[1-9])|((1|2)[0-9])|(30|31))$/,
                                  )
                                  .exactOptional()
                                  .openapi({ description: 'Describes the end date' }),
                              })
                              .openapi({ description: 'Card Pricing', required: [] }),
                            ProductState: z
                              .enum(['FutureMultipleTerms', 'Promotional', 'Regular'])
                              .openapi({
                                description:
                                  'Describes if the offering is promotional or a description of a future state.',
                              }),
                          })
                          .openapi({
                            description: 'Card Price',
                            required: ['ProductState', 'CAPricingItem'],
                          }),
                      )
                      .min(1),
                    CardNotes: z
                      .string()
                      .exactOptional()
                      .openapi({
                        description: 'Optional additional notes to supplement the card details',
                      }),
                    CardType: z
                      .array(
                        z
                          .enum([
                            'BasicCard',
                            'BusinessQuickLodgeCard',
                            'Cashcard',
                            'ContactlessCashcard',
                            'ContactlessDebitMastercard',
                            'ContactlessDebitVisa',
                            'DebitMastercard',
                            'VisaDebit',
                            'DepositCard',
                            'OperatorCard',
                            'POCACard',
                          ])
                          .openapi({ description: 'Indicates the card scheme' }),
                      )
                      .min(1)
                      .openapi({ description: 'Card Type available' }),
                    CardWithdrawalLimit: z
                      .string()
                      .regex(/^-?\d{1,10}\.\d{1,2}$/)
                      .openapi({
                        description:
                          'The daily Limit that a customer can get via the ATM. This describes the default limit rather than the maximum',
                      }),
                    ChequeBookAvailable: z
                      .boolean()
                      .openapi({ description: 'Can a chequebook be issued' }),
                    Contactless: z
                      .boolean()
                      .openapi({ description: 'Does the card issued have contactless facility' }),
                    CreditInterest: z
                      .strictObject({
                        CreditCharged: z
                          .boolean()
                          .openapi({
                            description:
                              'Is credit paid to the account. The answer will be the condition of all other fields to be filled',
                          }),
                        CreditInterestGroup: z
                          .array(
                            z
                              .strictObject({
                                CreditInterestItem: z
                                  .strictObject({
                                    CalculationFrequency: z
                                      .enum([
                                        'Daily',
                                        'Weekly',
                                        'Monthly',
                                        'Quarterly',
                                        'Half-Yearly',
                                        'Yearly',
                                        'Overnight',
                                      ])
                                      .exactOptional()
                                      .openapi({
                                        description: 'How often is interest applied to account',
                                      }),
                                    CalculationMethod: z
                                      .enum(['Banded', 'Tiered', 'Whole'])
                                      .exactOptional()
                                      .openapi({ description: 'Method for interest calculation' }),
                                    DateOfChange: z
                                      .string()
                                      .regex(
                                        /^[0-9]{4}-(0[1-9]|(1[0|1|2]))-((0[1-9])|((1|2)[0-9])|(30|31))$/,
                                      )
                                      .exactOptional()
                                      .openapi({
                                        description:
                                          'Date of the change if it refers to future terms',
                                      }),
                                    EndDate: z
                                      .string()
                                      .regex(
                                        /^[0-9]{4}-(0[1-9]|(1[0|1|2]))-((0[1-9])|((1|2)[0-9])|(30|31))$/,
                                      )
                                      .exactOptional()
                                      .openapi({
                                        description:
                                          'If interest is charged on a specific date range as end date (often used for promotion)',
                                      }),
                                    FixedInterestLength: z
                                      .int()
                                      .exactOptional()
                                      .openapi({ description: 'Fixed interest length in days' }),
                                    InterestNotes: z
                                      .string()
                                      .exactOptional()
                                      .openapi({
                                        description:
                                          'Additional notes to supplement the interest details',
                                      }),
                                    InterestRateType: z
                                      .enum(['Fixed', 'Variable'])
                                      .exactOptional()
                                      .openapi({
                                        description: 'Credit Interest Payment Rate Type',
                                      }),
                                    InterestTiers: z
                                      .array(
                                        z
                                          .strictObject({
                                            APRAERRate: z
                                              .string()
                                              .regex(/^-?\d{1,3}\.\d{1,4}$/)
                                              .exactOptional()
                                              .openapi({
                                                description: 'AER or APR Rate for comparison',
                                              }),
                                            DailyChargeForMaximum: z
                                              .string()
                                              .regex(/^-?\d{1,10}\.\d{1,2}$/)
                                              .exactOptional()
                                              .openapi({
                                                description: 'Special charge on tiered overdraft',
                                              }),
                                            DailyChargeForMinimum: z
                                              .string()
                                              .regex(/^-?\d{1,10}\.\d{1,2}$/)
                                              .exactOptional()
                                              .openapi({
                                                description: 'Special charge on tiered overdraft',
                                              }),
                                            InterestTier: z
                                              .string()
                                              .exactOptional()
                                              .openapi({ description: 'Identifier for the tier' }),
                                            Rate: z
                                              .string()
                                              .regex(/^-?\d{1,3}\.\d{1,4}$/)
                                              .exactOptional()
                                              .openapi({
                                                description: 'Rate being paid by the bank (gross)',
                                              }),
                                            RateComparisonType: z
                                              .enum(['APR', 'AER', 'Gross', 'Net', 'RepApr'])
                                              .exactOptional()
                                              .openapi({ description: 'Rate Comparison Type' }),
                                            TierValueMaximum: z
                                              .string()
                                              .min(1)
                                              .max(15)
                                              .exactOptional()
                                              .openapi({
                                                description: 'Max Value of interst tier',
                                              }),
                                            TierValueMinimum: z
                                              .string()
                                              .regex(/^-?\d{1,10}\.\d{1,2}$/)
                                              .exactOptional()
                                              .openapi({
                                                description: 'Lower value of interest tier',
                                              }),
                                          })
                                          .openapi({
                                            description: 'Credit Interest Tiers',
                                            required: [],
                                          }),
                                      )
                                      .exactOptional(),
                                    LengthPromotionalInDays: z
                                      .int()
                                      .exactOptional()
                                      .openapi({
                                        description:
                                          'Describes the length if only a duration is given instead of a date',
                                      }),
                                    PaymentMethod: z
                                      .enum(['Compound', 'PayAway', 'SelfCredit', 'SimpleInterest'])
                                      .exactOptional()
                                      .openapi({
                                        description: 'Credit Interest Payment Method Code',
                                      }),
                                    StartDate: z
                                      .string()
                                      .regex(
                                        /^[0-9]{4}-(0[1-9]|(1[0|1|2]))-((0[1-9])|((1|2)[0-9])|(30|31))$/,
                                      )
                                      .exactOptional()
                                      .openapi({
                                        description:
                                          'If interest is charged on a specific date range as start date (often used for promotion)',
                                      }),
                                    StartPromotionOrFutureTerms: z
                                      .string()
                                      .regex(
                                        /^[0-9]{4}-(0[1-9]|(1[0|1|2]))-((0[1-9])|((1|2)[0-9])|(30|31))$/,
                                      )
                                      .exactOptional()
                                      .openapi({ description: 'Describes the start date' }),
                                    StopPromotionOrFutureTerms: z
                                      .string()
                                      .regex(
                                        /^[0-9]{4}-(0[1-9]|(1[0|1|2]))-((0[1-9])|((1|2)[0-9])|(30|31))$/,
                                      )
                                      .exactOptional()
                                      .openapi({ description: 'Describes the end date' }),
                                  })
                                  .openapi({ description: 'Credit Interest item', required: [] }),
                                InterestTierSubType: z
                                  .enum(['FutureMultipleTerms', 'Promotional', 'Regular'])
                                  .exactOptional()
                                  .openapi({
                                    description:
                                      'Describes if the offering is promotional, regular or a description of a future state',
                                  }),
                              })
                              .openapi({
                                description: 'Credit Interest Group',
                                required: ['CreditInterestItem'],
                              }),
                          )
                          .exactOptional(),
                      })
                      .openapi({ description: 'Credit Interest', required: ['CreditCharged'] }),
                    CreditScoringPartOfAccountOpeningForGettingAnAccount: z
                      .boolean()
                      .openapi({
                        description:
                          'Indicates whether a credit check performed on an inquiry to open an account is submitted',
                      }),
                    CreditScoringPartOfAccountOpeningForIDVerification: z
                      .boolean()
                      .exactOptional()
                      .openapi({
                        description:
                          'Indicates whether a credit check is used to check the address of a potential new account holder',
                      }),
                    CreditScoringPartOfAccountOpeningIDVerificationIsAHardOrSoftCreditScore: z
                      .array(
                        z
                          .enum(['Hard', 'Soft'])
                          .openapi({ description: 'Indicates the type of scoring' }),
                      )
                      .exactOptional(),
                    CreditScoringPartOfAccountOpeningIDVerificationText: z
                      .array(z.string())
                      .exactOptional()
                      .openapi({ description: 'Details on the specific credit scoring' }),
                    CreditScoringPartOfAccountOpeningIsAHardOrSoftCreditScore: z
                      .array(
                        z
                          .enum(['Hard', 'Soft'])
                          .openapi({ description: 'Indicates the type of scoring' }),
                      )
                      .exactOptional()
                      .openapi({ description: 'Describes the type of credit scoring' }),
                    CreditScoringPartOfAccountOpeningText: z
                      .string()
                      .exactOptional()
                      .openapi({ description: 'Details on the specific credit scoring' }),
                    Currency: z
                      .array(
                        z
                          .string()
                          .regex(/[A-Z]{3}/)
                          .openapi({ description: 'Active or Historic Currency Code' }),
                      )
                      .min(1)
                      .openapi({
                        description: 'Currency of the Account. Default to GBP at present',
                      }),
                    Eligibility: z
                      .strictObject({
                        AgeRestricted: z
                          .boolean()
                          .openapi({
                            description:
                              "Indicates a customer's age is part of eligibility criteria",
                          }),
                        AnnualBusinessTurnover: z
                          .string()
                          .regex(/^-?\d{1,10}\.\d{1,2}$/)
                          .exactOptional()
                          .openapi({ description: 'Annual Business Turnover' }),
                        AnnualBusinessTurnoverCurrency: z
                          .string()
                          .regex(/[A-Z]{3}/)
                          .exactOptional()
                          .openapi({ description: 'Annual Business Turnover Currency' }),
                        Description: z
                          .string()
                          .openapi({ description: 'One paragraph detailing the eligibility' }),
                        EligibilityName: z
                          .string()
                          .exactOptional()
                          .openapi({
                            description:
                              'Free text description, denotes non standard eligibilities not included in the code list',
                          }),
                        EligibilityNotes: z
                          .string()
                          .exactOptional()
                          .openapi({
                            description:
                              'Optional additional notes to supplement the eligibility conditions. Only used for very specific conditions',
                          }),
                        EligibilityType: z
                          .enum([
                            'AnyBusinessCustomer',
                            'BusinessOnly',
                            'CreditCard',
                            'CreditScoring',
                            'EmailAddress',
                            'ExistingCustomers',
                            'IdAndV',
                            'Mortgage',
                            'NoArrearsOnLoan',
                            'NoCustomerInArrears',
                            'NoOverOverdraftThirtyDays',
                            'NoSoleUkAccountOrBankrupt',
                            'NTB',
                            'NTBBusiness',
                            'SoleStudentAccount',
                            'SoleUkAccount',
                            'StudentsOnly',
                            'TwoMonthsOfCourseStart',
                            'UCASFulltimeTwoYears',
                          ])
                          .exactOptional()
                          .openapi({ description: 'Eligibility type' }),
                        IncomeCondition: z
                          .string()
                          .exactOptional()
                          .openapi({
                            description:
                              'Stipulates any particular definition of income that applies to the income eligibility and/or method by which income must paid into the account (eg Salary DD)',
                          }),
                        IncomeTurnoverRelated: z
                          .boolean()
                          .openapi({ description: 'Indicates if eligibility linked to income' }),
                        MarketingEligibility: z
                          .array(
                            z
                              .enum([
                                'ExistingCustomers',
                                'NewCustomersOnly',
                                'SwitchersOnly',
                                'StartUp',
                              ])
                              .openapi({ description: 'Specific eligibility for marketing' }),
                          )
                          .superRefine((items, ctx) => {
                            const seen = new Map()
                            for (const [i, val] of items.entries()) {
                              const key = JSON.stringify(val)
                              if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
                              else seen.set(key, i)
                            }
                          })
                          .exactOptional(),
                        MaxNumberOfAccounts: z
                          .string()
                          .exactOptional()
                          .openapi({
                            description: 'Maximum number of the same prodcut the customer may hold',
                          }),
                        MaximumAge: z
                          .int()
                          .exactOptional()
                          .openapi({
                            description: 'Maximum age, in years, allowed to hold the account',
                          }),
                        MaximumAgeToOpen: z
                          .int()
                          .exactOptional()
                          .openapi({ description: 'Maximum age, in years, to open an account' }),
                        MaximumOpeningAmount: z
                          .boolean()
                          .exactOptional()
                          .openapi({ description: 'A maximum amount to be deposited at opening' }),
                        MinIncomeTurnoverPaidIntoAccount: z
                          .int()
                          .exactOptional()
                          .openapi({
                            description: 'Minimum Income Amount required to paid into the account',
                          }),
                        MinimumAge: z
                          .int()
                          .exactOptional()
                          .openapi({
                            description: 'Minimum age, in years, required to hold an account',
                          }),
                        MinimumDeposit: z
                          .boolean()
                          .exactOptional()
                          .openapi({
                            description: 'A minimum deposit required to hold this account',
                          }),
                        MinimumIncomeFrequency: z
                          .enum([
                            'AcademicTerm',
                            'HalfYearly',
                            'Monthly',
                            'Quarterly',
                            'Weekly',
                            'Yearly',
                          ])
                          .exactOptional()
                          .openapi({
                            description:
                              'The frequency that the minimum mentioned before is deposited in the account. Yearly is very important for premium accounts',
                          }),
                        MinimumIncomeTurnoverAmount: z
                          .string()
                          .regex(/^-?\d{1,10}\.\d{1,2}$/)
                          .exactOptional()
                          .openapi({
                            description: 'Minimum income / Turnover required to hold the product',
                          }),
                        MinimumIncomeTurnoverCurrency: z
                          .string()
                          .regex(/[A-Z]{3}/)
                          .exactOptional()
                          .openapi({ description: 'Minimum income / Turnover Currency' }),
                        MinimumOperatingBalance: z
                          .string()
                          .regex(/^-?\d{1,10}\.\d{1,2}$/)
                          .exactOptional()
                          .openapi({ description: 'Minimum Operating Balance' }),
                        MinimumOperatingBalanceCurrency: z
                          .string()
                          .regex(/[A-Z]{3}/)
                          .exactOptional()
                          .openapi({ description: 'Minimum Operating Balance currency' }),
                        MinimumOperatingBalanceExists: z
                          .boolean()
                          .exactOptional()
                          .openapi({ description: 'Is there a Minimum Operating Balance?' }),
                        OpeningDepositMaximumAmount: z
                          .string()
                          .regex(/^-?\d{1,10}\.\d{1,2}$/)
                          .exactOptional()
                          .openapi({ description: 'Maximum Amount to be depositing at opening' }),
                        OpeningDepositMaximumCurrency: z
                          .string()
                          .regex(/[A-Z]{3}/)
                          .exactOptional()
                          .openapi({
                            description:
                              'The currency of the Minimum Amount to be depositing at opening',
                          }),
                        OpeningDepositMinimum: z
                          .string()
                          .regex(/^-?\d{1,10}\.\d{1,2}$/)
                          .exactOptional()
                          .openapi({ description: 'Minimum Amount to be held on account' }),
                        OpeningDepositMinimumCurrency: z
                          .string()
                          .regex(/[A-Z]{3}/)
                          .exactOptional()
                          .openapi({
                            description:
                              'The currency of the Minimum Amount to be depositing at opening',
                          }),
                        OtherFinancialHoldingRequired: z
                          .boolean()
                          .openapi({
                            description:
                              'Indicates that it is necessary to hold another product with the bank in order to be eligible for this product or feature',
                          }),
                        PreviousBankruptcy: z
                          .boolean()
                          .openapi({
                            description:
                              'Describes if a previous bankruptcy / insolvency disqualfies for this account Details in ELI-280',
                          }),
                        ResidencyRestricted: z
                          .boolean()
                          .openapi({
                            description:
                              "Indicates a customer's residency forms part of the eligibility criteria",
                          }),
                        ResidencyRestrictedRegion: z
                          .enum([
                            'UK',
                            'EEA',
                            'EU',
                            'EFTA',
                            'GB - ENG',
                            'GB - NIR',
                            'GB - SCT',
                            'GB - WLS',
                            'IRL',
                          ])
                          .exactOptional()
                          .openapi({
                            description:
                              'Indicates a customer must be current resident of a geographic area/country',
                          }),
                        SingleJointIncome: z
                          .enum(['Joint', 'SoleIncome', 'SoleOrJoint', 'Turnover'])
                          .exactOptional()
                          .openapi({
                            description:
                              'Minimum Income Source. For certain products a minimum income is required. This can be mandated as to the single income or to a joint income. This field describes this',
                          }),
                        ThirdSectorOrganisations: z
                          .boolean()
                          .openapi({
                            description:
                              'Is the product available to operate as a Clubs or Societies account?',
                          }),
                      })
                      .openapi({
                        description: 'Eligibility',
                        required: [
                          'AgeRestricted',
                          'OtherFinancialHoldingRequired',
                          'Description',
                          'IncomeTurnoverRelated',
                          'ResidencyRestricted',
                          'ThirdSectorOrganisations',
                          'PreviousBankruptcy',
                        ],
                      }),
                    Feature: z
                      .array(
                        z
                          .object({
                            DateOfChange: z
                              .string()
                              .regex(
                                /^[0-9]{4}-(0[1-9]|(1[0|1|2]))-((0[1-9])|((1|2)[0-9])|(30|31))$/,
                              )
                              .exactOptional()
                              .openapi({
                                description: 'Date of the change if it refers to future terms',
                              }),
                            ExistingFeature: z
                              .boolean()
                              .openapi({
                                description: 'Indicates whether the account has any feature',
                              }),
                            FeatureDetails: z
                              .array(
                                z
                                  .object({
                                    CriteriaType: z
                                      .string()
                                      .exactOptional()
                                      .openapi({
                                        description:
                                          'Criteria that is required in order to be eligible for the feature',
                                      }),
                                    DateOfChange: z
                                      .string()
                                      .regex(
                                        /^[0-9]{4}-(0[1-9]|(1[0|1|2]))-((0[1-9])|((1|2)[0-9])|(30|31))$/,
                                      )
                                      .exactOptional()
                                      .openapi({
                                        description:
                                          'Date of the change if it refers to future terms',
                                      }),
                                    FeatureDescription: z
                                      .string()
                                      .exactOptional()
                                      .openapi({
                                        description: 'A textual explanation of what the feature',
                                      }),
                                    FeatureName: z
                                      .string()
                                      .exactOptional()
                                      .openapi({ description: 'The name of the feature' }),
                                    FeatureSubType: z
                                      .enum(['FutureMultipleTerms', 'Promotional', 'Regular'])
                                      .exactOptional()
                                      .openapi({ description: '' }),
                                    FeatureType: z
                                      .string()
                                      .exactOptional()
                                      .openapi({
                                        description:
                                          'Type that represents the nature of the feature',
                                      }),
                                    FeatureValue: z
                                      .string()
                                      .exactOptional()
                                      .openapi({
                                        description:
                                          'The value or values permissible for a specific feature for an individual product representing a product characteristic',
                                      }),
                                    LengthPromotionalInDays: z
                                      .int()
                                      .exactOptional()
                                      .openapi({
                                        description:
                                          'Describes the length if only a duration is given instead of a date',
                                      }),
                                    StartPromotionOrFutureTerms: z
                                      .string()
                                      .regex(
                                        /^[0-9]{4}-(0[1-9]|(1[0|1|2]))-((0[1-9])|((1|2)[0-9])|(30|31))$/,
                                      )
                                      .exactOptional()
                                      .openapi({ description: 'Describes the start date' }),
                                    StopPromotionOrFutureTerms: z
                                      .string()
                                      .regex(
                                        /^[0-9]{4}-(0[1-9]|(1[0|1|2]))-((0[1-9])|((1|2)[0-9])|(30|31))$/,
                                      )
                                      .exactOptional()
                                      .openapi({ description: 'Describes the end date' }),
                                  })
                                  .openapi({ description: 'Feature Details', required: [] }),
                              )
                              .exactOptional()
                              .openapi({ description: 'Feature details' }),
                            LengthPromotionalInDays: z
                              .int()
                              .exactOptional()
                              .openapi({
                                description:
                                  'Describes the length if only a duration is given instead of a date',
                              }),
                            ProductState: z
                              .enum(['FutureMultipleTerms', 'Promotional', 'Regular'])
                              .exactOptional()
                              .openapi({
                                description:
                                  'Describes if the offering is promotional or a description of a future state.',
                              }),
                            StartPromotionOrFutureTerms: z
                              .string()
                              .regex(
                                /^[0-9]{4}-(0[1-9]|(1[0|1|2]))-((0[1-9])|((1|2)[0-9])|(30|31))$/,
                              )
                              .exactOptional()
                              .openapi({ description: 'Describes the start date' }),
                            StopPromotionOrFutureTerms: z
                              .string()
                              .regex(
                                /^[0-9]{4}-(0[1-9]|(1[0|1|2]))-((0[1-9])|((1|2)[0-9])|(30|31))$/,
                              )
                              .exactOptional()
                              .openapi({ description: 'Describes the end date' }),
                          })
                          .openapi({
                            description: 'Account Features',
                            required: ['ExistingFeature'],
                          }),
                      )
                      .exactOptional(),
                    FeesAndCharges: z
                      .array(
                        z
                          .strictObject({
                            Fees: z
                              .strictObject({
                                DateOfChange: z
                                  .string()
                                  .regex(
                                    /^[0-9]{4}-(0[1-9]|(1[0|1|2]))-((0[1-9])|((1|2)[0-9])|(30|31))$/,
                                  )
                                  .exactOptional()
                                  .openapi({
                                    description: 'Date of the change if it refers to future terms',
                                  }),
                                FeeDetails: z
                                  .array(
                                    z
                                      .strictObject({
                                        FeeDetail: z
                                          .strictObject({
                                            DateOfChange: z
                                              .string()
                                              .regex(
                                                /^[0-9]{4}-(0[1-9]|(1[0|1|2]))-((0[1-9])|((1|2)[0-9])|(30|31))$/,
                                              )
                                              .exactOptional()
                                              .openapi({
                                                description:
                                                  'Date of the change if it refers to future terms',
                                              }),
                                            FeeSubDetails: z
                                              .strictObject({
                                                FeeAmount: z
                                                  .string()
                                                  .regex(/^-?\d{1,10}\.\d{1,2}$/)
                                                  .exactOptional()
                                                  .openapi({ description: 'Fee in GBP' }),
                                                FeeFrequency: z
                                                  .enum([
                                                    'AcademicTerm',
                                                    'AccountClosing',
                                                    'AccountOpening',
                                                    'AtTimeOfLoanRepayment',
                                                    'ChargingPeriod',
                                                    'Daily',
                                                    'EveryFiveBusinessDays',
                                                    'Item',
                                                    'Monthly',
                                                    'OnAccountAnniversary',
                                                    'PerHour',
                                                    'PerOccurrence',
                                                    'PerSheet',
                                                    'PerTransactionAmount',
                                                    'PerTransactionPercentage',
                                                    'Quarterly',
                                                    'SixMonthly',
                                                    'StartOfLoan',
                                                    'StatementMonthly',
                                                    'Weekly',
                                                    'Yearly',
                                                  ])
                                                  .openapi({
                                                    description: 'Triggering frequency of the fee',
                                                  }),
                                                FeeHigherTier: z
                                                  .int()
                                                  .exactOptional()
                                                  .openapi({
                                                    description:
                                                      'Higher occurrence / range boundary e.g. For returned cheques this could be 10, which means the first 10 returned cheque fits into this range',
                                                  }),
                                                FeeLowerTier: z
                                                  .int()
                                                  .exactOptional()
                                                  .openapi({
                                                    description:
                                                      'Lower occurrence / range boundary e.g. For returned cheques this could be 0, which means the first returned cheque fits into this range',
                                                  }),
                                                FeeMax: z
                                                  .string()
                                                  .regex(/^-?\d{1,10}\.\d{1,2}$/)
                                                  .exactOptional()
                                                  .openapi({ description: 'Fee in GBP' }),
                                                FeeMin: z
                                                  .string()
                                                  .regex(/^-?\d{1,10}\.\d{1,2}$/)
                                                  .exactOptional()
                                                  .openapi({ description: 'Fee in GBP' }),
                                                FeeRate: z
                                                  .string()
                                                  .regex(/^-?\d{1,3}\.\d{1,4}$/)
                                                  .exactOptional()
                                                  .openapi({ description: '% Rate' }),
                                                FeesAndChargesNotes: z
                                                  .string()
                                                  .exactOptional()
                                                  .openapi({
                                                    description:
                                                      'Supplementary information for fees and charges',
                                                  }),
                                                Negotiable: z
                                                  .boolean()
                                                  .openapi({
                                                    description:
                                                      'Indicates that this Fee Rate or Fee Amount is negotiable based on risk or other factor',
                                                  }),
                                                RepresentativeRate: z
                                                  .string()
                                                  .regex(/^-?\d{1,3}\.\d{1,4}$/)
                                                  .exactOptional()
                                                  .openapi({ description: 'Representative Rate' }),
                                              })
                                              .openapi({
                                                description: 'Fee Sub Details',
                                                required: ['FeeFrequency', 'Negotiable'],
                                              }),
                                            FeeType: z
                                              .enum([
                                                'Other',
                                                'ATMDonation',
                                                'ATMDeposATMPaidIn',
                                                'ReportCertBalance',
                                                'ATMAbroadConVisaCredit',
                                                'ATMAbroadConVisaDebit',
                                                'ATMCardnetEnvIn',
                                                'ATMCashGroupATMCreditCard',
                                                'ATMCashNonGroupATMCredittcard',
                                                'ATMCashGroupATMDebitCard',
                                                'ATMCashNonGroupATMDebitcard',
                                                'ATMConGroupATM',
                                                'ATMAbroad',
                                                'ATMForeignCashDebCard',
                                                'ATMAbroadGoldVisaDebit',
                                                'ATMSpainCashCard',
                                                'ATMSpainDebitCard',
                                                'ATMSpainConversionDebitCard',
                                                'ATMSpainConversionCashCard',
                                                'ATMNonSterlingWithdrawal',
                                                'ATMAbroadVisaCredit',
                                                'ATMAbroadVisaDebit',
                                                'ATMAbroadConVisaGoldDebit',
                                                'ATMWidthdrawCash',
                                                'BACSOnLineAncilliary',
                                                'BACSBatch',
                                                'BACSOnLineFile',
                                                'BACSFileItem',
                                                'BACSOnLineSetup ',
                                                'BACSItem',
                                                'BACSItemInterbranch',
                                                'BACSBulkBatch',
                                                'BACSOnLineOverlimit',
                                                'BACSOnLinePayment',
                                                'BACSRecallItem',
                                                'BACSOnLineService',
                                                'BACSBulkInternet',
                                                'BACSTELDirDebSmartCard',
                                                'BACSTELDirDebWebInit',
                                                'BACSTELirDebWebInit',
                                                'BACSTELDirDebOverlimit',
                                                'BACSTELDirDebPayment',
                                                'BACSTELDirDebService',
                                                'BACSTELDirDebAncilliary',
                                                'BACSDirectItemProfile',
                                                'BACSTELAncilliary',
                                                'BACSTELSmartCard',
                                                'BACSTELFile',
                                                'BACSTELSetup ',
                                                'BACSTELOverlimit',
                                                'BACSTELPayment',
                                                'BACSTELService',
                                                'CHAPSOutBranch',
                                                'CHAPSCancellation',
                                                'CHAPSOutOnlineDepositAcc',
                                                'CHAPSIn',
                                                'CHAPSOutInterBank',
                                                'CHAPSInterBank',
                                                'CHAPSOutPost',
                                                'CHAPSOutInterBranch',
                                                'CHAPSOut',
                                                'CHAPSOutOnline',
                                                'CHAPSandForeignPay',
                                                'CHAPSOutManual',
                                                'CardCardReplacement',
                                                'DraftsCounter',
                                                'DraftsBankers',
                                                'DraftsIntlPayableAbroad',
                                                'DraftsLostStolen',
                                                'CardPersonalisedCard',
                                                'DraftsIntlStoppedCancelled',
                                                'EuroChqXLess',
                                                'EuroChqXPlus',
                                                'FPSOutFutureDated',
                                                'FPSOutImmediate',
                                                'FPSOut',
                                                'FPSOutOwn',
                                                'FPSInBranch',
                                                'FPSUKPayUrgent',
                                                'LegalArticlesReport',
                                                'LegalSealing',
                                                'LegalBondAndGuarantee',
                                                'LegalCourtOrder',
                                                'LegalCoSearch',
                                                'LegalDepositAssignment',
                                                'LegalGuaranteePrep',
                                                'LegalLifePolicyPrepCo',
                                                'LegalLifePolicyPrepPersonal',
                                                'LegalPriorityPariPassu',
                                                'LegalSubordinationAgreement',
                                                'DirDebDirectDebitAdmin',
                                                'DirDebDirectDebitCancel',
                                                'IntlPayBIBForeignLimit',
                                                'IntlPayCreditTransCust',
                                                'IntlPayCreditTransNonCust',
                                                'IntlPayUrgentPaymentForeign',
                                                'IntlPayExpressMoneyMover',
                                                'IntlPayEEAPayUrgent',
                                                'IntlPayIrishPayUrgent',
                                                'IntlPayEEAPay',
                                                'IntlPayForeignIn1CPlus',
                                                'IntlPayForeignPaymentInUKAcc',
                                                'IntlPayForeignCharge',
                                                'IntlPayForeignCancellation',
                                                'IntlPayForeignStandardEUEuroBIC',
                                                'IntlPayFXFeeRate',
                                                'IntlPayForeignInternet',
                                                'IntlPayForeign',
                                                'IntlPayForeignInbound',
                                                'IntlPayFXPaymentOut',
                                                'IntlPayForeignInSub1C',
                                                'IntlPayFXRate',
                                                'IntlPayForeignStandardEUEuroNoBIC',
                                                'IntlPayFXPaymentOutIR',
                                                'IntlPayFXFee',
                                                'IntlPayPurchaseNonSterling',
                                                'IntlPayPostPaymentForeign',
                                                'IntlPayPurchaseRateNonSterling',
                                                'IntlPayPaymentTracing',
                                                'IntlPayStandardMoneyMover',
                                                'IntlPayMT101Transaction',
                                                'IntlPayTransNonSterling',
                                                'IntlPayTransRateNonSterling',
                                                'IntlPayForeignUrgentEUEuroBIC',
                                                'IntlPayForeignUrgentEUEuroNoBIC',
                                                'IntlPayUrgentPaymentGroup',
                                                'IntlPayUrgentPaymentUK',
                                                'IntlPayUSAPayUrgent',
                                                'IntlPayCurrencyPurchase',
                                                'IntlPayWorldpayPayment',
                                                'IntlPayCurrencyWithdraw',
                                                'InvPayBankDetailsWrong',
                                                'InvPayForeignBCNR',
                                                'InvPayForeignRecall',
                                                'InvGeneralInq',
                                                'InvOldInstruction',
                                                'InvPayPaymentRecall',
                                                'InvPayReturnDebitXVLess',
                                                'InvPayReturnDebitXVPlus',
                                                'InvPayStopPayment',
                                                'InvPayStandingOrdUnpaid',
                                                'SafeKeepAccess',
                                                'SafeKeepDeedMedium',
                                                'SafeKeepingEnvelope',
                                                'SafeKeepingInspection',
                                                'SafeKeepingLargeItem',
                                                'SafeKeepMultipleItems',
                                                'SafeKeepingParcel',
                                                'SafeKeepDeedSmall',
                                                'SafeKeepOneItem',
                                                'SafeKeepSafeCustody',
                                                'LoanArrangementFeePC',
                                                'LoanArrangement',
                                                'LoanEarlyRepayment',
                                                'LoanLatePayment',
                                                'LoanSMEUnsecuredLoan',
                                                'LoanTieredArrangement',
                                                'NightSafeNightSafeBankOpen',
                                                'NightSafeCreditSub5K',
                                                'NightSafeNightSafe',
                                                'NightSafeNightSafePaidIn',
                                                'OverdraftAnnualReview',
                                                'OverdraftTempOverdraft',
                                                'OverdraftUnauthorisedBorrowing',
                                                'POPostOfficeCounterCredit',
                                                'POPostOfficeCashCredit',
                                                'POPostOfficeCashOut',
                                                'POPostOfficeWithdrawal',
                                                'ChqBookTheftLossAllStopped',
                                                'ChqIssuedCurrencyAcc',
                                                'ChqCopy',
                                                'ChqDraft',
                                                'ChqIn',
                                                'ChqDraftSterling',
                                                'ChqOutIssued',
                                                'ChqSpecialChqPresentation',
                                                'ChqCounterCheque',
                                                'ChqChequeswithStatement',
                                                'ChqStopped',
                                                'ChqTrans',
                                                'ChqDraftFX',
                                                'ChqForeignCourier',
                                                'ChqForeignNegTenThou',
                                                'ChqForeignNegHundred',
                                                'ChequeForeignBankDivi',
                                                'ChqForeignNegFiftyThou',
                                                'ChqPensionCheque',
                                                'ChequeForeignOtherDivi',
                                                'ChqForeignNegFiveThou',
                                                'ChqForeignNegMax',
                                                'ChqForeignGBPMMDPlus',
                                                'ChqGiftCheque',
                                                'ChqCounterLodgement',
                                                'ChqCashDropLodgement',
                                                'ChqChequePhotocopy',
                                                'ChqPostOfficeCredit',
                                                'ChqPostOfficeChequeCollected',
                                                'ChqChequeRetrieval',
                                                'ChqReconcilliationPerTrans',
                                                'ChqSpecialPresentationCount',
                                                'ChqSpecialPresentationPTT',
                                                'ChqUnpaidCharge',
                                                'ChqUnpaidTransIn',
                                                'ChqUnpaidTransOut',
                                                'ChqUnpaidCheque',
                                                'ReportAuditLetter',
                                                'ReportFAXAdviceAdditional',
                                                'ReportTelAdviceAdditional',
                                                'ReportCreditHistory',
                                                'ReportCertInterestDuplicate',
                                                'ReportCertInterest',
                                                'ReportCreditHistoryAdditionalInYear',
                                                'ReportForeignStatusEnqElec',
                                                'ReportForeignStatusEnq',
                                                'ReportCashBackorInterestAnal',
                                                'ReportStatementChqDaily',
                                                'ReportStatementChqFortnightly',
                                                'ReportStatementChqMonthly',
                                                'ReportStatementChqWeekly',
                                                'ReportStatementAndDiviChq',
                                                'ReportReference',
                                                'ReportReferralItem',
                                                'ReportStatementByATM',
                                                'ReportStatementByBranch',
                                                'ReportStatementCopyRegular',
                                                'ReportStatusEnquiry',
                                                'ReportStatementFrequent',
                                                'ReportStatementMonthly',
                                                'ReportStatementCopy1',
                                                'ReportStatementToBranch',
                                                'ReportSMSTextMiniStatementorAlert',
                                                'ReportStatementFortnightly',
                                                'ReportSMSTextMiniStatementWoM',
                                                'ReportSMSTextAlertBalance',
                                                'ReportSMSTextAlert',
                                                'ReportTaxCert',
                                                'ReportWeeklyStatement',
                                                'ReportTextMessageBanking',
                                                'SEPACancellation',
                                                'SEPABranch',
                                                'SEPACredit',
                                                'SEPADirectDebit',
                                                'SEPAIn',
                                                'SEPAEuro',
                                                'SEPAOut',
                                                'SEPAUnpaid',
                                                'SEPAWinbitsAnnual Service',
                                                'SEPAWinbitsTransaction',
                                                'TransBillPaymentBranch',
                                                'TransBillCollect',
                                                'TransTelephoneBillPayment',
                                                'TransBankPayment',
                                                'TransBillPaymentTelephone',
                                                'TransCorrespondentBankFee',
                                                'TransCreditTransferUKDifferent',
                                                'TransCreditTransferUKSame',
                                                'TransCredit',
                                                'TransCreditTransfer',
                                                'TransBranchCredit',
                                                'TransDebit',
                                                'TransDebCardDeb',
                                                'TransUKDirDeb',
                                                'TransManualDeb',
                                                'TransBuyForeignWithGBP',
                                                'TransGoodValueReq',
                                                'TransSWIFTOutUKForeign',
                                                'TransInconpleteInstruction',
                                                'TransManualEntries',
                                                'TransManualTrans',
                                                'TransNonSterling',
                                                'TransPOSSaleForeign',
                                                'TransPriPaymentPost',
                                                'TransPOSSaleUK',
                                                'TransReturnPayment',
                                                'TransReconciliationPerTrans',
                                                'TransStandingOrdAdmin',
                                                'TransStandingOrd',
                                                'TransStandingOrdManPay',
                                                'TransTravellersChqOtherBank',
                                                'TransTelBusiPriPaymentForeignToUKAcc',
                                                'TransTeleItem',
                                                'TransTelBusiPriPaymentToGrpAcc',
                                                'TransTravellersChqRate',
                                                'TransTransferExGroup',
                                                'TransUnauthorisedPaidTrans',
                                                'TransUrgentPaymentPostal',
                                                'TransUnpaidTrans',
                                                'TransTelBusiPriPaymentToNonGrpAcc',
                                                'TransSWIFTOutNonEEASterling',
                                                'AutoAutoCredit',
                                                'AutoAutomatedEntries',
                                                'AutoAutoCreditPhoneInet',
                                                'AutoAutomatedTrans',
                                                'AutoDebitCardCommercial',
                                                'AutoFPSAutoCredit',
                                                'VisaConvertAbroadForeign',
                                                'VisaBureauDeChange',
                                                'VisaTravellersChqorCurrency',
                                                'OnlineInternetBillPayment',
                                                'OnlineBusinessOnlineEuroPayment',
                                                'OnlineBusinessOnlineUrgentEuroPayment',
                                                'OnlineBusinessOnlineForeignPayment',
                                                'OnlineInterbankTransfer',
                                                'OnlineInterbankPerTransfer',
                                                'OnlineInterbranchTransfer',
                                                'OnlineInterbranchPerTransfer',
                                                'OnlineSubscriptionMonthly',
                                                'OnlineBankingPayment',
                                                'OnlineBankingSubscription',
                                                'OnlinePOSSale',
                                                'OnlinePersonalCustAncillarys',
                                                'OnlinePersonalCustService',
                                                'OnlinePersonalCustOverlimits',
                                                'OnlineReplacementCardReader',
                                                'OnlinePersonalCustSetUp',
                                                'OnlinePersonalCustTransaction',
                                                'OnlinePaymentinGBPtoUK',
                                                'OnlineUrgentPayment',
                                                'OnlinePaymentinUSDtoUS',
                                                'OnlineBulkDirectDebSterling',
                                                'ForeignChqSent',
                                                'ForeignChqSelf',
                                                'ForeignChqEncashment',
                                                'ForeignFXInwardsCust',
                                                'ForeignFXTransfersROI',
                                                'ForeignFXForwardTrans',
                                                'ForeignFXTransfersBOI',
                                                'ForeignExMaintenance',
                                                'ForeignFXInwardsNonCust',
                                                'ForeignFXOutwards',
                                                'ForeignPurchase',
                                                'ForeignStatusRep',
                                                'ForeignChqDraft',
                                                'ForeignChqCLess',
                                                'ForeignChqMLess',
                                                'ForeignChqOther',
                                                'ForeignChqMPlus',
                                                'ForeignChqCCC',
                                                'ServiceCAccountFee',
                                                'ServiceCAccountFeeMonthly',
                                                'ServiceCAccountFeeQuarterly',
                                                'ServiceCBalanceHandling',
                                                'ServiceCFixedTariff',
                                                'ServiceCBusiDepAccBreakage',
                                                'ServiceCMonitorDaily',
                                                'ServiceCManagementFee',
                                                'ServiceCMinimumMonthlyFee',
                                                'ServiceCMonitorMonthly',
                                                'ServiceCMonitorWeekly',
                                                'ServiceCSecurityFee',
                                                'ServiceCMT940AccountFirst',
                                                'ServiceCMT940AccountSubsequent',
                                                'ServiceCOther',
                                                'CounterCoinHandling',
                                                'CounterCashIn',
                                                'CounterCashInNotUs',
                                                'CounterCashOut',
                                                'CounterCashX',
                                                'CounterForeignCashMax',
                                                'CounterForeignNoteHandling',
                                                'CounterForeignCashOut',
                                                'CounterCashFeeRate',
                                                'CounterForeignCashOutTx',
                                                'CounterCounterLodgement',
                                                'CounterCashDropLodgement',
                                                'CounterNotesLodged',
                                                'CounterNotesOut',
                                                'CounterCashInOwn',
                                                'CounterPaidTrans',
                                                'CounterCashFeePercent',
                                              ])
                                              .openapi({
                                                description: 'A description of the Fee type',
                                              }),
                                            LengthPromotionalInDays: z
                                              .int()
                                              .exactOptional()
                                              .openapi({
                                                description:
                                                  'Describes the length if only a duration is given instead of a date',
                                              }),
                                            Other: z
                                              .string()
                                              .exactOptional()
                                              .openapi({ description: 'Describe other fee type' }),
                                            StartPromotionOrFutureTerms: z
                                              .string()
                                              .regex(
                                                /^[0-9]{4}-(0[1-9]|(1[0|1|2]))-((0[1-9])|((1|2)[0-9])|(30|31))$/,
                                              )
                                              .exactOptional()
                                              .openapi({ description: 'Describes the start date' }),
                                            StopPromotionOrFutureTerms: z
                                              .string()
                                              .regex(
                                                /^[0-9]{4}-(0[1-9]|(1[0|1|2]))-((0[1-9])|((1|2)[0-9])|(30|31))$/,
                                              )
                                              .exactOptional()
                                              .openapi({ description: 'Describes the end date' }),
                                          })
                                          .openapi({
                                            description: 'Fee Detail',
                                            required: ['FeeType', 'FeeSubDetails'],
                                          }),
                                        FeeSubType: z
                                          .enum(['FutureMultipleTerms', 'Promotional', 'Regular'])
                                          .openapi({ description: 'Fee Sub Type code' }),
                                      })
                                      .openapi({
                                        description: 'Fee Details',
                                        required: ['FeeSubType', 'FeeDetail'],
                                      }),
                                  )
                                  .min(1),
                                FeeHigherTier: z
                                  .int()
                                  .exactOptional()
                                  .openapi({
                                    description:
                                      'Higher occurrence / range boundary e.g. For returned cheques this could be 10, which means the first 10 returned cheque fits into this range',
                                  }),
                                FeeLowerTier: z
                                  .int()
                                  .exactOptional()
                                  .openapi({
                                    description:
                                      'Lower occurrence / range boundary e.g.. For returned cheques this could be 0, which means the first returned cheque fits into this range',
                                  }),
                                LengthPromotionalInDays: z
                                  .int()
                                  .exactOptional()
                                  .openapi({
                                    description:
                                      'Describes the length if only a duration is given instead of a date',
                                  }),
                                StartPromotionOrFutureTerms: z
                                  .string()
                                  .regex(
                                    /^[0-9]{4}-(0[1-9]|(1[0|1|2]))-((0[1-9])|((1|2)[0-9])|(30|31))$/,
                                  )
                                  .exactOptional()
                                  .openapi({ description: 'Describes the start date' }),
                                StopPromotionOrFutureTerms: z
                                  .string()
                                  .regex(
                                    /^[0-9]{4}-(0[1-9]|(1[0|1|2]))-((0[1-9])|((1|2)[0-9])|(30|31))$/,
                                  )
                                  .exactOptional()
                                  .openapi({ description: 'Describes the end date' }),
                              })
                              .openapi({ description: 'Fees', required: ['FeeDetails'] }),
                            ProductState: z
                              .enum(['FutureMultipleTerms', 'Promotional', 'Regular'])
                              .openapi({
                                description:
                                  'Describes if the offering is promotional or a description of a future state.',
                              }),
                          })
                          .openapi({
                            description: 'Fees And Charges',
                            required: ['ProductState', 'Fees'],
                          }),
                      )
                      .min(1),
                    InternationalPaymentsSupported: z
                      .boolean()
                      .openapi({
                        description: 'Indicates that the account supports international payments',
                      }),
                    MaximumMonthlyCharge: z
                      .string()
                      .regex(/^-?\d{1,10}\.\d{1,2}$/)
                      .exactOptional()
                      .openapi({ description: 'The maximum Relevant Charges that could accrue' }),
                    MobileWallet: z
                      .array(
                        z
                          .enum([
                            'AndroidPay',
                            'ApplePay',
                            'IssuerMobileApp',
                            'MobileBankingApp',
                            'Other',
                            'PayM',
                            'SamsungPay',
                            'VodafoneWallet',
                          ])
                          .openapi({
                            description:
                              'Mobile wallet supported by this product. A mobile wallet being any electronic device that allows an individual to make electronic commerce transactions',
                          }),
                      )
                      .exactOptional()
                      .openapi({
                        description:
                          'Mobile wallet supported by this product. A mobile wallet being any electronic device that allows an individual to make electronic commerce transactions',
                      }),
                    Organisation: z
                      .strictObject({
                        Brand: z
                          .strictObject({
                            TrademarkID: z
                              .string()
                              .min(1)
                              .max(35)
                              .openapi({
                                description:
                                  'The trademark number that has been registered with the Intellectual Property Office. Note: The 2 letter IPO prefix should be omitted',
                              }),
                            TrademarkIPOCode: z
                              .enum(['UK', 'EU'])
                              .openapi({
                                description:
                                  'The Intellectual Property Office (IPO) is the official body responsible for intellectual property (IP) rights including patents, designs, trademarks and copyright. (Code: UK or EU only)',
                              }),
                          })
                          .openapi({
                            description: 'Brand',
                            required: ['TrademarkIPOCode', 'TrademarkID'],
                          }),
                        ParentOrganisation: z
                          .strictObject({
                            BIC: z
                              .string()
                              .regex(/[A-Z]{6}[A-Z2-9][A-NP-Z0-9]([A-Z0-9]{3})?/)
                              .exactOptional()
                              .openapi({ description: 'The BIC from the organisation' }),
                            LEI: z
                              .string()
                              .regex(/^[A-Z0-9]{18,18}[0-9]{2,2}$/)
                              .exactOptional()
                              .openapi({ description: 'The LEI ID of the organisation' }),
                            OrganisationName: z
                              .strictObject({
                                LegalName: z
                                  .string()
                                  .min(1)
                                  .max(35)
                                  .openapi({ description: 'Legal Name of the organisation' }),
                              })
                              .openapi({
                                description: 'Organisation Name',
                                required: ['LegalName'],
                              }),
                          })
                          .openapi({
                            description: 'Parent organisation',
                            required: ['OrganisationName'],
                          }),
                      })
                      .openapi({
                        description: 'Organisation',
                        required: ['ParentOrganisation', 'Brand'],
                      }),
                    Overdraft: z
                      .array(
                        z
                          .strictObject({
                            DateOfChange: z
                              .string()
                              .regex(
                                /^[0-9]{4}-(0[1-9]|(1[0|1|2]))-((0[1-9])|((1|2)[0-9])|(30|31))$/,
                              )
                              .exactOptional()
                              .openapi({
                                description: 'Date of the change if it refers to future terms',
                              }),
                            FeeChargeNegotiableIndicator: z
                              .enum(['No', 'Yes'])
                              .exactOptional()
                              .openapi({ description: 'Fee Charge negotiable Indicator' }),
                            FeesAndCharges: z
                              .array(
                                z
                                  .strictObject({
                                    FeeChargeAmount: z
                                      .string()
                                      .regex(/^-?\d{1,10}\.\d{1,2}$/)
                                      .exactOptional()
                                      .openapi({ description: 'Charge applied to tier' }),
                                    FeeChargeApplicationFrequency: z
                                      .enum([
                                        'AcademicTerm',
                                        'Daily',
                                        'Weekly',
                                        'Monthly',
                                        'Quarterly',
                                        'Half-Yearly',
                                        'Yearly',
                                        'Overnight',
                                        'Other',
                                      ])
                                      .exactOptional()
                                      .openapi({
                                        description:
                                          'Frequency with which the rate, or amount is charged',
                                      }),
                                    FeeChargeCalculationFrequency: z
                                      .enum([
                                        'AcademicTerm',
                                        'Daily',
                                        'Weekly',
                                        'Monthly',
                                        'Quarterly',
                                        'Half-Yearly',
                                        'Yearly',
                                        'Overnight',
                                        'Other',
                                      ])
                                      .exactOptional()
                                      .openapi({
                                        description:
                                          'Frequency with which the rate, or amount is calculated',
                                      }),
                                    FeeChargeOtherApplicationFrequency: z
                                      .strictObject({
                                        Code: z
                                          .string()
                                          .length(4)
                                          .exactOptional()
                                          .openapi({
                                            description:
                                              "Code mnemonic for 'Other' code set value applicable to specified attribute",
                                          }),
                                        Description: z
                                          .string()
                                          .exactOptional()
                                          .openapi({
                                            description:
                                              "Description for 'Other' code set value applicable to specified attribute",
                                          }),
                                        Name: z
                                          .string()
                                          .min(1)
                                          .max(256)
                                          .exactOptional()
                                          .openapi({
                                            description:
                                              "Name of 'Other' code set value applicable to specified attribute",
                                          }),
                                      })
                                      .exactOptional()
                                      .openapi({ description: 'Other Code Type', required: [] }),
                                    FeeChargeOtherCalculationFrequency: z
                                      .strictObject({
                                        Code: z
                                          .string()
                                          .length(4)
                                          .exactOptional()
                                          .openapi({
                                            description:
                                              "Code mnemonic for 'Other' code set value applicable to specified attribute",
                                          }),
                                        Description: z
                                          .string()
                                          .exactOptional()
                                          .openapi({
                                            description:
                                              "Description for 'Other' code set value applicable to specified attribute",
                                          }),
                                        Name: z
                                          .string()
                                          .min(1)
                                          .max(256)
                                          .exactOptional()
                                          .openapi({
                                            description:
                                              "Name of 'Other' code set value applicable to specified attribute",
                                          }),
                                      })
                                      .exactOptional()
                                      .openapi({ description: 'Other Code Type', required: [] }),
                                    FeeChargeOtherType: z
                                      .strictObject({
                                        Code: z
                                          .string()
                                          .length(4)
                                          .exactOptional()
                                          .openapi({
                                            description:
                                              "Code mnemonic for 'Other' code set value applicable to specified attribute",
                                          }),
                                        Description: z
                                          .string()
                                          .exactOptional()
                                          .openapi({
                                            description:
                                              "Description for 'Other' code set value applicable to specified attribute",
                                          }),
                                        Name: z
                                          .string()
                                          .min(1)
                                          .max(256)
                                          .exactOptional()
                                          .openapi({
                                            description:
                                              "Name of 'Other' code set value applicable to specified attribute",
                                          }),
                                      })
                                      .exactOptional()
                                      .openapi({ description: 'Other Code Type', required: [] }),
                                    FeeChargeRate: z
                                      .string()
                                      .regex(/^-?\d{1,3}\.\d{1,4}$/)
                                      .exactOptional()
                                      .openapi({ description: 'Fee charge rate applied to tier' }),
                                    FeeChargeRateOtherType: z
                                      .strictObject({
                                        Code: z
                                          .string()
                                          .length(4)
                                          .exactOptional()
                                          .openapi({
                                            description:
                                              "Code mnemonic for 'Other' code set value applicable to specified attribute",
                                          }),
                                        Description: z
                                          .string()
                                          .exactOptional()
                                          .openapi({
                                            description:
                                              "Description for 'Other' code set value applicable to specified attribute",
                                          }),
                                        Name: z
                                          .string()
                                          .min(1)
                                          .max(256)
                                          .exactOptional()
                                          .openapi({
                                            description:
                                              "Name of 'Other' code set value applicable to specified attribute",
                                          }),
                                      })
                                      .exactOptional()
                                      .openapi({ description: 'Other Code Type', required: [] }),
                                    FeeChargeRateType: z
                                      .enum(['Gross', 'Net', 'Other'])
                                      .exactOptional()
                                      .openapi({ description: 'Rate type other than EAR' }),
                                    FeeChargeType: z
                                      .enum([
                                        'Periodic',
                                        'Minimum',
                                        'Maximum',
                                        'Setup',
                                        'Review',
                                        'Renewal',
                                        'MinimumSetup',
                                        'MaximumSetup',
                                        'Total',
                                        'Item',
                                        'EmergencyLending',
                                        'Other',
                                      ])
                                      .openapi({ description: 'Type of fee or charge' }),
                                  })
                                  .openapi({
                                    description: 'Overdraft Fees Charges',
                                    required: ['FeeChargeType'],
                                  }),
                              )
                              .exactOptional(),
                            LengthPromotionalInDays: z
                              .int()
                              .exactOptional()
                              .openapi({
                                description:
                                  'Describes the length if only a duration is given instead of a date',
                              }),
                            MaximumMonthlyOverdraftCharge: z
                              .string()
                              .regex(/^-?\d{1,10}\.\d{1,2}$/)
                              .exactOptional()
                              .openapi({
                                description:
                                  'Maximum Monthly Charge (MMC) for Overdraft fee and charges.',
                              }),
                            Notes: z
                              .string()
                              .exactOptional()
                              .openapi({ description: 'Notes on the overdraft' }),
                            OverdraftProductState: z
                              .enum(['FutureMultipleTerms', 'Promotional', 'Regular'])
                              .exactOptional()
                              .openapi({
                                description:
                                  'Describes if the offering is promotional or a description of a future state.',
                              }),
                            OverdraftTierBandSet: z
                              .array(
                                z
                                  .strictObject({
                                    ArrangementOtherType: z
                                      .strictObject({
                                        Code: z
                                          .string()
                                          .length(4)
                                          .exactOptional()
                                          .openapi({
                                            description:
                                              "Code mnemonic for 'Other' code set value applicable to specified attribute",
                                          }),
                                        Description: z
                                          .string()
                                          .exactOptional()
                                          .openapi({
                                            description:
                                              "Description for 'Other' code set value applicable to specified attribute",
                                          }),
                                        Name: z
                                          .string()
                                          .min(1)
                                          .max(256)
                                          .exactOptional()
                                          .openapi({
                                            description:
                                              "Name of 'Other' code set value applicable to specified attribute",
                                          }),
                                      })
                                      .exactOptional()
                                      .openapi({ description: 'Other Code Type', required: [] }),
                                    ArrangementType: z
                                      .enum(['Unarranged', 'Arranged', 'Other'])
                                      .openapi({
                                        description: 'Defines the arrangement of the overdraft',
                                      }),
                                    BufferAmount: z
                                      .string()
                                      .regex(/^-?\d{1,10}\.\d{1,2}$/)
                                      .exactOptional()
                                      .openapi({
                                        description: 'Amount on overdraft that is prearranged',
                                      }),
                                    CMADefinedIndicator: z
                                      .boolean()
                                      .openapi({
                                        description:
                                          'describes that the tiers and bands are set by the CMA order, as opposed to be set by the banks',
                                      }),
                                    EAR: z
                                      .string()
                                      .regex(/^-?\d{1,3}\.\d{1,4}$/)
                                      .exactOptional()
                                      .openapi({ description: 'EAR of the Overdraft Set' }),
                                    FeesAndCharges: z
                                      .array(
                                        z
                                          .strictObject({
                                            FeeChargeAmount: z
                                              .string()
                                              .regex(/^-?\d{1,10}\.\d{1,2}$/)
                                              .exactOptional()
                                              .openapi({ description: 'Charge applied to tier' }),
                                            FeeChargeApplicationFrequency: z
                                              .enum([
                                                'AcademicTerm',
                                                'Daily',
                                                'Weekly',
                                                'Monthly',
                                                'Quarterly',
                                                'Half-Yearly',
                                                'Yearly',
                                                'Overnight',
                                                'Other',
                                              ])
                                              .exactOptional()
                                              .openapi({
                                                description:
                                                  'Frequency with which the rate, or amount is charged',
                                              }),
                                            FeeChargeCalculationFrequency: z
                                              .enum([
                                                'AcademicTerm',
                                                'Daily',
                                                'Weekly',
                                                'Monthly',
                                                'Quarterly',
                                                'Half-Yearly',
                                                'Yearly',
                                                'Overnight',
                                                'Other',
                                              ])
                                              .exactOptional()
                                              .openapi({
                                                description:
                                                  'Frequency with which the rate, or amount is calculated',
                                              }),
                                            FeeChargeOtherApplicationFrequency: z
                                              .strictObject({
                                                Code: z
                                                  .string()
                                                  .length(4)
                                                  .exactOptional()
                                                  .openapi({
                                                    description:
                                                      "Code mnemonic for 'Other' code set value applicable to specified attribute",
                                                  }),
                                                Description: z
                                                  .string()
                                                  .exactOptional()
                                                  .openapi({
                                                    description:
                                                      "Description for 'Other' code set value applicable to specified attribute",
                                                  }),
                                                Name: z
                                                  .string()
                                                  .min(1)
                                                  .max(256)
                                                  .exactOptional()
                                                  .openapi({
                                                    description:
                                                      "Name of 'Other' code set value applicable to specified attribute",
                                                  }),
                                              })
                                              .exactOptional()
                                              .openapi({
                                                description: 'Other Code Type',
                                                required: [],
                                              }),
                                            FeeChargeOtherCalculationFrequency: z
                                              .strictObject({
                                                Code: z
                                                  .string()
                                                  .length(4)
                                                  .exactOptional()
                                                  .openapi({
                                                    description:
                                                      "Code mnemonic for 'Other' code set value applicable to specified attribute",
                                                  }),
                                                Description: z
                                                  .string()
                                                  .exactOptional()
                                                  .openapi({
                                                    description:
                                                      "Description for 'Other' code set value applicable to specified attribute",
                                                  }),
                                                Name: z
                                                  .string()
                                                  .min(1)
                                                  .max(256)
                                                  .exactOptional()
                                                  .openapi({
                                                    description:
                                                      "Name of 'Other' code set value applicable to specified attribute",
                                                  }),
                                              })
                                              .exactOptional()
                                              .openapi({
                                                description: 'Other Code Type',
                                                required: [],
                                              }),
                                            FeeChargeOtherType: z
                                              .strictObject({
                                                Code: z
                                                  .string()
                                                  .length(4)
                                                  .exactOptional()
                                                  .openapi({
                                                    description:
                                                      "Code mnemonic for 'Other' code set value applicable to specified attribute",
                                                  }),
                                                Description: z
                                                  .string()
                                                  .exactOptional()
                                                  .openapi({
                                                    description:
                                                      "Description for 'Other' code set value applicable to specified attribute",
                                                  }),
                                                Name: z
                                                  .string()
                                                  .min(1)
                                                  .max(256)
                                                  .exactOptional()
                                                  .openapi({
                                                    description:
                                                      "Name of 'Other' code set value applicable to specified attribute",
                                                  }),
                                              })
                                              .exactOptional()
                                              .openapi({
                                                description: 'Other Code Type',
                                                required: [],
                                              }),
                                            FeeChargeRate: z
                                              .string()
                                              .regex(/^-?\d{1,3}\.\d{1,4}$/)
                                              .exactOptional()
                                              .openapi({
                                                description: 'Fee charge rate applied to tier',
                                              }),
                                            FeeChargeRateOtherType: z
                                              .strictObject({
                                                Code: z
                                                  .string()
                                                  .length(4)
                                                  .exactOptional()
                                                  .openapi({
                                                    description:
                                                      "Code mnemonic for 'Other' code set value applicable to specified attribute",
                                                  }),
                                                Description: z
                                                  .string()
                                                  .exactOptional()
                                                  .openapi({
                                                    description:
                                                      "Description for 'Other' code set value applicable to specified attribute",
                                                  }),
                                                Name: z
                                                  .string()
                                                  .min(1)
                                                  .max(256)
                                                  .exactOptional()
                                                  .openapi({
                                                    description:
                                                      "Name of 'Other' code set value applicable to specified attribute",
                                                  }),
                                              })
                                              .exactOptional()
                                              .openapi({
                                                description: 'Other Code Type',
                                                required: [],
                                              }),
                                            FeeChargeRateType: z
                                              .enum(['Gross', 'Net', 'Other'])
                                              .exactOptional()
                                              .openapi({ description: 'Rate type other than EAR' }),
                                            FeeChargeType: z
                                              .enum([
                                                'Periodic',
                                                'Minimum',
                                                'Maximum',
                                                'Setup',
                                                'Review',
                                                'Renewal',
                                                'MinimumSetup',
                                                'MaximumSetup',
                                                'Total',
                                                'Item',
                                                'EmergencyLending',
                                                'Other',
                                              ])
                                              .openapi({ description: 'Type of fee or charge' }),
                                          })
                                          .openapi({
                                            description: 'Overdraft Fees Charges',
                                            required: ['FeeChargeType'],
                                          }),
                                      )
                                      .exactOptional()
                                      .openapi({ description: 'Type of fee or charge' }),
                                    Notes: z
                                      .string()
                                      .exactOptional()
                                      .openapi({ description: 'Notes on the Overdraft' }),
                                    OverdraftTierBand: z
                                      .array(
                                        z
                                          .strictObject({
                                            EAR: z
                                              .string()
                                              .regex(/^-?\d{1,3}\.\d{1,4}$/)
                                              .exactOptional()
                                              .openapi({ description: 'EAR of the Tier' }),
                                            FeesAndCharges: z
                                              .array(
                                                z
                                                  .strictObject({
                                                    FeeChargeAmount: z
                                                      .string()
                                                      .regex(/^-?\d{1,10}\.\d{1,2}$/)
                                                      .exactOptional()
                                                      .openapi({
                                                        description: 'Charge applied to tier',
                                                      }),
                                                    FeeChargeApplicationFrequency: z
                                                      .enum([
                                                        'AcademicTerm',
                                                        'Daily',
                                                        'Weekly',
                                                        'Monthly',
                                                        'Quarterly',
                                                        'Half-Yearly',
                                                        'Yearly',
                                                        'Overnight',
                                                        'Other',
                                                      ])
                                                      .exactOptional()
                                                      .openapi({
                                                        description:
                                                          'Frequency with which the rate, or amount is charged',
                                                      }),
                                                    FeeChargeCalculationFrequency: z
                                                      .enum([
                                                        'AcademicTerm',
                                                        'Daily',
                                                        'Weekly',
                                                        'Monthly',
                                                        'Quarterly',
                                                        'Half-Yearly',
                                                        'Yearly',
                                                        'Overnight',
                                                        'Other',
                                                      ])
                                                      .exactOptional()
                                                      .openapi({
                                                        description:
                                                          'Frequency with which the rate, or amount is calculated',
                                                      }),
                                                    FeeChargeOtherApplicationFrequency: z
                                                      .strictObject({
                                                        Code: z
                                                          .string()
                                                          .length(4)
                                                          .exactOptional()
                                                          .openapi({
                                                            description:
                                                              "Code mnemonic for 'Other' code set value applicable to specified attribute",
                                                          }),
                                                        Description: z
                                                          .string()
                                                          .exactOptional()
                                                          .openapi({
                                                            description:
                                                              "Description for 'Other' code set value applicable to specified attribute",
                                                          }),
                                                        Name: z
                                                          .string()
                                                          .min(1)
                                                          .max(256)
                                                          .exactOptional()
                                                          .openapi({
                                                            description:
                                                              "Name of 'Other' code set value applicable to specified attribute",
                                                          }),
                                                      })
                                                      .exactOptional()
                                                      .openapi({
                                                        description: 'Other Code Type',
                                                        required: [],
                                                      }),
                                                    FeeChargeOtherCalculationFrequency: z
                                                      .strictObject({
                                                        Code: z
                                                          .string()
                                                          .length(4)
                                                          .exactOptional()
                                                          .openapi({
                                                            description:
                                                              "Code mnemonic for 'Other' code set value applicable to specified attribute",
                                                          }),
                                                        Description: z
                                                          .string()
                                                          .exactOptional()
                                                          .openapi({
                                                            description:
                                                              "Description for 'Other' code set value applicable to specified attribute",
                                                          }),
                                                        Name: z
                                                          .string()
                                                          .min(1)
                                                          .max(256)
                                                          .exactOptional()
                                                          .openapi({
                                                            description:
                                                              "Name of 'Other' code set value applicable to specified attribute",
                                                          }),
                                                      })
                                                      .exactOptional()
                                                      .openapi({
                                                        description: 'Other Code Type',
                                                        required: [],
                                                      }),
                                                    FeeChargeOtherType: z
                                                      .strictObject({
                                                        Code: z
                                                          .string()
                                                          .length(4)
                                                          .exactOptional()
                                                          .openapi({
                                                            description:
                                                              "Code mnemonic for 'Other' code set value applicable to specified attribute",
                                                          }),
                                                        Description: z
                                                          .string()
                                                          .exactOptional()
                                                          .openapi({
                                                            description:
                                                              "Description for 'Other' code set value applicable to specified attribute",
                                                          }),
                                                        Name: z
                                                          .string()
                                                          .min(1)
                                                          .max(256)
                                                          .exactOptional()
                                                          .openapi({
                                                            description:
                                                              "Name of 'Other' code set value applicable to specified attribute",
                                                          }),
                                                      })
                                                      .exactOptional()
                                                      .openapi({
                                                        description: 'Other Code Type',
                                                        required: [],
                                                      }),
                                                    FeeChargeRate: z
                                                      .string()
                                                      .regex(/^-?\d{1,3}\.\d{1,4}$/)
                                                      .exactOptional()
                                                      .openapi({
                                                        description:
                                                          'Fee charge rate applied to tier',
                                                      }),
                                                    FeeChargeRateOtherType: z
                                                      .strictObject({
                                                        Code: z
                                                          .string()
                                                          .length(4)
                                                          .exactOptional()
                                                          .openapi({
                                                            description:
                                                              "Code mnemonic for 'Other' code set value applicable to specified attribute",
                                                          }),
                                                        Description: z
                                                          .string()
                                                          .exactOptional()
                                                          .openapi({
                                                            description:
                                                              "Description for 'Other' code set value applicable to specified attribute",
                                                          }),
                                                        Name: z
                                                          .string()
                                                          .min(1)
                                                          .max(256)
                                                          .exactOptional()
                                                          .openapi({
                                                            description:
                                                              "Name of 'Other' code set value applicable to specified attribute",
                                                          }),
                                                      })
                                                      .exactOptional()
                                                      .openapi({
                                                        description: 'Other Code Type',
                                                        required: [],
                                                      }),
                                                    FeeChargeRateType: z
                                                      .enum(['Gross', 'Net', 'Other'])
                                                      .exactOptional()
                                                      .openapi({
                                                        description: 'Rate type other than EAR',
                                                      }),
                                                    FeeChargeType: z
                                                      .enum([
                                                        'Periodic',
                                                        'Minimum',
                                                        'Maximum',
                                                        'Setup',
                                                        'Review',
                                                        'Renewal',
                                                        'MinimumSetup',
                                                        'MaximumSetup',
                                                        'Total',
                                                        'Item',
                                                        'EmergencyLending',
                                                        'Other',
                                                      ])
                                                      .openapi({
                                                        description: 'Type of fee or charge',
                                                      }),
                                                  })
                                                  .openapi({
                                                    description: 'Overdraft Fees Charges',
                                                    required: ['FeeChargeType'],
                                                  }),
                                              )
                                              .superRefine((items, ctx) => {
                                                const seen = new Map()
                                                for (const [i, val] of items.entries()) {
                                                  const key = JSON.stringify(val)
                                                  if (seen.has(key))
                                                    ctx.addIssue({ code: 'custom', path: [i] })
                                                  else seen.set(key, i)
                                                }
                                              })
                                              .exactOptional(),
                                            Notes: z
                                              .string()
                                              .exactOptional()
                                              .openapi({ description: 'Notes on the Overdraft' }),
                                            TierBandIdentification: z
                                              .string()
                                              .exactOptional()
                                              .openapi({
                                                description: 'Identification of the tier or band',
                                              }),
                                            TierValueMaximum: z
                                              .string()
                                              .min(1)
                                              .max(15)
                                              .openapi({
                                                description: 'Maximum value of the tier',
                                              }),
                                            TierValueMinimum: z
                                              .string()
                                              .regex(/^-?\d{1,10}\.\d{1,2}$/)
                                              .openapi({
                                                description: 'Minimum value of the tier',
                                              }),
                                          })
                                          .openapi({
                                            description: 'Tiers',
                                            required: ['TierValueMinimum', 'TierValueMaximum'],
                                          }),
                                      )
                                      .exactOptional(),
                                    TierBandSetIdentification: z
                                      .string()
                                      .exactOptional()
                                      .openapi({
                                        description: 'Identification of the set of tiers or bands',
                                      }),
                                  })
                                  .openapi({
                                    description: 'Tier Bandset',
                                    required: ['CMADefinedIndicator', 'ArrangementType'],
                                  }),
                              )
                              .exactOptional()
                              .openapi({ description: 'Overdraft Tier Band Set' }),
                            OverdraftType: z
                              .enum(['Committed', 'OnDemand'])
                              .exactOptional()
                              .openapi({
                                description: 'Defines if the overdraft facility is committed ',
                              }),
                            StartPromotionOrFutureTerms: z
                              .string()
                              .regex(
                                /^[0-9]{4}-(0[1-9]|(1[0|1|2]))-((0[1-9])|((1|2)[0-9])|(30|31))$/,
                              )
                              .exactOptional()
                              .openapi({ description: 'Describes the start date' }),
                            StopPromotionOrFutureTerms: z
                              .string()
                              .regex(
                                /^[0-9]{4}-(0[1-9]|(1[0|1|2]))-((0[1-9])|((1|2)[0-9])|(30|31))$/,
                              )
                              .exactOptional()
                              .openapi({ description: 'Describes the end date' }),
                            Term: z
                              .string()
                              .exactOptional()
                              .openapi({
                                description:
                                  'The duration of the overdraft, if it is non permanent',
                              }),
                          })
                          .openapi({ description: 'Overdraft', required: [] }),
                      )
                      .exactOptional(),
                    OverdraftOffered: z
                      .boolean()
                      .openapi({
                        description: 'Indicates whether an overdraft offered for this account',
                      }),
                    ProductDescription: z
                      .string()
                      .openapi({
                        description:
                          'Description of the product provided by the parent organisation',
                      }),
                    ProductIdentifier: z
                      .string()
                      .openapi({
                        description:
                          'Identifier within the parent organisation for the product. Must be unique in the organisation',
                      }),
                    ProductName: z
                      .string()
                      .exactOptional()
                      .openapi({
                        description:
                          'The name of the product used for marketing purposes from a customer perspective. i.e. what the customer would recognise',
                      }),
                    ProductSegment: z
                      .array(
                        z
                          .enum([
                            'Basic',
                            'Business',
                            'General',
                            'Graduate',
                            'International',
                            'Packaged',
                            'Personal',
                            'Premium',
                            'Reward',
                            'SME',
                            'Student',
                            'YoungAdult',
                            'Youth',
                          ])
                          .openapi({
                            description:
                              'Marketing or industry segment that the product is designed for',
                          }),
                      )
                      .min(1),
                    ProductType: z
                      .literal('PCA')
                      .openapi({ description: 'Descriptive code for the product category' }),
                    ProductURL: z
                      .array(z.url())
                      .min(1)
                      .openapi({
                        description:
                          'URL provided by the organisation which redirects to the product (on live products only). There might be more than one product at a given URL',
                      }),
                    TsandCs: z
                      .array(z.string())
                      .min(1)
                      .openapi({
                        description:
                          'URL provided by the parent organisation which redirects to the current T&Cs',
                      }),
                  })
                  .openapi({
                    description: 'Personal Current Account',
                    required: [
                      'Organisation',
                      'ProductType',
                      'ProductSegment',
                      'InternationalPaymentsSupported',
                      'ProductIdentifier',
                      'CardWithdrawalLimit',
                      'ProductDescription',
                      'TsandCs',
                      'AccessChannels',
                      'CardType',
                      'Contactless',
                      'ChequeBookAvailable',
                      'CreditScoringPartOfAccountOpeningForGettingAnAccount',
                      'ProductURL',
                      'Currency',
                      'OverdraftOffered',
                      'CAPricing',
                      'Eligibility',
                      'CreditInterest',
                      'FeesAndCharges',
                      'Benefits',
                    ],
                  }),
              ),
              meta: z
                .strictObject({
                  Agreement: z.literal(
                    'Use of the APIs and any related data will be subject to the terms of the Open Licence and subject to terms and conditions',
                  ),
                  LastUpdated: z.iso.datetime({ offset: true }),
                  License: z
                    .literal('https://www.openbanking.org.uk/open-licence')
                    .openapi({ description: 'Open Banking License' }),
                  TermsOfUse: z
                    .literal('https://www.openbanking.org.uk/terms')
                    .openapi({ description: 'Open Banking Terms of Use' }),
                  TotalResults: z.int(),
                })
                .openapi({
                  required: ['LastUpdated', 'TotalResults', 'Agreement', 'License', 'TermsOfUse'],
                  title: 'Meta data',
                }),
            })
            .openapi({ required: ['meta', 'data'] }),
        },
      },
      headers: z.object({
        'Cache-Control': {
          description: 'Describes how long this response can be cached',
          schema: z
            .string()
            .default('max-age=28800')
            .exactOptional()
            .openapi({
              description: 'Describes how long this response can be cached',
              param: { required: false },
            }),
        },
        Etag: {
          description: 'A unique ID identifying whether this resource has changed',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'A unique ID identifying whether this resource has changed',
              param: { required: false },
            }),
        },
        'Strict-Transport-Security': {
          description: 'HTTPS strict transport security header',
          schema: z
            .string()
            .default('max-age=31536000')
            .exactOptional()
            .openapi({
              description: 'HTTPS strict transport security header',
              param: { required: false },
            }),
        },
        'X-Content-Type-Options': {
          description:
            'Ensures each page has a content type and prevents browsers from doing MIME type sniffing',
          schema: z
            .string()
            .default('nosniff')
            .exactOptional()
            .openapi({
              description:
                'Ensures each page has a content type and prevents browsers from doing MIME type sniffing',
              param: { required: false },
            }),
        },
        'X-Frame-Options': {
          description: 'Prevent this request from being loaded in any iframes',
          schema: z
            .string()
            .default('DENY')
            .exactOptional()
            .openapi({
              description: 'Prevent this request from being loaded in any iframes',
              param: { required: false },
            }),
        },
      }),
    },
    400: {
      description: 'You have sent a request which could not be understood.',
      content: {
        'application/prs.openbanking.opendata.v1.3+json': {
          schema: z
            .strictObject({
              description: z.literal('You have sent a request which could not be understood.'),
              status: z.literal('400'),
              title: z.literal('Bad request'),
            })
            .openapi({ required: ['status', 'title', 'description'], title: '400 Error object' }),
        },
      },
      headers: z.object({
        'Strict-Transport-Security': {
          description: 'HTTPS strict transport security header',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'HTTPS strict transport security header',
              param: { required: false },
            }),
        },
        'X-Content-Type-Options': {
          description:
            'Ensures each page has a content type and prevents browsers from doing MIME type sniffing',
          schema: z
            .string()
            .default('nosniff')
            .exactOptional()
            .openapi({
              description:
                'Ensures each page has a content type and prevents browsers from doing MIME type sniffing',
              param: { required: false },
            }),
        },
        'X-Frame-Options': {
          description: 'Prevent this request from being loaded in any iframes',
          schema: z
            .string()
            .default('DENY')
            .exactOptional()
            .openapi({
              description: 'Prevent this request from being loaded in any iframes',
              param: { required: false },
            }),
        },
      }),
    },
    408: {
      description: 'Your client has failed to submit a request, and a timeout has occurred.',
      content: {
        'application/prs.openbanking.opendata.v1.3+json': {
          schema: z
            .strictObject({
              description: z.literal(
                'Your client has failed to submit a request, and a timeout has occurred.',
              ),
              status: z.literal('408'),
              title: z.literal('Client timeout'),
            })
            .openapi({ required: ['status', 'title', 'description'], title: '408 Error object' }),
        },
      },
      headers: z.object({
        'Strict-Transport-Security': {
          description: 'HTTPS strict transport security header',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'HTTPS strict transport security header',
              param: { required: false },
            }),
        },
        'X-Content-Type-Options': {
          description:
            'Ensures each page has a content type and prevents browsers from doing MIME type sniffing',
          schema: z
            .string()
            .default('nosniff')
            .exactOptional()
            .openapi({
              description:
                'Ensures each page has a content type and prevents browsers from doing MIME type sniffing',
              param: { required: false },
            }),
        },
        'X-Frame-Options': {
          description: 'Prevent this request from being loaded in any iframes',
          schema: z
            .string()
            .default('DENY')
            .exactOptional()
            .openapi({
              description: 'Prevent this request from being loaded in any iframes',
              param: { required: false },
            }),
        },
      }),
    },
    429: {
      description: 'You have requested this resource too often. Slow down.',
      content: {
        'application/prs.openbanking.opendata.v1.3+json': {
          schema: z
            .strictObject({
              description: z.literal('You have requested this resource too often. Slow down.'),
              status: z.literal('429'),
              title: z.literal('Too many requests'),
            })
            .openapi({ required: ['status', 'title', 'description'], title: '429 Error object' }),
        },
      },
      headers: z.object({
        'Strict-Transport-Security': {
          description: 'HTTPS strict transport security header',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'HTTPS strict transport security header',
              param: { required: false },
            }),
        },
        'X-Content-Type-Options': {
          description:
            'Ensures each page has a content type and prevents browsers from doing MIME type sniffing',
          schema: z
            .string()
            .default('nosniff')
            .exactOptional()
            .openapi({
              description:
                'Ensures each page has a content type and prevents browsers from doing MIME type sniffing',
              param: { required: false },
            }),
        },
        'X-Frame-Options': {
          description: 'Prevent this request from being loaded in any iframes',
          schema: z
            .string()
            .default('DENY')
            .exactOptional()
            .openapi({
              description: 'Prevent this request from being loaded in any iframes',
              param: { required: false },
            }),
        },
      }),
    },
    500: {
      description: 'An error occurred on the server. No further information is available.',
      content: {
        'application/prs.openbanking.opendata.v1.3+json': {
          schema: z
            .strictObject({
              description: z.literal(
                'An error occurred on the server. No further information is available.',
              ),
              status: z.literal('500'),
              title: z.literal('Internal server error'),
            })
            .openapi({ required: ['status', 'title', 'description'], title: '500 Error object' }),
        },
      },
      headers: z.object({
        'Strict-Transport-Security': {
          description: 'HTTPS strict transport security header',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'HTTPS strict transport security header',
              param: { required: false },
            }),
        },
        'X-Content-Type-Options': {
          description:
            'Ensures each page has a content type and prevents browsers from doing MIME type sniffing',
          schema: z
            .string()
            .default('nosniff')
            .exactOptional()
            .openapi({
              description:
                'Ensures each page has a content type and prevents browsers from doing MIME type sniffing',
              param: { required: false },
            }),
        },
        'X-Frame-Options': {
          description: 'Prevent this request from being loaded in any iframes',
          schema: z
            .string()
            .default('DENY')
            .exactOptional()
            .openapi({
              description: 'Prevent this request from being loaded in any iframes',
              param: { required: false },
            }),
        },
      }),
    },
    503: {
      description: 'The service is temporarily unavailable.',
      content: {
        'application/prs.openbanking.opendata.v1.3+json': {
          schema: z
            .strictObject({
              description: z.literal('The service is temporarily unavailable.'),
              status: z.literal('503'),
              title: z.literal('Service temporarily unavailable'),
            })
            .openapi({ required: ['status', 'title', 'description'], title: '503 Error object' }),
        },
      },
      headers: z.object({
        'Strict-Transport-Security': {
          description: 'HTTPS strict transport security header',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'HTTPS strict transport security header',
              param: { required: false },
            }),
        },
        'X-Content-Type-Options': {
          description:
            'Ensures each page has a content type and prevents browsers from doing MIME type sniffing',
          schema: z
            .string()
            .default('nosniff')
            .exactOptional()
            .openapi({
              description:
                'Ensures each page has a content type and prevents browsers from doing MIME type sniffing',
              param: { required: false },
            }),
        },
        'X-Frame-Options': {
          description: 'Prevent this request from being loaded in any iframes',
          schema: z
            .string()
            .default('DENY')
            .exactOptional()
            .openapi({
              description: 'Prevent this request from being loaded in any iframes',
              param: { required: false },
            }),
        },
      }),
    },
    default: {
      description: 'A standard error response.',
      content: {
        'application/prs.openbanking.opendata.v1.3+json': {
          schema: z
            .strictObject({
              description: z
                .string()
                .openapi({ description: 'Further details describing the error' }),
              status: z
                .string()
                .openapi({ description: 'This corresponds to the HTTP status code' }),
              title: z.string().openapi({ description: 'A short title of the type of error' }),
            })
            .openapi({ required: ['status', 'title', 'description'], title: 'Error object' }),
        },
      },
      headers: z.object({
        'Strict-Transport-Security': {
          description: 'HTTPS strict transport security header',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'HTTPS strict transport security header',
              param: { required: false },
            }),
        },
        'X-Content-Type-Options': {
          description:
            'Ensures each page has a content type and prevents browsers from doing MIME type sniffing',
          schema: z
            .string()
            .default('nosniff')
            .exactOptional()
            .openapi({
              description:
                'Ensures each page has a content type and prevents browsers from doing MIME type sniffing',
              param: { required: false },
            }),
        },
        'X-Frame-Options': {
          description: 'Prevent this request from being loaded in any iframes',
          schema: z
            .string()
            .default('DENY')
            .exactOptional()
            .openapi({
              description: 'Prevent this request from being loaded in any iframes',
              param: { required: false },
            }),
        },
      }),
    },
  },
})

export const headPersonalCurrentAccountsRoute = createRoute({
  method: 'head',
  path: '/personal-current-accounts',
  tags: ['PCA'],
  description: 'Gets header information on the current set of `Personal Current Account` data',
  request: {
    headers: z.object({
      'If-Modified-Since': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Used for conditional request, to retrieve data only if modified since a given date',
            in: 'header',
            name: 'If-Modified-Since',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'If-None-Match': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Used for conditional request, to retrieve data only if the given Etag value does not match',
            in: 'header',
            name: 'If-None-Match',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    default: {
      description: 'No response',
      content: {
        'application/prs.openbanking.opendata.v1.3+json': {
          schema: z.object({}).openapi({ title: 'No response' }),
        },
      },
    },
  },
})

export const getUnsecuredSmeLoansRoute = createRoute({
  method: 'get',
  path: '/unsecured-sme-loans',
  tags: ['SME'],
  description: 'Gets a list of all `Unsercured SME Lending` objects.',
  request: {
    headers: z.object({
      'If-Modified-Since': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Used for conditional request, to retrieve data only if modified since a given date',
            in: 'header',
            name: 'If-Modified-Since',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'If-None-Match': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Used for conditional request, to retrieve data only if the given Etag value does not match',
            in: 'header',
            name: 'If-None-Match',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response with a list of `Unsecured SME Lending` data',
      content: {
        'application/prs.openbanking.opendata.v1.3+json': {
          schema: z
            .strictObject({
              data: z.array(
                z
                  .strictObject({
                    ArrearsTreatment: z
                      .string()
                      .exactOptional()
                      .openapi({ description: 'Arrears treatment' }),
                    Benefits: z
                      .strictObject({
                        Benefit: z
                          .boolean()
                          .openapi({ description: 'Describe  one or more benefits if they exist' }),
                        BenefitGroup: z
                          .array(
                            z
                              .strictObject({
                                BenefitItem: z
                                  .strictObject({
                                    BenefitDetail: z
                                      .array(
                                        z
                                          .strictObject({
                                            BenefitDescription: z
                                              .string()
                                              .exactOptional()
                                              .openapi({
                                                description:
                                                  'A textual explanation of what the benefit is',
                                              }),
                                            BenefitID: z
                                              .string()
                                              .exactOptional()
                                              .openapi({
                                                description:
                                                  'Unique benefit identifier per organisation',
                                              }),
                                            BenefitName: z
                                              .string()
                                              .exactOptional()
                                              .openapi({ description: 'The name of the benefit' }),
                                            BenefitType: z
                                              .string()
                                              .exactOptional()
                                              .openapi({
                                                description:
                                                  'Type that represents the nature of the benefit',
                                              }),
                                            BenefitValue: z
                                              .string()
                                              .exactOptional()
                                              .openapi({
                                                description:
                                                  'The value or values permissible for a specific benefit for an individual product representing a product characteristic',
                                              }),
                                            Counter: z
                                              .int()
                                              .exactOptional()
                                              .openapi({
                                                description:
                                                  'Counter for the criteria (e.g. number of DD)',
                                              }),
                                            CriteriaType: z
                                              .array(
                                                z
                                                  .enum([
                                                    'CashDeposit',
                                                    'Deposit',
                                                    'DirectDebit',
                                                    'InitialDeposit',
                                                    'InternetLogon',
                                                    'MobileLogon',
                                                    'RegularDeposit',
                                                  ])
                                                  .openapi({
                                                    description:
                                                      'Criteria that is required in order to be eligible for the Benefit',
                                                  }),
                                              )
                                              .exactOptional(),
                                            DefaultToAccounts: z
                                              .boolean()
                                              .exactOptional()
                                              .openapi({
                                                description:
                                                  'Is the benefit part of the default account',
                                              }),
                                            MaximumCriteria: z
                                              .string()
                                              .regex(/^-?\d{1,10}\.\d{1,2}$/)
                                              .exactOptional()
                                              .openapi({
                                                description: 'Maximum amount for the criteria',
                                              }),
                                            MinimumCriteria: z
                                              .string()
                                              .regex(/^-?\d{1,10}\.\d{1,2}$/)
                                              .exactOptional()
                                              .openapi({
                                                description: 'Minimum amount for the criteria',
                                              }),
                                            PromotionEndDate: z
                                              .string()
                                              .regex(
                                                /^[0-9]{4}-(0[1-9]|(1[0|1|2]))-((0[1-9])|((1|2)[0-9])|(30|31))$/,
                                              )
                                              .exactOptional()
                                              .openapi({
                                                description:
                                                  'If the benefit is temporal the end date is when the benefit is no longer applicable',
                                              }),
                                            PromotionStartDate: z
                                              .string()
                                              .regex(
                                                /^[0-9]{4}-(0[1-9]|(1[0|1|2]))-((0[1-9])|((1|2)[0-9])|(30|31))$/,
                                              )
                                              .exactOptional()
                                              .openapi({
                                                description:
                                                  'If the benefit is temporal the start date is when the benefit comes into effect',
                                              }),
                                          })
                                          .openapi({ description: 'Benefit detail', required: [] }),
                                      )
                                      .exactOptional(),
                                    DateOfChange: z
                                      .string()
                                      .regex(
                                        /^[0-9]{4}-(0[1-9]|(1[0|1|2]))-((0[1-9])|((1|2)[0-9])|(30|31))$/,
                                      )
                                      .exactOptional()
                                      .openapi({
                                        description:
                                          'Date of the change if it refers to future terms',
                                      }),
                                    LengthPromotionalInDays: z
                                      .int()
                                      .exactOptional()
                                      .openapi({
                                        description:
                                          'Describes the length if only a duration is given instead of a date in days',
                                      }),
                                    StartPromotionOrFutureTerms: z
                                      .string()
                                      .regex(
                                        /^[0-9]{4}-(0[1-9]|(1[0|1|2]))-((0[1-9])|((1|2)[0-9])|(30|31))$/,
                                      )
                                      .exactOptional()
                                      .openapi({ description: 'Describes the start date' }),
                                    StopPromotionOrFutureTerms: z
                                      .string()
                                      .regex(
                                        /^[0-9]{4}-(0[1-9]|(1[0|1|2]))-((0[1-9])|((1|2)[0-9])|(30|31))$/,
                                      )
                                      .exactOptional()
                                      .openapi({ description: 'Describes the end date' }),
                                  })
                                  .openapi({ description: 'Benefit Item', required: [] }),
                                BenefitSubType: z
                                  .enum(['FutureMultipleTerms', 'Promotional', 'Regular'])
                                  .exactOptional()
                                  .openapi({ description: 'Benefit Subtype Code' }),
                              })
                              .openapi({
                                description: 'Benefit Interest Group',
                                required: ['BenefitItem'],
                              }),
                          )
                          .exactOptional(),
                      })
                      .openapi({ description: 'Benefit', required: ['Benefit'] }),
                    Currency: z
                      .array(
                        z
                          .string()
                          .regex(/[A-Z]{3}/)
                          .openapi({ description: 'Active or Historic Currency Code' }),
                      )
                      .min(1)
                      .openapi({
                        description: 'Currency of the Account. Default to GBP at present',
                      }),
                    CustomerAccessChannels: z
                      .array(
                        z
                          .enum([
                            'Branch',
                            'MobileBankingApp',
                            'Online',
                            'Phone',
                            'Post',
                            'PostOffice',
                            'Text',
                          ])
                          .openapi({ description: '' }),
                      )
                      .min(1)
                      .openapi({ description: 'Ways to interact with the bank' }),
                    Eligibility: z
                      .strictObject({
                        AgeRestricted: z
                          .boolean()
                          .openapi({
                            description:
                              "Indicates a customer's age is part of eligibility criteria",
                          }),
                        AnnualBusinessTurnover: z
                          .string()
                          .regex(/^-?\d{1,10}\.\d{1,2}$/)
                          .exactOptional()
                          .openapi({ description: 'Annual Business Turnover' }),
                        AnnualBusinessTurnoverCurrency: z
                          .string()
                          .regex(/[A-Z]{3}/)
                          .exactOptional()
                          .openapi({ description: 'Annual Business Turnover Currency' }),
                        Description: z
                          .string()
                          .openapi({ description: 'One paragraph detailing the eligibility' }),
                        EligibilityName: z
                          .string()
                          .exactOptional()
                          .openapi({
                            description:
                              'Free text description, denotes non standard eligibilities not included in the code list',
                          }),
                        EligibilityNotes: z
                          .string()
                          .exactOptional()
                          .openapi({
                            description:
                              'Optional additional notes to supplement the eligibility conditions. Only used for very specific conditions',
                          }),
                        EligibilityType: z
                          .enum([
                            'AnyBusinessCustomer',
                            'BusinessOnly',
                            'CreditCard',
                            'CreditScoring',
                            'EmailAddress',
                            'ExistingCustomers',
                            'IdAndV',
                            'Mortgage',
                            'NoArrearsOnLoan',
                            'NoCustomerInArrears',
                            'NoOverOverdraftThirtyDays',
                            'NoSoleUkAccountOrBankrupt',
                            'NTB',
                            'NTBBusiness',
                            'SoleStudentAccount',
                            'SoleUkAccount',
                            'StudentsOnly',
                            'TwoMonthsOfCourseStart',
                            'UCASFulltimeTwoYears',
                          ])
                          .exactOptional()
                          .openapi({ description: 'Eligibility type' }),
                        IncomeCondition: z
                          .string()
                          .exactOptional()
                          .openapi({
                            description:
                              'Stipulates any particular definition of income that applies to the income eligibility and/or method by which income must paid into the account (eg Salary DD)',
                          }),
                        IncomeTurnoverRelated: z
                          .boolean()
                          .openapi({ description: 'Indicates if eligibility linked to income' }),
                        MarketingEligibility: z
                          .array(
                            z
                              .enum([
                                'ExistingCustomers',
                                'NewCustomersOnly',
                                'SwitchersOnly',
                                'StartUp',
                              ])
                              .openapi({ description: 'Specific eligibility for marketing' }),
                          )
                          .superRefine((items, ctx) => {
                            const seen = new Map()
                            for (const [i, val] of items.entries()) {
                              const key = JSON.stringify(val)
                              if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
                              else seen.set(key, i)
                            }
                          })
                          .exactOptional(),
                        MaxNumberOfAccounts: z
                          .string()
                          .exactOptional()
                          .openapi({
                            description: 'Maximum number of the same prodcut the customer may hold',
                          }),
                        MaximumAge: z
                          .int()
                          .exactOptional()
                          .openapi({
                            description: 'Maximum age, in years, allowed to hold the account',
                          }),
                        MaximumAgeToOpen: z
                          .int()
                          .exactOptional()
                          .openapi({ description: 'Maximum age, in years, to open an account' }),
                        MaximumOpeningAmount: z
                          .boolean()
                          .exactOptional()
                          .openapi({ description: 'A maximum amount to be deposited at opening' }),
                        MinIncomeTurnoverPaidIntoAccount: z
                          .int()
                          .exactOptional()
                          .openapi({
                            description: 'Minimum Income Amount required to paid into the account',
                          }),
                        MinimumAge: z
                          .int()
                          .exactOptional()
                          .openapi({
                            description: 'Minimum age, in years, required to hold an account',
                          }),
                        MinimumDeposit: z
                          .boolean()
                          .exactOptional()
                          .openapi({
                            description: 'A minimum deposit required to hold this account',
                          }),
                        MinimumIncomeFrequency: z
                          .enum([
                            'AcademicTerm',
                            'HalfYearly',
                            'Monthly',
                            'Quarterly',
                            'Weekly',
                            'Yearly',
                          ])
                          .exactOptional()
                          .openapi({
                            description:
                              'The frequency that the minimum mentioned before is deposited in the account. Yearly is very important for premium accounts',
                          }),
                        MinimumIncomeTurnoverAmount: z
                          .string()
                          .regex(/^-?\d{1,10}\.\d{1,2}$/)
                          .exactOptional()
                          .openapi({
                            description: 'Minimum income / Turnover required to hold the product',
                          }),
                        MinimumIncomeTurnoverCurrency: z
                          .string()
                          .regex(/[A-Z]{3}/)
                          .exactOptional()
                          .openapi({ description: 'Minimum income / Turnover Currency' }),
                        MinimumOperatingBalance: z
                          .string()
                          .regex(/^-?\d{1,10}\.\d{1,2}$/)
                          .exactOptional()
                          .openapi({ description: 'Minimum Operating Balance' }),
                        MinimumOperatingBalanceCurrency: z
                          .string()
                          .regex(/[A-Z]{3}/)
                          .exactOptional()
                          .openapi({ description: 'Minimum Operating Balance currency' }),
                        MinimumOperatingBalanceExists: z
                          .boolean()
                          .exactOptional()
                          .openapi({ description: 'Is there a Minimum Operating Balance?' }),
                        OpeningDepositMaximumAmount: z
                          .string()
                          .regex(/^-?\d{1,10}\.\d{1,2}$/)
                          .exactOptional()
                          .openapi({ description: 'Maximum Amount to be depositing at opening' }),
                        OpeningDepositMaximumCurrency: z
                          .string()
                          .regex(/[A-Z]{3}/)
                          .exactOptional()
                          .openapi({
                            description:
                              'The currency of the Minimum Amount to be depositing at opening',
                          }),
                        OpeningDepositMinimum: z
                          .string()
                          .regex(/^-?\d{1,10}\.\d{1,2}$/)
                          .exactOptional()
                          .openapi({ description: 'Minimum Amount to be held on account' }),
                        OpeningDepositMinimumCurrency: z
                          .string()
                          .regex(/[A-Z]{3}/)
                          .exactOptional()
                          .openapi({
                            description:
                              'The currency of the Minimum Amount to be depositing at opening',
                          }),
                        OtherFinancialHoldingRequired: z
                          .boolean()
                          .openapi({
                            description:
                              'Indicates that it is necessary to hold another product with the bank in order to be eligible for this product or feature',
                          }),
                        PreviousBankruptcy: z
                          .boolean()
                          .openapi({
                            description:
                              'Describes if a previous bankruptcy / insolvency disqualfies for this account Details in ELI-280',
                          }),
                        ResidencyRestricted: z
                          .boolean()
                          .openapi({
                            description:
                              "Indicates a customer's residency forms part of the eligibility criteria",
                          }),
                        ResidencyRestrictedRegion: z
                          .enum([
                            'UK',
                            'EEA',
                            'EU',
                            'EFTA',
                            'GB - ENG',
                            'GB - NIR',
                            'GB - SCT',
                            'GB - WLS',
                            'IRL',
                          ])
                          .exactOptional()
                          .openapi({
                            description:
                              'Indicates a customer must be current resident of a geographic area/country',
                          }),
                        SingleJointIncome: z
                          .enum(['Joint', 'SoleIncome', 'SoleOrJoint', 'Turnover'])
                          .exactOptional()
                          .openapi({
                            description:
                              'Minimum Income Source. For certain products a minimum income is required. This can be mandated as to the single income or to a joint income. This field describes this',
                          }),
                        ThirdSectorOrganisations: z
                          .boolean()
                          .openapi({
                            description:
                              'Is the product available to operate as a Clubs or Societies account?',
                          }),
                      })
                      .openapi({
                        description: 'Eligibility',
                        required: [
                          'AgeRestricted',
                          'OtherFinancialHoldingRequired',
                          'Description',
                          'IncomeTurnoverRelated',
                          'ResidencyRestricted',
                          'ThirdSectorOrganisations',
                          'PreviousBankruptcy',
                        ],
                      }),
                    FeesAndCharges: z
                      .array(
                        z
                          .strictObject({
                            Fees: z
                              .strictObject({
                                DateOfChange: z
                                  .string()
                                  .regex(
                                    /^[0-9]{4}-(0[1-9]|(1[0|1|2]))-((0[1-9])|((1|2)[0-9])|(30|31))$/,
                                  )
                                  .exactOptional()
                                  .openapi({
                                    description: 'Date of the change if it refers to future terms',
                                  }),
                                FeeDetails: z
                                  .array(
                                    z
                                      .strictObject({
                                        FeeDetail: z
                                          .strictObject({
                                            DateOfChange: z
                                              .string()
                                              .regex(
                                                /^[0-9]{4}-(0[1-9]|(1[0|1|2]))-((0[1-9])|((1|2)[0-9])|(30|31))$/,
                                              )
                                              .exactOptional()
                                              .openapi({
                                                description:
                                                  'Date of the change if it refers to future terms',
                                              }),
                                            FeeSubDetails: z
                                              .strictObject({
                                                FeeAmount: z
                                                  .string()
                                                  .regex(/^-?\d{1,10}\.\d{1,2}$/)
                                                  .exactOptional()
                                                  .openapi({ description: 'Fee in GBP' }),
                                                FeeFrequency: z
                                                  .enum([
                                                    'AcademicTerm',
                                                    'AccountClosing',
                                                    'AccountOpening',
                                                    'AtTimeOfLoanRepayment',
                                                    'ChargingPeriod',
                                                    'Daily',
                                                    'EveryFiveBusinessDays',
                                                    'Item',
                                                    'Monthly',
                                                    'OnAccountAnniversary',
                                                    'PerHour',
                                                    'PerOccurrence',
                                                    'PerSheet',
                                                    'PerTransactionAmount',
                                                    'PerTransactionPercentage',
                                                    'Quarterly',
                                                    'SixMonthly',
                                                    'StartOfLoan',
                                                    'StatementMonthly',
                                                    'Weekly',
                                                    'Yearly',
                                                  ])
                                                  .openapi({
                                                    description: 'Triggering frequency of the fee',
                                                  }),
                                                FeeHigherTier: z
                                                  .int()
                                                  .exactOptional()
                                                  .openapi({
                                                    description:
                                                      'Higher occurrence / range boundary e.g. For returned cheques this could be 10, which means the first 10 returned cheque fits into this range',
                                                  }),
                                                FeeLowerTier: z
                                                  .int()
                                                  .exactOptional()
                                                  .openapi({
                                                    description:
                                                      'Lower occurrence / range boundary e.g. For returned cheques this could be 0, which means the first returned cheque fits into this range',
                                                  }),
                                                FeeMax: z
                                                  .string()
                                                  .regex(/^-?\d{1,10}\.\d{1,2}$/)
                                                  .exactOptional()
                                                  .openapi({ description: 'Fee in GBP' }),
                                                FeeMin: z
                                                  .string()
                                                  .regex(/^-?\d{1,10}\.\d{1,2}$/)
                                                  .exactOptional()
                                                  .openapi({ description: 'Fee in GBP' }),
                                                FeeRate: z
                                                  .string()
                                                  .regex(/^-?\d{1,3}\.\d{1,4}$/)
                                                  .exactOptional()
                                                  .openapi({ description: '% Rate' }),
                                                FeesAndChargesNotes: z
                                                  .string()
                                                  .exactOptional()
                                                  .openapi({
                                                    description:
                                                      'Supplementary information for fees and charges',
                                                  }),
                                                Negotiable: z
                                                  .boolean()
                                                  .openapi({
                                                    description:
                                                      'Indicates that this Fee Rate or Fee Amount is negotiable based on risk or other factor',
                                                  }),
                                                RepresentativeRate: z
                                                  .string()
                                                  .regex(/^-?\d{1,3}\.\d{1,4}$/)
                                                  .exactOptional()
                                                  .openapi({ description: 'Representative Rate' }),
                                              })
                                              .openapi({
                                                description: 'Fee Sub Details',
                                                required: ['FeeFrequency', 'Negotiable'],
                                              }),
                                            FeeType: z
                                              .enum([
                                                'Other',
                                                'ATMDonation',
                                                'ATMDeposATMPaidIn',
                                                'ReportCertBalance',
                                                'ATMAbroadConVisaCredit',
                                                'ATMAbroadConVisaDebit',
                                                'ATMCardnetEnvIn',
                                                'ATMCashGroupATMCreditCard',
                                                'ATMCashNonGroupATMCredittcard',
                                                'ATMCashGroupATMDebitCard',
                                                'ATMCashNonGroupATMDebitcard',
                                                'ATMConGroupATM',
                                                'ATMAbroad',
                                                'ATMForeignCashDebCard',
                                                'ATMAbroadGoldVisaDebit',
                                                'ATMSpainCashCard',
                                                'ATMSpainDebitCard',
                                                'ATMSpainConversionDebitCard',
                                                'ATMSpainConversionCashCard',
                                                'ATMNonSterlingWithdrawal',
                                                'ATMAbroadVisaCredit',
                                                'ATMAbroadVisaDebit',
                                                'ATMAbroadConVisaGoldDebit',
                                                'ATMWidthdrawCash',
                                                'BACSOnLineAncilliary',
                                                'BACSBatch',
                                                'BACSOnLineFile',
                                                'BACSFileItem',
                                                'BACSOnLineSetup ',
                                                'BACSItem',
                                                'BACSItemInterbranch',
                                                'BACSBulkBatch',
                                                'BACSOnLineOverlimit',
                                                'BACSOnLinePayment',
                                                'BACSRecallItem',
                                                'BACSOnLineService',
                                                'BACSBulkInternet',
                                                'BACSTELDirDebSmartCard',
                                                'BACSTELDirDebWebInit',
                                                'BACSTELirDebWebInit',
                                                'BACSTELDirDebOverlimit',
                                                'BACSTELDirDebPayment',
                                                'BACSTELDirDebService',
                                                'BACSTELDirDebAncilliary',
                                                'BACSDirectItemProfile',
                                                'BACSTELAncilliary',
                                                'BACSTELSmartCard',
                                                'BACSTELFile',
                                                'BACSTELSetup ',
                                                'BACSTELOverlimit',
                                                'BACSTELPayment',
                                                'BACSTELService',
                                                'CHAPSOutBranch',
                                                'CHAPSCancellation',
                                                'CHAPSOutOnlineDepositAcc',
                                                'CHAPSIn',
                                                'CHAPSOutInterBank',
                                                'CHAPSInterBank',
                                                'CHAPSOutPost',
                                                'CHAPSOutInterBranch',
                                                'CHAPSOut',
                                                'CHAPSOutOnline',
                                                'CHAPSandForeignPay',
                                                'CHAPSOutManual',
                                                'CardCardReplacement',
                                                'DraftsCounter',
                                                'DraftsBankers',
                                                'DraftsIntlPayableAbroad',
                                                'DraftsLostStolen',
                                                'CardPersonalisedCard',
                                                'DraftsIntlStoppedCancelled',
                                                'EuroChqXLess',
                                                'EuroChqXPlus',
                                                'FPSOutFutureDated',
                                                'FPSOutImmediate',
                                                'FPSOut',
                                                'FPSOutOwn',
                                                'FPSInBranch',
                                                'FPSUKPayUrgent',
                                                'LegalArticlesReport',
                                                'LegalSealing',
                                                'LegalBondAndGuarantee',
                                                'LegalCourtOrder',
                                                'LegalCoSearch',
                                                'LegalDepositAssignment',
                                                'LegalGuaranteePrep',
                                                'LegalLifePolicyPrepCo',
                                                'LegalLifePolicyPrepPersonal',
                                                'LegalPriorityPariPassu',
                                                'LegalSubordinationAgreement',
                                                'DirDebDirectDebitAdmin',
                                                'DirDebDirectDebitCancel',
                                                'IntlPayBIBForeignLimit',
                                                'IntlPayCreditTransCust',
                                                'IntlPayCreditTransNonCust',
                                                'IntlPayUrgentPaymentForeign',
                                                'IntlPayExpressMoneyMover',
                                                'IntlPayEEAPayUrgent',
                                                'IntlPayIrishPayUrgent',
                                                'IntlPayEEAPay',
                                                'IntlPayForeignIn1CPlus',
                                                'IntlPayForeignPaymentInUKAcc',
                                                'IntlPayForeignCharge',
                                                'IntlPayForeignCancellation',
                                                'IntlPayForeignStandardEUEuroBIC',
                                                'IntlPayFXFeeRate',
                                                'IntlPayForeignInternet',
                                                'IntlPayForeign',
                                                'IntlPayForeignInbound',
                                                'IntlPayFXPaymentOut',
                                                'IntlPayForeignInSub1C',
                                                'IntlPayFXRate',
                                                'IntlPayForeignStandardEUEuroNoBIC',
                                                'IntlPayFXPaymentOutIR',
                                                'IntlPayFXFee',
                                                'IntlPayPurchaseNonSterling',
                                                'IntlPayPostPaymentForeign',
                                                'IntlPayPurchaseRateNonSterling',
                                                'IntlPayPaymentTracing',
                                                'IntlPayStandardMoneyMover',
                                                'IntlPayMT101Transaction',
                                                'IntlPayTransNonSterling',
                                                'IntlPayTransRateNonSterling',
                                                'IntlPayForeignUrgentEUEuroBIC',
                                                'IntlPayForeignUrgentEUEuroNoBIC',
                                                'IntlPayUrgentPaymentGroup',
                                                'IntlPayUrgentPaymentUK',
                                                'IntlPayUSAPayUrgent',
                                                'IntlPayCurrencyPurchase',
                                                'IntlPayWorldpayPayment',
                                                'IntlPayCurrencyWithdraw',
                                                'InvPayBankDetailsWrong',
                                                'InvPayForeignBCNR',
                                                'InvPayForeignRecall',
                                                'InvGeneralInq',
                                                'InvOldInstruction',
                                                'InvPayPaymentRecall',
                                                'InvPayReturnDebitXVLess',
                                                'InvPayReturnDebitXVPlus',
                                                'InvPayStopPayment',
                                                'InvPayStandingOrdUnpaid',
                                                'SafeKeepAccess',
                                                'SafeKeepDeedMedium',
                                                'SafeKeepingEnvelope',
                                                'SafeKeepingInspection',
                                                'SafeKeepingLargeItem',
                                                'SafeKeepMultipleItems',
                                                'SafeKeepingParcel',
                                                'SafeKeepDeedSmall',
                                                'SafeKeepOneItem',
                                                'SafeKeepSafeCustody',
                                                'LoanArrangementFeePC',
                                                'LoanArrangement',
                                                'LoanEarlyRepayment',
                                                'LoanLatePayment',
                                                'LoanSMEUnsecuredLoan',
                                                'LoanTieredArrangement',
                                                'NightSafeNightSafeBankOpen',
                                                'NightSafeCreditSub5K',
                                                'NightSafeNightSafe',
                                                'NightSafeNightSafePaidIn',
                                                'OverdraftAnnualReview',
                                                'OverdraftTempOverdraft',
                                                'OverdraftUnauthorisedBorrowing',
                                                'POPostOfficeCounterCredit',
                                                'POPostOfficeCashCredit',
                                                'POPostOfficeCashOut',
                                                'POPostOfficeWithdrawal',
                                                'ChqBookTheftLossAllStopped',
                                                'ChqIssuedCurrencyAcc',
                                                'ChqCopy',
                                                'ChqDraft',
                                                'ChqIn',
                                                'ChqDraftSterling',
                                                'ChqOutIssued',
                                                'ChqSpecialChqPresentation',
                                                'ChqCounterCheque',
                                                'ChqChequeswithStatement',
                                                'ChqStopped',
                                                'ChqTrans',
                                                'ChqDraftFX',
                                                'ChqForeignCourier',
                                                'ChqForeignNegTenThou',
                                                'ChqForeignNegHundred',
                                                'ChequeForeignBankDivi',
                                                'ChqForeignNegFiftyThou',
                                                'ChqPensionCheque',
                                                'ChequeForeignOtherDivi',
                                                'ChqForeignNegFiveThou',
                                                'ChqForeignNegMax',
                                                'ChqForeignGBPMMDPlus',
                                                'ChqGiftCheque',
                                                'ChqCounterLodgement',
                                                'ChqCashDropLodgement',
                                                'ChqChequePhotocopy',
                                                'ChqPostOfficeCredit',
                                                'ChqPostOfficeChequeCollected',
                                                'ChqChequeRetrieval',
                                                'ChqReconcilliationPerTrans',
                                                'ChqSpecialPresentationCount',
                                                'ChqSpecialPresentationPTT',
                                                'ChqUnpaidCharge',
                                                'ChqUnpaidTransIn',
                                                'ChqUnpaidTransOut',
                                                'ChqUnpaidCheque',
                                                'ReportAuditLetter',
                                                'ReportFAXAdviceAdditional',
                                                'ReportTelAdviceAdditional',
                                                'ReportCreditHistory',
                                                'ReportCertInterestDuplicate',
                                                'ReportCertInterest',
                                                'ReportCreditHistoryAdditionalInYear',
                                                'ReportForeignStatusEnqElec',
                                                'ReportForeignStatusEnq',
                                                'ReportCashBackorInterestAnal',
                                                'ReportStatementChqDaily',
                                                'ReportStatementChqFortnightly',
                                                'ReportStatementChqMonthly',
                                                'ReportStatementChqWeekly',
                                                'ReportStatementAndDiviChq',
                                                'ReportReference',
                                                'ReportReferralItem',
                                                'ReportStatementByATM',
                                                'ReportStatementByBranch',
                                                'ReportStatementCopyRegular',
                                                'ReportStatusEnquiry',
                                                'ReportStatementFrequent',
                                                'ReportStatementMonthly',
                                                'ReportStatementCopy1',
                                                'ReportStatementToBranch',
                                                'ReportSMSTextMiniStatementorAlert',
                                                'ReportStatementFortnightly',
                                                'ReportSMSTextMiniStatementWoM',
                                                'ReportSMSTextAlertBalance',
                                                'ReportSMSTextAlert',
                                                'ReportTaxCert',
                                                'ReportWeeklyStatement',
                                                'ReportTextMessageBanking',
                                                'SEPACancellation',
                                                'SEPABranch',
                                                'SEPACredit',
                                                'SEPADirectDebit',
                                                'SEPAIn',
                                                'SEPAEuro',
                                                'SEPAOut',
                                                'SEPAUnpaid',
                                                'SEPAWinbitsAnnual Service',
                                                'SEPAWinbitsTransaction',
                                                'TransBillPaymentBranch',
                                                'TransBillCollect',
                                                'TransTelephoneBillPayment',
                                                'TransBankPayment',
                                                'TransBillPaymentTelephone',
                                                'TransCorrespondentBankFee',
                                                'TransCreditTransferUKDifferent',
                                                'TransCreditTransferUKSame',
                                                'TransCredit',
                                                'TransCreditTransfer',
                                                'TransBranchCredit',
                                                'TransDebit',
                                                'TransDebCardDeb',
                                                'TransUKDirDeb',
                                                'TransManualDeb',
                                                'TransBuyForeignWithGBP',
                                                'TransGoodValueReq',
                                                'TransSWIFTOutUKForeign',
                                                'TransInconpleteInstruction',
                                                'TransManualEntries',
                                                'TransManualTrans',
                                                'TransNonSterling',
                                                'TransPOSSaleForeign',
                                                'TransPriPaymentPost',
                                                'TransPOSSaleUK',
                                                'TransReturnPayment',
                                                'TransReconciliationPerTrans',
                                                'TransStandingOrdAdmin',
                                                'TransStandingOrd',
                                                'TransStandingOrdManPay',
                                                'TransTravellersChqOtherBank',
                                                'TransTelBusiPriPaymentForeignToUKAcc',
                                                'TransTeleItem',
                                                'TransTelBusiPriPaymentToGrpAcc',
                                                'TransTravellersChqRate',
                                                'TransTransferExGroup',
                                                'TransUnauthorisedPaidTrans',
                                                'TransUrgentPaymentPostal',
                                                'TransUnpaidTrans',
                                                'TransTelBusiPriPaymentToNonGrpAcc',
                                                'TransSWIFTOutNonEEASterling',
                                                'AutoAutoCredit',
                                                'AutoAutomatedEntries',
                                                'AutoAutoCreditPhoneInet',
                                                'AutoAutomatedTrans',
                                                'AutoDebitCardCommercial',
                                                'AutoFPSAutoCredit',
                                                'VisaConvertAbroadForeign',
                                                'VisaBureauDeChange',
                                                'VisaTravellersChqorCurrency',
                                                'OnlineInternetBillPayment',
                                                'OnlineBusinessOnlineEuroPayment',
                                                'OnlineBusinessOnlineUrgentEuroPayment',
                                                'OnlineBusinessOnlineForeignPayment',
                                                'OnlineInterbankTransfer',
                                                'OnlineInterbankPerTransfer',
                                                'OnlineInterbranchTransfer',
                                                'OnlineInterbranchPerTransfer',
                                                'OnlineSubscriptionMonthly',
                                                'OnlineBankingPayment',
                                                'OnlineBankingSubscription',
                                                'OnlinePOSSale',
                                                'OnlinePersonalCustAncillarys',
                                                'OnlinePersonalCustService',
                                                'OnlinePersonalCustOverlimits',
                                                'OnlineReplacementCardReader',
                                                'OnlinePersonalCustSetUp',
                                                'OnlinePersonalCustTransaction',
                                                'OnlinePaymentinGBPtoUK',
                                                'OnlineUrgentPayment',
                                                'OnlinePaymentinUSDtoUS',
                                                'OnlineBulkDirectDebSterling',
                                                'ForeignChqSent',
                                                'ForeignChqSelf',
                                                'ForeignChqEncashment',
                                                'ForeignFXInwardsCust',
                                                'ForeignFXTransfersROI',
                                                'ForeignFXForwardTrans',
                                                'ForeignFXTransfersBOI',
                                                'ForeignExMaintenance',
                                                'ForeignFXInwardsNonCust',
                                                'ForeignFXOutwards',
                                                'ForeignPurchase',
                                                'ForeignStatusRep',
                                                'ForeignChqDraft',
                                                'ForeignChqCLess',
                                                'ForeignChqMLess',
                                                'ForeignChqOther',
                                                'ForeignChqMPlus',
                                                'ForeignChqCCC',
                                                'ServiceCAccountFee',
                                                'ServiceCAccountFeeMonthly',
                                                'ServiceCAccountFeeQuarterly',
                                                'ServiceCBalanceHandling',
                                                'ServiceCFixedTariff',
                                                'ServiceCBusiDepAccBreakage',
                                                'ServiceCMonitorDaily',
                                                'ServiceCManagementFee',
                                                'ServiceCMinimumMonthlyFee',
                                                'ServiceCMonitorMonthly',
                                                'ServiceCMonitorWeekly',
                                                'ServiceCSecurityFee',
                                                'ServiceCMT940AccountFirst',
                                                'ServiceCMT940AccountSubsequent',
                                                'ServiceCOther',
                                                'CounterCoinHandling',
                                                'CounterCashIn',
                                                'CounterCashInNotUs',
                                                'CounterCashOut',
                                                'CounterCashX',
                                                'CounterForeignCashMax',
                                                'CounterForeignNoteHandling',
                                                'CounterForeignCashOut',
                                                'CounterCashFeeRate',
                                                'CounterForeignCashOutTx',
                                                'CounterCounterLodgement',
                                                'CounterCashDropLodgement',
                                                'CounterNotesLodged',
                                                'CounterNotesOut',
                                                'CounterCashInOwn',
                                                'CounterPaidTrans',
                                                'CounterCashFeePercent',
                                              ])
                                              .openapi({
                                                description: 'A description of the Fee type',
                                              }),
                                            LengthPromotionalInDays: z
                                              .int()
                                              .exactOptional()
                                              .openapi({
                                                description:
                                                  'Describes the length if only a duration is given instead of a date',
                                              }),
                                            Other: z
                                              .string()
                                              .exactOptional()
                                              .openapi({ description: 'Describe other fee type' }),
                                            StartPromotionOrFutureTerms: z
                                              .string()
                                              .regex(
                                                /^[0-9]{4}-(0[1-9]|(1[0|1|2]))-((0[1-9])|((1|2)[0-9])|(30|31))$/,
                                              )
                                              .exactOptional()
                                              .openapi({ description: 'Describes the start date' }),
                                            StopPromotionOrFutureTerms: z
                                              .string()
                                              .regex(
                                                /^[0-9]{4}-(0[1-9]|(1[0|1|2]))-((0[1-9])|((1|2)[0-9])|(30|31))$/,
                                              )
                                              .exactOptional()
                                              .openapi({ description: 'Describes the end date' }),
                                          })
                                          .openapi({
                                            description: 'Fee Detail',
                                            required: ['FeeType', 'FeeSubDetails'],
                                          }),
                                        FeeSubType: z
                                          .enum(['FutureMultipleTerms', 'Promotional', 'Regular'])
                                          .openapi({ description: 'Fee Sub Type code' }),
                                      })
                                      .openapi({
                                        description: 'Fee Details',
                                        required: ['FeeSubType', 'FeeDetail'],
                                      }),
                                  )
                                  .min(1),
                                FeeHigherTier: z
                                  .int()
                                  .exactOptional()
                                  .openapi({
                                    description:
                                      'Higher occurrence / range boundary e.g. For returned cheques this could be 10, which means the first 10 returned cheque fits into this range',
                                  }),
                                FeeLowerTier: z
                                  .int()
                                  .exactOptional()
                                  .openapi({
                                    description:
                                      'Lower occurrence / range boundary e.g.. For returned cheques this could be 0, which means the first returned cheque fits into this range',
                                  }),
                                LengthPromotionalInDays: z
                                  .int()
                                  .exactOptional()
                                  .openapi({
                                    description:
                                      'Describes the length if only a duration is given instead of a date',
                                  }),
                                StartPromotionOrFutureTerms: z
                                  .string()
                                  .regex(
                                    /^[0-9]{4}-(0[1-9]|(1[0|1|2]))-((0[1-9])|((1|2)[0-9])|(30|31))$/,
                                  )
                                  .exactOptional()
                                  .openapi({ description: 'Describes the start date' }),
                                StopPromotionOrFutureTerms: z
                                  .string()
                                  .regex(
                                    /^[0-9]{4}-(0[1-9]|(1[0|1|2]))-((0[1-9])|((1|2)[0-9])|(30|31))$/,
                                  )
                                  .exactOptional()
                                  .openapi({ description: 'Describes the end date' }),
                              })
                              .openapi({ description: 'Fees', required: ['FeeDetails'] }),
                            ProductState: z
                              .enum(['FutureMultipleTerms', 'Promotional', 'Regular'])
                              .openapi({
                                description:
                                  'Describes if the offering is promotional or a description of a future state.',
                              }),
                          })
                          .openapi({
                            description: 'Fees And Charges',
                            required: ['ProductState', 'Fees'],
                          }),
                      )
                      .min(1),
                    LoanItem: z.array(
                      z
                        .strictObject({
                          CCARegulatedEntity: z.boolean(),
                          DateOfChange: z
                            .string()
                            .regex(/^[0-9]{4}-(0[1-9]|(1[0|1|2]))-((0[1-9])|((1|2)[0-9])|(30|31))$/)
                            .exactOptional()
                            .openapi({
                              description: 'Date of the change if it refers to future terms',
                            }),
                          IsALowInterestRepaymentStartPossible: z.boolean(),
                          IsThisAnInterestOnlyLoan: z.boolean(),
                          LengthPromotionalInDays: z
                            .int()
                            .exactOptional()
                            .openapi({
                              description:
                                'Describes the length if only a duration is given instead of a date in days',
                            }),
                          LoanPricing: z
                            .array(
                              z
                                .strictObject({
                                  IndicativeRate: z.string(),
                                  LoanLengthIncrement: z
                                    .enum(['1 year', '2 years', '3 years', '4 years', '5 years'])
                                    .openapi({ description: 'Loan Length Increments' }),
                                  LoanLengthIncrementLower: z.int(),
                                  LoanLengthIncrementUpper: z.int(),
                                  LoanSizeBandLower: z
                                    .string()
                                    .regex(/^-?\d{1,10}\.\d{1,2}$/)
                                    .openapi({ description: 'Monetary amount without currency' }),
                                  LoanSizeBandUpper: z
                                    .string()
                                    .regex(/^-?\d{1,10}\.\d{1,2}$/)
                                    .openapi({ description: 'Monetary amount without currency' }),
                                  Negotiable: z.boolean(),
                                  RateComparisonType: z
                                    .enum(['APR', 'AER', 'Gross', 'Net', 'RepApr'])
                                    .exactOptional()
                                    .openapi({ description: 'Rate Comparison Type' }),
                                  RepaymentFrequency: z
                                    .array(
                                      z
                                        .enum([
                                          'Daily',
                                          'Flexible',
                                          'Fortnightly',
                                          'HalfYearly',
                                          'Monthly',
                                          'Quarterly',
                                          'Weekly',
                                          'Yearly',
                                        ])
                                        .openapi({ description: 'Repayment Frequency Code' }),
                                    )
                                    .min(1)
                                    .superRefine((items, ctx) => {
                                      const seen = new Map()
                                      for (const [i, val] of items.entries()) {
                                        const key = JSON.stringify(val)
                                        if (seen.has(key))
                                          ctx.addIssue({ code: 'custom', path: [i] })
                                        else seen.set(key, i)
                                      }
                                    }),
                                  SizeIncrement: z
                                    .enum([
                                      '£5000',
                                      '£10000',
                                      '£15000',
                                      '£20000',
                                      '£25000',
                                      'Other',
                                      'TierMaximum',
                                      'TierMinimum',
                                    ])
                                    .openapi({
                                      description:
                                        'Identifier for tier only where it has been supplied under Part 8 (article 32 or the CMA order), value reflects upper tier value',
                                    }),
                                })
                                .openapi({
                                  description: 'Loan Pricing',
                                  required: [
                                    'SizeIncrement',
                                    'LoanLengthIncrement',
                                    'RepaymentFrequency',
                                    'LoanSizeBandLower',
                                    'LoanSizeBandUpper',
                                    'LoanLengthIncrementLower',
                                    'LoanLengthIncrementUpper',
                                    'IndicativeRate',
                                    'Negotiable',
                                  ],
                                }),
                            )
                            .exactOptional(),
                          ProductState: z
                            .enum(['FutureMultipleTerms', 'Promotional', 'Regular'])
                            .openapi({
                              description:
                                'Describes if the offering is promotional or a description of a future state.',
                            }),
                          StartPromotionOrFutureTerms: z
                            .string()
                            .regex(/^[0-9]{4}-(0[1-9]|(1[0|1|2]))-((0[1-9])|((1|2)[0-9])|(30|31))$/)
                            .exactOptional()
                            .openapi({ description: 'Describes the start date' }),
                          StopPromotionOrFutureTerms: z
                            .string()
                            .regex(/^[0-9]{4}-(0[1-9]|(1[0|1|2]))-((0[1-9])|((1|2)[0-9])|(30|31))$/)
                            .exactOptional()
                            .openapi({ description: 'Describes the end date' }),
                          WillTheLoanBePaidInTrancheDrawdowns: z.boolean(),
                        })
                        .openapi({
                          description: 'Loan Item',
                          required: [
                            'ProductState',
                            'CCARegulatedEntity',
                            'IsALowInterestRepaymentStartPossible',
                            'IsThisAnInterestOnlyLoan',
                            'WillTheLoanBePaidInTrancheDrawdowns',
                          ],
                        }),
                    ),
                    MaximumLoanAmount: z
                      .string()
                      .regex(/^-?\d{1,10}\.\d{1,2}$/)
                      .openapi({ description: 'Maximum loan amount' }),
                    MaximumLoanTerm: z.int().openapi({ description: 'Maximum loan term (Days)' }),
                    MinimumLoanAmount: z
                      .string()
                      .regex(/^-?\d{1,10}\.\d{1,2}$/)
                      .openapi({ description: 'Minimum loan amount' }),
                    MinimumLoanTerm: z.int().openapi({ description: 'Minimum term (Days)' }),
                    Organisation: z
                      .strictObject({
                        Brand: z
                          .strictObject({
                            TrademarkID: z
                              .string()
                              .min(1)
                              .max(35)
                              .openapi({
                                description:
                                  'The trademark number that has been registered with the Intellectual Property Office. Note: The 2 letter IPO prefix should be omitted',
                              }),
                            TrademarkIPOCode: z
                              .enum(['UK', 'EU'])
                              .openapi({
                                description:
                                  'The Intellectual Property Office (IPO) is the official body responsible for intellectual property (IP) rights including patents, designs, trademarks and copyright. (Code: UK or EU only)',
                              }),
                          })
                          .openapi({
                            description: 'Brand',
                            required: ['TrademarkIPOCode', 'TrademarkID'],
                          }),
                        ParentOrganisation: z
                          .strictObject({
                            BIC: z
                              .string()
                              .regex(/[A-Z]{6}[A-Z2-9][A-NP-Z0-9]([A-Z0-9]{3})?/)
                              .exactOptional()
                              .openapi({ description: 'The BIC from the organisation' }),
                            LEI: z
                              .string()
                              .regex(/^[A-Z0-9]{18,18}[0-9]{2,2}$/)
                              .exactOptional()
                              .openapi({ description: 'The LEI ID of the organisation' }),
                            OrganisationName: z
                              .strictObject({
                                LegalName: z
                                  .string()
                                  .min(1)
                                  .max(35)
                                  .openapi({ description: 'Legal Name of the organisation' }),
                              })
                              .openapi({
                                description: 'Organisation Name',
                                required: ['LegalName'],
                              }),
                          })
                          .openapi({
                            description: 'Parent organisation',
                            required: ['OrganisationName'],
                          }),
                      })
                      .openapi({
                        description: 'Organisation',
                        required: ['ParentOrganisation', 'Brand'],
                      }),
                    PaymentHoliday: z
                      .boolean()
                      .openapi({ description: 'Indicates whether a repayment holiday is allowed' }),
                    ProductDescription: z
                      .string()
                      .openapi({
                        description:
                          'Description of the product provided by the parent Organisation',
                      }),
                    ProductIdentifier: z
                      .string()
                      .openapi({
                        description:
                          'Identifier within the parent organisation for the product. Must be unique in the organisation',
                      }),
                    ProductName: z
                      .string()
                      .openapi({
                        description:
                          'The short product or marketing name assigned by the parent organisation',
                      }),
                    ProductSegment: z
                      .array(
                        z
                          .enum([
                            'AgricultureSector',
                            'AllSegmentsCorporate',
                            'Corporate',
                            'FixedGroup',
                            'FlexibleBusinessLoan',
                            'GovernmentScheme',
                            'NewCustomersOnly',
                            'SmallLoan',
                            'SpecialisedSector',
                            'SwitchersOnly',
                          ])
                          .openapi({
                            description:
                              'Marketing or industry segment that the product is applicable for. Gives the sector or segment that the Loan is designed for',
                          }),
                      )
                      .min(1),
                    ProductTypeName: z
                      .enum(['FlexibleBusinessLoan', 'SmallBusinessLoan', 'SmeUnsecuredLoan'])
                      .openapi({ description: 'Descriptive code for the product category' }),
                    ProductURL: z.array(z.url()).min(1),
                    TsandCs: z
                      .array(z.string())
                      .min(1)
                      .openapi({
                        description:
                          'URL provided by the parent organisation which redirects to the T&Cs',
                      }),
                  })
                  .openapi({
                    description: 'SME Loan',
                    required: [
                      'Organisation',
                      'ProductName',
                      'ProductIdentifier',
                      'ProductTypeName',
                      'ProductURL',
                      'ProductSegment',
                      'ProductDescription',
                      'TsandCs',
                      'CustomerAccessChannels',
                      'Currency',
                      'MinimumLoanTerm',
                      'MaximumLoanTerm',
                      'MinimumLoanAmount',
                      'MaximumLoanAmount',
                      'PaymentHoliday',
                      'LoanItem',
                      'Eligibility',
                      'FeesAndCharges',
                      'Benefits',
                    ],
                  }),
              ),
              meta: z
                .strictObject({
                  Agreement: z.literal(
                    'Use of the APIs and any related data will be subject to the terms of the Open Licence and subject to terms and conditions',
                  ),
                  LastUpdated: z.iso.datetime({ offset: true }),
                  License: z
                    .literal('https://www.openbanking.org.uk/open-licence')
                    .openapi({ description: 'Open Banking License' }),
                  TermsOfUse: z
                    .literal('https://www.openbanking.org.uk/terms')
                    .openapi({ description: 'Open Banking Terms of Use' }),
                  TotalResults: z.int(),
                })
                .openapi({
                  required: ['LastUpdated', 'TotalResults', 'Agreement', 'License', 'TermsOfUse'],
                  title: 'Meta data',
                }),
            })
            .openapi({ required: ['meta', 'data'] }),
        },
      },
      headers: z.object({
        'Cache-Control': {
          description: 'Describes how long this response can be cached',
          schema: z
            .string()
            .default('max-age=28800')
            .exactOptional()
            .openapi({
              description: 'Describes how long this response can be cached',
              param: { required: false },
            }),
        },
        Etag: {
          description: 'A unique ID identifying whether this resource has changed',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'A unique ID identifying whether this resource has changed',
              param: { required: false },
            }),
        },
        'Strict-Transport-Security': {
          description: 'HTTPS strict transport security header',
          schema: z
            .string()
            .default('max-age=31536000')
            .exactOptional()
            .openapi({
              description: 'HTTPS strict transport security header',
              param: { required: false },
            }),
        },
        'X-Content-Type-Options': {
          description:
            'Ensures each page has a content type and prevents browsers from doing MIME type sniffing',
          schema: z
            .string()
            .default('nosniff')
            .exactOptional()
            .openapi({
              description:
                'Ensures each page has a content type and prevents browsers from doing MIME type sniffing',
              param: { required: false },
            }),
        },
        'X-Frame-Options': {
          description: 'Prevent this request from being loaded in any iframes',
          schema: z
            .string()
            .default('DENY')
            .exactOptional()
            .openapi({
              description: 'Prevent this request from being loaded in any iframes',
              param: { required: false },
            }),
        },
      }),
    },
    400: {
      description: 'You have sent a request which could not be understood.',
      content: {
        'application/prs.openbanking.opendata.v1.3+json': {
          schema: z
            .strictObject({
              description: z.literal('You have sent a request which could not be understood.'),
              status: z.literal('400'),
              title: z.literal('Bad request'),
            })
            .openapi({ required: ['status', 'title', 'description'], title: '400 Error object' }),
        },
      },
      headers: z.object({
        'Strict-Transport-Security': {
          description: 'HTTPS strict transport security header',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'HTTPS strict transport security header',
              param: { required: false },
            }),
        },
        'X-Content-Type-Options': {
          description:
            'Ensures each page has a content type and prevents browsers from doing MIME type sniffing',
          schema: z
            .string()
            .default('nosniff')
            .exactOptional()
            .openapi({
              description:
                'Ensures each page has a content type and prevents browsers from doing MIME type sniffing',
              param: { required: false },
            }),
        },
        'X-Frame-Options': {
          description: 'Prevent this request from being loaded in any iframes',
          schema: z
            .string()
            .default('DENY')
            .exactOptional()
            .openapi({
              description: 'Prevent this request from being loaded in any iframes',
              param: { required: false },
            }),
        },
      }),
    },
    408: {
      description: 'Your client has failed to submit a request, and a timeout has occurred.',
      content: {
        'application/prs.openbanking.opendata.v1.3+json': {
          schema: z
            .strictObject({
              description: z.literal(
                'Your client has failed to submit a request, and a timeout has occurred.',
              ),
              status: z.literal('408'),
              title: z.literal('Client timeout'),
            })
            .openapi({ required: ['status', 'title', 'description'], title: '408 Error object' }),
        },
      },
      headers: z.object({
        'Strict-Transport-Security': {
          description: 'HTTPS strict transport security header',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'HTTPS strict transport security header',
              param: { required: false },
            }),
        },
        'X-Content-Type-Options': {
          description:
            'Ensures each page has a content type and prevents browsers from doing MIME type sniffing',
          schema: z
            .string()
            .default('nosniff')
            .exactOptional()
            .openapi({
              description:
                'Ensures each page has a content type and prevents browsers from doing MIME type sniffing',
              param: { required: false },
            }),
        },
        'X-Frame-Options': {
          description: 'Prevent this request from being loaded in any iframes',
          schema: z
            .string()
            .default('DENY')
            .exactOptional()
            .openapi({
              description: 'Prevent this request from being loaded in any iframes',
              param: { required: false },
            }),
        },
      }),
    },
    429: {
      description: 'You have requested this resource too often. Slow down.',
      content: {
        'application/prs.openbanking.opendata.v1.3+json': {
          schema: z
            .strictObject({
              description: z.literal('You have requested this resource too often. Slow down.'),
              status: z.literal('429'),
              title: z.literal('Too many requests'),
            })
            .openapi({ required: ['status', 'title', 'description'], title: '429 Error object' }),
        },
      },
      headers: z.object({
        'Strict-Transport-Security': {
          description: 'HTTPS strict transport security header',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'HTTPS strict transport security header',
              param: { required: false },
            }),
        },
        'X-Content-Type-Options': {
          description:
            'Ensures each page has a content type and prevents browsers from doing MIME type sniffing',
          schema: z
            .string()
            .default('nosniff')
            .exactOptional()
            .openapi({
              description:
                'Ensures each page has a content type and prevents browsers from doing MIME type sniffing',
              param: { required: false },
            }),
        },
        'X-Frame-Options': {
          description: 'Prevent this request from being loaded in any iframes',
          schema: z
            .string()
            .default('DENY')
            .exactOptional()
            .openapi({
              description: 'Prevent this request from being loaded in any iframes',
              param: { required: false },
            }),
        },
      }),
    },
    500: {
      description: 'An error occurred on the server. No further information is available.',
      content: {
        'application/prs.openbanking.opendata.v1.3+json': {
          schema: z
            .strictObject({
              description: z.literal(
                'An error occurred on the server. No further information is available.',
              ),
              status: z.literal('500'),
              title: z.literal('Internal server error'),
            })
            .openapi({ required: ['status', 'title', 'description'], title: '500 Error object' }),
        },
      },
      headers: z.object({
        'Strict-Transport-Security': {
          description: 'HTTPS strict transport security header',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'HTTPS strict transport security header',
              param: { required: false },
            }),
        },
        'X-Content-Type-Options': {
          description:
            'Ensures each page has a content type and prevents browsers from doing MIME type sniffing',
          schema: z
            .string()
            .default('nosniff')
            .exactOptional()
            .openapi({
              description:
                'Ensures each page has a content type and prevents browsers from doing MIME type sniffing',
              param: { required: false },
            }),
        },
        'X-Frame-Options': {
          description: 'Prevent this request from being loaded in any iframes',
          schema: z
            .string()
            .default('DENY')
            .exactOptional()
            .openapi({
              description: 'Prevent this request from being loaded in any iframes',
              param: { required: false },
            }),
        },
      }),
    },
    503: {
      description: 'The service is temporarily unavailable.',
      content: {
        'application/prs.openbanking.opendata.v1.3+json': {
          schema: z
            .strictObject({
              description: z.literal('The service is temporarily unavailable.'),
              status: z.literal('503'),
              title: z.literal('Service temporarily unavailable'),
            })
            .openapi({ required: ['status', 'title', 'description'], title: '503 Error object' }),
        },
      },
      headers: z.object({
        'Strict-Transport-Security': {
          description: 'HTTPS strict transport security header',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'HTTPS strict transport security header',
              param: { required: false },
            }),
        },
        'X-Content-Type-Options': {
          description:
            'Ensures each page has a content type and prevents browsers from doing MIME type sniffing',
          schema: z
            .string()
            .default('nosniff')
            .exactOptional()
            .openapi({
              description:
                'Ensures each page has a content type and prevents browsers from doing MIME type sniffing',
              param: { required: false },
            }),
        },
        'X-Frame-Options': {
          description: 'Prevent this request from being loaded in any iframes',
          schema: z
            .string()
            .default('DENY')
            .exactOptional()
            .openapi({
              description: 'Prevent this request from being loaded in any iframes',
              param: { required: false },
            }),
        },
      }),
    },
    default: {
      description: 'A standard error response.',
      content: {
        'application/prs.openbanking.opendata.v1.3+json': {
          schema: z
            .strictObject({
              description: z
                .string()
                .openapi({ description: 'Further details describing the error' }),
              status: z
                .string()
                .openapi({ description: 'This corresponds to the HTTP status code' }),
              title: z.string().openapi({ description: 'A short title of the type of error' }),
            })
            .openapi({ required: ['status', 'title', 'description'], title: 'Error object' }),
        },
      },
      headers: z.object({
        'Strict-Transport-Security': {
          description: 'HTTPS strict transport security header',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'HTTPS strict transport security header',
              param: { required: false },
            }),
        },
        'X-Content-Type-Options': {
          description:
            'Ensures each page has a content type and prevents browsers from doing MIME type sniffing',
          schema: z
            .string()
            .default('nosniff')
            .exactOptional()
            .openapi({
              description:
                'Ensures each page has a content type and prevents browsers from doing MIME type sniffing',
              param: { required: false },
            }),
        },
        'X-Frame-Options': {
          description: 'Prevent this request from being loaded in any iframes',
          schema: z
            .string()
            .default('DENY')
            .exactOptional()
            .openapi({
              description: 'Prevent this request from being loaded in any iframes',
              param: { required: false },
            }),
        },
      }),
    },
  },
})

export const headUnsecuredSmeLoansRoute = createRoute({
  method: 'head',
  path: '/unsecured-sme-loans',
  tags: ['SME'],
  description: 'Gets header information on the current set of `Unsercured SME Lending` data',
  request: {
    headers: z.object({
      'If-Modified-Since': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Used for conditional request, to retrieve data only if modified since a given date',
            in: 'header',
            name: 'If-Modified-Since',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'If-None-Match': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Used for conditional request, to retrieve data only if the given Etag value does not match',
            in: 'header',
            name: 'If-None-Match',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    default: {
      description: 'No response',
      content: {
        'application/prs.openbanking.opendata.v1.3+json': {
          schema: z.object({}).openapi({ title: 'No response' }),
        },
      },
    },
  },
})
