import { createRoute, z } from '@hono/zod-openapi'

const CategoryNameSchema = z
  .string()
  .regex(/.*\S.*/)
  .min(1)
  .max(256)
  .openapi('CategoryName')

const MatchedCategoriesSchema = z
  .array(CategoryNameSchema)
  .min(0)
  .max(150)
  .openapi('MatchedCategories')

const OffsetMillisSchema = z.int().min(0).openapi('OffsetMillis')

const PointOfInterestSchema = z
  .object({
    BeginOffsetMillis: OffsetMillisSchema.and(
      z
        .any()
        .openapi({
          description: 'The beginning offset in milliseconds where the category rule was detected.',
        }),
    ),
    EndOffsetMillis: OffsetMillisSchema.and(
      z
        .any()
        .openapi({
          description: 'The ending offset in milliseconds where the category rule was detected.',
        }),
    ),
  })
  .openapi({
    required: ['BeginOffsetMillis', 'EndOffsetMillis'],
    description: 'The section of the contact audio where that category rule was detected.',
  })
  .openapi('PointOfInterest')

const PointsOfInterestSchema = z
  .array(PointOfInterestSchema)
  .min(0)
  .max(20)
  .openapi('PointsOfInterest')

const CategoryDetailsSchema = z
  .object({
    PointsOfInterest: PointsOfInterestSchema.and(
      z
        .any()
        .openapi({ description: 'The section of audio where the category rule was detected.' }),
    ),
  })
  .openapi({
    required: ['PointsOfInterest'],
    description: 'Provides information about the category rule that was matched.',
  })
  .openapi('CategoryDetails')

const MatchedDetailsSchema = z
  .record(z.string(), CategoryDetailsSchema)
  .refine((val) => Object.keys(val).length >= 0)
  .refine((val) => Object.keys(val).length <= 150)
  .openapi('MatchedDetails')

type CategoriesType = {
  MatchedCategories: z.infer<typeof MatchedCategoriesSchema> & { [key: string]: unknown }
  MatchedDetails: z.infer<typeof MatchedDetailsSchema> & { [key: string]: unknown }
}

const TranscriptIdSchema = z
  .string()
  .regex(/.*\S.*/)
  .min(1)
  .max(256)
  .openapi('TranscriptId')

const ParticipantIdSchema = z
  .string()
  .regex(/.*\S.*/)
  .min(1)
  .max(256)
  .openapi('ParticipantId')

const ParticipantRoleSchema = z
  .string()
  .regex(/.*\S.*/)
  .min(1)
  .max(256)
  .openapi('ParticipantRole')

const TranscriptContentSchema = z
  .string()
  .regex(/.*\S.*/)
  .min(1)
  .openapi('TranscriptContent')

const SentimentValueSchema = z.enum(['POSITIVE', 'NEUTRAL', 'NEGATIVE']).openapi('SentimentValue')

const CharacterOffsetSchema = z.int().min(0).openapi('CharacterOffset')

const CharacterOffsetsSchema = z
  .object({
    BeginOffsetChar: CharacterOffsetSchema.and(
      z.any().openapi({ description: 'The beginning of the issue.' }),
    ),
    EndOffsetChar: CharacterOffsetSchema.and(
      z.any().openapi({ description: 'The end of the issue.' }),
    ),
  })
  .openapi({
    required: ['BeginOffsetChar', 'EndOffsetChar'],
    description: 'For characters that were detected as issues, where they occur in the transcript.',
  })
  .openapi('CharacterOffsets')

const IssueDetectedSchema = z
  .object({
    CharacterOffsets: CharacterOffsetsSchema.and(
      z
        .any()
        .openapi({ description: 'The offset for when the issue was detected in the segment.' }),
    ),
  })
  .openapi({
    required: ['CharacterOffsets'],
    description:
      'Potential issues that are detected based on an artificial intelligence analysis of each turn in the conversation.',
  })
  .openapi('IssueDetected')

