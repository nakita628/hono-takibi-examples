import { createRoute, z } from '@hono/zod-openapi'

const HouseSchema = z.enum(['Commons', 'Lords']).openapi('House')

const BusinessItemHouseSchema = z
  .strictObject({ house: HouseSchema.exactOptional(), name: z.string().nullable().exactOptional() })
  .openapi({ required: [] })
  .openapi('BusinessItemHouse')

const BusinessItemSchema = z
  .strictObject({
    businessItemUri: z.url().nullable().exactOptional(),
    houseId: z.string().nullable().exactOptional(),
    houseName: z.string().nullable().exactOptional(),
    houseUri: z.url().nullable().exactOptional(),
    houses: z.array(BusinessItemHouseSchema).nullable().exactOptional(),
    id: z.string().nullable().exactOptional(),
    itemDate: z.iso.datetime({ offset: true }).exactOptional(),
    link: z.string().nullable().exactOptional(),
    procedureStepId: z.string().nullable().exactOptional(),
    procedureStepUri: z.url().nullable().exactOptional(),
    sequence: z.int32().exactOptional(),
    stepName: z.string().nullable().exactOptional(),
    treatyId: z.string().nullable().exactOptional(),
    treatyUri: z.url().nullable().exactOptional(),
    workpackageProcedureUri: z.url().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('BusinessItem')

const LinkSchema = z
  .strictObject({
    href: z.string().nullable().exactOptional(),
    method: z.string().nullable().exactOptional(),
    rel: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Link')

const BusinessItemResourceSchema = z
  .strictObject({
    links: z.array(LinkSchema).nullable().exactOptional(),
    value: BusinessItemSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('BusinessItemResource')

const BusinessItemResourceCollectionSchema = z
  .strictObject({
    items: z.array(BusinessItemResourceSchema).nullable().exactOptional(),
    itemsPerPage: z.int32().exactOptional(),
    links: z.array(LinkSchema).nullable().exactOptional(),
    totalResults: z.int32().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('BusinessItemResourceCollection')

const DepartmentSchema = z
  .strictObject({ id: z.int32().exactOptional(), name: z.string().nullable().exactOptional() })
  .openapi({ required: [] })
  .openapi('Department')

const GovernmentOrganisationSchema = z
  .strictObject({ id: z.int32().exactOptional(), name: z.string().nullable().exactOptional() })
  .openapi({ required: [] })
  .openapi('GovernmentOrganisation')

const GovernmentOrganisationResourceSchema = z
  .strictObject({
    links: z.array(LinkSchema).nullable().exactOptional(),
    value: GovernmentOrganisationSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GovernmentOrganisationResource')

const GovernmentOrganisationResourceCollectionSchema = z
  .strictObject({
    items: z.array(GovernmentOrganisationResourceSchema).nullable().exactOptional(),
    itemsPerPage: z.int32().exactOptional(),
    links: z.array(LinkSchema).nullable().exactOptional(),
    totalResults: z.int32().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GovernmentOrganisationResourceCollection')

const ParliamentaryConclusionSchema = z
  .enum(['NotConcluded', 'CanRatify', 'CantRatify'])
  .openapi('ParliamentaryConclusion')

const ParliamentaryProcessSchema = z
  .enum(['NotConcluded', 'Concluded'])
  .openapi('ParliamentaryProcess')

const SeriesMembershipSchema = z
  .strictObject({
    description: z.string().nullable().exactOptional(),
    id: z.int32().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('SeriesMembership')

const SeriesMembershipResourceSchema = z
  .strictObject({
    links: z.array(LinkSchema).nullable().exactOptional(),
    value: SeriesMembershipSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('SeriesMembershipResource')

const SeriesMembershipResourceCollectionSchema = z
  .strictObject({
    items: z.array(SeriesMembershipResourceSchema).nullable().exactOptional(),
    itemsPerPage: z.int32().exactOptional(),
    links: z.array(LinkSchema).nullable().exactOptional(),
    totalResults: z.int32().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('SeriesMembershipResourceCollection')

const SeriesMembershipTypeSchema = z
  .enum([
    'CountrySeriesMembership',
    'EuropeanUnionSeriesMembership',
    'MiscellaneousSeriesMembership',
  ])
  .openapi('SeriesMembershipType')

const TreatySeriesMembershipSchema = z
  .strictObject({
    citation: z.string().nullable().exactOptional(),
    seriesMembershipType: SeriesMembershipTypeSchema.exactOptional(),
    uri: z.url().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TreatySeriesMembership')

const TreatySchema = z
  .strictObject({
    commandPaperNumber: z.int32().nullable().exactOptional(),
    commandPaperPrefix: z.string().nullable().exactOptional(),
    commonsLayingDate: z.iso.datetime({ offset: true }).exactOptional(),
    countrySeriesItemCitation: z.string().nullable().exactOptional(),
    countrySeriesMembership: z.url().nullable().exactOptional(),
    debateScheduled: z.string().nullable().exactOptional(),
    europeanSeriesItemCitation: z.string().nullable().exactOptional(),
    europeanUnionSeriesMembership: z.url().nullable().exactOptional(),
    id: z.string().nullable().exactOptional(),
    layingBodyDepartment: DepartmentSchema.exactOptional(),
    layingBodyDepartmentId: z.int32().nullable().exactOptional(),
    layingBodyName: z.string().nullable().exactOptional(),
    leadDepartment: DepartmentSchema.exactOptional(),
    leadGovernmentOrganisationDepartmentId: z.int32().nullable().exactOptional(),
    leadGovernmentOrganisationGroupName: z.string().nullable().exactOptional(),
    lordsLayingDate: z.iso.datetime({ offset: true }).exactOptional(),
    miscSeriesItemCitation: z.string().nullable().exactOptional(),
    miscellaneousSeriesMembership: z.url().nullable().exactOptional(),
    name: z.string().nullable().exactOptional(),
    parliamentaryConclusion: ParliamentaryConclusionSchema.exactOptional(),
    treatySeriesMembership: TreatySeriesMembershipSchema.exactOptional(),
    uri: z.url().nullable().exactOptional(),
    webLink: z.url().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Treaty')

const TreatyResourceSchema = z
  .strictObject({
    links: z.array(LinkSchema).nullable().exactOptional(),
    value: TreatySchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TreatyResource')

const TreatyResourceCollectionSchema = z
  .strictObject({
    items: z.array(TreatyResourceSchema).nullable().exactOptional(),
    itemsPerPage: z.int32().exactOptional(),
    links: z.array(LinkSchema).nullable().exactOptional(),
    totalResults: z.int32().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TreatyResourceCollection')

export const getApiBusinessItemIdRoute = createRoute({
  method: 'get',
  path: '/api/BusinessItem/{id}',
  tags: ['BusinessItem'],
  summary: 'Returns business item by ID.',
  operationId: 'GetBusinessItemById',
  request: {
    params: z.object({
      id: z
        .string()
        .nullable()
        .openapi({
          param: {
            description: 'Business item with the ID specified',
            in: 'path',
            name: 'id',
            required: true,
            schema: {
              description: 'Business item with the ID specified',
              nullable: true,
              type: 'string',
            },
          },
          description: 'Business item with the ID specified',
        }),
    }),
  },
  responses: {
    200: {
      description: 'The requested business item',
      content: {
        'application/json': { schema: BusinessItemResourceSchema },
        'text/json': { schema: BusinessItemResourceSchema },
        'text/plain': { schema: BusinessItemResourceSchema },
      },
    },
    400: { description: 'Bad Request' },
    404: { description: "If the item doesn't exist" },
  },
})

export const getApiGovernmentOrganisationRoute = createRoute({
  method: 'get',
  path: '/api/GovernmentOrganisation',
  tags: ['GovernmentOrganisation'],
  summary: 'Returns all government organisations.',
  operationId: 'GetOrganisations',
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: GovernmentOrganisationResourceCollectionSchema },
        'text/json': { schema: GovernmentOrganisationResourceCollectionSchema },
        'text/plain': { schema: GovernmentOrganisationResourceCollectionSchema },
      },
    },
  },
})

export const getApiSeriesMembershipRoute = createRoute({
  method: 'get',
  path: '/api/SeriesMembership',
  tags: ['SeriesMembership'],
  summary: 'Returns all series memberships.',
  operationId: 'GetSeriesMemberships',
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: SeriesMembershipResourceCollectionSchema },
        'text/json': { schema: SeriesMembershipResourceCollectionSchema },
        'text/plain': { schema: SeriesMembershipResourceCollectionSchema },
      },
    },
  },
})

export const getApiTreatyRoute = createRoute({
  method: 'get',
  path: '/api/Treaty',
  tags: ['Treaty'],
  summary: 'Returns a list of treaties.',
  operationId: 'GetTreaties',
  request: {
    query: z.object({
      SearchText: z
        .string()
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            description: 'Treaties which contains the search text specified',
            in: 'query',
            name: 'SearchText',
            schema: {
              description: 'Treaties which contains the search text specified',
              nullable: true,
              type: 'string',
            },
            required: false,
          },
          description: 'Treaties which contains the search text specified',
        }),
      GovernmentOrganisationId: z
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
              z.int32().min(1).max(2147483647),
            )
            .nullable(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Treaties with the government organisation id specified',
            in: 'query',
            name: 'GovernmentOrganisationId',
            schema: {
              description: 'Treaties with the government organisation id specified',
              format: 'int32',
              maximum: 2147483647,
              minimum: 1,
              nullable: true,
              type: 'integer',
            },
            required: false,
          },
          description: 'Treaties with the government organisation id specified',
        }),
      Series: SeriesMembershipTypeSchema.openapi({
        param: {
          description: 'Treaties with the series membership type specified',
          in: 'query',
          name: 'Series',
          schema: { $ref: '#/components/schemas/SeriesMembershipType' },
          required: false,
        },
      }).exactOptional(),
      ParliamentaryProcess: ParliamentaryProcessSchema.openapi({
        param: {
          description: 'Treaties where the parliamentary process is concluded or notconcluded',
          in: 'query',
          name: 'ParliamentaryProcess',
          schema: { $ref: '#/components/schemas/ParliamentaryProcess' },
          required: false,
        },
      }).exactOptional(),
      DebateScheduled: z
        .preprocess((val) => (val === 'null' ? null : val), z.stringbool().nullable())
        .exactOptional()
        .openapi({
          param: {
            description: 'Treaties which contain a scheduled debate',
            in: 'query',
            name: 'DebateScheduled',
            schema: {
              description: 'Treaties which contain a scheduled debate',
              nullable: true,
              type: 'boolean',
            },
            required: false,
          },
          description: 'Treaties which contain a scheduled debate',
        }),
      MotionToNotRatify: z
        .preprocess((val) => (val === 'null' ? null : val), z.stringbool().nullable())
        .exactOptional()
        .openapi({
          param: {
            description: 'Treaties which contain a motion to not ratify',
            in: 'query',
            name: 'MotionToNotRatify',
            schema: {
              description: 'Treaties which contain a motion to not ratify',
              nullable: true,
              type: 'boolean',
            },
            required: false,
          },
          description: 'Treaties which contain a motion to not ratify',
        }),
      RecommendedNotRatify: z
        .preprocess((val) => (val === 'null' ? null : val), z.stringbool().nullable())
        .exactOptional()
        .openapi({
          param: {
            description: 'Treaties which are recommended to not ratify',
            in: 'query',
            name: 'RecommendedNotRatify',
            schema: {
              description: 'Treaties which are recommended to not ratify',
              nullable: true,
              type: 'boolean',
            },
            required: false,
          },
          description: 'Treaties which are recommended to not ratify',
        }),
      House: HouseSchema.openapi({
        param: {
          description: 'Treaties which are laid in the specified house',
          in: 'query',
          name: 'House',
          schema: { $ref: '#/components/schemas/House' },
          required: false,
        },
      }).exactOptional(),
      Skip: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(0).max(2147483647),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The number of records to skip from the first, default is 0',
            in: 'query',
            name: 'Skip',
            schema: {
              description: 'The number of records to skip from the first, default is 0',
              format: 'int32',
              maximum: 2147483647,
              minimum: 0,
              type: 'integer',
            },
            required: false,
          },
          description: 'The number of records to skip from the first, default is 0',
        }),
      Take: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(0).max(2147483647),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The number of records to return, default is 20',
            in: 'query',
            name: 'Take',
            schema: {
              description: 'The number of records to return, default is 20',
              format: 'int32',
              maximum: 2147483647,
              minimum: 0,
              type: 'integer',
            },
            required: false,
          },
          description: 'The number of records to return, default is 20',
        }),
    }),
  },
  responses: {
    200: {
      description: 'A list of treaties',
      content: {
        'application/json': { schema: TreatyResourceCollectionSchema },
        'text/json': { schema: TreatyResourceCollectionSchema },
        'text/plain': { schema: TreatyResourceCollectionSchema },
      },
    },
    400: { description: 'Bad Request' },
  },
})

export const getApiTreatyIdRoute = createRoute({
  method: 'get',
  path: '/api/Treaty/{id}',
  tags: ['Treaty'],
  summary: 'Returns a treaty by ID.',
  operationId: 'GetTreatyById',
  request: {
    params: z.object({
      id: z
        .string()
        .nullable()
        .openapi({
          param: {
            description: 'Treaty with ID specified',
            in: 'path',
            name: 'id',
            required: true,
            schema: { description: 'Treaty with ID specified', nullable: true, type: 'string' },
          },
          description: 'Treaty with ID specified',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Details of the requested treaty',
      content: {
        'application/json': { schema: TreatyResourceSchema },
        'text/json': { schema: TreatyResourceSchema },
        'text/plain': { schema: TreatyResourceSchema },
      },
    },
    400: { description: 'Bad Request' },
    404: { description: "If the treaty can't be found" },
  },
})

export const getApiTreatyIdBusinessItemsRoute = createRoute({
  method: 'get',
  path: '/api/Treaty/{id}/BusinessItems',
  tags: ['Treaty'],
  summary: 'Returns business items belonging to the treaty with ID.',
  operationId: 'GetBusinessItemsByTreatyId',
  request: {
    params: z.object({
      id: z
        .string()
        .nullable()
        .openapi({
          param: {
            description: 'Business items belonging to treaty with the ID specified',
            in: 'path',
            name: 'id',
            required: true,
            schema: {
              description: 'Business items belonging to treaty with the ID specified',
              nullable: true,
              type: 'string',
            },
          },
          description: 'Business items belonging to treaty with the ID specified',
        }),
    }),
  },
  responses: {
    200: {
      description: 'The business items for the requested treaty',
      content: {
        'application/json': { schema: BusinessItemResourceCollectionSchema },
        'text/json': { schema: BusinessItemResourceCollectionSchema },
        'text/plain': { schema: BusinessItemResourceCollectionSchema },
      },
    },
    400: { description: 'Bad Request' },
    404: { description: 'If the treaty cannot be found' },
  },
})
