import { createRoute, z } from '@hono/zod-openapi'

const AnsweredSchema = z.enum(['Any', 'Answered', 'Unanswered']).openapi('Answered')

const AttachmentViewModelSchema = z
  .strictObject({
    fileSizeBytes: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    fileType: z.string().nullable().exactOptional(),
    title: z.string().nullable().exactOptional(),
    url: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AttachmentViewModel')

const HouseEnumSchema = z.enum(['Bicameral', 'Commons', 'Lords']).openapi('HouseEnum')

const DailyReportViewModelSchema = z
  .strictObject({
    date: z.iso.datetime({ offset: true }).exactOptional(),
    fileSizeBytes: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    house: HouseEnumSchema.exactOptional(),
    url: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DailyReportViewModel')

const LinkSchema = z
  .strictObject({
    href: z.string().nullable().exactOptional(),
    method: z.string().nullable().exactOptional(),
    rel: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Link')

const DailyReportViewModelItemSchema = z
  .strictObject({
    links: z.array(LinkSchema).nullable().exactOptional(),
    value: DailyReportViewModelSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DailyReportViewModelItem')

const DailyReportViewModelSearchResultSchema = z
  .strictObject({
    results: z.array(DailyReportViewModelItemSchema).nullable().exactOptional(),
    totalResults: z.int32().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DailyReportViewModelSearchResult')

const GroupedQuestionViewModelSchema = z
  .strictObject({
    dateTabled: z.iso.datetime({ offset: true }).exactOptional(),
    questionUin: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GroupedQuestionViewModel')

const StatementLinkTypeEnumSchema = z
  .enum(['CorrectedStatement', 'CorrectedAnswer', 'JointStatement'])
  .openapi('StatementLinkTypeEnum')

const LinkedStatementsSchema = z
  .strictObject({
    linkDate: z.iso.datetime({ offset: true }).exactOptional(),
    linkType: StatementLinkTypeEnumSchema.exactOptional(),
    linkedStatementId: z.int32().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('LinkedStatements')

const MemberViewModelSchema = z
  .strictObject({
    id: z.int32().exactOptional(),
    listAs: z.string().nullable().exactOptional(),
    memberFrom: z.string().nullable().exactOptional(),
    name: z.string().nullable().exactOptional(),
    party: z.string().nullable().exactOptional(),
    partyAbbreviation: z.string().nullable().exactOptional(),
    partyColour: z.string().nullable().exactOptional(),
    thumbnailUrl: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('MemberViewModel')

const ProblemDetailsSchema = z
  .object({
    detail: z.string().nullable().exactOptional(),
    instance: z.string().nullable().exactOptional(),
    status: z.int32().nullable().exactOptional(),
    title: z.string().nullable().exactOptional(),
    type: z.string().nullable().exactOptional(),
  })
  .catchall(z.strictObject({}))
  .openapi('ProblemDetails')

const QuestionStatusEnumSchema = z
  .enum(['NotAnswered', 'AnsweredOnly', 'AllQuestions'])
  .openapi('QuestionStatusEnum')

const QuestionsViewModelSchema = z
  .strictObject({
    answerIsCorrection: z.boolean().nullable().exactOptional(),
    answerIsHolding: z.boolean().nullable().exactOptional(),
    answerText: z.string().nullable().exactOptional(),
    answeringBodyId: z.int32().exactOptional(),
    answeringBodyName: z.string().nullable().exactOptional(),
    answeringMember: MemberViewModelSchema.exactOptional(),
    answeringMemberId: z.int32().nullable().exactOptional(),
    askingMember: MemberViewModelSchema.exactOptional(),
    askingMemberId: z.int32().exactOptional(),
    attachmentCount: z.int32().exactOptional(),
    attachments: z.array(AttachmentViewModelSchema).nullable().exactOptional(),
    comparableAnswerText: z.string().nullable().exactOptional(),
    correctingMember: MemberViewModelSchema.exactOptional(),
    correctingMemberId: z.int32().nullable().exactOptional(),
    dateAnswerCorrected: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    dateAnswered: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    dateForAnswer: z.iso.datetime({ offset: true }).exactOptional(),
    dateHoldingAnswer: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    dateTabled: z.iso.datetime({ offset: true }).exactOptional(),
    groupedQuestions: z.array(z.string()).nullable().exactOptional(),
    groupedQuestionsDates: z.array(GroupedQuestionViewModelSchema).nullable().exactOptional(),
    heading: z.string().nullable().exactOptional(),
    house: HouseEnumSchema.exactOptional(),
    id: z.int32().exactOptional(),
    isNamedDay: z.boolean().exactOptional(),
    isWithdrawn: z.boolean().exactOptional(),
    memberHasInterest: z.boolean().exactOptional(),
    originalAnswerText: z.string().nullable().exactOptional(),
    questionText: z.string().nullable().exactOptional(),
    uin: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('QuestionsViewModel')

const QuestionsViewModelItemSchema = z
  .strictObject({
    links: z.array(LinkSchema).nullable().exactOptional(),
    value: QuestionsViewModelSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('QuestionsViewModelItem')

const QuestionsViewModelSearchResultSchema = z
  .strictObject({
    results: z.array(QuestionsViewModelItemSchema).nullable().exactOptional(),
    totalResults: z.int32().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('QuestionsViewModelSearchResult')

const StatementsViewModelSchema = z
  .strictObject({
    answeringBodyId: z.int32().exactOptional(),
    answeringBodyName: z.string().nullable().exactOptional(),
    attachments: z.array(AttachmentViewModelSchema).nullable().exactOptional(),
    dateMade: z.iso.datetime({ offset: true }).exactOptional(),
    hasAttachments: z.boolean().exactOptional(),
    hasLinkedStatements: z.boolean().exactOptional(),
    house: HouseEnumSchema.exactOptional(),
    id: z.int32().exactOptional(),
    linkedStatements: z.array(LinkedStatementsSchema).nullable().exactOptional(),
    member: MemberViewModelSchema.exactOptional(),
    memberId: z.int32().exactOptional(),
    memberRole: z.string().nullable().exactOptional(),
    noticeNumber: z.int32().exactOptional(),
    text: z.string().nullable().exactOptional(),
    title: z.string().nullable().exactOptional(),
    uin: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('StatementsViewModel')

const StatementsViewModelItemSchema = z
  .strictObject({
    links: z.array(LinkSchema).nullable().exactOptional(),
    value: StatementsViewModelSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('StatementsViewModelItem')

const StatementsViewModelSearchResultSchema = z
  .strictObject({
    results: z.array(StatementsViewModelItemSchema).nullable().exactOptional(),
    totalResults: z.int32().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('StatementsViewModelSearchResult')

export const getApiDailyreportsDailyreportsRoute = createRoute({
  method: 'get',
  path: '/api/dailyreports/dailyreports',
  tags: ['DailyReports'],
  summary: 'Returns a list of daily reports',
  request: {
    query: z.object({
      dateFrom: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.iso.datetime({ offset: true }).nullable(),
      )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Daily report with report date on or after the date specified. Date format yyyy-mm-dd',
            in: 'query',
            name: 'dateFrom',
            schema: {
              description:
                'Daily report with report date on or after the date specified. Date format yyyy-mm-dd',
              format: 'date-time',
              nullable: true,
              type: 'string',
            },
            required: false,
          },
          description:
            'Daily report with report date on or after the date specified. Date format yyyy-mm-dd',
        }),
      dateTo: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.iso.datetime({ offset: true }).nullable(),
      )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Daily report with report date on or before the date specified. Date format yyyy-mm-dd',
            in: 'query',
            name: 'dateTo',
            schema: {
              description:
                'Daily report with report date on or before the date specified. Date format yyyy-mm-dd',
              format: 'date-time',
              nullable: true,
              type: 'string',
            },
            required: false,
          },
          description:
            'Daily report with report date on or before the date specified. Date format yyyy-mm-dd',
        }),
      house: HouseEnumSchema.openapi({
        param: {
          description: 'Daily report relating to the House specified. Defaults to Bicameral',
          in: 'query',
          name: 'house',
          schema: { $ref: '#/components/schemas/HouseEnum' },
          required: false,
        },
      }).exactOptional(),
      skip: z
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
              z.int32().min(0).max(2147483647),
            )
            .nullable(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Number of records to skip, default is 0',
            in: 'query',
            name: 'skip',
            schema: {
              description: 'Number of records to skip, default is 0',
              format: 'int32',
              maximum: 2147483647,
              minimum: 0,
              nullable: true,
              type: 'integer',
            },
            required: false,
          },
          description: 'Number of records to skip, default is 0',
        }),
      take: z
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
              z.int32().min(0).max(2147483647),
            )
            .nullable(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Number of records to take, default is 20',
            in: 'query',
            name: 'take',
            schema: {
              description: 'Number of records to take, default is 20',
              format: 'int32',
              maximum: 2147483647,
              minimum: 0,
              nullable: true,
              type: 'integer',
            },
            required: false,
          },
          description: 'Number of records to take, default is 20',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: DailyReportViewModelSearchResultSchema },
        'text/json': { schema: DailyReportViewModelSearchResultSchema },
        'text/plain': { schema: DailyReportViewModelSearchResultSchema },
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

export const getApiWrittenquestionsQuestionsRoute = createRoute({
  method: 'get',
  path: '/api/writtenquestions/questions',
  tags: ['WrittenQuestions'],
  summary: 'Returns a list of written questions',
  request: {
    query: z.object({
      askingMemberId: z
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
            description: 'Written questions asked by member with member ID specified',
            in: 'query',
            name: 'askingMemberId',
            schema: {
              description: 'Written questions asked by member with member ID specified',
              format: 'int32',
              maximum: 2147483647,
              minimum: 1,
              nullable: true,
              type: 'integer',
            },
            required: false,
          },
          description: 'Written questions asked by member with member ID specified',
        }),
      answeringMemberId: z
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
            description: 'Written questions answered by member with member ID specified',
            in: 'query',
            name: 'answeringMemberId',
            schema: {
              description: 'Written questions answered by member with member ID specified',
              format: 'int32',
              maximum: 2147483647,
              minimum: 1,
              nullable: true,
              type: 'integer',
            },
            required: false,
          },
          description: 'Written questions answered by member with member ID specified',
        }),
      tabledWhenFrom: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.iso.datetime({ offset: true }).nullable(),
      )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Written questions tabled on or after the date specified. Date format yyyy-mm-dd',
            in: 'query',
            name: 'tabledWhenFrom',
            schema: {
              description:
                'Written questions tabled on or after the date specified. Date format yyyy-mm-dd',
              format: 'date-time',
              nullable: true,
              type: 'string',
            },
            required: false,
          },
          description:
            'Written questions tabled on or after the date specified. Date format yyyy-mm-dd',
        }),
      tabledWhenTo: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.iso.datetime({ offset: true }).nullable(),
      )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Written questions tabled on or before the date specified. Date format yyyy-mm-dd',
            in: 'query',
            name: 'tabledWhenTo',
            schema: {
              description:
                'Written questions tabled on or before the date specified. Date format yyyy-mm-dd',
              format: 'date-time',
              nullable: true,
              type: 'string',
            },
            required: false,
          },
          description:
            'Written questions tabled on or before the date specified. Date format yyyy-mm-dd',
        }),
      answered: AnsweredSchema.openapi({
        param: {
          description: 'Written questions that have been answered, unanswered or either.',
          in: 'query',
          name: 'answered',
          schema: { $ref: '#/components/schemas/Answered' },
          required: false,
        },
      }).exactOptional(),
      answeredWhenFrom: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.iso.datetime({ offset: true }).nullable(),
      )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Written questions answered on or after the date specified. Date format yyyy-mm-dd',
            in: 'query',
            name: 'answeredWhenFrom',
            schema: {
              description:
                'Written questions answered on or after the date specified. Date format yyyy-mm-dd',
              format: 'date-time',
              nullable: true,
              type: 'string',
            },
            required: false,
          },
          description:
            'Written questions answered on or after the date specified. Date format yyyy-mm-dd',
        }),
      answeredWhenTo: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.iso.datetime({ offset: true }).nullable(),
      )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Written questions answered on or before the date specified. Date format yyyy-mm-dd',
            in: 'query',
            name: 'answeredWhenTo',
            schema: {
              description:
                'Written questions answered on or before the date specified. Date format yyyy-mm-dd',
              format: 'date-time',
              nullable: true,
              type: 'string',
            },
            required: false,
          },
          description:
            'Written questions answered on or before the date specified. Date format yyyy-mm-dd',
        }),
      questionStatus: QuestionStatusEnumSchema.openapi({
        param: {
          description: 'Written questions with the status specified',
          in: 'query',
          name: 'questionStatus',
          schema: { $ref: '#/components/schemas/QuestionStatusEnum' },
          required: false,
        },
      }).exactOptional(),
      includeWithdrawn: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Include written questions that have been withdrawn',
            in: 'query',
            name: 'includeWithdrawn',
            schema: {
              description: 'Include written questions that have been withdrawn',
              type: 'boolean',
            },
            required: false,
          },
          description: 'Include written questions that have been withdrawn',
        }),
      expandMember: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Expand the details of Members in the results',
            in: 'query',
            name: 'expandMember',
            schema: {
              description: 'Expand the details of Members in the results',
              type: 'boolean',
            },
            required: false,
          },
          description: 'Expand the details of Members in the results',
        }),
      correctedWhenFrom: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.iso.datetime({ offset: true }).nullable(),
      )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Written questions corrected on or after the date specified. Date format yyyy-mm-dd',
            in: 'query',
            name: 'correctedWhenFrom',
            schema: {
              description:
                'Written questions corrected on or after the date specified. Date format yyyy-mm-dd',
              format: 'date-time',
              nullable: true,
              type: 'string',
            },
            required: false,
          },
          description:
            'Written questions corrected on or after the date specified. Date format yyyy-mm-dd',
        }),
      correctedWhenTo: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.iso.datetime({ offset: true }).nullable(),
      )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Written questions corrected on or before the date specified. Date format yyyy-mm-dd',
            in: 'query',
            name: 'correctedWhenTo',
            schema: {
              description:
                'Written questions corrected on or before the date specified. Date format yyyy-mm-dd',
              format: 'date-time',
              nullable: true,
              type: 'string',
            },
            required: false,
          },
          description:
            'Written questions corrected on or before the date specified. Date format yyyy-mm-dd',
        }),
      searchTerm: z
        .string()
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Written questions / statements containing the search term specified, searches item content',
            in: 'query',
            name: 'searchTerm',
            schema: {
              description:
                'Written questions / statements containing the search term specified, searches item content',
              nullable: true,
              type: 'string',
            },
            required: false,
          },
          description:
            'Written questions / statements containing the search term specified, searches item content',
        }),
      uIN: z
        .string()
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            description: 'Written questions / statements with the uin specified',
            in: 'query',
            name: 'uIN',
            schema: {
              description: 'Written questions / statements with the uin specified',
              nullable: true,
              type: 'string',
            },
            required: false,
          },
          description: 'Written questions / statements with the uin specified',
        }),
      answeringBodies: z
        .preprocess(
          (val) => (val === 'null' ? null : val),
          z
            .preprocess(
              (val) => (val === undefined || Array.isArray(val) ? val : [val]),
              z.array(
                z.preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                ),
              ),
            )
            .nullable(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Written questions / statements relating to the answering bodies with the IDs specified',
            in: 'query',
            name: 'answeringBodies',
            schema: {
              description:
                'Written questions / statements relating to the answering bodies with the IDs specified',
              items: { format: 'int32', type: 'integer' },
              nullable: true,
              type: 'array',
            },
            required: false,
          },
          description:
            'Written questions / statements relating to the answering bodies with the IDs specified',
        }),
      members: z
        .preprocess(
          (val) => (val === 'null' ? null : val),
          z
            .preprocess(
              (val) => (val === undefined || Array.isArray(val) ? val : [val]),
              z.array(
                z.preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                ),
              ),
            )
            .nullable(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Written questions / statements relating to the members with the IDs specified',
            in: 'query',
            name: 'members',
            schema: {
              description:
                'Written questions / statements relating to the members with the IDs specified',
              items: { format: 'int32', type: 'integer' },
              nullable: true,
              type: 'array',
            },
            required: false,
          },
          description:
            'Written questions / statements relating to the members with the IDs specified',
        }),
      house: HouseEnumSchema.openapi({
        param: {
          description: 'Written questions / statements relating to the House specified',
          in: 'query',
          name: 'house',
          schema: { $ref: '#/components/schemas/HouseEnum' },
          required: false,
        },
      }).exactOptional(),
      skip: z
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
              z.int32().min(0).max(2147483647),
            )
            .nullable(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Number of records to skip, default is 0',
            in: 'query',
            name: 'skip',
            schema: {
              description: 'Number of records to skip, default is 0',
              format: 'int32',
              maximum: 2147483647,
              minimum: 0,
              nullable: true,
              type: 'integer',
            },
            required: false,
          },
          description: 'Number of records to skip, default is 0',
        }),
      take: z
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
              z.int32().min(0).max(2147483647),
            )
            .nullable(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Number of records to take, default is 20',
            in: 'query',
            name: 'take',
            schema: {
              description: 'Number of records to take, default is 20',
              format: 'int32',
              maximum: 2147483647,
              minimum: 0,
              nullable: true,
              type: 'integer',
            },
            required: false,
          },
          description: 'Number of records to take, default is 20',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: QuestionsViewModelSearchResultSchema },
        'text/json': { schema: QuestionsViewModelSearchResultSchema },
        'text/plain': { schema: QuestionsViewModelSearchResultSchema },
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

