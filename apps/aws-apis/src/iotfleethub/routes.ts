import { createRoute, z } from '@hono/zod-openapi'

const IdSchema = z
  .string()
  .regex(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/)
  .length(36)
  .openapi('Id')

const ArnSchema = z
  .string()
  .regex(/^arn:[!-~]+$/)
  .min(1)
  .max(1600)
  .openapi('Arn')

const CreateApplicationResponseSchema = z
  .object({
    applicationId: IdSchema.and(
      z.any().openapi({ description: 'The unique Id of the web application.' }),
    ),
    applicationArn: ArnSchema.and(
      z.any().openapi({ description: 'The ARN of the web application.' }),
    ),
  })
  .openapi({ required: ['applicationId', 'applicationArn'] })
  .openapi('CreateApplicationResponse')

const TagValueSchema = z.string().min(1).max(256).openapi('TagValue')

const InvalidRequestExceptionSchema = z.any().openapi('InvalidRequestException')

const InternalFailureExceptionSchema = z.any().openapi('InternalFailureException')

const ThrottlingExceptionSchema = z.any().openapi('ThrottlingException')

const LimitExceededExceptionSchema = z.any().openapi('LimitExceededException')

const DeleteApplicationResponseSchema = z.object({}).openapi('DeleteApplicationResponse')

const ResourceNotFoundExceptionSchema = z.any().openapi('ResourceNotFoundException')

const NameSchema = z
  .string()
  .regex(/^[ -~]*$/)
  .min(1)
  .max(100)
  .openapi('Name')

const DescriptionSchema = z
  .string()
  .regex(/^[ -~]*$/)
  .min(1)
  .max(2048)
  .openapi('Description')

const UrlSchema = z
  .string()
  .regex(/^https\:\/\/\S+$/)
  .min(1)
  .max(256)
  .openapi('Url')

const ApplicationStateSchema = z
  .enum(['CREATING', 'DELETING', 'ACTIVE', 'CREATE_FAILED', 'DELETE_FAILED'])
  .openapi('ApplicationState')

const TimestampSchema = z.int().openapi('Timestamp')

const SsoClientIdSchema = z.string().openapi('SsoClientId')

const ErrorMessageSchema = z.string().openapi('ErrorMessage')

const TagMapSchema = z
  .record(z.string(), TagValueSchema)
  .refine((val) => Object.keys(val).length >= 1)
  .refine((val) => Object.keys(val).length <= 50)
  .openapi('TagMap')

const DescribeApplicationResponseSchema = z
  .object({
    applicationId: IdSchema.and(
      z.any().openapi({ description: 'The unique Id of the web application.' }),
    ),
    applicationArn: ArnSchema.and(
      z.any().openapi({ description: 'The ARN of the web application.' }),
    ),
    applicationName: NameSchema.and(
      z.any().openapi({ description: 'The name of the web application.' }),
    ),
    applicationDescription: DescriptionSchema.and(
      z.any().openapi({ description: 'An optional description of the web application.' }),
    ).exactOptional(),
    applicationUrl: UrlSchema.and(
      z.any().openapi({ description: 'The URL of the web application.' }),
    ),
    applicationState: ApplicationStateSchema.and(
      z.any().openapi({ description: 'The current state of the web application.' }),
    ),
    applicationCreationDate: TimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'The date (in Unix epoch time) when the application was created.',
        }),
    ),
    applicationLastUpdateDate: TimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'The date (in Unix epoch time) when the application was last updated.',
        }),
    ),
    roleArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ARN of the role that the web application assumes when it interacts with AWS IoT Core.',
        }),
    ),
    ssoClientId: SsoClientIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Id of the single sign-on client that you use to authenticate and authorize users on the web application.',
        }),
    ).exactOptional(),
    errorMessage: ErrorMessageSchema.and(
      z
        .any()
        .openapi({
          description: 'A message indicating why the <code>DescribeApplication</code> API failed.',
        }),
    ).exactOptional(),
    tags: TagMapSchema.and(
      z
        .any()
        .openapi({
          description:
            'A set of key/value pairs that you can use to manage the web application resource.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: [
      'applicationId',
      'applicationArn',
      'applicationName',
      'applicationUrl',
      'applicationState',
      'applicationCreationDate',
      'applicationLastUpdateDate',
      'roleArn',
    ],
  })
  .openapi('DescribeApplicationResponse')

