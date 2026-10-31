import { createRoute, z } from '@hono/zod-openapi'

const ReportIdSchema = z
  .string()
  .regex(/^[0-9A-Za-z\.\-_]+$/)
  .min(1)
  .max(255)
  .openapi('ReportId')

const DeleteReportDefinitionResultSchema = z
  .object({
    reportId: ReportIdSchema.and(
      z.any().openapi({ description: 'ID of the report that was deleted.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DeleteReportDefinitionResult')

const InternalServerExceptionSchema = z.any().openapi('InternalServerException')

const ThrottlingExceptionSchema = z.any().openapi('ThrottlingException')

const ValidationExceptionSchema = z.any().openapi('ValidationException')

const AccessDeniedExceptionSchema = z.any().openapi('AccessDeniedException')

const ReportDescriptionSchema = z
  .string()
  .regex(/.*\S.*/)
  .min(1)
  .max(1024)
  .openapi('ReportDescription')

const ReportFrequencySchema = z.enum(['MONTHLY', 'DAILY', 'ALL']).openapi('ReportFrequency')

const FormatSchema = z.enum(['CSV', 'PARQUET']).openapi('Format')

const S3BucketSchema = z
  .string()
  .regex(
    /(?=^.{3,63}$)(?!^(\d+\.)+\d+$)(^(([a-z0-9]|[a-z0-9][a-z0-9\-]*[a-z0-9])\.)*([a-z0-9]|[a-z0-9][a-z0-9\-]*[a-z0-9])$)/,
  )
  .min(3)
  .max(63)
  .openapi('S3Bucket')

const S3PrefixSchema = z
  .string()
  .regex(/.*\S.*/)
  .min(1)
  .max(512)
  .openapi('S3Prefix')

const S3LocationSchema = z
  .object({
    bucket: S3BucketSchema.and(z.any().openapi({ description: 'Name of the S3 bucket.' })),
    prefix: S3PrefixSchema.and(
      z.any().openapi({ description: 'Prefix for the location to write to.' }),
    ),
  })
  .openapi({
    required: ['bucket', 'prefix'],
    description:
      'Represents the Amazon Simple Storage Service (Amazon S3) location where AWS Application Cost Profiler reports are generated and then written to.',
  })
  .openapi('S3Location')

const TimestampSchema = z.iso.datetime({ offset: true }).openapi('Timestamp')

const GetReportDefinitionResultSchema = z
  .object({
    reportId: ReportIdSchema.and(z.any().openapi({ description: 'ID of the report retrieved.' })),
    reportDescription: ReportDescriptionSchema.and(
      z.any().openapi({ description: 'Description of the report.' }),
    ),
    reportFrequency: ReportFrequencySchema.and(
      z.any().openapi({ description: 'Cadence used to generate the report.' }),
    ),
    format: FormatSchema.and(z.any().openapi({ description: 'Format of the generated report.' })),
    destinationS3Location: S3LocationSchema.and(
      z
        .any()
        .openapi({
          description:
            'Amazon Simple Storage Service (Amazon S3) location where the report is uploaded.',
        }),
    ),
    createdAt: TimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'Timestamp (milliseconds) when this report definition was created.',
        }),
    ),
    lastUpdated: TimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'Timestamp (milliseconds) when this report definition was last updated.',
        }),
    ),
  })
  .openapi({
    required: [
      'reportId',
      'reportDescription',
      'reportFrequency',
      'format',
      'destinationS3Location',
      'createdAt',
      'lastUpdated',
    ],
  })
  .openapi('GetReportDefinitionResult')

const ImportIdSchema = z
  .string()
  .regex(/[0-9A-Za-z\.\-_]*/)
  .min(1)
  .max(255)
  .openapi('ImportId')

const ImportApplicationUsageResultSchema = z
  .object({
    importId: ImportIdSchema.and(z.any().openapi({ description: 'ID of the import request.' })),
  })
  .openapi({ required: ['importId'] })
  .openapi('ImportApplicationUsageResult')

const S3KeySchema = z
  .string()
  .regex(/.*\S.*/)
  .min(1)
  .max(512)
  .openapi('S3Key')

const S3BucketRegionSchema = z
  .enum(['ap-east-1', 'me-south-1', 'eu-south-1', 'af-south-1'])
  .openapi('S3BucketRegion')

