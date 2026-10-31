import { createRoute, z } from '@hono/zod-openapi'

const DatastoreIdSchema = z
  .string()
  .regex(/^([\p{L}\p{Z}\p{N}_.:\/=+\-%@]*)$/u)
  .min(1)
  .max(32)
  .openapi('DatastoreId')

const DatastoreArnSchema = z
  .string()
  .regex(
    /^arn:aws((-us-gov)|(-iso)|(-iso-b)|(-cn))?:healthlake:[a-zA-Z0-9-]+:[0-9]{12}:datastore\/.+?/,
  )
  .openapi('DatastoreArn')

const DatastoreStatusSchema = z
  .enum(['CREATING', 'ACTIVE', 'DELETING', 'DELETED'])
  .openapi('DatastoreStatus')

const BoundedLengthStringSchema = z
  .string()
  .regex(/[\P{M}\p{M}]{1,5000}/u)
  .min(1)
  .max(5000)
  .openapi('BoundedLengthString')

const CreateFHIRDatastoreResponseSchema = z
  .object({
    DatastoreId: DatastoreIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The AWS-generated Data Store id. This id is in the output from the initial Data Store creation call.',
        }),
    ),
    DatastoreArn: DatastoreArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The datastore ARN is generated during the creation of the Data Store and can be found in the output from the initial Data Store creation call.',
        }),
    ),
    DatastoreStatus: DatastoreStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'The status of the FHIR Data Store. Possible statuses are ‘CREATING’, ‘ACTIVE’, ‘DELETING’, ‘DELETED’.',
        }),
    ),
    DatastoreEndpoint: BoundedLengthStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The AWS endpoint for the created Data Store. For preview, only US-east-1 endpoints are supported.',
        }),
    ),
  })
  .openapi({ required: ['DatastoreId', 'DatastoreArn', 'DatastoreStatus', 'DatastoreEndpoint'] })
  .openapi('CreateFHIRDatastoreResponse')

const DatastoreNameSchema = z
  .string()
  .regex(/^([\p{L}\p{Z}\p{N}_.:\/=+\-%@]*)$/u)
  .min(1)
  .max(256)
  .openapi('DatastoreName')

const FHIRVersionSchema = z.literal('R4').openapi('FHIRVersion')

const CmkTypeSchema = z.enum(['CUSTOMER_MANAGED_KMS_KEY', 'AWS_OWNED_KMS_KEY']).openapi('CmkType')

const EncryptionKeyIDSchema = z
  .string()
  .regex(
    /(arn:aws((-us-gov)|(-iso)|(-iso-b)|(-cn))?:kms:)?([a-z]{2}-[a-z]+(-[a-z]+)?-\d:)?(\d{12}:)?(((key\/)?[a-zA-Z0-9-_]+)|(alias\/[a-zA-Z0-9:\/_-]+))/,
  )
  .min(1)
  .max(400)
  .openapi('EncryptionKeyID')

const KmsEncryptionConfigSchema = z
  .object({
    CmkType: CmkTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The type of customer-managed-key(CMK) used for encyrption. The two types of supported CMKs are customer owned CMKs and AWS owned CMKs. ',
        }),
    ),
    KmsKeyId: EncryptionKeyIDSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The KMS encryption key id/alias used to encrypt the Data Store contents at rest. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['CmkType'],
    description:
      ' The customer-managed-key(CMK) used when creating a Data Store. If a customer owned key is not specified, an AWS owned key will be used for encryption. ',
  })
  .openapi('KmsEncryptionConfig')

const SseConfigurationSchema = z
  .object({
    KmsEncryptionConfig: KmsEncryptionConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The KMS encryption configuration used to provide details for data encryption. ',
        }),
    ),
  })
  .openapi({
    required: ['KmsEncryptionConfig'],
    description:
      ' The server-side encryption key configuration for a customer provided encryption key. ',
  })
  .openapi('SseConfiguration')

const PreloadDataTypeSchema = z.literal('SYNTHEA').openapi('PreloadDataType')

const PreloadDataConfigSchema = z
  .object({
    PreloadDataType: PreloadDataTypeSchema.and(
      z
        .any()
        .openapi({
          description: 'The type of preloaded data. Only Synthea preloaded data is supported.',
        }),
    ),
  })
  .openapi({
    required: ['PreloadDataType'],
    description:
      ' The input properties for the preloaded Data Store. Only data preloaded from Synthea is supported.',
  })
  .openapi('PreloadDataConfig')

