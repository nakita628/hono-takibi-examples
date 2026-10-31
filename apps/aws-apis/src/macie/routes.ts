import { createRoute, z } from '@hono/zod-openapi'

const S3OneTimeClassificationTypeSchema = z
  .enum(['FULL', 'NONE'])
  .openapi('S3OneTimeClassificationType')

const S3ContinuousClassificationTypeSchema = z
  .literal('FULL')
  .openapi('S3ContinuousClassificationType')

type ClassificationTypeType = {
  oneTime: z.infer<typeof S3OneTimeClassificationTypeSchema> & { [key: string]: unknown }
  continuous: z.infer<typeof S3ContinuousClassificationTypeSchema> & { [key: string]: unknown }
}

const AWSAccountIdSchema = z
  .string()
  .regex(/[0-9]{12}/)
  .openapi('AWSAccountId')

const AssociateMemberAccountRequestSchema = z
  .object({
    memberAccountId: AWSAccountIdSchema.and(
      z
        .any()
        .openapi({
          description:
            '(Discontinued) The ID of the Amazon Web Services account that you want to associate with Amazon Macie Classic as a member account.',
        }),
    ),
  })
  .openapi({ required: ['memberAccountId'], title: 'AssociateMemberAccountRequest' })
  .openapi('AssociateMemberAccountRequest')

const InvalidInputExceptionSchema = z.any().openapi('InvalidInputException')

const LimitExceededExceptionSchema = z.any().openapi('LimitExceededException')

const InternalExceptionSchema = z.any().openapi('InternalException')

const BucketNameSchema = z.string().max(500).openapi('BucketName')

const PrefixSchema = z.string().max(10000).openapi('Prefix')

