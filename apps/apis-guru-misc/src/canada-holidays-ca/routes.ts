import { createRoute, z } from '@hono/zod-openapi'

const ProvinceSchema: z.ZodType<ProvinceType> = z
  .lazy(() =>
    z
      .object({
        id: z
          .enum(['AB', 'BC', 'MB', 'NB', 'NL', 'NS', 'NT', 'NU', 'ON', 'PE', 'QC', 'SK', 'YT'])
          .openapi({ description: 'Canadian province abbreviations', example: 'MB' }),
        nameEn: z.string().openapi({ description: 'English name', example: 'Manitoba' }),
        nameFr: z.string().openapi({ description: 'French name', example: 'Manitoba' }),
        nextHoliday: HolidaySchema.exactOptional(),
        optional: z
          .literal(1)
          .exactOptional()
          .openapi({ description: 'Whether this province optionally observes a given holiday.' }),
        provinces: z.array(HolidaySchema).exactOptional(),
        sourceEn: z
          .string()
          .openapi({
            description: 'Name of reference page with public holidays for this region',
            example: 'What are the general holidays in Manitoba?',
          }),
        sourceLink: z
          .url()
          .regex(/https+/)
          .openapi({
            description: 'URL to public holidays reference for this region',
            example:
              'https://www.gov.mb.ca/labour/standards/doc,gen-holidays-after-april-30-07,factsheet.html#q12',
          }),
      })
      .openapi({
        description: 'A Canadian province or territory ',
        required: ['id', 'nameFr', 'nameEn', 'sourceLink', 'sourceEn'],
        title: 'Province',
        'x-examples': {
          '/provinces/SK': {
            province: {
              holidays: [
                {
                  date: '2023-01-01',
                  federal: 1,
                  id: 1,
                  nameEn: 'New Year’s Day',
                  nameFr: 'Jour de l’An',
                  observedDate: '2023-01-02',
                },
                {
                  date: '2023-02-20',
                  federal: 0,
                  id: 4,
                  nameEn: 'Family Day',
                  nameFr: 'Fête de la famille',
                  observedDate: '2023-02-20',
                },
                {
                  date: '2023-04-07',
                  federal: 1,
                  id: 7,
                  nameEn: 'Good Friday',
                  nameFr: 'Vendredi saint',
                  observedDate: '2023-04-07',
                },
                {
                  date: '2023-05-22',
                  federal: 1,
                  id: 11,
                  nameEn: 'Victoria Day',
                  nameFr: 'Fête de la Reine',
                  observedDate: '2023-05-22',
                },
                {
                  date: '2023-07-01',
                  federal: 1,
                  id: 15,
                  nameEn: 'Canada Day',
                  nameFr: 'Fête du Canada',
                  observedDate: '2023-07-03',
                },
                {
                  date: '2023-08-07',
                  federal: 0,
                  id: 21,
                  nameEn: 'Saskatchewan Day',
                  nameFr: 'Jour de Saskatchewan',
                  observedDate: '2023-08-07',
                },
                {
                  date: '2023-09-04',
                  federal: 1,
                  id: 26,
                  nameEn: 'Labour Day',
                  nameFr: 'Fête du travail',
                  observedDate: '2023-09-04',
                },
                {
                  date: '2023-10-09',
                  federal: 1,
                  id: 29,
                  nameEn: 'Thanksgiving',
                  nameFr: 'Action de grâce',
                  observedDate: '2023-10-09',
                },
                {
                  date: '2023-11-11',
                  federal: 1,
                  id: 30,
                  nameEn: 'Remembrance Day',
                  nameFr: 'Jour du Souvenir',
                  observedDate: '2023-11-13',
                },
                {
                  date: '2023-12-25',
                  federal: 1,
                  id: 31,
                  nameEn: 'Christmas Day',
                  nameFr: 'Noël',
                  observedDate: '2023-12-25',
                },
              ],
              id: 'SK',
              nameEn: 'Saskatchewan',
              nameFr: 'Saskatchewan',
              nextHoliday: {
                date: '2023-01-01',
                federal: 1,
                id: 1,
                nameEn: 'New Year’s Day',
                nameFr: 'Jour de l’An',
                observedDate: '2023-01-02',
              },
              sourceEn: 'Saskatchewan Public Holidays',
              sourceLink:
                'https://www.saskatchewan.ca/business/employment-standards/public-statutory-holidays/list-of-saskatchewan-public-holidays',
            },
          },
        },
      }),
  )
  .openapi('Province')