const ClientTokenStringSchema = z
  .string()
  .regex(/^[a-zA-Z0-9-]+$/)
  .min(1)
  .max(64)
  .openapi('ClientTokenString')

const TagKeySchema = z
  .string()
  .regex(/^([\p{L}\p{Z}\p{N}_.:\/=+\-@]*)$/u)
  .min(1)
  .max(128)
  .openapi('TagKey')

const TagValueSchema = z
  .string()
  .regex(/^([\p{L}\p{Z}\p{N}_.:\/=+\-@]*)$/u)
  .min(0)
  .max(256)
  .openapi('TagValue')

const TagSchema = z
  .object({
    Key: TagKeySchema.and(
      z.any().openapi({ description: ' The key portion of a tag. Tag keys are case sensitive. ' }),
    ),
    Value: TagValueSchema.and(
      z
        .any()
        .openapi({ description: ' The value portion of tag. Tag values are case sensitive. ' }),
    ),
  })
  .openapi({
    required: ['Key', 'Value'],
    description:
      ' A tag is a label consisting of a user-defined key and value. The form for tags is {"Key", "Value"} ',
  })
  .openapi('Tag')

const TagListSchema = z.array(TagSchema).min(0).max(200).openapi('TagList')

const CreateFHIRDatastoreRequestSchema = z
  .object({
    DatastoreName: DatastoreNameSchema.and(
      z.any().openapi({ description: 'The user generated name for the Data Store.' }),
    ).exactOptional(),
    DatastoreTypeVersion: FHIRVersionSchema.and(
      z
        .any()
        .openapi({
          description: 'The FHIR version of the Data Store. The only supported version is R4.',
        }),
    ),
    SseConfiguration: SseConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The server-side encryption key configuration for a customer provided encryption key specified for creating a Data Store. ',
        }),
    ).exactOptional(),
    PreloadDataConfig: PreloadDataConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            'Optional parameter to preload data upon creation of the Data Store. Currently, the only supported preloaded data is synthetic data generated from Synthea.',
        }),
    ).exactOptional(),
    ClientToken: ClientTokenStringSchema.and(
      z
        .any()
        .openapi({ description: 'Optional user provided token used for ensuring idempotency.' }),
    ).exactOptional(),
    Tags: TagListSchema.and(
      z
        .any()
        .openapi({
          description: ' Resource tags that are applied to a Data Store when it is created. ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['DatastoreTypeVersion'], title: 'CreateFHIRDatastoreRequest' })
  .openapi('CreateFHIRDatastoreRequest')

const ValidationExceptionSchema = z.any().openapi('ValidationException')

const ThrottlingExceptionSchema = z.any().openapi('ThrottlingException')

const AccessDeniedExceptionSchema = z.any().openapi('AccessDeniedException')

const InternalServerExceptionSchema = z.any().openapi('InternalServerException')

const DeleteFHIRDatastoreResponseSchema = z
  .object({
    DatastoreId: DatastoreIdSchema.and(
      z.any().openapi({ description: 'The AWS-generated ID for the Data Store to be deleted.' }),
    ),
    DatastoreArn: DatastoreArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) that gives Amazon HealthLake access permission.',
        }),
    ),
    DatastoreStatus: DatastoreStatusSchema.and(
      z
        .any()
        .openapi({
          description: 'The status of the Data Store that the user has requested to be deleted. ',
        }),
    ),
    DatastoreEndpoint: BoundedLengthStringSchema.and(
      z
        .any()
        .openapi({
          description: 'The AWS endpoint for the Data Store the user has requested to be deleted.',
        }),
    ),
  })
  .openapi({ required: ['DatastoreId', 'DatastoreArn', 'DatastoreStatus', 'DatastoreEndpoint'] })
  .openapi('DeleteFHIRDatastoreResponse')

const DeleteFHIRDatastoreRequestSchema = z
  .object({
    DatastoreId: DatastoreIdSchema.and(
      z.any().openapi({ description: ' The AWS-generated ID for the Data Store to be deleted.' }),
    ).exactOptional(),
  })
  .openapi({ title: 'DeleteFHIRDatastoreRequest', required: [] })
  .openapi('DeleteFHIRDatastoreRequest')

const ConflictExceptionSchema = z.any().openapi('ConflictException')

const ResourceNotFoundExceptionSchema = z.any().openapi('ResourceNotFoundException')

const TimestampSchema = z.iso.datetime({ offset: true }).openapi('Timestamp')

const StringSchema = z
  .string()
  .regex(/[\P{M}\p{M}]{0,10000}/u)
  .max(10000)
  .openapi('String')

