import { createRoute, z } from '@hono/zod-openapi'

const ControlIdSchema = z
  .string()
  .regex(/^hrc-[a-z0-9]{12}$/)
  .min(1)
  .max(50)
  .openapi('ControlId')

const HomeRegionSchema = z
  .string()
  .regex(/^([a-z]+)-([a-z]+)-([0-9]+)$/)
  .min(1)
  .max(50)
  .openapi('HomeRegion')

const TargetTypeSchema = z.literal('ACCOUNT').openapi('TargetType')

const TargetIdSchema = z
  .string()
  .regex(/^\d{12}$/)
  .length(12)
  .openapi('TargetId')

const TargetSchema = z
  .object({
    Type: TargetTypeSchema.and(
      z.any().openapi({ description: 'The target type is always an <code>ACCOUNT</code>.' }),
    ),
    Id: TargetIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <code>TargetID</code> is a 12-character identifier of the <code>ACCOUNT</code> for which the control was created. (This must be the current account.) ',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Type'],
    description:
      'The target parameter specifies the identifier to which the home region is applied, which is always an <code>ACCOUNT</code>. It applies the home region to the current <code>ACCOUNT</code>.',
  })
  .openapi('Target')

const RequestedTimeSchema = z.iso.datetime({ offset: true }).openapi('RequestedTime')

