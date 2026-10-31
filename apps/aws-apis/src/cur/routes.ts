import { createRoute, z } from '@hono/zod-openapi'

const DeleteResponseMessageSchema = z
  .string()
  .openapi({ description: 'Whether the deletion was successful or not.' })
  .openapi('DeleteResponseMessage')

const DeleteReportDefinitionResponseSchema = z
  .object({ ResponseMessage: DeleteResponseMessageSchema.exactOptional() })
  .openapi({
    description: 'If the action is successful, the service sends back an HTTP 200 response.',
    required: [],
  })
  .openapi('DeleteReportDefinitionResponse')

const ReportNameSchema = z
  .string()
  .regex(/[0-9A-Za-z!\-_.*\'()]+/)
  .max(256)
  .openapi({
    description:
      "The name of the report that you want to create. The name must be unique, is case sensitive, and can't include spaces. ",
  })
  .openapi('ReportName')

const DeleteReportDefinitionRequestSchema = z
  .object({
    ReportName: ReportNameSchema.and(
      z
        .any()
        .openapi({
          description:
            "The name of the report that you want to delete. The name must be unique, is case sensitive, and can't include spaces.",
        }),
    ).exactOptional(),
  })
  .openapi({
    title: 'DeleteReportDefinitionRequest',
    description: 'Deletes the specified report.',
    required: [],
  })
  .openapi('DeleteReportDefinitionRequest')

const InternalErrorExceptionSchema = z.any().openapi('InternalErrorException')

const ValidationExceptionSchema = z.any().openapi('ValidationException')

const TimeUnitSchema = z
  .enum(['HOURLY', 'DAILY', 'MONTHLY'])
  .openapi({ description: 'The length of time covered by the report. ' })
  .openapi('TimeUnit')

const ReportFormatSchema = z
  .enum(['textORcsv', 'Parquet'])
  .openapi({ description: 'The format that AWS saves the report in.' })
  .openapi('ReportFormat')

const CompressionFormatSchema = z
  .enum(['ZIP', 'GZIP', 'Parquet'])
  .openapi({ description: 'The compression format that AWS uses for the report.' })
  .openapi('CompressionFormat')

const SchemaElementSchema = z
  .literal('RESOURCES')
  .openapi({ description: 'Whether or not AWS includes resource IDs in the report. ' })
  .openapi('SchemaElement')

const SchemaElementListSchema = z
  .array(SchemaElementSchema)
  .openapi({
    description:
      'A list of strings that indicate the content that is included in the report, such as service or usage type.',
  })
  .openapi('SchemaElementList')

const S3BucketSchema = z
  .string()
  .regex(/[A-Za-z0-9_\.\-]+/)
  .max(256)
  .openapi({ description: 'The S3 bucket where AWS delivers the report.' })
  .openapi('S3Bucket')

const S3PrefixSchema = z
  .string()
  .regex(/[0-9A-Za-z!\-_.*\'()\/]*/)
  .max(256)
  .openapi({
    description:
      "The prefix that AWS adds to the report name when AWS delivers the report. Your prefix can't include spaces.",
  })
  .openapi('S3Prefix')

const AWSRegionSchema = z
  .enum([
    'af-south-1',
    'ap-east-1',
    'ap-south-1',
    'ap-southeast-1',
    'ap-southeast-2',
    'ap-southeast-3',
    'ap-northeast-1',
    'ap-northeast-2',
    'ap-northeast-3',
    'ca-central-1',
    'eu-central-1',
    'eu-west-1',
    'eu-west-2',
    'eu-west-3',
    'eu-north-1',
    'eu-south-1',
    'eu-south-2',
    'me-central-1',
    'me-south-1',
    'sa-east-1',
    'us-east-1',
    'us-east-2',
    'us-west-1',
    'us-west-2',
    'cn-north-1',
    'cn-northwest-1',
  ])
  .openapi({ description: 'The region of the S3 bucket that AWS delivers the report into.' })
  .openapi('AWSRegion')

const AdditionalArtifactSchema = z
  .enum(['REDSHIFT', 'QUICKSIGHT', 'ATHENA'])
  .openapi({ description: 'The types of manifest that you want AWS to create for this report.' })
  .openapi('AdditionalArtifact')

const AdditionalArtifactListSchema = z
  .array(AdditionalArtifactSchema)
  .openapi({ description: 'A list of additional artifacts.' })
  .openapi('AdditionalArtifactList')

const RefreshClosedReportsSchema = z.boolean().openapi('RefreshClosedReports')

const ReportVersioningSchema = z
  .enum(['CREATE_NEW_REPORT', 'OVERWRITE_REPORT'])
  .openapi('ReportVersioning')

const BillingViewArnSchema = z
  .string()
  .regex(/(arn:aws(-cn)?:billing::[0-9]{12}:billingview\/)?[a-zA-Z0-9_\+=\.\-@].{1,30}/)
  .max(128)
  .openapi('BillingViewArn')

const ReportDefinitionSchema = z
  .object({
    ReportName: ReportNameSchema,
    TimeUnit: TimeUnitSchema,
    Format: ReportFormatSchema,
    Compression: CompressionFormatSchema,
    AdditionalSchemaElements: SchemaElementListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of strings that indicate additional content that Amazon Web Services includes in the report, such as individual resource IDs. ',
        }),
    ),
    S3Bucket: S3BucketSchema,
    S3Prefix: S3PrefixSchema,
    S3Region: AWSRegionSchema,
    AdditionalArtifacts: AdditionalArtifactListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of manifests that you want Amazon Web Services to create for this report.',
        }),
    ).exactOptional(),
    RefreshClosedReports: RefreshClosedReportsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Whether you want Amazon Web Services to update your reports after they have been finalized if Amazon Web Services detects charges related to previous months. These charges can include refunds, credits, or support fees.',
        }),
    ).exactOptional(),
    ReportVersioning: ReportVersioningSchema.and(
      z
        .any()
        .openapi({
          description:
            'Whether you want Amazon Web Services to overwrite the previous version of each report or to deliver the report in addition to the previous versions.',
        }),
    ).exactOptional(),
    BillingViewArn: BillingViewArnSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The Amazon resource name of the billing view. You can get this value by using the billing view service public APIs. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: [
      'ReportName',
      'TimeUnit',
      'Format',
      'Compression',
      'AdditionalSchemaElements',
      'S3Bucket',
      'S3Prefix',
      'S3Region',
    ],
    description:
      'The definition of AWS Cost and Usage Report. You can specify the report name, time unit, report format, compression format, S3 bucket, additional artifacts, and schema elements in the definition. ',
  })
  .openapi('ReportDefinition')

