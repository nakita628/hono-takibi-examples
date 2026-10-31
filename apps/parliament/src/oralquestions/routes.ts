import { createRoute, z } from '@hono/zod-openapi'

const MemberForDateSchema = z
  .object({
    Constituency: z.string().exactOptional(),
    ListAs: z.string().exactOptional(),
    MnisId: z.int32().exactOptional(),
    Name: z.string().exactOptional(),
    Party: z.string().exactOptional(),
    PartyColour: z.string().exactOptional(),
    PartyId: z.int32().exactOptional(),
    PhotoUrl: z.string().exactOptional().openapi({ readOnly: true }),
    PimsId: z.int32().exactOptional(),
    Status: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('MemberForDate')

const PublishedEarlyDayMotionSponsorSchema = z
  .object({
    CreatedWhen: z.iso.datetime({ offset: true }).exactOptional(),
    Id: z.int32().exactOptional(),
    IsWithdrawn: z.boolean().exactOptional(),
    Member: MemberForDateSchema.exactOptional(),
    MemberId: z.int32().exactOptional(),
    SponsoringOrder: z.int32().exactOptional(),
    WithdrawnDate: z.iso.datetime({ offset: true }).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PublishedEarlyDayMotionSponsor')

type PublishedEarlyDayMotionDetailsType = {
  AmendmentSuffix?: string
  AmendmentToMotionId?: number
  Amendments?: PublishedEarlyDayMotionDetailsType[]
  DateTabled?: string
  Id?: number
  MemberId?: number
  MotionText?: string
  PrayingAgainstNegativeStatutoryInstrumentId?: number
  PrimarySponsor?: z.infer<typeof MemberForDateSchema>
  Sponsors?: z.infer<typeof PublishedEarlyDayMotionSponsorSchema>[]
  SponsorsCount?: number
  Status?: 'Published' | 'Withdrawn'
  StatusDate?: string
  StatutoryInstrumentNumber?: number
  StatutoryInstrumentTitle?: string
  StatutoryInstrumentYear?: string
  Title?: string
  UIN?: number
  UINWithAmendmentSuffix?: string
}

const StatusCountSchema = z
  .object({ Count: z.int32().exactOptional(), StatusId: z.int32().exactOptional() })
  .openapi({ required: [] })
  .openapi('StatusCount')

const PagingInfoSchema = z
  .object({
    GlobalStatusCounts: z.array(StatusCountSchema).exactOptional(),
    GlobalTotal: z.int32().exactOptional(),
    Skip: z.int32().exactOptional(),
    StatusCounts: z.array(StatusCountSchema).exactOptional(),
    Take: z.int32().exactOptional(),
    Total: z.int32().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PagingInfo')

const PublishedEarlyDayMotionSchema = z
  .object({
    AmendmentSuffix: z.string().exactOptional(),
    AmendmentToMotionId: z.int32().exactOptional(),
    DateTabled: z.iso.datetime({ offset: true }).exactOptional(),
    Id: z.int32().exactOptional(),
    MemberId: z.int32().exactOptional(),
    MotionText: z.string().exactOptional(),
    PrayingAgainstNegativeStatutoryInstrumentId: z.int32().exactOptional(),
    PrimarySponsor: MemberForDateSchema.exactOptional(),
    SponsorsCount: z.int32().exactOptional(),
    Status: z.enum(['Published', 'Withdrawn']).exactOptional(),
    StatusDate: z.iso.datetime({ offset: true }).exactOptional(),
    StatutoryInstrumentNumber: z.int32().exactOptional(),
    StatutoryInstrumentTitle: z.string().exactOptional(),
    StatutoryInstrumentYear: z.string().exactOptional(),
    Title: z.string().exactOptional(),
    UIN: z.int32().exactOptional(),
    UINWithAmendmentSuffix: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PublishedEarlyDayMotion')

const ApiResponseListPublishedEarlyDayMotionSchema = z
  .object({
    Errors: z.array(z.string()).exactOptional(),
    PagingInfo: PagingInfoSchema.exactOptional(),
    Response: z.array(PublishedEarlyDayMotionSchema).exactOptional(),
    StatusCode: z
      .enum([
        'Continue',
        'SwitchingProtocols',
        'OK',
        'Created',
        'Accepted',
        'NonAuthoritativeInformation',
        'NoContent',
        'ResetContent',
        'PartialContent',
        'MultipleChoices',
        'Ambiguous',
        'MovedPermanently',
        'Moved',
        'Found',
        'Redirect',
        'SeeOther',
        'RedirectMethod',
        'NotModified',
        'UseProxy',
        'Unused',
        'TemporaryRedirect',
        'RedirectKeepVerb',
        'BadRequest',
        'Unauthorized',
        'PaymentRequired',
        'Forbidden',
        'NotFound',
        'MethodNotAllowed',
        'NotAcceptable',
        'ProxyAuthenticationRequired',
        'RequestTimeout',
        'Conflict',
        'Gone',
        'LengthRequired',
        'PreconditionFailed',
        'RequestEntityTooLarge',
        'RequestUriTooLong',
        'UnsupportedMediaType',
        'RequestedRangeNotSatisfiable',
        'ExpectationFailed',
        'UpgradeRequired',
        'InternalServerError',
        'NotImplemented',
        'BadGateway',
        'ServiceUnavailable',
        'GatewayTimeout',
        'HttpVersionNotSupported',
      ])
      .exactOptional(),
    Success: z.boolean().exactOptional().openapi({ readOnly: true }),
  })
  .openapi({ required: [] })
  .openapi('ApiResponseListPublishedEarlyDayMotion')

const PublishedOralQuestionTimeSchema = z
  .object({
    AnsweringBodyNames: z.string().exactOptional().openapi({ readOnly: true }),
    AnsweringMinisterTitles: z.string().exactOptional().openapi({ readOnly: true }),
    AnsweringWhen: z.iso.datetime({ offset: true }).exactOptional(),
    DeadlineWhen: z.iso.datetime({ offset: true }).exactOptional(),
    Id: z.int32().exactOptional(),
    SubstantiveTime: z.string().exactOptional(),
    TopicalTime: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PublishedOralQuestionTime')

const ApiResponseListPublishedOralQuestionTimeSchema = z
  .object({
    Errors: z.array(z.string()).exactOptional(),
    PagingInfo: PagingInfoSchema.exactOptional(),
    Response: z.array(PublishedOralQuestionTimeSchema).exactOptional(),
    StatusCode: z
      .enum([
        'Continue',
        'SwitchingProtocols',
        'OK',
        'Created',
        'Accepted',
        'NonAuthoritativeInformation',
        'NoContent',
        'ResetContent',
        'PartialContent',
        'MultipleChoices',
        'Ambiguous',
        'MovedPermanently',
        'Moved',
        'Found',
        'Redirect',
        'SeeOther',
        'RedirectMethod',
        'NotModified',
        'UseProxy',
        'Unused',
        'TemporaryRedirect',
        'RedirectKeepVerb',
        'BadRequest',
        'Unauthorized',
        'PaymentRequired',
        'Forbidden',
        'NotFound',
        'MethodNotAllowed',
        'NotAcceptable',
        'ProxyAuthenticationRequired',
        'RequestTimeout',
        'Conflict',
        'Gone',
        'LengthRequired',
        'PreconditionFailed',
        'RequestEntityTooLarge',
        'RequestUriTooLong',
        'UnsupportedMediaType',
        'RequestedRangeNotSatisfiable',
        'ExpectationFailed',
        'UpgradeRequired',
        'InternalServerError',
        'NotImplemented',
        'BadGateway',
        'ServiceUnavailable',
        'GatewayTimeout',
        'HttpVersionNotSupported',
      ])
      .exactOptional(),
    Success: z.boolean().exactOptional().openapi({ readOnly: true }),
  })
  .openapi({ required: [] })
  .openapi('ApiResponseListPublishedOralQuestionTime')

const PublishedOralQuestionSchema = z
  .object({
    AnsweringBody: z.string().exactOptional(),
    AnsweringBodyId: z.int32().exactOptional(),
    AnsweringMinister: MemberForDateSchema.exactOptional(),
    AnsweringMinisterId: z.int32().exactOptional(),
    AnsweringMinisterTitle: z.string().exactOptional(),
    AnsweringWhen: z.iso.datetime({ offset: true }).exactOptional(),
    AskingMember: MemberForDateSchema.exactOptional(),
    AskingMemberId: z.int32().exactOptional(),
    DeclarableInterestDetail: z.string().exactOptional(),
    HansardLink: z.string().exactOptional(),
    Id: z.int32().exactOptional(),
    Number: z.int32().exactOptional(),
    QuestionText: z.string().exactOptional(),
    QuestionType: z.enum(['Substantive', 'Topical']).exactOptional(),
    RemovedFromToBeAskedWhen: z.iso.datetime({ offset: true }).exactOptional(),
    Status: z
      .enum([
        'Submitted',
        'Carded',
        'Unsaved',
        'ReadyForShuffle',
        'ToBeAsked',
        'ShuffleUnsuccessful',
        'Withdrawn',
        'Unstarred',
        'Draft',
        'ForReview',
        'Unasked',
        'Transferred',
      ])
      .exactOptional(),
    TabledWhen: z.iso.datetime({ offset: true }).exactOptional(),
    UIN: z.int32().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PublishedOralQuestion')

const ApiResponseListPublishedOralQuestionSchema = z
  .object({
    Errors: z.array(z.string()).exactOptional(),
    PagingInfo: PagingInfoSchema.exactOptional(),
    Response: z.array(PublishedOralQuestionSchema).exactOptional(),
    StatusCode: z
      .enum([
        'Continue',
        'SwitchingProtocols',
        'OK',
        'Created',
        'Accepted',
        'NonAuthoritativeInformation',
        'NoContent',
        'ResetContent',
        'PartialContent',
        'MultipleChoices',
        'Ambiguous',
        'MovedPermanently',
        'Moved',
        'Found',
        'Redirect',
        'SeeOther',
        'RedirectMethod',
        'NotModified',
        'UseProxy',
        'Unused',
        'TemporaryRedirect',
        'RedirectKeepVerb',
        'BadRequest',
        'Unauthorized',
        'PaymentRequired',
        'Forbidden',
        'NotFound',
        'MethodNotAllowed',
        'NotAcceptable',
        'ProxyAuthenticationRequired',
        'RequestTimeout',
        'Conflict',
        'Gone',
        'LengthRequired',
        'PreconditionFailed',
        'RequestEntityTooLarge',
        'RequestUriTooLong',
        'UnsupportedMediaType',
        'RequestedRangeNotSatisfiable',
        'ExpectationFailed',
        'UpgradeRequired',
        'InternalServerError',
        'NotImplemented',
        'BadGateway',
        'ServiceUnavailable',
        'GatewayTimeout',
        'HttpVersionNotSupported',
      ])
      .exactOptional(),
    Success: z.boolean().exactOptional().openapi({ readOnly: true }),
  })
  .openapi({ required: [] })
  .openapi('ApiResponseListPublishedOralQuestion')

const PublishedWrittenQuestionSchema = z
  .object({
    Answer: z.string().exactOptional(),
    AnsweredWhen: z.iso.datetime({ offset: true }).exactOptional(),
    AnsweringBody: z.string().exactOptional(),
    AnsweringBodyId: z.int32().exactOptional(),
    AnsweringMinister: MemberForDateSchema.exactOptional(),
    AnsweringMinisterId: z.int32().exactOptional(),
    AnsweringMinisterTitle: z.string().exactOptional(),
    AskingMember: MemberForDateSchema.exactOptional(),
    AskingMemberId: z.int32().exactOptional(),
    DueForAnswer: z.iso.datetime({ offset: true }).exactOptional(),
    Id: z.int32().exactOptional(),
    QuestionText: z.string().exactOptional(),
    QuestionType: z.enum(['NamedDay', 'Ordinary']).exactOptional(),
    TabledWhen: z.iso.datetime({ offset: true }).exactOptional(),
    UIN: z.int32().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PublishedWrittenQuestion')

const ApiResponseListPublishedWrittenQuestionSchema = z
  .object({
    Errors: z.array(z.string()).exactOptional(),
    PagingInfo: PagingInfoSchema.exactOptional(),
    Response: z.array(PublishedWrittenQuestionSchema).exactOptional(),
    StatusCode: z
      .enum([
        'Continue',
        'SwitchingProtocols',
        'OK',
        'Created',
        'Accepted',
        'NonAuthoritativeInformation',
        'NoContent',
        'ResetContent',
        'PartialContent',
        'MultipleChoices',
        'Ambiguous',
        'MovedPermanently',
        'Moved',
        'Found',
        'Redirect',
        'SeeOther',
        'RedirectMethod',
        'NotModified',
        'UseProxy',
        'Unused',
        'TemporaryRedirect',
        'RedirectKeepVerb',
        'BadRequest',
        'Unauthorized',
        'PaymentRequired',
        'Forbidden',
        'NotFound',
        'MethodNotAllowed',
        'NotAcceptable',
        'ProxyAuthenticationRequired',
        'RequestTimeout',
        'Conflict',
        'Gone',
        'LengthRequired',
        'PreconditionFailed',
        'RequestEntityTooLarge',
        'RequestUriTooLong',
        'UnsupportedMediaType',
        'RequestedRangeNotSatisfiable',
        'ExpectationFailed',
        'UpgradeRequired',
        'InternalServerError',
        'NotImplemented',
        'BadGateway',
        'ServiceUnavailable',
        'GatewayTimeout',
        'HttpVersionNotSupported',
      ])
      .exactOptional(),
    Success: z.boolean().exactOptional().openapi({ readOnly: true }),
  })
  .openapi({ required: [] })
  .openapi('ApiResponseListPublishedWrittenQuestion')

const ApiResponseObjectSchema = z
  .object({
    Errors: z.array(z.string()).exactOptional(),
    PagingInfo: PagingInfoSchema.exactOptional(),
    Response: z.object({}).exactOptional(),
    StatusCode: z
      .enum([
        'Continue',
        'SwitchingProtocols',
        'OK',
        'Created',
        'Accepted',
        'NonAuthoritativeInformation',
        'NoContent',
        'ResetContent',
        'PartialContent',
        'MultipleChoices',
        'Ambiguous',
        'MovedPermanently',
        'Moved',
        'Found',
        'Redirect',
        'SeeOther',
        'RedirectMethod',
        'NotModified',
        'UseProxy',
        'Unused',
        'TemporaryRedirect',
        'RedirectKeepVerb',
        'BadRequest',
        'Unauthorized',
        'PaymentRequired',
        'Forbidden',
        'NotFound',
        'MethodNotAllowed',
        'NotAcceptable',
        'ProxyAuthenticationRequired',
        'RequestTimeout',
        'Conflict',
        'Gone',
        'LengthRequired',
        'PreconditionFailed',
        'RequestEntityTooLarge',
        'RequestUriTooLong',
        'UnsupportedMediaType',
        'RequestedRangeNotSatisfiable',
        'ExpectationFailed',
        'UpgradeRequired',
        'InternalServerError',
        'NotImplemented',
        'BadGateway',
        'ServiceUnavailable',
        'GatewayTimeout',
        'HttpVersionNotSupported',
      ])
      .exactOptional(),
    Success: z.boolean().exactOptional().openapi({ readOnly: true }),
  })
  .openapi({ required: [] })
  .openapi('ApiResponseObject')

const PublishedEarlyDayMotionDetailsSchema: z.ZodType<PublishedEarlyDayMotionDetailsType> = z
  .lazy(() =>
    z
      .object({
        AmendmentSuffix: z.string().exactOptional(),
        AmendmentToMotionId: z.int32().exactOptional(),
        Amendments: z.array(PublishedEarlyDayMotionDetailsSchema).exactOptional(),
        DateTabled: z.iso.datetime({ offset: true }).exactOptional(),
        Id: z.int32().exactOptional(),
        MemberId: z.int32().exactOptional(),
        MotionText: z.string().exactOptional(),
        PrayingAgainstNegativeStatutoryInstrumentId: z.int32().exactOptional(),
        PrimarySponsor: MemberForDateSchema.exactOptional(),
        Sponsors: z.array(PublishedEarlyDayMotionSponsorSchema).exactOptional(),
        SponsorsCount: z.int32().exactOptional(),
        Status: z.enum(['Published', 'Withdrawn']).exactOptional(),
        StatusDate: z.iso.datetime({ offset: true }).exactOptional(),
        StatutoryInstrumentNumber: z.int32().exactOptional(),
        StatutoryInstrumentTitle: z.string().exactOptional(),
        StatutoryInstrumentYear: z.string().exactOptional(),
        Title: z.string().exactOptional(),
        UIN: z.int32().exactOptional(),
        UINWithAmendmentSuffix: z.string().exactOptional(),
      })
      .openapi({ required: [] }),
  )
  .openapi('PublishedEarlyDayMotionDetails')

const ApiResponsePublishedEarlyDayMotionDetailsSchema = z
  .object({
    Errors: z.array(z.string()).exactOptional(),
    PagingInfo: PagingInfoSchema.exactOptional(),
    Response: PublishedEarlyDayMotionDetailsSchema.exactOptional(),
    StatusCode: z
      .enum([
        'Continue',
        'SwitchingProtocols',
        'OK',
        'Created',
        'Accepted',
        'NonAuthoritativeInformation',
        'NoContent',
        'ResetContent',
        'PartialContent',
        'MultipleChoices',
        'Ambiguous',
        'MovedPermanently',
        'Moved',
        'Found',
        'Redirect',
        'SeeOther',
        'RedirectMethod',
        'NotModified',
        'UseProxy',
        'Unused',
        'TemporaryRedirect',
        'RedirectKeepVerb',
        'BadRequest',
        'Unauthorized',
        'PaymentRequired',
        'Forbidden',
        'NotFound',
        'MethodNotAllowed',
        'NotAcceptable',
        'ProxyAuthenticationRequired',
        'RequestTimeout',
        'Conflict',
        'Gone',
        'LengthRequired',
        'PreconditionFailed',
        'RequestEntityTooLarge',
        'RequestUriTooLong',
        'UnsupportedMediaType',
        'RequestedRangeNotSatisfiable',
        'ExpectationFailed',
        'UpgradeRequired',
        'InternalServerError',
        'NotImplemented',
        'BadGateway',
        'ServiceUnavailable',
        'GatewayTimeout',
        'HttpVersionNotSupported',
      ])
      .exactOptional(),
    Success: z.boolean().exactOptional().openapi({ readOnly: true }),
  })
  .openapi({ required: [] })
  .openapi('ApiResponsePublishedEarlyDayMotionDetails')

const PublishedEarlyDayMotionQueryParametersSchema = z
  .object({
    CurrentStatusDateEnd: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'Early Day Motions where the current status has been set on or before the date provided. Date format YYYY-MM-DD.',
      }),
    CurrentStatusDateStart: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'Early Day Motions where the current status has been set on or after the date provided. Date format YYYY-MM-DD.',
      }),
    EdmIds: z
      .array(z.int32())
      .exactOptional()
      .openapi({ description: 'Early Day Motions with an ID in the list provided.' }),
    IncludeSponsoredByMember: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Include Early Day Motions sponsored by Member specified' }),
    IsPrayer: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Early Day Motions which are a prayer against a Negative Statutory Instrument.',
      }),
    MemberId: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Return Early Day Motions tabled by Member with ID provided.' }),
    OrderBy: z
      .enum([
        'DateTabledAsc',
        'DateTabledDesc',
        'TitleAsc',
        'TitleDesc',
        'SignatureCountAsc',
        'SignatureCountDesc',
      ])
      .exactOptional()
      .openapi({
        description:
          'Order results by date tabled, title or signature count. Default is date tabled.',
      }),
    SearchTerm: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Early Day Motions where the title includes the search term provided.',
      }),
    Skip: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The number of records to skip from the first, default is 0.' }),
    Statuses: z
      .array(z.enum(['Published', 'Withdrawn']))
      .exactOptional()
      .openapi({ description: 'Early Day Motions where current status is in the selected list.' }),
    TabledEndDate: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'Early Day Motions where the date tabled is on or before the date provided. Date format YYYY-MM-DD.',
      }),
    TabledStartDate: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'Early Day Motions where the date tabled is on or after the date provided. Date format YYYY-MM-DD.',
      }),
    Take: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The number of records to return, default is 25, maximum is 100.' }),
    UINWithAmendmentSuffix: z
      .string()
      .exactOptional()
      .openapi({ description: 'Early Day Motions with an UINWithAmendmentSuffix provided.' }),
  })
  .openapi({ required: [] })
  .openapi('PublishedEarlyDayMotionQueryParameters')

const PublishedOralQuestionQueryParametersSchema = z
  .object({
    AnsweringBodyIds: z
      .array(z.int32())
      .exactOptional()
      .openapi({
        description:
          'Which answering body is to respond. A list of answering bodies can be found <a target="_blank" href="http://data.parliament.uk/membersdataplatform/services/mnis/referencedata/AnsweringBodies/">here</a>.',
      }),
    AnsweringDateEnd: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'Oral Questions where the answering date has been set on or before the date provided. Date format YYYY-MM-DD.',
      }),
    AnsweringDateStart: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'Oral Questions where the answering date has been set on or after the date provided. Date format YYYY-MM-DD.',
      }),
    AskingMemberIds: z
      .array(z.int32())
      .exactOptional()
      .openapi({
        description:
          'The ID of the member asking the question. Lists of member IDs for each house are available <a href="http://data.parliament.uk/membersdataplatform/services/mnis/members/query/house=Commons" target="_blank">Commons</a> and <a href="http://data.parliament.uk/membersdataplatform/services/mnis/members/query/house=Lords" target="_blank">Lords</a>.',
      }),
    OralQuestionTimeId: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Oral Questions where the question is within the question time with the ID provided',
      }),
    QuestionType: z
      .enum(['Substantive', 'Topical'])
      .exactOptional()
      .openapi({
        description:
          'Oral Questions where the question type is the selected type, substantive or topical.',
      }),
    Skip: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The number of records to skip from the first, default is 0.' }),
    Take: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The number of records to return, default is 25, maximum is 100.' }),
    UINs: z
      .array(z.int32())
      .exactOptional()
      .openapi({
        description:
          'The UIN for the question - note that UINs reset at the start of each Parliamentary session.',
      }),
  })
  .openapi({ required: [] })
  .openapi('PublishedOralQuestionQueryParameters')

