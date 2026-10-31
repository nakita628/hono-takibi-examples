import { createRoute, z } from '@hono/zod-openapi'

const AmendmentDecisionSchema = z
  .enum(['NoDecision', 'Withdrawn', 'Disagreed', 'NotMoved', 'Agreed'])
  .openapi('AmendmentDecision')

const AmendmentLineSchema = z
  .strictObject({
    hangingIndentation: z.string().nullable().exactOptional(),
    imageType: z.string().nullable().exactOptional(),
    indentation: z.int32().exactOptional(),
    isImage: z.boolean().exactOptional(),
    text: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AmendmentLine')

const AmendmentTypeSchema = z
  .enum(['EditLongTitle', 'EditBillBody', 'AddClauseOrSchedule', 'DeleteClauseOrSchedule'])
  .openapi('AmendmentType')

const HouseSchema = z.enum(['All', 'Commons', 'Lords', 'Unassigned']).openapi('House')

const AmendmentMemberSchema = z
  .strictObject({
    house: HouseSchema.exactOptional(),
    isLead: z.boolean().exactOptional(),
    memberFrom: z.string().nullable().exactOptional(),
    memberId: z.int32().exactOptional(),
    memberPage: z.string().nullable().exactOptional(),
    memberPhoto: z.string().nullable().exactOptional(),
    name: z.string().nullable().exactOptional(),
    party: z.string().nullable().exactOptional(),
    partyColour: z.string().nullable().exactOptional(),
    sortOrder: z.int32().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AmendmentMember')

const AmendmentDetailSchema = z
  .strictObject({
    amendmentId: z.int32().exactOptional(),
    amendmentLines: z.array(AmendmentLineSchema).nullable().exactOptional(),
    amendmentNote: z.string().nullable().exactOptional(),
    amendmentPosition: z.string().nullable().exactOptional(),
    amendmentType: AmendmentTypeSchema.exactOptional(),
    billId: z.int32().exactOptional(),
    billStageId: z.int32().exactOptional(),
    clause: z.int32().nullable().exactOptional(),
    decision: AmendmentDecisionSchema.exactOptional(),
    explanatoryText: z.string().nullable().exactOptional(),
    explanatoryTextPrefix: z.string().nullable().exactOptional(),
    lineNumber: z.int32().nullable().exactOptional(),
    marshalledListText: z.string().nullable().exactOptional(),
    pageNumber: z.int32().nullable().exactOptional(),
    schedule: z.int32().nullable().exactOptional(),
    sponsors: z.array(AmendmentMemberSchema).nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AmendmentDetail')

const AmendmentSearchItemSchema = z
  .strictObject({
    amendmentId: z.int32().exactOptional(),
    amendmentPosition: z.string().nullable().exactOptional(),
    amendmentType: AmendmentTypeSchema.exactOptional(),
    billId: z.int32().exactOptional(),
    billStageId: z.int32().exactOptional(),
    clause: z.int32().nullable().exactOptional(),
    decision: AmendmentDecisionSchema.exactOptional(),
    lineNumber: z.int32().nullable().exactOptional(),
    marshalledListText: z.string().nullable().exactOptional(),
    pageNumber: z.int32().nullable().exactOptional(),
    schedule: z.int32().nullable().exactOptional(),
    sponsors: z.array(AmendmentMemberSchema).nullable().exactOptional(),
    summaryText: z.array(z.string()).nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AmendmentSearchItem')

const AmendmentSearchItemSearchResultSchema = z
  .strictObject({
    items: z.array(AmendmentSearchItemSchema).nullable().exactOptional(),
    itemsPerPage: z.int32().exactOptional(),
    totalResults: z.int32().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AmendmentSearchItemSearchResult')

const BillAgentSchema = z
  .strictObject({
    address: z.string().nullable().exactOptional(),
    email: z.string().nullable().exactOptional(),
    name: z.string().nullable().exactOptional(),
    phoneNo: z.string().nullable().exactOptional(),
    website: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('BillAgent')

const BillStageSittingSchema = z
  .strictObject({
    billId: z.int32().exactOptional(),
    billStageId: z.int32().exactOptional(),
    date: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    id: z.int32().exactOptional(),
    stageId: z.int32().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('BillStageSitting')

const StageSummarySchema = z
  .strictObject({
    abbreviation: z.string().nullable().exactOptional(),
    description: z.string().nullable().exactOptional(),
    house: HouseSchema.exactOptional(),
    id: z.int32().exactOptional(),
    sessionId: z.int32().exactOptional(),
    sortOrder: z.int32().exactOptional(),
    stageId: z.int32().exactOptional(),
    stageSittings: z.array(BillStageSittingSchema).nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('StageSummary')

const PromoterSchema = z
  .strictObject({
    organisationName: z.string().nullable().exactOptional(),
    organisationUrl: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Promoter')

const MemberSchema = z
  .strictObject({
    house: HouseSchema.exactOptional(),
    memberFrom: z.string().nullable().exactOptional(),
    memberId: z.int32().exactOptional(),
    memberPage: z.string().nullable().exactOptional(),
    memberPhoto: z.string().nullable().exactOptional(),
    name: z.string().nullable().exactOptional(),
    party: z.string().nullable().exactOptional(),
    partyColour: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Member')

const OrganisationSchema = z
  .strictObject({
    name: z.string().nullable().exactOptional(),
    url: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Organisation')

const SponsorSchema = z
  .strictObject({
    member: MemberSchema.exactOptional(),
    organisation: OrganisationSchema.exactOptional(),
    sortOrder: z.int32().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Sponsor')

const BillSchema = z
  .strictObject({
    agent: BillAgentSchema.exactOptional(),
    billId: z.int32().exactOptional(),
    billTypeId: z.int32().exactOptional(),
    billWithdrawn: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    currentHouse: HouseSchema.exactOptional(),
    currentStage: StageSummarySchema.exactOptional(),
    includedSessionIds: z.array(z.int32()).nullable().exactOptional(),
    introducedSessionId: z.int32().exactOptional(),
    isAct: z.boolean().exactOptional(),
    isDefeated: z.boolean().exactOptional(),
    lastUpdate: z.iso.datetime({ offset: true }).exactOptional(),
    longTitle: z.string().nullable().exactOptional(),
    originatingHouse: HouseSchema.exactOptional(),
    petitionInformation: z.string().nullable().exactOptional(),
    petitioningPeriod: z.string().nullable().exactOptional(),
    promoters: z.array(PromoterSchema).nullable().exactOptional(),
    shortTitle: z.string().nullable().exactOptional(),
    sponsors: z.array(SponsorSchema).nullable().exactOptional(),
    summary: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Bill')

const PublicationDocumentSchema = z
  .strictObject({
    contentLength: z.int32().exactOptional(),
    contentType: z.string().nullable().exactOptional(),
    filename: z.string().nullable().exactOptional(),
    id: z.int32().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PublicationDocument')

const PublicationLinkSchema = z
  .strictObject({
    contentType: z.string().nullable().exactOptional(),
    id: z.int32().exactOptional(),
    title: z.string().nullable().exactOptional(),
    url: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PublicationLink')

const PublicationTypeSchema = z
  .strictObject({
    description: z.string().nullable().exactOptional(),
    id: z.int32().exactOptional(),
    name: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PublicationType')

const BillPublicationSchema = z
  .strictObject({
    displayDate: z.iso.datetime({ offset: true }).exactOptional(),
    files: z.array(PublicationDocumentSchema).nullable().exactOptional(),
    house: HouseSchema.exactOptional(),
    id: z.int32().exactOptional(),
    links: z.array(PublicationLinkSchema).nullable().exactOptional(),
    publicationType: PublicationTypeSchema.exactOptional(),
    title: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('BillPublication')

const BillPublicationListSchema = z
  .strictObject({
    billId: z.int32().exactOptional(),
    publications: z.array(BillPublicationSchema).nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('BillPublicationList')

const BillSortOrderSchema = z
  .enum(['TitleAscending', 'TitleDescending', 'DateUpdatedAscending', 'DateUpdatedDescending'])
  .openapi('BillSortOrder')

const CommitteeHouseSchema = z.enum(['Commons', 'Lords', 'Joint']).openapi('CommitteeHouse')

const CommitteeSchema = z
  .strictObject({
    category: z.string().nullable().exactOptional(),
    house: CommitteeHouseSchema.exactOptional(),
    id: z.int32().exactOptional(),
    name: z.string().nullable().exactOptional(),
    url: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Committee')

const BillStageDetailsSchema = z
  .strictObject({
    abbreviation: z.string().nullable().exactOptional(),
    committee: CommitteeSchema.exactOptional(),
    description: z.string().nullable().exactOptional(),
    house: HouseSchema.exactOptional(),
    id: z.int32().exactOptional(),
    lastUpdate: z.iso.datetime({ offset: true }).exactOptional(),
    nextStageBillStageId: z.int32().nullable().exactOptional(),
    previousStageBillStageId: z.int32().nullable().exactOptional(),
    sessionId: z.int32().exactOptional(),
    sortOrder: z.int32().exactOptional(),
    stageId: z.int32().exactOptional(),
    stageSittings: z.array(BillStageSittingSchema).nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('BillStageDetails')

const PublicationSchema = z
  .strictObject({
    displayDate: z.iso.datetime({ offset: true }).exactOptional(),
    files: z.array(PublicationDocumentSchema).nullable().exactOptional(),
    id: z.int32().exactOptional(),
    links: z.array(PublicationLinkSchema).nullable().exactOptional(),
    publicationType: PublicationTypeSchema.exactOptional(),
    title: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Publication')

const BillStageSittingPublicationListSchema = z
  .strictObject({
    publications: z.array(PublicationSchema).nullable().exactOptional(),
    sittingId: z.int32().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('BillStageSittingPublicationList')

const BillStagePublicationListSchema = z
  .strictObject({
    billStageId: z.int32().exactOptional(),
    publications: z.array(PublicationSchema).nullable().exactOptional(),
    sittings: z.array(BillStageSittingPublicationListSchema).nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('BillStagePublicationList')

const BillStageSittingSearchResultSchema = z
  .strictObject({
    items: z.array(BillStageSittingSchema).nullable().exactOptional(),
    itemsPerPage: z.int32().exactOptional(),
    totalResults: z.int32().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('BillStageSittingSearchResult')

const BillSummarySchema = z
  .strictObject({
    billId: z.int32().exactOptional(),
    billTypeId: z.int32().exactOptional(),
    billWithdrawn: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    currentHouse: HouseSchema.exactOptional(),
    currentStage: StageSummarySchema.exactOptional(),
    includedSessionIds: z.array(z.int32()).nullable().exactOptional(),
    introducedSessionId: z.int32().exactOptional(),
    isAct: z.boolean().exactOptional(),
    isDefeated: z.boolean().exactOptional(),
    lastUpdate: z.iso.datetime({ offset: true }).exactOptional(),
    originatingHouse: HouseSchema.exactOptional(),
    shortTitle: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('BillSummary')

const BillSummarySearchResultSchema = z
  .strictObject({
    items: z.array(BillSummarySchema).nullable().exactOptional(),
    itemsPerPage: z.int32().exactOptional(),
    totalResults: z.int32().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('BillSummarySearchResult')

const BillTypeCategorySchema = z.enum(['Public', 'Private', 'Hybrid']).openapi('BillTypeCategory')

const BillTypeSchema = z
  .strictObject({
    category: BillTypeCategorySchema.exactOptional(),
    description: z.string().nullable().exactOptional(),
    id: z.int32().exactOptional(),
    name: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('BillType')

const BillTypeSearchResultSchema = z
  .strictObject({
    items: z.array(BillTypeSchema).nullable().exactOptional(),
    itemsPerPage: z.int32().exactOptional(),
    totalResults: z.int32().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('BillTypeSearchResult')

const DecisionSchema = z
  .enum(['All', 'NoDecision', 'Withdrawn', 'Disagreed', 'NotMoved', 'Agreed'])
  .openapi('Decision')

const NewsArticlesSummarySchema = z
  .strictObject({
    content: z.string().nullable().exactOptional(),
    displayDate: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    id: z.int32().exactOptional(),
    title: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('NewsArticlesSummary')

const NewsArticlesSummarySearchResultSchema = z
  .strictObject({
    items: z.array(NewsArticlesSummarySchema).nullable().exactOptional(),
    itemsPerPage: z.int32().exactOptional(),
    totalResults: z.int32().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('NewsArticlesSummarySearchResult')

const OriginatingHouseSchema = z.enum(['All', 'Commons', 'Lords']).openapi('OriginatingHouse')

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

const PublicationTypeSearchResultSchema = z
  .strictObject({
    items: z.array(PublicationTypeSchema).nullable().exactOptional(),
    itemsPerPage: z.int32().exactOptional(),
    totalResults: z.int32().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PublicationTypeSearchResult')

const StageReferenceSchema = z
  .strictObject({
    house: HouseSchema.exactOptional(),
    id: z.int32().exactOptional(),
    name: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('StageReference')

const StageReferenceSearchResultSchema = z
  .strictObject({
    items: z.array(StageReferenceSchema).nullable().exactOptional(),
    itemsPerPage: z.int32().exactOptional(),
    totalResults: z.int32().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('StageReferenceSearchResult')

const StageSummarySearchResultSchema = z
  .strictObject({
    items: z.array(StageSummarySchema).nullable().exactOptional(),
    itemsPerPage: z.int32().exactOptional(),
    totalResults: z.int32().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('StageSummarySearchResult')

export const getApiV1BillTypesRoute = createRoute({
  method: 'get',
  path: '/api/v1/BillTypes',
  tags: ['BillTypes'],
  summary: 'Returns a list of Bill types.',
  request: {
    query: z.object({
      Category: BillTypeCategorySchema.openapi({
        param: {
          in: 'query',
          name: 'Category',
          schema: { $ref: '#/components/schemas/BillTypeCategory' },
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
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'Skip',
            schema: { format: 'int32', type: 'integer' },
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
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'Take',
            schema: { format: 'int32', type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: BillTypeSearchResultSchema },
        'text/json': { schema: BillTypeSearchResultSchema },
        'text/plain': { schema: BillTypeSearchResultSchema },
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

export const getApiV1BillsRoute = createRoute({
  method: 'get',
  path: '/api/v1/Bills',
  tags: ['Bills'],
  summary: 'Returns a list of Bills.',
  operationId: 'GetBills',
  request: {
    query: z.object({
      SearchTerm: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'SearchTerm', schema: { type: 'string' }, required: false },
        }),
      Session: z
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
            in: 'query',
            name: 'Session',
            schema: { format: 'int32', type: 'integer' },
            required: false,
          },
        }),
      CurrentHouse: HouseSchema.openapi({
        param: {
          in: 'query',
          name: 'CurrentHouse',
          schema: { $ref: '#/components/schemas/House' },
          required: false,
        },
      }).exactOptional(),
      OriginatingHouse: OriginatingHouseSchema.openapi({
        param: {
          in: 'query',
          name: 'OriginatingHouse',
          schema: { $ref: '#/components/schemas/OriginatingHouse' },
          required: false,
        },
      }).exactOptional(),
      MemberId: z
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
            in: 'query',
            name: 'MemberId',
            schema: { format: 'int32', type: 'integer' },
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
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'DepartmentId',
            schema: { format: 'int32', type: 'integer' },
            required: false,
          },
        }),
      BillStage: z
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
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'BillStage',
            schema: { items: { format: 'int32', type: 'integer' }, type: 'array' },
            required: false,
          },
        }),
      BillStagesExcluded: z
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
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'BillStagesExcluded',
            schema: { items: { format: 'int32', type: 'integer' }, type: 'array' },
            required: false,
          },
        }),
      IsDefeated: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'IsDefeated', schema: { type: 'boolean' }, required: false },
        }),
      IsWithdrawn: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'IsWithdrawn', schema: { type: 'boolean' }, required: false },
        }),
      BillType: z
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
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'BillType',
            schema: { items: { format: 'int32', type: 'integer' }, type: 'array' },
            required: false,
          },
        }),
      SortOrder: BillSortOrderSchema.openapi({
        param: {
          in: 'query',
          name: 'SortOrder',
          schema: { $ref: '#/components/schemas/BillSortOrder' },
          required: false,
        },
      }).exactOptional(),
      BillIds: z
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
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'BillIds',
            schema: { items: { format: 'int32', type: 'integer' }, type: 'array' },
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
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'Skip',
            schema: { format: 'int32', type: 'integer' },
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
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'Take',
            schema: { format: 'int32', type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: BillSummarySearchResultSchema },
        'text/json': { schema: BillSummarySearchResultSchema },
        'text/plain': { schema: BillSummarySearchResultSchema },
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

export const getApiV1BillsBillIdRoute = createRoute({
  method: 'get',
  path: '/api/v1/Bills/{billId}',
  tags: ['Bills'],
  summary: 'Return a Bill.',
  operationId: 'GetBill',
  request: {
    params: z.object({
      billId: z
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
            description: 'Bill with ID specified',
            in: 'path',
            name: 'billId',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: BillSchema },
        'text/json': { schema: BillSchema },
        'text/plain': { schema: BillSchema },
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

export const getApiV1BillsBillIdNewsArticlesRoute = createRoute({
  method: 'get',
  path: '/api/v1/Bills/{billId}/NewsArticles',
  tags: ['BillNews'],
  summary: 'Returns a list of news articles for a Bill.',
  operationId: 'GetNewsArticles',
  request: {
    params: z.object({
      billId: z
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
            in: 'path',
            name: 'billId',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
    query: z.object({
      Skip: z
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
            in: 'query',
            name: 'Skip',
            schema: { format: 'int32', type: 'integer' },
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
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'Take',
            schema: { format: 'int32', type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: NewsArticlesSummarySearchResultSchema },
        'text/json': { schema: NewsArticlesSummarySearchResultSchema },
        'text/plain': { schema: NewsArticlesSummarySearchResultSchema },
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

export const getApiV1BillsBillIdPublicationsRoute = createRoute({
  method: 'get',
  path: '/api/v1/Bills/{billId}/Publications',
  tags: ['Publications'],
  summary: 'Return a list of Bill publications.',
  operationId: 'GetBillPublication',
  request: {
    params: z.object({
      billId: z
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
            description: 'Publications relating to Bill with Bill ID specified',
            in: 'path',
            name: 'billId',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: BillPublicationListSchema },
        'text/json': { schema: BillPublicationListSchema },
        'text/plain': { schema: BillPublicationListSchema },
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

export const getApiV1BillsBillIdStagesRoute = createRoute({
  method: 'get',
  path: '/api/v1/Bills/{billId}/Stages',
  tags: ['Bills'],
  summary: 'Returns all Bill stages.',
  request: {
    params: z.object({
      billId: z
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
            description: 'Stages relating to a Bill with Bill ID specified',
            in: 'path',
            name: 'billId',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
    query: z.object({
      Skip: z
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
            in: 'query',
            name: 'Skip',
            schema: { format: 'int32', type: 'integer' },
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
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'Take',
            schema: { format: 'int32', type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: StageSummarySearchResultSchema },
        'text/json': { schema: StageSummarySearchResultSchema },
        'text/plain': { schema: StageSummarySearchResultSchema },
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

export const getApiV1BillsBillIdStagesBillStageIdRoute = createRoute({
  method: 'get',
  path: '/api/v1/Bills/{billId}/Stages/{billStageId}',
  tags: ['Bills'],
  summary: 'Returns a Bill stage.',
  operationId: 'GetBillStageDetails',
  request: {
    params: z.object({
      billId: z
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
            description: 'Bill stage relating to Bill with Bill ID specified',
            in: 'path',
            name: 'billId',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      billStageId: z
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
            description: 'Bill stage with ID specified',
            in: 'path',
            name: 'billStageId',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: BillStageDetailsSchema },
        'text/json': { schema: BillStageDetailsSchema },
        'text/plain': { schema: BillStageDetailsSchema },
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

export const getApiV1BillsBillIdStagesBillStageIdAmendmentsRoute = createRoute({
  method: 'get',
  path: '/api/v1/Bills/{billId}/Stages/{billStageId}/Amendments',
  tags: ['Amendments'],
  summary: 'Returns a list of amendments.',
  operationId: 'GetAmendments',
  request: {
    params: z.object({
      billId: z
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
            description: 'Amendments relating to a Bill with Bill ID specified',
            in: 'path',
            name: 'billId',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      billStageId: z
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
            description: 'Amendments relating to a Bill stage with Bill stage ID specified',
            in: 'path',
            name: 'billStageId',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
    query: z.object({
      SearchTerm: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'SearchTerm', schema: { type: 'string' }, required: false },
        }),
      Decision: DecisionSchema.openapi({
        param: {
          in: 'query',
          name: 'Decision',
          schema: { $ref: '#/components/schemas/Decision' },
          required: false,
        },
      }).exactOptional(),
      MemberId: z
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
            in: 'query',
            name: 'MemberId',
            schema: { format: 'int32', type: 'integer' },
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
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'Skip',
            schema: { format: 'int32', type: 'integer' },
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
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'Take',
            schema: { format: 'int32', type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: AmendmentSearchItemSearchResultSchema },
        'text/json': { schema: AmendmentSearchItemSearchResultSchema },
        'text/plain': { schema: AmendmentSearchItemSearchResultSchema },
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

export const getApiV1BillsBillIdStagesBillStageIdAmendmentsAmendmentIdRoute = createRoute({
  method: 'get',
  path: '/api/v1/Bills/{billId}/Stages/{billStageId}/Amendments/{amendmentId}',
  tags: ['Amendments'],
  summary: 'Returns an amendment.',
  operationId: 'GetAmendment',
  request: {
    params: z.object({
      billId: z
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
            description: 'Amendment relating to a bill with bill ID specified',
            in: 'path',
            name: 'billId',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      billStageId: z
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
            description: 'Amendment relating to a bill stage with bill stage ID specified',
            in: 'path',
            name: 'billStageId',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      amendmentId: z
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
            description: 'Amendment with amendment ID specified',
            in: 'path',
            name: 'amendmentId',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: AmendmentDetailSchema },
        'text/json': { schema: AmendmentDetailSchema },
        'text/plain': { schema: AmendmentDetailSchema },
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

export const getApiV1BillsBillIdStagesStageIdPublicationsRoute = createRoute({
  method: 'get',
  path: '/api/v1/Bills/{billId}/Stages/{stageId}/Publications',
  tags: ['Publications'],
  summary: 'Return a list of Bill stage publications.',
  request: {
    params: z.object({
      billId: z
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
            in: 'path',
            name: 'billId',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      stageId: z
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
            in: 'path',
            name: 'stageId',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: BillStagePublicationListSchema },
        'text/json': { schema: BillStagePublicationListSchema },
        'text/plain': { schema: BillStagePublicationListSchema },
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

export const getApiV1PublicationTypesRoute = createRoute({
  method: 'get',
  path: '/api/v1/PublicationTypes',
  tags: ['PublicationTypes'],
  summary: 'Returns a list of publication types.',
  request: {
    query: z.object({
      Skip: z
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
            in: 'query',
            name: 'Skip',
            schema: { format: 'int32', type: 'integer' },
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
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'Take',
            schema: { format: 'int32', type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: PublicationTypeSearchResultSchema },
        'text/json': { schema: PublicationTypeSearchResultSchema },
        'text/plain': { schema: PublicationTypeSearchResultSchema },
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

export const getApiV1PublicationsPublicationIdDocumentsDocumentIdRoute = createRoute({
  method: 'get',
  path: '/api/v1/Publications/{publicationId}/Documents/{documentId}',
  tags: ['Documents'],
  summary: 'Return information on a document.',
  request: {
    params: z.object({
      publicationId: z
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
            description: 'Document with publication Id specified',
            in: 'path',
            name: 'publicationId',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      documentId: z
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
            description: 'Document with Id specified',
            in: 'path',
            name: 'documentId',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: PublicationDocumentSchema },
        'text/json': { schema: PublicationDocumentSchema },
        'text/plain': { schema: PublicationDocumentSchema },
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

export const getApiV1PublicationsPublicationIdDocumentsDocumentIdDownloadRoute = createRoute({
  method: 'get',
  path: '/api/v1/Publications/{publicationId}/Documents/{documentId}/Download',
  tags: ['Documents'],
  summary: 'Return a document.',
  request: {
    params: z.object({
      publicationId: z
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
            description: 'Document with publication Id specified',
            in: 'path',
            name: 'publicationId',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      documentId: z
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
            description: 'Document with Id specified',
            in: 'path',
            name: 'documentId',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success' },
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

export const getApiV1RssBillsIdRssRoute = createRoute({
  method: 'get',
  path: '/api/v1/Rss/Bills/{id}.rss',
  tags: ['Rss'],
  summary: 'Returns an Rss feed of a certain Bill.',
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
            description: 'Id of Bill',
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success' },
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

export const getApiV1RssAllbillsRssRoute = createRoute({
  method: 'get',
  path: '/api/v1/Rss/allbills.rss',
  tags: ['Rss'],
  summary: 'Returns an Rss feed of all Bills.',
  responses: { 200: { description: 'Success' } },
})

export const getApiV1RssPrivatebillsRssRoute = createRoute({
  method: 'get',
  path: '/api/v1/Rss/privatebills.rss',
  tags: ['Rss'],
  summary: 'Returns an Rss feed of private Bills.',
  responses: { 200: { description: 'Success' } },
})

export const getApiV1RssPublicbillsRssRoute = createRoute({
  method: 'get',
  path: '/api/v1/Rss/publicbills.rss',
  tags: ['Rss'],
  summary: 'Returns an Rss feed of public Bills.',
  responses: { 200: { description: 'Success' } },
})

export const getApiV1SittingsRoute = createRoute({
  method: 'get',
  path: '/api/v1/Sittings',
  tags: ['Sittings'],
  summary: 'Returns a list of Sittings.',
  operationId: 'GetSittings',
  request: {
    query: z.object({
      House: HouseSchema.openapi({
        param: {
          in: 'query',
          name: 'House',
          schema: { $ref: '#/components/schemas/House' },
          required: false,
        },
      }).exactOptional(),
      DateFrom: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'DateFrom',
            schema: { format: 'date-time', type: 'string' },
            required: false,
          },
        }),
      DateTo: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'DateTo',
            schema: { format: 'date-time', type: 'string' },
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
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'Skip',
            schema: { format: 'int32', type: 'integer' },
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
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'Take',
            schema: { format: 'int32', type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: BillStageSittingSearchResultSchema },
        'text/json': { schema: BillStageSittingSearchResultSchema },
        'text/plain': { schema: BillStageSittingSearchResultSchema },
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

export const getApiV1StagesRoute = createRoute({
  method: 'get',
  path: '/api/v1/Stages',
  tags: ['Stages'],
  summary: 'Returns a list of Bill stages.',
  request: {
    query: z.object({
      Skip: z
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
            in: 'query',
            name: 'Skip',
            schema: { format: 'int32', type: 'integer' },
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
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'Take',
            schema: { format: 'int32', type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: StageReferenceSearchResultSchema },
        'text/json': { schema: StageReferenceSearchResultSchema },
        'text/plain': { schema: StageReferenceSearchResultSchema },
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