const IssuesDetectedSchema = z.array(IssueDetectedSchema).min(0).max(20).openapi('IssuesDetected')

const TranscriptSchema = z
  .object({
    Id: TranscriptIdSchema.and(
      z.any().openapi({ description: 'The identifier of the transcript.' }),
    ),
    ParticipantId: ParticipantIdSchema.and(
      z.any().openapi({ description: 'The identifier of the participant.' }),
    ),
    ParticipantRole: ParticipantRoleSchema.and(
      z
        .any()
        .openapi({
          description: 'The role of participant. For example, is it a customer, agent, or system.',
        }),
    ),
    Content: TranscriptContentSchema.and(
      z.any().openapi({ description: 'The content of the transcript.' }),
    ),
    BeginOffsetMillis: OffsetMillisSchema.and(
      z.any().openapi({ description: 'The beginning offset in the contact for this transcript.' }),
    ),
    EndOffsetMillis: OffsetMillisSchema.and(
      z.any().openapi({ description: 'The end offset in the contact for this transcript.' }),
    ),
    Sentiment: SentimentValueSchema.and(
      z
        .any()
        .openapi({ description: 'The sentiment of the detected for this piece of transcript.' }),
    ),
    IssuesDetected: IssuesDetectedSchema.and(
      z
        .any()
        .openapi({
          description: 'List of positions where issues were detected on the transcript.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: [
      'Id',
      'ParticipantId',
      'ParticipantRole',
      'Content',
      'BeginOffsetMillis',
      'EndOffsetMillis',
      'Sentiment',
    ],
    description: 'A list of messages in the session.',
  })
  .openapi('Transcript')

const CategoriesSchema: z.ZodType<CategoriesType> = z
  .lazy(() =>
    z
      .object({
        MatchedCategories: MatchedCategoriesSchema.and(
          z
            .any()
            .openapi({
              description: 'The category rules that have been matched in the analyzed segment.',
            }),
        ),
        MatchedDetails: MatchedDetailsSchema.and(
          z
            .any()
            .openapi({
              description:
                'The category rule that was matched and when it occurred in the transcript.',
            }),
        ),
      })
      .openapi({
        required: ['MatchedCategories', 'MatchedDetails'],
        description:
          'Provides the category rules that are used to automatically categorize contacts based on uttered keywords and phrases.',
      }),
  )
  .openapi('Categories')

const RealtimeContactAnalysisSegmentSchema = z
  .object({
    Transcript: TranscriptSchema.and(
      z.any().openapi({ description: 'The analyzed transcript.' }),
    ).exactOptional(),
    Categories: CategoriesSchema.and(
      z.any().openapi({ description: 'The matched category rules.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'An analyzed segment for a real-time analysis session.', required: [] })
  .openapi('RealtimeContactAnalysisSegment')

const RealtimeContactAnalysisSegmentsSchema = z
  .array(RealtimeContactAnalysisSegmentSchema)
  .min(0)
  .max(100)
  .openapi('RealtimeContactAnalysisSegments')

const NextTokenSchema = z
  .string()
  .regex(/.*\S.*/)
  .min(1)
  .max(131070)
  .openapi('NextToken')

const ListRealtimeContactAnalysisSegmentsResponseSchema = z
  .object({
    Segments: RealtimeContactAnalysisSegmentsSchema.and(
      z.any().openapi({ description: 'An analyzed transcript or category.' }),
    ),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>If there are additional results, this is the token for the next set of results. If response includes <code>nextToken</code> there are two possible scenarios:</p> <ul> <li> <p>There are more segments so another call is required to get them.</p> </li> <li> <p>There are no more segments at this time, but more may be available later (real-time analysis is in progress) so the client should call the operation again to get new segments.</p> </li> </ul> <p>If response does not include <code>nextToken</code>, the analysis is completed (successfully or failed) and there are no more segments to retrieve.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['Segments'] })
  .openapi('ListRealtimeContactAnalysisSegmentsResponse')

const InvalidRequestExceptionSchema = z.any().openapi('InvalidRequestException')

const AccessDeniedExceptionSchema = z.any().openapi('AccessDeniedException')

const ResourceNotFoundExceptionSchema = z.any().openapi('ResourceNotFoundException')

const InternalServiceExceptionSchema = z.any().openapi('InternalServiceException')

const ThrottlingExceptionSchema = z.any().openapi('ThrottlingException')

const ContactIdSchema = z
  .string()
  .regex(/.*\S.*/)
  .min(1)
  .max(256)
  .openapi('ContactId')

const InstanceIdSchema = z
  .string()
  .regex(/.*\S.*/)
  .min(1)
  .max(256)
  .openapi('InstanceId')

const MaxResultsSchema = z.int().min(1).max(100).openapi('MaxResults')

const ListRealtimeContactAnalysisSegmentsRequestSchema = z
  .object({
    InstanceId: InstanceIdSchema.and(
      z.any().openapi({ description: 'The identifier of the Amazon Connect instance.' }),
    ),
    ContactId: ContactIdSchema.and(
      z.any().openapi({ description: 'The identifier of the contact.' }),
    ),
    MaxResults: MaxResultsSchema.and(
      z.any().openapi({ description: 'The maximimum number of results to return per page.' }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['InstanceId', 'ContactId'],
    title: 'ListRealtimeContactAnalysisSegmentsRequest',
  })
  .openapi('ListRealtimeContactAnalysisSegmentsRequest')

const XAmzContentSha256ParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      name: 'X-Amz-Content-Sha256',
      in: 'header',
      schema: { type: 'string' },
      required: false,
    },
  })

const XAmzDateParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: { name: 'X-Amz-Date', in: 'header', schema: { type: 'string' }, required: false },
  })

const XAmzAlgorithmParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: { name: 'X-Amz-Algorithm', in: 'header', schema: { type: 'string' }, required: false },
  })

const XAmzCredentialParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: { name: 'X-Amz-Credential', in: 'header', schema: { type: 'string' }, required: false },
  })

const XAmzSecurityTokenParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      name: 'X-Amz-Security-Token',
      in: 'header',
      schema: { type: 'string' },
      required: false,
    },
  })

const XAmzSignatureParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: { name: 'X-Amz-Signature', in: 'header', schema: { type: 'string' }, required: false },
  })

const XAmzSignedHeadersParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      name: 'X-Amz-SignedHeaders',
      in: 'header',
      schema: { type: 'string' },
      required: false,
    },
  })

const HmacSecurityScheme = {
  type: 'apiKey',
  name: 'Authorization',
  in: 'header',
  description: 'Amazon Signature authorization v4',
  'x-amazon-apigateway-authtype': 'awsSigv4',
}

export const postRealtimeContactAnalysisAnalysisSegmentsRoute = createRoute({
  method: 'post',
  path: '/realtime-contact-analysis/analysis-segments',
  description: 'Provides a list of analysis segments for a real-time analysis session.',
  operationId: 'ListRealtimeContactAnalysisSegments',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      MaxResults: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxResults',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      NextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'NextToken',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              InstanceId: z
                .string()
                .regex(/.*\S.*/)
                .min(1)
                .max(256)
                .openapi({ description: 'The identifier of the Amazon Connect instance.' }),
              ContactId: z
                .string()
                .regex(/.*\S.*/)
                .min(1)
                .max(256)
                .openapi({ description: 'The identifier of the contact.' }),
              MaxResults: z
                .int()
                .min(1)
                .max(100)
                .exactOptional()
                .openapi({ description: 'The maximimum number of results to return per page.' }),
              NextToken: z
                .string()
                .regex(/.*\S.*/)
                .min(1)
                .max(131070)
                .exactOptional()
                .openapi({
                  description:
                    'The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.',
                }),
            })
            .openapi({ required: ['InstanceId', 'ContactId'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: ListRealtimeContactAnalysisSegmentsResponseSchema },
      },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'InternalServiceException',
      content: { 'application/json': { schema: InternalServiceExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})
