import { createRoute, z } from '@hono/zod-openapi'

const PayloadSchema = z.string().openapi('Payload')

const GetMediaOutputSchema = z
  .object({
    Payload: PayloadSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p> The payload Kinesis Video Streams returns is a sequence of chunks from the specified stream. For information about the chunks, see . The chunks that Kinesis Video Streams returns in the <code>GetMedia</code> call also include the following additional Matroska (MKV) tags: </p> <ul> <li> <p>AWS_KINESISVIDEO_CONTINUATION_TOKEN (UTF-8 string) - In the event your <code>GetMedia</code> call terminates, you can use this continuation token in your next request to get the next chunk where the last request terminated.</p> </li> <li> <p>AWS_KINESISVIDEO_MILLIS_BEHIND_NOW (UTF-8 string) - Client applications can use this tag value to determine how far behind the chunk returned in the response is from the latest chunk on the stream. </p> </li> <li> <p>AWS_KINESISVIDEO_FRAGMENT_NUMBER - Fragment number returned in the chunk.</p> </li> <li> <p>AWS_KINESISVIDEO_SERVER_TIMESTAMP - Server timestamp of the fragment.</p> </li> <li> <p>AWS_KINESISVIDEO_PRODUCER_TIMESTAMP - Producer timestamp of the fragment.</p> </li> </ul> <p>The following tags will be present if an error occurs:</p> <ul> <li> <p>AWS_KINESISVIDEO_ERROR_CODE - String description of an error that caused GetMedia to stop.</p> </li> <li> <p>AWS_KINESISVIDEO_ERROR_ID: Integer code of the error.</p> </li> </ul> <p>The error codes are as follows:</p> <ul> <li> <p>3002 - Error writing to the stream</p> </li> <li> <p>4000 - Requested fragment is not found</p> </li> <li> <p>4500 - Access denied for the stream's KMS key</p> </li> <li> <p>4501 - Stream's KMS key is disabled</p> </li> <li> <p>4502 - Validation error on the stream's KMS key</p> </li> <li> <p>4503 - KMS key specified in the stream is unavailable</p> </li> <li> <p>4504 - Invalid usage of the KMS key specified in the stream</p> </li> <li> <p>4505 - Invalid state of the KMS key specified in the stream</p> </li> <li> <p>4506 - Unable to find the KMS key specified in the stream</p> </li> <li> <p>5000 - Internal error</p> </li> </ul>",
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetMediaOutput')

const StartSelectorTypeSchema = z
  .enum([
    'FRAGMENT_NUMBER',
    'SERVER_TIMESTAMP',
    'PRODUCER_TIMESTAMP',
    'NOW',
    'EARLIEST',
    'CONTINUATION_TOKEN',
  ])
  .openapi('StartSelectorType')

const FragmentNumberStringSchema = z
  .string()
  .regex(/^[0-9]+$/)
  .min(1)
  .max(128)
  .openapi('FragmentNumberString')

const TimestampSchema = z.iso.datetime({ offset: true }).openapi('Timestamp')

const ContinuationTokenSchema = z
  .string()
  .regex(/^[a-zA-Z0-9_\.\-]+$/)
  .min(1)
  .max(128)
  .openapi('ContinuationToken')

const ResourceNotFoundExceptionSchema = z.any().openapi('ResourceNotFoundException')

const NotAuthorizedExceptionSchema = z.any().openapi('NotAuthorizedException')

const InvalidEndpointExceptionSchema = z.any().openapi('InvalidEndpointException')

const ClientLimitExceededExceptionSchema = z.any().openapi('ClientLimitExceededException')

const ConnectionLimitExceededExceptionSchema = z.any().openapi('ConnectionLimitExceededException')

const InvalidArgumentExceptionSchema = z.any().openapi('InvalidArgumentException')

const ContentTypeSchema = z
  .string()
  .regex(/^[a-zA-Z0-9_\.\-]+$/)
  .min(1)
  .max(128)
  .openapi('ContentType')

const StreamNameSchema = z
  .string()
  .regex(/[a-zA-Z0-9_.-]+/)
  .min(1)
  .max(256)
  .openapi('StreamName')

const ResourceARNSchema = z
  .string()
  .regex(/arn:aws:kinesisvideo:[a-z0-9-]+:[0-9]+:[a-z]+\/[a-zA-Z0-9_.-]+\/[0-9]+/)
  .min(1)
  .max(1024)
  .openapi('ResourceARN')

const StartSelectorSchema = z
  .object({
    StartSelectorType: StartSelectorTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>Identifies the fragment on the Kinesis video stream where you want to start getting the data from.</p> <ul> <li> <p>NOW - Start with the latest chunk on the stream.</p> </li> <li> <p>EARLIEST - Start with earliest available chunk on the stream.</p> </li> <li> <p>FRAGMENT_NUMBER - Start with the chunk after a specific fragment. You must also specify the <code>AfterFragmentNumber</code> parameter.</p> </li> <li> <p>PRODUCER_TIMESTAMP or SERVER_TIMESTAMP - Start with the chunk containing a fragment with the specified producer or server timestamp. You specify the timestamp by adding <code>StartTimestamp</code>.</p> </li> <li> <p> CONTINUATION_TOKEN - Read using the specified continuation token. </p> </li> </ul> <note> <p>If you choose the NOW, EARLIEST, or CONTINUATION_TOKEN as the <code>startSelectorType</code>, you don't provide any additional information in the <code>startSelector</code>.</p> </note>",
        }),
    ),
    AfterFragmentNumber: FragmentNumberStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the fragment number from where you want the <code>GetMedia</code> API to start returning the fragments. ',
        }),
    ).exactOptional(),
    StartTimestamp: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'A timestamp value. This value is required if you choose the PRODUCER_TIMESTAMP or the SERVER_TIMESTAMP as the <code>startSelectorType</code>. The <code>GetMedia</code> API then starts with the chunk containing the fragment that has the specified timestamp.',
        }),
    ).exactOptional(),
    ContinuationToken: ContinuationTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'Continuation token that Kinesis Video Streams returned in the previous <code>GetMedia</code> response. The <code>GetMedia</code> API then starts with the chunk identified by the continuation token.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['StartSelectorType'],
    description:
      "<p>Identifies the chunk on the Kinesis video stream where you want the <code>GetMedia</code> API to start returning media data. You have the following options to identify the starting chunk: </p> <ul> <li> <p>Choose the latest (or oldest) chunk.</p> </li> <li> <p>Identify a specific chunk. You can identify a specific chunk either by providing a fragment number or timestamp (server or producer). </p> </li> <li> <p>Each chunk's metadata includes a continuation token as a Matroska (MKV) tag (<code>AWS_KINESISVIDEO_CONTINUATION_TOKEN</code>). If your previous <code>GetMedia</code> request terminated, you can use this tag value in your next <code>GetMedia</code> request. The API then starts returning chunks starting where the last API ended.</p> </li> </ul>",
  })
  .openapi('StartSelector')