const ReportDefinitionListSchema = z
  .array(ReportDefinitionSchema)
  .openapi({ description: 'A list of report definitions.' })
  .openapi('ReportDefinitionList')

const GenericStringSchema = z
  .string()
  .regex(/[A-Za-z0-9_\.\-=]*/)
  .max(256)
  .openapi({ description: 'A generic string.' })
  .openapi('GenericString')

const DescribeReportDefinitionsResponseSchema = z
  .object({
    ReportDefinitions: ReportDefinitionListSchema.and(
      z
        .any()
        .openapi({ description: 'A list of AWS Cost and Usage reports owned by the account.' }),
    ).exactOptional(),
    NextToken: GenericStringSchema.exactOptional(),
  })
  .openapi({
    example: {
      ReportDefinitions: [
        {
          AdditionalArtifacts: ['QUICKSIGHT'],
          AdditionalSchemaElements: ['RESOURCES'],
          Compression: 'GZIP',
          Format: 'textORcsv',
          ReportName: 'ExampleReport',
          S3Bucket: 'example-s3-bucket',
          S3Prefix: 'exampleprefix',
          S3Region: 'us-east-1',
          TimeUnit: 'HOURLY',
        },
        {
          AdditionalArtifacts: ['QUICKSIGHT'],
          AdditionalSchemaElements: ['RESOURCES'],
          Compression: 'GZIP',
          Format: 'textORcsv',
          ReportName: 'ExampleReport2',
          S3Bucket: 'example-s3-bucket',
          S3Prefix: 'exampleprefix',
          S3Region: 'us-east-1',
          TimeUnit: 'HOURLY',
        },
      ],
    },
    description: 'If the action is successful, the service sends back an HTTP 200 response.',
    required: [],
  })
  .openapi('DescribeReportDefinitionsResponse')

const MaxResultsSchema = z
  .int()
  .min(5)
  .max(5)
  .openapi({ description: 'The maximum number of results that AWS returns for the operation.' })
  .openapi('MaxResults')

const DescribeReportDefinitionsRequestSchema = z
  .object({
    MaxResults: MaxResultsSchema.exactOptional(),
    NextToken: GenericStringSchema.exactOptional(),
  })
  .openapi({
    title: 'DescribeReportDefinitionsRequest',
    description: 'Requests a list of AWS Cost and Usage reports owned by the account.',
    required: [],
  })
  .openapi('DescribeReportDefinitionsRequest')

const ModifyReportDefinitionResponseSchema = z.object({}).openapi('ModifyReportDefinitionResponse')