const ReportDefinitionSchema = z
  .object({
    reportId: ReportIdSchema.and(
      z.any().openapi({ description: 'The ID of the report.' }),
    ).exactOptional(),
    reportDescription: ReportDescriptionSchema.and(
      z.any().openapi({ description: 'Description of the report' }),
    ).exactOptional(),
    reportFrequency: ReportFrequencySchema.and(
      z.any().openapi({ description: 'The cadence at which the report is generated.' }),
    ).exactOptional(),
    format: FormatSchema.and(
      z.any().openapi({ description: 'The format used for the generated reports.' }),
    ).exactOptional(),
    destinationS3Location: S3LocationSchema.and(
      z
        .any()
        .openapi({
          description:
            'The location in Amazon Simple Storage Service (Amazon S3) the reports should be saved to.',
        }),
    ).exactOptional(),
    createdAt: TimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'Timestamp (milliseconds) when this report definition was created.',
        }),
    ).exactOptional(),
    lastUpdatedAt: TimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'Timestamp (milliseconds) when this report definition was last updated.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'The configuration of a report in AWS Application Cost Profiler.',
    required: [],
  })
  .openapi('ReportDefinition')

const ReportDefinitionListSchema = z.array(ReportDefinitionSchema).openapi('ReportDefinitionList')

const TokenSchema = z
  .string()
  .regex(/^(?:[A-Za-z0-9+\/]{4})*(?:[A-Za-z0-9+\/]{2}==|[A-Za-z0-9+\/]{3}=)?$/)
  .min(1)
  .max(102400)
  .openapi('Token')