export const getApiWrittenquestionsQuestionsDateUinRoute = createRoute({
  method: 'get',
  path: '/api/writtenquestions/questions/{date}/{uin}',
  tags: ['WrittenQuestions'],
  summary: 'Returns a written question',
  request: {
    params: z.object({
      date: z.iso
        .datetime({ offset: true })
        .openapi({
          param: {
            description: 'Written question on date specified',
            in: 'path',
            name: 'date',
            required: true,
            schema: {
              description: 'Written question on date specified',
              format: 'date-time',
              type: 'string',
            },
          },
          description: 'Written question on date specified',
        }),
      uin: z
        .string()
        .nullable()
        .openapi({
          param: {
            description: 'Written question with uid specified',
            in: 'path',
            name: 'uin',
            required: true,
            schema: {
              description: 'Written question with uid specified',
              nullable: true,
              type: 'string',
            },
          },
          description: 'Written question with uid specified',
        }),
    }),
    query: z.object({
      expandMember: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Expand the details of Members in the results',
            in: 'query',
            name: 'expandMember',
            schema: {
              description: 'Expand the details of Members in the results',
              type: 'boolean',
            },
            required: false,
          },
          description: 'Expand the details of Members in the results',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: QuestionsViewModelItemSchema },
        'text/json': { schema: QuestionsViewModelItemSchema },
        'text/plain': { schema: QuestionsViewModelItemSchema },
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

export const getApiWrittenquestionsQuestionsIdRoute = createRoute({
  method: 'get',
  path: '/api/writtenquestions/questions/{id}',
  tags: ['WrittenQuestions'],
  summary: 'Returns a written question',
  request: {
    params: z.object({
      id: z
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
            description: 'written question with ID specified',
            in: 'path',
            name: 'id',
            required: true,
            schema: {
              description: 'written question with ID specified',
              format: 'int32',
              type: 'integer',
            },
          },
          description: 'written question with ID specified',
        }),
    }),
    query: z.object({
      expandMember: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Expand the details of Members in the result',
            in: 'query',
            name: 'expandMember',
            schema: { description: 'Expand the details of Members in the result', type: 'boolean' },
            required: false,
          },
          description: 'Expand the details of Members in the result',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: QuestionsViewModelItemSchema },
        'text/json': { schema: QuestionsViewModelItemSchema },
        'text/plain': { schema: QuestionsViewModelItemSchema },
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

export const getApiWrittenstatementsStatementsRoute = createRoute({
  method: 'get',
  path: '/api/writtenstatements/statements',
  tags: ['WrittenStatements'],
  summary: 'Returns a list of written statements',
  request: {
    query: z.object({
      madeWhenFrom: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.iso.datetime({ offset: true }).nullable(),
      )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Written statements made on or after the date specified. Date format yyyy-mm-dd',
            in: 'query',
            name: 'madeWhenFrom',
            schema: {
              description:
                'Written statements made on or after the date specified. Date format yyyy-mm-dd',
              format: 'date-time',
              nullable: true,
              type: 'string',
            },
            required: false,
          },
          description:
            'Written statements made on or after the date specified. Date format yyyy-mm-dd',
        }),
      madeWhenTo: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.iso.datetime({ offset: true }).nullable(),
      )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Written statements made on or before the date specified. Date format yyyy-mm-dd',
            in: 'query',
            name: 'madeWhenTo',
            schema: {
              description:
                'Written statements made on or before the date specified. Date format yyyy-mm-dd',
              format: 'date-time',
              nullable: true,
              type: 'string',
            },
            required: false,
          },
          description:
            'Written statements made on or before the date specified. Date format yyyy-mm-dd',
        }),
      searchTerm: z
        .string()
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Written questions / statements containing the search term specified, searches item content',
            in: 'query',
            name: 'searchTerm',
            schema: {
              description:
                'Written questions / statements containing the search term specified, searches item content',
              nullable: true,
              type: 'string',
            },
            required: false,
          },
          description:
            'Written questions / statements containing the search term specified, searches item content',
        }),
      uIN: z
        .string()
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            description: 'Written questions / statements with the uin specified',
            in: 'query',
            name: 'uIN',
            schema: {
              description: 'Written questions / statements with the uin specified',
              nullable: true,
              type: 'string',
            },
            required: false,
          },
          description: 'Written questions / statements with the uin specified',
        }),
      answeringBodies: z
        .preprocess(
          (val) => (val === 'null' ? null : val),
          z
            .preprocess(
              (val) => (val === undefined || Array.isArray(val) ? val : [val]),
              z.array(
                z.preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                ),
              ),
            )
            .nullable(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Written questions / statements relating to the answering bodies with the IDs specified',
            in: 'query',
            name: 'answeringBodies',
            schema: {
              description:
                'Written questions / statements relating to the answering bodies with the IDs specified',
              items: { format: 'int32', type: 'integer' },
              nullable: true,
              type: 'array',
            },
            required: false,
          },
          description:
            'Written questions / statements relating to the answering bodies with the IDs specified',
        }),
      members: z
        .preprocess(
          (val) => (val === 'null' ? null : val),
          z
            .preprocess(
              (val) => (val === undefined || Array.isArray(val) ? val : [val]),
              z.array(
                z.preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                ),
              ),
            )
            .nullable(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Written questions / statements relating to the members with the IDs specified',
            in: 'query',
            name: 'members',
            schema: {
              description:
                'Written questions / statements relating to the members with the IDs specified',
              items: { format: 'int32', type: 'integer' },
              nullable: true,
              type: 'array',
            },
            required: false,
          },
          description:
            'Written questions / statements relating to the members with the IDs specified',
        }),
      house: HouseEnumSchema.openapi({
        param: {
          description: 'Written questions / statements relating to the House specified',
          in: 'query',
          name: 'house',
          schema: { $ref: '#/components/schemas/HouseEnum' },
          required: false,
        },
      }).exactOptional(),
      skip: z
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
              z.int32().min(0).max(2147483647),
            )
            .nullable(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Number of records to skip, default is 0',
            in: 'query',
            name: 'skip',
            schema: {
              description: 'Number of records to skip, default is 0',
              format: 'int32',
              maximum: 2147483647,
              minimum: 0,
              nullable: true,
              type: 'integer',
            },
            required: false,
          },
          description: 'Number of records to skip, default is 0',
        }),
      take: z
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
              z.int32().min(0).max(2147483647),
            )
            .nullable(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Number of records to take, default is 20',
            in: 'query',
            name: 'take',
            schema: {
              description: 'Number of records to take, default is 20',
              format: 'int32',
              maximum: 2147483647,
              minimum: 0,
              nullable: true,
              type: 'integer',
            },
            required: false,
          },
          description: 'Number of records to take, default is 20',
        }),
      expandMember: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Expand the details of Members in the results',
            in: 'query',
            name: 'expandMember',
            schema: {
              description: 'Expand the details of Members in the results',
              type: 'boolean',
            },
            required: false,
          },
          description: 'Expand the details of Members in the results',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: StatementsViewModelSearchResultSchema },
        'text/json': { schema: StatementsViewModelSearchResultSchema },
        'text/plain': { schema: StatementsViewModelSearchResultSchema },
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