const DatastorePropertiesSchema = z
  .object({
    DatastoreId: DatastoreIdSchema.and(
      z.any().openapi({ description: 'The AWS-generated ID number for the Data Store.' }),
    ),
    DatastoreArn: DatastoreArnSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Resource Name used in the creation of the Data Store.',
        }),
    ),
    DatastoreName: DatastoreNameSchema.and(
      z.any().openapi({ description: 'The user-generated name for the Data Store.' }),
    ).exactOptional(),
    DatastoreStatus: DatastoreStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            "The status of the Data Store. Possible statuses are 'CREATING', 'ACTIVE', 'DELETING', or 'DELETED'.",
        }),
    ),
    CreatedAt: TimestampSchema.and(
      z.any().openapi({ description: 'The time that a Data Store was created. ' }),
    ).exactOptional(),
    DatastoreTypeVersion: FHIRVersionSchema.and(
      z.any().openapi({ description: 'The FHIR version. Only R4 version data is supported.' }),
    ),
    DatastoreEndpoint: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "The AWS endpoint for the Data Store. Each Data Store will have it's own endpoint with Data Store ID in the endpoint URL.",
        }),
    ),
    SseConfiguration: SseConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The server-side encryption key configuration for a customer provided encryption key (CMK). ',
        }),
    ).exactOptional(),
    PreloadDataConfig: PreloadDataConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            'The preloaded data configuration for the Data Store. Only data preloaded from Synthea is supported.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: [
      'DatastoreId',
      'DatastoreArn',
      'DatastoreStatus',
      'DatastoreTypeVersion',
      'DatastoreEndpoint',
    ],
    description:
      'Displays the properties of the Data Store, including the ID, Arn, name, and the status of the Data Store.',
  })
  .openapi('DatastoreProperties')

const DescribeFHIRDatastoreResponseSchema = z
  .object({
    DatastoreProperties: DatastorePropertiesSchema.and(
      z
        .any()
        .openapi({
          description:
            'All properties associated with a Data Store, including the Data Store ID, Data Store ARN, Data Store name, Data Store status, created at, Data Store type version, and Data Store endpoint.',
        }),
    ),
  })
  .openapi({ required: ['DatastoreProperties'] })
  .openapi('DescribeFHIRDatastoreResponse')

const DescribeFHIRDatastoreRequestSchema = z
  .object({
    DatastoreId: DatastoreIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The AWS-generated Data Store id. This is part of the ‘CreateFHIRDatastore’ output.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'DescribeFHIRDatastoreRequest', required: [] })
  .openapi('DescribeFHIRDatastoreRequest')

const JobIdSchema = z
  .string()
  .regex(/^([\p{L}\p{Z}\p{N}_.:\/=+\-%@]*)$/u)
  .min(1)
  .max(32)
  .openapi('JobId')

const JobNameSchema = z
  .string()
  .regex(/^([\p{L}\p{Z}\p{N}_.:\/=+\-%@]*)$/u)
  .min(1)
  .max(64)
  .openapi('JobName')

const JobStatusSchema = z
  .enum(['SUBMITTED', 'IN_PROGRESS', 'COMPLETED_WITH_ERRORS', 'COMPLETED', 'FAILED'])
  .openapi('JobStatus')

const S3UriSchema = z
  .string()
  .regex(/s3:\/\/[a-z0-9][\.\-a-z0-9]{1,61}[a-z0-9](\/.*)?/)
  .max(1024)
  .openapi('S3Uri')

const S3ConfigurationSchema = z
  .object({
    S3Uri: S3UriSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The S3Uri is the user specified S3 location of the FHIR data to be imported into Amazon HealthLake. ',
        }),
    ),
    KmsKeyId: EncryptionKeyIDSchema.and(
      z.any().openapi({ description: ' The KMS key ID used to access the S3 bucket. ' }),
    ),
  })
  .openapi({
    required: ['S3Uri', 'KmsKeyId'],
    description:
      ' The configuration of the S3 bucket for either an import or export job. This includes assigning permissions for access. ',
  })
  .openapi('S3Configuration')

const OutputDataConfigSchema = z
  .object({
    S3Configuration: S3ConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The output data configuration that was supplied when the export job was created. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'The output data configuration that was supplied when the export job was created.',
    required: [],
  })
  .openapi('OutputDataConfig')

const IamRoleArnSchema = z
  .string()
  .regex(/arn:aws(-[^:]+)?:iam::[0-9]{12}:role\/.+/)
  .min(20)
  .max(2048)
  .openapi('IamRoleArn')

