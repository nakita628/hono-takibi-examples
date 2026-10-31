import { createRoute, z } from '@hono/zod-openapi'

const ComparatorsSchema = z
  .enum(['LessThan', 'LessThanOrEqualTo', 'EqualTo', 'GreaterThanOrEqualTo', 'GreaterThan'])
  .openapi('Comparators')

const PartyVoteResultViewModelSchema = z
  .strictObject({
    partyName: z.string().nullable().exactOptional(),
    voteCount: z.int32().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PartyVoteResultViewModel')

const DivisionGroupByPartyViewModelSchema = z
  .strictObject({
    content: z.array(PartyVoteResultViewModelSchema).nullable().exactOptional(),
    contentCount: z.int32().exactOptional().openapi({ readOnly: true }),
    date: z.iso.datetime({ offset: true }).exactOptional(),
    divisionId: z.int32().exactOptional(),
    notContent: z.array(PartyVoteResultViewModelSchema).nullable().exactOptional(),
    notContentCount: z.int32().exactOptional().openapi({ readOnly: true }),
    number: z.int32().exactOptional(),
    title: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DivisionGroupByPartyViewModel')

const MemberViewModelSchema = z
  .strictObject({
    listAs: z.string().nullable().exactOptional(),
    memberFrom: z.string().nullable().exactOptional(),
    memberId: z.int32().exactOptional(),
    name: z.string().nullable().exactOptional(),
    party: z.string().nullable().exactOptional(),
    partyAbbreviation: z.string().nullable().exactOptional(),
    partyColour: z.string().nullable().exactOptional(),
    partyIsMainParty: z.boolean().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('MemberViewModel')

const DivisionViewModelSchema = z
  .strictObject({
    amendmentMotionNotes: z.string().nullable().exactOptional(),
    authoritativeContentCount: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Authoritative content count is the official count. This is the teller content count when tellers are present, but member content count when there are no tellers.',
      }),
    authoritativeNotContentCount: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Authoritative not content count is the official count. This is the teller not content count when tellers are present, but member not content count when there are no tellers.',
      }),
    contentTellers: z.array(MemberViewModelSchema).nullable().exactOptional(),
    contents: z.array(MemberViewModelSchema).nullable().exactOptional(),
    date: z.iso.datetime({ offset: true }).exactOptional(),
    divisionHadTellers: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether the division had tellers or not' }),
    divisionId: z.int32().exactOptional(),
    divisionWasExclusivelyRemote: z.boolean().exactOptional(),
    isGovernmentContent: z.boolean().exactOptional(),
    isGovernmentWin: z.boolean().nullable().exactOptional(),
    isHouse: z.boolean().nullable().exactOptional(),
    isWhipped: z.boolean().exactOptional(),
    memberContentCount: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'Member content count is the total tally of all members that voted content',
      }),
    memberNotContentCount: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Member not content count is the total tally of all members that voted not content',
      }),
    notContentTellers: z.array(MemberViewModelSchema).nullable().exactOptional(),
    notContents: z.array(MemberViewModelSchema).nullable().exactOptional(),
    notes: z.string().nullable().exactOptional(),
    number: z.int32().exactOptional(),
    remoteVotingEnd: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    remoteVotingStart: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    sponsoringMemberId: z.int32().nullable().exactOptional(),
    tellerContentCount: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Content count is count recorded by the tellers' }),
    tellerNotContentCount: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Not Content count recorded by the tellers' }),
    title: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DivisionViewModel')