const ModifyReportDefinitionRequestSchema = z
  .object({ ReportName: ReportNameSchema, ReportDefinition: ReportDefinitionSchema })
  .openapi({ required: ['ReportName', 'ReportDefinition'], title: 'ModifyReportDefinitionRequest' })
  .openapi('ModifyReportDefinitionRequest')

const PutReportDefinitionResponseSchema = z
  .object({})
  .openapi({
    description:
      'If the action is successful, the service sends back an HTTP 200 response with an empty HTTP body.',
  })
  .openapi('PutReportDefinitionResponse')

const PutReportDefinitionRequestSchema = z
  .object({
    ReportDefinition: ReportDefinitionSchema.and(
      z
        .any()
        .openapi({
          description:
            'Represents the output of the PutReportDefinition operation. The content consists of the detailed metadata and data file information. ',
        }),
    ),
  })
  .openapi({
    required: ['ReportDefinition'],
    title: 'PutReportDefinitionRequest',
    description: 'Creates a Cost and Usage Report.',
  })
  .openapi('PutReportDefinitionRequest')

const DuplicateReportNameExceptionSchema = z.any().openapi('DuplicateReportNameException')

const ReportLimitReachedExceptionSchema = z.any().openapi('ReportLimitReachedException')

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

export const postXAmzTargetAWSOrigamiServiceGatewayServiceDeleteReportDefinitionRoute = createRoute(
  {
    method: 'post',
    path: '/#X-Amz-Target=AWSOrigamiServiceGatewayService.DeleteReportDefinition',
    description: 'Deletes the specified report.',
    operationId: 'DeleteReportDefinition',
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
          .literal('AWSOrigamiServiceGatewayService.DeleteReportDefinition')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['AWSOrigamiServiceGatewayService.DeleteReportDefinition'],
              },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: DeleteReportDefinitionRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: DeleteReportDefinitionResponseSchema } },
      },
      480: {
        description: 'InternalErrorException',
        content: { 'application/json': { schema: InternalErrorExceptionSchema } },
      },
      481: {
        description: 'ValidationException',
        content: { 'application/json': { schema: ValidationExceptionSchema } },
      },
    },
  },
)

export const postXAmzTargetAWSOrigamiServiceGatewayServiceDescribeReportDefinitionsRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=AWSOrigamiServiceGatewayService.DescribeReportDefinitions',
    description: 'Lists the AWS Cost and Usage reports available to this account.',
    operationId: 'DescribeReportDefinitions',
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
          .literal('AWSOrigamiServiceGatewayService.DescribeReportDefinitions')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['AWSOrigamiServiceGatewayService.DescribeReportDefinitions'],
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
        content: { 'application/json': { schema: DescribeReportDefinitionsRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: DescribeReportDefinitionsResponseSchema } },
      },
      480: {
        description: 'InternalErrorException',
        content: { 'application/json': { schema: InternalErrorExceptionSchema } },
      },
    },
  })

export const postXAmzTargetAWSOrigamiServiceGatewayServiceModifyReportDefinitionRoute = createRoute(
  {
    method: 'post',
    path: '/#X-Amz-Target=AWSOrigamiServiceGatewayService.ModifyReportDefinition',
    description: 'Allows you to programatically update your report preferences.',
    operationId: 'ModifyReportDefinition',
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
          .literal('AWSOrigamiServiceGatewayService.ModifyReportDefinition')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['AWSOrigamiServiceGatewayService.ModifyReportDefinition'],
              },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: ModifyReportDefinitionRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: ModifyReportDefinitionResponseSchema } },
      },
      480: {
        description: 'InternalErrorException',
        content: { 'application/json': { schema: InternalErrorExceptionSchema } },
      },
      481: {
        description: 'ValidationException',
        content: { 'application/json': { schema: ValidationExceptionSchema } },
      },
    },
  },
)

export const postXAmzTargetAWSOrigamiServiceGatewayServicePutReportDefinitionRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSOrigamiServiceGatewayService.PutReportDefinition',
  description: 'Creates a new report using the description that you provide.',
  operationId: 'PutReportDefinition',
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
        .literal('AWSOrigamiServiceGatewayService.PutReportDefinition')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['AWSOrigamiServiceGatewayService.PutReportDefinition'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: PutReportDefinitionRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: PutReportDefinitionResponseSchema } },
    },
    480: {
      description: 'DuplicateReportNameException',
      content: { 'application/json': { schema: DuplicateReportNameExceptionSchema } },
    },
    481: {
      description: 'ReportLimitReachedException',
      content: { 'application/json': { schema: ReportLimitReachedExceptionSchema } },
    },
    482: {
      description: 'InternalErrorException',
      content: { 'application/json': { schema: InternalErrorExceptionSchema } },
    },
    483: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})