const ListReportDefinitionsResultSchema = z
  .object({
    reportDefinitions: ReportDefinitionListSchema.and(
      z.any().openapi({ description: 'The retrieved reports.' }),
    ).exactOptional(),
    nextToken: TokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The value of the next token, if it exists. Null if there are no more results.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListReportDefinitionsResult')

const PutReportDefinitionResultSchema = z
  .object({
    reportId: ReportIdSchema.and(
      z.any().openapi({ description: 'ID of the report.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PutReportDefinitionResult')

const ServiceQuotaExceededExceptionSchema = z.any().openapi('ServiceQuotaExceededException')

const UpdateReportDefinitionResultSchema = z
  .object({
    reportId: ReportIdSchema.and(
      z.any().openapi({ description: 'ID of the report.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateReportDefinitionResult')

const DeleteReportDefinitionRequestSchema = z
  .object({})
  .openapi({ title: 'DeleteReportDefinitionRequest' })
  .openapi('DeleteReportDefinitionRequest')

const GetReportDefinitionRequestSchema = z
  .object({})
  .openapi({ title: 'GetReportDefinitionRequest' })
  .openapi('GetReportDefinitionRequest')

const SourceS3LocationSchema = z
  .object({
    bucket: S3BucketSchema.and(z.any().openapi({ description: 'Name of the bucket.' })),
    key: S3KeySchema.and(z.any().openapi({ description: 'Key of the object.' })),
    region: S3BucketRegionSchema.and(
      z
        .any()
        .openapi({
          description:
            'Region of the bucket. Only required for Regions that are disabled by default. For more infomration about Regions that are disabled by default, see <a href="https://docs.aws.amazon.com/general/latest/gr/rande-manage.html#rande-manage-enable"> Enabling a Region</a> in the <i>AWS General Reference guide</i>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['bucket', 'key'],
    description:
      'Represents the Amazon Simple Storage Service (Amazon S3) location where usage data is read from.',
  })
  .openapi('SourceS3Location')

const ImportApplicationUsageRequestSchema = z
  .object({
    sourceS3Location: SourceS3LocationSchema.and(
      z.any().openapi({ description: 'Amazon S3 location to import application usage data from.' }),
    ),
  })
  .openapi({ required: ['sourceS3Location'], title: 'ImportApplicationUsageRequest' })
  .openapi('ImportApplicationUsageRequest')

const IntegerSchema = z.int().min(1).max(100).openapi('Integer')

const ListReportDefinitionsRequestSchema = z
  .object({})
  .openapi({ title: 'ListReportDefinitionsRequest' })
  .openapi('ListReportDefinitionsRequest')

const PutReportDefinitionRequestSchema = z
  .object({
    reportId: ReportIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'Required. ID of the report. You can choose any valid string matching the pattern for the ID.',
        }),
    ),
    reportDescription: ReportDescriptionSchema.and(
      z.any().openapi({ description: 'Required. Description of the report.' }),
    ),
    reportFrequency: ReportFrequencySchema.and(
      z.any().openapi({ description: 'Required. The cadence to generate the report.' }),
    ),
    format: FormatSchema.and(
      z.any().openapi({ description: 'Required. The format to use for the generated report.' }),
    ),
    destinationS3Location: S3LocationSchema.and(
      z
        .any()
        .openapi({
          description:
            'Required. Amazon Simple Storage Service (Amazon S3) location where Application Cost Profiler uploads the report.',
        }),
    ),
  })
  .openapi({
    required: [
      'reportId',
      'reportDescription',
      'reportFrequency',
      'format',
      'destinationS3Location',
    ],
    title: 'PutReportDefinitionRequest',
  })
  .openapi('PutReportDefinitionRequest')

const UpdateReportDefinitionRequestSchema = z
  .object({
    reportDescription: ReportDescriptionSchema.and(
      z.any().openapi({ description: 'Required. Description of the report.' }),
    ),
    reportFrequency: ReportFrequencySchema.and(
      z.any().openapi({ description: 'Required. The cadence to generate the report.' }),
    ),
    format: FormatSchema.and(
      z.any().openapi({ description: 'Required. The format to use for the generated report.' }),
    ),
    destinationS3Location: S3LocationSchema.and(
      z
        .any()
        .openapi({
          description:
            'Required. Amazon Simple Storage Service (Amazon S3) location where Application Cost Profiler uploads the report.',
        }),
    ),
  })
  .openapi({
    required: ['reportDescription', 'reportFrequency', 'format', 'destinationS3Location'],
    title: 'UpdateReportDefinitionRequest',
  })
  .openapi('UpdateReportDefinitionRequest')

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

export const getReportDefinitionReportIdRoute = createRoute({
  method: 'get',
  path: '/reportDefinition/{reportId}',
  description:
    'Retrieves the definition of a report already configured in AWS Application Cost Profiler.',
  operationId: 'GetReportDefinition',
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
      reportId: z
        .string()
        .regex(/^[0-9A-Za-z\.\-_]+$/)
        .min(1)
        .max(255)
        .openapi({
          param: {
            name: 'reportId',
            in: 'path',
            required: true,
            description: 'ID of the report to retrieve.',
            schema: {
              type: 'string',
              pattern: '^[0-9A-Za-z\\.\\-_]+$',
              minLength: 1,
              maxLength: 255,
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetReportDefinitionResultSchema } },
    },
    480: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    481: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    482: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
  },
})

export const putReportDefinitionReportIdRoute = createRoute({
  method: 'put',
  path: '/reportDefinition/{reportId}',
  description: 'Updates existing report in AWS Application Cost Profiler.',
  operationId: 'UpdateReportDefinition',
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
      reportId: z
        .string()
        .regex(/^[0-9A-Za-z\.\-_]+$/)
        .min(1)
        .max(255)
        .openapi({
          param: {
            name: 'reportId',
            in: 'path',
            required: true,
            description: 'Required. ID of the report to update.',
            schema: {
              type: 'string',
              pattern: '^[0-9A-Za-z\\.\\-_]+$',
              minLength: 1,
              maxLength: 255,
            },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              reportDescription: z
                .string()
                .regex(/.*\S.*/)
                .min(1)
                .max(1024)
                .openapi({ description: 'Required. Description of the report.' }),
              reportFrequency: z
                .enum(['MONTHLY', 'DAILY', 'ALL'])
                .openapi({ description: 'Required. The cadence to generate the report.' }),
              format: z
                .enum(['CSV', 'PARQUET'])
                .openapi({ description: 'Required. The format to use for the generated report.' }),
              destinationS3Location: z
                .object({
                  bucket: S3BucketSchema.and(
                    z.any().openapi({ description: 'Name of the S3 bucket.' }),
                  ).exactOptional(),
                  prefix: S3PrefixSchema.and(
                    z.any().openapi({ description: 'Prefix for the location to write to.' }),
                  ).exactOptional(),
                })
                .openapi({
                  description:
                    'Represents the Amazon Simple Storage Service (Amazon S3) location where AWS Application Cost Profiler reports are generated and then written to.',
                  required: [],
                }),
            })
            .openapi({
              required: ['reportDescription', 'reportFrequency', 'format', 'destinationS3Location'],
            }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateReportDefinitionResultSchema } },
    },
    480: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    481: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    482: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
  },
})

export const deleteReportDefinitionReportIdRoute = createRoute({
  method: 'delete',
  path: '/reportDefinition/{reportId}',
  description:
    'Deletes the specified report definition in AWS Application Cost Profiler. This stops the report from being generated.',
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
    }),
    params: z.object({
      reportId: z
        .string()
        .regex(/^[0-9A-Za-z\.\-_]+$/)
        .min(1)
        .max(255)
        .openapi({
          param: {
            name: 'reportId',
            in: 'path',
            required: true,
            description: 'Required. ID of the report to delete.',
            schema: {
              type: 'string',
              pattern: '^[0-9A-Za-z\\.\\-_]+$',
              minLength: 1,
              maxLength: 255,
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteReportDefinitionResultSchema } },
    },
    480: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    481: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    482: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
  },
})

export const postImportApplicationUsageRoute = createRoute({
  method: 'post',
  path: '/importApplicationUsage',
  description:
    '<p>Ingests application usage data from Amazon Simple Storage Service (Amazon S3).</p> <p>The data must already exist in the S3 location. As part of the action, AWS Application Cost Profiler copies the object from your S3 bucket to an S3 bucket owned by Amazon for processing asynchronously.</p>',
  operationId: 'ImportApplicationUsage',
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
              sourceS3Location: z
                .object({
                  bucket: S3BucketSchema.and(
                    z.any().openapi({ description: 'Name of the bucket.' }),
                  ).exactOptional(),
                  key: S3KeySchema.and(
                    z.any().openapi({ description: 'Key of the object.' }),
                  ).exactOptional(),
                  region: S3BucketRegionSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'Region of the bucket. Only required for Regions that are disabled by default. For more infomration about Regions that are disabled by default, see <a href="https://docs.aws.amazon.com/general/latest/gr/rande-manage.html#rande-manage-enable"> Enabling a Region</a> in the <i>AWS General Reference guide</i>.',
                      }),
                  ).exactOptional(),
                })
                .openapi({
                  description:
                    'Represents the Amazon Simple Storage Service (Amazon S3) location where usage data is read from.',
                  required: [],
                }),
            })
            .openapi({ required: ['sourceS3Location'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ImportApplicationUsageResultSchema } },
    },
    480: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    481: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    482: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
  },
})

export const getReportDefinitionRoute = createRoute({
  method: 'get',
  path: '/reportDefinition',
  description:
    '<p>Retrieves a list of all reports and their configurations for your AWS account.</p> <p>The maximum number of reports is one.</p>',
  operationId: 'ListReportDefinitions',
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
        .regex(/^(?:[A-Za-z0-9+\/]{4})*(?:[A-Za-z0-9+\/]{2}==|[A-Za-z0-9+\/]{3}=)?$/)
        .min(1)
        .max(102400)
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            required: false,
            description: 'The token value from a previous call to access the next page of results.',
            schema: {
              type: 'string',
              pattern: '^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$',
              minLength: 1,
              maxLength: 102400,
            },
          },
        }),
      maxResults: z
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
            name: 'maxResults',
            in: 'query',
            required: false,
            description: 'The maximum number of results to return.',
            schema: { type: 'integer', minimum: 1, maximum: 100 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListReportDefinitionsResultSchema } },
    },
    480: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    481: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    482: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
  },
})