const MemberVotingRecordViewModelSchema = z
  .strictObject({
    memberId: z.int32().exactOptional(),
    memberWasContent: z.boolean().exactOptional(),
    memberWasTeller: z.boolean().exactOptional(),
    publishedDivision: DivisionViewModelSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('MemberVotingRecordViewModel')

export const getDataDivisionsGroupedbypartyRoute = createRoute({
  method: 'get',
  path: '/data/Divisions/groupedbyparty',
  tags: ['Divisions'],
  summary: 'Return Divisions results grouped by party',
  description: 'Get a list of Divisions which contain grouped by party',
  request: {
    query: z.object({
      SearchTerm: z
        .string()
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            description: 'Divisions containing search term within title or number',
            in: 'query',
            name: 'SearchTerm',
            schema: {
              description: 'Divisions containing search term within title or number',
              nullable: true,
              type: 'string',
            },
            required: false,
          },
          description: 'Divisions containing search term within title or number',
        }),
      MemberId: z
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
              z.int32(),
            )
            .nullable(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Divisions returning Member with Member ID voting records',
            in: 'query',
            name: 'MemberId',
            schema: {
              description: 'Divisions returning Member with Member ID voting records',
              format: 'int32',
              nullable: true,
              type: 'integer',
            },
            required: false,
          },
          description: 'Divisions returning Member with Member ID voting records',
        }),
      IncludeWhenMemberWasTeller: z
        .preprocess((val) => (val === 'null' ? null : val), z.stringbool().nullable())
        .exactOptional()
        .openapi({
          param: {
            description: 'Divisions where member was a teller as well as if they actually voted',
            in: 'query',
            name: 'IncludeWhenMemberWasTeller',
            schema: {
              description: 'Divisions where member was a teller as well as if they actually voted',
              nullable: true,
              type: 'boolean',
            },
            required: false,
          },
          description: 'Divisions where member was a teller as well as if they actually voted',
        }),
      StartDate: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.iso.datetime({ offset: true }).nullable(),
      )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Divisions where division date in one or after date provided. Date format is yyyy-MM-dd',
            in: 'query',
            name: 'StartDate',
            schema: {
              description:
                'Divisions where division date in one or after date provided. Date format is yyyy-MM-dd',
              format: 'date-time',
              nullable: true,
              type: 'string',
            },
            required: false,
          },
          description:
            'Divisions where division date in one or after date provided. Date format is yyyy-MM-dd',
        }),
      EndDate: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.iso.datetime({ offset: true }).nullable(),
      )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Divisions where division date in one or before date provided. Date format is yyyy-MM-dd',
            in: 'query',
            name: 'EndDate',
            schema: {
              description:
                'Divisions where division date in one or before date provided. Date format is yyyy-MM-dd',
              format: 'date-time',
              nullable: true,
              type: 'string',
            },
            required: false,
          },
          description:
            'Divisions where division date in one or before date provided. Date format is yyyy-MM-dd',
        }),
      DivisionNumber: z
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
              z.int32(),
            )
            .nullable(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Division Number - as specified by the House, unique within a session. This is different to the division id which uniquely identifies a division in this system and is passed to the GET division endpoint',
            in: 'query',
            name: 'DivisionNumber',
            schema: {
              description:
                'Division Number - as specified by the House, unique within a session. This is different to the division id which uniquely identifies a division in this system and is passed to the GET division endpoint',
              format: 'int32',
              nullable: true,
              type: 'integer',
            },
            required: false,
          },
          description:
            'Division Number - as specified by the House, unique within a session. This is different to the division id which uniquely identifies a division in this system and is passed to the GET division endpoint',
        }),
      'TotalVotesCast.Comparator': ComparatorsSchema.openapi({
        param: {
          description: 'comparison operator to use',
          in: 'query',
          name: 'TotalVotesCast.Comparator',
          schema: { $ref: '#/components/schemas/Comparators' },
          required: false,
        },
      }).exactOptional(),
      'TotalVotesCast.ValueToCompare': z
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
          param: {
            description: 'value to compare to with the operator provided',
            in: 'query',
            name: 'TotalVotesCast.ValueToCompare',
            schema: {
              description: 'value to compare to with the operator provided',
              format: 'int32',
              type: 'integer',
            },
            required: false,
          },
          description: 'value to compare to with the operator provided',
        }),
      'Majority.Comparator': ComparatorsSchema.openapi({
        param: {
          description: 'comparison operator to use',
          in: 'query',
          name: 'Majority.Comparator',
          schema: { $ref: '#/components/schemas/Comparators' },
          required: false,
        },
      }).exactOptional(),
      'Majority.ValueToCompare': z
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
          param: {
            description: 'value to compare to with the operator provided',
            in: 'query',
            name: 'Majority.ValueToCompare',
            schema: {
              description: 'value to compare to with the operator provided',
              format: 'int32',
              type: 'integer',
            },
            required: false,
          },
          description: 'value to compare to with the operator provided',
        }),
    }),
  },
  responses: {
    200: {
      description: 'List of divisions with votes grouped by party',
      content: {
        'application/json': { schema: DivisionGroupByPartyViewModelSchema },
        'text/json': { schema: DivisionGroupByPartyViewModelSchema },
        'text/plain': { schema: DivisionGroupByPartyViewModelSchema },
      },
    },
    400: { description: 'A parameter was not valid' },
  },
})