type HolidayType = {
  date: string
  federal: 1 | 0
  id: number
  nameEn: string
  nameFr: string
  observedDate: string
  optional?: 1
  provinces?: z.infer<typeof ProvinceSchema>[]
}

const HolidaySchema: z.ZodType<HolidayType> = z
  .lazy(() =>
    z
      .object({
        date: z.iso
          .date()
          .openapi({
            description: 'ISO date: the literal date of the holiday',
            example: '2020-12-26',
          }),
        federal: z
          .union([z.literal(1), z.literal(0)])
          .openapi({
            description: 'Whether this holiday is observed by federally-regulated industries.',
          }),
        id: z
          .int()
          .min(1)
          .max(32)
          .openapi({ description: 'Primary key for a holiday', example: 2 }),
        nameEn: z.string().openapi({ description: 'English name', example: 'Louis Riel Day' }),
        nameFr: z.string().openapi({ description: 'French name', example: 'Journée Louis Riel' }),
        observedDate: z.iso
          .date()
          .openapi({
            description: 'ISO date: when this holiday is observed',
            example: '2020-12-28',
          }),
        optional: z
          .literal(1)
          .exactOptional()
          .openapi({
            description:
              'Whether this is a province-wide statutory holiday, or one that is optional for employers.',
          }),
        provinces: z.array(ProvinceSchema).exactOptional(),
      })
      .openapi({
        description:
          'A Canadian holiday. Includes a name, the literal date of the holiday, the observed date of the holiday (ie, accommodating for weekends), and a list of regions that observe this holiday.',
        required: ['id', 'date', 'nameEn', 'nameFr', 'federal', 'observedDate'],
        title: 'Holiday',
        'x-examples': {
          '/holidays/32?optional=true': {
            holiday: {
              date: '2023-12-26',
              federal: 1,
              id: 32,
              nameEn: 'Boxing Day',
              nameFr: 'Lendemain de Noël',
              observedDate: '2023-12-26',
              provinces: [
                {
                  id: 'NL',
                  nameEn: 'Newfoundland and Labrador',
                  nameFr: 'Terre-Neuve-et-Labrador',
                  sourceEn: 'Public holidays in Newfoundland',
                  sourceLink: 'https://gist.github.com/pcraig3/81dff348ddf52777c9f918c3032531bd',
                },
                {
                  id: 'ON',
                  nameEn: 'Ontario',
                  nameFr: 'Ontario',
                  sourceEn: 'Ontario Public holidays',
                  sourceLink:
                    'https://www.ontario.ca/document/your-guide-employment-standards-act-0/public-holidays',
                },
                {
                  id: 'AB',
                  nameEn: 'Alberta',
                  nameFr: 'Alberta',
                  sourceEn: 'General holidays in Alberta',
                  sourceLink: 'https://www.alberta.ca/alberta-general-holidays.aspx#jumplinks-1',
                },
                {
                  id: 'BC',
                  nameEn: 'British Columbia',
                  nameFr: 'Colombie-Britannique',
                  sourceEn: 'Statutory Holidays in British Columbia',
                  sourceLink:
                    'https://www2.gov.bc.ca/gov/content/employment-business/employment-standards-advice/employment-standards/statutory-holidays#body',
                },
                {
                  id: 'MB',
                  nameEn: 'Manitoba',
                  nameFr: 'Manitoba',
                  sourceEn: 'General holidays in Manitoba',
                  sourceLink:
                    'https://www.gov.mb.ca/labour/standards/doc,gen-holidays-after-april-30-07,factsheet.html#q12',
                },
              ],
            },
          },
        },
      }),
  )
  .openapi('Holiday')