export const postReportDefinitionRoute = createRoute({
  method: 'post',
  path: '/reportDefinition',
  description: 'Creates the report definition for a report in Application Cost Profiler.',
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
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              reportId: z
                .string()
                .regex(/^[0-9A-Za-z\.\-_]+$/)
                .min(1)
                .max(255)
                .openapi({
                  description:
                    'Required. ID of the report. You can choose any valid string matching the pattern for the ID.',
                }),
              reportDescription: z
                .string()
                .regex(/.*\S.*/)
                .min(1)
                .max(1024)
                .openapi({ description: 'Required. Description of the report.' }),
              reportFrequency: z
                .enum(['MONTHLY', 'DAILY', 'ALL'])
                .openapi({ description: 'Required. The cadence to generate the report.' }),
              format: z
                .enum(['CSV', 'PARQUET'])
                .openapi({ description: 'Required. The format to use for the generated report.' }),
              destinationS3Location: z
                .object({
                  bucket: S3BucketSchema.and(
                    z.any().openapi({ description: 'Name of the S3 bucket.' }),
                  ).exactOptional(),
                  prefix: S3PrefixSchema.and(
                    z.any().openapi({ description: 'Prefix for the location to write to.' }),
                  ).exactOptional(),
                })
                .openapi({
                  description:
                    'Represents the Amazon Simple Storage Service (Amazon S3) location where AWS Application Cost Profiler reports are generated and then written to.',
                  required: [],
                }),
            })
            .openapi({
              required: [
                'reportId',
                'reportDescription',
                'reportFrequency',
                'format',
                'destinationS3Location',
              ],
            }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: PutReportDefinitionResultSchema } },
    },
    480: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    481: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    482: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    484: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
  },
})