export const getDataDivisionsMembervotingRoute = createRoute({
  method: 'get',
  path: '/data/Divisions/membervoting',
  tags: ['Divisions'],
  summary: 'Return voting records for a Member',
  description: 'Get a list of voting records for a Member.',
  request: {
    query: z.object({
      MemberId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(1).max(2147483647),
        )
        .openapi({
          param: {
            description: 'Id number of a Member whose voting records are to be returned',
            in: 'query',
            name: 'MemberId',
            required: true,
            schema: {
              description: 'Id number of a Member whose voting records are to be returned',
              format: 'int32',
              maximum: 2147483647,
              minimum: 1,
              type: 'integer',
            },
          },
          description: 'Id number of a Member whose voting records are to be returned',
        }),
      SearchTerm: z
        .string()
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            description: 'Divisions containing search term within title or number',
            in: 'query',
            name: 'SearchTerm',
            schema: {
              description: 'Divisions containing search term within title or number',
              nullable: true,
              type: 'string',
            },
            required: false,
          },
          description: 'Divisions containing search term within title or number',
        }),
      IncludeWhenMemberWasTeller: z
        .preprocess((val) => (val === 'null' ? null : val), z.stringbool().nullable())
        .exactOptional()
        .openapi({
          param: {
            description: 'Divisions where member was a teller as well as if they actually voted',
            in: 'query',
            name: 'IncludeWhenMemberWasTeller',
            schema: {
              description: 'Divisions where member was a teller as well as if they actually voted',
              nullable: true,
              type: 'boolean',
            },
            required: false,
          },
          description: 'Divisions where member was a teller as well as if they actually voted',
        }),
      StartDate: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.iso.datetime({ offset: true }).nullable(),
      )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Divisions where division date in one or after date provided. Date format is yyyy-MM-dd',
            in: 'query',
            name: 'StartDate',
            schema: {
              description:
                'Divisions where division date in one or after date provided. Date format is yyyy-MM-dd',
              format: 'date-time',
              nullable: true,
              type: 'string',
            },
            required: false,
          },
          description:
            'Divisions where division date in one or after date provided. Date format is yyyy-MM-dd',
        }),
      EndDate: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.iso.datetime({ offset: true }).nullable(),
      )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Divisions where division date in one or before date provided. Date format is yyyy-MM-dd',
            in: 'query',
            name: 'EndDate',
            schema: {
              description:
                'Divisions where division date in one or before date provided. Date format is yyyy-MM-dd',
              format: 'date-time',
              nullable: true,
              type: 'string',
            },
            required: false,
          },
          description:
            'Divisions where division date in one or before date provided. Date format is yyyy-MM-dd',
        }),
      DivisionNumber: z
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
              z.int32(),
            )
            .nullable(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Division Number - as specified by the House, unique within a session. This is different to the division id which uniquely identifies a division in this system and is passed to the GET division endpoint',
            in: 'query',
            name: 'DivisionNumber',
            schema: {
              description:
                'Division Number - as specified by the House, unique within a session. This is different to the division id which uniquely identifies a division in this system and is passed to the GET division endpoint',
              format: 'int32',
              nullable: true,
              type: 'integer',
            },
            required: false,
          },
          description:
            'Division Number - as specified by the House, unique within a session. This is different to the division id which uniquely identifies a division in this system and is passed to the GET division endpoint',
        }),
      'TotalVotesCast.Comparator': ComparatorsSchema.openapi({
        param: {
          description: 'comparison operator to use',
          in: 'query',
          name: 'TotalVotesCast.Comparator',
          schema: { $ref: '#/components/schemas/Comparators' },
          required: false,
        },
      }).exactOptional(),
      'TotalVotesCast.ValueToCompare': z
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
          param: {
            description: 'value to compare to with the operator provided',
            in: 'query',
            name: 'TotalVotesCast.ValueToCompare',
            schema: {
              description: 'value to compare to with the operator provided',
              format: 'int32',
              type: 'integer',
            },
            required: false,
          },
          description: 'value to compare to with the operator provided',
        }),
      'Majority.Comparator': ComparatorsSchema.openapi({
        param: {
          description: 'comparison operator to use',
          in: 'query',
          name: 'Majority.Comparator',
          schema: { $ref: '#/components/schemas/Comparators' },
          required: false,
        },
      }).exactOptional(),
      'Majority.ValueToCompare': z
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
          param: {
            description: 'value to compare to with the operator provided',
            in: 'query',
            name: 'Majority.ValueToCompare',
            schema: {
              description: 'value to compare to with the operator provided',
              format: 'int32',
              type: 'integer',
            },
            required: false,
          },
          description: 'value to compare to with the operator provided',
        }),
      skip: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            description: 'The number of records to skip. Must be a positive integer. Default is 0',
            in: 'query',
            name: 'skip',
            schema: {
              default: 0,
              description:
                'The number of records to skip. Must be a positive integer. Default is 0',
              format: 'int32',
              type: 'integer',
            },
            required: false,
          },
          description: 'The number of records to skip. Must be a positive integer. Default is 0',
        }),
      take: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .default(25)
        .exactOptional()
        .openapi({
          param: {
            description:
              'The number of records to return per page. Must be more than 0. Default is 25',
            in: 'query',
            name: 'take',
            schema: {
              default: 25,
              description:
                'The number of records to return per page. Must be more than 0. Default is 25',
              format: 'int32',
              type: 'integer',
            },
            required: false,
          },
          description:
            'The number of records to return per page. Must be more than 0. Default is 25',
        }),
    }),
  },
  responses: {
    200: {
      description: 'List of voting records for a member',
      content: {
        'application/json': { schema: MemberVotingRecordViewModelSchema },
        'text/json': { schema: MemberVotingRecordViewModelSchema },
        'text/plain': { schema: MemberVotingRecordViewModelSchema },
      },
    },
    400: { description: 'A parameter was not valid' },
    503: { description: 'Temporary error occured when trying to get division' },
  },
})