const PublishedOralQuestionTimeQueryParametersSchema = z
  .object({
    AnsweringBodyIds: z
      .array(z.int32())
      .exactOptional()
      .openapi({
        description:
          'Which answering body is to respond. A list of answering bodies can be found <a target="_blank" href="http://data.parliament.uk/membersdataplatform/services/mnis/referencedata/AnsweringBodies/">here</a>.',
      }),
    AnsweringDateEnd: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'Oral Questions Time where the answering date has been set on or before the date provided. Date format YYYY-MM-DD.',
      }),
    AnsweringDateStart: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'Oral Questions Time where the answering date has been set on or after the date provided. Date format YYYY-MM-DD.',
      }),
    DeadlineDateEnd: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'Oral Questions Time where the deadline date has been set on or before the date provided. Date format YYYY-MM-DD.',
      }),
    DeadlineDateStart: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'Oral Questions Time where the deadline date has been set on or after the date provided. Date format YYYY-MM-DD.',
      }),
    OralQuestionTimeId: z.int32().exactOptional().openapi({ description: 'Identifier of the OQT' }),
    Skip: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The number of records to skip from the first, default is 0.' }),
    Take: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The number of records to return, default is 25, maximum is 100.' }),
  })
  .openapi({ required: [] })
  .openapi('PublishedOralQuestionTimeQueryParameters')