const GetMediaInputSchema = z
  .object({
    StreamName: StreamNameSchema.and(
      z
        .any()
        .openapi({
          description:
            "The Kinesis video stream name from where you want to get the media content. If you don't specify the <code>streamName</code>, you must specify the <code>streamARN</code>.",
        }),
    ).exactOptional(),
    StreamARN: ResourceARNSchema.and(
      z
        .any()
        .openapi({
          description:
            "The ARN of the stream from where you want to get the media content. If you don't specify the <code>streamARN</code>, you must specify the <code>streamName</code>.",
        }),
    ).exactOptional(),
    StartSelector: StartSelectorSchema.and(
      z
        .any()
        .openapi({
          description: 'Identifies the starting chunk to get from the specified stream. ',
        }),
    ),
  })
  .openapi({ required: ['StartSelector'], title: 'GetMediaInput' })
  .openapi('GetMediaInput')

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

export const postGetMediaRoute = createRoute({
  method: 'post',
  path: '/getMedia',
  description:
    '<p> Use this API to retrieve media content from a Kinesis video stream. In the request, you identify the stream name or stream Amazon Resource Name (ARN), and the starting chunk. Kinesis Video Streams then returns a stream of chunks in order by fragment number.</p> <note> <p>You must first call the <code>GetDataEndpoint</code> API to get an endpoint. Then send the <code>GetMedia</code> requests to this endpoint using the <a href="https://docs.aws.amazon.com/cli/latest/reference/">--endpoint-url parameter</a>. </p> </note> <p>When you put media data (fragments) on a stream, Kinesis Video Streams stores each incoming fragment and related metadata in what is called a "chunk." For more information, see <a href="https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_dataplane_PutMedia.html">PutMedia</a>. The <code>GetMedia</code> API returns a stream of these chunks starting from the chunk that you specify in the request. </p> <p>The following limits apply when using the <code>GetMedia</code> API:</p> <ul> <li> <p>A client can call <code>GetMedia</code> up to five times per second per stream. </p> </li> <li> <p>Kinesis Video Streams sends media data at a rate of up to 25 megabytes per second (or 200 megabits per second) during a <code>GetMedia</code> session. </p> </li> </ul> <note> <p>If an error is thrown after invoking a Kinesis Video Streams media API, in addition to the HTTP status code and the response body, it includes the following pieces of information: </p> <ul> <li> <p> <code>x-amz-ErrorType</code> HTTP header – contains a more specific error type in addition to what the HTTP status code provides. </p> </li> <li> <p> <code>x-amz-RequestId</code> HTTP header – if you want to report an issue to AWS, the support team can better diagnose the problem if given the Request Id.</p> </li> </ul> <p>Both the HTTP status code and the ErrorType header can be utilized to make programmatic decisions about whether errors are retry-able and under what conditions, as well as provide information on what actions the client programmer might need to take in order to successfully try again.</p> <p>For more information, see the <b>Errors</b> section at the bottom of this topic, as well as <a href="https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/CommonErrors.html">Common Errors</a>. </p> </note>',
  operationId: 'GetMedia',
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
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              StreamName: z
                .string()
                .regex(/[a-zA-Z0-9_.-]+/)
                .min(1)
                .max(256)
                .exactOptional()
                .openapi({
                  description:
                    "The Kinesis video stream name from where you want to get the media content. If you don't specify the <code>streamName</code>, you must specify the <code>streamARN</code>.",
                }),
              StreamARN: z
                .string()
                .regex(/arn:aws:kinesisvideo:[a-z0-9-]+:[0-9]+:[a-z]+\/[a-zA-Z0-9_.-]+\/[0-9]+/)
                .min(1)
                .max(1024)
                .exactOptional()
                .openapi({
                  description:
                    "The ARN of the stream from where you want to get the media content. If you don't specify the <code>streamARN</code>, you must specify the <code>streamName</code>.",
                }),
              StartSelector: z
                .object({
                  StartSelectorType: StartSelectorTypeSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          "<p>Identifies the fragment on the Kinesis video stream where you want to start getting the data from.</p> <ul> <li> <p>NOW - Start with the latest chunk on the stream.</p> </li> <li> <p>EARLIEST - Start with earliest available chunk on the stream.</p> </li> <li> <p>FRAGMENT_NUMBER - Start with the chunk after a specific fragment. You must also specify the <code>AfterFragmentNumber</code> parameter.</p> </li> <li> <p>PRODUCER_TIMESTAMP or SERVER_TIMESTAMP - Start with the chunk containing a fragment with the specified producer or server timestamp. You specify the timestamp by adding <code>StartTimestamp</code>.</p> </li> <li> <p> CONTINUATION_TOKEN - Read using the specified continuation token. </p> </li> </ul> <note> <p>If you choose the NOW, EARLIEST, or CONTINUATION_TOKEN as the <code>startSelectorType</code>, you don't provide any additional information in the <code>startSelector</code>.</p> </note>",
                      }),
                  ).exactOptional(),
                  AfterFragmentNumber: FragmentNumberStringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'Specifies the fragment number from where you want the <code>GetMedia</code> API to start returning the fragments. ',
                      }),
                  ).exactOptional(),
                  StartTimestamp: TimestampSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'A timestamp value. This value is required if you choose the PRODUCER_TIMESTAMP or the SERVER_TIMESTAMP as the <code>startSelectorType</code>. The <code>GetMedia</code> API then starts with the chunk containing the fragment that has the specified timestamp.',
                      }),
                  ).exactOptional(),
                  ContinuationToken: ContinuationTokenSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'Continuation token that Kinesis Video Streams returned in the previous <code>GetMedia</code> response. The <code>GetMedia</code> API then starts with the chunk identified by the continuation token.',
                      }),
                  ).exactOptional(),
                })
                .openapi({
                  description:
                    "<p>Identifies the chunk on the Kinesis video stream where you want the <code>GetMedia</code> API to start returning media data. You have the following options to identify the starting chunk: </p> <ul> <li> <p>Choose the latest (or oldest) chunk.</p> </li> <li> <p>Identify a specific chunk. You can identify a specific chunk either by providing a fragment number or timestamp (server or producer). </p> </li> <li> <p>Each chunk's metadata includes a continuation token as a Matroska (MKV) tag (<code>AWS_KINESISVIDEO_CONTINUATION_TOKEN</code>). If your previous <code>GetMedia</code> request terminated, you can use this tag value in your next <code>GetMedia</code> request. The API then starts returning chunks starting where the last API ended.</p> </li> </ul>",
                  required: [],
                }),
            })
            .openapi({ required: ['StartSelector'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetMediaOutputSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'NotAuthorizedException',
      content: { 'application/json': { schema: NotAuthorizedExceptionSchema } },
    },
    482: {
      description: 'InvalidEndpointException',
      content: { 'application/json': { schema: InvalidEndpointExceptionSchema } },
    },
    483: {
      description: 'ClientLimitExceededException',
      content: { 'application/json': { schema: ClientLimitExceededExceptionSchema } },
    },
    484: {
      description: 'ConnectionLimitExceededException',
      content: { 'application/json': { schema: ConnectionLimitExceededExceptionSchema } },
    },
    485: {
      description: 'InvalidArgumentException',
      content: { 'application/json': { schema: InvalidArgumentExceptionSchema } },
    },
  },
})