type ProvinceType = {
  id: 'AB' | 'BC' | 'MB' | 'NB' | 'NL' | 'NS' | 'NT' | 'NU' | 'ON' | 'PE' | 'QC' | 'SK' | 'YT'
  nameEn: string
  nameFr: string
  nextHoliday?: z.infer<typeof HolidaySchema>
  optional?: 1
  provinces?: z.infer<typeof HolidaySchema>[]
  sourceEn: string
  sourceLink: string
}

const ErrorSchema = z
  .object({
    message: z
      .string()
      .exactOptional()
      .openapi({ description: 'An error message', example: 'Error: No holiday with id “100”' }),
    status: z
      .int()
      .min(100)
      .max(599)
      .exactOptional()
      .openapi({ description: 'An HTTP status code', example: 404 }),
    timestamp: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'A UTC ISO timestamp', example: '2020-04-27T05:41:10.710Z' }),
  })
  .openapi({
    title: 'Error',
    'x-examples': {
      '/holidays/100': {
        error: {
          message: 'Bad Request: request/params/holidayId must be <= 32',
          status: 400,
          timestamp: '2022-12-27T05:55:36.552Z',
        },
      },
    },
    required: [],
  })
  .openapi('Error')

export const getApiV1Route = createRoute({
  method: 'get',
  path: '/api/v1',
  tags: ['info'],
  summary: 'root',
  description: 'Returns a welcome message.',
  operationId: 'Root',
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              _links: z
                .object({
                  holidays: z
                    .object({
                      href: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description: 'Domain to get all holidays',
                          example: 'https://canada-holidays.ca/api/v1/holidays',
                        }),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  provinces: z
                    .object({
                      href: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description: 'Domain to get all provinces',
                          example: 'https://canada-holidays.ca/api/v1/provinces',
                        }),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  self: z
                    .object({
                      href: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description: 'Root domain',
                          example: 'https://canada-holidays.ca/api/v1/',
                        }),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  spec: z
                    .object({
                      href: z
                        .string()
                        .exactOptional()
                        .openapi({ example: 'https://canada-holidays.ca/api/v1/spec' }),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                })
                .exactOptional()
                .openapi({ required: [] }),
              message: z
                .string()
                .exactOptional()
                .openapi({ description: 'A welcome message', example: 'Hello / Bonjour!' }),
            })
            .openapi({ required: [] }),
          examples: {
            '/': {
              value: {
                _links: {
                  holidays: { href: 'https://canada-holidays.ca/api/v1/holidays' },
                  provinces: { href: 'https://canada-holidays.ca/api/v1/provinces' },
                  self: { href: 'https://canada-holidays.ca/api/v1/' },
                  spec: { href: 'https://canada-holidays.ca/api/v1/spec' },
                },
                message:
                  'Hello / Bonjour! Welcome to the Canada Holidays API / Bienvenue dans l’API canadienne des jours fériés',
              },
            },
          },
        },
      },
    },
  },
})