const MessageSchema = z
  .string()
  .regex(/^([\p{L}\p{Z}\p{N}_.:\/=+\-%@]*)$/u)
  .min(1)
  .max(2048)
  .openapi('Message')

const ExportJobPropertiesSchema = z
  .object({
    JobId: JobIdSchema.and(
      z.any().openapi({ description: 'The AWS generated ID for an export job.' }),
    ),
    JobName: JobNameSchema.and(
      z.any().openapi({ description: 'The user generated name for an export job.' }),
    ).exactOptional(),
    JobStatus: JobStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'The status of a FHIR export job. Possible statuses are SUBMITTED, IN_PROGRESS, COMPLETED, or FAILED.',
        }),
    ),
    SubmitTime: TimestampSchema.and(
      z.any().openapi({ description: 'The time an export job was initiated.' }),
    ),
    EndTime: TimestampSchema.and(
      z.any().openapi({ description: 'The time an export job completed.' }),
    ).exactOptional(),
    DatastoreId: DatastoreIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The AWS generated ID for the Data Store from which files are being exported for an export job.',
        }),
    ),
    OutputDataConfig: OutputDataConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            'The output data configuration that was supplied when the export job was created.',
        }),
    ),
    DataAccessRoleArn: IamRoleArnSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Resource Name used during the initiation of the job.',
        }),
    ).exactOptional(),
    Message: MessageSchema.and(
      z
        .any()
        .openapi({
          description: 'An explanation of any errors that may have occurred during the export job.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['JobId', 'JobStatus', 'SubmitTime', 'DatastoreId', 'OutputDataConfig'],
    description:
      'The properties of a FHIR export job, including the ID, ARN, name, and the status of the job.',
  })
  .openapi('ExportJobProperties')

const DescribeFHIRExportJobResponseSchema = z
  .object({
    ExportJobProperties: ExportJobPropertiesSchema.and(
      z
        .any()
        .openapi({
          description:
            'Displays the properties of the export job, including the ID, Arn, Name, and the status of the job. ',
        }),
    ),
  })
  .openapi({ required: ['ExportJobProperties'] })
  .openapi('DescribeFHIRExportJobResponse')

const DescribeFHIRExportJobRequestSchema = z
  .object({
    DatastoreId: DatastoreIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The AWS generated ID for the Data Store from which files are being exported from for an export job.',
        }),
    ),
    JobId: JobIdSchema.and(
      z.any().openapi({ description: 'The AWS generated ID for an export job.' }),
    ),
  })
  .openapi({ required: ['DatastoreId', 'JobId'], title: 'DescribeFHIRExportJobRequest' })
  .openapi('DescribeFHIRExportJobRequest')

const InputDataConfigSchema = z
  .object({
    S3Uri: S3UriSchema.and(
      z
        .any()
        .openapi({
          description:
            'The S3Uri is the user specified S3 location of the FHIR data to be imported into Amazon HealthLake. ',
        }),
    ).exactOptional(),
  })
  .openapi({ description: ' The input properties for an import job.', required: [] })
  .openapi('InputDataConfig')