export const getDataDivisionsSearchRoute = createRoute({
  method: 'get',
  path: '/data/Divisions/search',
  tags: ['Divisions'],
  summary: 'Return a list of Divisions',
  description: 'Get a list of Divisions which meet the specified criteria.',
  request: {
    query: z.object({
      SearchTerm: z
        .string()
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            description: 'Divisions containing search term within title or number',
            in: 'query',
            name: 'SearchTerm',
            schema: {
              description: 'Divisions containing search term within title or number',
              nullable: true,
              type: 'string',
            },
            required: false,
          },
          description: 'Divisions containing search term within title or number',
        }),
      MemberId: z
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
              z.int32(),
            )
            .nullable(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Divisions returning Member with Member ID voting records',
            in: 'query',
            name: 'MemberId',
            schema: {
              description: 'Divisions returning Member with Member ID voting records',
              format: 'int32',
              nullable: true,
              type: 'integer',
            },
            required: false,
          },
          description: 'Divisions returning Member with Member ID voting records',
        }),
      IncludeWhenMemberWasTeller: z
        .preprocess((val) => (val === 'null' ? null : val), z.stringbool().nullable())
        .exactOptional()
        .openapi({
          param: {
            description: 'Divisions where member was a teller as well as if they actually voted',
            in: 'query',
            name: 'IncludeWhenMemberWasTeller',
            schema: {
              description: 'Divisions where member was a teller as well as if they actually voted',
              nullable: true,
              type: 'boolean',
            },
            required: false,
          },
          description: 'Divisions where member was a teller as well as if they actually voted',
        }),
      StartDate: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.iso.datetime({ offset: true }).nullable(),
      )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Divisions where division date in one or after date provided. Date format is yyyy-MM-dd',
            in: 'query',
            name: 'StartDate',
            schema: {
              description:
                'Divisions where division date in one or after date provided. Date format is yyyy-MM-dd',
              format: 'date-time',
              nullable: true,
              type: 'string',
            },
            required: false,
          },
          description:
            'Divisions where division date in one or after date provided. Date format is yyyy-MM-dd',
        }),
      EndDate: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.iso.datetime({ offset: true }).nullable(),
      )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Divisions where division date in one or before date provided. Date format is yyyy-MM-dd',
            in: 'query',
            name: 'EndDate',
            schema: {
              description:
                'Divisions where division date in one or before date provided. Date format is yyyy-MM-dd',
              format: 'date-time',
              nullable: true,
              type: 'string',
            },
            required: false,
          },
          description:
            'Divisions where division date in one or before date provided. Date format is yyyy-MM-dd',
        }),
      DivisionNumber: z
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
              z.int32(),
            )
            .nullable(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Division Number - as specified by the House, unique within a session. This is different to the division id which uniquely identifies a division in this system and is passed to the GET division endpoint',
            in: 'query',
            name: 'DivisionNumber',
            schema: {
              description:
                'Division Number - as specified by the House, unique within a session. This is different to the division id which uniquely identifies a division in this system and is passed to the GET division endpoint',
              format: 'int32',
              nullable: true,
              type: 'integer',
            },
            required: false,
          },
          description:
            'Division Number - as specified by the House, unique within a session. This is different to the division id which uniquely identifies a division in this system and is passed to the GET division endpoint',
        }),
      'TotalVotesCast.Comparator': ComparatorsSchema.openapi({
        param: {
          description: 'comparison operator to use',
          in: 'query',
          name: 'TotalVotesCast.Comparator',
          schema: { $ref: '#/components/schemas/Comparators' },
          required: false,
        },
      }).exactOptional(),
      'TotalVotesCast.ValueToCompare': z
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
          param: {
            description: 'value to compare to with the operator provided',
            in: 'query',
            name: 'TotalVotesCast.ValueToCompare',
            schema: {
              description: 'value to compare to with the operator provided',
              format: 'int32',
              type: 'integer',
            },
            required: false,
          },
          description: 'value to compare to with the operator provided',
        }),
      'Majority.Comparator': ComparatorsSchema.openapi({
        param: {
          description: 'comparison operator to use',
          in: 'query',
          name: 'Majority.Comparator',
          schema: { $ref: '#/components/schemas/Comparators' },
          required: false,
        },
      }).exactOptional(),
      'Majority.ValueToCompare': z
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
          param: {
            description: 'value to compare to with the operator provided',
            in: 'query',
            name: 'Majority.ValueToCompare',
            schema: {
              description: 'value to compare to with the operator provided',
              format: 'int32',
              type: 'integer',
            },
            required: false,
          },
          description: 'value to compare to with the operator provided',
        }),
      skip: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            description: 'The number of records to skip. Must be a positive integer. Default is 0',
            in: 'query',
            name: 'skip',
            schema: {
              default: 0,
              description:
                'The number of records to skip. Must be a positive integer. Default is 0',
              format: 'int32',
              type: 'integer',
            },
            required: false,
          },
          description: 'The number of records to skip. Must be a positive integer. Default is 0',
        }),
      take: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .default(25)
        .exactOptional()
        .openapi({
          param: {
            description:
              'The number of records to return per page. Must be more than 0. Default is 25',
            in: 'query',
            name: 'take',
            schema: {
              default: 25,
              description:
                'The number of records to return per page. Must be more than 0. Default is 25',
              format: 'int32',
              type: 'integer',
            },
            required: false,
          },
          description:
            'The number of records to return per page. Must be more than 0. Default is 25',
        }),
    }),
  },
  responses: {
    200: {
      description: 'List of divisions matching specified parameters',
      content: {
        'application/json': { schema: z.array(DivisionViewModelSchema) },
        'text/json': { schema: z.array(DivisionViewModelSchema) },
        'text/plain': { schema: z.array(DivisionViewModelSchema) },
      },
    },
    400: { description: 'A parameter was not valid' },
    503: { description: 'Temporary error occured when trying to get division' },
  },
})