export const getApiV1HolidaysRoute = createRoute({
  method: 'get',
  path: '/api/v1/holidays',
  tags: ['holidays'],
  summary: 'Get all holidays',
  description: 'Returns Canadian public holidays. Each holiday lists the regions that observe it.',
  operationId: 'Holidays',
  request: {
    query: z.object({
      year: z
        .preprocess(
          (val) => (val === '' ? undefined : val),
          z
            .preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.int().min(2016).max(2029),
            )
            .default(2023),
        )
        .default(2023)
        .exactOptional()
        .openapi({
          param: {
            allowEmptyValue: true,
            description: 'A calendar year',
            in: 'query',
            name: 'year',
            schema: { default: 2023, maximum: 2029, minimum: 2016, type: 'integer' },
            required: false,
          },
        }),
      federal: z
        .enum(['1', '0', 'true', 'false'])
        .exactOptional()
        .openapi({
          param: {
            allowEmptyValue: true,
            description:
              'A boolean parameter. If true or 1, will return only federal holidays. If false or 0, will return no federal holidays.',
            in: 'query',
            name: 'federal',
            schema: { enum: ['1', '0', 'true', 'false'], type: 'string' },
            required: false,
          },
        }),
      optional: z
        .enum(['1', '0', 'true', 'false'])
        .default('false')
        .exactOptional()
        .openapi({
          param: {
            allowEmptyValue: true,
            description:
              'A boolean parameter. If false or 0 (default), will return only legislated holidays. If true or 1, will return optional holidays from Alberta and BC.',
            in: 'query',
            name: 'optional',
            schema: { default: 'false', enum: ['1', '0', 'true', 'false'], type: 'string' },
            required: false,
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
            .object({ holidays: z.array(HolidaySchema).exactOptional() })
            .openapi({ required: [] }),
          examples: {
            '/holidays': {
              value: {
                holidays: [
                  {
                    date: '2023-01-01',
                    federal: 1,
                    id: 1,
                    nameEn: 'New Year’s Day',
                    nameFr: 'Jour de l’An',
                    observedDate: '2023-01-02',
                    provinces: [
                      {
                        id: 'AB',
                        nameEn: 'Alberta',
                        nameFr: 'Alberta',
                        sourceEn: 'General holidays in Alberta',
                        sourceLink:
                          'https://www.alberta.ca/alberta-general-holidays.aspx#jumplinks-1',
                      },
                      {
                        id: 'BC',
                        nameEn: 'British Columbia',
                        nameFr: 'Colombie-Britannique',
                        sourceEn: 'Statutory Holidays in British Columbia',
                        sourceLink:
                          'https://www2.gov.bc.ca/gov/content/employment-business/employment-standards-advice/employment-standards/statutory-holidays#body',
                      },
                      {
                        id: 'MB',
                        nameEn: 'Manitoba',
                        nameFr: 'Manitoba',
                        sourceEn: 'General holidays in Manitoba',
                        sourceLink:
                          'https://www.gov.mb.ca/labour/standards/doc,gen-holidays-after-april-30-07,factsheet.html#q12',
                      },
                      {
                        id: 'NB',
                        nameEn: 'New Brunswick',
                        nameFr: 'Nouveau-Brunswick',
                        sourceEn: '10 prescribed days of rest',
                        sourceLink:
                          'https://www2.gnb.ca/content/gnb/en/departments/elg/local_government/content/governance/content/days_of_rest_act/faq.html#2',
                      },
                      {
                        id: 'NL',
                        nameEn: 'Newfoundland and Labrador',
                        nameFr: 'Terre-Neuve-et-Labrador',
                        sourceEn: 'Public holidays in Newfoundland',
                        sourceLink:
                          'https://gist.github.com/pcraig3/81dff348ddf52777c9f918c3032531bd',
                      },
                      {
                        id: 'NT',
                        nameEn: 'Northwest Territories',
                        nameFr: 'Territoires du Nord-Ouest',
                        sourceEn: 'Employment Standards, Northwest Territories',
                        sourceLink:
                          'https://www.ece.gov.nt.ca/en/services/employment-standards/frequently-asked-questions#Statutory%20Holidays',
                      },
                      {
                        id: 'NS',
                        nameEn: 'Nova Scotia',
                        nameFr: 'Nouvelle-Écosse',
                        sourceEn: 'Paid holidays in Nova Scotia',
                        sourceLink: 'https://novascotia.ca/lae/employmentrights/holidaychart.asp',
                      },
                      {
                        id: 'NU',
                        nameEn: 'Nunavut',
                        nameFr: 'Nunavut',
                        sourceEn: 'Nunavut General Holidays',
                        sourceLink: 'https://nu-lsco.ca/faq-s?tmpl=component&faqid=11',
                      },
                      {
                        id: 'ON',
                        nameEn: 'Ontario',
                        nameFr: 'Ontario',
                        sourceEn: 'Ontario Public holidays',
                        sourceLink:
                          'https://www.ontario.ca/document/your-guide-employment-standards-act-0/public-holidays',
                      },
                      {
                        id: 'PE',
                        nameEn: 'Prince Edward Island',
                        nameFr: 'Île-du-Prince-Édouard',
                        sourceEn: 'PEI Paid Holidays',
                        sourceLink:
                          'https://www.princeedwardisland.ca/en/information/economic-growth-tourism-and-culture/paid-holidays',
                      },
                      {
                        id: 'QC',
                        nameEn: 'Quebec',
                        nameFr: 'Québec',
                        sourceEn: 'Jours fériés, chômés et payés',
                        sourceLink:
                          'https://www2.gouv.qc.ca/entreprises/portail/quebec/ressourcesh?lang=fr&g=ressourcesh&sg=personnel&t=o&e=2318829344:3908165687',
                      },
                      {
                        id: 'SK',
                        nameEn: 'Saskatchewan',
                        nameFr: 'Saskatchewan',
                        sourceEn: 'Saskatchewan Public Holidays',
                        sourceLink:
                          'https://www.saskatchewan.ca/business/employment-standards/public-statutory-holidays/list-of-saskatchewan-public-holidays',
                      },
                      {
                        id: 'YT',
                        nameEn: 'Yukon',
                        nameFr: 'Yukon',
                        sourceEn: 'Yukon statutory holiday dates',
                        sourceLink:
                          'https://yukon.ca/en/doing-business/employer-responsibilities/find-yukon-statutory-holiday',
                      },
                    ],
                  },
                  {
                    date: '2023-02-20',
                    federal: 0,
                    id: 2,
                    nameEn: 'Louis Riel Day',
                    nameFr: 'Journée Louis Riel',
                    observedDate: '2023-02-20',
                    provinces: [
                      {
                        id: 'MB',
                        nameEn: 'Manitoba',
                        nameFr: 'Manitoba',
                        sourceEn: 'General holidays in Manitoba',
                        sourceLink:
                          'https://www.gov.mb.ca/labour/standards/doc,gen-holidays-after-april-30-07,factsheet.html#q12',
                      },
                    ],
                  },
                ],
              },
            },
          },
        },
      },
      headers: z.object({}),
    },
  },
})

export const getApiV1HolidaysHolidayIdRoute = createRoute({
  method: 'get',
  path: '/api/v1/holidays/{holidayId}',
  tags: ['holidays'],
  summary: 'Get a holiday by id',
  description:
    'Returns one Canadian statutory holiday by integer id. Returns a 404 response for invalid ids.',
  operationId: 'Holiday',
  request: {
    params: z.object({
      holidayId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(32),
        )
        .openapi({
          param: {
            description: 'Primary key for a holiday',
            in: 'path',
            name: 'holidayId',
            required: true,
            schema: { example: 2, maximum: 32, minimum: 1, type: 'integer' },
          },
          example: 2,
        }),
    }),
    query: z.object({
      year: z
        .preprocess(
          (val) => (val === '' ? undefined : val),
          z
            .preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.int().min(2016).max(2029),
            )
            .default(2023),
        )
        .default(2023)
        .exactOptional()
        .openapi({
          param: {
            allowEmptyValue: true,
            description: 'A calendar year',
            in: 'query',
            name: 'year',
            schema: { default: 2023, maximum: 2029, minimum: 2016, type: 'integer' },
            required: false,
          },
        }),
      optional: z
        .enum(['1', '0', 'true', 'false'])
        .default('false')
        .exactOptional()
        .openapi({
          param: {
            allowEmptyValue: true,
            description:
              'A boolean parameter. If false or 0 (default), will return provinces for which this is a legislated holiday. If true or 1, will return provinces which optionally celebrate this holiday.',
            in: 'query',
            name: 'optional',
            schema: { default: 'false', enum: ['1', '0', 'true', 'false'], type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z.object({ holiday: HolidaySchema.exactOptional() }).openapi({ required: [] }),
          examples: {
            '/holidays/32': {
              value: {
                holiday: {
                  date: '2023-12-26',
                  federal: 1,
                  id: 32,
                  nameEn: 'Boxing Day',
                  nameFr: 'Lendemain de Noël',
                  observedDate: '2023-12-26',
                  provinces: [
                    {
                      id: 'NL',
                      nameEn: 'Newfoundland and Labrador',
                      nameFr: 'Terre-Neuve-et-Labrador',
                      sourceEn: 'Public holidays in Newfoundland',
                      sourceLink:
                        'https://gist.github.com/pcraig3/81dff348ddf52777c9f918c3032531bd',
                    },
                    {
                      id: 'ON',
                      nameEn: 'Ontario',
                      nameFr: 'Ontario',
                      sourceEn: 'Ontario Public holidays',
                      sourceLink:
                        'https://www.ontario.ca/document/your-guide-employment-standards-act-0/public-holidays',
                    },
                  ],
                },
              },
            },
            '/holidays/32?optional=true': {
              value: {
                holiday: {
                  date: '2023-12-26',
                  federal: 1,
                  id: 32,
                  nameEn: 'Boxing Day',
                  nameFr: 'Lendemain de Noël',
                  observedDate: '2023-12-26',
                  provinces: [
                    {
                      id: 'NL',
                      nameEn: 'Newfoundland and Labrador',
                      nameFr: 'Terre-Neuve-et-Labrador',
                      sourceEn: 'Public holidays in Newfoundland',
                      sourceLink:
                        'https://gist.github.com/pcraig3/81dff348ddf52777c9f918c3032531bd',
                    },
                    {
                      id: 'ON',
                      nameEn: 'Ontario',
                      nameFr: 'Ontario',
                      sourceEn: 'Ontario Public holidays',
                      sourceLink:
                        'https://www.ontario.ca/document/your-guide-employment-standards-act-0/public-holidays',
                    },
                    {
                      id: 'AB',
                      nameEn: 'Alberta',
                      nameFr: 'Alberta',
                      optional: 1,
                      sourceEn: 'General holidays in Alberta',
                      sourceLink:
                        'https://www.alberta.ca/alberta-general-holidays.aspx#jumplinks-1',
                    },
                    {
                      id: 'BC',
                      nameEn: 'British Columbia',
                      nameFr: 'Colombie-Britannique',
                      optional: 1,
                      sourceEn: 'Statutory Holidays in British Columbia',
                      sourceLink:
                        'https://www2.gov.bc.ca/gov/content/employment-business/employment-standards-advice/employment-standards/statutory-holidays#body',
                    },
                    {
                      id: 'MB',
                      nameEn: 'Manitoba',
                      nameFr: 'Manitoba',
                      optional: 1,
                      sourceEn: 'General holidays in Manitoba',
                      sourceLink:
                        'https://www.gov.mb.ca/labour/standards/doc,gen-holidays-after-april-30-07,factsheet.html#q12',
                    },
                  ],
                },
              },
            },
          },
        },
      },
      headers: z.object({}),
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: z.object({ error: ErrorSchema.exactOptional() }).openapi({ required: [] }),
          examples: {
            '/holidays/100': {
              value: {
                error: {
                  message: 'Error: request.params.holidayId should be <= 31',
                  status: 400,
                  timestamp: '2020-04-28T03:59:56.605Z',
                },
              },
            },
          },
        },
      },
    },
  },
})