const ImportJobPropertiesSchema = z
  .object({
    JobId: JobIdSchema.and(
      z.any().openapi({ description: 'The AWS-generated id number for the Import job.' }),
    ),
    JobName: JobNameSchema.and(
      z.any().openapi({ description: 'The user-generated name for an Import job.' }),
    ).exactOptional(),
    JobStatus: JobStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'The job status for an Import job. Possible statuses are SUBMITTED, IN_PROGRESS, COMPLETED, FAILED.',
        }),
    ),
    SubmitTime: TimestampSchema.and(
      z
        .any()
        .openapi({ description: 'The time that the Import job was submitted for processing.' }),
    ),
    EndTime: TimestampSchema.and(
      z.any().openapi({ description: 'The time that the Import job was completed.' }),
    ).exactOptional(),
    DatastoreId: DatastoreIdSchema.and(
      z.any().openapi({ description: 'The datastore id used when the Import job was created. ' }),
    ),
    InputDataConfig: InputDataConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            'The input data configuration that was supplied when the Import job was created.',
        }),
    ),
    JobOutputDataConfig: OutputDataConfigSchema.exactOptional(),
    DataAccessRoleArn: IamRoleArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) that gives Amazon HealthLake access to your input data.',
        }),
    ).exactOptional(),
    Message: MessageSchema.and(
      z
        .any()
        .openapi({
          description:
            'An explanation of any errors that may have occurred during the FHIR import job. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['JobId', 'JobStatus', 'SubmitTime', 'DatastoreId', 'InputDataConfig'],
    description:
      'Displays the properties of the import job, including the ID, Arn, Name, and the status of the Data Store.',
  })
  .openapi('ImportJobProperties')

const DescribeFHIRImportJobResponseSchema = z
  .object({
    ImportJobProperties: ImportJobPropertiesSchema.and(
      z
        .any()
        .openapi({
          description:
            'The properties of the Import job request, including the ID, ARN, name, and the status of the job.',
        }),
    ),
  })
  .openapi({ required: ['ImportJobProperties'] })
  .openapi('DescribeFHIRImportJobResponse')

const DescribeFHIRImportJobRequestSchema = z
  .object({
    DatastoreId: DatastoreIdSchema.and(
      z.any().openapi({ description: 'The AWS-generated ID of the Data Store.' }),
    ),
    JobId: JobIdSchema.and(z.any().openapi({ description: 'The AWS-generated job ID.' })),
  })
  .openapi({ required: ['DatastoreId', 'JobId'], title: 'DescribeFHIRImportJobRequest' })
  .openapi('DescribeFHIRImportJobRequest')

const DatastorePropertiesListSchema = z
  .array(DatastorePropertiesSchema)
  .openapi('DatastorePropertiesList')

const NextTokenSchema = z
  .string()
  .regex(/\p{ASCII}{0,8192}/u)
  .max(8192)
  .openapi('NextToken')

const ListFHIRDatastoresResponseSchema = z
  .object({
    DatastorePropertiesList: DatastorePropertiesListSchema.and(
      z.any().openapi({ description: 'All properties associated with the listed Data Stores.' }),
    ),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description: 'Pagination token that can be used to retrieve the next page of results.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['DatastorePropertiesList'] })
  .openapi('ListFHIRDatastoresResponse')

const DatastoreFilterSchema = z
  .object({
    DatastoreName: DatastoreNameSchema.and(
      z.any().openapi({ description: 'Allows the user to filter Data Store results by name.' }),
    ).exactOptional(),
    DatastoreStatus: DatastoreStatusSchema.and(
      z.any().openapi({ description: 'Allows the user to filter Data Store results by status.' }),
    ).exactOptional(),
    CreatedBefore: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'A filter that allows the user to set cutoff dates for records. All Data Stores created before the specified date will be included in the results. ',
        }),
    ).exactOptional(),
    CreatedAfter: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'A filter that allows the user to set cutoff dates for records. All Data Stores created after the specified date will be included in the results.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'The filters applied to Data Store query.', required: [] })
  .openapi('DatastoreFilter')

const MaxResultsIntegerSchema = z.int().min(1).max(500).openapi('MaxResultsInteger')

const ListFHIRDatastoresRequestSchema = z
  .object({
    Filter: DatastoreFilterSchema.and(
      z
        .any()
        .openapi({ description: 'Lists all filters associated with a FHIR Data Store request.' }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description: 'Fetches the next page of Data Stores when results are paginated.',
        }),
    ).exactOptional(),
    MaxResults: MaxResultsIntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of Data Stores returned in a single page of a ListFHIRDatastoresRequest call.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListFHIRDatastoresRequest', required: [] })
  .openapi('ListFHIRDatastoresRequest')

const ExportJobPropertiesListSchema = z
  .array(ExportJobPropertiesSchema)
  .openapi('ExportJobPropertiesList')

const ListFHIRExportJobsResponseSchema = z
  .object({
    ExportJobPropertiesList: ExportJobPropertiesListSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The properties of listed FHIR export jobs, including the ID, ARN, name, and the status of the job. ',
        }),
    ),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            ' A pagination token used to identify the next page of results to return for a ListFHIRExportJobs query. ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['ExportJobPropertiesList'] })
  .openapi('ListFHIRExportJobsResponse')

const ListFHIRExportJobsRequestSchema = z
  .object({
    DatastoreId: DatastoreIdSchema.and(
      z
        .any()
        .openapi({
          description:
            ' This parameter limits the response to the export job with the specified Data Store ID. ',
        }),
    ),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            ' A pagination token used to identify the next page of results to return for a ListFHIRExportJobs query. ',
        }),
    ).exactOptional(),
    MaxResults: MaxResultsIntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            ' This parameter limits the number of results returned for a ListFHIRExportJobs to a maximum quantity specified by the user. ',
        }),
    ).exactOptional(),
    JobName: JobNameSchema.and(
      z
        .any()
        .openapi({
          description:
            ' This parameter limits the response to the export job with the specified job name. ',
        }),
    ).exactOptional(),
    JobStatus: JobStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            ' This parameter limits the response to the export jobs with the specified job status. ',
        }),
    ).exactOptional(),
    SubmittedBefore: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            ' This parameter limits the response to FHIR export jobs submitted before a user specified date. ',
        }),
    ).exactOptional(),
    SubmittedAfter: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            ' This parameter limits the response to FHIR export jobs submitted after a user specified date. ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['DatastoreId'], title: 'ListFHIRExportJobsRequest' })
  .openapi('ListFHIRExportJobsRequest')

