import { createRoute, z } from '@hono/zod-openapi'

const DeleteHumanLoopResponseSchema = z.object({}).openapi('DeleteHumanLoopResponse')

const ValidationExceptionSchema = z.any().openapi('ValidationException')

const ResourceNotFoundExceptionSchema = z.any().openapi('ResourceNotFoundException')

const ThrottlingExceptionSchema = z.any().openapi('ThrottlingException')

const InternalServerExceptionSchema = z.any().openapi('InternalServerException')

const TimestampSchema = z.iso.datetime({ offset: true }).openapi('Timestamp')

const StringSchema = z.string().openapi('String')

const HumanLoopStatusSchema = z
  .enum(['InProgress', 'Failed', 'Completed', 'Stopped', 'Stopping'])
  .openapi('HumanLoopStatus')

const HumanLoopNameSchema = z
  .string()
  .regex(/^[a-z0-9](-*[a-z0-9])*$/)
  .min(1)
  .max(63)
  .openapi('HumanLoopName')

const HumanLoopArnSchema = z
  .string()
  .regex(/arn:aws[a-z\-]*:sagemaker:[a-z0-9\-]*:[0-9]{12}:human-loop\/.*/)
  .max(1024)
  .openapi('HumanLoopArn')

const FlowDefinitionArnSchema = z
  .string()
  .regex(/arn:aws[a-z\-]*:sagemaker:[a-z0-9\-]*:[0-9]{12}:flow-definition\/.*/)
  .max(1024)
  .openapi('FlowDefinitionArn')

const HumanLoopOutputSchema = z
  .object({
    OutputS3Uri: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The location of the Amazon S3 object where Amazon Augmented AI stores your human loop output.',
        }),
    ),
  })
  .openapi({
    required: ['OutputS3Uri'],
    description: 'Information about where the human output will be stored.',
  })
  .openapi('HumanLoopOutput')

const DescribeHumanLoopResponseSchema = z
  .object({
    CreationTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'The creation time when Amazon Augmented AI created the human loop.',
        }),
    ),
    FailureReason: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The reason why a human loop failed. The failure reason is returned when the status of the human loop is <code>Failed</code>.',
        }),
    ).exactOptional(),
    FailureCode: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A failure code that identifies the type of failure.</p> <p>Possible values: <code>ValidationError</code>, <code>Expired</code>, <code>InternalError</code> </p>',
        }),
    ).exactOptional(),
    HumanLoopStatus: HumanLoopStatusSchema.and(
      z.any().openapi({ description: 'The status of the human loop. ' }),
    ),
    HumanLoopName: HumanLoopNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the human loop. The name must be lowercase, unique within the Region in your account, and can have up to 63 characters. Valid characters: a-z, 0-9, and - (hyphen).',
        }),
    ),
    HumanLoopArn: HumanLoopArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the human loop.' }),
    ),
    FlowDefinitionArn: FlowDefinitionArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the flow definition.' }),
    ),
    HumanLoopOutput: HumanLoopOutputSchema.and(
      z
        .any()
        .openapi({
          description: 'An object that contains information about the output of the human loop.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: [
      'CreationTime',
      'HumanLoopStatus',
      'HumanLoopName',
      'HumanLoopArn',
      'FlowDefinitionArn',
    ],
  })
  .openapi('DescribeHumanLoopResponse')

const FailureReasonSchema = z.string().max(1024).openapi('FailureReason')