export const getApiV1ProvincesRoute = createRoute({
  method: 'get',
  path: '/api/v1/provinces',
  tags: ['provinces'],
  summary: 'Get all provinces',
  description:
    'Returns provinces and territories in Canada. Each province or territory lists its associated holidays.',
  operationId: 'Provinces',
  request: {
    query: z.object({
      year: z
        .preprocess(
          (val) => (val === '' ? undefined : val),
          z
            .preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.int().min(2016).max(2029),
            )
            .default(2023),
        )
        .default(2023)
        .exactOptional()
        .openapi({
          param: {
            allowEmptyValue: true,
            description: 'A calendar year',
            in: 'query',
            name: 'year',
            schema: { default: 2023, maximum: 2029, minimum: 2016, type: 'integer' },
            required: false,
          },
        }),
      optional: z
        .enum(['1', '0', 'true', 'false'])
        .default('false')
        .exactOptional()
        .openapi({
          param: {
            allowEmptyValue: true,
            description:
              'A boolean parameter. If false or 0 (default), will return only legislated holidays. If true or 1, will return optional holidays from Alberta and BC.',
            in: 'query',
            name: 'optional',
            schema: { default: 'false', enum: ['1', '0', 'true', 'false'], type: 'string' },
            required: false,
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
            .object({ provinces: z.array(ProvinceSchema).exactOptional() })
            .openapi({ required: [] }),
          examples: {
            '/provinces': {
              value: {
                provinces: [
                  {
                    holidays: [
                      {
                        date: '2023-01-01',
                        federal: 1,
                        id: 1,
                        nameEn: 'New Year’s Day',
                        nameFr: 'Jour de l’An',
                        observedDate: '2023-01-02',
                      },
                      {
                        date: '2023-02-20',
                        federal: 0,
                        id: 4,
                        nameEn: 'Family Day',
                        nameFr: 'Fête de la famille',
                        observedDate: '2023-02-20',
                      },
                    ],
                    id: 'AB',
                    nameEn: 'Alberta',
                    nameFr: 'Alberta',
                    nextHoliday: {
                      date: '2023-01-01',
                      federal: 1,
                      id: 1,
                      nameEn: 'New Year’s Day',
                      nameFr: 'Jour de l’An',
                      observedDate: '2023-01-02',
                    },
                    sourceEn: 'General holidays in Alberta',
                    sourceLink: 'https://www.alberta.ca/alberta-general-holidays.aspx#jumplinks-1',
                  },
                  {
                    holidays: [
                      {
                        date: '2023-01-01',
                        federal: 1,
                        id: 1,
                        nameEn: 'New Year’s Day',
                        nameFr: 'Jour de l’An',
                        observedDate: '2023-01-02',
                      },
                      {
                        date: '2023-02-20',
                        federal: 0,
                        id: 4,
                        nameEn: 'Family Day',
                        nameFr: 'Fête de la famille',
                        observedDate: '2023-02-20',
                      },
                    ],
                    id: 'BC',
                    nameEn: 'British Columbia',
                    nameFr: 'Colombie-Britannique',
                    nextHoliday: {
                      date: '2023-01-01',
                      federal: 1,
                      id: 1,
                      nameEn: 'New Year’s Day',
                      nameFr: 'Jour de l’An',
                      observedDate: '2023-01-02',
                    },
                    sourceEn: 'Statutory Holidays in British Columbia',
                    sourceLink:
                      'https://www2.gov.bc.ca/gov/content/employment-business/employment-standards-advice/employment-standards/statutory-holidays#body',
                  },
                ],
              },
            },
          },
        },
      },
      headers: z.object({}),
    },
  },
})

export const getApiV1ProvincesProvinceIdRoute = createRoute({
  method: 'get',
  path: '/api/v1/provinces/{provinceId}',
  tags: ['provinces'],
  summary: 'Get a province or territory by abbreviation',
  description:
    'Returns a Canadian province or territory with its associated holidays. Returns a 404 response for invalid abbreviations.',
  operationId: 'Province',
  request: {
    params: z.object({
      provinceId: z
        .enum(['AB', 'BC', 'MB', 'NB', 'NL', 'NS', 'NT', 'NU', 'ON', 'PE', 'QC', 'SK', 'YT'])
        .openapi({
          param: {
            description: 'A Canadian province abbreviation',
            in: 'path',
            name: 'provinceId',
            required: true,
            schema: {
              enum: ['AB', 'BC', 'MB', 'NB', 'NL', 'NS', 'NT', 'NU', 'ON', 'PE', 'QC', 'SK', 'YT'],
              example: 'MB',
              type: 'string',
            },
          },
          example: 'MB',
        }),
    }),
    query: z.object({
      year: z
        .preprocess(
          (val) => (val === '' ? undefined : val),
          z
            .preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.int().min(2016).max(2029),
            )
            .default(2023),
        )
        .default(2023)
        .exactOptional()
        .openapi({
          param: {
            allowEmptyValue: true,
            description: 'A calendar year',
            in: 'query',
            name: 'year',
            schema: { default: 2023, maximum: 2029, minimum: 2016, type: 'integer' },
            required: false,
          },
        }),
      optional: z
        .enum(['1', '0', 'true', 'false'])
        .default('false')
        .exactOptional()
        .openapi({
          param: {
            allowEmptyValue: true,
            description:
              'A boolean parameter (AB and BC only). If false or 0 (default), will return only legislated holidays. If true or 1, will return optional holidays from Alberta and BC.',
            in: 'query',
            name: 'optional',
            schema: { default: 'false', enum: ['1', '0', 'true', 'false'], type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z.object({ province: ProvinceSchema.exactOptional() }).openapi({ required: [] }),
          examples: {
            '/provinces/MB': {
              value: {
                province: {
                  holidays: [
                    {
                      date: '2023-01-01',
                      federal: 1,
                      id: 1,
                      nameEn: 'New Year’s Day',
                      nameFr: 'Jour de l’An',
                      observedDate: '2023-01-02',
                    },
                    {
                      date: '2023-02-20',
                      federal: 0,
                      id: 2,
                      nameEn: 'Louis Riel Day',
                      nameFr: 'Journée Louis Riel',
                      observedDate: '2023-02-20',
                    },
                    {
                      date: '2023-04-07',
                      federal: 1,
                      id: 7,
                      nameEn: 'Good Friday',
                      nameFr: 'Vendredi saint',
                      observedDate: '2023-04-07',
                    },
                    {
                      date: '2023-05-22',
                      federal: 1,
                      id: 11,
                      nameEn: 'Victoria Day',
                      nameFr: 'Fête de la Reine',
                      observedDate: '2023-05-22',
                    },
                    {
                      date: '2023-07-01',
                      federal: 1,
                      id: 15,
                      nameEn: 'Canada Day',
                      nameFr: 'Fête du Canada',
                      observedDate: '2023-07-03',
                    },
                    {
                      date: '2023-09-04',
                      federal: 1,
                      id: 26,
                      nameEn: 'Labour Day',
                      nameFr: 'Fête du travail',
                      observedDate: '2023-09-04',
                    },
                    {
                      date: '2023-10-09',
                      federal: 1,
                      id: 29,
                      nameEn: 'Thanksgiving',
                      nameFr: 'Action de grâce',
                      observedDate: '2023-10-09',
                    },
                    {
                      date: '2023-12-25',
                      federal: 1,
                      id: 31,
                      nameEn: 'Christmas Day',
                      nameFr: 'Noël',
                      observedDate: '2023-12-25',
                    },
                  ],
                  id: 'MB',
                  nameEn: 'Manitoba',
                  nameFr: 'Manitoba',
                  nextHoliday: {
                    date: '2023-01-01',
                    federal: 1,
                    id: 1,
                    nameEn: 'New Year’s Day',
                    nameFr: 'Jour de l’An',
                    observedDate: '2023-01-02',
                  },
                  sourceEn: 'General holidays in Manitoba',
                  sourceLink:
                    'https://www.gov.mb.ca/labour/standards/doc,gen-holidays-after-april-30-07,factsheet.html#q12',
                },
              },
            },
          },
        },
      },
      headers: z.object({}),
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: z.object({ error: ErrorSchema.exactOptional() }).openapi({ required: [] }),
          examples: {
            '/provinces/100': {
              value: {
                error: {
                  message:
                    'Error: request.params.provinceId should be equal to one of the allowed values: AB, BC, MB, NB, NL, NS, NT, NU, ON, PE, QC, SK, YT',
                  status: 400,
                  timestamp: '2020-04-28T04:02:38.813Z',
                },
              },
            },
          },
        },
      },
    },
  },
})

export const getApiV1SpecRoute = createRoute({
  method: 'get',
  path: '/api/v1/spec',
  tags: ['info'],
  summary: 'Get JSON schema',
  description: 'Gets the schema for the JSON API as a yaml file.',
  operationId: 'Spec',
  responses: {
    200: {
      description: 'OK',
      headers: z.object({
        'content-type': {
          description: 'text/yaml; charset=UTF-8',
          schema: z
            .string()
            .exactOptional()
            .openapi({ description: 'text/yaml; charset=UTF-8', param: { required: false } }),
        },
      }),
    },
  },
})