const ImportJobPropertiesListSchema = z
  .array(ImportJobPropertiesSchema)
  .openapi('ImportJobPropertiesList')

const ListFHIRImportJobsResponseSchema = z
  .object({
    ImportJobPropertiesList: ImportJobPropertiesListSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The properties of a listed FHIR import jobs, including the ID, ARN, name, and the status of the job. ',
        }),
    ),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            ' A pagination token used to identify the next page of results to return for a ListFHIRImportJobs query. ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['ImportJobPropertiesList'] })
  .openapi('ListFHIRImportJobsResponse')

const ListFHIRImportJobsRequestSchema = z
  .object({
    DatastoreId: DatastoreIdSchema.and(
      z
        .any()
        .openapi({
          description:
            ' This parameter limits the response to the import job with the specified Data Store ID. ',
        }),
    ),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            ' A pagination token used to identify the next page of results to return for a ListFHIRImportJobs query. ',
        }),
    ).exactOptional(),
    MaxResults: MaxResultsIntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            ' This parameter limits the number of results returned for a ListFHIRImportJobs to a maximum quantity specified by the user. ',
        }),
    ).exactOptional(),
    JobName: JobNameSchema.and(
      z
        .any()
        .openapi({
          description:
            ' This parameter limits the response to the import job with the specified job name. ',
        }),
    ).exactOptional(),
    JobStatus: JobStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            ' This parameter limits the response to the import job with the specified job status. ',
        }),
    ).exactOptional(),
    SubmittedBefore: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            ' This parameter limits the response to FHIR import jobs submitted before a user specified date. ',
        }),
    ).exactOptional(),
    SubmittedAfter: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            ' This parameter limits the response to FHIR import jobs submitted after a user specified date. ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['DatastoreId'], title: 'ListFHIRImportJobsRequest' })
  .openapi('ListFHIRImportJobsRequest')

const ListTagsForResourceResponseSchema = z
  .object({
    Tags: TagListSchema.and(
      z.any().openapi({ description: ' Returns a list of tags associated with a Data Store. ' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListTagsForResourceResponse')

const AmazonResourceNameSchema = z
  .string()
  .regex(
    /^arn:aws((-us-gov)|(-iso)|(-iso-b)|(-cn))?:healthlake:[a-z0-9-]+:\d{12}:datastore\/fhir\/.{32}/,
  )
  .min(1)
  .max(1011)
  .openapi('AmazonResourceName')

const ListTagsForResourceRequestSchema = z
  .object({
    ResourceARN: AmazonResourceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The Amazon Resource Name(ARN) of the Data Store for which tags are being added. ',
        }),
    ),
  })
  .openapi({ required: ['ResourceARN'], title: 'ListTagsForResourceRequest' })
  .openapi('ListTagsForResourceRequest')

const StartFHIRExportJobResponseSchema = z
  .object({
    JobId: JobIdSchema.and(
      z.any().openapi({ description: 'The AWS generated ID for an export job.' }),
    ),
    JobStatus: JobStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'The status of a FHIR export job. Possible statuses are SUBMITTED, IN_PROGRESS, COMPLETED, or FAILED.',
        }),
    ),
    DatastoreId: DatastoreIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The AWS generated ID for the Data Store from which files are being exported for an export job.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['JobId', 'JobStatus'] })
  .openapi('StartFHIRExportJobResponse')

const StartFHIRExportJobRequestSchema = z
  .object({
    JobName: JobNameSchema.and(
      z.any().openapi({ description: 'The user generated name for an export job.' }),
    ).exactOptional(),
    OutputDataConfig: OutputDataConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            'The output data configuration that was supplied when the export job was created.',
        }),
    ),
    DatastoreId: DatastoreIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The AWS generated ID for the Data Store from which files are being exported for an export job.',
        }),
    ),
    DataAccessRoleArn: IamRoleArnSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Resource Name used during the initiation of the job.',
        }),
    ),
    ClientToken: ClientTokenStringSchema.and(
      z
        .any()
        .openapi({ description: 'An optional user provided token used for ensuring idempotency.' }),
    ),
  })
  .openapi({
    required: ['OutputDataConfig', 'DatastoreId', 'DataAccessRoleArn', 'ClientToken'],
    title: 'StartFHIRExportJobRequest',
  })
  .openapi('StartFHIRExportJobRequest')

