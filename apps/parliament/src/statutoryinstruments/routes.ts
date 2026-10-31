import { createRoute, z } from '@hono/zod-openapi'

const HouseSchema = z.enum(['Commons', 'Lords']).openapi('House')

const BusinessItemHouseSchema = z
  .strictObject({ house: HouseSchema.exactOptional(), name: z.string().nullable().exactOptional() })
  .openapi({ required: [] })
  .openapi('BusinessItemHouse')

const LaidPaperTypeSchema = z
  .enum(['StatutoryInstrument', 'ProposedNegative'])
  .openapi('LaidPaperType')

const BusinessItemSchema = z
  .strictObject({
    businessItemUri: z.url().nullable().exactOptional(),
    houseId: z.string().nullable().exactOptional(),
    houseName: z.string().nullable().exactOptional(),
    houseUri: z.url().nullable().exactOptional(),
    houses: z.array(BusinessItemHouseSchema).nullable().exactOptional(),
    id: z.string().nullable().exactOptional(),
    itemDate: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    laidPaperType: LaidPaperTypeSchema.exactOptional(),
    link: z.string().nullable().exactOptional(),
    procedureStepId: z.string().nullable().exactOptional(),
    procedureStepUri: z.url().nullable().exactOptional(),
    sequence: z.int32().exactOptional(),
    statutoryInstrumentId: z.string().nullable().exactOptional(),
    statutoryInstrumentUri: z.url().nullable().exactOptional(),
    stepName: z.string().nullable().exactOptional(),
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
  .strictObject({
    departmentId: z.int32().nullable().exactOptional(),
    id: z.string().nullable().exactOptional(),
    name: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Department')

const LaidPaperSummarySchema = z
  .strictObject({
    id: z.string().nullable().exactOptional(),
    name: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('LaidPaperSummary')

const LayingBodySchema = z
  .strictObject({
    departmentId: z.int32().nullable().exactOptional(),
    id: z.string().nullable().exactOptional(),
    name: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('LayingBody')

const LayingBodyResourceSchema = z
  .strictObject({
    links: z.array(LinkSchema).nullable().exactOptional(),
    value: LayingBodySchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('LayingBodyResource')

const LayingBodyResourceCollectionSchema = z
  .strictObject({
    items: z.array(LayingBodyResourceSchema).nullable().exactOptional(),
    itemsPerPage: z.int32().exactOptional(),
    links: z.array(LinkSchema).nullable().exactOptional(),
    totalResults: z.int32().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('LayingBodyResourceCollection')

const ParliamentaryProcessSchema = z
  .enum(['NotConcluded', 'Concluded'])
  .openapi('ParliamentaryProcess')

const ProblemDetailsSchema = z
  .object({
    detail: z.string().nullable().exactOptional(),
    instance: z.string().nullable().exactOptional(),
    status: z.int32().nullable().exactOptional(),
    title: z.string().nullable().exactOptional(),
    type: z.string().nullable().exactOptional(),
  })
  .catchall(z.any())
  .openapi('ProblemDetails')

const ProcedureSchema = z
  .strictObject({
    id: z.string().nullable().exactOptional(),
    name: z.string().nullable().exactOptional(),
    uri: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Procedure')

const ProcedureDetailsSchema = z
  .strictObject({
    description: z.string().nullable().exactOptional(),
    id: z.string().nullable().exactOptional(),
    name: z.string().nullable().exactOptional(),
    uri: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ProcedureDetails')

const ProcedureDetailsResourceSchema = z
  .strictObject({
    links: z.array(LinkSchema).nullable().exactOptional(),
    value: ProcedureDetailsSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ProcedureDetailsResource')

const ProcedureResourceSchema = z
  .strictObject({
    links: z.array(LinkSchema).nullable().exactOptional(),
    value: ProcedureSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ProcedureResource')

const ProcedureResourceCollectionSchema = z
  .strictObject({
    items: z.array(ProcedureResourceSchema).nullable().exactOptional(),
    itemsPerPage: z.int32().exactOptional(),
    links: z.array(LinkSchema).nullable().exactOptional(),
    totalResults: z.int32().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ProcedureResourceCollection')

const ProposedNegativeStatutoryInstrumentSchema = z
  .strictObject({
    commonsLayingDate: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    commonsPublishedDate: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    departmentId: z.int32().nullable().exactOptional(),
    id: z.string().nullable().exactOptional(),
    layingBodyDepartment: DepartmentSchema.exactOptional(),
    layingBodyId: z.string().nullable().exactOptional(),
    layingBodyName: z.string().nullable().exactOptional(),
    link: z.string().nullable().exactOptional(),
    lordsLayingDate: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    lordsPublishedDate: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    name: z.string().nullable().exactOptional(),
    procedure: ProcedureSchema.exactOptional(),
    procedureName: z.string().nullable().exactOptional(),
    procedureUri: z.string().nullable().exactOptional(),
    statutoryInstrument: LaidPaperSummarySchema.exactOptional(),
    statutoryInstrumentPaperId: z.string().nullable().exactOptional(),
    statutoryInstrumentPaperName: z.string().nullable().exactOptional(),
    uri: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ProposedNegativeStatutoryInstrument')

const ProposedNegativeStatutoryInstrumentResourceSchema = z
  .strictObject({
    links: z.array(LinkSchema).nullable().exactOptional(),
    value: ProposedNegativeStatutoryInstrumentSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ProposedNegativeStatutoryInstrumentResource')

const ProposedNegativeStatutoryInstrumentResourceCollectionSchema = z
  .strictObject({
    items: z.array(ProposedNegativeStatutoryInstrumentResourceSchema).nullable().exactOptional(),
    itemsPerPage: z.int32().exactOptional(),
    links: z.array(LinkSchema).nullable().exactOptional(),
    totalResults: z.int32().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ProposedNegativeStatutoryInstrumentResourceCollection')

const StatutoryInstrumentSchema = z
  .strictObject({
    commonsLayingDate: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    commonsPublishedDate: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    departmentId: z.int32().nullable().exactOptional(),
    id: z.string().nullable().exactOptional(),
    layingBodyDepartment: DepartmentSchema.exactOptional(),
    layingBodyId: z.string().nullable().exactOptional(),
    layingBodyName: z.string().nullable().exactOptional(),
    link: z.string().nullable().exactOptional(),
    lordsLayingDate: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    lordsPublishedDate: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    name: z.string().nullable().exactOptional(),
    paperComingIntoForceDate: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    paperComingIntoForceNote: z.string().nullable().exactOptional(),
    paperMadeDate: z.iso.datetime({ offset: true }).exactOptional(),
    paperNumber: z.int32().nullable().exactOptional(),
    paperPrefix: z.string().nullable().exactOptional(),
    paperYear: z.string().nullable().exactOptional(),
    procedure: ProcedureSchema.exactOptional(),
    procedureName: z.string().nullable().exactOptional(),
    procedureUri: z.string().nullable().exactOptional(),
    proposedNegativeStatutoryInstrument: LaidPaperSummarySchema.exactOptional(),
    proposedNegativeStatutoryInstrumentPaperId: z.string().nullable().exactOptional(),
    proposedNegativeStatutoryInstrumentPaperName: z.string().nullable().exactOptional(),
    uri: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('StatutoryInstrument')

const StatutoryInstrumentResourceSchema = z
  .strictObject({
    links: z.array(LinkSchema).nullable().exactOptional(),
    value: StatutoryInstrumentSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('StatutoryInstrumentResource')

const StatutoryInstrumentResourceCollectionSchema = z
  .strictObject({
    items: z.array(StatutoryInstrumentResourceSchema).nullable().exactOptional(),
    itemsPerPage: z.int32().exactOptional(),
    links: z.array(LinkSchema).nullable().exactOptional(),
    totalResults: z.int32().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('StatutoryInstrumentResourceCollection')

const StatutoryInstrumentTypeSchema = z
  .enum(['DraftAffirmative', 'DraftNegative', 'MadeAffirmative', 'MadeNegative'])
  .openapi('StatutoryInstrumentType')

export const getApiV1BusinessItemIdRoute = createRoute({
  method: 'get',
  path: '/api/v1/BusinessItem/{id}',
  tags: ['BusinessItem'],
  summary: 'Returns business item by ID.',
  operationId: 'GetBusinessItemById',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Business item with the ID specified',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      LaidPaper: LaidPaperTypeSchema.openapi({
        param: {
          description: 'Business item by laid paper type',
          in: 'query',
          name: 'LaidPaper',
          schema: { $ref: '#/components/schemas/LaidPaperType' },
          required: false,
        },
      }).exactOptional(),
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
    400: {
      description: 'Bad Request',
      content: {
        'application/json': { schema: ProblemDetailsSchema },
        'text/json': { schema: ProblemDetailsSchema },
        'text/plain': { schema: ProblemDetailsSchema },
      },
    },
    404: {
      description: "If the item doesn't exist",
      content: {
        'application/json': { schema: ProblemDetailsSchema },
        'text/json': { schema: ProblemDetailsSchema },
        'text/plain': { schema: ProblemDetailsSchema },
      },
    },
  },
})

export const getApiV1LayingBodyRoute = createRoute({
  method: 'get',
  path: '/api/v1/LayingBody',
  tags: ['LayingBody'],
  summary: 'Returns all laying bodies.',
  operationId: 'GetLayingBodies',
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: LayingBodyResourceCollectionSchema },
        'text/json': { schema: LayingBodyResourceCollectionSchema },
        'text/plain': { schema: LayingBodyResourceCollectionSchema },
      },
    },
  },
})

export const getApiV1ProcedureRoute = createRoute({
  method: 'get',
  path: '/api/v1/Procedure',
  tags: ['Procedure'],
  summary: 'Returns all procedures.',
  operationId: 'GetProceduresV1',
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: ProcedureResourceCollectionSchema },
        'text/json': { schema: ProcedureResourceCollectionSchema },
        'text/plain': { schema: ProcedureResourceCollectionSchema },
      },
    },
  },
})

export const getApiV1ProcedureIdRoute = createRoute({
  method: 'get',
  path: '/api/v1/Procedure/{id}',
  tags: ['Procedure'],
  summary: 'Returns procedure by ID.',
  operationId: 'GetProceduresByIdV1',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Procedure with the ID specified',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: ProcedureDetailsResourceSchema },
        'text/json': { schema: ProcedureDetailsResourceSchema },
        'text/plain': { schema: ProcedureDetailsResourceSchema },
      },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': { schema: ProblemDetailsSchema },
        'text/json': { schema: ProblemDetailsSchema },
        'text/plain': { schema: ProblemDetailsSchema },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': { schema: ProblemDetailsSchema },
        'text/json': { schema: ProblemDetailsSchema },
        'text/plain': { schema: ProblemDetailsSchema },
      },
    },
  },
})

export const getApiV1ProposedNegativeStatutoryInstrumentRoute = createRoute({
  method: 'get',
  path: '/api/v1/ProposedNegativeStatutoryInstrument',
  tags: ['ProposedNegativeStatutoryInstrument'],
  summary: 'Returns a list of proposed negative statutory instruments.',
  operationId: 'GetProposedNegativeStatutoryInstruments',
  request: {
    query: z.object({
      Name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Proposed negative statutory instruments with the name provided',
            in: 'query',
            name: 'Name',
            schema: { type: 'string' },
            required: false,
          },
        }),
      RecommendedForProcedureChange: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Proposed negative statutory instruments recommended for procedure change',
            in: 'query',
            name: 'RecommendedForProcedureChange',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      DepartmentId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(1).max(2147483647),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Proposed negative statutory instruments with the department ID specified',
            in: 'query',
            name: 'DepartmentId',
            schema: { format: 'int32', maximum: 2147483647, minimum: 1, type: 'integer' },
            required: false,
          },
        }),
      LayingBodyId: z
        .string()
        .regex(/^[a-zA-Z0-9]{8}$/)
        .exactOptional()
        .openapi({
          param: {
            description:
              'Proposed negative statutory instruments with the laying body ID specified',
            in: 'query',
            name: 'LayingBodyId',
            schema: { pattern: '^[a-zA-Z0-9]{8}$', type: 'string' },
            required: false,
          },
        }),
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
            schema: { format: 'int32', maximum: 2147483647, minimum: 0, type: 'integer' },
            required: false,
          },
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
            schema: { format: 'int32', maximum: 2147483647, minimum: 0, type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: ProposedNegativeStatutoryInstrumentResourceCollectionSchema },
        'text/json': { schema: ProposedNegativeStatutoryInstrumentResourceCollectionSchema },
        'text/plain': { schema: ProposedNegativeStatutoryInstrumentResourceCollectionSchema },
      },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': { schema: ProblemDetailsSchema },
        'text/json': { schema: ProblemDetailsSchema },
        'text/plain': { schema: ProblemDetailsSchema },
      },
    },
  },
})

export const getApiV1ProposedNegativeStatutoryInstrumentIdRoute = createRoute({
  method: 'get',
  path: '/api/v1/ProposedNegativeStatutoryInstrument/{id}',
  tags: ['ProposedNegativeStatutoryInstrument'],
  summary: 'Returns proposed negative statutory instrument by ID.',
  operationId: 'GetProposedNegativeStatutoryInstrumentById',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Proposed negative statutory instrument with the ID specified',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: ProposedNegativeStatutoryInstrumentResourceSchema },
        'text/json': { schema: ProposedNegativeStatutoryInstrumentResourceSchema },
        'text/plain': { schema: ProposedNegativeStatutoryInstrumentResourceSchema },
      },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': { schema: ProblemDetailsSchema },
        'text/json': { schema: ProblemDetailsSchema },
        'text/plain': { schema: ProblemDetailsSchema },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': { schema: ProblemDetailsSchema },
        'text/json': { schema: ProblemDetailsSchema },
        'text/plain': { schema: ProblemDetailsSchema },
      },
    },
  },
})

export const getApiV1ProposedNegativeStatutoryInstrumentIdBusinessItemsRoute = createRoute({
  method: 'get',
  path: '/api/v1/ProposedNegativeStatutoryInstrument/{id}/BusinessItems',
  tags: ['ProposedNegativeStatutoryInstrument'],
  summary: 'Returns business items belonging to a proposed negative statutory instrument.',
  operationId: 'GetBusinessItemsByProposedNegativeStatutoryInstrumentId',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description:
              'Business items belonging to proposed negative statutory instrument with the ID specified',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: BusinessItemResourceCollectionSchema },
        'text/json': { schema: BusinessItemResourceCollectionSchema },
        'text/plain': { schema: BusinessItemResourceCollectionSchema },
      },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': { schema: ProblemDetailsSchema },
        'text/json': { schema: ProblemDetailsSchema },
        'text/plain': { schema: ProblemDetailsSchema },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': { schema: ProblemDetailsSchema },
        'text/json': { schema: ProblemDetailsSchema },
        'text/plain': { schema: ProblemDetailsSchema },
      },
    },
  },
})

export const getApiV1StatutoryInstrumentRoute = createRoute({
  method: 'get',
  path: '/api/v1/StatutoryInstrument',
  tags: ['StatutoryInstrument'],
  summary: 'Returns a list of statutory instruments.',
  operationId: 'GetStatutoryInstruments',
  request: {
    query: z.object({
      Name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Statutory instruments with the name specified',
            in: 'query',
            name: 'Name',
            schema: { type: 'string' },
            required: false,
          },
        }),
      StatutoryInstrumentType: StatutoryInstrumentTypeSchema.openapi({
        param: {
          description:
            'Statutory instruments where the statutory instrument type is the type provided',
          in: 'query',
          name: 'StatutoryInstrumentType',
          schema: { $ref: '#/components/schemas/StatutoryInstrumentType' },
          required: false,
        },
      }).exactOptional(),
      ScheduledDebate: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Statutory instrument which contains a scheduled debate',
            in: 'query',
            name: 'ScheduledDebate',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      MotionToStop: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Statutory instruments which contains a motion to stop',
            in: 'query',
            name: 'MotionToStop',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      ConcernsRaisedByCommittee: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Statutory instruments which contains concerns raised by committee',
            in: 'query',
            name: 'ConcernsRaisedByCommittee',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      ParliamentaryProcessConcluded: ParliamentaryProcessSchema.openapi({
        param: {
          description:
            'Statutory instruments where the parliamentary process is concluded or notconcluded',
          in: 'query',
          name: 'ParliamentaryProcessConcluded',
          schema: { $ref: '#/components/schemas/ParliamentaryProcess' },
          required: false,
        },
      }).exactOptional(),
      DepartmentId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(1).max(2147483647),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Statutory instruments with the department ID specified',
            in: 'query',
            name: 'DepartmentId',
            schema: { format: 'int32', maximum: 2147483647, minimum: 1, type: 'integer' },
            required: false,
          },
        }),
      LayingBodyId: z
        .string()
        .regex(/^[a-zA-Z0-9]{8}$/)
        .exactOptional()
        .openapi({
          param: {
            description: 'Statutory instruments with the laying body ID specified',
            in: 'query',
            name: 'LayingBodyId',
            schema: { pattern: '^[a-zA-Z0-9]{8}$', type: 'string' },
            required: false,
          },
        }),
      House: HouseSchema.openapi({
        param: {
          description: 'Statutory instruments laid in the house specified',
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
            schema: { format: 'int32', maximum: 2147483647, minimum: 0, type: 'integer' },
            required: false,
          },
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
            schema: { format: 'int32', maximum: 2147483647, minimum: 0, type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: StatutoryInstrumentResourceCollectionSchema },
        'text/json': { schema: StatutoryInstrumentResourceCollectionSchema },
        'text/plain': { schema: StatutoryInstrumentResourceCollectionSchema },
      },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': { schema: ProblemDetailsSchema },
        'text/json': { schema: ProblemDetailsSchema },
        'text/plain': { schema: ProblemDetailsSchema },
      },
    },
  },
})