export const getEarlyDayMotionIdRoute = createRoute({
  method: 'get',
  path: '/EarlyDayMotion/{id}',
  tags: ['Early Day Motions'],
  summary: 'Returns a single Early Day Motion by ID',
  description: 'Get a single Early Day Motion which has the ID specified.',
  operationId: 'PublishedEarlyDayMotion_Get',
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
            description: 'Early Day Motion with the ID specified.',
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: ApiResponseListPublishedWrittenQuestionSchema },
        'text/json': { schema: ApiResponseListPublishedWrittenQuestionSchema },
      },
    },
    400: {
      description: 'BadRequest',
      content: {
        'application/json': { schema: ApiResponseObjectSchema },
        'text/json': { schema: ApiResponseObjectSchema },
      },
    },
    404: {
      description: 'NotFound',
      content: {
        'application/json': { schema: ApiResponseObjectSchema },
        'text/json': { schema: ApiResponseObjectSchema },
      },
    },
  },
})

export const getEarlyDayMotionsListRoute = createRoute({
  method: 'get',
  path: '/EarlyDayMotions/list',
  tags: ['Early Day Motions'],
  summary: 'Returns a list of Early Day Motions',
  description:
    'Get a list of Early Day Motions which meet the specified criteria. Only supports Published and Withdrawn status.',
  request: {
    query: z.object({
      'parameters.edmIds': z
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
            description: 'Early Day Motions with an ID in the list provided.',
            explode: true,
            in: 'query',
            name: 'parameters.edmIds',
            required: false,
            schema: { items: { format: 'int32', type: 'integer' }, type: 'array' },
          },
        }),
      'parameters.uINWithAmendmentSuffix': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Early Day Motions with an UINWithAmendmentSuffix provided.',
            in: 'query',
            name: 'parameters.uINWithAmendmentSuffix',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'parameters.searchTerm': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Early Day Motions where the title includes the search term provided.',
            in: 'query',
            name: 'parameters.searchTerm',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'parameters.currentStatusDateStart': z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            description:
              'Early Day Motions where the current status has been set on or after the date provided. Date format YYYY-MM-DD.',
            in: 'query',
            name: 'parameters.currentStatusDateStart',
            required: false,
            schema: { format: 'date-time', type: 'string' },
          },
        }),
      'parameters.currentStatusDateEnd': z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            description:
              'Early Day Motions where the current status has been set on or before the date provided. Date format YYYY-MM-DD.',
            in: 'query',
            name: 'parameters.currentStatusDateEnd',
            required: false,
            schema: { format: 'date-time', type: 'string' },
          },
        }),
      'parameters.isPrayer': z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Early Day Motions which are a prayer against a Negative Statutory Instrument.',
            in: 'query',
            name: 'parameters.isPrayer',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      'parameters.memberId': z
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
            description: 'Return Early Day Motions tabled by Member with ID provided.',
            in: 'query',
            name: 'parameters.memberId',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      'parameters.includeSponsoredByMember': z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Include Early Day Motions sponsored by Member specified',
            in: 'query',
            name: 'parameters.includeSponsoredByMember',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      'parameters.tabledStartDate': z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            description:
              'Early Day Motions where the date tabled is on or after the date provided. Date format YYYY-MM-DD.',
            in: 'query',
            name: 'parameters.tabledStartDate',
            required: false,
            schema: { format: 'date-time', type: 'string' },
          },
        }),
      'parameters.tabledEndDate': z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            description:
              'Early Day Motions where the date tabled is on or before the date provided. Date format YYYY-MM-DD.',
            in: 'query',
            name: 'parameters.tabledEndDate',
            required: false,
            schema: { format: 'date-time', type: 'string' },
          },
        }),
      'parameters.statuses': z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.enum(['Published', 'Withdrawn'])),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Early Day Motions where current status is in the selected list.',
            explode: true,
            in: 'query',
            name: 'parameters.statuses',
            required: false,
            schema: { items: { enum: ['Published', 'Withdrawn'], type: 'string' }, type: 'array' },
          },
        }),
      'parameters.orderBy': z
        .enum([
          'DateTabledAsc',
          'DateTabledDesc',
          'TitleAsc',
          'TitleDesc',
          'SignatureCountAsc',
          'SignatureCountDesc',
        ])
        .exactOptional()
        .openapi({
          param: {
            description:
              'Order results by date tabled, title or signature count. Default is date tabled.',
            in: 'query',
            name: 'parameters.orderBy',
            required: false,
            schema: {
              enum: [
                'DateTabledAsc',
                'DateTabledDesc',
                'TitleAsc',
                'TitleDesc',
                'SignatureCountAsc',
                'SignatureCountDesc',
              ],
              type: 'string',
            },
          },
        }),
      'parameters.skip': z
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
            description: 'The number of records to skip from the first, default is 0.',
            in: 'query',
            name: 'parameters.skip',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      'parameters.take': z
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
            description: 'The number of records to return, default is 25, maximum is 100.',
            in: 'query',
            name: 'parameters.take',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: ApiResponseListPublishedWrittenQuestionSchema },
        'application/xml': { schema: ApiResponseListPublishedWrittenQuestionSchema },
        'text/json': { schema: ApiResponseListPublishedWrittenQuestionSchema },
        'text/xml': { schema: ApiResponseListPublishedWrittenQuestionSchema },
      },
    },
    400: {
      description: 'BadRequest',
      content: {
        'application/json': { schema: ApiResponseObjectSchema },
        'application/xml': { schema: ApiResponseObjectSchema },
        'text/json': { schema: ApiResponseObjectSchema },
        'text/xml': { schema: ApiResponseObjectSchema },
      },
    },
  },
})