const StartFHIRImportJobResponseSchema = z
  .object({
    JobId: JobIdSchema.and(z.any().openapi({ description: 'The AWS-generated job ID.' })),
    JobStatus: JobStatusSchema.and(
      z.any().openapi({ description: 'The status of an import job.' }),
    ),
    DatastoreId: DatastoreIdSchema.and(
      z.any().openapi({ description: 'The AWS-generated Data Store ID.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['JobId', 'JobStatus'] })
  .openapi('StartFHIRImportJobResponse')

const StartFHIRImportJobRequestSchema = z
  .object({
    JobName: JobNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the FHIR Import job in the StartFHIRImport job request.',
        }),
    ).exactOptional(),
    InputDataConfig: InputDataConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            'The input properties of the FHIR Import job in the StartFHIRImport job request.',
        }),
    ),
    JobOutputDataConfig: OutputDataConfigSchema,
    DatastoreId: DatastoreIdSchema.and(
      z.any().openapi({ description: 'The AWS-generated Data Store ID.' }),
    ),
    DataAccessRoleArn: IamRoleArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) that gives Amazon HealthLake access permission.',
        }),
    ),
    ClientToken: ClientTokenStringSchema.and(
      z
        .any()
        .openapi({ description: 'Optional user provided token used for ensuring idempotency.' }),
    ),
  })
  .openapi({
    required: [
      'InputDataConfig',
      'JobOutputDataConfig',
      'DatastoreId',
      'DataAccessRoleArn',
      'ClientToken',
    ],
    title: 'StartFHIRImportJobRequest',
  })
  .openapi('StartFHIRImportJobRequest')

const TagResourceResponseSchema = z.object({}).openapi('TagResourceResponse')

const TagResourceRequestSchema = z
  .object({
    ResourceARN: AmazonResourceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The Amazon Resource Name(ARN)that gives Amazon HealthLake access to the Data Store which tags are being added to. ',
        }),
    ),
    Tags: TagListSchema.and(
      z
        .any()
        .openapi({
          description: ' The user specified key and value pair tags being added to a Data Store. ',
        }),
    ),
  })
  .openapi({ required: ['ResourceARN', 'Tags'], title: 'TagResourceRequest' })
  .openapi('TagResourceRequest')

const UntagResourceResponseSchema = z.object({}).openapi('UntagResourceResponse')

const TagKeyListSchema = z.array(TagKeySchema).min(0).max(200).openapi('TagKeyList')

const UntagResourceRequestSchema = z
  .object({
    ResourceARN: AmazonResourceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            ' "The Amazon Resource Name(ARN) of the Data Store for which tags are being removed ',
        }),
    ),
    TagKeys: TagKeyListSchema.and(
      z
        .any()
        .openapi({
          description: ' The keys for the tags to be removed from the Healthlake Data Store. ',
        }),
    ),
  })
  .openapi({ required: ['ResourceARN', 'TagKeys'], title: 'UntagResourceRequest' })
  .openapi('UntagResourceRequest')

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

export const postXAmzTargetHealthLakeCreateFHIRDatastoreRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=HealthLake.CreateFHIRDatastore',
  description: 'Creates a Data Store that can ingest and export FHIR formatted data.',
  operationId: 'CreateFHIRDatastore',
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
        .literal('HealthLake.CreateFHIRDatastore')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['HealthLake.CreateFHIRDatastore'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateFHIRDatastoreRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateFHIRDatastoreResponseSchema } },
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
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetHealthLakeDeleteFHIRDatastoreRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=HealthLake.DeleteFHIRDatastore',
  description: 'Deletes a Data Store. ',
  operationId: 'DeleteFHIRDatastore',
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
        .literal('HealthLake.DeleteFHIRDatastore')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['HealthLake.DeleteFHIRDatastore'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteFHIRDatastoreRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteFHIRDatastoreResponseSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    482: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    485: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetHealthLakeDescribeFHIRDatastoreRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=HealthLake.DescribeFHIRDatastore',
  description:
    'Gets the properties associated with the FHIR Data Store, including the Data Store ID, Data Store ARN, Data Store name, Data Store status, created at, Data Store type version, and Data Store endpoint.',
  operationId: 'DescribeFHIRDatastore',
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
        .literal('HealthLake.DescribeFHIRDatastore')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['HealthLake.DescribeFHIRDatastore'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeFHIRDatastoreRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeFHIRDatastoreResponseSchema } },
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

