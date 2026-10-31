import { createRoute, z } from '@hono/zod-openapi'

const MessageContentBlobSchema = z.string().openapi('MessageContentBlob')

const GetRawMessageContentResponseSchema = z
  .object({
    messageContent: MessageContentBlobSchema.and(
      z.any().openapi({ description: 'The raw content of the email message, in MIME format.' }),
    ),
  })
  .openapi({ required: ['messageContent'] })
  .openapi('GetRawMessageContentResponse')

const ResourceNotFoundExceptionSchema = z.any().openapi('ResourceNotFoundException')

const PutRawMessageContentResponseSchema = z.object({}).openapi('PutRawMessageContentResponse')

const S3BucketIdTypeSchema = z
  .string()
  .regex(/^[a-z0-9][a-z0-9\-]*/)
  .min(3)
  .max(63)
  .openapi('S3BucketIdType')

const S3KeyIdTypeSchema = z
  .string()
  .regex(/[a-zA-Z0-9\-\/]*/)
  .min(1)
  .max(1024)
  .openapi('S3KeyIdType')

const S3VersionTypeSchema = z.string().regex(/.+/).min(1).max(1024).openapi('S3VersionType')

const S3ReferenceSchema = z
  .object({
    bucket: S3BucketIdTypeSchema.and(z.any().openapi({ description: 'The S3 bucket name.' })),
    key: S3KeyIdTypeSchema.and(z.any().openapi({ description: 'The S3 key object name.' })),
    objectVersion: S3VersionTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'If you enable versioning for the bucket, you can specify the object version.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['bucket', 'key'],
    description:
      '<p>Amazon S3 object representing the updated message content, in MIME format.</p> <note> <p>The region for the S3 bucket containing the S3 object must match the region used for WorkMail operations. Also, for WorkMail to process an S3 object, it must have permission to access that object. For more information, see <a href="https://docs.aws.amazon.com/workmail/latest/adminguide/update-with-lambda.html"> Updating message content with AWS Lambda</a>.</p> </note>',
  })
  .openapi('S3Reference')

const InvalidContentLocationSchema = z.any().openapi('InvalidContentLocation')

const MessageRejectedSchema = z.any().openapi('MessageRejected')

const MessageFrozenSchema = z.any().openapi('MessageFrozen')

const MessageIdTypeSchema = z
  .string()
  .regex(/[a-z0-9\-]*/)
  .min(1)
  .max(120)
  .openapi('MessageIdType')

const GetRawMessageContentRequestSchema = z
  .object({})
  .openapi({ title: 'GetRawMessageContentRequest' })
  .openapi('GetRawMessageContentRequest')

const RawMessageContentSchema = z
  .object({
    s3Reference: S3ReferenceSchema.and(
      z.any().openapi({ description: 'The S3 reference of an email message.' }),
    ),
  })
  .openapi({
    required: ['s3Reference'],
    description:
      '<p>Provides the MIME content of the updated email message as an S3 object. All MIME content must meet the following criteria:</p> <ul> <li> <p>Each part of a multipart MIME message must be formatted properly.</p> </li> <li> <p>Attachments must be of a content type that Amazon SES supports. For more information, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/mime-types-appendix.html">Unsupported Attachment Types</a>.</p> </li> <li> <p>If any of the MIME parts in a message contain content that is outside of the 7-bit ASCII character range, we recommend encoding that content.</p> </li> <li> <p>Per <a href="https://tools.ietf.org/html/rfc5321#section-4.5.3.1.6">RFC 5321</a>, the maximum length of each line of text, including the &lt;CRLF&gt;, must not exceed 1,000 characters.</p> </li> <li> <p>The message must contain all the required header fields. Check the returned error message for more information.</p> </li> <li> <p>The value of immutable headers must remain unchanged. Check the returned error message for more information.</p> </li> <li> <p>Certain unique headers can only appear once. Check the returned error message for more information.</p> </li> </ul>',
  })
  .openapi('RawMessageContent')