export const getApiWrittenstatementsStatementsDateUinRoute = createRoute({
  method: 'get',
  path: '/api/writtenstatements/statements/{date}/{uin}',
  tags: ['WrittenStatements'],
  summary: 'Returns a written statemnet',
  request: {
    params: z.object({
      date: z.iso
        .datetime({ offset: true })
        .openapi({
          param: {
            description: 'Written statement on date specified',
            in: 'path',
            name: 'date',
            required: true,
            schema: {
              description: 'Written statement on date specified',
              format: 'date-time',
              type: 'string',
            },
          },
          description: 'Written statement on date specified',
        }),
      uin: z
        .string()
        .nullable()
        .openapi({
          param: {
            description: 'Written statement with uid specified',
            in: 'path',
            name: 'uin',
            required: true,
            schema: {
              description: 'Written statement with uid specified',
              nullable: true,
              type: 'string',
            },
          },
          description: 'Written statement with uid specified',
        }),
    }),
    query: z.object({
      expandMember: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Expand the details of Members in the results',
            in: 'query',
            name: 'expandMember',
            schema: {
              description: 'Expand the details of Members in the results',
              type: 'boolean',
            },
            required: false,
          },
          description: 'Expand the details of Members in the results',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: StatementsViewModelItemSchema },
        'text/json': { schema: StatementsViewModelItemSchema },
        'text/plain': { schema: StatementsViewModelItemSchema },
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

export const getApiWrittenstatementsStatementsIdRoute = createRoute({
  method: 'get',
  path: '/api/writtenstatements/statements/{id}',
  tags: ['WrittenStatements'],
  summary: 'Returns a written statement',
  request: {
    params: z.object({
      id: z
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
            description: 'Written statement with ID specified',
            in: 'path',
            name: 'id',
            required: true,
            schema: {
              description: 'Written statement with ID specified',
              format: 'int32',
              type: 'integer',
            },
          },
          description: 'Written statement with ID specified',
        }),
    }),
    query: z.object({
      expandMember: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Expand the details of Members in the results',
            in: 'query',
            name: 'expandMember',
            schema: {
              description: 'Expand the details of Members in the results',
              type: 'boolean',
            },
            required: false,
          },
          description: 'Expand the details of Members in the results',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: StatementsViewModelSearchResultSchema },
        'text/json': { schema: StatementsViewModelSearchResultSchema },
        'text/plain': { schema: StatementsViewModelSearchResultSchema },
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