const HomeRegionControlSchema = z
  .object({
    ControlId: ControlIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique identifier that\'s generated for each home region control. It\'s always a string that begins with "hrc-" followed by 12 lowercase letters and numbers.',
        }),
    ).exactOptional(),
    HomeRegion: HomeRegionSchema.and(
      z
        .any()
        .openapi({
          description:
            'The AWS Region that\'s been set as home region. For example, "us-west-2" or "eu-central-1" are valid home regions.',
        }),
    ).exactOptional(),
    Target: TargetSchema.and(
      z
        .any()
        .openapi({
          description:
            'The target parameter specifies the identifier to which the home region is applied, which is always an <code>ACCOUNT</code>. It applies the home region to the current <code>ACCOUNT</code>.',
        }),
    ).exactOptional(),
    RequestedTime: RequestedTimeSchema.and(
      z
        .any()
        .openapi({
          description:
            'A timestamp representing the time when the customer called <code>CreateHomeregionControl</code> and set the home region for the account.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'A home region control is an object that specifies the home region for an account, with some additional information. It contains a target (always of type <code>ACCOUNT</code>), an ID, and a time at which the home region was set.',
    required: [],
  })
  .openapi('HomeRegionControl')

const CreateHomeRegionControlResultSchema = z
  .object({
    HomeRegionControl: HomeRegionControlSchema.and(
      z
        .any()
        .openapi({
          description:
            "This object is the <code>HomeRegionControl</code> object that's returned by a successful call to <code>CreateHomeRegionControl</code>.",
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateHomeRegionControlResult')

const DryRunSchema = z.boolean().openapi('DryRun')

const CreateHomeRegionControlRequestSchema = z
  .object({
    HomeRegion: HomeRegionSchema.and(
      z.any().openapi({ description: 'The name of the home region of the calling account.' }),
    ),
    Target: TargetSchema.and(
      z
        .any()
        .openapi({
          description:
            'The account for which this command sets up a home region control. The <code>Target</code> is always of type <code>ACCOUNT</code>.',
        }),
    ),
    DryRun: DryRunSchema.and(
      z
        .any()
        .openapi({
          description:
            'Optional Boolean flag to indicate whether any effect should take place. It tests whether the caller has permission to make the call.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['HomeRegion', 'Target'], title: 'CreateHomeRegionControlRequest' })
  .openapi('CreateHomeRegionControlRequest')

const InternalServerErrorSchema = z.any().openapi('InternalServerError')

const ServiceUnavailableExceptionSchema = z.any().openapi('ServiceUnavailableException')

const AccessDeniedExceptionSchema = z.any().openapi('AccessDeniedException')

const ThrottlingExceptionSchema = z.any().openapi('ThrottlingException')

const DryRunOperationSchema = z.any().openapi('DryRunOperation')

const InvalidInputExceptionSchema = z.any().openapi('InvalidInputException')

const HomeRegionControlsSchema = z
  .array(HomeRegionControlSchema)
  .max(100)
  .openapi('HomeRegionControls')

const TokenSchema = z
  .string()
  .regex(/^[a-zA-Z0-9\/\+\=]{0,2048}$/)
  .min(0)
  .max(2048)
  .openapi('Token')

const DescribeHomeRegionControlsResultSchema = z
  .object({
    HomeRegionControls: HomeRegionControlsSchema.and(
      z
        .any()
        .openapi({
          description: 'An array that contains your <code>HomeRegionControl</code> objects.',
        }),
    ).exactOptional(),
    NextToken: TokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If a <code>NextToken</code> was returned by a previous call, more results are available. To retrieve the next page of results, make the call again using the returned token in <code>NextToken</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeHomeRegionControlsResult')

const DescribeHomeRegionControlsMaxResultsSchema = z
  .int()
  .min(1)
  .max(100)
  .openapi('DescribeHomeRegionControlsMaxResults')

const DescribeHomeRegionControlsRequestSchema = z
  .object({
    ControlId: ControlIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <code>ControlID</code> is a unique identifier string of your <code>HomeRegionControl</code> object.',
        }),
    ).exactOptional(),
    HomeRegion: HomeRegionSchema.and(
      z.any().openapi({ description: "The name of the home region you'd like to view." }),
    ).exactOptional(),
    Target: TargetSchema.and(
      z
        .any()
        .openapi({
          description:
            'The target parameter specifies the identifier to which the home region is applied, which is always of type <code>ACCOUNT</code>. It applies the home region to the current <code>ACCOUNT</code>.',
        }),
    ).exactOptional(),
    MaxResults: DescribeHomeRegionControlsMaxResultsSchema.and(
      z
        .any()
        .openapi({ description: 'The maximum number of filtering results to display per page. ' }),
    ).exactOptional(),
    NextToken: TokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If a <code>NextToken</code> was returned by a previous call, more results are available. To retrieve the next page of results, make the call again using the returned token in <code>NextToken</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'DescribeHomeRegionControlsRequest', required: [] })
  .openapi('DescribeHomeRegionControlsRequest')

const GetHomeRegionResultSchema = z
  .object({
    HomeRegion: HomeRegionSchema.and(
      z.any().openapi({ description: 'The name of the home region of the calling account.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetHomeRegionResult')

const GetHomeRegionRequestSchema = z
  .object({})
  .openapi({ title: 'GetHomeRegionRequest' })
  .openapi('GetHomeRegionRequest')

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

export const postXAmzTargetAWSMigrationHubMultiAccountServiceCreateHomeRegionControlRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=AWSMigrationHubMultiAccountService.CreateHomeRegionControl',
    description: 'This API sets up the home region for the calling account only.',
    operationId: 'CreateHomeRegionControl',
    request: {
      headers: z.object({
        'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
        'X-Amz-Date': XAmzDateParamsSchema,
        'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
        'X-Amz-Credential': XAmzCredentialParamsSchema,
        'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
        'X-Amz-Signature': XAmzSignatureParamsSchema,
        'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
        'X-Amz-Target': z
          .literal('AWSMigrationHubMultiAccountService.CreateHomeRegionControl')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['AWSMigrationHubMultiAccountService.CreateHomeRegionControl'],
              },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: CreateHomeRegionControlRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: CreateHomeRegionControlResultSchema } },
      },
      480: {
        description: 'InternalServerError',
        content: { 'application/json': { schema: InternalServerErrorSchema } },
      },
      481: {
        description: 'ServiceUnavailableException',
        content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
      },
      482: {
        description: 'AccessDeniedException',
        content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
      },
      483: {
        description: 'ThrottlingException',
        content: { 'application/json': { schema: ThrottlingExceptionSchema } },
      },
      484: {
        description: 'DryRunOperation',
        content: { 'application/json': { schema: DryRunOperationSchema } },
      },
      485: {
        description: 'InvalidInputException',
        content: { 'application/json': { schema: InvalidInputExceptionSchema } },
      },
    },
  })

export const postXAmzTargetAWSMigrationHubMultiAccountServiceDescribeHomeRegionControlsRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=AWSMigrationHubMultiAccountService.DescribeHomeRegionControls',
    description:
      'This API permits filtering on the <code>ControlId</code> and <code>HomeRegion</code> fields.',
    operationId: 'DescribeHomeRegionControls',
    request: {
      headers: z.object({
        'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
        'X-Amz-Date': XAmzDateParamsSchema,
        'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
        'X-Amz-Credential': XAmzCredentialParamsSchema,
        'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
        'X-Amz-Signature': XAmzSignatureParamsSchema,
        'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
        'X-Amz-Target': z
          .literal('AWSMigrationHubMultiAccountService.DescribeHomeRegionControls')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['AWSMigrationHubMultiAccountService.DescribeHomeRegionControls'],
              },
            },
          }),
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
        content: { 'application/json': { schema: DescribeHomeRegionControlsRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: DescribeHomeRegionControlsResultSchema } },
      },
      480: {
        description: 'InternalServerError',
        content: { 'application/json': { schema: InternalServerErrorSchema } },
      },
      481: {
        description: 'ServiceUnavailableException',
        content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
      },
      482: {
        description: 'AccessDeniedException',
        content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
      },
      483: {
        description: 'ThrottlingException',
        content: { 'application/json': { schema: ThrottlingExceptionSchema } },
      },
      484: {
        description: 'InvalidInputException',
        content: { 'application/json': { schema: InvalidInputExceptionSchema } },
      },
    },
  })

export const postXAmzTargetAWSMigrationHubMultiAccountServiceGetHomeRegionRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSMigrationHubMultiAccountService.GetHomeRegion',
  description:
    "Returns the calling account’s home region, if configured. This API is used by other AWS services to determine the regional endpoint for calling AWS Application Discovery Service and Migration Hub. You must call <code>GetHomeRegion</code> at least once before you call any other AWS Application Discovery Service and AWS Migration Hub APIs, to obtain the account's Migration Hub home region.",
  operationId: 'GetHomeRegion',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWSMigrationHubMultiAccountService.GetHomeRegion')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSMigrationHubMultiAccountService.GetHomeRegion'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetHomeRegionRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetHomeRegionResultSchema } },
    },
    480: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
    481: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
  },
})