const S3ResourceSchema = z
  .object({
    bucketName: BucketNameSchema.and(
      z.any().openapi({ description: '(Discontinued) The name of the S3 bucket.' }),
    ),
    prefix: PrefixSchema.and(
      z.any().openapi({ description: '(Discontinued) The prefix of the S3 bucket.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['bucketName'],
    description:
      '(Discontinued) Contains information about the S3 resource. This data type is used as a request parameter in the <code>DisassociateS3Resources</code> action and can be used as a response parameter in the <code>AssociateS3Resources</code> and <code>UpdateS3Resources</code> actions. ',
  })
  .openapi('S3Resource')

const ErrorCodeSchema = z
  .string()
  .max(10)
  .openapi({ description: 'Error code for the exception' })
  .openapi('ErrorCode')

const ExceptionMessageSchema = z.string().max(10000).openapi('ExceptionMessage')

const FailedS3ResourceSchema = z
  .object({
    failedItem: S3ResourceSchema.and(
      z.any().openapi({ description: '(Discontinued) The failed S3 resources.' }),
    ).exactOptional(),
    errorCode: ErrorCodeSchema.and(
      z.any().openapi({ description: '(Discontinued) The status code of a failed item.' }),
    ).exactOptional(),
    errorMessage: ExceptionMessageSchema.and(
      z.any().openapi({ description: '(Discontinued) The error message of a failed item.' }),
    ).exactOptional(),
  })
  .openapi({
    description: '(Discontinued) Includes details about the failed S3 resources.',
    required: [],
  })
  .openapi('FailedS3Resource')

const FailedS3ResourcesSchema = z.array(FailedS3ResourceSchema).openapi('FailedS3Resources')

const AssociateS3ResourcesResultSchema = z
  .object({
    failedS3Resources: FailedS3ResourcesSchema.and(
      z
        .any()
        .openapi({
          description:
            "(Discontinued) S3 resources that couldn't be associated with Amazon Macie Classic. An error code and an error message are provided for each failed item.",
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AssociateS3ResourcesResult')

const ClassificationTypeSchema: z.ZodType<ClassificationTypeType> = z
  .lazy(() =>
    z
      .object({
        oneTime: S3OneTimeClassificationTypeSchema.and(
          z
            .any()
            .openapi({
              description:
                '(Discontinued) A one-time classification of all of the existing objects in a specified S3 bucket. ',
            }),
        ),
        continuous: S3ContinuousClassificationTypeSchema.and(
          z
            .any()
            .openapi({
              description:
                '(Discontinued) A continuous classification of the objects that are added to a specified S3 bucket. Amazon Macie Classic begins performing continuous classification after a bucket is successfully associated with Macie Classic.',
            }),
        ),
      })
      .openapi({
        required: ['oneTime', 'continuous'],
        description:
          '(Discontinued) The classification type that Amazon Macie Classic applies to the associated S3 resources.',
      }),
  )
  .openapi('ClassificationType')

const S3ResourceClassificationSchema = z
  .object({
    bucketName: BucketNameSchema.and(
      z
        .any()
        .openapi({
          description:
            '(Discontinued) The name of the S3 bucket that you want to associate with Amazon Macie Classic.',
        }),
    ),
    prefix: PrefixSchema.and(
      z
        .any()
        .openapi({
          description:
            '(Discontinued) The prefix of the S3 bucket that you want to associate with Amazon Macie Classic.',
        }),
    ).exactOptional(),
    classificationType: ClassificationTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '(Discontinued) The classification type that you want to specify for the resource associated with Amazon Macie Classic. ',
        }),
    ),
  })
  .openapi({
    required: ['bucketName', 'classificationType'],
    description:
      '(Discontinued) The S3 resources that you want to associate with Amazon Macie Classic for monitoring and data classification. This data type is used as a request parameter in the <code>AssociateS3Resources</code> action and a response parameter in the <code>ListS3Resources</code> action. ',
  })
  .openapi('S3ResourceClassification')

const S3ResourcesClassificationSchema = z
  .array(S3ResourceClassificationSchema)
  .openapi('S3ResourcesClassification')

const AssociateS3ResourcesRequestSchema = z
  .object({
    memberAccountId: AWSAccountIdSchema.and(
      z
        .any()
        .openapi({
          description:
            '(Discontinued) The ID of the Amazon Macie Classic member account whose resources you want to associate with Macie Classic.',
        }),
    ).exactOptional(),
    s3Resources: S3ResourcesClassificationSchema.and(
      z
        .any()
        .openapi({
          description:
            '(Discontinued) The S3 resources that you want to associate with Amazon Macie Classic for monitoring and data classification.',
        }),
    ),
  })
  .openapi({ required: ['s3Resources'], title: 'AssociateS3ResourcesRequest' })
  .openapi('AssociateS3ResourcesRequest')

const AccessDeniedExceptionSchema = z.any().openapi('AccessDeniedException')

const DisassociateMemberAccountRequestSchema = z
  .object({
    memberAccountId: AWSAccountIdSchema.and(
      z
        .any()
        .openapi({
          description:
            '(Discontinued) The ID of the member account that you want to remove from Amazon Macie Classic.',
        }),
    ),
  })
  .openapi({ required: ['memberAccountId'], title: 'DisassociateMemberAccountRequest' })
  .openapi('DisassociateMemberAccountRequest')

const DisassociateS3ResourcesResultSchema = z
  .object({
    failedS3Resources: FailedS3ResourcesSchema.and(
      z
        .any()
        .openapi({
          description:
            "(Discontinued) S3 resources that couldn't be removed from being monitored and classified by Amazon Macie Classic. An error code and an error message are provided for each failed item. ",
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DisassociateS3ResourcesResult')

const S3ResourcesSchema = z.array(S3ResourceSchema).openapi('S3Resources')

const DisassociateS3ResourcesRequestSchema = z
  .object({
    memberAccountId: AWSAccountIdSchema.and(
      z
        .any()
        .openapi({
          description:
            '(Discontinued) The ID of the Amazon Macie Classic member account whose resources you want to remove from being monitored by Macie Classic.',
        }),
    ).exactOptional(),
    associatedS3Resources: S3ResourcesSchema.and(
      z
        .any()
        .openapi({
          description:
            '(Discontinued) The S3 resources (buckets or prefixes) that you want to remove from being monitored and classified by Amazon Macie Classic.',
        }),
    ),
  })
  .openapi({ required: ['associatedS3Resources'], title: 'DisassociateS3ResourcesRequest' })
  .openapi('DisassociateS3ResourcesRequest')

const MemberAccountSchema = z
  .object({
    accountId: AWSAccountIdSchema.and(
      z
        .any()
        .openapi({
          description:
            '(Discontinued) The Amazon Web Services account ID of the Amazon Macie Classic member account.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '(Discontinued) Contains information about the Amazon Macie Classic member account.',
    required: [],
  })
  .openapi('MemberAccount')

const MemberAccountsSchema = z.array(MemberAccountSchema).openapi('MemberAccounts')

const NextTokenSchema = z.string().max(500).openapi('NextToken')

const ListMemberAccountsResultSchema = z
  .object({
    memberAccounts: MemberAccountsSchema.and(
      z
        .any()
        .openapi({
          description:
            '(Discontinued) A list of the Amazon Macie Classic member accounts returned by the action. The current Macie Classic administrator account is also included in this list.',
        }),
    ).exactOptional(),
    nextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            '(Discontinued) When a response is generated, if there is more data to be listed, this parameter is present in the response and contains the value to use for the <code>nextToken</code> parameter in a subsequent pagination request. If there is no more data to be listed, this parameter is set to null. ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListMemberAccountsResult')

const MaxResultsSchema = z.int().max(250).openapi('MaxResults')

const ListMemberAccountsRequestSchema = z
  .object({
    nextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            '(Discontinued) Use this parameter when paginating results. Set the value of this parameter to null on your first call to the <code>ListMemberAccounts</code> action. Subsequent calls to the action fill <code>nextToken</code> in the request with the value of <code>nextToken</code> from the previous response to continue listing data.',
        }),
    ).exactOptional(),
    maxResults: MaxResultsSchema.and(
      z
        .any()
        .openapi({
          description:
            '(Discontinued) Use this parameter to indicate the maximum number of items that you want in the response. The default value is 250.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListMemberAccountsRequest', required: [] })
  .openapi('ListMemberAccountsRequest')

const ListS3ResourcesResultSchema = z
  .object({
    s3Resources: S3ResourcesClassificationSchema.and(
      z
        .any()
        .openapi({
          description:
            '(Discontinued) A list of the associated S3 resources returned by the action.',
        }),
    ).exactOptional(),
    nextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            '(Discontinued) When a response is generated, if there is more data to be listed, this parameter is present in the response and contains the value to use for the <code>nextToken</code> parameter in a subsequent pagination request. If there is no more data to be listed, this parameter is set to null. ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListS3ResourcesResult')

const ListS3ResourcesRequestSchema = z
  .object({
    memberAccountId: AWSAccountIdSchema.and(
      z
        .any()
        .openapi({
          description:
            '(Discontinued) The Amazon Macie Classic member account ID whose associated S3 resources you want to list. ',
        }),
    ).exactOptional(),
    nextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            '(Discontinued) Use this parameter when paginating results. Set its value to null on your first call to the <code>ListS3Resources</code> action. Subsequent calls to the action fill <code>nextToken</code> in the request with the value of <code>nextToken</code> from the previous response to continue listing data. ',
        }),
    ).exactOptional(),
    maxResults: MaxResultsSchema.and(
      z
        .any()
        .openapi({
          description:
            '(Discontinued) Use this parameter to indicate the maximum number of items that you want in the response. The default value is 250. ',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListS3ResourcesRequest', required: [] })
  .openapi('ListS3ResourcesRequest')

const UpdateS3ResourcesResultSchema = z
  .object({
    failedS3Resources: FailedS3ResourcesSchema.and(
      z
        .any()
        .openapi({
          description:
            "(Discontinued) The S3 resources whose classification types can't be updated. An error code and an error message are provided for each failed item.",
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateS3ResourcesResult')

const ClassificationTypeUpdateSchema = z
  .object({
    oneTime: S3OneTimeClassificationTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '(Discontinued) A one-time classification of all of the existing objects in a specified S3 bucket. ',
        }),
    ).exactOptional(),
    continuous: S3ContinuousClassificationTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '(Discontinued) A continuous classification of the objects that are added to a specified S3 bucket. Amazon Macie Classic begins performing continuous classification after a bucket is successfully associated with Macie Classic. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '(Discontinued) The classification type that Amazon Macie Classic applies to the associated S3 resources. At least one of the classification types (<code>oneTime</code> or <code>continuous</code>) must be specified. ',
    required: [],
  })
  .openapi('ClassificationTypeUpdate')

const S3ResourceClassificationUpdateSchema = z
  .object({
    bucketName: BucketNameSchema.and(
      z
        .any()
        .openapi({
          description:
            '(Discontinued) The name of the S3 bucket whose classification types you want to update.',
        }),
    ),
    prefix: PrefixSchema.and(
      z
        .any()
        .openapi({
          description:
            '(Discontinued) The prefix of the S3 bucket whose classification types you want to update.',
        }),
    ).exactOptional(),
    classificationTypeUpdate: ClassificationTypeUpdateSchema.and(
      z
        .any()
        .openapi({
          description:
            '(Discontinued) The classification type that you want to update for the resource associated with Amazon Macie Classic. ',
        }),
    ),
  })
  .openapi({
    required: ['bucketName', 'classificationTypeUpdate'],
    description:
      '(Discontinued) The S3 resources whose classification types you want to update. This data type is used as a request parameter in the <code>UpdateS3Resources</code> action. ',
  })
  .openapi('S3ResourceClassificationUpdate')

const S3ResourcesClassificationUpdateSchema = z
  .array(S3ResourceClassificationUpdateSchema)
  .openapi('S3ResourcesClassificationUpdate')

const UpdateS3ResourcesRequestSchema = z
  .object({
    memberAccountId: AWSAccountIdSchema.and(
      z
        .any()
        .openapi({
          description:
            "(Discontinued) The Amazon Web Services account ID of the Amazon Macie Classic member account whose S3 resources' classification types you want to update.",
        }),
    ).exactOptional(),
    s3ResourcesUpdate: S3ResourcesClassificationUpdateSchema.and(
      z
        .any()
        .openapi({
          description:
            '(Discontinued) The S3 resources whose classification types you want to update.',
        }),
    ),
  })
  .openapi({ required: ['s3ResourcesUpdate'], title: 'UpdateS3ResourcesRequest' })
  .openapi('UpdateS3ResourcesRequest')

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

export const postXAmzTargetMacieServiceAssociateMemberAccountRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=MacieService.AssociateMemberAccount',
  description:
    '(Discontinued) Associates a specified Amazon Web Services account with Amazon Macie Classic as a member account.',
  operationId: 'AssociateMemberAccount',
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
        .literal('MacieService.AssociateMemberAccount')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['MacieService.AssociateMemberAccount'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: AssociateMemberAccountRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    481: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    482: {
      description: 'InternalException',
      content: { 'application/json': { schema: InternalExceptionSchema } },
    },
  },
})

export const postXAmzTargetMacieServiceAssociateS3ResourcesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=MacieService.AssociateS3Resources',
  description:
    "(Discontinued) Associates specified S3 resources with Amazon Macie Classic for monitoring and data classification. If <code>memberAccountId</code> isn't specified, the action associates specified S3 resources with Macie Classic for the current Macie Classic administrator account. If <code>memberAccountId</code> is specified, the action associates specified S3 resources with Macie Classic for the specified member account.",
  operationId: 'AssociateS3Resources',
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
        .literal('MacieService.AssociateS3Resources')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['MacieService.AssociateS3Resources'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: AssociateS3ResourcesRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: AssociateS3ResourcesResultSchema } },
    },
    480: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    483: {
      description: 'InternalException',
      content: { 'application/json': { schema: InternalExceptionSchema } },
    },
  },
})

export const postXAmzTargetMacieServiceDisassociateMemberAccountRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=MacieService.DisassociateMemberAccount',
  description: '(Discontinued) Removes the specified member account from Amazon Macie Classic.',
  operationId: 'DisassociateMemberAccount',
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
        .literal('MacieService.DisassociateMemberAccount')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['MacieService.DisassociateMemberAccount'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DisassociateMemberAccountRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    481: {
      description: 'InternalException',
      content: { 'application/json': { schema: InternalExceptionSchema } },
    },
  },
})

export const postXAmzTargetMacieServiceDisassociateS3ResourcesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=MacieService.DisassociateS3Resources',
  description:
    "(Discontinued) Removes specified S3 resources from being monitored by Amazon Macie Classic. If <code>memberAccountId</code> isn't specified, the action removes specified S3 resources from Macie Classic for the current Macie Classic administrator account. If <code>memberAccountId</code> is specified, the action removes specified S3 resources from Macie Classic for the specified member account.",
  operationId: 'DisassociateS3Resources',
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
        .literal('MacieService.DisassociateS3Resources')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['MacieService.DisassociateS3Resources'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DisassociateS3ResourcesRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DisassociateS3ResourcesResultSchema } },
    },
    480: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'InternalException',
      content: { 'application/json': { schema: InternalExceptionSchema } },
    },
  },
})

export const postXAmzTargetMacieServiceListMemberAccountsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=MacieService.ListMemberAccounts',
  description:
    '(Discontinued) Lists all Amazon Macie Classic member accounts for the current Macie Classic administrator account.',
  operationId: 'ListMemberAccounts',
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
        .literal('MacieService.ListMemberAccounts')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['MacieService.ListMemberAccounts'] },
          },
        }),
    }),
    query: z.object({
      maxResults: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      nextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ListMemberAccountsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListMemberAccountsResultSchema } },
    },
    480: {
      description: 'InternalException',
      content: { 'application/json': { schema: InternalExceptionSchema } },
    },
    481: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
  },
})