export const getOralquestionsListRoute = createRoute({
  method: 'get',
  path: '/oralquestions/list',
  tags: ['Oral Questions'],
  summary: 'Returns a list of oral questions',
  description: 'A list of oral questions meeting the specified criteria.',
  operationId: 'PublishedOralQuestion_Get',
  request: {
    query: z.object({
      'parameters.answeringDateStart': z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            description:
              'Oral Questions where the answering date has been set on or after the date provided. Date format YYYY-MM-DD.',
            in: 'query',
            name: 'parameters.answeringDateStart',
            required: false,
            schema: { format: 'date-time', type: 'string' },
          },
        }),
      'parameters.answeringDateEnd': z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            description:
              'Oral Questions where the answering date has been set on or before the date provided. Date format YYYY-MM-DD.',
            in: 'query',
            name: 'parameters.answeringDateEnd',
            required: false,
            schema: { format: 'date-time', type: 'string' },
          },
        }),
      'parameters.questionType': z
        .enum(['Substantive', 'Topical'])
        .exactOptional()
        .openapi({
          param: {
            description:
              'Oral Questions where the question type is the selected type, substantive or topical.',
            in: 'query',
            name: 'parameters.questionType',
            required: false,
            schema: { enum: ['Substantive', 'Topical'], type: 'string' },
          },
        }),
      'parameters.oralQuestionTimeId': z
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
            description:
              'Oral Questions where the question is within the question time with the ID provided',
            in: 'query',
            name: 'parameters.oralQuestionTimeId',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      'parameters.askingMemberIds': z
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
            description:
              'The ID of the member asking the question. Lists of member IDs for each house are available <a href="http://data.parliament.uk/membersdataplatform/services/mnis/members/query/house=Commons" target="_blank">Commons</a> and <a href="http://data.parliament.uk/membersdataplatform/services/mnis/members/query/house=Lords" target="_blank">Lords</a>.',
            explode: true,
            in: 'query',
            name: 'parameters.askingMemberIds',
            required: false,
            schema: { items: { format: 'int32', type: 'integer' }, type: 'array' },
          },
        }),
      'parameters.uINs': z
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
            description:
              'The UIN for the question - note that UINs reset at the start of each Parliamentary session.',
            explode: true,
            in: 'query',
            name: 'parameters.uINs',
            required: false,
            schema: { items: { format: 'int32', type: 'integer' }, type: 'array' },
          },
        }),
      'parameters.answeringBodyIds': z
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
            description:
              'Which answering body is to respond. A list of answering bodies can be found <a target="_blank" href="http://data.parliament.uk/membersdataplatform/services/mnis/referencedata/AnsweringBodies/">here</a>.',
            explode: true,
            in: 'query',
            name: 'parameters.answeringBodyIds',
            required: false,
            schema: { items: { format: 'int32', type: 'integer' }, type: 'array' },
          },
        }),
      'parameters.skip': z
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
            description: 'The number of records to skip from the first, default is 0.',
            in: 'query',
            name: 'parameters.skip',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      'parameters.take': z
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
            description: 'The number of records to return, default is 25, maximum is 100.',
            in: 'query',
            name: 'parameters.take',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: ApiResponseListPublishedWrittenQuestionSchema },
        'application/xml': { schema: ApiResponseListPublishedWrittenQuestionSchema },
        'text/json': { schema: ApiResponseListPublishedWrittenQuestionSchema },
        'text/xml': { schema: ApiResponseListPublishedWrittenQuestionSchema },
      },
    },
    400: {
      description: 'BadRequest',
      content: {
        'application/json': { schema: ApiResponseObjectSchema },
        'application/xml': { schema: ApiResponseObjectSchema },
        'text/json': { schema: ApiResponseObjectSchema },
        'text/xml': { schema: ApiResponseObjectSchema },
      },
    },
  },
})