const HumanLoopSummarySchema = z
  .object({
    HumanLoopName: HumanLoopNameSchema.and(
      z.any().openapi({ description: 'The name of the human loop.' }),
    ).exactOptional(),
    HumanLoopStatus: HumanLoopStatusSchema.and(
      z.any().openapi({ description: 'The status of the human loop. ' }),
    ).exactOptional(),
    CreationTime: TimestampSchema.and(
      z.any().openapi({ description: 'When Amazon Augmented AI created the human loop.' }),
    ).exactOptional(),
    FailureReason: FailureReasonSchema.and(
      z
        .any()
        .openapi({
          description:
            'The reason why the human loop failed. A failure reason is returned when the status of the human loop is <code>Failed</code>.',
        }),
    ).exactOptional(),
    FlowDefinitionArn: FlowDefinitionArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the flow definition used to configure the human loop.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Summary information about the human loop.', required: [] })
  .openapi('HumanLoopSummary')

const HumanLoopSummariesSchema = z.array(HumanLoopSummarySchema).openapi('HumanLoopSummaries')

const NextTokenSchema = z.string().regex(/.*/).max(8192).openapi('NextToken')

const ListHumanLoopsResponseSchema = z
  .object({
    HumanLoopSummaries: HumanLoopSummariesSchema.and(
      z
        .any()
        .openapi({
          description: 'An array of objects that contain information about the human loops.',
        }),
    ),
    NextToken: NextTokenSchema.and(
      z.any().openapi({ description: 'A token to display the next page of results.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['HumanLoopSummaries'] })
  .openapi('ListHumanLoopsResponse')

const StartHumanLoopResponseSchema = z
  .object({
    HumanLoopArn: HumanLoopArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the human loop.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('StartHumanLoopResponse')

const InputContentSchema = z.string().max(3145728).openapi('InputContent')

const ContentClassifierSchema = z
  .enum(['FreeOfPersonallyIdentifiableInformation', 'FreeOfAdultContent'])
  .openapi('ContentClassifier')

const ContentClassifiersSchema = z
  .array(ContentClassifierSchema)
  .max(256)
  .openapi('ContentClassifiers')

const ServiceQuotaExceededExceptionSchema = z.any().openapi('ServiceQuotaExceededException')

const ConflictExceptionSchema = z.any().openapi('ConflictException')

const StopHumanLoopResponseSchema = z.object({}).openapi('StopHumanLoopResponse')

const DeleteHumanLoopRequestSchema = z
  .object({})
  .openapi({ title: 'DeleteHumanLoopRequest' })
  .openapi('DeleteHumanLoopRequest')

const DescribeHumanLoopRequestSchema = z
  .object({})
  .openapi({ title: 'DescribeHumanLoopRequest' })
  .openapi('DescribeHumanLoopRequest')

const HumanLoopDataAttributesSchema = z
  .object({
    ContentClassifiers: ContentClassifiersSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Declares that your content is free of personally identifiable information or adult content.</p> <p>Amazon SageMaker can restrict the Amazon Mechanical Turk workers who can view your task based on this information.</p>',
        }),
    ),
  })
  .openapi({
    required: ['ContentClassifiers'],
    description:
      'Attributes of the data specified by the customer. Use these to describe the data to be labeled.',
  })
  .openapi('HumanLoopDataAttributes')

const HumanLoopInputSchema = z
  .object({
    InputContent: InputContentSchema.and(
      z
        .any()
        .openapi({
          description:
            'Serialized input from the human loop. The input must be a string representation of a file in JSON format.',
        }),
    ),
  })
  .openapi({
    required: ['InputContent'],
    description: 'An object containing the human loop input in JSON format.',
  })
  .openapi('HumanLoopInput')

const SortOrderSchema = z.enum(['Ascending', 'Descending']).openapi('SortOrder')

const MaxResultsSchema = z.int().min(1).max(100).openapi('MaxResults')

const ListHumanLoopsRequestSchema = z
  .object({})
  .openapi({ title: 'ListHumanLoopsRequest' })
  .openapi('ListHumanLoopsRequest')

const StartHumanLoopRequestSchema = z
  .object({
    HumanLoopName: HumanLoopNameSchema.and(
      z.any().openapi({ description: 'The name of the human loop.' }),
    ),
    FlowDefinitionArn: FlowDefinitionArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the flow definition associated with this human loop.',
        }),
    ),
    HumanLoopInput: HumanLoopInputSchema.and(
      z.any().openapi({ description: 'An object that contains information about the human loop.' }),
    ),
    DataAttributes: HumanLoopDataAttributesSchema.and(
      z
        .any()
        .openapi({
          description:
            'Attributes of the specified data. Use <code>DataAttributes</code> to specify if your data is free of personally identifiable information and/or free of adult content.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['HumanLoopName', 'FlowDefinitionArn', 'HumanLoopInput'],
    title: 'StartHumanLoopRequest',
  })
  .openapi('StartHumanLoopRequest')

const StopHumanLoopRequestSchema = z
  .object({
    HumanLoopName: HumanLoopNameSchema.and(
      z.any().openapi({ description: 'The name of the human loop that you want to stop.' }),
    ),
  })
  .openapi({ required: ['HumanLoopName'], title: 'StopHumanLoopRequest' })
  .openapi('StopHumanLoopRequest')

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

export const getHumanLoopsHumanLoopNameRoute = createRoute({
  method: 'get',
  path: '/human-loops/{HumanLoopName}',
  description:
    'Returns information about the specified human loop. If the human loop was deleted, this operation will return a <code>ResourceNotFoundException</code> error. ',
  operationId: 'DescribeHumanLoop',
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
      HumanLoopName: z
        .string()
        .regex(/^[a-z0-9](-*[a-z0-9])*$/)
        .min(1)
        .max(63)
        .openapi({
          param: {
            name: 'HumanLoopName',
            in: 'path',
            required: true,
            description: 'The name of the human loop that you want information about.',
            schema: {
              type: 'string',
              pattern: '^[a-z0-9](-*[a-z0-9])*$',
              minLength: 1,
              maxLength: 63,
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeHumanLoopResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const deleteHumanLoopsHumanLoopNameRoute = createRoute({
  method: 'delete',
  path: '/human-loops/{HumanLoopName}',
  description:
    '<p>Deletes the specified human loop for a flow definition.</p> <p>If the human loop was deleted, this operation will return a <code>ResourceNotFoundException</code>. </p>',
  operationId: 'DeleteHumanLoop',
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
      HumanLoopName: z
        .string()
        .regex(/^[a-z0-9](-*[a-z0-9])*$/)
        .min(1)
        .max(63)
        .openapi({
          param: {
            name: 'HumanLoopName',
            in: 'path',
            required: true,
            description: 'The name of the human loop that you want to delete.',
            schema: {
              type: 'string',
              pattern: '^[a-z0-9](-*[a-z0-9])*$',
              minLength: 1,
              maxLength: 63,
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteHumanLoopResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const getHumanLoopsFlowDefinitionArnRoute = createRoute({
  method: 'get',
  path: '/human-loops#FlowDefinitionArn',
  description:
    'Returns information about human loops, given the specified parameters. If a human loop was deleted, it will not be included.',
  operationId: 'ListHumanLoops',
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
      CreationTimeAfter: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            name: 'CreationTimeAfter',
            in: 'query',
            required: false,
            description:
              '(Optional) The timestamp of the date when you want the human loops to begin in ISO 8601 format. For example, <code>2020-02-24</code>.',
            schema: { type: 'string', format: 'date-time' },
          },
        }),
      CreationTimeBefore: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            name: 'CreationTimeBefore',
            in: 'query',
            required: false,
            description:
              '(Optional) The timestamp of the date before which you want the human loops to begin in ISO 8601 format. For example, <code>2020-02-24</code>.',
            schema: { type: 'string', format: 'date-time' },
          },
        }),
      FlowDefinitionArn: z
        .string()
        .regex(/arn:aws[a-z\-]*:sagemaker:[a-z0-9\-]*:[0-9]{12}:flow-definition\/.*/)
        .max(1024)
        .openapi({
          param: {
            name: 'FlowDefinitionArn',
            in: 'query',
            required: true,
            description: 'The Amazon Resource Name (ARN) of a flow definition.',
            schema: {
              type: 'string',
              pattern: 'arn:aws[a-z\\-]*:sagemaker:[a-z0-9\\-]*:[0-9]{12}:flow-definition/.*',
              maxLength: 1024,
            },
          },
        }),
      SortOrder: z
        .enum(['Ascending', 'Descending'])
        .exactOptional()
        .openapi({
          param: {
            name: 'SortOrder',
            in: 'query',
            required: false,
            description:
              'Optional. The order for displaying results. Valid values: <code>Ascending</code> and <code>Descending</code>.',
            schema: { type: 'string', enum: ['Ascending', 'Descending'] },
          },
        }),
      NextToken: z
        .string()
        .regex(/.*/)
        .max(8192)
        .exactOptional()
        .openapi({
          param: {
            name: 'NextToken',
            in: 'query',
            required: false,
            description: 'A token to display the next page of results.',
            schema: { type: 'string', pattern: '.*', maxLength: 8192 },
          },
        }),
      MaxResults: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(100),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxResults',
            in: 'query',
            required: false,
            description:
              'The total number of items to return. If the total number of available items is more than the value specified in <code>MaxResults</code>, then a <code>NextToken</code> is returned in the output. You can use this token to display the next page of results. ',
            schema: { type: 'integer', minimum: 1, maximum: 100 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListHumanLoopsResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postHumanLoopsRoute = createRoute({
  method: 'post',
  path: '/human-loops',
  description: 'Starts a human loop, provided that at least one activation condition is met.',
  operationId: 'StartHumanLoop',
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
              HumanLoopName: z
                .string()
                .regex(/^[a-z0-9](-*[a-z0-9])*$/)
                .min(1)
                .max(63)
                .openapi({ description: 'The name of the human loop.' }),
              FlowDefinitionArn: z
                .string()
                .regex(/arn:aws[a-z\-]*:sagemaker:[a-z0-9\-]*:[0-9]{12}:flow-definition\/.*/)
                .max(1024)
                .openapi({
                  description:
                    'The Amazon Resource Name (ARN) of the flow definition associated with this human loop.',
                }),
              HumanLoopInput: z
                .object({
                  InputContent: InputContentSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'Serialized input from the human loop. The input must be a string representation of a file in JSON format.',
                      }),
                  ).exactOptional(),
                })
                .openapi({
                  description: 'An object containing the human loop input in JSON format.',
                  required: [],
                }),
              DataAttributes: z
                .object({
                  ContentClassifiers: ContentClassifiersSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          '<p>Declares that your content is free of personally identifiable information or adult content.</p> <p>Amazon SageMaker can restrict the Amazon Mechanical Turk workers who can view your task based on this information.</p>',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    'Attributes of the data specified by the customer. Use these to describe the data to be labeled.',
                  required: [],
                }),
            })
            .openapi({ required: ['HumanLoopName', 'FlowDefinitionArn', 'HumanLoopInput'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: StartHumanLoopResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    482: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
    483: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    484: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})

export const postHumanLoopsStopRoute = createRoute({
  method: 'post',
  path: '/human-loops/stop',
  description: 'Stops the specified human loop.',
  operationId: 'StopHumanLoop',
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
              HumanLoopName: z
                .string()
                .regex(/^[a-z0-9](-*[a-z0-9])*$/)
                .min(1)
                .max(63)
                .openapi({ description: 'The name of the human loop that you want to stop.' }),
            })
            .openapi({ required: ['HumanLoopName'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: StopHumanLoopResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})