const ApplicationSummarySchema = z
  .object({
    applicationId: IdSchema.and(
      z.any().openapi({ description: 'The unique Id of the web application.' }),
    ),
    applicationName: NameSchema.and(
      z.any().openapi({ description: 'The name of the web application.' }),
    ),
    applicationDescription: DescriptionSchema.and(
      z.any().openapi({ description: 'An optional description of the web application.' }),
    ).exactOptional(),
    applicationUrl: UrlSchema.and(
      z.any().openapi({ description: 'The URL of the web application.' }),
    ),
    applicationCreationDate: TimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'The date (in Unix epoch time) when the web application was created.',
        }),
    ).exactOptional(),
    applicationLastUpdateDate: TimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'The date (in Unix epoch time) when the web application was last updated.',
        }),
    ).exactOptional(),
    applicationState: ApplicationStateSchema.and(
      z.any().openapi({ description: 'The current state of the web application.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['applicationId', 'applicationName', 'applicationUrl'],
    description:
      '<p>A summary of information about a AWS IoT Device Management web application.</p> <note> <p>Fleet Hub for AWS IoT Device Management is in public preview and is subject to change.</p> </note>',
  })
  .openapi('ApplicationSummary')

const ApplicationSummariesSchema = z.array(ApplicationSummarySchema).openapi('ApplicationSummaries')

const NextTokenSchema = z
  .string()
  .regex(/^[A-Za-z0-9+\/=]+$/)
  .min(1)
  .max(2048)
  .openapi('NextToken')

const ListApplicationsResponseSchema = z
  .object({
    applicationSummaries: ApplicationSummariesSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of objects that provide summaries of information about the web applications in the list.',
        }),
    ).exactOptional(),
    nextToken: NextTokenSchema.and(
      z.any().openapi({ description: 'A token used to get the next set of results.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListApplicationsResponse')

const ListTagsForResourceResponseSchema = z
  .object({
    tags: TagMapSchema.and(
      z.any().openapi({ description: 'The list of tags assigned to the resource.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListTagsForResourceResponse')

const TagResourceResponseSchema = z.object({}).openapi('TagResourceResponse')

const UntagResourceResponseSchema = z.object({}).openapi('UntagResourceResponse')

const TagKeySchema = z
  .string()
  .regex(/^([\p{L}\p{Z}\p{N}_.:\/=+\-@]*)$/u)
  .min(1)
  .max(128)
  .openapi('TagKey')

const UpdateApplicationResponseSchema = z.object({}).openapi('UpdateApplicationResponse')

const ConflictExceptionSchema = z.any().openapi('ConflictException')

const ClientRequestTokenSchema = z
  .string()
  .regex(/^[a-zA-Z0-9-_]+$/)
  .min(1)
  .max(64)
  .openapi('ClientRequestToken')

const CreateApplicationRequestSchema = z
  .object({
    applicationName: NameSchema.and(
      z.any().openapi({ description: 'The name of the web application.' }),
    ),
    applicationDescription: DescriptionSchema.and(
      z.any().openapi({ description: 'An optional description of the web application.' }),
    ).exactOptional(),
    clientToken: ClientRequestTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            "A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.",
        }),
    ).exactOptional(),
    roleArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The ARN of the role that the web application assumes when it interacts with AWS IoT Core.</p> <note> <p>The name of the role must be in the form <code>AWSIotFleetHub_<i>random_string</i> </code>.</p> </note>',
        }),
    ),
    tags: TagMapSchema.and(
      z
        .any()
        .openapi({
          description:
            'A set of key/value pairs that you can use to manage the web application resource.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['applicationName', 'roleArn'], title: 'CreateApplicationRequest' })
  .openapi('CreateApplicationRequest')

const DeleteApplicationRequestSchema = z
  .object({})
  .openapi({ title: 'DeleteApplicationRequest' })
  .openapi('DeleteApplicationRequest')

const DescribeApplicationRequestSchema = z
  .object({})
  .openapi({ title: 'DescribeApplicationRequest' })
  .openapi('DescribeApplicationRequest')

const ListApplicationsRequestSchema = z
  .object({})
  .openapi({ title: 'ListApplicationsRequest' })
  .openapi('ListApplicationsRequest')

const ResourceArnSchema = z.string().openapi('ResourceArn')

const ListTagsForResourceRequestSchema = z
  .object({})
  .openapi({ title: 'ListTagsForResourceRequest' })
  .openapi('ListTagsForResourceRequest')

const TagKeyListSchema = z.array(TagKeySchema).openapi('TagKeyList')

const TagResourceRequestSchema = z
  .object({
    tags: TagMapSchema.and(
      z.any().openapi({ description: 'The new or modified tags for the resource.' }),
    ),
  })
  .openapi({ required: ['tags'], title: 'TagResourceRequest' })
  .openapi('TagResourceRequest')

const UntagResourceRequestSchema = z
  .object({})
  .openapi({ title: 'UntagResourceRequest' })
  .openapi('UntagResourceRequest')

const UpdateApplicationRequestSchema = z
  .object({
    applicationName: NameSchema.and(
      z.any().openapi({ description: 'The name of the web application.' }),
    ).exactOptional(),
    applicationDescription: DescriptionSchema.and(
      z.any().openapi({ description: 'An optional description of the web application.' }),
    ).exactOptional(),
    clientToken: ClientRequestTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            "A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.",
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'UpdateApplicationRequest', required: [] })
  .openapi('UpdateApplicationRequest')

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

export const getApplicationsRoute = createRoute({
  method: 'get',
  path: '/applications',
  description:
    '<p>Gets a list of Fleet Hub for AWS IoT Device Management web applications for the current account.</p> <note> <p>Fleet Hub for AWS IoT Device Management is in public preview and is subject to change.</p> </note>',
  operationId: 'ListApplications',
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
      nextToken: z
        .string()
        .regex(/^[A-Za-z0-9+\/=]+$/)
        .min(1)
        .max(2048)
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            required: false,
            description: 'A token used to get the next set of results.',
            schema: { type: 'string', pattern: '^[A-Za-z0-9+/=]+$', minLength: 1, maxLength: 2048 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListApplicationsResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const postApplicationsRoute = createRoute({
  method: 'post',
  path: '/applications',
  description:
    '<p>Creates a Fleet Hub for AWS IoT Device Management web application.</p> <note> <p>Fleet Hub for AWS IoT Device Management is in public preview and is subject to change.</p> </note>',
  operationId: 'CreateApplication',
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
              applicationName: z
                .string()
                .regex(/^[ -~]*$/)
                .min(1)
                .max(100)
                .openapi({ description: 'The name of the web application.' }),
              applicationDescription: z
                .string()
                .regex(/^[ -~]*$/)
                .min(1)
                .max(2048)
                .exactOptional()
                .openapi({ description: 'An optional description of the web application.' }),
              clientToken: z
                .string()
                .regex(/^[a-zA-Z0-9-_]+$/)
                .min(1)
                .max(64)
                .exactOptional()
                .openapi({
                  description:
                    "A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.",
                }),
              roleArn: z
                .string()
                .regex(/^arn:[!-~]+$/)
                .min(1)
                .max(1600)
                .openapi({
                  description:
                    '<p>The ARN of the role that the web application assumes when it interacts with AWS IoT Core.</p> <note> <p>The name of the role must be in the form <code>AWSIotFleetHub_<i>random_string</i> </code>.</p> </note>',
                }),
              tags: z
                .record(z.string(), TagValueSchema)
                .refine((val) => Object.keys(val).length >= 1)
                .refine((val) => Object.keys(val).length <= 50)
                .exactOptional()
                .openapi({
                  description:
                    'A set of key/value pairs that you can use to manage the web application resource.',
                }),
            })
            .openapi({ required: ['applicationName', 'roleArn'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Success',
      content: { 'application/json': { schema: CreateApplicationResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
  },
})

export const getApplicationsApplicationIdRoute = createRoute({
  method: 'get',
  path: '/applications/{applicationId}',
  description:
    '<p>Gets information about a Fleet Hub for AWS IoT Device Management web application.</p> <note> <p>Fleet Hub for AWS IoT Device Management is in public preview and is subject to change.</p> </note>',
  operationId: 'DescribeApplication',
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
      applicationId: z
        .string()
        .regex(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/)
        .length(36)
        .openapi({
          param: {
            name: 'applicationId',
            in: 'path',
            required: true,
            description: 'The unique Id of the web application.',
            schema: {
              type: 'string',
              pattern: '^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$',
              minLength: 36,
              maxLength: 36,
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeApplicationResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const deleteApplicationsApplicationIdRoute = createRoute({
  method: 'delete',
  path: '/applications/{applicationId}',
  description:
    '<p>Deletes a Fleet Hub for AWS IoT Device Management web application.</p> <note> <p>Fleet Hub for AWS IoT Device Management is in public preview and is subject to change.</p> </note>',
  operationId: 'DeleteApplication',
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
      applicationId: z
        .string()
        .regex(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/)
        .length(36)
        .openapi({
          param: {
            name: 'applicationId',
            in: 'path',
            required: true,
            description: 'The unique Id of the web application.',
            schema: {
              type: 'string',
              pattern: '^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$',
              minLength: 36,
              maxLength: 36,
            },
          },
        }),
    }),
    query: z.object({
      clientToken: z
        .string()
        .regex(/^[a-zA-Z0-9-_]+$/)
        .min(1)
        .max(64)
        .exactOptional()
        .openapi({
          param: {
            name: 'clientToken',
            in: 'query',
            required: false,
            description:
              "A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.",
            schema: { type: 'string', pattern: '^[a-zA-Z0-9-_]+$', minLength: 1, maxLength: 64 },
          },
        }),
    }),
  },
  responses: {
    204: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteApplicationResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const patchApplicationsApplicationIdRoute = createRoute({
  method: 'patch',
  path: '/applications/{applicationId}',
  description:
    '<p>Updates information about a Fleet Hub for a AWS IoT Device Management web application.</p> <note> <p>Fleet Hub for AWS IoT Device Management is in public preview and is subject to change.</p> </note>',
  operationId: 'UpdateApplication',
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
      applicationId: z
        .string()
        .regex(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/)
        .length(36)
        .openapi({
          param: {
            name: 'applicationId',
            in: 'path',
            required: true,
            description: 'The unique Id of the web application.',
            schema: {
              type: 'string',
              pattern: '^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$',
              minLength: 36,
              maxLength: 36,
            },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              applicationName: z
                .string()
                .regex(/^[ -~]*$/)
                .min(1)
                .max(100)
                .exactOptional()
                .openapi({ description: 'The name of the web application.' }),
              applicationDescription: z
                .string()
                .regex(/^[ -~]*$/)
                .min(1)
                .max(2048)
                .exactOptional()
                .openapi({ description: 'An optional description of the web application.' }),
              clientToken: z
                .string()
                .regex(/^[a-zA-Z0-9-_]+$/)
                .min(1)
                .max(64)
                .exactOptional()
                .openapi({
                  description:
                    "A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.",
                }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    202: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateApplicationResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
    483: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const getTagsResourceArnRoute = createRoute({
  method: 'get',
  path: '/tags/{resourceArn}',
  description:
    '<p>Lists the tags for the specified resource.</p> <note> <p>Fleet Hub for AWS IoT Device Management is in public preview and is subject to change.</p> </note>',
  operationId: 'ListTagsForResource',
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
      resourceArn: z
        .string()
        .openapi({
          param: {
            name: 'resourceArn',
            in: 'path',
            required: true,
            description: 'The ARN of the resource.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListTagsForResourceResponseSchema } },
    },
    480: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
    481: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postTagsResourceArnRoute = createRoute({
  method: 'post',
  path: '/tags/{resourceArn}',
  description:
    '<p>Adds to or modifies the tags of the specified resource. Tags are metadata which can be used to manage a resource.</p> <note> <p>Fleet Hub for AWS IoT Device Management is in public preview and is subject to change.</p> </note>',
  operationId: 'TagResource',
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
      resourceArn: z
        .string()
        .openapi({
          param: {
            name: 'resourceArn',
            in: 'path',
            required: true,
            description: 'The ARN of the resource.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              tags: z
                .record(z.string(), TagValueSchema)
                .refine((val) => Object.keys(val).length >= 1)
                .refine((val) => Object.keys(val).length <= 50)
                .openapi({ description: 'The new or modified tags for the resource.' }),
            })
            .openapi({ required: ['tags'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: TagResourceResponseSchema } },
    },
    480: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
    481: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const deleteTagsResourceArnTagKeysRoute = createRoute({
  method: 'delete',
  path: '/tags/{resourceArn}#tagKeys',
  description:
    '<p>Removes the specified tags (metadata) from the resource.</p> <note> <p>Fleet Hub for AWS IoT Device Management is in public preview and is subject to change.</p> </note>',
  operationId: 'UntagResource',
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
      resourceArn: z
        .string()
        .openapi({
          param: {
            name: 'resourceArn',
            in: 'path',
            required: true,
            description: 'The ARN of the resource.',
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      tagKeys: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(TagKeySchema),
        )
        .openapi({
          param: {
            name: 'tagKeys',
            in: 'query',
            required: true,
            description: 'A list of the keys of the tags to be removed from the resource.',
            schema: { type: 'array', items: { $ref: '#/components/schemas/TagKey' } },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UntagResourceResponseSchema } },
    },
    480: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
    481: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})