export const postXAmzTargetMacieServiceListS3ResourcesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=MacieService.ListS3Resources',
  description:
    "(Discontinued) Lists all the S3 resources associated with Amazon Macie Classic. If <code>memberAccountId</code> isn't specified, the action lists the S3 resources associated with Macie Classic for the current Macie Classic administrator account. If <code>memberAccountId</code> is specified, the action lists the S3 resources associated with Macie Classic for the specified member account. ",
  operationId: 'ListS3Resources',
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
        .literal('MacieService.ListS3Resources')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['MacieService.ListS3Resources'] },
          },
        }),
    }),
    query: z.object({
      maxResults: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      nextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ListS3ResourcesRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListS3ResourcesResultSchema } },
    },
    480: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'InternalException',
      content: { 'application/json': { schema: InternalExceptionSchema } },
    },
  },
})

export const postXAmzTargetMacieServiceUpdateS3ResourcesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=MacieService.UpdateS3Resources',
  description:
    "(Discontinued) Updates the classification types for the specified S3 resources. If <code>memberAccountId</code> isn't specified, the action updates the classification types of the S3 resources associated with Amazon Macie Classic for the current Macie Classic administrator account. If <code>memberAccountId</code> is specified, the action updates the classification types of the S3 resources associated with Macie Classic for the specified member account.",
  operationId: 'UpdateS3Resources',
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
        .literal('MacieService.UpdateS3Resources')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['MacieService.UpdateS3Resources'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateS3ResourcesRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateS3ResourcesResultSchema } },
    },
    480: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'InternalException',
      content: { 'application/json': { schema: InternalExceptionSchema } },
    },
  },
})