export const postXAmzTargetHealthLakeDescribeFHIRExportJobRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=HealthLake.DescribeFHIRExportJob',
  description:
    'Displays the properties of a FHIR export job, including the ID, ARN, name, and the status of the job.',
  operationId: 'DescribeFHIRExportJob',
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
        .literal('HealthLake.DescribeFHIRExportJob')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['HealthLake.DescribeFHIRExportJob'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeFHIRExportJobRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeFHIRExportJobResponseSchema } },
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

export const postXAmzTargetHealthLakeDescribeFHIRImportJobRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=HealthLake.DescribeFHIRImportJob',
  description:
    'Displays the properties of a FHIR import job, including the ID, ARN, name, and the status of the job. ',
  operationId: 'DescribeFHIRImportJob',
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
        .literal('HealthLake.DescribeFHIRImportJob')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['HealthLake.DescribeFHIRImportJob'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeFHIRImportJobRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeFHIRImportJobResponseSchema } },
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

export const postXAmzTargetHealthLakeListFHIRDatastoresRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=HealthLake.ListFHIRDatastores',
  description:
    'Lists all FHIR Data Stores that are in the user’s account, regardless of Data Store status.',
  operationId: 'ListFHIRDatastores',
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
        .literal('HealthLake.ListFHIRDatastores')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['HealthLake.ListFHIRDatastores'] },
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
      content: { 'application/json': { schema: ListFHIRDatastoresRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListFHIRDatastoresResponseSchema } },
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
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetHealthLakeListFHIRExportJobsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=HealthLake.ListFHIRExportJobs',
  description: ' Lists all FHIR export jobs associated with an account and their statuses. ',
  operationId: 'ListFHIRExportJobs',
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
        .literal('HealthLake.ListFHIRExportJobs')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['HealthLake.ListFHIRExportJobs'] },
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
      content: { 'application/json': { schema: ListFHIRExportJobsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListFHIRExportJobsResponseSchema } },
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
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetHealthLakeListFHIRImportJobsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=HealthLake.ListFHIRImportJobs',
  description: ' Lists all FHIR import jobs associated with an account and their statuses. ',
  operationId: 'ListFHIRImportJobs',
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
        .literal('HealthLake.ListFHIRImportJobs')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['HealthLake.ListFHIRImportJobs'] },
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
      content: { 'application/json': { schema: ListFHIRImportJobsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListFHIRImportJobsResponseSchema } },
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
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetHealthLakeListTagsForResourceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=HealthLake.ListTagsForResource',
  description: ' Returns a list of all existing tags associated with a Data Store. ',
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
      'X-Amz-Target': z
        .literal('HealthLake.ListTagsForResource')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['HealthLake.ListTagsForResource'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ListTagsForResourceRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListTagsForResourceResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetHealthLakeStartFHIRExportJobRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=HealthLake.StartFHIRExportJob',
  description: 'Begins a FHIR export job.',
  operationId: 'StartFHIRExportJob',
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
        .literal('HealthLake.StartFHIRExportJob')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['HealthLake.StartFHIRExportJob'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: StartFHIRExportJobRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: StartFHIRExportJobResponseSchema } },
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
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    484: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetHealthLakeStartFHIRImportJobRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=HealthLake.StartFHIRImportJob',
  description: 'Begins a FHIR Import job.',
  operationId: 'StartFHIRImportJob',
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
        .literal('HealthLake.StartFHIRImportJob')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['HealthLake.StartFHIRImportJob'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: StartFHIRImportJobRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: StartFHIRImportJobResponseSchema } },
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
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    484: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetHealthLakeTagResourceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=HealthLake.TagResource',
  description: ' Adds a user specifed key and value tag to a Data Store. ',
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
      'X-Amz-Target': z
        .literal('HealthLake.TagResource')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['HealthLake.TagResource'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: TagResourceRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: TagResourceResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetHealthLakeUntagResourceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=HealthLake.UntagResource',
  description: ' Removes tags from a Data Store. ',
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
      'X-Amz-Target': z
        .literal('HealthLake.UntagResource')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['HealthLake.UntagResource'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UntagResourceRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UntagResourceResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})