export const getApiV1StatutoryInstrumentIdRoute = createRoute({
  method: 'get',
  path: '/api/v1/StatutoryInstrument/{id}',
  tags: ['StatutoryInstrument'],
  summary: 'Returns a statutory instrument by ID.',
  operationId: 'GetStatutoryInstrumentById',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Statutory instrument with the ID specified',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: StatutoryInstrumentResourceSchema },
        'text/json': { schema: StatutoryInstrumentResourceSchema },
        'text/plain': { schema: StatutoryInstrumentResourceSchema },
      },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': { schema: ProblemDetailsSchema },
        'text/json': { schema: ProblemDetailsSchema },
        'text/plain': { schema: ProblemDetailsSchema },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': { schema: ProblemDetailsSchema },
        'text/json': { schema: ProblemDetailsSchema },
        'text/plain': { schema: ProblemDetailsSchema },
      },
    },
  },
})

export const getApiV1StatutoryInstrumentIdBusinessItemsRoute = createRoute({
  method: 'get',
  path: '/api/v1/StatutoryInstrument/{id}/BusinessItems',
  tags: ['StatutoryInstrument'],
  summary: 'Returns business items belonging to statutory instrument with ID.',
  operationId: 'GetBusinessItemsByStatutoryInstrumentId',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Business items belonging to statutory instrument with the ID specified',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: BusinessItemResourceCollectionSchema },
        'text/json': { schema: BusinessItemResourceCollectionSchema },
        'text/plain': { schema: BusinessItemResourceCollectionSchema },
      },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': { schema: ProblemDetailsSchema },
        'text/json': { schema: ProblemDetailsSchema },
        'text/plain': { schema: ProblemDetailsSchema },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': { schema: ProblemDetailsSchema },
        'text/json': { schema: ProblemDetailsSchema },
        'text/plain': { schema: ProblemDetailsSchema },
      },
    },
  },
})