export const getDataDivisionsSearchTotalResultsRoute = createRoute({
  method: 'get',
  path: '/data/Divisions/searchTotalResults',
  tags: ['Divisions'],
  summary: 'Return total results count',
  description:
    'Get total count of Divisions meeting the specified query, useful for paging lists etc...',
  request: {
    query: z.object({
      SearchTerm: z
        .string()
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            description: 'Divisions containing search term within title or number',
            in: 'query',
            name: 'SearchTerm',
            schema: {
              description: 'Divisions containing search term within title or number',
              nullable: true,
              type: 'string',
            },
            required: false,
          },
          description: 'Divisions containing search term within title or number',
        }),
      MemberId: z
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
              z.int32(),
            )
            .nullable(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Divisions returning Member with Member ID voting records',
            in: 'query',
            name: 'MemberId',
            schema: {
              description: 'Divisions returning Member with Member ID voting records',
              format: 'int32',
              nullable: true,
              type: 'integer',
            },
            required: false,
          },
          description: 'Divisions returning Member with Member ID voting records',
        }),
      IncludeWhenMemberWasTeller: z
        .preprocess((val) => (val === 'null' ? null : val), z.stringbool().nullable())
        .exactOptional()
        .openapi({
          param: {
            description: 'Divisions where member was a teller as well as if they actually voted',
            in: 'query',
            name: 'IncludeWhenMemberWasTeller',
            schema: {
              description: 'Divisions where member was a teller as well as if they actually voted',
              nullable: true,
              type: 'boolean',
            },
            required: false,
          },
          description: 'Divisions where member was a teller as well as if they actually voted',
        }),
      StartDate: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.iso.datetime({ offset: true }).nullable(),
      )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Divisions where division date in one or after date provided. Date format is yyyy-MM-dd',
            in: 'query',
            name: 'StartDate',
            schema: {
              description:
                'Divisions where division date in one or after date provided. Date format is yyyy-MM-dd',
              format: 'date-time',
              nullable: true,
              type: 'string',
            },
            required: false,
          },
          description:
            'Divisions where division date in one or after date provided. Date format is yyyy-MM-dd',
        }),
      EndDate: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.iso.datetime({ offset: true }).nullable(),
      )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Divisions where division date in one or before date provided. Date format is yyyy-MM-dd',
            in: 'query',
            name: 'EndDate',
            schema: {
              description:
                'Divisions where division date in one or before date provided. Date format is yyyy-MM-dd',
              format: 'date-time',
              nullable: true,
              type: 'string',
            },
            required: false,
          },
          description:
            'Divisions where division date in one or before date provided. Date format is yyyy-MM-dd',
        }),
      DivisionNumber: z
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
              z.int32(),
            )
            .nullable(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Division Number - as specified by the House, unique within a session. This is different to the division id which uniquely identifies a division in this system and is passed to the GET division endpoint',
            in: 'query',
            name: 'DivisionNumber',
            schema: {
              description:
                'Division Number - as specified by the House, unique within a session. This is different to the division id which uniquely identifies a division in this system and is passed to the GET division endpoint',
              format: 'int32',
              nullable: true,
              type: 'integer',
            },
            required: false,
          },
          description:
            'Division Number - as specified by the House, unique within a session. This is different to the division id which uniquely identifies a division in this system and is passed to the GET division endpoint',
        }),
      'TotalVotesCast.Comparator': ComparatorsSchema.openapi({
        param: {
          description: 'comparison operator to use',
          in: 'query',
          name: 'TotalVotesCast.Comparator',
          schema: { $ref: '#/components/schemas/Comparators' },
          required: false,
        },
      }).exactOptional(),
      'TotalVotesCast.ValueToCompare': z
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
          param: {
            description: 'value to compare to with the operator provided',
            in: 'query',
            name: 'TotalVotesCast.ValueToCompare',
            schema: {
              description: 'value to compare to with the operator provided',
              format: 'int32',
              type: 'integer',
            },
            required: false,
          },
          description: 'value to compare to with the operator provided',
        }),
      'Majority.Comparator': ComparatorsSchema.openapi({
        param: {
          description: 'comparison operator to use',
          in: 'query',
          name: 'Majority.Comparator',
          schema: { $ref: '#/components/schemas/Comparators' },
          required: false,
        },
      }).exactOptional(),
      'Majority.ValueToCompare': z
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
          param: {
            description: 'value to compare to with the operator provided',
            in: 'query',
            name: 'Majority.ValueToCompare',
            schema: {
              description: 'value to compare to with the operator provided',
              format: 'int32',
              type: 'integer',
            },
            required: false,
          },
          description: 'value to compare to with the operator provided',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Division with id matching given divisionId',
      content: {
        'application/json': { schema: z.int32() },
        'text/json': { schema: z.int32() },
        'text/plain': { schema: z.int32() },
      },
    },
    400: { description: 'divisionId was not valid' },
  },
})

export const getDataDivisionsDivisionIdRoute = createRoute({
  method: 'get',
  path: '/data/Divisions/{divisionId}',
  tags: ['Divisions'],
  summary: 'Return a Division',
  description: 'Get a single Division which has the Id specified.',
  request: {
    params: z.object({
      divisionId: z
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
          param: {
            description: 'Division with ID specified',
            in: 'path',
            name: 'divisionId',
            required: true,
            schema: { description: 'Division with ID specified', format: 'int32', type: 'integer' },
          },
          description: 'Division with ID specified',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Division with id matching given divisionId',
      content: {
        'application/json': { schema: DivisionViewModelSchema },
        'text/json': { schema: DivisionViewModelSchema },
        'text/plain': { schema: DivisionViewModelSchema },
      },
    },
    400: { description: 'divisionId was not valid' },
    404: { description: 'Division with given divisionId was not found' },
    503: { description: 'Temporary error occured when trying to get division' },
  },
})