const PutRawMessageContentRequestSchema = z
  .object({
    content: RawMessageContentSchema.and(
      z
        .any()
        .openapi({
          description: 'Describes the raw message content of the updated email message.',
        }),
    ),
  })
  .openapi({ required: ['content'], title: 'PutRawMessageContentRequest' })
  .openapi('PutRawMessageContentRequest')

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

export const getMessagesMessageIdRoute = createRoute({
  method: 'get',
  path: '/messages/{messageId}',
  description: 'Retrieves the raw content of an in-transit email message, in MIME format.',
  operationId: 'GetRawMessageContent',
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
    params: z.object({
      messageId: z
        .string()
        .regex(/[a-z0-9\-]*/)
        .min(1)
        .max(120)
        .openapi({
          param: {
            name: 'messageId',
            in: 'path',
            required: true,
            description: 'The identifier of the email message to retrieve.',
            schema: { type: 'string', pattern: '[a-z0-9\\-]*', minLength: 1, maxLength: 120 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetRawMessageContentResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postMessagesMessageIdRoute = createRoute({
  method: 'post',
  path: '/messages/{messageId}',
  description:
    '<p>Updates the raw content of an in-transit email message, in MIME format.</p> <p>This example describes how to update in-transit email message. For more information and examples for using this API, see <a href="https://docs.aws.amazon.com/workmail/latest/adminguide/update-with-lambda.html"> Updating message content with AWS Lambda</a>.</p> <note> <p>Updates to an in-transit message only appear when you call <code>PutRawMessageContent</code> from an AWS Lambda function configured with a synchronous <a href="https://docs.aws.amazon.com/workmail/latest/adminguide/lambda.html#synchronous-rules"> Run Lambda</a> rule. If you call <code>PutRawMessageContent</code> on a delivered or sent message, the message remains unchanged, even though <a href="https://docs.aws.amazon.com/workmail/latest/APIReference/API_messageflow_GetRawMessageContent.html">GetRawMessageContent</a> returns an updated message. </p> </note>',
  operationId: 'PutRawMessageContent',
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
    params: z.object({
      messageId: z
        .string()
        .regex(/[a-z0-9\-]*/)
        .min(1)
        .max(120)
        .openapi({
          param: {
            name: 'messageId',
            in: 'path',
            required: true,
            description: 'The identifier of the email message being updated.',
            schema: { type: 'string', pattern: '[a-z0-9\\-]*', minLength: 1, maxLength: 120 },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              content: z
                .object({
                  s3Reference: S3ReferenceSchema.and(
                    z.any().openapi({ description: 'The S3 reference of an email message.' }),
                  ).exactOptional(),
                })
                .openapi({
                  description:
                    '<p>Provides the MIME content of the updated email message as an S3 object. All MIME content must meet the following criteria:</p> <ul> <li> <p>Each part of a multipart MIME message must be formatted properly.</p> </li> <li> <p>Attachments must be of a content type that Amazon SES supports. For more information, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/mime-types-appendix.html">Unsupported Attachment Types</a>.</p> </li> <li> <p>If any of the MIME parts in a message contain content that is outside of the 7-bit ASCII character range, we recommend encoding that content.</p> </li> <li> <p>Per <a href="https://tools.ietf.org/html/rfc5321#section-4.5.3.1.6">RFC 5321</a>, the maximum length of each line of text, including the &lt;CRLF&gt;, must not exceed 1,000 characters.</p> </li> <li> <p>The message must contain all the required header fields. Check the returned error message for more information.</p> </li> <li> <p>The value of immutable headers must remain unchanged. Check the returned error message for more information.</p> </li> <li> <p>Certain unique headers can only appear once. Check the returned error message for more information.</p> </li> </ul>',
                  required: [],
                }),
            })
            .openapi({ required: ['content'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: PutRawMessageContentResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'InvalidContentLocation',
      content: { 'application/json': { schema: InvalidContentLocationSchema } },
    },
    482: {
      description: 'MessageRejected',
      content: { 'application/json': { schema: MessageRejectedSchema } },
    },
    483: {
      description: 'MessageFrozen',
      content: { 'application/json': { schema: MessageFrozenSchema } },
    },
  },
})