export const getOralquestiontimesListRoute = createRoute({
  method: 'get',
  path: '/oralquestiontimes/list',
  tags: ['Oral Question Times'],
  summary: 'Returns a list of oral question times',
  description: 'A list of oral question times meeting the specified criteria.',
  operationId: 'PublishedOralQuestionTime_Get',
  request: {
    query: z.object({
      'parameters.answeringDateStart': z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            description:
              'Oral Questions Time where the answering date has been set on or after the date provided. Date format YYYY-MM-DD.',
            in: 'query',
            name: 'parameters.answeringDateStart',
            required: false,
            schema: { format: 'date-time', type: 'string' },
          },
        }),
      'parameters.answeringDateEnd': z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            description:
              'Oral Questions Time where the answering date has been set on or before the date provided. Date format YYYY-MM-DD.',
            in: 'query',
            name: 'parameters.answeringDateEnd',
            required: false,
            schema: { format: 'date-time', type: 'string' },
          },
        }),
      'parameters.deadlineDateStart': z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            description:
              'Oral Questions Time where the deadline date has been set on or after the date provided. Date format YYYY-MM-DD.',
            in: 'query',
            name: 'parameters.deadlineDateStart',
            required: false,
            schema: { format: 'date-time', type: 'string' },
          },
        }),
      'parameters.deadlineDateEnd': z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            description:
              'Oral Questions Time where the deadline date has been set on or before the date provided. Date format YYYY-MM-DD.',
            in: 'query',
            name: 'parameters.deadlineDateEnd',
            required: false,
            schema: { format: 'date-time', type: 'string' },
          },
        }),
      'parameters.oralQuestionTimeId': z
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
            description: 'Identifier of the OQT',
            in: 'query',
            name: 'parameters.oralQuestionTimeId',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      'parameters.answeringBodyIds': z
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
            description:
              'Which answering body is to respond. A list of answering bodies can be found <a target="_blank" href="http://data.parliament.uk/membersdataplatform/services/mnis/referencedata/AnsweringBodies/">here</a>.',
            explode: true,
            in: 'query',
            name: 'parameters.answeringBodyIds',
            required: false,
            schema: { items: { format: 'int32', type: 'integer' }, type: 'array' },
          },
        }),
      'parameters.skip': z
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
            description: 'The number of records to skip from the first, default is 0.',
            in: 'query',
            name: 'parameters.skip',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      'parameters.take': z
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
            description: 'The number of records to return, default is 25, maximum is 100.',
            in: 'query',
            name: 'parameters.take',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: ApiResponseListPublishedWrittenQuestionSchema },
        'application/xml': { schema: ApiResponseListPublishedWrittenQuestionSchema },
        'text/json': { schema: ApiResponseListPublishedWrittenQuestionSchema },
        'text/xml': { schema: ApiResponseListPublishedWrittenQuestionSchema },
      },
    },
    400: {
      description: 'BadRequest',
      content: {
        'application/json': { schema: ApiResponseObjectSchema },
        'application/xml': { schema: ApiResponseObjectSchema },
        'text/json': { schema: ApiResponseObjectSchema },
        'text/xml': { schema: ApiResponseObjectSchema },
      },
    },
  },
})
